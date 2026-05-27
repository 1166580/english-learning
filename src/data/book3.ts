import type { Lesson } from '../types'

const book3: Lesson[] = [
  {
    id: 1,
    title: 'A puma at large',
    titleCn: '逃遁的美洲狮',
    text: [
      'Pumas are large, cat-like animals which are found in America. When reports came into London Zoo that a wild puma had been spotted forty-five miles south of London, they were not taken seriously.',
      'However, as the evidence began to accumulate, experts from the Zoo felt obliged to investigate, for the descriptions given by people who claimed to have seen the puma were extraordinarily similar.',
      'The hunt for the puma began in a small village where a woman picking blackberries saw "a large cat" only five yards away from her. It immediately ran away when she saw it, and experts confirmed that a puma will not attack a human being unless it is cornered.',
      'The search proved difficult, for the puma was often observed at one place in the morning and at another place twenty miles away in the evening.'
    ],
    textCn: [
      '美洲狮是一种在美洲发现的大型猫科动物。当伦敦动物园收到报告说在伦敦以南45英里处发现了一只野生美洲狮时，这些报告并没有被当回事。',
      '然而，随着证据的积累，动物园的专家们觉得有必要进行调查，因为声称见过这只美洲狮的人给出的描述出奇地相似。',
      '对美洲狮的搜索从一个小村庄开始，那里一位正在摘黑莓的妇女看见了一只"大猫"，离她只有五码远。它一见到她就跑开了，专家们确认美洲狮除非被逼到绝境，否则不会攻击人类。',
      '搜索工作证明是困难的，因为这只美洲狮常常早上在一个地方被发现，晚上却在二十英里之外的另一个地方。'
    ],
    vocabulary: [
      { word: 'puma', phonetic: '/ˈpjuːmə/', meaning: '美洲狮' },
      { word: 'spot', phonetic: '/spɒt/', meaning: '发现' },
      { word: 'evidence', phonetic: '/ˈevɪdəns/', meaning: '证据' },
      { word: 'accumulate', phonetic: '/əˈkjuːmjəleɪt/', meaning: '积累' },
      { word: 'oblige', phonetic: '/əˈblaɪdʒ/', meaning: '迫使' },
      { word: 'investigate', phonetic: '/ɪnˈvestɪɡeɪt/', meaning: '调查' },
      { word: 'extraordinarily', phonetic: '/ɪkˈstrɔːdnrɪli/', meaning: '特别地' },
      { word: 'corner', phonetic: '/ˈkɔːnə/', meaning: '使走投无路' }
    ],
    notes: [
      '"at large" 在逃的、未被捕获的。',
      '"feel obliged to do" 感到有义务做某事。',
      '"unless it is cornered" — unless 引导条件从句。'
    ],
    tags: ['定语从句', '关系代词'],
    difficulty: 3,
    summary: '伦敦动物园的专家们根据多方报告，在伦敦南部搜寻一只逃逸的美洲狮，但始终未能将其捕获。',
    summaryEn: 'Experts from London Zoo searched for a wild puma spotted south of London but were unable to capture it despite accumulating evidence.',
    sentenceExplanations: [
      { sentence: 'Pumas are large, cat-like animals which are found in America.', translation: '美洲狮是在美洲发现的大型猫科动物。', explanation: 'which引导定语从句修饰animals，被动语态are found表示"被发现于"。cat-like是复合形容词，意为"像猫一样的"。' },
      { sentence: 'The descriptions given by people who claimed to have seen the puma were extraordinarily similar.', translation: '声称见过美洲狮的人给出的描述出奇地相似。', explanation: 'given by people是过去分词短语作后置定语修饰descriptions。who claimed to have seen是定语从句修饰people，to have seen是不定式的完成式，表示"声称之前见过"。' },
      { sentence: 'It immediately ran away when she saw it, and experts confirmed that a puma will not attack a human being unless it is cornered.', translation: '它一见到她就跑开了，专家确认美洲狮除非被逼到绝境，否则不会攻击人类。', explanation: 'unless引导条件状语从句，相当于if...not。is cornered是被动语态，corner作动词意为"使走投无路"。' },
      { sentence: 'The search proved difficult, for the puma was often observed at one place in the morning and at another place twenty miles away in the evening.', translation: '搜索工作证明是困难的，因为美洲狮常常早上在一个地方被发现，晚上却在二十英里之外的另一个地方。', explanation: 'for引导原因状语从句。was observed是被动语态。twenty miles away是后置定语修饰place。' }
    ],
    grammarSections: [
      { title: '关系代词引导的定语从句', content: '定语从句用来修饰名词或代词，由关系代词who/which/that等引导。who修饰人，which修饰物，that两者皆可。关系代词在从句中充当主语、宾语等成分。', examples: [
        { en: 'The man who called you is my brother.', cn: '给你打电话的那个人是我哥哥。' },
        { en: 'The book which I bought yesterday is very interesting.', cn: '我昨天买的那本书很有趣。' },
        { en: 'She is the teacher that everyone likes.', cn: '她是大家都喜欢的那位老师。' },
        { en: 'The house which stands on the hill is very old.', cn: '坐落在山上的那座房子很旧。' }
      ] },
      { title: '被动语态的使用', content: '被动语态由"be + 过去分词"构成，强调动作的承受者而非执行者。在新闻报道和客观描述中经常使用，使表达更加正式。', examples: [
        { en: 'The bridge was built in 1990.', cn: '这座桥建于1990年。' },
        { en: 'The letter was written by my mother.', cn: '这封信是我母亲写的。' },
        { en: 'English is spoken all over the world.', cn: '英语在全世界通用。' },
        { en: 'The thief was caught by the police.', cn: '小偷被警察抓住了。' }
      ] }
    ],
    patternDrills: [
      { pattern: 'sb/sth + be found + 地点状语', substitutions: [
        { en: 'Gold is found in South Africa.', cn: '黄金产于南非。' },
        { en: 'This plant is found in tropical regions.', cn: '这种植物生长在热带地区。' },
        { en: 'Ancient ruins were found beneath the city.', cn: '古城遗迹在城市地下被发现。' },
        { en: 'The missing child was found near the river.', cn: '失踪的孩子在河边被找到了。' }
      ] },
      { pattern: 'sb feel obliged to do sth', substitutions: [
        { en: 'I felt obliged to help them.', cn: '我觉得有义务帮助他们。' },
        { en: 'She felt obliged to tell the truth.', cn: '她觉得有义务说出真相。' },
        { en: 'He felt obliged to attend the meeting.', cn: '他觉得不得不参加会议。' },
        { en: 'We felt obliged to accept the invitation.', cn: '我们觉得不好拒绝这个邀请。' }
      ] }
    ],
    exercises: [
      { type: 'choice', question: 'Experts from the Zoo felt obliged to investigate because ____.', options: ['they wanted to catch the puma', 'the descriptions were extraordinarily similar', 'a woman had been attacked', 'the puma was very dangerous'], answer: 'the descriptions were extraordinarily similar', explanation: '文章提到专家们觉得有必要调查，是因为声称见过美洲狮的人给出的描述出奇地相似。' },
      { type: 'fill', question: 'A puma will not attack a human being unless it is ____.', answer: 'cornered', explanation: 'corner作动词意为"使走投无路"，is cornered是被动语态，表示"被逼到绝境"。' },
      { type: 'judge', question: 'The puma was finally caught by the experts from London Zoo.', answer: 'false', explanation: '文章最后一句说明搜索困难，美洲狮始终未被捕获，题目中说"最终被抓住了"与原文不符。' },
      { type: 'choice', question: 'Which word best describes the evidence for the puma\'s existence?', options: ['limited', 'accumulating', 'unreliable', 'scientific'], answer: 'accumulating', explanation: '文中提到"as the evidence began to accumulate"，表示证据在不断积累，因此accumulating最准确。' }
    ],
  },
  {
    id: 2,
    title: 'Thirteen equals one',
    titleCn: '十三等于一',
    text: [
      'Our vicar is always raising money for one cause or another, but he has never managed to get enough money to have the church clock repaired.',
      'The big clock which used to strike the hours day and night was damaged many years ago and has been silent ever since.',
      'One night, however, our vicar woke up with a start: the clock was striking the hours! Looking at his watch, he saw that it was one o\'clock, but the bell struck thirteen times before it stopped.',
      'Armed with a torch, the vicar went up into the clock tower to see what was going on. In the torchlight, he caught sight of a figure whom he immediately recognised as Bill Wilkins, our local grocer.'
    ],
    textCn: [
      '我们的牧师总是为各种事由筹款，但他从未筹到足够的钱来修缮教堂的钟。',
      '这座过去日夜报时的大钟在很多年前就坏了，从此一直沉默无声。',
      '然而一天夜里，我们的牧师突然惊醒：大钟正在报时！他看了看手表，是一点钟，但大钟敲了十三下才停下来。',
      '牧师拿着手电筒上了钟楼，想看看怎么回事。在手电光中，他看到一个人影，立刻认出是比尔·威尔金斯，我们当地的杂货商。'
    ],
    vocabulary: [
      { word: 'vicar', phonetic: '/ˈvɪkə/', meaning: '牧师' },
      { word: 'raise', phonetic: '/reɪz/', meaning: '筹集' },
      { word: 'cause', phonetic: '/kɔːz/', meaning: '事业' },
      { word: 'strike', phonetic: '/straɪk/', meaning: '敲，报时' },
      { word: 'damage', phonetic: '/ˈdæmɪdʒ/', meaning: '损坏' },
      { word: 'silent', phonetic: '/ˈsaɪlənt/', meaning: '沉默的' },
      { word: 'torch', phonetic: '/tɔːtʃ/', meaning: '手电筒' },
      { word: 'grocer', phonetic: '/ˈɡrəʊsə/', meaning: '杂货商' }
    ],
    notes: [
      '现在进行时与 always 连用表反复动作。',
      '"have sth done" 结构。',
      '"armed with" 过去分词短语作状语。'
    ],
    tags: ['现在完成时', '被动语态'],
    difficulty: 3,
    summary: '牧师发现教堂大钟在夜里敲了十三下，原来是当地杂货商比尔在偷偷修钟。',
    summaryEn: 'The vicar discovered that the church clock struck thirteen at night because the local grocer Bill was secretly repairing it.',
    sentenceExplanations: [
      { sentence: 'Our vicar is always raising money for one cause or another, but he has never managed to get enough money to have the church clock repaired.', translation: '我们的牧师总是为各种事由筹款，但他从未筹到足够的钱来修缮教堂的钟。', explanation: 'is always doing表示反复发生的动作，带有抱怨或赞赏的感情色彩。have sth done表示"让某事被（别人）做"，即牧师不是自己修钟，而是请人修。' },
      { sentence: 'The big clock which used to strike the hours day and night was damaged many years ago and has been silent ever since.', translation: '这座过去日夜报时的大钟在很多年前就坏了，从此一直沉默无声。', explanation: 'used to do表示"过去常常做（现在不做了）"。has been silent是现在完成时，ever since表示"从那以后"。' },
      { sentence: 'Armed with a torch, the vicar went up into the clock tower to see what was going on.', translation: '牧师拿着手电筒上了钟楼，想看看怎么回事。', explanation: 'Armed with是过去分词短语作状语，表示伴随状态。what was going on是宾语从句，意为"发生了什么事"。' },
      { sentence: 'In the torchlight, he caught sight of a figure whom he immediately recognised as Bill Wilkins, our local grocer.', translation: '在手电光中，他看到一个人影，立刻认出是比尔·威尔金斯，我们当地的杂货商。', explanation: 'catch sight of是固定搭配，意为"看见"。whom引导定语从句修饰figure，whom在从句中作宾语。recognise...as意为"认出……是"。' }
    ],
    grammarSections: [
      { title: 'have sth done 结构', content: '"have + 宾语 + 过去分词"结构表示"让某事被别人做"或"遭遇某事（不好的事）"。宾语和过去分词之间是被动关系，强调动作不是主语亲自完成的。', examples: [
        { en: 'I had my hair cut yesterday.', cn: '我昨天去理了发。（别人理的）' },
        { en: 'She had her car repaired last week.', cn: '她上周让人修了车。' },
        { en: 'He had his wallet stolen on the bus.', cn: '他在公交车上钱包被偷了。' },
        { en: 'We must have the house painted before winter.', cn: '我们必须在冬天前请人把房子粉刷一下。' }
      ] },
      { title: 'used to 与 would 的区别', content: 'used to do表示"过去常常做某事（现在已不做了）"，可以用于状态动词和动作动词。would只表示过去的习惯性动作，不能用于状态动词，且带有回忆的语气。', examples: [
        { en: 'I used to play football every Saturday.', cn: '我过去每个星期六都踢足球。' },
        { en: 'She used to be very shy.', cn: '她过去很害羞。（状态，不能用would）' },
        { en: 'He would sit for hours reading books.', cn: '他过去常常一坐就是几个小时看书。' },
        { en: 'They used to live in London.', cn: '他们过去住在伦敦。（状态，不能用would）' }
      ] }
    ],
    patternDrills: [
      { pattern: 'sb/sth used to do sth', substitutions: [
        { en: 'There used to be a cinema here.', cn: '这里过去有一家电影院。' },
        { en: 'I used to get up early.', cn: '我过去常常早起。' },
        { en: 'She used to smoke heavily.', cn: '她过去抽烟很凶。' },
        { en: 'They used to go fishing on Sundays.', cn: '他们过去常常在周日去钓鱼。' }
      ] },
      { pattern: 'have sth done', substitutions: [
        { en: 'I need to have my watch repaired.', cn: '我需要让人修一下手表。' },
        { en: 'She had her photo taken at the studio.', cn: '她在照相馆拍了照片。' },
        { en: 'He had his suit cleaned for the interview.', cn: '他为面试让人干洗了西装。' },
        { en: 'We should have the roof fixed before the rainy season.', cn: '我们应该在雨季前把屋顶修好。' }
      ] }
    ],
    exercises: [
      { type: 'choice', question: 'The clock struck thirteen because ____.', options: ['it was broken', 'someone was repairing it', 'it was midnight', 'the vicar set it wrong'], answer: 'someone was repairing it', explanation: '杂货商比尔在偷偷修钟，修的过程中不小心让钟多敲了一下（敲了十三下）。' },
      { type: 'fill', question: 'The big clock ____ to strike the hours day and night.', answer: 'used', explanation: 'used to do表示"过去常常做（现在已不做了）"，大钟过去常常日夜报时，但后来坏了。' },
      { type: 'judge', question: 'The vicar was angry when he found Bill in the clock tower.', answer: 'false', explanation: '文章没有提到牧师生气。牧师实际上很高兴钟被修好了，因为他一直在筹钱修钟。' },
      { type: 'choice', question: 'What does "is always raising money" suggest about the vicar?', options: ['He is very wealthy.', 'He repeatedly tries to raise funds.', 'He dislikes money.', 'He raises money only once.'], answer: 'He repeatedly tries to raise funds.', explanation: '现在进行时与always连用表示反复发生的动作，暗示牧师经常在筹款。' }
    ],
  },
  {
    id: 3,
    title: 'An unknown goddess',
    titleCn: '无名女神',
    text: [
      'Some time ago, an interesting discovery was made by archaeologists on the Aegean island of Kea.',
      'An American team explored a temple which stands in an ancient city on the promontory of Ayia Irini. The city at one time must have been prosperous, for it enjoyed a high level of civilization.',
      'Houses — often three storeys high — were built of stone. They had large rooms with beautifully decorated walls. The city was even equipped with a drainage system, for a great many clay pipes were found beneath the narrow streets.',
      'The temple which the archaeologists explored was used as a place of worship from the fifteenth century B.C. until Roman times.'
    ],
    textCn: [
      '不久前，考古学家在爱琴海的基亚岛上有一个有趣的发现。',
      '一支美国队伍在阿伊亚·伊里尼海角的一座古城里发掘了一座神庙。这座城市一度肯定很繁荣，因为它享有高度的文明。',
      '房屋——常常有三层楼高——是用石头建造的。房间很大，墙壁装饰精美。城里甚至配备了排水系统，因为在狭窄的街道下面发现了许多陶土管道。',
      '考古学家发掘的这座神庙从公元前15世纪直到罗马时代一直被用作祭祀场所。'
    ],
    vocabulary: [
      { word: 'archaeologist', phonetic: '/ˌɑːkiˈɒlədʒɪst/', meaning: '考古学家' },
      { word: 'temple', phonetic: '/ˈtempl/', meaning: '神庙' },
      { word: 'ancient', phonetic: '/ˈeɪnʃənt/', meaning: '古代的' },
      { word: 'prosperous', phonetic: '/ˈprɒspərəs/', meaning: '繁荣的' },
      { word: 'civilization', phonetic: '/ˌsɪvɪlaɪˈzeɪʃn/', meaning: '文明' },
      { word: 'decorate', phonetic: '/ˈdekəreɪt/', meaning: '装饰' },
      { word: 'drainage', phonetic: '/ˈdreɪnɪdʒ/', meaning: '排水' },
      { word: 'worship', phonetic: '/ˈwɜːʃɪp/', meaning: '崇拜' }
    ],
    notes: [
      '"must have been" — 对过去的肯定推测。',
      '"be equipped with" 配备有...。',
      'B.C. = 公元前。'
    ],
    tags: ['一般过去时', '叙述文'],
    difficulty: 3,
    summary: '考古学家在爱琴海的基亚岛上发掘了一座古城和神庙，发现这座城市曾经非常繁荣。',
    summaryEn: 'Archaeologists excavated an ancient city and temple on the Aegean island of Kea, discovering the city was once highly prosperous.',
    sentenceExplanations: [
      { sentence: 'Some time ago, an interesting discovery was made by archaeologists on the Aegean island of Kea.', translation: '不久前，考古学家在爱琴海的基亚岛上有了一个有趣的发现。', explanation: '这是被动语态的典型用法，强调"发现"这一结果而非"考古学家"这一执行者。by引出动作的执行者。' },
      { sentence: 'The city at one time must have been prosperous, for it enjoyed a high level of civilization.', translation: '这座城市一度肯定很繁荣，因为它享有高度的文明。', explanation: 'must have been是对过去的肯定推测，意为"一定是……的"。for引导原因状语从句，比because更正式。' },
      { sentence: 'Houses — often three storeys high — were built of stone.', translation: '房屋——常常有三层楼高——是用石头建造的。', explanation: '破折号之间的部分是插入语，补充说明房屋的高度。be built of意为"由……建造"。' },
      { sentence: 'The city was even equipped with a drainage system, for a great many clay pipes were found beneath the narrow streets.', translation: '城里甚至配备了排水系统，因为在狭窄的街道下面发现了许多陶土管道。', explanation: 'be equipped with意为"配备有"。a great many意为"大量的"，后接可数名词复数。beneath是较正式的under。' }
    ],
    grammarSections: [
      { title: 'must have been — 对过去的肯定推测', content: '"must have + 过去分词"表示对过去事实的肯定推测，意为"一定是……的"。只用于肯定句，否定推测用"can\'t have + 过去分词"。这种结构在考古发现、历史描述中很常见。', examples: [
        { en: 'He must have been very tired after the long journey.', cn: '长途旅行后他一定很累。' },
        { en: 'She must have forgotten about the meeting.', cn: '她一定是忘了开会的事。' },
        { en: 'The temple must have been very beautiful when it was new.', cn: '这座神庙在新建时一定非常漂亮。' },
        { en: 'They can\'t have finished the work so quickly.', cn: '他们不可能这么快就完成了工作。' }
      ] },
      { title: '被动语态在考古描述中的应用', content: '在考古和历史叙述中，被动语态使用非常频繁，因为重点是"发现了什么"而非"谁发现的"。常见结构有：be found, be discovered, be built, be used as等。', examples: [
        { en: 'The tomb was discovered in 1922.', cn: '这座墓葬发现于1922年。' },
        { en: 'The pottery was used for storing grain.', cn: '这些陶器被用来储存粮食。' },
        { en: 'The ruins were excavated by a team of French archaeologists.', cn: '这些遗迹由一支法国考古队发掘。' },
        { en: 'Many treasures were found inside the pyramid.', cn: '金字塔内发现了许多珍宝。' }
      ] }
    ],
    patternDrills: [
      { pattern: 'sb/sth + must have been + 形容词', substitutions: [
        { en: 'The weather must have been terrible yesterday.', cn: '昨天的天气一定很糟糕。' },
        { en: 'She must have been very surprised.', cn: '她一定非常惊讶。' },
        { en: 'The journey must have been exhausting.', cn: '这段旅程一定令人筋疲力尽。' },
        { en: 'Life in ancient times must have been difficult.', cn: '古代的生活一定很艰苦。' }
      ] },
      { pattern: 'sth + be equipped with + 名词', substitutions: [
        { en: 'The laboratory is equipped with modern instruments.', cn: '实验室配备了现代化仪器。' },
        { en: 'The hotel is equipped with a swimming pool.', cn: '这家酒店配有游泳池。' },
        { en: 'The car is equipped with air conditioning.', cn: '这辆车装有空调。' },
        { en: 'The school is equipped with a large library.', cn: '学校配有一个大型图书馆。' }
      ] }
    ],
    exercises: [
      { type: 'choice', question: 'Why did the experts believe the city was prosperous?', options: ['It was very large.', 'It enjoyed a high level of civilization.', 'It had many temples.', 'It was near the sea.'], answer: 'It enjoyed a high level of civilization.', explanation: '文章明确指出这座城市"享有高度的文明"，这是专家认为它繁荣的依据。' },
      { type: 'fill', question: 'The city ____ one time must have been prosperous.', answer: 'at', explanation: 'at one time是固定搭配，意为"一度、曾经"。' },
      { type: 'judge', question: 'The temple was used as a place of worship from Roman times until the fifteenth century B.C.', answer: 'false', explanation: '原文说"from the fifteenth century B.C. until Roman times"，即从公元前15世纪到罗马时代，题目把时间顺序颠倒了。' },
      { type: 'choice', question: 'What evidence shows the city had a drainage system?', options: ['Stone houses were found.', 'Beautiful walls were decorated.', 'A great many clay pipes were found beneath the streets.', 'The temple had a water supply.'], answer: 'A great many clay pipes were found beneath the streets.', explanation: '文章提到在狭窄的街道下面发现了许多陶土管道，这证明城市有排水系统。' }
    ],
  },
  {
    id: 4,
    title: 'The double life of Alfred Bloggs',
    titleCn: '阿尔弗雷德的双重生活',
    text: [
      'These days, people who do manual work often receive far more money than people who work in offices. People who work in offices are frequently referred to as "white-collar workers" for the simple reason that they usually wear a collar and tie to go to work.',
      'Such is human nature, that a great many people are often willing to sacrifice higher pay for the privilege of becoming white-collar workers. This can give rise to curious situations, as it did in the case of Alfred Bloggs, who worked as a dustman for the Ellesmere Corporation.',
      'When he got married, Alf was too embarrassed to say anything to his wife about his job. He simply told her that he worked for the Corporation. Every morning, he left home dressed in a smart black suit.',
      'Alf did this for over two years and his fellow dustmen kept his secret. Alf\'s wife has never discovered that she married a dustman and she never will, for Alf has just found another job.'
    ],
    textCn: [
      '如今，从事体力劳动的人往往比坐办公室的人挣得多得多。坐办公室的人常被称为"白领工作者"，原因很简单，因为他们通常穿西装打领带去上班。',
      '人性如此，很多人都愿意为了成为白领工作者的殊荣而牺牲更高的收入。这可能导致稀奇的情况，艾尔斯米尔公司清洁工阿尔弗雷德·布洛格斯的情况就是如此。',
      '结婚时，阿尔弗雷德羞愧得不敢跟他妻子说他的工作。他只告诉她他在公司上班。每天早上，他穿着漂亮的黑色西服离开家。',
      '阿尔弗雷德这样做已经两年多了，他的清洁工同伴们替他保密。阿尔弗雷德的妻子从未发现自己嫁了个清洁工，而且她永远不会知道了，因为阿尔弗雷德刚找到了另一份工作。'
    ],
    vocabulary: [
      { word: 'manual', phonetic: '/ˈmænjuəl/', meaning: '体力的' },
      { word: 'sacrifice', phonetic: '/ˈsækrɪfaɪs/', meaning: '牺牲' },
      { word: 'privilege', phonetic: '/ˈprɪvɪlɪdʒ/', meaning: '特权' },
      { word: 'embarrassed', phonetic: '/ɪmˈbærəst/', meaning: '尴尬的' },
      { word: 'dustman', phonetic: '/ˈdʌstmən/', meaning: '清洁工' },
      { word: 'fellow', phonetic: '/ˈfeləʊ/', meaning: '同伴' }
    ],
    notes: [
      '"white-collar" 白领 vs "blue-collar" 蓝领。',
      '"Such is human nature, that..." 倒装结构。',
      '"too...to..." 太...而不能...。'
    ],
    tags: ['定语从句', '关系副词'],
    difficulty: 4,
    summary: '清洁工阿尔弗雷德为了面子，每天穿西装出门假装是白领，瞒了妻子两年多。',
    summaryEn: 'Dustman Alfred Bloggs dressed in a suit every day to pretend he was a white-collar worker, keeping the secret from his wife for over two years.',
    sentenceExplanations: [
      { sentence: 'People who work in offices are frequently referred to as "white-collar workers" for the simple reason that they usually wear a collar and tie to go to work.', translation: '坐办公室的人常被称为"白领工作者"，原因很简单，因为他们通常穿西装打领带去上班。', explanation: 'be referred to as意为"被称为"。for the simple reason that引导原因状语从句，that引导同位语从句解释reason的内容。' },
      { sentence: 'Such is human nature, that a great many people are often willing to sacrifice higher pay for the privilege of becoming white-collar workers.', translation: '人性如此，很多人都愿意为了成为白领工作者的殊荣而牺牲更高的收入。', explanation: 'Such is human nature是倒装句，正常语序为Human nature is such。that引导结果状语从句。be willing to do意为"愿意做"。sacrifice...for意为"为……而牺牲"。' },
      { sentence: 'When he got married, Alf was too embarrassed to say anything to his wife about his job.', translation: '结婚时，阿尔弗雷德羞愧得不敢跟他妻子说他的工作。', explanation: 'too...to...结构表示"太……而不能……"。embarrassed意为"尴尬的、难为情的"。' },
      { sentence: 'Alf\'s wife has never discovered that she married a dustman and she never will, for Alf has just found another job.', translation: '阿尔弗雷德的妻子从未发现自己嫁了个清洁工，而且她永远不会知道了，因为阿尔弗雷德刚找到了另一份工作。', explanation: 'has never discovered是现在完成时，表示到目前为止。she never will是省略句，完整形式为she never will discover。for引导原因状语从句。' }
    ],
    grammarSections: [
      { title: 'too...to... 结构', content: '"too + 形容词/副词 + to do"表示"太……而不能……"，含有否定意义。可以用"so...that...can\'t"来改写。注意：当too后接ready, willing, eager, pleased等词时，too相当于very，不表示否定。', examples: [
        { en: 'He is too young to go to school.', cn: '他太小了，不能上学。' },
        { en: 'The box is too heavy for me to carry.', cn: '箱子太重了，我搬不动。' },
        { en: 'She was too excited to speak.', cn: '她激动得说不出话来。' },
        { en: 'I am only too pleased to help you.', cn: '我非常乐意帮助你。（too=very，无否定意义）' }
      ] },
      { title: '倒装句：Such is/was...', content: '"Such is/was + 主语 + that从句"是倒装结构，正常语序为"主语 + is/was such + that从句"。such在此是代词，指代上文描述的情况。这种结构使表达更加生动有力。', examples: [
        { en: 'Such was his anger that he couldn\'t speak.', cn: '他气得说不出话来。' },
        { en: 'Such is life that we must accept both joy and sorrow.', cn: '生活就是如此，我们必须接受欢乐与悲伤。' },
        { en: 'Such was the force of the explosion that all windows were broken.', cn: '爆炸的力量如此之大，所有的窗户都碎了。' },
        { en: 'Such is the popularity of the show that tickets sell out immediately.', cn: '这个节目如此受欢迎，票一开售就卖光了。' }
      ] }
    ],
    patternDrills: [
      { pattern: 'sb/sth + be referred to as + 名词', substitutions: [
        { en: 'He is referred to as a genius.', cn: '他被称为天才。' },
        { en: 'This area is referred to as the Silicon Valley.', cn: '这个地区被称为硅谷。' },
        { en: 'The practice is referred to as outsourcing.', cn: '这种做法被称为外包。' },
        { en: 'She is often referred to as the Iron Lady.', cn: '她常被称为铁娘子。' }
      ] },
      { pattern: 'too + adj + to do sth', substitutions: [
        { en: 'It is too cold to go outside.', cn: '天太冷了，不能出去。' },
        { en: 'He was too tired to continue working.', cn: '他太累了，无法继续工作。' },
        { en: 'The question is too difficult to answer.', cn: '这个问题太难回答了。' },
        { en: 'She spoke too quickly for us to understand.', cn: '她说得太快了，我们听不懂。' }
      ] }
    ],
    exercises: [
      { type: 'choice', question: 'Why did Alf leave home dressed in a smart black suit?', options: ['He had an office job.', 'He wanted to hide his real job from his wife.', 'He liked wearing suits.', 'His company required it.'], answer: 'He wanted to hide his real job from his wife.', explanation: '阿尔弗雷德太尴尬了不敢告诉妻子自己是清洁工，所以穿西装假装是白领。' },
      { type: 'fill', question: 'People who work in offices are frequently ____ to as "white-collar workers".', answer: 'referred', explanation: 'be referred to as是固定搭配，意为"被称为"。' },
      { type: 'judge', question: 'Alf\'s wife eventually found out that he was a dustman.', answer: 'false', explanation: '文章最后说she never will，意思是她永远不会发现，因为阿尔弗雷德已经换了工作。' },
      { type: 'choice', question: 'What does "Such is human nature" mean?', options: ['Human nature is bad.', 'This is typical of human beings.', 'Humans are selfish.', 'Nature is important to humans.'], answer: 'This is typical of human beings.', explanation: 'Such is human nature是倒装句，意为"人性就是如此"，指这是人类的典型特征。' }
    ],
  },
  {
    id: 5,
    title: 'The facts',
    titleCn: '事实',
    text: [
      'Editors of newspapers and magazines often go to extremes to provide their readers with unimportant facts and statistics.',
      'Last year a journalist had been instructed by a well-known magazine to write an article on the president\'s palace in a new African republic.',
      'When the article arrived, the editor read the first sentence and then refused to publish it. The article began: "Hundreds of steps lead to the high wall which surrounds the president\'s palace."',
      'The editor at once sent the journalist a telegram instructing him to find out the exact number of steps and the height of the wall.',
      'The journalist immediately set out to obtain these important facts, but he took a long time to send them.'
    ],
    textCn: [
      '报纸杂志的编辑常常走极端，向读者提供不重要的事实和统计数据。',
      '去年，一位记者受一家著名杂志的委派，写一篇关于某个新非洲共和国总统府的文章。',
      '文章发来后，编辑读了第一句就拒绝发表。文章开头是："数百级台阶通向总统府周围的高墙。"',
      '编辑立即给记者发了电报，指示他找出台阶的确切数量和围墙的高度。',
      '记者立刻出发去获取这些重要事实，但他花了很长时间才发过来。'
    ],
    vocabulary: [
      { word: 'editor', phonetic: '/ˈedɪtə/', meaning: '编辑' },
      { word: 'extreme', phonetic: '/ɪkˈstriːm/', meaning: '极端' },
      { word: 'statistics', phonetic: '/stəˈtɪstɪks/', meaning: '统计数据' },
      { word: 'journalist', phonetic: '/ˈdʒɜːnəlɪst/', meaning: '记者' },
      { word: 'instruct', phonetic: '/ɪnˈstrʌkt/', meaning: '指示' },
      { word: 'telegram', phonetic: '/ˈtelɪɡræm/', meaning: '电报' },
      { word: 'obtain', phonetic: '/əbˈteɪn/', meaning: '获得' }
    ],
    notes: [
      '"go to extremes" 走极端。',
      '"provide...with" 为...提供...。',
      '"set out to do" 着手做某事。'
    ],
    tags: ['现在进行时', '一般现在时'],
    difficulty: 3,
    summary: '一位杂志编辑要求记者精确核实总统府台阶和围墙的具体数据，体现了编辑对事实的极端追求。',
    summaryEn: 'A magazine editor demanded exact figures for the steps and walls of a presidential palace, showing the extreme pursuit of facts in journalism.',
    sentenceExplanations: [
      { sentence: 'Editors of newspapers and magazines often go to extremes to provide their readers with unimportant facts and statistics.', translation: '报纸杂志的编辑常常走极端，向读者提供不重要的事实和统计数据。', explanation: 'go to extremes是固定搭配，意为"走极端"。provide sb with sth意为"为某人提供某物"。unimportant带有讽刺意味。' },
      { sentence: 'Last year a journalist had been instructed by a well-known magazine to write an article on the president\'s palace in a new African republic.', translation: '去年，一位记者受一家著名杂志的委派，写一篇关于某个新非洲共和国总统府的文章。', explanation: 'had been instructed是过去完成时的被动语态，表示"在过去的过去被指示"。on在此表示"关于"。' },
      { sentence: 'The article began: "Hundreds of steps lead to the high wall which surrounds the president\'s palace."', translation: '文章开头是："数百级台阶通向总统府周围的高墙。"', explanation: 'lead to意为"通向"。which引导定语从句修饰wall，surround意为"围绕、环绕"。直接引语的使用增强了叙述的生动性。' },
      { sentence: 'The journalist immediately set out to obtain these important facts, but he took a long time to send them.', translation: '记者立刻出发去获取这些重要事实，但他花了很长时间才发过来。', explanation: 'set out to do意为"着手做、出发去做"。take a long time to do意为"花了很长时间做"。but连接两个对比的分句。' }
    ],
    grammarSections: [
      { title: '过去完成时的被动语态', content: '"had been + 过去分词"构成过去完成时的被动语态，表示在过去某个时间点之前已经完成的被动动作。在叙述过去事件时，用于描述更早发生的被动事件。', examples: [
        { en: 'The letter had been sent before I arrived.', cn: '在我到达之前，信已经寄出了。' },
        { en: 'The house had been sold when we called.', cn: '我们打电话时房子已经卖掉了。' },
        { en: 'He told me that the report had been finished.', cn: '他告诉我报告已经完成了。' },
        { en: 'The bridge had been damaged by the flood.', cn: '那座桥已经被洪水损坏了。' }
      ] },
      { title: 'go to extremes / set out to do', content: 'go to extremes意为"走极端、采取极端做法"。set out to do意为"着手做、开始做"，强调开始一项任务或旅程。这两个短语在新闻报道类文章中很常见。', examples: [
        { en: 'Some people go to extremes to lose weight.', cn: '有些人为了减肥走极端。' },
        { en: 'He went to extremes to prove his point.', cn: '他走极端来证明自己的观点。' },
        { en: 'She set out to become a doctor.', cn: '她立志成为一名医生。' },
        { en: 'They set out to climb the mountain at dawn.', cn: '他们在黎明时分出发去爬山。' }
      ] }
    ],
    patternDrills: [
      { pattern: 'sb + go to extremes + to do sth', substitutions: [
        { en: 'She went to extremes to keep her secret.', cn: '她不惜一切代价保守秘密。' },
        { en: 'He went to extremes to avoid being recognized.', cn: '他想尽办法避免被认出来。' },
        { en: 'The company went to extremes to cut costs.', cn: '公司走极端来削减成本。' },
        { en: 'They went to extremes to protect the environment.', cn: '他们为保护环境不遗余力。' }
      ] },
      { pattern: 'sb + set out + to do sth', substitutions: [
        { en: 'He set out to write a novel.', cn: '他着手写一部小说。' },
        { en: 'They set out to prove their theory.', cn: '他们着手证明自己的理论。' },
        { en: 'She set out to learn three languages.', cn: '她开始学习三种语言。' },
        { en: 'We set out to solve the problem.', cn: '我们着手解决这个问题。' }
      ] }
    ],
    exercises: [
      { type: 'choice', question: 'Why did the editor refuse to publish the article?', options: ['The article was too long.', 'The first sentence did not contain exact facts.', 'The journalist was unreliable.', 'The magazine didn\'t like the president.'], answer: 'The first sentence did not contain exact facts.', explanation: '编辑读了第一句就拒绝发表，因为文章说的是"数百级台阶"，没有确切数字，编辑要求知道精确数据。' },
      { type: 'fill', question: 'The journalist was ____ by a well-known magazine to write an article.', answer: 'instructed', explanation: 'instruct意为"指示、委派"，此处用被动语态had been instructed，表示记者被杂志社委派。' },
      { type: 'judge', question: 'The journalist quickly sent back the exact number of steps.', answer: 'false', explanation: '文章最后一句说"he took a long time to send them"，记者花了很长时间才把数据发回来。' },
      { type: 'choice', question: 'What does the editor\'s behaviour tell us about journalism?', options: ['Journalists should be creative.', 'Editors only care about money.', 'Facts and accuracy are essential.', 'Articles should be short.'], answer: 'Facts and accuracy are essential.', explanation: '编辑要求记者核实精确数据，说明在新闻报道中，事实和准确性是至关重要的。' }
    ],
  },
  {
    id: 6,
    title: 'Smash-and-grab',
    titleCn: '砸橱窗抢劫',
    text: [
      'The expensive shops in a famous arcade near Piccadilly were just opening. At this time of the morning, the arcade was almost empty.',
      'Mr. Taylor, the owner of a jewellery shop was admiring a new window display. Two of his assistants had been working busily since eight o\'clock and had only just finished.',
      'Diamond necklaces and rings had been beautifully arranged on a background of black velvet. After gazing at the display for several minutes, Mr. Taylor went back into his shop.',
      'The silence was suddenly broken when a large car, with its headlights on and its horn blaring, roared down the arcade. It came to a stop outside the jeweller\'s.'
    ],
    textCn: [
      '皮卡迪利大街附近的一条有名的拱廊街上，高档商店刚刚开门。早上这个时间，拱廊街几乎空无一人。',
      '珠宝店老板泰勒先生正在欣赏新的橱窗陈列。他的两个助手从八点起一直忙到现在，刚刚忙完。',
      '钻石项链和戒指在黑色天鹅绒的衬托下，被布置得非常精美。泰勒先生凝视了几分钟后走进了店里。',
      '安静的拱廊街突然被打破，一辆大车开着前灯、鸣着喇叭呼啸驶过。它在珠宝店外停了下来。'
    ],
    vocabulary: [
      { word: 'arcade', phonetic: '/ɑːˈkeɪd/', meaning: '拱廊街道' },
      { word: 'jewellery', phonetic: '/ˈdʒuːəlri/', meaning: '珠宝' },
      { word: 'display', phonetic: '/dɪˈspleɪ/', meaning: '陈列' },
      { word: 'necklace', phonetic: '/ˈneklɪs/', meaning: '项链' },
      { word: 'velvet', phonetic: '/ˈvelvɪt/', meaning: '天鹅绒' },
      { word: 'gaze', phonetic: '/ɡeɪz/', meaning: '凝视' },
      { word: 'horn', phonetic: '/hɔːn/', meaning: '喇叭' },
      { word: 'roar', phonetic: '/rɔː/', meaning: '呼啸' }
    ],
    notes: [
      '"smash-and-grab" 砸橱窗抢劫。',
      '过去完成进行时 "had been working since..."。',
      '"with its headlights on" with 复合结构。'
    ],
    tags: ['被动语态', '过去完成时'],
    difficulty: 4,
    summary: '一伙劫匪开着汽车冲进皮卡迪利大街的珠宝店拱廊，砸碎橱窗抢走了大量珠宝。',
    summaryEn: 'A gang of robbers drove a car into an arcade near Piccadilly and smashed a jewellery shop window to steal valuable diamonds.',
    sentenceExplanations: [
      { sentence: 'Mr. Taylor, the owner of a jewellery shop was admiring a new window display.', translation: '珠宝店老板泰勒先生正在欣赏新的橱窗陈列。', explanation: 'the owner of a jewellery shop是同位语，补充说明Mr. Taylor的身份。was admiring是过去进行时，表示当时正在进行的动作。' },
      { sentence: 'Two of his assistants had been working busily since eight o\'clock and had only just finished.', translation: '他的两个助手从八点起一直忙到现在，刚刚忙完。', explanation: 'had been working是过去完成进行时，表示从过去某一时刻开始一直持续到过去另一时刻的动作。only just强调"刚刚才"。' },
      { sentence: 'Diamond necklaces and rings had been beautifully arranged on a background of black velvet.', translation: '钻石项链和戒指在黑色天鹅绒的衬托下，被布置得非常精美。', explanation: 'had been arranged是过去完成时的被动语态，强调陈列品被布置的状态。on a background of意为"以……为背景"。' },
      { sentence: 'The silence was suddenly broken when a large car, with its headlights on and its horn blaring, roared down the arcade.', translation: '安静的拱廊街突然被打破，一辆大车开着前灯、鸣着喇叭呼啸驶过。', explanation: 'with its headlights on and its horn blaring是with复合结构，表示伴随状态。headlights on是"名词+形容词"，horn blaring是"名词+现在分词"。' }
    ],
    grammarSections: [
      { title: '过去完成进行时', content: '"had been + doing"构成过去完成进行时，表示从过去某时开始一直持续到过去另一时刻的动作，强调动作的持续性。常与since, for, all day等时间状语连用。', examples: [
        { en: 'I had been waiting for two hours when he finally arrived.', cn: '我等了两个小时他才终于到了。' },
        { en: 'She had been studying English for five years before she went to London.', cn: '她去伦敦之前已经学了五年英语。' },
        { en: 'They had been playing football all afternoon.', cn: '他们整个下午一直在踢足球。' },
        { en: 'He had been working at the company since 2010.', cn: '他从2010年起就一直在这家公司工作。' }
      ] },
      { title: 'with 复合结构', content: '"with + 名词 + 形容词/副词/介词短语/现在分词/过去分词"构成with的独立主格结构，表示伴随状态、原因或条件。在描写场景时特别有用，能使画面更加生动。', examples: [
        { en: 'He stood there with his hands in his pockets.', cn: '他双手插在口袋里站在那里。' },
        { en: 'She came in with a baby in her arms.', cn: '她抱着一个婴儿走了进来。' },
        { en: 'He sat with his eyes closed.', cn: '他闭着眼睛坐着。' },
        { en: 'The room was dark with the curtains drawn.', cn: '窗帘拉着，房间里很暗。' }
      ] }
    ],
    patternDrills: [
      { pattern: 'with + 名词 + 现在分词', substitutions: [
        { en: 'He fell asleep with the light burning.', cn: '他开着灯就睡着了。' },
        { en: 'She sat by the window with tears running down her cheeks.', cn: '她坐在窗边，泪水顺着脸颊流下。' },
        { en: 'He walked in with his dog following behind.', cn: '他走了进来，他的狗跟在后面。' },
        { en: 'The day ended with the sun setting behind the mountains.', cn: '这一天随着太阳落山而结束。' }
      ] },
      { pattern: 'sth + had been + 过去分词 + before/until...', substitutions: [
        { en: 'The work had been finished before the deadline.', cn: '工作在截止日期之前就完成了。' },
        { en: 'The letter had been sent before I could stop him.', cn: '我还没来得及阻止他，信就寄出去了。' },
        { en: 'The food had been eaten before we arrived.', cn: '我们到的时候食物已经被吃光了。' },
        { en: 'The car had been repaired until it looked brand new.', cn: '车被修得看起来像新的一样。' }
      ] }
    ],
    exercises: [
      { type: 'choice', question: 'What had the assistants been doing since eight o\'clock?', options: ['Cleaning the shop', 'Arranging the window display', 'Serving customers', 'Opening the shop'], answer: 'Arranging the window display', explanation: '文章提到两个助手从八点起就一直在忙，结合上下文，他们是在布置橱窗陈列。' },
      { type: 'fill', question: 'The silence was suddenly ____ when a large car roared down the arcade.', answer: 'broken', explanation: 'silence was broken意为"寂静被打破"，break的过去分词是broken。' },
      { type: 'judge', question: 'The robbers entered the shop through the back door.', answer: 'false', explanation: '文章描述劫匪开着大车冲进拱廊街，砸碎珠宝店的橱窗进行抢劫，不是从后门进入的。' },
      { type: 'choice', question: 'What does "with its headlights on and its horn blaring" describe?', options: ['The shop window', 'The large car', 'The jewellery', 'The arcade'], answer: 'The large car', explanation: 'with复合结构描述的是大车的状态：开着前灯、鸣着喇叭。' }
    ],
  },
  {
    id: 7,
    title: 'Mutilated ladies',
    titleCn: '残钞鉴别组',
    text: [
      'Has it ever happened to you? Have you ever put your trousers in the washing machine and then remembered there was a large bank note in your back pocket?',
      'When you rescued your trousers, did you find the note was whiter than white? People who live in Britain needn\'t despair when they make mistakes like this.',
      'Fortunately for them, the Bank of England has a team called Mutilated Ladies which deals with claims from people who have damaged their banknotes.',
      'A recent case concerns Jane Butlin whose fiancé, John, runs a successful furniture business. John had a very good day and put his wallet containing 3,000 pounds into the microwave oven for safekeeping.'
    ],
    textCn: [
      '你遇到过这种事吗？你有没有把裤子放进洗衣机然后想起来后口袋有一张大额钞票？',
      '当你抢救出裤子时，发现钞票比白还白了吗？住在英国的人犯这种错误时不必绝望。',
      '对他们来说幸运的是，英格兰银行有一个叫"残钞鉴别组"的团队，处理损坏钞票的人的申报。',
      '最近一个案例是简·巴特林，她的未婚夫约翰经营着成功的家具生意。约翰那天过得很好，把装有三万英镑的钱包放进微波炉保管。'
    ],
    vocabulary: [
      { word: 'mutilate', phonetic: '/ˈmjuːtɪleɪt/', meaning: '使残缺' },
      { word: 'despair', phonetic: '/dɪˈspeə/', meaning: '绝望' },
      { word: 'claim', phonetic: '/kleɪm/', meaning: '申报' },
      { word: 'concern', phonetic: '/kənˈsɜːn/', meaning: '涉及' },
      { word: 'fiancé', phonetic: '/fiˈɒnseɪ/', meaning: '未婚夫' },
      { word: 'microwave', phonetic: '/ˈmaɪkrəweɪv/', meaning: '微波炉' }
    ],
    notes: [
      '"Mutilated Ladies" 残钞鉴别组。',
      '"needn\'t despair" need 作情态动词。',
      '"whiter than white" 比较级强调。'
    ],
    tags: ['条件句', '虚拟语气'],
    difficulty: 4,
    summary: '英格兰银行的"残钞鉴别组"专门处理损坏钞票的申报，帮助人们挽回损失。',
    summaryEn: 'The Bank of England\'s "Mutilated Ladies" team handles claims from people who have accidentally damaged their banknotes.',
    sentenceExplanations: [
      { sentence: 'Have you ever put your trousers in the washing machine and then remembered there was a large bank note in your back pocket?', translation: '你有没有把裤子放进洗衣机然后想起来后口袋有一张大额钞票？', explanation: 'Have you ever...是现在完成时的疑问句，询问是否有过这种经历。there was引导宾语从句，作remembered的宾语。' },
      { sentence: 'People who live in Britain needn\'t despair when they make mistakes like this.', translation: '住在英国的人犯这种错误时不必绝望。', explanation: 'needn\'t是情态动词need的否定形式，表示"不必"。despair是不及物动词，意为"绝望"。who引导定语从句修饰people。' },
      { sentence: 'Fortunately for them, the Bank of England has a team called Mutilated Ladies which deals with claims from people who have damaged their banknotes.', translation: '对他们来说幸运的是，英格兰银行有一个叫"残钞鉴别组"的团队，处理损坏钞票的人的申报。', explanation: 'called Mutilated Ladies是过去分词短语作后置定语。which引导定语从句修饰team。who引导定语从句修饰people。deal with意为"处理"。' },
      { sentence: 'John had a very good day and put his wallet containing 3,000 pounds into the microwave oven for safekeeping.', translation: '约翰那天过得很好，把装有三千英镑的钱包放进微波炉保管。', explanation: 'containing是现在分词作后置定语修饰wallet。for safekeeping意为"为了保管"，说明放入微波炉的目的。' }
    ],
    grammarSections: [
      { title: 'need 作情态动词的用法', content: 'need可以作情态动词，后接动词原形，主要用于否定句和疑问句。否定形式为needn\'t，表示"不必"。need也可以作实义动词，用法为need to do，否定为don\'t need to do。', examples: [
        { en: 'You needn\'t worry about it.', cn: '你不必担心。' },
        { en: 'Need I come tomorrow?', cn: '我明天需要来吗？' },
        { en: 'You don\'t need to come so early.', cn: '你不必来这么早。（实义动词）' },
        { en: 'He needn\'t have hurried.', cn: '他本来不必着急的。（但事实上他着急了）' }
      ] },
      { title: '过去分词和现在分词作后置定语', content: '过去分词作后置定语表示被动和完成，现在分词作后置定语表示主动和进行。分词短语相当于一个简化的定语从句，使句子更加简洁。', examples: [
        { en: 'The man standing at the door is my teacher.', cn: '站在门口的那个人是我的老师。（主动，= who is standing）' },
        { en: 'The book written by him is very popular.', cn: '他写的那本书很受欢迎。（被动，= which was written）' },
        { en: 'The girl wearing a red dress is my sister.', cn: '穿红裙子的女孩是我姐姐。（主动）' },
        { en: 'The money stolen from the bank was never found.', cn: '从银行偷走的钱一直没有找到。（被动）' }
      ] }
    ],
    patternDrills: [
      { pattern: 'sb/sth + deal with + 名词', substitutions: [
        { en: 'The manager will deal with the problem.', cn: '经理会处理这个问题。' },
        { en: 'This book deals with Chinese history.', cn: '这本书讲的是中国历史。' },
        { en: 'She knows how to deal with difficult customers.', cn: '她知道如何应对难缠的顾客。' },
        { en: 'The government must deal with pollution.', cn: '政府必须解决污染问题。' }
      ] },
      { pattern: 'sth + called/named + 名称', substitutions: [
        { en: 'There is a town called Stratford in England.', cn: '英格兰有一个叫斯特拉福德的小镇。' },
        { en: 'I have a dog named Lucky.', cn: '我有一只叫Lucky的狗。' },
        { en: 'She works for a company called Microsoft.', cn: '她在一家叫微软的公司工作。' },
        { en: 'He lives in a place called Paradise.', cn: '他住在一个叫天堂的地方。' }
      ] }
    ],
    exercises: [
      { type: 'choice', question: 'What did John put into the microwave oven?', options: ['His food', 'His wallet containing 3,000 pounds', 'His keys', 'His phone'], answer: 'His wallet containing 3,000 pounds', explanation: '文章说约翰把装有三千英镑的钱包放进微波炉保管。' },
      { type: 'fill', question: 'People who live in Britain ____ despair when they make mistakes like this.', answer: 'needn\'t', explanation: 'need在此作情态动词，needn\'t表示"不必"，说明住在英国的人不必因为损坏钞票而绝望。' },
      { type: 'judge', question: 'The "Mutilated Ladies" team deals with damaged coins.', answer: 'false', explanation: '文章明确说该团队处理的是损坏的banknotes（纸币），而不是coins（硬币）。' },
      { type: 'choice', question: 'What does "whiter than white" suggest about the bank note?', options: ['It was very clean.', 'It was completely destroyed.', 'It was valuable.', 'It was new.'], answer: 'It was completely destroyed.', explanation: '"比白还白"暗示钞票在洗衣机里被洗得面目全非，完全损坏了。' }
    ],
  },
  {
    id: 8,
    title: 'A famous monastery',
    titleCn: '著名的修道院',
    text: [
      'The Great St. Bernard Pass connects Switzerland to Italy. At 2,470 metres, it is the highest mountain pass in Europe.',
      'The famous monastery of St. Bernard, which was founded in the eleventh century, lies about a mile away. For hundreds of years, St. Bernard dogs have saved the lives of travellers crossing the dangerous Pass.',
      'These friendly dogs, which were first brought from Asia, were used as watchdogs even in Roman times. Now that a tunnel has been built through the mountains, the Pass is less dangerous, but each year, the dogs are still sent out into the snow whenever a traveller is in difficulty.',
      'Despite the new tunnel, there are still a few people who rashly attempt to cross the Pass on foot during the winter.'
    ],
    textCn: [
      '圣伯纳德大山口连接瑞士和意大利。海拔2470米，是欧洲最高的山口。',
      '著名的圣伯纳德修道院建于11世纪，位于山口附近一英里处。几百年来，圣伯纳德犬救了穿越这危险山口的旅行者的生命。',
      '这些友好的狗最初是从亚洲引进的，早在罗马时代就被用作看门犬。如今由于山里修了隧道，山口不那么危险了，但每年当旅行者遇到困难时，这些狗仍然被派往雪地中。',
      '尽管有了新隧道，还是有少数人鲁莽地试图在冬天步行穿越山口。'
    ],
    vocabulary: [
      { word: 'monastery', phonetic: '/ˈmɒnəstri/', meaning: '修道院' },
      { word: 'pass', phonetic: '/pɑːs/', meaning: '山口' },
      { word: 'found', phonetic: '/faʊnd/', meaning: '建立' },
      { word: 'traveller', phonetic: '/ˈtrævələ/', meaning: '旅行者' },
      { word: 'tunnel', phonetic: '/ˈtʌnl/', meaning: '隧道' },
      { word: 'rashly', phonetic: '/ˈræʃli/', meaning: '鲁莽地' },
      { word: 'attempt', phonetic: '/əˈtempt/', meaning: '试图' }
    ],
    notes: [
      '"connect...to" 连接起来。',
      '"Now that..." 既然，由于。',
      '注意 "found"（建立）与 find 过去式同形异义。'
    ],
    tags: ['名词性从句', '主语从句'],
    difficulty: 4,
    summary: '圣伯纳德修道院位于欧洲最高的山口附近，几百年来圣伯纳德犬一直在此救助遇险的旅行者。',
    summaryEn: 'The St. Bernard monastery near Europe\'s highest mountain pass has used St. Bernard dogs to rescue travellers for hundreds of years.',
    sentenceExplanations: [
      { sentence: 'The famous monastery of St. Bernard, which was founded in the eleventh century, lies about a mile away.', translation: '著名的圣伯纳德修道院建于11世纪，位于山口附近一英里处。', explanation: 'which引导非限制性定语从句，补充说明修道院的建立时间。founded是find（建立）的过去分词，注意与find（找到）的过去式found同形。lies意为"位于"。' },
      { sentence: 'For hundreds of years, St. Bernard dogs have saved the lives of travellers crossing the dangerous Pass.', translation: '几百年来，圣伯纳德犬救了穿越这危险山口的旅行者的生命。', explanation: 'have saved是现在完成时，for hundreds of years表示持续的时间。crossing是现在分词作后置定语修饰travellers。' },
      { sentence: 'Now that a tunnel has been built through the mountains, the Pass is less dangerous, but each year, the dogs are still sent out into the snow whenever a traveller is in difficulty.', translation: '如今由于山里修了隧道，山口不那么危险了，但每年当旅行者遇到困难时，这些狗仍然被派往雪地中。', explanation: 'Now that引导原因状语从句，意为"既然、由于"。has been built是现在完成时的被动语态。less dangerous是比较级。whenever引导时间状语从句，意为"每当"。' },
      { sentence: 'Despite the new tunnel, there are still a few people who rashly attempt to cross the Pass on foot during the winter.', translation: '尽管有了新隧道，还是有少数人鲁莽地试图在冬天步行穿越山口。', explanation: 'despite是介词，意为"尽管"，后接名词或名词短语。who引导定语从句修饰people。attempt to do意为"试图做"。on foot意为"步行"。' }
    ],
    grammarSections: [
      { title: 'Now that 引导原因状语从句', content: '"Now that + 从句"表示"既然、由于"，引导一个已知的原因。与because不同，now that强调的是一个新出现的情况或已经发生的事实作为原因。', examples: [
        { en: 'Now that you are here, let\'s start the meeting.', cn: '既然你来了，我们开始开会吧。' },
        { en: 'Now that he has graduated, he needs to find a job.', cn: '既然他已经毕业了，他需要找份工作。' },
        { en: 'Now that the rain has stopped, we can go for a walk.', cn: '雨停了，我们可以去散步了。' },
        { en: 'Now that you mention it, I do remember.', cn: '你这么一提，我确实想起来了。' }
      ] },
      { title: 'despite / in spite of 的用法', content: 'despite和in spite of都是介词，意为"尽管、虽然"，后接名词、代词或动名词。注意不能说despite of。although/though是连词，后接从句。两者可以互换，但结构不同。', examples: [
        { en: 'Despite the bad weather, we enjoyed our trip.', cn: '尽管天气不好，我们旅行得很愉快。' },
        { en: 'In spite of being tired, he continued working.', cn: '尽管很累，他继续工作。' },
        { en: 'She passed the exam despite her illness.', cn: '尽管生病了，她还是通过了考试。' },
        { en: 'Although it was raining, they went out.', cn: '虽然下雨了，他们还是出去了。（although后接从句）' }
      ] }
    ],
    patternDrills: [
      { pattern: 'Now that + 从句, 主句', substitutions: [
        { en: 'Now that the exam is over, I can relax.', cn: '考试结束了，我可以放松了。' },
        { en: 'Now that you know the truth, what will you do?', cn: '既然你知道了真相，你打算怎么办？' },
        { en: 'Now that spring has come, the trees are turning green.', cn: '春天来了，树都变绿了。' },
        { en: 'Now that he is retired, he travels a lot.', cn: '既然退休了，他经常去旅行。' }
      ] },
      { pattern: 'Despite + 名词/动名词, 主句', substitutions: [
        { en: 'Despite the difficulties, they succeeded.', cn: '尽管困难重重，他们成功了。' },
        { en: 'Despite being poor, he was happy.', cn: '尽管贫穷，他很快乐。' },
        { en: 'Despite her age, she is very active.', cn: '尽管年纪大了，她很活跃。' },
        { en: 'Despite the warning, he went ahead.', cn: '尽管有警告，他还是继续了。' }
      ] }
    ],
    exercises: [
      { type: 'choice', question: 'Why is the Pass less dangerous now?', options: ['The weather has improved.', 'A tunnel has been built through the mountains.', 'The dogs protect travellers.', 'People don\'t cross it anymore.'], answer: 'A tunnel has been built through the mountains.', explanation: '文章明确说since a tunnel has been built through the mountains，隧道的修建使山口不那么危险了。' },
      { type: 'fill', question: 'The famous monastery was ____ in the eleventh century.', answer: 'founded', explanation: 'found作"建立"讲时，过去式和过去分词是founded。注意与find的过去式found区别。' },
      { type: 'judge', question: 'St. Bernard dogs were first brought from Europe.', answer: 'false', explanation: '文章说these friendly dogs, which were first brought from Asia，狗最初是从亚洲引进的，不是欧洲。' },
      { type: 'choice', question: 'What does "rashly attempt" suggest about those who cross the Pass in winter?', options: ['They are brave.', 'They are foolish and reckless.', 'They are well-prepared.', 'They are experienced climbers.'], answer: 'They are foolish and reckless.', explanation: 'rashly意为"鲁莽地"，暗示这些人不计后果、行事轻率。' }
    ],
  },
  {
    id: 9,
    title: 'Flying cats',
    titleCn: '飞猫',
    text: [
      'Cats never fail to fascinate human beings. They can be friendly and affectionate towards humans, but they lead mysterious lives of their own as well.',
      'They never become submissive like dogs and horses. As a result, humans have learned to respect feline independence.',
      'Most cats remain suspicious of humans all their lives. One of the things that fascinates us most about cats is the popular belief that they have nine lives.'
    ],
    textCn: [
      '猫永远不会失去令人类着迷的能力。它们可以对人类友好而亲昵，但同时也过着自己神秘的生活。',
      '它们永远不会像狗和马那样变得顺从。因此，人类学会了尊重猫科动物的独立性。',
      '大多数猫一辈子都对人类保持怀疑。关于猫最令我们着迷的事情之一，就是猫有九条命的说法。'
    ],
    vocabulary: [
      { word: 'fascinate', phonetic: '/ˈfæsɪneɪt/', meaning: '使着迷' },
      { word: 'affectionate', phonetic: '/əˈfekʃənɪt/', meaning: '亲昵的' },
      { word: 'mysterious', phonetic: '/mɪˈstɪəriəs/', meaning: '神秘的' },
      { word: 'submissive', phonetic: '/səbˈmɪsɪv/', meaning: '顺从的' },
      { word: 'feline', phonetic: '/ˈfiːlaɪn/', meaning: '猫科动物的' },
      { word: 'independence', phonetic: '/ˌɪndɪˈpendəns/', meaning: '独立' },
      { word: 'suspicious', phonetic: '/səˈspɪʃəs/', meaning: '怀疑的' }
    ],
    notes: [
      '"never fail to" 总是能（双重否定）。',
      '"as well" 也。',
      '"As a result" 因此。'
    ],
    tags: ['定语从句', '非限制性'],
    difficulty: 4,
    summary: '猫永远不会失去令人类着迷的能力，它们独立而神秘，从不像狗那样顺从，人们相信猫有九条命。',
    summaryEn: 'Cats never fail to fascinate humans with their mysterious and independent nature, never becoming submissive like dogs, and people believe they have nine lives.',
    sentenceExplanations: [
      { sentence: 'Cats never fail to fascinate human beings.', translation: '猫永远不会失去令人类着迷的能力。', explanation: 'never fail to是双重否定，意为"总能、一定会"。fascinate意为"使着迷"。' },
      { sentence: 'They can be friendly and affectionate towards humans, but they lead mysterious lives of their own as well.', translation: '它们可以对人类友好而亲昵，但同时也过着自己神秘的生活。', explanation: 'affectionate意为"亲昵的"。lead...lives意为"过着...的生活"。as well意为"也"。' },
      { sentence: 'They never become submissive like dogs and horses.', translation: '它们永远不会像狗和马那样变得顺从。', explanation: 'submissive意为"顺从的"。like是介词，意为"像"。' },
      { sentence: 'One of the things that fascinates us most about cats is the popular belief that they have nine lives.', translation: '关于猫最令我们着迷的事情之一，就是猫有九条命的说法。', explanation: 'that fascinates us是定语从句修饰things。that they have nine lives是同位语从句，解释belief的内容。' }
    ],
    grammarSections: [
      { title: 'never fail to 总是能（双重否定）', content: '"never fail to do"是双重否定结构，表示"总能、一定会做到"。语气比直接说always do更强。', examples: [
        { en: 'He never fails to make me laugh.', cn: '他总能逗我笑。' },
        { en: 'Cats never fail to fascinate humans.', cn: '猫总能令人类着迷。' },
        { en: 'She never fails to arrive on time.', cn: '她从不迟到。' }
      ] },
      { title: '同位语从句 that...', content: '同位语从句由that引导，解释前面抽象名词（如belief, idea, fact, news）的具体内容。与定语从句不同，that在同位语从句中不作成分。', examples: [
        { en: 'The belief that cats have nine lives is popular.', cn: '猫有九条命的说法很流行。' },
        { en: 'The news that he won surprised everyone.', cn: '他获胜的消息让每个人都很惊讶。' },
        { en: 'I have no idea that he was here.', cn: '我不知道他在这里。' }
      ] }
    ],
    patternDrills: [
      { pattern: '___ never fail(s) to ___.', substitutions: [
        { en: 'Cats / fascinate human beings', cn: '猫 / 令人类着迷' },
        { en: 'He / make me laugh', cn: '他 / 逗我笑' },
        { en: 'She / arrive on time', cn: '她 / 准时到达' }
      ] },
      { pattern: 'One of the things that ___ is the belief that ___.', substitutions: [
        { en: 'fascinates us / they have nine lives', cn: '令我们着迷 / 它们有九条命' },
        { en: 'surprises me / he is innocent', cn: '令我惊讶 / 他是无辜的' },
        { en: 'interests them / the earth is round', cn: '令他们感兴趣 / 地球是圆的' }
      ] }
    ],
    exercises: [
      { type: 'choice', question: 'Cats never _____ to fascinate human beings.', options: ['A. fail', 'B. failed', 'C. failing', 'D. fails'], answer: 'A', explanation: 'never fail to是固定结构，主语cats是复数，用fail。' },
      { type: 'fill', question: 'They lead _____ lives of their own. (神秘的)', answer: 'mysterious', explanation: 'mysterious意为"神秘的"。' },
      { type: 'judge', question: '"never fail to" 是双重否定，表示"总能"。', answer: '正确', explanation: 'never + fail（不失败）= 总能成功做到。' },
      { type: 'choice', question: 'The popular belief _____ they have nine lives is widespread.', options: ['A. which', 'B. what', 'C. that', 'D. who'], answer: 'C', explanation: 'that引导同位语从句，解释belief的内容。' }
    ],
  },
  {
    id: 10,
    title: 'Not guilty',
    titleCn: '无罪',
    text: [
      'Customs Officers are quite tolerant these days, but they can still stop you when you are going through the Green Channel and have nothing to declare.',
      'Even really honest people are often made to feel guilty.',
      'The hardened professional smuggler, on the other hand, is never troubled by such feelings.'
    ],
    textCn: [
      '如今海关官员已经相当宽容了，但当你走绿色通道且无需申报时，他们仍然可以把你拦下来。',
      '即使真正诚实的人也常常被弄得觉得自己有罪。',
      '而老练的职业走私犯却从不被这种感觉所困扰。'
    ],
    vocabulary: [
      { word: 'guilty', phonetic: '/ˈɡɪlti/', meaning: '有罪的' },
      { word: 'tolerant', phonetic: '/ˈtɒlərənt/', meaning: '宽容的' },
      { word: 'declare', phonetic: '/dɪˈkleə/', meaning: '申报' },
      { word: 'hardened', phonetic: '/ˈhɑːdnd/', meaning: '老练的' },
      { word: 'smuggler', phonetic: '/ˈsmʌɡlə/', meaning: '走私犯' },
      { word: 'trouble', phonetic: '/ˈtrʌbl/', meaning: '困扰' }
    ],
    notes: [
      '"the Green Channel" 绿色通道。',
      '"on the other hand" 另一方面。',
      '"made to feel" 被动使役。'
    ],
    tags: ['时态综合', '叙述文'],
    difficulty: 3,
    summary: '海关官员如今已相当宽容，但即使诚实的人走绿色通道也常被拦下感到心虚，而职业走私犯反而泰然自若。',
    summaryEn: 'Customs officers are quite tolerant nowadays, but even honest people feel guilty at the Green Channel, while professional smugglers remain unfazed.',
    sentenceExplanations: [
      { sentence: 'Customs Officers are quite tolerant these days, but they can still stop you when you are going through the Green Channel and have nothing to declare.', translation: '如今海关官员已经相当宽容了，但当你走绿色通道且无需申报时，他们仍然可以把你拦下来。', explanation: 'tolerant意为"宽容的"。the Green Channel指无需申报物品的绿色通道。have nothing to declare意为"没有东西需要申报"。' },
      { sentence: 'Even really honest people are often made to feel guilty.', translation: '即使真正诚实的人也常常被弄得觉得自己有罪。', explanation: 'be made to do意为"被使得做某事"，被动使役结构。guilty意为"有罪的、内疚的"。' },
      { sentence: 'The hardened professional smuggler, on the other hand, is never troubled by such feelings.', translation: '而老练的职业走私犯却从不被这种感觉所困扰。', explanation: 'hardened意为"老练的、麻木的"。on the other hand是插入语，意为"另一方面"。is troubled by是被动语态。' },
      { sentence: 'They can still stop you when you are going through the Green Channel.', translation: '当你走绿色通道时，他们仍然可以把你拦下。', explanation: 'when引导时间状语从句。go through意为"通过"。' }
    ],
    grammarSections: [
      { title: 'be made to do 被动使役', content: '"be made to do"是make sb do的被动形式。在被动语态中，不定式的to不能省略。类似的有be asked to do, be told to do。', examples: [
        { en: 'He was made to wait for an hour.', cn: '他被要求等了一个小时。' },
        { en: 'They were made to feel guilty.', cn: '他们被弄得感到内疚。' },
        { en: 'She was asked to come early.', cn: '她被要求早点来。' }
      ] },
      { title: 'on the other hand 另一方面', content: '"on the other hand"是插入语，意为"另一方面"，用于引出与前述对比的情况。常与on the one hand搭配使用。', examples: [
        { en: 'On the one hand, it is cheap; on the other hand, it is not durable.', cn: '一方面它便宜；另一方面不耐用。' },
        { en: 'Honest people feel guilty. Smugglers, on the other hand, feel nothing.', cn: '诚实的人感到内疚。而走私犯则毫无感觉。' },
        { en: 'He is smart. On the other hand, he is lazy.', cn: '他很聪明。另一方面，他很懒。' }
      ] }
    ],
    patternDrills: [
      { pattern: 'Even ___ are often made to feel ___.', substitutions: [
        { en: 'honest people / guilty', cn: '诚实的人 / 有罪' },
        { en: 'good students / nervous', cn: '好学生 / 紧张' },
        { en: 'children / frightened', cn: '孩子们 / 害怕' }
      ] },
      { pattern: 'The ___, on the other hand, is/are never troubled by ___.', substitutions: [
        { en: 'professional smuggler / such feelings', cn: '职业走私犯 / 这种感觉' },
        { en: 'experienced teacher / small problems', cn: '有经验的老师 / 小问题' },
        { en: 'rich man / money matters', cn: '富人 / 钱的问题' }
      ] }
    ],
    exercises: [
      { type: 'choice', question: 'Honest people are often made _____ feel guilty.', options: ['A. for', 'B. to', 'C. in', 'D. at'], answer: 'B', explanation: 'be made to do中to不能省略。' },
      { type: 'fill', question: 'Customs Officers are quite _____ these days. (宽容的)', answer: 'tolerant', explanation: 'tolerant意为"宽容的"。' },
      { type: 'judge', question: '"on the other hand" 意为"总之"。', answer: '错误', explanation: 'on the other hand意为"另一方面"，用于对比。' },
      { type: 'choice', question: 'The smuggler is never troubled _____ such feelings.', options: ['A. from', 'B. with', 'C. by', 'D. for'], answer: 'C', explanation: 'be troubled by意为"被...困扰"。' }
    ],
  },
  {
    id: 11,
    title: 'Life on a desert island',
    titleCn: '荒岛生活',
    text: [
      'Most of us have formed an unrealistic picture of life on a desert island.',
      'We sometimes imagine a desert island to be a sort of paradise where the sun always shines.',
      'The other side of the picture is quite the opposite. Life on a desert island is wretched.'
    ],
    textCn: [
      '我们大多数人对荒岛生活有一种不切实际的印象。',
      '我们有时把荒岛想象成一个阳光永远灿烂的天堂。',
      '然而画面的另一面却恰恰相反。荒岛上的生活是很悲惨的。'
    ],
    vocabulary: [
      { word: 'desert island', phonetic: '/ˈdezət ˈaɪlənd/', meaning: '荒岛' },
      { word: 'unrealistic', phonetic: '/ˌʌnrɪəˈlɪstɪk/', meaning: '不切实际的' },
      { word: 'imagine', phonetic: '/ɪˈmædʒɪn/', meaning: '想象' },
      { word: 'paradise', phonetic: '/ˈpærədaɪs/', meaning: '天堂' },
      { word: 'wretched', phonetic: '/ˈretʃɪd/', meaning: '悲惨的' }
    ],
    notes: [
      '"form a picture of" 对...形成印象。',
      '"a sort of" 一种。',
      '"quite the opposite" 恰恰相反。'
    ],
    tags: ['倒装句', '强调句'],
    difficulty: 5,
    summary: '人们对荒岛生活的想象往往不切实际，要么是天堂，要么是地狱，而真实情况往往与想象大不相同。',
    summaryEn: 'People have unrealistic ideas about desert island life, imagining either paradise or misery, but reality is quite different from imagination.',
    sentenceExplanations: [
      { sentence: 'Most of us have formed an unrealistic picture of life on a desert island.', translation: '我们大多数人对荒岛生活有一种不切实际的印象。', explanation: 'form a picture of意为"形成...的印象"。unrealistic意为"不切实际的"。现在完成时表示到目前为止形成的印象。' },
      { sentence: 'We sometimes imagine a desert island to be a sort of paradise where the sun always shines.', translation: '我们有时把荒岛想象成一个阳光永远灿烂的天堂。', explanation: 'imagine...to be意为"把...想象成"。a sort of意为"一种"。where引导定语从句修饰paradise。' },
      { sentence: 'The other side of the picture is quite the opposite.', translation: '然而画面的另一面却恰恰相反。', explanation: 'quite the opposite意为"恰恰相反"。the other side表示"另一面"。' },
      { sentence: 'Life on a desert island is wretched.', translation: '荒岛上的生活是很悲惨的。', explanation: 'wretched意为"悲惨的、糟糕的"。on a desert island是介词短语作后置定语。' }
    ],
    grammarSections: [
      { title: 'imagine...to be 把...想象成', content: '"imagine + 宾语 + to be"意为"把...想象成"。也可用imagine + 宾语 + as。', examples: [
        { en: 'We imagine a desert island to be a paradise.', cn: '我们把荒岛想象成天堂。' },
        { en: 'I imagined him to be much taller.', cn: '我把他想象得更高。' },
        { en: 'Don\'t imagine it to be easy.', cn: '不要把它想象得太容易。' }
      ] },
      { title: 'quite the opposite 恰恰相反', content: '"quite the opposite"是固定表达，意为"恰恰相反、完全相反"。用于引出与前述完全不同的情况。', examples: [
        { en: 'He is not lazy; quite the opposite, he works very hard.', cn: '他不懒；恰恰相反，他工作很努力。' },
        { en: 'The other side is quite the opposite.', cn: '另一面恰恰相反。' },
        { en: 'I thought it would be easy, but it was quite the opposite.', cn: '我以为很简单，但恰恰相反。' }
      ] }
    ],
    patternDrills: [
      { pattern: 'Most of us have formed ___ of ___.', substitutions: [
        { en: 'an unrealistic picture / life on a desert island', cn: '不切实际的印象 / 荒岛生活' },
        { en: 'a wrong idea / the country', cn: '错误的想法 / 这个国家' },
        { en: 'a good impression / the school', cn: '好印象 / 这所学校' }
      ] },
      { pattern: 'We imagine ___ to be a sort of ___.', substitutions: [
        { en: 'a desert island / paradise', cn: '荒岛 / 天堂' },
        { en: 'the job / holiday', cn: '工作 / 度假' },
        { en: 'the city / jungle', cn: '城市 / 丛林' }
      ] }
    ],
    exercises: [
      { type: 'choice', question: 'We sometimes imagine a desert island _____ be a sort of paradise.', options: ['A. for', 'B. to', 'C. as', 'D. in'], answer: 'B', explanation: 'imagine...to be是固定结构。' },
      { type: 'fill', question: 'Most of us have formed an _____ picture of life on a desert island. (不切实际的)', answer: 'unrealistic', explanation: 'unrealistic意为"不切实际的"。' },
      { type: 'judge', question: '"quite the opposite" 意为"完全正确"。', answer: '错误', explanation: 'quite the opposite意为"恰恰相反"。' },
      { type: 'choice', question: 'The other side of the picture is quite the _____.', options: ['A. oppose', 'B. opposed', 'C. opposite', 'D. opposition'], answer: 'C', explanation: 'quite the opposite是固定搭配。' }
    ],
  },
  {
    id: 12,
    title: 'It\'s only me',
    titleCn: '是我，别怕',
    text: [
      'After her husband had gone to work, Mrs. Richards sent her children to school and went upstairs to her room.',
      'She was going to dress up as a ghost for the party. The costume was quite elaborate. Mrs. Richards was pleased with it.'
    ],
    textCn: [
      '丈夫去上班后，理查兹夫人送孩子们上学，然后回到楼上自己的房间。',
      '她打算化装成鬼去参加聚会。这套化装服相当精致。理查兹夫人很满意。'
    ],
    vocabulary: [
      { word: 'ghost', phonetic: '/ɡəʊst/', meaning: '鬼' },
      { word: 'costume', phonetic: '/ˈkɒstjuːm/', meaning: '化装服' },
      { word: 'elaborate', phonetic: '/ɪˈlæbərət/', meaning: '精致的' },
      { word: 'pleased', phonetic: '/pliːzd/', meaning: '高兴的' },
      { word: 'dress up', phonetic: '/dres ʌp/', meaning: '化装' }
    ],
    notes: [
      '"dress up as" 化装成。',
      '"be pleased with" 对...满意。'
    ],
    tags: ['分词', '独立主格'],
    difficulty: 5,
    summary: '理查兹夫人化装成鬼参加聚会，但穿着化装服下楼时吓到了上门的修理工和警察。',
    summaryEn: 'Mrs. Richards dressed up as a ghost for a party, but her costume frightened a repairman and a policeman who came to the door.',
    sentenceExplanations: [
      { sentence: 'After her husband had gone to work, Mrs. Richards sent her children to school and went upstairs to her room.', translation: '丈夫去上班后，理查兹夫人送孩子们上学，然后回到楼上自己的房间。', explanation: 'After引导时间状语从句。had gone是过去完成时，发生在sent之前。went和sent是并列的过去式谓语。' },
      { sentence: 'She was going to dress up as a ghost for the party.', translation: '她打算化装成鬼去参加聚会。', explanation: 'be going to表示"打算做某事"。dress up as意为"化装成"。' },
      { sentence: 'The costume was quite elaborate.', translation: '这套化装服相当精致。', explanation: 'elaborate意为"精心制作的、精致的"。quite修饰elaborate表示"相当"。' },
      { sentence: 'Mrs. Richards was pleased with it.', translation: '理查兹夫人对此很满意。', explanation: 'be pleased with意为"对...感到满意"。it指代costume。' }
    ],
    grammarSections: [
      { title: 'be going to 打算做某事', content: '"be going to + 动词原形"表示计划或打算做某事，也可以表示根据迹象预测即将发生的事。', examples: [
        { en: 'She is going to visit her friend tomorrow.', cn: '她打算明天去看朋友。' },
        { en: 'It is going to rain.', cn: '要下雨了。（根据迹象预测）' },
        { en: 'She was going to dress up as a ghost.', cn: '她打算化装成鬼。' }
      ] },
      { title: 'dress up as 化装成', content: '"dress up"意为"装扮、化装"，dress up as后接装扮的对象。dress的过去式和过去分词都是dressed。', examples: [
        { en: 'He dressed up as a vampire for Halloween.', cn: '万圣节他化装成吸血鬼。' },
        { en: 'The children dressed up as pirates.', cn: '孩子们化装成海盗。' },
        { en: 'She was going to dress up as a ghost.', cn: '她打算化装成鬼。' }
      ] }
    ],
    patternDrills: [
      { pattern: 'After ___ had ___, ___ went ___.', substitutions: [
        { en: 'her husband / gone to work / she / upstairs', cn: '她丈夫 / 去上班 / 她 / 上楼' },
        { en: 'he / eaten breakfast / he / to school', cn: '他 / 吃完早饭 / 他 / 去学校' },
        { en: 'the rain / stopped / we / outside', cn: '雨 / 停了 / 我们 / 出去' }
      ] },
      { pattern: '___ was going to dress up as ___.', substitutions: [
        { en: 'She / a ghost', cn: '她 / 鬼' },
        { en: 'He / a pirate', cn: '他 / 海盗' },
        { en: 'They / clowns', cn: '他们 / 小丑' }
      ] }
    ],
    exercises: [
      { type: 'choice', question: 'After her husband _____ gone to work, she sent the children to school.', options: ['A. has', 'B. had', 'C. have', 'D. having'], answer: 'B', explanation: '过去完成时用had gone。' },
      { type: 'fill', question: 'She was going to dress _____ as a ghost. (化装)', answer: 'up', explanation: 'dress up as意为"化装成"。' },
      { type: 'judge', question: '"be going to" 只能表示计划，不能表示预测。', answer: '错误', explanation: 'be going to既可表示计划，也可根据迹象预测即将发生的事。' },
      { type: 'choice', question: 'Mrs. Richards was pleased _____ the costume.', options: ['A. at', 'B. for', 'C. with', 'D. by'], answer: 'C', explanation: 'be pleased with意为"对...满意"。' }
    ],
  },
  {
    id: 13,
    title: 'A noble gangster',
    titleCn: '贵族歹徒',
    text: [
      'There was a time when the owners of shops and businesses in Chicago had to pay large sums of money to gangsters in return for "protection."',
      'If the money was not paid promptly, the gangsters would quickly put a man out of business by destroying his shop.'
    ],
    textCn: [
      '曾有一段时间，芝加哥的店主和企业主不得不向歹徒支付大笔钱以换取"保护"。',
      '如果钱没有及时付清，歹徒就会通过毁坏商店让店主关门。'
    ],
    vocabulary: [
      { word: 'noble', phonetic: '/ˈnəʊbl/', meaning: '高贵的' },
      { word: 'gangster', phonetic: '/ˈɡæŋstə/', meaning: '歹徒' },
      { word: 'sum', phonetic: '/sʌm/', meaning: '金额' },
      { word: 'promptly', phonetic: '/ˈprɒmptli/', meaning: '迅速地' },
      { word: 'destroy', phonetic: '/dɪˈstrɔɪ/', meaning: '摧毁' },
      { word: 'operate', phonetic: '/ˈɒpəreɪt/', meaning: '经营' }
    ],
    notes: [
      '"a time when" 一段...的时期。',
      '"in return for" 作为回报。',
      '"out of business" 关门歇业。'
    ],
    tags: ['虚拟语气', '条件句'],
    difficulty: 5,
    summary: '芝加哥曾经有一段时间，店主们必须向歹徒支付保护费，否则商店就会被毁，连贵族也难逃此劫。',
    summaryEn: 'There was a time in Chicago when shop owners had to pay gangsters for protection, or their businesses would be destroyed, and even nobles were not spared.',
    sentenceExplanations: [
      { sentence: 'There was a time when the owners of shops and businesses in Chicago had to pay large sums of money to gangsters in return for "protection."', translation: '曾有一段时间，芝加哥的店主和企业主不得不向歹徒支付大笔钱以换取"保护"。', explanation: 'There was a time when...意为"曾有一段时间..."。when引导定语从句修饰time。in return for意为"作为...的回报"。had to表示"不得不"。' },
      { sentence: 'If the money was not paid promptly, the gangsters would quickly put a man out of business by destroying his shop.', translation: '如果钱没有及时付清，歹徒就会通过毁坏商店让店主关门。', explanation: 'If引导条件状语从句。would表示过去将来时。put...out of business意为"使...关门歇业"。by doing表示"通过做某事"。' },
      { sentence: 'There was a time when the owners of shops had to pay large sums of money.', translation: '曾有一段时间，店主们不得不支付大笔钱。', explanation: 'large sums of money意为"大笔钱"。had to表示不得不。' },
      { sentence: 'The gangsters would quickly put a man out of business by destroying his shop.', translation: '歹徒会通过毁坏商店让店主关门。', explanation: 'put out of business意为"使关门歇业"。by destroying是方式状语。' }
    ],
    grammarSections: [
      { title: 'There was a time when... 曾有一段时间...', content: '"There was a time when..."是常用句型，when引导定语从句修饰time。表示"曾经有一段...的时期"。', examples: [
        { en: 'There was a time when people lived without electricity.', cn: '曾有一段时间人们没有电生活。' },
        { en: 'There was a time when I believed in fairy tales.', cn: '曾有一段时间我相信童话。' },
        { en: 'There was a time when Chicago was ruled by gangsters.', cn: '曾有一段时间芝加哥被歹徒控制。' }
      ] },
      { title: 'put...out of business 使...关门歇业', content: '"put sb out of business"意为"使某人关门歇业、使某人失业"。business这里指"生意、企业"。', examples: [
        { en: 'The new law put many small shops out of business.', cn: '新法律使许多小店关门了。' },
        { en: 'Competition put him out of business.', cn: '竞争使他关门了。' },
        { en: 'The gangsters would put a man out of business.', cn: '歹徒会让人关门歇业。' }
      ] }
    ],
    patternDrills: [
      { pattern: 'There was a time when ___ had to ___.', substitutions: [
        { en: 'shop owners / pay gangsters', cn: '店主 / 付钱给歹徒' },
        { en: 'people / travel by horse', cn: '人们 / 骑马旅行' },
        { en: 'students / write by hand', cn: '学生 / 手写' }
      ] },
      { pattern: 'If ___ was/were not ___-ed, ___ would ___.', substitutions: [
        { en: 'the money / pay / the gangsters / destroy his shop', cn: '钱 / 付 / 歹徒 / 毁坏他的商店' },
        { en: 'the homework / finish / the teacher / punish him', cn: '作业 / 完成 / 老师 / 惩罚他' },
        { en: 'the rent / pay / the landlord / evict them', cn: '房租 / 付 / 房东 / 驱逐他们' }
      ] }
    ],
    exercises: [
      { type: 'choice', question: 'There was a time _____ shop owners had to pay gangsters.', options: ['A. which', 'B. when', 'C. where', 'D. that'], answer: 'B', explanation: 'when引导定语从句修饰time。' },
      { type: 'fill', question: 'They had to pay large _____ of money. (金额)', answer: 'sums', explanation: 'large sums of money意为"大笔钱"。' },
      { type: 'judge', question: '"put out of business" 意为"使关门歇业"。', answer: '正确', explanation: 'put sb out of business是固定搭配。' },
      { type: 'choice', question: 'The gangsters would put a man out of business _____ destroying his shop.', options: ['A. with', 'B. in', 'C. by', 'D. for'], answer: 'C', explanation: 'by doing表示"通过做某事"。' }
    ],
  },
  {
    id: 14,
    title: 'Fifty pence worth of trouble',
    titleCn: '五十便士的麻烦',
    text: [
      'Children always appreciate small gifts of money. Mum or Dad, of course, provide a regular supply of pocket money, but uncles and aunts are always a source of extra income.',
      'Only very thrifty children manage to fill up a money box.'
    ],
    textCn: [
      '孩子们总是喜欢得到一点零花钱。当然，爸爸妈妈定期给零花钱，但叔叔阿姨们总是额外收入的来源。',
      '只有非常节俭的孩子才能把存钱罐装满。'
    ],
    vocabulary: [
      { word: 'appreciate', phonetic: '/əˈpriːʃieɪt/', meaning: '欣赏，感激' },
      { word: 'regular', phonetic: '/ˈreɡjʊlə/', meaning: '定期的' },
      { word: 'pocket money', phonetic: '/ˈpɒkɪt ˈmʌni/', meaning: '零花钱' },
      { word: 'income', phonetic: '/ˈɪnkʌm/', meaning: '收入' },
      { word: 'thrifty', phonetic: '/ˈθrɪfti/', meaning: '节俭的' }
    ],
    notes: [
      '"go a long way" 很耐用。',
      '"manage to do" 设法做成。',
      '"fill up" 装满。'
    ],
    tags: ['长难句', '综合语法'],
    difficulty: 4,
    summary: '孩子们总是喜欢零花钱，但只有节俭的孩子才能把存钱罐装满，而存钱罐里的钱往往来之不易。',
    summaryEn: 'Children always appreciate pocket money, but only thrifty ones manage to fill up a money box, and the money inside often comes with great effort.',
    sentenceExplanations: [
      { sentence: 'Children always appreciate small gifts of money.', translation: '孩子们总是喜欢得到一点零花钱。', explanation: 'appreciate意为"感激、欣赏"，这里表示"喜欢得到"。small gifts of money指小额的金钱礼物。' },
      { sentence: 'Mum or Dad, of course, provide a regular supply of pocket money, but uncles and aunts are always a source of extra income.', translation: '当然，爸爸妈妈定期给零花钱，但叔叔阿姨们总是额外收入的来源。', explanation: 'provide意为"提供"。a regular supply of表示"定期供应"。a source of表示"...的来源"。' },
      { sentence: 'Only very thrifty children manage to fill up a money box.', translation: '只有非常节俭的孩子才能把存钱罐装满。', explanation: 'only在句首强调"只有"。manage to do意为"设法做成"。fill up意为"装满"。' },
      { sentence: 'Mum or Dad, of course, provide a regular supply of pocket money.', translation: '当然，爸爸妈妈定期给零花钱。', explanation: 'of course是插入语，用逗号隔开。provide sth表示提供某物。a regular supply of表示定期供应。' }
    ],
    grammarSections: [
      { title: 'manage to do 设法做成', content: '"manage to do"表示经过努力成功做到了某事，强调结果。与try to do不同，try只表示尝试，不一定成功。', examples: [
        { en: 'He managed to pass the exam.', cn: '他设法通过了考试。（成功了）' },
        { en: 'She managed to finish the work on time.', cn: '她设法按时完成了工作。' },
        { en: 'Only thrifty children manage to fill up a money box.', cn: '只有节俭的孩子才能把存钱罐装满。' }
      ] },
      { title: 'appreciate 感激；欣赏', content: '"appreciate"作及物动词，意为"感激、欣赏、理解"。后接名词或动名词，不接不定式。', examples: [
        { en: 'I appreciate your help.', cn: '我感激你的帮助。' },
        { en: 'Children appreciate small gifts of money.', cn: '孩子们喜欢得到零花钱。' },
        { en: 'I appreciate having been given the opportunity.', cn: '我很感激得到了这个机会。' }
      ] }
    ],
    patternDrills: [
      { pattern: '___ always appreciate(s) ___.', substitutions: [
        { en: 'Children / small gifts of money', cn: '孩子们 / 小额零花钱' },
        { en: 'I / your kindness', cn: '我 / 你的好意' },
        { en: 'She / good music', cn: '她 / 好的音乐' }
      ] },
      { pattern: 'Only ___ manage(s) to ___.', substitutions: [
        { en: 'thrifty children / fill up a money box', cn: '节俭的孩子 / 装满存钱罐' },
        { en: 'hardworking students / pass the exam', cn: '勤奋的学生 / 通过考试' },
        { en: 'the brave / survive', cn: '勇敢的人 / 幸存' }
      ] }
    ],
    exercises: [
      { type: 'choice', question: 'Children always _____ small gifts of money.', options: ['A. appreciate', 'B. approve', 'C. approach', 'D. appear'], answer: 'A', explanation: 'appreciate意为"喜欢、感激"。' },
      { type: 'fill', question: 'Only very thrifty children _____ to fill up a money box. (设法)', answer: 'manage', explanation: 'manage to do意为"设法做成"。' },
      { type: 'judge', question: '"manage to do" 和 "try to do" 意思完全相同。', answer: '错误', explanation: 'manage to do强调成功做到了，try to do只表示尝试，不一定成功。' },
      { type: 'choice', question: 'Uncles and aunts are always a _____ of extra income.', options: ['A. source', 'B. resource', 'C. course', 'D. cause'], answer: 'A', explanation: 'a source of意为"...的来源"。' }
    ],
  },
  {
    id: 15,
    title: 'The loss of the Titanic',
    titleCn: '泰坦尼克号的沉没',
    text: [
      'The great ship, Titanic, sailed for New York from Southampton on April 10th, 1912.',
      'She was carrying 1,316 passengers and a crew of 891.',
      'She was not only the largest ship that had ever been built, but was regarded as unsinkable.',
      'Four days after setting out, while the Titanic was sailing across the icy waters of the North Atlantic, a huge iceberg was suddenly spotted by a lookout.'
    ],
    textCn: [
      '巨轮泰坦尼克号于1912年4月10日从南安普敦起航驶往纽约。',
      '船上载有1316名乘客和891名船员。',
      '它不仅是当时建造的最大的船，而且被认为是不会沉没的。',
      '启航四天后，当泰坦尼克号正航行在北大西洋冰冷的水域上时，瞭望员突然发现了一座巨大的冰山。'
    ],
    vocabulary: [
      { word: 'Titanic', phonetic: '/taɪˈtænɪk/', meaning: '泰坦尼克号' },
      { word: 'passenger', phonetic: '/ˈpæsɪndʒə/', meaning: '乘客' },
      { word: 'crew', phonetic: '/kruː/', meaning: '全体船员' },
      { word: 'regard', phonetic: '/rɪˈɡɑːd/', meaning: '认为' },
      { word: 'unsinkable', phonetic: '/ʌnˈsɪŋkəbl/', meaning: '不会沉没的' },
      { word: 'icy', phonetic: '/ˈaɪsi/', meaning: '冰冷的' },
      { word: 'iceberg', phonetic: '/ˈaɪsbɜːɡ/', meaning: '冰山' },
      { word: 'lookout', phonetic: '/ˈlʊkaʊt/', meaning: '瞭望员' }
    ],
    notes: [
      '"not only...but (also)" 不仅...而且。',
      '过去完成时被动。',
      '"be regarded as" 被认为是。'
    ],
    tags: ['高级词汇', '综合运用'],
    difficulty: 4,
    summary: '泰坦尼克号是当时最大的船，被誉为"永不沉没"，但在首航中撞上冰山沉没，造成大量人员伤亡。',
    summaryEn: 'The Titanic, the largest ship ever built and deemed unsinkable, struck an iceberg on her maiden voyage and sank with great loss of life.',
    sentenceExplanations: [
      { sentence: 'She was not only the largest ship that had ever been built, but was regarded as unsinkable.', translation: '它不仅是当时建造的最大的船，而且被认为是不会沉没的。', explanation: 'not only...but (also)连接并列结构。that had ever been built是定语从句，用过去完成时表示"曾经"。be regarded as意为"被认为"。' },
      { sentence: 'Four days after setting out, while the Titanic was sailing across the icy waters of the North Atlantic, a huge iceberg was suddenly spotted by a lookout.', translation: '启航四天后，当泰坦尼克号正航行在北大西洋冰冷的水域上时，瞭望员突然发现了一座巨大的冰山。', explanation: 'while引导时间状语从句，表示主句动作在从句动作进行中发生。was spotted是被动语态。setting out是动名词短语作after的宾语。' },
      { sentence: 'The great ship, Titanic, sailed for New York from Southampton on April 10th, 1912.', translation: '巨轮泰坦尼克号于1912年4月10日从南安普敦起航驶往纽约。', explanation: 'sail for意为"启航前往"。Titanic是同位语，用逗号隔开补充说明the great ship。' },
      { sentence: 'She was carrying 1,316 passengers and a crew of 891.', translation: '船上载有1316名乘客和891名船员。', explanation: 'was carrying是过去进行时，表示当时正在载着。a crew of表示"一组/一批船员"。' }
    ],
    grammarSections: [
      { title: 'not only...but (also) 不仅...而且', content: '"not only...but (also)"连接两个并列成分，可以连接主语、谓语、宾语或句子。not only在句首时，前半句要用部分倒装。', examples: [
        { en: 'She was not only beautiful but also intelligent.', cn: '她不仅美丽而且聪明。' },
        { en: 'Not only did he come, but he also brought gifts.', cn: '他不仅来了，还带了礼物。' },
        { en: 'It is not only the largest but also the most expensive.', cn: '它不仅最大，而且最贵。' }
      ] },
      { title: 'be regarded as 被认为是', content: '"be regarded as"意为"被认为是"，后接名词或形容词。类似的表达有be considered as, be thought of as。', examples: [
        { en: 'He is regarded as a hero.', cn: '他被认为是英雄。' },
        { en: 'The ship was regarded as unsinkable.', cn: '这艘船被认为不会沉没。' },
        { en: 'She is considered as the best student.', cn: '她被认为是最好的学生。' }
      ] }
    ],
    patternDrills: [
      { pattern: '___ was not only the ___ that ___, but was regarded as ___.', substitutions: [
        { en: 'She / largest ship / had ever been built / unsinkable', cn: '它 / 最大的船 / 曾经建造的 / 不会沉没的' },
        { en: 'He / youngest person / had ever won / a genius', cn: '他 / 最年轻的人 / 曾经获胜的 / 天才' },
        { en: 'It / tallest building / had been designed / earthquake-proof', cn: '它 / 最高的建筑 / 被设计的 / 防震的' }
      ] },
      { pattern: 'While ___ was ___-ing across ___, ___ was spotted by ___.', substitutions: [
        { en: 'the ship / sail / the ocean / an iceberg / a lookout', cn: '船 / 航行 / 海洋 / 冰山 / 瞭望员' },
        { en: 'he / walk / the street / a friend / him', cn: '他 / 走 / 街道 / 朋友 / 他' },
        { en: 'we / drive / the highway / a deer / the driver', cn: '我们 / 开车 / 高速公路 / 鹿 / 司机' }
      ] }
    ],
    exercises: [
      { type: 'choice', question: 'She was not only the largest ship _____ had ever been built.', options: ['A. which', 'B. that', 'C. who', 'D. what'], answer: 'B', explanation: '先行词ship有最高级修饰时，定语从句用that引导。' },
      { type: 'fill', question: 'The ship was _____ as unsinkable. (认为)', answer: 'regarded', explanation: 'be regarded as意为"被认为是"。' },
      { type: 'judge', question: '"not only...but also" 可以连接两个并列的句子。', answer: '正确', explanation: 'not only...but also可以连接主语、谓语、宾语或整个句子。' },
      { type: 'choice', question: 'A huge iceberg was suddenly _____ by a lookout.', options: ['A. spot', 'B. spotted', 'C. spotting', 'D. spots'], answer: 'B', explanation: 'was spotted是被动语态，用过去分词。' }
    ],
  },
  {
    id: 16,
    title: 'The lark',
    titleCn: '云雀',
    text: [
      'A pair of larks had built their nest in a field of wheat.',
      'The farmer who owned the field came to see how the crop was growing.',
      'He was very pleased with it and said he would send his men to reap it the next day.',
      'The lark overheard him and was very alarmed.',
      'She told her young ones they would have to move house at once.',
      'But the young ones said the farmer had not yet sent his men.',
      'The lark said, "He who says a thing does not always do it."',
      'But she moved her family to a safer place.'
    ],
    textCn: [
      '',
      '',
      '',
      '',
      '',
      '',
      '',
      ''
    ],
    vocabulary: [
      { word: 'lark', phonetic: '/lɑːk/', meaning: '云雀' },
      { word: 'nest', phonetic: '/nest/', meaning: '巢' },
      { word: 'wheat', phonetic: '/wiːt/', meaning: '小麦' },
      { word: 'crop', phonetic: '/krɒp/', meaning: '庄稼' },
      { word: 'reap', phonetic: '/riːp/', meaning: '收割' },
      { word: 'overhear', phonetic: '/ˌəʊvəˈhɪə/', meaning: '无意中听到' },
      { word: 'alarmed', phonetic: '/əˈlɑːmd/', meaning: '惊恐的' },
      { word: 'safer', phonetic: '/ˈseɪfə/', meaning: '更安全的' }
    ],
    notes: [
      '"had built" 过去完成时——在农民来之前已经筑好巢。',
      '"was pleased with" 对……满意。',
      '"He who says a thing does not always do it" 说的人不一定做。'
    ],
    tags: ['寓言', '过去完成时'],
    difficulty: 3,
    summary: '云雀听到农民说要割麦子，虽然农民还没行动，但还是把家搬到了更安全的地方。',
    summaryEn: 'A lark overhears the farmer planning to reap the wheat and moves her family to safety.',
  },
  {
    id: 17,
    title: 'No one knows why',
    titleCn: '无人知晓其因',
    text: [
      'People have always been fascinated by strange coincidences.',
      'Some coincidences are so remarkable that they seem impossible to explain.',
      'A man once dreamed that his friend had been killed in a car accident.',
      'The next day, he learned that his friend had indeed died in a car crash at exactly the time of the dream.',
      'Scientists say that such coincidences are merely the result of probability.',
      'But many people believe they have a deeper meaning.',
      'No one really knows why they happen.'
    ],
    textCn: [
      '',
      '',
      '',
      '',
      '',
      '',
      ''
    ],
    vocabulary: [
      { word: 'coincidence', phonetic: '/kəʊˈɪnsɪdəns/', meaning: '巧合' },
      { word: 'remarkable', phonetic: '/rɪˈmɑːkəbl/', meaning: '非凡的' },
      { word: 'explain', phonetic: '/ɪkˈspleɪn/', meaning: '解释' },
      { word: 'accident', phonetic: '/ˈæksɪdənt/', meaning: '事故' },
      { word: 'probability', phonetic: '/ˌprɒbəˈbɪləti/', meaning: '概率' },
      { word: 'deeper', phonetic: '/ˈdiːpə/', meaning: '更深的' },
      { word: 'meaning', phonetic: '/ˈmiːnɪŋ/', meaning: '意义' },
      { word: 'fascinate', phonetic: '/ˈfæsɪneɪt/', meaning: '使着迷' }
    ],
    notes: [
      '"so... that..." 如此……以至于……。',
      '"the result of" ……的结果。',
      '"a deeper meaning" 更深层的意义。'
    ],
    tags: ['神秘', '概率'],
    difficulty: 3,
    summary: '探讨令人费解的巧合——科学家说是概率，但人们相信有更深的意义。',
    summaryEn: 'Explores mysterious coincidences — scientists say probability, but people believe in deeper meaning.',
  },
  {
    id: 18,
    title: 'The Channel Tunnel',
    titleCn: '英吉利海峡隧道',
    text: [
      'The idea of a tunnel under the English Channel was first proposed in 1802.',
      'It was not until 1988 that construction actually began.',
      'The tunnel was completed in 1994.',
      'It is 50 kilometres long and runs beneath the sea bed.',
      'The tunnel connects England and France.',
      'It carries both passenger trains and freight trains.',
      'The journey from London to Paris now takes just three hours.',
      'It is one of the greatest engineering achievements of the twentieth century.'
    ],
    textCn: [
      '',
      '',
      '',
      '',
      '',
      '',
      '',
      ''
    ],
    vocabulary: [
      { word: 'tunnel', phonetic: '/ˈtʌnl/', meaning: '隧道' },
      { word: 'channel', phonetic: '/ˈtʃænl/', meaning: '海峡' },
      { word: 'propose', phonetic: '/prəˈpəʊz/', meaning: '提议' },
      { word: 'construction', phonetic: '/kənˈstrʌkʃn/', meaning: '建设' },
      { word: 'beneath', phonetic: '/bɪˈniːθ/', meaning: '在……下面' },
      { word: 'connect', phonetic: '/kəˈnekt/', meaning: '连接' },
      { word: 'freight', phonetic: '/freɪt/', meaning: '货运' },
      { word: 'engineering', phonetic: '/ˌendʒɪˈnɪərɪŋ/', meaning: '工程' }
    ],
    notes: [
      '"It was not until... that..." 直到……才……。强调句型。',
      '"runs beneath" 在……下面延伸。',
      '"one of the greatest" 最伟大的之一。'
    ],
    tags: ['工程', '历史'],
    difficulty: 3,
    summary: '英吉利海峡隧道——从1802年构想到1994年建成，连接英法的伟大工程。',
    summaryEn: 'The Channel Tunnel — from 1802 proposal to 1994 completion, a great engineering achievement.',
  },
  {
    id: 19,
    title: 'Daniel Mendoza',
    titleCn: '丹尼尔·门多萨',
    text: [
      'Boxing matches were very popular in England two hundred years ago.',
      'In those days, boxers fought with bare fists.',
      'Daniel Mendoza was a famous boxer of that period.',
      'He was the first boxer to introduce a scientific style of fighting.',
      'Before Mendoza, boxing was simply a matter of brute force.',
      'He changed boxing into a sport that required skill and strategy.',
      'He became very rich and famous.',
      'His fights attracted huge crowds.'
    ],
    textCn: [
      '',
      '',
      '',
      '',
      '',
      '',
      '',
      ''
    ],
    vocabulary: [
      { word: 'boxing', phonetic: '/ˈbɒksɪŋ/', meaning: '拳击' },
      { word: 'bare', phonetic: '/beə/', meaning: '赤裸的' },
      { word: 'fist', phonetic: '/fɪst/', meaning: '拳头' },
      { word: 'scientific', phonetic: '/ˌsaɪənˈtɪfɪk/', meaning: '科学的' },
      { word: 'brute', phonetic: '/bruːt/', meaning: '蛮力的' },
      { word: 'strategy', phonetic: '/ˈstrætədʒi/', meaning: '策略' },
      { word: 'skill', phonetic: '/skɪl/', meaning: '技巧' },
      { word: 'attract', phonetic: '/əˈtrækt/', meaning: '吸引' },
      { word: 'crowd', phonetic: '/kraʊd/', meaning: '人群' }
    ],
    notes: [
      '"the first to" 第一个做……的。',
      '"a matter of" ……的问题。',
      '"changed... into..." 把……变成……。'
    ],
    tags: ['体育', '人物传记'],
    difficulty: 3,
    summary: '丹尼尔·门多萨——将拳击从蛮力运动变成需要技巧和策略的科学运动。',
    summaryEn: 'Daniel Mendoza transformed boxing from brute force into a sport of skill and strategy.',
  },
  {
    id: 20,
    title: 'By heart',
    titleCn: '凭记忆',
    text: [
      'Some plays are so successful that they run for years on end.',
      'The actors in long-running plays have to say the same lines night after night.',
      'One actor said he could say his lines backwards if necessary.',
      'He had been saying them for so long that they were engraved on his memory.',
      'But one night, something unexpected happened.',
      'He forgot his lines completely.',
      'He stood on the stage in silence for several seconds.',
      'Then he said, "I\'m sorry, but I seem to have forgotten my lines."'
    ],
    textCn: [
      '',
      '',
      '',
      '',
      '',
      '',
      '',
      ''
    ],
    vocabulary: [
      { word: 'lines', phonetic: '/laɪnz/', meaning: '台词' },
      { word: 'backwards', phonetic: '/ˈbækwədz/', meaning: '倒着' },
      { word: 'engrave', phonetic: '/ɪnˈɡreɪv/', meaning: '铭刻' },
      { word: 'memory', phonetic: '/ˈmeməri/', meaning: '记忆' },
      { word: 'unexpected', phonetic: '/ˌʌnɪkˈspektɪd/', meaning: '意外的' },
      { word: 'completely', phonetic: '/kəmˈpliːtli/', meaning: '完全地' },
      { word: 'stage', phonetic: '/steɪdʒ/', meaning: '舞台' },
      { word: 'silence', phonetic: '/ˈsaɪləns/', meaning: '沉默' }
    ],
    notes: [
      '"on end" 连续地。',
      '"night after night" 一夜又一夜。',
      '"engraved on my memory" 铭刻在记忆中。'
    ],
    tags: ['戏剧', '幽默'],
    difficulty: 3,
    summary: '一个演员背台词背了多年，却在某晚完全忘词的尴尬故事。',
    summaryEn: 'An actor who knew his lines perfectly for years suddenly forgets them one night.',
  },
  {
    id: 21,
    title: 'A skeleton in the cupboard',
    titleCn: '家丑',
    text: [
      'We often read in novels how a seemingly respectable family has a terrible secret.',
      'The secret is usually called "a skeleton in the cupboard".',
      'Every family has its own secrets.',
      'Some secrets are so terrible that they are never revealed.',
      'The expression comes from the idea that everyone has a skeleton hidden away somewhere.',
      'It is a reminder that appearances can be deceptive.',
      'What we see on the surface may not be the truth.'
    ],
    textCn: [
      '',
      '',
      '',
      '',
      '',
      '',
      ''
    ],
    vocabulary: [
      { word: 'skeleton', phonetic: '/ˈskelɪtn/', meaning: '骨架' },
      { word: 'cupboard', phonetic: '/ˈkʌbəd/', meaning: '柜子' },
      { word: 'seemingly', phonetic: '/ˈsiːmɪŋli/', meaning: '表面上' },
      { word: 'respectable', phonetic: '/rɪˈspektəbl/', meaning: '体面的' },
      { word: 'terrible', phonetic: '/ˈterəbl/', meaning: '可怕的' },
      { word: 'reveal', phonetic: '/rɪˈviːl/', meaning: '揭露' },
      { word: 'appearance', phonetic: '/əˈpɪərəns/', meaning: '外表' },
      { word: 'deceptive', phonetic: '/dɪˈseptɪv/', meaning: '有欺骗性的' }
    ],
    notes: [
      '"a skeleton in the cupboard" 家丑/秘密。',
      '"appearances can be deceptive" 外表可能是骗人的。',
      '"hidden away" 藏起来。'
    ],
    tags: ['习语', '人生哲理'],
    difficulty: 3,
    summary: '每个家庭都有秘密——"衣柜里的骷髅"提醒我们外表可能是骗人的。',
    summaryEn: 'Every family has secrets — "a skeleton in the cupboard" reminds us appearances can be deceptive.',
  },
  {
    id: 22,
    title: 'A day to remember',
    titleCn: '难忘的一天',
    text: [
      'We have all experienced days when everything goes wrong.',
      'A day may begin well enough, but suddenly everything seems to get out of control.',
      'It is as if a single bad event can trigger a chain reaction.',
      'One morning, a man left his house and realized he had forgotten his keys.',
      'He went back to get them and knocked over a vase.',
      'While cleaning up the vase, he cut his finger.',
      'By the time he left the house again, he was late for work.',
      'He said it was the worst day of his life.'
    ],
    textCn: [
      '',
      '',
      '',
      '',
      '',
      '',
      '',
      ''
    ],
    vocabulary: [
      { word: 'experience', phonetic: '/ɪkˈspɪəriəns/', meaning: '经历' },
      { word: 'control', phonetic: '/kənˈtrəʊl/', meaning: '控制' },
      { word: 'trigger', phonetic: '/ˈtrɪɡə/', meaning: '触发' },
      { word: 'chain reaction', phonetic: '/tʃeɪn riˈækʃn/', meaning: '连锁反应' },
      { word: 'knock over', phonetic: '/nɒk ˈəʊvə/', meaning: '打翻' },
      { word: 'vase', phonetic: '/vɑːz/', meaning: '花瓶' },
      { word: 'clean up', phonetic: '/kliːn ʌp/', meaning: '清理' },
      { word: 'worst', phonetic: '/wɜːst/', meaning: '最糟糕的' }
    ],
    notes: [
      '"get out of control" 失控。',
      '"as if" 好像。',
      '"a chain reaction" 连锁反应。'
    ],
    tags: ['日常', '叙事'],
    difficulty: 3,
    summary: '一个什么都不顺的早晨——忘带钥匙、打翻花瓶、割伤手指、上班迟到。',
    summaryEn: 'A morning when everything goes wrong — forgotten keys, broken vase, cut finger, late for work.',
  },
  {
    id: 23,
    title: 'Wanted: a large biscuit tin',
    titleCn: '求购：一个大饼干听',
    text: [
      'No one can avoid being influenced by advertisements.',
      'Ads are designed to make us want things we do not need.',
      'A food company once advertised for a large biscuit tin.',
      'They received hundreds of letters from people who wanted to sell their old tins.',
      'But the company was not really looking for a tin.',
      'They wanted to show that their biscuits were so popular that they needed a bigger tin.',
      'It was a clever advertising trick.'
    ],
    textCn: [
      '',
      '',
      '',
      '',
      '',
      '',
      ''
    ],
    vocabulary: [
      { word: 'avoid', phonetic: '/əˈvɔɪd/', meaning: '避免' },
      { word: 'influence', phonetic: '/ˈɪnfluəns/', meaning: '影响' },
      { word: 'advertise', phonetic: '/ˈædvətaɪz/', meaning: '做广告' },
      { word: 'receive', phonetic: '/rɪˈsiːv/', meaning: '收到' },
      { word: 'clever', phonetic: '/ˈklevə/', meaning: '聪明的' },
      { word: 'trick', phonetic: '/trɪk/', meaning: '伎俩' },
      { word: 'popular', phonetic: '/ˈpɒpjələ/', meaning: '受欢迎的' },
      { word: 'biscuit', phonetic: '/ˈbɪskɪt/', meaning: '饼干' }
    ],
    notes: [
      '"cannot avoid being" 无法避免被……。',
      '"advertised for" 登广告求购。',
      '"so... that..." 如此……以至于……。'
    ],
    tags: ['广告', '商业'],
    difficulty: 3,
    summary: '一家食品公司登广告求购大饼干听——其实是为了宣传饼干太受欢迎。',
    summaryEn: 'A food company\'s clever ad for a big biscuit tin was really about promoting their popular biscuits.',
  },
  {
    id: 24,
    title: 'Nothing to sell, nothing to buy',
    titleCn: '不卖也不买',
    text: [
      'It has been said that everyone lives by selling something.',
      'The teacher sells knowledge, the doctor sells skill, and the artist sells beauty.',
      'But there are some things that money cannot buy.',
      'Love, friendship, and peace of mind have no price tag.',
      'A man may be very rich but still feel unhappy.',
      'True wealth lies not in what we have, but in what we are.',
      'The person who has nothing to sell and nothing to buy may be the richest of all.'
    ],
    textCn: [
      '',
      '',
      '',
      '',
      '',
      '',
      ''
    ],
    vocabulary: [
      { word: 'sell', phonetic: '/sel/', meaning: '卖' },
      { word: 'knowledge', phonetic: '/ˈnɒlɪdʒ/', meaning: '知识' },
      { word: 'skill', phonetic: '/skɪl/', meaning: '技能' },
      { word: 'friendship', phonetic: '/ˈfrendʃɪp/', meaning: '友谊' },
      { word: 'peace of mind', phonetic: '/piːs ɒv maɪnd/', meaning: '内心的平静' },
      { word: 'wealth', phonetic: '/welθ/', meaning: '财富' },
      { word: 'price tag', phonetic: '/praɪs tæɡ/', meaning: '价格标签' },
      { word: 'rich', phonetic: '/rɪtʃ/', meaning: '富有的' }
    ],
    notes: [
      '"lives by selling" 靠卖……为生。',
      '"lies not in... but in..." 不在于……而在于……。',
      '"peace of mind" 内心平静。'
    ],
    tags: ['人生哲理', '议论文'],
    difficulty: 3,
    summary: '每个人都靠卖什么为生——但真正的财富不在于拥有什么，而在于是什么样的人。',
    summaryEn: 'Everyone lives by selling something — but true wealth lies in what we are, not what we have.',
  },
  {
    id: 25,
    title: 'Five pounds too dear',
    titleCn: '贵了五英镑',
    text: [
      'Small boats loaded with goods often have to cross the English Channel.',
      'The weather can be very dangerous.',
      'A man once sailed across the Channel in a small boat.',
      'When he arrived in England, he was very tired.',
      'He went to a hotel and asked for a room.',
      'The receptionist said the room cost twenty pounds.',
      'The man said he had only fifteen pounds.',
      'The receptionist agreed to let him have the room for fifteen pounds.',
      'Later, the man told a friend about it.',
      'His friend said, "You paid five pounds too dear. The room is only worth ten pounds."'
    ],
    textCn: [
      '',
      '',
      '',
      '',
      '',
      '',
      '',
      '',
      '',
      ''
    ],
    vocabulary: [
      { word: 'loaded', phonetic: '/ˈləʊdɪd/', meaning: '装载的' },
      { word: 'sail', phonetic: '/seɪl/', meaning: '航行' },
      { word: 'receptionist', phonetic: '/rɪˈsepʃənɪst/', meaning: '接待员' },
      { word: 'agree', phonetic: '/əˈɡriː/', meaning: '同意' },
      { word: 'dear', phonetic: '/dɪə/', meaning: '昂贵的' },
      { word: 'worth', phonetic: '/wɜːθ/', meaning: '值' },
      { word: 'pound', phonetic: '/paʊnd/', meaning: '英镑' },
      { word: 'cross', phonetic: '/krɒs/', meaning: '横渡' }
    ],
    notes: [
      '"loaded with" 装载着……。',
      '"asked for a room" 要了一间房。',
      '"five pounds too dear" 贵了五英镑。'
    ],
    tags: ['旅行', '幽默'],
    difficulty: 3,
    summary: '一个人花了十五英镑住旅馆，朋友说贵了五英镑——房间只值十英镑。',
    summaryEn: 'A man overpays for a hotel room — his friend says it was five pounds too dear.',
  },
  {
    id: 26,
    title: 'Funny or not?',
    titleCn: '是否可笑？',
    text: [
      'Some things are funny in one country but not in another.',
      'Humour depends on culture and context.',
      'What makes people laugh in England may not make people laugh in Japan.',
      'A joke about the weather may be funny in England because the weather is always changing.',
      'But the same joke would not be funny in a country with a stable climate.',
      'Understanding humour in a foreign language is one of the hardest things to learn.'
    ],
    textCn: [
      '',
      '',
      '',
      '',
      '',
      ''
    ],
    vocabulary: [
      { word: 'funny', phonetic: '/ˈfʌni/', meaning: '好笑的' },
      { word: 'humour', phonetic: '/ˈhjuːmə/', meaning: '幽默' },
      { word: 'context', phonetic: '/ˈkɒntekst/', meaning: '语境' },
      { word: 'joke', phonetic: '/dʒəʊk/', meaning: '笑话' },
      { word: 'stable', phonetic: '/ˈsteɪbl/', meaning: '稳定的' },
      { word: 'climate', phonetic: '/ˈklaɪmət/', meaning: '气候' },
      { word: 'foreign', phonetic: '/ˈfɒrən/', meaning: '外国的' },
      { word: 'hardest', phonetic: '/ˈhɑːdɪst/', meaning: '最难的' }
    ],
    notes: [
      '"depends on" 取决于。',
      '"one of the hardest" 最难的之一。',
      '"makes people laugh" 让人发笑。'
    ],
    tags: ['文化', '幽默'],
    difficulty: 3,
    summary: '幽默因文化而异——在一个国家好笑的事情在另一个国家可能并不好笑。',
    summaryEn: 'Humour varies by culture — what\'s funny in one country may not be in another.',
  },
  {
    id: 27,
    title: 'A lovable eccentric',
    titleCn: '可爱的怪人',
    text: [
      'An eccentric is someone who behaves in an unusual way.',
      'Eccentrics are often very kind and generous people.',
      'They do not care what other people think of them.',
      'One eccentric man in London always wore a top hat and a long coat, even in summer.',
      'He carried an umbrella everywhere, even on the sunniest days.',
      'People smiled at him, but they liked him because he was always cheerful.'
    ],
    textCn: [
      '',
      '',
      '',
      '',
      '',
      ''
    ],
    vocabulary: [
      { word: 'eccentric', phonetic: '/ɪkˈsentrɪk/', meaning: '怪人' },
      { word: 'behave', phonetic: '/bɪˈheɪv/', meaning: '行为' },
      { word: 'generous', phonetic: '/ˈdʒenərəs/', meaning: '慷慨的' },
      { word: 'cheerful', phonetic: '/ˈtʃɪəfl/', meaning: '快乐的' },
      { word: 'umbrella', phonetic: '/ʌmˈbrelə/', meaning: '伞' },
      { word: 'sunny', phonetic: '/ˈsʌni/', meaning: '阳光明媚的' },
      { word: 'top hat', phonetic: '/tɒp hæt/', meaning: '大礼帽' },
      { word: 'wear', phonetic: '/weə/', meaning: '穿' }
    ],
    notes: [
      '"does not care what" 不在乎什么。',
      '"even on the sunniest days" 即使在最晴朗的日子。',
      '"smiled at him" 对他微笑。'
    ],
    tags: ['人物描写', '性格'],
    difficulty: 3,
    summary: '描述一个可爱的怪人——总是戴大礼帽、带伞，不管天气如何。',
    summaryEn: 'A lovable eccentric in London always wears a top hat and carries an umbrella, rain or shine.',
  },
  {
    id: 28,
    title: 'A happy discovery',
    titleCn: '愉快的发现',
    text: [
      'A man was walking along a beach when he found a bottle.',
      'Inside the bottle was a piece of paper.',
      'It was a letter written by a sailor fifty years ago.',
      'The letter said the sailor had been shipwrecked on a deserted island.',
      'He had put the letter in the bottle and thrown it into the sea.',
      'The man who found the letter was very excited.',
      'He tried to find the sailor, but he had died many years before.',
      'The letter was donated to a museum.'
    ],
    textCn: [
      '',
      '',
      '',
      '',
      '',
      '',
      '',
      ''
    ],
    vocabulary: [
      { word: 'beach', phonetic: '/biːtʃ/', meaning: '海滩' },
      { word: 'sailor', phonetic: '/ˈseɪlə/', meaning: '水手' },
      { word: 'shipwrecked', phonetic: '/ˈʃɪprekt/', meaning: '遇难的' },
      { word: 'deserted', phonetic: '/dɪˈzɜːtɪd/', meaning: '荒无人烟的' },
      { word: 'excited', phonetic: '/ɪkˈsaɪtɪd/', meaning: '兴奋的' },
      { word: 'donate', phonetic: '/dəʊˈneɪt/', meaning: '捐赠' },
      { word: 'museum', phonetic: '/mjuˈziːəm/', meaning: '博物馆' },
      { word: 'bottle', phonetic: '/ˈbɒtl/', meaning: '瓶子' }
    ],
    notes: [
      '"was walking... when" 正在走……突然。',
      '"thrown it into" 把它扔进。',
      '"many years before" 许多年前。'
    ],
    tags: ['发现', '故事'],
    difficulty: 3,
    summary: '一个男人在海滩上发现了一个50年前的漂流瓶——里面是一位遇难水手的信。',
    summaryEn: 'A man finds a 50-year-old message in a bottle from a shipwrecked sailor.',
  },
  {
    id: 29,
    title: 'A trip to the Moon',
    titleCn: '月球之旅',
    text: [
      'The first manned mission to the Moon was Apollo 11.',
      'It was launched on July 16, 1969.',
      'The crew consisted of three astronauts: Neil Armstrong, Buzz Aldrin, and Michael Collins.',
      'On July 20, Neil Armstrong became the first person to walk on the Moon.',
      'He said, "That\'s one small step for man, one giant leap for mankind."',
      'Buzz Aldrin joined him on the surface twenty minutes later.',
      'Michael Collins remained in orbit around the Moon.',
      'The mission returned safely to Earth on July 24.'
    ],
    textCn: [
      '',
      '',
      '',
      '',
      '',
      '',
      '',
      ''
    ],
    vocabulary: [
      { word: 'mission', phonetic: '/ˈmɪʃn/', meaning: '任务' },
      { word: 'launch', phonetic: '/lɔːntʃ/', meaning: '发射' },
      { word: 'crew', phonetic: '/kruː/', meaning: '全体人员' },
      { word: 'astronaut', phonetic: '/ˈæstrənɔːt/', meaning: '宇航员' },
      { word: 'giant', phonetic: '/ˈdʒaɪənt/', meaning: '巨大的' },
      { word: 'leap', phonetic: '/liːp/', meaning: '飞跃' },
      { word: 'mankind', phonetic: '/mænˈkaɪnd/', meaning: '人类' },
      { word: 'orbit', phonetic: '/ˈɔːbɪt/', meaning: '轨道' }
    ],
    notes: [
      '"the first person to walk" 第一个行走的人。',
      '"one small step for man" 个人的一小步。',
      '"remained in orbit" 留在轨道上。'
    ],
    tags: ['太空', '历史'],
    difficulty: 3,
    summary: '阿波罗11号登月——阿姆斯特朗成为第一个在月球上行走的人。',
    summaryEn: 'Apollo 11 — Neil Armstrong becomes the first person to walk on the Moon.',
  },
  {
    id: 30,
    title: 'The death of a ghost',
    titleCn: '幽灵之死',
    text: [
      'For years, villagers believed that an old house was haunted.',
      'They said a ghost walked the rooms at night.',
      'Strange noises could be heard, and lights were seen in the windows.',
      'A young man decided to investigate.',
      'He spent a night in the house.',
      'In the morning, he found the "ghost" was actually an old clock.',
      'The clock had a mechanism that made it chime at midnight.',
      'The "ghost" was dead.'
    ],
    textCn: [
      '',
      '',
      '',
      '',
      '',
      '',
      '',
      ''
    ],
    vocabulary: [
      { word: 'haunted', phonetic: '/ˈhɔːntɪd/', meaning: '闹鬼的' },
      { word: 'ghost', phonetic: '/ɡəʊst/', meaning: '幽灵' },
      { word: 'investigate', phonetic: '/ɪnˈvestɪɡeɪt/', meaning: '调查' },
      { word: 'mechanism', phonetic: '/ˈmekənɪzəm/', meaning: '机械装置' },
      { word: 'chime', phonetic: '/tʃaɪm/', meaning: '鸣响' },
      { word: 'midnight', phonetic: '/ˈmɪdnaɪt/', meaning: '午夜' },
      { word: 'actually', phonetic: '/ˈæktʃuəli/', meaning: '实际上' },
      { word: 'dead', phonetic: '/ded/', meaning: '死的' }
    ],
    notes: [
      '"believed that" 相信……。',
      '"decided to investigate" 决定调查。',
      '"made it chime" 让它鸣响。使役用法。'
    ],
    tags: ['悬疑', '故事'],
    difficulty: 3,
    summary: '村里的"幽灵"原来是一台老钟——它的机械装置让它在午夜鸣响。',
    summaryEn: 'The village "ghost" turns out to be an old clock that chimes at midnight.',
  },
  {
    id: 31,
    title: 'A noble gangster',
    titleCn: '高尚的歹徒',
    text: [
      'There have been many famous gangsters in history.',
      'Some were cruel and violent, but others were surprisingly noble.',
      'One gangster in the 1920s robbed only the rich.',
      'He gave most of the money to the poor.',
      'People called him "Robin Hood".',
      'The police tried to catch him for years.',
      'When they finally caught him, many people were sad.',
      'They said he was more honest than many politicians.'
    ],
    textCn: [
      '',
      '',
      '',
      '',
      '',
      '',
      '',
      ''
    ],
    vocabulary: [
      { word: 'gangster', phonetic: '/ˈɡæŋstə/', meaning: '歹徒' },
      { word: 'cruel', phonetic: '/ˈkruːəl/', meaning: '残忍的' },
      { word: 'violent', phonetic: '/ˈvaɪələnt/', meaning: '暴力的' },
      { word: 'noble', phonetic: '/ˈnəʊbl/', meaning: '高尚的' },
      { word: 'rob', phonetic: '/rɒb/', meaning: '抢劫' },
      { word: 'politician', phonetic: '/ˌpɒləˈtɪʃn/', meaning: '政客' },
      { word: 'honest', phonetic: '/ˈɒnɪst/', meaning: '诚实的' },
      { word: 'finally', phonetic: '/ˈfaɪnəli/', meaning: '最终' }
    ],
    notes: [
      '"there have been" 现在完成时——曾经有过。',
      '"gave... to the poor" 把……给穷人。',
      '"more honest than" 比……更诚实。比较级。'
    ],
    tags: ['历史人物', '道德'],
    difficulty: 3,
    summary: '一个高尚的歹徒——只抢富人，把钱分给穷人，被称为"罗宾汉"。',
    summaryEn: 'A noble gangster who robbed only the rich and gave to the poor, called "Robin Hood".',
  },
  {
    id: 32,
    title: 'The Westhaven Express',
    titleCn: '韦斯特海文快车',
    text: [
      'A man decided to take the express train to Westhaven.',
      'The timetable said the journey would take one hour.',
      'But the train stopped at every station.',
      'It took nearly three hours to reach Westhaven.',
      'The man was very angry.',
      'He complained to the stationmaster.',
      'The stationmaster said, "This is the express. The ordinary train takes five hours."',
      'The man said, "Then I\'d hate to travel on the ordinary train!"'
    ],
    textCn: [
      '',
      '',
      '',
      '',
      '',
      '',
      '',
      ''
    ],
    vocabulary: [
      { word: 'express', phonetic: '/ɪkˈspres/', meaning: '快车' },
      { word: 'timetable', phonetic: '/ˈtaɪmteɪbl/', meaning: '时刻表' },
      { word: 'stationmaster', phonetic: '/ˈsteɪʃnmɑːstə/', meaning: '站长' },
      { word: 'ordinary', phonetic: '/ˈɔːdnri/', meaning: '普通的' },
      { word: 'complain', phonetic: '/kəmˈpleɪn/', meaning: '抱怨' },
      { word: 'nearly', phonetic: '/ˈnɪəli/', meaning: '将近' },
      { word: 'journey', phonetic: '/ˈdʒɜːni/', meaning: '旅程' },
      { word: 'hate', phonetic: '/heɪt/', meaning: '讨厌' }
    ],
    notes: [
      '"take the express train" 乘快车。',
      '"complained to" 向……抱怨。',
      '"I\'d hate to" 我讨厌……。虚拟语气。'
    ],
    tags: ['旅行', '幽默'],
    difficulty: 3,
    summary: '快车停了每一站——站长说普通车还要更慢。',
    summaryEn: 'The "express" train stops everywhere — the ordinary train takes even longer.',
  },
  {
    id: 33,
    title: 'The first calendar',
    titleCn: '最早的日历',
    text: [
      'The calendar is one of the most useful inventions.',
      'The earliest calendars were based on the phases of the moon.',
      'A lunar month is about 29 and a half days.',
      'But a year of 12 lunar months is about 11 days shorter than a solar year.',
      'This means the seasons gradually shift.',
      'The ancient Egyptians developed a solar calendar of 365 days.',
      'They added an extra day every four years.',
      'Our modern calendar is based on this system.'
    ],
    textCn: [
      '',
      '',
      '',
      '',
      '',
      '',
      '',
      ''
    ],
    vocabulary: [
      { word: 'calendar', phonetic: '/ˈkælɪndə/', meaning: '日历' },
      { word: 'phase', phonetic: '/feɪz/', meaning: '阶段' },
      { word: 'lunar', phonetic: '/ˈluːnə/', meaning: '月球的' },
      { word: 'solar', phonetic: '/ˈsəʊlə/', meaning: '太阳的' },
      { word: 'gradually', phonetic: '/ˈɡrædʒuəli/', meaning: '逐渐地' },
      { word: 'shift', phonetic: '/ʃɪft/', meaning: '移动' },
      { word: 'ancient', phonetic: '/ˈeɪnʃənt/', meaning: '古代的' },
      { word: 'extra', phonetic: '/ˈekstrə/', meaning: '额外的' }
    ],
    notes: [
      '"based on" 基于。',
      '"about 11 days shorter" 大约短11天。比较级。',
      '"an extra day" 额外的一天。'
    ],
    tags: ['历史', '历法'],
    difficulty: 3,
    summary: '日历的发展——从最早的阴历到古埃及的365天阳历。',
    summaryEn: 'The development of calendars — from early lunar calendars to the Egyptian 365-day solar year.',
  },
  {
    id: 34,
    title: 'Justice',
    titleCn: '正义',
    text: [
      'Justice is one of the most important concepts in any society.',
      'It means that everyone is treated fairly and equally.',
      'In most countries, there is a legal system to ensure justice.',
      'People who break the law are tried in courts of law.',
      'A judge and jury decide whether the accused is guilty or innocent.',
      'If found guilty, the person is punished according to the law.',
      'The system is not perfect, but it is the best we have.'
    ],
    textCn: [
      '',
      '',
      '',
      '',
      '',
      '',
      ''
    ],
    vocabulary: [
      { word: 'justice', phonetic: '/ˈdʒʌstɪs/', meaning: '正义' },
      { word: 'concept', phonetic: '/ˈkɒnsept/', meaning: '概念' },
      { word: 'fairly', phonetic: '/ˈfeəli/', meaning: '公平地' },
      { word: 'legal', phonetic: '/ˈliːɡl/', meaning: '法律的' },
      { word: 'ensure', phonetic: '/ɪnˈʃʊə/', meaning: '确保' },
      { word: 'judge', phonetic: '/dʒʌdʒ/', meaning: '法官' },
      { word: 'guilty', phonetic: '/ˈɡɪlti/', meaning: '有罪的' },
      { word: 'innocent', phonetic: '/ˈɪnəsnt/', meaning: '无辜的' },
      { word: 'punish', phonetic: '/ˈpʌnɪʃ/', meaning: '惩罚' }
    ],
    notes: [
      '"treated fairly" 被公平对待。',
      '"according to" 根据。',
      '"found guilty" 被判定有罪。'
    ],
    tags: ['法律', '社会'],
    difficulty: 3,
    summary: '正义是社会的基石——法律系统确保每个人被公平对待。',
    summaryEn: 'Justice is the foundation of society — the legal system ensures fair treatment for all.',
  },
  {
    id: 35,
    title: 'The Olympic Games',
    titleCn: '奥林匹克运动会',
    text: [
      'The Olympic Games are held every four years.',
      'They were first held in ancient Greece in 776 BC.',
      'The modern Olympics began in 1896 in Athens.',
      'Athletes from over 200 countries now compete.',
      'The Games begin with the opening ceremony and lighting of the Olympic flame.',
      'Gold, silver, and bronze medals are awarded to the top three finishers.',
      'The Games represent the ideals of peace, friendship, and fair competition.'
    ],
    textCn: [
      '',
      '',
      '',
      '',
      '',
      '',
      ''
    ],
    vocabulary: [
      { word: 'ancient', phonetic: '/ˈeɪnʃənt/', meaning: '古代的' },
      { word: 'Greece', phonetic: '/ɡriːs/', meaning: '希腊' },
      { word: 'Athens', phonetic: '/ˈæθɪnz/', meaning: '雅典' },
      { word: 'compete', phonetic: '/kəmˈpiːt/', meaning: '竞争' },
      { word: 'ceremony', phonetic: '/ˈserəməni/', meaning: '仪式' },
      { word: 'flame', phonetic: '/fleɪm/', meaning: '火焰' },
      { word: 'award', phonetic: '/əˈwɔːd/', meaning: '授予' },
      { word: 'ideal', phonetic: '/aɪˈdɪəl/', meaning: '理想' },
      { word: 'competition', phonetic: '/ˌkɒmpəˈtɪʃn/', meaning: '竞争' }
    ],
    notes: [
      '"every four years" 每四年。',
      '"began in 1896" 始于1896年。',
      '"represent the ideals of" 代表……的理想。'
    ],
    tags: ['体育', '历史'],
    difficulty: 3,
    summary: '奥林匹克运动会——从古希腊到现代，代表和平、友谊和公平竞争。',
    summaryEn: 'The Olympic Games — from ancient Greece to modern times, representing peace and fair competition.',
  },
  {
    id: 36,
    title: 'A spot of bother',
    titleCn: '一点小麻烦',
    text: [
      'An old lady returned home from shopping to find she had left her key inside.',
      'She called a locksmith, who arrived quickly.',
      'The locksmith opened the door in just a few minutes.',
      'The old lady was very grateful.',
      'She invited him in for a cup of tea.',
      'While they were drinking tea, the locksmith noticed something strange.',
      'The old lady\'s cat was sitting on a chair — but it was not her cat.',
      'She had entered the wrong house!'
    ],
    textCn: [
      '',
      '',
      '',
      '',
      '',
      '',
      '',
      ''
    ],
    vocabulary: [
      { word: 'locksmith', phonetic: '/ˈlɒksmɪθ/', meaning: '锁匠' },
      { word: 'grateful', phonetic: '/ˈɡreɪtfl/', meaning: '感激的' },
      { word: 'notice', phonetic: '/ˈnəʊtɪs/', meaning: '注意到' },
      { word: 'strange', phonetic: '/streɪndʒ/', meaning: '奇怪的' },
      { word: 'enter', phonetic: '/ˈentə/', meaning: '进入' },
      { word: 'wrong', phonetic: '/rɒŋ/', meaning: '错误的' },
      { word: 'shopping', phonetic: '/ˈʃɒpɪŋ/', meaning: '购物' },
      { word: 'inside', phonetic: '/ɪnˈsaɪd/', meaning: '在屋里' }
    ],
    notes: [
      '"returned home from" 从……回到家。',
      '"left her key inside" 把钥匙忘在屋里了。',
      '"had entered the wrong house" 进了错误的房子。过去完成时。'
    ],
    tags: ['日常生活', '幽默'],
    difficulty: 3,
    summary: '老太太请锁匠开门——结果发现她进了别人家，因为她走错了门。',
    summaryEn: 'An old lady calls a locksmith to open her door — she had entered the wrong house.',
  },
  {
    id: 37,
    title: 'Mont Blanc',
    titleCn: '勃朗峰',
    text: [
      'Mont Blanc is the highest mountain in the Alps.',
      'It rises to 4,808 metres above sea level.',
      'The first successful ascent was made in 1786.',
      'Every year, thousands of climbers attempt to reach the summit.',
      'The climb is not technically very difficult, but it is dangerous.',
      'The weather can change very quickly at high altitude.',
      'Many climbers have lost their lives on Mont Blanc.',
      'Despite the dangers, people continue to be drawn to its beauty.'
    ],
    textCn: [
      '',
      '',
      '',
      '',
      '',
      '',
      '',
      ''
    ],
    vocabulary: [
      { word: 'mountain', phonetic: '/ˈmaʊntɪn/', meaning: '山' },
      { word: 'Alps', phonetic: '/ælps/', meaning: '阿尔卑斯山' },
      { word: 'metre', phonetic: '/ˈmiːtə/', meaning: '米' },
      { word: 'ascent', phonetic: '/əˈsent/', meaning: '攀登' },
      { word: 'summit', phonetic: '/ˈsʌmɪt/', meaning: '山顶' },
      { word: 'altitude', phonetic: '/ˈæltɪtjuːd/', meaning: '海拔' },
      { word: 'dangerous', phonetic: '/ˈdeɪndʒərəs/', meaning: '危险的' },
      { word: 'beauty', phonetic: '/ˈbjuːti/', meaning: '美丽' },
      { word: 'despite', phonetic: '/dɪˈspaɪt/', meaning: '尽管' }
    ],
    notes: [
      '"rises to" 上升到。',
      '"the first successful ascent" 第一次成功的攀登。',
      '"despite the dangers" 尽管有危险。'
    ],
    tags: ['地理', '登山'],
    difficulty: 3,
    summary: '勃朗峰——阿尔卑斯山最高峰，每年吸引数千登山者。',
    summaryEn: 'Mont Blanc — the highest peak in the Alps, attracting thousands of climbers every year.',
  },
  {
    id: 38,
    title: 'Who wants a cold?',
    titleCn: '谁想要感冒？',
    text: [
      'No one wants a cold, but almost everyone gets one from time to time.',
      'The common cold is caused by a virus.',
      'There are over 200 different cold viruses.',
      'This is why there is no cure for the common cold.',
      'The best way to prevent a cold is to wash your hands frequently.',
      'If you do catch a cold, rest and drink plenty of fluids.',
      'Most colds go away within a week.',
      'Antibiotics do not work against viruses, so they are useless for colds.'
    ],
    textCn: [
      '',
      '',
      '',
      '',
      '',
      '',
      '',
      ''
    ],
    vocabulary: [
      { word: 'virus', phonetic: '/ˈvaɪrəs/', meaning: '病毒' },
      { word: 'cure', phonetic: '/kjʊə/', meaning: '治愈' },
      { word: 'prevent', phonetic: '/prɪˈvent/', meaning: '预防' },
      { word: 'frequently', phonetic: '/ˈfriːkwəntli/', meaning: '经常地' },
      { word: 'fluid', phonetic: '/ˈfluːɪd/', meaning: '液体' },
      { word: 'antibiotic', phonetic: '/ˌæntɪbaɪˈɒtɪk/', meaning: '抗生素' },
      { word: 'useless', phonetic: '/ˈjuːsləs/', meaning: '无用的' },
      { word: 'within', phonetic: '/wɪˈðɪn/', meaning: '在……之内' }
    ],
    notes: [
      '"from time to time" 时不时。',
      '"the best way to" 最好的方法。',
      '"do catch" 确实感染。do表示强调。'
    ],
    tags: ['健康', '科学'],
    difficulty: 3,
    summary: '感冒由病毒引起，没有特效药——最好的预防方法是勤洗手。',
    summaryEn: 'Colds are caused by viruses with no cure — frequent handwashing is the best prevention.',
  },
  {
    id: 39,
    title: 'Illusions of pastoral peace',
    titleCn: '田园生活的幻想',
    text: [
      'Many city people dream of living in the country.',
      'They imagine green fields, fresh air, and a peaceful life.',
      'But the reality is often different.',
      'Country life can be lonely and boring.',
      'There are few shops and entertainment facilities.',
      'Transport is poor, and jobs are hard to find.',
      'Many people who move to the country soon move back to the city.',
      'The idea of pastoral peace is often just an illusion.'
    ],
    textCn: [
      '',
      '',
      '',
      '',
      '',
      '',
      '',
      ''
    ],
    vocabulary: [
      { word: 'illusion', phonetic: '/ɪˈluːʒn/', meaning: '幻想' },
      { word: 'pastoral', phonetic: '/ˈpɑːstərəl/', meaning: '田园的' },
      { word: 'imagine', phonetic: '/ɪˈmædʒɪn/', meaning: '想象' },
      { word: 'peaceful', phonetic: '/ˈpiːsfl/', meaning: '平静的' },
      { word: 'reality', phonetic: '/riˈæləti/', meaning: '现实' },
      { word: 'lonely', phonetic: '/ˈləʊnli/', meaning: '孤独的' },
      { word: 'facility', phonetic: '/fəˈsɪləti/', meaning: '设施' },
      { word: 'transport', phonetic: '/ˈtrænspɔːt/', meaning: '交通' }
    ],
    notes: [
      '"dream of" 梦想。',
      '"the reality is often different" 现实往往不同。',
      '"is often just an illusion" 往往只是幻想。'
    ],
    tags: ['城乡对比', '议论文'],
    difficulty: 3,
    summary: '城市人向往田园生活——但现实往往是孤独、无聊和不便。',
    summaryEn: 'City people dream of country life, but the reality is often loneliness and inconvenience.',
  },
  {
    id: 40,
    title: 'Modern cavemen',
    titleCn: '现代穴居人',
    text: [
      'Some people choose to live in caves.',
      'In southern Spain, there are whole communities of cave dwellers.',
      'The caves are cool in summer and warm in winter.',
      'They are very comfortable and have all modern facilities.',
      'Some caves have swimming pools and satellite television.',
      'Living in a cave is much cheaper than living in a house.',
      'The cave dwellers say they would never go back to living in a normal house.'
    ],
    textCn: [
      '',
      '',
      '',
      '',
      '',
      '',
      ''
    ],
    vocabulary: [
      { word: 'cave', phonetic: '/keɪv/', meaning: '洞穴' },
      { word: 'community', phonetic: '/kəˈmjuːnəti/', meaning: '社区' },
      { word: 'dweller', phonetic: '/ˈdwelə/', meaning: '居住者' },
      { word: 'comfortable', phonetic: '/ˈkʌmftəbl/', meaning: '舒适的' },
      { word: 'facility', phonetic: '/fəˈsɪləti/', meaning: '设施' },
      { word: 'satellite', phonetic: '/ˈsætəlaɪt/', meaning: '卫星' },
      { word: 'cheaper', phonetic: '/ˈtʃiːpə/', meaning: '更便宜的' },
      { word: 'normal', phonetic: '/ˈnɔːml/', meaning: '普通的' }
    ],
    notes: [
      '"choose to" 选择做……。',
      '"much cheaper than" 比……便宜得多。',
      '"would never go back to" 永远不会回到……。'
    ],
    tags: ['另类生活', '说明文'],
    difficulty: 3,
    summary: '现代穴居人——在西班牙南部，人们选择住在洞穴里，舒适又便宜。',
    summaryEn: 'Modern cave dwellers in southern Spain live comfortably and cheaply in caves.',
  },
  {
    id: 41,
    title: 'The sailing ship',
    titleCn: '帆船',
    text: [
      'Before the invention of the steamship, all ocean voyages were made in sailing ships.',
      'Sailing ships depended on the wind.',
      'If the wind was favourable, a ship could make good progress.',
      'But if the wind was against it, the ship could be delayed for weeks.',
      'Voyages that now take a few days once took months.',
      'Sailors had to be very skilled and brave.',
      'Many ships were lost at sea.',
      'The age of sail came to an end in the mid-nineteenth century.'
    ],
    textCn: [
      '',
      '',
      '',
      '',
      '',
      '',
      '',
      ''
    ],
    vocabulary: [
      { word: 'steamship', phonetic: '/ˈstiːmʃɪp/', meaning: '蒸汽船' },
      { word: 'voyage', phonetic: '/ˈvɔɪɪdʒ/', meaning: '航行' },
      { word: 'favourable', phonetic: '/ˈfeɪvərəbl/', meaning: '有利的' },
      { word: 'progress', phonetic: '/ˈprəʊɡres/', meaning: '进展' },
      { word: 'delay', phonetic: '/dɪˈleɪ/', meaning: '延误' },
      { word: 'skilled', phonetic: '/skɪld/', meaning: '熟练的' },
      { word: 'brave', phonetic: '/breɪv/', meaning: '勇敢的' },
      { word: 'sail', phonetic: '/seɪl/', meaning: '航行' }
    ],
    notes: [
      '"depended on" 依赖。',
      '"make good progress" 取得良好进展。',
      '"came to an end" 结束。'
    ],
    tags: ['历史', '航海'],
    difficulty: 3,
    summary: '帆船时代——依赖风力航行，许多船在海上失踪。',
    summaryEn: 'The age of sailing ships — dependent on wind, many ships lost at sea.',
  },
  {
    id: 42,
    title: 'Our neighbour the river',
    titleCn: '我们的邻居——河流',
    text: [
      'The river is our neighbour.',
      'We live on its banks and depend on it for many things.',
      'It provides us with water for drinking and farming.',
      'It gives us fish to eat and a place to swim in summer.',
      'But the river can also be dangerous.',
      'When there is too much rain, the river floods.',
      'The water rises and covers the fields and sometimes the roads.',
      'People who live near the river must always be prepared for floods.'
    ],
    textCn: [
      '',
      '',
      '',
      '',
      '',
      '',
      '',
      ''
    ],
    vocabulary: [
      { word: 'neighbour', phonetic: '/ˈneɪbə/', meaning: '邻居' },
      { word: 'bank', phonetic: '/bæŋk/', meaning: '河岸' },
      { word: 'provide', phonetic: '/prəˈvaɪd/', meaning: '提供' },
      { word: 'farming', phonetic: '/ˈfɑːmɪŋ/', meaning: '农业' },
      { word: 'dangerous', phonetic: '/ˈdeɪndʒərəs/', meaning: '危险的' },
      { word: 'flood', phonetic: '/flʌd/', meaning: '洪水' },
      { word: 'cover', phonetic: '/ˈkʌvə/', meaning: '覆盖' },
      { word: 'prepared', phonetic: '/prɪˈpeəd/', meaning: '准备好的' }
    ],
    notes: [
      '"depend on" 依赖。',
      '"provide us with" 为我们提供。',
      '"be prepared for" 为……做准备。'
    ],
    tags: ['自然', '人与环境'],
    difficulty: 3,
    summary: '河流是邻居——给我们水和鱼，但也会带来洪水。',
    summaryEn: 'The river is our neighbour — providing water and fish, but also bringing floods.',
  },
  {
    id: 43,
    title: 'Ringing the bells',
    titleCn: '敲钟',
    text: [
      'Church bells have been rung for centuries.',
      'They ring to call people to worship.',
      'They ring to celebrate weddings and other happy occasions.',
      'They also ring to warn of danger, such as fire or flood.',
      'In England, bell ringing is a traditional art.',
      'Ringers must learn complex patterns called "changes".',
      'A team of ringers can produce beautiful music.',
      'It takes years of practice to become a skilled ringer.'
    ],
    textCn: [
      '',
      '',
      '',
      '',
      '',
      '',
      '',
      ''
    ],
    vocabulary: [
      { word: 'bell', phonetic: '/bel/', meaning: '钟' },
      { word: 'worship', phonetic: '/ˈwɜːʃɪp/', meaning: '礼拜' },
      { word: 'celebrate', phonetic: '/ˈselɪbreɪt/', meaning: '庆祝' },
      { word: 'occasion', phonetic: '/əˈkeɪʒn/', meaning: '场合' },
      { word: 'warn', phonetic: '/wɔːn/', meaning: '警告' },
      { word: 'traditional', phonetic: '/trəˈdɪʃənl/', meaning: '传统的' },
      { word: 'complex', phonetic: '/ˈkɒmpleks/', meaning: '复杂的' },
      { word: 'pattern', phonetic: '/ˈpætn/', meaning: '模式' },
      { word: 'skilled', phonetic: '/skɪld/', meaning: '熟练的' }
    ],
    notes: [
      '"have been rung" 现在完成时被动语态。',
      '"call people to worship" 召唤人们来做礼拜。',
      '"takes years of practice" 需要多年的练习。'
    ],
    tags: ['文化', '传统'],
    difficulty: 3,
    summary: '教堂钟声的传统——召唤礼拜、庆祝婚礼、警告危险。',
    summaryEn: 'The tradition of church bells — calling to worship, celebrating, and warning of danger.',
  },
  {
    id: 44,
    title: 'Predicting the future',
    titleCn: '预测未来',
    text: [
      'People have always tried to predict the future.',
      'In ancient times, they consulted oracles and fortune tellers.',
      'Today, we use science and technology to make predictions.',
      'Weather forecasters can predict the weather with some accuracy.',
      'Economists try to predict what will happen to the economy.',
      'But no one can predict the future with complete certainty.',
      'The only thing we can be sure of is that the future will be different from the present.'
    ],
    textCn: [
      '',
      '',
      '',
      '',
      '',
      '',
      ''
    ],
    vocabulary: [
      { word: 'predict', phonetic: '/prɪˈdɪkt/', meaning: '预测' },
      { word: 'oracle', phonetic: '/ˈɒrəkl/', meaning: '神谕' },
      { word: 'fortune teller', phonetic: '/ˈfɔːtʃən ˈtelə/', meaning: '算命先生' },
      { word: 'forecaster', phonetic: '/ˈfɔːkɑːstə/', meaning: '预报员' },
      { word: 'accuracy', phonetic: '/ˈækjərəsi/', meaning: '准确性' },
      { word: 'economist', phonetic: '/ɪˈkɒnəmɪst/', meaning: '经济学家' },
      { word: 'certainty', phonetic: '/ˈsɜːtnti/', meaning: '确定性' },
      { word: 'present', phonetic: '/ˈpreznt/', meaning: '现在' }
    ],
    notes: [
      '"consulted oracles" 咨询神谕。',
      '"with some accuracy" 有一定准确性。',
      '"the only thing we can be sure of" 我们唯一能确定的。'
    ],
    tags: ['未来', '科学'],
    difficulty: 3,
    summary: '人类一直试图预测未来——从古代神谕到现代科学，但没有人能完全确定。',
    summaryEn: 'Humans have always tried to predict the future — from ancient oracles to modern science.',
  },
  {
    id: 45,
    title: 'Mud is mud',
    titleCn: '泥巴就是泥巴',
    text: [
      'A cosmetics company once had a clever idea.',
      'They put mud in jars and sold it as a beauty product.',
      'The mud was taken from the banks of the Dead Sea.',
      'It was said to be very good for the skin.',
      'Women bought it in large quantities.',
      'The company made a lot of money.',
      'But the mud was just ordinary mud.',
      'The power of advertising had turned mud into gold.'
    ],
    textCn: [
      '',
      '',
      '',
      '',
      '',
      '',
      '',
      ''
    ],
    vocabulary: [
      { word: 'cosmetics', phonetic: '/kɒzˈmetɪks/', meaning: '化妆品' },
      { word: 'jar', phonetic: '/dʒɑː/', meaning: '罐子' },
      { word: 'beauty', phonetic: '/ˈbjuːti/', meaning: '美容' },
      { word: 'product', phonetic: '/ˈprɒdʌkt/', meaning: '产品' },
      { word: 'quantity', phonetic: '/ˈkwɒntəti/', meaning: '数量' },
      { word: 'ordinary', phonetic: '/ˈɔːdnri/', meaning: '普通的' },
      { word: 'advertising', phonetic: '/ˈædvətaɪzɪŋ/', meaning: '广告' },
      { word: 'skin', phonetic: '/skɪn/', meaning: '皮肤' }
    ],
    notes: [
      '"sold it as" 把它当作……来卖。',
      '"in large quantities" 大量地。',
      '"turned... into..." 把……变成……。'
    ],
    tags: ['商业', '广告'],
    difficulty: 3,
    summary: '化妆品公司把普通泥巴当美容产品卖——广告的力量把泥巴变成了金子。',
    summaryEn: 'A cosmetics company sold ordinary mud as beauty products — advertising turned mud into gold.',
  },
  {
    id: 46,
    title: 'The literal-minded',
    titleCn: '刻板的人',
    text: [
      'Some people always take things literally.',
      'They cannot understand jokes, metaphors, or sarcasm.',
      'If you say, "It\'s raining cats and dogs," they look out of the window.',
      'If you say, "Break a leg," they think you want them to get hurt.',
      'These people are called "literal-minded".',
      'They are not stupid — they just think in a very concrete way.',
      'Sometimes this can be a strength, especially in science and engineering.'
    ],
    textCn: [
      '',
      '',
      '',
      '',
      '',
      '',
      ''
    ],
    vocabulary: [
      { word: 'literal', phonetic: '/ˈlɪtərəl/', meaning: '字面的' },
      { word: 'metaphor', phonetic: '/ˈmetəfə/', meaning: '隐喻' },
      { word: 'sarcasm', phonetic: '/ˈsɑːkæzəm/', meaning: '讽刺' },
      { word: 'stupid', phonetic: '/ˈstjuːpɪd/', meaning: '愚蠢的' },
      { word: 'concrete', phonetic: '/ˈkɒŋkriːt/', meaning: '具体的' },
      { word: 'strength', phonetic: '/streŋθ/', meaning: '优势' },
      { word: 'especially', phonetic: '/ɪˈspeʃəli/', meaning: '特别地' },
      { word: 'engineering', phonetic: '/ˌendʒɪˈnɪərɪŋ/', meaning: '工程' }
    ],
    notes: [
      '"take things literally" 从字面理解事物。',
      '"raining cats and dogs" 倾盆大雨（习语）。',
      '"break a leg" 祝好运（习语）。'
    ],
    tags: ['性格', '语言'],
    difficulty: 3,
    summary: '刻板的人总是从字面理解——不懂笑话和隐喻，但这在科学中可能是优势。',
    summaryEn: 'Literal-minded people take everything at face value — but this can be a strength in science.',
  },
  {
    id: 47,
    title: 'The age of age',
    titleCn: '年龄时代',
    text: [
      'People are living longer than ever before.',
      'In many countries, the average age of the population is increasing.',
      'This is partly because of better healthcare and nutrition.',
      'But it also means there are more old people than ever before.',
      'Some people worry about the cost of looking after the elderly.',
      'Others argue that older people have a lot to offer society.',
      'They have experience, wisdom, and time to contribute.'
    ],
    textCn: [
      '',
      '',
      '',
      '',
      '',
      '',
      ''
    ],
    vocabulary: [
      { word: 'average', phonetic: '/ˈævərɪdʒ/', meaning: '平均的' },
      { word: 'population', phonetic: '/ˌpɒpjuˈleɪʃn/', meaning: '人口' },
      { word: 'increase', phonetic: '/ɪnˈkriːs/', meaning: '增长' },
      { word: 'healthcare', phonetic: '/ˈhelθkeə/', meaning: '医疗保健' },
      { word: 'nutrition', phonetic: '/njuːˈtrɪʃn/', meaning: '营养' },
      { word: 'elderly', phonetic: '/ˈeldəli/', meaning: '老年人' },
      { word: 'wisdom', phonetic: '/ˈwɪzdəm/', meaning: '智慧' },
      { word: 'contribute', phonetic: '/kənˈtrɪbjuːt/', meaning: '贡献' }
    ],
    notes: [
      '"living longer than ever before" 比以往任何时候都活得长。',
      '"partly because of" 部分原因是。',
      '"have a lot to offer" 有很多可以贡献的。'
    ],
    tags: ['社会', '老龄化'],
    difficulty: 3,
    summary: '人口老龄化——人们活得更长，老年人对社会有很多贡献。',
    summaryEn: 'Aging populations — people live longer, and the elderly have much to offer society.',
  },
  {
    id: 48,
    title: 'A pretty carpet',
    titleCn: '漂亮的地毯',
    text: [
      'A woman bought a beautiful carpet from a shop.',
      'When she got home, she found a stain on it.',
      'She took it back to the shop and asked for a replacement.',
      'The shop assistant looked at the carpet carefully.',
      'He said, "Madam, that\'s not a stain. That\'s the pattern."',
      'The woman was very embarrassed.',
      'She took the carpet home and put it on the floor.',
      'It looked beautiful.'
    ],
    textCn: [
      '',
      '',
      '',
      '',
      '',
      '',
      '',
      ''
    ],
    vocabulary: [
      { word: 'carpet', phonetic: '/ˈkɑːpɪt/', meaning: '地毯' },
      { word: 'stain', phonetic: '/steɪn/', meaning: '污渍' },
      { word: 'replacement', phonetic: '/rɪˈpleɪsmənt/', meaning: '替换' },
      { word: 'assistant', phonetic: '/əˈsɪstənt/', meaning: '店员' },
      { word: 'pattern', phonetic: '/ˈpætn/', meaning: '图案' },
      { word: 'embarrassed', phonetic: '/ɪmˈbærəst/', meaning: '尴尬的' },
      { word: 'floor', phonetic: '/flɔː/', meaning: '地板' },
      { word: 'beautiful', phonetic: '/ˈbjuːtɪfl/', meaning: '美丽的' }
    ],
    notes: [
      '"asked for a replacement" 要求换一个。',
      '"looked at... carefully" 仔细看……。',
      '"that\'s not a stain, that\'s the pattern" 那不是污渍，那是图案。'
    ],
    tags: ['购物', '幽默'],
    difficulty: 3,
    summary: '一位女士以为地毯上有污渍——结果那是图案。',
    summaryEn: 'A woman thinks there\'s a stain on her carpet — it\'s actually the pattern.',
  },
  {
    id: 49,
    title: 'Automation',
    titleCn: '自动化',
    text: [
      'Automation is the use of machines to do work that was previously done by people.',
      'It has changed the way we live and work.',
      'Factories now use robots to build cars and other products.',
      'Banks use computers to process millions of transactions every day.',
      'Automation makes things faster, cheaper, and more reliable.',
      'But it also means that some people lose their jobs.',
      'The challenge is to find a balance between progress and employment.'
    ],
    textCn: [
      '',
      '',
      '',
      '',
      '',
      '',
      ''
    ],
    vocabulary: [
      { word: 'automation', phonetic: '/ˌɔːtəˈmeɪʃn/', meaning: '自动化' },
      { word: 'previously', phonetic: '/ˈpriːviəsli/', meaning: '以前' },
      { word: 'robot', phonetic: '/ˈrəʊbɒt/', meaning: '机器人' },
      { word: 'transaction', phonetic: '/trænˈzækʃn/', meaning: '交易' },
      { word: 'reliable', phonetic: '/rɪˈlaɪəbl/', meaning: '可靠的' },
      { word: 'cheaper', phonetic: '/ˈtʃiːpə/', meaning: '更便宜的' },
      { word: 'balance', phonetic: '/ˈbæləns/', meaning: '平衡' },
      { word: 'employment', phonetic: '/ɪmˈplɔɪmənt/', meaning: '就业' }
    ],
    notes: [
      '"the use of" ……的使用。',
      '"previously done by" 以前由……做的。',
      '"find a balance between" 在……之间找到平衡。'
    ],
    tags: ['科技', '社会'],
    difficulty: 3,
    summary: '自动化改变了生活——更快更便宜，但也带来就业挑战。',
    summaryEn: 'Automation changes life — faster and cheaper, but brings employment challenges.',
  },
  {
    id: 50,
    title: 'Gone with the wind',
    titleCn: '随风而去',
    text: [
      'Air pollution is a serious problem in many cities.',
      'Factories and cars produce harmful gases.',
      'These gases mix with the air we breathe.',
      'They can cause health problems such as asthma and lung disease.',
      'The wind can carry pollution from one place to another.',
      'A factory in one country can cause acid rain in another.',
      'Air pollution is a global problem that needs a global solution.'
    ],
    textCn: [
      '',
      '',
      '',
      '',
      '',
      '',
      ''
    ],
    vocabulary: [
      { word: 'pollution', phonetic: '/pəˈluːʃn/', meaning: '污染' },
      { word: 'harmful', phonetic: '/ˈhɑːmfl/', meaning: '有害的' },
      { word: 'gas', phonetic: '/ɡæs/', meaning: '气体' },
      { word: 'breathe', phonetic: '/briːð/', meaning: '呼吸' },
      { word: 'asthma', phonetic: '/ˈæzmə/', meaning: '哮喘' },
      { word: 'acid rain', phonetic: '/ˈæsɪd reɪn/', meaning: '酸雨' },
      { word: 'global', phonetic: '/ˈɡləʊbl/', meaning: '全球的' },
      { word: 'solution', phonetic: '/səˈluːʃn/', meaning: '解决方案' }
    ],
    notes: [
      '"mix with" 与……混合。',
      '"cause health problems" 导致健康问题。',
      '"a global solution" 全球性的解决方案。'
    ],
    tags: ['环境', '污染'],
    difficulty: 3,
    summary: '空气污染是全球性问题——工厂和汽车排放有害气体，风把污染带到各处。',
    summaryEn: 'Air pollution is a global problem — factories and cars produce harmful gases carried by wind.',
  },
  {
    id: 51,
    title: 'The cost of living',
    titleCn: '生活成本',
    text: [
      'The cost of living has increased dramatically in recent years.',
      'Prices of food, housing, and energy have all gone up.',
      'Wages have not kept pace with rising prices.',
      'Many families find it difficult to make ends meet.',
      'They have to cut back on spending and look for cheaper alternatives.',
      'Some people take on extra jobs to supplement their income.',
      'The gap between the rich and the poor is growing wider.'
    ],
    textCn: [
      '',
      '',
      '',
      '',
      '',
      '',
      ''
    ],
    vocabulary: [
      { word: 'dramatically', phonetic: '/drəˈmætɪkli/', meaning: '显著地' },
      { word: 'housing', phonetic: '/ˈhaʊzɪŋ/', meaning: '住房' },
      { word: 'energy', phonetic: '/ˈenədʒi/', meaning: '能源' },
      { word: 'wage', phonetic: '/weɪdʒ/', meaning: '工资' },
      { word: 'alternative', phonetic: '/ɔːlˈtɜːnətɪv/', meaning: '替代品' },
      { word: 'supplement', phonetic: '/ˈsʌplɪment/', meaning: '补充' },
      { word: 'gap', phonetic: '/ɡæp/', meaning: '差距' },
      { word: 'income', phonetic: '/ˈɪnkʌm/', meaning: '收入' }
    ],
    notes: [
      '"keep pace with" 跟上……的步伐。',
      '"make ends meet" 收支相抵。',
      '"cut back on" 削减。'
    ],
    tags: ['经济', '社会问题'],
    difficulty: 3,
    summary: '生活成本大幅上涨——工资跟不上物价，贫富差距扩大。',
    summaryEn: 'The cost of living has risen dramatically — wages haven\'t kept pace, widening the gap.',
  },
  {
    id: 52,
    title: 'The power of the press',
    titleCn: '新闻的力量',
    text: [
      'The press has enormous power in modern society.',
      'It can shape public opinion and influence elections.',
      'A single newspaper article can change a person\'s life forever.',
      'This power brings great responsibility.',
      'Journalists should report the truth and present facts fairly.',
      'But sometimes the press abuses its power.',
      'Stories are exaggerated, and innocent people are hurt.',
      'A free press is essential, but it must be responsible.'
    ],
    textCn: [
      '',
      '',
      '',
      '',
      '',
      '',
      '',
      ''
    ],
    vocabulary: [
      { word: 'press', phonetic: '/pres/', meaning: '新闻媒体' },
      { word: 'enormous', phonetic: '/ɪˈnɔːməs/', meaning: '巨大的' },
      { word: 'shape', phonetic: '/ʃeɪp/', meaning: '塑造' },
      { word: 'opinion', phonetic: '/əˈpɪnjən/', meaning: '观点' },
      { word: 'election', phonetic: '/ɪˈlekʃn/', meaning: '选举' },
      { word: 'exaggerate', phonetic: '/ɪɡˈzædʒəreɪt/', meaning: '夸大' },
      { word: 'essential', phonetic: '/ɪˈsenʃl/', meaning: '必要的' },
      { word: 'responsible', phonetic: '/rɪˈspɒnsəbl/', meaning: '负责任的' }
    ],
    notes: [
      '"shape public opinion" 塑造公众舆论。',
      '"brings great responsibility" 带来重大责任。',
      '"a free press" 新闻自由。'
    ],
    tags: ['媒体', '社会责任'],
    difficulty: 3,
    summary: '新闻媒体力量巨大——可以塑造舆论，但也需要负责任。',
    summaryEn: 'The press has enormous power to shape opinion — but must use it responsibly.',
  },
  {
    id: 53,
    title: 'Back in the old country',
    titleCn: '重返故国',
    text: [
      'A man who had lived abroad for twenty years returned to his homeland.',
      'He was shocked by the changes.',
      'The small town he remembered had become a large city.',
      'The old houses had been replaced by modern buildings.',
      'The quiet streets were now full of traffic.',
      'He could not find his old school or his childhood home.',
      'He felt like a stranger in his own country.',
      'He said, "Everything has changed except my memories."'
    ],
    textCn: [
      '',
      '',
      '',
      '',
      '',
      '',
      '',
      ''
    ],
    vocabulary: [
      { word: 'abroad', phonetic: '/əˈbrɔːd/', meaning: '国外' },
      { word: 'homeland', phonetic: '/ˈhəʊmlænd/', meaning: '祖国' },
      { word: 'shocked', phonetic: '/ʃɒkt/', meaning: '震惊的' },
      { word: 'replace', phonetic: '/rɪˈpleɪs/', meaning: '取代' },
      { word: 'traffic', phonetic: '/ˈtræfɪk/', meaning: '交通' },
      { word: 'stranger', phonetic: '/ˈstreɪndʒə/', meaning: '陌生人' },
      { word: 'except', phonetic: '/ɪkˈsept/', meaning: '除了' },
      { word: 'memory', phonetic: '/ˈmeməri/', meaning: '记忆' }
    ],
    notes: [
      '"had lived abroad" 在国外生活过。过去完成时。',
      '"replaced by" 被……取代。',
      '"felt like a stranger" 感觉像个陌生人。'
    ],
    tags: ['思乡', '变化'],
    difficulty: 3,
    summary: '一个在国外生活20年的人重返故国——一切都变了，只有记忆没变。',
    summaryEn: 'A man returns home after 20 years abroad — everything has changed except his memories.',
  },
  {
    id: 54,
    title: 'A spot of bother',
    titleCn: '一点小麻烦',
    text: [
      'An elderly woman was burgled while she was out shopping.',
      'When she returned home, she found the back door open and many things missing.',
      'She called the police immediately.',
      'Two policemen arrived within minutes.',
      'They searched the house and found fingerprints on the window.',
      'The next day, the police arrested a suspect.',
      'Most of the woman\'s belongings were recovered.',
      'She said she was very impressed by the efficiency of the police.'
    ],
    textCn: [
      '',
      '',
      '',
      '',
      '',
      '',
      '',
      ''
    ],
    vocabulary: [
      { word: 'burgled', phonetic: '/ˈbɜːɡld/', meaning: '被盗' },
      { word: 'missing', phonetic: '/ˈmɪsɪŋ/', meaning: '丢失的' },
      { word: 'immediately', phonetic: '/ɪˈmiːdiətli/', meaning: '立即' },
      { word: 'fingerprint', phonetic: '/ˈfɪŋɡəprɪnt/', meaning: '指纹' },
      { word: 'arrest', phonetic: '/əˈrest/', meaning: '逮捕' },
      { word: 'suspect', phonetic: '/ˈsʌspekt/', meaning: '嫌疑人' },
      { word: 'recover', phonetic: '/rɪˈkʌvə/', meaning: '追回' },
      { word: 'efficiency', phonetic: '/ɪˈfɪʃnsi/', meaning: '效率' }
    ],
    notes: [
      '"while she was out" 当她外出时。',
      '"within minutes" 几分钟内。',
      '"impressed by" 对……印象深刻。'
    ],
    tags: ['犯罪', '警察'],
    difficulty: 3,
    summary: '一位老太太家被盗——警察迅速破案，追回了大部分财物。',
    summaryEn: 'An elderly woman is burgled — the police quickly arrest a suspect and recover her belongings.',
  },
  {
    id: 55,
    title: 'Collecting',
    titleCn: '收藏',
    text: [
      'People collect all kinds of things.',
      'Some collect stamps, coins, or postcards.',
      'Others collect more unusual items like bottle caps or railway tickets.',
      'Collecting can be a fascinating hobby.',
      'It teaches you about history, geography, and art.',
      'Some collections become very valuable over time.',
      'But most collectors do not collect for money.',
      'They collect because they enjoy the search and the discovery.'
    ],
    textCn: [
      '',
      '',
      '',
      '',
      '',
      '',
      '',
      ''
    ],
    vocabulary: [
      { word: 'collect', phonetic: '/kəˈlekt/', meaning: '收集' },
      { word: 'stamp', phonetic: '/stæmp/', meaning: '邮票' },
      { word: 'coin', phonetic: '/kɔɪn/', meaning: '硬币' },
      { word: 'item', phonetic: '/ˈaɪtəm/', meaning: '物品' },
      { word: 'fascinating', phonetic: '/ˈfæsɪneɪtɪŋ/', meaning: '迷人的' },
      { word: 'valuable', phonetic: '/ˈvæljuəbl/', meaning: '有价值的' },
      { word: 'search', phonetic: '/sɜːtʃ/', meaning: '搜索' },
      { word: 'discovery', phonetic: '/dɪsˈkʌvəri/', meaning: '发现' }
    ],
    notes: [
      '"all kinds of" 各种各样的。',
      '"over time" 随着时间推移。',
      '"the search and the discovery" 寻找和发现的过程。'
    ],
    tags: ['爱好', '收藏'],
    difficulty: 3,
    summary: '收藏是一种迷人的爱好——不为钱，而为寻找和发现的乐趣。',
    summaryEn: 'Collecting is a fascinating hobby — the joy is in the search and discovery, not the money.',
  },
  {
    id: 56,
    title: 'Too early and too late',
    titleCn: '太早与太晚',
    text: [
      'A man arrived at the airport two hours early for his flight.',
      'He checked in, went through security, and sat down to wait.',
      'An hour later, he was told his flight had been delayed by three hours.',
      'He wished he had come later.',
      'Another man arrived at the airport just ten minutes before his flight.',
      'He ran to the gate, but the plane had already left.',
      'He wished he had come earlier.',
      'Timing is everything.'
    ],
    textCn: [
      '',
      '',
      '',
      '',
      '',
      '',
      '',
      ''
    ],
    vocabulary: [
      { word: 'airport', phonetic: '/ˈeəpɔːt/', meaning: '机场' },
      { word: 'flight', phonetic: '/flaɪt/', meaning: '航班' },
      { word: 'delay', phonetic: '/dɪˈleɪ/', meaning: '延误' },
      { word: 'gate', phonetic: '/ɡeɪt/', meaning: '登机口' },
      { word: 'timing', phonetic: '/ˈtaɪmɪŋ/', meaning: '时机' },
      { word: 'already', phonetic: '/ɔːlˈredi/', meaning: '已经' },
      { word: 'wish', phonetic: '/wɪʃ/', meaning: '希望' },
      { word: 'earlier', phonetic: '/ˈɜːliə/', meaning: '更早地' }
    ],
    notes: [
      '"two hours early" 提前两小时。',
      '"had been delayed" 已经被延误。过去完成时被动。',
      '"wished he had come" 他希望他来了。虚拟语气。'
    ],
    tags: ['旅行', '时机'],
    difficulty: 3,
    summary: '一个人太早到机场等了几个小时，另一个太晚错过了飞机——时机就是一切。',
    summaryEn: 'One arrives too early, another too late — timing is everything at the airport.',
  },
  {
    id: 57,
    title: 'A lesson in living',
    titleCn: '人生的一课',
    text: [
      'An old man was asked the secret of a long and happy life.',
      'He said, "I never argue with anyone."',
      '"Don\'t you ever disagree with people?" he was asked.',
      '"Oh yes," he said, "I disagree all the time. But I never argue."',
      '"What\'s the difference?"',
      '"Arguing is a waste of time and energy," he said. "I state my opinion once, and then I let it go."',
      '"But don\'t you want to convince others?"',
      '"I can\'t change anyone\'s mind," he said. "Only they can do that."'
    ],
    textCn: [
      '',
      '',
      '',
      '',
      '',
      '',
      '',
      ''
    ],
    vocabulary: [
      { word: 'argue', phonetic: '/ˈɑːɡjuː/', meaning: '争论' },
      { word: 'disagree', phonetic: '/ˌdɪsəˈɡriː/', meaning: '不同意' },
      { word: 'difference', phonetic: '/ˈdɪfrəns/', meaning: '区别' },
      { word: 'waste', phonetic: '/weɪst/', meaning: '浪费' },
      { word: 'energy', phonetic: '/ˈenədʒi/', meaning: '精力' },
      { word: 'state', phonetic: '/steɪt/', meaning: '陈述' },
      { word: 'opinion', phonetic: '/əˈpɪnjən/', meaning: '观点' },
      { word: 'convince', phonetic: '/kənˈvɪns/', meaning: '说服' }
    ],
    notes: [
      '"the secret of" ……的秘诀。',
      '"a waste of time" 浪费时间。',
      '"let it go" 放下它。'
    ],
    tags: ['人生智慧', '对话'],
    difficulty: 3,
    summary: '老人的人生秘诀——不同意可以，但从不争论。',
    summaryEn: 'An old man\'s secret to a happy life — disagree but never argue.',
  },
  {
    id: 58,
    title: 'The long view',
    titleCn: '长远的眼光',
    text: [
      'We live in an age of instant gratification.',
      'People want everything now — fast food, instant messages, quick results.',
      'But some things take time to develop.',
      'A tree takes years to grow strong.',
      'A friendship takes years to deepen.',
      'A skill takes years to master.',
      'Those who have the patience to wait are often the most successful in the end.'
    ],
    textCn: [
      '',
      '',
      '',
      '',
      '',
      '',
      ''
    ],
    vocabulary: [
      { word: 'instant', phonetic: '/ˈɪnstənt/', meaning: '即时的' },
      { word: 'gratification', phonetic: '/ˌɡrætɪfɪˈkeɪʃn/', meaning: '满足' },
      { word: 'develop', phonetic: '/dɪˈveləp/', meaning: '发展' },
      { word: 'deepen', phonetic: '/ˈdiːpən/', meaning: '加深' },
      { word: 'master', phonetic: '/ˈmɑːstə/', meaning: '掌握' },
      { word: 'patience', phonetic: '/ˈpeɪʃns/', meaning: '耐心' },
      { word: 'successful', phonetic: '/səkˈsesfl/', meaning: '成功的' },
      { word: 'age', phonetic: '/eɪdʒ/', meaning: '时代' }
    ],
    notes: [
      '"an age of" 一个……的时代。',
      '"take time to" 需要时间做……。',
      '"in the end" 最终。'
    ],
    tags: ['人生哲理', '耐心'],
    difficulty: 3,
    summary: '在这个追求即时满足的时代——有些事情需要时间才能成就。',
    summaryEn: 'In an age of instant gratification — some things take time to develop and master.',
  },
  {
    id: 59,
    title: 'Written in the stars',
    titleCn: '命中注定',
    text: [
      'Some people believe that our lives are written in the stars.',
      'They think that the position of the planets at the time of our birth determines our personality and future.',
      'This is called astrology.',
      'Scientists say there is no evidence to support astrology.',
      'But millions of people read their horoscopes every day.',
      'Whether you believe in astrology or not, it is an interesting part of human culture.'
    ],
    textCn: [
      '',
      '',
      '',
      '',
      '',
      ''
    ],
    vocabulary: [
      { word: 'star', phonetic: '/stɑː/', meaning: '星星' },
      { word: 'planet', phonetic: '/ˈplænɪt/', meaning: '行星' },
      { word: 'determine', phonetic: '/dɪˈtɜːmɪn/', meaning: '决定' },
      { word: 'personality', phonetic: '/ˌpɜːsəˈnæləti/', meaning: '性格' },
      { word: 'astrology', phonetic: '/əˈstrɒlədʒi/', meaning: '占星术' },
      { word: 'evidence', phonetic: '/ˈevɪdəns/', meaning: '证据' },
      { word: 'horoscope', phonetic: '/ˈhɒrəskəʊp/', meaning: '星座运势' },
      { word: 'culture', phonetic: '/ˈkʌltʃə/', meaning: '文化' }
    ],
    notes: [
      '"written in the stars" 命中注定。',
      '"the position of the planets" 行星的位置。',
      '"whether... or not" 无论……是否。'
    ],
    tags: ['文化', '信仰'],
    difficulty: 3,
    summary: '占星术——有人相信命运由星星决定，科学家说没有证据支持。',
    summaryEn: 'Astrology — some believe our fate is written in the stars, but scientists say there\'s no evidence.',
  },
  {
    id: 60,
    title: 'The art of painting',
    titleCn: '绘画艺术',
    text: [
      'Painting is one of the oldest forms of art.',
      'Cave paintings dating back 40,000 years have been found.',
      'Over the centuries, painting styles have changed dramatically.',
      'From the realism of the Renaissance to the impressionism of Monet, each era has produced its own masterpieces.',
      'Today, painters work in many different styles and media.',
      'Some use traditional oil paints, while others use digital tools.',
      'But the purpose of painting remains the same — to express ideas and emotions through visual art.'
    ],
    textCn: [
      '',
      '',
      '',
      '',
      '',
      '',
      ''
    ],
    vocabulary: [
      { word: 'painting', phonetic: '/ˈpeɪntɪŋ/', meaning: '绘画' },
      { word: 'Renaissance', phonetic: '/rɪˈneɪsns/', meaning: '文艺复兴' },
      { word: 'impressionism', phonetic: '/ɪmˈpreʃənɪzəm/', meaning: '印象派' },
      { word: 'era', phonetic: '/ˈɪərə/', meaning: '时代' },
      { word: 'masterpiece', phonetic: '/ˈmɑːstəpiːs/', meaning: '杰作' },
      { word: 'medium', phonetic: '/ˈmiːdiəm/', meaning: '媒介' },
      { word: 'express', phonetic: '/ɪkˈspres/', meaning: '表达' },
      { word: 'emotion', phonetic: '/ɪˈməʊʃn/', meaning: '情感' },
      { word: 'visual', phonetic: '/ˈvɪʒuəl/', meaning: '视觉的' }
    ],
    notes: [
      '"dating back" 追溯到。',
      '"have changed dramatically" 发生了巨大变化。',
      '"the purpose of" ……的目的。'
    ],
    tags: ['艺术', '历史'],
    difficulty: 3,
    summary: '绘画艺术的发展——从洞穴壁画到数字绘画，目的是通过视觉表达情感。',
    summaryEn: 'The development of painting — from cave art to digital tools, expressing emotions through visual art.',
  }
];

export default book3
