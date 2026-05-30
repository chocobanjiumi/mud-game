import type { NpcDef } from '@game/shared';

export const NPCS_PART_006: Record<string, NpcDef> = {
sunken_catacombs_lamp_keeper: {
    id: 'sunken_catacombs_lamp_keeper',
    name: '芮妲',
    alias: 'lampkeeper',
    title: '長明燈守油人',
    description:
      '一名守油人坐在長明燈龕旁，身邊擺著防水油瓶、乾燥火絨、繩索與幾枚從水裡撈出的青銅齒輪。' +
      '她每隔一會兒就用小銀勺替藍白燈火添油。',
    roomId: 'sunken_catacombs_lantern_niche',
    type: 'merchant',
    shopItems: [
      'small_hp_potion',
      'medium_hp_potion',
      'small_mp_potion',
      'antidote',
      'funeral_lamp_oil',
      'tidewheel_gear',
      'coffin_chain_link',
    ],
    dialogue: [
      {
        id: 'greeting',
        text:
          '買補給可以，吹燈不行。這盞火不是給死人看的，是給活人記得哪邊才是出口。',
        options: [
          { text: '我看看補給。', nextId: 'shop' },
          { text: '長明燈油有什麼用？', nextId: 'oil' },
          { text: '哪些東西別賣？', nextId: 'evidence' },
          { text: '晚點再來。', nextId: 'farewell' },
        ],
      },
      {
        id: 'shop',
        text: '藥水、解毒劑、長明燈油、水閘齒輪和棺鏈節都有。下去之前多帶一瓶油，黑水最會吃光。',
        action: { type: 'shop', data: { shopType: 'catacomb_lamps' } },
        options: [
          { text: '長明燈油有什麼用？', nextId: 'oil' },
          { text: '哪些東西別賣？', nextId: 'evidence' },
          { text: '先這樣。', nextId: 'farewell' },
        ],
      },
      {
        id: 'oil',
        text:
          '燈油能照出停屍間的真出口，也能讓溺誓亡騎短暫想起自己守的是誰。',
        options: [
          { text: '我看看補給。', nextId: 'shop' },
          { text: '我會留著。', nextId: 'farewell' },
        ],
      },
      {
        id: 'evidence',
        text:
          '溺水騎士徽章和溺王冠碎片別賣。前者開路，後者說明深潮井下到底醒了什麼。',
        options: [
          { text: '我看看補給。', nextId: 'shop' },
          { text: '明白。', nextId: 'farewell' },
        ],
      },
      {
        id: 'farewell',
        text: '火苗若變黑，就別往前了。那不是風，是水在看你。',
      },
    ],
    guardianHints: {
      creature: '芮妲知道哭者怨影與溺誓亡騎對長明燈油的反應。',
      treasure: '她的油箱旁整理著燈油、水閘齒輪與棺鏈節。',
      spirit: '她守的火是墓窟裡少數仍站在活人這邊的東西。',
    },
  },

sunken_catacombs_crypt_reader: {
    id: 'sunken_catacombs_crypt_reader',
    name: '歐薇',
    alias: 'reader',
    title: '王冠墓文解讀者',
    description:
      '一名墓文解讀者站在哭者墓室的浮雕前，袖口綁著防水紙卷，指尖沾滿黑水與白粉。' +
      '她反覆比對哭者祈詞、騎士徽章與王冠鎖鏈圖案。',
    roomId: 'sunken_catacombs_mourner_crypt',
    type: 'quest',
    dialogue: [
      {
        id: 'greeting',
        text:
          '王冠墓室裡躺的不是國王。他是第一個想命令深潮井的人，也是第一個被深潮井命令的人。',
        options: [
          { text: '需要哪些線索？', nextId: 'clues' },
          { text: '哭者怨影是什麼？', nextId: 'mourner' },
          { text: '王冠碎片呢？', nextId: 'crown' },
          { text: '我會記下墓文。', nextId: 'farewell' },
        ],
      },
      {
        id: 'clues',
        text:
          '長明燈油照路，溺水騎士徽章開墓階，黑水沉泥能判斷哪段碑文被井水改寫。',
        options: [
          { text: '哭者怨影是什麼？', nextId: 'mourner' },
          { text: '王冠碎片呢？', nextId: 'crown' },
        ],
      },
      {
        id: 'mourner',
        text:
          '不是所有哭聲都在哀悼。有些是在提醒你：不要把死者的名字交給井底。',
        options: [
          { text: '需要哪些線索？', nextId: 'clues' },
          { text: '我懂了。', nextId: 'farewell' },
        ],
      },
      {
        id: 'crown',
        text:
          '碎片能證明潮主還在，但拿太多會讓墓窟以為你想繼承那頂王冠。',
        options: [
          { text: '哭者怨影是什麼？', nextId: 'mourner' },
          { text: '我會小心。', nextId: 'farewell' },
        ],
      },
      {
        id: 'farewell',
        text: '讀墓文時不要只看名字。鎖鏈刻在哪裡，才是真正的句子。',
      },
    ],
    guardianHints: {
      creature: '歐薇能解釋哭者怨影、溺誓亡騎與溺冠潮主之間的墓文關係。',
      treasure: '她的拓本記錄王冠墓室與深淵蓄水池的封印句式。',
      spirit: '她讓沉沒墓窟不只是一座災難，也是一份仍能被讀懂的警告。',
    },
  },

thundersteppe_nomad_guide: {
    id: 'thundersteppe_nomad_guide',
    name: '塔蘭',
    alias: 'guide',
    title: '雷原游牧嚮導',
    description:
      '一名披著濕皮披肩的游牧嚮導站在雷原入口銅鈴下，腰間掛著骨哨、風向石與避雷繩。' +
      '他說話很短，卻會在每次雷鳴後重新判斷天空。',
    roomId: 'thundersteppe_rolling_gate',
    type: 'quest',
    dialogue: [
      {
        id: 'greeting',
        text:
          '進草原前先聽三次雷。第一聲看風，第二聲看獸，第三聲看你身上有多少金屬。',
        options: [
          { text: '安全路線怎麼走？', nextId: 'route' },
          { text: '雷獸在哪？', nextId: 'beasts' },
          { text: '風眼能進嗎？', nextId: 'eye' },
          { text: '我會聽雷。', nextId: 'farewell' },
        ],
      },
      {
        id: 'route',
        text:
          '先到游牧營地，再看天火台地和雷鼓石圈。若要進龍雷風眼，先拿到避雷符，否則雷牆會把你當成釘子。',
        options: [
          { text: '雷獸在哪？', nextId: 'beasts' },
          { text: '風眼能進嗎？', nextId: 'eye' },
        ],
      },
      {
        id: 'beasts',
        text:
          '雷蹄巨豬走低地，風暴狼群走雨影，暴羽雷鷹走高柱。看到草浪反折時，不要站在路中間。',
        options: [
          { text: '安全路線怎麼走？', nextId: 'route' },
          { text: '我會避開蹄線。', nextId: 'farewell' },
        ],
      },
      {
        id: 'eye',
        text:
          '能進，但不是靠膽子。要懂鼓聲、渡口電流和玻岩反光，龍雷化身只放懂規矩的人靠近。',
        options: [
          { text: '雷獸在哪？', nextId: 'beasts' },
          { text: '明白。', nextId: 'farewell' },
        ],
      },
      {
        id: 'farewell',
        text: '若頭髮豎起，不要抬頭看天，先蹲下放低武器。',
      },
    ],
    guardianHints: {
      creature: '塔蘭能從草浪與雷聲判斷雷草疾行獸、雷蹄巨豬與風暴狼群的路線。',
      treasure: '他的風向石標出雷原入口、游牧營地與龍雷風眼的安全節奏。',
      spirit: '他把草原上的危險轉譯成旅人能遵守的規矩。',
    },
  },

thundersteppe_storm_provisioner: {
    id: 'thundersteppe_storm_provisioner',
    name: '蘇拉',
    alias: 'provisioner',
    title: '風暴補給商',
    description:
      '一名補給商在游牧營地火塘旁整理防水皮袋，袋中分著蓄雷草、雷鷹電羽、抗電繩扣與藥瓶。' +
      '她把所有金屬器具都用皮革包住，避免交易時被雷火找上。',
    roomId: 'thundersteppe_nomad_camp',
    type: 'merchant',
    shopItems: [
      'small_hp_potion',
      'medium_hp_potion',
      'small_mp_potion',
      'antidote',
      'stormcharged_grass',
      'thunder_eagle_plume',
      'stormhoof_plate',
      'nomad_storm_charm',
    ],
    dialogue: [
      {
        id: 'greeting',
        text:
          '補給不只藥水。雷鳴草原需要避雷符、乾燥繩、能看風的草，還有知道什麼時候不該出發的人。',
        options: [
          { text: '我看看補給。', nextId: 'shop' },
          { text: '避雷符怎麼用？', nextId: 'charm' },
          { text: '哪些材料重要？', nextId: 'materials' },
          { text: '晚點再來。', nextId: 'farewell' },
        ],
      },
      {
        id: 'shop',
        text: '藥水、蓄雷草、雷鷹電羽、雷蹄甲片和游牧避雷符都有。要去風眼，別空手。',
        action: { type: 'shop', data: { shopType: 'thundersteppe_supply' } },
        options: [
          { text: '避雷符怎麼用？', nextId: 'charm' },
          { text: '哪些材料重要？', nextId: 'materials' },
          { text: '先這樣。', nextId: 'farewell' },
        ],
      },
      {
        id: 'charm',
        text:
          '避雷符不是護身符，是通行證。它表示你願意照部族規矩進風眼，不亂敲鼓、不亂拔羽、不亂追獸。',
        options: [
          { text: '我看看補給。', nextId: 'shop' },
          { text: '我會守規矩。', nextId: 'farewell' },
        ],
      },
      {
        id: 'materials',
        text:
          '蓄雷草看風，電羽看高空，雷熔玻片看落雷，雷蹄甲片看獸群。龍雷核火別賣，那是要交回來的證據。',
        options: [
          { text: '我看看補給。', nextId: 'shop' },
          { text: '明白。', nextId: 'farewell' },
        ],
      },
      {
        id: 'farewell',
        text: '草原不怕你慢，只怕你在雷聲裡逞快。',
      },
    ],
    guardianHints: {
      creature: '蘇拉熟悉暴羽雷鷹、雷蹄獸母與引雷喚雷者需要避開的徵兆。',
      treasure: '她的補給袋中有蓄雷草、雷鷹電羽、雷蹄甲片與避雷符。',
      spirit: '她讓游牧營地成為風暴中的實用庇護點。',
    },
  },

thundersteppe_drumspeaker: {
    id: 'thundersteppe_drumspeaker',
    name: '奧魯',
    alias: 'drumspeaker',
    title: '雷鼓祭語者',
    description:
      '一名祭語者坐在雷鼓石圈邊緣，手掌貼著中空巨石，像在聽裡面的雨水回答。' +
      '他的項鍊串著骨槌、玻片與一小段被雷火燒黑的皮鼓繩。',
    roomId: 'thundersteppe_drum_circle',
    type: 'quest',
    dialogue: [
      {
        id: 'greeting',
        text:
          '鼓聲不是音樂，是和雷暴談條件。敲錯一拍，風眼會以為你在挑戰它。',
        options: [
          { text: '正確節奏是什麼？', nextId: 'rhythm' },
          { text: '龍雷化身是什麼？', nextId: 'avatar' },
          { text: '火坑要怎麼進？', nextId: 'crater' },
          { text: '我先聽。', nextId: 'farewell' },
        ],
      },
      {
        id: 'rhythm',
        text:
          '先聽引雷柱林，再聽雷蹄渡口，最後才敲石圈。鼓點要留空，讓雷聲自己補上。',
        options: [
          { text: '龍雷化身是什麼？', nextId: 'avatar' },
          { text: '火坑要怎麼進？', nextId: 'crater' },
        ],
      },
      {
        id: 'avatar',
        text:
          '不是龍，是草原把風暴記憶捏成龍的樣子。你若只想屠龍，就會錯過真正的弱點。',
        options: [
          { text: '正確節奏是什麼？', nextId: 'rhythm' },
          { text: '我會記住。', nextId: 'farewell' },
        ],
      },
      {
        id: 'crater',
        text:
          '帶避雷符、雷熔玻片與電羽。風眼裂開時不要奔跑，奔跑的人在雷眼裡像逃走的獵物。',
        options: [
          { text: '龍雷化身是什麼？', nextId: 'avatar' },
          { text: '我會準備。', nextId: 'farewell' },
        ],
      },
      {
        id: 'farewell',
        text: '先讓雷聲說完，再回答。草原討厭插話的人。',
      },
    ],
    guardianHints: {
      creature: '奧魯能判斷引雷喚雷者、風暴玻岩巨像與龍雷化身的節奏關係。',
      treasure: '他的鼓繩記錄雷鼓石圈、風暴玻岩與世界王火坑的進入順序。',
      spirit: '他把戰鬥前的準備轉化成和風暴協商的儀式。',
    },
  },

glass_dunes_surveyor: {
    id: 'glass_dunes_surveyor',
    name: '瑟琳',
    alias: 'surveyor',
    title: '琉璃沙丘測光員',
    description:
      '一名披著遮光白布的測光員站在日照玻門邊，手裡拿著刻度鏡、黑鹽袋與被熱風磨白的地圖。' +
      '她每隔數息就把鏡面轉開，避免整張地圖被太陽燒穿。',
    roomId: 'glass_dunes_sun_gate',
    type: 'quest',
    dialogue: [
      {
        id: 'greeting',
        text:
          '進沙丘前先學會看反光。亮的地方不一定是路，暗的地方也不一定安全。',
        options: [
          { text: '安全路線怎麼走？', nextId: 'route' },
          { text: '沙下有什麼？', nextId: 'threats' },
          { text: '日火坑在哪？', nextId: 'crater' },
          { text: '我會看光。', nextId: 'farewell' },
        ],
      },
      {
        id: 'route',
        text:
          '先過鏡面沙坡，補水去暗水袋，想進宮門就找海市集影和黑曜井。別在正午穿過玻暴盆地。',
        options: [
          { text: '沙下有什麼？', nextId: 'threats' },
          { text: '日火坑在哪？', nextId: 'crater' },
        ],
      },
      {
        id: 'threats',
        text:
          '玻砂沙蜥看背光，鏡砂潛獵者看水袋，海市蜃怨看你的影子。找不到影子時，先停下。',
        options: [
          { text: '安全路線怎麼走？', nextId: 'route' },
          { text: '明白。', nextId: 'farewell' },
        ],
      },
      {
        id: 'crater',
        text:
          '日火坑在埋宮門和失朝祭壇之後。要帶日輪盤線索，否則你只會被玻砂帶回同一個入口。',
        options: [
          { text: '沙下有什麼？', nextId: 'threats' },
          { text: '我去找日輪盤。', nextId: 'farewell' },
        ],
      },
      {
        id: 'farewell',
        text: '用布包住金屬，用鹽試幻影，用陰影記方向。',
      },
    ],
    guardianHints: {
      creature: '瑟琳能辨認玻砂沙蜥、鏡砂潛獵者與海市蜃怨留下的折光痕跡。',
      treasure: '她的測光圖標出日照玻門、暗水袋、海市集影和日火坑的相對位置。',
      spirit: '她把一片會說謊的沙海量成可走的路。',
    },
  },

glass_dunes_mirage_trader: {
    id: 'glass_dunes_mirage_trader',
    name: '法希德',
    alias: 'trader',
    title: '海市補給商',
    description:
      '一名補給商在海市集影的破旗下擺攤，貨架半真半假，只有壓著黑曜井鹽的商品不會隨熱浪晃動。' +
      '他販售水袋、遮光布、玻砂材料與通往宮門的古印線索。',
    roomId: 'glass_dunes_mirage_bazaar',
    type: 'merchant',
    shopItems: [
      'small_hp_potion',
      'medium_hp_potion',
      'small_mp_potion',
      'fused_glass_sand',
      'mirror_shard_plate',
      'obsidian_well_salt',
      'sunbleached_relic_seal',
    ],
    dialogue: [
      {
        id: 'greeting',
        text:
          '看清楚再買。這裡有些攤位只收金幣，有些攤位收影子。我的攤位只收你願意付的東西。',
        options: [
          { text: '我看看補給。', nextId: 'shop' },
          { text: '哪些東西是真的？', nextId: 'real' },
          { text: '宮門要什麼？', nextId: 'door' },
          { text: '先不買。', nextId: 'farewell' },
        ],
      },
      {
        id: 'shop',
        text: '水、藥、黑曜井鹽、玻砂、鏡砂甲片和日漂遺印。要去日火坑，別只帶武器。',
        action: { type: 'shop', data: { shopType: 'glass_dunes_supply' } },
        options: [
          { text: '哪些東西是真的？', nextId: 'real' },
          { text: '宮門要什麼？', nextId: 'door' },
          { text: '先這樣。', nextId: 'farewell' },
        ],
      },
      {
        id: 'real',
        text:
          '被鹽壓住的是真的，能投下影子的多半是真的，會跟你討價還價的就要小心。',
        options: [
          { text: '我看看補給。', nextId: 'shop' },
          { text: '我記住了。', nextId: 'farewell' },
        ],
      },
      {
        id: 'door',
        text:
          '埋宮門不認鑰匙，認對位線。日漂遺印能證明你不是幻影，失朝日輪盤能告訴門該往哪裡轉。',
        options: [
          { text: '我看看補給。', nextId: 'shop' },
          { text: '我去找日輪盤。', nextId: 'farewell' },
        ],
      },
      {
        id: 'farewell',
        text: '若你回到同一面破旗前，先別罵路，檢查自己的影子。',
      },
    ],
    guardianHints: {
      creature: '法希德知道鏡砂潛獵者會先割水袋，也知道海市蜃怨如何偽裝攤影。',
      treasure: '他的真貨壓著黑曜井鹽，包含熔融玻砂、鏡砂甲片與日漂遺印。',
      spirit: '他讓海市集影成為危險幻象中少數能交易的真實節點。',
    },
  },

glass_dunes_sunwright: {
    id: 'glass_dunes_sunwright',
    name: '伊蘭',
    alias: 'sunwright',
    title: '日輪匠師',
    description:
      '一名匠師守在日輪熔臺陰影邊，皮圍裙被玻砂燒出細小孔洞。' +
      '他用稜鏡透核校準光線，試圖讓失控熔臺停止把沙海繼續熔成玻璃。',
    roomId: 'glass_dunes_solar_forge',
    type: 'quest',
    dialogue: [
      {
        id: 'greeting',
        text:
          '這座熔臺本來只是工坊，不是太陽的牢籠。古王朝把光線折得太準，才把災難也折了進來。',
        options: [
          { text: '熔臺怎麼停？', nextId: 'forge' },
          { text: '日衛守什麼？', nextId: 'sentinel' },
          { text: '琉璃龍是什麼？', nextId: 'wyrm' },
          { text: '我先去找材料。', nextId: 'farewell' },
        ],
      },
      {
        id: 'forge',
        text:
          '需要稜鏡透核校光、黑曜井鹽降溫、日輪盤對位。少一樣，熔臺只會把你的影子燒到牆上。',
        options: [
          { text: '日衛守什麼？', nextId: 'sentinel' },
          { text: '琉璃龍是什麼？', nextId: 'wyrm' },
        ],
      },
      {
        id: 'sentinel',
        text:
          '失朝日衛不是單純的守門人。它們守的是日輪盤秩序，只要你站錯光線，就會被當成盜墓者。',
        options: [
          { text: '熔臺怎麼停？', nextId: 'forge' },
          { text: '我會找陰影。', nextId: 'farewell' },
        ],
      },
      {
        id: 'wyrm',
        text:
          '日火琉璃龍不是龍，是被鎖進玻璃裡的日火反噬。打牠前先讓祭壇投下陰影，否則吐息會被整座坑反射。',
        options: [
          { text: '熔臺怎麼停？', nextId: 'forge' },
          { text: '我會準備。', nextId: 'farewell' },
        ],
      },
      {
        id: 'farewell',
        text: '別相信最亮的路。工匠活下來靠的是角度，不是膽量。',
      },
    ],
    guardianHints: {
      creature: '伊蘭能解釋稜鏡魔像守衛、日輪熔火元素與日火琉璃龍的光線弱點。',
      treasure: '他的校準盤需要稜鏡透核、黑曜井鹽與失朝日輪盤。',
      spirit: '他把古王朝工藝從神話拉回可修理的機械問題。',
    },
  },

underground_city_lift_warden: {
    id: 'underground_city_lift_warden',
    name: '格倫姆',
    alias: 'warden',
    title: '升降門守衛',
    description:
      '一名穿著鉚釘護甲的守衛站在城邦升降門旁，手握升降鏈閘的銅柄。' +
      '他會先檢查通行牌，再提醒外來者別在階梯城邦裡亂闖工坊軌道。',
    roomId: 'underground_city_gate_lift',
    type: 'quest',
    dialogue: [
      {
        id: 'greeting',
        text: '升降門只管兩件事：誰進城，誰帶著麻煩進城。你看起來至少不是第二種。',
        options: [
          { text: '入城規矩是什麼？', nextId: 'rules' },
          { text: '我該先去哪？', nextId: 'route' },
          { text: '知道了。', nextId: 'farewell' },
        ],
      },
      {
        id: 'rules',
        text: '市場交易要用交易牌，暗河搭船要通行券，熔爐排程要熱額券。黑市的事別在議事廳問。',
        options: [
          { text: '我該先去哪？', nextId: 'route' },
          { text: '我會照規矩。', nextId: 'farewell' },
        ],
      },
      {
        id: 'route',
        text: '抵達廣場能分流。想買東西去市場，想辦事去議事廳，想搭船就往暗河碼頭。',
        options: [
          { text: '入城規矩是什麼？', nextId: 'rules' },
          { text: '明白。', nextId: 'farewell' },
        ],
      },
      { id: 'farewell', text: '走石階內側。外側給貨車和脾氣差的鐵匠。' },
    ],
    guardianHints: {
      creature: '地下城邦是安全城鎮，格倫姆會阻止戰鬥事件被帶進升降門。',
      treasure: '他掌握城邦交易牌、暗河通行券與熔爐熱額券的基本用途。',
      spirit: '他讓玩家理解地下城邦不是迷宮，而是一座有規矩的運作城市。',
    },
  },

underground_city_portal_registrar: {
    id: 'underground_city_portal_registrar',
    name: '米芮',
    alias: 'registrar',
    title: '傳送廳登記員',
    description:
      '一名書記站在傳送廳藍光拱道前，桌上排著符文簿、目的地印章與防火墨水。' +
      '她的工作是確認每次傳送都能在帳本裡找到回程。',
    roomId: 'underground_city_portal_hall',
    type: 'quest',
    dialogue: [
      {
        id: 'greeting',
        text: '傳送可以很快，也可以很麻煩。若你沒有登記，麻煩通常比你更快抵達。',
        options: [
          { text: '能傳去哪？', nextId: 'routes' },
          { text: '為什麼要登記？', nextId: 'record' },
          { text: '晚點再辦。', nextId: 'farewell' },
        ],
      },
      {
        id: 'routes',
        text: '目前只處理城內節點與已承認的外部入口。危險區域傳送要先去公會辦事處留任務紀錄。',
        options: [
          { text: '為什麼要登記？', nextId: 'record' },
          { text: '我去公會。', nextId: 'farewell' },
        ],
      },
      {
        id: 'record',
        text: '城邦在地底，走失的人不一定往下掉，有時會往錯誤年代掉。帳本至少能知道你本來該在哪。',
        options: [
          { text: '能傳去哪？', nextId: 'routes' },
          { text: '有道理。', nextId: 'farewell' },
        ],
      },
      { id: 'farewell', text: '別碰第三座拱門，它還沒承認今天是今天。' },
    ],
    guardianHints: {
      creature: '米芮不提供戰鬥內容，但會把危險區傳送需求導向公會任務流程。',
      treasure: '她能發放或驗證城邦正式服務紀錄。',
      spirit: '她把地下城邦的移動系統變成可追蹤的行政服務。',
    },
  },

underground_city_market_factor: {
    id: 'underground_city_market_factor',
    name: '摩里克',
    alias: 'factor',
    title: '市場管事',
    description:
      '一名市場管事坐在市場露臺的秤臺旁，身後是藥水、菌燈油、繩索和一串串青銅交易牌。' +
      '他說話像報價，短促、準確、不留太多討價空間。',
    roomId: 'underground_city_market_terrace',
    type: 'merchant',
    shopItems: [
      'small_hp_potion',
      'medium_hp_potion',
      'small_mp_potion',
      'lantern_fungus_oil',
      'undercity_trade_token',
      'antidote',
      'small_hp_potion',
    ],
    dialogue: [
      {
        id: 'greeting',
        text: '市場露臺收金幣，也收可信紀錄。沒有交易牌，就別抱怨價格像石頭一樣硬。',
        options: [
          { text: '我看看貨。', nextId: 'shop' },
          { text: '交易牌有什麼用？', nextId: 'token' },
          { text: '先不買。', nextId: 'farewell' },
        ],
      },
      {
        id: 'shop',
        text: '藥水、菌燈油、繩索、火把、交易牌。要去下層街或暗河，先補光。',
        action: { type: 'shop', data: { shopType: 'underground_city_market' } },
        options: [
          { text: '交易牌有什麼用？', nextId: 'token' },
          { text: '先這樣。', nextId: 'farewell' },
        ],
      },
      {
        id: 'token',
        text: '交易牌讓商鋪知道你不是剛從暗河撈上來的影子。公開交易、修補排程、貨物寄存都會看它。',
        options: [
          { text: '我看看貨。', nextId: 'shop' },
          { text: '明白。', nextId: 'farewell' },
        ],
      },
      { id: 'farewell', text: '離開市場前數一次錢，離開黑市前數兩次手指。' },
    ],
    guardianHints: {
      creature: '托瑪維持市場安全，不讓城鎮服務區變成戰鬥區。',
      treasure: '他的攤位提供菌燈油、城邦交易牌和基礎補給。',
      spirit: '他把地下城邦的生活感落在可用的交易節點上。',
    },
  },

underground_city_black_broker: {
    id: 'underground_city_black_broker',
    name: '席芙',
    alias: 'broker',
    title: '黑市掮客',
    description:
      '一名掮客靠在黑市暗巷的熱管旁，指尖把半合法暗印翻來翻去。' +
      '她不提高聲量，因為在這條巷子裡，聽得太清楚也是一種風險。',
    roomId: 'underground_city_black_market',
    type: 'merchant',
    shopItems: [
      'black_market_seal',
      'darkriver_pass',
      'smoke_bomb',
      'lantern_fungus_oil',
      'antidote',
    ],
    dialogue: [
      {
        id: 'greeting',
        text: '你要買合法的東西，去市場。你要買不方便合法的東西，可以先把聲音放低。',
        options: [
          { text: '我看看暗貨。', nextId: 'shop' },
          { text: '黑市暗印是什麼？', nextId: 'seal' },
          { text: '我只是路過。', nextId: 'farewell' },
        ],
      },
      {
        id: 'shop',
        text: '暗印、暗河通行券、開鎖工具、煙霧彈、菌燈油。東西是真的，帳不一定是真的。',
        action: { type: 'shop', data: { shopType: 'underground_city_black_market' } },
        options: [
          { text: '黑市暗印是什麼？', nextId: 'seal' },
          { text: '先這樣。', nextId: 'farewell' },
        ],
      },
      {
        id: 'seal',
        text: '暗印代表城邦默許某件事發生，但不希望它太公開。別拿去議事廳炫耀。',
        options: [
          { text: '我看看暗貨。', nextId: 'shop' },
          { text: '懂了。', nextId: 'farewell' },
        ],
      },
      { id: 'farewell', text: '從走私碼頭離開時，別回頭看第二盞綠燈。那不是給你的。' },
    ],
    guardianHints: {
      creature: '席芙處理地下城邦的風險交易，但仍是城鎮服務 NPC。',
      treasure: '她提供黑市暗印、暗河通行券與潛行補給。',
      spirit: '她讓黑市成為有規則的灰色服務，而不是無差別危險區。',
    },
  },

underground_city_guild_clerk: {
    id: 'underground_city_guild_clerk',
    name: '奧登',
    alias: 'clerk',
    title: '公會辦事員',
    description:
      '一名辦事員坐在公會辦事處厚石櫃檯後，將任務委託、傳送紀錄與危險區報告分成不同顏色的石片。' +
      '他看起來不急，但每份文件都被推到正確的位置。',
    roomId: 'underground_city_guild_office',
    type: 'quest',
    dialogue: [
      {
        id: 'greeting',
        text: '委託要寫清楚。地底最常見的死法不是怪物，是「我以為那條路能走」。',
        options: [
          { text: '有哪些委託？', nextId: 'quests' },
          { text: '危險區怎麼登記？', nextId: 'danger' },
          { text: '我整理一下。', nextId: 'farewell' },
        ],
      },
      {
        id: 'quests',
        text: '目前缺暗河水位紀錄、熔爐排程簽收、舊地基踏勘報告。你能活著回來，就能拿下一份。',
        options: [
          { text: '危險區怎麼登記？', nextId: 'danger' },
          { text: '我會回報。', nextId: 'farewell' },
        ],
      },
      {
        id: 'danger',
        text: '先在傳送廳留回程，再在我這裡留目的地。沒有回程紀錄的委託，酬金會先扣一半當找人費。',
        options: [
          { text: '有哪些委託？', nextId: 'quests' },
          { text: '合理。', nextId: 'farewell' },
        ],
      },
      { id: 'farewell', text: '文件別折。折痕會讓石片讀錯名字。' },
    ],
    guardianHints: {
      creature: '奧登把地下城邦連到外部危險區任務，不在城內生成戰鬥。',
      treasure: '他能驗證通行、任務與傳送紀錄。',
      spirit: '他提供城市的任務樞紐感。',
    },
  },

underground_city_forge_master: {
    id: 'underground_city_forge_master',
    name: '巴洛克',
    alias: 'forgemaster',
    title: '熔爐總匠',
    description:
      '一名總匠站在熔爐廣場熱浪前，鬍鬚被銅環束起，手上握著能測熱的黑鐵尺。' +
      '他能從火色判斷金屬心情，也能從冒險者護甲刮痕判斷他們是不是亂站。',
    roomId: 'underground_city_forge_square',
    type: 'merchant',
    shopItems: [
      'forge_heat_voucher',
      'iron_ore',
      'mithril_ore',
      'crystal_shard',
      'lantern_fungus_oil',
    ],
    dialogue: [
      {
        id: 'greeting',
        text: '熔爐不缺火，缺的是排程。你有熱額券，就有工位；沒有，就等火自己冷。',
        options: [
          { text: '我看看工坊材料。', nextId: 'shop' },
          { text: '熱額券怎麼用？', nextId: 'voucher' },
          { text: '先不打擾。', nextId: 'farewell' },
        ],
      },
      {
        id: 'shop',
        text: '熱額券、礦石、水晶碎片、菌燈油。修補鋪能做小活，坩堝工坊做大活。',
        action: { type: 'shop', data: { shopType: 'underground_city_forge' } },
        options: [
          { text: '熱額券怎麼用？', nextId: 'voucher' },
          { text: '先這樣。', nextId: 'farewell' },
        ],
      },
      {
        id: 'voucher',
        text: '熱額券買的是熔爐時間，不是成功保證。材料太爛，神也只能鍛出漂亮垃圾。',
        options: [
          { text: '我看看工坊材料。', nextId: 'shop' },
          { text: '懂了。', nextId: 'farewell' },
        ],
      },
      { id: 'farewell', text: '別把濕靴踩上熔臺。上個人現在還黏在鐵軌邊。' },
    ],
    guardianHints: {
      creature: '巴洛克代表熔爐廣場的製作服務，不需要新增城內怪物。',
      treasure: '他供應熔爐熱額券、礦石與工坊材料。',
      spirit: '他讓地下城邦的火元素變成產業，而不是單純戰鬥。',
    },
  },

underground_city_innkeeper: {
    id: 'underground_city_innkeeper',
    name: '蓮娜',
    alias: 'innkeeper',
    title: '旅店洞廳掌櫃',
    description:
      '一名掌櫃在旅店洞廳的石櫃檯後擦拭杯盞，牆上掛滿從各層街道收來的路牌。' +
      '洞廳裡有暖霧、菌燈和足夠厚的門，能讓旅人暫時忘記地底有多深。',
    roomId: 'underground_city_inn_cavern',
    type: 'merchant',
    shopItems: [
      'small_hp_potion',
      'medium_hp_potion',
      'large_hp_potion',
      'small_mp_potion',
      'medium_mp_potion',
      'lantern_fungus_oil',
    ],
    dialogue: [
      {
        id: 'greeting',
        text: '床位、熱湯、乾靴。這三樣比英雄故事可靠，尤其是在地下。',
        options: [
          { text: '我看看補給。', nextId: 'shop' },
          { text: '哪裡能休息？', nextId: 'rest' },
          { text: '晚點回來。', nextId: 'farewell' },
        ],
      },
      {
        id: 'shop',
        text: '藥水和菌燈油都有。要走暗河，先買燈；要進工坊，先喝水。',
        action: { type: 'shop', data: { shopType: 'underground_city_inn' } },
        options: [
          { text: '哪裡能休息？', nextId: 'rest' },
          { text: '先這樣。', nextId: 'farewell' },
        ],
      },
      {
        id: 'rest',
        text: '洞廳、蒸汽浴場、菌燈庭園都能讓人緩過來。別在走私碼頭睡，醒來時名字可能會少一半。',
        options: [
          { text: '我看看補給。', nextId: 'shop' },
          { text: '明白。', nextId: 'farewell' },
        ],
      },
      { id: 'farewell', text: '門閂是免費的，但記得自己扣上。' },
    ],
    guardianHints: {
      creature: '蓮娜強化地下城邦作為安全補給點的定位。',
      treasure: '她提供恢復補給與菌燈油。',
      spirit: '她讓城市有休息與長線探索前整備的功能。',
    },
  },

underground_city_ferryman: {
    id: 'underground_city_ferryman',
    name: '莫瑞克',
    alias: 'ferryman',
    title: '暗河船頭',
    description:
      '一名船頭靠在暗河碼頭的石樁旁，黑水拍打船腹，船燈裡燃著淡綠菌油。' +
      '他一眼就能看出誰是乘客，誰是會把船弄沉的麻煩。',
    roomId: 'underground_city_darkriver_quay',
    type: 'quest',
    dialogue: [
      {
        id: 'greeting',
        text: '暗河不問你從哪來，只問你有沒有通行券。沒券的人，也可以游。',
        options: [
          { text: '通行券去哪用？', nextId: 'pass' },
          { text: '暗河通往哪？', nextId: 'routes' },
          { text: '我還沒準備好。', nextId: 'farewell' },
        ],
      },
      {
        id: 'pass',
        text: '碼頭、走私碼頭、幾條不在公開地圖上的支流。通行券買的是位置，不買保證。',
        options: [
          { text: '暗河通往哪？', nextId: 'routes' },
          { text: '我去買券。', nextId: 'farewell' },
        ],
      },
      {
        id: 'routes',
        text: '北接蒸汽浴場排水，南接走私碼頭，還有幾條老地基下的舊水路。別問第三條，先活過第二條。',
        options: [
          { text: '通行券去哪用？', nextId: 'pass' },
          { text: '知道了。', nextId: 'farewell' },
        ],
      },
      { id: 'farewell', text: '上船前把燈買好。暗河不喜歡替人照路。' },
    ],
    guardianHints: {
      creature: '莫瑞克提供交通與危險提醒，不把暗河碼頭改成戰鬥房。',
      treasure: '他認暗河通行券與菌燈油。',
      spirit: '他把城邦下層的交通感具體化。',
    },
  },

cursed_graveyard_watch_keeper: {
    id: 'cursed_graveyard_watch_keeper',
    name: '艾妲',
    alias: 'keeper',
    title: '守夜燈亭看守',
    description:
      '一名披著防霧斗篷的看守站在守夜燈亭殘燈旁，手裡握著一截裂鐘舌和沾著黑蠟的火鉗。' +
      '她會先看旅人的影子是否完整，再決定要不要回答問題。',
    roomId: 'cursed_graveyard_watch_lantern',
    type: 'quest',
    dialogue: [
      {
        id: 'greeting',
        text: '進墓園前先數影子。你有一個，暫時還算活人。',
        options: [
          { text: '墓鐘為什麼響？', nextId: 'bell' },
          { text: '黑霧怎麼避？', nextId: 'mist' },
          { text: '我會小心。', nextId: 'farewell' },
        ],
      },
      {
        id: 'bell',
        text: '鐘樓沒人，但鐘聲會點名。被點到的骸兵會爬回葬列，被點到的生者最好別答應。',
        options: [
          { text: '黑霧怎麼避？', nextId: 'mist' },
          { text: '我不回應鐘聲。', nextId: 'farewell' },
        ],
      },
      {
        id: 'mist',
        text: '黑霧靠冷燭和封蠟繞路。看不見墓碑時別直走，先找守夜燈、破聖像或骨牆。',
        options: [
          { text: '墓鐘為什麼響？', nextId: 'bell' },
          { text: '明白。', nextId: 'farewell' },
        ],
      },
      { id: 'farewell', text: '若聽見自己的名字從棺裡傳出來，別回答。名字可以重取，命不行。' },
    ],
    guardianHints: {
      creature: '艾妲能說明墓鐘骸兵、黑羽怨影與黑霧池的行動徵兆。',
      treasure: '她需要墓鐘舌片、黑霧殘渣與守墓封蠟來校正燈亭。',
      spirit: '她讓墓園入口成為仍能求生的最後秩序點。',
    },
  },

cursed_graveyard_grave_seller: {
    id: 'cursed_graveyard_grave_seller',
    name: '羅文',
    alias: 'seller',
    title: '掘墓棚補給人',
    description:
      '一名沉默的補給人守在掘墓棚內，把冷燭、聖水、封蠟和撬棺工具分開擺放。' +
      '他的貨架上沒有裝飾，只有每件物品被使用後可能多活多久的粗略標記。',
    roomId: 'cursed_graveyard_gravedigger_shack',
    type: 'merchant',
    shopItems: [
      'medium_hp_potion',
      'medium_mp_potion',
      'large_hp_potion',
      'grave_bone_shard',
      'grave_bell_clapper',
      'black_mist_residue',
      'cracked_saint_lens',
      'gravekeeper_wax_seal',
    ],
    dialogue: [
      {
        id: 'greeting',
        text: '你要買能活著出去的東西，不是好看的東西。墓園不欣賞品味。',
        options: [
          { text: '我看看補給。', nextId: 'shop' },
          { text: '哪些材料重要？', nextId: 'materials' },
          { text: '晚點再來。', nextId: 'farewell' },
        ],
      },
      {
        id: 'shop',
        text: '藥水、墓園骨片、墓鐘舌片、黑霧殘渣、破聖像透片、守墓封蠟。買之前先想好要走哪條路。',
        action: { type: 'shop', data: { shopType: 'cursed_graveyard_supply' } },
        options: [
          { text: '哪些材料重要？', nextId: 'materials' },
          { text: '先這樣。', nextId: 'farewell' },
        ],
      },
      {
        id: 'materials',
        text:
          '骨片看葬列，舌片聽墓鐘，黑霧殘渣看詛咒，聖像透片看真影，封蠟看哪口棺不該開。',
        options: [
          { text: '我看看補給。', nextId: 'shop' },
          { text: '記住了。', nextId: 'farewell' },
        ],
      },
      { id: 'farewell', text: '別把空棺當路標。空棺通常在等人補上。' },
    ],
    guardianHints: {
      creature: '羅文熟悉瘟棺抬行者、墓誓亡騎與守墓地窖監守的掉落證物。',
      treasure: '他的棚內販售墓園材料與深入墓園前的恢復補給。',
      spirit: '他把死亡地景轉化成玩家能理解的補給與線索系統。',
    },
  },

cursed_graveyard_litany_reader: {
    id: 'cursed_graveyard_litany_reader',
    name: '瑪席雅',
    alias: 'reader',
    title: '悼詞解讀者',
    description:
      '一名解讀者跪坐在禮拜堂廢墟的斷椅旁，膝上攤著被黑霧咬壞的悼詞拓本。' +
      '她用破聖像透片壓住書頁，避免字句自己爬回巫妖陵寢。',
    roomId: 'cursed_graveyard_chapel_ruin',
    type: 'quest',
    dialogue: [
      {
        id: 'greeting',
        text: '這裡的悼詞不是給死者聽，是給墓園聽。念錯一句，整座墓園都會以為葬禮還沒結束。',
        options: [
          { text: '巫妖在守什麼？', nextId: 'lich' },
          { text: '悼詞頁有什麼用？', nextId: 'page' },
          { text: '我先不碰書。', nextId: 'farewell' },
        ],
      },
      {
        id: 'lich',
        text:
          '月悼巫妖守祭壇，鐘墓巫妖主守結尾。只要鐘聲和悼詞互相接上，亡者就永遠不會被送走。',
        options: [
          { text: '悼詞頁有什麼用？', nextId: 'page' },
          { text: '我要切斷鐘聲。', nextId: 'farewell' },
        ],
      },
      {
        id: 'page',
        text:
          '悼詞頁不是戰利品，是證據。收齊後能知道哪一句把整座墓園鎖住，也能知道該在哪裡停下誦讀。',
        options: [
          { text: '巫妖在守什麼？', nextId: 'lich' },
          { text: '我會帶回來。', nextId: 'farewell' },
        ],
      },
      { id: 'farewell', text: '若你必須讀悼詞，讀到自己的名字前就停。' },
    ],
    guardianHints: {
      creature: '瑪席雅能解釋月悼巫妖、鐘墓巫妖主與破聖像鬼的儀式關係。',
      treasure: '她需要巫妖悼詞頁與破聖像透片來重建詛咒祈文。',
      spirit: '她把墓園 Boss 線索包裝成可以追查與中斷的儀式。',
    },
  },

storm_highlands_cliff_guide: {
    id: 'storm_highlands_cliff_guide',
    name: '卡瑞克',
    alias: 'guide',
    title: '高原攀風嚮導',
    description:
      '一名嚮導把攀繩纏在峭壁入口的鐵樁上，肩上披著被雨打硬的羽斗篷。' +
      '他會先看雲層流速，再決定今天要不要讓外來者上雲索橋。',
    roomId: 'storm_highlands_cliff_gate',
    type: 'quest',
    dialogue: [
      {
        id: 'greeting',
        text: '高原路不是往上走，是先學會什麼時候不要被風帶走。',
        options: [
          { text: '安全路線怎麼走？', nextId: 'route' },
          { text: '獅鷲在哪？', nextId: 'griffin' },
          { text: '我會壓低身子。', nextId: 'farewell' },
        ],
      },
      {
        id: 'route',
        text: '先過風切小徑，看雨棚岩臺和雲索橋。要進暴風眼，先拿風壇殘鈴，不然風牆會把你送回崖底。',
        options: [
          { text: '獅鷲在哪？', nextId: 'griffin' },
          { text: '我去找殘鈴。', nextId: 'farewell' },
        ],
      },
      {
        id: 'griffin',
        text: '哨臺是巡邏，巢臺是領地，王峰是禁區。看見風暴羽逆風飄時，代表牠們已經在你上方。',
        options: [
          { text: '安全路線怎麼走？', nextId: 'route' },
          { text: '明白。', nextId: 'farewell' },
        ],
      },
      { id: 'farewell', text: '繩結打三次。第一個給手，第二個給命，第三個給風。' },
    ],
    guardianHints: {
      creature: '卡瑞克能辨識風切隼、暴角岩羊、雲橋掠風者與風哨獅鷲的活動路線。',
      treasure: '他的攀風圖標出風壇殘鈴、風暴玻礦與風王冠羽的用途。',
      spirit: '他把高原的垂直危險轉成玩家可遵守的攀行規則。',
    },
  },

storm_highlands_aerie_keeper: {
    id: 'storm_highlands_aerie_keeper',
    name: '琳娜',
    alias: 'keeper',
    title: '獅鷲巢臺看守',
    description:
      '一名巢臺看守躲在天葬石堆後的背風處，整理折斷羽管、風壇殘鈴與礦脈碎片。' +
      '她的手套上滿是爪痕，但每一道都被仔細縫回原位。',
    roomId: 'storm_highlands_sky_cairns',
    type: 'merchant',
    shopItems: [
      'medium_hp_potion',
      'medium_mp_potion',
      'highland_stormfeather',
      'stormgoat_horn',
      'stormglass_ore',
      'wind_altar_chime',
    ],
    dialogue: [
      {
        id: 'greeting',
        text: '買東西時別背對巢臺。獅鷲不介意你交易，但牠們討厭你假裝天空不存在。',
        options: [
          { text: '我看看補給。', nextId: 'shop' },
          { text: '風王要怎麼打？', nextId: 'king' },
          { text: '晚點再來。', nextId: 'farewell' },
        ],
      },
      {
        id: 'shop',
        text: '藥水、風暴羽、山羊角、風暴玻礦、風壇殘鈴都有。要去王峰，至少把鈴帶上。',
        action: { type: 'shop', data: { shopType: 'storm_highlands_supply' } },
        options: [
          { text: '風王要怎麼打？', nextId: 'king' },
          { text: '先這樣。', nextId: 'farewell' },
        ],
      },
      {
        id: 'king',
        text: '風王不是只靠翅膀。牠會改風向、叫巢群、把你的位置變成錯誤。先聽殘鈴，再看雲影。',
        options: [
          { text: '我看看補給。', nextId: 'shop' },
          { text: '我會看雲影。', nextId: 'farewell' },
        ],
      },
      { id: 'farewell', text: '若你覺得風突然安靜，不是安全，是牠們正在俯衝。' },
    ],
    guardianHints: {
      creature: '琳娜能說明風哨獅鷲、暴風眼飛龍與風王獅鷲的高空節奏。',
      treasure: '她提供風暴羽、山羊角、風暴玻礦與風壇殘鈴。',
      spirit: '她把獅鷲巢線與王峰 Boss 線索接成可準備的補給節點。',
    },
  },
};
