import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { User, Edit3, Save, LogOut, MessageSquare, Heart } from 'lucide-react'
import { useAuth } from '../hooks/useAuth'
import { useFirestore } from '../hooks/useFirestore'
import { useStudyData } from '../hooks/useStudyData'
import useProgress from '../hooks/useProgress'
import UserAvatar from '../components/UserAvatar'
import AuthModal from '../components/AuthModal'
import type { Post } from '../types'

export default function ProfilePage() {
  const { user, profile, loading, isConfigured, logout, updateProfileData } = useAuth()
  const { getUserPosts } = useFirestore()
  const studyData = useStudyData()
  const { totalCompleted } = useProgress()
  const navigate = useNavigate()

  const [editing, setEditing] = useState(false)
  const [displayName, setDisplayName] = useState('')
  const [bio, setBio] = useState('')
  const [showAuth, setShowAuth] = useState(false)
  const [userPosts, setUserPosts] = useState<Post[]>([])

  useEffect(() => {
    if (profile) {
      setDisplayName(profile.displayName)
      setBio(profile.bio)
    }
  }, [profile])

  useEffect(() => {
    if (user) {
      getUserPosts(user.uid).then(setUserPosts)
    }
  }, [user, getUserPosts])

  if (!isConfigured) {
    return (
      <div className="max-w-2xl mx-auto px-4 py-16 text-center">
        <User size={48} className="mx-auto text-gray-300 mb-4" />
        <h2 className="text-xl font-bold text-gray-600 mb-2">用户系统未配置</h2>
        <p className="text-sm text-gray-400">网站管理员需要配置 Firebase 才能使用此功能。</p>
      </div>
    )
  }

  if (loading) {
    return <div className="text-center py-20 text-gray-400">加载中...</div>
  }

  if (!user) {
    return (
      <>
        <div className="max-w-2xl mx-auto px-4 py-16 text-center">
          <User size={48} className="mx-auto text-gray-300 mb-4" />
          <h2 className="text-xl font-bold text-gray-600 mb-2">登录后查看个人中心</h2>
          <p className="text-sm text-gray-400 mb-4">登录后可以同步学习数据、参与社区讨论</p>
          <button onClick={() => setShowAuth(true)} className="px-6 py-2 bg-blue-600 text-white rounded-lg text-sm font-medium hover:bg-blue-700 cursor-pointer transition-colors">
            登录 / 注册
          </button>
        </div>
        <AuthModal open={showAuth} onClose={() => setShowAuth(false)} />
      </>
    )
  }

  const handleSave = () => {
    updateProfileData({ displayName, bio })
    setEditing(false)
  }

  const handleLogout = async () => {
    await logout()
    navigate('/')
  }

  const studyDays = studyData.getStudyDays()
  const totalDuration = studyData.getTotalDuration()
  const totalHours = Math.floor(totalDuration / 3600)

  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      {/* Profile Header */}
      <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 mb-6">
        <div className="flex items-start gap-4">
          <UserAvatar photoURL={user.photoURL || undefined} name={profile?.displayName} size="lg" />
          <div className="flex-1">
            {editing ? (
              <div className="space-y-2">
                <input
                  type="text" value={displayName} onChange={e => setDisplayName(e.target.value)}
                  className="w-full px-3 py-1.5 bg-gray-50 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="昵称"
                />
                <textarea
                  value={bio} onChange={e => setBio(e.target.value)}
                  className="w-full px-3 py-1.5 bg-gray-50 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
                  placeholder="个人简介"
                  rows={2}
                />
                <button onClick={handleSave} className="flex items-center gap-1 px-3 py-1.5 bg-blue-600 text-white rounded-lg text-sm cursor-pointer">
                  <Save size={14} />保存
                </button>
              </div>
            ) : (
              <>
                <h2 className="text-xl font-bold text-gray-800 m-0">{profile?.displayName || '学习者'}</h2>
                <p className="text-sm text-gray-400 m-0">{user.email}</p>
                {profile?.bio && <p className="text-sm text-gray-500 mt-1">{profile.bio}</p>}
                <button onClick={() => setEditing(true)} className="flex items-center gap-1 mt-2 text-xs text-blue-600 cursor-pointer bg-transparent border-0">
                  <Edit3 size={12} />编辑资料
                </button>
              </>
            )}
          </div>
          <button onClick={handleLogout} className="flex items-center gap-1 px-3 py-1.5 text-sm text-red-500 hover:bg-red-50 rounded-lg cursor-pointer transition-colors bg-transparent border-0">
            <LogOut size={14} />退出
          </button>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-6">
        <div className="bg-white rounded-xl p-4 text-center shadow-sm border border-gray-100">
          <div className="text-2xl font-bold text-blue-600">{totalCompleted}</div>
          <div className="text-xs text-gray-400">完成课文</div>
        </div>
        <div className="bg-white rounded-xl p-4 text-center shadow-sm border border-gray-100">
          <div className="text-2xl font-bold text-green-600">{studyData.stats.totalWords}</div>
          <div className="text-xs text-gray-400">学习单词</div>
        </div>
        <div className="bg-white rounded-xl p-4 text-center shadow-sm border border-gray-100">
          <div className="text-2xl font-bold text-purple-600">{studyDays}</div>
          <div className="text-xs text-gray-400">学习天数</div>
        </div>
        <div className="bg-white rounded-xl p-4 text-center shadow-sm border border-gray-100">
          <div className="text-2xl font-bold text-orange-600">{totalHours}h</div>
          <div className="text-xs text-gray-400">累计时长</div>
        </div>
      </div>

      {/* User Posts */}
      <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100">
        <div className="flex items-center gap-2 mb-4">
          <MessageSquare size={18} className="text-blue-600" />
          <h3 className="text-sm font-bold text-gray-800 m-0">我的帖子</h3>
        </div>
        {userPosts.length === 0 ? (
          <p className="text-sm text-gray-400 text-center py-8">还没有发布过帖子</p>
        ) : (
          <div className="space-y-3">
            {userPosts.map(post => (
              <div key={post.id} className="flex items-center justify-between py-2 border-b border-gray-50 last:border-0">
                <div>
                  <span className="text-xs font-bold text-blue-600 bg-blue-50 px-1.5 py-0.5 rounded mr-2">
                    {post.type === 'discussion' ? '讨论' : post.type === 'question' ? '提问' : '分享'}
                  </span>
                  <span className="text-sm text-gray-700">{post.title}</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-gray-400">
                  <span className="flex items-center gap-0.5"><Heart size={12} />{post.likes.length}</span>
                  <span className="flex items-center gap-0.5"><MessageSquare size={12} />{post.commentCount}</span>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
