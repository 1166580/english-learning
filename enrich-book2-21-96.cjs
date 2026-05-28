const fs = require('fs');
const path = require('path');
const filePath = path.join(__dirname, 'src', 'data', 'book2.ts');
let content = fs.readFileSync(filePath, 'utf-8');

const esc = s => (s||'').replace(/\\/g, '\\\\').replace(/'/g, "\\'");

const lessons = [
  {
    id: 21, title: 'Mad or not?', titleCn: '是不是疯了？',
    text: [
      'Aeroplanes are slowly driving me mad. I live near an airport and passing planes can be heard night and day.',
      'The airport was built during the war, but for some reason it could not be used then.',
      'Last year, however, it came into use. Over a hundred people must have been driven away from their homes by the noise.',
      'I am one of the few people left. Sometimes I think this house will be knocked down by a passing plane.',
      'I have been offered a large sum of money to go away, but I am determined to stay here.'
    ],
    textCn: [
      '飞机正在慢慢地把我逼疯。我住在一个机场附近，过往的飞机日夜都能听到。',
      '机场是战争期间建的，但由于某种原因当时未能使用。',
      '然而去年机场启用了。一定有一百多人被噪音赶离了家园。',
      '我是留下来的少数人之一。有时我觉得这房子会被路过的飞机撞倒。',
      '有人出一大笔钱要我搬走，但我决心留在这里。'
    ],
    vocab: [
      ['mad', '/mæd/', '疯的'],
      ['aeroplane', '/ˈeərəpleɪn/', '飞机'],
      ['drive', '/draɪv/', '迫使'],
      ['determined', '/dɪˈtɜːmɪnd/', '决心的'],
      ['probably', '/ˈprɒbəbli/', '大概']
    ],
    notes: [
      '被动语态：can be heard, must have been driven away。',
      '"drive sb mad" 逼疯某人。',
      '"be determined to do" 决心做某事。'
    ],
    tags: ['被动语态', '情态动词'], difficulty: 3,
    summary: '作者住在机场附近，日夜被飞机噪音困扰。机场去年启用后，大多数人被噪音赶走，但作者决心留下来。',
    summaryEn: 'The author lives near an airport and is driven mad by the noise of passing planes. Most people have been driven away, but the author is determined to stay.',
  },
  {
    id: 22, title: 'A glass envelope', titleCn: '玻璃信封',
    text: [
      'My daughter, Jane, never dreamed of receiving a letter from a girl of her own age in Holland.',
      'Last year, we were travelling across the Channel and Jane put a piece of paper with her name and address into a bottle.',
      'She threw the bottle into the sea. She never thought of it again, but ten months later, she received a letter from a girl in Holland.',
      'Both girls write to each other regularly now. However, they have decided to use the post office.',
      'Letters will cost a little more, but they will certainly travel faster.'
    ],
    textCn: [
      '我的女儿简从未想过会收到一个与她同龄的荷兰女孩的来信。',
      '去年，我们在横渡英吉利海峡时，简把一张写有她姓名和地址的纸放进了一只瓶子。',
      '她把瓶子扔进了大海。她再也没想过这件事，但十个月后，她收到了一个荷兰女孩的来信。',
      '现在两个女孩定期互相通信。然而，她们决定使用邮局。',
      '这样会多花一点钱，但信件肯定会更快到达。'
    ],
    vocab: [
      ['dream', '/driːm/', '做梦'],
      ['envelope', '/ˈenvələʊp/', '信封'],
      ['Channel', '/ˈtʃænl/', '英吉利海峡'],
      ['address', '/əˈdres/', '地址'],
      ['regularly', '/ˈreɡjələli/', '定期地']
    ],
    notes: [
      '"dream of doing" 梦想/想到做某事。',
      '"write to each other" 互相通信。'
    ],
    tags: ['一般过去时', '现在完成时'], difficulty: 2,
    summary: '作者的女儿简在渡海时将写有地址的纸条放入瓶中扔进大海，十个月后竟然收到了荷兰同龄女孩的来信。',
    summaryEn: 'Jane put a piece of paper with her address into a bottle and threw it into the sea. Ten months later, she received a letter from a girl in Holland.',
  },
  {
    id: 23, title: 'A new house', titleCn: '一座新房子',
    text: [
      'I had a letter from my sister yesterday. She lives in Nigeria.',
      'In her letter, she said that she would come to England next year. If she comes, she will get a surprise.',
      'We are now living in a beautiful new house in the country. Work on it had begun before my sister left.',
      'The house was completed five months ago. In my letter, I told her that she could stay with us.',
      'The house has many large rooms and there is a lovely garden.'
    ],
    textCn: [
      '昨天我收到了姐姐的来信。她住在尼日利亚。',
      '她在信中说她明年要来英国。如果她来，她会大吃一惊。',
      '我们现在住在乡下一座漂亮的新房子里。这房子在我姐姐离开之前就开始建造了。',
      '房子五个月前竣工。我在信中告诉她可以和我们住在一起。',
      '房子里有许多大房间，还有一个可爱的花园。'
    ],
    vocab: [
      ['Nigeria', '/naɪˈdʒɪəriə/', '尼日利亚'],
      ['surprise', '/səˈpraɪz/', '惊奇'],
      ['complete', '/kəmˈpliːt/', '完成'],
      ['modern', '/ˈmɒdn/', '现代化的'],
      ['strange', '/streɪndʒ/', '奇怪的']
    ],
    notes: [
      '过去完成时：had begun（在left之前）。',
      '第一类条件句：If she comes, she will get...。'
    ],
    tags: ['条件句', '过去完成时'], difficulty: 2,
    summary: '作者告诉在尼日利亚的姐姐，他们已经在乡下建好了一座现代化的新房子，邀请她来住。',
    summaryEn: 'The author wrote to his sister in Nigeria, telling her about their beautiful new house in the country and inviting her to stay.',
  },
  {
    id: 24, title: 'It could be worse', titleCn: '还不算太糟',
    text: [
      'I entered the hotel manager\'s office and sat down. I had just lost fifty pounds and I felt very upset.',
      '"I left the money in my room," I said, "and it\'s not there now."',
      'The manager was sympathetic, but he could do nothing.',
      '"Everyone\'s losing money these days," he said. He started to complain about this wicked world but was interrupted by a knock at the door.',
      'A girl came in and put an envelope on his desk. It contained fifty pounds. "I found this outside this gentleman\'s room," she said.',
      '"Well," I said to the manager, "there is still some honesty in this world!"'
    ],
    textCn: [
      '我走进旅馆经理的办公室坐了下来。我刚刚丢了五十英镑，感到非常烦恼。',
      '"我把钱忘在房间里了，"我说，"可现在钱不在了。"',
      '经理表示同情，但他也无能为力。',
      '"现在大家都在丢钱，"他说。他开始抱怨这个邪恶的世界，但被一阵敲门声打断了。',
      '一个姑娘走了进来，把一个信封放在了他的桌子上。里面装着五十英镑。"我在这位先生的房间外面发现了这个，"她说。',
      '"好，"我对经理说，"这个世界上还是有诚实的！"'
    ],
    vocab: [
      ['manager', '/ˈmænɪdʒə/', '经理'],
      ['upset', '/ʌpˈset/', '烦恼的'],
      ['sympathetic', '/ˌsɪmpəˈθetɪk/', '表示同情的'],
      ['complain', '/kəmˈpleɪn/', '抱怨'],
      ['wicked', '/ˈwɪkɪd/', '邪恶的'],
      ['honesty', '/ˈɒnəsti/', '诚实']
    ],
    notes: [
      '"could do nothing" 无能为力。',
      '"complain about" 抱怨某事。',
      '"there is still some honesty" 还是有诚实的。'
    ],
    tags: ['一般过去时', '间接引语'], difficulty: 3,
    summary: '作者在旅馆丢了五十英镑，经理表示无能为力。正当经理抱怨世道不好时，一位姑娘送回了钱。',
    summaryEn: 'The author lost fifty pounds at a hotel. The manager could do nothing. A girl returned the money, proving there is still honesty in the world.',
  },
  {
    id: 25, title: 'Do the English speak English?', titleCn: '英国人讲的是英语吗？',
    text: [
      'I arrived in London at last. The railway station was big, black and dark.',
      'I did not know the way to my hotel, so I asked a porter.',
      'I not only spoke English very carefully, but very clearly as well. The porter, however, could not understand me.',
      'I repeated my question several times and at last he understood. He answered me, but he spoke neither slowly nor clearly.',
      '"I am a foreigner," I said. Then he spoke slowly, but I could not understand him.',
      'The porter and I looked at each other and smiled. Then he said something and I understood it. The English speak English, but not the English I had learned!'
    ],
    textCn: [
      '我终于到了伦敦。火车站又大又黑又暗。',
      '我不知道去旅馆的路，于是问了一个搬运工。',
      '我的英语不仅说得非常仔细，而且非常清楚。但那个搬运工却听不懂我的话。',
      '我把问题重复了好几遍，他终于听懂了。他回答了我，但他说得既不慢也不清楚。',
      '"我是个外国人，"我说。然后他说得很慢，但我还是听不懂。',
      '搬运工和我相互对视笑了。然后他说了些什么，我听懂了。英国人说的是英语，但不是我学过的那种英语！'
    ],
    vocab: [
      ['railway', '/ˈreɪlweɪ/', '铁路'],
      ['porter', '/ˈpɔːtə/', '搬运工'],
      ['foreigner', '/ˈfɒrənə/', '外国人'],
      ['neither', '/ˈnaɪðə/', '既不'],
      ['understand', '/ˌʌndəˈstænd/', '理解']
    ],
    notes: [
      '"not only...but...as well" 不仅...而且...。',
      '"neither...nor..." 既不...也不...。',
      '"at last" 终于。'
    ],
    tags: ['并列连词', '否定句'], difficulty: 3,
    summary: '作者到伦敦后问路，虽然说得又仔细又清楚，搬运工却听不懂。搬运工回答时也含糊不清，两人最终相视而笑。',
    summaryEn: 'The author arrived in London and asked a porter for directions. Despite speaking carefully and clearly, the porter could not understand. When the porter replied, he spoke neither slowly nor clearly.',
  },
  {
    id: 26, title: 'The best art critics', titleCn: '最佳艺术评论家',
    text: [
      'I am an art student and I paint a lot of pictures. Many people pretend that they understand modern art.',
      'They always tell you what a picture is about. But quite often they are wrong.',
      'My sister is only seven, but she always tells me whether my pictures are good or not.',
      'She came into my room yesterday. "What are you doing?" she asked. "I\'m hanging this picture on the wall," I answered.',
      'She looked at it critically for a moment. "It\'s all right," she said, "but isn\'t it upside down?"',
      'I looked at it again. She was right! It was!'
    ],
    textCn: [
      '我是个学美术的学生，画了很多画。很多人假装懂现代艺术。',
      '他们总是告诉你一幅画的含义。但他们经常是错的。',
      '我妹妹只有七岁，但她总是告诉我我的画好不好。',
      '她昨天到我房间里来。"你在干什么？"她问。"我在把这幅画挂到墙上，"我回答。',
      '她用批评的眼光看了一会儿。"还不错，"她说，"但这画是不是挂倒了？"',
      '我又看了看。她是对的！确实挂倒了！'
    ],
    vocab: [
      ['critic', '/ˈkrɪtɪk/', '评论家'],
      ['pretend', '/prɪˈtend/', '假装'],
      ['whether', '/ˈweðə/', '是否'],
      ['critically', '/ˈkrɪtɪkli/', '批评地'],
      ['upside down', '/ˌʌpsaɪd daʊn/', '倒着']
    ],
    notes: [
      '"pretend to do" 假装做某事。',
      '"whether...or not" 是否。',
      '"upside down" 倒着，颠倒。'
    ],
    tags: ['一般现在时', '频率副词'], difficulty: 2,
    summary: '作者是美术学生，很多人假装懂现代艺术但经常说错。他七岁的妹妹却一眼看出他挂的画是倒的。',
    summaryEn: 'The author is an art student. His seven-year-old sister noticed that he had hung a picture upside down, while many adults who pretend to understand art would not have noticed.',
  },
  {
    id: 27, title: 'A wet night', titleCn: '雨夜',
    text: [
      'Late in the afternoon, the boys put up their tent in the middle of a field.',
      'As soon as this was done, they cooked a meal over an open fire. They were all hungry and the food smelled good.',
      'After a wonderful meal, they told stories and sang songs by the campfire.',
      'But some time later it began to rain. The boys felt tired so they put out the fire and crept into their tent.',
      'Their sleeping bags were warm and comfortable, so they all slept soundly.',
      'In the middle of the night, two boys woke up and began shouting. The tent was full of water!'
    ],
    textCn: [
      '傍晚时分，男孩们在一块田地中间搭起了帐篷。',
      '帐篷搭好后，他们在篝火上煮了一顿饭。他们都很饿，食物闻起来很香。',
      '吃了一顿美餐后，他们在篝火旁讲故事、唱歌。',
      '但过了一段时间开始下雨了。男孩们觉得累了，于是扑灭了火，钻进了帐篷。',
      '他们的睡袋又暖和又舒服，所以都睡得很熟。',
      '半夜，两个男孩醒来开始大叫。帐篷里全是水！'
    ],
    vocab: [
      ['tent', '/tent/', '帐篷'],
      ['field', '/fiːld/', '田地'],
      ['campfire', '/ˈkæmpfaɪə/', '篝火'],
      ['creep', '/kriːp/', '爬行'],
      ['leap', '/liːp/', '跳跃']
    ],
    notes: [
      '"put up" 搭起（帐篷）。',
      '"put out" 扑灭（火）。',
      '"woke up" 醒来（wake的过去式）。'
    ],
    tags: ['一般过去时', '不规则动词'], difficulty: 2,
    summary: '男孩们在田地里搭帐篷野营，吃了美餐后在篝火旁讲故事。半夜下雨，帐篷进了水，所有人都被惊醒。',
    summaryEn: 'The boys put up their tent in a field, cooked a meal, and told stories by the campfire. In the middle of the night, it rained and the tent filled with water, waking everyone up.',
  },
  {
    id: 28, title: 'No parking', titleCn: '禁止停车',
    text: [
      'Jasper White is one of those rare people who believes in ancient myths.',
      'He has just bought a new house in the city, but ever since he moved in, he has had trouble with cars and their owners.',
      'When he returns home at night, he always finds that someone has parked a car outside his gate.',
      'Because of this, he has not been able to get his own car into his garage even once.',
      'Jasper has put up "No Parking" signs outside his gate, but these have not had any effect.',
      'Now he has put an ugly stone head over the gate. He says it is Medusa, the Gorgon. He hopes she will turn cars and their owners to stone.'
    ],
    textCn: [
      '贾斯珀·怀特是那些为数不多的相信古代神话的人之一。',
      '他刚在城里买了一栋新房子，但从搬进去那天起，他就一直和汽车及车主们闹矛盾。',
      '每天晚上回到家，他总发现有人把车停在他家大门外。',
      '因此，他甚至一次都没能把自己的车开进车库。',
      '贾斯珀在大门外挂了"禁止停车"的牌子，但毫无效果。',
      '现在他在大门上方放了一个丑陋的石头像。他说那是蛇发女妖美杜莎。他希望她把汽车和车主变成石头。'
    ],
    vocab: [
      ['rare', '/reə/', '罕见的'],
      ['myth', '/mɪθ/', '神话'],
      ['owner', '/ˈəʊnə/', '车主'],
      ['garage', '/ˈɡærɑːʒ/', '车库'],
      ['effect', '/ɪˈfekt/', '效果'],
      ['ugly', '/ˈʌɡli/', '丑陋的']
    ],
    notes: [
      '"believe in" 信仰/相信。',
      '"ever since" 自从...以来。',
      '"have trouble with" 与...有麻烦。'
    ],
    tags: ['现在完成时', '关系从句'], difficulty: 3,
    summary: '贾斯珀买了新房子后总被人把车停在门口，挂了禁止停车的牌子也没用。他放了一个美杜莎石像在门上，希望把车变成石头。',
    summaryEn: 'Jasper White bought a new house but has had trouble with people parking outside his gate. He put up a stone head of Medusa, hoping to turn cars to stone.',
  },
  {
    id: 29, title: 'Taxi!', titleCn: '出租车！',
    text: [
      'Captain Ben Fawcett has bought an unusual taxi and has begun a new service.',
      'The "taxi" is a small Swiss aeroplane called a "Pilatus Porter". This wonderful plane can carry seven passengers.',
      'The most surprising thing about it is that it can land anywhere: on snow, water, or even on a ploughed field.',
      'Captain Fawcett\'s first passenger was a doctor who flew from Birmingham to a lonely village in the Welsh mountains.',
      'Since then, Captain Fawcett has flown passengers to many unusual places. Once he landed on the roof of a block of flats.',
      'On another occasion, he landed in a deserted car park.'
    ],
    textCn: [
      '本·福西特船长买了一辆不寻常的"出租车"，开始了一项新的服务。',
      '这辆"出租车"是一架名叫"派勒特斯·波特"的瑞士小飞机。这架奇妙的飞机能载七名乘客。',
      '最令人惊讶的是它可以在任何地方降落：雪地上、水上，甚至耕过的田里。',
      '福西特船长的第一位乘客是一位医生，他从伯明翰飞到威尔士山区一个偏僻的村庄。',
      '从那以后，福西特船长已经把乘客送到过许多不寻常的地方。有一次他在一栋公寓的楼顶降落。',
      '还有一次，他在一个废弃的停车场降落。'
    ],
    vocab: [
      ['taxi', '/ˈtæksi/', '出租车'],
      ['passenger', '/ˈpæsɪndʒə/', '乘客'],
      ['land', '/lænd/', '降落'],
      ['lonely', '/ˈləʊnli/', '偏僻的'],
      ['deserted', '/dɪˈzɜːtɪd/', '废弃的'],
      ['refuse', '/rɪˈfjuːz/', '拒绝']
    ],
    notes: [
      '"the most surprising thing" 最令人惊讶的事。',
      '"block of flats" 公寓楼。',
      '"on another occasion" 还有一次。'
    ],
    tags: ['现在完成时', '定语从句'], difficulty: 3,
    summary: '福西特船长买了一架瑞士小飞机当"出租车"使用，可以在任何地方降落。他载过各种乘客去过许多不寻常的地方。',
    summaryEn: 'Captain Fawcett bought a small Swiss aeroplane as a taxi. It can land anywhere. He has flown passengers to many unusual places including rooftops and car parks.',
  },
  {
    id: 30, title: 'Football or polo?', titleCn: '足球还是水球？',
    text: [
      'The Wayle is a small river that cuts across the park near my home.',
      'I like sitting by the Wayle on fine afternoons. It was warm last Sunday, so I went and sat on the river bank as usual.',
      'Some children were playing games on the bank and there were some people rowing on the river.',
      'Suddenly, one of the children kicked a ball very hard and it went towards a passing boat.',
      'Some people on the bank called out to the man in the boat, but he did not hear them.',
      'The ball struck him so hard that he nearly fell into the water. I turned to look at the children, but there weren\'t any in sight.'
    ],
    textCn: [
      '威尔河是一条小河，横穿我家附近的公园。',
      '在晴朗的下午，我喜欢坐在威尔河畔。上个星期天天气很暖和，所以我像往常一样去河边坐着。',
      '一些孩子在岸上玩游戏，还有一些人在河上划船。',
      '突然，一个孩子使劲踢了一脚球，球朝一条正在经过的小船飞去。',
      '岸上的人朝船上的人喊叫，但他没有听见。',
      '球重重地打在他身上，他差点掉进水里。我转过头去看那些孩子，但一个也看不见了。'
    ],
    vocab: [
      ['polo', '/ˈpəʊləʊ/', '水球'],
      ['bank', '/bæŋk/', '河岸'],
      ['row', '/rəʊ/', '划船'],
      ['kick', '/kɪk/', '踢'],
      ['sight', '/saɪt/', '视野']
    ],
    notes: [
      '"cut across" 穿过/横穿。',
      '"call out to" 向...喊叫。',
      '"in sight" 看得见。'
    ],
    tags: ['一般过去时', '过去进行时'], difficulty: 2,
    summary: '作者在河边坐着时，一个孩子把球踢到了经过的小船上，重重打在船上的人身上。回头看时，孩子们都跑掉了。',
    summaryEn: 'While the author was sitting by the river, a child kicked a ball that hit a man in a passing boat. When he turned to look, the children had all run away.',
  },
  {
    id: 31, title: 'Success story', titleCn: '成功的故事',
    text: [
      'Frank Hawkins was telling me about his experiences as a young man.',
      'Before he retired, Frank was the head of a very large business company, but as a boy he used to work in a small shop.',
      'It was his job to repair bicycles and at that time he used to work fourteen hours a day.',
      'He saved money for years and in 1958 he bought a small workshop of his own.',
      'In his twenties Frank used to make spare parts for aeroplanes. At that time he had two helpers.',
      'In a few years the small workshop had become a large factory which employed seven hundred and twenty-eight people.'
    ],
    textCn: [
      '弗兰克·霍金斯给我讲述了他年轻时的经历。',
      '退休前，弗兰克是一家大型商业公司的老板，但他小时候曾在一家小商店工作。',
      '他的工作是修理自行车，那时他每天工作十四个小时。',
      '他攒了好几年钱，在1958年买了一间自己的小作坊。',
      '在他二十多岁时，弗兰克常常制造飞机零件。那时他有两个帮手。',
      '几年后，小作坊变成了一个雇有七百二十八人的大工厂。'
    ],
    vocab: [
      ['retire', '/rɪˈtaɪə/', '退休'],
      ['company', '/ˈkʌmpəni/', '公司'],
      ['bicycle', '/ˈbaɪsɪkl/', '自行车'],
      ['workshop', '/ˈwɜːkʃɒp/', '作坊'],
      ['employ', '/ɪmˈplɔɪ/', '雇佣'],
      ['helper', '/ˈhelpə/', '帮手']
    ],
    notes: [
      '"used to do" 过去常常做某事。',
      '"it was his job to do" 他的工作是做...。',
      '"of his own" 他自己的。'
    ],
    tags: ['used to', '过去时态'], difficulty: 3,
    summary: '弗兰克·霍金斯退休前是一家大公司的老板，但他年轻时从修理自行车的小店做起，经过多年努力，小作坊变成了大工厂。',
    summaryEn: 'Frank Hawkins used to work in a small shop repairing bicycles. After years of hard work, he saved enough to buy a workshop which eventually became a large factory employing 728 people.',
  },
  {
    id: 32, title: 'Shopping made easy', titleCn: '购物变得很方便',
    text: [
      'People are not so honest as they once were. The temptation to steal is greater than ever before, especially in large shops.',
      'A detective recently watched a well-dressed woman who always went into a large store on Monday mornings.',
      'One Monday, there were fewer people in the shop than usual when the woman came in, so it was easier for the detective to watch her.',
      'The woman first bought a few small articles. After a little time, she chose one of the most expensive dresses in the shop and handed it to an assistant who wrapped it up for her as quickly as possible.',
      'Then the woman simply took the parcel and walked out of the shop without paying. When she was arrested, the detective found out that the shop assistant was her daughter.'
    ],
    textCn: [
      '人们不像以前那样诚实了。偷窃的诱惑比以往任何时候都大，尤其是在大商店里。',
      '一位侦探最近注意到了一位穿着讲究的女人，她总是在周一上午去一家大商店。',
      '一个星期一，商店里的人比平时少，所以侦探更容易观察她。',
      '那个女人先买了一些小物品。过了一会儿，她挑了一件商店里最贵的裙子，递给一个售货员，售货员尽快为她包好。',
      '然后那个女人拿着包裹没付钱就走出了商店。当她被逮捕时，侦探发现那个售货员是她的女儿。'
    ],
    vocab: [
      ['honest', '/ˈɒnɪst/', '诚实的'],
      ['temptation', '/tempˈteɪʃn/', '诱惑'],
      ['detective', '/dɪˈtektɪv/', '侦探'],
      ['article', '/ˈɑːtɪkl/', '物品'],
      ['assistant', '/əˈsɪstənt/', '售货员'],
      ['wrap', '/ræp/', '包裹'],
      ['arrest', '/əˈrest/', '逮捕']
    ],
    notes: [
      '"not so...as" 不像...那样。',
      '"hand sth to sb" 把某物递给某人。',
      '"wrap up" 包好。'
    ],
    tags: ['比较级', '被动语态'], difficulty: 3,
    summary: '一个穿着讲究的女人总在周一去大商店偷东西，让当售货员的女儿帮她包好昂贵的衣服后不付钱就走。侦探发现了真相。',
    summaryEn: 'A well-dressed woman regularly stole from a large shop. Her daughter, a shop assistant, would wrap expensive items for her. A detective watched and arrested her when she left without paying.',
  },
  {
    id: 33, title: 'Out of the darkness', titleCn: '走出黑暗',
    text: [
      'Nearly a week passed before the girl was able to explain what had happened to her.',
      'One afternoon she set out from the coast in a small boat and was caught in a storm.',
      'Towards evening, the boat struck a rock and the girl jumped into the sea. Then she swam to the shore after spending the whole night in the water.',
      'During that time she covered a distance of eight miles. Early next morning, she saw a light ahead.',
      'She knew she was near the shore because the light was high up on the cliffs.',
      'On arriving at the shore, the girl struggled up the cliff towards the light she had seen. That was all she remembered.'
    ],
    textCn: [
      '几乎过了一个星期，那女孩才能讲述自己的遭遇。',
      '一天下午，她乘小船从海岸出发，遇到了暴风雨。',
      '傍晚时分，小船触礁了，女孩跳进了海里。她在水里泡了一整夜后游到了岸边。',
      '在那段时间里，她游了八英里。第二天一早，她看到了前方的灯光。',
      '她知道她离岸很近了，因为灯光在高高的悬崖上。',
      '一到岸边，女孩就朝她看到的灯光方向挣扎着爬上悬崖。这是她记得的全部。'
    ],
    vocab: [
      ['darkness', '/ˈdɑːknɪs/', '黑暗'],
      ['coast', '/kəʊst/', '海岸'],
      ['shore', '/ʃɔː/', '海岸'],
      ['cliff', '/klɪf/', '悬崖'],
      ['struggle', '/ˈstrʌɡl/', '挣扎'],
      ['ahead', '/əˈhed/', '前方']
    ],
    notes: [
      '"be caught in" 遭遇（暴风雨等）。',
      '"towards evening" 傍晚时分。',
      '"on arriving at" 一到达...。'
    ],
    tags: ['一般过去时', '时间状语'], difficulty: 3,
    summary: '一个女孩乘小船出海遇到暴风雨，船触礁后她跳入海中游了一整夜，游了八英里后终于看到灯光，挣扎着爬上悬崖获救。',
    summaryEn: 'A girl set out in a small boat and was caught in a storm. The boat struck a rock and she swam all night, covering eight miles before reaching shore and climbing the cliffs towards a light.',
  },
  {
    id: 34, title: 'Quick work', titleCn: '破案神速',
    text: [
      'Dan Robinson has been worried all the week. Last Tuesday he received a letter from the local police.',
      'In the letter he was asked to call at the station. Dan wondered why he was wanted by the police, but he went to the station yesterday and now he is not worried any more.',
      'At the station, he was told by a smiling policeman that his bicycle had been found.',
      'Five days ago, the policeman told him, the bicycle was picked up in a small village four hundred miles away.',
      'It is now being sent to his home by train. Dan was most surprised when he heard the news. He was amused too, because he never expected the bicycle to be found.',
      'The bicycle was stolen twenty years ago when Dan was a boy of fifteen!'
    ],
    textCn: [
      '丹·罗宾逊整个星期都在担心。上星期二他收到了当地警察局的一封信。',
      '信中要求他去一趟警察局。丹不知道为什么警察要找他，但他昨天去了警察局，现在他不再担心了。',
      '在警察局，一个面带微笑的警察告诉他，他的自行车已经被找到了。',
      '那个警察告诉他，五天前自行车在四百英里外的一个小村庄被发现了。',
      '自行车现在正用火车运往他家。丹听到这个消息时非常惊讶。他也觉得好笑，因为他从未指望自行车还能被找到。',
      '自行车是二十年前丹还是个十五岁的孩子时被偷的！'
    ],
    vocab: [
      ['worried', '/ˈwʌrid/', '担心的'],
      ['local', '/ˈləʊkl/', '当地的'],
      ['wonder', '/ˈwʌndə/', '想知道'],
      ['pick up', '/pɪk ʌp/', '找到'],
      ['expect', '/ɪkˈspekt/', '指望'],
      ['steal', '/stiːl/', '偷']
    ],
    notes: [
      '"call at" 拜访（某地）。',
      '"be picked up" 被发现/找到。',
      '"most surprised" 非常惊讶（most = very）。'
    ],
    tags: ['被动语态', '现在完成时'], difficulty: 3,
    summary: '丹收到警察局来信要求他去一趟，到了才发现二十年前被偷的自行车在四百英里外的村庄被找到了。',
    summaryEn: 'Dan received a letter from the police and was told his bicycle, stolen twenty years ago when he was fifteen, had been found four hundred miles away.',
  },
  {
    id: 35, title: 'Stop thief!', titleCn: '捉贼！',
    text: [
      'Roy Trenton used to drive a taxi. A short while ago, however, he became a bus driver and he has not regretted it.',
      'He is finding his new work far more exciting. When he was driving along Catford Street recently, he saw two thieves rush out of a shop and run towards a waiting car.',
      'One of them was carrying a bag full of money. Roy acted quickly and drove the bus straight at the thieves.',
      'The one with the money got such a fright that he dropped the bag. As the thieves were trying to get away in their car, Roy drove his bus into the back of it.',
      'While the battered car was moving away, Roy stopped his bus and telephoned the police. The thieves\' car was badly damaged and easy to recognize.',
      'Shortly afterwards, the police stopped the car and both men were arrested.'
    ],
    textCn: [
      '罗伊·特伦顿过去开出租车。然而不久前，他成了一名公共汽车司机，而且他并不后悔。',
      '他发觉新工作令人兴奋得多。最近他正沿着卡特福德大街开车时，看到两个小偷从一家商店冲出来，朝一辆等候着的汽车跑去。',
      '其中一个提着一个装满钱的包。罗伊动作迅速，开车径直朝小偷冲去。',
      '提着包的小偷吓了一大跳，把包掉了。小偷想开车逃跑时，罗伊把公共汽车撞在了那辆车的尾部。',
      '当那辆被撞坏的车开走时，罗伊停下车给警察打了电话。小偷的车损坏严重，很容易辨认。',
      '不久之后，警察截住了那辆车，两个人都被逮捕了。'
    ],
    vocab: [
      ['regret', '/rɪˈɡret/', '后悔'],
      ['thief', '/θiːf/', '小偷'],
      ['fright', '/fraɪt/', '惊吓'],
      ['drop', '/drɒp/', '掉落'],
      ['battered', '/ˈbætəd/', '撞坏的'],
      ['recognize', '/ˈrekəɡnaɪz/', '辨认']
    ],
    notes: [
      '"used to do" 过去常常做。',
      '"far more exciting" 令人兴奋得多。',
      '"such...that..." 如此...以至于...。'
    ],
    tags: ['一般过去时', '结果状语从句'], difficulty: 3,
    summary: '前出租车司机罗伊转行开公交后，看到两个小偷从商店跑出，他开车撞向小偷，吓掉了钱袋，又撞坏了他们的车，最终两贼被逮捕。',
    summaryEn: 'Roy, a former taxi driver turned bus driver, saw two thieves rush out of a shop. He drove his bus straight at them, frightened them into dropping the money, and damaged their car so the police could catch them.',
  },
  {
    id: 36, title: 'Across the Channel', titleCn: '横渡英吉利海峡',
    text: [
      'Debbie Hart is going to swim across the English Channel tomorrow. She is only eleven years old and she hopes to set up a new world record.',
      'She is a strong swimmer and many people feel that she is sure to succeed.',
      'Debbie\'s father will set out in a small boat to accompany her. Debbie\'s mother has been training her for several years.',
      'Tomorrow she will not be swimming by herself. Her father will be in the boat beside her.',
      'Debbie has covered the distance many times in training. She plans to take short rests every two hours.',
      'She will have something to drink but she will not eat any solid food. Most of Debbie\'s school friends will be waiting for her on the English coast.'
    ],
    textCn: [
      '黛比·哈特明天要横渡英吉利海峡。她只有十一岁，希望能创造一项新的世界纪录。',
      '她是一个很强壮的游泳运动员，许多人觉得她一定会成功。',
      '黛比的父亲将乘一条小船陪伴她。黛比的母亲已经训练了她好几年。',
      '明天她不会独自游泳。她的父亲将在旁边的小船上。',
      '黛比在训练中已经游过很多次这段距离。她计划每两小时休息一下。',
      '她会喝点东西，但不会吃任何固体食物。黛比的大部分同学将在英国海岸等候她。'
    ],
    vocab: [
      ['channel', '/ˈtʃænl/', '海峡'],
      ['record', '/ˈrekɔːd/', '纪录'],
      ['accompany', '/əˈkʌmpəni/', '陪伴'],
      ['train', '/treɪn/', '训练'],
      ['solid', '/ˈsɒlɪd/', '固体的'],
      ['coast', '/kəʊst/', '海岸']
    ],
    notes: [
      '"be sure to do" 一定会做。',
      '"set out" 出发。',
      '"every two hours" 每两小时。'
    ],
    tags: ['一般将来时', 'be going to'], difficulty: 2,
    summary: '十一岁的黛比·哈特计划横渡英吉利海峡，她的父亲将乘小船陪伴她，母亲已训练她多年，她希望创造新的世界纪录。',
    summaryEn: 'Eleven-year-old Debbie Hart plans to swim across the English Channel tomorrow. Her father will accompany her in a boat. Her mother has trained her for years and she hopes to set a new world record.',
  },
  {
    id: 37, title: 'The Olympic Games', titleCn: '奥林匹克运动会',
    text: [
      'The Olympic Games will be held in our country in four years\' time. As a great many people will be visiting the country, the government will be building new hotels, an immense stadium, and a fine new swimming pool.',
      'They will also be building new roads and a special railway line.',
      'The Games will be held just outside the capital and the whole area will be called "Olympic City".',
      'Workers will have completed the new roads by the end of this year. By the end of next year, they will have finished work on the new stadium.',
      'The fine modern buildings have been designed by Kurt Gunter. Everybody will be watching anxiously as the new buildings go up.',
      'We are all very excited and are looking forward to the Olympic Games because they have never been held before in this country.'
    ],
    textCn: [
      '奥运会将于四年后在我国举行。由于会有大批的人来我国参观，政府将建造新的旅馆、一座巨大的体育场和一个新的游泳池。',
      '他们还将修筑新的道路和一条铁路专线。',
      '奥运会将在首都郊外举行，整个地区将被称为"奥林匹克城"。',
      '工人们将在今年年底前修完新的道路。到明年年底，他们将完成新体育场的建设。',
      '这些漂亮的现代建筑是由库尔特·冈特设计的。当新建筑拔地而起时，大家都在急切地关注着。',
      '我们都非常激动，期盼着奥运会的到来，因为在这个国家还从未举办过奥运会。'
    ],
    vocab: [
      ['Olympic', '/əˈlɪmpɪk/', '奥林匹克的'],
      ['government', '/ˈɡʌvənmənt/', '政府'],
      ['immense', '/ɪˈmens/', '巨大的'],
      ['stadium', '/ˈsteɪdiəm/', '体育场'],
      ['design', '/dɪˈzaɪn/', '设计'],
      ['anxiously', '/ˈæŋkʃəsli/', '急切地']
    ],
    notes: [
      '将来完成时：will have completed。',
      '"look forward to" 期盼。',
      '"go up" 拔地而起/建造起来。'
    ],
    tags: ['将来完成时', '被动语态'], difficulty: 4,
    summary: '奥运会四年后将在本国举行，政府正在建设新旅馆、体育场、游泳池等设施，全国人民都在热切期盼。',
    summaryEn: 'The Olympic Games will be held in the country in four years. The government is building new hotels, a stadium, and a swimming pool. Everyone is excited and looking forward to the Games.',
  },
  {
    id: 38, title: 'Everything except the weather', titleCn: '唯独没有考虑到天气',
    text: [
      'My old friend, Harrison, had lived in the Mediterranean for many years before he returned to England.',
      'He had often dreamed of retiring in England and had planned to settle down in the country.',
      'He had no sooner returned than he bought a fine house and went to live there.',
      'Almost immediately he began to complain about the weather, for even though it was still summer, it rained continually and it was often bitterly cold.',
      'After so many years of sunshine, Harrison got a shock. He acted as if he had never lived in England before.',
      'In the end, it was more than he could bear. He had hardly had time to settle down when he sold the house and left the country.'
    ],
    textCn: [
      '我的老朋友哈里森在地中海地区住了多年后回到了英国。',
      '他常常梦想着在英国退休，并计划在乡下安顿下来。',
      '他刚回来就买了一栋漂亮的房子住了进去。',
      '他几乎马上就开始抱怨天气，因为即使还是夏天，也一直下雨，而且常常冷得厉害。',
      '在阳光下生活了这么多年，哈里森吃了一惊。他的表现就好像他从未在英国住过一样。',
      '最后，他再也忍受不了了。还没等安顿下来，他就把房子卖了，离开了这个国家。'
    ],
    vocab: [
      ['Mediterranean', '/ˌmedɪtəˈreɪniən/', '地中海'],
      ['retire', '/rɪˈtaɪə/', '退休'],
      ['settle', '/ˈsetl/', '安顿'],
      ['continually', '/kənˈtɪnjuəli/', '不断地'],
      ['bitterly', '/ˈbɪtəli/', '刺骨地'],
      ['sunshine', '/ˈsʌnʃaɪn/', '阳光']
    ],
    notes: [
      '"no sooner...than..." 刚...就...。',
      '"as if" 好像。',
      '"more than he could bear" 超出他的承受能力。'
    ],
    tags: ['过去完成时', '比较'], difficulty: 4,
    summary: '哈里森从地中海回到英国退休，买了漂亮的房子，但英国的阴冷天气让他无法忍受，最终把房子卖了离开了。',
    summaryEn: 'Harrison returned to England after years in the Mediterranean. He bought a fine house but the cold, rainy weather was more than he could bear, so he sold the house and left.',
  },
  {
    id: 39, title: 'Am I all right?', titleCn: '我是否痊愈？',
    text: [
      'While John Gilbert was in hospital, he asked his doctor to tell him whether his operation had been successful, but the doctor refused to do so.',
      'The following day, the patient asked for a bedside telephone.',
      'When he was alone, he telephoned the hospital exchange and asked for Doctor Millington.',
      'When the doctor answered the phone, Mr. Gilbert said he was inquiring about a certain patient, a Mr. John Gilbert.',
      'He asked if Mr. Gilbert\'s operation had been successful and the doctor told him that it had been.',
      'He then asked when Mr. Gilbert would be allowed to go home and the doctor told him that he would have to stay in hospital for another two weeks.',
      'Then Dr. Millington asked the caller if he was a relative of the patient. "No," the patient answered, "I am Mr. John Gilbert."'
    ],
    textCn: [
      '当约翰·吉尔伯特住院时，他问医生他的手术是否成功，但医生拒绝告诉他。',
      '第二天，这位病人要了一部床头电话。',
      '当病房里只有他一个人时，他拨通了医院的总机，要求与米灵顿医生通话。',
      '当医生接听电话时，吉尔伯特先生说他想询问一位病人的情况，一位名叫约翰·吉尔伯特的先生。',
      '他问吉尔伯特先生的手术是否成功，医生告诉他手术很成功。',
      '然后他又问吉尔伯特先生什么时候可以出院，医生告诉他他还需要在医院再待两个星期。',
      '接着米灵顿医生问打电话的人是不是病人的亲属。"不是，"病人回答说，"我就是约翰·吉尔伯特先生。"'
    ],
    vocab: [
      ['hospital', '/ˈhɒspɪtl/', '医院'],
      ['operation', '/ˌɒpəˈreɪʃn/', '手术'],
      ['patient', '/ˈpeɪʃnt/', '病人'],
      ['inquire', '/ɪnˈkwaɪə/', '询问'],
      ['relative', '/ˈrelətɪv/', '亲属'],
      ['exchange', '/ɪksˈtʃeɪndʒ/', '总机']
    ],
    notes: [
      '"ask sb to do" 请某人做某事。',
      '"ask for" 要求/要。',
      '"whether...or not" 是否。'
    ],
    tags: ['间接引语', '宾语从句'], difficulty: 4,
    summary: '约翰·吉尔伯特住院手术后，医生拒绝告知手术结果。他便自己打电话到医院以第三人身份询问，最后揭示他自己就是那个病人。',
    summaryEn: 'John Gilbert called the hospital pretending to be someone else asking about a patient named John Gilbert. The doctor told him the operation was successful and he would stay two more weeks. Then he revealed he was the patient.',
  },
  {
    id: 40, title: 'Food and talk', titleCn: '进餐与交谈',
    text: [
      'I sat in the restaurant for half an hour and waited for the waiter to come to me. But no one came.',
      'At last I called the manager over. "I ordered my meal half an hour ago," I said, "and it has not come yet."',
      'The manager was very sorry. He spoke sharply to the waiter and the waiter hurried to the kitchen.',
      'After a while, the waiter came back with a tray. He put it down on the table in front of me.',
      'I looked at the food on the tray. There was a big piece of fish with a bone in it.',
      'The manager looked at the tray. "You should have told me you didn\'t like fish," he said. "I\'m very sorry. I\'ll bring you some meat instead."'
    ],
    textCn: [
      '我在餐馆里坐了半个小时，等待服务员来招待我。但没有人来。',
      '最后我把经理叫了过来。"我半小时前就点了菜，"我说，"但到现在还没上。"',
      '经理非常抱歉。他严厉地对服务员说了几句，服务员赶紧去了厨房。',
      '过了一会儿，服务员端着一个托盘回来了。他把托盘放在了我面前的桌子上。',
      '我看着托盘上的食物。有一大块鱼，上面还带着一根骨头。',
      '经理看了看托盘。"你应该告诉我你不喜欢鱼，"他说。"非常抱歉。我给你换些肉来。"'
    ],
    vocab: [
      ['restaurant', '/ˈrestrɒnt/', '餐馆'],
      ['order', '/ˈɔːdə/', '点菜'],
      ['sharply', '/ˈʃɑːpli/', '严厉地'],
      ['kitchen', '/ˈkɪtʃɪn/', '厨房'],
      ['tray', '/treɪ/', '托盘'],
      ['bone', '/bəʊn/', '骨头']
    ],
    notes: [
      '"wait for sb to do" 等某人做某事。',
      '"call sb over" 叫某人过来。',
      '"should have told" 本应该告诉（虚拟语气）。'
    ],
    tags: ['情态动词', 'should have done'], difficulty: 3,
    summary: '作者在餐馆等了半小时没人招待，叫来经理后服务员匆忙上菜，结果端来一条带骨大鱼，经理说应该提前说不喜欢鱼。',
    summaryEn: 'The author waited half an hour at a restaurant. The manager apologized and spoke to the waiter, who brought a large piece of fish. The manager said the author should have mentioned he didn\'t like fish.',
  },
  {
    id: 41, title: 'Do you call that a hat?', titleCn: '你把那个叫帽子吗？',
    text: [
      '"Do you call that a hat?" I said to my wife. "You needn\'t be so rude about it," my wife answered as she looked at herself in the mirror.',
      'I sat down on one of those modern chairs with holes in it and waited. We had been in the hat shop for half an hour and my wife was still in front of the mirror.',
      '"We mustn\'t buy things we don\'t need," I remarked suddenly. I regretted saying it almost at once.',
      '"You needn\'t have said that," my wife answered. "I needn\'t remind you of that terrible tie you bought yesterday."',
      '"I find it beautiful," I said. "A man can never have too many ties."',
      '"And a woman can\'t have too many hats," she answered. She went on trying hats and I sank deeper into the chair.'
    ],
    textCn: [
      '"你把那个叫帽子吗？"我对妻子说。"你不必这么无礼，"妻子一边照镜子一边回答。',
      '我在一把满是洞的现代椅子上坐了下来等待着。我们在帽子店里已经待了半个小时，我妻子还在镜子前。',
      '"我们不该买不需要的东西，"我突然说道。我几乎立刻就后悔说了这话。',
      '"你本不必说那句话，"妻子回答说。"我也不必提醒你昨天买的那条糟糕的领带。"',
      '"我觉得它很漂亮，"我说。"男人的领带再多也不嫌多。"',
      '"女人的帽子再多也不嫌多，"她回答。她继续试着帽子，而我深深陷进了椅子里。'
    ],
    vocab: [
      ['rude', '/ruːd/', '无礼的'],
      ['mirror', '/ˈmɪrə/', '镜子'],
      ['remark', '/rɪˈmɑːk/', '评论'],
      ['remind', '/rɪˈmaɪnd/', '提醒'],
      ['terrible', '/ˈterəbl/', '糟糕的'],
      ['sink', '/sɪŋk/', '下沉']
    ],
    notes: [
      '"needn\'t have done" 本不必做（但做了）。',
      '"can never have too many" 再多也不嫌多。',
      '"go on doing" 继续做某事。'
    ],
    tags: ['情态动词', 'needn\'t have done'], difficulty: 3,
    summary: '作者在帽子店里等妻子买帽子，评论说不该买不需要的东西，结果妻子反驳他昨天买的领带也同样不必要。',
    summaryEn: 'The author told his wife she didn\'t need a hat. She reminded him of the terrible tie he bought the day before. Both agreed you can never have too many ties or hats.',
  },
  {
    id: 42, title: 'Not very musical', titleCn: '并非很懂音乐',
    text: [
      'We have an old musical instrument. It is called a clavichord. It was made in Germany in 1681.',
      'I like watching the snake charmer at the market. He has a large basket with a long snake inside.',
      'When the charmer began to play, the snake began to move slowly. It rose out of the basket and began to follow the movements of the pipe.',
      'We were very much surprised when the snake charmer suddenly began to play jazz and modern pop songs.',
      'The snake, however, continued to dance slowly. It could not tell the difference between Indian music and jazz!',
      'After the charmer had played a few notes, the snake suddenly attacked him. It was obviously not very musical.'
    ],
    textCn: [
      '我们有一件古老的乐器。它叫古钢琴。是1681年在德国制造的。',
      '我喜欢在市场上看弄蛇人表演。他有一个大篮子，里面有一条长蛇。',
      '当弄蛇人开始吹奏时，蛇开始慢慢移动。它从篮子里探出身来，随着笛声的节奏摆动。',
      '当弄蛇人突然开始演奏爵士乐和现代流行歌曲时，我们大吃一惊。',
      '然而，蛇继续慢慢地摆动。它分辨不出印度音乐和爵士乐的区别！',
      '弄蛇人吹了几个音符后，蛇突然向他发起了攻击。它显然不太懂音乐。'
    ],
    vocab: [
      ['musical', '/ˈmjuːzɪkl/', '音乐的'],
      ['charmer', '/ˈtʃɑːmə/', '弄蛇人'],
      ['basket', '/ˈbɑːskɪt/', '篮子'],
      ['movement', '/ˈmuːvmənt/', '移动'],
      ['difference', '/ˈdɪfrəns/', '区别'],
      ['attack', '/əˈtæk/', '攻击'],
      ['obviously', '/ˈɒbviəsli/', '显然']
    ],
    notes: [
      '"rise out of" 从...升起。',
      '"tell the difference between" 区分...之间的差别。',
      '"be surprised when" 当...时感到惊讶。'
    ],
    tags: ['一般过去时', '比较'], difficulty: 3,
    summary: '弄蛇人在市场上表演，蛇随着印度音乐起舞。但当他演奏爵士乐时，蛇照样舞动，最后还攻击了他，说明蛇并非很懂音乐。',
    summaryEn: 'A snake charmer played music at the market. The snake danced to Indian music and continued dancing when jazz was played, showing it couldn\'t tell the difference. Then it attacked the charmer.',
  },
  {
    id: 43, title: 'Over the South Pole', titleCn: '飞越南极',
    text: [
      'In 1929, three years after his flight over the North Pole, the American explorer, R.E. Byrd, successfully flew over the South Pole for the first time.',
      'Though, at first, Byrd and his men were able to take a great many photographs of the mountains that lay below, they soon ran into serious trouble.',
      'At one point, it seemed certain that their plane would crash. It could only get over the mountains if it rose to 10,000 feet.',
      'Byrd at once ordered his men to throw out two heavy food sacks. The plane was then able to rise and it cleared the mountains by 200 feet.',
      'Byrd now knew that he would be able to reach the South Pole which was 300 miles away.',
      'The photographs they took showed that there were no mountains at the South Pole. The Pole itself was a flat area of land covered with snow.'
    ],
    textCn: [
      '1929年，即飞越北极三年之后，美国探险家R.E.伯德首次成功飞越了南极。',
      '尽管起初伯德和他的手下能够拍摄下方群山的大量照片，但他们很快就遇到了严重的麻烦。',
      '在某一时刻，飞机似乎肯定要坠毁了。只有升到一万英尺的高度，飞机才能飞过那些山。',
      '伯德立刻命令手下把两个沉重的食物袋扔掉。飞机于是能够升高了，并在200英尺的高度飞过了山脉。',
      '伯德这时知道他能够到达300英里以外的南极了。',
      '他们拍摄的照片表明南极没有山。南极本身是一片被雪覆盖的平坦陆地。'
    ],
    vocab: [
      ['pole', '/pəʊl/', '极'],
      ['explorer', '/ɪkˈsplɔːrə/', '探险家'],
      ['photograph', '/ˈfəʊtəɡrɑːf/', '照片'],
      ['crash', '/kræʃ/', '坠毁'],
      ['clear', '/klɪə/', '越过'],
      ['flat', '/flæt/', '平坦的']
    ],
    notes: [
      '"run into trouble" 遇到麻烦。',
      '"it seemed certain that" 看起来肯定...。',
      '"throw out" 扔掉。'
    ],
    tags: ['过去时态', '条件句'], difficulty: 3,
    summary: '美国探险家伯德在1929年首次飞越南极，途中遇到高山，扔掉食物袋才飞过山峰，最终发现南极是一片平坦的雪地。',
    summaryEn: 'Explorer R.E. Byrd flew over the South Pole in 1929. His plane nearly crashed into mountains but cleared them after throwing out food sacks. They found the South Pole was a flat, snowy area.',
  },
  {
    id: 44, title: 'Through the forest', titleCn: '穿过森林',
    text: [
      'Mrs. Anne Sterling did not think of the risk she was taking when she ran through a forest after two men.',
      'They had rushed up to her while she was having a picnic at the edge of a forest with her children and tried to steal her handbag.',
      'In the struggle, the strap broke and, with the bag in their possession, both men started running through the trees.',
      'Mrs. Sterling got so angry that she ran after them. She was soon out of breath, but she continued to run.',
      'When she caught up to them, she saw that they had sat down and were going through the contents of the bag.',
      'She ran straight at them and the men got such a fright that they dropped the bag and ran away. "The strap needs mending," said Mrs. Sterling afterwards, "but they did not steal anything."'
    ],
    textCn: [
      '安妮·斯特林夫人在穿过森林追赶两个男人时，并没有考虑到所冒的风险。',
      '当她和孩子们在森林边野餐时，那两个人冲到她跟前，企图抢走她的手提包。',
      '在争夺中，手提包的带子断了，两人拿着包开始穿过树林逃跑。',
      '斯特林夫人气得追了过去。她很快就上气不接下气了，但她继续跑着。',
      '当她追上他们时，发现两人已坐下来，正在翻看包里的东西。',
      '她径直朝他们冲去，两人吓了一大跳，扔下包就跑了。"包带需要修一修，"斯特林夫人后来说，"但他们什么也没偷走。"'
    ],
    vocab: [
      ['risk', '/rɪsk/', '风险'],
      ['forest', '/ˈfɒrɪst/', '森林'],
      ['picnic', '/ˈpɪknɪk/', '野餐'],
      ['strap', '/stræp/', '带子'],
      ['possession', '/pəˈzeʃn/', '拥有'],
      ['mend', '/mend/', '修补']
    ],
    notes: [
      '"rush up to" 冲到...跟前。',
      '"out of breath" 上气不接下气。',
      '"run straight at" 径直朝...冲去。'
    ],
    tags: ['一般过去时', '结果状语从句'], difficulty: 3,
    summary: '斯特林夫人在森林边野餐时被两个男人抢了手提包，她不顾危险穿过森林追赶，最终吓跑了小偷，夺回了包。',
    summaryEn: 'Mrs. Sterling chased two men through a forest after they stole her handbag during a picnic. She caught up to them, ran straight at them, and they dropped the bag and ran away.',
  },
  {
    id: 45, title: 'A clear conscience', titleCn: '问心无愧',
    text: [
      'The whole village soon learnt that a large sum of money had been lost. Sam Benton, the local butcher, had lost his wallet while taking his savings to the post office.',
      'Sam was sure that the wallet must have been found by one of the villagers, but it was not returned to him.',
      'Three months passed, and then one morning, Sam found his wallet outside his front door.',
      'It had been wrapped up in newspaper and it had half the money he had lost in it.',
      'Along with the wallet there was a letter which said: "A thief, yes, but only 50 per cent a thief!"',
      'Two months later, some more money was sent to Sam with another note: "Only 25 per cent a thief now." In time, all Sam\'s money was paid back in this way.'
    ],
    textCn: [
      '整个村子很快都知道了一大笔钱丢了。当地的屠户萨姆·本顿在把存款送往邮局的途中丢了钱包。',
      '萨姆确信钱包一定是被某个村民捡到了，但没有人还给他。',
      '三个月过去了，一天早晨，萨姆在他家门前发现了他的钱包。',
      '钱包是用报纸包着的，里面装着他丢失的一半的钱。',
      '随钱包还有一封信，上面写着："一个贼，是的，但只是百分之五十的贼！"',
      '两个月后，更多的钱被送了回来，还附了一张纸条："现在只是百分之二十五的贼了。"最终，萨姆所有的钱都以这种方式还了回来。'
    ],
    vocab: [
      ['conscience', '/ˈkɒnʃəns/', '良心'],
      ['butcher', '/ˈbʊtʃə/', '屠户'],
      ['wallet', '/ˈwɒlɪt/', '钱包'],
      ['savings', '/ˈseɪvɪŋz/', '存款'],
      ['wrap', '/ræp/', '包裹'],
      ['per cent', '/pə sent/', '百分之']
    ],
    notes: [
      '"must have been found" 一定被找到了（推测过去）。',
      '"wrap up in" 用...包起来。',
      '"in time" 最终。'
    ],
    tags: ['被动语态', '过去完成时'], difficulty: 3,
    summary: '屠户萨姆丢了钱包，三个月后钱包被匿名送回了一半的钱，附信自称"百分之五十的贼"，之后其余的钱也陆续被还回。',
    summaryEn: 'Sam the butcher lost his wallet. Three months later, half the money was returned with a note saying "only 50 per cent a thief." More money was returned over time until all was paid back.',
  },
  {
    id: 46, title: 'Expensive and uncomfortable', titleCn: '既昂贵又不舒服',
    text: [
      'When a plane from London arrived at Sydney airport, workers began to unload a number of wooden boxes which contained clothing.',
      'No one could account for the fact that one of the boxes was extremely heavy.',
      'It suddenly occurred to one of the workers to open up the box. He was astonished at what he found.',
      'A man was lying in the box on top of a pile of woolen goods. He was so surprised at being discovered that he did not even try to run away.',
      'After he was arrested, the man admitted hiding in the box before the plane left London.',
      'He had had a long and uncomfortable trip, for he had been confined to the wooden box for over eighteen hours.'
    ],
    textCn: [
      '当一架从伦敦起飞的飞机抵达悉尼机场时，工人们开始卸下一批装着衣服的木箱。',
      '谁也解释不了为什么其中一个箱子特别重。',
      '一个工人突然想到要把箱子打开。他对自己的发现大为吃惊。',
      '一个男人躺在箱子里一堆毛织品的上面。他被发现时非常吃惊，甚至没有试图逃跑。',
      '被逮捕后，那人承认在飞机离开伦敦前就藏在了箱子里。',
      '他经历了一次漫长而又难受的旅程，因为他在木箱里被关了十八个多小时。'
    ],
    vocab: [
      ['unload', '/ˌʌnˈləʊd/', '卸货'],
      ['clothing', '/ˈkləʊðɪŋ/', '衣服'],
      ['account for', '/əˈkaʊnt fɔː/', '解释'],
      ['astonished', '/əˈstɒnɪʃt/', '吃惊的'],
      ['admit', '/ədˈmɪt/', '承认'],
      ['confine', '/kənˈfaɪn/', '关押']
    ],
    notes: [
      '"account for" 解释/说明原因。',
      '"it occurred to sb to do" 某人突然想到做某事。',
      '"on top of" 在...上面。'
    ],
    tags: ['被动语态', '过去完成时'], difficulty: 4,
    summary: '一个男人藏在从伦敦运往悉尼的衣服箱子里，经过十八小时的长途旅行后被工人发现并逮捕。',
    summaryAn: 'A man hid in a wooden box of clothing on a plane from London to Sydney. After an uncomfortable eighteen-hour trip, he was discovered by a worker and arrested.',
  },
  {
    id: 47, title: 'A thirsty ghost', titleCn: '一个口渴的鬼',
    text: [
      'A public house which has recently been purchased by Mr. Ian Thompson is up for sale.',
      'Mr. Thompson is going to sell it because it is haunted. He told me that he could not go to sleep at night.',
      'He said that a ghost had been disturbing him. The ghost always appeared at midnight.',
      'When Mr. Thompson went downstairs, he found that the lights were still on and that the doors had been locked.',
      'He also found that bottles of beer had been emptied. He was certain that a ghost must have been drinking the beer.',
      'The next morning, he found that the furniture had been moved and that the doors were unlocked. A local policeman advised Mr. Thompson to install a CCTV camera.'
    ],
    textCn: [
      '伊恩·汤普森先生最近买下的一家小酒店正在出售。',
      '汤普森先生打算卖掉它，因为它闹鬼。他告诉我他晚上无法入睡。',
      '他说一个鬼一直在打扰他。那个鬼总是在半夜出现。',
      '当汤普森先生下楼时，他发现灯还亮着，门已被锁上了。',
      '他还发现啤酒瓶已经空了。他确信一定有鬼在喝啤酒。',
      '第二天早上，他发现家具被移动过，门也被打开了。一位当地警察建议汤普森先生安装闭路电视摄像机。'
    ],
    vocab: [
      ['ghost', '/ɡəʊst/', '鬼'],
      ['purchase', '/ˈpɜːtʃəs/', '购买'],
      ['haunted', '/ˈhɔːntɪd/', '闹鬼的'],
      ['disturb', '/dɪˈstɜːb/', '打扰'],
      ['midnight', '/ˈmɪdnaɪt/', '午夜'],
      ['install', '/ɪnˈstɔːl/', '安装']
    ],
    notes: [
      '"up for sale" 待售。',
      '"go to sleep" 入睡。',
      '"the lights were on" 灯亮着。'
    ],
    tags: ['被动语态', '间接引语'], difficulty: 3,
    summary: '汤普森先生买下的小酒店闹鬼，每晚半夜出现，啤酒被喝，家具被移动。警察建议安装摄像头。',
    summaryEn: 'Mr. Thompson bought a pub that is haunted. A ghost disturbs him at midnight, drinks the beer, and moves the furniture. A policeman suggested installing a CCTV camera.',
  },
  {
    id: 48, title: 'Did you want to tell me something?', titleCn: '你想对我说什么吗？',
    text: [
      'Dentists always ask questions when it is impossible for you to answer. My dentist had just pulled out one of my teeth and had told me to rest for a while.',
      'I tried to say something, but my mouth was full of cotton wool.',
      'He knew I collected match boxes and asked me whether my collection was growing.',
      'He then asked me how my brother was and whether I liked my new job in London.',
      'In answer to these questions I either nodded or made strange noises.',
      'Meanwhile, my tongue was busy searching out the hole where the tooth had been.',
      'I suddenly felt very worried, but could not say anything. When the dentist at last removed the cotton wool from my mouth, I was able to tell him that he had pulled out the wrong tooth.'
    ],
    textCn: [
      '牙医总是在你无法回答的时候问问题。我的牙医刚给我拔了一颗牙，让我休息一会儿。',
      '我试图说些什么，但嘴里塞满了药棉。',
      '他知道我收集火柴盒，问我收藏是否在增加。',
      '然后他问我哥哥怎么样，以及我是否喜欢在伦敦的新工作。',
      '对这些问题，我要么点头，要么发出奇怪的声音。',
      '与此同时，我的舌头正在忙着寻找拔牙后留下的洞。',
      '我突然非常着急，但什么也说不出来。当牙医终于从我嘴里取出药棉时，我才能告诉他他拔错了一颗牙。'
    ],
    vocab: [
      ['dentist', '/ˈdentɪst/', '牙医'],
      ['cotton', '/ˈkɒtn/', '棉花'],
      ['collect', '/kəˈlekt/', '收集'],
      ['tongue', '/tʌŋ/', '舌头'],
      ['nod', '/nɒd/', '点头'],
      ['remove', '/rɪˈmuːv/', '取出']
    ],
    notes: [
      '"pull out" 拔出。',
      '"search out" 搜寻/找到。',
      '"in answer to" 作为对...的回答。'
    ],
    tags: ['一般过去时', '间接引语'], difficulty: 3,
    summary: '牙医在作者嘴里塞满药棉后不断问问题，作者只能点头或发出怪声。最后发现牙医拔错了牙。',
    summaryEn: 'The dentist asked questions while the author\'s mouth was full of cotton wool. He could only nod or make strange noises. When the cotton wool was removed, he told the dentist he had pulled out the wrong tooth.',
  },
  {
    id: 49, title: 'The end of a dream', titleCn: '美梦告终',
    text: [
      'Tired of sleeping on the floor, a young man in Teheran saved up for years to buy a real bed.',
      'For the first time in his life, he became the proud owner of a bed which had springs and a mattress.',
      'Because the weather was very hot, he carried the bed on to the roof of his house.',
      'He slept very well for the first two nights, but on the third night, a storm blew up.',
      'A gust of wind swept the bed off the roof and sent it crashing into the courtyard below.',
      'The young man did not wake up until the bed had struck the ground. Although the bed was smashed to pieces, the man was miraculously unhurt.',
      'When he woke up, he was still on the mattress. Glancing at the bits of wood and metal that lay around him, the young man picked himself up and carried his mattress back upstairs.'
    ],
    textCn: [
      '德黑兰的一个年轻人睡够了地板，攒了好几年的钱买了一张真正的床。',
      '他有生以来第一次成了一张带有弹簧和床垫的床的骄傲的主人。',
      '因为天气非常热，他把床搬到了屋顶上。',
      '头两天晚上他睡得很好，但第三天晚上起了风暴。',
      '一阵大风把床从屋顶上刮了下来，把它摔碎在下面的院子里。',
      '年轻人直到床撞到地上才醒过来。虽然床摔成了碎片，但那人奇迹般地没有受伤。',
      '醒来时，他还在床垫上。他看了看周围的碎木头和碎金属，爬了起来，扛着床垫回到了楼上。'
    ],
    vocab: [
      ['spring', '/sprɪŋ/', '弹簧'],
      ['mattress', '/ˈmætrɪs/', '床垫'],
      ['roof', '/ruːf/', '屋顶'],
      ['gust', '/ɡʌst/', '一阵风'],
      ['courtyard', '/ˈkɔːtjɑːd/', '院子'],
      ['miraculously', '/mɪˈrækjələsli/', '奇迹般地']
    ],
    notes: [
      '"save up" 攒钱。',
      '"blow up" 刮起来/爆发。',
      '"sweep off" 刮掉。'
    ],
    tags: ['一般过去时', 'not...until'], difficulty: 3,
    summary: '一个年轻人攒钱买了张真床，搬到屋顶睡觉。第三天晚上大风把床刮到院子里摔碎了，但他奇迹般地没有受伤。',
    summaryEn: 'A young man in Teheran saved up to buy a real bed and put it on the roof. A storm blew the bed off the roof. The bed was smashed but the man was miraculously unhurt.',
  },
  {
    id: 50, title: 'Taken for a ride', titleCn: '乘车兜风',
    text: [
      'I love travelling in the country, but I don\'t like losing my way.',
      'I went on an excursion recently, but my trip took me longer than I expected.',
      '"I\'m going to Woodford Green," I said to the conductor as I got on the bus, "but I don\'t know where it is."',
      '"I\'ll tell you where to get off," answered the conductor.',
      'I sat in the front of the bus to get a good view of the countryside. After some time, the bus stopped.',
      'Looking round, I realized with a shock that I was the only passenger left on the bus.',
      '"You\'ll have to get off here," the conductor said. "This is as far as we go." "Is this Woodford Green?" I asked. "Oh dear," said the conductor suddenly. "I forgot to put you off!"'
    ],
    textCn: [
      '我喜欢在乡间旅行，但我不喜欢迷路。',
      '最近我进行了一次远足，但这次旅行花的时间比我预计的要长。',
      '"我要去伍德福德绿地，"我上公共汽车时对售票员说，"但我不知道在哪里下车。"',
      '"我会告诉你在哪里下车的，"售票员回答说。',
      '我坐在公共汽车的前部以便饱览农村风光。过了一些时候，车停了。',
      '我环顾四周，吃惊地发现车上只剩下我一个乘客了。',
      '"你得在这里下车了，"售票员说。"我们的车就到这儿了。""这是伍德福德绿地吗？"我问。"哎呀，"售票员突然说。"我忘了让你下车了！"'
    ],
    vocab: [
      ['excursion', '/ɪkˈskɜːʃn/', '远足'],
      ['conductor', '/kənˈdʌktə/', '售票员'],
      ['view', '/vjuː/', '景色'],
      ['countryside', '/ˈkʌntrisaɪd/', '农村'],
      ['passenger', '/ˈpæsɪndʒə/', '乘客']
    ],
    notes: [
      '"lose one\'s way" 迷路。',
      '"get on/off" 上/下车。',
      '"this is as far as we go" 我们的车就到这儿了。'
    ],
    tags: ['一般过去时', '间接引语'], difficulty: 3,
    summary: '作者坐公共汽车去伍德福德绿地，但一直没人提醒他下车。到了终点站才发现自己是车上唯一的乘客，售票员忘了让他下车。',
    summaryEn: 'The author took a bus to Woodford Green but the conductor forgot to tell him where to get off. He ended up as the only passenger on the bus at the last stop.',
  },
  {
    id: 51, title: 'Reward for virtue', titleCn: '对美德的奖赏',
    text: [
      'My friend, Hugh, has always been fat, but things got so bad recently that he decided to go on a diet.',
      'He began his diet a week ago. First of all, he wrote out a long list of all the foods which were forbidden.',
      'The list included most of the things Hugh loves: butter, potatoes, rice, beer, milk, chocolate; and sweets.',
      'Yesterday I paid him a visit. I rang the bell and was not surprised to see that Hugh was still as fat as ever.',
      'He led me into his room and hurriedly hid a large parcel under his desk.',
      'It was obvious that he was very embarrassed. When I asked him what he was doing, he smiled guiltily and then put the parcel on the desk.',
      'His diet was so strict that he had rewarded himself with a large parcel of chocolates and sweets.'
    ],
    textCn: [
      '我的朋友休一直很胖，但最近情况变得很糟，他决定节食。',
      '他一周前开始节食。首先，他开了一张长长的单子，列出所有禁吃的食物。',
      '单子上列了休喜欢的大多数东西：黄油、土豆、米饭、啤酒、牛奶、巧克力和糖果。',
      '昨天我去看望他。我按了门铃，看到休和以往一样胖，并不吃惊。',
      '他把我领进房间，慌忙把一个大包裹藏到了桌子底下。',
      '显然他很尴尬。当我在问他在干什么时，他内疚地笑了笑，然后把包裹放到了桌上。',
      '他的节食太严格了，以至于他用一大包巧克力和糖果犒赏了自己。'
    ],
    vocab: [
      ['virtue', '/ˈvɜːtʃuː/', '美德'],
      ['diet', '/ˈdaɪət/', '节食'],
      ['forbidden', '/fəˈbɪdn/', '禁止的'],
      ['embarrassed', '/ɪmˈbærəst/', '尴尬的'],
      ['guiltily', '/ˈɡɪltɪli/', '内疚地'],
      ['reward', '/rɪˈwɔːd/', '奖赏']
    ],
    notes: [
      '"go on a diet" 节食。',
      '"first of all" 首先。',
      '"as fat as ever" 和以往一样胖。'
    ],
    tags: ['比较级', '结果状语从句'], difficulty: 3,
    summary: '休决定节食减肥，列了很长的禁食清单。但朋友来看他时，发现他藏了一大包巧克力——他用糖果犒赏了自己。',
    summaryEn: 'Hugh went on a strict diet but rewarded himself with a large parcel of chocolates and sweets. When his friend visited, he was still as fat as ever.',
  },
  {
    id: 52, title: 'A pretty carpet', titleCn: '漂亮的地毯',
    text: [
      'We have just moved into a new house and I have been working hard all morning.',
      'I have been trying to get my new room in order. This has not been easy because I own over a thousand books.',
      'To make matters worse, the room is rather small, so I have temporarily put my books on the floor.',
      'At the moment, they cover every inch of floor space and I actually have to walk on them to get in or out of the room.',
      'My sister helped me to carry one of my old bookcases up the stairs. She went into my room and got a big surprise when she saw all those books on the floor.',
      '"This is the prettiest carpet I have ever seen," she said. She gazed at it for some time and added, "You don\'t need bookcases at all. You can sit here in your spare time and read the carpet!"'
    ],
    textCn: [
      '我们刚搬进新房子，我整个上午都在忙碌。',
      '我一直在试图把新房间收拾整齐。这并不容易，因为我有一千多本书。',
      '更糟的是，房间相当小，所以我暂时把书放在了地板上。',
      '此刻，书铺满了地板的每一寸空间，我实际上要踩着书才能进出房间。',
      '我姐姐帮我把一个旧书架抬上了楼。她走进我的房间，看到地上那些书时大吃一惊。',
      '"这是我见过的最漂亮的地毯，"她说。她凝视了一会儿，又说："你根本不需要书架。你有空时可以坐在这里读地毯！"'
    ],
    vocab: [
      ['carpet', '/ˈkɑːpɪt/', '地毯'],
      ['order', '/ˈɔːdə/', '秩序'],
      ['temporarily', '/ˈtemprərəli/', '暂时地'],
      ['inch', '/ɪntʃ/', '英寸'],
      ['bookcase', '/ˈbʊkkeɪs/', '书架'],
      ['gaze', '/ɡeɪz/', '凝视']
    ],
    notes: [
      '"get...in order" 把...整理好。',
      '"to make matters worse" 更糟的是。',
      '"every inch of" 每一寸。'
    ],
    tags: ['现在完成时', '最高级'], difficulty: 3,
    summary: '作者搬新家后一千多本书堆满了地板，姐姐帮忙搬书架时看到满地的书，幽默地说这是最漂亮的地毯。',
    summaryEn: 'The author moved to a new house and piled over a thousand books on the floor. His sister called it the prettiest carpet she had ever seen and suggested he could read the carpet.',
  },
  {
    id: 53, title: 'Hot snake', titleCn: '触电的蛇',
    text: [
      'At last firemen have put out a big forest fire in California. Since then, they have been trying to find out how the fire began.',
      'Forest fires are often caused by broken glass or by cigarette ends which people carelessly throw away.',
      'Yesterday the firemen examined the ground carefully, but were not able to find any broken glass.',
      'They were also quite sure that a cigarette end did not start the fire.',
      'This morning, however, a fireman accidentally discovered the cause. He noticed the remains of a snake which was wound round the electric wires of a 16,000-volt power line.',
      'In this way, he was able to solve the mystery. The explanation was simple but very unusual. A bird had picked up the snake from the ground and then dropped it on to the wires.',
      'The snake then wound itself round the wires. When it did so, it sent sparks down to the ground and these immediately started a fire.'
    ],
    textCn: [
      '消防队员们终于扑灭了加利福尼亚的一场森林大火。从那时起，他们一直在寻找起火的原因。',
      '森林火灾常常是由碎玻璃或人们随手扔掉的香烟头引起的。',
      '昨天消防队员仔细检查了地面，但没有发现任何碎玻璃。',
      '他们也十分肯定不是香烟头引起的火灾。',
      '然而今天早上，一个消防队员偶然发现了原因。他注意到一条蛇的残骸缠绕在一万六千伏高压线上。',
      '这样，他解开了这个谜。解释很简单，但很不寻常。一只鸟从地上抓起了那条蛇，然后把它扔到了电线上。',
      '蛇于是缠绕在电线上。当它这样做时，把火花送到了地面，这些火花立刻引起了一场大火。'
    ],
    vocab: [
      ['fireman', '/ˈfaɪəmən/', '消防员'],
      ['cause', '/kɔːz/', '原因'],
      ['examine', '/ɪɡˈzæmɪn/', '检查'],
      ['accidentally', '/ˌæksɪˈdentəli/', '偶然地'],
      ['remains', '/rɪˈmeɪnz/', '残骸'],
      ['spark', '/spɑːk/', '火花'],
      ['mystery', '/ˈmɪstəri/', '谜']
    ],
    notes: [
      '"put out" 扑灭。',
      '"wind round" 缠绕在...上。',
      '"find out" 查明/弄清楚。'
    ],
    tags: ['现在完成时', '被动语态'], difficulty: 3,
    summary: '加利福尼亚森林大火的起因是一只鸟把一条蛇扔到了高压线上，蛇缠绕电线产生火花引发了火灾。',
    summaryEn: 'A forest fire in California was caused when a bird dropped a snake onto electric wires. The snake wound round the wires, sent sparks to the ground, and started the fire.',
  },
  {
    id: 54, title: 'Sticky fingers', titleCn: '粘糊的手指',
    text: [
      'After breakfast, I sent the children to school and then went to the shops. It was still early when I returned home.',
      'The children were at school, my husband was at work and the house was quiet.',
      'So I decided to make some meat pies. In a short time I was busy mixing butter and flour and my hands were soon covered with sticky pastry.',
      'At exactly that moment, the telephone rang. Nothing could have been more annoying.',
      'I picked up the receiver between two sticky fingers and was dismayed when I recognized the voice of Mrs. Bates.',
      'It took me ten minutes to persuade her to ring back later. At last I hung up the receiver.',
      'What a mess! There was pastry on my fingers, on the telephone, and on the doorknobs. I had no sooner got back to the kitchen than the doorbell rang loud enough to wake the dead.'
    ],
    textCn: [
      '早饭后，我送孩子们上学，然后去了商店。我回到家时时间还早。',
      '孩子们在学校，丈夫在上班，房子里很安静。',
      '于是我决定做一些肉馅饼。很快我就忙着搅拌黄油和面粉，手上很快就粘满了粘糊糊的面糊。',
      '就在那一刻，电话响了。没有什么比这更让人恼火的了。',
      '我用两个粘糊糊的手指夹起听筒，当听出是贝茨夫人的声音时，我很沮丧。',
      '我花了十分钟才说服她过会儿再打来。终于我挂上了听筒。',
      '真是一团糟！我的手指上、电话上、门把手上都是面糊。我刚回到厨房，门铃就响了起来，声音大得足以把死人吵醒。'
    ],
    vocab: [
      ['sticky', '/ˈstɪki/', '粘的'],
      ['pastry', '/ˈpeɪstri/', '面糊'],
      ['receiver', '/rɪˈsiːvə/', '听筒'],
      ['dismay', '/dɪsˈmeɪ/', '沮丧'],
      ['persuade', '/pəˈsweɪd/', '说服'],
      ['doorknob', '/ˈdɔːnɒb/', '门把手']
    ],
    notes: [
      '"be busy doing" 忙于做某事。',
      '"be covered with" 被...覆盖。',
      '"no sooner...than..." 刚...就...。'
    ],
    tags: ['过去完成时', '比较级'], difficulty: 3,
    summary: '作者做肉馅饼时手上粘满了面糊，这时电话响了，好不容易挂掉电话后门铃又响了，到处都是面糊。',
    summaryEn: 'The author was making meat pies with sticky pastry on her hands when the telephone rang. After a long call, she found pastry everywhere, and then the doorbell rang.',
  },
  {
    id: 55, title: 'Not a gold mine', titleCn: '并非金矿',
    text: [
      'Dreams of finding lost treasure almost came true recently. A new machine called "The Revealer" has been invented and it has been used to detect gold which has been buried in the ground.',
      'The machine was used in a cave near the seashore where it is said pirates used to hide gold.',
      'The pirates would often bury gold in the cave and then fail to collect it. Armed with the new machine, a search party went into the cave hoping to find buried treasure.',
      'The leader of the party was examining the soil near the entrance to the cave when the machine showed that there was gold under the ground.',
      'Very excited, the party dug a hole two feet deep. They finally found a small gold coin which was almost worthless.',
      'The party then searched the whole cave thoroughly but did not find anything except an empty tin trunk.'
    ],
    textCn: [
      '最近，找到失落宝藏的梦想差点成真。一种叫"探宝器"的新机器已被发明出来，用来探测埋在地下的黄金。',
      '这台机器被用在海边一个据说是海盗过去藏金子的山洞里。',
      '海盗们常常把金子埋在山洞里，但后来没能取走。一个探测队带着新机器进了山洞，希望能找到埋藏的财宝。',
      '领队正在检查洞口附近的泥土时，机器显示地下有金子。',
      '探测队非常兴奋，挖了一个两英尺深的洞。他们最终找到了一枚几乎毫无价值的小金币。',
      '探测队随后彻底搜索了整个山洞，但除了一个空铁皮箱外什么也没找到。'
    ],
    vocab: [
      ['treasure', '/ˈtreʒə/', '财宝'],
      ['revealer', '/rɪˈviːlə/', '探测器'],
      ['detect', '/dɪˈtekt/', '探测'],
      ['pirate', '/ˈpaɪrət/', '海盗'],
      ['worthless', '/ˈwɜːθlɪs/', '毫无价值的'],
      ['thoroughly', '/ˈθʌrəli/', '彻底地']
    ],
    notes: [
      '"come true" 成真。',
      '"fail to do" 未能做某事。',
      '"armed with" 装备着。'
    ],
    tags: ['被动语态', '现在完成时'], difficulty: 3,
    summary: '探测队用新发明的"探宝器"在海盗藏金子的山洞里寻找宝藏，结果只找到一枚几乎不值钱的小金币和一个空箱子。',
    summaryEn: 'A search party used a new machine called "The Revealer" to detect gold in a pirate cave. They only found a small gold coin that was almost worthless and an empty tin trunk.',
  },
  {
    id: 56, title: 'Faster than sound!', titleCn: '比声音还快！',
    text: [
      'Cars that go faster than sound were once the subject of science fiction stories. But now, a real car has been built which can travel at over 500 miles per hour.',
      'It was built by a British company. The car is called the Bluebird and it was driven by a man called Donald Campbell.',
      'Campbell had already set up a world record in 1963. He had driven the car at a speed of over 400 miles per hour.',
      'In 1964, he tried to break his own record. On the day of the attempt, Campbell got into the car and drove it along the track.',
      'The car reached a speed of over 400 miles per hour. Suddenly, the car went out of control and crashed.',
      'Campbell was badly injured but he survived. The car was completely destroyed. Nobody knows for certain what caused the accident.'
    ],
    textCn: [
      '比声音还快的汽车曾经只是科幻小说中的题材。但现在，一辆时速超过500英里的真正的汽车已经造出来了。',
      '它是由一家英国公司制造的。这辆车叫"蓝鸟"，由一个叫唐纳德·坎贝尔的人驾驶。',
      '坎贝尔已经在1963年创造了一项世界纪录。他曾以每小时超过400英里的速度驾驶这辆车。',
      '1964年，他试图打破自己的纪录。在尝试的那天，坎贝尔坐进了车里，沿着赛道驾驶。',
      '汽车达到了每小时400多英里的速度。突然，汽车失控坠毁了。',
      '坎贝尔受了重伤，但他活了下来。汽车完全报废了。没有人确切知道事故的原因。'
    ],
    vocab: [
      ['fiction', '/ˈfɪkʃn/', '小说'],
      ['record', '/ˈrekɔːd/', '纪录'],
      ['speed', '/spiːd/', '速度'],
      ['track', '/træk/', '赛道'],
      ['injured', '/ˈɪndʒəd/', '受伤的'],
      ['survive', '/səˈvaɪv/', '幸存'],
      ['accident', '/ˈæksɪdənt/', '事故']
    ],
    notes: [
      '"set up a record" 创造纪录。',
      '"go out of control" 失控。',
      '"for certain" 确切地。'
    ],
    tags: ['过去完成时', '比较级'], difficulty: 3,
    summary: '唐纳德·坎贝尔驾驶"蓝鸟"赛车试图打破自己的速度纪录，汽车达到400多英里时速后失控坠毁，他受重伤但幸存。',
    summaryEn: 'Donald Campbell drove the Bluebird car to break his speed record. The car reached over 400 mph before going out of control and crashing. Campbell was badly injured but survived.',
  },
  {
    id: 57, title: 'Can I help you, madam?', titleCn: '您要买什么，夫人？',
    text: [
      'A woman in blue jeans stood at the window of an expensive shop. Though she hesitated for a moment, she finally went in and asked to see a dress that was in the window.',
      'The assistant who served her did not like the way she was dressed. Glancing at her scornfully, he told her that the dress was sold.',
      'The woman walked out of the shop angrily and decided to punish the assistant the next day.',
      'She returned to the shop the following morning dressed in a fur coat, with a handbag in one hand and a long umbrella in the other.',
      'After seeking out the rude assistant, she asked for the same dress. Not realizing who she was, the assistant was eager to serve her this time.',
      'With great difficulty, he climbed into the shop window to get the dress. As soon as she saw it, the woman said she did not like it. She enjoyed herself making the assistant bring almost everything in the window before finally buying the dress she had first asked for.'
    ],
    textCn: [
      '一个穿着蓝色牛仔裤的妇女站在一家高档商店的橱窗前。尽管她犹豫了片刻，但终于走进了商店，要求看看橱窗里的一件连衣裙。',
      '接待她的售货员不喜欢她的穿着。他轻蔑地看了她一眼，告诉她那件裙子已经卖出去了。',
      '那个妇女气愤地走出了商店，决定第二天教训一下那个售货员。',
      '第二天上午她又来到这家商店，穿着一件裘皮大衣，一只手拎着手提包，另一只手拿着一把长柄伞。',
      '她找到了那个无礼的售货员，要求看同一件裙子。售货员没有认出她是谁，这次非常殷勤。',
      '他费了好大劲才爬进橱窗去取那件裙子。那个妇女一看到裙子就说不喜欢。她开心地让售货员几乎把橱窗里的东西都拿了出来，最后才买了她最初要求看的那件。'
    ],
    vocab: [
      ['jeans', '/dʒiːnz/', '牛仔裤'],
      ['hesitate', '/ˈhezɪteɪt/', '犹豫'],
      ['scornfully', '/ˈskɔːnfəli/', '轻蔑地'],
      ['punish', '/ˈpʌnɪʃ/', '惩罚'],
      ['fur', '/fɜː/', '皮毛'],
      ['eager', '/ˈiːɡə/', '热切的']
    ],
    notes: [
      '"ask to do" 要求做某事。',
      '"seek out" 找出。',
      '"enjoy oneself" 过得愉快。'
    ],
    tags: ['一般过去时', '分词短语'], difficulty: 3,
    summary: '一个穿牛仔裤的妇女在高档商店被售货员轻视，第二天穿着裘皮大衣回来教训了那个售货员，让他费劲地从橱窗里拿了几乎所有东西。',
    summaryEn: 'A woman in jeans was treated scornfully in an expensive shop. She returned the next day in a fur coat and made the assistant bring almost everything from the window before buying the original dress.',
  },
  {
    id: 58, title: 'A blessing in disguise?', titleCn: '是因祸得福吗？',
    text: [
      'The tiny village of Frinley is said to possess a "cursed tree". Because the tree was mentioned in a newspaper, the number of visitors to Frinley has now increased.',
      'The tree was planted near the church fifty years ago, but it is only in recent years that it has gained an evil reputation.',
      'It is said that if anyone touches the tree, he will have bad luck; if he picks a leaf from the tree, he will die.',
      'Many villagers believe that the tree has already claimed a number of victims. Though the tree has been the subject of so many stories, it is still growing.',
      'In fact, it has grown so much that the tree is now threatening to destroy the church. The vicar has been asked to have the tree cut down, but so far he has refused.',
      'He has pointed out that the tree is a useful source of income, since tourists have been coming from all parts of the country to see it.'
    ],
    textCn: [
      '据说弗林利小村庄拥有一棵"被诅咒的树"。因为报纸提到了这棵树，到弗林利的游客人数现在已经增加了。',
      '这棵树是五十年前种在教堂附近的，但只是在最近几年才获得了邪恶的名声。',
      '据说，如果有人碰了这棵树，他就会倒霉；如果他摘了一片树叶，他就会死。',
      '许多村民相信这棵树已经害了不少人。尽管这棵树已经成为这么多故事的主题，它仍在生长。',
      '事实上，它长得如此之大，以至于现在威胁着要毁掉教堂。牧师已被要求把这棵树砍掉，但到目前为止他拒绝了。',
      '他指出这棵树是一个有用的收入来源，因为游客们从全国各地来看这棵树。'
    ],
    vocab: [
      ['blessing', '/ˈblesɪŋ/', '福气'],
      ['disguise', '/dɪsˈɡaɪz/', '伪装'],
      ['cursed', '/ˈkɜːsɪd/', '被诅咒的'],
      ['reputation', '/ˌrepjuˈteɪʃn/', '名声'],
      ['victim', '/ˈvɪktɪm/', '受害者'],
      ['vicar', '/ˈvɪkə/', '牧师']
    ],
    notes: [
      '"be said to" 据说。',
      '"it is...that" 强调句型。',
      '"have sth done" 让别人做某事。'
    ],
    tags: ['被动语态', '强调句'], difficulty: 4,
    summary: '弗林利村庄有一棵据说被诅咒的树，虽然有人因碰它而倒霉，但牧师拒绝砍掉它，因为游客给村庄带来了收入。',
    summaryEn: 'A village has a "cursed tree" that supposedly brings bad luck. Despite stories, the vicar refuses to cut it down because tourists come to see it, providing income for the village.',
  },
  {
    id: 59, title: 'In or out?', titleCn: '进来还是出去？',
    text: [
      'Our dog, Rex, used to sit outside our front gate and bark. Every time he wanted to come into the garden he would bark until someone opened the gate.',
      'As the neighbours complained of the noise, my husband spent weeks training him to press his paw on the latch to let himself in.',
      'Rex soon became an expert at opening the gate. However, when I was going out shopping last week, I noticed him in the garden near the gate.',
      'This time he was barking so that someone would let him out! Since then, he has developed another bad habit.',
      'As soon as he opens the gate from the outside, he comes into the garden and waits until the gate shuts.',
      'Then he sits and barks until someone lets him out. After this he immediately lets himself in again. He no longer barks to get in. Instead, he barks to get out.'
    ],
    textCn: [
      '我们的狗雷克斯过去常常坐在前门外叫。每次他想进花园时都会叫，直到有人开门。',
      '因为邻居们抱怨噪音，我丈夫花了几周时间训练他用爪子按门闩自己进来。',
      '雷克斯很快就成了开门的专家。然而，上周我出去购物时，发现他在花园靠近门的地方。',
      '这次他在叫着让人放他出去！从那以后，他又养成了一个坏习惯。',
      '他从外面把门打开后，就进入花园，然后等着门关上。',
      '接着他就坐着叫，直到有人放他出去。之后他又立刻自己进来。他不再叫着要进来，而是叫着要出去。'
    ],
    vocab: [
      ['bark', '/bɑːk/', '吠叫'],
      ['latch', '/lætʃ/', '门闩'],
      ['paw', '/pɔː/', '爪子'],
      ['complain', '/kəmˈpleɪn/', '抱怨'],
      ['habit', '/ˈhæbɪt/', '习惯'],
      ['expert', '/ˈekspɜːt/', '专家']
    ],
    notes: [
      '"used to do" 过去常常做。',
      '"complain of" 抱怨。',
      '"no longer" 不再。'
    ],
    tags: ['used to', '一般过去时'], difficulty: 3,
    summary: '狗雷克斯学会了用爪子开门进来，但后来养成了开了门进来后又叫着要出去的坏习惯。',
    summaryEn: 'Rex the dog learned to open the gate with his paw. Then he developed a habit of opening the gate to come in, waiting for it to shut, and then barking to be let out.',
  },
  {
    id: 60, title: 'The future', titleCn: '未来',
    text: [
      'At a village fair, I decided to visit a fortune-teller called Madam Bellinsky.',
      'I went into her tent and she told me to sit down. After I had given her some money, she looked into a crystal ball.',
      '"In the future, I see a woman crying," she said. "She is holding a baby. You will be given a present."',
      'I asked her what the present would be. "You will be given a very nice present," she said, "and it will make you very happy."',
      '"What is it?" I asked. "A baby," she said. "I don\'t want a baby," I said.',
      '"You will get one," she said. She then looked into the crystal ball again and said, "The woman is still crying. She is not crying for the baby. She is crying for you!"',
      'I was very worried. "Why is she crying for me?" I asked. "Because you are going to have triplets!" she said.'
    ],
    textCn: [
      '在一个乡村集市上，我决定去拜访一位名叫贝林斯基夫人的算命师。',
      '我走进她的帐篷，她让我坐下。我给了她一些钱后，她看着水晶球。',
      '"未来，我看到一个女人在哭，"她说。"她抱着一个婴儿。你会得到一件礼物。"',
      '我问她是什么礼物。"你会得到一件非常好的礼物，"她说，"它会让你非常高兴。"',
      '"是什么？"我问。"一个婴儿，"她说。"我不想要婴儿，"我说。',
      '"你会得到一个的，"她说。然后她又看了看水晶球说："那个女人还在哭。她不是为婴儿哭。她是为你哭！"',
      '我很担心。"她为什么为我哭？"我问。"因为你将生三胞胎！"她说。'
    ],
    vocab: [
      ['fair', '/feə/', '集市'],
      ['fortune-teller', '/ˈfɔːtʃən telə/', '算命师'],
      ['crystal', '/ˈkrɪstl/', '水晶'],
      ['present', '/ˈpreznt/', '礼物'],
      ['triplet', '/ˈtrɪplɪt/', '三胞胎']
    ],
    notes: [
      '"look into" 看/注视。',
      '"be going to" 将要/打算。',
      '"cry for" 为...而哭。'
    ],
    tags: ['一般将来时', '间接引语'], difficulty: 3,
    summary: '作者去算命，算命师说他会得到一个礼物——一个婴儿。他说不想要，算命师说那个女人在为他哭，因为他将生三胞胎。',
    summaryEn: 'The author visited a fortune-teller who predicted he would receive a present. When he said he didn\'t want a baby, she said a woman was crying for him because he was going to have triplets.',
  },
  {
    id: 61, title: 'Trouble with the Hubble', titleCn: '哈勃望远镜的困难',
    text: [
      'The Hubble telescope was launched into space by NASA on April 20, 1990 at a cost of over a billion dollars.',
      'Right from the start there was trouble with the Hubble. The pictures it sent us were very disappointing because its main mirror was faulty.',
      'NASA is now going to put the telescope right, so it will soon be sending us the clearest pictures of the stars and distant galaxies that we have ever seen.',
      'The Hubble is above the Earth\'s atmosphere, so it will be able to show us distant stars and galaxies much more clearly.',
      'It will be able to observe the stars without the interference of the Earth\'s atmosphere.',
      'The Hubble will tell us a great deal about the age and size of the universe. By the time you read this, the Hubble\'s eagle eye will have sent us thousands and thousands of wonderful pictures.'
    ],
    textCn: [
      '哈勃望远镜于1990年4月20日由美国国家航空航天局发射升空，耗资十多亿美元。',
      '从一开始哈勃望远镜就有问题。它发给我们的图片令人失望，因为它的主镜有缺陷。',
      '美国国家航空航天局现在准备纠正这个错误，所以望远镜很快就会给我们送来我们所见过的最清晰的星星和遥远星系的照片。',
      '哈勃望远镜位于地球大气层之上，所以它将能更清楚地向我们展示遥远的星星和星系。',
      '它将能够在不受地球大气层干扰的情况下观察星星。',
      '哈勃将告诉我们关于宇宙年龄和大小的大量信息。等你读到这篇文章时，哈勃的鹰眼已经给我们送来了成千上万张精彩的图片。'
    ],
    vocab: [
      ['telescope', '/ˈtelɪskəʊp/', '望远镜'],
      ['launch', '/lɔːntʃ/', '发射'],
      ['disappointing', '/ˌdɪsəˈpɔɪntɪŋ/', '令人失望的'],
      ['faulty', '/ˈfɔːlti/', '有缺陷的'],
      ['atmosphere', '/ˈætməsfɪə/', '大气层'],
      ['galaxy', '/ˈɡæləksi/', '星系'],
      ['universe', '/ˈjuːnɪvɜːs/', '宇宙']
    ],
    notes: [
      '"right from the start" 从一开始。',
      '"put sth right" 纠正某事。',
      '"a great deal of" 大量的。'
    ],
    tags: ['将来进行时', '被动语态'], difficulty: 4,
    summary: '哈勃望远镜因主镜缺陷导致拍摄效果不佳，美国宇航局正在修复它，修复后将能拍摄到最清晰的太空图片。',
    summaryEn: 'The Hubble telescope had a faulty main mirror and sent disappointing pictures. NASA is fixing it so it will soon send the clearest pictures of stars and galaxies ever seen.',
  },
  {
    id: 62, title: 'After the fire', titleCn: '火灾之后',
    text: [
      'Firemen had been fighting the forest fire for nearly three weeks before they could get it under control.',
      'A short time before, great trees had covered the countryside for miles around. Now, smoke still rose up from the warm ground over the desolate hills.',
      'Winter was coming on and the hills threatened the surrounding villages with destruction, for heavy rain would not only wash away the soil but would cause serious floods as well.',
      'When the fire had at last been put out, the forest authorities ordered several tons of a special type of grass-seed which would grow quickly.',
      'The seed was sprayed over the ground in huge quantities by aeroplanes. The planes had been planting seed for nearly a month when it began to rain.',
      'By then, however, in many places the grass had already taken root. In place of the great trees which had been growing there for centuries, patches of green had begun to appear in the blackened soil.'
    ],
    textCn: [
      '消防队员与森林大火搏斗了将近三个星期才把火势控制住。',
      '不久前，大片树木还覆盖着方圆数英里的乡村。现在，温暖的地面上仍然冒着烟，在荒凉的山丘上缭绕。',
      '冬天即将来临，这些山丘威胁着周围的村庄，因为大雨不仅会冲走土壤，还会引起严重的洪灾。',
      '大火终于被扑灭后，森林管理部门订购了数吨一种能快速生长的特殊草籽。',
      '飞机把大量草籽撒在了地面上。飞机播种了将近一个月后才开始下雨。',
      '然而到那时，许多地方的草已经生了根。在几个世纪以来一直生长着大树的地方，烧焦的土地上开始出现了一片片绿色。'
    ],
    vocab: [
      ['fireman', '/ˈfaɪəmən/', '消防员'],
      ['destruction', '/dɪˈstrʌkʃn/', '毁灭'],
      ['flood', '/flʌd/', '洪水'],
      ['authority', '/ɔːˈθɒrəti/', '管理部门'],
      ['spray', '/spreɪ/', '喷洒'],
      ['patch', '/pætʃ/', '一小片']
    ],
    notes: [
      '"get under control" 控制住。',
      '"come on" 来临。',
      '"take root" 生根。'
    ],
    tags: ['过去完成时', '被动语态'], difficulty: 4,
    summary: '森林大火被扑灭后，为防止水土流失和洪灾，当局用飞机大量播撒草籽。一个月后雨水降临时，草已经在很多地方生根了。',
    summaryEn: 'After a forest fire was put out, authorities sprayed grass-seed from planes. By the time it rained a month later, the grass had already taken root in many places.',
  },
  {
    id: 63, title: 'She was not amused', titleCn: '她并不觉得好笑',
    text: [
      'Jeremy Hampden has a large circle of friends and is very popular at parties. Everybody admires him for his great sense of humour.',
      'Jeremy\'s sister, Jenny, is the opposite. She is shy and rarely goes out. She has never been the sort of person to make speeches.',
      'Recently, one of Jeremy\'s closest friends asked him to make a speech at a wedding reception. This is the sort of thing that Jeremy loves.',
      'He prepared the speech carefully and went to the wedding with Jenny. He had included a large number of funny stories in the speech and, of course, it was a great success.',
      'As soon as he had finished, Jenny told him she wanted to go home. Jeremy was a little disappointed but he did as his sister asked.',
      'On the way home, he asked Jenny if she had enjoyed the speech. To his surprise, she said she hadn\'t. Jeremy asked her why. "Because I hate all those people who laughed at your stories," she said.'
    ],
    textCn: [
      '杰里米·汉普登交际很广，在各种聚会上很受欢迎。大家都很欣赏他的幽默感。',
      '杰里米的妹妹珍妮则恰恰相反。她很害羞，很少出门。她从来不是那种爱发表讲话的人。',
      '最近，杰里米的一个最亲密的朋友请他在一个婚礼上讲话。这正是杰里米喜欢做的事。',
      '他认真准备了讲话稿，和珍妮一起去参加婚礼。他在讲话中加了大量有趣的故事，当然，讲话非常成功。',
      '他一讲完，珍妮就告诉他她想回家。杰里米有点失望，但他还是照妹妹的要求做了。',
      '在回家的路上，他问珍妮是否喜欢他的讲话。令他吃惊的是，她说不喜欢。杰里米问她为什么。"因为我讨厌所有那些笑你故事的人，"她说。'
    ],
    vocab: [
      ['admire', '/ədˈmaɪə/', '钦佩'],
      ['humour', '/ˈhjuːmə/', '幽默'],
      ['opposite', '/ˈɒpəzɪt/', '相反的'],
      ['wedding', '/ˈwedɪŋ/', '婚礼'],
      ['reception', '/rɪˈsepʃn/', '招待会'],
      ['disappointed', '/ˌdɪsəˈpɔɪntɪd/', '失望的']
    ],
    notes: [
      '"a large circle of friends" 交际很广。',
      '"admire sb for" 因...而钦佩某人。',
      '"make a speech" 发表演讲。'
    ],
    tags: ['间接引语', '现在完成时'], difficulty: 3,
    summary: '杰里米在婚礼上的演讲非常成功，所有人都被逗笑了。但妹妹珍妮却不喜欢，因为她讨厌那些嘲笑他故事的人。',
    summaryEn: 'Jeremy gave a funny speech at a wedding that was a great success. But his shy sister Jenny said she didn\'t enjoy it because she hated all the people who laughed at his stories.',
  },
  {
    id: 64, title: 'The Channel Tunnel', titleCn: '海峡隧道',
    text: [
      'In 1858, a French engineer, Aimé Thomé de Gamond, arrived in England with a plan for a twenty-one-mile tunnel under the English Channel.',
      'He said that it would be possible to build a platform in the centre of the Channel. This platform would serve as a port and a railway station.',
      'The tunnel would be well-ventilated if tall chimneys were built above sea level.',
      'In 1860, a better plan was put forward by an Englishman, William Low. He suggested that a double railway-tunnel should be built.',
      'This would solve the problem of ventilation, for if a train entered this tunnel, it would draw in fresh air behind it.',
      'Forty-two years later a tunnel was actually begun. It would be the longest tunnel in the world, running for thirty-seven miles under the sea.'
    ],
    textCn: [
      '1858年，一位名叫埃梅·托梅·德·加蒙的法国工程师带着一项在英吉利海峡下面修建一条21英里长的隧道的计划来到了英国。',
      '他说有可能在海峡中央建造一个平台。这个平台将用作港口和火车站。',
      '如果在海平面以上建造高大的烟囱，隧道就会通风良好。',
      '1860年，一个名叫威廉·洛的英国人提出了一个更好的方案。他建议修建一条双轨隧道。',
      '这将解决通风问题，因为如果一列火车开进隧道，它会把新鲜空气从后面拉进去。',
      '42年后，隧道真的开始修建了。它将是世界上最长的隧道，在海底延伸37英里。'
    ],
    vocab: [
      ['tunnel', '/ˈtʌnl/', '隧道'],
      ['platform', '/ˈplætfɔːm/', '平台'],
      ['ventilate', '/ˈventɪleɪt/', '通风'],
      ['chimney', '/ˈtʃɪmni/', '烟囱'],
      ['suggest', '/səˈdʒest/', '建议'],
      ['double', '/ˈdʌbl/', '双的']
    ],
    notes: [
      '"put forward" 提出（建议）。',
      '"serve as" 用作。',
      '"draw in" 吸入。'
    ],
    tags: ['被动语态', '虚拟语气'], difficulty: 4,
    summary: '1858年法国工程师提出修建海峡隧道的计划，1860年英国人提出了更好的双轨隧道方案，42年后隧道终于开始修建。',
    summaryEn: 'In 1858 a French engineer proposed a tunnel under the English Channel. In 1860 an Englishman suggested a double railway-tunnel for ventilation. Forty-two years later, construction actually began.',
  },
  {
    id: 65, title: 'Jumbo versus the police', titleCn: '小象对警察',
    text: [
      'Last Christmas, the circus owner, Jimmy Gates, decided to take some presents to a children\'s hospital.',
      'Dressed up as Father Christmas and accompanied by a "guard of honour" of six pretty girls, he set off down the main street of the city riding a baby elephant called Jumbo.',
      'He should have known that the police would never allow this sort of thing. A policeman approached Jimmy and told him he ought to have gone along a side street as Jumbo was holding up the traffic.',
      'Though Jimmy agreed to go at once, Jumbo refused to move. Fifteen policemen had to push very hard to get him off the main street.',
      'The police had a difficult time, but they were most amused. "Jumbo must weigh a few tons," said a policeman afterwards, "so it was fortunate that we didn\'t have to carry him."',
      'Of course, we should arrest him, but as he has a good record, we shall let him off this time."'
    ],
    textCn: [
      '去年圣诞节，马戏团老板吉米·盖茨决定给一家儿童医院送些礼物。',
      '他打扮成圣诞老人，在六名漂亮女孩组成的"仪仗队"陪同下，骑着一头名叫江波的小象出发了，沿着城里的大街走去。',
      '他本该知道警察是不会允许这种事情的。一个警察走过来告诉吉米，他应该走小路，因为江波阻碍了交通。',
      '尽管吉米同意马上走，但江波拒绝移动。十五个警察不得不费好大劲才把它推离大街。',
      '警察费了好大劲，但他们觉得很好玩。"江波一定有好几吨重，"一个警察后来说，"幸亏我们不必抬它。"',
      '当然，我们本应该逮捕它，但因为它表现良好，这次我们就放过它了。"'
    ],
    vocab: [
      ['circus', '/ˈsɜːkəs/', '马戏团'],
      ['elephant', '/ˈelɪfənt/', '大象'],
      ['approach', '/əˈprəʊtʃ/', '走近'],
      ['traffic', '/ˈtræfɪk/', '交通'],
      ['fortunate', '/ˈfɔːtʃənət/', '幸运的'],
      ['arrest', '/əˈrest/', '逮捕']
    ],
    notes: [
      '"dress up as" 打扮成。',
      '"hold up" 阻碍/拦截。',
      '"let sb off" 放过某人。'
    ],
    tags: ['情态动词', 'should have done'], difficulty: 3,
    summary: '马戏团老板骑着小象上街送圣诞礼物给儿童医院，被警察拦住。十五个警察费了好大劲才把小象推离大街。',
    summaryEn: 'The circus owner rode a baby elephant down the main street to deliver presents to a children\'s hospital. Fifteen policemen had to push the elephant off the street.',
  },
  {
    id: 66, title: 'Sweet as honey!', titleCn: '像蜜一样甜！',
    text: [
      'In 1963 a Lancaster bomber crashed on Wallis Island, a remote place in the South Pacific, a long way west of Samoa.',
      'The plane wasn\'t too badly damaged, but over the years, the crash was forgotten and the wreck remained undisturbed.',
      'Then in 1989, twenty-six years after the crash, the plane was accidentally rediscovered in an aerial survey of the island.',
      'By this time, a Lancaster bomber in reasonable condition was rare and worth rescuing.',
      'The French authorities had the plane packaged and moved in parts back to France, where it will be rebuilt by a group of enthusiasts.',
      'The group will have the plane restored and they will have to have three of the engines rebuilt. It is hoped that the bomber will be in perfect condition by 1995.'
    ],
    textCn: [
      '1963年，一架兰开斯特轰炸机在南太平洋一个偏远的地方——萨摩亚以西很远的沃利斯岛坠毁了。',
      '飞机损坏并不严重，但多年来这次坠机事件已被遗忘，残骸一直无人触动。',
      '后来在1989年，也就是坠机26年后，在对该岛的一次航空测量中飞机被意外重新发现了。',
      '到那时，一架状况尚好的兰开斯特轰炸机已是稀罕之物，值得抢救了。',
      '法国当局让人把飞机打包分部件运回了法国，在那里一群热心者将把它重新组装起来。',
      '这群人将修复这架飞机，他们将不得不重建其中三台发动机。人们希望到1995年这架轰炸机能完好如初。'
    ],
    vocab: [
      ['bomber', '/ˈbɒmə/', '轰炸机'],
      ['crash', '/kræʃ/', '坠毁'],
      ['remote', '/rɪˈməʊt/', '偏远的'],
      ['wreck', '/rek/', '残骸'],
      ['accidentally', '/ˌæksɪˈdentəli/', '意外地'],
      ['rescue', '/ˈreskjuː/', '营救'],
      ['enthusiast', '/ɪnˈθjuːziæst/', '热心者']
    ],
    notes: [
      '"worth doing" 值得做。',
      '"have sth done" 让别人做某事（使役用法）。',
      '"in perfect condition" 完好如初。'
    ],
    tags: ['被动语态', '使役动词'], difficulty: 4,
    summary: '一架兰开斯特轰炸机1963年在太平洋偏远岛屿坠毁，26年后被意外发现，法国当局将其运回修复。',
    summaryEn: 'A Lancaster bomber crashed on a remote Pacific island in 1963. Twenty-six years later it was rediscovered and shipped back to France to be restored by enthusiasts.',
  },
  {
    id: 67, title: 'Volcanoes', titleCn: '火山',
    text: [
      'Haroun Tazieff, the Polish scientist, has spent his lifetime studying active volcanoes and deep caves in all parts of the world.',
      'In 1948, he went to Lake Kivu in the Congo to observe a new volcano which he later named Kituro.',
      'Tazieff was able to set up his camp very close to the volcano while it was erupting violently.',
      'Though he managed to take a number of brilliant photographs, he could not stay near the volcano for very long.',
      'He noticed that a river of liquid rock was coming towards him. It threatened to surround him completely, but Tazieff managed to escape just in time.',
      'He waited until the volcano became quiet and he was able to return two days later. This time, he managed to climb into the mouth of Kituro so that he could take photographs and measure temperatures.'
    ],
    textCn: [
      '波兰科学家哈鲁恩·塔齐耶夫一生都在研究世界各地的活火山和深洞。',
      '1948年，他去了刚果的基伍湖观察一座新火山，后来他把它命名为基图罗。',
      '当火山猛烈喷发时，塔齐耶夫成功地在离火山很近的地方搭起了帐篷。',
      '尽管他设法拍了一些精彩的照片，但他不能在火山附近待很长时间。',
      '他注意到一股岩浆流向了他。它威胁着要把他完全包围，但塔齐耶夫及时逃脱了。',
      '他等到火山平静下来，两天后他又回来了。这次，他设法爬进了基图罗的火山口，以便拍照和测量温度。'
    ],
    vocab: [
      ['volcano', '/vɒlˈkeɪnəʊ/', '火山'],
      ['scientist', '/ˈsaɪəntɪst/', '科学家'],
      ['observe', '/əbˈzɜːv/', '观察'],
      ['erupt', '/ɪˈrʌpt/', '喷发'],
      ['brilliant', '/ˈbrɪliənt/', '精彩的'],
      ['measure', '/ˈmeʒə/', '测量']
    ],
    notes: [
      '"spend time doing" 花时间做某事。',
      '"set up" 搭建/建立。',
      '"just in time" 及时。'
    ],
    tags: ['一般过去时', '结果状语从句'], difficulty: 3,
    summary: '科学家塔齐耶夫在刚果观察火山喷发时差点被岩浆包围，及时逃脱后等火山平静又返回火山口拍照测温。',
    summaryEn: 'Scientist Tazieff observed a new volcano in the Congo. He was nearly surrounded by liquid rock but escaped. He returned two days later to climb into the volcano\'s mouth.',
  },
  {
    id: 68, title: 'Persistent', titleCn: '纠缠不休',
    text: [
      'I crossed the street to avoid meeting him, but he saw me and came running towards me.',
      'It was no use pretending that I had not seen him, so I waved to him. I never enjoy meeting Bert Dykes.',
      'He never has anything to do. No matter how busy you are, he always insists on coming with you.',
      'I had to think of a way of preventing him from following me around all morning.',
      '"Hello, Bert," I said. "Fancy meeting you here!" "Hello, Elizabeth," Bert answered. "I was just wondering how to spend the morning until I saw you. You\'re not busy doing anything, are you?"',
      '"No, not at all," I answered. "I\'m going to...""Would you mind my coming with you?" he asked, before I had finished speaking.'
    ],
    textCn: [
      '我穿过马路想避开他，但他看到了我并向我跑来。',
      '假装没看到他是没有用的，所以我向他挥了挥手。我从来不喜欢遇到伯特·戴克斯。',
      '他从来无事可做。不管你多忙，他总是坚持要跟你走。',
      '我得想一个办法不让他整个上午都跟着我。',
      '"你好，伯特，"我说。"没想到在这里遇到你！""你好，伊丽莎白，"伯特回答。"我正在发愁怎么打发这个上午呢，就看到了你。你不忙吧？"',
      '"不，一点也不忙，"我回答。"我要去...""你介意我和你一起去吗？"我话还没说完，他就问道。'
    ],
    vocab: [
      ['persistent', '/pəˈsɪstənt/', '纠缠不休的'],
      ['avoid', '/əˈvɔɪd/', '避免'],
      ['insist', '/ɪnˈsɪst/', '坚持'],
      ['prevent', '/prɪˈvent/', '阻止'],
      ['fancy', '/ˈfænsi/', '想不到'],
      ['wonder', '/ˈwʌndə/', '想知道']
    ],
    notes: [
      '"it is no use doing" 做某事没有用。',
      '"insist on doing" 坚持做某事。',
      '"fancy doing" 真想不到做某事。'
    ],
    tags: ['动名词', '间接引语'], difficulty: 3,
    summary: '作者想避开总是纠缠人的伯特，但被发现了。伯特无事可做，总是坚持跟人走，没等作者说完就问能不能一起去。',
    summaryEn: 'The author tried to avoid meeting Bert Dykes, a persistent man who always insists on accompanying people. Bert asked to join her before she could finish speaking.',
  },
  {
    id: 69, title: 'But not murder!', titleCn: '并非谋杀',
    text: [
      'I was being tested for a driving licence for the third time. I had been asked to drive in heavy traffic and had done so successfully.',
      'After having been instructed to drive out of town, I began to acquire confidence.',
      'Sure that I had passed, I was almost beginning to enjoy my test. The examiner must have been pleased with my performance, for he smiled and said, "Mr. Eames, I\'m going to ask you only one more question."',
      '"Would you mind stopping in front of the post office? I have some letters to post," he said. I did so without hesitation.',
      '"Now," said the examiner, "would you mind starting the engine again?" I obeyed.',
      '"Mr. Eames," the examiner continued, "you\'ve just killed three people!" I looked at the examiner in horror. "The post office is on the other side of the road," he said.'
    ],
    textCn: [
      '我正在接受第三次驾照考试。我被要求在车辆拥挤的路上驾驶，而且做得很好。',
      '在被指示开出城后，我开始有了信心。',
      '确信自己已经通过了考试，我几乎开始享受这次考试。考官一定对我的表现很满意，因为他微笑着说："埃姆斯先生，我只再问你一个问题。"',
      '"你介意在邮局前面停一下吗？我有几封信要寄，"他说。我毫不犹豫地照做了。',
      '"现在，"考官说，"你介意重新发动引擎吗？"我服从了。',
      '"埃姆斯先生，"考官继续说，"你刚才撞死了三个人！"我惊恐地看着考官。"邮局在马路对面，"他说。'
    ],
    vocab: [
      ['licence', '/ˈlaɪsns/', '执照'],
      ['examiner', '/ɪɡˈzæmɪnə/', '考官'],
      ['confidence', '/ˈkɒnfɪdəns/', '信心'],
      ['performance', '/pəˈfɔːməns/', '表现'],
      ['hesitation', '/ˌhezɪˈteɪʃn/', '犹豫'],
      ['horror', '/ˈhɒrə/', '恐惧']
    ],
    notes: [
      '"be pleased with" 对...满意。',
      '"would you mind doing" 你介意做某事吗？',
      '"without hesitation" 毫不犹豫地。'
    ],
    tags: ['被动语态', '情态动词'], difficulty: 3,
    summary: '驾照考试第三次，作者开得很好，考官让他在邮局前停车寄信，然后指出他把车停在了错误的一边——他刚才撞死了三个人。',
    summaryEn: 'During his third driving test, the examiner asked the author to stop at the post office to mail letters. Then he pointed out the author had stopped on the wrong side of the road, "killing three people."',
  },
  {
    id: 70, title: 'Red for danger', titleCn: '危险的红色',
    text: [
      'During a bullfight, a drunk suddenly wandered into the middle of the ring.',
      'The crowd began to shout, but the drunk was unaware of the danger. The bull was busy with the matador at the time, but it suddenly caught sight of the drunk who was shouting rude remarks and waving a red cap.',
      'Apparently sensitive to criticism, the bull forgot all about the matador and charged at the drunk.',
      'The crowd suddenly grew quiet. The drunk, however, seemed quite sure of himself.',
      'When the bull got close to him, he clumsily stepped aside to let it pass. The crowd broke into cheers and the drunk bowed.',
      'By this time, however, three men had come into the ring and they quickly dragged the drunk to safety. Even the bull seemed to feel sorry for him, for it looked on sympathetically until the drunk was out of the way before once more turning its attention to the matador.'
    ],
    textCn: [
      '在一次斗牛表演中，一个醉汉突然摇摇晃晃地走进了斗牛场中间。',
      '观众开始叫喊，但醉汉没有意识到危险。当时公牛正忙于对付斗牛士，但它突然看到了那个醉汉，他在喊着粗鲁的话，挥舞着一顶红帽子。',
      '公牛显然对批评很敏感，它完全忘记了斗牛士，朝醉汉冲了过去。',
      '观众突然安静了下来。但醉汉似乎很有把握。',
      '当公牛靠近他时，他笨拙地闪到一边让牛过去。观众爆发出欢呼声，醉汉鞠了一躬。',
      '然而就在这时，三个人跑进了斗牛场，迅速把醉汉拖到了安全的地方。甚至公牛似乎也为他感到难过，它同情地看着，直到醉汉离开，才重新把注意力转向斗牛士。'
    ],
    vocab: [
      ['bullfight', '/ˈbʊlfaɪt/', '斗牛'],
      ['drunk', '/drʌŋk/', '醉汉'],
      ['wander', '/ˈwɒndə/', '闲逛'],
      ['charge', '/tʃɑːdʒ/', '冲向'],
      ['clumsily', '/ˈklʌmzɪli/', '笨拙地'],
      ['sympathetically', '/ˌsɪmpəˈθetɪkli/', '同情地']
    ],
    notes: [
      '"be unaware of" 没有意识到。',
      '"catch sight of" 看到。',
      '"break into cheers" 爆发出欢呼声。'
    ],
    tags: ['一般过去时', '过去完成时'], difficulty: 3,
    summary: '一个醉汉闯入斗牛场，公牛朝他冲去。醉汉笨拙地闪开让牛过去，观众欢呼。最后三个人把他拖出了斗牛场。',
    summaryEn: 'A drunk wandered into a bullfight ring. The bull charged at him but he clumsily stepped aside. Three men dragged him to safety while the bull watched sympathetically.',
  },
  {
    id: 71, title: 'A famous clock', titleCn: '著名的大钟',
    text: [
      'When you visit London, one of the first things you will see is Big Ben, the famous clock which can be heard all over the world on the B.B.C.',
      'If the Houses of Parliament had not been burned down in 1834, the great clock would never have been erected.',
      'Big Ben takes its name from Sir Benjamin Hall who was responsible for the making of the clock when the new Houses of Parliament were being built.',
      'It is not only of immense size, but is extremely accurate as well.',
      'Officials from the Greenwich Observatory have the clock checked twice a day. On the B.B.C. you can hear the clock when it is actually striking because microphones are connected to the clock tower.',
      'Big Ben has rarely gone wrong. Once, however, it failed to give the correct time. A painter who had been working on the tower hung a pot of paint on one of the hands and slowed it down!'
    ],
    textCn: [
      '当你游览伦敦时，你首先看到的东西之一就是大本钟——那个在全世界都能通过英国广播公司听到的著名大钟。',
      '如果国会大厦没有在1834年被烧毁的话，这座大钟永远不会被建造。',
      '大本钟得名于本杰明·霍尔爵士，他在新国会大厦建造时负责这座钟的制造。',
      '它不仅体积巨大，而且也非常精确。',
      '格林尼治天文台的官员们每天校对两次钟。通过英国广播公司你能听到钟实际敲响的声音，因为钟塔上连接了麦克风。',
      '大本钟很少出错。然而有一次，它没能报出正确的时间。一个在钟塔上工作的油漆工把一罐油漆挂在了钟的一个指针上，使它慢了下来！'
    ],
    vocab: [
      ['Parliament', '/ˈpɑːləmənt/', '国会'],
      ['erect', '/ɪˈrekt/', '竖立'],
      ['responsible', '/rɪˈspɒnsəbl/', '负责的'],
      ['immense', '/ɪˈmens/', '巨大的'],
      ['accurate', '/ˈækjərət/', '精确的'],
      ['microphone', '/ˈmaɪkrəfəʊn/', '麦克风']
    ],
    notes: [
      '"take one\'s name from" 得名于。',
      '"be responsible for" 对...负责。',
      '"go wrong" 出错。'
    ],
    tags: ['虚拟语气', '被动语态'], difficulty: 4,
    summary: '大本钟是伦敦的著名地标，以本杰明·霍尔爵士命名，非常精确。但有一次一个油漆工把油漆挂在指针上使它慢了下来。',
    summaryEn: 'Big Ben is London\'s famous clock, named after Sir Benjamin Hall. It is extremely accurate but once a painter hung a paint pot on one of the hands, slowing it down.',
  },
  {
    id: 72, title: 'A car called Bluebird', titleCn: '名叫蓝鸟的汽车',
    text: [
      'The great racing driver, Sir Malcolm Campbell, was the first man to drive at over 300 miles per hour.',
      'He set up a new world record in September 1935 at Bonneville Salt Flats, Utah.',
      'Bluebird, the car he was driving, had been specially built for him. It was over 30 feet in length and had a 2,500-horsepower engine.',
      'Although Campbell reached a speed of over 304 miles per hour, he had great difficulty in controlling the car because a tyre burst during the first run.',
      'After his attempt, Campbell was disappointed to learn that his average speed had been 299 miles per hour.',
      'However, a few days later, he was told that a mistake had been made. His average speed had been 301 miles per hour. Since that time, racing drivers have reached speeds of over 500 miles per hour.'
    ],
    textCn: [
      '伟大的赛车手马尔科姆·坎贝尔爵士是第一个驾驶时速超过300英里的人。',
      '1935年9月，他在犹他州邦纳维尔盐滩创造了一项新的世界纪录。',
      '他驾驶的"蓝鸟"赛车是专门为他制造的。它有30多英尺长，装有一台2500马力的发动机。',
      '尽管坎贝尔达到了每小时304英里的速度，但他很难控制住汽车，因为在第一轮行驶中一个轮胎爆了。',
      '尝试之后，坎贝尔失望地得知他的平均时速是299英里。',
      '然而几天后，他被告知出了一个错误。他的平均时速是301英里。从那时起，赛车手们已经达到了每小时500多英里的速度。'
    ],
    vocab: [
      ['racing', '/ˈreɪsɪŋ/', '赛车'],
      ['record', '/ˈrekɔːd/', '纪录'],
      ['specially', '/ˈspeʃəli/', '专门地'],
      ['horsepower', '/ˈhɔːspaʊə/', '马力'],
      ['tyre', '/ˈtaɪə/', '轮胎'],
      ['average', '/ˈævərɪdʒ/', '平均的']
    ],
    notes: [
      '"the first man to do" 第一个做某事的人。',
      '"have difficulty in doing" 做某事有困难。',
      '"be disappointed to do" 做某事感到失望。'
    ],
    tags: ['过去完成时', '不定式'], difficulty: 3,
    summary: '赛车手坎贝尔驾驶专门制造的"蓝鸟"赛车，创造了时速超过300英里的世界纪录，尽管中途轮胎爆了。',
    summaryEn: 'Racing driver Sir Malcolm Campbell drove the specially built Bluebird at over 300 mph, setting a world record despite a tyre burst during the first run.',
  },
  {
    id: 73, title: 'The record-holder', titleCn: '纪录保持者',
    text: [
      'Children who play truant from school are unimaginative. A quiet day\'s fishing, or eight hours in a cinema seeing the same film over and over again, is usually as far as they get.',
      'They have all been put to shame by a boy who, while playing truant, travelled 1,600 miles. He hitchhiked to Dover and, towards evening, went into a boat to find somewhere to sleep.',
      'When he woke up the next morning, he discovered that the boat had, in the meantime, travelled to Calais.',
      'No one noticed the boy as he crept off. From there, he hitchhiked to Paris in a lorry.',
      'The driver gave him a few biscuits and a cup of coffee and left him just outside the city.',
      'The next car the boy stopped did not take him into the centre of Paris as he hoped it would, but to Perpignan on the French-Spanish border.',
      'There he was picked up by a policeman and sent back to England by the local authorities.'
    ],
    textCn: [
      '逃学的孩子们缺乏想象力。安静地钓一天鱼，或在电影院里看八小时同一部电影，通常是他们所能做的极限。',
      '有一个男孩在逃学期间旅行了1600英里，使所有的孩子都相形见绌。他搭便车到了多佛，傍晚时分上了一条船想找地方睡觉。',
      '第二天早上他醒来时，发现船在这段时间里已经到了加来。',
      '他悄悄下船时没有人注意到他。从那里，他搭了一辆卡车去了巴黎。',
      '司机给了他几块饼干和一杯咖啡，把他丢在城外。',
      '男孩拦住的下一辆车没有像他希望的那样把他带到巴黎市中心，而是带到了法西边境的佩皮尼昂。',
      '在那里他被一个警察发现，被当局送回了英国。'
    ],
    vocab: [
      ['truant', '/ˈtruːənt/', '逃学者'],
      ['unimaginative', '/ˌʌnɪˈmædʒɪnətɪv/', '缺乏想象力的'],
      ['hitchhike', '/ˈhɪtʃhaɪk/', '搭便车'],
      ['meanwhile', '/ˈmiːnwaɪl/', '与此同时'],
      ['creep', '/kriːp/', '爬行'],
      ['biscuit', '/ˈbɪskɪt/', '饼干']
    ],
    notes: [
      '"play truant" 逃学。',
      '"put to shame" 使相形见绌。',
      '"over and over again" 反复地。'
    ],
    tags: ['一般过去时', '定语从句'], difficulty: 3,
    summary: '一个逃学的男孩搭便车旅行了1600英里，从英国到了法国西班牙边境，最后被警察发现送回了英国。',
    summaryEn: 'A truant boy hitchhiked 1,600 miles from England to the French-Spanish border. He was picked up by police and sent back to England by the local authorities.',
  },
  {
    id: 74, title: 'Out of the limelight', titleCn: '避开灯光',
    text: [
      'An ancient bus stopped by a dry river bed and a party of famous actors and actresses got off.',
      'Dressed in dark glasses and old clothes, they had taken special precautions so that no one should recognize them.',
      'But as they soon discovered, disguises can sometimes be too perfect.',
      '"It\'s not that we\'re not grateful," said one of the women, "but this is the most uncomfortable place we\'ve ever stayed in."',
      '"I agree," said another. "We were told that this was the most beautiful part of the country, but nobody mentioned the snakes."',
      'A third added, "I was told there was a lovely stream. But nobody said anything about mosquitoes."'
    ],
    textCn: [
      '一辆旧公共汽车停在一条干涸的河床边，一群著名的男女演员下了车。',
      '他们戴着墨镜，穿着旧衣服，做了特别的预防措施，以便没有人能认出他们。',
      '但他们很快发现，伪装有时可能太完美了。',
      '"不是我们不感激，"一个女演员说，"但这是我们住过的最不舒服的地方。"',
      '"我同意，"另一个说。"我们被告知这是全国最美丽的地方，但没人提到蛇。"',
      '第三个补充道："我被告知有一条可爱的小溪。但没人提到蚊子。"'
    ],
    vocab: [
      ['limelight', '/ˈlaɪmlaɪt/', '灯光/公众关注'],
      ['precaution', '/prɪˈkɔːʃn/', '预防措施'],
      ['disguise', '/dɪsˈɡaɪz/', '伪装'],
      ['recognize', '/ˈrekəɡnaɪz/', '认出'],
      ['grateful', '/ˈɡreɪtfl/', '感激的'],
      ['mosquito', '/məˈskiːtəʊ/', '蚊子']
    ],
    notes: [
      '"so that" 以便/为了。',
      '"it\'s not that" 并不是说。',
      '"take precautions" 采取预防措施。'
    ],
    tags: ['被动语态', '最高级'], difficulty: 3,
    summary: '一群著名演员化装后去乡下度假，虽然没人认出他们，但他们住的地方有蛇和蚊子，极不舒服。',
    summaryEn: 'A group of famous actors dressed in disguise went to the countryside. Although no one recognized them, they found snakes and mosquitoes at the uncomfortable location.',
  },
  {
    id: 75, title: 'SOS', titleCn: '呼救信号',
    text: [
      'When a light passenger plane flew off course some time ago, it crashed in the mountains and its pilot was killed.',
      'The only passengers, a young woman and her two baby daughters, were unhurt. It was the middle of winter.',
      'Snow lay thick on the ground. The woman knew that the nearest village was miles away.',
      'When it grew dark, she turned a suitcase into a bed and put the children inside it, covering them with all the clothes she could find.',
      'During the night, it got terribly cold. The woman kept as near as she could to the children and even tried to get into the case herself, but it was too small.',
      'Early next morning, she heard planes passing overhead and wondered how she could send a signal. Then she had an idea.',
      'She stamped out the letters "SOS" in the snow. Fortunately, a pilot saw the signal and sent a message by radio to the nearest town. It was not long before a helicopter arrived on the scene to rescue the survivors.'
    ],
    textCn: [
      '不久前，一架轻型客机偏离了航线，在山里坠毁了，飞行员丧生。',
      '仅有的乘客——一位年轻妇女和她的两个婴儿女儿——没有受伤。当时是仲冬。',
      '地上积着厚厚的雪。那个妇女知道最近的村庄在几英里之外。',
      '天黑时，她把一个手提箱当作床，把孩子们放了进去，用她能找到的所有衣服盖住他们。',
      '夜里，天冷得厉害。那妇女尽可能靠近孩子们，甚至试图自己也钻进箱子里，但箱子太小了。',
      '第二天一早，她听到头顶有飞机飞过，想着怎样才能发出信号。然后她有了一个主意。',
      '她在雪地上踩出了"SOS"三个字母。幸运的是，一个飞行员看到了信号，用无线电向最近的城镇发了消息。不久一架直升飞机就飞到了现场营救幸存者。'
    ],
    vocab: [
      ['pilot', '/ˈpaɪlət/', '飞行员'],
      ['course', '/kɔːs/', '航线'],
      ['suitcase', '/ˈsʌtkeɪs/', '手提箱'],
      ['stamp', '/stæmp/', '踩'],
      ['signal', '/ˈsɪɡnəl/', '信号'],
      ['helicopter', '/ˈhelɪkɒptə/', '直升飞机'],
      ['survivor', '/səˈvaɪvə/', '幸存者']
    ],
    notes: [
      '"fly off course" 偏离航线。',
      '"stamp out" 踩出/踏出。',
      '"it was not long before" 不久之后。'
    ],
    tags: ['一般过去时', '时间状语'], difficulty: 3,
    summary: '一架轻型飞机坠毁后，一位母亲在雪地上踩出"SOS"求救信号，被飞行员发现，直升飞机前来营救。',
    summaryEn: 'After a light plane crashed in the mountains, a woman stamped "SOS" in the snow. A pilot saw it and a helicopter was sent to rescue the survivors.',
  },
  {
    id: 76, title: 'April Fools\' Day', titleCn: '愚人节',
    text: [
      '"To end our special news bulletin," said the voice of the television presenter, "we\'re going over to the macaroni fields of Calabria."',
      'Macaroni has been grown in this area for over six hundred years. Two of the leading growers, Giuseppe Moldova and Riccardo Brabante, tell me that they have been expecting a splendid crop this year.',
      'The harvest has begun and the whole area is a hive of activity.',
      'Harvesting has been going on for several weeks now and the macaroni-eating festival will soon be upon us.',
      'Everyone will be invited to the festival where they will be served with macaroni dishes cooked in the traditional way.',
      'The presenter then showed viewers macaroni fields. The plants, which were blowing gently in the breeze, looked very strange.',
      '"There you are," said the presenter. "The best macaroni-eating people in the world. April Fool!"'
    ],
    textCn: [
      '"为了结束我们的特别新闻播报，"电视节目主持人的声音说，"我们转向卡拉布里亚的通心粉田。"',
      '这个地区种植通心粉已有六百多年了。两位主要种植者朱塞佩·莫尔多瓦和里卡多·布拉班特告诉我，他们一直期盼着今年的好收成。',
      '收获已经开始了，整个地区一片繁忙景象。',
      '收割已经持续了好几个星期，吃通心粉的节日很快就要到了。',
      '每个人都将被邀请参加节日，在那里他们将品尝到用传统方式烹制的通心粉。',
      '然后主持人向观众展示了通心粉田。那些在微风中轻轻摇曳的植物看起来非常奇怪。',
      '"好了，"主持人说。"世界上最爱吃通心粉的人们。愚人节快乐！"'
    ],
    vocab: [
      ['bulletin', '/ˈbʊlətɪn/', '新闻简报'],
      ['presenter', '/prɪˈzentə/', '主持人'],
      ['macaroni', '/ˌmækəˈrəʊni/', '通心粉'],
      ['harvest', '/ˈhɑːvɪst/', '收获'],
      ['splendid', '/ˈsplendɪd/', '极好的'],
      ['traditional', '/trəˈdɪʃənl/', '传统的']
    ],
    notes: [
      '"April Fool" 愚人节被愚弄的人。',
      '"a hive of activity" 一片繁忙景象。',
      '"go over to" 转向/切换到。'
    ],
    tags: ['现在完成时', '被动语态'], difficulty: 3,
    summary: '电视新闻播报了一则关于通心粉丰收的特别报道，展示看起来像植物的通心粉田，最后揭示这是愚人节玩笑。',
    summaryEn: 'A TV presenter did a special report on macaroni fields and harvest in Calabria, showing strange plants in the breeze, then revealed it was all an April Fools\' Day joke.',
  },
  {
    id: 77, title: 'A successful operation', titleCn: '一次成功的手术',
    text: [
      'The mummy of an Egyptian woman who died in 800 B.C. has just had an operation.',
      'The mummy is that of Shepenmut who was once a singer in the Temple of Thebes.',
      'As there were strange marks on the X-ray plates taken of the mummy, doctors have been trying to find out whether the woman died of a rare disease.',
      'The only way to do this was to operate. The operation, which lasted for over four hours, proved to be very difficult because of the hard resin which covered the skin.',
      'The doctors removed a section of the mummy and sent it to a laboratory.',
      'They also found something which the X-ray plates did not show: a small wax figure of the god Duamutef.',
      'The doctors have not yet decided how the woman died. They feared that the mummy would fall to pieces when they cut it open, but fortunately this has not happened.'
    ],
    textCn: [
      '一个死于公元前800年的埃及妇女的木乃伊刚刚做了一次手术。',
      '这具木乃伊是谢普穆特的，她曾是底比斯神殿里的一名歌女。',
      '由于在木乃伊拍摄的X光片子上有奇怪的痕迹，医生们一直试图查明这位妇女是否死于一种罕见的疾病。',
      '查明的唯一方法就是做手术。手术持续了四个多小时，非常困难，因为皮肤上覆盖着一层硬树脂。',
      '医生们从木乃伊身上取了一块切片，送到了实验室。',
      '他们还发现了X光片子没有显示的东西：一个杜阿穆泰夫神的小蜡像。',
      '医生们还没有确定这位妇女的死因。他们担心切开木乃伊时它会散架，但幸运的是这并没有发生。'
    ],
    vocab: [
      ['mummy', '/ˈmʌmi/', '木乃伊'],
      ['Egyptian', '/ɪˈdʒɪpʃn/', '埃及的'],
      ['operation', '/ˌɒpəˈreɪʃn/', '手术'],
      ['temple', '/ˈtempl/', '神殿'],
      ['disease', '/dɪˈziːz/', '疾病'],
      ['resin', '/ˈrezɪn/', '树脂'],
      ['laboratory', '/ləˈbɒrətri/', '实验室']
    ],
    notes: [
      '"die of" 死于（疾病等）。',
      '"prove to be" 证明是。',
      '"fall to pieces" 散架/崩溃。'
    ],
    tags: ['被动语态', '现在完成时'], difficulty: 4,
    summary: '一具公元前800年的埃及木乃伊做了手术，医生试图查明歌女谢普穆特的死因，手术非常困难但成功了。',
    summaryEn: 'The mummy of an Egyptian singer who died in 800 B.C. had a difficult four-hour operation. Doctors were trying to find out if she died of a rare disease.',
  },
  {
    id: 78, title: 'The last one?', titleCn: '最后一支吗？',
    text: [
      'After reading an article entitled "Cigarette Smoking and Your Health", I lit a cigarette to calm my nerves.',
      'I smoked with concentration and pleasure as I was sure that this would be my last one.',
      'For a whole week I did not smoke at all and during this time, my wife suffered terribly.',
      'I had all the usual symptoms of someone giving up smoking: a bad temper and an enormous appetite.',
      'My friends kept on offering me cigarettes and cigars. They made no effort to hide their amusement whenever I produced a packet of sweets from my pocket.',
      'After seven days of this I went to a party. Everybody around me was smoking and I felt extremely uncomfortable.',
      'When my old friend Brian urged me to accept a cigarette, it was more than I could bear. I took one guiltily, lit it and smoked with satisfaction.',
      'My wife was delighted that things had returned to normal once more. Anyway, as Brian pointed out, it is the easiest thing in the world to give up smoking. He himself has done it lots of times!'
    ],
    textCn: [
      '读完一篇题为"吸烟与你的健康"的文章后，我点燃了一支烟来镇定我的神经。',
      '我聚精会神而又愉快地抽着这支烟，因为我确信这将是我最后一支烟了。',
      '整整一个星期我一支烟也没抽，在这段时间里，我的妻子可受罪了。',
      '我具有戒烟者所有的常见症状：脾气暴躁，食欲大增。',
      '我的朋友们不断地向我递烟递雪茄。每当我从口袋里掏出一袋糖果时，他们毫不掩饰他们的乐趣。',
      '这样过了七天后，我去参加了一个聚会。我身边的每个人都在抽烟，我感到非常不舒服。',
      '当我的老朋友布里恩极力劝我接受一支烟时，我再也忍不住了。我内疚地接过一支点上，心满意足地抽了起来。',
      '我的妻子很高兴一切又恢复了正常。不管怎样，正如布里恩指出的，戒烟是世界上最容易的事。他自己就戒过好多次了！'
    ],
    vocab: [
      ['cigarette', '/ˌsɪɡəˈret/', '香烟'],
      ['nerve', '/nɜːv/', '神经'],
      ['concentration', '/ˌkɒnsnˈtreɪʃn/', '集中注意力'],
      ['symptom', '/ˈsɪmptəm/', '症状'],
      ['temper', '/ˈtempə/', '脾气'],
      ['enormous', '/ɪˈnɔːməs/', '极大的'],
      ['urge', '/ɜːdʒ/', '极力劝说'],
      ['satisfaction', '/ˌsætɪsˈfækʃn/', '满足']
    ],
    notes: [
      '"give up" 放弃/戒掉。',
      '"keep on doing" 不断做某事。',
      '"make no effort to do" 不费力做某事。'
    ],
    tags: ['一般过去时', '分词短语'], difficulty: 3,
    summary: '作者读了吸烟有害健康的文章后决定戒烟，忍受了一周的痛苦，在聚会上被朋友劝着又抽了起来。朋友说戒烟很容易，他自己戒过好多次。',
    summaryEn: 'The author tried to quit smoking after reading an article. After a difficult week, he gave in at a party. His friend said quitting is easy — he has done it many times himself!',
  },
  {
    id: 79, title: 'By air', titleCn: '乘飞机',
    text: [
      'I used to travel by air a great deal when I was a boy. My parents used to live in South America and I used to fly there from Europe in the holidays.',
      'A flight attendant would take charge of me and I never had an unpleasant experience.',
      'I am used to travelling by air and only on one occasion have I ever felt frightened.',
      'After taking off, we were flying low over the city and slowly gaining height, when the plane suddenly turned round and flew back to the airport.',
      'While we were waiting to land, a flight attendant told us to keep calm and to get off the plane quietly as soon as it had touched down.',
      'Everybody on board was worried and we were curious to find out what had happened. Later we learnt that there was a very important person on board.',
      'The police had been told that a bomb had been planted on the plane. After the plane had been searched thoroughly, we were allowed to take off again.'
    ],
    textCn: [
      '我小时候经常乘飞机旅行。我父母过去住在南美洲，假期里我常从欧洲飞过去。',
      '一个乘务员会照顾我，我从未有过不愉快的经历。',
      '我习惯了乘飞机旅行，只有一次我感到害怕。',
      '起飞后，我们在城市上空低低地飞行，慢慢升高，这时飞机突然掉转头飞回了机场。',
      '在我们等待降落时，一位乘务员让我们保持镇静，飞机一着陆就安静地离开。',
      '飞机上每个人都很担心，我们都急于想知道发生了什么事。后来我们得知飞机上有一个非常重要的人物。',
      '有人向警方报告说飞机上安放了一枚炸弹。飞机被彻底搜查后，我们才被允许再次起飞。'
    ],
    vocab: [
      ['flight', '/flaɪt/', '飞行'],
      ['attendant', '/əˈtendənt/', '乘务员'],
      ['gain', '/ɡeɪn/', '增加'],
      ['calm', '/kɑːm/', '镇静的'],
      ['curious', '/ˈkjʊəriəs/', '好奇的'],
      ['bomb', '/bɒm/', '炸弹'],
      ['plant', '/plɑːnt/', '安放']
    ],
    notes: [
      '"used to do" 过去常常做。',
      '"be used to doing" 习惯于做。',
      '"take charge of" 负责/照顾。'
    ],
    tags: ['used to', '过去完成时'], difficulty: 3,
    summary: '作者习惯乘飞机旅行，只有一次飞机起飞后又飞回了机场，因为有人报告飞机上有炸弹。彻底搜查后飞机才重新起飞。',
    summaryEn: 'The author was used to flying. Once the plane returned to the airport after takeoff because a bomb was reported on board. After a thorough search, the plane was allowed to take off again.',
  },
  {
    id: 80, title: 'The Crystal Palace', titleCn: '水晶宫',
    text: [
      'Perhaps the most extraordinary building of the nineteenth century was the Crystal Palace, which was built in Hyde Park for the Great Exhibition of 1851.',
      'The Crystal Palace was different from all other buildings in the world, for it was made of iron and glass.',
      'It was one of the biggest buildings of all time and a lot of people from many countries came to see it.',
      'A great many goods were sent to the exhibition from various parts of the world.',
      'There was also a great deal of machinery on display. The most wonderful piece of machinery on show was Nasmyth\'s steam hammer.',
      'Though in those days, travelling was not as easy as it is today, steam boats carried thousands of visitors across the Channel from Europe.',
      'On arriving in England, they were taken to the Crystal Palace by train. There were six million visitors in all, and the profits from the exhibition were used to build museums and colleges.'
    ],
    textCn: [
      '十九世纪最不寻常的建筑也许就是水晶宫了，它是为1851年的世界博览会建在海德公园里的。',
      '水晶宫与世界上所有其他建筑都不同，因为它是用铁和玻璃建造的。',
      '它是有史以来最大的建筑物之一，来自许多国家的很多人前来参观。',
      '世界各地的大量商品被送到博览会来展出。',
      '还有许多机器在展出。最精彩的机器是内史密斯的蒸汽锤。',
      '尽管在那个年代旅行不像今天这么容易，但轮船还是把成千上万的游客从欧洲大陆送过了英吉利海峡。',
      '一到英国，他们就乘火车去水晶宫。参观者总数达六百万人，博览会的利润被用来建造博物馆和学院。'
    ],
    vocab: [
      ['crystal', '/ˈkrɪstl/', '水晶'],
      ['extraordinary', '/ɪkˈstrɔːdnri/', '不寻常的'],
      ['exhibition', '/ˌeksɪˈbɪʃn/', '博览会'],
      ['machinery', '/məˈʃiːnəri/', '机器'],
      ['steam', '/stiːm/', '蒸汽'],
      ['profit', '/ˈprɒfɪt/', '利润']
    ],
    notes: [
      '"be different from" 与...不同。',
      '"on display" 在展出。',
      '"in all" 总共。'
    ],
    tags: ['被动语态', '比较级'], difficulty: 3,
    summary: '水晶宫是1851年为世界博览会在海德公园建造的，用铁和玻璃建造，吸引了六百万参观者，利润用来建造博物馆和学院。',
    summaryEn: 'The Crystal Palace was built in Hyde Park for the 1851 Great Exhibition. Made of iron and glass, it attracted six million visitors. Profits were used to build museums and colleges.',
  },
  {
    id: 81, title: 'Escape', titleCn: '逃跑',
    text: [
      'When he had killed the guard, the prisoner of war quickly dragged him into the bushes.',
      'Working rapidly in the darkness, he soon changed into the dead man\'s clothes.',
      'Now, dressed in a blue uniform and with a rifle over his shoulder, the prisoner marched boldly up and down in front of the camp.',
      'He could hear shouting in the camp itself. Lights were blazing and men were running here and there.',
      'They had just discovered that a prisoner had escaped. At that moment, a large black car with four officers inside it, stopped at the camp gates.',
      'The officers got out and the prisoner stood to attention and saluted as they passed.',
      'They had just had a prisoner of war escape and were checking everyone. But they never thought of looking in the bushes near the gate.'
    ],
    textCn: [
      '战俘杀死卫兵后，迅速把他拖进了灌木丛。',
      '在黑暗中他动作迅速，很快就换上了死者的衣服。',
      '现在，身穿蓝色制服、肩扛步枪，战俘在军营前大胆地来回走着。',
      '他能听到军营里的喊叫声。灯火通明，人们跑来跑去。',
      '他们刚发现一个战俘逃跑了。就在这时，一辆载着四个军官的黑色大轿车停在了军营门口。',
      '军官们下了车，战俘立正站好，在他们经过时敬了礼。',
      '他们刚有一个战俘逃跑，正在检查每个人。但他们从未想到要查看靠近大门的灌木丛。'
    ],
    vocab: [
      ['prisoner', '/ˈprɪznə/', '囚犯'],
      ['drag', '/dræɡ/', '拖'],
      ['bush', '/bʊʃ/', '灌木丛'],
      ['uniform', '/ˈjuːnɪfɔːm/', '制服'],
      ['rifle', '/ˈraɪfl/', '步枪'],
      ['boldly', '/ˈbəʊldli/', '大胆地'],
      ['salute', '/səˈluːt/', '敬礼']
    ],
    notes: [
      '"change into" 换上（衣服）。',
      '"stand to attention" 立正站好。',
      '"here and there" 到处。'
    ],
    tags: ['过去完成时', '分词短语'], difficulty: 4,
    summary: '一个战俘杀死卫兵后换上他的衣服，扛着步枪在军营前大胆走动。军官们来检查时他立正敬礼，他们没有发现他就是逃跑的战俘。',
    summaryEn: 'A prisoner of war killed a guard, changed into his clothes, and marched boldly in front of the camp. Officers came to check but never thought of looking near the gate where he hid.',
  },
  {
    id: 82, title: 'Monster or fish?', titleCn: '是妖还是鱼？',
    text: [
      'For years, fishermen in the small town of Ridgefield have told stories about a strange creature that lives in the bay.',
      'They say it is a kind of sea serpent with a horse-like head and a body that is twenty feet long.',
      'Scientists have always dismissed these stories as nonsense. Recently, however, a marine biologist from the University of California set out to investigate.',
      'She spent several months in the town, interviewing fishermen and collecting samples.',
      'One day, she was on a fishing boat when the creature suddenly appeared. It rose out of the water and she managed to take several photographs.',
      'The photographs were not very clear, but they showed something large and dark moving through the water.',
      'The biologist is now convinced that the creature is a kind of giant eel, not a sea serpent. She plans to return next year with better equipment.'
    ],
    textCn: [
      '多年来，里奇菲尔德小镇的渔民们一直在讲述关于生活在海湾里的一个奇怪生物的故事。',
      '他们说它是一种海蛇，长着马一样的头，身体有二十英尺长。',
      '科学家们一直把这些故事当作无稽之谈而不予理会。然而最近，加利福尼亚大学的一位海洋生物学家出发去调查了。',
      '她在镇上待了几个月，采访渔民并收集样本。',
      '一天，她在一艘渔船上时，那个生物突然出现了。它从水里冒出来，她设法拍了几张照片。',
      '照片不是很清楚，但它们显示了一个又大又黑的东西在水中移动。',
      '生物学家现在确信那个生物是一种巨型鳗鱼，不是海蛇。她计划明年带着更好的设备回来。'
    ],
    vocab: [
      ['monster', '/ˈmɒnstə/', '怪物'],
      ['creature', '/ˈkriːtʃə/', '生物'],
      ['serpent', '/ˈsɜːpənt/', '蛇'],
      ['marine', '/məˈriːn/', '海洋的'],
      ['biologist', '/baɪˈɒlədʒɪst/', '生物学家'],
      ['investigate', '/ɪnˈvestɪɡeɪt/', '调查'],
      ['sample', '/ˈsɑːmpl/', '样本'],
      ['eel', '/iːl/', '鳗鱼']
    ],
    notes: [
      '"dismiss...as" 把...当作...而不予理会。',
      '"set out to do" 着手做某事。',
      '"be convinced that" 确信...。'
    ],
    tags: ['现在完成时', '被动语态'], difficulty: 3,
    summary: '渔民们多年来讲述海湾里的海蛇故事，科学家一直不信。一位海洋生物学家调查后拍到了照片，确信那是一种巨型鳗鱼。',
    summaryEn: 'Fishermen told stories about a sea serpent in the bay. A marine biologist investigated, photographed something large in the water, and concluded it was a giant eel.',
  },
  {
    id: 83, title: 'After the elections', titleCn: '选举之后',
    text: [
      'The former Prime Minister, Mr. Wentworth Lane, was defeated in the recent elections.',
      'He is now retiring from political life and has gone abroad. My friend, Patrick, has always been a fanatical opponent of Mr. Lane\'s Radical Progressive Party.',
      'After the elections, Patrick went to the former Prime Minister\'s house. When he asked if Mr. Lane lived there, the policeman on duty told him that since his defeat, the ex-Prime Minister had gone abroad.',
      'This was clearly untrue, because Patrick could see Mr. Lane standing at the window of his house.',
      'He told the policeman this, but the policeman refused to believe him. Patrick then asked the policeman to arrest Mr. Lane.',
      'The policeman politely refused his request and told Patrick that they had received a tip-off that someone intended to throw eggs at the former Prime Minister.',
      '"In that case," said Patrick, "I shall have to arrest him myself." The policeman smiled and said, "I wouldn\'t do that if I were you."'
    ],
    textCn: [
      '前首相温特沃斯·莱恩先生在最近的选举中被击败了。',
      '他现在正退出政坛，已经出国了。我的朋友帕特里克一直是莱恩先生激进进步党的狂热反对者。',
      '选举后，帕特里克去了前首相的家。当他问莱恩先生是否住在那里时，值班警察告诉他，自从落选后，前首相已经出国了。',
      '这显然是不真实的，因为帕特里克能看到莱恩先生正站在他房子的窗户旁。',
      '他把这告诉了警察，但警察拒绝相信他。帕特里克然后要求警察逮捕莱恩先生。',
      '警察礼貌地拒绝了他的请求，告诉帕特里克他们收到了举报，说有人打算向前首相扔鸡蛋。',
      '"那样的话，"帕特里克说，"我得亲自逮捕他了。"警察笑着说："如果我是你，我不会那样做。"'
    ],
    vocab: [
      ['election', '/ɪˈlekʃn/', '选举'],
      ['defeat', '/dɪˈfiːt/', '击败'],
      ['opponent', '/əˈpəʊnənt/', '反对者'],
      ['radical', '/ˈrædɪkl/', '激进的'],
      ['ex-Prime Minister', '/eks praɪm ˈmɪnɪstə/', '前首相'],
      ['tip-off', '/ˈtɪp ɒf/', '举报'],
      ['arrest', '/əˈrest/', '逮捕']
    ],
    notes: [
      '"retire from" 退出。',
      '"on duty" 值班。',
      '"in that case" 既然那样。'
    ],
    tags: ['过去完成时', '虚拟语气'], difficulty: 4,
    summary: '前首相落选后，帕特里克去他家发现他还在，但警察说他已经出国了。帕特里克要求逮捕他，警察礼貌地拒绝了。',
    summaryEn: 'After the former Prime Minister lost the election, Patrick went to his house and saw him at the window. The police claimed he had gone abroad and refused to arrest him.',
  },
  {
    id: 84, title: 'On strike', titleCn: '罢工',
    text: [
      'Busmen have decided to go on strike next week. The strike is due to begin on Tuesday.',
      'No one knows how long it will last. The busmen\'s union has stated that the strike will continue until general agreement is reached about pay and working conditions.',
      'Most people believe that the strike will last for at least a week. Many owners of private cars are going to offer "free rides" to people going to work.',
      'University students have volunteered to drive buses while the strike lasts. All the students are expert drivers, but before they drive any of the buses, they will have to pass a special test.',
      'The students are going to take the test in two days\' time. Even so, people are going to find it difficult to get to work.',
      'But so far, the public has expressed its gratitude to the students. The buses are free and so is the public transport provided by the students.'
    ],
    textCn: [
      '公共汽车司机已决定下周罢工。罢工定于星期二开始。',
      '没有人知道罢工会持续多久。公共汽车司机工会已声明，罢工将持续到达成关于工资和工作条件的总协议为止。',
      '大多数人认为罢工至少会持续一周。许多私家车车主打算为上班的人提供"免费搭车"。',
      '大学生们自愿在罢工期间驾驶公共汽车。所有的学生都是熟练的司机，但在他们驾驶任何公共汽车之前，他们必须通过一项专门的测试。',
      '学生们打算两天后参加测试。即便如此，人们还是会觉得上班很困难。',
      '但到目前为止，公众对学生表示了感谢。公共汽车是免费的，学生们提供的公共交通也是免费的。'
    ],
    vocab: [
      ['strike', '/straɪk/', '罢工'],
      ['union', '/ˈjuːniən/', '工会'],
      ['agreement', '/əˈɡriːmənt/', '协议'],
      ['volunteer', '/ˌvɒlənˈtɪə/', '志愿'],
      ['gratitude', '/ˈɡrætɪtjuːd/', '感激'],
      ['transport', '/ˈtrænspɔːt/', '交通']
    ],
    notes: [
      '"go on strike" 举行罢工。',
      '"be due to" 定于/预计。',
      '"free ride" 免费搭车。'
    ],
    tags: ['一般将来时', '被动语态'], difficulty: 3,
    summary: '公共汽车司机下周罢工，大学生们自愿在罢工期间驾驶公共汽车，公众对学生表示感谢。',
    summaryEn: 'Busmen decided to go on strike. University students volunteered to drive buses during the strike. The public expressed gratitude to the students.',
  },
  {
    id: 85, title: 'Never too old to learn', titleCn: '活到老学到老',
    text: [
      'I have just received a letter from my old school informing me that my former headmaster, Mr. Stuart Page, will be retiring next week.',
      'Pupils of the school, old and new, will be sending him a present to mark the occasion.',
      'All those who have contributed towards the gift will sign their names in a large album which will be sent to the headmaster\'s home.',
      'We shall all remember Mr. Page for his patience and understanding and for the kindly encouragement he gave us when we went so unwillingly to school.',
      'A great many former pupils will be attending a farewell dinner in his honour next Thursday.',
      'It is a curious thing that those who disliked school most when they were young are often the first to offer their services when their old school needs help.'
    ],
    textCn: [
      '我刚收到母校的一封信，通知我我的前任校长斯图尔特·佩奇先生将于下周退休。',
      '学校的新老学生们将送他一件礼物以纪念这个时刻。',
      '所有凑钱买礼物的人都将在一本大签名册上签名，签名册将被送到校长家中。',
      '我们都将记住佩奇先生的耐心和理解，以及当我们不愿上学时他给予我们的亲切鼓励。',
      '很多以前的学生将于下周四参加为他举行的告别宴会。',
      '一件奇妙的事情是，那些年轻时最不喜欢学校的人往往是在母校需要帮助时最先提供服务的人。'
    ],
    vocab: [
      ['inform', '/ɪnˈfɔːm/', '通知'],
      ['headmaster', '/ˌhedˈmɑːstə/', '校长'],
      ['contribute', '/kənˈtrɪbjuːt/', '捐献'],
      ['patience', '/ˈpeɪʃns/', '耐心'],
      ['encouragement', '/ɪnˈkʌrɪdʒmənt/', '鼓励'],
      ['farewell', '/ˌfeəˈwel/', '告别'],
      ['curious', '/ˈkjʊəriəs/', '奇妙的']
    ],
    notes: [
      '"inform sb that" 通知某人...。',
      '"contribute towards" 为...捐款。',
      '"in sb\'s honour" 为向某人表示敬意。'
    ],
    tags: ['将来进行时', '定语从句'], difficulty: 4,
    summary: '作者收到母校来信说校长下周退休，新老学生将送礼物并参加告别宴会。年轻时最不喜欢学校的人往往最先提供帮助。',
    summaryEn: 'The author\'s former headmaster is retiring. Pupils will send a gift and attend a farewell dinner. Those who disliked school most are often the first to help.',
  },
  {
    id: 86, title: 'Out of control', titleCn: '失控',
    text: [
      'As the man tried to swing the speedboat round, the steering wheel came away in his hands.',
      'He waved desperately to his companion, who had been water skiing for the last fifteen minutes.',
      'Both men had hardly had time to realize what was happening when they were thrown violently into the sea.',
      'The speedboat had struck a buoy, but it continued to move very quickly across the water.',
      'Both men had just begun to swim towards the shore, when they noticed with dismay that the speedboat was moving in a circle.',
      'It now came straight towards them at tremendous speed. In less than a minute, it roared past them only a few feet away.',
      'After it had sped away, the men began to swim back to shore. They had not been swimming for long when they saw the boat again. It was moving in a circle again. This time, however, it had slowed down considerably. The fuel had been used up.'
    ],
    textCn: [
      '当那个人试图让快艇转弯时，方向盘脱离了他的手。',
      '他拼命地向同伴挥手，他的同伴在过去的十五分钟里一直在滑水。',
      '两个人还没来得及意识到发生了什么，就被猛烈地抛进了海里。',
      '快艇撞上了一个浮标，但它继续在水面上快速移动。',
      '两个人刚开始向岸边游去，就沮丧地看到快艇在转圈。',
      '它现在正以极快的速度径直朝他们冲来。不到一分钟，它从离他们只有几英尺的地方呼啸而过。',
      '快艇疾驰而去后，两人开始游回岸边。他们没游多久就又看到了那艘船。它又在转圈了。但这一次它已经大大放慢了速度。燃料已经用完了。'
    ],
    vocab: [
      ['swing', '/swɪŋ/', '转动'],
      ['steering', '/ˈstɪərɪŋ/', '方向盘'],
      ['desperately', '/ˈdespərətli/', '绝望地'],
      ['companion', '/kəmˈpæniən/', '同伴'],
      ['buoy', '/bɔɪ/', '浮标'],
      ['tremendous', '/trɪˈmendəs/', '极大的'],
      ['roar', '/rɔː/', '呼啸'],
      ['fuel', '/fjuːəl/', '燃料']
    ],
    notes: [
      '"come away" 脱落。',
      '"throw into" 扔进/抛入。',
      '"use up" 用完/耗尽。'
    ],
    tags: ['过去完成时', '时间状语'], difficulty: 4,
    summary: '快艇方向盘脱落，两个人被抛入海中。失控的快艇转着圈朝他们冲来，但最后燃料耗尽慢了下来。',
    summaryEn: 'The steering wheel came off a speedboat and two men were thrown into the sea. The boat circled wildly towards them but eventually ran out of fuel and slowed down.',
  },
  {
    id: 87, title: 'A perfect alibi', titleCn: '极好的不在犯罪现场的证据',
    text: [
      '"At the time the murder was committed, I was travelling on the 8 o\'clock train to London," said the man.',
      '"Do you always catch such an early train?" asked the inspector.',
      '"Of course I do," answered the man. "I must be at work at 10 o\'clock. My employer will confirm that I was there on time."',
      '"Would a later train get you to work on time?" asked the inspector.',
      '"I suppose it would, but I never catch a later train."',
      '"At what time did you arrive at the station?"',
      '"At ten to eight. I bought a paper and waited for the train."',
      '"And you didn\'t notice anything unusual?"',
      '"Of course not."',
      '"I suggest," said the inspector, "that you are not telling the truth. I suggest that you did not catch the 8 o\'clock train, but that you caught the 8.25 which would still get you to work on time. You see, on the morning of the murder, the 8 o\'clock train did not run. It broke down at Ferngreen station and was taken off the line."'
    ],
    textCn: [
      '"在谋杀案发生时，我正在乘坐八点钟开往伦敦的火车，"那个人说。',
      '"你总是赶这么早的火车吗？"探长问。',
      '"当然是的，"那人回答。"我必须在十点钟上班。我的雇主会证明我准时到了那里。"',
      '"晚一点的火车能让你按时上班吗？"探长问。',
      '"我想可以，但我从不赶晚一点的火车。"',
      '"你几点到的车站？"',
      '"七点五十。我买了一份报纸，等火车。"',
      '"你没注意到什么不寻常的事吗？"',
      '"当然没有。"',
      '"我认为，"探长说，"你没有说实话。我认为你没有坐八点的火车，而是坐了八点二十五分的，那趟车仍然能让你按时上班。你看，在谋杀案发生的那天早上，八点的火车没有运行。它在费恩格林车站出了故障，被取消了。"'
    ],
    vocab: [
      ['alibi', '/ˈælɪbaɪ/', '不在场证明'],
      ['murder', '/ˈmɜːdə/', '谋杀'],
      ['commit', '/kəˈmɪt/', '犯（罪）'],
      ['inspector', '/ɪnˈspektə/', '探长'],
      ['employer', '/ɪmˈplɔɪə/', '雇主'],
      ['confirm', '/kənˈfɜːm/', '证实'],
      ['break down', '/breɪk daʊn/', '出故障']
    ],
    notes: [
      '"on time" 准时。',
      '"break down" 出故障。',
      '"be taken off the line" 被取消。'
    ],
    tags: ['间接引语', '过去进行时'], difficulty: 4,
    summary: '一个男人声称谋杀发生时他在坐火车，有不在场证明。但探长指出那天那趟火车因故障没有运行，揭穿了他的谎言。',
    summaryEn: 'A man claimed he was on the 8 o\'clock train during the murder. The inspector proved he was lying because that train had broken down and didn\'t run that morning.',
  },
  {
    id: 88, title: 'Trapped in a mine', titleCn: '困在矿井里',
    text: [
      'Six men have been trapped in a mine for seventeen hours. If they are not brought to the surface soon they may lose their lives.',
      'However, rescue operations are proving difficult. If explosives are used, vibrations will cause the roof of the mine to collapse.',
      'Rescue workers are therefore drilling a hole on the north side of the mine. They intend to bring the men up in a special capsule.',
      'If there had not been a hard layer of rock beneath the soil, they would have completed the job in a few hours.',
      'As it is, they have been drilling for sixteen hours and they still have a long way to go.',
      'Meanwhile, a microphone, which was lowered into the mine two hours ago, has enabled the men to keep in touch with their closest relatives.',
      'Though they are running out of food and drink, the men are cheerful and confident that they will get out soon.'
    ],
    textCn: [
      '六个男人被困在矿井里已经十七个小时了。如果不很快把他们救到地面上来，他们可能会丧命。',
      '然而，救援工作证明很困难。如果使用炸药，震动将使矿井顶部塌陷。',
      '因此救援人员正在矿井的北侧钻一个洞。他们打算用一个特殊的吊舱把人救上来。',
      '如果不是土壤下面有一层坚硬的岩石，他们几个小时就能完成这项工作。',
      '事实上，他们已经钻了十六个小时，还有很长的路要走。',
      '与此同时，两小时前放下去的一个麦克风使这些人能够与最亲近的家属保持联系。',
      '尽管他们快没吃的和喝的了，但这些人情绪很好，相信自己很快就能出去。'
    ],
    vocab: [
      ['trap', '/træp/', '困住'],
      ['mine', '/maɪn/', '矿井'],
      ['rescue', '/ˈreskjuː/', '救援'],
      ['explosive', '/ɪkˈspləʊsɪv/', '炸药'],
      ['vibration', '/vaɪˈbreɪʃn/', '震动'],
      ['collapse', '/kəˈlæps/', '塌陷'],
      ['capsule', '/ˈkæpsjuːl/', '吊舱'],
      ['microphone', '/ˈmaɪkrəfəʊn/', '麦克风']
    ],
    notes: [
      '"lose one\'s life" 丧命。',
      '"run out of" 用完/耗尽。',
      '"keep in touch with" 与...保持联系。'
    ],
    tags: ['虚拟语气', '被动语态'], difficulty: 4,
    summary: '六个矿工被困在矿井里十七个小时。由于地下有坚硬岩石层，钻孔救援进展缓慢，但矿工们通过麦克风与家人保持联系。',
    summaryEn: 'Six men were trapped in a mine for seventeen hours. Rescue workers drilled from the side because explosives would collapse the roof. The men kept in touch with relatives via microphone.',
  },
  {
    id: 89, title: 'A slip of the tongue', titleCn: '口误',
    text: [
      'People will do anything to see a free show, even if it is a bad one.',
      'When the news got round that a comedy show would be presented at our local cinema by the P. and U. Bird Seed Company, we all rushed to see it.',
      'We had to queue for hours to get in and there must have been several hundred people present just before the show began.',
      'Unfortunately, the show was one of the dullest we have ever seen.',
      'Those who failed to get in need not have felt disappointed, as many of the artistes who should have appeared did not come.',
      'The only funny things we heard that evening came from the advertiser at the beginning of the programme.',
      'He was obviously very nervous and for some minutes he walked up and down the stage, trying to find the right words.',
      'He finally opened his mouth and said, "The P. and U. Bird Seed Company is proud to present..." Then he suddenly stopped and sat down.'
    ],
    textCn: [
      '人们为了看一场免费的演出什么都愿意做，即使是很糟糕的演出。',
      '当消息传开说P.和U.鸟食公司将在我们当地的电影院演出一场喜剧时，我们都冲去看。',
      '我们不得不排了好几个小时的队才进去，演出开始前那里一定有好几百人。',
      '不幸的是，那是我们看过的最无聊的演出之一。',
      '那些没能进去的人不必感到失望，因为很多本该出场的演员都没有来。',
      '那天晚上我们听到的唯一有趣的事情来自节目开始时的广告商。',
      '他显然非常紧张，有好几分钟他在台上走来走去，试图找到合适的话。',
      '他终于张开嘴说："P.和U.鸟食公司自豪地推出......"然后他突然停了下来，坐下了。'
    ],
    vocab: [
      ['slip', '/slɪp/', '失误'],
      ['comedy', '/ˈkɒmədi/', '喜剧'],
      ['queue', '/kjuː/', '排队'],
      ['dull', '/dʌl/', '无聊的'],
      ['artiste', '/ɑːˈtiːst/', '演员'],
      ['advertiser', '/ˈædvətaɪzə/', '广告商'],
      ['nervous', '/ˈnɜːvəs/', '紧张的']
    ],
    notes: [
      '"get round" 传开。',
      '"need not have done" 本不必做（但做了）。',
      '"walk up and down" 走来走去。'
    ],
    tags: ['情态动词', '定语从句'], difficulty: 3,
    summary: '人们排队看一场免费喜剧演出，但演出非常无聊。广告商非常紧张，说了"P.和U.鸟食公司自豪地推出"后就停住了。',
    summaryEn: 'People queued for hours for a free comedy show that turned out to be very dull. The nervous advertiser began "The P. and U. Bird Seed Company is proud to present..." then sat down.',
  },
  {
    id: 90, title: 'What\'s for supper?', titleCn: '晚饭吃什么？',
    text: [
      'Fish and chips has always been a favourite dish in Britain, but as the oceans have been overfished, fish has become more and more expensive.',
      'So it comes as a surprise to learn that giant fish are terrifying the divers on North Sea oil rigs.',
      'Oil rigs have to be repaired frequently and divers, who often have to work in darkness a hundred feet under water, have been frightened out of their wits by giant fish bumping into them as they work.',
      'Now they have had special cages made to protect them from these monsters.',
      'The fish are not sharks or killer whales, but favourite eating varieties like cod and skate which grow to unnatural sizes, sometimes as much as twelve feet in length.',
      'Three factors have caused these fish to grow so large: the warm water round the hot oil pipes; the plentiful supply of food thrown from the rigs; and the total absence of fishing around the rigs.'
    ],
    textCn: [
      '炸鱼薯条一直是英国人最喜欢的菜，但由于海洋被过度捕捞，鱼变得越来越贵。',
      '所以当得知巨大的鱼正在恐吓北海石油钻井平台上的潜水员时，人们感到很吃惊。',
      '石油钻井平台需要经常维修，潜水员常常不得不在水下一百英尺的黑暗中工作，当巨大的鱼在他们工作时撞到他们时，他们被吓得魂不附体。',
      '现在他们已经定制了特殊的笼子来保护他们免受这些怪物的伤害。',
      '这些鱼不是鲨鱼或虎鲸，而是人们爱吃的品种，如鳕鱼和鳐鱼，它们长到了不自然的尺寸，有时长达十二英尺。',
      '三个因素导致这些鱼长得如此之大：热油管周围的温水、从钻井台上扔下的充足食物、以及钻井台周围完全没有捕捞活动。'
    ],
    vocab: [
      ['dish', '/dɪʃ/', '菜'],
      ['overfish', '/ˌəʊvəˈfɪʃ/', '过度捕捞'],
      ['diver', '/ˈdaɪvə/', '潜水员'],
      ['rig', '/rɪɡ/', '钻井平台'],
      ['wit', '/wɪt/', '智力'],
      ['cage', '/keɪdʒ/', '笼子'],
      ['cod', '/kɒd/', '鳕鱼'],
      ['absence', '/ˈæbsəns/', '缺乏']
    ],
    notes: [
      '"frighten out of one\'s wits" 吓得魂不附体。',
      '"bump into" 撞到。',
      '"protect sb from" 保护某人免受。'
    ],
    tags: ['现在完成时', '被动语态'], difficulty: 3,
    summary: '北海石油钻井平台附近的鱼因温水、充足食物和没有捕捞而长得巨大，经常撞到水下工作的潜水员，他们现在用特制笼子保护自己。',
    summaryEn: 'Giant fish around North Sea oil rigs have been terrifying divers. Three factors caused the fish to grow huge: warm water, abundant food, and no fishing. Special cages now protect the divers.',
  },
  {
    id: 91, title: 'Three men in a basket', titleCn: '三人同篮',
    text: [
      'A pilot noticed a balloon which seemed to be making for a Royal Air Force station nearby.',
      'He informed the station at once, but no one there was able to explain the mystery.',
      'The officer in the control tower was very angry when he heard the news, because balloons can be a great danger to aircraft.',
      'He said that someone might be spying on the station and the pilot was ordered to keep track of the strange object.',
      'The pilot managed to circle the balloon for some time. He could make out three men in a basket under it and one of them was holding a pair of binoculars.',
      'When the balloon was over the station, the pilot saw one of the men taking photographs.',
      'Soon afterwards, the balloon began to descend and it landed near an airfield. The police were called in, but they could not arrest anyone, because the basket contained two Members of Parliament and the Commanding Officer of the station!'
    ],
    textCn: [
      '一个飞行员注意到一个气球似乎正朝附近的皇家空军基地飞去。',
      '他立刻通知了基地，但那里没有人能解释这个谜。',
      '指挥塔里的军官听到这个消息非常生气，因为气球对飞机构成很大的危险。',
      '他说可能有人在窥探基地，飞行员奉命跟踪这个奇怪的物体。',
      '飞行员设法绕着气球飞了一段时间。他辨认出气球下面的篮子里有三个人，其中一人拿着一副望远镜。',
      '当气球飞到基地上空时，飞行员看到其中一人在拍照。',
      '不久之后，气球开始降落，降落在一个机场附近。警察被叫来了，但他们不能逮捕任何人，因为篮子里有两名国会议员和基地的指挥官！'
    ],
    vocab: [
      ['balloon', '/bəˈluːn/', '气球'],
      ['spy', '/spaɪ/', '窥探'],
      ['track', '/træk/', '跟踪'],
      ['binoculars', '/bɪˈnɒkjələz/', '望远镜'],
      ['descend', '/dɪˈsend/', '下降'],
      ['parliament', '/ˈpɑːləmənt/', '议会'],
      ['commanding', '/kəˈmɑːndɪŋ/', '指挥的']
    ],
    notes: [
      '"make for" 朝...移动/前往。',
      '"keep track of" 跟踪。',
      '"make out" 辨认出。'
    ],
    tags: ['被动语态', '定语从句'], difficulty: 3,
    summary: '飞行员发现一个气球飞向空军基地，跟踪后发现篮子里有三人。气球降落后警察来了，但不能逮捕他们，因为里面有两名议员和基地指挥官。',
    summaryEn: 'A pilot tracked a balloon heading for an RAF station. Inside the basket were three men taking photographs. The police couldn\'t arrest them because two were MPs and one was the station\'s Commanding Officer.',
  },
  {
    id: 92, title: 'A noble gangster', titleCn: '一个高尚的歹徒',
    text: [
      'There was a time when the owners of shops and businesses in Chicago had to pay large sums of money to gangsters in return for "protection."',
      'If the money was not paid promptly, the gangsters would quickly put a man out of business by destroying his shop.',
      'One of the most successful "businessmen" in this field was Big Jim Colosimo, who came to Chicago from Italy in 1895.',
      'He opened a small restaurant and soon became rich. By 1920, he owned a number of restaurants and was making a great deal of money.',
      'Despite his wealth, Big Jim was a generous man. He gave large sums of money to the poor and to various charities.',
      'He was also a patron of the arts and helped many young musicians and painters. When he was shot dead in 1920, the whole city mourned his passing.'
    ],
    textCn: [
      '曾经有一段时间，芝加哥的商店和企业老板们不得不向歹徒支付大笔金钱以换取"保护"。',
      '如果不及时付款，歹徒们就会通过毁坏他的商店来迫使一个人破产。',
      '这个领域最成功的"商人"之一是大吉姆·科洛西莫，他于1895年从意大利来到芝加哥。',
      '他开了一家小餐馆，很快就富了。到1920年，他拥有多家餐馆，赚了很多钱。',
      '尽管很富有，大吉姆是一个慷慨的人。他把大笔钱捐给穷人和各种慈善机构。',
      '他还是艺术的赞助人，帮助过许多年轻的音乐家和画家。1920年他被枪杀时，整个城市都为他的去世哀悼。'
    ],
    vocab: [
      ['gangster', '/ˈɡæŋstə/', '歹徒'],
      ['protection', '/prəˈtekʃn/', '保护'],
      ['promptly', '/ˈprɒmptli/', '及时地'],
      ['destroy', '/dɪˈstrɔɪ/', '毁坏'],
      ['generous', '/ˈdʒenərəs/', '慷慨的'],
      ['charity', '/ˈtʃærɪti/', '慈善'],
      ['patron', '/ˈpeɪtrən/', '赞助人'],
      ['mourn', '/mɔːn/', '哀悼']
    ],
    notes: [
      '"in return for" 作为...的回报。',
      '"put out of business" 使破产。',
      '"a great deal of" 大量的。'
    ],
    tags: ['一般过去时', '定语从句'], difficulty: 3,
    summary: '大吉姆·科洛西莫是芝加哥最成功的歹徒之一，他拥有多家餐馆。但他也很慷慨，捐助穷人和艺术，被枪杀后全城哀悼。',
    summaryEn: 'Big Jim Colosimo was a successful gangster in Chicago who owned restaurants. Despite his criminal background, he was generous to the poor and supported the arts. The city mourned when he was shot dead.',
  },
  {
    id: 93, title: 'A noble gangster', titleCn: '一个高尚的歹徒（续）',
    text: [
      'Big Jim\'s story did not end with his death. His legacy continued to influence Chicago for many years.',
      'After his death, a young man named Al Capone took over his operations. Capone was far more ruthless than Big Jim had ever been.',
      'While Big Jim had been content to collect "protection money," Capone wanted to control everything.',
      'He ran illegal gambling halls, sold prohibited alcohol, and eliminated anyone who opposed him.',
      'The police seemed powerless to stop him. By 1929, Capone controlled most of Chicago\'s underworld.',
      'It was not until the government sent a special team of investigators that Capone was finally brought to justice. He was convicted of tax evasion and sent to prison.'
    ],
    textCn: [
      '大吉姆的故事并没有随着他的死亡而结束。他的遗风继续影响了芝加哥很多年。',
      '他死后，一个名叫阿尔·卡彭的年轻人接管了他的业务。卡彭比大吉姆要残忍得多。',
      '大吉姆满足于收取"保护费"，而卡彭则想控制一切。',
      '他经营非法赌场，出售违禁酒，消灭任何反对他的人。',
      '警察似乎无力阻止他。到1929年，卡彭控制了芝加哥大部分的地下世界。',
      '直到政府派出一个特别调查小组，卡彭才最终被绳之以法。他被判逃税罪入狱。'
    ],
    vocab: [
      ['legacy', '/ˈleɡəsi/', '遗产'],
      ['ruthless', '/ˈruːθlɪs/', '残忍的'],
      ['illegal', '/ɪˈliːɡl/', '非法的'],
      ['prohibited', '/prəˈhɪbɪtɪd/', '禁止的'],
      ['eliminate', '/ɪˈlɪmɪneɪt/', '消灭'],
      ['underworld', '/ˈʌndəwɜːld/', '地下世界'],
      ['convict', '/kənˈvɪkt/', '定罪'],
      ['evasion', '/ɪˈveɪʒn/', '逃税']
    ],
    notes: [
      '"take over" 接管。',
      '"be content to do" 满足于做某事。',
      '"bring to justice" 绳之以法。'
    ],
    tags: ['被动语态', '过去完成时'], difficulty: 4,
    summary: '大吉姆死后，更残忍的卡彭接管了芝加哥地下世界，经营非法生意。直到政府派出特别调查组，卡彭才因逃税被判入狱。',
    summaryEn: 'After Big Jim\'s death, the more ruthless Al Capone took over Chicago\'s underworld. He was finally convicted of tax evasion and sent to prison by a special government team.',
  },
  {
    id: 94, title: 'Asking for trouble', titleCn: '自找麻烦',
    text: [
      'It must have been about two in the morning when I returned home. I tried to wake up my wife by ringing the doorbell, but she was fast asleep.',
      'I got a ladder from the shed in the garden, put it against the wall, and began climbing towards the bedroom window.',
      'I was almost there when a sarcastic voice below said, "I don\'t think the windows need cleaning at this time of the night."',
      'I looked down and nearly fell off the ladder when I saw a policeman.',
      'I immediately regretted answering in the way I did, but I said, "I enjoy cleaning windows at night."',
      '"So do I," answered the policeman in the same tone. "Excuse my interrupting you. I hate to interrupt a man when he\'s busy working, but would you mind coming with me to the station?"',
      '"Well, I\'d prefer to stay here," I said. "You see, I\'ve forgotten my key." "Your what?" he called. "My key," I shouted. Fortunately, the shouting woke up my wife who opened the window just as the policeman had started to climb towards me.'
    ],
    textCn: [
      '我回到家时一定是凌晨两点左右了。我按门铃想叫醒妻子，但她睡得很沉。',
      '我从花园的棚子里拿来一架梯子，靠在墙上，开始向卧室窗户爬去。',
      '快到窗口时，下面一个讽刺的声音说："我想窗户不需要在晚上这个时候擦吧。"',
      '我向下看去，看到一个警察时差点从梯子上摔下来。',
      '我立刻后悔那样回答了，但我说："我喜欢在晚上擦窗户。"',
      '"我也是，"警察用同样的语气回答。"请原谅我打断你。我不喜欢在别人忙的时候打扰他，但你介意跟我去一趟警察局吗？"',
      '"嗯，我更愿意待在这里，"我说。"你看，我忘了带钥匙。""你的什么？"他喊道。"我的钥匙，"我喊道。幸运的是，喊声叫醒了我妻子，她打开了窗户，就在这时警察已经开始朝我爬上来了。'
    ],
    vocab: [
      ['fast', '/fɑːst/', '熟的（指睡眠）'],
      ['ladder', '/ˈlædə/', '梯子'],
      ['sarcastic', '/sɑːˈkæstɪk/', '讽刺的'],
      ['tone', '/təʊn/', '语气'],
      ['interrupt', '/ˌɪntəˈrʌpt/', '打断'],
      ['prefer', '/prɪˈfɜː/', '更喜欢']
    ],
    notes: [
      '"fast asleep" 熟睡。',
      '"fall off" 从...摔下来。',
      '"would you mind doing" 你介意做某事吗？'
    ],
    tags: ['情态动词', '间接引语'], difficulty: 3,
    summary: '作者凌晨回家忘带钥匙，想从梯子爬进卧室窗户，被警察发现。警察讽刺地说窗户不需要在夜里擦，差点把他带到警察局。',
    summaryEn: 'The author came home at 2 a.m. without his key and tried to climb a ladder to his bedroom window. A policeman spotted him and sarcastically said windows don\'t need cleaning at night.',
  },
  {
    id: 95, title: 'A noble gangster', titleCn: '一个高尚的歹徒（三）',
    text: [
      'The story of Big Jim Colosimo has become legendary in Chicago. His life has been the subject of books, films, and television programmes.',
      'Historians still debate whether he was truly a "noble" gangster or simply a clever businessman who knew how to use the system.',
      'What is certain is that he changed the way business was done in Chicago during the early twentieth century.',
      'His restaurants were among the finest in the city and attracted customers from all walks of life.',
      'Politicians, actors, and even police officers were among his regular customers. Some people believe that his generosity was just a way of buying influence.',
      'Others argue that he genuinely cared about the poor and the arts. Whatever the truth, Big Jim Colosimo remains one of the most fascinating figures in American criminal history.'
    ],
    textCn: [
      '大吉姆·科洛西莫的故事在芝加哥已经成为传奇。他的一生一直是书籍、电影和电视节目的主题。',
      '历史学家们仍在争论他是否真的是一个"高尚"的歹徒，还是只是一个懂得利用制度的聪明商人。',
      '可以肯定的是，他改变了二十世纪初芝加哥做生意的方式。',
      '他的餐馆是城里最好的餐馆之一，吸引了各行各业的顾客。',
      '政客、演员甚至警察都是他的常客。有些人认为他的慷慨只是一种获取影响力的手段。',
      '另一些人则认为他是真心关心穷人和艺术。无论真相如何，大吉姆·科洛西莫仍然是美国犯罪史上最迷人的人物之一。'
    ],
    vocab: [
      ['legendary', '/ˈledʒəndri/', '传奇的'],
      ['historian', '/hɪˈstɔːriən/', '历史学家'],
      ['debate', '/dɪˈbeɪt/', '争论'],
      ['genuinely', '/ˈdʒenjuɪnli/', '真正地'],
      ['influence', '/ˈɪnfluəns/', '影响力'],
      ['fascinating', '/ˈfæsɪneɪtɪŋ/', '迷人的'],
      ['figure', '/ˈfɪɡə/', '人物'],
      ['criminal', '/ˈkrɪmɪnl/', '犯罪的']
    ],
    notes: [
      '"all walks of life" 各行各业。',
      '"what is certain is that" 可以肯定的是。',
      '"whatever the truth" 无论真相如何。'
    ],
    tags: ['被动语态', '名词性从句'], difficulty: 4,
    summary: '大吉姆·科洛西莫的故事已成为传奇。历史学家争论他是高尚的歹徒还是聪明的商人，但他无疑是美国犯罪史上最迷人的人物之一。',
    summaryEn: 'Big Jim Colosimo\'s story has become legendary. Historians debate whether he was a noble gangster or a clever businessman. He remains one of the most fascinating figures in American criminal history.',
  },
  {
    id: 96, title: 'Asking for trouble', titleCn: '自找麻烦（续）',
    text: [
      'The policeman was climbing up the ladder when my wife opened the window. He stopped and looked up at her.',
      '"Is this your husband, madam?" the policeman asked. "Yes, it is," my wife answered.',
      '"I\'m afraid I\'ll have to ask him to come with me to the station, madam," the policeman said.',
      '"But why?" my wife asked. "He was trying to break into his own house."',
      '"I know that, madam," the policeman replied, "but he refused to come with me when I asked him."',
      '"He\'s always been a bit stubborn," my wife said. "He\'s also very forgetful. He left his keys on the kitchen table this morning."',
      '"Well, in that case," the policeman said, "I suppose I\'d better let him go. But tell him to be more careful in future."',
      '"I will," my wife said. "And thank you for being so understanding." The policeman climbed back down the ladder and walked away. I climbed into the bedroom and went straight to bed.'
    ],
    textCn: [
      '警察正在爬梯子时我妻子打开了窗户。他停下来抬头看她。',
      '"这是您丈夫吗，夫人？"警察问。"是的，"妻子回答。',
      '"恐怕我得请他跟我去一趟警察局，夫人，"警察说。',
      '"但为什么？"妻子问。"他只是在试图进入自己的房子。"',
      '"我知道，夫人，"警察回答说，"但当我请他跟我走时他拒绝了。"',
      '"他一直有点固执，"妻子说。"他还很健忘。今天早上他把钥匙忘在厨房桌子上了。"',
      '"好吧，既然这样，"警察说，"我想我最好放了他。但告诉他以后要小心点。"',
      '"我会的，"妻子说。"谢谢你的理解。"警察从梯子上爬下来走了。我爬进卧室直接上了床。'
    ],
    vocab: [
      ['husband', '/ˈhʌzbənd/', '丈夫'],
      ['break into', '/breɪk ˈɪntuː/', '闯入'],
      ['stubborn', '/ˈstʌbən/', '固执的'],
      ['forgetful', '/fəˈɡetfl/', '健忘的'],
      ['suppose', '/səˈpəʊz/', '认为'],
      ['understanding', '/ˌʌndəˈstændɪŋ/', '理解的']
    ],
    notes: [
      '"break into" 闯入。',
      '"in that case" 既然那样。',
      '"I\'d better" 我最好（had better的缩写）。'
    ],
    tags: ['情态动词', '间接引语'], difficulty: 3,
    summary: '警察在梯子上时妻子开了窗，解释说丈夫只是忘带钥匙想回家。妻子说他很固执又健忘，警察最后放了他。',
    summaryEn: 'When the author\'s wife opened the window, the policeman asked if this was her husband. She explained he was forgetful and had left his keys inside. The policeman let him go.',
  },
];

function lessonToTs(l) {
  const vocabStr = l.vocab.map(v => `      { word: '${esc(v[0])}', phonetic: '${esc(v[1])}', meaning: '${esc(v[2])}' }`).join(',\n');
  const notesStr = l.notes.map(n => `      '${esc(n)}'`).join(',\n');
  const tagsStr = l.tags.map(t => `'${esc(t)}'`).join(', ');
  return `  {
    id: ${l.id},
    title: '${esc(l.title)}',
    titleCn: '${esc(l.titleCn)}',
    text: [
${l.text.map(t => `      '${esc(t)}'`).join(',\n')}
    ],
    textCn: [
${l.textCn.map(t => `      '${esc(t)}'`).join(',\n')}
    ],
    vocabulary: [
${vocabStr}
    ],
    notes: [
${notesStr}
    ],
    tags: [${tagsStr}],
    difficulty: ${l.difficulty},
    summary: '${esc(l.summary)}',
    summaryEn: '${esc(l.summaryEn)}',
  }`;
}

let insertPos = content.indexOf(']\r\n\r\nexport default book2');
if (insertPos === -1) insertPos = content.indexOf(']\n\nexport default book2');
if (insertPos === -1) { const ep = content.lastIndexOf('export default book2'); insertPos = content.lastIndexOf(']', ep); }
if (insertPos === -1) { console.error('Could not find insertion point'); process.exit(1); }
const newLessons = lessons.map(lessonToTs).join(',\n');
content = content.slice(0, insertPos) + ',\n' + newLessons + '\n' + content.slice(insertPos);
fs.writeFileSync(filePath, content, 'utf-8');
console.log(`Added ${lessons.length} lessons to book2.ts`);