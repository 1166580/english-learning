import type { Lesson } from '../types'

const book4: Lesson[] = [
  {
    id: 1,
    title: 'Finding fossil man',
    titleCn: '发现化石人',
    text: [
      'We can read of things that happened 5,000 years ago in the Near East, where people first learned to write. But there are some parts of the world where even now people cannot write.',
      'The only way that they can preserve their history is to recount it as sagas — legends handed down from one generation of storytellers to another. These legends are useful because they can tell us something about migrations of people who lived long ago, but none could write down what they did.',
      'Anthropologists wondered where the remote ancestors of the Polynesian peoples now living in the Pacific Islands came from. The sagas of these people explain that some of them came from Indonesia about 2,000 years ago.',
      'But the first people who were like ourselves lived so long ago that even their sagas, if they had any, are forgotten. So archaeologists have neither history nor legends to help them to find out where the first "modern men" came from.'
    ],
    textCn: [
      '我们可以读到5000年前在近东发生的事情，那里的人们最早学会了书写。但世界上仍有一些地方的人至今不会写字。',
      '他们保存历史的唯一方法就是把历史当作英雄故事口述下来——这些传说是从一代讲故事的人传给另一代的。这些传说很有用，因为它们能告诉我们关于很久以前生活的人们的迁徙信息。',
      '人类学家想知道现在生活在太平洋群岛上的波利尼西亚人的远祖来自哪里。这些人的传说解释说，其中一些人大约2000年前来自印度尼西亚。',
      '但是和我们相似的最早的人生活得太久远了，即使他们有传说，也已被遗忘。所以考古学家既没有历史也没有传说来帮助他们找出最早的"现代人"来自哪里。'
    ],
    vocabulary: [
      { word: 'fossil', phonetic: '/ˈfɒsl/', meaning: '化石' },
      { word: 'preserve', phonetic: '/prɪˈzɜːv/', meaning: '保存' },
      { word: 'recount', phonetic: '/rɪˈkaʊnt/', meaning: '叙述' },
      { word: 'saga', phonetic: '/ˈsɑːɡə/', meaning: '传奇' },
      { word: 'legend', phonetic: '/ˈledʒənd/', meaning: '传说' },
      { word: 'migration', phonetic: '/maɪˈɡreɪʃn/', meaning: '迁徙' },
      { word: 'anthropologist', phonetic: '/ˌænθrəˈpɒlədʒɪst/', meaning: '人类学家' },
      { word: 'ancestor', phonetic: '/ˈænsestə/', meaning: '祖先' }
    ],
    notes: [
      '"read of" = read about。',
      '"hand down" 传承。',
      '"neither...nor..." 既不...也不...。'

    ],
    tags: ['定语从句', '否定代词', '学术词汇'],
    difficulty: 4,
    summary: '本文介绍了在没有文字的时代，人类通过口头传说（sagas）来保存历史，这些传说对人类学家研究古代民族迁徙有重要价值，但对于最早的"现代人"的起源，考古学家既无历史也无传说可依。',
    summaryEn: 'Before writing was invented, people preserved their history through oral sagas. These legends help anthropologists trace ancient migrations, but the origins of the earliest modern humans remain unknown due to the lack of both written records and legends.',
    sentenceExplanations: [
      { sentence: 'We can read of things that happened 5,000 years ago in the Near East, where people first learned to write.', translation: '我们可以读到5000年前在近东发生的事情，那里的人们最早学会了书写。', explanation: '本句包含一个非限定性定语从句"where people first learned to write"，修饰"the Near East"。"read of"意为"读到关于……的内容"，与"read about"同义。' },
      { sentence: 'The only way that they can preserve their history is to recount it as sagas — legends handed down from one generation of storytellers to another.', translation: '他们保存历史的唯一方法就是把历史当作英雄故事口述下来——这些传说是从一代讲故事的人传给另一代的。', explanation: '主语"The only way"后接定语从句"that they can preserve their history"。破折号后"sagas"的同位语"legends"进一步解释，其中"handed down"是过去分词短语作后置定语。' },
      { sentence: 'These legends are useful because they can tell us something about migrations of people who lived long ago, but none could write down what they did.', translation: '这些传说很有用，因为它们能告诉我们关于很久以前生活的人们的迁徙信息，但没有人能把他们做过的事写下来。', explanation: '"none could write down what they did"中"none"指代前文的"people who lived long ago"，"what they did"是宾语从句。注意"none"作为否定代词的用法。' },
      { sentence: 'But the first people who were like ourselves lived so long ago that even their sagas, if they had any, are forgotten.', translation: '但是和我们相似的最早的人生活得太久远了，即使他们有传说，也已被遗忘。', explanation: '"so...that..."结果状语从句结构。插入语"if they had any"使用了虚拟语气，表示与事实相反的假设——实际上他们可能根本没有传说。' },
      { sentence: 'So archaeologists have neither history nor legends to help them to find out where the first "modern men" came from.', translation: '所以考古学家既没有历史也没有传说来帮助他们找出最早的"现代人"来自哪里。', explanation: '"neither...nor..."并列否定结构，意为"既不……也不……"。"where the first modern men came from"是宾语从句，作"find out"的宾语。' },
    ],
    grammarSections: [
      {
        title: '限定性与非限定性定语从句',
        content: '定语从句分为限定性和非限定性两种。限定性定语从句对先行词起限定作用，不可省略；非限定性定语从句对先行词起补充说明作用，用逗号隔开，省略后主句意思仍然完整。  在本文中，两种定语从句交替使用，增强了文章的层次感和信息密度。',
        examples: [
          { en: 'The only way that they can preserve their history is to recount it as sagas.', cn: '他们保存历史的唯一方法就是把历史当作英雄故事口述下来。（限定性）' },
          { en: 'We can read of things that happened 5,000 years ago in the Near East, where people first learned to write.', cn: '我们可以读到5000年前在近东发生的事情，那里的人们最早学会了书写。（非限定性）' },
          { en: 'The sagas of these people explain that some of them came from Indonesia about 2,000 years ago.', cn: '这些人的传说解释说，其中一些人大约2000年前来自印度尼西亚。（宾语从句）' },
          { en: 'The first people who were like ourselves lived so long ago.', cn: '和我们相似的最早的人生活得太久远了。（限定性）' },
        ],
      },
      {
        title: 'neither...nor... 并列否定结构',
        content: '"neither...nor..."是并列连词，连接两个并列成分，表示"既不……也不……"。当连接两个主语时，谓语动词遵循"就近原则"，即与最近的主语保持一致。  与之对应的肯定形式为"both...and..."，选择形式为"either...or..."。',
        examples: [
          { en: 'Archaeologists have neither history nor legends to help them.', cn: '考古学家既没有历史也没有传说来帮助他们。' },
          { en: 'Neither he nor I am wrong.', cn: '他和我都没有错。（就近原则：与I一致用am）' },
          { en: 'She neither cried nor complained.', cn: '她既没有哭也没有抱怨。' },
          { en: 'Neither the teacher nor the students were present.', cn: '老师和学生都没有到场。' },
        ],
      },
    ],
    patternDrills: [
      {
        pattern: 'The only way that... is to... ……的唯一方法是……',
        substitutions: [
          { en: 'The only way that they can preserve their history is to recount it as sagas.', cn: '他们保存历史的唯一方法就是把历史当作英雄故事口述下来。' },
          { en: 'The only way that we can learn English well is to practise every day.', cn: '我们学好英语的唯一方法就是每天练习。' },
          { en: 'The only way that he can solve this problem is to ask for help.', cn: '他解决这个问题的唯一方法就是寻求帮助。' },
          { en: 'The only way that you can improve your writing is to read more books.', cn: '你提高写作水平的唯一方法就是多读书。' },
        ],
      },
      {
        pattern: 'so...that... 如此……以至于……',
        substitutions: [
          { en: 'The first people lived so long ago that even their sagas are forgotten.', cn: '最早的人生活得太久远了，以至于他们的传说都被遗忘了。' },
          { en: 'He spoke so quickly that I could not follow him.', cn: '他说得太快了，以至于我跟不上他。' },
          { en: 'The box is so heavy that nobody can lift it.', cn: '这个箱子太重了，没人能搬动。' },
          { en: 'She was so tired that she fell asleep at once.', cn: '她太累了，以至于立刻就睡着了。' },
        ],
      },
    ],
    exercises: [
      { type: 'choice', question: 'The only way _____ they can preserve their history is to recount it as sagas.', options: ['A. which', 'B. that', 'C. what', 'D. where'], answer: 'B', explanation: '先行词"the only way"后接定语从句，关系代词用"that"，也可省略。此处"that"引导限定性定语从句修饰"way"。' },
      { type: 'fill', question: 'Archaeologists have _____ history _____ legends to help them. (既不……也不……)', answer: 'neither...nor...', explanation: '"neither...nor..."表示"既不……也不……"，连接两个并列的名词。' },
      { type: 'judge', question: '"read of"在本文中意为"读完"。', answer: '错误', explanation: '"read of"意为"read about"，即"读到关于……的内容"，而非"读完"。' },
      { type: 'choice', question: 'The first people who were like ourselves lived _____ long ago that even their sagas are forgotten.', options: ['A. very', 'B. too', 'C. so', 'D. such'], answer: 'C', explanation: '"so...that..."是固定搭配，表示"如此……以至于……"。"very"和"too"不能与"that"搭配，"such"修饰名词。' },
    ],

  },
  {
    id: 2,
    title: 'Spare that spider',
    titleCn: '不要伤害蜘蛛',
    text: [
      'Why, you may wonder, should spiders be our friends? Because they destroy so many insects, and insects include some of the greatest enemies of the human race.',
      'Insects would make it impossible for us to live in the world; they would devour all our crops and kill our flocks and herds, if it were not for the protection we get from insect-eating animals.',
      'We owe a lot to the birds and beasts who eat insects but all of them put together kill only a fraction of the number destroyed by spiders. Moreover, unlike some of the other insect eaters, spiders never do the least harm to us or our belongings.'
    ],
    textCn: [
      '你可能会奇怪，为什么蜘蛛应该是我们的朋友？因为它们消灭了如此多的昆虫，而昆虫中包括了人类的一些最大的敌人。',
      '要不是那些食虫动物保护我们，昆虫会使我们无法在这个世界上生存；它们会吞噬我们所有的庄稼，杀死我们的牛羊。',
      '我们非常感激那些吃昆虫的鸟和兽，但它们全部加起来杀死的昆虫数量，只是蜘蛛所消灭的一小部分。此外，和其他食虫动物不同，蜘蛛丝毫不会伤害我们和我们的财物。'
    ],
    vocabulary: [
      { word: 'spider', phonetic: '/ˈspaɪdə/', meaning: '蜘蛛' },
      { word: 'insect', phonetic: '/ˈɪnsekt/', meaning: '昆虫' },
      { word: 'devour', phonetic: '/dɪˈvaʊə/', meaning: '吞食' },
      { word: 'flock', phonetic: '/flɒk/', meaning: '羊群' },
      { word: 'herd', phonetic: '/hɜːd/', meaning: '牛群' },
      { word: 'fraction', phonetic: '/ˈfrækʃn/', meaning: '一小部分' },
      { word: 'moreover', phonetic: '/mɔːˈrəʊvə/', meaning: '此外' },
      { word: 'belongings', phonetic: '/bɪˈlɒŋɪŋz/', meaning: '财物' }
    ],
    notes: [
      '虚拟语气："if it were not for..."。',
      '"owe...to" 把...归功于。',
      '"do harm to" 对...造成伤害。'

    ],
    tags: ['虚拟语气', '插入语', '过去分词作定语'],
    difficulty: 4,
    summary: '本文阐述了蜘蛛对人类的巨大贡献：它们消灭大量害虫，保护了我们的农作物和牲畜。文章使用虚拟语气假设没有蜘蛛的后果，强调我们应当保护而非伤害蜘蛛。',
    summaryEn: 'This essay explains how spiders benefit humanity by destroying vast numbers of insects that threaten our crops and livestock. Using the subjunctive mood, it argues that we should protect spiders rather than harm them.',
    sentenceExplanations: [
      { sentence: 'Why, you may wonder, should spiders be our friends?', translation: '你可能会奇怪，为什么蜘蛛应该是我们的朋友？', explanation: '插入语"you may wonder"将疑问词"why"与主句隔开，形成修辞性问句。"should"在此表示"应该"，带有轻微的惊讶语气。' },
      { sentence: 'Insects would make it impossible for us to live in the world; they would devour all our crops and kill our flocks and herds, if it were not for the protection we get from insect-eating animals.', translation: '要不是那些食虫动物保护我们，昆虫会使我们无法在这个世界上生存；它们会吞噬我们所有的庄稼，杀死我们的牛羊。', explanation: '虚拟语气条件句。"if it were not for..."表示与现在事实相反的假设。主句用"would + 动词原形"。"make it impossible for us to live"中"it"是形式宾语，真正宾语是后面的不定式。' },
      { sentence: 'We owe a lot to the birds and beasts who eat insects but all of them put together kill only a fraction of the number destroyed by spiders.', translation: '我们非常感激那些吃昆虫的鸟和兽，但它们全部加起来杀死的昆虫数量，只是蜘蛛所消灭的一小部分。', explanation: '"owe...to..."意为"把……归功于"。"all of them put together"是独立主格结构，"put together"是过去分词作状语。"destroyed by spiders"是过去分词短语作后置定语修饰"the number"。' },
      { sentence: 'Moreover, unlike some of the other insect eaters, spiders never do the least harm to us or our belongings.', translation: '此外，和其他食虫动物不同，蜘蛛丝毫不会伤害我们和我们的财物。', explanation: '"unlike"引导的介词短语作状语，表示对比。"never do the least harm"双重否定（never + least）加强肯定意味，强调蜘蛛完全无害。' },
    ],
    grammarSections: [
      {
        title: '虚拟语气（与现在事实相反）',
        content: '虚拟语气用于表达与事实相反的假设、愿望或建议。与现在事实相反的条件句中，从句用一般过去时（be动词用were），主句用"would/could/might + 动词原形"。  本文中"if it were not for..."是典型的虚拟条件句，假设没有食虫动物的保护，后果将不堪设想。',
        examples: [
          { en: 'If it were not for the protection we get from insect-eating animals, insects would make it impossible for us to live in the world.', cn: '要不是食虫动物的保护，昆虫会使我们无法在世界上生存。' },
          { en: 'If I were you, I would study harder.', cn: '如果我是你，我会更努力学习。' },
          { en: 'If he had more money, he would buy a bigger house.', cn: '如果他有更多钱，他会买更大的房子。' },
          { en: 'If she spoke French, she could work in Paris.', cn: '如果她会说法语，她就能在巴黎工作。' },
        ],
      },
      {
        title: 'owe...to... 归功于结构',
        content: '"owe A to B"表示"把A归功于B"或"欠B的A"。在表达感激和归因时非常常用。  相关搭配： - owe sb. a lot / owe a great deal to sb.（非常感激某人） - owe it to sb. to do sth.（认为自己有义务做某事）',
        examples: [
          { en: 'We owe a lot to the birds and beasts who eat insects.', cn: '我们非常感激那些吃昆虫的鸟和兽。' },
          { en: 'I owe my success to my parents.', cn: '我把我的成功归功于我的父母。' },
          { en: 'He owes his life to the doctor.', cn: '他把自己的命归功于那位医生。' },
          { en: 'We owe it to society to help those in need.', cn: '我们认为自己有义务帮助那些有需要的人。' },
        ],
      },
    ],
    patternDrills: [
      {
        pattern: 'if it were not for... 要不是……',
        substitutions: [
          { en: 'If it were not for the protection from insect-eating animals, insects would devour all our crops.', cn: '要不是食虫动物的保护，昆虫会吞噬我们所有的庄稼。' },
          { en: 'If it were not for your help, I would not have succeeded.', cn: '要不是你的帮助，我不会成功。' },
          { en: 'If it were not for the rain, we would go on a picnic.', cn: '要不是下雨，我们就去野餐了。' },
          { en: 'If it were not for modern technology, life would be much harder.', cn: '要不是现代技术，生活会艰难得多。' },
        ],
      },
      {
        pattern: 'owe...to... 把……归功于……',
        substitutions: [
          { en: 'We owe a lot to the birds and beasts who eat insects.', cn: '我们非常感激那些吃昆虫的鸟和兽。' },
          { en: 'I owe my success to hard work.', cn: '我把成功归功于努力工作。' },
          { en: 'She owes her health to regular exercise.', cn: '她把健康归功于经常锻炼。' },
          { en: 'They owe their survival to the rescue team.', cn: '他们把生存归功于救援队。' },
        ],
      },
    ],
    exercises: [
      { type: 'choice', question: 'If it _____ not for spiders, insects would destroy our crops.', options: ['A. is', 'B. was', 'C. were', 'D. be'], answer: 'C', explanation: '虚拟语气条件句中，be动词一律用"were"，不论主语是什么。"if it were not for..."是固定表达。' },
      { type: 'fill', question: 'We _____ a lot _____ the birds and beasts who eat insects. (把……归功于……)', answer: 'owe...to...', explanation: '"owe...to..."意为"把……归功于……"，是固定搭配。' },
      { type: 'judge', question: '在"all of them put together"中，"put together"是现在分词。', answer: '错误', explanation: '"put together"是过去分词短语，作状语，表示"被组合在一起"。逻辑主语"all of them"与"put"是被动关系。' },
      { type: 'choice', question: 'Insects would make it impossible for us _____ in the world.', options: ['A. live', 'B. to live', 'C. living', 'D. lived'], answer: 'B', explanation: '"make it impossible for sb. to do sth."是固定句型，"it"是形式宾语，真正的宾语是后面的不定式"to live"。' },
    ],

  },
  {
    id: 3,
    title: 'Matterhorn man',
    titleCn: '马特洪峰人',
    text: [
      'Modern alpinists try to climb mountains by a route which will give them good sport, and the more difficult it is, the more highly it is regarded.',
      'In the pioneering days, however, this was not the case at all. The early climbers were looking for the easiest way to the top because the summit was the prize they sought, especially if it had never been attained before.',
      'It is true that during their explorations they often faced difficulties and dangers of the most perilous nature, equipped in a manner which would make a modern climber shudder at the thought, but they did not go out of their way to court such excitement.'
    ],
    textCn: [
      '现代登山者试图沿着能够提供良好运动体验的路线攀登，而且路线越难，就越受推崇。',
      '然而在开拓时期，情况并非如此。早期的登山者寻找最容易的登顶路径，因为顶峰就是他们追求的目标，尤其是以前从未有人到达过的话。',
      '确实，在探险过程中他们常常面临极其危险的自然条件和险境，他们的装备方式会让现代登山者想一想就不寒而栗，但他们并不是刻意去寻找这种刺激。'
    ],
    vocabulary: [
      { word: 'alpinist', phonetic: '/ˈælpɪnɪst/', meaning: '登山者' },
      { word: 'route', phonetic: '/ruːt/', meaning: '路线' },
      { word: 'regard', phonetic: '/rɪˈɡɑːd/', meaning: '认为' },
      { word: 'pioneering', phonetic: '/ˌpaɪəˈnɪərɪŋ/', meaning: '开拓的' },
      { word: 'summit', phonetic: '/ˈsʌmɪt/', meaning: '顶峰' },
      { word: 'attain', phonetic: '/əˈteɪn/', meaning: '到达' },
      { word: 'perilous', phonetic: '/ˈperɪləs/', meaning: '危险的' },
      { word: 'shudder', phonetic: '/ˈʃʌdə/', meaning: '战栗' }
    ],
    notes: [
      '"the more...the more..." 越...越...。',
      '"this was not the case" 情况并非如此。',
      '"go out of one\'s way" 特意做某事。'

    ],
    tags: ['比较级句型', '让步结构', '分词作状语'],
    difficulty: 5,
    summary: '本文对比了现代登山者和早期登山者的不同动机：现代人追求攀登难度本身带来的运动快感，而早期登山者只求找到最容易的登顶路径，尽管他们的探险同样充满了危险。',
    summaryEn: 'This essay contrasts modern alpinists, who seek sport and challenge in difficult routes, with early climbers who simply wanted to reach the summit by the easiest way, though their expeditions were equally dangerous.',
    sentenceExplanations: [
      { sentence: 'Modern alpinists try to climb mountains by a route which will give them good sport, and the more difficult it is, the more highly it is regarded.', translation: '现代登山者试图沿着能够提供良好运动体验的路线攀登，而且路线越难，就越受推崇。', explanation: '"the more...the more..."比较级结构，表示"越……越……"。"it is regarded"是被动语态，"highly regarded"意为"受到高度评价"。注意两个比较级分别置于句首。' },
      { sentence: 'In the pioneering days, however, this was not the case at all.', translation: '然而在开拓时期，情况并非如此。', explanation: '"this was not the case"是固定表达，意为"情况并非如此"。"at all"用于加强否定语气。"pioneering days"指登山运动的早期开拓阶段。' },
      { sentence: 'The early climbers were looking for the easiest way to the top because the summit was the prize they sought, especially if it had never been attained before.', translation: '早期的登山者寻找最容易的登顶路径，因为顶峰就是他们追求的目标，尤其是以前从未有人到达过的话。', explanation: '"the prize they sought"中省略了关系代词"that"，"sought"是"seek"的过去式。"if it had never been attained"用过去完成时被动语态，表示在登山者到达之前的状态。' },
      { sentence: 'It is true that during their explorations they often faced difficulties and dangers of the most perilous nature, equipped in a manner which would make a modern climber shudder at the thought.', translation: '确实，在探险过程中他们常常面临极其危险的自然条件和险境，他们的装备方式会让现代登山者想一想就不寒而栗。', explanation: '"It is true that..."是让步结构，承认一个事实。"equipped in a manner"是过去分词短语作状语，说明主语的状态。"shudder at the thought"意为"一想到就发抖"。' },
    ],
    grammarSections: [
      {
        title: 'the more...the more... 比较级递进结构',
        content: '"the + 比较级..., the + 比较级..."表示"越……越……"。前半部分是条件（相当于if从句），后半部分是结果。两个"the"都是副词，修饰各自的比较级形容词或副词。  这个结构可以省略动词，使表达更加简洁有力。',
        examples: [
          { en: 'The more difficult it is, the more highly it is regarded.', cn: '它越困难，就越受推崇。' },
          { en: 'The harder you work, the more you will achieve.', cn: '你越努力，收获就越大。' },
          { en: 'The sooner, the better.', cn: '越快越好。（省略形式）' },
          { en: 'The more I know him, the more I like him.', cn: '我越了解他，就越喜欢他。' },
        ],
      },
      {
        title: 'It is true that... 让步结构',
        content: '"It is true that..., but..."是英语中常见的让步表达方式。先承认一个事实，再用"but"引出转折或对比的观点。这种结构使论证更加客观、有说服力。  类似表达：Admittedly... / To be sure... / Granted that...',
        examples: [
          { en: 'It is true that they faced difficulties, but they did not go out of their way to court such excitement.', cn: '确实他们面临困难，但他们并不是刻意去寻找这种刺激。' },
          { en: 'It is true that he is young, but he is very capable.', cn: '他确实很年轻，但非常有能力。' },
          { en: 'It is true that the task is difficult, but we must try our best.', cn: '任务确实很困难，但我们必须尽力而为。' },
        ],
      },
    ],
    patternDrills: [
      {
        pattern: 'the more..., the more... 越……越……',
        substitutions: [
          { en: 'The more difficult the route is, the more highly it is regarded.', cn: '路线越难，就越受推崇。' },
          { en: 'The more you read, the more knowledge you will gain.', cn: '你读得越多，获得的知识就越多。' },
          { en: 'The more he explained, the more confused I became.', cn: '他解释得越多，我越困惑。' },
          { en: 'The more carefully you drive, the safer you will be.', cn: '你开车越小心，就越安全。' },
        ],
      },
      {
        pattern: 'It is true that..., but... 确实……但是……',
        substitutions: [
          { en: 'It is true that they faced dangers, but they did not court such excitement.', cn: '确实他们面临危险，但他们并不刻意追求这种刺激。' },
          { en: 'It is true that the work is hard, but it is rewarding.', cn: '工作确实很辛苦，但很有收获。' },
          { en: 'It is true that he made mistakes, but he learned from them.', cn: '他确实犯了错误，但他从中吸取了教训。' },
          { en: 'It is true that the price is high, but the quality is excellent.', cn: '价格确实很高，但质量非常好。' },
        ],
      },
    ],
    exercises: [
      { type: 'choice', question: 'The more difficult the route is, the more _____ it is regarded.', options: ['A. high', 'B. highly', 'C. higher', 'D. highest'], answer: 'B', explanation: '"the more"后需要副词来修饰动词"regarded"，所以用副词"highly"。"highly regarded"意为"受到高度评价"。' },
      { type: 'fill', question: 'The early climbers were looking for the easiest way to the top _____ the summit was the prize they sought. (因为)', answer: 'because', explanation: '"because"引导原因状语从句，解释早期登山者寻找最易路径的原因。' },
      { type: 'judge', question: '"this was not the case at all"意为"这完全是另一回事"。', answer: '正确', explanation: '"this was not the case"意为"情况并非如此"，"at all"加强否定语气，整体可理解为"这完全是另一回事"。' },
      { type: 'choice', question: 'They were equipped in a manner _____ would make a modern climber shudder.', options: ['A. what', 'B. which', 'C. who', 'D. where'], answer: 'B', explanation: '"which"引导定语从句修饰"a manner"。先行词是物，用"which"引导限定性定语从句。' },
    ],

  },
  {
    id: 4,
    title: 'Seeing hands',
    titleCn: '能看见的手',
    text: [
      'Several cases have been reported in Russia recently of people who can read and detect colours with their fingers, and even see through solid doors and walls.',
      'One case concerns an eleven-year-old schoolgirl, Vera Petrova, who has normal vision but who can also perceive things with different parts of her skin, and through solid walls.',
      'This ability was first noticed by her father. One day she came into his office and happened to put her hands on the door of a locked safe. Suddenly she asked her father why he kept so many old newspapers locked away there, and even described the way they were done up in bundles.',
      'Vera\'s curious talent was brought to the notice of a scientific research institute in the town of Ulyanovsk, near where she lives, and in April she was given a series of tests by a special commission of the Ministry of Health.'
    ],
    textCn: [
      '俄罗斯最近报道了几个案例，有人能用手指阅读和辨别颜色，甚至能看穿实心的门和墙。',
      '其中一个案例是一个叫维拉·彼得罗娃的十一岁女学生，她视力正常，但也能用皮肤的不同部位感知事物，还能看穿实心墙。',
      '这种能力最先由她父亲发现。一天她走进他的办公室，碰巧把手放在了一个锁着的保险柜的门上。突然她问父亲为什么把这么多旧报纸锁在里面，还描述了它们一捆捆扎起来的样子。',
      '维拉的特殊才能引起了乌里扬诺夫斯克镇的一个科学研究所的注意，该镇位于她家附近。四月份，卫生部的一个特别委员会给她做了一系列测试。'
    ],
    vocabulary: [
      { word: 'perceive', phonetic: '/pəˈsiːv/', meaning: '感知' },
      { word: 'vision', phonetic: '/ˈvɪʒn/', meaning: '视力' },
      { word: 'safe', phonetic: '/seɪf/', meaning: '保险柜' },
      { word: 'bundle', phonetic: '/ˈbʌndl/', meaning: '捆' },
      { word: 'institute', phonetic: '/ˈɪnstɪtjuːt/', meaning: '研究所' },
      { word: 'commission', phonetic: '/kəˈmɪʃn/', meaning: '委员会' }
    ],
    notes: [
      '现在完成时被动语态。',
      '"happen to do" 碰巧做某事。',
      '"was brought to the notice of" 引起...的注意。'

    ],
    tags: ['倒装句', '强调结构'],
    difficulty: 4,
    summary: '本文报道了俄罗斯发现的特殊案例：一些人能用手指阅读和辨别颜色，甚至看穿墙壁。文章以维拉·彼得罗娃为例，描述了她的特异功能如何被发现并接受科学测试。',
    summaryEn: 'This article reports cases in Russia of people who can read and detect colors with their fingers, even seeing through walls. It describes how Vera Petrova\'s unusual ability was discovered by her father and subsequently tested by scientists.',
    sentenceExplanations: [
      { sentence: 'Several cases have been reported in Russia recently of people who can read and detect colours with their fingers.', translation: '俄罗斯最近报道了几个案例，有人能用手指阅读和辨别颜色。', explanation: '现在完成时被动语态"have been reported"。句子结构因"of people..."后置定语的插入而被打乱，正常语序为"Several cases of people... have been reported in Russia recently"。' },
      { sentence: 'One case concerns an eleven-year-old schoolgirl, Vera Petrova, who has normal vision but who can also perceive things with different parts of her skin.', translation: '其中一个案例是一个叫维拉·彼得罗娃的十一岁女学生，她视力正常，但也能用皮肤的不同部位感知事物。', explanation: '"concerns"意为"涉及、关于"。两个"who"引导的并列定语从句修饰"schoolgirl"，用"but"连接形成对比。' },
      { sentence: 'This ability was first noticed by her father.', translation: '这种能力最先由她父亲发现。', explanation: '简单被动语态"was noticed by"。"first"是时间副词，强调发现的先后顺序。' },
      { sentence: 'Suddenly she asked her father why he kept so many old newspapers locked away there, and even described the way they were done up in bundles.', translation: '突然她问父亲为什么把这么多旧报纸锁在里面，还描述了它们一捆捆扎起来的样子。', explanation: '"why"引导宾语从句。"kept...locked away"是"keep + 宾语 + 过去分词"结构，表示"使……保持某种状态"。"done up in bundles"是被动语态，意为"被捆成捆"。' },
      { sentence: 'Vera\'s curious talent was brought to the notice of a scientific research institute in the town of Ulyanovsk.', translation: '维拉的特殊才能引起了乌里扬诺夫斯克镇的一个科学研究所的注意。', explanation: '"was brought to the notice of"是被动语态固定表达，意为"引起……的注意"。"curious"在此意为"奇特的、不寻常的"。' },
    ],
    grammarSections: [
      {
        title: '现在完成时被动语态',
        content: '现在完成时被动语态结构为"have/has been + 过去分词"，表示某事已经发生且对现在有影响，同时强调动作的承受者而非执行者。  在新闻报道中，现在完成时被动语态非常常见，因为它强调事件的发生而不必指明信息来源。',
        examples: [
          { en: 'Several cases have been reported in Russia recently.', cn: '俄罗斯最近报道了几个案例。' },
          { en: 'The book has been translated into many languages.', cn: '这本书已被翻译成多种语言。' },
          { en: 'The bridge has been completed.', cn: '这座桥已经建成了。' },
          { en: 'Many students have been admitted to the university.', cn: '许多学生已被这所大学录取。' },
        ],
      },
      {
        title: 'keep + 宾语 + 过去分词/形容词/介词短语',
        content: '"keep"可以用作使役动词，后接宾语和宾语补足语，表示"使……保持某种状态"。宾语补足语可以是过去分词、形容词、副词或介词短语。  这个结构强调状态的持续性。',
        examples: [
          { en: 'He kept so many old newspapers locked away there.', cn: '他把这么多旧报纸锁在那里。' },
          { en: 'Keep the door closed.', cn: '让门关着。' },
          { en: 'She kept the children quiet.', cn: '她让孩子们保持安静。' },
          { en: 'Keep your hands behind your back.', cn: '把手放在背后。' },
        ],
      },
    ],
    patternDrills: [
      {
        pattern: 'have been + 过去分词 现在完成时被动语态',
        substitutions: [
          { en: 'Several cases have been reported in Russia recently.', cn: '俄罗斯最近报道了几个案例。' },
          { en: 'The results have been published in the journal.', cn: '结果已在期刊上发表。' },
          { en: 'The windows have been cleaned.', cn: '窗户已经擦干净了。' },
          { en: 'The suspect has been arrested by the police.', cn: '嫌疑人已被警方逮捕。' },
        ],
      },
      {
        pattern: 'keep + 宾语 + 过去分词 使……保持……状态',
        substitutions: [
          { en: 'He kept the newspapers locked away there.', cn: '他把报纸锁在那里。' },
          { en: 'She kept the door locked all night.', cn: '她整晚都锁着门。' },
          { en: 'He kept his eyes fixed on the screen.', cn: '他的眼睛一直盯着屏幕。' },
          { en: 'She kept her hair tied back.', cn: '她把头发扎在后面。' },
        ],
      },
    ],
    exercises: [
      { type: 'choice', question: 'Several cases _____ been reported in Russia recently.', options: ['A. has', 'B. have', 'C. had', 'D. having'], answer: 'B', explanation: '"Several cases"是复数主语，用"have"。"have been reported"是现在完成时被动语态。' },
      { type: 'fill', question: 'This ability was first _____ by her father. (发现)', answer: 'noticed', explanation: '"was noticed"是被动语态，"noticed"是"notice"的过去分词。' },
      { type: 'judge', question: '"concerns"在本文中意为"担忧"。', answer: '错误', explanation: '"concerns"在此意为"涉及、关于"，是及物动词。"One case concerns..."意为"其中一个案例涉及……"。' },
      { type: 'choice', question: 'She described the way they were done _____ in bundles.', options: ['A. up', 'B. out', 'C. off', 'D. away'], answer: 'A', explanation: '"done up"意为"捆扎、包扎"，是固定搭配。"done up in bundles"意为"被捆成捆"。' },
    ],

  },
  {
    id: 5,
    title: 'Youth',
    titleCn: '青年',
    text: [
      'People are always talking about "the problem of youth". If there is one — which I take leave to doubt — then it is older people who create it, not the young themselves.',
      'Let us get down to fundamentals and agree that the young are after all human beings — people just like their elders. There is only one difference between an old man and a young one: the young man has a glorious future before him and the old one has a splendid future behind him.',
      'When I was a teenager, I felt that I was just young and uncertain — that I was a new boy in a huge school, and I would have been very pleased to be regarded as something so interesting as a problem.',
      'For one thing, being a problem gives you a certain identity, and that is one of the things the young are busily engaged in seeking.'
    ],
    textCn: [
      '人们总是在谈论"青年问题"。如果存在这个问题的话——对此我不敢苟同——那也是老年人造成的，而不是青年人自己。',
      '让我们来探究一下基本事实，承认青年毕竟也是人——跟他们的长辈一样的人。老年人和年轻人之间只有一个区别：年轻人有光辉的未来在前方，而老年人的辉煌未来已经在身后。',
      '我十几岁的时候，觉得自己只是年轻而迷茫——是一所大学校里的新生，如果有人把我看作"问题"这样有趣的东西，我会非常高兴。',
      '首先，成为问题赋予你某种身份认同，而这正是年轻人正在忙着寻找的东西之一。'
    ],
    vocabulary: [
      { word: 'youth', phonetic: '/juːθ/', meaning: '青年' },
      { word: 'fundamental', phonetic: '/ˌfʌndəˈmentl/', meaning: '基本事实' },
      { word: 'glorious', phonetic: '/ˈɡlɔːriəs/', meaning: '光辉的' },
      { word: 'splendid', phonetic: '/ˈsplendɪd/', meaning: '灿烂的' },
      { word: 'teenager', phonetic: '/ˈtiːneɪdʒə/', meaning: '青少年' },
      { word: 'identity', phonetic: '/aɪˈdentɪti/', meaning: '身份认同' },
      { word: 'engage', phonetic: '/ɪnˈɡeɪdʒ/', meaning: '忙于' }
    ],
    notes: [
      '"take leave to doubt" 冒昧地表示怀疑。',
      '"get down to fundamentals" 回到基本事实。',
      '"be engaged in doing" 忙于做某事。'

    ],
    tags: ['被动语态', '复杂句型'],
    difficulty: 4,
    summary: '文章以独特的视角重新审视"青年问题"，认为问题的根源不在青年而在老年人。作者指出青年与老年唯一的区别在于未来的方向不同，并幽默地表示成为"问题"至少能赋予青年一种身份认同。',
    summaryEn: 'This essay reexamines "the problem of youth" from a unique perspective, arguing that older people create it, not the young. The author humorously suggests that the only difference between old and young is the direction of their future, and being a "problem" at least gives youth an identity.',
    sentenceExplanations: [
      { sentence: 'People are always talking about "the problem of youth". If there is one — which I take leave to doubt — then it is older people who create it, not the young themselves.', translation: '人们总是在谈论"青年问题"。如果存在这个问题的话——对此我不敢苟同——那也是老年人造成的，而不是青年人自己。', explanation: '"take leave to doubt"意为"冒昧地表示怀疑"，是正式用语。破折号间是插入语。"it is...who..."是强调句型，强调主语"older people"。' },
      { sentence: 'Let us get down to fundamentals and agree that the young are after all human beings — people just like their elders.', translation: '让我们来探究一下基本事实，承认青年毕竟也是人——跟他们的长辈一样的人。', explanation: '"get down to"意为"认真处理、开始认真做"。"after all"意为"毕竟"。破折号后的"people just like their elders"是同位语，补充说明"the young"。' },
      { sentence: 'There is only one difference between an old man and a young one: the young man has a glorious future before him and the old one has a splendid future behind him.', translation: '老年人和年轻人之间只有一个区别：年轻人有光辉的未来在前方，而老年人的辉煌未来已经在身后。', explanation: '冒号后是两个并列句，形成优美的对称结构。"before him"和"behind him"形成对比，暗示未来的方向不同。' },
      { sentence: 'When I was a teenager, I felt that I was just young and uncertain — that I was a new boy in a huge school, and I would have been very pleased to be regarded as something so interesting as a problem.', translation: '我十几岁的时候，觉得自己只是年轻而迷茫——是所大学校里的新生，如果有人把我看作"问题"这样有趣的东西，我会非常高兴。', explanation: '"would have been very pleased"是虚拟语气，表示与过去事实相反的假设。"regarded as"意为"被视为"。"something so interesting as a problem"中"as"表示"像……一样的"。' },
    ],
    grammarSections: [
      {
        title: '强调句型 It is...that/who...',
        content: '强调句型结构为"It is/was + 被强调部分 + that/who + 其余部分"。用来强调句子中的某个成分（主语、宾语、状语等）。判断是否为强调句的方法：去掉"It is/was"和"that/who"后，剩余部分能组成完整句子。  强调人时可用"who"，强调其他成分时用"that"。',
        examples: [
          { en: 'It is older people who create it, not the young themselves.', cn: '是老年人造成的，而不是青年人自己。' },
          { en: 'It was Alfred who acted as his own spy.', cn: '是阿尔弗雷德亲自充当间谍。' },
          { en: 'It is in the library that I usually study.', cn: '我通常是在图书馆学习。' },
          { en: 'It was yesterday that I met her.', cn: '我是昨天见到她的。' },
        ],
      },
      {
        title: '虚拟语气（与过去事实相反）',
        content: '与过去事实相反的虚拟语气中，从句用过去完成时（had done），主句用"would/could/might + have + 过去分词"。表示对过去已发生事情的假设，实际上并未发生。  本文中"I would have been very pleased"表示实际上并没有人把他当作"问题"来关注。',
        examples: [
          { en: 'I would have been very pleased to be regarded as something so interesting as a problem.', cn: '如果有人把我看作"问题"这样有趣的东西，我会非常高兴。（实际上没有人这样看）' },
          { en: 'If I had known, I would have told you.', cn: '如果我当时知道，我就告诉你了。（实际上不知道）' },
          { en: 'If she had studied harder, she would have passed the exam.', cn: '如果她当时更努力学习，她就通过考试了。' },
          { en: 'If they had left earlier, they would have caught the train.', cn: '如果他们早点出发，就赶上火车了。' },
        ],
      },
    ],
    patternDrills: [
      {
        pattern: 'It is...who/that... 强调句型',
        substitutions: [
          { en: 'It is older people who create the problem.', cn: '是老年人造成了这个问题。' },
          { en: 'It is the young themselves who should decide their future.', cn: '应该由青年人自己来决定他们的未来。' },
          { en: 'It was in this school that I learned English.', cn: '我是在这所学校学的英语。' },
          { en: 'It is education that can change a person\'s fate.', cn: '是教育能够改变一个人的命运。' },
        ],
      },
      {
        pattern: 'would have been... 虚拟语气（与过去事实相反）',
        substitutions: [
          { en: 'I would have been very pleased to be regarded as a problem.', cn: '如果我被看作"问题"，我会非常高兴。' },
          { en: 'He would have been happy to receive the award.', cn: '如果他能获奖，他会很高兴。' },
          { en: 'She would have been surprised to see the result.', cn: '如果她看到结果，她会很惊讶。' },
          { en: 'They would have been glad to help us.', cn: '如果他们能帮我们，他们会很高兴。' },
        ],
      },
    ],
    exercises: [
      { type: 'choice', question: 'If there is one — which I take leave to _____ — then it is older people who create it.', options: ['A. believe', 'B. doubt', 'C. know', 'D. say'], answer: 'B', explanation: '"take leave to doubt"是固定表达，意为"冒昧地表示怀疑"。作者对"青年问题"的存在持怀疑态度。' },
      { type: 'fill', question: 'Let us get _____ to fundamentals. (认真处理)', answer: 'down', explanation: '"get down to"意为"开始认真处理、着手做"，是固定搭配。' },
      { type: 'judge', question: '"I would have been very pleased"使用了虚拟语气，表示与过去事实相反。', answer: '正确', explanation: '"would have been"是虚拟语气的主句形式，表示与过去事实相反的假设。实际上没有人把他当作"问题"。' },
      { type: 'choice', question: 'It is older people _____ create the problem, not the young themselves.', options: ['A. which', 'B. that', 'C. what', 'D. whom'], answer: 'B', explanation: '强调句型"It is...that..."，强调主语"older people"。虽然强调人时常用"who"，但"that"也是正确的，且在限制性强调中更常见。' },
    ],

  },
  {
    id: 6,
    title: 'The sporting spirit',
    titleCn: '体育精神',
    text: [
      'I am always amazed when I hear people saying that sport creates goodwill between the nations, and that if only the common peoples of the world could meet one another at football or cricket, they would have no inclination to meet on the battlefield.',
      'Even if one didn\'t know from concrete examples (the 1936 Olympic Games, for instance) that international sporting contests lead to orgies of hatred, one could deduce it from general principles.',
      'Nearly all the sports practised nowadays are competitive. You play to win, and the game has little meaning unless you do your utmost to win. On the village green, where you pick up sides and no feeling of local patriotism is involved, it is possible to play simply for the fun and exercise.'
    ],
    textCn: [
      '当我听到人们说体育创造国与国之间的友好，只要普通人民能在足球或板球场上相遇，他们就不会有在战场上相遇的意愿时，我总是感到惊讶。',
      '即使一个人不知道具体的例子（比如1936年奥运会）——国际体育比赛会导致仇恨的爆发——他也可以从一般原理中推断出来。',
      '如今进行的几乎所有的体育运动都是竞争性的。你比赛是为了赢，除非你尽最大努力去赢，否则比赛就几乎毫无意义。在村子的草地上，随便组队，不涉及地方爱国情绪时，才可能仅仅为了乐趣和锻炼而比赛。'
    ],
    vocabulary: [
      { word: 'goodwill', phonetic: '/ˌɡʊdˈwɪl/', meaning: '友好' },
      { word: 'inclination', phonetic: '/ˌɪnklɪˈneɪʃn/', meaning: '意愿' },
      { word: 'orgy', phonetic: '/ˈɔːdʒi/', meaning: '泛滥' },
      { word: 'hatred', phonetic: '/ˈheɪtrɪd/', meaning: '仇恨' },
      { word: 'deduce', phonetic: '/dɪˈdjuːs/', meaning: '推断' },
      { word: 'competitive', phonetic: '/kəmˈpetɪtɪv/', meaning: '竞争性的' },
      { word: 'patriotism', phonetic: '/ˈpætriətɪzəm/', meaning: '爱国主义' }
    ],
    notes: [
      '"if only" 虚拟语气。',
      '"do one\'s utmost" 尽最大努力。',
      '议论文：体育比赛竞争本质反而助长仇恨。'

    ],
    tags: ['定语从句', '同位语'],
    difficulty: 4,
    summary: '文章反驳了"体育创造国际友好"的观点，认为国际体育比赛实际上助长了仇恨和民族主义情绪。作者指出，只有在不涉及地方爱国情绪的非正式比赛中，人们才能真正享受运动的乐趣。',
    summaryEn: 'This essay refutes the idea that sport creates international goodwill, arguing instead that competitive sports fuel hatred and nationalism. Only in informal games without local patriotism can people truly enjoy the fun and exercise of sport.',
    sentenceExplanations: [
      { sentence: 'I am always amazed when I hear people saying that sport creates goodwill between the nations, and that if only the common peoples of the world could meet one another at football or cricket, they would have no inclination to meet on the battlefield.', translation: '当我听到人们说体育创造国与国之间的友好，只要普通人民能在足球或板球场上相遇，他们就不会有在战场上相遇的意愿时，我总是感到惊讶。', explanation: '这是一个复杂的多层嵌套句。"when"引导时间状语从句，其中"saying"后接两个"that"引导的宾语从句。第二个宾语从句中"if only"引导虚拟条件句，"would have"是虚拟语气的主句。' },
      { sentence: 'Even if one didn\'t know from concrete examples that international sporting contests lead to orgies of hatred, one could deduce it from general principles.', translation: '即使一个人不知道具体的例子——国际体育比赛会导致仇恨的爆发——他也可以从一般原理中推断出来。', explanation: '"Even if"引导让步状语从句，使用虚拟语气（didn\'t know）。"orgies of hatred"是比喻用法，"orgy"原意为"狂欢"，此处指仇恨的"泛滥"。' },
      { sentence: 'You play to win, and the game has little meaning unless you do your utmost to win.', translation: '你比赛是为了赢，除非你尽最大努力去赢，否则比赛就几乎毫无意义。', explanation: '"unless"引导条件状语从句，意为"除非"。"do one\'s utmost"意为"尽最大努力"，与"do one\'s best"同义。"little"在此表示否定，"几乎没有"。' },
      { sentence: 'On the village green, where you pick up sides and no feeling of local patriotism is involved, it is possible to play simply for the fun and exercise.', translation: '在村子的草地上，随便组队，不涉及地方爱国情绪时，才可能仅仅为了乐趣和锻炼而比赛。', explanation: '"where"引导非限定性定语从句修饰"village green"。"pick up sides"意为"临时组队"。"no feeling...is involved"使用被动语态。主句"It is possible to..."使用形式主语。' },
    ],
    grammarSections: [
      {
        title: 'if only 虚拟语气',
        content: '"if only"引导虚拟语气，表示强烈的愿望或遗憾。根据时间不同，使用不同的动词形式：  - 与现在事实相反：if only + 过去时（be动词用were） - 与过去事实相反：if only + 过去完成时 - 与将来事实相反：if only + would/could + 动词原形  "if only"比"I wish"语气更强烈。',
        examples: [
          { en: 'If only the common peoples of the world could meet one another at football, they would have no inclination to meet on the battlefield.', cn: '只要普通人民能在足球场上相遇，他们就不会有在战场上相遇的意愿。' },
          { en: 'If only I had more time!', cn: '要是我有更多时间就好了！' },
          { en: 'If only he had listened to my advice.', cn: '要是他当时听了我的建议就好了。' },
          { en: 'If only it would stop raining!', cn: '要是雨能停就好了！' },
        ],
      },
      {
        title: 'unless 条件状语从句',
        content: '"unless"意为"除非、如果不"，相当于"if...not..."。引导条件状语从句，表示唯一的例外条件。  注意："unless"不能用于虚拟语气中表示与事实相反的假设，此时只能用"if...not..."。',
        examples: [
          { en: 'The game has little meaning unless you do your utmost to win.', cn: '除非你尽最大努力去赢，否则比赛就几乎毫无意义。' },
          { en: 'Unless you study harder, you will fail the exam.', cn: '除非你更努力学习，否则你会考试不及格。' },
          { en: 'I will not go unless he invites me.', cn: '除非他邀请我，否则我不会去。' },
          { en: 'Unless it rains, we will have the picnic.', cn: '除非下雨，否则我们将举行野餐。' },
        ],
      },
    ],
    patternDrills: [
      {
        pattern: 'if only... 要是……就好了',
        substitutions: [
          { en: 'If only the common peoples could meet at football, they would have no inclination to fight.', cn: '要是普通人民能在足球场上相遇，他们就不会想打仗了。' },
          { en: 'If only I had studied harder, I would have passed the exam.', cn: '要是我当时更努力学习，我就通过考试了。' },
          { en: 'If only she were here with us now.', cn: '要是她现在和我们在一起就好了。' },
          { en: 'If only they had arrived on time!', cn: '要是他们按时到了就好了！' },
        ],
      },
      {
        pattern: 'unless... 除非……',
        substitutions: [
          { en: 'The game has little meaning unless you do your utmost to win.', cn: '除非你尽最大努力去赢，否则比赛就几乎毫无意义。' },
          { en: 'Unless you practise every day, you will never master English.', cn: '除非你每天练习，否则你永远也掌握不了英语。' },
          { en: 'I will not attend the meeting unless I am invited.', cn: '除非我被邀请，否则我不会参加会议。' },
          { en: 'Unless we act now, it will be too late.', cn: '除非我们现在行动，否则就太迟了。' },
        ],
      },
    ],
    exercises: [
      { type: 'choice', question: 'If only the common peoples _____ meet one another at football, they would have no inclination to fight.', options: ['A. can', 'B. could', 'C. may', 'D. will'], answer: 'B', explanation: '"if only"引导虚拟语气，与现在事实相反，用"could"（can的过去式）。主句用"would have"。' },
      { type: 'fill', question: 'The game has little meaning _____ you do your utmost to win. (除非)', answer: 'unless', explanation: '"unless"意为"除非"，引导条件状语从句，相当于"if...not..."。' },
      { type: 'judge', question: '"orgies of hatred"中"orgy"意为"狂欢"，此处为比喻用法，指仇恨的泛滥。', answer: '正确', explanation: '"orgy"原意为"狂欢、放纵"，此处用于比喻国际体育比赛中仇恨情绪的爆发和泛滥。' },
      { type: 'choice', question: '_____ you study harder, you will fail the exam.', options: ['A. If', 'B. Unless', 'C. Because', 'D. Although'], answer: 'B', explanation: '"unless"意为"除非"，引导条件状语从句。句意为"除非你更努力学习，否则你会考试不及格"。' },
    ],

  },
  {
    id: 7,
    title: 'Bats',
    titleCn: '蝙蝠',
    text: [
      'Not all sounds made by animals serve as language, and we have only to turn to that extraordinary discovery of echo-location in bats to see a case in which the voice plays a strictly utilitarian role.',
      'To get a full appreciation of what this means we must turn first to some recent human inventions. Everyone knows that if he shouts in the vicinity of a wall or a mountainside, an echo will come back.',
      'The further off this solid obstruction, the longer time will elapse for the return of the echo. A sound made by tapping on the hull of a ship will be reflected from the sea bottom, and by measuring the time interval between the taps and the receipt of the echoes, the depth of the sea at that point can be calculated.'
    ],
    textCn: [
      '并非所有动物发出的声音都用作语言，我们只需看看蝙蝠回声定位这一非凡发现，就能看到一个声音起着严格实用功能的案例。',
      '要充分理解这一点，我们必须先看看一些近代的人类发明。人人都知道，如果他在墙壁或山边附近大喊，回声就会传回来。',
      '固体障碍物越远，回声返回所需的时间就越长。敲击船体发出的声音会被海底反射回来，通过测量敲击声和接收到回声之间的时间间隔，就可以计算出该点的海水深度。'
    ],
    vocabulary: [
      { word: 'bat', phonetic: '/bæt/', meaning: '蝙蝠' },
      { word: 'echo', phonetic: '/ˈekəʊ/', meaning: '回声' },
      { word: 'utilitarian', phonetic: '/ˌjuːtɪlɪˈteəriən/', meaning: '实用的' },
      { word: 'appreciation', phonetic: '/əˌpriːʃiˈeɪʃn/', meaning: '理解' },
      { word: 'vicinity', phonetic: '/vɪˈsɪnɪti/', meaning: '附近' },
      { word: 'obstruction', phonetic: '/əbˈstrʌkʃn/', meaning: '障碍物' },
      { word: 'elapse', phonetic: '/ɪˈlæps/', meaning: '流逝' }
    ],
    notes: [
      '"serve as" 充当。',
      '"the further...the longer..." 越...越...。',
      '"by measuring" by + 动名词。'

    ],
    tags: ['虚拟语气', '条件句'],
    difficulty: 5,
    summary: '本文介绍了蝙蝠的回声定位能力，将其与人类发明的声呐技术进行类比。通过"越……越……"的比较结构，解释了回声原理如何被应用于测量海深和帮助蝙蝠在黑暗中导航。',
    summaryEn: 'This article introduces bats\' echo-location ability, comparing it to human sonar technology. Using comparative structures, it explains how echo principles are applied to measure sea depth and help bats navigate in darkness.',
    sentenceExplanations: [
      { sentence: 'Not all sounds made by animals serve as language, and we have only to turn to that extraordinary discovery of echo-location in bats to see a case in which the voice plays a strictly utilitarian role.', translation: '并非所有动物发出的声音都用作语言，我们只需看看蝙蝠回声定位这一非凡发现，就能看到一个声音起着严格实用功能的案例。', explanation: '"Not all"是部分否定，意为"并非所有的"，不同于"None"的全部否定。"have only to...to..."意为"只需……就能……"。"in which"引导定语从句修饰"a case"。' },
      { sentence: 'To get a full appreciation of what this means we must turn first to some recent human inventions.', translation: '要充分理解这一点，我们必须先看看一些近代的人类发明。', explanation: '"To get..."是目的状语。"appreciation"在此意为"理解、认识"，而非"感激"。"what this means"是宾语从句，作"of"的宾语。' },
      { sentence: 'Everyone knows that if he shouts in the vicinity of a wall or a mountainside, an echo will come back.', translation: '人人都知道，如果他在墙壁或山边附近大喊，回声就会传回来。', explanation: '"that"引导宾语从句，其中包含"if"引导的条件状语从句。"in the vicinity of"意为"在……附近"，是正式表达。' },
      { sentence: 'The further off this solid obstruction, the longer time will elapse for the return of the echo.', translation: '固体障碍物越远，回声返回所需的时间就越长。', explanation: '"the more...the more..."比较级结构。句子省略了"is"，完整形式为"The further off this solid obstruction is, the longer time will elapse..."。"elapse"意为"（时间）流逝"。' },
    ],
    grammarSections: [
      {
        title: '部分否定与全部否定',
        content: '英语中的否定分为部分否定和全部否定：  - 部分否定："Not all/every/both/always"表示"并非所有的/每个/两个都/总是"，即部分否定。 - 全部否定："None/no/never/neither"表示"一个也不/没有/从不/两者都不"，即全部否定。  学习者常犯的错误是将"Not all"理解为全部否定。',
        examples: [
          { en: 'Not all sounds made by animals serve as language.', cn: '并非所有动物发出的声音都用作语言。（部分否定）' },
          { en: 'Not everyone agrees with this view.', cn: '并非每个人都同意这个观点。' },
          { en: 'None of them could write down what they did.', cn: '他们中没有人能把做的事写下来。（全部否定）' },
          { en: 'Not both answers are correct.', cn: '并非两个答案都正确。（只有一个正确）' },
        ],
      },
      {
        title: 'by + 动名词 表示方式',
        content: '"by + 动名词"表示"通过……方式/手段"，用来说明做某事的方法或途径。这是英语中非常常用的表达方式。  注意区分"by doing"（通过做某事）和"to do"（为了做某事）：前者表手段，后者表目的。',
        examples: [
          { en: 'By measuring the time interval, the depth of the sea can be calculated.', cn: '通过测量时间间隔，可以计算出海水深度。' },
          { en: 'She improved her English by reading novels.', cn: '她通过读小说提高了英语水平。' },
          { en: 'He earns a living by teaching.', cn: '他以教书为生。' },
          { en: 'You can solve this problem by using a calculator.', cn: '你可以通过使用计算器来解决这个问题。' },
        ],
      },
    ],
    patternDrills: [
      {
        pattern: 'the further..., the longer... 越……越……',
        substitutions: [
          { en: 'The further off this solid obstruction, the longer time will elapse for the return of the echo.', cn: '固体障碍物越远，回声返回所需的时间就越长。' },
          { en: 'The further you go, the more you will see.', cn: '你走得越远，看到的就越多。' },
          { en: 'The faster you run, the sooner you will arrive.', cn: '你跑得越快，到得就越早。' },
          { en: 'The more you practise, the better you will become.', cn: '你练习得越多，就变得越好。' },
        ],
      },
      {
        pattern: 'by + 动名词 通过……方式',
        substitutions: [
          { en: 'By measuring the time interval, the depth can be calculated.', cn: '通过测量时间间隔，可以计算出深度。' },
          { en: 'By reading aloud, you can improve your pronunciation.', cn: '通过大声朗读，你可以改善发音。' },
          { en: 'By working hard, he achieved great success.', cn: '通过努力工作，他取得了巨大成功。' },
          { en: 'By practising every day, she mastered the skill.', cn: '通过每天练习，她掌握了这项技能。' },
        ],
      },
    ],
    exercises: [
      { type: 'choice', question: '_____ all sounds made by animals serve as language.', options: ['A. None', 'B. No', 'C. Not', 'D. Never'], answer: 'C', explanation: '"Not all"是部分否定，意为"并非所有的"。"None"和"No"是全部否定，意思不同。' },
      { type: 'fill', question: '_____ measuring the time interval between the taps and the receipt of the echoes, the depth of the sea can be calculated. (通过)', answer: 'By', explanation: '"by + 动名词"表示"通过……方式"，说明计算海水深度的方法。' },
      { type: 'judge', question: '"The further off this solid obstruction"中省略了动词"is"。', answer: '正确', explanation: '在"the more...the more..."结构中，当意思清楚时可以省略be动词。完整形式为"The further off this solid obstruction is"。' },
      { type: 'judge', question: '"elapse"意为"（时间）流逝"，通常用于正式语境。', answer: '正确', explanation: '"elapse"是不及物动词，意为"（时间）流逝、过去"，是正式用语。日常口语中更常用"pass"。' },
      { type: 'choice', question: 'We have only to turn to that extraordinary discovery of echo-location in bats to see a case _____ the voice plays a utilitarian role.', options: ['A. which', 'B. that', 'C. in which', 'D. where'], answer: 'C', explanation: '"in which"引导定语从句修饰"a case"，"in the case"是固定搭配，意为"在这种情况下"。' },
    ],

  },
  {
    id: 8,
    title: 'Trading standards',
    titleCn: '贸易标准',
    text: [
      'Chickens slaughtered in the United States, claim officials in Brussels, are not fit to grace European tables. No, say the Americans: our fowl are fine, we simply clean them in a different way.',
      'These days, it is differences in national regulations, far more than tariffs, that put sand in the wheels of trade between rich countries.',
      'It is not just farmers who are complaining. An electric razor that meets the European Union\'s safety standards must be approved by American testers before it can be sold in the United States, and an American-made dialysis machine needs the EU\'s okay before it hits the market in Europe.',
      'As it happens, a razor that is safe in Europe is unlikely to electrocute Americans. So, ask businesses on both sides of the Atlantic, why have two lots of tests where one would do?'
    ],
    textCn: [
      '布鲁塞尔的官员声称，美国屠宰的鸡不适合摆在欧洲的餐桌上。不，美国人说：我们的家禽很好，我们只是用了不同的清洁方式。',
      '如今，是国家法规之间的差异，而非关税，给富国之间的贸易设置了障碍。',
      '抱怨的不止是农民。符合欧盟安全标准的电动剃须刀必须经美国检验人员批准才能在美国销售，而美国制造的透析机需要欧盟的认可才能在欧洲上市。',
      '事实上，在欧洲安全的剃须刀不太可能电死美国人。那么，大西洋两岸的企业会问：当一套检验就够用时，为什么要搞两套呢？'
    ],
    vocabulary: [
      { word: 'slaughter', phonetic: '/ˈslɔːtə/', meaning: '屠宰' },
      { word: 'fowl', phonetic: '/faʊl/', meaning: '家禽' },
      { word: 'regulation', phonetic: '/ˌreɡjuˈleɪʃn/', meaning: '法规' },
      { word: 'tariff', phonetic: '/ˈtærɪf/', meaning: '关税' },
      { word: 'razor', phonetic: '/ˈreɪzə/', meaning: '剃须刀' },
      { word: 'dialysis', phonetic: '/daɪˈælɪsɪs/', meaning: '透析' },
      { word: 'electrocute', phonetic: '/ɪˈlektrəkjuːt/', meaning: '电死' }
    ],
    notes: [
      '"put sand in the wheels" 比喻"制造障碍"。',
      '"far more than" 远比...多得多。',
      '"As it happens" 事实上。'

    ],
    tags: ['分词结构', '独立主格'],
    difficulty: 5,
    summary: '本文以美欧鸡肉贸易争端为例，指出国家法规差异比关税更能阻碍国际贸易。文章呼吁减少重复检测，统一贸易标准，以促进大西洋两岸的贸易往来。',
    summaryEn: 'Using the US-EU chicken trade dispute as an example, this article argues that differences in national regulations hinder international trade more than tariffs. It calls for reducing duplicate testing and harmonizing trade standards to facilitate transatlantic commerce.',
    sentenceExplanations: [
      { sentence: 'Chickens slaughtered in the United States, claim officials in Brussels, are not fit to grace European tables.', translation: '布鲁塞尔的官员声称，美国屠宰的鸡不适合摆在欧洲的餐桌上。', explanation: '主语"Chickens slaughtered in the United States"与谓语"are not fit"被插入语"claim officials in Brussels"隔开，形成倒装效果。"slaughtered"是过去分词作后置定语。"grace"在此是动词，意为"给……增光"。' },
      { sentence: 'These days, it is differences in national regulations, far more than tariffs, that put sand in the wheels of trade between rich countries.', translation: '如今，是国家法规之间的差异，而非关税，给富国之间的贸易设置了障碍。', explanation: '"it is...that..."强调句型，强调主语"differences in national regulations"。"far more than tariffs"是插入语，起对比作用。"put sand in the wheels"是习语，意为"制造障碍"。' },
      { sentence: 'An electric razor that meets the European Union\'s safety standards must be approved by American testers before it can be sold in the United States.', translation: '符合欧盟安全标准的电动剃须刀必须经美国检验人员批准才能在美国销售。', explanation: '"that meets..."是定语从句修饰"razor"。"must be approved"是情态动词被动语态。"before it can be sold"是时间状语从句，表示"在……之前"。' },
      { sentence: 'So, ask businesses on both sides of the Atlantic, why have two lots of tests where one would do?', translation: '那么，大西洋两岸的企业会问：当一套检验就够用时，为什么要搞两套呢？', explanation: '"ask businesses on both sides of the Atlantic"是插入语，点明提问者。"where one would do"中"do"意为"足够、行"，"would"表示假设。' },
    ],
    grammarSections: [
      {
        title: 'It is...that... 强调句型的灵活运用',
        content: '强调句型"It is/was + 被强调部分 + that + 其余部分"在议论文中特别有用，可以突出作者想要强调的信息。  本文中强调句型的运用使得"differences in national regulations"这一核心论点更加突出，配合插入语"far more than tariffs"形成鲜明对比。',
        examples: [
          { en: 'It is differences in national regulations, far more than tariffs, that put sand in the wheels of trade.', cn: '是国家法规之间的差异，而非关税，给贸易设置了障碍。' },
          { en: 'It is not just farmers who are complaining.', cn: '抱怨的不止是农民。' },
          { en: 'It was the regulation that caused the problem, not the tariff.', cn: '造成问题的是法规，而不是关税。' },
          { en: 'It is education that makes the difference.', cn: '造成差异的是教育。' },
        ],
      },
      {
        title: '过去分词作后置定语',
        content: '过去分词（短语）可以作后置定语，修饰前面的名词，表示被动或完成的意义。这在正式写作和新闻报道中非常常见。  过去分词作定语时，相当于一个被省略的定语从句： - chickens slaughtered in the US = chickens that were slaughtered in the US',
        examples: [
          { en: 'Chickens slaughtered in the United States are not fit to grace European tables.', cn: '在美国屠宰的鸡不适合摆在欧洲的餐桌上。' },
          { en: 'An electric razor that meets the safety standards must be approved.', cn: '符合安全标准的电动剃须刀必须被批准。' },
          { en: 'The problems mentioned above need to be solved.', cn: '上面提到的问题需要解决。' },
          { en: 'The letter written by my mother arrived yesterday.', cn: '我母亲写的信昨天到了。' },
        ],
      },
    ],
    patternDrills: [
      {
        pattern: 'It is...that/who... 强调句型',
        substitutions: [
          { en: 'It is differences in regulations that put sand in the wheels of trade.', cn: '是法规的差异给贸易设置了障碍。' },
          { en: 'It is not just farmers who are complaining.', cn: '抱怨的不止是农民。' },
          { en: 'It was the Americans who said their fowl were fine.', cn: '是美国人说他们的家禽没问题。' },
          { en: 'It is the EU that needs to approve the dialysis machine.', cn: '是欧盟需要批准透析机。' },
        ],
      },
      {
        pattern: '过去分词作后置定语',
        substitutions: [
          { en: 'Chickens slaughtered in the United States are not fit to grace European tables.', cn: '在美国屠宰的鸡不适合摆在欧洲的餐桌上。' },
          { en: 'The regulations adopted by the EU are very strict.', cn: '欧盟采用的法规非常严格。' },
          { en: 'The products made in China are popular worldwide.', cn: '中国制造的产品在全球很受欢迎。' },
          { en: 'The decision taken by the government surprised everyone.', cn: '政府做出的决定让所有人都感到惊讶。' },
        ],
      },
    ],
    exercises: [
      { type: 'choice', question: 'It is differences in national regulations, far more than tariffs, _____ put sand in the wheels of trade.', options: ['A. which', 'B. that', 'C. what', 'D. who'], answer: 'B', explanation: '强调句型"It is...that..."，强调主语"differences in national regulations"。被强调部分是物，用"that"。' },
      { type: 'fill', question: 'Chickens _____ in the United States are not fit to grace European tables. (屠宰)', answer: 'slaughtered', explanation: '"slaughtered"是过去分词作后置定语，修饰"chickens"，表示"被屠宰的"。' },
      { type: 'judge', question: '"put sand in the wheels"是习语，意为"润滑"。', answer: '错误', explanation: '"put sand in the wheels"意为"制造障碍、使事情难以进行"。沙子放入轮子中会阻碍运转，是负面含义。' },
      { type: 'choice', question: 'Why have two lots of tests where one _____ do?', options: ['A. will', 'B. can', 'C. would', 'D. should'], answer: 'C', explanation: '"would do"中"do"意为"足够、行"，"would"表示假设条件，意为"一套就够用了"。' },
    ],

  },
  {
    id: 9,
    title: 'Royal espionage',
    titleCn: '王室谍报活动',
    text: [
      'Alfred the Great acted as his own spy, visiting Danish camps disguised as a minstrel.',
      'In those days wandering minstrels were welcome everywhere. They were not fighting men, and their harp was their passport.',
      'Alfred had learned many of the ballads in his youth, and could vary his programme with acrobatic tricks and simple conjuring.'
    ],
    textCn: [
      '阿尔弗雷德大帝亲自充当间谍，伪装成吟游诗人探访丹麦人的营地。',
      '在那个年代，流浪的吟游诗人到处都受欢迎。他们不是武士，竖琴就是他们的通行证。',
      '阿尔弗雷德年轻时学过许多民谣，还能用杂技和简单的魔术来变换他的节目。'
    ],
    vocabulary: [
      { word: 'espionage', phonetic: '/ˈespiənɑːʒ/', meaning: '谍报活动' },
      { word: 'disguise', phonetic: '/dɪsˈɡaɪz/', meaning: '伪装' },
      { word: 'minstrel', phonetic: '/ˈmɪnstrəl/', meaning: '吟游诗人' },
      { word: 'wandering', phonetic: '/ˈwɒndərɪŋ/', meaning: '流浪的' },
      { word: 'harp', phonetic: '/hɑːp/', meaning: '竖琴' },
      { word: 'ballad', phonetic: '/ˈbæləd/', meaning: '民谣' },
      { word: 'acrobatic', phonetic: '/ˌækrəˈbætɪk/', meaning: '杂技的' },
      { word: 'conjuring', phonetic: '/ˈkʌndʒərɪŋ/', meaning: '魔术' }
    ],
    notes: [
      '"act as" 充当。',
      '"disguised as" 伪装成（过去分词短语）。',
      '"vary his programme" 变换节目。'

    ],
    tags: ['长难句', '学术写作'],
    difficulty: 4,
  },
  {
    id: 10,
    title: 'How to grow old',
    titleCn: '如何安度晚年',
    text: [
      'Some old people are oppressed by the fear of death. In the young there is a justification for this feeling.',
      'Young men who have reason to fear that they will be killed in battle may justifiably feel bitter in the thought that they have been cheated of the best things that life has to offer.',
      'But in an old man who has known human joys and sorrows, and has achieved whatever work it was in him to do, the fear of death is somewhat abject and ignoble.'
    ],
    textCn: [
      '有些老年人因惧怕死亡而感到压抑。年轻人有这种感觉还情有可原。',
      '那些有理由担心会在战斗中阵亡的年轻人，想到自己被骗走了人生所能提供的最好的东西，感到痛苦是情有可原的。',
      '但对于一个已经饱尝人间悲欢、已经完成了他所能做的工作的老人来说，惧怕死亡就有点可悲和不光彩了。'
    ],
    vocabulary: [
      { word: 'oppress', phonetic: '/əˈpres/', meaning: '使压抑' },
      { word: 'justification', phonetic: '/ˌdʒʌstɪfɪˈkeɪʃn/', meaning: '正当理由' },
      { word: 'bitter', phonetic: '/ˈbɪtə/', meaning: '痛苦的' },
      { word: 'sorrow', phonetic: '/ˈsɒrəʊ/', meaning: '悲伤' },
      { word: 'achieve', phonetic: '/əˈtʃiːv/', meaning: '完成' },
      { word: 'abject', phonetic: '/ˈæbdʒekt/', meaning: '可悲的' },
      { word: 'ignoble', phonetic: '/ɪɡˈnəʊbl/', meaning: '不光彩的' }
    ],
    notes: [
      '"the fear of death" 对死亡的恐惧。',
      '"be cheated of" 被骗走了。',
      '"it was in him to do" 他力所能及的。'

    ],
    tags: ['高级语法', '综合运用'],
    difficulty: 4,
  },
  {
    id: 11,
    title: 'Banks and their customers',
    titleCn: '银行与顾客',
    text: [
      'When anyone opens a current account at a bank, he is lending the bank money. The bank uses his money for investment.',
      'The difference between what the bank pays the depositor and what it charges the borrower is one of its principal sources of profit.'
    ],
    textCn: [
      '任何人在银行开立活期账户，就是在借钱给银行。银行用他的钱去投资。',
      '银行付给储户的利息和向借款者收取的利息之间的差额，是银行主要利润来源之一。'
    ],
    vocabulary: [
      { word: 'current account', phonetic: '/ˈkʌrənt əˈkaʊnt/', meaning: '活期账户' },
      { word: 'investment', phonetic: '/ɪnˈvestmənt/', meaning: '投资' },
      { word: 'depositor', phonetic: '/dɪˈpɒzɪtə/', meaning: '储户' },
      { word: 'borrower', phonetic: '/ˈbɒrəʊə/', meaning: '借款人' },
      { word: 'principal', phonetic: '/ˈprɪnsɪpl/', meaning: '主要的' },
      { word: 'profit', phonetic: '/ˈprɒfɪt/', meaning: '利润' },
      { word: 'charge', phonetic: '/tʃɑːdʒ/', meaning: '收费' }
    ],
    notes: [
      '"current account" 活期账户 / "savings account" 储蓄账户。',
      '"principal sources" 主要来源。',
      '"charge the borrower" 向借款人收费。'

    ],
    tags: ['倒装句', '修辞手法'],
    difficulty: 5,
  },
  {
    id: 12,
    title: 'The search for oil',
    titleCn: '石油勘探',
    text: [
      'The deepest holes of all are made for oil, and they go down to as much as 25,000 feet.',
      'But we do not need to send men down to get the oil out. The oil is forced up by the pressure of the gas below it.'
    ],
    textCn: [
      '所有最深的钻孔都是为找石油而打的，深度可达25000英尺。',
      '但我们不需要派人下去把油弄出来。石油被下面的天然气压力压上来。'
    ],
    vocabulary: [
      { word: 'deep', phonetic: '/diːp/', meaning: '深的' },
      { word: 'hole', phonetic: '/həʊl/', meaning: '洞' },
      { word: 'feet', phonetic: '/fiːt/', meaning: '英尺' },
      { word: 'force', phonetic: '/fɔːs/', meaning: '迫使' },
      { word: 'pressure', phonetic: '/ˈpreʃə/', meaning: '压力' },
      { word: 'gas', phonetic: '/ɡæs/', meaning: '气体' },
      { word: 'below', phonetic: '/bɪˈləʊ/', meaning: '在...下面' }
    ],
    notes: [
      '"as much as" 多达。',
      '"be forced up" 被迫上升。',
      '"the pressure of the gas" 气体的压力。'

    ],
    tags: ['复杂句型', '逻辑关系'],
    difficulty: 4,
  },
  {
    id: 13,
    title: 'Education',
    titleCn: '教育',
    text: [
      'Education is one of the key words of our time. A man without an education, many of us believe, is an unfortunate victim of adverse circumstances deprived of one of the greatest opportunities.'
    ],
    textCn: [
      '教育是我们这个时代的关键词之一。我们许多人认为，没有受过教育的人是逆境的不幸受害者，被剥夺了最伟大的机会之一。'
    ],
    vocabulary: [
      { word: 'education', phonetic: '/ˌedʒuˈkeɪʃn/', meaning: '教育' },
      { word: 'unfortunate', phonetic: '/ʌnˈfɔːtʃənɪt/', meaning: '不幸的' },
      { word: 'victim', phonetic: '/ˈvɪktɪm/', meaning: '受害者' },
      { word: 'adverse', phonetic: '/ˈædvɜːs/', meaning: '不利的' },
      { word: 'circumstance', phonetic: '/ˈsɜːkəmstəns/', meaning: '环境' },
      { word: 'deprive', phonetic: '/dɪˈpraɪv/', meaning: '剥夺' },
      { word: 'opportunity', phonetic: '/ˌɒpəˈtjuːnɪti/', meaning: '机会' }
    ],
    notes: [
      '"one of the key words" 关键词之一。',
      '"deprive...of..." 剥夺...的...。',
      '"adverse circumstances" 不利的环境。'

    ],
    tags: ['高级词汇', '文化背景'],
    difficulty: 4,
  },
  {
    id: 14,
    title: 'Silicon valley',
    titleCn: '硅谷',
    text: [
      'The circuitry of the brain is vastly more complex than any computer yet devised. Yet the micro-miniaturization of electronics is rapidly transforming our world.',
      'The computer industry has grown up in what is now known as Silicon Valley, a region south of San Francisco.',
      'The name comes from the silicon that is used in the manufacture of transistors and integrated circuits.'
    ],
    textCn: [
      '大脑的电路比迄今发明的任何计算机都要复杂得多。然而电子产品的微型化正在迅速改变我们的世界。',
      '计算机工业在如今被称为硅谷的地方发展起来，那是旧金山以南的一个地区。',
      '这个名字来源于制造晶体管和集成电路所用的硅。'
    ],
    vocabulary: [
      { word: 'circuitry', phonetic: '/ˈsɜːkɪtri/', meaning: '电路' },
      { word: 'devise', phonetic: '/dɪˈvaɪz/', meaning: '发明' },
      { word: 'micro-miniaturization', phonetic: '/ˈmaɪkrəʊ ˈmɪniətʃəraɪˈzeɪʃn/', meaning: '微型化' },
      { word: 'manufacture', phonetic: '/ˌmænjuˈfæktʃə/', meaning: '制造' },
      { word: 'transistor', phonetic: '/trænˈzɪstə/', meaning: '晶体管' },
      { word: 'integrated circuit', phonetic: '/ˈɪntɪɡreɪtɪd ˈsɜːkɪt/', meaning: '集成电路' },
      { word: 'silicon', phonetic: '/ˈsɪlɪkən/', meaning: '硅' }
    ],
    notes: [
      '"vastly more complex" 复杂得多。',
      '"what is now known as" 如今被称为。',
      '"grow up" 发展起来。'

    ],
    tags: ['综合语法', '写作技巧'],
    difficulty: 5,
  },
  {
    id: 15,
    title: 'The sporting spirit',
    titleCn: '体育精神',
    text: [
      'I am always amazed when I hear people saying that sport creates goodwill between the nations, and that if only the common peoples of the world could meet one another at football or cricket, they would have no inclination to meet on the battlefield.',
      'Nearly all the sports practised nowadays are competitive. You play to win, and the game has little meaning unless you do your utmost to win.'
    ],
    textCn: [
      '当我听到人们说体育创造国与国之间的友好，只要普通人民能在足球或板球场上相遇，他们就不会有在战场上相遇的意愿时，我总是感到惊讶。',
      '如今进行的几乎所有的体育运动都是竞争性的。你比赛是为了赢，除非你尽最大努力去赢，否则比赛就几乎毫无意义。'
    ],
    vocabulary: [
      { word: 'goodwill', phonetic: '/ˌɡʊdˈwɪl/', meaning: '友好' },
      { word: 'inclination', phonetic: '/ˌɪnklɪˈneɪʃn/', meaning: '意愿' },
      { word: 'competitive', phonetic: '/kəmˈpetɪtɪv/', meaning: '竞争性的' },
      { word: 'patriotism', phonetic: '/ˈpætriətɪzəm/', meaning: '爱国主义' }
    ],
    notes: [
      '"if only" 虚拟语气。',
      '"do one\'s utmost" 尽最大努力。'

    ],
    tags: ['高级阅读', '综合运用'],
    difficulty: 5,
  },
]

export default book4
