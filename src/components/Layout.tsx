import type { ReactNode } from 'react'
import Header from './Header'

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex flex-col">
      <Header />
      <main className="flex-1 max-w-6xl mx-auto w-full px-4 py-6">
        {children}
      </main>
      <footer className="bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700 py-4 text-center text-sm text-gray-400">
        新概念英语学习平台 - 坚持每天学习，积少成多
      </footer>
    </div>
  )
}
