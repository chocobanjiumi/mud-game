// 房間擴充定義 - 區域 5-8 的額外房間
// 此檔案由獨立 agent 產生，稍後透過 merge-expansion.ts 合併至主資料

import type { RoomDef } from '@game/shared';

// ============================================================
//  擴充房間定義 (Areas 5-8)
// ============================================================

export const EXPANSION_ROOMS: Record<string, RoomDef> = {

  // ─── Area 5: 翠綠平原擴充 (Lv 5-12) ─────────────────────

  sunflower_field: {
    id: 'sunflower_field',
    name: '向日葵田',
    zone: 'plains',
    image: 'sunflower_field.png',
    imagePrompt: '向日葵田 in plains, exploration room with tall sunflower maze, golden petals, field rat tunnels, bright sun, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text',
    description:
      '金燦燦的向日葵高過人頭，花盤在陽光下緩慢轉動，形成一座帶著花粉香的天然迷宮。東側穿過花田可回平原入口，北邊有獵人小屋的煙囪，南方傳來河水聲。泥土表面佈滿田鼠洞和烏鴉爪痕，最高那株花下的土色明顯較新，提示玩家可 search 找到小型寶物，也可能驚動田鼠群。',
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
    imagePrompt: '獵人小屋 in plains, quest NPC lodge with hides, antlers, porch, forest edge shadow and hearth light, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text',
    description:
      '原木小屋立在向日葵田北緣，門口掛著風乾獸皮、鹿角與狼牙串，壁爐橙光從窗縫灑到門廊。南方回到花田，西側隱蔽小路能通往森林高處，木牆上釘著野狼腳印拓片與箭矢記號。老獵人坐在階梯上擦拭弓弦，獵犬偶爾朝草叢低吼，提示這裡可接狩獵任務、購買補給或詢問狼群線索。',
    exits: [
      { direction: 'south', targetRoomId: 'sunflower_field', description: '回到向日葵田' },
      { direction: 'west', targetRoomId: 'ancient_treehouse', description: '小屋後方有條隱蔽的小路通往古老樹屋' },
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
    imagePrompt: '廢棄礦車道 in plains, resource route room with rusty rails, overturned carts, low cave mouth, cold damp light, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text',
    description:
      '生鏽鐵軌從風車農場東側延伸進低矮洞口，翻覆礦車散落在濕草與碎石間，空氣有鐵鏽、泥水和蝙蝠糞味。西邊可回農場，南方礦道往地底傾斜，車輪印旁有田鼠啃咬過的麻袋。礦車內殘留幾塊閃光礦石，提示這裡是早期採集與洞窟路線入口，但小蝙蝠可能從陰影中飛出。',
    exits: [
      { direction: 'west', targetRoomId: 'windmill_farm', description: '沿著軌道走回風車農場' },
      { direction: 'south', targetRoomId: 'cave_entrance', description: '順著礦車道向南深入地底' },
    ],
    monsters: [
      { monsterId: 'field_rat', maxCount: 2, respawnSeconds: 30 },
      { monsterId: 'small_bat', maxCount: 2, respawnSeconds: 35 },
      { monsterId: 'cave_bat_swarm', maxCount: 1, respawnSeconds: 90 },
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
    imagePrompt: '河邊釣場 in plains, resource fishing room with clear stream, willow trees, flat stones, cool reflected light, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text',
    description:
      '清澈小河蜿蜒穿過平原，柳樹枝條垂成綠色簾幕，幾塊平整大石延伸入水，是天然釣魚平台。北岸通往向日葵田，東側可走向風車內部的水車聲，河泥上有野兔腳印與被田鼠拖走的麥粒。水面銀魚閃動，風帶來濕潤涼意，提示玩家能採集、釣魚或追蹤被沖來的旅人遺物。',
    exits: [
      { direction: 'north', targetRoomId: 'sunflower_field', description: '沿河岸走回向日葵田' },
      { direction: 'east', targetRoomId: 'windmill_interior', description: '河邊有座古老的水車風車' },
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
    imagePrompt: '風車內部 in plains, resource interior room with gears, millstone, flour dust, narrow sunbeams, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text',
    description:
      '厚重木門後方是緩慢轉動的巨大齒輪與石磨，咔嗒聲在圓形塔身內反覆迴盪，麵粉粉塵漂浮在狹窗光束中。北門回風車農場，西側門通往河邊釣場，樓梯陰影裡能看到田鼠拖麥粒留下的細痕。石磨底座有鬆動板塊，提示玩家可調查機關、找回農夫失物，並小心烏鴉從高處俯衝。',
    exits: [
      { direction: 'west', targetRoomId: 'riverside_fishing', description: '走出風車回到河邊' },
      { direction: 'north', targetRoomId: 'windmill_farm', description: '從側門走向風車農場' },
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
    imagePrompt: '野兔洞群 in plains, combat room with burrow holes, trampled grass, low morning light, wild rabbit encounter, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text',
    description:
      '草坡上密密麻麻分布著野兔洞，洞口被乾草和白色絨毛覆住，泥土帶著剛翻開的濕氣。東邊通往平原入口，南側狼跡小路延伸進更高的草叢，西面能聽見遠處石環傳來的風聲。洞口旁有被咬碎的藥草與旅人皮包碎片，提示玩家可在此練習追擊快速怪物，也能 search 找到野兔拖進洞裡的零碎物品。',
    exits: [
      { direction: 'east', targetRoomId: 'plains_entrance', description: '回到平原入口' },
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
    imagePrompt: '狼跡草坡 in plains, combat room with tall grass, wolf tracks, broken fence and cold side light, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text',
    description:
      '草坡被數道狼爪印切開，倒伏草葉一路指向南方陰影，空氣裡有濃重獸腥味和泥土濕味。北邊是野兔洞群，東側可回草原小徑，西邊月光小林的樹影在白天也顯得偏暗。折斷的牧羊杖插在路旁，提醒玩家狼群會結伴出現，若任務要求擊殺野狼，這裡是最直接但也最危險的練功點。',
    exits: [
      { direction: 'north', targetRoomId: 'plains_hare_burrows', description: '回到野兔洞群' },
      { direction: 'east', targetRoomId: 'grass_path', description: '草原小徑在東側' },
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
    imagePrompt: '盜賊藏身處 in plains, elite combat room with canvas lean-to, stolen crates, campfire smoke, dusk light, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text',
    description:
      '幾頂破帆布棚藏在麥田南側的矮丘後，煙灰、酒瓶和偷來的穀袋散落一地，濕木柴冒出刺鼻黑煙。北方可回廢棄礦車道，西邊通往風車農場背後的藥草坡，南側斷橋方向有撤退腳印。箱子上刻著農場印記，提示玩家這裡與風車農場失竊事件相關，戰鬥後可仔細搜查贓物與盜賊留下的線索。',
    exits: [
      { direction: 'north', targetRoomId: 'abandoned_minecart', description: '沿矮丘回到廢棄礦車道' },
      { direction: 'west', targetRoomId: 'plains_herb_slope', description: '藥草坡在西邊' },
      { direction: 'south', targetRoomId: 'plains_broken_bridge', description: '泥腳印通往斷橋' },
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
    imagePrompt: '月影小林 in plains, hidden exploration room with small trees, pale moonlike shade, owl feathers and blue flowers, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text',
    description:
      '一小片矮樹孤立在平原西側，即使正午也有淡淡月色般的冷光停在樹根附近，藍色小花沿著樹影排列。東邊是狼跡草坡，南方石環在樹縫間若隱若現。林地裡有鷹羽、狼毛和被拖拽過的痕跡，提示玩家這裡是隱藏支線與精英線索的前置地點，仔細 inspect 樹根或花叢可能找到通往石環的提示。',
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
    imagePrompt: '藥草斜坡 in plains, resource room with herb patches, bees, sloped grass and amber sunlight, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text',
    description:
      '斜坡朝西展開，野薄荷、止血草和淡紫色小花在石縫間生長，蜜蜂嗡鳴聲被暖風帶得很遠。北邊可回草原小徑，東方盜賊藏身處的煙柱隱約可見，南側斷橋下傳來溪水拍擊聲。地面有採集者留下的小刀痕與籃印，提示玩家可在這裡進行草藥採集或追查被盜補給的去向，但也要留心野豬翻土造成的衝撞路線。',
    exits: [
      { direction: 'north', targetRoomId: 'grass_path', description: '回到草原小徑' },
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
    imagePrompt: '牧羊人營地 in plains, quest camp room with wool tents, sheep pens, cooking fire and evening light, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text',
    description:
      '牧羊人營地靠著農場南側的緩坡搭起，羊圈木欄被撞歪，灰白羊毛掛在刺木上，煮鍋散出奶油與煙草氣味。西邊可回風車農場，南面藥草坡與盜賊藏身處隔著高草相望。營地木桌上有失蹤羊群的簡圖、狼爪拓印和求助紙條，提示玩家能接到護送、尋物或擊退野獸的支線。',
    exits: [
      { direction: 'west', targetRoomId: 'windmill_farm', description: '回到風車農場' },
      { direction: 'south', targetRoomId: 'plains_herb_slope', description: '羊群踩出的路通往藥草坡' },
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
    imagePrompt: '斷木橋 in plains, main route event room with collapsed bridge, creek, muddy tracks and stormy light, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text',
    description:
      '小溪上的木橋斷成兩截，濕木板卡在水流中發出沉悶撞擊聲，橋頭泥地滿是盜賊靴印、野豬蹄印和拖行箱子的痕跡。北邊是藥草斜坡，東側可追向盜賊藏身處，西邊十字路口的路標露出半截。斷橋雖阻路，旁邊倒木形成可繞行的危險捷徑，提示玩家可調查事件、判斷路線或在戰鬥中撤回較安全道路。',
    exits: [
      { direction: 'north', targetRoomId: 'plains_herb_slope', description: '回到藥草斜坡' },
      { direction: 'east', targetRoomId: 'plains_bandit_hideout', description: '盜賊腳印往東延伸' },
      { direction: 'west', targetRoomId: 'crossroads', description: '沿泥路回到十字路口' },
    ],
    monsters: [
      { monsterId: 'bandit', maxCount: 1, respawnSeconds: 60 },
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
    imagePrompt: '古石環 in plains, hidden event room with standing stones, carved runes, cold dawn light and circling crows, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text',
    description:
      '十二塊立石圍成粗糙圓環，表面刻著被苔蘚遮住的古老符號，冷風穿過石縫時像有人低語。北邊月影小林遮住入口，東側能回十字路口，南方守望土丘從草浪中隆起。石環中央有焦黑祭痕與烏鴉羽毛，提示玩家可 inspect 符文、觸發區域事件，或找到與平原狼群異常躁動有關的線索。',
    exits: [
      { direction: 'north', targetRoomId: 'plains_moonlit_copse', description: '回到月影小林' },
      { direction: 'east', targetRoomId: 'old_well', description: '荒草路通向古井旁' },
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
    imagePrompt: '守望土丘 in plains, exploration room on grassy mound, old banner pole, broad view to village forest and river, clear wind light, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text',
    description:
      '守望土丘比周圍草地高出一截，腐朽旗杆插在頂端，風從四面吹來，能同時看見北方石環、東方十字路口和更南側陰暗狼穴入口。草坡上留有舊營火灰、破望遠鏡和被風磨平的哨兵刻字。這裡本身不算危險，但提供方向感與戰術視野，提示玩家可在進入更深處前確認路線、整理任務並觀察狼群巡邏。',
    exits: [
      { direction: 'north', targetRoomId: 'plains_stone_circle', description: '回到古石環' },
      { direction: 'east', targetRoomId: 'crossroads', description: '下坡可回十字路口' },
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
    imagePrompt: '狼群首領棲地 in plains, boss room with grass den, bones, torn banners, red dusk light and wolf silhouettes, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text',
    description:
      '土丘南面的高草被踩成圓形空地，中央堆著白骨、破披風和被咬碎的木盾，血腥味與濕草味混在低沉狼嚎裡。北方斜坡回到守望土丘，東面斷橋方向仍有盜賊丟下的贓物痕跡，西側草牆幾乎封死，只留下狼群出入的窄道。這裡是平原狼群首領活動的棲地，草叢邊緣有多組伏擊腳印與巨大爪痕；玩家進入前應確認藥水、裝備和任務目標，戰鬥後可搜查骨堆取得區域事件線索。空地邊緣插著半截路標，上面還留有從十字路口拖來的鐵釘，顯示狼群已威脅主要道路。風穿過草牆時會暴露幾條短暫撤退縫隙，但狼王嚎叫後這些路徑很快會被狼群封住。',
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
    imagePrompt: '螢火蟲小徑 in dark_forest, main route room lit by magical fireflies, moss carpet, blue-green glow and hidden predators, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text',
    description:
      '密林中這條小徑被數以千計的螢火蟲照亮，藍綠光點沿灌木排列成夢幻走廊，腳下苔蘚柔軟得像濕地毯。西邊可回密林小道，南方螢光逐漸稀疏並轉成毒霧，東側銀光指向精靈祭壇。每一步都踩出微弱磷光，也暴露行蹤；若某片螢火突然熄滅，通常代表暗影狼或蜘蛛正從側面靠近。' +
      '灌木下有精靈胸針、細小骨片和被拖曳的鞋印，提醒玩家這裡既是主路也是伏擊線索點。螢火會短暫聚成箭頭，指向祭壇或毒霧沼澤，適合用 look 判斷下一步任務方向，也能作為受傷時撤回密林小道的光標與安全提示。',
    exits: [
      { direction: 'west', targetRoomId: 'dense_trail', description: '沿著光點回到密林小道' },
      { direction: 'south', targetRoomId: 'deep_poison_swamp', description: '螢火蟲越來越少，空氣越來越潮濕' },
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
    imagePrompt: '毒霧沼澤深處 in dark_forest, elite resource swamp room with purple toxic fog, dead trunks, glowing poisonous mushrooms, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text',
    description:
      '沼澤在此處變得更加深邃，濃厚的紫色毒霧從水面蒸騰而起，遮蔽了一切視線。' +
      '枯朽的樹幹如骸骨般從泥漿中伸出，上面覆蓋著發光的毒蘑菇。' +
      '四處傳來此起彼伏的咕嚕聲和蛙鳴——這裡的一切都帶著毒性。',
    exits: [
      { direction: 'north', targetRoomId: 'firefly_trail', description: '退回螢火蟲小徑' },
      { direction: 'east', targetRoomId: 'mushroom_swamp', description: '沼澤邊緣連接著蘑菇沼澤' },
    ],
    monsters: [
      { monsterId: 'poison_snake', maxCount: 3, respawnSeconds: 40 },
      { monsterId: 'giant_spider', maxCount: 2, respawnSeconds: 50 },
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
    imagePrompt: '精靈祭壇 in dark_forest, landmark room with white stone altar, moon emblem, silver healing light and crystal orb, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text',
    description:
      '古老白色石柱圍成半圓，中央祭壇刻著精靈族月亮紋章，銀白光輝把四周暗影隔在石階之外。西邊螢火蟲小徑仍在閃爍，南方枯萎之林像被詛咒燒乾，祭壇水晶球緩慢旋轉並散出淡淡治癒氣息。石面有新鮮爪痕與乾涸血跡，提示這裡既是地標與劇情節點，也是暗影生物試圖突破結界的前線。' +
      '水晶球內偶爾浮現森林深處與古樹心庭的影像，旁邊石盆殘留可採集的銀色露水。玩家可在此 inspect 月亮紋章，確認詛咒來源、取得支線提示，或沿南側道路追蹤枯萎蔓延的方向，並判斷結界仍能提供短暫庇護。',
    exits: [
      { direction: 'west', targetRoomId: 'firefly_trail', description: '回到螢火蟲小徑' },
      { direction: 'south', targetRoomId: 'withered_forest', description: '祭壇背後的森林一片枯萎' },
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
    imagePrompt: '枯萎之林 in dark_forest, combat room of dead gray trees, ash-covered ground, purple cracks and moving treants, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text',
    description:
      '所有的樹木都失去了生機，灰白色的枝幹扭曲成詭異的形狀，如同無數伸出的手臂。' +
      '地面覆蓋著厚厚的灰燼，踩上去會揚起令人窒息的塵埃。' +
      '枯木之間偶爾傳來沉重的腳步聲——暗黑樹人在這裡遊蕩。',
    exits: [
      { direction: 'north', targetRoomId: 'elf_altar', description: '北方透出一線銀光' },
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
    imagePrompt: '黑暗樹洞 in dark_forest, hidden elite room inside dead giant tree, purple fungi, hollow chamber and deep shadow, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text',
    description:
      '一棵直徑超過十公尺的千年巨木已經完全枯死，中空的樹幹形成了一座天然的暗室。' +
      '樹洞內壁上覆蓋著發出幽紫色光芒的菌類，空氣中充斥著腐朽與魔力交織的氣味。' +
      '樹洞深處似乎通往更深層的空間，黑暗中有什麼東西在低吟。',
    exits: [
      { direction: 'north', targetRoomId: 'withered_forest', description: '爬出樹洞回到枯萎之林' },
    ],
    monsters: [
      { monsterId: 'shadow_treant', maxCount: 1, respawnSeconds: 900 },
      { monsterId: 'cave_bat_swarm', maxCount: 1, respawnSeconds: 80 },
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
    imagePrompt: '蛛網密室 in dark_forest, combat room with giant layered webs, trapped bones, pale shafts of light and spider silhouettes, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text',
    description:
      '密林東側的樹枝被巨大蛛網纏成半封閉空間，白色絲線層層交疊，困住腐葉、獸骨和破裂背包。西邊可退回密林小道，南側根橋方向傳來低沉木頭摩擦聲，蛛網間有幾條通往高處的細線。這裡是巨型蜘蛛的狩獵點，玩家若觸碰閃光物品可能觸發伏擊，但也能找到被困旅人留下的補給與任務證物。',
    exits: [
      { direction: 'west', targetRoomId: 'dense_trail', description: '撥開蛛絲回到密林小道' },
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
    imagePrompt: '黑鴉棲枝 in dark_forest, exploration room with leaning dead trees, black birds, feathers and cold moonlit branches, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text',
    description:
      '幾株傾斜枯木在沼澤北側交錯成高枝平台，黑鴉安靜排列在枝頭，只有羽毛偶爾落進霧中。東方螢火小徑透出微光，南邊毒霧沼澤冒著紫泡，西側可繞往月井方向。枝條上掛著亮片、骨戒和被叼來的紙片，提示玩家可 search 鳥巢尋找線索，但驚動鳥群會引來暗影生物注意。',
    exits: [
      { direction: 'east', targetRoomId: 'firefly_trail', description: '螢火光在東方閃動' },
      { direction: 'south', targetRoomId: 'deep_poison_swamp', description: '毒霧從南方沼澤升起' },
      { direction: 'west', targetRoomId: 'dark_forest_moonwell', description: '冷光從西方水井映出' },
    ],
    monsters: [
      { monsterId: 'dark_crow', maxCount: 3, respawnSeconds: 40 },
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
    imagePrompt: '盤根橋 in dark_forest, main route room with giant exposed roots forming bridge over black stream, dim green light, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text',
    description:
      '數條巨大樹根橫跨黑水溪，形成濕滑窄橋，溪底反射出不屬於天空的綠色微光。北面蛛網密室懸著白絲，西側可回森林深處，南方暗影空地被低霧包圍。根橋兩側沒有護欄，木質表面有狼爪與樹精刻痕，提示玩家這是繞行與撤退的重要路線，但戰鬥中被逼到邊緣會非常危險。',
    exits: [
      { direction: 'north', targetRoomId: 'dark_forest_spider_web', description: '蛛網掛滿北側枝條' },
      { direction: 'west', targetRoomId: 'deep_forest', description: '粗根延回森林深處' },
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
    imagePrompt: '森林女巫小屋 in dark_forest, quest elite room with crooked hut, hanging herbs, green cauldron light and root doorway, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text',
    description:
      '歪斜小屋架在樹根與石塊之間，乾草藥、骨鈴和發光蘑菇掛滿屋簷，綠色坩堝光從門縫溢出。東邊月井散出冷光，南面荊棘迷宮像活物般開合，屋後暗門通向枯萎之林。桌上有被撕開的森林地圖和未完成咒文，提示玩家這裡是任務與精英遭遇點，可調查女巫如何操縱森林詛咒。',
    exits: [
      { direction: 'east', targetRoomId: 'dark_forest_moonwell', description: '月井冷光在東方閃爍' },
      { direction: 'south', targetRoomId: 'dark_forest_bramble_maze', description: '荊棘牆向南開出縫隙' },
      { direction: 'west', targetRoomId: 'withered_forest', description: '屋後小徑通往枯萎之林' },
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
    imagePrompt: '月影井 in dark_forest, resource hidden room with circular stone well, moon reflection, blue water and silver moss, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text',
    description:
      '圓形石井藏在銀苔覆蓋的小空地中，井水不映樹冠，只映出一輪蒼白月亮，周圍空氣帶著清冷礦物味。東邊黑鴉棲枝傳來低叫，西側女巫小屋飄出草藥煙，南面荊棘迷宮堵住去路。井沿有精靈刻痕與水滴形凹槽，提示玩家可採集月井水、解讀符文，或取得解除毒霧與暗影詛咒的材料。',
    exits: [
      { direction: 'east', targetRoomId: 'dark_forest_raven_perch', description: '黑鴉在東側枝頭低鳴' },
      { direction: 'west', targetRoomId: 'dark_forest_witch_hut', description: '女巫小屋隱在西側樹根後' },
      { direction: 'south', targetRoomId: 'dark_forest_bramble_maze', description: '荊棘迷宮在南方纏結' },
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
    imagePrompt: '獵人瞭望棚 in dark_forest, exploration room with camouflaged wooden blind, rope ladder, arrows and filtered forest light, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text',
    description:
      '一座偽裝成枝葉堆的木製瞭望棚架在樹屋南側，繩梯被苔蘚染成暗綠，棚內留下箭袋、磨損望遠筒和幾張狼群巡路草圖。北邊可回古老樹屋，南側靠近蛛網密室，東方能看見暗精靈弓手活動的細長影子。這裡提供安全觀察角度，提示玩家可查看怪物動線、選擇埋伏或撤退路線。',
    exits: [
      { direction: 'north', targetRoomId: 'ancient_treehouse', description: '繩梯上方連回古老樹屋' },
      { direction: 'south', targetRoomId: 'dark_forest_spider_web', description: '蛛網密室在南側枝葉後' },
      { direction: 'east', targetRoomId: 'dark_forest_root_bridge', description: '遠處盤根橋露出一角' },
    ],
    monsters: [
      { monsterId: 'dark_elf_archer', maxCount: 1, respawnSeconds: 75 },
      { monsterId: 'dark_crow', maxCount: 2, respawnSeconds: 40 },
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
    imagePrompt: '荊棘迷宮 in dark_forest, main route room of thorn walls, torn cloth, narrow passages and green-black light, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text',
    description:
      '活著般的荊棘牆在月井南面交錯移動，黑刺上掛著撕裂布條、暗紅樹液和被纏住的獸骨。北邊可退回月影井或女巫小屋，東側通向暗影空地，西邊枯萎之林的灰霧從縫隙滲入。道路會被枝條短暫封閉，提示玩家需要觀察方向、避開纏繞伏擊，並在戰鬥中利用迷宮作為撤退或繞行路線。',
    exits: [
      { direction: 'north', targetRoomId: 'dark_forest_moonwell', description: '月井冷光指引北方出口' },
      { direction: 'east', targetRoomId: 'dark_forest_shadow_clearing', description: '荊棘縫隙通向暗影空地' },
      { direction: 'west', targetRoomId: 'dark_forest_witch_hut', description: '女巫小屋在西北側樹根後' },
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
    imagePrompt: '暗影空地 in dark_forest, elite combat clearing with black mist, claw marks, broken moonlight and circling wolves, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text',
    description:
      '黑霧在林間空地低低旋轉，月光落到地面前就被撕成碎片，周圍樹皮佈滿巨大爪痕。北方盤根橋可作撤退路，西邊荊棘迷宮仍在移動，南方老樹叢傳來深沉心跳般的聲音。地面有狼群圍獵形成的圓形足跡，提示玩家這裡是精英遭遇與 Boss 前哨，進入後應準備群體戰與中斷技能。',
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
    imagePrompt: '古樹心庭 in dark_forest, boss landmark room with ancient heart tree, glowing roots, ruined elven seals and oppressive shadow, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text',
    description:
      '古樹心庭被環狀樹根圍住，中央巨木的樹心裂開，暗紫光從裂縫中一下一下跳動，像整座森林的病灶。北方可退回暗影空地，西北方樹洞通往黑暗樹洞，東側隱約連回精靈遺跡的破碎結界。地上散落精靈封印石、腐化樹心碎片與狼王爪痕，這裡是暗影森林大型事件鉤子與最終地標；玩家需要完成線索、準備隊伍或至少整理補給再挑戰暗影樹靈。' +
      '巨木周圍的根牆會隨心跳聲緩慢開合，短暫露出可撤退的北側缺口，也可能在戰鬥中封住側路。腐化樹心旁有可 loot 的結晶化樹皮與狼群戰利品，暗示擊敗首領後能取得區域推進證物並削弱森林詛咒。',
    exits: [
      { direction: 'north', targetRoomId: 'dark_forest_shadow_clearing', description: '回到暗影空地' },
      { direction: 'west', targetRoomId: 'dark_treehollow', description: '裂根通往黑暗樹洞' },
      { direction: 'east', targetRoomId: 'elf_ruins', description: '破碎結界連向精靈遺跡' },
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
    imagePrompt: '紫水晶走廊 in crystal_cave, main route room made of amethyst pillars, violet arches, dizzying magic light, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text',
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
    imagePrompt: '翡翠池 in crystal_cave, resource room with emerald pool, mirror water, green crystal bed and healing mist, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text',
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
    imagePrompt: '鑽石密室 in crystal_cave, hidden boss room with diamond walls, sealed ancient book, blinding prismatic light, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text',
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
    imagePrompt: '地底瀑布 in crystal_cave, landmark room with tall underground waterfall, crystal-lit water curtain, deep pool and roaring mist, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text',
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
    imagePrompt: '古代祭壇 in crystal_cave, boss landmark room with star-shaped stone pillars, blue rune altar, pure magic energy, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text',
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
    imagePrompt: '回音裂谷 in crystal_cave, main route room with deep chasm, crystal ledges, echoing darkness and blue side light, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text',
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
    imagePrompt: '廢礦工營地 in crystal_cave, quest room with abandoned tents, broken winch, ore crates and lantern crystal light, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text',
    description:
      '廢棄礦工營地卡在礦脈深處西側平台上，破布帳篷、斷裂滑輪和半滿礦石箱散落一地，乾涸油燈反射水晶冷光。東面可回礦脈深處，南側鏡晶迷宮入口被木牌標記，西邊有通往沉沒寶庫的潮濕階梯。營地桌上留著事故記錄與採礦圖，提示玩家可接調查任務、尋找失蹤礦工證物，或補充採集路線情報。',
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
    imagePrompt: '鳴晶廊 in crystal_cave, exploration room with resonating crystal organ columns, musical light waves, violet-blue glow, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text',
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
    imagePrompt: '玻晶橋 in crystal_cave, dangerous route room with transparent crystal bridge over abyss, refraction, distant waterfall mist, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text',
    description:
      '透明晶橋橫跨回音裂谷，橋面薄得能看見腳下黑暗與遠處瀑布水霧，走動時會發出細小裂響。西側回裂谷平台，東邊接到地下河上游，南方可繞到蜥蜴巢穴後方。橋面沒有欄杆，水晶蜥蜴常伏在透明邊緣等待獵物滑倒，提示玩家這裡是高風險通道與撤退捷徑。' +
      '橋下晶刺像倒掛長矛，任何掉落的石子都要很久才聽見回聲。玩家若在這裡戰鬥，應留意位置、擊退效果與東西兩端出口，不要被逼到橋中央，也不要忽略南側繞路和腳下裂痕。橋面反光能提示隱形裂縫與敵影位置細節變化及巡邏節奏。',
    exits: [
      { direction: 'west', targetRoomId: 'crystal_cave_echo_chasm', description: '回到回音裂谷' },
      { direction: 'east', targetRoomId: 'underground_river', description: '橋尾連向地下河' },
      { direction: 'south', targetRoomId: 'crystal_cave_lizard_nest', description: '橋下小徑通往蜥蜴巢穴' },
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
    imagePrompt: '水晶蜥蜴巢 in crystal_cave, combat room with crystal eggs, clawed stone nests, blue mineral dust and lizard tracks, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text',
    description:
      '洞壁被爪痕刮得發亮，數個石窩裡躺著半透明晶蛋，地面覆著細碎藍色晶粉與蜥蜴尾巴掃出的弧線。北面通回回音裂谷，東側可繞到玻晶橋下方，南方有裂縫通向棱鏡門背面。這裡是密集戰鬥房，玩家可收集晶鱗與蛋殼材料，但靠近巢穴中央會引來成群水晶蜥蜴。' +
      '晶蛋會映出入侵者的熱影，讓蜥蜴更快定位獵物。巢穴角落有被拖來的礦工工具與破碎燈盞，提示可找到任務證物，也能循裂縫前往深層門扉或回玻晶橋撤離與重整。蛋殼碎片可作採集材料與任務證物來源點之一處，仍有餘溫。',
    exits: [
      { direction: 'north', targetRoomId: 'crystal_cave_echo_chasm', description: '回到回音裂谷' },
      { direction: 'east', targetRoomId: 'crystal_cave_glass_bridge', description: '繞上玻晶橋' },
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
    imagePrompt: '鏡晶迷宮 in crystal_cave, hidden exploration room of mirrored crystal walls, repeated reflections and cold maze light, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text',
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
    imagePrompt: '魔像鍛造間 in crystal_cave, elite room with ancient golem forge, crystal molds, blue furnace and stone guardians, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text',
    description:
      '古代鍛造間的地面刻著巨大圓形軌道，水晶模具與石質肢體散落在藍焰爐旁，空氣裡有熱石與金屬粉塵味。北方回鏡晶迷宮，東側棱鏡門可被啟動，西側潮濕通道通往沉沒寶庫。半成品魔像胸口仍有微光，提示玩家這裡是精英事件與製作線索房，可調查守衛如何被喚醒。',
    exits: [
      { direction: 'north', targetRoomId: 'crystal_cave_mirror_maze', description: '回到鏡晶迷宮' },
      { direction: 'east', targetRoomId: 'crystal_cave_prism_gate', description: '棱鏡門在東側發亮' },
      { direction: 'west', targetRoomId: 'crystal_cave_submerged_vault', description: '潮濕通道通往沉沒寶庫' },
    ],
    monsters: [
      { monsterId: 'crystal_guardian', maxCount: 1, respawnSeconds: 1200 },
      { monsterId: 'gargoyle', maxCount: 2, respawnSeconds: 80 },
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
    imagePrompt: '沉沒寶庫 in crystal_cave, hidden treasure room half flooded, crystal chests, submerged stairs and blue-green water light, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text',
    description:
      '半淹沒的石室藏在礦工營地下方，水線淹過古代寶箱底部，藍綠光在水面與牆面間晃動。東邊可回廢礦工營地，南側潮濕走道連到魔像鍛造間，水下階梯似乎還往更深處延伸。寶箱封條被水晶包住，旁邊有氣泡與爪痕，提示玩家可搜尋一次性寶物，也要提防水下蜥蜴或守衛甦醒。',
    exits: [
      { direction: 'east', targetRoomId: 'crystal_cave_miner_camp', description: '濕階梯回到礦工營地' },
      { direction: 'south', targetRoomId: 'crystal_cave_golem_forge', description: '潮濕走道通向鍛造間' },
    ],
    monsters: [
      { monsterId: 'crystal_lizard', maxCount: 3, respawnSeconds: 50 },
      { monsterId: 'cave_bat_swarm', maxCount: 1, respawnSeconds: 90 },
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
    imagePrompt: '棱鏡門 in crystal_cave, portal event room with triangular prism gate, rainbow beams, rune locks and crystal stairs, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text',
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
    imagePrompt: '水晶龍棲台 in crystal_cave, boss room with high crystal roost, clawed ledges, dragon scales, blinding white-blue light, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text',
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

  // ─── Area 8: 湖畔城鎮擴充 (Non-combat) ──────────────────

  tavern: {
    id: 'tavern',
    name: '酒館',
    zone: 'lakeside_town',
    image: 'tavern.png',
    imagePrompt: '酒館 in lakeside_town, town service tavern with long tables, hearth light, beer barrels, adventurer notice board and smoky warm air, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text',
    description:
      '推開吱呀作響的木門，啤酒花、烤肉與濕木柴的香氣迎面湧來。酒館內燈火通明，冒險者圍坐長桌交換地下城情報，牆上任務板貼著湖岸委託。南面回商業街，北側後門通向拍賣場；玩家可與酒保交談、接取傳聞任務，或 inspect 角落吟遊詩人的歌詞尋找龍族寶藏線索。',
    exits: [
      { direction: 'south', targetRoomId: 'market_street', description: '回到商業街' },
      { direction: 'north', targetRoomId: 'auction_house', description: '酒館後門通往拍賣場' },
    ],
    monsters: [],
    npcs: ['bartender'],
    mapSymbol: '[B]',
    mapX: 4,
    mapY: 5,
    guardianHints: {
      creature: '角落裡那位沉默的飲客身上散發著不尋常的氣息——他可能並非人類。',
      treasure: '吧台下方有一排落了灰的酒桶，據說其中一桶裝的不是酒，而是某位海盜的藏寶。',
      spirit: '吟遊詩人的歌聲中隱藏著真實的線索——仔細聆聽，你也許能發現寶藏的位置。',
    },
  },

  auction_house: {
    id: 'auction_house',
    name: '拍賣場',
    zone: 'lakeside_town',
    image: 'auction_house.png',
    imagePrompt: '拍賣場 in lakeside_town, town service auction hall with circular podium, display cases, painted dome and golden lantern light, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text',
    description:
      '氣派石造拍賣場有繪著交易之神的穹頂，金色吊燈照著中央圓形拍賣台與階梯觀眾席。展示櫃陳列珍稀材料、舊王國徽章和待鑑定裝備，拍賣官清亮嗓音在大廳迴盪。西側正門連廣場，南邊後門通酒館，東側貨廊通向倉庫；玩家可查看交易、追蹤特殊拍品，或 search 拍賣台底座取得非公開目錄。場內分流牌標示普通拍品、稀有裝備與公會委託櫃台，提醒玩家先確認綁定狀態、稅費與倉庫空間再競價。高台旁的估價水晶會閃出品質顏色，方便追蹤稀有以上裝備來源與成交稅紀錄，也能確認賣家聲望。',
    exits: [
      { direction: 'west', targetRoomId: 'town_plaza', description: '正門通往城鎮廣場' },
      { direction: 'south', targetRoomId: 'tavern', description: '從後門回到酒館' },
    ],
    monsters: [],
    mapSymbol: '[$]',
    mapX: 6,
    mapY: 6,
    guardianHints: {
      creature: '展示櫃裡有一件物品似乎在微微顫動——那可能不是普通的收藏品。',
      treasure: '拍賣台底座的暗格中藏著一份特殊的拍賣品目錄，記載著非公開的稀世珍寶。',
      spirit: '穹頂壁畫上的交易之神的眼睛會隨著訪客移動——這座建築本身就是一件魔法造物。',
    },
  },

  guild_hall: {
    id: 'guild_hall',
    name: '公會大廳',
    zone: 'lakeside_town',
    image: 'guild_hall.png',
    imagePrompt: '公會大廳 in lakeside_town, town service guild hall with crossed sword emblem, round table, magic ranking board and cool skylight, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text',
    description:
      '宏偉建築的大門懸著交叉長劍與月桂冠徽章，冷色天窗照在中央圓桌與歷代精英畫像上。魔法公告板即時更新公會排名、建設需求與王國戰備，長老席旁堆放著待審的公會申請。西側通往轉職大廳，東面連城鎮圖書館，北側小門接法院走廊；玩家可查公會目標、接社交任務，並 inspect 畫像背後的獎杯牆。圓桌旁的地圖用旗針標出可支援的王國戰線與公會建設點，讓隊伍能在出城前分配採集、戰鬥與運輸任務。牆上的鐘會提醒每日與每週目標刷新時間，任務牌也標出推薦隊伍規模與獎勵分類及聲望需求。',
    exits: [
      { direction: 'east', targetRoomId: 'town_library', description: '走廊連接著城鎮圖書館' },
      { direction: 'west', targetRoomId: 'class_change_hall', description: '走廊通往轉職大廳' },
    ],
    monsters: [],
    mapSymbol: '[G]',
    mapX: 5,
    mapY: 4,
    guardianHints: {
      creature: '公會地下訓練場中有被封印的魔獸——公會用牠們來測試新成員的實力。',
      treasure: '歷代精英畫像的背後有一面隱藏的獎杯牆，上面掛著傳說級的裝備碎片。',
      spirit: '圓桌蘊含著歷代公會長的誓言之力，坐在這裡的人會感受到使命感湧上心頭。',
    },
  },

  town_library: {
    id: 'town_library',
    name: '圖書館',
    zone: 'lakeside_town',
    image: 'town_library.png',
    imagePrompt: '圖書館 in lakeside_town, town quest library with high shelves, floating magic lamps, parchment smell and scholar reading alcove, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text',
    description:
      '高聳書架從地板延伸到拱頂，數以萬計的書籍與卷軸散發羊皮紙、墨水和防潮草藥味。懸浮魔法燈在每排書架上方投下暖光，銀髮學者正在閱讀區研究泛黃湖區地圖。西側回公會大廳，南面地下階梯通往監獄；玩家可查閱怪物圖鑑、接探索任務，或 inspect 禁區書架尋找被鎖鏈束縛的知識生物。閱讀桌上的索引卡提示各區域怪物弱點、採集材料與傳送解鎖條件，是規劃低等到高等路線的重要情報點。書梯旁另有舊地圖櫃，標出隱藏水道與城外道路，並留下可追蹤的頁碼標籤與任務批注及調查順序。',
    exits: [
      { direction: 'west', targetRoomId: 'guild_hall', description: '走廊通回公會大廳' },
      { direction: 'south', targetRoomId: 'prison', description: '圖書館地下層有通道通往監獄' },
    ],
    monsters: [],
    npcs: ['librarian'],
    mapSymbol: '[K]',
    mapX: 6,
    mapY: 4,
    guardianHints: {
      creature: '禁區書架上的某些書籍被魔法鎖鏈束縛——裡面封印著危險的知識生物。',
      treasure: '老學者研究的地圖標示著一處從未被探索過的遺跡位置。',
      spirit: '圖書館的書頁中沉睡著無數智者的靈魂碎片，翻開特定的書籍可以與他們對話。',
    },
  },

  prison: {
    id: 'prison',
    name: '監獄',
    zone: 'lakeside_town',
    image: 'prison.png',
    imagePrompt: '監獄 in lakeside_town, town quest prison with damp stone cells, iron bars, torch shadows and guarded evidence room, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text',
    description:
      '陰暗潮濕的地下通道連接一排排鐵欄牢房，火把在鹽漬石牆上搖曳，把影子拉得又長又尖。多數牢房空置，深處卻偶爾傳來鐵鏈哐啷與低聲供詞。北面階梯回圖書館，西側暗渠可通往隱藏水道；玩家可與獄卒確認通緝任務、search 儲物間沒收品，也能 inspect 囚犯塗鴉找到越獄隧道線索。',
    exits: [
      { direction: 'north', targetRoomId: 'town_library', description: '從地下通道回到圖書館' },
    ],
    monsters: [],
    npcs: ['prison_guard'],
    mapSymbol: '[P]',
    mapX: 6,
    mapY: 5,
    guardianHints: {
      creature: '最深處的牢房門上刻著封印紋章——裡面關押的並非普通犯人。',
      treasure: '獄卒輪班交接時，走廊盡頭的儲物間門會短暫開啟，裡面存放著沒收的違禁品。',
      spirit: '牢房牆壁上刻滿了囚犯的塗鴉，其中一段文字記載著越獄隧道的入口位置。',
    },
  },

  lakeside_inn: {
    id: 'lakeside_inn',
    name: '湖景旅店',
    zone: 'lakeside_town',
    image: 'lakeside_inn.png',
    imagePrompt: '湖景旅店 in lakeside_town, town service inn with lake-facing windows, clean beds, blue curtains and candlelit reception desk, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text',
    description:
      '湖景旅店坐在商業街北端，開闊窗戶面向靜藍湖面，白色床單帶著薰衣草與乾木香。接待櫃檯掛著房牌、失物袋與冒險者留言，樓梯旁有通往酒館的短廊。南面回商業街，東側小門接神殿巷；玩家可在此休息、整理重生點與查看失物，也能 inspect 旅客留言找到湖岸支線線索。',
    exits: [
      { direction: 'south', targetRoomId: 'market_street', description: '旅店門口回到商業街' },
      { direction: 'east', targetRoomId: 'lakeside_temple', description: '安靜小巷通往神殿' },
      { direction: 'north', targetRoomId: 'tavern', description: '短廊連到酒館後側' },
    ],
    monsters: [],
    mapSymbol: '[I]',
    mapX: 4,
    mapY: 4,
  },

  lakeside_bank: {
    id: 'lakeside_bank',
    name: '銀鱗銀行',
    zone: 'lakeside_town',
    image: 'lakeside_bank.png',
    imagePrompt: '銀鱗銀行 in lakeside_town, town service bank with iron vault door, silver scale counters, ledgers and cold blue security light, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text',
    description:
      '銀鱗銀行以厚重湖石與鐵門建成，櫃檯上鋪著銀鱗紋銅板，冷藍防盜符文沿金庫門緩慢流動。帳本、印章與秤盤整齊排列，地面回音讓每一步都格外清楚。西側連拍賣場貨廊，南面通倉庫；玩家可存放財物、查交易紀錄，或 search 櫃檯裂縫發現可疑押品標記。',
    exits: [
      { direction: 'west', targetRoomId: 'auction_house', description: '貨廊回到拍賣場' },
      { direction: 'south', targetRoomId: 'lakeside_warehouse', description: '鐵門後是倉庫區' },
    ],
    monsters: [],
    mapSymbol: '[$]',
    mapX: 7,
    mapY: 6,
  },

  lakeside_temple: {
    id: 'lakeside_temple',
    name: '湖光神殿',
    zone: 'lakeside_town',
    image: 'lakeside_temple.png',
    imagePrompt: '湖光神殿 in lakeside_town, town service temple with shallow reflecting pool, pale stone altar, blue stained glass and holy dawn light, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text',
    description:
      '湖光神殿以白石拱柱圍著淺水池，藍色彩窗把晨光折成柔和波紋，空氣裡有清水與香草味。祭壇旁擺著祈願牌、治療記錄與迷途者名冊。西側小巷回旅店，南面階梯下到傳送廣場；玩家可祈福、確認復活服務，或 inspect 水池倒影取得失蹤旅人任務提示。神官會說明死亡懲罰、復活位置與安全撤離規則，池邊蠟燭數量也暗示最近湖岸危險事件是否增加。牆面聖徽會記錄已啟用的安全點，讓玩家出城前確認死亡回程位置與治療補給是否足夠，並查看最近安全入口與復活費用，避免長途失誤和任務中斷。',
    exits: [
      { direction: 'west', targetRoomId: 'lakeside_inn', description: '小巷回到湖景旅店' },
      { direction: 'south', targetRoomId: 'lakeside_portal_square', description: '石階通往傳送廣場' },
    ],
    monsters: [],
    mapSymbol: '[T]',
    mapX: 5,
    mapY: 3,
  },

  lakeside_portal_square: {
    id: 'lakeside_portal_square',
    name: '湖畔傳送廣場',
    zone: 'lakeside_town',
    image: 'lakeside_portal_square.png',
    imagePrompt: '湖畔傳送廣場 in lakeside_town, town traffic portal room with circular runes, blue lake mist, brass pylons and stable magic light, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text',
    description:
      '湖畔傳送廣場鋪著環形符文石，黃銅導柱圍住穩定的藍色傳送光，湖霧從欄杆外飄入法陣邊緣。交通告示牌標明已解鎖節點、費用與冷卻規則，守衛會檢查戰鬥狀態與危險物資。北面通神殿，西側拱門回城鎮廣場，東側道路接魚市；玩家可 activate portal、travel 或 recall，並 inspect 導柱查看深處捷徑線索。地面刻有不同網路的顏色環，提醒玩家公共傳送、區域入口與危險撤離點的限制並不相同。法陣邊緣的灰色插槽會顯示尚未解鎖的區域，作為後續任務目標與費用提示，也標明冷卻剩餘時間與可用出口及回程路線與安全標記。',
    exits: [
      { direction: 'north', targetRoomId: 'lakeside_temple', description: '階梯回到湖光神殿' },
      { direction: 'west', targetRoomId: 'town_plaza', description: '拱門通往城鎮廣場' },
      { direction: 'east', targetRoomId: 'lakeside_fish_market', description: '湖風帶來魚市氣味' },
    ],
    monsters: [],
    mapSymbol: '[O]',
    mapX: 6,
    mapY: 3,
  },

  lakeside_blacksmith: {
    id: 'lakeside_blacksmith',
    name: '湖鐵鍛坊',
    zone: 'lakeside_town',
    image: 'lakeside_blacksmith.png',
    imagePrompt: '湖鐵鍛坊 in lakeside_town, town service blacksmith with lake-iron anvils, orange forge light, weapon racks and steam vents, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text',
    description:
      '湖鐵鍛坊靠近市場南側，橘紅爐光照著沉重鐵砧、武器架與一排淬火水槽，蒸汽帶著金屬與炭灰味。牆上掛著修理價目、強化委託和缺料清單。北面回商業街，東側棚道接裁縫坊；玩家可修理、強化或接取材料委託，search 爐邊廢料能找到仍可回收的礦石碎片。',
    exits: [
      { direction: 'north', targetRoomId: 'market_street', description: '回到商業街' },
      { direction: 'east', targetRoomId: 'lakeside_tailor', description: '棚道連到裁縫坊' },
    ],
    monsters: [],
    mapSymbol: '[F]',
    mapX: 4,
    mapY: 7,
  },

  lakeside_tailor: {
    id: 'lakeside_tailor',
    name: '月紋裁縫坊',
    zone: 'lakeside_town',
    image: 'lakeside_tailor.png',
    imagePrompt: '月紋裁縫坊 in lakeside_town, town service tailor workshop with cloth bolts, mannequins, silver thread and soft window light, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text',
    description:
      '月紋裁縫坊掛滿布卷、皮革樣片與半成品披風，銀線在窗光下像湖面月痕般閃爍。木製人台旁放著量尺、染料瓶與訂單卡，後牆標示各職業護甲需求。西側棚道回鍛坊，東面短街通魚市；玩家可製作或改造布甲皮甲，inspect 訂單卡可找到指定外觀與材料來源。',
    exits: [
      { direction: 'west', targetRoomId: 'lakeside_blacksmith', description: '棚道回到鍛坊' },
      { direction: 'east', targetRoomId: 'lakeside_fish_market', description: '短街通往魚市' },
    ],
    monsters: [],
    mapSymbol: '[S]',
    mapX: 5,
    mapY: 8,
  },

  lakeside_warehouse: {
    id: 'lakeside_warehouse',
    name: '湖港倉庫',
    zone: 'lakeside_town',
    image: 'lakeside_warehouse.png',
    imagePrompt: '湖港倉庫 in lakeside_town, town service warehouse with stacked crates, rope nets, ledger desk and dim lantern aisles, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text',
    description:
      '湖港倉庫由粗木梁和厚石牆支撐，成排貨箱、繩網與封蠟袋堆到屋頂，昏黃提燈讓巷道像迷宮。帳桌上放著入庫單與遺失貨物清單，角落有通往暗渠的排水門。北面連銀鱗銀行，西側貨門回拍賣場；玩家可管理倉庫、接找貨任務，或 search 箱底發現被調包的商品。',
    exits: [
      { direction: 'north', targetRoomId: 'lakeside_bank', description: '鐵門通回銀行' },
      { direction: 'west', targetRoomId: 'auction_house', description: '貨門連到拍賣場' },
      { direction: 'south', targetRoomId: 'lakeside_hidden_canal', description: '排水門後傳來潮聲' },
    ],
    monsters: [],
    mapSymbol: '[W]',
    mapX: 7,
    mapY: 7,
  },

  lakeside_fish_market: {
    id: 'lakeside_fish_market',
    name: '湖鮮魚市',
    zone: 'lakeside_town',
    image: 'lakeside_fish_market.png',
    imagePrompt: '湖鮮魚市 in lakeside_town, town social fish market with wet stone stalls, hanging nets, blue lake light and silver fish scales, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text',
    description:
      '湖鮮魚市鋪著潮濕青石，銀鱗魚、蟹籠和藍色水草堆在攤位上，鹽味與湖泥味混著吆喝聲。碼頭方向有漁船鈴聲，攤販桌下藏著今日捕獲記錄。西面短街回裁縫坊，北側是傳送廣場，南側木棧橋連到隱藏水道入口；玩家可買材料、接釣魚委託，或 inspect 魚鰓找出受污染湖域線索。魚販會把異常魚鱗、湖底碎片與每日行情放在不同木盤上，讓採集與烹飪路線有清楚材料來源。潮汐牌也會提示前往東方海岸與釣魚點的最佳時間，旁邊水桶可檢查稀有魚影與採集等級需求，並指向碼頭與水道入口標記處。',
    exits: [
      { direction: 'west', targetRoomId: 'lakeside_tailor', description: '短街回裁縫坊' },
      { direction: 'north', targetRoomId: 'lakeside_portal_square', description: '石路回到傳送廣場' },
      { direction: 'south', targetRoomId: 'lakeside_hidden_canal', description: '棧橋下有隱蔽水門' },
    ],
    monsters: [],
    mapSymbol: '[f]',
    mapX: 7,
    mapY: 8,
  },

  lakeside_courthouse: {
    id: 'lakeside_courthouse',
    name: '湖畔裁判所',
    zone: 'lakeside_town',
    image: 'lakeside_courthouse.png',
    imagePrompt: '湖畔裁判所 in lakeside_town, town quest courthouse with marble benches, sealed evidence shelves, high windows and stern white light, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text',
    description:
      '湖畔裁判所以白色大理石長椅、封蠟證物架與高窗冷光構成嚴肅空間，法槌聲似乎仍在牆面回響。公告板列出通緝犯、走私案與公會糾紛，側門通向公會大廳，地下卷宗梯通監獄。南面連公會大廳，東側下行到監獄；玩家可接通緝與證物任務，search 旁聽席能找到被落下的證詞碎片。證物架上的編號對應監獄牢房與水道暗號，讓玩家能把城市探索、審判紀錄和追捕任務串成同一條線。書記桌上還標明哪些案件需要屍體物品或現場調查，並提示交回證物的位置與期限，方便核對任務紀錄與證物袋。',
    exits: [
      { direction: 'south', targetRoomId: 'guild_hall', description: '側門回公會大廳' },
      { direction: 'east', targetRoomId: 'prison', description: '卷宗梯通往地下監獄' },
    ],
    monsters: [],
    mapSymbol: '[J]',
    mapX: 5,
    mapY: 2,
  },

  lakeside_hidden_canal: {
    id: 'lakeside_hidden_canal',
    name: '隱藏水道',
    zone: 'lakeside_town',
    image: 'lakeside_hidden_canal.png',
    imagePrompt: '隱藏水道 in lakeside_town, hidden exploration canal with mossy arches, black water, smuggler marks and narrow lantern light, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text',
    description:
      '隱藏水道位於倉庫與魚市下方，苔痕覆滿拱形磚牆，黑水反射狹窄提燈光，牆角刻著走私者留下的潮汐記號。北面排水門回倉庫，東北木梯通魚市，西側狹洞連監獄牢房後方。這是城鎮少見的探索房，玩家可 search 破箱取得一次性藏物，inspect 潮汐記號找出海岸走私路線，但也要注意濕滑地面和暗處的警鈴線。',
    exits: [
      { direction: 'north', targetRoomId: 'lakeside_warehouse', description: '排水門回到倉庫' },
      { direction: 'east', targetRoomId: 'lakeside_fish_market', description: '木梯通往魚市棧橋' },
      { direction: 'west', targetRoomId: 'prison', description: '狹洞連到監獄後牆' },
    ],
    monsters: [],
    groundItems: [
      { itemId: 'rare_fossil', description: '破箱裡壓著一枚被湖泥包住的奇特化石' },
    ],
    mapSymbol: '[?]',
    mapX: 7,
    mapY: 9,
  },

  // ─── Area 9: 魔族領地 (Lv 30-40) ──────────────────────────

  demon_border: {
    id: 'demon_border',
    name: '魔族邊境',
    zone: 'demon_territory' as RoomDef['zone'],
    description:
      '冰封雪原的盡頭，大地突然斷裂成一道巨大的裂谷。裂谷對面是一片焦黑的荒原，' +
      '空氣中瀰漫著硫磺的刺鼻氣味，遠方的天空被永恆的紅色火焰映照。' +
      '一座搖搖欲墜的石橋橫跨裂谷，這是通往魔族領地的唯一通路。',
    exits: [
      { direction: 'south', targetRoomId: 'ice_throne', description: '退回冰封王座' },
      { direction: 'north', targetRoomId: 'scorched_plains', description: '踏上焦黑的荒原' },
    ],
    monsters: [
      { monsterId: 'imp', maxCount: 3, respawnSeconds: 40 },
      { monsterId: 'demon_soldier', maxCount: 1, respawnSeconds: 60 },
    ],
    mapSymbol: '[邊]',
    mapX: 3,
    mapY: 17,
    guardianHints: {
      creature: '裂谷中偶爾飛出的小惡魔會從背後偷襲——注意腳下的陰影。',
      treasure: '石橋的橋墩裡嵌著一塊暗紅色的寶石，似乎是魔族用來維持橋樑的動力源。',
      spirit: '這座裂谷是遠古大戰中諸神之力撕裂大地所形成的，至今仍殘留著神魔交戰的餘波。',
    },
  },

  scorched_plains: {
    id: 'scorched_plains',
    name: '焦土平原',
    zone: 'demon_territory' as RoomDef['zone'],
    description:
      '一望無際的焦黑平原，大地龜裂如蛛網，裂縫中不時竄出赤紅色的火焰。' +
      '枯萎的樹木如同黑色的骨架矗立其間，天空永遠籠罩在灰紅色的煙塵之下。' +
      '遠處傳來低沉的戰鼓聲，那是魔族巡邏隊的信號。',
    exits: [
      { direction: 'south', targetRoomId: 'demon_border', description: '退回邊境裂谷' },
      { direction: 'north', targetRoomId: 'demon_village', description: '隱約可見魔族的營帳' },
      { direction: 'east', targetRoomId: 'blood_river', description: '一條殷紅的河流在東方流淌' },
    ],
    monsters: [
      { monsterId: 'imp', maxCount: 3, respawnSeconds: 35 },
      { monsterId: 'hellhound', maxCount: 2, respawnSeconds: 50 },
    ],
    mapSymbol: '[焦]',
    mapX: 3,
    mapY: 18,
    guardianHints: {
      creature: '地獄犬會成對出現，一隻正面牽制，另一隻從側面撲咬——優先擊倒側面的那隻。',
      treasure: '大地裂縫深處有一層凝固的熔岩，其中混雜著高純度的魔力結晶。',
      spirit: '這片平原曾是繁花盛開的草原，千年前的魔族入侵將一切化為焦土。大地仍記得綠色的夢。',
    },
  },

  demon_village: {
    id: 'demon_village',
    name: '魔族村落',
    zone: 'demon_territory' as RoomDef['zone'],
    description:
      '由黑色岩石和獸骨搭建的簡陋村落，低矮的帳篷和骨架棚屋散佈其間。' +
      '魔族士兵在村中巡邏，鍛造爐裡的火焰徹夜不熄，空氣中充斥著金屬和鮮血的氣味。' +
      '村落中央的圖騰柱上掛滿了冒險者的裝備殘骸，作為對入侵者的警告。',
    exits: [
      { direction: 'south', targetRoomId: 'scorched_plains', description: '回到焦土平原' },
      { direction: 'north', targetRoomId: 'dark_fortress_gate', description: '村落北方矗立著黑暗要塞' },
      { direction: 'west', targetRoomId: 'demon_treasury', description: '村落深處有一間上鎖的石屋', locked: true, keyItemId: 'silver_key' },
    ],
    monsters: [
      { monsterId: 'demon_soldier', maxCount: 3, respawnSeconds: 45 },
      { monsterId: 'imp', maxCount: 2, respawnSeconds: 35 },
    ],
    mapSymbol: '[村]',
    mapX: 3,
    mapY: 19,
    guardianHints: {
      creature: '魔族士兵換崗時防備最為鬆懈——觀察巡邏路線找出空檔。',
      treasure: '圖騰柱上掛著的裝備殘骸中有幾件看起來品質不錯，或許還能修復。',
      spirit: '這些低階魔族並非天生邪惡——他們只是在魔王的暴政下求生的可憐生物。',
    },
  },

  blood_river: {
    id: 'blood_river',
    name: '血河',
    zone: 'demon_territory' as RoomDef['zone'],
    description:
      '一條殷紅如血的河流在焦土中蜿蜒流淌，河面冒著騰騰的熱氣。' +
      '河水並非真正的血液，而是被地底深處的魔力礦脈污染的熔岩水。' +
      '河岸邊散落著被腐蝕的骨骸和扭曲的金屬殘片。',
    exits: [
      { direction: 'west', targetRoomId: 'scorched_plains', description: '沿河岸回到焦土平原' },
      { direction: 'south', targetRoomId: 'dark_fortress_gate', description: '河流上游通往要塞' },
    ],
    monsters: [
      { monsterId: 'hellhound', maxCount: 2, respawnSeconds: 50 },
      { monsterId: 'succubus', maxCount: 1, respawnSeconds: 70 },
    ],
    mapSymbol: '[血]',
    mapX: 4,
    mapY: 18,
    guardianHints: {
      creature: '魅魔會偽裝成迷路的旅人來誘惑冒險者——不要被外表所騙。',
      treasure: '河床中沉積著被魔力結晶化的礦石，是鍛造魔族武器的稀有材料。',
      spirit: '血河的源頭據說是遠古魔神的傷口，至今仍在流淌著神之血液。',
    },
  },

  dark_fortress_gate: {
    id: 'dark_fortress_gate',
    name: '黑暗要塞大門',
    zone: 'demon_territory' as RoomDef['zone'],
    description:
      '高聳入雲的黑色城牆擋在前方，由巨大的暗黑岩石砌成，表面刻滿了魔族的詛咒符文。' +
      '城門由兩扇十公尺高的鑄鐵大門構成，門上釘著巨大的惡魔頭顱裝飾。' +
      '門前的廣場上，魔族將軍正在操練一隊魔族士兵。',
    exits: [
      { direction: 'south', targetRoomId: 'demon_village', description: '退回魔族村落' },
      { direction: 'north', targetRoomId: 'blood_river', description: '沿著血河撤退' },
      { direction: 'east', targetRoomId: 'torture_chamber', description: '穿過城門進入要塞', locked: true, keyItemId: 'silver_key' },
    ],
    monsters: [
      { monsterId: 'demon_soldier', maxCount: 3, respawnSeconds: 50 },
      { monsterId: 'demon_general', maxCount: 1, respawnSeconds: 1800 },
    ],
    mapSymbol: '[門]',
    mapX: 3,
    mapY: 20,
    guardianHints: {
      creature: '魔族將軍的指揮能讓士兵獲得增益——優先擊倒將軍可以瓦解敵陣。',
      treasure: '城門上的詛咒符文實際上是一道魔法鎖——破解它可以繞過守衛直接進入要塞。',
      spirit: '這座要塞建在一座遠古神殿的遺址上，黑暗力量是從地底深處滲透出來的。',
    },
  },

  torture_chamber: {
    id: 'torture_chamber',
    name: '拷問室',
    zone: 'demon_territory' as RoomDef['zone'],
    description:
      '要塞內部陰暗潮濕的石室，牆壁上掛滿了生鏽的鐵鏈和刑具。' +
      '空氣中瀰漫著令人作嘔的血腥氣味，角落裡堆放著破碎的籠子和骨骸。' +
      '偶爾能聽到從更深處傳來的淒厲慘叫聲。',
    exits: [
      { direction: 'west', targetRoomId: 'dark_fortress_gate', description: '退回要塞大門' },
      { direction: 'north', targetRoomId: 'demon_barracks', description: '通道通往魔族兵營' },
      { direction: 'east', targetRoomId: 'summoning_circle', description: '暗紅的光芒從東方透出' },
    ],
    monsters: [
      { monsterId: 'succubus', maxCount: 2, respawnSeconds: 65 },
      { monsterId: 'demon_soldier', maxCount: 2, respawnSeconds: 50 },
    ],
    mapSymbol: '[刑]',
    mapX: 3,
    mapY: 21,
    guardianHints: {
      creature: '魅魔在此處會使用精神攻擊——保持意志堅定是生存的關鍵。',
      treasure: '刑具架後方的暗格中藏著一把鑰匙，可以打開通往寶庫的密道。',
      spirit: '被囚禁在此的靈魂仍在徘徊，幫助他們解脫或許能獲得意想不到的祝福。',
    },
  },

  demon_barracks: {
    id: 'demon_barracks',
    name: '魔族兵營',
    zone: 'demon_territory' as RoomDef['zone'],
    description:
      '寬闊的地下營房中排列著數百張由獸骨和獸皮製成的簡陋床鋪。' +
      '武器架上陳列著各式各樣的魔族武器，牆壁上掛著作戰地圖和戰旗。' +
      '空氣中充斥著魔族特有的刺鼻體味，偶爾能聽到士兵們的粗獷笑聲。',
    exits: [
      { direction: 'south', targetRoomId: 'torture_chamber', description: '回到拷問室' },
      { direction: 'west', targetRoomId: 'summoning_circle', description: '兵營深處有一道暗紅的門' },
    ],
    monsters: [
      { monsterId: 'demon_soldier', maxCount: 3, respawnSeconds: 45 },
      { monsterId: 'hellhound', maxCount: 2, respawnSeconds: 55 },
    ],
    mapSymbol: '[營]',
    mapX: 4,
    mapY: 21,
    guardianHints: {
      creature: '兵營中的魔族士兵會互相支援——試著把他們引到狹窄的通道中各個擊破。',
      treasure: '武器架上有一把品質異常精良的魔族劍，或許是將軍的備用武器。',
      spirit: '牆上的作戰地圖標示著魔族的進攻計劃——帶回去交給冒險者公會可能會有重賞。',
    },
  },

  summoning_circle: {
    id: 'summoning_circle',
    name: '召喚陣',
    zone: 'demon_territory' as RoomDef['zone'],
    description:
      '一間圓形的巨大石室，地面刻著複雜的魔法陣，暗紅色的能量脈動從符文中湧出。' +
      '空氣中充滿了灼熱的魔力，呼吸都變得困難。四根黑色石柱上燃燒著不滅的鬼火，' +
      '將整個空間映照成地獄般的景象。這裡是魔王從深淵召喚惡魔的場所。',
    exits: [
      { direction: 'west', targetRoomId: 'torture_chamber', description: '退回拷問室' },
      { direction: 'east', targetRoomId: 'demon_barracks', description: '退回兵營' },
      { direction: 'north', targetRoomId: 'demon_throne', description: '召喚陣背後是魔王殿的入口' },
    ],
    monsters: [
      { monsterId: 'succubus', maxCount: 2, respawnSeconds: 70 },
      { monsterId: 'demon_general', maxCount: 1, respawnSeconds: 1800 },
    ],
    mapSymbol: '[陣]',
    mapX: 3,
    mapY: 22,
    guardianHints: {
      creature: '召喚陣啟動時會持續召喚小惡魔——破壞四根石柱上的鬼火可以中斷召喚。',
      treasure: '魔法陣的核心處嵌著一顆魔力水晶，蘊含著強大的暗黑能量。',
      spirit: '這個召喚陣連接著深淵——如果不阻止魔王，更強大的惡魔將會降臨。',
    },
  },

  demon_throne: {
    id: 'demon_throne',
    name: '魔王殿',
    zone: 'demon_territory' as RoomDef['zone'],
    description:
      '黑暗要塞的最深處，一座由無數骨骸堆砌而成的王座矗立在大殿中央。' +
      '魔王端坐其上，渾身散發著令人窒息的威壓。殿堂四壁鑲嵌著燃燒的魔力結晶，' +
      '映照出魔王那雙如烈焰般的瞳孔。這裡是魔族領地的心臟，也是最危險的戰場。',
    exits: [
      { direction: 'south', targetRoomId: 'summoning_circle', description: '退回召喚陣' },
      { direction: 'north', targetRoomId: 'dragon_valley_entrance', description: '魔王殿背後的秘密通道通向一片未知的山谷' },
    ],
    monsters: [
      { monsterId: 'demon_general', maxCount: 2, respawnSeconds: 1800 },
      { monsterId: 'demon_lord', maxCount: 1, respawnSeconds: 1800 },
    ],
    mapSymbol: '[魔]',
    mapX: 3,
    mapY: 23,
    guardianHints: {
      creature: '魔王會在HP低於一半時暴走，攻擊力和速度大幅提升——準備好防禦和恢復道具。',
      treasure: '魔王的骨座下方藏著一把傳說中的魔劍，是歷代魔王力量的結晶。',
      spirit: '現任魔王並非最初的統治者——他是通過弒殺前任魔王奪得王位的。或許可以利用這段歷史。',
    },
  },

  demon_treasury: {
    id: 'demon_treasury',
    name: '魔族寶庫',
    zone: 'demon_territory' as RoomDef['zone'],
    description:
      '一間由魔法結界守護的石室，四壁鑲嵌著發光的紅色寶石。' +
      '室內堆放著從各地掠奪來的金幣、寶石和魔法物品，散發著誘人的光芒。' +
      '但寶庫中設有多重陷阱，貿然觸碰任何東西都可能觸發毀滅性的詛咒。',
    exits: [
      { direction: 'east', targetRoomId: 'demon_village', description: '回到魔族村落' },
    ],
    monsters: [
      { monsterId: 'demon_soldier', maxCount: 2, respawnSeconds: 60 },
      { monsterId: 'succubus', maxCount: 1, respawnSeconds: 75 },
    ],
    groundItems: [
      { itemId: 'rare_fossil', description: '寶庫角落有一塊奇特的化石' },
    ],
    mapSymbol: '[寶]',
    mapX: 2,
    mapY: 19,
    guardianHints: {
      creature: '寶庫的守衛比外面的巡邏兵更加精銳——他們是魔王親衛隊的成員。',
      treasure: '寶庫最深處的箱子裡藏著魔族的遠古聖物，據說能大幅提升暗屬性魔法的威力。',
      spirit: '這些寶物中有許多來自被魔族毀滅的王國，歸還它們或許能解開某些古老的詛咒。',
    },
  },

  // ─── Area 10: 龍谷 (Lv 40-50) ─────────────────────────────

  dragon_valley_entrance: {
    id: 'dragon_valley_entrance',
    name: '龍谷入口',
    zone: 'dragon_valley' as RoomDef['zone'],
    description:
      '穿過魔王殿背後的秘密通道，眼前豁然開朗。兩座巍峨的山峰如同巨龍的翅膀展開，' +
      '中間的峽谷被雲霧繚繞，空氣中瀰漫著古老而神秘的氣息。' +
      '入口處的岩壁上刻著龍族的古老文字，警告著所有膽敢踏入的生命。',
    exits: [
      { direction: 'south', targetRoomId: 'demon_throne', description: '退回魔王殿' },
      { direction: 'north', targetRoomId: 'dragon_nest_path', description: '踏入雲霧繚繞的峽谷' },
      { direction: 'east', targetRoomId: 'dragon_bone_field', description: '東方散落著巨大的白骨' },
    ],
    monsters: [
      { monsterId: 'young_dragon', maxCount: 2, respawnSeconds: 60 },
      { monsterId: 'wyvern', maxCount: 1, respawnSeconds: 75 },
    ],
    mapSymbol: '[龍]',
    mapX: 3,
    mapY: 24,
    guardianHints: {
      creature: '幼龍的火焰吐息有固定的冷卻時間——在牠噴完火後的五秒內是最佳攻擊時機。',
      treasure: '岩壁上的龍族文字實際上是一張藏寶圖，記載著龍之寶庫的位置。',
      spirit: '龍谷是龍族最後的聖地——在遠古戰爭中倖存的龍族後裔在此繁衍生息。',
    },
  },

  dragon_nest_path: {
    id: 'dragon_nest_path',
    name: '龍巢小徑',
    zone: 'dragon_valley' as RoomDef['zone'],
    description:
      '一條蜿蜒在峭壁之間的狹窄小徑，兩側的岩壁上佈滿了龍爪留下的深深抓痕。' +
      '不時有巨大的影子掠過頭頂——那是在天空中盤旋的飛龍。' +
      '小徑上散落著巨大的鱗片，每一片都比人的手掌還大。',
    exits: [
      { direction: 'south', targetRoomId: 'dragon_valley_entrance', description: '退回龍谷入口' },
      { direction: 'north', targetRoomId: 'wyvern_cliff', description: '小徑通向一處懸崖' },
      { direction: 'west', targetRoomId: 'dragon_egg_chamber', description: '岩壁中有一個隱蔽的洞口' },
    ],
    monsters: [
      { monsterId: 'young_dragon', maxCount: 2, respawnSeconds: 55 },
      { monsterId: 'dragon_knight', maxCount: 1, respawnSeconds: 80 },
    ],
    mapSymbol: '[徑]',
    mapX: 3,
    mapY: 25,
    guardianHints: {
      creature: '龍騎士是駕馭飛龍的精銳戰士——先擊落他的坐騎可以大幅削弱戰力。',
      treasure: '散落的龍鱗中有幾片品質極高的古龍鱗，是鍛造龍鱗甲的頂級材料。',
      spirit: '這條小徑是幼龍學習飛翔的訓練場——岩壁上的抓痕記錄著牠們成長的軌跡。',
    },
  },

  wyvern_cliff: {
    id: 'wyvern_cliff',
    name: '飛龍崖',
    zone: 'dragon_valley' as RoomDef['zone'],
    description:
      '一處突出於山壁的巨大平台，三面臨崖，下方是萬丈深淵。' +
      '強勁的山風在崖頂呼嘯，雲層就在腳下翻湧。數隻飛龍在崖邊的巢穴中棲息，' +
      '牠們銳利的目光警惕地注視著每一個靠近的生物。',
    exits: [
      { direction: 'south', targetRoomId: 'dragon_nest_path', description: '退回龍巢小徑' },
      { direction: 'north', targetRoomId: 'sky_bridge', description: '崖邊有一座雲中石橋' },
    ],
    monsters: [
      { monsterId: 'wyvern', maxCount: 3, respawnSeconds: 60 },
      { monsterId: 'dragon_knight', maxCount: 1, respawnSeconds: 80 },
    ],
    mapSymbol: '[崖]',
    mapX: 3,
    mapY: 26,
    guardianHints: {
      creature: '飛龍會利用強風進行俯衝攻擊——背靠岩壁可以限制牠們的攻擊角度。',
      treasure: '飛龍巢穴中混雜著從各地叼回的寶物，其中不乏稀有的魔法道具。',
      spirit: '飛龍是龍族中最自由的一支——牠們拒絕了古龍的統治，選擇在風中翱翔。',
    },
  },

  dragon_bone_field: {
    id: 'dragon_bone_field',
    name: '龍骨原野',
    zone: 'dragon_valley' as RoomDef['zone'],
    description:
      '一片被巨大龍骨散佈的荒野，有些骨骸的肋骨如同拱門般高聳，頭骨比房屋還要巨大。' +
      '這裡是遠古巨龍的安息之地，空氣中殘留著龍族亡魂的低語。' +
      '腐朽的骨骼中滲出暗綠色的毒液——古龍蛇在骨海中遊蕩。',
    exits: [
      { direction: 'west', targetRoomId: 'dragon_valley_entrance', description: '回到龍谷入口' },
      { direction: 'north', targetRoomId: 'ancient_dragon_lair', description: '最大的龍骨指向一個洞穴' },
    ],
    monsters: [
      { monsterId: 'ancient_wyrm', maxCount: 2, respawnSeconds: 70 },
      { monsterId: 'young_dragon', maxCount: 2, respawnSeconds: 55 },
    ],
    groundItems: [
      { itemId: 'dragon_scale', description: '龍骨旁散落著閃亮的鱗片' },
    ],
    mapSymbol: '[骨]',
    mapX: 4,
    mapY: 24,
    guardianHints: {
      creature: '古龍蛇會從龍骨的縫隙中突然竄出——在龍骨密集的區域要格外小心。',
      treasure: '古龍的骨髓中仍殘留著強大的魔力，是煉製頂級藥水的極品材料。',
      spirit: '每一具龍骨都曾是一位偉大的龍族戰士——在這裡能感受到牠們最後的驕傲與不甘。',
    },
  },

  ancient_dragon_lair: {
    id: 'ancient_dragon_lair',
    name: '古龍巢穴',
    zone: 'dragon_valley' as RoomDef['zone'],
    description:
      '一個巨大的天然洞穴，穹頂高達數十公尺，足以容納一條成年巨龍。' +
      '洞壁上覆蓋著閃爍的龍鱗結晶，地面散佈著碎裂的蛋殼和龍牙。' +
      '洞穴深處傳來沉重的呼吸聲，一股令人顫慄的古老力量在此沉睡。',
    exits: [
      { direction: 'south', targetRoomId: 'dragon_bone_field', description: '退回龍骨原野' },
      { direction: 'east', targetRoomId: 'dragon_hoard', description: '洞穴側面有一條通道', locked: true, keyItemId: 'gold_key' },
    ],
    monsters: [
      { monsterId: 'ancient_wyrm', maxCount: 2, respawnSeconds: 75 },
      { monsterId: 'dragon_knight', maxCount: 2, respawnSeconds: 80 },
    ],
    mapSymbol: '[巢]',
    mapX: 4,
    mapY: 25,
    guardianHints: {
      creature: '洞穴中的回音會暴露你的位置——輕手輕腳移動可以避免驚動沉睡的巨獸。',
      treasure: '龍鱗結晶是天然形成的魔法礦物，其價值遠超普通寶石。',
      spirit: '這個巢穴的主人是一條活了數千年的古龍——牠見證了這個世界的興衰更迭。',
    },
  },

  dragon_hoard: {
    id: 'dragon_hoard',
    name: '龍之寶庫',
    zone: 'dragon_valley' as RoomDef['zone'],
    description:
      '令人窒息的財富堆積如山——金幣、寶石、魔法武器、王冠和聖物混雜在一起，' +
      '形成一座閃閃發光的小丘。這是龍族數千年來從各個王國掠奪並收藏的寶藏。' +
      '然而，每一枚金幣都被龍的魔力所標記，拿走任何東西都會被追蹤。',
    exits: [
      { direction: 'west', targetRoomId: 'ancient_dragon_lair', description: '回到古龍巢穴' },
    ],
    monsters: [
      { monsterId: 'storm_dragon', maxCount: 1, respawnSeconds: 1800 },
      { monsterId: 'dragon_knight', maxCount: 2, respawnSeconds: 80 },
    ],
    mapSymbol: '[寶]',
    mapX: 5,
    mapY: 25,
    guardianHints: {
      creature: '守護寶庫的風暴巨龍會用雷電攻擊——裝備抗雷裝備能大幅降低傷害。',
      treasure: '寶山頂部有一件散發著金色光芒的武器——那是某位古代英雄的遺物。',
      spirit: '龍族收藏寶物並非出於貪婪——每一件寶物都承載著一段被牠們守護的歷史。',
    },
  },

  sky_bridge: {
    id: 'sky_bridge',
    name: '天空之橋',
    zone: 'dragon_valley' as RoomDef['zone'],
    description:
      '一座由雲霧凝結而成的半透明石橋，橫跨在兩座山峰之間。' +
      '橋下是萬丈深淵，橋面上不時有強風呼嘯而過。' +
      '遠方的山巔上閃爍著風暴的雷光，那是龍谷最高峰——風暴之巔。',
    exits: [
      { direction: 'south', targetRoomId: 'wyvern_cliff', description: '退回飛龍崖' },
      { direction: 'north', targetRoomId: 'storm_peak', description: '穿越風暴前往山巔' },
    ],
    monsters: [
      { monsterId: 'wyvern', maxCount: 2, respawnSeconds: 65 },
      { monsterId: 'storm_dragon', maxCount: 1, respawnSeconds: 1800 },
    ],
    mapSymbol: '[橋]',
    mapX: 3,
    mapY: 27,
    guardianHints: {
      creature: '在橋上戰鬥要小心被風暴巨龍的氣流推落——靠近橋的中心線較為安全。',
      treasure: '橋體本身就是一種稀有的雲石結晶，如果能取下一塊帶回去會價值連城。',
      spirit: '這座橋是遠古龍族的建築傑作——牠們用風之魔法凝固了雲層。',
    },
  },

  storm_peak: {
    id: 'storm_peak',
    name: '風暴之巔',
    zone: 'dragon_valley' as RoomDef['zone'],
    description:
      '龍谷最高的山峰，終年被雷暴雲層籠罩。閃電不斷在雲間穿梭，' +
      '雷鳴聲震耳欲聾。山頂的平台上矗立著一座古老的龍族祭壇，' +
      '祭壇上的雷球不停地旋轉閃爍，散發著令人敬畏的力量。',
    exits: [
      { direction: 'south', targetRoomId: 'sky_bridge', description: '退回天空之橋' },
      { direction: 'north', targetRoomId: 'elder_dragon_sanctum', description: '祭壇背後有一道通往聖殿的門' },
    ],
    monsters: [
      { monsterId: 'storm_dragon', maxCount: 2, respawnSeconds: 1800 },
      { monsterId: 'wyvern', maxCount: 2, respawnSeconds: 65 },
    ],
    mapSymbol: '[巔]',
    mapX: 3,
    mapY: 28,
    guardianHints: {
      creature: '風暴巨龍在暴風雨中戰力倍增——如果能驅散雲層就能削弱牠。',
      treasure: '祭壇上的雷球蘊含著純粹的雷電之力，是附魔雷屬性武器的最佳材料。',
      spirit: '龍族祭壇是龍族祭祀天空之神的場所——在此祈禱可能獲得風暴的祝福。',
    },
  },

  elder_dragon_sanctum: {
    id: 'elder_dragon_sanctum',
    name: '古龍聖殿',
    zone: 'dragon_valley' as RoomDef['zone'],
    description:
      '隱藏在風暴之巔背後的神聖殿堂，由巨大的龍骨和水晶構成。' +
      '殿堂中央盤踞著一條體型驚人的古龍，牠的鱗片如同星空般閃耀。' +
      '空氣中充滿了遠古的威壓，連呼吸都變得沉重。這是龍谷最強大的存在。',
    exits: [
      { direction: 'south', targetRoomId: 'storm_peak', description: '退回風暴之巔' },
      { direction: 'down', targetRoomId: 'abyss_entrance', description: '聖殿地板上有一道通往深淵的裂縫' },
    ],
    monsters: [
      { monsterId: 'storm_dragon', maxCount: 2, respawnSeconds: 1800 },
      { monsterId: 'elder_dragon', maxCount: 1, respawnSeconds: 1800 },
    ],
    mapSymbol: '[聖]',
    mapX: 3,
    mapY: 29,
    guardianHints: {
      creature: '古龍擁有預知能力，普通的攻擊模式會被輕易看穿——只有隨機的戰術才能出其不意。',
      treasure: '古龍的牙齒蘊含著數千年的龍之力量，是鑄造神器級武器的終極素材。',
      spirit: '古龍是龍族的始祖之一——牠記得世界創生時的模樣，也預見了終焉的到來。',
    },
  },

  dragon_egg_chamber: {
    id: 'dragon_egg_chamber',
    name: '龍蛋室',
    zone: 'dragon_valley' as RoomDef['zone'],
    description:
      '隱蔽在岩壁深處的溫暖洞穴，地熱從地底湧出，維持著恆定的溫度。' +
      '數顆巨大的龍蛋安靜地排列在柔軟的火山灰床上，蛋殼上的紋路隱隱發光。' +
      '這是龍族孕育下一代的聖地，任何威脅都會招致所有龍族的瘋狂報復。',
    exits: [
      { direction: 'east', targetRoomId: 'dragon_nest_path', description: '小心地退回龍巢小徑' },
    ],
    monsters: [
      { monsterId: 'young_dragon', maxCount: 3, respawnSeconds: 50 },
      { monsterId: 'wyvern', maxCount: 2, respawnSeconds: 60 },
    ],
    mapSymbol: '[蛋]',
    mapX: 2,
    mapY: 25,
    guardianHints: {
      creature: '在龍蛋室中戰鬥要格外小心——傷害龍蛋會引來整個龍谷的龍族報復。',
      treasure: '已經不會孵化的化石龍蛋是極為珍貴的收藏品和煉金材料。',
      spirit: '每一顆龍蛋中都沉睡著一個嶄新的龍族靈魂——牠們的夢境構成了龍谷的魔力場。',
    },
  },

  // ─── Area 11: 深淵裂隙 (Lv 50-55) ────────────────────────

  abyss_entrance: {
    id: 'abyss_entrance',
    name: '深淵入口',
    zone: 'abyss_rift' as RoomDef['zone'],
    description:
      '古龍聖殿地板上的裂縫延伸成一道深不見底的階梯，向下通往一片紫黑色的虛空。' +
      '空間在此處開始扭曲，牆壁上的岩石呈現出不可能的幾何形狀。' +
      '耳邊傳來低沉的嗡鳴聲，那是維度壁壘被侵蝕的聲音。',
    exits: [
      { direction: 'up', targetRoomId: 'elder_dragon_sanctum', description: '回到古龍聖殿' },
      { direction: 'north', targetRoomId: 'void_corridor', description: '踏入扭曲的虛空' },
      { direction: 'east', targetRoomId: 'nightmare_garden', description: '一條小徑通往奇異的花園' },
    ],
    monsters: [
      { monsterId: 'void_walker', maxCount: 2, respawnSeconds: 70 },
      { monsterId: 'shadow_demon', maxCount: 2, respawnSeconds: 75 },
    ],
    mapSymbol: '[淵]',
    mapX: 3,
    mapY: 30,
    guardianHints: {
      creature: '虛空行者會瞬間移動到你身後——保持背靠牆壁可以限制牠的移動。',
      treasure: '裂縫邊緣凝結著時空碎片，是製造維度魔法道具的核心材料。',
      spirit: '這道裂縫是遠古封印被侵蝕的結果——深淵的力量正在緩慢地滲透到現實世界。',
    },
  },

  void_corridor: {
    id: 'void_corridor',
    name: '虛空迴廊',
    zone: 'abyss_rift' as RoomDef['zone'],
    description:
      '一條漂浮在虛空中的石質走廊，兩側是無盡的紫黑色虛無。' +
      '走廊的地板時而凝固時而透明，能透過腳下看到星辰般閃爍的深淵。' +
      '偶爾有扭曲的光芒從虛空中射出，照亮走廊上蠕動的暗影生物。',
    exits: [
      { direction: 'south', targetRoomId: 'abyss_entrance', description: '退回深淵入口' },
      { direction: 'north', targetRoomId: 'shadow_realm', description: '走廊延伸入更深的黑暗' },
      { direction: 'east', targetRoomId: 'time_distortion', description: '空間在此分裂出另一條路' },
    ],
    monsters: [
      { monsterId: 'void_walker', maxCount: 3, respawnSeconds: 65 },
      { monsterId: 'shadow_demon', maxCount: 2, respawnSeconds: 70 },
    ],
    mapSymbol: '[廊]',
    mapX: 3,
    mapY: 31,
    guardianHints: {
      creature: '虛空中的暗影生物會從走廊邊緣湧出——不要站在邊緣附近。',
      treasure: '虛空中偶爾會飄過來自其他維度的物品——有些可能極為珍貴。',
      spirit: '走廊是古代術士建造的維度通道，原本是連接不同世界的橋樑。',
    },
  },

  shadow_realm: {
    id: 'shadow_realm',
    name: '暗影領域',
    zone: 'abyss_rift' as RoomDef['zone'],
    description:
      '一片被純粹暗影能量籠罩的空間，所有光源在這裡都會被吞噬。' +
      '只有暗影生物的眼睛在黑暗中如同幽靈般閃爍。地面是一層流動的暗影，' +
      '每一步都會激起漣漪般的黑色波紋。在這裡，連自己的身體都開始變得模糊。',
    exits: [
      { direction: 'south', targetRoomId: 'void_corridor', description: '退回虛空迴廊' },
      { direction: 'north', targetRoomId: 'chaos_bridge', description: '黑暗中有一道混沌的光芒' },
    ],
    monsters: [
      { monsterId: 'shadow_demon', maxCount: 3, respawnSeconds: 65 },
      { monsterId: 'nightmare', maxCount: 1, respawnSeconds: 1800 },
    ],
    mapSymbol: '[影]',
    mapX: 3,
    mapY: 32,
    guardianHints: {
      creature: '暗影惡魔在完全黑暗中幾乎無敵——使用光明魔法或照明道具可以削弱牠們。',
      treasure: '暗影領域的核心處有一顆凝聚了純粹黑暗的暗影之心，是暗屬性魔法的終極素材。',
      spirit: '暗影領域是深淵滲透到現實的第一個據點——如果不阻止擴張，整個世界都會被吞噬。',
    },
  },

  chaos_bridge: {
    id: 'chaos_bridge',
    name: '混沌之橋',
    zone: 'abyss_rift' as RoomDef['zone'],
    description:
      '一座由不斷變換形態的混沌物質構成的橋樑，橋面時而是石頭，時而是水晶，時而是虛無。' +
      '橋的兩側翻湧著不同顏色的能量——火、冰、雷、光、暗交替閃爍。' +
      '踏上橋面的瞬間，現實的法則就不再適用。',
    exits: [
      { direction: 'south', targetRoomId: 'shadow_realm', description: '退回暗影領域' },
      { direction: 'north', targetRoomId: 'abyss_core', description: '橋的盡頭是深淵的核心' },
    ],
    monsters: [
      { monsterId: 'chaos_spawn', maxCount: 3, respawnSeconds: 60 },
      { monsterId: 'void_walker', maxCount: 2, respawnSeconds: 70 },
    ],
    mapSymbol: '[混]',
    mapX: 3,
    mapY: 33,
    guardianHints: {
      creature: '混沌之子的屬性會隨機變化——觀察牠的顏色來判斷當前的弱點屬性。',
      treasure: '混沌物質會偶爾凝結成穩定的形態——如果能收集到就是無價之寶。',
      spirit: '混沌之橋是兩個維度碰撞的產物——它的存在本身就是一個不應該發生的奇蹟。',
    },
  },

  nightmare_garden: {
    id: 'nightmare_garden',
    name: '噩夢花園',
    zone: 'abyss_rift' as RoomDef['zone'],
    description:
      '一座詭異的花園漂浮在虛空之中，花朵是由凝固的噩夢結晶而成。' +
      '每一朵花都在無聲地綻放與凋零，散發著令人昏沉的幽香。' +
      '花叢中偶爾能看到扭曲的人影——那是被噩夢吞噬的冒險者殘留的意識。',
    exits: [
      { direction: 'west', targetRoomId: 'abyss_entrance', description: '回到深淵入口' },
      { direction: 'north', targetRoomId: 'time_distortion', description: '花園邊緣的空間在扭曲' },
    ],
    monsters: [
      { monsterId: 'nightmare', maxCount: 2, respawnSeconds: 1800 },
      { monsterId: 'shadow_demon', maxCount: 2, respawnSeconds: 70 },
    ],
    mapSymbol: '[夢]',
    mapX: 4,
    mapY: 30,
    guardianHints: {
      creature: '噩夢體會入侵你的精神——堅定的意志和抗精神控制的道具是必需品。',
      treasure: '噩夢結晶花雖然危險，但是製作精神魔法道具的頂級材料。',
      spirit: '花園中的人影是真實的冒險者——找到方法喚醒他們也許能獲得盟友。',
    },
  },

  abyss_core: {
    id: 'abyss_core',
    name: '深淵核心',
    zone: 'abyss_rift' as RoomDef['zone'],
    description:
      '裂隙的最深處，一顆巨大的暗紫色球體懸浮在虛空中央，不斷脈動著。' +
      '這是深淵的核心——所有混沌和暗影力量的源頭。' +
      '核心周圍的空間已經完全崩壞，重力、時間、光線都失去了意義。',
    exits: [
      { direction: 'south', targetRoomId: 'chaos_bridge', description: '退回混沌之橋' },
      { direction: 'east', targetRoomId: 'abyss_lord_chamber', description: '核心背後是深淵領主的居所' },
    ],
    monsters: [
      { monsterId: 'chaos_spawn', maxCount: 2, respawnSeconds: 65 },
      { monsterId: 'nightmare', maxCount: 2, respawnSeconds: 1800 },
    ],
    mapSymbol: '[核]',
    mapX: 3,
    mapY: 34,
    guardianHints: {
      creature: '核心的脈動會週期性地增強所有深淵生物——在脈動間隙攻擊效率最高。',
      treasure: '如果能從核心中取出一塊碎片，就能獲得操控維度的力量。',
      spirit: '深淵核心是另一個維度試圖入侵此世界的錨點——摧毀它可以暫時關閉裂隙。',
    },
  },

  time_distortion: {
    id: 'time_distortion',
    name: '時空扭曲區',
    zone: 'abyss_rift' as RoomDef['zone'],
    description:
      '空間在此處嚴重扭曲，過去、現在和未來的景象交疊在一起。' +
      '你能同時看到這個地方千年前的繁華和千年後的廢墟。' +
      '時間之流在此分岔又匯合，一步之差可能跨越百年。',
    exits: [
      { direction: 'west', targetRoomId: 'void_corridor', description: '回到虛空迴廊' },
      { direction: 'south', targetRoomId: 'nightmare_garden', description: '回到噩夢花園' },
      { direction: 'north', targetRoomId: 'abyss_lord_chamber', description: '時空的盡頭指向領主之間' },
    ],
    monsters: [
      { monsterId: 'void_walker', maxCount: 2, respawnSeconds: 70 },
      { monsterId: 'chaos_spawn', maxCount: 2, respawnSeconds: 65 },
    ],
    mapSymbol: '[時]',
    mapX: 4,
    mapY: 31,
    guardianHints: {
      creature: '時空扭曲中的敵人可能會出現在不同的時間點——注意「已經消滅」的敵人再次出現。',
      treasure: '時空碎片中封存著其他時間線的珍貴物品，但取出它們需要極高的魔法造詣。',
      spirit: '時空扭曲是深淵力量對現實法則的最大破壞——修復這裡就能穩定整個裂隙。',
    },
  },

  abyss_lord_chamber: {
    id: 'abyss_lord_chamber',
    name: '深淵領主之間',
    zone: 'abyss_rift' as RoomDef['zone'],
    description:
      '一個懸浮在虛空中心的巨大平台，由凝固的混沌能量構成。' +
      '平台中央矗立著一座由暗影和虛空編織而成的王座，深淵領主端坐其上，' +
      '多隻眼睛同時注視著來訪者。牠的存在本身就在扭曲周圍的現實，空間在牠身邊不停裂開又癒合。',
    exits: [
      { direction: 'west', targetRoomId: 'abyss_core', description: '退回深淵核心' },
      { direction: 'south', targetRoomId: 'time_distortion', description: '退回時空扭曲區' },
      { direction: 'up', targetRoomId: 'celestial_gate', description: '擊敗深淵領主後，一道通往天界的光柱出現' },
    ],
    monsters: [
      { monsterId: 'chaos_spawn', maxCount: 2, respawnSeconds: 70 },
      { monsterId: 'abyss_lord', maxCount: 1, respawnSeconds: 1800 },
    ],
    mapSymbol: '[主]',
    mapX: 4,
    mapY: 34,
    guardianHints: {
      creature: '深淵領主能同時使用多種屬性攻擊——切換抗性裝備是生存的關鍵。',
      treasure: '深淵領主的權杖中封存著操控時空的力量——這是傳說中的深淵之眼。',
      spirit: '深淵領主並非天生的怪物——牠曾是一位試圖征服維度的大魔導士，被自己的力量吞噬後墮落為此。',
    },
  },

  // ─── Area 12: 天界遺跡 (Lv 55-60) ────────────────────────

  celestial_gate: {
    id: 'celestial_gate',
    name: '天界之門',
    zone: 'celestial_ruins' as RoomDef['zone'],
    description:
      '一道由純白光芒構成的巨大拱門矗立在虛空之上，門框上刻著失傳已久的神聖文字。' +
      '穿過光門的瞬間，世界從混沌的深淵轉變為金色的光輝。' +
      '腳下是由凝固的星光構成的地面，遠方的天際線上浮現著壯麗的天界廢墟。',
    exits: [
      { direction: 'down', targetRoomId: 'abyss_lord_chamber', description: '回到深淵領主之間' },
      { direction: 'north', targetRoomId: 'starlight_path', description: '沿著星光之路前進' },
      { direction: 'east', targetRoomId: 'divine_library', description: '光門旁有一座宏偉的建築' },
    ],
    monsters: [
      { monsterId: 'fallen_angel', maxCount: 2, respawnSeconds: 75 },
      { monsterId: 'celestial_guardian', maxCount: 1, respawnSeconds: 90 },
    ],
    mapSymbol: '[門]',
    mapX: 3,
    mapY: 35,
    guardianHints: {
      creature: '墮天使會同時使用光明和黑暗魔法——純粹的單屬性防禦在這裡不夠用。',
      treasure: '神聖文字中隱藏著開啟天界寶藏的密碼——但需要極高的智力才能解讀。',
      spirit: '天界之門是諸神離開凡間時留下的最後通道——通過它就意味著踏入了神的領域。',
    },
  },

  starlight_path: {
    id: 'starlight_path',
    name: '星光走廊',
    zone: 'celestial_ruins' as RoomDef['zone'],
    description:
      '一條由凝固的星辰碎片鋪成的走廊，每一步都踩在閃爍的星光之上。' +
      '走廊兩側是破碎的天界建築殘骸，曾經宏偉的殿堂如今只剩下斷壁殘垣。' +
      '但即便是廢墟，這裡的每一塊石頭都散發著令人敬畏的神聖之力。',
    exits: [
      { direction: 'south', targetRoomId: 'celestial_gate', description: '退回天界之門' },
      { direction: 'north', targetRoomId: 'angel_garden', description: '前方出現一片翠綠的花園' },
      { direction: 'east', targetRoomId: 'judgment_hall', description: '走廊盡頭是一座莊嚴的大廳' },
    ],
    monsters: [
      { monsterId: 'celestial_guardian', maxCount: 2, respawnSeconds: 80 },
      { monsterId: 'fallen_angel', maxCount: 2, respawnSeconds: 75 },
    ],
    mapSymbol: '[星]',
    mapX: 3,
    mapY: 36,
    guardianHints: {
      creature: '天界守衛的護盾幾乎堅不可摧——但它們需要消耗魔力維持，持久戰可以耗盡它們。',
      treasure: '星辰碎片本身就是極為珍貴的魔法材料，但強行採集會觸怒守衛。',
      spirit: '天界的廢墟記載著諸神之戰的歷史——每一面斷牆都是一個章節。',
    },
  },

  angel_garden: {
    id: 'angel_garden',
    name: '天使花園',
    zone: 'celestial_ruins' as RoomDef['zone'],
    description:
      '一片在天界廢墟中奇蹟般存活的花園，金色和白色的花朵永不凋零地綻放。' +
      '花園中央的噴泉仍在流淌著發光的聖水，空氣中充滿了治癒和安寧的氣息。' +
      '幾位熾天使在花園中巡遊，牠們的翅膀散發出溫暖的金色光芒。',
    exits: [
      { direction: 'south', targetRoomId: 'starlight_path', description: '退回星光走廊' },
      { direction: 'north', targetRoomId: 'celestial_throne_room', description: '花園盡頭是天界王座' },
      { direction: 'west', targetRoomId: 'eternal_sanctuary', description: '花園側面有一座寧靜的聖所' },
    ],
    monsters: [
      { monsterId: 'seraph', maxCount: 2, respawnSeconds: 85 },
      { monsterId: 'celestial_guardian', maxCount: 2, respawnSeconds: 80 },
    ],
    mapSymbol: '[花]',
    mapX: 3,
    mapY: 37,
    guardianHints: {
      creature: '熾天使能治癒同伴——必須優先擊倒牠們，否則戰鬥會無限延長。',
      treasure: '聖水噴泉有恢復全部HP和MP的效果——但在花園中戰鬥會中斷治療。',
      spirit: '花園是諸神為凡人留下的最後禮物——只要它還存在，天界就不會完全消亡。',
    },
  },

  divine_library: {
    id: 'divine_library',
    name: '神之圖書館',
    zone: 'celestial_ruins' as RoomDef['zone'],
    description:
      '一座超越凡人想像的巨大圖書館，書架延伸到視線無法觸及的高度。' +
      '書冊由光線構成，翻開後會直接將知識灌入閱讀者的意識中。' +
      '圖書館中漫步著由神造兵器守護的自動機械，確保知識不被褻瀆。',
    exits: [
      { direction: 'west', targetRoomId: 'celestial_gate', description: '回到天界之門' },
    ],
    monsters: [
      { monsterId: 'divine_construct', maxCount: 2, respawnSeconds: 600 },
      { monsterId: 'seraph', maxCount: 1, respawnSeconds: 85 },
    ],
    mapSymbol: '[書]',
    mapX: 4,
    mapY: 35,
    guardianHints: {
      creature: '神造兵器有極高的物理防禦——使用魔法攻擊或尋找它們的核心弱點更有效。',
      treasure: '某些光之書冊中記載著失傳的神聖技能——閱讀它們可能習得強大的新能力。',
      spirit: '圖書館記載著從創世到末日的所有知識——包括戰勝戰神的方法。',
    },
  },

  judgment_hall: {
    id: 'judgment_hall',
    name: '審判大廳',
    zone: 'celestial_ruins' as RoomDef['zone'],
    description:
      '一座莊嚴肅穆的大廳，穹頂上繪著諸神審判的壁畫。' +
      '大廳中央的天秤仍在緩慢擺動，衡量著每一個進入者的善惡。' +
      '兩排由光線構成的陪審席上坐著沉默的天使虛影，注視著到來的冒險者。',
    exits: [
      { direction: 'west', targetRoomId: 'starlight_path', description: '退回星光走廊' },
      { direction: 'east', targetRoomId: 'celestial_throne_room', description: '大廳盡頭通往天界王座' },
    ],
    monsters: [
      { monsterId: 'divine_construct', maxCount: 2, respawnSeconds: 600 },
      { monsterId: 'celestial_guardian', maxCount: 2, respawnSeconds: 80 },
    ],
    mapSymbol: '[判]',
    mapX: 4,
    mapY: 36,
    guardianHints: {
      creature: '天秤會根據戰鬥方式影響你的狀態——正大光明的戰鬥會獲得增益，卑鄙手段會遭受懲罰。',
      treasure: '天秤的底座中封存著審判之劍的碎片——集齊所有碎片可以重鑄神器。',
      spirit: '審判大廳曾是諸神裁決凡人命運的場所——在這裡做出的選擇會影響最終戰鬥。',
    },
  },

  celestial_throne_room: {
    id: 'celestial_throne_room',
    name: '天界王座',
    zone: 'celestial_ruins' as RoomDef['zone'],
    description:
      '天界最宏偉的殿堂，穹頂由純淨的光線構成，無數星辰在其中旋轉。' +
      '一座由永恆白金鑄造的王座矗立在殿堂最高處，王座上空無一人，' +
      '但王座本身散發的神聖威壓足以讓凡人跪地臣服。通往最終之間的道路就在王座背後。',
    exits: [
      { direction: 'south', targetRoomId: 'angel_garden', description: '退回天使花園' },
      { direction: 'west', targetRoomId: 'judgment_hall', description: '回到審判大廳' },
      { direction: 'north', targetRoomId: 'god_chamber', description: '王座背後的光門通往神之間' },
    ],
    monsters: [
      { monsterId: 'seraph', maxCount: 2, respawnSeconds: 85 },
      { monsterId: 'divine_construct', maxCount: 2, respawnSeconds: 600 },
    ],
    groundItems: [
      { itemId: 'celestial_fragment', description: '王座旁散落著天界碎片' },
    ],
    mapSymbol: '[座]',
    mapX: 3,
    mapY: 38,
    guardianHints: {
      creature: '王座的威壓會隨著距離增加——在王座附近戰鬥會受到持續傷害。',
      treasure: '王座上曾放置著諸神之王的權杖——現在權杖不知所蹤，但印記仍在。',
      spirit: '坐上這座王座的人將承受諸神的記憶——只有心智最堅強的人才能承受。',
    },
  },

  eternal_sanctuary: {
    id: 'eternal_sanctuary',
    name: '永恆聖所',
    zone: 'celestial_ruins' as RoomDef['zone'],
    description:
      '一座被時間遺忘的小型聖堂，穹頂上的壁畫描繪著世界創生的場景。' +
      '聖堂中央的永恆之火仍在燃燒，散發出溫暖而安詳的光芒。' +
      '這裡是天界最後的寧靜之地，據說在此祈禱可以恢復所有傷勢。',
    exits: [
      { direction: 'east', targetRoomId: 'angel_garden', description: '回到天使花園' },
    ],
    monsters: [
      { monsterId: 'fallen_angel', maxCount: 2, respawnSeconds: 80 },
      { monsterId: 'seraph', maxCount: 1, respawnSeconds: 90 },
    ],
    mapSymbol: '[聖]',
    mapX: 2,
    mapY: 37,
    guardianHints: {
      creature: '聖所中的墮天使比其他地方的更加強大——牠們曾是聖所的守護者。',
      treasure: '永恆之火可以淨化任何被詛咒的物品——將被污染的裝備帶來這裡試試。',
      spirit: '聖所是諸神最初祈禱的地方——在這裡虔誠祈禱可能觸發隱藏的祝福事件。',
    },
  },

  god_chamber: {
    id: 'god_chamber',
    name: '神之間',
    zone: 'celestial_ruins' as RoomDef['zone'],
    description:
      '天界遺跡的最深處，一個完美的圓形空間。牆壁、地面和天頂都由純粹的光構成。' +
      '空間正中央懸浮著一位身著金色戰甲的神祇——戰神，沉睡中的他仍散發著毀天滅地的威壓。' +
      '當冒險者踏入這片領域的瞬間，戰神的雙眼猛然睜開，億萬年的寂靜在此刻被打破。' +
      '這是這個世界最強大的存在，也是最終的挑戰。',
    exits: [
      { direction: 'south', targetRoomId: 'celestial_throne_room', description: '退回天界王座' },
    ],
    monsters: [
      { monsterId: 'divine_construct', maxCount: 2, respawnSeconds: 600 },
      { monsterId: 'god_of_war', maxCount: 1, respawnSeconds: 1800 },
    ],
    mapSymbol: '[神]',
    mapX: 3,
    mapY: 39,
    guardianHints: {
      creature: '戰神會隨著戰鬥進程切換三個階段——每個階段的攻擊模式和弱點完全不同。',
      treasure: '戰神的神槍是這個世界上最強大的武器——只有擊敗他才能獲得。',
      spirit: '戰神並非邪惡——他在此等待一位值得繼承神力的勇者。這場戰鬥是最終的考驗。',
    },
  },
};
