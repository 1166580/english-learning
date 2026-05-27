interface BilibiliPlayerProps {
  bvid: string
  title?: string
}

export default function BilibiliPlayer({ bvid, title }: BilibiliPlayerProps) {
  return (
    <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100">
      {title && (
        <div className="flex items-center gap-2 mb-3">
          <span className="text-lg">🎬</span>
          <h3 className="text-sm font-bold text-gray-800 m-0">课文动画视频</h3>
        </div>
      )}
      <div className="relative w-full" style={{ paddingTop: '56.25%' }}>
        <iframe
          className="absolute top-0 left-0 w-full h-full rounded-lg border-0"
          src={`//player.bilibili.com/player.html?bvid=${bvid}&high_quality=1&danmaku=0&watermark=0`}
          scrolling="no"
          allowFullScreen
        />
      </div>
    </div>
  )
}
