import type { Lesson } from '../types'

const book1: Lesson[] = [
  {
    id: 1,
    title: 'Excuse me!',
    titleCn: '对不起！',
    text: [
      'Excuse me!',
      'Yes?',
      'Is this your handbag?',
      'Pardon?',
      'Is this your handbag?',
      'Yes, it is.',
      'Thank you very much.'
    ],
    textCn: [
      '对不起！',
      '什么事？',
      '这是你的手提包吗？',
      '请再说一遍？',
      '这是你的手提包吗？',
      '是的，是我的。',
      '非常感谢。'
    ],
    vocabulary: [
      { word: 'excuse', phonetic: '/ɪkˈskjuːz/', meaning: '原谅' },
      { word: 'handbag', phonetic: '/ˈhændbæɡ/', meaning: '手提包' },
      { word: 'pardon', phonetic: '/ˈpɑːdn/', meaning: '请再说一遍' },
      { word: 'thank you', phonetic: '/θæŋk juː/', meaning: '谢谢你' }
    ],
    notes: [
      '"Excuse me" 是礼貌用语，用于引起别人注意或表示歉意。',
      '"Pardon?" 用于请求对方重复，比 "What?" 更礼貌。',
      '"Is this your...?" 是一般疑问句，用 Yes/No 回答。'
    ],
    tags: ['一般疑问句', 'be动词'],
    difficulty: 1,
    summary: '一个男人在人群中发现了一个手提包，他礼貌地询问旁边的女士是否是她的包。女士没听清楚，请他再说一遍，最终确认是自己的包并表示感谢。',
    summaryEn: 'A man finds a handbag and politely asks a woman if it belongs to her. She asks him to repeat, then confirms it is hers and thanks him.',
    sentenceExplanations: [
      { sentence: 'Excuse me!', translation: '对不起，打扰一下！', explanation: '用于引起陌生人注意的礼貌用语。在人群中使用可理解为"借过一下"，突然离开时为"失陪了"，没听清时为"麻烦再说一遍"。注意：升调读。' },
      { sentence: 'Yes?', translation: '什么事？', explanation: '"yes"降调读表示"是的"，但这里用升调加问号，等同于"What can I do for you?"（什么事？/请说）。' },
      { sentence: 'Is this your handbag?', translation: '这是您的手提包吗？', explanation: '一般疑问句结构：Is this your + 名词？用于询问物品归属。回答用"Yes, it is."或"No, it isn\'t."。' },
      { sentence: 'Pardon?', translation: '请再说一遍？', explanation: '用于没听清对方时的礼貌请求。完整形式为"I beg your pardon."。美音读这个单词会有"儿化音(r)"，英音则不会。也可用升调的"Sorry?"替代。' },
      { sentence: 'Thank you very much.', translation: '非常感谢。', explanation: '"very much"加强感谢程度。日常用语中也可说"Thanks a lot."。' },
    ],
    grammarSections: [
      {
        title: '一般疑问句 (Yes/No Questions)',
        content: '一般疑问句用于向对方征求确认(Yes)或否定(No)的回答。最简单的方式是将be动词置于句首。\n\n中文里询问"是不是"只需在句尾加"吗？"，而英文必须将动词提前。',
        examples: [
          { en: 'Is this your pen?', cn: '这是你的钢笔吗？' },
          { en: 'Yes, it is.', cn: '是的，它是。' },
          { en: 'No, it isn\'t.', cn: '不，它不是。' },
          { en: 'Is this your car?', cn: '这是你的车吗？' },
          { en: 'Is this your dog?', cn: '这是你的狗吗？' },
        ],
      },
    ],
    patternDrills: [
      {
        pattern: 'Is this your _____ ? 这是你的_____吗？',
        substitutions: [
          { en: 'Is this your pen?', cn: '这是你的钢笔吗？' },
          { en: 'Is this your book?', cn: '这是你的书吗？' },
          { en: 'Is this your watch?', cn: '这是你的手表吗？' },
          { en: 'Is this your coat?', cn: '这是你的外套吗？' },
          { en: 'Is this your car?', cn: '这是你的车吗？' },
        ],
      },
    ],
    exercises: [
      { type: 'choice', question: '_____ this your handbag?', options: ['A. Is', 'B. Are', 'C. Am', 'D. Be'], answer: 'A', explanation: 'this是第三人称单数，用is。' },
      { type: 'judge', question: '"Pardon?"用于请求对方重复。', answer: '正确', explanation: 'Pardon?是礼貌地请求对方再说一遍。' },
      { type: 'fill', question: 'Thank you _____. (非常)', answer: 'very much', explanation: '"very much"表示"非常"，用于加强程度。' },
    ],
  },
  {
    id: 2,
    title: 'Is this your...?',
    titleCn: '这是你的...吗？',
    text: [
      'Is this your pen?',
      'Yes, it is.',
      'Is this your pencil?',
      'No, it isn\'t.',
      'Is this your book?',
      'Yes, it is.',
      'Is this your watch?',
      'No, it isn\'t.'
    ],
    textCn: [
      '这是你的钢笔吗？',
      '是的，是我的。',
      '这是你的铅笔吗？',
      '不，不是。',
      '这是你的书吗？',
      '是的，是我的。',
      '这是你的手表吗？',
      '不，不是。'
    ],
    vocabulary: [
      { word: 'pen', phonetic: '/pen/', meaning: '钢笔' },
      { word: 'pencil', phonetic: '/ˈpensl/', meaning: '铅笔' },
      { word: 'book', phonetic: '/bʊk/', meaning: '书' },
      { word: 'watch', phonetic: '/wɒtʃ/', meaning: '手表' }
    ],
    notes: [
      '"Is this your...?" 用于确认物品归属。',
      '肯定回答："Yes, it is." 否定回答："No, it isn\'t."',
      '注意区分 pen / pencil / book / watch 四个常用名词。'
    ],
    tags: ['一般疑问句', '代词'],
    difficulty: 1,
    summary: '通过反复练习"Is this your...?"句型，学习如何询问物品归属并作出肯定和否定回答。',
    summaryEn: 'Practice asking whether items belong to someone using "Is this your...?" with yes/no answers.',
    sentenceExplanations: [
      { sentence: 'Is this your pen?', translation: '这是你的钢笔吗？', explanation: '一般疑问句，询问物品归属。your是形容词性物主代词，修饰名词pen。' },
      { sentence: 'Yes, it is.', translation: '是的，它是。', explanation: '肯定回答。注意不能缩写为"Yes, it\'s."，在简略回答中不使用缩写。' },
      { sentence: 'No, it isn\'t.', translation: '不，它不是。', explanation: '否定回答。isn\'t = is not，口语中常用缩写形式。' },
    ],
    grammarSections: [
      {
        title: '形容词性物主代词',
        content: '形容词性物主代词用来表示所属关系，放在名词前面修饰名词。',
        examples: [
          { en: 'my book', cn: '我的书' },
          { en: 'your pen', cn: '你的钢笔' },
          { en: 'his watch', cn: '他的手表' },
          { en: 'her handbag', cn: '她的手提包' },
          { en: 'its name', cn: '它的名字' },
        ],
      },
    ],
    patternDrills: [
      {
        pattern: 'Is this your _____ ?',
        substitutions: [
          { en: 'Is this your pen?', cn: '这是你的钢笔吗？' },
          { en: 'Is this your pencil?', cn: '这是你的铅笔吗？' },
          { en: 'Is this your book?', cn: '这是你的书吗？' },
          { en: 'Is this your watch?', cn: '这是你的手表吗？' },
          { en: 'Is this your coat?', cn: '这是你的外套吗？' },
          { en: 'Is this your dress?', cn: '这是你的连衣裙吗？' },
          { en: 'Is this your skirt?', cn: '这是你的裙子吗？' },
          { en: 'Is this your shirt?', cn: '这是你的衬衫吗？' },
        ],
      },
    ],
    exercises: [
      { type: 'choice', question: 'Is this _____ pencil?', options: ['A. you', 'B. your', 'C. yours', 'D. you\'re'], answer: 'B', explanation: 'your是形容词性物主代词，放在名词前修饰名词。' },
      { type: 'judge', question: '"Yes, it\'s."是正确的简略回答。', answer: '错误', explanation: '简略回答中不能使用缩写，应为"Yes, it is."。' },
      { type: 'fill', question: 'No, it _____. (否定回答)', answer: 'isn\'t', explanation: '否定回答用isn\'t (= is not)。' },
    ],
  },
  {
    id: 3,
    title: 'Sorry, sir.',
    titleCn: '对不起，先生。',
    text: [
      'My coat and my umbrella please.',
      'Here is my ticket.',
      'Thank you, sir.',
      'Number five.',
      'Here is your umbrella and your coat.',
      'This is not my umbrella.',
      'Sorry, sir.'
    ],
    textCn: [
      '请把我的大衣和雨伞给我。',
      '这是我的寄存牌。',
      '谢谢，先生。',
      '是5号。',
      '这是您的雨伞和大衣。',
      '这不是我的雨伞。',
      '对不起，先生。'
    ],
    vocabulary: [
      { word: 'coat', phonetic: '/kəʊt/', meaning: '大衣，外套' },
      { word: 'umbrella', phonetic: '/ʌmˈbrelə/', meaning: '雨伞' },
      { word: 'ticket', phonetic: '/ˈtɪkɪt/', meaning: '票，寄存牌' },
      { word: 'number', phonetic: '/ˈnʌmbə/', meaning: '号码，数字' },
      { word: 'sir', phonetic: '/sɜː/', meaning: '先生' }
    ],
    notes: [
      '"Here is..." 倒装句，用于把东西递给别人。',
      '"Number five" 意为5号（寄存处编号）。',
      '"This is not my..." 否定句结构。'
    ],
    tags: ['否定句', '祈使句'],
    difficulty: 1,
    summary: '在衣物寄存处，一位先生取回自己的大衣和雨伞，但发现雨伞不是自己的。',
    summaryEn: 'At a cloakroom, a man asks for his coat and umbrella, but the umbrella given to him is not his.',
    sentenceExplanations: [
      { sentence: 'My coat and my umbrella please.', translation: '请把我的大衣和雨伞给我。', explanation: '省略句，完整形式为"May I have my coat and my umbrella, please?"。在寄存处取东西时的常用表达。' },
      { sentence: 'Here is my ticket.', translation: '这是我的寄存牌。', explanation: '"Here is..."倒装句，用于递给别人东西时。也可以说"Here you are."。' },
      { sentence: 'This is not my umbrella.', translation: '这不是我的雨伞。', explanation: '否定句，在be动词后加not构成否定。This is not可缩写为This isn\'t。' },
    ],
    grammarSections: [
      {
        title: '否定句 (be动词 + not)',
        content: '在be动词(is/am/are)后面加not即可构成否定句。\n\n口语中常用缩写形式：isn\'t = is not, aren\'t = are not。',
        examples: [
          { en: 'This is not my umbrella.', cn: '这不是我的雨伞。' },
          { en: 'This isn\'t my coat.', cn: '这不是我的大衣。' },
          { en: 'It is not a Swedish car.', cn: '这不是一辆瑞典车。' },
          { en: 'It isn\'t a Volvo.', cn: '这不是沃尔沃。' },
        ],
      },
    ],
    exercises: [
      { type: 'choice', question: 'Here _____ your umbrella.', options: ['A. is', 'B. are', 'C. am', 'D. be'], answer: 'A', explanation: 'umbrella是单数名词，用is。' },
      { type: 'fill', question: 'This _____ my coat. (否定)', answer: 'is not / isn\'t', explanation: '否定句在is后加not，口语中常用缩写isn\'t。' },
    ],
  },
  {
    id: 4,
    title: 'Is this your...? (2)',
    titleCn: '这是你的...吗？（续）',
    text: [
      'Is this your shirt?',
      'No, it isn\'t. My shirt is blue.',
      'Is this your dress?',
      'Yes, it is.',
      'Is this your skirt?',
      'No, it isn\'t. My skirt is white.',
      'Is this your suit?',
      'Yes, it is.'
    ],
    textCn: [
      '这是你的衬衫吗？',
      '不，不是。我的衬衫是蓝色的。',
      '这是你的连衣裙吗？',
      '是的，是我的。',
      '这是你的裙子吗？',
      '不，不是。我的裙子是白色的。',
      '这是你的西服吗？',
      '是的，是我的。'
    ],
    vocabulary: [
      { word: 'shirt', phonetic: '/ʃɜːt/', meaning: '衬衫' },
      { word: 'dress', phonetic: '/dres/', meaning: '连衣裙' },
      { word: 'skirt', phonetic: '/skɜːt/', meaning: '裙子' },
      { word: 'suit', phonetic: '/suːt/', meaning: '西服，套装' },
      { word: 'blue', phonetic: '/bluː/', meaning: '蓝色的' },
      { word: 'white', phonetic: '/waɪt/', meaning: '白色的' }
    ],
    notes: [
      '"My shirt is blue." 主系表结构。',
      '颜色词放在名词后：a blue shirt。',
      '衣服相关词汇扩展：shirt, dress, skirt, suit。'
    ],
    tags: ['冠词', '国籍'],
    difficulty: 1,
    summary: '继续练习"Is this your...?"句型，加入颜色描述来区分物品。',
    summaryEn: 'Continue practicing "Is this your...?" with color descriptions to distinguish items.',
    sentenceExplanations: [
      { sentence: 'Is this your shirt?', translation: '这是你的衬衫吗？', explanation: '一般疑问句，询问物品归属。' },
      { sentence: 'No, it isn\'t. My shirt is blue.', translation: '不，不是。我的衬衫是蓝色的。', explanation: '否定回答后补充说明自己的衬衫颜色。"My shirt is blue."是主系表结构。' },
      { sentence: 'Is this your dress?', translation: '这是你的连衣裙吗？', explanation: 'dress通常指女式连衣裙。' },
    ],
    grammarSections: [
      {
        title: '主系表结构',
        content: '"主语 + be动词 + 表语"是最基本的英语句型之一。表语可以是形容词、名词等，用来描述主语的特征。',
        examples: [
          { en: 'My shirt is blue.', cn: '我的衬衫是蓝色的。' },
          { en: 'My skirt is white.', cn: '我的裙子是白色的。' },
          { en: 'She is French.', cn: '她是法国人。' },
          { en: 'He is a student.', cn: '他是一个学生。' },
        ],
      },
      {
        title: '颜色词汇',
        content: '常见的颜色词汇：',
        examples: [
          { en: 'blue', cn: '蓝色' },
          { en: 'white', cn: '白色' },
          { en: 'red', cn: '红色' },
          { en: 'green', cn: '绿色' },
          { en: 'black', cn: '黑色' },
          { en: 'yellow', cn: '黄色' },
        ],
      },
    ],
    exercises: [
      { type: 'choice', question: 'My shirt _____ blue.', options: ['A. is', 'B. are', 'C. am', 'D. be'], answer: 'A', explanation: 'shirt是第三人称单数，用is。' },
      { type: 'fill', question: 'Is this your dress? Yes, _____ _____.', answer: 'it is', explanation: '肯定回答用"Yes, it is."，不能缩写。' },
    ],
  },
  {
    id: 5,
    title: 'Nice to meet you.',
    titleCn: '很高兴见到你。',
    text: [
      'Good morning, Mr. Blake.',
      'Good morning, Miss Sophie.',
      'This is Miss Sophie Dupont.',
      'Sophie is a new student.',
      'She is French.',
      'Nice to meet you.',
      'Nice to meet you, too.'
    ],
    textCn: [
      '早上好，布莱克先生。',
      '早上好，索菲小姐。',
      '这位是索菲·杜邦小姐。',
      '索菲是新来的学生。',
      '她是法国人。',
      '很高兴见到你。',
      '我也很高兴见到你。'
    ],
    vocabulary: [
      { word: 'morning', phonetic: '/ˈmɔːnɪŋ/', meaning: '早晨' },
      { word: 'new', phonetic: '/njuː/', meaning: '新的' },
      { word: 'student', phonetic: '/ˈstjuːdnt/', meaning: '学生' },
      { word: 'French', phonetic: '/frentʃ/', meaning: '法国人，法语' },
      { word: 'nice', phonetic: '/naɪs/', meaning: '好的' },
      { word: 'meet', phonetic: '/miːt/', meaning: '遇见，见到' }
    ],
    notes: [
      '"Mr." 先生 / "Miss" 小姐。',
      '"This is..." 用于介绍某人。',
      '"Nice to meet you." 回答用 "Nice to meet you, too."'
    ],
    tags: ['人称代词', '特殊疑问句'],
    difficulty: 2,
    summary: 'Sophie是新来的法国学生，老师Blake先生把她介绍给同学们。大家互相问好。',
    summaryEn: 'Sophie is a new French student. Teacher Mr. Blake introduces her to the class. They greet each other.',
    sentenceExplanations: [
      { sentence: 'Good morning, Mr. Blake.', translation: '早上好，布莱克先生。', explanation: '"Mr."用于男性，后接姓氏。"Miss"用于未婚女性，"Mrs."用于已婚女性，"Ms."不区分婚姻状况。' },
      { sentence: 'This is Miss Sophie Dupont.', translation: '这位是索菲·杜邦小姐。', explanation: '"This is..."是介绍某人的标准句型。注意英语中名在前，姓在后。' },
      { sentence: 'She is French.', translation: '她是法国人。', explanation: 'French既可作形容词"法国的"，也可作名词"法国人"。国籍词首字母大写。' },
      { sentence: 'Nice to meet you.', translation: '很高兴见到你。', explanation: '初次见面时的问候语。回答用"Nice to meet you, too."（我也很高兴见到你）。' },
    ],
    grammarSections: [
      {
        title: '介绍他人',
        content: '英语中介绍他人时常用"This is..."句型。注意不能用"He/She is..."来介绍。',
        examples: [
          { en: 'This is Miss Sophie Dupont.', cn: '这位是索菲·杜邦小姐。' },
          { en: 'This is Mr. Blake.', cn: '这位是布莱克先生。' },
          { en: 'This is my friend, Tom.', cn: '这位是我的朋友，汤姆。' },
        ],
      },
      {
        title: '国籍与语言',
        content: '英语中表示国籍的词首字母要大写。可以作名词（法国人）也可以作形容词（法国的）。',
        examples: [
          { en: 'She is French.', cn: '她是法国人。' },
          { en: 'He is German.', cn: '他是德国人。' },
          { en: 'It\'s a Japanese car.', cn: '这是一辆日本车。' },
          { en: 'It\'s an English car.', cn: '这是一辆英国车。' },
        ],
      },
    ],
    patternDrills: [
      {
        pattern: 'This is _____ . 这位是_____。',
        substitutions: [
          { en: 'This is Miss Sophie.', cn: '这位是索菲小姐。' },
          { en: 'This is Mr. Blake.', cn: '这位是布莱克先生。' },
          { en: 'This is my friend.', cn: '这位是我的朋友。' },
          { en: 'This is my teacher.', cn: '这位是我的老师。' },
        ],
      },
    ],
    exercises: [
      { type: 'choice', question: '_____ is Miss Sophie Dupont. She is French.', options: ['A. This', 'B. It', 'C. She', 'D. He'], answer: 'A', explanation: '介绍他人时用"This is..."。' },
      { type: 'judge', question: '"Nice to meet you."的回答是"Nice to meet you, too."', answer: '正确', explanation: 'too表示"也"，用于句末。' },
      { type: 'fill', question: 'She is _____. (法国人)', answer: 'French', explanation: '国籍词首字母大写。' },
    ],
  },
  {
    id: 6,
    title: 'What make is it?',
    titleCn: '它是什么牌子的？',
    text: [
      'What make is it?',
      'It\'s a Volvo.',
      'It\'s a Swedish car.',
      'What make is it?',
      'It\'s a Mini.',
      'It\'s an English car.',
      'What make is it?',
      'It\'s a Toyota.',
      'It\'s a Japanese car.'
    ],
    textCn: [
      '它是什么牌子的？',
      '是沃尔沃。',
      '是瑞典车。',
      '它是什么牌子的？',
      '是迷你。',
      '是英国车。',
      '它是什么牌子的？',
      '是丰田。',
      '是日本车。'
    ],
    vocabulary: [
      { word: 'make', phonetic: '/meɪk/', meaning: '牌子，品牌' },
      { word: 'Swedish', phonetic: '/ˈswiːdɪʃ/', meaning: '瑞典的' },
      { word: 'English', phonetic: '/ˈɪŋɡlɪʃ/', meaning: '英国的' },
      { word: 'Japanese', phonetic: '/ˌdʒæpəˈniːz/', meaning: '日本的' },
      { word: 'car', phonetic: '/kɑː/', meaning: '小汽车' }
    ],
    notes: [
      '"What make is it?" 询问物品的品牌或产地。',
      '国籍形容词：Swedish, English, Japanese。',
      '"a" 辅音前，"an" 元音前（an English car）。'

    ],
    tags: ['特殊疑问句', 'how'],
    difficulty: 1,
    summary: '本课学习询问物品品牌的句型"What make is it?"以及国籍形容词的用法。通过汽车品牌引出不同国家的国籍表达。',
    summaryEn: 'This lesson teaches how to ask about brands with "What make is it?" and introduces nationality adjectives through car brands.',
    sentenceExplanations: [
      { sentence: 'What make is it?', translation: '它是什么牌子的？', explanation: '"make"作名词表示"品牌、型号"。"What make"用来询问物品的具体品牌。' },
      { sentence: 'It\'s a Volvo.', translation: '它是沃尔沃。', explanation: 'Volvo是瑞典品牌，这里用"a"因为Volvo以辅音音素开头。' },
      { sentence: 'It\'s a Swedish car.', translation: '它是瑞典车。', explanation: 'Swedish是国籍形容词，修饰car。国籍形容词首字母必须大写。' },
      { sentence: 'It\'s an English car.', translation: '它是英国车。', explanation: 'English以元音音素/ɪ/开头，所以用"an"而不是"a"。这是不定冠词的重要规则。' },
      { sentence: 'It\'s a Toyota.', translation: '它是丰田。', explanation: 'Toyota是日本品牌，以辅音音素/t/开头，用"a"。' },
      { sentence: 'It\'s a Japanese car.', translation: '它是日本车。', explanation: 'Japanese是国籍形容词，表示"日本的"。注意发音：/ˌdʒæpəˈniːz/。' }
    ],
    grammarSections: [
      { title: '不定冠词 a 和 an', content: '不定冠词"a"用在辅音音素开头的单词前，"an"用在元音音素开头的单词前。注意判断标准是音素而非字母。', examples: [
        { en: 'a Volvo, a Toyota, a Mini', cn: '辅音音素开头' },
        { en: 'an English car, an Italian car', cn: '元音音素开头' },
        { en: 'an hour (h不发音)', cn: '特殊情况' },
        { en: 'a university (u发/juː/)', cn: '特殊情况' }
      ] },
      { title: '国籍形容词', content: '国籍形容词用来表示"某国的"，首字母必须大写。常见构成方式：国名+ish/ese/an等后缀。', examples: [
        { en: 'Swedish (瑞典的)', cn: 'Sweden + ish' },
        { en: 'English (英国的)', cn: 'England → English' },
        { en: 'Japanese (日本的)', cn: 'Japan + ese' },
        { en: 'Chinese (中国的)', cn: 'China → Chinese' }
      ] }
    ],
    patternDrills: [
      { pattern: 'What make is it? — It\'s a/an ___.', substitutions: [
        { en: 'Mercedes / German car', cn: '奔驰 / 德国车' },
        { en: 'Fiat / Italian car', cn: '菲亚特 / 意大利车' },
        { en: 'Ford / American car', cn: '福特 / 美国车' },
        { en: 'Hyundai / Korean car', cn: '现代 / 韩国车' }
      ] },
      { pattern: 'It\'s a/an ___ car.', substitutions: [
        { en: 'French', cn: '法国的' },
        { en: 'Spanish', cn: '西班牙的' },
        { en: 'Russian', cn: '俄罗斯的' },
        { en: 'Australian', cn: '澳大利亚的' }
      ] }
    ],
    exercises: [
      { type: 'choice', question: 'It\'s _____ English car.', options: ['A. a', 'B. an', 'C. the', 'D. /'], answer: 'B', explanation: 'English以元音音素/ɪ/开头，用an。' },
      { type: 'fill', question: 'What _____ is it? It\'s a Volvo. (品牌)', answer: 'make', explanation: '"make"表示品牌。' },
      { type: 'judge', question: '"a Italian car" 的用法是正确的。', answer: '错误', explanation: 'Italian以元音音素/ɪ/开头，应该用"an Italian car"。' },
      { type: 'choice', question: 'It\'s a _____ car. (日本的)', options: ['A. Japan', 'B. Japanese', 'C. Japanes', 'D. Japenese'], answer: 'B', explanation: 'Japanese是日本的国籍形容词。' }
    ],
  },
  {
    id: 7,
    title: 'Are you a teacher?',
    titleCn: '你是教师吗？',
    text: [
      'I am a new student.',
      'My name\'s Robert.',
      'Nice to meet you.',
      'My name\'s Sophie.',
      'Are you French?',
      'Yes, I am.',
      'Are you a teacher?',
      'No, I am not.',
      'What\'s your job?',
      'I\'m a keyboard operator.'
    ],
    textCn: [
      '我是新来的学生。',
      '我叫罗伯特。',
      '很高兴见到你。',
      '我叫索菲。',
      '你是法国人吗？',
      '是的，我是。',
      '你是教师吗？',
      '不，我不是。',
      '你是做什么工作的？',
      '我是键盘操作员。'
    ],
    vocabulary: [
      { word: 'teacher', phonetic: '/ˈtiːtʃə/', meaning: '教师' },
      { word: 'job', phonetic: '/dʒɒb/', meaning: '工作' },
      { word: 'keyboard', phonetic: '/ˈkiːbɔːd/', meaning: '键盘' },
      { word: 'operator', phonetic: '/ˈɒpəreɪtə/', meaning: '操作员' },
      { word: 'name', phonetic: '/neɪm/', meaning: '名字' }
    ],
    notes: [
      '"I am..." 缩写为 "I\'m..."。',
      '"Are you...?" 肯定 "Yes, I am." 否定 "No, I am not."。',
      '"What\'s your job?" 询问职业。'

    ],
    tags: ['特殊疑问句', '名词所有格'],
    difficulty: 3,
    summary: '本课学习一般疑问句"Are you...?"的用法，以及如何询问和回答关于职业的问题。包含肯定和否定回答的对比。',
    summaryEn: 'This lesson teaches the general question "Are you...?" and how to ask about and answer questions about occupations.',
    sentenceExplanations: [
      { sentence: 'I am a new student.', translation: '我是一名新学生。', explanation: '"new"修饰student，表示"新来的"。这是自我介绍的基本句型。' },
      { sentence: 'My name\'s Robert.', translation: '我叫罗伯特。', explanation: '"name\'s"是"name is"的缩写形式。英语口语中常用缩写。' },
      { sentence: 'Nice to meet you.', translation: '很高兴见到你。', explanation: '初次见面时的常用寒暄语。回答通常是"Nice to meet you, too."。' },
      { sentence: 'Are you French?', translation: '你是法国人吗？', explanation: '"Are you...?"是一般疑问句，用来确认信息。回答用"Yes, I am."或"No, I am not."。' },
      { sentence: 'What\'s your job?', translation: '你是做什么工作的？', explanation: '"What\'s"是"What is"的缩写。这是询问职业的常用句型。' },
      { sentence: 'I\'m a keyboard operator.', translation: '我是一名键盘操作员。', explanation: 'keyboard operator是职业名称，"keyboard"键盘，"operator"操作员。' }
    ],
    grammarSections: [
      { title: '一般疑问句 Are you...?', content: '以be动词开头的疑问句叫一般疑问句。回答时用Yes或No。注意回答中不能使用缩写。', examples: [
        { en: 'Are you French? — Yes, I am.', cn: '肯定回答（不能说Yes, I\'m）' },
        { en: 'Are you a teacher? — No, I am not.', cn: '否定回答' },
        { en: 'Is he a student? — Yes, he is.', cn: '第三人称单数' },
        { en: 'Are they Chinese? — No, they are not.', cn: '复数形式' }
      ] },
      { title: '缩写形式', content: '英语口语和书面语中经常使用缩写形式。注意：肯定回答中不能使用缩写。', examples: [
        { en: 'I am → I\'m', cn: '第一人称缩写' },
        { en: 'name is → name\'s', cn: '名词+be动词缩写' },
        { en: 'What is → What\'s', cn: '疑问词缩写' },
        { en: 'Yes, I am. (不说 Yes, I\'m.)', cn: '回答时不缩写' }
      ] }
    ],
    patternDrills: [
      { pattern: 'Are you ___? — Yes, I am. / No, I am not.', substitutions: [
        { en: 'French', cn: '法国人' },
        { en: 'a teacher', cn: '教师' },
        { en: 'a student', cn: '学生' },
        { en: 'Chinese', cn: '中国人' }
      ] },
      { pattern: 'What\'s your job? — I\'m a ___.', substitutions: [
        { en: 'keyboard operator', cn: '键盘操作员' },
        { en: 'student', cn: '学生' },
        { en: 'teacher', cn: '教师' },
        { en: 'doctor', cn: '医生' }
      ] }
    ],
    exercises: [
      { type: 'choice', question: '_____ you French? Yes, I am.', options: ['A. Is', 'B. Am', 'C. Are', 'D. Be'], answer: 'C', explanation: '主语是you，be动词用are。' },
      { type: 'fill', question: 'Nice _____ meet you. (填介词)', answer: 'to', explanation: '"Nice to meet you"是固定搭配，to后接动词原形。' },
      { type: 'judge', question: '"Yes, I\'m." 是正确的肯定回答。', answer: '错误', explanation: '肯定回答中不能用缩写，应该说"Yes, I am."。' },
      { type: 'choice', question: 'What\'s _____ job? I\'m a nurse.', options: ['A. you', 'B. your', 'C. yours', 'D. you\'re'], answer: 'B', explanation: '"your"是形容词性物主代词，修饰job。' }
    ],
  },
  {
    id: 8,
    title: 'What\'s your job?',
    titleCn: '你是做什么工作的？',
    text: [
      'What\'s your job?',
      'I\'m a policeman.',
      'What\'s your job?',
      'I\'m a nurse.',
      'What\'s his job?',
      'He\'s a postman.',
      'What\'s her job?',
      'She\'s a hairdresser.',
      'What\'s his job?',
      'He\'s a mechanic.'
    ],
    textCn: [
      '你是做什么工作的？',
      '我是警察。',
      '你是做什么工作的？',
      '我是护士。',
      '他做什么工作？',
      '他是邮递员。',
      '她做什么工作？',
      '她是理发师。',
      '他做什么工作？',
      '他是机械师。'
    ],
    vocabulary: [
      { word: 'policeman', phonetic: '/pəˈliːsmən/', meaning: '警察' },
      { word: 'nurse', phonetic: '/nɜːs/', meaning: '护士' },
      { word: 'postman', phonetic: '/ˈpəʊstmən/', meaning: '邮递员' },
      { word: 'hairdresser', phonetic: '/ˈheədresə/', meaning: '理发师' },
      { word: 'mechanic', phonetic: '/mɪˈkænɪk/', meaning: '机械师' }
    ],
    notes: [
      '"What\'s his/her job?" 第三人称职业。',
      'his（他的）/ her（她的）。',
      '职业词汇：policeman, nurse, postman, hairdresser, mechanic。'

    ],
    tags: ['特殊疑问句', 'what'],
    difficulty: 1,
    summary: '本课继续学习询问职业的句型，扩展到第三人称"What\'s his/her job?"，并学习更多职业词汇。',
    summaryEn: 'This lesson continues with job-related questions, extending to third person "What\'s his/her job?" and more occupation vocabulary.',
    sentenceExplanations: [
      { sentence: 'What\'s your job?', translation: '你是做什么工作的？', explanation: '询问对方职业的常用句型，比"What do you do?"更正式一些。' },
      { sentence: 'I\'m a policeman.', translation: '我是警察。', explanation: 'policeman由police（警察）+man（人）组成，指男性警察。' },
      { sentence: 'What\'s his job?', translation: '他做什么工作？', explanation: '"his"是形容词性物主代词，表示"他的"，用于男性。' },
      { sentence: 'He\'s a postman.', translation: '他是邮递员。', explanation: 'postman由post（邮件）+man组成。注意复数形式是postmen。' },
      { sentence: 'What\'s her job?', translation: '她做什么工作？', explanation: '"her"是形容词性物主代词，表示"她的"，用于女性。' },
      { sentence: 'She\'s a hairdresser.', translation: '她是理发师。', explanation: 'hairdresser由hair（头发）+dresser（整理者）组成，指理发师或美发师。' }
    ],
    grammarSections: [
      { title: '第三人称物主代词 his / her', content: 'his用于男性，her用于女性。它们是形容词性物主代词，后面必须跟名词。', examples: [
        { en: 'What\'s his job? — He\'s a mechanic.', cn: '他的工作' },
        { en: 'What\'s her job? — She\'s a nurse.', cn: '她的工作' },
        { en: 'This is his car.', cn: '他的车' },
        { en: 'This is her handbag.', cn: '她的手提包' }
      ] },
      { title: '职业词汇构成', content: '英语中很多职业词汇由两个词组合而成，常见组合方式：', examples: [
        { en: 'police + man = policeman', cn: '警察' },
        { en: 'post + man = postman', cn: '邮递员' },
        { en: 'police + woman = policewoman', cn: '女警察' },
        { en: 'hair + dresser = hairdresser', cn: '理发师' }
      ] }
    ],
    patternDrills: [
      { pattern: 'What\'s his/her job? — He\'s/She\'s a ___.', substitutions: [
        { en: 'policeman', cn: '警察' },
        { en: 'nurse', cn: '护士' },
        { en: 'postman', cn: '邮递员' },
        { en: 'mechanic', cn: '机械师' }
      ] },
      { pattern: 'He\'s/She\'s a ___.', substitutions: [
        { en: 'hairdresser', cn: '理发师' },
        { en: 'taxi driver', cn: '出租车司机' },
        { en: 'air hostess', cn: '空姐' },
        { en: 'housewife', cn: '家庭主妇' }
      ] }
    ],
    exercises: [
      { type: 'choice', question: 'What\'s _____ job? She\'s a nurse.', options: ['A. he', 'B. his', 'C. she', 'D. her'], answer: 'D', explanation: '回答是She\'s，说明问的是女性，用her。' },
      { type: 'fill', question: 'He\'s a _____. (邮递员)', answer: 'postman', explanation: 'postman = post + man。' },
      { type: 'judge', question: '"What\'s she job?" 是正确的句子。', answer: '错误', explanation: '应该是"What\'s her job?"，用物主代词her而不是主格she。' },
      { type: 'choice', question: 'He\'s a _____. (机械师)', options: ['A. mechanist', 'B. mechanic', 'C. machine', 'D. mechanical'], answer: 'B', explanation: 'mechanic是名词"机械师"，machine是"机器"，mechanical是形容词。' }
    ],
  },
  {
    id: 9,
    title: 'How are you today?',
    titleCn: '你今天好吗？',
    text: [
      'Hello, Helen.',
      'Hi, Steven.',
      'How are you today?',
      'I\'m very well, thank you.',
      'And you?',
      'I\'m fine, thanks.',
      'How is Tony?',
      'He\'s fine, thanks.',
      'How is Emma?',
      'She\'s very well, too.'
    ],
    textCn: [
      '你好，海伦。',
      '嗨，史蒂文。',
      '你今天好吗？',
      '我很好，谢谢你。',
      '你呢？',
      '我很好，谢谢。',
      '托尼怎么样？',
      '他很好，谢谢。',
      '艾玛怎么样？',
      '她也很好。'
    ],
    vocabulary: [
      { word: 'today', phonetic: '/təˈdeɪ/', meaning: '今天' },
      { word: 'well', phonetic: '/wel/', meaning: '好的，健康的' },
      { word: 'fine', phonetic: '/faɪn/', meaning: '好的' },
      { word: 'thanks', phonetic: '/θæŋks/', meaning: '谢谢' },
      { word: 'and', phonetic: '/ænd/', meaning: '和，而且' }
    ],
    notes: [
      '"How are you?" 最常用问候语。',
      '"And you?" = "And how are you?"。',
      '"How is + 人名?" 询问第三人。'

    ],
    tags: ['名词复数', '拼读规则'],
    difficulty: 3,
    summary: '本课学习日常问候语"How are you?"及其回答，以及询问第三方近况的句型"How is...?"。',
    summaryEn: 'This lesson teaches the daily greeting "How are you?" and its responses, as well as asking about others with "How is...?"',
    sentenceExplanations: [
      { sentence: 'How are you today?', translation: '你今天好吗？', explanation: '"How are you?"是最常用的问候语。加上"today"使问候更具体、更亲切。' },
      { sentence: 'I\'m very well, thank you.', translation: '我很好，谢谢你。', explanation: '"well"在这里是形容词，表示身体好。"very well"比"fine"更正式。' },
      { sentence: 'And you?', translation: '你呢？', explanation: '这是"And how are you?"的省略形式，口语中非常常用。' },
      { sentence: 'I\'m fine, thanks.', translation: '我很好，谢谢。', explanation: '"fine"和"well"都表示好，"fine"更口语化。"thanks"比"thank you"更随意。' },
      { sentence: 'How is Tony?', translation: '托尼怎么样？', explanation: '"How is + 人名?"用来询问第三方的近况。注意is的缩写\'s。' },
      { sentence: 'She\'s very well, too.', translation: '她也很好。', explanation: '"too"表示"也"，放在句末，前面通常有逗号。' }
    ],
    grammarSections: [
      { title: 'How 问候句型', content: '"How"可以用来询问健康、状况等。不同场合使用不同的回答。', examples: [
        { en: 'How are you? — I\'m fine/well.', cn: '日常问候' },
        { en: 'How is your mother? — She\'s very well.', cn: '询问他人' },
        { en: 'How do you do? — How do you do?', cn: '正式场合（已较旧）' },
        { en: 'How\'s everything? — Everything\'s fine.', cn: '口语问候' }
      ] },
      { title: 'too 的用法', content: '"too"表示"也"，通常放在句末，前面加逗号。在否定句中用"either"替代。', examples: [
        { en: 'She\'s very well, too.', cn: '她也很好。' },
        { en: 'I\'m fine, too.', cn: '我也很好。' },
        { en: 'He\'s not French, either.', cn: '他也不是法国人。（否定句用either）' }
      ] }
    ],
    patternDrills: [
      { pattern: 'How are you? — I\'m ___.', substitutions: [
        { en: 'very well', cn: '很好' },
        { en: 'fine', cn: '好' },
        { en: 'not bad', cn: '不错' },
        { en: 'great', cn: '很棒' }
      ] },
      { pattern: 'How is ___? — He\'s/She\'s ___.', substitutions: [
        { en: 'Tony / fine', cn: '托尼 / 好' },
        { en: 'Emma / very well', cn: '艾玛 / 很好' },
        { en: 'your mother / well', cn: '你妈妈 / 好' },
        { en: 'your father / not bad', cn: '你爸爸 / 不错' }
      ] }
    ],
    exercises: [
      { type: 'choice', question: 'How _____ you today?', options: ['A. is', 'B. am', 'C. are', 'D. be'], answer: 'C', explanation: '主语是you，用are。' },
      { type: 'fill', question: 'I\'m very _____, thank you. (好的)', answer: 'well', explanation: '"well"表示身体好、状况好。' },
      { type: 'judge', question: '"And you?" 是 "And how are you?" 的省略形式。', answer: '正确', explanation: '口语中常用省略形式。' },
      { type: 'choice', question: 'She\'s fine, _____. (也)', options: ['A. to', 'B. two', 'C. too', 'D. do'], answer: 'C', explanation: '"too"表示"也"，发音为/tuː/。' }
    ],
  },
  {
    id: 10,
    title: 'Look at...',
    titleCn: '看...',
    text: [
      'Look at that man!',
      'He\'s fat.',
      'Look at that woman!',
      'She\'s thin.',
      'Look at that boy!',
      'He\'s tall.',
      'Look at that girl!',
      'She\'s short.',
      'Look at that policewoman!',
      'She\'s young.'
    ],
    textCn: [
      '看那个男人！',
      '他很胖。',
      '看那个女人！',
      '她很瘦。',
      '看那个男孩！',
      '他很高。',
      '看那个女孩！',
      '她很矮。',
      '看那个女警察！',
      '她很年轻。'
    ],
    vocabulary: [
      { word: 'fat', phonetic: '/fæt/', meaning: '胖的' },
      { word: 'thin', phonetic: '/θɪn/', meaning: '瘦的' },
      { word: 'tall', phonetic: '/tɔːl/', meaning: '高的' },
      { word: 'short', phonetic: '/ʃɔːt/', meaning: '矮的，短的' },
      { word: 'young', phonetic: '/jʌŋ/', meaning: '年轻的' },
      { word: 'policewoman', phonetic: '/pəˈliːswʊmən/', meaning: '女警察' }
    ],
    notes: [
      '"Look at..." 引起注意。',
      '"He\'s" = "He is"。',
      '形容词描述外观：fat, thin, tall, short, young。'

    ],
    tags: ['复数', '特殊疑问句'],
    difficulty: 2,
    summary: '本课学习"Look at..."引起注意的句型，以及描述人物外观的形容词：胖瘦、高矮、年轻等。',
    summaryEn: 'This lesson teaches "Look at..." to draw attention and appearance adjectives: fat/thin, tall/short, young.',
    sentenceExplanations: [
      { sentence: 'Look at that man!', translation: '看那个男人！', explanation: '"Look at..."用来引起对方注意看某物或某人。"that"是指示代词"那个"。' },
      { sentence: 'He\'s fat.', translation: '他很胖。', explanation: '"fat"是形容词，描述体型。在英语中直接描述体型是可以接受的，但在中文文化中需注意场合。' },
      { sentence: 'Look at that woman!', translation: '看那个女人！', explanation: '"woman"的复数是"women"，注意发音变化：/ˈwʊmən/ → /ˈwɪmɪn/。' },
      { sentence: 'She\'s thin.', translation: '她很瘦。', explanation: '"thin"是"fat"的反义词。注意/θ/的发音，舌尖在上下齿之间。' },
      { sentence: 'He\'s tall.', translation: '他很高。', explanation: '"tall"用于描述人或细长物体的高度，不能用于描述山或建筑物。' },
      { sentence: 'She\'s short.', translation: '她很矮。', explanation: '"short"既可表示"矮"也可表示"短"，根据上下文判断。' }
    ],
    grammarSections: [
      { title: 'Look at... 句型', content: '"Look at + 名词/代词"用来引起对方注意。如果宾语是代词，要用宾格形式。', examples: [
        { en: 'Look at that man!', cn: '看那个男人！' },
        { en: 'Look at her!', cn: '看她！（宾格）' },
        { en: 'Look at this picture.', cn: '看这张图片。' },
        { en: 'Look at me!', cn: '看我！（宾格）' }
      ] },
      { title: '形容词描述外观', content: '英语中常用"主语 + be动词 + 形容词"的结构来描述人的外观特征。', examples: [
        { en: 'He\'s fat. / She\'s thin.', cn: '胖 / 瘦' },
        { en: 'He\'s tall. / She\'s short.', cn: '高 / 矮' },
        { en: 'She\'s young. / He\'s old.', cn: '年轻 / 年老' },
        { en: 'She\'s beautiful. / He\'s handsome.', cn: '漂亮 / 帅' }
      ] }
    ],
    patternDrills: [
      { pattern: 'Look at that ___! He\'s/She\'s ___.', substitutions: [
        { en: 'man / fat', cn: '男人 / 胖' },
        { en: 'woman / thin', cn: '女人 / 瘦' },
        { en: 'boy / tall', cn: '男孩 / 高' },
        { en: 'girl / short', cn: '女孩 / 矮' }
      ] },
      { pattern: 'He\'s/She\'s ___.', substitutions: [
        { en: 'young', cn: '年轻的' },
        { en: 'old', cn: '老的' },
        { en: 'busy', cn: '忙碌的' },
        { en: 'lazy', cn: '懒惰的' }
      ] }
    ],
    exercises: [
      { type: 'choice', question: 'Look _____ that woman! She\'s thin.', options: ['A. in', 'B. on', 'C. at', 'D. to'], answer: 'C', explanation: '"Look at"是固定搭配，表示"看..."。' },
      { type: 'fill', question: 'He\'s tall and she\'s _____. (矮的)', answer: 'short', explanation: '"short"是"tall"的反义词。' },
      { type: 'judge', question: '"Look at she!" 是正确的句子。', answer: '错误', explanation: '"at"是介词，后面要接宾格代词，应该是"Look at her!"。' },
      { type: 'choice', question: 'That _____ is young. (女警察)', options: ['A. policeman', 'B. policewoman', 'C. police', 'D. polices'], answer: 'B', explanation: 'policewoman是女警察，由police+woman组成。' }
    ],
  },
  {
    id: 11,
    title: 'Is this your shirt?',
    titleCn: '这是你的衬衫吗？',
    text: [
      'Whose shirt is that?',
      'Is this your shirt, Dave?',
      'No, sir. It\'s not my shirt.',
      'This is my shirt. My shirt is blue.',
      'Is this shirt Tim\'s?',
      'Perhaps it is, sir.',
      'Tim\'s shirt is white.',
      'Here you are. Catch!',
      'Thank you, sir.'
    ],
    textCn: [
      '那是谁的衬衫？',
      '这是你的衬衫吗，戴夫？',
      '不，先生。这不是我的衬衫。',
      '这是我的衬衫。我的衬衫是蓝色的。',
      '这件衬衫是蒂姆的吗？',
      '也许是吧，先生。',
      '蒂姆的衬衫是白色的。',
      '给你。接住！',
      '谢谢，先生。'
    ],
    vocabulary: [
      { word: 'whose', phonetic: '/huːz/', meaning: '谁的' },
      { word: 'perhaps', phonetic: '/pəˈhæps/', meaning: '也许' },
      { word: 'catch', phonetic: '/kætʃ/', meaning: '接住' }
    ],
    notes: [
      '"Whose shirt is that?" 询问物品所属。',
      '名词所有格：Tim\'s shirt。',
      '"Here you are." 递给对方东西。'

    ],
    tags: ['复数', '形容词'],
    difficulty: 3,
  },
  {
    id: 12,
    title: 'Whose is this...?',
    titleCn: '这是谁的...？',
    text: [
      'Whose is this handbag?',
      'It\'s Stella\'s. It\'s her handbag.',
      'Whose is this pen?',
      'It\'s my pen. It\'s mine.',
      'Whose is this coat?',
      'It\'s Paul\'s. It\'s his coat.',
      'Whose are these books?',
      'They\'re our books. They\'re ours.',
      'Whose are these pencils?',
      'They\'re their pencils. They\'re theirs.'
    ],
    textCn: [
      '这是谁的手提包？',
      '是斯特拉的。是她的手提包。',
      '这是谁的笔？',
      '是我的笔。是我的。',
      '这是谁的大衣？',
      '是保罗的。是他的大衣。',
      '这些是谁的书？',
      '是我们的书。是我们的。',
      '这些是谁的铅笔？',
      '是他们的铅笔。是他们的。'
    ],
    vocabulary: [
      { word: 'mine', phonetic: '/maɪn/', meaning: '我的' },
      { word: 'ours', phonetic: '/ˈaʊəz/', meaning: '我们的' },
      { word: 'theirs', phonetic: '/ðeəz/', meaning: '他们的' },
      { word: 'these', phonetic: '/ðiːz/', meaning: '这些' }
    ],
    notes: [
      '物主代词：mine, yours, his, hers, ours, theirs。',
      '形容词性 vs 名词性：my book = mine。',
      '复数用 "Whose are these...?"。'

    ],
    tags: ['特殊疑问句', 'which', '简单句'],
    difficulty: 2,
  },
  {
    id: 13,
    title: 'A new dress',
    titleCn: '一件新连衣裙',
    text: [
      'What colour is your new dress?',
      'It\'s green.',
      'Come upstairs and see it.',
      'Look! Here it is!',
      'That\'s a nice dress.',
      'It\'s very smart.',
      'My hat\'s new, too.',
      'What colour is it?',
      'It\'s the same colour.',
      'It\'s green, too.'
    ],
    textCn: [
      '你的新连衣裙是什么颜色的？',
      '是绿色的。',
      '到楼上来看看吧。',
      '看！就是这样！',
      '这件连衣裙真漂亮。',
      '它很时髦。',
      '我的帽子也是新的。',
      '它是什么颜色的？',
      '是一样的颜色。',
      '也是绿色的。'
    ],
    vocabulary: [
      { word: 'colour', phonetic: '/ˈkʌlə/', meaning: '颜色' },
      { word: 'green', phonetic: '/ɡriːn/', meaning: '绿色' },
      { word: 'upstairs', phonetic: '/ʌpˈsteəz/', meaning: '楼上' },
      { word: 'smart', phonetic: '/smɑːt/', meaning: '时髦的' },
      { word: 'hat', phonetic: '/hæt/', meaning: '帽子' },
      { word: 'same', phonetic: '/seɪm/', meaning: '相同的' }
    ],
    notes: [
      '"What colour is...?" 询问颜色。',
      '"Come upstairs" 祈使句。',
      '"the same colour" = 同样的颜色。'

    ],
    tags: ['后置定语', '介词短语'],
    difficulty: 2,
  },
  {
    id: 14,
    title: 'What colour is your...?',
    titleCn: '你的...是什么颜色？',
    text: [
      'What colour is your new car?',
      'It\'s red.',
      'What colour is your umbrella?',
      'It\'s black.',
      'What colour is your dog?',
      'It\'s brown and white.',
      'What colour are your shoes?',
      'They\'re grey.',
      'What colour are your blouses?',
      'They\'re yellow.'
    ],
    textCn: [
      '你的新车是什么颜色的？',
      '是红色的。',
      '你的雨伞是什么颜色的？',
      '是黑色的。',
      '你的狗是什么颜色的？',
      '是棕色和白色的。',
      '你的鞋是什么颜色的？',
      '是灰色的。',
      '你的衬衫是什么颜色的？',
      '是黄色的。'
    ],
    vocabulary: [
      { word: 'red', phonetic: '/red/', meaning: '红色的' },
      { word: 'black', phonetic: '/blæk/', meaning: '黑色的' },
      { word: 'brown', phonetic: '/braʊn/', meaning: '棕色的' },
      { word: 'grey', phonetic: '/ɡreɪ/', meaning: '灰色的' },
      { word: 'yellow', phonetic: '/ˈjeləʊ/', meaning: '黄色的' },
      { word: 'blouse', phonetic: '/blaʊz/', meaning: '女式衬衫' }
    ],
    notes: [
      '颜色词扩展：red, black, brown, grey, yellow。',
      '复数主语用 "What colour are...?"。',
      '"brown and white" 两种颜色并列。'

    ],
    tags: ['There be', '叙述文'],
    difficulty: 4,
  },
  {
    id: 15,
    title: 'Your passports, please.',
    titleCn: '请出示你们的护照。',
    text: [
      'Are you Swedish?',
      'No, we are not.',
      'We are Danish.',
      'Are your friends Danish, too?',
      'No, they aren\'t.',
      'They are Norwegian.',
      'Your passports, please.',
      'Here they are.',
      'Are these your cases?',
      'No, they aren\'t. Our cases are brown.'
    ],
    textCn: [
      '你们是瑞典人吗？',
      '不，我们不是。',
      '我们是丹麦人。',
      '你们的朋友也是丹麦人吗？',
      '不，他们不是。',
      '他们是挪威人。',
      '请出示你们的护照。',
      '给您。',
      '这些是你们的箱子吗？',
      '不，不是。我们的箱子是棕色的。'
    ],
    vocabulary: [
      { word: 'passport', phonetic: '/ˈpɑːspɔːt/', meaning: '护照' },
      { word: 'Danish', phonetic: '/ˈdeɪnɪʃ/', meaning: '丹麦的' },
      { word: 'Norwegian', phonetic: '/nɔːˈwiːdʒən/', meaning: '挪威的' },
      { word: 'friend', phonetic: '/frend/', meaning: '朋友' },
      { word: 'case', phonetic: '/keɪs/', meaning: '箱子' }
    ],
    notes: [
      '单数 passport → 复数 passports。',
      '"we are" / "they are" 复数。',
      '"Here they are." 复数形式。'

    ],
    tags: ['There be', '叙述文'],
    difficulty: 2,
  },
  {
    id: 16,
    title: 'Are you...?',
    titleCn: '你是...吗？',
    text: [
      'Are you Russian?',
      'No, I am not. I\'m Dutch.',
      'Are you tourists?',
      'Yes, we are.',
      'Are you American?',
      'No, we aren\'t. We\'re English.',
      'Are these your keys?',
      'Yes, they are.',
      'Is this your mother?',
      'No, she isn\'t. She\'s my aunt.'
    ],
    textCn: [
      '你是俄罗斯人吗？',
      '不，我不是。我是荷兰人。',
      '你们是游客吗？',
      '是的，我们是。',
      '你们是美国人吗？',
      '不，我们不是。我们是英国人。',
      '这些是你的钥匙吗？',
      '是的，它们是。',
      '这是你妈妈吗？',
      '不，她不是。她是我的姑姑。'
    ],
    vocabulary: [
      { word: 'Russian', phonetic: '/ˈrʌʃn/', meaning: '俄罗斯的' },
      { word: 'Dutch', phonetic: '/dʌtʃ/', meaning: '荷兰的' },
      { word: 'tourist', phonetic: '/ˈtʊərɪst/', meaning: '游客' },
      { word: 'key', phonetic: '/kiː/', meaning: '钥匙' },
      { word: 'aunt', phonetic: '/ɑːnt/', meaning: '阿姨，姑姑' }
    ],
    notes: [
      '国籍词：Russian, Dutch, American, English。',
      '"We\'re English." English 也可作形容词。',
      '家庭成员：mother, father, aunt, uncle。'

    ],
    tags: ['祈使句'],
    difficulty: 2,
  },
  {
    id: 17,
    title: 'How do you do?',
    titleCn: '你好！',
    text: [
      'Come and meet our employees, Mr. Richards.',
      'Thank you, Mr. Jackson.',
      'This is Nicola Grey, and this is Claire Taylor.',
      'How do you do?',
      'Those women are very hard-working.',
      'What are their jobs?',
      'They\'re keyboard operators.',
      'This is Michael Baker, and this is Jeremy Short.',
      'They aren\'t very busy! What are their jobs?',
      'They\'re sales reps. They\'re very lazy.'
    ],
    textCn: [
      '来见见我们的员工，理查兹先生。',
      '谢谢，杰克逊先生。',
      '这位是尼古拉·格雷，这位是克莱尔·泰勒。',
      '你们好！',
      '那些女士工作非常努力。',
      '她们是做什么工作的？',
      '她们是键盘操作员。',
      '这位是迈克尔·贝克，这位是杰里米·肖特。',
      '他们不太忙！他们做什么工作？',
      '他们是销售代表。他们非常懒。'
    ],
    vocabulary: [
      { word: 'employee', phonetic: '/ɪmˈplɔɪiː/', meaning: '雇员' },
      { word: 'hard-working', phonetic: '/hɑːd ˈwɜːkɪŋ/', meaning: '勤劳的' },
      { word: 'busy', phonetic: '/ˈbɪzi/', meaning: '忙碌的' },
      { word: 'sales rep', phonetic: '/seɪlz rep/', meaning: '销售代表' },
      { word: 'lazy', phonetic: '/ˈleɪzi/', meaning: '懒惰的' }
    ],
    notes: [
      '"How do you do?" 正式问候语。',
      '"those women" that 复数 → those。',
      '反义词：hard-working ↔ lazy。'

    ],
    tags: ['现在进行时', '时态'],
    difficulty: 5,
  },
  {
    id: 18,
    title: 'What are their jobs?',
    titleCn: '他们是做什么工作的？',
    text: [
      'Look at that man. He\'s a postman.',
      'Look at that woman. She\'s a policewoman.',
      'Look at those people.',
      'What are their jobs?',
      'They\'re sales reps.',
      'Look at that milkman.',
      'He\'s very busy.',
      'Look at that nurse.',
      'She\'s very young.',
      'Look at those office workers.',
      'They\'re very lazy.'
    ],
    textCn: [
      '看那个男人。他是邮递员。',
      '看那个女人。她是女警察。',
      '看那些人。',
      '他们是做什么工作的？',
      '他们是销售代表。',
      '看那个送奶工。',
      '他很忙。',
      '看那个护士。',
      '她很年轻。',
      '看那些办公室职员。',
      '他们很懒。'
    ],
    vocabulary: [
      { word: 'milkman', phonetic: '/ˈmɪlkmən/', meaning: '送牛奶的人' },
      { word: 'office', phonetic: '/ˈɒfɪs/', meaning: '办公室' },
      { word: 'worker', phonetic: '/ˈwɜːkə/', meaning: '工人，员工' },
      { word: 'people', phonetic: '/ˈpiːpl/', meaning: '人们' }
    ],
    notes: [
      '"people" 是 person 的复数。',
      'that（单数）→ those（复数）。',
      '职业扩展：milkman, office worker。'

    ],
    tags: ['现在进行时', '动词分类'],
    difficulty: 3,
  },
  {
    id: 19,
    title: 'Tired and thirsty',
    titleCn: '又累又渴',
    text: [
      'What\'s the matter, children?',
      'We\'re tired and thirsty, Mum.',
      'Sit down here.',
      'Are you all right now?',
      'No, we aren\'t.',
      'Look! There\'s an ice cream man.',
      'Two ice creams please.',
      'Here you are, children.',
      'Thanks, Mum.',
      'These ice creams are nice.'
    ],
    textCn: [
      '怎么了，孩子们？',
      '我们累了，也渴了，妈妈。',
      '坐在这儿吧。',
      '你们现在好些了吗？',
      '不，没有。',
      '看！那边有个卖冰淇淋的。',
      '请给我们两客冰淇淋。',
      '给你们，孩子们。',
      '谢谢，妈妈。',
      '这些冰淇淋真好吃。'
    ],
    vocabulary: [
      { word: 'matter', phonetic: '/ˈmætə/', meaning: '事情，问题' },
      { word: 'tired', phonetic: '/taɪəd/', meaning: '累的' },
      { word: 'thirsty', phonetic: '/ˈθɜːsti/', meaning: '渴的' },
      { word: 'ice cream', phonetic: '/aɪs kriːm/', meaning: '冰淇淋' },
      { word: 'sit down', phonetic: '/sɪt daʊn/', meaning: '坐下' }
    ],
    notes: [
      '"What\'s the matter?" 问出了什么问题。',
      '"There\'s" = "There is"。',
      '"Two ice creams" 物质名词可数化。'

    ],
    tags: ['所有格', '介词短语'],
    difficulty: 2,
  },
  {
    id: 20,
    title: 'Look at them!',
    titleCn: '看看他们！',
    text: [
      'Look at those shoes!',
      'They\'re very small.',
      'What size are they?',
      'Size five.',
      'Look at those trousers!',
      'They\'re very large.',
      'What size are they?',
      'Size eleven.',
      'Look at those hats!',
      'They\'re very funny.'
    ],
    textCn: [
      '看看那些鞋！',
      '它们非常小。',
      '它们是几码的？',
      '5码。',
      '看看那些裤子！',
      '它们非常大。',
      '它们是几码的？',
      '11码。',
      '看看那些帽子！',
      '它们很滑稽。'
    ],
    vocabulary: [
      { word: 'shoe', phonetic: '/ʃuː/', meaning: '鞋' },
      { word: 'size', phonetic: '/saɪz/', meaning: '尺码，大小' },
      { word: 'trousers', phonetic: '/ˈtraʊzəz/', meaning: '裤子' },
      { word: 'large', phonetic: '/lɑːdʒ/', meaning: '大的' },
      { word: 'small', phonetic: '/smɔːl/', meaning: '小的' },
      { word: 'funny', phonetic: '/ˈfʌni/', meaning: '滑稽的' }
    ],
    notes: [
      '"What size...?" 询问尺寸。',
      'trousers 通常用复数。',
      '反义词：large ↔ small。'

    ],
    tags: ['一般将来时', '时态'],
    difficulty: 3,
  },
  {
    id: 21,
    title: 'Which glasses?',
    titleCn: '哪些杯子？',
    text: [
      'Give me some glasses please, Mrs. Jones.',
      'Which glasses? These glasses?',
      'No, not those. The ones on the shelf.',
      'These?',
      'Yes, please.',
      'Here you are.',
      'Thanks.'
    ],
    textCn: [
      '请给我一些杯子，琼斯夫人。',
      '哪些杯子？这些吗？',
      '不，不是那些。架子上的那些。',
      '这些吗？',
      '是的，请给我。',
      '给你。',
      '谢谢。'
    ],
    vocabulary: [
      { word: 'give', phonetic: '/ɡɪv/', meaning: '给' },
      { word: 'which', phonetic: '/wɪtʃ/', meaning: '哪一个' },
      { word: 'glass', phonetic: '/ɡlɑːs/', meaning: '杯子' },
      { word: 'shelf', phonetic: '/ʃelf/', meaning: '架子' }
    ],
    notes: [
      '"Give me..." 祈使句，表示请求。',
      '"Which glasses?" 疑问词 which 用于选择。',
      '"The ones on the shelf" — ones 代替 glasses。'

    ],
    tags: ['祈使句', '双宾语', '否定句'],
    difficulty: 3,
  },
  {
    id: 22,
    title: 'Come in, Amy.',
    titleCn: '进来，艾米。',
    text: [
      'Come in, Amy.',
      'Shut the door, please.',
      'This bedroom is very untidy.',
      'What must I do, Mrs. Jones?',
      'Open the window and air the room.',
      'Then put these clothes in the wardrobe.',
      'Then make the bed.',
      'Dust the dressing table.',
      'Then sweep the floor.'
    ],
    textCn: [
      '进来，艾米。',
      '请关上门。',
      '这卧室太不整洁了。',
      '我该做什么，琼斯夫人？',
      '打开窗户，给房间通通风。',
      '然后把这些衣服放进衣柜。',
      '然后整理好床。',
      '梳妆台上的灰尘擦一擦。',
      '然后扫地。'
    ],
    vocabulary: [
      { word: 'bedroom', phonetic: '/ˈbedruːm/', meaning: '卧室' },
      { word: 'untidy', phonetic: '/ʌnˈtaɪdi/', meaning: '不整洁的' },
      { word: 'air', phonetic: '/eə/', meaning: '通风' },
      { word: 'wardrobe', phonetic: '/ˈwɔːdrəʊb/', meaning: '衣柜' },
      { word: 'dust', phonetic: '/dʌst/', meaning: '擦拭' },
      { word: 'sweep', phonetic: '/swiːp/', meaning: '扫' }
    ],
    notes: [
      '祈使句系列：Come in / Shut / Open / Put / Make / Dust / Sweep。',
      '"make the bed" 整理床铺。',
      '"air the room" 给房间通风。'

    ],
    tags: ['量词', '不可数名词'],
    difficulty: 2,
  },
  {
    id: 23,
    title: 'Mrs. Smith\'s kitchen',
    titleCn: '史密斯夫人的厨房',
    text: [
      'Mrs. Smith\'s kitchen is small.',
      'There is a refrigerator in the kitchen.',
      'The refrigerator is white.',
      'It is on the right.',
      'There is an electric cooker in the kitchen.',
      'The cooker is blue.',
      'It is on the left.',
      'There is a table in the middle of the room.'
    ],
    textCn: [
      '史密斯夫人的厨房很小。',
      '厨房里有一台冰箱。',
      '冰箱是白色的。',
      '它在右边。',
      '厨房里有一个电炉。',
      '电炉是蓝色的。',
      '它在左边。',
      '房间中央有一张桌子。'
    ],
    vocabulary: [
      { word: 'kitchen', phonetic: '/ˈkɪtʃɪn/', meaning: '厨房' },
      { word: 'refrigerator', phonetic: '/rɪˈfrɪdʒəreɪtə/', meaning: '冰箱' },
      { word: 'electric', phonetic: '/ɪˈlektrɪk/', meaning: '电的' },
      { word: 'cooker', phonetic: '/ˈkʊkə/', meaning: '炉灶' },
      { word: 'middle', phonetic: '/ˈmɪdl/', meaning: '中间' },
      { word: 'right', phonetic: '/raɪt/', meaning: '右边' },
      { word: 'left', phonetic: '/left/', meaning: '左边' }
    ],
    notes: [
      '"There is + 名词 + 地点" 表示某处有某物。',
      '方位词：on the right / on the left / in the middle。'

    ],
    tags: ['情态动词', 'can', '数词'],
    difficulty: 4,
  },
  {
    id: 24,
    title: 'Mrs. Smith\'s living room',
    titleCn: '史密斯夫人的客厅',
    text: [
      'Mrs. Smith\'s living room is large.',
      'There is a television in the room.',
      'The television is near the window.',
      'There are some magazines on the television.',
      'There is a table in the room.',
      'There are some newspapers on the table.'
    ],
    textCn: [
      '史密斯夫人的客厅很大。',
      '房间里有一台电视机。',
      '电视机靠近窗户。',
      '电视机上面有一些杂志。',
      '房间里有一张桌子。',
      '桌子上有一些报纸。'
    ],
    vocabulary: [
      { word: 'living room', phonetic: '/ˈlɪvɪŋ ruːm/', meaning: '客厅' },
      { word: 'television', phonetic: '/ˈtelɪvɪʒn/', meaning: '电视机' },
      { word: 'magazine', phonetic: '/ˌmæɡəˈziːn/', meaning: '杂志' },
      { word: 'newspaper', phonetic: '/ˈnjuːzpeɪpə/', meaning: '报纸' }
    ],
    notes: [
      '"There are + 复数名词" 表示有（复数）。',
      '"near the window" 靠近窗户。',
      'There is / There are 的单复数区别。'

    ],
    tags: ['情态动词', 'must', '疑问句'],
    difficulty: 2,
  },
  {
    id: 25,
    title: 'Come in here now.',
    titleCn: '现在到这里来。',
    text: [
      'Where are the children?',
      'They are in the garden.',
      'What are they doing?',
      'They are climbing the tree.',
      'Come here!',
      'We\'re coming now!',
      'I\'m sorry, Mrs. Jones.',
      'Are they in the garden now?',
      'No, they aren\'t. They are in the kitchen.'
    ],
    textCn: [
      '孩子们在哪里？',
      '他们在花园里。',
      '他们在做什么？',
      '他们在爬树。',
      '过来！',
      '我们马上就来！',
      '对不起，琼斯夫人。',
      '他们现在在花园里吗？',
      '不，不在。他们在厨房里。'
    ],
    vocabulary: [
      { word: 'garden', phonetic: '/ˈɡɑːdn/', meaning: '花园' },
      { word: 'climb', phonetic: '/klaɪm/', meaning: '爬' },
      { word: 'tree', phonetic: '/triː/', meaning: '树' }
    ],
    notes: [
      '"Where are...?" 问位置。',
      '"What are they doing?" 现在进行时。',
      '"We\'re coming!" 表示马上就来。'

    ],
    tags: ['实义动词', '否定句'],
    difficulty: 2,
  },
  {
    id: 26,
    title: 'There is / There are',
    titleCn: '有...',
    text: [
      'There is a book on the desk.',
      'There is a pencil on the desk.',
      'There are some books on the desk.',
      'There are some pencils on the desk.',
      'Is there a book on the desk?',
      'Yes, there is.',
      'Are there any books on the desk?',
      'Yes, there are.'
    ],
    textCn: [
      '书桌上有一本书。',
      '书桌上有一支铅笔。',
      '书桌上有一些书。',
      '书桌上有一些铅笔。',
      '书桌上有一本书吗？',
      '是的，有。',
      '书桌上有一些书吗？',
      '是的，有。'
    ],
    vocabulary: [
      { word: 'desk', phonetic: '/desk/', meaning: '书桌' },
      { word: 'any', phonetic: '/ˈeni/', meaning: '一些（疑问/否定）' }
    ],
    notes: [
      'There is + 单数 / There are + 复数。',
      '疑问句：Is there...? / Are there...?',
      '否定句：There isn\'t / There aren\'t。'

    ],
    tags: ['一般现在时', '时态'],
    difficulty: 3,
  },
  {
    id: 27,
    title: 'Penny\'s bag',
    titleCn: '彭妮的包',
    text: [
      'Is that bag heavy, Penny?',
      'Not very.',
      'Here! Put it on this chair.',
      'What\'s in it?',
      'A piece of cheese.',
      'A loaf of bread.',
      'A bar of soap.',
      'A bar of chocolate.',
      'A bottle of milk.',
      'A pound of sugar.',
      'Half a pound of coffee.'
    ],
    textCn: [
      '那个包重吗，彭妮？',
      '不太重。',
      '给你！把它放在这把椅子上。',
      '里面有什么？',
      '一块奶酪。',
      '一条面包。',
      '一块肥皂。',
      '一块巧克力。',
      '一瓶牛奶。',
      '一磅糖。',
      '半磅咖啡。'
    ],
    vocabulary: [
      { word: 'heavy', phonetic: '/ˈhevi/', meaning: '重的' },
      { word: 'loaf', phonetic: '/ləʊf/', meaning: '一条（面包）' },
      { word: 'bar', phonetic: '/bɑː/', meaning: '一块' },
      { word: 'soap', phonetic: '/səʊp/', meaning: '肥皂' },
      { word: 'chocolate', phonetic: '/ˈtʃɒklɪt/', meaning: '巧克力' },
      { word: 'pound', phonetic: '/paʊnd/', meaning: '磅' },
      { word: 'sugar', phonetic: '/ˈʃʊɡə/', meaning: '糖' },
      { word: 'coffee', phonetic: '/ˈkɒfi/', meaning: '咖啡' }
    ],
    notes: [
      '量词：a piece of / a loaf of / a bar of / a bottle of / a pound of。',
      '"Not very." = "Not very heavy." 的省略。',
      'bread 是不可数名词。'

    ],
    tags: ['时间', '天气', '频率副词'],
    difficulty: 2,
  },
  {
    id: 28,
    title: 'A fine day',
    titleCn: '好天气',
    text: [
      'It is a fine day today.',
      'There are some clouds in the sky, but the sun is shining.',
      'Mr. Jones is with his family.',
      'They are walking over the bridge.',
      'There are some boats on the river.',
      'Mr. Jones and his wife are looking at them.',
      'Sally is looking at a big ship.',
      'The ship is going under the bridge.'
    ],
    textCn: [
      '今天是个好天气。',
      '天空中有一些云，但太阳在照耀。',
      '琼斯先生和家人在一起。',
      '他们正在过桥。',
      '河上有几条船。',
      '琼斯先生和他的妻子在看船。',
      '萨利在看一艘大船。',
      '那艘船正从桥下经过。'
    ],
    vocabulary: [
      { word: 'cloud', phonetic: '/klaʊd/', meaning: '云' },
      { word: 'sky', phonetic: '/skaɪ/', meaning: '天空' },
      { word: 'sun', phonetic: '/sʌn/', meaning: '太阳' },
      { word: 'shine', phonetic: '/ʃaɪn/', meaning: '照耀' },
      { word: 'bridge', phonetic: '/brɪdʒ/', meaning: '桥' },
      { word: 'boat', phonetic: '/bəʊt/', meaning: '小船' },
      { word: 'river', phonetic: '/ˈrɪvə/', meaning: '河' },
      { word: 'ship', phonetic: '/ʃɪp/', meaning: '轮船' }
    ],
    notes: [
      '现在进行时：is walking / is looking / is going。',
      '"over the bridge" 过桥。',
      '"under the bridge" 在桥下。'

    ],
    tags: ['天气', '频率副词'],
    difficulty: 2,
  },
  {
    id: 29,
    title: 'What\'s the weather like?',
    titleCn: '天气怎么样？',
    text: [
      'What\'s the weather like in spring?',
      'It\'s warm in spring.',
      'What\'s the weather like in summer?',
      'It\'s hot in summer.',
      'What\'s the weather like in autumn?',
      'It\'s cool in autumn.',
      'What\'s the weather like in winter?',
      'It\'s cold in winter.'
    ],
    textCn: [
      '春天天气怎么样？',
      '春天很暖和。',
      '夏天天气怎么样？',
      '夏天很热。',
      '秋天天气怎么样？',
      '秋天很凉爽。',
      '冬天天气怎么样？',
      '冬天很冷。'
    ],
    vocabulary: [
      { word: 'weather', phonetic: '/ˈweðə/', meaning: '天气' },
      { word: 'spring', phonetic: '/sprɪŋ/', meaning: '春天' },
      { word: 'summer', phonetic: '/ˈsʌmə/', meaning: '夏天' },
      { word: 'autumn', phonetic: '/ˈɔːtəm/', meaning: '秋天' },
      { word: 'winter', phonetic: '/ˈwɪntə/', meaning: '冬天' },
      { word: 'warm', phonetic: '/wɔːm/', meaning: '温暖的' },
      { word: 'hot', phonetic: '/hɒt/', meaning: '热的' },
      { word: 'cool', phonetic: '/kuːl/', meaning: '凉爽的' },
      { word: 'cold', phonetic: '/kəʊld/', meaning: '冷的' }
    ],
    notes: [
      '"What\'s the weather like...?" 询问天气。',
      '季节词：spring, summer, autumn, winter。',
      '天气形容词：warm, hot, cool, cold。'

    ],
    tags: ['动词短语', '三单'],
    difficulty: 4,
  },
  {
    id: 30,
    title: 'The Sawyer family',
    titleCn: '索耶一家',
    text: [
      'The Sawyers live at 87 King Street.',
      'In the morning, Mr. Sawyer goes to work and the children go to school.',
      'Mrs. Sawyer stays at home every day.',
      'She does the housework.',
      'She always eats her lunch at noon.',
      'In the afternoon, she usually sees her friends.'
    ],
    textCn: [
      '索耶一家住在国王街87号。',
      '早上，索耶先生去上班，孩子们去上学。',
      '索耶夫人每天待在家里。',
      '她做家务。',
      '她总是在中午吃午饭。',
      '下午，她通常去看望朋友。'
    ],
    vocabulary: [
      { word: 'housework', phonetic: '/ˈhaʊswɜːk/', meaning: '家务' },
      { word: 'stay', phonetic: '/steɪ/', meaning: '待，停留' },
      { word: 'noon', phonetic: '/nuːn/', meaning: '中午' },
      { word: 'usually', phonetic: '/ˈjuːʒuəli/', meaning: '通常' },
      { word: 'always', phonetic: '/ˈɔːlweɪz/', meaning: '总是' }
    ],
    notes: [
      '一般现在时表示习惯性动作。',
      '频率副词：always / usually / sometimes / never 放在动词前。',
      '"go to work" 去上班 / "go to school" 去上学。'

    ],
    tags: ['一般现在时', '现在进行时'],
    difficulty: 4,
  },
  {
    id: 31,
    title: 'An unusual day',
    titleCn: '不寻常的一天',
    text: [
      'It is eight o\'clock.',
      'The children go to school by car every day, but today, they are going to school on foot.',
      'It is ten o\'clock. Mrs. Sawyer usually stays at home in the morning, but this morning, she is going to the shops.',
      'It is four o\'clock. In the afternoon, Mrs. Sawyer usually drinks tea in the living room, but this afternoon, she is drinking tea in the garden.'
    ],
    textCn: [
      '现在八点钟。',
      '孩子们每天坐车上学，但今天他们步行上学。',
      '现在十点钟。索耶夫人通常上午待在家里，但今天上午她要去商店。',
      '现在四点钟。下午，索耶夫人通常在客厅喝茶，但今天下午她在花园里喝茶。'
    ],
    vocabulary: [
      { word: 'unusual', phonetic: '/ʌnˈjuːʒuəl/', meaning: '不寻常的' },
      { word: 'by car', phonetic: '/baɪ kɑː/', meaning: '坐车' },
      { word: 'on foot', phonetic: '/ɒn fʊt/', meaning: '步行' },
      { word: 'shop', phonetic: '/ʃɒp/', meaning: '商店' },
      { word: 'drink', phonetic: '/drɪŋk/', meaning: '喝' }
    ],
    notes: [
      '一般现在时（习惯）vs 现在进行时（此刻）。',
      '"by car" 坐车 / "on foot" 步行。',
      'this morning / this afternoon 暗示现在进行时。'

    ],
    tags: ['序数词', 'have'],
    difficulty: 2,
  },
  {
    id: 32,
    title: 'The car race',
    titleCn: '汽车比赛',
    text: [
      'There is a car race near our town every year.',
      'In 1995, there was a very big race.',
      'There were hundreds of people there.',
      'My wife and I were at the race.',
      'Our friends Julie and Jack were there, too.',
      'You can see us in the crowd.',
      'We are standing on the left.'
    ],
    textCn: [
      '我们镇附近每年都有汽车比赛。',
      '在1995年，有一场非常大的比赛。',
      '那里有成百上千的人。',
      '我和妻子去看了比赛。',
      '我们的朋友朱莉和杰克也在那里。',
      '你可以在人群中看到我们。',
      '我们站在左边。'
    ],
    vocabulary: [
      { word: 'race', phonetic: '/reɪs/', meaning: '比赛' },
      { word: 'year', phonetic: '/jɪə/,jɜː/', meaning: '年' },
      { word: 'hundred', phonetic: '/ˈhʌndrəd/', meaning: '百' },
      { word: 'crowd', phonetic: '/kraʊd/', meaning: '人群' },
      { word: 'stand', phonetic: '/stænd/', meaning: '站立' }
    ],
    notes: [
      '一般过去时：was / were。',
      '"hundreds of" 数百的。',
      '"My wife and I" 先说别人后说自己。'

    ],
    tags: ['感官动词'],
    difficulty: 3,
  },
  {
    id: 33,
    title: 'The way to King Street',
    titleCn: '去国王街的路',
    text: [
      'Last week Mrs. Mills went to London.',
      'She does not know London very well, and she lost her way.',
      'Suddenly, she saw a man near a bus stop.',
      '"I can ask him the way," she said to herself.',
      '"Excuse me," she said. "Can you tell me the way to King Street, please?"',
      'The man smiled pleasantly.',
      'He did not understand English!'
    ],
    textCn: [
      '上周米尔斯夫人去了伦敦。',
      '她对伦敦不太熟悉，迷路了。',
      '突然，她在一个公共汽车站附近看见一个男人。',
      '"我可以向他问路，"她自言自语道。',
      '"对不起，"她说。"请问去国王街怎么走？"',
      '那个人愉快地笑了笑。',
      '他不懂英语！'
    ],
    vocabulary: [
      { word: 'way', phonetic: '/weɪ/', meaning: '路' },
      { word: 'lost', phonetic: '/lɒst/', meaning: '迷路（lose的过去式）' },
      { word: 'ask', phonetic: '/ɑːsk/', meaning: '问' },
      { word: 'pleasantly', phonetic: '/ˈplezntli/', meaning: '愉快地' },
      { word: 'understand', phonetic: '/ˌʌndəˈstænd/', meaning: '理解' }
    ],
    notes: [
      '"lost her way" 迷路。',
      '"ask sb the way" 向某人问路。',
      '"tell me the way to..." 告诉我怎么去...。'

    ],
    tags: ['must', '否定句'],
    difficulty: 2,
  },
  {
    id: 34,
    title: 'Uncomfortable shoes',
    titleCn: '不舒适的鞋子',
    text: [
      'Do you have any shoes like these?',
      'What size?',
      'Size five.',
      'What colour?',
      'Black.',
      'I\'m sorry. We don\'t have any.',
      'But my sister bought this pair last month.',
      'Did she buy them here?',
      'No, she bought them in the U.S.'
    ],
    textCn: [
      '你们有像这样的鞋子吗？',
      '几码的？',
      '5码。',
      '什么颜色？',
      '黑色的。',
      '抱歉，我们没有。',
      '但我姐姐上个月买了这双。',
      '她是在这里买的吗？',
      '不，她在美国买的。'
    ],
    vocabulary: [
      { word: 'pair', phonetic: '/peə/', meaning: '一双' },
      { word: 'bought', phonetic: '/bɔːt/', meaning: '买（buy的过去式）' }
    ],
    notes: [
      '一般过去时疑问句：Did she buy...?',
      '"this pair" 这双。',
      '"like these" 像这样的。'

    ],
    tags: ['反身代词', '介词', '时间'],
    difficulty: 2,
  },
  {
    id: 35,
    title: 'The English Channel',
    titleCn: '英吉利海峡',
    text: [
      'The English Channel separates England from France.',
      'It is about thirty-three miles wide at its narrowest point.',
      'Many people have swum across the English Channel.',
      'It usually takes them about twelve hours.'
    ],
    textCn: [
      '英吉利海峡把英国和法国隔开。',
      '在最窄处大约三十三英里宽。',
      '很多人已经游过了英吉利海峡。',
      '通常需要大约十二个小时。'
    ],
    vocabulary: [
      { word: 'channel', phonetic: '/ˈtʃænl/', meaning: '海峡' },
      { word: 'separate', phonetic: '/ˈsepəreɪt/', meaning: '分隔' },
      { word: 'mile', phonetic: '/maɪl/', meaning: '英里' },
      { word: 'wide', phonetic: '/waɪd/', meaning: '宽的' },
      { word: 'narrow', phonetic: '/ˈnærəʊ/', meaning: '窄的' },
      { word: 'swim', phonetic: '/swɪm/', meaning: '游泳' },
      { word: 'across', phonetic: '/əˈkrɒs/', meaning: '横穿' }
    ],
    notes: [
      '"separate...from..." 把...和...分开。',
      '现在完成时：have swum。',
      '"takes + 时间" 花费时间。'

    ],
    tags: ['一般过去时', '时态'],
    difficulty: 4,
  },
  {
    id: 36,
    title: 'Hurry up!',
    titleCn: '快点！',
    text: [
      'Hurry up! The bus is coming.',
      'I\'m coming now, Sally.',
      'What are you doing?',
      'I\'m putting on my coat.',
      'Look! The bus is coming!',
      'We must run!',
      'The bus is leaving!',
      'Oh no! We\'ve missed it!',
      'Don\'t worry! There\'s another bus in ten minutes.'
    ],
    textCn: [
      '快点！公共汽车来了。',
      '我马上就来，萨利。',
      '你在做什么？',
      '我在穿外套。',
      '看！公共汽车来了！',
      '我们必须跑过去！',
      '公共汽车要开走了！',
      '哦不！我们错过了！',
      '别担心！十分钟后来还有一班。'
    ],
    vocabulary: [
      { word: 'hurry', phonetic: '/ˈhʌri/', meaning: '赶快' },
      { word: 'bus', phonetic: '/bʌs/', meaning: '公共汽车' },
      { word: 'put on', phonetic: '/pʊt ɒn/', meaning: '穿上' },
      { word: 'run', phonetic: '/rʌn/', meaning: '跑' },
      { word: 'miss', phonetic: '/mɪs/', meaning: '错过' },
      { word: 'worry', phonetic: '/ˈwʌri/', meaning: '担心' },
      { word: 'another', phonetic: '/əˈnʌðə/', meaning: '另一个' }
    ],
    notes: [
      '"Hurry up!" 催促。',
      '"put on" 穿上（反义：take off）。',
      '"Don\'t worry!" 别担心！'

    ],
    tags: ['一般过去时', '时态'],
    difficulty: 4,
  },
  {
    id: 37,
    title: 'Come and help!',
    titleCn: '快来帮忙！',
    text: [
      'Come into the garden, Jane.',
      'I\'m coming, Mrs. Jones.',
      'What do you want?',
      'I want you to help me.',
      'Can you carry this vase?',
      'Yes, of course I can.'
    ],
    textCn: [
      '到花园里来，简。',
      '我来了，琼斯夫人。',
      '你要我做什么？',
      '我要你帮我。',
      '你能搬动这个花瓶吗？',
      '当然可以。'
    ],
    vocabulary: [
      { word: 'help', phonetic: '/help/', meaning: '帮助' },
      { word: 'want', phonetic: '/wɒnt/', meaning: '想要' },
      { word: 'carry', phonetic: '/ˈkæri/', meaning: '搬，拿' },
      { word: 'vase', phonetic: '/vɑːz/', meaning: '花瓶' },
      { word: 'can', phonetic: '/kæn/', meaning: '能够' },
      { word: 'of course', phonetic: '/əv kɔːs/', meaning: '当然' }
    ],
    notes: [
      '"want sb to do" 想要某人做某事。',
      '"Can you...?" 你能...吗？',
      '"Of course I can." 当然可以。'

    ],
    tags: ['一般过去时', '电话用语'],
    difficulty: 4,
  },
  {
    id: 38,
    title: 'Sally\'s first day',
    titleCn: '萨利的第一天',
    text: [
      'This is Sally\'s first day at school.',
      'Sally is six years old.',
      'She is in Class One, Grade One.',
      'There are thirty-five students in her class.'
    ],
    textCn: [
      '今天是萨利上学的第一天。',
      '萨利六岁了。',
      '她在一年级一班。',
      '她班上有三十五名学生。'
    ],
    vocabulary: [
      { word: 'school', phonetic: '/skuːl/', meaning: '学校' },
      { word: 'class', phonetic: '/klɑːs/', meaning: '班级' },
      { word: 'grade', phonetic: '/ɡreɪd/', meaning: '年级' }
    ],
    notes: [
      '"in Class One, Grade One" 在一年级一班。',
      '注意顺序：先班级后年级。'

    ],
    tags: ['副词', '组织句子'],
    difficulty: 2,
  },
  {
    id: 39,
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
      '"had ever been built" 过去完成时被动语态。',
      '"be regarded as" 被认为是。'

    ],
    tags: ['过去式', '形容词'],
    difficulty: 2,
  },
  {
    id: 40,
    title: 'Pardon?',
    titleCn: '请再说一遍？',
    text: [
      'I\'m a student from China. I\'m learning English.',
      'Do you understand English?',
      'A little. Do you speak English?',
      'Yes, I do. But I speak very slowly.',
      'Can you repeat that, please?',
      'Pardon?',
      'I said, can you repeat that?',
      'Oh, yes. Of course.'
    ],
    textCn: [
      '我是来自中国的学生。我在学英语。',
      '你懂英语吗？',
      '懂一点。你说英语吗？',
      '是的，但我说得很慢。',
      '你能再说一遍吗？',
      '请再说一遍？',
      '我说，你能再说一遍吗？',
      '哦，好的，当然可以。'
    ],
    vocabulary: [
      { word: 'student', phonetic: '/ˈstjuːdnt/', meaning: '学生' },
      { word: 'learn', phonetic: '/lɜːn/', meaning: '学习' },
      { word: 'understand', phonetic: '/ˌʌndəˈstænd/', meaning: '理解' },
      { word: 'speak', phonetic: '/spiːk/', meaning: '说' },
      { word: 'slowly', phonetic: '/ˈsləʊli/', meaning: '缓慢地' },
      { word: 'repeat', phonetic: '/rɪˈpiːt/', meaning: '重复' }
    ],
    notes: [
      '"A little." 懂一点。',
      '"Pardon?" / "I beg your pardon?" 请再说一遍。',
      '"Do you speak English?" 一般现在时询问能力。'

    ],
    tags: ['否定疑问句'],
    difficulty: 2,
  },
]

export default book1
