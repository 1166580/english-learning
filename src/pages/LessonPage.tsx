import { useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { ArrowLeft, ChevronLeft, ChevronRight, CheckCircle, Circle, Volume2, BookOpen, Languages, FileText, Eye } from 'lucide-react'
import { getLesson, books, bookDataMap } from '../data'
import useProgress from '../hooks/useProgress'
import VocabularyTable from '../components/VocabularyTable'

type ViewMode = 'bilingual' | 'english' | 'chinese'

export default function LessonPage() {
  const { id, lessonId } = useParams()
  const bookId = Number(id)
  const lessonNum = Number(lessonId)
  const lesson = getLesson(bookId, lessonNum)
  const book = books.find((b) => b.id === bookId)
  const { isCompleted, toggleComplete } = useProgress()

  const [viewMode, setViewMode] = useState<ViewMode>('english')
  const completed = isCompleted(bookId, lessonNum)

  const lessons = bookDataMap[bookId] || []
  const currentIndex = lessons.findIndex((l) => l.id === lessonNum)
  const prevLesson = currentIndex > 0 ? lessons[currentIndex - 1] : null
  const nextLesson = currentIndex < lessons.length - 1 ? lessons[currentIndex + 1] : null

  const speakText = (text: string) => {
    if ('speechSynthesis' in window) {
      speechSynthesis.cancel()
      const utterance = new SpeechSynthesisUtterance(text)
      utterance.lang = 'en-US'
      utterance.rate = 0.8
      speechSynthesis.speak(utterance)
    }
  }

  if (!lesson || !book) {
    return (
      <div className="text-center py-20">
        <h2 className="text-2xl font-bold text-gray-400">未找到该课文</h2>
        <Link to="/" className="text-blue-600 mt-4 inline-block">返回首页</Link>
      </div>
    )
  }

  const viewButtons: { mode: ViewMode; label: string; icon: React.ReactNode }[] = [
    { mode: 'english', label: '英文', icon: <FileText size={14} /> },
    { mode: 'bilingual', label: '对照', icon: <Languages size={14} /> },
    { mode: 'chinese', label: '中文', icon: <Eye size={14} /> },
  ]

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
        <span className="text-xs text-gray-400">
          {currentIndex + 1} / {lessons.length}
        </span>
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
          onClick={() => speakText(lesson.text.join('. '))}
          className="mt-3 inline-flex items-center gap-1.5 text-sm text-blue-600 bg-blue-50 hover:bg-blue-100 px-3 py-1.5 rounded-lg transition-colors cursor-pointer"
          title="朗读课文"
        >
          <Volume2 size={16} />
          朗读课文
        </button>
      </div>

      {/* View Mode Toggle */}
      <div className="flex items-center gap-1 bg-white rounded-lg p-1 shadow-sm border border-gray-100 w-fit">
        {viewButtons.map(({ mode, label, icon }) => (
          <button
            key={mode}
            onClick={() => setViewMode(mode)}
            className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md text-sm font-medium transition-colors cursor-pointer ${
              viewMode === mode
                ? 'bg-blue-600 text-white'
                : 'text-gray-600 hover:bg-gray-100'
            }`}
          >
            {icon}
            {label}
          </button>
        ))}
      </div>

      {/* Text Content */}
      <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
        <div className="flex items-center gap-2 mb-4">
          <BookOpen size={18} className="text-blue-600" />
          <h2 className="text-lg font-bold text-gray-800 m-0">
            {viewMode === 'chinese' ? '中文翻译' : '课文原文'}
          </h2>
        </div>
        {lesson.text.map((para, i) => (
          <div key={i} className="mb-4 last:mb-0">
            {(viewMode === 'english' || viewMode === 'bilingual') && (
              <p
                className="text-gray-700 leading-relaxed text-justify cursor-pointer hover:text-blue-700 transition-colors"
                onClick={() => speakText(para)}
                title="点击朗读此句"
              >
                {para}
              </p>
            )}
            {(viewMode === 'chinese' || viewMode === 'bilingual') && (
              <p className={viewMode === 'bilingual' ? 'text-gray-400 text-sm mt-1 border-l-2 border-gray-200 pl-3' : 'text-gray-700 leading-relaxed text-justify'}>
                {lesson.textCn[i]}
              </p>
            )}
          </div>
        ))}
      </div>

      {/* Vocabulary */}
      <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
        <div className="flex items-center gap-2 mb-4">
          <span className="text-lg">📝</span>
          <h2 className="text-lg font-bold text-gray-800 m-0">生词表</h2>
        </div>
        <VocabularyTable words={lesson.vocabulary} onSpeak={speakText} />
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
      <div>
        <button
          onClick={() => toggleComplete(bookId, lessonNum)}
          className={`w-full flex items-center justify-center gap-2 py-3 rounded-xl font-bold text-base transition-all cursor-pointer ${
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

      {/* Prev / Next Navigation */}
      <div className="grid grid-cols-2 gap-3 pb-8">
        {prevLesson ? (
          <Link
            to={`/book/${bookId}/lesson/${prevLesson.id}`}
            className="flex items-center gap-2 p-4 bg-white rounded-xl border border-gray-100 hover:border-blue-200 hover:shadow-sm transition-all no-underline group"
          >
            <ChevronLeft size={18} className="text-gray-400 group-hover:text-blue-600" />
            <div className="min-w-0">
              <div className="text-xs text-gray-400">上一课</div>
              <div className="text-sm font-semibold text-gray-700 truncate">{prevLesson.title}</div>
            </div>
          </Link>
        ) : (
          <div />
        )}
        {nextLesson ? (
          <Link
            to={`/book/${bookId}/lesson/${nextLesson.id}`}
            className="flex items-center justify-end gap-2 p-4 bg-white rounded-xl border border-gray-100 hover:border-blue-200 hover:shadow-sm transition-all no-underline group text-right"
          >
            <div className="min-w-0">
              <div className="text-xs text-gray-400">下一课</div>
              <div className="text-sm font-semibold text-gray-700 truncate">{nextLesson.title}</div>
            </div>
            <ChevronRight size={18} className="text-gray-400 group-hover:text-blue-600" />
          </Link>
        ) : (
          <div />
        )}
      </div>
    </div>
  )
}
