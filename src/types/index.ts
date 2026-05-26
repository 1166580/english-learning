export interface VocabWord {
  word: string
  phonetic: string
  meaning: string
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
