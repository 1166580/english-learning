import { useState, useMemo, useCallback } from 'react'
import { useParams } from 'react-router-dom'
import { Eye, EyeOff, RotateCcw, Lock, Unlock } from 'lucide-react'
import { books, bookDataMap, getLesson } from '../data'

type HideMode = 'none' | 'words' | 'all'

export default function RecitePage() {
  const { id, lessonId } = useParams()
  const [selectedBook, setSelectedBook] = useState(id ? Number(id) : 0)
  const [selectedLesson, setSelectedLesson] = useState(lessonId ? Number(lessonId) : 0)
  const [hideMode, setHideMode] = useState<HideMode>('none')
  const [hiddenWords, setHiddenWords] = useState<Set<number>>(new Set())
  const [userInputs, setUserInputs] = useState<Record<number, string>>({})
  const [showAll, setShowAll] = useState(false)

  const lesson = useMemo(() => {
    if (selectedBook && selectedLesson) return getLesson(selectedBook, selectedLesson)
    return null
  }, [selectedBook, selectedLesson])

  const lessons = useMemo(() => {
    return selectedBook ? (bookDataMap[selectedBook] || []) : []
  }, [selectedBook])

  const startRecite = useCallback((mode: HideMode) => {
    setHideMode(mode)
    setHiddenWords(new Set())
    setUserInputs({})
    setShowAll(false)
    if (mode === 'words') {
      // Hide ~40% of words randomly
      if (!lesson) return
      const allWords = lesson.text.join(' ').split(/\s+/)
      const count = Math.floor(allWords.length * 0.4)
      const indices = new Set<number>()
      let pos = 0
      for (let i = 0; i < lesson.text.length; i++) {
        const words = lesson.text[i].split(/\s+/)
        for (let j = 0; j < words.length; j++) {
          pos++
          if (indices.size < count && Math.random() < 0.4) {
            indices.add(pos)
          }
        }
      }
      setHiddenWords(indices)
    }
  }, [lesson])

  const toggleWord = (globalIdx: number) => {
    setHiddenWords(prev => {
      const next = new Set(prev)
      if (next.has(globalIdx)) next.delete(globalIdx)
      else next.add(globalIdx)
      return next
    })
  }

  const renderSentence = (sentence: string, lineIdx: number) => {
    if (hideMode === 'none') {
      return <span className="text-gray-800 dark:text-gray-200">{sentence}</span>
    }

    if (hideMode === 'all') {
      if (showAll) {
        return <span className="text-gray-800 dark:text-gray-200">{sentence}</span>
      }
      return (
        <input
          type="text"
          value={userInputs[lineIdx] || ''}
          onChange={e => setUserInputs(prev => ({ ...prev, [lineIdx]: e.target.value }))}
          placeholder="输入整句..."
          className="w-full px-2 py-1 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-800 dark:text-gray-200"
        />
      )
    }

    // words mode
    const words = sentence.split(/\s+/)
    let globalIdx = 0
    for (let i = 0; i < lineIdx; i++) {
      globalIdx += lesson!.text[i].split(/\s+/).length
    }

    return (
      <span className="inline-flex flex-wrap gap-1">
        {words.map((word, j) => {
          const idx = globalIdx + j + 1
          const isHidden = hiddenWords.has(idx)
          if (!isHidden) return <span key={j} className="text-gray-800 dark:text-gray-200">{word} </span>
          if (showAll) return <span key={j} className="text-green-600 dark:text-green-400 font-medium">{word} </span>
          return (
            <span key={j} className="inline-flex items-center">
              <button
                onClick={() => toggleWord(idx)}
                className="text-blue-500 hover:text-blue-700 cursor-pointer bg-transparent border-0 px-0.5"
                title="点击显示"
              >
                <EyeOff size={14} />
              </button>
              <input
                type="text"
                value={userInputs[idx] || ''}
                onChange={e => setUserInputs(prev => ({ ...prev, [idx]: e.target.value }))}
                className="w-20 px-1 py-0.5 bg-gray-50 dark:bg-gray-700 border-b border-gray-300 dark:border-gray-600 text-sm focus:outline-none focus:border-blue-500 text-gray-800 dark:text-gray-200"
                placeholder="___"
              />
              <span className="mx-1"> </span>
            </span>
          )
        })}
      </span>
    )
  }

  // Selection mode
  if (!lesson) {
    return (
      <div className="max-w-2xl mx-auto px-4 py-8">
        <h1 className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-2">课文背诵</h1>
        <p className="text-sm text-gray-500 mb-6">选择课文，开始背诵练习</p>

        <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-100 dark:border-gray-700">
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">选择教材</label>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mb-4">
            {books.map(b => (
              <button key={b.id} onClick={() => setSelectedBook(b.id)}
                className={`px-3 py-2 rounded-lg text-sm cursor-pointer border-0 ${selectedBook === b.id ? 'bg-blue-600 text-white' : 'bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300'}`}>
                {b.nameCn}
              </button>
            ))}
          </div>

          {selectedBook > 0 && (
            <>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">选择课文</label>
              <div className="max-h-64 overflow-y-auto space-y-1">
                {lessons.map(l => (
                  <button key={l.id} onClick={() => setSelectedLesson(l.id)}
                    className="w-full text-left px-3 py-2 rounded-lg text-sm cursor-pointer border-0 bg-gray-50 dark:bg-gray-700 hover:bg-blue-50 dark:hover:bg-gray-600 text-gray-700 dark:text-gray-300 transition-colors">
                    <span className="text-xs text-gray-400 mr-2">第{l.id}课</span>
                    {l.titleCn}
                  </button>
                ))}
              </div>
            </>
          )}
        </div>
      </div>
    )
  }

  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <button onClick={() => { setSelectedLesson(0); setHideMode('none') }}
          className="text-sm text-gray-400 hover:text-gray-600 cursor-pointer bg-transparent border-0">
          ← 返回选择
        </button>
        <span className="text-xs text-gray-400 bg-gray-100 dark:bg-gray-700 px-2 py-0.5 rounded">
          第{selectedBook}册 · 第{selectedLesson}课
        </span>
      </div>

      <h2 className="text-lg font-bold text-gray-800 dark:text-gray-200 mb-4">{lesson.titleCn}</h2>

      {/* Mode Selection */}
      {hideMode === 'none' && (
        <div className="bg-white dark:bg-gray-800 rounded-xl p-4 shadow-sm border border-gray-100 dark:border-gray-700 mb-4">
          <p className="text-sm text-gray-500 mb-3">选择背诵模式：</p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            <button onClick={() => { setHideMode('none'); }}
              className="flex items-center gap-2 p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg text-sm text-blue-700 dark:text-blue-300 cursor-pointer border-0">
              <Eye size={18} />纯阅读模式
            </button>
            <button onClick={() => startRecite('words')}
              className="flex items-center gap-2 p-3 bg-orange-50 dark:bg-orange-900/20 rounded-lg text-sm text-orange-700 dark:text-orange-300 cursor-pointer border-0">
              <Unlock size={18} />隐藏部分单词
            </button>
            <button onClick={() => startRecite('all')}
              className="flex items-center gap-2 p-3 bg-red-50 dark:bg-red-900/20 rounded-lg text-sm text-red-700 dark:text-red-300 cursor-pointer border-0">
              <Lock size={18} />隐藏整句
            </button>
          </div>
        </div>
      )}

      {/* Controls */}
      {hideMode !== 'none' && (
        <div className="flex items-center gap-2 mb-4">
          <button onClick={() => setShowAll(s => !s)}
            className={`flex items-center gap-1 px-3 py-1.5 rounded-lg text-sm cursor-pointer border-0 ${showAll ? 'bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300' : 'bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300'}`}>
            {showAll ? <><Eye size={14} />隐藏答案</> : <><EyeOff size={14} />显示答案</>}
          </button>
          <button onClick={() => startRecite(hideMode)}
            className="flex items-center gap-1 px-3 py-1.5 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 rounded-lg text-sm cursor-pointer border-0">
            <RotateCcw size={14} />重新来
          </button>
          <button onClick={() => setHideMode('none')}
            className="flex items-center gap-1 px-3 py-1.5 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 rounded-lg text-sm cursor-pointer border-0">
            切换模式
          </button>
        </div>
      )}

      {/* English Text */}
      <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-100 dark:border-gray-700 mb-4">
        <h3 className="text-xs font-bold text-gray-400 mb-3">英文</h3>
        <div className="space-y-3 leading-relaxed">
          {lesson.text.map((sentence, i) => (
            <div key={i} className="flex gap-2">
              <span className="text-xs text-gray-300 w-5 text-right flex-shrink-0 mt-1">{i + 1}</span>
              <div className="flex-1">{renderSentence(sentence, i)}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Chinese Translation (reference) */}
      <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-100 dark:border-gray-700">
        <h3 className="text-xs font-bold text-gray-400 mb-3">中文参考</h3>
        <div className="space-y-2 text-sm text-gray-500 dark:text-gray-400">
          {lesson.textCn.map((t, i) => (
            <div key={i} className="flex gap-2">
              <span className="text-xs text-gray-300 w-5 text-right flex-shrink-0">{i + 1}</span>
              <span>{t}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
