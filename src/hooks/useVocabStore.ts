import { useState, useCallback, useEffect } from 'react'

const STORAGE_KEY = 'nce-vocab-store'

interface VocabState {
  bookmarked: string[]  // word strings
  mastered: string[]    // word strings
}

function load(): VocabState {
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    if (raw) return JSON.parse(raw)
  } catch {}
  return { bookmarked: [], mastered: [] }
}

function save(state: VocabState) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state))
}

export function useVocabStore() {
  const [state, setState] = useState<VocabState>(load)

  useEffect(() => { save(state) }, [state])

  const toggleBookmark = useCallback((word: string) => {
    const key = word.toLowerCase()
    setState(prev => ({
      ...prev,
      bookmarked: prev.bookmarked.includes(key)
        ? prev.bookmarked.filter(w => w !== key)
        : [...prev.bookmarked, key],
    }))
  }, [])

  const toggleMastered = useCallback((word: string) => {
    const key = word.toLowerCase()
    setState(prev => ({
      ...prev,
      mastered: prev.mastered.includes(key)
        ? prev.mastered.filter(w => w !== key)
        : [...prev.mastered, key],
    }))
  }, [])

  const isBookmarked = useCallback((word: string) => {
    return state.bookmarked.includes(word.toLowerCase())
  }, [state.bookmarked])

  const isMastered = useCallback((word: string) => {
    return state.mastered.includes(word.toLowerCase())
  }, [state.mastered])

  const exportVocab = useCallback(() => {
    return JSON.stringify(state, null, 2)
  }, [state])

  const importVocab = useCallback((json: string) => {
    try {
      const data = JSON.parse(json)
      setState({
        bookmarked: Array.isArray(data.bookmarked) ? data.bookmarked : [],
        mastered: Array.isArray(data.mastered) ? data.mastered : [],
      })
      return true
    } catch {
      return false
    }
  }, [])

  return {
    bookmarked: state.bookmarked,
    mastered: state.mastered,
    toggleBookmark,
    toggleMastered,
    isBookmarked,
    isMastered,
    exportVocab,
    importVocab,
  }
}
