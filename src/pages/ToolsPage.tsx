import { useState } from 'react'
import { Wrench, BookOpen, Volume2, Lightbulb, Languages } from 'lucide-react'

type Tab = 'irregular' | 'grammar' | 'phrases' | 'vocabulary'

// 不规则动词表 (100+)
const irregularVerbs = [
  { base: 'be', past: 'was/were', participle: 'been', cn: '是' },
  { base: 'beat', past: 'beat', participle: 'beaten', cn: '打' },
  { base: 'become', past: 'became', participle: 'become', cn: '成为' },
  { base: 'begin', past: 'began', participle: 'begun', cn: '开始' },
  { base: 'bend', past: 'bent', participle: 'bent', cn: '弯曲' },
  { base: 'bite', past: 'bit', participle: 'bitten', cn: '咬' },
  { base: 'blow', past: 'blew', participle: 'blown', cn: '吹' },
  { base: 'break', past: 'broke', participle: 'broken', cn: '打破' },
  { base: 'bring', past: 'brought', participle: 'brought', cn: '带来' },
  { base: 'build', past: 'built', participle: 'built', cn: '建造' },
  { base: 'burn', past: 'burnt/burned', participle: 'burnt/burned', cn: '燃烧' },
  { base: 'buy', past: 'bought', participle: 'bought', cn: '买' },
  { base: 'catch', past: 'caught', participle: 'caught', cn: '抓住' },
  { base: 'choose', past: 'chose', participle: 'chosen', cn: '选择' },
  { base: 'come', past: 'came', participle: 'come', cn: '来' },
  { base: 'cost', past: 'cost', participle: 'cost', cn: '花费' },
  { base: 'cut', past: 'cut', participle: 'cut', cn: '切' },
  { base: 'dig', past: 'dug', participle: 'dug', cn: '挖' },
  { base: 'do', past: 'did', participle: 'done', cn: '做' },
  { base: 'draw', past: 'drew', participle: 'drawn', cn: '画' },
  { base: 'dream', past: 'dreamt/dreamed', participle: 'dreamt/dreamed', cn: '做梦' },
  { base: 'drink', past: 'drank', participle: 'drunk', cn: '喝' },
  { base: 'drive', past: 'drove', participle: 'driven', cn: '驾驶' },
  { base: 'eat', past: 'ate', participle: 'eaten', cn: '吃' },
  { base: 'fall', past: 'fell', participle: 'fallen', cn: '落下' },
  { base: 'feed', past: 'fed', participle: 'fed', cn: '喂' },
  { base: 'feel', past: 'felt', participle: 'felt', cn: '感觉' },
  { base: 'fight', past: 'fought', participle: 'fought', cn: '打架' },
  { base: 'find', past: 'found', participle: 'found', cn: '找到' },
  { base: 'fly', past: 'flew', participle: 'flown', cn: '飞' },
  { base: 'forget', past: 'forgot', participle: 'forgotten', cn: '忘记' },
  { base: 'forgive', past: 'forgave', participle: 'forgiven', cn: '原谅' },
  { base: 'freeze', past: 'froze', participle: 'frozen', cn: '冻结' },
  { base: 'get', past: 'got', participle: 'got/gotten', cn: '得到' },
  { base: 'give', past: 'gave', participle: 'given', cn: '给' },
  { base: 'go', past: 'went', participle: 'gone', cn: '去' },
  { base: 'grow', past: 'grew', participle: 'grown', cn: '生长' },
  { base: 'hang', past: 'hung', participle: 'hung', cn: '悬挂' },
  { base: 'have', past: 'had', participle: 'had', cn: '有' },
  { base: 'hear', past: 'heard', participle: 'heard', cn: '听到' },
  { base: 'hide', past: 'hid', participle: 'hidden', cn: '隐藏' },
  { base: 'hit', past: 'hit', participle: 'hit', cn: '打' },
  { base: 'hold', past: 'held', participle: 'held', cn: '握住' },
  { base: 'hurt', past: 'hurt', participle: 'hurt', cn: '伤害' },
  { base: 'keep', past: 'kept', participle: 'kept', cn: '保持' },
  { base: 'kneel', past: 'knelt', participle: 'knelt', cn: '跪' },
  { base: 'know', past: 'knew', participle: 'known', cn: '知道' },
  { base: 'lay', past: 'laid', participle: 'laid', cn: '放置' },
  { base: 'lead', past: 'led', participle: 'led', cn: '领导' },
  { base: 'learn', past: 'learnt/learned', participle: 'learnt/learned', cn: '学习' },
  { base: 'leave', past: 'left', participle: 'left', cn: '离开' },
  { base: 'lend', past: 'lent', participle: 'lent', cn: '借出' },
  { base: 'let', past: 'let', participle: 'let', cn: '让' },
  { base: 'lie', past: 'lay', participle: 'lain', cn: '躺' },
  { base: 'light', past: 'lit', participle: 'lit', cn: '点亮' },
  { base: 'lose', past: 'lost', participle: 'lost', cn: '丢失' },
  { base: 'make', past: 'made', participle: 'made', cn: '制作' },
  { base: 'mean', past: 'meant', participle: 'meant', cn: '意思是' },
  { base: 'meet', past: 'met', participle: 'met', cn: '遇见' },
  { base: 'mistake', past: 'mistook', participle: 'mistaken', cn: '弄错' },
  { base: 'pay', past: 'paid', participle: 'paid', cn: '支付' },
  { base: 'put', past: 'put', participle: 'put', cn: '放' },
  { base: 'read', past: 'read', participle: 'read', cn: '读' },
  { base: 'ride', past: 'rode', participle: 'ridden', cn: '骑' },
  { base: 'ring', past: 'rang', participle: 'rung', cn: '响铃' },
  { base: 'rise', past: 'rose', participle: 'risen', cn: '升起' },
  { base: 'run', past: 'ran', participle: 'run', cn: '跑' },
  { base: 'say', past: 'said', participle: 'said', cn: '说' },
  { base: 'see', past: 'saw', participle: 'seen', cn: '看见' },
  { base: 'seek', past: 'sought', participle: 'sought', cn: '寻找' },
  { base: 'sell', past: 'sold', participle: 'sold', cn: '卖' },
  { base: 'send', past: 'sent', participle: 'sent', cn: '发送' },
  { base: 'set', past: 'set', participle: 'set', cn: '设置' },
  { base: 'sew', past: 'sewed', participle: 'sewn/sewed', cn: '缝' },
  { base: 'shake', past: 'shook', participle: 'shaken', cn: '摇动' },
  { base: 'shine', past: 'shone', participle: 'shone', cn: '发光' },
  { base: 'shoot', past: 'shot', participle: 'shot', cn: '射击' },
  { base: 'show', past: 'showed', participle: 'shown', cn: '展示' },
  { base: 'shut', past: 'shut', participle: 'shut', cn: '关闭' },
  { base: 'sing', past: 'sang', participle: 'sung', cn: '唱' },
  { base: 'sink', past: 'sank', participle: 'sunk', cn: '下沉' },
  { base: 'sit', past: 'sat', participle: 'sat', cn: '坐' },
  { base: 'sleep', past: 'slept', participle: 'slept', cn: '睡觉' },
  { base: 'slide', past: 'slid', participle: 'slid', cn: '滑动' },
  { base: 'smell', past: 'smelt/smelled', participle: 'smelt/smelled', cn: '闻' },
  { base: 'speak', past: 'spoke', participle: 'spoken', cn: '说' },
  { base: 'speed', past: 'sped', participle: 'sped', cn: '加速' },
  { base: 'spell', past: 'spelt/spelled', participle: 'spelt/spelled', cn: '拼写' },
  { base: 'spend', past: 'spent', participle: 'spent', cn: '花费' },
  { base: 'spill', past: 'spilt/spilled', participle: 'spilt/spilled', cn: '溢出' },
  { base: 'spin', past: 'spun', participle: 'spun', cn: '旋转' },
  { base: 'spread', past: 'spread', participle: 'spread', cn: '传播' },
  { base: 'stand', past: 'stood', participle: 'stood', cn: '站' },
  { base: 'steal', past: 'stole', participle: 'stolen', cn: '偷' },
  { base: 'stick', past: 'stuck', participle: 'stuck', cn: '粘贴' },
  { base: 'strike', past: 'struck', participle: 'struck', cn: '打击' },
  { base: 'swim', past: 'swam', participle: 'swum', cn: '游泳' },
  { base: 'swing', past: 'swung', participle: 'swung', cn: '摇摆' },
  { base: 'take', past: 'took', participle: 'taken', cn: '拿' },
  { base: 'teach', past: 'taught', participle: 'taught', cn: '教' },
  { base: 'tear', past: 'tore', participle: 'torn', cn: '撕' },
  { base: 'tell', past: 'told', participle: 'told', cn: '告诉' },
  { base: 'think', past: 'thought', participle: 'thought', cn: '想' },
  { base: 'throw', past: 'threw', participle: 'thrown', cn: '扔' },
  { base: 'understand', past: 'understood', participle: 'understood', cn: '理解' },
  { base: 'wake', past: 'woke', participle: 'woken', cn: '醒来' },
  { base: 'wear', past: 'wore', participle: 'worn', cn: '穿' },
  { base: 'weave', past: 'wove', participle: 'woven', cn: '编织' },
  { base: 'weep', past: 'wept', participle: 'wept', cn: '哭泣' },
  { base: 'win', past: 'won', participle: 'won', cn: '赢' },
  { base: 'wind', past: 'wound', participle: 'wound', cn: '缠绕' },
  { base: 'write', past: 'wrote', participle: 'written', cn: '写' },
]

// 语法知识总结
const grammarSections = [
  {
    title: '一般现在时',
    usage: '表示经常性、习惯性的动作或状态，以及客观事实',
    structure: '主语 + 动词原形（第三人称单数加 s/es）',
    examples: [
      { en: 'I go to school every day.', cn: '我每天去上学。' },
      { en: 'She likes apples.', cn: '她喜欢苹果。' },
      { en: 'The earth goes around the sun.', cn: '地球绕着太阳转。' },
    ],
    keywords: 'always, usually, often, sometimes, every day/week/month',
  },
  {
    title: '一般过去时',
    usage: '表示过去某个时间发生的动作或存在的状态',
    structure: '主语 + 动词过去式',
    examples: [
      { en: 'I went to Beijing last year.', cn: '我去年去了北京。' },
      { en: 'She was a teacher.', cn: '她曾经是一名老师。' },
      { en: 'They didn\'t come yesterday.', cn: '他们昨天没来。' },
    ],
    keywords: 'yesterday, last week/month/year, ago, in 2020',
  },
  {
    title: '一般将来时',
    usage: '表示将来要发生的动作或存在的状态',
    structure: '主语 + will + 动词原形 / 主语 + be going to + 动词原形',
    examples: [
      { en: 'I will come tomorrow.', cn: '我明天会来。' },
      { en: 'She is going to study abroad.', cn: '她打算出国留学。' },
      { en: 'It will rain later.', cn: '待会儿会下雨。' },
    ],
    keywords: 'tomorrow, next week/month/year, soon, in the future',
  },
  {
    title: '现在进行时',
    usage: '表示现在正在进行的动作',
    structure: '主语 + am/is/are + 动词现在分词(-ing)',
    examples: [
      { en: 'I am reading a book now.', cn: '我现在正在看书。' },
      { en: 'She is cooking dinner.', cn: '她正在做晚饭。' },
      { en: 'They are playing football.', cn: '他们正在踢足球。' },
    ],
    keywords: 'now, at the moment, look, listen',
  },
  {
    title: '过去进行时',
    usage: '表示过去某个时间正在进行的动作',
    structure: '主语 + was/were + 动词现在分词(-ing)',
    examples: [
      { en: 'I was sleeping at 10 last night.', cn: '昨晚10点我正在睡觉。' },
      { en: 'She was reading when I came in.', cn: '我进来时她正在看书。' },
      { en: 'They were watching TV at that time.', cn: '那时他们正在看电视。' },
    ],
    keywords: 'at that time, when, while',
  },
  {
    title: '现在完成时',
    usage: '表示过去发生的动作对现在造成的影响，或从过去持续到现在的动作',
    structure: '主语 + have/has + 动词过去分词',
    examples: [
      { en: 'I have already finished my homework.', cn: '我已经做完作业了。' },
      { en: 'She has lived here for 10 years.', cn: '她在这里住了10年了。' },
      { en: 'Have you ever been to Japan?', cn: '你去过日本吗？' },
    ],
    keywords: 'already, yet, just, ever, never, since, for',
  },
  {
    title: '过去完成时',
    usage: '表示过去某个动作发生之前已经完成的动作',
    structure: '主语 + had + 动词过去分词',
    examples: [
      { en: 'I had finished before he came.', cn: '他来之前我已经完成了。' },
      { en: 'She had left when I arrived.', cn: '我到的时候她已经走了。' },
      { en: 'They had never seen snow before.', cn: '他们以前从未见过雪。' },
    ],
    keywords: 'before, after, by the time, already',
  },
  {
    title: '被动语态',
    usage: '强调动作的承受者，而不是执行者',
    structure: '主语 + be + 动词过去分词 (+ by + 执行者)',
    examples: [
      { en: 'English is spoken all over the world.', cn: '全世界都说英语。' },
      { en: 'The book was written by Lu Xun.', cn: '这本书是鲁迅写的。' },
      { en: 'The house was built in 1990.', cn: '这栋房子建于1990年。' },
    ],
    keywords: 'by, is/are/was/were + done',
  },
  {
    title: '定语从句',
    usage: '修饰名词或代词的从句',
    structure: '先行词 + 关系代词/副词 + 从句',
    examples: [
      { en: 'The man who is standing there is my teacher.', cn: '站在那里的那个人是我的老师。' },
      { en: 'This is the book that I bought yesterday.', cn: '这就是我昨天买的那本书。' },
      { en: 'I know the place where he lives.', cn: '我知道他住的地方。' },
    ],
    keywords: 'who, whom, whose, which, that, where, when',
  },
  {
    title: '条件状语从句',
    usage: '表示条件或假设',
    structure: 'If + 从句, 主句',
    examples: [
      { en: 'If it rains, I will stay at home.', cn: '如果下雨，我就待在家里。' },
      { en: 'If I were you, I would study harder.', cn: '如果我是你，我会更努力学习。' },
      { en: 'If you don\'t hurry, you\'ll be late.', cn: '如果你不快点，你会迟到的。' },
    ],
    keywords: 'if, unless, as long as',
  },
  {
    title: '宾语从句',
    usage: '在句中充当宾语的从句',
    structure: '主句 + that/whether/if/wh-词 + 从句',
    examples: [
      { en: 'I think (that) he is right.', cn: '我认为他是对的。' },
      { en: 'I don\'t know if he will come.', cn: '我不知道他是否会来。' },
      { en: 'Can you tell me where the station is?', cn: '你能告诉我车站在哪里吗？' },
    ],
    keywords: 'that, if, whether, what, where, when, how, why',
  },
  {
    title: '比较级和最高级',
    usage: '表示两者比较或三者及以上比较',
    structure: '比较级: A + be + adj.-er + than + B\n最高级: A + be + the + adj.-est + in/of...',
    examples: [
      { en: 'She is taller than her sister.', cn: '她比她姐姐高。' },
      { en: 'This is the best movie I\'ve ever seen.', cn: '这是我看过的最好的电影。' },
      { en: 'He runs faster than me.', cn: '他跑得比我快。' },
    ],
    keywords: 'than, the most, the best, -er, -est, more, most',
  },
]

// 扩充常用短语
const commonPhrases = [
  // 问候
  { en: 'How are you?', cn: '你好吗？', category: '问候' },
  { en: 'Fine, thank you.', cn: '很好，谢谢。', category: '问候' },
  { en: 'Nice to meet you.', cn: '很高兴认识你。', category: '问候' },
  { en: 'How do you do?', cn: '你好！', category: '问候' },
  { en: 'Long time no see.', cn: '好久不见。', category: '问候' },
  // 自我介绍
  { en: 'What\'s your name?', cn: '你叫什么名字？', category: '自我介绍' },
  { en: 'My name is...', cn: '我叫……', category: '自我介绍' },
  { en: 'Where are you from?', cn: '你来自哪里？', category: '自我介绍' },
  { en: 'I\'m from China.', cn: '我来自中国。', category: '自我介绍' },
  { en: 'What do you do?', cn: '你做什么工作？', category: '自我介绍' },
  { en: 'I\'m a student.', cn: '我是一名学生。', category: '自我介绍' },
  // 礼貌用语
  { en: 'Excuse me.', cn: '对不起/打扰一下。', category: '礼貌用语' },
  { en: 'I\'m sorry.', cn: '对不起。', category: '礼貌用语' },
  { en: 'Thank you very much.', cn: '非常感谢。', category: '礼貌用语' },
  { en: 'You\'re welcome.', cn: '不客气。', category: '礼貌用语' },
  { en: 'It doesn\'t matter.', cn: '没关系。', category: '礼貌用语' },
  { en: 'My pleasure.', cn: '我的荣幸。', category: '礼貌用语' },
  // 请求帮助
  { en: 'Could you help me?', cn: '你能帮帮我吗？', category: '请求帮助' },
  { en: 'Of course.', cn: '当然可以。', category: '请求帮助' },
  { en: 'I don\'t understand.', cn: '我不明白。', category: '请求帮助' },
  { en: 'Could you say that again?', cn: '你能再说一遍吗？', category: '请求帮助' },
  { en: 'Could you speak more slowly?', cn: '你能说慢一点吗？', category: '请求帮助' },
  { en: 'What does this mean?', cn: '这是什么意思？', category: '请求帮助' },
  // 日常对话
  { en: 'What time is it?', cn: '现在几点了？', category: '日常对话' },
  { en: 'It\'s three o\'clock.', cn: '三点了。', category: '日常对话' },
  { en: 'What\'s the weather like today?', cn: '今天天气怎么样？', category: '日常对话' },
  { en: 'It\'s sunny/cloudy/rainy.', cn: '今天晴天/多云/下雨。', category: '日常对话' },
  { en: 'How was your weekend?', cn: '你周末过得怎么样？', category: '日常对话' },
  // 购物
  { en: 'How much is this?', cn: '这个多少钱？', category: '购物' },
  { en: 'It\'s too expensive.', cn: '太贵了。', category: '购物' },
  { en: 'Can I try this on?', cn: '我可以试穿吗？', category: '购物' },
  { en: 'Do you have a smaller size?', cn: '你有小一号的吗？', category: '购物' },
  { en: 'I\'ll take it.', cn: '我要这个。', category: '购物' },
  { en: 'Can I pay by credit card?', cn: '我可以刷卡吗？', category: '购物' },
  // 餐厅
  { en: 'I\'d like to order...', cn: '我想点……', category: '餐厅' },
  { en: 'The bill, please.', cn: '请买单。', category: '餐厅' },
  { en: 'Could I have the menu?', cn: '能给我菜单吗？', category: '餐厅' },
  { en: 'What do you recommend?', cn: '你推荐什么？', category: '餐厅' },
  { en: 'I\'m allergic to...', cn: '我对……过敏。', category: '餐厅' },
  // 问路
  { en: 'Where is the restroom?', cn: '洗手间在哪里？', category: '问路' },
  { en: 'Turn left/right.', cn: '左/右转。', category: '问路' },
  { en: 'Go straight ahead.', cn: '一直往前走。', category: '问路' },
  { en: 'How far is it?', cn: '有多远？', category: '问路' },
  { en: 'Is it within walking distance?', cn: '走路能到吗？', category: '问路' },
  // 旅行
  { en: 'I\'d like to book a room.', cn: '我想订一个房间。', category: '旅行' },
  { en: 'What time is check-out?', cn: '退房时间是几点？', category: '旅行' },
  { en: 'Where can I exchange money?', cn: '我在哪里可以换钱？', category: '旅行' },
  { en: 'Is breakfast included?', cn: '包含早餐吗？', category: '旅行' },
  { en: 'Could you take a photo for me?', cn: '你能帮我拍张照吗？', category: '旅行' },
  // 告别
  { en: 'Have a nice day!', cn: '祝你今天愉快！', category: '告别' },
  { en: 'See you later.', cn: '回头见。', category: '告别' },
  { en: 'Goodbye.', cn: '再见。', category: '告别' },
  { en: 'Take care.', cn: '保重。', category: '告别' },
  { en: 'Keep in touch.', cn: '保持联系。', category: '告别' },
  // 表达观点
  { en: 'I think...', cn: '我认为……', category: '表达观点' },
  { en: 'In my opinion...', cn: '在我看来……', category: '表达观点' },
  { en: 'I agree/disagree.', cn: '我同意/不同意。', category: '表达观点' },
  { en: 'That\'s a good idea.', cn: '好主意。', category: '表达观点' },
  { en: 'I\'m not sure about that.', cn: '我不确定。', category: '表达观点' },
  // 同意和反对
  { en: 'Exactly!', cn: '没错！', category: '同意和反对' },
  { en: 'Absolutely!', cn: '绝对的！', category: '同意和反对' },
  { en: 'I don\'t think so.', cn: '我不这么认为。', category: '同意和反对' },
  { en: 'That\'s not right.', cn: '那不对。', category: '同意和反对' },
  { en: 'It depends.', cn: '看情况。', category: '同意和反对' },
]

// 词汇构建工具 - 词根词缀
const wordRoots = [
  { root: 'act', meaning: '做，行动', examples: ['action', 'active', 'actor', 'react'] },
  { root: 'agri', meaning: '田地，农业', examples: ['agriculture', 'agricultural'] },
  { root: 'ann/enn', meaning: '年', examples: ['annual', 'anniversary'] },
  { root: 'aud', meaning: '听', examples: ['audio', 'audience', 'auditorium'] },
  { root: 'bell', meaning: '战争', examples: ['bellicose', 'rebel'] },
  { root: 'bene', meaning: '好，善', examples: ['benefit', 'benevolent'] },
  { root: 'bio', meaning: '生命', examples: ['biology', 'biography', 'antibiotic'] },
  { root: 'ced/ceed/cess', meaning: '走，让步', examples: ['proceed', 'success', 'access'] },
  { root: 'cent', meaning: '百', examples: ['century', 'percent', 'centimeter'] },
  { root: 'chron', meaning: '时间', examples: ['chronological', 'chronic', 'chronicle'] },
  { root: 'cide', meaning: '杀', examples: ['suicide', 'insecticide', 'homicide'] },
  { root: 'claim/clam', meaning: '喊叫', examples: ['exclaim', 'proclaim', 'clamor'] },
  { root: 'cred', meaning: '相信', examples: ['credit', 'credible', 'incredible'] },
  { root: 'cur', meaning: '关心', examples: ['cure', 'curious', 'accurate'] },
  { root: 'dict', meaning: '说', examples: ['dictionary', 'predict', 'contradict'] },
  { root: 'duc/duct', meaning: '引导', examples: ['conduct', 'produce', 'educate'] },
  { root: 'equ', meaning: '相等', examples: ['equal', 'equivalent', 'equation'] },
  { root: 'fact/fect', meaning: '做', examples: ['factory', 'effect', 'perfect'] },
  { root: 'fer', meaning: '携带，带来', examples: ['transfer', 'refer', 'prefer'] },
  { root: 'fin', meaning: '结束', examples: ['final', 'finish', 'define'] },
  { root: 'form', meaning: '形状', examples: ['format', 'formula', 'transform'] },
  { root: 'gen', meaning: '产生，种类', examples: ['generate', 'general', 'gene'] },
  { root: 'graph/gram', meaning: '写，画', examples: ['photograph', 'diagram', 'grammar'] },
  { root: 'ject', meaning: '扔', examples: ['project', 'reject', 'inject'] },
  { root: 'jud/jur', meaning: '判断，法律', examples: ['judge', 'jury', 'justice'] },
  { root: 'lect/leg', meaning: '选择，读', examples: ['select', 'collect', 'lecture'] },
  { root: 'liber', meaning: '自由', examples: ['liberty', 'liberal', 'liberate'] },
  { root: 'log/logue', meaning: '说话，学科', examples: ['dialogue', 'logic', 'biology'] },
  { root: 'man/manu', meaning: '手', examples: ['manual', 'manufacture', 'manage'] },
  { root: 'mar', meaning: '海', examples: ['marine', 'maritime', 'submarine'] },
  { root: 'medi', meaning: '中间', examples: ['medium', 'mediate', 'Mediterranean'] },
  { root: 'memor', meaning: '记忆', examples: ['memory', 'memorial', 'remember'] },
  { root: 'merg/mers', meaning: '沉，浸', examples: ['emerge', 'immerse', 'submerge'] },
  { root: 'migr', meaning: '迁移', examples: ['migrate', 'immigrant', 'emigrate'] },
  { root: 'min', meaning: '小', examples: ['minimum', 'minor', 'diminish'] },
  { root: 'mir', meaning: '惊奇', examples: ['miracle', 'mirror', 'admire'] },
  { root: 'miss/mit', meaning: '送', examples: ['mission', 'permit', 'submit'] },
  { root: 'mob/mot/mov', meaning: '动', examples: ['mobile', 'motion', 'move'] },
  { root: 'nat', meaning: '出生', examples: ['nature', 'native', 'nation'] },
  { root: 'nav', meaning: '船', examples: ['navigate', 'navy', 'naval'] },
  { root: 'neg', meaning: '否定', examples: ['negative', 'neglect', 'negate'] },
  { root: 'norm', meaning: '标准', examples: ['normal', 'enormous', 'abnormal'] },
  { root: 'not', meaning: '标记', examples: ['note', 'notice', 'annotate'] },
  { root: 'nov', meaning: '新', examples: ['novel', 'innovate', 'renovate'] },
  { root: 'oper', meaning: '工作', examples: ['operate', 'cooperate', 'operation'] },
  { root: 'opt', meaning: '选择', examples: ['option', 'adopt', 'optimal'] },
  { root: 'ord', meaning: '顺序', examples: ['order', 'ordinary', 'coordinate'] },
  { root: 'path', meaning: '感觉，疾病', examples: ['sympathy', 'pathology', 'empathy'] },
  { root: 'ped', meaning: '脚', examples: ['pedal', 'pedestrian', 'expedition'] },
  { root: 'pel/puls', meaning: '推', examples: ['propel', 'expel', 'compel'] },
  { root: 'pend/pens', meaning: '悬挂，支付', examples: ['depend', 'expense', 'suspend'] },
  { root: 'phon', meaning: '声音', examples: ['phone', 'phonetic', 'symphony'] },
  { root: 'photo', meaning: '光', examples: ['photograph', 'photosynthesis'] },
  { root: 'polis', meaning: '城市', examples: ['politics', 'metropolis', 'cosmopolitan'] },
  { root: 'pon/pos', meaning: '放置', examples: ['position', 'compose', 'opponent'] },
  { root: 'port', meaning: '携带', examples: ['transport', 'export', 'import'] },
  { root: 'prim', meaning: '第一', examples: ['primary', 'primitive', 'prime'] },
  { root: 'psych', meaning: '心理', examples: ['psychology', 'psychiatrist'] },
  { root: 'quer/quest/quir/quis', meaning: '寻求', examples: ['question', 'acquire', 'require'] },
  { root: 'rupt', meaning: '破', examples: ['interrupt', 'corrupt', 'erupt'] },
  { root: 'scrib/script', meaning: '写', examples: ['describe', 'prescribe', 'script'] },
  { root: 'sec/sequ', meaning: '跟随', examples: ['sequence', 'consequence', 'subsequent'] },
  { root: 'sens/sent', meaning: '感觉', examples: ['sense', 'sentiment', 'consent'] },
  { root: 'serv', meaning: '服务，保持', examples: ['service', 'preserve', 'observe'] },
  { root: 'sid/sess', meaning: '坐', examples: ['president', 'session', 'reside'] },
  { root: 'sign', meaning: '标记', examples: ['signal', 'signature', 'design'] },
  { root: 'simil/simul', meaning: '相似', examples: ['similar', 'simulate', 'simultaneous'] },
  { root: 'sol', meaning: '单独', examples: ['solo', 'isolate', 'desolate'] },
  { root: 'soph', meaning: '智慧', examples: ['philosophy', 'sophisticated'] },
  { root: 'spec/spect', meaning: '看', examples: ['spectacle', 'inspect', 'respect'] },
  { root: 'spir', meaning: '呼吸', examples: ['spirit', 'inspire', 'conspire'] },
  { root: 'sta/stat', meaning: '站立', examples: ['station', 'status', 'stable'] },
  { root: 'struct', meaning: '建造', examples: ['structure', 'construct', 'instruct'] },
  { root: 'tact/tang', meaning: '接触', examples: ['contact', 'tangible', 'intact'] },
  { root: 'tail', meaning: '切', examples: ['detail', 'retail', 'tailor'] },
  { root: 'tain/ten/tin', meaning: '持有', examples: ['contain', 'maintain', 'continue'] },
  { root: 'tect', meaning: '覆盖', examples: ['protect', 'detect', 'architect'] },
  { root: 'tele', meaning: '远', examples: ['telephone', 'television', 'telescope'] },
  { root: 'tempor', meaning: '时间', examples: ['temporary', 'contemporary', 'tempo'] },
  { root: 'tend/tens/tent', meaning: '伸展', examples: ['extend', 'intense', 'attention'] },
  { root: 'terr', meaning: '土地', examples: ['territory', 'terrain', 'terrace'] },
  { root: 'theo', meaning: '神', examples: ['theology', 'theory'] },
  { root: 'therm', meaning: '热', examples: ['thermometer', 'thermal', 'thermos'] },
  { root: 'tort', meaning: '扭', examples: ['torture', 'distort', 'contort'] },
  { root: 'tract', meaning: '拉', examples: ['attract', 'extract', 'contract'] },
  { root: 'trib', meaning: '给予', examples: ['contribute', 'distribute', 'tribute'] },
  { root: 'uni', meaning: '一', examples: ['uniform', 'universe', 'unique'] },
  { root: 'verb', meaning: '词语', examples: ['verbal', 'proverb', 'adverb'] },
  { root: 'ver/vert', meaning: '转', examples: ['convert', 'reverse', 'diverse'] },
  { root: 'vi/via', meaning: '路', examples: ['via', 'deviate', 'obvious'] },
  { root: 'vid/vis', meaning: '看', examples: ['video', 'visible', 'vision'] },
  { root: 'vit/viv', meaning: '生命', examples: ['vital', 'vivid', 'survive'] },
  { root: 'voc/vok', meaning: '声音，叫', examples: ['vocabulary', 'advocate', 'provoke'] },
  { root: 'volv/volut', meaning: '转', examples: ['evolve', 'revolution', 'involve'] },
]

// 常见前缀
const prefixes = [
  { prefix: 'un-', meaning: '不，非', examples: ['unhappy', 'unable', 'unfair', 'unknown'] },
  { prefix: 're-', meaning: '再，重新', examples: ['return', 'review', 'rebuild', 'rewrite'] },
  { prefix: 'dis-', meaning: '不，否定', examples: ['disagree', 'disappear', 'dislike', 'disable'] },
  { prefix: 'in-/im-/il-/ir-', meaning: '不，非', examples: ['incorrect', 'impossible', 'illegal', 'irregular'] },
  { prefix: 'mis-', meaning: '错误', examples: ['mistake', 'misunderstand', 'mislead'] },
  { prefix: 'pre-', meaning: '在...之前', examples: ['preview', 'predict', 'prepay', 'prewar'] },
  { prefix: 'post-', meaning: '在...之后', examples: ['postwar', 'postpone', 'postgraduate'] },
  { prefix: 'over-', meaning: '过度', examples: ['overcome', 'overflow', 'overlook', 'overwork'] },
  { prefix: 'under-', meaning: '不足', examples: ['understand', 'underground', 'underline'] },
  { prefix: 'inter-', meaning: '之间', examples: ['international', 'internet', 'interview'] },
  { prefix: 'super-', meaning: '超级', examples: ['supermarket', 'superman', 'supernatural'] },
  { prefix: 'sub-', meaning: '下面', examples: ['subway', 'submarine', 'subtitle'] },
  { prefix: 'trans-', meaning: '跨越', examples: ['transport', 'translate', 'transform'] },
  { prefix: 'auto-', meaning: '自动', examples: ['automatic', 'automobile', 'autobiography'] },
  { prefix: 'co-', meaning: '共同', examples: ['cooperate', 'coexist', 'coworker'] },
  { prefix: 'ex-', meaning: '前，出', examples: ['ex-president', 'export', 'exclude'] },
  { prefix: 'self-', meaning: '自我', examples: ['self-confidence', 'self-control', 'self-made'] },
  { prefix: 'multi-', meaning: '多', examples: ['multimedia', 'multinational', 'multiply'] },
]

// 常见后缀
const suffixes = [
  { suffix: '-tion/-sion', meaning: '名词：行为，状态', examples: ['education', 'decision', 'action', 'expression'] },
  { suffix: '-ment', meaning: '名词：行为，结果', examples: ['agreement', 'development', 'movement'] },
  { suffix: '-ness', meaning: '名词：性质，状态', examples: ['happiness', 'kindness', 'darkness'] },
  { suffix: '-ity', meaning: '名词：性质', examples: ['ability', 'reality', 'activity'] },
  { suffix: '-er/-or', meaning: '名词：做...的人', examples: ['teacher', 'worker', 'actor', 'director'] },
  { suffix: '-ist', meaning: '名词：...主义者', examples: ['scientist', 'artist', 'tourist'] },
  { suffix: '-ful', meaning: '形容词：充满', examples: ['beautiful', 'careful', 'helpful'] },
  { suffix: '-less', meaning: '形容词：没有', examples: ['careless', 'helpless', 'homeless'] },
  { suffix: '-able/-ible', meaning: '形容词：能够', examples: ['comfortable', 'possible', 'responsible'] },
  { suffix: '-ous', meaning: '形容词：具有', examples: ['dangerous', 'famous', 'nervous'] },
  { suffix: '-ive', meaning: '形容词：有...倾向', examples: ['active', 'creative', 'expensive'] },
  { suffix: '-al', meaning: '形容词：有关', examples: ['national', 'personal', 'natural'] },
  { suffix: '-ly', meaning: '副词：...地', examples: ['quickly', 'slowly', 'carefully'] },
  { suffix: '-fy/-ify', meaning: '动词：使成为', examples: ['simplify', 'beautify', 'classify'] },
  { suffix: '-ize', meaning: '动词：使...化', examples: ['organize', 'realize', 'modernize'] },
  { suffix: '-en', meaning: '动词：使变得', examples: ['widen', 'strengthen', 'darken'] },
]

// 同义词反义词
const synonymsAntonyms = [
  { word: 'happy', synonyms: ['glad', 'pleased', 'joyful', 'cheerful'], antonyms: ['sad', 'unhappy', 'miserable'] },
  { word: 'big', synonyms: ['large', 'huge', 'enormous', 'vast'], antonyms: ['small', 'tiny', 'little'] },
  { word: 'good', synonyms: ['excellent', 'fine', 'great', 'wonderful'], antonyms: ['bad', 'poor', 'terrible'] },
  { word: 'fast', synonyms: ['quick', 'rapid', 'swift', 'speedy'], antonyms: ['slow', 'sluggish'] },
  { word: 'beautiful', synonyms: ['pretty', 'lovely', 'gorgeous', 'attractive'], antonyms: ['ugly', 'unattractive'] },
  { word: 'important', synonyms: ['significant', 'essential', 'vital', 'crucial'], antonyms: ['unimportant', 'trivial'] },
  { word: 'difficult', synonyms: ['hard', 'challenging', 'tough', 'complex'], antonyms: ['easy', 'simple'] },
  { word: 'angry', synonyms: ['mad', 'furious', 'annoyed', 'irritated'], antonyms: ['calm', 'peaceful', 'pleased'] },
  { word: 'afraid', synonyms: ['scared', 'frightened', 'terrified', 'fearful'], antonyms: ['brave', 'bold', 'fearless'] },
  { word: 'begin', synonyms: ['start', 'commence', 'initiate'], antonyms: ['end', 'finish', 'conclude'] },
  { word: 'buy', synonyms: ['purchase', 'acquire', 'obtain'], antonyms: ['sell', 'vend'] },
  { word: 'create', synonyms: ['make', 'produce', 'generate', 'develop'], antonyms: ['destroy', 'demolish', 'ruin'] },
  { word: 'rich', synonyms: ['wealthy', 'affluent', 'prosperous'], antonyms: ['poor', 'impoverished'] },
  { word: 'strong', synonyms: ['powerful', 'mighty', 'robust'], antonyms: ['weak', 'feeble', 'fragile'] },
  { word: 'old', synonyms: ['ancient', 'elderly', 'aged', 'senior'], antonyms: ['young', 'new', 'fresh'] },
  { word: 'quiet', synonyms: ['silent', 'peaceful', 'calm', 'still'], antonyms: ['noisy', 'loud'] },
]

export default function ToolsPage() {
  const [tab, setTab] = useState<Tab>('irregular')
  const [verbFilter, setVerbFilter] = useState('')
  const [selectedGrammar, setSelectedGrammar] = useState<number | null>(null)
  const [selectedRoot, setSelectedRoot] = useState<number | null>(null)
  const [vocabTab, setVocabTab] = useState<'roots' | 'prefixes' | 'suffixes' | 'synonyms'>('roots')

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
    { key: 'grammar', label: '语法总结', icon: <Lightbulb size={14} /> },
    { key: 'phrases', label: '常用短语', icon: <BookOpen size={14} /> },
    { key: 'vocabulary', label: '词汇构建', icon: <Languages size={14} /> },
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
      <div className="flex gap-1 bg-white rounded-lg p-1 shadow-sm border border-gray-100 w-fit flex-wrap">
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
            <div className="flex items-center justify-between">
              <input
                type="text"
                value={verbFilter}
                onChange={(e) => setVerbFilter(e.target.value)}
                placeholder="输入字母筛选动词..."
                className="w-full max-w-xs px-3 py-2 bg-gray-50 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
              <span className="text-sm text-gray-500">共 {filteredVerbs.length} 个动词</span>
            </div>
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

      {/* Grammar */}
      {tab === 'grammar' && (
        <div className="space-y-4">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
            {grammarSections.map((g, i) => (
              <button
                key={i}
                onClick={() => setSelectedGrammar(selectedGrammar === i ? null : i)}
                className={`p-3 rounded-lg border text-left transition-all cursor-pointer ${
                  selectedGrammar === i
                    ? 'bg-indigo-50 border-indigo-300 shadow-sm'
                    : 'bg-white border-gray-100 hover:border-indigo-200'
                }`}
              >
                <h3 className="text-sm font-bold text-gray-800 m-0">{g.title}</h3>
              </button>
            ))}
          </div>

          {selectedGrammar !== null && (
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
              <h2 className="text-lg font-bold text-indigo-700 mb-4 m-0">{grammarSections[selectedGrammar].title}</h2>

              <div className="space-y-4">
                <div>
                  <h3 className="text-sm font-semibold text-gray-700 mb-1 m-0">用法</h3>
                  <p className="text-sm text-gray-600 m-0">{grammarSections[selectedGrammar].usage}</p>
                </div>

                <div>
                  <h3 className="text-sm font-semibold text-gray-700 mb-1 m-0">结构</h3>
                  <p className="text-sm text-gray-600 m-0 font-mono bg-gray-50 p-2 rounded">{grammarSections[selectedGrammar].structure}</p>
                </div>

                <div>
                  <h3 className="text-sm font-semibold text-gray-700 mb-1 m-0">例句</h3>
                  <div className="space-y-2">
                    {grammarSections[selectedGrammar].examples.map((ex, j) => (
                      <div key={j} className="flex items-start gap-2">
                        <button
                          onClick={() => speakText(ex.en)}
                          className="text-gray-400 hover:text-indigo-600 cursor-pointer mt-0.5"
                        >
                          <Volume2 size={14} />
                        </button>
                        <div>
                          <p className="text-sm text-gray-800 m-0">{ex.en}</p>
                          <p className="text-xs text-gray-500 m-0">{ex.cn}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="text-sm font-semibold text-gray-700 mb-1 m-0">关键词</h3>
                  <div className="flex flex-wrap gap-2">
                    {grammarSections[selectedGrammar].keywords.split(', ').map((kw, j) => (
                      <span key={j} className="px-2 py-1 bg-indigo-50 text-indigo-700 rounded text-xs">
                        {kw}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}
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

      {/* Vocabulary Building */}
      {tab === 'vocabulary' && (
        <div className="space-y-4">
          {/* Sub-tabs */}
          <div className="flex gap-1 bg-white rounded-lg p-1 shadow-sm border border-gray-100 w-fit">
            {[
              { key: 'roots' as const, label: '词根' },
              { key: 'prefixes' as const, label: '前缀' },
              { key: 'suffixes' as const, label: '后缀' },
              { key: 'synonyms' as const, label: '同义词/反义词' },
            ].map(({ key, label }) => (
              <button
                key={key}
                onClick={() => setVocabTab(key)}
                className={`px-4 py-2 rounded-md text-sm font-medium transition-colors cursor-pointer ${
                  vocabTab === key ? 'bg-purple-600 text-white' : 'text-gray-600 hover:bg-gray-100'
                }`}
              >
                {label}
              </button>
            ))}
          </div>

          {/* Word Roots */}
          {vocabTab === 'roots' && (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {wordRoots.map((r, i) => (
                <div
                  key={i}
                  className={`bg-white rounded-lg border p-4 cursor-pointer transition-all ${
                    selectedRoot === i
                      ? 'border-purple-300 shadow-md'
                      : 'border-gray-100 hover:border-purple-200 hover:shadow-sm'
                  }`}
                  onClick={() => setSelectedRoot(selectedRoot === i ? null : i)}
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-lg font-bold text-purple-600">{r.root}</span>
                  </div>
                  <p className="text-sm text-gray-600 m-0">{r.meaning}</p>
                  {selectedRoot === i && (
                    <div className="mt-3 pt-3 border-t border-gray-100">
                      <p className="text-xs text-gray-500 mb-1 m-0">例词：</p>
                      <div className="flex flex-wrap gap-1">
                        {r.examples.map((ex, j) => (
                          <button
                            key={j}
                            onClick={(e) => { e.stopPropagation(); speakText(ex) }}
                            className="px-2 py-1 bg-purple-50 text-purple-700 rounded text-xs hover:bg-purple-100 cursor-pointer"
                          >
                            {ex}
                          </button>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}

          {/* Prefixes */}
          {vocabTab === 'prefixes' && (
            <div className="space-y-3">
              {prefixes.map((p, i) => (
                <div key={i} className="bg-white rounded-lg border border-gray-100 p-4 hover:border-purple-200 transition-colors">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-3">
                      <span className="text-lg font-bold text-purple-600">{p.prefix}</span>
                      <span className="text-sm text-gray-600">{p.meaning}</span>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {p.examples.map((ex, j) => (
                      <button
                        key={j}
                        onClick={() => speakText(ex)}
                        className="px-2 py-1 bg-gray-100 text-gray-700 rounded text-sm hover:bg-purple-100 hover:text-purple-700 cursor-pointer transition-colors"
                      >
                        {ex}
                      </button>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Suffixes */}
          {vocabTab === 'suffixes' && (
            <div className="space-y-3">
              {suffixes.map((s, i) => (
                <div key={i} className="bg-white rounded-lg border border-gray-100 p-4 hover:border-purple-200 transition-colors">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-3">
                      <span className="text-lg font-bold text-purple-600">{s.suffix}</span>
                      <span className="text-sm text-gray-600">{s.meaning}</span>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {s.examples.map((ex, j) => (
                      <button
                        key={j}
                        onClick={() => speakText(ex)}
                        className="px-2 py-1 bg-gray-100 text-gray-700 rounded text-sm hover:bg-purple-100 hover:text-purple-700 cursor-pointer transition-colors"
                      >
                        {ex}
                      </button>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Synonyms & Antonyms */}
          {vocabTab === 'synonyms' && (
            <div className="space-y-3">
              {synonymsAntonyms.map((item, i) => (
                <div key={i} className="bg-white rounded-lg border border-gray-100 p-4 hover:border-purple-200 transition-colors">
                  <div className="flex items-center gap-3 mb-3">
                    <button
                      onClick={() => speakText(item.word)}
                      className="text-lg font-bold text-purple-600 hover:text-purple-800 cursor-pointer"
                    >
                      {item.word}
                    </button>
                    <Volume2 size={16} className="text-gray-400" />
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <p className="text-xs text-gray-500 mb-1 m-0">同义词：</p>
                      <div className="flex flex-wrap gap-1">
                        {item.synonyms.map((syn, j) => (
                          <button
                            key={j}
                            onClick={() => speakText(syn)}
                            className="px-2 py-1 bg-green-50 text-green-700 rounded text-xs hover:bg-green-100 cursor-pointer"
                          >
                            {syn}
                          </button>
                        ))}
                      </div>
                    </div>
                    <div>
                      <p className="text-xs text-gray-500 mb-1 m-0">反义词：</p>
                      <div className="flex flex-wrap gap-1">
                        {item.antonyms.map((ant, j) => (
                          <button
                            key={j}
                            onClick={() => speakText(ant)}
                            className="px-2 py-1 bg-red-50 text-red-700 rounded text-xs hover:bg-red-100 cursor-pointer"
                          >
                            {ant}
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  )
}
