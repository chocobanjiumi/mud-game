import type { NpcDef } from '@game/shared';

export const NPCS_PART_008: Record<string, NpcDef> = {
pilgrim_road_cemetery_keeper: {
    id: 'pilgrim_road_cemetery_keeper',
    name: '索蘭',
    alias: 'keeper',
    title: '舊墓岔路守墓人',
    description:
      '一名守墓人在舊墓岔路擦拭白石碑，鐵鏟靠在膝邊，斗篷上沾著乾草與石灰粉。' +
      '他說自己只負責讓迷路的人知道哪一條路不是終點。',
    roomId: 'pilgrim_road_old_cemetery_turn',
    type: 'quest',
    dialogue: [
      {
        id: 'greeting',
        text: '走到這裡還活著，代表你至少躲過了半條路的貪心。',
        options: [
          { text: '白石路標怎麼看？', nextId: 'marker' },
          { text: '試煉守是什麼？', nextId: 'trial' },
          { text: '我繼續走。', nextId: 'farewell' },
        ],
      },
      {
        id: 'marker',
        text: '真的白石路標會在日落時背光，假的會把影子指向伏擊彎道。帶白石灰粉能讓假影子短暫散開。',
        options: [
          { text: '試煉守是什麼？', nextId: 'trial' },
          { text: '我去找灰粉。', nextId: 'farewell' },
        ],
      },
      {
        id: 'trial',
        text: '聖地門試煉守只問一件事：你是不是完成了這條路。殺過去的人不一定能通過，活著抵達的人也不一定。',
        options: [
          { text: '白石路標怎麼看？', nextId: 'marker' },
          { text: '我明白。', nextId: 'farewell' },
        ],
      },
      { id: 'farewell', text: '別在墓碑上坐下。那是給走不動的人，不是給累的人。' },
    ],
    guardianHints: {
      creature: '索蘭能提示聖徒橋苦行殘影、終點聖碑光誓者與聖地門試煉守。',
      treasure: '他說明白石灰粉與聖地門印的後段用途。',
      spirit: '他把舊墓岔路變成前往聖地門前的警告節點。',
    },
  },

ironwood_fort_gate_captain: {
    id: 'ironwood_fort_gate_captain',
    name: '羅德里克',
    alias: 'captain',
    title: '鐵木外門守備隊長',
    description:
      '一名鬍鬚花白的守備隊長站在鐵木外門內側，鎧甲上有多處火油燒痕。' +
      '他手中握著半截軍令槍，像隨時準備把失控哨兵重新編入隊列。',
    roomId: 'ironwood_fort_outer_gate',
    type: 'quest',
    dialogue: [
      {
        id: 'greeting',
        text: '要塞還站著，但軍令已經壞了。別把每個穿軍甲的人都當成友軍。',
        options: [
          { text: '先看戰線。', nextId: 'front' },
          { text: '高堡核心在哪？', nextId: 'keep' },
          { text: '我會留意。', nextId: 'farewell' },
        ],
      },
      {
        id: 'front',
        text: '外門是門哨，軍需行列有叛逃兵，信號塔有爆破兵。若烽火變成綠煙，代表內堡在對自己下令開火。',
        options: [
          { text: '高堡核心在哪？', nextId: 'keep' },
          { text: '我先清外門。', nextId: 'farewell' },
        ],
      },
      {
        id: 'keep',
        text: '穿過指揮長廊和誓約禮拜堂就是內堡門。高堡戰帥不會離開核心，牠只會讓整座要塞替牠走路。',
        options: [
          { text: '先看戰線。', nextId: 'front' },
          { text: '明白。', nextId: 'farewell' },
        ],
      },
      { id: 'farewell', text: '聽見三短一長的號角就蹲下。那不是集合，是爆破。' },
    ],
    guardianHints: {
      creature: '羅德里克能提示鐵木門哨、烽火爆破兵、誓約堂鐵騎與高堡戰帥。',
      treasure: '他說明鐵木板材、斥候信管與內堡軍令印的軍事用途。',
      spirit: '他把鐵木要塞的外門、信號塔與高堡核心整理成主要推進線。',
    },
  },

ironwood_fort_quartermaster: {
    id: 'ironwood_fort_quartermaster',
    name: '貝菈',
    alias: 'quartermaster',
    title: '軍需行列補給官',
    description:
      '一名補給官坐在軍需行列的木箱上，身旁整齊堆著藥水、箭束與封好的燼油瓶。' +
      '她每次交貨都會在補給牌上多刻一道記號，避免叛逃兵拿同一塊牌領兩次。',
    roomId: 'ironwood_fort_quartermaster_row',
    type: 'merchant',
    shopItems: [
      'medium_hp_potion',
      'medium_mp_potion',
      'large_hp_potion',
      'large_mp_potion',
      'ironwood_plank',
      'fort_supply_token',
      'forge_cinder_oil',
    ],
    dialogue: [
      {
        id: 'greeting',
        text: '補給牌拿出來。沒有也能買，但別問我為什麼比軍價貴。',
        options: [
          { text: '我看看軍需。', nextId: 'shop' },
          { text: '叛逃兵在哪？', nextId: 'renegades' },
          { text: '稍後再來。', nextId: 'farewell' },
        ],
      },
      {
        id: 'shop',
        text: '藥水、鐵木板材、補給牌、鍛坊燼油。斥候信管不賣，信號塔那邊一亂，半座堡都會燒起來。',
        action: { type: 'shop', data: { shopType: 'ironwood_fort_quartermaster' } },
        options: [
          { text: '叛逃兵在哪？', nextId: 'renegades' },
          { text: '先這樣。', nextId: 'farewell' },
        ],
      },
      {
        id: 'renegades',
        text: '補給隧道、廢箱後面、隱蔽突門，全是他們喜歡的地方。看到有人背兩個火油箱還說只是巡邏，先打。',
        options: [
          { text: '我看看軍需。', nextId: 'shop' },
          { text: '我會檢查火油箱。', nextId: 'farewell' },
        ],
      },
      { id: 'farewell', text: '燼油別靠近明火開瓶。這句話我今天已經說得太晚三次了。' },
    ],
    guardianHints: {
      creature: '貝菈能提示叛逃軍需兵、走私藏點守衛與鍛坊燼衛的補給線。',
      treasure: '她販售鐵木板材、要塞補給牌與鍛坊燼油。',
      spirit: '她把軍需行列變成鐵木要塞的補給與經濟節點。',
    },
  },

ironwood_fort_forgemaster: {
    id: 'ironwood_fort_forgemaster',
    name: '奧斯坦',
    alias: 'forgemaster',
    title: '鐵木鍛坊爐主',
    description:
      '一名矮壯爐主站在鐵木鍛坊的爐口前，皮圍裙上沾滿黑紅燼油。' +
      '他不斷調整風箱，確保爐火燒向城牆外，而不是燒進兵營。',
    roomId: 'ironwood_fort_forge_works',
    type: 'quest',
    dialogue: [
      {
        id: 'greeting',
        text: '鍛坊還能用，問題是現在連爐灰都聽軍令。別讓燼衛靠近火油堆。',
        options: [
          { text: '鍛坊失控到什麼程度？', nextId: 'forge' },
          { text: '鐵木林圃安全嗎？', nextId: 'grove' },
          { text: '我去看看。', nextId: 'farewell' },
        ],
      },
      {
        id: 'forge',
        text: '燼衛只是外殼，真正麻煩的是信號塔把爆破命令送進鍛坊。拿到斥候信管後，先看顏色再點。',
        options: [
          { text: '鐵木林圃安全嗎？', nextId: 'grove' },
          { text: '我會管住火線。', nextId: 'farewell' },
        ],
      },
      {
        id: 'grove',
        text: '林圃的根衛比士兵還守規矩。你要板材可以取外皮，別砍根，根一斷，西牆會先倒。',
        options: [
          { text: '鍛坊失控到什麼程度？', nextId: 'forge' },
          { text: '我記住了。', nextId: 'farewell' },
        ],
      },
      { id: 'farewell', text: '看到火變成黑色就後退。那不是熱，是命令在燒。' },
    ],
    guardianHints: {
      creature: '奧斯坦能提示鍛坊燼衛、鐵木根衛與烽火爆破兵的火線關係。',
      treasure: '他說明鐵木板材、鍛坊燼油與斥候信管的用途。',
      spirit: '他把鍛坊與鐵木林圃整理成要塞防衛資源線。',
    },
  },

ironwood_fort_scout_sergeant: {
    id: 'ironwood_fort_scout_sergeant',
    name: '凱莎',
    alias: 'sergeant',
    title: '斥候棲臺軍士',
    description:
      '一名斥候軍士蹲在斥候棲臺邊緣，手邊攤著幾支燒過一半的信管。' +
      '她說話時總先看信號塔，再看隱蔽突門，像在等下一次錯誤烽火。',
    roomId: 'ironwood_fort_scout_roost',
    type: 'quest',
    dialogue: [
      {
        id: 'greeting',
        text: '信號塔已經不可信了。紅煙是敵襲，白煙是撤退，綠煙是有人想讓我們互相開火。',
        options: [
          { text: '我該先處理哪裡？', nextId: 'route' },
          { text: '內堡門怎麼進？', nextId: 'keep' },
          { text: '我會看煙色。', nextId: 'farewell' },
        ],
      },
      {
        id: 'route',
        text: '先清信號塔，再查囚牢石廊。若鎖衛開始敲三下鏈子，代表指揮長廊的構裝也醒了。',
        options: [
          { text: '內堡門怎麼進？', nextId: 'keep' },
          { text: '我去信號塔。', nextId: 'farewell' },
        ],
      },
      {
        id: 'keep',
        text: '內堡門需要你壓住指揮長廊和誓約禮拜堂兩邊。只打一邊，高堡戰帥會用另一邊補線。',
        options: [
          { text: '我該先處理哪裡？', nextId: 'route' },
          { text: '了解。', nextId: 'farewell' },
        ],
      },
      { id: 'farewell', text: '別站在旗影下面。弩手最喜歡把旗影當刻度。' },
    ],
    guardianHints: {
      creature: '凱莎能提示堡牆弩手、囚牢鎖衛、軍令板構裝與高堡戰帥。',
      treasure: '她說明斥候信管與內堡軍令印的後段用途。',
      spirit: '她把斥候棲臺、信號塔與內堡門串成後半段推進線。',
    },
  },

amber_forest_claim_surveyor: {
    id: 'amber_forest_claim_surveyor',
    name: '伊蓮',
    alias: 'surveyor',
    title: '採集入口界樁測量員',
    description:
      '一名採集測量員站在界樁旁，腰間掛著樹脂切刀與標記繩。' +
      '她不斷在木板上記下金脂流向，避免採集隊誤入仍在生長的根脈。',
    roomId: 'amber_forest_entry_claim',
    type: 'quest',
    dialogue: [
      {
        id: 'greeting',
        text: '琥珀森林可以採，但不能亂砍。這裡每一道金脂脈都還活著。',
        options: [
          { text: '我該先採什麼？', nextId: 'route' },
          { text: '深琥珀核心在哪？', nextId: 'core' },
          { text: '我會照界樁走。', nextId: 'farewell' },
        ],
      },
      {
        id: 'route',
        text: '先取金脂塊和琥珀脈晶，再到蜂巢找封蠟蟲甲。煙脂孢子別在上風處採，會睡倒整隊。',
        options: [
          { text: '深琥珀核心在哪？', nextId: 'core' },
          { text: '我去琥珀脈徑。', nextId: 'farewell' },
        ],
      },
      {
        id: 'core',
        text: '古脂巨樹和石化花圃之後才是深琥珀核心。若聽見翅聲卻看不見蟲，代表蟲母已經醒了。',
        options: [
          { text: '我該先採什麼？', nextId: 'route' },
          { text: '我會避開核心。', nextId: 'farewell' },
        ],
      },
      { id: 'farewell', text: '用切刀，不要用斧頭。森林分得清採集和傷害。' },
    ],
    guardianHints: {
      creature: '伊蓮能提示琥珀幼樹伏行者、樹脂脈蜥、古脂樹人與深琥珀蟲母的路線。',
      treasure: '她說明金脂塊、琥珀脈晶、封蠟蟲甲與煙脂孢子的採集順序。',
      spirit: '她把琥珀森林的 resource 區規矩轉成採集動線。',
    },
  },

amber_forest_resin_broker: {
    id: 'amber_forest_resin_broker',
    name: '卡洛',
    alias: 'broker',
    title: '琥珀脈徑樹脂經紀',
    description:
      '一名樹脂經紀坐在琥珀脈徑旁的防黏布上，貨箱中分格放著金脂塊、琥珀脈晶與備用切刀。' +
      '他說每一塊材料都已登記，不登記的通常會被森林自己收回。',
    roomId: 'amber_forest_vein_path',
    type: 'merchant',
    shopItems: [
      'medium_hp_potion',
      'medium_mp_potion',
      'antidote',
      'golden_resin_chunk',
      'amber_vein_shard',
      'resin_cutting_knife',
    ],
    dialogue: [
      {
        id: 'greeting',
        text: '買材料、買切刀、買解毒劑都可以。買命不行，森林不賣第二次機會。',
        options: [
          { text: '我看看材料。', nextId: 'shop' },
          { text: '哪些材料不能買？', nextId: 'rare' },
          { text: '稍後再來。', nextId: 'farewell' },
        ],
      },
      {
        id: 'shop',
        text: '金脂塊、琥珀脈晶、樹脂切刀和基礎補給。封蠟蟲甲與煙脂孢子太不穩，最好自己取。',
        action: { type: 'shop', data: { shopType: 'amber_forest_resin' } },
        options: [
          { text: '哪些材料不能買？', nextId: 'rare' },
          { text: '先這樣。', nextId: 'farewell' },
        ],
      },
      {
        id: 'rare',
        text: '封蠟蟲甲要新鮮，煙脂孢子要看風向，深琥珀心核更別想。能放在箱裡賣的，都只是外層材料。',
        options: [
          { text: '我看看材料。', nextId: 'shop' },
          { text: '我自己去採。', nextId: 'farewell' },
        ],
      },
      { id: 'farewell', text: '切刀用完擦乾淨。樹脂會記住上一個採集者的手。' },
    ],
    guardianHints: {
      creature: '卡洛能提示樹脂脈蜥、封蠟胡蜂與煙脂菌人的材料價值。',
      treasure: '他販售金脂塊、琥珀脈晶與樹脂切刀，補足資源區商店需求。',
      spirit: '他把琥珀森林採集材料導入可回訪的經濟節點。',
    },
  },

amber_forest_waspkeeper: {
    id: 'amber_forest_waspkeeper',
    name: '蜜雅',
    alias: 'waspkeeper',
    title: '封蠟蜂巢看巢人',
    description:
      '一名戴著厚面紗的看巢人站在封蠟蜂巢下方，手臂包著防蠟布。' +
      '她用很小的煙罐控制蜂群方向，卻從不把煙吹向深琥珀核心。',
    roomId: 'amber_forest_wasp_nests',
    type: 'quest',
    dialogue: [
      {
        id: 'greeting',
        text: '別拍蜂巢。封蠟胡蜂聽不懂道歉，只認震動。',
        options: [
          { text: '我要採封蠟蟲甲。', nextId: 'chitin' },
          { text: '蟲母會來這裡嗎？', nextId: 'matriarch' },
          { text: '我會放輕腳步。', nextId: 'farewell' },
        ],
      },
      {
        id: 'chitin',
        text: '先用煙脂孢子壓住蜂群，再剝翅膜邊緣。剝太深會讓整窩醒來，連燼甲蟲都會跟著躁動。',
        options: [
          { text: '蟲母會來這裡嗎？', nextId: 'matriarch' },
          { text: '我去找孢子。', nextId: 'farewell' },
        ],
      },
      {
        id: 'matriarch',
        text: '蟲母不來蜂巢，蜂巢去聽牠。深琥珀核心一震，所有封蠟翅都會同時停一下。',
        options: [
          { text: '我要採封蠟蟲甲。', nextId: 'chitin' },
          { text: '我會觀察翅聲。', nextId: 'farewell' },
        ],
      },
      { id: 'farewell', text: '如果蜂聲忽然變整齊，立刻離開。那不是安靜，是命令。' },
    ],
    guardianHints: {
      creature: '蜜雅能提示封蠟胡蜂、燼甲蟲與深琥珀蟲母的昆蟲生態線。',
      treasure: '她說明封蠟蟲甲與煙脂孢子的採集方式。',
      spirit: '她把蜂巢、蟲丘與核心串成琥珀森林的昆蟲控制鏈。',
    },
  },

amber_forest_old_resin_druid: {
    id: 'amber_forest_old_resin_druid',
    name: '羅恩',
    alias: 'druid',
    title: '古脂巨樹老德魯伊',
    description:
      '一名老德魯伊坐在古脂巨樹根旁，鬍鬚裡凝著細小金脂珠。' +
      '他用木杖敲擊樹根聽回音，分辨深層琥珀是否仍在穩定生長。',
    roomId: 'amber_forest_elder_resin_tree',
    type: 'quest',
    dialogue: [
      {
        id: 'greeting',
        text: '你走到這裡，森林已經知道你的重量。接下來每一步都會被記進年輪。',
        options: [
          { text: '古脂樹人為何醒來？', nextId: 'treant' },
          { text: '深琥珀心核能取嗎？', nextId: 'heart' },
          { text: '我會尊重森林。', nextId: 'farewell' },
        ],
      },
      {
        id: 'treant',
        text: '因為外層採得太快。古脂樹人不是敵人，是森林在問你還要拿多少。',
        options: [
          { text: '深琥珀心核能取嗎？', nextId: 'heart' },
          { text: '我會先停手。', nextId: 'farewell' },
        ],
      },
      {
        id: 'heart',
        text: '能取，但只能從蟲母甦醒後剝離。死琥珀是石頭，活琥珀才是心核。',
        options: [
          { text: '古脂樹人為何醒來？', nextId: 'treant' },
          { text: '我準備好了。', nextId: 'farewell' },
        ],
      },
      { id: 'farewell', text: '別把核心帶到火旁。那會讓裡面的年輪以為春天來了。' },
    ],
    guardianHints: {
      creature: '羅恩能提示古脂樹人、石化樹脂魔像與深琥珀蟲母的後段關係。',
      treasure: '他說明深琥珀心核與高階樹脂材料的取得條件。',
      spirit: '他把採集行為與森林年輪、核心生長連成主題收束。',
    },
  },

silverpine_range_claim_surveyor: {
    id: 'silverpine_range_claim_surveyor',
    name: '妮拉',
    alias: 'surveyor',
    title: '山脈入口界樁測量員',
    description:
      '一名穿著厚毛披肩的測量員站在山脈入口界樁旁，手裡拿著刻度繩與除霜鎬。' +
      '她的筆記本夾滿銀白雲母片，每一片都標著採集高度。',
    roomId: 'silverpine_range_entry_claim',
    type: 'quest',
    dialogue: [
      {
        id: 'greeting',
        text: '銀松山脈不缺礦，缺的是活著把礦背下山的人。',
        options: [
          { text: '先採哪裡？', nextId: 'route' },
          { text: '高山礦核在哪？', nextId: 'core' },
          { text: '我會照界樁走。', nextId: 'farewell' },
        ],
      },
      {
        id: 'route',
        text: '前段取銀松雲母和霜草，中段進冰玻洞，後段才去觀星脊。沒有高山鎬頭，別碰高山礦核。',
        options: [
          { text: '高山礦核在哪？', nextId: 'core' },
          { text: '我去銀脈山徑。', nextId: 'farewell' },
        ],
      },
      {
        id: 'core',
        text: '觀星脊北側。若礦洞裡的星光開始呼吸，代表晶龍醒了，所有鎬聲都會傳到牠耳裡。',
        options: [
          { text: '先採哪裡？', nextId: 'route' },
          { text: '我會準備。', nextId: 'farewell' },
        ],
      },
      { id: 'farewell', text: '繩子綁腰，不要綁手。手要留著抓回來。' },
    ],
    guardianHints: {
      creature: '妮拉能提示銀松雪徑獸、冰玻魔像、觀星霜巨人與高山礦核晶龍的路線。',
      treasure: '她說明銀松雲母、霜草束、冰玻礦與觀星銀礦的採集順序。',
      spirit: '她把銀松山脈的 resource 區轉成可追蹤採集高度。',
    },
  },

silverpine_range_miner_factor: {
    id: 'silverpine_range_miner_factor',
    name: '葛蘭',
    alias: 'factor',
    title: '舊礦工營礦材商',
    description:
      '一名老礦材商守著舊礦工營的半塌棚屋，貨架上擺著雲母片、霜草束與幾個備用鎬頭。' +
      '他說每個鎬頭都有故事，多半不是好結局。',
    roomId: 'silverpine_range_old_miner_camp',
    type: 'merchant',
    shopItems: [
      'medium_hp_potion',
      'medium_mp_potion',
      'large_hp_potion',
      'silverpine_mica',
      'frost_herb_bundle',
      'mountain_pick_head',
    ],
    dialogue: [
      {
        id: 'greeting',
        text: '買礦、買草、買鎬頭都行。買雪崩預報不行，山自己也不一定知道。',
        options: [
          { text: '我看看礦材。', nextId: 'shop' },
          { text: '冰玻礦怎麼取？', nextId: 'iceglass' },
          { text: '稍後再來。', nextId: 'farewell' },
        ],
      },
      {
        id: 'shop',
        text: '銀松雲母、霜草束、高山鎬頭和一些藥水。冰玻礦要現採，觀星銀礦我不替死人保管。',
        action: { type: 'shop', data: { shopType: 'silverpine_miner' } },
        options: [
          { text: '冰玻礦怎麼取？', nextId: 'iceglass' },
          { text: '先這樣。', nextId: 'farewell' },
        ],
      },
      {
        id: 'iceglass',
        text: '先把鎬頭除霜，敲三下停一下。冰玻魔像如果跟著你的節奏敲，就代表你該跑了。',
        options: [
          { text: '我看看礦材。', nextId: 'shop' },
          { text: '我會聽回音。', nextId: 'farewell' },
        ],
      },
      { id: 'farewell', text: '下山比上山難。背包留一格給繩索，不要全塞礦。' },
    ],
    guardianHints: {
      creature: '葛蘭能提示雲母崖蜥、冰玻魔像與雪崩雪人的採礦風險。',
      treasure: '他販售銀松雲母、霜草束與高山鎬頭，補足採集商店功能。',
      spirit: '他把舊礦工營變成山脈中段補給與材料節點。',
    },
  },

silverpine_range_herbalist: {
    id: 'silverpine_range_herbalist',
    name: '芙蕾雅',
    alias: 'herbalist',
    title: '霜草岩棚藥師',
    description:
      '一名藥師在霜草岩棚旁用小刷子掃開葉面冰霜，背簍裡裝著霜草束與松針。' +
      '她每摘一束草都會把根旁的雪壓回原位。',
    roomId: 'silverpine_range_frost_herb_ledge',
    type: 'quest',
    dialogue: [
      {
        id: 'greeting',
        text: '霜草不是越多越好。摘光一層，明年整條山徑都會結黑冰。',
        options: [
          { text: '霜草巫女危險嗎？', nextId: 'witch' },
          { text: '雪崩凹地怎麼走？', nextId: 'avalanche' },
          { text: '我會留根。', nextId: 'farewell' },
        ],
      },
      {
        id: 'witch',
        text: '她守草，不守人。你若帶著切根的鎬痕，她會先讓你的腳學會長根。',
        options: [
          { text: '雪崩凹地怎麼走？', nextId: 'avalanche' },
          { text: '我只採葉。', nextId: 'farewell' },
        ],
      },
      {
        id: 'avalanche',
        text: '午後別走，星光亮時再走。雪崩雪人睡得淺，鐵靴踩空一次就會醒。',
        options: [
          { text: '霜草巫女危險嗎？', nextId: 'witch' },
          { text: '我等星光。', nextId: 'farewell' },
        ],
      },
      { id: 'farewell', text: '霜草要用布包，別用手捏，手熱會壞葉脈。' },
    ],
    guardianHints: {
      creature: '芙蕾雅能提示霜草巫女、銀脂松樹人與雪崩雪人的生態。',
      treasure: '她說明霜草束與銀松雲母共生根的採集規矩。',
      spirit: '她把藥草線與山脈地形危險串起來。',
    },
  },

silverpine_range_starwatcher: {
    id: 'silverpine_range_starwatcher',
    name: '歐里安',
    alias: 'starwatcher',
    title: '觀星脊守夜人',
    description:
      '一名守夜人坐在觀星脊的石台邊，身旁架著用觀星銀礦做的簡易星盤。' +
      '他盯著高山礦核方向的藍白光點，像在等某顆星從山裡升起。',
    roomId: 'silverpine_range_starwatch_ridge',
    type: 'quest',
    dialogue: [
      {
        id: 'greeting',
        text: '山頂的星不是都在天上。有些在礦裡，有些在龍的鱗片下面。',
        options: [
          { text: '霜巨人守什麼？', nextId: 'giant' },
          { text: '晶龍怎麼打？', nextId: 'wyrm' },
          { text: '我會看星盤。', nextId: 'farewell' },
        ],
      },
      {
        id: 'giant',
        text: '牠守觀測線。你帶著觀星銀礦經過，牠會覺得你偷走了牠的星。',
        options: [
          { text: '晶龍怎麼打？', nextId: 'wyrm' },
          { text: '我會繞開星盤。', nextId: 'farewell' },
        ],
      },
      {
        id: 'wyrm',
        text: '等反射屏障暗下去再打。高山礦核晶龍每次呼吸都會照亮弱點，但也會照亮你。',
        options: [
          { text: '霜巨人守什麼？', nextId: 'giant' },
          { text: '我準備進礦核。', nextId: 'farewell' },
        ],
      },
      { id: 'farewell', text: '若星盤開始倒轉，別問我原因，先退下山脊。' },
    ],
    guardianHints: {
      creature: '歐里安能提示風切銀鷹、觀星霜巨人與高山礦核晶龍的後段威脅。',
      treasure: '他說明觀星銀礦與高山礦核的用途。',
      spirit: '他把觀星脊、高山礦核與星光礦脈收束成山脈終段。',
    },
  },

saltwind_flats_tide_surveyor: {
    id: 'saltwind_flats_tide_surveyor',
    name: '瑟拉',
    alias: 'surveyor',
    title: '退潮入口樁潮汐測量員',
    description:
      '一名潮汐測量員站在退潮入口樁旁，靴底沾滿白鹽，手裡拿著刻潮尺。' +
      '她每隔幾分鐘就敲一下木樁，確認鹽面下方還是不是硬地。',
    roomId: 'saltwind_flats_tide_gate',
    type: 'quest',
    dialogue: [
      {
        id: 'greeting',
        text: '鹽風灘只有退潮時像路。潮水回來後，路會先忘記你。',
        options: [
          { text: '我該先去哪？', nextId: 'route' },
          { text: '深鹽眼在哪？', nextId: 'eye' },
          { text: '我會看潮線。', nextId: 'farewell' },
        ],
      },
      {
        id: 'route',
        text: '先走白波鹽面與鹽水潮池，再沿霧鐘找退潮石道。別相信海盜隱棚旁的假鐘聲。',
        options: [
          { text: '深鹽眼在哪？', nextId: 'eye' },
          { text: '我先找路標。', nextId: 'farewell' },
        ],
      },
      {
        id: 'eye',
        text: '潮望廢墟北面就是深鹽眼。若霧鐘自己響，守望者已經在數你的腳步。',
        options: [
          { text: '我該先去哪？', nextId: 'route' },
          { text: '我會準備好。', nextId: 'farewell' },
        ],
      },
      { id: 'farewell', text: '腳下鹽殼變軟就退，別等水聲。聽見水聲通常已經晚了。' },
    ],
    guardianHints: {
      creature: '瑟拉能提示鹽晶步蟲、退潮海蛇與深鹽眼守望者的潮線。',
      treasure: '她說明白灘鹽晶、霧鐘舌與深鹽眼珠的路線用途。',
      spirit: '她把鹽風灘的退潮時間轉成可行走的安全節奏。',
    },
  },

saltwind_flats_fisher_mender: {
    id: 'saltwind_flats_fisher_mender',
    name: '博恩',
    alias: 'mender',
    title: '漁夫藏點補網匠',
    description:
      '一名老補網匠躲在漁夫藏點後方，膝上攤著破網與鹽蟹硬殼。' +
      '他身旁的小箱子裡放著藍泥鹽包、乾繩和幾枚霧鐘零件。',
    roomId: 'saltwind_flats_fisher_cache',
    type: 'merchant',
    shopItems: [
      'medium_hp_potion',
      'medium_mp_potion',
      'antidote',
      'flatsalt_crystal',
      'fogbell_clapper',
      'blue_mud_saltpack',
    ],
    dialogue: [
      {
        id: 'greeting',
        text: '想買補給就快點。霧一厚，漁夫藏點就會變成別人的藏點。',
        options: [
          { text: '我看看補給。', nextId: 'shop' },
          { text: '海盜在哪？', nextId: 'pirates' },
          { text: '稍後再來。', nextId: 'farewell' },
        ],
      },
      {
        id: 'shop',
        text: '藥水、解毒劑、白灘鹽晶、霧鐘舌、藍泥鹽包。鹽蟹硬殼要自己去蟹行淺灘敲。',
        action: { type: 'shop', data: { shopType: 'saltwind_fisher' } },
        options: [
          { text: '海盜在哪？', nextId: 'pirates' },
          { text: '先這樣。', nextId: 'farewell' },
        ],
      },
      {
        id: 'pirates',
        text: '漂木哨柱、海盜隱棚、破舟灘都有。他們不搶最重的，只搶你退潮前最需要的。',
        options: [
          { text: '我看看補給。', nextId: 'shop' },
          { text: '我會防著哨兵。', nextId: 'farewell' },
        ],
      },
      { id: 'farewell', text: '藍泥鹽包別吃，是敷的。上次有人吃了，罵得比海盜還大聲。' },
    ],
    guardianHints: {
      creature: '博恩能提示鹽池蟹衛、霧灘海盜哨兵與魚骨濁潮人的補給風險。',
      treasure: '他販售白灘鹽晶、霧鐘舌與藍泥鹽包。',
      spirit: '他把漁夫藏點變成鹽風灘中段的補給節點。',
    },
  },

saltwind_flats_fogbell_keeper: {
    id: 'saltwind_flats_fogbell_keeper',
    name: '露塔',
    alias: 'bellkeeper',
    title: '霧鐘桿守鐘人',
    description:
      '一名守鐘人站在霧鐘桿下，手裡握著備用鐘舌，斗篷被鹽霧浸得發硬。' +
      '她會先聽風，再決定要不要敲鐘。',
    roomId: 'saltwind_flats_fog_bell',
    type: 'quest',
    dialogue: [
      {
        id: 'greeting',
        text: '霧鐘不是給你聽的，是給路聽的。路聽見了，才肯露出來。',
        options: [
          { text: '怎麼分辨假鐘？', nextId: 'falsebell' },
          { text: '守望者怕鐘聲嗎？', nextId: 'keeper' },
          { text: '我會聽回音。', nextId: 'farewell' },
        ],
      },
      {
        id: 'falsebell',
        text: '真鐘三響後有鹽殼回音，假鐘只有霧。海盜哨兵學得像，但他們學不會鹽面回答。',
        options: [
          { text: '守望者怕鐘聲嗎？', nextId: 'keeper' },
          { text: '我會數回音。', nextId: 'farewell' },
        ],
      },
      {
        id: 'keeper',
        text: '不怕。牠就是從太多鐘聲裡醒來的。你帶霧鐘舌去深鹽眼，只是讓自己知道退路在哪。',
        options: [
          { text: '怎麼分辨假鐘？', nextId: 'falsebell' },
          { text: '明白。', nextId: 'farewell' },
        ],
      },
      { id: 'farewell', text: '若第四響自己出現，離開鐘桿。那不是我敲的。' },
    ],
    guardianHints: {
      creature: '露塔能提示玻璃鹽元素、退潮海蛇與深鹽眼守望者的後段節奏。',
      treasure: '她說明霧鐘舌與深鹽眼珠的用途。',
      spirit: '她把霧鐘、退潮石道與深鹽眼串成終段導航規則。',
    },
  },

thornmaze_gate_cartographer: {
    id: 'thornmaze_gate_cartographer',
    name: '薇恩',
    alias: 'cartographer',
    title: '荊棘入口拱測徑師',
    description:
      '一名測徑師站在荊棘入口拱外，把剛畫好的地圖撕成小片重新排列。' +
      '她說迷宮不是地形，而是一種很慢的思考。',
    roomId: 'thornmaze_gate_arch',
    type: 'quest',
    dialogue: [
      {
        id: 'greeting',
        text: '別相信你剛走過的路。荊棘迷宮會記得你的腳步，然後換一種方式回答。',
        options: [
          { text: '我該先走哪裡？', nextId: 'route' },
          { text: '祭壇在哪？', nextId: 'altar' },
          { text: '我會標記路線。', nextId: 'farewell' },
        ],
      },
      {
        id: 'route',
        text: '先看紅刺牆，再找苔鑰孔。聽見低語不要回頭，看到月藤才代表你接近內圈。',
        options: [
          { text: '祭壇在哪？', nextId: 'altar' },
          { text: '我先找苔鑰孔。', nextId: 'farewell' },
        ],
      },
      {
        id: 'altar',
        text: '內祭環北面。若活牆開始同時呼吸，古荊德魯伊祭司已經知道你來了。',
        options: [
          { text: '我該先走哪裡？', nextId: 'route' },
          { text: '我會準備。', nextId: 'farewell' },
        ],
      },
      { id: 'farewell', text: '用紅刺做記號可以，但別把刺插進活牆。牆會記仇。' },
    ],
    guardianHints: {
      creature: '薇恩能提示紅刺棘靈、低語樹牆擬形、活牆巨像與古荊德魯伊祭司的路線。',
      treasure: '她說明紅刺棘針、黑根藤索與月藤環的用途。',
      spirit: '她把會變動的迷宮轉成可追蹤的外圈、中圈、內祭環節奏。',
    },
  },

thornmaze_briarsalve_herbalist: {
    id: 'thornmaze_briarsalve_herbalist',
    name: '瑪芙',
    alias: 'herbalist',
    title: '苔鑰孔荊藥師',
    description:
      '一名荊藥師在苔鑰孔旁的小棚裡調和血脂與苔粉，手指被細刺扎得滿是小傷。' +
      '她的藥瓶都用藤環固定，免得迷宮轉向時滾進牆裡。',
    roomId: 'thornmaze_moss_keyhole',
    type: 'merchant',
    shopItems: [
      'large_hp_potion',
      'large_mp_potion',
      'antidote',
      'redthorn_spine',
      'bloodsap_phial',
      'moonvine_loop',
    ],
    dialogue: [
      {
        id: 'greeting',
        text: '要買藥就快。這棚子昨天還在南邊，明天可能在牆裡。',
        options: [
          { text: '我看看藥材。', nextId: 'shop' },
          { text: '毒花床怎麼過？', nextId: 'poison' },
          { text: '稍後再來。', nextId: 'farewell' },
        ],
      },
      {
        id: 'shop',
        text: '藥水、解毒劑、紅刺棘針、血脂小瓶、月藤環。黑根藤索我不賣，那東西會自己找買主。',
        action: { type: 'shop', data: { shopType: 'thornmaze_herbalist' } },
        options: [
          { text: '毒花床怎麼過？', nextId: 'poison' },
          { text: '先這樣。', nextId: 'farewell' },
        ],
      },
      {
        id: 'poison',
        text: '別聞花香，別踩濕土。毒花床母株喜歡讓人以為自己還在原地，其實已經走進根裡。',
        options: [
          { text: '我看看藥材。', nextId: 'shop' },
          { text: '我會備解毒劑。', nextId: 'farewell' },
        ],
      },
      { id: 'farewell', text: '血脂只塗一層。塗三層的人，現在還在那邊長葉子。' },
    ],
    guardianHints: {
      creature: '瑪芙能提示毒花床母株、蛛刺編網者與黑根絞藤的毒性。',
      treasure: '她販售紅刺棘針、血脂小瓶與月藤環。',
      spirit: '她把荊棘迷宮的植物傷害轉成可回訪補給節點。',
    },
  },

thornmaze_old_druid_echo: {
    id: 'thornmaze_old_druid_echo',
    name: '歐塔',
    alias: 'echo',
    title: '德魯伊刻石殘響',
    description:
      '一道老德魯伊的半透明殘響停在德魯伊刻石前，聲音像從樹洞裡傳出。' +
      '他每說一句話，刻石上的苔紋就會重新排列。',
    roomId: 'thornmaze_druid_marker',
    type: 'quest',
    dialogue: [
      {
        id: 'greeting',
        text: '迷宮本來是守護，不是牢籠。後來有人要求它永遠不要打開。',
        options: [
          { text: '誰關上了迷宮？', nextId: 'closed' },
          { text: '祭壇種是什麼？', nextId: 'seed' },
          { text: '我會小心。', nextId: 'farewell' },
        ],
      },
      {
        id: 'closed',
        text: '古荊祭司。他用自己的名字餵給活牆，從此牆只記得閉合，不記得放行。',
        options: [
          { text: '祭壇種是什麼？', nextId: 'seed' },
          { text: '我去內祭環。', nextId: 'farewell' },
        ],
      },
      {
        id: 'seed',
        text: '祭壇種不是鑰匙，是承諾。拿走它，迷宮會短暫想起自己也能停止生長。',
        options: [
          { text: '誰關上了迷宮？', nextId: 'closed' },
          { text: '我明白。', nextId: 'farewell' },
        ],
      },
      { id: 'farewell', text: '若牆上出現你的名字，別讀完。讀完就會留下。' },
    ],
    guardianHints: {
      creature: '歐塔能提示活牆巨像、歪斜圖騰咒師與古荊德魯伊祭司。',
      treasure: '他說明月藤環、黑根藤索與德魯伊祭壇種的核心關係。',
      spirit: '他把迷宮閉合原因與古代德魯伊祭壇連接起來。',
    },
  },

ember_march_ashgate_scout: {
    id: 'ember_march_ashgate_scout',
    name: '莉珊',
    alias: 'scout',
    title: '灰燼入口門邊境斥候',
    description:
      '一名邊境斥候蹲在灰燼入口門旁，用燒黑的短刀撥開灰面足跡。' +
      '她的披風邊緣被火星咬出小洞，卻仍整齊別著撤退路線針。',
    roomId: 'ember_march_ash_gate',
    type: 'quest',
    dialogue: [
      {
        id: 'greeting',
        text: '灰面今天比昨天熱。別踩亮線，那不是路，是下面的火在找出口。',
        options: [
          { text: '我該先查哪裡？', nextId: 'route' },
          { text: '心火缺口在哪？', nextId: 'breach' },
          { text: '我會看灰面。', nextId: 'farewell' },
        ],
      },
      {
        id: 'route',
        text: '焦炭路看腳印，煙溝看煙向，倒旗坡看旗布。旗子倒向熱風時，表示邊爐或亞龍醒了。',
        options: [
          { text: '心火缺口在哪？', nextId: 'breach' },
          { text: '我先去焦炭路。', nextId: 'farewell' },
        ],
      },
      {
        id: 'breach',
        text: '邊堡外殼東面。若龍印脊開始吹乾熱風，心火缺口亞龍已經在巡火線。',
        options: [
          { text: '我該先查哪裡？', nextId: 'route' },
          { text: '我會準備。', nextId: 'farewell' },
        ],
      },
      { id: 'farewell', text: '灰燼會蓋住屍體，但蓋不住新腳印。走慢一點，活久一點。' },
    ],
    guardianHints: {
      creature: '莉珊能提示灰路火星群、煙溝伏行者、焦旗掠兵與心火缺口亞龍的路線。',
      treasure: '她說明燼玻碎片、灰線旗布與心火邊境印的用途。',
      spirit: '她把餘燼邊境整理成入口、戰營、鍛台、邊堡與心火缺口的推進節奏。',
    },
  },

ember_march_cinder_apothecary: {
    id: 'ember_march_cinder_apothecary',
    name: '寇恩',
    alias: 'apothecary',
    title: '餘燼鍛台燒傷藥販',
    description:
      '一名藥販在餘燼鍛台旁支起耐火布棚，桌上擺著封蠟藥罐與渣鐵量匙。' +
      '他每賣出一瓶藥，就把瓶口重新浸進冷灰裡測溫。',
    roomId: 'ember_march_ember_forge',
    type: 'merchant',
    shopItems: [
      'large_hp_potion',
      'large_mp_potion',
      'antidote',
      'slag_iron_clinker',
      'cinderbite_salve',
      'emberglass_shard',
    ],
    dialogue: [
      {
        id: 'greeting',
        text: '要藥、要熔塊、要能保住腳底的東西，我都有。要保證？那得問火山。',
        options: [
          { text: '我看看貨。', nextId: 'shop' },
          { text: '鍛台為什麼還熱？', nextId: 'forge' },
          { text: '稍後再來。', nextId: 'farewell' },
        ],
      },
      {
        id: 'shop',
        text: '大型藥水、解毒劑、渣鐵熔塊、燼咬藥膏、燼玻碎片。灰線旗布我不賣，那通常還連著麻煩。',
        action: { type: 'shop', data: { shopType: 'ember_march_apothecary' } },
        options: [
          { text: '鍛台為什麼還熱？', nextId: 'forge' },
          { text: '先這樣。', nextId: 'farewell' },
        ],
      },
      {
        id: 'forge',
        text: '邊爐熔衛還在執行戰時命令。牠把所有靠近鍛台的人都當成偷軍需的敵兵。',
        options: [
          { text: '我看看貨。', nextId: 'shop' },
          { text: '我會避開爐口。', nextId: 'farewell' },
        ],
      },
      { id: 'farewell', text: '藥膏薄薄一層就好。塗太厚，灰會黏住你。' },
    ],
    guardianHints: {
      creature: '寇恩能提示玻灰蜥、熔裂燼蟲、渣甲巨像與邊爐熔衛。',
      treasure: '他販售渣鐵熔塊、燼咬藥膏與燼玻碎片。',
      spirit: '他讓餘燼鍛台成為火線補給與風險說明節點。',
    },
  },

ember_march_banner_marshal_echo: {
    id: 'ember_march_banner_marshal_echo',
    name: '奧瑞克',
    alias: 'marshal',
    title: '倒旗坡邊境元帥殘響',
    description:
      '一道邊境元帥的殘響站在倒旗坡斷旗前，盔甲內只有灰燼與微弱火光。' +
      '他仍用軍禮回應每一次熱風，像還在等待撤退命令被承認。',
    roomId: 'ember_march_fallen_banner',
    type: 'quest',
    dialogue: [
      {
        id: 'greeting',
        text: '撤退不是潰敗。沒有把消息帶回去，才是潰敗。',
        options: [
          { text: '當年發生什麼？', nextId: 'history' },
          { text: '心火邊境印是什麼？', nextId: 'seal' },
          { text: '我會帶回紀錄。', nextId: 'farewell' },
        ],
      },
      {
        id: 'history',
        text: '火山先裂，敵軍後到。邊堡封門太晚，鍛台又把火線餵給了龍印脊。',
        options: [
          { text: '心火邊境印是什麼？', nextId: 'seal' },
          { text: '我去邊堡外殼。', nextId: 'farewell' },
        ],
      },
      {
        id: 'seal',
        text: '那是火線的核心證物。拿到它，就能證明這裡不是單純失守，而是火山、軍令與龍印一起失控。',
        options: [
          { text: '當年發生什麼？', nextId: 'history' },
          { text: '我會處理心火缺口。', nextId: 'farewell' },
        ],
      },
      { id: 'farewell', text: '若旗布重新燃起，不要敬禮，先找掩體。' },
    ],
    guardianHints: {
      creature: '奧瑞克能提示焦旗掠兵、骨窯灰衛、邊爐熔衛與心火缺口亞龍。',
      treasure: '他說明灰線旗布、渣鐵熔塊與心火邊境印的戰線意義。',
      spirit: '他把餘燼邊境的災害從自然火山提升為軍事失控與撤退失敗的故事。',
    },
  },

reef_of_bones_tide_chartist: {
    id: 'reef_of_bones_tide_chartist',
    name: '賽芮',
    alias: 'chartist',
    title: '白骨潮門退潮測繪師',
    description:
      '一名測繪師站在白骨潮門前，把潮線、船名與巨獸肋骨位置畫在防水皮紙上。' +
      '她的靴底綁著骨釘，避免冷潮突然回湧時被拖下淺灘。',
    roomId: 'reef_of_bones_tide_gate',
    type: 'quest',
    dialogue: [
      {
        id: 'greeting',
        text: '白骨礁只有退潮時像路。潮聲一變，所有路都會重新變回海。',
        options: [
          { text: '我該先查哪裡？', nextId: 'route' },
          { text: '寶庫怎麼找？', nextId: 'vault' },
          { text: '我會看潮線。', nextId: 'farewell' },
        ],
      },
      {
        id: 'route',
        text: '先沿肋骨淺灘到沉船船首，再聽礁鐘柱。黑珊瑚切口不是捷徑，那裡會吃掉方向感。',
        options: [
          { text: '寶庫怎麼找？', nextId: 'vault' },
          { text: '我先去肋骨淺灘。', nextId: 'farewell' },
        ],
      },
      {
        id: 'vault',
        text: '溺亡寶庫在斷桅林東面，但你需要溺寶殘圖和礁鐘方向。若霜浪洞亮起，骨龍也醒了。',
        options: [
          { text: '我該先查哪裡？', nextId: 'route' },
          { text: '我會留意霜浪洞。', nextId: 'farewell' },
        ],
      },
      { id: 'farewell', text: '別跟著亮水走。真正安全的潮路通常比較難看。' },
    ],
    guardianHints: {
      creature: '賽芮能提示肋灘骸兵、冷潮溺者、黑珊瑚潛伏者與溺亡寶庫船長的路線。',
      treasure: '她說明礁骨裂片、礁鐘舌片與溺寶殘圖的用途。',
      spirit: '她把白骨礁拆成退潮路線、船骸入口、黑珊瑚危險區與寶庫核心。',
    },
  },

reef_of_bones_coral_scrimshander: {
    id: 'reef_of_bones_coral_scrimshander',
    name: '洛克',
    alias: 'scrimshander',
    title: '黑珊瑚切口骨雕商',
    description:
      '一名骨雕商在黑珊瑚切口外擺著小攤，刀具插在鯨骨盒裡，旁邊掛著退潮鈴。' +
      '他販賣能在冷潮裡保命的藥物，也收購不會低語的黑珊瑚。',
    roomId: 'reef_of_bones_black_coral_cut',
    type: 'merchant',
    shopItems: [
      'large_hp_potion',
      'large_mp_potion',
      'antidote',
      'reefbone_splinter',
      'black_coral_hook',
      'tidebell_clapper',
    ],
    dialogue: [
      {
        id: 'greeting',
        text: '買東西快一點。這片礁的價格會跟潮水一起漲，命也一樣。',
        options: [
          { text: '我看看貨。', nextId: 'shop' },
          { text: '黑珊瑚危險嗎？', nextId: 'coral' },
          { text: '稍後再來。', nextId: 'farewell' },
        ],
      },
      {
        id: 'shop',
        text: '藥水、解毒劑、礁骨裂片、黑珊瑚鉤、礁鐘舌片。溺寶殘圖不賣，賣那個會讓死人找上門。',
        action: { type: 'shop', data: { shopType: 'reef_of_bones_scrimshander' } },
        options: [
          { text: '黑珊瑚危險嗎？', nextId: 'coral' },
          { text: '先這樣。', nextId: 'farewell' },
        ],
      },
      {
        id: 'coral',
        text: '黑珊瑚會記得被誰折下。若鉤子自己往船艙方向轉，代表那塊珊瑚還連著潛伏者。',
        options: [
          { text: '我看看貨。', nextId: 'shop' },
          { text: '我會小心。', nextId: 'farewell' },
        ],
      },
      { id: 'farewell', text: '聽見礁鐘只響一下就快跑。響兩下通常已經太晚。' },
    ],
    guardianHints: {
      creature: '洛克能提示冰藻縛手、黑珊瑚潛伏者、幽錨拖行者與鯨骨守衛。',
      treasure: '他販售礁骨裂片、黑珊瑚鉤與礁鐘舌片。',
      spirit: '他讓黑珊瑚切口成為補給、鑑定與風險提示節點。',
    },
  },

reef_of_bones_captain_widow: {
    id: 'reef_of_bones_captain_widow',
    name: '米蕾雅',
    alias: 'widow',
    title: '船長墓守墓寡婦',
    description:
      '一名披著鹽白黑紗的女人坐在船長墓旁，手中縫補一面永遠濕透的船旗。' +
      '她不像活人，也不像亡靈；每次潮水回頭，她的影子都會少一段。',
    roomId: 'reef_of_bones_captain_grave',
    type: 'quest',
    dialogue: [
      {
        id: 'greeting',
        text: '他說只是下船取寶，很快回來。後來整片礁都開始替他守門。',
        options: [
          { text: '船長在哪？', nextId: 'captain' },
          { text: '骨龍又是什麼？', nextId: 'drake' },
          { text: '我會帶回船長印。', nextId: 'farewell' },
        ],
      },
      {
        id: 'captain',
        text: '溺亡寶庫。若你見到他，別提歸航。他已經把回家的方向抵給寶藏了。',
        options: [
          { text: '骨龍又是什麼？', nextId: 'drake' },
          { text: '我去寶庫。', nextId: 'farewell' },
        ],
      },
      {
        id: 'drake',
        text: '那不是他的寵物，是礁本身。盜墓者越多，牠的骨翼越完整。',
        options: [
          { text: '船長在哪？', nextId: 'captain' },
          { text: '我會避開霜浪。', nextId: 'farewell' },
        ],
      },
      { id: 'farewell', text: '若你拿到寶庫船長印，別戴在手上。它會把你也算進船員名冊。' },
    ],
    guardianHints: {
      creature: '米蕾雅能提示礁鐘潮祭司、巫光礁賢者、溺亡寶庫船長與霜浪骨龍。',
      treasure: '她說明溺寶殘圖與寶庫船長印背後的守財誓約。',
      spirit: '她把白骨礁從沉船財寶區連到不死海盜、歸航失敗與巨獸骨礁的核心故事。',
    },
  },
};
