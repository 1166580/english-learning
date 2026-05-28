# B 站视频嵌入功能实施计划

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** 为每课页面添加 B 站课文讲解视频播放器，通过 API 自动搜索匹配 348 课视频。

**Architecture:** 独立视频映射文件存储 BV 号，BilibiliPlayer 组件使用 iframe 嵌入，搜索脚本批量填充数据。

**Tech Stack:** React, TypeScript, Bilibili iframe embed, Node.js CJS scripts

---

## 文件结构

| 文件 | 操作 | 职责 |
|------|------|------|
| `src/components/BilibiliPlayer.tsx` | 新建 | B 站 iframe 播放器组件 |
| `src/data/videoMap.ts` | 新建 | 课号→BV号映射数据 |
| `src/pages/LessonPage.tsx:167-201` | 修改 | 在标题下方插入视频 |
| `search-bilibili-videos.cjs` | 新建 | B 站搜索脚本 |

---

### Task 1: 创建 BilibiliPlayer 组件

**Files:**
- Create: `src/components/BilibiliPlayer.tsx`

- [ ] **Step 1: 创建 BilibiliPlayer 组件**

```tsx
// src/components/BilibiliPlayer.tsx
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
          <h3 className="text-sm font-bold text-gray-800 m-0">课文讲解视频</h3>
        </div>
      )}
      <div className="relative w-full" style={{ paddingTop: '56.25%' }}>
        <iframe
          className="absolute top-0 left-0 w-full h-full rounded-lg"
          src={`//player.bilibili.com/player.html?bvid=${bvid}&high_quality=1`}
          scrolling="no"
          border="0"
          frameborder="no"
          framespacing="0"
          allowfullscreen="true"
        />
      </div>
    </div>
  )
}
```

- [ ] **Step 2: 验证 TypeScript 编译**

Run: `cd "C:\Users\哈哈\AppData\Local\Temp\english-learning" && npx tsc -b`
Expected: 无错误输出

- [ ] **Step 3: Commit**

```bash
git add src/components/BilibiliPlayer.tsx
git commit -m "feat: add BilibiliPlayer component with responsive iframe"
```

---

### Task 2: 创建 videoMap 数据文件

**Files:**
- Create: `src/data/videoMap.ts`

- [ ] **Step 1: 创建空的 videoMap 文件**

```typescript
// src/data/videoMap.ts
// B 站视频映射：键格式 "册号-课号"，值为 BV 号
export const videoMap: Record<string, string> = {}

export function getVideoId(bookId: number, lessonId: number): string | undefined {
  return videoMap[`${bookId}-${lessonId}`]
}
```

- [ ] **Step 2: 验证 TypeScript 编译**

Run: `cd "C:\Users\哈哈\AppData\Local\Temp\english-learning" && npx tsc -b`
Expected: 无错误输出

- [ ] **Step 3: Commit**

```bash
git add src/data/videoMap.ts
git commit -m "feat: add empty videoMap for Bilibili video IDs"
```

---

### Task 3: 修改 LessonPage 集成视频

**Files:**
- Modify: `src/pages/LessonPage.tsx`

- [ ] **Step 1: 添加 import**

在 `src/pages/LessonPage.tsx` 第 5 行后添加：

```typescript
import { getVideoId } from '../data/videoMap'
import BilibiliPlayer from '../components/BilibiliPlayer'
```

- [ ] **Step 2: 添加 videoId 变量**

在第 22 行 `const completed = isCompleted(bookId, lessonNum)` 后添加：

```typescript
const videoId = getVideoId(bookId, lessonNum)
```

- [ ] **Step 3: 在标题区域下方插入视频播放器**

在第 201 行 `</div>`（Lesson Header 结束标签）后、第 203 行 `{lesson.summary && (` 前添加：

```tsx
{/* Video Player */}
{videoId && <BilibiliPlayer bvid={videoId} title={lesson.title} />}
```

- [ ] **Step 4: 验证 TypeScript 编译**

Run: `cd "C:\Users\哈哈\AppData\Local\Temp\english-learning" && npx tsc -b`
Expected: 无错误输出

- [ ] **Step 5: 本地预览验证**

Run: `cd "C:\Users\哈哈\AppData\Local\Temp\english-learning" && npx vite`
Expected: 开发服务器启动，页面正常显示（视频区域暂不显示，因为 videoMap 为空）

- [ ] **Step 6: Commit**

```bash
git add src/pages/LessonPage.tsx
git commit -m "feat: integrate BilibiliPlayer into LessonPage below header"
```

---

### Task 4: 创建 B 站搜索脚本

**Files:**
- Create: `search-bilibili-videos.cjs`

- [ ] **Step 1: 创建搜索脚本**

```javascript
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
```

- [ ] **Step 2: 测试脚本语法**

Run: `cd "C:\Users\哈哈\AppData\Local\Temp\english-learning" && node -c search-bilibili-videos.cjs`
Expected: 无输出（语法正确）

- [ ] **Step 3: Commit**

```bash
git add search-bilibili-videos.cjs
git commit -m "feat: add Bilibili search script for video matching"
```

---

### Task 5: 运行搜索脚本填充数据

**Files:**
- Modify: `src/data/videoMap.ts`（由脚本自动更新）

- [ ] **Step 1: 运行搜索脚本**

Run: `cd "C:\Users\哈哈\AppData\Local\Temp\english-learning" && node search-bilibili-videos.cjs`
Expected: 逐课输出搜索结果，最后生成 videoMap.ts

注意：此脚本需要约 9 分钟（348 课 × 1.5 秒间隔）

- [ ] **Step 2: 验证生成的 videoMap.ts**

Run: `cd "C:\Users\哈哈\AppData\Local\Temp\english-learning" && head -20 src/data/videoMap.ts`
Expected: 文件包含 BV 号数据

- [ ] **Step 3: 验证 TypeScript 编译**

Run: `cd "C:\Users\哈哈\AppData\Local\Temp\english-learning" && npx tsc -b`
Expected: 无错误输出

- [ ] **Step 4: Commit**

```bash
git add src/data/videoMap.ts
git commit -m "data: populate videoMap with Bilibili video IDs for 348 lessons"
```

---

### Task 6: 构建部署验证

- [ ] **Step 1: 生产构建**

Run: `cd "C:\Users\哈哈\AppData\Local\Temp\english-learning" && npx vite build`
Expected: 构建成功，无错误

- [ ] **Step 2: 本地预览验证**

Run: `cd "C:\Users\哈哈\AppData\Local\Temp\english-learning" && npx vite preview`
Expected: 打开浏览器访问 http://localhost:4173/english-learning/ ，进入任意课程页面，确认视频播放器显示且可播放

- [ ] **Step 3: 推送部署**

```bash
cd "C:\Users\哈哈\AppData\Local\Temp\english-learning"
git push origin main
npx gh-pages -d dist -b gh-pages
```

- [ ] **Step 4: 线上验证**

访问 https://1166580.github.io/english-learning/ ，确认：
1. 课程页面显示视频播放器
2. 视频可以正常播放
3. 无视频的课程不显示播放器区域
