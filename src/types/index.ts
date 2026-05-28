export interface VocabWord {
  word: string
  phonetic: string
  meaning: string
  partOfSpeech?: string
}

export interface SentenceExplanation {
  sentence: string
  translation: string
  explanation: string
}

export interface GrammarSection {
  title: string
  content: string
  examples?: { en: string; cn: string }[]
}

export interface PatternDrill {
  pattern: string
  substitutions: { en: string; cn: string }[]
}

export interface Exercise {
  type: 'choice' | 'fill' | 'judge'
  question: string
  options?: string[]
  answer: string
  explanation?: string
}

export interface Lesson {
  id: number
  title: string
  titleCn: string
  text: string[]
  textCn: string[]
  vocabulary: VocabWord[]
  notes: string[]
  audioUrl?: string
  tags?: string[]
  difficulty?: 1 | 2 | 3 | 4 | 5
  summary?: string
  summaryEn?: string
  sentenceExplanations?: SentenceExplanation[]
  grammarSections?: GrammarSection[]
  patternDrills?: PatternDrill[]
  exercises?: Exercise[]
}

export interface BookInfo {
  id: number
  name: string
  nameCn: string
  description: string
  color: string
  lessonCount: number
}

export interface Progress {
  completedLessons: string[]
  lastStudyDate: string
}

export interface StudySession {
  date: string
  bookId: number
  lessonId: number
  duration: number
  timestamp: number
}

export interface UserStats {
  sessions: StudySession[]
  totalWords: number
  streakDays: number
  longestStreak: number
  lastStudyDate: string
}

export interface UserProfile {
  uid: string
  displayName: string
  email: string
  photoURL: string
  bio: string
  createdAt: number
  stats: {
    totalLessons: number
    totalWords: number
    streakDays: number
  }
}

export interface Post {
  id: string
  userId: string
  userName: string
  userAvatar: string
  type: 'discussion' | 'question' | 'share'
  title: string
  content: string
  bookId?: number
  lessonId?: number
  likes: string[]
  commentCount: number
  createdAt: number
}

export interface Comment {
  id: string
  userId: string
  userName: string
  userAvatar: string
  content: string
  likes: string[]
  createdAt: number
}
