import { useState, useMemo } from 'react'
import { Library, Search, Bookmark, BookmarkCheck, Star, StarOff, Volume2, Download, Upload } from 'lucide-react'
import { books, bookDataMap } from '../data'
import { useVocabStore } from '../hooks/useVocabStore'
import { speak } from '../utils/speak'
import type { VocabWord } from '../types'

interface VocabEntry extends VocabWord {
  bookId: number
  bookName: string
  lessonId: number
}

export default function VocabularyPage() {
  const [filterBookId, setFilterBookId] = useState<number>(0)
  const [searchQuery, setSearchQuery] = useState('')
  const [showFilter, setShowFilter] = useState<'all' | 'bookmarked' | 'mastered' | 'unmastered'>('all')
  const { bookmarked, mastered, toggleBookmark, toggleMastered, isBookmarked, isMastered, exportVocab, importVocab } = useVocabStore()

  const allVocab = useMemo(() => {
    const result: VocabEntry[] = []
    for (const book of books) {
      const lessons = bookDataMap[book.id] || []
      for (const lesson of lessons) {
        for (const v of lesson.vocabulary) {
          result.push({ ...v, bookId: book.id, bookName: book.nameCn, lessonId: lesson.id })
        }
      }
    }
    return result
  }, [])

  const uniqueWords = useMemo(() => {
    const seen = new Set<string>()
    return allVocab.filter(v => {
      const key = v.word.toLowerCase()
      if (seen.has(key)) return false
      seen.add(key)
      return true
    })
  }, [allVocab])

  const filtered = useMemo(() => {
    let result = filterBookId === 0 ? uniqueWords : uniqueWords.filter(v => v.bookId === filterBookId)

    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase().trim()
      result = result.filter(v =>
        v.word.toLowerCase().includes(q) ||
        v.meaning.includes(q) ||
        (v.phonetic && v.phonetic.toLowerCase().includes(q))
      )
    }

    if (showFilter === 'bookmarked') result = result.filter(v => isBookmarked(v.word))
    else if (showFilter === 'mastered') result = result.filter(v => isMastered(v.word))
    else if (showFilter === 'unmastered') result = result.filter(v => !isMastered(v.word))

    return result
  }, [uniqueWords, filterBookId, searchQuery, showFilter, isBookmarked, isMastered])

  const speakText = (text: string) => speak(text)

  const handleExport = () => {
    const data = exportVocab()
    const blob = new Blob([data], { type: 'application/json' })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = `nce-vocab-${new Date().toISOString().slice(0, 10)}.json`
    a.click()
    URL.revokeObjectURL(url)
  }

  const handleImport = () => {
    const input = document.createElement('input')
    input.type = 'file'
    input.accept = '.json'
    input.onchange = () => {
      const file = input.files?.[0]
      if (!file) return
      const reader = new FileReader()
      reader.onload = () => {
        if (importVocab(reader.result as string)) alert('导入成功！')
        else alert('文件格式不正确')
      }
      reader.readAsText(file)
    }
    input.click()
  }

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
        <div className="flex flex-wrap gap-3 text-sm mt-3">
          <div className="bg-white/20 rounded-lg px-3 py-1.5">{allVocab.length} 个词汇</div>
          <div className="bg-white/20 rounded-lg px-3 py-1.5">{uniqueWords.length} 个不重复</div>
          <div className="bg-white/20 rounded-lg px-3 py-1.5">
            <BookmarkCheck size={14} className="inline mr-1" />{bookmarked.length} 收藏
          </div>
          <div className="bg-white/20 rounded-lg px-3 py-1.5">
            <Star size={14} className="inline mr-1" />{mastered.length} 已掌握
          </div>
        </div>
      </div>

      {/* Search + Filters */}
      <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100">
        <div className="relative mb-3">
          <Search size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
          <input
            type="text" value={searchQuery} onChange={e => setSearchQuery(e.target.value)}
            placeholder="搜索单词、释义或音标..."
            className="w-full pl-10 pr-4 py-2.5 bg-gray-50 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div className="flex flex-wrap gap-2">
          {([
            ['all', '全部'],
            ['bookmarked', '收藏'],
            ['mastered', '已掌握'],
            ['unmastered', '未掌握'],
          ] as const).map(([key, label]) => (
            <button key={key} onClick={() => setShowFilter(key)}
              className={`px-3 py-1 rounded-full text-xs font-medium cursor-pointer border-0 ${showFilter === key ? 'bg-blue-600 text-white' : 'bg-gray-100 text-gray-600'}`}>
              {label}
            </button>
          ))}
          <div className="flex-1" />
          <button onClick={handleExport} className="flex items-center gap-1 px-2 py-1 text-xs text-gray-500 hover:text-gray-700 cursor-pointer bg-transparent border-0">
            <Download size={12} />导出
          </button>
          <button onClick={handleImport} className="flex items-center gap-1 px-2 py-1 text-xs text-gray-500 hover:text-gray-700 cursor-pointer bg-transparent border-0">
            <Upload size={12} />导入
          </button>
        </div>
      </div>

      {/* Book Filter Tabs */}
      <div className="flex flex-wrap gap-2">
        <button onClick={() => setFilterBookId(0)}
          className={`px-4 py-1.5 rounded-full text-sm font-medium cursor-pointer border-0 ${filterBookId === 0 ? 'bg-blue-600 text-white' : 'bg-white text-gray-600 border border-gray-200'}`}>
          全部
        </button>
        {books.map(book => {
          const count = uniqueWords.filter(v => v.bookId === book.id).length
          return (
            <button key={book.id} onClick={() => setFilterBookId(book.id)}
              className={`px-4 py-1.5 rounded-full text-sm font-medium cursor-pointer border-0 ${filterBookId === book.id ? 'bg-blue-600 text-white' : 'bg-white text-gray-600 border border-gray-200'}`}>
              第{book.id}册 ({count})
            </button>
          )
        })}
      </div>

      {/* Vocabulary Table */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
        {filtered.length === 0 ? (
          <div className="text-center py-10 text-gray-400">暂无生词数据</div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-gray-50 border-b border-gray-100">
                  <th className="text-left px-4 py-3 font-medium text-gray-500 w-10"></th>
                  <th className="text-left px-4 py-3 font-medium text-gray-500">单词</th>
                  <th className="text-left px-4 py-3 font-medium text-gray-500">音标</th>
                  <th className="text-left px-4 py-3 font-medium text-gray-500">释义</th>
                  <th className="text-left px-4 py-3 font-medium text-gray-500 hidden sm:table-cell">词性</th>
                  <th className="text-left px-4 py-3 font-medium text-gray-500 hidden md:table-cell">来源</th>
                  <th className="text-center px-4 py-3 font-medium text-gray-500 w-20">操作</th>
                </tr>
              </thead>
              <tbody>
                {filtered.map((v, i) => (
                  <tr key={`${v.word}-${i}`} className="border-b border-gray-50 last:border-0 hover:bg-gray-50 transition-colors">
                    <td className="px-4 py-3">
                      {isMastered(v.word) ? (
                        <Star size={14} className="text-amber-500" fill="currentColor" />
                      ) : (
                        <span className="text-xs text-gray-300">{i + 1}</span>
                      )}
                    </td>
                    <td className="px-4 py-3 font-semibold text-gray-800">{v.word}</td>
                    <td className="px-4 py-3 text-gray-400">{v.phonetic}</td>
                    <td className="px-4 py-3 text-gray-600">{v.meaning}</td>
                    <td className="px-4 py-3 text-gray-400 hidden sm:table-cell">{v.partOfSpeech || '-'}</td>
                    <td className="px-4 py-3 text-xs text-gray-400 hidden md:table-cell">第{v.bookId}册 第{v.lessonId}课</td>
                    <td className="px-4 py-3">
                      <div className="flex items-center justify-center gap-1">
                        <button onClick={() => speakText(v.word)} className="p-1 text-gray-400 hover:text-blue-500 cursor-pointer bg-transparent border-0" title="发音">
                          <Volume2 size={14} />
                        </button>
                        <button onClick={() => toggleBookmark(v.word)} className="p-1 cursor-pointer bg-transparent border-0" title={isBookmarked(v.word) ? '取消收藏' : '收藏'}>
                          {isBookmarked(v.word) ? <BookmarkCheck size={14} className="text-blue-500" /> : <Bookmark size={14} className="text-gray-400 hover:text-blue-500" />}
                        </button>
                        <button onClick={() => toggleMastered(v.word)} className="p-1 cursor-pointer bg-transparent border-0" title={isMastered(v.word) ? '取消掌握' : '已掌握'}>
                          {isMastered(v.word) ? <StarOff size={14} className="text-amber-500" /> : <Star size={14} className="text-gray-400 hover:text-amber-500" />}
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  )
}
