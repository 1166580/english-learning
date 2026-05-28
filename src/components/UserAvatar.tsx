interface UserAvatarProps {
  photoURL?: string
  name?: string
  size?: 'sm' | 'md' | 'lg'
}

const sizes = { sm: 'w-6 h-6 text-xs', md: 'w-8 h-8 text-sm', lg: 'w-12 h-12 text-lg' }

export default function UserAvatar({ photoURL, name, size = 'md' }: UserAvatarProps) {
  const initial = (name || '?')[0].toUpperCase()
  const cls = `${sizes[size]} rounded-full flex items-center justify-center font-bold flex-shrink-0`

  if (photoURL) {
    return <img src={photoURL} alt={name} className={`${cls} object-cover`} />
  }
  return (
    <div className={`${cls} bg-gradient-to-br from-blue-500 to-indigo-600 text-white`}>
      {initial}
    </div>
  )
}
