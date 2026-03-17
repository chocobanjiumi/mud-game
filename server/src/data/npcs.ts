// NPC 定義 - 所有 NPC 與對話樹

import type { NpcDef } from '@game/shared';

export const NPCS: Record<string, NpcDef> = {

  // ─── 新手村 NPC ──────────────────────────────────────────

  village_chief: {
    id: 'village_chief',
    name: '村長',
    title: '新手村村長',
    roomId: 'village_square',
    type: 'quest',
    dialogue: [
      {
        id: 'greeting',
        text: '歡迎來到新手村，年輕的冒險者！我是這裡的村長。如果你是第一次來，我可以為你介紹一下這個世界。',
        options: [
          { text: '請告訴我關於這個世界的事。', nextId: 'world_intro' },
          { text: '我該怎麼變得更強？', nextId: 'get_stronger' },
          { text: '附近有什麼危險嗎？', nextId: 'dangers' },
          { text: '告辭了。', nextId: 'farewell' },
        ],
      },
      {
        id: 'world_intro',
        text: '這片大陸上有許多區域等待你去探索。從村外的翠綠平原開始，到暗影森林、水晶洞窟，' +
          '最終你會抵達湖畔城鎮——那裡有轉職大廳和競技場。不過要循序漸進，別急著去太危險的地方！',
        options: [
          { text: '謝謝你的介紹。', nextId: 'farewell' },
          { text: '我該怎麼變得更強？', nextId: 'get_stronger' },
        ],
      },
      {
        id: 'get_stronger',
        text: '先去訓練場練練手吧！擊敗怪物可以獲得經驗值和金幣。等你到了10級，就可以去湖畔城鎮的轉職大廳選擇職業了。' +
          '記得去冒險者公會找導師學習技能，去武器店和藥水店做好準備再出發。',
        options: [
          { text: '我知道了，謝謝！', nextId: 'farewell' },
        ],
      },
      {
        id: 'dangers',
        text: '村口附近只有些史萊姆，不足為懼。但翠綠平原上有野狼和盜賊出沒，要小心。' +
          '至於暗影森林……那裡有暗影狼王，沒有足夠的實力千萬別深入！水晶洞窟更是危機四伏。',
        options: [
          { text: '我會小心的。', nextId: 'farewell' },
        ],
      },
      {
        id: 'farewell',
        text: '祝你冒險順利，勇敢的冒險者！如果遇到什麼困難，隨時回來找我。',
      },
    ],
    guardianHints: {
      creature: '村長身邊似乎有一隻隱形的守護精靈在暗中保護他。',
      treasure: '村長的辦公桌抽屜裡鎖著一份古老的藏寶圖。',
      spirit: '村長年輕時曾是一名強大的冒險者，他隱藏了很多關於這片大陸的秘密。',
    },
  },

  adventure_mentor: {
    id: 'adventure_mentor',
    name: '冒險者導師',
    title: '資深冒險者',
    roomId: 'adventurer_guild',
    type: 'class_trainer',
    classToTeach: 'adventurer',
    dialogue: [
      {
        id: 'greeting',
        text: '喲！新來的冒險者嗎？我是這裡的導師，負責教導新人基礎的戰鬥技巧。想學點什麼嗎？',
        options: [
          { text: '教我戰鬥技巧！', nextId: 'teach_skills' },
          { text: '轉職需要什麼條件？', nextId: 'class_info' },
          { text: '沒事，只是看看。', nextId: 'farewell' },
        ],
      },
      {
        id: 'teach_skills',
        text: '作為冒險者，你可以學會這些基礎技能：「揮砍」是最基本的攻擊、「防禦」能減半傷害、' +
          '「急救」能回復少量HP、「觀察」可以看穿怪物的弱點。每次升級都別忘了回來看看有沒有新技能可學！',
        action: { type: 'shop', data: { shopType: 'skills' } },
        options: [
          { text: '謝謝指導！', nextId: 'farewell' },
        ],
      },
      {
        id: 'class_info',
        text: '等你到了10級，就可以去湖畔城鎮的轉職大廳選擇你的道路。' +
          '劍士、法師、遊俠、祭司——每個職業都有不同的玩法。' +
          '好好考慮自己想走的路線吧！',
        options: [
          { text: '我明白了。', nextId: 'farewell' },
        ],
      },
      {
        id: 'farewell',
        text: '加油練習，別偷懶啊！等你變強了，再來跟我切磋！',
      },
    ],
    guardianHints: {
      creature: '導師的實力遠超表面——他的殺氣偶爾會讓附近的小怪物不敢靠近。',
      treasure: '公會的地下室裡存放著歷代冒險者留下的傳奇裝備。',
      spirit: '導師背負著一個遺憾——他曾有一個搭檔，在暗影森林中失蹤了。',
    },
  },

  blacksmith: {
    id: 'blacksmith',
    name: '鐵匠',
    title: '武器鍛造師',
    roomId: 'weapon_shop',
    type: 'merchant',
    shopItems: [
      'wooden_sword', 'bronze_sword', 'iron_sword',
      'wooden_staff', 'apprentice_staff',
      'short_bow', 'hunting_bow',
      'wooden_shield', 'iron_shield',
    ],
    dialogue: [
      {
        id: 'greeting',
        text: '歡迎光臨！我是村裡最好的鐵匠。想看看我打造的武器嗎？每一把都是精心之作！',
        options: [
          { text: '讓我看看你的商品。', nextId: 'shop' },
          { text: '你能修理裝備嗎？', nextId: 'repair' },
          { text: '只是逛逛。', nextId: 'farewell' },
        ],
      },
      {
        id: 'shop',
        text: '看看吧，都是好東西！新手建議先買把趁手的武器。有了好武器，打怪才事半功倍！',
        action: { type: 'shop', data: { shopType: 'weapon' } },
        options: [
          { text: '謝謝。', nextId: 'farewell' },
        ],
      },
      {
        id: 'repair',
        text: '修理？哈哈，這些武器可是我親手打的，哪那麼容易壞！不過如果真有需要，以後我會開放修理服務的。',
        options: [
          { text: '好吧，讓我看看商品。', nextId: 'shop' },
          { text: '再見。', nextId: 'farewell' },
        ],
      },
      {
        id: 'farewell',
        text: '有空再來，下次我可能會有更好的貨色！',
      },
    ],
    guardianHints: {
      creature: '鐵匠養了一隻火蜥蜴幫忙維持爐火，牠藏在爐底很少現身。',
      treasure: '鐵匠有一把祖傳的寶劍，從不展示——據說是矮人王打造的。',
      spirit: '鐵匠的鍛造技術來自矮人王國的殘卷，他一直在嘗試復原失傳的鍛造法。',
    },
  },

  herbalist: {
    id: 'herbalist',
    name: '藥師',
    title: '草藥專家',
    roomId: 'potion_shop',
    type: 'merchant',
    shopItems: [
      'small_hp_potion', 'medium_hp_potion',
      'small_mp_potion', 'medium_mp_potion',
      'antidote', 'status_cure',
    ],
    dialogue: [
      {
        id: 'greeting',
        text: '啊，冒險者！歡迎來到我的小店。出門在外，藥水可是保命的東西。要不要帶一些？',
        options: [
          { text: '讓我看看藥水。', nextId: 'shop' },
          { text: '你有什麼推薦的嗎？', nextId: 'recommend' },
          { text: '不用了，謝謝。', nextId: 'farewell' },
        ],
      },
      {
        id: 'shop',
        text: '紅色的是生命藥水，藍色的是魔力藥水。綠色的解毒劑也很重要——平原上的毒蛇可不好惹！',
        action: { type: 'shop', data: { shopType: 'potion' } },
        options: [
          { text: '謝謝你的建議！', nextId: 'farewell' },
        ],
      },
      {
        id: 'recommend',
        text: '如果你打算去翠綠平原，記得帶上解毒劑。那邊的毒蛇和暗影森林的蜘蛛都會下毒。' +
          '另外，多帶幾瓶生命藥水準沒錯！',
        options: [
          { text: '那我買一些吧。', nextId: 'shop' },
          { text: '好的，謝謝。', nextId: 'farewell' },
        ],
      },
      {
        id: 'farewell',
        text: '保重身體！受傷了記得回來買藥哦。',
      },
    ],
    guardianHints: {
      creature: '藥師店裡的某些瓶子裡裝著活的魔法蟲，用來提取毒素。',
      treasure: '藥典中記載了一種能永久提升屬性的秘藥配方，但材料極為稀有。',
      spirit: '藥師曾是精靈族的學徒，她的草藥知識遠超人類的理解範圍。',
    },
  },

  // ─── 湖畔城鎮 NPC（轉職導師） ──────────────────────────

  sword_instructor: {
    id: 'sword_instructor',
    name: '劍術教官',
    title: '劍士導師',
    roomId: 'class_change_hall',
    type: 'class_trainer',
    classToTeach: 'swordsman',
    dialogue: [
      {
        id: 'greeting',
        text: '我是劍術教官。劍士之道，在於攻守兼備。你是想走劍士的道路嗎？',
        options: [
          { text: '我想成為劍士！', nextId: 'class_change_check' },
          { text: '告訴我劍士的特色。', nextId: 'class_info' },
          { text: '劍士之後可以轉什麼？', nextId: 'advanced_info' },
          { text: '暫時不了。', nextId: 'farewell' },
        ],
      },
      {
        id: 'class_info',
        text: '劍士是近戰物理職業，攻守平衡。你將學會「重擊」、「劍氣」等強力技能，' +
          '還能使用「挑釁」保護隊友。轉職時會獲得力量+5、體質+5、敏捷+2的加成。',
        options: [
          { text: '我決定了，轉職劍士！', nextId: 'class_change_check' },
          { text: '我再想想。', nextId: 'farewell' },
        ],
      },
      {
        id: 'advanced_info',
        text: '到了30級，劍士可以選擇三條專精路線：' +
          '「騎士」——重裝坦克，用聖盾保護隊伍；' +
          '「狂戰士」——暴力輸出，以血換傷害；' +
          '「劍聖」——技巧型劍士，高連擊高閃避。',
        options: [
          { text: '聽起來很棒，我要轉劍士！', nextId: 'class_change_check' },
          { text: '我再考慮看看。', nextId: 'farewell' },
        ],
      },
      {
        id: 'class_change_check',
        text: '讓我看看你的資質……',
        action: { type: 'class_change', data: { classId: 'swordsman' } },
        options: [
          { text: '謝謝教官！', nextId: 'farewell' },
        ],
      },
      {
        id: 'farewell',
        text: '劍在手中，路在腳下。無論你選擇什麼，都要堅定地走下去。',
      },
    ],
    guardianHints: {
      creature: '劍術教官的劍氣偶爾會引來好鬥的元素精靈在大廳中飛舞。',
      treasure: '教官的佩劍並非凡物——那是從暗影狼王身上奪來的魔劍。',
      spirit: '劍術教官曾是王國的禁衛軍統領，他因某個秘密退隱至此。',
    },
  },

  magic_instructor: {
    id: 'magic_instructor',
    name: '魔法導師',
    title: '法師導師',
    roomId: 'class_change_hall',
    type: 'class_trainer',
    classToTeach: 'mage',
    dialogue: [
      {
        id: 'greeting',
        text: '……嗯？你對魔法有興趣嗎？法師的道路充滿了知識與力量，但也要承受脆弱的代價。',
        options: [
          { text: '我想成為法師！', nextId: 'class_change_check' },
          { text: '告訴我法師的特色。', nextId: 'class_info' },
          { text: '法師之後可以轉什麼？', nextId: 'advanced_info' },
          { text: '暫時不了。', nextId: 'farewell' },
        ],
      },
      {
        id: 'class_info',
        text: '法師是遠程魔法職業，擅長元素攻擊。火球術、冰霜新星、雷擊……每一招都威力驚人。' +
          '不過法師的體質較弱，需要隊友保護。轉職會獲得智力+8、體質+2、敏捷+1、幸運+1的加成。',
        options: [
          { text: '我決定了，轉職法師！', nextId: 'class_change_check' },
          { text: '我再想想。', nextId: 'farewell' },
        ],
      },
      {
        id: 'advanced_info',
        text: '法師的三條專精路線各有千秋：' +
          '「大法師」——元素大師，範圍毀滅；' +
          '「暗黑術士」——DoT與控制，持續壓制敵人；' +
          '「時空術士」——操控時間，控場與輔助並重。',
        options: [
          { text: '我要走魔法之路！', nextId: 'class_change_check' },
          { text: '我再考慮看看。', nextId: 'farewell' },
        ],
      },
      {
        id: 'class_change_check',
        text: '魔力的波動……讓我感受一下你的潛力。',
        action: { type: 'class_change', data: { classId: 'mage' } },
        options: [
          { text: '感謝導師！', nextId: 'farewell' },
        ],
      },
      {
        id: 'farewell',
        text: '知識就是力量。願魔法之光照亮你前行的道路。',
      },
    ],
    guardianHints: {
      creature: '魔法導師周圍的空氣偶爾扭曲——那是她召喚物在另一個維度中巡邏。',
      treasure: '導師的魔法書中夾著一張世界地圖，標記著幾處未知的魔力節點。',
      spirit: '魔法導師能感應到時間之流的異常，她似乎知道一些關於未來的事。',
    },
  },

  ranger_instructor: {
    id: 'ranger_instructor',
    name: '遊俠教練',
    title: '遊俠導師',
    roomId: 'class_change_hall',
    type: 'class_trainer',
    classToTeach: 'ranger',
    dialogue: [
      {
        id: 'greeting',
        text: '嘿，你的步伐不錯嘛。想成為遊俠？速度與精準，就是我們的信條。',
        options: [
          { text: '我想成為遊俠！', nextId: 'class_change_check' },
          { text: '告訴我遊俠的特色。', nextId: 'class_info' },
          { text: '遊俠之後可以轉什麼？', nextId: 'advanced_info' },
          { text: '暫時不了。', nextId: 'farewell' },
        ],
      },
      {
        id: 'class_info',
        text: '遊俠是敏捷型職業，高閃避高暴擊。精準射擊百發百中，快速移動讓敵人追不上。' +
          '還能用毒箭和陷阱來消耗敵人。轉職會獲得敏捷+8、力量+2、體質+1、幸運+1的加成。',
        options: [
          { text: '就是它了，轉職遊俠！', nextId: 'class_change_check' },
          { text: '我再想想。', nextId: 'farewell' },
        ],
      },
      {
        id: 'advanced_info',
        text: '遊俠有三條專精道路：' +
          '「神射手」——遠程爆發，精準狙殺；' +
          '「刺客」——潛行暗殺，單體爆發；' +
          '「馴獸師」——召喚夥伴，人寵協同作戰。',
        options: [
          { text: '我要成為遊俠！', nextId: 'class_change_check' },
          { text: '容我考慮一下。', nextId: 'farewell' },
        ],
      },
      {
        id: 'class_change_check',
        text: '來，射一箭讓我看看你的準頭。',
        action: { type: 'class_change', data: { classId: 'ranger' } },
        options: [
          { text: '多謝教練！', nextId: 'farewell' },
        ],
      },
      {
        id: 'farewell',
        text: '風是自由的，遊俠也是。保持敏銳，保持冷靜。',
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
    title: '祭司導師',
    roomId: 'class_change_hall',
    type: 'class_trainer',
    classToTeach: 'priest',
    dialogue: [
      {
        id: 'greeting',
        text: '願光明庇佑你，旅人。我是神殿的祭司。你是否感受到了神聖力量的召喚？',
        options: [
          { text: '我想成為祭司！', nextId: 'class_change_check' },
          { text: '告訴我祭司的特色。', nextId: 'class_info' },
          { text: '祭司之後可以轉什麼？', nextId: 'advanced_info' },
          { text: '暫時不了。', nextId: 'farewell' },
        ],
      },
      {
        id: 'class_info',
        text: '祭司是治療輔助職業，隊伍中不可或缺的存在。治癒、淨化、祝福——' +
          '有了祭司，隊伍的生存能力將大幅提升。轉職會獲得智力+5、體質+3、幸運+3、敏捷+1的加成。',
        options: [
          { text: '我願意走這條路，轉職祭司！', nextId: 'class_change_check' },
          { text: '讓我再想想。', nextId: 'farewell' },
        ],
      },
      {
        id: 'advanced_info',
        text: '祭司可以選擇三條專精之路：' +
          '「神官」——純治療，團隊的守護者；' +
          '「德魯伊」——混合型，能治療也能輸出；' +
          '「審判者」——攻擊型祭司，以聖光為劍制裁邪惡。',
        options: [
          { text: '我要追隨光明！', nextId: 'class_change_check' },
          { text: '我需要再考慮。', nextId: 'farewell' },
        ],
      },
      {
        id: 'class_change_check',
        text: '閉上眼睛，感受聖光的流動……',
        action: { type: 'class_change', data: { classId: 'priest' } },
        options: [
          { text: '感謝祭司大人！', nextId: 'farewell' },
        ],
      },
      {
        id: 'farewell',
        text: '願聖光永遠照耀你的前路。無論選擇什麼道路，都要心存善念。',
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
    title: '資深獵手',
    roomId: 'hunter_lodge',
    type: 'merchant',
    shopItems: [
      'short_bow', 'hunting_bow', 'antidote',
      'small_hp_potion', 'medium_hp_potion',
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
          { text: '告辭了。', nextId: 'farewell' },
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
    title: '酒館老闆',
    roomId: 'tavern',
    type: 'merchant',
    shopItems: [
      'small_hp_potion', 'medium_hp_potion',
      'small_mp_potion', 'medium_mp_potion',
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
          '另外也有一些藥水，出門冒險前補給一下總沒壞處。',
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
    title: '知識守護者',
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
    title: '監獄看守',
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
};

/** 取得 NPC 定義 */
export function getNpc(npcId: string): NpcDef | undefined {
  return NPCS[npcId];
}

/** 取得房間內所有 NPC */
export function getNpcsByRoom(roomId: string): NpcDef[] {
  return Object.values(NPCS).filter(npc => npc.roomId === roomId);
}

/** 根據名稱模糊搜尋 NPC */
export function findNpcByName(name: string, roomId?: string): NpcDef | undefined {
  const candidates = roomId
    ? Object.values(NPCS).filter(npc => npc.roomId === roomId)
    : Object.values(NPCS);
  return candidates.find(
    npc => npc.name === name || npc.name.includes(name) || npc.id.includes(name),
  );
}
