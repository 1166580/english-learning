import { useState, useEffect, useCallback } from 'react'

const STORAGE_KEY = 'nce-dark-mode'

export function useDarkMode() {
  const [dark, setDark] = useState(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY)
      if (stored !== null) return stored === 'true'
    } catch {}
    return window.matchMedia('(prefers-color-scheme: dark)').matches
  })

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, String(dark))
    if (dark) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [dark])

  const toggle = useCallback(() => setDark(d => !d), [])

  return { dark, toggle }
}
