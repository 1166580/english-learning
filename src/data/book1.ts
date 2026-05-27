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
]

export default book1
