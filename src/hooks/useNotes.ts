import { useState, useCallback, useEffect } from 'react'

const STORAGE_KEY = 'nce-notes'

type NotesMap = Record<string, string>

function load(): NotesMap {
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    if (raw) return JSON.parse(raw)
  } catch {}
  return {}
}

function save(data: NotesMap) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(data))
}

export function useNotes() {
  const [notes, setNotes] = useState<NotesMap>(load)

  useEffect(() => { save(notes) }, [notes])

  const getNote = useCallback((bookId: number, lessonId: number): string => {
    return notes[`${bookId}-${lessonId}`] || ''
  }, [notes])

  const setNote = useCallback((bookId: number, lessonId: number, content: string) => {
    setNotes(prev => ({ ...prev, [`${bookId}-${lessonId}`]: content }))
  }, [])

  const deleteNote = useCallback((bookId: number, lessonId: number) => {
    setNotes(prev => {
      const next = { ...prev }
      delete next[`${bookId}-${lessonId}`]
      return next
    })
  }, [])

  const hasNote = useCallback((bookId: number, lessonId: number): boolean => {
    return Boolean(notes[`${bookId}-${lessonId}`]?.trim())
  }, [notes])

  const noteCount = Object.values(notes).filter(n => n.trim()).length

  return { getNote, setNote, deleteNote, hasNote, noteCount }
}
