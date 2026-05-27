// search-bilibili-videos.cjs
const fs = require('fs')
const path = require('path')

const videoMapPath = path.join(__dirname, 'src', 'data', 'videoMap.ts')

// 搜索 B 站视频
async function searchBilibili(keyword) {
  const url = `https://api.bilibili.com/x/web-interface/search/type?search_type=video&keyword=${encodeURIComponent(keyword)}`
  try {
    const res = await fetch(url, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36',
        'Referer': 'https://www.bilibili.com'
      }
    })
    const data = await res.json()
    if (data.code === 0 && data.data?.result?.length > 0) {
      return data.data.result[0].bvid
    }
    return null
  } catch (e) {
    console.error(`搜索失败: ${keyword}`, e.message)
    return null
  }
}

// 延迟函数
function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms))
}

// 主函数
async function main() {
  const videoMap = {}
  const books = [
    { id: 1, count: 144, name: '第一册' },
    { id: 2, count: 96, name: '第二册' },
    { id: 3, count: 60, name: '第三册' },
    { id: 4, count: 48, name: '第四册' }
  ]

  for (const book of books) {
    for (let lesson = 1; lesson <= book.count; lesson++) {
      const keyword = `新概念英语 ${book.name} 第${lesson}课`
      console.log(`搜索: ${keyword}`)

      const bvid = await searchBilibili(keyword)
      if (bvid) {
        videoMap[`${book.id}-${lesson}`] = bvid
        console.log(`  找到: ${bvid}`)
      } else {
        console.log(`  未找到`)
      }

      // 请求间隔 1.5 秒
      await sleep(1500)
    }
  }

  // 生成 TypeScript 文件内容
  const entries = Object.entries(videoMap)
    .map(([key, value]) => `  '${key}': '${value}'`)
    .join(',\n')

  const content = `// B 站视频映射：键格式 "册号-课号"，值为 BV 号
export const videoMap: Record<string, string> = {
${entries}
}

export function getVideoId(bookId: number, lessonId: number): string | undefined {
  return videoMap[bookId + '-' + lessonId]
}
`

  fs.writeFileSync(videoMapPath, content, 'utf-8')
  console.log(`\n完成！共找到 ${entries.length ? entries.split('\n').length : 0} 个视频`)
  console.log(`已写入: ${videoMapPath}`)
}

main()
