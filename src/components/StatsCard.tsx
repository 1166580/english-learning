import type { LucideIcon } from 'lucide-react'

interface StatsCardProps {
  icon: LucideIcon
  label: string
  value: string | number
  sub?: string
  color?: string
}

export default function StatsCard({ icon: Icon, label, value, sub, color = 'blue' }: StatsCardProps) {
  const colorMap: Record<string, string> = {
    blue: 'bg-blue-50 text-blue-600',
    green: 'bg-green-50 text-green-600',
    orange: 'bg-orange-50 text-orange-600',
    purple: 'bg-purple-50 text-purple-600',
    red: 'bg-red-50 text-red-600',
    teal: 'bg-teal-50 text-teal-600',
  }
  const iconColor = colorMap[color] || colorMap.blue

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl p-4 shadow-sm border border-gray-100 dark:border-gray-700 flex items-center gap-4">
      <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${iconColor}`}>
        <Icon size={24} />
      </div>
      <div>
        <div className="text-2xl font-bold text-gray-800 dark:text-gray-200">{value}</div>
        <div className="text-sm text-gray-500 dark:text-gray-400">{label}</div>
        {sub && <div className="text-xs text-gray-400 mt-0.5">{sub}</div>}
      </div>
    </div>
  )
}
