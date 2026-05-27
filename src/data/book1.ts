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
    summary: '本课学习用"Whose"询问物品所属，以及名词所有格的构成方式（\'s）。通过衬衫颜色的对话练习物主代词。',
    summaryEn: 'This lesson teaches "Whose" questions about possession and the possessive case (\'s) through a dialogue about shirt colors.',
    sentenceExplanations: [
      { sentence: 'Whose shirt is that?', translation: '那是谁的衬衫？', explanation: '"Whose"是疑问代词，询问物品所属。"Whose + 名词 + is that/this?"是常用句型。' },
      { sentence: 'Is this your shirt, Dave?', translation: '这是你的衬衫吗，戴夫？', explanation: '"Is this your...?"是一般疑问句，用于确认物品归属。Dave是呼语，用逗号隔开。' },
      { sentence: 'No, sir. It\'s not my shirt.', translation: '不，先生。这不是我的衬衫。', explanation: '"sir"是对男性的尊称。"my"是形容词性物主代词，修饰shirt。' },
      { sentence: 'This is my shirt. My shirt is blue.', translation: '这是我的衬衫。我的衬衫是蓝色的。', explanation: '重复"My shirt"起强调作用。颜色形容词放在be动词后面作表语。' },
      { sentence: 'Is this shirt Tim\'s?', translation: '这件衬衫是蒂姆的吗？', explanation: '"Tim\'s"是名词所有格，表示"蒂姆的"。在名词后加\'s表示所属关系。' },
      { sentence: 'Perhaps it is, sir.', translation: '也许是吧，先生。', explanation: '"perhaps"表示"也许"，比"maybe"更正式。"it is"是省略回答，完整形式是"it is Tim\'s"。' },
      { sentence: 'Here you are. Catch!', translation: '给你。接住！', explanation: '"Here you are"是递给对方东西时的常用语。"Catch!"是祈使句，叫对方接住。' }
    ],
    grammarSections: [
      { title: '名词所有格 \'s', content: '在单数名词后加\'s表示所属关系。如果名词已有s结尾，只加\'。这是英语中表示"谁的"的重要方式。', examples: [
        { en: 'Tim\'s shirt = the shirt of Tim', cn: '蒂姆的衬衫' },
        { en: 'Stella\'s handbag = the handbag of Stella', cn: '斯特拉的手提包' },
        { en: 'the teacher\'s book', cn: '老师的书' },
        { en: 'the boys\' room (复数)', cn: '男孩们的房间' }
      ] },
      { title: 'Whose 疑问句', content: '"Whose"用来询问物品所属，可以放在句首引导疑问句。回答时可以用名词所有格或物主代词。', examples: [
        { en: 'Whose shirt is that? — It\'s Tim\'s.', cn: '那是谁的衬衫？—蒂姆的。' },
        { en: 'Whose is this pen? — It\'s mine.', cn: '这是谁的笔？—我的。' },
        { en: 'Whose books are these? — They\'re ours.', cn: '这些是谁的书？—我们的。' }
      ] }
    ],
    patternDrills: [
      { pattern: 'Whose ___ is this/that? — It\'s ___.', substitutions: [
        { en: 'shirt / Tim\'s', cn: '衬衫 / 蒂姆的' },
        { en: 'pen / my sister\'s', cn: '笔 / 我姐姐的' },
        { en: 'car / my father\'s', cn: '车 / 我父亲的' },
        { en: 'book / the teacher\'s', cn: '书 / 老师的' }
      ] },
      { pattern: 'Is this your ___? — No, it\'s not my ___.', substitutions: [
        { en: 'shirt / shirt', cn: '衬衫 / 衬衫' },
        { en: 'pen / pen', cn: '笔 / 笔' },
        { en: 'coat / coat', cn: '大衣 / 大衣' },
        { en: 'umbrella / umbrella', cn: '雨伞 / 雨伞' }
      ] }
    ],
    exercises: [
      { type: 'choice', question: '_____ shirt is that? It\'s Tim\'s.', options: ['A. Who', 'B. Whose', 'C. What', 'D. Which'], answer: 'B', explanation: '"Whose"询问所属关系，表示"谁的"。' },
      { type: 'fill', question: 'This is _____ (Tom) book.', answer: 'Tom\'s', explanation: '名词所有格在名词后加\'s。' },
      { type: 'judge', question: '"Tim\'s shirt" 中的 \'s 表示缩写。', answer: '错误', explanation: '这里的\'s表示所有格，不是is的缩写。' },
      { type: 'choice', question: 'Here you _____. (给你)', options: ['A. is', 'B. am', 'C. are', 'D. be'], answer: 'C', explanation: '"Here you are"是固定搭配，主语是you用are。' }
    ],
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
    summary: '本课学习名词性物主代词（mine, yours, his, hers, ours, theirs）与形容词性物主代词的对比和互换。',
    summaryEn: 'This lesson teaches possessive pronouns (mine, yours, his, hers, ours, theirs) and their comparison with possessive adjectives.',
    sentenceExplanations: [
      { sentence: 'Whose is this handbag?', translation: '这是谁的手提包？', explanation: '"Whose is this...?"是询问物品所属的另一种形式，比"Whose handbag is this?"更简洁。' },
      { sentence: 'It\'s Stella\'s. It\'s her handbag.', translation: '是斯特拉的。是她的手提包。', explanation: '先用名词所有格Stella\'s回答，再用形容词性物主代词her来描述。两种方式都表示所属。' },
      { sentence: 'It\'s my pen. It\'s mine.', translation: '是我的笔。是我的。', explanation: '"my pen"和"mine"意思相同。"my"是形容词性物主代词（后跟名词），"mine"是名词性物主代词（独立使用）。' },
      { sentence: 'Whose are these books?', translation: '这些是谁的书？', explanation: '复数形式用"Whose are these...?"，回答用"They\'re..."。' },
      { sentence: 'They\'re our books. They\'re ours.', translation: '是我们的书。是我们的。', explanation: '"our books"= "ours"。名词性物主代词可以替代"形容词性物主代词+名词"。' },
      { sentence: 'They\'re their pencils. They\'re theirs.', translation: '是他们的铅笔。是他们的。', explanation: '"their"是形容词性物主代词，"theirs"是名词性物主代词。注意拼写：their → theirs。' }
    ],
    grammarSections: [
      { title: '名词性物主代词', content: '名词性物主代词可以独立使用，相当于"形容词性物主代词+名词"。它们在句中可以作主语、表语或宾语。', examples: [
        { en: 'my book → mine', cn: '我的书 → 我的' },
        { en: 'your pen → yours', cn: '你的笔 → 你的' },
        { en: 'his coat → his (不变)', cn: '他的大衣 → 他的' },
        { en: 'her handbag → hers', cn: '她的手提包 → 她的' },
        { en: 'our books → ours', cn: '我们的书 → 我们的' },
        { en: 'their pencils → theirs', cn: '他们的铅笔 → 他们的' }
      ] },
      { title: '形容词性 vs 名词性物主代词', content: '形容词性物主代词后面必须跟名词，名词性物主代词可以独立使用。两者意思相同，可以互换。', examples: [
        { en: 'This is my book. = This book is mine.', cn: '这是我的书。' },
        { en: 'That is her car. = That car is hers.', cn: '那是她的车。' },
        { en: 'These are our seats. = These seats are ours.', cn: '这些是我们的座位。' }
      ] }
    ],
    patternDrills: [
      { pattern: 'It\'s my ___. It\'s ___.', substitutions: [
        { en: 'pen / mine', cn: '笔 / 我的' },
        { en: 'book / mine', cn: '书 / 我的' },
        { en: 'car / mine', cn: '车 / 我的' },
        { en: 'coat / mine', cn: '大衣 / 我的' }
      ] },
      { pattern: 'They\'re our ___. They\'re ___.', substitutions: [
        { en: 'books / ours', cn: '书 / 我们的' },
        { en: 'seats / ours', cn: '座位 / 我们的' },
        { en: 'pens / ours', cn: '笔 / 我们的' },
        { en: 'bags / ours', cn: '包 / 我们的' }
      ] }
    ],
    exercises: [
      { type: 'choice', question: 'This pen is _____. (我的)', options: ['A. my', 'B. I', 'C. mine', 'D. me'], answer: 'C', explanation: '句末需要名词性物主代词mine，不能用形容词性my。' },
      { type: 'fill', question: 'This is her handbag. This handbag is _____.', answer: 'hers', explanation: 'her → hers，名词性物主代词。' },
      { type: 'judge', question: '"This book is my." 是正确的句子。', answer: '错误', explanation: '应该是"This book is mine."，句末用名词性物主代词。' },
      { type: 'choice', question: 'These are _____ coats. (他们的)', options: ['A. theirs', 'B. them', 'C. their', 'D. they'], answer: 'C', explanation: '后面有名词coats，用形容词性物主代词their。' }
    ],
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
    summary: '本课学习询问颜色的句型"What colour is...?"，以及颜色形容词和"the same colour"的表达。通过新连衣裙和帽子的对话展开。',
    summaryEn: 'This lesson teaches "What colour is...?" questions, color adjectives, and "the same colour" through a dialogue about a new dress and hat.',
    sentenceExplanations: [
      { sentence: 'What colour is your new dress?', translation: '你的新连衣裙是什么颜色的？', explanation: '"What colour is...?"用来询问颜色。"new"是形容词，放在名词dress前面作定语。' },
      { sentence: 'It\'s green.', translation: '它是绿色的。', explanation: '颜色形容词放在be动词后面作表语。green是基本颜色词之一。' },
      { sentence: 'Come upstairs and see it.', translation: '到楼上来看看吧。', explanation: '"Come upstairs"是祈使句，表示邀请。"and"连接两个动词，see是省略to的不定式。' },
      { sentence: 'Look! Here it is!', translation: '看！它在这儿！', explanation: '"Here it is"用来展示某物，比"Here you are"更随意。注意语序：副词here在句首，主语it在动词前。' },
      { sentence: 'That\'s a nice dress.', translation: '那是一件漂亮的连衣裙。', explanation: '"nice"表示"好的、漂亮的"，是常用的褒义形容词。' },
      { sentence: 'It\'s very smart.', translation: '它很时髦。', explanation: '"smart"在英式英语中表示"时髦的、漂亮的"，在美式英语中更多表示"聪明的"。' },
      { sentence: 'It\'s the same colour.', translation: '它是一样的颜色。', explanation: '"the same"表示"相同的"，后面跟名词。注意same前面通常加the。' }
    ],
    grammarSections: [
      { title: 'What colour 疑问句', content: '"What colour is/are...?"用来询问颜色。单数用is，复数用are。回答直接说出颜色。', examples: [
        { en: 'What colour is your dress? — It\'s green.', cn: '你的连衣裙是什么颜色？—绿色的。' },
        { en: 'What colour are your shoes? — They\'re black.', cn: '你的鞋是什么颜色？—黑色的。' },
        { en: 'What colour is the sky? — It\'s blue.', cn: '天空是什么颜色？—蓝色的。' }
      ] },
      { title: '祈使句', content: '祈使句以动词原形开头，用来表示命令、请求、邀请或建议。主语"you"通常省略。', examples: [
        { en: 'Come upstairs and see it.', cn: '到楼上来看看吧。（邀请）' },
        { en: 'Look! Here it is!', cn: '看！（引起注意）' },
        { en: 'Catch!', cn: '接住！（命令）' },
        { en: 'Please sit down.', cn: '请坐下。（请求）' }
      ] }
    ],
    patternDrills: [
      { pattern: 'What colour is your ___? — It\'s ___.', substitutions: [
        { en: 'dress / green', cn: '连衣裙 / 绿色' },
        { en: 'hat / red', cn: '帽子 / 红色' },
        { en: 'car / blue', cn: '车 / 蓝色' },
        { en: 'bag / black', cn: '包 / 黑色' }
      ] },
      { pattern: 'It\'s the same ___.', substitutions: [
        { en: 'colour', cn: '颜色' },
        { en: 'size', cn: '尺寸' },
        { en: 'kind', cn: '种类' },
        { en: 'type', cn: '类型' }
      ] }
    ],
    exercises: [
      { type: 'choice', question: 'What _____ is your new hat?', options: ['A. colour', 'B. colors', 'C. a colour', 'D. the colour'], answer: 'A', explanation: '"What colour"是固定搭配，colour不用复数，也不加冠词。' },
      { type: 'fill', question: 'Come _____ and see it. (到楼上)', answer: 'upstairs', explanation: '"upstairs"表示"到楼上"，是副词。' },
      { type: 'judge', question: '"Come upstairs and see it." 中的 and 连接两个动词。', answer: '正确', explanation: '"and"连接come和see两个动词，表示先后顺序。' },
      { type: 'choice', question: 'It\'s _____ same colour. (相同的)', options: ['A. a', 'B. an', 'C. the', 'D. /'], answer: 'C', explanation: '"the same"是固定搭配，same前面要加the。' }
    ],
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
    summary: '本课扩展颜色词汇，学习更多颜色的表达，以及复数形式下"What colour are...?"的用法。',
    summaryEn: 'This lesson expands color vocabulary with more colors and teaches "What colour are...?" for plural nouns.',
    sentenceExplanations: [
      { sentence: 'What colour is your new car?', translation: '你的新车是什么颜色的？', explanation: '单数形式"What colour is...?"，car是单数名词。' },
      { sentence: 'It\'s red.', translation: '它是红色的。', explanation: 'red是基本颜色词，也可以用dark red（深红）或light red（浅红）来更精确描述。' },
      { sentence: 'It\'s brown and white.', translation: '它是棕色和白色的。', explanation: '用"and"连接两种颜色，表示物品有两种颜色。' },
      { sentence: 'What colour are your shoes?', translation: '你的鞋是什么颜色的？', explanation: '"shoes"是复数名词，所以用"are"而不是"is"。英语中鞋子通常成双出现，用复数。' },
      { sentence: 'They\'re grey.', translation: '它们是灰色的。', explanation: '复数代词"They\'re"对应复数名词shoes。grey是英式拼写，gray是美式拼写。' },
      { sentence: 'What colour are your blouses?', translation: '你的衬衫是什么颜色的？', explanation: 'blouse是女式衬衫，复数加s。注意发音：/blaʊz/，s发/z/音。' }
    ],
    grammarSections: [
      { title: '颜色形容词', content: '英语中有丰富的颜色词汇。基本颜色词可以加上修饰语来表示深浅、明暗。', examples: [
        { en: 'red, blue, green, yellow, black, white', cn: '基本颜色' },
        { en: 'brown, grey, pink, orange, purple', cn: '其他常见颜色' },
        { en: 'dark blue / light blue', cn: '深蓝 / 浅蓝' },
        { en: 'dark green / light green', cn: '深绿 / 浅绿' }
      ] },
      { title: '单复数与be动词', content: '主语的单复数决定了be动词的形式。单数用is，复数用are。回答时也要保持一致。', examples: [
        { en: 'What colour is your car? — It\'s red.', cn: '单数' },
        { en: 'What colour are your shoes? — They\'re grey.', cn: '复数' },
        { en: 'What colour is the door? — It\'s brown.', cn: '单数' },
        { en: 'What colour are the flowers? — They\'re yellow.', cn: '复数' }
      ] }
    ],
    patternDrills: [
      { pattern: 'What colour is your ___? — It\'s ___.', substitutions: [
        { en: 'car / red', cn: '车 / 红色' },
        { en: 'umbrella / black', cn: '雨伞 / 黑色' },
        { en: 'dog / brown', cn: '狗 / 棕色' },
        { en: 'cat / white', cn: '猫 / 白色' }
      ] },
      { pattern: 'What colour are your ___? — They\'re ___.', substitutions: [
        { en: 'shoes / grey', cn: '鞋 / 灰色' },
        { en: 'blouses / yellow', cn: '衬衫 / 黄色' },
        { en: 'pens / blue', cn: '笔 / 蓝色' },
        { en: 'books / red', cn: '书 / 红色' }
      ] }
    ],
    exercises: [
      { type: 'choice', question: 'What colour _____ your shoes?', options: ['A. is', 'B. am', 'C. are', 'D. be'], answer: 'C', explanation: 'shoes是复数名词，用are。' },
      { type: 'fill', question: 'The dog is _____ and white. (棕色的)', answer: 'brown', explanation: 'brown表示棕色。' },
      { type: 'judge', question: '"What colour are your book?" 是正确的句子。', answer: '错误', explanation: 'book是单数，应该用"What colour is your book?"。' },
      { type: 'choice', question: 'My blouse is _____. (黄色的)', options: ['A. yellows', 'B. yellow', 'C. a yellow', 'D. the yellow'], answer: 'B', explanation: '颜色形容词直接放在be动词后面，不加冠词，不用复数。' }
    ],
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
    summary: '本课学习复数人称代词we/they的用法，以及在实际场景（如海关检查护照）中的对话。扩展北欧国籍词汇。',
    summaryEn: 'This lesson teaches plural pronouns we/they and practical dialogue in a customs scenario, with Nordic nationality vocabulary.',
    sentenceExplanations: [
      { sentence: 'Are you Swedish?', translation: '你们是瑞典人吗？', explanation: '"you"既可以指"你"也可以指"你们"，根据上下文判断。这里指多人，所以回答用"we"。' },
      { sentence: 'No, we are not. We are Danish.', translation: '不，我们不是。我们是丹麦人。', explanation: '"we"是第一人称复数主格代词。Danish是丹麦的国籍形容词。' },
      { sentence: 'Are your friends Danish, too?', translation: '你们的朋友也是丹麦人吗？', explanation: '"friends"是复数名词。"too"表示"也"，放在句末。' },
      { sentence: 'No, they aren\'t. They are Norwegian.', translation: '不，他们不是。他们是挪威人。', explanation: '"they"是第三人称复数代词。"aren\'t"是"are not"的缩写。Norwegian是挪威的国籍形容词。' },
      { sentence: 'Your passports, please.', translation: '请出示你们的护照。', explanation: '这是省略句，完整形式是"Show me your passports, please."。在海关、机场等场合常用。' },
      { sentence: 'Here they are.', translation: '给您。', explanation: '"Here they are"是复数形式的"Here you are"。"they"指代passports。' },
      { sentence: 'Are these your cases?', translation: '这些是你们的箱子吗？', explanation: '"these"是this的复数形式，指近处的多个物品。' },
      { sentence: 'Our cases are brown.', translation: '我们的箱子是棕色的。', explanation: '"our"是形容词性物主代词，修饰cases。颜色形容词brown作表语。' }
    ],
    grammarSections: [
      { title: '复数人称代词', content: '英语中第一、二、三人称都有复数形式。复数主格代词在句中作主语。', examples: [
        { en: 'we are → we\'re (我们是)', cn: '第一人称复数' },
        { en: 'you are → you\'re (你们是)', cn: '第二人称复数（同单数）' },
        { en: 'they are → they\'re (他们是)', cn: '第三人称复数' },
        { en: 'We are Danish. They are Norwegian.', cn: '复数代词+国籍' }
      ] },
      { title: '国籍形容词（北欧国家）', content: '北欧国家的国籍形容词构成方式不统一，需要特别记忆。', examples: [
        { en: 'Sweden → Swedish (瑞典的)', cn: '瑞典人/瑞典语也是Swedish' },
        { en: 'Denmark → Danish (丹麦的)', cn: '丹麦人/丹麦语也是Danish' },
        { en: 'Norway → Norwegian (挪威的)', cn: '挪威人/挪威语也是Norwegian' },
        { en: 'Finland → Finnish (芬兰的)', cn: '芬兰人/芬兰语也是Finnish' }
      ] }
    ],
    patternDrills: [
      { pattern: 'Are you ___? — Yes, we are. / No, we aren\'t.', substitutions: [
        { en: 'Swedish', cn: '瑞典人' },
        { en: 'Danish', cn: '丹麦人' },
        { en: 'tourists', cn: '游客' },
        { en: 'students', cn: '学生' }
      ] },
      { pattern: 'Are these your ___? — No, they aren\'t. Our ___ are ___.', substitutions: [
        { en: 'cases / cases / brown', cn: '箱子 / 箱子 / 棕色' },
        { en: 'bags / bags / black', cn: '包 / 包 / 黑色' },
        { en: 'passports / passports / blue', cn: '护照 / 护照 / 蓝色' },
        { en: 'tickets / tickets / red', cn: '票 / 票 / 红色' }
      ] }
    ],
    exercises: [
      { type: 'choice', question: '_____ are Danish. We are from Denmark.', options: ['A. We', 'B. You', 'C. They', 'D. He'], answer: 'A', explanation: '后面说"We are from Denmark"，说明前面也是we。' },
      { type: 'fill', question: 'They are _____. (挪威人)', answer: 'Norwegian', explanation: 'Norway → Norwegian。' },
      { type: 'judge', question: '"Here they are." 中的 they 指代复数物品。', answer: '正确', explanation: 'they指代前面提到的passports等复数物品。' },
      { type: 'choice', question: 'Your _____, please. (护照)', options: ['A. passport', 'B. passports', 'C. a passport', 'D. the passport'], answer: 'B', explanation: '"Your passports"用复数形式，因为说话对象是多人。' }
    ],
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
    summary: '本课复习一般疑问句"Are you...?"的用法，扩展国籍词汇（Russian, Dutch），并学习家庭成员称谓。',
    summaryEn: 'This lesson reviews "Are you...?" questions, expands nationality vocabulary (Russian, Dutch), and introduces family member terms.',
    sentenceExplanations: [
      { sentence: 'Are you Russian?', translation: '你是俄罗斯人吗？', explanation: '"Russian"是俄罗斯的国籍形容词。注意与"Russia"（俄罗斯国名）的区别。' },
      { sentence: 'No, I am not. I\'m Dutch.', translation: '不，我不是。我是荷兰人。', explanation: '"Dutch"是荷兰的国籍形容词。注意：荷兰的国名是Netherlands/Holland，但国籍是Dutch。' },
      { sentence: 'Are you tourists?', translation: '你们是游客吗？', explanation: '"tourist"是名词"游客"，复数加s。这里用复数因为问的是"你们"。' },
      { sentence: 'Are you American?', translation: '你们是美国人吗？', explanation: '"American"既是名词"美国人"也是形容词"美国的"。America → American。' },
      { sentence: 'Are these your keys?', translation: '这些是你的钥匙吗？', explanation: '"keys"是复数。"these"是this的复数形式，指近处的多个物品。' },
      { sentence: 'Is this your mother?', translation: '这是你妈妈吗？', explanation: '介绍或询问家人时用"Is this...?"。"mother"比"mum"更正式。' },
      { sentence: 'She\'s my aunt.', translation: '她是我的姑姑。', explanation: '"aunt"可以指姑姑、阿姨、婶婶、舅母等，统称" aunt"。uncle同理。' }
    ],
    grammarSections: [
      { title: '国籍形容词总结', content: '国籍形容词的构成方式不完全规则，需要记忆。常见后缀有-ish, -ese, -an等。', examples: [
        { en: 'Russian (俄罗斯的) — Russia + an', cn: '后缀-an' },
        { en: 'Dutch (荷兰的) — 不规则', cn: '需要特别记忆' },
        { en: 'American (美国的) — America + an', cn: '后缀-an' },
        { en: 'English (英国的) — 不规则', cn: '需要特别记忆' }
      ] },
      { title: '家庭成员称谓', content: '英语中家庭成员称谓有正式和非正式两种。正式场合用father/mother，日常用dad/mum。', examples: [
        { en: 'father (正式) / dad (非正式)', cn: '爸爸' },
        { en: 'mother (正式) / mum (非正式)', cn: '妈妈' },
        { en: 'uncle — 叔叔、伯伯、舅舅等', cn: '统称uncle' },
        { en: 'aunt — 阿姨、姑姑、婶婶等', cn: '统称aunt' }
      ] }
    ],
    patternDrills: [
      { pattern: 'Are you ___? — No, I\'m not. I\'m ___.', substitutions: [
        { en: 'Russian / Dutch', cn: '俄罗斯人 / 荷兰人' },
        { en: 'American / English', cn: '美国人 / 英国人' },
        { en: 'French / German', cn: '法国人 / 德国人' },
        { en: 'Japanese / Chinese', cn: '日本人 / 中国人' }
      ] },
      { pattern: 'Is this your ___? — No, she/he isn\'t. She\'s/He\'s my ___.', substitutions: [
        { en: 'mother / aunt', cn: '妈妈 / 姑姑' },
        { en: 'father / uncle', cn: '爸爸 / 叔叔' },
        { en: 'sister / cousin', cn: '姐妹 / 堂兄弟姐妹' },
        { en: 'brother / friend', cn: '兄弟 / 朋友' }
      ] }
    ],
    exercises: [
      { type: 'choice', question: 'I\'m _____. I\'m from the Netherlands.', options: ['A. Dutch', 'B. Danish', 'C. German', 'D. British'], answer: 'A', explanation: 'Netherlands（荷兰）的国籍形容词是Dutch。' },
      { type: 'fill', question: 'She\'s my _____. (姑姑)', answer: 'aunt', explanation: 'aunt统称姑姑、阿姨等女性长辈亲戚。' },
      { type: 'judge', question: '"Are you tourist?" 是正确的句子。', answer: '错误', explanation: '应该是"Are you a tourist?"或"Are you tourists?"，需要冠词或用复数。' },
      { type: 'choice', question: 'Are _____ your keys? Yes, they are.', options: ['A. this', 'B. that', 'C. these', 'D. it'], answer: 'C', explanation: '回答是"they are"，说明问的是复数，用these。' }
    ],
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
    summary: '本课学习正式问候语"How do you do?"，以及介绍他人的句型"This is..."。通过公司场景介绍员工和职业。',
    summaryEn: 'This lesson teaches the formal greeting "How do you do?" and introducing others with "This is..." in a company setting.',
    sentenceExplanations: [
      { sentence: 'Come and meet our employees, Mr. Richards.', translation: '来见见我们的员工，理查兹先生。', explanation: '"Come and meet"是祈使句，邀请对方来见面。"employees"是employee的复数。' },
      { sentence: 'This is Nicola Grey, and this is Claire Taylor.', translation: '这位是尼古拉·格雷，这位是克莱尔·泰勒。', explanation: '介绍他人时用"This is + 名字"。注意不用"He/She is..."。' },
      { sentence: 'How do you do?', translation: '你好！', explanation: '这是非常正式的问候语，通常用于初次见面。回答也是"How do you do?"。现在较少使用。' },
      { sentence: 'Those women are very hard-working.', translation: '那些女士工作非常努力。', explanation: '"those"是that的复数形式。"hard-working"是复合形容词，表示"勤奋的"。' },
      { sentence: 'They\'re keyboard operators.', translation: '她们是键盘操作员。', explanation: '复数主语They对应复数名词operators。' },
      { sentence: 'They\'re sales reps. They\'re very lazy.', translation: '他们是销售代表。他们非常懒。', explanation: '"sales rep"是"sales representative"的缩写。"lazy"是"hard-working"的反义词。' }
    ],
    grammarSections: [
      { title: '介绍他人的句型', content: '英语中介绍他人时用"This is..."，不用"He/She is..."。这是固定用法。', examples: [
        { en: 'This is my friend, Tom.', cn: '这是我的朋友汤姆。' },
        { en: 'This is Mr. Jackson.', cn: '这位是杰克逊先生。' },
        { en: 'This is Nicola Grey, and this is Claire Taylor.', cn: '介绍两人' },
        { en: 'Mum, this is my teacher, Mrs. Li.', cn: '非正式场合' }
      ] },
      { title: '指示代词 this/that/these/those', content: '指示代词分近指（this/these）和远指（that/those），以及单复数。', examples: [
        { en: 'this (这个) → these (这些)', cn: '近指' },
        { en: 'that (那个) → those (那些)', cn: '远指' },
        { en: 'This is a book. These are books.', cn: '单复数' },
        { en: 'That woman → Those women', cn: '远指单复数' }
      ] }
    ],
    patternDrills: [
      { pattern: 'This is ___, and this is ___.', substitutions: [
        { en: 'Nicola Grey / Claire Taylor', cn: '人名介绍' },
        { en: 'my friend Tom / his sister Jane', cn: '朋友和姐妹' },
        { en: 'Mr. Baker / Mrs. Short', cn: '先生和女士' },
        { en: 'our teacher / our doctor', cn: '老师和医生' }
      ] },
      { pattern: 'What are their jobs? — They\'re ___.', substitutions: [
        { en: 'keyboard operators', cn: '键盘操作员' },
        { en: 'sales reps', cn: '销售代表' },
        { en: 'office workers', cn: '办公室职员' },
        { en: 'taxi drivers', cn: '出租车司机' }
      ] }
    ],
    exercises: [
      { type: 'choice', question: '_____ is Mr. Jackson. He\'s our boss.', options: ['A. He', 'B. This', 'C. That', 'D. It'], answer: 'B', explanation: '介绍他人时用"This is..."，不用"He is..."。' },
      { type: 'fill', question: 'Those women are very _____. (勤奋的)', answer: 'hard-working', explanation: '"hard-working"是复合形容词，表示勤奋的。' },
      { type: 'judge', question: '"How do you do?" 的回答也是 "How do you do?"', answer: '正确', explanation: '这是固定用法，回答和问句一样。' },
      { type: 'choice', question: 'They\'re very _____. (懒惰的)', options: ['A. lazy', 'B. late', 'C. last', 'D. large'], answer: 'A', explanation: 'lazy是懒惰的，是hard-working的反义词。' }
    ],
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
    summary: '本课继续学习描述职业和人物特征，复习"Look at..."句型，扩展职业词汇（milkman, office worker）。',
    summaryEn: 'This lesson continues describing jobs and people with "Look at..." and expands occupation vocabulary.',
    sentenceExplanations: [
      { sentence: 'Look at that man. He\'s a postman.', translation: '看那个男人。他是邮递员。', explanation: '"Look at"引起注意，后接"that + 单数名词"。然后用"He\'s a..."描述职业。' },
      { sentence: 'Look at those people.', translation: '看那些人。', explanation: '"those"是that的复数形式。"people"本身就是复数名词（person的复数）。' },
      { sentence: 'What are their jobs?', translation: '他们是做什么工作的？', explanation: '复数形式的问句。"their"对应复数主语they。' },
      { sentence: 'Look at that milkman.', translation: '看那个送奶工。', explanation: '"milkman"由milk（牛奶）+man组成，指送牛奶的人。复数是milkmen。' },
      { sentence: 'Look at those office workers.', translation: '看那些办公室职员。', explanation: '"office worker"是复合名词，指在办公室工作的人。复数加在worker上。' },
      { sentence: 'They\'re very lazy.', translation: '他们很懒。', explanation: '"lazy"是形容词，描述性格特征。可以用very来加强程度。' }
    ],
    grammarSections: [
      { title: 'that/those 指示远近', content: '"that"指远处的单数事物，"those"指远处的复数事物。与"this/these"（近指）相对。', examples: [
        { en: 'Look at that man. (单数)', cn: '看那个男人。' },
        { en: 'Look at those people. (复数)', cn: '看那些人。' },
        { en: 'That is a car. Those are cars.', cn: '单复数对比' },
        { en: 'This is near. That is far.', cn: '近指和远指' }
      ] },
      { title: '复合名词的复数', content: '由两个词组成的复合名词，复数通常加在最后一个词上。', examples: [
        { en: 'milkman → milkmen (不规则)', cn: '送奶工' },
        { en: 'office worker → office workers', cn: '办公室职员' },
        { en: 'postman → postmen (不规则)', cn: '邮递员' },
        { en: 'sales rep → sales reps', cn: '销售代表' }
      ] }
    ],
    patternDrills: [
      { pattern: 'Look at that ___. He\'s/She\'s a ___.', substitutions: [
        { en: 'man / postman', cn: '男人 / 邮递员' },
        { en: 'woman / policewoman', cn: '女人 / 女警察' },
        { en: 'man / milkman', cn: '男人 / 送奶工' },
        { en: 'woman / nurse', cn: '女人 / 护士' }
      ] },
      { pattern: 'Look at those ___. They\'re very ___.', substitutions: [
        { en: 'people / hard-working', cn: '人们 / 勤奋的' },
        { en: 'office workers / busy', cn: '办公室职员 / 忙碌的' },
        { en: 'children / happy', cn: '孩子们 / 开心的' },
        { en: 'students / lazy', cn: '学生们 / 懒的' }
      ] }
    ],
    exercises: [
      { type: 'choice', question: 'Look at _____ people. They\'re very busy.', options: ['A. this', 'B. that', 'C. these', 'D. those'], answer: 'D', explanation: 'people是复数，且用those指远处的复数事物。' },
      { type: 'fill', question: 'He\'s a _____. He delivers milk. (送奶工)', answer: 'milkman', explanation: 'milkman = milk + man，送牛奶的人。' },
      { type: 'judge', question: '"People" 是 person 的复数形式。', answer: '正确', explanation: 'person → people，是不规则复数。' },
      { type: 'choice', question: 'What are _____ jobs? (他们的)', options: ['A. they', 'B. them', 'C. their', 'D. theirs'], answer: 'C', explanation: '后面有名词jobs，用形容词性物主代词their。' }
    ],
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
    summary: '本课学习询问状况的句型"What\'s the matter?"，以及"There\'s"表示存在的用法。通过孩子买冰淇淋的场景展开。',
    summaryEn: 'This lesson teaches "What\'s the matter?" for asking about problems and "There\'s" for existence, through a children\'s ice cream scene.',
    sentenceExplanations: [
      { sentence: 'What\'s the matter, children?', translation: '怎么了，孩子们？', explanation: '"What\'s the matter?"用来询问出了什么问题或怎么了。"children"是child的复数。' },
      { sentence: 'We\'re tired and thirsty, Mum.', translation: '我们累了，也渴了，妈妈。', explanation: '"tired"和"thirsty"用"and"连接，表示同时有两种状态。' },
      { sentence: 'Sit down here.', translation: '坐在这儿吧。', explanation: '祈使句。"sit down"是坐下，"here"是地点副词表示"在这儿"。' },
      { sentence: 'Are you all right now?', translation: '你们现在好些了吗？', explanation: '"all right"表示"好了、没问题"。"now"表示"现在"。' },
      { sentence: 'Look! There\'s an ice cream man.', translation: '看！那边有个卖冰淇淋的。', explanation: '"There\'s"是"There is"的缩写，表示存在。"an"因为ice以元音开头。' },
      { sentence: 'Two ice creams please.', translation: '请给我们两客冰淇淋。', explanation: '省略句，完整形式是"Give me two ice creams, please."。"ice cream"在这里可数化。' },
      { sentence: 'These ice creams are nice.', translation: '这些冰淇淋真好吃。', explanation: '"nice"表示好吃、好。"these"指手上的冰淇淋。' }
    ],
    grammarSections: [
      { title: 'What\'s the matter? 句型', content: '"What\'s the matter?"用来询问对方怎么了、出了什么问题。可以加"with + 人/物"来具体说明。', examples: [
        { en: 'What\'s the matter? — I\'m tired.', cn: '怎么了？—我累了。' },
        { en: 'What\'s the matter with you? — I\'m thirsty.', cn: '你怎么了？—我渴了。' },
        { en: 'What\'s the matter with the car? — It\'s broken.', cn: '车怎么了？—它坏了。' }
      ] },
      { title: 'There is 表示存在', content: '"There is/are..."表示某处存在某物。"There\'s"是"There is"的缩写。', examples: [
        { en: 'There\'s an ice cream man.', cn: '有个卖冰淇淋的。' },
        { en: 'There\'s a book on the table.', cn: '桌子上有一本书。' },
        { en: 'There are two cats in the garden.', cn: '花园里有两只猫。' },
        { en: 'There\'s a problem.', cn: '有个问题。' }
      ] }
    ],
    patternDrills: [
      { pattern: 'What\'s the matter? — I\'m ___ and ___.', substitutions: [
        { en: 'tired / thirsty', cn: '累 / 渴' },
        { en: 'hungry / tired', cn: '饿 / 累' },
        { en: 'cold / hungry', cn: '冷 / 饿' },
        { en: 'hot / thirsty', cn: '热 / 渴' }
      ] },
      { pattern: 'There\'s a/an ___.', substitutions: [
        { en: 'ice cream man', cn: '卖冰淇淋的' },
        { en: 'book on the table', cn: '桌子上的书' },
        { en: 'cat in the garden', cn: '花园里的猫' },
        { en: 'problem', cn: '问题' }
      ] }
    ],
    exercises: [
      { type: 'choice', question: 'What\'s the _____? I\'m tired.', options: ['A. wrong', 'B. matter', 'C. problem', 'D. thing'], answer: 'B', explanation: '"What\'s the matter?"是固定搭配。' },
      { type: 'fill', question: 'There\'s _____ ice cream man. (一个)', answer: 'an', explanation: 'ice以元音音素/aɪ/开头，用an。' },
      { type: 'judge', question: '"Two ice creams" 中 ice cream 用作可数名词。', answer: '正确', explanation: '在表示"两份冰淇淋"时，ice cream可以加s表示可数。' },
      { type: 'choice', question: 'We\'re tired _____ thirsty.', options: ['A. or', 'B. but', 'C. and', 'D. so'], answer: 'C', explanation: '"and"连接两个并列的状态，表示"又...又..."。' }
    ],
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
    summary: '本课学习询问尺寸的句型"What size...?"，以及描述衣物大小的形容词（small, large, funny）。',
    summaryEn: 'This lesson teaches "What size...?" questions and size adjectives (small, large, funny) for describing clothes.',
    sentenceExplanations: [
      { sentence: 'Look at those shoes!', translation: '看看那些鞋！', explanation: '"those"指远处的复数物品。"shoes"通常用复数，因为鞋子成双。' },
      { sentence: 'They\'re very small.', translation: '它们非常小。', explanation: '"small"是"large/big"的反义词，描述尺寸小。' },
      { sentence: 'What size are they?', translation: '它们是几码的？', explanation: '"What size...?"用来询问尺寸、尺码。回答直接说数字。' },
      { sentence: 'Size five.', translation: '5码。', explanation: '省略回答，完整形式是"They are size five."。' },
      { sentence: 'Look at those trousers!', translation: '看看那些裤子！', explanation: '"trousers"是复数名词（成对物品），没有单数形式。类似的还有scissors（剪刀）、glasses（眼镜）。' },
      { sentence: 'They\'re very large.', translation: '它们非常大。', explanation: '"large"和"big"意思相近，但"large"更正式一些。' },
      { sentence: 'They\'re very funny.', translation: '它们很滑稽。', explanation: '"funny"表示有趣的、滑稽的。注意与"fun"（乐趣）的区别。' }
    ],
    grammarSections: [
      { title: 'What size 疑问句', content: '"What size is/are...?"用来询问尺寸、尺码。回答直接说数字或"size + 数字"。', examples: [
        { en: 'What size are your shoes? — Size five.', cn: '你的鞋几码？—5码。' },
        { en: 'What size is your shirt? — Large.', cn: '你的衬衫多大号？—大号。' },
        { en: 'What size are those trousers? — Size eleven.', cn: '那些裤子几码？—11码。' }
      ] },
      { title: '成对物品名词（复数）', content: '英语中有些物品因为成对出现，通常用复数形式。这些名词没有单数形式，谓语用复数。', examples: [
        { en: 'trousers (裤子)', cn: '两条腿 → 复数' },
        { en: 'shoes (鞋子)', cn: '两只鞋 → 复数' },
        { en: 'scissors (剪刀)', cn: '两个刃 → 复数' },
        { en: 'glasses (眼镜)', cn: '两个镜片 → 复数' }
      ] }
    ],
    patternDrills: [
      { pattern: 'What size are they? — Size ___.', substitutions: [
        { en: 'five', cn: '5码' },
        { en: 'seven', cn: '7码' },
        { en: 'nine', cn: '9码' },
        { en: 'eleven', cn: '11码' }
      ] },
      { pattern: 'Look at those ___! They\'re very ___.', substitutions: [
        { en: 'shoes / small', cn: '鞋 / 小' },
        { en: 'trousers / large', cn: '裤子 / 大' },
        { en: 'hats / funny', cn: '帽子 / 滑稽' },
        { en: 'shirts / nice', cn: '衬衫 / 好看' }
      ] }
    ],
    exercises: [
      { type: 'choice', question: 'What _____ are your shoes?', options: ['A. colour', 'B. size', 'C. make', 'D. kind'], answer: 'B', explanation: '"What size"询问尺寸。' },
      { type: 'fill', question: 'These _____ are very large. (裤子)', answer: 'trousers', explanation: 'trousers是复数名词，没有单数形式。' },
      { type: 'judge', question: '"Trousers" 可以用单数形式 "trouser"。', answer: '错误', explanation: 'trousers没有单数形式，始终用复数。' },
      { type: 'choice', question: 'Look at those hats! They\'re very _____.', options: ['A. fun', 'B. funny', 'C. funs', 'D. funing'], answer: 'B', explanation: '"funny"是形容词"滑稽的"，"fun"是名词"乐趣"。' }
    ],
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
    summary: '本课学习用"which"进行选择的疑问句，以及祈使句"Give me..."的用法。代词"ones"代替前面提到的名词。',
    summaryEn: 'This lesson teaches "which" for selection questions, the imperative "Give me...", and the pronoun "ones" replacing previously mentioned nouns.',
    sentenceExplanations: [
      { sentence: 'Give me some glasses please, Mrs. Jones.', translation: '请给我一些杯子，琼斯夫人。', explanation: '"Give me..."是祈使句，表示请求。"some"用于肯定句中修饰可数名词复数。' },
      { sentence: 'Which glasses? These glasses?', translation: '哪些杯子？这些吗？', explanation: '"which"用于在有限的选择中询问"哪一个/哪些"。"these"指近处的。' },
      { sentence: 'No, not those. The ones on the shelf.', translation: '不，不是那些。架子上的那些。', explanation: '"ones"代替前面提到的glasses，避免重复。"on the shelf"是介词短语作后置定语。' },
      { sentence: 'These?', translation: '这些吗？', explanation: '省略问句，完整形式是"Are these the ones?"。口语中常用省略形式。' },
      { sentence: 'Yes, please.', translation: '是的，请给我。', explanation: '"Yes, please"是礼貌的肯定回答。比单独说"Yes"更客气。' },
      { sentence: 'Here you are.', translation: '给你。', explanation: '递给对方东西时的常用语。' }
    ],
    grammarSections: [
      { title: 'Which 疑问词', content: '"which"用于在有限的范围内选择"哪一个/哪些"。比"what"更具体，暗示有明确的选项。', examples: [
        { en: 'Which glasses? These or those?', cn: '哪些杯子？这些还是那些？' },
        { en: 'Which colour do you like? — I like blue.', cn: '你喜欢哪个颜色？—蓝色。' },
        { en: 'Which one is yours? — The red one.', cn: '哪一个是你的？—红色的那个。' }
      ] },
      { title: '代词 ones', content: '"ones"用来代替前面提到的复数可数名词，避免重复。单数用"one"。', examples: [
        { en: 'The glasses on the shelf. → The ones on the shelf.', cn: '架子上的杯子。' },
        { en: 'I like the blue shoes, not the red ones.', cn: '我喜欢蓝色的鞋，不是红色的。' },
        { en: 'This book is old. I need a new one.', cn: '这本书旧了。我需要一本新的。' }
      ] }
    ],
    patternDrills: [
      { pattern: 'Give me some ___, please.', substitutions: [
        { en: 'glasses', cn: '杯子' },
        { en: 'books', cn: '书' },
        { en: 'pencils', cn: '铅笔' },
        { en: 'cups', cn: '茶杯' }
      ] },
      { pattern: 'Which ___? These or those? — The ones ___.', substitutions: [
        { en: 'glasses / on the shelf', cn: '杯子 / 架子上' },
        { en: 'books / on the table', cn: '书 / 桌子上' },
        { en: 'shoes / in the box', cn: '鞋 / 盒子里' },
        { en: 'pens / in my bag', cn: '笔 / 我的包里' }
      ] }
    ],
    exercises: [
      { type: 'choice', question: '_____ glasses? These or those?', options: ['A. What', 'B. Which', 'C. Whose', 'D. Where'], answer: 'B', explanation: '"which"用于在有限选项中选择。' },
      { type: 'fill', question: 'The ones _____ the shelf. (在...上)', answer: 'on', explanation: '"on the shelf"表示在架子上。' },
      { type: 'judge', question: '"Give me some glasses" 是祈使句。', answer: '正确', explanation: '以动词原形Give开头，省略了主语you。' },
      { type: 'choice', question: 'I like the red shoes, not the blue _____.', options: ['A. one', 'B. ones', 'C. shoes', 'D. it'], answer: 'B', explanation: '复数名词shoes用ones代替。' }
    ],
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
    summary: '本课学习一系列祈使句（Come in, Shut, Open, Put, Make, Dust, Sweep），以及家务相关的动词和表达。',
    summaryEn: 'This lesson teaches a series of imperatives for household chores: Come in, Shut, Open, Put, Make, Dust, Sweep.',
    sentenceExplanations: [
      { sentence: 'Come in, Amy.', translation: '进来，艾米。', explanation: '"Come in"是祈使句，邀请对方进来。Amy是呼语，用逗号隔开。' },
      { sentence: 'Shut the door, please.', translation: '请关上门。', explanation: '"shut"和"close"意思相同，都表示关上。加"please"使语气更礼貌。' },
      { sentence: 'This bedroom is very untidy.', translation: '这卧室太不整洁了。', explanation: '"untidy"由否定前缀"un-"加"tidy"构成，表示不整洁的。' },
      { sentence: 'What must I do, Mrs. Jones?', translation: '我该做什么，琼斯夫人？', explanation: '"must"是情态动词，表示必须、应该。后面接动词原形。' },
      { sentence: 'Open the window and air the room.', translation: '打开窗户，给房间通通风。', explanation: '"air"在这里作动词，表示通风、使空气流通。' },
      { sentence: 'Then put these clothes in the wardrobe.', translation: '然后把这些衣服放进衣柜。', explanation: '"put...in..."表示把...放进...。"then"表示然后。' },
      { sentence: 'Then make the bed.', translation: '然后整理好床。', explanation: '"make the bed"是固定搭配，表示整理床铺，不是制造床。' },
      { sentence: 'Then sweep the floor.', translation: '然后扫地。', explanation: '"sweep"是扫，"floor"是地板。"sweep the floor"=扫地。' }
    ],
    grammarSections: [
      { title: '祈使句系列', content: '祈使句以动词原形开头，省略主语"you"。可以表示命令、请求、指示等。加"please"使语气更礼貌。', examples: [
        { en: 'Come in. / Come in, please.', cn: '进来。（请进。）' },
        { en: 'Shut the door. / Open the window.', cn: '关门。/ 开窗。' },
        { en: 'Put the clothes in the wardrobe.', cn: '把衣服放进衣柜。' },
        { en: 'Make the bed. Dust the table. Sweep the floor.', cn: '整理床。擦桌子。扫地。' }
      ] },
      { title: '否定前缀 un-', content: '在形容词前加"un-"表示否定、相反的意思。这是英语中常见的构词方式。', examples: [
        { en: 'tidy → untidy (不整洁的)', cn: '整洁 → 不整洁' },
        { en: 'happy → unhappy (不高兴的)', cn: '高兴 → 不高兴' },
        { en: 'lucky → unlucky (不幸的)', cn: '幸运 → 不幸' },
        { en: 'kind → unkind (不友善的)', cn: '友善 → 不友善' }
      ] }
    ],
    patternDrills: [
      { pattern: '___ the ___, please.', substitutions: [
        { en: 'Shut / door', cn: '关 / 门' },
        { en: 'Open / window', cn: '开 / 窗户' },
        { en: 'Dust / table', cn: '擦 / 桌子' },
        { en: 'Sweep / floor', cn: '扫 / 地' }
      ] },
      { pattern: 'Then put these ___ in the ___.', substitutions: [
        { en: 'clothes / wardrobe', cn: '衣服 / 衣柜' },
        { en: 'books / bookcase', cn: '书 / 书柜' },
        { en: 'plates / cupboard', cn: '盘子 / 碗柜' },
        { en: 'shoes / box', cn: '鞋 / 盒子' }
      ] }
    ],
    exercises: [
      { type: 'choice', question: '_____ the door, please.', options: ['A. Shutting', 'B. Shuts', 'C. Shut', 'D. To shut'], answer: 'C', explanation: '祈使句用动词原形。' },
      { type: 'fill', question: 'This room is very _____. (不整洁的)', answer: 'untidy', explanation: 'un-是否定前缀，tidy → untidy。' },
      { type: 'judge', question: '"make the bed" 的意思是"制造一张床"。', answer: '错误', explanation: '"make the bed"是固定搭配，意思是整理床铺。' },
      { type: 'choice', question: 'Put these clothes _____ the wardrobe.', options: ['A. on', 'B. in', 'C. at', 'D. to'], answer: 'B', explanation: '"put...in..."表示放进里面。' }
    ],
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
    summary: '本课学习"There is + 名词 + 地点"表示某处有某物的句型，以及方位介词短语（on the right/left, in the middle）。',
    summaryEn: 'This lesson teaches "There is + noun + place" for indicating existence and positional phrases (on the right/left, in the middle).',
    sentenceExplanations: [
      { sentence: 'Mrs. Smith\'s kitchen is small.', translation: '史密斯夫人的厨房很小。', explanation: '名词所有格\'s表示所属。"small"是"large"的反义词。' },
      { sentence: 'There is a refrigerator in the kitchen.', translation: '厨房里有一台冰箱。', explanation: '"There is + 名词 + 地点"是表示存在的基本句型。"in the kitchen"表示地点。' },
      { sentence: 'The refrigerator is white.', translation: '冰箱是白色的。', explanation: '用颜色形容词描述物品。' },
      { sentence: 'It is on the right.', translation: '它在右边。', explanation: '"on the right"表示在右边。"on the left"表示在左边。' },
      { sentence: 'There is an electric cooker in the kitchen.', translation: '厨房里有一个电炉。', explanation: '"electric"是形容词"电的"，修饰cooker。"an"因为electric以元音开头。' },
      { sentence: 'There is a table in the middle of the room.', translation: '房间中央有一张桌子。', explanation: '"in the middle of"表示在...的中间。' }
    ],
    grammarSections: [
      { title: 'There is 表示存在', content: '"There is + 单数名词 + 地点"表示某处有一个/某物。这是英语中表示存在的基本句型。', examples: [
        { en: 'There is a book on the desk.', cn: '桌子上有一本书。' },
        { en: 'There is a cat in the garden.', cn: '花园里有一只猫。' },
        { en: 'There is an apple on the table.', cn: '桌子上有一个苹果。' },
        { en: 'Is there a pen here? — Yes, there is.', cn: '这里有笔吗？—有。' }
      ] },
      { title: '方位介词短语', content: '英语中用介词短语来表示位置和方向。常见表达：', examples: [
        { en: 'on the right (在右边)', cn: '右侧' },
        { en: 'on the left (在左边)', cn: '左侧' },
        { en: 'in the middle of (在...中间)', cn: '中央' },
        { en: 'near the window (靠近窗户)', cn: '附近' }
      ] }
    ],
    patternDrills: [
      { pattern: 'There is a/an ___ in the ___.', substitutions: [
        { en: 'refrigerator / kitchen', cn: '冰箱 / 厨房' },
        { en: 'television / living room', cn: '电视 / 客厅' },
        { en: 'bed / bedroom', cn: '床 / 卧室' },
        { en: 'table / dining room', cn: '桌子 / 餐厅' }
      ] },
      { pattern: 'The ___ is on the ___.', substitutions: [
        { en: 'refrigerator / right', cn: '冰箱 / 右边' },
        { en: 'cooker / left', cn: '炉灶 / 左边' },
        { en: 'table / middle', cn: '桌子 / 中间' },
        { en: 'lamp / desk', cn: '台灯 / 桌子上' }
      ] }
    ],
    exercises: [
      { type: 'choice', question: 'There _____ a refrigerator in the kitchen.', options: ['A. are', 'B. is', 'C. am', 'D. be'], answer: 'B', explanation: 'refrigerator是单数，用There is。' },
      { type: 'fill', question: 'The table is _____ the middle of the room. (在...中)', answer: 'in', explanation: '"in the middle of"是固定搭配。' },
      { type: 'judge', question: '"There is an electric cooker" 中用 an 因为 electric 以元音开头。', answer: '正确', explanation: 'electric以元音音素/ɪ/开头，用an。' },
      { type: 'choice', question: 'The cooker is _____ the left.', options: ['A. in', 'B. on', 'C. at', 'D. to'], answer: 'B', explanation: '"on the left/right"是固定搭配。' }
    ],
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
    summary: '本课继续学习"There are + 复数名词"表示存在的用法，以及介词"near"表示靠近的位置关系。',
    summaryEn: 'This lesson continues with "There are + plural nouns" for existence and the preposition "near" for proximity.',
    sentenceExplanations: [
      { sentence: 'Mrs. Smith\'s living room is large.', translation: '史密斯夫人的客厅很大。', explanation: '"living room"是客厅。"large"是"small"的反义词。' },
      { sentence: 'There is a television in the room.', translation: '房间里有一台电视机。', explanation: '单数名词用"There is"。"television"可以缩写为TV。' },
      { sentence: 'The television is near the window.', translation: '电视机靠近窗户。', explanation: '"near"表示靠近、在...附近。' },
      { sentence: 'There are some magazines on the television.', translation: '电视机上面有一些杂志。', explanation: '复数名词用"There are"。"some"用于肯定句中修饰复数名词。' },
      { sentence: 'There are some newspapers on the table.', translation: '桌子上有一些报纸。', explanation: '"newspapers"是复数形式。"on the table"表示在桌子上。' }
    ],
    grammarSections: [
      { title: 'There are 表示存在（复数）', content: '"There are + 复数名词 + 地点"表示某处有多个某物。与"There is"的区别在于名词的单复数。', examples: [
        { en: 'There are some books on the table.', cn: '桌子上有一些书。' },
        { en: 'There are two cats in the garden.', cn: '花园里有两只猫。' },
        { en: 'Are there any pencils? — Yes, there are.', cn: '有铅笔吗？—有。' },
        { en: 'There aren\'t any magazines.', cn: '没有杂志。' }
      ] },
      { title: 'There is vs There are', content: '根据后面的名词决定用is还是are。单数/不可数名词用is，复数名词用are。', examples: [
        { en: 'There is a book. (单数)', cn: '有一本书。' },
        { en: 'There are some books. (复数)', cn: '有一些书。' },
        { en: 'There is some water. (不可数)', cn: '有一些水。' },
        { en: 'There is a book and two pens.', cn: '就近原则：第一个名词是单数用is' }
      ] }
    ],
    patternDrills: [
      { pattern: 'There are some ___ on the ___.', substitutions: [
        { en: 'magazines / television', cn: '杂志 / 电视' },
        { en: 'newspapers / table', cn: '报纸 / 桌子' },
        { en: 'books / shelf', cn: '书 / 架子' },
        { en: 'cups / desk', cn: '杯子 / 书桌' }
      ] },
      { pattern: 'The ___ is near the ___.', substitutions: [
        { en: 'television / window', cn: '电视 / 窗户' },
        { en: 'table / door', cn: '桌子 / 门' },
        { en: 'chair / desk', cn: '椅子 / 书桌' },
        { en: 'lamp / bed', cn: '台灯 / 床' }
      ] }
    ],
    exercises: [
      { type: 'choice', question: 'There _____ some magazines on the table.', options: ['A. is', 'B. are', 'C. am', 'D. be'], answer: 'B', explanation: 'magazines是复数，用There are。' },
      { type: 'fill', question: 'The television is _____ the window. (靠近)', answer: 'near', explanation: '"near"表示靠近、在...附近。' },
      { type: 'judge', question: '"There is some books" 是正确的句子。', answer: '错误', explanation: 'books是复数，应该用"There are some books"。' },
      { type: 'choice', question: 'There _____ a television in the room.', options: ['A. are', 'B. is', 'C. am', 'D. be'], answer: 'B', explanation: 'television是单数，用There is。' }
    ],
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
    summary: '本课学习"Where are...?"询问位置的句型，以及现在进行时"What are they doing?"的初步接触。',
    summaryEn: 'This lesson introduces "Where are...?" for location questions and the present continuous "What are they doing?"',
    sentenceExplanations: [
      { sentence: 'Where are the children?', translation: '孩子们在哪里？', explanation: '"Where are...?"用来询问人或物的位置。"children"是child的复数。' },
      { sentence: 'They are in the garden.', translation: '他们在花园里。', explanation: '"in the garden"表示在花园里。"garden"注意发音/ˈɡɑːdn/。' },
      { sentence: 'What are they doing?', translation: '他们在做什么？', explanation: '这是现在进行时的疑问句。"are doing"表示正在进行的动作。' },
      { sentence: 'They are climbing the tree.', translation: '他们在爬树。', explanation: '"climbing"是climb的现在分词形式。现在进行时：be + doing。' },
      { sentence: 'Come here!', translation: '过来！', explanation: '祈使句。"come here"表示过来。注意与"come in"（进来）的区别。' },
      { sentence: 'We\'re coming now!', translation: '我们马上就来！', explanation: '"coming"是come的现在分词。"now"在这里表示"马上、立刻"。' },
      { sentence: 'I\'m sorry, Mrs. Jones.', translation: '对不起，琼斯夫人。', explanation: '"I\'m sorry"是道歉的常用表达。' },
      { sentence: 'Are they in the garden now?', translation: '他们现在在花园里吗？', explanation: '一般疑问句，询问现在的位置。"now"强调现在的时间。' }
    ],
    grammarSections: [
      { title: 'Where 疑问句', content: '"Where is/are...?"用来询问人或物的位置。回答时用"in/on/at + 地点"。', examples: [
        { en: 'Where is the cat? — It\'s in the garden.', cn: '猫在哪里？—在花园里。' },
        { en: 'Where are the children? — They are in the kitchen.', cn: '孩子们在哪里？—在厨房里。' },
        { en: 'Where is my pen? — It\'s on the desk.', cn: '我的笔在哪里？—在书桌上。' }
      ] },
      { title: '现在进行时（初步）', content: '现在进行时表示正在进行的动作。结构：be动词 + 动词ing形式。本课初步接触。', examples: [
        { en: 'They are climbing the tree.', cn: '他们正在爬树。' },
        { en: 'He is reading a book.', cn: '他正在看书。' },
        { en: 'What are you doing? — I\'m cooking.', cn: '你在做什么？—我在做饭。' },
        { en: 'We\'re coming!', cn: '我们来了！' }
      ] }
    ],
    patternDrills: [
      { pattern: 'Where are the ___? — They are in the ___.', substitutions: [
        { en: 'children / garden', cn: '孩子们 / 花园' },
        { en: 'books / bedroom', cn: '书 / 卧室' },
        { en: 'keys / kitchen', cn: '钥匙 / 厨房' },
        { en: 'shoes / wardrobe', cn: '鞋 / 衣柜' }
      ] },
      { pattern: 'What are they doing? — They are ___-ing.', substitutions: [
        { en: 'climb', cn: '爬' },
        { en: 'read', cn: '读' },
        { en: 'play', cn: '玩' },
        { en: 'eat', cn: '吃' }
      ] }
    ],
    exercises: [
      { type: 'choice', question: '_____ are the children? They\'re in the garden.', options: ['A. What', 'B. Where', 'C. Who', 'D. How'], answer: 'B', explanation: '"Where"询问地点。' },
      { type: 'fill', question: 'They are _____ the tree. (爬)', answer: 'climbing', explanation: '现在进行时：be + climbing。' },
      { type: 'judge', question: '"They are climbing the tree" 是现在进行时。', answer: '正确', explanation: '结构：be动词(are) + 动词ing(climbing)。' },
      { type: 'choice', question: '_____ are they doing? They are playing.', options: ['A. Where', 'B. Who', 'C. What', 'D. How'], answer: 'C', explanation: '"What"询问做什么。' }
    ],
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
    summary: '本课系统总结There is/are的肯定句、疑问句和否定句用法，以及some和any的区别。',
    summaryEn: 'This lesson systematically summarizes There is/are in affirmative, interrogative, and negative forms, plus some vs any.',
    sentenceExplanations: [
      { sentence: 'There is a book on the desk.', translation: '书桌上有一本书。', explanation: '单数名词用"There is"。"a book"是单数。' },
      { sentence: 'There are some books on the desk.', translation: '书桌上有一些书。', explanation: '复数名词用"There are"。"some"用于肯定句中。' },
      { sentence: 'Is there a book on the desk?', translation: '书桌上有一本书吗？', explanation: '疑问句将is提前。肯定回答：Yes, there is.' },
      { sentence: 'Are there any books on the desk?', translation: '书桌上有一些书吗？', explanation: '疑问句用"any"代替"some"。肯定回答：Yes, there are.' }
    ],
    grammarSections: [
      { title: 'There is/are 完整总结', content: 'There is/are表示存在。单数/不可数用is，复数用are。疑问句将is/are提前，否定句加not。', examples: [
        { en: '肯定：There is a pen. / There are pens.', cn: '有一支笔。/ 有一些笔。' },
        { en: '疑问：Is there a pen? / Are there pens?', cn: '有笔吗？' },
        { en: '否定：There isn\'t a pen. / There aren\'t pens.', cn: '没有笔。' },
        { en: '简答：Yes, there is. / No, there aren\'t.', cn: '是的，有。/ 不，没有。' }
      ] },
      { title: 'some 和 any', content: '"some"用于肯定句，"any"用于疑问句和否定句。它们都修饰复数名词或不可数名词。', examples: [
        { en: 'There are some books. (肯定)', cn: '有一些书。' },
        { en: 'Are there any books? (疑问)', cn: '有书吗？' },
        { en: 'There aren\'t any books. (否定)', cn: '没有书。' },
        { en: 'Would you like some tea? (表请求的疑问句用some)', cn: '要来点茶吗？' }
      ] }
    ],
    patternDrills: [
      { pattern: 'Is there a ___ on/in the ___? — Yes, there is. / No, there isn\'t.', substitutions: [
        { en: 'book / desk', cn: '书 / 书桌' },
        { en: 'cat / garden', cn: '猫 / 花园' },
        { en: 'cup / table', cn: '杯子 / 桌子' },
        { en: 'lamp / bedroom', cn: '台灯 / 卧室' }
      ] },
      { pattern: 'Are there any ___ on/in the ___? — Yes, there are. / No, there aren\'t.', substitutions: [
        { en: 'books / shelf', cn: '书 / 架子' },
        { en: 'pencils / desk', cn: '铅笔 / 书桌' },
        { en: 'flowers / garden', cn: '花 / 花园' },
        { en: 'cars / street', cn: '车 / 街道' }
      ] }
    ],
    exercises: [
      { type: 'choice', question: 'There _____ some books on the desk.', options: ['A. is', 'B. are', 'C. am', 'D. be'], answer: 'B', explanation: 'books是复数，用There are。' },
      { type: 'fill', question: 'Is there _____ milk in the bottle? (一些)', answer: 'any', explanation: '疑问句用any，不用some。' },
      { type: 'judge', question: '"There are some water" 是正确的句子。', answer: '错误', explanation: 'water是不可数名词，应该用"There is some water"。' },
      { type: 'choice', question: 'There aren\'t _____ pencils on the desk.', options: ['A. some', 'B. any', 'C. a', 'D. the'], answer: 'B', explanation: '否定句用any。' }
    ],
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
    summary: '本课学习不可数名词的量词表达：a piece of, a loaf of, a bar of, a bottle of, a pound of等。',
    summaryEn: 'This lesson teaches quantifiers for uncountable nouns: a piece of, a loaf of, a bar of, a bottle of, a pound of.',
    sentenceExplanations: [
      { sentence: 'Is that bag heavy, Penny?', translation: '那个包重吗，彭妮？', explanation: '"heavy"是"light"的反义词。问句形式确认包的重量。' },
      { sentence: 'Not very.', translation: '不太重。', explanation: '省略回答，完整形式是"Not very heavy."。口语中常用省略。' },
      { sentence: 'Here! Put it on this chair.', translation: '给你！把它放在这把椅子上。', explanation: '"Here!"引起注意。"put...on..."表示把...放在...上面。' },
      { sentence: 'What\'s in it?', translation: '里面有什么？', explanation: '"What\'s in it?"询问包里有什么。"in"表示在...里面。' },
      { sentence: 'A piece of cheese.', translation: '一块奶酪。', explanation: '"a piece of"是最通用的量词，用于不可数名词表示"一块/一片"。' },
      { sentence: 'A loaf of bread.', translation: '一条面包。', explanation: '"a loaf of"专门用于面包，表示一整条。复数：two loaves of bread。' },
      { sentence: 'A bar of chocolate.', translation: '一块巧克力。', explanation: '"a bar of"用于长条形物品：chocolate（巧克力）、soap（肥皂）。' },
      { sentence: 'A bottle of milk.', translation: '一瓶牛奶。', explanation: '"a bottle of"用于瓶装液体。类似：a glass of water（一杯水）。' },
      { sentence: 'A pound of sugar.', translation: '一磅糖。', explanation: '"a pound of"是重量单位量词。1磅≈0.45公斤。' }
    ],
    grammarSections: [
      { title: '不可数名词的量词', content: '不可数名词（如bread, cheese, milk, sugar）不能直接用数词修饰，需要借助量词。量词的选择取决于物品的形状和容器。', examples: [
        { en: 'a piece of cheese/cake/bread', cn: '一块（通用量词）' },
        { en: 'a loaf of bread', cn: '一条（面包专用）' },
        { en: 'a bar of chocolate/soap', cn: '一块/一条（长条形）' },
        { en: 'a bottle of milk/water/wine', cn: '一瓶（瓶装液体）' },
        { en: 'a pound of sugar/coffee', cn: '一磅（重量单位）' },
        { en: 'a glass of water/juice', cn: '一杯（杯装液体）' }
      ] },
      { title: '可数与不可数名词', content: '英语中名词分可数和不可数。可数名词有复数形式，不可数名词没有复数形式。', examples: [
        { en: '可数：book → books, pen → pens', cn: '有复数形式' },
        { en: '不可数：bread, water, sugar, milk', cn: '没有复数形式' },
        { en: '不可数：cheese, soap, coffee, tea', cn: '没有复数形式' },
        { en: '不可数名词用量词表示数量：a cup of tea', cn: '用量词' }
      ] }
    ],
    patternDrills: [
      { pattern: 'a ___ of ___', substitutions: [
        { en: 'piece / cheese', cn: '一块 / 奶酪' },
        { en: 'loaf / bread', cn: '一条 / 面包' },
        { en: 'bar / chocolate', cn: '一块 / 巧克力' },
        { en: 'bottle / milk', cn: '一瓶 / 牛奶' }
      ] },
      { pattern: 'What\'s in the bag? — A ___ of ___.', substitutions: [
        { en: 'pound / sugar', cn: '一磅 / 糖' },
        { en: 'piece / cake', cn: '一块 / 蛋糕' },
        { en: 'bottle / water', cn: '一瓶 / 水' },
        { en: 'bar / soap', cn: '一块 / 肥皂' }
      ] }
    ],
    exercises: [
      { type: 'choice', question: 'I\'d like _____ of bread, please.', options: ['A. a piece', 'B. a loaf', 'C. a bar', 'D. a bottle'], answer: 'B', explanation: '"a loaf of bread"是一条面包。' },
      { type: 'fill', question: 'She bought a _____ of chocolate. (一块)', answer: 'bar', explanation: '"a bar of chocolate"是一块/一条巧克力。' },
      { type: 'judge', question: '"A piece of" 可以用于任何不可数名词。', answer: '正确', explanation: '"a piece of"是通用量词，可以用于大多数不可数名词。' },
      { type: 'choice', question: 'There is a _____ of milk on the table.', options: ['A. piece', 'B. loaf', 'C. bar', 'D. bottle'], answer: 'D', explanation: 'milk是液体，用bottle。' }
    ],
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
    summary: '本课学习现在进行时的完整用法，描述正在进行的动作。通过一家人过桥的场景展开，包含天气和方位描述。',
    summaryEn: 'This lesson teaches the present continuous tense for ongoing actions, through a family crossing a bridge scene.',
    sentenceExplanations: [
      { sentence: 'It is a fine day today.', translation: '今天是个好天气。', explanation: '"It"指天气。"fine day"是好天气。' },
      { sentence: 'There are some clouds in the sky, but the sun is shining.', translation: '天空中有一些云，但太阳在照耀。', explanation: '"but"表示转折。"is shining"是现在进行时，表示正在照耀。' },
      { sentence: 'They are walking over the bridge.', translation: '他们正在过桥。', explanation: '"over"表示越过、穿过。"are walking"是现在进行时。' },
      { sentence: 'There are some boats on the river.', translation: '河上有几条船。', explanation: '"on the river"表示在河面上。' },
      { sentence: 'Mr. Jones and his wife are looking at them.', translation: '琼斯先生和他的妻子在看船。', explanation: '"are looking at"是现在进行时。"them"指代boats。' },
      { sentence: 'The ship is going under the bridge.', translation: '那艘船正从桥下经过。', explanation: '"under"表示在...下面。"is going"表示正在行进。' }
    ],
    grammarSections: [
      { title: '现在进行时', content: '现在进行时表示正在进行或发生的动作。结构：主语 + be动词(am/is/are) + 动词ing形式。', examples: [
        { en: 'I am reading a book.', cn: '我正在看书。' },
        { en: 'He is walking over the bridge.', cn: '他正在过桥。' },
        { en: 'They are looking at the boats.', cn: '他们正在看船。' },
        { en: 'The sun is shining.', cn: '太阳正在照耀。' }
      ] },
      { title: '动词ing的构成', content: '动词加ing的规则：一般加ing；以不发音e结尾去e加ing；重读闭音节双写末字母加ing。', examples: [
        { en: 'walk → walking', cn: '一般加ing' },
        { en: 'make → making', cn: '去e加ing' },
        { en: 'shine → shining', cn: '去e加ing' },
        { en: 'run → running', cn: '双写加ing' },
        { en: 'sit → sitting', cn: '双写加ing' }
      ] }
    ],
    patternDrills: [
      { pattern: '___ is ___-ing.', substitutions: [
        { en: 'The sun / shine', cn: '太阳 / 照耀' },
        { en: 'Mr. Jones / walk', cn: '琼斯先生 / 走' },
        { en: 'Sally / look', cn: '萨利 / 看' },
        { en: 'The ship / go', cn: '船 / 走' }
      ] },
      { pattern: 'They are ___-ing over/under the ___.', substitutions: [
        { en: 'walk / bridge', cn: '走 / 桥' },
        { en: 'go / bridge', cn: '经过 / 桥' },
        { en: 'fly / bridge', cn: '飞 / 桥' },
        { en: 'sail / bridge', cn: '航行 / 桥' }
      ] }
    ],
    exercises: [
      { type: 'choice', question: 'The sun _____ shining.', options: ['A. am', 'B. is', 'C. are', 'D. be'], answer: 'B', explanation: 'The sun是第三人称单数，用is。' },
      { type: 'fill', question: 'They are _____ over the bridge. (走)', answer: 'walking', explanation: 'walk → walking，现在进行时。' },
      { type: 'judge', question: '"The ship is going under the bridge" 中 under 表示在桥下面。', answer: '正确', explanation: '"under"表示在...下面。' },
      { type: 'choice', question: 'There are some clouds _____ the sky.', options: ['A. on', 'B. in', 'C. at', 'D. to'], answer: 'B', explanation: '"in the sky"表示在天空中。' }
    ],
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
    summary: '本课学习询问天气的句型"What\'s the weather like...?"，以及四季和对应的天气形容词。',
    summaryEn: 'This lesson teaches "What\'s the weather like...?" for weather questions, with four seasons and weather adjectives.',
    sentenceExplanations: [
      { sentence: 'What\'s the weather like in spring?', translation: '春天天气怎么样？', explanation: '"What\'s the weather like...?"是询问天气的标准句型。"like"在这里是介词，表示"像...一样"。' },
      { sentence: 'It\'s warm in spring.', translation: '春天很暖和。', explanation: '"warm"表示温暖的。季节前用"in"：in spring/summer/autumn/winter。' },
      { sentence: 'It\'s hot in summer.', translation: '夏天很热。', explanation: '"hot"是"cold"的反义词。' },
      { sentence: 'It\'s cool in autumn.', translation: '秋天很凉爽。', explanation: '"cool"表示凉爽的，比cold程度轻。' },
      { sentence: 'It\'s cold in winter.', translation: '冬天很冷。', explanation: '"cold"是"hot"的反义词。' }
    ],
    grammarSections: [
      { title: 'What\'s the weather like?', content: '询问天气的两种方式："What\'s the weather like?"和"How\'s the weather?"。回答用"It\'s + 天气形容词"。', examples: [
        { en: 'What\'s the weather like today? — It\'s sunny.', cn: '今天天气怎样？—晴天。' },
        { en: 'How\'s the weather? — It\'s rainy.', cn: '天气怎样？—下雨。' },
        { en: 'What\'s the weather like in Beijing? — It\'s cold.', cn: '北京天气怎样？—冷。' }
      ] },
      { title: '四季表达', content: '四季前用介词"in"。四季的拼写和发音需要注意。', examples: [
        { en: 'in spring (春天)', cn: '/sprɪŋ/' },
        { en: 'in summer (夏天)', cn: '/ˈsʌmə/' },
        { en: 'in autumn (秋天)', cn: '/ˈɔːtəm/ — 美式英语用fall' },
        { en: 'in winter (冬天)', cn: '/ˈwɪntə/' }
      ] }
    ],
    patternDrills: [
      { pattern: 'What\'s the weather like in ___? — It\'s ___.', substitutions: [
        { en: 'spring / warm', cn: '春天 / 暖和' },
        { en: 'summer / hot', cn: '夏天 / 热' },
        { en: 'autumn / cool', cn: '秋天 / 凉爽' },
        { en: 'winter / cold', cn: '冬天 / 冷' }
      ] },
      { pattern: 'It\'s ___ in ___.', substitutions: [
        { en: 'sunny / summer', cn: '晴朗 / 夏天' },
        { en: 'cloudy / autumn', cn: '多云 / 秋天' },
        { en: 'rainy / spring', cn: '下雨 / 春天' },
        { en: 'snowy / winter', cn: '下雪 / 冬天' }
      ] }
    ],
    exercises: [
      { type: 'choice', question: 'What\'s the weather _____ in summer?', options: ['A. as', 'B. like', 'C. for', 'D. about'], answer: 'B', explanation: '"What\'s the weather like...?"是固定句型。' },
      { type: 'fill', question: 'It\'s cold _____ winter. (在)', answer: 'in', explanation: '季节前用"in"。' },
      { type: 'judge', question: '"autumn" 在美式英语中也可以说 "fall"。', answer: '正确', explanation: '英式用autumn，美式用fall。' },
      { type: 'choice', question: 'It\'s _____ in spring. (温暖的)', options: ['A. warm', 'B. hot', 'C. cool', 'D. cold'], answer: 'A', explanation: '春天是温暖的warm。' }
    ],
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
    summary: '本课学习一般现在时表示习惯性动作的用法，以及频率副词（always, usually, sometimes, never）的位置。',
    summaryEn: 'This lesson teaches the simple present for habitual actions and the position of frequency adverbs.',
    sentenceExplanations: [
      { sentence: 'The Sawyers live at 87 King Street.', translation: '索耶一家住在国王街87号。', explanation: '"The Sawyers"用姓氏复数表示一家人。"live at + 地址"表示住在某地址。' },
      { sentence: 'In the morning, Mr. Sawyer goes to work and the children go to school.', translation: '早上，索耶先生去上班，孩子们去上学。', explanation: '"goes to work"第三人称单数加s。"go to school"是去上学。' },
      { sentence: 'Mrs. Sawyer stays at home every day.', translation: '索耶夫人每天待在家里。', explanation: '"stay at home"是待在家里。"every day"表示每天，用于一般现在时。' },
      { sentence: 'She does the housework.', translation: '她做家务。', explanation: '"do the housework"是做家务。第三人称单数用does。' },
      { sentence: 'She always eats her lunch at noon.', translation: '她总是在中午吃午饭。', explanation: '"always"是频率副词，放在行为动词前。"at noon"在中午。' },
      { sentence: 'In the afternoon, she usually sees her friends.', translation: '下午，她通常去看望朋友。', explanation: '"usually"是频率副词。"see her friends"看望朋友。' }
    ],
    grammarSections: [
      { title: '一般现在时（习惯性动作）', content: '一般现在时表示经常性、习惯性的动作或客观事实。第三人称单数(he/she/it)动词加s/es。', examples: [
        { en: 'I/You/We/They go to school.', cn: '第一、二、三人称复数：动词原形' },
        { en: 'He/She goes to work.', cn: '第三人称单数：动词加s' },
        { en: 'She does the housework.', cn: 'do → does (第三人称单数)' },
        { en: 'He watches TV every day.', cn: 'watch → watches (加es)' }
      ] },
      { title: '频率副词的位置', content: '频率副词表示动作发生的频率。它们通常放在行为动词前面，be动词后面。', examples: [
        { en: 'She always eats lunch at noon.', cn: 'always放在行为动词eats前' },
        { en: 'He usually goes to work.', cn: 'usually放在行为动词goes前' },
        { en: 'She is always late.', cn: 'always放在be动词is后' },
        { en: '频率排序：always > usually > sometimes > never', cn: '从高到低' }
      ] }
    ],
    patternDrills: [
      { pattern: 'He/She ___-s every day.', substitutions: [
        { en: 'go to work', cn: '去上班' },
        { en: 'eat lunch', cn: '吃午饭' },
        { en: 'see friends', cn: '看望朋友' },
        { en: 'do housework', cn: '做家务' }
      ] },
      { pattern: 'She always/usually ___-s at ___.', substitutions: [
        { en: 'eat / noon', cn: '吃 / 中午' },
        { en: 'drink tea / afternoon', cn: '喝茶 / 下午' },
        { en: 'go to bed / night', cn: '睡觉 / 晚上' },
        { en: 'get up / morning', cn: '起床 / 早上' }
      ] }
    ],
    exercises: [
      { type: 'choice', question: 'Mr. Sawyer _____ to work every day.', options: ['A. go', 'B. goes', 'C. going', 'D. went'], answer: 'B', explanation: '第三人称单数用goes。' },
      { type: 'fill', question: 'She _____ the housework. (做)', answer: 'does', explanation: 'do → does (第三人称单数)。' },
      { type: 'judge', question: '"She always eats" 中 always 放在 eats 前面。', answer: '正确', explanation: '频率副词放在行为动词前面。' },
      { type: 'choice', question: 'The Sawyers _____ at 87 King Street.', options: ['A. lives', 'B. live', 'C. living', 'D. lived'], answer: 'B', explanation: 'The Sawyers是复数主语，用动词原形live。' }
    ],
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
    summary: '本课对比一般现在时（习惯）和现在进行时（此刻），通过"不寻常的一天"展示两种时态在同一场景中的交替使用。',
    summaryEn: 'This lesson contrasts simple present (habit) with present continuous (now), showing both tenses in an "unusual day" scenario.',
    sentenceExplanations: [
      { sentence: 'It is eight o\'clock.', translation: '现在八点钟。', explanation: '"It"指时间。"o\'clock"表示整点。' },
      { sentence: 'The children go to school by car every day, but today, they are going to school on foot.', translation: '孩子们每天坐车上学，但今天他们步行上学。', explanation: '"go"是一般现在时表示习惯。"are going"是现在进行时表示今天正在发生的事。' },
      { sentence: 'Mrs. Sawyer usually stays at home in the morning, but this morning, she is going to the shops.', translation: '索耶夫人通常上午待在家里，但今天上午她要去商店。', explanation: '"usually stays"一般现在时。"is going"现在进行时。"this morning"暗示今天。' },
      { sentence: 'Mrs. Sawyer usually drinks tea in the living room, but this afternoon, she is drinking tea in the garden.', translation: '索耶夫人通常在客厅喝茶，但今天下午她在花园里喝茶。', explanation: '两种时态对比：usually drinks（习惯）vs is drinking（今天）。' }
    ],
    grammarSections: [
      { title: '一般现在时 vs 现在进行时', content: '一般现在时表示习惯性、经常性的动作。现在进行时表示此刻正在进行或当前阶段正在做的事。', examples: [
        { en: 'He goes to work every day. (习惯)', cn: '他每天去上班。' },
        { en: 'He is going to work now. (此刻)', cn: '他现在正在去上班。' },
        { en: 'She drinks tea in the afternoon. (习惯)', cn: '她下午喝茶。' },
        { en: 'She is drinking tea now. (此刻)', cn: '她正在喝茶。' }
      ] },
      { title: '交通方式表达', content: '"by + 交通工具"表示乘坐某种交通工具。"on foot"表示步行。', examples: [
        { en: 'by car (坐车)', cn: 'by + 交通工具' },
        { en: 'by bus (坐公交车)', cn: 'by + 交通工具' },
        { en: 'by bike (骑自行车)', cn: 'by + 交通工具' },
        { en: 'on foot (步行)', cn: '固定搭配' }
      ] }
    ],
    patternDrills: [
      { pattern: 'He/She usually ___-s, but today he/she is ___-ing.', substitutions: [
        { en: 'go to work / walk', cn: '去上班 / 步行' },
        { en: 'stay at home / go shopping', cn: '待在家 / 去购物' },
        { en: 'drink tea / drink coffee', cn: '喝茶 / 喝咖啡' },
        { en: 'read in the room / read in the garden', cn: '在房间看书 / 在花园看书' }
      ] },
      { pattern: 'I go to school by ___.', substitutions: [
        { en: 'car', cn: '车' },
        { en: 'bus', cn: '公交车' },
        { en: 'bike', cn: '自行车' },
        { en: 'train', cn: '火车' }
      ] }
    ],
    exercises: [
      { type: 'choice', question: 'The children go to school by car every day, but today they _____ going on foot.', options: ['A. is', 'B. are', 'C. am', 'D. do'], answer: 'B', explanation: 'they用are，现在进行时表示今天。' },
      { type: 'fill', question: 'She goes to school _____ foot. (步行)', answer: 'on', explanation: '"on foot"是固定搭配，表示步行。' },
      { type: 'judge', question: '"She usually drinks tea" 是现在进行时。', answer: '错误', explanation: '"usually"表示习惯，是一般现在时。' },
      { type: 'choice', question: 'Mrs. Sawyer _____ at home every day.', options: ['A. stay', 'B. stays', 'C. staying', 'D. stayed'], answer: 'B', explanation: '第三人称单数加s。' }
    ],
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
    summary: '本课学习一般过去时was/were的用法，以及"hundreds of"表示数量的表达。通过汽车比赛的场景展开。',
    summaryEn: 'This lesson introduces the past tense was/were and "hundreds of" for quantity, through a car race scenario.',
    sentenceExplanations: [
      { sentence: 'There is a car race near our town every year.', translation: '我们镇附近每年都有汽车比赛。', explanation: '"every year"表示每年，一般现在时。' },
      { sentence: 'In 1995, there was a very big race.', translation: '在1995年，有一场非常大的比赛。', explanation: '"In 1995"表示过去时间，用was。"there was"是"There is"的过去式。' },
      { sentence: 'There were hundreds of people there.', translation: '那里有成百上千的人。', explanation: '"were"是"are"的过去式。"hundreds of"表示成百上千的。' },
      { sentence: 'My wife and I were at the race.', translation: '我和妻子去看了比赛。', explanation: '"My wife and I"是复数主语，用were。先说别人后说自己是礼貌用法。' },
      { sentence: 'You can see us in the crowd.', translation: '你可以在人群中看到我们。', explanation: '"can"是情态动词，表示能够。"us"是we的宾格。' },
      { sentence: 'We are standing on the left.', translation: '我们站在左边。', explanation: '现在进行时描述照片中的动作。' }
    ],
    grammarSections: [
      { title: '一般过去时 was/were', content: 'was是am/is的过去式，were是are的过去式。用于表示过去的状态或事实。', examples: [
        { en: 'I was at home yesterday. (我昨天在家)', cn: '第一人称单数' },
        { en: 'He was a student. (他曾是学生)', cn: '第三人称单数' },
        { en: 'We were at the race. (我们在比赛现场)', cn: '复数' },
        { en: 'They were happy. (他们很高兴)', cn: '复数' }
      ] },
      { title: 'hundreds of 数量表达', content: '用"hundreds/thousands/millions of + 复数名词"表示不确定的大数量。注意hundred后加s。', examples: [
        { en: 'hundreds of people (数百人)', cn: '不确定的数量' },
        { en: 'thousands of books (数千本书)', cn: '不确定的数量' },
        { en: '但：two hundred people (两百人)', cn: '具体数字不加s' }
      ] }
    ],
    patternDrills: [
      { pattern: 'There was/were ___ at/in ___.', substitutions: [
        { en: 'a big race / 1995', cn: '一场大比赛 / 1995年' },
        { en: 'hundreds of people / the crowd', cn: '数百人 / 人群中' },
        { en: 'a man / the bus stop', cn: '一个男人 / 车站' },
        { en: 'many boats / the river', cn: '很多船 / 河上' }
      ] },
      { pattern: 'I/He/She was ___. We/They were ___.', substitutions: [
        { en: 'at home / at school', cn: '在家 / 在学校' },
        { en: 'a student / students', cn: '一个学生 / 学生们' },
        { en: 'happy / tired', cn: '高兴 / 累' },
        { en: 'in London / in the park', cn: '在伦敦 / 在公园' }
      ] }
    ],
    exercises: [
      { type: 'choice', question: 'In 1995, there _____ a very big race.', options: ['A. is', 'B. was', 'C. are', 'D. were'], answer: 'B', explanation: '1995是过去时间，race是单数，用was。' },
      { type: 'fill', question: 'There were _____ of people there. (数百)', answer: 'hundreds', explanation: '"hundreds of"表示成百上千的。' },
      { type: 'judge', question: '"two hundreds people" 是正确的表达。', answer: '错误', explanation: '具体数字后hundred不加s，应该是"two hundred people"。' },
      { type: 'choice', question: 'My wife and I _____ at the race.', options: ['A. was', 'B. is', 'C. were', 'D. are'], answer: 'C', explanation: 'My wife and I是复数，用were。' }
    ],
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
    summary: '本课学习一般过去时的否定句和疑问句，以及问路的常用表达。通过迷路问路的故事展开。',
    summaryEn: 'This lesson teaches past tense negatives and questions, plus asking for directions through a lost-in-London story.',
    sentenceExplanations: [
      { sentence: 'Last week Mrs. Mills went to London.', translation: '上周米尔斯夫人去了伦敦。', explanation: '"Last week"表示过去时间。"went"是go的过去式。' },
      { sentence: 'She does not know London very well, and she lost her way.', translation: '她对伦敦不太熟悉，迷路了。', explanation: '"does not know"是一般现在时否定。"lost her way"是过去式，迷路了。' },
      { sentence: 'Suddenly, she saw a man near a bus stop.', translation: '突然，她在一个公共汽车站附近看见一个男人。', explanation: '"suddenly"表示突然。"saw"是see的过去式。' },
      { sentence: '"I can ask him the way," she said to herself.', translation: '"我可以向他问路，"她自言自语道。', explanation: '"ask sb the way"向某人问路。"said to herself"自言自语。' },
      { sentence: '"Excuse me," she said.', translation: '"对不起，"她说。', explanation: '"Excuse me"用于引起陌生人注意，比"sorry"更礼貌。' },
      { sentence: '"Can you tell me the way to King Street, please?"', translation: '"请问去国王街怎么走？"', explanation: '"Can you tell me the way to...?"是问路的标准句型。' },
      { sentence: 'He did not understand English!', translation: '他不懂英语！', explanation: '"did not understand"是过去式否定句。用"did not + 动词原形"。' }
    ],
    grammarSections: [
      { title: '一般过去时否定句', content: '一般过去时否定句用"did not (didn\'t) + 动词原形"。不论主语是什么，都用did not。', examples: [
        { en: 'I did not (didn\'t) go to school.', cn: '我没去上学。' },
        { en: 'He did not (didn\'t) understand.', cn: '他不理解。' },
        { en: 'They did not (didn\'t) come.', cn: '他们没来。' },
        { en: '注意：动词用原形，不用过去式', cn: 'didn\'t go (不说 didn\'t went)' }
      ] },
      { title: '问路表达', content: '问路时用"Excuse me"开头引起注意，然后用"Can you tell me the way to...?"询问。', examples: [
        { en: 'Excuse me, can you tell me the way to...?', cn: '请问去...怎么走？' },
        { en: 'Excuse me, where is...?', cn: '请问...在哪里？' },
        { en: 'Excuse me, how do I get to...?', cn: '请问怎么去...？' },
        { en: 'Turn left/right. Go straight. It\'s on the left/right.', cn: '指路常用表达' }
      ] }
    ],
    patternDrills: [
      { pattern: 'I/He/She did not ___ last ___.', substitutions: [
        { en: 'go / week', cn: '去 / 上周' },
        { en: 'understand / time', cn: '理解 / 上次' },
        { en: 'come / Monday', cn: '来 / 周一' },
        { en: 'see / night', cn: '看到 / 昨晚' }
      ] },
      { pattern: 'Can you tell me the way to ___?', substitutions: [
        { en: 'King Street', cn: '国王街' },
        { en: 'the bus stop', cn: '公共汽车站' },
        { en: 'the hospital', cn: '医院' },
        { en: 'the train station', cn: '火车站' }
      ] }
    ],
    exercises: [
      { type: 'choice', question: 'Last week she _____ to London.', options: ['A. go', 'B. goes', 'C. went', 'D. going'], answer: 'C', explanation: 'Last week表示过去，go → went。' },
      { type: 'fill', question: 'He did not _____ English. (理解)', answer: 'understand', explanation: 'did not后接动词原形。' },
      { type: 'judge', question: '"He did not understood English" 是正确的句子。', answer: '错误', explanation: 'did not后接动词原形understand，不是过去式understood。' },
      { type: 'choice', question: 'Excuse me, can you tell me the _____ to King Street?', options: ['A. road', 'B. way', 'C. street', 'D. path'], answer: 'B', explanation: '"the way to"是问路的固定搭配。' }
    ],
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
    summary: '本课学习一般过去时疑问句"Did...?"的用法，以及"like these"表示"像这样的"表达。',
    summaryEn: 'This lesson teaches past tense questions with "Did...?" and "like these" for "like these ones".',
    sentenceExplanations: [
      { sentence: 'Do you have any shoes like these?', translation: '你们有像这样的鞋子吗？', explanation: '"Do you have...?"是一般现在时疑问句。"like these"表示像这样的。' },
      { sentence: 'What size? / What colour?', translation: '几码的？/什么颜色的？', explanation: '省略疑问句，完整形式是"What size do you want?"和"What colour do you want?"。' },
      { sentence: 'I\'m sorry. We don\'t have any.', translation: '抱歉，我们没有。', explanation: '"don\'t have any"是否定形式。"any"用于否定句中。' },
      { sentence: 'But my sister bought this pair last month.', translation: '但我姐姐上个月买了这双。', explanation: '"bought"是buy的过去式。"this pair"这双。"last month"上个月。' },
      { sentence: 'Did she buy them here?', translation: '她是在这里买的吗？', explanation: '"Did + 主语 + 动词原形"是过去时疑问句。' },
      { sentence: 'No, she bought them in the U.S.', translation: '不，她在美国买的。', explanation: '"the U.S."是美国的缩写（United States）。' }
    ],
    grammarSections: [
      { title: '一般过去时疑问句', content: '一般过去时疑问句用"Did + 主语 + 动词原形?"。回答用"Yes, ...did."或"No, ...didn\'t."。', examples: [
        { en: 'Did she buy them here? — No, she didn\'t.', cn: '她在这买的吗？—不是。' },
        { en: 'Did you go to school? — Yes, I did.', cn: '你去上学了吗？—是的。' },
        { en: 'Did he understand? — No, he didn\'t.', cn: '他理解了吗？—没有。' }
      ] },
      { title: 'like these/those', content: '"like these/those"表示"像这些/那些一样的"。"like"是介词，表示像。', examples: [
        { en: 'Do you have shoes like these?', cn: '你有像这样的鞋吗？' },
        { en: 'I want a bag like yours.', cn: '我想要一个像你那样的包。' },
        { en: 'She looks like her mother.', cn: '她看起来像她妈妈。' }
      ] }
    ],
    patternDrills: [
      { pattern: 'Did he/she ___ it/them ___? — Yes/No...', substitutions: [
        { en: 'buy / here', cn: '买 / 这里' },
        { en: 'see / yesterday', cn: '看到 / 昨天' },
        { en: 'eat / at home', cn: '吃 / 在家' },
        { en: 'read / last week', cn: '读 / 上周' }
      ] },
      { pattern: 'Do you have any ___ like ___?', substitutions: [
        { en: 'shoes / these', cn: '鞋 / 这些' },
        { en: 'bags / that', cn: '包 / 那个' },
        { en: 'pens / mine', cn: '笔 / 我的' },
        { en: 'dresses / hers', cn: '连衣裙 / 她的' }
      ] }
    ],
    exercises: [
      { type: 'choice', question: '_____ she buy them here?', options: ['A. Does', 'B. Did', 'C. Do', 'D. Was'], answer: 'B', explanation: '过去时疑问句用Did。' },
      { type: 'fill', question: 'My sister _____ this pair last month. (买)', answer: 'bought', explanation: 'buy → bought (过去式)。' },
      { type: 'judge', question: '"Did she bought them here?" 是正确的句子。', answer: '错误', explanation: 'Did后接动词原形buy，不是过去式bought。' },
      { type: 'choice', question: 'We don\'t have _____.', options: ['A. some', 'B. any', 'C. a', 'D. the'], answer: 'B', explanation: '否定句用any。' }
    ],
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
    summary: '本课学习现在完成时的初步用法（have/has + 过去分词），以及地理描述中的度量表达。',
    summaryEn: 'This lesson introduces the present perfect tense (have/has + past participle) and measurement expressions for geography.',
    sentenceExplanations: [
      { sentence: 'The English Channel separates England from France.', translation: '英吉利海峡把英国和法国隔开。', explanation: '"separate...from..."把...和...分开。注意England和France都是专有名词。' },
      { sentence: 'It is about thirty-three miles wide at its narrowest point.', translation: '在最窄处大约三十三英里宽。', explanation: '"thirty-three miles wide"表示宽度。"at its narrowest point"在最窄处。' },
      { sentence: 'Many people have swum across the English Channel.', translation: '很多人已经游过了英吉利海峡。', explanation: '"have swum"是现在完成时。swim → swum (过去分词)。"across"表示横穿。' },
      { sentence: 'It usually takes them about twelve hours.', translation: '通常需要大约十二个小时。', explanation: '"It takes + 人 + 时间"表示花费某人多少时间。' }
    ],
    grammarSections: [
      { title: '现在完成时（初步）', content: '现在完成时结构：have/has + 过去分词。表示过去发生但与现在有联系的动作，或从过去持续到现在的状态。', examples: [
        { en: 'I have finished my homework.', cn: '我已经做完作业了。（强调现在完成了）' },
        { en: 'She has gone to London.', cn: '她已经去伦敦了。（现在不在这里）' },
        { en: 'Many people have swum across the Channel.', cn: '很多人已经游过了英吉利海峡。' },
        { en: 'He has lived here for ten years.', cn: '他在这里住了十年了。（持续到现在）' }
      ] },
      { title: '度量表达', content: '英语中描述长度、宽度、高度用"数词 + 度量单位 + 形容词"的结构。', examples: [
        { en: 'thirty-three miles wide (三十三英里宽)', cn: '宽度' },
        { en: 'six feet tall (六英尺高)', cn: '高度' },
        { en: 'ten meters long (十米长)', cn: '长度' },
        { en: 'It is about... wide/long/tall.', cn: '大约...宽/长/高' }
      ] }
    ],
    patternDrills: [
      { pattern: 'It is about ___ miles/kilometers ___.', substitutions: [
        { en: 'thirty-three / wide', cn: '三十三 / 宽' },
        { en: 'ten / long', cn: '十 / 长' },
        { en: 'six / tall', cn: '六 / 高' },
        { en: 'two hundred / deep', cn: '二百 / 深' }
      ] },
      { pattern: 'Many people have ___ across/through ___.', substitutions: [
        { en: 'swum / the English Channel', cn: '游过 / 英吉利海峡' },
        { en: 'walked / the desert', cn: '走过 / 沙漠' },
        { en: 'flown / the Atlantic', cn: '飞过 / 大西洋' },
        { en: 'driven / the country', cn: '开车穿过 / 这个国家' }
      ] }
    ],
    exercises: [
      { type: 'choice', question: 'Many people have _____ across the English Channel.', options: ['A. swim', 'B. swam', 'C. swum', 'D. swimming'], answer: 'C', explanation: 'have + 过去分词swum。' },
      { type: 'fill', question: 'The Channel separates England _____ France. (从)', answer: 'from', explanation: '"separate...from..."把...和...分开。' },
      { type: 'judge', question: '"It usually takes them twelve hours" 中 takes 表示花费时间。', answer: '正确', explanation: '"It takes + 时间"表示花费时间。' },
      { type: 'choice', question: 'It is about thirty-three miles _____.', options: ['A. long', 'B. wide', 'C. tall', 'D. high'], answer: 'B', explanation: '描述宽度用wide。' }
    ],
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
    summary: '本课学习现在进行时描述即将发生的动作，以及否定祈使句"Don\'t..."的用法。通过赶公共汽车的紧张场景展开。',
    summaryEn: 'This lesson uses present continuous for imminent actions and negative imperatives "Don\'t..." through a bus-chasing scene.',
    sentenceExplanations: [
      { sentence: 'Hurry up! The bus is coming.', translation: '快点！公共汽车来了。', explanation: '"Hurry up"是祈使句，催促对方。"is coming"用现在进行时表示即将到达。' },
      { sentence: 'I\'m coming now, Sally.', translation: '我马上就来，萨利。', explanation: '"I\'m coming"表示我正在来。"now"强调马上。' },
      { sentence: 'I\'m putting on my coat.', translation: '我在穿外套。', explanation: '"put on"是动词短语，表示穿上。反义词是"take off"（脱下）。' },
      { sentence: 'We must run!', translation: '我们必须跑过去！', explanation: '"must"是情态动词，表示必须。后接动词原形。' },
      { sentence: 'Oh no! We\'ve missed it!', translation: '哦不！我们错过了！', explanation: '"We\'ve"是"We have"的缩写。"missed"是miss的过去分词。现在完成时表示结果。' },
      { sentence: 'Don\'t worry! There\'s another bus in ten minutes.', translation: '别担心！十分钟后来还有一班。', explanation: '"Don\'t worry"是否定祈使句。"another"表示另一个。"in ten minutes"十分钟后。' }
    ],
    grammarSections: [
      { title: '现在进行时表示即将发生', content: '现在进行时除了表示正在进行的动作外，还可以表示即将发生的动作，特别是与come, go, leave等动词连用时。', examples: [
        { en: 'The bus is coming. (车即将到)', cn: '即将发生' },
        { en: 'The bus is leaving. (车即将离开)', cn: '即将发生' },
        { en: 'I\'m coming! (我马上就来)', cn: '即将发生' },
        { en: 'We\'re going to the park tomorrow. (计划)', cn: '计划好的事' }
      ] },
      { title: '否定祈使句', content: '否定祈使句用"Don\'t + 动词原形"开头，表示不要做某事。', examples: [
        { en: 'Don\'t worry! (别担心！)', cn: '安慰' },
        { en: 'Don\'t be late! (别迟到！)', cn: '提醒' },
        { en: 'Don\'t open the window! (别开窗！)', cn: '禁止' },
        { en: 'Don\'t be afraid! (别害怕！)', cn: '鼓励' }
      ] }
    ],
    patternDrills: [
      { pattern: 'The ___ is coming/leaving!', substitutions: [
        { en: 'bus', cn: '公共汽车' },
        { en: 'train', cn: '火车' },
        { en: 'taxi', cn: '出租车' },
        { en: 'plane', cn: '飞机' }
      ] },
      { pattern: 'Don\'t ___! There\'s ___ in ___.', substitutions: [
        { en: 'worry / another bus / ten minutes', cn: '担心 / 另一班车 / 十分钟' },
        { en: 'worry / another train / half an hour', cn: '担心 / 另一班火车 / 半小时' },
        { en: 'be late / time / five minutes', cn: '迟到 / 时间 / 五分钟' }
      ] }
    ],
    exercises: [
      { type: 'choice', question: 'The bus _____ coming! Hurry up!', options: ['A. am', 'B. is', 'C. are', 'D. be'], answer: 'B', explanation: 'The bus是第三人称单数，用is。' },
      { type: 'fill', question: 'I\'m _____ on my coat. (穿上)', answer: 'putting', explanation: '"put on" → "putting on"，现在进行时双写t。' },
      { type: 'judge', question: '"We\'ve missed it" 是现在完成时。', answer: '正确', explanation: 'We\'ve = We have, have + missed (过去分词)。' },
      { type: 'choice', question: '_____ worry! There\'s another bus.', options: ['A. Not', 'B. Don\'t', 'C. No', 'D. Isn\'t'], answer: 'B', explanation: '否定祈使句用Don\'t。' }
    ],
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
    summary: '本课学习"want sb to do sth"想要某人做某事的句型，以及"Can you...?"请求帮助的表达。',
    summaryEn: 'This lesson teaches "want sb to do sth" and "Can you...?" for requesting help.',
    sentenceExplanations: [
      { sentence: 'Come into the garden, Jane.', translation: '到花园里来，简。', explanation: '"Come into"表示进入。"garden"是花园。' },
      { sentence: 'I\'m coming, Mrs. Jones.', translation: '我来了，琼斯夫人。', explanation: '"I\'m coming"表示我正在来/我来了。' },
      { sentence: 'What do you want?', translation: '你要我做什么？', explanation: '"What do you want?"询问对方想要什么。' },
      { sentence: 'I want you to help me.', translation: '我要你帮我。', explanation: '"want sb to do sth"想要某人做某事。"me"是help的宾语。' },
      { sentence: 'Can you carry this vase?', translation: '你能搬动这个花瓶吗？', explanation: '"Can you...?"用于请求帮助或询问能力。"carry"是搬、拿。' },
      { sentence: 'Yes, of course I can.', translation: '当然可以。', explanation: '"of course"表示当然。肯定回答用"Yes, I can."。' }
    ],
    grammarSections: [
      { title: 'want sb to do sth', content: '"want + 宾语 + to do"表示想要某人做某事。这是英语中非常常用的句型。', examples: [
        { en: 'I want you to help me.', cn: '我想要你帮我。' },
        { en: 'She wants me to go.', cn: '她想要我去。' },
        { en: 'He wants his son to study hard.', cn: '他想要他儿子努力学习。' },
        { en: 'They want us to come.', cn: '他们想要我们来。' }
      ] },
      { title: 'Can you...? 请求和能力', content: '"Can you...?"有两种用法：1）询问能力（你能...吗？）2）请求帮助（你能帮我...吗？）', examples: [
        { en: 'Can you swim? (能力)', cn: '你会游泳吗？' },
        { en: 'Can you help me? (请求)', cn: '你能帮我吗？' },
        { en: 'Can you carry this? (请求)', cn: '你能搬这个吗？' },
        { en: 'Yes, I can. / No, I can\'t.', cn: '回答' }
      ] }
    ],
    patternDrills: [
      { pattern: 'I want you to ___.', substitutions: [
        { en: 'help me', cn: '帮我' },
        { en: 'carry this', cn: '搬这个' },
        { en: 'open the door', cn: '开门' },
        { en: 'clean the room', cn: '打扫房间' }
      ] },
      { pattern: 'Can you ___? — Yes, of course I can.', substitutions: [
        { en: 'carry this vase', cn: '搬这个花瓶' },
        { en: 'open this door', cn: '开这扇门' },
        { en: 'help me', cn: '帮我' },
        { en: 'reach that shelf', cn: '够到那个架子' }
      ] }
    ],
    exercises: [
      { type: 'choice', question: 'I want you _____ me.', options: ['A. help', 'B. to help', 'C. helping', 'D. helped'], answer: 'B', explanation: '"want sb to do"用不定式to help。' },
      { type: 'fill', question: '_____ you carry this vase? (能)', answer: 'Can', explanation: '"Can you...?"表示请求。' },
      { type: 'judge', question: '"I want you help me" 是正确的句子。', answer: '错误', explanation: '应该是"I want you to help me"，需要to。' },
      { type: 'choice', question: 'Yes, _____ I can.', options: ['A. sure', 'B. of course', 'C. certainly', 'D. all above'], answer: 'D', explanation: '三个选项都可以表示"当然"。' }
    ],
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
    summary: '本课学习序数词（first）和班级、年级的表达方式。通过萨利上学第一天的简短故事展开。',
    summaryEn: 'This lesson teaches ordinal numbers (first) and class/grade expressions through Sally\'s first day at school.',
    sentenceExplanations: [
      { sentence: 'This is Sally\'s first day at school.', translation: '今天是萨利上学的第一天。', explanation: '"first"是序数词，表示第一。"at school"在学校。' },
      { sentence: 'Sally is six years old.', translation: '萨利六岁了。', explanation: '"...years old"表示年龄。' },
      { sentence: 'She is in Class One, Grade One.', translation: '她在一年级一班。', explanation: '注意顺序：先说班级后说年级。首字母大写。' },
      { sentence: 'There are thirty-five students in her class.', translation: '她班上有三十五名学生。', explanation: '"There are + 数字 + 名词"表示有多少。' }
    ],
    grammarSections: [
      { title: '序数词', content: '序数词表示顺序。前几个需要特别记忆，后面的在基数词后加th。序数词前通常加the。', examples: [
        { en: 'first (第一) — 1st', cn: '不规则' },
        { en: 'second (第二) — 2nd', cn: '不规则' },
        { en: 'third (第三) — 3rd', cn: '不规则' },
        { en: 'fourth (第四) — 4th', cn: '基数词+th' },
        { en: 'fifth (第五) — 5th', cn: 'fif → fif + th' }
      ] },
      { title: '班级和年级的表达', content: '英语中表达班级和年级时，先说Class后说Grade，首字母大写。', examples: [
        { en: 'Class One, Grade One (一年级一班)', cn: '先班级后年级' },
        { en: 'Class Three, Grade Two (二年级三班)', cn: '先班级后年级' },
        { en: 'She is in Class One. (她在一班)', cn: '省略年级' }
      ] }
    ],
    patternDrills: [
      { pattern: 'This is ___\'s first day at ___.', substitutions: [
        { en: 'Sally / school', cn: '萨利 / 学校' },
        { en: 'Tom / work', cn: '汤姆 / 工作' },
        { en: 'the baby / the nursery', cn: '婴儿 / 托儿所' }
      ] },
      { pattern: 'He/She is in Class ___, Grade ___.', substitutions: [
        { en: 'One / One', cn: '一 / 一' },
        { en: 'Two / Three', cn: '二 / 三' },
        { en: 'Five / Two', cn: '五 / 二' }
      ] }
    ],
    exercises: [
      { type: 'choice', question: 'She is in _____ One, Grade One.', options: ['A. class', 'B. Class', 'C. a class', 'D. the class'], answer: 'B', explanation: '表示班级时Class首字母大写。' },
      { type: 'fill', question: 'This is Sally\'s _____ day at school. (第一)', answer: 'first', explanation: 'first是序数词，表示第一。' },
      { type: 'judge', question: '"Class One, Grade One" 的顺序是先年级后班级。', answer: '错误', explanation: '英语中先说Class后说Grade。' },
      { type: 'choice', question: 'There are _____ students in her class.', options: ['A. thirty-five', 'B. thirty five', 'C. thity-five', 'D. thirty-fifth'], answer: 'A', explanation: 'thirty-five是基数词，用连字符连接。' }
    ],
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
    summary: '本课学习过去进行时（was/were doing）和被动语态的初步用法，通过泰坦尼克号的历史故事展开。',
    summaryEn: 'This lesson introduces the past continuous (was/were doing) and passive voice through the Titanic story.',
    sentenceExplanations: [
      { sentence: 'The great ship, Titanic, sailed for New York from Southampton on April 10th, 1912.', translation: '巨轮泰坦尼克号于1912年4月10日从南安普敦起航驶往纽约。', explanation: '"sailed for"驶往。"from...to..."从...到...。日期表达：月+日+年。' },
      { sentence: 'She was carrying 1,316 passengers and a crew of 891.', translation: '船上载有1316名乘客和891名船员。', explanation: '"was carrying"是过去进行时，表示当时正在载着。' },
      { sentence: 'She was not only the largest ship that had ever been built, but was regarded as unsinkable.', translation: '它不仅是当时建造的最大的船，而且被认为是不会沉没的。', explanation: '"not only...but (also)"不仅...而且。"had been built"是过去完成时被动语态。"be regarded as"被认为是。' },
      { sentence: 'Four days after setting out, while the Titanic was sailing across the icy waters of the North Atlantic, a huge iceberg was suddenly spotted by a lookout.', translation: '启航四天后，当泰坦尼克号正航行在北大西洋冰冷的水域上时，瞭望员突然发现了一座巨大的冰山。', explanation: '"setting out"出发。"while"当...的时候。"was spotted"是过去时被动语态，被发现。' }
    ],
    grammarSections: [
      { title: '过去进行时', content: '过去进行时结构：was/were + doing。表示过去某一时刻正在进行的动作。常与while连用。', examples: [
        { en: 'She was carrying passengers. (当时正载着)', cn: '过去进行时' },
        { en: 'The ship was sailing across the Atlantic. (正在航行)', cn: '过去进行时' },
        { en: 'While I was reading, he came in.', cn: 'while引导时间状语从句' }
      ] },
      { title: '被动语态（初步）', content: '被动语态结构：be + 过去分词。表示动作的承受者作主语。by引出动作的执行者。', examples: [
        { en: 'The iceberg was spotted by a lookout.', cn: '冰山被瞭望员发现。' },
        { en: 'The ship was built in 1912.', cn: '船在1912年建造。' },
        { en: 'English is spoken worldwide.', cn: '英语在全世界被使用。' }
      ] }
    ],
    patternDrills: [
      { pattern: 'The ___ was ___-ing across/through ___.', substitutions: [
        { en: 'ship / sail / the Atlantic', cn: '船 / 航行 / 大西洋' },
        { en: 'plane / fly / the clouds', cn: '飞机 / 飞 / 云层' },
        { en: 'train / go / the tunnel', cn: '火车 / 行驶 / 隧道' }
      ] },
      { pattern: 'The ___ was ___-ed by ___.', substitutions: [
        { en: 'iceberg / spot / a lookout', cn: '冰山 / 发现 / 瞭望员' },
        { en: 'letter / write / my father', cn: '信 / 写 / 我父亲' },
        { en: 'house / build / workers', cn: '房子 / 建造 / 工人们' }
      ] }
    ],
    exercises: [
      { type: 'choice', question: 'She _____ carrying 1,316 passengers.', options: ['A. is', 'B. was', 'C. were', 'D. are'], answer: 'B', explanation: 'She是单数，过去进行时用was。' },
      { type: 'fill', question: 'She was not only large, _____ was also fast.', answer: 'but', explanation: '"not only...but (also)"是固定搭配。' },
      { type: 'judge', question: '"was spotted" 是被动语态。', answer: '正确', explanation: 'be(was) + 过去分词(spotted)是被动语态。' },
      { type: 'choice', question: '_____ the ship was sailing, a huge iceberg was spotted.', options: ['A. When', 'B. While', 'C. As', 'D. During'], answer: 'B', explanation: '"while"引导时间状语从句，表示在...期间。' }
    ],
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
    summary: '本课学习请求重复的表达"Pardon?"和"I beg your pardon?"，以及"Do you speak...?"询问语言能力的句型。',
    summaryEn: 'This lesson teaches "Pardon?" and "I beg your pardon?" for requesting repetition, and "Do you speak...?" for language ability.',
    sentenceExplanations: [
      { sentence: 'I\'m a student from China. I\'m learning English.', translation: '我是来自中国的学生。我在学英语。', explanation: '"from China"来自中国。"am learning"是现在进行时，表示正在学习。' },
      { sentence: 'Do you understand English?', translation: '你懂英语吗？', explanation: '"understand"是理解、懂。一般现在时询问能力。' },
      { sentence: 'A little.', translation: '懂一点。', explanation: '省略回答。完整形式是"I understand a little."。' },
      { sentence: 'Do you speak English?', translation: '你说英语吗？', explanation: '"speak + 语言"表示说某种语言。一般现在时询问能力。' },
      { sentence: 'Yes, I do. But I speak very slowly.', translation: '是的，但我说得很慢。', explanation: '"slowly"是副词，修饰speak。slow → slowly。' },
      { sentence: 'Can you repeat that, please?', translation: '你能再说一遍吗？', explanation: '"repeat"是重复。"that"指对方刚才说的话。' },
      { sentence: 'Pardon?', translation: '请再说一遍？', explanation: '"Pardon?"是请求对方再说一遍的礼貌用语。也可以说"I beg your pardon?"。' },
      { sentence: 'I said, can you repeat that?', translation: '我说，你能再说一遍吗？', explanation: '"I said"用来强调自己之前说过的话。' }
    ],
    grammarSections: [
      { title: '请求重复的表达', content: '没听清对方说什么时，可以用多种方式请求重复。', examples: [
        { en: 'Pardon? (请再说一遍)', cn: '最常用' },
        { en: 'I beg your pardon? (请再说一遍)', cn: '更正式' },
        { en: 'Sorry? (什么？)', cn: '口语化' },
        { en: 'Could you say that again? (你能再说一遍吗)', cn: '完整表达' }
      ] },
      { title: 'speak + 语言', content: '"speak"后接语言名称，表示说某种语言。一般现在时用于询问能力。', examples: [
        { en: 'Do you speak English? (你说英语吗)', cn: '询问能力' },
        { en: 'She speaks Chinese. (她说中文)', cn: '陈述事实' },
        { en: 'I can speak a little French. (我会说一点法语)', cn: '能力' },
        { en: 'He speaks three languages. (他说三种语言)', cn: '能力' }
      ] }
    ],
    patternDrills: [
      { pattern: 'Do you speak ___? — Yes, I do. / No, I don\'t.', substitutions: [
        { en: 'English', cn: '英语' },
        { en: 'Chinese', cn: '中文' },
        { en: 'French', cn: '法语' },
        { en: 'Japanese', cn: '日语' }
      ] },
      { pattern: 'Can you ___ that, please?', substitutions: [
        { en: 'repeat', cn: '重复' },
        { en: 'say', cn: '说' },
        { en: 'spell', cn: '拼写' },
        { en: 'explain', cn: '解释' }
      ] }
    ],
    exercises: [
      { type: 'choice', question: 'Do you _____ English?', options: ['A. say', 'B. tell', 'C. speak', 'D. talk'], answer: 'C', explanation: '"speak + 语言"表示说某种语言。' },
      { type: 'fill', question: 'I speak very _____. (慢地)', answer: 'slowly', explanation: 'slow → slowly，副词修饰动词。' },
      { type: 'judge', question: '"Pardon?" 用于请求对方再说一遍。', answer: '正确', explanation: 'Pardon?是请求重复的礼貌用语。' },
      { type: 'choice', question: 'Can you _____ that, please?', options: ['A. repeating', 'B. repeats', 'C. repeated', 'D. repeat'], answer: 'D', explanation: 'Can后接动词原形。' }
    ],
  },
  {
    id: 41,
    title: 'Penny\'s bag',
    titleCn: '彭妮的包',
    text: [
      'Is that bag heavy, Penny?',
      'Not very.',
      'Here! Put it on this chair.',
      'What\'s in it?',
      'A piece of cheese. A loaf of bread. A bar of chocolate.',
      'A bottle of milk. A pound of sugar.',
      'Half a pound of coffee. A quarter of a pound of tea.',
      'And a tin of tobacco.'
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
      { word: 'heavy', phonetic: '/ˈhevi/', meaning: '重的' },
      { word: 'cheese', phonetic: '/tʃiːz/', meaning: '奶酪' },
      { word: 'bread', phonetic: '/bred/', meaning: '面包' },
      { word: 'chocolate', phonetic: '/ˈtʃɒklət/', meaning: '巧克力' },
      { word: 'sugar', phonetic: '/ˈʃʊɡə/', meaning: '糖' },
      { word: 'tobacco', phonetic: '/təˈbækəʊ/', meaning: '烟丝' }
    ],
    notes: [
      '"Not very" 是 "It\'s not very heavy" 的省略。',
      '"a piece of" 一块，"a loaf of" 一条，"a bar of" 一块（条状）。',
      '"a tin of" 一听。'
    ],
    tags: ['不可数名词', '量词'],
    difficulty: 1,
    summary: '彭妮的包里装满了各种食物，用不同量词计量不可数名词。',
    summaryEn: 'Penny\'s bag contains various foods measured with different quantifiers.',
  },
  {
    id: 42,
    title: 'Is there a... in/on that...?',
    titleCn: '在那个……里/上有……吗？',
    text: [
      'Is there any bread here?',
      'Yes, there is. There\'s some on the table.',
      'Is there a hammer here?',
      'Yes, there is. There\'s one behind the box.',
      'Is there any chocolate here?',
      'Yes, there is. There\'s some on the desk.',
      'Is there a cup here?',
      'Yes, there is. There\'s one on the shelf.'
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
      { word: 'hammer', phonetic: '/ˈhæmə/', meaning: '锤子' },
      { word: 'behind', phonetic: '/bɪˈhaɪnd/', meaning: '在……后面' },
      { word: 'shelf', phonetic: '/ʃelf/', meaning: '架子' },
      { word: 'some', phonetic: '/sʌm/', meaning: '一些' },
      { word: 'any', phonetic: '/eni/', meaning: '一些（疑问/否定）' }
    ],
    notes: [
      '"Is there any...?" 询问不可数名词。',
      '"Is there a...?" 询问可数名词单数。',
      '"some" 用于肯定句，"any" 用于疑问句和否定句。'
    ],
    tags: ['There be句型', 'some/any'],
    difficulty: 1,
    summary: '练习There be句型的一般疑问句，区分some和any。',
    summaryEn: 'Practice There be questions with some and any.',
  },
  {
    id: 43,
    title: 'Hurry up!',
    titleCn: '快点！',
    text: [
      'Can you make the tea, Sam?',
      'Yes, of course I can, Penny.',
      'Is there any water in this kettle?',
      'Yes, there is.',
      'Where\'s the tea?',
      'It\'s over there, behind the teapot.',
      'Can you see it?',
      'I can see the teapot, but I can\'t see any tea.',
      'There it is! It\'s in front of you.',
      'Hurry up, Sam! The kettle\'s boiling!'
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
      { word: 'kettle', phonetic: '/ˈketl/', meaning: '水壶' },
      { word: 'teapot', phonetic: '/ˈtiːpɒt/', meaning: '茶壶' },
      { word: 'cupboard', phonetic: '/ˈkʌbəd/', meaning: '碗柜' },
      { word: 'boil', phonetic: '/bɔɪl/', meaning: '沸腾' },
      { word: 'hurry', phonetic: '/ˈhʌri/', meaning: '赶紧' }
    ],
    notes: [
      '"make the tea" 沏茶。',
      '"over there" 在那边。',
      '"in front of" 在……前面。'
    ],
    tags: ['can的用法', '方位介词'],
    difficulty: 1,
    summary: '萨姆在厨房沏茶，练习can和方位介词。',
    summaryEn: 'Sam makes tea in the kitchen, practicing can and prepositions of place.',
  },
  {
    id: 44,
    title: 'Are there any...?',
    titleCn: '有一些……吗？',
    text: [
      'Are there any cups here?',
      'Yes, there are. There are some on the table.',
      'Are there any knives here?',
      'Yes, there are. There are some on the plate.',
      'Are there any newspapers here?',
      'Yes, there are. There are some on the shelf.',
      'Are there any bottles here?',
      'Yes, there are. There are some on the dressing table.'
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
      { word: 'knife', phonetic: '/naɪf/', meaning: '刀' },
      { word: 'plate', phonetic: '/pleɪt/', meaning: '盘子' },
      { word: 'newspaper', phonetic: '/ˈnjuːzpeɪpə/', meaning: '报纸' },
      { word: 'bottle', phonetic: '/ˈbɒtl/', meaning: '瓶子' },
      { word: 'dressing table', phonetic: '/ˈdresɪŋ ˈteɪbl/', meaning: '梳妆台' }
    ],
    notes: [
      '"Are there any...?" 询问可数名词复数。',
      'knife的复数是knives（f变ves）。'
    ],
    tags: ['There be复数', '可数名词复数'],
    difficulty: 1,
    summary: '练习There be句型询问可数名词复数。',
    summaryEn: 'Practice Are there any questions with countable plural nouns.',
  },
  {
    id: 45,
    title: 'The boss\'s letter',
    titleCn: '老板的信',
    text: [
      'Can you come here a minute please, Bob?',
      'Yes, sir?',
      'Where\'s Pamela?',
      'She\'s next door. She\'s in her office, sir.',
      'Can she type this letter for me?',
      'Yes, of course she can.',
      'Can you type this letter for the boss please, Pamela?',
      'Yes, of course I can.',
      'I can\'t type this letter. I can\'t read it!',
      'The boss\'s handwriting is terrible!'
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
      { word: 'boss', phonetic: '/bɒs/', meaning: '老板' },
      { word: 'letter', phonetic: '/ˈletə/', meaning: '信' },
      { word: 'next door', phonetic: '/nekst dɔːr/', meaning: '隔壁' },
      { word: 'office', phonetic: '/ˈɒfɪs/', meaning: '办公室' },
      { word: 'type', phonetic: '/taɪp/', meaning: '打字' },
      { word: 'handwriting', phonetic: '/ˈhændraɪtɪŋ/', meaning: '笔迹' },
      { word: 'terrible', phonetic: '/ˈterəbl/', meaning: '糟糕的' }
    ],
    notes: [
      '"a minute" 一会儿。',
      '"What\'s the matter?" 怎么了？',
      '"the boss\'s handwriting" 老板的笔迹。名词所有格加\'s。'
    ],
    tags: ['名词所有格', 'can请求'],
    difficulty: 2,
    summary: '帕梅拉无法打信，因为老板的字迹太潦草。',
    summaryEn: 'Pamela cannot type the letter because the boss\'s handwriting is terrible.',
  },
  {
    id: 46,
    title: 'Can you...?',
    titleCn: '你能……吗？',
    text: [
      'Can you put on your coat?',
      'Yes, I can.',
      'What can you do?',
      'I can put on my coat.',
      'Can you come here?',
      'Yes, I can.',
      'Can you see that aeroplane?',
      'Yes, I can.',
      'What can you do?',
      'I can see that aeroplane.'
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
      { word: 'put on', phonetic: '/pʊt ɒn/', meaning: '穿上' },
      { word: 'aeroplane', phonetic: '/ˈeərəpleɪn/', meaning: '飞机' },
      { word: 'see', phonetic: '/siː/', meaning: '看见' },
      { word: 'come', phonetic: '/kʌm/', meaning: '来' }
    ],
    notes: [
      '"put on" 穿上，反义词 "take off"。',
      '"Can you...?" 请求或询问能力。'
    ],
    tags: ['can能力', '动词短语'],
    difficulty: 1,
    summary: '练习用can表达能力的各种句型。',
    summaryEn: 'Practice using can to express ability.',
  },
  {
    id: 47,
    title: 'A cup of coffee',
    titleCn: '一杯咖啡',
    text: [
      'Do you like coffee, Ann?',
      'Yes, I do.',
      'Do you want a cup?',
      'Yes, please, Christine.',
      'Do you want any sugar?',
      'Yes, please.',
      'Do you want any milk?',
      'No, thank you. I don\'t like milk in my coffee.',
      'I like black coffee.',
      'Do you like biscuits?',
      'Yes, I do. Do you want one?',
      'Yes, please.'
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
      '',
      '',
      ''
    ],
    vocabulary: [
      { word: 'coffee', phonetic: '/ˈkɒfi/', meaning: '咖啡' },
      { word: 'sugar', phonetic: '/ˈʃʊɡə/', meaning: '糖' },
      { word: 'biscuit', phonetic: '/ˈbɪskɪt/', meaning: '饼干' },
      { word: 'black coffee', phonetic: '/blæk ˈkɒfi/', meaning: '黑咖啡' }
    ],
    notes: [
      '"Do you like...?" 询问喜好。',
      '"Yes, please." 接受。"No, thank you." 拒绝。'
    ],
    tags: ['Do you like句型', '礼貌用语'],
    difficulty: 1,
    summary: '练习询问喜好和礼貌回应。',
    summaryEn: 'Practice asking about preferences and polite responses.',
  },
  {
    id: 48,
    title: 'Do you like...?',
    titleCn: '你喜欢……吗？',
    text: [
      'Do you like eggs?',
      'Yes, I do. I like eggs, but I don\'t want one.',
      'Do you like butter?',
      'Yes, I do. I like butter, but I don\'t want any.',
      'Do you like honey?',
      'Yes, I do. I like honey, but I don\'t want any.',
      'Do you like bananas?',
      'Yes, I do. I like bananas, but I don\'t want one.',
      'Do you like jam?',
      'Yes, I do. I like jam, but I don\'t want any.'
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
      { word: 'egg', phonetic: '/eɡ/', meaning: '鸡蛋' },
      { word: 'butter', phonetic: '/ˈbʌtə/', meaning: '黄油' },
      { word: 'honey', phonetic: '/ˈhʌni/', meaning: '蜂蜜' },
      { word: 'banana', phonetic: '/bəˈnɑːnə/', meaning: '香蕉' },
      { word: 'jam', phonetic: '/dʒæm/', meaning: '果酱' },
      { word: 'orange', phonetic: '/ˈɒrɪndʒ/', meaning: '橙子' }
    ],
    notes: [
      '"I like..., but I don\'t want..." 喜欢但暂时不想要。',
      '注意可数和不可数名词的区别。'
    ],
    tags: ['可数/不可数名词', 'like/want'],
    difficulty: 1,
    summary: '区分可数和不可数名词，练习like和want。',
    summaryEn: 'Distinguish countable and uncountable nouns with like and want.',
  },
  {
    id: 49,
    title: 'At the butcher\'s',
    titleCn: '在肉店',
    text: [
      'Do you want any meat today, Mrs. Bird?',
      'Yes, please.',
      'Do you want beef or lamb?',
      'Beef, please.',
      'This lamb\'s very good.',
      'I like lamb, but my husband doesn\'t.',
      'What about some steak? This is a nice piece.',
      'Give me that piece, then.',
      'To tell you the truth, Mrs. Bird, I don\'t like chicken either!'
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
      ''
    ],
    vocabulary: [
      { word: 'butcher', phonetic: '/ˈbʊtʃə/', meaning: '肉店' },
      { word: 'meat', phonetic: '/miːt/', meaning: '肉' },
      { word: 'beef', phonetic: '/biːf/', meaning: '牛肉' },
      { word: 'lamb', phonetic: '/læm/', meaning: '羊肉' },
      { word: 'steak', phonetic: '/steɪk/', meaning: '牛排' },
      { word: 'husband', phonetic: '/ˈhʌzbənd/', meaning: '丈夫' },
      { word: 'chicken', phonetic: '/ˈtʃɪkɪn/', meaning: '鸡肉' },
      { word: 'truth', phonetic: '/truːθ/', meaning: '真相' }
    ],
    notes: [
      '"at the butcher\'s" 在肉店。\'s表示店铺。',
      '"What about...?" 提建议。',
      '"either" 也不，用于否定句末。'
    ],
    tags: ['名词所有格表店铺', 'either用法'],
    difficulty: 2,
    summary: '在肉店买肉，练习选择疑问句和否定句中的either。',
    summaryEn: 'Buying meat at the butcher\'s, practicing alternative questions and either.',
  },
  {
    id: 50,
    title: 'A pleasant climate',
    titleCn: '宜人的气候',
    text: [
      'Where do you come from?',
      'I come from Greece.',
      'What\'s the climate like in your country?',
      'It\'s very pleasant.',
      'What\'s the weather like in spring?',
      'It\'s often windy in March. It\'s always warm in April and May.',
      'But it rains sometimes.',
      'What\'s it like in summer?',
      'It\'s always hot in June, July and August.',
      'The sun shines every day.'
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
      { word: 'climate', phonetic: '/ˈklaɪmət/', meaning: '气候' },
      { word: 'pleasant', phonetic: '/ˈpleznt/', meaning: '宜人的' },
      { word: 'weather', phonetic: '/ˈweðə/', meaning: '天气' },
      { word: 'windy', phonetic: '/ˈwɪndi/', meaning: '有风的' },
      { word: 'warm', phonetic: '/wɔːm/', meaning: '温暖的' },
      { word: 'rain', phonetic: '/reɪn/', meaning: '下雨' },
      { word: 'shine', phonetic: '/ʃaɪn/', meaning: '照耀' }
    ],
    notes: [
      '"What\'s the climate like?" 问气候。',
      '"It\'s + adj + in + 月份" 描述某月天气。',
      '注意 sometimes, always, often 等频率副词的位置。'
    ],
    tags: ['天气', '频率副词'],
    difficulty: 1,
    summary: '询问和描述不同季节的天气和气候。',
    summaryEn: 'Asking about and describing weather in different seasons.',
  },
  {
    id: 51,
    title: 'An interesting climate',
    titleCn: '有趣的气候',
    text: [
      'Where do you come from?',
      'I come from England.',
      'What\'s the climate like in England?',
      'It\'s mild, but it\'s not always pleasant.',
      'The weather\'s often cold in the North and windy in the East.',
      'It\'s often wet in the West and sometimes warm in the South.',
      'Which seasons do you like best?',
      'I like spring and summer.',
      'The days are long and the nights are short.',
      'The sun rises early and sets late.'
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
      { word: 'mild', phonetic: '/maɪld/', meaning: '温和的' },
      { word: 'wet', phonetic: '/wet/', meaning: '潮湿的' },
      { word: 'season', phonetic: '/ˈsiːzn/', meaning: '季节' },
      { word: 'best', phonetic: '/best/', meaning: '最' },
      { word: 'rise', phonetic: '/raɪz/', meaning: '升起' },
      { word: 'set', phonetic: '/set/', meaning: '落下' },
      { word: 'early', phonetic: '/ˈɜːli/', meaning: '早' },
      { word: 'late', phonetic: '/leɪt/', meaning: '晚' }
    ],
    notes: [
      '"Which... do you like best?" 你最喜欢哪个？',
      '"The days are long" 白天长。注意 be 动词的用法。',
      '"rise" 升起（不及物），"set" 落下。'
    ],
    tags: ['季节', '形容词'],
    difficulty: 2,
    summary: '描述英国的气候特点和不同季节。',
    summaryEn: 'Describe the climate of England and different seasons.',
  },
  {
    id: 52,
    title: 'What nationality are they?',
    titleCn: '他们是哪国人？',
    text: [
      'Where do you come from?',
      'I come from Greece.',
      'What nationality are you?',
      'I\'m Greek.',
      'What\'s your name?',
      'My name is Dimitri.',
      'Where do you live?',
      'I live in Athens.',
      'What\'s your job?',
      'I\'m a taxi driver.'
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
      { word: 'nationality', phonetic: '/ˌnæʃəˈnæləti/', meaning: '国籍' },
      { word: 'Greek', phonetic: '/ɡriːk/', meaning: '希腊人' },
      { word: 'Athens', phonetic: '/ˈæθɪnz/', meaning: '雅典' },
      { word: 'job', phonetic: '/dʒɒb/', meaning: '工作' },
      { word: 'taxi driver', phonetic: '/ˈtæksi ˈdraɪvə/', meaning: '出租车司机' }
    ],
    notes: [
      '"What nationality are you?" 你是哪国人？',
      '"I\'m Greek." 我是希腊人。注意国籍首字母大写。',
      '"Where do you live?" 你住在哪里？'
    ],
    tags: ['国籍', '自我介绍'],
    difficulty: 1,
    summary: '询问国籍、姓名、居住地和职业。',
    summaryEn: 'Asking about nationality, name, residence and job.',
  },
  {
    id: 53,
    title: 'An interesting climate',
    titleCn: '一个有趣的气候',
    text: [
      'What nationality are you?',
      'I\'m Swedish.',
      'Where do you come from?',
      'I come from Sweden.',
      'What\'s the climate like in Sweden?',
      'It\'s very cold in winter.',
      'We have snow and ice.',
      'But it\'s very warm in summer.',
      'The days are very long in summer.',
      'And very short in winter.'
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
      { word: 'Swedish', phonetic: '/ˈswiːdɪʃ/', meaning: '瑞典的' },
      { word: 'Sweden', phonetic: '/ˈswiːdn/', meaning: '瑞典' },
      { word: 'snow', phonetic: '/snəʊ/', meaning: '雪' },
      { word: 'ice', phonetic: '/aɪs/', meaning: '冰' },
      { word: 'winter', phonetic: '/ˈwɪntə/', meaning: '冬天' },
      { word: 'summer', phonetic: '/ˈsʌmə/', meaning: '夏天' }
    ],
    notes: [
      '"in winter/summer" 在冬天/夏天。季节前不加the。',
      '"have snow and ice" 有雪和冰。'
    ],
    tags: ['国家和国籍', '季节'],
    difficulty: 1,
    summary: '谈论瑞典的气候——冬天寒冷有雪，夏天温暖白天长。',
    summaryEn: 'Talking about Sweden\'s climate — cold winters with snow, warm summers with long days.',
  },
  {
    id: 54,
    title: 'What\'s the matter with them?',
    titleCn: '他们怎么了？',
    text: [
      'What\'s the matter with them?',
      'They\'re tired.',
      'What\'s the matter with her?',
      'She\'s tired, too.',
      'What\'s the matter with you?',
      'We\'re thirsty.',
      'What\'s the matter with the children?',
      'They\'re hungry.',
      'Are you all right now?',
      'No, we aren\'t. We\'re ill.'
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
      { word: 'tired', phonetic: '/taɪəd/', meaning: '疲倦的' },
      { word: 'thirsty', phonetic: '/ˈθɜːsti/', meaning: '渴的' },
      { word: 'hungry', phonetic: '/ˈhʌŋɡri/', meaning: '饿的' },
      { word: 'ill', phonetic: '/ɪl/', meaning: '生病的' },
      { word: 'matter', phonetic: '/ˈmætə/', meaning: '问题' }
    ],
    notes: [
      '"What\'s the matter with...?" ……怎么了？',
      '注意人称和be动词的搭配：I am, you are, he/she is, they are。'
    ],
    tags: ['身体状态', 'be动词'],
    difficulty: 1,
    summary: '询问和描述身体状态。',
    summaryEn: 'Asking about and describing physical conditions.',
  },
  {
    id: 55,
    title: 'Which book?',
    titleCn: '哪本书？',
    text: [
      'Give me a book please, Jane.',
      'Which book?',
      'The one on the shelf.',
      'This one?',
      'No, not that one. The red one.',
      'This one?',
      'Yes, please.',
      'Here you are.',
      'Thank you.'
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
      ''
    ],
    vocabulary: [
      { word: 'which', phonetic: '/wɪtʃ/', meaning: '哪一个' },
      { word: 'shelf', phonetic: '/ʃelf/', meaning: '架子' },
      { word: 'red', phonetic: '/red/', meaning: '红色的' },
      { word: 'one', phonetic: '/wʌn/', meaning: '一个（代替前面提到的名词）' }
    ],
    notes: [
      '"Which book?" 哪本书？用于选择。',
      '"The one on the shelf" 架子上的那本。one代替book。',
      '"not that one" 不是那个。'
    ],
    tags: ['指示代词', '选择疑问'],
    difficulty: 1,
    summary: '练习用which进行选择，以及one代替名词的用法。',
    summaryEn: 'Practice using which for selection and one as a pronoun.',
  },
  {
    id: 56,
    title: 'Which glasses?',
    titleCn: '哪只杯子？',
    text: [
      'Give me some glasses please, Jane.',
      'Which glasses?',
      'The ones on the shelf.',
      'These?',
      'No, not those. The ones on the table.',
      'These?',
      'Yes, please.',
      'Here you are.',
      'Thank you.'
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
      ''
    ],
    vocabulary: [
      { word: 'glasses', phonetic: '/ˈɡlɑːsɪz/', meaning: '杯子/眼镜' },
      { word: 'shelf', phonetic: '/ʃelf/', meaning: '架子' },
      { word: 'these', phonetic: '/ðiːz/', meaning: '这些' },
      { word: 'those', phonetic: '/ðəʊz/', meaning: '那些' },
      { word: 'ones', phonetic: '/wʌnz/', meaning: '一些（代替复数名词）' }
    ],
    notes: [
      '"The ones on the shelf" 架子上的那些。ones代替glasses。',
      '"these/those" 这些/那些，复数指示代词。'
    ],
    tags: ['复数指示代词', '选择'],
    difficulty: 1,
    summary: '练习复数指示代词these/those和ones的用法。',
    summaryEn: 'Practice plural demonstratives these/those and ones.',
  },
  {
    id: 57,
    title: 'Mrs. Smith\'s kitchen',
    titleCn: '史密斯太太的厨房',
    text: [
      'Mrs. Smith\'s kitchen is small.',
      'There is a refrigerator in the kitchen.',
      'The refrigerator is white.',
      'It is on the right.',
      'There is an electric cooker in the kitchen.',
      'The cooker is blue.',
      'It is on the left.',
      'There is a table in the middle of the room.',
      'There is a bottle on the table.',
      'The bottle is empty.'
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
      { word: 'kitchen', phonetic: '/ˈkɪtʃɪn/', meaning: '厨房' },
      { word: 'refrigerator', phonetic: '/rɪˈfrɪdʒəreɪtə/', meaning: '冰箱' },
      { word: 'electric', phonetic: '/ɪˈlektrɪk/', meaning: '电的' },
      { word: 'cooker', phonetic: '/ˈkʊkə/', meaning: '炉灶' },
      { word: 'empty', phonetic: '/ˈempti/', meaning: '空的' },
      { word: 'right', phonetic: '/raɪt/', meaning: '右边' },
      { word: 'left', phonetic: '/left/', meaning: '左边' },
      { word: 'middle', phonetic: '/ˈmɪdl/', meaning: '中间' }
    ],
    notes: [
      '"on the right/left" 在右边/左边。',
      '"in the middle of" 在……中间。',
      '"There is + 单数名词 + 地点" 某处有某物。'
    ],
    tags: ['There be', '方位介词'],
    difficulty: 1,
    summary: '描述厨房里的物品及其位置。',
    summaryEn: 'Describe items in the kitchen and their locations.',
  },
  {
    id: 58,
    title: 'Mrs. Smith\'s living room',
    titleCn: '史密斯太太的客厅',
    text: [
      'Mrs. Smith\'s living room is large.',
      'There is a television in the room.',
      'The television is near the window.',
      'There are some magazines on the television.',
      'There is a table in the room.',
      'There are some newspapers on the table.',
      'There are some armchairs in the room.',
      'The armchairs are near the table.',
      'There is a stereo in the room.',
      'The stereo is near the door.'
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
      { word: 'living room', phonetic: '/ˈlɪvɪŋ ruːm/', meaning: '客厅' },
      { word: 'television', phonetic: '/ˈtelɪvɪʒn/', meaning: '电视' },
      { word: 'magazine', phonetic: '/ˌmæɡəˈziːn/', meaning: '杂志' },
      { word: 'armchair', phonetic: '/ˈɑːmtʃeə/', meaning: '扶手椅' },
      { word: 'stereo', phonetic: '/ˈsteriəʊ/', meaning: '立体音响' },
      { word: 'near', phonetic: '/nɪə/', meaning: '靠近' },
      { word: 'door', phonetic: '/dɔː/', meaning: '门' },
      { word: 'window', phonetic: '/ˈwɪndəʊ/', meaning: '窗户' }
    ],
    notes: [
      '"near the window" 靠近窗户。',
      'There are + 复数名词 + 地点。'
    ],
    tags: ['There be复数', '客厅物品'],
    difficulty: 1,
    summary: '描述客厅里的物品及其位置。',
    summaryEn: 'Describe items in the living room and their locations.',
  },
  {
    id: 59,
    title: 'Come in, Amy',
    titleCn: '进来，艾米',
    text: [
      'Come in, Amy.',
      'Shut the door, please.',
      'This bedroom\'s very untidy.',
      'Open the window and air the room.',
      'Then put these clothes in the wardrobe.',
      'Then make the bed.',
      'Dust the dressing table.',
      'Then sweep the floor.'
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
      { word: 'shut', phonetic: '/ʃʌt/', meaning: '关上' },
      { word: 'bedroom', phonetic: '/ˈbedruːm/', meaning: '卧室' },
      { word: 'untidy', phonetic: '/ʌnˈtaɪdi/', meaning: '不整洁的' },
      { word: 'air', phonetic: '/eə/', meaning: '通风' },
      { word: 'clothes', phonetic: '/kləʊðz/', meaning: '衣服' },
      { word: 'wardrobe', phonetic: '/ˈwɔːdrəʊb/', meaning: '衣柜' },
      { word: 'dust', phonetic: '/dʌst/', meaning: '除尘' },
      { word: 'sweep', phonetic: '/swiːp/', meaning: '扫' },
      { word: 'floor', phonetic: '/flɔː/', meaning: '地板' }
    ],
    notes: [
      '"make the bed" 整理床铺。',
      '"air the room" 给房间通风。',
      '这些都是祈使句，省略了主语you。'
    ],
    tags: ['祈使句', '家务'],
    difficulty: 1,
    summary: '艾米整理卧室的一系列家务指令。',
    summaryEn: 'Amy receives a series of housework instructions for tidying the bedroom.',
  },
  {
    id: 60,
    title: 'Which dress?',
    titleCn: '哪条裙子？',
    text: [
      'Which dress does Susan like?',
      'She likes the blue one.',
      'Which one?',
      'The one in the shop window.',
      'She doesn\'t like the green one.',
      'She likes the blue one.',
      'Do you like this dress?',
      'I don\'t like the colour.',
      'What colour is it?',
      'It\'s blue.'
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
      { word: 'dress', phonetic: '/dres/', meaning: '裙子' },
      { word: 'blue', phonetic: '/bluː/', meaning: '蓝色的' },
      { word: 'green', phonetic: '/ɡriːn/', meaning: '绿色的' },
      { word: 'colour', phonetic: '/ˈkʌlə/', meaning: '颜色' },
      { word: 'shop', phonetic: '/ʃɒp/', meaning: '商店' },
      { word: 'window', phonetic: '/ˈwɪndəʊ/', meaning: '窗户' }
    ],
    notes: [
      '"Which dress does Susan like?" 一般现在时第三人称单数疑问句。',
      '"the one in the shop window" 商店橱窗里的那件。'
    ],
    tags: ['一般现在时', '颜色'],
    difficulty: 1,
    summary: '讨论喜欢哪条裙子和颜色。',
    summaryEn: 'Discussing which dress and colour Susan likes.',
  },
  {
    id: 61,
    title: 'A fine day',
    titleCn: '晴朗的一天',
    text: [
      'It is a fine day today.',
      'There are some clouds in the sky, but the sun is shining.',
      'Mr. Jones is with his family.',
      'They are walking over the bridge.',
      'There are some boats on the river.',
      'Mr. Jones and his wife are looking at them.',
      'Sally is looking at a big ship.',
      'The ship is going under the bridge.',
      'Tim is looking at an aeroplane.',
      'The aeroplane is flying over the river.'
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
      { word: 'cloud', phonetic: '/klaʊd/', meaning: '云' },
      { word: 'shine', phonetic: '/ʃaɪn/', meaning: '照耀' },
      { word: 'bridge', phonetic: '/brɪdʒ/', meaning: '桥' },
      { word: 'boat', phonetic: '/bəʊt/', meaning: '小船' },
      { word: 'ship', phonetic: '/ʃɪp/', meaning: '大船' },
      { word: 'river', phonetic: '/ˈrɪvə/', meaning: '河流' },
      { word: 'fly', phonetic: '/flaɪ/', meaning: '飞' },
      { word: 'over', phonetic: '/ˈəʊvə/', meaning: '在……上方' }
    ],
    notes: [
      '现在进行时：be + doing。',
      '"over the bridge" 在桥上。',
      '"under the bridge" 在桥下。',
      '"flying over the river" 在河上飞。'
    ],
    tags: ['现在进行时', '方位'],
    difficulty: 1,
    summary: '描述一个晴朗的日子里琼斯一家在桥上看到的景象。',
    summaryEn: 'Describe what the Jones family sees on a fine day on the bridge.',
  },
  {
    id: 62,
    title: 'What are they doing?',
    titleCn: '他们在做什么？',
    text: [
      'What are the children doing?',
      'They\'re playing in the garden.',
      'What is the dog doing?',
      'It\'s sleeping under the tree.',
      'What are the women doing?',
      'They\'re waiting for the bus.',
      'What is the man doing?',
      'He\'s reading a newspaper.',
      'What are the girls doing?',
      'They\'re singing.'
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
      { word: 'play', phonetic: '/pleɪ/', meaning: '玩' },
      { word: 'sleep', phonetic: '/sliːp/', meaning: '睡觉' },
      { word: 'wait', phonetic: '/weɪt/', meaning: '等待' },
      { word: 'read', phonetic: '/riːd/', meaning: '读' },
      { word: 'sing', phonetic: '/sɪŋ/', meaning: '唱' },
      { word: 'bus', phonetic: '/bʌs/', meaning: '公共汽车' }
    ],
    notes: [
      '现在进行时疑问句：What + be + 主语 + doing?',
      '"waiting for" 等待……。'
    ],
    tags: ['现在进行时', '疑问句'],
    difficulty: 1,
    summary: '用现在进行时描述各种正在进行的动作。',
    summaryEn: 'Describe various ongoing actions using the present continuous tense.',
  },
  {
    id: 63,
    title: 'A card from Jimmy',
    titleCn: '吉米寄来的明信片',
    text: [
      'Jimmy\'s in bed.',
      'His mother is looking at his report card.',
      '"Why are you looking at it?" Jimmy asks.',
      '"I\'m looking at your report card," his mother says.',
      '"You have very bad marks in every subject!"',
      '"I know," says Jimmy. "But look at the other side!"',
      '"There are no marks on the other side," says his mother.'
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
      { word: 'report card', phonetic: '/rɪˈpɔːt kɑːd/', meaning: '成绩单' },
      { word: 'mark', phonetic: '/mɑːk/', meaning: '分数' },
      { word: 'subject', phonetic: '/ˈsʌbdʒɪkt/', meaning: '科目' },
      { word: 'side', phonetic: '/saɪd/', meaning: '面' },
      { word: 'other', phonetic: '/ˈʌðə/', meaning: '其他的' },
      { word: 'bad', phonetic: '/bæd/', meaning: '差的' },
      { word: 'every', phonetic: '/ˈevri/', meaning: '每个' }
    ],
    notes: [
      '"in bed" 在床上（睡觉/休息）。',
      '"every subject" 每门科目。',
      '注意现在进行时的问答。'
    ],
    tags: ['现在进行时', '幽默故事'],
    difficulty: 2,
    summary: '吉米的成绩单两面——正面全是差分，反面什么都没有。',
    summaryEn: 'Jimmy\'s report card — bad marks on one side, nothing on the other.',
  },
  {
    id: 64,
    title: 'The Swedish rock band',
    titleCn: '瑞典摇滚乐队',
    text: [
      'There is a rock concert tonight.',
      'The Swedish rock band is playing.',
      'They are very popular.',
      'Many young people are going to the concert.',
      'The band is playing their new songs.',
      'Everyone is enjoying the music.',
      'The singer is singing very well.',
      'The guitarist is playing brilliantly.'
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
      { word: 'rock', phonetic: '/rɒk/', meaning: '摇滚' },
      { word: 'concert', phonetic: '/ˈkɒnsət/', meaning: '音乐会' },
      { word: 'band', phonetic: '/bænd/', meaning: '乐队' },
      { word: 'popular', phonetic: '/ˈpɒpjələ/', meaning: '受欢迎的' },
      { word: 'singer', phonetic: '/ˈsɪŋə/', meaning: '歌手' },
      { word: 'guitarist', phonetic: '/ɡɪˈtɑːrɪst/', meaning: '吉他手' },
      { word: 'music', phonetic: '/ˈmjuːzɪk/', meaning: '音乐' },
      { word: 'brilliantly', phonetic: '/ˈbrɪliəntli/', meaning: '出色地' }
    ],
    notes: [
      '"There is" 表示有。',
      '"be going to" 去做……。',
      '"enjoying the music" 享受音乐。'
    ],
    tags: ['现在进行时', '音乐'],
    difficulty: 2,
    summary: '描述一场瑞典摇滚乐队的音乐会。',
    summaryEn: 'Describe a Swedish rock band concert.',
  },
  {
    id: 65,
    title: 'SOS',
    titleCn: '求救信号',
    text: [
      'When did the plane land?',
      'It landed at midnight.',
      'Who was at the airport?',
      'A large crowd of people was at the airport.',
      'Why were they there?',
      'They were waiting for the plane.',
      'What happened?',
      'The plane landed safely.',
      'Everyone was relieved.'
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
      ''
    ],
    vocabulary: [
      { word: 'land', phonetic: '/lænd/', meaning: '着陆' },
      { word: 'midnight', phonetic: '/ˈmɪdnaɪt/', meaning: '午夜' },
      { word: 'airport', phonetic: '/ˈeəpɔːt/', meaning: '机场' },
      { word: 'crowd', phonetic: '/kraʊd/', meaning: '人群' },
      { word: 'safely', phonetic: '/ˈseɪfli/', meaning: '安全地' },
      { word: 'relieved', phonetic: '/rɪˈliːvd/', meaning: '宽慰的' },
      { word: 'happen', phonetic: '/ˈhæpən/', meaning: '发生' }
    ],
    notes: [
      '一般过去时：landed, was, were, happened。',
      '"a large crowd of" 一大群。',
      '"waiting for" 等待。'
    ],
    tags: ['一般过去时', '机场'],
    difficulty: 2,
    summary: '描述飞机安全着陆，焦急等待的人群终于松了口气。',
    summaryEn: 'A plane lands safely at midnight, relieving the anxious crowd.',
  },
  {
    id: 66,
    title: 'A game of cricket',
    titleCn: '一场板球赛',
    text: [
      'We played cricket yesterday.',
      'It was a beautiful day.',
      'The sun was shining and there was no wind.',
      'Our team batted first.',
      'I scored fifty runs.',
      'My friend scored thirty.',
      'We were very pleased.',
      'The other team played well too.',
      'But we won the match.'
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
      ''
    ],
    vocabulary: [
      { word: 'cricket', phonetic: '/ˈkrɪkɪt/', meaning: '板球' },
      { word: 'yesterday', phonetic: '/ˈjestədeɪ/', meaning: '昨天' },
      { word: 'team', phonetic: '/tiːm/', meaning: '队伍' },
      { word: 'bat', phonetic: '/bæt/', meaning: '击球' },
      { word: 'score', phonetic: '/skɔː/', meaning: '得分' },
      { word: 'runs', phonetic: '/rʌnz/', meaning: '跑分' },
      { word: 'win', phonetic: '/wɪn/', meaning: '赢' },
      { word: 'match', phonetic: '/mætʃ/', meaning: '比赛' }
    ],
    notes: [
      '一般过去时：played, was, scored, won。',
      '"batted first" 先击球。',
      '"won the match" 赢了比赛。win-won-won。'
    ],
    tags: ['一般过去时', '运动'],
    difficulty: 2,
    summary: '描述昨天的一场板球赛——我们队赢了。',
    summaryEn: 'Describe a cricket match we won yesterday.',
  },
  {
    id: 67,
    title: 'The weekend',
    titleCn: '周末',
    text: [
      'What did you do last weekend?',
      'I went to the countryside.',
      'Did you have a good time?',
      'Yes, I did. The weather was wonderful.',
      'What did you see?',
      'I saw some beautiful flowers and birds.',
      'Did you take any photos?',
      'Yes, I took a lot of photos.',
      'What did you eat?',
      'I ate some local food. It was delicious.'
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
      { word: 'countryside', phonetic: '/ˈkʌntrisaɪd/', meaning: '乡村' },
      { word: 'wonderful', phonetic: '/ˈwʌndəfl/', meaning: '精彩的' },
      { word: 'flower', phonetic: '/ˈflaʊə/', meaning: '花' },
      { word: 'photo', phonetic: '/ˈfəʊtəʊ/', meaning: '照片' },
      { word: 'local', phonetic: '/ˈləʊkl/', meaning: '当地的' },
      { word: 'delicious', phonetic: '/dɪˈlɪʃəs/', meaning: '美味的' },
      { word: 'eat', phonetic: '/iːt/', meaning: '吃' },
      { word: 'take', phonetic: '/teɪk/', meaning: '拍（照）' }
    ],
    notes: [
      '"What did you do?" 你做了什么？一般过去时疑问句。',
      '"Did you...?" 一般过去时一般疑问句。',
      '"went" 是go的过去式，"ate" 是eat的过去式。'
    ],
    tags: ['一般过去时', '周末活动'],
    difficulty: 2,
    summary: '讨论上周末的活动——去乡村、拍照、品尝当地美食。',
    summaryEn: 'Discuss weekend activities — countryside trip, photos, local food.',
  },
  {
    id: 68,
    title: 'A car race',
    titleCn: '一场汽车比赛',
    text: [
      'There was a car race near our town last year.',
      'It was very exciting.',
      'A lot of people watched it.',
      'My friend and I went to see it.',
      'We arrived early and found good seats.',
      'Five cars took part in the race.',
      'One car was very fast.',
      'It won the race.',
      'The driver was very happy.'
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
      ''
    ],
    vocabulary: [
      { word: 'race', phonetic: '/reɪs/', meaning: '比赛' },
      { word: 'exciting', phonetic: '/ɪkˈsaɪtɪŋ/', meaning: '令人兴奋的' },
      { word: 'watch', phonetic: '/wɒtʃ/', meaning: '观看' },
      { word: 'arrive', phonetic: '/əˈraɪv/', meaning: '到达' },
      { word: 'early', phonetic: '/ˈɜːli/', meaning: '早' },
      { word: 'driver', phonetic: '/ˈdraɪvə/', meaning: '司机' },
      { word: 'fast', phonetic: '/fɑːst/', meaning: '快的' },
      { word: 'take part in', phonetic: '/teɪk pɑːt ɪn/', meaning: '参加' }
    ],
    notes: [
      '"There was" 过去时的There be。',
      '"took part in" 参加。take-took-taken。',
      '"found" 是find的过去式。'
    ],
    tags: ['一般过去时', '比赛'],
    difficulty: 2,
    summary: '描述去年的一场激动人心的汽车比赛。',
    summaryEn: 'Describe an exciting car race near our town last year.',
  },
  {
    id: 69,
    title: 'He says... that...',
    titleCn: '他说……',
    text: [
      'What does he say?',
      'He says that he feels tired.',
      'What does she say?',
      'She says that she feels ill.',
      'What do they say?',
      'They say that they feel cold.',
      'What do you say?',
      'I say that I feel hungry.'
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
      { word: 'say', phonetic: '/seɪ/', meaning: '说' },
      { word: 'feel', phonetic: '/fiːl/', meaning: '感觉' },
      { word: 'tired', phonetic: '/taɪəd/', meaning: '累的' },
      { word: 'ill', phonetic: '/ɪl/', meaning: '生病的' },
      { word: 'cold', phonetic: '/kəʊld/', meaning: '冷的' },
      { word: 'hungry', phonetic: '/ˈhʌŋɡri/', meaning: '饿的' }
    ],
    notes: [
      '间接引语：He says that...',
      '"that" 可以省略。',
      '注意时态一致：says + feels（都用一般现在时）。'
    ],
    tags: ['间接引语', '宾语从句'],
    difficulty: 2,
    summary: '练习间接引语的基本结构。',
    summaryEn: 'Practice the basic structure of indirect speech.',
  },
  {
    id: 70,
    title: 'He said... that...',
    titleCn: '他说了……',
    text: [
      'What did he say?',
      'He said that he felt tired.',
      'What did she say?',
      'She said that she felt ill.',
      'What did they say?',
      'They say that they felt cold.',
      'What did you say?',
      'I said that I felt hungry.'
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
      { word: 'said', phonetic: '/sed/', meaning: '说（过去式）' },
      { word: 'felt', phonetic: '/felt/', meaning: '感觉（过去式）' },
      { word: 'tired', phonetic: '/taɪəd/', meaning: '累的' },
      { word: 'ill', phonetic: '/ɪl/', meaning: '生病的' },
      { word: 'cold', phonetic: '/kəʊld/', meaning: '冷的' },
      { word: 'hungry', phonetic: '/ˈhʌŋɡri/', meaning: '饿的' }
    ],
    notes: [
      '间接引语过去时：He said that... felt...',
      '时态后退：say→said, feel→felt。',
      'said是say的过去式，felt是feel的过去式。'
    ],
    tags: ['间接引语', '时态后退'],
    difficulty: 2,
    summary: '练习过去时间的间接引语——时态需要后退。',
    summaryEn: 'Practice indirect speech in the past — tense backshift.',
  },
  {
    id: 71,
    title: 'A famous clock',
    titleCn: '一座著名的大钟',
    text: [
      'Big Ben is the name of the great clock in London.',
      'It is in the tower of the Palace of Westminster.',
      'The clock was named after Sir Benjamin Hall.',
      'He was a very tall man.',
      'The clock is very accurate.',
      'It has rarely stopped.',
      'Even when it has stopped, it starts again quickly.',
      'Big Ben has become one of London\'s most famous landmarks.'
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
      { word: 'clock', phonetic: '/klɒk/', meaning: '钟' },
      { word: 'tower', phonetic: '/ˈtaʊə/', meaning: '塔' },
      { word: 'palace', phonetic: '/ˈpælɪs/', meaning: '宫殿' },
      { word: 'accurate', phonetic: '/ˈækjərət/', meaning: '准确的' },
      { word: 'rarely', phonetic: '/ˈreəli/', meaning: '很少' },
      { word: 'landmark', phonetic: '/ˈlændmɑːk/', meaning: '地标' },
      { word: 'named after', phonetic: '/neɪmd ˈɑːftə/', meaning: '以……命名' },
      { word: 'Westminster', phonetic: '/ˈwestmɪnstə/', meaning: '威斯敏斯特' }
    ],
    notes: [
      '"named after" 以……命名。',
      '"has rarely stopped" 很很少停止。现在完成时。',
      '"Even when" 即使当……。'
    ],
    tags: ['地标', '现在完成时'],
    difficulty: 2,
    summary: '介绍伦敦著名的大本钟——以本杰明·霍尔爵士命名的精准大钟。',
    summaryEn: 'Introduce London\'s Big Ben — the accurate clock named after Sir Benjamin Hall.',
  },
  {
    id: 72,
    title: 'A car called Bluebird',
    titleCn: '一辆叫蓝鸟的车',
    text: [
      'The racing car Bluebird was driven by Sir Malcolm Campbell.',
      'It was a very fast car.',
      'In 1935, Campbell drove it at over 300 miles per hour.',
      'He broke the world speed record.',
      'The car was painted blue.',
      'It had a very powerful engine.',
      'After the record, Campbell became very famous.',
      'The car is now in a museum.'
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
      { word: 'racing', phonetic: '/ˈreɪsɪŋ/', meaning: '赛车' },
      { word: 'drive', phonetic: '/draɪv/', meaning: '驾驶' },
      { word: 'record', phonetic: '/ˈrekɔːd/', meaning: '记录' },
      { word: 'speed', phonetic: '/spiːd/', meaning: '速度' },
      { word: 'powerful', phonetic: '/ˈpaʊəfl/', meaning: '强大的' },
      { word: 'engine', phonetic: '/ˈendʒɪn/', meaning: '发动机' },
      { word: 'museum', phonetic: '/mjuˈziːəm/', meaning: '博物馆' },
      { word: 'paint', phonetic: '/peɪnt/', meaning: '涂漆' }
    ],
    notes: [
      '"driven by" 被……驾驶。过去分词表被动。',
      '"at over 300 miles per hour" 以每小时300多英里的速度。',
      '"broke the world speed record" 打破了世界速度纪录。'
    ],
    tags: ['被动语态', '赛车'],
    difficulty: 2,
    summary: '讲述马尔科姆·坎贝尔爵士驾驶蓝鸟赛车打破世界纪录的故事。',
    summaryEn: 'The story of Sir Malcolm Campbell breaking the world speed record in Bluebird.',
  },
  {
    id: 73,
    title: 'The record-holder',
    titleCn: '纪录保持者',
    text: [
      'Who is the record-holder?',
      'A boy from Turkey holds the record.',
      'He walked from Istanbul to London.',
      'It took him three months.',
      'He walked through seven countries.',
      'He had no money and no food.',
      'People gave him food and water along the way.',
      'He was very tired when he arrived in London.'
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
      { word: 'record-holder', phonetic: '/ˈrekɔːd ˈhəʊldə/', meaning: '纪录保持者' },
      { word: 'Turkey', phonetic: '/ˈtɜːki/', meaning: '土耳其' },
      { word: 'Istanbul', phonetic: '/ˌɪstænˈbuːl/', meaning: '伊斯坦布尔' },
      { word: 'month', phonetic: '/mʌnθ/', meaning: '月' },
      { word: 'through', phonetic: '/θruː/', meaning: '穿过' },
      { word: 'along', phonetic: '/əˈlɒŋ/', meaning: '沿着' },
      { word: 'arrive', phonetic: '/əˈraɪv/', meaning: '到达' }
    ],
    notes: [
      '"It took him three months" 花了他三个月。take表示花费时间。',
      '"along the way" 沿途。',
      '"from... to..." 从……到……。'
    ],
    tags: ['一般过去时', '旅行'],
    difficulty: 2,
    summary: '一个土耳其男孩从伊斯坦布尔走到伦敦，花了三个月。',
    summaryEn: 'A boy from Turkey walked from Istanbul to London in three months.',
  },
  {
    id: 74,
    title: 'Out of the limelight',
    titleCn: '远离聚光灯',
    text: [
      'A famous actress arrived at a small hotel.',
      'She wanted a quiet room.',
      'She didn\'t want anyone to know she was there.',
      'But a young man recognized her.',
      'He asked for her autograph.',
      'The actress refused.',
      'She said she was very tired.',
      'She just wanted to be alone.'
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
      { word: 'actress', phonetic: '/ˈæktrɪs/', meaning: '女演员' },
      { word: 'hotel', phonetic: '/həʊˈtel/', meaning: '旅馆' },
      { word: 'quiet', phonetic: '/ˈkwaɪət/', meaning: '安静的' },
      { word: 'recognize', phonetic: '/ˈrekəɡnaɪz/', meaning: '认出' },
      { word: 'autograph', phonetic: '/ˈɔːtəɡrɑːf/', meaning: '亲笔签名' },
      { word: 'refuse', phonetic: '/rɪˈfjuːz/', meaning: '拒绝' },
      { word: 'alone', phonetic: '/əˈləʊn/', meaning: '独自的' },
      { word: 'limelight', phonetic: '/ˈlaɪmlaɪt/', meaning: '聚光灯' }
    ],
    notes: [
      '"Out of the limelight" 远离聚光灯/公众视线。',
      '"ask for" 请求。',
      '"wanted to be alone" 想独处。'
    ],
    tags: ['一般过去时', '名人'],
    difficulty: 2,
    summary: '一位著名女演员想在小旅馆安静休息，却被粉丝认出。',
    summaryEn: 'A famous actress tries to rest quietly at a small hotel but is recognized.',
  },
  {
    id: 75,
    title: 'SOS',
    titleCn: '求救信号',
    text: [
      'A woman was travelling alone in a boat.',
      'The boat hit a rock and began to sink.',
      'The woman sent an SOS signal.',
      'A ship received the signal and changed course.',
      'It arrived at the scene two hours later.',
      'The woman was sitting on the boat when the ship found her.',
      'She was very cold but still alive.',
      'The ship rescued her.'
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
      { word: 'signal', phonetic: '/ˈsɪɡnəl/', meaning: '信号' },
      { word: 'receive', phonetic: '/rɪˈsiːv/', meaning: '收到' },
      { word: 'course', phonetic: '/kɔːs/', meaning: '航线' },
      { word: 'scene', phonetic: '/siːn/', meaning: '现场' },
      { word: 'rescue', phonetic: '/ˈreskjuː/', meaning: '营救' },
      { word: 'alive', phonetic: '/əˈlaɪv/', meaning: '活着的' },
      { word: 'sink', phonetic: '/sɪŋk/', meaning: '沉没' },
      { word: 'rock', phonetic: '/rɒk/', meaning: '岩石' }
    ],
    notes: [
      '"began to sink" 开始沉没。begin-began-began。',
      '"changed course" 改变航线。',
      '"was sitting" 过去进行时——她正坐着时被发现。'
    ],
    tags: ['过去进行时', '海上救援'],
    difficulty: 2,
    summary: '一位妇女的船触礁沉没，发求救信号后被营救。',
    summaryEn: 'A woman\'s boat hits a rock and sinks; she sends SOS and is rescued.',
  },
  {
    id: 76,
    title: 'April Fools\' Day',
    titleCn: '愚人节',
    text: [
      'It was April Fools\' Day.',
      'The reporter on TV said that the spaghetti harvest was very good this year.',
      'He showed pictures of people picking spaghetti from trees.',
      'Many people believed the story.',
      'They called the TV station to ask how to grow spaghetti trees.',
      'The reporter told them to put spaghetti in tomato sauce.'
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
      { word: 'reporter', phonetic: '/rɪˈpɔːtə/', meaning: '记者' },
      { word: 'spaghetti', phonetic: '/spəˈɡeti/', meaning: '意大利面' },
      { word: 'harvest', phonetic: '/ˈhɑːvɪst/', meaning: '收获' },
      { word: 'believe', phonetic: '/bɪˈliːv/', meaning: '相信' },
      { word: 'station', phonetic: '/ˈsteɪʃn/', meaning: '电视台' },
      { word: 'sauce', phonetic: '/sɔːs/', meaning: '酱' },
      { word: 'grow', phonetic: '/ɡrəʊ/', meaning: '种植' },
      { word: 'pick', phonetic: '/pɪk/', meaning: '摘' }
    ],
    notes: [
      'April Fools\' Day 愚人节（4月1日）。',
      '"believed the story" 相信了这个故事。',
      '"how to grow" 如何种植。疑问词+不定式。'
    ],
    tags: ['愚人节', '幽默故事'],
    difficulty: 2,
    summary: '愚人节电视新闻恶作剧——说意大利面从树上收获。',
    summaryEn: 'April Fools\' Day TV hoax — spaghetti harvest from trees.',
  },
  {
    id: 77,
    title: 'A successful operation',
    titleCn: '一次成功的手术',
    text: [
      'Doctors at a hospital in London performed a very unusual operation.',
      'They separated two conjoined twins.',
      'The operation lasted twelve hours.',
      'Both twins survived.',
      'The parents were very happy.',
      'The doctors were very pleased with the result.'
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
      { word: 'hospital', phonetic: '/ˈhɒspɪtl/', meaning: '医院' },
      { word: 'perform', phonetic: '/pəˈfɔːm/', meaning: '执行' },
      { word: 'unusual', phonetic: '/ʌnˈjuːʒuəl/', meaning: '不寻常的' },
      { word: 'separate', phonetic: '/ˈsepəreɪt/', meaning: '分离' },
      { word: 'conjoined', phonetic: '/kənˈdʒɔɪnd/', meaning: '连体的' },
      { word: 'twins', phonetic: '/twɪnz/', meaning: '双胞胎' },
      { word: 'survive', phonetic: '/səˈvaɪv/', meaning: '存活' },
      { word: 'last', phonetic: '/lɑːst/', meaning: '持续' }
    ],
    notes: [
      '"performed an operation" 做手术。',
      '"lasted twelve hours" 持续了12小时。',
      '"pleased with" 对……满意。'
    ],
    tags: ['医学', '一般过去时'],
    difficulty: 2,
    summary: '伦敦医院成功分离连体双胞胎的手术。',
    summaryEn: 'London doctors successfully separate conjoined twins.',
  },
  {
    id: 78,
    title: 'The last one?',
    titleCn: '最后一支？',
    text: [
      'I enjoy smoking very much.',
      'My wife wants me to stop smoking.',
      'She says it\'s bad for my health.',
      'I\'ve tried to stop several times.',
      'But I always start again.',
      'This is my last cigarette.',
      'I\'m going to stop after this one.',
      'I promise!'
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
      { word: 'smoke', phonetic: '/sməʊk/', meaning: '吸烟' },
      { word: 'cigarette', phonetic: '/ˌsɪɡəˈret/', meaning: '香烟' },
      { word: 'stop', phonetic: '/stɒp/', meaning: '停止' },
      { word: 'health', phonetic: '/helθ/', meaning: '健康' },
      { word: 'several', phonetic: '/ˈsevrəl/', meaning: '几个' },
      { word: 'promise', phonetic: '/ˈprɒmɪs/', meaning: '承诺' },
      { word: 'try', phonetic: '/traɪ/', meaning: '尝试' },
      { word: 'bad', phonetic: '/bæd/', meaning: '坏的' }
    ],
    notes: [
      '"enjoy doing" 喜欢做某事。',
      '"stop doing" 停止做某事。',
      '"be bad for" 对……有害。',
      '"I promise!" 我保证！'
    ],
    tags: ['戒烟', 'enjoy/stop+doing'],
    difficulty: 2,
    summary: '一个烟民试图戒烟的故事——每次都说是最后一支。',
    summaryEn: 'A smoker tries to quit — always saying "this is the last one."',
  },
  {
    id: 79,
    title: 'By air',
    titleCn: '乘飞机',
    text: [
      'I used to travel by air a great deal.',
      'I used to be afraid of flying.',
      'But I\'m not afraid any more.',
      'The plane took off and everything was fine.',
      'Then there was a loud noise.',
      'The plane began to shake.',
      'The captain told us not to worry.',
      'He said it was just a bird hitting the engine.'
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
      { word: 'used to', phonetic: '/juːst tuː/', meaning: '过去常常' },
      { word: 'afraid', phonetic: '/əˈfreɪd/', meaning: '害怕的' },
      { word: 'take off', phonetic: '/teɪk ɒf/', meaning: '起飞' },
      { word: 'noise', phonetic: '/nɔɪz/', meaning: '噪音' },
      { word: 'shake', phonetic: '/ʃeɪk/', meaning: '摇晃' },
      { word: 'captain', phonetic: '/ˈkæptɪn/', meaning: '机长' },
      { word: 'worry', phonetic: '/ˈwʌri/', meaning: '担心' },
      { word: 'engine', phonetic: '/ˈendʒɪn/', meaning: '发动机' }
    ],
    notes: [
      '"used to" 过去常常（现在不了）。',
      '"be afraid of" 害怕……。',
      '"told us not to worry" 告诉我们不要担心。不定式的否定。'
    ],
    tags: ['used to', '飞行经历'],
    difficulty: 2,
    summary: '描述一次飞行中遇到鸟击发动机的惊险经历。',
    summaryEn: 'A frightening flight experience when a bird hits the engine.',
  },
  {
    id: 80,
    title: 'The Crystal Palace',
    titleCn: '水晶宫',
    text: [
      'The Crystal Palace was built in 1851.',
      'It was designed by Joseph Paxton.',
      'It was made of iron and glass.',
      'The palace was enormous.',
      'It was bigger than any building in the world.',
      'Six million people visited it.',
      'The palace was moved to South London after the exhibition.',
      'It burned down in 1936.'
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
      { word: 'crystal', phonetic: '/ˈkrɪstl/', meaning: '水晶' },
      { word: 'palace', phonetic: '/ˈpælɪs/', meaning: '宫殿' },
      { word: 'design', phonetic: '/dɪˈzaɪn/', meaning: '设计' },
      { word: 'iron', phonetic: '/ˈaɪən/', meaning: '铁' },
      { word: 'enormous', phonetic: '/ɪˈnɔːməs/', meaning: '巨大的' },
      { word: 'exhibition', phonetic: '/ˌeksɪˈbɪʃn/', meaning: '展览' },
      { word: 'burn down', phonetic: '/bɜːn daʊn/', meaning: '烧毁' },
      { word: 'million', phonetic: '/ˈmɪljən/', meaning: '百万' }
    ],
    notes: [
      '"was built" 被建造。被动语态。',
      '"made of" 由……制成。',
      '"bigger than" 比……大。比较级。'
    ],
    tags: ['被动语态', '历史建筑'],
    difficulty: 2,
    summary: '介绍1851年建造的水晶宫——比当时任何建筑都大。',
    summaryEn: 'Introduce the Crystal Palace built in 1851 — bigger than any building of its time.',
  },
  {
    id: 81,
    title: 'Escape',
    titleCn: '逃脱',
    text: [
      'The prisoner escaped from jail.',
      'He climbed over the wall.',
      'A guard saw him and shouted.',
      'The prisoner ran across the field.',
      'He jumped into a river and swam to the other side.',
      'He ran into a forest and hid there.',
      'The police searched for him for three days.',
      'But they never found him.'
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
      { word: 'prisoner', phonetic: '/ˈprɪznə/', meaning: '囚犯' },
      { word: 'escape', phonetic: '/ɪˈskeɪp/', meaning: '逃脱' },
      { word: 'jail', phonetic: '/dʒeɪl/', meaning: '监狱' },
      { word: 'guard', phonetic: '/ɡɑːd/', meaning: '守卫' },
      { word: 'shout', phonetic: '/ʃaʊt/', meaning: '喊叫' },
      { word: 'field', phonetic: '/fiːld/', meaning: '田野' },
      { word: 'forest', phonetic: '/ˈfɒrɪst/', meaning: '森林' },
      { word: 'hide', phonetic: '/haɪd/', meaning: '躲藏' },
      { word: 'search', phonetic: '/sɜːtʃ/', meaning: '搜寻' }
    ],
    notes: [
      '"escaped from" 从……逃脱。',
      '"climbed over" 爬过。',
      '"searched for" 搜寻。'
    ],
    tags: ['一般过去时', '故事'],
    difficulty: 2,
    summary: '一个囚犯越狱逃跑的故事。',
    summaryEn: 'A story of a prisoner escaping from jail.',
  },
  {
    id: 82,
    title: 'Monster or fish?',
    titleCn: '是怪物还是鱼？',
    text: [
      'Fishermen often tell strange stories.',
      'Some say they have seen monsters in the sea.',
      'A fisherman in Scotland caught a strange fish recently.',
      'It was very large and had a peculiar shape.',
      'Scientists examined it carefully.',
      'They said it was a very rare type of fish.',
      'It was not a monster at all.'
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
      { word: 'fisherman', phonetic: '/ˈfɪʃəmən/', meaning: '渔夫' },
      { word: 'monster', phonetic: '/ˈmɒnstə/', meaning: '怪物' },
      { word: 'Scotland', phonetic: '/ˈskɒtlənd/', meaning: '苏格兰' },
      { word: 'peculiar', phonetic: '/pɪˈkjuːliə/', meaning: '奇怪的' },
      { word: 'shape', phonetic: '/ʃeɪp/', meaning: '形状' },
      { word: 'examine', phonetic: '/ɪɡˈzæmɪn/', meaning: '检查' },
      { word: 'carefully', phonetic: '/ˈkeəfəli/', meaning: '仔细地' },
      { word: 'rare', phonetic: '/reə/', meaning: '罕见的' }
    ],
    notes: [
      '"tell strange stories" 讲奇怪的故事。',
      '"not... at all" 一点也不。',
      '"a rare type of" 一种罕见的……。'
    ],
    tags: ['一般过去时', '科学发现'],
    difficulty: 2,
    summary: '渔夫捕到的"怪物"其实是一种罕见的鱼。',
    summaryEn: 'A "monster" caught by a fisherman turns out to be a rare fish.',
  },
  {
    id: 83,
    title: 'After the elections',
    titleCn: '选举之后',
    text: [
      'The elections were held last week.',
      'A new government was formed.',
      'The old prime minister resigned.',
      'He had been in power for ten years.',
      'The new prime minister is a young man.',
      'He promised to reduce taxes.',
      'He also promised to improve education.',
      'People are hopeful about the future.'
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
      { word: 'election', phonetic: '/ɪˈlekʃn/', meaning: '选举' },
      { word: 'government', phonetic: '/ˈɡʌvənmənt/', meaning: '政府' },
      { word: 'prime minister', phonetic: '/praɪm ˈmɪnɪstə/', meaning: '首相' },
      { word: 'resign', phonetic: '/rɪˈzaɪn/', meaning: '辞职' },
      { word: 'power', phonetic: '/ˈpaʊə/', meaning: '权力' },
      { word: 'reduce', phonetic: '/rɪˈdjuːs/', meaning: '减少' },
      { word: 'improve', phonetic: '/ɪmˈpruːv/', meaning: '改善' },
      { word: 'hopeful', phonetic: '/ˈhəʊpfl/', meaning: '充满希望的' }
    ],
    notes: [
      '"were held" 被举行。被动语态。',
      '"in power" 执政。',
      '"promised to" 承诺做……。'
    ],
    tags: ['政治', '被动语态'],
    difficulty: 3,
    summary: '选举后新政府成立，新首相承诺减税和改善教育。',
    summaryEn: 'After elections, a new government is formed with promises of tax cuts and education.',
  },
  {
    id: 84,
    title: 'On strike',
    titleCn: '罢工',
    text: [
      'The bus drivers are on strike.',
      'They want higher wages.',
      'The strike has lasted for two days.',
      'People have to walk to work.',
      'Some people ride bicycles.',
      'The government is trying to solve the problem.',
      'The drivers say they will not go back to work until their demands are met.'
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
      { word: 'strike', phonetic: '/straɪk/', meaning: '罢工' },
      { word: 'driver', phonetic: '/ˈdraɪvə/', meaning: '司机' },
      { word: 'wage', phonetic: '/weɪdʒ/', meaning: '工资' },
      { word: 'bicycle', phonetic: '/ˈbaɪsɪkl/', meaning: '自行车' },
      { word: 'solve', phonetic: '/sɒlv/', meaning: '解决' },
      { word: 'demand', phonetic: '/dɪˈmɑːnd/', meaning: '要求' },
      { word: 'until', phonetic: '/ənˈtɪl/', meaning: '直到' },
      { word: 'ride', phonetic: '/raɪd/', meaning: '骑' }
    ],
    notes: [
      '"on strike" 罢工中。',
      '"have to" 不得不。',
      '"not... until" 直到……才。'
    ],
    tags: ['社会新闻', '现在完成时'],
    difficulty: 2,
    summary: '公交司机罢工要求加薪，人们不得不步行上班。',
    summaryEn: 'Bus drivers go on strike for higher wages; people have to walk to work.',
  },
  {
    id: 85,
    title: 'Never too old to learn',
    titleCn: '活到老学到老',
    text: [
      'A man is never too old to learn.',
      'My grandfather started learning English at the age of seventy.',
      'He goes to classes every week.',
      'He reads English books and watches English films.',
      'He can now have simple conversations in English.',
      'He says it keeps his mind active.'
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
      { word: 'grandfather', phonetic: '/ˈɡrænfɑːðə/', meaning: '祖父' },
      { word: 'age', phonetic: '/eɪdʒ/', meaning: '年龄' },
      { word: 'class', phonetic: '/klɑːs/', meaning: '课程' },
      { word: 'conversation', phonetic: '/ˌkɒnvəˈseɪʃn/', meaning: '对话' },
      { word: 'simple', phonetic: '/ˈsɪmpl/', meaning: '简单的' },
      { word: 'active', phonetic: '/ˈæktɪv/', meaning: '活跃的' },
      { word: 'mind', phonetic: '/maɪnd/', meaning: '头脑' },
      { word: 'learn', phonetic: '/lɜːn/', meaning: '学习' }
    ],
    notes: [
      '"never too old to learn" 活到老学到老。',
      '"at the age of" 在……岁时。',
      '"keeps his mind active" 保持头脑活跃。'
    ],
    tags: ['学习', '人生哲理'],
    difficulty: 2,
    summary: '一位老人70岁开始学英语的故事——活到老学到老。',
    summaryEn: 'A grandfather starts learning English at 70 — never too old to learn.',
  },
  {
    id: 86,
    title: 'Out of control',
    titleCn: '失控',
    text: [
      'The car went out of control.',
      'It was going very fast down the hill.',
      'The driver tried to stop it.',
      'But the brakes didn\'t work.',
      'The car hit a tree and stopped.',
      'The driver was not hurt.',
      'He was very lucky.'
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
      { word: 'control', phonetic: '/kənˈtrəʊl/', meaning: '控制' },
      { word: 'hill', phonetic: '/hɪl/', meaning: '小山' },
      { word: 'brake', phonetic: '/breɪk/', meaning: '刹车' },
      { word: 'work', phonetic: '/wɜːk/', meaning: '工作/运转' },
      { word: 'hurt', phonetic: '/hɜːt/', meaning: '受伤' },
      { word: 'lucky', phonetic: '/ˈlʌki/', meaning: '幸运的' },
      { word: 'hit', phonetic: '/hɪt/', meaning: '撞' },
      { word: 'stop', phonetic: '/stɒp/', meaning: '停' }
    ],
    notes: [
      '"out of control" 失控。',
      '"go down the hill" 下山。',
      '"didn\'t work" 不工作/失灵。'
    ],
    tags: ['一般过去时', '事故'],
    difficulty: 2,
    summary: '一辆车失控冲下山坡，撞树停下，司机幸运未受伤。',
    summaryEn: 'A car goes out of control down a hill but the driver is unhurt.',
  },
  {
    id: 87,
    title: 'A perfect alibi',
    titleCn: '完美的不在场证明',
    text: [
      'The man said he was at the cinema at the time of the crime.',
      'He said he was watching a film.',
      'The police checked his story.',
      'They went to the cinema and asked the manager.',
      'The manager said the cinema was closed that night.',
      'The man\'s alibi was not true.'
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
      { word: 'alibi', phonetic: '/ˈælɪbaɪ/', meaning: '不在场证明' },
      { word: 'crime', phonetic: '/kraɪm/', meaning: '犯罪' },
      { word: 'cinema', phonetic: '/ˈsɪnəmə/', meaning: '电影院' },
      { word: 'check', phonetic: '/tʃek/', meaning: '核实' },
      { word: 'manager', phonetic: '/ˈmænɪdʒə/', meaning: '经理' },
      { word: 'closed', phonetic: '/kləʊzd/', meaning: '关闭的' },
      { word: 'story', phonetic: '/ˈstɔːri/', meaning: '说辞' },
      { word: 'true', phonetic: '/truː/', meaning: '真实的' }
    ],
    notes: [
      '"at the time of" 在……的时候。',
      '"checked his story" 核实了他的说辞。',
      '"was not true" 不是真的。'
    ],
    tags: ['间接引语', '侦探故事'],
    difficulty: 2,
    summary: '一个嫌疑人的不在场证明被揭穿——电影院那晚没开门。',
    summaryEn: 'A suspect\'s alibi is disproved — the cinema was closed that night.',
  },
  {
    id: 88,
    title: 'A slip of the tongue',
    titleCn: '口误',
    text: [
      'The speaker was very nervous.',
      'He made several mistakes during his speech.',
      'He said "ladies and jellyfish" instead of "ladies and gentlemen".',
      'Everyone laughed.',
      'He was very embarrassed.',
      'He tried to continue but made more mistakes.',
      'Finally, he sat down and said nothing more.'
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
      { word: 'speaker', phonetic: '/ˈspiːkə/', meaning: '演讲者' },
      { word: 'nervous', phonetic: '/ˈnɜːvəs/', meaning: '紧张的' },
      { word: 'mistake', phonetic: '/mɪˈsteɪk/', meaning: '错误' },
      { word: 'speech', phonetic: '/spiːtʃ/', meaning: '演讲' },
      { word: 'instead of', phonetic: '/ɪnˈsted ɒv/', meaning: '代替' },
      { word: 'embarrassed', phonetic: '/ɪmˈbærəst/', meaning: '尴尬的' },
      { word: 'laugh', phonetic: '/lɑːf/', meaning: '笑' },
      { word: 'finally', phonetic: '/ˈfaɪnəli/', meaning: '最后' }
    ],
    notes: [
      '"a slip of the tongue" 口误。',
      '"instead of" 代替，而不是。',
      '"said nothing more" 什么也没再说。'
    ],
    tags: ['演讲', '幽默'],
    difficulty: 2,
    summary: '一个紧张的演讲者口误不断，把"女士们先生们"说成了"女士们和水母们"。',
    summaryEn: 'A nervous speaker makes embarrassing slip-of-the-tongue mistakes.',
  },
  {
    id: 89,
    title: 'What\'s for supper?',
    titleCn: '晚餐吃什么？',
    text: [
      'What\'s for supper?',
      'Fish and chips.',
      'I don\'t want fish and chips. I\'m tired of fish and chips.',
      'What do you want then?',
      'I want a steak.',
      'We haven\'t got any steak.',
      'What about a pizza?',
      'That\'s a good idea.'
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
      { word: 'supper', phonetic: '/ˈsʌpə/', meaning: '晚餐' },
      { word: 'fish', phonetic: '/fɪʃ/', meaning: '鱼' },
      { word: 'chip', phonetic: '/tʃɪp/', meaning: '薯条' },
      { word: 'tired of', phonetic: '/ˈtaɪəd ɒv/', meaning: '厌倦' },
      { word: 'steak', phonetic: '/steɪk/', meaning: '牛排' },
      { word: 'pizza', phonetic: '/ˈpiːtsə/', meaning: '披萨' },
      { word: 'idea', phonetic: '/aɪˈdɪə/', meaning: '主意' },
      { word: 'then', phonetic: '/ðen/', meaning: '那么' }
    ],
    notes: [
      '"What\'s for supper?" 晚餐吃什么？',
      '"tired of" 对……厌倦。',
      '"What about...?" ……怎么样？'
    ],
    tags: ['日常对话', '食物'],
    difficulty: 1,
    summary: '讨论晚餐吃什么——从鱼和薯条改成了披萨。',
    summaryEn: 'Discussing what to have for supper — from fish and chips to pizza.',
  },
  {
    id: 90,
    title: 'A true story',
    titleCn: '一个真实的故事',
    text: [
      'The old woman told me a true story.',
      'She said she was born in a small village.',
      'When she was young, she walked five miles to school every day.',
      'There were no buses or cars in those days.',
      'She worked very hard and became a teacher.',
      'She taught for forty years.',
      'She said those were the happiest days of her life.'
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
      { word: 'born', phonetic: '/bɔːn/', meaning: '出生' },
      { word: 'village', phonetic: '/ˈvɪlɪdʒ/', meaning: '村庄' },
      { word: 'mile', phonetic: '/maɪl/', meaning: '英里' },
      { word: 'hard', phonetic: '/hɑːd/', meaning: '努力地' },
      { word: 'become', phonetic: '/bɪˈkʌm/', meaning: '成为' },
      { word: 'teach', phonetic: '/tiːtʃ/', meaning: '教' },
      { word: 'happiest', phonetic: '/ˈhæpiɪst/', meaning: '最幸福的' },
      { word: 'those days', phonetic: '/ðəʊz deɪz/', meaning: '那些日子' }
    ],
    notes: [
      '"was born in" 出生于。',
      '"in those days" 在那些日子里/那时候。',
      '"the happiest days" 最幸福的日子。最高级。'
    ],
    tags: ['间接引语', '人生故事'],
    difficulty: 2,
    summary: '一位老妇人讲述她的真实故事——步行五英里上学，教书四十年。',
    summaryEn: 'An old woman tells her true story — walking five miles to school, teaching for forty years.',
  },
  {
    id: 91,
    title: 'Three men in a basket',
    titleCn: '三个人在一个篮子里',
    text: [
      'Three men arrived at a mountain station.',
      'They wanted to climb the mountain.',
      'A pilot offered to take them up in his balloon.',
      'But the balloon could only carry two people.',
      'The third man had to stay behind.',
      'He said he would climb the mountain on foot.',
      'The balloon rose slowly into the air.',
      'The two men in the basket waved to their friend.'
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
      { word: 'pilot', phonetic: '/ˈpaɪlət/', meaning: '飞行员' },
      { word: 'balloon', phonetic: '/bəˈluːn/', meaning: '气球' },
      { word: 'carry', phonetic: '/ˈkæri/', meaning: '携带' },
      { word: 'rise', phonetic: '/raɪz/', meaning: '升起' },
      { word: 'slowly', phonetic: '/ˈsləʊli/', meaning: '慢慢地' },
      { word: 'wave', phonetic: '/weɪv/', meaning: '挥手' },
      { word: 'on foot', phonetic: '/ɒn fʊt/', meaning: '步行' }
    ],
    notes: [
      '"offered to take them up" 主动提出带他们上去。',
      '"could only carry" 只能载。',
      '"on foot" 步行。'
    ],
    tags: ['一般过去时', '冒险'],
    difficulty: 2,
    summary: '三个人乘热气球登山的故事——篮子只能坐两人，第三人步行。',
    summaryEn: 'Three men try to climb a mountain by balloon, but one must walk.',
  },
  {
    id: 92,
    title: 'Asking for trouble',
    titleCn: '自找麻烦',
    text: [
      'A man was trying to fix his roof.',
      'His wife told him to be careful.',
      'He said he knew what he was doing.',
      'He climbed up the ladder.',
      'But the ladder slipped and he fell off the roof.',
      'He broke his leg.',
      'His wife said, "I told you to be careful!"',
      'The man said, "I know. I should have listened to you."'
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
      { word: 'roof', phonetic: '/ruːf/', meaning: '屋顶' },
      { word: 'ladder', phonetic: '/ˈlædə/', meaning: '梯子' },
      { word: 'slip', phonetic: '/slɪp/', meaning: '滑' },
      { word: 'fall', phonetic: '/fɔːl/', meaning: '落下' },
      { word: 'broke', phonetic: '/brəʊk/', meaning: '打破（过去式）' },
      { word: 'careful', phonetic: '/ˈkeəfl/', meaning: '小心的' },
      { word: 'listen', phonetic: '/ˈlɪsn/', meaning: '听' },
      { word: 'should have', phonetic: '/ʃʊd hæv/', meaning: '本应该' }
    ],
    notes: [
      '"should have listened" 本应该听（但没听）。虚拟语气。',
      '"fell off" 从……摔下来。fall-fell-fallen。',
      '"told you to be careful" 叫你小心。'
    ],
    tags: ['情态动词', '幽默故事'],
    difficulty: 2,
    summary: '一个人不听妻子劝告修屋顶，结果摔下来——自找麻烦。',
    summaryEn: 'A man ignores his wife\'s warning and falls off the roof.',
  },
  {
    id: 93,
    title: 'A noble gift',
    titleCn: '高尚的礼物',
    text: [
      'A rich man wanted to give a gift to the city.',
      'He built a beautiful library.',
      'He filled it with thousands of books.',
      'He also gave money to buy more books.',
      'The library was opened by the mayor.',
      'Many people came to the opening ceremony.',
      'The rich man said he wanted everyone to enjoy reading.'
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
      { word: 'gift', phonetic: '/ɡɪft/', meaning: '礼物' },
      { word: 'rich', phonetic: '/rɪtʃ/', meaning: '富有的' },
      { word: 'library', phonetic: '/ˈlaɪbrəri/', meaning: '图书馆' },
      { word: 'thousand', phonetic: '/ˈθaʊznd/', meaning: '千' },
      { word: 'mayor', phonetic: '/meə/', meaning: '市长' },
      { word: 'ceremony', phonetic: '/ˈserəməni/', meaning: '仪式' },
      { word: 'opening', phonetic: '/ˈəʊpənɪŋ/', meaning: '开幕' },
      { word: 'enjoy', phonetic: '/ɪnˈdʒɔɪ/', meaning: '享受' }
    ],
    notes: [
      '"filled it with" 用……填满它。',
      '"was opened by" 被……开放。被动语态。',
      '"wanted everyone to enjoy" 希望每个人享受。'
    ],
    tags: ['被动语态', '慈善'],
    difficulty: 2,
    summary: '一个富人捐建图书馆的故事——希望每个人都能享受阅读。',
    summaryEn: 'A rich man builds a library as a gift so everyone can enjoy reading.',
  },
  {
    id: 94,
    title: 'Future champions',
    titleCn: '未来的冠军',
    text: [
      'Children learn to swim very early in some countries.',
      'In Australia, babies start swimming lessons at six months.',
      'By the age of three, they can swim quite well.',
      'Swimming is taught in most Australian schools.',
      'Many Olympic swimmers come from Australia.',
      'They say the early start is the secret of their success.'
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
      { word: 'champion', phonetic: '/ˈtʃæmpiən/', meaning: '冠军' },
      { word: 'Australia', phonetic: '/ɒˈstreɪliə/', meaning: '澳大利亚' },
      { word: 'baby', phonetic: '/ˈbeɪbi/', meaning: '婴儿' },
      { word: 'lesson', phonetic: '/ˈlesn/', meaning: '课程' },
      { word: 'Olympic', phonetic: '/əˈlɪmpɪk/', meaning: '奥林匹克' },
      { word: 'success', phonetic: '/səkˈses/', meaning: '成功' },
      { word: 'early', phonetic: '/ˈɜːli/', meaning: '早的' },
      { word: 'secret', phonetic: '/ˈsiːkrɪt/', meaning: '秘密' }
    ],
    notes: [
      '"at six months" 在六个月大时。',
      '"by the age of" 到……岁时。',
      '"the secret of their success" 他们成功的秘诀。'
    ],
    tags: ['教育', '游泳'],
    difficulty: 2,
    summary: '澳大利亚孩子从小学游泳——早期开始是成功的秘诀。',
    summaryEn: 'Australian children learn to swim early — the secret of Olympic success.',
  },
  {
    id: 95,
    title: 'A fantasy',
    titleCn: '幻想',
    text: [
      'I had a strange dream last night.',
      'I dreamed I was on a strange planet.',
      'The people there had three eyes and two noses.',
      'They spoke a language I could not understand.',
      'They were very friendly and offered me some food.',
      'The food looked strange but tasted delicious.',
      'Then I woke up and realized it was just a dream.'
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
      { word: 'dream', phonetic: '/driːm/', meaning: '梦' },
      { word: 'planet', phonetic: '/ˈplænɪt/', meaning: '星球' },
      { word: 'language', phonetic: '/ˈlæŋɡwɪdʒ/', meaning: '语言' },
      { word: 'understand', phonetic: '/ˌʌndəˈstænd/', meaning: '理解' },
      { word: 'friendly', phonetic: '/ˈfrendli/', meaning: '友好的' },
      { word: 'taste', phonetic: '/teɪst/', meaning: '尝' },
      { word: 'wake up', phonetic: '/weɪk ʌp/', meaning: '醒来' },
      { word: 'realize', phonetic: '/ˈrɪəlaɪz/', meaning: '意识到' }
    ],
    notes: [
      '"dreamed I was" 梦见我在……。',
      '"woke up" 醒来。wake-woke-woken。',
      '"it was just a dream" 只是一个梦。'
    ],
    tags: ['梦境', '一般过去时'],
    difficulty: 2,
    summary: '一个关于外星的奇妙梦境——那里的人有三只眼睛。',
    summaryEn: 'A strange dream about a planet where people have three eyes.',
  },
  {
    id: 96,
    title: 'The dead return',
    titleCn: '亡灵归来',
    text: [
      'In some countries, people believe that the dead return.',
      'They prepare food and drink for the spirits.',
      'They light candles and wait all night.',
      'In the morning, the food is gone.',
      'They believe the spirits have eaten it.',
      'This is a very old tradition.',
      'It shows that people have always been curious about death.'
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
      { word: 'dead', phonetic: '/ded/', meaning: '死去的' },
      { word: 'spirit', phonetic: '/ˈspɪrɪt/', meaning: '灵魂' },
      { word: 'candle', phonetic: '/ˈkændl/', meaning: '蜡烛' },
      { word: 'tradition', phonetic: '/trəˈdɪʃn/', meaning: '传统' },
      { word: 'curious', phonetic: '/ˈkjʊəriəs/', meaning: '好奇的' },
      { word: 'death', phonetic: '/deθ/', meaning: '死亡' },
      { word: 'prepare', phonetic: '/prɪˈpeə/', meaning: '准备' },
      { word: 'gone', phonetic: '/ɡɒn/', meaning: '消失了' }
    ],
    notes: [
      '"believe that" 相信……。',
      '"is gone" 消失了。gone作形容词。',
      '"curious about" 对……好奇。'
    ],
    tags: ['文化', '信仰'],
    difficulty: 2,
    summary: '一些国家关于亡灵归来的传统——为灵魂准备食物和蜡烛。',
    summaryEn: 'A tradition where people prepare food for returning spirits.',
  },
  {
    id: 97,
    title: 'A thirsty ghost',
    titleCn: '口渴的鬼',
    text: [
      'A house in a small village was haunted.',
      'The ghost drank all the beer in the house.',
      'The owner was very worried.',
      'He called a priest to help.',
      'The priest came and talked to the ghost.',
      'The ghost said it was very thirsty.',
      'The priest told the ghost to leave.',
      'The ghost left and the house was peaceful again.'
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
      { word: 'ghost', phonetic: '/ɡəʊst/', meaning: '鬼' },
      { word: 'owner', phonetic: '/ˈəʊnə/', meaning: '主人' },
      { word: 'worried', phonetic: '/ˈwʌrid/', meaning: '担心的' },
      { word: 'priest', phonetic: '/priːst/', meaning: '牧师' },
      { word: 'thirsty', phonetic: '/ˈθɜːsti/', meaning: '渴的' },
      { word: 'peaceful', phonetic: '/ˈpiːsfl/', meaning: '平静的' },
      { word: 'leave', phonetic: '/liːv/', meaning: '离开' }
    ],
    notes: [
      '"was haunted" 闹鬼。',
      '"called a priest to help" 叫牧师来帮忙。',
      '"told the ghost to leave" 叫鬼离开。'
    ],
    tags: ['一般过去时', '鬼故事'],
    difficulty: 2,
    summary: '一个闹鬼的房子——鬼喝了所有的啤酒，牧师来把它赶走了。',
    summaryEn: 'A haunted house where a ghost drinks all the beer; a priest makes it leave.',
  },
  {
    id: 98,
    title: 'Did you want to tell me something?',
    titleCn: '你想告诉我什么吗？',
    text: [
      'The dentist was very busy.',
      'He had a lot of patients to see.',
      'A woman came in and sat down.',
      'She opened her mouth wide.',
      'The dentist looked inside.',
      'He said, "Did you want to tell me something?"',
      'The woman said, "No. I just wanted to show you my new teeth."'
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
      { word: 'dentist', phonetic: '/ˈdentɪst/', meaning: '牙医' },
      { word: 'patient', phonetic: '/ˈpeɪʃnt/', meaning: '病人' },
      { word: 'mouth', phonetic: '/maʊθ/', meaning: '嘴巴' },
      { word: 'inside', phonetic: '/ɪnˈsaɪd/', meaning: '里面' },
      { word: 'show', phonetic: '/ʃəʊ/', meaning: '展示' },
      { word: 'teeth', phonetic: '/tiːθ/', meaning: '牙齿（复数）' },
      { word: 'wide', phonetic: '/waɪd/', meaning: '张大地' },
      { word: 'busy', phonetic: '/ˈbɪzi/', meaning: '忙碌的' }
    ],
    notes: [
      '"had a lot of patients to see" 有很多病人要看。',
      '"opened her mouth wide" 张大嘴巴。',
      '"Did you want to tell me something?" 你想告诉我什么吗？'
    ],
    tags: ['牙医', '幽默'],
    difficulty: 2,
    summary: '一个女人去看牙医，不是因为牙疼，而是为了展示新牙齿。',
    summaryEn: 'A woman visits the dentist not for a toothache, but to show off her new teeth.',
  },
  {
    id: 99,
    title: 'A trip to the Moon',
    titleCn: '月球之旅',
    text: [
      'Imagine you are travelling to the Moon.',
      'You look back at the Earth.',
      'It looks like a big blue ball.',
      'You can see clouds and oceans.',
      'You cannot see any people or buildings.',
      'The Moon looks grey and empty.',
      'There are no plants or animals.',
      'When you land, you can jump very high because there is less gravity.'
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
      { word: 'imagine', phonetic: '/ɪˈmædʒɪn/', meaning: '想象' },
      { word: 'Earth', phonetic: '/ɜːθ/', meaning: '地球' },
      { word: 'ocean', phonetic: '/ˈəʊʃn/', meaning: '海洋' },
      { word: 'grey', phonetic: '/ɡreɪ/', meaning: '灰色的' },
      { word: 'empty', phonetic: '/ˈempti/', meaning: '空的' },
      { word: 'gravity', phonetic: '/ˈɡrævəti/', meaning: '重力' },
      { word: 'plant', phonetic: '/plɑːnt/', meaning: '植物' },
      { word: 'jump', phonetic: '/dʒʌmp/', meaning: '跳' }
    ],
    notes: [
      '"looks like" 看起来像。',
      '"there is less gravity" 重力更小。比较级。',
      '"cannot see any" 看不到任何……。'
    ],
    tags: ['太空', '科学想象'],
    difficulty: 2,
    summary: '想象月球之旅——从太空看地球像一个蓝色的球。',
    summaryEn: 'Imagine a trip to the Moon — Earth looks like a big blue ball from space.',
  },
  {
    id: 100,
    title: 'Who wants a cold?',
    titleCn: '谁想要感冒？',
    text: [
      'Nobody wants a cold.',
      'But everybody gets one sometimes.',
      'The best way to avoid a cold is to wash your hands often.',
      'You should also get enough sleep and exercise.',
      'If you do get a cold, drink lots of water and rest.',
      'Some people take medicine, but there is no cure for the common cold.',
      'You just have to wait for it to go away.'
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
      { word: 'nobody', phonetic: '/ˈnəʊbədi/', meaning: '没有人' },
      { word: 'everybody', phonetic: '/ˈevribɒdi/', meaning: '每个人' },
      { word: 'avoid', phonetic: '/əˈvɔɪd/', meaning: '避免' },
      { word: 'enough', phonetic: '/ɪˈnʌf/', meaning: '足够的' },
      { word: 'exercise', phonetic: '/ˈeksəsaɪz/', meaning: '锻炼' },
      { word: 'medicine', phonetic: '/ˈmedsn/', meaning: '药物' },
      { word: 'rest', phonetic: '/rest/', meaning: '休息' },
      { word: 'go away', phonetic: '/ɡəʊ əˈweɪ/', meaning: '消失' }
    ],
    notes: [
      '"the best way to" 最好的方法。',
      '"get enough sleep" 获得足够的睡眠。',
      '"have to wait" 不得不等待。'
    ],
    tags: ['健康', '建议'],
    difficulty: 2,
    summary: '如何预防和应对感冒——洗手、休息、多喝水。',
    summaryEn: 'How to prevent and deal with a cold — wash hands, rest, drink water.',
  },
  {
    id: 101,
    title: 'A card from Jimmy',
    titleCn: '吉米的明信片',
    text: [
      'Jimmy went to France last month.',
      'He sent a card to his parents.',
      '"Dear Mum and Dad," he wrote.',
      '"I am having a wonderful time.',
      'The weather is beautiful and the food is delicious.',
      'I have visited Paris and Lyon.',
      'I am now in Marseille.',
      'I will come home next week. Love, Jimmy."',
      'His parents were happy to hear from him.'
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
      ''
    ],
    vocabulary: [
      { word: 'France', phonetic: '/frɑːns/', meaning: '法国' },
      { word: 'send', phonetic: '/send/', meaning: '寄' },
      { word: 'wonderful', phonetic: '/ˈwʌndəfl/', meaning: '精彩的' },
      { word: 'Paris', phonetic: '/ˈpærɪs/', meaning: '巴黎' },
      { word: 'Lyon', phonetic: '/liˈɒŋ/', meaning: '里昂' },
      { word: 'Marseille', phonetic: '/ˌmɑːˈseɪ/', meaning: '马赛' },
      { word: 'hear from', phonetic: '/hɪə frɒm/', meaning: '收到……的来信' }
    ],
    notes: [
      '"am having" 现在进行时表示正在进行的活动。',
      '"will come" 将来时。',
      '"hear from" 收到某人的消息。'
    ],
    tags: ['明信片', '现在进行时'],
    difficulty: 2,
    summary: '吉米从法国寄来的明信片——他正在享受美好的假期。',
    summaryEn: 'Jimmy sends a postcard from France — having a wonderful time.',
  },
  {
    id: 102,
    title: 'A new house',
    titleCn: '一座新房子',
    text: [
      'My brother has just bought a new house.',
      'It was built in 1970.',
      'But it looks very modern.',
      'There are large rooms and big windows.',
      'The garden is beautiful with many trees and flowers.',
      'He moved in last week.',
      'He is very happy with his new home.'
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
      { word: 'house', phonetic: '/haʊs/', meaning: '房子' },
      { word: 'modern', phonetic: '/ˈmɒdn/', meaning: '现代的' },
      { word: 'room', phonetic: '/ruːm/', meaning: '房间' },
      { word: 'garden', phonetic: '/ˈɡɑːdn/', meaning: '花园' },
      { word: 'flower', phonetic: '/ˈflaʊə/', meaning: '花' },
      { word: 'move in', phonetic: '/muːv ɪn/', meaning: '搬进' },
      { word: 'build', phonetic: '/bɪld/', meaning: '建造' },
      { word: 'buy', phonetic: '/baɪ/', meaning: '买' }
    ],
    notes: [
      '"has just bought" 刚买了。现在完成时。',
      '"was built in 1970" 建于1970年。被动语态。',
      '"moved in" 搬进去。'
    ],
    tags: ['现在完成时', '新家'],
    difficulty: 2,
    summary: '哥哥刚买了一座1970年建的房子，看起来很现代。',
    summaryEn: 'My brother just bought a house built in 1970 that looks very modern.',
  },
  {
    id: 103,
    title: 'A visit to the theatre',
    titleCn: '去看戏',
    text: [
      'My wife and I went to the theatre last night.',
      'We saw a play by Shakespeare.',
      'The play was "Romeo and Juliet".',
      'The actors were excellent.',
      'The theatre was full and everyone enjoyed the play.',
      'After the play, we went to a restaurant and had dinner.',
      'It was a wonderful evening.'
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
      { word: 'theatre', phonetic: '/ˈθɪətə/', meaning: '剧院' },
      { word: 'play', phonetic: '/pleɪ/', meaning: '戏剧' },
      { word: 'Shakespeare', phonetic: '/ˈʃeɪkspɪə/', meaning: '莎士比亚' },
      { word: 'actor', phonetic: '/ˈæktə/', meaning: '演员' },
      { word: 'excellent', phonetic: '/ˈeksələnt/', meaning: '优秀的' },
      { word: 'restaurant', phonetic: '/ˈrestrɒnt/', meaning: '餐馆' },
      { word: 'evening', phonetic: '/ˈiːvnɪŋ/', meaning: '晚上' },
      { word: 'full', phonetic: '/fʊl/', meaning: '满的' }
    ],
    notes: [
      '"went to the theatre" 去看戏。',
      '"Romeo and Juliet" 罗密欧与朱丽叶。',
      '"had dinner" 吃了晚餐。'
    ],
    tags: ['戏剧', '文化活动'],
    difficulty: 2,
    summary: '和妻子去看莎士比亚的《罗密欧与朱丽叶》，演员很出色。',
    summaryEn: 'My wife and I went to see Shakespeare\'s "Romeo and Juliet" — excellent actors.',
  },
  {
    id: 104,
    title: 'The garden',
    titleCn: '花园',
    text: [
      'My garden is not very big.',
      'But it is very beautiful.',
      'There are many different kinds of flowers in it.',
      'In spring, there are tulips and daffodils.',
      'In summer, there are roses and sunflowers.',
      'I spend a lot of time in my garden.',
      'I water the flowers every day.',
      'My neighbours say my garden is the best in the street.'
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
      { word: 'garden', phonetic: '/ˈɡɑːdn/', meaning: '花园' },
      { word: 'tulip', phonetic: '/ˈtjuːlɪp/', meaning: '郁金香' },
      { word: 'daffodil', phonetic: '/ˈdæfədɪl/', meaning: '水仙花' },
      { word: 'rose', phonetic: '/rəʊz/', meaning: '玫瑰' },
      { word: 'sunflower', phonetic: '/ˈsʌnflaʊə/', meaning: '向日葵' },
      { word: 'water', phonetic: '/ˈwɔːtə/', meaning: '浇水' },
      { word: 'neighbour', phonetic: '/ˈneɪbə/', meaning: '邻居' },
      { word: 'spend', phonetic: '/spend/', meaning: '花（时间）' }
    ],
    notes: [
      '"different kinds of" 不同种类的。',
      '"spend a lot of time" 花很多时间。',
      '"the best in the street" 街上最好的。最高级。'
    ],
    tags: ['花园', '一般现在时'],
    difficulty: 1,
    summary: '描述我的小花园——虽然不大但很美丽，四季都有不同的花。',
    summaryEn: 'My small but beautiful garden with different flowers in each season.',
  },
  {
    id: 105,
    title: 'At the doctor\'s',
    titleCn: '在诊所',
    text: [
      'I went to the doctor yesterday.',
      'I had a bad headache and a sore throat.',
      'The doctor examined me carefully.',
      'He said I had a cold.',
      'He told me to stay in bed for two days.',
      'He gave me some medicine.',
      'He also told me to drink lots of water.',
      'I feel much better today.'
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
      { word: 'doctor', phonetic: '/ˈdɒktə/', meaning: '医生' },
      { word: 'headache', phonetic: '/ˈhedeɪk/', meaning: '头痛' },
      { word: 'sore', phonetic: '/sɔː/', meaning: '疼痛的' },
      { word: 'throat', phonetic: '/θrəʊt/', meaning: '喉咙' },
      { word: 'examine', phonetic: '/ɪɡˈzæmɪn/', meaning: '检查' },
      { word: 'medicine', phonetic: '/ˈmedsn/', meaning: '药物' },
      { word: 'stay in bed', phonetic: '/steɪ ɪn bed/', meaning: '卧床休息' },
      { word: 'better', phonetic: '/ˈbetə/', meaning: '更好的' }
    ],
    notes: [
      '"had a bad headache" 头很痛。',
      '"told me to stay in bed" 告诉我卧床休息。',
      '"feel much better" 感觉好多了。比较级。'
    ],
    tags: ['看病', '一般过去时'],
    difficulty: 2,
    summary: '去看医生——感冒了，医生让我卧床休息两天。',
    summaryEn: 'Visit the doctor for a cold — told to stay in bed for two days.',
  },
  {
    id: 106,
    title: 'A walk in the forest',
    titleCn: '森林散步',
    text: [
      'Last Sunday, my family and I went for a walk in the forest.',
      'The weather was warm and sunny.',
      'We saw many birds and squirrels.',
      'We found some wild flowers and picked a few.',
      'We had a picnic by a small stream.',
      'The children played in the water.',
      'We came home in the evening, tired but happy.'
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
      { word: 'forest', phonetic: '/ˈfɒrɪst/', meaning: '森林' },
      { word: 'squirrel', phonetic: '/ˈskwɪrəl/', meaning: '松鼠' },
      { word: 'wild', phonetic: '/waɪld/', meaning: '野生的' },
      { word: 'picnic', phonetic: '/ˈpɪknɪk/', meaning: '野餐' },
      { word: 'stream', phonetic: '/striːm/', meaning: '小溪' },
      { word: 'pick', phonetic: '/pɪk/', meaning: '摘' },
      { word: 'tired', phonetic: '/taɪəd/', meaning: '累的' },
      { word: 'sunny', phonetic: '/ˈsʌni/', meaning: '阳光明媚的' }
    ],
    notes: [
      '"went for a walk" 去散步。',
      '"picked a few" 摘了一些。',
      '"tired but happy" 累但快乐。'
    ],
    tags: ['家庭活动', '一般过去时'],
    difficulty: 1,
    summary: '周日全家去森林散步——看鸟、野餐、在溪边玩耍。',
    summaryEn: 'A family walk in the forest — birds, squirrels, picnic by a stream.',
  },
  {
    id: 107,
    title: 'Shopping',
    titleCn: '购物',
    text: [
      'Mrs. Williams went shopping yesterday morning.',
      'She drove to the town centre and parked her car.',
      'She went to a department store and bought a new dress.',
      'Then she went to a shoe shop and bought some shoes.',
      'She had lunch at a cafe.',
      'In the afternoon, she went to the supermarket and bought some food.',
      'She came home at five o\'clock.'
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
      { word: 'shopping', phonetic: '/ˈʃɒpɪŋ/', meaning: '购物' },
      { word: 'park', phonetic: '/pɑːk/', meaning: '停车' },
      { word: 'department store', phonetic: '/dɪˈpɑːtmənt stɔː/', meaning: '百货商店' },
      { word: 'shoe', phonetic: '/ʃuː/', meaning: '鞋子' },
      { word: 'cafe', phonetic: '/ˈkæfeɪ/', meaning: '咖啡馆' },
      { word: 'supermarket', phonetic: '/ˈsuːpəmɑːkɪt/', meaning: '超市' },
      { word: 'afternoon', phonetic: '/ˌɑːftəˈnuːn/', meaning: '下午' },
      { word: 'o\'clock', phonetic: '/əˈklɒk/', meaning: '点钟' }
    ],
    notes: [
      '"went shopping" 去购物。',
      '"parked her car" 停车。',
      '"at five o\'clock" 在五点钟。'
    ],
    tags: ['购物', '一般过去时'],
    difficulty: 1,
    summary: '威廉姆斯太太的购物之旅——百货商店、鞋店、超市。',
    summaryEn: 'Mrs. Williams goes shopping — department store, shoe shop, supermarket.',
  },
  {
    id: 108,
    title: 'A holiday by the sea',
    titleCn: '海边度假',
    text: [
      'We spent our holiday by the sea last summer.',
      'We stayed at a small hotel near the beach.',
      'Every morning, we swam in the sea.',
      'The water was warm and clear.',
      'In the afternoon, we walked along the beach and collected shells.',
      'In the evening, we ate fresh fish at a local restaurant.',
      'The children built sandcastles and had a wonderful time.'
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
      { word: 'holiday', phonetic: '/ˈhɒlədeɪ/', meaning: '假期' },
      { word: 'beach', phonetic: '/biːtʃ/', meaning: '海滩' },
      { word: 'clear', phonetic: '/klɪə/', meaning: '清澈的' },
      { word: 'shell', phonetic: '/ʃel/', meaning: '贝壳' },
      { word: 'collect', phonetic: '/kəˈlekt/', meaning: '收集' },
      { word: 'fresh', phonetic: '/freʃ/', meaning: '新鲜的' },
      { word: 'sandcastle', phonetic: '/ˈsændkɑːsl/', meaning: '沙堡' },
      { word: 'wonderful', phonetic: '/ˈwʌndəfl/', meaning: '精彩的' }
    ],
    notes: [
      '"spent our holiday" 度假。spend-spent-spent。',
      '"by the sea" 在海边。',
      '"had a wonderful time" 玩得很开心。'
    ],
    tags: ['度假', '一般过去时'],
    difficulty: 1,
    summary: '去年夏天在海边度假——游泳、捡贝壳、吃海鲜。',
    summaryEn: 'A summer holiday by the sea — swimming, collecting shells, fresh fish.',
  },
  {
    id: 109,
    title: 'A telephone conversation',
    titleCn: '电话对话',
    text: [
      'Hello, is that John?',
      'Yes, speaking.',
      'Hi, John. This is Mary.',
      'Oh, hello, Mary. How are you?',
      'I\'m fine, thanks. Are you free this weekend?',
      'Yes, I am. Why?',
      'Would you like to come to dinner on Saturday?',
      'That sounds great. What time?',
      'Seven o\'clock. Is that OK?',
      'Perfect. I\'ll see you then.'
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
      { word: 'speaking', phonetic: '/ˈspiːkɪŋ/', meaning: '我就是（电话用语）' },
      { word: 'free', phonetic: '/friː/', meaning: '有空的' },
      { word: 'weekend', phonetic: '/ˌwiːkˈend/', meaning: '周末' },
      { word: 'dinner', phonetic: '/ˈdɪnə/', meaning: '晚餐' },
      { word: 'Saturday', phonetic: '/ˈsætədeɪ/', meaning: '星期六' },
      { word: 'sounds', phonetic: '/saʊndz/', meaning: '听起来' },
      { word: 'perfect', phonetic: '/ˈpɜːfɪkt/', meaning: '完美的' },
      { word: 'then', phonetic: '/ðen/', meaning: '到时候' }
    ],
    notes: [
      '"Is that John?" 你是约翰吗？电话用语。',
      '"Yes, speaking." 我就是。电话用语。',
      '"Would you like to...?" 你想……吗？邀请。'
    ],
    tags: ['电话用语', '邀请'],
    difficulty: 2,
    summary: '一个电话邀请——玛丽邀请约翰周六来吃晚餐。',
    summaryEn: 'A phone invitation — Mary invites John to dinner on Saturday.',
  },
  {
    id: 110,
    title: 'An exciting trip',
    titleCn: '一次激动人心的旅行',
    text: [
      'My friend has just returned from abroad.',
      'He went to Australia.',
      'He visited Sydney and Melbourne.',
      'He saw the Sydney Opera House and the Great Barrier Reef.',
      'He took hundreds of photos.',
      'He said the trip was exciting.',
      'He wants to go back next year.'
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
      { word: 'return', phonetic: '/rɪˈtɜːn/', meaning: '回来' },
      { word: 'abroad', phonetic: '/əˈbrɔːd/', meaning: '国外' },
      { word: 'Sydney', phonetic: '/ˈsɪdni/', meaning: '悉尼' },
      { word: 'Melbourne', phonetic: '/ˈmelbən/', meaning: '墨尔本' },
      { word: 'opera', phonetic: '/ˈɒpərə/', meaning: '歌剧' },
      { word: 'reef', phonetic: '/riːf/', meaning: '珊瑚礁' },
      { word: 'hundred', phonetic: '/ˈhʌndrəd/', meaning: '百' },
      { word: 'exciting', phonetic: '/ɪkˈsaɪtɪŋ/', meaning: '令人兴奋的' }
    ],
    notes: [
      '"has just returned" 刚回来。现在完成时。',
      '"the Great Barrier Reef" 大堡礁。',
      '"wants to go back" 想再去。'
    ],
    tags: ['旅行', '现在完成时'],
    difficulty: 2,
    summary: '朋友刚从澳大利亚回来——参观了悉尼歌剧院和大堡礁。',
    summaryEn: 'My friend just returned from Australia — visited the Opera House and Great Barrier Reef.',
  },
  {
    id: 111,
    title: 'Have you got...?',
    titleCn: '你有……吗？',
    text: [
      'Have you got a pen?',
      'Yes, I have. Here you are.',
      'Have you got any paper?',
      'Yes, I have. How much do you want?',
      'A few sheets, please.',
      'Have you got any envelopes?',
      'No, I haven\'t. I\'m sorry.',
      'That\'s all right. I\'ll buy some.'
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
      { word: 'pen', phonetic: '/pen/', meaning: '钢笔' },
      { word: 'paper', phonetic: '/ˈpeɪpə/', meaning: '纸' },
      { word: 'sheet', phonetic: '/ʃiːt/', meaning: '张' },
      { word: 'envelope', phonetic: '/ˈenvələʊp/', meaning: '信封' },
      { word: 'a few', phonetic: '/ə fjuː/', meaning: '几个' },
      { word: 'all right', phonetic: '/ɔːl raɪt/', meaning: '没关系' },
      { word: 'buy', phonetic: '/baɪ/', meaning: '买' },
      { word: 'how much', phonetic: '/haʊ mʌtʃ/', meaning: '多少' }
    ],
    notes: [
      '"Have you got...?" 你有……吗？英式英语。',
      '"a few sheets" 几张。',
      '"That\'s all right." 没关系。'
    ],
    tags: ['Have you got', '日常对话'],
    difficulty: 1,
    summary: '借文具的对话——有笔、纸，但没有信封。',
    summaryEn: 'Borrowing stationery — has pen and paper, but no envelopes.',
  },
  {
    id: 112,
    title: 'A good idea',
    titleCn: '好主意',
    text: [
      'What shall we do today?',
      'Let\'s go for a drive in the country.',
      'That\'s a good idea. Shall we take a picnic?',
      'Yes, let\'s. I\'ll make some sandwiches.',
      'And I\'ll bring some fruit and drinks.',
      'What time shall we leave?',
      'Let\'s leave at nine o\'clock.',
      'OK. I\'ll be ready.'
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
      { word: 'shall', phonetic: '/ʃæl/', meaning: '应该/将要' },
      { word: 'drive', phonetic: '/draɪv/', meaning: '开车兜风' },
      { word: 'country', phonetic: '/ˈkʌntri/', meaning: '乡村' },
      { word: 'sandwich', phonetic: '/ˈsænwɪtʃ/', meaning: '三明治' },
      { word: 'fruit', phonetic: '/fruːt/', meaning: '水果' },
      { word: 'drink', phonetic: '/drɪŋk/', meaning: '饮料' },
      { word: 'ready', phonetic: '/ˈredi/', meaning: '准备好的' },
      { word: 'leave', phonetic: '/liːv/', meaning: '离开' }
    ],
    notes: [
      '"Shall we...?" 我们……好吗？提建议。',
      '"Let\'s" 让我们。提建议。',
      '"I\'ll bring" 我会带。will表示将来。'
    ],
    tags: ['建议', '将来时'],
    difficulty: 1,
    summary: '计划一次乡村兜风——做三明治、带水果和饮料。',
    summaryEn: 'Planning a country drive — making sandwiches, bringing fruit and drinks.',
  },
  {
    id: 113,
    title: 'A trip to Scotland',
    titleCn: '苏格兰之旅',
    text: [
      'Tom and his family are going to Scotland next week.',
      'They are going by train.',
      'They will visit Edinburgh and Glasgow.',
      'Tom wants to see the Scottish Highlands.',
      'His wife wants to visit some castles.',
      'The children want to go to the beach.',
      'They are all looking forward to the trip.'
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
      { word: 'Scotland', phonetic: '/ˈskɒtlənd/', meaning: '苏格兰' },
      { word: 'Edinburgh', phonetic: '/ˈedɪnbrə/', meaning: '爱丁堡' },
      { word: 'Glasgow', phonetic: '/ˈɡlɑːzɡəʊ/', meaning: '格拉斯哥' },
      { word: 'Highlands', phonetic: '/ˈhaɪləndz/', meaning: '高地' },
      { word: 'castle', phonetic: '/ˈkɑːsl/', meaning: '城堡' },
      { word: 'look forward to', phonetic: '/lʊk ˈfɔːwəd tuː/', meaning: '期待' },
      { word: 'train', phonetic: '/treɪn/', meaning: '火车' },
      { word: 'next week', phonetic: '/nekst wiːk/', meaning: '下周' }
    ],
    notes: [
      '"are going to" 将要去。',
      '"look forward to" 期待。to是介词，后接名词或动名词。'
    ],
    tags: ['旅行计划', '将来时'],
    difficulty: 2,
    summary: '汤姆一家计划去苏格兰旅行——爱丁堡、城堡、高地。',
    summaryEn: 'Tom\'s family plans a trip to Scotland — Edinburgh, castles, Highlands.',
  },
  {
    id: 114,
    title: 'Shopping list',
    titleCn: '购物清单',
    text: [
      'We haven\'t got much milk.',
      'And we haven\'t got much bread either.',
      'We need some butter and cheese.',
      'Have we got any eggs?',
      'No, we haven\'t.',
      'What about vegetables?',
      'We need some potatoes and carrots.',
      'And we need some fruit — apples and oranges.',
      'Let me make a shopping list.'
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
      ''
    ],
    vocabulary: [
      { word: 'milk', phonetic: '/mɪlk/', meaning: '牛奶' },
      { word: 'bread', phonetic: '/bred/', meaning: '面包' },
      { word: 'butter', phonetic: '/ˈbʌtə/', meaning: '黄油' },
      { word: 'cheese', phonetic: '/tʃiːz/', meaning: '奶酪' },
      { word: 'potato', phonetic: '/pəˈteɪtəʊ/', meaning: '土豆' },
      { word: 'carrot', phonetic: '/ˈkærət/', meaning: '胡萝卜' },
      { word: 'apple', phonetic: '/ˈæpl/', meaning: '苹果' },
      { word: 'orange', phonetic: '/ˈɒrɪndʒ/', meaning: '橙子' },
      { word: 'list', phonetic: '/lɪst/', meaning: '清单' }
    ],
    notes: [
      '"haven\'t got much" 没有很多。',
      '"need some" 需要一些。',
      '"shopping list" 购物清单。'
    ],
    tags: ['购物', '食物词汇'],
    difficulty: 1,
    summary: '检查冰箱里的食物——需要买牛奶、面包、蔬菜和水果。',
    summaryEn: 'Checking the fridge — need to buy milk, bread, vegetables and fruit.',
  },
  {
    id: 115,
    title: 'Breakfast or lunch?',
    titleCn: '早餐还是午餐？',
    text: [
      'It was Sunday morning.',
      'Mrs. Smith went upstairs to wake her son.',
      '"Get up, Tom," she said. "It\'s twelve o\'clock."',
      'Tom opened his eyes and looked at the window.',
      '"But it\'s raining, Mum," he said. "I don\'t want to get up."',
      '"You must get up," said his mother. "Your breakfast is getting cold."',
      'Tom said, "I\'ll have it for lunch then."'
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
      { word: 'upstairs', phonetic: '/ˌʌpˈsteəz/', meaning: '楼上' },
      { word: 'wake', phonetic: '/weɪk/', meaning: '叫醒' },
      { word: 'twelve', phonetic: '/twelv/', meaning: '十二' },
      { word: 'rain', phonetic: '/reɪn/', meaning: '下雨' },
      { word: 'must', phonetic: '/mʌst/', meaning: '必须' },
      { word: 'cold', phonetic: '/kəʊld/', meaning: '冷的' },
      { word: 'breakfast', phonetic: '/ˈbrekfəst/', meaning: '早餐' },
      { word: 'lunch', phonetic: '/lʌntʃ/', meaning: '午餐' }
    ],
    notes: [
      '"Get up" 起床。祈使句。',
      '"It\'s raining" 正在下雨。现在进行时。',
      '"I\'ll have it for lunch" 我把它当午餐吃。'
    ],
    tags: ['家庭对话', '幽默'],
    difficulty: 1,
    summary: '汤姆想把早餐留到午餐再吃——因为下雨不想起床。',
    summaryEn: 'Tom wants to save breakfast for lunch because it\'s raining and he won\'t get up.',
  },
  {
    id: 116,
    title: 'Is that you, John?',
    titleCn: '是你吗，约翰？',
    text: [
      'Mrs. Bird telephoned the police.',
      '"Is that you, John?" she asked.',
      '"No, madam," said the policeman. "This is not John. This is the police station."',
      '"Oh, I\'m sorry," said Mrs. Bird. "I dialed the wrong number."',
      '"That\'s all right, madam," said the policeman.',
      'Mrs. Bird dialed again.',
      '"Is that you, John?" she asked.',
      '"No, madam! This is still the police station!"'
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
      { word: 'telephone', phonetic: '/ˈtelɪfəʊn/', meaning: '打电话' },
      { word: 'police', phonetic: '/pəˈliːs/', meaning: '警察' },
      { word: 'policeman', phonetic: '/pəˈliːsmən/', meaning: '警察（男）' },
      { word: 'station', phonetic: '/ˈsteɪʃn/', meaning: '局' },
      { word: 'dial', phonetic: '/ˈdaɪəl/', meaning: '拨（电话号码）' },
      { word: 'wrong', phonetic: '/rɒŋ/', meaning: '错误的' },
      { word: 'number', phonetic: '/ˈnʌmbə/', meaning: '号码' },
      { word: 'still', phonetic: '/stɪl/', meaning: '仍然' }
    ],
    notes: [
      '"Is that you, John?" 电话用语。',
      '"dialed the wrong number" 拨错了号码。',
      '"This is the police station" 这是警察局。'
    ],
    tags: ['电话', '幽默'],
    difficulty: 2,
    summary: '伯德太太打电话给约翰，却两次打到了警察局。',
    summaryEn: 'Mrs. Bird tries to call John but dials the police station twice.',
  },
  {
    id: 117,
    title: 'Tommy\'s breakfast',
    titleCn: '汤米的早餐',
    text: [
      'Tommy\'s mother said, "Tommy, come and have your breakfast."',
      'Tommy didn\'t want to eat.',
      '"I\'m not hungry," he said.',
      'His mother put a plate of eggs and bread in front of him.',
      '"Eat your breakfast," she said.',
      'Tommy pushed the plate away.',
      '"I told you I\'m not hungry!"',
      'His mother took the plate away and said, "OK, no breakfast then."',
      'Ten minutes later, Tommy was very hungry.'
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
      ''
    ],
    vocabulary: [
      { word: 'hungry', phonetic: '/ˈhʌŋɡri/', meaning: '饿的' },
      { word: 'plate', phonetic: '/pleɪt/', meaning: '盘子' },
      { word: 'push', phonetic: '/pʊʃ/', meaning: '推' },
      { word: 'away', phonetic: '/əˈweɪ/', meaning: '离开' },
      { word: 'later', phonetic: '/ˈleɪtə/', meaning: '之后' },
      { word: 'minute', phonetic: '/ˈmɪnɪt/', meaning: '分钟' },
      { word: 'eat', phonetic: '/iːt/', meaning: '吃' },
      { word: 'breakfast', phonetic: '/ˈbrekfəst/', meaning: '早餐' }
    ],
    notes: [
      '"come and have" 来吃。',
      '"pushed the plate away" 把盘子推开。',
      '"took... away" 拿走。'
    ],
    tags: ['家庭故事', '一般过去时'],
    difficulty: 1,
    summary: '汤米说不饿不吃早餐，十分钟后却饿了。',
    summaryEn: 'Tommy says he\'s not hungry, then is very hungry ten minutes later.',
  },
  {
    id: 118,
    title: 'A true story',
    titleCn: '一个真实的故事',
    text: [
      'I met an old friend yesterday.',
      'I hadn\'t seen him for five years.',
      'He looked very different.',
      'He had lost a lot of weight.',
      'He told me he had been ill.',
      'But he said he was feeling much better now.',
      'He asked me about my family.',
      'We had a cup of coffee together and talked about old times.'
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
      { word: 'meet', phonetic: '/miːt/', meaning: '遇见' },
      { word: 'friend', phonetic: '/frend/', meaning: '朋友' },
      { word: 'different', phonetic: '/ˈdɪfrənt/', meaning: '不同的' },
      { word: 'weight', phonetic: '/weɪt/', meaning: '体重' },
      { word: 'lost', phonetic: '/lɒst/', meaning: '失去（过去式）' },
      { word: 'ill', phonetic: '/ɪl/', meaning: '生病的' },
      { word: 'together', phonetic: '/təˈɡeðə/', meaning: '一起' },
      { word: 'old times', phonetic: '/əʊld taɪmz/', meaning: '旧时光' }
    ],
    notes: [
      '"hadn\'t seen" 过去完成时——在"昨天遇到"之前没见过。',
      '"lost a lot of weight" 减了很多体重。',
      '"talked about old times" 聊旧时光。'
    ],
    tags: ['重逢', '过去完成时'],
    difficulty: 2,
    summary: '遇到五年没见的老朋友——他瘦了很多，但感觉好多了。',
    summaryEn: 'Meeting an old friend after five years — he lost weight but is feeling better.',
  },
  {
    id: 119,
    title: 'Tickets, please!',
    titleCn: '请出示车票！',
    text: [
      'The conductor came round on the bus.',
      '"Tickets, please!" he said.',
      'A woman looked for her ticket in her bag.',
      'She couldn\'t find it.',
      '"I\'m sure I bought one," she said.',
      '"You must buy another ticket," said the conductor.',
      'The woman was very annoyed.'
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
      { word: 'conductor', phonetic: '/kənˈdʌktə/', meaning: '售票员' },
      { word: 'ticket', phonetic: '/ˈtɪkɪt/', meaning: '票' },
      { word: 'round', phonetic: '/raʊnd/', meaning: '转一圈' },
      { word: 'sure', phonetic: '/ʃʊə/', meaning: '确信的' },
      { word: 'another', phonetic: '/əˈnʌðə/', meaning: '另一个' },
      { word: 'annoyed', phonetic: '/əˈnɔɪd/', meaning: '恼怒的' },
      { word: 'look for', phonetic: '/lʊk fɔː/', meaning: '寻找' },
      { word: 'find', phonetic: '/faɪnd/', meaning: '找到' }
    ],
    notes: [
      '"came round" 走过来查票。',
      '"looked for" 寻找（不一定找到）。',
      '"find" 找到（结果）。'
    ],
    tags: ['公共交通', '一般过去时'],
    difficulty: 2,
    summary: '在公交车上找不到票——售票员要求再买一张。',
    summaryEn: 'A woman can\'t find her bus ticket and must buy another one.',
  },
  {
    id: 120,
    title: 'A letter to a friend',
    titleCn: '给朋友的一封信',
    text: [
      'Dear Tom,',
      'How are you? I hope you are well.',
      'I am writing to tell you about my new job.',
      'I started working at a bank last month.',
      'The work is interesting but very busy.',
      'My colleagues are very friendly.',
      'I have a nice office with a view of the park.',
      'I hope you can visit me soon. Best wishes, Mary.'
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
      { word: 'dear', phonetic: '/dɪə/', meaning: '亲爱的' },
      { word: 'hope', phonetic: '/həʊp/', meaning: '希望' },
      { word: 'well', phonetic: '/wel/', meaning: '健康的' },
      { word: 'job', phonetic: '/dʒɒb/', meaning: '工作' },
      { word: 'bank', phonetic: '/bæŋk/', meaning: '银行' },
      { word: 'colleague', phonetic: '/ˈkɒliːɡ/', meaning: '同事' },
      { word: 'view', phonetic: '/vjuː/', meaning: '景色' },
      { word: 'wishes', phonetic: '/ˈwɪʃɪz/', meaning: '祝愿' }
    ],
    notes: [
      '"I hope you are well" 希望你一切安好。书信常用开头。',
      '"a view of" 看到……的景色。',
      '"Best wishes" 最好的祝愿。书信常用结尾。'
    ],
    tags: ['书信', '工作'],
    difficulty: 2,
    summary: '一封给朋友的信——告诉汤姆自己的新工作。',
    summaryEn: 'A letter to Tom about my new job at a bank.',
  },
  {
    id: 121,
    title: 'Dear me!',
    titleCn: '天哪！',
    text: [
      'Oh dear! I\'ve lost my keys.',
      'Where did you last have them?',
      'I think I left them in the kitchen.',
      'Let\'s look in the kitchen.',
      'They\'re not on the table.',
      'They\'re not on the counter either.',
      'Wait! They\'re in my pocket!',
      'Oh, what a relief!'
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
      { word: 'dear', phonetic: '/dɪə/', meaning: '天哪' },
      { word: 'key', phonetic: '/kiː/', meaning: '钥匙' },
      { word: 'lose', phonetic: '/luːz/', meaning: '丢失' },
      { word: 'kitchen', phonetic: '/ˈkɪtʃɪn/', meaning: '厨房' },
      { word: 'counter', phonetic: '/ˈkaʊntə/', meaning: '柜台' },
      { word: 'pocket', phonetic: '/ˈpɒkɪt/', meaning: '口袋' },
      { word: 'relief', phonetic: '/rɪˈliːf/', meaning: '松了口气' },
      { word: 'think', phonetic: '/θɪŋk/', meaning: '想' }
    ],
    notes: [
      '"Oh dear!" 天哪！表示惊讶或担忧。',
      '"What a relief!" 真是松了口气！',
      '"I think I left them" 我想我把它们落在了……。'
    ],
    tags: ['日常对话', '感叹句'],
    difficulty: 1,
    summary: '找钥匙——最后发现一直在自己口袋里。',
    summaryEn: 'Looking for lost keys — they were in my pocket all along.',
  },
  {
    id: 122,
    title: 'Breakfast or lunch?',
    titleCn: '早餐还是午餐？',
    text: [
      'It was a beautiful Sunday morning.',
      'Everyone was having breakfast except Tom.',
      'Tom was still in bed.',
      'His mother called him.',
      '"Tom! It\'s time for breakfast!"',
      'Tom opened one eye.',
      '"But I\'m not hungry, Mum."',
      '"It\'s almost lunchtime!" said his mother.',
      '"Then I\'ll wait for lunch," said Tom and went back to sleep.'
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
      ''
    ],
    vocabulary: [
      { word: 'beautiful', phonetic: '/ˈbjuːtɪfl/', meaning: '美丽的' },
      { word: 'everyone', phonetic: '/ˈevriwʌn/', meaning: '每个人' },
      { word: 'except', phonetic: '/ɪkˈsept/', meaning: '除了' },
      { word: 'still', phonetic: '/stɪl/', meaning: '仍然' },
      { word: 'almost', phonetic: '/ˈɔːlməʊst/', meaning: '几乎' },
      { word: 'lunchtime', phonetic: '/ˈlʌntʃtaɪm/', meaning: '午餐时间' },
      { word: 'wait', phonetic: '/weɪt/', meaning: '等待' },
      { word: 'sleep', phonetic: '/sliːp/', meaning: '睡觉' }
    ],
    notes: [
      '"It\'s time for breakfast" 该吃早餐了。',
      '"almost lunchtime" 快到午餐时间了。',
      '"went back to sleep" 继续睡觉。'
    ],
    tags: ['家庭幽默', '一般过去时'],
    difficulty: 1,
    summary: '汤姆周日不想起床——干脆等到午餐再吃。',
    summaryEn: 'Tom won\'t get up on Sunday — decides to wait for lunch instead.',
  },
  {
    id: 123,
    title: 'A walk in the park',
    titleCn: '公园散步',
    text: [
      'The children were playing in the park.',
      'They were running and jumping.',
      'A little girl fell down and started to cry.',
      'Her mother ran over and picked her up.',
      '"Are you all right?" she asked.',
      'The girl stopped crying and smiled.',
      '"I\'m OK, Mum," she said.',
      'Then she ran back to play with her friends.'
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
      { word: 'park', phonetic: '/pɑːk/', meaning: '公园' },
      { word: 'run', phonetic: '/rʌn/', meaning: '跑' },
      { word: 'jump', phonetic: '/dʒʌmp/', meaning: '跳' },
      { word: 'fall', phonetic: '/fɔːl/', meaning: '摔倒' },
      { word: 'cry', phonetic: '/kraɪ/', meaning: '哭' },
      { word: 'smile', phonetic: '/smaɪl/', meaning: '微笑' },
      { word: 'pick up', phonetic: '/pɪk ʌp/', meaning: '抱起' },
      { word: 'play with', phonetic: '/pleɪ wɪð/', meaning: '和……玩' }
    ],
    notes: [
      '"fell down" 摔倒了。fall-fell-fallen。',
      '"started to cry" 开始哭。',
      '"picked her up" 把她抱起来。'
    ],
    tags: ['公园', '一般过去时'],
    difficulty: 1,
    summary: '小女孩在公园摔倒哭了，妈妈把她抱起来后她又继续玩了。',
    summaryEn: 'A little girl falls in the park, cries, then goes back to playing.',
  },
  {
    id: 124,
    title: 'A visit to the museum',
    titleCn: '参观博物馆',
    text: [
      'Our class went to the museum yesterday.',
      'The museum has many interesting things.',
      'We saw dinosaur bones and old coins.',
      'We saw paintings by famous artists.',
      'The guide told us about the history of the city.',
      'We learned a lot.',
      'We want to go back again soon.'
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
      { word: 'museum', phonetic: '/mjuˈziːəm/', meaning: '博物馆' },
      { word: 'dinosaur', phonetic: '/ˈdaɪnəsɔː/', meaning: '恐龙' },
      { word: 'bone', phonetic: '/bəʊn/', meaning: '骨头' },
      { word: 'coin', phonetic: '/kɔɪn/', meaning: '硬币' },
      { word: 'artist', phonetic: '/ˈɑːtɪst/', meaning: '艺术家' },
      { word: 'guide', phonetic: '/ɡaɪd/', meaning: '导游' },
      { word: 'history', phonetic: '/ˈhɪstri/', meaning: '历史' },
      { word: 'learn', phonetic: '/lɜːn/', meaning: '学习' }
    ],
    notes: [
      '"went to the museum" 去了博物馆。',
      '"learned a lot" 学到了很多。',
      '"famous artists" 著名的艺术家。'
    ],
    tags: ['教育活动', '一般过去时'],
    difficulty: 1,
    summary: '班级去博物馆参观——恐龙骨头、硬币、名画。',
    summaryEn: 'Class visit to the museum — dinosaur bones, coins, famous paintings.',
  },
  {
    id: 125,
    title: 'The clever monkey',
    titleCn: '聪明的猴子',
    text: [
      'A man had a clever monkey.',
      'The monkey could do many tricks.',
      'One day, the man was very ill.',
      'He could not get out of bed.',
      'The monkey went to the kitchen and made some soup.',
      'He brought the soup to the man.',
      'The man ate the soup and felt much better.',
      'The monkey was very happy.'
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
      { word: 'clever', phonetic: '/ˈklevə/', meaning: '聪明的' },
      { word: 'monkey', phonetic: '/ˈmʌŋki/', meaning: '猴子' },
      { word: 'trick', phonetic: '/trɪk/', meaning: '把戏' },
      { word: 'ill', phonetic: '/ɪl/', meaning: '生病的' },
      { word: 'soup', phonetic: '/suːp/', meaning: '汤' },
      { word: 'bring', phonetic: '/brɪŋ/', meaning: '带来' },
      { word: 'better', phonetic: '/ˈbetə/', meaning: '更好的' },
      { word: 'happy', phonetic: '/ˈhæpi/', meaning: '快乐的' }
    ],
    notes: [
      '"could do many tricks" 会很多把戏。',
      '"could not get out of bed" 不能起床。',
      '"felt much better" 感觉好多了。'
    ],
    tags: ['动物故事', '一般过去时'],
    difficulty: 1,
    summary: '一只聪明的猴子给生病的主人做汤。',
    summaryEn: 'A clever monkey makes soup for his sick master.',
  },
  {
    id: 126,
    title: 'What\'s the weather like?',
    titleCn: '天气怎么样？',
    text: [
      'What\'s the weather like in your country?',
      'It\'s very hot in summer and very cold in winter.',
      'Does it rain a lot?',
      'Yes, it does. It rains a lot in spring and autumn.',
      'Does it snow in winter?',
      'Yes, it does. Sometimes the snow is very deep.',
      'Do you like the weather?',
      'I like summer, but I don\'t like winter. It\'s too cold.'
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
      { word: 'weather', phonetic: '/ˈweðə/', meaning: '天气' },
      { word: 'hot', phonetic: '/hɒt/', meaning: '热的' },
      { word: 'cold', phonetic: '/kəʊld/', meaning: '冷的' },
      { word: 'rain', phonetic: '/reɪn/', meaning: '下雨' },
      { word: 'snow', phonetic: '/snəʊ/', meaning: '下雪' },
      { word: 'deep', phonetic: '/diːp/', meaning: '深的' },
      { word: 'spring', phonetic: '/sprɪŋ/', meaning: '春天' },
      { word: 'autumn', phonetic: '/ˈɔːtəm/', meaning: '秋天' }
    ],
    notes: [
      '"What\'s the weather like?" 天气怎么样？',
      '"Does it rain a lot?" 经常下雨吗？',
      '"too cold" 太冷了。'
    ],
    tags: ['天气', '一般现在时'],
    difficulty: 1,
    summary: '谈论不同国家的天气——夏天热冬天冷。',
    summaryEn: 'Talking about weather in different countries.',
  },
  {
    id: 127,
    title: 'A small mistake',
    titleCn: '一个小错误',
    text: [
      'A man went into a bank and asked for a loan.',
      '"How much do you want?" asked the clerk.',
      '"One dollar," said the man.',
      '"Only one dollar?" asked the clerk in surprise.',
      '"Yes, only one dollar," said the man.',
      '"Do you have any security?" asked the clerk.',
      'The man showed the clerk a pile of stocks and bonds.',
      '"These are worth one million dollars," he said.',
      'The clerk was very surprised.'
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
      ''
    ],
    vocabulary: [
      { word: 'bank', phonetic: '/bæŋk/', meaning: '银行' },
      { word: 'loan', phonetic: '/ləʊn/', meaning: '贷款' },
      { word: 'dollar', phonetic: '/ˈdɒlə/', meaning: '美元' },
      { word: 'clerk', phonetic: '/klɑːk/', meaning: '职员' },
      { word: 'security', phonetic: '/sɪˈkjʊərəti/', meaning: '抵押品' },
      { word: 'stocks', phonetic: '/stɒks/', meaning: '股票' },
      { word: 'bonds', phonetic: '/bɒndz/', meaning: '债券' },
      { word: 'surprised', phonetic: '/səˈpraɪzd/', meaning: '惊讶的' },
      { word: 'worth', phonetic: '/wɜːθ/', meaning: '价值' }
    ],
    notes: [
      '"asked for a loan" 申请贷款。',
      '"in surprise" 惊讶地。',
      '"are worth one million" 价值一百万。'
    ],
    tags: ['银行', '幽默故事'],
    difficulty: 3,
    summary: '一个人只借一美元，却用价值百万的股票作抵押。',
    summaryEn: 'A man borrows only one dollar but uses a million dollars in stocks as security.',
  },
  {
    id: 128,
    title: 'The best and the worst',
    titleCn: '最好的和最差的',
    text: [
      'Joe Sanders has the most beautiful garden in our town.',
      'Nearly everybody enters for "The Nicest Garden Competition" each year.',
      'Joe wins every time.',
      'Bill Frith\'s garden is larger than Joe\'s.',
      'Bill works harder than Joe and grows more flowers and vegetables.',
      'But Joe\'s garden is more interesting.',
      'He has made neat paths and has built a wooden bridge over a pool.'
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
      { word: 'beautiful', phonetic: '/ˈbjuːtɪfl/', meaning: '美丽的' },
      { word: 'competition', phonetic: '/ˌkɒmpəˈtɪʃn/', meaning: '比赛' },
      { word: 'win', phonetic: '/wɪn/', meaning: '赢' },
      { word: 'large', phonetic: '/lɑːdʒ/', meaning: '大的' },
      { word: 'hard', phonetic: '/hɑːd/', meaning: '努力地' },
      { word: 'neat', phonetic: '/niːt/', meaning: '整洁的' },
      { word: 'path', phonetic: '/pɑːθ/', meaning: '小路' },
      { word: 'wooden', phonetic: '/ˈwʊdn/', meaning: '木制的' },
      { word: 'pool', phonetic: '/puːl/', meaning: '水池' }
    ],
    notes: [
      '"the most beautiful" 最美丽的。最高级。',
      '"larger than" 比……更大。比较级。',
      '"works harder than" 比……工作更努力。'
    ],
    tags: ['比较级和最高级', '花园'],
    difficulty: 2,
    summary: '乔的花园年年得第一——虽然比尔的更大，但乔的更有趣。',
    summaryEn: 'Joe wins the garden competition every time — his garden is more interesting.',
  },
  {
    id: 129,
    title: 'A trip to Australia',
    titleCn: '澳大利亚之旅',
    text: [
      'My sister went to Australia last year.',
      'She visited Sydney and saw the Opera House.',
      'She also went to the Great Barrier Reef.',
      'She saw many beautiful fish and coral.',
      'She stayed with an Australian family.',
      'They were very kind and friendly.',
      'She said it was the best holiday she had ever had.'
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
      { word: 'Australia', phonetic: '/ɒˈstreɪliə/', meaning: '澳大利亚' },
      { word: 'Sydney', phonetic: '/ˈsɪdni/', meaning: '悉尼' },
      { word: 'opera', phonetic: '/ˈɒpərə/', meaning: '歌剧' },
      { word: 'reef', phonetic: '/riːf/', meaning: '珊瑚礁' },
      { word: 'coral', phonetic: '/ˈkɒrəl/', meaning: '珊瑚' },
      { word: 'Australian', phonetic: '/ɒˈstreɪliən/', meaning: '澳大利亚的' },
      { word: 'kind', phonetic: '/kaɪnd/', meaning: '善良的' },
      { word: 'ever', phonetic: '/ˈevə/', meaning: '曾经' }
    ],
    notes: [
      '"the best holiday she had ever had" 她度过的最好的假期。过去完成时+最高级。',
      '"stayed with" 住在……家里。'
    ],
    tags: ['旅行', '最高级'],
    difficulty: 2,
    summary: '姐姐的澳大利亚之旅——悉尼歌剧院、大堡礁。',
    summaryEn: 'My sister\'s trip to Australia — Sydney Opera House and Great Barrier Reef.',
  },
  {
    id: 130,
    title: 'Television',
    titleCn: '电视',
    text: [
      'Television is one of the most important inventions of the twentieth century.',
      'It has changed the way we live and work.',
      'We can watch news, films, and sports from all over the world.',
      'Some people think television is bad for children.',
      'Others think it is a useful tool for education.',
      'Whatever your opinion, television is here to stay.'
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
      { word: 'television', phonetic: '/ˈtelɪvɪʒn/', meaning: '电视' },
      { word: 'invention', phonetic: '/ɪnˈvenʃn/', meaning: '发明' },
      { word: 'century', phonetic: '/ˈsentʃəri/', meaning: '世纪' },
      { word: 'change', phonetic: '/tʃeɪndʒ/', meaning: '改变' },
      { word: 'news', phonetic: '/njuːz/', meaning: '新闻' },
      { word: 'sport', phonetic: '/spɔːt/', meaning: '运动' },
      { word: 'opinion', phonetic: '/əˈpɪnjən/', meaning: '观点' },
      { word: 'useful', phonetic: '/ˈjuːsfl/', meaning: '有用的' }
    ],
    notes: [
      '"one of the most" 最……之一。',
      '"the way we live" 我们生活的方式。',
      '"here to stay" 会一直存在。'
    ],
    tags: ['科技', '议论文'],
    difficulty: 3,
    summary: '讨论电视的影响——改变了生活，既是娱乐也是教育工具。',
    summaryEn: 'Discussing the impact of television — entertainment and education.',
  },
  {
    id: 131,
    title: 'The story of a farmer',
    titleCn: '一个农夫的故事',
    text: [
      'A farmer lived in a small village.',
      'He had a small farm with a few chickens and cows.',
      'Every morning, he woke up at five o\'clock.',
      'He fed the animals and collected the eggs.',
      'He sold the eggs and milk at the market.',
      'He worked very hard but he was happy.',
      'He said, "I don\'t have much money, but I have everything I need."'
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
      { word: 'farmer', phonetic: '/ˈfɑːmə/', meaning: '农夫' },
      { word: 'village', phonetic: '/ˈvɪlɪdʒ/', meaning: '村庄' },
      { word: 'farm', phonetic: '/fɑːm/', meaning: '农场' },
      { word: 'chicken', phonetic: '/ˈtʃɪkɪn/', meaning: '鸡' },
      { word: 'cow', phonetic: '/kaʊ/', meaning: '牛' },
      { word: 'feed', phonetic: '/fiːd/', meaning: '喂养' },
      { word: 'market', phonetic: '/ˈmɑːkɪt/', meaning: '市场' },
      { word: 'everything', phonetic: '/ˈevriθɪŋ/', meaning: '一切' }
    ],
    notes: [
      '"woke up at five" 五点醒来。wake-woke-woken。',
      '"fed the animals" 喂动物。feed-fed-fed。',
      '"everything I need" 我需要的一切。'
    ],
    tags: ['农村生活', '一般过去时'],
    difficulty: 1,
    summary: '一个农夫的故事——虽然不富裕但很满足。',
    summaryEn: 'A farmer\'s story — not rich but happy with everything he needs.',
  },
  {
    id: 132,
    title: 'A lucky escape',
    titleCn: '幸运的逃脱',
    text: [
      'A man was driving home late at night.',
      'Suddenly, a deer ran across the road.',
      'The man braked hard and stopped just in time.',
      'The deer looked at him and ran away.',
      'The man was very shaken but not hurt.',
      'He said it was the luckiest escape of his life.'
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
      { word: 'suddenly', phonetic: '/ˈsʌdənli/', meaning: '突然' },
      { word: 'deer', phonetic: '/dɪə/', meaning: '鹿' },
      { word: 'road', phonetic: '/rəʊd/', meaning: '路' },
      { word: 'brake', phonetic: '/breɪk/', meaning: '刹车' },
      { word: 'just in time', phonetic: '/dʒʌst ɪn taɪm/', meaning: '刚好来得及' },
      { word: 'shaken', phonetic: '/ˈʃeɪkən/', meaning: '受惊的' },
      { word: 'hurt', phonetic: '/hɜːt/', meaning: '受伤' },
      { word: 'luckiest', phonetic: '/ˈlʌkiɪst/', meaning: '最幸运的' }
    ],
    notes: [
      '"ran across the road" 跑过马路。',
      '"just in time" 刚好来得及。',
      '"the luckiest escape" 最幸运的逃脱。最高级。'
    ],
    tags: ['事故', '最高级'],
    difficulty: 2,
    summary: '深夜开车差点撞到鹿——最幸运的逃脱。',
    summaryEn: 'A man narrowly avoids hitting a deer — the luckiest escape.',
  },
  {
    id: 133,
    title: 'A surprise test',
    titleCn: '突击测验',
    text: [
      'The teacher walked into the classroom.',
      '"Put away your books," she said. "We\'re having a test."',
      'The students were very surprised.',
      '"But you didn\'t tell us about a test!" said one student.',
      '"That\'s why it\'s a surprise test," said the teacher.',
      'The students were worried but they tried their best.',
      'After the test, the teacher said, "You all did very well."'
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
      { word: 'classroom', phonetic: '/ˈklɑːsruːm/', meaning: '教室' },
      { word: 'test', phonetic: '/test/', meaning: '测验' },
      { word: 'surprised', phonetic: '/səˈpraɪzd/', meaning: '惊讶的' },
      { word: 'student', phonetic: '/ˈstjuːdnt/', meaning: '学生' },
      { word: 'worried', phonetic: '/ˈwʌrid/', meaning: '担心的' },
      { word: 'try', phonetic: '/traɪ/', meaning: '尝试' },
      { word: 'best', phonetic: '/best/', meaning: '最好' },
      { word: 'well', phonetic: '/wel/', meaning: '好地' }
    ],
    notes: [
      '"Put away your books" 收起你们的书。',
      '"tried their best" 尽了最大努力。',
      '"did very well" 做得很好。'
    ],
    tags: ['学校', '一般过去时'],
    difficulty: 1,
    summary: '老师宣布突击测验——学生们惊讶但都做得很好。',
    summaryEn: 'Teacher announces a surprise test — students are surprised but do well.',
  },
  {
    id: 134,
    title: 'A kind doctor',
    titleCn: '善良的医生',
    text: [
      'Dr. Smith is a very kind doctor.',
      'He has been looking after sick people for thirty years.',
      'He gets up early every morning and goes to the hospital.',
      'He sees many patients every day.',
      'He always listens to them carefully.',
      'He never rushes them.',
      'The people in the town all love him.',
      'They say he is the best doctor they have ever had.'
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
      { word: 'kind', phonetic: '/kaɪnd/', meaning: '善良的' },
      { word: 'sick', phonetic: '/sɪk/', meaning: '生病的' },
      { word: 'hospital', phonetic: '/ˈhɒspɪtl/', meaning: '医院' },
      { word: 'patient', phonetic: '/ˈpeɪʃnt/', meaning: '病人' },
      { word: 'carefully', phonetic: '/ˈkeəfəli/', meaning: '仔细地' },
      { word: 'rush', phonetic: '/rʌʃ/', meaning: '催促' },
      { word: 'listen', phonetic: '/ˈlɪsn/', meaning: '听' },
      { word: 'love', phonetic: '/lʌv/', meaning: '爱' }
    ],
    notes: [
      '"has been looking after" 一直在照顾。现在完成进行时。',
      '"the best doctor they have ever had" 他们拥有过的最好的医生。'
    ],
    tags: ['人物描写', '现在完成进行时'],
    difficulty: 2,
    summary: '史密斯医生——三十年如一日地照顾病人，深受大家爱戴。',
    summaryEn: 'Dr. Smith — caring for sick people for thirty years, loved by everyone.',
  },
  {
    id: 135,
    title: 'A beautiful garden',
    titleCn: '一个美丽的花园',
    text: [
      'Mrs. Brown has a beautiful garden.',
      'She grows many kinds of flowers.',
      'In spring, the tulips and daffodils bloom.',
      'In summer, the roses are red and white.',
      'She also grows vegetables — tomatoes, beans, and peas.',
      'She spends every morning in her garden.',
      'Her neighbours often stop to admire her garden.',
      'She says gardening is her favourite hobby.'
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
      { word: 'grow', phonetic: '/ɡrəʊ/', meaning: '种植' },
      { word: 'bloom', phonetic: '/bluːm/', meaning: '开花' },
      { word: 'tulip', phonetic: '/ˈtjuːlɪp/', meaning: '郁金香' },
      { word: 'daffodil', phonetic: '/ˈdæfədɪl/', meaning: '水仙' },
      { word: 'rose', phonetic: '/rəʊz/', meaning: '玫瑰' },
      { word: 'tomato', phonetic: '/təˈmɑːtəʊ/', meaning: '番茄' },
      { word: 'bean', phonetic: '/biːn/', meaning: '豆' },
      { word: 'admire', phonetic: '/ədˈmaɪə/', meaning: '欣赏' },
      { word: 'gardening', phonetic: '/ˈɡɑːdnɪŋ/', meaning: '园艺' },
      { word: 'favourite', phonetic: '/ˈfeɪvərɪt/', meaning: '最喜欢的' }
    ],
    notes: [
      '"many kinds of" 许多种类的。',
      '"stop to admire" 停下来欣赏。',
      '"her favourite hobby" 她最喜欢的爱好。'
    ],
    tags: ['爱好', '一般现在时'],
    difficulty: 1,
    summary: '布朗太太的美丽花园——种花种菜，邻居们都来欣赏。',
    summaryEn: 'Mrs. Brown\'s beautiful garden with flowers and vegetables.',
  },
  {
    id: 136,
    title: 'At the airport',
    titleCn: '在机场',
    text: [
      'We arrived at the airport two hours before the flight.',
      'We checked in our luggage and went through security.',
      'We had a cup of coffee while we waited.',
      'The flight was announced at half past ten.',
      'We boarded the plane and found our seats.',
      'The plane took off on time.',
      'It was a smooth flight.',
      'We landed safely at our destination.'
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
      { word: 'luggage', phonetic: '/ˈlʌɡɪdʒ/', meaning: '行李' },
      { word: 'security', phonetic: '/sɪˈkjʊərəti/', meaning: '安全检查' },
      { word: 'announce', phonetic: '/əˈnaʊns/', meaning: '宣布' },
      { word: 'board', phonetic: '/bɔːd/', meaning: '登机' },
      { word: 'smooth', phonetic: '/smuːð/', meaning: '平稳的' },
      { word: 'destination', phonetic: '/ˌdestɪˈneɪʃn/', meaning: '目的地' }
    ],
    notes: [
      '"two hours before the flight" 起飞前两小时。',
      '"checked in our luggage" 托运行李。',
      '"took off on time" 准时起飞。'
    ],
    tags: ['旅行', '机场'],
    difficulty: 2,
    summary: '描述一次顺利的飞行经历——从机场到安全着陆。',
    summaryEn: 'A smooth flight experience — from airport check-in to safe landing.',
  },
  {
    id: 137,
    title: 'An unusual day',
    titleCn: '不寻常的一天',
    text: [
      'Yesterday was an unusual day.',
      'I woke up late and missed the bus.',
      'I had to walk to work in the rain.',
      'I got very wet and arrived late.',
      'My boss was not happy.',
      'But in the afternoon, something good happened.',
      'I got a promotion!',
      'It was the best day of my life.'
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
      { word: 'unusual', phonetic: '/ʌnˈjuːʒuəl/', meaning: '不寻常的' },
      { word: 'miss', phonetic: '/mɪs/', meaning: '错过' },
      { word: 'wet', phonetic: '/wet/', meaning: '湿的' },
      { word: 'late', phonetic: '/leɪt/', meaning: '迟到的' },
      { word: 'boss', phonetic: '/bɒs/', meaning: '老板' },
      { word: 'happen', phonetic: '/ˈhæpən/', meaning: '发生' },
      { word: 'promotion', phonetic: '/prəˈməʊʃn/', meaning: '升职' },
      { word: 'best', phonetic: '/best/', meaning: '最好的' }
    ],
    notes: [
      '"missed the bus" 错过了公交车。',
      '"got very wet" 淋湿了。',
      '"got a promotion" 得到了升职。'
    ],
    tags: ['一般过去时', '人生故事'],
    difficulty: 2,
    summary: '不寻常的一天——迟到淋雨，但下午却升职了。',
    summaryEn: 'An unusual day — late and wet in the morning, but got a promotion in the afternoon.',
  },
  {
    id: 138,
    title: 'A good memory',
    titleCn: '好记性',
    text: [
      'My grandmother has a very good memory.',
      'She can remember things that happened fifty years ago.',
      'She remembers every person she has ever met.',
      'She can tell you the date of every birthday.',
      'She says the secret is to keep your mind active.',
      'She reads a lot and does crossword puzzles every day.',
      'She says, "If you don\'t use your brain, you\'ll lose it."'
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
      { word: 'memory', phonetic: '/ˈmeməri/', meaning: '记忆' },
      { word: 'remember', phonetic: '/rɪˈmembə/', meaning: '记住' },
      { word: 'happen', phonetic: '/ˈhæpən/', meaning: '发生' },
      { word: 'date', phonetic: '/deɪt/', meaning: '日期' },
      { word: 'active', phonetic: '/ˈæktɪv/', meaning: '活跃的' },
      { word: 'crossword', phonetic: '/ˈkrɒswɜːd/', meaning: '填字游戏' },
      { word: 'puzzle', phonetic: '/ˈpʌzl/', meaning: '谜题' },
      { word: 'brain', phonetic: '/breɪn/', meaning: '大脑' }
    ],
    notes: [
      '"things that happened" 发生过的事情。定语从句。',
      '"keep your mind active" 保持头脑活跃。',
      '"If you don\'t use... you\'ll lose it" 不用就会退步。'
    ],
    tags: ['健康', '一般现在时'],
    difficulty: 2,
    summary: '祖母的好记性——秘诀是保持头脑活跃。',
    summaryEn: 'Grandmother\'s good memory — the secret is keeping your mind active.',
  },
  {
    id: 139,
    title: 'The oldest profession',
    titleCn: '最古老的职业',
    text: [
      'People often ask what the oldest profession is.',
      'Some say it is farming.',
      'Others say it is teaching.',
      'But the truth is, we don\'t really know.',
      'What we do know is that people have always needed food, shelter, and education.',
      'These needs have created many different professions throughout history.'
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
      { word: 'profession', phonetic: '/prəˈfeʃn/', meaning: '职业' },
      { word: 'farming', phonetic: '/ˈfɑːmɪŋ/', meaning: '农业' },
      { word: 'teaching', phonetic: '/ˈtiːtʃɪŋ/', meaning: '教学' },
      { word: 'truth', phonetic: '/truːθ/', meaning: '真相' },
      { word: 'shelter', phonetic: '/ˈʃeltə/', meaning: '住所' },
      { word: 'education', phonetic: '/ˌedʒuˈkeɪʃn/', meaning: '教育' },
      { word: 'create', phonetic: '/kriˈeɪt/', meaning: '创造' },
      { word: 'throughout', phonetic: '/θruːˈaʊt/', meaning: '贯穿' }
    ],
    notes: [
      '"the oldest profession" 最古老的职业。',
      '"What we do know" 我们确实知道的。强调。',
      '"throughout history" 贯穿历史。'
    ],
    tags: ['职业', '议论文'],
    difficulty: 3,
    summary: '讨论最古老的职业——农业、教学，还是无从得知。',
    summaryEn: 'Discussion of the oldest profession — farming, teaching, or unknown.',
  },
  {
    id: 140,
    title: 'A lesson in politeness',
    titleCn: '礼貌课',
    text: [
      'A young man was rude to an old woman on the bus.',
      'He didn\'t offer her his seat.',
      'An old man saw this and said, "Young man, you should be more polite."',
      'The young man said, "Why should I? She\'s not my mother."',
      'The old man said, "But she is someone\'s mother."',
      'The young man felt ashamed and gave the woman his seat.',
      'He learned an important lesson that day.'
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
      { word: 'rude', phonetic: '/ruːd/', meaning: '粗鲁的' },
      { word: 'offer', phonetic: '/ˈɒfə/', meaning: '提供' },
      { word: 'seat', phonetic: '/siːt/', meaning: '座位' },
      { word: 'polite', phonetic: '/pəˈlaɪt/', meaning: '有礼貌的' },
      { word: 'ashamed', phonetic: '/əˈʃeɪmd/', meaning: '惭愧的' },
      { word: 'important', phonetic: '/ɪmˈpɔːtnt/', meaning: '重要的' },
      { word: 'lesson', phonetic: '/ˈlesn/', meaning: '教训' },
      { word: 'someone', phonetic: '/ˈsʌmwʌn/', meaning: '某人' }
    ],
    notes: [
      '"was rude to" 对……粗鲁。',
      '"offer her his seat" 给她让座。',
      '"felt ashamed" 感到惭愧。'
    ],
    tags: ['道德故事', '礼貌'],
    difficulty: 2,
    summary: '一个年轻人不给老人让座，被教育后感到惭愧。',
    summaryEn: 'A young man learns a lesson in politeness on the bus.',
  },
  {
    id: 141,
    title: 'The Olympic Games',
    titleCn: '奥林匹克运动会',
    text: [
      'The Olympic Games are held every four years.',
      'Athletes from all over the world compete in many different sports.',
      'The Games begin with the opening ceremony.',
      'The torch is lit and the games begin.',
      'The athletes try their best to win medals.',
      'Gold medals are for first place, silver for second, and bronze for third.',
      'The Games end with the closing ceremony.'
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
      { word: 'Olympic', phonetic: '/əˈlɪmpɪk/', meaning: '奥林匹克' },
      { word: 'athlete', phonetic: '/ˈæθliːt/', meaning: '运动员' },
      { word: 'compete', phonetic: '/kəmˈpiːt/', meaning: '竞争' },
      { word: 'ceremony', phonetic: '/ˈserəməni/', meaning: '仪式' },
      { word: 'torch', phonetic: '/tɔːtʃ/', meaning: '火炬' },
      { word: 'medal', phonetic: '/ˈmedl/', meaning: '奖牌' },
      { word: 'gold', phonetic: '/ɡəʊld/', meaning: '金牌' },
      { word: 'silver', phonetic: '/ˈsɪlvə/', meaning: '银牌' },
      { word: 'bronze', phonetic: '/brɒnz/', meaning: '铜牌' }
    ],
    notes: [
      '"every four years" 每四年。',
      '"from all over the world" 来自世界各地。',
      '"try their best" 尽最大努力。'
    ],
    tags: ['体育', '奥运会'],
    difficulty: 2,
    summary: '介绍奥林匹克运动会——四年一次，全球运动员竞技。',
    summaryEn: 'Introduction to the Olympic Games — held every four years, athletes worldwide.',
  },
  {
    id: 142,
    title: 'A clever dog',
    titleCn: '聪明的狗',
    text: [
      'A man had a very clever dog named Bobby.',
      'Every morning, the man went to the newspaper shop.',
      'Bobby went with him and carried the newspaper home.',
      'One day, the man was ill and couldn\'t go out.',
      'Bobby went to the shop alone.',
      'He brought the newspaper home by himself.',
      'The shopkeeper was very surprised.',
      'He said, "That\'s the cleverest dog I\'ve ever seen!"'
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
      { word: 'clever', phonetic: '/ˈklevə/', meaning: '聪明的' },
      { word: 'named', phonetic: '/neɪmd/', meaning: '名叫' },
      { word: 'newspaper', phonetic: '/ˈnjuːzpeɪpə/', meaning: '报纸' },
      { word: 'carry', phonetic: '/ˈkæri/', meaning: '携带' },
      { word: 'alone', phonetic: '/əˈləʊn/', meaning: '独自' },
      { word: 'himself', phonetic: '/hɪmˈself/', meaning: '他自己' },
      { word: 'shopkeeper', phonetic: '/ˈʃɒpkiːpə/', meaning: '店主' },
      { word: 'surprised', phonetic: '/səˈpraɪzd/', meaning: '惊讶的' }
    ],
    notes: [
      '"named Bobby" 名叫Bobby。过去分词作后置定语。',
      '"by himself" 独自地。',
      '"the cleverest dog I\'ve ever seen" 我见过的最聪明的狗。'
    ],
    tags: ['动物故事', '最高级'],
    difficulty: 2,
    summary: '一只聪明的狗能独自去商店取报纸。',
    summaryEn: 'A clever dog named Bobby fetches the newspaper by himself.',
  },
  {
    id: 143,
    title: 'A famous person',
    titleCn: '一个名人',
    text: [
      'Albert Einstein was one of the greatest scientists of all time.',
      'He was born in Germany in 1879.',
      'He developed the theory of relativity.',
      'This changed our understanding of the universe.',
      'He won the Nobel Prize in Physics in 1921.',
      'He spent the last years of his life in the United States.',
      'He died in 1955, but his ideas still influence scientists today.'
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
      { word: 'scientist', phonetic: '/ˈsaɪəntɪst/', meaning: '科学家' },
      { word: 'Germany', phonetic: '/ˈdʒɜːməni/', meaning: '德国' },
      { word: 'develop', phonetic: '/dɪˈveləp/', meaning: '发展' },
      { word: 'theory', phonetic: '/ˈθɪəri/', meaning: '理论' },
      { word: 'relativity', phonetic: '/ˌreləˈtɪvəti/', meaning: '相对论' },
      { word: 'universe', phonetic: '/ˈjuːnɪvɜːs/', meaning: '宇宙' },
      { word: 'Nobel Prize', phonetic: '/nəʊˈbel praɪz/', meaning: '诺贝尔奖' },
      { word: 'influence', phonetic: '/ˈɪnfluəns/', meaning: '影响' },
      { word: 'physics', phonetic: '/ˈfɪzɪks/', meaning: '物理学' }
    ],
    notes: [
      '"one of the greatest" 最伟大的之一。',
      '"was born in" 出生于。',
      '"the theory of relativity" 相对论。'
    ],
    tags: ['名人', '科学史'],
    difficulty: 3,
    summary: '介绍爱因斯坦——相对论的创立者，改变了人类对宇宙的理解。',
    summaryEn: 'Albert Einstein — developed the theory of relativity, changed our understanding of the universe.',
  },
  {
    id: 144,
    title: 'Goodbye',
    titleCn: '再见',
    text: [
      'It\'s time to say goodbye.',
      'We hope you have enjoyed learning English.',
      'Remember, practice makes perfect.',
      'Keep studying and you will improve every day.',
      'Don\'t be afraid to make mistakes.',
      'That\'s how we learn.',
      'We wish you the best of luck in your English studies.',
      'Goodbye and good luck!'
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
      { word: 'goodbye', phonetic: '/ɡʊdˈbaɪ/', meaning: '再见' },
      { word: 'enjoy', phonetic: '/ɪnˈdʒɔɪ/', meaning: '享受' },
      { word: 'practice', phonetic: '/ˈpræktɪs/', meaning: '练习' },
      { word: 'perfect', phonetic: '/ˈpɜːfɪkt/', meaning: '完美的' },
      { word: 'improve', phonetic: '/ɪmˈpruːv/', meaning: '提高' },
      { word: 'afraid', phonetic: '/əˈfreɪd/', meaning: '害怕的' },
      { word: 'mistake', phonetic: '/mɪˈsteɪk/', meaning: '错误' },
      { word: 'luck', phonetic: '/lʌk/', meaning: '运气' }
    ],
    notes: [
      '"practice makes perfect" 熟能生巧。',
      '"Don\'t be afraid to make mistakes" 不要害怕犯错。',
      '"the best of luck" 祝好运。'
    ],
    tags: ['告别', '鼓励'],
    difficulty: 1,
    summary: '最后一课——鼓励学生继续学习，熟能生巧。',
    summaryEn: 'The final lesson — encouraging students to keep learning. Practice makes perfect.',
  }
]

export default book1
