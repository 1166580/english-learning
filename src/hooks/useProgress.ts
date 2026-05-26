import { useState, useCallback } from 'react'
import type { Progress } from '../types'

const STORAGE_KEY = 'nce-progress'

function loadProgress(): Progress {
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    if (raw) return JSON.parse(raw)
  } catch {}
  return { completedLessons: [], lastStudyDate: '' }
}

function saveProgress(progress: Progress): void {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(progress))
}

export default function useProgress() {
  const [progress, setProgress] = useState<Progress>(loadProgress)

  const isCompleted = useCallback(
    (bookId: number, lessonId: number): boolean => {
      return progress.completedLessons.includes(`${bookId}-${lessonId}`)
    },
    [progress]
  )

  const toggleComplete = useCallback(
    (bookId: number, lessonId: number) => {
      setProgress((prev) => {
        const key = `${bookId}-${lessonId}`
        const next: Progress = {
          completedLessons: prev.completedLessons.includes(key)
            ? prev.completedLessons.filter((k) => k !== key)
            : [...prev.completedLessons, key],
          lastStudyDate: new Date().toISOString(),
        }
        saveProgress(next)
        return next
      })
    },
    []
  )

  const getBookProgress = useCallback(
    (bookId: number, totalLessons: number): number => {
      const completed = progress.completedLessons.filter((k) =>
        k.startsWith(`${bookId}-`)
      ).length
      return Math.round((completed / totalLessons) * 100)
    },
    [progress]
  )

  const getCompletedCount = useCallback(
    (bookId: number): number => {
      return progress.completedLessons.filter((k) => k.startsWith(`${bookId}-`)).length
    },
    [progress]
  )

  const totalCompleted = progress.completedLessons.length

  return {
    progress,
    isCompleted,
    toggleComplete,
    getBookProgress,
    getCompletedCount,
    totalCompleted,
  }
}
