import type { BookInfo } from '../types'
import type { Lesson } from '../types'
import book1 from './book1'
import book2 from './book2'
import book3 from './book3'
import book4 from './book4'

export const books: BookInfo[] = [
  {
    id: 1,
    name: 'First Things First',
    nameCn: '英语初阶',
    description: '适合零基础学习者，从字母、音标开始，逐步掌握基本日常对话。',
    color: 'from-blue-400 to-blue-600',
    lessonCount: 144,
  },
  {
    id: 2,
    name: 'Practice and Progress',
    nameCn: '实践与进步',
    description: '适合初级水平，通过短小精悍的文章学习基础语法和句型。',
    color: 'from-emerald-400 to-emerald-600',
    lessonCount: 96,
  },
  {
    id: 3,
    name: 'Developing Skills',
    nameCn: '培养技能',
    description: '适合中级水平，文章篇幅增长，重点培养阅读和写作能力。',
    color: 'from-amber-400 to-amber-600',
    lessonCount: 60,
  },
  {
    id: 4,
    name: 'Fluency in English',
    nameCn: '流利英语',
    description: '适合中高级水平，原汁原味的英文文章，全面提升语言运用能力。',
    color: 'from-rose-400 to-rose-600',
    lessonCount: 48,
  },
]

export const bookDataMap: Record<number, Lesson[]> = {
  1: book1,
  2: book2,
  3: book3,
  4: book4,
}

export function getLesson(bookId: number, lessonId: number): Lesson | undefined {
  const lessons = bookDataMap[bookId]
  return lessons?.find((l) => l.id === lessonId)
}
