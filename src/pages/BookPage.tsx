import { useParams, Link, useNavigate } from 'react-router-dom'
import { BookOpen } from 'lucide-react'
import { books, bookDataMap } from '../data'
import useProgress from '../hooks/useProgress'
import ProgressBar from '../components/ProgressBar'
import LessonItem from '../components/LessonItem'

const bookDescriptions: Record<number, { goal: string; details: string[] }> = {
  1: {
    goal: '掌握后达到初中毕业英语水平；学会1000基础词汇和常用口语表达。',
    details: [
      '基础词汇：通过简单对话和文本建立基础词汇量。',
      '发音与语音：学习正确发音方法，掌握所有音标。',
      '语法：动词第三人称单数、一般现在时和过去式等基础语法。',
      '阅读理解：简单的对话和短文，提高阅读理解能力。',
    ],
  },
  2: {
    goal: '掌握后达到高中毕业英语水平；具备基本的阅读和写作能力。',
    details: [
      '语法深化：过去进行时、现在完成时、被动语态等中级语法。',
      '句型训练：通过关键句型分析掌握英语表达方式。',
      '阅读提升：文章篇幅增长，培养阅读理解能力。',
      '写作入门：摘要写作和作文练习中的串联造句。',
    ],
  },
  3: {
    goal: '全面提升听说读写技能，达到大学英语四级水平。',
    details: [
      '精读训练：原汁原味的精品文章，语言优雅、句型工整。',
      '句型分析：领悟英文句型的精练、优美和可模仿性。',
      '写作提升：分析句子内在逻辑关系，运用到英文写作中。',
      '综合技能：听、说、读、写四项基本技能全面提升。',
    ],
  },
  4: {
    goal: '品味英语精髓，真正掌握英语语言精华。',
    details: [
      '高级阅读：涵盖文化、经济、哲学、艺术等学科。',
      '语言鉴赏：文字精美独到，蕴涵深厚哲思和美学。',
      '思维训练：西方文化独特的思维方式和表达方式。',
      '流利表达：达到能够自如运用英语的水平。',
    ],
  },
}

export default function BookPage() {
  const { id } = useParams()
  const navigate = useNavigate()
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
  const desc = bookDescriptions[book.id] || { goal: '', details: [] }

  return (
    <div className="space-y-6">
      {/* Book Tabs */}
      <div className="bg-white rounded-lg p-1 shadow-sm border border-gray-100 flex gap-1 overflow-x-auto">
        {books.map((b) => (
          <button
            key={b.id}
            onClick={() => navigate(`/book/${b.id}`)}
            className={`flex-shrink-0 px-4 py-2 rounded-md text-sm font-medium transition-colors cursor-pointer ${
              b.id === bookId
                ? `bg-gradient-to-r ${b.color} text-white shadow-sm`
                : 'text-gray-600 hover:bg-gray-100'
            }`}
          >
            第{b.id}册 {b.nameCn}
          </button>
        ))}
      </div>

      {/* Book Info Card */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
        <div className={`h-2 bg-gradient-to-r ${book.color}`} />
        <div className="p-6">
          <div className="flex items-start gap-4">
            <div className={`w-16 h-20 rounded-lg bg-gradient-to-b ${book.color} flex items-center justify-center text-white font-bold text-lg shadow-md flex-shrink-0`}>
              {book.id}
            </div>
            <div className="flex-1">
              <h1 className="text-xl font-bold text-gray-800 m-0">
                《{book.nameCn}》
              </h1>
              <p className="text-sm text-gray-400 m-0">{book.name}</p>
              <p className="text-sm text-gray-500 mt-2 m-0">{book.description}</p>
            </div>
          </div>

          <div className="mt-4 p-4 bg-gray-50 rounded-lg">
            <p className="text-sm font-semibold text-gray-700 mb-2 m-0">学习目标</p>
            <p className="text-sm text-gray-600 m-0">{desc.goal}</p>
            <ul className="mt-2 space-y-1">
              {desc.details.map((d, i) => (
                <li key={i} className="text-sm text-gray-500 flex gap-2">
                  <span className="text-blue-500">•</span>
                  {d}
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-4 flex items-center justify-between text-sm text-gray-500">
            <span>已学完 {completedCount} / {lessons.length} 课（共 {book.lessonCount} 课）</span>
            <span className="font-bold text-blue-600">{progress}%</span>
          </div>
          <ProgressBar value={progress} size="sm" />
        </div>
      </div>

      {/* Lesson List */}
      <div>
        <div className="flex items-center gap-2 mb-3">
          <BookOpen size={18} className="text-blue-600" />
          <h2 className="text-lg font-bold text-gray-800 m-0">课文列表</h2>
        </div>
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
          </div>
        )}
      </div>
    </div>
  )
}
