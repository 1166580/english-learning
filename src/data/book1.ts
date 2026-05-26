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
  },
]

export default book1
