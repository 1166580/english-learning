import { useState, useMemo, useRef, useEffect } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { BookOpen, Library, Search, Wrench, Volume2, BarChart3, MessageSquare, X, User, Sun, Moon, GraduationCap, ChevronDown } from 'lucide-react'
import { books, bookDataMap } from '../data'
import { useAuth } from '../hooks/useAuth'
import { useDarkMode } from '../hooks/useDarkMode'
import UserAvatar from './UserAvatar'

export default function Header() {
  const [query, setQuery] = useState('')
  const [open, setOpen] = useState(false)
  const [studyMenu, setStudyMenu] = useState(false)
  const inputRef = useRef<HTMLInputElement>(null)
  const navigate = useNavigate()
  const { user, profile } = useAuth()
  const { dark, toggle: toggleDark } = useDarkMode()

  const results = useMemo(() => {
    if (!query.trim()) return []
    const q = query.toLowerCase().trim()
    const hits: { bookId: number; bookName: string; lessonId: number; title: string; titleCn: string }[] = []
    for (const book of books) {
      const lessons = bookDataMap[book.id] || []
      for (const lesson of lessons) {
        if (
          lesson.title.toLowerCase().includes(q) ||
          lesson.titleCn.includes(q) ||
          lesson.text.some((t) => t.toLowerCase().includes(q))
        ) {
          hits.push({ bookId: book.id, bookName: book.nameCn, lessonId: lesson.id, title: lesson.title, titleCn: lesson.titleCn })
        }
      }
      if (hits.length >= 10) break
    }
    return hits
  }, [query])

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
        e.preventDefault()
        inputRef.current?.focus()
      }
    }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [])

  const handleSelect = (bookId: number, lessonId: number) => {
    setQuery('')
    setOpen(false)
    navigate(`/book/${bookId}/lesson/${lessonId}`)
  }

  const linkClass = ({ isActive }: { isActive: boolean }) =>
    `flex items-center gap-1 text-sm font-medium transition-colors no-underline ${isActive ? 'text-blue-600' : 'text-gray-600 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400'}`

  return (
    <header className="bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between gap-3">
        <NavLink to="/" className="flex items-center gap-2 text-blue-600 font-bold text-xl no-underline flex-shrink-0">
          <BookOpen size={28} />
          <span className="hidden sm:inline">新概念英语</span>
        </NavLink>

        {/* Search */}
        <div className="relative flex-1 max-w-md">
          <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => { setQuery(e.target.value); setOpen(true) }}
            onFocus={() => setOpen(true)}
            onBlur={() => setTimeout(() => setOpen(false), 200)}
            placeholder="搜索课文... (Ctrl+K)"
            className="w-full pl-9 pr-8 py-2 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-lg text-sm text-gray-800 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          {query && (
            <button onClick={() => { setQuery(''); setOpen(false) }} className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 cursor-pointer">
              <X size={16} />
            </button>
          )}
          {open && results.length > 0 && (
            <div className="absolute top-full left-0 right-0 mt-1 bg-white dark:bg-gray-800 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700 max-h-80 overflow-y-auto z-50">
              {results.map((r, i) => (
                <button
                  key={i}
                  onMouseDown={() => handleSelect(r.bookId, r.lessonId)}
                  className="w-full text-left px-4 py-3 hover:bg-blue-50 dark:hover:bg-gray-700 transition-colors border-b border-gray-50 dark:border-gray-700 last:border-0 cursor-pointer"
                >
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-bold text-blue-600 bg-blue-50 dark:bg-blue-900/30 px-1.5 py-0.5 rounded">{r.bookName}</span>
                    <span className="text-xs text-gray-400">第{r.lessonId}课</span>
                  </div>
                  <div className="text-sm font-medium text-gray-800 dark:text-gray-200 mt-0.5">{r.title}</div>
                  <div className="text-xs text-gray-500">{r.titleCn}</div>
                </button>
              ))}
            </div>
          )}
        </div>

        <nav className="flex items-center gap-2 flex-shrink-0">
          <NavLink to="/" end className={linkClass}>
            <span className="hidden sm:inline">首页</span>
            <BookOpen size={16} className="sm:hidden" />
          </NavLink>
          <NavLink to="/vocabulary" className={linkClass}>
            <Library size={16} />
            <span className="hidden lg:inline">生词本</span>
          </NavLink>

          {/* Study Dropdown */}
          <div className="relative" onMouseLeave={() => setStudyMenu(false)}>
            <button onClick={() => setStudyMenu(s => !s)}
              className="flex items-center gap-0.5 text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-blue-600 cursor-pointer bg-transparent border-0">
              <GraduationCap size={16} />
              <span className="hidden lg:inline">学习</span>
              <ChevronDown size={12} />
            </button>
            {studyMenu && (
              <div className="absolute top-full right-0 mt-1 bg-white dark:bg-gray-800 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700 py-1 w-32 z-50">
                <NavLink to="/practice" onClick={() => setStudyMenu(false)}
                  className="block px-3 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-blue-50 dark:hover:bg-gray-700 no-underline">练习测验</NavLink>
                <NavLink to="/flashcards" onClick={() => setStudyMenu(false)}
                  className="block px-3 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-blue-50 dark:hover:bg-gray-700 no-underline">单词闪卡</NavLink>
                <NavLink to="/dictation" onClick={() => setStudyMenu(false)}
                  className="block px-3 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-blue-50 dark:hover:bg-gray-700 no-underline">听写练习</NavLink>
              </div>
            )}
          </div>

          <NavLink to="/tools" className={linkClass}>
            <Wrench size={16} />
            <span className="hidden lg:inline">工具</span>
          </NavLink>
          <NavLink to="/stats" className={linkClass}>
            <BarChart3 size={16} />
            <span className="hidden lg:inline">统计</span>
          </NavLink>
          <NavLink to="/phonics" className={linkClass}>
            <Volume2 size={16} />
            <span className="hidden lg:inline">音标</span>
          </NavLink>
          <NavLink to="/community" className={linkClass}>
            <MessageSquare size={16} />
            <span className="hidden lg:inline">社区</span>
          </NavLink>

          {/* Dark Mode Toggle */}
          <button onClick={toggleDark}
            className="p-1.5 text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 cursor-pointer bg-transparent border-0 rounded-lg"
            title={dark ? '切换亮色模式' : '切换暗色模式'}>
            {dark ? <Sun size={16} /> : <Moon size={16} />}
          </button>

          <NavLink to="/profile" className={linkClass}>
            {user ? (
              <UserAvatar photoURL={user.photoURL || undefined} name={profile?.displayName} size="sm" />
            ) : (
              <User size={16} />
            )}
            <span className="hidden lg:inline">{user ? '我的' : '登录'}</span>
          </NavLink>
        </nav>
      </div>
    </header>
  )
}
