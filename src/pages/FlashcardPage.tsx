import { useState, useMemo, useCallback, useEffect } from 'react'
import { RotateCcw, ChevronLeft, ChevronRight, Volume2, Shuffle, BookOpen } from 'lucide-react'
import { books, bookDataMap } from '../data'
import type { VocabWord } from '../types'

interface Card extends VocabWord {
  bookId: number
  lessonId: number
}

export default function FlashcardPage() {
  const [selectedBook, setSelectedBook] = useState(0)
  const [cards, setCards] = useState<Card[]>([])
  const [currentIdx, setCurrentIdx] = useState(0)
  const [flipped, setFlipped] = useState(false)
  const [started, setStarted] = useState(false)

  const allWords = useMemo(() => {
    const result: Card[] = []
    const bookIds = selectedBook ? [selectedBook] : books.map(b => b.id)
    for (const bid of bookIds) {
      const lessons = bookDataMap[bid] || []
      for (const lesson of lessons) {
        for (const v of lesson.vocabulary) {
          result.push({ ...v, bookId: bid, lessonId: lesson.id })
        }
      }
    }
    return result
  }, [selectedBook])

  const startCards = useCallback((shuffle: boolean) => {
    const list = shuffle ? [...allWords].sort(() => Math.random() - 0.5) : [...allWords]
    setCards(list.slice(0, 50))
    setCurrentIdx(0)
    setFlipped(false)
    setStarted(true)
  }, [allWords])

  const speakText = (text: string) => {
    if (!('speechSynthesis' in window)) return
    speechSynthesis.cancel()
    const u = new SpeechSynthesisUtterance(text)
    u.lang = 'en-US'
    u.rate = 0.8
    const voices = speechSynthesis.getVoices()
    if (voices.length > 0) {
      const en = voices.find(v => v.lang.startsWith('en'))
      if (en) u.voice = en
      speechSynthesis.speak(u)
    } else {
      speechSynthesis.addEventListener('voiceschanged', () => {
        const loaded = speechSynthesis.getVoices()
        const en = loaded.find(v => v.lang.startsWith('en'))
        if (en) u.voice = en
        speechSynthesis.speak(u)
      }, { once: true })
    }
  }

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (!started) return
      if (e.key === ' ' || e.key === 'Enter') { e.preventDefault(); setFlipped(f => !f) }
      if (e.key === 'ArrowLeft' && currentIdx > 0) { setCurrentIdx(i => i - 1); setFlipped(false) }
      if (e.key === 'ArrowRight' && currentIdx < cards.length - 1) { setCurrentIdx(i => i + 1); setFlipped(false) }
    }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [started, currentIdx, cards.length])

  if (!started) {
    return (
      <div className="max-w-2xl mx-auto px-4 py-8">
        <h1 className="text-2xl font-bold text-gray-800 mb-2">单词闪卡</h1>
        <p className="text-sm text-gray-500 mb-6">选择范围，开始记忆单词</p>

        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-2">选择教材</label>
          <div className="grid grid-cols-2 sm:grid-cols-5 gap-2 mb-4">
            <button onClick={() => setSelectedBook(0)} className={`px-3 py-2 rounded-lg text-sm cursor-pointer border-0 ${selectedBook === 0 ? 'bg-blue-600 text-white' : 'bg-gray-100 text-gray-600'}`}>全部</button>
            {books.map(b => (
              <button key={b.id} onClick={() => setSelectedBook(b.id)} className={`px-3 py-2 rounded-lg text-sm cursor-pointer border-0 ${selectedBook === b.id ? 'bg-blue-600 text-white' : 'bg-gray-100 text-gray-600'}`}>{b.nameCn}</button>
            ))}
          </div>
          <div className="text-sm text-gray-400 mb-4">可用单词：{allWords.length} 个</div>
          <div className="flex gap-3">
            <button onClick={() => startCards(false)} className="flex-1 flex items-center justify-center gap-1.5 py-3 bg-blue-600 text-white rounded-lg text-sm font-medium cursor-pointer">
              <BookOpen size={16} />顺序学习
            </button>
            <button onClick={() => startCards(true)} className="flex-1 flex items-center justify-center gap-1.5 py-3 bg-purple-600 text-white rounded-lg text-sm font-medium cursor-pointer">
              <Shuffle size={16} />随机打乱
            </button>
          </div>
        </div>
      </div>
    )
  }

  const card = cards[currentIdx]
  if (!card) return null

  return (
    <div className="max-w-2xl mx-auto px-4 py-8">
      {/* Progress */}
      <div className="flex items-center justify-between mb-4">
        <button onClick={() => setStarted(false)} className="text-sm text-gray-400 hover:text-gray-600 cursor-pointer bg-transparent border-0">
          <RotateCcw size={14} className="inline mr-1" />重新选择
        </button>
        <span className="text-sm text-gray-400">{currentIdx + 1} / {cards.length}</span>
      </div>
      <div className="w-full h-1.5 bg-gray-100 rounded-full mb-6 overflow-hidden">
        <div className="h-full bg-blue-500 rounded-full transition-all" style={{ width: `${((currentIdx + 1) / cards.length) * 100}%` }} />
      </div>

      {/* Flashcard */}
      <div
        onClick={() => setFlipped(f => !f)}
        className="relative cursor-pointer mb-6"
        style={{ perspective: '1000px' }}
      >
        <div
          className="w-full min-h-[280px] rounded-2xl shadow-lg border-2 transition-transform duration-500 flex flex-col items-center justify-center p-8"
          style={{
            transformStyle: 'preserve-3d',
            transform: flipped ? 'rotateY(180deg)' : 'rotateY(0)',
            backfaceVisibility: 'hidden',
            borderColor: flipped ? '#10b981' : '#3b82f6',
            background: flipped ? 'linear-gradient(135deg, #ecfdf5, #d1fae5)' : 'linear-gradient(135deg, #eff6ff, #dbeafe)',
          }}
        >
          {!flipped ? (
            <div className="text-center" style={{ backfaceVisibility: 'hidden' }}>
              <div className="text-3xl font-bold text-gray-800 mb-3">{card.word}</div>
              {card.phonetic && <div className="text-lg text-gray-400 mb-3">{card.phonetic}</div>}
              {card.partOfSpeech && <div className="text-xs text-blue-500 bg-blue-50 px-2 py-0.5 rounded-full mb-3">{card.partOfSpeech}</div>}
              <button
                onClick={e => { e.stopPropagation(); speakText(card.word) }}
                className="p-2 text-blue-500 hover:bg-blue-100 rounded-full cursor-pointer bg-transparent border-0"
              >
                <Volume2 size={20} />
              </button>
              <div className="text-xs text-gray-300 mt-4">点击翻转查看释义</div>
            </div>
          ) : (
            <div className="text-center" style={{ backfaceVisibility: 'hidden', transform: 'rotateY(180deg)' }}>
              <div className="text-2xl font-bold text-green-700 mb-2">{card.meaning}</div>
              <div className="text-xl text-gray-600 mb-2">{card.word}</div>
              {card.phonetic && <div className="text-sm text-gray-400">{card.phonetic}</div>}
              <div className="text-xs text-gray-300 mt-4">点击翻回</div>
            </div>
          )}
        </div>
      </div>

      {/* Navigation */}
      <div className="flex items-center justify-between">
        <button
          onClick={() => { setCurrentIdx(i => Math.max(0, i - 1)); setFlipped(false) }}
          disabled={currentIdx === 0}
          className="flex items-center gap-1 px-4 py-2 bg-gray-100 text-gray-600 rounded-lg text-sm cursor-pointer disabled:opacity-30 border-0"
        >
          <ChevronLeft size={16} />上一个
        </button>
        <div className="flex gap-1.5">
          {cards.slice(Math.max(0, currentIdx - 3), currentIdx + 4).map((_, i) => {
            const idx = Math.max(0, currentIdx - 3) + i
            return (
              <div key={idx} className={`w-2 h-2 rounded-full ${idx === currentIdx ? 'bg-blue-600' : idx < currentIdx ? 'bg-green-400' : 'bg-gray-200'}`} />
            )
          })}
        </div>
        <button
          onClick={() => { setCurrentIdx(i => Math.min(cards.length - 1, i + 1)); setFlipped(false) }}
          disabled={currentIdx === cards.length - 1}
          className="flex items-center gap-1 px-4 py-2 bg-blue-600 text-white rounded-lg text-sm cursor-pointer disabled:opacity-30 border-0"
        >
          下一个<ChevronRight size={16} />
        </button>
      </div>

      {/* Keyboard hints */}
      <div className="flex items-center justify-center gap-4 mt-4 text-xs text-gray-300">
        <span>← → 切换</span>
        <span>空格/回车 翻转</span>
      </div>
    </div>
  )
}
