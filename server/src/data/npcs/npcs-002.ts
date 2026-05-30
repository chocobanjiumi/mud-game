import type { NpcDef } from '@game/shared';

export const NPCS_PART_002: Record<string, NpcDef> = {
ranger_instructor: {
    id: 'ranger_instructor',
    name: '遊俠教練',
    alias: 'ranger',
    title: '遊俠導師',
    description: '一個膚色黝黑、身材精瘦的青年男子，穿著一身墨綠色的皮甲，上面沾著草葉和泥土的痕跡。' +
      '他靠在牆邊，嘴裡叼著一根草莖，眼神慵懶卻透著機敏。背上斜掛一把樸素的長弓，箭筒裡的箭羽是鷹隼的翎毛。' +
      '他的左手腕上纏著一條編織的藤蔓手環，仔細看會發現那藤蔓還是活的，偶爾會微微蠕動。',
    roomId: 'class_change_hall',
    type: 'class_trainer',
    classToTeach: 'ranger',
    dialogue: [
      {
        id: 'greeting',
        text: '嘿，你的步伐不錯嘛——像林間的小鹿，有點靈氣但還不夠沉穩。想成為遊俠？' +
          '就像風中的箭一樣自由……速度與精準，就是我們的信條。',
        options: [
          { text: '我想成為遊俠！', nextId: 'class_change_check' },
          { text: '告訴我遊俠的特色。', nextId: 'class_info' },
          { text: '遊俠之後可以轉什麼？', nextId: 'advanced_info' },
          { text: '有什麼練功的建議嗎？', nextId: 'training_advice' },
          { text: '教練，你是怎麼成為遊俠的？', nextId: 'personal_story' },
          { text: '暫時不了。', nextId: 'farewell' },
        ],
      },
      {
        id: 'class_info',
        text: '遊俠啊，怎麼說呢——就像一陣穿過樹梢的風，抓不住但無處不在。' +
          '遊俠是敏捷型職業，高閃避高暴擊。精準射擊百發百中，快速移動讓敵人追不上。' +
          '還能用毒箭和陷阱來消耗敵人。轉職會獲得敏捷+8、力量+2、體質+1、幸運+1的加成。' +
          '屬性成長嘛，敏捷為王，幸運次之。',
        options: [
          { text: '技能樹是什麼樣的？', nextId: 'skill_tree_detail' },
          { text: '就是它了，轉職遊俠！', nextId: 'class_change_check' },
          { text: '我再想想。', nextId: 'farewell' },
        ],
      },
      {
        id: 'skill_tree_detail',
        text: '嘿嘿，這個我喜歡聊。遊俠的技能就像森林裡的三條小徑，條條通幽：' +
          '「射擊系」——精準射擊、多重箭、穿透箭，遠程輸出的核心；' +
          '「陷阱系」——捕獸夾、毒霧陷阱、爆炸陷阱，打獵和打架都好用；' +
          '「野性系」——鷹眼、疾風步、自然治癒，提升你的生存和偵察能力。' +
          '聽聽森林在說什麼——它會告訴你該走哪條路。',
        options: [
          { text: '遊俠的戰鬥方式呢？', nextId: 'combat_style' },
          { text: '好，我要轉遊俠！', nextId: 'class_change_check' },
          { text: '我再考慮。', nextId: 'farewell' },
        ],
      },
      {
        id: 'combat_style',
        text: '遊俠的戰鬥方式？簡單——不被打到就行了。哈哈，開玩笑的，但也不全是。' +
          '保持距離，用射擊消耗敵人的血量。如果敵人靠近，用陷阱和疾風步拉開距離。' +
          '遊俠最大的優勢是先手——在敵人發現你之前，你的箭已經射出去了。' +
          '單打獨鬥我們是最強的，因為沒人追得上我們。就像河裡的魚，你看得到但抓不住。',
        options: [
          { text: '我要轉職遊俠！', nextId: 'class_change_check' },
          { text: '二轉有哪些路線？', nextId: 'advanced_info' },
          { text: '明白了。', nextId: 'farewell' },
        ],
      },
      {
        id: 'advanced_info',
        text: '遊俠有三條專精道路，就像森林裡的三條分岔路，各通向不同的風景：' +
          '「神射手」——遠程爆發，精準狙殺，一箭定江山；' +
          '「刺客」——潛行暗殺，單體爆發，無聲無息；' +
          '「馴獸師」——召喚夥伴，人寵協同作戰，永遠不孤單。',
        options: [
          { text: '詳細比較一下三條路線？', nextId: 'advanced_compare' },
          { text: '我要成為遊俠！', nextId: 'class_change_check' },
          { text: '容我考慮一下。', nextId: 'farewell' },
        ],
      },
      {
        id: 'advanced_compare',
        text: '好嘞，讓我像導遊一樣帶你逛逛這三條路。「神射手」——站得遠遠的，一箭一個，爽快！' +
          '缺點是近身就廢了，而且對移動目標的命中率要靠操作。喜歡狙擊的人首選。' +
          '「刺客」——從暗影中出擊，一擊必殺，超級帥！但如果一擊沒殺死……就有點尷尬了。適合有耐心蹲伏的人。' +
          '「馴獸師」——你會有一隻忠誠的夥伴，可以是狼、鷹甚至熊！練級最輕鬆，適合喜歡動物的人。' +
          '我個人嘛？我三條路都走過一點，哈哈——遊俠就是要自由嘛。',
        options: [
          { text: '太棒了，轉職遊俠！', nextId: 'class_change_check' },
          { text: '有練功建議嗎？', nextId: 'training_advice' },
          { text: '我再想想。', nextId: 'farewell' },
        ],
      },
      {
        id: 'training_advice',
        text: '練功建議啊？最重要的一條——走出去。遊俠不是在訓練場練出來的，是在荒野中磨出來的。' +
          '10到15級去翠綠平原打野狼，練習移動中射擊。記住，站著不動的遊俠不是好遊俠。' +
          '15到20級去向日葵田和林間空地，學習布置陷阱和利用地形。哥布林是很好的練習對象——牠們夠笨但數量多。' +
          '20級以上去暗影森林，那裡才是遊俠的真正課堂。裝備的話，弓是命根子，到老獵人那邊買把好弓。' +
          '皮甲就好，重甲會影響你的速度——對遊俠來說，速度就是生命。',
        options: [
          { text: '教練的話我記住了！', nextId: 'farewell' },
          { text: '我要轉職遊俠！', nextId: 'class_change_check' },
        ],
      },
      {
        id: 'personal_story',
        text: '我啊？嘿嘿，你還是第一個問我這個的。我從小在暗影森林裡長大，是森林裡的精靈把我養大的。' +
          '沒有父母，不知道自己從哪來，但森林就是我的家。十歲那年我射下了第一隻鷹——然後哭了一整天。',
        options: [
          { text: '後來呢？', nextId: 'personal_story_2' },
          { text: '和精靈一起長大？好酷……', nextId: 'farewell' },
        ],
      },
      {
        id: 'personal_story_2',
        text: '後來精靈們告訴我，要真正理解森林，就要走出去看看森林以外的世界。所以我離開了。' +
          '在外面闖蕩了十年，走遍了大陸的每一個角落。然後我回來了，來到這裡教人成為遊俠。' +
          '因為我發現——最自由的人，是有能力保護自己所珍惜的東西的人。' +
          '嘿，別看我這麼隨便的樣子，我可是認真的哦。就像風看起來無形，但它能吹動整片森林。',
        options: [
          { text: '教練，我要成為像你一樣的遊俠！', nextId: 'class_change_check' },
          { text: '謝謝你告訴我這些。', nextId: 'farewell' },
        ],
      },
      {
        id: 'class_change_check',
        text: '來，射一箭讓我看看你的準頭——對準那邊牆上的蘋果。放輕鬆，像呼吸一樣自然。',
        action: { type: 'class_change', data: { classId: 'ranger' } },
        options: [
          { text: '多謝教練！', nextId: 'farewell' },
        ],
      },
      {
        id: 'farewell',
        text: '風是自由的，遊俠也是。去吧，像風一樣奔跑，像鷹一樣觀察。記住——森林永遠歡迎你回來。',
      },
    ],
    guardianHints: {
      creature: '遊俠教練的鷹眼比你想像的更敏銳——他已經注意到遠處潛伏的危險。',
      treasure: '教練的箭筒裡有一支箭頭發光的特殊箭矢，那不是普通的箭。',
      spirit: '遊俠教練曾在暗影森林中獨自生活了十年，他與森林的精靈有著不為人知的約定。',
    },
  },

temple_priest: {
    id: 'temple_priest',
    name: '神殿祭司',
    alias: 'priest',
    title: '祭司導師',
    description: '一位身著潔白聖袍的溫柔女性，聖袍上以金線繡著太陽與星辰的圖案，在光線下熠熠生輝。' +
      '她的面容平和而慈祥，淺褐色的長髮上戴著一頂簡樸的銀質頭冠，嵌著一顆溫潤的月光石。' +
      '她的雙手交疊在胸前，指尖總是散發著淡淡的金色光暈，彷彿隨時準備治癒每一個靠近的傷者。',
    roomId: 'class_change_hall',
    type: 'class_trainer',
    classToTeach: 'priest',
    dialogue: [
      {
        id: 'greeting',
        text: '願神光庇佑你，旅人。我是神殿的祭司。我感受到你心中有一份溫柔的力量……' +
          '你是否聽到了聖光的召喚？每一個來到這裡的人，都是被指引而來的。',
        options: [
          { text: '我想成為祭司！', nextId: 'class_change_check' },
          { text: '告訴我祭司的特色。', nextId: 'class_info' },
          { text: '祭司之後可以轉什麼？', nextId: 'advanced_info' },
          { text: '有什麼練功的建議嗎？', nextId: 'training_advice' },
          { text: '祭司大人，能聽聽您的故事嗎？', nextId: 'personal_story' },
          { text: '暫時不了。', nextId: 'farewell' },
        ],
      },
      {
        id: 'class_info',
        text: '祭司是治療與輔助的職業，是隊伍中不可或缺的守護者。每一個生命都值得被守護——這是祭司的信念。' +
          '你將學會「治癒」恢復同伴的生命、「淨化」解除負面狀態、「祝福」提升隊友的能力。' +
          '轉職會獲得智力+5、體質+3、幸運+3、敏捷+1的加成。屬性成長以智力和體質為主。',
        options: [
          { text: '技能樹是什麼樣的？', nextId: 'skill_tree_detail' },
          { text: '我願意走這條路，轉職祭司！', nextId: 'class_change_check' },
          { text: '讓我再想想。', nextId: 'farewell' },
        ],
      },
      {
        id: 'skill_tree_detail',
        text: '願我能為你點亮前路。祭司的技能分為三個聖典：' +
          '「治癒聖典」——治癒術、群體治療、復活術，是守護生命的根本；' +
          '「祝福聖典」——祝福、神聖護盾、生命連結，強化隊友的能力與防禦；' +
          '「審判聖典」——聖光彈、神聖懲戒、聖光爆發，即使是祭司也有制裁邪惡的力量。' +
          '每一個技能都承載著慈悲與力量，選擇哪條路，就看你想如何守護你珍視的人。',
        options: [
          { text: '祭司在戰鬥中怎麼定位？', nextId: 'combat_style' },
          { text: '我要成為祭司！', nextId: 'class_change_check' },
          { text: '我再考慮。', nextId: 'farewell' },
        ],
      },
      {
        id: 'combat_style',
        text: '祭司的戰鬥定位是隊伍的生命線。你不需要站在最前面，但你要看到每一個人。' +
          '優先保證坦克的血量，然後注意全隊的狀態——中毒、詛咒、虛弱，都需要你及時淨化。' +
          '在緊急時刻，神聖護盾能救下瀕死的隊友。記住，祭司的存活比任何人都重要——' +
          '因為如果你倒下了，整個隊伍都會隨之崩潰。這不是自私，這是責任。願聖光給你勇氣。',
        options: [
          { text: '我要轉職祭司！', nextId: 'class_change_check' },
          { text: '二轉有哪些路線？', nextId: 'advanced_info' },
          { text: '我明白了。', nextId: 'farewell' },
        ],
      },
      {
        id: 'advanced_info',
        text: '祭司可以選擇三條專精之路，每一條都是神聖的使命：' +
          '「神官」——純治療，團隊的守護者，是最受歡迎的夥伴；' +
          '「德魯伊」——融合自然與聖光，能治療也能輸出，是平衡之道；' +
          '「審判者」——攻擊型祭司，以聖光為劍制裁邪惡，是正義的化身。',
        options: [
          { text: '詳細比較一下三條路線？', nextId: 'advanced_compare' },
          { text: '我要追隨光明！', nextId: 'class_change_check' },
          { text: '我需要再考慮。', nextId: 'farewell' },
        ],
      },
      {
        id: 'advanced_compare',
        text: '每一條路都有聖光的指引，讓我為你說明。「神官」——治療能力最強，團隊副本中永遠被需要。' +
          '但單獨練級會比較辛苦，因為攻擊力較低。適合有耐心、喜歡支援他人的孩子。' +
          '「德魯伊」——能治療能輸出，自然魔法與聖光融合，練級和組隊都不錯。' +
          '但兩邊都不是最強的，是「萬金油」型的存在。適合喜歡自由切換角色的人。' +
          '「審判者」——攻擊力不輸法師，同時保有基礎治療能力。單刷最快，但在高端副本中會被要求切回治療。' +
          '無論選擇哪條路，都不要忘記祭司的本心——守護與慈悲。',
        options: [
          { text: '我決定了，轉職祭司！', nextId: 'class_change_check' },
          { text: '有練功建議嗎？', nextId: 'training_advice' },
          { text: '感謝祭司大人的指引。', nextId: 'farewell' },
        ],
      },
      {
        id: 'training_advice',
        text: '練功的建議嗎？願聖光照亮你的修行之路。10到15級在翠綠平原練習，祭司初期可以用聖光彈打怪，雖然慢一些但很安全。' +
          '15到20級，我建議你找一位戰士或遊俠組隊——你負責治療，對方負責輸出，雙方都能快速成長。' +
          '20級以上進暗影森林，祭司在那裡非常受歡迎，因為暗影系怪物害怕聖光。' +
          '裝備方面，選擇增加智力和MP上限的法杖與布甲。祝福之戒是祭司的必備飾品，能大幅提升治療效果。' +
          '記住，不要因為練級慢就氣餒——祭司的價值在隊伍中才能真正體現。每一個被你治癒的同伴，都是你的勳章。',
        options: [
          { text: '祭司大人的教導我銘記在心！', nextId: 'farewell' },
          { text: '我要轉職祭司！', nextId: 'class_change_check' },
        ],
      },
      {
        id: 'personal_story',
        text: '我的故事嗎？……很久以前，我只是一個普通的村莊女孩。那年瘟疫席捲了我的家鄉，' +
          '我的父母、鄰居、朋友……一個接一個地離開了。我什麼都做不了，只能看著他們受苦。',
        options: [
          { text: '後來您是怎麼成為祭司的？', nextId: 'personal_story_2' },
          { text: '那一定很痛苦……', nextId: 'farewell' },
        ],
      },
      {
        id: 'personal_story_2',
        text: '在最絕望的時候，一位路過的老祭司救了我和剩下的幾個孩子。他用聖光治癒了我們的身體，也治癒了我的心。' +
          '從那天起，我發誓要學會這份力量，讓更多的人不必經歷我曾經的無助。' +
          '成為祭司不是因為我有多強大，而是因為我太了解失去的痛苦。' +
          '每一個生命都值得被守護，孩子——這不是口號，這是我用一生去實踐的信念。願聖光也庇佑你所珍愛的人。',
        options: [
          { text: '祭司大人，我要追隨您的腳步！轉職祭司！', nextId: 'class_change_check' },
          { text: '謝謝您分享這些……我會記住的。', nextId: 'farewell' },
        ],
      },
      {
        id: 'class_change_check',
        text: '閉上眼睛，將雙手放在心口……感受聖光的流動。讓它充滿你的全身……很好，很好。',
        action: { type: 'class_change', data: { classId: 'priest' } },
        options: [
          { text: '感謝祭司大人！', nextId: 'farewell' },
        ],
      },
      {
        id: 'farewell',
        text: '願聖光永遠照耀你的前路。無論選擇什麼道路，都要心存善念，守護你身邊的每一個人。去吧，孩子，聖光與你同在。',
      },
    ],
    guardianHints: {
      creature: '祭司的聖光結界能驅逐黑暗生物——在她身旁，暗屬性怪物會變得虛弱。',
      treasure: '神殿的祭壇下藏著一件聖物，只有真正的信徒才能觸碰。',
      spirit: '祭司能看見死者的靈魂，這座大廳裡徘徊著許多迷失的英靈。',
    },
  },

// ─── 翠綠平原 NPC ───────────────────────────────────────

  old_hunter: {
    id: 'old_hunter',
    name: '老獵人',
    alias: 'hunter',
    title: '資深獵手',
    description: '一位飽經風霜的老獵人，身穿磨損發白的皮甲，上面佈滿了爪痕和補丁。他的臉龐被常年的風吹日曬刻出了深深的皺紋，一雙銳利的鷹眼彷彿能看穿叢林中最隱蔽的獵物。腰間掛著一串風乾的狼牙，那是他四十年狩獵生涯的勳章。',
    roomId: 'hunter_lodge',
    type: 'merchant',
    shopItems: [
      'short_bow', 'long_bow', 'antidote',
      'small_hp_potion', 'medium_hp_potion',
      'plains_wolf_track_tag',
    ],
    dialogue: [
      {
        id: 'greeting',
        text: '嗯？有客人啊。我是這片平原的老獵人，在這山林裡打獵四十多年了。' +
          '你要是需要獵具或者想知道附近的獸群情報，問我就對了。',
        options: [
          { text: '我想看看你的獵具。', nextId: 'shop' },
          { text: '能教我追蹤獵物嗎？', nextId: 'tracking' },
          { text: '附近有什麼危險的獵物？', nextId: 'dangerous_prey' },
          { text: '我先去檢查獵徑痕跡。', nextId: 'farewell' },
        ],
      },
      {
        id: 'shop',
        text: '來看看吧，都是我精心挑選的好東西。弓弦是用雪狼筋製的，結實耐用。' +
          '出門打獵前記得帶足藥水和解毒劑——平原上的毒蛇可不講道理。',
        action: { type: 'shop', data: { shopType: 'hunting' } },
        options: [
          { text: '謝謝。', nextId: 'farewell' },
        ],
      },
      {
        id: 'tracking',
        text: '追蹤獵物的訣竅在於觀察。看地上的腳印、折斷的樹枝、還有空氣中的氣味。' +
          '野狼會在樹上留下爪痕標記領地，看到那種痕跡就要提高警覺。' +
          '記住——在森林裡，你不是唯一的獵人。',
        options: [
          { text: '受教了。', nextId: 'farewell' },
          { text: '附近有什麼危險的獵物？', nextId: 'dangerous_prey' },
        ],
      },
      {
        id: 'dangerous_prey',
        text: '向日葵田那邊有田鼠和烏鴉，不算危險。但再往北的森林裡，我曾見過一頭銀白色的狼王……' +
          '那傢伙不是普通獵人能對付的。還有那些哥布林，最近越來越囂張了，你要小心。',
        options: [
          { text: '我會注意的。', nextId: 'farewell' },
        ],
      },
      {
        id: 'farewell',
        text: '去吧，記得風向——順風接近獵物，逆風觀察敵情。老獵人的忠告。',
      },
    ],
    guardianHints: {
      creature: '老獵人的獵犬看似懶散，實則警覺性極高——牠能嗅到方圓百公尺內的危險。',
      treasure: '壁爐上方那把看似老舊的獵弓，實際上是傳說中的「風語者」——能聽見風中的獵物氣息。',
      spirit: '老獵人眼中偶爾閃過深沉的哀傷，據說他的搭檔在多年前的一次狩獵中失蹤在暗影森林深處。',
    },
  },

// ─── 湖畔城鎮擴充 NPC ─────────────────────────────────

  bartender: {
    id: 'bartender',
    name: '酒保',
    alias: 'bartender',
    title: '酒館老闆',
    description: '一個魁梧壯碩的中年男人，臂膀粗壯如同小樹幹，袖子永遠捲到肘關節以上。他的光頭油亮，臉上留著修剪整齊的絡腮鬍，一條橫貫左眼的舊傷疤暗示著他並非一輩子都在擦杯子。圍裙上沾滿了酒漬和油污，但那雙手擦拭酒杯時卻靈巧得令人驚訝。',
    roomId: 'tavern',
    type: 'merchant',
    shopItems: [
      'small_hp_potion', 'medium_hp_potion',
      'small_mp_potion', 'medium_mp_potion',
      'class_hall_attunement_charm', 'arena_practice_token',
    ],
    dialogue: [
      {
        id: 'greeting',
        text: '歡迎光臨「醉龍亭」！我是這兒的酒保。來一杯解解乏？' +
          '或者你想聽聽最近的消息？在這酒館裡，什麼情報都能打聽到。',
        options: [
          { text: '來點吃的喝的。', nextId: 'shop' },
          { text: '有什麼有趣的消息嗎？', nextId: 'rumors' },
          { text: '不用了，就坐坐。', nextId: 'farewell' },
        ],
      },
      {
        id: 'shop',
        text: '這是今天的菜單。我們的麥酒可是用湖畔最好的麥子釀的，冒險者們的最愛。' +
          '另外也有一些藥水、轉職調律符和競技練習牌，出門冒險前補給一下總沒壞處。',
        action: { type: 'shop', data: { shopType: 'tavern' } },
        options: [
          { text: '謝了老闆。', nextId: 'farewell' },
        ],
      },
      {
        id: 'rumors',
        text: '最近的消息嘛……聽說水晶洞窟深處出現了一條水晶龍，好幾支冒險隊進去就沒回來。' +
          '還有，北邊的冰封雪原似乎有異動，雪狼群開始南移了——可能有什麼東西把牠們趕了出來。' +
          '對了，角落那桌的傢伙說他在湖底看到了古代遺跡的入口……不過他喝了不少，真假難辨。',
        options: [
          { text: '有意思，來杯酒聽更多。', nextId: 'shop' },
          { text: '謝謝情報。', nextId: 'farewell' },
        ],
      },
      {
        id: 'farewell',
        text: '慢走啊！下次路過記得來坐坐，好故事配好酒，人生一大樂事。',
      },
    ],
    guardianHints: {
      creature: '角落裡那位沉默的飲客散發著不尋常的氣息——他可能是一位隱退的傳奇冒險者。',
      treasure: '吧台下方有一排落了灰的酒桶，據說其中一桶裡藏著某位海盜船長的寶藏線索。',
      spirit: '酒保看似普通，但他的眼神偶爾會變得銳利如刀——這個人有不為人知的過去。',
    },
  },

librarian: {
    id: 'librarian',
    name: '圖書館員',
    alias: 'librarian',
    title: '知識守護者',
    description: '一位戴著厚重圓框眼鏡的中年女性學者，銀白色的長髮用一支羽毛筆隨意盤起。她身穿深藍色的學者長袍，周圍總是堆滿了翻開的書籍和捲軸。纖細的手指因長年翻閱書頁而微微泛黃，眼神中透著深邃的智慧光芒。',
    roomId: 'town_library',
    type: 'quest',
    dialogue: [
      {
        id: 'greeting',
        text: '噓……這裡是圖書館，請保持安靜。我是這裡的管理員。' +
          '如果你對這片大陸的歷史或怪物的弱點有興趣，我可以幫你找到相關的書籍。' +
          '知識就是力量——這句話在冒險中尤為適用。',
        options: [
          { text: '我想了解這片大陸的歷史。', nextId: 'lore' },
          { text: '有關於怪物弱點的書嗎？', nextId: 'monster_lore' },
          { text: '你有什麼推薦的書？', nextId: 'recommend' },
          { text: '打擾了。', nextId: 'farewell' },
        ],
      },
      {
        id: 'lore',
        text: '這片大陸曾經被一個強大的地底種族統治，他們在水晶洞窟中建造了輝煌的文明。' +
          '後來一場被稱為「暗影浩劫」的災難席捲了大陸，地底種族為了封印深淵中的邪惡而犧牲了自己。' +
          '如今，暗影森林中殘留的暗影之力就是那場浩劫的遺痕。' +
          '閱讀這些記載的冒險者將獲得寶貴的經驗。',
        options: [
          { text: '還有更多的記載嗎？', nextId: 'recommend' },
          { text: '感謝你的講解。', nextId: 'farewell' },
        ],
      },
      {
        id: 'monster_lore',
        text: '怪物圖鑑在第三排書架。讓我給你總結一些要點——' +
          '暗影系的怪物怕光屬性攻擊，冰系怪物用火系魔法最有效。' +
          '而Boss級別的怪物通常有特殊的行為模式，仔細觀察牠們的動作是勝利的關鍵。' +
          '多學多看，戰鬥起來會輕鬆許多。',
        options: [
          { text: '非常有用，謝謝！', nextId: 'farewell' },
        ],
      },
      {
        id: 'recommend',
        text: '我推薦這幾本：《地底種族年鑑》記載了水晶洞窟的秘密，' +
          '《暗影之力研究》解釋了暗影森林的異變原因，' +
          '《元素親和手冊》能幫助你理解元素相剋的原理。' +
          '好好閱讀，你會發現冒險中許多問題的答案其實就藏在書中。',
        options: [
          { text: '我會好好研讀的。', nextId: 'farewell' },
        ],
      },
      {
        id: 'farewell',
        text: '知識之門永遠為求知者敞開。有任何疑問都可以再來找我。',
      },
    ],
    guardianHints: {
      creature: '禁區書架上的某些書籍被魔法鎖鏈束縛——裡面封印著以知識為食的危險生物。',
      treasure: '圖書館員正在研究的那份泛黃地圖上，標記著一處從未被探索過的上古遺跡。',
      spirit: '圖書館員的銀髮暗示著她並非普通人類——她可能是長壽種族的後裔，親歷了書中記載的許多事件。',
    },
  },

prison_guard: {
    id: 'prison_guard',
    name: '獄卒',
    alias: 'guard',
    title: '監獄看守',
    description: '一名穿戴沉重鐵甲的高大警衛，鎧甲上鏽跡斑斑卻依然結實。他的面容粗獷嚴肅，下巴上有一道深深的刀疤，一雙警覺的眼睛不斷掃視著四周。腰間掛著一大串叮噹作響的鐵鑰匙和一柄沉甸甸的鐵鎚。',
    roomId: 'prison',
    type: 'general',
    dialogue: [
      {
        id: 'greeting',
        text: '站住！這裡是監獄，閒人勿入。……嗯？你是冒險者？' +
          '那就不同了。最近王國的治安不太好，要是你在外面抓到了通緝犯，可以帶到這裡來。' +
          '會有相應的賞金。',
        options: [
          { text: '有什麼通緝犯的情報嗎？', nextId: 'wanted' },
          { text: '監獄裡關了什麼人？', nextId: 'prisoners' },
          { text: '沒事，我走了。', nextId: 'farewell' },
        ],
      },
      {
        id: 'wanted',
        text: '目前的通緝名單上有幾個重要的傢伙：海盜船長——在東方海岸橫行霸道；' +
          '暗影森林的盜賊團頭目——專門劫掠旅人；還有一個自稱「暗黑法師」的傢伙在湖畔附近出沒。' +
          '擊敗他們或者找到他們的據點情報都有賞金。',
        options: [
          { text: '我會留意的。', nextId: 'farewell' },
          { text: '監獄裡關了什麼人？', nextId: 'prisoners' },
        ],
      },
      {
        id: 'prisoners',
        text: '大多數是小偷和酒鬼，不值一提。但最深處的牢房裡……那個我不能說。' +
          '你只需要知道那扇門上的封印紋章不是擺著好看的就行了。' +
          '王國的某些秘密，知道得越少越安全。',
        options: [
          { text: '我明白了。', nextId: 'farewell' },
        ],
      },
      {
        id: 'farewell',
        text: '記住——在這座城鎮裡，王國的法律高於一切。別惹麻煩。',
      },
    ],
    guardianHints: {
      creature: '最深處牢房的封印紋章偶爾會閃爍——裡面關押的絕非普通犯人，可能是某種被捕獲的強大生物。',
      treasure: '獄卒輪班交接時，走廊盡頭的儲物間門會短暫開啟，裡面存放著從犯人身上沒收的違禁品和贓物。',
      spirit: '獄卒看似粗獷，但他對每個囚犯都記得清清楚楚。他的記憶力和觀察力遠超常人——曾經是王國情報部門的成員。',
    },
  },

// ─── 翠綠平原擴充 NPC ──────────────────────────────────

  traveling_merchant: {
    id: 'traveling_merchant',
    name: '旅行商人',
    alias: 'trader',
    title: '各地行商',
    description: '一位來自遠方的異國商人，皮膚被沙漠的烈日曬成了古銅色，頭戴色彩斑斕的絲綢頭巾。他身後的巨大背包幾乎比他的人還高，上面掛滿了來自各地的小飾品和鈴鐺，走起路來叮叮噹噹。嘴角永遠帶著精明的微笑，一雙閃亮的眼睛快速估量著每位路過的冒險者。',
    roomId: 'sunflower_field',
    type: 'merchant',
    shopItems: [
      'iron_sword', 'leather_armor', 'leather_boots',
      'small_hp_potion', 'medium_hp_potion',
      'small_mp_potion', 'antidote', 'return_scroll',
      'plains_sunflower_seed', 'meadow_healing_salad',
    ],
    dialogue: [
      {
        id: 'greeting',
        text: '喲！旅途中遇到客人可真難得。我是走遍大陸的旅行商人，背包裡什麼都有。' +
          '想看看我從各地蒐集來的好東西嗎？',
        options: [
          { text: '讓我看看你的商品。', nextId: 'shop' },
          { text: '你去過哪些地方？', nextId: 'travel_stories' },
          { text: '有什麼推薦的嗎？', nextId: 'recommend' },
          { text: '不了，再見。', nextId: 'farewell' },
        ],
      },
      {
        id: 'shop',
        text: '來看看吧！這些可都是我從各地精心挑選的貨色。品質保證，童叟無欺！',
        action: { type: 'shop', data: { shopType: 'traveling' } },
        options: [
          { text: '謝謝。', nextId: 'farewell' },
        ],
      },
      {
        id: 'travel_stories',
        text: '我走過東方海岸的碼頭，見過火山地帶矮人的鍛造場，也穿越過冰封雪原的暴風雪。' +
          '東方海岸的海鮮很便宜，火山那邊的武器品質無與倫比，至於雪原嘛……' +
          '沒有毛皮大衣的話，我勸你別去。',
        options: [
          { text: '聽起來很精彩，讓我看看商品。', nextId: 'shop' },
          { text: '謝謝你的分享。', nextId: 'farewell' },
        ],
      },
      {
        id: 'recommend',
        text: '看你的裝備，應該是剛起步的冒險者吧？先把防具補齊，再帶足藥水。' +
          '回城卷軸也多帶幾張，關鍵時刻能救命。',
        options: [
          { text: '那我買一些。', nextId: 'shop' },
          { text: '好的，記住了。', nextId: 'farewell' },
        ],
      },
      {
        id: 'farewell',
        text: '一路順風！下次在哪遇到我就看緣分了，哈哈。',
      },
    ],
    guardianHints: {
      creature: '旅行商人的駱駝看起來溫馴，但據說牠曾一腳踢飛過一匹野狼。',
      treasure: '商人的背包有夾層——他最好的貨色從不擺出來，只賣給信任的客人。',
      spirit: '旅行商人走遍大陸卻從未受過傷，有人懷疑他身上帶著某種古老的護身符。',
    },
  },

farmer: {
    id: 'farmer',
    name: '農夫',
    alias: 'farmer',
    title: '平原農家',
    description: '一位樸實憨厚的老農夫，皮膚被多年的烈日曬得黝黑粗糙，臉上的皺紋像是田地裡的溝壑。他穿著打了無數補丁的麻布衣裳，斗笠歪歪地掛在脖子後面，粗壯的雙手佈滿了老繭和泥土。褲腿總是捲得高高的，一雙草鞋沾滿了新鮮的泥巴。',
    roomId: 'village_farmland',
    type: 'general',
    dialogue: [
      {
        id: 'greeting',
        text: '啊，冒險者啊？這陣子田裡的老鼠和烏鴉越來越多，莊稼都快被糟蹋光了。' +
          '要是你能幫忙趕趕牠們，老漢我感激不盡。',
        options: [
          { text: '附近有什麼值得注意的嗎？', nextId: 'local_info' },
          { text: '這片田地怎麼樣？', nextId: 'farm_info' },
          { text: '我去看看。', nextId: 'farewell' },
        ],
      },
      {
        id: 'local_info',
        text: '前幾天我翻地的時候，在田埂底下挖到一個奇怪的陶罐，上面刻著看不懂的花紋。' +
          '不敢亂動，又埋回去了。還有啊，最近天黑以後常聽到遠處傳來狼嚎，你出門小心點。',
        options: [
          { text: '陶罐在哪裡？', nextId: 'hidden_item' },
          { text: '好的，謝謝。', nextId: 'farewell' },
        ],
      },
      {
        id: 'farm_info',
        text: '這片地跟了我大半輩子。土質好，水源足，就是野獸太多。' +
          '以前還好，這兩年不知怎地，連平常不會出現的毒蛇都跑來了。' +
          '老一輩說，是森林那邊的暗影之力在擴散……',
        options: [
          { text: '暗影之力？', nextId: 'shadow_rumor' },
          { text: '辛苦了。', nextId: 'farewell' },
        ],
      },
      {
        id: 'hidden_item',
        text: '就在農田西邊角落那棵老榆樹底下。不過陶罐上的紋路看著怪嚇人的，你要去看的話可得當心。',
        options: [
          { text: '我會注意的。', nextId: 'farewell' },
        ],
      },
      {
        id: 'shadow_rumor',
        text: '聽說暗影森林深處有一股邪惡的力量在甦醒，連帶影響了周邊的動物都變得躁動不安。' +
          '村長知道得更多，你可以去問問他。',
        options: [
          { text: '我知道了，謝謝。', nextId: 'farewell' },
        ],
      },
      {
        id: 'farewell',
        text: '去吧去吧，年輕人。老漢我還得繼續幹活呢。',
      },
    ],
    guardianHints: {
      creature: '農田地底下似乎有一個巨大的田鼠巢穴，規模遠超想像。',
      treasure: '農夫提到的陶罐可能是古代精靈族留下的封印容器，裡面裝著什麼不得而知。',
      spirit: '農夫世代耕作這片土地，他的家族似乎與這片平原的守護精靈有著古老的契約。',
    },
  },

starter_ext_field_medic: {
    id: 'starter_ext_field_medic',
    name: '蕾娜',
    alias: 'medic',
    title: '村醫學徒',
    description:
      '一名年輕學徒蹲在藥草圃旁整理陶罐，袖口沾著新鮮泥土與綠色藥膏。她把採回的溪蘆、苔膠和蜂蠟分成小包，方便第一次出村的冒險者立刻看懂用途。',
    roomId: 'starter_ext_herb_garden',
    type: 'merchant',
    shopItems: [
      'village_herb_salve',
      'herb',
      'antidote',
      'small_hp_potion',
      'hillside_moss_jelly',
      'creek_reed_splint',
      'orchard_waxcomb',
    ],
    dialogue: [
      {
        id: 'greeting',
        text:
          '別踩到藥畦。這裡的草藥夠治擦傷，但不夠治魯莽。你要補藥膏，還是想知道哪些材料值得帶回？',
        options: [
          { text: '我想買補給。', nextId: 'shop' },
          { text: '外圍有哪些材料？', nextId: 'materials' },
          { text: '哪裡比較危險？', nextId: 'danger' },
          { text: '我先看看。', nextId: 'farewell' },
        ],
      },
      {
        id: 'shop',
        text:
          '村醫藥膏、藥草、解毒劑和小瓶生命藥水都有。若你帶回山坡苔膠、溪蘆夾板或果園蜂蠟，我也會收。',
        action: { type: 'shop', data: { shopType: 'starter_ext_medic' } },
        options: [
          { text: '外圍有哪些材料？', nextId: 'materials' },
          { text: '先這樣。', nextId: 'farewell' },
        ],
      },
      {
        id: 'materials',
        text:
          '溪苔史萊姆會留下苔膠，溪邊蘆葦能做夾板。果園和蜂巢樹叢常有蜂蠟，但利喙鴉會把亮東西拖到巢裡，找木牌時記得抬頭。',
        options: [
          { text: '哪裡比較危險？', nextId: 'danger' },
          { text: '我看看補給。', nextId: 'shop' },
        ],
      },
      {
        id: 'danger',
        text:
          '空心樹樁最近有一隻屯糧鼠，會偷藥包和繩索。它不算真正的 Boss，但對新手來說已經夠麻煩。',
        options: [
          { text: '我會小心。', nextId: 'farewell' },
        ],
      },
      { id: 'farewell', text: '回村前把傷口洗乾淨。泥土留在裡面，比鼠咬還麻煩。' },
    ],
    guardianHints: {
      creature: '蕾娜能從咬痕分辨田鼠、屯糧鼠與利喙鴉造成的傷口。',
      treasure: '她的陶罐標籤說明山坡苔膠、溪蘆夾板與果園蜂蠟的初階配方。',
      spirit: '她把新手村外圍從單純練級區連回可學習的採集與補給循環。',
    },
  },

starter_ext_watch_patrol: {
    id: 'starter_ext_watch_patrol',
    name: '托瑪',
    alias: 'watchman',
    title: '外圍巡夜人',
    description:
      '一名年長巡夜人靠在瞭望台石牆邊，斗篷下掛著短哨、舊鑰匙和一卷巡邏繩。他的目光反覆掃過柳樹神龕、盜匪足跡與墓地鐵門。',
    roomId: 'watchtower',
    type: 'quest',
    dialogue: [
      {
        id: 'greeting',
        text:
          '第一次走到這裡？記住三件事：烏鴉不只吃果子，盜匪不只踩一條路，墓地的骨頭不會自己安分。',
        options: [
          { text: '我該先查哪裡？', nextId: 'route' },
          { text: '柳樹神龕怎麼了？', nextId: 'shrine' },
          { text: '空心樹樁危險嗎？', nextId: 'stump' },
          { text: '我會記住。', nextId: 'farewell' },
        ],
      },
      {
        id: 'route',
        text:
          '從練習空地看盜匪足跡，再去柳樹神龕找祈願牌。若祈願牌被鴉巢或屯糧鼠拖走，就順著空心樹樁查到墓地外牆。',
        options: [
          { text: '柳樹神龕怎麼了？', nextId: 'shrine' },
          { text: '空心樹樁危險嗎？', nextId: 'stump' },
        ],
      },
      {
        id: 'shrine',
        text:
          '有孩子在那裡掛了願望，後來木牌少了一片。找到柳木祈願牌，就能知道盜匪是從哪邊偷看村路。',
        options: [
          { text: '我去找木牌。', nextId: 'farewell' },
        ],
      },
      {
        id: 'stump',
        text:
          '空心樹樁不是大墓地，但根道很窄。屯糧鼠會把斷橋粗繩和藥包拖進去，別讓牠把你的退路也拖走。',
        options: [
          { text: '了解。', nextId: 'farewell' },
        ],
      },
      { id: 'farewell', text: '看到塔旗忽然逆風擺，就退回村口。那表示墓地方向又有東西醒了。' },
    ],
    guardianHints: {
      creature: '托瑪能提示利喙鴉、空樹屯糧鼠、骷髏兵與骷髏將軍的路線層級。',
      treasure: '他的巡邏繩標出柳樹神龕、空心樹樁與墓地入口之間的安全撤退點。',
      spirit: '他讓新手村外圍的訓練、盜匪、神龕與墓地線索形成可追蹤的任務鏈。',
    },
  },

wandering_bard: {
    id: 'wandering_bard',
    name: '流浪吟遊詩人',
    alias: 'bard',
    title: '吟遊詩人',
    description: '一位衣著華麗卻略顯破舊的流浪藝人，披著一件褪色的紫色絲絨斗篷，手中抱著一把雕刻精美的七弦琴。他的金色長髮隨風飄揚，眼角帶著歲月的細紋，但雙眸中閃爍著年輕人般的熱情光芒。帽子上插著一根翠綠的羽毛，嘴角永遠掛著若有似無的微笑。',
    roomId: 'windmill_interior',
    type: 'general',
    dialogue: [
      {
        id: 'greeting',
        text: '♪～風吹過平原，帶來遠方的歌謠～♪ 噢，有聽眾了！我是流浪的吟遊詩人，' +
          '用琴弦記錄這片大陸上的傳說。想聽一首歌嗎？',
        options: [
          { text: '給我講個傳說吧。', nextId: 'legend' },
          { text: '你知道傳說中的武器嗎？', nextId: 'legendary_weapon' },
          { text: '你走過很多地方嗎？', nextId: 'travels' },
          { text: '下次吧。', nextId: 'farewell' },
        ],
      },
      {
        id: 'legend',
        text: '很久以前，大陸上有四把神器——炎之劍、冰之弓、雷之杖、聖之盾。' +
          '它們分別由四位英雄持有，在「暗影浩劫」中封印了深淵的邪神。' +
          '浩劫結束後，四把神器散落在大陸各處，至今無人找到。' +
          '有人說炎之劍沉睡在火山深處，冰之弓則被冰封在雪原盡頭的城堡裡……',
        options: [
          { text: '其他兩件呢？', nextId: 'more_legend' },
          { text: '精彩的故事！', nextId: 'farewell' },
        ],
      },
      {
        id: 'more_legend',
        text: '雷之杖據說在水晶洞窟最深處的古代祭壇裡，而聖之盾……傳說守護著湖畔城鎮的結界。' +
          '不過這些都是老故事了，真假難辨。也許有一天，你會是找到它們的人呢！',
        options: [
          { text: '我會去尋找的！', nextId: 'farewell' },
        ],
      },
      {
        id: 'legendary_weapon',
        text: '傳說中的武器啊……我聽說火山地帶的矮人鍛造師能打造出世間最強的武器，' +
          '但需要稀有的材料。水晶洞窟的水晶核心、暗影森林的暗影精華、冰封雪原的冰元素核心——' +
          '集齊這些，再加上矮人的技藝，也許就能重鑄傳說。',
        options: [
          { text: '我記下了！', nextId: 'farewell' },
          { text: '還有其他傳說嗎？', nextId: 'legend' },
        ],
      },
      {
        id: 'travels',
        text: '從新手村到湖畔城鎮，從東方海岸到冰封雪原，我的腳步遍佈整片大陸。' +
          '每個地方都有獨特的故事。最令我難忘的是暗影森林裡的精靈祭壇——' +
          '月光下那裡美得令人窒息，但也危險至極。',
        options: [
          { text: '謝謝你的分享。', nextId: 'farewell' },
        ],
      },
      {
        id: 'farewell',
        text: '願歌聲伴你同行，願故事為你照亮前路。我們會再相遇的！♪',
      },
    ],
    guardianHints: {
      creature: '吟遊詩人的琴弦在彈奏時偶爾會自己震動——彷彿琴裡住著某種音樂精靈。',
      treasure: '詩人的歌謠裡隱藏著真實的寶藏線索，但只有仔細聆聽的人才能發現。',
      spirit: '這位吟遊詩人的年齡似乎比外表看起來大得多——他知道的歷史不像是聽來的，更像是親眼見過。',
    },
  },

// ─── 東方海岸 NPC ──────────────────────────────────────

  fisherman: {
    id: 'fisherman',
    name: '漁夫',
    alias: 'fisherman',
    title: '老漁民',
    description: '一位滿臉風霜的老漁夫，身上帶著揮之不去的海水鹹味和魚腥氣。他穿著一件沾滿鹽漬的厚帆布外套，頭戴一頂被海風吹得變形的草帽。古銅色的皮膚上佈滿了海水侵蝕的痕跡，粗糙的大手緊握著一根用了幾十年的老魚竿，眼神始終注視著海面的波動。',
    roomId: 'fishing_dock',
    type: 'general',
    dialogue: [
      {
        id: 'greeting',
        text: '嘿！你也來釣魚的嗎？我在這片海域捕了三十多年的魚了。' +
          '今天的漁獲不太行，大魚都被什麼東西嚇跑了。',
        options: [
          { text: '有什麼釣魚的訣竅嗎？', nextId: 'fishing_tips' },
          { text: '什麼東西嚇跑了魚？', nextId: 'sea_monster' },
          { text: '這片海域安全嗎？', nextId: 'sea_safety' },
          { text: '再見。', nextId: 'farewell' },
        ],
      },
      {
        id: 'fishing_tips',
        text: '釣魚嘛，講究的是耐心。清晨和黃昏魚最活躍。用蚯蚓能釣到普通魚，' +
          '用發光的蟲餌能引來深海魚。對了，珊瑚淺灘那邊聽說有稀有的七彩魚，' +
          '不過水流太急，一般人過不去。若你在珍珠床找到觀潮珍珠，我能幫你看出退潮時刻。',
        options: [
          { text: '七彩魚？', nextId: 'rare_fish' },
          { text: '謝謝指點。', nextId: 'farewell' },
        ],
      },
      {
        id: 'rare_fish',
        text: '七彩魚可值錢了！聽說抓到一條能賣好幾百金幣。但牠只在退潮時出現，' +
          '而且游得比海豚還快。老漢我試了幾十次，只遠遠看到過一次。',
        options: [
          { text: '有機會我去試試。', nextId: 'farewell' },
        ],
      },
      {
        id: 'sea_monster',
        text: '最近海面上常出現巨大的陰影……有人說是海蛇，有人說是海龍。' +
          '反正自從那東西出現以後，近海的魚群都往遠處跑了。' +
          '船長說他親眼在暗礁附近看到了觸手，嚇得連夜開船回港。',
        options: [
          { text: '聽起來很危險。', nextId: 'farewell' },
          { text: '這片海域安全嗎？', nextId: 'sea_safety' },
        ],
      },
      {
        id: 'sea_safety',
        text: '碼頭附近還算安全，但別往暗礁那邊去。海盜營地更是碰都不要碰，' +
          '那群亡命之徒可不跟你講道理。沉船遺跡裡倒是有不少寶貝，' +
          '不過潮池岩穴和斷裂棧橋下的礁背蟹衛可不好對付。',
        options: [
          { text: '我會注意的。', nextId: 'farewell' },
        ],
      },
      {
        id: 'farewell',
        text: '行了，魚線動了！走吧走吧，別嚇跑我的魚！',
      },
    ],
    guardianHints: {
      creature: '漁夫說的海中陰影可能是傳說中的海蛇王——牠已經在這片海域潛伏了百年。',
      treasure: '漁夫的魚簍底下壓著一張褪色的海圖，上面標記著沉船中寶藏的位置。',
      spirit: '漁夫能準確預測天氣和潮汐，老一輩說他的祖先曾與海神立下契約。',
    },
  },

ship_captain: {
    id: 'ship_captain',
    name: '船長',
    alias: 'captain',
    title: '遠航船長',
    description: '一位威風凜凜的海上男兒，寬闊的肩膀撐起一件深藍色的船長大衣，胸前別著一枚閃亮的黃銅羅盤徽章。他的鬍子修剪得一絲不苟，被海風吹得古銅色的臉上帶著自信的笑容。頭頂那頂三角船長帽微微傾斜，腰間佩著一把裝飾華麗的彎刀。',
    roomId: 'coastal_boardwalk',
    type: 'quest',
    dialogue: [
      {
        id: 'greeting',
        text: '哈！冒險者嗎？我是「海風號」的船長。我的船跑遍了這片海域的每一個角落。' +
          '你是想搭船去什麼地方，還是想聽聽海上的故事？',
        options: [
          { text: '海上有什麼冒險嗎？', nextId: 'sea_adventure' },
          { text: '你遇過海盜嗎？', nextId: 'pirate_info' },
          { text: '聽說海裡有怪物？', nextId: 'sea_creature' },
          { text: '先告辭了。', nextId: 'farewell' },
        ],
      },
      {
        id: 'sea_adventure',
        text: '冒險？多的是！東南方有一座無人島，據說藏著古代海盜的寶藏。' +
          '不過暗礁和漩渦讓普通船隻根本靠近不了。' +
          '如果你能幫我弄到特殊的導航水晶，我就帶你去！',
        options: [
          { text: '導航水晶在哪裡？', nextId: 'nav_crystal' },
          { text: '聽起來太危險了。', nextId: 'farewell' },
        ],
      },
      {
        id: 'nav_crystal',
        text: '我聽說水晶洞窟深處有一種迴音水晶，能感應海流的方向。' +
          '有了它，再危險的水域也能安全通過。你要是能弄到一塊，回來找我！',
        options: [
          { text: '我去找找看。', nextId: 'farewell' },
        ],
      },
      {
        id: 'pirate_info',
        text: '海盜？哼，崖壁那邊的海盜營地裡有一幫亡命之徒，為首的叫「黑鬍子」。' +
          '他們劫掠過往的商船，王國已經懸賞他的人頭了。' +
          '不過那傢伙手下有不少狠角色，沒點實力最好別去招惹。',
        options: [
          { text: '我會注意的。', nextId: 'farewell' },
          { text: '海上還有什麼危險？', nextId: 'sea_creature' },
        ],
      },
      {
        id: 'sea_creature',
        text: '暗礁附近我親眼看到過巨大的觸手從水裡伸出來——比我的船桅還粗！' +
          '那絕對不是普通的章魚。老水手們說那是「深海守護者」，守護著海底的某個古老遺跡。' +
          '碰到了就趕緊跑，別逞英雄。',
        options: [
          { text: '我記住了。', nextId: 'farewell' },
        ],
      },
      {
        id: 'farewell',
        text: '海風號隨時歡迎你！記住——在海上，風向永遠比力量重要。',
      },
    ],
    guardianHints: {
      creature: '船長口中的深海守護者可能是上古時代被封印在海底的巨型魔獸。',
      treasure: '「海風號」的船艙裡有一個上了三道鎖的箱子，船長從不讓人靠近。',
      spirit: '船長的航海日誌裡記錄著一條通往未知大陸的航路，但他從未對任何人提起。',
    },
  },

seafood_merchant: {
    id: 'seafood_merchant',
    name: '海鮮商人',
    alias: 'fishmonger',
    title: '碼頭魚販',
    description: '一位精明幹練的海邊商人，圓滾滾的身材裹在一件沾滿魚鱗的油布圍裙裡。他的嗓門極大，叫賣聲能穿透整個碼頭，一雙精明的小眼睛不放過任何一個潛在的顧客。攤位上擺滿了鮮活蹦跳的海鮮，他手持一把利落的魚刀，動作俐落地處理著漁獲。',
    roomId: 'fishing_dock',
    type: 'merchant',
    shopItems: [
      'grilled_meat', 'stew', 'adventure_bento',
      'small_hp_potion', 'medium_hp_potion', 'antidote',
      'dockside_seaweed_stew', 'salt_crab_shell', 'kelp_rope_coil',
    ],
    dialogue: [
      {
        id: 'greeting',
        text: '新鮮的海鮮喲！今天早上剛從海裡撈上來的，鮮得能蹦！' +
          '冒險者出門在外，總得吃飽肚子吧？來看看我的東西！',
        options: [
          { text: '讓我看看你賣什麼。', nextId: 'shop' },
          { text: '生意怎麼樣？', nextId: 'business' },
          { text: '不了，謝謝。', nextId: 'farewell' },
        ],
      },
      {
        id: 'shop',
        text: '烤肉、燉湯、冒險者便當應有盡有！我家的燉湯可是用深海鮮魚熬的，' +
          '喝一碗能暖到骨子裡。今天還有碼頭海藻湯、鹽蟹硬殼和海藻繩卷，出門前補足才有勁！',
        action: { type: 'shop', data: { shopType: 'seafood' } },
        options: [
          { text: '謝謝老闆。', nextId: 'farewell' },
        ],
      },
      {
        id: 'business',
        text: '唉，最近生意不太好做。海裡那個大傢伙嚇跑了不少魚，漁獲少了價格就上去了。' +
          '不過海藻灘和潮池岩穴還能收材料，水母燈囊、鹽蟹硬殼和海藻繩卷都有人要。',
        options: [
          { text: '那來點吃的吧。', nextId: 'shop' },
          { text: '希望生意興隆。', nextId: 'farewell' },
        ],
      },
      {
        id: 'farewell',
        text: '慢走啊！下次來記得帶朋友，多買多便宜！',
      },
    ],
    guardianHints: {
      creature: '魚攤底下有一隻異常巨大的螃蟹偶爾伸出鉗子偷魚吃，商人假裝沒看見。',
      treasure: '商人用來醃漬海鮮的陶甕裡，有一個是用來藏私房錢的。',
      spirit: '海鮮商人的祖傳醬料配方裡有一味只有精靈才知道的香料——他卻說不出那是什麼。',
    },
  },

shipwright: {
    id: 'shipwright',
    name: '造船匠',
    alias: 'shipwright',
    title: '資深造船師',
    description: '一位沉默寡言的造船老手，雙手滿是厚厚的繭和木刺留下的疤痕。他穿著一件沾滿木屑和松脂的工作服，腰間繫著各式各樣的木工工具。寬厚的背影因多年彎腰勞作而微微駝背，但那雙粗糙的手拿起刨子時卻穩如磐石。',
    roomId: 'coastal_boardwalk',
    type: 'general',
    dialogue: [
      {
        id: 'greeting',
        text: '喂，小心腳下的木屑！我正在修一條船。你是冒險者？' +
          '不造船的話就別在這裡礙手礙腳……嗯，除非你有好木材要賣。',
        options: [
          { text: '你造過什麼船？', nextId: 'ships' },
          { text: '修船需要什麼材料？', nextId: 'materials' },
          { text: '抱歉打擾了。', nextId: 'farewell' },
        ],
      },
      {
        id: 'ships',
        text: '「海風號」就是我造的！那可是跑遍整片海域最快的船。' +
          '用的是暗影森林的古木——又輕又硬，還能抵抗魔力侵蝕。' +
          '不過現在古木越來越難弄到了，暗影森林的樹人可不好對付。',
        options: [
          { text: '古木？我也許能弄到。', nextId: 'ancient_wood' },
          { text: '厲害！', nextId: 'farewell' },
        ],
      },
      {
        id: 'ancient_wood',
        text: '真的嗎？如果你能帶來古樹皮，我可以幫你打造一些特殊的裝備。' +
          '造船匠的手藝不只是造船——木盾、弓、法杖的握柄，我都做得來。',
        options: [
          { text: '我記住了。', nextId: 'farewell' },
        ],
      },
      {
        id: 'materials',
        text: '好木材是關鍵。普通的木頭禁不住海水的腐蝕，需要特殊的木料。' +
          '暗影森林的古木最好，水晶洞窟裡的石化木也不錯。' +
          '再加上矮人鍛造的鐵釘、海藻繩卷和鹽蟹硬殼防潮粉……嗯，造一條好船可不便宜。',
        options: [
          { text: '原來如此。', nextId: 'farewell' },
        ],
      },
      {
        id: 'farewell',
        text: '行了，我要繼續幹活了。別踩到我的工具！',
      },
    ],
    guardianHints: {
      creature: '造船匠的工坊裡有一隻海鷗每天準時來蹲，牠可能是被馴化的信使鳥。',
      treasure: '工坊角落堆放的舊船板中，有一塊上面刻著精靈文字的珍貴古木。',
      spirit: '造船匠的手藝據說是從一本沉船上打撈出的矮人工藝手冊中自學的。',
    },
  },

// ─── 暗影森林 NPC ──────────────────────────────────────

  forest_ranger: {
    id: 'forest_ranger',
    name: '巡林者',
    alias: 'forester',
    title: '森林巡守',
    description: '一位穿著墨綠色斗篷的森林守護者，斗篷上沾滿了苔蘚和樹葉的碎屑，與森林融為一體。他的身形修長而矯健，腳步輕得幾乎不發出聲響。面容被兜帽遮去大半，只露出一雙警覺的綠色眼眸，背上斜背著一把精靈式的長弓。',
    roomId: 'firefly_trail',
    type: 'quest',
    dialogue: [
      {
        id: 'greeting',
        text: '站住——你是冒險者？還好，我還以為又有盜賊闖進來了。' +
          '我是暗影森林的巡林者，負責監視這片森林的異常動靜。',
        options: [
          { text: '森林裡有什麼異常嗎？', nextId: 'abnormal' },
          { text: '你在追蹤什麼？', nextId: 'tracking' },
          { text: '有什麼需要我幫忙的嗎？', nextId: 'quest_offer' },
          { text: '我繼續探索了。', nextId: 'farewell' },
        ],
      },
      {
        id: 'abnormal',
        text: '暗影之力在增強。看到那些螢火蟲了嗎？牠們本來是精靈族的魔法造物，' +
          '但最近牠們的光芒變得不穩定，忽明忽暗。這說明森林深處的暗影源頭正在活躍。' +
          '枯萎之林那邊的暗黑樹人數量也在增加，不是好兆頭。',
        options: [
          { text: '暗影源頭在哪裡？', nextId: 'shadow_source' },
          { text: '我會小心的。', nextId: 'farewell' },
        ],
      },
      {
        id: 'shadow_source',
        text: '還不確定。可能在黑暗樹洞深處，也可能更深的地方。' +
          '精靈祭壇的結界暫時擋住了暗影的擴散，但不知道能撐多久。' +
          '如果你夠強，可以去枯萎之林調查一下。',
        options: [
          { text: '我去看看。', nextId: 'farewell' },
        ],
      },
      {
        id: 'tracking',
        text: '一頭暗影狼王。牠不是普通的狼——身上覆蓋著暗影之力，比一般怪物強上數倍。' +
          '我追蹤牠的足跡已經好幾天了，但每次都在深林裡失去蹤影。' +
          '如果你遇到牠，千萬別單獨硬拼。',
        options: [
          { text: '我會注意的。', nextId: 'farewell' },
        ],
      },
      {
        id: 'quest_offer',
        text: '如果你願意的話，幫我清理一下毒霧沼澤深處的毒蛙群。' +
          '牠們的數量太多了，毒霧正在向螢火蟲小徑蔓延。另外，' +
          '如果你在森林裡發現了暗黑樹皮或暗影精華，帶回來給我，我有報酬。',
        options: [
          { text: '交給我吧。', nextId: 'farewell' },
        ],
      },
      {
        id: 'farewell',
        text: '在森林裡注意聽風的方向——暗影生物靠近時，風會突然靜止。保重。',
      },
    ],
    guardianHints: {
      creature: '巡林者身邊有一頭半透明的精靈鹿跟隨——只有在月光下才能隱約看見。',
      treasure: '巡林者的腰帶上掛著一塊精靈族的碎玉，那是他獲得進入森林資格的信物。',
      spirit: '巡林者並非人類——他的耳朵在帽子下微微尖削，可能有精靈血統。',
    },
  },
};
