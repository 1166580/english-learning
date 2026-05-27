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
    summaryEn: 'Experts from London Zoo investigated reports of a wild puma spotted south of London but were unable to capture it despite accumulating evidence.',
    sentenceExplanations: [
      { sentence: 'Pumas are large, cat-like animals which are found in America.', translation: '美洲狮是在美洲发现的大型猫科动物。', explanation: 'which引导定语从句修饰animals。cat-like是复合形容词。' },
      { sentence: 'The descriptions given by people who claimed to have seen the puma were extraordinarily similar.', translation: '声称见过美洲狮的人给出的描述出奇地相似。', explanation: 'given by people是过去分词短语作后置定语。who引导定语从句。' },
      { sentence: 'Experts confirmed that a puma will not attack a human being unless it is cornered.', translation: '专家确认美洲狮除非被逼到绝境，否则不会攻击人类。', explanation: 'unless引导条件状语从句，相当于if...not。is cornered是被动语态。' },
      { sentence: 'The search proved difficult, for the puma was often observed at one place in the morning and at another place twenty miles away in the evening.', translation: '搜索工作证明很困难，因为美洲狮常常早上在一个地方被发现，晚上却在二十英里外。', explanation: 'for引导原因状语从句。was observed是被动语态。' }
    ],
    grammarSections: [
      { title: '定语从句（关系代词）', content: '定语从句由关系代词who/which/that引导，修饰先行词。who修饰人，which修饰物，that两者皆可。', examples: [
        { en: 'The man who called you is my brother.', cn: '给你打电话的人是我哥哥。' },
        { en: 'The book which I bought is interesting.', cn: '我买的那本书很有趣。' },
        { en: 'The house that stands on the hill is old.', cn: '山上的那座房子很旧。' }
      ] },
      { title: 'unless 引导条件从句', content: '"unless"意为"除非"，相当于"if...not"。引导条件状语从句。', examples: [
        { en: 'I will go unless it rains. = I will go if it does not rain.', cn: '除非下雨，否则我就去。' },
        { en: 'A puma will not attack unless it is cornered.', cn: '美洲狮除非被逼到绝境，否则不会攻击。' },
        { en: 'You will fail unless you work harder.', cn: '除非你更努力，否则会失败。' }
      ] }
    ],
    patternDrills: [
      { pattern: 'The ___ which/who ___ was/were ___.', substitutions: [
        { en: 'descriptions / were given / similar', cn: '描述 / 被给出 / 相似' },
        { en: 'man / lives next door / a doctor', cn: '人 / 住在隔壁 / 医生' },
        { en: 'puma / was spotted / near London', cn: '美洲狮 / 被发现 / 在伦敦附近' }
      ] },
      { pattern: '___ will not ___ unless ___.', substitutions: [
        { en: 'A puma / attack / it is cornered', cn: '美洲狮 / 攻击 / 被逼到绝境' },
        { en: 'You / succeed / you work hard', cn: '你 / 成功 / 努力工作' },
        { en: 'Plants / grow / they get sunlight', cn: '植物 / 生长 / 得到阳光' }
      ] }
    ],
    exercises: [
      { type: 'choice', question: 'The puma was often observed at one place in the morning and at another place twenty miles _____ in the evening.', options: ['A. away', 'B. far', 'C. long', 'D. distance'], answer: 'A', explanation: '"twenty miles away"表示二十英里外。' },
      { type: 'fill', question: 'Experts _____ that a puma will not attack a human being. (确认)', answer: 'confirmed', explanation: 'confirm表示确认。' },
      { type: 'judge', question: '"unless" 相当于 "if...not"。', answer: '正确', explanation: 'unless = if...not，引导条件状语从句。' },
      { type: 'choice', question: 'The descriptions given by people who _____ to have seen the puma were similar.', options: ['A. claim', 'B. claimed', 'C. claiming', 'D. claims'], answer: 'B', explanation: 'who引导的定语从句中，claimed是过去式。' }
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
    summaryEn: 'The vicar discovered that the church clock struck thirteen at night, finding that the local grocer Bill had been secretly repairing it.',
    sentenceExplanations: [
      { sentence: 'Our vicar is always raising money for one cause or another.', translation: '我们的牧师总是为各种事由筹款。', explanation: 'is always doing表示不满或抱怨的语气，暗含"总是"的意思。' },
      { sentence: 'He has never managed to get enough money to have the church clock repaired.', translation: '他从未筹到足够的钱来修缮教堂的钟。', explanation: 'have sth done表示"让某物被..."，钟是被修的。' },
      { sentence: 'The big clock which used to strike the hours day and night was damaged many years ago.', translation: '这座过去日夜报时的大钟在很多年前就坏了。', explanation: 'used to表示过去的习惯。which引导定语从句。' },
      { sentence: 'Armed with a torch, the vicar went up into the clock tower.', translation: '牧师拿着手电筒上了钟楼。', explanation: 'Armed with是过去分词短语作状语，表示"装备着"。' }
    ],
    grammarSections: [
      { title: 'have sth done 结构', content: '"have + 宾语 + 过去分词"表示让别人做某事或遭遇某事。宾语和过去分词是被动关系。', examples: [
        { en: 'I had my car repaired. (让别人修车)', cn: '让某人做某事' },
        { en: 'He had his wallet stolen. (钱包被偷)', cn: '遭遇某事' },
        { en: 'She had her hair cut. (剪头发)', cn: '让别人做某事' }
      ] },
      { title: 'used to 过去常常', content: '"used to + 动词原形"表示过去经常做但现在已经不做的事。', examples: [
        { en: 'I used to play football. (过去常踢球)', cn: '现在不踢了' },
        { en: 'She used to live in London. (过去住伦敦)', cn: '现在不住了' },
        { en: 'The clock used to strike. (过去常报时)', cn: '现在不报时了' }
      ] }
    ],
    patternDrills: [
      { pattern: 'I/He had ___ repaired/stolen/cut.', substitutions: [
        { en: 'my car', cn: '我的车' },
        { en: 'his wallet', cn: '他的钱包' },
        { en: 'her hair', cn: '她的头发' },
        { en: 'the clock', cn: '钟' }
      ] },
      { pattern: 'I/He used to ___, but now ___.', substitutions: [
        { en: 'play football / I play tennis', cn: '踢足球 / 打网球' },
        { en: 'live in London / I live in Paris', cn: '住伦敦 / 住巴黎' },
        { en: 'smoke / I don\'t smoke', cn: '抽烟 / 不抽了' }
      ] }
    ],
    exercises: [
      { type: 'choice', question: 'He had the clock _____.', options: ['A. repair', 'B. repaired', 'C. repairing', 'D. repairs'], answer: 'B', explanation: 'have sth done用过去分词。' },
      { type: 'fill', question: 'The clock _____ to strike the hours. (过去常常)', answer: 'used', explanation: '"used to"表示过去常常。' },
      { type: 'judge', question: '"is always raising" 表示不满的语气。', answer: '正确', explanation: 'be always doing暗含抱怨。' },
      { type: 'choice', question: '_____ with a torch, he went up into the tower.', options: ['A. Arming', 'B. Armed', 'C. Arm', 'D. Arms'], answer: 'B', explanation: 'Armed with是过去分词短语作状语。' }
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
    summaryEn: 'Archaeologists excavated an ancient city and temple on the Aegean island of Kea, discovering it was once highly prosperous.',
    sentenceExplanations: [
      { sentence: 'An American team explored a temple which stands in an ancient city.', translation: '一支美国队伍在一座古城里发掘了一座神庙。', explanation: 'which引导定语从句修饰temple。stands表示"坐落于"。' },
      { sentence: 'The city at one time must have been prosperous, for it enjoyed a high level of civilization.', translation: '这座城市一度肯定很繁荣，因为它享有高度的文明。', explanation: 'must have been是对过去的肯定推测。for引导原因状语从句。' },
      { sentence: 'Houses — often three storeys high — were built of stone.', translation: '房屋——常常有三层楼高——是用石头建造的。', explanation: '破折号内是插入语。be built of意为"由...建造"。' },
      { sentence: 'The city was even equipped with a drainage system.', translation: '城里甚至配备了排水系统。', explanation: 'be equipped with意为"配备有"。' }
    ],
    grammarSections: [
      { title: 'must have been 过去肯定推测', content: '"must have been/done"表示对过去的肯定推测，意为"一定是...的"。', examples: [
        { en: 'He must have been tired. (他一定很累)', cn: '对过去的推测' },
        { en: 'She must have left. (她一定已经走了)', cn: '对过去的推测' },
        { en: 'The city must have been prosperous. (城市一定很繁荣)', cn: '对过去的推测' }
      ] },
      { title: '被动语态 be built/equipped', content: '被动语态结构：be + 过去分词。强调动作的承受者。', examples: [
        { en: 'Houses were built of stone.', cn: '房屋是用石头建造的。' },
        { en: 'The city was equipped with a drainage system.', cn: '城市配备了排水系统。' },
        { en: 'The temple was used as a place of worship.', cn: '神庙被用作祭祀场所。' }
      ] }
    ],
    patternDrills: [
      { pattern: 'The ___ must have been ___.', substitutions: [
        { en: 'city / prosperous', cn: '城市 / 繁荣的' },
        { en: 'man / very tired', cn: '人 / 很累的' },
        { en: 'house / very old', cn: '房子 / 很旧的' }
      ] },
      { pattern: 'The ___ was/were built/equipped with ___.', substitutions: [
        { en: 'city / a drainage system', cn: '城市 / 排水系统' },
        { en: 'house / stone', cn: '房子 / 石头' },
        { en: 'temple / beautiful walls', cn: '神庙 / 美丽的墙壁' }
      ] }
    ],
    exercises: [
      { type: 'choice', question: 'The city must _____ been very prosperous.', options: ['A. has', 'B. have', 'C. had', 'D. having'], answer: 'B', explanation: 'must have been是固定结构。' },
      { type: 'fill', question: 'Houses were _____ of stone. (建造)', answer: 'built', explanation: 'be built of由...建造。' },
      { type: 'judge', question: '"must have been" 表示对过去的肯定推测。', answer: '正确', explanation: 'must have been意为"一定是...的"。' },
      { type: 'choice', question: 'The city was equipped _____ a drainage system.', options: ['A. by', 'B. in', 'C. with', 'D. of'], answer: 'C', explanation: 'be equipped with配备有。' }
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
    summaryEn: 'Alfred the dustman dressed in a suit daily to pretend he was a white-collar worker, keeping his job secret from his wife for over two years.',
    sentenceExplanations: [
      { sentence: 'People who work in offices are frequently referred to as "white-collar workers".', translation: '坐办公室的人常被称为"白领工作者"。', explanation: 'be referred to as意为"被称为"。who引导定语从句。' },
      { sentence: 'Such is human nature, that a great many people are often willing to sacrifice higher pay for the privilege of becoming white-collar workers.', translation: '人性就是如此，很多人愿意牺牲高薪来换取成为白领的特权。', explanation: 'Such is human nature是倒装句。be willing to意为愿意。' },
      { sentence: 'When he got married, Alf was too embarrassed to say anything to his wife about his job.', translation: '结婚时，阿尔弗雷德太尴尬了，没有告诉妻子自己的工作。', explanation: 'too...to...意为"太...以至于不能..."。' },
      { sentence: 'Every morning, he left home dressed in a smart black suit.', translation: '每天早上，他穿着漂亮的黑色西装出门。', explanation: 'dressed in是过去分词短语作伴随状语。' }
    ],
    grammarSections: [
      { title: 'be referred to as 被称为', content: '"be referred to as"意为"被称为"，是正式表达。类似的还有be known as, be called。', examples: [
        { en: 'He is referred to as a genius.', cn: '他被称为天才。' },
        { en: 'She is known as a great writer.', cn: '她被称为伟大的作家。' },
        { en: 'They are called white-collar workers.', cn: '他们被称为白领。' }
      ] },
      { title: 'too...to... 太...以至于不能', content: '"too + 形容词 + to do"表示"太...以至于不能..."。', examples: [
        { en: 'He was too embarrassed to say anything.', cn: '他太尴尬了，什么都说不出来。' },
        { en: 'She is too young to go to school.', cn: '她太小了，不能上学。' },
        { en: 'It was too cold to go outside.', cn: '天太冷了，不能出门。' }
      ] }
    ],
    patternDrills: [
      { pattern: '___ is/are referred to as ___.', substitutions: [
        { en: 'Office workers / white-collar workers', cn: '办公室职员 / 白领' },
        { en: 'He / a genius', cn: '他 / 天才' },
        { en: 'They / heroes', cn: '他们 / 英雄' }
      ] },
      { pattern: 'He/She was too ___ to ___.', substitutions: [
        { en: 'embarrassed / say anything', cn: '尴尬 / 说什么' },
        { en: 'tired / walk', cn: '累 / 走路' },
        { en: 'shy / speak', cn: '害羞 / 说话' }
      ] }
    ],
    exercises: [
      { type: 'choice', question: 'Office workers are frequently referred _____ as "white-collar workers".', options: ['A. for', 'B. to', 'C. with', 'D. of'], answer: 'B', explanation: 'be referred to as是固定搭配。' },
      { type: 'fill', question: 'He was too _____ to say anything. (尴尬的)', answer: 'embarrassed', explanation: 'too embarrassed to...太尴尬以至于不能...' },
      { type: 'judge', question: '"Such is human nature" 是倒装句。', answer: '正确', explanation: 'Such放在句首引起倒装。' },
      { type: 'choice', question: 'He left home _____ in a smart black suit.', options: ['A. dress', 'B. dressed', 'C. dressing', 'D. dresses'], answer: 'B', explanation: 'dressed in是过去分词短语作伴随状语。' }
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
    summaryEn: 'A magazine editor insisted that a journalist verify exact facts about the presidential palace, showing the extreme pursuit of accuracy.',
    sentenceExplanations: [
      { sentence: 'Editors of newspapers and magazines often go to extremes to provide their readers with unimportant facts.', translation: '报刊杂志的编辑们常常走极端，为读者提供无关紧要的事实。', explanation: 'go to extremes意为走极端。provide sb with sth为某人提供某物。' },
      { sentence: 'The journalist immediately set out to get these facts, but he took a long time to send them.', translation: '记者立即着手去获取这些事实，但他花了很长时间才发回来。', explanation: 'set out to do意为着手做。take time to do花时间做。' },
      { sentence: 'He said that he had at last been able to buy the rare stamp.', translation: '他说他终于买到了那枚稀有的邮票。', explanation: 'had been able to是过去完成时，表示"过去的过去"能够做到。' }
    ],
    grammarSections: [
      { title: 'go to extremes 走极端', content: '"go to extremes"意为走极端、采取极端手段。类似的表达有take extreme measures。', examples: [
        { en: 'He went to extremes to prove his point.', cn: '他走极端来证明自己的观点。' },
        { en: 'They went to extremes to save money.', cn: '他们走极端来省钱。' },
        { en: 'Don\'t go to extremes.', cn: '不要走极端。' }
      ] },
      { title: '过去完成时 had done', content: '过去完成时表示"过去的过去"发生的动作。结构：had + 过去分词。', examples: [
        { en: 'He said he had finished the work.', cn: '他说他已经完成了工作。' },
        { en: 'She had left before I arrived.', cn: '我到之前她已经离开了。' },
        { en: 'He had been able to buy the stamp.', cn: '他终于买到了邮票。' }
      ] }
    ],
    patternDrills: [
      { pattern: 'He/She went to extremes to ___.', substitutions: [
        { en: 'prove his point', cn: '证明他的观点' },
        { en: 'save money', cn: '省钱' },
        { en: 'get the job', cn: '得到工作' }
      ] },
      { pattern: 'He/She said that he/she had ___.', substitutions: [
        { en: 'finished the work', cn: '完成了工作' },
        { en: 'bought the stamp', cn: '买到了邮票' },
        { en: 'found the answer', cn: '找到了答案' }
      ] }
    ],
    exercises: [
      { type: 'choice', question: 'Editors often go to _____ to provide unimportant facts.', options: ['A. extreme', 'B. extremes', 'C. an extreme', 'D. the extreme'], answer: 'B', explanation: 'go to extremes是固定搭配。' },
      { type: 'fill', question: 'He said he _____ at last been able to buy the stamp. (已经)', answer: 'had', explanation: 'had been able to是过去完成时。' },
      { type: 'judge', question: '过去完成时表示"过去的过去"发生的动作。', answer: '正确', explanation: 'had + 过去分词表示过去的过去。' },
      { type: 'choice', question: 'The journalist set _____ to get these facts.', options: ['A. off', 'B. out', 'C. up', 'D. in'], answer: 'B', explanation: 'set out to do意为着手做某事。' }
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
    summaryEn: 'A gang of robbers drove a car into a jewelry arcade on Piccadilly, smashing windows and stealing a large quantity of jewels.',
    sentenceExplanations: [
      { sentence: 'The expensive shops in a famous arcade near Piccadilly were opened this morning.', translation: '皮卡迪利附近一条著名拱廊里的高档商店今早开门了。', explanation: 'were opened是被动语态，表示"被开门营业"。' },
      { sentence: 'At the time, everything was quiet and the staff were preparing for the day\'s trade.', translation: '当时一切都很安静，店员们正在为当天的营业做准备。', explanation: 'were preparing是过去进行时，表示当时正在进行的动作。' },
      { sentence: 'A car suddenly appeared and stopped outside a jeweler\'s shop.', translation: '一辆汽车突然出现，停在一家珠宝店外面。', explanation: 'jeweler\'s shop是名词所有格，表示珠宝商的店。' },
      { sentence: 'The men smashed the windows, grabbed the jewels and drove off.', translation: '那几个人砸碎了橱窗，抓起珠宝开车逃走了。', explanation: 'smashed, grabbed, drove是三个连续的过去式动作。' }
    ],
    grammarSections: [
      { title: '过去进行时 + 一般过去时', content: '过去进行时表示背景动作，一般过去时打断或插入。常用while/when连接。', examples: [
        { en: 'While I was reading, the phone rang.', cn: '我正在看书时，电话响了。' },
        { en: 'The staff were preparing when a car appeared.', cn: '店员正在准备时，一辆车出现了。' },
        { en: 'She was cooking when he arrived.', cn: '她正在做饭时他到了。' }
      ] },
      { title: '连续动作的过去式', content: '叙述过去事件时，连续的动作都用过去式，按时间顺序排列。', examples: [
        { en: 'He smashed the window, grabbed the jewels, and drove off.', cn: '他砸碎橱窗，抓起珠宝，开车逃走。' },
        { en: 'She got up, washed her face, and had breakfast.', cn: '她起床，洗脸，吃早饭。' }
      ] }
    ],
    patternDrills: [
      { pattern: 'While I/He was ___-ing, ___.', substitutions: [
        { en: 'read / the phone rang', cn: '看书 / 电话响了' },
        { en: 'cook / he arrived', cn: '做饭 / 他到了' },
        { en: 'sleep / someone knocked', cn: '睡觉 / 有人敲门' }
      ] },
      { pattern: 'He/She ___-ed, ___-ed, and ___-ed off.', substitutions: [
        { en: 'smash / grab / drive', cn: '砸 / 抓 / 开车' },
        { en: 'open / take / run', cn: '打开 / 拿 / 跑' },
        { en: 'break / steal / escape', cn: '打破 / 偷 / 逃跑' }
      ] }
    ],
    exercises: [
      { type: 'choice', question: 'The staff _____ preparing when a car appeared.', options: ['A. was', 'B. were', 'C. is', 'D. are'], answer: 'B', explanation: 'staff是集合名词，用were。' },
      { type: 'fill', question: 'The men _____ the windows and grabbed the jewels. (砸碎)', answer: 'smashed', explanation: 'smash的过去式是smashed。' },
      { type: 'judge', question: '"were preparing" 是过去进行时。', answer: '正确', explanation: 'were + preparing表示过去正在进行。' },
      { type: 'choice', question: 'They grabbed the jewels and drove _____.', options: ['A. out', 'B. away', 'C. off', 'D. on'], answer: 'C', explanation: 'drive off意为开车逃走。' }
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
    summaryEn: 'The Bank of England\'s "Mutilated Ladies" department handles claims for damaged banknotes, helping people recover their losses.',
    sentenceExplanations: [
      { sentence: 'After her husband had gone to work, Mrs. Richards sent her children to school.', translation: '丈夫去上班后，理查兹夫人送孩子们上学了。', explanation: 'After引导时间状语从句。had gone是过去完成时，发生在sent之前。' },
      { sentence: 'The only way they can preserve their history is to recount it as sagas.', translation: '他们保存历史的唯一方法就是把它当作英雄故事口述下来。', explanation: 'the only way后省略了that。is to recount是不定式作表语。' },
      { sentence: 'If a banknote has been torn in half, the Bank will issue a new one.', translation: '如果钞票被撕成两半，银行会换一张新的。', explanation: 'has been torn是现在完成时被动语态。' }
    ],
    grammarSections: [
      { title: '过去完成时 had done', content: '过去完成时表示在过去某个动作之前已经完成的动作。常与after/before连用。', examples: [
        { en: 'After he had gone to work, she sent the children to school.', cn: '他去上班后，她送孩子上学。' },
        { en: 'Before I arrived, she had left.', cn: '我到之前她已经走了。' },
        { en: 'He had finished before I came.', cn: '我来之前他已经完成了。' }
      ] },
      { title: '现在完成时被动语态', content: '结构：have/has been + 过去分词。表示已经被动完成。', examples: [
        { en: 'The banknote has been torn.', cn: '钞票已经被撕了。' },
        { en: 'The window has been broken.', cn: '窗户已经被打破了。' },
        { en: 'The letter has been sent.', cn: '信已经寄出了。' }
      ] }
    ],
    patternDrills: [
      { pattern: 'After he/she had ___, he/she ___.', substitutions: [
        { en: 'gone to work / sent the children to school', cn: '去上班 / 送孩子上学' },
        { en: 'eaten / went out', cn: '吃完 / 出去了' },
        { en: 'finished / left', cn: '完成 / 离开了' }
      ] },
      { pattern: 'The ___ has been ___-ed.', substitutions: [
        { en: 'banknote / tear', cn: '钞票 / 撕' },
        { en: 'window / break', cn: '窗户 / 打破' },
        { en: 'letter / send', cn: '信 / 寄出' }
      ] }
    ],
    exercises: [
      { type: 'choice', question: 'After he _____ gone to work, she sent the children to school.', options: ['A. has', 'B. had', 'C. have', 'D. having'], answer: 'B', explanation: '过去完成时用had。' },
      { type: 'fill', question: 'The banknote has been _____. (撕)', answer: 'torn', explanation: 'tear的过去分词是torn。' },
      { type: 'judge', question: '"had gone" 是过去完成时。', answer: '正确', explanation: 'had + 过去分词是过去完成时。' },
      { type: 'choice', question: 'The Bank will issue a _____ one.', options: ['A. new', 'B. newly', 'C. newer', 'D. newest'], answer: 'A', explanation: 'new修饰one。' }
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
    summaryEn: 'The Great St Bernard Pass monastery, near the highest point in Europe, has used St Bernard dogs to rescue travelers for centuries.',
    sentenceExplanations: [
      { sentence: 'The Great St Bernard Pass connects Switzerland to Italy.', translation: '大圣伯纳德山口连接瑞士和意大利。', explanation: 'connect...to...意为"连接...和..."。' },
      { sentence: 'The monastery, which was founded in the eleventh century, is the oldest in the country.', translation: '这座修道院建于十一世纪，是该国最古老的。', explanation: 'which引导非限制性定语从句。was founded是被动语态。' },
      { sentence: 'At these times, they place a barrel of brandy around the dog\'s neck.', translation: '在这些时候，他们在狗的脖子上挂一桶白兰地。', explanation: 'place...around...意为"把...放在...周围"。' },
      { sentence: 'The dogs have saved the lives of thousands of travelers.', translation: '这些狗已经拯救了数千名旅行者的生命。', explanation: 'have saved是现在完成时。thousands of表示数千。' }
    ],
    grammarSections: [
      { title: '非限制性定语从句', content: '非限制性定语从句用逗号与主句隔开，对先行词补充说明。which可指代前面整个句子。', examples: [
        { en: 'The monastery, which was founded in the eleventh century, is very old.', cn: '修道院建于十一世纪，很古老。' },
        { en: 'He passed the exam, which surprised everyone.', cn: '他通过了考试，这让每个人都很惊讶。' },
        { en: 'My car, which is very old, still runs well.', cn: '我的车虽然很旧，但跑得还好。' }
      ] },
      { title: 'thousands of 数千', content: '用thousands/millions/hundreds of + 复数名词表示不确定的大数量。', examples: [
        { en: 'thousands of travelers (数千名旅行者)', cn: '不确定的数量' },
        { en: 'millions of people (数百万人)', cn: '不确定的数量' },
        { en: '但：two thousand people (两千人)', cn: '具体数字不加s' }
      ] }
    ],
    patternDrills: [
      { pattern: 'The ___, which was/were ___, is/are ___.', substitutions: [
        { en: 'monastery / founded / very old', cn: '修道院 / 建立 / 很古老' },
        { en: 'book / written / very famous', cn: '书 / 写的 / 很有名' },
        { en: 'dogs / trained / very useful', cn: '狗 / 训练过的 / 很有用' }
      ] },
      { pattern: 'The ___ have/has saved the lives of ___ of ___.', substitutions: [
        { en: 'dogs / thousands / travelers', cn: '狗 / 数千 / 旅行者' },
        { en: 'medicine / millions / people', cn: '药 / 数百 / 人' },
        { en: 'lifeguards / hundreds / swimmers', cn: '救生员 / 数百 / 游泳者' }
      ] }
    ],
    exercises: [
      { type: 'choice', question: 'The monastery, _____ was founded in the eleventh century, is very old.', options: ['A. that', 'B. which', 'C. who', 'D. what'], answer: 'B', explanation: '非限制性定语从句用which，不用that。' },
      { type: 'fill', question: 'The dogs have saved the lives of _____ of travelers. (数千)', answer: 'thousands', explanation: 'thousands of表示数千。' },
      { type: 'judge', question: '非限制性定语从句不能用that引导。', answer: '正确', explanation: '非限制性定语从句只能用which，不能用that。' },
      { type: 'choice', question: 'The Pass _____ Switzerland to Italy.', options: ['A. joins', 'B. connects', 'C. links', 'D. attaches'], answer: 'B', explanation: 'connect...to...连接...和...' }
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
  },
]

export default book3
