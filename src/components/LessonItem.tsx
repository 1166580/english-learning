import { Link } from 'react-router-dom'
import { CheckCircle, Circle, ChevronRight, Star } from 'lucide-react'
import type { Lesson } from '../types'

interface LessonItemProps {
  lesson: Lesson
  bookId: number
  completed: boolean
}

const tagColors: Record<string, string> = {
  '一般疑问句': 'bg-blue-100 text-blue-700',
  '特殊疑问句': 'bg-blue-100 text-blue-700',
  '否定句': 'bg-red-100 text-red-700',
  '祈使句': 'bg-purple-100 text-purple-700',
  '感叹句': 'bg-purple-100 text-purple-700',
  '一般现在时': 'bg-orange-100 text-orange-700',
  '一般过去时': 'bg-orange-100 text-orange-700',
  '一般将来时': 'bg-orange-100 text-orange-700',
  '现在进行时': 'bg-orange-100 text-orange-700',
  '过去进行时': 'bg-orange-100 text-orange-700',
  '现在完成时': 'bg-orange-100 text-orange-700',
  '过去完成时': 'bg-orange-100 text-orange-700',
  '被动语态': 'bg-rose-100 text-rose-700',
  '情态动词': 'bg-violet-100 text-violet-700',
  '定语从句': 'bg-amber-100 text-amber-700',
  '宾语从句': 'bg-amber-100 text-amber-700',
  '状语从句': 'bg-amber-100 text-amber-700',
  '比较级': 'bg-indigo-100 text-indigo-700',
  '最高级': 'bg-indigo-100 text-indigo-700',
  '冠词': 'bg-emerald-100 text-emerald-700',
  '代词': 'bg-emerald-100 text-emerald-700',
  '介词': 'bg-emerald-100 text-emerald-700',
  'There be': 'bg-teal-100 text-teal-700',
}

function getTagColor(tag: string): string {
  return tagColors[tag] || 'bg-gray-100 text-gray-600'
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
        <div className="flex items-center gap-2 flex-wrap">
          <span className="text-xs font-bold text-gray-400 bg-gray-100 px-2 py-0.5 rounded">
            第 {lesson.id} 课
          </span>
          <h3 className="text-base font-semibold text-gray-800 truncate m-0">
            {lesson.title}
          </h3>
          {lesson.difficulty && (
            <div className="flex items-center gap-0.5">
              {Array.from({ length: 5 }, (_, i) => (
                <Star
                  key={i}
                  size={12}
                  className={i < lesson.difficulty! ? 'text-amber-400 fill-amber-400' : 'text-gray-200'}
                />
              ))}
            </div>
          )}
        </div>
        <p className="text-sm text-gray-500 mt-0.5 truncate m-0">{lesson.titleCn}</p>
        {lesson.tags && lesson.tags.length > 0 && (
          <div className="flex flex-wrap gap-1 mt-1.5">
            {lesson.tags.map((tag, i) => (
              <span key={i} className={`text-xs px-1.5 py-0.5 rounded ${getTagColor(tag)}`}>
                {tag}
              </span>
            ))}
          </div>
        )}
      </div>
      <ChevronRight size={18} className="text-gray-300 flex-shrink-0" />
    </Link>
  )
}
