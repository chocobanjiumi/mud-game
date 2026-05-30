import type { RoomDef } from '@game/shared';

export const EXPANSION_ROOMS_PART_001: Record<string, RoomDef> = {
// ─── Area 5: 翠綠平原擴充 (Lv 5-12) ─────────────────────

  sunflower_field: {
    id: 'sunflower_field',
    name: '向日葵田',
    zone: 'plains',
    image: 'sunflower_field.png',
    imagePrompt: '向日葵田 in plains, exploration room with tall sunflower maze, golden petals, field rat tunnels, bright sun, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function combat, terrain plains, clear lantern light',
    description:
      '金燦燦的向日葵高過人頭，花盤在陽光下緩慢轉動，形成一座帶著花粉香的天然迷宮。東側穿過花田可回平原入口，北邊有獵人小屋的煙囪，南方傳來河水聲。泥土表面佈滿田鼠洞和烏鴉爪痕，最高那株花下的土色明顯較新，提示玩家可 search 找到小型寶物，也可能驚動田鼠群。',
    exits: [
      { direction: 'east', targetRoomId: 'plains_entrance', description: '穿過花田回到平原入口', edgeKind: 'distant_route', edgeNote: '此出口依世界全圖座標不是相鄰一格，實際路程長於相鄰一格，保留為明確特殊路線。' },
      { direction: 'north', targetRoomId: 'hunter_lodge', description: '花田盡頭有一間小木屋', edgeKind: 'distant_route', edgeNote: '此出口依世界全圖座標不是相鄰一格，實際路程長於相鄰一格，保留為明確特殊路線。' },
      { direction: 'south', targetRoomId: 'riverside_fishing', description: '花田南邊傳來潺潺水聲', edgeKind: 'distant_route', edgeNote: '此出口依世界全圖座標不是相鄰一格，實際路程長於相鄰一格，保留為明確特殊路線。' },
    ],
    monsters: [
      { monsterId: 'field_rat', maxCount: 3, respawnSeconds: 25 },
      { monsterId: 'dark_crow', maxCount: 2, respawnSeconds: 35 },
    ],
    mapSymbol: '[S]',
    mapX: 2,
    mapY: 3,
    guardianHints: {
      creature: '向日葵的根部有被挖掘的痕跡，田鼠群可能在地下築了龐大的巢穴。',
      treasure: '最高的那株向日葵底下埋著什麼——泥土顏色與四周不同。',
      spirit: '傳說這片花田是一位花精靈在百年前播下的種子，花瓣中仍殘留她的祝福。',
    },
  },

hunter_lodge: {
    id: 'hunter_lodge',
    name: '獵人小屋',
    zone: 'plains',
    image: 'hunter_lodge.png',
    imagePrompt: '獵人小屋 in plains, quest NPC lodge with hides, antlers, porch, forest edge shadow and hearth light, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function resource, terrain plains, clear lantern light',
    description:
      '原木小屋立在向日葵田北緣，門口掛著風乾獸皮、鹿角與狼牙串，壁爐橙光從窗縫灑到門廊。南方回到花田，西側隱蔽小路能通往森林高處，木牆上釘著野狼腳印拓片與箭矢記號。老獵人坐在階梯上擦拭弓弦，獵犬偶爾朝草叢低吼，提示這裡可接狩獵任務、購買補給或詢問狼群線索。此處還留著可追蹤的任務痕跡、隱蔽標記與危險預兆，適合先仔細調查再推進。牆角或地面標記也會指出下一個安全出口。',
    exits: [
      { direction: 'north', targetRoomId: 'windmill_interior', description: '北側風車側門進入風車內部' },
      { direction: 'south', targetRoomId: 'windmill_farm', description: '南側麥田小路回到風車農場' },
      {
        direction: 'west',
        targetRoomId: 'ancient_treehouse',
        description: '小屋西側獵徑沿獸皮標記鑽入林緣，攀過樹冠繩橋與盤根木階後抵達古老樹屋',
        edgeKind: 'distant_route',
        edgeNote: '獵人小屋到古老樹屋需穿過林緣獵徑並攀上樹冠繩橋，實際路程長於相鄰一格。',
      },
    ],
    monsters: [],
    npcs: ['old_hunter'],
    mapSymbol: '[L]',
    mapX: 3,
    mapY: 3,
    guardianHints: {
      creature: '獵犬偶爾對著樹林方向低吼，老獵人說那裡有隻特別狡猾的狐狸。',
      treasure: '壁爐上方的鹿角之間掛著一把古老的獵弓，木紋在火光下隱現符文。',
      spirit: '老獵人的眼神中藏著數十年的山林經驗，他或許知道森林深處的秘密通道。',
    },
  },

abandoned_minecart: {
    id: 'abandoned_minecart',
    name: '廢棄礦車道',
    zone: 'plains',
    image: 'abandoned_minecart.png',
    imagePrompt: '廢棄礦車道 in plains, resource route room with rusty rails, overturned carts, low cave mouth, cold damp light, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function resource, terrain plains, clear lantern light',
    description:
      '生鏽鐵軌從風車農場東側延伸進低矮洞口，翻覆礦車散落在濕草與碎石間，空氣有鐵鏽、泥水和蝙蝠糞味。西邊可回農場，南方礦道往地底傾斜，車輪印旁有田鼠啃咬過的麻袋。礦車內殘留幾塊閃光礦石，提示這裡是早期採集與洞窟路線入口，但小蝙蝠可能從陰影中飛出。',
    exits: [
      { direction: 'west', targetRoomId: 'windmill_farm', description: '沿著軌道走回風車農場' },
      {
        direction: 'south',
        targetRoomId: 'cave_entrance',
        description: '南側廢棄礦車道順鏽軌下滑，穿過塌方木架與濕石彎道後抵達洞窟入口',
        edgeKind: 'distant_route',
        edgeNote: '廢棄礦車道到洞窟入口需沿礦車斜井與塌方彎道下降，實際路程長於相鄰一格。',
      },
    ],
    monsters: [
      { monsterId: 'field_rat', maxCount: 2, respawnSeconds: 30 },
      { monsterId: 'small_bat', maxCount: 2, respawnSeconds: 35 },
      { monsterId: 'dark_crow', maxCount: 1, respawnSeconds: 50 },
    ],
    mapSymbol: '[M]',
    mapX: 4,
    mapY: 4,
    guardianHints: {
      creature: '翻覆的礦車底下有細碎的爬行聲，田鼠們把這裡當成了新巢穴。',
      treasure: '其中一輛礦車裡還殘留著礦石——仔細翻找也許有值錢的礦物。',
      spirit: '礦道牆壁上刻著工人們的塗鴉和計數痕跡，最後的記錄戛然而止，令人不安。',
    },
  },

riverside_fishing: {
    id: 'riverside_fishing',
    name: '河邊釣場',
    zone: 'plains',
    image: 'riverside_fishing.png',
    imagePrompt: '河邊釣場 in plains, resource fishing room with clear stream, willow trees, flat stones, cool reflected light, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function resource, terrain plains, clear lantern light',
    description:
      '清澈小河蜿蜒穿過平原，柳樹枝條垂成綠色簾幕，幾塊平整大石延伸入水，是天然釣魚平台。北岸通往向日葵田，東側可走向風車內部的水車聲，河泥上有野兔腳印與被田鼠怪物拖走的麥粒。水面銀魚閃動，風帶來濕潤涼意，提示玩家能採集、釣魚或追蹤被沖來的旅人遺物。',
    exits: [
      { direction: 'north', targetRoomId: 'sunflower_field', description: '沿河岸走回向日葵田', edgeKind: 'distant_route', edgeNote: '此出口依世界全圖座標不是相鄰一格，實際路程長於相鄰一格，保留為明確特殊路線。' },
      { direction: 'east', targetRoomId: 'windmill_interior', description: '東側河邊釣場沿濕滑河岸繞過水車溝渠，穿過石板小徑才進入風車內部', edgeKind: 'distant_route', edgeNote: '河邊釣場到風車內部需沿河岸與水車溝渠繞行，實際路程長於相鄰一格。' },
    ],
    monsters: [
      { monsterId: 'wild_rabbit', maxCount: 2, respawnSeconds: 30 },
      { monsterId: 'field_rat', maxCount: 2, respawnSeconds: 25 },
    ],
    mapSymbol: '[~]',
    mapX: 2,
    mapY: 2,
    guardianHints: {
      creature: '水面偶爾翻起巨大的漣漪——河裡似乎有遠不止小魚的東西。',
      treasure: '柳樹根部的河床中卡著一個被水流沖來的皮革小包，裡面或許有旅人的遺物。',
      spirit: '河水的低吟聲中夾雜著古老的旋律，傳說河精靈會在月圓之夜現身。',
    },
  },

windmill_interior: {
    id: 'windmill_interior',
    name: '風車內部',
    zone: 'plains',
    image: 'windmill_interior.png',
    imagePrompt: '風車內部 in plains, resource interior room with gears, millstone, flour dust, narrow sunbeams, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function resource, terrain plains, clear lantern light',
    description:
      '厚重木門後方是緩慢轉動的巨大齒輪與石磨，咔嗒聲在圓形塔身內反覆迴盪，麵粉粉塵漂浮在狹窗光束中。北門回風車農場，西側門通往河邊釣場，樓梯陰影裡能看到田鼠怪物拖麥粒留下的細痕。石磨底座有鬆動板塊，提示玩家可調查機關、找回農夫失物，並小心烏鴉從高處俯衝伏擊。',
    exits: [
      { direction: 'west', targetRoomId: 'riverside_fishing', description: '西側風車內部沿石板小徑折返，穿過水車溝渠與濕滑河岸回到河邊釣場', edgeKind: 'distant_route', edgeNote: '風車內部回河邊釣場需沿石板小徑與水車溝渠折返，實際路程長於相鄰一格。' },
      { direction: 'south', targetRoomId: 'hunter_lodge', description: '南側獵人小屋通往風車農場' },
    ],
    monsters: [
      { monsterId: 'field_rat', maxCount: 3, respawnSeconds: 25 },
      { monsterId: 'dark_crow', maxCount: 1, respawnSeconds: 40 },
    ],
    mapSymbol: '[W]',
    mapX: 3,
    mapY: 2,
    guardianHints: {
      creature: '齒輪間的縫隙中有田鼠築巢的痕跡，牠們偷吃磨好的麵粉。',
      treasure: '石磨的底座有一塊可以取下的石板，下面藏著磨坊主人的私房錢。',
      spirit: '風車的齒輪運轉中蘊含著古代工匠的智慧，據說設計者是一位隱居的矮人技師。',
    },
  },

plains_hare_burrows: {
    id: 'plains_hare_burrows',
    name: '野兔洞群',
    zone: 'plains',
    image: 'plains_hare_burrows.png',
    imagePrompt: '野兔洞群 in plains, combat room with burrow holes, trampled grass, low morning light, wild rabbit encounter, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function combat, terrain plains, clear lantern light',
    description:
      '草坡上密密麻麻分布著野兔洞，洞口被乾草和白色絨毛覆住，泥土帶著剛翻開的濕氣。東邊通往平原入口，南側狼跡小路延伸進更高的草叢，西面能聽見遠處石環傳來的風聲。洞口旁有被咬碎的藥草與旅人皮包碎片，提示玩家可在此練習追擊快速怪物，也能 search 找到野兔拖進洞裡的零碎物品。',
    exits: [
      {
        direction: 'east',
        targetRoomId: 'plains_entrance',
        description: '東側要穿過野兔洞群外圍的低草坡與幾段塌陷洞道，才繞回平原入口',
        edgeKind: 'distant_route',
        edgeNote: '野兔洞群回平原入口需要穿過低草坡、塌陷洞道與入口草路，屬於平原內長路徑。',
      },
      { direction: 'south', targetRoomId: 'plains_wolf_tracks', description: '狼爪印一路延伸向南' },
    ],
    monsters: [
      { monsterId: 'wild_rabbit', maxCount: 4, respawnSeconds: 25 },
      { monsterId: 'field_rat', maxCount: 2, respawnSeconds: 30 },
    ],
    mapSymbol: '[b]',
    mapX: 1,
    mapY: 4,
  },

plains_wolf_tracks: {
    id: 'plains_wolf_tracks',
    name: '狼跡草坡',
    zone: 'plains',
    image: 'plains_wolf_tracks.png',
    imagePrompt: '狼跡草坡 in plains, combat room with tall grass, wolf tracks, broken fence and cold side light, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function resource, terrain plains, clear lantern light',
    description:
      '草坡被數道狼爪印切開，倒伏草葉一路指向南方陰影，空氣裡有濃重獸腥味和泥土濕味。北邊是野兔洞群，東側可回草原小徑，西邊月光小林的樹影在白天也顯得偏暗。折斷的牧羊杖插在路旁，提醒玩家狼群會結伴出現，若任務要求擊殺野狼，這裡是最直接但也最危險的練功點。此處還留著可追蹤的任務痕跡、隱蔽標記與危險預兆，適合先仔細調查再推進。牆角或地面標記也會指出下一個安全出口。',
    exits: [
      { direction: 'north', targetRoomId: 'plains_hare_burrows', description: '回到野兔洞群' },
      {
        direction: 'east',
        targetRoomId: 'grass_path',
        description: '東側要沿狼爪印穿過倒伏高草與破木欄，繞過獸腥泥痕才接回草原小徑中段',
        edgeKind: 'distant_route',
        edgeNote: '狼跡草坡到草原小徑需要沿狼爪印、倒伏高草與破木欄繞行，屬於平原內長路徑。',
      },
      { direction: 'west', targetRoomId: 'plains_moonlit_copse', description: '陰涼樹影覆蓋西方小林' },
    ],
    monsters: [
      { monsterId: 'wild_wolf', maxCount: 3, respawnSeconds: 40 },
      { monsterId: 'wild_rabbit', maxCount: 1, respawnSeconds: 30 },
    ],
    mapSymbol: '[w]',
    mapX: 1,
    mapY: 5,
  },

plains_bandit_hideout: {
    id: 'plains_bandit_hideout',
    name: '盜賊藏身處',
    zone: 'plains',
    image: 'plains_bandit_hideout.png',
    imagePrompt: '盜賊藏身處 in plains, elite combat room with canvas lean-to, stolen crates, campfire smoke, dusk light, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function elite, terrain plains, clear lantern light',
    description:
      '幾頂破帆布棚藏在麥田南側的矮丘後，煙灰、酒瓶和偷來的穀袋散落一地，濕木柴冒出刺鼻黑煙。北方可回廢棄礦車道，西邊通往風車農場背後的藥草坡，往斷橋的撤退腳印也先折回藥草坡再下行。箱子上刻著農場印記，敵人巡邏痕跡提示玩家這裡與風車農場失竊事件相關，戰鬥後可仔細搜查贓物與盜賊留下的線索。',
    exits: [
      {
        direction: 'north',
        targetRoomId: 'abandoned_minecart',
        description: '北側要沿矮丘背面穿過盜賊煙灰、車轍斜坡與碎石軌道，才回到廢棄礦車道',
        edgeKind: 'distant_route',
        edgeNote: '盜賊藏身處到廢棄礦車道需要沿矮丘、車轍斜坡與碎石軌道繞行，屬於平原內長路徑。',
      },
      { direction: 'west', targetRoomId: 'plains_herb_slope', description: '藥草坡在西邊' },
    ],
    monsters: [
      { monsterId: 'bandit', maxCount: 3, respawnSeconds: 55 },
      { monsterId: 'goblin_scout', maxCount: 1, respawnSeconds: 60 },
    ],
    mapSymbol: '[!]',
    mapX: 4,
    mapY: 5,
  },

plains_moonlit_copse: {
    id: 'plains_moonlit_copse',
    name: '月影小林',
    zone: 'plains',
    image: 'plains_moonlit_copse.png',
    imagePrompt: '月影小林 in plains, hidden exploration room with small trees, pale moonlike shade, owl feathers and blue flowers, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function hidden, terrain plains, clear lantern light',
    description:
      '一小片矮樹孤立在平原西側，即使正午也有淡淡月色般的冷光停在樹根附近，藍色小花沿著樹影排列。東邊是狼跡草坡，南方石環在樹縫間若隱若現。林地裡有鷹羽、狼毛和被拖拽過的痕跡，提示玩家這裡是隱藏支線與精英線索的前置地點，仔細 inspect 樹根或花叢可能找到通往石環的提示。此處還留著可追蹤的任務痕跡、隱蔽標記與危險預兆，適合先仔細調查再推進。牆角或地面標記也會指出下一個安全出口。',
    exits: [
      { direction: 'east', targetRoomId: 'plains_wolf_tracks', description: '回到狼跡草坡' },
      { direction: 'south', targetRoomId: 'plains_stone_circle', description: '樹影間露出古老石環' },
    ],
    monsters: [
      { monsterId: 'wind_hawk', maxCount: 1, respawnSeconds: 55 },
      { monsterId: 'dark_crow', maxCount: 2, respawnSeconds: 40 },
    ],
    mapSymbol: '[*]',
    mapX: 0,
    mapY: 5,
  },

plains_herb_slope: {
    id: 'plains_herb_slope',
    name: '藥草斜坡',
    zone: 'plains',
    image: 'plains_herb_slope.png',
    imagePrompt: '藥草斜坡 in plains, resource room with herb patches, bees, sloped grass and amber sunlight, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function resource, terrain plains, clear lantern light',
    description:
      '斜坡朝西展開，野薄荷、止血草和淡紫色小花在石縫間生長，蜜蜂嗡鳴聲被暖風帶得很遠。北邊可回草原小徑，東方盜賊藏身處的煙柱隱約可見，南側斷橋下傳來溪水拍擊聲。地面有採集者留下的小刀痕與籃印，提示玩家可在這裡進行草藥採集或追查被盜補給的去向，但也要留心野豬翻土造成的衝撞路線。此處還留著可追蹤的任務痕跡、隱蔽標記與危險預兆，適合先仔細調查再推進。',
    exits: [
      {
        direction: 'north',
        targetRoomId: 'grass_path',
        description: '北側回草原小徑要沿藥草斜坡上行，穿過蜜蜂草叢與採集者小刀痕',
        edgeKind: 'distant_route',
        edgeNote: '藥草斜坡回草原小徑需要沿斜坡、蜜蜂草叢與採集者刀痕上行，屬於平原內長路徑。',
      },
      { direction: 'east', targetRoomId: 'plains_bandit_hideout', description: '煙味來自東側藏身處' },
      { direction: 'south', targetRoomId: 'plains_broken_bridge', description: '斜坡下方是斷橋' },
    ],
    monsters: [
      { monsterId: 'prairie_boar', maxCount: 2, respawnSeconds: 55 },
      { monsterId: 'wild_rabbit', maxCount: 2, respawnSeconds: 30 },
    ],
    mapSymbol: '[h]',
    mapX: 3,
    mapY: 5,
  },

plains_shepherd_camp: {
    id: 'plains_shepherd_camp',
    name: '牧羊人營地',
    zone: 'plains',
    image: 'plains_shepherd_camp.png',
    imagePrompt: '牧羊人營地 in plains, quest camp room with wool tents, sheep pens, cooking fire and evening light, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function boss, terrain plains, clear lantern light',
    description:
      '牧羊人營地靠著農場南側的緩坡搭起，羊圈木欄被撞歪，灰白羊毛掛在刺木上，煮鍋散出奶油與煙草氣味。西邊可回風車農場，南面藥草坡與盜賊藏身處隔著高草相望。營地木桌上有失蹤羊群的簡圖、狼爪拓印和求助紙條，提示玩家能接到護送、尋物或擊退野獸的支線。',
    exits: [
      {
        direction: 'west',
        targetRoomId: 'windmill_farm',
        description: '西側回風車農場要穿過羊圈外的緩坡、歪斜木欄與農場背面草路入口',
        edgeKind: 'distant_route',
        edgeNote: '牧羊人營地回風車農場需要穿過羊圈緩坡、歪斜木欄與農場背路，屬於平原內長路徑。',
      },
      {
        direction: 'south',
        targetRoomId: 'plains_herb_slope',
        description: '南側羊群踩出的路要穿過高草與散落羊毛，繞過盜賊煙柱才抵達藥草坡',
        edgeKind: 'distant_route',
        edgeNote: '牧羊人營地到藥草斜坡需要沿羊群草路、散落羊毛與盜賊煙柱繞行，屬於平原內長路徑。',
      },
    ],
    monsters: [
      { monsterId: 'wild_wolf', maxCount: 1, respawnSeconds: 50 },
      { monsterId: 'prairie_boar', maxCount: 1, respawnSeconds: 65 },
    ],
    mapSymbol: '[c]',
    mapX: 4,
    mapY: 3,
  },

plains_broken_bridge: {
    id: 'plains_broken_bridge',
    name: '斷木橋',
    zone: 'plains',
    image: 'plains_broken_bridge.png',
    imagePrompt: '斷木橋 in plains, main route event room with collapsed bridge, creek, muddy tracks and stormy light, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function main route, terrain plains, clear lantern light',
    description:
      '小溪上的木橋斷成兩截，濕木板卡在水流中發出沉悶撞擊聲，橋頭泥地滿是盜賊靴印、野豬怪物蹄印和拖行箱子的痕跡。北邊是藥草斜坡，西邊十字路口的路標露出半截，往盜賊藏身處的腳印會先回到北側斜坡再轉東。斷橋雖阻路，旁邊倒木形成可繞行的危險捷徑，提示玩家可調查事件、判斷路線或在戰鬥中撤回較安全道路。',
    exits: [
      { direction: 'north', targetRoomId: 'plains_herb_slope', description: '回到藥草斜坡' },
      {
        direction: 'west',
        targetRoomId: 'crossroads',
        description: '西側要沿斷橋旁泥路繞過倒木與溪水缺口，才回到十字路口路標前',
        edgeKind: 'distant_route',
        edgeNote: '斷木橋回十字路口需要沿泥路、倒木與溪水缺口繞行，屬於平原內長路徑。',
      },
    ],
    monsters: [
      { monsterId: 'wild_wolf', maxCount: 2, respawnSeconds: 75 },
      { monsterId: 'prairie_boar', maxCount: 1, respawnSeconds: 60 },
    ],
    mapSymbol: '[=]',
    mapX: 3,
    mapY: 6,
  },

plains_stone_circle: {
    id: 'plains_stone_circle',
    name: '古石環',
    zone: 'plains',
    image: 'plains_stone_circle.png',
    imagePrompt: '古石環 in plains, hidden event room with standing stones, carved runes, cold dawn light and circling crows, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function hidden, terrain plains, clear lantern light',
    description:
      '十二塊立石圍成粗糙圓環，表面刻著被苔蘚遮住的古老符號，冷風穿過石縫時像有人低語。北邊月影小林遮住入口，東側能回十字路口，南方守望土丘從草浪中隆起。石環中央有焦黑祭痕與烏鴉羽毛，提示玩家可 inspect 符文、觸發區域事件，或找到與平原狼群異常躁動有關的線索。',
    exits: [
      { direction: 'north', targetRoomId: 'plains_moonlit_copse', description: '回到月影小林' },
      {
        direction: 'east',
        targetRoomId: 'old_well',
        description: '東側荒草路要穿過石環外圍倒伏草線與烏鴉羽痕，繞過冷風石縫才通到古井旁',
        edgeKind: 'distant_route',
        edgeNote: '古石環到古井需要穿過倒伏草線、烏鴉羽痕與荒草路，屬於平原內長路徑。',
      },
      { direction: 'south', targetRoomId: 'plains_watch_mound', description: '石環南側是守望土丘', edgeKind: 'distant_route', edgeNote: '此出口依世界全圖座標不是相鄰一格，實際路程長於相鄰一格，保留為明確特殊路線。' },
    ],
    monsters: [
      { monsterId: 'dark_crow', maxCount: 3, respawnSeconds: 45 },
      { monsterId: 'wind_hawk', maxCount: 1, respawnSeconds: 70 },
    ],
    mapSymbol: '[o]',
    mapX: 0,
    mapY: 6,
  },

plains_watch_mound: {
    id: 'plains_watch_mound',
    name: '守望土丘',
    zone: 'plains',
    image: 'plains_watch_mound.png',
    imagePrompt: '守望土丘 in plains, exploration room on grassy mound, old banner pole, broad view to village forest and river, clear wind light, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function resource, terrain plains, clear lantern light',
    description:
      '守望土丘比周圍草地高出一截，腐朽旗杆插在頂端，風從四面吹來，能同時看見北方石環、東方十字路口和更南側陰暗狼穴入口。草坡上留有舊營火灰、破望遠鏡和被風磨平的哨兵刻字。這裡本身不算危險，但提供方向感與戰術視野，提示玩家可在進入更深處前確認路線、整理任務並觀察狼群巡邏。此處還留著可追蹤的任務痕跡、隱蔽標記與危險預兆，適合先仔細調查再推進。',
    exits: [
      { direction: 'north', targetRoomId: 'plains_stone_circle', description: '回到古石環', edgeKind: 'distant_route', edgeNote: '此出口依世界全圖座標不是相鄰一格，實際路程長於相鄰一格，保留為明確特殊路線。' },
      {
        direction: 'east',
        targetRoomId: 'crossroads',
        description: '東側下坡要沿守望土丘旗杆影子穿過草浪與舊營火灰，才回到十字路口',
        edgeKind: 'distant_route',
        edgeNote: '守望土丘回十字路口需要沿旗杆影子、草浪與舊營火灰下坡，屬於平原內長路徑。',
      },
      { direction: 'south', targetRoomId: 'plains_alpha_den', description: '南坡通往狼群首領的棲地', edgeKind: 'distant_route', edgeNote: '此出口依世界全圖座標不是相鄰一格，實際路程長於相鄰一格，保留為明確特殊路線。' },
    ],
    mapSymbol: '[^]',
    mapX: 1,
    mapY: 7,
  },

plains_alpha_den: {
    id: 'plains_alpha_den',
    name: '狼群首領棲地',
    zone: 'plains',
    image: 'plains_alpha_den.png',
    imagePrompt: '狼群首領棲地 in plains, boss room with grass den, bones, torn banners, red dusk light and wolf silhouettes, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function boss, terrain plains, clear lantern light',
    description:
      '土丘南面的高草被踩成圓形空地，中央堆著白骨、破披風和被咬碎的木盾，血腥味與濕草味混在低沉狼嚎裡。北方斜坡回到守望土丘，東面斷橋方向仍有盜賊丟下的贓物痕跡，西側草牆幾乎封死，只留下狼群出入的窄道。這裡是平原狼群首領活動的棲地，草叢邊緣有多組伏擊腳印與巨大爪痕；玩家進入前應確認藥水、裝備和任務目標，戰鬥後可搜查骨堆取得區域事件線索。空地邊緣插著半截路標，上面還留有從十字路口拖來的鐵釘，顯示狼群已威脅主要道路。風穿過草牆時會暴露幾條短暫撤退縫隙，但狼王嚎叫後這些路徑很快會被狼群封住。',
    exits: [
      { direction: 'north', targetRoomId: 'plains_watch_mound', description: '沿斜坡撤回守望土丘', edgeKind: 'distant_route', edgeNote: '此出口依世界全圖座標不是相鄰一格，實際路程長於相鄰一格，保留為明確特殊路線。' },
      { direction: 'east', targetRoomId: 'plains_broken_bridge', description: '血跡小徑通往斷木橋', edgeKind: 'distant_route', edgeNote: '此出口依世界全圖座標不是相鄰一格，實際路程長於相鄰一格，保留為明確特殊路線。' },
    ],
    monsters: [
      { monsterId: 'wolf_king', maxCount: 1, respawnSeconds: 1800 },
      { monsterId: 'wild_wolf', maxCount: 2, respawnSeconds: 60 },
    ],
    mapSymbol: '[A]',
    mapX: 0,
    mapY: 7,
  },

// ─── Area 6: 暗影森林擴充 (Lv 12-20) ────────────────────

  firefly_trail: {
    id: 'firefly_trail',
    name: '螢火蟲小徑',
    zone: 'dark_forest',
    image: 'firefly_trail.png',
    imagePrompt: '螢火蟲小徑 in dark_forest, main route room lit by magical fireflies, moss carpet, blue-green glow and hidden predators, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function hidden, terrain fantasy terrain, clear lantern light',
    description:
      '密林中這條小徑被數以千計的螢火蟲照亮，藍綠光點沿灌木排列成夢幻走廊，腳下苔蘚柔軟得像濕地毯。西邊可回密林小道，南方螢光逐漸稀疏並轉成毒霧，東側銀光指向精靈祭壇。每一步都踩出微弱磷光，也暴露行蹤；若某片螢火突然熄滅，通常代表暗影狼或蜘蛛正從側面靠近。' +
      '灌木下有精靈胸針、細小骨片和被拖曳的鞋印，提醒玩家這裡既是主路也是伏擊線索點。螢火會短暫聚成箭頭，指向祭壇或毒霧沼澤，適合用 look 判斷下一步任務方向，也能作為受傷時撤回密林小道的光標與安全提示。',
    exits: [
      { direction: 'west', targetRoomId: 'dense_trail', description: '沿著光點回到密林小道', edgeKind: 'distant_route', edgeNote: '此出口依世界全圖座標不是相鄰一格，實際路程長於相鄰一格，保留為明確特殊路線。' },
      { direction: 'south', targetRoomId: 'deep_poison_swamp', description: '南側螢火蟲小徑沿熄光苔徑下沉，穿過潮濕樹根與紫毒霧帶抵達毒霧沼澤深處', edgeKind: 'distant_route', edgeNote: '螢火蟲小徑到毒霧沼澤深處需沿熄光苔徑與毒霧帶下沉，實際路程長於相鄰一格。' },
      { direction: 'east', targetRoomId: 'elf_altar', description: '一道柔和的銀光從東方透出', edgeKind: 'distant_route', edgeNote: '此出口依世界全圖座標不是相鄰一格，實際路程長於相鄰一格，保留為明確特殊路線。' },
    ],
    monsters: [
      { monsterId: 'shadow_wolf', maxCount: 2, respawnSeconds: 50 },
      { monsterId: 'giant_spider', maxCount: 1, respawnSeconds: 55 },
    ],
    mapSymbol: ' * ',
    mapX: 1,
    mapY: 7,
    guardianHints: {
      creature: '螢火蟲突然熄滅的區域通常意味著掠食者正潛伏在附近。',
      treasure: '苔蘚中包裹著一枚精靈族的胸針，螢光映照下若隱若現。',
      spirit: '這些螢火蟲並非普通昆蟲——牠們是精靈族魔法實驗的殘留，體內流淌著魔力。',
    },
  },

deep_poison_swamp: {
    id: 'deep_poison_swamp',
    name: '毒霧沼澤深處',
    zone: 'dark_forest',
    image: 'deep_poison_swamp.png',
    imagePrompt: '毒霧沼澤深處 in dark_forest, elite resource swamp room with purple toxic fog, dead trunks, glowing poisonous mushrooms, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function elite, terrain swamp, clear lantern light',
    description:
      '沼澤在此處變得更加深邃，濃厚的紫色毒霧從水面蒸騰而起，遮蔽了一切視線。' +
      '枯朽的樹幹如骸骨般從泥漿中伸出，上面覆蓋著發光的毒蘑菇。' +
      '四處傳來此起彼伏的咕嚕聲和蛙鳴——這裡的一切都帶著毒性。' +
      '此處的足跡、聲響或資源痕跡會提示玩家放慢腳步，先觀察危險再採集或開戰。',
    exits: [
      { direction: 'west', targetRoomId: 'firefly_trail', description: '西側毒霧沼澤深處沿紫毒霧帶回穿，越過潮濕樹根與熄光苔徑回到螢火蟲小徑', edgeKind: 'distant_route', edgeNote: '毒霧沼澤深處回螢火蟲小徑需沿毒霧帶與熄光苔徑回穿，實際路程長於相鄰一格。' },
      { direction: 'north', targetRoomId: 'dark_forest_raven_perch', description: '北側黑鴉羽毛標出高枝平台' },
      { direction: 'south', targetRoomId: 'dark_forest_witch_hut', description: '南側銀苔小徑回到女巫小屋' },
      { direction: 'east', targetRoomId: 'mushroom_swamp', description: '沼澤邊緣連接著蘑菇沼澤' },
    ],
    monsters: [
      { monsterId: 'poison_toad', maxCount: 3, respawnSeconds: 60 },
      { monsterId: 'poison_snake', maxCount: 3, respawnSeconds: 40 },
      { monsterId: 'giant_spider', maxCount: 1, respawnSeconds: 50 },
    ],
    mapSymbol: '[!]',
    mapX: 0,
    mapY: 8,
    guardianHints: {
      creature: '毒霧最濃的地方棲息著巨型毒蛙，牠們的舌頭射程比你想像的更遠。',
      treasure: '枯樹根部的泥漿中有一顆散發幽光的毒液結晶，是稀有的煉金材料。',
      spirit: '這片沼澤曾是一座花園，被某次魔法災難扭曲成了這副模樣。花園主人的悲嘆仍迴盪在毒霧中。',
    },
  },

elf_altar: {
    id: 'elf_altar',
    name: '精靈祭壇',
    zone: 'dark_forest',
    image: 'elf_altar.png',
    imagePrompt: '精靈祭壇 in dark_forest, landmark room with white stone altar, moon emblem, silver healing light and crystal orb, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function resource, terrain stone, clear lantern light',
    description:
      '古老白色石柱圍成半圓，中央祭壇刻著精靈族月亮紋章，銀白光輝把四周暗影隔在石階之外。西邊螢火蟲小徑仍在閃爍，南方枯萎之林像被詛咒燒乾，祭壇水晶球緩慢旋轉並散出淡淡治癒氣息。石面有新鮮爪痕與乾涸血跡，提示這裡既是地標與劇情節點，也是暗影生物試圖突破結界的前線。' +
      '水晶球內偶爾浮現森林深處與古樹心庭的影像，旁邊石盆殘留可採集的銀色露水。玩家可在此 inspect 月亮紋章，確認詛咒來源、取得支線提示，或沿南側道路追蹤枯萎蔓延的方向，並判斷結界仍能提供短暫庇護。',
    exits: [
      { direction: 'west', targetRoomId: 'firefly_trail', description: '回到螢火蟲小徑', edgeKind: 'distant_route', edgeNote: '此出口依世界全圖座標不是相鄰一格，實際路程長於相鄰一格，保留為明確特殊路線。' },
      { direction: 'south', targetRoomId: 'withered_forest', description: '南側精靈祭壇沿銀光石階下行，穿過破裂結界與灰白枯枝線抵達枯萎之林', edgeKind: 'distant_route', edgeNote: '精靈祭壇到枯萎之林需沿銀光石階與破裂結界下行，實際路程長於相鄰一格。' },
    ],
    monsters: [
      { monsterId: 'treant', maxCount: 2, respawnSeconds: 70 },
      { monsterId: 'shadow_wolf', maxCount: 1, respawnSeconds: 60 },
    ],
    mapSymbol: '[E]',
    mapX: 3,
    mapY: 8,
    guardianHints: {
      creature: '祭壇的守護樹精對靠近的暗影生物充滿敵意，但對友善的訪客並不主動攻擊。',
      treasure: '水晶球中封存著精靈女王的一縷記憶，觸碰它也許能習得遠古的精靈魔法。',
      spirit: '祭壇的銀光是精靈族最後的祭司以生命為代價維持的結界，她的靈魂仍在守護此地。',
    },
  },

withered_forest: {
    id: 'withered_forest',
    name: '枯萎之林',
    zone: 'dark_forest',
    image: 'withered_forest.png',
    imagePrompt: '枯萎之林 in dark_forest, combat room of dead gray trees, ash-covered ground, purple cracks and moving treants, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function resource, terrain ash, clear lantern light',
    description:
      '所有的樹木都失去了生機，灰白色的枝幹扭曲成詭異的形狀，如同無數伸出的手臂。' +
      '地面覆蓋著厚厚的灰燼，踩上去會揚起令人窒息的塵埃。' +
      '枯木之間偶爾傳來沉重的腳步聲——暗黑樹人在這裡遊蕩。' +
      '此處的足跡、聲響或資源痕跡會提示玩家放慢腳步，先觀察危險再採集或開戰。',
    exits: [
      { direction: 'north', targetRoomId: 'elf_altar', description: '北側枯萎之林沿灰白枯枝線回穿，越過破裂結界與銀光石階回到精靈祭壇', edgeKind: 'distant_route', edgeNote: '枯萎之林回精靈祭壇需沿枯枝線與銀光石階回穿，實際路程長於相鄰一格。' },
      { direction: 'south', targetRoomId: 'dark_treehollow', description: '最大的枯木底部有個漆黑的洞穴' },
      { direction: 'east', targetRoomId: 'deep_forest', description: '枯林邊緣連接著森林深處' },
    ],
    monsters: [
      { monsterId: 'shadow_treant', maxCount: 1, respawnSeconds: 900 },
      { monsterId: 'shadow_wolf', maxCount: 2, respawnSeconds: 50 },
    ],
    mapSymbol: '[X]',
    mapX: 1,
    mapY: 9,
    guardianHints: {
      creature: '看似靜止的枯木中有些是暗黑樹人——注意觀察樹幹上是否有脈動的紫色紋路。',
      treasure: '灰燼之下埋著被暗影力量結晶化的樹心，是鍛造暗屬性武器的關鍵材料。',
      spirit: '這片枯林曾是森林最茂盛的區域，一場暗影詛咒讓所有生命枯萎。解除詛咒的線索就在樹人身上。',
    },
  },

dark_treehollow: {
    id: 'dark_treehollow',
    name: '黑暗樹洞',
    zone: 'dark_forest',
    image: 'dark_treehollow.png',
    imagePrompt: '黑暗樹洞 in dark_forest, hidden elite room inside dead giant tree, purple fungi, hollow chamber and deep shadow, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function elite, terrain chamber, clear lantern light',
    description:
      '一棵直徑超過十公尺的千年巨木已經完全枯死，中空的樹幹形成了一座天然的暗室。' +
      '樹洞內壁上覆蓋著發出幽紫色光芒的菌類，空氣中充斥著腐朽與魔力交織的氣味。' +
      '樹洞深處似乎通往更深層的空間，黑暗中有什麼東西在低吟。' +
      '此處的足跡、聲響或資源痕跡會提示玩家放慢腳步，先觀察危險再採集或開戰。',
    exits: [
      { direction: 'north', targetRoomId: 'withered_forest', description: '爬出樹洞回到枯萎之林' },
      { direction: 'west', targetRoomId: 'dark_forest_moonwell', description: '西側樹洞出口通往月影井' },
      { direction: 'east', targetRoomId: 'elf_ruins', description: '東側樹根路回到精靈遺跡' },
    ],
    monsters: [
      { monsterId: 'shadow_treant', maxCount: 1, respawnSeconds: 900 },
      { monsterId: 'forest_spider', maxCount: 1, respawnSeconds: 80 },
      { monsterId: 'giant_spider', maxCount: 2, respawnSeconds: 55 },
    ],
    mapSymbol: '[D]',
    mapX: 1,
    mapY: 10,
    guardianHints: {
      creature: '樹洞最深處的黑暗中藏著蝙蝠群的巢穴，驚動牠們會引發恐怖的蝙蝠潮。',
      treasure: '內壁的菌類下有精靈族的封印紋章，破解它可能開啟隱藏的地下通道。',
      spirit: '這棵巨木是森林最初的守護樹，它的死亡標誌著暗影力量的勝利。但在枯朽的核心中，最後一絲生命之力仍在頑強地跳動。',
    },
  },

dark_forest_spider_web: {
    id: 'dark_forest_spider_web',
    name: '蛛網密室',
    zone: 'dark_forest',
    image: 'dark_forest_spider_web.png',
    imagePrompt: '蛛網密室 in dark_forest, combat room with giant layered webs, trapped bones, pale shafts of light and spider silhouettes, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function resource, terrain fantasy terrain, clear lantern light',
    description:
      '密林東側的樹枝被巨大蛛網纏成半封閉空間，白色絲線層層交疊，困住腐葉、獸骨和破裂背包。西邊可退回密林小道，南側根橋方向傳來低沉木頭摩擦聲，蛛網間有幾條通往高處的細線。這裡是巨型蜘蛛的狩獵點，玩家若觸碰閃光物品可能觸發伏擊，但也能找到被困旅人留下的補給與任務證物。此處還留著可追蹤的任務痕跡、隱蔽標記與危險預兆，適合先仔細調查再推進。',
    exits: [
      {
        direction: 'west',
        targetRoomId: 'dense_trail',
        description: '西側必須沿被蛛絲封住的枝縫慢慢退回，穿過兩段下垂蛛網後才接密林小道',
        edgeKind: 'distant_route',
        edgeNote: '蛛網密室回密林小道需要穿過封閉蛛網枝縫，屬於長路徑。',
      },
      { direction: 'south', targetRoomId: 'dark_forest_root_bridge', description: '粗大樹根延伸向南' },
    ],
    monsters: [
      { monsterId: 'giant_spider', maxCount: 3, respawnSeconds: 45 },
      { monsterId: 'forest_spider', maxCount: 1, respawnSeconds: 60 },
    ],
    mapSymbol: '[s]',
    mapX: 3,
    mapY: 9,
  },

dark_forest_raven_perch: {
    id: 'dark_forest_raven_perch',
    name: '黑鴉棲枝',
    zone: 'dark_forest',
    image: 'dark_forest_raven_perch.png',
    imagePrompt: '黑鴉棲枝 in dark_forest, exploration room with leaning dead trees, black birds, feathers and cold moonlit branches, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function resource, terrain fantasy terrain, clear lantern light',
    description:
      '幾株傾斜枯木在沼澤北側交錯成高枝平台，黑鴉安靜排列在枝頭，只有羽毛偶爾落進霧中。東方螢火小徑透出微光，南邊毒霧沼澤冒著紫泡，西側可繞往月井方向。枝條上掛著亮片、骨戒和被叼來的紙片，提示玩家可 search 鳥巢尋找線索，但驚動鳥群會引來暗影生物注意。',
    exits: [
      {
        direction: 'east',
        targetRoomId: 'firefly_trail',
        description: '東側螢火光隔著枯枝平台閃動，需要沿黑鴉標記的枝路繞下才接到螢火小徑',
        edgeKind: 'distant_route',
        edgeNote: '黑鴉棲枝到螢火小徑需要沿高枝平台下降，屬於長路徑。',
      },
      { direction: 'south', targetRoomId: 'deep_poison_swamp', description: '南側毒霧沼澤在低處翻泡' },
    ],
    monsters: [
      { monsterId: 'forest_spider', maxCount: 2, respawnSeconds: 60 },
      { monsterId: 'shadow_wolf', maxCount: 1, respawnSeconds: 55 },
    ],
    mapSymbol: '[r]',
    mapX: 0,
    mapY: 7,
  },

dark_forest_root_bridge: {
    id: 'dark_forest_root_bridge',
    name: '盤根橋',
    zone: 'dark_forest',
    image: 'dark_forest_root_bridge.png',
    imagePrompt: '盤根橋 in dark_forest, main route room with giant exposed roots forming bridge over black stream, dim green light, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function resource, terrain bridge, clear lantern light',
    description:
      '數條巨大樹根橫跨黑水溪，形成濕滑窄橋，溪底反射出不屬於天空的綠色微光。北面蛛網密室懸著白絲，西側可回精靈遺跡，南方暗影空地被低霧包圍。根橋兩側沒有護欄，木質表面有狼爪與樹精刻痕，提示玩家這是繞行與撤退的重要路線，但戰鬥中被逼到邊緣會非常危險。盤根橋周邊的地面材質、相鄰地貌、邊界標記與回程方向需要清楚呈現，讓隊伍能從北南東西的路徑線索判斷此處是通行、採集、服務、封閉或跨區銜接點。',
    exits: [
      { direction: 'north', targetRoomId: 'dark_forest_spider_web', description: '蛛網掛滿北側枝條' },
      { direction: 'west', targetRoomId: 'elf_ruins', description: '西側盤根橋接回精靈遺跡' },
      { direction: 'east', targetRoomId: 'dark_forest_bramble_maze', description: '東側根橋通向荊棘迷宮' },
      { direction: 'south', targetRoomId: 'dark_forest_shadow_clearing', description: '南方空地被黑霧籠罩' },
    ],
    monsters: [
      { monsterId: 'shadow_wolf', maxCount: 2, respawnSeconds: 45 },
      { monsterId: 'treant', maxCount: 1, respawnSeconds: 75 },
    ],
    mapSymbol: '[=]',
    mapX: 3,
    mapY: 10,
  },

dark_forest_witch_hut: {
    id: 'dark_forest_witch_hut',
    name: '森林女巫小屋',
    zone: 'dark_forest',
    image: 'dark_forest_witch_hut.png',
    imagePrompt: '森林女巫小屋 in dark_forest, quest elite room with crooked hut, hanging herbs, green cauldron light and root doorway, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function elite, terrain root, clear lantern light',
    description:
      '歪斜小屋架在樹根與石塊之間，乾草藥、骨鈴和發光蘑菇掛滿屋簷，綠色坩堝光從門縫溢出。東邊枯萎之林透出灰白枝影，通往荊棘迷宮的根痕會先繞到月井南側，屋後暗門通向更深的密林。桌上有被撕開的森林地圖和未完成咒文，提示玩家這裡是任務與精英遭遇點，可調查女巫如何操縱森林詛咒。此處還留著可追蹤的任務痕跡、隱蔽標記與危險預兆，適合先仔細調查再推進。牆角或地面標記也會指出下一個安全出口。',
    exits: [
      { direction: 'north', targetRoomId: 'deep_poison_swamp', description: '北側銀苔小徑通往毒霧沼澤邊緣' },
      { direction: 'south', targetRoomId: 'dark_forest_moonwell', description: '月井冷光在南方閃爍' },
      {
        direction: 'west',
        targetRoomId: 'withered_forest',
        description: '屋後小徑先穿過掛滿骨鈴的根門，再繞過灰化樹籬才進入枯萎之林',
        edgeKind: 'distant_route',
        edgeNote: '森林女巫小屋到枯萎之林需要穿越根門與灰化樹籬，屬於長路徑。',
      },
    ],
    monsters: [
      { monsterId: 'forest_witch', maxCount: 1, respawnSeconds: 1800 },
      { monsterId: 'forest_spider', maxCount: 1, respawnSeconds: 75 },
    ],
    mapSymbol: '[W]',
    mapX: 0,
    mapY: 9,
  },

dark_forest_moonwell: {
    id: 'dark_forest_moonwell',
    name: '月影井',
    zone: 'dark_forest',
    image: 'dark_forest_moonwell.png',
    imagePrompt: '月影井 in dark_forest, resource hidden room with circular stone well, moon reflection, blue water and silver moss, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function hidden, terrain stone, clear lantern light',
    description:
      '圓形石井藏在銀苔覆蓋的小空地中，井水不映樹冠，只映出一輪蒼白月亮，周圍空氣帶著清冷礦物味。東邊黑暗樹洞隱約透出幽光，南面荊棘迷宮堵住去路。井沿有精靈刻痕與水滴形凹槽，提示玩家可採集月井水、解讀符文，或取得解除毒霧與暗影詛咒的材料。',
    exits: [
      { direction: 'east', targetRoomId: 'dark_treehollow', description: '東側枯木洞通往黑暗樹洞' },
      { direction: 'north', targetRoomId: 'dark_forest_witch_hut', description: '北側銀苔小徑回到女巫小屋' },
    ],
    monsters: [
      { monsterId: 'dark_elf_archer', maxCount: 1, respawnSeconds: 80 },
      { monsterId: 'shadow_wolf', maxCount: 1, respawnSeconds: 60 },
    ],
    mapSymbol: '[m]',
    mapX: 0,
    mapY: 10,
  },

dark_forest_hunter_blind: {
    id: 'dark_forest_hunter_blind',
    name: '獵人瞭望棚',
    zone: 'dark_forest',
    image: 'dark_forest_hunter_blind.png',
    imagePrompt: '獵人瞭望棚 in dark_forest, exploration room with camouflaged wooden blind, rope ladder, arrows and filtered forest light, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function resource, terrain forest, clear lantern light',
    description:
      '一座偽裝成枝葉堆的木製瞭望棚架在密林之中，繩梯被苔蘚染成暗綠，棚內留下箭袋、磨損望遠筒和幾張狼群巡路草圖。北側林間小路隱入樹影，南方密林深處傳來細碎聲響，東方能看見暗精靈弓手活動的細長影子。這裡提供安全觀察角度，提示玩家可查看怪物動線、選擇埋伏或撤退路線。',
    exits: [
      {
        direction: 'north',
        targetRoomId: 'ancient_treehouse',
        description: '北側繩梯要繞過獵棚偽裝枝葉，沿樹幹螺旋木階爬回古老樹屋平台',
        edgeKind: 'distant_route',
        edgeNote: '獵人瞭望棚到古老樹屋需要沿偽裝繩梯與螺旋木階上行，屬於長路徑。',
      },
      {
        direction: 'south',
        targetRoomId: 'dark_forest_spider_web',
        description: '南側蛛網密室藏在枝葉後方，必須沿獵人繩標下降並穿過幾層白絲屏障',
        edgeKind: 'distant_route',
        edgeNote: '獵人瞭望棚到蛛網密室需要沿繩標下降並穿越蛛絲屏障，屬於長路徑。',
      },
      {
        direction: 'east',
        targetRoomId: 'dark_forest_root_bridge',
        description: '東側盤根橋露出一角，需要沿瞭望棚外緣下坡，再繞過黑水溪岸才抵達',
        edgeKind: 'distant_route',
        edgeNote: '獵人瞭望棚到盤根橋需要下坡並繞過黑水溪岸，屬於長路徑。',
      },
    ],
    monsters: [
      { monsterId: 'dark_elf_archer', maxCount: 1, respawnSeconds: 75 },
      { monsterId: 'forest_spider', maxCount: 1, respawnSeconds: 60 },
    ],
    mapSymbol: '[H]',
    mapX: 4,
    mapY: 8,
  },

dark_forest_bramble_maze: {
    id: 'dark_forest_bramble_maze',
    name: '荊棘迷宮',
    zone: 'dark_forest',
    image: 'dark_forest_bramble_maze.png',
    imagePrompt: '荊棘迷宮 in dark_forest, main route room of thorn walls, torn cloth, narrow passages and green-black light, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function resource, terrain fantasy terrain, clear lantern light',
    description:
      '活著般的荊棘牆在月井南面交錯移動，黑刺上掛著撕裂布條、暗紅樹液和被纏住的獸骨。北邊是更深的林間通道，東側林間小路蜿蜒前行，往女巫小屋的根痕需繞行更遠。道路會被枝條短暫封閉，提示玩家需要觀察方向、避開纏繞伏擊，並在戰鬥中利用迷宮作為撤退或繞行路線。',
    exits: [
      { direction: 'west', targetRoomId: 'dark_forest_root_bridge', description: '西側盤根路通向月井方向' },
      { direction: 'east', targetRoomId: 'dark_forest_shadow_clearing', description: '荊棘縫隙通向暗影空地', edgeKind: 'distant_route', edgeNote: '此出口依世界全圖座標不是相鄰一格，實際路程長於相鄰一格，保留為明確特殊路線。' },
    ],
    monsters: [
      { monsterId: 'forest_spider', maxCount: 2, respawnSeconds: 60 },
      { monsterId: 'treant', maxCount: 1, respawnSeconds: 90 },
    ],
    mapSymbol: '[#]',
    mapX: 4,
    mapY: 10,
  },

dark_forest_shadow_clearing: {
    id: 'dark_forest_shadow_clearing',
    name: '暗影空地',
    zone: 'dark_forest',
    image: 'dark_forest_shadow_clearing.png',
    imagePrompt: '暗影空地 in dark_forest, elite combat clearing with black mist, claw marks, broken moonlight and circling wolves, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function elite, terrain fantasy terrain, clear lantern light',
    description:
      '黑霧在林間空地低低旋轉，月光落到地面前就被撕成碎片，周圍樹皮佈滿巨大爪痕。北方盤根橋可作撤退路，西邊古樹心庭傳來深沉心跳般的聲音，南方密林深處隱約有暗影蠕動。地面有狼群圍獵形成的圓形足跡，提示玩家這裡是精英遭遇與 Boss 前哨，進入後應準備群體戰與中斷技能。此處還留著可追蹤的任務痕跡、隱蔽標記與危險預兆，適合先仔細調查再推進。牆角或地面標記也會指出下一個安全出口。',
    exits: [
      { direction: 'north', targetRoomId: 'dark_forest_root_bridge', description: '盤根橋在北方黑水溪上' },
      { direction: 'west', targetRoomId: 'dark_forest_bramble_maze', description: '荊棘迷宮可作側向撤退', edgeKind: 'distant_route', edgeNote: '此出口依世界全圖座標不是相鄰一格，實際路程長於相鄰一格，保留為明確特殊路線。' },
      { direction: 'south', targetRoomId: 'dark_forest_elder_grove', description: '沉重心跳聲來自南方老樹叢', edgeKind: 'distant_route', edgeNote: '此出口依世界全圖座標不是相鄰一格，實際路程長於相鄰一格，保留為明確特殊路線。' },
    ],
    monsters: [
      { monsterId: 'shadow_wolf', maxCount: 3, respawnSeconds: 45 },
      { monsterId: 'dark_elf_archer', maxCount: 1, respawnSeconds: 75 },
    ],
    mapSymbol: '[!]',
    mapX: 3,
    mapY: 11,
  },

dark_forest_elder_grove: {
    id: 'dark_forest_elder_grove',
    name: '古樹心庭',
    zone: 'dark_forest',
    image: 'dark_forest_elder_grove.png',
    imagePrompt: '古樹心庭 in dark_forest, boss landmark room with ancient heart tree, glowing roots, ruined elven seals and oppressive shadow, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function boss, terrain fantasy terrain, clear lantern light',
    description:
      '古樹心庭被環狀樹根圍住，中央巨木的樹心裂開，暗紫光從裂縫中一下一下跳動，像整座森林的病灶。北方可退回精靈遺跡，西北方樹洞通往黑暗樹洞，東側隱約連回暗影空地的破碎結界。地上散落精靈封印石、腐化樹心碎片與狼王爪痕，這裡是暗影森林大型事件鉤子與最終地標；玩家需要完成線索、準備隊伍或至少整理補給再挑戰暗影樹靈。' +
      '巨木周圍的根牆會隨心跳聲緩慢開合，短暫露出可撤退的北側缺口，也可能在戰鬥中封住側路。腐化樹心旁有可 loot 的結晶化樹皮與狼群戰利品，暗示擊敗首領後能取得區域推進證物並削弱森林詛咒。',
    exits: [
      { direction: 'north', targetRoomId: 'dark_forest_shadow_clearing', description: '回到暗影空地', edgeKind: 'distant_route', edgeNote: '此出口依世界全圖座標不是相鄰一格，實際路程長於相鄰一格，保留為明確特殊路線。' },
      {
        direction: 'west',
        targetRoomId: 'dark_treehollow',
        description: '西側裂根要等根牆開合時穿過，沿腐化樹心外圈繞到黑暗樹洞入口',
        edgeKind: 'distant_route',
        edgeNote: '古樹心庭到黑暗樹洞需要穿過開合根牆與腐化樹心外圈，屬於長路徑。',
      },
      {
        direction: 'east',
        targetRoomId: 'elf_ruins',
        description: '東側破碎結界必須沿精靈封印石繞行，穿過暗影根牆後才回到精靈遺跡',
        edgeKind: 'distant_route',
        edgeNote: '古樹心庭到精靈遺跡需要沿封印石與暗影根牆繞行，屬於長路徑。',
      },
    ],
    monsters: [
      { monsterId: 'shadow_treant', maxCount: 1, respawnSeconds: 1800 },
      { monsterId: 'shadow_wolf_alpha', maxCount: 1, respawnSeconds: 1800 },
    ],
    mapSymbol: '[B]',
    mapX: 2,
    mapY: 11,
  },

// ─── Area 7: 水晶洞窟擴充 (Lv 18-28) ────────────────────

  amethyst_corridor: {
    id: 'amethyst_corridor',
    name: '紫水晶走廊',
    zone: 'crystal_cave',
    image: 'amethyst_corridor.png',
    imagePrompt: '紫水晶走廊 in crystal_cave, main route room made of amethyst pillars, violet arches, dizzying magic light, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function main route, terrain fantasy terrain, clear lantern light',
    description:
      '這段洞窟幾乎完全由紫水晶構成，六角晶柱從地面與天頂同時生長，在中央匯聚成拱門，淡紫光像薄霧般貼著皮膚。東邊回螢光隧道，南方可聽見翡翠池水滴聲，牆面折射會讓方向感短暫錯亂。規則過頭的晶柱像在呼吸，提示玩家可能遭遇水晶守衛，也可採集高純度紫晶材料。',
    exits: [
      { direction: 'east', targetRoomId: 'luminous_tunnel', description: '回到螢光隧道' },
      { direction: 'south', targetRoomId: 'jade_pool', description: '走廊盡頭傳來清脆的水滴聲' },
    ],
    monsters: [
      { monsterId: 'crystal_lizard', maxCount: 2, respawnSeconds: 50 },
      { monsterId: 'crystal_guardian', maxCount: 1, respawnSeconds: 900 },
    ],
    mapSymbol: '[A]',
    mapX: 0,
    mapY: 8,
    guardianHints: {
      creature: '水晶魔像平時偽裝成普通的晶柱——注意那些形狀過於規則的水晶。',
      treasure: '紫水晶拱門的頂端鑲嵌著一顆品質極高的魔力水晶，取下它需要特殊工具。',
      spirit: '紫水晶的眩暈效果並非天然——這是地底種族設置的防衛機制，阻止入侵者深入。',
    },
  },

jade_pool: {
    id: 'jade_pool',
    name: '翡翠池',
    zone: 'crystal_cave',
    image: 'jade_pool.png',
    imagePrompt: '翡翠池 in crystal_cave, resource room with emerald pool, mirror water, green crystal bed and healing mist, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function resource, terrain water, clear lantern light',
    description:
      '碧綠如翡翠的池水佔據洞窟中央，水面平靜得像鏡子，倒映四周水晶光芒與低矮穹頂。北面回紫水晶走廊，東側裂縫透出鑽石白光，南方水流跌向地底瀑布。空氣帶著薄荷般清香，池底水晶碎片閃動，提示玩家可採集治癒材料，但水面漣漪也可能暴露潛伏蜥蜴。',
    exits: [
      { direction: 'north', targetRoomId: 'amethyst_corridor', description: '回到紫水晶走廊' },
      { direction: 'east', targetRoomId: 'diamond_chamber', description: '池畔的裂縫透出刺眼的白光' },
      { direction: 'south', targetRoomId: 'underground_waterfall', description: '池水流向南方，傳來瀑布的轟鳴' },
    ],
    monsters: [
      { monsterId: 'crystal_lizard', maxCount: 2, respawnSeconds: 45 },
      { monsterId: 'cave_bat', maxCount: 2, respawnSeconds: 40 },
      { monsterId: 'crystal_cave_prism_wisp', maxCount: 1, respawnSeconds: 75 },
    ],
    mapSymbol: '[J]',
    mapX: 0,
    mapY: 9,
    guardianHints: {
      creature: '池水中偶爾泛起漣漪——水晶蜥蜴會潛入翡翠池中伏擊靠近喝水的獵物。',
      treasure: '池底中央有一顆巨大的翡翠原石，據說是地底種族的皇族象徵。',
      spirit: '翡翠池的治癒之力來自地脈深處的生命能量，這裡是大地之心的脈搏之一。',
    },
  },

diamond_chamber: {
    id: 'diamond_chamber',
    name: '鑽石密室',
    zone: 'crystal_cave',
    image: 'diamond_chamber.png',
    imagePrompt: '鑽石密室 in crystal_cave, hidden boss room with diamond walls, sealed ancient book, blinding prismatic light, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function boss, terrain fantasy terrain, clear lantern light',
    description:
      '穿過池畔狹縫後，眼前是不大卻極壯觀的鑽石密室，四壁、天頂與地面嵌滿切面銳利的結晶，光線反覆折射到近乎刺眼。西側裂縫回翡翠池，中央石台封著一本古書，旁邊刻有四元素水晶凹槽。這裡是隱藏、任務與精英戰鬥房，玩家若 inspect 封印或嘗試取書，會喚醒古代守衛。' +
      '密室每個切面都映出不同年代的地底王國影像，能提供祭壇謎題與棱鏡門線索。地面沒有多餘出口，戰鬥前要確認撤回裂縫的位置，否則容易被守衛逼到石台旁，並被強光干擾方向與視線。石台下方還有可調查的封印裂縫與暗格。',
    exits: [
      { direction: 'west', targetRoomId: 'jade_pool', description: '從裂縫回到翡翠池' },
    ],
    monsters: [
      { monsterId: 'crystal_guardian', maxCount: 1, respawnSeconds: 1200 },
      { monsterId: 'gargoyle', maxCount: 1, respawnSeconds: 70 },
    ],
    mapSymbol: '[*]',
    mapX: 3,
    mapY: 9,
    guardianHints: {
      creature: '密室中的水晶魔像是古代工匠製造的永恆守衛——牠們不會疲倦，也不會憐憫。',
      treasure: '石台上被水晶封印的古書記載著地底種族的核心魔法，破解封印需要四種元素水晶。',
      spirit: '密室的鑽石結晶記錄著地底種族最後的歲月——每一面切面都是一段歷史的片段。',
    },
  },

underground_waterfall: {
    id: 'underground_waterfall',
    name: '地底瀑布',
    zone: 'crystal_cave',
    image: 'underground_waterfall.png',
    imagePrompt: '地底瀑布 in crystal_cave, landmark room with tall underground waterfall, crystal-lit water curtain, deep pool and roaring mist, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function main route, terrain crystal, clear lantern light',
    description:
      '翡翠池水在此傾瀉而下，形成高達數十公尺的地底瀑布，水幕被晶光照得像流動寶石，轟隆聲震動整座洞窟。北面可逆流回翡翠池，西側深潭接地下河，南方瀑布後方有隱蔽密道。霧氣中偶爾浮現巨大影子，水幕後也露出凹洞，提示玩家可採集水晶核心、調查密道或準備面對洞窟精英。' +
      '瀑布邊緣有被水流磨圓的石階，能作為通往祭壇和龍棲台裂縫的方向標。轟鳴聲會掩蓋蝙蝠群靠近，玩家需要觀察水霧擾動而不是只靠聽覺，並留心深潭邊的濕滑落腳點與退路。水下亮點也可能是寶物或伏兵。',
    exits: [
      { direction: 'north', targetRoomId: 'jade_pool', description: '沿著水流逆行回到翡翠池' },
      { direction: 'south', targetRoomId: 'ancient_altar', description: '瀑布後方似乎有一條隱蔽的通道' },
      { direction: 'west', targetRoomId: 'underground_river', description: '深潭連接著地下河' },
    ],
    monsters: [
      { monsterId: 'crystal_guardian', maxCount: 1, respawnSeconds: 900 },
      { monsterId: 'cave_bat_swarm', maxCount: 1, respawnSeconds: 75 },
      { monsterId: 'crystal_lizard', maxCount: 2, respawnSeconds: 50 },
    ],
    groundItems: [
      { itemId: 'crystal_core', description: '瀑布旁的水晶散發微光' },
    ],
    mapSymbol: '[V]',
    mapX: 0,
    mapY: 10,
    guardianHints: {
      creature: '深潭中的巨影並非魚類——那是一隻從未被記載過的水棲洞窟生物。',
      treasure: '瀑布的水幕後方有一個被水流沖刷出的凹洞，裡面堆積著被沖下來的水晶和礦石。',
      spirit: '瀑布的轟鳴聲中隱藏著一段旋律——那是地底種族用水流演奏的永恆安魂曲。',
    },
  },

ancient_altar: {
    id: 'ancient_altar',
    name: '古代祭壇',
    zone: 'crystal_cave',
    image: 'ancient_altar.png',
    imagePrompt: '古代祭壇 in crystal_cave, boss landmark room with star-shaped stone pillars, blue rune altar, pure magic energy, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function boss, terrain stone, clear lantern light',
    description:
      '瀑布後方密道通往被遺忘千年的古代祭壇，巨大石柱排列成星形，中央祭台刻著複雜符文陣，幽藍能量像心跳般脈動。北方密道回地底瀑布，西側階梯連向礦脈深處，祭壇周圍散落古代碎片與破損騎士徽記。這裡是 Boss、劇情與傳送封印節點，玩家可 inspect 符文、回收碎片，也要準備面對水晶守衛與石像鬼。' +
      '石柱影子會按照星形順序移動，指出棱鏡門與水晶龍棲台的封印關係。祭台旁的碎片可作任務證物，但拿起它也可能啟動守衛與地底王國的記憶幻象，讓整個房間進入戰鬥狀態與封鎖。符文亮度會提示啟動順序。',
    exits: [
      { direction: 'north', targetRoomId: 'underground_waterfall', description: '穿過密道回到地底瀑布' },
      { direction: 'west', targetRoomId: 'mine_depths', description: '祭壇側面有通往礦脈深處的階梯' },
    ],
    monsters: [
      { monsterId: 'crystal_guardian', maxCount: 1, respawnSeconds: 1800 },
      { monsterId: 'frost_golem', maxCount: 1, respawnSeconds: 900 },
      { monsterId: 'gargoyle', maxCount: 1, respawnSeconds: 70 },
    ],
    groundItems: [
      { itemId: 'ancient_fragment', description: '祭壇上放著一塊古代碎片' },
    ],
    mapSymbol: '[#]',
    mapX: 0,
    mapY: 11,
    guardianHints: {
      creature: '祭壇的守護者是一位幽靈騎士——他曾是地底王國的騎士團長，死後仍忠誠地守護著這裡。',
      treasure: '符文陣的核心處封印著地底種族的王權之器，啟動它需要獻上四種元素的精華。',
      spirit: '祭壇記載著地底種族滅亡的真相——他們並非被外敵消滅，而是為了封印某個來自深淵的存在而犧牲了自己。',
    },
  },

crystal_cave_echo_chasm: {
    id: 'crystal_cave_echo_chasm',
    name: '回音裂谷',
    zone: 'crystal_cave',
    image: 'crystal_cave_echo_chasm.png',
    imagePrompt: '回音裂谷 in crystal_cave, main route room with deep chasm, crystal ledges, echoing darkness and blue side light, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function main route, terrain crystal, clear lantern light',
    description:
      '螢光隧道南東側裂開一道深不見底的裂谷，兩側水晶平台像階梯般懸在黑暗中，回音會把腳步聲放大成怪物低吼。西北可回水晶大廳，東側有細窄玻璃橋跨過裂隙，南方蜥蜴巢穴傳來碎石滑落聲。裂谷邊緣有斷繩與礦工記號，提示玩家這裡是危險主路與撤退考驗，戰鬥中位置選擇很重要。' +
      '深處偶爾飛起蝙蝠群，水晶碎片也會隨回音震動掉落，暴露隱藏平台。若要前往玻晶橋或蜥蜴巢穴，最好先確認北側退路和補給狀態，避免在裂谷邊被包圍或擊退。回音方向還能暴露側路與落腳點標記。',
    exits: [
      { direction: 'north', targetRoomId: 'crystal_hall', description: '回到水晶大廳' },
      { direction: 'east', targetRoomId: 'crystal_cave_glass_bridge', description: '玻璃般的晶橋橫跨裂谷' },
      { direction: 'south', targetRoomId: 'crystal_cave_lizard_nest', description: '碎石聲來自南方巢穴' },
    ],
    monsters: [
      { monsterId: 'cave_bat', maxCount: 3, respawnSeconds: 40 },
      { monsterId: 'cave_bat_swarm', maxCount: 1, respawnSeconds: 90 },
    ],
    mapSymbol: '[ ]',
    mapX: 2,
    mapY: 9,
  },

crystal_cave_miner_camp: {
    id: 'crystal_cave_miner_camp',
    name: '廢礦工營地',
    zone: 'crystal_cave',
    image: 'crystal_cave_miner_camp.png',
    imagePrompt: '廢礦工營地 in crystal_cave, quest room with abandoned tents, broken winch, ore crates and lantern crystal light, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function resource, terrain crystal, clear lantern light',
    description:
      '廢棄礦工營地卡在礦脈深處西側平台上，破布帳篷、斷裂滑輪和半滿礦石箱散落一地，乾涸油燈反射水晶冷光。東面可回礦脈深處，南側鏡晶迷宮入口被木牌標記，西邊有通往沉沒寶庫的潮濕階梯。營地桌上留著事故記錄與採礦圖，提示玩家可接調查任務、尋找失蹤礦工證物，或補充採集路線情報。此處還留著可追蹤的任務痕跡、隱蔽標記與危險預兆，適合先仔細調查再推進。',
    exits: [
      { direction: 'east', targetRoomId: 'mine_depths', description: '回到礦脈深處' },
      { direction: 'south', targetRoomId: 'crystal_cave_mirror_maze', description: '鏡晶迷宮入口閃著冷光' },
      { direction: 'west', targetRoomId: 'crystal_cave_submerged_vault', description: '潮濕階梯通往沉沒寶庫' },
    ],
    monsters: [
      { monsterId: 'gargoyle', maxCount: 1, respawnSeconds: 80 },
      { monsterId: 'crystal_lizard', maxCount: 2, respawnSeconds: 55 },
    ],
    mapSymbol: '[C]',
    mapX: 0,
    mapY: 12,
  },

crystal_cave_singing_crystals: {
    id: 'crystal_cave_singing_crystals',
    name: '鳴晶廊',
    zone: 'crystal_cave',
    image: 'crystal_cave_singing_crystals.png',
    imagePrompt: '鳴晶廊 in crystal_cave, exploration room with resonating crystal organ columns, musical light waves, violet-blue glow, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function main route, terrain crystal, clear lantern light',
    description:
      '這條支廊的晶柱會隨水滴震動發出長音，數十種音高交疊成像管風琴般的旋律，空氣也跟著微微震顫。北面接回紫水晶走廊，東側可繞向鏡晶迷宮，南方棱鏡門偶爾閃出彩色光帶。牆上有地底文明的音階符號，提示玩家可 inspect 聲音順序解謎，也能利用共鳴削弱某些水晶守衛。',
    exits: [
      { direction: 'north', targetRoomId: 'amethyst_corridor', description: '回到紫水晶走廊' },
      { direction: 'east', targetRoomId: 'crystal_cave_mirror_maze', description: '回聲指向鏡晶迷宮' },
      { direction: 'south', targetRoomId: 'crystal_cave_prism_gate', description: '彩光從南方棱鏡門透出' },
    ],
    monsters: [
      { monsterId: 'crystal_lizard', maxCount: 2, respawnSeconds: 45 },
      { monsterId: 'cave_bat', maxCount: 2, respawnSeconds: 40 },
    ],
    mapSymbol: '[~]',
    mapX: 0,
    mapY: 7,
  },

crystal_cave_glass_bridge: {
    id: 'crystal_cave_glass_bridge',
    name: '玻晶橋',
    zone: 'crystal_cave',
    image: 'crystal_cave_glass_bridge.png',
    imagePrompt: '玻晶橋 in crystal_cave, dangerous route room with transparent crystal bridge over abyss, refraction, distant waterfall mist, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function main route, terrain crystal, clear lantern light',
    description:
      '透明晶橋橫跨回音裂谷，橋面薄得能看見腳下黑暗與遠處瀑布水霧，走動時會發出細小裂響。西側回裂谷平台，東邊接到地下河上游，若要前往蜥蜴巢穴需先退回裂谷再沿南側碎石路下行。橋面沒有欄杆，水晶蜥蜴常伏在透明邊緣等待獵物滑倒，提示玩家這裡是高風險通道與撤退捷徑。' +
      '橋下晶刺像倒掛長矛，任何掉落的石子都要很久才聽見回聲。玩家若在這裡戰鬥，應留意位置、擊退效果與東西兩端出口，不要被逼到橋中央，也不要忽略南側繞路和腳下裂痕。橋面反光能提示隱形裂縫與敵影位置細節變化及巡邏節奏。',
    exits: [
      { direction: 'west', targetRoomId: 'crystal_cave_echo_chasm', description: '回到回音裂谷' },
      { direction: 'east', targetRoomId: 'underground_river', description: '橋尾連向地下河' },
    ],
    monsters: [
      { monsterId: 'crystal_lizard', maxCount: 3, respawnSeconds: 45 },
    ],
    mapSymbol: '[=]',
    mapX: 3,
    mapY: 8,
  },

crystal_cave_lizard_nest: {
    id: 'crystal_cave_lizard_nest',
    name: '水晶蜥蜴巢',
    zone: 'crystal_cave',
    image: 'crystal_cave_lizard_nest.png',
    imagePrompt: '水晶蜥蜴巢 in crystal_cave, combat room with crystal eggs, clawed stone nests, blue mineral dust and lizard tracks, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function resource, terrain crystal, clear lantern light',
    description:
      '洞壁被爪痕刮得發亮，數個石窩裡躺著半透明晶蛋，地面覆著細碎藍色晶粉與蜥蜴尾巴掃出的弧線。北面通回回音裂谷，想上玻晶橋需先回裂谷平台再往東，南方有裂縫通向棱鏡門背面。這裡是密集戰鬥房，玩家可收集晶鱗與蛋殼材料，但靠近巢穴中央會引來成群水晶蜥蜴。' +
      '晶蛋會映出入侵者的熱影，讓蜥蜴更快定位獵物。巢穴角落有被拖來的礦工工具與破碎燈盞，提示可找到任務證物，也能循裂縫前往深層門扉或回玻晶橋撤離與重整。蛋殼碎片可作採集材料與任務證物來源點之一處，仍有餘溫。',
    exits: [
      { direction: 'north', targetRoomId: 'crystal_cave_echo_chasm', description: '回到回音裂谷' },
      { direction: 'south', targetRoomId: 'crystal_cave_prism_gate', description: '裂縫通向棱鏡門背後' },
    ],
    monsters: [
      { monsterId: 'crystal_lizard', maxCount: 4, respawnSeconds: 40 },
      { monsterId: 'cave_bat', maxCount: 1, respawnSeconds: 45 },
    ],
    mapSymbol: '[n]',
    mapX: 3,
    mapY: 10,
  },

crystal_cave_mirror_maze: {
    id: 'crystal_cave_mirror_maze',
    name: '鏡晶迷宮',
    zone: 'crystal_cave',
    image: 'crystal_cave_mirror_maze.png',
    imagePrompt: '鏡晶迷宮 in crystal_cave, hidden exploration room of mirrored crystal walls, repeated reflections and cold maze light, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function hidden, terrain crystal, clear lantern light',
    description:
      '鏡面水晶牆把通道切成無數相似角度，玩家的倒影被拉長、重疊，連火光都會分裂成多個方向。北邊可回廢礦工營地，西側鳴晶廊聲音能作為定位，南方鍛造間傳來金屬摩擦聲。牆面上偶爾出現不屬於自己的影子，提示玩家需要依靠聲音與地標判路，並可 inspect 倒影找到隱藏出口。' +
      '迷宮地面有礦工用粉筆留下的短箭頭，但部分被水晶折射成假方向。若走錯路會遭遇石像鬼巡邏，正確路線則能連到鍛造間與深層機關，也能回收失蹤礦工線索與標記。倒影異常處往往藏有出口與寶箱線索痕跡點位。',
    exits: [
      { direction: 'north', targetRoomId: 'crystal_cave_miner_camp', description: '依照礦工記號回到營地' },
      { direction: 'west', targetRoomId: 'crystal_cave_singing_crystals', description: '鳴晶聲從西側傳來' },
      { direction: 'south', targetRoomId: 'crystal_cave_golem_forge', description: '金屬摩擦聲來自南方' },
    ],
    monsters: [
      { monsterId: 'gargoyle', maxCount: 2, respawnSeconds: 75 },
      { monsterId: 'crystal_lizard', maxCount: 2, respawnSeconds: 50 },
      { monsterId: 'crystal_cave_mirror_golem', maxCount: 1, respawnSeconds: 900 },
    ],
    mapSymbol: '[M]',
    mapX: 1,
    mapY: 12,
  },

crystal_cave_golem_forge: {
    id: 'crystal_cave_golem_forge',
    name: '魔像鍛造間',
    zone: 'crystal_cave',
    image: 'crystal_cave_golem_forge.png',
    imagePrompt: '魔像鍛造間 in crystal_cave, elite room with ancient golem forge, crystal molds, blue furnace and stone guardians, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function elite, terrain crystal, clear lantern light',
    description:
      '古代鍛造間的地面刻著巨大圓形軌道，水晶模具與石質肢體散落在藍焰爐旁，空氣裡有熱石與金屬粉塵味。北方回鏡晶迷宮，東側棱鏡門可被啟動，往沉沒寶庫需先回鏡晶迷宮與礦工營地尋找潮濕階梯。半成品魔像胸口仍有微光，提示玩家這裡是精英事件與製作線索房，可調查守衛如何被喚醒。此處還留著可追蹤的任務痕跡、隱蔽標記與危險預兆，適合先仔細調查再推進。牆角或地面標記也會指出下一個安全出口。',
    exits: [
      { direction: 'north', targetRoomId: 'crystal_cave_mirror_maze', description: '回到鏡晶迷宮' },
      { direction: 'east', targetRoomId: 'crystal_cave_prism_gate', description: '棱鏡門在東側發亮' },
    ],
    monsters: [
      { monsterId: 'crystal_guardian', maxCount: 1, respawnSeconds: 1200 },
      { monsterId: 'gargoyle', maxCount: 2, respawnSeconds: 80 },
      { monsterId: 'crystal_cave_mirror_golem', maxCount: 1, respawnSeconds: 900 },
    ],
    mapSymbol: '[G]',
    mapX: 1,
    mapY: 13,
  },

crystal_cave_submerged_vault: {
    id: 'crystal_cave_submerged_vault',
    name: '沉沒寶庫',
    zone: 'crystal_cave',
    image: 'crystal_cave_submerged_vault.png',
    imagePrompt: '沉沒寶庫 in crystal_cave, hidden treasure room half flooded, crystal chests, submerged stairs and blue-green water light, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function hidden, terrain crystal, clear lantern light',
    description:
      '半淹沒的石室藏在礦工營地下方，水線淹過古代寶箱底部，藍綠光在水面與牆面間晃動。東邊可回廢礦工營地，若要前往魔像鍛造間需先回營地再穿過鏡晶迷宮，水下階梯似乎還往更深處延伸。寶箱封條被水晶包住，旁邊有氣泡與爪痕，提示玩家可搜尋一次性寶物，也要提防水下蜥蜴或守衛甦醒。',
    exits: [
      { direction: 'east', targetRoomId: 'crystal_cave_miner_camp', description: '濕階梯回到礦工營地' },
    ],
    monsters: [
      { monsterId: 'crystal_lizard', maxCount: 3, respawnSeconds: 50 },
      { monsterId: 'cave_bat_swarm', maxCount: 1, respawnSeconds: 90 },
      { monsterId: 'crystal_cave_prism_wisp', maxCount: 1, respawnSeconds: 80 },
    ],
    groundItems: [
      { itemId: 'crystal_shard', description: '半淹沒寶箱旁散落著水晶碎片' },
    ],
    mapSymbol: '[T]',
    mapX: 0,
    mapY: 13,
  },

crystal_cave_prism_gate: {
    id: 'crystal_cave_prism_gate',
    name: '棱鏡門',
    zone: 'crystal_cave',
    image: 'crystal_cave_prism_gate.png',
    imagePrompt: '棱鏡門 in crystal_cave, portal event room with triangular prism gate, rainbow beams, rune locks and crystal stairs, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function entrance, terrain gate, clear lantern light',
    description:
      '三角棱鏡組成的巨門立在洞窟深層，彩色光束在門框間來回折射，符文鎖像眼睛般逐一亮起。北邊連蜥蜴巢穴，西側是魔像鍛造間，東方可通往水晶龍棲台。門前地面刻著需要調整光線的謎題，提示玩家可啟用深層捷徑或事件傳送，但錯誤觸發會喚來守衛。' +
      '門框下方有四個晶核插槽，分別對應紫晶、翡翠、鑽石與古代祭壇能量。玩家可從周邊房間收集線索再啟動棱鏡門，避免被傳送到 Boss 前哨時毫無準備，並確認西側撤退路和補給。光束顏色會暴露錯誤順序與守衛動向變化節奏細節線索與警示。',
    exits: [
      { direction: 'north', targetRoomId: 'crystal_cave_lizard_nest', description: '裂縫回到蜥蜴巢穴' },
      { direction: 'west', targetRoomId: 'crystal_cave_golem_forge', description: '回到魔像鍛造間' },
      { direction: 'east', targetRoomId: 'crystal_cave_dragon_roost', description: '棱鏡門後是龍棲台' },
    ],
    monsters: [
      { monsterId: 'crystal_guardian', maxCount: 1, respawnSeconds: 1500 },
      { monsterId: 'gargoyle', maxCount: 1, respawnSeconds: 80 },
      { monsterId: 'crystal_cave_prism_wisp', maxCount: 2, respawnSeconds: 75 },
    ],
    mapSymbol: '[P]',
    mapX: 2,
    mapY: 13,
  },

crystal_cave_dragon_roost: {
    id: 'crystal_cave_dragon_roost',
    name: '水晶龍棲台',
    zone: 'crystal_cave',
    image: 'crystal_cave_dragon_roost.png',
    imagePrompt: '水晶龍棲台 in crystal_cave, boss room with high crystal roost, clawed ledges, dragon scales, blinding white-blue light, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function boss, terrain crystal, clear lantern light',
    description:
      '洞窟最深處的高台被白藍水晶包圍，巨爪在平台邊緣留下深痕，破碎鱗片像玻璃刀片散落滿地。西側棱鏡門是唯一穩定入口，北方有狹窄裂縫回望地底瀑布水霧，四周穹頂高得看不見盡頭。這裡是水晶洞窟大型 Boss 與區域事件終點，玩家需要完成棱鏡門與祭壇線索、整備隊伍後再挑戰水晶龍。' +
      '高台中央有被龍爪壓碎的古代王冠與發光鱗片，提示擊敗首領後可取得區域推進證物。水晶柱會反射龍息路徑，熟悉出口與遮蔽物能提高生存機會，也能判斷何時撤回棱鏡門避險。地面裂光會預告落晶攻擊。',
    exits: [
      { direction: 'west', targetRoomId: 'crystal_cave_prism_gate', description: '穿過棱鏡門撤回深層通道' },
      { direction: 'north', targetRoomId: 'underground_waterfall', description: '狹窄裂縫可繞回瀑布霧氣後方' },
    ],
    monsters: [
      { monsterId: 'crystal_dragon', maxCount: 1, respawnSeconds: 1800 },
      { monsterId: 'crystal_guardian', maxCount: 1, respawnSeconds: 1500 },
    ],
    mapSymbol: '[B]',
    mapX: 3,
    mapY: 13,
  },
};
