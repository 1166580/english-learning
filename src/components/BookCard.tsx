import { Link } from 'react-router-dom'
import { BookOpen } from 'lucide-react'
import type { BookInfo } from '../types'
import ProgressBar from './ProgressBar'

interface BookCardProps {
  book: BookInfo
  progress: number
  completedCount: number
}

export default function BookCard({ book, progress, completedCount }: BookCardProps) {
  return (
    <Link
      to={`/book/${book.id}`}
      className="block bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden no-underline hover:-translate-y-1"
    >
      <div className={`h-2 bg-gradient-to-r ${book.color}`} />
      <div className="p-6">
        <div className="flex items-start justify-between mb-3">
          <div>
            <span className="text-xs font-bold text-gray-400 uppercase tracking-wide">
              第 {book.id} 册
            </span>
            <h2 className="text-xl font-bold text-gray-800 mt-1">{book.nameCn}</h2>
            <p className="text-sm text-gray-400 mt-0.5">{book.name}</p>
          </div>
          <div className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center flex-shrink-0">
            <BookOpen size={20} className="text-blue-600" />
          </div>
        </div>
        <p className="text-sm text-gray-500 mb-4 line-clamp-2">{book.description}</p>
        <div className="flex items-center justify-between text-xs text-gray-400 mb-2">
          <span>学习进度</span>
          <span>
            {completedCount} / {book.lessonCount} 课
          </span>
        </div>
        <ProgressBar value={progress} size="sm" />
        <div className="mt-3 text-right text-xs text-blue-600 font-medium">
          {progress > 0 ? '继续学习 →' : '开始学习 →'}
        </div>
      </div>
    </Link>
  )
}
