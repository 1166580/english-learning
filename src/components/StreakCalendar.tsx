import { useMemo } from 'react'

interface StreakCalendarProps {
  studiedDates: Set<string>
  weeks?: number
}

export default function StreakCalendar({ studiedDates, weeks = 20 }: StreakCalendarProps) {
  const grid = useMemo(() => {
    const today = new Date()
    const cells: { date: string; studied: boolean; isToday: boolean; isFuture: boolean }[] = []

    const startDate = new Date(today)
    startDate.setDate(startDate.getDate() - (weeks * 7 - 1) - startDate.getDay())

    for (let i = 0; i < weeks * 7; i++) {
      const d = new Date(startDate)
      d.setDate(d.getDate() + i)
      const dateStr = d.toISOString().slice(0, 10)
      const todayStr = today.toISOString().slice(0, 10)
      cells.push({
        date: dateStr,
        studied: studiedDates.has(dateStr),
        isToday: dateStr === todayStr,
        isFuture: dateStr > todayStr,
      })
    }
    return cells
  }, [studiedDates, weeks])

  const dayLabels = ['日', '一', '二', '三', '四', '五', '六']

  return (
    <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100">
      <h3 className="text-sm font-bold text-gray-800 mb-3">打卡日历</h3>
      <div className="flex gap-0.5">
        <div className="flex flex-col gap-0.5 mr-1">
          {dayLabels.map((d, i) => (
            <div key={i} className="w-4 h-4 text-[10px] text-gray-400 flex items-center justify-center">
              {i % 2 === 1 ? d : ''}
            </div>
          ))}
        </div>
        <div className="flex flex-col flex-1">
          {[0, 1, 2, 3, 4, 5, 6].map(row => (
            <div key={row} className="flex gap-0.5">
              {grid.filter((_, i) => i % 7 === row).map((cell, i) => (
                <div
                  key={i}
                  title={`${cell.date}${cell.studied ? ' ✓' : ''}`}
                  className={`flex-1 aspect-square rounded-sm text-[8px] flex items-center justify-center ${
                    cell.isFuture
                      ? 'bg-gray-50'
                      : cell.isToday
                        ? cell.studied ? 'bg-green-500 ring-2 ring-green-300' : 'bg-gray-200 ring-2 ring-blue-300'
                        : cell.studied ? 'bg-green-400' : 'bg-gray-100'
                  }`}
                />
              ))}
            </div>
          ))}
        </div>
      </div>
      <div className="flex items-center gap-3 mt-3 text-xs text-gray-400">
        <div className="flex items-center gap-1">
          <div className="w-3 h-3 bg-gray-100 rounded-sm" />未学习
        </div>
        <div className="flex items-center gap-1">
          <div className="w-3 h-3 bg-green-400 rounded-sm" />已学习
        </div>
        <div className="flex items-center gap-1">
          <div className="w-3 h-3 bg-green-500 ring-2 ring-green-300 rounded-sm" />今天
        </div>
      </div>
    </div>
  )
}
