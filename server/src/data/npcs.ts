// NPC 定義 - 所有 NPC 與對話樹

import type { NpcDef } from '@game/shared';

export const NPCS: Record<string, NpcDef> = {

  // ─── 新手村 NPC ──────────────────────────────────────────

  village_chief: {
    id: 'village_chief',
    name: '村長',
    alias: 'elder',
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
    alias: 'mentor',
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
    alias: 'smith',
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
    alias: 'alchemist',
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
    alias: 'swordmaster',
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
    alias: 'mage',
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
    alias: 'ranger',
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
    alias: 'priest',
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
    alias: 'hunter',
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
    alias: 'bartender',
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
    alias: 'librarian',
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
    alias: 'guard',
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

  // ─── 翠綠平原擴充 NPC ──────────────────────────────────

  traveling_merchant: {
    id: 'traveling_merchant',
    name: '旅行商人',
    alias: 'trader',
    title: '各地行商',
    roomId: 'sunflower_field',
    type: 'merchant',
    shopItems: [
      'iron_sword', 'leather_armor', 'leather_boots',
      'small_hp_potion', 'medium_hp_potion',
      'small_mp_potion', 'antidote', 'return_scroll',
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

  wandering_bard: {
    id: 'wandering_bard',
    name: '流浪吟遊詩人',
    alias: 'bard',
    title: '吟遊詩人',
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
          '不過水流太急，一般人過不去。',
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
          '不過守在那裡的螃蟹精可不好對付。',
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
    roomId: 'fishing_dock',
    type: 'merchant',
    shopItems: [
      'grilled_meat', 'stew', 'adventure_bento',
      'small_hp_potion', 'medium_hp_potion', 'antidote',
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
          '喝一碗能暖到骨子裡。出門冒險前吃飽喝足，打起怪來才有勁！',
        action: { type: 'shop', data: { shopType: 'seafood' } },
        options: [
          { text: '謝謝老闆。', nextId: 'farewell' },
        ],
      },
      {
        id: 'business',
        text: '唉，最近生意不太好做。海裡那個大傢伙嚇跑了不少魚，漁獲少了價格就上去了。' +
          '不過我的手藝可不會偷工減料！便宜又好吃，這是老字號的招牌。',
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
          '再加上矮人鍛造的鐵釘……嗯，造一條好船可不便宜。',
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

  elf_scholar: {
    id: 'elf_scholar',
    name: '精靈學者',
    alias: 'scholar',
    title: '遠古知識守護者',
    roomId: 'elf_altar',
    type: 'general',
    dialogue: [
      {
        id: 'greeting',
        text: '……你能找到這裡，說明你不是普通的冒險者。我是精靈族最後的學者之一。' +
          '這座祭壇是我們一族在這片森林留下的最後遺產。',
        options: [
          { text: '精靈族發生了什麼事？', nextId: 'elf_history' },
          { text: '祭壇有什麼特殊的力量嗎？', nextId: 'altar_power' },
          { text: '暗影之力是怎麼回事？', nextId: 'shadow_lore' },
          { text: '打擾了。', nextId: 'farewell' },
        ],
      },
      {
        id: 'elf_history',
        text: '精靈族曾是這片森林的守護者，與大自然和諧共存了數千年。' +
          '但「暗影浩劫」改變了一切——為了封印從深淵湧出的黑暗，' +
          '精靈長老們獻出了生命之力，在祭壇上編織了最後的結界。' +
          '如今精靈族四散各處，只有我還留在這裡守護祭壇。',
        options: [
          { text: '結界還能維持多久？', nextId: 'barrier_status' },
          { text: '令人敬佩。', nextId: 'farewell' },
        ],
      },
      {
        id: 'barrier_status',
        text: '不長了……結界正在被暗影之力一點一點侵蝕。如果有人能找到四種元素水晶，' +
          '也許能修復結界。火元素在火山、冰元素在雪原、光元素在地底祭壇、暗元素則需要從暗影狼王身上取得。',
        options: [
          { text: '我會去尋找的。', nextId: 'farewell' },
        ],
      },
      {
        id: 'altar_power',
        text: '祭壇能淨化暗影之力的侵蝕。你站在這裡，應該能感受到身體的疲憊在消退。' +
          '此外，祭壇上的水晶球記錄著精靈族的魔法知識——觸碰它，也許你能領悟到一些東西。',
        options: [
          { text: '精靈魔法……', nextId: 'elf_magic' },
          { text: '非常感謝。', nextId: 'farewell' },
        ],
      },
      {
        id: 'elf_magic',
        text: '精靈魔法講究與自然的共鳴。不同於人類法師的元素操控，精靈魔法是請求自然之力的幫助。' +
          '治癒、守護、感知——這些都是精靈魔法的核心。祭司職業的一些技能其實源自精靈魔法。',
        options: [
          { text: '受益良多。', nextId: 'farewell' },
        ],
      },
      {
        id: 'shadow_lore',
        text: '暗影之力來自深淵——那是位於大陸最底層的次元裂縫。' +
          '千年前精靈長老們封印了裂縫，但封印正在衰弱。枯萎之林就是暗影外洩的證據。' +
          '如果不加以遏制，整片森林……不，整片大陸都會被暗影吞噬。',
        options: [
          { text: '有辦法阻止嗎？', nextId: 'barrier_status' },
          { text: '這太嚴重了……', nextId: 'farewell' },
        ],
      },
      {
        id: 'farewell',
        text: '願月光指引你的道路。這片森林還有希望……只要有人願意守護它。',
      },
    ],
    guardianHints: {
      creature: '精靈學者身邊浮游著幾顆微光球體——那是精靈族的魔法精華凝聚而成的意志體。',
      treasure: '水晶球中不只有知識，還封存著精靈女王的一縷意識，能與之交流也許可以獲得獨特的恩賜。',
      spirit: '精靈學者看似年輕，但她的眼眸中倒映著千年的歲月——她可能就是當年參與封印的長老之一。',
    },
  },

  herb_gatherer: {
    id: 'herb_gatherer',
    name: '藥草採集者',
    alias: 'herbalist',
    title: '森林藥師',
    roomId: 'deep_poison_swamp',
    type: 'merchant',
    shopItems: [
      'small_hp_potion', 'medium_hp_potion', 'large_hp_potion',
      'small_mp_potion', 'medium_mp_potion',
      'antidote', 'strength_potion', 'agility_potion',
    ],
    dialogue: [
      {
        id: 'greeting',
        text: '噓——別驚動那些毒蛙！我是在這片沼澤裡採集稀有藥草的藥師。' +
          '這裡的毒蘑菇雖然危險，但提煉後可是上好的藥材呢。要買藥水嗎？',
        options: [
          { text: '讓我看看藥水。', nextId: 'shop' },
          { text: '你不怕中毒嗎？', nextId: 'poison_resist' },
          { text: '不用了。', nextId: 'farewell' },
        ],
      },
      {
        id: 'shop',
        text: '我自己調配的藥水，品質可不輸城鎮裡的藥店！還有特殊的增幅藥水，' +
          '喝了能暫時提升你的能力。在這種危險的地方，多帶點藥水準沒錯。',
        action: { type: 'shop', data: { shopType: 'herb' } },
        options: [
          { text: '謝謝。', nextId: 'farewell' },
        ],
      },
      {
        id: 'poison_resist',
        text: '在這裡待久了，身體自然就有了抗毒性。而且我有祖傳的解毒配方，' +
          '什麼毒都不怕。倒是你，在沼澤裡行動要小心，毒霧吸多了會頭暈。' +
          '帶幾瓶解毒劑防身吧。',
        options: [
          { text: '買些解毒劑。', nextId: 'shop' },
          { text: '好的，謝謝提醒。', nextId: 'farewell' },
        ],
      },
      {
        id: 'farewell',
        text: '小心腳下，別踩到毒蘑菇。要是中毒了趕緊回來找我！',
      },
    ],
    guardianHints: {
      creature: '藥草採集者養了一隻免疫所有毒素的變異青蛙，幫她探測沼澤中的危險。',
      treasure: '她的藥草袋裡有一株傳說中的千年靈芝——足以調配出提升永久屬性的秘藥。',
      spirit: '藥草採集者能與植物交流，這不是普通的技能，而是一種失傳已久的精靈秘術。',
    },
  },

  // ─── 火山地帶 NPC ──────────────────────────────────────

  dwarf_blacksmith: {
    id: 'dwarf_blacksmith',
    name: '矮人鍛造師',
    alias: 'dwarfsmith',
    title: '傳奇鍛造大師',
    roomId: 'forge_hall',
    type: 'merchant',
    shopItems: [
      'steel_sword', 'flame_sword', 'long_bow', 'composite_bow',
      'oak_staff', 'crystal_staff', 'holy_scepter', 'divine_scepter',
      'chain_mail', 'plate_armor', 'iron_helm', 'iron_gauntlets', 'iron_boots',
    ],
    dialogue: [
      {
        id: 'greeting',
        text: '哈！又有人被爐火的熱度嚇到了嗎？我是矮人一族的鍛造大師，' +
          '這座鍛造大廳是我們祖先用火山岩建造的傑作。想要好武器？你算來對地方了！',
        options: [
          { text: '讓我看看你的武器！', nextId: 'shop' },
          { text: '你能鍛造什麼等級的武器？', nextId: 'crafting' },
          { text: '矮人族的鍛造技術是怎麼來的？', nextId: 'dwarf_lore' },
          { text: '告辭了。', nextId: 'farewell' },
        ],
      },
      {
        id: 'shop',
        text: '看看吧！從鋼劍到炎之劍，從鎖子甲到板甲——全是我親手鍛造的精品！' +
          '矮人出品，品質保證。你在別的地方可買不到這麼好的東西。',
        action: { type: 'shop', data: { shopType: 'dwarf_forge' } },
        options: [
          { text: '好東西！', nextId: 'farewell' },
        ],
      },
      {
        id: 'crafting',
        text: '普通的鍛造對我來說小菜一碟。但如果你能帶來稀有材料——' +
          '比如水晶核心、暗影精華、冰元素核心這些東西，我就能鍛造出傳說級的武器。' +
          '那種武器可是有靈魂的！嘿嘿。',
        options: [
          { text: '需要什麼材料？', nextId: 'materials_detail' },
          { text: '看看普通商品吧。', nextId: 'shop' },
        ],
      },
      {
        id: 'materials_detail',
        text: '水晶核心在水晶洞窟的守護者身上，暗影精華要從暗影森林的強力怪物身上取得，' +
          '冰元素核心則在冰封雪原的深處。集齊材料再來找我，我讓你見識見識矮人鍛造的真正實力！',
        options: [
          { text: '我記住了。', nextId: 'farewell' },
        ],
      },
      {
        id: 'dwarf_lore',
        text: '矮人族自古以來就是大陸上最強的工匠。我們的祖先在這座火山的爐火中' +
          '鍛造了無數傳世名作。雖然如今矮人一族人丁稀少，但鍛造技術從未失傳。' +
          '這座鍛造大廳裡的爐火已經燃燒了上千年，從未熄滅！',
        options: [
          { text: '令人敬佩！', nextId: 'farewell' },
        ],
      },
      {
        id: 'farewell',
        text: '哈哈！等你有好材料了再來。矮人鍛造師的大門永遠為勇者敞開！',
      },
    ],
    guardianHints: {
      creature: '鍛造大廳深處有一頭火蜥蜴幫忙維持爐火——牠的體內流淌著火元素的血液。',
      treasure: '大師的私人收藏室裡保存著一把尚未完工的傳說武器——據說只差最後一種材料。',
      spirit: '矮人鍛造師的錘擊聲中蘊含著古老的矮人符文之力，每一次錘打都是一次附魔。',
    },
  },

  mine_foreman: {
    id: 'mine_foreman',
    name: '礦工頭目',
    alias: 'foreman',
    title: '礦場監工',
    roomId: 'dwarf_mine',
    type: 'quest',
    dialogue: [
      {
        id: 'greeting',
        text: '咳咳……你是來打礦的嗎？這礦洞裡粉塵太多了……' +
          '我是這裡的工頭。最近礦洞深處出了些怪物，礦工們都不敢往深處走了。' +
          '要是你能幫忙清一清，我有好東西給你。',
        options: [
          { text: '什麼怪物？', nextId: 'monster_info' },
          { text: '礦洞裡有什麼好礦石？', nextId: 'ore_info' },
          { text: '有什麼任務嗎？', nextId: 'quest_detail' },
          { text: '我先走了。', nextId: 'farewell' },
        ],
      },
      {
        id: 'monster_info',
        text: '岩石魔像和火蜥蜴，最近不知道為什麼越來越多。' +
          '可能是深處的岩漿活動把牠們從更下層驅趕上來的。' +
          '矮人戰士們已經在前線擋著了，但人手不夠。',
        options: [
          { text: '我去幫忙。', nextId: 'farewell' },
          { text: '有什麼報酬？', nextId: 'quest_detail' },
        ],
      },
      {
        id: 'ore_info',
        text: '這座礦洞出產精鐵礦和黑曜石。更深處據說有秘銀礦脈，' +
          '但那些區域被怪物佔據了。如果你能清理出通道，' +
          '我們可以分你一些珍貴的礦石。',
        options: [
          { text: '秘銀！那我一定去。', nextId: 'farewell' },
        ],
      },
      {
        id: 'quest_detail',
        text: '簡單說——幫我們清掉礦洞深處第三層的岩石魔像群。完成之後，' +
          '我給你一批精鐵礦石，拿去找鍛造師能做出好東西。' +
          '另外，如果你在深處看到發光的石頭記得帶回來，那可能是稀有礦石。',
        options: [
          { text: '交給我。', nextId: 'farewell' },
        ],
      },
      {
        id: 'farewell',
        text: '進礦洞記得帶火把。黑暗裡要是迷了路，就順著鐵軌走——鐵軌永遠通向出口。',
      },
    ],
    guardianHints: {
      creature: '礦洞最深處有一隻體型如牛的火蜥蜴王——牠守護著一處天然的秘銀礦脈。',
      treasure: '礦工們在岩壁中發現了一塊包裹著古代符文的黑曜石，可能是矮人祖先留下的鑰匙。',
      spirit: '工頭偶爾會對著礦洞深處低聲自語——他似乎能聽到岩石的聲音，感知礦脈的走向。',
    },
  },

  flame_priest: {
    id: 'flame_priest',
    name: '火焰祭司',
    alias: 'flamepriest',
    title: '火神侍者',
    roomId: 'fire_temple_entrance',
    type: 'general',
    dialogue: [
      {
        id: 'greeting',
        text: '火焰不滅，火神長存。歡迎來到火之神殿，旅人。' +
          '我是侍奉火神的祭司，守護這座神殿已有五十年。',
        options: [
          { text: '火神是什麼？', nextId: 'fire_god' },
          { text: '這座神殿有什麼歷史？', nextId: 'temple_history' },
          { text: '火山有危險嗎？', nextId: 'volcano_danger' },
          { text: '告辭了。', nextId: 'farewell' },
        ],
      },
      {
        id: 'fire_god',
        text: '火神是大陸四元素之主之一——司掌火焰、鍛造與毀滅。' +
          '矮人族世代信奉火神，感謝祂賜予爐火的力量。' +
          '火神並非邪惡——火焰既能毀滅也能創造，就像鍛造需要熾熱的爐火一樣。',
        options: [
          { text: '其他三位元素之主呢？', nextId: 'other_elements' },
          { text: '我明白了。', nextId: 'farewell' },
        ],
      },
      {
        id: 'other_elements',
        text: '水之主沉睡在大陸某處的深海，風之主遊蕩在高空之上，地之主則隱居在水晶洞窟的最深處。' +
          '四位元素之主維持著大陸的平衡——如果其中一位力量暴走，後果不堪設想。' +
          '近年來火山活動頻繁，可能與火神的躁動有關……',
        options: [
          { text: '火神在躁動？', nextId: 'volcano_danger' },
          { text: '感謝你的教導。', nextId: 'farewell' },
        ],
      },
      {
        id: 'temple_history',
        text: '這座神殿建於矮人王國鼎盛時期，用火山岩和黑曜石築造，能承受岩漿的溫度。' +
          '神殿深處有一個火焰祭壇，是矮人族與火神溝通的聖地。' +
          '不過最近祭壇的火焰變得異常猛烈……',
        options: [
          { text: '為什麼會這樣？', nextId: 'volcano_danger' },
          { text: '謝謝你的介紹。', nextId: 'farewell' },
        ],
      },
      {
        id: 'volcano_danger',
        text: '火山最近的活動越來越頻繁——地震、岩漿上湧、溫度升高。' +
          '我擔心火山口深處可能有什麼東西在甦醒。傳說中火山最深處沉睡著一頭火龍，' +
          '牠的翻身就足以引發大規模的火山爆發。如果火龍醒來……',
        options: [
          { text: '有辦法阻止嗎？', nextId: 'prevent' },
          { text: '我會當心的。', nextId: 'farewell' },
        ],
      },
      {
        id: 'prevent',
        text: '也許……如果能找到火神的信物——一枚火元素結晶，放置在祭壇上，' +
          '就能安撫火龍的躁動。但火元素結晶極其稀有，通常只在岩漿河的源頭才能找到。',
        options: [
          { text: '我去找找看。', nextId: 'farewell' },
        ],
      },
      {
        id: 'farewell',
        text: '願火焰之力照亮你的前路，而非灼傷你的身軀。保重。',
      },
    ],
    guardianHints: {
      creature: '神殿的永恆之火中棲息著一隻火焰精靈——牠是火神意志的碎片。',
      treasure: '祭壇後方的密室裡供奉著一件火神信物，只有被火焰認可的人才能觸碰。',
      spirit: '火焰祭司的雙眼在黑暗中會閃爍火紅色的光芒——他體內流淌著火元素的血液。',
    },
  },

  // ─── 水晶洞窟 NPC ──────────────────────────────────────

  crystal_scholar: {
    id: 'crystal_scholar',
    name: '水晶學者',
    alias: 'crystalist',
    title: '地底研究員',
    roomId: 'amethyst_corridor',
    type: 'general',
    dialogue: [
      {
        id: 'greeting',
        text: '噢！你也對水晶感興趣嗎？我是研究地底水晶構造的學者。' +
          '這些紫水晶的生長方式完全不符合自然規律——它們是被魔力催生出來的！',
        options: [
          { text: '這裡的水晶有什麼特別的？', nextId: 'crystal_info' },
          { text: '地底種族是什麼？', nextId: 'ancient_race' },
          { text: '這裡安全嗎？', nextId: 'safety' },
          { text: '有趣，但我得走了。', nextId: 'farewell' },
        ],
      },
      {
        id: 'crystal_info',
        text: '不同顏色的水晶蘊含不同的元素之力。紫水晶影響精神，翡翠水晶有治癒效果，' +
          '鑽石水晶則蘊含純粹的魔力。如果把這些水晶按照特定的排列方式組合……' +
          '理論上可以製造出強大的魔法道具。',
        options: [
          { text: '怎麼組合？', nextId: 'combination' },
          { text: '有意思。', nextId: 'farewell' },
        ],
      },
      {
        id: 'combination',
        text: '地底種族留下的古書裡記載了水晶組合的方法。可惜那本書被水晶封印在鑽石密室裡，' +
          '我還沒找到打開封印的方法。需要四種元素水晶作為鑰匙……你如果找到了，一定要告訴我！',
        options: [
          { text: '我會留意的。', nextId: 'farewell' },
        ],
      },
      {
        id: 'ancient_race',
        text: '地底種族——也被稱為「晶民」——是一個以水晶為核心建造文明的種族。' +
          '他們能操控水晶的生長，用水晶建造城市、製造武器、甚至儲存記憶。' +
          '可惜他們在暗影浩劫中為了封印深淵而犧牲了整個種族。這些水晶洞窟就是他們文明的遺跡。',
        options: [
          { text: '他們的知識還保留著嗎？', nextId: 'combination' },
          { text: '令人感傷的歷史。', nextId: 'farewell' },
        ],
      },
      {
        id: 'safety',
        text: '不太安全。水晶蜥蜴把這裡當成了巢穴，水晶魔像會攻擊任何靠近的生物。' +
          '更深處的幽靈騎士——那是地底種族的守護者殘魂——非常強大。' +
          '沒有充分準備不要深入。',
        options: [
          { text: '我會小心的。', nextId: 'farewell' },
        ],
      },
      {
        id: 'farewell',
        text: '小心紫水晶的眩暈效果——在走廊裡停留太久會產生幻覺。祝你研究順利……呃，冒險順利！',
      },
    ],
    guardianHints: {
      creature: '學者身邊漂浮著一顆微型水晶球——那是他用地底種族的技術製造的記錄裝置。',
      treasure: '學者的筆記本裡詳細記載了每一種水晶的特性和位置，對尋寶者來說價值連城。',
      spirit: '學者對地底種族的了解太過深入——他的夢境中經常出現晶民的記憶片段。',
    },
  },

  gem_merchant: {
    id: 'gem_merchant',
    name: '寶石商人',
    alias: 'jeweler',
    title: '地底珠寶商',
    roomId: 'diamond_chamber',
    type: 'merchant',
    shopItems: [
      'crystal_shard', 'lucky_charm', 'power_amulet', 'wisdom_amulet',
      'medium_hp_potion', 'large_hp_potion',
      'medium_mp_potion', 'large_mp_potion',
    ],
    dialogue: [
      {
        id: 'greeting',
        text: '嘿嘿嘿……歡迎來到我的秘密店鋪！在地表你可買不到這些好東西。' +
          '水晶碎片、魔法護符，應有盡有。價格嘛……一分錢一分貨！',
        options: [
          { text: '讓我看看商品。', nextId: 'shop' },
          { text: '你怎麼在這種地方做生意？', nextId: 'how_here' },
          { text: '不用了。', nextId: 'farewell' },
        ],
      },
      {
        id: 'shop',
        text: '看看吧！這些水晶碎片可以用來強化裝備，護符能提供持續的屬性加成。' +
          '在洞窟深處冒險前，最好先備齊補給和護身飾品。',
        action: { type: 'shop', data: { shopType: 'gem' } },
        options: [
          { text: '好東西！', nextId: 'farewell' },
        ],
      },
      {
        id: 'how_here',
        text: '哈哈，我可是從矮人那邊學來的——哪裡有礦石，哪裡就有商機。' +
          '冒險者們在洞窟裡打完怪，渾身是傷，急需藥水和補給。' +
          '而我正好在這裡等著他們。雙贏！',
        options: [
          { text: '果然是生意人。', nextId: 'shop' },
          { text: '告辭了。', nextId: 'farewell' },
        ],
      },
      {
        id: 'farewell',
        text: '嘿嘿，下次帶更多金幣來！記住——在洞窟裡，命比錢重要。',
      },
    ],
    guardianHints: {
      creature: '寶石商人的口袋裡似乎有什麼東西在蠕動——他養了一隻能嗅出寶石的地底蟲。',
      treasure: '商人展示的只是普通貨色——他最好的寶石藏在一個空間魔法袋裡，只賣給出得起價的客人。',
      spirit: '寶石商人的瞳孔在光線下會反射出水晶般的光澤——他可能有地底種族的血統。',
    },
  },

  dead_adventurer: {
    id: 'dead_adventurer',
    name: '冒險者殘骸',
    alias: 'remains',
    title: '迷失的靈魂',
    roomId: 'underground_waterfall',
    type: 'general',
    dialogue: [
      {
        id: 'greeting',
        text: '……嗯？你能看見我嗎？已經很久沒有活人注意到我了。' +
          '我是……曾經是一名冒險者。在這裡探險時被水晶魔像擊敗，就再也沒有離開過……',
        options: [
          { text: '你知道這裡的秘密嗎？', nextId: 'secrets' },
          { text: '你是怎麼死的？', nextId: 'death_story' },
          { text: '有辦法幫你超度嗎？', nextId: 'salvation' },
          { text: '安息吧。', nextId: 'farewell' },
        ],
      },
      {
        id: 'secrets',
        text: '瀑布……後面有一條密道……通往古代祭壇。但祭壇的守護者……' +
          '幽靈騎士……比任何怪物都強。他曾是地底王國的騎士團長，' +
          '死後的力量比活著時更加恐怖……如果你要去，至少需要一隊人……',
        options: [
          { text: '祭壇上有什麼？', nextId: 'altar_secret' },
          { text: '我會注意的。', nextId: 'farewell' },
        ],
      },
      {
        id: 'altar_secret',
        text: '祭壇上有……地底種族的王權之器……據說能操控整個洞窟的水晶。' +
          '但啟動它需要四種元素精華……我當初就是為了尋找它才來到這裡的……' +
          '可惜……再也沒有機會了……',
        options: [
          { text: '我會替你完成這個願望。', nextId: 'farewell' },
        ],
      },
      {
        id: 'death_story',
        text: '我太大意了……以為自己的實力足夠獨自深入。' +
          '在鑽石密室裡被兩隻水晶魔像圍攻，退到瀑布邊時腳下一滑……' +
          '冒險者啊，千萬別獨自行動，尤其在未知的區域。這是我用命換來的教訓。',
        options: [
          { text: '我會記住的。', nextId: 'farewell' },
        ],
      },
      {
        id: 'salvation',
        text: '超度嗎……也許吧。如果有人能在古代祭壇上為我祈禱，我的靈魂也許能獲得安息。' +
          '但那需要祭司的力量，還需要聖光的祝福……你如果認識祭司，拜託你了……',
        options: [
          { text: '我會找祭司來幫你的。', nextId: 'farewell' },
        ],
      },
      {
        id: 'farewell',
        text: '去吧……活著的人不應該在死者身邊逗留太久……願你比我走得更遠。',
      },
    ],
    guardianHints: {
      creature: '靈魂旁邊偶爾出現半透明的蝙蝠——那是受到死者怨氣吸引的靈體。',
      treasure: '冒險者殘骸的背包裡還有一些他生前收集的物品——也許對活著的人有用。',
      spirit: '這個靈魂困在洞窟中是因為他的遺願未了——找到王權之器的夢想將他束縛在此。',
    },
  },

  // ─── 冰封雪原 NPC ──────────────────────────────────────

  snow_guide: {
    id: 'snow_guide',
    name: '雪地嚮導',
    alias: 'guide',
    title: '極地生存專家',
    roomId: 'snowfield_entrance',
    type: 'quest',
    dialogue: [
      {
        id: 'greeting',
        text: '嘿，等等！你就這麼要往雪原裡走？這裡可不是鬧著玩的——' +
          '暴風雪能在幾分鐘內讓你失去方向，凍死在雪地裡。讓我給你一些建議。',
        options: [
          { text: '雪原有什麼需要注意的？', nextId: 'survival_tips' },
          { text: '你能帶我穿過暴風雪嗎？', nextId: 'guide_offer' },
          { text: '冰封城堡在哪裡？', nextId: 'ice_castle_info' },
          { text: '我沒問題的。', nextId: 'farewell' },
        ],
      },
      {
        id: 'survival_tips',
        text: '第一，保暖。沒有毛皮裝備的話，在暴風雪中每分鐘都在掉體力。' +
          '第二，跟著石碑走。雪原中有古人立的指路石碑，跟著它們就不會迷路。' +
          '第三，遠離狼群。雪狼成群結隊出沒，單獨行動很容易被圍攻。',
        options: [
          { text: '謝謝提醒。', nextId: 'farewell' },
          { text: '冰封城堡怎麼走？', nextId: 'ice_castle_info' },
        ],
      },
      {
        id: 'guide_offer',
        text: '帶路可以，但暴風雪小徑那邊太危險了——連我都不敢在風暴最強的時候穿越。' +
          '你需要等風勢減弱的時候才能通過。或者……如果你能從山營地的毛皮商那裡' +
          '弄到特製的防風斗篷，也許能硬闖過去。',
        options: [
          { text: '防風斗篷？', nextId: 'cloak_info' },
          { text: '好的，我先去準備。', nextId: 'farewell' },
        ],
      },
      {
        id: 'cloak_info',
        text: '山營地的毛皮商賣一種用雪狼皮製成的斗篷，能大幅抵禦暴風雪的影響。' +
          '價格不便宜，但在雪原裡那就是保命的東西。',
        options: [
          { text: '我去看看。', nextId: 'farewell' },
        ],
      },
      {
        id: 'ice_castle_info',
        text: '冰封城堡在雪原的最北端，需要穿過暴風雪小徑、越過冰川才能到達。' +
          '城堡的大門被冰封了千年，據說只有持有冰元素核心的人才能打開。' +
          '裡面沉睡著傳說中的冰龍……你真的要去？',
        options: [
          { text: '我會做好準備的。', nextId: 'farewell' },
          { text: '冰龍有多強？', nextId: 'ice_dragon' },
        ],
      },
      {
        id: 'ice_dragon',
        text: '沒人見過冰龍還能活著回來說的。傳說牠的吐息能瞬間凍結一切，' +
          '翅膀展開能遮蔽整片天空。如果你真要挑戰牠，' +
          '至少要集結一支精銳隊伍，帶上大量的火屬性武器和藥水。',
        options: [
          { text: '我會準備好的。', nextId: 'farewell' },
        ],
      },
      {
        id: 'farewell',
        text: '在雪原裡，活下來比逞英雄更重要。保重。',
      },
    ],
    guardianHints: {
      creature: '嚮導身後的雪地裡有一對冰藍色的眼睛在暗中觀察——那是他馴服的雪狼在守護。',
      treasure: '嚮導的營地裡有一張手繪的雪原地圖，標記著所有安全的避風點和危險區域。',
      spirit: '嚮導曾在暴風雪中瀕臨死亡時被一位神秘的冰之精靈救起，從此他能感知暴風雪的來臨。',
    },
  },

  fur_merchant: {
    id: 'fur_merchant',
    name: '毛皮商人',
    alias: 'furrier',
    title: '極地皮貨商',
    roomId: 'mountain_camp',
    type: 'merchant',
    shopItems: [
      'leather_armor', 'leather_boots', 'leather_gloves', 'leather_cap',
      'large_hp_potion', 'large_mp_potion',
      'antidote', 'return_scroll',
    ],
    dialogue: [
      {
        id: 'greeting',
        text: '進來暖暖！在雪原裡做生意可不容易，但總得有人為冒險者們提供補給。' +
          '毛皮裝備、藥水、回城卷軸——在這冰天雪地裡，這些可都是救命的東西。',
        options: [
          { text: '看看你的商品。', nextId: 'shop' },
          { text: '你在這裡住了多久？', nextId: 'living_here' },
          { text: '不用了。', nextId: 'farewell' },
        ],
      },
      {
        id: 'shop',
        text: '皮甲、皮靴、皮手套——全是上好的雪狼皮製的，保暖又耐用。' +
          '藥水也帶足了，在雪原裡受傷可不是開玩笑的。另外回城卷軸多帶幾張，' +
          '萬一遇到暴風雪，一張卷軸就是你和死亡之間的距離。',
        action: { type: 'shop', data: { shopType: 'fur' } },
        options: [
          { text: '謝了。', nextId: 'farewell' },
        ],
      },
      {
        id: 'living_here',
        text: '十五年了。最開始是跟著一支探險隊來的，後來隊伍解散了，我就留下來做生意。' +
          '雪原看似荒涼，但這裡的動物皮毛可是最好的材料——城鎮裡的貴族們願意出高價購買。' +
          '不過最近雪狼群越來越兇猛，獵取毛皮的風險也越來越高了。',
        options: [
          { text: '辛苦了。看看商品吧。', nextId: 'shop' },
          { text: '保重。', nextId: 'farewell' },
        ],
      },
      {
        id: 'farewell',
        text: '出去記得裹緊衣服！凍掉手指可就沒法揮劍了。',
      },
    ],
    guardianHints: {
      creature: '營地外圍有幾隻被馴服的雪狼幫忙看守——牠們對陌生人保持警惕。',
      treasure: '商人的帳篷深處有一件冰藍色的斗篷——據說是用冰龍的鱗片縫製的，從不出售。',
      spirit: '毛皮商人能在零下四十度的暴風雪中安然入睡——他的體質已經超越了普通人類的極限。',
    },
  },

  ice_castle_guard: {
    id: 'ice_castle_guard',
    name: '冰封城堡看守',
    alias: 'iceguard',
    title: '永恆守衛',
    roomId: 'ice_castle_gate',
    type: 'general',
    dialogue: [
      {
        id: 'greeting',
        text: '……站住。你是活人嗎？已經……很久沒有活人走到這裡了。' +
          '我是冰封城堡的看守，在這裡守衛了……不記得多少年了。',
        options: [
          { text: '你是人類嗎？', nextId: 'identity' },
          { text: '城堡裡有什麼？', nextId: 'castle_info' },
          { text: '冰龍是真的嗎？', nextId: 'ice_dragon_info' },
          { text: '我要進去。', nextId: 'enter_warning' },
          { text: '告辭了。', nextId: 'farewell' },
        ],
      },
      {
        id: 'identity',
        text: '……曾經是。我是古代冰之王國的禁衛軍士兵。王國被冰龍的力量凍結後，' +
          '我們也成了冰的一部分。但意識還在……冰冷的意識，永遠清醒，永遠孤獨。' +
          '國王下達的最後命令是——守護城門，不讓任何人驚醒冰龍。',
        options: [
          { text: '冰之王國？', nextId: 'ice_kingdom' },
          { text: '你不會攻擊我吧？', nextId: 'peaceful' },
        ],
      },
      {
        id: 'ice_kingdom',
        text: '冰之王國曾是雪原上最強盛的國度。國王為了獲得永恆的力量，' +
          '試圖駕馭冰龍——結果引發了滅頂之災。冰龍的吐息將整座城堡連同所有居民凍成了冰。' +
          '只有冰龍自己也陷入了沉睡……如果牠醒來，災難將重演。',
        options: [
          { text: '有辦法徹底消滅冰龍嗎？', nextId: 'ice_dragon_info' },
          { text: '悲慘的歷史。', nextId: 'farewell' },
        ],
      },
      {
        id: 'peaceful',
        text: '……只要你不試圖強行進入城堡，我不會攻擊你。但如果你驚醒了冰龍……' +
          '我會不惜一切代價阻止災難的發生。這是我身為守衛的最後使命。',
        options: [
          { text: '我理解。', nextId: 'farewell' },
        ],
      },
      {
        id: 'castle_info',
        text: '城堡內部被冰完全封凍。王座大廳裡沉睡著冰龍和國王的遺體。' +
          '寶物庫中保存著冰之王國的國寶——據說有一把能操控冰雪的神弓，' +
          '就是傳說中的「冰之弓」。但進入城堡的條件是……你需要冰元素核心作為鑰匙。',
        options: [
          { text: '冰元素核心在哪裡？', nextId: 'core_location' },
          { text: '我明白了。', nextId: 'farewell' },
        ],
      },
      {
        id: 'core_location',
        text: '水晶冰洞深處。那裡有一頭冰元素巨獸守護著核心——' +
          '牠是冰龍力量的延伸，力量不可小覷。擊敗牠才能取得核心。',
        options: [
          { text: '我去準備。', nextId: 'farewell' },
        ],
      },
      {
        id: 'ice_dragon_info',
        text: '冰龍是上古時代的四大龍族之一——冰、火、雷、暗。' +
          '每一頭都擁有毀滅國家的力量。冰龍的弱點是火屬性攻擊，' +
          '但牠的冰息能瞬間凍結一切。如果要挑戰牠……做好死的準備。',
        options: [
          { text: '我不會退縮的。', nextId: 'farewell' },
        ],
      },
      {
        id: 'enter_warning',
        text: '……你確定嗎？城堡裡除了冰龍之外，還有被凍結的禁衛軍殘骸。' +
          '他們雖然肉體已死，但被冰龍之力驅動，會攻擊一切入侵者。' +
          '沒有充分準備的話，你進去就是送死。',
        options: [
          { text: '我會準備好的。', nextId: 'farewell' },
          { text: '冰龍的弱點是什麼？', nextId: 'ice_dragon_info' },
        ],
      },
      {
        id: 'farewell',
        text: '……願冰雪之下的亡靈得到安息。你走吧，活著的人不應該在這裡逗留。',
      },
    ],
    guardianHints: {
      creature: '看守的盔甲縫隙中不斷滲出冰霧——他的身體已經半冰晶化，介於生死之間。',
      treasure: '城堡大門的冰封之下隱約可見一枚鑰匙狀的冰元素結晶——那是開啟內殿的備用鑰匙。',
      spirit: '看守的靈魂被對王國的忠誠所束縛，千年來從未動搖。也許找到國王的遺詔能讓他獲得解脫。',
    },
  },

  // ─── 湖畔城鎮擴充 NPC ──────────────────────────────────

  innkeeper: {
    id: 'innkeeper',
    name: '旅館老闆',
    alias: 'innkeeper',
    title: '醉龍亭東家',
    roomId: 'tavern',
    type: 'merchant',
    shopItems: [
      'grilled_meat', 'stew', 'adventure_bento',
      'small_hp_potion', 'medium_hp_potion', 'large_hp_potion',
      'small_mp_potion', 'medium_mp_potion',
    ],
    dialogue: [
      {
        id: 'greeting',
        text: '歡迎來到醉龍亭！我是這裡的老闆。想吃點東西恢復體力？' +
          '還是想要住一晚好好休息？冒險者可不能拖著疲憊的身體上路。',
        options: [
          { text: '我想買些食物和藥水。', nextId: 'shop' },
          { text: '有什麼好吃的推薦嗎？', nextId: 'recommend' },
          { text: '最近有什麼消息嗎？', nextId: 'news' },
          { text: '不了，謝謝。', nextId: 'farewell' },
        ],
      },
      {
        id: 'shop',
        text: '烤肉、燉湯、冒險者便當——要填飽肚子的話都是好選擇。' +
          '藥水也有備，紅的回血、藍的回魔。冒險者出門前一定要補給充足！',
        action: { type: 'shop', data: { shopType: 'inn' } },
        options: [
          { text: '謝謝老闆。', nextId: 'farewell' },
        ],
      },
      {
        id: 'recommend',
        text: '今天的招牌是「龍火燉肉」——用火山地帶運來的香料慢燉了一整天，' +
          '吃一口渾身暖洋洋的。冒險者便當也不錯，方便攜帶，在路上隨時可以吃。',
        options: [
          { text: '聽起來不錯，買一些。', nextId: 'shop' },
          { text: '下次再來。', nextId: 'farewell' },
        ],
      },
      {
        id: 'news',
        text: '最近來了不少從各地趕來的冒險者，說是各個區域都有異常——' +
          '火山活動加劇、暗影森林的暗影擴散、冰封雪原的雪狼南移。' +
          '有老冒險者說這些現象和千年前的暗影浩劫之前很像……但願只是巧合。',
        options: [
          { text: '聽起來不妙。先補給一下。', nextId: 'shop' },
          { text: '謝謝情報。', nextId: 'farewell' },
        ],
      },
      {
        id: 'farewell',
        text: '路上小心！累了就回來歇歇，醉龍亭的大門永遠為冒險者敞開。',
      },
    ],
    guardianHints: {
      creature: '旅館的地窖裡養著一隻巨大的酒桶精——據說是醉龍亭初代老闆用魔法釀酒時意外創造的。',
      treasure: '旅館最裡面的房間從不對外開放，據說裡面保存著初代老闆——一位退休冒險者——的全套傳奇裝備。',
      spirit: '「醉龍亭」的名字來自一個真實的故事——初代老闆真的用酒灌醉過一頭幼龍。',
    },
  },

  town_banker: {
    id: 'town_banker',
    name: '銀行家',
    alias: 'banker',
    title: '王國財務官',
    roomId: 'auction_house',
    type: 'general',
    dialogue: [
      {
        id: 'greeting',
        text: '歡迎來到湖畔城鎮分行。我是王國的財務官，負責管理冒險者的資產。' +
          '存款、取款、資產查詢——有什麼需要服務的嗎？',
        options: [
          { text: '你們提供什麼服務？', nextId: 'services' },
          { text: '最近的經濟狀況如何？', nextId: 'economy' },
          { text: '不需要，謝謝。', nextId: 'farewell' },
        ],
      },
      {
        id: 'services',
        text: '我們提供金幣保管服務——冒險中被擊敗可能會損失隨身金幣，但存在銀行裡的絕對安全。' +
          '另外我們也提供貸款和匯款服務，方便在不同城鎮之間調度資金。' +
          '大額交易建議透過我們進行，可以避免被騙。',
        options: [
          { text: '好的，謝謝。', nextId: 'farewell' },
        ],
      },
      {
        id: 'economy',
        text: '最近物價有些波動。火山地帶的礦石漲價了——據說礦洞深處出了怪物，' +
          '產量減少了不少。冰封雪原的毛皮價格也在上升，因為雪狼群變得更兇猛了。' +
          '如果你有多餘的稀有材料，現在賣出去能賺不少。',
        options: [
          { text: '有用的消息。', nextId: 'farewell' },
        ],
      },
      {
        id: 'farewell',
        text: '王國銀行，值得信賴。祝您冒險順利，財源廣進。',
      },
    ],
    guardianHints: {
      creature: '銀行的金庫門上鑲嵌著一隻魔法石像鬼——任何試圖非法進入的人都會被它攻擊。',
      treasure: '金庫最深處有一個從未被打開過的保險箱，據說是開國國王存放的神秘遺物。',
      spirit: '銀行家的算盤不是普通的計算工具——那是一件能預測金融走向的魔法道具。',
    },
  },

  auctioneer: {
    id: 'auctioneer',
    name: '拍賣師',
    alias: 'auctioneer',
    title: '首席拍賣官',
    roomId: 'auction_house',
    type: 'general',
    dialogue: [
      {
        id: 'greeting',
        text: '各位各位！歡迎來到湖畔城鎮拍賣場！我是首席拍賣官，' +
          '每天下午開槌，價高者得！想委託拍賣還是來挖寶？',
        options: [
          { text: '最近有什麼好東西拍賣嗎？', nextId: 'hot_items' },
          { text: '怎麼委託拍賣？', nextId: 'how_to_sell' },
          { text: '只是來看看。', nextId: 'farewell' },
        ],
      },
      {
        id: 'hot_items',
        text: '今天的壓軸拍品是一把從暗影森林帶回來的暗影精華武器——起拍價五千金幣！' +
          '還有從水晶洞窟出土的水晶核心飾品，以及火山地帶的限量版矮人鎧甲。' +
          '件件都是好東西，想搶的話手要快、錢包要夠厚！',
        options: [
          { text: '有意思！', nextId: 'farewell' },
          { text: '我也想賣東西。', nextId: 'how_to_sell' },
        ],
      },
      {
        id: 'how_to_sell',
        text: '很簡單！把要賣的物品交給我，設一個底價，我來幫你喊價。' +
          '成交後抽取百分之十的佣金——公道吧？好東西在這裡能賣出比商店高得多的價格。' +
          '不過品質太差的東西我不收，砸了拍賣場的招牌可不行。',
        options: [
          { text: '明白了。', nextId: 'farewell' },
        ],
      },
      {
        id: 'farewell',
        text: '記住——好東西不等人！看到喜歡的就出手，猶豫就沒了。歡迎再來！',
      },
    ],
    guardianHints: {
      creature: '拍賣台底下有一隻訓練有素的魔法鼠在記錄所有的成交數據。',
      treasure: '拍賣場的倉庫裡有一件被遺忘的委託品——一把從未被人認領的傳說武器。',
      spirit: '拍賣師的嗓音有一種魔力——聽他喊價的人總會不自覺地想出更高的價格。那可能是一種輕微的魅惑魔法。',
    },
  },

  appraiser: {
    id: 'appraiser',
    name: '裝備鑑定師',
    alias: 'appraiser',
    title: '物品鑑定專家',
    roomId: 'guild_hall',
    type: 'general',
    dialogue: [
      {
        id: 'greeting',
        text: '你好，我是公會的裝備鑑定師。看你身上那些裝備……嗯，有幾件不錯的東西。' +
          '想讓我幫你鑑定一下嗎？有些裝備上隱藏著你不知道的特殊屬性。',
        options: [
          { text: '裝備有隱藏屬性嗎？', nextId: 'hidden_stats' },
          { text: '怎麼判斷裝備的品質？', nextId: 'quality_guide' },
          { text: '有什麼值得推薦的裝備嗎？', nextId: 'recommend' },
          { text: '不了，謝謝。', nextId: 'farewell' },
        ],
      },
      {
        id: 'hidden_stats',
        text: '是的！有些裝備在鑑定之前，你只能看到基礎數值。但經過我的鑑定後，' +
          '可能會發現額外的屬性加成、特殊效果甚至是套裝屬性。' +
          '越稀有的裝備，隱藏屬性越強。Boss 掉落的裝備尤其值得鑑定。',
        options: [
          { text: '有意思！', nextId: 'farewell' },
          { text: '裝備品質怎麼分？', nextId: 'quality_guide' },
        ],
      },
      {
        id: 'quality_guide',
        text: '裝備從低到高分為：普通（白色）、優良（綠色）、稀有（藍色）、' +
          '史詩（紫色）、傳說（橙色）。品質越高，基礎屬性和特殊效果越好。' +
          '另外，有些裝備屬於套裝——集齊全套會有額外的套裝加成效果。',
        options: [
          { text: '哪裡能找到好裝備？', nextId: 'recommend' },
          { text: '我明白了。', nextId: 'farewell' },
        ],
      },
      {
        id: 'recommend',
        text: '打Boss！每個區域的Boss都有機率掉落稀有以上品質的裝備。' +
          '暗影狼王掉的「暗影之爪」、水晶龍掉的「水晶龍鱗甲」都是頂級裝備。' +
          '另外矮人鍛造師那邊能用稀有材料鍛造史詩級武器——有材料的話去找他。',
        options: [
          { text: '謝謝指點！', nextId: 'farewell' },
        ],
      },
      {
        id: 'farewell',
        text: '有好裝備記得拿來讓我看看——說不定會有驚喜！',
      },
    ],
    guardianHints: {
      creature: '鑑定師的放大鏡裡住著一隻微型的知識精靈，幫助他看透物品的本質。',
      treasure: '鑑定師的工作台底下有一個上鎖的抽屜，裡面是他這些年來收集的被遺棄的稀有裝備。',
      spirit: '鑑定師的眼睛能直接看到物品中流動的魔力——這種能力被稱為「鑑定之眼」，是極其稀有的天賦。',
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
  const q = name.toLowerCase();
  return candidates.find(
    npc => npc.name === name || npc.name.includes(name) || npc.id.includes(name) || npc.alias.toLowerCase() === q || npc.alias.toLowerCase().includes(q),
  );
}
