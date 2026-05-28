import { useState, useEffect, useCallback } from 'react'

const STORAGE_KEY = 'nce-achievements'

export interface Achievement {
  id: string
  name: string
  desc: string
  icon: string
  condition: string
  unlocked: boolean
  unlockedAt?: number
}

const ACHIEVEMENT_DEFS: Omit<Achievement, 'unlocked' | 'unlockedAt'>[] = [
  { id: 'first-lesson', name: '初学者', desc: '完成第一课', icon: '📚', condition: '完成1课' },
  { id: 'lessons-10', name: '勤奋学习者', desc: '完成10课', icon: '📖', condition: '完成10课' },
  { id: 'lessons-50', name: '学习达人', desc: '完成50课', icon: '🎓', condition: '完成50课' },
  { id: 'lessons-100', name: '学霸', desc: '完成100课', icon: '🏆', condition: '完成100课' },
  { id: 'lessons-all', name: '全科学霸', desc: '完成所有课程', icon: '👑', condition: '完成348课' },
  { id: 'book1-done', name: '第一册毕业', desc: '完成第一册所有课程', icon: '📗', condition: '完成第一册' },
  { id: 'book2-done', name: '第二册毕业', desc: '完成第二册所有课程', icon: '📘', condition: '完成第二册' },
  { id: 'book3-done', name: '第三册毕业', desc: '完成第三册所有课程', icon: '📙', condition: '完成第三册' },
  { id: 'book4-done', name: '第四册毕业', desc: '完成第四册所有课程', icon: '📕', condition: '完成第四册' },
  { id: 'streak-3', name: '三天打鱼', desc: '连续学习3天', icon: '🔥', condition: '连续3天' },
  { id: 'streak-7', name: '一周坚持', desc: '连续学习7天', icon: '⚡', condition: '连续7天' },
  { id: 'streak-30', name: '月度之星', desc: '连续学习30天', icon: '🌟', condition: '连续30天' },
  { id: 'words-100', name: '词汇新手', desc: '学习100个单词', icon: '📝', condition: '学习100词' },
  { id: 'words-500', name: '词汇达人', desc: '学习500个单词', icon: '📰', condition: '学习500词' },
  { id: 'words-1000', name: '词汇大师', desc: '学习1000个单词', icon: '💎', condition: '学习1000词' },
  { id: 'time-1h', name: '一小时学习', desc: '累计学习1小时', icon: '⏰', condition: '累计1小时' },
  { id: 'time-10h', name: '十小时学习', desc: '累计学习10小时', icon: '⏱️', condition: '累计10小时' },
  { id: 'time-50h', name: '五十小时学习', desc: '累计学习50小时', icon: '🕰️', condition: '累计50小时' },
  { id: 'flashcard-50', name: '闪卡新手', desc: '使用闪卡复习50个单词', icon: '🃏', condition: '复习50词' },
  { id: 'practice-10', name: '练习达人', desc: '完成10次练习测验', icon: '✅', condition: '完成10次测验' },
]

function load(): Record<string, number> {
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    if (raw) return JSON.parse(raw)
  } catch {}
  return {}
}

function save(data: Record<string, number>) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(data))
}

export function useAchievements() {
  const [unlocked, setUnlocked] = useState<Record<string, number>>(load)

  useEffect(() => { save(unlocked) }, [unlocked])

  const achievements: Achievement[] = ACHIEVEMENT_DEFS.map(d => ({
    ...d,
    unlocked: Boolean(unlocked[d.id]),
    unlockedAt: unlocked[d.id],
  }))

  const unlock = useCallback((id: string) => {
    setUnlocked(prev => {
      if (prev[id]) return prev
      return { ...prev, [id]: Date.now() }
    })
  }, [])

  const checkAchievements = useCallback((stats: {
    completedLessons: number
    streakDays: number
    totalWords: number
    totalDuration: number
    bookProgress: Record<number, number>
  }) => {
    const newlyUnlocked: string[] = []
    const tryUnlock = (id: string) => {
      if (!unlocked[id]) {
        newlyUnlocked.push(id)
      }
    }

    if (stats.completedLessons >= 1) tryUnlock('first-lesson')
    if (stats.completedLessons >= 10) tryUnlock('lessons-10')
    if (stats.completedLessons >= 50) tryUnlock('lessons-50')
    if (stats.completedLessons >= 100) tryUnlock('lessons-100')
    if (stats.completedLessons >= 348) tryUnlock('lessons-all')

    if (stats.bookProgress[1] >= 144) tryUnlock('book1-done')
    if (stats.bookProgress[2] >= 96) tryUnlock('book2-done')
    if (stats.bookProgress[3] >= 60) tryUnlock('book3-done')
    if (stats.bookProgress[4] >= 48) tryUnlock('book4-done')

    if (stats.streakDays >= 3) tryUnlock('streak-3')
    if (stats.streakDays >= 7) tryUnlock('streak-7')
    if (stats.streakDays >= 30) tryUnlock('streak-30')

    if (stats.totalWords >= 100) tryUnlock('words-100')
    if (stats.totalWords >= 500) tryUnlock('words-500')
    if (stats.totalWords >= 1000) tryUnlock('words-1000')

    if (stats.totalDuration >= 3600) tryUnlock('time-1h')
    if (stats.totalDuration >= 36000) tryUnlock('time-10h')
    if (stats.totalDuration >= 180000) tryUnlock('time-50h')

    newlyUnlocked.forEach(id => unlock(id))
    return newlyUnlocked
  }, [unlocked, unlock])

  const unlockedCount = Object.keys(unlocked).length
  const totalCount = ACHIEVEMENT_DEFS.length

  return {
    achievements,
    unlockedCount,
    totalCount,
    unlock,
    checkAchievements,
  }
}
