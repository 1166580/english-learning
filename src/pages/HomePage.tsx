import { BookOpen, Flame, Download, Upload, Quote } from 'lucide-react'
import { books } from '../data'
import useProgress from '../hooks/useProgress'
import BookCard from '../components/BookCard'

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

function getDailyQuote() {
  const today = new Date()
  const dayOfYear = Math.floor((today.getTime() - new Date(today.getFullYear(), 0, 0).getTime()) / 86400000)
  return dailyQuotes[dayOfYear % dailyQuotes.length]
}

export default function HomePage() {
  const { getBookProgress, getCompletedCount, totalCompleted, exportProgress, importProgress } = useProgress()

  const totalLessons = books.reduce((sum, b) => sum + b.lessonCount, 0)
  const dailyQuote = getDailyQuote()

  return (
    <div className="space-y-8">
      {/* Hero Banner */}
      <div className="bg-gradient-to-r from-blue-600 to-indigo-700 rounded-2xl p-8 text-white shadow-lg">
        <div className="flex items-center gap-3 mb-3">
          <Flame size={28} className="text-amber-400" />
          <h1 className="text-2xl font-bold m-0">每天进步一点点</h1>
        </div>
        <p className="text-blue-100 text-lg mb-4">
          坚持学习新概念英语，从入门到精通
        </p>
        <div className="flex gap-6 text-sm">
          <div className="bg-white/20 rounded-lg px-4 py-2">
            <div className="text-2xl font-bold">{totalCompleted}</div>
            <div className="text-blue-100">已完成课时</div>
          </div>
          <div className="bg-white/20 rounded-lg px-4 py-2">
            <div className="text-2xl font-bold">{totalLessons}</div>
            <div className="text-blue-100">全部课时</div>
          </div>
          <div className="bg-white/20 rounded-lg px-4 py-2">
            <div className="text-2xl font-bold">{books.length}</div>
            <div className="text-blue-100">学习阶段</div>
          </div>
        </div>
      </div>

      {/* Daily Quote */}
      <div className="bg-gradient-to-r from-emerald-500 to-teal-600 rounded-xl p-6 text-white shadow-md">
        <div className="flex items-center gap-2 mb-3">
          <Quote size={20} className="text-emerald-200" />
          <h2 className="text-sm font-bold m-0 text-emerald-100">每日一句</h2>
        </div>
        <p className="text-lg font-medium mb-2 leading-relaxed">"{dailyQuote.en}"</p>
        <p className="text-emerald-100 text-sm">{dailyQuote.cn}</p>
      </div>

      {/* Data Management */}
      <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100 flex items-center justify-between flex-wrap gap-3">
        <span className="text-sm text-gray-500">学习进度保存在本地浏览器中</span>
        <div className="flex gap-2">
          <button
            onClick={exportProgress}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 text-sm font-medium text-blue-600 bg-blue-50 hover:bg-blue-100 rounded-lg transition-colors"
          >
            <Download size={14} />
            导出进度
          </button>
          <button
            onClick={importProgress}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 text-sm font-medium text-gray-600 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors"
          >
            <Upload size={14} />
            导入进度
          </button>
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
