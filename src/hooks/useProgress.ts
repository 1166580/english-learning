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

  const reload = useCallback(() => {
    setProgress(loadProgress())
  }, [])

  const exportProgress = useCallback(() => {
    const data = JSON.stringify(loadProgress(), null, 2)
    const blob = new Blob([data], { type: 'application/json' })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = `nce-progress-${new Date().toISOString().slice(0, 10)}.json`
    a.click()
    URL.revokeObjectURL(url)
  }, [])

  const importProgress = useCallback(() => {
    const input = document.createElement('input')
    input.type = 'file'
    input.accept = '.json'
    input.onchange = () => {
      const file = input.files?.[0]
      if (!file) return
      const reader = new FileReader()
      reader.onload = () => {
        try {
          const data = JSON.parse(reader.result as string)
          if (data && Array.isArray(data.completedLessons)) {
            saveProgress(data)
            reload()
          } else {
            alert('文件格式不正确')
          }
        } catch {
          alert('文件解析失败，请检查文件是否完整')
        }
      }
      reader.readAsText(file)
    }
    input.click()
  }, [reload])

  const totalCompleted = progress.completedLessons.length

  return {
    progress,
    isCompleted,
    toggleComplete,
    getBookProgress,
    getCompletedCount,
    totalCompleted,
    exportProgress,
    importProgress,
  }
}
