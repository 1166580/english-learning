import { useState, useMemo } from 'react'
import { Library, Search } from 'lucide-react'
import { books, bookDataMap } from '../data'
import VocabularyTable from '../components/VocabularyTable'
import type { VocabWord } from '../types'

interface VocabEntry extends VocabWord {
  bookId: number
  bookName: string
  lessonId: number
}

export default function VocabularyPage() {
  const [filterBookId, setFilterBookId] = useState<number>(0)
  const [searchQuery, setSearchQuery] = useState('')

  const allVocab = useMemo(() => {
    const result: VocabEntry[] = []
    for (const book of books) {
      const lessons = bookDataMap[book.id] || []
      for (const lesson of lessons) {
        for (const v of lesson.vocabulary) {
          result.push({
            ...v,
            bookId: book.id,
            bookName: book.nameCn,
            lessonId: lesson.id,
          })
        }
      }
    }
    return result
  }, [])

  const filtered = useMemo(() => {
    let result = filterBookId === 0
      ? allVocab
      : allVocab.filter((v) => v.bookId === filterBookId)

    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase().trim()
      result = result.filter((v) =>
        v.word.toLowerCase().includes(q) ||
        v.meaning.toLowerCase().includes(q) ||
        (v.phonetic && v.phonetic.toLowerCase().includes(q))
      )
    }

    return result
  }, [allVocab, filterBookId, searchQuery])

  const uniqueWords = useMemo(() => {
    const seen = new Set<string>()
    return filtered.filter((v) => {
      const key = v.word.toLowerCase()
      if (seen.has(key)) return false
      seen.add(key)
      return true
    })
  }, [filtered])

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="bg-gradient-to-r from-amber-500 to-orange-600 rounded-xl p-6 text-white shadow-md">
        <div className="flex items-center gap-3 mb-2">
          <Library size={24} />
          <div>
            <h1 className="text-xl font-bold m-0">生词本</h1>
            <p className="text-sm opacity-80 mt-0.5">汇总所有学过的单词</p>
          </div>
        </div>
        <div className="flex gap-4 text-sm mt-3">
          <div className="bg-white/20 rounded-lg px-3 py-1.5">
            <span className="font-bold">{allVocab.length}</span> 个词汇收录
          </div>
          <div className="bg-white/20 rounded-lg px-3 py-1.5">
            <span className="font-bold">{uniqueWords.length}</span> 个不重复单词
          </div>
        </div>
      </div>

      {/* Search Box */}
      <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100">
        <div className="relative">
          <Search size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="搜索单词、释义或音标..."
            className="w-full pl-10 pr-4 py-2.5 bg-gray-50 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
          />
        </div>
      </div>

      {/* Filter Tabs */}
      <div className="flex flex-wrap gap-2">
        <button
          onClick={() => setFilterBookId(0)}
          className={`px-4 py-1.5 rounded-full text-sm font-medium transition-colors ${
            filterBookId === 0
              ? 'bg-blue-600 text-white'
              : 'bg-white text-gray-600 hover:bg-gray-100 border border-gray-200'
          }`}
        >
          全部
        </button>
        {books.map((book) => {
          const count = allVocab.filter((v) => v.bookId === book.id).length
          return (
            <button
              key={book.id}
              onClick={() => setFilterBookId(book.id)}
              className={`px-4 py-1.5 rounded-full text-sm font-medium transition-colors ${
                filterBookId === book.id
                  ? 'bg-blue-600 text-white'
                  : 'bg-white text-gray-600 hover:bg-gray-100 border border-gray-200'
              }`}
            >
              第{book.id}册 ({count}词)
            </button>
          )
        })}
      </div>

      {/* Vocabulary List */}
      <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
        {filtered.length === 0 ? (
          <div className="text-center py-10 text-gray-400">
            暂无生词数据
          </div>
        ) : (
          <VocabularyTable words={filtered} />
        )}
      </div>
    </div>
  )
}
