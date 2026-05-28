import { useState } from 'react'
import { Volume2, BookOpen, Lightbulb, HelpCircle, ChevronRight, CheckCircle, XCircle } from 'lucide-react'

type Tab = 'vowels' | 'consonants' | 'rules' | 'practice'

interface PhoneticSymbol {
  symbol: string
  name: string
  type: 'vowel' | 'consonant'
  examples: string[]
  mouthPosition: string
  tonguePosition: string
  tips: string[]
}

const phoneticSymbols: PhoneticSymbol[] = [
  // 元音
  { symbol: 'iː', name: '长元音 i', type: 'vowel', examples: ['see', 'tree', 'meat', 'key'], mouthPosition: '嘴角向两侧拉伸，呈微笑状', tonguePosition: '舌前部抬高，接近硬腭', tips: ['发音时要长而清晰', '嘴角向两侧拉伸'] },
  { symbol: 'ɪ', name: '短元音 i', type: 'vowel', examples: ['sit', 'big', 'give', 'happy'], mouthPosition: '嘴角略放松，开口比 iː 稍大', tonguePosition: '舌前部抬高，但比 iː 低', tips: ['发音短促有力', '不要拖长'] },
  { symbol: 'e', name: '短元音 e', type: 'vowel', examples: ['bed', 'red', 'said', 'head'], mouthPosition: '半开，嘴角略放松', tonguePosition: '舌前部中等高度', tips: ['开口度适中', '不要发成"诶"'] },
  { symbol: 'æ', name: '短元音 æ', type: 'vowel', examples: ['cat', 'bad', 'hat', 'man'], mouthPosition: '大开，嘴角向两侧拉', tonguePosition: '舌前部低平', tips: ['开口要大', '嘴角向两侧拉'] },
  { symbol: 'ɑː', name: '长元音 a', type: 'vowel', examples: ['car', 'father', 'arm', 'heart'], mouthPosition: '大开，嘴型自然', tonguePosition: '舌后部低平', tips: ['发音要长', '嘴型自然放松'] },
  { symbol: 'ɒ', name: '短元音 o', type: 'vowel', examples: ['hot', 'dog', 'box', 'what'], mouthPosition: '圆唇，中等开口', tonguePosition: '舌后部中等高度', tips: ['嘴唇要圆', '开口度适中'] },
  { symbol: 'ɔː', name: '长元音 o', type: 'vowel', examples: ['door', 'more', 'four', 'law'], mouthPosition: '圆唇，开口较小', tonguePosition: '舌后部抬高', tips: ['嘴唇要圆', '发音要长'] },
  { symbol: 'ʊ', name: '短元音 u', type: 'vowel', examples: ['put', 'good', 'book', 'could'], mouthPosition: '圆唇，开口较小', tonguePosition: '舌后部抬高', tips: ['嘴唇要圆', '发音短促'] },
  { symbol: 'uː', name: '长元音 u', type: 'vowel', examples: ['too', 'blue', 'food', 'true'], mouthPosition: '圆唇，开口最小', tonguePosition: '舌后部抬高至最高', tips: ['嘴唇要圆', '发音要长'] },
  { symbol: 'ʌ', name: '短元音 ʌ', type: 'vowel', examples: ['cup', 'bus', 'love', 'come'], mouthPosition: '半开，嘴型自然', tonguePosition: '舌中部中等高度', tips: ['发音短促', '嘴型自然'] },
  { symbol: 'ɜː', name: '长元音 ə', type: 'vowel', examples: ['bird', 'her', 'word', 'nurse'], mouthPosition: '半开，嘴型自然', tonguePosition: '舌中部抬高', tips: ['发音要长', '嘴型自然放松'] },
  { symbol: 'ə', name: '中央元音 schwa', type: 'vowel', examples: ['about', 'taken', 'pencil', 'correct'], mouthPosition: '半开，嘴型自然放松', tonguePosition: '舌中部中等高度', tips: ['最常用的元音', '发音轻而短'] },
  { symbol: 'eɪ', name: '双元音 ei', type: 'vowel', examples: ['day', 'make', 'rain', 'eight'], mouthPosition: '从 e 滑向 i', tonguePosition: '舌位从低到高', tips: ['发音要饱满', '从 e 滑向 i'] },
  { symbol: 'aɪ', name: '双元音 ai', type: 'vowel', examples: ['my', 'time', 'eye', 'high'], mouthPosition: '从 a 滑向 i', tonguePosition: '舌位从低到高', tips: ['发音要饱满', '从 a 滑向 i'] },
  { symbol: 'ɔɪ', name: '双元音 oi', type: 'vowel', examples: ['boy', 'oil', 'join', 'voice'], mouthPosition: '从 ɔ 滑向 i', tonguePosition: '舌位从低到高', tips: ['发音要饱满', '从 ɔ 滑向 i'] },
  { symbol: 'aʊ', name: '双元音 au', type: 'vowel', examples: ['how', 'out', 'house', 'now'], mouthPosition: '从 a 滑向 u', tonguePosition: '舌位从低到高', tips: ['发音要饱满', '从 a 滑向 u'] },
  { symbol: 'əʊ', name: '双元音 ou', type: 'vowel', examples: ['go', 'home', 'know', 'boat'], mouthPosition: '从 ə 滑向 u', tonguePosition: '舌位从低到高', tips: ['发音要饱满', '从 ə 滑向 u'] },
  { symbol: 'ɪə', name: '双元音 iə', type: 'vowel', examples: ['ear', 'here', 'beer', 'idea'], mouthPosition: '从 i 滑向 ə', tonguePosition: '舌位从高到低', tips: ['发音要饱满', '从 i 滑向 ə'] },
  { symbol: 'eə', name: '双元音 eə', type: 'vowel', examples: ['air', 'care', 'there', 'bear'], mouthPosition: '从 e 滑向 ə', tonguePosition: '舌位从低到中', tips: ['发音要饱满', '从 e 滑向 ə'] },
  { symbol: 'ʊə', name: '双元音 uə', type: 'vowel', examples: ['tour', 'pure', 'sure', 'cure'], mouthPosition: '从 u 滑向 ə', tonguePosition: '舌位从高到中', tips: ['发音要饱满', '从 u 滑向 ə'] },
  // 辅音
  { symbol: 'p', name: '清辅音 p', type: 'consonant', examples: ['pen', 'happy', 'stop'], mouthPosition: '双唇闭合，然后突然打开', tonguePosition: '舌尖抵住下齿', tips: ['送气音', '不要发成"泼"'] },
  { symbol: 'b', name: '浊辅音 b', type: 'consonant', examples: ['bad', 'rabbit', 'job'], mouthPosition: '双唇闭合，然后突然打开', tonguePosition: '舌尖抵住下齿', tips: ['不送气音', '声带振动'] },
  { symbol: 't', name: '清辅音 t', type: 'consonant', examples: ['tea', 'better', 'sit'], mouthPosition: '舌尖抵住上齿龈', tonguePosition: '舌尖抵住上齿龈', tips: ['送气音', '不要发成"特"'] },
  { symbol: 'd', name: '浊辅音 d', type: 'consonant', examples: ['do', 'ladder', 'bed'], mouthPosition: '舌尖抵住上齿龈', tonguePosition: '舌尖抵住上齿龈', tips: ['不送气音', '声带振动'] },
  { symbol: 'k', name: '清辅音 k', type: 'consonant', examples: ['key', 'back', 'cat'], mouthPosition: '舌后部抵住软腭', tonguePosition: '舌后部抵住软腭', tips: ['送气音', '不要发成"克"'] },
  { symbol: 'g', name: '浊辅音 g', type: 'consonant', examples: ['go', 'bigger', 'dog'], mouthPosition: '舌后部抵住软腭', tonguePosition: '舌后部抵住软腭', tips: ['不送气音', '声带振动'] },
  { symbol: 'f', name: '清辅音 f', type: 'consonant', examples: ['fat', 'coffee', 'off'], mouthPosition: '上齿轻触下唇', tonguePosition: '舌尖抵住下齿', tips: ['气流从唇齿间通过', '不要发成"佛"'] },
  { symbol: 'v', name: '浊辅音 v', type: 'consonant', examples: ['van', 'have', 'love'], mouthPosition: '上齿轻触下唇', tonguePosition: '舌尖抵住下齿', tips: ['声带振动', '气流从唇齿间通过'] },
  { symbol: 'θ', name: '清辅音 θ', type: 'consonant', examples: ['think', 'three', 'path'], mouthPosition: '舌尖轻触上齿', tonguePosition: '舌尖轻触上齿边缘', tips: ['气流从舌尖和牙齿间通过', '不要发成"斯"'] },
  { symbol: 'ð', name: '浊辅音 ð', type: 'consonant', examples: ['this', 'that', 'mother'], mouthPosition: '舌尖轻触上齿', tonguePosition: '舌尖轻触上齿边缘', tips: ['声带振动', '气流从舌尖和牙齿间通过'] },
  { symbol: 's', name: '清辅音 s', type: 'consonant', examples: ['see', 'pass', 'rice'], mouthPosition: '嘴角向两侧拉伸', tonguePosition: '舌尖接近上齿龈', tips: ['气流从舌尖和齿龈间通过', '不要发成"斯"'] },
  { symbol: 'z', name: '浊辅音 z', type: 'consonant', examples: ['zoo', 'buzz', 'dogs'], mouthPosition: '嘴角向两侧拉伸', tonguePosition: '舌尖接近上齿龈', tips: ['声带振动', '气流从舌尖和齿龈间通过'] },
  { symbol: 'ʃ', name: '清辅音 ʃ', type: 'consonant', examples: ['ship', 'she', 'nation'], mouthPosition: '嘴唇略圆，向前突出', tonguePosition: '舌尖接近上齿龈后部', tips: ['嘴唇要圆', '不要发成"诗"'] },
  { symbol: 'ʒ', name: '浊辅音 ʒ', type: 'consonant', examples: ['vision', 'measure', 'beige'], mouthPosition: '嘴唇略圆，向前突出', tonguePosition: '舌尖接近上齿龈后部', tips: ['声带振动', '嘴唇要圆'] },
  { symbol: 'h', name: '清辅音 h', type: 'consonant', examples: ['hat', 'who', 'behind'], mouthPosition: '嘴型自然', tonguePosition: '舌位自然', tips: ['气流从喉部通过', '不要发成"喝"'] },
  { symbol: 'tʃ', name: '清辅音 tʃ', type: 'consonant', examples: ['check', 'church', 'watch'], mouthPosition: '嘴唇略圆', tonguePosition: '舌尖抵住上齿龈后部', tips: ['送气音', '不要发成"吃"'] },
  { symbol: 'dʒ', name: '浊辅音 dʒ', type: 'consonant', examples: ['job', 'judge', 'age'], mouthPosition: '嘴唇略圆', tonguePosition: '舌尖抵住上齿龈后部', tips: ['声带振动', '不要发成"知"'] },
  { symbol: 'm', name: '鼻音 m', type: 'consonant', examples: ['man', 'room', 'some'], mouthPosition: '双唇闭合', tonguePosition: '舌尖抵住下齿', tips: ['气流从鼻腔通过', '声带振动'] },
  { symbol: 'n', name: '鼻音 n', type: 'consonant', examples: ['no', 'sun', 'ten'], mouthPosition: '嘴型自然', tonguePosition: '舌尖抵住上齿龈', tips: ['气流从鼻腔通过', '声带振动'] },
  { symbol: 'ŋ', name: '鼻音 ŋ', type: 'consonant', examples: ['sing', 'king', 'think'], mouthPosition: '嘴型自然', tonguePosition: '舌后部抵住软腭', tips: ['气流从鼻腔通过', '声带振动'] },
  { symbol: 'l', name: '边音 l', type: 'consonant', examples: ['let', 'feel', 'apple'], mouthPosition: '嘴型自然', tonguePosition: '舌尖抵住上齿龈', tips: ['气流从舌头两侧通过', '声带振动'] },
  { symbol: 'r', name: '近音 r', type: 'consonant', examples: ['red', 'carry', 'far'], mouthPosition: '嘴唇略圆', tonguePosition: '舌尖向上卷起', tips: ['舌尖不要触碰上颚', '声带振动'] },
  { symbol: 'j', name: '近音 j', type: 'consonant', examples: ['yes', 'you', 'beauty'], mouthPosition: '嘴角向两侧拉伸', tonguePosition: '舌前部接近硬腭', tips: ['声带振动', '类似"耶"的音'] },
  { symbol: 'w', name: '近音 w', type: 'consonant', examples: ['wet', 'one', 'when'], mouthPosition: '嘴唇圆唇，向前突出', tonguePosition: '舌后部抬高', tips: ['声带振动', '嘴唇要圆'] },
]

const phonicsRules = [
  {
    category: '元音字母组合',
    rules: [
      { pattern: 'ee', sound: 'iː', examples: ['see', 'tree', 'bee', 'free'], explanation: 'ee 通常发长元音 iː' },
      { pattern: 'ea', sound: 'iː', examples: ['eat', 'meat', 'read', 'sea'], explanation: 'ea 通常发长元音 iː' },
      { pattern: 'oo', sound: 'uː', examples: ['too', 'food', 'moon', 'cool'], explanation: 'oo 通常发长元音 uː' },
      { pattern: 'oo', sound: 'ʊ', examples: ['book', 'good', 'look', 'cook'], explanation: 'oo 在 k 前通常发短元音 ʊ' },
      { pattern: 'ou', sound: 'aʊ', examples: ['out', 'house', 'about', 'mouth'], explanation: 'ou 通常发双元音 aʊ' },
      { pattern: 'ow', sound: 'aʊ', examples: ['how', 'now', 'cow', 'down'], explanation: 'ow 通常发双元音 aʊ' },
      { pattern: 'ow', sound: 'əʊ', examples: ['go', 'know', 'show', 'low'], explanation: 'ow 有时发双元音 əʊ' },
      { pattern: 'ai', sound: 'eɪ', examples: ['rain', 'train', 'wait', 'day'], explanation: 'ai 通常发双元音 eɪ' },
      { pattern: 'ay', sound: 'eɪ', examples: ['day', 'play', 'say', 'way'], explanation: 'ay 通常发双元音 eɪ' },
      { pattern: 'oi', sound: 'ɔɪ', examples: ['oil', 'join', 'point', 'voice'], explanation: 'oi 通常发双元音 ɔɪ' },
      { pattern: 'oy', sound: 'ɔɪ', examples: ['boy', 'enjoy', 'toy', 'joy'], explanation: 'oy 通常发双元音 ɔɪ' },
    ]
  },
  {
    category: '辅音字母组合',
    rules: [
      { pattern: 'sh', sound: 'ʃ', examples: ['ship', 'she', 'fish', 'wash'], explanation: 'sh 发清辅音 ʃ' },
      { pattern: 'ch', sound: 'tʃ', examples: ['check', 'church', 'watch', 'teach'], explanation: 'ch 发清辅音 tʃ' },
      { pattern: 'th', sound: 'θ', examples: ['think', 'three', 'path', 'math'], explanation: 'th 在词首发清辅音 θ' },
      { pattern: 'th', sound: 'ð', examples: ['this', 'that', 'the', 'mother'], explanation: 'th 在词首发浊辅音 ð' },
      { pattern: 'ph', sound: 'f', examples: ['phone', 'photo', 'graph', 'elephant'], explanation: 'ph 发清辅音 f' },
      { pattern: 'wh', sound: 'w', examples: ['what', 'when', 'where', 'why'], explanation: 'wh 通常发浊辅音 w' },
      { pattern: 'wh', sound: 'h', examples: ['who', 'whose', 'whole'], explanation: 'wh 在 o 前发清辅音 h' },
      { pattern: 'ck', sound: 'k', examples: ['back', 'check', 'clock', 'duck'], explanation: 'ck 发清辅音 k' },
      { pattern: 'ng', sound: 'ŋ', examples: ['sing', 'king', 'ring', 'long'], explanation: 'ng 发鼻音 ŋ' },
      { pattern: 'nk', sound: 'ŋk', examples: ['think', 'drink', 'bank', 'pink'], explanation: 'nk 发 ŋk' },
    ]
  },
  {
    category: 'Magic E 规则',
    rules: [
      { pattern: 'a_e', sound: 'eɪ', examples: ['make', 'cake', 'game', 'name'], explanation: '词尾的 e 使前面的 a 发长音 eɪ' },
      { pattern: 'i_e', sound: 'aɪ', examples: ['like', 'time', 'bike', 'five'], explanation: '词尾的 e 使前面的 i 发长音 aɪ' },
      { pattern: 'o_e', sound: 'əʊ', examples: ['go', 'home', 'note', 'hope'], explanation: '词尾的 e 使前面的 o 发长音 əʊ' },
      { pattern: 'u_e', sound: 'juː', examples: ['use', 'cute', 'huge', 'tube'], explanation: '词尾的 e 使前面的 u 发长音 juː' },
      { pattern: 'u_e', sound: 'uː', examples: ['rule', 'true', 'blue', 'June'], explanation: '有时 u 发长音 uː' },
    ]
  },
  {
    category: 'R 控元音',
    rules: [
      { pattern: 'ar', sound: 'ɑː', examples: ['car', 'far', 'star', 'park'], explanation: 'ar 发长元音 ɑː' },
      { pattern: 'er', sound: 'ɜː', examples: ['her', 'bird', 'turn', 'word'], explanation: 'er 发长元音 ɜː' },
      { pattern: 'ir', sound: 'ɜː', examples: ['bird', 'girl', 'first', 'shirt'], explanation: 'ir 发长元音 ɜː' },
      { pattern: 'ur', sound: 'ɜː', examples: ['nurse', 'turn', 'burn', 'hurt'], explanation: 'ur 发长元音 ɜː' },
      { pattern: 'or', sound: 'ɔː', examples: ['door', 'more', 'four', 'sport'], explanation: 'or 发长元音 ɔː' },
    ]
  },
]

interface PracticeQuestion {
  question: string
  options: string[]
  correct: number
  explanation: string
}

const practiceQuestions: PracticeQuestion[] = [
  { question: '下列哪个单词中的 "ea" 发 /e/ 音？', options: ['eat', 'head', 'read', 'sea'], correct: 1, explanation: 'head 中的 ea 发 /e/ 音，其他三个发 /iː/ 音' },
  { question: '下列哪个单词中的 "oo" 发 /ʊ/ 音？', options: ['food', 'moon', 'book', 'cool'], correct: 2, explanation: 'book 中的 oo 发 /ʊ/ 音，其他三个发 /uː/ 音' },
  { question: '下列哪个单词中的 "ow" 发 /əʊ/ 音？', options: ['how', 'now', 'cow', 'show'], correct: 3, explanation: 'show 中的 ow 发 /əʊ/ 音，其他三个发 /aʊ/ 音' },
  { question: '下列哪个单词中的 "th" 发 /ð/ 音？', options: ['think', 'three', 'this', 'path'], correct: 2, explanation: 'this 中的 th 发 /ð/ 音，其他三个发 /θ/ 音' },
  { question: '下列哪个单词中的 "c" 发 /s/ 音？', options: ['cat', 'city', 'come', 'cup'], correct: 1, explanation: 'city 中的 c 发 /s/ 音（在 i 前），其他三个发 /k/ 音' },
  { question: '下列哪个单词中的 "g" 发 /dʒ/ 音？', options: ['go', 'give', 'gate', 'gem'], correct: 3, explanation: 'gem 中的 g 发 /dʒ/ 音（在 e 前），其他三个发 /g/ 音' },
  { question: '下列哪个单词是双音节词？', options: ['cat', 'teacher', 'run', 'big'], correct: 1, explanation: 'teacher 是双音节词（teach-er），其他三个是单音节词' },
  { question: '下列哪个单词的重音在第一个音节？', options: ['about', 'behind', 'teacher', 'above'], correct: 2, explanation: 'teacher 的重音在第一个音节（TEACH-er），其他三个的重音在第二个音节' },
  { question: '下列哪个单词中的 "a" 发 /æ/ 音？', options: ['car', 'cat', 'cake', 'call'], correct: 1, explanation: 'cat 中的 a 发 /æ/ 音，其他三个分别发 /ɑː/、/eɪ/、/ɔː/' },
  { question: '下列哪个单词中的 "i" 发 /aɪ/ 音？', options: ['sit', 'big', 'like', 'give'], correct: 2, explanation: 'like 中的 i 发 /aɪ/ 音（Magic E 规则），其他三个发 /ɪ/ 音' },
]

export default function PhonicsPage() {
  const [tab, setTab] = useState<Tab>('vowels')
  const [selectedSymbol, setSelectedSymbol] = useState<PhoneticSymbol | null>(null)
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null)
  const [showExplanation, setShowExplanation] = useState(false)
  const [score, setScore] = useState(0)
  const [quizComplete, setQuizComplete] = useState(false)

  const speakText = (text: string) => {
    if (!('speechSynthesis' in window)) return
    speechSynthesis.cancel()
    const utterance = new SpeechSynthesisUtterance(text)
    utterance.lang = 'en-US'
    utterance.rate = 0.8
    const voices = speechSynthesis.getVoices()
    if (voices.length > 0) {
      const enVoice = voices.find(v => v.lang.startsWith('en'))
      if (enVoice) utterance.voice = enVoice
      speechSynthesis.speak(utterance)
    } else {
      speechSynthesis.addEventListener('voiceschanged', () => {
        const loaded = speechSynthesis.getVoices()
        const enVoice = loaded.find(v => v.lang.startsWith('en'))
        if (enVoice) utterance.voice = enVoice
        speechSynthesis.speak(utterance)
      }, { once: true })
    }
  }

  const tabs: { key: Tab; label: string; icon: React.ReactNode }[] = [
    { key: 'vowels', label: '元音', icon: <Volume2 size={14} /> },
    { key: 'consonants', label: '辅音', icon: <Volume2 size={14} /> },
    { key: 'rules', label: '拼读规则', icon: <BookOpen size={14} /> },
    { key: 'practice', label: '练习', icon: <HelpCircle size={14} /> },
  ]

  const vowels = phoneticSymbols.filter(s => s.type === 'vowel')
  const consonants = phoneticSymbols.filter(s => s.type === 'consonant')

  const handleAnswer = (index: number) => {
    setSelectedAnswer(index)
    setShowExplanation(true)
    if (index === practiceQuestions[currentQuestion].correct) {
      setScore(score + 1)
    }
  }

  const nextQuestion = () => {
    if (currentQuestion < practiceQuestions.length - 1) {
      setCurrentQuestion(currentQuestion + 1)
      setSelectedAnswer(null)
      setShowExplanation(false)
    } else {
      setQuizComplete(true)
    }
  }

  const resetQuiz = () => {
    setCurrentQuestion(0)
    setSelectedAnswer(null)
    setShowExplanation(false)
    setScore(0)
    setQuizComplete(false)
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="bg-gradient-to-r from-emerald-500 to-teal-600 rounded-xl p-6 text-white shadow-md">
        <div className="flex items-center gap-3 mb-2">
          <Volume2 size={24} />
          <div>
            <h1 className="text-xl font-bold m-0">音标学习</h1>
            <p className="text-sm opacity-80 mt-0.5">系统学习英语发音，掌握标准语音</p>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex gap-1 bg-white rounded-lg p-1 shadow-sm border border-gray-100 w-fit">
        {tabs.map(({ key, label, icon }) => (
          <button
            key={key}
            onClick={() => setTab(key)}
            className={`inline-flex items-center gap-1.5 px-4 py-2 rounded-md text-sm font-medium transition-colors cursor-pointer ${
              tab === key ? 'bg-emerald-600 text-white' : 'text-gray-600 hover:bg-gray-100'
            }`}
          >
            {icon}
            {label}
          </button>
        ))}
      </div>

      {/* Vowels */}
      {tab === 'vowels' && (
        <div className="space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {vowels.map((symbol, i) => (
              <div
                key={i}
                className={`bg-white rounded-lg border p-4 cursor-pointer transition-all ${
                  selectedSymbol?.symbol === symbol.symbol
                    ? 'border-emerald-500 shadow-md'
                    : 'border-gray-100 hover:border-emerald-200 hover:shadow-sm'
                }`}
                onClick={() => setSelectedSymbol(symbol)}
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="text-2xl font-bold text-emerald-600">{symbol.symbol}</span>
                  <button
                    onClick={(e) => { e.stopPropagation(); speakText(symbol.examples[0]) }}
                    className="text-gray-400 hover:text-emerald-600 cursor-pointer"
                  >
                    <Volume2 size={16} />
                  </button>
                </div>
                <p className="text-sm font-medium text-gray-800 m-0">{symbol.name}</p>
                <p className="text-xs text-gray-500 mt-1 m-0">{symbol.examples.join(', ')}</p>
              </div>
            ))}
          </div>

          {selectedSymbol && (
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-4xl font-bold text-emerald-600">{selectedSymbol.symbol}</span>
                <div>
                  <h3 className="text-lg font-bold text-gray-800 m-0">{selectedSymbol.name}</h3>
                  <p className="text-sm text-gray-500 m-0">{selectedSymbol.type === 'vowel' ? '元音' : '辅音'}</p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-3">
                  <div>
                    <h4 className="text-sm font-semibold text-gray-700 mb-1">发音示例</h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedSymbol.examples.map((word, i) => (
                        <button
                          key={i}
                          onClick={() => speakText(word)}
                          className="px-3 py-1.5 bg-emerald-50 text-emerald-700 rounded-lg text-sm hover:bg-emerald-100 cursor-pointer transition-colors"
                        >
                          {word}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="text-sm font-semibold text-gray-700 mb-1">嘴型</h4>
                    <p className="text-sm text-gray-600 m-0">{selectedSymbol.mouthPosition}</p>
                  </div>

                  <div>
                    <h4 className="text-sm font-semibold text-gray-700 mb-1">舌位</h4>
                    <p className="text-sm text-gray-600 m-0">{selectedSymbol.tonguePosition}</p>
                  </div>
                </div>

                <div>
                  <h4 className="text-sm font-semibold text-gray-700 mb-1">发音技巧</h4>
                  <ul className="space-y-1">
                    {selectedSymbol.tips.map((tip, i) => (
                      <li key={i} className="flex gap-2 text-sm text-gray-600">
                        <Lightbulb size={14} className="text-amber-500 flex-shrink-0 mt-0.5" />
                        <span>{tip}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          )}
        </div>
      )}

      {/* Consonants */}
      {tab === 'consonants' && (
        <div className="space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {consonants.map((symbol, i) => (
              <div
                key={i}
                className={`bg-white rounded-lg border p-4 cursor-pointer transition-all ${
                  selectedSymbol?.symbol === symbol.symbol
                    ? 'border-emerald-500 shadow-md'
                    : 'border-gray-100 hover:border-emerald-200 hover:shadow-sm'
                }`}
                onClick={() => setSelectedSymbol(symbol)}
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="text-2xl font-bold text-emerald-600">{symbol.symbol}</span>
                  <button
                    onClick={(e) => { e.stopPropagation(); speakText(symbol.examples[0]) }}
                    className="text-gray-400 hover:text-emerald-600 cursor-pointer"
                  >
                    <Volume2 size={16} />
                  </button>
                </div>
                <p className="text-sm font-medium text-gray-800 m-0">{symbol.name}</p>
                <p className="text-xs text-gray-500 mt-1 m-0">{symbol.examples.join(', ')}</p>
              </div>
            ))}
          </div>

          {selectedSymbol && (
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-4xl font-bold text-emerald-600">{selectedSymbol.symbol}</span>
                <div>
                  <h3 className="text-lg font-bold text-gray-800 m-0">{selectedSymbol.name}</h3>
                  <p className="text-sm text-gray-500 m-0">{selectedSymbol.type === 'vowel' ? '元音' : '辅音'}</p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-3">
                  <div>
                    <h4 className="text-sm font-semibold text-gray-700 mb-1">发音示例</h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedSymbol.examples.map((word, i) => (
                        <button
                          key={i}
                          onClick={() => speakText(word)}
                          className="px-3 py-1.5 bg-emerald-50 text-emerald-700 rounded-lg text-sm hover:bg-emerald-100 cursor-pointer transition-colors"
                        >
                          {word}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="text-sm font-semibold text-gray-700 mb-1">嘴型</h4>
                    <p className="text-sm text-gray-600 m-0">{selectedSymbol.mouthPosition}</p>
                  </div>

                  <div>
                    <h4 className="text-sm font-semibold text-gray-700 mb-1">舌位</h4>
                    <p className="text-sm text-gray-600 m-0">{selectedSymbol.tonguePosition}</p>
                  </div>
                </div>

                <div>
                  <h4 className="text-sm font-semibold text-gray-700 mb-1">发音技巧</h4>
                  <ul className="space-y-1">
                    {selectedSymbol.tips.map((tip, i) => (
                      <li key={i} className="flex gap-2 text-sm text-gray-600">
                        <Lightbulb size={14} className="text-amber-500 flex-shrink-0 mt-0.5" />
                        <span>{tip}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          )}
        </div>
      )}

      {/* Phonics Rules */}
      {tab === 'rules' && (
        <div className="space-y-6">
          {phonicsRules.map((category, i) => (
            <div key={i} className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
              <div className="px-4 py-3 bg-emerald-50 border-b border-emerald-100">
                <h3 className="text-sm font-bold text-emerald-700 m-0">{category.category}</h3>
              </div>
              <div className="divide-y divide-gray-50">
                {category.rules.map((rule, j) => (
                  <div key={j} className="p-4 hover:bg-gray-50 transition-colors">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-3">
                        <span className="text-lg font-bold text-emerald-600 bg-emerald-50 px-2 py-1 rounded">{rule.pattern}</span>
                        <ChevronRight size={16} className="text-gray-400" />
                        <span className="text-lg font-bold text-emerald-600">/{rule.sound}/</span>
                      </div>
                      <button
                        onClick={() => speakText(rule.examples[0])}
                        className="text-gray-400 hover:text-emerald-600 cursor-pointer"
                      >
                        <Volume2 size={16} />
                      </button>
                    </div>
                    <p className="text-sm text-gray-600 mb-2 m-0">{rule.explanation}</p>
                    <div className="flex flex-wrap gap-2">
                      {rule.examples.map((word, k) => (
                        <button
                          key={k}
                          onClick={() => speakText(word)}
                          className="px-2 py-1 bg-gray-100 text-gray-700 rounded text-sm hover:bg-emerald-100 hover:text-emerald-700 cursor-pointer transition-colors"
                        >
                          {word}
                        </button>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Practice */}
      {tab === 'practice' && (
        <div className="space-y-6">
          {quizComplete ? (
            <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-100 text-center">
              <div className="text-6xl mb-4">
                {score >= 8 ? '🎉' : score >= 6 ? '👍' : '💪'}
              </div>
              <h2 className="text-2xl font-bold text-gray-800 mb-2">练习完成！</h2>
              <p className="text-lg text-gray-600 mb-4">
                你答对了 <span className="font-bold text-emerald-600">{score}</span> / {practiceQuestions.length} 题
              </p>
              <p className="text-gray-500 mb-6">
                {score >= 8 ? '太棒了！你的音标知识掌握得很好！' :
                 score >= 6 ? '不错！继续练习会更好！' :
                 '加油！多练习几次就能掌握了！'}
              </p>
              <button
                onClick={resetQuiz}
                className="px-6 py-3 bg-emerald-600 text-white rounded-lg font-medium hover:bg-emerald-700 cursor-pointer transition-colors"
              >
                重新开始
              </button>
            </div>
          ) : (
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <span className="text-sm text-gray-500">第 {currentQuestion + 1} / {practiceQuestions.length} 题</span>
                  <h2 className="text-lg font-bold text-gray-800 m-0">听力辨音练习</h2>
                </div>
                <div className="text-right">
                  <span className="text-sm text-gray-500">得分</span>
                  <p className="text-2xl font-bold text-emerald-600 m-0">{score}</p>
                </div>
              </div>

              <div className="mb-6">
                <p className="text-base text-gray-800 mb-4">{practiceQuestions[currentQuestion].question}</p>
                <div className="space-y-3">
                  {practiceQuestions[currentQuestion].options.map((option, i) => (
                    <button
                      key={i}
                      onClick={() => !showExplanation && handleAnswer(i)}
                      disabled={showExplanation}
                      className={`w-full text-left p-4 rounded-lg border transition-all cursor-pointer ${
                        showExplanation
                          ? i === practiceQuestions[currentQuestion].correct
                            ? 'bg-emerald-50 border-emerald-300 text-emerald-700'
                            : i === selectedAnswer
                            ? 'bg-red-50 border-red-300 text-red-700'
                            : 'bg-gray-50 border-gray-200 text-gray-500'
                          : 'bg-white border-gray-200 hover:border-emerald-300 hover:bg-emerald-50'
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <span className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-100 text-sm font-medium">
                          {String.fromCharCode(65 + i)}
                        </span>
                        <span className="font-medium">{option}</span>
                        {showExplanation && i === practiceQuestions[currentQuestion].correct && (
                          <CheckCircle size={20} className="text-emerald-500 ml-auto" />
                        )}
                        {showExplanation && i === selectedAnswer && i !== practiceQuestions[currentQuestion].correct && (
                          <XCircle size={20} className="text-red-500 ml-auto" />
                        )}
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              {showExplanation && (
                <div className="mb-6 p-4 bg-amber-50 rounded-lg border border-amber-200">
                  <div className="flex items-start gap-2">
                    <Lightbulb size={18} className="text-amber-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-sm font-semibold text-amber-800 mb-1 m-0">解析</h4>
                      <p className="text-sm text-amber-700 m-0">{practiceQuestions[currentQuestion].explanation}</p>
                    </div>
                  </div>
                </div>
              )}

              {showExplanation && (
                <div className="flex justify-end">
                  <button
                    onClick={nextQuestion}
                    className="px-6 py-2 bg-emerald-600 text-white rounded-lg font-medium hover:bg-emerald-700 cursor-pointer transition-colors"
                  >
                    {currentQuestion < practiceQuestions.length - 1 ? '下一题' : '查看结果'}
                  </button>
                </div>
              )}
            </div>
          )}
        </div>
      )}
    </div>
  )
}
