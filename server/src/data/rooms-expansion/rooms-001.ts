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
      '金燦燦的向日葵高過人頭，花盤在陽光下緩慢轉動，形成一座帶著花粉香的天然迷宮。東側穿過花田可回平原入口，北邊有獵人小屋的煙囪，南方傳來河水聲。泥土表面佈滿田鼠洞和烏鴉爪痕，最高那株花下的土色明顯較新，提示旅人可 搜索 找到小型寶物，也可能驚動田鼠群。向日葵田周邊的地貌、入口、出口與危險痕跡需要清楚呈現，讓隊伍能從相鄰房間、地面材質與回程標記判斷探索方向、採集位置、任務線索與安全退路',
    exits: [
      { direction: 'east', targetRoomId: 'plains_entrance', description: '穿過花田回到平原入口' },
      { direction: 'north', targetRoomId: 'hunter_lodge', description: '花田盡頭有一間小木屋' },
      { direction: 'south', targetRoomId: 'riverside_fishing', description: '花田南邊傳來潺潺水聲' },
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
      '生鏽鐵軌從風車農場東側延伸進低矮洞口，翻覆礦車散落在濕草與碎石間，空氣有鐵鏽、泥水和蝙蝠糞味。西邊可回農場，南方礦道往地底傾斜，車輪印旁有田鼠啃咬過的麻袋。礦車內殘留幾塊閃光礦石，提示這裡是早期採集與洞窟路線入口，但小蝙蝠可能從陰影中飛出。廢棄礦車道周邊的地貌、入口、出口與危險痕跡需要清楚呈現，讓隊伍能從相鄰房間、地面材質與回程標記判斷探索方向、採集位置、任務線索與安全退路。',
    exits: [
      { direction: 'west', targetRoomId: 'windmill_farm', description: '沿著軌道走回風車農場' },
      {
        direction: 'south',
        targetRoomId: 'cave_entrance',
        description: '南側廢棄礦車道順鏽軌下滑，穿過塌方木架與濕石彎道後抵達洞窟入口',
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
      '清澈小河蜿蜒穿過平原，柳樹枝條垂成綠色簾幕，幾塊平整大石延伸入水，是天然釣魚平台。北岸通往向日葵田，東側可走向風車內部的水車聲，河泥上有野兔腳印與被田鼠怪物拖走的麥粒。水面銀魚閃動，風帶來濕潤涼意，提示旅人能採集、釣魚或追蹤被沖來的旅人遺物。河邊釣場周邊的地貌、入口、出口與危險痕跡需要清楚呈現，讓隊伍能從相鄰房間、地面材質與回程標記判斷探索方向、採集位置、任務線索與安全退路。',
    exits: [
      { direction: 'north', targetRoomId: 'sunflower_field', description: '沿河岸走回向日葵田' },
      { direction: 'east', targetRoomId: 'windmill_interior', description: '東側河邊釣場沿濕滑河岸繞過水車溝渠，穿過石板小徑才進入風車內部' },
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
      '厚重木門後方是緩慢轉動的巨大齒輪與石磨，咔嗒聲在圓形塔身內反覆迴盪，麵粉粉塵漂浮在狹窗光束中。北門回風車農場，西側門通往河邊釣場，樓梯陰影裡能看到田鼠怪物拖麥粒留下的細痕。石磨底座有鬆動板塊，提示旅人可調查機關、找回農夫失物，並小心烏鴉從高處俯衝伏擊。風車內部周邊的地貌、入口、出口與危險痕跡需要清楚呈現，讓隊伍能從相鄰房間、地面材質與回程標記判斷探索方向、採集位置、任務線索與安全退路。',
    exits: [
      { direction: 'west', targetRoomId: 'riverside_fishing', description: '西側風車內部沿石板小徑折返，穿過水車溝渠與濕滑河岸回到河邊釣場' },
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
      '草坡上密密麻麻分布著野兔洞，洞口被乾草和白色絨毛覆住，泥土帶著剛翻開的濕氣。東邊通往平原入口，南側狼跡小路延伸進更高的草叢，西面能聽見遠處石環傳來的風聲。洞口旁有被咬碎的藥草與旅人皮包碎片，提示旅人可在此練習追擊快速怪物，也能 搜索 找到野兔拖進洞裡的零碎物品。野兔洞群周邊的地貌、入口、出口與危險痕跡需要清楚呈現，讓隊伍能從相鄰房間、地面材質與回程標記判斷探索方向、採集位置、任務線索與安全退路',
    exits: [
      {
        direction: 'east',
        targetRoomId: 'plains_entrance',
        description: '東側要穿過野兔洞群外圍的低草坡與幾段塌陷洞道，才繞回平原入口',
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
      '草坡被數道狼爪印切開，倒伏草葉一路指向南方陰影，空氣裡有濃重獸腥味和泥土濕味。北邊是野兔洞群，東側可回草原小徑，西邊月光小林的樹影在白天也顯得偏暗。折斷的牧羊杖插在路旁，提醒旅人狼群會結伴出現，若任務要求擊殺野狼，這裡是最直接但也最危險的練功點。此處還留著可追蹤的任務痕跡、隱蔽標記與危險預兆，適合先仔細調查再推進。牆角或地面標記也會指出下一個安全出口',
    exits: [
      { direction: 'north', targetRoomId: 'plains_hare_burrows', description: '回到野兔洞群' },
      {
        direction: 'east',
        targetRoomId: 'grass_path',
        description: '東側要沿狼爪印穿過倒伏高草與破木欄，繞過獸腥泥痕才接回草原小徑中段',
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
      '幾頂破帆布棚藏在麥田南側的矮丘後，煙灰、酒瓶和偷來的穀袋散落一地，濕木柴冒出刺鼻黑煙。北方可回廢棄礦車道，西邊通往風車農場背後的藥草坡，往斷橋的撤退腳印也先折回藥草坡再下行。箱子上刻著農場印記，敵人巡邏痕跡提示旅人這裡與風車農場失竊事件相關，戰鬥後可仔細搜查贓物與盜賊留下的線索',
    exits: [
      {
        direction: 'north',
        targetRoomId: 'abandoned_minecart',
        description: '北側要沿矮丘背面穿過盜賊煙灰、車轍斜坡與碎石軌道，才回到廢棄礦車道',
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
      '一小片矮樹孤立在平原西側，即使正午也有淡淡月色般的冷光停在樹根附近，藍色小花沿著樹影排列。東邊是狼跡草坡，南方石環在樹縫間若隱若現。林地裡有鷹羽、狼毛和被拖拽過的痕跡，提示旅人這裡是隱藏支線與精英線索的前置地點，仔細 觀察 樹根或花叢可能找到通往石環的提示。此處還留著可追蹤的任務痕跡、隱蔽標記與危險預兆，適合先仔細調查再推進。牆角或地面標記也會指出下一個安全出口',
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
      '斜坡朝西展開，野薄荷、止血草和淡紫色小花在石縫間生長，蜜蜂嗡鳴聲被暖風帶得很遠。北邊可回草原小徑，東方盜賊藏身處的煙柱隱約可見，南側斷橋下傳來溪水拍擊聲。地面有採集者留下的小刀痕與籃印，提示旅人可在這裡進行草藥採集或追查被盜補給的去向，但也要留心野豬翻土造成的衝撞路線。此處還留著可追蹤的任務痕跡、隱蔽標記與危險預兆，適合先仔細調查再推進',
    exits: [
      {
        direction: 'north',
        targetRoomId: 'grass_path',
        description: '北側回草原小徑要沿藥草斜坡上行，穿過蜜蜂草叢與採集者小刀痕',
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
      '牧羊人營地靠著農場南側的緩坡搭起，羊圈木欄被撞歪，灰白羊毛掛在刺木上，煮鍋散出奶油與煙草氣味。西邊可回風車農場，南面藥草坡與盜賊藏身處隔著高草相望。營地木桌上有失蹤羊群的簡圖、狼爪拓印和求助紙條，提示旅人能接到護送、尋物或擊退野獸的支線。牧羊人營地周邊的地貌、入口、出口與危險痕跡需要清楚呈現，讓隊伍能從相鄰房間、地面材質與回程標記判斷探索方向、採集位置、任務線索與安全退路。',
    exits: [
      {
        direction: 'west',
        targetRoomId: 'windmill_farm',
        description: '西側回風車農場要穿過羊圈外的緩坡、歪斜木欄與農場背面草路入口',
      },
      {
        direction: 'south',
        targetRoomId: 'plains_herb_slope',
        description: '南側羊群踩出的路要穿過高草與散落羊毛，繞過盜賊煙柱才抵達藥草坡',
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
      '小溪上的木橋斷成兩截，濕木板卡在水流中發出沉悶撞擊聲，橋頭泥地滿是盜賊靴印、野豬怪物蹄印和拖行箱子的痕跡。北邊是藥草斜坡，西邊十字路口的路標露出半截，往盜賊藏身處的腳印會先回到北側斜坡再轉東。斷橋雖阻路，旁邊倒木形成可繞行的危險捷徑，提示旅人可調查事件、判斷路線或在戰鬥中撤回較安全道路',
    exits: [
      { direction: 'north', targetRoomId: 'plains_herb_slope', description: '回到藥草斜坡' },
      {
        direction: 'west',
        targetRoomId: 'crossroads',
        description: '西側要沿斷橋旁泥路繞過倒木與溪水缺口，才回到十字路口路標前',
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
      '十二塊立石圍成粗糙圓環，表面刻著被苔蘚遮住的古老符號，冷風穿過石縫時像有人低語。北邊月影小林遮住入口，東側能回十字路口，南方守望土丘從草浪中隆起。石環中央有焦黑祭痕與烏鴉羽毛，提示旅人可 觀察 符文、觸發區域事件，或找到與平原狼群異常躁動有關的線索。古石環周邊的地貌、入口、出口與危險痕跡需要清楚呈現，讓隊伍能從相鄰房間、地面材質與回程標記判斷探索方向、採集位置、任務線索與安全退路。',
    exits: [
      { direction: 'north', targetRoomId: 'plains_moonlit_copse', description: '回到月影小林' },
      {
        direction: 'east',
        targetRoomId: 'old_well',
        description: '東側荒草路要穿過石環外圍倒伏草線與烏鴉羽痕，繞過冷風石縫才通到古井旁',
      },
      { direction: 'south', targetRoomId: 'plains_watch_mound', description: '石環南側是守望土丘' },
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
      '守望土丘比周圍草地高出一截，腐朽旗杆插在頂端，風從四面吹來，能同時看見北方石環、東方十字路口和更南側陰暗狼穴入口。草坡上留有舊營火灰、破望遠鏡和被風磨平的哨兵刻字。這裡本身不算危險，但提供方向感與戰術視野，提示旅人可在進入更深處前確認路線、整理任務並觀察狼群巡邏。此處還留著可追蹤的任務痕跡、隱蔽標記與危險預兆，適合先仔細調查再推進',
    exits: [
      { direction: 'north', targetRoomId: 'plains_stone_circle', description: '回到古石環' },
      {
        direction: 'east',
        targetRoomId: 'crossroads',
        description: '東側下坡要沿守望土丘旗杆影子穿過草浪與舊營火灰，才回到十字路口',
      },
      { direction: 'south', targetRoomId: 'plains_alpha_den', description: '南坡通往狼群首領的棲地' },
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
      '土丘南面的高草被踩成圓形空地，中央堆著白骨、破披風和被咬碎的木盾，血腥味與濕草味混在低沉狼嚎裡。北方斜坡回到守望土丘，東面斷橋方向仍有盜賊丟下的贓物痕跡，西側草牆幾乎封死，只留下狼群出入的窄道。這裡是平原狼群首領活動的棲地，草叢邊緣有多組伏擊腳印與巨大爪痕；旅人進入前應確認藥水、裝備和任務目標，戰鬥後可搜查骨堆取得區域事件線索。空地邊緣插著半截路標，上面還留有從十字路口拖來的鐵釘，顯示狼群已威脅主要道路。風穿過草牆時會暴露幾條短暫撤退縫隙，但狼王嚎叫後這些路徑很快會被狼群封住',
    exits: [
      { direction: 'north', targetRoomId: 'plains_watch_mound', description: '沿斜坡撤回守望土丘' },
      { direction: 'east', targetRoomId: 'plains_broken_bridge', description: '血跡小徑通往斷木橋' },
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
      '螢火蟲小徑被藍綠光點鋪成細長走廊，柔軟苔蘚在腳下泛出微弱磷光，灌木間偶爾露出被拖曳過的鞋印與細小骨片。西側光點沿濕苔回到密林小道，南方光芒漸次熄滅並沉入毒霧沼澤深處，東邊銀白亮線則指向精靈祭壇，北側蘆草界在高枝後方晃動。螢火忽明忽暗，像在避開看不見的獵食者，也把這條美麗小徑染成容易暴露行跡的危險通道。',
    exits: [
      { direction: 'west', targetRoomId: 'dense_trail', description: '沿著光點回到密林小道' },
      { direction: 'south', targetRoomId: 'deep_poison_swamp', description: '南側螢火蟲小徑沿熄光苔徑下沉，穿過潮濕樹根與紫毒霧帶抵達毒霧沼澤深處' },
      { direction: 'east', targetRoomId: 'elf_altar', description: '一道柔和的銀光從東方透出' },
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
      '毒霧沼澤深處被紫色霧氣壓得極低，枯樹幹像肋骨般伸出泥面，發光毒菇沿腐木一簇簇亮起。西側濃霧帶可繞回螢火蟲小徑，北面高枝上落著黑鴉棲枝的羽影，南方銀苔小徑通向森林女巫小屋，東邊濕泥逐漸接回蘑菇沼澤。水泡破裂時會吐出刺鼻甜味，泥下偶爾滑過長影，使每處看似穩固的踏點都像薄皮覆住的深坑。',
    exits: [
      { direction: 'west', targetRoomId: 'firefly_trail', description: '西側毒霧沼澤深處沿紫毒霧帶回穿，越過潮濕樹根與熄光苔徑回到螢火蟲小徑' },
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
      '精靈祭壇由古老白石柱圍成半圓，中央月亮紋章仍散出銀白光輝，把周圍暗影推在石階之外。西側螢火蟲小徑的微光在林間閃爍，南方枯萎之林泛著灰白枝影，祭壇水晶球內則浮現森林深處與古樹心庭的破碎倒影。石面留有新鮮爪痕、乾涸血跡與銀色露水，月光照過時，符文像尚未熄滅的脈搏，把庇護、記憶與詛咒的來源纏在一起。',
    exits: [
      { direction: 'west', targetRoomId: 'firefly_trail', description: '回到螢火蟲小徑' },
      { direction: 'south', targetRoomId: 'withered_forest', description: '南側精靈祭壇沿銀光石階下行，穿過破裂結界與灰白枯枝線抵達枯萎之林' },
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
      '枯萎之林裡所有樹木都失去葉片，灰白枝幹扭成向外伸出的手臂，厚灰覆在地面上，走過便揚起令人窒息的粉塵。北側枯枝線能回到精靈祭壇，南面最大枯木底部裂出黑暗樹洞，東邊樹線則連向森林深處。樹皮上有紫色裂紋緩慢脈動，根縫間埋著結晶化樹心與焦黑葉片，沉重腳步聲在枯木之間來回傳遞，像整片林地仍被詛咒拖著行走。',
    exits: [
      { direction: 'north', targetRoomId: 'elf_altar', description: '北側枯萎之林沿灰白枯枝線回穿，越過破裂結界與銀光石階回到精靈祭壇' },
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
      '黑暗樹洞位於一株完全枯死的千年巨木內，樹幹中空成天然暗室，內壁覆滿幽紫菌光與剝落的古老封印紋。北側洞口爬出後可回枯萎之林，西邊樹洞裂隙通向月影井，東側盤根暗路則接回精靈遺跡。空氣混著腐木、濕土與殘餘魔力的味道，深處低鳴沿年輪迴盪，彷彿這棵守護樹枯亡後仍保留一絲不肯熄滅的心跳。',
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
      '蛛網密室由密林東側的樹枝和白色巨網纏成，絲線層層交疊，困住腐葉、獸骨與破裂背包。西側被蛛絲封住的枝縫可繞回密林小道，南面粗大樹根延伸至盤根橋，頭頂還有數條細線通向看不見的高處。網面沾著露水與暗紅斑點，偶爾因上方重量輕顫，散落補給和斷箭被包在絲繭中，使這裡像一座安靜等待獵物自行掙扎的陷阱。',
    exits: [
      {
        direction: 'west',
        targetRoomId: 'dense_trail',
        description: '西側必須沿被蛛絲封住的枝縫慢慢退回，穿過兩段下垂蛛網後才接密林小道',
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
      '黑鴉棲枝由幾株傾斜枯木交錯成高枝平台，黑鴉沿枝頭排列，羽毛偶爾落進下方霧氣。東側螢火光隔著枝影閃爍，南面毒霧沼澤在低處翻泡，西側被更密的黑枝遮成死角。枝條上掛著亮片、骨戒與被叼來的紙片，巢邊散落細碎銀線與乾草。群鴉沒有鳴叫，只在視線移動時一同轉頭，使整座平台像替森林記錄入侵腳步的冷眼哨所。',
    exits: [
      {
        direction: 'east',
        targetRoomId: 'firefly_trail',
        description: '東側螢火光隔著枯枝平台閃動，需要沿黑鴉標記的枝路繞下才接到螢火小徑',
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
      '盤根橋由數條巨大樹根跨過黑水溪，濕滑木面反著不屬於天空的綠光，橋下水聲被厚霧吞得低沉。北面蛛網密室垂下白絲，西側根橋接回精靈遺跡，東邊通向荊棘迷宮，南方暗影空地被黑霧包圍。根面沒有護欄，只留下狼爪、樹精刻痕與被磨亮的足跡，冷水在根縫間滴落，讓這座橋同時像通路、伏擊線與森林傷口上的縫合痕。',
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
      '森林女巫小屋歪斜架在樹根與濕石之間，乾草藥、骨鈴和發光蘑菇掛滿屋簷，綠色坩堝光從門縫滲出。北側銀苔小徑接向毒霧沼澤深處，南面冷光通往月影井，西側屋後根門繞入枯萎之林。屋內桌上攤著被撕裂的森林地圖、未完成咒文與染黑羽毛，牆角瓶罐仍冒著細小氣泡，像有一雙看不見的手剛剛離開工作臺。',
    exits: [
      { direction: 'north', targetRoomId: 'deep_poison_swamp', description: '北側銀苔小徑通往毒霧沼澤邊緣' },
      { direction: 'south', targetRoomId: 'dark_forest_moonwell', description: '月井冷光在南方閃爍' },
      {
        direction: 'west',
        targetRoomId: 'withered_forest',
        description: '屋後小徑先穿過掛滿骨鈴的根門，再繞過灰化樹籬才進入枯萎之林',
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
      '月影井藏在銀苔覆蓋的小空地裡，圓形井沿刻滿精靈水滴紋，井水不映樹冠，只映出一輪蒼白月亮。東側枯木洞口通往黑暗樹洞，北面銀苔小徑回到森林女巫小屋，周圍被低矮荊棘與冷霧封成半隱蔽的環。井沿凹槽內殘留清亮水珠，銀苔在月光下像細小星群，井底偶爾泛起無聲漣漪，把毒霧、女巫和古樹心庭的陰影連成同一段古老詛咒。',
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
      '獵人瞭望棚偽裝成枝葉堆架在密林高處，苔綠繩梯垂過樹幹，棚內留下箭袋、磨損望遠筒與狼群巡路草圖。北側繩梯繞回古老樹屋平台，南面獵人繩標下降到蛛網密室，東側棚外坡道繞向盤根橋。木板縫間能看見暗精靈弓手曾刻下的距離記號，乾葉被壓成長期伏守的凹痕，整座瞭望棚像一隻收起羽翼的眼睛，靜靜俯視林道。',
    exits: [
      {
        direction: 'north',
        targetRoomId: 'ancient_treehouse',
        description: '北側繩梯要繞過獵棚偽裝枝葉，沿樹幹螺旋木階爬回古老樹屋平台',
      },
      {
        direction: 'south',
        targetRoomId: 'dark_forest_spider_web',
        description: '南側蛛網密室藏在枝葉後方，必須沿獵人繩標下降並穿過幾層白絲屏障',
      },
      {
        direction: 'east',
        targetRoomId: 'dark_forest_root_bridge',
        description: '東側盤根橋露出一角，需要沿瞭望棚外緣下坡，再繞過黑水溪岸才抵達',
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
      '荊棘迷宮由活物般的黑刺牆交錯而成，撕裂布條、暗紅樹液與被纏住的獸骨掛在轉角上。西側盤根路回到盤根橋，東面荊棘縫隙遠遠通向暗影空地，迷宮上方只有破碎月光能落入。枝條會在風中緩慢移位，把剛才的缺口遮成尖刺幕牆，地面則留下被拖行的靴痕和折斷箭羽。這裡不像普通灌木叢，而像森林用傷口長出的一段會記仇的道路。',
    exits: [
      { direction: 'west', targetRoomId: 'dark_forest_root_bridge', description: '西側盤根路通向月井方向' },
      { direction: 'east', targetRoomId: 'dark_forest_shadow_clearing', description: '荊棘縫隙通向暗影空地' },
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
      '暗影空地被低旋黑霧佔據，月光落到地面前便碎成斑駁銀片，周圍樹皮滿是巨大的爪痕。北方盤根橋橫在黑水溪上，西側遠路可退入荊棘迷宮，南面沉重心跳聲從古樹心庭方向傳來。地面圓形足跡像狼群反覆圍獵留下的痕跡，破碎月光照不進空地中央，只照亮一圈潮濕草葉與斷裂箭桿，讓這裡成為森林暗影真正開始聚攏的前哨。',
    exits: [
      { direction: 'north', targetRoomId: 'dark_forest_root_bridge', description: '盤根橋在北方黑水溪上' },
      { direction: 'west', targetRoomId: 'dark_forest_bramble_maze', description: '荊棘迷宮可作側向撤退' },
      { direction: 'south', targetRoomId: 'dark_forest_elder_grove', description: '沉重心跳聲來自南方老樹叢' },
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
      '古樹心庭被環狀巨根圍成近乎封閉的庭院，中央古木樹心裂開，暗紫光隨低沉脈動一明一滅。北方裂根路回到暗影空地，西側根牆開合處可繞向黑暗樹洞，東邊腐化根徑接回精靈遺跡。地上散落精靈封印石、碎裂水晶與狼王爪痕，樹心旁的結晶化樹皮像凝固血痂。每次心跳都讓根牆微微收緊，彷彿整座暗影森林的病灶正在此處呼吸。',
    exits: [
      { direction: 'north', targetRoomId: 'dark_forest_shadow_clearing', description: '回到暗影空地' },
      {
        direction: 'west',
        targetRoomId: 'dark_treehollow',
        description: '西側裂根要等根牆開合時穿過，沿腐化樹心外圈繞到黑暗樹洞入口',
      },
      {
        direction: 'east',
        targetRoomId: 'elf_ruins',
        description: '東側破碎結界必須沿精靈封印石繞行，穿過暗影根牆後才回到精靈遺跡',
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
      '紫水晶走廊幾乎完全由六角晶柱構成，晶柱從地面與天頂同時生長，在中央匯聚成連續拱門，淡紫光像薄霧貼著皮膚。東邊回螢光隧道，南方可聽見翡翠池水滴聲，西北側隱約傳來鳴晶廊的長音。牆面折射會讓方向短暫錯亂，規則過頭的晶柱像在呼吸，柱腳散著高純度紫晶碎片與守衛刮痕，顯示此處美麗卻並不安穩。',
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
      '翡翠池佔據洞窟中央，碧綠池水平靜得像鏡面，倒映低矮穹頂和周圍水晶光芒，空氣帶著薄荷般清香。北面回紫水晶走廊，東側狹縫透出鑽石密室的刺眼白光，南方池水跌向地底瀑布。池底水晶碎片閃動，岸邊有蜥蜴拖尾痕與被採過的治癒晶草；偶爾一圈細小漣漪會從無風處擴散，提醒這片綠水下藏著活物。',
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
      '鑽石密室藏在翡翠池東側狹縫後，空間不大，四壁、天頂與地面卻嵌滿切面銳利的結晶，光線反覆折射到近乎刺眼。西側裂縫是唯一回到翡翠池的路，中央石台封著一本古書，旁邊刻有四元素水晶凹槽。每個鑽石切面都映出不同年代的地底王國影像，石台下方還有細小封印裂縫與暗格；強光會遮蔽守衛輪廓，也讓回程裂縫顯得忽遠忽近。',
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
      '地底瀑布承接翡翠池南下水流，高達數十公尺的水幕被晶光照得像流動寶石，轟鳴聲震動整座洞窟。北面石階逆流回翡翠池，西側深潭連接地下河，南方水幕後藏著通往古代祭壇的密道，北東高處還可望見水晶龍棲台裂縫的冷光。霧氣中偶爾浮現巨大影子，深潭邊濕滑落腳點、圓磨石階與水下亮點共同標出危險與寶物可能所在。',
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
      '古代祭壇位於瀑布後方密道深處，巨大石柱排成星形，中央祭台刻著複雜符文陣，幽藍能量像心跳般脈動。北方密道回地底瀑布，西側階梯連向礦脈深處。祭壇周圍散落古代碎片、破損騎士徽記和被水晶封住的符文骨片，石柱影子會按照星形順序移動，暗示棱鏡門與水晶龍棲台的封印關係；符文亮度不同時，守衛石像的眼窩也會跟著亮起。',
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
      '回音裂谷在水晶大廳南側裂開，深不見底的黑暗把兩側晶台切成懸空階梯，任何腳步都會被放大成低吼。北面回水晶大廳，東側玻晶橋橫跨裂隙，南方水晶蜥蜴巢傳來碎石滑落聲。裂谷邊緣綁著斷繩、礦工短箭頭和被震落的晶片，深處偶爾飛起蝙蝠群；回音方向能暴露側路與落腳點，也會掩飾靠近的爪聲。',
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
      '廢礦工營地卡在礦脈深處西側平台上，破布帳篷、斷裂滑輪和半滿礦石箱散落一地，乾涸油燈反射水晶冷光。東面可回礦脈深處，南側鏡晶迷宮入口被木牌標記，西邊潮濕階梯通向沉沒寶庫。營地桌上留著事故記錄、採礦圖與被水浸壞的名牌，帳篷旁還有未收完的晶鎬；所有物件都停在倉皇撤離的一刻，像仍等待礦工回來點名。',
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
      '鳴晶廊的晶柱會隨水滴震動發出長音，數十種音高交疊成管風琴般的旋律，空氣也跟著微微震顫。北面接回紫水晶走廊，東側繞向鏡晶迷宮，南方棱鏡門偶爾閃出彩色光帶。牆上刻著地底文明的音階符號，部分符號正好與棱鏡門光束顏色對應；晶柱共鳴會讓守衛外殼短暫變暗，也會把迷宮內的腳步聲放大成可辨方向。',
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
      '玻晶橋透明得近乎不存在，橫跨回音裂谷上方，橋面薄到能看見腳下黑暗與遠處瀑布水霧，走動時發出細小裂響。西側回裂谷平台，東邊接到地下河上游，南側蜥蜴巢只能先退回裂谷再沿碎石路下行。橋下晶刺像倒掛長矛，橋面沒有欄杆，反光會暴露隱形裂縫與貼邊伏行的蜥蜴影子，中央位置尤其容易失去方向感。',
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
      '水晶蜥蜴巢的洞壁被爪痕刮得發亮，數個石窩裡躺著半透明晶蛋，地面覆滿藍色晶粉與尾巴掃出的弧線。北面通回回音裂谷，南方裂縫落向棱鏡門背面。晶蛋會映出溫熱影子，讓成群蜥蜴能從不同巢孔快速定位獵物；角落堆著被拖來的礦工工具、破碎燈盞和帶餘溫的蛋殼碎片，顯示這裡既是巢穴，也是深層通路的自然警戒點。',
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
      '鏡晶迷宮的牆面把通道切成無數相似角度，倒影被拉長、重疊，連火光都會分裂成多個方向。北邊可回廢礦工營地，西側鳴晶廊的長音能作定位，南方魔像鍛造間傳來金屬摩擦聲。地面有礦工粉筆短箭頭，但部分被水晶折射成假方向；牆面偶爾出現不屬於自己的影子，倒影異常處往往藏著真正出口、寶箱縫隙或巡邏守衛的折射輪廓。',
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
      '魔像鍛造間的地面刻著巨大圓形軌道，水晶模具、石質肢體和未完成的胸甲散落在藍焰爐旁，空氣裡有熱石與金屬粉塵味。北方回鏡晶迷宮，東側棱鏡門在彩光中明滅。半成品魔像胸口仍有微光，牆角堆著晶核插槽、古代鉗具和熔裂符文板，地面軌道指向下一個可啟動的位置；爐火每次升高，石肢關節便會發出即將甦醒的摩擦聲。',
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
      '沉沒寶庫藏在廢礦工營地下方，半淹沒石室的水線已蓋過古代寶箱底部，藍綠光在水面與牆面間晃動。東邊潮濕階梯回廢礦工營地，若要前往魔像鍛造間只能先返回營地再穿過鏡晶迷宮。寶箱封條被水晶包住，旁邊有細密氣泡、爪痕和沉在水下的銅鑰匙；更深階梯消失在冷水裡，水下影子偶爾擦過箱角，讓寶物與伏擊很難分清。',
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
      '棱鏡門由三角晶柱組成，彩色光束在門框間來回折射，符文鎖像眼睛般逐一亮起。北邊裂縫回水晶蜥蜴巢，西側是魔像鍛造間，東方門後通往水晶龍棲台。門前地面刻著光線調整槽，四個晶核插槽分別對應紫晶、翡翠、鑽石與古代祭壇能量；光束顏色一旦錯位，門框下方守衛符文就會轉亮，西側退路也會被強光短暫吞沒。',
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
      '水晶龍棲台位於洞窟最深處的高台上，白藍水晶包圍四周，巨爪在平台邊緣留下深痕，破碎鱗片像玻璃刀片散落滿地。西側棱鏡門是唯一穩定入口，北方狹窄裂縫能望見地底瀑布水霧。高台中央有被龍爪壓碎的古代王冠與發光鱗片，周圍晶柱會反射龍息軌跡；地面裂光每次擴散，都像在預告下一波落晶與高處振翅。',
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
