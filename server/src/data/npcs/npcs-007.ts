import type { NpcDef } from '@game/shared';

export const NPCS_PART_007: Record<string, NpcDef> = {
blackwood_hunter_guide: {
    id: 'blackwood_hunter_guide',
    name: '瑟恩',
    alias: 'guide',
    title: '黑木獵徑嚮導',
    description:
      '一名獵人靠在炭樹入口旁，斗篷外層塗著黑木炭皮，腰間掛著刻痕符與不點燃的短燈。' +
      '他看路時不看前方，而是看樹影是否少了一截。',
    roomId: 'blackwood_charcoal_gate',
    type: 'quest',
    dialogue: [
      {
        id: 'greeting',
        text: '黑木林會換位置。你若只記路，就已經迷路了。',
        options: [
          { text: '怎麼辨認真路？', nextId: 'route' },
          { text: '林裡最危險的是什麼？', nextId: 'threats' },
          { text: '我會看刻痕。', nextId: 'farewell' },
        ],
      },
      {
        id: 'route',
        text: '看獵人刻痕符、看樹影缺口、看渡鴉是否逆著風站。若三者不同，跟最安靜的那條路走。',
        options: [
          { text: '林裡最危險的是什麼？', nextId: 'threats' },
          { text: '我去找刻痕符。', nextId: 'farewell' },
        ],
      },
      {
        id: 'threats',
        text: '影狼找火，蛛網找影子，女巫找你的判斷。真正的危險在黑心木核，因為那裡會讓整座森林替它移動。',
        options: [
          { text: '怎麼辨認真路？', nextId: 'route' },
          { text: '明白。', nextId: 'farewell' },
        ],
      },
      { id: 'farewell', text: '火把能照路，也能把你賣給森林。少用，快走。' },
    ],
    guardianHints: {
      creature: '瑟恩能辨認炭皮影狼、黑木織影蛛、渡鴉咒獵者與幽根黑樹人的活動痕跡。',
      treasure: '他的刻痕符說明黑木炭皮、幽影蛛絲、夜蕨毒液與黑心木影核的用途。',
      spirit: '他把黑木林的換位規則轉成玩家可以追蹤的生存方法。',
    },
  },

blackwood_witch_supplier: {
    id: 'blackwood_witch_supplier',
    name: '芙洛',
    alias: 'supplier',
    title: '夜蕨藥袋商',
    description:
      '一名藥袋商在女巫樹洞外整理黑苔、夜蕨毒液與幽影蛛絲，身後的短燈被三層黑布包住。' +
      '她不像女巫，卻熟悉女巫留下的每一種錯路。',
    roomId: 'blackwood_witch_hollow',
    type: 'merchant',
    shopItems: [
      'medium_hp_potion',
      'medium_mp_potion',
      'antidote',
      'blackbark_charcoal',
      'umbral_spider_silk',
      'nightfern_venom',
      'hunter_mark_charm',
    ],
    dialogue: [
      {
        id: 'greeting',
        text: '補給、解毒、遮光。黑木林裡這三樣比刀重要，刀只會讓你死得比較有信心。',
        options: [
          { text: '我看看補給。', nextId: 'shop' },
          { text: '黑心木核怎麼進？', nextId: 'heart' },
          { text: '晚點再來。', nextId: 'farewell' },
        ],
      },
      {
        id: 'shop',
        text: '藥水、解毒劑、黑木炭皮、幽影蛛絲、夜蕨毒液、獵人刻痕符。要進林心，別空手。',
        action: { type: 'shop', data: { shopType: 'blackwood_supply' } },
        options: [
          { text: '黑心木核怎麼進？', nextId: 'heart' },
          { text: '先這樣。', nextId: 'farewell' },
        ],
      },
      {
        id: 'heart',
        text: '先過長老樹環，再看倒塌小祠的根道。黑心木王會改路，刻痕符只能告訴你哪條路還是真的。',
        options: [
          { text: '我看看補給。', nextId: 'shop' },
          { text: '我會帶刻痕符。', nextId: 'farewell' },
        ],
      },
      { id: 'farewell', text: '若你的影子先走進樹洞，你就別跟著了。' },
    ],
    guardianHints: {
      creature: '芙洛能提示夜蕨女巫、灰盲暗精靈弓手、骨鈴潛行者與黑心木王的危險徵兆。',
      treasure: '她販售黑木炭皮、幽影蛛絲、夜蕨毒液與獵人刻痕符。',
      spirit: '她讓黑木林的材料和林心 Boss 線索形成可準備的補給節點。',
    },
  },

lost_capital_gate_archivist: {
    id: 'lost_capital_gate_archivist',
    name: '伊薇特',
    alias: 'archivist',
    title: '王都外門檔案官',
    description:
      '一名檔案官站在王都外門殘柱下，懷裡抱著被時間裂痕燒焦的城門名冊。' +
      '她用白石像鬼眼當鎮紙，避免紙頁回到崩壞前一刻。',
    roomId: 'lost_capital_outer_gate',
    type: 'quest',
    dialogue: [
      {
        id: 'greeting',
        text: '進王都前先記住：這裡不是廢墟，是一座還在執行最後命令的城市。',
        options: [
          { text: '最後命令是什麼？', nextId: 'order' },
          { text: '該先去哪裡？', nextId: 'route' },
          { text: '我會小心。', nextId: 'farewell' },
        ],
      },
      {
        id: 'order',
        text: '守衛守門，書吏抄名，裁決官判案，王座等待加冕。問題是，王已經不在。',
        options: [
          { text: '該先去哪裡？', nextId: 'route' },
          { text: '我去找封印。', nextId: 'farewell' },
        ],
      },
      {
        id: 'route',
        text: '先過寂靜王道，找停鐘廣場和檔案館。要進空王座，沒有加冕封印就只是送進下一段重演。',
        options: [
          { text: '最後命令是什麼？', nextId: 'order' },
          { text: '明白。', nextId: 'farewell' },
        ],
      },
      { id: 'farewell', text: '若守衛問你效忠誰，不要回答「王」。這座城會當真。' },
    ],
    guardianHints: {
      creature: '伊薇特能解釋寂靜王道守衛、停鐘白石像鬼與檔案巫妖書吏的命令來源。',
      treasure: '她需要王都時砂玻、白石像鬼眼與議政蠟版來重建崩壞紀錄。',
      spirit: '她把失落王都的時間停滯轉成可調查的行政與儀式線索。',
    },
  },

lost_capital_relic_broker: {
    id: 'lost_capital_relic_broker',
    name: '賽佛',
    alias: 'broker',
    title: '凝固市集遺物商',
    description:
      '一名遺物商在凝固市集的石攤後整理半透明時砂瓶、蠟版碎片與王家封印拓本。' +
      '他的攤位不喊價，因為王都裡連討價還價都可能被時間記住。',
    roomId: 'lost_capital_frozen_market',
    type: 'merchant',
    shopItems: [
      'medium_hp_potion',
      'medium_mp_potion',
      'royal_timeglass',
      'marble_gargoyle_eye',
      'senate_wax_tablet',
      'coronation_seal',
    ],
    dialogue: [
      {
        id: 'greeting',
        text: '買遺物前先想清楚。王都的東西很少壞掉，但很常把買主拖回壞掉那一刻。',
        options: [
          { text: '我看看遺物。', nextId: 'shop' },
          { text: '空王座需要什麼？', nextId: 'throne' },
          { text: '先不買。', nextId: 'farewell' },
        ],
      },
      {
        id: 'shop',
        text: '藥水、王都時砂玻、白石像鬼眼、議政蠟版、加冕封印。要去王座前廳，至少帶封印。',
        action: { type: 'shop', data: { shopType: 'lost_capital_relics' } },
        options: [
          { text: '空王座需要什麼？', nextId: 'throne' },
          { text: '先這樣。', nextId: 'farewell' },
        ],
      },
      {
        id: 'throne',
        text: '封印開門，蠟版證明判決，時砂玻校正長廊。至於冠影，只有空王座君影願意交出來。',
        options: [
          { text: '我看看遺物。', nextId: 'shop' },
          { text: '我會準備。', nextId: 'farewell' },
        ],
      },
      { id: 'farewell', text: '別在停鐘廣場數錢。你會一直數到同一枚。' },
    ],
    guardianHints: {
      creature: '賽佛能提示凝市影決鬥者、審判廳裁決官、時裂攝政影與空王座君影的通行需求。',
      treasure: '他的攤位供應時砂玻、像鬼眼、議政蠟版與加冕封印。',
      spirit: '他把王都考古物轉成可補給的通行與儀式材料。',
    },
  },

lost_capital_sun_chaplain: {
    id: 'lost_capital_sun_chaplain',
    name: '奧蕾雅',
    alias: 'chaplain',
    title: '日輪禮拜堂殘牧',
    description:
      '一名殘牧坐在日輪禮拜堂斷光下，聖袍一半仍亮，一半已被時裂燒黑。' +
      '她記得加冕儀式的每一句禱詞，也記得哪一句開始出錯。',
    roomId: 'lost_capital_sun_chapel',
    type: 'quest',
    dialogue: [
      {
        id: 'greeting',
        text: '王座不是空的。它坐著一個命令：繼續等待。',
        options: [
          { text: '加冕儀式錯在哪？', nextId: 'rite' },
          { text: '君影是什麼？', nextId: 'sovereign' },
          { text: '我先聽禱詞。', nextId: 'farewell' },
        ],
      },
      {
        id: 'rite',
        text:
          '封印打開前，攝政影改了誓詞。於是王沒有登座，城市卻已經跪下。那一刻被時裂保存到現在。',
        options: [
          { text: '君影是什麼？', nextId: 'sovereign' },
          { text: '我去找封印。', nextId: 'farewell' },
        ],
      },
      {
        id: 'sovereign',
        text:
          '空王座君影不是國王，是整座城市對國王的需要。你若只攻擊它，王都會繼續造出下一個。',
        options: [
          { text: '加冕儀式錯在哪？', nextId: 'rite' },
          { text: '我會找冠影。', nextId: 'farewell' },
        ],
      },
      { id: 'farewell', text: '踏上紅毯前，先確認你不是被王都選中的替代品。' },
    ],
    guardianHints: {
      creature: '奧蕾雅能解釋日輪殘翼使、時裂攝政影與空王座君影的儀式關係。',
      treasure: '她需要加冕封印、空王座冠影與時砂玻來重建錯誤加冕。',
      spirit: '她把終局 Boss 線索包裝成加冕儀式的調查鏈。',
    },
  },

sky_isles_lift_cartographer: {
    id: 'sky_isles_lift_cartographer',
    name: '諾亞',
    alias: 'cartographer',
    title: '升空碼頭測高員',
    description:
      '一名測高員坐在升空碼頭的絞盤旁，面前攤著會自己浮起的島圖。' +
      '他用浮空符文片壓住地圖邊角，避免整張圖飄進雲海。',
    roomId: 'sky_isles_lift_dock',
    type: 'quest',
    dialogue: [
      {
        id: 'greeting',
        text: '上島前先記高度。方向會騙你，高度比較誠實。',
        options: [
          { text: '安全路線怎麼走？', nextId: 'route' },
          { text: '天空核心在哪？', nextId: 'core' },
          { text: '我會看高度。', nextId: 'farewell' },
        ],
      },
      {
        id: 'route',
        text: '先走鐵鏈雲橋和符文錨臺，再過折光堤道。要進世界王浮島，風暴井核能穩住風牆。',
        options: [
          { text: '天空核心在哪？', nextId: 'core' },
          { text: '我去找井核。', nextId: 'farewell' },
        ],
      },
      {
        id: 'core',
        text: '最高島後面還有核心聖所。別只看橋，橋斷了還能退；核心若失衡，整片群島會一起往下走。',
        options: [
          { text: '安全路線怎麼走？', nextId: 'route' },
          { text: '明白。', nextId: 'farewell' },
        ],
      },
      { id: 'farewell', text: '若腳下石板忽然變輕，別跳，那不是好消息。' },
    ],
    guardianHints: {
      creature: '諾亞能說明雲銀風鳶、符文錨魔像、風暴井渦靈與升天橋雷龍的路線關係。',
      treasure: '他的浮島圖標出浮空符文片、風暴井核與天空核心聖物的用途。',
      spirit: '他把浮空群島的垂直路線轉成玩家能追蹤的高度規則。',
    },
  },

sky_isles_relic_keeper: {
    id: 'sky_isles_relic_keeper',
    name: '賽菈',
    alias: 'keeper',
    title: '雲上市遺物保管人',
    description:
      '一名保管人在浮市殘街的破攤前整理雲銀長羽、光環稜核和符文碎片。' +
      '她的貨箱用三條細鏈拴住，防止交易到一半飛走。',
    roomId: 'sky_isles_sky_market_ruin',
    type: 'merchant',
    shopItems: [
      'large_hp_potion',
      'large_mp_potion',
      'sky_rune_shard',
      'cloudsilver_plume',
      'halo_prism_core',
      'stormwell_core',
    ],
    dialogue: [
      {
        id: 'greeting',
        text: '買之前先抓穩欄杆。雲上市的老規矩：貨物掉下去歸雲海，買主掉下去也一樣。',
        options: [
          { text: '我看看遺物。', nextId: 'shop' },
          { text: '世界王浮島要什麼？', nextId: 'boss' },
          { text: '晚點再來。', nextId: 'farewell' },
        ],
      },
      {
        id: 'shop',
        text: '高階藥水、符文片、雲銀長羽、光環稜核、風暴井核。越往上，越需要能把你留在島上的東西。',
        action: { type: 'shop', data: { shopType: 'sky_isles_relics' } },
        options: [
          { text: '世界王浮島要什麼？', nextId: 'boss' },
          { text: '先這樣。', nextId: 'farewell' },
        ],
      },
      {
        id: 'boss',
        text: '風暴井核開風牆，光環稜核穩神殿門，天空核心聖物只有核心執政體會放手。',
        options: [
          { text: '我看看遺物。', nextId: 'shop' },
          { text: '我會準備。', nextId: 'farewell' },
        ],
      },
      { id: 'farewell', text: '別相信太平的雲。它只是還沒輪到你掉下去。' },
    ],
    guardianHints: {
      creature: '賽菈能提示天鏡光靈、斷碑雷衛、光環庭院裁定者與天空核心執政體的素材需求。',
      treasure: '她供應符文片、雲銀長羽、光環稜核與風暴井核。',
      spirit: '她把浮空群島的高階素材與終局入口連成可補給的節點。',
    },
  },

deepsea_temple_tidekeeper: {
    id: 'deepsea_temple_tidekeeper',
    name: '賽恩',
    alias: 'tidekeeper',
    title: '潮汐石門守潮人',
    description:
      '一名守潮人站在潮汐石門的藍火旁，披肩上縫著海鹽、珊瑚與褪色祭司符帶。' +
      '他用銅杖敲擊地面測量水流，記錄每一次暗流倒轉的時間。',
    roomId: 'deepsea_temple_tide_gate',
    type: 'quest',
    dialogue: [
      {
        id: 'greeting',
        text: '別急著進門。這座神殿不是迷路，它是在等你走進錯誤的潮汐。',
        options: [
          { text: '該怎麼判斷潮汐？', nextId: 'tide' },
          { text: '潮汐王座在哪？', nextId: 'throne' },
          { text: '我先調整裝備。', nextId: 'farewell' },
        ],
      },
      {
        id: 'tide',
        text: '藍火向內倒，魚人巡邏；貝殼無聲，神諭影靠近；潮鐘若響三次，就別在橋上停留。',
        options: [
          { text: '潮汐王座在哪？', nextId: 'throne' },
          { text: '我會記住。', nextId: 'farewell' },
        ],
      },
      {
        id: 'throne',
        text: '從月池入書庫，拿潮鐘齒輪；過骨錨與鯨骨橋，禁壇封印會告訴你王座還願不願開口。',
        options: [
          { text: '該怎麼判斷潮汐？', nextId: 'tide' },
          { text: '我去找封印。', nextId: 'farewell' },
        ],
      },
      { id: 'farewell', text: '若聽見有人在水裡叫你的名字，不要回頭。那通常不是活人。' },
    ],
    guardianHints: {
      creature: '瑟恩能提示藍火魚人衛、歌礁水母怨靈、珍珠神諭影與潮汐王座利維坦的路線關係。',
      treasure: '他會指出藍火珊瑚、潮鐘齒輪、禁壇封印與王座核心在儀式中的用途。',
      spirit: '他把深海神殿的暗流規則轉成玩家能理解的進攻順序。',
    },
  },

deepsea_temple_relic_diver: {
    id: 'deepsea_temple_relic_diver',
    name: '米菈',
    alias: 'diver',
    title: '貝殼庭院遺物潛商',
    description:
      '一名遺物潛商坐在貝殼庭院的碎柱旁，身邊掛滿防水藥瓶、潮鐘零件和用繩索串起的珍珠。' +
      '她的潛水盔裂著一道縫，縫中卻穩定冒出藍火微光。',
    roomId: 'deepsea_temple_shell_court',
    type: 'merchant',
    shopItems: [
      'large_hp_potion',
      'large_mp_potion',
      'bluefire_coral',
      'abyssal_pearl',
      'tideclock_gear',
      'whalebone_relic',
    ],
    dialogue: [
      {
        id: 'greeting',
        text: '買東西前先數好氣泡。這裡最貴的不是遺物，是你回程時還剩幾口氣。',
        options: [
          { text: '我看看補給。', nextId: 'shop' },
          { text: '禁壇需要什麼？', nextId: 'altar' },
          { text: '稍後再來。', nextId: 'farewell' },
        ],
      },
      {
        id: 'shop',
        text: '高階藥水、藍火珊瑚、深淵珍珠、潮鐘齒輪、鯨骨聖片。想走到王座，最好別只帶勇氣。',
        action: { type: 'shop', data: { shopType: 'deepsea_temple_relics' } },
        options: [
          { text: '禁壇需要什麼？', nextId: 'altar' },
          { text: '先這樣。', nextId: 'farewell' },
        ],
      },
      {
        id: 'altar',
        text: '珍珠聽神諭，齒輪校潮鐘，鯨骨穩封印。禁壇封印本身，通常得從那些會說古神話的怪物身上拿。',
        options: [
          { text: '我看看補給。', nextId: 'shop' },
          { text: '我去找封印。', nextId: 'farewell' },
        ],
      },
      { id: 'farewell', text: '回來時別把影子留在神諭室。少了影子的人很難討價還價。' },
    ],
    guardianHints: {
      creature: '米菈能提示抄魂者、潮鐘幼九頭蛇、鯨骨錨巨像與古神低語畸體的掉落需求。',
      treasure: '她供應深海神殿材料與高階藥水，補足前往禁壇和王座前的補給節點。',
      spirit: '她把高階素材、商店補給與終局通行物整合成一個可回訪的服務點。',
    },
  },

obsidian_depths_mine_foreman: {
    id: 'obsidian_depths_mine_foreman',
    name: '葛朗',
    alias: 'foreman',
    title: '深層礦梯工頭',
    description:
      '一名老礦工守在深層礦梯旁，鬍鬚被硫煙燻成灰黑，手上的測溫錘仍亮著暗紅刻度。' +
      '他把每條礦脈的熱壓變化記在鐵牌上，避免採集隊走進會自燃的黑曜路線。',
    roomId: 'obsidian_depths_mine_lift',
    type: 'quest',
    dialogue: [
      {
        id: 'greeting',
        text: '下礦前先看錘溫。黑曜會照出你的臉，也會照出你死在哪條路。',
        options: [
          { text: '哪條路能採礦？', nextId: 'route' },
          { text: '世界熔爐在哪？', nextId: 'forge' },
          { text: '我先檢查裝備。', nextId: 'farewell' },
        ],
      },
      {
        id: 'route',
        text: '鏡黑礦脈採碎片，硫磺氣袋採硫心礦。若鎖鏈長廊開始自己響，代表熔爐鏈衛醒了。',
        options: [
          { text: '世界熔爐在哪？', nextId: 'forge' },
          { text: '我會標記路線。', nextId: 'farewell' },
        ],
      },
      {
        id: 'forge',
        text: '過黑玻橋，拿熔鎖印記，再從心鏡廳進核心。別相信心鏡裡比較輕鬆的那條路，那通常是惡魔給你的。',
        options: [
          { text: '哪條路能採礦？', nextId: 'route' },
          { text: '我去找印記。', nextId: 'farewell' },
        ],
      },
      { id: 'farewell', text: '若靴底開始黏住地面，別省那瓶藥水，跑。' },
    ],
    guardianHints: {
      creature: '葛朗能提示碎曜爬行獸、硫煙小魔、熔爐鏈衛與熔鎖門監守的路線風險。',
      treasure: '他會說明鏡面黑曜碎片、硫心礦與熔鎖印記的用途。',
      spirit: '他把資源區的採集節奏轉成熱壓、反光與鎖鏈聲三種可辨識訊號。',
    },
  },

obsidian_depths_relic_smelter: {
    id: 'obsidian_depths_relic_smelter',
    name: '蓓菈',
    alias: 'smelter',
    title: '棄市礦棚遺物熔匠',
    description:
      '一名熔匠在棄市礦棚搭起臨時坩堝，黑玻鏈環、核心鑽頭和半熔藥瓶分類排在耐火布上。' +
      '她的護目鏡被黑曜反光刮花，卻仍能精準看出材料的熔點。',
    roomId: 'obsidian_depths_obsidian_market',
    type: 'merchant',
    shopItems: [
      'large_hp_potion',
      'large_mp_potion',
      'mirror_obsidian_shard',
      'sulfur_heart_ore',
      'blackglass_chain_link',
      'ancient_forge_cinder',
      'core_drill_bit',
    ],
    dialogue: [
      {
        id: 'greeting',
        text: '要買就快，坩堝下一次升溫時，這裡連價格牌都會融掉。',
        options: [
          { text: '我看看材料。', nextId: 'shop' },
          { text: '熔鎖門要什麼？', nextId: 'lock' },
          { text: '晚點再來。', nextId: 'farewell' },
        ],
      },
      {
        id: 'shop',
        text: '藥水、黑曜碎片、硫心礦、黑玻鏈環、古爐餘燼、核心鑽頭。越接近核心，越需要買能讓你回頭的東西。',
        action: { type: 'shop', data: { shopType: 'obsidian_depths_relics' } },
        options: [
          { text: '熔鎖門要什麼？', nextId: 'lock' },
          { text: '先這樣。', nextId: 'farewell' },
        ],
      },
      {
        id: 'lock',
        text: '鏈環修門，餘燼校溫，鑽頭開殼。熔鎖印記得從監守身上取，不然黑曜心鏡只會讓你繞回原點。',
        options: [
          { text: '我看看材料。', nextId: 'shop' },
          { text: '我去找監守。', nextId: 'farewell' },
        ],
      },
      { id: 'farewell', text: '別把剛買的材料放在心鏡前。影子也會想偷。' },
    ],
    guardianHints: {
      creature: '蓓菈能提示黑玻魔像、熔爐鏈衛、心鏡暗魔與世界熔爐巨像的材料關係。',
      treasure: '她供應黑曜深層材料與高階藥水，讓資源區有可回訪補給點。',
      spirit: '她把採集、熔煉與核心通行物整合成棄市礦棚的交易節點。',
    },
  },

obsidian_depths_fire_shrine_adept: {
    id: 'obsidian_depths_fire_shrine_adept',
    name: '伊洛',
    alias: 'adept',
    title: '深層火祠守焰學徒',
    description:
      '一名守焰學徒跪在深層火祠前，火光把他的影子投在黑曜牆上，影子卻比本人多出一對角。' +
      '他負責辨識古爐餘燼是否仍屬於人類匠師，而不是惡魔鑄兵爐。',
    roomId: 'obsidian_depths_depths_shrine',
    type: 'quest',
    dialogue: [
      {
        id: 'greeting',
        text: '火不會說謊，但黑曜會替火加上你想聽的旁白。',
        options: [
          { text: '火祠在守什麼？', nextId: 'shrine' },
          { text: '大惡魔想做什麼？', nextId: 'fiend' },
          { text: '我先聽火聲。', nextId: 'farewell' },
        ],
      },
      {
        id: 'shrine',
        text: '這裡原本替匠師校準火種。現在惡魔把火種改成軍爐，若世界熔爐燼核被奪，整條礦脈都會變成兵器。',
        options: [
          { text: '大惡魔想做什麼？', nextId: 'fiend' },
          { text: '我去核心確認。', nextId: 'farewell' },
        ],
      },
      {
        id: 'fiend',
        text: '牠不缺火，牠缺穩定的爐心。心鏡暗魔負責篩選恐懼，世界熔爐巨像負責鍛打，最後由大惡魔接管產能。',
        options: [
          { text: '火祠在守什麼？', nextId: 'shrine' },
          { text: '我會破壞爐心。', nextId: 'farewell' },
        ],
      },
      { id: 'farewell', text: '若你的影子先走一步，停下來。那代表心鏡已經開始認得你。' },
    ],
    guardianHints: {
      creature: '伊洛能解釋餘燼盆地火靈、心鏡暗魔、世界熔爐巨像與黑曜深層大惡魔的主線關係。',
      treasure: '他指出古爐餘燼、核心鑽頭與世界熔爐燼核在熔爐線中的用途。',
      spirit: '他把黑曜深層從單純採礦區提升為惡魔奪取熔爐產能的劇情節點。',
    },
  },

starfall_crater_surveyor: {
    id: 'starfall_crater_surveyor',
    name: '艾芙',
    alias: 'surveyor',
    title: '測量營地星坑測繪員',
    description:
      '一名測繪員守著被磁砂壓住的星坑地圖，量角器和羅盤都懸在半空微微顫動。' +
      '她用銀線標出重力安全坡道，並記錄每次世界傷痕發光的時間。',
    roomId: 'starfall_crater_survey_camp',
    type: 'quest',
    dialogue: [
      {
        id: 'greeting',
        text: '別相信羅盤。星隕坑裡，北方有時候只是磁砂想讓你去的方向。',
        options: [
          { text: '採集路線怎麼走？', nextId: 'route' },
          { text: '世界王星核在哪？', nextId: 'core' },
          { text: '我先校準工具。', nextId: 'farewell' },
        ],
      },
      {
        id: 'route',
        text: '先走玻化斜坡和星鐵散地，避開磁化尖塔的雷暴。要進重力井前，準備磁化隕鐵和重力透鏡。',
        options: [
          { text: '世界王星核在哪？', nextId: 'core' },
          { text: '我會標記坡道。', nextId: 'farewell' },
        ],
      },
      {
        id: 'core',
        text: '世界傷痕後面就是星核，但裂縫會挑人。沒有世界傷痕碎片，星核只會把你送回你最害怕的天空。',
        options: [
          { text: '採集路線怎麼走？', nextId: 'route' },
          { text: '我去找碎片。', nextId: 'farewell' },
        ],
      },
      { id: 'farewell', text: '若影子往上飄，不是你變輕了，是重力井在看你。' },
    ],
    guardianHints: {
      creature: '艾芙能提示星玻哨衛、磁雷鷹、重力井畸體與世界傷痕雷龍的路線風險。',
      treasure: '她會說明星鐵核粒、磁化隕鐵、重力透鏡與世界傷痕碎片的用途。',
      spirit: '她把星隕坑的危險轉成坡道、磁暴與裂縫週期三種可追蹤資訊。',
    },
  },

starfall_crater_meteoric_smith: {
    id: 'starfall_crater_meteoric_smith',
    name: '洛罕',
    alias: 'meteorsmith',
    title: '隕鐵熔臺星鐵匠',
    description:
      '一名星鐵匠在隕鐵熔臺邊工作，火鉗被磁化隕鐵吸得不斷偏斜。' +
      '他把彗星碎片排成星座形狀，用來判斷哪一批星鐵能承受雷光淬火。',
    roomId: 'starfall_crater_meteoric_forge',
    type: 'merchant',
    shopItems: [
      'large_hp_potion',
      'large_mp_potion',
      'stariron_nodule',
      'radiant_glass_sand',
      'magnetized_meteorite',
      'comet_shard',
      'gravity_lens',
    ],
    dialogue: [
      {
        id: 'greeting',
        text: '買之前先把鐵器綁好。這裡的材料會自己挑主人，也會自己飛走。',
        options: [
          { text: '我看看星材。', nextId: 'shop' },
          { text: '星核前需要什麼？', nextId: 'core' },
          { text: '稍後再來。', nextId: 'farewell' },
        ],
      },
      {
        id: 'shop',
        text: '藥水、星鐵核粒、輻光玻砂、磁化隕鐵、彗星碎片、重力透鏡。越靠近星核，越別只信自己的腳。',
        action: { type: 'shop', data: { shopType: 'starfall_crater_starforge' } },
        options: [
          { text: '星核前需要什麼？', nextId: 'core' },
          { text: '先這樣。', nextId: 'farewell' },
        ],
      },
      {
        id: 'core',
        text: '星鐵穩武器，玻砂穩光，磁鐵導雷，透鏡穩重力。世界傷痕碎片得自己拿，匠人買不到那種裂縫。',
        options: [
          { text: '我看看星材。', nextId: 'shop' },
          { text: '我去裂縫。', nextId: 'farewell' },
        ],
      },
      { id: 'farewell', text: '若聽見熔臺裡有心跳聲，別問價格，先離遠一點。' },
    ],
    guardianHints: {
      creature: '洛罕能提示星鐵魔像、彗片掘行獸、星圖輝靈與外界吞星者的材料關係。',
      treasure: '他的商店供應星隕坑高階材料與藥水，提供世界王前補給節點。',
      spirit: '他把星鐵採集、隕鐵加工與星核通行需求連成一條可回訪服務線。',
    },
  },

starfall_crater_star_map_keeper: {
    id: 'starfall_crater_star_map_keeper',
    name: '賽琳',
    alias: 'mapkeeper',
    title: '星圖廢墟守圖人',
    description:
      '一名守圖人坐在破裂星圖中央，斗篷上縫著銀草、彗片和已失效的觀測鏡片。' +
      '她每說一句話，腳下星線就會重新連成另一個可能的天空。',
    roomId: 'starfall_crater_star_map_ruin',
    type: 'quest',
    dialogue: [
      {
        id: 'greeting',
        text: '隕星不是掉下來，它是被某個地方放開。星圖只記得放手的方向。',
        options: [
          { text: '外界空洞是什麼？', nextId: 'void' },
          { text: '星核心臟能做什麼？', nextId: 'heart' },
          { text: '我先看星圖。', nextId: 'farewell' },
        ],
      },
      {
        id: 'void',
        text: '外界空洞不是洞，是入口的另一面。吞星者正從那邊拉扯星核，牠若成功，這座坑會變成門。',
        options: [
          { text: '星核心臟能做什麼？', nextId: 'heart' },
          { text: '我會去星核。', nextId: 'farewell' },
        ],
      },
      {
        id: 'heart',
        text: '星核心臟可以證明裂縫仍能被關上。帶回它，至少我們知道這顆星還屬不屬於這個世界。',
        options: [
          { text: '外界空洞是什麼？', nextId: 'void' },
          { text: '我會帶回核心。', nextId: 'farewell' },
        ],
      },
      { id: 'farewell', text: '別在星圖上踩自己的名字。那通常會讓路變短，但代價很長。' },
    ],
    guardianHints: {
      creature: '賽琳能解釋星圖輝靈、世界傷痕雷龍與外界吞星者的世界王線。',
      treasure: '她指出世界傷痕碎片與世界王星核心臟在封閉裂縫中的用途。',
      spirit: '她把星隕坑從資源採集區推進到外界裂縫與世界王劇情節點。',
    },
  },

time_ruins_epoch_keeper: {
    id: 'time_ruins_epoch_keeper',
    name: '赫倫',
    alias: 'epochkeeper',
    title: '紀元入口守時人',
    description:
      '一名守時人站在紀元入口的碎鐘門下，斗篷邊緣每隔一秒就重新磨損又復原。' +
      '他用一只裂開懷錶記錄隊伍進入廢墟的次數，哪怕隊伍自己完全不記得。',
    roomId: 'time_ruins_epoch_gate',
    type: 'quest',
    dialogue: [
      {
        id: 'greeting',
        text: '你們已經來過。也許是明天，也許是剛才。別糾正我，時間廢墟不喜歡被糾正。',
        options: [
          { text: '安全路線怎麼走？', nextId: 'route' },
          { text: '零分核心在哪？', nextId: 'zero' },
          { text: '我先確認時間。', nextId: 'farewell' },
        ],
      },
      {
        id: 'route',
        text: '碎鐘路取齒輪，倒流河岸找記憶礁珠。過停擺鐘塔前，先準備悖論裂片，不然你會一直回到錯路。',
        options: [
          { text: '零分核心在哪？', nextId: 'zero' },
          { text: '我會記路。', nextId: 'farewell' },
        ],
      },
      {
        id: 'zero',
        text: '鐘心門後就是零分核心。因果井能縫路，但也會縫住人。拿到零分鑰印以前，不要相信任何捷徑。',
        options: [
          { text: '安全路線怎麼走？', nextId: 'route' },
          { text: '我去找鑰印。', nextId: 'farewell' },
        ],
      },
      { id: 'farewell', text: '若你聽見自己回答過同一句話，停下來，把下一步換掉。' },
    ],
    guardianHints: {
      creature: '赫倫能提示紀元門衛、倒流河記憶體、停鐘時巫妖與零分古龍的路線風險。',
      treasure: '他說明碎鐘齒輪、倒流沙漏砂、悖論裂片與零分鑰印的用途。',
      spirit: '他把時間廢墟的重複死亡與回圈路線轉成玩家可追蹤的進度規則。',
    },
  },

time_ruins_clockwork_peddler: {
    id: 'time_ruins_clockwork_peddler',
    name: '莫菈',
    alias: 'peddler',
    title: '舊日市集鐘件商',
    description:
      '一名鐘件商在舊日市集的殘影裡擺攤，貨架上的每件商品都標著三種不同年代的價格。' +
      '她收集碎鐘齒輪、倒流砂與因果絲線，也販售能撐過零分核心的補給。',
    roomId: 'time_ruins_past_market',
    type: 'merchant',
    shopItems: [
      'large_hp_potion',
      'large_mp_potion',
      'reversed_hourglass_sand',
      'broken_clock_gear',
      'memory_reef_pearl',
      'paradox_splinter',
      'causality_thread',
    ],
    dialogue: [
      {
        id: 'greeting',
        text: '先說好，若你明天才付錢，我昨天就會開始追債。',
        options: [
          { text: '我看看鐘件。', nextId: 'shop' },
          { text: '因果井要什麼？', nextId: 'well' },
          { text: '晚點再來。', nextId: 'farewell' },
        ],
      },
      {
        id: 'shop',
        text: '藥水、倒流砂、碎鐘齒輪、記憶礁珠、悖論裂片、因果絲線。別嫌貴，有些東西你已經買過一次了。',
        action: { type: 'shop', data: { shopType: 'time_ruins_clockworks' } },
        options: [
          { text: '因果井要什麼？', nextId: 'well' },
          { text: '先這樣。', nextId: 'farewell' },
        ],
      },
      {
        id: 'well',
        text: '因果絲線能縫路，零分鑰印能開鐘心門。餘影虛空核心不是商品，那東西只會從你沒選的路裡掉出來。',
        options: [
          { text: '我看看鐘件。', nextId: 'shop' },
          { text: '我去因果井。', nextId: 'farewell' },
        ],
      },
      { id: 'farewell', text: '若你回來時少了一段記憶，我可以打折收購。' },
    ],
    guardianHints: {
      creature: '莫菈能提示沙漏機偶、雷刻紀錄龍、因果裁定者與餘影虛空蛇的材料需求。',
      treasure: '她供應時間廢墟材料與高階藥水，補足零分核心前的服務節點。',
      spirit: '她把高階材料、商店補給與終局通行物整合成可回訪的時間市集。',
    },
  },

astral_wastes_anchor_cartographer: {
    id: 'astral_wastes_anchor_cartographer',
    name: '奧林',
    alias: 'cartographer',
    title: '現實邊門錨圖師',
    description:
      '一名錨圖師站在現實邊門旁，地圖不是畫在紙上，而是用錨石碎片釘在半空。' +
      '他每隔幾分鐘就重新量一次地平線，因為星界荒原不保證下一眼仍是同一個方向。',
    roomId: 'astral_wastes_reality_gate',
    type: 'quest',
    dialogue: [
      {
        id: 'greeting',
        text: '先找錨，再找路。沒有錨點的路，只是黑域替你畫的邀請函。',
        options: [
          { text: '怎麼穿過荒原？', nextId: 'route' },
          { text: '黑星門在哪？', nextId: 'gate' },
          { text: '我先固定裝備。', nextId: 'farewell' },
        ],
      },
      {
        id: 'route',
        text: '星砂路會動，錨石丘不會。先拿錨石碎片，再過鏡面虛空與蒼白小祠，別在無光沙丘數自己的影子。',
        options: [
          { text: '黑星門在哪？', nextId: 'gate' },
          { text: '我會先找錨。', nextId: 'farewell' },
        ],
      },
      {
        id: 'gate',
        text: '黑星門在虛空裂縫之後。黑星印記能辨識門，荒原核心錨能讓你回來；兩者都沒有，就別碰外層黑域。',
        options: [
          { text: '怎麼穿過荒原？', nextId: 'route' },
          { text: '我去找印記。', nextId: 'farewell' },
        ],
      },
      { id: 'farewell', text: '若你走著走著聽見腳步聲從天空傳來，立刻回到最近的錨石。' },
    ],
    guardianHints: {
      creature: '奧林能提示現實邊獵影、錨石巨像、黑星門守與荒原核心星龍的路線關係。',
      treasure: '他說明星界星砂、錨石碎片、黑星印記與荒原核心錨的用途。',
      spirit: '他把星界荒原的漂移地形轉成錨點、地平線與黑星門三個可追蹤規則。',
    },
  },

astral_wastes_void_relic_trader: {
    id: 'astral_wastes_void_relic_trader',
    name: '妮薇',
    alias: 'relictrader',
    title: '蒼白小祠虛玻商',
    description:
      '一名虛玻商坐在蒼白小祠的影子裡，貨箱中放著星砂瓶、虛玻鏡片和用黑布包住的黑星印記。' +
      '她說每件商品都有重量，哪怕拿起來像一段夢。',
    roomId: 'astral_wastes_pale_shrine',
    type: 'merchant',
    shopItems: [
      'large_hp_potion',
      'large_mp_potion',
      'astral_starsand',
      'anchor_stone_chip',
      'voidglass_mirror',
      'pale_star_relic',
      'black_star_sigil',
    ],
    dialogue: [
      {
        id: 'greeting',
        text: '要買就用現在的錢。荒原深處的未來金幣，我上週已經收過太多假貨。',
        options: [
          { text: '我看看遺物。', nextId: 'shop' },
          { text: '外層黑域需要什麼？', nextId: 'dark' },
          { text: '稍後再來。', nextId: 'farewell' },
        ],
      },
      {
        id: 'shop',
        text: '藥水、星砂、錨石碎片、虛玻鏡片、蒼白星遺物、黑星印記。能買到的只是材料，能不能回來是另一回事。',
        action: { type: 'shop', data: { shopType: 'astral_wastes_relics' } },
        options: [
          { text: '外層黑域需要什麼？', nextId: 'dark' },
          { text: '先這樣。', nextId: 'farewell' },
        ],
      },
      {
        id: 'dark',
        text: '黑星印記開門，荒原核心錨固定退路。外層黑域心核只能從黑域深處取，買來的不會是真的。',
        options: [
          { text: '我看看遺物。', nextId: 'shop' },
          { text: '我去找核心錨。', nextId: 'farewell' },
        ],
      },
      { id: 'farewell', text: '別把虛玻鏡片對著自己太久。倒影會以為它才是買主。' },
    ],
    guardianHints: {
      creature: '妮薇能提示鏡虛潛伏者、蒼白祠輝靈、重力星泥怖物與外層黑域吞噬者的材料線。',
      treasure: '她供應星界荒原材料與高階藥水，補足黑星門前的補給節點。',
      spirit: '她把荒原採集、黑星通行與外層黑域終局材料整合成可回訪服務。',
    },
  },

moonlit_fen_reed_pathfinder: {
    id: 'moonlit_fen_reed_pathfinder',
    name: '芙菈',
    alias: 'pathfinder',
    title: '蘆葦入口引路人',
    description:
      '一名披著銀蘆斗篷的引路人蹲在蘆葦入口，用木炭在濕木板上畫出螢火、柳根與白蘆迷道的位置。' +
      '她說話很輕，像怕驚醒水面下的夢。',
    roomId: 'moonlit_fen_reed_gate',
    type: 'quest',
    dialogue: [
      {
        id: 'greeting',
        text: '月光濕地不會阻止你進去，但它會記住你踩壞了哪一株夜花。',
        options: [
          { text: '我該先去哪？', nextId: 'route' },
          { text: '夢水核心是什麼？', nextId: 'dreamwater' },
          { text: '我會小心。', nextId: 'farewell' },
        ],
      },
      {
        id: 'route',
        text: '先沿月花岸和螢火池熟悉水深，再去妖光環。白蘆迷道和月沼祭壇不要獨自進，蘆葉會把人帶回錯誤夜晚。',
        options: [
          { text: '夢水核心是什麼？', nextId: 'dreamwater' },
          { text: '我先找月花。', nextId: 'farewell' },
        ],
      },
      {
        id: 'dreamwater',
        text: '夢水核心是濕地的心口。若你看到水面映出不屬於今天的月亮，就代表月衛已經醒了。',
        options: [
          { text: '我該先去哪？', nextId: 'route' },
          { text: '我知道了。', nextId: 'farewell' },
        ],
      },
      { id: 'farewell', text: '別追最亮的螢火。真正的路通常只亮一半。' },
    ],
    guardianHints: {
      creature: '芙菈能提示月蘆小妖、螢燈群、白蘆迷道巡獵者與夢水月衛的路線。',
      treasure: '她說明月花瓣、銀蘆纖維、螢燈腺與夢水露的採集位置。',
      spirit: '她把月光濕地的生態規矩轉成可行走的安全路線。',
    },
  },

moonlit_fen_moonflower_apothecary: {
    id: 'moonlit_fen_moonflower_apothecary',
    name: '露彌',
    alias: 'apothecary',
    title: '月花岸藥師',
    description:
      '一名年輕藥師在月花岸的小棚裡分類花瓣與銀蘆纖維，棚頂掛著幾只裝有螢燈腺的玻璃瓶。' +
      '她的袖口總帶著濕泥與淡淡花香。',
    roomId: 'moonlit_fen_moonflower_bank',
    type: 'merchant',
    shopItems: [
      'small_hp_potion',
      'medium_hp_potion',
      'small_mp_potion',
      'medium_mp_potion',
      'antidote',
      'moonflower_petal',
      'silver_reed_fiber',
      'dreamwater_dew',
    ],
    dialogue: [
      {
        id: 'greeting',
        text: '要買藥水可以，但別把月花全摘光。濕地不是倉庫，是還活著的病人。',
        options: [
          { text: '我看看藥材。', nextId: 'shop' },
          { text: '哪些東西有毒？', nextId: 'poison' },
          { text: '稍後再來。', nextId: 'farewell' },
        ],
      },
      {
        id: 'shop',
        text: '藥水、解毒劑、月花瓣、銀蘆纖維、夢水露。螢燈腺太容易失光，最好自己去螢火池採。',
        action: { type: 'shop', data: { shopType: 'moonlit_fen_apothecary' } },
        options: [
          { text: '哪些東西有毒？', nextId: 'poison' },
          { text: '先這樣。', nextId: 'farewell' },
        ],
      },
      {
        id: 'poison',
        text: '銀泥沼膠、黑水水蛭花都會放毒。若被白蘆巡獵者咬傷，先用解毒劑，不要等傷口開始發光。',
        options: [
          { text: '我看看藥材。', nextId: 'shop' },
          { text: '我會備著解毒劑。', nextId: 'farewell' },
        ],
      },
      { id: 'farewell', text: '採月花時留一片給水面。這是規矩。' },
    ],
    guardianHints: {
      creature: '露彌能提示銀泥沼膠、月花螳螂與黑水水蛭花的毒性。',
      treasure: '她販售基礎藥水、解毒劑、月花瓣、銀蘆纖維與夢水露。',
      spirit: '她把濕地材料導入可回訪的補給節點，避免玩家只靠掉落補給。',
    },
  },

moonlit_fen_canoe_keeper: {
    id: 'moonlit_fen_canoe_keeper',
    name: '澤恩',
    alias: 'canoekeeper',
    title: '舊舟營守舟人',
    description:
      '一名沉默的守舟人坐在舊舟營邊削著槳，身旁泊著幾艘長滿燈苔的窄舟。' +
      '他偶爾抬頭看月沼祭壇，像在確認水路還沒有被夢吞掉。',
    roomId: 'moonlit_fen_old_canoe_camp',
    type: 'quest',
    dialogue: [
      {
        id: 'greeting',
        text: '想去月沼祭壇，就先聽水聲。若槳聲有兩次回音，第二次不是你划的。',
        options: [
          { text: '祭壇需要什麼？', nextId: 'altar' },
          { text: '水路安全嗎？', nextId: 'waterway' },
          { text: '我自己走。', nextId: 'farewell' },
        ],
      },
      {
        id: 'altar',
        text: '帶著螢燈腺和夢水露，至少能看清一半符文。月沼祭壇符片只能從月衛那裡取，偷來的會碎。',
        options: [
          { text: '水路安全嗎？', nextId: 'waterway' },
          { text: '我去準備。', nextId: 'farewell' },
        ],
      },
      {
        id: 'waterway',
        text: '黑水流有水蛭花，白蘆迷道有巡獵者。真正危險的是看見自己已經抵達祭壇，然後相信那是真的。',
        options: [
          { text: '祭壇需要什麼？', nextId: 'altar' },
          { text: '我會看腳下。', nextId: 'farewell' },
        ],
      },
      { id: 'farewell', text: '槳放輕。夢水不喜歡被吵醒。' },
    ],
    guardianHints: {
      creature: '澤恩能提示黑水水蛭花、白蘆迷道巡獵者與夢水月衛的後段路線。',
      treasure: '他說明螢燈腺、夢水露與月沼祭壇符片的用途。',
      spirit: '他把舊舟營變成月沼祭壇與夢水核心前的敘事節點。',
    },
  },

pilgrim_road_waywarden: {
    id: 'pilgrim_road_waywarden',
    name: '艾德溫',
    alias: 'waywarden',
    title: '古道起點守路人',
    description:
      '一名披著舊白斗篷的守路人站在古道起點，手杖頂端掛著磨亮的小鈴。' +
      '他不阻止旅人上路，只會在每個人踏上第一塊石板前數一次影子。',
    roomId: 'pilgrim_road_waygate',
    type: 'quest',
    dialogue: [
      {
        id: 'greeting',
        text: '朝聖古道不長，難的是每一段都會問你為什麼還要往前。',
        options: [
          { text: '古道現在有什麼危險？', nextId: 'danger' },
          { text: '聖地門在哪？', nextId: 'gate' },
          { text: '我會自己走。', nextId: 'farewell' },
        ],
      },
      {
        id: 'danger',
        text: '前段是塵犬與鴉使，中段有割袋客和伏擊者，後段的光誓者比盜匪更麻煩，因為牠們真的相信自己在守秩序。',
        options: [
          { text: '聖地門在哪？', nextId: 'gate' },
          { text: '我先檢查補給。', nextId: 'farewell' },
        ],
      },
      {
        id: 'gate',
        text: '沿白石路標到聖地門，再到終點聖碑。若你的鈴符在那裡無聲，代表試煉守已經醒了。',
        options: [
          { text: '古道現在有什麼危險？', nextId: 'danger' },
          { text: '我出發。', nextId: 'farewell' },
        ],
      },
      { id: 'farewell', text: '路上別踢倒里程石。迷路的人最先怪路，其實多半是自己動了標記。' },
    ],
    guardianHints: {
      creature: '艾德溫能提示古道塵犬、里程鴉使、終點聖碑光誓者與聖地門試煉守。',
      treasure: '他說明朝聖鈴符、白石灰粉與聖地門印的古道用途。',
      spirit: '他把朝聖古道拆成前段路標、中段伏擊與後段聖地試煉。',
    },
  },

pilgrim_road_caravan_supplier: {
    id: 'pilgrim_road_caravan_supplier',
    name: '米蓮',
    alias: 'supplier',
    title: '廢棄旅舍商隊補給商',
    description:
      '一名商隊補給商把貨攤搭在廢棄旅舍還沒塌的牆邊，木箱上蓋著防塵布。' +
      '她的帳本裡仍保留著許多已經不會抵達聖地的隊伍名字。',
    roomId: 'pilgrim_road_abandoned_inn',
    type: 'merchant',
    shopItems: [
      'medium_hp_potion',
      'medium_mp_potion',
      'antidote',
      'return_scroll',
      'pilgrim_bell_charm',
      'worn_caravan_seal',
      'sunroad_ration',
    ],
    dialogue: [
      {
        id: 'greeting',
        text: '補給先買好。這條路最會把人拖到還差一瓶藥水的地方。',
        options: [
          { text: '我看看補給。', nextId: 'shop' },
          { text: '商隊為何停了？', nextId: 'caravan' },
          { text: '稍後再來。', nextId: 'farewell' },
        ],
      },
      {
        id: 'shop',
        text: '藥水、解毒劑、回城卷軸、朝聖鈴符、商隊印、日路乾糧。白石灰粉要自己去白石路標找，我不跟光誓者搶生意。',
        action: { type: 'shop', data: { shopType: 'pilgrim_road_supplier' } },
        options: [
          { text: '商隊為何停了？', nextId: 'caravan' },
          { text: '先這樣。', nextId: 'farewell' },
        ],
      },
      {
        id: 'caravan',
        text: '不是沒人想走，是走私藏點和盜匪望臺把路拆成了稅卡。再往後，聖地門也不一定讓活人通過。',
        options: [
          { text: '我看看補給。', nextId: 'shop' },
          { text: '我會留意伏擊。', nextId: 'farewell' },
        ],
      },
      { id: 'farewell', text: '乾糧放外袋，鈴符放內袋。割袋客第一刀通常割外袋。' },
    ],
    guardianHints: {
      creature: '米菈能提示車轍割袋客、乾井伏擊者與走私藏點守衛的補給壓力。',
      treasure: '她販售朝聖鈴符、商隊印與日路乾糧，補足古道中段補給節點。',
      spirit: '她把古道的商隊歷史與玩家可用補給連接起來。',
    },
  },
};
