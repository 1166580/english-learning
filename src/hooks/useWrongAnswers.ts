import { useState, useCallback, useEffect } from 'react'

const STORAGE_KEY = 'nce-wrong-answers'

export interface WrongAnswer {
  id: string
  question: string
  yourAnswer: string
  correctAnswer: string
  explanation?: string
  bookId: number
  lessonId: number
  type: 'choice' | 'fill' | 'judge'
  timestamp: number
  reviewed: boolean
}

function load(): WrongAnswer[] {
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    if (raw) return JSON.parse(raw)
  } catch {}
  return []
}

function save(data: WrongAnswer[]) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(data))
}

export function useWrongAnswers() {
  const [answers, setAnswers] = useState<WrongAnswer[]>(load)

  useEffect(() => { save(answers) }, [answers])

  const addWrong = useCallback((item: Omit<WrongAnswer, 'id' | 'timestamp' | 'reviewed'>) => {
    const id = `${item.bookId}-${item.lessonId}-${Date.now()}`
    setAnswers(prev => {
      // Avoid duplicates
      const exists = prev.some(a =>
        a.question === item.question && a.correctAnswer === item.correctAnswer
      )
      if (exists) return prev
      return [{ ...item, id, timestamp: Date.now(), reviewed: false }, ...prev]
    })
  }, [])

  const markReviewed = useCallback((id: string) => {
    setAnswers(prev => prev.map(a => a.id === id ? { ...a, reviewed: true } : a))
  }, [])

  const removeWrong = useCallback((id: string) => {
    setAnswers(prev => prev.filter(a => a.id !== id))
  }, [])

  const clearAll = useCallback(() => {
    setAnswers([])
  }, [])

  const unreviewed = answers.filter(a => !a.reviewed)
  const reviewed = answers.filter(a => a.reviewed)

  return {
    answers,
    unreviewed,
    reviewed,
    addWrong,
    markReviewed,
    removeWrong,
    clearAll,
  }
}
