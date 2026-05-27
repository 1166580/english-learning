import type { Lesson } from '../types'

const book2: Lesson[] = [
  {
    id: 1,
    title: 'A private conversation',
    titleCn: '私人谈话',
    text: [
      'Last week I went to the theatre. I had a very good seat. The play was very interesting. I did not enjoy it.',
      'A young man and a young woman were sitting behind me. They were talking loudly. I got very angry. I could not hear the actors.',
      'I turned round. I looked at the man and the woman angrily. They did not pay any attention.',
      'In the end, I could not bear it. I turned round again. "I can\'t hear a word!" I said angrily.',
      '"It\'s none of your business," the young man said rudely. "This is a private conversation!"'
    ],
    textCn: [
      '上周我去看戏。我坐的位置很好。戏也很有趣。但我却无法欣赏。',
      '一个年轻男子和一个年轻女子坐在我身后。他们大声交谈。我非常生气。我听不清演员在说什么。',
      '我转过身。我生气地看着那对男女。但他们毫不理会。',
      '最后，我忍无可忍。我再次转过身。"我一个字也听不见！"我生气地说。',
      '"不关你的事，"那年轻人粗鲁地说。"这是私人谈话！"'
    ],
    vocabulary: [
      { word: 'private', phonetic: '/ˈpraɪvɪt/', meaning: '私人的' },
      { word: 'conversation', phonetic: '/ˌkɒnvəˈseɪʃn/', meaning: '谈话' },
      { word: 'theatre', phonetic: '/ˈθɪətə/', meaning: '剧院' },
      { word: 'seat', phonetic: '/siːt/', meaning: '座位' },
      { word: 'play', phonetic: '/pleɪ/', meaning: '戏剧' },
      { word: 'loudly', phonetic: '/ˈlaʊdli/', meaning: '大声地' },
      { word: 'angry', phonetic: '/ˈæŋɡri/', meaning: '生气的' },
      { word: 'attention', phonetic: '/əˈtenʃn/', meaning: '注意' },
      { word: 'bear', phonetic: '/beə/', meaning: '忍受' },
      { word: 'rudely', phonetic: '/ˈruːdli/', meaning: '粗鲁地' }
    ],
    notes: [
      '"go to the theatre" 去剧院看戏。',
      '"I could not bear it" — bear 意为忍受。',
      '"It\'s none of your business" — "不关你的事"。'

    ],
    tags: ['一般过去时', '简单句'],
    difficulty: 2,
    summary: '叙述了作者在剧院看戏时，身后一对年轻男女大声交谈，作者忍无可忍转身制止，却被对方以"这是私人谈话"粗鲁回绝的尴尬经历。',
    summaryEn: 'The author went to the theatre but could not enjoy the play because a young man and woman behind him were talking loudly. When he finally told them he couldn\'t hear, the young man rudely replied it was a private conversation.',
    sentenceExplanations: [
      { sentence: 'Last week I went to the theatre.', translation: '上周我去看戏了。', explanation: '"went to the theatre"表示去剧院看戏，注意theatre前加the表示特定场所。went是go的过去式。' },
      { sentence: 'I did not enjoy it.', translation: '我无法欣赏它。', explanation: '否定句结构：主语 + did not + 动词原形。enjoy后接it指代the play。句中it与上文的good seat和interesting形成转折。' },
      { sentence: 'They were talking loudly.', translation: '他们在大声交谈。', explanation: '过去进行时：were + doing，表示过去某时正在进行的动作。loudly是副词，修饰talking。' },
      { sentence: 'I could not hear the actors.', translation: '我听不见演员（说话）。', explanation: 'could not表示"不能"，是can的过去否定形式。hear强调听的结果。' },
      { sentence: 'It\'s none of your business.', translation: '不关你的事。', explanation: '"none of your business"是固定表达，意为"与你无关"。语气非常不礼貌。' },
    ],
    grammarSections: [
      {
        title: '一般过去时（Simple Past Tense）',
        content: '一般过去时表示过去某时发生的动作或存在的状态。规则动词加-ed，不规则动词需记忆。  否定句和疑问句需借助did，动词恢复原形。',
        examples: [
          { en: 'I went to the theatre last week.', cn: '上周我去看戏了。' },
          { en: 'I did not enjoy the play.', cn: '我没有欣赏到那部戏。' },
          { en: 'They did not pay any attention.', cn: '他们毫不理会。' },
          { en: 'Did you enjoy the film?', cn: '你喜欢那部电影吗？' },
        ],
      },
      {
        title: '情态动词 could 的用法',
        content: 'could是can的过去式，表示过去的能力或许可。否定形式为could not (couldn\'t)。  在口语中could也可用于礼貌请求。',
        examples: [
          { en: 'I could not hear the actors.', cn: '我听不见演员说话。' },
          { en: 'I could not bear it.', cn: '我无法忍受了。' },
          { en: 'Could you help me?', cn: '你能帮帮我吗？' },
          { en: 'I could swim when I was five.', cn: '我五岁时就会游泳了。' },
        ],
      },
    ],
    patternDrills: [
      {
        pattern: 'I _____ to + 地点 last week. 我上周去了_____。',
        substitutions: [
          { en: 'I went to the theatre last week.', cn: '我上周去看戏了。' },
          { en: 'I went to the library last week.', cn: '我上周去了图书馆。' },
          { en: 'I went to the museum last week.', cn: '我上周去了博物馆。' },
          { en: 'I went to the park last week.', cn: '我上周去了公园。' },
        ],
      },
      {
        pattern: 'I could not + 动词. 我无法_____。',
        substitutions: [
          { en: 'I could not hear the actors.', cn: '我听不见演员说话。' },
          { en: 'I could not sleep last night.', cn: '我昨晚睡不着。' },
          { en: 'I could not find my keys.', cn: '我找不到我的钥匙。' },
          { en: 'I could not understand him.', cn: '我听不懂他说的话。' },
        ],
      },
    ],
    exercises: [
      { type: 'choice', question: 'Last week I _____ to the theatre.', options: ['A. go', 'B. went', 'C. goes', 'D. going'], answer: 'B', explanation: 'Last week表示过去时间，动词需用过去式went。' },
      { type: 'fill', question: 'They _____ talking loudly. (be动词过去式)', answer: 'were', explanation: '主语they是复数，过去进行时用were + doing。' },
      { type: 'judge', question: '"It\'s none of your business"意思是"这不关你的事"。', answer: '正确', explanation: '这是一个固定表达，意为"与你无关，不关你的事"。' },
      { type: 'choice', question: 'I _____ not enjoy the play.', options: ['A. do', 'B. does', 'C. did', 'D. was'], answer: 'C', explanation: '过去时否定句用did not + 动词原形。' },
    ],
  },
  {
    id: 2,
    title: 'Breakfast or lunch?',
    titleCn: '早餐还是午餐？',
    text: [
      'It was Sunday. I never get up early on Sundays. I sometimes stay in bed until lunchtime.',
      'Last Sunday I got up very late. I looked out of the window. It was dark outside. "What a day!" I thought. "It\'s raining again."',
      'Just then, the telephone rang. It was my aunt Lucy. "I\'ve just arrived by train," she said. "I\'m coming to see you."',
      '"But I\'m still having breakfast," I said.',
      '"What are you doing?" she asked.',
      '"I\'m having breakfast," I repeated.',
      '"Dear me," she said. "Do you always get up so late? It\'s one o\'clock!"'
    ],
    textCn: [
      '那是星期天。星期天我从不早起。有时我会在床上待到午饭时间。',
      '上个星期天我起得很晚。我向窗外看去。外面天色阴沉。"鬼天气！"我想。"又下雨了。"',
      '就在这时，电话响了。是我姨妈露西。"我坐火车刚到，"她说。"我来看你了。"',
      '"但我还在吃早饭呢，"我说。',
      '"你在干什么？"她问。',
      '"我在吃早饭，"我重复道。',
      '"天哪，"她说。"你总是起得这么晚吗？现在已经一点钟了！"'
    ],
    vocabulary: [
      { word: 'Sunday', phonetic: '/ˈsʌndeɪ/', meaning: '星期日' },
      { word: 'until', phonetic: '/ənˈtɪl/', meaning: '直到' },
      { word: 'outside', phonetic: '/ˌaʊtˈsaɪd/', meaning: '外面' },
      { word: 'ring', phonetic: '/rɪŋ/', meaning: '铃响' },
      { word: 'aunt', phonetic: '/ɑːnt/', meaning: '姨妈' },
      { word: 'repeat', phonetic: '/rɪˈpiːt/', meaning: '重复' }
    ],
    notes: [
      '"I never get up early on Sundays." 一般现在时。',
      '"What a day!" — 感叹句。',
      '现在进行时 "I\'m having breakfast"。',
      '"Dear me" = 天哪。'

    ],
    tags: ['现在完成时', '时态'],
    difficulty: 3,
    summary: '作者在周日睡到很晚，姨妈露西突然来访，打电话说已经到了，作者却还在吃"早餐"——实际上已经是下午一点了。',
    summaryEn: 'The author slept late on Sunday. Aunt Lucy called saying she had just arrived by train and was coming to visit. The author was still having breakfast at one o\'clock in the afternoon.',
    sentenceExplanations: [
      { sentence: 'I never get up early on Sundays.', translation: '我星期天从不早起。', explanation: '一般现在时表示习惯性动作。never表示"从不"，频率副词放在实义动词前。on Sundays表示"每逢星期天"。' },
      { sentence: 'I sometimes stay in bed until lunchtime.', translation: '有时我会在床上待到午饭时间。', explanation: 'sometimes是频率副词，放在实义动词前。until表示"直到"，后接时间点。stay in bed意为"待在床上"。' },
      { sentence: 'I\'ve just arrived by train.', translation: '我坐火车刚到。', explanation: '现在完成时have/has + 过去分词，just表示"刚刚"，强调动作刚完成。by train表示交通方式。' },
      { sentence: 'I\'m still having breakfast.', translation: '我还在吃早饭呢。', explanation: '现在进行时表示此刻正在进行的动作。still表示"仍然"，强调动作持续。' },
      { sentence: 'Dear me!', translation: '天哪！', explanation: '感叹词，表示惊讶或失望。相当于"My dear!"或"Oh my!"。' },
    ],
    grammarSections: [
      {
        title: '现在进行时（Present Continuous Tense）',
        content: '现在进行时表示此刻正在进行的动作，结构为am/is/are + doing。  也可用于表示近期安排或计划（如I\'m coming to see you）。  注意：某些状态动词（know, like, belong等）不用于进行时。',
        examples: [
          { en: 'I\'m having breakfast.', cn: '我正在吃早饭。' },
          { en: 'She is coming to see you.', cn: '她要来看你了。' },
          { en: 'What are you doing?', cn: '你在干什么？' },
          { en: 'It\'s raining again.', cn: '又在下雨了。' },
        ],
      },
      {
        title: '感叹句（Exclamatory Sentences）',
        content: 'What引导的感叹句：What + (a/an) + 形容词 + 名词 + 主语 + 谓语！  How引导的感叹句：How + 形容词/副词 + 主语 + 谓语！  感叹句用于表达强烈的情感，如惊讶、赞叹等。',
        examples: [
          { en: 'What a day!', cn: '鬼天气！/ 多糟糕的一天！' },
          { en: 'What a beautiful garden!', cn: '多美的花园啊！' },
          { en: 'How clever you are!', cn: '你真聪明！' },
          { en: 'What nice weather it is!', cn: '多好的天气啊！' },
        ],
      },
    ],
    patternDrills: [
      {
        pattern: 'I\'m + doing sth. 我正在_____。',
        substitutions: [
          { en: 'I\'m having breakfast.', cn: '我正在吃早饭。' },
          { en: 'I\'m reading a book.', cn: '我正在看书。' },
          { en: 'I\'m watching TV.', cn: '我正在看电视。' },
          { en: 'I\'m doing my homework.', cn: '我正在做作业。' },
        ],
      },
      {
        pattern: 'What + a/an + 名词! 多么_____的_____啊！',
        substitutions: [
          { en: 'What a day!', cn: '多么糟糕的一天！' },
          { en: 'What a pity!', cn: '多么遗憾啊！' },
          { en: 'What a surprise!', cn: '多么令人吃惊啊！' },
          { en: 'What a lovely baby!', cn: '多么可爱的宝宝啊！' },
        ],
      },
    ],
    exercises: [
      { type: 'choice', question: 'I _____ never get up early on Sundays.', options: ['A. am', 'B. is', 'C. ∅', 'D. do'], answer: 'C', explanation: 'never是频率副词，放在实义动词前，此处是一般现在时肯定句，不需要助动词。' },
      { type: 'fill', question: 'I _____ still having breakfast. (be动词)', answer: 'am', explanation: '主语是I，现在进行时用am + doing。' },
      { type: 'judge', question: '"Dear me"表示高兴。', answer: '错误', explanation: '"Dear me"表示惊讶或失望，不表示高兴。' },
      { type: 'choice', question: '_____ a day! I thought. It\'s raining again.', options: ['A. How', 'B. What', 'C. Which', 'D. That'], answer: 'B', explanation: '感叹句"What a day!"中day是可数名词单数，用What a...结构。' },
    ],
  },
  {
    id: 3,
    title: 'Please send me a card',
    titleCn: '请给我寄张明信片',
    text: [
      'Postcards always spoil my holidays. Last summer, I went to Italy. I visited museums and sat in public gardens.',
      'A friendly waiter taught me a few words of Italian. Then he lent me a book. I read a few lines, but I did not understand a word.',
      'Every day I thought about postcards. My holidays passed quickly, but I did not send any cards to my friends.',
      'On the last day I made a big decision. I got up early and bought thirty-seven cards. I spent the whole day in my room, but I did not write a single card!'
    ],
    textCn: [
      '明信片总是破坏我的假期。去年夏天，我去了意大利。我参观了博物馆，坐在公园里。',
      '一个好客的服务员教了我几句意大利语。然后他借给我一本书。我读了几行，但一个字也看不懂。',
      '每天我都想着明信片的事。假期过得很快，但我一张明信片也没给朋友们寄。',
      '最后一天我做了个重大决定。我起了个大早，买了37张明信片。我在房间里待了一整天，却一张也没写成！'
    ],
    vocabulary: [
      { word: 'postcard', phonetic: '/ˈpəʊstkɑːd/', meaning: '明信片' },
      { word: 'spoil', phonetic: '/spɔɪl/', meaning: '破坏' },
      { word: 'museum', phonetic: '/mjuˈziːəm/', meaning: '博物馆' },
      { word: 'waiter', phonetic: '/ˈweɪtə/', meaning: '服务员' },
      { word: 'lend', phonetic: '/lend/', meaning: '借出' },
      { word: 'decision', phonetic: '/dɪˈsɪʒn/', meaning: '决定' },
      { word: 'whole', phonetic: '/həʊl/', meaning: '整个的' },
      { word: 'single', phonetic: '/ˈsɪŋɡl/', meaning: '单一的' }
    ],
    notes: [
      '"spoil" 破坏，也可指食物变质。',
      '过去式：go→went, visit→visited, sit→sat, teach→taught。',
      '"make a decision" 做决定。'

    ],
    tags: ['一般过去时', '时间状语'],
    difficulty: 2,
    summary: '作者去意大利度假，每天都想着寄明信片的事，最后一天买了37张明信片，却在房间里待了一整天一张也没写成。',
    summaryEn: 'The author went to Italy on holiday. Every day he thought about sending postcards but never did. On the last day he bought 37 cards but spent the whole day in his room without writing a single one.',
    sentenceExplanations: [
      { sentence: 'Postcards always spoil my holidays.', translation: '明信片总是破坏我的假期。', explanation: '一般现在时表示经常性动作。always与一般现在时搭配。spoil意为"破坏，毁坏"。' },
      { sentence: 'A friendly waiter taught me a few words of Italian.', translation: '一个好客的服务员教了我几句意大利语。', explanation: 'taught是teach的过去式。a few表示"几个，一些"（肯定含义）。a few words of Italian意为"几句意大利语"。' },
      { sentence: 'Then he lent me a book.', translation: '然后他借给我一本书。', explanation: 'lent是lend的过去式。lend sb sth = lend sth to sb，意为"借给某人某物"。注意区别borrow（借入）。' },
      { sentence: 'I did not send any cards to my friends.', translation: '我一张明信片也没给朋友们寄。', explanation: '否定句中some变any。not...any表示"一个也没有"。send sth to sb意为"寄给某人"。' },
      { sentence: 'I did not write a single card!', translation: '我一张也没写成！', explanation: 'single强调"仅仅一个"，加强否定语气。not...a single...表示"连一个也没有"。' },
    ],
    grammarSections: [
      {
        title: '一般过去时的否定句和疑问句',
        content: '规则动词过去式加-ed，不规则动词需逐个记忆。  否定句：主语 + did not (didn\'t) + 动词原形 疑问句：Did + 主语 + 动词原形...?  注意：加了did后，动词必须恢复原形。',
        examples: [
          { en: 'I did not understand a word.', cn: '我一个字也看不懂。' },
          { en: 'I did not send any cards.', cn: '我一张明信片也没寄。' },
          { en: 'Did you visit the museum?', cn: '你参观博物馆了吗？' },
          { en: 'He did not go to school yesterday.', cn: '他昨天没去上学。' },
        ],
      },
      {
        title: '双宾语动词 (lend/teach/send)',
        content: '有些动词可以接两个宾语：间接宾语（人）和直接宾语（物）。  常见结构： - 动词 + 人 + 物 (lend me a book) - 动词 + 物 + to/for + 人 (lend a book to me)  to表示方向（给），for表示代替（为）。',
        examples: [
          { en: 'He lent me a book.', cn: '他借给我一本书。' },
          { en: 'He lent a book to me.', cn: '他把一本书借给了我。' },
          { en: 'A waiter taught me Italian.', cn: '一个服务员教我意大利语。' },
          { en: 'I sent a card to my friend.', cn: '我给朋友寄了张明信片。' },
        ],
      },
    ],
    patternDrills: [
      {
        pattern: 'sb + did not + 动词原形 + sth. 某人没有_____。',
        substitutions: [
          { en: 'I did not send any cards.', cn: '我没有寄任何明信片。' },
          { en: 'I did not write a single letter.', cn: '我一封信也没写。' },
          { en: 'He did not buy any souvenirs.', cn: '他没买任何纪念品。' },
          { en: 'We did not visit the museum.', cn: '我们没有参观博物馆。' },
        ],
      },
      {
        pattern: 'sb + lent/taught/sent + 人 + 物. 某人借/教/寄了_____。',
        substitutions: [
          { en: 'He lent me a book.', cn: '他借给我一本书。' },
          { en: 'She taught me a few words.', cn: '她教了我几个词。' },
          { en: 'I sent my friend a postcard.', cn: '我给朋友寄了张明信片。' },
          { en: 'He bought her a present.', cn: '他给她买了一件礼物。' },
        ],
      },
    ],
    exercises: [
      { type: 'choice', question: 'A friendly waiter _____ me a few words of Italian.', options: ['A. teach', 'B. teached', 'C. taught', 'D. teaches'], answer: 'C', explanation: 'teach的过去式是taught，不规则变化。' },
      { type: 'fill', question: 'I did not write a _____ card. (单一的)', answer: 'single', explanation: '"single"意为"单一的"，not...a single强调"连一个也没有"。' },
      { type: 'judge', question: '"lent"是"lend（借给）"的过去式。', answer: '正确', explanation: 'lend的过去式和过去分词都是lent。' },
      { type: 'choice', question: 'I did not send _____ cards to my friends.', options: ['A. some', 'B. any', 'C. much', 'D. a'], answer: 'B', explanation: '否定句中some变为any。cards是可数名词复数，用any。' },
    ],
  },
  {
    id: 4,
    title: 'An exciting trip',
    titleCn: '一次激动人心的旅行',
    text: [
      'I have just received a letter from my brother, Tim. He is in Australia. He has been there for six months.',
      'Tim is an engineer. He is working for a big firm and he has already visited a great number of different places in Australia.',
      'He has just bought an Australian car and has gone to Alice Springs, a small town in the centre of Australia.',
      'He will soon visit Darwin. From there, he will fly to Perth. My brother has never been abroad before, so he is finding this trip very exciting.'
    ],
    textCn: [
      '我刚收到一封来自我弟弟蒂姆的信。他在澳大利亚。他到那里已经六个月了。',
      '蒂姆是个工程师。他在为一家大公司工作，已经去过澳大利亚很多不同的地方。',
      '他刚买了一辆澳大利亚汽车，去了艾利斯斯普林斯，这是澳大利亚中部的一个小镇。',
      '他很快就要去达尔文了。从那里他会飞到珀斯。我弟弟以前从来没出过国，所以觉得这次旅行非常刺激。'
    ],
    vocabulary: [
      { word: 'receive', phonetic: '/rɪˈsiːv/', meaning: '收到' },
      { word: 'engineer', phonetic: '/ˌendʒɪˈnɪə/', meaning: '工程师' },
      { word: 'firm', phonetic: '/fɜːm/', meaning: '公司' },
      { word: 'abroad', phonetic: '/əˈbrɔːd/', meaning: '在国外' },
      { word: 'exciting', phonetic: '/ɪkˈsaɪtɪŋ/', meaning: '令人激动的' }
    ],
    notes: [
      '现在完成时 + just：刚完成的动作。',
      '现在完成时 + for + 时间段：动作持续。',
      '"find + 宾语 + 宾补" 结构。'

    ],
    tags: ['现在完成时', 'since/for'],
    difficulty: 3,
    summary: '作者收到弟弟Tim从澳大利亚的来信。Tim作为工程师在那里工作了六个月，已经去了很多地方，刚买了车并去了中部小镇，正计划继续旅行。',
    summaryEn: 'The author received a letter from his brother Tim who is in Australia. Tim has been there for six months as an engineer, has visited many places, just bought a car, and is continuing his exciting trip.',
    sentenceExplanations: [
      { sentence: 'I have just received a letter from my brother, Tim.', translation: '我刚收到一封来自我弟弟蒂姆的信。', explanation: '现在完成时have/has + 过去分词。just表示"刚刚"，强调动作刚完成。receive...from意为"从...收到"。' },
      { sentence: 'He has been there for six months.', translation: '他到那里已经六个月了。', explanation: '现在完成时表示从过去持续到现在的状态。for + 时间段表示持续时间。has been表示"一直在"。' },
      { sentence: 'He has already visited a great number of different places.', translation: '他已经去过很多不同的地方了。', explanation: 'already表示"已经"，用于现在完成时肯定句中。a great number of = many，后接可数名词复数。' },
      { sentence: 'He has just bought an Australian car.', translation: '他刚买了一辆澳大利亚汽车。', explanation: 'just与现在完成时搭配，表示"刚做完"。has bought是现在完成时。' },
      { sentence: 'He will soon visit Darwin.', translation: '他很快就要去达尔文了。', explanation: 'will + 动词原形表示将来。soon表示"不久，很快"。' },
    ],
    grammarSections: [
      {
        title: '现在完成时（Present Perfect Tense）',
        content: '现在完成时表示过去发生的动作对现在的影响，或从过去持续到现在的状态。  结构：have/has + 过去分词  常用时间标志词：just（刚刚），already（已经），yet（还/已经），ever（曾经），never（从不）。  注意：现在完成时不能与明确的过去时间连用（如yesterday, last week）。',
        examples: [
          { en: 'I have just received a letter.', cn: '我刚收到一封信。' },
          { en: 'He has already visited many places.', cn: '他已经去过很多地方。' },
          { en: 'He has never been abroad before.', cn: '他以前从没出过国。' },
          { en: 'Have you finished yet?', cn: '你做完了吗？' },
        ],
      },
      {
        title: 'for 和 since 的用法',
        content: 'for + 时间段：表示动作持续了多长时间（for six months, for two years）。  since + 时间点：表示从某个时间起（since 2020, since Monday）。  两者都常与现在完成时连用。',
        examples: [
          { en: 'He has been there for six months.', cn: '他在那里已经六个月了。' },
          { en: 'I have lived here for ten years.', cn: '我在这里住了十年了。' },
          { en: 'She has worked here since 2019.', cn: '她从2019年起就在这里工作。' },
          { en: 'We have been friends since childhood.', cn: '我们从童年起就是朋友。' },
        ],
      },
    ],
    patternDrills: [
      {
        pattern: 'sb + have/has + just/already + 过去分词... 某人刚刚/已经_____。',
        substitutions: [
          { en: 'I have just received a letter.', cn: '我刚收到一封信。' },
          { en: 'He has already finished his work.', cn: '他已经完成了工作。' },
          { en: 'She has just left the office.', cn: '她刚离开办公室。' },
          { en: 'They have already arrived.', cn: '他们已经到了。' },
        ],
      },
      {
        pattern: 'sb + have/has + 过去分词 + for + 时间段. 某人_____了多长时间。',
        substitutions: [
          { en: 'He has been there for six months.', cn: '他在那里已经六个月了。' },
          { en: 'I have lived here for ten years.', cn: '我在这里住了十年了。' },
          { en: 'She has studied English for three years.', cn: '她学英语已经三年了。' },
          { en: 'We have known each other for a long time.', cn: '我们认识很久了。' },
        ],
      },
    ],
    exercises: [
      { type: 'choice', question: 'He has _____ visited a great number of places.', options: ['A. yet', 'B. already', 'C. ever', 'D. never'], answer: 'B', explanation: 'already用于现在完成时肯定句，表示"已经"。' },
      { type: 'fill', question: 'He has been there _____ six months. (介词)', answer: 'for', explanation: '"for + 时间段"表示持续时间，与现在完成时连用。' },
      { type: 'judge', question: '"He has been there for six months"表示他在那里待了六个月，现在还在那里。', answer: '正确', explanation: '现在完成时 + for表示动作从过去持续到现在，可能还会继续。' },
      { type: 'choice', question: 'My brother has never _____ abroad before.', options: ['A. be', 'B. been', 'C. being', 'D. is'], answer: 'B', explanation: '现在完成时has + 过去分词，be的过去分词是been。' },
    ],
  },
  {
    id: 5,
    title: 'No wrong numbers',
    titleCn: '无错号之虞',
    text: [
      'Mr. James Scott has a garage in Silbury and now he has just bought another garage in Pinhurst.',
      'Pinhurst is only five miles from Silbury, but Mr. Scott cannot get a telephone for his new garage, so he has just bought twelve pigeons.',
      'Yesterday, a pigeon carried the first message from Pinhurst to Silbury. The bird covered the distance in three minutes.',
      'Up to now, Mr. Scott has sent a great many requests for spare parts and other urgent messages from one garage to the other.',
      'In this way, he has begun his own private "telephone" service.'
    ],
    textCn: [
      '詹姆斯·斯科特先生在锡尔伯里有一个汽车修理部，现在他刚在平赫斯特又买了一家。',
      '平赫斯特离锡尔伯里只有五英里，但斯科特先生无法为他的新修理部装电话，于是他刚买了十二只鸽子。',
      '昨天，一只鸽子把第一封信从平赫斯特送到了锡尔伯里。这只鸟用三分钟飞完了全程。',
      '到目前为止，斯科特先生已经从一个修理部向另一个发出了大量备件请求和其他紧急消息。',
      '就这样，他开始了自己的私人"电话"服务。'
    ],
    vocabulary: [
      { word: 'garage', phonetic: '/ˈɡærɑːʒ/', meaning: '汽车修理部' },
      { word: 'pigeon', phonetic: '/ˈpɪdʒɪn/', meaning: '鸽子' },
      { word: 'message', phonetic: '/ˈmesɪdʒ/', meaning: '消息' },
      { word: 'distance', phonetic: '/ˈdɪstəns/', meaning: '距离' },
      { word: 'request', phonetic: '/rɪˈkwest/', meaning: '请求' },
      { word: 'spare', phonetic: '/speə/', meaning: '备用的' },
      { word: 'urgent', phonetic: '/ˈɜːdʒənt/', meaning: '紧急的' },
      { word: 'service', phonetic: '/ˈsɜːvɪs/', meaning: '服务' }
    ],
    notes: [
      '"cover the distance" — cover 意为"走完"。',
      '"Up to now" = so far。',
      '"a great many" = many。'

    ],
    tags: ['一般过去时', '否定句'],
    difficulty: 2,
    summary: '詹姆斯·斯科特先生在Pinhurst新开了一家修车厂，因为装不了电话，便买了12只鸽子在两家修车厂之间传递消息，开创了自己的私人"电话"服务。',
    summaryEn: 'Mr. James Scott bought a second garage but couldn\'t get a telephone for it, so he bought twelve pigeons to carry messages between the two garages, starting his own private "telephone" service.',
    sentenceExplanations: [
      { sentence: 'Mr. Scott cannot get a telephone for his new garage.', translation: '斯科特先生无法为他的新修理部装电话。', explanation: 'cannot = can\'t，表示"不能"。get在此意为"得到，安装"。for表示目的，"为了"。' },
      { sentence: 'The bird covered the distance in three minutes.', translation: '这只鸟用三分钟飞完了全程。', explanation: 'cover the distance意为"走/飞完全程"。in + 时间段表示"在...时间内完成"。' },
      { sentence: 'Up to now, Mr. Scott has sent a great many requests.', translation: '到目前为止，斯科特先生已经发出了大量请求。', explanation: '"Up to now" = So far，意为"到目前为止"，常与现在完成时连用。a great many = many，后接可数名词复数。' },
      { sentence: 'He has begun his own private "telephone" service.', translation: '他开始了自己的私人"电话"服务。', explanation: 'has begun是现在完成时。own意为"自己的"。service意为"服务"。此处telephone加引号表示这不是真正的电话。' },
    ],
    grammarSections: [
      {
        title: '现在完成时与时间状语',
        content: '现在完成时常与以下时间状语连用：  - up to now / so far（到目前为止） - just（刚刚） - already（已经） - yet（还/已经，用于否定和疑问） - never（从不） - ever（曾经）  这些词通常放在have/has之后，过去分词之前。',
        examples: [
          { en: 'Up to now, he has sent many messages.', cn: '到目前为止，他已经发了很多消息。' },
          { en: 'So far, everything has been fine.', cn: '到目前为止，一切都很好。' },
          { en: 'He has just bought twelve pigeons.', cn: '他刚买了十二只鸽子。' },
          { en: 'Have you ever been to London?', cn: '你去过伦敦吗？' },
        ],
      },
      {
        title: 'a great many 与 a great number of',
        content: '两者都表示"许多"，后接可数名词复数。  - a great many + 可数名词复数 - a great number of + 可数名词复数  注意：a great deal of + 不可数名词。',
        examples: [
          { en: 'He has sent a great many requests.', cn: '他发出了大量请求。' },
          { en: 'A great number of pigeons live here.', cn: '很多鸽子生活在这里。' },
          { en: 'I have a great many friends.', cn: '我有很多朋友。' },
          { en: 'A great deal of money was spent.', cn: '花了很多钱。' },
        ],
      },
    ],
    patternDrills: [
      {
        pattern: 'sb + have/has + 过去分词 + a great many + 名词复数. 某人已经_____了很多_____。',
        substitutions: [
          { en: 'He has sent a great many requests.', cn: '他发出了大量请求。' },
          { en: 'She has read a great many books.', cn: '她读了很多书。' },
          { en: 'They have visited a great many countries.', cn: '他们去了很多国家。' },
          { en: 'I have received a great many letters.', cn: '我收到了很多信。' },
        ],
      },
      {
        pattern: 'sb + cannot + 动词 + for + 名词. 某人无法为_____。',
        substitutions: [
          { en: 'He cannot get a telephone for his garage.', cn: '他无法为修车厂装电话。' },
          { en: 'She cannot find a job for her husband.', cn: '她无法为丈夫找到工作。' },
          { en: 'I cannot buy a gift for my mother.', cn: '我无法给妈妈买礼物。' },
          { en: 'We cannot get tickets for the show.', cn: '我们买不到演出的票。' },
        ],
      },
    ],
    exercises: [
      { type: 'choice', question: '_____ to now, Mr. Scott has sent many messages.', options: ['A. Up', 'B. Down', 'C. In', 'D. On'], answer: 'A', explanation: '"Up to now"是固定搭配，意为"到目前为止"。' },
      { type: 'fill', question: 'The bird covered the _____ in three minutes. (距离)', answer: 'distance', explanation: '"cover the distance"意为"走/飞完全程"。' },
      { type: 'judge', question: '"a great many"后接不可数名词。', answer: '错误', explanation: '"a great many"后接可数名词复数。接不可数名词用"a great deal of"。' },
      { type: 'choice', question: 'He has just _____ twelve pigeons.', options: ['A. buy', 'B. bought', 'C. buying', 'D. buys'], answer: 'B', explanation: '现在完成时has + 过去分词，buy的过去分词是bought。' },
    ],
  },
  {
    id: 6,
    title: 'Percy Buttons',
    titleCn: '珀西·巴顿斯',
    text: [
      'I have just moved to a house in Bridge Street. Yesterday a beggar knocked at my door.',
      'He asked me for a meal and a glass of beer. In return for this, the beggar stood on his head and sang songs.',
      'I gave him a meal. He ate the food and drank the beer. Then he put a piece of cheese in his pocket and went away.',
      'Later a neighbour told me about him. Everybody knows him. His name is Percy Buttons.',
      'He calls at every house in the street once a month and always asks for a meal and a glass of beer.'
    ],
    textCn: [
      '我刚搬到桥街的一所房子。昨天一个乞丐来敲我的门。',
      '他向我要一顿饭和一杯啤酒。作为回报，那乞丐倒立起来唱了几首歌。',
      '我给了他一顿饭。他吃了食物喝了啤酒，然后把一块奶酪放进口袋走了。',
      '后来一个邻居跟我说起他。大家都认识他。他叫珀西·巴顿斯。',
      '他每月拜访街上每家每户一次，总是要一顿饭和一杯啤酒。'
    ],
    vocabulary: [
      { word: 'beggar', phonetic: '/ˈbeɡə/', meaning: '乞丐' },
      { word: 'knock', phonetic: '/nɒk/', meaning: '敲门' },
      { word: 'meal', phonetic: '/miːl/', meaning: '一顿饭' },
      { word: 'beer', phonetic: '/bɪə/', meaning: '啤酒' },
      { word: 'cheese', phonetic: '/tʃiːz/', meaning: '奶酪' },
      { word: 'pocket', phonetic: '/ˈpɒkɪt/', meaning: '口袋' },
      { word: 'neighbour', phonetic: '/ˈneɪbə/', meaning: '邻居' }
    ],
    notes: [
      '"knock at the door" 敲门。',
      '"ask sb for sth" 向某人要某物。',
      '"In return for..." 作为回报。',
      '"once a month" 每月一次。'

    ],
    tags: ['被动语态', '一般现在时'],
    difficulty: 3,
    summary: '作者搬到桥街后，一个叫Percy Buttons的乞丐来敲门要饭和啤酒，作为回报他倒立唱歌，后来邻居告诉大家此人每月都会来一次。',
    summaryEn: 'After the author moved to Bridge Street, a beggar named Percy Buttons came to ask for a meal and a glass of beer. In return, he stood on his head and sang songs. He visits every house once a month.',
    sentenceExplanations: [
      { sentence: 'I have just moved to a house in Bridge Street.', translation: '我刚搬到桥街的一所房子。', explanation: '现在完成时表示刚完成的动作。move to表示"搬到某地"。just表示"刚刚"。' },
      { sentence: 'He asked me for a meal and a glass of beer.', translation: '他向我要一顿饭和一杯啤酒。', explanation: '"ask sb for sth"意为"向某人要某物"。a glass of表示"一杯"。' },
      { sentence: 'In return for this, the beggar stood on his head and sang songs.', translation: '作为回报，那乞丐倒立起来唱了几首歌。', explanation: '"In return for..."意为"作为...的回报"。stand on one\'s head意为"倒立"。sang是sing的过去式。' },
      { sentence: 'Then he put a piece of cheese in his pocket and went away.', translation: '然后他把一块奶酪放进口袋走了。', explanation: 'a piece of表示"一块/一片"。went away = left，意为"离开"。' },
      { sentence: 'He calls at every house in the street once a month.', translation: '他每月拜访街上每家每户一次。', explanation: 'call at意为"拜访（某地）"。once a month表示频率，"每月一次"。' },
    ],
    grammarSections: [
      {
        title: 'ask sb for sth 和 give sb sth 结构',
        content: '"ask sb for sth"意为"向某人要某物"。 "give sb sth" = "give sth to sb"意为"给某人某物"。  英语中很多动词可以接双宾语，常见搭配： ask...for...，give...to...，lend...to...，send...to...',
        examples: [
          { en: 'He asked me for a meal.', cn: '他向我要一顿饭。' },
          { en: 'I gave him a meal.', cn: '我给了他一顿饭。' },
          { en: 'She asked her father for money.', cn: '她向父亲要钱。' },
          { en: 'He gave the book to me.', cn: '他把书给了我。' },
        ],
      },
      {
        title: '频率表达 (Frequency Expressions)',
        content: '英语中表示频率的常见表达：  - once a week/month/year（每周/月/年一次） - twice a day（每天两次） - three times a week（每周三次）  这些表达通常放在句末。',
        examples: [
          { en: 'He calls at every house once a month.', cn: '他每月拜访每家一次。' },
          { en: 'I go swimming twice a week.', cn: '我每周去游泳两次。' },
          { en: 'She exercises three times a week.', cn: '她每周锻炼三次。' },
          { en: 'We have English lessons once a day.', cn: '我们每天上一次英语课。' },
        ],
      },
    ],
    patternDrills: [
      {
        pattern: 'sb + asked + 人 + for + sth. 某人向某人要_____。',
        substitutions: [
          { en: 'He asked me for a meal.', cn: '他向我要一顿饭。' },
          { en: 'She asked her mother for help.', cn: '她向妈妈求助。' },
          { en: 'The child asked his father for money.', cn: '孩子向父亲要钱。' },
          { en: 'I asked the teacher for advice.', cn: '我向老师请教。' },
        ],
      },
      {
        pattern: 'sb + 动词 + once/twice/three times + a + 时间. 某人每周/月_____次。',
        substitutions: [
          { en: 'He calls once a month.', cn: '他每月来一次。' },
          { en: 'I go swimming twice a week.', cn: '我每周去游泳两次。' },
          { en: 'She visits her parents once a month.', cn: '她每月看望父母一次。' },
          { en: 'We have a test three times a term.', cn: '我们每学期考三次。' },
        ],
      },
    ],
    exercises: [
      { type: 'choice', question: 'He _____ me for a meal and a glass of beer.', options: ['A. asked', 'B. gave', 'C. lent', 'D. sent'], answer: 'A', explanation: '"ask sb for sth"意为"向某人要某物"，asked的过去式还是asked。' },
      { type: 'fill', question: 'In _____ for this, he stood on his head. (回报)', answer: 'return', explanation: '"In return for..."是固定搭配，意为"作为...的回报"。' },
      { type: 'judge', question: '"call at"后接地点，表示"拜访某地"。', answer: '正确', explanation: '"call at"后接地点名词，意为"拜访/到访某地"。"call on"后接人。' },
      { type: 'choice', question: 'He calls at every house _____ a month.', options: ['A. one time', 'B. once', 'C. first', 'D. one'], answer: 'B', explanation: '"once a month"是固定表达，意为"每月一次"。' },
    ],
  },
  {
    id: 7,
    title: 'Too late',
    titleCn: '为时太晚',
    text: [
      'The plane was late and detectives were waiting at the airport all morning.',
      'They were expecting a valuable parcel of diamonds from South Africa. A few hours earlier, someone had told the police that thieves would try to steal the diamonds.',
      'When the plane arrived, some of the detectives were waiting inside the main building while others were waiting on the airfield.',
      'Two men took the parcel off the plane and carried it into the Customs House.',
      'While two detectives were keeping guard at the door, two others opened the parcel. To their surprise, the precious parcel was full of stones and sand!'
    ],
    textCn: [
      '飞机晚点了，侦探们在机场等了整整一上午。',
      '他们在等一个从南非运来的值钱的钻石包裹。几小时前，有人告诉警方说，小偷会试图偷这些钻石。',
      '飞机到达时，一些侦探在主楼里等候，另一些在外面的停机坪上等候。',
      '两个人把包裹从飞机上拿下来，运进了海关大楼。',
      '两个侦探在门口把守，另两个打开了包裹。令他们吃惊的是，这个珍贵的包裹里装满了石头和沙子！'
    ],
    vocabulary: [
      { word: 'detective', phonetic: '/dɪˈtektɪv/', meaning: '侦探' },
      { word: 'airport', phonetic: '/ˈeəpɔːt/', meaning: '机场' },
      { word: 'expect', phonetic: '/ɪkˈspekt/', meaning: '期待' },
      { word: 'valuable', phonetic: '/ˈvæljuəbl/', meaning: '贵重的' },
      { word: 'parcel', phonetic: '/ˈpɑːsl/', meaning: '包裹' },
      { word: 'diamond', phonetic: '/ˈdaɪəmənd/', meaning: '钻石' },
      { word: 'thief', phonetic: '/θiːf/', meaning: '小偷' },
      { word: 'precious', phonetic: '/ˈpreʃəs/', meaning: '珍贵的' }
    ],
    notes: [
      '过去进行时：were waiting。',
      '"while" 引导从句，常与进行时连用。',
      '"To their surprise" 不定式作状语。'

    ],
    tags: ['一般过去时', '不规则动词'],
    difficulty: 2,
    summary: '侦探们在机场等待一个装有钻石的贵重包裹。有人提前告知警方小偷会来偷钻石。当包裹最终被打开时，里面却只有石头和沙子。',
    summaryEn: 'Detectives waited at the airport all morning for a valuable parcel of diamonds from South Africa. When they finally opened it, the precious parcel was full of stones and sand.',
    sentenceExplanations: [
      { sentence: 'The plane was late and detectives were waiting at the airport all morning.', translation: '飞机晚点了，侦探们在机场等了整整一上午。', explanation: 'was late表示"晚点了"。were waiting是过去进行时，表示在过去某段时间内持续进行的动作。all morning表示"整个上午"。' },
      { sentence: 'They were expecting a valuable parcel of diamonds from South Africa.', translation: '他们在等一个从南非运来的值钱的钻石包裹。', explanation: 'were expecting过去进行时表示"一直在期待"。a parcel of意为"一包"。diamonds from South Africa意为"来自南非的钻石"。' },
      { sentence: 'Someone had told the police that thieves would try to steal the diamonds.', translation: '有人告诉警方说小偷会试图偷这些钻石。', explanation: 'had told是过去完成时表示"在过去之前"已发生。would是will的过去式，用于间接引语中表示将来。try to do意为"试图做"。' },
      { sentence: 'While two detectives were keeping guard at the door, two others opened the parcel.', translation: '两个侦探在门口把守，另两个打开了包裹。', explanation: '"while"引导时间状语从句，表示"当...的时候"，常与进行时连用。keeping guard意为"把守，看守"。others表示"其他人"。' },
      { sentence: 'To their surprise, the precious parcel was full of stones and sand!', translation: '令他们吃惊的是，这个珍贵的包裹里装满了石头和沙子！', explanation: '"To their surprise"是不定式短语作状语，意为"令他们吃惊的是"。be full of意为"装满了"。' },
    ],
    grammarSections: [
      {
        title: '过去进行时（Past Continuous Tense）',
        content: '过去进行时表示过去某时正在进行的动作，结构为was/were + doing。  常与when和while连用： - when + 一般过去时, 过去进行时（突然发生） - while + 过去进行时, 过去进行时（同时进行）',
        examples: [
          { en: 'Detectives were waiting at the airport.', cn: '侦探们在机场等候。' },
          { en: 'They were expecting a valuable parcel.', cn: '他们在等一个贵重的包裹。' },
          { en: 'While two were guarding the door, two others opened the parcel.', cn: '两个在门口守卫时，另两个打开了包裹。' },
          { en: 'I was reading when the phone rang.', cn: '电话响时我正在看书。' },
        ],
      },
      {
        title: '过去完成时（Past Perfect Tense）',
        content: '过去完成时表示"过去的过去"，即在过去某个动作之前已发生的动作。  结构：had + 过去分词  常与before, after, by the time等连用，也用于间接引语中。',
        examples: [
          { en: 'Someone had told the police about the thieves.', cn: '有人已经把小偷的事告诉了警方。' },
          { en: 'A few hours earlier, someone had told the police.', cn: '几小时前有人告诉了警方。' },
          { en: 'He had finished before I arrived.', cn: '我到之前他已经做完了。' },
          { en: 'She said she had seen the film before.', cn: '她说她以前看过这部电影。' },
        ],
      },
    ],
    patternDrills: [
      {
        pattern: 'While sb + were/was doing, sb + did sth. 当某人正在做...时，某人做了...',
        substitutions: [
          { en: 'While two detectives were keeping guard, two others opened the parcel.', cn: '两个侦探把守时，另两个打开了包裹。' },
          { en: 'While I was reading, the phone rang.', cn: '我正在看书时，电话响了。' },
          { en: 'While she was cooking, the doorbell rang.', cn: '她正在做饭时，门铃响了。' },
          { en: 'While they were waiting, it started to rain.', cn: '他们等待时，开始下雨了。' },
        ],
      },
      {
        pattern: 'To their surprise, sb/sth + was/were... 令他们吃惊的是...',
        substitutions: [
          { en: 'To their surprise, the parcel was full of stones.', cn: '令他们吃惊的是，包裹里全是石头。' },
          { en: 'To his surprise, she knew his name.', cn: '令他吃惊的是，她知道他的名字。' },
          { en: 'To our surprise, the shop was closed.', cn: '令我们吃惊的是，商店关门了。' },
          { en: 'To my surprise, he passed the exam.', cn: '令我吃惊的是，他通过了考试。' },
        ],
      },
    ],
    exercises: [
      { type: 'choice', question: 'Detectives _____ waiting at the airport all morning.', options: ['A. was', 'B. were', 'C. are', 'D. is'], answer: 'B', explanation: 'detectives是复数，过去进行时用were + doing。' },
      { type: 'fill', question: 'Someone had _____ the police about the thieves. (告诉)', answer: 'told', explanation: '过去完成时had + 过去分词，tell的过去分词是told。' },
      { type: 'judge', question: '"To their surprise"意为"令他们吃惊的是"。', answer: '正确', explanation: '这是不定式短语作状语，表示出乎意料的结果。' },
      { type: 'choice', question: '_____ two detectives were keeping guard, two others opened the parcel.', options: ['A. When', 'B. While', 'C. If', 'D. Because'], answer: 'B', explanation: 'while引导的从句与主句同时进行，都用进行时。when通常接一般过去时。' },
    ],
  },
  {
    id: 8,
    title: 'The best and the worst',
    titleCn: '最好的和最差的',
    text: [
      'Joe Sanders has the most beautiful garden in our town. Nearly everybody enters for "The Nicest Garden Competition" each year, but Joe wins every time.',
      'Bill Frith\'s garden is larger than Joe\'s. Bill works harder than Joe and grows more flowers and vegetables, but Joe\'s garden is more interesting.',
      'He has made neat paths and has built a wooden bridge over a pool. I like gardens too, but I do not like hard work.',
      'Every year I enter for the garden competition too, and I always win a little prize for the worst garden in the town!'
    ],
    textCn: [
      '乔·桑德斯拥有镇上最漂亮的花园。几乎每个人都参加了每年"最美花园大赛"，但乔每次都获胜。',
      '比尔·弗里思的花园比乔的大。比尔比乔更勤奋，种了更多的花和蔬菜，但乔的花园更有趣。',
      '他铺了整洁的小路，在池塘上架了一座木桥。我也喜欢花园，但我不喜欢辛苦的工作。',
      '每年我也参加花园比赛，而且总是为镇上最差的花园赢得一个小奖！'
    ],
    vocabulary: [
      { word: 'competition', phonetic: '/ˌkɒmpəˈtɪʃn/', meaning: '比赛' },
      { word: 'neat', phonetic: '/niːt/', meaning: '整洁的' },
      { word: 'path', phonetic: '/pɑːθ/', meaning: '小路' },
      { word: 'wooden', phonetic: '/ˈwʊdn/', meaning: '木制的' },
      { word: 'bridge', phonetic: '/brɪdʒ/', meaning: '桥' },
      { word: 'pool', phonetic: '/puːl/', meaning: '池塘' },
      { word: 'prize', phonetic: '/praɪz/', meaning: '奖品' }
    ],
    notes: [
      '最高级：the most beautiful garden。',
      '比较级：larger than, harder, more interesting。',
      '"win a prize" 赢得奖项。'

    ],
    tags: ['现在完成时', '一般过去时'],
    difficulty: 3,
    summary: 'Joe Sanders拥有镇上最漂亮的花园，Bill Frith的花园比Joe的大也更勤劳，但Joe的花园更有趣。作者也参加比赛，却总是赢得最差花园奖。',
    summaryEn: 'Joe Sanders has the most beautiful garden in town. Bill Frith\'s garden is larger and he works harder, but Joe\'s garden is more interesting. The author also enters the competition but always wins the prize for the worst garden.',
    sentenceExplanations: [
      { sentence: 'Joe Sanders has the most beautiful garden in our town.', translation: '乔·桑德斯拥有镇上最漂亮的花园。', explanation: '最高级：the most beautiful。多音节形容词用most构成最高级。in our town表示范围。' },
      { sentence: 'Bill Frith\'s garden is larger than Joe\'s.', translation: '比尔·弗里思的花园比乔的大。', explanation: '比较级：larger than。单音节形容词加-er构成比较级。Joe\'s = Joe\'s garden，省略了garden。' },
      { sentence: 'Bill works harder than Joe and grows more flowers and vegetables.', translation: '比尔比乔更勤奋，种了更多的花和蔬菜。', explanation: 'harder是hard的比较级（副词比较级）。more flowers是many的比较级more + 名词。grows意为"种植"。' },
      { sentence: 'I always win a little prize for the worst garden in the town!', translation: '我总是为镇上最差的花园赢得一个小奖！', explanation: 'worst是bad的最高级。win a prize for意为"因...而获奖"。句中含有幽默和自嘲的意味。' },
    ],
    grammarSections: [
      {
        title: '比较级（Comparative）',
        content: '比较级用于两者之间的比较，结构为：比较级 + than  构成规则： - 单音节：加-er（tall→taller, hard→harder） - 以e结尾：加-r（large→larger） - 辅音+y：变y为i加-er（happy→happier） - 多音节：前面加more（interesting→more interesting）',
        examples: [
          { en: 'Bill\'s garden is larger than Joe\'s.', cn: '比尔的花园比乔的大。' },
          { en: 'Bill works harder than Joe.', cn: '比尔比乔更勤奋。' },
          { en: 'This book is more interesting than that one.', cn: '这本书比那本更有趣。' },
          { en: 'She is taller than her sister.', cn: '她比她姐姐高。' },
        ],
      },
      {
        title: '最高级（Superlative）',
        content: '最高级用于三者或以上的比较，结构为：the + 最高级  构成规则： - 单音节：加-est（tall→the tallest） - 以e结尾：加-st（large→the largest） - 辅音+y：变y为i加-est（happy→the happiest） - 多音节：前面加the most - 不规则：good→best, bad→worst, far→farthest',
        examples: [
          { en: 'Joe has the most beautiful garden in town.', cn: '乔拥有镇上最漂亮的花园。' },
          { en: 'It is the largest garden I have ever seen.', cn: '这是我见过最大的花园。' },
          { en: 'She is the best student in our class.', cn: '她是我们班最好的学生。' },
          { en: 'This is the worst movie of the year.', cn: '这是今年最差的电影。' },
        ],
      },
    ],
    patternDrills: [
      {
        pattern: 'A + is + 比较级 + than + B. A比B更_____。',
        substitutions: [
          { en: 'Bill\'s garden is larger than Joe\'s.', cn: '比尔的花园比乔的大。' },
          { en: 'This book is more interesting than that one.', cn: '这本书比那本更有趣。' },
          { en: 'She works harder than her brother.', cn: '她比她哥哥更勤奋。' },
          { en: 'My car is newer than yours.', cn: '我的车比你的新。' },
        ],
      },
      {
        pattern: 'sb/sth + is/has + the + 最高级 + in... 在...中最_____。',
        substitutions: [
          { en: 'Joe has the most beautiful garden in town.', cn: '乔拥有镇上最漂亮的花园。' },
          { en: 'She is the tallest girl in our class.', cn: '她是我们班最高的女孩。' },
          { en: 'This is the best restaurant in the city.', cn: '这是城里最好的餐厅。' },
          { en: 'He is the worst player on the team.', cn: '他是队里最差的球员。' },
        ],
      },
    ],
    exercises: [
      { type: 'choice', question: 'Bill\'s garden is _____ than Joe\'s.', options: ['A. large', 'B. larger', 'C. largest', 'D. the largest'], answer: 'B', explanation: '两者比较用比较级larger + than。' },
      { type: 'fill', question: 'Joe has the most _____ garden in our town. (漂亮的)', answer: 'beautiful', explanation: '最高级the most beautiful，多音节形容词用most构成最高级。' },
      { type: 'judge', question: '"worst"是"bad"的最高级形式。', answer: '正确', explanation: 'bad的比较级是worse，最高级是worst，属于不规则变化。' },
      { type: 'choice', question: 'Bill works _____ than Joe.', options: ['A. hard', 'B. harder', 'C. hardest', 'D. the hardest'], answer: 'B', explanation: '两者比较用比较级。hard的比较级是harder。' },
    ],
  },
  {
    id: 9,
    title: 'A cold welcome',
    titleCn: '冷遇',
    text: [
      'On Wednesday evening, we went to the Town Hall. It was the last day of the year and a large crowd of people had gathered under the Town Hall clock.',
      'It would strike twelve in twenty minutes\' time. Fifteen minutes passed and then, at five to twelve, the clock stopped.',
      'The big minute hand did not move. We waited and waited, but nothing happened.',
      'Suddenly someone shouted, "It\'s two minutes past twelve! The clock has stopped!"',
      'I looked at my watch. It was true. The big clock refused to welcome the New Year. At that moment, everybody began to laugh and sing.'
    ],
    textCn: [
      '周三晚上，我们去了市政厅。那是一年的最后一天，一大群人聚集在市政厅的大钟下面。',
      '再过二十分钟大钟就要敲响十二点。十五分钟过去了，然后在十二点差五分的时候，钟停了。',
      '巨大的分针不动了。我们等啊等，但什么也没发生。',
      '突然有人喊道："已经十二点零两分了！钟停了！"',
      '我看了看手表。确实如此。大钟拒绝迎接新年。就在那一刻，大家都开始又笑又唱。'
    ],
    vocabulary: [
      { word: 'welcome', phonetic: '/ˈwelkəm/', meaning: '欢迎' },
      { word: 'crowd', phonetic: '/kraʊd/', meaning: '人群' },
      { word: 'gather', phonetic: '/ˈɡæðə/', meaning: '聚集' },
      { word: 'strike', phonetic: '/straɪk/', meaning: '敲响' },
      { word: 'refuse', phonetic: '/rɪˈfjuːz/', meaning: '拒绝' },
      { word: 'shout', phonetic: '/ʃaʊt/', meaning: '喊叫' },
      { word: 'laugh', phonetic: '/lɑːf/', meaning: '笑' }
    ],
    notes: [
      '"in twenty minutes\' time" 二十分钟后。',
      '"at five to twelve" 十一点五十五分。',
      '"refuse to do" 拒绝做某事。'

    ],
    tags: ['一般现在时', '频率副词'],
    difficulty: 2,
    summary: '新年前夜，人们聚集在市政厅大钟下等待午夜钟声。在12点差5分时钟停了，人们等了很久才发现钟已停，随后大家开始欢笑歌唱。',
    summaryEn: 'On New Year\'s Eve, a crowd gathered under the Town Hall clock to hear it strike twelve. The clock stopped at five to twelve. When people realized it had stopped, they began to laugh and sing.',
    sentenceExplanations: [
      { sentence: 'It was the last day of the year and a large crowd of people had gathered under the Town Hall clock.', translation: '那是一年的最后一天，一大群人聚集在市政厅的大钟下面。', explanation: 'a crowd of people意为"一群人"。had gathered是过去完成时，表示在叙述之前已经完成的动作。under表示位置"在...下面"。' },
      { sentence: 'It would strike twelve in twenty minutes\' time.', translation: '再过二十分钟大钟就要敲响十二点了。', explanation: 'would表示过去将来时。strike twelve意为"敲响十二点"。in twenty minutes\' time = in twenty minutes，表示"二十分钟后"。所有格\'s后接time。' },
      { sentence: 'Fifteen minutes passed and then, at five to twelve, the clock stopped.', translation: '十五分钟过去了，在十二点差五分的时候，钟停了。', explanation: 'at five to twelve表示时间"11:55"。to表示"差"，past表示"过"。stopped是一般过去时。' },
      { sentence: 'The big clock refused to welcome the New Year.', translation: '大钟拒绝迎接新年。', explanation: 'refuse to do意为"拒绝做"。此处用拟人手法，赋予大钟人的行为。' },
      { sentence: 'At that moment, everybody began to laugh and sing.', translation: '就在那一刻，大家都开始又笑又唱。', explanation: 'at that moment意为"就在那一刻"。everybody后接单数动词。began是begin的过去式。laugh and sing并列作不定式。' },
    ],
    grammarSections: [
      {
        title: '时间表达法（Telling the Time）',
        content: '英语中表达时间有两种方式：  1. 直接读数字：twelve oh five (12:05) 2. 用past和to： - 半小时前用past：five past twelve (12:05) - 半小时后用to：five to twelve (11:55)  注意：quarter = 15分钟，half = 30分钟',
        examples: [
          { en: 'at five to twelve', cn: '在11:55（差5分12点）' },
          { en: 'at a quarter past three', cn: '在3:15' },
          { en: 'at half past nine', cn: '在9:30' },
          { en: 'at ten to seven', cn: '在6:50（差10分7点）' },
        ],
      },
      {
        title: 'would 表示过去将来时',
        content: 'would是will的过去式，用于过去语境中表示"将要"。  常用于： - 间接引语中（He said he would come.） - 过去的预测（It would rain later.） - 过去的计划（He would visit Darwin.）',
        examples: [
          { en: 'It would strike twelve in twenty minutes\' time.', cn: '再过二十分钟就要敲响十二点了。' },
          { en: 'He said he would help me.', cn: '他说他会帮我。' },
          { en: 'I knew she would come.', cn: '我知道她会来的。' },
          { en: 'They said they would arrive at noon.', cn: '他们说中午到。' },
        ],
      },
    ],
    patternDrills: [
      {
        pattern: 'at + 分钟 + to/past + 小时. 在_____点_____。',
        substitutions: [
          { en: 'at five to twelve', cn: '在11:55' },
          { en: 'at ten past nine', cn: '在9:10' },
          { en: 'at a quarter to eight', cn: '在7:45' },
          { en: 'at half past six', cn: '在6:30' },
        ],
      },
      {
        pattern: 'sb/sth + refused + to + 动词. 某人/物拒绝_____。',
        substitutions: [
          { en: 'The clock refused to welcome the New Year.', cn: '大钟拒绝迎接新年。' },
          { en: 'He refused to help me.', cn: '他拒绝帮我。' },
          { en: 'She refused to answer the question.', cn: '她拒绝回答问题。' },
          { en: 'The door refused to open.', cn: '门怎么也打不开。' },
        ],
      },
    ],
    exercises: [
      { type: 'choice', question: 'It would strike twelve _____ twenty minutes\' time.', options: ['A. at', 'B. on', 'C. in', 'D. for'], answer: 'C', explanation: '"in + 时间段"表示"在...之后"，用于将来时态。' },
      { type: 'fill', question: 'At _____ to twelve, the clock stopped. (差五分)', answer: 'five', explanation: '"at five to twelve"表示11:55，"差5分12点"。' },
      { type: 'judge', question: '"refuse to do"意为"拒绝做某事"。', answer: '正确', explanation: 'refuse后接不定式to do，表示拒绝做某事。' },
      { type: 'choice', question: 'The big clock _____ to welcome the New Year.', options: ['A. refuse', 'B. refused', 'C. refusing', 'D. refuses'], answer: 'B', explanation: '故事用过去时叙述，refuse的过去式是refused。' },
    ],
  },
  {
    id: 10,
    title: 'Not for jazz',
    titleCn: '不适于演奏爵士乐',
    text: [
      'We have an old musical instrument. It is called a clavichord. It was made in Germany in 1681.',
      'Our clavichord is kept in the living room. It has belonged to our family for a long time.',
      'The instrument was bought by my grandfather many years ago. Recently it was damaged by a visitor.',
      'She tried to play jazz on it! She struck the keys too hard and two of the strings were broken.',
      'My father was shocked. Now we are not allowed to touch it. It is being repaired by a friend of my father\'s.'
    ],
    textCn: [
      '我们有一件古老的乐器。它叫古钢琴。是1681年在德国制造的。',
      '我们的古钢琴放在客厅里。它在我们家已经很久了。',
      '这件乐器是我爷爷多年前买的。最近它被一个客人弄坏了。',
      '她试图在上面弹奏爵士乐！她按键太重，断了两根弦。',
      '我父亲很震惊。现在我们不许碰它。我父亲的一个朋友正在修理它。'
    ],
    vocabulary: [
      { word: 'jazz', phonetic: '/dʒæz/', meaning: '爵士乐' },
      { word: 'instrument', phonetic: '/ˈɪnstrəmənt/', meaning: '乐器' },
      { word: 'clavichord', phonetic: '/ˈklævɪkɔːd/', meaning: '古钢琴' },
      { word: 'belong', phonetic: '/bɪˈlɒŋ/', meaning: '属于' },
      { word: 'recently', phonetic: '/ˈriːsntli/', meaning: '最近' },
      { word: 'damage', phonetic: '/ˈdæmɪdʒ/', meaning: '损坏' },
      { word: 'string', phonetic: '/strɪŋ/', meaning: '弦' },
      { word: 'shock', phonetic: '/ʃɒk/', meaning: '使震惊' }
    ],
    notes: [
      '被动语态：is called, was made, was damaged。',
      '"belong to" 属于，不用进行时、不用被动。',
      '"It is being repaired" 现在进行时被动语态。'

    ],
    tags: ['被动语态', '一般过去时'],
    difficulty: 3,
    summary: '作者家有一架1681年德国制造的古钢琴，是祖父多年前买的。最近一位客人试图在上面弹爵士乐，按键太重弄断了两根弦，父亲很震惊，现在不许任何人碰它。',
    summaryEn: 'The family owns an old clavichord made in Germany in 1681. A visitor tried to play jazz on it and broke two strings. The father was shocked and now nobody is allowed to touch it while it is being repaired.',
    sentenceExplanations: [
      { sentence: 'It is called a clavichord.', translation: '它叫古钢琴。', explanation: '被动语态：is called意为"被称为"。被动结构为be + 过去分词。' },
      { sentence: 'It was made in Germany in 1681.', translation: '它是1681年在德国制造的。', explanation: '被动语态过去时：was made。in Germany表示产地，in 1681表示时间。' },
      { sentence: 'It has belonged to our family for a long time.', translation: '它在我们家已经很久了。', explanation: 'belong to意为"属于"。注意：belong to不用于被动语态，也不用于进行时。for a long time表示持续时间。' },
      { sentence: 'She struck the keys too hard and two of the strings were broken.', translation: '她按键太重，断了两根弦。', explanation: 'struck是strike的过去式。too hard意为"太用力"。were broken是被动语态，表示弦被弄断了。' },
      { sentence: 'It is being repaired by a friend of my father\'s.', translation: '我父亲的一个朋友正在修理它。', explanation: '现在进行时被动语态：is/are being + 过去分词。a friend of my father\'s是双重所有格。' },
    ],
    grammarSections: [
      {
        title: '被动语态（Passive Voice）',
        content: '被动语态强调动作的承受者，结构为be + 过去分词。  各时态的被动语态： - 一般现在时：is/are + done - 一般过去时：was/were + done - 现在进行时：is/are being + done - 现在完成时：have/has been + done  by后接动作执行者（施动者）。',
        examples: [
          { en: 'It is called a clavichord.', cn: '它叫古钢琴。' },
          { en: 'It was made in Germany in 1681.', cn: '它是1681年在德国制造的。' },
          { en: 'It was damaged by a visitor.', cn: '它被一个客人弄坏了。' },
          { en: 'It is being repaired by a friend.', cn: '一个朋友正在修理它。' },
        ],
      },
      {
        title: 'belong to 的特殊用法',
        content: '"belong to"意为"属于"，有两个重要特点：  1. 不用于被动语态（不能说is belonged to） 2. 不用于进行时（不能说is belonging to）  这是因为belong是状态动词，不是动作动词。',
        examples: [
          { en: 'It has belonged to our family for a long time.', cn: '它属于我们家已经很久了。' },
          { en: 'This book belongs to me.', cn: '这本书是我的。' },
          { en: 'The house belongs to my uncle.', cn: '这房子是我叔叔的。' },
          { en: 'Who does this bag belong to?', cn: '这个包是谁的？' },
        ],
      },
    ],
    patternDrills: [
      {
        pattern: 'sth + is/was + 过去分词 + (by sb). 某物被_____。',
        substitutions: [
          { en: 'It is called a clavichord.', cn: '它叫古钢琴。' },
          { en: 'It was made in Germany.', cn: '它是德国制造的。' },
          { en: 'The window was broken by the ball.', cn: '窗户被球打破了。' },
          { en: 'The letter was written by my sister.', cn: '这封信是我姐姐写的。' },
        ],
      },
      {
        pattern: 'sth + is/are being + 过去分词 + (by sb). 某物正在被_____。',
        substitutions: [
          { en: 'It is being repaired by a friend.', cn: '它正在被一个朋友修理。' },
          { en: 'The house is being painted.', cn: '房子正在被粉刷。' },
          { en: 'The road is being repaired.', cn: '道路正在被修缮。' },
          { en: 'The cake is being made by my mother.', cn: '蛋糕正在被妈妈做。' },
        ],
      },
    ],
    exercises: [
      { type: 'choice', question: 'It _____ made in Germany in 1681.', options: ['A. is', 'B. was', 'C. has', 'D. had'], answer: 'B', explanation: '被动语态过去时：was/were + 过去分词。it是单数，用was。' },
      { type: 'fill', question: 'It has _____ to our family for a long time. (属于)', answer: 'belonged', explanation: '现在完成时has + 过去分词，belong的过去分词是belonged。' },
      { type: 'judge', question: '"It is being repaired"是现在进行时的被动语态。', answer: '正确', explanation: '结构为is being + 过去分词，表示"正在被..."。' },
      { type: 'choice', question: 'Two of the strings _____ broken.', options: ['A. was', 'B. were', 'C. are', 'D. is'], answer: 'B', explanation: '主语two of the strings是复数，被动语态过去时用were + 过去分词。' },
    ],
  },
  {
    id: 11,
    title: 'One good turn deserves another',
    titleCn: '礼尚往来',
    text: [
      'I was having dinner at a restaurant when Tony Steele came in.',
      'Tony worked in a lawyer\'s office years ago, but he is now working at a bank.',
      'He gets a good salary, but he always borrows money from his friends and never pays it back.',
      'Tony saw me and came and sat at the same table. He has never borrowed money from me.',
      'While he was eating, I asked him to lend me twenty pounds.',
      'To my surprise, he gave me the money immediately. "I have never borrowed any money from you," Tony said, "so now you can pay for my dinner!"'
    ],
    textCn: [
      '我正在一家餐馆吃饭，这时托尼·斯蒂尔走了进来。',
      '托尼几年前在一家律师事务所工作，但现在在一家银行工作。',
      '他的薪水很高，但他总是向朋友借钱而且从来不还。',
      '托尼看见我，就走过来和我坐在同一张桌子旁。他从未向我借过钱。',
      '他吃饭的时候，我向他借二十英镑。',
      '令我吃惊的是，他立刻把钱给了我。"我从来没向你借过钱，"托尼说，"所以现在你可以替我付饭钱了！"'
    ],
    vocabulary: [
      { word: 'turn', phonetic: '/tɜːn/', meaning: '行为' },
      { word: 'deserve', phonetic: '/dɪˈzɜːv/', meaning: '值得' },
      { word: 'restaurant', phonetic: '/ˈrestrɒnt/', meaning: '餐馆' },
      { word: 'lawyer', phonetic: '/ˈlɔːjə/', meaning: '律师' },
      { word: 'salary', phonetic: '/ˈsæləri/', meaning: '薪水' },
      { word: 'borrow', phonetic: '/ˈbɒrəʊ/', meaning: '借入' },
      { word: 'lend', phonetic: '/lend/', meaning: '借出' },
      { word: 'immediately', phonetic: '/ɪˈmiːdiətli/', meaning: '立刻' }
    ],
    notes: [
      '"One good turn deserves another" — 礼尚往来。',
      'borrow from... 借入 / lend to... 借出。',
      '"never pays it back" 从不还钱。'

    ],
    tags: ['一般过去时', '比较级'],
    difficulty: 2,
  },
  {
    id: 12,
    title: 'Goodbye and good luck',
    titleCn: '再见，一路顺风',
    text: [
      'Our neighbour, Captain Charles Alison, will sail from Portsmouth tomorrow.',
      'We\'ll meet him at the harbour early in the morning.',
      'He will be in his small boat, Topsail.',
      'Topsail is a famous little boat. It has sailed across the Atlantic many times.',
      'Captain Alison will set out at eight o\'clock, so we\'ll have plenty of time.'
    ],
    textCn: [
      '我们的邻居查尔斯·艾利森船长明天将从朴次茅斯启航。',
      '我们将在清晨到港口去送他。',
      '他将在他的小船"涛波赛尔"号上。',
      '"涛波赛尔"是一艘有名的小船，它已经横渡大西洋很多次了。',
      '艾利森船长将于八点出发，因此我们有充裕的时间。'
    ],
    vocabulary: [
      { word: 'captain', phonetic: '/ˈkæptɪn/', meaning: '船长' },
      { word: 'sail', phonetic: '/seɪl/', meaning: '航行' },
      { word: 'harbour', phonetic: '/ˈhɑːbə/', meaning: '港口' },
      { word: 'famous', phonetic: '/ˈfeɪməs/', meaning: '著名的' },
      { word: 'Atlantic', phonetic: '/ətˈlæntɪk/', meaning: '大西洋' },
      { word: 'set out', phonetic: '/set aʊt/', meaning: '出发' },
      { word: 'plenty', phonetic: '/ˈplenti/', meaning: '充裕' }
    ],
    notes: [
      'will + 动词原形 表示将来。',
      '"set out" = set off，出发。',
      '"plenty of" 充裕的。'

    ],
    tags: ['一般将来时', 'will'],
    difficulty: 2,
  },
  {
    id: 13,
    title: 'The Greenwood Boys',
    titleCn: '绿林少年',
    text: [
      'The Greenwood Boys are a group of popular singers.',
      'At present, they are visiting all parts of the country.',
      'They will be arriving here tomorrow.',
      'They will be coming by train and most of the young people in the town will be meeting them at the station.',
      'Tomorrow evening they will be singing at the Workers\' Club.'
    ],
    textCn: [
      '"绿林少年"是一个流行歌曲演唱团。',
      '目前他们正在全国各地巡回演出。',
      '他们明天将到达这里。',
      '他们将乘火车来，镇上大部分年轻人将到车站迎接他们。',
      '明天晚上他们将在工人俱乐部演唱。'
    ],
    vocabulary: [
      { word: 'group', phonetic: '/ɡruːp/', meaning: '群，组' },
      { word: 'singer', phonetic: '/ˈsɪŋə/', meaning: '歌手' },
      { word: 'present', phonetic: '/ˈpreznt/', meaning: '目前的' },
      { word: 'station', phonetic: '/ˈsteɪʃn/', meaning: '车站' },
      { word: 'club', phonetic: '/klʌb/', meaning: '俱乐部' }
    ],
    notes: [
      '将来进行时：will be + doing。',
      '"at present" 目前。',
      '"all parts of the country" 全国各地。'

    ],
    tags: ['一般将来时', 'be going to'],
    difficulty: 2,
  },
  {
    id: 14,
    title: 'Do you speak English?',
    titleCn: '你会说英语吗？',
    text: [
      'I had an amusing experience last year.',
      'After I had left a small village in the south of France, I drove on to the next town.',
      'On the way, a young man waved to me. I stopped and he asked me for a lift.',
      'As soon as he had got into the car, I said good morning to him in French and he replied in the same language.',
      'Neither of us spoke during the journey.',
      'I had nearly reached the town, when the young man said, very slowly, "Do you speak English?"'
    ],
    textCn: [
      '去年我有一次有趣的经历。',
      '在离开法国南部的一个小村庄后，我继续驶向下一个城镇。',
      '途中，一个年轻人向我招手。我停了下来，他请求搭车。',
      '他一上车，我就用法语向他道了早安，他也用同样的语言回答了我。',
      '整个旅途中我们谁也没说话。',
      '快到城镇时，那个年轻人慢慢地说道："你会说英语吗？"'
    ],
    vocabulary: [
      { word: 'amusing', phonetic: '/əˈmjuːzɪŋ/', meaning: '有趣的' },
      { word: 'experience', phonetic: '/ɪkˈspɪəriəns/', meaning: '经历' },
      { word: 'wave', phonetic: '/weɪv/', meaning: '招手' },
      { word: 'lift', phonetic: '/lɪft/', meaning: '搭车' },
      { word: 'reply', phonetic: '/rɪˈplaɪ/', meaning: '回答' },
      { word: 'language', phonetic: '/ˈlæŋɡwɪdʒ/', meaning: '语言' },
      { word: 'journey', phonetic: '/ˈdʒɜːni/', meaning: '旅程' }
    ],
    notes: [
      '过去完成时：had left / had got / had reached。',
      '"as soon as" 一...就...。',
      '"neither of us" 我们两个都不。'

    ],
    tags: ['一般过去时', '叙述文'],
    difficulty: 2,
  },
  {
    id: 15,
    title: 'Good news',
    titleCn: '好消息',
    text: [
      'The secretary told me that Mr. Harmsworth would see me.',
      'I felt very nervous when I went into his office.',
      'He did not look up from his desk when I entered.',
      'After I had sat down, he said that business was very bad.',
      'He told me that the firm could not afford to pay such large salaries.',
      'Twenty people had already left. "I knew," he said, "that you would not be glad to hear this."',
      '"Mr. Harmsworth," I said, "I have some good news for you."'
    ],
    textCn: [
      '秘书告诉我哈姆斯沃斯先生要见我。',
      '我走进他的办公室时感到非常紧张。',
      '我进去时他连头都没抬。',
      '我坐下后，他说生意非常不好。',
      '他告诉我公司无法支付这么高的工资。',
      '已经走了二十个人了。"我知道，"他说，"你听到这个消息不会高兴的。"',
      '"哈姆斯沃斯先生，"我说，"我有好消息告诉您。"'
    ],
    vocabulary: [
      { word: 'secretary', phonetic: '/ˈsekrətri/', meaning: '秘书' },
      { word: 'nervous', phonetic: '/ˈnɜːvəs/', meaning: '紧张的' },
      { word: 'afford', phonetic: '/əˈfɔːd/', meaning: '负担得起' },
      { word: 'already', phonetic: '/ɔːlˈredi/', meaning: '已经' },
      { word: 'glad', phonetic: '/ɡlæd/', meaning: '高兴的' }
    ],
    notes: [
      '间接引语（宾语从句）。',
      '"could not afford to do" 负担不起。',
      '"look up" 抬头看。'

    ],
    tags: ['间接引语', '宾语从句'],
    difficulty: 4,
  },
  {
    id: 16,
    title: 'A polite request',
    titleCn: '礼貌的请求',
    text: [
      'If you park your car in the wrong place, a traffic policeman will soon find it.',
      'You will be very lucky if he lets you go without a ticket.',
      'However, this does not always happen.',
      'Traffic police are sometimes very polite.',
      'During a holiday in Sweden, I found this note on my car: "Sir, we welcome you to our city. This is a No Parking area. You will enjoy your stay here if you pay attention to our street signs."'
    ],
    textCn: [
      '如果你把车停错了地方，交通警察很快就会发现它。',
      '如果他让你走不开罚单，那你就很幸运了。',
      '然而，事情并不总是这样。',
      '交通警察有时非常有礼貌。',
      '在瑞典度假期间，我在车上发现了这张纸条："先生，欢迎您来到我们的城市。这里是禁止停车区。如果您注意我们的路标，您会在这里过得愉快的。"'
    ],
    vocabulary: [
      { word: 'polite', phonetic: '/pəˈlaɪt/', meaning: '礼貌的' },
      { word: 'request', phonetic: '/rɪˈkwest/', meaning: '请求' },
      { word: 'park', phonetic: '/pɑːk/', meaning: '停车' },
      { word: 'traffic', phonetic: '/ˈtræfɪk/', meaning: '交通' },
      { word: 'ticket', phonetic: '/ˈtɪkɪt/', meaning: '罚单' },
      { word: 'sign', phonetic: '/saɪn/', meaning: '标志' }
    ],
    notes: [
      '第一类条件句：if + 一般现在时，主句用 will。',
      '"No Parking" 禁止停车。',
      '"pay attention to" 注意。'

    ],
    tags: ['条件句', 'if'],
    difficulty: 3,
  },
  {
    id: 17,
    title: 'Always young',
    titleCn: '永远年轻',
    text: [
      'My aunt Jennifer is an actress. She must be at least thirty-five years old.',
      'In spite of this, she often appears on the stage as a young girl.',
      'Jennifer will have to take part in a new play soon.',
      'This time, she will be a girl of seventeen.',
      'In the play, she must appear in a bright red dress and long black stockings.'
    ],
    textCn: [
      '我姑姑詹妮弗是演员。她至少三十五岁了。',
      '尽管如此，她经常在舞台上扮演年轻姑娘。',
      '詹妮弗很快就要参加一个新剧的演出。',
      '这次她要扮演一个十七岁的少女。',
      '在剧中，她必须穿鲜红色的连衣裙和黑色长袜。'
    ],
    vocabulary: [
      { word: 'actress', phonetic: '/ˈæktrɪs/', meaning: '女演员' },
      { word: 'stage', phonetic: '/steɪdʒ/', meaning: '舞台' },
      { word: 'appear', phonetic: '/əˈpɪə/', meaning: '出现' },
      { word: 'bright', phonetic: '/braɪt/', meaning: '鲜艳的' },
      { word: 'stocking', phonetic: '/ˈstɒkɪŋ/', meaning: '长袜' }
    ],
    notes: [
      '"must be" 表示推测（一定是）。',
      '"in spite of" 尽管。',
      '"take part in" 参加。'

    ],
    tags: ['情态动词', 'must/have to'],
    difficulty: 2,
  },
  {
    id: 18,
    title: 'He often does this!',
    titleCn: '他经常干这种事！',
    text: [
      'After I had had lunch at a village pub, I looked for my bag.',
      'I had left it on a chair beside the door and now it wasn\'t there!',
      'As I was looking for it, the landlord came in.',
      '"Did you have a good meal?" he asked.',
      '"Yes, thank you," I answered, "but I can\'t pay the bill. I haven\'t got my bag."',
      'The landlord smiled and immediately went out. In a few minutes he returned with my bag and gave it back to me. "I\'m very sorry," he said. "My dog had taken it into the garden. He often does this!"'
    ],
    textCn: [
      '我在一家乡村小酒馆吃完午饭后，找我的包。',
      '我把包放在门边的椅子上，现在不见了！',
      '我正在找的时候，店主走了进来。',
      '"您吃得好吗？"他问。',
      '"好，谢谢，"我回答，"但我不能付账了。我的包不见了。"',
      '店主笑了笑，立刻走了出去。几分钟后他拿着我的包回来了。"非常抱歉，"他说。"我的狗把它叼到花园里去了。它经常干这种事！"'
    ],
    vocabulary: [
      { word: 'pub', phonetic: '/pʌb/', meaning: '酒馆' },
      { word: 'beside', phonetic: '/bɪˈsaɪd/', meaning: '在...旁边' },
      { word: 'landlord', phonetic: '/ˈlændlɔːd/', meaning: '店主' },
      { word: 'bill', phonetic: '/bɪl/', meaning: '账单' },
      { word: 'return', phonetic: '/rɪˈtɜːn/', meaning: '回来' }
    ],
    notes: [
      '"had had" 过去完成时（have lunch）。',
      '"looked for" 寻找。',
      '"give back" 归还。'

    ],
    tags: ['一般过去时', '时间状语'],
    difficulty: 2,
  },
  {
    id: 19,
    title: 'Sold out',
    titleCn: '售完',
    text: [
      '"The play may begin at any moment," I said. "It may have begun already," Susan answered.',
      'I hurried to the ticket office. "May I have two tickets please?" I asked. "I\'m sorry, we\'ve sold out," the girl said.',
      '"What a pity!" Susan exclaimed.',
      'Just then, a man hurried to the ticket office. "Can I return these two tickets?" he asked. "Certainly," the girl said.',
      '"Could I have those two tickets please?" I asked. "Certainly," the girl said, "but they are for next Wednesday\'s performance. Do you still want them?"'
    ],
    textCn: [
      '"剧随时都可能开演，"我说。"也许已经开演了，"苏珊回答。',
      '我赶紧到售票处。"请给我两张票好吗？"我问。"抱歉，票卖完了，"那位姑娘说。',
      '"真遗憾！"苏珊大声说。',
      '就在这时，一个人急匆匆地走到售票处。"我能退这两张票吗？"他问。"当然可以，"姑娘说。',
      '"把那两张票给我好吗？"我问。"当然，"姑娘说，"但这是下星期三的演出。你们还要吗？"'
    ],
    vocabulary: [
      { word: 'sold out', phonetic: '/səʊld aʊt/', meaning: '售完' },
      { word: 'hurry', phonetic: '/ˈhʌri/', meaning: '赶快' },
      { word: 'pity', phonetic: '/ˈpɪti/', meaning: '遗憾' },
      { word: 'exclaim', phonetic: '/ɪkˈskleɪm/', meaning: '大声说' },
      { word: 'return', phonetic: '/rɪˈtɜːn/', meaning: '退还' },
      { word: 'performance', phonetic: '/pəˈfɔːməns/', meaning: '演出' }
    ],
    notes: [
      '"may have begun" 对过去的推测。',
      '"May I...?" / "Could I...?" 礼貌请求。',
      '"sold out" 售完。'

    ],
    tags: ['情态动词', 'can/could'],
    difficulty: 2,
  },
  {
    id: 20,
    title: 'One man in a boat',
    titleCn: '独坐孤舟',
    text: [
      'Fishing is my favourite sport. I often fish for hours without catching anything.',
      'But this does not worry me. Some fishermen are unlucky.',
      'Instead of catching fish, they catch old boots and rubbish.',
      'I am even less lucky. I never catch anything — not even old boots.',
      'After having spent whole mornings on the river, I always go home with an empty bag.'
    ],
    textCn: [
      '钓鱼是我最喜欢的运动。我常常钓好几个小时什么也钓不到。',
      '但这并不使我担忧。有些钓鱼人运气不好。',
      '他们钓不到鱼，却钓上来旧靴子和垃圾。',
      '我的运气甚至更差。我什么也没钓上来过——连旧靴子也没有。',
      '在河上度过整个上午后，我总是带着空包回家。'
    ],
    vocabulary: [
      { word: 'fishing', phonetic: '/ˈfɪʃɪŋ/', meaning: '钓鱼' },
      { word: 'favourite', phonetic: '/ˈfeɪvərɪt/', meaning: '最喜欢的' },
      { word: 'fisherman', phonetic: '/ˈfɪʃəmən/', meaning: '渔夫' },
      { word: 'unlucky', phonetic: '/ʌnˈlʌki/', meaning: '不幸运的' },
      { word: 'boot', phonetic: '/buːt/', meaning: '靴子' },
      { word: 'rubbish', phonetic: '/ˈrʌbɪʃ/', meaning: '垃圾' },
      { word: 'empty', phonetic: '/ˈempti/', meaning: '空的' }
    ],
    notes: [
      '动名词作主语："Fishing is my favourite sport."',
      '"instead of" 代替，而不是。',
      '"even less luckier" 更不幸运。'

    ],
    tags: ['现在完成时', 'already/yet'],
    difficulty: 3,
  },
]

export default book2
