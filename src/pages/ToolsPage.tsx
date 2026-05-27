import { useState } from 'react'
import { Wrench, BookOpen, Volume2 } from 'lucide-react'

type Tab = 'irregular' | 'phonics' | 'phrases'

const irregularVerbs = [
  { base: 'be', past: 'was/were', participle: 'been', cn: '是' },
  { base: 'become', past: 'became', participle: 'become', cn: '成为' },
  { base: 'begin', past: 'began', participle: 'begun', cn: '开始' },
  { base: 'break', past: 'broke', participle: 'broken', cn: '打破' },
  { base: 'bring', past: 'brought', participle: 'brought', cn: '带来' },
  { base: 'build', past: 'built', participle: 'built', cn: '建造' },
  { base: 'buy', past: 'bought', participle: 'bought', cn: '买' },
  { base: 'catch', past: 'caught', participle: 'caught', cn: '抓住' },
  { base: 'choose', past: 'chose', participle: 'chosen', cn: '选择' },
  { base: 'come', past: 'came', participle: 'come', cn: '来' },
  { base: 'cost', past: 'cost', participle: 'cost', cn: '花费' },
  { base: 'cut', past: 'cut', participle: 'cut', cn: '切' },
  { base: 'do', past: 'did', participle: 'done', cn: '做' },
  { base: 'draw', past: 'drew', participle: 'drawn', cn: '画' },
  { base: 'drink', past: 'drank', participle: 'drunk', cn: '喝' },
  { base: 'drive', past: 'drove', participle: 'driven', cn: '驾驶' },
  { base: 'eat', past: 'ate', participle: 'eaten', cn: '吃' },
  { base: 'fall', past: 'fell', participle: 'fallen', cn: '落下' },
  { base: 'feel', past: 'felt', participle: 'felt', cn: '感觉' },
  { base: 'find', past: 'found', participle: 'found', cn: '找到' },
  { base: 'fly', past: 'flew', participle: 'flown', cn: '飞' },
  { base: 'forget', past: 'forgot', participle: 'forgotten', cn: '忘记' },
  { base: 'get', past: 'got', participle: 'got/gotten', cn: '得到' },
  { base: 'give', past: 'gave', participle: 'given', cn: '给' },
  { base: 'go', past: 'went', participle: 'gone', cn: '去' },
  { base: 'grow', past: 'grew', participle: 'grown', cn: '生长' },
  { base: 'have', past: 'had', participle: 'had', cn: '有' },
  { base: 'hear', past: 'heard', participle: 'heard', cn: '听到' },
  { base: 'hide', past: 'hid', participle: 'hidden', cn: '隐藏' },
  { base: 'hit', past: 'hit', participle: 'hit', cn: '打' },
  { base: 'hold', past: 'held', participle: 'held', cn: '握住' },
  { base: 'keep', past: 'kept', participle: 'kept', cn: '保持' },
  { base: 'know', past: 'knew', participle: 'known', cn: '知道' },
  { base: 'leave', past: 'left', participle: 'left', cn: '离开' },
  { base: 'lend', past: 'lent', participle: 'lent', cn: '借出' },
  { base: 'let', past: 'let', participle: 'let', cn: '让' },
  { base: 'lie', past: 'lay', participle: 'lain', cn: '躺' },
  { base: 'lose', past: 'lost', participle: 'lost', cn: '丢失' },
  { base: 'make', past: 'made', participle: 'made', cn: '制作' },
  { base: 'mean', past: 'meant', participle: 'meant', cn: '意思是' },
  { base: 'meet', past: 'met', participle: 'met', cn: '遇见' },
  { base: 'pay', past: 'paid', participle: 'paid', cn: '支付' },
  { base: 'put', past: 'put', participle: 'put', cn: '放' },
  { base: 'read', past: 'read', participle: 'read', cn: '读' },
  { base: 'ride', past: 'rode', participle: 'ridden', cn: '骑' },
  { base: 'ring', past: 'rang', participle: 'rung', cn: '响铃' },
  { base: 'rise', past: 'rose', participle: 'risen', cn: '升起' },
  { base: 'run', past: 'ran', participle: 'run', cn: '跑' },
  { base: 'say', past: 'said', participle: 'said', cn: '说' },
  { base: 'see', past: 'saw', participle: 'seen', cn: '看见' },
  { base: 'sell', past: 'sold', participle: 'sold', cn: '卖' },
  { base: 'send', past: 'sent', participle: 'sent', cn: '发送' },
  { base: 'set', past: 'set', participle: 'set', cn: '设置' },
  { base: 'shake', past: 'shook', participle: 'shaken', cn: '摇动' },
  { base: 'show', past: 'showed', participle: 'shown', cn: '展示' },
  { base: 'shut', past: 'shut', participle: 'shut', cn: '关闭' },
  { base: 'sing', past: 'sang', participle: 'sung', cn: '唱' },
  { base: 'sit', past: 'sat', participle: 'sat', cn: '坐' },
  { base: 'sleep', past: 'slept', participle: 'slept', cn: '睡觉' },
  { base: 'speak', past: 'spoke', participle: 'spoken', cn: '说' },
  { base: 'spend', past: 'spent', participle: 'spent', cn: '花费' },
  { base: 'stand', past: 'stood', participle: 'stood', cn: '站' },
  { base: 'swim', past: 'swam', participle: 'swum', cn: '游泳' },
  { base: 'take', past: 'took', participle: 'taken', cn: '拿' },
  { base: 'teach', past: 'taught', participle: 'taught', cn: '教' },
  { base: 'tell', past: 'told', participle: 'told', cn: '告诉' },
  { base: 'think', past: 'thought', participle: 'thought', cn: '想' },
  { base: 'throw', past: 'threw', participle: 'thrown', cn: '扔' },
  { base: 'understand', past: 'understood', participle: 'understood', cn: '理解' },
  { base: 'wake', past: 'woke', participle: 'woken', cn: '醒来' },
  { base: 'wear', past: 'wore', participle: 'worn', cn: '穿' },
  { base: 'win', past: 'won', participle: 'won', cn: '赢' },
  { base: 'write', past: 'wrote', participle: 'written', cn: '写' },
]

const phonics = [
  { symbol: '/iː/', examples: 'see, tea, key', cn: '长衣音' },
  { symbol: '/ɪ/', examples: 'sit, big, gym', cn: '短衣音' },
  { symbol: '/e/', examples: 'bed, head, said', cn: '诶音' },
  { symbol: '/æ/', examples: 'cat, bad, hand', cn: '大口诶音' },
  { symbol: '/ɑː/', examples: 'car, father, ask', cn: '啊音' },
  { symbol: '/ɒ/', examples: 'hot, dog, what', cn: '奥音' },
  { symbol: '/ɔː/', examples: 'door, four, law', cn: '长奥音' },
  { symbol: '/ʊ/', examples: 'put, good, book', cn: '短乌音' },
  { symbol: '/uː/', examples: 'too, blue, food', cn: '长乌音' },
  { symbol: '/ʌ/', examples: 'cup, love, bus', cn: '阿音' },
  { symbol: '/ɜː/', examples: 'bird, her, word', cn: '额音' },
  { symbol: '/ə/', examples: 'about, sofa, the', cn: '轻额音' },
  { symbol: '/eɪ/', examples: 'day, make, they', cn: '诶一' },
  { symbol: '/aɪ/', examples: 'my, time, eye', cn: '啊一' },
  { symbol: '/ɔɪ/', examples: 'boy, coin, toy', cn: '奥一' },
  { symbol: '/aʊ/', examples: 'how, out, cow', cn: '啊乌' },
  { symbol: '/əʊ/', examples: 'go, home, no', cn: '额乌' },
  { symbol: '/ɪə/', examples: 'near, here, beer', cn: '一额' },
  { symbol: '/eə/', examples: 'hair, there, care', cn: '诶额' },
  { symbol: '/ʊə/', examples: 'tour, sure, pure', cn: '乌额' },
  { symbol: '/p/', examples: 'pen, map, stop', cn: '泼' },
  { symbol: '/b/', examples: 'bad, job, club', cn: '波' },
  { symbol: '/t/', examples: 'tea, get, bit', cn: '特' },
  { symbol: '/d/', examples: 'do, had, bed', cn: '德' },
  { symbol: '/k/', examples: 'cat, back, key', cn: '科' },
  { symbol: '/g/', examples: 'go, big, dog', cn: '哥' },
  { symbol: '/f/', examples: 'fat, if, off', cn: '佛' },
  { symbol: '/v/', examples: 'van, have, love', cn: '乌' },
  { symbol: '/θ/', examples: 'think, both', cn: '丝(咬舌)' },
  { symbol: '/ð/', examples: 'this, that, the', cn: '日(咬舌)' },
  { symbol: '/s/', examples: 'see, miss, pass', cn: '丝' },
  { symbol: '/z/', examples: 'zoo, has, dogs', cn: '日' },
  { symbol: '/ʃ/', examples: 'she, wash, fish', cn: '师' },
  { symbol: '/ʒ/', examples: 'vision, measure', cn: '日' },
  { symbol: '/h/', examples: 'he, hat, who', cn: '喝' },
  { symbol: '/m/', examples: 'man, him, name', cn: '么' },
  { symbol: '/n/', examples: 'no, in, pen', cn: '呢' },
  { symbol: '/ŋ/', examples: 'sing, think', cn: '昂' },
  { symbol: '/l/', examples: 'leg, let, all', cn: '了' },
  { symbol: '/r/', examples: 'red, run, far', cn: '日(卷舌)' },
  { symbol: '/j/', examples: 'yes, you, use', cn: '耶' },
  { symbol: '/w/', examples: 'we, wet, one', cn: '我' },
  { symbol: '/tʃ/', examples: 'chat, catch, church', cn: '吃' },
  { symbol: '/dʒ/', examples: 'job, age, orange', cn: '知' },
]

const commonPhrases = [
  { en: 'How are you?', cn: '你好吗？', category: '问候' },
  { en: 'Fine, thank you.', cn: '很好，谢谢。', category: '问候' },
  { en: 'Nice to meet you.', cn: '很高兴认识你。', category: '问候' },
  { en: 'What\'s your name?', cn: '你叫什么名字？', category: '自我介绍' },
  { en: 'My name is...', cn: '我叫……', category: '自我介绍' },
  { en: 'Where are you from?', cn: '你来自哪里？', category: '自我介绍' },
  { en: 'I\'m from China.', cn: '我来自中国。', category: '自我介绍' },
  { en: 'What do you do?', cn: '你做什么工作？', category: '日常对话' },
  { en: 'I\'m a student.', cn: '我是一名学生。', category: '日常对话' },
  { en: 'Excuse me.', cn: '对不起/打扰一下。', category: '礼貌用语' },
  { en: 'I\'m sorry.', cn: '对不起。', category: '礼貌用语' },
  { en: 'Thank you very much.', cn: '非常感谢。', category: '礼貌用语' },
  { en: 'You\'re welcome.', cn: '不客气。', category: '礼貌用语' },
  { en: 'Could you help me?', cn: '你能帮帮我吗？', category: '请求帮助' },
  { en: 'Of course.', cn: '当然可以。', category: '请求帮助' },
  { en: 'I don\'t understand.', cn: '我不明白。', category: '请求帮助' },
  { en: 'Could you say that again?', cn: '你能再说一遍吗？', category: '请求帮助' },
  { en: 'What time is it?', cn: '现在几点了？', category: '日常对话' },
  { en: 'It\'s three o\'clock.', cn: '三点了。', category: '日常对话' },
  { en: 'How much is this?', cn: '这个多少钱？', category: '购物' },
  { en: 'It\'s too expensive.', cn: '太贵了。', category: '购物' },
  { en: 'Can I try this on?', cn: '我可以试穿吗？', category: '购物' },
  { en: 'I\'d like to order...', cn: '我想点……', category: '餐厅' },
  { en: 'The bill, please.', cn: '请买单。', category: '餐厅' },
  { en: 'Where is the restroom?', cn: '洗手间在哪里？', category: '问路' },
  { en: 'Turn left/right.', cn: '左/右转。', category: '问路' },
  { en: 'Go straight ahead.', cn: '一直往前走。', category: '问路' },
  { en: 'I\'d like to book a room.', cn: '我想订一个房间。', category: '旅行' },
  { en: 'What time is check-out?', cn: '退房时间是几点？', category: '旅行' },
  { en: 'Have a nice day!', cn: '祝你今天愉快！', category: '告别' },
  { en: 'See you later.', cn: '回头见。', category: '告别' },
  { en: 'Goodbye.', cn: '再见。', category: '告别' },
]

export default function ToolsPage() {
  const [tab, setTab] = useState<Tab>('irregular')
  const [verbFilter, setVerbFilter] = useState('')

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
    { key: 'irregular', label: '不规则动词', icon: <BookOpen size={14} /> },
    { key: 'phonics', label: '国际音标', icon: <Volume2 size={14} /> },
    { key: 'phrases', label: '常用短语', icon: <BookOpen size={14} /> },
  ]

  const filteredVerbs = verbFilter
    ? irregularVerbs.filter((v) => v.base.startsWith(verbFilter.toLowerCase()))
    : irregularVerbs

  const phraseCategories = [...new Set(commonPhrases.map((p) => p.category))]

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="bg-gradient-to-r from-indigo-500 to-purple-600 rounded-xl p-6 text-white shadow-md">
        <div className="flex items-center gap-3 mb-2">
          <Wrench size={24} />
          <div>
            <h1 className="text-xl font-bold m-0">学习工具</h1>
            <p className="text-sm opacity-80 mt-0.5">常用英语学习参考资料</p>
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
              tab === key ? 'bg-indigo-600 text-white' : 'text-gray-600 hover:bg-gray-100'
            }`}
          >
            {icon}
            {label}
          </button>
        ))}
      </div>

      {/* Irregular Verbs */}
      {tab === 'irregular' && (
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
          <div className="p-4 border-b border-gray-100">
            <input
              type="text"
              value={verbFilter}
              onChange={(e) => setVerbFilter(e.target.value)}
              placeholder="输入字母筛选动词..."
              className="w-full max-w-xs px-3 py-2 bg-gray-50 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-gray-50 border-b border-gray-200">
                  <th className="text-left py-3 px-4 font-semibold text-gray-600">原形</th>
                  <th className="text-left py-3 px-4 font-semibold text-gray-600">过去式</th>
                  <th className="text-left py-3 px-4 font-semibold text-gray-600">过去分词</th>
                  <th className="text-left py-3 px-4 font-semibold text-gray-600">释义</th>
                  <th className="w-10"></th>
                </tr>
              </thead>
              <tbody>
                {filteredVerbs.map((v, i) => (
                  <tr key={i} className="border-b border-gray-50 hover:bg-indigo-50/50 transition-colors">
                    <td className="py-2.5 px-4 font-semibold text-gray-800">{v.base}</td>
                    <td className="py-2.5 px-4 text-gray-600">{v.past}</td>
                    <td className="py-2.5 px-4 text-gray-600">{v.participle}</td>
                    <td className="py-2.5 px-4 text-gray-500">{v.cn}</td>
                    <td className="py-2.5 px-4">
                      <button onClick={() => speakText(v.base)} className="text-gray-400 hover:text-indigo-600 cursor-pointer">
                        <Volume2 size={14} />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* Phonics */}
      {tab === 'phonics' && (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {phonics.map((p, i) => (
            <div
              key={i}
              className="bg-white rounded-lg border border-gray-100 p-4 hover:border-indigo-200 hover:shadow-sm transition-all cursor-pointer"
              onClick={() => speakText(p.examples.split(',')[0].trim())}
            >
              <div className="flex items-center justify-between mb-2">
                <span className="text-2xl font-bold text-indigo-600">{p.symbol}</span>
                <Volume2 size={16} className="text-gray-400" />
              </div>
              <p className="text-sm text-gray-600 m-0">{p.examples}</p>
              <p className="text-xs text-gray-400 mt-1 m-0">{p.cn}</p>
            </div>
          ))}
        </div>
      )}

      {/* Common Phrases */}
      {tab === 'phrases' && (
        <div className="space-y-6">
          {phraseCategories.map((cat) => (
            <div key={cat} className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
              <div className="px-4 py-3 bg-indigo-50 border-b border-indigo-100">
                <h3 className="text-sm font-bold text-indigo-700 m-0">{cat}</h3>
              </div>
              <div className="divide-y divide-gray-50">
                {commonPhrases.filter((p) => p.category === cat).map((p, i) => (
                  <div
                    key={i}
                    className="flex items-center justify-between px-4 py-3 hover:bg-gray-50 transition-colors cursor-pointer"
                    onClick={() => speakText(p.en)}
                  >
                    <div>
                      <p className="text-sm font-medium text-gray-800 m-0">{p.en}</p>
                      <p className="text-sm text-gray-500 m-0">{p.cn}</p>
                    </div>
                    <Volume2 size={16} className="text-gray-400 flex-shrink-0" />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
