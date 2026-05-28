import { useState, useEffect, useCallback } from 'react'
import type { StudySession, UserStats } from '../types'

const STORAGE_KEY = 'nce-study-data'

function getDefaultStats(): UserStats {
  return {
    sessions: [],
    totalWords: 0,
    streakDays: 0,
    longestStreak: 0,
    lastStudyDate: '',
  }
}

function loadStats(): UserStats {
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    if (raw) return { ...getDefaultStats(), ...JSON.parse(raw) }
  } catch {}
  return getDefaultStats()
}

function saveStats(stats: UserStats) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(stats))
}

function calcStreak(sessions: StudySession[]): { current: number; longest: number } {
  if (sessions.length === 0) return { current: 0, longest: 0 }
  const dates = [...new Set(sessions.map(s => s.date))].sort().reverse()
  const today = new Date().toISOString().slice(0, 10)
  const yesterday = new Date(Date.now() - 86400000).toISOString().slice(0, 10)

  if (dates[0] !== today && dates[0] !== yesterday) return { current: 0, longest: calcLongestStreak(dates) }

  let current = 1
  for (let i = 1; i < dates.length; i++) {
    const prev = new Date(dates[i - 1])
    const curr = new Date(dates[i])
    const diff = (prev.getTime() - curr.getTime()) / 86400000
    if (diff === 1) current++
    else break
  }
  return { current, longest: Math.max(current, calcLongestStreak(dates)) }
}

function calcLongestStreak(dates: string[]): number {
  if (dates.length === 0) return 0
  let longest = 1
  let current = 1
  const sorted = [...dates].sort()
  for (let i = 1; i < sorted.length; i++) {
    const prev = new Date(sorted[i - 1])
    const curr = new Date(sorted[i])
    const diff = (curr.getTime() - prev.getTime()) / 86400000
    if (diff === 1) { current++; longest = Math.max(longest, current) }
    else if (diff > 1) current = 1
  }
  return longest
}

export function useStudyData() {
  const [stats, setStats] = useState<UserStats>(loadStats)

  useEffect(() => {
    saveStats(stats)
  }, [stats])

  const recordSession = useCallback((bookId: number, lessonId: number, duration: number) => {
    setStats(prev => {
      const today = new Date().toISOString().slice(0, 10)
      const session: StudySession = {
        date: today,
        bookId,
        lessonId,
        duration: Math.max(0, Math.round(duration)),
        timestamp: Date.now(),
      }
      const sessions = [...prev.sessions, session]
      const { current, longest } = calcStreak(sessions)
      return {
        ...prev,
        sessions,
        streakDays: current,
        longestStreak: longest,
        lastStudyDate: today,
      }
    })
  }, [])

  const addWords = useCallback((count: number) => {
    setStats(prev => ({ ...prev, totalWords: prev.totalWords + count }))
  }, [])

  const getStudyDays = useCallback(() => {
    return new Set(stats.sessions.map(s => s.date)).size
  }, [stats.sessions])

  const getTotalDuration = useCallback(() => {
    return stats.sessions.reduce((sum, s) => sum + s.duration, 0)
  }, [stats.sessions])

  const getTodayDuration = useCallback(() => {
    const today = new Date().toISOString().slice(0, 10)
    return stats.sessions.filter(s => s.date === today).reduce((sum, s) => sum + s.duration, 0)
  }, [stats.sessions])

  const getRecentSessions = useCallback((days: number = 7) => {
    const cutoff = new Date(Date.now() - days * 86400000).toISOString().slice(0, 10)
    return stats.sessions.filter(s => s.date >= cutoff)
  }, [stats.sessions])

  const getDailyDurations = useCallback((days: number = 7) => {
    const result: { date: string; duration: number }[] = []
    for (let i = days - 1; i >= 0; i--) {
      const date = new Date(Date.now() - i * 86400000).toISOString().slice(0, 10)
      const duration = stats.sessions.filter(s => s.date === date).reduce((sum, s) => sum + s.duration, 0)
      result.push({ date, duration })
    }
    return result
  }, [stats.sessions])

  const getBookLessons = useCallback((bookId: number) => {
    const lessons = new Set(
      stats.sessions.filter(s => s.bookId === bookId).map(s => s.lessonId)
    )
    return lessons.size
  }, [stats.sessions])

  const isLessonStudied = useCallback((bookId: number, lessonId: number) => {
    return stats.sessions.some(s => s.bookId === bookId && s.lessonId === lessonId)
  }, [stats.sessions])

  const getStudiedDates = useCallback((): Set<string> => {
    return new Set(stats.sessions.map(s => s.date))
  }, [stats.sessions])

  const exportData = useCallback(() => {
    return JSON.stringify(stats, null, 2)
  }, [stats])

  const importData = useCallback((json: string) => {
    try {
      const data = JSON.parse(json) as UserStats
      setStats({ ...getDefaultStats(), ...data })
      return true
    } catch {
      return false
    }
  }, [])

  const clearData = useCallback(() => {
    setStats(getDefaultStats())
  }, [])

  return {
    stats,
    recordSession,
    addWords,
    getStudyDays,
    getTotalDuration,
    getTodayDuration,
    getRecentSessions,
    getDailyDurations,
    getBookLessons,
    isLessonStudied,
    getStudiedDates,
    exportData,
    importData,
    clearData,
  }
}
