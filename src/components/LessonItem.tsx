import { Link } from 'react-router-dom'
import { CheckCircle, Circle, ChevronRight } from 'lucide-react'
import type { Lesson } from '../types'

interface LessonItemProps {
  lesson: Lesson
  bookId: number
  completed: boolean
}

export default function LessonItem({ lesson, bookId, completed }: LessonItemProps) {
  return (
    <Link
      to={`/book/${bookId}/lesson/${lesson.id}`}
      className="flex items-center gap-4 p-4 bg-white rounded-lg border border-gray-100 hover:border-blue-200 hover:shadow-sm transition-all no-underline"
    >
      <div className="flex-shrink-0">
        {completed ? (
          <CheckCircle size={22} className="text-emerald-500" />
        ) : (
          <Circle size={22} className="text-gray-300" />
        )}
      </div>
      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-2">
          <span className="text-xs font-bold text-gray-400 bg-gray-100 px-2 py-0.5 rounded">
            第 {lesson.id} 课
          </span>
          <h3 className="text-base font-semibold text-gray-800 truncate">
            {lesson.title}
          </h3>
        </div>
        <p className="text-sm text-gray-500 mt-0.5 truncate">{lesson.titleCn}</p>
      </div>
      <ChevronRight size={18} className="text-gray-300 flex-shrink-0" />
    </Link>
  )
}
