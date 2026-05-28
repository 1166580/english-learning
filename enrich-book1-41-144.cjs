const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'src', 'data', 'book1.ts');
let content = fs.readFileSync(filePath, 'utf-8');

const esc = s => s.replace(/\\/g, '\\\\').replace(/'/g, "\\'");

// Book 1 lessons 41-144 data
const lessons = [
  { id:41, title:'Penny\'s bag', titleCn:'彭妮的包',
    text:['Is that bag heavy, Penny?','Not very.','Here! Put it on this chair.','What\'s in it?','A piece of cheese.','A loaf of bread.','A bar of chocolate.','A bottle of milk.','A pound of sugar.','Half a pound of coffee.','A quarter of a pound of tea.','And a tin of tobacco.','Is that tin of tobacco for me?','Well, it\'s certainly not for me!'],
    textCn:['那个包重吗，彭妮？','不太重。','给你！放在这把椅子上。','里面有什么？','一块奶酪。','一条面包。','一块巧克力。','一瓶牛奶。','一磅糖。','半磅咖啡。','四分之一磅茶叶。','还有一听烟丝。','那听烟丝是给我的吗？','当然不是给我的！'],
    vocab:[['heavy','/ˈhevi/','重的'],['put','/pʊt/','放'],['chair','/tʃeə/','椅子'],['cheese','/tʃiːz/','奶酪'],['bread','/bred/','面包'],['chocolate','/ˈtʃɒklət/','巧克力'],['milk','/mɪlk/','牛奶'],['sugar','/ˈʃʊɡə/','糖'],['coffee','/ˈkɒfi/','咖啡'],['tea','/tiː/','茶'],['tobacco','/təˈbækəʊ/','烟丝'],['certainly','/ˈsɜːtnli/','当然']],
    notes:['"Not very" 是 "It\'s not very heavy" 的省略形式。','"a piece of" 一块，"a loaf of" 一条（面包），"a bar of" 一块（条状物）。','"a tin of" 一听，用于罐装物品。','"certainly not" 当然不是，语气较强。'],
    tags:['不可数名词','量词'], difficulty:1,
    summary:'彭妮的包里装满了各种食物和日用品，用不同的量词来计量不可数名词。',
    summaryEn:'Penny\'s bag contains various foods measured with different quantifiers for uncountable nouns.' },
  { id:42, title:'Is there a... in/on that...?', titleCn:'在那个……里/上有……吗？',
    text:['Is there any bread here?','Yes, there is. There\'s some on the table.','Is there a hammer here?','Yes, there is. There\'s one behind the box.','Is there any chocolate here?','Yes, there is. There\'s some on the desk.','Is there a cup here?','Yes, there is. There\'s one on the shelf.'],
    textCn:['这里有面包吗？','有的。桌子上有一些。','这里有锤子吗？','有的。盒子后面有一把。','这里有巧克力吗？','有的。书桌上有一些。','这里有杯子吗？','有的。架子上有一个。'],
    vocab:[['bread','/bred/','面包'],['hammer','/ˈhæmə/','锤子'],['behind','/bɪˈhaɪnd/','在……后面'],['shelf','/ʃelf/','架子'],['some','/sʌm/','一些'],['any','/eni/','一些（疑问/否定）']],
    notes:['"Is there any...?" 用于询问不可数名词。','"Is there a...?" 用于询问可数名词单数。','"some" 用于肯定句，"any" 用于疑问句和否定句。'],
    tags:['There be句型','some/any'], difficulty:1,
    summary:'练习There be句型的一般疑问句，区分some和any的用法。',
    summaryEn:'Practice Yes/No questions with "There be" and learn the difference between some and any.' },
  { id:43, title:'Hurry up!', titleCn:'快点！',
    text:['Can you make the tea, Sam?','Yes, of course I can, Penny.','Is there any water in this kettle?','Yes, there is.','Where\'s the tea?','It\'s over there, behind the teapot.','Can you see it?','I can see the teapot, but I can\'t see any tea.','There it is! It\'s in front of you.','Ah yes, I can see it now.','Where are the cups?','There are some in the cupboard.','Can you find them?','Yes. Here they are.','Hurry up, Sam! The kettle\'s boiling!'],
    textCn:['你会沏茶吗，萨姆？','当然会，彭妮。','这个壶里有水吗？','有。','茶叶在哪里？','在那边，茶壶后面。','你能看见吗？','我能看到茶壶，但看不到茶叶。','就在那儿！就在你前面。','啊，是的，我现在看到了。','杯子在哪里？','碗柜里有几个。','你能找到吗？','找到了。在这儿呢。','快点，萨姆！水开了！'],
    vocab:[['make','/meɪk/','沏（茶）'],['kettle','/ˈketl/','水壶'],['teapot','/ˈtiːpɒt/','茶壶'],['cupboard','/ˈkʌbəd/','碗柜'],['find','/faɪnd/','找到'],['hurry','/ˈhʌri/','赶紧'],['boil','/bɔɪl/','沸腾']],
    notes:['"make the tea" 沏茶。make + 食物 = 准备食物。','"over there" 在那边。','"in front of" 在……前面（外部）。','"the kettle\'s boiling" 水开了。boil = 沸腾。'],
    tags:['can的用法','方位介词'], difficulty:1,
    summary:'萨姆在厨房帮彭妮沏茶，练习can引导的一般疑问句和方位介词。',
    summaryEn:'Sam makes tea in the kitchen, practicing can questions and prepositions of place.' },
  { id:44, title:'Are there any...?', titleCn:'有一些……吗？',
    text:['Are there any cups here?','Yes, there are. There are some on the table.','Are there any knives here?','Yes, there are. There are some on the plate.','Are there any newspapers here?','Yes, there are. There are some on the shelf.','Are there any bottles here?','Yes, there are. There are some on the dressing table.'],
    textCn:['这里有一些杯子吗？','有。桌子上有一些。','这里有一些刀子吗？','有。盘子上有一些。','这里有一些报纸吗？','有。架子上有一些。','这里有一些瓶子吗？','有。梳妆台上有一些。'],
    vocab:[['knife','/naɪf/','刀'],['plate','/pleɪt/','盘子'],['newspaper','/ˈnjuːzpeɪpə/','报纸'],['bottle','/ˈbɒtl/','瓶子'],['dressing table','/ˈdresɪŋ ˈteɪbl/','梳妆台']],
    notes:['"Are there any...?" 用于询问可数名词复数。','knife的复数是knives（f变ves）。','"some" 在疑问句中表示期望肯定回答。'],
    tags:['There be复数','可数名词复数'], difficulty:1,
    summary:'练习There be句型询问可数名词复数。',
    summaryEn:'Practice "Are there any...?" questions with countable plural nouns.' },
  { id:45, title:'The boss\'s letter', titleCn:'老板的信',
    text:['Can you come here a minute please, Bob?','Yes, sir?','Where\'s Pamela?','She\'s next door. She\'s in her office, sir.','Can she type this letter for me? Ask her please.','Yes, sir.','Can you type this letter for the boss please, Pamela?','Yes, of course I can.','Here you are.','Thank you, Bob.','Bob!','Yes? What\'s the matter?','I can\'t type this letter.','I can\'t read it! The boss\'s handwriting is terrible!'],
    textCn:['你能过来一下吗，鲍勃？','好的，先生？','帕梅拉在哪里？','她在隔壁。她在她的办公室里，先生。','她能帮我打这封信吗？请去问她。','好的，先生。','你能帮老板打这封信吗，帕梅拉？','当然可以。','给你。','谢谢你，鲍勃。','鲍勃！','怎么了？有什么事？','我打不了这封信。','我读不懂！老板的字太潦草了！'],
    vocab:[['boss','/bɒs/','老板'],['letter','/ˈletə/','信'],['minute','/ˈmɪnɪt/','分钟'],['next door','/nekst dɔːr/','隔壁'],['office','/ˈɒfɪs/','办公室'],['type','/taɪp/','打字'],['handwriting','/ˈhændraɪtɪŋ/','笔迹'],['terrible','/ˈterəbl/','糟糕的']],
    notes:['"a minute" 一会儿，用于请求。','"What\'s the matter?" 怎么了？','"the boss\'s handwriting" 老板的笔迹。名词所有格加\'s。'],
    tags:['名词所有格','can请求'], difficulty:2,
    summary:'帕梅拉无法帮老板打信，因为老板的字迹太潦草了。',
    summaryEn:'Pamela cannot type the boss\'s letter because his handwriting is terrible.' },
  { id:46, title:'Can you...?', titleCn:'你能……吗？',
    text:['Can you put on your coat?','Yes, I can.','What can you do?','I can put on my coat.','Can you come here?','Yes, I can.','What can you do?','I can come here.','Can you see that aeroplane?','Yes, I can.','What can you do?','I can see that aeroplane.'],
    textCn:['你能穿上外套吗？','是的，我能。','你能做什么？','我能穿上外套。','你能过来吗？','是的，我能。','你能做什么？','我能过来。','你能看见那架飞机吗？','是的，我能。','你能做什么？','我能看见那架飞机。'],
    vocab:[['put on','/pʊt ɒn/','穿上'],['aeroplane','/ˈeərəpleɪn/','飞机'],['see','/siː/','看见'],['come','/kʌm/','来']],
    notes:['"put on" 穿上，是动词短语。反义词是 "take off"（脱下）。','"Can you...?" 是请求或询问能力的常用句型。'],
    tags:['can能力','动词短语'], difficulty:1,
    summary:'练习用can表达能力的各种句型。',
    summaryEn:'Practice using "can" to express ability in various sentence patterns.' },
  { id:47, title:'A cup of coffee', titleCn:'一杯咖啡',
    text:['Do you like coffee, Ann?','Yes, I do.','Do you want a cup?','Yes, please, Christine.','Do you want any sugar?','Yes, please.','Do you want any milk?','No, thank you. I don\'t like milk in my coffee. I like black coffee.','Do you like biscuits?','Yes, I do.','Do you want one?','Yes, please.'],
    textCn:['你喜欢咖啡吗，安？','是的，喜欢。','你想要一杯吗？','好的，谢谢，克里斯汀。','你要加糖吗？','好的，谢谢。','你要加牛奶吗？','不了，谢谢。我不喜欢在咖啡里加牛奶。我喜欢黑咖啡。','你喜欢饼干吗？','喜欢。','你想要一块吗？','好的，谢谢。'],
    vocab:[['coffee','/ˈkɒfi/','咖啡'],['want','/wɒnt/','想要'],['sugar','/ˈʃʊɡə/','糖'],['biscuit','/ˈbɪskɪt/','饼干'],['black coffee','/blæk ˈkɒfi/','黑咖啡']],
    notes:['"Do you like...?" 询问喜好。','"Yes, please." 接受时的礼貌回答。','"No, thank you." 拒绝时的礼貌回答。','"black coffee" 不加牛奶的咖啡。'],
    tags:['Do you like句型','礼貌用语'], difficulty:1,
    summary:'安和克里斯汀的对话，练习询问喜好和礼貌回应。',
    summaryEn:'Ann and Christine discuss preferences, practicing "Do you like...?" and polite responses.' },
  { id:48, title:'Do you like...?', titleCn:'你喜欢……吗？',
    text:['Do you like eggs?','Yes, I do. I like eggs, but I don\'t want one.','Do you like butter?','Yes, I do. I like butter, but I don\'t want any.','Do you like honey?','Yes, I do. I like honey, but I don\'t want any.','Do you like bananas?','Yes, I do. I like bananas, but I don\'t want one.','Do you like jam?','Yes, I do. I like jam, but I don\'t want any.','Do you like oranges?','Yes, I do. I like oranges, but I don\'t want one.'],
    textCn:['你喜欢鸡蛋吗？','喜欢。我喜欢鸡蛋，但我现在不想要。','你喜欢黄油吗？','喜欢。我喜欢黄油，但我现在不想要。','你喜欢蜂蜜吗？','喜欢。我喜欢蜂蜜，但我现在不想要。','你喜欢香蕉吗？','喜欢。我喜欢香蕉，但我现在不想要。','你喜欢果酱吗？','喜欢。我喜欢果酱，但我现在不想要。','你喜欢橙子吗？','喜欢。我喜欢橙子，但我现在不想要。'],
    vocab:[['egg','/eɡ/','鸡蛋'],['butter','/ˈbʌtə/','黄油'],['honey','/ˈhʌni/','蜂蜜'],['banana','/bəˈnɑːnə/','香蕉'],['jam','/dʒæm/','果酱'],['orange','/ˈɒrɪndʒ/','橙子']],
    notes:['"I like..., but I don\'t want..." 表示喜欢但暂时不想要。','注意可数和不可数名词的区别：eggs/bananas/oranges（可数），butter/honey/jam（不可数）。'],
    tags:['可数/不可数名词','like/want'], difficulty:1,
    summary:'练习区分可数和不可数名词，以及like和want的用法。',
    summaryEn:'Practice distinguishing countable and uncountable nouns with like and want.' },
  { id:49, title:'At the butcher\'s', titleCn:'在肉店',
    text:['Do you want any meat today, Mrs. Bird?','Yes, please.','Do you want beef or lamb?','Beef, please.','This lamb\'s very good.','I like lamb, but my husband doesn\'t.','What about some steak? This is a nice piece.','Give me that piece, then.','Do you want a chicken, Mrs. Bird? They\'re very nice.','No, thank you.','My husband likes steak, but he doesn\'t like chicken.','To tell you the truth, Mrs. Bird, I don\'t like chicken either!'],
    textCn:['您今天要买肉吗，伯德太太？','好的。','您要牛肉还是羊肉？','请来点牛肉。','这个羊肉很好。','我喜欢羊肉，但我丈夫不喜欢。','来点牛排怎么样？这块很好。','那就给我那块吧。','您要一只鸡吗，伯德太太？鸡很好吃。','不了，谢谢。','我丈夫喜欢牛排，但他不喜欢鸡肉。','说实话，伯德太太，我也不喜欢鸡肉！'],
    vocab:[['butcher','/ˈbʊtʃə/','肉店'],['meat','/miːt/','肉'],['beef','/biːf/','牛肉'],['lamb','/læm/','羊肉'],['steak','/steɪk/','牛排'],['husband','/ˈhʌzbənd/','丈夫'],['chicken','/ˈtʃɪkɪn/','鸡肉'],['truth','/truːθ/','真相']],
    notes:['"at the butcher\'s" 在肉店。\'s表示店铺。','"What about...?" 用于提建议。','"To tell you the truth" 说实话。','"either" 也不，用于否定句末尾。'],
    tags:['名词所有格表店铺','either用法'], difficulty:2,
    summary:'在肉店里，伯德太太买肉，练习选择疑问句和否定句中的either。',
    summaryEn:'Mrs. Bird buys meat at the butcher\'s, practicing alternative questions and "either" in negative sentences.' },
];

// Build insertion string
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

console.log(`Generated ${lessons.length} lessons (ids: ${lessons[0].id}-${lessons[lessons.length-1].id})`);
console.log('First lesson:', lessons[0].title);
console.log('Last lesson:', lessons[lessons.length-1].title);
