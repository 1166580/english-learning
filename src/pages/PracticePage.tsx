import { useState, useMemo, useCallback } from 'react'
import { useParams } from 'react-router-dom'
import { CheckCircle, XCircle, ArrowRight, RotateCcw, Trophy, Target } from 'lucide-react'
import { books, bookDataMap } from '../data'
import { useWrongAnswers } from '../hooks/useWrongAnswers'
import type { Exercise } from '../types'

type Mode = 'select' | 'practice' | 'result'

interface QuizQuestion {
  bookId: number
  lessonId: number
  lessonTitle: string
  exercise: Exercise
  index: number
}

export default function PracticePage() {
  const { id } = useParams()
  const { addWrong } = useWrongAnswers()
  const [mode, setMode] = useState<Mode>('select')
  const [selectedBook, setSelectedBook] = useState<number>(id ? Number(id) : 0)
  const [questionCount, setQuestionCount] = useState(10)
  const [questions, setQuestions] = useState<QuizQuestion[]>([])
  const [currentIdx, setCurrentIdx] = useState(0)
  const [answers, setAnswers] = useState<Record<number, string>>({})
  const [showAnswer, setShowAnswer] = useState(false)

  const allExercises = useMemo(() => {
    const result: QuizQuestion[] = []
    const bookIds = selectedBook ? [selectedBook] : books.map(b => b.id)
    for (const bid of bookIds) {
      const lessons = bookDataMap[bid] || []
      for (const lesson of lessons) {
        if (!lesson.exercises) continue
        lesson.exercises.forEach((ex, i) => {
          result.push({ bookId: bid, lessonId: lesson.id, lessonTitle: lesson.titleCn, exercise: ex, index: i })
        })
      }
    }
    return result
  }, [selectedBook])

  const startPractice = useCallback(() => {
    const shuffled = [...allExercises].sort(() => Math.random() - 0.5).slice(0, questionCount)
    if (shuffled.length === 0) return
    setQuestions(shuffled)
    setCurrentIdx(0)
    setAnswers({})
    setShowAnswer(false)
    setMode('practice')
  }, [allExercises, questionCount])

  const current = questions[currentIdx]

  const handleAnswer = (answer: string) => {
    setAnswers(prev => ({ ...prev, [currentIdx]: answer }))
    setShowAnswer(true)
    // Track wrong answers
    if (answer.trim().toLowerCase() !== current.exercise.answer.trim().toLowerCase()) {
      addWrong({
        question: current.exercise.question,
        yourAnswer: answer,
        correctAnswer: current.exercise.answer,
        explanation: current.exercise.explanation,
        bookId: current.bookId,
        lessonId: current.lessonId,
        type: current.exercise.type,
      })
    }
  }

  const handleNext = () => {
    if (currentIdx < questions.length - 1) {
      setCurrentIdx(prev => prev + 1)
      setShowAnswer(false)
    } else {
      setMode('result')
    }
  }

  const score = useMemo(() => {
    let correct = 0
    questions.forEach((q, i) => {
      if (answers[i]?.trim().toLowerCase() === q.exercise.answer.trim().toLowerCase()) correct++
    })
    return correct
  }, [questions, answers])

  const resetPractice = () => {
    setMode('select')
    setQuestions([])
    setCurrentIdx(0)
    setAnswers({})
    setShowAnswer(false)
  }

  if (mode === 'select') {
    return (
      <div className="max-w-2xl mx-auto px-4 py-8">
        <h1 className="text-2xl font-bold text-gray-800 mb-2">练习测验</h1>
        <p className="text-sm text-gray-500 mb-6">选择范围和题数，开始答题练习</p>

        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-2">选择教材</label>
          <div className="grid grid-cols-2 sm:grid-cols-5 gap-2 mb-4">
            <button
              onClick={() => setSelectedBook(0)}
              className={`px-3 py-2 rounded-lg text-sm cursor-pointer border-0 transition-colors ${selectedBook === 0 ? 'bg-blue-600 text-white' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}`}
            >
              全部
            </button>
            {books.map(b => (
              <button
                key={b.id}
                onClick={() => setSelectedBook(b.id)}
                className={`px-3 py-2 rounded-lg text-sm cursor-pointer border-0 transition-colors ${selectedBook === b.id ? 'bg-blue-600 text-white' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}`}
              >
                {b.nameCn}
              </button>
            ))}
          </div>

          <label className="block text-sm font-medium text-gray-700 mb-2">题数</label>
          <div className="flex gap-2 mb-4">
            {[5, 10, 20, 50].map(n => (
              <button
                key={n}
                onClick={() => setQuestionCount(n)}
                className={`px-4 py-2 rounded-lg text-sm cursor-pointer border-0 transition-colors ${questionCount === n ? 'bg-blue-600 text-white' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}`}
              >
                {n}题
              </button>
            ))}
          </div>

          <div className="text-sm text-gray-400 mb-4">
            可用题目：{allExercises.length} 道
          </div>

          <button
            onClick={startPractice}
            disabled={allExercises.length === 0}
            className="w-full py-3 bg-blue-600 text-white rounded-lg text-sm font-medium hover:bg-blue-700 disabled:opacity-50 cursor-pointer transition-colors"
          >
            开始练习
          </button>
        </div>
      </div>
    )
  }

  if (mode === 'result') {
    const percent = Math.round((score / questions.length) * 100)
    return (
      <div className="max-w-2xl mx-auto px-4 py-8">
        <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-100 text-center">
          <Trophy size={48} className={`mx-auto mb-4 ${percent >= 80 ? 'text-amber-500' : percent >= 60 ? 'text-blue-500' : 'text-gray-400'}`} />
          <h2 className="text-2xl font-bold text-gray-800 mb-2">
            {percent >= 80 ? '太棒了！' : percent >= 60 ? '不错！' : '继续加油！'}
          </h2>
          <div className="text-5xl font-bold text-blue-600 mb-2">{score}/{questions.length}</div>
          <div className="text-sm text-gray-400 mb-6">正确率 {percent}%</div>

          <div className="space-y-2 text-left mb-6 max-h-64 overflow-y-auto">
            {questions.map((q, i) => {
              const userAns = answers[i] || '未作答'
              const isCorrect = userAns.trim().toLowerCase() === q.exercise.answer.trim().toLowerCase()
              return (
                <div key={i} className={`flex items-start gap-2 p-2 rounded-lg text-sm ${isCorrect ? 'bg-green-50' : 'bg-red-50'}`}>
                  {isCorrect ? <CheckCircle size={16} className="text-green-500 mt-0.5 flex-shrink-0" /> : <XCircle size={16} className="text-red-500 mt-0.5 flex-shrink-0" />}
                  <div className="min-w-0">
                    <div className="text-gray-700 truncate">{q.exercise.question}</div>
                    <div className="text-xs text-gray-400">
                      你的答案：{userAns} | 正确答案：{q.exercise.answer}
                    </div>
                  </div>
                </div>
              )
            })}
          </div>

          <div className="flex gap-3 justify-center">
            <button onClick={startPractice} className="flex items-center gap-1.5 px-4 py-2 bg-blue-600 text-white rounded-lg text-sm cursor-pointer transition-colors">
              <RotateCcw size={14} />再来一次
            </button>
            <button onClick={resetPractice} className="flex items-center gap-1.5 px-4 py-2 bg-gray-100 text-gray-600 rounded-lg text-sm cursor-pointer transition-colors">
              <Target size={14} />换范围
            </button>
          </div>
        </div>
      </div>
    )
  }

  // Practice mode
  if (!current) return null

  const renderQuestion = () => {
    const ex = current.exercise
    if (ex.type === 'choice') {
      return (
        <div className="space-y-2">
          {ex.options?.map((opt, i) => {
            const letter = String.fromCharCode(65 + i)
            const isSelected = answers[currentIdx] === letter
            const isCorrect = letter === ex.answer
            const showResult = showAnswer
            return (
              <button
                key={i}
                onClick={() => !showAnswer && handleAnswer(letter)}
                disabled={showAnswer}
                className={`w-full text-left px-4 py-3 rounded-lg text-sm cursor-pointer border-0 transition-colors ${
                  showResult
                    ? isCorrect ? 'bg-green-100 text-green-700' : isSelected ? 'bg-red-100 text-red-700' : 'bg-gray-50 text-gray-500'
                    : 'bg-gray-50 text-gray-700 hover:bg-blue-50'
                }`}
              >
                <span className="font-bold mr-2">{letter}.</span>{opt}
              </button>
            )
          })}
        </div>
      )
    }

    if (ex.type === 'fill') {
      return (
        <div>
          {showAnswer ? (
            <div className="p-4 bg-green-50 rounded-lg text-sm text-green-700">
              答案：<strong>{ex.answer}</strong>
            </div>
          ) : (
            <div className="flex gap-2">
              <input
                type="text"
                onKeyDown={e => { if (e.key === 'Enter' && (e.target as HTMLInputElement).value.trim()) handleAnswer((e.target as HTMLInputElement).value.trim()) }}
                placeholder="输入你的答案..."
                className="flex-1 px-3 py-2 bg-gray-50 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                autoFocus
              />
              <button
                onClick={() => { const input = document.querySelector('input[type="text"]') as HTMLInputElement; if (input?.value.trim()) handleAnswer(input.value.trim()) }}
                className="px-4 py-2 bg-blue-600 text-white rounded-lg text-sm cursor-pointer"
              >
                确认
              </button>
            </div>
          )}
        </div>
      )
    }

    if (ex.type === 'judge') {
      return (
        <div className="flex gap-3">
          {['正确', '错误'].map((opt) => {
            const val = opt === '正确' ? 'T' : 'F'
            const isSelected = answers[currentIdx] === val
            const isCorrect = val === ex.answer
            return (
              <button
                key={opt}
                onClick={() => !showAnswer && handleAnswer(val)}
                disabled={showAnswer}
                className={`flex-1 py-3 rounded-lg text-sm font-medium cursor-pointer border-0 transition-colors ${
                  showAnswer
                    ? isCorrect ? 'bg-green-100 text-green-700' : isSelected ? 'bg-red-100 text-red-700' : 'bg-gray-50 text-gray-500'
                    : 'bg-gray-50 text-gray-700 hover:bg-blue-50'
                }`}
              >
                {opt}
              </button>
            )
          })}
        </div>
      )
    }
    return null
  }

  return (
    <div className="max-w-2xl mx-auto px-4 py-8">
      {/* Progress */}
      <div className="flex items-center justify-between mb-4">
        <span className="text-sm text-gray-400">
          第 {currentIdx + 1} / {questions.length} 题
        </span>
        <span className="text-xs text-gray-400 bg-gray-100 px-2 py-0.5 rounded">
          第{current.bookId}册 · {current.lessonTitle}
        </span>
      </div>
      <div className="w-full h-1.5 bg-gray-100 rounded-full mb-6 overflow-hidden">
        <div className="h-full bg-blue-500 rounded-full transition-all" style={{ width: `${((currentIdx + 1) / questions.length) * 100}%` }} />
      </div>

      {/* Question */}
      <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 mb-4">
        <div className="flex items-center gap-2 mb-3">
          <span className={`text-xs px-2 py-0.5 rounded-full ${
            current.exercise.type === 'choice' ? 'bg-blue-50 text-blue-600' :
            current.exercise.type === 'fill' ? 'bg-orange-50 text-orange-600' :
            'bg-green-50 text-green-600'
          }`}>
            {current.exercise.type === 'choice' ? '选择题' : current.exercise.type === 'fill' ? '填空题' : '判断题'}
          </span>
        </div>
        <p className="text-base font-medium text-gray-800 mb-4">{current.exercise.question}</p>
        {renderQuestion()}
        {showAnswer && current.exercise.explanation && (
          <div className="mt-3 p-3 bg-blue-50 rounded-lg text-sm text-blue-700">
            {current.exercise.explanation}
          </div>
        )}
      </div>

      {showAnswer && (
        <button
          onClick={handleNext}
          className="w-full flex items-center justify-center gap-1.5 py-3 bg-blue-600 text-white rounded-lg text-sm font-medium cursor-pointer transition-colors"
        >
          {currentIdx < questions.length - 1 ? '下一题' : '查看结果'} <ArrowRight size={16} />
        </button>
      )}
    </div>
  )
}
