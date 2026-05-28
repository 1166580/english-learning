import { useState, useEffect } from 'react'
import { MessageSquare, HelpCircle, Share2, Plus, X, Send, Filter, TrendingUp, Clock } from 'lucide-react'
import { useAuth } from '../hooks/useAuth'
import { useFirestore } from '../hooks/useFirestore'
import { books, bookDataMap } from '../data'
import UserAvatar from '../components/UserAvatar'
import LikeButton from '../components/LikeButton'
import CommentCard from '../components/CommentCard'
import AuthModal from '../components/AuthModal'
import type { Post, Comment } from '../types'

const typeConfig = {
  discussion: { label: '讨论', icon: MessageSquare, color: 'text-blue-600 bg-blue-50' },
  question: { label: '提问', icon: HelpCircle, color: 'text-orange-600 bg-orange-50' },
  share: { label: '分享', icon: Share2, color: 'text-green-600 bg-green-50' },
}

function timeAgo(ts: number): string {
  const diff = Date.now() - ts
  if (diff < 60000) return '刚刚'
  if (diff < 3600000) return `${Math.floor(diff / 60000)}分钟前`
  if (diff < 86400000) return `${Math.floor(diff / 3600000)}小时前`
  if (diff < 2592000000) return `${Math.floor(diff / 86400000)}天前`
  return new Date(ts).toLocaleDateString('zh-CN')
}

export default function CommunityPage() {
  const { user, isConfigured } = useAuth()
  const { createPost, getPosts, toggleLike, addComment, getComments, toggleCommentLike } = useFirestore()

  const [posts, setPosts] = useState<Post[]>([])
  const [showForm, setShowForm] = useState(false)
  const [showAuth, setShowAuth] = useState(false)
  const [filterType, setFilterType] = useState<string>('')
  const [sortBy, setSortBy] = useState<'createdAt' | 'commentCount'>('createdAt')
  const [loading, setLoading] = useState(true)

  // New post form
  const [newType, setNewType] = useState<'discussion' | 'question' | 'share'>('discussion')
  const [newTitle, setNewTitle] = useState('')
  const [newContent, setNewContent] = useState('')
  const [newBookId, setNewBookId] = useState<number | ''>('')
  const [newLessonId, setNewLessonId] = useState<number | ''>('')

  // Expanded post (for comments)
  const [expandedPost, setExpandedPost] = useState<string | null>(null)
  const [comments, setComments] = useState<Record<string, Comment[]>>({})
  const [newComment, setNewComment] = useState('')

  const fetchPosts = async () => {
    setLoading(true)
    const { posts: fetched } = await getPosts({
      type: filterType || undefined,
      sortBy,
      limitCount: 50,
    })
    setPosts(fetched)
    setLoading(false)
  }

  useEffect(() => {
    if (isConfigured) fetchPosts()
  }, [filterType, sortBy, isConfigured])

  const handleCreate = async () => {
    if (!user || !newTitle.trim() || !newContent.trim()) return
    await createPost({
      userId: user.uid,
      userName: user.displayName || '匿名',
      userAvatar: user.photoURL || '',
      type: newType,
      title: newTitle.trim(),
      content: newContent.trim(),
      bookId: newBookId ? Number(newBookId) : undefined,
      lessonId: newLessonId ? Number(newLessonId) : undefined,
    })
    setShowForm(false)
    setNewTitle('')
    setNewContent('')
    setNewBookId('')
    setNewLessonId('')
    fetchPosts()
  }

  const handleLike = async (postId: string) => {
    if (!user) { setShowAuth(true); return }
    await toggleLike(postId, user.uid)
    fetchPosts()
  }

  const handleExpandPost = async (postId: string) => {
    if (expandedPost === postId) {
      setExpandedPost(null)
      return
    }
    setExpandedPost(postId)
    if (!comments[postId]) {
      const c = await getComments(postId)
      setComments(prev => ({ ...prev, [postId]: c }))
    }
  }

  const handleAddComment = async (postId: string) => {
    if (!user || !newComment.trim()) return
    await addComment(postId, {
      userId: user.uid,
      userName: user.displayName || '匿名',
      userAvatar: user.photoURL || '',
      content: newComment.trim(),
    })
    setNewComment('')
    const c = await getComments(postId)
    setComments(prev => ({ ...prev, [postId]: c }))
    fetchPosts()
  }

  const handleCommentLike = async (postId: string, commentId: string) => {
    if (!user) return
    await toggleCommentLike(postId, commentId, user.uid)
    const c = await getComments(postId)
    setComments(prev => ({ ...prev, [postId]: c }))
  }

  if (!isConfigured) {
    return (
      <div className="max-w-3xl mx-auto px-4 py-16 text-center">
        <MessageSquare size={48} className="mx-auto text-gray-300 mb-4" />
        <h2 className="text-xl font-bold text-gray-600 mb-2">社区功能未配置</h2>
        <p className="text-sm text-gray-400">网站管理员需要配置 Firebase 才能使用社区功能。</p>
      </div>
    )
  }

  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold text-gray-800 m-0">学习社区</h1>
        <button
          onClick={() => user ? setShowForm(true) : setShowAuth(true)}
          className="flex items-center gap-1.5 px-4 py-2 bg-blue-600 text-white rounded-lg text-sm font-medium hover:bg-blue-700 cursor-pointer transition-colors"
        >
          <Plus size={16} />发帖
        </button>
      </div>

      {/* Filters */}
      <div className="flex items-center gap-2 mb-4 flex-wrap">
        <div className="flex items-center gap-1">
          <Filter size={14} className="text-gray-400" />
          <button onClick={() => setFilterType('')} className={`px-2.5 py-1 text-xs rounded-full cursor-pointer border-0 transition-colors ${!filterType ? 'bg-blue-600 text-white' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}`}>全部</button>
          {(Object.keys(typeConfig) as Array<keyof typeof typeConfig>).map(t => (
            <button key={t} onClick={() => setFilterType(t)} className={`px-2.5 py-1 text-xs rounded-full cursor-pointer border-0 transition-colors ${filterType === t ? 'bg-blue-600 text-white' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}`}>
              {typeConfig[t].label}
            </button>
          ))}
        </div>
        <div className="flex-1" />
        <div className="flex items-center gap-1">
          <button onClick={() => setSortBy('createdAt')} className={`flex items-center gap-1 px-2.5 py-1 text-xs rounded-full cursor-pointer border-0 transition-colors ${sortBy === 'createdAt' ? 'bg-blue-600 text-white' : 'bg-gray-100 text-gray-600'}`}>
            <Clock size={12} />最新
          </button>
          <button onClick={() => setSortBy('commentCount')} className={`flex items-center gap-1 px-2.5 py-1 text-xs rounded-full cursor-pointer border-0 transition-colors ${sortBy === 'commentCount' ? 'bg-blue-600 text-white' : 'bg-gray-100 text-gray-600'}`}>
            <TrendingUp size={12} />热门
          </button>
        </div>
      </div>

      {/* New Post Form */}
      {showForm && (
        <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100 mb-4">
          <div className="flex items-center justify-between mb-3">
            <h3 className="text-sm font-bold text-gray-800 m-0">发布帖子</h3>
            <button onClick={() => setShowForm(false)} className="text-gray-400 hover:text-gray-600 cursor-pointer bg-transparent border-0"><X size={16} /></button>
          </div>
          <div className="flex gap-2 mb-3">
            {(Object.keys(typeConfig) as Array<keyof typeof typeConfig>).map(t => (
              <button key={t} onClick={() => setNewType(t)} className={`px-3 py-1 text-xs rounded-full cursor-pointer border-0 transition-colors ${newType === t ? typeConfig[t].color : 'bg-gray-100 text-gray-600'}`}>
                {typeConfig[t].label}
              </button>
            ))}
          </div>
          <input
            type="text" value={newTitle} onChange={e => setNewTitle(e.target.value)}
            placeholder="标题"
            className="w-full px-3 py-2 bg-gray-50 border border-gray-200 rounded-lg text-sm mb-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <textarea
            value={newContent} onChange={e => setNewContent(e.target.value)}
            placeholder="内容..."
            className="w-full px-3 py-2 bg-gray-50 border border-gray-200 rounded-lg text-sm mb-2 resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
            rows={4}
          />
          <div className="flex gap-2 mb-3">
            <select value={newBookId} onChange={e => { setNewBookId(e.target.value ? Number(e.target.value) : ''); setNewLessonId('') }}
              className="px-2 py-1.5 bg-gray-50 border border-gray-200 rounded-lg text-xs focus:outline-none">
              <option value="">关联教材（可选）</option>
              {books.map(b => <option key={b.id} value={b.id}>{b.nameCn}</option>)}
            </select>
            {newBookId && (
              <select value={newLessonId} onChange={e => setNewLessonId(e.target.value ? Number(e.target.value) : '')}
                className="px-2 py-1.5 bg-gray-50 border border-gray-200 rounded-lg text-xs focus:outline-none">
                <option value="">关联课文（可选）</option>
                {(bookDataMap[Number(newBookId)] || []).map(l => <option key={l.id} value={l.id}>第{l.id}课 {l.titleCn}</option>)}
              </select>
            )}
          </div>
          <button onClick={handleCreate} disabled={!newTitle.trim() || !newContent.trim()}
            className="flex items-center gap-1 px-4 py-2 bg-blue-600 text-white rounded-lg text-sm font-medium disabled:opacity-50 cursor-pointer transition-colors">
            <Send size={14} />发布
          </button>
        </div>
      )}

      {/* Posts List */}
      {loading ? (
        <div className="text-center py-12 text-gray-400">加载中...</div>
      ) : posts.length === 0 ? (
        <div className="text-center py-12">
          <MessageSquare size={36} className="mx-auto text-gray-300 mb-3" />
          <p className="text-sm text-gray-400">还没有帖子，快来发第一帖吧！</p>
        </div>
      ) : (
        <div className="space-y-3">
          {posts.map(post => {
            const cfg = typeConfig[post.type]
            const Icon = cfg.icon
            const isExpanded = expandedPost === post.id
            return (
              <div key={post.id} className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
                <div className="p-4">
                  <div className="flex items-start gap-3">
                    <UserAvatar photoURL={post.userAvatar} name={post.userName} size="sm" />
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-sm font-medium text-gray-700">{post.userName}</span>
                        <span className="text-xs text-gray-400">{timeAgo(post.createdAt)}</span>
                      </div>
                      <div className="flex items-center gap-2 mb-2">
                        <span className={`flex items-center gap-1 text-xs px-2 py-0.5 rounded-full ${cfg.color}`}>
                          <Icon size={12} />{cfg.label}
                        </span>
                        {post.bookId && (
                          <span className="text-xs text-gray-400">
                            第{post.bookId}册{post.lessonId ? ` · 第${post.lessonId}课` : ''}
                          </span>
                        )}
                      </div>
                      <h3 className="text-sm font-bold text-gray-800 m-0 mb-1">{post.title}</h3>
                      <p className="text-sm text-gray-600 m-0 whitespace-pre-wrap">{post.content}</p>
                      <div className="flex items-center gap-4 mt-3">
                        <LikeButton
                          count={post.likes.length}
                          liked={user ? post.likes.includes(user.uid) : false}
                          onClick={() => handleLike(post.id)}
                        />
                        <button
                          onClick={() => handleExpandPost(post.id)}
                          className={`flex items-center gap-1 text-sm cursor-pointer bg-transparent border-0 transition-colors ${isExpanded ? 'text-blue-600' : 'text-gray-400 hover:text-blue-500'}`}
                        >
                          <MessageSquare size={16} />
                          {post.commentCount > 0 && <span>{post.commentCount}</span>}
                        </button>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Comments */}
                {isExpanded && (
                  <div className="border-t border-gray-100 px-4 pb-4">
                    <div className="pt-3 space-y-0">
                      {(comments[post.id] || []).map(c => (
                        <CommentCard
                          key={c.id}
                          comment={c}
                          currentUserId={user?.uid}
                          onLike={() => handleCommentLike(post.id, c.id)}
                        />
                      ))}
                      {(comments[post.id] || []).length === 0 && (
                        <p className="text-xs text-gray-400 text-center py-3">暂无评论</p>
                      )}
                    </div>
                    {user ? (
                      <div className="flex gap-2 mt-2">
                        <input
                          type="text" value={newComment} onChange={e => setNewComment(e.target.value)}
                          onKeyDown={e => e.key === 'Enter' && handleAddComment(post.id)}
                          placeholder="写评论..."
                          className="flex-1 px-3 py-1.5 bg-gray-50 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                        <button onClick={() => handleAddComment(post.id)} disabled={!newComment.trim()}
                          className="px-3 py-1.5 bg-blue-600 text-white rounded-lg text-sm disabled:opacity-50 cursor-pointer">
                          <Send size={14} />
                        </button>
                      </div>
                    ) : (
                      <button onClick={() => setShowAuth(true)} className="w-full py-2 text-xs text-blue-600 bg-blue-50 rounded-lg cursor-pointer border-0">
                        登录后评论
                      </button>
                    )}
                  </div>
                )}
              </div>
            )
          })}
        </div>
      )}

      <AuthModal open={showAuth} onClose={() => setShowAuth(false)} />
    </div>
  )
}
