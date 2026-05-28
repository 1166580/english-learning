import { useMemo, useEffect } from 'react'
import { BookOpen, Clock, Flame, Calendar, TrendingUp, Library, Download, Upload, Trash2, Trophy } from 'lucide-react'
import { books, bookDataMap } from '../data'
import { useStudyData } from '../hooks/useStudyData'
import useProgress from '../hooks/useProgress'
import { useAchievements } from '../hooks/useAchievements'
import StatsCard from '../components/StatsCard'
import StreakCalendar from '../components/StreakCalendar'

function formatDuration(seconds: number): string {
  if (seconds < 60) return `${seconds}秒`
  if (seconds < 3600) return `${Math.floor(seconds / 60)}分钟`
  const h = Math.floor(seconds / 3600)
  const m = Math.floor((seconds % 3600) / 60)
  return m > 0 ? `${h}小时${m}分钟` : `${h}小时`
}

export default function StatsPage() {
  const studyData = useStudyData()
  const { totalCompleted, exportProgress, importProgress } = useProgress()
  const { achievements, unlockedCount, totalCount, checkAchievements } = useAchievements()

  useEffect(() => {
    const bookProg: Record<number, number> = {}
    for (const book of books) {
      bookProg[book.id] = studyData.getBookLessons(book.id)
    }
    checkAchievements({
      completedLessons: totalCompleted,
      streakDays: studyData.stats.streakDays,
      totalWords: studyData.stats.totalWords,
      totalDuration: studyData.getTotalDuration(),
      bookProgress: bookProg,
    })
  }, [totalCompleted, studyData.stats.streakDays, studyData.stats.totalWords])

  const studyDays = studyData.getStudyDays()
  const totalDuration = studyData.getTotalDuration()
  const todayDuration = studyData.getTodayDuration()
  const dailyDurations7 = studyData.getDailyDurations(7)
  const dailyDurations30 = studyData.getDailyDurations(30)
  const studiedDates = studyData.getStudiedDates()

  const maxDuration7 = Math.max(...dailyDurations7.map(d => d.duration), 1)
  const maxDuration30 = Math.max(...dailyDurations30.map(d => d.duration), 1)

  const bookProgress = useMemo(() => {
    return books.map(book => {
      const lessons = bookDataMap[book.id] || []
      const studied = studyData.getBookLessons(book.id)
      const completed = Math.round((studied / lessons.length) * 100)
      return { ...book, studied, total: lessons.length, completed }
    })
  }, [studyData])

  const recentSessions = useMemo(() => {
    return studyData.stats.sessions
      .slice(-20)
      .reverse()
      .map(s => {
        const book = books.find(b => b.id === s.bookId)
        const lessons = bookDataMap[s.bookId] || []
        const lesson = lessons.find(l => l.id === s.lessonId)
        return { ...s, bookName: book?.nameCn || '', lessonTitle: lesson?.titleCn || '' }
      })
  }, [studyData.stats.sessions])

  const handleExportStudyData = () => {
    const data = studyData.exportData()
    const blob = new Blob([data], { type: 'application/json' })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = `nce-study-data-${new Date().toISOString().slice(0, 10)}.json`
    a.click()
    URL.revokeObjectURL(url)
  }

  const handleImportStudyData = () => {
    const input = document.createElement('input')
    input.type = 'file'
    input.accept = '.json'
    input.onchange = () => {
      const file = input.files?.[0]
      if (!file) return
      const reader = new FileReader()
      reader.onload = () => {
        if (studyData.importData(reader.result as string)) {
          alert('导入成功！')
        } else {
          alert('文件格式不正确')
        }
      }
      reader.readAsText(file)
    }
    input.click()
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-6">学习统计</h1>

      {/* 总览卡片 */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 mb-6">
        <StatsCard icon={Calendar} label="学习天数" value={studyDays} color="blue" />
        <StatsCard icon={BookOpen} label="完成课文" value={totalCompleted} color="green" />
        <StatsCard icon={Library} label="学习单词" value={studyData.stats.totalWords} color="purple" />
        <StatsCard icon={Clock} label="累计时长" value={formatDuration(totalDuration)} color="orange" />
        <StatsCard icon={Flame} label="连续打卡" value={`${studyData.stats.streakDays}天`} color="red" />
        <StatsCard icon={TrendingUp} label="今日学习" value={formatDuration(todayDuration)} color="teal" />
      </div>

      {/* 打卡日历 */}
      <div className="mb-6">
        <StreakCalendar studiedDates={studiedDates} />
      </div>

      {/* 学习趋势 */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
        <div className="bg-white dark:bg-gray-800 rounded-xl p-4 shadow-sm border border-gray-100 dark:border-gray-700">
          <h3 className="text-sm font-bold text-gray-800 dark:text-gray-200 mb-3">最近7天学习时长</h3>
          <div className="flex items-end gap-1 h-32">
            {dailyDurations7.map((d, i) => (
              <div key={i} className="flex-1 flex flex-col items-center gap-1">
                <div className="w-full flex flex-col items-center justify-end h-24">
                  {d.duration > 0 && (
                    <div className="text-[10px] text-gray-400 mb-0.5">{formatDuration(d.duration)}</div>
                  )}
                  <div
                    className="w-full bg-blue-400 rounded-t-sm transition-all min-h-[2px]"
                    style={{ height: `${Math.max((d.duration / maxDuration7) * 80, d.duration > 0 ? 8 : 2)}%` }}
                  />
                </div>
                <div className="text-[10px] text-gray-400">{d.date.slice(5)}</div>
              </div>
            ))}
          </div>
        </div>
        <div className="bg-white dark:bg-gray-800 rounded-xl p-4 shadow-sm border border-gray-100 dark:border-gray-700">
          <h3 className="text-sm font-bold text-gray-800 dark:text-gray-200 mb-3">最近30天学习时长</h3>
          <div className="flex items-end gap-px h-32">
            {dailyDurations30.map((d, i) => (
              <div key={i} className="flex-1 flex flex-col items-center justify-end h-24">
                <div
                  className="w-full bg-green-400 rounded-t-sm transition-all min-h-[2px]"
                  style={{ height: `${Math.max((d.duration / maxDuration30) * 80, d.duration > 0 ? 4 : 1)}%` }}
                  title={`${d.date}: ${formatDuration(d.duration)}`}
                />
              </div>
            ))}
          </div>
          <div className="flex justify-between text-[10px] text-gray-400 mt-1">
            <span>{dailyDurations30[0]?.date.slice(5)}</span>
            <span>{dailyDurations30[dailyDurations30.length - 1]?.date.slice(5)}</span>
          </div>
        </div>
      </div>

      {/* 分册进度 */}
      <div className="bg-white dark:bg-gray-800 rounded-xl p-4 shadow-sm border border-gray-100 dark:border-gray-700 mb-6">
        <h3 className="text-sm font-bold text-gray-800 dark:text-gray-200 mb-4">分册学习进度</h3>
        <div className="space-y-3">
          {bookProgress.map(book => (
            <div key={book.id}>
              <div className="flex justify-between text-sm mb-1">
                <span className="font-medium text-gray-700">{book.nameCn}</span>
                <span className="text-gray-400">{book.studied}/{book.total} 课 ({book.completed}%)</span>
              </div>
              <div className="w-full h-2 bg-gray-100 rounded-full overflow-hidden">
                <div
                  className="h-full rounded-full transition-all"
                  style={{
                    width: `${book.completed}%`,
                    backgroundColor: book.color,
                  }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 最近学习记录 */}
      <div className="bg-white dark:bg-gray-800 rounded-xl p-4 shadow-sm border border-gray-100 dark:border-gray-700 mb-6">
        <h3 className="text-sm font-bold text-gray-800 dark:text-gray-200 mb-3">最近学习记录</h3>
        {recentSessions.length === 0 ? (
          <p className="text-sm text-gray-400 text-center py-8">还没有学习记录，快去学习课文吧！</p>
        ) : (
          <div className="space-y-2 max-h-64 overflow-y-auto">
            {recentSessions.map((s, i) => (
              <div key={i} className="flex items-center justify-between text-sm py-2 border-b border-gray-50 last:border-0">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-bold text-blue-600 bg-blue-50 px-1.5 py-0.5 rounded">{s.bookName}</span>
                  <span className="text-gray-700">{s.lessonTitle}</span>
                </div>
                <div className="flex items-center gap-3 text-gray-400">
                  <span>{formatDuration(s.duration)}</span>
                  <span>{s.date}</span>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* 成就系统 */}
      <div className="bg-white dark:bg-gray-800 rounded-xl p-4 shadow-sm border border-gray-100 dark:border-gray-700 mb-6">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <Trophy size={18} className="text-amber-500" />
            <h3 className="text-sm font-bold text-gray-800 dark:text-gray-200 m-0">成就徽章</h3>
          </div>
          <span className="text-xs text-gray-400">{unlockedCount} / {totalCount}</span>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          {achievements.map(a => (
            <div key={a.id} className={`flex items-center gap-2 p-3 rounded-lg border transition-colors ${
              a.unlocked ? 'bg-amber-50 border-amber-200' : 'bg-gray-50 border-gray-100 opacity-50'
            }`}>
              <span className="text-2xl">{a.icon}</span>
              <div className="min-w-0">
                <div className={`text-xs font-bold ${a.unlocked ? 'text-amber-700' : 'text-gray-400'}`}>{a.name}</div>
                <div className="text-[10px] text-gray-400 truncate">{a.desc}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 数据管理 */}
      <div className="bg-white dark:bg-gray-800 rounded-xl p-4 shadow-sm border border-gray-100 dark:border-gray-700">
        <h3 className="text-sm font-bold text-gray-800 dark:text-gray-200 mb-3">数据管理</h3>
        <div className="flex flex-wrap gap-2">
          <button onClick={exportProgress} className="flex items-center gap-1.5 px-3 py-1.5 text-sm bg-blue-50 text-blue-600 rounded-lg hover:bg-blue-100 transition-colors cursor-pointer">
            <Download size={14} />导出学习进度
          </button>
          <button onClick={importProgress} className="flex items-center gap-1.5 px-3 py-1.5 text-sm bg-green-50 text-green-600 rounded-lg hover:bg-green-100 transition-colors cursor-pointer">
            <Upload size={14} />导入学习进度
          </button>
          <button onClick={handleExportStudyData} className="flex items-center gap-1.5 px-3 py-1.5 text-sm bg-purple-50 text-purple-600 rounded-lg hover:bg-purple-100 transition-colors cursor-pointer">
            <Download size={14} />导出统计数据
          </button>
          <button onClick={handleImportStudyData} className="flex items-center gap-1.5 px-3 py-1.5 text-sm bg-orange-50 text-orange-600 rounded-lg hover:bg-orange-100 transition-colors cursor-pointer">
            <Upload size={14} />导入统计数据
          </button>
          <button onClick={() => { if (confirm('确定要清除所有统计数据吗？')) studyData.clearData() }} className="flex items-center gap-1.5 px-3 py-1.5 text-sm bg-red-50 text-red-600 rounded-lg hover:bg-red-100 transition-colors cursor-pointer">
            <Trash2 size={14} />清除统计数据
          </button>
        </div>
      </div>
    </div>
  )
}
