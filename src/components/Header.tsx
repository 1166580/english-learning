import { NavLink } from 'react-router-dom'
import { BookOpen, Library } from 'lucide-react'

export default function Header() {
  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
        <NavLink to="/" className="flex items-center gap-2 text-blue-600 font-bold text-xl no-underline">
          <BookOpen size={28} />
          <span>新概念英语</span>
        </NavLink>
        <nav className="flex items-center gap-6">
          <NavLink
            to="/"
            end
            className={({ isActive }) =>
              `text-sm font-medium transition-colors no-underline ${isActive ? 'text-blue-600' : 'text-gray-600 hover:text-blue-600'}`
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
            生词本
          </NavLink>
        </nav>
      </div>
    </header>
  )
}
