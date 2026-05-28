# B 站视频嵌入功能设计文档

## 概述

为新概念英语学习网站的每课页面添加 Bilibili 课文讲解视频。通过 B 站搜索 API 自动匹配视频，使用 iframe 嵌入式播放器展示。

## 需求

- 每课配一个 B 站课文讲解视频
- 视频播放器放在课文页面标题下方
- 自动搜索匹配 B 站上的新概念英语讲解视频
- 支持 348 课（第一册 144 课、第二册 96 课、第三册 60 课、第四册 48 课）

## 架构设计

### 1. 数据层

**独立视频映射文件**：`src/data/videoMap.ts`

```typescript
export const videoMap: Record<string, string> = {
  '1-1': 'BV1xx411c7mD',
  '1-2': 'BV1xx411c7mE',
  // ...
}

export function getVideoId(bookId: number, lessonId: number): string | undefined {
  return videoMap[`${bookId}-${lessonId}`]
}
```

- 键格式：`"册号-课号"`（如 `'1-1'` 表示第一册第 1 课）
- 值：B 站视频 BV 号（如 `'BV1xx411c7mD'`）
- 不修改现有 Lesson 接口，保持数据层独立

### 2. 搜索脚本

**文件**：`search-bilibili-videos.cjs`

**功能**：
- 遍历 348 课，为每课搜索 B 站视频
- 搜索关键词：`"新概念英语 第X册 第Y课"`
- 调用 B 站搜索 API：`https://api.bilibili.com/x/web-interface/search/type`
- 提取第一个结果的 BV 号
- 结果写入 `videoMap.ts`

**API 请求**：
```javascript
const searchUrl = `https://api.bilibili.com/x/web-interface/search/type?search_type=video&keyword=${encodeURIComponent(keyword)}`
```

**注意事项**：
- 添加请求间隔（1-2 秒），避免被封 IP
- 处理搜索无结果的情况（跳过该课）
- 记录搜索日志，方便人工审核

### 3. 前端组件

**文件**：`src/components/BilibiliPlayer.tsx`

```typescript
interface BilibiliPlayerProps {
  bvid: string
  title?: string
}
```

**实现**：
- 使用 B 站嵌入式播放器 iframe
- 响应式设计（16:9 比例，宽度 100%）
- 无视频时返回 null（不显示组件）

**iframe 代码**：
```html
<iframe
  src="//player.bilibili.com/player.html?bvid=${bvid}&high_quality=1"
  scrolling="no"
  border="0"
  frameborder="no"
  framespacing="0"
  allowfullscreen="true"
></iframe>
```

### 4. 页面集成

**修改文件**：`src/pages/LessonPage.tsx`

**插入位置**：标题区域（Lesson Header）下方、概要（Summary）上方

**逻辑**：
```typescript
import { getVideoId } from '../data/videoMap'
import BilibiliPlayer from '../components/BilibiliPlayer'

// 在组件内部
const videoId = getVideoId(bookId, lessonNum)

// 在 JSX 中
{videoId && <BilibiliPlayer bvid={videoId} title={lesson.title} />}
```

## 文件变更清单

| 文件 | 操作 | 说明 |
|------|------|------|
| `src/data/videoMap.ts` | 新建 | 视频映射数据 |
| `src/components/BilibiliPlayer.tsx` | 新建 | B 站播放器组件 |
| `src/pages/LessonPage.tsx` | 修改 | 集成视频播放器 |
| `search-bilibili-videos.cjs` | 新建 | B 站搜索脚本 |

## 实施步骤

1. 创建 `BilibiliPlayer` 组件
2. 创建 `videoMap.ts` 数据文件（初始为空）
3. 修改 `LessonPage.tsx` 集成视频播放器
4. 创建 `search-bilibili-videos.cjs` 搜索脚本
5. 运行搜索脚本，填充视频数据
6. 测试验证

## 风险与限制

- B 站搜索结果可能不完全准确，需要人工校验
- B 站 API 可能有访问限制，需要控制请求频率
- 部分课程可能找不到对应的讲解视频
- iframe 嵌入可能受到 B 站的防盗链限制
