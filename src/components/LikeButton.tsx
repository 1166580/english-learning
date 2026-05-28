import { Heart } from 'lucide-react'

interface LikeButtonProps {
  count: number
  liked: boolean
  onClick: () => void
  disabled?: boolean
}

export default function LikeButton({ count, liked, onClick, disabled }: LikeButtonProps) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`flex items-center gap-1 text-sm transition-colors cursor-pointer bg-transparent border-0 ${
        liked ? 'text-red-500' : 'text-gray-400 hover:text-red-400'
      } disabled:opacity-50`}
    >
      <Heart size={16} fill={liked ? 'currentColor' : 'none'} />
      {count > 0 && <span>{count}</span>}
    </button>
  )
}
