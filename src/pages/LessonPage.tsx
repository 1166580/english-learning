import { useState, useEffect, useRef } from 'react'
import { useParams, Link, useNavigate } from 'react-router-dom'
import { ArrowLeft, ChevronLeft, ChevronRight, CheckCircle, Circle, Volume2, BookOpen, Languages, FileText, Eye, List, X, Star, HelpCircle, Lightbulb, PenTool, MessageSquare, Send } from 'lucide-react'
import { getLesson, books, bookDataMap } from '../data'
import useProgress from '../hooks/useProgress'
import { useStudyData } from '../hooks/useStudyData'
import { useAuth } from '../hooks/useAuth'
import { useFirestore } from '../hooks/useFirestore'
import { getVideoId } from '../data/videoMap'
import BilibiliPlayer from '../components/BilibiliPlayer'
import VocabularyTable from '../components/VocabularyTable'
import CommentCard from '../components/CommentCard'
import AuthModal from '../components/AuthModal'
import type { Comment } from '../types'

type ViewMode = 'bilingual' | 'english' | 'chinese'

export default function LessonPage() {
  const { id, lessonId } = useParams()
  const navigate = useNavigate()
  const bookId = Number(id)
  const lessonNum = Number(lessonId)
  const lesson = getLesson(bookId, lessonNum)
  const book = books.find((b) => b.id === bookId)
  const { isCompleted, toggleComplete } = useProgress()

  const studyData = useStudyData()
  const startTimeRef = useRef(Date.now())

  useEffect(() => {
    startTimeRef.current = Date.now()
    return () => {
      const duration = (Date.now() - startTimeRef.current) / 1000
      if (duration > 5) {
        studyData.recordSession(bookId, lessonNum, duration)
        const wordCount = lesson?.vocabulary?.length || 0
        if (wordCount > 0) studyData.addWords(wordCount)
      }
    }
  }, [bookId, lessonNum])

  const [viewMode, setViewMode] = useState<ViewMode>('english')
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [showAnswers, setShowAnswers] = useState<Record<number, boolean>>({})
  const completed = isCompleted(bookId, lessonNum)
  const videoId = getVideoId(bookId, lessonNum)

  // Comments
  const { user } = useAuth()
  const { getComments, addComment, toggleCommentLike, canUse: firestoreReady } = useFirestore()
  const [lessonComments, setLessonComments] = useState<Comment[]>([])
  const [newComment, setNewComment] = useState('')
  const [showAuth, setShowAuth] = useState(false)
  const postId = `${bookId}-${lessonNum}`

  useEffect(() => {
    if (firestoreReady) {
      getComments(postId).then(setLessonComments).catch(() => {})
    }
  }, [postId, firestoreReady])

  const handleAddComment = async () => {
    if (!user || !newComment.trim()) return
    await addComment(postId, {
      userId: user.uid,
      userName: user.displayName || '匿名',
      userAvatar: user.photoURL || '',
      content: newComment.trim(),
    })
    setNewComment('')
    getComments(postId).then(setLessonComments)
  }

  const handleCommentLike = async (commentId: string) => {
    if (!user) return
    await toggleCommentLike(postId, commentId, user.uid)
    getComments(postId).then(setLessonComments)
  }

  const lessons = bookDataMap[bookId] || []
  const currentIndex = lessons.findIndex((l) => l.id === lessonNum)
  const prevLesson = currentIndex > 0 ? lessons[currentIndex - 1] : null
  const nextLesson = currentIndex < lessons.length - 1 ? lessons[currentIndex + 1] : null

  const speakText = (text: string) => {
    if (!('speechSynthesis' in window)) return
    speechSynthesis.cancel()
    const utterance = new SpeechSynthesisUtterance(text)
    utterance.lang = 'en-US'
    utterance.rate = 0.8
    const voices = speechSynthesis.getVoices()
    if (voices.length > 0) {
      const enVoice = voices.find(v => v.lang.startsWith('en'))
      if (enVoice) utterance.voice = enVoice
      speechSynthesis.speak(utterance)
    } else {
      speechSynthesis.addEventListener('voiceschanged', () => {
        const loaded = speechSynthesis.getVoices()
        const enVoice = loaded.find(v => v.lang.startsWith('en'))
        if (enVoice) utterance.voice = enVoice
        speechSynthesis.speak(utterance)
      }, { once: true })
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

  const hasExercises = lesson.exercises && lesson.exercises.length > 0
  const hasGrammar = lesson.grammarSections && lesson.grammarSections.length > 0
  const hasPatterns = lesson.patternDrills && lesson.patternDrills.length > 0
  const hasSentenceExpl = lesson.sentenceExplanations && lesson.sentenceExplanations.length > 0

  return (
    <div className="flex gap-6 max-w-6xl mx-auto">
      {/* Sidebar - Desktop */}
      <aside className="hidden lg:block w-64 flex-shrink-0">
        <div className="sticky top-20 bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden max-h-[calc(100vh-6rem)] overflow-y-auto">
          <div className="px-4 py-3 bg-gray-50 border-b border-gray-100">
            <Link to={`/book/${bookId}`} className="text-sm font-bold text-blue-600 no-underline hover:underline">
              {book.nameCn}
            </Link>
            <p className="text-xs text-gray-400 m-0 mt-0.5">共 {lessons.length} 课</p>
          </div>
          <div className="divide-y divide-gray-50">
            {lessons.map((l) => {
              const isActive = l.id === lessonNum
              const done = isCompleted(bookId, l.id)
              return (
                <button
                  key={l.id}
                  onClick={() => navigate(`/book/${bookId}/lesson/${l.id}`)}
                  className={`w-full text-left px-4 py-2.5 text-sm transition-colors cursor-pointer flex items-center gap-2 ${
                    isActive ? 'bg-blue-50 text-blue-700 font-semibold' : 'text-gray-600 hover:bg-gray-50'
                  }`}
                >
                  {done ? (
                    <CheckCircle size={14} className="text-emerald-500 flex-shrink-0" />
                  ) : (
                    <Circle size={14} className="text-gray-300 flex-shrink-0" />
                  )}
                  <span className="truncate">第{l.id}课 {l.title}</span>
                </button>
              )
            })}
          </div>
        </div>
      </aside>

      {/* Mobile Sidebar Overlay */}
      {sidebarOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <div className="absolute inset-0 bg-black/30" onClick={() => setSidebarOpen(false)} />
          <div className="absolute left-0 top-0 bottom-0 w-72 bg-white shadow-xl overflow-y-auto">
            <div className="flex items-center justify-between px-4 py-3 border-b border-gray-100">
              <span className="font-bold text-gray-800">{book.nameCn}</span>
              <button onClick={() => setSidebarOpen(false)} className="text-gray-400 hover:text-gray-600 cursor-pointer">
                <X size={20} />
              </button>
            </div>
            <div className="divide-y divide-gray-50">
              {lessons.map((l) => {
                const isActive = l.id === lessonNum
                const done = isCompleted(bookId, l.id)
                return (
                  <button
                    key={l.id}
                    onClick={() => { navigate(`/book/${bookId}/lesson/${l.id}`); setSidebarOpen(false) }}
                    className={`w-full text-left px-4 py-2.5 text-sm transition-colors cursor-pointer flex items-center gap-2 ${
                      isActive ? 'bg-blue-50 text-blue-700 font-semibold' : 'text-gray-600 hover:bg-gray-50'
                    }`}
                  >
                    {done ? (
                      <CheckCircle size={14} className="text-emerald-500 flex-shrink-0" />
                    ) : (
                      <Circle size={14} className="text-gray-300 flex-shrink-0" />
                    )}
                    <span className="truncate">第{l.id}课 {l.title}</span>
                  </button>
                )
              })}
            </div>
          </div>
        </div>
      )}

      {/* Main Content */}
      <div className="flex-1 min-w-0 space-y-6">
        {/* Top Bar */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <button
              onClick={() => setSidebarOpen(true)}
              className="lg:hidden inline-flex items-center gap-1 text-sm text-gray-500 hover:text-blue-600 transition-colors cursor-pointer"
            >
              <List size={18} />
            </button>
            <Link
              to={`/book/${bookId}`}
              className="inline-flex items-center gap-1 text-sm text-gray-500 hover:text-blue-600 transition-colors no-underline"
            >
              <ArrowLeft size={16} />
              返回 {book.nameCn}
            </Link>
          </div>
          <span className="text-xs text-gray-400">
            {currentIndex + 1} / {lessons.length}
          </span>
        </div>

        {/* Lesson Header */}
        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
          <div className="flex items-center gap-2 mb-2 flex-wrap">
            <span className="text-xs font-bold text-blue-600 bg-blue-50 px-2 py-0.5 rounded">
              第 {lesson.id} 课
            </span>
            <span className="text-xs text-gray-400">第 {book.id} 册</span>
            {lesson.difficulty && (
              <div className="flex items-center gap-0.5 ml-2">
                {Array.from({ length: 5 }, (_, i) => (
                  <Star key={i} size={12} className={i < lesson.difficulty! ? 'text-amber-400 fill-amber-400' : 'text-gray-200'} />
                ))}
              </div>
            )}
          </div>
          <h1 className="text-2xl font-bold text-gray-800 m-0">{lesson.title}</h1>
          <p className="text-gray-500 mt-1">{lesson.titleCn}</p>
          {lesson.tags && lesson.tags.length > 0 && (
            <div className="flex flex-wrap gap-1.5 mt-2">
              {lesson.tags.map((tag, i) => (
                <span key={i} className="text-xs px-2 py-0.5 rounded bg-blue-50 text-blue-600 font-medium">
                  {tag}
                </span>
              ))}
            </div>
          )}
          <button
            onClick={() => speakText(lesson.text.join('. '))}
            className="mt-3 inline-flex items-center gap-1.5 text-sm text-blue-600 bg-blue-50 hover:bg-blue-100 px-3 py-1.5 rounded-lg transition-colors cursor-pointer"
            title="朗读课文"
          >
            <Volume2 size={16} />
            朗读课文
          </button>
        </div>

        {/* Video Player */}
        {videoId && <BilibiliPlayer bvid={videoId} title={lesson.title} />}

        {/* Summary */}
        {lesson.summary && (
          <div className="bg-gradient-to-r from-sky-50 to-blue-50 rounded-xl p-5 border border-sky-200">
            <div className="flex items-center gap-2 mb-2">
              <BookOpen size={16} className="text-sky-600" />
              <h3 className="text-sm font-bold text-sky-800 m-0">课文概要</h3>
            </div>
            <p className="text-sm text-sky-900 m-0">{lesson.summary}</p>
            {lesson.summaryEn && (
              <p className="text-sm text-sky-600 mt-1 m-0 italic">{lesson.summaryEn}</p>
            )}
          </div>
        )}

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

        {/* Sentence Explanations */}
        {hasSentenceExpl && (
          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
            <div className="flex items-center gap-2 mb-4">
              <Lightbulb size={18} className="text-amber-500" />
              <h2 className="text-lg font-bold text-gray-800 m-0">课文理解</h2>
            </div>
            <div className="space-y-4">
              {lesson.sentenceExplanations!.map((se, i) => (
                <div key={i} className="border-l-3 border-amber-300 pl-4">
                  <p className="text-base font-semibold text-gray-800 m-0 cursor-pointer hover:text-blue-600" onClick={() => speakText(se.sentence)}>
                    {se.sentence}
                  </p>
                  <p className="text-sm text-gray-500 m-0">{se.translation}</p>
                  <p className="text-sm text-gray-600 mt-1 m-0">{se.explanation}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Vocabulary */}
        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
          <div className="flex items-center gap-2 mb-4">
            <span className="text-lg">📝</span>
            <h2 className="text-lg font-bold text-gray-800 m-0">生词表</h2>
          </div>
          <VocabularyTable words={lesson.vocabulary} onSpeak={speakText} />
        </div>

        {/* Grammar Sections */}
        {hasGrammar && (
          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
            <div className="flex items-center gap-2 mb-4">
              <PenTool size={18} className="text-purple-600" />
              <h2 className="text-lg font-bold text-gray-800 m-0">语法知识</h2>
            </div>
            <div className="space-y-6">
              {lesson.grammarSections!.map((gs, i) => (
                <div key={i}>
                  <h3 className="text-base font-bold text-purple-700 mb-2 m-0">{gs.title}</h3>
                  <p className="text-sm text-gray-700 leading-relaxed whitespace-pre-line m-0">{gs.content}</p>
                  {gs.examples && gs.examples.length > 0 && (
                    <div className="mt-3 bg-purple-50 rounded-lg p-4">
                      <table className="w-full text-sm">
                        <thead>
                          <tr className="border-b border-purple-200">
                            <th className="text-left py-1 font-semibold text-purple-700">英文</th>
                            <th className="text-left py-1 font-semibold text-purple-700">中文</th>
                          </tr>
                        </thead>
                        <tbody>
                          {gs.examples.map((ex, j) => (
                            <tr key={j} className="border-b border-purple-100 last:border-0">
                              <td className="py-1.5 text-gray-700 cursor-pointer hover:text-purple-600" onClick={() => speakText(ex.en)}>{ex.en}</td>
                              <td className="py-1.5 text-gray-500">{ex.cn}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Pattern Drills */}
        {hasPatterns && (
          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
            <div className="flex items-center gap-2 mb-4">
              <BookOpen size={18} className="text-emerald-600" />
              <h2 className="text-lg font-bold text-gray-800 m-0">句型练习</h2>
            </div>
            <div className="space-y-4">
              {lesson.patternDrills!.map((pd, i) => (
                <div key={i}>
                  <p className="text-sm font-semibold text-emerald-700 mb-2 m-0">{pd.pattern}</p>
                  <div className="bg-emerald-50 rounded-lg p-3 space-y-1">
                    {pd.substitutions.map((s, j) => (
                      <p key={j} className="text-sm m-0">
                        <span className="text-gray-700 cursor-pointer hover:text-emerald-600" onClick={() => speakText(s.en)}>{s.en}</span>
                        <span className="text-gray-400 ml-2">{s.cn}</span>
                      </p>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

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

        {/* Exercises */}
        {hasExercises && (
          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
            <div className="flex items-center gap-2 mb-4">
              <HelpCircle size={18} className="text-rose-500" />
              <h2 className="text-lg font-bold text-gray-800 m-0">练习题</h2>
            </div>
            <div className="space-y-6">
              {lesson.exercises!.map((ex, i) => (
                <div key={i} className="border border-gray-100 rounded-lg p-4">
                  <div className="flex items-start gap-2 mb-2">
                    <span className="text-xs font-bold text-rose-600 bg-rose-50 px-2 py-0.5 rounded flex-shrink-0">
                      {ex.type === 'choice' ? '选择' : ex.type === 'fill' ? '填空' : '判断'}
                    </span>
                    <p className="text-sm font-medium text-gray-800 m-0">{ex.question}</p>
                  </div>
                  {ex.options && (
                    <div className="ml-6 space-y-1 mb-2">
                      {ex.options.map((opt, j) => (
                        <p key={j} className="text-sm text-gray-600 m-0">{opt}</p>
                      ))}
                    </div>
                  )}
                  <button
                    onClick={() => setShowAnswers((prev) => ({ ...prev, [i]: !prev[i] }))}
                    className="ml-6 text-xs text-blue-600 hover:text-blue-800 cursor-pointer"
                  >
                    {showAnswers[i] ? '隐藏答案' : '显示答案'}
                  </button>
                  {showAnswers[i] && (
                    <div className="ml-6 mt-2 bg-emerald-50 rounded p-3">
                      <p className="text-sm font-semibold text-emerald-700 m-0">答案：{ex.answer}</p>
                      {ex.explanation && (
                        <p className="text-sm text-gray-600 mt-1 m-0">{ex.explanation}</p>
                      )}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

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

        {/* Lesson Comments */}
        {firestoreReady && (
          <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100 mb-4">
            <div className="flex items-center gap-2 mb-3">
              <MessageSquare size={18} className="text-blue-600" />
              <h3 className="text-sm font-bold text-gray-800 m-0">课文讨论</h3>
              <span className="text-xs text-gray-400">({lessonComments.length})</span>
            </div>

            {lessonComments.length > 0 && (
              <div className="space-y-0 mb-3">
                {lessonComments.map(c => (
                  <CommentCard
                    key={c.id}
                    comment={c}
                    currentUserId={user?.uid}
                    onLike={() => handleCommentLike(c.id)}
                  />
                ))}
              </div>
            )}

            {user ? (
              <div className="flex gap-2">
                <input
                  type="text"
                  value={newComment}
                  onChange={e => setNewComment(e.target.value)}
                  onKeyDown={e => e.key === 'Enter' && handleAddComment()}
                  placeholder="发表评论..."
                  className="flex-1 px-3 py-1.5 bg-gray-50 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <button
                  onClick={handleAddComment}
                  disabled={!newComment.trim()}
                  className="px-3 py-1.5 bg-blue-600 text-white rounded-lg text-sm disabled:opacity-50 cursor-pointer transition-colors"
                >
                  <Send size={14} />
                </button>
              </div>
            ) : (
              <button
                onClick={() => setShowAuth(true)}
                className="w-full py-2 text-xs text-blue-600 bg-blue-50 rounded-lg cursor-pointer border-0 hover:bg-blue-100 transition-colors"
              >
                登录后参与讨论
              </button>
            )}
          </div>
        )}

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
      <AuthModal open={showAuth} onClose={() => setShowAuth(false)} />
    </div>
  )
}
