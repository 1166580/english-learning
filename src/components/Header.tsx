import { useState, useMemo, useRef, useEffect } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { BookOpen, Library, Search, Wrench, Volume2, X } from 'lucide-react'
import { books, bookDataMap } from '../data'

export default function Header() {
  const [query, setQuery] = useState('')
  const [open, setOpen] = useState(false)
  const inputRef = useRef<HTMLInputElement>(null)
  const navigate = useNavigate()

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

  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between gap-4">
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
            className="w-full pl-9 pr-8 py-2 bg-gray-50 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
          {query && (
            <button onClick={() => { setQuery(''); setOpen(false) }} className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 cursor-pointer">
              <X size={16} />
            </button>
          )}
          {open && results.length > 0 && (
            <div className="absolute top-full left-0 right-0 mt-1 bg-white rounded-lg shadow-lg border border-gray-200 max-h-80 overflow-y-auto z-50">
              {results.map((r, i) => (
                <button
                  key={i}
                  onMouseDown={() => handleSelect(r.bookId, r.lessonId)}
                  className="w-full text-left px-4 py-3 hover:bg-blue-50 transition-colors border-b border-gray-50 last:border-0 cursor-pointer"
                >
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-bold text-blue-600 bg-blue-50 px-1.5 py-0.5 rounded">{r.bookName}</span>
                    <span className="text-xs text-gray-400">第{r.lessonId}课</span>
                  </div>
                  <div className="text-sm font-medium text-gray-800 mt-0.5">{r.title}</div>
                  <div className="text-xs text-gray-500">{r.titleCn}</div>
                </button>
              ))}
            </div>
          )}
        </div>

        <nav className="flex items-center gap-4 flex-shrink-0">
          <NavLink
            to="/"
            end
            className={({ isActive }) =>
              `text-sm font-medium transition-colors no-underline hidden sm:block ${isActive ? 'text-blue-600' : 'text-gray-600 hover:text-blue-600'}`
            }
          >
            首页
          </NavLink>
          <NavLink
            to="/vocabulary"
            className={({ isActive }) =>
              `flex items-center gap-1 text-sm font-medium transition-colors no-underline ${isActive ? 'text-blue-600' : 'text-gray-600 hover:text-blue-600'}`
            }
          >
            <Library size={16} />
            <span className="hidden sm:inline">生词本</span>
          </NavLink>
          <NavLink
            to="/tools"
            className={({ isActive }) =>
              `flex items-center gap-1 text-sm font-medium transition-colors no-underline ${isActive ? 'text-blue-600' : 'text-gray-600 hover:text-blue-600'}`
            }
          >
            <Wrench size={16} />
            <span className="hidden sm:inline">工具</span>
          </NavLink>
          <NavLink
            to="/phonics"
            className={({ isActive }) =>
              `flex items-center gap-1 text-sm font-medium transition-colors no-underline ${isActive ? 'text-blue-600' : 'text-gray-600 hover:text-blue-600'}`
            }
          >
            <Volume2 size={16} />
            <span className="hidden sm:inline">音标</span>
          </NavLink>
        </nav>
      </div>
    </header>
  )
}
