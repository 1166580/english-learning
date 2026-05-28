import { useState } from 'react'
import { Link } from 'react-router-dom'
import { CheckCircle, Trash2, BookOpen } from 'lucide-react'
import { useWrongAnswers, type WrongAnswer } from '../hooks/useWrongAnswers'
import { books } from '../data'

export default function WrongAnswersPage() {
  const { answers, unreviewed, reviewed, markReviewed, removeWrong, clearAll } = useWrongAnswers()
  const [showFilter, setShowFilter] = useState<'all' | 'unreviewed' | 'reviewed'>('all')
  const [bookFilter, setBookFilter] = useState(0)

  const filtered = (showFilter === 'unreviewed' ? unreviewed : showFilter === 'reviewed' ? reviewed : answers)
    .filter(a => bookFilter === 0 || a.bookId === bookFilter)

  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-2xl font-bold text-gray-800 dark:text-gray-200 m-0">错题本</h1>
          <p className="text-sm text-gray-500 mt-1">共 {answers.length} 道错题，{unreviewed.length} 道未复习</p>
        </div>
        {answers.length > 0 && (
          <button onClick={() => { if (confirm('确定清空所有错题？')) clearAll() }}
            className="flex items-center gap-1 px-3 py-1.5 text-sm text-red-500 bg-red-50 dark:bg-red-900/20 rounded-lg cursor-pointer border-0">
            <Trash2 size={14} />清空
          </button>
        )}
      </div>

      {/* Filters */}
      <div className="flex flex-wrap gap-2 mb-4">
        {([['all', '全部'], ['unreviewed', '未复习'], ['reviewed', '已复习']] as const).map(([key, label]) => (
          <button key={key} onClick={() => setShowFilter(key)}
            className={`px-3 py-1 rounded-full text-xs font-medium cursor-pointer border-0 ${showFilter === key ? 'bg-blue-600 text-white' : 'bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300'}`}>
            {label}
          </button>
        ))}
        <div className="flex-1" />
        <select value={bookFilter} onChange={e => setBookFilter(Number(e.target.value))}
          className="px-2 py-1 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-lg text-xs text-gray-600 dark:text-gray-300 focus:outline-none">
          <option value={0}>全部教材</option>
          {books.map(b => <option key={b.id} value={b.id}>第{b.id}册</option>)}
        </select>
      </div>

      {/* List */}
      {filtered.length === 0 ? (
        <div className="text-center py-16">
          <CheckCircle size={48} className="mx-auto text-green-300 mb-4" />
          <p className="text-gray-400">{answers.length === 0 ? '还没有错题，去练习测验挑战一下吧！' : '没有符合条件的错题'}</p>
          {answers.length === 0 && (
            <Link to="/practice" className="inline-flex items-center gap-1 mt-3 px-4 py-2 bg-blue-600 text-white rounded-lg text-sm no-underline">
              <BookOpen size={14} />去练习
            </Link>
          )}
        </div>
      ) : (
        <div className="space-y-3">
          {filtered.map(item => (
            <WrongCard key={item.id} item={item} onReview={() => markReviewed(item.id)} onRemove={() => removeWrong(item.id)} />
          ))}
        </div>
      )}
    </div>
  )
}

function WrongCard({ item, onReview, onRemove }: { item: WrongAnswer; onReview: () => void; onRemove: () => void }) {
  const [showAnswer, setShowAnswer] = useState(false)

  return (
    <div className={`bg-white dark:bg-gray-800 rounded-xl p-4 shadow-sm border ${item.reviewed ? 'border-green-200 dark:border-green-800' : 'border-gray-100 dark:border-gray-700'}`}>
      <div className="flex items-start justify-between mb-2">
        <div className="flex items-center gap-2">
          <span className={`text-xs px-2 py-0.5 rounded-full ${
            item.type === 'choice' ? 'bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400' :
            item.type === 'fill' ? 'bg-orange-50 dark:bg-orange-900/30 text-orange-600 dark:text-orange-400' :
            'bg-green-50 dark:bg-green-900/30 text-green-600 dark:text-green-400'
          }`}>
            {item.type === 'choice' ? '选择' : item.type === 'fill' ? '填空' : '判断'}
          </span>
          <span className="text-xs text-gray-400">第{item.bookId}册 · 第{item.lessonId}课</span>
          {item.reviewed && <span className="text-xs text-green-500">已复习</span>}
        </div>
        <button onClick={onRemove} className="text-gray-300 hover:text-red-400 cursor-pointer bg-transparent border-0">
          <Trash2 size={14} />
        </button>
      </div>

      <p className="text-sm font-medium text-gray-800 dark:text-gray-200 mb-2">{item.question}</p>

      <div className="flex items-center gap-4 text-sm mb-2">
        <span className="text-red-500">你的答案：{item.yourAnswer}</span>
        <span className="text-green-600 dark:text-green-400">正确答案：{item.correctAnswer}</span>
      </div>

      {item.explanation && (
        <p className="text-xs text-gray-400 mb-2">{item.explanation}</p>
      )}

      <div className="flex gap-2">
        <button onClick={() => setShowAnswer(s => !s)}
          className="px-2 py-1 text-xs bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 rounded cursor-pointer border-0">
          {showAnswer ? '隐藏' : '查看'}解析
        </button>
        {!item.reviewed && (
          <button onClick={onReview}
            className="flex items-center gap-1 px-2 py-1 text-xs bg-green-50 dark:bg-green-900/20 text-green-600 dark:text-green-400 rounded cursor-pointer border-0">
            <CheckCircle size={12} />标记已复习
          </button>
        )}
      </div>

      {showAnswer && item.explanation && (
        <div className="mt-2 p-2 bg-blue-50 dark:bg-blue-900/20 rounded text-xs text-blue-700 dark:text-blue-300">
          {item.explanation}
        </div>
      )}
    </div>
  )
}
