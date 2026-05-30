import type { NpcDef } from '@game/shared';

export const NPCS_PART_010: Record<string, NpcDef> = {
ashfall_monastery_bell_caretaker: {
    id: 'ashfall_monastery_bell_caretaker',
    name: '歐瑞克',
    alias: 'caretaker',
    title: '灰鐘看守',
    description:
      '一名灰袍老人守在鐘庭裂鐘旁，手裡握著不再完整的鐘槌。' +
      '他每聽一次鐘聲都會數拍，像是在確認修道院還有多少地方沒有徹底墮落。',
    roomId: 'ashfall_monastery_bell_court',
    type: 'quest',
    dialogue: [
      {
        id: 'greeting',
        text: '鐘聲若連響三下，表示灰門還記得祈禱；若第四下跟著來，那就是暗鐘收魂者在點名。',
        options: [
          { text: '我該先找什麼？', nextId: 'first' },
          { text: '暗鐘在哪？', nextId: 'belfry' },
          { text: '我會聽鐘聲。', nextId: 'farewell' },
        ],
      },
      {
        id: 'first',
        text: '灰門鑰片、焦黑經頁、斷香爐鏈節。這三樣能指出外典、香爐廳與聖物庫的儀式線。',
        options: [
          { text: '暗鐘在哪？', nextId: 'belfry' },
          { text: '我去找證物。', nextId: 'farewell' },
        ],
      },
      {
        id: 'belfry',
        text: '聖者碎像後方。若你聽見鐘聲卻看不見鐘，就先離開陰影。',
        options: [
          { text: '我該先找什麼？', nextId: 'first' },
          { text: '明白。', nextId: 'farewell' },
        ],
      },
      { id: 'farewell', text: '不要跟著第四聲走。第四聲從不帶人回來。' },
    ],
    guardianHints: {
      creature: '歐瑞克提示餘燼鐘魔、灰衣失聲修士與暗鐘收魂者。',
      treasure: '他說明灰門鑰片、焦黑經頁與斷香爐鏈節的線索價值。',
      spirit: '灰鐘看守把鐘庭從普通入口變成整座修道院的警訊節點。',
    },
  },

ashfall_monastery_relic_sister: {
    id: 'ashfall_monastery_relic_sister',
    name: '瑟拉菲',
    alias: 'sister',
    title: '聖物庫倖存修女',
    description:
      '一名修女坐在聖物庫外的破箱上，白手套已被餘火油染成金褐色。' +
      '她把可用聖物和危險聖物分開，動作冷靜得像每一次呼吸都經過訓練。',
    roomId: 'ashfall_monastery_reliquary_vault',
    type: 'merchant',
    shopItems: [
      'large_hp_potion',
      'large_mp_potion',
      'ember_reliquary_oil',
      'censer_chain_link',
      'soot_scripture_leaf',
    ],
    dialogue: [
      {
        id: 'greeting',
        text: '能用的聖物在左箱，會低語的在右箱。你要買左箱，還是回頭處理右箱的原因？',
        options: [
          { text: '我看看補給。', nextId: 'shop' },
          { text: '聖物庫怎麼失守？', nextId: 'vault' },
          { text: '我先檢查四周。', nextId: 'farewell' },
        ],
      },
      {
        id: 'shop',
        text: '藥水、餘火油、鏈節與經頁。封印碎片不賣，那種東西若能買到，代表你買的是陷阱。',
        action: { type: 'shop', data: { shopType: 'ashfall_relic_supply' } },
        options: [
          { text: '聖物庫怎麼失守？', nextId: 'vault' },
          { text: '先這樣。', nextId: 'farewell' },
        ],
      },
      {
        id: 'vault',
        text: '哨衛沒有背叛，它只是繼續守門。問題是門後的命令換了主人。',
        options: [
          { text: '我看看補給。', nextId: 'shop' },
          { text: '我去處理哨衛。', nextId: 'farewell' },
        ],
      },
      { id: 'farewell', text: '餘火油只點在傷口旁，不要點在經頁旁。' },
    ],
    guardianHints: {
      creature: '賽菈提示聖物餘燼哨衛、雙相赦罪司與灰燼墮院長。',
      treasure: '她販售聖物餘火油、斷香爐鏈節與焦黑經頁。',
      spirit: '她讓聖物庫成為補給、封印判讀與儀式線索節點。',
    },
  },

ashfall_monastery_crypt_mapper: {
    id: 'ashfall_monastery_crypt_mapper',
    name: '馬洛',
    alias: 'mapper',
    title: '墓階測繪員',
    description:
      '一名測繪員把繩結固定在地下墓階欄杆上，地圖邊緣全是灰手印。' +
      '他不願進入骨灰藏室第二次，但仍能準確指出每一個回聲來自哪條墓道。',
    roomId: 'ashfall_monastery_crypt_stairs',
    type: 'quest',
    dialogue: [
      {
        id: 'greeting',
        text: '墓階往下數七級會聽見骨灰罈回聲。若回聲比你慢半拍，守骨者已醒。',
        options: [
          { text: '骨灰藏室有什麼？', nextId: 'ossuary' },
          { text: '怎麼到聖物庫？', nextId: 'route' },
          { text: '我會照你的繩結走。', nextId: 'farewell' },
        ],
      },
      {
        id: 'ossuary',
        text: '聖骨、裂封印、還有不願被搬動的守骨者。別把灰罈打碎，碎了它們就不只是一個敵人。',
        options: [
          { text: '怎麼到聖物庫？', nextId: 'route' },
          { text: '我會小心。', nextId: 'farewell' },
        ],
      },
      {
        id: 'route',
        text: '煙霧步廊北上，過墓階，再往東。若看到乾淨火光，就是聖物庫哨衛在等你。',
        options: [
          { text: '骨灰藏室有什麼？', nextId: 'ossuary' },
          { text: '我出發。', nextId: 'farewell' },
        ],
      },
      { id: 'farewell', text: '繩結若突然變暖，代表你離餘火太近。' },
    ],
    guardianHints: {
      creature: '馬洛提示骨灰藏室守骨者、煙香怨靈與聖物餘燼哨衛。',
      treasure: '他指出裂聖所封印可能出現在墓階與骨灰藏室。',
      spirit: '測繪員讓地下路線、回聲與封印碎片形成可探索脈絡。',
    },
  },

ashfall_monastery_absolution_witness: {
    id: 'ashfall_monastery_absolution_witness',
    name: '艾芙琳',
    alias: 'witness',
    title: '雙相祭壇見證者',
    description:
      '一名見證者站在雙相祭壇陰影邊界，左手戴白手套，右手纏黑布。' +
      '她不碰祭壇，只記錄哪些祈禱還像祈禱，哪些已變成命令。',
    roomId: 'ashfall_monastery_dual_altar',
    type: 'quest',
    dialogue: [
      {
        id: 'greeting',
        text: '這裡的赦罪一半是聖光，一半是灰。別只相信亮的一邊，也別只害怕暗的一邊。',
        options: [
          { text: '赦罪司怎麼打？', nextId: 'absolver' },
          { text: '院長在哪？', nextId: 'abbot' },
          { text: '我會看清楚。', nextId: 'farewell' },
        ],
      },
      {
        id: 'absolver',
        text: '牠治療、標記、反射。看到祭壇亮成鏡面時停手，否則你的虔誠會反過來刺穿自己。',
        options: [
          { text: '院長在哪？', nextId: 'abbot' },
          { text: '我會等屏障退去。', nextId: 'farewell' },
        ],
      },
      {
        id: 'abbot',
        text: '灰燼聖所。若你帶回杖首，就證明這場火終於有了主人，也有了終點。',
        options: [
          { text: '赦罪司怎麼打？', nextId: 'absolver' },
          { text: '我去聖所。', nextId: 'farewell' },
        ],
      },
      { id: 'farewell', text: '別在反射光裡低頭認罪。那不是告解，是陷阱。' },
    ],
    guardianHints: {
      creature: '艾芙琳提示雙相赦罪司與灰燼墮院長的反射屏障。',
      treasure: '她說明裂聖所封印與灰院長杖首的任務用途。',
      spirit: '她把修道院最深處的光暗雙相與院長儀式連接起來。',
    },
  },

frostbite_pass_caravan_scout: {
    id: 'frostbite_pass_caravan_scout',
    name: '妮雅',
    alias: 'scout',
    title: '失商路線斥候',
    description: '一名斥候站在商隊路標旁，雪帽上綁著紅布條，手中地圖被凍得像薄木片。',
    roomId: 'frostbite_pass_caravan_marker',
    type: 'quest',
    dialogue: [
      {
        id: 'greeting',
        text: '商隊不是走丟，是被什麼東西一步步逼離路標。找到失商貨印，我就能確認是哪一支隊伍。',
        options: [
          { text: '失商在哪？', nextId: 'caravan' },
          { text: '雪怪呢？', nextId: 'yeti' },
          { text: '我會沿路標走。', nextId: 'farewell' },
        ],
      },
      { id: 'caravan', text: '埋雪貨車、骨橇路、失商藏點。看到貨箱被整齊掀開，就不是雪崩。', options: [{ text: '雪怪呢？', nextId: 'yeti' }, { text: '我去找貨印。', nextId: 'farewell' }] },
      { id: 'yeti', text: '霜疤雪怪討厭火光，牠會先砸補給，再慢慢追人。', options: [{ text: '失商在哪？', nextId: 'caravan' }, { text: '我會小心火光。', nextId: 'farewell' }] },
      { id: 'farewell', text: '暴風裡別相信直線，直線通常是懸崖。' },
    ],
    guardianHints: {
      creature: '妮雅提示埋雪商隊怨影、霜疤雪怪與白霧雪狼群。',
      treasure: '她需要失商貨印來辨認失蹤商隊。',
      spirit: '斥候把霜咬隘口的商隊失蹤事件建立成入口任務線。',
    },
  },

frostbite_pass_coldfire_quartermaster: {
    id: 'frostbite_pass_coldfire_quartermaster',
    name: '霍爾姆',
    alias: 'quartermaster',
    title: '冷火營補給官',
    description: '一名補給官把藥膏罐埋在溫灰中保溫，帳篷外掛滿防風繩與裂冰釘。',
    roomId: 'frostbite_pass_coldfire_camp',
    type: 'merchant',
    shopItems: ['large_hp_potion', 'large_mp_potion', 'frostbite_salve', 'blue_ice_core'],
    dialogue: [
      {
        id: 'greeting',
        text: '要藥膏、熱繩、藍冰核心？快買。冷火只保得住營地，保不住你在山脊上的命。',
        options: [
          { text: '我看看補給。', nextId: 'shop' },
          { text: '高處有什麼？', nextId: 'ridge' },
          { text: '先不買。', nextId: 'farewell' },
        ],
      },
      { id: 'shop', text: '霜咬藥膏能救凍傷，藍冰核心能穩住附魔。極北封門印不賣，那得自己過封門。', action: { type: 'shop', data: { shopType: 'frostbite_coldfire_supply' } }, options: [{ text: '高處有什麼？', nextId: 'ridge' }, { text: '先這樣。', nextId: 'farewell' }] },
      { id: 'ridge', text: '霜巨人足跡往北，龍息冰棚往東。看到冰面像在呼吸，代表幼龍就在附近。', options: [{ text: '我看看補給。', nextId: 'shop' }, { text: '我會繫好防風繩。', nextId: 'farewell' }] },
      { id: 'farewell', text: '藥膏別省。少塗一層，就多掉一根手指。' },
    ],
    guardianHints: {
      creature: '霍爾姆提示晶松伏行者、霜巨開路者與龍息冰棚幼龍。',
      treasure: '他販售霜咬藥膏與藍冰核心。',
      spirit: '冷火營成為隘口中段補給與高處風險說明點。',
    },
  },

frostbite_pass_polar_gate_warden: {
    id: 'frostbite_pass_polar_gate_warden',
    name: '艾絲特',
    alias: 'warden',
    title: '極北封門守望者',
    description: '一名守望者靠在極北封門旁，眉睫結霜，披風內側縫著舊商隊名牌。',
    roomId: 'frostbite_pass_polar_seal_gate',
    type: 'quest',
    dialogue: [
      {
        id: 'greeting',
        text: '封門巨像不是阻止你前進，而是確認你是否還能活著回頭。',
        options: [
          { text: '巨像怎麼打？', nextId: 'colossus' },
          { text: '封門印有什麼用？', nextId: 'sigil' },
          { text: '我會觀察風暴。', nextId: 'farewell' },
        ],
      },
      { id: 'colossus', text: '反射冰光亮起時停手。它碎裂前會把整座門前冰面一起震開。', options: [{ text: '封門印有什麼用？', nextId: 'sigil' }, { text: '我會等反射退去。', nextId: 'farewell' }] },
      { id: 'sigil', text: '極北封門印證明你通過了霜咬隘口，不只是被暴風推到門前。', options: [{ text: '巨像怎麼打？', nextId: 'colossus' }, { text: '我去試試。', nextId: 'farewell' }] },
      { id: 'farewell', text: '門前若突然安靜，別高興，那是暴風在吸氣。' },
    ],
    guardianHints: {
      creature: '艾絲特提示極北封門巨像的反射與碎裂衝擊。',
      treasure: '她說明極北封門印是霜咬隘口終點證物。',
      spirit: '守望者把封門 Boss 與商隊失蹤線收束到極北邊界。',
    },
  },

necropolis_gate_death_roll_scribe: {
    id: 'necropolis_gate_death_roll_scribe',
    name: '卡爾文',
    alias: 'scribe',
    title: '死亡名冊抄錄員',
    description: '一名抄錄員坐在死亡名冊庫外，筆尖沒有墨水，卻能在紙上留下黑色凹痕。',
    roomId: 'necropolis_gate_death_roll_archive',
    type: 'quest',
    dialogue: [
      {
        id: 'greeting',
        text: '外門不是門，是名冊。名字在冊上的人走進去，名字不在冊上的人會被寫上去。',
        options: [
          { text: '我該找什麼？', nextId: 'proof' },
          { text: '門檻守將在哪？', nextId: 'gatekeeper' },
          { text: '我會留意名冊。', nextId: 'farewell' },
        ],
      },
      { id: 'proof', text: '黑門碎楔、墓旗殘布、魂井沉渣。三樣湊齊，就知道外門正在徵召誰。', options: [{ text: '門檻守將在哪？', nextId: 'gatekeeper' }, { text: '我去找證物。', nextId: 'farewell' }] },
      { id: 'gatekeeper', text: '死都門檻。牠不接受口頭通行，只接受能從牠手中搶下的入城令。', options: [{ text: '我該找什麼？', nextId: 'proof' }, { text: '我會前往門檻。', nextId: 'farewell' }] },
      { id: 'farewell', text: '別在名冊上找自己的名字。找到時通常太晚。' },
    ],
    guardianHints: {
      creature: '卡爾文提示黑門怨衛、魂井諭亡者、內閘亡軍元帥與死都門檻守將。',
      treasure: '他說明黑門碎楔、墓旗殘布、魂井沉渣與死都入城令。',
      spirit: '抄錄員把死都外門的軍陣與名冊徵召主題說清楚。',
    },
  },

necropolis_gate_crypt_broker: {
    id: 'necropolis_gate_crypt_broker',
    name: '薇拉',
    alias: 'broker',
    title: '墓市廊臨時商人',
    description: '一名臨時商人站在墓市廊燈下，腰包裡裝的是骨籌，袖口卻藏著活人的護符瓶。',
    roomId: 'necropolis_gate_crypt_market',
    type: 'merchant',
    shopItems: ['large_hp_potion', 'large_mp_potion', 'charnel_ward_phial', 'grave_banner_cloth', 'crypt_market_token'],
    dialogue: [
      {
        id: 'greeting',
        text: '墓市只收骨籌，但我還收活人的金幣。趁我還記得你有脈搏，快買。',
        options: [
          { text: '我看看補給。', nextId: 'shop' },
          { text: '墓市安全嗎？', nextId: 'market' },
          { text: '先不了。', nextId: 'farewell' },
        ],
      },
      { id: 'shop', text: '藥水、護符瓶、墓旗殘布、墓市骨籌。死都入城令不在市場上流通，別信任何報價。', action: { type: 'shop', data: { shopType: 'necropolis_crypt_supply' } }, options: [{ text: '墓市安全嗎？', nextId: 'market' }, { text: '先這樣。', nextId: 'farewell' }] },
      { id: 'market', text: '安全到足以讓你付錢，不安全到讓你討價還價。看見骨券商笑，就把手從錢袋拿開。', options: [{ text: '我看看補給。', nextId: 'shop' }, { text: '我會快點離開。', nextId: 'farewell' }] },
      { id: 'farewell', text: '活人腳步聲在墓市很貴，別浪費。' },
    ],
    guardianHints: {
      creature: '薇拉提示墓市骨券商、疫香爐抬手與虛裂歸亡者。',
      treasure: '她販售屍橋護符瓶、墓旗殘布與墓市骨籌。',
      spirit: '墓市商人讓死都外門補給點具有風險與黑市感。',
    },
  },

necropolis_gate_threshold_witness: {
    id: 'necropolis_gate_threshold_witness',
    name: '奧德',
    alias: 'witness',
    title: '死都門檻見證者',
    description: '一名披著灰黑外袍的見證者站在死都門檻旁，靴尖永遠沒有越過最後一道裂縫。',
    roomId: 'necropolis_gate_dead_city_threshold',
    type: 'quest',
    dialogue: [
      {
        id: 'greeting',
        text: '門檻守將不問你為何而來，只問你是否還能離開。反射黑光亮起時，別把勇氣誤當答案。',
        options: [
          { text: '守將怎麼打？', nextId: 'fight' },
          { text: '入城令代表什麼？', nextId: 'writ' },
          { text: '我會看清黑光。', nextId: 'farewell' },
        ],
      },
      { id: 'fight', text: '死亡印記先到，吸血隨後，反射最後。活下來的人才有資格談進城。', options: [{ text: '入城令代表什麼？', nextId: 'writ' }, { text: '我會等屏障退去。', nextId: 'farewell' }] },
      { id: 'writ', text: '死都入城令不是邀請，是你從外門軍法中撕出的缺口。拿到它，內城才會承認你存在。', options: [{ text: '守將怎麼打？', nextId: 'fight' }, { text: '我明白。', nextId: 'farewell' }] },
      { id: 'farewell', text: '跨過門檻前，先確定你的影子還跟著你。' },
    ],
    guardianHints: {
      creature: '奧德提示死都門檻守將的死亡印記、吸血與反射屏障。',
      treasure: '他說明死都入城令是外門終點證物。',
      spirit: '見證者把外門終點與進入死者之城的資格連起來。',
    },
  },

sunspire_trial_archivist: {
    id: 'sunspire_trial_archivist',
    name: '伊萊恩',
    alias: 'archivist',
    title: '日耀試煉書記',
    description: '一名白袍書記站在燃書庫外，手中冊頁沒有燒焦，反而亮得像薄金。',
    roomId: 'sunspire_burning_archive',
    type: 'quest',
    dialogue: [
      {
        id: 'greeting',
        text: '尖塔不獎賞盲信。日試蠟印記錄你是否通過試煉，日冠聖印記錄你是否理解試煉。',
        options: [
          { text: '我該收集什麼？', nextId: 'proof' },
          { text: '日冠核心在哪？', nextId: 'crown' },
          { text: '我會完成試煉。', nextId: 'farewell' },
        ],
      },
      { id: 'proof', text: '日鏡碎片、聖歌金箔、日試蠟印。它們會指出光線、禮拜與武力三條試煉是否失衡。', options: [{ text: '日冠核心在哪？', nextId: 'crown' }, { text: '我去找證物。', nextId: 'farewell' }] },
      { id: 'crown', text: '塔頂前室之後。若你在戰神印記前只看見自己的影子，就還沒準備好。', options: [{ text: '我該收集什麼？', nextId: 'proof' }, { text: '我會先完成中層。', nextId: 'farewell' }] },
      { id: 'farewell', text: '別直視聚光鏡太久。尖塔會把你的遲疑照得很清楚。' },
    ],
    guardianHints: {
      creature: '伊萊恩提示聚光鏡守、日火唱詩者、戰神印守與日冠顯聖者。',
      treasure: '她說明日鏡碎片、聖歌金箔、日試蠟印與日冠聖印。',
      spirit: '書記把日耀尖塔的試煉證物與塔頂目標連接起來。',
    },
  },

sunspire_sunfire_keeper: {
    id: 'sunspire_sunfire_keeper',
    name: '索拉',
    alias: 'keeper',
    title: '日火補給守',
    description: '一名守燈人坐在日火唱詩席旁，手套上沾著金色蠟屑與燈油香。',
    roomId: 'sunspire_sunfire_choir',
    type: 'merchant',
    shopItems: ['large_hp_potion', 'large_mp_potion', 'sunfire_vial', 'hymn_gold_leaf', 'solar_trial_wax'],
    dialogue: [
      {
        id: 'greeting',
        text: '日火可以照路，也可以把你照成灰。要補給就快些，唱詩者下一段高音快到了。',
        options: [
          { text: '我看看補給。', nextId: 'shop' },
          { text: '灰影邊緣怎麼回事？', nextId: 'shadow' },
          { text: '稍後再來。', nextId: 'farewell' },
        ],
      },
      { id: 'shop', text: '藥水、日火小瓶、聖歌金箔、日試蠟印。日冠聖印不賣，能賣的就不叫終點。', action: { type: 'shop', data: { shopType: 'sunspire_sunfire_supply' } }, options: [{ text: '灰影邊緣怎麼回事？', nextId: 'shadow' }, { text: '先這樣。', nextId: 'farewell' }] },
      { id: 'shadow', text: '追光的人若只想被照亮，就會在邊緣留下影子。灰影悔光者就是那種影子。', options: [{ text: '我看看補給。', nextId: 'shop' }, { text: '我會留意。', nextId: 'farewell' }] },
      { id: 'farewell', text: '日火小瓶別在鏡室裡亂開，反光會咬人。' },
    ],
    guardianHints: {
      creature: '索拉提示日火唱詩者、灰影悔光者與熾哨翼長。',
      treasure: '她販售日火小瓶、聖歌金箔與日試蠟印。',
      spirit: '守燈人讓日耀尖塔中段有穩定補給與暗影反噬說明。',
    },
  },

sunspire_crown_witness: {
    id: 'sunspire_crown_witness',
    name: '阿瑞斯特',
    alias: 'witness',
    title: '日冠核心見證者',
    description: '一名見證者站在日冠核心門前，披風內側反射出像正午一樣乾淨的白光。',
    roomId: 'sunspire_crown_of_day',
    type: 'quest',
    dialogue: [
      {
        id: 'greeting',
        text: '日冠顯聖者不問你信什麼，只看你在反射屏障升起時能不能停手。',
        options: [
          { text: '顯聖者怎麼打？', nextId: 'avatar' },
          { text: '日冠聖印代表什麼？', nextId: 'sigil' },
          { text: '我會控制攻勢。', nextId: 'farewell' },
        ],
      },
      { id: 'avatar', text: '隕石前有長光，反射前有鏡環。貪攻的人會被自己的火焰審判。', options: [{ text: '日冠聖印代表什麼？', nextId: 'sigil' }, { text: '我會看鏡環。', nextId: 'farewell' }] },
      { id: 'sigil', text: '它證明你到過正午光下，且沒有被自己的影子拖回去。', options: [{ text: '顯聖者怎麼打？', nextId: 'avatar' }, { text: '我明白。', nextId: 'farewell' }] },
      { id: 'farewell', text: '正午沒有陰影，但人會自己帶來陰影。' },
    ],
    guardianHints: {
      creature: '阿瑞斯特提示日冠顯聖者的隕石、反射與神聖護盾。',
      treasure: '他說明日冠聖印是尖塔終點證物。',
      spirit: '見證者把日耀尖塔終點與自我節制主題收束起來。',
    },
  },

moonshadow_court_mask_seneschal: {
    id: 'moonshadow_court_mask_seneschal',
    name: '莎緹雅',
    alias: 'seneschal',
    title: '月影假面管事',
    description: '一名管事站在假面舞廳入口，手中托盤上排列著銀面具，每一張都像正在等待新名字。',
    roomId: 'moonshadow_court_masked_ball_hall',
    type: 'quest',
    dialogue: [
      {
        id: 'greeting',
        text: '進入月影庭，請先選一張面具。沒有面具的人會被庭中夢境替你選一張。',
        options: [
          { text: '我該找什麼？', nextId: 'proof' },
          { text: '隱庭核心在哪？', nextId: 'core' },
          { text: '我會戴好面具。', nextId: 'farewell' },
        ],
      },
      { id: 'proof', text: '月面具碎片、蛾燈銀粉、夜花瓣。它們能證明你不是被舞會帶著走，而是自己穿過宮廷。', options: [{ text: '隱庭核心在哪？', nextId: 'core' }, { text: '我去找證物。', nextId: 'farewell' }] },
      { id: 'core', text: '月蝕帷幕後方。若你在誓鏡裡看見自己沒有影子，就暫時別進去。', options: [{ text: '我該找什麼？', nextId: 'proof' }, { text: '我會先去誓鏡室。', nextId: 'farewell' }] },
      { id: 'farewell', text: '舞會結束前不要摘下面具。摘下的人通常也摘下了名字。' },
    ],
    guardianHints: {
      creature: '瑟琳提示夢玻決鬥客、誓鏡倒影、月蝕帷幕刺客與隱庭月后投影。',
      treasure: '她說明月面具碎片、蛾燈銀粉、夜花瓣與隱庭敕令。',
      spirit: '假面管事把月影庭的宮廷禮儀、證物與核心路線連起來。',
    },
  },

moonshadow_court_lantern_peddler: {
    id: 'moonshadow_court_lantern_peddler',
    name: '米蘿',
    alias: 'peddler',
    title: '蛾燈小販',
    description: '一名小販坐在蛾燈長廊轉角，攤布上擺滿銀粉瓶、夜花乾瓣與會自行變暗的玻璃杯。',
    roomId: 'moonshadow_court_moth_lantern_gallery',
    type: 'merchant',
    shopItems: ['large_hp_potion', 'large_mp_potion', 'dreamglass_dew', 'moth_lantern_dust', 'nightbloom_petal'],
    dialogue: [
      {
        id: 'greeting',
        text: '買點夢玻露吧。這裡的走廊很會假裝自己是出口。',
        options: [
          { text: '我看看貨品。', nextId: 'shop' },
          { text: '夜花庭危險嗎？', nextId: 'garden' },
          { text: '稍後再來。', nextId: 'farewell' },
        ],
      },
      { id: 'shop', text: '藥水、夢玻露、蛾燈銀粉、夜花瓣。隱庭敕令不在攤上，能擺攤賣的都不是真敕令。', action: { type: 'shop', data: { shopType: 'moonshadow_lantern_goods' } }, options: [{ text: '夜花庭危險嗎？', nextId: 'garden' }, { text: '先這樣。', nextId: 'farewell' }] },
      { id: 'garden', text: '夜花會聽掌聲開花。你若聽見沒有人的掌聲，就別回頭。', options: [{ text: '我看看貨品。', nextId: 'shop' }, { text: '我會留意掌聲。', nextId: 'farewell' }] },
      { id: 'farewell', text: '燈不要舉太高。太亮會把別人的夢也照醒。' },
    ],
    guardianHints: {
      creature: '米芮提示蛾燈群靈、夜花園母與玻鹿傳令。',
      treasure: '她販售夢玻露滴、蛾燈銀粉與夜花瓣。',
      spirit: '蛾燈小販提供中段補給並強化夢境迷路感。',
    },
  },

moonshadow_court_decree_witness: {
    id: 'moonshadow_court_decree_witness',
    name: '奧菲拉',
    alias: 'witness',
    title: '隱庭敕令見證者',
    description: '一名見證者立在隱庭核心前，半邊臉戴著黑月面具，半邊臉映著白花影。',
    roomId: 'moonshadow_court_hidden_court_core',
    type: 'quest',
    dialogue: [
      {
        id: 'greeting',
        text: '月后投影只問一件事：你穿過的是宮廷，還是自己的夢？回答錯的人會永遠留在舞會裡。',
        options: [
          { text: '月后怎麼打？', nextId: 'queen' },
          { text: '敕令代表什麼？', nextId: 'decree' },
          { text: '我會穩住夢境。', nextId: 'farewell' },
        ],
      },
      { id: 'queen', text: '反射屏障升起時停手，根縛落下時先救隊友。死亡印記不是威脅，是倒數。', options: [{ text: '敕令代表什麼？', nextId: 'decree' }, { text: '我會看屏障。', nextId: 'farewell' }] },
      { id: 'decree', text: '隱庭敕令證明月影庭承認你聽過真名，但不代表你能保有真名。', options: [{ text: '月后怎麼打？', nextId: 'queen' }, { text: '我明白。', nextId: 'farewell' }] },
      { id: 'farewell', text: '若王座空著，別坐。那通常表示王座正在等你。' },
    ],
    guardianHints: {
      creature: '奧菲拉提示隱庭月后投影的反射、根縛與死亡印記。',
      treasure: '她說明隱庭敕令是月影庭終點證物。',
      spirit: '敕令見證者把宮廷核心與夢境身份主題收束起來。',
    },
  },

machine_graveyard_scrap_foreman: {
    id: 'machine_graveyard_scrap_foreman',
    name: '格里特',
    alias: 'foreman',
    title: '廢鐵拆解工頭',
    description: '一名拆解工頭站在入口吊臂下，皮圍裙上掛滿標記過的螺栓與燒焦工牌。',
    roomId: 'machine_graveyard_entrance_crane',
    type: 'quest',
    dialogue: [
      {
        id: 'greeting',
        text: '這裡不是廢墟，是還沒承認自己死掉的工廠。先找伺服關節和銅線，別直接碰核心。',
        options: [
          { text: '我該回收什麼？', nextId: 'salvage' },
          { text: '核心在哪？', nextId: 'core' },
          { text: '我會從外圍拆起。', nextId: 'farewell' },
        ],
      },
      { id: 'salvage', text: '鏽伺服關節、銅線線圈、黑油冷卻劑。它們能告訴你哪一條系統正在重新通電。', options: [{ text: '核心在哪？', nextId: 'core' }, { text: '我去回收。', nextId: 'farewell' }] },
      { id: 'core', text: '古算核庫之後是失控守衛列，再往深處才是主反應殼。沒有鑰片就別去敲那扇門。', options: [{ text: '我該回收什麼？', nextId: 'salvage' }, { text: '我會先找鑰片。', nextId: 'farewell' }] },
      { id: 'farewell', text: '聽見齒輪開始同步時，先蹲下。它們通常在找頭的高度。' },
    ],
    guardianHints: {
      creature: '格里特提示廢鐵爪機、火花軌行者、古算核審判器與主反應殼守衛。',
      treasure: '他說明鏽伺服關節、銅線線圈、黑油冷卻劑與古算核鑰片。',
      spirit: '拆解工頭把機械墳場的回收與核心甦醒路線建立起來。',
    },
  },

machine_graveyard_oil_seller: {
    id: 'machine_graveyard_oil_seller',
    name: '帕琪',
    alias: 'seller',
    title: '黑油蓄池補給商',
    description: '一名補給商坐在黑油蓄池邊，所有瓶罐都用銅線繫著，避免被磁塔吸走。',
    roomId: 'machine_graveyard_oil_black_cistern',
    type: 'merchant',
    shopItems: ['large_hp_potion', 'large_mp_potion', 'oilblack_coolant', 'rusted_servo_joint', 'copper_coil_spool'],
    dialogue: [
      {
        id: 'greeting',
        text: '買冷卻劑嗎？這地方連傷口都會過熱，別等皮帶冒煙才想起來。',
        options: [
          { text: '我看看補給。', nextId: 'shop' },
          { text: '磁塔怎麼辦？', nextId: 'magnet' },
          { text: '稍後再來。', nextId: 'farewell' },
        ],
      },
      { id: 'shop', text: '藥水、黑油冷卻劑、伺服關節、銅線線圈。主反應核心不賣，賣得動的核心都不是真核心。', action: { type: 'shop', data: { shopType: 'machine_graveyard_salvage' } }, options: [{ text: '磁塔怎麼辦？', nextId: 'magnet' }, { text: '先這樣。', nextId: 'farewell' }] },
      { id: 'magnet', text: '磁環亮起時別用金屬武器硬砍。等它吸滿廢鐵，反而會慢半拍。', options: [{ text: '我看看補給。', nextId: 'shop' }, { text: '我會等慢拍。', nextId: 'farewell' }] },
      { id: 'farewell', text: '瓶子拿穩。黑油灑在靴底，下一步就是滑進蓄池。' },
    ],
    guardianHints: {
      creature: '帕琪提示磁塔哨衛、電池墓窖哀械與失控守衛單元。',
      treasure: '她販售黑油冷卻劑、鏽伺服關節與銅線線圈。',
      spirit: '補給商讓資源區有可回訪的材料與補給節點。',
    },
  },

machine_graveyard_core_auditor: {
    id: 'machine_graveyard_core_auditor',
    name: '諾維克',
    alias: 'auditor',
    title: '核心甦醒監測員',
    description: '一名監測員站在古算核庫門外，耳邊儀器不斷記錄主反應殼傳來的低頻脈衝。',
    roomId: 'machine_graveyard_ancient_cpu_vault',
    type: 'quest',
    dialogue: [
      {
        id: 'greeting',
        text: '古算核已經開始自我檢查。若主反應殼完全醒來，整片墳場會把自己組回一座工廠。',
        options: [
          { text: '守衛怎麼打？', nextId: 'warden' },
          { text: '核心代表什麼？', nextId: 'core' },
          { text: '我會關閉反應殼。', nextId: 'farewell' },
        ],
      },
      { id: 'warden', text: '反射、硬化、碎裂、雷擊。看到反應爐變成鏡面時停手，不然它會把你的輸出算回你身上。', options: [{ text: '核心代表什麼？', nextId: 'core' }, { text: '我會等反射退去。', nextId: 'farewell' }] },
      { id: 'core', text: '主反應核心不是戰利品，是甦醒證據。帶回它，至少能證明這座墳場還沒有完全醒來。', options: [{ text: '守衛怎麼打？', nextId: 'warden' }, { text: '我明白。', nextId: 'farewell' }] },
      { id: 'farewell', text: '如果你聽見所有齒輪同時停止，立刻跑。那不是停機，是在聽你。' },
    ],
    guardianHints: {
      creature: '諾亞提示古算核審判器、失控守衛單元與主反應殼守衛。',
      treasure: '他說明古算核鑰片與主反應核心的任務用途。',
      spirit: '監測員把機械墳場終點收束到核心甦醒危機。',
    },
  },

bloodsalt_coast_wrecker_quartermaster: {
    id: 'bloodsalt_coast_wrecker_quartermaster',
    name: '瑪洛克',
    alias: 'quartermaster',
    title: '拾荒者軍需官',
    description: '一名披著鹽漬皮甲的軍需官站在拾荒者標記旁，桌上壓著海圖、鯊齒與染紅的鹽晶袋。',
    roomId: 'bloodsalt_coast_wreckers_marker',
    type: 'merchant',
    shopItems: ['large_hp_potion', 'large_mp_potion', 'brineward_tonic', 'bloodsalt_crystal', 'sharktooth_tally'],
    dialogue: [
      {
        id: 'greeting',
        text: '要買就快。紅潮上來後，這張桌子可能會變成別人的戰利品。',
        options: [
          { text: '我看看補給。', nextId: 'shop' },
          { text: '血稅是什麼？', nextId: 'tithe' },
          { text: '稍後再來。', nextId: 'farewell' },
        ],
      },
      { id: 'shop', text: '藥水、鹵血護劑、血鹽晶、鯊齒記功牌。礁心血印不賣，敢賣那東西的人早被潮水拿走了。', action: { type: 'shop', data: { shopType: 'bloodsalt_wrecker_supply' } }, options: [{ text: '血稅是什麼？', nextId: 'tithe' }, { text: '先這樣。', nextId: 'farewell' }] },
      { id: 'tithe', text: '血稅棧橋收的不是錢，是誰能留下船、誰得留下命。戰旗私掠隊長最愛把規矩說成契約。', options: [{ text: '我看看補給。', nextId: 'shop' }, { text: '我會避開棧橋。', nextId: 'farewell' }] },
      { id: 'farewell', text: '踩進紅鹽灘前先看鞋底。鹽晶會把血味留很久。' },
    ],
    guardianHints: {
      creature: '瑪洛克提示紅鹽劫掠手、鹵灣走私割喉客與戰旗私掠隊長。',
      treasure: '他販售鹵血護劑、血鹽晶與鯊齒記功牌。',
      spirit: '軍需官讓血鹽海岸的 PVP 補給與血稅規則落地。',
    },
  },

bloodsalt_coast_reef_biologist: {
    id: 'bloodsalt_coast_reef_biologist',
    name: '莉芙',
    alias: 'biologist',
    title: '紅珊瑚調查員',
    description: '一名調查員在礁釣哨整理濕透的樣本盒，手臂上有被刃貝劃出的細長傷口。',
    roomId: 'bloodsalt_coast_reef_fishing_post',
    type: 'quest',
    dialogue: [
      {
        id: 'greeting',
        text: '紅珊瑚不是普通珊瑚。它會記住血流方向，也會把祭儀的錯誤長成新的刺。',
        options: [
          { text: '你需要什麼樣本？', nextId: 'sample' },
          { text: '赤潮從哪來？', nextId: 'tide' },
          { text: '我會帶回裂片。', nextId: 'farewell' },
        ],
      },
      { id: 'sample', text: '紅珊瑚裂片、血鹽晶、骨網上的黏液。別把刃貝當石頭踩，它們會反過來收集你的樣本。', options: [{ text: '赤潮從哪來？', nextId: 'tide' }, { text: '我去淺灘。', nextId: 'farewell' }] },
      { id: 'tide', text: '赤潮池只是表面。真正的源頭在儀式礁心，主祭把潮水變成了記名冊。', options: [{ text: '你需要什麼樣本？', nextId: 'sample' }, { text: '我會追到礁心。', nextId: 'farewell' }] },
      { id: 'farewell', text: '樣本盒若自己變熱，丟掉。那表示它開始記住你。' },
    ],
    guardianHints: {
      creature: '莉芙提示骨網鹽鰓、刃貝群落、紅珊瑚多首獸與儀式礁心主祭。',
      treasure: '她需要紅珊瑚裂片與血鹽晶作為調查樣本。',
      spirit: '調查員把海岸生態異變與血祭儀式串起來。',
    },
  },

bloodsalt_coast_ritual_deserter: {
    id: 'bloodsalt_coast_ritual_deserter',
    name: '伊凡',
    alias: 'deserter',
    title: '血祭逃亡者',
    description: '一名逃亡者躲在冰暗湧道旁的鹽洞裡，衣襬還留著血壇蠟印和半乾海水。',
    roomId: 'bloodsalt_coast_ice_dark_surge',
    type: 'quest',
    dialogue: [
      {
        id: 'greeting',
        text: '別去礁心。主祭念名字時，不需要你回答；潮水會替你回答。',
        options: [
          { text: '主祭怎麼打？', nextId: 'hierophant' },
          { text: '礁心血印是什麼？', nextId: 'seal' },
          { text: '我會小心潮聲。', nextId: 'farewell' },
        ],
      },
      { id: 'hierophant', text: '死亡印記先落，毒霧封路，冰暗潮壓住逃生方向。看到紅水退成圓形時，快散開。', options: [{ text: '礁心血印是什麼？', nextId: 'seal' }, { text: '我會記住。', nextId: 'farewell' }] },
      { id: 'seal', text: '那是儀式被打斷後留下的傷口。帶走它，血潮至少會忘記一部分名字。', options: [{ text: '主祭怎麼打？', nextId: 'hierophant' }, { text: '我去礁心。', nextId: 'farewell' }] },
      { id: 'farewell', text: '如果潮水喊你全名，別回頭。那不是熟人。' },
    ],
    guardianHints: {
      creature: '伊凡提示赤潮血諭者、幽艏船怨靈與儀式礁心主祭。',
      treasure: '他說明礁心血印是血祭終點證物。',
      spirit: '逃亡者把血祭恐懼與終點 Boss 機制說清楚。',
    },
  },

emerald_canopy_birdfolk_guide: {
    id: 'emerald_canopy_birdfolk_guide',
    name: '莉亞',
    alias: 'guide',
    title: '鳥巢村臺引路人',
    description: '一名鳥民引路人站在鳥巢村臺邊，羽披上縫著許多藤橋通行結。',
    roomId: 'emerald_canopy_birdfolk_roost',
    type: 'quest',
    dialogue: [
      {
        id: 'greeting',
        text: '地面人走樹冠時總看腳下，卻忘了危險多半從上面來。',
        options: [
          { text: '我該帶回什麼？', nextId: 'proof' },
          { text: '高綠庭在哪？', nextId: 'court' },
          { text: '我會抬頭看。', nextId: 'farewell' },
        ],
      },
      { id: 'proof', text: '翡翠冠葉、雷枝木刺、古蜂蠟。這些能證明你走過藤橋、雷枝與蜂巢，不只是坐根升機上來看風景。', options: [{ text: '高綠庭在哪？', nextId: 'court' }, { text: '我去收集。', nextId: 'farewell' }] },
      { id: 'court', text: '鹿冠空地後方。若晶翼鹿冠獸不讓路，就不要硬闖。牠不是看門獸，是問題本身。', options: [{ text: '我該帶回什麼？', nextId: 'proof' }, { text: '我會尊重牠。', nextId: 'farewell' }] },
      { id: 'farewell', text: '藤橋會記住重步伐的人。輕一點，活久一點。' },
    ],
    guardianHints: {
      creature: '莉亞提示藤橋斥候、雷枝鷹、晶翼鹿冠獸與高綠庭守護靈。',
      treasure: '她說明翡翠冠葉、雷枝木刺、古蜂蠟與高綠庭印記。',
      spirit: '鳥民引路人把樹冠通行規矩與終點試煉連起來。',
    },
  },

emerald_canopy_hollow_market_keeper: {
    id: 'emerald_canopy_hollow_market_keeper',
    name: '托爾',
    alias: 'keeper',
    title: '空樹市集藥材商',
    description: '一名藥材商在空樹市集裡整理葉包、蜂蠟與雨露瓶，攤位用樹藤綁在中空樹壁上。',
    roomId: 'emerald_canopy_hollow_trunk_market',
    type: 'merchant',
    shopItems: ['large_hp_potion', 'large_mp_potion', 'raincatch_elixir', 'emerald_canopy_leaf', 'ancient_honeycomb_wax'],
    dialogue: [
      {
        id: 'greeting',
        text: '買接雨靈露嗎？在樹冠走太久，連肺都會開始長苔。',
        options: [
          { text: '我看看貨品。', nextId: 'shop' },
          { text: '古蜂巢危險嗎？', nextId: 'hive' },
          { text: '稍後再來。', nextId: 'farewell' },
        ],
      },
      { id: 'shop', text: '藥水、接雨靈露、翡翠冠葉、古蜂蠟。高綠庭印記不賣，守護靈也不收金幣。', action: { type: 'shop', data: { shopType: 'emerald_canopy_market' } }, options: [{ text: '古蜂巢危險嗎？', nextId: 'hive' }, { text: '先這樣。', nextId: 'farewell' }] },
      { id: 'hive', text: '古蜂不怕火，只討厭貪心。取蠟時別敲第二下，第二下通常是牠們回你的。', options: [{ text: '我看看貨品。', nextId: 'shop' }, { text: '我會小心。', nextId: 'farewell' }] },
      { id: 'farewell', text: '瓶子拴牢。從這裡掉下去，落地前就先被藤橋笑死。' },
    ],
    guardianHints: {
      creature: '托爾提示古蜂群、樹脂瀑樹衛與雷皮巫枝者。',
      treasure: '他販售接雨靈露、翡翠冠葉與古蜂蠟。',
      spirit: '空樹市集提供樹冠中段補給與採集提示。',
    },
  },

emerald_canopy_green_court_listener: {
    id: 'emerald_canopy_green_court_listener',
    name: '梅芙',
    alias: 'listener',
    title: '高綠庭聆聽者',
    description: '一名聆聽者跪坐在高綠庭邊緣，耳後插著雷枝木刺，掌心托著一片不會枯萎的冠葉。',
    roomId: 'emerald_canopy_high_green_court',
    type: 'quest',
    dialogue: [
      {
        id: 'greeting',
        text: '守護靈不討厭訪客。牠只討厭把樹冠當階梯、把生靈當戰利品的人。',
        options: [
          { text: '守護靈怎麼打？', nextId: 'warden' },
          { text: '印記代表什麼？', nextId: 'mark' },
          { text: '我會放輕腳步。', nextId: 'farewell' },
        ],
      },
      { id: 'warden', text: '反射光像樹皮發亮時停手。根縛會先抓最急的人，雷擊會找站太近的人。', options: [{ text: '印記代表什麼？', nextId: 'mark' }, { text: '我會觀察。', nextId: 'farewell' }] },
      { id: 'mark', text: '高綠庭印記不是通關章，是樹冠承認你沒有把路踩斷。', options: [{ text: '守護靈怎麼打？', nextId: 'warden' }, { text: '我明白。', nextId: 'farewell' }] },
      { id: 'farewell', text: '如果風突然停了，先聽葉子，不要聽自己的心跳。' },
    ],
    guardianHints: {
      creature: '梅芙提示晶翼鹿冠獸與高綠庭守護靈的反射、根縛與雷擊。',
      treasure: '她說明高綠庭印記是樹冠終點證物。',
      spirit: '聆聽者把樹冠終點收束到尊重生態與通行誓約。',
    },
  },

hollow_mountain_wind_gate_surveyor: {
    id: 'hollow_mountain_wind_gate_surveyor',
    name: '洛杭',
    alias: 'surveyor',
    title: '風門測繪師',
    description: '一名老測繪師坐在風門入口的石階上，膝上攤著被風壓吹皺的山腹剖面圖。',
    roomId: 'hollow_mountain_entrance_wind_gate',
    type: 'quest',
    dialogue: [
      {
        id: 'greeting',
        text: '進空心山前先聽風。風聲若像鐘，代表路還開著；若像人叫你名字，別回頭。',
        options: [
          { text: '該先走哪裡？', nextId: 'route' },
          { text: '有什麼怪？', nextId: 'creatures' },
          { text: '我會聽風。', nextId: 'farewell' },
        ],
      },
      { id: 'route', text: '先穩住風門與螺旋礦坡，再往霜脈壁、雷礦橋推。高穹階之後就不是礦路，是山心在聽你走路。', options: [{ text: '有什麼怪？', nextId: 'creatures' }, { text: '知道了。', nextId: 'farewell' }] },
      { id: 'creatures', text: '礦衛不怕喊，怨影專門學人喊。雷礦蜥會沿鐵軌放電，看到軌面發白就別站成一排。', options: [{ text: '該先走哪裡？', nextId: 'route' }, { text: '我會記住。', nextId: 'farewell' }] },
      { id: 'farewell', text: '若地圖開始自己捲起來，表示風壓變了，先退到門邊。' },
    ],
    guardianHints: {
      creature: '洛杭提示風門礦衛、回音礦工怨影與雷礦蜥的基礎危險。',
      treasure: '他指出空風礦、霜脈晶與雷礦碎片的主要採集路線。',
      spirit: '測繪師把空心山入口轉成路線判讀與風壓主題。',
    },
  },

hollow_mountain_echo_market_quartermaster: {
    id: 'hollow_mountain_echo_market_quartermaster',
    name: '芙琳',
    alias: 'quartermaster',
    title: '回音市集礦材商',
    description: '一名女商人靠在回音市集的吊秤旁，貨箱裡分格放著會鳴響、結霜與跳電的礦材。',
    roomId: 'hollow_mountain_echo_market',
    type: 'merchant',
    shopItems: [
      'large_hp_potion',
      'large_mp_potion',
      'silver_breath_tonic',
      'hollow_wind_ore',
      'frost_vein_crystal',
      'thunder_ore_shard',
    ],
    dialogue: [
      {
        id: 'greeting',
        text: '買礦材或藥劑都小聲點。這市集會把討價還價傳到三條隧道外，連怨影都學得很快。',
        options: [
          { text: '我看看貨品。', nextId: 'shop' },
          { text: '銀息藥劑做什麼？', nextId: 'tonic' },
          { text: '稍後再來。', nextId: 'farewell' },
        ],
      },
      { id: 'shop', text: '大型藥水、銀息藥劑、空風礦、霜脈晶、雷礦碎片。山心共鳴核我不賣，那東西拿出來市集會塌。', action: { type: 'shop', data: { shopType: 'hollow_mountain_market' } }, options: [{ text: '銀息藥劑做什麼？', nextId: 'tonic' }, { text: '先這樣。', nextId: 'farewell' }] },
      { id: 'tonic', text: '銀息能讓肺適應風壓，也能把冰鏈廊那種冷痛壓下去。喝太慢沒用，風不等人。', options: [{ text: '我看看貨品。', nextId: 'shop' }, { text: '明白。', nextId: 'farewell' }] },
      { id: 'farewell', text: '貨拿穩。雷礦碎片若在袋裡互相碰撞，你會比火把更亮。' },
    ],
    guardianHints: {
      creature: '芙琳提示霜脈岩傀、風暴蓄能獄卒與銀息井看守。',
      treasure: '她販售銀息藥劑與空心山前中段礦材。',
      spirit: '回音市集成為空心山中段補給與材料交換節點。',
    },
  },

hollow_mountain_miner_oath_keeper: {
    id: 'hollow_mountain_miner_oath_keeper',
    name: '奧爾班',
    alias: 'oathkeeper',
    title: '礦誓柱守誓人',
    description: '一名獨眼守誓人站在礦誓柱旁，左手按著刻滿名字的黑花崗板，右手握著折斷的礦鎬。',
    roomId: 'hollow_mountain_miner_oath_post',
    type: 'quest',
    dialogue: [
      {
        id: 'greeting',
        text: '礦誓不是叫你往深處走，是叫你知道什麼時候該停。山心最會殺死聽不見警告的人。',
        options: [
          { text: '山心核心怎麼打？', nextId: 'heart' },
          { text: '礦車迷宮呢？', nextId: 'cart' },
          { text: '我會守誓。', nextId: 'farewell' },
        ],
      },
      { id: 'heart', text: '山心泰坦胸口亮成鏡面時停手。雷鳴後分散，冰風起時靠牆，地面開始跟心跳同步就準備防禦。', options: [{ text: '礦車迷宮呢？', nextId: 'cart' }, { text: '我會觀察。', nextId: 'farewell' }] },
      { id: 'cart', text: '古礦車迷宮機兵會推車換軌。不要只看牠，還要看軌道哪一段開始顫。舊鑽頭通常在牠背後匣子裡。', options: [{ text: '山心核心怎麼打？', nextId: 'heart' }, { text: '知道了。', nextId: 'farewell' }] },
      { id: 'farewell', text: '若你帶回山心共鳴核，先別慶祝。讓它安靜三次，確定山沒有跟著你回來。' },
    ],
    guardianHints: {
      creature: '奧爾班提示古礦車迷宮機兵與山心共鳴泰坦的反射、雷鳴與軌道機關。',
      treasure: '他說明舊鑽頭與山心共鳴核的取得位置。',
      spirit: '守誓人把空心山後段收束成礦誓、克制與山心終點。',
    },
  },

serpent_delta_ferry_pilot: {
    id: 'serpent_delta_ferry_pilot',
    name: '阿渡',
    alias: 'ferryman',
    title: '蛇河渡口船夫',
    description: '一名赤腳船夫坐在渡口入口的窄船尾，竹篙上纏著乾蛇蛻與蘆草結。',
    roomId: 'serpent_delta_entrance_ferry',
    type: 'quest',
    dialogue: [
      {
        id: 'greeting',
        text: '蛇河不是一條河，是很多張嘴。你聽見哪邊喊你，就先確認水流是不是也往那邊走。',
        options: [
          { text: '先去哪裡？', nextId: 'route' },
          { text: '水裡有什麼？', nextId: 'creatures' },
          { text: '我會看水。', nextId: 'farewell' },
        ],
      },
      { id: 'route', text: '先過分流水蘆岸和吊腳村，別急著碰蛇祠階。等你認得冷霧和藍蓮味，再往百口合流去。', options: [{ text: '水裡有什麼？', nextId: 'creatures' }, { text: '知道了。', nextId: 'farewell' }] },
      { id: 'creatures', text: '蘆岸絞蛇拖腳，泥魚裝枯枝，冷霧電鰻會讓槳變冰。看到水面同時冒三圈泡，就別下船。', options: [{ text: '先去哪裡？', nextId: 'route' }, { text: '我會小心。', nextId: 'farewell' }] },
      { id: 'farewell', text: '竹篙別插太深。有些泥不是泥，是等你借力的嘴。' },
    ],
    guardianHints: {
      creature: '阿渡提示蘆岸絞蛇、泥魚伏擊者與冷霧電鰻。',
      treasure: '他指出蘆鱗條、冷霧瓶與藍蓮瓣的早期採集路線。',
      spirit: '船夫把蛇河三角洲入口轉成水路判讀與伏擊主題。',
    },
  },

serpent_delta_stilt_herbalist: {
    id: 'serpent_delta_stilt_herbalist',
    name: '蘭婆',
    alias: 'herbalist',
    title: '吊腳村藥婆',
    description: '一名藥婆在吊腳村的竹棚下熬著深綠藥湯，鍋邊排著蛇卵殼粉、藍蓮瓣與解毒草。',
    roomId: 'serpent_delta_stilt_hamlet',
    type: 'merchant',
    shopItems: [
      'medium_hp_potion',
      'medium_mp_potion',
      'antidote',
      'delta_antivenom_brew',
      'reedscale_strip',
      'blue_lotus_petal',
    ],
    dialogue: [
      {
        id: 'greeting',
        text: '被咬了才來買解毒湯，通常已經少走三步路了。先買，活著回來再嫌苦。',
        options: [
          { text: '我看看藥材。', nextId: 'shop' },
          { text: '蛇卵殼有用嗎？', nextId: 'egg' },
          { text: '稍後再來。', nextId: 'farewell' },
        ],
      },
      { id: 'shop', text: '中型藥水、解毒劑、三角洲解毒湯、蘆鱗條、藍蓮瓣。蛇神背水鱗不賣，那東西沾了太多河口。', action: { type: 'shop', data: { shopType: 'serpent_delta_herbs' } }, options: [{ text: '蛇卵殼有用嗎？', nextId: 'egg' }, { text: '先這樣。', nextId: 'farewell' }] },
      { id: 'egg', text: '蛇卵殼磨粉能壓毒，但你最好別自己去偷。育母聽得見殼裂聲，隔兩條水道都聽得見。', options: [{ text: '我看看藥材。', nextId: 'shop' }, { text: '我記住了。', nextId: 'farewell' }] },
      { id: 'farewell', text: '藥湯趁熱喝。冷掉會像三角洲的霧一樣黏喉。' },
    ],
    guardianHints: {
      creature: '蘭婆提示蛇卵丘育母、蛇祠面具侍者與藍蓮冷霧諭者。',
      treasure: '她販售三角洲解毒湯、蘆鱗條與藍蓮瓣。',
      spirit: '藥婆把吊腳村變成濕地補給與毒性應對節點。',
    },
  },

serpent_delta_shrine_keeper: {
    id: 'serpent_delta_shrine_keeper',
    name: '瑟鈴',
    alias: 'keeper',
    title: '蛇祠守階人',
    description: '一名披著白鱗披肩的守階人站在蛇祠階上，手裡的面具內側畫著百條支流。',
    roomId: 'serpent_delta_serpent_shrine_steps',
    type: 'quest',
    dialogue: [
      {
        id: 'greeting',
        text: '祭壇不要求你跪，只要求你知道哪一條水不能踏。百口合流之後，每條水都會記住你的腳印。',
        options: [
          { text: '百口河蛇怎麼打？', nextId: 'hydra' },
          { text: '藍蓮沼有什麼？', nextId: 'lotus' },
          { text: '我會尊重祭路。', nextId: 'farewell' },
        ],
      },
      { id: 'hydra', text: '百口河蛇吐毒霧時別退進冷霧，尾巴掃水後才是冰風暴。蛇神背水鱗只會給能活著離開背水的人。', options: [{ text: '藍蓮沼有什麼？', nextId: 'lotus' }, { text: '我會觀察。', nextId: 'farewell' }] },
      { id: 'lotus', text: '藍蓮冷霧諭者會把花影變成屏障。花影亮起時停手，否則你是在替它祈禱。', options: [{ text: '百口河蛇怎麼打？', nextId: 'hydra' }, { text: '明白。', nextId: 'farewell' }] },
      { id: 'farewell', text: '若面具自己轉向背水，代表河口已經醒了。' },
    ],
    guardianHints: {
      creature: '瑟鈴提示藍蓮冷霧諭者與百口河蛇的屏障、毒霧和冰風暴。',
      treasure: '她說明蛇神背水鱗是三角洲終點證物。',
      spirit: '守階人把蛇祠、藍蓮沼與蛇神背水收束成祭壇主線。',
    },
  },

kingdom_frontier_muster_officer: {
    id: 'kingdom_frontier_muster_officer',
    name: '卡雷恩',
    alias: 'officer',
    title: '傳送點兵場軍務官',
    description: '一名披著半舊軍披的軍務官站在傳送點兵場，手裡的點名板被戰線標記劃得密密麻麻。',
    roomId: 'kingdom_frontier_portal_muster',
    type: 'quest',
    dialogue: [
      { id: 'greeting', text: '這裡不是決戰場，是所有決戰開始前都會弄丟補給的地方。先知道你要守哪條線，再握緊武器。', options: [{ text: '先看戰線。', nextId: 'front' }, { text: '有哪些敵人？', nextId: 'creatures' }, { text: '我去點兵。', nextId: 'farewell' }] },
      { id: 'front', text: '哨塔看路，補給營續命，攻城器械場推戰線。前壘門之後才是地堡與指揮所。', options: [{ text: '有哪些敵人？', nextId: 'creatures' }, { text: '知道了。', nextId: 'farewell' }] },
      { id: 'creatures', text: '徵召兵守路，重弩手盯高處，掠兵專偷補給。別把他們當魔王打，這裡真正可怕的是命令。', options: [{ text: '先看戰線。', nextId: 'front' }, { text: '我明白。', nextId: 'farewell' }] },
      { id: 'farewell', text: '若你聽見三面號角同時響，別問誰下令，先找掩體。' },
    ],
    guardianHints: { creature: '卡雷恩提示邊境徵召兵、哨塔重弩手與補給線掠兵。', treasure: '他說明補給箱、戰旗匣與軍糧包的戰線用途。', spirit: '軍務官把王國邊境入口定位為戰線調度區。' },
  },

kingdom_frontier_supply_quartermaster: {
    id: 'kingdom_frontier_supply_quartermaster',
    name: '蜜拉',
    alias: 'quartermaster',
    title: '補給營軍需官',
    description: '一名軍需官坐在補給營貨箱後方，所有箱子都用不同顏色的戰線蠟封標記。',
    roomId: 'kingdom_frontier_supply_camp',
    type: 'merchant',
    shopItems: ['large_hp_potion', 'large_mp_potion', 'frontier_ration_pack', 'frontier_spyglass_lens', 'kingdom_supply_crate', 'kingdom_banner_cache'],
    dialogue: [
      { id: 'greeting', text: '買藥水可以，亂拿補給箱不行。每個箱子都有路線，走錯路比丟掉還糟。', options: [{ text: '我看看補給。', nextId: 'shop' }, { text: '攻城器械缺什麼？', nextId: 'siege' }, { text: '稍後再來。', nextId: 'farewell' }] },
      { id: 'shop', text: '大型藥水、邊境軍糧、望遠鏡片、補給箱、戰旗匣。前線指揮印不賣，能買到的指揮印都只能騙新兵。', action: { type: 'shop', data: { shopType: 'kingdom_frontier_supply' } }, options: [{ text: '攻城器械缺什麼？', nextId: 'siege' }, { text: '先這樣。', nextId: 'farewell' }] },
      { id: 'siege', text: '鎖銷。永遠缺鎖銷。攻城爆破工拆一枚，弩砲就會把自己的旗打下來。', options: [{ text: '我看看補給。', nextId: 'shop' }, { text: '我去找。', nextId: 'farewell' }] },
      { id: 'farewell', text: '離營前把補給繩綁好。掠兵最愛聽箱扣鬆掉的聲音。' },
    ],
    guardianHints: { creature: '蜜拉提示補給線掠兵、攻城爆破工與戰旗騎士。', treasure: '她販售軍糧包、望遠鏡片與王國戰線物資。', spirit: '軍需官讓補給營成為邊境中段補給節點。' },
  },

kingdom_frontier_truce_envoy: {
    id: 'kingdom_frontier_truce_envoy',
    name: '歐德琳',
    alias: 'envoy',
    title: '停戰帳使節',
    description: '一名使節站在停戰帳破碎長桌前，面前排著停戰繩、俘虜牌與尚未簽名的交換名冊。',
    roomId: 'kingdom_frontier_truce_tent',
    type: 'quest',
    dialogue: [
      { id: 'greeting', text: '停戰帳不是和平，只是所有人暫時承認還要交換活人。別在這裡握緊武器，除非你想替名冊加一行。', options: [{ text: '俘虜線在哪？', nextId: 'prisoners' }, { text: '後段怎麼推？', nextId: 'late' }, { text: '我會守規矩。', nextId: 'farewell' }] },
      { id: 'prisoners', text: '俘虜柵欄在前壘門前。假釋牌能救人，也能害人，拿到後先看背面交換條件。', options: [{ text: '後段怎麼推？', nextId: 'late' }, { text: '明白。', nextId: 'farewell' }] },
      { id: 'late', text: '暗林斥候會改訊號，前壘門隊長會關門，地堡參謀會標記你。到指揮所前，先確定你不是照著敵人的地圖走。', options: [{ text: '俘虜線在哪？', nextId: 'prisoners' }, { text: '我會核對路線。', nextId: 'farewell' }] },
      { id: 'farewell', text: '停戰帳外的旗若同時朝內飄，代表有人準備撕約。' },
    ],
    guardianHints: { creature: '歐德琳提示暗林斥候、前壘門隊長與戰圖地堡參謀。', treasure: '她說明俘虜假釋牌與後段軍令線。', spirit: '使節把停戰帳與俘虜柵欄串成邊境政治線。' },
  },

kingdom_frontier_command_aide: {
    id: 'kingdom_frontier_command_aide',
    name: '巴隆',
    alias: 'aide',
    title: '戰圖地堡副官',
    description: '一名副官守在戰圖地堡入口，外套內側縫滿備用軍令，眼神比地圖釘還冷。',
    roomId: 'kingdom_frontier_war_table_bunker',
    type: 'quest',
    dialogue: [
      { id: 'greeting', text: '指揮所就在東面。你若看不懂戰圖，前線指揮官會替你決定死在哪一格。', options: [{ text: '指揮官怎麼打？', nextId: 'general' }, { text: '參謀有什麼危險？', nextId: 'marshal' }, { text: '我會看圖。', nextId: 'farewell' }] },
      { id: 'general', text: '前線指揮官亮起反射時停手，被死亡標記就先保命。他的戰吼會叫回殘兵，別把小兵留到最後。', options: [{ text: '參謀有什麼危險？', nextId: 'marshal' }, { text: '知道了。', nextId: 'farewell' }] },
      { id: 'marshal', text: '參謀不一定殺你，但會讓所有人知道該殺誰。標記粉落在你腳邊時，立刻換位。', options: [{ text: '指揮官怎麼打？', nextId: 'general' }, { text: '我會留意。', nextId: 'farewell' }] },
      { id: 'farewell', text: '拿到前線指揮印後別急著蓋章。先確認那張命令不是寫給你自己的。' },
    ],
    guardianHints: { creature: '班恩提示戰圖地堡參謀與前線指揮官。', treasure: '他說明前線指揮印是邊境終點證物。', spirit: '副官把戰圖地堡與指揮所收束成王國邊境終局。' },
  },

final_battleground_war_scribe: {
    id: 'final_battleground_war_scribe',
    name: '赫爾穆',
    alias: 'scribe',
    title: '終戰入口軍史官',
    description:
      '一名灰袍軍史官站在終戰入口的斷碑旁，手中的銅筆不停記錄破旗飄動、黑焰推進與神傷脈動。' +
      '他的影子比身體更像士兵，彷彿仍在替最後一場戰爭點名。',
    roomId: 'final_battleground_war_gate',
    type: 'quest',
    dialogue: [
      {
        id: 'greeting',
        text: '別急著衝向終末軍旗。這片戰場最危險的不是敵人還活著，而是軍令仍然有效。',
        options: [
          { text: '請宣讀終焉戰場軍令確認。', nextId: 'entry_intro' },
          { text: '先看戰線。', nextId: 'front' },
          { text: '神傷核心在哪？', nextId: 'godscar' },
          { text: '我會留意。', nextId: 'farewell' },
        ],
      },
      {
        id: 'entry_intro',
        text:
          '我知道通往終局副本的軍令，因為所有進入戰場的人都會在這塊斷碑上留下影子。你不是去巡邏，而是要突破破旗殘兵、黑焰終軍與神傷核心，最後確認終末軍旗是否仍在重寫戰爭命令。',
        options: [
          { text: '確認終焉戰場建議等級與隊伍人數。', nextId: 'entry_conditions' },
          { text: '請帶我進入終焉戰場副本。', nextId: 'entry_confirm' },
        ],
      },
      {
        id: 'entry_conditions',
        text:
          '這是五十五級以上的終局戰場，建議三到四人由隊長確認進入。入口會在宣戰後沉寂一段時間；若隊伍太少、等級不足，或冷卻未結束，我會把原因寫進軍令而不是讓你白白送命。',
        options: [
          { text: '請帶我進入終焉戰場副本。', nextId: 'entry_confirm' },
          { text: '我先整理隊伍與補給。', nextId: 'farewell' },
        ],
      },
      {
        id: 'entry_confirm',
        text:
          '我會宣讀最後軍令，讓斷碑把你們的名字暫時列入終戰名冊。進入後不要相信任何安靜的旗，黑焰、神傷與軍令都會用不同方式要求你們留下。',
        action: { type: 'instance_entry', data: { entryId: 'final_battleground_final_battleground_war_scribe_npc_entry' } },
      },
      {
        id: 'front',
        text: '破旗殘布能指向殘兵，王骨誓片會引你去誓約石圈；黑焰餘燼若開始無熱燃燒，就代表終軍將正在整隊。',
        options: [
          { text: '神傷核心在哪？', nextId: 'godscar' },
          { text: '我去清理戰線。', nextId: 'farewell' },
        ],
      },
      {
        id: 'godscar',
        text: '裂世縫之後才是神傷核心。別把墜天光環碎片用得太早，神傷化身的白光比黑焰更會懲罰貪攻。',
        options: [
          { text: '先看戰線。', nextId: 'front' },
          { text: '明白。', nextId: 'farewell' },
        ],
      },
      { id: 'farewell', text: '若軍旗忽然沒有影子，立刻後撤。那代表統帥正在重新點名。' },
    ],
    guardianHints: {
      creature: '赫倫能提示終戰門旗衛、黑焰終軍將、神傷化身與終末軍旗統帥的推進順序。',
      treasure: '他說明破旗殘布、王骨誓片、黑焰餘燼與墜天光環碎片的戰線用途。',
      spirit: '他把終焉戰場拆成軍令、黑焰、神傷與終末軍旗四個危險節點。',
    },
  },

final_battleground_relic_quartermaster: {
    id: 'final_battleground_relic_quartermaster',
    name: '瑪薩',
    alias: 'quartermaster',
    title: '末令高臺遺物軍需官',
    description:
      '一名戴著半邊鐵面具的軍需官守在末令高臺，貨箱裡整齊放著藥水、破旗殘布與封存黑焰的石匣。' +
      '她每次交貨前都會先確認買主的影子還連在腳下。',
    roomId: 'final_battleground_last_command_post',
    type: 'merchant',
    shopItems: [
      'large_hp_potion',
      'large_mp_potion',
      'phoenix_feather',
      'broken_warbanner',
      'kingbone_oath_shard',
      'blackflame_ember',
    ],
    dialogue: [
      {
        id: 'greeting',
        text: '末令高臺只賣能讓你活著走到下一面旗的東西。想買補給，先把手伸出來，我要看有沒有黑焰燒痕。',
        options: [
          { text: '我看看補給。', nextId: 'shop' },
          { text: '終軍將在哪？', nextId: 'general' },
          { text: '稍後再來。', nextId: 'farewell' },
        ],
      },
      {
        id: 'shop',
        text: '大型藥水、鳳凰之羽、破旗殘布、王骨誓片、黑焰餘燼。神傷血晶和終末軍旗印我不賣，能買到的都不是真貨。',
        action: { type: 'shop', data: { shopType: 'final_battleground_relics' } },
        options: [
          { text: '終軍將在哪？', nextId: 'general' },
          { text: '先這樣。', nextId: 'farewell' },
        ],
      },
      {
        id: 'general',
        text: '黑焰前線、無冠戰場、終末軍旗都可能聽見牠的號令。若你身上的破旗殘布同時往三個方向拉，代表牠已經盯上你。',
        options: [
          { text: '我看看補給。', nextId: 'shop' },
          { text: '我會準備好。', nextId: 'farewell' },
        ],
      },
      { id: 'farewell', text: '別在這裡數戰利品。末令高臺會記住貪心的人。' },
    ],
    guardianHints: {
      creature: '瑪薩能提示魔神爪痕先鋒、黑焰終軍將與終末軍旗統帥的材料壓力。',
      treasure: '她販售高階藥水與前中段終焉戰場材料，神傷與終局聖物仍需戰鬥取得。',
      spirit: '她把末令高臺變成終焉戰場深處唯一可回訪的補給節點。',
    },
  },
};
