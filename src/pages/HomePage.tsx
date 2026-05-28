import { useMemo } from 'react'
import { Link } from 'react-router-dom'
import { BookOpen, Flame, Download, Upload, Quote, TrendingUp, Lightbulb, ArrowRight, Library, Trophy, Target, Zap, BarChart3, Clock } from 'lucide-react'
import { books, bookDataMap } from '../data'
import useProgress from '../hooks/useProgress'
import { useStudyData } from '../hooks/useStudyData'
import BookCard from '../components/BookCard'
import ProgressBar from '../components/ProgressBar'

const dailyQuotes = [
  { en: "The secret of getting ahead is getting started.", cn: "领先的秘诀在于开始行动。" },
  { en: "Success is not final, failure is not fatal: it is the courage to continue that counts.", cn: "成功不是终点，失败也不是致命的，重要的是继续前进的勇气。" },
  { en: "The only way to do great work is to love what you do.", cn: "做出伟大工作的唯一方法就是热爱你所做的事情。" },
  { en: "In the middle of difficulty lies opportunity.", cn: "困难之中蕴藏着机遇。" },
  { en: "Education is the most powerful weapon which you can use to change the world.", cn: "教育是你能用来改变世界的最强大的武器。" },
  { en: "The beautiful thing about learning is that nobody can take it away from you.", cn: "学习的美好之处在于没人能把它从你身上夺走。" },
  { en: "An investment in knowledge pays the best interest.", cn: "对知识的投资回报最高。" },
  { en: "The more that you read, the more things you will know.", cn: "你读的书越多，你知道的事情就越多。" },
  { en: "Live as if you were to die tomorrow. Learn as if you were to live forever.", cn: "如同明日将死那样生活，如同永远不死那样求知。" },
  { en: "It does not matter how slowly you go as long as you do not stop.", cn: "不怕慢，就怕站。" },
  { en: "A journey of a thousand miles begins with a single step.", cn: "千里之行，始于足下。" },
  { en: "Practice makes perfect.", cn: "熟能生巧。" },
  { en: "Knowledge is power.", cn: "知识就是力量。" },
  { en: "Where there is a will, there is a way.", cn: "有志者事竟成。" },
  { en: "Rome was not built in a day.", cn: "罗马不是一天建成的。" },
  { en: "The early bird catches the worm.", cn: "早起的鸟儿有虫吃。" },
  { en: "Actions speak louder than words.", cn: "行动胜于言语。" },
  { en: "Every cloud has a silver lining.", cn: "黑暗中总有一丝光明。" },
  { en: "Never too old to learn.", cn: "活到老，学到老。" },
  { en: "Well begun is half done.", cn: "好的开始是成功的一半。" },
  { en: "The pen is mightier than the sword.", cn: "笔杆子胜过枪杆子。" },
  { en: "Time and tide wait for no man.", cn: "岁月不待人。" },
  { en: "Reading is to the mind what exercise is to the body.", cn: "阅读之于心灵，犹如运动之于身体。" },
  { en: "A good book is a best friend who never turns his back upon us.", cn: "一本好书就是一位永远不会背弃我们的挚友。" },
  { en: "Genius is one percent inspiration and ninety-nine percent perspiration.", cn: "天才是百分之一的灵感加百分之九十九的汗水。" },
  { en: "If you want to understand today, you have to search yesterday.", cn: "想要懂得今天，就必须研究昨天。" },
  { en: "The greatest glory in living lies not in never falling, but in rising every time we fall.", cn: "生活中最大的荣耀不在于从不跌倒，而在于每次跌倒后都能站起来。" },
  { en: "Believe you can and you're halfway there.", cn: "相信你能做到，你就已经成功了一半。" },
  { en: "The only impossible journey is the one you never begin.", cn: "唯一不可能的旅程是你从未开始的那一个。" },
  { en: "What we learn with pleasure we never forget.", cn: "我们快乐地学到的东西永远不会忘记。" },
  { en: "Learning is a treasure that will follow its owner everywhere.", cn: "学习是跟随主人到处走的财富。" },
]

const learningTips = [
  { icon: '🎧', title: '多听多读', desc: '反复听课文音频，模仿语音语调，培养语感' },
  { icon: '📝', title: '坚持笔记', desc: '把生词和好句子记下来，定期复习巩固' },
  { icon: '🔄', title: '间隔复习', desc: '学完新课后，隔天、隔周再复习一遍效果更好' },
  { icon: '🗣️', title: '大声朗读', desc: '每天花10分钟朗读课文，口语和听力同步提升' },
]

function getDailyQuote() {
  const today = new Date()
  const dayOfYear = Math.floor((today.getTime() - new Date(today.getFullYear(), 0, 0).getTime()) / 86400000)
  return dailyQuotes[dayOfYear % dailyQuotes.length]
}

function getStudyStreak(lastStudyDate: string): number {
  if (!lastStudyDate) return 0
  const last = new Date(lastStudyDate)
  const today = new Date()
  const diffDays = Math.floor((today.getTime() - last.getTime()) / 86400000)
  if (diffDays <= 1) return diffDays === 0 ? 1 : 1
  return 0
}

function getNextLesson(completedLessons: string[]) {
  for (const book of books) {
    const lessons = bookDataMap[book.id] || []
    for (const lesson of lessons) {
      const key = `${book.id}-${lesson.id}`
      if (!completedLessons.includes(key)) {
        return { book, lesson }
      }
    }
  }
  return null
}

function getTotalVocab(completedLessons: string[]): number {
  let count = 0
  for (const key of completedLessons) {
    const [bookId, lessonId] = key.split('-').map(Number)
    const lessons = bookDataMap[bookId] || []
    const lesson = lessons.find((l) => l.id === lessonId)
    if (lesson) count += lesson.vocabulary.length
  }
  return count
}

export default function HomePage() {
  const { progress, getBookProgress, getCompletedCount, totalCompleted, exportProgress, importProgress } = useProgress()
  const studyData = useStudyData()

  const totalLessons = books.reduce((sum, b) => sum + b.lessonCount, 0)
  const dailyQuote = getDailyQuote()
  const streak = studyData.stats.streakDays || getStudyStreak(progress.lastStudyDate)
  const nextLesson = useMemo(() => getNextLesson(progress.completedLessons), [progress.completedLessons])
  const totalVocab = useMemo(() => getTotalVocab(progress.completedLessons), [progress.completedLessons])
  const overallPercent = totalLessons > 0 ? Math.round((totalCompleted / totalLessons) * 100) : 0
  const todayDuration = studyData.getTodayDuration()
  const todayMinutes = Math.floor(todayDuration / 60)

  const todayTip = learningTips[new Date().getDate() % learningTips.length]

  return (
    <div className="space-y-6">
      {/* Hero Banner */}
      <div className="bg-gradient-to-r from-blue-600 to-indigo-700 rounded-2xl p-8 text-white shadow-lg">
        <div className="flex items-center gap-3 mb-3">
          <Flame size={28} className="text-amber-400" />
          <h1 className="text-2xl font-bold m-0">每天进步一点点</h1>
        </div>
        <p className="text-blue-100 text-lg mb-6">
          坚持学习新概念英语，从入门到精通
        </p>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-5 gap-4">
          <div className="bg-white/15 backdrop-blur-sm rounded-xl p-4 text-center">
            <div className="text-3xl font-bold">{totalCompleted}</div>
            <div className="text-blue-200 text-sm mt-1">已完成课时</div>
          </div>
          <div className="bg-white/15 backdrop-blur-sm rounded-xl p-4 text-center">
            <div className="text-3xl font-bold">{overallPercent}%</div>
            <div className="text-blue-200 text-sm mt-1">总进度</div>
          </div>
          <div className="bg-white/15 backdrop-blur-sm rounded-xl p-4 text-center">
            <div className="text-3xl font-bold">{totalVocab}</div>
            <div className="text-blue-200 text-sm mt-1">已学词汇</div>
          </div>
          <div className="bg-white/15 backdrop-blur-sm rounded-xl p-4 text-center">
            <div className="text-3xl font-bold flex items-center justify-center gap-1">
              {streak > 0 ? <Zap size={24} className="text-amber-300" /> : null}
              {streak}
            </div>
            <div className="text-blue-200 text-sm mt-1">连续打卡</div>
          </div>
          <div className="bg-white/15 backdrop-blur-sm rounded-xl p-4 text-center">
            <div className="text-3xl font-bold flex items-center justify-center gap-1">
              <Clock size={24} className="text-emerald-300" />
              {todayMinutes}
            </div>
            <div className="text-blue-200 text-sm mt-1">今日学习(分钟)</div>
          </div>
        </div>

        {/* Overall Progress Bar */}
        <div className="mt-6">
          <div className="flex items-center justify-between text-sm mb-2">
            <span className="text-blue-200">总体学习进度</span>
            <span className="font-bold">{totalCompleted} / {totalLessons} 课</span>
          </div>
          <div className="w-full h-3 bg-white/20 rounded-full overflow-hidden">
            <div
              className="h-full rounded-full bg-gradient-to-r from-amber-400 to-yellow-300 transition-all duration-700"
              style={{ width: `${overallPercent}%` }}
            />
          </div>
        </div>
      </div>

      {/* Daily Quote + Next Lesson Row */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Daily Quote */}
        <div className="bg-gradient-to-br from-emerald-500 to-teal-600 rounded-xl p-6 text-white shadow-md">
          <div className="flex items-center gap-2 mb-3">
            <Quote size={20} className="text-emerald-200" />
            <h2 className="text-sm font-bold m-0 text-emerald-100">每日一句</h2>
          </div>
          <p className="text-lg font-medium mb-2 leading-relaxed">"{dailyQuote.en}"</p>
          <p className="text-emerald-100 text-sm">{dailyQuote.cn}</p>
        </div>

        {/* Next Lesson Recommendation */}
        {nextLesson ? (
          <Link
            to={`/book/${nextLesson.book.id}/lesson/${nextLesson.lesson.id}`}
            className="bg-gradient-to-br from-violet-500 to-purple-600 rounded-xl p-6 text-white shadow-md no-underline hover:shadow-lg transition-shadow group"
          >
            <div className="flex items-center gap-2 mb-3">
              <Target size={20} className="text-violet-200" />
              <h2 className="text-sm font-bold m-0 text-violet-100">继续学习</h2>
            </div>
            <p className="text-lg font-bold mb-1">
              第{nextLesson.book.id}册 · 第{nextLesson.lesson.id}课
            </p>
            <p className="text-violet-100 text-sm mb-3">{nextLesson.lesson.title}</p>
            <div className="flex items-center gap-1 text-sm font-medium text-violet-200 group-hover:text-white transition-colors">
              开始学习 <ArrowRight size={16} />
            </div>
          </Link>
        ) : (
          <div className="bg-gradient-to-br from-amber-500 to-orange-500 rounded-xl p-6 text-white shadow-md flex flex-col items-center justify-center text-center">
            <Trophy size={36} className="mb-2" />
            <h2 className="text-lg font-bold m-0">恭喜全部完成!</h2>
            <p className="text-amber-100 text-sm mt-1">你已经学完了所有课程</p>
          </div>
        )}
      </div>

      {/* Book Progress Overview */}
      <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
        <div className="flex items-center gap-2 mb-5">
          <TrendingUp size={20} className="text-blue-600" />
          <h2 className="text-lg font-bold text-gray-800 m-0">各册学习进度</h2>
        </div>
        <div className="space-y-4">
          {books.map((book) => {
            const completed = getCompletedCount(book.id)
            const percent = getBookProgress(book.id, book.lessonCount)
            return (
              <Link
                key={book.id}
                to={`/book/${book.id}`}
                className="flex items-center gap-4 p-3 rounded-lg hover:bg-gray-50 transition-colors no-underline group"
              >
                <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${book.color} flex items-center justify-center text-white font-bold text-sm flex-shrink-0 shadow-sm`}>
                  {book.id}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-sm font-semibold text-gray-800">{book.nameCn}</span>
                    <span className="text-xs text-gray-400">
                      {completed} / {book.lessonCount}
                    </span>
                  </div>
                  <ProgressBar value={percent} size="sm" />
                </div>
                <span className="text-sm font-bold text-blue-600 flex-shrink-0">{percent}%</span>
                <ArrowRight size={16} className="text-gray-300 group-hover:text-blue-600 transition-colors flex-shrink-0" />
              </Link>
            )
          })}
        </div>
      </div>

      {/* Learning Tip */}
      <div className="bg-gradient-to-r from-amber-50 to-orange-50 rounded-xl p-5 border border-amber-200">
        <div className="flex items-start gap-3">
          <span className="text-2xl">{todayTip.icon}</span>
          <div>
            <div className="flex items-center gap-2 mb-1">
              <Lightbulb size={16} className="text-amber-500" />
              <h3 className="text-sm font-bold text-amber-800 m-0">学习小贴士</h3>
            </div>
            <p className="text-sm font-semibold text-gray-700 mb-0.5">{todayTip.title}</p>
            <p className="text-sm text-gray-500 m-0">{todayTip.desc}</p>
          </div>
        </div>
      </div>

      {/* Data Management + Stats Link */}
      <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100 flex items-center justify-between flex-wrap gap-3">
        <div className="flex items-center gap-2 text-sm text-gray-500">
          <Library size={16} />
          <span>学习进度保存在本地浏览器中</span>
        </div>
        <div className="flex items-center gap-3">
          <Link
            to="/stats"
            className="inline-flex items-center gap-1.5 px-3 py-1.5 text-sm font-medium text-purple-600 bg-purple-50 hover:bg-purple-100 rounded-lg transition-colors no-underline"
          >
            <BarChart3 size={14} />
            查看详细统计
          </Link>
          <div className="flex gap-2">
            <button
              onClick={exportProgress}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-sm font-medium text-blue-600 bg-blue-50 hover:bg-blue-100 rounded-lg transition-colors cursor-pointer"
            >
              <Download size={14} />
              导出进度
            </button>
            <button
              onClick={importProgress}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-sm font-medium text-gray-600 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors cursor-pointer"
            >
              <Upload size={14} />
              导入进度
            </button>
          </div>
        </div>
      </div>

      {/* Book Selection */}
      <div>
        <div className="flex items-center gap-2 mb-4">
          <BookOpen size={22} className="text-blue-600" />
          <h2 className="text-lg font-bold text-gray-800 m-0">选择教材</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
          {books.map((book) => (
            <BookCard
              key={book.id}
              book={book}
              progress={getBookProgress(book.id, book.lessonCount)}
              completedCount={getCompletedCount(book.id)}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
