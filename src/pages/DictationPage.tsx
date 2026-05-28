import { useState, useMemo, useCallback, useRef } from 'react'
import { Volume2, CheckCircle, XCircle, ArrowRight, RotateCcw, BookOpen, Shuffle, Eye } from 'lucide-react'
import { books, bookDataMap } from '../data'
import { speak } from '../utils/speak'

interface DictationItem {
  bookId: number
  lessonId: number
  lessonTitle: string
  sentenceIndex: number
  sentence: string
  translation: string
}

export default function DictationPage() {
  const [selectedBook, setSelectedBook] = useState(0)
  const [items, setItems] = useState<DictationItem[]>([])
  const [currentIdx, setCurrentIdx] = useState(0)
  const [input, setInput] = useState('')
  const [showResult, setShowResult] = useState(false)
  const [started, setStarted] = useState(false)
  const [results, setResults] = useState<{ correct: boolean; expected: string; got: string }[]>([])
  const inputRef = useRef<HTMLInputElement>(null)

  const allSentences = useMemo(() => {
    const result: DictationItem[] = []
    const bookIds = selectedBook ? [selectedBook] : books.map(b => b.id)
    for (const bid of bookIds) {
      const lessons = bookDataMap[bid] || []
      for (const lesson of lessons) {
        lesson.text.forEach((sentence, i) => {
          result.push({
            bookId: bid,
            lessonId: lesson.id,
            lessonTitle: lesson.titleCn,
            sentenceIndex: i,
            sentence: sentence.trim(),
            translation: lesson.textCn[i]?.trim() || '',
          })
        })
      }
    }
    return result
  }, [selectedBook])

  const startDictation = useCallback((shuffle: boolean) => {
    const list = shuffle ? [...allSentences].sort(() => Math.random() - 0.5) : [...allSentences]
    setItems(list.slice(0, 20))
    setCurrentIdx(0)
    setInput('')
    setShowResult(false)
    setResults([])
    setStarted(true)
    setTimeout(() => inputRef.current?.focus(), 100)
  }, [allSentences])

  const speakText = (text: string) => speak(text)

  const current = items[currentIdx]

  const handleCheck = () => {
    if (!input.trim()) return
    const expected = current.sentence.replace(/[.,!?;:'"]/g, '').toLowerCase().trim()
    const got = input.replace(/[.,!?;:'"]/g, '').toLowerCase().trim()
    const correct = expected === got
    setResults(prev => [...prev, { correct, expected: current.sentence, got: input }])
    setShowResult(true)
  }

  const handleNext = () => {
    if (currentIdx < items.length - 1) {
      setCurrentIdx(i => i + 1)
      setInput('')
      setShowResult(false)
      setTimeout(() => inputRef.current?.focus(), 100)
    }
  }

  const score = results.filter(r => r.correct).length

  if (!started) {
    return (
      <div className="max-w-2xl mx-auto px-4 py-8">
        <h1 className="text-2xl font-bold text-gray-800 mb-2">听写练习</h1>
        <p className="text-sm text-gray-500 mb-6">听句子，写下来，锻炼听力和拼写</p>

        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-2">选择教材</label>
          <div className="grid grid-cols-2 sm:grid-cols-5 gap-2 mb-4">
            <button onClick={() => setSelectedBook(0)} className={`px-3 py-2 rounded-lg text-sm cursor-pointer border-0 ${selectedBook === 0 ? 'bg-blue-600 text-white' : 'bg-gray-100 text-gray-600'}`}>全部</button>
            {books.map(b => (
              <button key={b.id} onClick={() => setSelectedBook(b.id)} className={`px-3 py-2 rounded-lg text-sm cursor-pointer border-0 ${selectedBook === b.id ? 'bg-blue-600 text-white' : 'bg-gray-100 text-gray-600'}`}>{b.nameCn}</button>
            ))}
          </div>
          <div className="text-sm text-gray-400 mb-4">可用句子：{allSentences.length} 句</div>
          <div className="flex gap-3">
            <button onClick={() => startDictation(false)} className="flex-1 flex items-center justify-center gap-1.5 py-3 bg-blue-600 text-white rounded-lg text-sm font-medium cursor-pointer">
              <BookOpen size={16} />顺序练习
            </button>
            <button onClick={() => startDictation(true)} className="flex-1 flex items-center justify-center gap-1.5 py-3 bg-purple-600 text-white rounded-lg text-sm font-medium cursor-pointer">
              <Shuffle size={16} />随机练习
            </button>
          </div>
        </div>
      </div>
    )
  }

  if (currentIdx >= items.length) {
    return (
      <div className="max-w-2xl mx-auto px-4 py-8">
        <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-100 text-center">
          <CheckCircle size={48} className={`mx-auto mb-4 ${score >= items.length * 0.8 ? 'text-green-500' : 'text-blue-500'}`} />
          <h2 className="text-2xl font-bold text-gray-800 mb-2">听写完成！</h2>
          <div className="text-5xl font-bold text-blue-600 mb-2">{score}/{items.length}</div>
          <div className="text-sm text-gray-400 mb-6">正确率 {Math.round((score / items.length) * 100)}%</div>

          <div className="space-y-2 text-left mb-6 max-h-64 overflow-y-auto">
            {results.map((r, i) => (
              <div key={i} className={`p-2 rounded-lg text-sm ${r.correct ? 'bg-green-50' : 'bg-red-50'}`}>
                <div className="flex items-start gap-2">
                  {r.correct ? <CheckCircle size={14} className="text-green-500 mt-0.5" /> : <XCircle size={14} className="text-red-500 mt-0.5" />}
                  <div className="min-w-0">
                    <div className="text-gray-700">{r.expected}</div>
                    {!r.correct && <div className="text-xs text-red-500 mt-0.5">你的答案：{r.got}</div>}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="flex gap-3 justify-center">
            <button onClick={() => startDictation(false)} className="flex items-center gap-1.5 px-4 py-2 bg-blue-600 text-white rounded-lg text-sm cursor-pointer">
              <RotateCcw size={14} />再来一次
            </button>
            <button onClick={() => setStarted(false)} className="flex items-center gap-1.5 px-4 py-2 bg-gray-100 text-gray-600 rounded-lg text-sm cursor-pointer">
              换范围
            </button>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="max-w-2xl mx-auto px-4 py-8">
      {/* Progress */}
      <div className="flex items-center justify-between mb-4">
        <span className="text-sm text-gray-400">第 {currentIdx + 1} / {items.length} 句</span>
        <span className="text-xs text-gray-400 bg-gray-100 px-2 py-0.5 rounded">
          第{current.bookId}册 · {current.lessonTitle}
        </span>
      </div>
      <div className="w-full h-1.5 bg-gray-100 rounded-full mb-6 overflow-hidden">
        <div className="h-full bg-blue-500 rounded-full transition-all" style={{ width: `${((currentIdx + 1) / items.length) * 100}%` }} />
      </div>

      {/* Dictation Card */}
      <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 mb-4">
        <div className="text-center mb-6">
          <button
            onClick={() => speakText(current.sentence)}
            className="inline-flex items-center gap-2 px-6 py-4 bg-blue-50 text-blue-600 rounded-xl hover:bg-blue-100 cursor-pointer transition-colors border-0"
          >
            <Volume2 size={24} />
            <span className="text-sm font-medium">点击播放句子</span>
          </button>
          <div className="text-xs text-gray-400 mt-2">可以多次播放</div>
        </div>

        {current.translation && (
          <div className="text-sm text-gray-400 text-center mb-4">
            提示：{current.translation}
          </div>
        )}

        {showResult ? (
          <div className="space-y-3">
            <div className={`p-4 rounded-lg ${results[results.length - 1]?.correct ? 'bg-green-50' : 'bg-red-50'}`}>
              <div className="flex items-center gap-2 mb-2">
                {results[results.length - 1]?.correct
                  ? <><CheckCircle size={16} className="text-green-500" /><span className="text-sm font-medium text-green-700">正确！</span></>
                  : <><XCircle size={16} className="text-red-500" /><span className="text-sm font-medium text-red-700">不正确</span></>
                }
              </div>
              <div className="text-sm text-gray-600 mb-1"><strong>原文：</strong>{current.sentence}</div>
              {!results[results.length - 1]?.correct && (
                <div className="text-sm text-red-600"><strong>你的答案：</strong>{input}</div>
              )}
            </div>
            <button
              onClick={handleNext}
              className="w-full flex items-center justify-center gap-1.5 py-3 bg-blue-600 text-white rounded-lg text-sm font-medium cursor-pointer"
            >
              下一句 <ArrowRight size={16} />
            </button>
          </div>
        ) : (
          <div className="space-y-3">
            <input
              ref={inputRef}
              type="text"
              value={input}
              onChange={e => setInput(e.target.value)}
              onKeyDown={e => { if (e.key === 'Enter') handleCheck() }}
              placeholder="输入你听到的句子..."
              className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <div className="flex gap-2">
              <button
                onClick={() => speakText(current.sentence)}
                className="flex items-center gap-1.5 px-4 py-2 bg-gray-100 text-gray-600 rounded-lg text-sm cursor-pointer border-0"
              >
                <Volume2 size={14} />再听一次
              </button>
              <button
                onClick={() => setShowResult(true)}
                className="flex items-center gap-1.5 px-4 py-2 bg-gray-100 text-gray-600 rounded-lg text-sm cursor-pointer border-0"
              >
                <Eye size={14} />看答案
              </button>
              <button
                onClick={handleCheck}
                disabled={!input.trim()}
                className="flex-1 py-2 bg-blue-600 text-white rounded-lg text-sm font-medium disabled:opacity-50 cursor-pointer border-0"
              >
                检查
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
