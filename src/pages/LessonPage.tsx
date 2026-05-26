import { useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { ArrowLeft, ChevronDown, ChevronUp, CheckCircle, Circle, Volume2, BookOpen } from 'lucide-react'
import { getLesson, books } from '../data'
import useProgress from '../hooks/useProgress'
import VocabularyTable from '../components/VocabularyTable'

export default function LessonPage() {
  const { id, lessonId } = useParams()
  const bookId = Number(id)
  const lessonNum = Number(lessonId)
  const lesson = getLesson(bookId, lessonNum)
  const book = books.find((b) => b.id === bookId)
  const { isCompleted, toggleComplete } = useProgress()

  const [showTranslation, setShowTranslation] = useState(false)
  const completed = isCompleted(bookId, lessonNum)

  if (!lesson || !book) {
    return (
      <div className="text-center py-20">
        <h2 className="text-2xl font-bold text-gray-400">未找到该课文</h2>
        <Link to="/" className="text-blue-600 mt-4 inline-block">返回首页</Link>
      </div>
    )
  }

  return (
    <div className="space-y-6 max-w-3xl mx-auto">
      {/* Navigation */}
      <div className="flex items-center justify-between">
        <Link
          to={`/book/${bookId}`}
          className="inline-flex items-center gap-1 text-sm text-gray-500 hover:text-blue-600 transition-colors no-underline"
        >
          <ArrowLeft size={16} />
          返回 {book.nameCn}
        </Link>
      </div>

      {/* Lesson Header */}
      <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
        <div className="flex items-center gap-2 mb-2">
          <span className="text-xs font-bold text-blue-600 bg-blue-50 px-2 py-0.5 rounded">
            第 {lesson.id} 课
          </span>
          <span className="text-xs text-gray-400">第 {book.id} 册</span>
        </div>
        <h1 className="text-2xl font-bold text-gray-800 m-0">{lesson.title}</h1>
        <p className="text-gray-500 mt-1">{lesson.titleCn}</p>
        <button
          className="mt-3 inline-flex items-center gap-1.5 text-sm text-blue-600 bg-blue-50 hover:bg-blue-100 px-3 py-1.5 rounded-lg transition-colors"
          title="音频播放（待接入）"
        >
          <Volume2 size={16} />
          播放音频
        </button>
      </div>

      {/* English Text */}
      <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
        <div className="flex items-center gap-2 mb-4">
          <BookOpen size={18} className="text-blue-600" />
          <h2 className="text-lg font-bold text-gray-800 m-0">课文原文</h2>
        </div>
        {lesson.text.map((para, i) => (
          <p key={i} className="text-gray-700 leading-relaxed mb-3 text-justify">
            {para}
          </p>
        ))}
      </div>

      {/* Translation (Collapsible) */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
        <button
          onClick={() => setShowTranslation(!showTranslation)}
          className="w-full flex items-center justify-between p-4 hover:bg-gray-50 transition-colors"
        >
          <div className="flex items-center gap-2">
            <span className="text-lg">📖</span>
            <h2 className="text-lg font-bold text-gray-800 m-0">中文翻译</h2>
          </div>
          {showTranslation ? (
            <ChevronUp size={20} className="text-gray-400" />
          ) : (
            <ChevronDown size={20} className="text-gray-400" />
          )}
        </button>
        {showTranslation && (
          <div className="px-4 pb-4 pt-0 border-t border-gray-100">
            {lesson.textCn.map((para, i) => (
              <p key={i} className="text-gray-600 leading-relaxed mb-3 text-justify mt-3">
                {para}
              </p>
            ))}
          </div>
        )}
      </div>

      {/* Vocabulary */}
      <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
        <div className="flex items-center gap-2 mb-4">
          <span className="text-lg">📝</span>
          <h2 className="text-lg font-bold text-gray-800 m-0">生词表</h2>
        </div>
        <VocabularyTable words={lesson.vocabulary} />
      </div>

      {/* Notes */}
      <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
        <div className="flex items-center gap-2 mb-4">
          <span className="text-lg">💡</span>
          <h2 className="text-lg font-bold text-gray-800 m-0">知识点笔记</h2>
        </div>
        <ul className="space-y-2">
          {lesson.notes.map((note, i) => (
            <li key={i} className="flex gap-2 text-sm text-gray-600">
              <span className="text-amber-500 font-bold flex-shrink-0 mt-0.5">•</span>
              <span>{note}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Complete Button */}
      <div className="pb-8">
        <button
          onClick={() => toggleComplete(bookId, lessonNum)}
          className={`w-full flex items-center justify-center gap-2 py-3 rounded-xl font-bold text-base transition-all ${
            completed
              ? 'bg-emerald-50 text-emerald-700 border-2 border-emerald-300 hover:bg-emerald-100'
              : 'bg-blue-600 text-white hover:bg-blue-700 shadow-md'
          }`}
        >
          {completed ? (
            <>
              <CheckCircle size={20} />
              已完成学习
            </>
          ) : (
            <>
              <Circle size={20} />
              标记为已完成
            </>
          )}
        </button>
        {completed && (
          <p className="text-center text-xs text-gray-400 mt-2">
            再次点击可取消完成状态
          </p>
        )}
      </div>
    </div>
  )
}
