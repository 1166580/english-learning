export default function ProgressBar({ value, size = 'md' }: { value: number; size?: 'sm' | 'md' }) {
  const h = size === 'sm' ? 'h-2' : 'h-3'
  return (
    <div className={`w-full bg-gray-200 rounded-full ${h}`}>
      <div
        className={`${h} rounded-full bg-gradient-to-r from-blue-500 to-emerald-500 transition-all duration-500`}
        style={{ width: `${Math.min(value, 100)}%` }}
      />
    </div>
  )
}
