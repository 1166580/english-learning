import { useParams, Link } from 'react-router-dom'
import { ArrowLeft, BookOpen } from 'lucide-react'
import { books, bookDataMap } from '../data'
import useProgress from '../hooks/useProgress'
import ProgressBar from '../components/ProgressBar'
import LessonItem from '../components/LessonItem'

export default function BookPage() {
  const { id } = useParams()
  const bookId = Number(id)
  const book = books.find((b) => b.id === bookId)
  const lessons = bookDataMap[bookId] || []
  const { getBookProgress, getCompletedCount, isCompleted } = useProgress()

  if (!book) {
    return (
      <div className="text-center py-20">
        <h2 className="text-2xl font-bold text-gray-400">未找到该教材</h2>
        <Link to="/" className="text-blue-600 mt-4 inline-block">返回首页</Link>
      </div>
    )
  }

  const completedCount = getCompletedCount(bookId)
  const progress = getBookProgress(bookId, lessons.length)

  return (
    <div className="space-y-6">
      {/* Back Link */}
      <Link
        to="/"
        className="inline-flex items-center gap-1 text-sm text-gray-500 hover:text-blue-600 transition-colors no-underline"
      >
        <ArrowLeft size={16} />
        返回首页
      </Link>

      {/* Book Header */}
      <div className={`bg-gradient-to-r ${book.color} rounded-xl p-6 text-white shadow-md`}>
        <div className="flex items-center gap-3 mb-2">
          <BookOpen size={24} />
          <div>
            <span className="text-xs opacity-80">第 {book.id} 册</span>
            <h1 className="text-xl font-bold m-0">{book.nameCn}</h1>
          </div>
        </div>
        <p className="text-sm opacity-80 mb-3">{book.description}</p>
        <div className="flex items-center justify-between text-xs mb-2">
          <span>已学完 {completedCount} / {lessons.length} 课（本册共 {book.lessonCount} 课）</span>
          <span>{progress}%</span>
        </div>
        <ProgressBar value={progress} size="sm" />
      </div>

      {/* Lesson List */}
      <div>
        <h2 className="text-lg font-bold text-gray-800 mb-3">课文列表</h2>
        {lessons.length === 0 ? (
          <div className="text-center py-10 text-gray-400">
            <p>该册内容正在建设中，敬请期待...</p>
          </div>
        ) : (
          <div className="space-y-2">
            {lessons.map((lesson) => (
              <LessonItem
                key={lesson.id}
                lesson={lesson}
                bookId={bookId}
                completed={isCompleted(bookId, lesson.id)}
              />
            ))}
            <div className="text-center py-6 text-sm text-gray-400">
              更多课文内容正在建设中...
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
