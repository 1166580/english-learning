// B 站视频映射：键格式 "册号-课号"，值为 BV 号
export const videoMap: Record<string, string> = {}

export function getVideoId(bookId: number, lessonId: number): string | undefined {
  return videoMap[`${bookId}-${lessonId}`]
}
