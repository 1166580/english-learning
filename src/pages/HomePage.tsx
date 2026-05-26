import { BookOpen, Flame } from 'lucide-react'
import { books } from '../data'
import useProgress from '../hooks/useProgress'
import BookCard from '../components/BookCard'

export default function HomePage() {
  const { getBookProgress, getCompletedCount, totalCompleted } = useProgress()

  const totalLessons = books.reduce((sum, b) => sum + b.lessonCount, 0)

  return (
    <div className="space-y-8">
      {/* Hero Banner */}
      <div className="bg-gradient-to-r from-blue-600 to-indigo-700 rounded-2xl p-8 text-white shadow-lg">
        <div className="flex items-center gap-3 mb-3">
          <Flame size={28} className="text-amber-400" />
          <h1 className="text-2xl font-bold m-0">每天进步一点点</h1>
        </div>
        <p className="text-blue-100 text-lg mb-4">
          坚持学习新概念英语，从入门到精通
        </p>
        <div className="flex gap-6 text-sm">
          <div className="bg-white/20 rounded-lg px-4 py-2">
            <div className="text-2xl font-bold">{totalCompleted}</div>
            <div className="text-blue-100">已完成课时</div>
          </div>
          <div className="bg-white/20 rounded-lg px-4 py-2">
            <div className="text-2xl font-bold">{totalLessons}</div>
            <div className="text-blue-100">全部课时</div>
          </div>
          <div className="bg-white/20 rounded-lg px-4 py-2">
            <div className="text-2xl font-bold">{books.length}</div>
            <div className="text-blue-100">学习阶段</div>
          </div>
        </div>
      </div>

      {/* Book Selection */}
      <div>
        <div className="flex items-center gap-2 mb-4">
          <BookOpen size={22} className="text-blue-600" />
          <h2 className="text-lg font-bold text-gray-800 m-0">选择教材</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
          {books.map((book) => (
            <BookCard
              key={book.id}
              book={book}
              progress={getBookProgress(book.id, book.lessonCount)}
              completedCount={getCompletedCount(book.id)}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
