import UserAvatar from './UserAvatar'
import LikeButton from './LikeButton'
import type { Comment } from '../types'

interface CommentCardProps {
  comment: Comment
  currentUserId?: string
  onLike?: () => void
}

function timeAgo(ts: number): string {
  const diff = Date.now() - ts
  if (diff < 60000) return '刚刚'
  if (diff < 3600000) return `${Math.floor(diff / 60000)}分钟前`
  if (diff < 86400000) return `${Math.floor(diff / 3600000)}小时前`
  if (diff < 2592000000) return `${Math.floor(diff / 86400000)}天前`
  return new Date(ts).toLocaleDateString('zh-CN')
}

export default function CommentCard({ comment, currentUserId, onLike }: CommentCardProps) {
  return (
    <div className="flex gap-3 py-3 border-b border-gray-50 last:border-0">
      <UserAvatar photoURL={comment.userAvatar} name={comment.userName} size="sm" />
      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-2 mb-1">
          <span className="text-sm font-medium text-gray-700">{comment.userName}</span>
          <span className="text-xs text-gray-400">{timeAgo(comment.createdAt)}</span>
        </div>
        <p className="text-sm text-gray-600 m-0 whitespace-pre-wrap">{comment.content}</p>
        <div className="mt-1">
          <LikeButton
            count={comment.likes.length}
            liked={currentUserId ? comment.likes.includes(currentUserId) : false}
            onClick={() => onLike?.()}
            disabled={!currentUserId}
          />
        </div>
      </div>
    </div>
  )
}
