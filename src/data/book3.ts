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
      'The search proved difficult, for the puma was often observed at one place in the morning and at another place twenty miles away in the evening.',
    ],
    textCn: [
      '美洲狮是一种在美洲发现的大型猫科动物。当伦敦动物园收到报告说在伦敦以南45英里处发现了一只野生美洲狮时，这些报告并没有被当回事。',
      '然而，随着证据的积累，动物园的专家们觉得有必要进行调查，因为声称见过这只美洲狮的人给出的描述出奇地相似。',
      '对美洲狮的搜索从一个小村庄开始，那里一位正在摘黑莓的妇女看见了一只"大猫"，离她只有五码远。它一见到她就跑开了，专家们确认美洲狮除非被逼到绝境，否则不会攻击人类。',
      '搜索工作证明是困难的，因为这只美洲狮常常早上在一个地方被发现，晚上却在二十英里之外的另一个地方。',
    ],
    vocabulary: [
      { word: 'puma', phonetic: '/ˈpjuːmə/', meaning: '美洲狮' },
      { word: 'spot', phonetic: '/spɒt/', meaning: '发现，看见' },
      { word: 'evidence', phonetic: '/ˈevɪdəns/', meaning: '证据' },
      { word: 'accumulate', phonetic: '/əˈkjuːmjəleɪt/', meaning: '积累' },
      { word: 'oblige', phonetic: '/əˈblaɪdʒ/', meaning: '迫使' },
      { word: 'investigate', phonetic: '/ɪnˈvestɪɡeɪt/', meaning: '调查' },
      { word: 'extraordinarily', phonetic: '/ɪkˈstrɔːdnrɪli/', meaning: '非常，特别地' },
      { word: 'corner', phonetic: '/ˈkɔːnə/', meaning: '使走投无路' },
    ],
    notes: [
      '"at large" 是固定短语，指（危险的人或动物）在逃的、未被捕获的。',
      '"feel obliged to do" 意为感到有义务做某事。',
      '"unless it is cornered" — unless 引导条件状语从句，corner 作动词意为"使陷入困境"。',
      '本文使用了较多被动语态：are found, had been spotted, were not taken, was observed。',
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
      'Armed with a torch, the vicar went up into the clock tower to see what was going on. In the torchlight, he caught sight of a figure whom he immediately recognised as Bill Wilkins, our local grocer.',
    ],
    textCn: [
      '我们的牧师总是为各种事由筹款，但他从未筹到足够的钱来修缮教堂的钟。',
      '这座过去日夜报时的大钟在很多年前就坏了，从此一直沉默无声。',
      '然而一天夜里，我们的牧师突然惊醒：大钟正在报时！他看了看手表，是一点钟，但大钟敲了十三下才停下来。',
      '牧师拿着手电筒上了钟楼，想看看怎么回事。在手电光中，他看到一个人影，立刻认出是比尔·威尔金斯，我们当地的杂货商。',
    ],
    vocabulary: [
      { word: 'vicar', phonetic: '/ˈvɪkə/', meaning: '牧师' },
      { word: 'raise', phonetic: '/reɪz/', meaning: '筹集' },
      { word: 'cause', phonetic: '/kɔːz/', meaning: '事业，理由' },
      { word: 'strike', phonetic: '/straɪk/', meaning: '敲，打，报时' },
      { word: 'damage', phonetic: '/ˈdæmɪdʒ/', meaning: '损坏' },
      { word: 'silent', phonetic: '/ˈsaɪlənt/', meaning: '沉默的' },
      { word: 'torch', phonetic: '/tɔːtʃ/', meaning: '手电筒' },
      { word: 'grocer', phonetic: '/ˈɡrəʊsə/', meaning: '杂货商' },
    ],
    notes: [
      '"always raising money" — 现在进行时与 always 连用，表示反复发生的动作（含感情色彩）。',
      '"have the church clock repaired" — have sth done 结构，让他人做某事。',
      '"armed with" 此处是过去分词短语作状语，意为"拿着，带着"。',
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
      'The temple which the archaeologists explored was used as a place of worship from the fifteenth century B.C. until Roman times.',
    ],
    textCn: [
      '不久前，考古学家在爱琴海的基亚岛上有一个有趣的发现。',
      '一支美国队伍在阿伊亚·伊里尼海角的一座古城里发掘了一座神庙。这座城市一度肯定很繁荣，因为它享有高度的文明。',
      '房屋——常常有三层楼高——是用石头建造的。房间很大，墙壁装饰精美。城里甚至配备了排水系统，因为在狭窄的街道下面发现了许多陶土管道。',
      '考古学家发掘的这座神庙从公元前15世纪直到罗马时代一直被用作祭祀场所。',
    ],
    vocabulary: [
      { word: 'archaeologist', phonetic: '/ˌɑːkiˈɒlədʒɪst/', meaning: '考古学家' },
      { word: 'temple', phonetic: '/ˈtempl/', meaning: '神庙，寺庙' },
      { word: 'ancient', phonetic: '/ˈeɪnʃənt/', meaning: '古代的' },
      { word: 'prosperous', phonetic: '/ˈprɒspərəs/', meaning: '繁荣的' },
      { word: 'civilization', phonetic: '/ˌsɪvɪlaɪˈzeɪʃn/', meaning: '文明' },
      { word: 'decorate', phonetic: '/ˈdekəreɪt/', meaning: '装饰' },
      { word: 'drainage', phonetic: '/ˈdreɪnɪdʒ/', meaning: '排水' },
      { word: 'worship', phonetic: '/ˈwɜːʃɪp/', meaning: '崇拜，祭祀' },
    ],
    notes: [
      '"must have been" — must + 完成时，表示对过去的肯定推测。',
      '"be equipped with" 配备有...。',
      '"from...until" 表示时间跨度：从...到...。',
      'B.C. = Before Christ，公元前。A.D. = Anno Domini，公元。',
    ],
  },
]

export default book3
