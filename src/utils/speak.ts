let cachedVoice: SpeechSynthesisVoice | null = null
let voicesLoaded = false
let loadPromise: Promise<SpeechSynthesisVoice | null> | null = null

function loadVoices(): Promise<SpeechSynthesisVoice | null> {
  if (loadPromise) return loadPromise

  loadPromise = new Promise((resolve) => {
    if (!('speechSynthesis' in window)) {
      resolve(null)
      return
    }

    const existing = speechSynthesis.getVoices()
    if (existing.length > 0) {
      const en = existing.find(v => v.lang.startsWith('en')) || existing[0]
      cachedVoice = en
      voicesLoaded = true
      resolve(en)
      return
    }

    speechSynthesis.addEventListener('voiceschanged', () => {
      const voices = speechSynthesis.getVoices()
      const en = voices.find(v => v.lang.startsWith('en')) || voices[0] || null
      cachedVoice = en
      voicesLoaded = true
      resolve(en)
    }, { once: true })

    // Timeout fallback
    setTimeout(() => {
      if (!voicesLoaded) {
        const voices = speechSynthesis.getVoices()
        const en = voices.find(v => v.lang.startsWith('en')) || voices[0] || null
        cachedVoice = en
        voicesLoaded = true
        resolve(en)
      }
    }, 3000)
  })

  return loadPromise
}

export async function speak(text: string, rate: number = 0.8): Promise<void> {
  if (!('speechSynthesis' in window)) return

  speechSynthesis.cancel()

  const utterance = new SpeechSynthesisUtterance(text)
  utterance.lang = 'en-US'
  utterance.rate = rate

  if (cachedVoice) {
    utterance.voice = cachedVoice
    speechSynthesis.speak(utterance)
  } else {
    const voice = await loadVoices()
    if (voice) utterance.voice = voice
    speechSynthesis.speak(utterance)
  }
}

export function stopSpeech(): void {
  if ('speechSynthesis' in window) {
    speechSynthesis.cancel()
  }
}

// Pre-load voices on module import
if (typeof window !== 'undefined') {
  loadVoices()
}
