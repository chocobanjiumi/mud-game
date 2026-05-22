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
    image: 'demon_border.png',
    imagePrompt: '魔族邊境 in demon_territory, cracked chasm bridge from frozen wasteland into burning black plains, sulfur haze, red firelit sky, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text',
    description:
      '冰封雪原的盡頭，大地突然斷裂成一道巨大的裂谷。裂谷對面是一片焦黑的荒原，' +
      '空氣中瀰漫著硫磺的刺鼻氣味，遠方的天空被永恆的紅色火焰映照。' +
      '一座搖搖欲墜的石橋橫跨裂谷，這是通往魔族領地的唯一通路。',
    exits: [
      { direction: 'south', targetRoomId: 'ice_throne', description: '退回冰封王座' },
      { direction: 'north', targetRoomId: 'scorched_plains', description: '踏上焦黑的荒原' },
      { direction: 'west', targetRoomId: 'demon_ash_watch', description: '裂谷西側有一座灰燼哨塔' },
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
    image: 'scorched_plains.png',
    imagePrompt: '焦土平原 in demon_territory, endless cracked black plain with red flames in fissures, dead trees like bone frames, war drum smoke, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text',
    description:
      '一望無際的焦黑平原，大地龜裂如蛛網，裂縫中不時竄出赤紅色的火焰。' +
      '枯萎的樹木如同黑色的骨架矗立其間，天空永遠籠罩在灰紅色的煙塵之下。' +
      '遠處傳來低沉的戰鼓聲，那是魔族巡邏隊的信號。',
    exits: [
      { direction: 'south', targetRoomId: 'demon_border', description: '退回邊境裂谷' },
      { direction: 'north', targetRoomId: 'demon_village', description: '隱約可見魔族的營帳' },
      { direction: 'east', targetRoomId: 'blood_river', description: '一條殷紅的河流在東方流淌' },
      { direction: 'west', targetRoomId: 'demon_bone_pits', description: '西方低地堆滿白骨與灰燼' },
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
    image: 'demon_village.png',
    imagePrompt: '魔族村落 in demon_territory, black stone and bone tents, forge glow, patrol shadows, trophy pole with broken adventurer gear, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text',
    description:
      '由黑色岩石和獸骨搭建的簡陋村落，低矮的帳篷和骨架棚屋散佈其間。' +
      '魔族士兵在村中巡邏，鍛造爐裡的火焰徹夜不熄，空氣中充斥著金屬和鮮血的氣味。' +
      '村落中央的圖騰柱上掛滿了冒險者的裝備殘骸，作為對入侵者的警告。',
    exits: [
      { direction: 'south', targetRoomId: 'scorched_plains', description: '回到焦土平原' },
      { direction: 'north', targetRoomId: 'dark_fortress_gate', description: '村落北方矗立著黑暗要塞' },
      { direction: 'east', targetRoomId: 'demon_shadow_market', description: '黑布棚下傳來低聲交易' },
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
    image: 'blood_river.png',
    imagePrompt: '血河 in demon_territory, crimson lava river steaming through scorched earth, corroded bones and twisted metal on banks, infernal red mist, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text',
    description:
      '一條殷紅如血的河流在焦土中蜿蜒流淌，河面冒著騰騰的熱氣。' +
      '河水並非真正的血液，而是被地底深處的魔力礦脈污染的熔岩水。' +
      '河岸邊散落著被腐蝕的骨骸和扭曲的金屬殘片。每當熱浪翻湧，河底便浮出暗紅色符文，彷彿整條河仍在向要塞輸送魔力。',
    exits: [
      { direction: 'west', targetRoomId: 'scorched_plains', description: '沿河岸回到焦土平原' },
      { direction: 'south', targetRoomId: 'dark_fortress_gate', description: '河流上游通往要塞' },
      { direction: 'east', targetRoomId: 'demon_lava_sewer', description: '破裂排水渠通往熔岩下水道' },
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
    image: 'dark_fortress_gate.png',
    imagePrompt: '黑暗要塞大門 in demon_territory, towering black fortress wall, iron gates, cursed runes, demon general drilling soldiers in red smoky plaza, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text',
    description:
      '高聳入雲的黑色城牆擋在前方，由巨大的暗黑岩石砌成，表面刻滿了魔族的詛咒符文。' +
      '城門由兩扇十公尺高的鑄鐵大門構成，門上釘著巨大的惡魔頭顱裝飾。' +
      '門前的廣場上，魔族將軍正在操練一隊魔族士兵。廣場四角各立著一根燃燒的黑曜石柱，柱頂火焰會隨守軍口令忽明忽暗。城牆縫隙中傳來機關齒輪的沉重轉聲，說明這裡不只是入口，也是整座要塞的防禦樞紐。玩家若停留觀察，能看出巡邏隊每隔數分鐘才會短暫分散。門縫下方還有新鮮車轍，表示軍械正由西側熔爐送入城內，守軍補給仍然頻繁。',
    exits: [
      { direction: 'south', targetRoomId: 'demon_village', description: '退回魔族村落' },
      { direction: 'north', targetRoomId: 'blood_river', description: '沿著血河撤退' },
      { direction: 'east', targetRoomId: 'torture_chamber', description: '穿過城門進入要塞', locked: true, keyItemId: 'silver_key' },
      { direction: 'west', targetRoomId: 'demon_sigil_tower', description: '西側高塔閃著符印光芒' },
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
    image: 'torture_chamber.png',
    imagePrompt: '拷問室 in demon_territory, damp fortress stone chamber with rusted chains, broken cages, red furnace light, restrained dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text',
    description:
      '要塞內部陰暗潮濕的石室，牆壁上掛滿了生鏽的鐵鏈和刑具。' +
      '空氣中瀰漫著令人作嘔的血腥氣味，角落裡堆放著破碎的籠子和骨骸。' +
      '偶爾能聽到從更深處傳來的淒厲慘叫聲。地面排水溝裡流著被稀釋的紅黑色污水，牆角卻放著幾只尚未熄滅的治療藥瓶，暗示曾有俘虜在此反抗。石門內側刻著潦草的逃生記號，有些箭頭指向兵營，有些則指向南方的鎖鏈庭院，讓這裡成為要塞內部路線的危險節點。若仔細聆聽，東側牆後還會傳來召喚陣低沉脈動，南側鐵門則不斷滲出冷風與鐵鏽味，顯示另有押送路線尚未封閉。',
    exits: [
      { direction: 'west', targetRoomId: 'dark_fortress_gate', description: '退回要塞大門' },
      { direction: 'north', targetRoomId: 'demon_barracks', description: '通道通往魔族兵營' },
      { direction: 'east', targetRoomId: 'summoning_circle', description: '暗紅的光芒從東方透出' },
      { direction: 'south', targetRoomId: 'demon_chain_yard', description: '潮濕階梯通往鎖鏈庭院' },
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
    image: 'demon_barracks.png',
    imagePrompt: '魔族兵營 in demon_territory, underground barracks with bone bunks, weapon racks, war maps, red lantern smoke and armored demon patrols, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text',
    description:
      '寬闊的地下營房中排列著數百張由獸骨和獸皮製成的簡陋床鋪。' +
      '武器架上陳列著各式各樣的魔族武器，牆壁上掛著作戰地圖和戰旗。' +
      '空氣中充斥著魔族特有的刺鼻體味，偶爾能聽到士兵們的粗獷笑聲。',
    exits: [
      { direction: 'south', targetRoomId: 'torture_chamber', description: '回到拷問室' },
      { direction: 'west', targetRoomId: 'summoning_circle', description: '兵營深處有一道暗紅的門' },
      { direction: 'east', targetRoomId: 'demon_hellhound_kennel', description: '鐵柵後傳來地獄犬低吼' },
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
    image: 'summoning_circle.png',
    imagePrompt: '召喚陣 in demon_territory, vast circular stone chamber with pulsing red magic circle, four black pillars with ghostfire, abyss portal glow, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text',
    description:
      '一間圓形的巨大石室，地面刻著複雜的魔法陣，暗紅色的能量脈動從符文中湧出。' +
      '空氣中充滿了灼熱的魔力，呼吸都變得困難。四根黑色石柱上燃燒著不滅的鬼火，' +
      '將整個空間映照成地獄般的景象。這裡是魔王從深淵召喚惡魔的場所。石室穹頂吊著數十枚倒置的金屬鈴，當符文脈動時會發出低沉共鳴，使玩家的方向感逐漸混亂。地面外圈有新近刻下的副陣，能把兵營與詛咒神龕的力量匯入主陣，若不破壞這些節點，守軍會源源不絕地回防。北側石門上的符號與魔王殿王座完全相同，暗示兩者共享同一個深淵核心。',
    exits: [
      { direction: 'west', targetRoomId: 'torture_chamber', description: '退回拷問室' },
      { direction: 'east', targetRoomId: 'demon_barracks', description: '退回兵營' },
      { direction: 'north', targetRoomId: 'demon_throne', description: '召喚陣背後是魔王殿的入口' },
      { direction: 'south', targetRoomId: 'demon_cursed_shrine', description: '副陣延伸到南方詛咒神龕' },
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
    image: 'demon_throne.png',
    imagePrompt: '魔王殿 in demon_territory, deepest fortress throne hall with bone throne, burning red crystals, demon lord silhouette, oppressive infernal light, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text',
    description:
      '黑暗要塞的最深處，一座由無數骨骸堆砌而成的王座矗立在大殿中央。' +
      '魔王端坐其上，渾身散發著令人窒息的威壓。殿堂四壁鑲嵌著燃燒的魔力結晶，' +
      '映照出魔王那雙如烈焰般的瞳孔。這裡是魔族領地的心臟，也是最危險的戰場。大殿地面鋪著破碎王國的旗幟，四周高台上站著沉默的親衛與祭司，等待魔王一個手勢便會啟動防禦結界。王座後方並非單純牆面，而是一面被黑鐵封住的巨大門扉，門縫裡吹出龍谷的乾燥熱風，提示魔族正在監視更古老的力量。側廳的親衛也隨時準備支援，王座陰影中還藏著多道未啟動的黑色鎖鏈。',
    exits: [
      { direction: 'south', targetRoomId: 'summoning_circle', description: '退回召喚陣' },
      { direction: 'north', targetRoomId: 'dragon_valley_entrance', description: '魔王殿背後的秘密通道通向一片未知的山谷' },
      { direction: 'east', targetRoomId: 'demon_lord_antechamber', description: '側門通往魔王親衛前廳' },
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
    image: 'demon_treasury.png',
    imagePrompt: '魔族寶庫 in demon_territory, warded black stone treasury with red gems, piles of coins and cursed relics, trap runes glowing, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text',
    description:
      '一間由魔法結界守護的石室，四壁鑲嵌著發光的紅色寶石。' +
      '室內堆放著從各地掠奪來的金幣、寶石和魔法物品，散發著誘人的光芒。' +
      '但寶庫中設有多重陷阱，貿然觸碰任何東西都可能觸發毀滅性的詛咒。',
    exits: [
      { direction: 'east', targetRoomId: 'demon_village', description: '回到魔族村落' },
      { direction: 'south', targetRoomId: 'demon_shadow_market', description: '狹窄貨梯通往影市後門' },
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

  demon_ash_watch: {
    id: 'demon_ash_watch',
    name: '灰燼哨塔',
    zone: 'demon_territory' as RoomDef['zone'],
    image: 'demon_ash_watch.png',
    imagePrompt: '灰燼哨塔 in demon_territory, leaning ash-covered watchtower beside a fiery chasm, black banners, sulfur wind and demon scouts, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text',
    description:
      '裂谷西側的高地上立著一座被灰燼覆蓋的哨塔，塔身由黑木、鐵箍與巨獸肋骨拼接而成。風從冰原方向吹來時，塔頂的火盆會短暫變成藍白色，暴露出巡邏小惡魔的剪影。這裡能俯瞰石橋與焦土平原，是魔族監視北境來客的前哨，也藏著一條繞過正面巡邏的窄階梯。',
    exits: [
      { direction: 'east', targetRoomId: 'demon_border', description: '沿高地回到魔族邊境' },
      { direction: 'north', targetRoomId: 'demon_bone_pits', description: '灰燼斜坡滑向骨坑低地' },
    ],
    monsters: [
      { monsterId: 'imp', maxCount: 3, respawnSeconds: 35 },
      { monsterId: 'demon_soldier', maxCount: 1, respawnSeconds: 55 },
    ],
    mapSymbol: '[哨]',
    mapX: 2,
    mapY: 17,
    guardianHints: {
      creature: '塔頂哨兵會用火盆傳信，先破壞火盆可延遲附近巡邏隊支援。',
      treasure: '哨塔下層的補給箱中夾著北境地圖，標記了幾條魔族偵察路線。',
      spirit: '灰燼中有冰原符文的碎片，說明這裡曾被北境守軍短暫奪回。',
    },
  },

  demon_bone_pits: {
    id: 'demon_bone_pits',
    name: '白骨坑地',
    zone: 'demon_territory' as RoomDef['zone'],
    image: 'demon_bone_pits.png',
    imagePrompt: '白骨坑地 in demon_territory, scorched lowland with bone piles, ash dunes, cracked shields, red fissure light, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text',
    description:
      '焦土平原西側陷落成一片灰白色坑地，碎骨、破盾與凝固熔渣層層堆疊，踩下去會發出乾脆的碎裂聲。坑壁有許多粗糙的拖痕，通往更深處的黑暗洞穴，偶爾還能聽見地獄犬在遠方嗅聞。這裡是魔族處理戰場殘骸的地方，也是拾荒者冒死尋找遺物的危險區域。',
    exits: [
      { direction: 'east', targetRoomId: 'scorched_plains', description: '爬上斜坡回到焦土平原' },
      { direction: 'south', targetRoomId: 'demon_ash_watch', description: '灰燼小徑回到哨塔' },
      { direction: 'north', targetRoomId: 'demon_treasury', description: '一條運骨車道通向寶庫外牆' },
    ],
    monsters: [
      { monsterId: 'imp', maxCount: 2, respawnSeconds: 35 },
      { monsterId: 'hellhound', maxCount: 2, respawnSeconds: 50 },
    ],
    mapSymbol: '[骨]',
    mapX: 2,
    mapY: 18,
    guardianHints: {
      creature: '地獄犬會循著聲音撲向坑底，慢步移動可降低被圍攻的機率。',
      treasure: '白骨堆中偶爾可見未被熔渣吞沒的戒指與徽章。',
      spirit: '坑地裡混雜著多個王國的遺骨，戰爭痕跡遠比魔族村落宣稱的更久遠。',
    },
  },

  demon_shadow_market: {
    id: 'demon_shadow_market',
    name: '影市',
    zone: 'demon_territory' as RoomDef['zone'],
    image: 'demon_shadow_market.png',
    imagePrompt: '影市 in demon_territory, hidden demon black market under dark cloth awnings, red lanterns, cages, cursed wares, smoky alleys, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text',
    description:
      '村落東側的黑布棚一層接一層，遮住了天空也遮住了交易者的臉。攤位上擺著破碎法器、帶詛咒的寶石、無主的武器與寫滿契約文字的羊皮紙，紅燈籠下的影子比真人更忙碌。這裡不完全受軍隊管轄，低階魔族、走私商與背叛者都會用壓低的聲音交換消息，玩家也能從混亂貨流中窺見要塞內部的補給路線。',
    exits: [
      { direction: 'west', targetRoomId: 'demon_village', description: '掀開黑布回到魔族村落' },
      { direction: 'north', targetRoomId: 'demon_war_forge', description: '鐵軌推車通往戰爭熔爐' },
      { direction: 'south', targetRoomId: 'demon_treasury', description: '後巷貨梯通向寶庫暗門' },
    ],
    monsters: [
      { monsterId: 'succubus', maxCount: 1, respawnSeconds: 70 },
      { monsterId: 'demon_soldier', maxCount: 2, respawnSeconds: 50 },
    ],
    mapSymbol: '[市]',
    mapX: 4,
    mapY: 19,
    guardianHints: {
      creature: '影市守衛會混在人群中，先辨認甲片反光可避免被突襲。',
      treasure: '某個攤位底下藏著來自人類王國的密封文書。',
      spirit: '契約羊皮紙上有許多名字被劃掉，代表魔族社會內部也存在殘酷債務。',
    },
  },

  demon_lava_sewer: {
    id: 'demon_lava_sewer',
    name: '熔岩下水道',
    zone: 'demon_territory' as RoomDef['zone'],
    image: 'demon_lava_sewer.png',
    imagePrompt: '熔岩下水道 in demon_territory, cracked stone sewer channels carrying red lava runoff, iron grates, steam vents, demon maintenance tunnels, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text',
    description:
      '血河東岸的破裂排水口通向要塞下方的熔岩下水道。半圓形石渠裡流動著暗紅熱流，鐵柵被高溫烤得發亮，牆面則結著黑色鹽晶與魔力殘渣。每隔一段距離就有維修平台與沉重閘門，證明魔族把河流、鍛爐與召喚陣的廢熱全部導入此處。蒸汽會遮蔽視線，也會把腳步聲傳得很遠。',
    exits: [
      { direction: 'west', targetRoomId: 'blood_river', description: '排水口回到血河岸邊' },
      { direction: 'south', targetRoomId: 'demon_war_forge', description: '灼熱管線通往戰爭熔爐' },
    ],
    monsters: [
      { monsterId: 'hellhound', maxCount: 2, respawnSeconds: 50 },
      { monsterId: 'imp', maxCount: 2, respawnSeconds: 35 },
    ],
    mapSymbol: '[渠]',
    mapX: 5,
    mapY: 18,
    guardianHints: {
      creature: '蒸汽噴口會遮住地獄犬衝鋒路線，聽低吼比看影子可靠。',
      treasure: '沉積池底有被魔力染紅的礦渣，可作為鍛造材料。',
      spirit: '下水道的設計極為古老，可能早於現任魔王與黑暗要塞。',
    },
  },

  demon_sigil_tower: {
    id: 'demon_sigil_tower',
    name: '符印塔',
    zone: 'demon_territory' as RoomDef['zone'],
    image: 'demon_sigil_tower.png',
    imagePrompt: '符印塔 in demon_territory, narrow black tower covered in glowing red sigils, fortress wall side, chained crystal focus, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text',
    description:
      '黑暗要塞西側的高塔細長而扭曲，外牆布滿發亮的惡魔符印，像一條條燒紅的鎖鏈纏住塔身。塔內沒有普通樓梯，只有沿牆旋轉上升的符文平台，每一步都會抽走些許體溫。中央懸著一顆被黑鐵鎖住的水晶，將城門、召喚陣與魔王殿的結界連成一體。若能讀懂符印排列，便能看出要塞防線的弱點。塔窗外可見血河與熔爐煙柱同時閃爍，說明所有防線都由同一套魔力管路供能。牆角散落著被燒焦的羊皮卷，上面記錄著結界換班時間與幾個尚未封死的維修孔。塔頂每次鐘響都會讓城牆符文重新排列，表示玩家若想削弱大門防線，必須在短暫間隔內完成行動。',
    exits: [
      { direction: 'east', targetRoomId: 'dark_fortress_gate', description: '塔門通回黑暗要塞大門' },
      { direction: 'north', targetRoomId: 'demon_chain_yard', description: '符文橋通向鎖鏈庭院' },
    ],
    monsters: [
      { monsterId: 'succubus', maxCount: 1, respawnSeconds: 70 },
      { monsterId: 'demon_general', maxCount: 1, respawnSeconds: 1800 },
    ],
    mapSymbol: '[符]',
    mapX: 2,
    mapY: 20,
    guardianHints: {
      creature: '守塔將領會借用符印護盾，等水晶光芒轉暗時攻擊較有效。',
      treasure: '水晶底座下有一枚可拆卸的符印碎片，能干擾城門結界。',
      spirit: '符印排列記錄了要塞多次改建的痕跡，最底層文字不是魔族語。',
    },
  },

  demon_chain_yard: {
    id: 'demon_chain_yard',
    name: '鎖鏈庭院',
    zone: 'demon_territory' as RoomDef['zone'],
    image: 'demon_chain_yard.png',
    imagePrompt: '鎖鏈庭院 in demon_territory, open fortress courtyard of hanging iron chains, wet black stones, red storm sky, guarded prison route, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text',
    description:
      '拷問室南方是一座沒有屋頂的內庭，數百條粗重鐵鏈從四周高牆垂下，在熱風中互相撞擊，發出沉悶回聲。庭院地面刻有排水槽與符文鎖孔，雨水、灰燼和魔力殘液都被導向中央的黑井。這裡曾用來押送俘虜，如今則成為守軍測試新武器與新咒術的場地。牆邊有一扇通往符印塔的窄門，經常被巡邏隊忽略。',
    exits: [
      { direction: 'north', targetRoomId: 'torture_chamber', description: '鐵門回到拷問室' },
      { direction: 'south', targetRoomId: 'demon_sigil_tower', description: '狹門連到符印塔下層' },
    ],
    monsters: [
      { monsterId: 'demon_soldier', maxCount: 3, respawnSeconds: 50 },
      { monsterId: 'succubus', maxCount: 1, respawnSeconds: 70 },
    ],
    mapSymbol: '[鏈]',
    mapX: 2,
    mapY: 21,
    guardianHints: {
      creature: '庭院守軍會利用垂鏈阻擋路線，貼著牆走能減少被包夾。',
      treasure: '中央黑井旁有未完成的符文鎖，可能對應寶庫或符印塔。',
      spirit: '一些鎖鏈上刻著名字，顯示俘虜曾在此留下最後的求救訊息。',
    },
  },

  demon_war_forge: {
    id: 'demon_war_forge',
    name: '戰爭熔爐',
    zone: 'demon_territory' as RoomDef['zone'],
    image: 'demon_war_forge.png',
    imagePrompt: '戰爭熔爐 in demon_territory, huge infernal forge with molten channels, black anvils, weapon racks, demon smith shadows, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text',
    description:
      '影市北方的鐵軌一路伸進戰爭熔爐，巨大的黑鐵砧台圍著熔池排列，火光把穹頂照成滾動的深紅色。魔族工匠把血河礦渣、戰場廢鐵與詛咒符文一起投入爐中，鍛造成供前線使用的長矛、鎖甲與攻城鉤。熔爐西側能聽見要塞大門的號令聲，東側管線則連向熔岩下水道。只要破壞風箱，整座工坊的節奏就會停頓。',
    exits: [
      { direction: 'south', targetRoomId: 'demon_shadow_market', description: '推車軌道回到影市' },
      { direction: 'north', targetRoomId: 'demon_lava_sewer', description: '熱管線通往熔岩下水道' },
      { direction: 'west', targetRoomId: 'dark_fortress_gate', description: '軍械門回到要塞大門廣場' },
    ],
    monsters: [
      { monsterId: 'demon_soldier', maxCount: 3, respawnSeconds: 45 },
      { monsterId: 'demon_general', maxCount: 1, respawnSeconds: 1800 },
    ],
    mapSymbol: '[爐]',
    mapX: 5,
    mapY: 20,
    guardianHints: {
      creature: '熔爐守將會把士兵推向火線，站在砧台後可阻斷衝鋒。',
      treasure: '冷卻槽裡有一把剛成形的魔族長刃，尚未完成詛咒儀式。',
      spirit: '爐壁內層鑄著古代神殿石材，魔族把舊聖所改造成了兵工廠。',
    },
  },

  demon_hellhound_kennel: {
    id: 'demon_hellhound_kennel',
    name: '地獄犬欄',
    zone: 'demon_territory' as RoomDef['zone'],
    image: 'demon_hellhound_kennel.png',
    imagePrompt: '地獄犬欄 in demon_territory, iron kennel corridor with ember-eyed hellhounds, scorched chains, feeding troughs and red torchlight, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text',
    description:
      '兵營東側的鐵柵走廊悶熱而刺鼻，一排排犬欄用粗鏈鎖住，欄內地獄犬的眼睛像餘燼一樣在黑暗中閃爍。地面布滿爪痕與燒焦的腳印，餵食槽旁堆著半熔化的護甲碎片。馴犬兵會用骨笛下令，讓地獄犬在狹窄通道中輪番衝撞。走廊盡頭的排氣孔連著戰爭熔爐，使這裡永遠充滿灼熱風聲。',
    exits: [
      { direction: 'west', targetRoomId: 'demon_barracks', description: '推開鐵柵回到魔族兵營' },
      { direction: 'south', targetRoomId: 'demon_war_forge', description: '排氣孔外是戰爭熔爐側廊' },
    ],
    monsters: [
      { monsterId: 'hellhound', maxCount: 3, respawnSeconds: 50 },
      { monsterId: 'demon_soldier', maxCount: 1, respawnSeconds: 55 },
    ],
    mapSymbol: '[犬]',
    mapX: 5,
    mapY: 21,
    guardianHints: {
      creature: '地獄犬聽到骨笛會集體衝鋒，先擊倒馴犬兵可打亂牠們。',
      treasure: '犬欄牆上掛著幾副耐火護腕，是馴犬兵進入熔爐時使用的裝備。',
      spirit: '部分地獄犬項圈刻有舊王國徽記，說明牠們可能由戰獸改造而來。',
    },
  },

  demon_cursed_shrine: {
    id: 'demon_cursed_shrine',
    name: '詛咒神龕',
    zone: 'demon_territory' as RoomDef['zone'],
    image: 'demon_cursed_shrine.png',
    imagePrompt: '詛咒神龕 in demon_territory, ruined underground shrine feeding a demon summoning circle, black candles, red sigils, cracked sacred statues, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text',
    description:
      '召喚陣南方的副通道通往一座被改造的古老神龕。原本潔白的神像被黑蠟覆蓋，臉部遭符文鐵片封住，神龕前的石盆裡燃著不會照亮周圍的紅火。牆上仍能看到舊日聖徽，但每一道刻痕都被魔族咒文覆寫，使此處同時散發神聖殘響與深淵低語。副陣的能量從地板裂縫流向北方，支撐著主召喚陣的持續運作。',
    exits: [
      { direction: 'north', targetRoomId: 'summoning_circle', description: '副陣回到召喚陣大廳' },
      { direction: 'east', targetRoomId: 'demon_lord_antechamber', description: '被黑蠟封住的側廊通向親衛前廳' },
    ],
    monsters: [
      { monsterId: 'succubus', maxCount: 2, respawnSeconds: 70 },
      { monsterId: 'demon_general', maxCount: 1, respawnSeconds: 1800 },
    ],
    mapSymbol: '[龕]',
    mapX: 4,
    mapY: 22,
    guardianHints: {
      creature: '神龕祭司會借用舊聖徽治療守軍，熄滅黑蠟可削弱法術。',
      treasure: '破碎神像背後藏著一片未被污染的聖徽碎片。',
      spirit: '這裡證明黑暗要塞建在舊神殿遺址上，仍有殘存意志抗拒魔族。',
    },
  },

  demon_lord_antechamber: {
    id: 'demon_lord_antechamber',
    name: '魔王親衛前廳',
    zone: 'demon_territory' as RoomDef['zone'],
    image: 'demon_lord_antechamber.png',
    imagePrompt: '魔王親衛前廳 in demon_territory, elite guard antechamber beside demon throne, black marble floor, red banners, sealed dragon door heat, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text',
    description:
      '魔王殿東側的親衛前廳比主殿更安靜，黑色大理石地面被擦得像鏡子，能映出牆上燃燒旗幟的倒影。兩排重甲親衛站在門柱旁，身後是通往龍谷密門的控制機關與數枚暗紅水晶。這裡不是接見臣民的地方，而是魔王在決戰前調度親衛、封鎖後路與觀察召喚陣狀態的戰術室。空氣中混著深淵寒意和龍谷熱風，表示兩股力量在門後互相拉扯。桌上攤開的軍令還標著各處哨塔與熔爐編號，若能帶走，足以揭露魔族下一階段的遠征計畫。前廳天花板垂下多面黑鐵鏡，能把主殿與召喚陣的動靜投到牆上，因此親衛幾乎不會被偷襲。',
    exits: [
      { direction: 'west', targetRoomId: 'demon_throne', description: '黑石側門回到魔王殿' },
      { direction: 'south', targetRoomId: 'demon_cursed_shrine', description: '暗紅側廊回到詛咒神龕' },
    ],
    monsters: [
      { monsterId: 'demon_general', maxCount: 2, respawnSeconds: 1800 },
      { monsterId: 'demon_lord', maxCount: 1, respawnSeconds: 1800 },
    ],
    mapSymbol: '[衛]',
    mapX: 4,
    mapY: 23,
    guardianHints: {
      creature: '親衛會保護魔王撤退路線，分散站位可避免被同時壓制。',
      treasure: '戰術桌上有龍谷密門的控制水晶，表面溫度異常灼熱。',
      spirit: '前廳記錄著魔王對龍谷的恐懼，說明下一片區域並非魔族完全掌控。',
    },
  },

  // ─── Area 10: 龍谷 (Lv 40-50) ─────────────────────────────

  dragon_valley_entrance: {
    id: 'dragon_valley_entrance',
    name: '龍谷入口',
    zone: 'dragon_valley' as RoomDef['zone'],
    image: 'dragon_valley_entrance.png',
    imagePrompt: '龍谷入口 in dragon_valley, secret passage opening into misty dragon valley between winglike mountains, ancient draconic runes, warm wind and distant wings, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text',
    description:
      '穿過魔王殿背後的秘密通道，眼前豁然開朗。兩座巍峨的山峰如同巨龍的翅膀展開，' +
      '中間的峽谷被雲霧繚繞，空氣中瀰漫著古老而神秘的氣息。' +
      '入口處的岩壁上刻著龍族的古老文字，警告著所有膽敢踏入的生命。石縫中吹出的熱風帶著硫磺與雨水氣味，和魔王殿的陰冷截然不同。遠處山脊有巨大的影子滑過雲層，地面則散落著新鮮龍鱗與被火焰熔化的黑鐵碎片，說明魔族也曾試圖闖入卻被擊退。這裡是龍谷的安全錨點，也是判斷天候、龍群活動與前進路線的第一處觀察點。岩刻旁還有古老供台，提醒來者必須以敬意通行。',
    exits: [
      { direction: 'south', targetRoomId: 'demon_throne', description: '退回魔王殿' },
      { direction: 'north', targetRoomId: 'dragon_nest_path', description: '踏入雲霧繚繞的峽谷' },
      { direction: 'east', targetRoomId: 'dragon_bone_field', description: '東方散落著巨大的白骨' },
      { direction: 'west', targetRoomId: 'dragon_wind_roost', description: '西側岩棚傳來拍翼聲' },
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
    image: 'dragon_nest_path.png',
    imagePrompt: '龍巢小徑 in dragon_valley, narrow cliff trail with deep dragon claw marks, huge scales, misty walls and flying shadows overhead, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text',
    description:
      '一條蜿蜒在峭壁之間的狹窄小徑，兩側的岩壁上佈滿了龍爪留下的深深抓痕。' +
      '不時有巨大的影子掠過頭頂——那是在天空中盤旋的飛龍。' +
      '小徑上散落著巨大的鱗片，每一片都比人的手掌還大。岩壁縫隙裡有幼龍磨爪留下的粉末，風吹過時會像金色霧氣一樣飄起。道路時寬時窄，有些地方只能貼著岩面前進，若沒有留意頭頂的影子，很容易被巡弋的龍騎士堵在轉角。',
    exits: [
      { direction: 'south', targetRoomId: 'dragon_valley_entrance', description: '退回龍谷入口' },
      { direction: 'north', targetRoomId: 'wyvern_cliff', description: '小徑通向一處懸崖' },
      { direction: 'west', targetRoomId: 'dragon_egg_chamber', description: '岩壁中有一個隱蔽的洞口' },
      { direction: 'east', targetRoomId: 'dragon_scale_spring', description: '石階通往鱗光泉' },
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
    image: 'wyvern_cliff.png',
    imagePrompt: '飛龍崖 in dragon_valley, high cliff platform with wyvern nests, rolling clouds below, fierce wind, eggshells and watchful winged beasts, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text',
    description:
      '一處突出於山壁的巨大平台，三面臨崖，下方是萬丈深淵。' +
      '強勁的山風在崖頂呼嘯，雲層就在腳下翻湧。數隻飛龍在崖邊的巢穴中棲息，' +
      '牠們銳利的目光警惕地注視著每一個靠近的生物。崖面上有被爪子固定的舊旗幟與破碎鞍具，顯示龍騎士會在此訓練坐騎起降。風勢會突然改變方向，把細石與蛋殼碎片捲向空中；玩家若想通往天空之橋，必須抓準飛龍換巢與風向短暫平穩的時機。平台邊緣刻有龍族風向符，符文閃白時代表即將出現下沉氣流，任何站位錯誤都可能被迫退回小徑。崖底回聲也會暴露行蹤。',
    exits: [
      { direction: 'south', targetRoomId: 'dragon_nest_path', description: '退回龍巢小徑' },
      { direction: 'north', targetRoomId: 'sky_bridge', description: '崖邊有一座雲中石橋' },
      { direction: 'west', targetRoomId: 'dragon_claw_pass', description: '崖壁裂縫通向龍爪隘口' },
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
    image: 'dragon_bone_field.png',
    imagePrompt: '龍骨原野 in dragon_valley, vast field of colossal dragon skeletons, rib arches, green venom seepage, mist and ancient spirits, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text',
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
    image: 'ancient_dragon_lair.png',
    imagePrompt: '古龍巢穴 in dragon_valley, enormous cavern for an ancient dragon, scale crystals on walls, cracked eggshells, dragon teeth and sleeping power, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text',
    description:
      '一個巨大的天然洞穴，穹頂高達數十公尺，足以容納一條成年巨龍。' +
      '洞壁上覆蓋著閃爍的龍鱗結晶，地面散佈著碎裂的蛋殼和龍牙。' +
      '洞穴深處傳來沉重的呼吸聲，一股令人顫慄的古老力量在此沉睡。洞穴中央的石台被無數爪痕磨得光滑，四周堆著來自不同年代的獻禮：風化的王冠、破裂的魔法盾與刻著龍語誓約的石板。每次呼吸聲響起，牆上的鱗晶便會依序亮起，像是在回應巢穴主人的夢境。巢穴後壁有新近破開的裂痕，露出通往鍛台的龍牙階梯，也暗示古龍並未完全封閉自己的聖域。洞頂還滴落溫熱霧珠。',
    exits: [
      { direction: 'south', targetRoomId: 'dragon_bone_field', description: '退回龍骨原野' },
      { direction: 'east', targetRoomId: 'dragon_hoard', description: '洞穴側面有一條通道', locked: true, keyItemId: 'gold_key' },
      { direction: 'north', targetRoomId: 'dragon_scale_forge', description: '龍牙石階通往鱗鍛台' },
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
    image: 'dragon_hoard.png',
    imagePrompt: '龍之寶庫 in dragon_valley, mountain of gold coins, gems, crowns and magic weapons under dragon marked wards, dazzling guarded cavern, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text',
    description:
      '令人窒息的財富堆積如山——金幣、寶石、魔法武器、王冠和聖物混雜在一起，' +
      '形成一座閃閃發光的小丘。這是龍族數千年來從各個王國掠奪並收藏的寶藏。' +
      '然而，每一枚金幣都被龍的魔力所標記，拿走任何東西都會被追蹤。寶庫頂端並非單純堆放財物，而是依照年代與王國紋章分層排列，像一座由戰利品寫成的歷史塔。牆面有風暴巨龍留下的焦黑爪痕，地板則埋著感應重量的龍語符文，只要光線折射角度改變，守衛就會立刻察覺。寶山後方的石門散發鍛火藍光，顯示部分寶物會被重新鑄造成聖殿防具。',
    exits: [
      { direction: 'west', targetRoomId: 'ancient_dragon_lair', description: '回到古龍巢穴' },
      { direction: 'north', targetRoomId: 'dragon_scale_forge', description: '寶山後方有鑄鱗石門' },
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
    image: 'sky_bridge.png',
    imagePrompt: '天空之橋 in dragon_valley, translucent cloudstone bridge between peaks over abyss, violent winds, storm light in distance, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text',
    description:
      '一座由雲霧凝結而成的半透明石橋，橫跨在兩座山峰之間。' +
      '橋下是萬丈深淵，橋面上不時有強風呼嘯而過。' +
      '遠方的山巔上閃爍著風暴的雷光，那是龍谷最高峰——風暴之巔。橋身內部流動著白銀色氣旋，腳步落下時會浮現短暫的龍語符號，彷彿橋本身正在判斷來者是否有資格通行。左右兩側各有殘破護欄與龍騎士的舊哨位，任何戰鬥都可能被強風推向危險邊緣。',
    exits: [
      { direction: 'south', targetRoomId: 'wyvern_cliff', description: '退回飛龍崖' },
      { direction: 'north', targetRoomId: 'storm_peak', description: '穿越風暴前往山巔' },
      { direction: 'east', targetRoomId: 'dragon_fireglass_terrace', description: '橋東側有一片火玻璃平台' },
      { direction: 'west', targetRoomId: 'dragon_thunder_nest', description: '雷鳴從西側巢穴傳來' },
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
    image: 'storm_peak.png',
    imagePrompt: '風暴之巔 in dragon_valley, highest mountain summit under thunderclouds, ancient dragon altar, spinning lightning orb and storm dragons, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text',
    description:
      '龍谷最高的山峰，終年被雷暴雲層籠罩。閃電不斷在雲間穿梭，' +
      '雷鳴聲震耳欲聾。山頂的平台上矗立著一座古老的龍族祭壇，' +
      '祭壇上的雷球不停地旋轉閃爍，散發著令人敬畏的力量。山頂岩面被雷擊燒成黑色玻璃，雨水還未落地就被上升熱流蒸乾。龍族祭司曾在此觀測天空，平台邊緣仍保留著星盤刻度與風向柱。每當雷球轉到北方，通往古龍聖殿的門便會短暫顯形。東西兩側分別能看見觀星棲台與熔火高巢，火光、雷光與星光在峰頂交會，使此處成為龍谷元素力量的核心。錯過時機便只能等待下一輪雷暴。',
    exits: [
      { direction: 'south', targetRoomId: 'sky_bridge', description: '退回天空之橋' },
      { direction: 'north', targetRoomId: 'elder_dragon_sanctum', description: '祭壇背後有一道通往聖殿的門' },
      { direction: 'east', targetRoomId: 'dragon_oracle_perch', description: '東側觀星台仍有微光' },
      { direction: 'west', targetRoomId: 'dragon_molten_aerie', description: '西側熱風通往熔火高巢' },
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
    image: 'elder_dragon_sanctum.png',
    imagePrompt: '古龍聖殿 in dragon_valley, sacred hall of dragon bones and crystal, star scaled elder dragon coiled in center, ancient pressure, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text',
    description:
      '隱藏在風暴之巔背後的神聖殿堂，由巨大的龍骨和水晶構成。' +
      '殿堂中央盤踞著一條體型驚人的古龍，牠的鱗片如同星空般閃耀。' +
      '空氣中充滿了遠古的威壓，連呼吸都變得沉重。這是龍谷最強大的存在。聖殿柱廊由歷代古龍的脫落角骨堆疊而成，水晶地面下能看見雲海、星光與更深處的紫黑裂隙。古龍並未立刻攻擊，而是用低沉目光審視來者，彷彿牠早已知道魔族、龍谷與深淵之間的下一場災難。四周側殿分別通往鍛台、天衛營地與墜星坑，每一條路都代表龍族仍在維持的古老職責。殿門會隨古龍呼吸緩慢開合。',
    exits: [
      { direction: 'south', targetRoomId: 'storm_peak', description: '退回風暴之巔' },
      { direction: 'east', targetRoomId: 'dragon_scale_forge', description: '側殿通往龍鱗鍛台' },
      { direction: 'west', targetRoomId: 'dragon_skywarden_camp', description: '西廊連到天衛營地' },
      { direction: 'north', targetRoomId: 'dragon_starfall_crater', description: '北門外有墜星坑' },
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
    image: 'dragon_egg_chamber.png',
    imagePrompt: '龍蛋室 in dragon_valley, warm hidden cavern with giant glowing dragon eggs on volcanic ash beds, geothermal steam and vigilant young dragons, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text',
    description:
      '隱蔽在岩壁深處的溫暖洞穴，地熱從地底湧出，維持著恆定的溫度。' +
      '數顆巨大的龍蛋安靜地排列在柔軟的火山灰床上，蛋殼上的紋路隱隱發光。' +
      '這是龍族孕育下一代的聖地，任何威脅都會招致所有龍族的瘋狂報復。洞穴上方有許多細小通風孔，能把風暴之巔的雷鳴轉成低沉搖籃聲。灰床旁擺著由鱗片、草藥與晶砂編成的護巢圈，說明幼龍的孵化需要火、風與星光共同維持平衡。後方隘口由護巢龍爪親自開鑿，只允許守衛在緊急時快速抵達飛龍崖。牆上還掛著破損鞍布與幼龍初次飛行的紀念鱗片，讓這裡兼具危險與神聖意味。',
    exits: [
      { direction: 'east', targetRoomId: 'dragon_nest_path', description: '小心地退回龍巢小徑' },
      { direction: 'north', targetRoomId: 'dragon_claw_pass', description: '孵化室後方有龍爪隘口' },
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

  dragon_wind_roost: {
    id: 'dragon_wind_roost',
    name: '風棲岩棚',
    zone: 'dragon_valley' as RoomDef['zone'],
    image: 'dragon_wind_roost.png',
    imagePrompt: '風棲岩棚 in dragon_valley, western ledge full of wind-carved nests, feathered banners, warm updrafts and young dragons resting, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text',
    description:
      '龍谷入口西側的岩棚被長年上升氣流切成弧形，岩壁上掛滿被風磨亮的龍巢與舊布旗。幼龍會在此練習短距離滑翔，牠們用爪子抓住岩脊，等待熱風將身體托起。棚底有幾處天然凹槽，積著雨水、白羽與細碎龍鱗，可供玩家觀察風向或尋找可用材料。這裡雖靠近入口，卻能很快引來巡空飛龍。',
    exits: [
      { direction: 'east', targetRoomId: 'dragon_valley_entrance', description: '沿岩棚回到龍谷入口' },
      { direction: 'north', targetRoomId: 'dragon_egg_chamber', description: '窄洞通往龍蛋室外壁' },
    ],
    monsters: [
      { monsterId: 'young_dragon', maxCount: 3, respawnSeconds: 55 },
      { monsterId: 'wyvern', maxCount: 1, respawnSeconds: 65 },
    ],
    mapSymbol: '[風]',
    mapX: 2,
    mapY: 24,
    guardianHints: {
      creature: '幼龍起飛前會先低伏身體，抓準此時後退可避開第一波火息。',
      treasure: '岩棚凹槽中的完整龍鱗可作為高階護甲材料。',
      spirit: '風棲岩棚是龍族孩童般的練習場，留下許多稚嫩爪痕。',
    },
  },

  dragon_scale_spring: {
    id: 'dragon_scale_spring',
    name: '鱗光泉',
    zone: 'dragon_valley' as RoomDef['zone'],
    image: 'dragon_scale_spring.png',
    imagePrompt: '鱗光泉 in dragon_valley, clear mountain spring reflecting dragon scales, blue mist, healing mineral pools and claw-carved stones, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text',
    description:
      '龍巢小徑東側藏著一眼清澈泉池，泉水從佈滿龍鱗結晶的石縫湧出，在池面折射出金、藍與紫色光斑。受傷的飛龍會在此舔舐礦物水，龍騎士也會把裂開的鞍具浸入泉中修補符文。池畔石碑刻著古龍律法，要求任何飲用泉水者都必須留下等價記憶。這裡可作為資源點，也暗示龍谷並非只有戰鬥與掠奪。',
    exits: [
      { direction: 'west', targetRoomId: 'dragon_nest_path', description: '石階回到龍巢小徑' },
      { direction: 'north', targetRoomId: 'dragon_fireglass_terrace', description: '泉水溝渠流向火玻璃台' },
    ],
    monsters: [
      { monsterId: 'young_dragon', maxCount: 2, respawnSeconds: 55 },
      { monsterId: 'dragon_knight', maxCount: 1, respawnSeconds: 80 },
    ],
    groundItems: [
      { itemId: 'dragon_scale', description: '泉邊有一片被礦物光包覆的龍鱗' },
    ],
    mapSymbol: '[泉]',
    mapX: 4,
    mapY: 26,
    guardianHints: {
      creature: '守泉龍騎士會優先保護受傷幼龍，分散火力可以破壞防線。',
      treasure: '泉底沉著透明鱗片，能強化抗火與抗雷裝備。',
      spirit: '龍族把記憶視為泉水的交換品，這可能與牠們漫長壽命有關。',
    },
  },

  dragon_claw_pass: {
    id: 'dragon_claw_pass',
    name: '龍爪隘口',
    zone: 'dragon_valley' as RoomDef['zone'],
    image: 'dragon_claw_pass.png',
    imagePrompt: '龍爪隘口 in dragon_valley, narrow pass carved by huge dragon claws, broken stone teeth, egg chamber back route and cliff winds, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text',
    description:
      '龍蛋室北方的隘口像被巨爪撕開，兩側岩壁留下平行深痕，足以讓成年人整個人藏進爪溝。地面散著像牙齒般尖銳的白石，踩錯位置會發出刺耳回聲，驚動飛龍崖上的巢群。這條路是龍族護巢時使用的側道，能在龍蛋室與飛龍崖之間快速移動，也讓玩家看見龍谷防衛網的內層結構。',
    exits: [
      { direction: 'south', targetRoomId: 'dragon_egg_chamber', description: '回到溫暖的龍蛋室' },
      { direction: 'east', targetRoomId: 'wyvern_cliff', description: '爪痕石階通往飛龍崖' },
      { direction: 'north', targetRoomId: 'dragon_thunder_nest', description: '雷聲沿隘口向北滾動' },
    ],
    monsters: [
      { monsterId: 'wyvern', maxCount: 2, respawnSeconds: 60 },
      { monsterId: 'dragon_knight', maxCount: 1, respawnSeconds: 80 },
    ],
    mapSymbol: '[爪]',
    mapX: 2,
    mapY: 26,
    guardianHints: {
      creature: '飛龍會利用爪溝藏身突襲，留意牆面落塵可預判位置。',
      treasure: '深爪痕中卡著被磨亮的龍牙碎片。',
      spirit: '隘口不是天然裂縫，而是某條古龍為保護巢穴親手開出的道路。',
    },
  },

  dragon_fireglass_terrace: {
    id: 'dragon_fireglass_terrace',
    name: '火玻璃台',
    zone: 'dragon_valley' as RoomDef['zone'],
    image: 'dragon_fireglass_terrace.png',
    imagePrompt: '火玻璃台 in dragon_valley, terrace of black volcanic glass reflecting fire and clouds, dragon scorch marks, glowing cracks, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text',
    description:
      '天空之橋東側延伸出一片黑亮平台，地面像被龍息燒熔後重新凝固的玻璃，能倒映雲層與飛龍影子。平台下方有細小火脈游走，每隔片刻便在裂縫中閃出金紅色光線。龍騎士會在此測試坐騎的火焰吐息，也會把破裂的龍鱗放在玻璃台上重新燒合。這裡視野開闊，卻沒有遮蔽物，任何接近者都暴露在空中巡邏之下。',
    exits: [
      { direction: 'west', targetRoomId: 'sky_bridge', description: '回到天空之橋' },
      { direction: 'south', targetRoomId: 'dragon_scale_spring', description: '沿水汽回到鱗光泉' },
      { direction: 'north', targetRoomId: 'dragon_oracle_perch', description: '火光指向觀星棲台' },
    ],
    monsters: [
      { monsterId: 'young_dragon', maxCount: 2, respawnSeconds: 55 },
      { monsterId: 'storm_dragon', maxCount: 1, respawnSeconds: 1800 },
    ],
    mapSymbol: '[璃]',
    mapX: 4,
    mapY: 27,
    guardianHints: {
      creature: '火玻璃會反射龍息，站在裂縫間的暗色石帶上較安全。',
      treasure: '平台邊緣有天然火玻璃，可用於附魔武器。',
      spirit: '這裡記錄了龍族把破壞轉化為工藝的方式。',
    },
  },

  dragon_thunder_nest: {
    id: 'dragon_thunder_nest',
    name: '雷巢',
    zone: 'dragon_valley' as RoomDef['zone'],
    image: 'dragon_thunder_nest.png',
    imagePrompt: '雷巢 in dragon_valley, storm-charged dragon nest of black branches and lightning rods, blue sparks, cloud abyss below, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text',
    description:
      '天空之橋西側的巢穴由黑色枝幹、龍骨碎片與天然避雷石編成，巢底不斷跳動藍白電弧。風暴巨龍會在此磨亮犄角，牠們用雷電淬鍊鱗片，使整座巢穴像活物一樣發出低鳴。巢外有幾根斷裂的龍騎長槍，槍尖仍殘留焦黑煙痕。玩家若想穿越此處，必須避開週期性落雷，也可觀察雷光流向判斷風暴之巔的祭壇狀態。巢壁深處還有半埋的雲石蛋殼，代表這裡曾孵化過掌控雷雲的古老血脈。每次雷鳴後，巢口會短暫露出通往熔火高巢的安全落腳點。若停留太久，避雷石會逐漸充能並吸引更多飛龍回巢。',
    exits: [
      { direction: 'east', targetRoomId: 'sky_bridge', description: '回到天空之橋' },
      { direction: 'south', targetRoomId: 'dragon_claw_pass', description: '下坡回到龍爪隘口' },
      { direction: 'north', targetRoomId: 'dragon_molten_aerie', description: '雷雲後方連向熔火高巢' },
    ],
    monsters: [
      { monsterId: 'storm_dragon', maxCount: 1, respawnSeconds: 1800 },
      { monsterId: 'wyvern', maxCount: 2, respawnSeconds: 65 },
    ],
    mapSymbol: '[雷]',
    mapX: 2,
    mapY: 27,
    guardianHints: {
      creature: '風暴巨龍起飛前巢底電弧會集中，提前離開中心區。',
      treasure: '避雷石上凝著雷晶，可強化雷屬性抗性。',
      spirit: '雷巢是龍族成年試煉的一部分，能承受落雷才被准許上風暴之巔。',
    },
  },

  dragon_oracle_perch: {
    id: 'dragon_oracle_perch',
    name: '龍諭棲台',
    zone: 'dragon_valley' as RoomDef['zone'],
    image: 'dragon_oracle_perch.png',
    imagePrompt: '龍諭棲台 in dragon_valley, high oracle perch with star maps, hanging crystal lenses, storm-lit clouds and ancient dragon runes, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text',
    description:
      '風暴之巔東側的棲台懸在雲海之上，周圍吊著數十片水晶透鏡，會隨風轉動並投射星圖。龍族祭司曾在此聆聽古龍夢境，把預言刻在弧形石座後方。許多刻痕已被雷火熔成模糊光帶，但仍能辨認出魔族要塞、深淵裂隙與一顆墜落星辰的圖案。這裡是任務線索與大型事件鉤子的理想節點，也會吸引守護預言的龍騎士。',
    exits: [
      { direction: 'west', targetRoomId: 'storm_peak', description: '回到風暴之巔' },
      { direction: 'south', targetRoomId: 'dragon_fireglass_terrace', description: '星光階梯下到火玻璃台' },
      { direction: 'north', targetRoomId: 'dragon_starfall_crater', description: '預言圖案指向墜星坑' },
    ],
    monsters: [
      { monsterId: 'dragon_knight', maxCount: 2, respawnSeconds: 80 },
      { monsterId: 'storm_dragon', maxCount: 1, respawnSeconds: 1800 },
    ],
    mapSymbol: '[諭]',
    mapX: 4,
    mapY: 28,
    guardianHints: {
      creature: '龍騎士會守住預言石座，使用遠程攻擊可迫使他們離開高位。',
      treasure: '破裂透鏡中仍保有星光，可作為占星法器材料。',
      spirit: '預言把魔族與深淵連在一起，說明龍谷早已察覺外界危機。',
    },
  },

  dragon_molten_aerie: {
    id: 'dragon_molten_aerie',
    name: '熔火高巢',
    zone: 'dragon_valley' as RoomDef['zone'],
    image: 'dragon_molten_aerie.png',
    imagePrompt: '熔火高巢 in dragon_valley, high volcanic dragon aerie with lava vents, ember nests, red updrafts and molten rock ledges, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text',
    description:
      '風暴之巔西側的山腹裂開，露出一座由熔岩熱流支撐的高巢。巢壁赤紅，岩石像剛從爐中取出的鐵塊，卻被龍爪雕出規整平台。火焰幼龍與風暴飛龍在此共用上升熱流，牠們的鱗片被熱風吹得發亮。這裡連接雷巢與風暴之巔，代表龍谷的火與雷力量在此交會；若破壞熱流節點，天空巡邏可能短暫失去高度優勢。',
    exits: [
      { direction: 'east', targetRoomId: 'storm_peak', description: '熱風階梯回到風暴之巔' },
      { direction: 'south', targetRoomId: 'dragon_thunder_nest', description: '雷雲縫隙回到雷巢' },
      { direction: 'north', targetRoomId: 'dragon_skywarden_camp', description: '高巢後方通向天衛營地' },
    ],
    monsters: [
      { monsterId: 'young_dragon', maxCount: 2, respawnSeconds: 55 },
      { monsterId: 'storm_dragon', maxCount: 1, respawnSeconds: 1800 },
    ],
    mapSymbol: '[熔]',
    mapX: 2,
    mapY: 28,
    guardianHints: {
      creature: '熔火高巢的熱流會讓飛行敵人快速回位，先逼牠們離開熱流柱。',
      treasure: '熔岩冷卻邊緣有紅色龍晶，可用於火屬性附魔。',
      spirit: '火與雷在此共存，顯示龍族元素傳承並非彼此孤立。',
    },
  },

  dragon_scale_forge: {
    id: 'dragon_scale_forge',
    name: '龍鱗鍛台',
    zone: 'dragon_valley' as RoomDef['zone'],
    image: 'dragon_scale_forge.png',
    imagePrompt: '龍鱗鍛台 in dragon_valley, sacred forge built from dragon bones and crystal anvils, scale armor pieces, blue fire and hoard gate, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text',
    description:
      '古龍巢穴北側的石階通往龍鱗鍛台，這裡沒有普通鐵匠爐，只有嵌在龍骨中的藍色火焰與水晶砧。龍族會把自然脫落的鱗片、斷角與星砂放在砧上，鍛造成守護聖殿的甲片與符刃。牆面掛著半成品龍鱗甲，每一片都記錄著原主的元素氣息。鍛台同時連著寶庫與古龍聖殿，是資源、裝備與任務獎勵的交會點。砧台下方有古龍親自留下的鍛造誓言，要求使用者不得以屠龍所得換取力量。水晶砧旁還保存著多份未完成配方，可延伸後續裝備任務。藍火會辨認材料來源，讓貪婪者只得到一團冷灰。',
    exits: [
      { direction: 'south', targetRoomId: 'ancient_dragon_lair', description: '龍牙階梯回到古龍巢穴' },
      { direction: 'east', targetRoomId: 'dragon_hoard', description: '鑄鱗石門通往龍之寶庫' },
      { direction: 'west', targetRoomId: 'elder_dragon_sanctum', description: '側殿回到古龍聖殿' },
    ],
    monsters: [
      { monsterId: 'dragon_knight', maxCount: 2, respawnSeconds: 80 },
      { monsterId: 'ancient_wyrm', maxCount: 1, respawnSeconds: 75 },
    ],
    groundItems: [
      { itemId: 'dragon_scale', description: '水晶砧旁放著一片等待鍛造的古龍鱗' },
    ],
    mapSymbol: '[鍛]',
    mapX: 4,
    mapY: 29,
    guardianHints: {
      creature: '守鍛龍騎士會利用砧台反彈攻擊，繞到側面較容易突破。',
      treasure: '未完成的龍鱗甲片可作為高階裝備配方線索。',
      spirit: '龍族鍛造只使用自然脫落材料，象徵力量必須被允許而非掠奪。',
    },
  },

  dragon_skywarden_camp: {
    id: 'dragon_skywarden_camp',
    name: '天衛營地',
    zone: 'dragon_valley' as RoomDef['zone'],
    image: 'dragon_skywarden_camp.png',
    imagePrompt: '天衛營地 in dragon_valley, elite dragon knight camp on high ridge, banners, saddle racks, maps of sky patrols and cloud fires, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text',
    description:
      '古龍聖殿西廊外是一處守衛營地，石平台上排列著龍騎士鞍具、長槍架與記錄天空巡邏線的皮革地圖。營火不是木柴燃起，而是由小型風暴晶核維持，火焰會隨天候改變顏色。天衛負責攔截從魔族領地、山外航路與深淵裂縫靠近的威脅，因此此處保留大量戰報。玩家若能突破守衛，便能取得關於龍谷防線與下一區裂隙的清楚線索。',
    exits: [
      { direction: 'east', targetRoomId: 'elder_dragon_sanctum', description: '西廊回到古龍聖殿' },
      { direction: 'south', targetRoomId: 'dragon_molten_aerie', description: '斜坡下到熔火高巢' },
    ],
    monsters: [
      { monsterId: 'dragon_knight', maxCount: 3, respawnSeconds: 80 },
      { monsterId: 'wyvern', maxCount: 1, respawnSeconds: 65 },
    ],
    mapSymbol: '[衛]',
    mapX: 2,
    mapY: 29,
    guardianHints: {
      creature: '天衛會以長槍控制距離，利用營帳柱子可切斷衝鋒線。',
      treasure: '巡邏地圖上標出深淵入口異常擴大的日期。',
      spirit: '龍族並非避世不問外界，天衛長年監控所有重大威脅。',
    },
  },

  dragon_starfall_crater: {
    id: 'dragon_starfall_crater',
    name: '墜星坑',
    zone: 'dragon_valley' as RoomDef['zone'],
    image: 'dragon_starfall_crater.png',
    imagePrompt: '墜星坑 in dragon_valley, glowing meteor crater north of elder dragon sanctum, star metal shards, dragon runes, purple abyss cracks, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text',
    description:
      '古龍聖殿北門外的山脊被一顆遠古星辰砸出圓形巨坑，坑底仍散發銀藍色微光。星鐵碎片嵌在岩層中，周圍刻滿龍族封印符號，防止天外力量滲入地脈。近年封印邊緣開始出現紫黑裂紋，與聖殿地板下通往深淵的裂隙互相呼應。這裡是龍谷的大型事件鉤子，能把古龍預言、星界材料與深淵危機串在一起。',
    exits: [
      { direction: 'south', targetRoomId: 'elder_dragon_sanctum', description: '沿封印石階回到古龍聖殿' },
      { direction: 'west', targetRoomId: 'dragon_oracle_perch', description: '星圖小徑折向龍諭棲台' },
    ],
    monsters: [
      { monsterId: 'ancient_wyrm', maxCount: 2, respawnSeconds: 75 },
      { monsterId: 'elder_dragon', maxCount: 1, respawnSeconds: 1800 },
    ],
    mapSymbol: '[星]',
    mapX: 4,
    mapY: 30,
    guardianHints: {
      creature: '墜星坑中的古龍蛇會沿裂紋游動，牠們出現前星鐵會先震動。',
      treasure: '坑底星鐵是鍛造神器與封印道具的核心材料。',
      spirit: '墜星坑證明深淵裂隙並非單純地下災害，而是與星界衝擊有關。',
    },
  },

  // ─── Area 11: 深淵裂隙 (Lv 50-55) ────────────────────────

  abyss_entrance: {
    id: 'abyss_entrance',
    name: '深淵入口',
    zone: 'abyss_rift' as RoomDef['zone'],
    image: 'abyss_entrance.png',
    imagePrompt: '深淵入口 in abyss_rift, cracked stairway descending from elder dragon sanctum into purple black void, impossible geometry, dimensional hum, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text',
    description:
      '古龍聖殿地板上的裂縫延伸成一道深不見底的階梯，向下通往一片紫黑色的虛空。' +
      '空間在此處開始扭曲，牆壁上的岩石呈現出不可能的幾何形狀。' +
      '耳邊傳來低沉的嗡鳴聲，那是維度壁壘被侵蝕的聲音。',
    exits: [
      { direction: 'up', targetRoomId: 'elder_dragon_sanctum', description: '回到古龍聖殿' },
      { direction: 'north', targetRoomId: 'void_corridor', description: '踏入扭曲的虛空' },
      { direction: 'east', targetRoomId: 'nightmare_garden', description: '一條小徑通往奇異的花園' },
      { direction: 'west', targetRoomId: 'abyss_anchor_steps', description: '破碎階梯纏著封印錨鏈' },
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
    image: 'void_corridor.png',
    imagePrompt: '虛空迴廊 in abyss_rift, floating stone corridor over endless purple void, transparent floor with star abyss below, crawling shadow shapes, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text',
    description:
      '一條漂浮在虛空中的石質走廊，兩側是無盡的紫黑色虛無。' +
      '走廊的地板時而凝固時而透明，能透過腳下看到星辰般閃爍的深淵。' +
      '偶爾有扭曲的光芒從虛空中射出，照亮走廊上蠕動的暗影生物。牆面缺口會傳來其他時間線的低語。',
    exits: [
      { direction: 'south', targetRoomId: 'abyss_entrance', description: '退回深淵入口' },
      { direction: 'north', targetRoomId: 'shadow_realm', description: '走廊延伸入更深的黑暗' },
      { direction: 'east', targetRoomId: 'time_distortion', description: '空間在此分裂出另一條路' },
      { direction: 'west', targetRoomId: 'void_mirror_lake', description: '西側虛空凝成鏡湖' },
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
    image: 'shadow_realm.png',
    imagePrompt: '暗影領域 in abyss_rift, realm swallowed by pure shadow, black rippling floor, ghost eyes and fading body silhouettes, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text',
    description:
      '一片被純粹暗影能量籠罩的空間，所有光源在這裡都會被吞噬。' +
      '只有暗影生物的眼睛在黑暗中如同幽靈般閃爍。地面是一層流動的暗影，' +
      '每一步都會激起漣漪般的黑色波紋。在這裡，連自己的身體都開始變得模糊。',
    exits: [
      { direction: 'south', targetRoomId: 'void_corridor', description: '退回虛空迴廊' },
      { direction: 'north', targetRoomId: 'chaos_bridge', description: '黑暗中有一道混沌的光芒' },
      { direction: 'west', targetRoomId: 'shadow_archive', description: '暗影書架在西側浮現' },
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
    image: 'chaos_bridge.png',
    imagePrompt: '混沌之橋 in abyss_rift, bridge of shifting chaos matter changing between stone crystal and void, elemental colors along both sides, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text',
    description:
      '一座由不斷變換形態的混沌物質構成的橋樑，橋面時而是石頭，時而是水晶，時而是虛無。' +
      '橋的兩側翻湧著不同顏色的能量——火、冰、雷、光、暗交替閃爍。' +
      '踏上橋面的瞬間，現實的法則就不再適用。橋面邊緣還會短暫浮現其他隊伍失敗時留下的腳印。',
    exits: [
      { direction: 'south', targetRoomId: 'shadow_realm', description: '退回暗影領域' },
      { direction: 'north', targetRoomId: 'abyss_core', description: '橋的盡頭是深淵的核心' },
      { direction: 'west', targetRoomId: 'gravity_well', description: '橋下引力井正在塌縮' },
      { direction: 'east', targetRoomId: 'memory_maze', description: '東側迷霧組成記憶迷宮' },
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
    image: 'nightmare_garden.png',
    imagePrompt: '噩夢花園 in abyss_rift, floating garden of nightmare crystal flowers, silent blooming and withering, twisted human silhouettes in purple mist, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text',
    description:
      '一座詭異的花園漂浮在虛空之中，花朵是由凝固的噩夢結晶而成。' +
      '每一朵花都在無聲地綻放與凋零，散發著令人昏沉的幽香。' +
      '花叢中偶爾能看到扭曲的人影——那是被噩夢吞噬的冒險者殘留的意識。',
    exits: [
      { direction: 'west', targetRoomId: 'abyss_entrance', description: '回到深淵入口' },
      { direction: 'north', targetRoomId: 'time_distortion', description: '花園邊緣的空間在扭曲' },
      { direction: 'east', targetRoomId: 'nightmare_orchard', description: '花園深處長著噩夢果樹' },
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
    image: 'abyss_core.png',
    imagePrompt: '深淵核心 in abyss_rift, giant dark purple sphere pulsing in collapsed void, broken gravity, warped light, chaos and shadow source, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text',
    description:
      '裂隙的最深處，一顆巨大的暗紫色球體懸浮在虛空中央，不斷脈動著。' +
      '這是深淵的核心——所有混沌和暗影力量的源頭。' +
      '核心周圍的空間已經完全崩壞，重力、時間、光線都失去了意義。碎裂石台像衛星般繞著核心旋轉，每一次脈動都會把遠處的迴廊、花園與時空區短暫拉近。核心表面浮現無數陌生眼睛，又在下一瞬間變成古代術式，說明它既是入侵錨點，也是被封印失敗後扭曲的魔法裝置。若玩家站在脈動間隙，能聽見古代術士留下的警告，提醒任何攻擊核心的行動都會同時震動整條裂隙。西側熔爐正把剝落碎片重新鑄成武器。',
    exits: [
      { direction: 'south', targetRoomId: 'chaos_bridge', description: '退回混沌之橋' },
      { direction: 'east', targetRoomId: 'abyss_lord_chamber', description: '核心背後是深淵領主的居所' },
      { direction: 'west', targetRoomId: 'rift_forge', description: '核心碎片落向裂隙熔爐' },
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
    image: 'time_distortion.png',
    imagePrompt: '時空扭曲區 in abyss_rift, overlapping past present future ruins, branching time streams, broken clocks and dimensional light, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text',
    description:
      '空間在此處嚴重扭曲，過去、現在和未來的景象交疊在一起。' +
      '你能同時看到這個地方千年前的繁華和千年後的廢墟。' +
      '時間之流在此分岔又匯合，一步之差可能跨越百年。地面裂縫裡還卡著不同年代的武器殘影。',
    exits: [
      { direction: 'west', targetRoomId: 'void_corridor', description: '回到虛空迴廊' },
      { direction: 'south', targetRoomId: 'nightmare_garden', description: '回到噩夢花園' },
      { direction: 'north', targetRoomId: 'abyss_lord_chamber', description: '時空的盡頭指向領主之間' },
      { direction: 'east', targetRoomId: 'time_splinter_vault', description: '碎裂時間流入封存室' },
      { direction: 'down', targetRoomId: 'chaos_observatory', description: '觀測台倒映著錯亂星圖' },
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
    image: 'abyss_lord_chamber.png',
    imagePrompt: '深淵領主之間 in abyss_rift, enormous floating platform of solid chaos, shadow void throne, many-eyed abyss lord warping reality, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text',
    description:
      '一個懸浮在虛空中心的巨大平台，由凝固的混沌能量構成。' +
      '平台中央矗立著一座由暗影和虛空編織而成的王座，深淵領主端坐其上，' +
      '多隻眼睛同時注視著來訪者。牠的存在本身就在扭曲周圍的現實，空間在牠身邊不停裂開又癒合。王座後方懸著破碎的天界門影，腳下則能看見深淵核心的脈動倒影。每當領主抬手，平台邊緣的時鐘、鏡面與暗影柱便會重新排列，像是在為下一次維度入侵校準座標。王座側面的信標持續向外發出黑紫脈衝，北方尖塔則把這些座標刺入天界裂口。這裡同時是 Boss 戰場、區域出口與深淵陰謀的中心。',
    exits: [
      { direction: 'west', targetRoomId: 'abyss_core', description: '退回深淵核心' },
      { direction: 'south', targetRoomId: 'time_distortion', description: '退回時空扭曲區' },
      { direction: 'east', targetRoomId: 'abyssal_beacon', description: '王座側面有深淵信標' },
      { direction: 'north', targetRoomId: 'sealbreak_spire', description: '破封尖塔刺入虛空頂端' },
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

  abyss_anchor_steps: {
    id: 'abyss_anchor_steps',
    name: '封印錨階',
    zone: 'abyss_rift' as RoomDef['zone'],
    image: 'abyss_anchor_steps.png',
    imagePrompt: '封印錨階 in abyss_rift, broken descending steps wrapped in giant sealing chains, purple void below, dragon and mage runes, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text',
    description:
      '深淵入口西側的階梯被數條巨大錨鏈纏住，鏈環一半刻著龍語，一半刻著古代術士的封印符。每走下一層，腳下石板都會出現不同年代的裂痕，彷彿這段階梯曾被反覆修補又反覆撕開。錨鏈末端沒入紫黑虛空，偶爾傳來沉重拖拽聲，表示某種力量正試圖把整個入口拉向更深處。',
    exits: [
      { direction: 'east', targetRoomId: 'abyss_entrance', description: '沿錨鏈回到深淵入口' },
      { direction: 'north', targetRoomId: 'void_mirror_lake', description: '階梯盡頭映著鏡湖冷光' },
    ],
    monsters: [
      { monsterId: 'void_walker', maxCount: 2, respawnSeconds: 70 },
      { monsterId: 'shadow_demon', maxCount: 2, respawnSeconds: 75 },
    ],
    mapSymbol: '[錨]',
    mapX: 2,
    mapY: 30,
    guardianHints: {
      creature: '虛空行者會沿錨鏈瞬移，站在斷鏈旁能限制牠的落點。',
      treasure: '錨鏈碎片保留封印力量，可作為抗深淵裝備材料。',
      spirit: '錨鏈證明古龍與術士曾合作封鎖裂隙，只是封印如今正在失效。',
    },
  },

  void_mirror_lake: {
    id: 'void_mirror_lake',
    name: '虛空鏡湖',
    zone: 'abyss_rift' as RoomDef['zone'],
    image: 'void_mirror_lake.png',
    imagePrompt: '虛空鏡湖 in abyss_rift, still black mirror lake floating in void, reflections showing impossible other selves, purple stars beneath surface, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text',
    description:
      '虛空迴廊西側沒有真正的湖水，而是一片平滑到毫無波紋的黑色鏡面。鏡中倒影不會模仿動作，而是展示可能發生過的其他選擇：倒下的同伴、未開啟的寶箱、或從未踏入深淵的自己。湖面中央偶爾浮起星辰般的氣泡，破裂時會放出其他維度的低語。這裡是探索與精神考驗點，也會吸引追逐記憶的暗影惡魔。',
    exits: [
      { direction: 'east', targetRoomId: 'void_corridor', description: '鏡湖邊緣回到虛空迴廊' },
      { direction: 'south', targetRoomId: 'abyss_anchor_steps', description: '鏡面下方連著封印錨階' },
      { direction: 'north', targetRoomId: 'shadow_archive', description: '倒影中的書架指向暗影檔案館' },
    ],
    monsters: [
      { monsterId: 'shadow_demon', maxCount: 2, respawnSeconds: 70 },
      { monsterId: 'nightmare', maxCount: 1, respawnSeconds: 1800 },
    ],
    mapSymbol: '[鏡]',
    mapX: 2,
    mapY: 31,
    guardianHints: {
      creature: '噩夢會從倒影裡起身，先打碎異常倒影可阻止伏擊。',
      treasure: '鏡湖氣泡凝成的黑晶可封存短暫記憶。',
      spirit: '鏡湖不預言未來，只呈現被深淵吞掉的可能性。',
    },
  },

  shadow_archive: {
    id: 'shadow_archive',
    name: '暗影檔案館',
    zone: 'abyss_rift' as RoomDef['zone'],
    image: 'shadow_archive.png',
    imagePrompt: '暗影檔案館 in abyss_rift, endless shelves made of shadow, floating black scrolls, dim violet lamps and whispering records, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text',
    description:
      '暗影領域西側浮現一座沒有牆壁的檔案館，書架由濃黑影子堆成，卷軸自行展開又縮回。每份檔案都記錄一名被深淵觸碰者的恐懼、願望與最後一句話，閱讀時文字會像活物一樣鑽入視野。檔案館中央放著破碎索引台，上面標示通往混沌之橋、鏡湖與記憶迷宮的路線，是理解裂隙結構的關鍵地點。',
    exits: [
      { direction: 'east', targetRoomId: 'shadow_realm', description: '離開書架回到暗影領域' },
      { direction: 'south', targetRoomId: 'void_mirror_lake', description: '書頁倒影落向虛空鏡湖' },
      { direction: 'north', targetRoomId: 'gravity_well', description: '檔案館深處通往引力井' },
    ],
    monsters: [
      { monsterId: 'shadow_demon', maxCount: 3, respawnSeconds: 65 },
      { monsterId: 'void_walker', maxCount: 1, respawnSeconds: 70 },
    ],
    mapSymbol: '[檔]',
    mapX: 2,
    mapY: 32,
    guardianHints: {
      creature: '暗影惡魔會藏在書架投影中，觀察影子是否與光源方向一致。',
      treasure: '破碎索引台可提供深淵領主過去身分的線索。',
      spirit: '檔案館保存的不是紙張，而是被深淵奪走的記憶。',
    },
  },

  chaos_observatory: {
    id: 'chaos_observatory',
    name: '混沌觀測台',
    zone: 'abyss_rift' as RoomDef['zone'],
    image: 'chaos_observatory.png',
    imagePrompt: '混沌觀測台 in abyss_rift, tilted observatory with broken lenses aimed at impossible stars, chaos equations in violet light, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text',
    description:
      '噩夢花園北方的空間突然折成一座傾斜觀測台，巨大的透鏡不朝天空，而是指向裂隙中不斷誕生又消失的假星。台面刻滿混沌方程，線條每隔幾秒就會自行重排，讓原本正確的路徑變成死路。這裡曾是術士監測裂隙脈動的工作站，如今所有儀器都被深淵反向利用，用來尋找現實防線的薄弱處。',
    exits: [
      { direction: 'north', targetRoomId: 'time_distortion', description: '觀測弧線回到時空扭曲區' },
      { direction: 'east', targetRoomId: 'time_splinter_vault', description: '透鏡光束照向時間碎片庫' },
      { direction: 'west', targetRoomId: 'nightmare_garden', description: '倒轉階梯回到噩夢花園' },
    ],
    monsters: [
      { monsterId: 'chaos_spawn', maxCount: 3, respawnSeconds: 60 },
      { monsterId: 'void_walker', maxCount: 1, respawnSeconds: 70 },
    ],
    mapSymbol: '[觀]',
    mapX: 5,
    mapY: 30,
    guardianHints: {
      creature: '混沌之子會跟著方程顏色變屬性，先看地面線條再出手。',
      treasure: '破碎透鏡能放大裂隙能量，是高階法器材料。',
      spirit: '觀測台證明深淵曾被研究過，只是研究者最終成了入侵的座標。',
    },
  },

  nightmare_orchard: {
    id: 'nightmare_orchard',
    name: '噩夢果園',
    zone: 'abyss_rift' as RoomDef['zone'],
    image: 'nightmare_orchard.png',
    imagePrompt: '噩夢果園 in abyss_rift, orchard of black crystal trees bearing glowing nightmare fruit, sleeping silhouettes under roots, purple fog, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text',
    description:
      '噩夢花園東側的樹木長得像黑色水晶，每根枝條都掛著一顆半透明果實，果實裡浮現沉睡者的臉。果園地面柔軟得像夢境邊界，踩下去會聽見不屬於自己的回憶。部分果實已經裂開，流出銀紫色汁液並形成小型幻境。這裡可作為資源與事件點，但任何採集都可能喚醒被困在果實中的噩夢意識。',
    exits: [
      { direction: 'west', targetRoomId: 'nightmare_garden', description: '穿過花霧回到噩夢花園' },
      { direction: 'north', targetRoomId: 'time_splinter_vault', description: '果園北側有碎時封存室' },
    ],
    monsters: [
      { monsterId: 'nightmare', maxCount: 2, respawnSeconds: 1800 },
      { monsterId: 'shadow_demon', maxCount: 2, respawnSeconds: 70 },
    ],
    mapSymbol: '[果]',
    mapX: 5,
    mapY: 31,
    guardianHints: {
      creature: '噩夢會假裝成沉睡者求救，注意果實是否仍連著黑色枝條。',
      treasure: '完整噩夢果可製成精神抗性或幻術材料。',
      spirit: '果園把恐懼培育成實體，說明深淵會利用意識作為養分。',
    },
  },

  time_splinter_vault: {
    id: 'time_splinter_vault',
    name: '時間碎片庫',
    zone: 'abyss_rift' as RoomDef['zone'],
    image: 'time_splinter_vault.png',
    imagePrompt: '時間碎片庫 in abyss_rift, vault of floating clock shards and frozen moments, silver purple time splinters in glass cells, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text',
    description:
      '時空扭曲區東側是一間漂浮封存室，無數鐘面碎片被關在透明晶格裡，指針指向完全不同的年代。某些晶格中封著一秒鐘的火焰、一次未完成的攻擊、或一個即將說出口的名字。封存室中央的裂鐘每敲一次，玩家都會感覺自己剛剛做過的選擇被重新排列。這裡能提供時空任務素材，也能解釋深淵領主如何撕開通往天界的路。晶格後方有多條被剪斷的時間線，末端全都指向領主王座，表示牠曾反覆嘗試尋找勝利的未來。若打開錯誤晶格，房間會倒退到剛進門的一刻，只有被封存的傷痕仍然保留。',
    exits: [
      { direction: 'west', targetRoomId: 'time_distortion', description: '晶格廊道回到時空扭曲區' },
      { direction: 'south', targetRoomId: 'nightmare_orchard', description: '碎片光流向噩夢果園' },
      { direction: 'north', targetRoomId: 'echo_court', description: '裂鐘回聲通往迴響庭' },
    ],
    monsters: [
      { monsterId: 'void_walker', maxCount: 2, respawnSeconds: 70 },
      { monsterId: 'chaos_spawn', maxCount: 2, respawnSeconds: 65 },
    ],
    mapSymbol: '[碎]',
    mapX: 5,
    mapY: 32,
    guardianHints: {
      creature: '虛空行者會利用時間碎片重置位置，打碎旁邊晶格可中斷瞬移。',
      treasure: '穩定的時間碎片能用於冷卻縮短或傳送道具。',
      spirit: '封存室暗示領主不是控制時間，而是在偷取別處的片段。',
    },
  },

  gravity_well: {
    id: 'gravity_well',
    name: '倒重引力井',
    zone: 'abyss_rift' as RoomDef['zone'],
    image: 'gravity_well.png',
    imagePrompt: '倒重引力井 in abyss_rift, inverted gravity well with stones falling upward, black spiral pit, broken chains and purple force rings, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text',
    description:
      '混沌之橋西側的虛空向內塌陷成倒重引力井，碎石、影子與破裂鎖鏈不是落下，而是緩慢向上墜入黑色螺旋。井壁刻滿失敗封印的記號，每一道符號都被拉長成扭曲弧線。靠近井口時，裝備重量會忽然變輕，下一秒又像整座山壓在肩上。這裡是精英戰鬥點，能用引力變化製造高風險走位。',
    exits: [
      { direction: 'east', targetRoomId: 'chaos_bridge', description: '抓住石樁回到混沌之橋' },
      { direction: 'south', targetRoomId: 'shadow_archive', description: '井壁裂縫通往暗影檔案館' },
      { direction: 'north', targetRoomId: 'rift_forge', description: '上升碎石流向裂隙熔爐' },
    ],
    monsters: [
      { monsterId: 'chaos_spawn', maxCount: 2, respawnSeconds: 65 },
      { monsterId: 'shadow_demon', maxCount: 2, respawnSeconds: 70 },
    ],
    mapSymbol: '[重]',
    mapX: 2,
    mapY: 33,
    guardianHints: {
      creature: '混沌生物會在重力反轉時衝鋒，等碎石停滯再移動較安全。',
      treasure: '井心凝成的重力石可製作控制推拉效果的道具。',
      spirit: '引力井是封印崩壞後的副產物，代表現實法則正在局部失效。',
    },
  },

  memory_maze: {
    id: 'memory_maze',
    name: '記憶迷宮',
    zone: 'abyss_rift' as RoomDef['zone'],
    image: 'memory_maze.png',
    imagePrompt: '記憶迷宮 in abyss_rift, maze walls made of fading memories, translucent scenes, purple fog corridors and shadow hunters, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text',
    description:
      '混沌之橋東側的迷宮沒有固定牆壁，通道由來訪者的記憶片段拼成：熟悉的村口、失敗的戰鬥、未完成的承諾，全都像薄幕一樣攔在前方。每次選錯路，迷宮就會拿走一段細節，使人忘記自己為何前進。地面上的銀色線條偶爾會指向深淵核心，但也可能故意把玩家引向噩夢。這裡適合承接調查與救援任務。迷宮牆上還嵌著被困冒險者留下的名字，只要讀出正確順序，某些記憶薄幕會短暫打開，露出通往迴響庭的道路。若玩家停留太久，自己的名字也會逐漸浮現在牆上，提示記憶正在被迷宮吸收。',
    exits: [
      { direction: 'west', targetRoomId: 'chaos_bridge', description: '沿銀線回到混沌之橋' },
      { direction: 'north', targetRoomId: 'echo_court', description: '迷宮盡頭傳來迴響' },
      { direction: 'south', targetRoomId: 'time_splinter_vault', description: '記憶薄幕連到時間碎片庫' },
    ],
    monsters: [
      { monsterId: 'nightmare', maxCount: 1, respawnSeconds: 1800 },
      { monsterId: 'void_walker', maxCount: 2, respawnSeconds: 70 },
    ],
    mapSymbol: '[憶]',
    mapX: 4,
    mapY: 33,
    guardianHints: {
      creature: '噩夢會偽裝成熟悉人物，檢查影子是否同步可辨真偽。',
      treasure: '迷宮中心可找回被奪走的記憶碎片，可能解鎖隱藏任務。',
      spirit: '記憶迷宮證明深淵入侵不只破壞空間，也會侵蝕身份。',
    },
  },

  rift_forge: {
    id: 'rift_forge',
    name: '裂隙熔爐',
    zone: 'abyss_rift' as RoomDef['zone'],
    image: 'rift_forge.png',
    imagePrompt: '裂隙熔爐 in abyss_rift, forge fed by abyss core fragments, black purple flames, floating anvils and broken dimensional metal, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text',
    description:
      '深淵核心西側落下的碎片匯聚成裂隙熔爐，黑紫火焰不燃燒燃料，而是燃燒失敗的現實可能性。漂浮砧台周圍旋轉著破碎維度金屬，每一塊都在不同物質形態間閃爍。深淵生物會把核心碎屑投入爐中，鍛造成能割開空間的刃片。這裡是高階資源與精英戰鬥點，也是理解領主軍備來源的重要場所。熔爐外圈堆著被切開的封印錨鏈與龍骨碎片，說明深淵軍勢正在把防線殘骸反過來變成攻城工具。砧台旁還有未完成的裂界刃，刀身每次成形都會割出一條小型傳送縫。爐壁刻著供料清單與守衛編號。',
    exits: [
      { direction: 'east', targetRoomId: 'abyss_core', description: '熔爐火線回到深淵核心' },
      { direction: 'south', targetRoomId: 'gravity_well', description: '碎片流下墜入引力井' },
    ],
    monsters: [
      { monsterId: 'chaos_spawn', maxCount: 3, respawnSeconds: 65 },
      { monsterId: 'void_walker', maxCount: 1, respawnSeconds: 70 },
    ],
    mapSymbol: '[爐]',
    mapX: 2,
    mapY: 34,
    guardianHints: {
      creature: '熔爐中的混沌生物會吸收火線，離開砧台區再交戰較穩。',
      treasure: '維度金屬可用於製作穿透或傳送相關裝備。',
      spirit: '裂隙熔爐把世界的失敗可能性鑄成武器，是深淵擴張的工廠。',
    },
  },

  echo_court: {
    id: 'echo_court',
    name: '迴響庭',
    zone: 'abyss_rift' as RoomDef['zone'],
    image: 'echo_court.png',
    imagePrompt: '迴響庭 in abyss_rift, court of floating stone benches and repeating sound waves, purple echoes of past battles, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text',
    description:
      '記憶迷宮北端是一座浮空庭院，石椅、審判台與破碎鐘架圍成半圓，每一句話都會被複製成數十個不同情緒的回聲。庭院中央漂著過去戰鬥的殘響，有些影像會重演冒險者被深淵吞噬的瞬間，有些則像證詞一樣指向領主之間。迴響庭可以承接調查、審判與救援任務，但過多噪音會召來追逐聲音的虛空行者。若能讓正確回聲重疊，庭院會顯示被抹去隊伍的最後路線，並開啟通往深淵信標的短暫聲橋。審判台後方刻著許多未被聽見的辯詞，暗示深淵連死亡後的聲音也會收割。鐘架仍在等待判決。',
    exits: [
      { direction: 'south', targetRoomId: 'memory_maze', description: '回聲廊道回到記憶迷宮' },
      { direction: 'west', targetRoomId: 'time_splinter_vault', description: '裂鐘聲回到時間碎片庫' },
      { direction: 'north', targetRoomId: 'abyssal_beacon', description: '最響亮的回聲指向深淵信標' },
    ],
    monsters: [
      { monsterId: 'void_walker', maxCount: 2, respawnSeconds: 70 },
      { monsterId: 'shadow_demon', maxCount: 2, respawnSeconds: 70 },
    ],
    mapSymbol: '[響]',
    mapX: 5,
    mapY: 33,
    guardianHints: {
      creature: '虛空行者會追逐最大聲的回音，短暫沉默可讓牠失去目標。',
      treasure: '審判台下有封存證詞的聲晶，可作為任務道具。',
      spirit: '迴響庭保存失敗者的聲音，避免他們完全被深淵抹去。',
    },
  },

  abyssal_beacon: {
    id: 'abyssal_beacon',
    name: '深淵信標',
    zone: 'abyss_rift' as RoomDef['zone'],
    image: 'abyssal_beacon.png',
    imagePrompt: '深淵信標 in abyss_rift, tall beacon of black violet light broadcasting dimensional coordinates, rings of eyes and broken antennas, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text',
    description:
      '深淵領主之間東側矗立著一座黑紫光柱，外層由眼狀符文與破碎天線環繞，像在向遙遠維度發送座標。信標每次閃爍，周圍空間就會浮現其他世界的輪廓：陌生城市、倒置海洋、被黑雪覆蓋的戰場。這裡是裂隙入侵的通訊核心，如果不關閉它，即使擊敗領主也可能只暫時延緩下一波深淵增援。',
    exits: [
      { direction: 'west', targetRoomId: 'abyss_lord_chamber', description: '光柱基座回到領主之間' },
      { direction: 'south', targetRoomId: 'echo_court', description: '信標回聲落向迴響庭' },
      { direction: 'north', targetRoomId: 'sealbreak_spire', description: '光柱頂端連著破封尖塔' },
    ],
    monsters: [
      { monsterId: 'chaos_spawn', maxCount: 2, respawnSeconds: 70 },
      { monsterId: 'abyss_lord', maxCount: 1, respawnSeconds: 1800 },
    ],
    mapSymbol: '[標]',
    mapX: 5,
    mapY: 34,
    guardianHints: {
      creature: '信標會週期性召來混沌之子，先破壞眼狀符文可降低壓力。',
      treasure: '信標核心可作為跨區傳送任務的重要材料。',
      spirit: '信標證明深淵並非無意識災害，而是有組織的維度入侵。',
    },
  },

  sealbreak_spire: {
    id: 'sealbreak_spire',
    name: '破封尖塔',
    zone: 'abyss_rift' as RoomDef['zone'],
    image: 'sealbreak_spire.png',
    imagePrompt: '破封尖塔 in abyss_rift, jagged spire piercing void ceiling, shattered seals, black lightning, doorway toward celestial light above, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text',
    description:
      '深淵領主王座北方有一座尖塔倒插進虛空穹頂，塔身掛滿被撕開的封印布與斷裂聖釘。黑色閃電沿塔面向上爬升，最頂端透出一線刺眼白光，那正是通往天界遺跡的裂口。塔內每一層都刻著領主嘗試破封的紀錄，從粗糙咒文到精密維度公式逐步演變。這裡是深淵裂隙的大型事件鉤子，也是本區通往下一大區的敘事銜接。尖塔外壁仍殘留天界防衛反擊造成的白色灼痕，玩家可以從中看出上方並非安全出口，而是另一場戰爭的邊界。塔心還懸著半枚破碎聖印，正在被信標脈衝一點點染黑。',
    exits: [
      { direction: 'south', targetRoomId: 'abyss_lord_chamber', description: '沿塔基回到領主之間' },
      { direction: 'east', targetRoomId: 'abyssal_beacon', description: '信標光纜纏向塔身' },
      { direction: 'up', targetRoomId: 'celestial_gate', description: '破封塔頂通向天界之門' },
    ],
    monsters: [
      { monsterId: 'abyss_lord', maxCount: 1, respawnSeconds: 1800 },
      { monsterId: 'chaos_spawn', maxCount: 2, respawnSeconds: 70 },
    ],
    mapSymbol: '[塔]',
    mapX: 4,
    mapY: 35,
    guardianHints: {
      creature: '塔內敵人會借用破封閃電增幅攻擊，等黑電轉白時再前進。',
      treasure: '斷裂聖釘仍保有天界封印力量，可用於後續聖物任務。',
      spirit: '破封尖塔說明通往天界的道路不是祝福，而是深淵領主硬生生撕開的傷口。',
    },
  },

  // ─── Area 12: 天界遺跡 (Lv 55-60) ────────────────────────

  celestial_gate: {
    id: 'celestial_gate',
    name: '天界之門',
    zone: 'celestial_ruins' as RoomDef['zone'],
    image: 'celestial_gate.png',
    imagePrompt: '天界之門 in celestial_ruins, vast white light arch above void, sacred lost glyphs, starstone floor, golden celestial ruins in distance, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text',
    description:
      '一道由純白光芒構成的巨大拱門矗立在虛空之上，門框上刻著失傳已久的神聖文字。' +
      '穿過光門的瞬間，世界從混沌的深淵轉變為金色的光輝。' +
      '腳下是由凝固的星光構成的地面，遠方的天際線上浮現著壯麗的天界廢墟。門後仍能看見深淵裂口的黑紫殘影，像一道尚未癒合的傷口貼在純白光幕上。破碎聖階兩側倒伏著天界守衛的旗杆與被燒焦的羽翼印記，提示深淵曾經衝擊到這裡。玩家踏入此處時，門框文字會逐行亮起，判斷來者是入侵者、朝聖者，還是被迫接受最終試煉的挑戰者。門前光塵會記錄第一次踏入者的名字。',
    exits: [
      { direction: 'down', targetRoomId: 'abyss_lord_chamber', description: '回到深淵領主之間' },
      { direction: 'north', targetRoomId: 'starlight_path', description: '沿著星光之路前進' },
      { direction: 'east', targetRoomId: 'divine_library', description: '光門旁有一座宏偉的建築' },
      { direction: 'west', targetRoomId: 'celestial_starfall_plaza', description: '西側廣場鋪滿墜星碎片' },
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
    image: 'starlight_path.png',
    imagePrompt: '星光走廊 in celestial_ruins, corridor paved with solid star fragments, broken celestial halls, holy dust and guardian silhouettes, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text',
    description:
      '一條由凝固的星辰碎片鋪成的走廊，每一步都踩在閃爍的星光之上。' +
      '走廊兩側是破碎的天界建築殘骸，曾經宏偉的殿堂如今只剩下斷壁殘垣。' +
      '但即便是廢墟，這裡的每一塊石頭都散發著令人敬畏的神聖之力。',
    exits: [
      { direction: 'south', targetRoomId: 'celestial_gate', description: '退回天界之門' },
      { direction: 'north', targetRoomId: 'angel_garden', description: '前方出現一片翠綠的花園' },
      { direction: 'east', targetRoomId: 'judgment_hall', description: '走廊盡頭是一座莊嚴的大廳' },
      { direction: 'west', targetRoomId: 'celestial_broken_colonnade', description: '西側柱廊只剩斷裂光柱' },
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
    image: 'angel_garden.png',
    imagePrompt: '天使花園 in celestial_ruins, miraculous golden white garden amid ruins, glowing holy fountain, seraph patrols and eternal blossoms, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text',
    description:
      '一片在天界廢墟中奇蹟般存活的花園，金色和白色的花朵永不凋零地綻放。' +
      '花園中央的噴泉仍在流淌著發光的聖水，空氣中充滿了治癒和安寧的氣息。' +
      '幾位熾天使在花園中巡遊，牠們的翅膀散發出溫暖的金色光芒。',
    exits: [
      { direction: 'south', targetRoomId: 'starlight_path', description: '退回星光走廊' },
      { direction: 'north', targetRoomId: 'celestial_throne_room', description: '花園盡頭是天界王座' },
      { direction: 'east', targetRoomId: 'celestial_fountain_of_oaths', description: '噴泉支流流向誓約之泉' },
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
    image: 'divine_library.png',
    imagePrompt: '神之圖書館 in celestial_ruins, enormous divine library with shelves of light, glowing books, automaton guardians and endless height, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text',
    description:
      '一座超越凡人想像的巨大圖書館，書架延伸到視線無法觸及的高度。' +
      '書冊由光線構成，翻開後會直接將知識灌入閱讀者的意識中。' +
      '圖書館中漫步著由神造兵器守護的自動機械，確保知識不被褻瀆。',
    exits: [
      { direction: 'west', targetRoomId: 'celestial_gate', description: '回到天界之門' },
      { direction: 'north', targetRoomId: 'celestial_scriptorium', description: '書架後方是抄寫室' },
      { direction: 'east', targetRoomId: 'celestial_lumen_archive', description: '光頁階梯通向流明檔案庫' },
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
    image: 'judgment_hall.png',
    imagePrompt: '審判大廳 in celestial_ruins, solemn hall with divine judgment murals, glowing scales, angel juror silhouettes and white gold pillars, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text',
    description:
      '一座莊嚴肅穆的大廳，穹頂上繪著諸神審判的壁畫。' +
      '大廳中央的天秤仍在緩慢擺動，衡量著每一個進入者的善惡。' +
      '兩排由光線構成的陪審席上坐著沉默的天使虛影，注視著到來的冒險者。每當武器出鞘，穹頂壁畫就會改變內容，把進入者過去的選擇投射成金白與黑灰兩色。大廳地面刻著數百條審判法則，其中有些已被深淵裂痕污染，導致神聖裁決不再完全公正。玩家若想通往天界王座，必須理解天秤偏移的原因，而不是單純擊倒守衛。審判席後方還有通往懺悔階的窄門，只有承認錯誤的人才會看見門縫中的白光。',
    exits: [
      { direction: 'west', targetRoomId: 'starlight_path', description: '退回星光走廊' },
      { direction: 'east', targetRoomId: 'celestial_throne_room', description: '大廳盡頭通往天界王座' },
      { direction: 'north', targetRoomId: 'celestial_penitent_steps', description: '審判席後有懺悔階' },
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
    image: 'celestial_throne_room.png',
    imagePrompt: '天界王座 in celestial_ruins, grand celestial throne hall of pure light, white platinum throne, rotating stars in ceiling, divine pressure, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text',
    description:
      '天界最宏偉的殿堂，穹頂由純淨的光線構成，無數星辰在其中旋轉。' +
      '一座由永恆白金鑄造的王座矗立在殿堂最高處，王座上空無一人，' +
      '但王座本身散發的神聖威壓足以讓凡人跪地臣服。通往最終之間的道路就在王座背後。王座階梯兩側排列著破碎冠冕與戰旗，記錄曾經挑戰神權的王國與英雄。深淵裂隙造成的黑色細紋已爬上白金扶手，讓空置王座看起來像正在等待新的審判者。只有理解審判、聖所與軍械庫留下的線索，才能判斷最終光門究竟是祝福還是試煉。王座側面的黎明武庫仍傳來機械啟動聲，表示最終防線尚未完全沉默。',
    exits: [
      { direction: 'south', targetRoomId: 'angel_garden', description: '退回天使花園' },
      { direction: 'west', targetRoomId: 'judgment_hall', description: '回到審判大廳' },
      { direction: 'east', targetRoomId: 'celestial_armory_of_dawn', description: '王座側門通往黎明武庫' },
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
    image: 'eternal_sanctuary.png',
    imagePrompt: '永恆聖所 in celestial_ruins, small forgotten chapel with creation mural, eternal fire, warm holy light and fallen angel shadows, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text',
    description:
      '一座被時間遺忘的小型聖堂，穹頂上的壁畫描繪著世界創生的場景。' +
      '聖堂中央的永恆之火仍在燃燒，散發出溫暖而安詳的光芒。' +
      '這裡是天界最後的寧靜之地，據說在此祈禱可以恢復所有傷勢。聖堂長椅上覆著薄薄星塵，幾件破裂羽甲整齊擺放，像守衛臨走前仍保持儀式。永恆之火的外焰呈金色，內焰卻帶著微弱黑影，暗示深淵污染已經觸碰到最神聖的地方。玩家可在此獲得喘息，也可能面對曾守護聖所的墮天使試煉。聖火後方的暗門通往聖物庫，裡面保存著淨化污染與修復封印所需的關鍵材料。',
    exits: [
      { direction: 'east', targetRoomId: 'angel_garden', description: '回到天使花園' },
      { direction: 'north', targetRoomId: 'celestial_reliquary', description: '聖火後方藏著聖物庫' },
      { direction: 'south', targetRoomId: 'celestial_broken_colonnade', description: '側門回到破碎柱廊' },
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
    image: 'god_chamber.png',
    imagePrompt: '神之間 in celestial_ruins, perfect circular chamber of pure light, sleeping war god in golden armor floating at center, final trial, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text',
    description:
      '天界遺跡的最深處，一個完美的圓形空間。牆壁、地面和天頂都由純粹的光構成。' +
      '空間正中央懸浮著一位身著金色戰甲的神祇——戰神，沉睡中的他仍散發著毀天滅地的威壓。' +
      '當冒險者踏入這片領域的瞬間，戰神的雙眼猛然睜開，億萬年的寂靜在此刻被打破。' +
      '這是這個世界最強大的存在，也是最終的挑戰。圓形空間外圍漂浮著十二面戰旗，每一面都記錄一場曾由戰神親自終結的遠古戰爭。旗影在地面形成不同武器圖案，預告戰神甦醒後可能切換的攻擊姿態。西側星軌門與東側封印裂縫同時發光，表示這場戰鬥不只決定勝負，也會決定天界遺跡是否繼續封鎖深淵。',
    exits: [
      { direction: 'south', targetRoomId: 'celestial_throne_room', description: '退回天界王座' },
      { direction: 'east', targetRoomId: 'celestial_final_seal', description: '神光裂縫通向最終封印' },
      { direction: 'west', targetRoomId: 'celestial_astral_observatory', description: '星軌門連到天象觀測所' },
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

  celestial_starfall_plaza: {
    id: 'celestial_starfall_plaza',
    name: '墜星廣場',
    zone: 'celestial_ruins' as RoomDef['zone'],
    image: 'celestial_starfall_plaza.png',
    imagePrompt: '墜星廣場 in celestial_ruins, white gold plaza covered in fallen star shards, broken angel statues, abyss scar at gate edge, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text',
    description:
      '天界之門西側是一片廣場，地面由白金石板鋪成，卻被無數墜星碎片砸出細密裂坑。破碎天使像倒在四周，石翼仍反射著微弱星光。廣場中央有一圈尚未熄滅的防禦法陣，陣線一端連著天界之門，另一端指向破碎柱廊。這裡曾是抵禦深淵入侵的第一道防線，現在則成為玩家辨認天界戰況與收集星辰材料的入口支線。若修復法陣缺口，廣場會短暫投影出深淵攻城時的路線，揭露哪些守衛在戰前失蹤。廣場外緣還有幾座半毀傳送台，台面符號與凡間多處遺跡相同，暗示天界曾直接監看世界各地。',
    exits: [
      { direction: 'east', targetRoomId: 'celestial_gate', description: '回到天界之門' },
      { direction: 'north', targetRoomId: 'celestial_broken_colonnade', description: '裂痕道路通向破碎柱廊' },
    ],
    monsters: [
      { monsterId: 'fallen_angel', maxCount: 2, respawnSeconds: 75 },
      { monsterId: 'celestial_guardian', maxCount: 1, respawnSeconds: 90 },
    ],
    mapSymbol: '[墜]',
    mapX: 2,
    mapY: 35,
    guardianHints: {
      creature: '墮天使會利用倒塌雕像遮蔽施法，先移動到廣場中央較易觀察。',
      treasure: '墜星碎片可作為神聖與星光屬性的高階材料。',
      spirit: '廣場上的防禦法陣證明天界曾主動抵抗深淵，而非單純衰敗。',
    },
  },

  celestial_broken_colonnade: {
    id: 'celestial_broken_colonnade',
    name: '破碎柱廊',
    zone: 'celestial_ruins' as RoomDef['zone'],
    image: 'celestial_broken_colonnade.png',
    imagePrompt: '破碎柱廊 in celestial_ruins, collapsed colonnade of glowing white pillars, star dust, torn banners and guardian patrols, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text',
    description:
      '星光走廊西側的柱廊曾由七十二根光柱撐起，如今只剩半數仍在斷續發亮。每根殘柱都刻著一段諸神戰爭紀錄，有些字句被深淵黑痕抹去，只留下焦黑空白。柱廊南端連向墜星廣場，北端通往永恆聖所，是玩家在主線外觀察天界歷史的安全但不平靜路線。巡邏守衛會在光柱亮起時重整隊形。斷柱之間還掛著沒有風也會飄動的戰旗，旗面上逐漸浮現玩家經過的足跡，讓守軍能追蹤入侵者動向。柱廊地面偶爾會投出完整神殿的昔日幻象，玩家可藉此找到隱藏聖所側門。殘柱陰影裡還藏著被撕下的審判符。',
    exits: [
      { direction: 'east', targetRoomId: 'starlight_path', description: '回到星光走廊' },
      { direction: 'south', targetRoomId: 'celestial_starfall_plaza', description: '沿斷柱回到墜星廣場' },
      { direction: 'north', targetRoomId: 'eternal_sanctuary', description: '聖所鐘聲從北方傳來' },
    ],
    monsters: [
      { monsterId: 'celestial_guardian', maxCount: 2, respawnSeconds: 80 },
      { monsterId: 'fallen_angel', maxCount: 1, respawnSeconds: 75 },
    ],
    mapSymbol: '[柱]',
    mapX: 2,
    mapY: 36,
    guardianHints: {
      creature: '守衛會在光柱間傳送短距離，等光柱轉暗再交戰較穩。',
      treasure: '殘柱上的星塵可收集為修復聖物的材料。',
      spirit: '柱廊記錄的戰爭史與深淵裂隙的入侵時間互相呼應。',
    },
  },

  celestial_scriptorium: {
    id: 'celestial_scriptorium',
    name: '聖文抄寫室',
    zone: 'celestial_ruins' as RoomDef['zone'],
    image: 'celestial_scriptorium.png',
    imagePrompt: '聖文抄寫室 in celestial_ruins, quiet scriptorium with floating quills of light, unfinished holy scrolls, automaton scribes, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text',
    description:
      '神之圖書館北側是一排安靜抄寫桌，羽筆由光構成，仍在無人指引下把失傳神語寫到透明卷軸上。桌面上壓著未完成的末日預言，墨跡在金色與黑色之間反覆變化，似乎無法決定世界結局。幾台神造抄寫機械在桌間巡行，會修正任何被污染的文字，也會攻擊試圖偷走卷軸的人。這裡可承接知識、解謎與任務目標。',
    exits: [
      { direction: 'south', targetRoomId: 'divine_library', description: '書架階梯回到神之圖書館' },
      { direction: 'east', targetRoomId: 'celestial_lumen_archive', description: '抄寫卷軸送往流明檔案庫' },
      { direction: 'north', targetRoomId: 'judgment_hall', description: '成文律法通向審判大廳' },
    ],
    monsters: [
      { monsterId: 'divine_construct', maxCount: 2, respawnSeconds: 600 },
      { monsterId: 'seraph', maxCount: 1, respawnSeconds: 85 },
    ],
    mapSymbol: '[抄]',
    mapX: 5,
    mapY: 35,
    guardianHints: {
      creature: '抄寫機械會修復同伴護盾，先打斷羽筆光束。',
      treasure: '未完成預言卷軸可作為後續主線線索。',
      spirit: '抄寫室仍在書寫末日，表示天界命運尚未固定。',
    },
  },

  celestial_lumen_archive: {
    id: 'celestial_lumen_archive',
    name: '流明檔案庫',
    zone: 'celestial_ruins' as RoomDef['zone'],
    image: 'celestial_lumen_archive.png',
    imagePrompt: '流明檔案庫 in celestial_ruins, archive of suspended light pages and golden memory crystals, divine constructs guarding knowledge, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text',
    description:
      '流明檔案庫不是普通房間，而是一座由懸浮光頁組成的立體迷宮。每片光頁都記錄一段神祇、天使或凡人英雄的記憶，靠近時會把畫面直接投進腦海。檔案庫中央封著數枚金色記憶晶，記載戰神沉睡前最後下達的命令。深淵污染已在部分光頁邊緣形成黑斑，若不整理檔案，審判大廳的法則會繼續失準。檔案庫東側的光頁偶爾會翻到空白頁，等待玩家把本次試煉的見聞寫入天界記錄。若錯誤觸碰污染光頁，整座檔案庫會把玩家過去的任務選擇重播成審判證據。中央記憶晶也會短暫鎖住出口。',
    exits: [
      { direction: 'west', targetRoomId: 'divine_library', description: '光頁階梯回到神之圖書館' },
      { direction: 'north', targetRoomId: 'judgment_hall', description: '律法檔案指向審判大廳' },
      { direction: 'south', targetRoomId: 'celestial_scriptorium', description: '檔案回流到聖文抄寫室' },
    ],
    monsters: [
      { monsterId: 'divine_construct', maxCount: 2, respawnSeconds: 600 },
      { monsterId: 'celestial_guardian', maxCount: 1, respawnSeconds: 80 },
    ],
    mapSymbol: '[檔]',
    mapX: 5,
    mapY: 36,
    guardianHints: {
      creature: '檔案守衛會依照光頁記錄預判動作，改變攻擊節奏可打亂它。',
      treasure: '金色記憶晶可能保存戰神弱點或天界密令。',
      spirit: '檔案庫若被污染，天界的審判與歷史都會被改寫。',
    },
  },

  celestial_fountain_of_oaths: {
    id: 'celestial_fountain_of_oaths',
    name: '誓約之泉',
    zone: 'celestial_ruins' as RoomDef['zone'],
    image: 'celestial_fountain_of_oaths.png',
    imagePrompt: '誓約之泉 in celestial_ruins, sacred fountain of glowing oath water beside angel garden, floating vow ribbons, white flowers, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text',
    description:
      '天使花園東側的泉池更小也更莊嚴，水面漂浮著由光織成的誓約緞帶，每一條都寫著曾守護天界者的名字。泉水會映出來者最想守護的事物，也會照見未履行的承諾。許多緞帶已被黑色細線纏住，代表有人在深淵入侵時背棄誓言。這裡可作為治療、任務與事件點，但任何虛假的誓言都會喚醒守泉熾天使。',
    exits: [
      { direction: 'west', targetRoomId: 'angel_garden', description: '泉水回流到天使花園' },
      { direction: 'north', targetRoomId: 'celestial_seraph_roost', description: '泉畔白階通往熾天使棲台' },
      { direction: 'east', targetRoomId: 'celestial_sundial_court', description: '水光指向日晷庭' },
    ],
    monsters: [
      { monsterId: 'seraph', maxCount: 2, respawnSeconds: 85 },
      { monsterId: 'celestial_guardian', maxCount: 1, respawnSeconds: 80 },
    ],
    mapSymbol: '[誓]',
    mapX: 4,
    mapY: 37,
    guardianHints: {
      creature: '熾天使會保護誓約緞帶，避免在泉邊使用範圍攻擊。',
      treasure: '未污染的誓約緞帶可作為淨化任務道具。',
      spirit: '泉水反映承諾，說明天界力量建立在誓約而非單純光明上。',
    },
  },

  celestial_seraph_roost: {
    id: 'celestial_seraph_roost',
    name: '熾天使棲台',
    zone: 'celestial_ruins' as RoomDef['zone'],
    image: 'celestial_seraph_roost.png',
    imagePrompt: '熾天使棲台 in celestial_ruins, high white roost with layered golden wings, radiant perches, clouds and seraph sentries, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text',
    description:
      '誓約之泉北方的高台由層層白石羽翼托起，熾天使會在此休整、療傷與監視王座殿。棲台四周漂浮著金色羽片，每一片都能記錄一次守護行動。部分羽片變得灰暗，顯示天使內部也有人在深淵戰爭中墮落。這裡視野極好，能看見天使花園、王座側門與黎明武庫的光線交會，因此守軍反應極快。高台邊緣有幾處空巢，裡面只剩折斷羽軸與黑色灰燼，提示墮落並非個別事件。若收集灰暗羽片並帶回誓約之泉，或許能追查第一位墮落者的行蹤。棲台鐘聲也會召回巡邏中的熾天使，讓戰鬥逐漸升級。',
    exits: [
      { direction: 'south', targetRoomId: 'celestial_fountain_of_oaths', description: '白階下到誓約之泉' },
      { direction: 'west', targetRoomId: 'celestial_throne_room', description: '羽橋連向天界王座側廊' },
      { direction: 'east', targetRoomId: 'celestial_sundial_court', description: '晨光落向日晷庭' },
    ],
    monsters: [
      { monsterId: 'seraph', maxCount: 3, respawnSeconds: 85 },
      { monsterId: 'fallen_angel', maxCount: 1, respawnSeconds: 80 },
    ],
    mapSymbol: '[熾]',
    mapX: 4,
    mapY: 38,
    guardianHints: {
      creature: '熾天使會在高台間換位治療，利用柱影可切斷視線。',
      treasure: '灰暗羽片可能記錄墮天使的名字與背叛原因。',
      spirit: '棲台呈現天使守護與墮落並存的狀態。',
    },
  },

  celestial_penitent_steps: {
    id: 'celestial_penitent_steps',
    name: '懺悔階',
    zone: 'celestial_ruins' as RoomDef['zone'],
    image: 'celestial_penitent_steps.png',
    imagePrompt: '懺悔階 in celestial_ruins, long stair of white stone behind judgment hall, kneeling angel statues, golden dust and dark cracks, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text',
    description:
      '審判大廳北方有一段長階，每一階都刻著不同的罪名與救贖誓句。階梯兩側跪著無臉天使像，掌心托著空白石牌，等待來者寫下自己的懺悔。越往上走，天界王座的威壓越明顯，越往下看，深淵裂隙留下的黑色脈絡也越清楚。這裡是審判線與王座線之間的過渡房，適合放置道德選擇、任務交付或精英伏擊。每當有人說謊，石牌會自行裂開並召出執行裁決的神造機械。長階最高處還有一塊沒有刻字的石板，似乎等待玩家親手定義新的天界法則。階梯下方則回響著被赦免者的腳步聲與鎖鏈聲。',
    exits: [
      { direction: 'south', targetRoomId: 'judgment_hall', description: '長階回到審判大廳' },
      { direction: 'north', targetRoomId: 'celestial_reliquary', description: '階梯盡頭是聖物庫' },
      { direction: 'east', targetRoomId: 'celestial_throne_room', description: '側門通向天界王座' },
    ],
    monsters: [
      { monsterId: 'fallen_angel', maxCount: 2, respawnSeconds: 80 },
      { monsterId: 'divine_construct', maxCount: 1, respawnSeconds: 600 },
    ],
    mapSymbol: '[懺]',
    mapX: 2,
    mapY: 38,
    guardianHints: {
      creature: '墮天使會嘲弄懺悔石牌，當石牌轉黑時牠們攻勢最強。',
      treasure: '空白石牌可記錄玩家選擇，成為後續審判任務道具。',
      spirit: '懺悔階表示天界審判並非只有懲罰，也保留救贖路徑。',
    },
  },

  celestial_reliquary: {
    id: 'celestial_reliquary',
    name: '天界聖物庫',
    zone: 'celestial_ruins' as RoomDef['zone'],
    image: 'celestial_reliquary.png',
    imagePrompt: '天界聖物庫 in celestial_ruins, reliquary vault of holy relics, glass cases, broken halos, eternal flame reflections, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text',
    description:
      '永恆聖所北方的聖物庫被多層金白結界保護，玻璃龕中放著破碎光環、聖釘、祈禱鐘與曾屬於諸神侍者的羽甲。部分龕位已經空了，只留下被強行撬開的痕跡，說明深淵入侵時有人偷走或轉移了關鍵聖物。聖物庫中央有一座小型祭台，能把永恆之火的光引向懺悔階與王座殿，是支線任務與裝備淨化的核心地點。若把受污染裝備放上祭台，結界會顯示需要補齊哪些失落聖物。玻璃龕背面還刻著聖物最後保管者的名字，可延伸成追查遺失聖物的任務。庫房深處有一道只對淨化光芒開啟的門。',
    exits: [
      { direction: 'south', targetRoomId: 'eternal_sanctuary', description: '聖火通道回到永恆聖所' },
      { direction: 'west', targetRoomId: 'celestial_penitent_steps', description: '結界門通向懺悔階' },
      { direction: 'east', targetRoomId: 'celestial_armory_of_dawn', description: '聖物運送門連到黎明武庫' },
    ],
    monsters: [
      { monsterId: 'divine_construct', maxCount: 2, respawnSeconds: 600 },
      { monsterId: 'fallen_angel', maxCount: 1, respawnSeconds: 80 },
    ],
    mapSymbol: '[物]',
    mapX: 2,
    mapY: 39,
    guardianHints: {
      creature: '聖物庫機械會啟動玻璃龕反射光束，站在空龕旁可避開連線。',
      treasure: '破碎光環與聖釘可用於淨化或重鑄神器。',
      spirit: '空龕暗示天界內部可能在戰前已經失序。',
    },
  },

  celestial_sundial_court: {
    id: 'celestial_sundial_court',
    name: '日晷庭',
    zone: 'celestial_ruins' as RoomDef['zone'],
    image: 'celestial_sundial_court.png',
    imagePrompt: '日晷庭 in celestial_ruins, open courtyard with giant golden sundial, moving beams of holy light, white marble and star shadows, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text',
    description:
      '誓約之泉東側是一座開闊日晷庭，巨大的金色指針懸浮在半空，投下的影子不是時間，而是天界曾經的戰役順序。白石地面被分成十二個光區，每個光區會在不同時刻啟動守護法陣。深淵污染讓其中兩個光區變成黑影，導致巡邏路線出現危險空窗。這裡能作為事件點、定時戰鬥點，也能讓玩家理解天界防線如何運作。',
    exits: [
      { direction: 'west', targetRoomId: 'celestial_fountain_of_oaths', description: '水光小徑回到誓約之泉' },
      { direction: 'north', targetRoomId: 'celestial_armory_of_dawn', description: '晨光指向黎明武庫' },
      { direction: 'south', targetRoomId: 'celestial_lumen_archive', description: '影子階梯連向流明檔案庫' },
    ],
    monsters: [
      { monsterId: 'celestial_guardian', maxCount: 2, respawnSeconds: 80 },
      { monsterId: 'seraph', maxCount: 1, respawnSeconds: 85 },
    ],
    mapSymbol: '[晷]',
    mapX: 5,
    mapY: 37,
    guardianHints: {
      creature: '日晷光區會改變守衛抗性，觀察影子位置再選元素。',
      treasure: '金色指針脫落的細片可用於時間或光屬性裝備。',
      spirit: '日晷庭把戰役順序當作時間，顯示天界以使命衡量日夜。',
    },
  },

  celestial_armory_of_dawn: {
    id: 'celestial_armory_of_dawn',
    name: '黎明武庫',
    zone: 'celestial_ruins' as RoomDef['zone'],
    image: 'celestial_armory_of_dawn.png',
    imagePrompt: '黎明武庫 in celestial_ruins, divine armory of dawn spears, radiant shields, white gold racks and sleeping constructs, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text',
    description:
      '天界王座東側的武庫保存著黎明長槍、光盾與諸神戰車的殘件，所有兵器都被擺放在白金架上，像等待最後一次出征。武庫深處有幾台尚未啟動的神造兵器，胸口核心隨日晷庭光線一明一暗。部分武器架空缺，旁邊留下墮天使羽毛與深淵灼痕。這裡是精英戰鬥與裝備線核心，也能解釋戰神神槍的來源。武庫地面刻著武器借用誓約，若沒有完成審判或聖所任務，任何兵器都會化成灼熱光束反擊。最深處的空架標著戰神之槍，仍殘留足以壓迫整座房間的戰意。牆上還標示通往觀測所的軍用星軌。',
    exits: [
      { direction: 'west', targetRoomId: 'celestial_throne_room', description: '武庫門回到天界王座' },
      { direction: 'south', targetRoomId: 'celestial_sundial_court', description: '晨光坡道下到日晷庭' },
      { direction: 'north', targetRoomId: 'celestial_astral_observatory', description: '武庫後門通往天象觀測所' },
      { direction: 'east', targetRoomId: 'celestial_reliquary', description: '聖物運送門回到聖物庫' },
    ],
    monsters: [
      { monsterId: 'divine_construct', maxCount: 3, respawnSeconds: 600 },
      { monsterId: 'celestial_guardian', maxCount: 1, respawnSeconds: 80 },
    ],
    mapSymbol: '[武]',
    mapX: 5,
    mapY: 38,
    guardianHints: {
      creature: '神造兵器會依照武器架啟動，先破壞空缺架旁的黑痕。',
      treasure: '黎明長槍殘件可作為神器重鑄素材。',
      spirit: '武庫顯示戰神曾為最終戰役留下大量準備。',
    },
  },

  celestial_astral_observatory: {
    id: 'celestial_astral_observatory',
    name: '天象觀測所',
    zone: 'celestial_ruins' as RoomDef['zone'],
    image: 'celestial_astral_observatory.png',
    imagePrompt: '天象觀測所 in celestial_ruins, celestial observatory of golden astrolabes, star maps, open dome and divine constellations, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text',
    description:
      '神之間西側的星軌門通向天象觀測所，穹頂整片敞開，能看見不屬於凡間夜空的神聖星座。金色星盤層層旋轉，把深淵裂隙、龍谷墜星坑與天界王座的位置連成一條明亮弧線。觀測所內散落著戰神沉睡前的星圖批註，提到只有當凡人、龍族與天界試煉全部交會時，最終封印才會鬆動。觀測台下方還有一張被燒焦的星圖，標出深淵信標曾試圖對準的天界薄弱點。若調整星盤角度，玩家能短暫看見其他 zone 的危機投影與未來任務線。星盤核心也記錄著戰神甦醒的倒數，並標出封印失敗後的墜落軌道。',
    exits: [
      { direction: 'east', targetRoomId: 'god_chamber', description: '星軌門回到神之間' },
      { direction: 'south', targetRoomId: 'celestial_armory_of_dawn', description: '觀測台階回到黎明武庫' },
      { direction: 'north', targetRoomId: 'celestial_final_seal', description: '星圖終點指向最終封印' },
    ],
    monsters: [
      { monsterId: 'seraph', maxCount: 2, respawnSeconds: 85 },
      { monsterId: 'divine_construct', maxCount: 1, respawnSeconds: 600 },
    ],
    mapSymbol: '[象]',
    mapX: 2,
    mapY: 40,
    guardianHints: {
      creature: '觀測所熾天使會借星盤轉移位置，注意地面光弧。',
      treasure: '星圖批註能揭示最終封印開啟條件。',
      spirit: '觀測所把前面區域全部串成一條命運線。',
    },
  },

  celestial_final_seal: {
    id: 'celestial_final_seal',
    name: '最終封印',
    zone: 'celestial_ruins' as RoomDef['zone'],
    image: 'celestial_final_seal.png',
    imagePrompt: '最終封印 in celestial_ruins, final divine seal of radiant rings and black abyss cracks, war god light, floating relics, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text',
    description:
      '神之間東側的光裂縫後方懸著最終封印，數十道金白圓環互相咬合，把一枚黑色裂核鎖在中央。封印周圍漂浮著來自聖所、審判大廳、武庫與觀測所的象徵物，每件都代表解開或加固封印的一種條件。戰神的氣息從南方傳來，與裂核深處的深淵低鳴互相衝撞。這裡是天界遺跡的大型事件鉤子，可承接最終戰後的世界狀態選擇。圓環每轉動一次，凡間、龍谷與深淵的幻象便會輪流浮現，提醒玩家封印結果會影響所有區域。封印中心還有一個空白插槽，大小正好能放入戰神神槍或被淨化的聖物核心。',
    exits: [
      { direction: 'west', targetRoomId: 'god_chamber', description: '光裂縫回到神之間' },
      { direction: 'south', targetRoomId: 'celestial_astral_observatory', description: '星軌下行到天象觀測所' },
    ],
    monsters: [
      { monsterId: 'god_of_war', maxCount: 1, respawnSeconds: 1800 },
      { monsterId: 'divine_construct', maxCount: 2, respawnSeconds: 600 },
    ],
    mapSymbol: '[封]',
    mapX: 4,
    mapY: 40,
    guardianHints: {
      creature: '封印守衛會在圓環轉動時獲得護盾，等待裂核脈動後再攻擊。',
      treasure: '封印圓環碎屑可作為最高階神聖材料。',
      spirit: '最終封印不是單純關門，而是決定深淵、天界與凡間如何重新平衡。',
    },
  },

  // ─── Area 13: 老舊農場 (Lv 3-8) ─────────────────────────

  old_farmland_crossroads: {
    id: 'old_farmland_crossroads',
    name: '舊農路口',
    zone: 'old_farmland' as RoomDef['zone'],
    image: 'old_farmland_crossroads.png',
    imagePrompt: '舊農路口 in old_farmland, entrance traffic node with muddy cart road, leaning signpost, wheat stubble, village path and soft cloudy light, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text',
    description:
      '村外舊農路在此分成數條泥濘小徑，歪斜木牌上還能辨認出穀倉、農舍和舊井的方向。田壟長滿雜草，乾裂車轍裡積著昨夜雨水，遠處傳來田鼠啃咬木板的細碎聲。這裡是老舊農場的入口與安全錨點，玩家可以從路口判斷各支線位置，也能沿西側小路回到新手村外圍農田。',
    exits: [
      { direction: 'west', targetRoomId: 'village_farmland', description: '沿小路回到新手村外圍農田' },
      { direction: 'north', targetRoomId: 'old_farmland_overgrown_field', description: '北側田壟雜草叢生' },
      { direction: 'east', targetRoomId: 'old_farmland_rat_ditch', description: '東邊水溝傳來窸窣聲' },
      { direction: 'south', targetRoomId: 'old_farmland_cart_shortcut', description: '南側舊車道可繞過農田' },
    ],
    monsters: [
      { monsterId: 'field_rat', maxCount: 2, respawnSeconds: 25 },
    ],
    mapSymbol: '[路]',
    mapX: 0,
    mapY: 0,
    guardianHints: {
      creature: '田鼠會從車轍旁的小洞鑽出，先清理洞口可減少伏擊。',
      treasure: '路口木牌背面夾著一張被雨水泡軟的農場分區圖。',
      spirit: '這裡曾是農夫每日集合分工的地方，木牌上的刻痕記錄著幾十年的收成。',
    },
  },

  old_farmland_overgrown_field: {
    id: 'old_farmland_overgrown_field',
    name: '荒草麥田',
    zone: 'old_farmland' as RoomDef['zone'],
    image: 'old_farmland_overgrown_field.png',
    imagePrompt: '荒草麥田 in old_farmland, overgrown wheat rows, tall weeds, rat holes, broken irrigation stakes and grey morning light, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text',
    description:
      '舊麥田多年無人收割，麥稈和野草長到腰間，田埂幾乎被掩埋。風一吹過，草浪下方就會露出一排排田鼠洞，偶爾還有黑鴉停在斷裂灌溉樁上觀察。泥土仍保留肥力，玩家能在草叢中採集野菜或找回遺失農具，但每次翻動田壟都可能驚動藏在根部的鼠群。',
    exits: [
      { direction: 'south', targetRoomId: 'old_farmland_crossroads', description: '沿田埂回到舊農路口' },
      { direction: 'north', targetRoomId: 'old_farmland_scarecrow_watch', description: '田中央有一座破稻草人' },
      { direction: 'east', targetRoomId: 'old_farmland_collapsed_barn', description: '東方可見塌陷穀倉' },
    ],
    monsters: [
      { monsterId: 'field_rat', maxCount: 3, respawnSeconds: 25 },
      { monsterId: 'dark_crow', maxCount: 1, respawnSeconds: 35 },
    ],
    mapSymbol: '[麥]',
    mapX: 0,
    mapY: 1,
    guardianHints: {
      creature: '草浪異常晃動處通常藏著田鼠群。',
      treasure: '灌溉樁下壓著一把生鏽但仍可用的鐮刀。',
      spirit: '荒草沒有完全吞沒麥穗，似乎仍有微弱豐收祝福殘留。',
    },
  },

  old_farmland_rat_ditch: {
    id: 'old_farmland_rat_ditch',
    name: '鼠患水溝',
    zone: 'old_farmland' as RoomDef['zone'],
    image: 'old_farmland_rat_ditch.png',
    imagePrompt: '鼠患水溝 in old_farmland, muddy drainage ditch with rat tunnels, broken boards, weeds and dull water reflections, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text',
    description:
      '農路東側的排水溝已被泥沙堵住，淺水散發潮濕腐味，兩岸木板被啃出許多缺口。田鼠沿著水溝築巢，把掉落穀粒和破布拖進洞中，讓整段溝渠像一條會蠕動的灰色帶子。玩家可清理堵塞處恢復灌溉，也能在漂浮雜物裡找到小型材料，但必須留意水面下的史萊姆泡泡。',
    exits: [
      { direction: 'west', targetRoomId: 'old_farmland_crossroads', description: '跨過木板回到路口' },
      { direction: 'north', targetRoomId: 'old_farmland_collapsed_barn', description: '水溝延伸到塌穀倉旁' },
      { direction: 'east', targetRoomId: 'old_farmland_irrigation_channel', description: '堵塞水流通往灌溉渠' },
    ],
    monsters: [
      { monsterId: 'field_rat', maxCount: 3, respawnSeconds: 25 },
      { monsterId: 'green_slime', maxCount: 1, respawnSeconds: 30 },
    ],
    mapSymbol: '[溝]',
    mapX: 1,
    mapY: 0,
    guardianHints: {
      creature: '水面冒出綠色泡泡時通常代表史萊姆正在靠近。',
      treasure: '堵塞木板後方卡著一只被泥包住的小錢袋。',
      spirit: '排水溝若被清通，整片老農場會短暫恢復過去的水聲。',
    },
  },

  old_farmland_scarecrow_watch: {
    id: 'old_farmland_scarecrow_watch',
    name: '稻草人看守地',
    zone: 'old_farmland' as RoomDef['zone'],
    image: 'old_farmland_scarecrow_watch.png',
    imagePrompt: '稻草人看守地 in old_farmland, eerie scarecrow in tall wheat, crow feathers, patched coat, dusk field and hidden rat holes, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text',
    description:
      '荒草麥田中央立著一座破稻草人，草帽被雨水壓歪，外套袖口掛滿黑鴉羽毛。它原本只是農夫用來趕鳥的工具，如今卻總在沒人看見時換個角度，彷彿仍努力守住這片田。稻草人腳下有許多被啄開的田鼠洞和亮晶晶的小物，玩家若搜索可找到作物種子，也可能驚動盤旋的黑鴉群。',
    exits: [
      { direction: 'south', targetRoomId: 'old_farmland_overgrown_field', description: '穿過草浪回到荒草麥田' },
      { direction: 'east', targetRoomId: 'old_farmland_well', description: '破井在田邊投下陰影' },
      { direction: 'north', targetRoomId: 'old_farmland_harvest_circle', description: '北側作物排成奇怪圓形' },
    ],
    monsters: [
      { monsterId: 'dark_crow', maxCount: 3, respawnSeconds: 35 },
      { monsterId: 'field_rat', maxCount: 2, respawnSeconds: 25 },
    ],
    mapSymbol: '[草]',
    mapX: 0,
    mapY: 2,
    guardianHints: {
      creature: '黑鴉會在稻草人影子變長時集體俯衝。',
      treasure: '稻草人口袋裡藏著一包仍可發芽的老種子。',
      spirit: '稻草人像是在執行最後命令，守護已經荒廢的收成。',
    },
  },

  old_farmland_collapsed_barn: {
    id: 'old_farmland_collapsed_barn',
    name: '塌陷穀倉',
    zone: 'old_farmland' as RoomDef['zone'],
    image: 'old_farmland_collapsed_barn.png',
    imagePrompt: '塌陷穀倉 in old_farmland, collapsed wooden barn with hay piles, broken beams, rat nests and shafts of dusty light, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text',
    description:
      '穀倉屋頂塌了一半，陽光從破洞照進堆滿霉味的乾草與碎木樑。牆邊舊穀袋被咬破，穀粒灑了一地，引來田鼠、黑鴉和偶爾鑽入的野狼。穀倉後門通往南瓜地，東側有一條去舊井的小徑。玩家可在乾草堆裡找材料或任務物品，但不穩的木樑會在戰鬥中掉落。',
    exits: [
      { direction: 'west', targetRoomId: 'old_farmland_overgrown_field', description: '回到荒草麥田' },
      { direction: 'south', targetRoomId: 'old_farmland_rat_ditch', description: '水溝從倉牆旁流過' },
      { direction: 'east', targetRoomId: 'old_farmland_well', description: '舊井在穀倉東側' },
      { direction: 'north', targetRoomId: 'old_farmland_pumpkin_patch', description: '後門外是南瓜地' },
    ],
    monsters: [
      { monsterId: 'field_rat', maxCount: 3, respawnSeconds: 25 },
      { monsterId: 'wild_wolf', maxCount: 1, respawnSeconds: 45 },
    ],
    mapSymbol: '[倉]',
    mapX: 1,
    mapY: 1,
    guardianHints: {
      creature: '野狼會從倒塌後門進入，留意乾草堆後方的低吼。',
      treasure: '最高的乾草堆裡可能藏著農夫留下的鑰匙圈。',
      spirit: '穀倉仍保留豐收季的標記，只是歡慶聲已被鼠鳴取代。',
    },
  },

  old_farmland_well: {
    id: 'old_farmland_well',
    name: '舊井',
    zone: 'old_farmland' as RoomDef['zone'],
    image: 'old_farmland_well.png',
    imagePrompt: '舊井 in old_farmland, mossy stone well beside fields, cracked bucket, dark water, weeds and pale afternoon light, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text',
    description:
      '田邊舊井的石圈長滿青苔，吊桶繩索已經斷裂，只剩半截泡在黑水裡。靠近井口能聽見水滴聲和微弱回音，像有人在井底敲擊石壁。井旁泥地有野獸腳印和孩子刻下的舊塗鴉，顯示這裡曾是農場居民取水與閒聊的地方。如今井水被魔化作物根鬚污染，偶爾會冒出綠色史萊姆。',
    exits: [
      { direction: 'west', targetRoomId: 'old_farmland_collapsed_barn', description: '小徑回到塌陷穀倉' },
      { direction: 'south', targetRoomId: 'old_farmland_irrigation_channel', description: '井水流入灌溉渠' },
      { direction: 'north', targetRoomId: 'old_farmland_mildew_orchard', description: '北方是霉斑果園' },
    ],
    monsters: [
      { monsterId: 'green_slime', maxCount: 2, respawnSeconds: 30 },
      { monsterId: 'field_rat', maxCount: 1, respawnSeconds: 25 },
    ],
    mapSymbol: '[井]',
    mapX: 2,
    mapY: 1,
    guardianHints: {
      creature: '井水變綠時史萊姆會從井壁滑出。',
      treasure: '斷裂吊桶底部卡著一枚舊銅戒。',
      spirit: '井底敲擊聲可能來自被根鬚困住的舊水脈。',
    },
  },

  old_farmland_pumpkin_patch: {
    id: 'old_farmland_pumpkin_patch',
    name: '膨脹南瓜地',
    zone: 'old_farmland' as RoomDef['zone'],
    image: 'old_farmland_pumpkin_patch.png',
    imagePrompt: '膨脹南瓜地 in old_farmland, oversized pumpkins among vines, gnawed gourds, crow shadows and damp orange light, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text',
    description:
      '穀倉後方的南瓜地長得異常茂盛，藤蔓爬過田埂，幾顆南瓜大得像小木桶。表皮有被啃咬和抓裂的痕跡，裂縫裡散出甜膩又帶霉味的氣息，引來田鼠和黑鴉爭食。南瓜地可作為採集點，玩家能取得食材或任務種子，但過度膨脹的南瓜受到魔力刺激，碰撞時可能噴出刺激性孢子。',
    exits: [
      { direction: 'south', targetRoomId: 'old_farmland_collapsed_barn', description: '穿過後門回到穀倉' },
      { direction: 'east', targetRoomId: 'old_farmland_mildew_orchard', description: '藤蔓延向果園' },
      { direction: 'north', targetRoomId: 'old_farmland_root_cellar', description: '南瓜藤遮住地窖入口' },
    ],
    monsters: [
      { monsterId: 'field_rat', maxCount: 3, respawnSeconds: 25 },
      { monsterId: 'dark_crow', maxCount: 2, respawnSeconds: 35 },
    ],
    mapSymbol: '[瓜]',
    mapX: 1,
    mapY: 2,
    guardianHints: {
      creature: '膨脹南瓜破裂會驚動附近田鼠。',
      treasure: '最大南瓜底下壓著一只生鏽小盒。',
      spirit: '南瓜藤像在守住地下入口，似乎被舊農場意志引導。',
    },
  },

  old_farmland_mildew_orchard: {
    id: 'old_farmland_mildew_orchard',
    name: '霉斑果園',
    zone: 'old_farmland' as RoomDef['zone'],
    image: 'old_farmland_mildew_orchard.png',
    imagePrompt: '霉斑果園 in old_farmland, old orchard with spotted fruit, bent apple trees, crow nests and green mildew haze, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text',
    description:
      '舊果園的蘋果樹和梨樹彎得很低，枝頭掛滿帶霉斑的果實，地上腐果吸引黑鴉與田鼠。樹幹上有農夫刻下的採收記號，旁邊卻長出不自然的綠色菌膜，顯示井水污染已蔓延到根部。玩家可在果園採集尚未腐壞的果子或藥用樹皮，也能找到通往蜂箱行列與舊井的小路。',
    exits: [
      { direction: 'west', targetRoomId: 'old_farmland_pumpkin_patch', description: '藤蔓小路回到南瓜地' },
      { direction: 'south', targetRoomId: 'old_farmland_well', description: '樹根坡道下到舊井' },
      { direction: 'east', targetRoomId: 'old_farmland_beehive_rows', description: '果樹間傳來蜂群嗡鳴' },
    ],
    monsters: [
      { monsterId: 'dark_crow', maxCount: 3, respawnSeconds: 35 },
      { monsterId: 'field_rat', maxCount: 2, respawnSeconds: 25 },
    ],
    mapSymbol: '[果]',
    mapX: 2,
    mapY: 2,
    guardianHints: {
      creature: '黑鴉會從高枝俯衝，站在樹幹旁可限制角度。',
      treasure: '仍保持金色的果實可能帶有舊祝福。',
      spirit: '果園霉斑沿著水脈擴散，源頭可能不只舊井。',
    },
  },

  old_farmland_granary: {
    id: 'old_farmland_granary',
    name: '小糧倉',
    zone: 'old_farmland' as RoomDef['zone'],
    image: 'old_farmland_granary.png',
    imagePrompt: '小糧倉 in old_farmland, small grain storage hut with sacks, cracked floor, rat nests and dusty sunbeam, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text',
    description:
      '水渠旁的小糧倉比主穀倉完整，但木門已被啃出洞，地板下傳來密集奔跑聲。牆邊堆著幾袋發霉穀物，最上方的袋子被人重新縫過，像是有人最近翻找過。糧倉可作為任務與資源點，玩家能回收穀袋、種子或老農具；若踩到鬆動地板，藏在底下的田鼠群會立刻湧出。',
    exits: [
      { direction: 'west', targetRoomId: 'old_farmland_irrigation_channel', description: '木梯回到灌溉渠旁' },
      { direction: 'north', targetRoomId: 'old_farmland_abandoned_farmhouse', description: '糧倉後方通往農舍' },
      { direction: 'east', targetRoomId: 'old_farmland_toolshed', description: '東側有一間工具棚' },
    ],
    monsters: [
      { monsterId: 'field_rat', maxCount: 4, respawnSeconds: 25 },
    ],
    mapSymbol: '[糧]',
    mapX: 3,
    mapY: 0,
    guardianHints: {
      creature: '地板下聲音越密集，代表田鼠越接近出口。',
      treasure: '重新縫過的穀袋裡可能藏著老農夫的帳本。',
      spirit: '小糧倉記錄著歉收年份，最近一頁卻被撕掉了。',
    },
  },

  old_farmland_irrigation_channel: {
    id: 'old_farmland_irrigation_channel',
    name: '乾涸灌溉渠',
    zone: 'old_farmland' as RoomDef['zone'],
    image: 'old_farmland_irrigation_channel.png',
    imagePrompt: '乾涸灌溉渠 in old_farmland, cracked irrigation channel with weeds, slime puddles, wooden sluice and muddy banks, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text',
    description:
      '灌溉渠原本把井水送往整片農場，如今大半乾涸，只剩幾處綠色水窪和裂開木閘。渠底的泥土留下不同方向的拖痕，表示史萊姆和田鼠都把這裡當成安全通道。玩家若修好木閘，可以讓水流重新接到南瓜地與果園，也可能把躲在水窪中的史萊姆一起沖出來。',
    exits: [
      { direction: 'west', targetRoomId: 'old_farmland_rat_ditch', description: '水溝堵塞處在西邊' },
      { direction: 'north', targetRoomId: 'old_farmland_well', description: '水渠源頭連到舊井' },
      { direction: 'east', targetRoomId: 'old_farmland_granary', description: '水渠旁有小糧倉' },
    ],
    monsters: [
      { monsterId: 'green_slime', maxCount: 3, respawnSeconds: 30 },
      { monsterId: 'field_rat', maxCount: 1, respawnSeconds: 25 },
    ],
    mapSymbol: '[渠]',
    mapX: 2,
    mapY: 0,
    guardianHints: {
      creature: '史萊姆會藏在最綠的水窪中。',
      treasure: '木閘旁有被水沖出的銅製水位牌。',
      spirit: '水渠修復後，農場短暫像重新活過來一樣發出水聲。',
    },
  },

  old_farmland_abandoned_farmhouse: {
    id: 'old_farmland_abandoned_farmhouse',
    name: '荒廢農舍',
    zone: 'old_farmland' as RoomDef['zone'],
    image: 'old_farmland_abandoned_farmhouse.png',
    imagePrompt: '荒廢農舍 in old_farmland, abandoned farmhouse with sagging porch, dusty table, broken windows and creeping vines, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text',
    description:
      '農舍木門半開，門廊下的搖椅仍朝著田地，像主人只是暫時離開。屋內桌上留著發黃餐具和一盞熄滅油燈，牆上掛著褪色全家畫像。藤蔓從窗戶爬進來，根鬚壓住地板通往地下根窖的縫隙。這裡是農場任務線的核心房，玩家可調查日記、家書與失蹤農夫留下的線索。日記最後幾頁反覆提到收成圓陣、舊石界碑與一場失敗的豐收儀式，桌腳旁還有被田鼠咬碎的求救信。若玩家先修復水渠或清理根窖，屋內某些隱藏抽屜會變得更容易發現。火爐灰燼裡還壓著半枚焦黑護符，與稻草人胸口的布片圖案相同。',
    exits: [
      { direction: 'south', targetRoomId: 'old_farmland_granary', description: '後門回到小糧倉' },
      { direction: 'down', targetRoomId: 'old_farmland_root_cellar', description: '地板下有一座根窖' },
      { direction: 'east', targetRoomId: 'old_farmland_chicken_coop', description: '窗外就是破雞舍' },
    ],
    monsters: [
      { monsterId: 'field_rat', maxCount: 2, respawnSeconds: 25 },
      { monsterId: 'green_slime', maxCount: 1, respawnSeconds: 30 },
    ],
    mapSymbol: '[舍]',
    mapX: 3,
    mapY: 1,
    guardianHints: {
      creature: '地板下的抓聲通常是田鼠，但偶爾會有史萊姆黏在樑柱上。',
      treasure: '全家畫像後方藏著農舍鑰匙和半張地契。',
      spirit: '餐桌擺設保持離家當晚的樣子，暗示一家人走得非常匆忙。',
    },
  },

  old_farmland_beehive_rows: {
    id: 'old_farmland_beehive_rows',
    name: '蜂箱行列',
    zone: 'old_farmland' as RoomDef['zone'],
    image: 'old_farmland_beehive_rows.png',
    imagePrompt: '蜂箱行列 in old_farmland, rows of old beehives under fruit trees, buzzing insects, wax frames and golden haze, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text',
    description:
      '果園東側排列著十幾只舊蜂箱，木箱裂縫滲出深色蜂蠟，空氣裡充滿嗡鳴與甜味。部分蜂箱已空，部分卻住進過度活躍的野蜂，牠們被霉斑果香吸引，對任何接近者都非常敏感。玩家可採集蜂蠟、蜂蜜或修理蜂箱，也能找到通往防風樹列的窄徑。',
    exits: [
      { direction: 'west', targetRoomId: 'old_farmland_mildew_orchard', description: '果樹小路回到霉斑果園' },
      { direction: 'south', targetRoomId: 'old_farmland_chicken_coop', description: '蜂箱盡頭是破雞舍' },
      { direction: 'north', targetRoomId: 'old_farmland_windbreak_trees', description: '北側有一排防風樹' },
    ],
    monsters: [
      { monsterId: 'dark_crow', maxCount: 2, respawnSeconds: 35 },
      { monsterId: 'field_rat', maxCount: 1, respawnSeconds: 25 },
    ],
    mapSymbol: '[蜂]',
    mapX: 3,
    mapY: 2,
    guardianHints: {
      creature: '黑鴉會啄破蜂箱引發混亂，先趕走牠們較安全。',
      treasure: '最舊蜂箱底部有一塊凝固金色蜂蠟。',
      spirit: '蜂箱仍按古老節氣排列，可能與豐收儀式有關。',
    },
  },

  old_farmland_toolshed: {
    id: 'old_farmland_toolshed',
    name: '破工具棚',
    zone: 'old_farmland' as RoomDef['zone'],
    image: 'old_farmland_toolshed.png',
    imagePrompt: '破工具棚 in old_farmland, broken toolshed with rusty hoes, saws, seed boxes, cracked lantern and dust light, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text',
    description:
      '小糧倉東側的工具棚門板只剩一半，裡面掛著生鏽鋤頭、木柄鐮刀、破鋸和幾只標著年份的種子盒。棚頂漏雨，雨水把地面沖出小溝，卻也讓某些舊種子重新發芽。這裡適合放置修理、採集與任務道具，玩家若能找齊工具，也許能重開灌溉渠或修復農場捷徑。',
    exits: [
      { direction: 'west', targetRoomId: 'old_farmland_granary', description: '回到小糧倉' },
      { direction: 'north', targetRoomId: 'old_farmland_chicken_coop', description: '工具棚後方是雞舍' },
      { direction: 'east', targetRoomId: 'old_farmland_cart_shortcut', description: '舊車道從棚外繞過' },
    ],
    monsters: [
      { monsterId: 'field_rat', maxCount: 2, respawnSeconds: 25 },
      { monsterId: 'green_slime', maxCount: 1, respawnSeconds: 30 },
    ],
    mapSymbol: '[棚]',
    mapX: 4,
    mapY: 0,
    guardianHints: {
      creature: '工具箱裡有史萊姆黏液痕，打開前先聽聲音。',
      treasure: '年份最早的種子盒裡有保存良好的古老種子。',
      spirit: '工具棚記錄農夫日常，修好它等於修復農場的第一步。',
    },
  },

  old_farmland_moonlit_pasture: {
    id: 'old_farmland_moonlit_pasture',
    name: '月光牧草地',
    zone: 'old_farmland' as RoomDef['zone'],
    image: 'old_farmland_moonlit_pasture.png',
    imagePrompt: '月光牧草地 in old_farmland, quiet pasture with broken fence, silver grass, wolf tracks and pale moonlit clouds, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text',
    description:
      '農場東北角是一片被破柵欄圍住的牧草地，草葉在白天也泛著微弱銀光，像記住了長年照落的月色。地上有羊蹄印、野狼腳印和拖曳乾草的痕跡，顯示過去圈養的牲畜早已不在。這裡視野開闊，適合低等精英遭遇；玩家可沿牧草地通往防風樹列或收成儀式圈。',
    exits: [
      { direction: 'west', targetRoomId: 'old_farmland_windbreak_trees', description: '草坡回到防風樹列' },
      { direction: 'south', targetRoomId: 'old_farmland_chicken_coop', description: '破柵欄通往雞舍' },
      { direction: 'north', targetRoomId: 'old_farmland_stone_marker', description: '牧草盡頭有石界碑' },
    ],
    monsters: [
      { monsterId: 'wild_wolf', maxCount: 2, respawnSeconds: 45 },
      { monsterId: 'dark_crow', maxCount: 1, respawnSeconds: 35 },
    ],
    mapSymbol: '[牧]',
    mapX: 4,
    mapY: 3,
    guardianHints: {
      creature: '野狼會沿破柵欄繞側，背靠水槽可避免被包夾。',
      treasure: '銀色草叢裡有被遺落的牧鈴。',
      spirit: '牧草地像被固定在某個月夜，可能與北方石界碑有關。',
    },
  },

  old_farmland_root_cellar: {
    id: 'old_farmland_root_cellar',
    name: '地下根窖',
    zone: 'old_farmland' as RoomDef['zone'],
    image: 'old_farmland_root_cellar.png',
    imagePrompt: '地下根窖 in old_farmland, underground root cellar with shelves, turnips, creeping roots, damp lantern light and slime puddles, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text',
    description:
      '農舍地板下的根窖陰冷潮濕，木架上擺著乾癟蘿蔔、馬鈴薯和幾罐封蠟食物。根鬚從牆縫鑽入，把架子纏成歪斜牢籠，地面水窪裡漂著綠色黏液。根窖深處有通往南瓜地的低矮土洞，也藏著農夫一家離開前留下的密封箱。這裡兼具探索、資源與小型危險事件。',
    exits: [
      { direction: 'up', targetRoomId: 'old_farmland_abandoned_farmhouse', description: '木梯回到荒廢農舍' },
      { direction: 'south', targetRoomId: 'old_farmland_pumpkin_patch', description: '低矮土洞通往南瓜地' },
    ],
    monsters: [
      { monsterId: 'green_slime', maxCount: 2, respawnSeconds: 30 },
      { monsterId: 'field_rat', maxCount: 2, respawnSeconds: 25 },
    ],
    mapSymbol: '[窖]',
    mapX: 1,
    mapY: 3,
    guardianHints: {
      creature: '水窪沒有倒影時通常藏著史萊姆。',
      treasure: '密封箱裡可能保存農夫一家最後的求救信。',
      spirit: '根鬚向著收成儀式圈生長，像在吸取那裡的力量。',
    },
  },

  old_farmland_chicken_coop: {
    id: 'old_farmland_chicken_coop',
    name: '破雞舍',
    zone: 'old_farmland' as RoomDef['zone'],
    image: 'old_farmland_chicken_coop.png',
    imagePrompt: '破雞舍 in old_farmland, ruined chicken coop with straw nests, broken wire, feathers, rats and cloudy farmyard light, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text',
    description:
      '農舍東側的雞舍早已沒有家禽，只剩破網、乾草窩和滿地羽毛。幾個巢箱裡堆著田鼠偷來的穀粒，屋樑上則有黑鴉築巢。雞舍連接工具棚、蜂箱行列和牧草地，是農場東側動線的交會點。玩家可搜索巢箱取得小材料，但要注意腳下破網會絆住移動。',
    exits: [
      { direction: 'west', targetRoomId: 'old_farmland_abandoned_farmhouse', description: '窗邊小路回到農舍' },
      { direction: 'south', targetRoomId: 'old_farmland_toolshed', description: '破網通往工具棚' },
      { direction: 'north', targetRoomId: 'old_farmland_beehive_rows', description: '蜂箱行列在北側' },
      { direction: 'east', targetRoomId: 'old_farmland_moonlit_pasture', description: '破柵欄後是牧草地' },
    ],
    monsters: [
      { monsterId: 'field_rat', maxCount: 3, respawnSeconds: 25 },
      { monsterId: 'dark_crow', maxCount: 2, respawnSeconds: 35 },
    ],
    mapSymbol: '[雞]',
    mapX: 4,
    mapY: 2,
    guardianHints: {
      creature: '黑鴉會從屋樑投下碎木，先清理高處較安全。',
      treasure: '最深巢箱裡藏著一枚被羽毛包住的舊徽章。',
      spirit: '雞舍仍留有每天清晨開門的刮痕，顯示農場曾非常規律。',
    },
  },

  old_farmland_windbreak_trees: {
    id: 'old_farmland_windbreak_trees',
    name: '防風樹列',
    zone: 'old_farmland' as RoomDef['zone'],
    image: 'old_farmland_windbreak_trees.png',
    imagePrompt: '防風樹列 in old_farmland, row of old windbreak trees, tangled roots, crow nests, fence shadows and green field haze, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text',
    description:
      '農場北側種著一排老防風樹，樹幹被歲月吹得向同一方向傾斜，根部盤住石界碑與蜂箱小路。鳥巢、乾草和舊繩子掛在枝間，黑鴉會利用樹影遮蔽行蹤。這裡能阻擋平原強風，也把農場和更北方荒野分隔開來。玩家可調查根部裂縫，找到石界碑與牧草地之間的隱藏路線。',
    exits: [
      { direction: 'south', targetRoomId: 'old_farmland_beehive_rows', description: '樹根小路回到蜂箱行列' },
      { direction: 'east', targetRoomId: 'old_farmland_moonlit_pasture', description: '樹影外是月光牧草地' },
      { direction: 'north', targetRoomId: 'old_farmland_stone_marker', description: '樹根纏住一座石界碑' },
    ],
    monsters: [
      { monsterId: 'dark_crow', maxCount: 3, respawnSeconds: 35 },
      { monsterId: 'wild_wolf', maxCount: 1, respawnSeconds: 45 },
    ],
    mapSymbol: '[樹]',
    mapX: 3,
    mapY: 3,
    guardianHints: {
      creature: '黑鴉會在樹影最密處伏擊。',
      treasure: '樹根下埋著一串生鏽風鈴。',
      spirit: '防風樹列像一堵活牆，守住農場最後邊界。',
    },
  },

  old_farmland_stone_marker: {
    id: 'old_farmland_stone_marker',
    name: '舊石界碑',
    zone: 'old_farmland' as RoomDef['zone'],
    image: 'old_farmland_stone_marker.png',
    imagePrompt: '舊石界碑 in old_farmland, ancient boundary stone wrapped in roots, faded harvest runes, pasture wind and crow shadows, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text',
    description:
      '防風樹列北端立著一座舊石界碑，碑面刻著農場邊界、灌溉權和豐收祝禱。字跡大多被苔蘚覆蓋，但仍能看出幾個近期被重新描深的符號。界碑周圍的牧草呈環形倒伏，像有什麼在夜裡繞著它巡行。這裡是探索點與事件點，可揭示農場荒廢並非單純天災，而與收成儀式有關。',
    exits: [
      { direction: 'south', targetRoomId: 'old_farmland_windbreak_trees', description: '樹根小路回到防風樹列' },
      { direction: 'east', targetRoomId: 'old_farmland_moonlit_pasture', description: '界碑旁草坡通向牧草地' },
      { direction: 'north', targetRoomId: 'old_farmland_harvest_circle', description: '倒伏草痕指向收成圓陣' },
    ],
    monsters: [
      { monsterId: 'wild_wolf', maxCount: 2, respawnSeconds: 45 },
      { monsterId: 'dark_crow', maxCount: 1, respawnSeconds: 35 },
    ],
    mapSymbol: '[碑]',
    mapX: 3,
    mapY: 4,
    guardianHints: {
      creature: '野狼會沿倒伏草圈奔跑，預判牠們會回到界碑旁。',
      treasure: '苔蘚下刻著一段舊農場地契密語。',
      spirit: '界碑曾用來界定土地，如今像在界定某種封印範圍。',
    },
  },

  old_farmland_harvest_circle: {
    id: 'old_farmland_harvest_circle',
    name: '收成圓陣',
    zone: 'old_farmland' as RoomDef['zone'],
    image: 'old_farmland_harvest_circle.png',
    imagePrompt: '收成圓陣 in old_farmland, eerie crop circle of wheat and pumpkins, old harvest runes, scarecrow shadows and moonlit soil, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text',
    description:
      '農場最北側的作物並非自然生長，而是被排列成一個巨大的收成圓陣。麥穗、南瓜藤、果枝和草繩交錯成古老符號，中心插著一把生鏽鐮刀。圓陣周圍安靜得不自然，連黑鴉都只敢停在邊緣。這裡是老舊農場的大型事件鉤子，可能與豐收祝福失控、農夫失蹤和魔化作物來源有關。玩家若在此完成調查，能串起舊井、根窖、界碑與稻草人的線索。',
    exits: [
      { direction: 'south', targetRoomId: 'old_farmland_scarecrow_watch', description: '草影回到稻草人看守地' },
      { direction: 'east', targetRoomId: 'old_farmland_stone_marker', description: '倒伏草痕回到石界碑' },
    ],
    monsters: [
      { monsterId: 'wild_wolf', maxCount: 2, respawnSeconds: 45 },
      { monsterId: 'dark_crow', maxCount: 2, respawnSeconds: 35 },
      { monsterId: 'field_rat', maxCount: 2, respawnSeconds: 25 },
    ],
    mapSymbol: '[陣]',
    mapX: 1,
    mapY: 4,
    guardianHints: {
      creature: '圓陣中心的鐮刀反光時，附近怪物會一起被吸引過來。',
      treasure: '生鏽鐮刀可能是啟動或關閉豐收祝福的關鍵道具。',
      spirit: '收成圓陣像一場沒有完成的儀式，等待有人決定祝福要延續還是停止。',
    },
  },

  old_farmland_cart_shortcut: {
    id: 'old_farmland_cart_shortcut',
    name: '舊車道捷徑',
    zone: 'old_farmland' as RoomDef['zone'],
    image: 'old_farmland_cart_shortcut.png',
    imagePrompt: '舊車道捷徑 in old_farmland, shortcut cart track with broken wagon, muddy ruts, low fences and village road light, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text',
    description:
      '路口南側的舊車道繞過大部分田地，兩側低矮籬笆倒了一半，泥地上還留著深深車輪印。斷掉的木車橫在路中央，車斗裡堆著空麻袋和幾只被啃破的木箱。這裡是交通與捷徑節點，玩家清理木車後可快速往返路口、工具棚和村外小路，也能作為低等玩家撤退時的安全路線。',
    exits: [
      { direction: 'north', targetRoomId: 'old_farmland_crossroads', description: '車道回到舊農路口' },
      { direction: 'east', targetRoomId: 'old_farmland_toolshed', description: '車輪印通向破工具棚' },
      { direction: 'west', targetRoomId: 'village_outskirts', description: '舊車道繞回村外小路' },
    ],
    monsters: [
      { monsterId: 'field_rat', maxCount: 2, respawnSeconds: 25 },
      { monsterId: 'green_slime', maxCount: 1, respawnSeconds: 30 },
    ],
    mapSymbol: '[捷]',
    mapX: 0,
    mapY: -1,
    guardianHints: {
      creature: '木車底下常有田鼠躲藏，推車前先敲擊木板。',
      treasure: '破木箱裡可能還有未送出的作物訂單。',
      spirit: '捷徑保留農場與村莊的連結，清理它能讓老路重新被人使用。',
    },
  },

  // ─── Area 14: 低語溪谷 (Lv 5-12) ────────────────────────

  whispering_valley_entrance: {
    id: 'whispering_valley_entrance',
    name: '溪谷入口',
    zone: 'whispering_valley' as RoomDef['zone'],
    image: 'whispering_valley_entrance.png',
    imagePrompt: '溪谷入口 in whispering_valley, narrow valley entrance with clear creek, leaning trail marker, reeds and cool morning mist, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text',
    description:
      '老舊農場北方的小徑在兩面岩壁間收窄，清澈溪水沿石縫流出，風穿過谷口時會發出像低聲說話的聲音。入口木牌標著釣點、草藥坡與瀑布方向，是低語溪谷的交通節點與安全錨點。玩家可在此確認退路，也能沿南側小徑回到老農場界碑。',
    exits: [
      { direction: 'south', targetRoomId: 'old_farmland_stone_marker', description: '小徑回到老農場石界碑' },
      { direction: 'north', targetRoomId: 'whispering_valley_reed_bank', description: '溪水流向蘆葦岸' },
      { direction: 'east', targetRoomId: 'whispering_valley_mossy_footbridge', description: '苔石小橋跨過溪水' },
      { direction: 'west', targetRoomId: 'whispering_valley_ranger_post', description: '西側木棚像巡林哨站' },
    ],
    monsters: [
      { monsterId: 'green_slime', maxCount: 2, respawnSeconds: 30 },
      { monsterId: 'field_rat', maxCount: 1, respawnSeconds: 25 },
    ],
    mapSymbol: '[入]',
    mapX: 0,
    mapY: 0,
    guardianHints: {
      creature: '溪水邊的綠色泡泡常是史萊姆出沒的訊號。',
      treasure: '入口木牌背面刻著溪谷老巡林人的記號。',
      spirit: '谷口的低語聲像是在警告外來者不要驚擾溪水。',
    },
  },

  whispering_valley_reed_bank: {
    id: 'whispering_valley_reed_bank',
    name: '蘆葦岸',
    zone: 'whispering_valley' as RoomDef['zone'],
    image: 'whispering_valley_reed_bank.png',
    imagePrompt: '蘆葦岸 in whispering_valley, creek bank of tall reeds, dragonflies, muddy animal tracks and filtered green light, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text',
    description:
      '溪谷入口北側長滿及肩蘆葦，細長葉片在風裡彼此摩擦，像無數人在輕聲交談。泥岸上留著田鼠、野狼和巡林靴印，溪面則偶爾泛起史萊姆經過的圓形波紋。玩家可採集蘆葦、尋找魚餌或沿岸追蹤腳印，但視線會被草葉遮住。',
    exits: [
      { direction: 'south', targetRoomId: 'whispering_valley_entrance', description: '沿岸回到溪谷入口' },
      { direction: 'north', targetRoomId: 'whispering_valley_clear_stream', description: '溪水變得更清澈' },
      { direction: 'east', targetRoomId: 'whispering_valley_fishing_bend', description: '水流轉向釣魚灣' },
    ],
    monsters: [
      { monsterId: 'field_rat', maxCount: 2, respawnSeconds: 25 },
      { monsterId: 'green_slime', maxCount: 2, respawnSeconds: 30 },
    ],
    mapSymbol: '[葦]',
    mapX: 0,
    mapY: 1,
    guardianHints: {
      creature: '蘆葦突然分開時通常有田鼠或史萊姆穿過。',
      treasure: '最密的蘆葦叢裡藏著一枚舊魚鉤。',
      spirit: '蘆葦會把谷風放大成低語，是溪谷名字的來源之一。',
    },
  },

  whispering_valley_clear_stream: {
    id: 'whispering_valley_clear_stream',
    name: '清溪淺灘',
    zone: 'whispering_valley' as RoomDef['zone'],
    image: 'whispering_valley_clear_stream.png',
    imagePrompt: '清溪淺灘 in whispering_valley, shallow clear stream over smooth stones, minnows, slime bubbles and bright green valley light, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text',
    description:
      '溪水在此變淺，能看見鵝卵石、魚苗和幾片被水流打磨得發亮的藥草葉。淺灘兩側岩壁回音很強，腳步聲會被放大成遠處低語。玩家可在這裡釣小魚、清洗採集物或搜索水底亮點，但過於靠近水泡會驚動潛伏的史萊姆。',
    exits: [
      { direction: 'south', targetRoomId: 'whispering_valley_reed_bank', description: '水流回到蘆葦岸' },
      { direction: 'north', targetRoomId: 'whispering_valley_echo_rocks', description: '上游有回音岩群' },
      { direction: 'east', targetRoomId: 'whispering_valley_herb_slope', description: '東側斜坡長滿草藥' },
    ],
    monsters: [
      { monsterId: 'green_slime', maxCount: 3, respawnSeconds: 30 },
    ],
    mapSymbol: '[溪]',
    mapX: 0,
    mapY: 2,
    guardianHints: {
      creature: '水泡連成一線時，史萊姆正沿淺灘滑行。',
      treasure: '水底最亮的鵝卵石可能是天然冰晶。',
      spirit: '淺灘回音會重複玩家最後一句話，像溪谷在回應。',
    },
  },

  whispering_valley_mossy_footbridge: {
    id: 'whispering_valley_mossy_footbridge',
    name: '苔石小橋',
    zone: 'whispering_valley' as RoomDef['zone'],
    image: 'whispering_valley_mossy_footbridge.png',
    imagePrompt: '苔石小橋 in whispering_valley, moss-covered stone footbridge over creek, ferns, wet rocks and soft mist, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text',
    description:
      '一座低矮石橋橫跨溪水，橋面長滿濕滑青苔，欄杆上刻著巡林人留下的箭頭。橋下水聲被石拱壓成低沉耳語，偶爾會把上游的動靜提前送到腳邊。這裡是溪谷東西兩側的交通節點，玩家可從橋上前往草藥坡、冷泉或回到谷口。',
    exits: [
      { direction: 'west', targetRoomId: 'whispering_valley_entrance', description: '石橋西側回到入口' },
      { direction: 'east', targetRoomId: 'whispering_valley_cold_spring', description: '橋東有冷泉冒霧' },
      { direction: 'north', targetRoomId: 'whispering_valley_herb_slope', description: '橋頭小徑上到草藥坡' },
    ],
    monsters: [
      { monsterId: 'green_slime', maxCount: 2, respawnSeconds: 30 },
      { monsterId: 'dark_crow', maxCount: 1, respawnSeconds: 35 },
    ],
    mapSymbol: '[橋]',
    mapX: 1,
    mapY: 0,
    guardianHints: {
      creature: '青苔突然隆起時可能是史萊姆偽裝。',
      treasure: '橋欄缺口裡塞著巡林人的舊哨笛。',
      spirit: '橋拱會把溪水聲變成像人聲的警告。',
    },
  },

  whispering_valley_herb_slope: {
    id: 'whispering_valley_herb_slope',
    name: '草藥斜坡',
    zone: 'whispering_valley' as RoomDef['zone'],
    image: 'whispering_valley_herb_slope.png',
    imagePrompt: '草藥斜坡 in whispering_valley, sloped bank with medicinal herbs, dew, small flowers, spider threads and green light, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text',
    description:
      '溪谷東坡長滿薄荷、冷葉草與銀邊蕨，清晨露珠讓整面斜坡閃閃發亮。草藥之間有細細蛛絲和小獸腳印，顯示這裡不只有採集者來過。玩家可按藥性採集草藥，也能順著坡頂前往回音岩群或冰蕨叢；若採錯未成熟草株，附近蜘蛛會被震動吸引。',
    exits: [
      { direction: 'west', targetRoomId: 'whispering_valley_clear_stream', description: '斜坡下方是清溪淺灘' },
      { direction: 'south', targetRoomId: 'whispering_valley_mossy_footbridge', description: '小徑回到苔石橋' },
      { direction: 'north', targetRoomId: 'whispering_valley_ice_fern_patch', description: '冷霧中有冰蕨叢' },
    ],
    monsters: [
      { monsterId: 'forest_spider', maxCount: 2, respawnSeconds: 35 },
      { monsterId: 'field_rat', maxCount: 1, respawnSeconds: 25 },
    ],
    mapSymbol: '[藥]',
    mapX: 1,
    mapY: 2,
    guardianHints: {
      creature: '蛛絲上露珠密集處常有蜘蛛伏著。',
      treasure: '銀邊蕨下可能長著稀有冷葉草。',
      spirit: '草藥依溪水溫度分布，說明谷中有冷泉暗流。',
    },
  },

  whispering_valley_fishing_bend: {
    id: 'whispering_valley_fishing_bend',
    name: '釣魚灣',
    zone: 'whispering_valley' as RoomDef['zone'],
    image: 'whispering_valley_fishing_bend.png',
    imagePrompt: '釣魚灣 in whispering_valley, quiet bend of creek with flat stones, fishing line, reeds and silver fish ripples, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text',
    description:
      '溪水在蘆葦岸東側轉出一個平靜彎灣，幾塊扁平石頭正好能坐下垂釣。水面有銀色魚影穿梭，岸邊還插著被遺忘的竹釣竿。這裡是明顯資源點，玩家可釣魚、找魚餌或修補舊竿，但腐木下的田鼠和水邊史萊姆會干擾安靜作業。',
    exits: [
      { direction: 'west', targetRoomId: 'whispering_valley_reed_bank', description: '回到蘆葦岸' },
      { direction: 'east', targetRoomId: 'whispering_valley_mist_pool', description: '彎灣深處起了霧' },
      { direction: 'north', targetRoomId: 'whispering_valley_fallen_log', description: '倒木橫在上游' },
    ],
    monsters: [
      { monsterId: 'green_slime', maxCount: 2, respawnSeconds: 30 },
      { monsterId: 'field_rat', maxCount: 2, respawnSeconds: 25 },
    ],
    mapSymbol: '[釣]',
    mapX: 1,
    mapY: 1,
    guardianHints: {
      creature: '釣線突然繃直可能不是魚，而是史萊姆拖動。',
      treasure: '舊竹竿握柄裡藏著一枚小魚形護符。',
      spirit: '釣魚灣的安靜和其他低語聲形成反差，像溪谷特意留下喘息處。',
    },
  },

  whispering_valley_echo_rocks: {
    id: 'whispering_valley_echo_rocks',
    name: '回音岩群',
    zone: 'whispering_valley' as RoomDef['zone'],
    image: 'whispering_valley_echo_rocks.png',
    imagePrompt: '回音岩群 in whispering_valley, clustered echo rocks beside stream, carved marks, moss, birds and sound wave mist, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text',
    description:
      '上游岩壁崩落形成一片奇特岩群，每塊岩石都能把聲音折成不同方向。站在中央說話，回音會像從四面八方的陌生人嘴裡傳回。岩面刻有巡林記號與更古老的溪谷符號，玩家可藉回音尋找隱藏通道，也可能被黑鴉和野狼利用聲音誤導。',
    exits: [
      { direction: 'south', targetRoomId: 'whispering_valley_clear_stream', description: '下坡回到清溪淺灘' },
      { direction: 'east', targetRoomId: 'whispering_valley_ice_fern_patch', description: '冷聲從東側冰蕨傳來' },
      { direction: 'north', targetRoomId: 'whispering_valley_waterfall_base', description: '回音指向瀑布底部' },
    ],
    monsters: [
      { monsterId: 'dark_crow', maxCount: 2, respawnSeconds: 35 },
      { monsterId: 'wild_wolf', maxCount: 1, respawnSeconds: 45 },
    ],
    mapSymbol: '[音]',
    mapX: 0,
    mapY: 3,
    guardianHints: {
      creature: '野狼會利用回音繞後，觀察真正的腳印比聽聲音可靠。',
      treasure: '最大岩石底部有一枚被回音震出的冰晶。',
      spirit: '古老符號像是在教人用聲音與溪谷溝通。',
    },
  },

  whispering_valley_willow_camp: {
    id: 'whispering_valley_willow_camp',
    name: '柳樹營地',
    zone: 'whispering_valley' as RoomDef['zone'],
    image: 'whispering_valley_willow_camp.png',
    imagePrompt: '柳樹營地 in whispering_valley, small camp under willow trees, cold fire pit, bedroll, ranger supplies and creek mist, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text',
    description:
      '冷泉北側有一處臨時營地，幾棵柳樹把枝條垂成天然簾幕，冷掉的火坑旁放著巡林人的舊背包和簡易草藥架。營地看似安全，卻有被匆忙翻找過的痕跡，地上留下朝蜘蛛洞方向的拖痕。玩家可在此取得任務線索、補給或休息資訊，也能通往山谷東側支線。',
    exits: [
      { direction: 'south', targetRoomId: 'whispering_valley_cold_spring', description: '柳枝小路回到冷泉' },
      { direction: 'east', targetRoomId: 'whispering_valley_spider_grotto', description: '拖痕延向蜘蛛洞' },
      { direction: 'north', targetRoomId: 'whispering_valley_old_shrine', description: '營地後方有舊石龕' },
    ],
    monsters: [
      { monsterId: 'forest_spider', maxCount: 2, respawnSeconds: 35 },
      { monsterId: 'green_slime', maxCount: 1, respawnSeconds: 30 },
    ],
    mapSymbol: '[營]',
    mapX: 3,
    mapY: 1,
    guardianHints: {
      creature: '蜘蛛拖痕越新，代表伏擊點越近。',
      treasure: '舊背包裡有未寄出的巡林報告。',
      spirit: '柳樹像刻意遮住營地，保護曾在此避難的人。',
    },
  },

  whispering_valley_cold_spring: {
    id: 'whispering_valley_cold_spring',
    name: '冷泉',
    zone: 'whispering_valley' as RoomDef['zone'],
    image: 'whispering_valley_cold_spring.png',
    imagePrompt: '冷泉 in whispering_valley, clear cold spring steaming lightly, blue stones, mossy bridge path and healing herbs, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text',
    description:
      '苔石小橋東側冒出一眼清冷泉水，泉面泛著淡藍光，周圍石頭比溪谷其他地方更冷。泉邊長著冰蕨幼苗和細小白花，水中偶爾有半透明史萊姆滑過。這裡是治療與資源節點，玩家可採集冷泉水或尋找冰屬性材料，但泉水過冷會讓行動變慢。',
    exits: [
      { direction: 'west', targetRoomId: 'whispering_valley_mossy_footbridge', description: '回到苔石小橋' },
      { direction: 'north', targetRoomId: 'whispering_valley_willow_camp', description: '柳樹營地在泉北' },
      { direction: 'east', targetRoomId: 'whispering_valley_spider_grotto', description: '岩縫通向蜘蛛洞' },
    ],
    monsters: [
      { monsterId: 'green_slime', maxCount: 3, respawnSeconds: 30 },
      { monsterId: 'forest_spider', maxCount: 1, respawnSeconds: 35 },
    ],
    mapSymbol: '[泉]',
    mapX: 2,
    mapY: 0,
    guardianHints: {
      creature: '冷泉史萊姆顏色更淡，會貼著水面移動。',
      treasure: '泉底藍石可作為冰屬性材料。',
      spirit: '冷泉是溪谷低語最清晰的地方，像水脈在說話。',
    },
  },

  whispering_valley_spider_grotto: {
    id: 'whispering_valley_spider_grotto',
    name: '蛛網岩洞',
    zone: 'whispering_valley' as RoomDef['zone'],
    image: 'whispering_valley_spider_grotto.png',
    imagePrompt: '蛛網岩洞 in whispering_valley, shallow grotto covered in webs, cold droplets, bones, spider silhouettes and blue cave light, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text',
    description:
      '冷泉東側的岩縫通向一座淺洞，洞頂滲水滴落在蛛網上，讓整片白網像結霜一樣閃亮。洞內散著小動物骨骸和被拖入的巡林布片，顯示蜘蛛在此築巢已有一段時間。這裡是精英感較強的戰鬥點，玩家若想救出營地線索，必須清理洞口與深處蛛群。',
    exits: [
      { direction: 'west', targetRoomId: 'whispering_valley_cold_spring', description: '岩縫回到冷泉' },
      { direction: 'north', targetRoomId: 'whispering_valley_old_shrine', description: '蛛網後有通往舊神龕的小洞' },
      { direction: 'south', targetRoomId: 'whispering_valley_mist_pool', description: '潮濕坡道落向霧潭' },
    ],
    monsters: [
      { monsterId: 'forest_spider', maxCount: 4, respawnSeconds: 35 },
      { monsterId: 'giant_spider', maxCount: 1, respawnSeconds: 60 },
    ],
    mapSymbol: '[蛛]',
    mapX: 3,
    mapY: 0,
    guardianHints: {
      creature: '巨蛛會從水滴聲最大的地方落下。',
      treasure: '蛛網深處黏著一枚巡林徽章。',
      spirit: '蛛洞連到舊神龕，像是溪谷防線被自然生物佔據。',
    },
  },

  whispering_valley_fallen_log: {
    id: 'whispering_valley_fallen_log',
    name: '倒木淺橋',
    zone: 'whispering_valley' as RoomDef['zone'],
    image: 'whispering_valley_fallen_log.png',
    imagePrompt: '倒木淺橋 in whispering_valley, fallen tree across creek, moss, mushrooms, bird tracks and rushing water below, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text',
    description:
      '一棵老樹倒在釣魚灣上游，樹幹橫跨溪水，形成勉強可走的天然淺橋。樹皮長滿蘑菇和青苔，枝杈間卡著羽毛、魚骨和幾段破線。通過倒木可到達霧潭或回音岩群，但腳下濕滑，戰鬥時很容易被史萊姆逼退到水裡。',
    exits: [
      { direction: 'south', targetRoomId: 'whispering_valley_fishing_bend', description: '沿溪回到釣魚灣' },
      { direction: 'west', targetRoomId: 'whispering_valley_echo_rocks', description: '倒木西端靠近回音岩群' },
      { direction: 'east', targetRoomId: 'whispering_valley_mist_pool', description: '倒木東端通往霧潭' },
    ],
    monsters: [
      { monsterId: 'green_slime', maxCount: 2, respawnSeconds: 30 },
      { monsterId: 'dark_crow', maxCount: 2, respawnSeconds: 35 },
    ],
    mapSymbol: '[木]',
    mapX: 1,
    mapY: 3,
    guardianHints: {
      creature: '黑鴉會啄落樹皮讓玩家失足。',
      treasure: '倒木裂縫裡卡著一只舊魚線盒。',
      spirit: '倒木讓溪谷兩岸重新連通，像自然形成的臨時橋梁。',
    },
  },

  whispering_valley_mist_pool: {
    id: 'whispering_valley_mist_pool',
    name: '霧潭',
    zone: 'whispering_valley' as RoomDef['zone'],
    image: 'whispering_valley_mist_pool.png',
    imagePrompt: '霧潭 in whispering_valley, round misty pool with dark water, reeds, pale fish shadows and spider cave slope, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text',
    description:
      '溪水在倒木與蛛洞之間積成一口圓潭，潭面常年飄著薄霧，看不清水底。霧中偶爾浮現魚影和像手指般的水草，岸邊石頭濕滑而寒冷。這裡可作為釣魚、採水與遭遇點；玩家若在霧中停留太久，會聽見不屬於同伴的低語引導自己靠近深水。',
    exits: [
      { direction: 'west', targetRoomId: 'whispering_valley_fallen_log', description: '倒木通回上游' },
      { direction: 'south', targetRoomId: 'whispering_valley_fishing_bend', description: '水流回到釣魚灣' },
      { direction: 'north', targetRoomId: 'whispering_valley_spider_grotto', description: '濕坡通往蛛網岩洞' },
    ],
    monsters: [
      { monsterId: 'green_slime', maxCount: 3, respawnSeconds: 30 },
      { monsterId: 'forest_spider', maxCount: 1, respawnSeconds: 35 },
    ],
    mapSymbol: '[潭]',
    mapX: 2,
    mapY: 3,
    guardianHints: {
      creature: '霧最厚時，史萊姆會從水面滑向岸邊。',
      treasure: '潭底有銀色魚鱗與一塊冷晶。',
      spirit: '霧潭低語會模仿熟人聲音，不能完全相信。',
    },
  },

  whispering_valley_old_shrine: {
    id: 'whispering_valley_old_shrine',
    name: '溪畔舊神龕',
    zone: 'whispering_valley' as RoomDef['zone'],
    image: 'whispering_valley_old_shrine.png',
    imagePrompt: '溪畔舊神龕 in whispering_valley, old creekside shrine with mossy stones, ribbons, candles and whispering water, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text',
    description:
      '柳樹營地北方的溪畔藏著一座小神龕，石面覆滿青苔，幾條褪色祈願布被系在枝上。神龕供奉的不是明確神像，而是一塊被水磨圓的白石，石上刻著代表水聲、風聲與回音的三枚符號。這裡是溪谷任務線的重要地標，玩家可獻上冷泉水或找回巡林徽章，讓神龕重新回應溪谷低語。神龕後方的岩壁有許多被蛛絲遮住的舊刻痕，記錄巡林人曾用聲音安撫溪谷水脈。若玩家先清理蛛網岩洞，再回到此處調查，白石會短暫發光並指出隱瀑石室方向。祈願布末端還綁著幾枚小鈴，風起時會敲出與低語裂縫相同的節奏。',
    exits: [
      { direction: 'south', targetRoomId: 'whispering_valley_willow_camp', description: '柳樹小徑回到營地' },
      { direction: 'east', targetRoomId: 'whispering_valley_spider_grotto', description: '蛛網小洞通向岩洞' },
      { direction: 'north', targetRoomId: 'whispering_valley_waterfall_base', description: '上游水聲越來越響' },
    ],
    monsters: [
      { monsterId: 'forest_spider', maxCount: 2, respawnSeconds: 35 },
      { monsterId: 'dark_crow', maxCount: 1, respawnSeconds: 35 },
    ],
    mapSymbol: '[龕]',
    mapX: 3,
    mapY: 2,
    guardianHints: {
      creature: '蛛絲覆住神龕符號時，附近蜘蛛會更具攻擊性。',
      treasure: '白石底座下藏著巡林人留下的祈願牌。',
      spirit: '神龕似乎不是崇拜神，而是崇拜溪谷本身的聲音。',
    },
  },

  whispering_valley_ice_fern_patch: {
    id: 'whispering_valley_ice_fern_patch',
    name: '冰蕨叢',
    zone: 'whispering_valley' as RoomDef['zone'],
    image: 'whispering_valley_ice_fern_patch.png',
    imagePrompt: '冰蕨叢 in whispering_valley, patch of pale blue ferns frosted by cold spring mist, dew crystals and spider silk, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text',
    description:
      '草藥坡北端突然變冷，地面長出一片淡藍冰蕨，每片葉緣都凝著霜珠。冰蕨會隨聲音微微顫動，把腳步聲傳向回音岩群和瀑布方向。這裡是稀有採集點，玩家可取得冰屬性藥草，也要小心藏在葉背的蜘蛛和被寒氣吸引的史萊姆。',
    exits: [
      { direction: 'south', targetRoomId: 'whispering_valley_herb_slope', description: '回到較溫暖的草藥坡' },
      { direction: 'west', targetRoomId: 'whispering_valley_echo_rocks', description: '冷聲回到回音岩群' },
      { direction: 'north', targetRoomId: 'whispering_valley_hidden_cascade', description: '霜霧指向隱瀑' },
    ],
    monsters: [
      { monsterId: 'forest_spider', maxCount: 2, respawnSeconds: 35 },
      { monsterId: 'green_slime', maxCount: 2, respawnSeconds: 30 },
    ],
    mapSymbol: '[蕨]',
    mapX: 1,
    mapY: 4,
    guardianHints: {
      creature: '冰蕨葉背有蛛絲時通常代表蜘蛛就在附近。',
      treasure: '霜珠最大的冰蕨可採得高品質藥材。',
      spirit: '冰蕨把聲音傳得很遠，像溪谷的聽覺器官。',
    },
  },

  whispering_valley_wolf_den: {
    id: 'whispering_valley_wolf_den',
    name: '溪狼巢',
    zone: 'whispering_valley' as RoomDef['zone'],
    image: 'whispering_valley_wolf_den.png',
    imagePrompt: '溪狼巢 in whispering_valley, shallow wolf den under roots beside creek, bones, wet fur tracks and dim green light, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text',
    description:
      '瀑布西側的樹根下有一個低矮狼巢，入口堆著魚骨、黑鴉羽毛和濕泥腳印。溪谷野狼比平原狼更安靜，牠們會利用水聲掩蓋接近的腳步。這裡是低等精英戰鬥房，玩家若要安全前往瀑布或隱瀑，最好先處理狼巢，否則牠們會沿溪追擊。',
    exits: [
      { direction: 'east', targetRoomId: 'whispering_valley_waterfall_base', description: '水聲通向瀑布底部' },
      { direction: 'south', targetRoomId: 'whispering_valley_echo_rocks', description: '岩間小路回到回音岩群' },
      { direction: 'north', targetRoomId: 'whispering_valley_stone_weir', description: '狼徑通往石堰' },
    ],
    monsters: [
      { monsterId: 'wild_wolf', maxCount: 3, respawnSeconds: 45 },
      { monsterId: 'dark_crow', maxCount: 1, respawnSeconds: 35 },
    ],
    mapSymbol: '[狼]',
    mapX: -1,
    mapY: 4,
    guardianHints: {
      creature: '溪狼會在瀑布聲最大時衝出。',
      treasure: '魚骨堆下有巡林人丟失的短刀。',
      spirit: '狼巢像守住上游水路的自然關卡。',
    },
  },

  whispering_valley_waterfall_base: {
    id: 'whispering_valley_waterfall_base',
    name: '瀑布底部',
    zone: 'whispering_valley' as RoomDef['zone'],
    image: 'whispering_valley_waterfall_base.png',
    imagePrompt: '瀑布底部 in whispering_valley, waterfall base with spray, slick rocks, rainbow mist and roaring hidden whispers, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text',
    description:
      '溪谷上游的瀑布從灰白岩壁落下，水霧把周圍石頭和樹根都染成濕亮銀色。瀑聲很大，卻能在某些角度聽見清楚低語，像有人站在水幕後說話。這裡是溪谷中段地標，連接狼巢、舊神龕、隱瀑與石堰；玩家可搜索水幕、採集濕苔或尋找隱藏通路。瀑布落點周圍的石頭被水流磨出三圈同心紋，與低語裂縫符號相同。若調整石堰水量，水幕會短暫分開，露出通往隱瀑石室的安全落腳點。瀑布背後還有巡林人刻下的高度標記，顯示近年水位忽高忽低，溪谷低語也隨之變得混亂。霧中可見藍白光點上下漂移。',
    exits: [
      { direction: 'south', targetRoomId: 'whispering_valley_echo_rocks', description: '下游回到回音岩群' },
      { direction: 'east', targetRoomId: 'whispering_valley_old_shrine', description: '溪畔小徑通向舊神龕' },
      { direction: 'west', targetRoomId: 'whispering_valley_wolf_den', description: '水霧後有狼巢小徑' },
      { direction: 'north', targetRoomId: 'whispering_valley_hidden_cascade', description: '水幕後似乎還有隱瀑' },
    ],
    monsters: [
      { monsterId: 'green_slime', maxCount: 3, respawnSeconds: 30 },
      { monsterId: 'wild_wolf', maxCount: 1, respawnSeconds: 45 },
    ],
    mapSymbol: '[瀑]',
    mapX: 0,
    mapY: 4,
    guardianHints: {
      creature: '史萊姆會借水霧隱藏透明身體。',
      treasure: '水幕後有被沖刷露出的藍白石片。',
      spirit: '瀑布是溪谷低語最強烈的地點之一。',
    },
  },

  whispering_valley_hidden_cascade: {
    id: 'whispering_valley_hidden_cascade',
    name: '隱瀑石室',
    zone: 'whispering_valley' as RoomDef['zone'],
    image: 'whispering_valley_hidden_cascade.png',
    imagePrompt: '隱瀑石室 in whispering_valley, hidden chamber behind waterfall, glowing wet stone, secret cascade, fern roots and blue mist, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text',
    description:
      '穿過瀑布水幕後，岩壁內竟藏著一間狹長石室，第二道更細的隱瀑沿著裂縫落入深潭。石室牆面佈滿水蝕符號，形狀與舊神龕白石上的符文一致。這裡是隱藏探索房，玩家能揭開低語來源、找到稀有水晶，也會遭遇從蛛洞和冷泉追來的怪物。',
    exits: [
      { direction: 'south', targetRoomId: 'whispering_valley_waterfall_base', description: '穿回外側瀑布底部' },
      { direction: 'east', targetRoomId: 'whispering_valley_ice_fern_patch', description: '窄縫通向冰蕨叢' },
      { direction: 'north', targetRoomId: 'whispering_valley_whispering_rift', description: '水蝕符號指向低語裂縫' },
    ],
    monsters: [
      { monsterId: 'green_slime', maxCount: 2, respawnSeconds: 30 },
      { monsterId: 'forest_spider', maxCount: 2, respawnSeconds: 35 },
    ],
    mapSymbol: '[隱]',
    mapX: 1,
    mapY: 5,
    guardianHints: {
      creature: '水聲忽然變小時，怪物通常正穿過水幕。',
      treasure: '隱瀑深潭底部有低語水晶。',
      spirit: '水蝕符號像是溪谷本身留下的語言。',
    },
  },

  whispering_valley_ranger_post: {
    id: 'whispering_valley_ranger_post',
    name: '巡林哨站',
    zone: 'whispering_valley' as RoomDef['zone'],
    image: 'whispering_valley_ranger_post.png',
    imagePrompt: '巡林哨站 in whispering_valley, small wooden ranger post, map board, hanging lantern, valley trail signs and cool shade, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text',
    description:
      '谷口西側的木棚是廢棄巡林哨站，牆上釘著溪谷路線圖、怪物出沒記錄和幾張被雨水暈開的告示。桌面還留著半瓶驅蟲油與一盞可重新點燃的舊燈。這裡是任務與交通提示房，玩家可取得溪谷路線、蛛洞警告或失蹤巡林人的初始線索。',
    exits: [
      { direction: 'east', targetRoomId: 'whispering_valley_entrance', description: '木棚外就是溪谷入口' },
      { direction: 'north', targetRoomId: 'whispering_valley_stone_weir', description: '巡林小徑通往石堰' },
    ],
    monsters: [
      { monsterId: 'field_rat', maxCount: 2, respawnSeconds: 25 },
      { monsterId: 'dark_crow', maxCount: 1, respawnSeconds: 35 },
    ],
    mapSymbol: '[哨]',
    mapX: -1,
    mapY: 0,
    guardianHints: {
      creature: '黑鴉會啄走告示上的亮色圖釘。',
      treasure: '路線圖角落標出一條未公開的石堰小徑。',
      spirit: '哨站記錄低語變強的日期，與巡林人失蹤時間吻合。',
    },
  },

  whispering_valley_stone_weir: {
    id: 'whispering_valley_stone_weir',
    name: '石堰',
    zone: 'whispering_valley' as RoomDef['zone'],
    image: 'whispering_valley_stone_weir.png',
    imagePrompt: '石堰 in whispering_valley, old stone weir across stream, shallow steps, water control stones and wolf tracks, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text',
    description:
      '巡林小徑北端有一座矮石堰，把溪水分成幾條淺流，石塊上刻著水位線和修補記號。若移動幾塊鬆動石頭，就能改變下游冷泉與釣魚灣的水量。這裡是事件與捷徑點，玩家可修復石堰、追蹤狼群，或由西側小路快速切到瀑布附近。',
    exits: [
      { direction: 'south', targetRoomId: 'whispering_valley_ranger_post', description: '巡林小徑回到哨站' },
      { direction: 'east', targetRoomId: 'whispering_valley_wolf_den', description: '狼徑通向溪狼巢' },
      { direction: 'north', targetRoomId: 'whispering_valley_whispering_rift', description: '水流聲指向低語裂縫' },
    ],
    monsters: [
      { monsterId: 'wild_wolf', maxCount: 2, respawnSeconds: 45 },
      { monsterId: 'green_slime', maxCount: 1, respawnSeconds: 30 },
    ],
    mapSymbol: '[堰]',
    mapX: -1,
    mapY: 3,
    guardianHints: {
      creature: '狼群會沿石堰兩端夾擊。',
      treasure: '鬆動石塊下藏著巡林人的備用鑰匙。',
      spirit: '石堰控制溪谷水聲，修復後低語會變得清晰。',
    },
  },

  whispering_valley_whispering_rift: {
    id: 'whispering_valley_whispering_rift',
    name: '低語裂縫',
    zone: 'whispering_valley' as RoomDef['zone'],
    image: 'whispering_valley_whispering_rift.png',
    imagePrompt: '低語裂縫 in whispering_valley, narrow glowing rift in wet valley rock, water threads, echo symbols, mist and gathered beasts, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text',
    description:
      '隱瀑石室與石堰水聲最終都指向這道狹窄岩縫。裂縫裡不是黑暗，而是細細流動的藍白光絲，所有溪谷低語都從這裡被水聲帶出。岩壁符號會回應舊神龕白石、巡林哨站記錄和石堰水位，像在要求玩家完成一套修復溪谷聲音的儀式。這裡是低語溪谷的大型事件鉤子與 Boss 前哨，怪物會被過強的回音吸引而來。',
    exits: [
      { direction: 'south', targetRoomId: 'whispering_valley_hidden_cascade', description: '水蝕小徑回到隱瀑石室' },
      { direction: 'west', targetRoomId: 'whispering_valley_stone_weir', description: '水聲回流到石堰' },
    ],
    monsters: [
      { monsterId: 'wild_wolf', maxCount: 2, respawnSeconds: 45 },
      { monsterId: 'giant_spider', maxCount: 1, respawnSeconds: 60 },
      { monsterId: 'green_slime', maxCount: 2, respawnSeconds: 30 },
    ],
    mapSymbol: '[裂]',
    mapX: 0,
    mapY: 6,
    guardianHints: {
      creature: '回音越尖銳，代表更多怪物正被裂縫吸引。',
      treasure: '藍白光絲凝成的低語水晶可作為任務核心。',
      spirit: '低語裂縫不像深淵裂縫，它更像溪谷自身的喉嚨。',
    },
  },

  // ─── Area 15: 廢棄礦坑 (Lv 10-18) ───────────────────────

  abandoned_mines_entry_claim: {
    id: 'abandoned_mines_entry_claim',
    name: '礦坑入口礦權牌',
    zone: 'abandoned_mines' as RoomDef['zone'],
    image: 'abandoned_mines_entry_claim.png',
    imagePrompt: '礦坑入口礦權牌 in abandoned_mines, abandoned mine entrance with old claim sign, timber supports, lantern dust and dark tunnel, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text',
    description:
      '山壁下方的礦坑入口被半塌木架撐住，旁邊斜插著一塊褪色礦權牌，上面還能看出舊礦主的名字與禁止外人進入的警告。冷風從黑暗礦道吹出，帶著礦粉、霉木和蝙蝠糞味。這裡是廢棄礦坑入口與交通錨點，玩家可確認退路、檢查繩標，或沿逃生側洞返回地表邊路。',
    exits: [
      { direction: 'east', targetRoomId: 'abandoned_mines_vein_path', description: '礦脈標記延向主礦道' },
      { direction: 'north', targetRoomId: 'abandoned_mines_lift_station', description: '舊升降台在北側' },
      { direction: 'south', targetRoomId: 'abandoned_mines_escape_adit', description: '低矮側洞像逃生通道' },
    ],
    monsters: [
      { monsterId: 'cave_bat', maxCount: 2, respawnSeconds: 40 },
      { monsterId: 'skeleton_soldier', maxCount: 1, respawnSeconds: 70 },
    ],
    mapSymbol: '[口]',
    mapX: 0,
    mapY: 0,
    guardianHints: {
      creature: '入口木架上倒掛的蝙蝠會被燈光驚醒。',
      treasure: '礦權牌背面刻著舊礦道編號。',
      spirit: '礦權牌像墓碑一樣守著這座被遺棄的山腹。',
    },
  },

  abandoned_mines_vein_path: {
    id: 'abandoned_mines_vein_path',
    name: '裸露礦脈道',
    zone: 'abandoned_mines' as RoomDef['zone'],
    image: 'abandoned_mines_vein_path.png',
    imagePrompt: '裸露礦脈道 in abandoned_mines, tunnel wall with exposed ore veins, pick marks, rope markers and dusty lantern glow, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text',
    description:
      '主礦道兩側岩壁露出灰銀色礦脈，舊鑿痕密密麻麻，像有無數礦工在同一面牆上敲了多年。地上鋪著碎石與斷裂繩標，偶爾能看見新近被拖動的痕跡。玩家可在此採礦、辨認礦脈純度，也要留意從裂縫鑽出的蝙蝠與亡靈礦工。',
    exits: [
      { direction: 'west', targetRoomId: 'abandoned_mines_entry_claim', description: '繩標回到入口' },
      { direction: 'east', targetRoomId: 'abandoned_mines_herb_shelf', description: '礦道旁有潮濕岩棚' },
      { direction: 'north', targetRoomId: 'abandoned_mines_cart_yard', description: '鐵軌通往礦車場' },
    ],
    monsters: [
      { monsterId: 'cave_bat', maxCount: 3, respawnSeconds: 40 },
      { monsterId: 'skeleton_soldier', maxCount: 1, respawnSeconds: 70 },
    ],
    mapSymbol: '[脈]',
    mapX: 1,
    mapY: 0,
    guardianHints: {
      creature: '礦脈裂縫有碎石落下時，蝙蝠通常正在移動。',
      treasure: '最亮的礦脈旁有未採完的礦晶。',
      spirit: '礦道裡的敲擊回音不像自然聲，像有人仍在工作。',
    },
  },

  abandoned_mines_herb_shelf: {
    id: 'abandoned_mines_herb_shelf',
    name: '潮濕藥草岩棚',
    zone: 'abandoned_mines' as RoomDef['zone'],
    image: 'abandoned_mines_herb_shelf.png',
    imagePrompt: '潮濕藥草岩棚 in abandoned_mines, damp stone shelf with cave herbs, dripping roots, mushrooms and pale mineral light, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text',
    description:
      '礦道轉角有一片濕滑岩棚，地下水沿根鬚滴落，讓幾簇耐陰草藥和白色菌菇在礦粉中生長。這裡是少見的地下採集點，藥草能中和礦坑粉塵，也可作為任務材料。岩棚上方有細小蛛絲與蝙蝠抓痕，採集時若動作太大，會驚動洞頂生物。',
    exits: [
      { direction: 'west', targetRoomId: 'abandoned_mines_vein_path', description: '回到裸露礦脈道' },
      { direction: 'east', targetRoomId: 'abandoned_mines_water_pocket', description: '水聲從前方口袋洞傳來' },
      { direction: 'north', targetRoomId: 'abandoned_mines_crystal_pocket', description: '岩棚上方有晶洞微光' },
    ],
    monsters: [
      { monsterId: 'giant_spider', maxCount: 1, respawnSeconds: 60 },
      { monsterId: 'cave_bat', maxCount: 2, respawnSeconds: 40 },
    ],
    mapSymbol: '[草]',
    mapX: 2,
    mapY: 0,
    guardianHints: {
      creature: '菌菇傘面突然抖動時，蛛絲可能已被拉緊。',
      treasure: '岩棚最深處有一株泛藍的礦坑藥草。',
      spirit: '藥草沿著地下水生長，暗示水脈仍未完全污染。',
    },
  },

  abandoned_mines_water_pocket: {
    id: 'abandoned_mines_water_pocket',
    name: '積水口袋洞',
    zone: 'abandoned_mines' as RoomDef['zone'],
    image: 'abandoned_mines_water_pocket.png',
    imagePrompt: '積水口袋洞 in abandoned_mines, small flooded pocket chamber, black water, broken rails, mineral reflections and hanging roots, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text',
    description:
      '礦道低處積成一座口袋洞，黑水淹過腳踝，水面倒映著斷裂鐵軌和木梁。每踩一步都會揚起礦粉和氣泡，像水下有什麼在緩慢呼吸。玩家可在此採水、搜索沉沒工具或找出通往淹沒支道的入口，但積水也讓亡靈與蝙蝠的動向更難判斷。',
    exits: [
      { direction: 'west', targetRoomId: 'abandoned_mines_herb_shelf', description: '濕滑岩棚在西側' },
      { direction: 'east', targetRoomId: 'abandoned_mines_beast_scrape', description: '濕腳印通向獸爪痕' },
      { direction: 'north', targetRoomId: 'abandoned_mines_flooded_crosscut', description: '水面延伸入淹沒橫巷' },
    ],
    monsters: [
      { monsterId: 'cave_bat', maxCount: 2, respawnSeconds: 40 },
      { monsterId: 'skeleton_soldier', maxCount: 2, respawnSeconds: 70 },
    ],
    mapSymbol: '[水]',
    mapX: 3,
    mapY: 0,
    guardianHints: {
      creature: '水面倒影多出人影時，骷髏可能正在靠近。',
      treasure: '沉水鐵軌旁壓著一把刻名礦鎬。',
      spirit: '積水保留礦坑最後一天的腳印，卻沒有離開方向。',
    },
  },

  abandoned_mines_beast_scrape: {
    id: 'abandoned_mines_beast_scrape',
    name: '獸爪刮痕道',
    zone: 'abandoned_mines' as RoomDef['zone'],
    image: 'abandoned_mines_beast_scrape.png',
    imagePrompt: '獸爪刮痕道 in abandoned_mines, tunnel walls clawed by beasts, broken supports, scattered bones and red warning marks, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text',
    description:
      '這段礦道牆面滿是深深爪痕，木支架被抓斷，地上散著小動物骨骸和被拖裂的礦工布條。刮痕有些新，有些已被礦粉覆蓋，顯示某種地下野獸長期把這裡當巡行通道。玩家可追蹤刮痕前往遺物坑，也可能遭遇洞穴蝙蝠和骷髏守衛的夾擊。',
    exits: [
      { direction: 'west', targetRoomId: 'abandoned_mines_water_pocket', description: '濕腳印回到積水口袋洞' },
      { direction: 'east', targetRoomId: 'abandoned_mines_relic_pit', description: '爪痕盡頭是遺物坑' },
      { direction: 'north', targetRoomId: 'abandoned_mines_bat_roost', description: '上方洞穴傳來蝙蝠聲' },
    ],
    monsters: [
      { monsterId: 'cave_bat', maxCount: 3, respawnSeconds: 40 },
      { monsterId: 'giant_spider', maxCount: 1, respawnSeconds: 60 },
    ],
    mapSymbol: '[爪]',
    mapX: 4,
    mapY: 0,
    guardianHints: {
      creature: '爪痕越新，附近伏擊越近。',
      treasure: '碎骨堆裡有一枚未腐蝕的礦工徽章。',
      spirit: '刮痕像在標記領地，礦坑不再屬於人類。',
    },
  },

  abandoned_mines_relic_pit: {
    id: 'abandoned_mines_relic_pit',
    name: '遺物坑',
    zone: 'abandoned_mines' as RoomDef['zone'],
    image: 'abandoned_mines_relic_pit.png',
    imagePrompt: '遺物坑 in abandoned_mines, pit of old miner relics, helmets, tools, bones, dim lantern and dark stone walls, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text',
    description:
      '獸爪道盡頭塌成一個圓形坑洞，坑底堆著礦工頭盔、破燈、斷鎬和幾具半埋骨骸。遺物並非全都古舊，有些工具像是最近才被丟下，表面還有新鮮刮痕。這裡是任務與大型事件鉤子，玩家可尋找失蹤礦工證物，並發現礦坑深處仍有人或東西在收集遺物。',
    exits: [
      { direction: 'west', targetRoomId: 'abandoned_mines_beast_scrape', description: '爬回獸爪刮痕道' },
      { direction: 'north', targetRoomId: 'abandoned_mines_foreman_office', description: '坑壁木梯通向工頭室' },
    ],
    monsters: [
      { monsterId: 'skeleton_soldier', maxCount: 3, respawnSeconds: 70 },
      { monsterId: 'cave_bat', maxCount: 1, respawnSeconds: 40 },
    ],
    mapSymbol: '[遺]',
    mapX: 5,
    mapY: 0,
    guardianHints: {
      creature: '觸碰頭盔時，附近骷髏會像被點名般起身。',
      treasure: '坑底有一枚刻著工頭印記的懷錶。',
      spirit: '遺物坑像臨時墓地，卻缺少真正安葬儀式。',
    },
  },

  abandoned_mines_lift_station: {
    id: 'abandoned_mines_lift_station',
    name: '舊升降台',
    zone: 'abandoned_mines' as RoomDef['zone'],
    image: 'abandoned_mines_lift_station.png',
    imagePrompt: '舊升降台 in abandoned_mines, rusted lift platform, chains, pulley wheels, deep shaft and dust beams, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text',
    description:
      '入口北側的舊升降台懸在方形井口上方，鐵鏈生鏽，滑輪卡著碎石和乾掉的油泥。平台邊緣還掛著半截安全繩，像曾有人急著逃離。這裡是礦坑交通節點，可連往礦車場與深層井道；若修好制動桿，玩家能更安全地穿梭上下層。',
    exits: [
      { direction: 'south', targetRoomId: 'abandoned_mines_entry_claim', description: '回到礦坑入口' },
      { direction: 'east', targetRoomId: 'abandoned_mines_cart_yard', description: '鐵軌通向礦車場' },
      { direction: 'down', targetRoomId: 'abandoned_mines_echo_shaft', description: '升降台下方是回音豎井' },
    ],
    monsters: [
      { monsterId: 'cave_bat', maxCount: 3, respawnSeconds: 40 },
      { monsterId: 'skeleton_soldier', maxCount: 1, respawnSeconds: 70 },
    ],
    mapSymbol: '[升]',
    mapX: 0,
    mapY: 1,
    guardianHints: {
      creature: '升降台鏈條震動時，上方蝙蝠群會落下。',
      treasure: '制動桿後面塞著一張深層礦道草圖。',
      spirit: '升降台仍像在等待下一班礦工下井。',
    },
  },

  abandoned_mines_cart_yard: {
    id: 'abandoned_mines_cart_yard',
    name: '礦車調度場',
    zone: 'abandoned_mines' as RoomDef['zone'],
    image: 'abandoned_mines_cart_yard.png',
    imagePrompt: '礦車調度場 in abandoned_mines, abandoned mine cart yard, rusted rails, switch levers, ore carts and lantern haze, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text',
    description:
      '多條鐵軌在此交會，幾輛礦車歪在軌道上，車斗裡還殘留半車碎礦和破布。調度桿上的標牌寫著主礦道、木支廊和冶煉間，但有幾面被人刻意轉反。玩家可推動礦車打開路線，也可能讓金屬撞擊聲驚醒深處守衛。',
    exits: [
      { direction: 'west', targetRoomId: 'abandoned_mines_lift_station', description: '鐵軌回到升降台' },
      { direction: 'south', targetRoomId: 'abandoned_mines_vein_path', description: '主軌回到礦脈道' },
      { direction: 'east', targetRoomId: 'abandoned_mines_timber_gallery', description: '支軌進入木支廊' },
      { direction: 'north', targetRoomId: 'abandoned_mines_old_smelter', description: '重軌通向舊冶煉間' },
    ],
    monsters: [
      { monsterId: 'skeleton_soldier', maxCount: 2, respawnSeconds: 70 },
      { monsterId: 'cave_bat', maxCount: 2, respawnSeconds: 40 },
    ],
    mapSymbol: '[車]',
    mapX: 1,
    mapY: 1,
    guardianHints: {
      creature: '骷髏會被礦車撞擊聲吸引過來。',
      treasure: '錯置標牌背面有一串工頭密碼。',
      spirit: '調度場仍保留礦坑運作秩序，只是操作者早已不在。',
    },
  },

  abandoned_mines_timber_gallery: {
    id: 'abandoned_mines_timber_gallery',
    name: '木支廊',
    zone: 'abandoned_mines' as RoomDef['zone'],
    image: 'abandoned_mines_timber_gallery.png',
    imagePrompt: '木支廊 in abandoned_mines, tunnel gallery held by old timber supports, sagging beams, dust and warning chalk marks, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text',
    description:
      '礦車場東側的支廊由密集木柱撐住，梁木彎曲，表面畫著已經褪色的白色警告符號。每走幾步都能聽見木頭呻吟，碎石從頂板細縫落下。這裡是危險過渡房，玩家可加固支架或快速通過；若戰鬥拖太久，坍塌聲會引來更多洞穴生物。',
    exits: [
      { direction: 'west', targetRoomId: 'abandoned_mines_cart_yard', description: '支軌回到礦車場' },
      { direction: 'east', targetRoomId: 'abandoned_mines_echo_shaft', description: '木廊盡頭是豎井邊' },
      { direction: 'south', targetRoomId: 'abandoned_mines_crystal_pocket', description: '矮洞通向晶洞' },
    ],
    monsters: [
      { monsterId: 'cave_bat', maxCount: 2, respawnSeconds: 40 },
      { monsterId: 'giant_spider', maxCount: 1, respawnSeconds: 60 },
    ],
    mapSymbol: '[木]',
    mapX: 2,
    mapY: 1,
    guardianHints: {
      creature: '蜘蛛會利用木支架間隙拉網。',
      treasure: '白色警告符號下藏著加固工具。',
      spirit: '木支廊的吱呀聲像老礦坑仍在呻吟。',
    },
  },

  abandoned_mines_echo_shaft: {
    id: 'abandoned_mines_echo_shaft',
    name: '回音豎井',
    zone: 'abandoned_mines' as RoomDef['zone'],
    image: 'abandoned_mines_echo_shaft.png',
    imagePrompt: '回音豎井 in abandoned_mines, deep vertical shaft with rope ladders, echoing darkness, hanging chains and bat silhouettes, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text',
    description:
      '木支廊盡頭突然開成一座深豎井，井壁釘著舊繩梯和鐵環，往下看只能看見黑暗。任何聲音都會在井中重複數十次，像有人在下方回話。斷裂升降籠卡在半空，鐵鏈磨著岩壁，落下的灰塵像細雪。井口旁散著測深繩、壞掉滑輪和被撕裂的警示牌，牌上提醒礦工進入下層前必須先點三次安全燈。這裡連接升降台、淹沒橫巷與深部核心，是礦坑中層的重要交通點，也是蝙蝠最密集的區域。玩家必須分辨回音與真正的怪物動靜，否則很容易在窄梯上被包圍；若能穩住繩梯，也能從牆縫找到通往下層的舊維修記號。',
    exits: [
      { direction: 'up', targetRoomId: 'abandoned_mines_lift_station', description: '繩梯向上通回升降台' },
      { direction: 'west', targetRoomId: 'abandoned_mines_timber_gallery', description: '木廊回到支架區' },
      { direction: 'down', targetRoomId: 'abandoned_mines_deep_core', description: '井底通往深部核心' },
      { direction: 'east', targetRoomId: 'abandoned_mines_flooded_crosscut', description: '井壁側洞有潮濕水聲' },
    ],
    monsters: [
      { monsterId: 'cave_bat', maxCount: 4, respawnSeconds: 40 },
      { monsterId: 'cave_bat_swarm', maxCount: 1, respawnSeconds: 90 },
    ],
    mapSymbol: '[井]',
    mapX: 3,
    mapY: 1,
    guardianHints: {
      creature: '回音突然中斷時，蝙蝠群正在俯衝。',
      treasure: '井壁鐵環後藏著一盞舊安全燈。',
      spirit: '豎井把礦坑所有聲音集中起來，像山腹的喉嚨。',
    },
  },

  abandoned_mines_crystal_pocket: {
    id: 'abandoned_mines_crystal_pocket',
    name: '小晶洞',
    zone: 'abandoned_mines' as RoomDef['zone'],
    image: 'abandoned_mines_crystal_pocket.png',
    imagePrompt: '小晶洞 in abandoned_mines, small crystal pocket with blue white mineral shards, pick marks, damp floor and faint glow, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text',
    description:
      '木支廊下方的矮洞通向一座小晶洞，藍白晶簇從岩壁向外生長，照亮地上細小水珠。晶洞裡的礦晶尚未完全被採走，周圍卻有許多匆忙敲擊留下的裂痕。玩家可採集晶體或研究礦脈走向，但晶光也會吸引蝙蝠與更深處的石像守衛注意。',
    exits: [
      { direction: 'north', targetRoomId: 'abandoned_mines_timber_gallery', description: '矮洞回到木支廊' },
      { direction: 'south', targetRoomId: 'abandoned_mines_herb_shelf', description: '潮濕裂縫回到藥草岩棚' },
      { direction: 'east', targetRoomId: 'abandoned_mines_bat_roost', description: '晶光照向蝙蝠棲洞' },
    ],
    monsters: [
      { monsterId: 'cave_bat', maxCount: 3, respawnSeconds: 40 },
      { monsterId: 'crystal_golem', maxCount: 1, respawnSeconds: 120 },
    ],
    mapSymbol: '[晶]',
    mapX: 2,
    mapY: 2,
    guardianHints: {
      creature: '晶簇震動時，晶石魔像可能正在甦醒。',
      treasure: '完整藍白晶簇可作為高價採集材料。',
      spirit: '晶洞像礦坑尚未耗盡的心跳。',
    },
  },

  abandoned_mines_bat_roost: {
    id: 'abandoned_mines_bat_roost',
    name: '蝙蝠棲洞',
    zone: 'abandoned_mines' as RoomDef['zone'],
    image: 'abandoned_mines_bat_roost.png',
    imagePrompt: '蝙蝠棲洞 in abandoned_mines, cave ceiling packed with bats, guano piles, narrow ledges and crystal side light, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text',
    description:
      '晶洞東側的高洞頂密密麻麻倒掛著蝙蝠，地上堆著厚厚蝙蝠糞和被啃碎的蟲殼。空氣刺鼻，任何火光或大聲響都會讓整片洞頂像黑布一樣翻動。這裡是高密度戰鬥房，也是採集蝙蝠翼和糞肥材料的地方；往南可回獸爪道，往北則有通往石像龕的窄縫。',
    exits: [
      { direction: 'west', targetRoomId: 'abandoned_mines_crystal_pocket', description: '晶洞微光在西側' },
      { direction: 'south', targetRoomId: 'abandoned_mines_beast_scrape', description: '低洞通回獸爪刮痕道' },
      { direction: 'north', targetRoomId: 'abandoned_mines_gargoyle_niche', description: '上方窄縫通向石像龕' },
    ],
    monsters: [
      { monsterId: 'cave_bat', maxCount: 4, respawnSeconds: 40 },
      { monsterId: 'cave_bat_swarm', maxCount: 1, respawnSeconds: 90 },
    ],
    mapSymbol: '[蝠]',
    mapX: 4,
    mapY: 1,
    guardianHints: {
      creature: '蝙蝠群會被火光與金屬撞擊聲激怒。',
      treasure: '糞堆下有被蝙蝠拖來的亮色礦片。',
      spirit: '蝙蝠棲洞把地表生命帶進礦坑，形成新的地下生態。',
    },
  },

  abandoned_mines_flooded_crosscut: {
    id: 'abandoned_mines_flooded_crosscut',
    name: '淹沒橫巷',
    zone: 'abandoned_mines' as RoomDef['zone'],
    image: 'abandoned_mines_flooded_crosscut.png',
    imagePrompt: '淹沒橫巷 in abandoned_mines, flooded crosscut tunnel, waist-deep dark water, rails under surface and reflected lanterns, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text',
    description:
      '回音豎井東側的橫巷被水淹沒，水面只露出幾段鐵軌和木支架頂端。牆上白漆水位線顯示這裡曾多次試圖排水，卻一次比一次失敗。玩家可沿牆邊鐵環前進，尋找沉沒支道與排水閘，也要小心骷髏在黑水中突然站起。',
    exits: [
      { direction: 'west', targetRoomId: 'abandoned_mines_echo_shaft', description: '側洞回到回音豎井' },
      { direction: 'south', targetRoomId: 'abandoned_mines_water_pocket', description: '積水流回口袋洞' },
      { direction: 'east', targetRoomId: 'abandoned_mines_sunken_rail', description: '水下鐵軌延向沉軌段' },
    ],
    monsters: [
      { monsterId: 'skeleton_soldier', maxCount: 3, respawnSeconds: 70 },
      { monsterId: 'cave_bat', maxCount: 1, respawnSeconds: 40 },
    ],
    mapSymbol: '[淹]',
    mapX: 3,
    mapY: 2,
    guardianHints: {
      creature: '水下冒出白色氣泡時，骷髏正從泥中起身。',
      treasure: '水位線旁有排水閘的缺口記號。',
      spirit: '淹沒橫巷像礦坑試圖把過去全部藏進黑水裡。',
    },
  },

  abandoned_mines_foreman_office: {
    id: 'abandoned_mines_foreman_office',
    name: '工頭辦公室',
    zone: 'abandoned_mines' as RoomDef['zone'],
    image: 'abandoned_mines_foreman_office.png',
    imagePrompt: '工頭辦公室 in abandoned_mines, ruined foreman office with desk, ledgers, mine maps, locked cabinet and dusty lamp, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text',
    description:
      '遺物坑上方的木梯通向一間嵌在岩壁裡的小辦公室，桌面散著礦道圖、薪資帳本和幾封未寄出的事故報告。牆上掛著舊班表，最後一日的名字被墨水塗黑，抽屜裡還留著工頭匆忙收起的礦核樣本標籤。門邊安全燈早已熄滅，卻仍聞得到油煙味。鎖櫃上有新的撬痕，地板灰塵被拖出一道痕跡，像有人在礦坑荒廢後又回來翻找過證據。這裡是礦坑任務核心房，玩家可調查事故原因、找出失蹤礦工名冊，也能打開通往火藥室的鎖門。若仔細比對圖紙與班表，還能知道哪些支道在事故當晚被臨時封鎖。',
    exits: [
      { direction: 'south', targetRoomId: 'abandoned_mines_relic_pit', description: '木梯下到遺物坑' },
      { direction: 'west', targetRoomId: 'abandoned_mines_powder_room', description: '鐵門後是火藥室' },
      { direction: 'north', targetRoomId: 'abandoned_mines_old_smelter', description: '辦公室後門通往舊冶煉間' },
    ],
    monsters: [
      { monsterId: 'skeleton_soldier', maxCount: 2, respawnSeconds: 70 },
      { monsterId: 'gargoyle', maxCount: 1, respawnSeconds: 120 },
    ],
    mapSymbol: '[工]',
    mapX: 5,
    mapY: 1,
    guardianHints: {
      creature: '工頭椅子移動時，石像守衛可能會啟動。',
      treasure: '帳本夾層裡藏著火藥室鑰匙。',
      spirit: '塗黑名冊像在掩蓋礦難真正原因。',
    },
  },

  abandoned_mines_powder_room: {
    id: 'abandoned_mines_powder_room',
    name: '火藥室',
    zone: 'abandoned_mines' as RoomDef['zone'],
    image: 'abandoned_mines_powder_room.png',
    imagePrompt: '火藥室 in abandoned_mines, old powder room with barrels, warning signs, dry shelves and cracked stone walls, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text',
    description:
      '工頭室西側的火藥室乾燥得異常，木桶上印著褪色爆破標記，牆面貼滿禁止明火的告示。多數火藥已經受潮結塊，但角落仍有幾包保持完整，被人用油布重新包好。這裡是事件與捷徑開路點，玩家可取得爆破材料打通堵塞礦道，也要避免戰鬥火花引發坍塌。',
    exits: [
      { direction: 'east', targetRoomId: 'abandoned_mines_foreman_office', description: '鐵門回到工頭辦公室' },
      { direction: 'west', targetRoomId: 'abandoned_mines_sunken_rail', description: '爆破標記指向沉軌段' },
    ],
    monsters: [
      { monsterId: 'skeleton_soldier', maxCount: 2, respawnSeconds: 70 },
      { monsterId: 'cave_bat', maxCount: 1, respawnSeconds: 40 },
    ],
    mapSymbol: '[藥]',
    mapX: 4,
    mapY: 2,
    guardianHints: {
      creature: '骷髏武器撞擊火藥桶時會造成額外危險。',
      treasure: '油布包裡有仍可使用的爆破藥包。',
      spirit: '火藥室保存太好，像有人近期仍在使用。',
    },
  },

  abandoned_mines_sunken_rail: {
    id: 'abandoned_mines_sunken_rail',
    name: '沉軌段',
    zone: 'abandoned_mines' as RoomDef['zone'],
    image: 'abandoned_mines_sunken_rail.png',
    imagePrompt: '沉軌段 in abandoned_mines, sunken rail tunnel with tilted tracks, mud, water pools and collapsed carts, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text',
    description:
      '淹沒橫巷東側的鐵軌突然下陷，整段礦道像被巨手按進泥水裡。傾斜礦車半埋在泥中，車輪仍卡著未運出的礦石，軌枕之間長出白色菌絲。牆面有爆破孔和新補上的木板，顯示這裡曾被人試圖打通，卻只讓更多地下水滲入。水面偶爾泛起油亮波紋，露出沉在泥裡的工具箱與折斷信號旗，提醒玩家腳下仍有空洞。玩家可用火藥室材料清理塌方，開啟通往深部核心或舊冶煉間的捷徑，也要提防泥水裡藏著蛛網與未熄的骷髏怨念。若貿然奔跑，傾斜軌道會把聲響傳到更深處，讓潛伏敵人提前靠近。',
    exits: [
      { direction: 'west', targetRoomId: 'abandoned_mines_flooded_crosscut', description: '水軌回到淹沒橫巷' },
      { direction: 'east', targetRoomId: 'abandoned_mines_powder_room', description: '爆破門連回火藥室' },
      { direction: 'north', targetRoomId: 'abandoned_mines_deep_core', description: '沉軌盡頭通向深部核心' },
    ],
    monsters: [
      { monsterId: 'skeleton_soldier', maxCount: 2, respawnSeconds: 70 },
      { monsterId: 'giant_spider', maxCount: 1, respawnSeconds: 60 },
    ],
    mapSymbol: '[軌]',
    mapX: 4,
    mapY: 3,
    guardianHints: {
      creature: '泥水下的蛛網會拖慢腳步。',
      treasure: '半埋礦車裡有一塊高純度礦石。',
      spirit: '沉軌段像礦坑深處在把舊路吞回地底。',
    },
  },

  abandoned_mines_old_smelter: {
    id: 'abandoned_mines_old_smelter',
    name: '舊冶煉間',
    zone: 'abandoned_mines' as RoomDef['zone'],
    image: 'abandoned_mines_old_smelter.png',
    imagePrompt: '舊冶煉間 in abandoned_mines, abandoned smelter chamber with cold furnace, slag piles, carts and red rust stains, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text',
    description:
      '礦車場北端的冶煉間已經熄火多年，冷爐膛裡堆滿黑渣，牆面被煙燻成深灰色。鐵砧旁散著半成品錠條和破裂模具，像工人突然停手離開。這裡是資源與精英戰鬥房，可回收礦渣、尋找冶煉記錄，並通往石像龕或工頭室。',
    exits: [
      { direction: 'south', targetRoomId: 'abandoned_mines_cart_yard', description: '重軌回到礦車場' },
      { direction: 'east', targetRoomId: 'abandoned_mines_gargoyle_niche', description: '爐後石門通向石像龕' },
      { direction: 'north', targetRoomId: 'abandoned_mines_foreman_office', description: '煙道旁小門回到工頭室' },
    ],
    monsters: [
      { monsterId: 'gargoyle', maxCount: 1, respawnSeconds: 120 },
      { monsterId: 'skeleton_soldier', maxCount: 2, respawnSeconds: 70 },
    ],
    mapSymbol: '[煉]',
    mapX: 1,
    mapY: 2,
    guardianHints: {
      creature: '爐後石像眼睛發亮時，石像守衛即將活動。',
      treasure: '冷爐底部有一塊未完全熔化的異色礦錠。',
      spirit: '冶煉間停止在某個工作瞬間，像時間被礦難切斷。',
    },
  },

  abandoned_mines_gargoyle_niche: {
    id: 'abandoned_mines_gargoyle_niche',
    name: '石像龕',
    zone: 'abandoned_mines' as RoomDef['zone'],
    image: 'abandoned_mines_gargoyle_niche.png',
    imagePrompt: '石像龕 in abandoned_mines, carved stone niches with gargoyles, mineral dust, broken offerings and cold furnace light, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text',
    description:
      '冶煉間後方的石龕排列著數尊礦坑守護像，牠們有著蝙蝠翼和石爪，表面覆滿礦粉。龕前擺著破碎供品與礦工帽，說明礦工曾把它們當作守護神。地面刻著祈求平安的短句，後半卻被尖銳爪痕刮掉，只剩深部礦核的符號反覆出現。龕壁還嵌著小小銅牌，記錄每次坍方後礦工重新獻祭的日期，最後幾面銅牌字跡明顯變得慌亂。如今部分石像眼縫透出暗光，會攻擊任何接近深層核心的人。這裡是精英守門點，也是解釋礦坑詛咒來源的重要房間。玩家若先破壞供品鏈條，可削弱石像甦醒時的壓迫感。',
    exits: [
      { direction: 'west', targetRoomId: 'abandoned_mines_old_smelter', description: '石門回到舊冶煉間' },
      { direction: 'south', targetRoomId: 'abandoned_mines_bat_roost', description: '窄縫下到蝙蝠棲洞' },
      { direction: 'east', targetRoomId: 'abandoned_mines_deep_core', description: '石像後方是深部核心' },
    ],
    monsters: [
      { monsterId: 'gargoyle', maxCount: 2, respawnSeconds: 120 },
      { monsterId: 'cave_bat', maxCount: 2, respawnSeconds: 40 },
    ],
    mapSymbol: '[像]',
    mapX: 3,
    mapY: 3,
    guardianHints: {
      creature: '石像眼縫發亮時先後退，牠會撲向最近目標。',
      treasure: '破碎供品中藏著礦工護符。',
      spirit: '石像原本是守護，現在卻像被深處意志重新命令。',
    },
  },

  abandoned_mines_deep_core: {
    id: 'abandoned_mines_deep_core',
    name: '深部礦核',
    zone: 'abandoned_mines' as RoomDef['zone'],
    image: 'abandoned_mines_deep_core.png',
    imagePrompt: '深部礦核 in abandoned_mines, deep mine core with huge dark ore heart, broken rails, crystals, skeleton miners and oppressive glow, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text',
    description:
      '回音豎井底部是一座巨大空洞，中央裸露著像心臟般的黑色礦核，表面一明一暗地閃著暗紅光。周圍鐵軌全部指向礦核，彷彿整座礦坑都圍繞它修建。碎裂礦燈、斷柄十字鎬和沒有寫完的求救字句散在地上，顯示礦難最後集中在此處爆發。每次礦核脈動，牆上晶簇都會回應般亮起，讓玩家看見岩層中封住的舊手印與求救符號。骷髏礦工在附近徘徊，石像守衛則守住通往出口的裂縫。這裡是廢棄礦坑的大型事件鉤子，玩家可決定採走礦核、封住它，或追查它為何讓礦工無法安息。若選擇久留，礦核會讓整座坑道的敵人更躁動。',
    exits: [
      { direction: 'up', targetRoomId: 'abandoned_mines_echo_shaft', description: '繩梯上回回音豎井' },
      { direction: 'west', targetRoomId: 'abandoned_mines_gargoyle_niche', description: '石像守門通回石龕' },
      { direction: 'south', targetRoomId: 'abandoned_mines_sunken_rail', description: '沉軌段連回上層' },
      { direction: 'east', targetRoomId: 'abandoned_mines_escape_adit', description: '裂縫像通往逃生側洞' },
    ],
    monsters: [
      { monsterId: 'skeleton_soldier', maxCount: 3, respawnSeconds: 70 },
      { monsterId: 'gargoyle', maxCount: 1, respawnSeconds: 120 },
      { monsterId: 'crystal_golem', maxCount: 1, respawnSeconds: 180 },
    ],
    mapSymbol: '[核]',
    mapX: 3,
    mapY: 4,
    guardianHints: {
      creature: '礦核脈動時，附近骷髏會短暫變得更快。',
      treasure: '黑色礦核外層剝落的碎片價值極高。',
      spirit: '礦核像吸住所有礦工亡魂，使礦坑停在災難那天。',
    },
  },

  abandoned_mines_escape_adit: {
    id: 'abandoned_mines_escape_adit',
    name: '逃生側洞',
    zone: 'abandoned_mines' as RoomDef['zone'],
    image: 'abandoned_mines_escape_adit.png',
    imagePrompt: '逃生側洞 in abandoned_mines, narrow escape adit with daylight slit, support ropes, old footprints and cold dust, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text',
    description:
      '礦坑入口南側與深部礦核東側都能連到這條狹窄側洞，洞壁粗糙，地上留著朝外奔跑的舊腳印。遠端有一線微弱日光，空氣比主礦道新鮮許多。這裡是逃生捷徑與交通房，玩家若從深處打通堵塞碎石，就能快速回到入口，也能發現當年礦難時有人曾試圖帶著礦核樣本逃離。',
    exits: [
      { direction: 'north', targetRoomId: 'abandoned_mines_entry_claim', description: '側洞回到礦坑入口' },
      { direction: 'west', targetRoomId: 'abandoned_mines_deep_core', description: '堵塞裂縫連向深部礦核' },
    ],
    monsters: [
      { monsterId: 'cave_bat', maxCount: 2, respawnSeconds: 40 },
      { monsterId: 'skeleton_soldier', maxCount: 1, respawnSeconds: 70 },
    ],
    mapSymbol: '[逃]',
    mapX: 0,
    mapY: -1,
    guardianHints: {
      creature: '日光附近的蝙蝠較少，但骷髏會守住深處裂縫。',
      treasure: '舊腳印旁有一只裝著礦核碎片的皮袋。',
      spirit: '逃生側洞證明礦難發生時仍有人差點逃出生天。',
    },
  },

  wildgrass_hills_windbreak_gate: {
    id: 'wildgrass_hills_windbreak_gate',
    name: '防風柵門',
    zone: 'wildgrass_hills' as RoomDef['zone'],
    image: 'wildgrass_hills_windbreak_gate.png',
    imagePrompt: '防風柵門 in wildgrass_hills, windbreak fence gate at yellow grass hills, leaning posts, road marker, sweeping clouds, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text',
    description:
      '西境舊路在這裡穿過一排傾斜防風柵，正式進入荒草丘陵。枯黃高草被強風吹成同一方向，路牌上用焦黑字跡警告旅人不要在夜裡離開石道。柵門旁有避風凹槽、舊補給箱和被半獸人斥候削尖的木樁，是進出丘陵時最安全的錨點。玩家能在這裡整理路線、觀察風向，也能從草浪間辨認野豬踐踏痕與哥布林巡邏腳印。柵門柱上刻著近月失蹤商隊的記號，旁邊繫著還未完全褪色的求救布條，表示危險已經逼近入口。若回頭沿舊路撤離，這裡也是最快的交通節點，適合護送任務重新集合出發。',
    exits: [
      { direction: 'east', targetRoomId: 'wildgrass_hills_lower_slope', description: '石道爬向低坡' },
      { direction: 'south', targetRoomId: 'wildgrass_hills_old_road_cut', description: '舊路切口可快速離開丘陵' },
    ],
    monsters: [
      { monsterId: 'goblin_scout', maxCount: 2, respawnSeconds: 55 },
      { monsterId: 'prairie_boar', maxCount: 1, respawnSeconds: 70 },
    ],
    mapSymbol: '[門]',
    mapX: 0,
    mapY: 0,
    guardianHints: {
      creature: '草浪逆風擺動時，斥候正從柵門外側靠近。',
      treasure: '補給箱底部有旅人留下的乾糧和磨刀石。',
      spirit: '防風柵門像一條界線，把平原秩序留在身後。',
    },
  },

  wildgrass_hills_lower_slope: {
    id: 'wildgrass_hills_lower_slope',
    name: '低風坡',
    zone: 'wildgrass_hills' as RoomDef['zone'],
    image: 'wildgrass_hills_lower_slope.png',
    imagePrompt: '低風坡 in wildgrass_hills, rolling lower slope of yellow grass, gust trails, exposed stones and distant watchfires, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text',
    description:
      '防風柵後的低坡看似開闊，實際上到處藏著半人高的草溝。風從西面壓過丘線，把草葉刮出像水面一樣的波紋，偶爾露出白石、斷箭和小型獸骨。這裡是丘陵主路的第一段，能通往高草徑、彎橡樹與舊柵門。玩家可在坡頂觀察遠方煙火，判斷哥布林營地位置，也會被野豬與巡邏斥候測試實力。坡面沒有真正遮蔽，一旦交戰，風聲會把動靜傳得很遠。',
    exits: [
      { direction: 'west', targetRoomId: 'wildgrass_hills_windbreak_gate', description: '石道回到防風柵門' },
      { direction: 'east', targetRoomId: 'wildgrass_hills_tallgrass_lane', description: '草浪形成狹長通道' },
      { direction: 'north', targetRoomId: 'wildgrass_hills_bent_oak', description: '坡上有一棵彎橡樹' },
    ],
    monsters: [
      { monsterId: 'prairie_boar', maxCount: 2, respawnSeconds: 70 },
      { monsterId: 'goblin_scout', maxCount: 2, respawnSeconds: 55 },
    ],
    mapSymbol: '[坡]',
    mapX: 1,
    mapY: 0,
    guardianHints: {
      creature: '野豬會順著坡面衝鋒，側向閃避比後退安全。',
      treasure: '白石堆下壓著舊巡路人的銅扣。',
      spirit: '低風坡讓旅人明白，這片丘陵沒有真正安靜的時刻。',
    },
  },

  wildgrass_hills_tallgrass_lane: {
    id: 'wildgrass_hills_tallgrass_lane',
    name: '高草徑',
    zone: 'wildgrass_hills' as RoomDef['zone'],
    image: 'wildgrass_hills_tallgrass_lane.png',
    imagePrompt: '高草徑 in wildgrass_hills, narrow lane through towering dry grass, hidden tracks, wind ribbons and amber light, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text',
    description:
      '一條被腳步和獸蹄壓出的細徑穿過高草，兩側草葉高過肩頭，人在其中幾乎看不見十步外的同伴。風穿過草莖時發出像耳語的摩擦聲，掩蓋了哥布林斥候拉弓與野豬低吼。地面散著被折斷的標記枝，顯示這條路被多支巡邏隊反覆使用。玩家可沿路追蹤草籽、獸皮和箭羽材料，也能轉往野豬泥窪、斥候岩臺或溪切溝。這裡是典型伏擊走廊，任何火把都會在風中搖晃暴露位置。',
    exits: [
      { direction: 'west', targetRoomId: 'wildgrass_hills_lower_slope', description: '草徑回到低風坡' },
      { direction: 'east', targetRoomId: 'wildgrass_hills_boar_wallow', description: '泥味通往野豬泥窪' },
      { direction: 'north', targetRoomId: 'wildgrass_hills_scout_ledge', description: '草坡上方有斥候岩臺' },
      { direction: 'south', targetRoomId: 'wildgrass_hills_stream_cut', description: '低處傳來溪水聲' },
    ],
    monsters: [
      { monsterId: 'goblin_scout', maxCount: 3, respawnSeconds: 55 },
      { monsterId: 'prairie_boar', maxCount: 2, respawnSeconds: 70 },
    ],
    mapSymbol: '[草]',
    mapX: 2,
    mapY: 0,
    guardianHints: {
      creature: '草尖突然分開時，斥候箭矢通常已經搭上弦。',
      treasure: '倒伏草叢中能收集乾草籽與箭羽。',
      spirit: '高草徑把開闊丘陵變成一座會移動的迷宮。',
    },
  },

  wildgrass_hills_boar_wallow: {
    id: 'wildgrass_hills_boar_wallow',
    name: '野豬泥窪',
    zone: 'wildgrass_hills' as RoomDef['zone'],
    image: 'wildgrass_hills_boar_wallow.png',
    imagePrompt: '野豬泥窪 in wildgrass_hills, muddy wallow among dry grass, tusk marks, trampled reeds and storm clouds, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text',
    description:
      '高草徑東側的低洼地被野豬翻成一片爛泥，泥面插著斷草、白骨和被撞碎的木盾。濕泥保存了清楚足跡，有小豬、成年巨豬，也有哥布林試圖繞行後被追撞的痕跡。這裡是丘陵最早能感受到高密度怪物活動的戰鬥房，玩家可收集草根、硬皮與帶礦物味的泥塊。泥窪周圍視野低，野豬會從草牆後突然衝出；若能引牠撞上石塊，反而能打開通向果園廢址的短路。',
    exits: [
      { direction: 'west', targetRoomId: 'wildgrass_hills_tallgrass_lane', description: '乾草徑在西側' },
      { direction: 'east', targetRoomId: 'wildgrass_hills_orchard_ruin', description: '泥痕延向果園廢址' },
      { direction: 'north', targetRoomId: 'wildgrass_hills_hawk_perch', description: '上方石柱有猛禽盤旋' },
    ],
    monsters: [
      { monsterId: 'prairie_boar', maxCount: 4, respawnSeconds: 70 },
      { monsterId: 'goblin_scout', maxCount: 1, respawnSeconds: 55 },
    ],
    mapSymbol: '[泥]',
    mapX: 3,
    mapY: 0,
    guardianHints: {
      creature: '泥面冒泡時，野豬正在草牆後繞圈蓄勢。',
      treasure: '撞碎木盾下方有還能用的皮革扣環。',
      spirit: '泥窪記錄著丘陵生物每天為水源爭鬥的痕跡。',
    },
  },

  wildgrass_hills_scout_ledge: {
    id: 'wildgrass_hills_scout_ledge',
    name: '斥候岩臺',
    zone: 'wildgrass_hills' as RoomDef['zone'],
    image: 'wildgrass_hills_scout_ledge.png',
    imagePrompt: '斥候岩臺 in wildgrass_hills, rocky scout ledge above grassland, crude signal flags, bows, wind and long view, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text',
    description:
      '高草徑北面露出一片平整岩臺，能俯瞰低坡、泥窪和遠方煙火。哥布林斥候在石縫插著破布旗，用不同顏色標示旅人隊伍、商車和巡獵野獸。岩臺邊緣留有磨平的腳印與弓弦蠟，說明這裡長期被當作監視點。玩家可奪下旗號，短暫干擾丘陵巡邏，也能從望向北方的視角找到石環與雷丘位置。這裡的戰鬥容易被高低差影響，若不先清掉弓手，往下撤退會一直受到追射。',
    exits: [
      { direction: 'south', targetRoomId: 'wildgrass_hills_tallgrass_lane', description: '下坡回到高草徑' },
      { direction: 'east', targetRoomId: 'wildgrass_hills_hawk_perch', description: '岩脊延向鷹棲柱' },
      { direction: 'north', targetRoomId: 'wildgrass_hills_stone_ring', description: '北面可見石環' },
    ],
    monsters: [
      { monsterId: 'goblin_scout', maxCount: 4, respawnSeconds: 55 },
      { monsterId: 'wind_hawk', maxCount: 1, respawnSeconds: 80 },
    ],
    mapSymbol: '[臺]',
    mapX: 2,
    mapY: 1,
    guardianHints: {
      creature: '斥候會優先吹旗號求援，先打斷牠能降低壓力。',
      treasure: '旗桿底座藏著幾支品質較好的箭頭。',
      spirit: '岩臺讓哥布林把風與高度變成自己的眼睛。',
    },
  },

  wildgrass_hills_bent_oak: {
    id: 'wildgrass_hills_bent_oak',
    name: '彎橡樹',
    zone: 'wildgrass_hills' as RoomDef['zone'],
    image: 'wildgrass_hills_bent_oak.png',
    imagePrompt: '彎橡樹 in wildgrass_hills, wind-bent lone oak on grassy hill, hanging charms, roots, amber sky, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text',
    description:
      '低風坡北側有一棵被長年強風吹彎的橡樹，樹冠幾乎貼著地面，根部卻牢牢抓住岩層。枝條上掛著旅人留下的布條、獸牙和小鈴，風一吹便發出細碎聲響。這裡比周圍安靜，適合短暫避風與整理採集品，也藏著通往種籽溝和隱泉的自然線索。玩家能辨認哪些布條是求平安，哪些是哥布林用來標記獵物的暗號。若夜裡停留，樹影會像低伏巨獸，容易引來巡邏狼群與斥候。',
    exits: [
      { direction: 'south', targetRoomId: 'wildgrass_hills_lower_slope', description: '坡路回到低風坡' },
      { direction: 'east', targetRoomId: 'wildgrass_hills_seed_gully', description: '樹根旁有種籽溝' },
      { direction: 'north', targetRoomId: 'wildgrass_hills_hidden_spring', description: '濕草痕跡通向隱泉' },
    ],
    monsters: [
      { monsterId: 'wild_wolf', maxCount: 2, respawnSeconds: 75 },
      { monsterId: 'goblin_scout', maxCount: 1, respawnSeconds: 55 },
    ],
    mapSymbol: '[橡]',
    mapX: 1,
    mapY: 1,
    guardianHints: {
      creature: '鈴聲無風自響時，狼群已經繞到樹根後方。',
      treasure: '最舊的布條內側縫著一枚小銀幣。',
      spirit: '彎橡樹證明丘陵可以被風折彎，卻不一定會被折斷。',
    },
  },

  wildgrass_hills_stream_cut: {
    id: 'wildgrass_hills_stream_cut',
    name: '溪切溝',
    zone: 'wildgrass_hills' as RoomDef['zone'],
    image: 'wildgrass_hills_stream_cut.png',
    imagePrompt: '溪切溝 in wildgrass_hills, narrow stream cut through grass hill, eroded banks, stepping stones, reeds and wind, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text',
    description:
      '高草徑南側突然裂出一道被溪水切開的溝谷，清水沿著褐色土壁流下，露出草根、碎石和被沖出的舊陶片。溪岸比草地低，能暫時避開遠處斥候視線，但水聲也會掩蓋靠近的腳步。這裡是資源與探索房，玩家可採集水草、沖洗泥塊，或沿濕滑踏石前往隱泉與舊路切口。溝壁上有野豬磨牙痕和哥布林挖出的藏物洞，代表這條溪同時是生存水源與偷運路線。',
    exits: [
      { direction: 'north', targetRoomId: 'wildgrass_hills_tallgrass_lane', description: '爬回高草徑' },
      { direction: 'west', targetRoomId: 'wildgrass_hills_old_road_cut', description: '溪溝轉向舊路切口' },
      { direction: 'east', targetRoomId: 'wildgrass_hills_hidden_spring', description: '水流來自隱泉' },
    ],
    monsters: [
      { monsterId: 'prairie_boar', maxCount: 2, respawnSeconds: 70 },
      { monsterId: 'wild_wolf', maxCount: 2, respawnSeconds: 75 },
    ],
    mapSymbol: '[溪]',
    mapX: 2,
    mapY: -1,
    guardianHints: {
      creature: '溪水突然變濁時，上游可能有野獸涉水。',
      treasure: '沖刷土壁裡露出古老陶片與草藥根。',
      spirit: '溪切溝是風景下方的另一條路，安靜卻不安全。',
    },
  },

  wildgrass_hills_hawk_perch: {
    id: 'wildgrass_hills_hawk_perch',
    name: '鷹棲柱',
    zone: 'wildgrass_hills' as RoomDef['zone'],
    image: 'wildgrass_hills_hawk_perch.png',
    imagePrompt: '鷹棲柱 in wildgrass_hills, tall stone perch with wind hawks, nests, feathers and sweeping hill view, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text',
    description:
      '泥窪北側的石柱從草地裡孤立聳起，頂端築著幾座用枯枝、布片和細骨堆成的鷹巢。風之鷹沿著上升氣流盤旋，會在獵物露出破綻時從背光處俯衝。柱腳有許多被摔碎的甲片和閃亮小物，是猛禽從戰場或商路叼回的戰利品。玩家可攀爬石縫採集羽毛、尋找被偷走的任務物，也能從高處看見看火營與雷丘。這裡視野開闊但缺少掩體，遠程敵人與空中敵人會同時施壓。',
    exits: [
      { direction: 'west', targetRoomId: 'wildgrass_hills_scout_ledge', description: '岩脊回到斥候岩臺' },
      { direction: 'south', targetRoomId: 'wildgrass_hills_boar_wallow', description: '下方是野豬泥窪' },
      { direction: 'east', targetRoomId: 'wildgrass_hills_watchfire_camp', description: '煙火來自看火營' },
    ],
    monsters: [
      { monsterId: 'wind_hawk', maxCount: 4, respawnSeconds: 80 },
      { monsterId: 'goblin_scout', maxCount: 1, respawnSeconds: 55 },
    ],
    mapSymbol: '[鷹]',
    mapX: 3,
    mapY: 1,
    guardianHints: {
      creature: '鷹影消失在太陽旁時，下一次俯衝通常最危險。',
      treasure: '巢裡常有被叼回的戒指、扣環與羽毛材料。',
      spirit: '鷹棲柱讓荒草丘陵的天空也成為戰場。',
    },
  },
  wildgrass_hills_stone_ring: {
    id: 'wildgrass_hills_stone_ring',
    name: '風刻石環',
    zone: 'wildgrass_hills' as RoomDef['zone'],
    image: 'wildgrass_hills_stone_ring.png',
    imagePrompt: '風刻石環 in wildgrass_hills, ancient stone ring carved by wind, grass, runes, storm light and open hilltop, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text',
    description:
      '斥候岩臺北面有一圈古老立石，石面被風砂磨得圓滑，只剩幾道像閃電與草籽交纏的符號。高草在石環內倒伏成螺旋，中央堆著乾草、獸骨和焦黑祭灰。哥布林不敢長久停留，只會把偷來的護符丟進環中換取風向庇護。這裡是探索與任務線索房，玩家可解讀符號，得知雷丘並非自然形成，而是舊祭儀引來的風暴焦點。石環偶爾會讓聲音失真，使怪物從錯誤方向靠近。',
    exits: [
      { direction: 'south', targetRoomId: 'wildgrass_hills_scout_ledge', description: '下坡回到斥候岩臺' },
      { direction: 'east', targetRoomId: 'wildgrass_hills_thunder_mound', description: '石環缺口指向雷丘' },
      { direction: 'west', targetRoomId: 'wildgrass_hills_seed_gully', description: '草籽溝在西側' },
    ],
    monsters: [
      { monsterId: 'wind_hawk', maxCount: 2, respawnSeconds: 80 },
      { monsterId: 'goblin_warrior', maxCount: 2, respawnSeconds: 65 },
    ],
    mapSymbol: '[環]',
    mapX: 2,
    mapY: 2,
    guardianHints: {
      creature: '石環內的回聲會誤導方向，注意草葉真正倒伏處。',
      treasure: '祭灰底下埋著幾枚被風磨亮的護符。',
      spirit: '風刻石環保存著丘陵比哥布林更古老的記憶。',
    },
  },

  wildgrass_hills_orchard_ruin: {
    id: 'wildgrass_hills_orchard_ruin',
    name: '果園廢址',
    zone: 'wildgrass_hills' as RoomDef['zone'],
    image: 'wildgrass_hills_orchard_ruin.png',
    imagePrompt: '果園廢址 in wildgrass_hills, abandoned hill orchard, dead fruit trees, broken fence, yellow grass and goblin tracks, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text',
    description:
      '泥窪東面仍能看見一片舊果園的輪廓，矮牆倒塌，乾枯果樹被高草吞沒，只剩幾顆酸澀野果掛在扭曲枝頭。樹幹上刻著農戶撤離前留下的數字，旁邊卻被哥布林加上粗糙塗鴉，標記可藏箭、可埋伏和可燒毀的位置。這裡是資源與敘事房，玩家能採集野果、乾木與舊農具，也能追查荒草丘陵從農地變成戰場的過程。果園視線被樹影切碎，野豬會從破籬後衝出，哥布林則躲在倒木後投石。',
    exits: [
      { direction: 'west', targetRoomId: 'wildgrass_hills_boar_wallow', description: '泥路回到野豬泥窪' },
      { direction: 'east', targetRoomId: 'wildgrass_hills_goblin_blind', description: '樹後有哥布林伏棚' },
      { direction: 'north', targetRoomId: 'wildgrass_hills_watchfire_camp', description: '煙味從北面傳來' },
    ],
    monsters: [
      { monsterId: 'prairie_boar', maxCount: 2, respawnSeconds: 70 },
      { monsterId: 'goblin_warrior', maxCount: 2, respawnSeconds: 65 },
    ],
    mapSymbol: '[園]',
    mapX: 4,
    mapY: 0,
    guardianHints: {
      creature: '倒木後的草葉抖動時，哥布林戰士正在換位。',
      treasure: '空心果樹裡藏著農戶沒帶走的銅幣袋。',
      spirit: '果園廢址提醒旅人，這裡曾經不是荒地。',
    },
  },

  wildgrass_hills_goblin_blind: {
    id: 'wildgrass_hills_goblin_blind',
    name: '哥布林伏棚',
    zone: 'wildgrass_hills' as RoomDef['zone'],
    image: 'wildgrass_hills_goblin_blind.png',
    imagePrompt: '哥布林伏棚 in wildgrass_hills, crude goblin hunting blind hidden in grass and orchard debris, bows, traps, smoke, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text',
    description:
      '果園廢址東側架著幾座低矮伏棚，用乾草、破布和果樹枝偽裝成自然草堆。棚內擺著短弓、投石袋、捕獸夾和簡陋骨笛，地面還畫著附近路線的粗略地圖。這是哥布林斥候和戰士混合出沒的伏擊房，玩家若直接穿過，會同時觸發陷阱與遠程攻擊。仔細拆除伏棚可取得巡邏線索，得知看火營、酋長脊與雷丘之間如何互相傳訊。棚後藏有一條被草蓋住的小徑，可以繞開部分主路危險。',
    exits: [
      { direction: 'west', targetRoomId: 'wildgrass_hills_orchard_ruin', description: '回到果園廢址' },
      { direction: 'north', targetRoomId: 'wildgrass_hills_watchfire_camp', description: '伏棚通向看火營' },
      { direction: 'east', targetRoomId: 'wildgrass_hills_windmill_shell', description: '草徑延向風車空殼' },
    ],
    monsters: [
      { monsterId: 'goblin_scout', maxCount: 3, respawnSeconds: 55 },
      { monsterId: 'goblin_warrior', maxCount: 3, respawnSeconds: 65 },
    ],
    mapSymbol: '[伏]',
    mapX: 5,
    mapY: 0,
    guardianHints: {
      creature: '骨笛響起時，附近伏棚會一起現身射擊。',
      treasure: '棚底地圖可標出一條繞往酋長脊的支路。',
      spirit: '伏棚顯示哥布林已把丘陵當作自己的獵場經營。',
    },
  },

  wildgrass_hills_thunder_mound: {
    id: 'wildgrass_hills_thunder_mound',
    name: '雷擊丘',
    zone: 'wildgrass_hills' as RoomDef['zone'],
    image: 'wildgrass_hills_thunder_mound.png',
    imagePrompt: '雷擊丘 in wildgrass_hills, storm-struck mound, blackened grass, cracked stones, lightning scars and windy sky, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text',
    description:
      '風刻石環東側隆起一座焦黑小丘，草根像被雷火燒成細炭，石縫仍殘留淡淡藍光。每逢雲影掠過，丘頂便傳來低沉轟鳴，讓金屬裝備微微發麻。哥布林把這裡當成試膽地點，會把俘虜綁在焦木旁等待風暴裁決。這裡是大型事件前置房，玩家可收集雷痕石、調查祭儀殘留，並理解荒草丘陵的風暴力量為何逐漸失控。若在雷鳴時戰鬥，風之鷹與哥布林會變得更躁動，整個戰場也更難掌控。',
    exits: [
      { direction: 'west', targetRoomId: 'wildgrass_hills_stone_ring', description: '焦草路回到石環' },
      { direction: 'east', targetRoomId: 'wildgrass_hills_chief_ridge', description: '雷痕延向酋長脊' },
      { direction: 'south', targetRoomId: 'wildgrass_hills_watchfire_camp', description: '坡下是看火營' },
    ],
    monsters: [
      { monsterId: 'wind_hawk', maxCount: 3, respawnSeconds: 80 },
      { monsterId: 'goblin_warrior', maxCount: 2, respawnSeconds: 65 },
    ],
    mapSymbol: '[雷]',
    mapX: 3,
    mapY: 2,
    guardianHints: {
      creature: '雷鳴後短暫靜默時，敵人通常會一起衝鋒。',
      treasure: '焦黑石縫裡能挖出帶電的雷痕石。',
      spirit: '雷擊丘像天空反覆敲在地面上的警告。',
    },
  },

  wildgrass_hills_seed_gully: {
    id: 'wildgrass_hills_seed_gully',
    name: '種籽溝',
    zone: 'wildgrass_hills' as RoomDef['zone'],
    image: 'wildgrass_hills_seed_gully.png',
    imagePrompt: '種籽溝 in wildgrass_hills, sheltered gully full of grass seeds, seed heads, bent oak roots and warm wind, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text',
    description:
      '彎橡樹東側的淺溝聚滿被風吹落的草籽，金黃籽穗堆在石縫、樹根和小水窪邊，像一條細碎河流。這裡比主坡安靜，許多小動物與野豬都會來翻找食物，也吸引哥布林收集乾籽製作引火包。玩家可採集草籽、草藥根與乾燥纖維，完成補給或製作任務。溝底有幾處被刻意鋪平，像是舊農人曾經用來晾種的地方。若仔細尋找，還能找到通往石環的古老腳印，證明此地曾被祭儀使用。',
    exits: [
      { direction: 'west', targetRoomId: 'wildgrass_hills_bent_oak', description: '樹根路回到彎橡樹' },
      { direction: 'east', targetRoomId: 'wildgrass_hills_stone_ring', description: '舊腳印通向石環' },
      { direction: 'north', targetRoomId: 'wildgrass_hills_broken_totem', description: '溝尾立著斷圖騰' },
    ],
    monsters: [
      { monsterId: 'prairie_boar', maxCount: 2, respawnSeconds: 70 },
      { monsterId: 'wild_wolf', maxCount: 2, respawnSeconds: 75 },
    ],
    mapSymbol: '[籽]',
    mapX: 1,
    mapY: 2,
    guardianHints: {
      creature: '草籽突然大片飛起時，野獸正在溝底奔跑。',
      treasure: '最乾燥的籽穗可作為火種與藥材基底。',
      spirit: '種籽溝保留著荒地重新生長的能力。',
    },
  },

  wildgrass_hills_watchfire_camp: {
    id: 'wildgrass_hills_watchfire_camp',
    name: '看火營',
    zone: 'wildgrass_hills' as RoomDef['zone'],
    image: 'wildgrass_hills_watchfire_camp.png',
    imagePrompt: '看火營 in wildgrass_hills, goblin watchfire camp on hill saddle, smoke, hide tents, weapon racks and dry grass, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text',
    description:
      '鷹棲柱與雷擊丘之間的鞍部搭著一座哥布林看火營，幾堆煙火用濕草悶燒，能把信號送到酋長脊和伏棚。營地用獸皮、破帆布和果園木板搭成，武器架上掛滿短矛、投石袋與偷來的銅鍋。這裡是丘陵中段的高密度戰鬥與任務房，玩家可以破壞煙火、奪取巡邏令牌，或解救被綁在木柱旁的旅人。營地四周沒有城牆，卻被高草與陷坑保護；若沒有先觀察煙向，很容易從錯誤入口闖進包圍圈。',
    exits: [
      { direction: 'west', targetRoomId: 'wildgrass_hills_hawk_perch', description: '石柱在西側' },
      { direction: 'south', targetRoomId: 'wildgrass_hills_orchard_ruin', description: '坡下是果園廢址' },
      { direction: 'east', targetRoomId: 'wildgrass_hills_windmill_shell', description: '破路通向風車空殼' },
      { direction: 'north', targetRoomId: 'wildgrass_hills_thunder_mound', description: '焦草坡通向雷擊丘' },
    ],
    monsters: [
      { monsterId: 'goblin_scout', maxCount: 3, respawnSeconds: 55 },
      { monsterId: 'goblin_warrior', maxCount: 4, respawnSeconds: 65 },
    ],
    mapSymbol: '[火]',
    mapX: 4,
    mapY: 1,
    guardianHints: {
      creature: '先熄掉煙火可降低附近哥布林增援速度。',
      treasure: '巡邏令牌掛在最大帳篷的骨釘上。',
      spirit: '看火營是哥布林掌控丘陵節奏的鼓點。',
    },
  },

  wildgrass_hills_windmill_shell: {
    id: 'wildgrass_hills_windmill_shell',
    name: '風車空殼',
    zone: 'wildgrass_hills' as RoomDef['zone'],
    image: 'wildgrass_hills_windmill_shell.png',
    imagePrompt: '風車空殼 in wildgrass_hills, ruined hill windmill shell, broken sails, gears, dry grass and goblin marks, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text',
    description:
      '看火營東側殘留一座舊風車，木翼早被強風吹斷，只剩石塔空殼和卡住的齒輪。塔內牆上刻著農戶收成記號，外牆則被哥布林塗上戰利品數量。風穿過破窗時會帶動斷齒輪發出沉重敲擊，像有人在塔內拖著鎖鏈。這裡是探索與捷徑房，玩家能修復部分機關，放下通往酋長脊的繩梯，也能找到失落農具與舊倉庫鑰匙。塔內狹窄，哥布林戰士會利用樓梯轉角逼近，風之鷹則從破窗撲入。',
    exits: [
      { direction: 'west', targetRoomId: 'wildgrass_hills_watchfire_camp', description: '煙火營在西側' },
      { direction: 'south', targetRoomId: 'wildgrass_hills_goblin_blind', description: '草棚伏點在南側' },
      { direction: 'north', targetRoomId: 'wildgrass_hills_chief_ridge', description: '塔後繩梯通向酋長脊' },
    ],
    monsters: [
      { monsterId: 'goblin_warrior', maxCount: 3, respawnSeconds: 65 },
      { monsterId: 'wind_hawk', maxCount: 2, respawnSeconds: 80 },
    ],
    mapSymbol: '[車]',
    mapX: 5,
    mapY: 1,
    guardianHints: {
      creature: '齒輪聲突然停住時，塔內敵人正在等你轉角。',
      treasure: '石塔二層藏著舊倉庫鑰匙和農具零件。',
      spirit: '風車空殼讓人看見丘陵被放棄以前的生活。',
    },
  },

  wildgrass_hills_hidden_spring: {
    id: 'wildgrass_hills_hidden_spring',
    name: '隱泉',
    zone: 'wildgrass_hills' as RoomDef['zone'],
    image: 'wildgrass_hills_hidden_spring.png',
    imagePrompt: '隱泉 in wildgrass_hills, hidden spring under bent grass and stones, clear water, reeds, animal tracks, soft light, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text',
    description:
      '彎橡樹北面的濕草一路引到一處被石塊遮住的泉眼，清水從岩縫滲出，形成小小水潭。潭邊有野豬、狼、鷹和哥布林混雜的足跡，代表所有生物都知道這是丘陵最穩定的水源。泉水清甜，卻在雷雨前會泛出細小氣泡，像地下也在回應雷擊丘。這裡是補給與事件房，玩家可取水、採集水草，或發現被藏在石後的求救布條。若在此休息太久，爭水的野獸會陸續靠近。',
    exits: [
      { direction: 'south', targetRoomId: 'wildgrass_hills_bent_oak', description: '濕草路回到彎橡樹' },
      { direction: 'west', targetRoomId: 'wildgrass_hills_stream_cut', description: '泉水流入溪切溝' },
      { direction: 'east', targetRoomId: 'wildgrass_hills_broken_totem', description: '石後小徑通向斷圖騰' },
    ],
    monsters: [
      { monsterId: 'prairie_boar', maxCount: 2, respawnSeconds: 70 },
      { monsterId: 'wild_wolf', maxCount: 2, respawnSeconds: 75 },
    ],
    mapSymbol: '[泉]',
    mapX: 0,
    mapY: 2,
    guardianHints: {
      creature: '水面連續冒泡時，附近生物都會變得不安。',
      treasure: '石後布條指向一名失蹤旅人的藏身處。',
      spirit: '隱泉是荒草丘陵少數還願意給予的地方。',
    },
  },

  wildgrass_hills_broken_totem: {
    id: 'wildgrass_hills_broken_totem',
    name: '斷圖騰',
    zone: 'wildgrass_hills' as RoomDef['zone'],
    image: 'wildgrass_hills_broken_totem.png',
    imagePrompt: '斷圖騰 in wildgrass_hills, broken wooden totem on windy hill, charms, skulls, grass seeds and storm signs, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text',
    description:
      '隱泉東側的小丘立著半截斷裂圖騰，木面刻有草籽、風線和張口獸首，頂端被雷火劈黑。哥布林在圖騰周圍插上獸骨，試圖把古老標記改造成部落戰旗，但每次大風都會把骨牌吹散。這裡是精英前置與任務線索房，玩家能比較圖騰符號與石環刻痕，推斷丘陵曾有守風祭儀。斷木內部藏著空腔，裡面有一卷被油布保護的舊誓詞。取走誓詞會引來巡邏隊，也會打開通往風暴草冠的線索。',
    exits: [
      { direction: 'west', targetRoomId: 'wildgrass_hills_hidden_spring', description: '石徑回到隱泉' },
      { direction: 'south', targetRoomId: 'wildgrass_hills_seed_gully', description: '下坡是種籽溝' },
      { direction: 'east', targetRoomId: 'wildgrass_hills_stormgrass_crown', description: '草脊通向風暴草冠' },
    ],
    monsters: [
      { monsterId: 'goblin_warrior', maxCount: 3, respawnSeconds: 65 },
      { monsterId: 'wind_hawk', maxCount: 2, respawnSeconds: 80 },
    ],
    mapSymbol: '[騰]',
    mapX: 1,
    mapY: 3,
    guardianHints: {
      creature: '骨牌被風吹成圓圈時，巡邏隊快到了。',
      treasure: '圖騰空腔中藏著守風誓詞。',
      spirit: '斷圖騰顯示守護信仰已被部落戰旗取代。',
    },
  },

  wildgrass_hills_chief_ridge: {
    id: 'wildgrass_hills_chief_ridge',
    name: '酋長脊',
    zone: 'wildgrass_hills' as RoomDef['zone'],
    image: 'wildgrass_hills_chief_ridge.png',
    imagePrompt: '酋長脊 in wildgrass_hills, ridge camp of goblin chief, banners, bone throne, storm clouds and dry grass, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text',
    description:
      '雷擊丘東側的長脊被哥布林改造成首領營地，骨旗沿著稜線排列，中央有一張用野豬獠牙和舊車輪拼成的粗糙王座。從這裡可以俯瞰看火營、風車和大片高草，任何闖入者都很難避開巡邏目光。酋長會在風最大時召集戰士，讓吼聲順著山脊傳遍丘陵。王座旁堆著從旅人身上搶來的路牌、鍋具和破甲，像一座炫耀戰利品的小山。這裡是精英戰鬥房，玩家可挑戰哥布林首領、奪取部落號角，或破壞控制巡邏的旗令。若未先削弱看火營與伏棚，這場戰鬥會持續召來支援，直到旗號全被奪下為止才會停止。',
    exits: [
      { direction: 'west', targetRoomId: 'wildgrass_hills_thunder_mound', description: '焦草脊回到雷擊丘' },
      { direction: 'south', targetRoomId: 'wildgrass_hills_windmill_shell', description: '繩梯下到風車空殼' },
      { direction: 'east', targetRoomId: 'wildgrass_hills_stormgrass_crown', description: '最高草冠在東側' },
    ],
    monsters: [
      { monsterId: 'goblin_chief', maxCount: 1, respawnSeconds: 180 },
      { monsterId: 'goblin_warrior', maxCount: 3, respawnSeconds: 65 },
      { monsterId: 'goblin_scout', maxCount: 2, respawnSeconds: 55 },
    ],
    mapSymbol: '[酋]',
    mapX: 4,
    mapY: 2,
    guardianHints: {
      creature: '酋長吹響號角前打斷，可避免額外戰士加入。',
      treasure: '骨座後方掛著控制巡邏旗令的繩結。',
      spirit: '酋長脊是哥布林把恐懼變成統治的地方。',
    },
  },

  wildgrass_hills_stormgrass_crown: {
    id: 'wildgrass_hills_stormgrass_crown',
    name: '風暴草冠',
    zone: 'wildgrass_hills' as RoomDef['zone'],
    image: 'wildgrass_hills_stormgrass_crown.png',
    imagePrompt: '風暴草冠 in wildgrass_hills, highest crown of storm-tossed grass, lightning sky, ancient marker stones, wild banners, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text',
    description:
      '酋長脊東端升到荒草丘陵最高處，整片草冠被狂風壓成巨大旋渦，像一頂不停轉動的金色王冠。中央立著幾塊古老界石，石縫間有雷痕、草籽和被綁住的部落旗。當雲層低垂時，風會在草冠中心形成肉眼可見的漏斗，將聲音、灰燼與羽毛全捲向天空。界石底部還有被草根纏住的舊祭盤，盤面刻著安撫風暴的步驟，只是關鍵符號被哥布林刀痕刮壞。這裡是荒草丘陵的大型事件鉤子與最終地標，玩家可用守風誓詞安撫風暴，也可擊敗首領後拆除旗幟，讓丘陵巡邏失去統一指揮。若選擇強行採集雷草，整片草冠會引來猛禽與殘餘戰士。',
    exits: [
      { direction: 'west', targetRoomId: 'wildgrass_hills_chief_ridge', description: '山脊回到酋長營地' },
      { direction: 'south', targetRoomId: 'wildgrass_hills_broken_totem', description: '草脊回到斷圖騰' },
    ],
    monsters: [
      { monsterId: 'wind_hawk', maxCount: 3, respawnSeconds: 80 },
      { monsterId: 'goblin_chief', maxCount: 1, respawnSeconds: 240 },
      { monsterId: 'goblin_warrior', maxCount: 2, respawnSeconds: 65 },
    ],
    mapSymbol: '[冠]',
    mapX: 5,
    mapY: 3,
    guardianHints: {
      creature: '草冠中央形成漏斗時，空中敵人會連續俯衝。',
      treasure: '雷草只在界石陰影內保持完整形態。',
      spirit: '風暴草冠是整片丘陵的怒氣與生命力交會處。',
    },
  },

  wildgrass_hills_old_road_cut: {
    id: 'wildgrass_hills_old_road_cut',
    name: '舊路切口',
    zone: 'wildgrass_hills' as RoomDef['zone'],
    image: 'wildgrass_hills_old_road_cut.png',
    imagePrompt: '舊路切口 in wildgrass_hills, eroded old road cut below grass hills, milestone, wagon ruts, dusk wind, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text',
    description:
      '防風柵門南側有一段被溪水和車輪切出的舊路，路面低於草坡，兩側土壁露出層層壓實的輪轍。半倒里程碑標著通往西境村落的方向，旁邊還有商隊臨時修車留下的鐵釘與木楔。這裡是荒草丘陵的撤離與捷徑交通房，玩家可從溪切溝繞回入口，也能在完成酋長脊事件後護送旅人離開。雖然比主坡安全，舊路仍會被流竄野獸利用；若忽視土壁上的新爪痕，回程也可能遭遇伏擊。',
    exits: [
      { direction: 'north', targetRoomId: 'wildgrass_hills_windbreak_gate', description: '坡上是防風柵門' },
      { direction: 'east', targetRoomId: 'wildgrass_hills_stream_cut', description: '溪溝連向高草徑下方' },
    ],
    monsters: [
      { monsterId: 'wild_wolf', maxCount: 2, respawnSeconds: 75 },
      { monsterId: 'goblin_scout', maxCount: 1, respawnSeconds: 55 },
    ],
    mapSymbol: '[路]',
    mapX: 0,
    mapY: -1,
    guardianHints: {
      creature: '土壁上出現新爪痕時，回程路線已被盯上。',
      treasure: '里程碑背面嵌著商隊留下的緊急路費。',
      spirit: '舊路切口讓丘陵仍保有一條通向人煙的脈絡。',
    },
  },
  mist_harbor_fog_gate: {
    id: 'mist_harbor_fog_gate',
    name: '霧港城門',
    zone: 'mist_harbor' as RoomDef['zone'],
    image: 'mist_harbor_fog_gate.png',
    imagePrompt: '霧港城門 in mist_harbor, harbor town stone gate in heavy sea fog, wet cobbles, lanterns, gull silhouettes, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text',
    description:
      '霧港城門不是高牆要塞，而是一座跨在濕滑石路上的拱門，門頂掛著被海鹽腐蝕的銅鐘。霧從港灣一路推進城內，讓旅人只能看見近處燈火與地上閃亮水痕。守門人會在這裡檢查船票、旅店名牌與貨運封條，也提醒新來者別在退潮前靠近外防波堤。這裡是霧港的入口與回程錨點，玩家可接到尋船、護送與失物任務，並從路牌判斷市集、傳送燈塔與舊海門方向。城門旁的公告板每天都會被潮氣弄皺，卻仍貼滿急件；若公告被撕下，通常代表某艘船的消息被人刻意封住。門洞下方還留著昨夜車輪壓出的深痕。',
    exits: [
      { direction: 'east', targetRoomId: 'mist_harbor_tide_plaza', description: '濕石路通向潮汐廣場' },
      { direction: 'south', targetRoomId: 'mist_harbor_sea_gate', description: '城牆坡道通往舊海門' },
    ],
    mapSymbol: '[門]',
    mapX: 0,
    mapY: 0,
    guardianHints: {
      creature: '霧港城門雖安全，但可疑腳印常從公告板旁消失。',
      treasure: '公告板背後夾著幾張未領取的貨運憑單。',
      spirit: '城門把陸路旅人交給海霧，也把霧港的規矩交給旅人。',
    },
  },

  mist_harbor_tide_plaza: {
    id: 'mist_harbor_tide_plaza',
    name: '潮汐廣場',
    zone: 'mist_harbor' as RoomDef['zone'],
    image: 'mist_harbor_tide_plaza.png',
    imagePrompt: '潮汐廣場 in mist_harbor, wet harbor town plaza with tide clock, lantern poles, misty market arches, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text',
    description:
      '潮汐廣場鋪著深灰石板，中央立著一座以浮標、齒輪和月相盤組成的潮鐘。每當潮位改變，鐘內銅錘便敲出低沉聲響，提醒商人調整船期，也提醒漁民避開暗流。廣場四周連著魚市、海關、旅店與傳送燈塔，是霧港最常被任務、交易與找人流程使用的核心房。街邊攤販用油布蓋住貨箱，霧中能聞到鹽、焦糖、魚腥與濕繩混合的味道。玩家可在此確認城市路線、等待 NPC 會合，或從潮鐘記錄推斷某艘船是否在夜裡偷偷進港。廣場石縫裡積著退潮留下的白鹽，像一圈圈未完成的航線。每次鐘響都會讓霧裡的人群短暫停步。',
    exits: [
      { direction: 'west', targetRoomId: 'mist_harbor_fog_gate', description: '濕路回到城門' },
      { direction: 'north', targetRoomId: 'mist_harbor_portal_lantern', description: '藍燈指向傳送燈塔' },
      { direction: 'east', targetRoomId: 'mist_harbor_fish_market', description: '魚腥與叫賣聲來自魚市' },
      { direction: 'south', targetRoomId: 'mist_harbor_customs_house', description: '石階通往海關廳' },
    ],
    mapSymbol: '[廣]',
    mapX: 1,
    mapY: 0,
    guardianHints: {
      creature: '廣場安全，但潮鐘異常會引出港務任務。',
      treasure: '潮鐘底座藏著被人刮花的船名清單。',
      spirit: '潮汐廣場是霧港的節拍器，所有行程都跟著它呼吸。',
    },
  },

  mist_harbor_portal_lantern: {
    id: 'mist_harbor_portal_lantern',
    name: '傳送燈塔',
    zone: 'mist_harbor' as RoomDef['zone'],
    image: 'mist_harbor_portal_lantern.png',
    imagePrompt: '傳送燈塔 in mist_harbor, blue portal lantern tower in harbor fog, rune mirrors, wet steps, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text',
    description:
      '潮汐廣場北側矗立著一座短塔，塔頂不是火焰，而是一盞被符文鏡片包住的藍色傳送燈。燈光穿過海霧後像水波一樣擴散，能與公共傳送網路對齊，讓旅人從遠方城市抵達霧港。塔內石階總是潮濕，牆上掛滿各地港印與傳送費率牌。這裡是霧港的主要傳送節點，玩家可使用公共傳送、設定回城位置、查詢船運目的地，也能接到修復鏡片與追查錯誤傳送記錄的任務。若燈色偏綠，代表霧港外海正在出現異常魔潮；守塔人會立刻封存當日名冊，等待可靠冒險者核對。塔底水槽會收集傳送後落下的鹽霧結晶。',
    exits: [
      { direction: 'south', targetRoomId: 'mist_harbor_tide_plaza', description: '石階回到潮汐廣場' },
      { direction: 'east', targetRoomId: 'mist_harbor_chart_archive', description: '塔後小門通向海圖檔案室' },
      { direction: 'north', targetRoomId: 'mist_harbor_lighthouse_stairs', description: '燈塔橋連往燈室階梯' },
    ],
    mapSymbol: '[傳]',
    mapX: 1,
    mapY: 1,
    guardianHints: {
      creature: '傳送燈塔沒有怪物，但燈色異常意味著外海副本開啟。',
      treasure: '費率牌背後壓著一枚過期港印。',
      spirit: '傳送燈把霧港從偏遠港鎮變成東海交通節點。',
    },
  },

  mist_harbor_customs_house: {
    id: 'mist_harbor_customs_house',
    name: '海關廳',
    zone: 'mist_harbor' as RoomDef['zone'],
    image: 'mist_harbor_customs_house.png',
    imagePrompt: '海關廳 in mist_harbor, harbor customs hall with ledgers, wet crates, brass scales, foggy windows, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text',
    description:
      '海關廳是一棟低矮石屋，窗戶常被霧水糊成乳白色，屋內卻點著明亮油燈。長桌上攤著貨運簿、關稅印章、銅秤與未拆封的潮濕木箱，港務員在此核對每一批進出霧港的船貨。這裡是服務與任務房，玩家可登記貿易貨物、查詢船名、繳納港稅，也能接到追查走私印章或尋找失蹤貨箱的委託。牆上掛著近三十日的進港表，其中幾行被墨水暈開，像有人刻意在霧夜改過紀錄。通往倉庫與船長辦公室的門永遠有人盯著。',
    exits: [
      { direction: 'north', targetRoomId: 'mist_harbor_tide_plaza', description: '台階回到潮汐廣場' },
      { direction: 'east', targetRoomId: 'mist_harbor_warehouse_nine', description: '封條門通往九號倉' },
      { direction: 'south', targetRoomId: 'mist_harbor_captains_office', description: '內廊通向船長辦公室' },
    ],
    mapSymbol: '[關]',
    mapX: 1,
    mapY: -1,
    guardianHints: {
      creature: '海關廳安全，但錯誤帳頁會引出走私線索。',
      treasure: '銅秤底座刻著一串倉庫暗號。',
      spirit: '海關廳把霧港的混亂壓進表格與印章裡。',
    },
  },

  mist_harbor_fish_market: {
    id: 'mist_harbor_fish_market',
    name: '晨霧魚市',
    zone: 'mist_harbor' as RoomDef['zone'],
    image: 'mist_harbor_fish_market.png',
    imagePrompt: '晨霧魚市 in mist_harbor, misty fish market with wet stalls, lanterns, silver fish, shouting vendors, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text',
    description:
      '晨霧魚市從天未亮就開始吵鬧，濕木桌上堆著銀鱗魚、黑殼蟹、海草籃和仍在滴水的網袋。攤販用鐵鉤敲桶喊價，廚師、藥師與水手在霧裡互相討價還價。這裡是交易與採集交付房，玩家可購買食材、交付釣魚成果、尋找海怪目擊者，也能從異常魚獲判斷外海副本狀況。魚市後方有一條滑膩小巷通往走私者活動區，地上常混著魚血與看不清來源的黑色油跡。若某天魚市突然安靜，通常代表霧裡出了大事。',
    exits: [
      { direction: 'west', targetRoomId: 'mist_harbor_tide_plaza', description: '叫賣聲回到廣場' },
      { direction: 'east', targetRoomId: 'mist_harbor_sailmakers_row', description: '帆布棚連向帆匠街' },
      { direction: 'south', targetRoomId: 'mist_harbor_smugglers_alley', description: '濕滑窄巷通往走私巷' },
    ],
    mapSymbol: '[魚]',
    mapX: 2,
    mapY: 0,
    guardianHints: {
      creature: '魚市安全，但異常魚獲會觸發外海調查。',
      treasure: '最大魚桶底部有被海水泡脹的走私便條。',
      spirit: '晨霧魚市是霧港醒來的第一聲。',
    },
  },

  mist_harbor_sailmakers_row: {
    id: 'mist_harbor_sailmakers_row',
    name: '帆匠街',
    zone: 'mist_harbor' as RoomDef['zone'],
    image: 'mist_harbor_sailmakers_row.png',
    imagePrompt: '帆匠街 in mist_harbor, narrow sailmaker street with hanging canvas, ropes, needles, fog and harbor lamps, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text',
    description:
      '帆匠街兩側掛滿正在晾乾的帆布，厚重布面吸飽海霧，像一排排低垂白牆。工匠坐在棚下補縫破洞、測試防水蠟，也替冒險者修補背包、斗篷與船用繩索。這裡是城鎮服務房，玩家可購買繩索、修理航海裝備、委託製作帆布包，或從老帆匠口中聽到風向與失事船的傳聞。街道盡頭接著船匠塢，腳下排水溝則會把細碎布條沖向走私巷。霧重時，垂帆之間的人影很難分辨，適合秘密會面，也適合偷換貨籤。',
    exits: [
      { direction: 'west', targetRoomId: 'mist_harbor_fish_market', description: '帆布棚回到魚市' },
      { direction: 'east', targetRoomId: 'mist_harbor_shipwright_yard', description: '木槌聲來自船匠塢' },
      { direction: 'south', targetRoomId: 'mist_harbor_guild_quay', description: '繩梯下到公會碼頭' },
    ],
    mapSymbol: '[帆]',
    mapX: 3,
    mapY: 0,
    guardianHints: {
      creature: '帆匠街安全，但霧中人影可能是任務接頭人。',
      treasure: '防水蠟桶旁有一卷品質極好的備用帆線。',
      spirit: '帆匠街修補的不只是船帆，也是霧港每天出海的信心。',
    },
  },

  mist_harbor_shipwright_yard: {
    id: 'mist_harbor_shipwright_yard',
    name: '船匠塢',
    zone: 'mist_harbor' as RoomDef['zone'],
    image: 'mist_harbor_shipwright_yard.png',
    imagePrompt: '船匠塢 in mist_harbor, harbor shipwright yard with half-built boats, tar pots, cranes, foggy slips, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text',
    description:
      '船匠塢靠著內港斜坡，半修好的小船被木架支起，船腹刷著新鮮焦油，旁邊堆滿橡木板、鉚釘、桅杆和滑輪。工頭用粉筆在船殼上標出裂縫，學徒則在霧裡推動沉重吊臂。這裡是修理與交通準備房，玩家可修補船隻、委託打造渡船零件、學習外海航線需求，也能接到尋找失竊龍骨木或測試新船的任務。塢邊水面經常漂來來歷不明的碎板，若板上還有新鮮爪痕，代表某條近海航線剛剛出事。',
    exits: [
      { direction: 'west', targetRoomId: 'mist_harbor_sailmakers_row', description: '帆匠街在西側' },
      { direction: 'south', targetRoomId: 'mist_harbor_ferry_pier', description: '滑道下到渡船棧橋' },
      { direction: 'east', targetRoomId: 'mist_harbor_breakwater_end', description: '外側木道通往防波堤' },
    ],
    mapSymbol: '[匠]',
    mapX: 4,
    mapY: 0,
    guardianHints: {
      creature: '船匠塢安全，但碎板爪痕會開啟海獸事件。',
      treasure: '焦油桶後有一批被藏起來的龍骨木樣本。',
      spirit: '船匠塢讓霧港即使被霧困住，也仍能相信下一次出航。',
    },
  },

  mist_harbor_anchor_inn: {
    id: 'mist_harbor_anchor_inn',
    name: '沉錨旅店',
    zone: 'mist_harbor' as RoomDef['zone'],
    image: 'mist_harbor_anchor_inn.png',
    imagePrompt: '沉錨旅店 in mist_harbor, cozy harbor inn with anchor sign, wet cloaks, hearth, sailors in fogged windows, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text',
    description:
      '沉錨旅店的招牌是一只真正的舊鐵錨，吊在門樑下隨海風輕晃。屋內爐火溫暖，牆上掛滿濕斗篷、船旗與各地酒杯，水手們圍著長桌交換航線消息。這裡是休息、存點與社交服務房，玩家可租房恢復、查看留言、接受護送船員或尋人委託，也能從吟遊者口中聽到霧港外海的副本傳說。櫃台後有一本厚厚住客簿，最近幾頁的名字被人撕掉，留下的紙屑帶著海關封蠟味。旅店後門通往鹽診所，方便受傷水手夜裡求醫。',
    exits: [
      { direction: 'east', targetRoomId: 'mist_harbor_clinic_of_salt', description: '後廊通往鹽診所' },
      { direction: 'south', targetRoomId: 'mist_harbor_guild_quay', description: '木階下到公會碼頭' },
      { direction: 'west', targetRoomId: 'mist_harbor_tide_plaza', description: '雨棚路回到潮汐廣場' },
    ],
    mapSymbol: '[宿]',
    mapX: 2,
    mapY: 1,
    guardianHints: {
      creature: '旅店安全，但住客簿缺頁會牽出尋人任務。',
      treasure: '舊鐵錨背面刻著一條被遺忘的航線。',
      spirit: '沉錨旅店讓每個漂泊者暫時承認自己需要靠岸。',
    },
  },

  mist_harbor_clinic_of_salt: {
    id: 'mist_harbor_clinic_of_salt',
    name: '鹽診所',
    zone: 'mist_harbor' as RoomDef['zone'],
    image: 'mist_harbor_clinic_of_salt.png',
    imagePrompt: '鹽診所 in mist_harbor, small harbor clinic with salt jars, bandages, sea herbs, fogged glass, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text',
    description:
      '鹽診所聞起來像海鹽、藥草和燒熱金屬。白牆上掛著繃帶、魚骨夾板、止血鉗與一排排標有潮汐日期的鹽罐，醫師相信不同潮位採來的鹽能處理不同傷口。這裡是治療與藥品服務房，玩家可購買補給、處理中毒或凍傷、交付海草藥材，也能接到尋找失蹤病患或調查奇怪海霧病的任務。診所窗台放著幾瓶發藍的霧水樣本，偶爾會自行凝結成薄冰。若玩家從外海副本回來，醫師會要求先在此檢查，避免把未知病症帶進城裡。',
    exits: [
      { direction: 'west', targetRoomId: 'mist_harbor_anchor_inn', description: '後廊回到沉錨旅店' },
      { direction: 'east', targetRoomId: 'mist_harbor_guild_quay', description: '藥箱路通向公會碼頭' },
      { direction: 'north', targetRoomId: 'mist_harbor_chart_archive', description: '窄梯通向海圖檔案室' },
    ],
    mapSymbol: '[診]',
    mapX: 3,
    mapY: 1,
    guardianHints: {
      creature: '診所安全，但霧水樣本會提示外海異常。',
      treasure: '最上層鹽罐裡藏著一枚醫師用的急救徽章。',
      spirit: '鹽診所把海帶來的傷口，一個個縫回岸上的生活。',
    },
  },

  mist_harbor_guild_quay: {
    id: 'mist_harbor_guild_quay',
    name: '冒險者碼頭',
    zone: 'mist_harbor' as RoomDef['zone'],
    image: 'mist_harbor_guild_quay.png',
    imagePrompt: '冒險者碼頭 in mist_harbor, adventurers guild quay with notice boards, moored skiffs, lanterns and fog, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text',
    description:
      '冒險者碼頭是一段專供委託船停靠的木棧道，柱子上綁滿任務牌、失物畫像、海怪懸賞與臨時招募紙。公會書記坐在防潮棚下登記隊伍，旁邊小船隨霧潮起伏，船頭掛著不同顏色的任務燈。這裡是霧港最重要的任務服務房，玩家可接取外海副本、護航、搜救、釣魚與走私調查委託，也能組隊前往渡船棧橋。碼頭下方有水聲敲擊空木箱，偶爾會浮出不屬於任何登記船隻的繩結，暗示有人借公會名義私下出海。',
    exits: [
      { direction: 'north', targetRoomId: 'mist_harbor_sailmakers_row', description: '繩梯回到帆匠街' },
      { direction: 'west', targetRoomId: 'mist_harbor_anchor_inn', description: '木階上到沉錨旅店' },
      { direction: 'east', targetRoomId: 'mist_harbor_ferry_pier', description: '棧道連向渡船棧橋' },
      { direction: 'south', targetRoomId: 'mist_harbor_smugglers_alley', description: '陰影小路滑向走私巷' },
    ],
    mapSymbol: '[會]',
    mapX: 3,
    mapY: -1,
    guardianHints: {
      creature: '碼頭安全，但未登記繩結會牽出私航事件。',
      treasure: '任務牌背面常有隊伍留下的補充線索。',
      spirit: '冒險者碼頭把霧港的不安轉換成一張張可以承接的委託。',
    },
  },

  mist_harbor_smugglers_alley: {
    id: 'mist_harbor_smugglers_alley',
    name: '走私巷',
    zone: 'mist_harbor' as RoomDef['zone'],
    image: 'mist_harbor_smugglers_alley.png',
    imagePrompt: '走私巷 in mist_harbor, narrow wet smuggler alley behind fish market, crates, shadowed doors, fog lamps, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text',
    description:
      '魚市後方的走私巷狹窄潮濕，兩側堆滿標籤被刮掉的木箱、破網和空酒桶。霧在屋檐下盤旋，讓每扇半掩的門都像藏著耳朵。這裡不是公開服務點，卻是許多任務線的灰色交會處，玩家可追查假港印、打聽黑市船票、尋找失蹤貨物，也可能遇到不願在廣場露面的 NPC。巷底水溝連到九號倉，退潮時能看見刻在石壁上的暗號。雖然城內禁止械鬥，走私者仍會用價格、情報與沉默威脅旅人。若帶著海關封條進巷，幾盞窗燈會同時熄滅。牆面潮痕旁還刻著只有夜航人看得懂的數字，暗門後傳來壓低的笑聲。',
    exits: [
      { direction: 'north', targetRoomId: 'mist_harbor_fish_market', description: '魚腥路回到魚市' },
      { direction: 'east', targetRoomId: 'mist_harbor_warehouse_nine', description: '暗號水溝通向九號倉' },
      { direction: 'west', targetRoomId: 'mist_harbor_guild_quay', description: '陰影路回到公會碼頭' },
    ],
    mapSymbol: '[私]',
    mapX: 2,
    mapY: -2,
    guardianHints: {
      creature: '走私巷沒有公開敵人，但錯誤回答會關閉交易窗口。',
      treasure: '刮標木箱內側留著下一次私航時間。',
      spirit: '走私巷是霧港不寫進港務簿的另一張地圖。',
    },
  },

  mist_harbor_captains_office: {
    id: 'mist_harbor_captains_office',
    name: '船長辦公室',
    zone: 'mist_harbor' as RoomDef['zone'],
    image: 'mist_harbor_captains_office.png',
    imagePrompt: '船長辦公室 in mist_harbor, harbor captains office with maps, ship bells, ledgers, misted windows, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text',
    description:
      '船長辦公室位在海關廳後方，牆上掛滿航線圖、舊船鐘、風暴記錄和幾把失去主人的船鑰匙。值班船長在此核准出航、調停碼頭爭議，也替冒險者安排可靠船員。這裡是 NPC 與交通任務房，玩家可申請外海通行、查詢失事船、簽署護航契約，或追問某艘沒有進港記錄卻出現在潮鐘上的船。辦公桌抽屜裡有一疊被海水泡皺的求救信，日期全都落在同一場大霧之夜。若玩家完成港務線，這裡會成為解鎖遠洋路線的關鍵地點。',
    exits: [
      { direction: 'north', targetRoomId: 'mist_harbor_customs_house', description: '內廊回到海關廳' },
      { direction: 'east', targetRoomId: 'mist_harbor_chart_archive', description: '書架門通向海圖檔案室' },
      { direction: 'south', targetRoomId: 'mist_harbor_sea_gate', description: '港務坡道通往舊海門' },
    ],
    mapSymbol: '[長]',
    mapX: 1,
    mapY: -2,
    guardianHints: {
      creature: '辦公室安全，但船鐘無故響起時代表有幽霧船線索。',
      treasure: '失主船鑰匙中有一把能打開九號倉側門。',
      spirit: '船長辦公室決定誰能把霧港拋在身後，也決定誰必須留下。',
    },
  },

  mist_harbor_lighthouse_stairs: {
    id: 'mist_harbor_lighthouse_stairs',
    name: '燈室階梯',
    zone: 'mist_harbor' as RoomDef['zone'],
    image: 'mist_harbor_lighthouse_stairs.png',
    imagePrompt: '燈室階梯 in mist_harbor, spiral lighthouse stairs with wet stone, brass rail, fog light, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text',
    description:
      '傳送燈塔北面的石橋接上一段螺旋階梯，階梯沿著老燈塔內壁向上盤繞，扶手被鹽霧磨得發亮。牆面每隔幾步就嵌著小窗，能看見霧港屋頂、內港船桅與遠處防波堤在白霧中若隱若現。這裡是交通與探索房，玩家可前往霧望燈室，也能在階梯牆上找到歷代守燈人刻下的潮汐備忘。階梯間回音很重，適合觸發回憶、偵查或找人任務。若外海有異常，窗縫會吹進帶冰味的霧，讓牆上銅釘結霜。守燈人的腳印常停在某扇小窗前，似乎那裡能看見官方不願承認的航線。階梯越往上，海浪聲就越像低語。',
    exits: [
      { direction: 'south', targetRoomId: 'mist_harbor_portal_lantern', description: '石橋回到傳送燈塔' },
      { direction: 'up', targetRoomId: 'mist_harbor_fogwatch_lantern', description: '旋梯上到霧望燈室' },
      { direction: 'east', targetRoomId: 'mist_harbor_breakwater_end', description: '維修門通往防波堤端' },
    ],
    mapSymbol: '[梯]',
    mapX: 1,
    mapY: 2,
    guardianHints: {
      creature: '階梯安全，但窗縫結霜代表冰霧潮正在逼近。',
      treasure: '扶手底部藏著守燈人留下的備用火石。',
      spirit: '燈室階梯把港鎮的喧鬧一步步留在下方。',
    },
  },

  mist_harbor_fogwatch_lantern: {
    id: 'mist_harbor_fogwatch_lantern',
    name: '霧望燈室',
    zone: 'mist_harbor' as RoomDef['zone'],
    image: 'mist_harbor_fogwatch_lantern.png',
    imagePrompt: '霧望燈室 in mist_harbor, lighthouse lantern room above foggy harbor, huge lens, beacon flame, sea mist, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text',
    description:
      '霧望燈室位在老燈塔頂端，巨大的玻璃透鏡被銅架固定，中心燃著帶藍邊的港燈。守燈人用它穿透濃霧，替返航船隻標出內港安全水道，也觀測外海是否有幽霧船、冰潮或海怪陰影。這裡是地標與大型事件觀測房，玩家可校準燈光、解讀遠方燈號，或在夜裡尋找失蹤船隊的回應。燈室地板刻著一圈方位線，某些刻度被反覆磨損，表示有人常把燈光轉向官方航線以外的黑暗海面。完成霧港主線時，這裡會成為選擇公開真相或掩護私航的關鍵場景，也決定哪些船能穿過霧回家。透鏡背面還殘留舊日撞擊裂紋。',
    exits: [
      { direction: 'down', targetRoomId: 'mist_harbor_lighthouse_stairs', description: '旋梯下回燈室階梯' },
      { direction: 'east', targetRoomId: 'mist_harbor_breakwater_end', description: '外梯連到防波堤端' },
    ],
    mapSymbol: '[燈]',
    mapX: 1,
    mapY: 3,
    guardianHints: {
      creature: '燈室安全，但遠方錯誤燈號可能召喚海上事件。',
      treasure: '透鏡底座有一枚被藏起來的私航方位片。',
      spirit: '霧望燈室決定霧港願意照亮哪一片海。',
    },
  },

  mist_harbor_ferry_pier: {
    id: 'mist_harbor_ferry_pier',
    name: '渡船棧橋',
    zone: 'mist_harbor' as RoomDef['zone'],
    image: 'mist_harbor_ferry_pier.png',
    imagePrompt: '渡船棧橋 in mist_harbor, ferry pier with small boats, rope posts, fog, lantern reflections, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text',
    description:
      '渡船棧橋伸入內港水面，小船依照目的地排成幾列，船頭掛著紅、藍、白不同顏色的航燈。船夫靠在繩樁邊等潮位，腳下木板被海水泡得發黑，縫隙間能看見細碎銀魚游過。這裡是交通服務房，玩家可搭乘短程渡船前往外島、海上副本入口或對岸倉區，也能護送 NPC、運送藥箱與追查未登記船票。渡船時刻受潮鐘控制，若霧太重，船夫會要求額外燈油或可靠護衛。棧橋末端有一只空船總是無人認領，船底卻常保持乾淨。',
    exits: [
      { direction: 'north', targetRoomId: 'mist_harbor_shipwright_yard', description: '滑道上到船匠塢' },
      { direction: 'west', targetRoomId: 'mist_harbor_guild_quay', description: '棧道回到冒險者碼頭' },
      { direction: 'east', targetRoomId: 'mist_harbor_breakwater_end', description: '外棧道通向防波堤端' },
    ],
    mapSymbol: '[渡]',
    mapX: 4,
    mapY: -1,
    guardianHints: {
      creature: '渡船安全，但無人認領的小船常牽出失蹤線。',
      treasure: '繩樁下方塞著一張被撕半的船票。',
      spirit: '渡船棧橋讓霧港的日常與冒險只隔一塊木板。',
    },
  },

  mist_harbor_warehouse_nine: {
    id: 'mist_harbor_warehouse_nine',
    name: '九號倉',
    zone: 'mist_harbor' as RoomDef['zone'],
    image: 'mist_harbor_warehouse_nine.png',
    imagePrompt: '九號倉 in mist_harbor, sealed harbor warehouse with stacked crates, wet rope, lantern shadows, fogged skylight, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text',
    description:
      '九號倉的門上貼滿海關封條，但封條邊緣總有新鮮割痕。倉內高高堆著木箱、油布包、鹽袋與等候驗放的遠方貨物，霧氣從天窗滲下，讓每一道箱影都像可疑人形。這裡是倉儲服務與走私任務房，玩家可存放大宗貨物、查找遺失箱號、協助盤點，也能沿著暗號追查假封條來源。地板上有幾條拖痕通往走私巷水溝，旁邊散著不該出現在官方倉庫的黑市船票。若港務線推進，九號倉會成為揭露私航網路的重要證據點。',
    exits: [
      { direction: 'west', targetRoomId: 'mist_harbor_customs_house', description: '封條門回到海關廳' },
      { direction: 'south', targetRoomId: 'mist_harbor_smugglers_alley', description: '水溝暗門通向走私巷' },
      { direction: 'east', targetRoomId: 'mist_harbor_sea_gate', description: '貨道通往舊海門' },
    ],
    mapSymbol: '[倉]',
    mapX: 2,
    mapY: -1,
    guardianHints: {
      creature: '九號倉安全，但錯誤箱號會引來海關盤問。',
      treasure: '鹽袋堆後有一箱未登記的航海羅盤。',
      spirit: '九號倉保存著霧港願意承認與不願承認的貨物。',
    },
  },

  mist_harbor_tidepool_shrine: {
    id: 'mist_harbor_tidepool_shrine',
    name: '潮池小祠',
    zone: 'mist_harbor' as RoomDef['zone'],
    image: 'mist_harbor_tidepool_shrine.png',
    imagePrompt: '潮池小祠 in mist_harbor, small tidepool shrine with shells, candles, sea glass, fog and moonlit water, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text',
    description:
      '舊海門旁的岩地凹出一座天然潮池，池邊立著小小石祠，供奉無名海路守護靈。漁民會在出航前放下貝殼、海玻璃、魚骨和一小撮鹽，祈求霧中看得見回家的燈。潮池水面平靜時像鏡子，偶爾會映出不屬於當下天空的星點。這裡是任務與信仰房，玩家可替失蹤水手獻祭、解讀潮池異象，或收集特殊貝殼完成居民委託。若從霧望燈室取得方位片，再來此比對倒影，能發現某條被隱藏的夜航路線。',
    exits: [
      { direction: 'north', targetRoomId: 'mist_harbor_sea_gate', description: '石階回到舊海門' },
      { direction: 'east', targetRoomId: 'mist_harbor_breakwater_end', description: '潮濕岩路通向防波堤端' },
    ],
    mapSymbol: '[祠]',
    mapX: 3,
    mapY: -3,
    guardianHints: {
      creature: '潮池小祠安全，但倒影異常代表夜航任務可推進。',
      treasure: '第三層貝殼下藏著一枚海玻璃護符。',
      spirit: '潮池小祠保存著水手不敢寫進航海日誌的願望。',
    },
  },

  mist_harbor_chart_archive: {
    id: 'mist_harbor_chart_archive',
    name: '海圖檔案室',
    zone: 'mist_harbor' as RoomDef['zone'],
    image: 'mist_harbor_chart_archive.png',
    imagePrompt: '海圖檔案室 in mist_harbor, archive of sea charts, map tubes, brass dividers, fogged skylight, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text',
    description:
      '海圖檔案室夾在傳送燈塔、診所與船長辦公室之間，屋內用防潮木櫃保存各年代航線圖。長桌上擺著黃銅分規、潮汐尺、乾燥沙盤和許多被鉛筆反覆修正的霧區邊界。這裡是知識與任務房，玩家可查詢副本入口、比對失蹤船位、解鎖遠洋路線，也能幫檔案員修補被霧水侵蝕的古海圖。某些圖管沒有登記號，卻被放在最容易取用的位置，內容指向官方航線以外的私航港灣。若與傳送燈塔記錄交叉檢查，能找出誰在霧夜改變過燈塔方位。檔案員會要求玩家保密，因為錯誤海圖足以毀掉整個港鎮的信用。',
    exits: [
      { direction: 'west', targetRoomId: 'mist_harbor_portal_lantern', description: '小門回到傳送燈塔' },
      { direction: 'south', targetRoomId: 'mist_harbor_clinic_of_salt', description: '窄梯下到鹽診所' },
      { direction: 'east', targetRoomId: 'mist_harbor_captains_office', description: '書架門通往船長辦公室' },
    ],
    mapSymbol: '[圖]',
    mapX: 2,
    mapY: 2,
    guardianHints: {
      creature: '檔案室安全，但未登記圖管會開啟私航線索。',
      treasure: '沙盤底層藏著一張被折小的暗礁圖。',
      spirit: '海圖檔案室讓霧港承認，迷霧也能被一點點描出邊界。',
    },
  },

  mist_harbor_sea_gate: {
    id: 'mist_harbor_sea_gate',
    name: '舊海門',
    zone: 'mist_harbor' as RoomDef['zone'],
    image: 'mist_harbor_sea_gate.png',
    imagePrompt: '舊海門 in mist_harbor, old sea gate with iron chains, wet stone arch, harbor fog and tide marks, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text',
    description:
      '舊海門是內港最老的防潮門，兩扇厚木閘板被鐵鏈吊著，表面滿是潮痕、貝殼和修補鐵片。漲潮時門外海水會拍上石階，退潮時則露出通往潮池與防波堤的濕滑岩路。這裡是交通與港務房，玩家可協助升降閘門、護送貨車通過、查看近海潮位，也能追查某些貨物為何不經海關而從舊門進城。門洞上方掛著一排退役船鈴，只在濃霧中無風自響。若鈴聲與潮鐘不一致，代表外海有船正在使用錯誤航道靠近。守門員會把此事記在潮濕小冊裡，等待有人願意查下去。閘鏈深處還卡著新鮮黑帆纖維與碎木。',
    exits: [
      { direction: 'north', targetRoomId: 'mist_harbor_fog_gate', description: '坡道回到霧港城門' },
      { direction: 'west', targetRoomId: 'mist_harbor_captains_office', description: '港務坡道通往船長辦公室' },
      { direction: 'east', targetRoomId: 'mist_harbor_warehouse_nine', description: '貨道通往九號倉' },
      { direction: 'south', targetRoomId: 'mist_harbor_tidepool_shrine', description: '石階下到潮池小祠' },
    ],
    mapSymbol: '[海]',
    mapX: 2,
    mapY: -3,
    guardianHints: {
      creature: '舊海門安全，但船鈴亂響代表有錯航事件。',
      treasure: '閘板鐵片後藏著一枚舊港務徽章。',
      spirit: '舊海門記得霧港還沒有傳送燈以前的每一次進出。',
    },
  },

  mist_harbor_breakwater_end: {
    id: 'mist_harbor_breakwater_end',
    name: '防波堤端',
    zone: 'mist_harbor' as RoomDef['zone'],
    image: 'mist_harbor_breakwater_end.png',
    imagePrompt: '防波堤端 in mist_harbor, end of stone breakwater in thick fog, crashing waves, beacon posts, distant lighthouse, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text',
    description:
      '防波堤端伸向白霧最深處，黑色礁石和人工石塊交錯堆疊，浪花不斷越過邊緣，把地面打得濕亮。這裡遠離市集喧鬧，只聽得見海浪、霧角與偶爾從燈塔傳來的金屬回音。維修工在石柱上掛著小信標，船夫則把這裡當作判斷外海能否出航的最後觀察點。這裡是交通邊界與大型事件鉤子，玩家可前往外海副本、調查漂來殘骸，或在霧望燈室指引下等待失蹤船影出現。若霧突然退開，遠處可能露出不在任何海圖上的黑帆。',
    exits: [
      { direction: 'west', targetRoomId: 'mist_harbor_shipwright_yard', description: '木道回到船匠塢' },
      { direction: 'south', targetRoomId: 'mist_harbor_ferry_pier', description: '外棧道回到渡船棧橋' },
      { direction: 'north', targetRoomId: 'mist_harbor_lighthouse_stairs', description: '維修門通向燈室階梯' },
      { direction: 'east', targetRoomId: 'mist_harbor_fogwatch_lantern', description: '外梯連到霧望燈室' },
      { direction: 'south', targetRoomId: 'mist_harbor_tidepool_shrine', description: '潮濕岩路回到潮池小祠' },
    ],
    mapSymbol: '[堤]',
    mapX: 5,
    mapY: -1,
    guardianHints: {
      creature: '防波堤端安全，但黑帆出現會開啟外海事件。',
      treasure: '信標柱底部夾著一片刻有私航標記的船板。',
      spirit: '防波堤端是霧港最後一塊仍相信陸地的石頭。',
    },
  },
  ancient_ruins_sunken_entrance: {
    id: 'ancient_ruins_sunken_entrance',
    name: '沉降入口',
    zone: 'ancient_ruins' as RoomDef['zone'],
    image: 'ancient_ruins_sunken_entrance.png',
    imagePrompt: '沉降入口 in ancient_ruins, half-buried ancient stone entrance, cracked steps, vines, dust beams and worn runes, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text',
    description:
      '古代遺跡的入口半沉在乾裂荒土裡，巨石門楣傾斜下陷，只剩一段刻滿磨損符文的階梯露出地面。風把細沙吹進門縫，露出曾被探險隊清理過的痕跡，也露出幾具被陷阱拖回陰影裡的骸骨。這裡是遺跡的入口與回程錨點，玩家可整理隊伍、確認繩索與火把，並從石階裂紋判斷內部結構仍在緩慢崩塌。入口旁的臨時路標標著安全撤退方向，但最新刻痕被人刮掉，像是不希望後來者找到正確路線。',
    exits: [
      { direction: 'east', targetRoomId: 'ancient_ruins_broken_causeway', description: '斷裂石道延入遺跡' },
      { direction: 'north', targetRoomId: 'ancient_ruins_survey_camp', description: '營火痕跡通向測繪營地' },
    ],
    monsters: [
      { monsterId: 'skeleton_soldier', maxCount: 2, respawnSeconds: 70 },
      { monsterId: 'giant_spider', maxCount: 1, respawnSeconds: 60 },
    ],
    mapSymbol: '[入]',
    mapX: 0,
    mapY: 0,
    guardianHints: {
      creature: '入口階梯若落下細沙，附近牆縫可能藏著骷髏巡衛。',
      treasure: '刮掉的路標背面還留著舊探險隊的撤退記號。',
      spirit: '沉降入口像遺跡露出的一道傷口，邀請也警告所有靠近者。',
    },
  },

  ancient_ruins_broken_causeway: {
    id: 'ancient_ruins_broken_causeway',
    name: '斷裂石道',
    zone: 'ancient_ruins' as RoomDef['zone'],
    image: 'ancient_ruins_broken_causeway.png',
    imagePrompt: '斷裂石道 in ancient_ruins, broken elevated stone causeway over buried ruins, missing slabs, vines, dust and sunlight, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text',
    description:
      '沉降入口後方是一條架在塌陷廳堂上的石道，許多石板已經斷裂，只剩窄窄邊緣可供通行。下方黑暗中能看見倒塌柱頭、沙堆與被藤蔓纏住的雕像碎片。石道兩側刻有行列整齊的古文字，但中段被重物砸毀，導致整條通道像被切斷的句子。玩家需要在這裡選擇前往銘文庭、測繪營地或馬賽克大廳，也會遭遇最基礎的骷髏與蛛群阻攔。若踩錯鬆動石板，聲音會沿著下方空洞傳到更深處，讓後續房間的守衛提早甦醒，也讓撤退路線變得更加危險。這段線索也會影響後續任務判定，值得隊伍停下來仔細記錄。',
    exits: [
      { direction: 'west', targetRoomId: 'ancient_ruins_sunken_entrance', description: '石道回到沉降入口' },
      { direction: 'east', targetRoomId: 'ancient_ruins_inscription_court', description: '銘文庭在前方開闊處' },
      { direction: 'south', targetRoomId: 'ancient_ruins_mosaic_hall', description: '破階下到馬賽克大廳' },
      { direction: 'north', targetRoomId: 'ancient_ruins_survey_camp', description: '臨時木橋連回測繪營地' },
    ],
    monsters: [
      { monsterId: 'skeleton_soldier', maxCount: 3, respawnSeconds: 70 },
      { monsterId: 'giant_spider', maxCount: 2, respawnSeconds: 60 },
    ],
    mapSymbol: '[道]',
    mapX: 1,
    mapY: 0,
    guardianHints: {
      creature: '鬆動石板會吸引下層骷髏抬頭巡視。',
      treasure: '斷裂石板下卡著一枚古代青銅扣。',
      spirit: '斷裂石道讓整座遺跡像一本被撕開的書。',
    },
  },

  ancient_ruins_inscription_court: {
    id: 'ancient_ruins_inscription_court',
    name: '銘文庭',
    zone: 'ancient_ruins' as RoomDef['zone'],
    image: 'ancient_ruins_inscription_court.png',
    imagePrompt: '銘文庭 in ancient_ruins, open court of rune-covered slabs, broken columns, sand, vines and pale light, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text',
    description:
      '斷裂石道盡頭是一座露天石庭，地面鋪著多塊刻字石板，每塊石板都用不同年代的文字記錄祭祀、工程與戰爭。陽光從塌開的穹頂灑下，讓部分字跡清楚可見，另一些則被藤根與沙塵遮住。這裡是探索與任務目標房，玩家可拓印銘文、解讀遺跡年代，或比對石板順序來打開更深處的月門。庭院四周有幾尊失去頭顱的守衛像，當玩家念錯銘文時，石像基座會發出低沉震動，提醒隊伍這裡仍有古代防護機制在運作。',
    exits: [
      { direction: 'west', targetRoomId: 'ancient_ruins_broken_causeway', description: '石道回到入口方向' },
      { direction: 'east', targetRoomId: 'ancient_ruins_statue_gallery', description: '雕像廊從東側展開' },
      { direction: 'north', targetRoomId: 'ancient_ruins_cracked_obelisk', description: '庭外可見裂痕方尖碑' },
    ],
    monsters: [
      { monsterId: 'gargoyle', maxCount: 1, respawnSeconds: 120 },
      { monsterId: 'skeleton_soldier', maxCount: 2, respawnSeconds: 70 },
    ],
    mapSymbol: '[銘]',
    mapX: 2,
    mapY: 0,
    guardianHints: {
      creature: '銘文順序念錯時，無頭石像會先轉向聲音來源。',
      treasure: '最老的祭祀石板下藏著一小片金箔拓本。',
      spirit: '銘文庭把文明的名字留給懂得閱讀的人。',
    },
  },

  ancient_ruins_mosaic_hall: {
    id: 'ancient_ruins_mosaic_hall',
    name: '馬賽克大廳',
    zone: 'ancient_ruins' as RoomDef['zone'],
    image: 'ancient_ruins_mosaic_hall.png',
    imagePrompt: '馬賽克大廳 in ancient_ruins, grand hall with cracked mosaic floor, fallen pillars, dust, colored tile patterns, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text',
    description:
      '破階下方的馬賽克大廳仍保留著大片彩石地面，圖案描繪日月、河流、城市與一座被光包圍的聖所。許多彩石已經鬆脫，露出底下空腔與細小機關槽。這裡是遺跡主路的第一個大型室內房，玩家可觀察地面圖案推斷安全路線，也能採集彩石碎片作為研究材料。大廳四角躺著破碎盾牌和石像手臂，暗示前幾批探險者曾在此觸發守衛。當腳步踩過錯誤顏色，牆內會響起齒輪聲，骷髏與石像會從倒柱後方逼近，並迫使隊伍在圖案、陷阱與敵人之間快速判斷。這段線索也會影響後續任務判定，值得隊伍停下來仔細記錄。',
    exits: [
      { direction: 'north', targetRoomId: 'ancient_ruins_broken_causeway', description: '破階回到斷裂石道' },
      { direction: 'east', targetRoomId: 'ancient_ruins_trap_corridor', description: '彩石圖案指向機關走廊' },
      { direction: 'south', targetRoomId: 'ancient_ruins_dust_archive', description: '塵封門洞通往資料庫' },
    ],
    monsters: [
      { monsterId: 'skeleton_soldier', maxCount: 3, respawnSeconds: 70 },
      { monsterId: 'gargoyle', maxCount: 1, respawnSeconds: 120 },
    ],
    mapSymbol: '[彩]',
    mapX: 1,
    mapY: -1,
    guardianHints: {
      creature: '彩石地面若亮起白線，牆內守衛即將啟動。',
      treasure: '完整藍色彩石可作為銘文解讀的材料。',
      spirit: '馬賽克大廳讓崩壞遺跡仍短暫呈現昔日城市的秩序。',
    },
  },

  ancient_ruins_statue_gallery: {
    id: 'ancient_ruins_statue_gallery',
    name: '石像長廊',
    zone: 'ancient_ruins' as RoomDef['zone'],
    image: 'ancient_ruins_statue_gallery.png',
    imagePrompt: '石像長廊 in ancient_ruins, long gallery of ancient statues, cracked faces, vines, shafts of light, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text',
    description:
      '銘文庭東側的長廊排列著二十餘尊人物石像，從祭司、工匠、戰士到不知名的雙翼守護者皆有。石像臉部大多被刻意磨平，只有胸前徽記仍清楚可辨。長廊地面鋪著細沙，沙上保存著繞開特定石像的腳印，顯示前人已經知道某些雕像會甦醒。這裡是精英前置與解謎房，玩家可對照徽記、修復缺失石手，或避開錯誤視線前往守衛基座。若直接穿越中央軸線，石像眼窩會亮起冷光，整條長廊都像活過來一樣沉重轉動。',
    exits: [
      { direction: 'west', targetRoomId: 'ancient_ruins_inscription_court', description: '長廊回到銘文庭' },
      { direction: 'east', targetRoomId: 'ancient_ruins_guardian_plinth', description: '盡頭是守衛基座' },
      { direction: 'south', targetRoomId: 'ancient_ruins_trap_corridor', description: '側門通往機關走廊' },
    ],
    monsters: [
      { monsterId: 'gargoyle', maxCount: 2, respawnSeconds: 120 },
      { monsterId: 'crystal_lizard', maxCount: 2, respawnSeconds: 80 },
    ],
    mapSymbol: '[像]',
    mapX: 3,
    mapY: 0,
    guardianHints: {
      creature: '胸前徽記完整的石像通常還能活動。',
      treasure: '缺失石手內側藏著一枚儀式戒環。',
      spirit: '石像長廊像一條被命令永久注視入侵者的歷史。',
    },
  },

  ancient_ruins_trap_corridor: {
    id: 'ancient_ruins_trap_corridor',
    name: '機關走廊',
    zone: 'ancient_ruins' as RoomDef['zone'],
    image: 'ancient_ruins_trap_corridor.png',
    imagePrompt: '機關走廊 in ancient_ruins, narrow trap corridor with pressure plates, arrow slits, dust, bronze mechanisms, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text',
    description:
      '馬賽克大廳東側的走廊狹窄筆直，地面由大小不一的石板組成，牆上則布滿細小箭孔與青銅轉輪。許多機關早已失靈，但仍有部分壓力板能推動暗槍、落石或封門。這裡是高風險通道房，玩家可拆除機關、回收青銅零件，或用銘文庭取得的符號判斷安全步序。走廊盡頭連接塵封資料庫與石像長廊，因此常被骷髏巡衛當作防線。若隊伍太急，老舊機關反而會被連鎖啟動，把安全路徑切成數段，甚至封住剛剛才確認過的退路。這段線索也會影響後續任務判定，值得隊伍停下來仔細記錄。並能揭露更多古代防線細節。',
    exits: [
      { direction: 'west', targetRoomId: 'ancient_ruins_mosaic_hall', description: '彩石地面在西側' },
      { direction: 'north', targetRoomId: 'ancient_ruins_statue_gallery', description: '側門連向石像長廊' },
      { direction: 'south', targetRoomId: 'ancient_ruins_dust_archive', description: '機關門通往塵封資料庫' },
      { direction: 'east', targetRoomId: 'ancient_ruins_construct_bay', description: '青銅軌道延向構裝間' },
    ],
    monsters: [
      { monsterId: 'skeleton_soldier', maxCount: 3, respawnSeconds: 70 },
      { monsterId: 'crystal_lizard', maxCount: 2, respawnSeconds: 80 },
    ],
    mapSymbol: '[關]',
    mapX: 2,
    mapY: -1,
    guardianHints: {
      creature: '壓力板若先下陷後回彈，第二波機關通常更危險。',
      treasure: '青銅轉輪裡可拆出完整機關齒片。',
      spirit: '機關走廊證明古代人寧願讓通道殺人，也不願秘密外流。',
    },
  },

  ancient_ruins_dust_archive: {
    id: 'ancient_ruins_dust_archive',
    name: '塵封資料庫',
    zone: 'ancient_ruins' as RoomDef['zone'],
    image: 'ancient_ruins_dust_archive.png',
    imagePrompt: '塵封資料庫 in ancient_ruins, ruined archive with stone shelves, clay tablets, dust, broken skylight, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text',
    description:
      '資料庫裡沒有紙書，只有一排排石架與陶板匣。許多匣子摔在地上，露出刻滿細字的泥板、封蠟和被蟲蛀空的繩索標籤。天窗破洞讓光柱照進塵埃中，能看見細粉像星雲般慢慢旋轉。這裡是知識與資源房，玩家可整理陶板、尋找失落語法、交付拓印任務，也能發現遺跡曾是一座觀測聖所而非單純墓穴。資料庫深處有被藤根推開的暗格，藏著通往遺物藏室的索引。骷髏學士仍徘徊在書架間，像在守護已無人能完整閱讀的紀錄；牠們會把整理陶板的玩家視作偷竊知識的入侵者。這段線索也會影響後續任務判定，值得隊伍停下來仔細記錄。',
    exits: [
      { direction: 'north', targetRoomId: 'ancient_ruins_mosaic_hall', description: '塵封門洞回到馬賽克大廳' },
      { direction: 'east', targetRoomId: 'ancient_ruins_trap_corridor', description: '機關門回到走廊' },
      { direction: 'south', targetRoomId: 'ancient_ruins_relic_cache', description: '暗格索引指向遺物藏室' },
    ],
    monsters: [
      { monsterId: 'skeleton_soldier', maxCount: 3, respawnSeconds: 70 },
      { monsterId: 'giant_spider', maxCount: 2, respawnSeconds: 60 },
    ],
    mapSymbol: '[庫]',
    mapX: 1,
    mapY: -2,
    guardianHints: {
      creature: '陶板架若自己滑開，骷髏學士正在附近翻找。',
      treasure: '索引暗格中藏有完整星象陶板。',
      spirit: '塵封資料庫把遺跡真正用途藏在破碎文字中。',
    },
  },

  ancient_ruins_relic_cache: {
    id: 'ancient_ruins_relic_cache',
    name: '遺物藏室',
    zone: 'ancient_ruins' as RoomDef['zone'],
    image: 'ancient_ruins_relic_cache.png',
    imagePrompt: '遺物藏室 in ancient_ruins, hidden relic cache with sealed urns, bronze tools, glowing dust, cracked alcoves, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text',
    description:
      '資料庫暗格後方藏著一間低矮石室，四壁鑿出小龕，擺放青銅工具、封口陶罐、碎裂儀器和用布包住的石片。許多遺物看似普通，卻都標有精確年代與使用場合，說明這裡是古代學者整理樣本的儲藏地。這裡是資源與事件點，玩家可採集研究材料、尋找任務遺物，或辨認哪件器具能修復日晷露台的機關。藏室地面有新近撬痕，表示已有人搶先取走核心物件。若玩家開啟錯誤陶罐，沉睡灰塵會驚動守護石像，讓原本安靜的藏室立刻變成狹窄戰場。這段線索也會影響後續任務判定，值得隊伍停下來仔細記錄。',
    exits: [
      { direction: 'north', targetRoomId: 'ancient_ruins_dust_archive', description: '暗格回到塵封資料庫' },
      { direction: 'east', targetRoomId: 'ancient_ruins_reflection_pool', description: '低門通向倒影水池' },
    ],
    monsters: [
      { monsterId: 'gargoyle', maxCount: 1, respawnSeconds: 120 },
      { monsterId: 'giant_spider', maxCount: 2, respawnSeconds: 60 },
    ],
    mapSymbol: '[藏]',
    mapX: 1,
    mapY: -3,
    guardianHints: {
      creature: '錯誤陶罐開封時，龕內石像會先落下灰塵。',
      treasure: '標有日紋的青銅尺可修復日晷露台。',
      spirit: '遺物藏室讓破碎文明以樣本方式繼續被研究。',
    },
  },

  ancient_ruins_cracked_obelisk: {
    id: 'ancient_ruins_cracked_obelisk',
    name: '裂痕方尖碑',
    zone: 'ancient_ruins' as RoomDef['zone'],
    image: 'ancient_ruins_cracked_obelisk.png',
    imagePrompt: '裂痕方尖碑 in ancient_ruins, cracked obelisk with light runes, buried courtyard, vines, sand and sky, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text',
    description:
      '銘文庭北面立著一座裂開的方尖碑，碑身原本應該光滑筆直，如今卻被一道由頂到底的裂縫分成兩半。裂縫內側有微弱金光，像某種古老能量仍被困在石中。碑基周圍堆著測繪旗、碎繩與被燒黑的拓印紙，顯示近期探險隊試圖啟動它但失敗。這裡是探索與精英前置房，玩家可校準碑影、收集光塵，並得知月門與內聖所需要日月兩組符號才能開啟。當方尖碑被觸碰時，附近晶化蜥蜴會從石縫爬出，像被光喚醒的守衛；若能記下光線閃爍節奏，後續月門解謎會更清楚。這段線索也會影響後續任務判定，值得隊伍停下來仔細記錄。',
    exits: [
      { direction: 'south', targetRoomId: 'ancient_ruins_inscription_court', description: '石階回到銘文庭' },
      { direction: 'east', targetRoomId: 'ancient_ruins_guardian_plinth', description: '碑影指向守衛基座' },
      { direction: 'north', targetRoomId: 'ancient_ruins_sun_dial_patio', description: '斷柱路通往日晷露台' },
    ],
    monsters: [
      { monsterId: 'crystal_lizard', maxCount: 3, respawnSeconds: 80 },
      { monsterId: 'gargoyle', maxCount: 1, respawnSeconds: 120 },
    ],
    mapSymbol: '[碑]',
    mapX: 2,
    mapY: 1,
    guardianHints: {
      creature: '裂縫金光忽明忽暗時，晶化蜥蜴正在碑基下活動。',
      treasure: '碑影落點可收集少量古代光塵。',
      spirit: '裂痕方尖碑像仍在呼吸的古代儀器。',
    },
  },

  ancient_ruins_guardian_plinth: {
    id: 'ancient_ruins_guardian_plinth',
    name: '守衛基座',
    zone: 'ancient_ruins' as RoomDef['zone'],
    image: 'ancient_ruins_guardian_plinth.png',
    imagePrompt: '守衛基座 in ancient_ruins, massive guardian plinth with empty statue feet, crystal sockets, dust and runes, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text',
    description:
      '石像長廊盡頭是一座巨大的圓形基座，基座上只剩兩只石足，原本的守衛主體不知被移往何處。周圍地面刻滿放射狀符文，幾個水晶插槽仍殘留淡淡熱度。這裡是精英事件點，玩家可插入從方尖碑或倒影水池取得的符號碎片，重建守衛路徑，或判斷哪尊石像曾經守住內聖所。若符文順序錯誤，基座會召來石像與水晶生物進行測試。基座後方隱約可見通往月門與構裝間的軌道，說明守衛不只是雕像，而是整座遺跡防禦系統的一部分。玩家若修復插槽，也可能短暫改寫守衛巡邏方向。這段線索也會影響後續任務判定，值得隊伍停下來仔細記錄。',
    exits: [
      { direction: 'west', targetRoomId: 'ancient_ruins_statue_gallery', description: '長廊回到石像群' },
      { direction: 'east', targetRoomId: 'ancient_ruins_moon_gate', description: '符文軌道通向月門' },
      { direction: 'south', targetRoomId: 'ancient_ruins_construct_bay', description: '沉重軌道下到構裝間' },
      { direction: 'north', targetRoomId: 'ancient_ruins_cracked_obelisk', description: '碑影路回到方尖碑' },
    ],
    monsters: [
      { monsterId: 'crystal_golem', maxCount: 1, respawnSeconds: 150 },
      { monsterId: 'gargoyle', maxCount: 2, respawnSeconds: 120 },
    ],
    mapSymbol: '[座]',
    mapX: 4,
    mapY: 0,
    guardianHints: {
      creature: '符文順序錯誤時，基座會先召回最近的石像守衛。',
      treasure: '空石足內嵌著一枚守衛路徑核心。',
      spirit: '守衛基座證明遺跡的防線曾經精密如活物。',
    },
  },

  ancient_ruins_reflection_pool: {
    id: 'ancient_ruins_reflection_pool',
    name: '倒影水池',
    zone: 'ancient_ruins' as RoomDef['zone'],
    image: 'ancient_ruins_reflection_pool.png',
    imagePrompt: '倒影水池 in ancient_ruins, still reflection pool in ruined chamber, moonlight, cracked tiles, vines and pale runes, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text',
    description:
      '遺物藏室東側的低門通向一座安靜水池，池水清澈得不合常理，倒映出的卻不是破碎穹頂，而是一輪完整明月。池邊瓷磚刻著月相與數字，部分被藤根撐裂，露出下方排水機關。這裡是解謎與資源房，玩家可用水面讀取月門符號、採集發光藻泥，或把日晷露台取得的光影結果與倒影對照。水池中央沉著幾枚青銅片，只能在正確月相倒影出現時看清。若玩家攪亂池水，附近沉睡的骨骸會像被打斷觀測般重新站起。',
    exits: [
      { direction: 'west', targetRoomId: 'ancient_ruins_relic_cache', description: '低門回到遺物藏室' },
      { direction: 'east', targetRoomId: 'ancient_ruins_vine_choked_cloister', description: '濕滑通道通向藤蔓迴廊' },
      { direction: 'north', targetRoomId: 'ancient_ruins_moon_gate', description: '月相石階通向月門' },
    ],
    monsters: [
      { monsterId: 'skeleton_soldier', maxCount: 3, respawnSeconds: 70 },
      { monsterId: 'crystal_lizard', maxCount: 2, respawnSeconds: 80 },
    ],
    mapSymbol: '[池]',
    mapX: 2,
    mapY: -3,
    guardianHints: {
      creature: '池水被攪動後，倒影中的骸骨會比現實先站起。',
      treasure: '正確月相下可撈起月門青銅片。',
      spirit: '倒影水池保存著遺跡仍未破碎時的天空。',
    },
  },

  ancient_ruins_vine_choked_cloister: {
    id: 'ancient_ruins_vine_choked_cloister',
    name: '藤蔓迴廊',
    zone: 'ancient_ruins' as RoomDef['zone'],
    image: 'ancient_ruins_vine_choked_cloister.png',
    imagePrompt: '藤蔓迴廊 in ancient_ruins, cloister choked by roots and vines, broken arches, moss, hidden carvings, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text',
    description:
      '倒影水池東側的迴廊被粗大藤蔓塞滿，拱門與柱廊只能在葉影間斷續看見。潮濕泥土覆蓋了原本石面，卻也保護了幾處未被風沙磨掉的壁雕。這裡是資源與探索房，玩家可採集藤根、尋找被植物遮住的銘文，也能發現遺跡崩塌後自然如何一點點接管古代空間。藤蔓中結著透明小果，會吸引蜘蛛和晶化蜥蜴。若清理得太快，失去支撐的拱門可能坍落；若順著藤根走，則能找到通往封印階梯的隱蔽路線。',
    exits: [
      { direction: 'west', targetRoomId: 'ancient_ruins_reflection_pool', description: '濕路回到倒影水池' },
      { direction: 'east', targetRoomId: 'ancient_ruins_sealed_stair', description: '藤根指向封印階梯' },
      { direction: 'north', targetRoomId: 'ancient_ruins_sun_dial_patio', description: '破拱門通往日晷露台' },
    ],
    monsters: [
      { monsterId: 'giant_spider', maxCount: 3, respawnSeconds: 60 },
      { monsterId: 'crystal_lizard', maxCount: 2, respawnSeconds: 80 },
    ],
    mapSymbol: '[藤]',
    mapX: 3,
    mapY: -3,
    guardianHints: {
      creature: '透明小果晃動時，蜘蛛多半已經藏在葉背。',
      treasure: '藤根保護下的壁雕拓片保存最完整。',
      spirit: '藤蔓迴廊讓遺跡和荒野重新長在一起。',
    },
  },

  ancient_ruins_survey_camp: {
    id: 'ancient_ruins_survey_camp',
    name: '測繪營地',
    zone: 'ancient_ruins' as RoomDef['zone'],
    image: 'ancient_ruins_survey_camp.png',
    imagePrompt: '測繪營地 in ancient_ruins, archaeologist survey camp beside ruins, canvas tents, map table, lanterns, dust, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text',
    description:
      '入口北側搭著一處半廢棄測繪營地，帆布帳篷被沙塵打得褪色，木桌上釘著遺跡平面圖、繩尺、角度盤與幾枚紅色警示釘。營火已冷，但灰中還有最近翻動痕跡。這裡是補給、任務與交通房，玩家可取得初步地圖、交付拓印成果、修理探險工具，或調查上一支測繪隊為何突然撤離。營地箱子裡有各房間的暫定編號，能幫助隊伍在複雜遺跡中保持方向。若夜裡返回，帳篷影子會被遺跡內部的光映得很長。',
    exits: [
      { direction: 'south', targetRoomId: 'ancient_ruins_sunken_entrance', description: '坡路回到沉降入口' },
      { direction: 'east', targetRoomId: 'ancient_ruins_broken_causeway', description: '木橋接上斷裂石道' },
      { direction: 'north', targetRoomId: 'ancient_ruins_sun_dial_patio', description: '測量線延向日晷露台' },
    ],
    monsters: [
      { monsterId: 'skeleton_soldier', maxCount: 2, respawnSeconds: 70 },
      { monsterId: 'giant_spider', maxCount: 1, respawnSeconds: 60 },
    ],
    mapSymbol: '[營]',
    mapX: 0,
    mapY: 1,
    guardianHints: {
      creature: '營地安全度較高，但冷灰被翻動代表有人剛離開。',
      treasure: '紅色警示釘可標出尚未觸發的陷阱區。',
      spirit: '測繪營地是現代人試圖替古代迷宮重新命名的地方。',
    },
  },

  ancient_ruins_sealed_stair: {
    id: 'ancient_ruins_sealed_stair',
    name: '封印階梯',
    zone: 'ancient_ruins' as RoomDef['zone'],
    image: 'ancient_ruins_sealed_stair.png',
    imagePrompt: '封印階梯 in ancient_ruins, sealed descending stair with stone locks, glowing dust, vines and ancient door, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text',
    description:
      '藤蔓迴廊東側藏著一段向下階梯，階梯口被三道石鎖封住，每道石鎖都刻著不同日月符號。鎖縫裡有細微光塵滲出，說明下層仍保存著某種運轉中的核心。這裡是遺跡中段的門檻房，玩家需要從方尖碑、倒影水池與日晷露台取得線索，才能依序打開石鎖。階梯旁堆著幾件破碎裝備，顯示有人曾試圖強行破門但失敗。若解鎖順序錯誤，石階會縮回牆內，並放出守衛巡邏整條藤蔓迴廊，迫使隊伍重新回收日月線索確認答案。這段線索也會影響後續任務判定，值得隊伍停下來仔細記錄。並能揭露更多古代防線細節。',
    exits: [
      { direction: 'west', targetRoomId: 'ancient_ruins_vine_choked_cloister', description: '藤路回到迴廊' },
      { direction: 'north', targetRoomId: 'ancient_ruins_moon_gate', description: '月符階梯通往月門' },
      { direction: 'down', targetRoomId: 'ancient_ruins_oracle_chamber', description: '開鎖後可下到神諭室' },
    ],
    monsters: [
      { monsterId: 'gargoyle', maxCount: 2, respawnSeconds: 120 },
      { monsterId: 'crystal_golem', maxCount: 1, respawnSeconds: 150 },
    ],
    mapSymbol: '[階]',
    mapX: 4,
    mapY: -3,
    guardianHints: {
      creature: '石鎖順序錯誤時，守衛會先從藤蔓迴廊方向出現。',
      treasure: '破碎裝備中有一枚刻著月符的護腕。',
      spirit: '封印階梯讓遺跡像在要求探索者先理解，再深入。',
    },
  },

  ancient_ruins_sun_dial_patio: {
    id: 'ancient_ruins_sun_dial_patio',
    name: '日晷露台',
    zone: 'ancient_ruins' as RoomDef['zone'],
    image: 'ancient_ruins_sun_dial_patio.png',
    imagePrompt: '日晷露台 in ancient_ruins, ruined sun dial patio with golden light, broken columns, engraved floor and desert wind, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text',
    description:
      '測繪營地北面是一座暴露在天空下的露台，中央日晷只剩半根指針，地面卻完整刻著十二道光影槽。露台邊緣能俯瞰整片遺跡，塌牆與柱影在午後排列成奇異幾何。這裡是解謎與大型路線房，玩家可用遺物藏室取得的青銅尺修復日晷，記錄特定時刻的影子，並把結果帶往月門或封印階梯。若站在錯誤光槽上，地底會傳來沉悶齒輪聲，晶化生物會從熱裂縫中爬出。露台同時也是觀察內聖所位置的最佳地點；當光影穿過正確槽線時，遠處聖所上方會短暫浮出白色光環。這段線索也會影響後續任務判定，值得隊伍停下來仔細記錄。',
    exits: [
      { direction: 'south', targetRoomId: 'ancient_ruins_survey_camp', description: '測量線回到營地' },
      { direction: 'east', targetRoomId: 'ancient_ruins_cracked_obelisk', description: '斷柱路回到方尖碑' },
      { direction: 'west', targetRoomId: 'ancient_ruins_vine_choked_cloister', description: '破拱門通向藤蔓迴廊' },
      { direction: 'north', targetRoomId: 'ancient_ruins_moon_gate', description: '光影槽指向月門' },
    ],
    monsters: [
      { monsterId: 'crystal_lizard', maxCount: 3, respawnSeconds: 80 },
      { monsterId: 'crystal_golem', maxCount: 1, respawnSeconds: 150 },
    ],
    mapSymbol: '[日]',
    mapX: 1,
    mapY: 2,
    guardianHints: {
      creature: '光槽亮起時，熱裂縫中的晶化生物會被喚醒。',
      treasure: '日晷半指針下藏著一枚黃金校準釘。',
      spirit: '日晷露台證明遺跡曾用天空來鎖住地下秘密。',
    },
  },

  ancient_ruins_moon_gate: {
    id: 'ancient_ruins_moon_gate',
    name: '月門',
    zone: 'ancient_ruins' as RoomDef['zone'],
    image: 'ancient_ruins_moon_gate.png',
    imagePrompt: '月門 in ancient_ruins, ancient moon gate with crescent runes, stone arch, pale light, dust and vines, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text',
    description:
      '月門是一座完整石拱，拱內沒有門板，只有一層像夜空般深藍的薄光。拱柱左右刻著月相符號，符號會隨倒影水池與日晷露台的解謎進度逐一亮起。這裡是通往遺跡深部的交通節點與任務門檻，玩家可提交日月兩組線索、校正拱門方向，或選擇暫時返回外層補給。月門前地面沒有灰塵，像有東西經常從門內外通過。若玩家未取得正確符號便靠近，薄光會反射出隊伍身後的守衛影像，下一刻石像就會從基座方向醒來。門前沒有戰利品，只有是否理解遺跡規則的考驗。這段線索也會影響後續任務判定，值得隊伍停下來仔細記錄。',
    exits: [
      { direction: 'west', targetRoomId: 'ancient_ruins_guardian_plinth', description: '符文軌道回到守衛基座' },
      { direction: 'south', targetRoomId: 'ancient_ruins_reflection_pool', description: '月相石階回到倒影水池' },
      { direction: 'east', targetRoomId: 'ancient_ruins_sealed_stair', description: '月符階梯通向封印階梯' },
      { direction: 'north', targetRoomId: 'ancient_ruins_sun_dial_patio', description: '光影槽回到日晷露台' },
    ],
    monsters: [
      { monsterId: 'gargoyle', maxCount: 2, respawnSeconds: 120 },
      { monsterId: 'crystal_golem', maxCount: 1, respawnSeconds: 150 },
    ],
    mapSymbol: '[月]',
    mapX: 3,
    mapY: 1,
    guardianHints: {
      creature: '月門反射出守衛影像時，真正的石像即將靠近。',
      treasure: '拱柱背面有一片可取下的月相石。',
      spirit: '月門讓古代遺跡的外層與深層像白晝與夜晚般分開。',
    },
  },

  ancient_ruins_echoing_crypt: {
    id: 'ancient_ruins_echoing_crypt',
    name: '回音墓室',
    zone: 'ancient_ruins' as RoomDef['zone'],
    image: 'ancient_ruins_echoing_crypt.png',
    imagePrompt: '回音墓室 in ancient_ruins, echoing crypt with stone sarcophagi, pale dust, broken seals and shadowed alcoves, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text',
    description:
      '構裝間下方側門通向一座低矮墓室，兩排石棺沿牆排列，棺蓋上刻著與資料庫陶板相同的星象符號。墓室聲音異常清晰，哪怕只是衣角掃過石面，也會在拱頂下反覆回響。這裡是戰鬥與敘事房，玩家可調查誰被安葬在遺跡核心旁，收集墓銘拓片，或尋找開啟神諭室側門的葬儀詞。許多棺蓋已有從內部推開的裂痕，代表守墓者並未真正安息。若玩家念錯葬儀詞，所有回音都會變成同一句警告，並把沉睡骷髏的腳步聲從每一具石棺後方放大。這段線索也會影響後續任務判定，值得隊伍停下來仔細記錄。',
    exits: [
      { direction: 'north', targetRoomId: 'ancient_ruins_construct_bay', description: '側門回到構裝間' },
      { direction: 'east', targetRoomId: 'ancient_ruins_oracle_chamber', description: '墓道通向神諭室' },
    ],
    monsters: [
      { monsterId: 'skeleton_soldier', maxCount: 4, respawnSeconds: 70 },
      { monsterId: 'skeleton_general', maxCount: 1, respawnSeconds: 180 },
    ],
    mapSymbol: '[墓]',
    mapX: 3,
    mapY: -2,
    guardianHints: {
      creature: '回音變成同一句警告時，石棺內的守墓者正在醒來。',
      treasure: '主棺足端藏著一枚星象葬儀印。',
      spirit: '回音墓室讓遺跡的死者仍參與守護核心。',
    },
  },

  ancient_ruins_construct_bay: {
    id: 'ancient_ruins_construct_bay',
    name: '構裝間',
    zone: 'ancient_ruins' as RoomDef['zone'],
    image: 'ancient_ruins_construct_bay.png',
    imagePrompt: '構裝間 in ancient_ruins, ancient construct bay with bronze rails, stone frames, crystal cores and broken machinery, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text',
    description:
      '機關走廊東側開成一間高大的維修間，地上嵌著青銅軌道，牆邊停放著半完成的石質構裝體。它們胸口有空洞插槽，周圍堆滿破裂水晶、齒輪、石臂和刻滿編號的維修板。這裡是精英戰鬥與資源房，玩家可回收構裝零件、修復守衛基座資訊，或啟動一台失控構裝來打開神諭室路線。維修間天花板垂下許多斷鏈，風一吹便像鐘聲。若玩家碰觸核心架，沉睡構裝會依照古代指令辨認入侵者，並測試隊伍是否有資格進入內聖所。成功通過後，神諭室門上的部分符文會短暫鬆動。這段線索也會影響後續任務判定，值得隊伍停下來仔細記錄。',
    exits: [
      { direction: 'west', targetRoomId: 'ancient_ruins_trap_corridor', description: '青銅軌道回到機關走廊' },
      { direction: 'north', targetRoomId: 'ancient_ruins_guardian_plinth', description: '沉重軌道上到守衛基座' },
      { direction: 'south', targetRoomId: 'ancient_ruins_echoing_crypt', description: '側門下到回音墓室' },
      { direction: 'east', targetRoomId: 'ancient_ruins_oracle_chamber', description: '維修通道通向神諭室' },
    ],
    monsters: [
      { monsterId: 'divine_construct', maxCount: 1, respawnSeconds: 240 },
      { monsterId: 'crystal_golem', maxCount: 1, respawnSeconds: 150 },
      { monsterId: 'gargoyle', maxCount: 1, respawnSeconds: 120 },
    ],
    mapSymbol: '[構]',
    mapX: 3,
    mapY: -1,
    guardianHints: {
      creature: '核心架亮起時，構裝體會先掃描最近的玩家。',
      treasure: '維修板上記錄著守衛基座的啟動序列。',
      spirit: '構裝間顯示古代文明曾把石頭訓練成士兵。',
    },
  },

  ancient_ruins_oracle_chamber: {
    id: 'ancient_ruins_oracle_chamber',
    name: '神諭室',
    zone: 'ancient_ruins' as RoomDef['zone'],
    image: 'ancient_ruins_oracle_chamber.png',
    imagePrompt: '神諭室 in ancient_ruins, oracle chamber with suspended crystal, circular runes, broken seats and sacred light, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text',
    description:
      '封印階梯下方的神諭室呈圓形，中央懸著一枚裂開的水晶，水晶下方刻著多層同心符文。周圍石座面向中央，像昔日祭司或學者曾在這裡聆聽某種來自天象的答案。這裡是大型事件前置房，玩家可把日月線索、星象陶板與構裝序列組合起來，詢問內聖所真正封印的是什麼。水晶會用斷續影像回應，顯示城市被光吞沒、守衛轉向居民、以及最後一名祭司關閉聖所的畫面。若玩家強行取下水晶碎片，房間會召回構裝與骷髏進行最後警告，也會讓內聖所核心提前進入不穩定狀態。這段線索也會影響後續任務判定，值得隊伍停下來仔細記錄。',
    exits: [
      { direction: 'up', targetRoomId: 'ancient_ruins_sealed_stair', description: '階梯回到封印門口' },
      { direction: 'west', targetRoomId: 'ancient_ruins_construct_bay', description: '維修通道回到構裝間' },
      { direction: 'south', targetRoomId: 'ancient_ruins_echoing_crypt', description: '墓道回到回音墓室' },
      { direction: 'east', targetRoomId: 'ancient_ruins_inner_sanctum', description: '符文門通向內聖所' },
    ],
    monsters: [
      { monsterId: 'divine_construct', maxCount: 1, respawnSeconds: 240 },
      { monsterId: 'skeleton_general', maxCount: 1, respawnSeconds: 180 },
      { monsterId: 'crystal_golem', maxCount: 1, respawnSeconds: 150 },
    ],
    mapSymbol: '[諭]',
    mapX: 4,
    mapY: -2,
    guardianHints: {
      creature: '水晶影像開始倒轉時，房間會召回全部守衛。',
      treasure: '裂晶邊緣可取得神諭碎片，但會觸發警戒。',
      spirit: '神諭室保存的不是答案，而是古代人最後一次提問。',
    },
  },

  ancient_ruins_inner_sanctum: {
    id: 'ancient_ruins_inner_sanctum',
    name: '內聖所',
    zone: 'ancient_ruins' as RoomDef['zone'],
    image: 'ancient_ruins_inner_sanctum.png',
    imagePrompt: '內聖所 in ancient_ruins, inner sanctum with radiant sealed core, ancient pillars, floating dust, broken guardian statues, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text',
    description:
      '神諭室東側的符文門後，是整座古代遺跡最深的內聖所。高柱圍成圓環，中央地面封著一枚發白光的核心，光芒被多道斷裂石環壓住，仍然讓空氣像熱浪般扭曲。四周倒著破碎守衛像、祭司面具與大量尚未腐朽的白色花瓣，彷彿封印完成後時間在此停住。這裡是區域大型事件鉤子與 Boss 級地標，玩家可選擇加固封印、取走核心碎片，或把神諭室得到的真相帶回測繪營地。任何選擇都會改變遺跡守衛的反應。若隊伍貪取太多光核，內聖所會啟動最終防衛，讓構裝、石像與水晶守衛同時甦醒，並把整座遺跡推向重新封閉。',
    exits: [
      { direction: 'west', targetRoomId: 'ancient_ruins_oracle_chamber', description: '符文門回到神諭室' },
    ],
    monsters: [
      { monsterId: 'divine_construct', maxCount: 1, respawnSeconds: 300 },
      { monsterId: 'crystal_guardian', maxCount: 1, respawnSeconds: 240 },
      { monsterId: 'crystal_golem', maxCount: 1, respawnSeconds: 180 },
    ],
    mapSymbol: '[聖]',
    mapX: 5,
    mapY: -2,
    guardianHints: {
      creature: '白光核心脈動三次後，最終守衛會按序醒來。',
      treasure: '核心外圍可取得光核碎片，但會改變封印狀態。',
      spirit: '內聖所是古代文明選擇把自己的錯誤關起來的地方。',
    },
  },
  marsh_of_mirrors_reed_gate: {
    id: 'marsh_of_mirrors_reed_gate',
    name: '蘆葦入口',
    zone: 'marsh_of_mirrors' as RoomDef['zone'],
    image: 'marsh_of_mirrors_reed_gate.png',
    imagePrompt: '蘆葦入口 in marsh_of_mirrors, marsh entrance framed by tall reeds, black water, mist, warning posts and mirrored sky, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text',
    description:
      '鏡沼外圍的蘆葦高過人頭，入口只是一道被旅人踩出的濕泥缺口，兩側插著刻有警告符號的木樁。水面倒映出的天空比真實天空更暗，偶爾還會映出不存在的鳥影。這裡是進出鏡沼的交通錨點，玩家可整理解毒藥、標記回程路線，並從木樁上的缺口判斷最近有哪些隊伍進入後沒有返回。入口附近看似安靜，實際上毒蛙會藏在蘆葦根部，史萊姆則沿黑水邊緣蠕動。若霧突然變厚，回頭路會被蘆葦重新遮住。這裡的線索會改變後續鏡沼路線判定，隊伍最好先記錄真實地標，再相信任何倒影。這點尤其關鍵。',
    exits: [
      { direction: 'east', targetRoomId: 'marsh_of_mirrors_blackwater_path', description: '黑水小徑伸入沼澤' },
      { direction: 'north', targetRoomId: 'marsh_of_mirrors_peat_islet', description: '較乾的泥脊通向泥炭小洲' },
    ],
    monsters: [
      { monsterId: 'poison_toad', maxCount: 2, respawnSeconds: 70 },
      { monsterId: 'green_slime', maxCount: 2, respawnSeconds: 55 },
    ],
    mapSymbol: '[葦]',
    mapX: 0,
    mapY: 0,
    guardianHints: {
      creature: '蘆葦根部鼓起氣泡時，毒蛙正在準備伏擊。',
      treasure: '警告木樁背面刻著舊探路人的安全標記。',
      spirit: '蘆葦入口像鏡沼半睜的眼睛，允許旅人進入卻不保證放人離開。',
    },
  },

  marsh_of_mirrors_blackwater_path: {
    id: 'marsh_of_mirrors_blackwater_path',
    name: '黑水小徑',
    zone: 'marsh_of_mirrors' as RoomDef['zone'],
    image: 'marsh_of_mirrors_blackwater_path.png',
    imagePrompt: '黑水小徑 in marsh_of_mirrors, narrow muddy path over black marsh water, reeds, reflections, pale fog, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text',
    description:
      '蘆葦入口後方的黑水小徑只比鞋底寬些，兩側水面深得看不見底，倒影卻清楚得像玻璃。每走幾步，水中倒影就會慢半拍才跟上，讓人忍不住懷疑自己是否還在原來的位置。這裡是鏡沼的主要路線房，連接銀面池、毒蛙泥潭與歪木棧道，也是最容易迷路的第一段。玩家可沿著水邊拾取草藥與腐木，但必須記住真實路標而非倒影。毒蛙、史萊姆和水下蛇影會輪流利用黑水遮掩靠近。若失去方向，應回到蘆葦入口重新校準路線。',
    exits: [
      { direction: 'west', targetRoomId: 'marsh_of_mirrors_reed_gate', description: '泥路回到蘆葦入口' },
      { direction: 'east', targetRoomId: 'marsh_of_mirrors_silver_pool', description: '銀色水光在前方' },
      { direction: 'south', targetRoomId: 'marsh_of_mirrors_frog_mire', description: '蛙鳴來自南側泥潭' },
      { direction: 'north', targetRoomId: 'marsh_of_mirrors_crooked_boardwalk', description: '歪斜木棧道在北側' },
    ],
    monsters: [
      { monsterId: 'poison_toad', maxCount: 3, respawnSeconds: 70 },
      { monsterId: 'green_slime', maxCount: 3, respawnSeconds: 55 },
      { monsterId: 'lake_serpent', maxCount: 1, respawnSeconds: 110 },
    ],
    mapSymbol: '[水]',
    mapX: 1,
    mapY: 0,
    guardianHints: {
      creature: '倒影慢半拍時，水下通常有湖蛇正在移動。',
      treasure: '黑水邊的腐木內藏著解毒草根。',
      spirit: '黑水小徑讓鏡沼用最簡單的路教會旅人懷疑眼睛。',
    },
  },

  marsh_of_mirrors_silver_pool: {
    id: 'marsh_of_mirrors_silver_pool',
    name: '銀面池',
    zone: 'marsh_of_mirrors' as RoomDef['zone'],
    image: 'marsh_of_mirrors_silver_pool.png',
    imagePrompt: '銀面池 in marsh_of_mirrors, silver reflective marsh pool, pale reeds, mist, moonlike surface and dark trees, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text',
    description:
      '黑水小徑東端展開一片平靜水池，池面泛著銀灰光澤，無論白天夜晚都像映著月亮。池邊泥土硬實，卻佈滿方向相反的足跡，像有人從倒影世界走上岸。這裡是探索與資源房，玩家可採集銀藻、觀察錯位倒影，並學會判斷鏡沼幻象的基本規則。池底偶爾浮出完整的星空圖案，與天空並不一致，暗示鏡沼深處有更強的反射核心。若玩家盯著池面太久，倒影會先一步做出不屬於本人的動作，引來毒蛙與水蛇圍攻。這裡的線索會改變後續鏡沼路線判定，隊伍最好先記錄真實地標，再相信任何倒影。這點尤其關鍵。',
    exits: [
      { direction: 'west', targetRoomId: 'marsh_of_mirrors_blackwater_path', description: '黑水小徑在西側' },
      { direction: 'east', targetRoomId: 'marsh_of_mirrors_mirror_pond', description: '更深倒影通向鏡池' },
      { direction: 'north', targetRoomId: 'marsh_of_mirrors_mist_blind', description: '霧幕缺口在北面' },
    ],
    monsters: [
      { monsterId: 'poison_toad', maxCount: 2, respawnSeconds: 70 },
      { monsterId: 'lake_serpent', maxCount: 2, respawnSeconds: 110 },
      { monsterId: 'green_slime', maxCount: 2, respawnSeconds: 55 },
    ],
    mapSymbol: '[銀]',
    mapX: 2,
    mapY: 0,
    guardianHints: {
      creature: '倒影先動時，下一次攻擊通常來自水面下方。',
      treasure: '銀藻只長在月影最亮的池邊。',
      spirit: '銀面池是鏡沼第一次明確告訴旅人，這裡的水會撒謊。',
    },
  },

  marsh_of_mirrors_frog_mire: {
    id: 'marsh_of_mirrors_frog_mire',
    name: '毒蛙泥潭',
    zone: 'marsh_of_mirrors' as RoomDef['zone'],
    image: 'marsh_of_mirrors_frog_mire.png',
    imagePrompt: '毒蛙泥潭 in marsh_of_mirrors, muddy frog mire with toxic bubbles, reeds, green fog and huge toad silhouettes, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text',
    description:
      '黑水小徑南側的泥潭被毒蛙佔據，濃綠氣泡從泥底冒出，破裂時釋放出刺鼻霧氣。泥面看似柔軟，實際下方有許多被蛙舌拖出的深洞。這裡是高密度戰鬥與採集房，玩家可收集毒腺、蛙皮與解毒草，也能完成清理毒霧或捕捉活體樣本的任務。泥潭周圍的蘆葦倒影比實物更加密集，會遮住真正安全的落腳點。若不先辨認氣泡方向，隊伍可能被毒蛙從三面同時包圍。',
    exits: [
      { direction: 'north', targetRoomId: 'marsh_of_mirrors_blackwater_path', description: '泥痕回到黑水小徑' },
      { direction: 'east', targetRoomId: 'marsh_of_mirrors_poison_bloom_bed', description: '毒花氣味往東延伸' },
      { direction: 'south', targetRoomId: 'marsh_of_mirrors_spider_reeds', description: '蛛絲掛在南側蘆葦' },
    ],
    monsters: [
      { monsterId: 'poison_toad', maxCount: 5, respawnSeconds: 70 },
      { monsterId: 'green_slime', maxCount: 2, respawnSeconds: 55 },
    ],
    mapSymbol: '[蛙]',
    mapX: 1,
    mapY: -1,
    guardianHints: {
      creature: '毒蛙腮幫鼓起前，泥潭氣泡會先聚成一圈。',
      treasure: '最大氣泡旁通常長著高品質解毒草。',
      spirit: '毒蛙泥潭是鏡沼把毒素變成日常呼吸的地方。',
    },
  },

  marsh_of_mirrors_crooked_boardwalk: {
    id: 'marsh_of_mirrors_crooked_boardwalk',
    name: '歪木棧道',
    zone: 'marsh_of_mirrors' as RoomDef['zone'],
    image: 'marsh_of_mirrors_crooked_boardwalk.png',
    imagePrompt: '歪木棧道 in marsh_of_mirrors, crooked wooden boardwalk over marsh, broken planks, hanging moss, fog and mirrored water, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text',
    description:
      '黑水小徑北側有一段歪斜木棧道，木板被水泡得發黑，許多地方只靠生鏽釘子勉強固定。棧道下方的水面映出完整直路，與現實裡的破洞和彎折完全不同。這裡是交通與探索房，玩家可在較安全高度穿過沼澤，前往霧盲處、沉柳與泥炭小洲，也能修補木板建立回程捷徑。棧道柱子上綁著前人留下的布條，顏色越新，代表迷路風險越高。若踩到會回聲的空板，水下湖蛇會跟著震動追來。',
    exits: [
      { direction: 'south', targetRoomId: 'marsh_of_mirrors_blackwater_path', description: '木階下回黑水小徑' },
      { direction: 'east', targetRoomId: 'marsh_of_mirrors_mist_blind', description: '棧道伸向霧盲處' },
      { direction: 'north', targetRoomId: 'marsh_of_mirrors_peat_islet', description: '乾木橋通向泥炭小洲' },
      { direction: 'west', targetRoomId: 'marsh_of_mirrors_sunken_willow', description: '倒木路通向沉水柳' },
    ],
    monsters: [
      { monsterId: 'lake_serpent', maxCount: 2, respawnSeconds: 110 },
      { monsterId: 'giant_spider', maxCount: 2, respawnSeconds: 60 },
    ],
    mapSymbol: '[棧]',
    mapX: 1,
    mapY: 1,
    guardianHints: {
      creature: '空板發出悶響時，湖蛇會從棧道陰影跟上。',
      treasure: '新布條旁常有迷路者留下的求救刻痕。',
      spirit: '歪木棧道證明在鏡沼裡，安全往往只是高度帶來的錯覺。',
    },
  },

  marsh_of_mirrors_mist_blind: {
    id: 'marsh_of_mirrors_mist_blind',
    name: '霧盲處',
    zone: 'marsh_of_mirrors' as RoomDef['zone'],
    image: 'marsh_of_mirrors_mist_blind.png',
    imagePrompt: '霧盲處 in marsh_of_mirrors, dense blind fog over marsh, reed silhouettes, faint lantern, mirrored puddles, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text',
    description:
      '銀面池與歪木棧道之間有一片霧盲處，白霧濃到伸手只能看見指尖水珠。聲音在霧裡被拉長，腳步聲可能來自同伴，也可能只是倒影模仿。這裡是迷路與任務觸發房，玩家可用蘆葦入口取得的標記校準方向，尋找被霧困住的旅人，或追蹤一盞總在遠處閃爍的假燈。霧盲處不適合久留，毒蛙與蜘蛛會利用視線阻隔進行伏擊。若玩家跟著倒影前進，可能直接走入鏡池或破碎倒影區。',
    exits: [
      { direction: 'west', targetRoomId: 'marsh_of_mirrors_crooked_boardwalk', description: '摸索回歪木棧道' },
      { direction: 'south', targetRoomId: 'marsh_of_mirrors_silver_pool', description: '銀色水光在南面' },
      { direction: 'east', targetRoomId: 'marsh_of_mirrors_mirror_pond', description: '遠方假燈通向鏡池' },
      { direction: 'north', targetRoomId: 'marsh_of_mirrors_echo_fen', description: '回聲從北面濕地傳來' },
    ],
    monsters: [
      { monsterId: 'poison_toad', maxCount: 2, respawnSeconds: 70 },
      { monsterId: 'giant_spider', maxCount: 3, respawnSeconds: 60 },
    ],
    mapSymbol: '[霧]',
    mapX: 2,
    mapY: 1,
    guardianHints: {
      creature: '假燈停住時，蜘蛛通常已經在霧裡結好網。',
      treasure: '迷路旅人的腰包裡常有未寄出的求救信。',
      spirit: '霧盲處讓鏡沼不必移動地形，就能讓旅人失去方向。',
    },
  },

  marsh_of_mirrors_mirror_pond: {
    id: 'marsh_of_mirrors_mirror_pond',
    name: '鏡池',
    zone: 'marsh_of_mirrors' as RoomDef['zone'],
    image: 'marsh_of_mirrors_mirror_pond.png',
    imagePrompt: '鏡池 in marsh_of_mirrors, perfect mirror pond reflecting impossible sky, black reeds, pale mist and still water, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text',
    description:
      '鏡池比銀面池更平靜，水面平整得像磨亮黑玻璃，倒映出一座不存在的塔、一輪不合時令的月亮，以及站在玩家身後的陌生人影。池邊沒有蟲鳴，只有自己的呼吸被倒影重複。這裡是核心解謎前置房，玩家可觀察錯誤倒影、取得鏡水樣本，並確認鏡沼真正的力量源頭並非毒霧，而是水面下的反射核心。若玩家攻擊倒影，水面會裂成多片，直接連向破碎倒影區。鏡池周圍潛伏的湖蛇會利用玩家分神時發動突襲。這裡的線索會改變後續鏡沼路線判定，隊伍最好先記錄真實地標，再相信任何倒影。這點尤其關鍵。',
    exits: [
      { direction: 'west', targetRoomId: 'marsh_of_mirrors_silver_pool', description: '水光回到銀面池' },
      { direction: 'north', targetRoomId: 'marsh_of_mirrors_shattered_reflection', description: '裂紋水面通向破碎倒影' },
      { direction: 'east', targetRoomId: 'marsh_of_mirrors_sunken_willow', description: '倒柳影子通向沉水柳' },
      { direction: 'south', targetRoomId: 'marsh_of_mirrors_poison_bloom_bed', description: '毒花倒影在南面' },
    ],
    monsters: [
      { monsterId: 'lake_serpent', maxCount: 3, respawnSeconds: 110 },
      { monsterId: 'green_slime', maxCount: 3, respawnSeconds: 55 },
    ],
    mapSymbol: '[鏡]',
    mapX: 3,
    mapY: 0,
    guardianHints: {
      creature: '若倒影身後多出陌生人影，湖蛇會從同一方向靠近。',
      treasure: '完整鏡水樣本只能在水面未裂時取得。',
      spirit: '鏡池是鏡沼的謊言最接近真相的地方。',
    },
  },

  marsh_of_mirrors_sunken_willow: {
    id: 'marsh_of_mirrors_sunken_willow',
    name: '沉水柳',
    zone: 'marsh_of_mirrors' as RoomDef['zone'],
    image: 'marsh_of_mirrors_sunken_willow.png',
    imagePrompt: '沉水柳 in marsh_of_mirrors, sunken willow tree in black marsh water, hanging roots, mist, reflections and pale fungi, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text',
    description:
      '一棵巨大的柳樹半沉在沼水中，樹冠倒垂，細長枝條像濕髮般貼著水面。根部仍活著，卻從黑水中吸收了暗色汁液，樹皮上長出微微發亮的白菌。這裡是自然資源與精英前置房，玩家可採集柳根、白菌與腐化樹液，也能追查暗黑樹人的活動痕跡。沉水柳的倒影比本體更完整，像另一棵樹正從水下向上生長。若砍錯枝條，水下倒影會先流血，然後引來樹人與蜘蛛守衛。',
    exits: [
      { direction: 'west', targetRoomId: 'marsh_of_mirrors_crooked_boardwalk', description: '倒木路回到歪木棧道' },
      { direction: 'east', targetRoomId: 'marsh_of_mirrors_mirror_pond', description: '倒柳影回到鏡池' },
      { direction: 'north', targetRoomId: 'marsh_of_mirrors_dark_treant_grove', description: '根系延向暗樹林' },
    ],
    monsters: [
      { monsterId: 'dark_treant', maxCount: 1, respawnSeconds: 160 },
      { monsterId: 'giant_spider', maxCount: 2, respawnSeconds: 60 },
      { monsterId: 'green_slime', maxCount: 2, respawnSeconds: 55 },
    ],
    mapSymbol: '[柳]',
    mapX: 4,
    mapY: 0,
    guardianHints: {
      creature: '倒影先流血時，暗黑樹人很快會從根系中醒來。',
      treasure: '白菌附著的柳根可作為高價藥材。',
      spirit: '沉水柳讓人看見鏡沼如何把植物也分成兩個生命。',
    },
  },

  marsh_of_mirrors_poison_bloom_bed: {
    id: 'marsh_of_mirrors_poison_bloom_bed',
    name: '毒花床',
    zone: 'marsh_of_mirrors' as RoomDef['zone'],
    image: 'marsh_of_mirrors_poison_bloom_bed.png',
    imagePrompt: '毒花床 in marsh_of_mirrors, bed of poisonous marsh flowers, green vapor, mirrored puddles, dark reeds, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text',
    description:
      '毒蛙泥潭東側長滿紫綠色毒花，花瓣厚得像濕蠟，花心持續吐出淡綠霧氣。這裡的水窪倒映出花朵尚未開放時的樣子，讓採集者很難分辨哪一株已經成熟。這裡是資源與事件房，玩家可採集毒花、調配解毒材料，或完成淨化霧源的任務。毒花根部常有綠色史萊姆吸附，毒蛙也會在霧氣最濃處等待獵物暈眩。若玩家採下帶有錯誤倒影的花，毒霧會短暫變成黑色，指向鏡水核心正在污染整片沼澤。這裡的線索會改變後續鏡沼路線判定，隊伍最好先記錄真實地標，再相信任何倒影。這點尤其關鍵。',
    exits: [
      { direction: 'west', targetRoomId: 'marsh_of_mirrors_frog_mire', description: '毒泥路回到蛙潭' },
      { direction: 'north', targetRoomId: 'marsh_of_mirrors_mirror_pond', description: '鏡池在北面' },
      { direction: 'east', targetRoomId: 'marsh_of_mirrors_shattered_reflection', description: '黑霧指向破碎倒影' },
    ],
    monsters: [
      { monsterId: 'green_slime', maxCount: 4, respawnSeconds: 55 },
      { monsterId: 'poison_toad', maxCount: 3, respawnSeconds: 70 },
    ],
    mapSymbol: '[花]',
    mapX: 2,
    mapY: -1,
    guardianHints: {
      creature: '毒花霧氣變黑時，附近史萊姆會立刻聚集。',
      treasure: '成熟毒花只在倒影仍閉合時可以安全採下。',
      spirit: '毒花床把鏡沼的美與毒放在同一片花瓣上。',
    },
  },

  marsh_of_mirrors_spider_reeds: {
    id: 'marsh_of_mirrors_spider_reeds',
    name: '蛛網蘆叢',
    zone: 'marsh_of_mirrors' as RoomDef['zone'],
    image: 'marsh_of_mirrors_spider_reeds.png',
    imagePrompt: '蛛網蘆叢 in marsh_of_mirrors, reeds strung with spider webs, dew, black water, green fog and hidden spiders, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text',
    description:
      '毒蛙泥潭南面是一片密集蘆叢，蛛絲從蘆葉連到枯木，掛滿水珠後像一面面破碎小鏡。許多絲線不在視線正前方，而是藏在倒影裡，等旅人跨步時才拉住腳踝。這裡是戰鬥與採集房，玩家可收集蛛絲、蛛毒和被困旅人的物品，也能清出一條通往失路石堆的安全路線。蜘蛛會利用毒霧與水面反光遮掩位置，毒蛙則躲在蘆根補上第二波攻擊。若隊伍帶火，蛛網會迅速收縮，暴露隱藏巢穴。這裡的線索會改變後續鏡沼路線判定，隊伍最好先記錄真實地標，再相信任何倒影。這點尤其關鍵。務必小心前進。',
    exits: [
      { direction: 'north', targetRoomId: 'marsh_of_mirrors_frog_mire', description: '蛙鳴來自北側泥潭' },
      { direction: 'east', targetRoomId: 'marsh_of_mirrors_lost_cairn', description: '蛛絲路通往失路石堆' },
    ],
    monsters: [
      { monsterId: 'giant_spider', maxCount: 4, respawnSeconds: 60 },
      { monsterId: 'poison_toad', maxCount: 2, respawnSeconds: 70 },
    ],
    mapSymbol: '[蛛]',
    mapX: 1,
    mapY: -2,
    guardianHints: {
      creature: '倒影裡先出現蛛絲時，真正陷阱在腳邊。',
      treasure: '水珠最密的蛛網通常保存完整蛛絲。',
      spirit: '蛛網蘆叢讓鏡沼的每一道反光都可能變成繩索。',
    },
  },

  marsh_of_mirrors_lost_cairn: {
    id: 'marsh_of_mirrors_lost_cairn',
    name: '失路石堆',
    zone: 'marsh_of_mirrors' as RoomDef['zone'],
    image: 'marsh_of_mirrors_lost_cairn.png',
    imagePrompt: '失路石堆 in marsh_of_mirrors, cairn of stones in marsh fog, charms, wet moss, reflected false paths, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text',
    description:
      '蛛網蘆叢東側有一堆人為壘起的濕石，每顆石頭都刻著方向箭頭，卻沒有兩個箭頭指向同一條路。石堆上掛著失蹤旅人的護符、魚骨、布條和被水泡白的名字牌。這裡是探索與任務房，玩家可辨認正確路標、收集失蹤者遺物，或把鏡沼裡的錯誤路線重新記錄下來。石堆倒影中有時會出現尚未壘上的新石，像在預告下一個迷路者。若玩家隨意搬動石頭，整片霧會改變方向，把隊伍推向破碎倒影或蛇道。',
    exits: [
      { direction: 'west', targetRoomId: 'marsh_of_mirrors_spider_reeds', description: '蛛絲路回到蘆叢' },
      { direction: 'east', targetRoomId: 'marsh_of_mirrors_shattered_reflection', description: '錯誤箭頭指向破碎倒影' },
      { direction: 'south', targetRoomId: 'marsh_of_mirrors_serpent_channel', description: '低水道通向蛇道' },
    ],
    monsters: [
      { monsterId: 'green_slime', maxCount: 3, respawnSeconds: 55 },
      { monsterId: 'giant_spider', maxCount: 2, respawnSeconds: 60 },
    ],
    mapSymbol: '[堆]',
    mapX: 2,
    mapY: -2,
    guardianHints: {
      creature: '石堆倒影若多出新石，附近有迷路者或獵物將出現。',
      treasure: '名字牌背後常刻著最後看見的方向。',
      spirit: '失路石堆是鏡沼吞下旅人後留下的紀錄方式。',
    },
  },

  marsh_of_mirrors_shattered_reflection: {
    id: 'marsh_of_mirrors_shattered_reflection',
    name: '破碎倒影',
    zone: 'marsh_of_mirrors' as RoomDef['zone'],
    image: 'marsh_of_mirrors_shattered_reflection.png',
    imagePrompt: '破碎倒影 in marsh_of_mirrors, cracked mirror-like water surface, shards of reflected sky, black reeds and eerie fog, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text',
    description:
      '鏡池北側的水面像被看不見的力量敲碎，分成無數不連續的倒影碎片。每一片都映出不同天色、不同隊伍位置，甚至不同時間的自己。這裡是大型事件前置房，玩家可研究倒影裂紋、收集鏡片水膜，並找到通往玻璃水核心的第一組路徑規則。破碎倒影會讓怪物行動看似瞬移，毒蛙與湖蛇會從不該相連的水面突然躍出。若玩家能找出哪一片倒影沒有延遲，就能避開錯誤路線；若判斷失敗，隊伍會被送往蛇道或迷霧更深處。這裡的線索會改變後續鏡沼路線判定，隊伍最好先記錄真實地標，再相信任何倒影。',
    exits: [
      { direction: 'south', targetRoomId: 'marsh_of_mirrors_mirror_pond', description: '裂紋水面回到鏡池' },
      { direction: 'west', targetRoomId: 'marsh_of_mirrors_lost_cairn', description: '錯誤箭頭回到失路石堆' },
      { direction: 'east', targetRoomId: 'marsh_of_mirrors_glasswater_core', description: '無延遲倒影通向玻璃水核心' },
      { direction: 'north', targetRoomId: 'marsh_of_mirrors_echo_fen', description: '回聲濕地在北側' },
    ],
    monsters: [
      { monsterId: 'lake_serpent', maxCount: 2, respawnSeconds: 110 },
      { monsterId: 'poison_toad', maxCount: 3, respawnSeconds: 70 },
      { monsterId: 'green_slime', maxCount: 2, respawnSeconds: 55 },
    ],
    mapSymbol: '[碎]',
    mapX: 3,
    mapY: -1,
    guardianHints: {
      creature: '不連續倒影會讓湖蛇看似從另一片水面躍出。',
      treasure: '沒有延遲的倒影碎片能保存鏡片水膜。',
      spirit: '破碎倒影是鏡沼開始露出核心裂縫的地方。',
    },
  },

  marsh_of_mirrors_peat_islet: {
    id: 'marsh_of_mirrors_peat_islet',
    name: '泥炭小洲',
    zone: 'marsh_of_mirrors' as RoomDef['zone'],
    image: 'marsh_of_mirrors_peat_islet.png',
    imagePrompt: '泥炭小洲 in marsh_of_mirrors, small peat islet above marsh water, moss, reeds, camp remains and fog, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text',
    description:
      '蘆葦入口北面的泥炭小洲是少數不會立刻下陷的乾地，地面覆滿黑褐苔蘚，中央留著舊營火圈與幾根插成三角的測路桿。這裡是補給與交通房，玩家可短暫休息、重新整理鏡沼標記，也能從營火灰裡發現前一隊留下的未完成地圖。小洲邊緣水面不斷退縮又回來，像有什麼在測量岸線。若玩家修復測路桿，可以建立通往歪木棧道與回聲濕地的穩定捷徑；若忽略苔蘚上的蛇痕，夜裡會被湖蛇包圍。',
    exits: [
      { direction: 'south', targetRoomId: 'marsh_of_mirrors_reed_gate', description: '泥脊回到蘆葦入口' },
      { direction: 'east', targetRoomId: 'marsh_of_mirrors_crooked_boardwalk', description: '乾木橋通往歪木棧道' },
      { direction: 'north', targetRoomId: 'marsh_of_mirrors_echo_fen', description: '測路桿指向回聲濕地' },
    ],
    monsters: [
      { monsterId: 'lake_serpent', maxCount: 2, respawnSeconds: 110 },
      { monsterId: 'green_slime', maxCount: 2, respawnSeconds: 55 },
    ],
    mapSymbol: '[洲]',
    mapX: 0,
    mapY: 1,
    guardianHints: {
      creature: '苔蘚上的蛇痕若交叉成圈，湖蛇就在小洲邊緣等待。',
      treasure: '舊營火灰裡藏著一張半燒焦的鏡沼地圖。',
      spirit: '泥炭小洲讓旅人短暫相信，鏡沼仍有站穩腳步的地方。',
    },
  },

  marsh_of_mirrors_dark_treant_grove: {
    id: 'marsh_of_mirrors_dark_treant_grove',
    name: '暗樹林',
    zone: 'marsh_of_mirrors' as RoomDef['zone'],
    image: 'marsh_of_mirrors_dark_treant_grove.png',
    imagePrompt: '暗樹林 in marsh_of_mirrors, grove of dark twisted treants, mirror pools, roots, purple shadow sap and fog, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text',
    description:
      '沉水柳北面的樹林被暗色樹液污染，樹幹扭曲成像人形一樣的姿勢，根系伸入一口口小鏡池中。每棵樹都有兩個影子，一個落在地面，一個倒掛在水下。這裡是精英戰鬥與大型事件前置房，玩家可追查暗黑樹人如何被鏡水腐化，採集暗樹皮與黑色樹液，也能找到通往玻璃水核心的根系路線。暗樹林的敵人行動慢卻壓迫感強，會用根系封路，把隊伍逼到錯誤倒影旁。若玩家淨化沉水柳，這裡的部分樹根會暫時停止攻擊。這裡的線索會改變後續鏡沼路線判定，隊伍最好先記錄真實地標，再相信任何倒影。',
    exits: [
      { direction: 'south', targetRoomId: 'marsh_of_mirrors_sunken_willow', description: '根路回到沉水柳' },
      { direction: 'east', targetRoomId: 'marsh_of_mirrors_glasswater_core', description: '黑根延向玻璃水核心' },
      { direction: 'west', targetRoomId: 'marsh_of_mirrors_echo_fen', description: '回聲濕地在西側' },
    ],
    monsters: [
      { monsterId: 'dark_treant', maxCount: 2, respawnSeconds: 160 },
      { monsterId: 'giant_spider', maxCount: 2, respawnSeconds: 60 },
      { monsterId: 'green_slime', maxCount: 2, respawnSeconds: 55 },
    ],
    mapSymbol: '[樹]',
    mapX: 4,
    mapY: 1,
    guardianHints: {
      creature: '地上影子與水下影子分開時，暗黑樹人會封鎖退路。',
      treasure: '黑色樹液可從未完全腐化的根節採集。',
      spirit: '暗樹林是鏡沼把森林記憶扭成怪物的地方。',
    },
  },

  marsh_of_mirrors_serpent_channel: {
    id: 'marsh_of_mirrors_serpent_channel',
    name: '蛇行水道',
    zone: 'marsh_of_mirrors' as RoomDef['zone'],
    image: 'marsh_of_mirrors_serpent_channel.png',
    imagePrompt: '蛇行水道 in marsh_of_mirrors, winding serpent channel through dark marsh water, reeds, ripples and fog, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text',
    description:
      '失路石堆南面的水道蜿蜒得像巨蛇身體，水面一段明亮一段漆黑，讓人難以看清深度。兩岸蘆葦低伏，像被巨大身軀反覆壓過。這裡是高風險通道與戰鬥房，玩家可沿水道繞往沉沒小祠，也能追查湖蛇巢穴與失蹤貨箱。水道中段有多處氣泡旋渦，若倒影裡先出現波紋，真正的湖蛇很快會從身旁水面竄出。毒蛙也會利用蛇道留下的空洞藏身，形成連續伏擊。安全通過後，隊伍可取得通往小祠的隱蔽路線。這裡的線索會改變後續鏡沼路線判定，隊伍最好先記錄真實地標，再相信任何倒影。這點尤其關鍵。',
    exits: [
      { direction: 'north', targetRoomId: 'marsh_of_mirrors_lost_cairn', description: '低水道回到失路石堆' },
      { direction: 'east', targetRoomId: 'marsh_of_mirrors_sinking_shrine', description: '水道通往沉沒小祠' },
      { direction: 'west', targetRoomId: 'marsh_of_mirrors_spider_reeds', description: '蘆葦缺口連回蛛網蘆叢' },
    ],
    monsters: [
      { monsterId: 'lake_serpent', maxCount: 4, respawnSeconds: 110 },
      { monsterId: 'poison_toad', maxCount: 2, respawnSeconds: 70 },
    ],
    mapSymbol: '[蛇]',
    mapX: 2,
    mapY: -3,
    guardianHints: {
      creature: '倒影先出現波紋時，湖蛇會從相反方向竄出。',
      treasure: '旋渦邊的沉箱裡常有被水沖來的貨物。',
      spirit: '蛇行水道讓整片沼澤像一條正在呼吸的生物。',
    },
  },

  marsh_of_mirrors_echo_fen: {
    id: 'marsh_of_mirrors_echo_fen',
    name: '回聲濕地',
    zone: 'marsh_of_mirrors' as RoomDef['zone'],
    image: 'marsh_of_mirrors_echo_fen.png',
    imagePrompt: '回聲濕地 in marsh_of_mirrors, open fen with echoing fog, shallow water, reeds, distant lights and mirrored ripples, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text',
    description:
      '泥炭小洲北面是一片開闊濕地，水淺卻沒有明確路線，聲音會在霧裡反覆返回。隊伍喊出的名字可能從三個方向回應，其中一個回聲甚至會多說半句。這裡是迷路事件與交通分岔房，玩家可用測路桿校準聲音來源，尋找失蹤旅人，也能分辨暗樹林、破碎倒影與月光堤道的方向。濕地看似空曠，實際上毒蛙和蜘蛛會被聲音吸引，綠色史萊姆則貼著淺水邊緣移動。若追逐錯誤回聲，隊伍會被帶進霧更厚的區域。',
    exits: [
      { direction: 'south', targetRoomId: 'marsh_of_mirrors_peat_islet', description: '測路桿回到泥炭小洲' },
      { direction: 'east', targetRoomId: 'marsh_of_mirrors_dark_treant_grove', description: '低沉回聲來自暗樹林' },
      { direction: 'south', targetRoomId: 'marsh_of_mirrors_mist_blind', description: '白霧回到霧盲處' },
      { direction: 'north', targetRoomId: 'marsh_of_mirrors_moonlit_causeway', description: '月光水線通向堤道' },
    ],
    monsters: [
      { monsterId: 'poison_toad', maxCount: 3, respawnSeconds: 70 },
      { monsterId: 'giant_spider', maxCount: 2, respawnSeconds: 60 },
      { monsterId: 'green_slime', maxCount: 2, respawnSeconds: 55 },
    ],
    mapSymbol: '[聲]',
    mapX: 1,
    mapY: 2,
    guardianHints: {
      creature: '回聲多出半句時，那不是同伴，而是鏡沼在模仿。',
      treasure: '正確回聲方向常能找到失蹤旅人的防水包。',
      spirit: '回聲濕地讓聲音也成為鏡沼的一種倒影。',
    },
  },

  marsh_of_mirrors_moonlit_causeway: {
    id: 'marsh_of_mirrors_moonlit_causeway',
    name: '月光堤道',
    zone: 'marsh_of_mirrors' as RoomDef['zone'],
    image: 'marsh_of_mirrors_moonlit_causeway.png',
    imagePrompt: '月光堤道 in marsh_of_mirrors, narrow moonlit causeway across mirror marsh, pale stones, mist, black water, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text',
    description:
      '回聲濕地北面浮出一條由白石鋪成的窄堤，石面像被月光浸過，即使陰天也會發出微亮光澤。堤道兩側水面倒映著不存在的滿月，讓石路看起來像懸在夜空上。這裡是通往鏡沼深處的交通節點，玩家可藉由白石排列判斷前往沉沒小祠、巫燈處與玻璃水核心的路線。月光堤道上的敵人不多，但一旦戰鬥，任何後退都可能踏進倒影而非真路。若玩家帶著鏡池樣本，白石會短暫顯示安全順序。這裡的線索會改變後續鏡沼路線判定，隊伍最好先記錄真實地標，再相信任何倒影。這點尤其關鍵。務必小心前進。',
    exits: [
      { direction: 'south', targetRoomId: 'marsh_of_mirrors_echo_fen', description: '回聲濕地在南側' },
      { direction: 'east', targetRoomId: 'marsh_of_mirrors_hag_lantern', description: '遠處巫燈在東側閃爍' },
      { direction: 'west', targetRoomId: 'marsh_of_mirrors_sinking_shrine', description: '白石支路通向沉沒小祠' },
      { direction: 'north', targetRoomId: 'marsh_of_mirrors_glasswater_core', description: '最亮石路通向玻璃水核心' },
    ],
    monsters: [
      { monsterId: 'lake_serpent', maxCount: 2, respawnSeconds: 110 },
      { monsterId: 'poison_toad', maxCount: 2, respawnSeconds: 70 },
    ],
    mapSymbol: '[月]',
    mapX: 2,
    mapY: 3,
    guardianHints: {
      creature: '白石光澤忽暗時，敵人可能站在倒影路上等待。',
      treasure: '月光最亮的石縫裡可找到冷白色鏡砂。',
      spirit: '月光堤道像鏡沼短暫給出的正式邀請。',
    },
  },

  marsh_of_mirrors_sinking_shrine: {
    id: 'marsh_of_mirrors_sinking_shrine',
    name: '沉沒小祠',
    zone: 'marsh_of_mirrors' as RoomDef['zone'],
    image: 'marsh_of_mirrors_sinking_shrine.png',
    imagePrompt: '沉沒小祠 in marsh_of_mirrors, sinking shrine half submerged in marsh, candles, reeds, mirror water, green fog, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text',
    description:
      '蛇行水道與月光堤道之間有一座半沉入水中的小祠，屋脊只剩一半露出，供桌卻奇異地保持乾燥。祠內擺著濕蠟燭、鏡片、解毒草和刻有陌生祈詞的石碗。這裡是任務與大型事件前置房，玩家可替失蹤者獻上名字牌，調查鏡沼過去是否曾被人祭祀，或取得通往巫燈處的護符。小祠倒影比本體完整，像另一座未沉沒的祠堂仍在水下等待香火。若玩家拿走錯誤供品，水下倒影會召來湖蛇與毒蛙阻止離開。這裡的線索會改變後續鏡沼路線判定，隊伍最好先記錄真實地標，再相信任何倒影。這點尤其關鍵。',
    exits: [
      { direction: 'west', targetRoomId: 'marsh_of_mirrors_serpent_channel', description: '蛇形水道回到西側' },
      { direction: 'east', targetRoomId: 'marsh_of_mirrors_moonlit_causeway', description: '白石支路回到月光堤道' },
      { direction: 'north', targetRoomId: 'marsh_of_mirrors_hag_lantern', description: '護符指向巫燈處' },
    ],
    monsters: [
      { monsterId: 'lake_serpent', maxCount: 3, respawnSeconds: 110 },
      { monsterId: 'poison_toad', maxCount: 3, respawnSeconds: 70 },
    ],
    mapSymbol: '[祠]',
    mapX: 3,
    mapY: -3,
    guardianHints: {
      creature: '供桌變濕時，水下倒影已經開始召喚湖蛇。',
      treasure: '乾燥石碗裡藏著前往巫燈處的護符。',
      spirit: '沉沒小祠讓人懷疑鏡沼曾經不是詛咒，而是信仰。',
    },
  },

  marsh_of_mirrors_hag_lantern: {
    id: 'marsh_of_mirrors_hag_lantern',
    name: '巫燈處',
    zone: 'marsh_of_mirrors' as RoomDef['zone'],
    image: 'marsh_of_mirrors_hag_lantern.png',
    imagePrompt: '巫燈處 in marsh_of_mirrors, lone witch lantern over marsh water, crooked poles, fog, charms and mirror reflections, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text',
    description:
      '月光堤道東側懸著一盞孤燈，燈不是掛在樹上，而是被三根歪木桿支在水面中央。燈火呈暗綠色，倒影卻是深紫色，兩種光在霧中互相拉扯。周圍掛滿骨牌、草繩、破鏡片和不知名的藥包。這裡是精英事件與任務交涉房，玩家可追查操控假燈的巫術來源，破解鏡沼迷路現象，或取得進入玻璃水核心前需要的最後警示。雖然沒有真正的女巫站在燈下，但每次玩家靠近，燈影裡都會多出一個彎腰身影。這裡的線索會改變後續鏡沼路線判定，隊伍最好先記錄真實地標，再相信任何倒影。這點尤其關鍵。',
    exits: [
      { direction: 'west', targetRoomId: 'marsh_of_mirrors_moonlit_causeway', description: '白石路回到月光堤道' },
      { direction: 'south', targetRoomId: 'marsh_of_mirrors_sinking_shrine', description: '護符路回到沉沒小祠' },
      { direction: 'north', targetRoomId: 'marsh_of_mirrors_glasswater_core', description: '雙色燈影指向玻璃水核心' },
    ],
    monsters: [
      { monsterId: 'dark_treant', maxCount: 1, respawnSeconds: 160 },
      { monsterId: 'giant_spider', maxCount: 3, respawnSeconds: 60 },
      { monsterId: 'poison_toad', maxCount: 2, respawnSeconds: 70 },
    ],
    mapSymbol: '[燈]',
    mapX: 4,
    mapY: 3,
    guardianHints: {
      creature: '燈影裡多出彎腰身影時，暗樹根會從水下靠近。',
      treasure: '破鏡片串中有一片能指出核心真路。',
      spirit: '巫燈處是鏡沼用恐懼維持秩序的路標。',
    },
  },

  marsh_of_mirrors_glasswater_core: {
    id: 'marsh_of_mirrors_glasswater_core',
    name: '玻璃水核心',
    zone: 'marsh_of_mirrors' as RoomDef['zone'],
    image: 'marsh_of_mirrors_glasswater_core.png',
    imagePrompt: '玻璃水核心 in marsh_of_mirrors, central glasslike water core, impossible reflections, black reeds, glowing mist and ancient roots, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text',
    description:
      '鏡沼最深處是一片圓形水域，水面透明如玻璃，能看見下方並不是泥底，而是一片倒置天空。黑色蘆葦圍成外圈，暗樹根、月光堤道與破碎倒影都在此交會。中央水面浮著一枚緩慢轉動的透明核心，每次轉動都會讓整片沼澤的倒影偏移。這裡是鏡沼的大型事件鉤子與最終地標，玩家可選擇穩定核心、打碎它，或取走鏡片碎核作為任務證據。任何選擇都會引來沼澤生物反應：毒蛙鳴叫、湖蛇破水、暗樹根從邊緣收攏。若隊伍沒有先取得巫燈警示與鏡池樣本，核心會顯示錯誤出口，把人送回迷霧深處。',
    exits: [
      { direction: 'south', targetRoomId: 'marsh_of_mirrors_moonlit_causeway', description: '最亮石路回到月光堤道' },
      { direction: 'west', targetRoomId: 'marsh_of_mirrors_shattered_reflection', description: '裂紋水面回到破碎倒影' },
      { direction: 'east', targetRoomId: 'marsh_of_mirrors_dark_treant_grove', description: '黑根路回到暗樹林' },
      { direction: 'north', targetRoomId: 'marsh_of_mirrors_hag_lantern', description: '雙色燈影回到巫燈處' },
    ],
    monsters: [
      { monsterId: 'dark_treant', maxCount: 2, respawnSeconds: 160 },
      { monsterId: 'lake_serpent', maxCount: 2, respawnSeconds: 110 },
      { monsterId: 'poison_toad', maxCount: 3, respawnSeconds: 70 },
      { monsterId: 'green_slime', maxCount: 3, respawnSeconds: 55 },
    ],
    mapSymbol: '[核]',
    mapX: 4,
    mapY: 2,
    guardianHints: {
      creature: '核心轉動後，所有怪物會依照倒影偏移重新站位。',
      treasure: '透明核心外圈可取下鏡片碎核，但會改變整片沼澤。',
      spirit: '玻璃水核心是鏡沼所有謊言共同映出的真相。',
    },
  },

  redrock_badlands_dust_gate: {
    id: 'redrock_badlands_dust_gate',
    name: '沙塵隘口',
    zone: 'redrock_badlands' as RoomDef['zone'],
    image: 'redrock_badlands_dust_gate.png',
    imagePrompt: '沙塵隘口 in redrock_badlands, red rock desert pass with dust gate, warning stakes, dry wind and bandit tracks, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text',
    description:
      '赤岩荒地的入口是一道被紅色岩壁夾住的狹長隘口，風把細沙推成斜線，打在警告木樁與破旗上。地面同時有商隊車轍、盜匪靴印和野獸爪痕，沒有哪一種痕跡能保持完整太久。這裡是荒地的交通錨點與 PvP 風險提示房，玩家可確認補水、標記撤退路線，並從木樁上的懸賞紙判斷近期哪支盜匪團最活躍。隘口不完全安全，落單旅人常在進入後第一道轉彎就被盯上。若風聲突然變低，代表岩脊上有人正在觀察。這裡的地形與視野會直接影響玩家遭遇和撤退判定，隊伍最好先確認高處、掩體與回程路線。',
    exits: [
      { direction: 'east', targetRoomId: 'redrock_badlands_rustwash_pass', description: '紅沙路通向鏽水隘道' },
      { direction: 'north', targetRoomId: 'redrock_badlands_burnt_wagon', description: '焦黑車轍通向焚車殘骸' },
    ],
    monsters: [
      { monsterId: 'bandit', maxCount: 3, respawnSeconds: 55 },
      { monsterId: 'poison_snake', maxCount: 2, respawnSeconds: 65 },
    ],
    mapSymbol: '[隘]',
    mapX: 0,
    mapY: 0,
    guardianHints: {
      creature: '風聲突然變低時，岩脊上的盜匪斥候正在瞄準。',
      treasure: '懸賞紙背面常有商隊留下的安全暗號。',
      spirit: '沙塵隘口把旅人從有規矩的道路推進沒有規矩的荒地。',
    },
  },

  redrock_badlands_rustwash_pass: {
    id: 'redrock_badlands_rustwash_pass',
    name: '鏽水隘道',
    zone: 'redrock_badlands' as RoomDef['zone'],
    image: 'redrock_badlands_rustwash_pass.png',
    imagePrompt: '鏽水隘道 in redrock_badlands, dry wash stained rust red, narrow canyon path, cracked mud, dust and cliffs, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text',
    description:
      '隘口後方是一條乾涸河道，泥面被鐵鏽色礦物染成深紅，像曾有血水沿著谷底流過。兩側岩壁不高，卻足夠讓盜匪躲在上方投石或射箭。這裡是主路第一段，連接碎岩脊、乾裂谷與沙塵隘口，也是玩家第一次感受到 open PvP 壓力的地方。河道中央散著補給箱碎片和被曬裂的水袋，提醒隊伍不要把這裡當成普通通道。若沿著鏽色水痕追蹤，能找到紅礦切口與流放者活動方向。',
    exits: [
      { direction: 'west', targetRoomId: 'redrock_badlands_dust_gate', description: '紅沙路回到沙塵隘口' },
      { direction: 'east', targetRoomId: 'redrock_badlands_splinter_ridge', description: '河道爬向碎岩脊' },
      { direction: 'south', targetRoomId: 'redrock_badlands_dry_gulch', description: '乾裂谷在南側下陷' },
    ],
    monsters: [
      { monsterId: 'bandit', maxCount: 3, respawnSeconds: 55 },
      { monsterId: 'wild_wolf', maxCount: 2, respawnSeconds: 75 },
    ],
    mapSymbol: '[鏽]',
    mapX: 1,
    mapY: 0,
    guardianHints: {
      creature: '岩壁上落下碎砂時，盜匪多半正在上方移動。',
      treasure: '破水袋旁有商隊私藏的鹽錠。',
      spirit: '鏽水隘道像荒地乾涸的血管，仍把危險送向各處。',
    },
  },

  redrock_badlands_splinter_ridge: {
    id: 'redrock_badlands_splinter_ridge',
    name: '碎岩脊',
    zone: 'redrock_badlands' as RoomDef['zone'],
    image: 'redrock_badlands_splinter_ridge.png',
    imagePrompt: '碎岩脊 in redrock_badlands, jagged red stone ridge, narrow ledges, dust storm horizon, ambush shadows, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text',
    description:
      '鏽水隘道東端爬上碎岩脊，紅色石片像斷刀一樣斜插在地面，腳下每一步都會發出清脆碎裂聲。岩脊視野開闊，可以看見盜匪哨塔、紅礦切口與遠處黑旗瞭望點，但也讓行蹤暴露給所有高處敵人。這裡是交通與伏擊房，玩家可選擇繞往哨塔、進入乾谷，或沿岩脊快速穿越荒地。碎岩縫中躲著毒蛇，野狼則會利用背風處接近。若隊伍在此交戰，聲音會傳得很遠，引來其他玩家或盜匪巡邏。',
    exits: [
      { direction: 'west', targetRoomId: 'redrock_badlands_rustwash_pass', description: '碎坡回到鏽水隘道' },
      { direction: 'east', targetRoomId: 'redrock_badlands_bandit_watch', description: '岩脊通向盜匪哨塔' },
      { direction: 'south', targetRoomId: 'redrock_badlands_red_ore_cut', description: '紅色礦痕往南延伸' },
      { direction: 'north', targetRoomId: 'redrock_badlands_echo_arch', description: '風聲穿過北側拱岩' },
    ],
    monsters: [
      { monsterId: 'bandit', maxCount: 2, respawnSeconds: 55 },
      { monsterId: 'poison_snake', maxCount: 3, respawnSeconds: 65 },
      { monsterId: 'wild_wolf', maxCount: 2, respawnSeconds: 75 },
    ],
    mapSymbol: '[脊]',
    mapX: 2,
    mapY: 0,
    guardianHints: {
      creature: '碎石聲若在背後重複，可能是狼群沿著背風處跟蹤。',
      treasure: '最高石片下卡著一枚被風吹亮的礦片。',
      spirit: '碎岩脊讓荒地所有路線都短暫暴露在同一片天空下。',
    },
  },

  redrock_badlands_bandit_watch: {
    id: 'redrock_badlands_bandit_watch',
    name: '盜匪哨塔',
    zone: 'redrock_badlands' as RoomDef['zone'],
    image: 'redrock_badlands_bandit_watch.png',
    imagePrompt: '盜匪哨塔 in redrock_badlands, crude bandit watchtower on red cliffs, flags, ladders, dust and weapons, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text',
    description:
      '碎岩脊東側立著一座用枯木、車輪和紅岩支柱拼成的哨塔，塔頂掛著破布旗，能監視鏽水隘道與紅礦切口。盜匪會在這裡交換信號、分配伏擊位置，也會把搶來的水袋吊在塔下示眾。這裡是高衝突戰鬥房，玩家可清除哨兵、奪取旗號，或利用塔頂視野標記其他玩家與敵對隊伍動向。若沒有先解決哨塔，後續進入營地與伏擊峽谷時會更容易遭遇增援。塔梯狹窄，一旦交手很難快速撤退。',
    exits: [
      { direction: 'west', targetRoomId: 'redrock_badlands_splinter_ridge', description: '岩脊回到碎岩路' },
      { direction: 'east', targetRoomId: 'redrock_badlands_outlaw_camp', description: '旗號指向盜匪營地' },
      { direction: 'south', targetRoomId: 'redrock_badlands_red_ore_cut', description: '塔下礦車路通向紅礦切口' },
    ],
    monsters: [
      { monsterId: 'bandit', maxCount: 5, respawnSeconds: 55 },
      { monsterId: 'wild_wolf', maxCount: 1, respawnSeconds: 75 },
    ],
    mapSymbol: '[塔]',
    mapX: 3,
    mapY: 0,
    guardianHints: {
      creature: '哨塔旗號被吹成直線時，營地增援很快會出現。',
      treasure: '塔頂水袋旁藏著盜匪巡邏名冊。',
      spirit: '盜匪哨塔是荒地把視野變成武器的地方。',
    },
  },

  redrock_badlands_dry_gulch: {
    id: 'redrock_badlands_dry_gulch',
    name: '乾裂谷',
    zone: 'redrock_badlands' as RoomDef['zone'],
    image: 'redrock_badlands_dry_gulch.png',
    imagePrompt: '乾裂谷 in redrock_badlands, dry cracked gulch, red clay walls, bones, heat haze and thorn brush, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text',
    description:
      '鏽水隘道南側陷成一條乾裂谷，谷底泥土龜裂成大片硬殼，裂縫間有熱氣與細小蛇洞。風被谷壁擋住，空氣悶得像石窯，連遠方喊聲都變得模糊。這裡是資源與戰鬥房，玩家可採集乾土礦、蛇毒與耐旱草根，也能避開主路哨塔繞往毒蛇平地或焦泉。乾裂谷看似低調，實際常被盜匪當成藏貨線，地上骨頭多半不是野獸留下。若裂縫突然冒出熱氣，附近可能有熔岩蟲通道。',
    exits: [
      { direction: 'north', targetRoomId: 'redrock_badlands_rustwash_pass', description: '爬坡回到鏽水隘道' },
      { direction: 'east', targetRoomId: 'redrock_badlands_viper_flats', description: '蛇洞密集處通向毒蛇平地' },
      { direction: 'south', targetRoomId: 'redrock_badlands_cinder_spring', description: '熱氣引向焦泉' },
    ],
    monsters: [
      { monsterId: 'poison_snake', maxCount: 4, respawnSeconds: 65 },
      { monsterId: 'bandit', maxCount: 2, respawnSeconds: 55 },
    ],
    mapSymbol: '[谷]',
    mapX: 1,
    mapY: -1,
    guardianHints: {
      creature: '裂縫連續冒熱氣時，熔岩蟲可能在地下移動。',
      treasure: '乾土礦常藏在最大裂縫的陰影裡。',
      spirit: '乾裂谷像赤岩荒地張開的乾渴喉嚨。',
    },
  },

  redrock_badlands_cinder_spring: {
    id: 'redrock_badlands_cinder_spring',
    name: '焦泉',
    zone: 'redrock_badlands' as RoomDef['zone'],
    image: 'redrock_badlands_cinder_spring.png',
    imagePrompt: '焦泉 in redrock_badlands, steaming cinder spring in red desert, black mineral crust, orange heat, dry reeds, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text',
    description:
      '乾裂谷南端有一口冒著灰白蒸汽的焦泉，泉水不多，卻含有濃烈礦味，周圍結著黑色礦殼。流放者與盜匪都會冒險來此取水，因為整片荒地沒有幾處可靠水源。這裡是資源與衝突房，玩家可採集火成礦殼、補充有限水源，或設伏爭奪水權。泉邊有燒焦腳印與破陶罐，說明地下熱流最近變得不穩。火焰精靈偶爾會在蒸汽中現身，熔岩蟲也會沿熱流靠近。任何戰鬥都可能把泉口震裂。',
    exits: [
      { direction: 'north', targetRoomId: 'redrock_badlands_dry_gulch', description: '乾谷回到北側' },
      { direction: 'east', targetRoomId: 'redrock_badlands_flame_spirit_basin', description: '熱霧通向火靈盆地' },
      { direction: 'south', targetRoomId: 'redrock_badlands_lava_worm_sink', description: '裂地通往熔岩蟲陷坑' },
    ],
    monsters: [
      { monsterId: 'flame_spirit', maxCount: 2, respawnSeconds: 110 },
      { monsterId: 'lava_worm', maxCount: 1, respawnSeconds: 140 },
      { monsterId: 'bandit', maxCount: 2, respawnSeconds: 55 },
    ],
    mapSymbol: '[泉]',
    mapX: 1,
    mapY: -2,
    guardianHints: {
      creature: '蒸汽變橙時，火焰精靈即將從泉口浮出。',
      treasure: '黑色礦殼可作為耐火鍛造材料。',
      spirit: '焦泉讓荒地最稀缺的水也帶著火的脾氣。',
    },
  },

  redrock_badlands_outlaw_camp: {
    id: 'redrock_badlands_outlaw_camp',
    name: '盜匪營地',
    zone: 'redrock_badlands' as RoomDef['zone'],
    image: 'redrock_badlands_outlaw_camp.png',
    imagePrompt: '盜匪營地 in redrock_badlands, outlaw camp among red rocks, tents, stolen crates, campfires, weapons and dust, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text',
    description:
      '盜匪營地藏在幾座紅岩屏障後方，帳篷用搶來的商隊布棚拼成，中央火堆旁堆著木箱、水桶與還沒分贓的貨物。營地四周挖有低矮壕溝，方便盜匪在 PvP 混戰時躲避遠程攻擊。這裡是高密度戰鬥與任務核心房，玩家可搶回貨物、破壞旗號、挑起不同盜匪小隊內鬥，也可能與其他玩家爭奪同一批戰利品。營地後方有路通往骨標地與伏擊峽谷，若哨塔尚未清除，增援會從岩脊快速抵達。這裡的地形與視野會直接影響玩家遭遇和撤退判定，隊伍最好先確認高處、掩體與回程路線。務必保持警戒。不要停留。',
    exits: [
      { direction: 'west', targetRoomId: 'redrock_badlands_bandit_watch', description: '旗號路回到哨塔' },
      { direction: 'east', targetRoomId: 'redrock_badlands_bone_marker', description: '戰利品路通向骨標地' },
      { direction: 'south', targetRoomId: 'redrock_badlands_ambush_canyon', description: '壕溝延向伏擊峽谷' },
      { direction: 'north', targetRoomId: 'redrock_badlands_blackflag_lookout', description: '黑旗坡通往瞭望點' },
    ],
    monsters: [
      { monsterId: 'bandit', maxCount: 6, respawnSeconds: 55 },
      { monsterId: 'wild_wolf', maxCount: 2, respawnSeconds: 75 },
    ],
    mapSymbol: '[營]',
    mapX: 4,
    mapY: 0,
    guardianHints: {
      creature: '火堆旁的骨笛響起時，營地所有盜匪都會開始集結。',
      treasure: '未分贓貨箱中可能有商隊任務物品。',
      spirit: '盜匪營地把荒地的無法無天變成了一套臨時秩序。',
    },
  },

  redrock_badlands_bone_marker: {
    id: 'redrock_badlands_bone_marker',
    name: '骨標地',
    zone: 'redrock_badlands' as RoomDef['zone'],
    image: 'redrock_badlands_bone_marker.png',
    imagePrompt: '骨標地 in redrock_badlands, bone markers and skull stakes in red desert, dust, harsh sun and warning charms, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text',
    description:
      '盜匪營地東側插滿骨頭與破槍，形成一片粗糙邊界。每根骨標都綁著不同顏色布條，代表這裡曾被哪個團伙、流放者或怪物佔過。白骨在烈日下乾裂，影子卻像指向不同路線的指針。這裡是探索與衝突提示房，玩家可解讀骨標勢力、尋找被綁在骨架上的信物，或判斷哪些路線更可能遭遇 PvP 埋伏。骨標地也是狼群與毒蛇經常出沒的獵場，盜匪則會利用白骨製造假路標。若布條方向突然改變，附近玩家或 NPC 小隊正在靠近。',
    exits: [
      { direction: 'west', targetRoomId: 'redrock_badlands_outlaw_camp', description: '戰利品路回到營地' },
      { direction: 'east', targetRoomId: 'redrock_badlands_duel_stones', description: '骨標指向決鬥石圈' },
      { direction: 'south', targetRoomId: 'redrock_badlands_ambush_canyon', description: '碎骨坡通向伏擊峽谷' },
    ],
    monsters: [
      { monsterId: 'wild_wolf', maxCount: 3, respawnSeconds: 75 },
      { monsterId: 'poison_snake', maxCount: 3, respawnSeconds: 65 },
      { monsterId: 'bandit', maxCount: 2, respawnSeconds: 55 },
    ],
    mapSymbol: '[骨]',
    mapX: 5,
    mapY: 0,
    guardianHints: {
      creature: '布條同時轉向時，狼群或敵對玩家可能正從背風處接近。',
      treasure: '頭骨眼眶裡常塞著盜匪傳訊紙條。',
      spirit: '骨標地是荒地用死亡畫出的地圖。',
    },
  },

  redrock_badlands_viper_flats: {
    id: 'redrock_badlands_viper_flats',
    name: '毒蛇平地',
    zone: 'redrock_badlands' as RoomDef['zone'],
    image: 'redrock_badlands_viper_flats.png',
    imagePrompt: '毒蛇平地 in redrock_badlands, flat red desert full of snake holes, thorn scrub, heat shimmer and dust, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text',
    description:
      '乾裂谷東側展開一片看似平坦的紅土，地面卻布滿細小蛇洞與風蝕孔。枯刺草沿著裂縫生長，任何踩斷枝條的聲音都會讓毒蛇從洞中探頭。這裡是戰鬥與素材房，玩家可收集蛇毒、蛇皮與耐旱草，或清理商隊路線上的毒蛇群。平地沒有遮蔽，適合遠程交戰，也容易讓 PvP 追擊變得直接而殘酷。若地面熱浪突然扭曲，可能不是幻象，而是地下熔岩蟲把熱氣推到表層。',
    exits: [
      { direction: 'west', targetRoomId: 'redrock_badlands_dry_gulch', description: '蛇洞路回到乾裂谷' },
      { direction: 'east', targetRoomId: 'redrock_badlands_red_ore_cut', description: '紅色礦痕在東側' },
      { direction: 'south', targetRoomId: 'redrock_badlands_lava_worm_sink', description: '熱浪指向陷坑' },
    ],
    monsters: [
      { monsterId: 'poison_snake', maxCount: 5, respawnSeconds: 65 },
      { monsterId: 'lava_worm', maxCount: 1, respawnSeconds: 140 },
    ],
    mapSymbol: '[蛇]',
    mapX: 2,
    mapY: -2,
    guardianHints: {
      creature: '枯刺草突然停止搖晃時，毒蛇正在洞口蓄勢。',
      treasure: '最大蛇洞旁的白色蛇蛻可作為煉金材料。',
      spirit: '毒蛇平地讓荒地的平坦本身成為陷阱。',
    },
  },

  redrock_badlands_red_ore_cut: {
    id: 'redrock_badlands_red_ore_cut',
    name: '紅礦切口',
    zone: 'redrock_badlands' as RoomDef['zone'],
    image: 'redrock_badlands_red_ore_cut.png',
    imagePrompt: '紅礦切口 in redrock_badlands, exposed red ore cut in cliff, mine scars, carts, dust, harsh sunlight, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text',
    description:
      '碎岩脊南側的山壁被人鑿開一道巨大切口，裸露出深紅礦脈與黑色火成岩。廢棄礦車歪在軌道旁，車斗裡還有盜匪沒來得及搬走的礦石。這裡是資源、爭奪與中段交通房，玩家可採集赤礦、追查盜匪供應線，也能繞往毒蛇平地、哨塔或岩石巨人棲息的高處。礦脈本身帶著熱度，敲擊聲會沿山壁傳開，引來守礦的岩石巨人或其他玩家。若採集過量，切口內會掉落碎石，短暫封住安全路線。',
    exits: [
      { direction: 'north', targetRoomId: 'redrock_badlands_splinter_ridge', description: '礦痕回到碎岩脊' },
      { direction: 'west', targetRoomId: 'redrock_badlands_viper_flats', description: '平地蛇洞在西側' },
      { direction: 'east', targetRoomId: 'redrock_badlands_rock_giant_perch', description: '礦脈上方有巨人棲地' },
      { direction: 'south', targetRoomId: 'redrock_badlands_flame_spirit_basin', description: '熱礦路通向火靈盆地' },
    ],
    monsters: [
      { monsterId: 'rock_giant', maxCount: 2, respawnSeconds: 160 },
      { monsterId: 'bandit', maxCount: 3, respawnSeconds: 55 },
      { monsterId: 'poison_snake', maxCount: 2, respawnSeconds: 65 },
    ],
    mapSymbol: '[礦]',
    mapX: 3,
    mapY: -1,
    guardianHints: {
      creature: '礦壁震動時，岩石巨人通常已經被敲擊聲喚醒。',
      treasure: '最深紅的礦脈可採出高品質赤礦。',
      spirit: '紅礦切口是荒地被貪婪挖開的傷口。',
    },
  },

  redrock_badlands_burnt_wagon: {
    id: 'redrock_badlands_burnt_wagon',
    name: '焚車殘骸',
    zone: 'redrock_badlands' as RoomDef['zone'],
    image: 'redrock_badlands_burnt_wagon.png',
    imagePrompt: '焚車殘骸 in redrock_badlands, burned wagon wreck in red desert, black wheels, spilled crates, dust and vultures, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text',
    description:
      '沙塵隘口北面停著一輛被燒到只剩黑骨架的商隊馬車，車輪陷在紅沙中，鐵箍因高熱扭曲。貨箱被撬開，布匹、陶罐碎片與焦黑糧袋散了一地。這裡是任務線索與伏擊房，玩家可調查商隊遇襲原因、尋找失蹤護衛徽章，或判斷盜匪是否使用火焰精靈掩蓋痕跡。殘骸周圍有狼群與盜匪回收隊出沒，火焰殘味也會吸引更深處的元素生物。若玩家翻動錯誤箱子，藏在車底的盜匪會立刻發難。',
    exits: [
      { direction: 'south', targetRoomId: 'redrock_badlands_dust_gate', description: '焦黑車轍回到隘口' },
      { direction: 'east', targetRoomId: 'redrock_badlands_echo_arch', description: '風穿過東側拱岩' },
      { direction: 'north', targetRoomId: 'redrock_badlands_blackflag_lookout', description: '遠處黑旗在高處飄動' },
    ],
    monsters: [
      { monsterId: 'bandit', maxCount: 3, respawnSeconds: 55 },
      { monsterId: 'wild_wolf', maxCount: 3, respawnSeconds: 75 },
      { monsterId: 'flame_spirit', maxCount: 1, respawnSeconds: 110 },
    ],
    mapSymbol: '[車]',
    mapX: 0,
    mapY: 1,
    guardianHints: {
      creature: '車底影子過深時，盜匪回收隊可能正躲在殘骸下。',
      treasure: '焦黑糧袋裡藏著還沒燒毀的護衛徽章。',
      spirit: '焚車殘骸讓荒地的威脅不再只是傳聞。',
    },
  },

  redrock_badlands_echo_arch: {
    id: 'redrock_badlands_echo_arch',
    name: '回聲拱岩',
    zone: 'redrock_badlands' as RoomDef['zone'],
    image: 'redrock_badlands_echo_arch.png',
    imagePrompt: '回聲拱岩 in redrock_badlands, natural red stone arch, echoing canyon, dust, harsh sunlight and ambush ledges, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text',
    description:
      '焚車殘骸東側有一座天然紅岩拱門，風穿過拱洞時會把腳步聲放大成多重回音。拱岩下方有舊營火、斷繩與刻在岩壁上的決鬥記號，是旅人、盜匪與流放者都會短暫停留的地方。這裡是探索與交通房，玩家可用回音判斷是否有人埋伏，也可通往碎岩脊、黑旗瞭望點或決鬥石圈。拱岩高處適合遠程壓制，因此在 open PvP 中格外危險。若回音比腳步慢太多，代表另一隊伍可能正在拱門另一側模仿你的節奏。',
    exits: [
      { direction: 'west', targetRoomId: 'redrock_badlands_burnt_wagon', description: '風道回到焚車殘骸' },
      { direction: 'south', targetRoomId: 'redrock_badlands_splinter_ridge', description: '岩路下到碎岩脊' },
      { direction: 'east', targetRoomId: 'redrock_badlands_duel_stones', description: '刻痕路通往決鬥石圈' },
      { direction: 'north', targetRoomId: 'redrock_badlands_blackflag_lookout', description: '拱岩上方通往黑旗瞭望點' },
    ],
    monsters: [
      { monsterId: 'bandit', maxCount: 3, respawnSeconds: 55 },
      { monsterId: 'wild_wolf', maxCount: 2, respawnSeconds: 75 },
    ],
    mapSymbol: '[拱]',
    mapX: 1,
    mapY: 1,
    guardianHints: {
      creature: '回音比腳步慢時，敵人可能正在另一側故意誘導。',
      treasure: '拱岩決鬥記號旁藏著一只舊銀戒。',
      spirit: '回聲拱岩讓荒地連腳步聲都能被拿來欺騙。',
    },
  },

  redrock_badlands_duel_stones: {
    id: 'redrock_badlands_duel_stones',
    name: '決鬥石圈',
    zone: 'redrock_badlands' as RoomDef['zone'],
    image: 'redrock_badlands_duel_stones.png',
    imagePrompt: '決鬥石圈 in redrock_badlands, circle of red duel stones, blood marks, weapons, dust and open sky, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text',
    description:
      '骨標地東側的平地擺著一圈紅石，每塊石頭上都有刀痕、血跡與名字縮寫。這裡原本是流放者解決爭端的地方，如今也被玩家用作公開挑戰與 PvP 約戰地標。石圈中央沒有遮蔽，周圍卻有足夠高的岩塊供旁觀者或偷襲者藏身。這裡是 PvP 特色房與任務事件點，玩家可挑戰盜匪頭目、完成榮譽決鬥，或追查某名流放者最後一次露面的紀錄。若有人在石圈外插旗，附近盜匪會把它視作可以搶奪的宣戰信號。這裡的地形與視野會直接影響玩家遭遇和撤退判定，隊伍最好先確認高處、掩體與回程路線。務必保持警戒。',
    exits: [
      { direction: 'west', targetRoomId: 'redrock_badlands_bone_marker', description: '骨標路回到西側' },
      { direction: 'north', targetRoomId: 'redrock_badlands_echo_arch', description: '回聲拱岩在北側' },
      { direction: 'south', targetRoomId: 'redrock_badlands_exile_den', description: '流放者洞穴在南側' },
      { direction: 'east', targetRoomId: 'redrock_badlands_blackflag_lookout', description: '黑旗坡往東北升起' },
    ],
    monsters: [
      { monsterId: 'bandit', maxCount: 4, respawnSeconds: 55 },
      { monsterId: 'rock_giant', maxCount: 1, respawnSeconds: 160 },
    ],
    mapSymbol: '[鬥]',
    mapX: 5,
    mapY: 1,
    guardianHints: {
      creature: '石圈外插旗時，盜匪會把決鬥變成混戰。',
      treasure: '最舊血痕下刻著流放者的藏身暗號。',
      spirit: '決鬥石圈把荒地的暴力包裝成一種規則。',
    },
  },

  redrock_badlands_exile_den: {
    id: 'redrock_badlands_exile_den',
    name: '流放者洞穴',
    zone: 'redrock_badlands' as RoomDef['zone'],
    image: 'redrock_badlands_exile_den.png',
    imagePrompt: '流放者洞穴 in redrock_badlands, exile cave hideout in red cliffs, bedrolls, stolen gear, firelight and dust, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text',
    description:
      '決鬥石圈南側的岩壁裂開一道洞口，洞內擺著破睡袋、水罐、簡易鍛爐與被磨掉徽記的舊盔甲。流放者不一定是盜匪，但在赤岩荒地生存久了，界線會變得模糊。這裡是任務與高風險交涉房，玩家可與流放者交易情報、追查被盜物資，也可能因派系選擇觸發戰鬥。洞穴後方藏著通往伏擊峽谷的窄路，適合撤退也適合偷襲。若玩家帶著盜匪營地旗號進入，流放者會立刻判定你站在敵對方。',
    exits: [
      { direction: 'north', targetRoomId: 'redrock_badlands_duel_stones', description: '洞口回到決鬥石圈' },
      { direction: 'west', targetRoomId: 'redrock_badlands_ambush_canyon', description: '窄路通向伏擊峽谷' },
      { direction: 'south', targetRoomId: 'redrock_badlands_scarlet_crater', description: '深洞通向猩紅火口' },
    ],
    monsters: [
      { monsterId: 'bandit', maxCount: 4, respawnSeconds: 55 },
      { monsterId: 'wild_wolf', maxCount: 2, respawnSeconds: 75 },
    ],
    mapSymbol: '[放]',
    mapX: 5,
    mapY: -1,
    guardianHints: {
      creature: '流放者先看你帶的旗號，再決定是否拔刀。',
      treasure: '被磨掉徽記的舊盔甲可能屬於失蹤護衛。',
      spirit: '流放者洞穴讓人看見荒地如何把人逼成另一種敵人。',
    },
  },

  redrock_badlands_rock_giant_perch: {
    id: 'redrock_badlands_rock_giant_perch',
    name: '岩巨人棲臺',
    zone: 'redrock_badlands' as RoomDef['zone'],
    image: 'redrock_badlands_rock_giant_perch.png',
    imagePrompt: '岩巨人棲臺 in redrock_badlands, high red rock perch with giant footprints, boulders, ore veins and dust storm sky, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text',
    description:
      '紅礦切口上方是一片寬闊岩臺，地面留著巨大腳印，邊緣堆著被徒手掰碎的礦石與半埋巨石。岩石巨人會在這裡休眠，身體與紅岩幾乎融為一體，只有胸口裂縫偶爾透出暗色光。這裡是精英戰鬥與資源守門房，玩家可挑戰岩巨人、取得高品質石心與赤礦，也能從高處觀察火靈盆地和猩紅火口。戰鬥時要小心落石與其他玩家干擾，因為岩臺沒有太多遮蔽。若巨人被激怒，牠會把礦石投向下方切口，改變路線安全性。',
    exits: [
      { direction: 'west', targetRoomId: 'redrock_badlands_red_ore_cut', description: '礦脈下到紅礦切口' },
      { direction: 'south', targetRoomId: 'redrock_badlands_flame_spirit_basin', description: '熱岩坡通向火靈盆地' },
      { direction: 'east', targetRoomId: 'redrock_badlands_scarlet_crater', description: '巨石路指向猩紅火口' },
    ],
    monsters: [
      { monsterId: 'rock_giant', maxCount: 3, respawnSeconds: 160 },
      { monsterId: 'poison_snake', maxCount: 2, respawnSeconds: 65 },
    ],
    mapSymbol: '[巨]',
    mapX: 4,
    mapY: -1,
    guardianHints: {
      creature: '紅岩胸口裂縫發光時，那不是岩壁，而是岩石巨人醒來。',
      treasure: '巨人休眠處下方常有完整石心碎片。',
      spirit: '岩巨人棲臺像荒地自己的守礦人。',
    },
  },

  redrock_badlands_flame_spirit_basin: {
    id: 'redrock_badlands_flame_spirit_basin',
    name: '火靈盆地',
    zone: 'redrock_badlands' as RoomDef['zone'],
    image: 'redrock_badlands_flame_spirit_basin.png',
    imagePrompt: '火靈盆地 in redrock_badlands, red stone basin with flame spirits, heat shimmer, black mineral crust and orange glow, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text',
    description:
      '紅礦切口南側陷成一個淺盆地，地面覆著黑色礦殼，裂縫中冒出橘紅火舌。火焰精靈像小型旋風般在盆地裡遊走，遇到金屬聲或血腥味便會變得躁動。這裡是元素戰鬥與材料房，玩家可收集火成結晶、完成耐火測試任務，也能繞往焦泉、岩巨人棲臺或熔岩蟲陷坑。盆地熱浪會扭曲視線，使其他玩家和盜匪看起來像殘影。若隊伍停留太久，地下熱流會把熔岩蟲引到盆地中心。',
    exits: [
      { direction: 'north', targetRoomId: 'redrock_badlands_red_ore_cut', description: '熱礦路回到紅礦切口' },
      { direction: 'west', targetRoomId: 'redrock_badlands_cinder_spring', description: '蒸汽路回到焦泉' },
      { direction: 'east', targetRoomId: 'redrock_badlands_rock_giant_perch', description: '熱岩坡回到巨人棲臺' },
      { direction: 'south', targetRoomId: 'redrock_badlands_lava_worm_sink', description: '裂縫下到熔岩蟲陷坑' },
    ],
    monsters: [
      { monsterId: 'flame_spirit', maxCount: 4, respawnSeconds: 110 },
      { monsterId: 'lava_worm', maxCount: 2, respawnSeconds: 140 },
    ],
    mapSymbol: '[火]',
    mapX: 3,
    mapY: -2,
    guardianHints: {
      creature: '熱浪突然形成旋渦時，火焰精靈正在聚集。',
      treasure: '黑色礦殼裂縫裡能取出火成結晶。',
      spirit: '火靈盆地是赤岩荒地埋在地表下的怒氣出口。',
    },
  },

  redrock_badlands_lava_worm_sink: {
    id: 'redrock_badlands_lava_worm_sink',
    name: '熔岩蟲陷坑',
    zone: 'redrock_badlands' as RoomDef['zone'],
    image: 'redrock_badlands_lava_worm_sink.png',
    imagePrompt: '熔岩蟲陷坑 in redrock_badlands, collapsed red earth sinkhole with lava worm tunnels, heat cracks, dust and orange glow, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text',
    description:
      '火靈盆地下方裂開一座陷坑，坑壁佈滿被高熱磨出的圓形通道，像有巨型蟲子反覆鑽過。地面不時下陷，露出短暫橘光與灼熱氣流。這裡是高危戰鬥房，玩家可狩獵熔岩蟲、採集熱殼與火成寶石，也能利用地下通道避開部分 PvP 追擊。陷坑邊緣極不穩定，遠程交火或岩巨人震擊都可能讓地面坍塌。若聽到地下連續摩擦聲，代表熔岩蟲正在選擇出口，最好立刻離開中央區域。',
    exits: [
      { direction: 'north', targetRoomId: 'redrock_badlands_flame_spirit_basin', description: '裂縫上回火靈盆地' },
      { direction: 'west', targetRoomId: 'redrock_badlands_cinder_spring', description: '熱流通向焦泉' },
      { direction: 'east', targetRoomId: 'redrock_badlands_scarlet_crater', description: '地下熱道通向猩紅火口' },
      { direction: 'south', targetRoomId: 'redrock_badlands_viper_flats', description: '熱浪回到毒蛇平地' },
    ],
    monsters: [
      { monsterId: 'lava_worm', maxCount: 4, respawnSeconds: 140 },
      { monsterId: 'flame_spirit', maxCount: 2, respawnSeconds: 110 },
    ],
    mapSymbol: '[蟲]',
    mapX: 2,
    mapY: -3,
    guardianHints: {
      creature: '地下摩擦聲連成三次時，熔岩蟲會從最近裂縫衝出。',
      treasure: '剛冷卻的蟲道內壁常有火成寶石。',
      spirit: '熔岩蟲陷坑提醒旅人，荒地連地面都不可靠。',
    },
  },

  redrock_badlands_ambush_canyon: {
    id: 'redrock_badlands_ambush_canyon',
    name: '伏擊峽谷',
    zone: 'redrock_badlands' as RoomDef['zone'],
    image: 'redrock_badlands_ambush_canyon.png',
    imagePrompt: '伏擊峽谷 in redrock_badlands, narrow ambush canyon with red walls, rope traps, hidden ledges and dust, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text',
    description:
      '盜匪營地南面的峽谷又窄又深，岩壁上挖著許多小洞，藏有繩套、落石與簡陋弩機。谷底散著斷箭與破盾，顯示這裡長期被用作截殺路線。這裡是 PvP 與盜匪伏擊房，玩家可拆除陷阱、反向利用高處伏點，或護送目標穿過最危險的谷段。峽谷連接營地、骨標地與流放者洞穴，是許多衝突任務的交會處。若你聽見上方石子滾落，不一定是 NPC，也可能是其他玩家正在尋找開戰角度。',
    exits: [
      { direction: 'north', targetRoomId: 'redrock_badlands_outlaw_camp', description: '壕溝回到盜匪營地' },
      { direction: 'east', targetRoomId: 'redrock_badlands_bone_marker', description: '碎骨坡回到骨標地' },
      { direction: 'south', targetRoomId: 'redrock_badlands_exile_den', description: '窄路通向流放者洞穴' },
    ],
    monsters: [
      { monsterId: 'bandit', maxCount: 5, respawnSeconds: 55 },
      { monsterId: 'wild_wolf', maxCount: 2, respawnSeconds: 75 },
    ],
    mapSymbol: '[伏]',
    mapX: 4,
    mapY: -2,
    guardianHints: {
      creature: '上方石子連續滾落時，伏擊者可能正在換位。',
      treasure: '拆下的弩機零件可交給商隊換賞金。',
      spirit: '伏擊峽谷把赤岩荒地的規則說得很明白：高處先開口。',
    },
  },

  redrock_badlands_blackflag_lookout: {
    id: 'redrock_badlands_blackflag_lookout',
    name: '黑旗瞭望點',
    zone: 'redrock_badlands' as RoomDef['zone'],
    image: 'redrock_badlands_blackflag_lookout.png',
    imagePrompt: '黑旗瞭望點 in redrock_badlands, high lookout with black flag, red cliffs, spyglass, dust storm horizon, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text',
    description:
      '回聲拱岩上方的高處插著一面黑旗，旗布被沙風磨得像刀口。從這裡可以俯瞰焚車殘骸、盜匪營地、決鬥石圈與遠處猩紅火口，是整片赤岩荒地最重要的視野點之一。這裡是大型 PvP 交通與情報房，玩家可控制瞭望點、標記敵對玩家動向、截聽盜匪旗號，或開啟通往猩紅火口的高地路線。黑旗旁有一架破舊望遠鏡，鏡片被刻意刮花，只有在沙塵最濃時才能看見隱藏路徑。若黑旗被放倒，附近盜匪會短暫陷入混亂。',
    exits: [
      { direction: 'south', targetRoomId: 'redrock_badlands_echo_arch', description: '下坡回到回聲拱岩' },
      { direction: 'east', targetRoomId: 'redrock_badlands_duel_stones', description: '高坡通向決鬥石圈' },
      { direction: 'west', targetRoomId: 'redrock_badlands_burnt_wagon', description: '焦黑車轍在西側下方' },
      { direction: 'north', targetRoomId: 'redrock_badlands_scarlet_crater', description: '高地路通向猩紅火口' },
    ],
    monsters: [
      { monsterId: 'bandit', maxCount: 4, respawnSeconds: 55 },
      { monsterId: 'rock_giant', maxCount: 1, respawnSeconds: 160 },
    ],
    mapSymbol: '[旗]',
    mapX: 2,
    mapY: 2,
    guardianHints: {
      creature: '黑旗突然倒向無風方向時，附近有伏兵正在發信號。',
      treasure: '刮花望遠鏡能在沙塵中看見隱藏高地路。',
      spirit: '黑旗瞭望點讓誰掌握視野，誰就暫時掌握荒地。',
    },
  },

  redrock_badlands_scarlet_crater: {
    id: 'redrock_badlands_scarlet_crater',
    name: '猩紅火口',
    zone: 'redrock_badlands' as RoomDef['zone'],
    image: 'redrock_badlands_scarlet_crater.png',
    imagePrompt: '猩紅火口 in redrock_badlands, scarlet volcanic crater in red badlands, glowing cracks, black flags, giant stones and heat haze, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text',
    description:
      '赤岩荒地最深處是一座猩紅火口，火山並未真正噴發，卻持續從裂縫吐出熱光與金屬味。黑旗、流放者刻痕、巨人腳印與熔岩蟲通道都在此交會，像所有勢力都被同一個熱源吸引。這裡是區域大型事件鉤子與最終地標，玩家可爭奪火口控制權、封堵地下熱流、追查盜匪為何把搶來的赤礦運到此處，也能挑戰岩石巨人與火焰精靈混合守衛。若火口裂縫被過度採掘，整片荒地的熱流會變得不穩，使焦泉、盆地與陷坑同時暴動。這裡的地形與視野會直接影響玩家遭遇和撤退判定，隊伍最好先確認高處、掩體與回程路線。',
    exits: [
      { direction: 'south', targetRoomId: 'redrock_badlands_exile_den', description: '深洞回到流放者洞穴' },
      { direction: 'west', targetRoomId: 'redrock_badlands_rock_giant_perch', description: '巨石路回到岩巨人棲臺' },
      { direction: 'east', targetRoomId: 'redrock_badlands_lava_worm_sink', description: '地下熱道回到熔岩蟲陷坑' },
      { direction: 'north', targetRoomId: 'redrock_badlands_blackflag_lookout', description: '高地路回到黑旗瞭望點' },
    ],
    monsters: [
      { monsterId: 'rock_giant', maxCount: 2, respawnSeconds: 160 },
      { monsterId: 'flame_spirit', maxCount: 3, respawnSeconds: 110 },
      { monsterId: 'lava_worm', maxCount: 2, respawnSeconds: 140 },
      { monsterId: 'bandit', maxCount: 3, respawnSeconds: 55 },
    ],
    mapSymbol: '[口]',
    mapX: 5,
    mapY: -3,
    guardianHints: {
      creature: '火口熱光連續脈動時，巨人與火靈會同時進入警戒。',
      treasure: '裂縫邊緣可取得猩紅火成核心，但會引發熱流暴動。',
      spirit: '猩紅火口是赤岩荒地所有貪婪、流亡與戰鬥最後匯聚的地方。',
    },
  },

  sunken_catacombs_tide_stair: {
    id: 'sunken_catacombs_tide_stair',
    name: '潮汐階梯',
    zone: 'sunken_catacombs' as RoomDef['zone'],
    image: 'sunken_catacombs_tide_stair.png',
    imagePrompt: '潮汐階梯 in sunken_catacombs, flooded underground catacomb scene with black water, stone tombs, cold lantern light and ancient decay, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text',
    description:
      '入口石階被黑水反覆淹沒，牆上潮痕像年輪一樣層層堆疊。這裡是沉沒墓窟入口與回程錨點，玩家可確認水位、點亮防潮燈，並從刻在階梯側面的名字判斷哪些探險隊曾經進入後沒有回來。水聲會掩蓋骷髏腳步，黑水裡偶爾還有蛇影掠過。若潮痕突然上升，代表墓窟深處的排水機關正在反向運轉，隊伍應先標記退路再深入。',
    exits: [
      { direction: 'east', targetRoomId: 'sunken_catacombs_flooded_narthex', description: '潮濕石階通向淹沒前廳' },
    ],
    monsters: [
      { monsterId: 'skeleton_soldier', maxCount: 2, respawnSeconds: 70 },
      { monsterId: 'green_slime', maxCount: 2, respawnSeconds: 55 },
    ],
    mapSymbol: '[階]',
    mapX: 0,
    mapY: 0,
    guardianHints: {
      creature: '潮汐階梯的水聲改變時，附近敵人通常已經開始移動。',
      treasure: '潮汐階梯附近常有被黑水沖出的墓窟線索。',
      spirit: '潮汐階梯保留著沉沒墓窟被潮水吞噬前後的記憶。',
    },
  },

  sunken_catacombs_flooded_narthex: {
    id: 'sunken_catacombs_flooded_narthex',
    name: '淹沒前廳',
    zone: 'sunken_catacombs' as RoomDef['zone'],
    image: 'sunken_catacombs_flooded_narthex.png',
    imagePrompt: '淹沒前廳 in sunken_catacombs, flooded underground catacomb scene with black water, stone tombs, cold lantern light and ancient decay, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text',
    description:
      '潮汐階梯下方是半淹前廳，倒塌拱頂讓冷光落在水面，漂著破燈、腐木和碎骨。前廳四面通向骨堂、黑水渠與燈龕，是墓窟外層最重要的交通節點。玩家可在這裡判斷水流方向、尋找失蹤隊伍留下的防水記號，也會遭遇第一批真正守墓者。水面倒映出的拱門比現實完整，容易誤導隊伍走向封死通道。若前廳中央渦流變黑，附近亡靈會一同醒來。',
    exits: [
      { direction: 'west', targetRoomId: 'sunken_catacombs_tide_stair', description: '階梯回到入口' },
      { direction: 'east', targetRoomId: 'sunken_catacombs_ossuary_walk', description: '骨牆長廊在東側' },
      { direction: 'south', targetRoomId: 'sunken_catacombs_blackwater_channel', description: '黑水渠在南側' },
      { direction: 'north', targetRoomId: 'sunken_catacombs_lantern_niche', description: '藍火燈龕在北側' },
    ],
    monsters: [
      { monsterId: 'skeleton_soldier', maxCount: 3, respawnSeconds: 70 },
      { monsterId: 'green_slime', maxCount: 3, respawnSeconds: 55 },
    ],
    mapSymbol: '[廳]',
    mapX: 1,
    mapY: 0,
    guardianHints: {
      creature: '淹沒前廳的水聲改變時，附近敵人通常已經開始移動。',
      treasure: '淹沒前廳附近常有被黑水沖出的墓窟線索。',
      spirit: '淹沒前廳保留著沉沒墓窟被潮水吞噬前後的記憶。',
    },
  },

  sunken_catacombs_ossuary_walk: {
    id: 'sunken_catacombs_ossuary_walk',
    name: '骨牆長廊',
    zone: 'sunken_catacombs' as RoomDef['zone'],
    image: 'sunken_catacombs_ossuary_walk.png',
    imagePrompt: '骨牆長廊 in sunken_catacombs, flooded underground catacomb scene with black water, stone tombs, cold lantern light and ancient decay, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text',
    description:
      '前廳東側的長廊兩壁砌滿頭骨與腿骨，許多骨骼被潮水泡得發灰，仍按照古老家族紋章排列。每當水流穿過骨縫，長廊會發出像低聲合唱的回音。這裡是戰鬥與探索房，玩家可拓印紋章、尋找被錯置的遺骨，也能從骨牆缺口前往漂棺室或哀悼墓室。骷髏士兵會從骨牆中抽身而出，巨蛛則在潮濕頂部結網。若玩家亂動骨序，整條長廊會短暫封死。',
    exits: [
      { direction: 'west', targetRoomId: 'sunken_catacombs_flooded_narthex', description: '長廊回到淹沒前廳' },
      { direction: 'east', targetRoomId: 'sunken_catacombs_floating_coffins', description: '水聲通向漂棺室' },
      { direction: 'north', targetRoomId: 'sunken_catacombs_mourner_crypt', description: '哭者墓室在北側' },
    ],
    monsters: [
      { monsterId: 'skeleton_soldier', maxCount: 4, respawnSeconds: 70 },
      { monsterId: 'giant_spider', maxCount: 2, respawnSeconds: 60 },
    ],
    mapSymbol: '[骨]',
    mapX: 2,
    mapY: 0,
    guardianHints: {
      creature: '骨牆長廊的水聲改變時，附近敵人通常已經開始移動。',
      treasure: '骨牆長廊附近常有被黑水沖出的墓窟線索。',
      spirit: '骨牆長廊保留著沉沒墓窟被潮水吞噬前後的記憶。',
    },
  },

  sunken_catacombs_blackwater_channel: {
    id: 'sunken_catacombs_blackwater_channel',
    name: '黑水渠',
    zone: 'sunken_catacombs' as RoomDef['zone'],
    image: 'sunken_catacombs_blackwater_channel.png',
    imagePrompt: '黑水渠 in sunken_catacombs, flooded underground catacomb scene with black water, stone tombs, cold lantern light and ancient decay, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text',
    description:
      '前廳南側開出一條低矮水渠，黑水沿著石槽緩慢流動，水面漂著蠟封、腐布與沒入一半的墓牌。這裡是水路通道與資源房，玩家可採集黑水沉泥、尋找排水閘位置，也能避開骨牆長廊直接前往水閘控制室。水渠狹窄，戰鬥時很難展開陣形，湖蛇與史萊姆會利用水深從側面靠近。若玩家帶著錯誤光源，黑水會反射出不存在的出口，引導隊伍走入蛇形排水道。',
    exits: [
      { direction: 'north', targetRoomId: 'sunken_catacombs_flooded_narthex', description: '水渠回到前廳' },
      { direction: 'east', targetRoomId: 'sunken_catacombs_sluice_control', description: '水流通向水閘控制室' },
      { direction: 'south', targetRoomId: 'sunken_catacombs_bone_silt_basin', description: '沉泥坡通向骨泥盆地' },
      { direction: 'east', targetRoomId: 'sunken_catacombs_serpent_drain', description: '狹窄水道通向蛇形排水道' },
    ],
    monsters: [
      { monsterId: 'lake_serpent', maxCount: 2, respawnSeconds: 110 },
      { monsterId: 'green_slime', maxCount: 3, respawnSeconds: 55 },
    ],
    mapSymbol: '[渠]',
    mapX: 1,
    mapY: -1,
    guardianHints: {
      creature: '黑水渠的水聲改變時，附近敵人通常已經開始移動。',
      treasure: '黑水渠附近常有被黑水沖出的墓窟線索。',
      spirit: '黑水渠保留著沉沒墓窟被潮水吞噬前後的記憶。',
    },
  },

  sunken_catacombs_floating_coffins: {
    id: 'sunken_catacombs_floating_coffins',
    name: '漂棺室',
    zone: 'sunken_catacombs' as RoomDef['zone'],
    image: 'sunken_catacombs_floating_coffins.png',
    imagePrompt: '漂棺室 in sunken_catacombs, flooded underground catacomb scene with black water, stone tombs, cold lantern light and ancient decay, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text',
    description:
      '骨牆長廊後方是一間被水淹到腰深的墓室，數十具石棺漂在水面，彼此碰撞時發出沉悶聲響。棺蓋上刻著不同潮汐符號，部分石棺卻被從內部頂開。這裡是高密度戰鬥與任務房，玩家可辨認正確棺序、尋找任務遺骸，或用漂棺搭成臨時路線。石棺移動會改變出口位置，也會讓守墓骷髏和亡靈騎士更容易靠近。若水位突然下降，原本漂浮的棺材會變成阻擋退路的石牆。',
    exits: [
      { direction: 'west', targetRoomId: 'sunken_catacombs_ossuary_walk', description: '骨牆路回到長廊' },
      { direction: 'north', targetRoomId: 'sunken_catacombs_mourner_crypt', description: '漂棺靠向哭者墓室' },
      { direction: 'south', targetRoomId: 'sunken_catacombs_sluice_control', description: '棺列間水路通向水閘室' },
    ],
    monsters: [
      { monsterId: 'skeleton_soldier', maxCount: 4, respawnSeconds: 70 },
      { monsterId: 'undead_knight', maxCount: 1, respawnSeconds: 160 },
    ],
    mapSymbol: '[棺]',
    mapX: 3,
    mapY: 0,
    guardianHints: {
      creature: '漂棺室的水聲改變時，附近敵人通常已經開始移動。',
      treasure: '漂棺室附近常有被黑水沖出的墓窟線索。',
      spirit: '漂棺室保留著沉沒墓窟被潮水吞噬前後的記憶。',
    },
  },

  sunken_catacombs_mourner_crypt: {
    id: 'sunken_catacombs_mourner_crypt',
    name: '哭者墓室',
    zone: 'sunken_catacombs' as RoomDef['zone'],
    image: 'sunken_catacombs_mourner_crypt.png',
    imagePrompt: '哭者墓室 in sunken_catacombs, flooded underground catacomb scene with black water, stone tombs, cold lantern light and ancient decay, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text',
    description:
      '漂棺室北面有一座乾燥些的墓室，牆上浮雕刻著披面哭者，她們的臉被潮氣侵蝕，只剩空洞眼眶。地面放著許多破陶碗，像曾有人定期供水或供淚。這裡是敘事與精英前置房，玩家可解讀哭者浮雕、收集葬儀碗碎片，並找到通往嘆息禮拜堂的祈詞。若玩家靠近主墓龕，哭者浮雕會滲出黑水，召來骷髏與石像守衛。墓室聲音異常清楚，任何低語都像被死者聽見。',
    exits: [
      { direction: 'south', targetRoomId: 'sunken_catacombs_floating_coffins', description: '墓階回到漂棺室' },
      { direction: 'west', targetRoomId: 'sunken_catacombs_ossuary_walk', description: '骨牆支路回到長廊' },
      { direction: 'east', targetRoomId: 'sunken_catacombs_chapel_of_sighs', description: '祈詞通向嘆息禮拜堂' },
    ],
    monsters: [
      { monsterId: 'skeleton_soldier', maxCount: 3, respawnSeconds: 70 },
      { monsterId: 'gargoyle', maxCount: 1, respawnSeconds: 120 },
    ],
    mapSymbol: '[哭]',
    mapX: 3,
    mapY: 1,
    guardianHints: {
      creature: '哭者墓室的水聲改變時，附近敵人通常已經開始移動。',
      treasure: '哭者墓室附近常有被黑水沖出的墓窟線索。',
      spirit: '哭者墓室保留著沉沒墓窟被潮水吞噬前後的記憶。',
    },
  },

  sunken_catacombs_sluice_control: {
    id: 'sunken_catacombs_sluice_control',
    name: '水閘控制室',
    zone: 'sunken_catacombs' as RoomDef['zone'],
    image: 'sunken_catacombs_sluice_control.png',
    imagePrompt: '水閘控制室 in sunken_catacombs, flooded underground catacomb scene with black water, stone tombs, cold lantern light and ancient decay, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text',
    description:
      '黑水渠深處有一間青銅水閘室，牆上排列著三只生鏽輪盤，分別控制外層水渠、漂棺室與深潮井水位。輪盤旁刻著古代潮汐表，但後人加上的標記已被泡爛。這裡是機關與交通房，玩家可調整水位、打開鏈橋捷徑，也可能因錯誤操作讓墓窟局部淹沒。水閘室地面滑膩，史萊姆會貼著齒輪藏身，湖蛇則從排水口突襲。若三只輪盤同時震動，代表深處黑水核心正在反推機關。這裡的選擇會影響後續水位、回程安全與不死者巡邏路線，隊伍最好先記錄潮痕和可用出口，再推進主要事件。務必謹慎前進。',
    exits: [
      { direction: 'west', targetRoomId: 'sunken_catacombs_blackwater_channel', description: '水渠回到西側' },
      { direction: 'north', targetRoomId: 'sunken_catacombs_floating_coffins', description: '水位門通向漂棺室' },
      { direction: 'south', targetRoomId: 'sunken_catacombs_bone_silt_basin', description: '排水坡通向骨泥盆地' },
      { direction: 'east', targetRoomId: 'sunken_catacombs_serpent_drain', description: '排水口通向蛇形水道' },
    ],
    monsters: [
      { monsterId: 'green_slime', maxCount: 3, respawnSeconds: 55 },
      { monsterId: 'lake_serpent', maxCount: 2, respawnSeconds: 110 },
    ],
    mapSymbol: '[閘]',
    mapX: 2,
    mapY: -1,
    guardianHints: {
      creature: '水閘控制室的水聲改變時，附近敵人通常已經開始移動。',
      treasure: '水閘控制室附近常有被黑水沖出的墓窟線索。',
      spirit: '水閘控制室保留著沉沒墓窟被潮水吞噬前後的記憶。',
    },
  },

  sunken_catacombs_bone_silt_basin: {
    id: 'sunken_catacombs_bone_silt_basin',
    name: '骨泥盆地',
    zone: 'sunken_catacombs' as RoomDef['zone'],
    image: 'sunken_catacombs_bone_silt_basin.png',
    imagePrompt: '骨泥盆地 in sunken_catacombs, flooded underground catacomb scene with black water, stone tombs, cold lantern light and ancient decay, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text',
    description:
      '水閘室南側的低地沉積著厚厚骨泥，碎骨、泥沙與腐布混成灰白色淤積物。每一步都會陷入膝蓋，拔腳聲像有人在泥下拉扯。這裡是資源與危險地形房，玩家可採集骨泥、尋找被水沖下來的墓牌，也能從淤積方向推斷深潮井位置。骨泥中藏著許多未完全甦醒的骷髏，史萊姆則吸附在骨片上偽裝成泥塊。若隊伍行動太慢，骨泥會逐漸封住剛踏出的路。',
    exits: [
      { direction: 'north', targetRoomId: 'sunken_catacombs_sluice_control', description: '淤泥坡回到水閘室' },
      { direction: 'east', targetRoomId: 'sunken_catacombs_deep_tidewell', description: '沉泥流向深潮井' },
    ],
    monsters: [
      { monsterId: 'skeleton_soldier', maxCount: 3, respawnSeconds: 70 },
      { monsterId: 'green_slime', maxCount: 4, respawnSeconds: 55 },
    ],
    mapSymbol: '[泥]',
    mapX: 2,
    mapY: -2,
    guardianHints: {
      creature: '骨泥盆地的水聲改變時，附近敵人通常已經開始移動。',
      treasure: '骨泥盆地附近常有被黑水沖出的墓窟線索。',
      spirit: '骨泥盆地保留著沉沒墓窟被潮水吞噬前後的記憶。',
    },
  },

  sunken_catacombs_lantern_niche: {
    id: 'sunken_catacombs_lantern_niche',
    name: '長明燈龕',
    zone: 'sunken_catacombs' as RoomDef['zone'],
    image: 'sunken_catacombs_lantern_niche.png',
    imagePrompt: '長明燈龕 in sunken_catacombs, flooded underground catacomb scene with black water, stone tombs, cold lantern light and ancient decay, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text',
    description:
      '淹沒前廳西側的牆面鑿出一排燈龕，多數油燈早已熄滅，只有中間一盞在潮濕空氣裡發出藍白小火。燈龕下方刻著回程祈文，字跡被無數濕手摸得發亮。這裡是探索與安全節點房，玩家可重新點亮長明燈，降低外層迷路風險，並取得前往嘆息禮拜堂的光源線索。燈火會吸引亡靈，也會驅散部分黑水幻象。若玩家吹熄唯一燃燈，整個前廳出口會在短時間內變得難以辨認。',
    exits: [
      { direction: 'south', targetRoomId: 'sunken_catacombs_flooded_narthex', description: '燈光回到前廳' },
      { direction: 'east', targetRoomId: 'sunken_catacombs_chapel_of_sighs', description: '祈文路通向嘆息禮拜堂' },
    ],
    monsters: [
      { monsterId: 'skeleton_soldier', maxCount: 2, respawnSeconds: 70 },
      { monsterId: 'gargoyle', maxCount: 1, respawnSeconds: 120 },
    ],
    mapSymbol: '[燈]',
    mapX: 0,
    mapY: 1,
    guardianHints: {
      creature: '長明燈龕的水聲改變時，附近敵人通常已經開始移動。',
      treasure: '長明燈龕附近常有被黑水沖出的墓窟線索。',
      spirit: '長明燈龕保留著沉沒墓窟被潮水吞噬前後的記憶。',
    },
  },

  sunken_catacombs_serpent_drain: {
    id: 'sunken_catacombs_serpent_drain',
    name: '蛇形排水道',
    zone: 'sunken_catacombs' as RoomDef['zone'],
    image: 'sunken_catacombs_serpent_drain.png',
    imagePrompt: '蛇形排水道 in sunken_catacombs, flooded underground catacomb scene with black water, stone tombs, cold lantern light and ancient decay, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text',
    description:
      '黑水渠東端分出一條蛇形排水道，通道窄到只能側身前進，牆面佈滿被鱗片磨出的弧形刮痕。水流在轉角處形成小漩渦，常把碎骨與蠟封捲到牆角。這裡是高風險通道房，玩家可追蹤湖蛇巢穴、取得排水機關的下層鑰記，也能繞往溺水祭壇。湖蛇會利用轉角連續突襲，史萊姆則封住低處排水口。若聽見前方水流突然消失，代表有蛇身堵住通道等待獵物靠近。這裡的選擇會影響後續水位、回程安全與不死者巡邏路線，隊伍最好先記錄潮痕和可用出口，再推進主要事件。務必謹慎前進。不要貿然分散。',
    exits: [
      { direction: 'west', targetRoomId: 'sunken_catacombs_sluice_control', description: '排水道回到水閘室' },
      { direction: 'east', targetRoomId: 'sunken_catacombs_drowned_altar', description: '低水道通向溺水祭壇' },
      { direction: 'south', targetRoomId: 'sunken_catacombs_blackwater_channel', description: '側渠回到黑水渠' },
    ],
    monsters: [
      { monsterId: 'lake_serpent', maxCount: 4, respawnSeconds: 110 },
      { monsterId: 'green_slime', maxCount: 2, respawnSeconds: 55 },
    ],
    mapSymbol: '[蛇]',
    mapX: 3,
    mapY: -1,
    guardianHints: {
      creature: '蛇形排水道的水聲改變時，附近敵人通常已經開始移動。',
      treasure: '蛇形排水道附近常有被黑水沖出的墓窟線索。',
      spirit: '蛇形排水道保留著沉沒墓窟被潮水吞噬前後的記憶。',
    },
  },

  sunken_catacombs_drowned_altar: {
    id: 'sunken_catacombs_drowned_altar',
    name: '溺水祭壇',
    zone: 'sunken_catacombs' as RoomDef['zone'],
    image: 'sunken_catacombs_drowned_altar.png',
    imagePrompt: '溺水祭壇 in sunken_catacombs, flooded underground catacomb scene with black water, stone tombs, cold lantern light and ancient decay, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text',
    description:
      '蛇形排水道盡頭開成一座半圓祭壇，祭壇上方供著無臉石像，石像胸口以下全浸在黑水裡。水面漂著供花、破骨杯與被水泡白的布條。這裡是任務與精英事件房，玩家可調查墓窟為何被水淹沒，收集祭壇水樣，或用長明燈火照出石像真正面孔。若玩家取走供杯，水下會伸出骷髏手臂，亡靈騎士也會從後方水道現身。祭壇旁的階梯通向石像鎖門，是進入深層墓窟的重要門檻。這裡的選擇會影響後續水位、回程安全與不死者巡邏路線，隊伍最好先記錄潮痕和可用出口，再推進主要事件。務必謹慎前進。',
    exits: [
      { direction: 'west', targetRoomId: 'sunken_catacombs_serpent_drain', description: '水道回到蛇形排水道' },
      { direction: 'east', targetRoomId: 'sunken_catacombs_gargoyle_lock', description: '祭壇階梯通向石像鎖門' },
    ],
    monsters: [
      { monsterId: 'undead_knight', maxCount: 1, respawnSeconds: 160 },
      { monsterId: 'skeleton_soldier', maxCount: 3, respawnSeconds: 70 },
      { monsterId: 'lake_serpent', maxCount: 1, respawnSeconds: 110 },
    ],
    mapSymbol: '[壇]',
    mapX: 4,
    mapY: -1,
    guardianHints: {
      creature: '溺水祭壇的水聲改變時，附近敵人通常已經開始移動。',
      treasure: '溺水祭壇附近常有被黑水沖出的墓窟線索。',
      spirit: '溺水祭壇保留著沉沒墓窟被潮水吞噬前後的記憶。',
    },
  },

  sunken_catacombs_gargoyle_lock: {
    id: 'sunken_catacombs_gargoyle_lock',
    name: '石像鎖門',
    zone: 'sunken_catacombs' as RoomDef['zone'],
    image: 'sunken_catacombs_gargoyle_lock.png',
    imagePrompt: '石像鎖門 in sunken_catacombs, flooded underground catacomb scene with black water, stone tombs, cold lantern light and ancient decay, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text',
    description:
      '溺水祭壇後方立著一扇厚重石門，門上雕著兩尊蹲伏石像，牠們的嘴裡含著青銅鎖舌。門縫不斷滲出冷水，像另一側水位更高。這裡是精英守門與機關房，玩家需要用祭壇水樣、長明燈火和水閘控制室的水位變化解除鎖舌。若順序錯誤，石像會甦醒，並把走廊重新灌水。石門兩側刻著墓窟建成時的誓詞，提到深潮井下封著不該再浮出的王冠。這裡的選擇會影響後續水位、回程安全與不死者巡邏路線，隊伍最好先記錄潮痕和可用出口，再推進主要事件。務必謹慎前進。不要貿然分散。保持隊形。前進。',
    exits: [
      { direction: 'west', targetRoomId: 'sunken_catacombs_drowned_altar', description: '石門回到溺水祭壇' },
      { direction: 'north', targetRoomId: 'sunken_catacombs_chain_bridge', description: '開鎖後通向鏽鏈橋' },
    ],
    monsters: [
      { monsterId: 'gargoyle', maxCount: 2, respawnSeconds: 120 },
      { monsterId: 'undead_knight', maxCount: 1, respawnSeconds: 160 },
    ],
    mapSymbol: '[鎖]',
    mapX: 5,
    mapY: -1,
    guardianHints: {
      creature: '石像鎖門的水聲改變時，附近敵人通常已經開始移動。',
      treasure: '石像鎖門附近常有被黑水沖出的墓窟線索。',
      spirit: '石像鎖門保留著沉沒墓窟被潮水吞噬前後的記憶。',
    },
  },

  sunken_catacombs_chapel_of_sighs: {
    id: 'sunken_catacombs_chapel_of_sighs',
    name: '嘆息禮拜堂',
    zone: 'sunken_catacombs' as RoomDef['zone'],
    image: 'sunken_catacombs_chapel_of_sighs.png',
    imagePrompt: '嘆息禮拜堂 in sunken_catacombs, flooded underground catacomb scene with black water, stone tombs, cold lantern light and ancient decay, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text',
    description:
      '哭者墓室上方通向一座小禮拜堂，穹頂破裂，水滴從裂縫落下，打在長椅與淺水上，形成像嘆息般的節奏。牆上壁畫描繪送葬隊伍走入地下，但最後幾幅被黑水覆蓋。這裡是敘事與交通房，玩家可解讀祈詞、安撫被困亡靈，並打開通往鏈橋與回音停屍間的路。禮拜堂看似安靜，實際上每排長椅下都有骷髏巡衛殘留的武器。若水滴節奏突然停止，代表亡靈騎士正在禮拜堂門外等待。',
    exits: [
      { direction: 'west', targetRoomId: 'sunken_catacombs_mourner_crypt', description: '墓室回到哭者墓室' },
      { direction: 'south', targetRoomId: 'sunken_catacombs_lantern_niche', description: '燈龕路在西南側' },
      { direction: 'east', targetRoomId: 'sunken_catacombs_chain_bridge', description: '禮拜堂門通向鏽鏈橋' },
    ],
    monsters: [
      { monsterId: 'skeleton_soldier', maxCount: 3, respawnSeconds: 70 },
      { monsterId: 'undead_knight', maxCount: 1, respawnSeconds: 160 },
    ],
    mapSymbol: '[堂]',
    mapX: 4,
    mapY: 1,
    guardianHints: {
      creature: '嘆息禮拜堂的水聲改變時，附近敵人通常已經開始移動。',
      treasure: '嘆息禮拜堂附近常有被黑水沖出的墓窟線索。',
      spirit: '嘆息禮拜堂保留著沉沒墓窟被潮水吞噬前後的記憶。',
    },
  },

  sunken_catacombs_chain_bridge: {
    id: 'sunken_catacombs_chain_bridge',
    name: '鏽鏈橋',
    zone: 'sunken_catacombs' as RoomDef['zone'],
    image: 'sunken_catacombs_chain_bridge.png',
    imagePrompt: '鏽鏈橋 in sunken_catacombs, flooded underground catacomb scene with black water, stone tombs, cold lantern light and ancient decay, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text',
    description:
      '嘆息禮拜堂東側有一座以粗鐵鏈吊起的窄橋，橋下是看不見底的黑水井道。每次有人踏上去，鐵鏈都會發出刺耳哀鳴，聲音沿井壁傳到深處。這裡是深層交通與危險通道房，玩家可穿越到騎士墓庫，也能用水閘機關降低井道水位建立回程捷徑。橋面濕滑，骷髏會從對岸逼近，石像則可能在橋中央攔截。若橋下黑水泛起白泡，湖蛇或更深處的東西正在上升。',
    exits: [
      { direction: 'west', targetRoomId: 'sunken_catacombs_chapel_of_sighs', description: '鏈橋回到禮拜堂' },
      { direction: 'south', targetRoomId: 'sunken_catacombs_gargoyle_lock', description: '鐵鏈下到石像鎖門' },
      { direction: 'east', targetRoomId: 'sunken_catacombs_knight_vault', description: '對岸是騎士墓庫' },
    ],
    monsters: [
      { monsterId: 'skeleton_soldier', maxCount: 3, respawnSeconds: 70 },
      { monsterId: 'gargoyle', maxCount: 1, respawnSeconds: 120 },
      { monsterId: 'lake_serpent', maxCount: 1, respawnSeconds: 110 },
    ],
    mapSymbol: '[橋]',
    mapX: 5,
    mapY: 1,
    guardianHints: {
      creature: '鏽鏈橋的水聲改變時，附近敵人通常已經開始移動。',
      treasure: '鏽鏈橋附近常有被黑水沖出的墓窟線索。',
      spirit: '鏽鏈橋保留著沉沒墓窟被潮水吞噬前後的記憶。',
    },
  },

  sunken_catacombs_knight_vault: {
    id: 'sunken_catacombs_knight_vault',
    name: '騎士墓庫',
    zone: 'sunken_catacombs' as RoomDef['zone'],
    image: 'sunken_catacombs_knight_vault.png',
    imagePrompt: '騎士墓庫 in sunken_catacombs, flooded underground catacomb scene with black water, stone tombs, cold lantern light and ancient decay, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text',
    description:
      '鏽鏈橋後方是騎士墓庫，牆邊排列著浸水鎧甲與長劍，中央石棺上刻著被黑水泡糊的家族紋章。亡靈騎士在此巡邏，像仍在守護早已失去主人的誓言。這裡是精英戰鬥房，玩家可挑戰亡靈騎士、尋找淨化信物，或取得打開王冠墓室的古老徽章。墓庫地面有許多水下裂縫，會限制站位並讓湖蛇從側面加入戰鬥。若玩家帶著正確祈詞進入，騎士會短暫停手，露出可對話或淨化的窗口。這裡的選擇會影響後續水位、回程安全與不死者巡邏路線，隊伍最好先記錄潮痕和可用出口，再推進主要事件。務必謹慎前進。',
    exits: [
      { direction: 'west', targetRoomId: 'sunken_catacombs_chain_bridge', description: '鏈橋回到西側' },
      { direction: 'south', targetRoomId: 'sunken_catacombs_crown_crypt', description: '家族徽章指向王冠墓室' },
    ],
    monsters: [
      { monsterId: 'undead_knight', maxCount: 2, respawnSeconds: 160 },
      { monsterId: 'skeleton_soldier', maxCount: 3, respawnSeconds: 70 },
      { monsterId: 'lake_serpent', maxCount: 1, respawnSeconds: 110 },
    ],
    mapSymbol: '[騎]',
    mapX: 6,
    mapY: 1,
    guardianHints: {
      creature: '騎士墓庫的水聲改變時，附近敵人通常已經開始移動。',
      treasure: '騎士墓庫附近常有被黑水沖出的墓窟線索。',
      spirit: '騎士墓庫保留著沉沒墓窟被潮水吞噬前後的記憶。',
    },
  },

  sunken_catacombs_deep_tidewell: {
    id: 'sunken_catacombs_deep_tidewell',
    name: '深潮井',
    zone: 'sunken_catacombs' as RoomDef['zone'],
    image: 'sunken_catacombs_deep_tidewell.png',
    imagePrompt: '深潮井 in sunken_catacombs, flooded underground catacomb scene with black water, stone tombs, cold lantern light and ancient decay, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text',
    description:
      '骨泥盆地深處裂開一口巨大的圓井，井壁全是潮濕墓磚，黑水在下方緩慢旋轉。井口邊緣釘著舊測深繩，繩尾早已被腐蝕斷裂。這裡是大型事件前置與水位核心房，玩家可測量深潮、投下燈火觀察黑水反應，並得知墓窟不是被外水淹沒，而是井底某物持續向上吐水。深潮井會影響所有外層房間水位，錯誤操作會讓漂棺室、鏈橋與祭壇同時變危險。井壁上偶爾浮出王冠形狀的暗影。這裡的選擇會影響後續水位、回程安全與不死者巡邏路線，隊伍最好先記錄潮痕和可用出口，再推進主要事件。務必謹慎前進。',
    exits: [
      { direction: 'west', targetRoomId: 'sunken_catacombs_bone_silt_basin', description: '沉泥回到骨泥盆地' },
      { direction: 'east', targetRoomId: 'sunken_catacombs_sarcophagus_fleet', description: '水流推向石棺漂流帶' },
    ],
    monsters: [
      { monsterId: 'green_slime', maxCount: 3, respawnSeconds: 55 },
      { monsterId: 'lake_serpent', maxCount: 2, respawnSeconds: 110 },
      { monsterId: 'undead_knight', maxCount: 1, respawnSeconds: 160 },
    ],
    mapSymbol: '[井]',
    mapX: 3,
    mapY: -3,
    guardianHints: {
      creature: '深潮井的水聲改變時，附近敵人通常已經開始移動。',
      treasure: '深潮井附近常有被黑水沖出的墓窟線索。',
      spirit: '深潮井保留著沉沒墓窟被潮水吞噬前後的記憶。',
    },
  },

  sunken_catacombs_sarcophagus_fleet: {
    id: 'sunken_catacombs_sarcophagus_fleet',
    name: '石棺漂流帶',
    zone: 'sunken_catacombs' as RoomDef['zone'],
    image: 'sunken_catacombs_sarcophagus_fleet.png',
    imagePrompt: '石棺漂流帶 in sunken_catacombs, flooded underground catacomb scene with black water, stone tombs, cold lantern light and ancient decay, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text',
    description:
      '深潮井東側水流把數十具石棺推成一列，像一支緩慢漂行的艦隊。每具石棺都以銅鏈連著下一具，鏈條撞擊水面時發出規律聲響。這裡是戰鬥與解謎房，玩家可調整石棺順序搭出路線，尋找被水流帶走的墓印，並通往回音停屍間或王冠墓室。若切斷錯誤銅鏈，整列石棺會撞向牆面，喚醒更多不死者。湖蛇也會藏在棺列陰影下，等待隊伍跳棺時失衡。這裡的選擇會影響後續水位、回程安全與不死者巡邏路線，隊伍最好先記錄潮痕和可用出口，再推進主要事件。務必謹慎前進。不要貿然分散。保持隊形。',
    exits: [
      { direction: 'west', targetRoomId: 'sunken_catacombs_deep_tidewell', description: '棺列回到深潮井' },
      { direction: 'north', targetRoomId: 'sunken_catacombs_echo_mortuary', description: '石棺靠向回音停屍間' },
      { direction: 'east', targetRoomId: 'sunken_catacombs_abyssal_cistern', description: '水流通向深淵蓄水池' },
    ],
    monsters: [
      { monsterId: 'skeleton_soldier', maxCount: 4, respawnSeconds: 70 },
      { monsterId: 'lake_serpent', maxCount: 2, respawnSeconds: 110 },
      { monsterId: 'undead_knight', maxCount: 1, respawnSeconds: 160 },
    ],
    mapSymbol: '[漂]',
    mapX: 4,
    mapY: -3,
    guardianHints: {
      creature: '石棺漂流帶的水聲改變時，附近敵人通常已經開始移動。',
      treasure: '石棺漂流帶附近常有被黑水沖出的墓窟線索。',
      spirit: '石棺漂流帶保留著沉沒墓窟被潮水吞噬前後的記憶。',
    },
  },

  sunken_catacombs_echo_mortuary: {
    id: 'sunken_catacombs_echo_mortuary',
    name: '回音停屍間',
    zone: 'sunken_catacombs' as RoomDef['zone'],
    image: 'sunken_catacombs_echo_mortuary.png',
    imagePrompt: '回音停屍間 in sunken_catacombs, flooded underground catacomb scene with black water, stone tombs, cold lantern light and ancient decay, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text',
    description:
      '石棺漂流帶北側是一間停屍間，石台排列整齊，台面上只剩水痕與被沖散的裹屍布。天花板很低，任何聲音都會貼著水面反彈，讓人分不清前後。這裡是恐怖探索與任務房，玩家可尋找指定屍布、收集死亡名冊碎片，也能找到通往王冠墓室的低門。停屍間的回音會模仿隊友聲音，誘使玩家靠近錯誤石台。若玩家點亮長明燈龕取得的藍火，真正出口會在水面倒影裡短暫顯示。這裡的選擇會影響後續水位、回程安全與不死者巡邏路線，隊伍最好先記錄潮痕和可用出口，再推進主要事件。務必謹慎前進。',
    exits: [
      { direction: 'south', targetRoomId: 'sunken_catacombs_sarcophagus_fleet', description: '低門回到漂流帶' },
      { direction: 'east', targetRoomId: 'sunken_catacombs_crown_crypt', description: '暗門通向王冠墓室' },
      { direction: 'north', targetRoomId: 'sunken_catacombs_chain_bridge', description: '維修梯通向鏈橋' },
    ],
    monsters: [
      { monsterId: 'skeleton_soldier', maxCount: 3, respawnSeconds: 70 },
      { monsterId: 'green_slime', maxCount: 3, respawnSeconds: 55 },
      { monsterId: 'gargoyle', maxCount: 1, respawnSeconds: 120 },
    ],
    mapSymbol: '[停]',
    mapX: 5,
    mapY: -2,
    guardianHints: {
      creature: '回音停屍間的水聲改變時，附近敵人通常已經開始移動。',
      treasure: '回音停屍間附近常有被黑水沖出的墓窟線索。',
      spirit: '回音停屍間保留著沉沒墓窟被潮水吞噬前後的記憶。',
    },
  },

  sunken_catacombs_crown_crypt: {
    id: 'sunken_catacombs_crown_crypt',
    name: '王冠墓室',
    zone: 'sunken_catacombs' as RoomDef['zone'],
    image: 'sunken_catacombs_crown_crypt.png',
    imagePrompt: '王冠墓室 in sunken_catacombs, flooded underground catacomb scene with black water, stone tombs, cold lantern light and ancient decay, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text',
    description:
      '回音停屍間與騎士墓庫之間藏著一座王冠墓室，中央石棺半浸在黑水中，棺蓋上雕著一頂被鎖鏈纏住的王冠。牆上記錄這位死者並非國王，而是第一個試圖控制深潮井的人。這裡是 Boss 級地標與任務決策房，玩家可用騎士徽章、死亡名冊與深潮井水樣拼出真相，選擇封印王冠或取走它作為證據。若貪取王冠碎片，亡靈騎士與骷髏將軍會同時甦醒，墓室水位也會迅速上升。這裡的選擇會影響後續水位、回程安全與不死者巡邏路線，隊伍最好先記錄潮痕和可用出口，再推進主要事件。務必謹慎前進。',
    exits: [
      { direction: 'west', targetRoomId: 'sunken_catacombs_echo_mortuary', description: '暗門回到停屍間' },
      { direction: 'north', targetRoomId: 'sunken_catacombs_knight_vault', description: '墓階回到騎士墓庫' },
      { direction: 'south', targetRoomId: 'sunken_catacombs_abyssal_cistern', description: '黑水階梯通向深淵蓄水池' },
    ],
    monsters: [
      { monsterId: 'skeleton_general', maxCount: 1, respawnSeconds: 240 },
      { monsterId: 'undead_knight', maxCount: 2, respawnSeconds: 160 },
      { monsterId: 'gargoyle', maxCount: 1, respawnSeconds: 120 },
    ],
    mapSymbol: '[冠]',
    mapX: 6,
    mapY: -2,
    guardianHints: {
      creature: '王冠墓室的水聲改變時，附近敵人通常已經開始移動。',
      treasure: '王冠墓室附近常有被黑水沖出的墓窟線索。',
      spirit: '王冠墓室保留著沉沒墓窟被潮水吞噬前後的記憶。',
    },
  },

  sunken_catacombs_abyssal_cistern: {
    id: 'sunken_catacombs_abyssal_cistern',
    name: '深淵蓄水池',
    zone: 'sunken_catacombs' as RoomDef['zone'],
    image: 'sunken_catacombs_abyssal_cistern.png',
    imagePrompt: '深淵蓄水池 in sunken_catacombs, flooded underground catacomb scene with black water, stone tombs, cold lantern light and ancient decay, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text',
    description:
      '沉沒墓窟最深處是一座巨大蓄水池，黑水從四面石渠匯入中央深坑，水面平滑到幾乎看不見流動。池壁鑲著破碎碑文、鐵鏈與倒掛石棺，所有水聲最後都被這裡吞掉。這裡是區域大型事件鉤子與最終地標，玩家可嘗試關閉深潮、淨化黑水，或追查王冠墓室的封印為何失效。任何操作都會改變整座墓窟水位，並引來骷髏將軍、亡靈騎士與水下生物共同反應。若黑水中央浮出王冠倒影，代表深處意志正在等待選擇。這裡的選擇會影響後續水位、回程安全與不死者巡邏路線，隊伍最好先記錄潮痕和可用出口，再推進主要事件。',
    exits: [
      { direction: 'west', targetRoomId: 'sunken_catacombs_sarcophagus_fleet', description: '水流回到石棺漂流帶' },
      { direction: 'north', targetRoomId: 'sunken_catacombs_crown_crypt', description: '黑水階梯回到王冠墓室' },
    ],
    monsters: [
      { monsterId: 'skeleton_general', maxCount: 1, respawnSeconds: 300 },
      { monsterId: 'undead_knight', maxCount: 2, respawnSeconds: 160 },
      { monsterId: 'lake_serpent', maxCount: 2, respawnSeconds: 110 },
      { monsterId: 'green_slime', maxCount: 3, respawnSeconds: 55 },
    ],
    mapSymbol: '[淵]',
    mapX: 5,
    mapY: -3,
    guardianHints: {
      creature: '深淵蓄水池的水聲改變時，附近敵人通常已經開始移動。',
      treasure: '深淵蓄水池附近常有被黑水沖出的墓窟線索。',
      spirit: '深淵蓄水池保留著沉沒墓窟被潮水吞噬前後的記憶。',
    },
  },

  thundersteppe_rolling_gate: {
    id: 'thundersteppe_rolling_gate',
    name: '雷原入口',
    zone: 'thundersteppe' as RoomDef['zone'],
    image: 'thundersteppe_rolling_gate.png',
    imagePrompt: '雷原入口 in thundersteppe, vast storm grassland gate with rolling thunderclouds, wet bronze trail markers, nomad banners and distant lightning, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text',
    description:
      '雷原入口立在西境草海邊緣，兩根被雷劈黑的木柱夾住低矮石門，門後草浪在風暴下翻成銀灰色。游牧部族把銅鈴、獸骨與避雷符掛在柱上，旅人通過時能聽見每一枚鈴都用不同節奏警告天候。這裡是雷鳴草原的交通節點與安全整隊處，東面牧道能深入風暴，北面淺溝通往雷雨積水區，南面則能看見野獸踩出的奔行痕。守門人留下乾燥柴束與粗略風向記號，提醒隊伍先檢查金屬裝備、藥草與坐騎，因為草原上的路會被暴雨在一刻鐘內改寫。入口旁還刻著簡短巡邏紀錄，標出最近雷獸、狼群與商隊失蹤的位置，讓新來者能先判斷今日是否適合深入草原。',
    exits: [
      { direction: 'east', targetRoomId: 'thundersteppe_stormgrass_track', description: '銅鈴聲引向雷草牧道' },
      { direction: 'north', targetRoomId: 'thundersteppe_thunder_pool', description: '濕草坡通往雷雨水洼' },
      { direction: 'south', targetRoomId: 'thundersteppe_boar_run', description: '泥痕延伸到野豬衝道' },
    ],
    monsters: [{ monsterId: 'wind_hawk', maxCount: 1, respawnSeconds: 80 }],
    mapSymbol: '[門]',
    mapX: 0,
    mapY: 0,
    guardianHints: {
      creature: '雷原入口的銅鈴忽然同時停住時，附近野獸多半已經伏低。',
      treasure: '入口木柱下常有游牧商隊遺落的避雷符扣。',
      spirit: '雷原入口記得每支進入草原的隊伍，也記得哪些人沒有回來。',
    },
  },

  thundersteppe_stormgrass_track: {
    id: 'thundersteppe_stormgrass_track',
    name: '雷草牧道',
    zone: 'thundersteppe' as RoomDef['zone'],
    image: 'thundersteppe_stormgrass_track.png',
    imagePrompt: '雷草牧道 in thundersteppe, trampled storm grass track under blue lightning, nomad hoofprints, rain-slick stones and open prairie horizon, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text',
    description:
      '雷草牧道被無數蹄印壓成兩條深色長線，草葉尖端帶著細小電光，雨水落下後會沿著葉脈發出短暫藍亮。路旁插著半埋的陶片與繩結，標記出游牧隊伍曾經避開落雷的安全間隔。這段路視野開闊卻沒有真正的遮蔽，旅人能從雲層震動判斷下一波雷暴方向，也能在泥地裡看見雷鷹、野豬與狼群交錯的足跡。若隊伍保持低速，這裡適合偵查周邊事件；若貪快奔跑，金屬護具與濕披風很容易把天上的怒火引到身邊。',
    exits: [
      { direction: 'west', targetRoomId: 'thundersteppe_rolling_gate', description: '牧道回到雷原入口' },
      { direction: 'east', targetRoomId: 'thundersteppe_herd_plain', description: '蹄印深入奔獸平原' },
      { direction: 'north', targetRoomId: 'thundersteppe_eagle_roost', description: '斷柱坡升向雷鷹棲柱' },
    ],
    monsters: [
      { monsterId: 'prairie_boar', maxCount: 2, respawnSeconds: 70 },
      { monsterId: 'wind_hawk', maxCount: 1, respawnSeconds: 80 },
    ],
    mapSymbol: '[道]',
    mapX: 1,
    mapY: 0,
    guardianHints: {
      creature: '雷草牧道的草尖若朝同一方向伏倒，狼群常沿反方向包抄。',
      treasure: '牧道陶片下偶爾藏著舊商隊的銅扣與乾糧牌。',
      spirit: '雷草牧道保存著逐水草而居的部族路線記憶。',
    },
  },

  thundersteppe_herd_plain: {
    id: 'thundersteppe_herd_plain',
    name: '奔獸平原',
    zone: 'thundersteppe' as RoomDef['zone'],
    image: 'thundersteppe_herd_plain.png',
    imagePrompt: '奔獸平原 in thundersteppe, broad prairie stamped by herds, storm clouds and lightning-lit grass waves, scattered bones and distant beasts, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text',
    description:
      '奔獸平原是雷鳴草原最寬闊的肋骨，整片地面被獸群踏得堅硬，雨水只能在蹄坑裡聚成一面面顫抖小鏡。遠處黑影常像浪潮一樣忽然轉向，那可能是野豬群，也可能是被雷聲驚動的狼群追逐獵物。平原中央留有多條分岔蹄路，能通往游牧營地、骨原與更高的天火台地。隊伍若在這裡停留過久，震動會先從腳底傳來，接著才聽見獸群衝鋒的轟鳴；懂得觀察草浪的人，則能利用同樣震動避開最危險的奔行線。',
    exits: [
      { direction: 'west', targetRoomId: 'thundersteppe_stormgrass_track', description: '蹄痕回到雷草牧道' },
      { direction: 'east', targetRoomId: 'thundersteppe_nomad_camp', description: '煙柱指向游牧營地' },
      { direction: 'south', targetRoomId: 'thundersteppe_charged_bonefield', description: '白骨線通往帶電骨原' },
    ],
    monsters: [
      { monsterId: 'prairie_boar', maxCount: 4, respawnSeconds: 70 },
      { monsterId: 'wild_wolf', maxCount: 2, respawnSeconds: 75 },
    ],
    mapSymbol: '[奔]',
    mapX: 2,
    mapY: 0,
    guardianHints: {
      creature: '奔獸平原的地面先震後響時，野豬群通常已在衝鋒。',
      treasure: '被踩實的蹄坑邊常能找到掉落的骨哨。',
      spirit: '奔獸平原記得所有遷徙，也記得被雷暴截斷的隊伍。',
    },
  },

  thundersteppe_thunder_pool: {
    id: 'thundersteppe_thunder_pool',
    name: '雷雨水洼',
    zone: 'thundersteppe' as RoomDef['zone'],
    image: 'thundersteppe_thunder_pool.png',
    imagePrompt: '雷雨水洼 in thundersteppe, shallow rain pools sparking with lightning, bent reeds, storm reflections and muddy prairie banks, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text',
    description:
      '雷雨水洼沿著入口北側低地展開，許多淺池被暴雨連成銀色碎帶，雷光落在水面時會沿著泥岸跳躍。池邊蘆草彎得很低，葉片上掛滿細小水珠，任何重靴踩入都會驚起一圈藍白火花。這裡適合收集雨水、洗去草原塵土，也適合觀察天空倒影裡的風暴裂縫；但濕地會放大聲音，遠處雷鷹能準確聽見金屬碰撞。若有人在水洼中央看見不屬於隊伍的影子，通常代表雷暴中的舊魂正在提醒來者改變路線。',
    exits: [
      { direction: 'south', targetRoomId: 'thundersteppe_rolling_gate', description: '濕坡回到雷原入口' },
      { direction: 'east', targetRoomId: 'thundersteppe_eagle_roost', description: '水邊斜路通往雷鷹棲柱' },
      { direction: 'north', targetRoomId: 'thundersteppe_wind_shrine', description: '蘆草缺口通往風祭小祠' },
    ],
    monsters: [
      { monsterId: 'wind_hawk', maxCount: 2, respawnSeconds: 80 },
      { monsterId: 'prairie_boar', maxCount: 1, respawnSeconds: 70 },
    ],
    mapSymbol: '[洼]',
    mapX: 0,
    mapY: 1,
    guardianHints: {
      creature: '雷雨水洼的倒影若先亮於天空，雷鷹多半已經盤旋。',
      treasure: '水洼泥底偶爾壓著被雨水洗出的銅片。',
      spirit: '雷雨水洼保存著風暴落地前最後一秒的倒影。',
    },
  },

  thundersteppe_eagle_roost: {
    id: 'thundersteppe_eagle_roost',
    name: '雷鷹棲柱',
    zone: 'thundersteppe' as RoomDef['zone'],
    image: 'thundersteppe_eagle_roost.png',
    imagePrompt: '雷鷹棲柱 in thundersteppe, tall stone pillars used by thunder eagles, storm nests, blue lightning and sweeping prairie view, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text',
    description:
      '雷鷹棲柱是一排被古雷劈出的石柱，每根柱頂都堆著枯草、獸骨與發亮的羽毛。風從柱間穿過時會形成尖銳嘯聲，像有看不見的獵鳥正在低空掠過。這裡能俯瞰入口、牧道與北側水洼，也能看見更遠處引雷柱林反射出的白線。攀上石柱可以取得戰術視野，但雷鷹會把任何接近巢位的金屬閃光視為挑釁。若隊伍願意留下獸肉或折斷的箭鏃，偶爾能換來一根帶靜電的羽毛，作為追蹤風向與即將落雷位置的信物。',
    exits: [
      { direction: 'south', targetRoomId: 'thundersteppe_stormgrass_track', description: '柱影落回雷草牧道' },
      { direction: 'west', targetRoomId: 'thundersteppe_thunder_pool', description: '濕風回到雷雨水洼' },
      { direction: 'east', targetRoomId: 'thundersteppe_split_totem', description: '斷柱線通往裂木圖騰' },
      { direction: 'up', targetRoomId: 'thundersteppe_eagle_nest_peak', description: '石柱頂端連向雷鷹巢峰' },
    ],
    monsters: [
      { monsterId: 'thunder_eagle', maxCount: 2, respawnSeconds: 120 },
      { monsterId: 'wind_hawk', maxCount: 2, respawnSeconds: 80 },
    ],
    mapSymbol: '[鷹]',
    mapX: 1,
    mapY: 1,
    guardianHints: {
      creature: '雷鷹棲柱若落下焦羽，巢主通常已經鎖定入侵者。',
      treasure: '最高石柱背風面常卡著帶電羽毛。',
      spirit: '雷鷹棲柱記得天空獵手與地面部族互相試探的年代。',
    },
  },

  thundersteppe_nomad_camp: {
    id: 'thundersteppe_nomad_camp',
    name: '游牧營地',
    zone: 'thundersteppe' as RoomDef['zone'],
    image: 'thundersteppe_nomad_camp.png',
    imagePrompt: '游牧營地 in thundersteppe, storm nomad tents with rain awnings, tether posts, cooking smoke bent by wind and lightning over prairie, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text',
    description:
      '游牧營地由低矮皮帳、斜插長矛與一圈半埋石塊組成，所有繩索都用濕皮革包住，避免雷火沿著金屬扣亂竄。營地中央的火塘被挖得很深，煙霧貼著草面流動，帶出乾肉、藥草與雨水混合的味道。這裡是冒險隊在草原中段最重要的補給點，牧人會用簡短手勢交易消息，也會警告外人不要在雷鼓石圈敲錯節拍。若玩家幫忙驅散附近獸群或修補避雷樁，營地能提供臨時庇護、風向情報與通往天火台地的安全時段。',
    exits: [
      { direction: 'west', targetRoomId: 'thundersteppe_herd_plain', description: '營地西側回到奔獸平原' },
      { direction: 'east', targetRoomId: 'thundersteppe_skyfire_mesa', description: '乾草坡升向天火台地' },
      { direction: 'north', targetRoomId: 'thundersteppe_split_totem', description: '繩結路通往裂木圖騰' },
      { direction: 'south', targetRoomId: 'thundersteppe_drum_circle', description: '鼓聲方向通往雷鼓石圈' },
    ],
    monsters: [{ monsterId: 'wild_wolf', maxCount: 1, respawnSeconds: 75 }],
    mapSymbol: '[營]',
    mapX: 3,
    mapY: 0,
    guardianHints: {
      creature: '游牧營地的拴繩若同時繃直，外圍坐騎可能先看見威脅。',
      treasure: '火塘旁的乾燥石縫裡常藏著交易用銅環。',
      spirit: '游牧營地承載著雷鳴草原仍願意接納旅人的一面。',
    },
  },

  thundersteppe_split_totem: {
    id: 'thundersteppe_split_totem',
    name: '裂木圖騰',
    zone: 'thundersteppe' as RoomDef['zone'],
    image: 'thundersteppe_split_totem.png',
    imagePrompt: '裂木圖騰 in thundersteppe, lightning-split wooden totem bound with bronze rings, storm grass and nomad offerings, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text',
    description:
      '裂木圖騰像一棵被劈開後仍站立的黑樹，內側木紋閃著焦金色，銅環把兩半軀幹勉強束在一起。圖騰腳下堆滿羽毛、獸牙、破箭與小陶杯，顯示游牧者仍把這裡當成詢問風暴意志的地方。玩家若繞行圖騰三圈，可以聽見不同方向傳來的雷聲回覆；但若拔走祭品，附近雷鷹與狼群會被同一股怒意驅動。這裡也是北線與中線交會處，能通往棲柱、營地與引雷柱林，適合做為隊伍重新決定路線的高風險節點。',
    exits: [
      { direction: 'west', targetRoomId: 'thundersteppe_eagle_roost', description: '焦木影子回到雷鷹棲柱' },
      { direction: 'south', targetRoomId: 'thundersteppe_nomad_camp', description: '繩結路回到游牧營地' },
      { direction: 'east', targetRoomId: 'thundersteppe_lightning_rod_field', description: '銅環反光指向引雷柱林' },
    ],
    monsters: [
      { monsterId: 'thunder_eagle', maxCount: 1, respawnSeconds: 120 },
      { monsterId: 'wild_wolf', maxCount: 2, respawnSeconds: 75 },
    ],
    mapSymbol: '[圖]',
    mapX: 2,
    mapY: 1,
    guardianHints: {
      creature: '裂木圖騰的銅環若無風自鳴，周圍獵手已被祭意驚動。',
      treasure: '圖騰裂縫中偶爾夾著被雷火淬亮的獸牙。',
      spirit: '裂木圖騰保存著部族向風暴借路的古老儀式。',
    },
  },

  thundersteppe_charged_bonefield: {
    id: 'thundersteppe_charged_bonefield',
    name: '帶電骨原',
    zone: 'thundersteppe' as RoomDef['zone'],
    image: 'thundersteppe_charged_bonefield.png',
    imagePrompt: '帶電骨原 in thundersteppe, bleached bones crackling with static, storm-lit prairie, scavenger tracks and low thunderclouds, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text',
    description:
      '帶電骨原鋪滿被風雨磨白的長骨，許多骨骸仍保持奔跑姿勢，像是在最後一刻被整片天空按倒。靜電沿著肋骨和角鞘滑動，玩家靠近時能聞到焦草與濕泥混在一起的味道。這裡是野獸群躲避風暴失敗後留下的警示，也吸引狼群與雷鷹前來搜尋容易撕開的屍塊。骨堆之間藏有舊戰矛、破碎鞍具與少量被雷煉硬的骨片；但每一次翻動都可能讓積蓄電荷找到新的出口，讓整片骨原像活物般發出尖銳顫音。',
    exits: [
      { direction: 'north', targetRoomId: 'thundersteppe_herd_plain', description: '骨線回到奔獸平原' },
      { direction: 'south', targetRoomId: 'thundersteppe_boar_run', description: '碎骨坡落向野豬衝道' },
      { direction: 'east', targetRoomId: 'thundersteppe_wolf_scarp', description: '狼爪痕通往狼群崖坡' },
    ],
    monsters: [
      { monsterId: 'wild_wolf', maxCount: 3, respawnSeconds: 75 },
      { monsterId: 'thunder_eagle', maxCount: 1, respawnSeconds: 120 },
    ],
    mapSymbol: '[骨]',
    mapX: 2,
    mapY: -1,
    guardianHints: {
      creature: '帶電骨原的骨堆若一起顫響，狼群多半正在壓低身形靠近。',
      treasure: '粗大肋骨內側可能藏有雷煉骨片。',
      spirit: '帶電骨原記得獸群沒能跑贏雷暴的那一夜。',
    },
  },

  thundersteppe_boar_run: {
    id: 'thundersteppe_boar_run',
    name: '野豬衝道',
    zone: 'thundersteppe' as RoomDef['zone'],
    image: 'thundersteppe_boar_run.png',
    imagePrompt: '野豬衝道 in thundersteppe, churned muddy boar trail through storm grass, broken shrubs, tusk marks and lightning rain, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text',
    description:
      '野豬衝道是一條被獠牙與厚蹄硬生生犁出的泥路，兩側灌木全被撞斷，枝葉上沾著濕泥和深色血痕。雷聲會讓草原野豬變得格外暴躁，牠們沿著這條低地來回衝撞，把任何擋路物都當成挑戰。玩家可以順著衝道快速繞開中線平原，也能在泥壁上觀察最近的獸群規模；但站位錯誤時，隊伍會在狹窄泥槽裡承受連續衝鋒。老獵人把破盾牌插在彎道外側，提醒來者轉角前先聽地面，不要只聽天空。',
    exits: [
      { direction: 'north', targetRoomId: 'thundersteppe_rolling_gate', description: '泥痕回到雷原入口' },
      { direction: 'east', targetRoomId: 'thundersteppe_charged_bonefield', description: '碎骨坡通往帶電骨原' },
      { direction: 'south', targetRoomId: 'thundersteppe_rain_shadow_gully', description: '低地水線落向雨影溝' },
    ],
    monsters: [
      { monsterId: 'prairie_boar', maxCount: 5, respawnSeconds: 70 },
      { monsterId: 'wild_wolf', maxCount: 1, respawnSeconds: 75 },
    ],
    mapSymbol: '[豬]',
    mapX: 1,
    mapY: -1,
    guardianHints: {
      creature: '野豬衝道的泥水若先向外震開，衝鋒已在轉角後成形。',
      treasure: '破盾牌後方常夾著獵人匆忙丟下的鐵扣。',
      spirit: '野豬衝道記得草原用蹄聲回應雷聲的方式。',
    },
  },

  thundersteppe_skyfire_mesa: {
    id: 'thundersteppe_skyfire_mesa',
    name: '天火台地',
    zone: 'thundersteppe' as RoomDef['zone'],
    image: 'thundersteppe_skyfire_mesa.png',
    imagePrompt: '天火台地 in thundersteppe, raised mesa scorched by lightning, storm horizon, glowing cracks and wind-torn grass, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text',
    description:
      '天火台地高出周圍草原一截，邊緣岩層被雷火劈成玻璃般的黑亮裂紋，雨水落上去會瞬間蒸成白霧。從這裡能看見游牧營地的煙柱、南側雷鼓石圈以及更遠處的風暴玻岩。台地中央有一圈舊灰，據說是雷獸曾經降落並把草根燒穿的痕跡。玩家若在雷暴間隙攀上台地，可以掌握草原大半路線；若在雲底壓低時逗留，整座高地會像巨大的引雷器，把天空火線直接拉到腳下。',
    exits: [
      { direction: 'west', targetRoomId: 'thundersteppe_nomad_camp', description: '乾草坡回到游牧營地' },
      { direction: 'east', targetRoomId: 'thundersteppe_stormglass_outcrop', description: '黑亮裂紋通往風暴玻岩' },
      { direction: 'south', targetRoomId: 'thundersteppe_drum_circle', description: '鼓點從南側石圈傳來' },
    ],
    monsters: [
      { monsterId: 'thunder_eagle', maxCount: 2, respawnSeconds: 120 },
      { monsterId: 'rock_giant', maxCount: 1, respawnSeconds: 160 },
    ],
    mapSymbol: '[火]',
    mapX: 4,
    mapY: 0,
    guardianHints: {
      creature: '天火台地的玻岩若連續泛白，雷鷹與巨物都會暫避高處。',
      treasure: '舊灰圈下偶爾有被雷火燒硬的石核。',
      spirit: '天火台地記得雷獸曾把天空短暫拖到地上的瞬間。',
    },
  },

  thundersteppe_wind_shrine: {
    id: 'thundersteppe_wind_shrine',
    name: '風祭小祠',
    zone: 'thundersteppe' as RoomDef['zone'],
    image: 'thundersteppe_wind_shrine.png',
    imagePrompt: '風祭小祠 in thundersteppe, small prairie wind shrine with cloth strips, rain pools, carved stones and storm clouds, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text',
    description:
      '風祭小祠藏在水洼北端的蘆草後方，幾塊刻紋石片圍住矮小木架，架上繫滿褪色布條與鳥羽。每當風向改變，布條會先後抬起，像有人用無聲語言指出草原上可以行走的縫隙。祠旁沒有守衛，只有被雨水洗亮的供杯和幾枚壓住紙符的小石頭。玩家若在此獻上羽毛或乾草，可獲得短暫順風與避雷提示；若粗暴翻動祭物，北面的引雷柱林會傳來尖銳共鳴，讓雷鷹誤以為有人挑釁巢域。',
    exits: [
      { direction: 'south', targetRoomId: 'thundersteppe_thunder_pool', description: '蘆草水線回到雷雨水洼' },
      { direction: 'east', targetRoomId: 'thundersteppe_lightning_rod_field', description: '布條指向引雷柱林' },
    ],
    monsters: [{ monsterId: 'wind_hawk', maxCount: 3, respawnSeconds: 80 }],
    mapSymbol: '[祠]',
    mapX: 0,
    mapY: 2,
    guardianHints: {
      creature: '風祭小祠的布條若逆風貼地，空中獵手通常正降低高度。',
      treasure: '供杯底部可能壓著牧人留下的風向石。',
      spirit: '風祭小祠保留著草原人向風詢問路徑的習慣。',
    },
  },

  thundersteppe_lightning_rod_field: {
    id: 'thundersteppe_lightning_rod_field',
    name: '引雷柱林',
    zone: 'thundersteppe' as RoomDef['zone'],
    image: 'thundersteppe_lightning_rod_field.png',
    imagePrompt: '引雷柱林 in thundersteppe, field of bronze and stone lightning rods, crackling storm arcs, wet prairie grass and ritual markers, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text',
    description:
      '引雷柱林由數十根石柱與青銅長釘組成，柱身刻著粗糙刻度，用來記錄每一季雷暴落點。雷光擊中其中一根柱子後，會沿地下濕根傳到其他柱腳，形成短暫而危險的藍色蛛網。這裡既是游牧者研究天候的地標，也是雷鳴草原最容易誤傷旅人的區域。懂行的人會沿著燒焦草圈外緣移動，藉柱影避開空中視線；不懂的人若站在兩根柱子之間，很可能在下一次雷鳴前就被靜電抬起頭髮，成為整片柱林的導線。柱腳附近還留有許多焦黑小旗，代表曾有隊伍在此測量風暴路徑，玩家可藉旗面破損方向推測安全出口與下一波雷擊間隔。',
    exits: [
      { direction: 'west', targetRoomId: 'thundersteppe_split_totem', description: '銅環反光回到裂木圖騰' },
      { direction: 'north', targetRoomId: 'thundersteppe_wind_shrine', description: '布條路回到風祭小祠' },
      { direction: 'east', targetRoomId: 'thundersteppe_eagle_nest_peak', description: '柱影延向雷鷹巢峰' },
      { direction: 'south', targetRoomId: 'thundersteppe_thunderhoof_crossing', description: '焦草缺口通往雷蹄渡口' },
    ],
    monsters: [
      { monsterId: 'thunder_eagle', maxCount: 3, respawnSeconds: 120 },
      { monsterId: 'wind_hawk', maxCount: 2, respawnSeconds: 80 },
    ],
    mapSymbol: '[柱]',
    mapX: 3,
    mapY: 1,
    guardianHints: {
      creature: '引雷柱林若有柱腳先亮，雷鷹通常會跟著弧光俯衝。',
      treasure: '舊刻度旁能刮下少量雷蝕青銅粉。',
      spirit: '引雷柱林記錄著草原人試圖讀懂天空脾氣的努力。',
    },
  },

  thundersteppe_wolf_scarp: {
    id: 'thundersteppe_wolf_scarp',
    name: '狼群崖坡',
    zone: 'thundersteppe' as RoomDef['zone'],
    image: 'thundersteppe_wolf_scarp.png',
    imagePrompt: '狼群崖坡 in thundersteppe, low prairie scarp with wolf dens, storm grass, claw marks and lightning on horizon, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text',
    description:
      '狼群崖坡不高，卻足以讓草原風在坡面形成迴旋，掩蓋多數腳步聲。坡底有幾處半塌洞穴，洞口散落白骨、濕毛與被拖行的草束，顯示狼群常把獵物趕到這裡再分食。崖頂視野能看見帶電骨原和雨影溝，但上坡路狹窄，隊伍很容易被前後夾住。雷鳴時狼嚎會被拉長成像人的呼喊，讓初來者誤判數量與方向。若玩家能找到主狼留下的爪印，便可推測牠們下一次巡獵會繞向渡口還是衝道。',
    exits: [
      { direction: 'west', targetRoomId: 'thundersteppe_charged_bonefield', description: '狼爪痕回到帶電骨原' },
      { direction: 'south', targetRoomId: 'thundersteppe_rain_shadow_gully', description: '崖坡小徑落向雨影溝' },
      { direction: 'east', targetRoomId: 'thundersteppe_thunderhoof_crossing', description: '崖頂草線通往雷蹄渡口' },
    ],
    monsters: [
      { monsterId: 'wild_wolf', maxCount: 5, respawnSeconds: 75 },
      { monsterId: 'prairie_boar', maxCount: 1, respawnSeconds: 70 },
    ],
    mapSymbol: '[狼]',
    mapX: 3,
    mapY: -1,
    guardianHints: {
      creature: '狼群崖坡的回聲若像人聲，狼群正利用坡面包圍獵物。',
      treasure: '塌洞最深處偶爾拖有商隊遺失的皮袋。',
      spirit: '狼群崖坡記得獵物在雷聲中迷失方向的恐懼。',
    },
  },

  thundersteppe_rain_shadow_gully: {
    id: 'thundersteppe_rain_shadow_gully',
    name: '雨影溝',
    zone: 'thundersteppe' as RoomDef['zone'],
    image: 'thundersteppe_rain_shadow_gully.png',
    imagePrompt: '雨影溝 in thundersteppe, narrow gully sheltered from storm rain, slick clay walls, sparse grass and distant lightning glow, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text',
    description:
      '雨影溝切在草原南側，兩邊黏土壁擋住大半斜雨，只留下上方天空像一條發亮裂口。溝底比外面安靜許多，水滴從草根滲下，形成不規則的細流與泥泡。這裡能讓隊伍短暫躲避落雷，也能繞到狼群崖坡和雷鼓石圈下方；但狹窄地形會放大任何伏擊風險，尤其是野豬從上方滑落時幾乎沒有閃避空間。牆面刻著幾道舊記號，指出哪些泥層會在暴雨後崩落，哪些可以當作臨時攀爬點。',
    exits: [
      { direction: 'north', targetRoomId: 'thundersteppe_boar_run', description: '泥槽回到野豬衝道' },
      { direction: 'east', targetRoomId: 'thundersteppe_wolf_scarp', description: '側坡升向狼群崖坡' },
      { direction: 'south', targetRoomId: 'thundersteppe_drum_circle', description: '低聲鼓點通往雷鼓石圈' },
    ],
    monsters: [
      { monsterId: 'wild_wolf', maxCount: 2, respawnSeconds: 75 },
      { monsterId: 'prairie_boar', maxCount: 2, respawnSeconds: 70 },
    ],
    mapSymbol: '[溝]',
    mapX: 2,
    mapY: -2,
    guardianHints: {
      creature: '雨影溝若忽然沒有滴水聲，坡上多半有東西擋住了雨線。',
      treasure: '黏土壁舊刻痕旁可能露出被沖刷的骨哨。',
      spirit: '雨影溝保存著旅人躲雷時壓低呼吸的記憶。',
    },
  },

  thundersteppe_drum_circle: {
    id: 'thundersteppe_drum_circle',
    name: '雷鼓石圈',
    zone: 'thundersteppe' as RoomDef['zone'],
    image: 'thundersteppe_drum_circle.png',
    imagePrompt: '雷鼓石圈 in thundersteppe, ring of drum stones on prairie, storm clouds, wet hides, ritual markings and lightning, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text',
    description:
      '雷鼓石圈由十二塊中空巨石圍成，雨水打在石面會發出低沉鼓聲，與遠處雷鳴互相呼應。游牧祭司曾在這裡用節拍引導獸群遷徙，也用錯拍警告營地準備迎戰。石圈中央鋪著被踩實的灰泥，幾面舊皮鼓倒扣在防雨坑裡，鼓皮仍殘留淡淡電光。玩家若按正確節奏敲擊，可能暫時干擾狼群與野豬的巡行；若敲錯，整座石圈會把聲音傳向風暴玻岩，召來高處雷鷹與更深處的龍雷回聲。',
    exits: [
      { direction: 'north', targetRoomId: 'thundersteppe_nomad_camp', description: '鼓聲北返游牧營地' },
      { direction: 'west', targetRoomId: 'thundersteppe_rain_shadow_gully', description: '低溝回到雨影溝' },
      { direction: 'east', targetRoomId: 'thundersteppe_stormglass_outcrop', description: '回聲引向風暴玻岩' },
    ],
    monsters: [
      { monsterId: 'wild_wolf', maxCount: 3, respawnSeconds: 75 },
      { monsterId: 'thunder_eagle', maxCount: 1, respawnSeconds: 120 },
    ],
    mapSymbol: '[鼓]',
    mapX: 4,
    mapY: -1,
    guardianHints: {
      creature: '雷鼓石圈若在無雨時自響，附近獸群可能已被節拍牽動。',
      treasure: '倒扣皮鼓內偶爾藏著祭司留下的骨槌。',
      spirit: '雷鼓石圈記得草原人用聲音與雷暴交涉的年代。',
    },
  },

  thundersteppe_stormglass_outcrop: {
    id: 'thundersteppe_stormglass_outcrop',
    name: '風暴玻岩',
    zone: 'thundersteppe' as RoomDef['zone'],
    image: 'thundersteppe_stormglass_outcrop.png',
    imagePrompt: '風暴玻岩 in thundersteppe, black fulgurite outcrop shining in rain, storm grass, lightning reflections and cracked stone shelves, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text',
    description:
      '風暴玻岩像一片從草原脊背長出的黑色浪花，表面由無數雷擊熔出的玻璃層疊而成，雨水滑過時會反射出破碎天空。岩縫裡能找到細小發光砂粒，也能聽見地下電流沿著濕根游動的嗡鳴。這裡連接天火台地、雷鼓石圈與更深處的龍雷風眼，是高階隊伍辨認最終事件路線的重要地標。玩家若在岩面放置金屬物，能短暫看見即將落雷的位置；但玻岩也會把遠處龍息般的風暴聲放大，讓膽怯坐騎直接掙脫繩索。岩面低處刻著幾道舊箭頭，指向能避開玻裂邊緣的窄路，也暗示這裡曾是前往火坑前最後一次重整隊形的位置。',
    exits: [
      { direction: 'west', targetRoomId: 'thundersteppe_skyfire_mesa', description: '黑亮裂紋回到天火台地' },
      { direction: 'south', targetRoomId: 'thundersteppe_drum_circle', description: '回聲落回雷鼓石圈' },
      { direction: 'east', targetRoomId: 'thundersteppe_dragonstorm_eye', description: '玻岩脈動指向龍雷風眼' },
    ],
    monsters: [
      { monsterId: 'rock_giant', maxCount: 2, respawnSeconds: 160 },
      { monsterId: 'thunder_eagle', maxCount: 2, respawnSeconds: 120 },
    ],
    mapSymbol: '[玻]',
    mapX: 5,
    mapY: 0,
    guardianHints: {
      creature: '風暴玻岩的反光若出現爪形，龍雷風眼可能正在甦醒。',
      treasure: '玻岩裂縫可採到少量雷熔砂。',
      spirit: '風暴玻岩記得每次天空把草原燒成玻璃的瞬間。',
    },
  },

  thundersteppe_eagle_nest_peak: {
    id: 'thundersteppe_eagle_nest_peak',
    name: '雷鷹巢峰',
    zone: 'thundersteppe' as RoomDef['zone'],
    image: 'thundersteppe_eagle_nest_peak.png',
    imagePrompt: '雷鷹巢峰 in thundersteppe, high storm eagle nest on stone peak, blue lightning feathers, vast prairie below and violent clouds, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text',
    description:
      '雷鷹巢峰是棲柱群最高的一截，峰頂被巨巢覆蓋，枯枝、骨架與亮羽在狂風中互相摩擦，發出像刀刃刮過金屬的聲音。從這裡向下看，雷鳴草原的路線像濕皮革上的刻線，入口、圖騰、柱林與渡口都清楚可見。雷鷹把巢峰視為天空領地，任何靠近者都必須承受俯衝與落雷同時壓下的威脅。若玩家能在不毀巢的情況下取回任務物，游牧營地會承認隊伍懂得尊重草原獵手，而不是只會掠奪。',
    exits: [
      { direction: 'down', targetRoomId: 'thundersteppe_eagle_roost', description: '石柱降回雷鷹棲柱' },
      { direction: 'west', targetRoomId: 'thundersteppe_lightning_rod_field', description: '高空柱影落向引雷柱林' },
    ],
    monsters: [
      { monsterId: 'thunder_eagle', maxCount: 4, respawnSeconds: 120 },
      { monsterId: 'wind_hawk', maxCount: 3, respawnSeconds: 80 },
    ],
    mapSymbol: '[巢]',
    mapX: 4,
    mapY: 2,
    guardianHints: {
      creature: '雷鷹巢峰若飄下熱羽，下一次俯衝通常已經開始。',
      treasure: '巢緣偶爾能取到不傷巢體的落羽。',
      spirit: '雷鷹巢峰記得天空領主如何審視所有地面來客。',
    },
  },

  thundersteppe_thunderhoof_crossing: {
    id: 'thundersteppe_thunderhoof_crossing',
    name: '雷蹄渡口',
    zone: 'thundersteppe' as RoomDef['zone'],
    image: 'thundersteppe_thunderhoof_crossing.png',
    imagePrompt: '雷蹄渡口 in thundersteppe, shallow storm stream crossing with hoofprints, sparking water, prairie reeds and lightning-lit banks, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text',
    description:
      '雷蹄渡口跨過一條季節性暴雨溪，溪水不深，卻因上游雷擊而帶著刺痛電流。渡口兩側布滿巨大蹄印，某些蹄坑內的水會在無風時自行旋轉，像仍記得雷獸踏過時的重量。這裡是北線柱林、南側狼坡與最深處龍雷風眼之間的關鍵通道，隊伍常在此決定是否繼續向東。渡水時必須拉開間距，避免一人觸電拖倒全隊；若能找到最古老的三枚蹄印，便可避開水下最強的電流脈絡。',
    exits: [
      { direction: 'north', targetRoomId: 'thundersteppe_lightning_rod_field', description: '焦草缺口回到引雷柱林' },
      { direction: 'west', targetRoomId: 'thundersteppe_wolf_scarp', description: '崖頂草線回到狼群崖坡' },
      { direction: 'east', targetRoomId: 'thundersteppe_dragonstorm_eye', description: '電流溪線指向龍雷風眼' },
    ],
    monsters: [
      { monsterId: 'prairie_boar', maxCount: 3, respawnSeconds: 70 },
      { monsterId: 'thunder_eagle', maxCount: 1, respawnSeconds: 120 },
    ],
    mapSymbol: '[蹄]',
    mapX: 5,
    mapY: -1,
    guardianHints: {
      creature: '雷蹄渡口的蹄坑若同時旋轉，雷獸餘威可能喚來獵食者。',
      treasure: '最深蹄印底部偶爾沉著被電流磨圓的石珠。',
      spirit: '雷蹄渡口保存著巨獸踏水時留下的沉重記憶。',
    },
  },

  thundersteppe_dragonstorm_eye: {
    id: 'thundersteppe_dragonstorm_eye',
    name: '龍雷風眼',
    zone: 'thundersteppe' as RoomDef['zone'],
    image: 'thundersteppe_dragonstorm_eye.png',
    imagePrompt: '龍雷風眼 in thundersteppe, circular storm eye over prairie, dragon-shaped lightning, spiraling grass and black clouds, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text',
    description:
      '龍雷風眼是一片反常安靜的圓形草地，四周風暴像牆一樣旋轉，中央卻只有細雨垂直落下。草葉全朝同一方向彎曲，地面焦痕勾勒出巨大爪印，雲層深處偶爾浮現龍形閃電。這裡是雷鳴草原最終事件前的核心地標，隊伍可在此解讀風暴、追蹤雷獸或準備挑戰世界王火坑。任何大聲咒語、錯誤祭品或過量金屬都會讓風眼縮小，迫使玩家在越來越近的雷牆中快速決定。若能保持節奏與隊形，風眼會短暫露出通往火坑的安全裂縫。風眼邊緣還殘留許多半熔化的旗杆，顯示先前挑戰者曾在此分配位置、測試雷牆節奏，並把撤退標記留給後續隊伍。',
    exits: [
      { direction: 'west', targetRoomId: 'thundersteppe_stormglass_outcrop', description: '玻岩脈動回到風暴玻岩' },
      { direction: 'south', targetRoomId: 'thundersteppe_thunderhoof_crossing', description: '溪線回到雷蹄渡口' },
      { direction: 'east', targetRoomId: 'thundersteppe_worldboss_crater', description: '風眼裂縫通往世界王火坑' },
    ],
    monsters: [
      { monsterId: 'storm_dragon', maxCount: 1, respawnSeconds: 1800 },
      { monsterId: 'thunder_eagle', maxCount: 2, respawnSeconds: 120 },
    ],
    mapSymbol: '[眼]',
    mapX: 6,
    mapY: 0,
    guardianHints: {
      creature: '龍雷風眼的雨若忽然橫飛，深處風暴意志已經注意到隊伍。',
      treasure: '爪形焦痕內可找到少量風暴玻砂。',
      spirit: '龍雷風眼記得每次草原與天空互相撕開的中心點。',
    },
  },

  thundersteppe_worldboss_crater: {
    id: 'thundersteppe_worldboss_crater',
    name: '世界王火坑',
    zone: 'thundersteppe' as RoomDef['zone'],
    image: 'thundersteppe_worldboss_crater.png',
    imagePrompt: '世界王火坑 in thundersteppe, massive lightning crater for world boss encounter, scorched prairie rim, storm dragon clouds and molten glass, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text',
    description:
      '世界王火坑位於雷鳴草原最深處，整座坑緣被熔成黑藍色玻璃，雨水落下時先變成白霧，再沿著內壁流進仍在發光的裂縫。火坑中央沒有火，只有像心跳一樣明滅的雷核，每一次亮起都會讓遠方引雷柱林、雷鼓石圈與雷鷹巢峰同時回應。這裡是區域大型事件與世界王遭遇場，玩家需要先處理風眼節奏、渡口電流與營地支援，才能在坑邊站穩。若戰鬥拖太久，雷核會召回草原上的野獸、空中獵手與風暴龍影，迫使隊伍在輸出、走位、解場與撤退路線之間做出明確分工。火坑不只考驗等級，也考驗玩家是否真正讀懂整片草原留下的預警。',
    exits: [{ direction: 'west', targetRoomId: 'thundersteppe_dragonstorm_eye', description: '風眼裂縫回到龍雷風眼' }],
    monsters: [
      { monsterId: 'storm_dragon', maxCount: 1, respawnSeconds: 1800 },
      { monsterId: 'thunder_eagle', maxCount: 3, respawnSeconds: 120 },
      { monsterId: 'wild_wolf', maxCount: 3, respawnSeconds: 75 },
    ],
    mapSymbol: '[王]',
    mapX: 7,
    mapY: 0,
    guardianHints: {
      creature: '世界王火坑的雷核若連跳三次，下一波召喚會從多個方向同時抵達。',
      treasure: '坑緣冷卻玻璃內可能封著雷核碎屑。',
      spirit: '世界王火坑記得草原把所有怒雷集中於一點的時刻。',
    },
  },
  glass_dunes_sun_gate: {
    id: 'glass_dunes_sun_gate',
    name: '日照玻門',
    zone: 'glass_dunes' as RoomDef['zone'],
    image: 'glass_dunes_sun_gate.png',
    imagePrompt: '日照玻門 in glass_dunes, blazing glass desert with fused sand, harsh sunlight, ancient dynasty ruins, refracted heat haze and resource gathering details, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text',
    description:
      '日照玻門位於琉璃沙丘的熱風路線上，周圍玻砂在烈日下反射出刺眼白光，地面同時留下採集者繩標、失落王朝碎片與巡邏魔物的腳印。這裡不是單純景點，而是採集、戰鬥與區域敘事交會的節點。玩家可以使用 gather 或 inspect 尋找礦砂、藥草、水源與王朝殘片，也必須注意薄玻璃裂聲、反光造成的視線錯判、突然升起的熱風和遠處逐漸接近的火元素回音。若隊伍願意記錄路標、控制負重、保留撤退水量並觀察陰影方向，這片看似荒涼的沙丘會逐步顯露古代魔法如何把王朝邊境熔成玻海的真相，並找出下一處安全採集點。',
    exits: [
      { direction: 'east', targetRoomId: 'glass_dunes_mirror_slope', description: '玻砂路延向鏡坡' },
      { direction: 'south', targetRoomId: 'glass_dunes_buried_caravan', description: '半埋車轍通往商隊殘骸' },
    ],
    monsters: [
      { monsterId: 'fire_salamander', maxCount: 2, respawnSeconds: 90 },
    ],
    mapSymbol: '[門]',
    mapX: 0,
    mapY: 0,
    guardianHints: {
      creature: '日照玻門的反光若突然被陰影切斷，附近巡邏魔物通常已經接近。',
      treasure: '日照玻門的玻砂裂縫裡可能藏著尚未採完的礦砂、藥草或王朝碎片。',
      spirit: '日照玻門保留著琉璃沙丘被古代魔法熔成玻海前後的記憶。',
    },
  },

  glass_dunes_mirror_slope: {
    id: 'glass_dunes_mirror_slope',
    name: '鏡面沙坡',
    zone: 'glass_dunes' as RoomDef['zone'],
    image: 'glass_dunes_mirror_slope.png',
    imagePrompt: '鏡面沙坡 in glass_dunes, blazing glass desert with fused sand, harsh sunlight, ancient dynasty ruins, refracted heat haze and resource gathering details, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text',
    description:
      '鏡面沙坡位於琉璃沙丘的熱風路線上，周圍玻砂在烈日下反射出刺眼白光，地面同時留下採集者繩標、失落王朝碎片與巡邏魔物的腳印。這裡不是單純景點，而是採集、戰鬥與區域敘事交會的節點。玩家可以使用 gather 或 inspect 尋找礦砂、藥草、水源與王朝殘片，也必須注意薄玻璃裂聲、反光造成的視線錯判、突然升起的熱風和遠處逐漸接近的火元素回音。若隊伍願意記錄路標、控制負重、保留撤退水量並觀察陰影方向，這片看似荒涼的沙丘會逐步顯露古代魔法如何把王朝邊境熔成玻海的真相，並找出下一處安全採集點。',
    exits: [
      { direction: 'west', targetRoomId: 'glass_dunes_sun_gate', description: '反光坡面回到日照玻門' },
      { direction: 'east', targetRoomId: 'glass_dunes_shard_claim', description: '尖碎玻片指向碎晶採區' },
      { direction: 'north', targetRoomId: 'glass_dunes_singing_ridge', description: '風聲爬上鳴砂脊' },
    ],
    monsters: [
      { monsterId: 'fire_salamander', maxCount: 2, respawnSeconds: 90 },
      { monsterId: 'flame_spirit', maxCount: 1, respawnSeconds: 110 },
    ],
    mapSymbol: '[坡]',
    mapX: 1,
    mapY: 0,
    guardianHints: {
      creature: '鏡面沙坡的反光若突然被陰影切斷，附近巡邏魔物通常已經接近。',
      treasure: '鏡面沙坡的玻砂裂縫裡可能藏著尚未採完的礦砂、藥草或王朝碎片。',
      spirit: '鏡面沙坡保留著琉璃沙丘被古代魔法熔成玻海前後的記憶。',
    },
  },

  glass_dunes_shard_claim: {
    id: 'glass_dunes_shard_claim',
    name: '碎晶採區',
    zone: 'glass_dunes' as RoomDef['zone'],
    image: 'glass_dunes_shard_claim.png',
    imagePrompt: '碎晶採區 in glass_dunes, blazing glass desert with fused sand, harsh sunlight, ancient dynasty ruins, refracted heat haze and resource gathering details, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text',
    description:
      '碎晶採區位於琉璃沙丘的熱風路線上，周圍玻砂在烈日下反射出刺眼白光，地面同時留下採集者繩標、失落王朝碎片與巡邏魔物的腳印。這裡不是單純景點，而是採集、戰鬥與區域敘事交會的節點。玩家可以使用 gather 或 inspect 尋找礦砂、藥草、水源與王朝殘片，也必須注意薄玻璃裂聲、反光造成的視線錯判、突然升起的熱風和遠處逐漸接近的火元素回音。若隊伍願意記錄路標、控制負重、保留撤退水量並觀察陰影方向，這片看似荒涼的沙丘會逐步顯露古代魔法如何把王朝邊境熔成玻海的真相，並找出下一處安全採集點。',
    exits: [
      { direction: 'west', targetRoomId: 'glass_dunes_mirror_slope', description: '鏡坡回到西側' },
      { direction: 'east', targetRoomId: 'glass_dunes_vein_gallery', description: '採掘繩標進入琉璃礦廊' },
      { direction: 'south', targetRoomId: 'glass_dunes_relic_pit', description: '塌砂邊緣通往遺物坑' },
    ],
    monsters: [
      { monsterId: 'crystal_golem', maxCount: 1, respawnSeconds: 160 },
    ],
    mapSymbol: '[採]',
    mapX: 2,
    mapY: 0,
    guardianHints: {
      creature: '碎晶採區的反光若突然被陰影切斷，附近巡邏魔物通常已經接近。',
      treasure: '碎晶採區的玻砂裂縫裡可能藏著尚未採完的礦砂、藥草或王朝碎片。',
      spirit: '碎晶採區保留著琉璃沙丘被古代魔法熔成玻海前後的記憶。',
    },
  },

  glass_dunes_singing_ridge: {
    id: 'glass_dunes_singing_ridge',
    name: '鳴砂脊',
    zone: 'glass_dunes' as RoomDef['zone'],
    image: 'glass_dunes_singing_ridge.png',
    imagePrompt: '鳴砂脊 in glass_dunes, blazing glass desert with fused sand, harsh sunlight, ancient dynasty ruins, refracted heat haze and resource gathering details, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text',
    description:
      '鳴砂脊位於琉璃沙丘的熱風路線上，周圍玻砂在烈日下反射出刺眼白光，地面同時留下採集者繩標、失落王朝碎片與巡邏魔物的腳印。這裡不是單純景點，而是採集、戰鬥與區域敘事交會的節點。玩家可以使用 gather 或 inspect 尋找礦砂、藥草、水源與王朝殘片，也必須注意薄玻璃裂聲、反光造成的視線錯判、突然升起的熱風和遠處逐漸接近的火元素回音。若隊伍願意記錄路標、控制負重、保留撤退水量並觀察陰影方向，這片看似荒涼的沙丘會逐步顯露古代魔法如何把王朝邊境熔成玻海的真相，並找出下一處安全採集點。',
    exits: [
      { direction: 'south', targetRoomId: 'glass_dunes_mirror_slope', description: '坡音落回鏡面沙坡' },
      { direction: 'east', targetRoomId: 'glass_dunes_prism_arch', description: '七色反光指向稜鏡拱' },
    ],
    monsters: [
      { monsterId: 'flame_spirit', maxCount: 2, respawnSeconds: 110 },
    ],
    mapSymbol: '[鳴]',
    mapX: 1,
    mapY: 1,
    guardianHints: {
      creature: '鳴砂脊的反光若突然被陰影切斷，附近巡邏魔物通常已經接近。',
      treasure: '鳴砂脊的玻砂裂縫裡可能藏著尚未採完的礦砂、藥草或王朝碎片。',
      spirit: '鳴砂脊保留著琉璃沙丘被古代魔法熔成玻海前後的記憶。',
    },
  },

  glass_dunes_buried_caravan: {
    id: 'glass_dunes_buried_caravan',
    name: '半埋商隊',
    zone: 'glass_dunes' as RoomDef['zone'],
    image: 'glass_dunes_buried_caravan.png',
    imagePrompt: '半埋商隊 in glass_dunes, blazing glass desert with fused sand, harsh sunlight, ancient dynasty ruins, refracted heat haze and resource gathering details, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text',
    description:
      '半埋商隊位於琉璃沙丘的熱風路線上，周圍玻砂在烈日下反射出刺眼白光，地面同時留下採集者繩標、失落王朝碎片與巡邏魔物的腳印。這裡不是單純景點，而是採集、戰鬥與區域敘事交會的節點。玩家可以使用 gather 或 inspect 尋找礦砂、藥草、水源與王朝殘片，也必須注意薄玻璃裂聲、反光造成的視線錯判、突然升起的熱風和遠處逐漸接近的火元素回音。若隊伍願意記錄路標、控制負重、保留撤退水量並觀察陰影方向，這片看似荒涼的沙丘會逐步顯露古代魔法如何把王朝邊境熔成玻海的真相，並找出下一處安全採集點。',
    exits: [
      { direction: 'north', targetRoomId: 'glass_dunes_sun_gate', description: '車轍回到日照玻門' },
      { direction: 'east', targetRoomId: 'glass_dunes_water_pocket', description: '破水囊路通往暗水袋' },
      { direction: 'south', targetRoomId: 'glass_dunes_saltwind_cut', description: '鹽風裂口通往切谷' },
    ],
    monsters: [
      { monsterId: 'fire_salamander', maxCount: 1, respawnSeconds: 90 },
      { monsterId: 'rock_giant', maxCount: 1, respawnSeconds: 160 },
    ],
    mapSymbol: '[車]',
    mapX: 0,
    mapY: -1,
    guardianHints: {
      creature: '半埋商隊的反光若突然被陰影切斷，附近巡邏魔物通常已經接近。',
      treasure: '半埋商隊的玻砂裂縫裡可能藏著尚未採完的礦砂、藥草或王朝碎片。',
      spirit: '半埋商隊保留著琉璃沙丘被古代魔法熔成玻海前後的記憶。',
    },
  },

  glass_dunes_vein_gallery: {
    id: 'glass_dunes_vein_gallery',
    name: '琉璃礦廊',
    zone: 'glass_dunes' as RoomDef['zone'],
    image: 'glass_dunes_vein_gallery.png',
    imagePrompt: '琉璃礦廊 in glass_dunes, blazing glass desert with fused sand, harsh sunlight, ancient dynasty ruins, refracted heat haze and resource gathering details, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text',
    description:
      '琉璃礦廊位於琉璃沙丘的熱風路線上，周圍玻砂在烈日下反射出刺眼白光，地面同時留下採集者繩標、失落王朝碎片與巡邏魔物的腳印。這裡不是單純景點，而是採集、戰鬥與區域敘事交會的節點。玩家可以使用 gather 或 inspect 尋找礦砂、藥草、水源與王朝殘片，也必須注意薄玻璃裂聲、反光造成的視線錯判、突然升起的熱風和遠處逐漸接近的火元素回音。若隊伍願意記錄路標、控制負重、保留撤退水量並觀察陰影方向，這片看似荒涼的沙丘會逐步顯露古代魔法如何把王朝邊境熔成玻海的真相，並找出下一處安全採集點。',
    exits: [
      { direction: 'west', targetRoomId: 'glass_dunes_shard_claim', description: '礦脈回到碎晶採區' },
      { direction: 'east', targetRoomId: 'glass_dunes_crystal_golem_yard', description: '重腳印通往晶魔像場' },
      { direction: 'north', targetRoomId: 'glass_dunes_prism_arch', description: '礦光升向稜鏡拱' },
    ],
    monsters: [
      { monsterId: 'crystal_golem', maxCount: 2, respawnSeconds: 160 },
    ],
    mapSymbol: '[礦]',
    mapX: 3,
    mapY: 0,
    guardianHints: {
      creature: '琉璃礦廊的反光若突然被陰影切斷，附近巡邏魔物通常已經接近。',
      treasure: '琉璃礦廊的玻砂裂縫裡可能藏著尚未採完的礦砂、藥草或王朝碎片。',
      spirit: '琉璃礦廊保留著琉璃沙丘被古代魔法熔成玻海前後的記憶。',
    },
  },

  glass_dunes_herb_shelf: {
    id: 'glass_dunes_herb_shelf',
    name: '耐旱藥棚',
    zone: 'glass_dunes' as RoomDef['zone'],
    image: 'glass_dunes_herb_shelf.png',
    imagePrompt: '耐旱藥棚 in glass_dunes, blazing glass desert with fused sand, harsh sunlight, ancient dynasty ruins, refracted heat haze and resource gathering details, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text',
    description:
      '耐旱藥棚位於琉璃沙丘的熱風路線上，周圍玻砂在烈日下反射出刺眼白光，地面同時留下採集者繩標、失落王朝碎片與巡邏魔物的腳印。這裡不是單純景點，而是採集、戰鬥與區域敘事交會的節點。玩家可以使用 gather 或 inspect 尋找礦砂、藥草、水源與王朝殘片，也必須注意薄玻璃裂聲、反光造成的視線錯判、突然升起的熱風和遠處逐漸接近的火元素回音。若隊伍願意記錄路標、控制負重、保留撤退水量並觀察陰影方向，這片看似荒涼的沙丘會逐步顯露古代魔法如何把王朝邊境熔成玻海的真相，並找出下一處安全採集點。',
    exits: [
      { direction: 'west', targetRoomId: 'glass_dunes_singing_ridge', description: '乾草線接回鳴砂脊' },
      { direction: 'east', targetRoomId: 'glass_dunes_obsidian_well', description: '藥棚背後通往黑曜井' },
      { direction: 'south', targetRoomId: 'glass_dunes_relic_pit', description: '根鬚坡落向遺物坑' },
    ],
    monsters: [
      { monsterId: 'fire_salamander', maxCount: 1, respawnSeconds: 90 },
    ],
    mapSymbol: '[藥]',
    mapX: 2,
    mapY: 1,
    guardianHints: {
      creature: '耐旱藥棚的反光若突然被陰影切斷，附近巡邏魔物通常已經接近。',
      treasure: '耐旱藥棚的玻砂裂縫裡可能藏著尚未採完的礦砂、藥草或王朝碎片。',
      spirit: '耐旱藥棚保留著琉璃沙丘被古代魔法熔成玻海前後的記憶。',
    },
  },

  glass_dunes_water_pocket: {
    id: 'glass_dunes_water_pocket',
    name: '暗水袋',
    zone: 'glass_dunes' as RoomDef['zone'],
    image: 'glass_dunes_water_pocket.png',
    imagePrompt: '暗水袋 in glass_dunes, blazing glass desert with fused sand, harsh sunlight, ancient dynasty ruins, refracted heat haze and resource gathering details, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text',
    description:
      '暗水袋位於琉璃沙丘的熱風路線上，周圍玻砂在烈日下反射出刺眼白光，地面同時留下採集者繩標、失落王朝碎片與巡邏魔物的腳印。這裡不是單純景點，而是採集、戰鬥與區域敘事交會的節點。玩家可以使用 gather 或 inspect 尋找礦砂、藥草、水源與王朝殘片，也必須注意薄玻璃裂聲、反光造成的視線錯判、突然升起的熱風和遠處逐漸接近的火元素回音。若隊伍願意記錄路標、控制負重、保留撤退水量並觀察陰影方向，這片看似荒涼的沙丘會逐步顯露古代魔法如何把王朝邊境熔成玻海的真相，並找出下一處安全採集點。',
    exits: [
      { direction: 'west', targetRoomId: 'glass_dunes_buried_caravan', description: '破囊路回到半埋商隊' },
      { direction: 'east', targetRoomId: 'glass_dunes_beast_scrape', description: '濕爪痕通往獸刮地' },
      { direction: 'south', targetRoomId: 'glass_dunes_saltwind_cut', description: '細水線落入鹽風切谷' },
    ],
    monsters: [
      { monsterId: 'fire_salamander', maxCount: 2, respawnSeconds: 90 },
    ],
    mapSymbol: '[水]',
    mapX: 1,
    mapY: -1,
    guardianHints: {
      creature: '暗水袋的反光若突然被陰影切斷，附近巡邏魔物通常已經接近。',
      treasure: '暗水袋的玻砂裂縫裡可能藏著尚未採完的礦砂、藥草或王朝碎片。',
      spirit: '暗水袋保留著琉璃沙丘被古代魔法熔成玻海前後的記憶。',
    },
  },

  glass_dunes_beast_scrape: {
    id: 'glass_dunes_beast_scrape',
    name: '獸刮地',
    zone: 'glass_dunes' as RoomDef['zone'],
    image: 'glass_dunes_beast_scrape.png',
    imagePrompt: '獸刮地 in glass_dunes, blazing glass desert with fused sand, harsh sunlight, ancient dynasty ruins, refracted heat haze and resource gathering details, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text',
    description:
      '獸刮地位於琉璃沙丘的熱風路線上，周圍玻砂在烈日下反射出刺眼白光，地面同時留下採集者繩標、失落王朝碎片與巡邏魔物的腳印。這裡不是單純景點，而是採集、戰鬥與區域敘事交會的節點。玩家可以使用 gather 或 inspect 尋找礦砂、藥草、水源與王朝殘片，也必須注意薄玻璃裂聲、反光造成的視線錯判、突然升起的熱風和遠處逐漸接近的火元素回音。若隊伍願意記錄路標、控制負重、保留撤退水量並觀察陰影方向，這片看似荒涼的沙丘會逐步顯露古代魔法如何把王朝邊境熔成玻海的真相，並找出下一處安全採集點。',
    exits: [
      { direction: 'west', targetRoomId: 'glass_dunes_water_pocket', description: '濕爪痕回到暗水袋' },
      { direction: 'east', targetRoomId: 'glass_dunes_relic_pit', description: '碎骨路通往遺物坑' },
      { direction: 'south', targetRoomId: 'glass_dunes_glassstorm_basin', description: '刮痕延入玻暴盆地' },
    ],
    monsters: [
      { monsterId: 'fire_salamander', maxCount: 3, respawnSeconds: 90 },
      { monsterId: 'flame_spirit', maxCount: 1, respawnSeconds: 110 },
    ],
    mapSymbol: '[刮]',
    mapX: 2,
    mapY: -1,
    guardianHints: {
      creature: '獸刮地的反光若突然被陰影切斷，附近巡邏魔物通常已經接近。',
      treasure: '獸刮地的玻砂裂縫裡可能藏著尚未採完的礦砂、藥草或王朝碎片。',
      spirit: '獸刮地保留著琉璃沙丘被古代魔法熔成玻海前後的記憶。',
    },
  },

  glass_dunes_relic_pit: {
    id: 'glass_dunes_relic_pit',
    name: '遺物坑',
    zone: 'glass_dunes' as RoomDef['zone'],
    image: 'glass_dunes_relic_pit.png',
    imagePrompt: '遺物坑 in glass_dunes, blazing glass desert with fused sand, harsh sunlight, ancient dynasty ruins, refracted heat haze and resource gathering details, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text',
    description:
      '遺物坑位於琉璃沙丘的熱風路線上，周圍玻砂在烈日下反射出刺眼白光，地面同時留下採集者繩標、失落王朝碎片與巡邏魔物的腳印。這裡不是單純景點，而是採集、戰鬥與區域敘事交會的節點。玩家可以使用 gather 或 inspect 尋找礦砂、藥草、水源與王朝殘片，也必須注意薄玻璃裂聲、反光造成的視線錯判、突然升起的熱風和遠處逐漸接近的火元素回音。若隊伍願意記錄路標、控制負重、保留撤退水量並觀察陰影方向，這片看似荒涼的沙丘會逐步顯露古代魔法如何把王朝邊境熔成玻海的真相，並找出下一處安全採集點。',
    exits: [
      { direction: 'north', targetRoomId: 'glass_dunes_shard_claim', description: '塌砂坡回到碎晶採區' },
      { direction: 'west', targetRoomId: 'glass_dunes_beast_scrape', description: '碎骨路回到獸刮地' },
      { direction: 'east', targetRoomId: 'glass_dunes_mirage_bazaar', description: '幻影旗影指向海市集' },
    ],
    monsters: [
      { monsterId: 'crystal_golem', maxCount: 1, respawnSeconds: 160 },
      { monsterId: 'fire_elemental', maxCount: 1, respawnSeconds: 140 },
    ],
    mapSymbol: '[遺]',
    mapX: 3,
    mapY: -1,
    guardianHints: {
      creature: '遺物坑的反光若突然被陰影切斷，附近巡邏魔物通常已經接近。',
      treasure: '遺物坑的玻砂裂縫裡可能藏著尚未採完的礦砂、藥草或王朝碎片。',
      spirit: '遺物坑保留著琉璃沙丘被古代魔法熔成玻海前後的記憶。',
    },
  },

  glass_dunes_mirage_bazaar: {
    id: 'glass_dunes_mirage_bazaar',
    name: '海市集影',
    zone: 'glass_dunes' as RoomDef['zone'],
    image: 'glass_dunes_mirage_bazaar.png',
    imagePrompt: '海市集影 in glass_dunes, blazing glass desert with fused sand, harsh sunlight, ancient dynasty ruins, refracted heat haze and resource gathering details, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text',
    description:
      '海市集影位於琉璃沙丘的熱風路線上，周圍玻砂在烈日下反射出刺眼白光，地面同時留下採集者繩標、失落王朝碎片與巡邏魔物的腳印。這裡不是單純景點，而是採集、戰鬥與區域敘事交會的節點。玩家可以使用 gather 或 inspect 尋找礦砂、藥草、水源與王朝殘片，也必須注意薄玻璃裂聲、反光造成的視線錯判、突然升起的熱風和遠處逐漸接近的火元素回音。若隊伍願意記錄路標、控制負重、保留撤退水量並觀察陰影方向，這片看似荒涼的沙丘會逐步顯露古代魔法如何把王朝邊境熔成玻海的真相，並找出下一處安全採集點。',
    exits: [
      { direction: 'west', targetRoomId: 'glass_dunes_relic_pit', description: '幻影散回遺物坑' },
      { direction: 'north', targetRoomId: 'glass_dunes_obsidian_well', description: '黑影水光通往黑曜井' },
      { direction: 'east', targetRoomId: 'glass_dunes_buried_palace_door', description: '破旗線通往埋宮門' },
    ],
    monsters: [
      { monsterId: 'flame_spirit', maxCount: 2, respawnSeconds: 110 },
    ],
    mapSymbol: '[市]',
    mapX: 4,
    mapY: -1,
    guardianHints: {
      creature: '海市集影的反光若突然被陰影切斷，附近巡邏魔物通常已經接近。',
      treasure: '海市集影的玻砂裂縫裡可能藏著尚未採完的礦砂、藥草或王朝碎片。',
      spirit: '海市集影保留著琉璃沙丘被古代魔法熔成玻海前後的記憶。',
    },
  },

  glass_dunes_prism_arch: {
    id: 'glass_dunes_prism_arch',
    name: '稜鏡拱',
    zone: 'glass_dunes' as RoomDef['zone'],
    image: 'glass_dunes_prism_arch.png',
    imagePrompt: '稜鏡拱 in glass_dunes, blazing glass desert with fused sand, harsh sunlight, ancient dynasty ruins, refracted heat haze and resource gathering details, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text',
    description:
      '稜鏡拱位於琉璃沙丘的熱風路線上，周圍玻砂在烈日下反射出刺眼白光，地面同時留下採集者繩標、失落王朝碎片與巡邏魔物的腳印。這裡不是單純景點，而是採集、戰鬥與區域敘事交會的節點。玩家可以使用 gather 或 inspect 尋找礦砂、藥草、水源與王朝殘片，也必須注意薄玻璃裂聲、反光造成的視線錯判、突然升起的熱風和遠處逐漸接近的火元素回音。若隊伍願意記錄路標、控制負重、保留撤退水量並觀察陰影方向，這片看似荒涼的沙丘會逐步顯露古代魔法如何把王朝邊境熔成玻海的真相，並找出下一處安全採集點。',
    exits: [
      { direction: 'west', targetRoomId: 'glass_dunes_singing_ridge', description: '七色坡回到鳴砂脊' },
      { direction: 'south', targetRoomId: 'glass_dunes_vein_gallery', description: '拱影落回琉璃礦廊' },
      { direction: 'east', targetRoomId: 'glass_dunes_solar_forge', description: '熱光通往日輪熔臺' },
    ],
    monsters: [
      { monsterId: 'crystal_golem', maxCount: 1, respawnSeconds: 160 },
      { monsterId: 'flame_spirit', maxCount: 1, respawnSeconds: 110 },
    ],
    mapSymbol: '[拱]',
    mapX: 3,
    mapY: 1,
    guardianHints: {
      creature: '稜鏡拱的反光若突然被陰影切斷，附近巡邏魔物通常已經接近。',
      treasure: '稜鏡拱的玻砂裂縫裡可能藏著尚未採完的礦砂、藥草或王朝碎片。',
      spirit: '稜鏡拱保留著琉璃沙丘被古代魔法熔成玻海前後的記憶。',
    },
  },

  glass_dunes_obsidian_well: {
    id: 'glass_dunes_obsidian_well',
    name: '黑曜井',
    zone: 'glass_dunes' as RoomDef['zone'],
    image: 'glass_dunes_obsidian_well.png',
    imagePrompt: '黑曜井 in glass_dunes, blazing glass desert with fused sand, harsh sunlight, ancient dynasty ruins, refracted heat haze and resource gathering details, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text',
    description:
      '黑曜井位於琉璃沙丘的熱風路線上，周圍玻砂在烈日下反射出刺眼白光，地面同時留下採集者繩標、失落王朝碎片與巡邏魔物的腳印。這裡不是單純景點，而是採集、戰鬥與區域敘事交會的節點。玩家可以使用 gather 或 inspect 尋找礦砂、藥草、水源與王朝殘片，也必須注意薄玻璃裂聲、反光造成的視線錯判、突然升起的熱風和遠處逐漸接近的火元素回音。若隊伍願意記錄路標、控制負重、保留撤退水量並觀察陰影方向，這片看似荒涼的沙丘會逐步顯露古代魔法如何把王朝邊境熔成玻海的真相，並找出下一處安全採集點。',
    exits: [
      { direction: 'west', targetRoomId: 'glass_dunes_herb_shelf', description: '井繩回到耐旱藥棚' },
      { direction: 'south', targetRoomId: 'glass_dunes_mirage_bazaar', description: '黑影水光回到海市集影' },
      { direction: 'east', targetRoomId: 'glass_dunes_solar_forge', description: '井壁熱脈通往日輪熔臺' },
    ],
    monsters: [
      { monsterId: 'fire_elemental', maxCount: 2, respawnSeconds: 140 },
    ],
    mapSymbol: '[井]',
    mapX: 4,
    mapY: 0,
    guardianHints: {
      creature: '黑曜井的反光若突然被陰影切斷，附近巡邏魔物通常已經接近。',
      treasure: '黑曜井的玻砂裂縫裡可能藏著尚未採完的礦砂、藥草或王朝碎片。',
      spirit: '黑曜井保留著琉璃沙丘被古代魔法熔成玻海前後的記憶。',
    },
  },

  glass_dunes_glassstorm_basin: {
    id: 'glass_dunes_glassstorm_basin',
    name: '玻暴盆地',
    zone: 'glass_dunes' as RoomDef['zone'],
    image: 'glass_dunes_glassstorm_basin.png',
    imagePrompt: '玻暴盆地 in glass_dunes, blazing glass desert with fused sand, harsh sunlight, ancient dynasty ruins, refracted heat haze and resource gathering details, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text',
    description:
      '玻暴盆地位於琉璃沙丘的熱風路線上，周圍玻砂在烈日下反射出刺眼白光，地面同時留下採集者繩標、失落王朝碎片與巡邏魔物的腳印。這裡不是單純景點，而是採集、戰鬥與區域敘事交會的節點。玩家可以使用 gather 或 inspect 尋找礦砂、藥草、水源與王朝殘片，也必須注意薄玻璃裂聲、反光造成的視線錯判、突然升起的熱風和遠處逐漸接近的火元素回音。若隊伍願意記錄路標、控制負重、保留撤退水量並觀察陰影方向，這片看似荒涼的沙丘會逐步顯露古代魔法如何把王朝邊境熔成玻海的真相，並找出下一處安全採集點。',
    exits: [
      { direction: 'north', targetRoomId: 'glass_dunes_beast_scrape', description: '刮痕回到獸刮地' },
      { direction: 'west', targetRoomId: 'glass_dunes_saltwind_cut', description: '鹽風坡回到切谷' },
      { direction: 'east', targetRoomId: 'glass_dunes_lost_dynasty_altar', description: '風暴裂線指向失朝祭壇' },
    ],
    monsters: [
      { monsterId: 'fire_elemental', maxCount: 2, respawnSeconds: 140 },
      { monsterId: 'crystal_golem', maxCount: 1, respawnSeconds: 160 },
    ],
    mapSymbol: '[暴]',
    mapX: 3,
    mapY: -2,
    guardianHints: {
      creature: '玻暴盆地的反光若突然被陰影切斷，附近巡邏魔物通常已經接近。',
      treasure: '玻暴盆地的玻砂裂縫裡可能藏著尚未採完的礦砂、藥草或王朝碎片。',
      spirit: '玻暴盆地保留著琉璃沙丘被古代魔法熔成玻海前後的記憶。',
    },
  },

  glass_dunes_saltwind_cut: {
    id: 'glass_dunes_saltwind_cut',
    name: '鹽風切谷',
    zone: 'glass_dunes' as RoomDef['zone'],
    image: 'glass_dunes_saltwind_cut.png',
    imagePrompt: '鹽風切谷 in glass_dunes, blazing glass desert with fused sand, harsh sunlight, ancient dynasty ruins, refracted heat haze and resource gathering details, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text',
    description:
      '鹽風切谷位於琉璃沙丘的熱風路線上，周圍玻砂在烈日下反射出刺眼白光，地面同時留下採集者繩標、失落王朝碎片與巡邏魔物的腳印。這裡不是單純景點，而是採集、戰鬥與區域敘事交會的節點。玩家可以使用 gather 或 inspect 尋找礦砂、藥草、水源與王朝殘片，也必須注意薄玻璃裂聲、反光造成的視線錯判、突然升起的熱風和遠處逐漸接近的火元素回音。若隊伍願意記錄路標、控制負重、保留撤退水量並觀察陰影方向，這片看似荒涼的沙丘會逐步顯露古代魔法如何把王朝邊境熔成玻海的真相，並找出下一處安全採集點。',
    exits: [
      { direction: 'north', targetRoomId: 'glass_dunes_buried_caravan', description: '裂谷北返半埋商隊' },
      { direction: 'east', targetRoomId: 'glass_dunes_glassstorm_basin', description: '鹽風坡通往玻暴盆地' },
    ],
    monsters: [
      { monsterId: 'rock_giant', maxCount: 1, respawnSeconds: 160 },
      { monsterId: 'fire_salamander', maxCount: 2, respawnSeconds: 90 },
    ],
    mapSymbol: '[鹽]',
    mapX: 1,
    mapY: -2,
    guardianHints: {
      creature: '鹽風切谷的反光若突然被陰影切斷，附近巡邏魔物通常已經接近。',
      treasure: '鹽風切谷的玻砂裂縫裡可能藏著尚未採完的礦砂、藥草或王朝碎片。',
      spirit: '鹽風切谷保留著琉璃沙丘被古代魔法熔成玻海前後的記憶。',
    },
  },

  glass_dunes_crystal_golem_yard: {
    id: 'glass_dunes_crystal_golem_yard',
    name: '晶魔像場',
    zone: 'glass_dunes' as RoomDef['zone'],
    image: 'glass_dunes_crystal_golem_yard.png',
    imagePrompt: '晶魔像場 in glass_dunes, blazing glass desert with fused sand, harsh sunlight, ancient dynasty ruins, refracted heat haze and resource gathering details, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text',
    description:
      '晶魔像場位於琉璃沙丘的熱風路線上，周圍玻砂在烈日下反射出刺眼白光，地面同時留下採集者繩標、失落王朝碎片與巡邏魔物的腳印。這裡不是單純景點，而是採集、戰鬥與區域敘事交會的節點。玩家可以使用 gather 或 inspect 尋找礦砂、藥草、水源與王朝殘片，也必須注意薄玻璃裂聲、反光造成的視線錯判、突然升起的熱風和遠處逐漸接近的火元素回音。若隊伍願意記錄路標、控制負重、保留撤退水量並觀察陰影方向，這片看似荒涼的沙丘會逐步顯露古代魔法如何把王朝邊境熔成玻海的真相，並找出下一處安全採集點。',
    exits: [
      { direction: 'west', targetRoomId: 'glass_dunes_vein_gallery', description: '重腳印回到礦廊' },
      { direction: 'east', targetRoomId: 'glass_dunes_buried_palace_door', description: '碎石階通往埋宮門' },
      { direction: 'north', targetRoomId: 'glass_dunes_solar_forge', description: '熱裂路升向日輪熔臺' },
    ],
    monsters: [
      { monsterId: 'crystal_golem', maxCount: 3, respawnSeconds: 160 },
      { monsterId: 'rock_giant', maxCount: 1, respawnSeconds: 160 },
    ],
    mapSymbol: '[像]',
    mapX: 4,
    mapY: 1,
    guardianHints: {
      creature: '晶魔像場的反光若突然被陰影切斷，附近巡邏魔物通常已經接近。',
      treasure: '晶魔像場的玻砂裂縫裡可能藏著尚未採完的礦砂、藥草或王朝碎片。',
      spirit: '晶魔像場保留著琉璃沙丘被古代魔法熔成玻海前後的記憶。',
    },
  },

  glass_dunes_solar_forge: {
    id: 'glass_dunes_solar_forge',
    name: '日輪熔臺',
    zone: 'glass_dunes' as RoomDef['zone'],
    image: 'glass_dunes_solar_forge.png',
    imagePrompt: '日輪熔臺 in glass_dunes, blazing glass desert with fused sand, harsh sunlight, ancient dynasty ruins, refracted heat haze and resource gathering details, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text',
    description:
      '日輪熔臺位於琉璃沙丘的熱風路線上，周圍玻砂在烈日下反射出刺眼白光，地面同時留下採集者繩標、失落王朝碎片與巡邏魔物的腳印。這裡不是單純景點，而是採集、戰鬥與區域敘事交會的節點。玩家可以使用 gather 或 inspect 尋找礦砂、藥草、水源與王朝殘片，也必須注意薄玻璃裂聲、反光造成的視線錯判、突然升起的熱風和遠處逐漸接近的火元素回音。若隊伍願意記錄路標、控制負重、保留撤退水量並觀察陰影方向，這片看似荒涼的沙丘會逐步顯露古代魔法如何把王朝邊境熔成玻海的真相，並找出下一處安全採集點。',
    exits: [
      { direction: 'west', targetRoomId: 'glass_dunes_prism_arch', description: '熱光回到稜鏡拱' },
      { direction: 'south', targetRoomId: 'glass_dunes_crystal_golem_yard', description: '熔渣坡落回晶魔像場' },
      { direction: 'east', targetRoomId: 'glass_dunes_lost_dynasty_altar', description: '熔臺光線指向失朝祭壇' },
    ],
    monsters: [
      { monsterId: 'fire_elemental', maxCount: 3, respawnSeconds: 140 },
      { monsterId: 'flame_spirit', maxCount: 2, respawnSeconds: 110 },
    ],
    mapSymbol: '[熔]',
    mapX: 5,
    mapY: 1,
    guardianHints: {
      creature: '日輪熔臺的反光若突然被陰影切斷，附近巡邏魔物通常已經接近。',
      treasure: '日輪熔臺的玻砂裂縫裡可能藏著尚未採完的礦砂、藥草或王朝碎片。',
      spirit: '日輪熔臺保留著琉璃沙丘被古代魔法熔成玻海前後的記憶。',
    },
  },

  glass_dunes_buried_palace_door: {
    id: 'glass_dunes_buried_palace_door',
    name: '埋宮門',
    zone: 'glass_dunes' as RoomDef['zone'],
    image: 'glass_dunes_buried_palace_door.png',
    imagePrompt: '埋宮門 in glass_dunes, blazing glass desert with fused sand, harsh sunlight, ancient dynasty ruins, refracted heat haze and resource gathering details, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text',
    description:
      '埋宮門位於琉璃沙丘的熱風路線上，周圍玻砂在烈日下反射出刺眼白光，地面同時留下採集者繩標、失落王朝碎片與巡邏魔物的腳印。這裡不是單純景點，而是採集、戰鬥與區域敘事交會的節點。玩家可以使用 gather 或 inspect 尋找礦砂、藥草、水源與王朝殘片，也必須注意薄玻璃裂聲、反光造成的視線錯判、突然升起的熱風和遠處逐漸接近的火元素回音。若隊伍願意記錄路標、控制負重、保留撤退水量並觀察陰影方向，這片看似荒涼的沙丘會逐步顯露古代魔法如何把王朝邊境熔成玻海的真相，並找出下一處安全採集點。',
    exits: [
      { direction: 'west', targetRoomId: 'glass_dunes_mirage_bazaar', description: '破旗線回到海市集影' },
      { direction: 'north', targetRoomId: 'glass_dunes_crystal_golem_yard', description: '碎石階回到晶魔像場' },
      { direction: 'east', targetRoomId: 'glass_dunes_sunfire_crater', description: '宮門裂縫通往日火坑' },
    ],
    monsters: [
      { monsterId: 'crystal_golem', maxCount: 2, respawnSeconds: 160 },
      { monsterId: 'fire_elemental', maxCount: 1, respawnSeconds: 140 },
    ],
    mapSymbol: '[宮]',
    mapX: 5,
    mapY: 0,
    guardianHints: {
      creature: '埋宮門的反光若突然被陰影切斷，附近巡邏魔物通常已經接近。',
      treasure: '埋宮門的玻砂裂縫裡可能藏著尚未採完的礦砂、藥草或王朝碎片。',
      spirit: '埋宮門保留著琉璃沙丘被古代魔法熔成玻海前後的記憶。',
    },
  },

  glass_dunes_lost_dynasty_altar: {
    id: 'glass_dunes_lost_dynasty_altar',
    name: '失朝祭壇',
    zone: 'glass_dunes' as RoomDef['zone'],
    image: 'glass_dunes_lost_dynasty_altar.png',
    imagePrompt: '失朝祭壇 in glass_dunes, blazing glass desert with fused sand, harsh sunlight, ancient dynasty ruins, refracted heat haze and resource gathering details, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text',
    description:
      '失朝祭壇位於琉璃沙丘的熱風路線上，周圍玻砂在烈日下反射出刺眼白光，地面同時留下採集者繩標、失落王朝碎片與巡邏魔物的腳印。這裡不是單純景點，而是採集、戰鬥與區域敘事交會的節點。玩家可以使用 gather 或 inspect 尋找礦砂、藥草、水源與王朝殘片，也必須注意薄玻璃裂聲、反光造成的視線錯判、突然升起的熱風和遠處逐漸接近的火元素回音。若隊伍願意記錄路標、控制負重、保留撤退水量並觀察陰影方向，這片看似荒涼的沙丘會逐步顯露古代魔法如何把王朝邊境熔成玻海的真相，並找出下一處安全採集點。',
    exits: [
      { direction: 'west', targetRoomId: 'glass_dunes_glassstorm_basin', description: '風暴裂線回到玻暴盆地' },
      { direction: 'north', targetRoomId: 'glass_dunes_solar_forge', description: '祭階升回日輪熔臺' },
      { direction: 'east', targetRoomId: 'glass_dunes_sunfire_crater', description: '祭壇光脈通往日火坑' },
    ],
    monsters: [
      { monsterId: 'fire_elemental', maxCount: 2, respawnSeconds: 140 },
      { monsterId: 'crystal_golem', maxCount: 1, respawnSeconds: 160 },
    ],
    mapSymbol: '[壇]',
    mapX: 5,
    mapY: -1,
    guardianHints: {
      creature: '失朝祭壇的反光若突然被陰影切斷，附近巡邏魔物通常已經接近。',
      treasure: '失朝祭壇的玻砂裂縫裡可能藏著尚未採完的礦砂、藥草或王朝碎片。',
      spirit: '失朝祭壇保留著琉璃沙丘被古代魔法熔成玻海前後的記憶。',
    },
  },

  glass_dunes_sunfire_crater: {
    id: 'glass_dunes_sunfire_crater',
    name: '日火坑',
    zone: 'glass_dunes' as RoomDef['zone'],
    image: 'glass_dunes_sunfire_crater.png',
    imagePrompt: '日火坑 in glass_dunes, blazing glass desert with fused sand, harsh sunlight, ancient dynasty ruins, refracted heat haze and resource gathering details, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text',
    description:
      '日火坑位於琉璃沙丘的熱風路線上，周圍玻砂在烈日下反射出刺眼白光，地面同時留下採集者繩標、失落王朝碎片與巡邏魔物的腳印。這裡不是單純景點，而是採集、戰鬥與區域敘事交會的節點。玩家可以使用 gather 或 inspect 尋找礦砂、藥草、水源與王朝殘片，也必須注意薄玻璃裂聲、反光造成的視線錯判、突然升起的熱風和遠處逐漸接近的火元素回音。若隊伍願意記錄路標、控制負重、保留撤退水量並觀察陰影方向，這片看似荒涼的沙丘會逐步顯露古代魔法如何把王朝邊境熔成玻海的真相，並找出下一處安全採集點。',
    exits: [
      { direction: 'west', targetRoomId: 'glass_dunes_buried_palace_door', description: '宮門裂縫回到埋宮門' },
      { direction: 'south', targetRoomId: 'glass_dunes_lost_dynasty_altar', description: '祭壇光脈回到失朝祭壇' },
    ],
    monsters: [
      { monsterId: 'fire_elemental', maxCount: 3, respawnSeconds: 140 },
      { monsterId: 'crystal_golem', maxCount: 2, respawnSeconds: 160 },
      { monsterId: 'rock_giant', maxCount: 1, respawnSeconds: 180 },
    ],
    mapSymbol: '[火]',
    mapX: 6,
    mapY: 0,
    guardianHints: {
      creature: '日火坑的反光若突然被陰影切斷，附近巡邏魔物通常已經接近。',
      treasure: '日火坑的玻砂裂縫裡可能藏著尚未採完的礦砂、藥草或王朝碎片。',
      spirit: '日火坑保留著琉璃沙丘被古代魔法熔成玻海前後的記憶。',
    },
  },
  underground_city_gate_lift: {
    id: 'underground_city_gate_lift',
    name: '城邦升降門',
    zone: 'underground_city' as RoomDef['zone'],
    image: 'underground_city_gate_lift.png',
    imagePrompt: '城邦升降門 in underground_city, vast subterranean tiered city with forge glow, dark river stonework, lantern fungus, markets and carved dwarven architecture, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text',
    description:
      '城邦升降門位於地下城邦的階梯街網中，洞頂垂下鐵鏈燈、菌光燈與蒸汽管線，遠處熔爐聲、暗河水聲和市場交談聲在石壁間層層回盪。這裡屬於安全城鎮區域，玩家可以整理背包、尋找任務線索、進行交易、修補裝備或觀察地底族群如何在巨大洞窟裡維持秩序。地面刻有清楚路標，牆上也保留著舊城修築年代與警戒符號；若仔細 inspect，能找到通往黑市、工坊、暗河與舊地基的細節提示。這座城邦的每個節點都讓旅人感覺自己正在一座仍然運作的地下城市中移動，而不是走過空洞背景，並能辨認下一處服務節點。',
    exits: [
      { direction: 'east', targetRoomId: 'underground_city_arrival_plaza', description: '升降橋通往抵達廣場' },
      { direction: 'down', targetRoomId: 'underground_city_lower_stairs', description: '螺旋階梯落向下層街' },
    ],
    mapSymbol: '[門]',
    mapX: 0,
    mapY: 0,
    guardianHints: {
      creature: '城邦升降門的巡邏腳步與燈號能提示附近是否有城市守備正在換班。',
      treasure: '城邦升降門的石縫、攤位或舊標牌旁可能藏有可交易情報與失物。',
      spirit: '城邦升降門記錄著地下城邦在熔爐、暗河與市集之間維持生活的方式。',
    },
  },

  underground_city_arrival_plaza: {
    id: 'underground_city_arrival_plaza',
    name: '抵達廣場',
    zone: 'underground_city' as RoomDef['zone'],
    image: 'underground_city_arrival_plaza.png',
    imagePrompt: '抵達廣場 in underground_city, vast subterranean tiered city with forge glow, dark river stonework, lantern fungus, markets and carved dwarven architecture, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text',
    description:
      '抵達廣場位於地下城邦的階梯街網中，洞頂垂下鐵鏈燈、菌光燈與蒸汽管線，遠處熔爐聲、暗河水聲和市場交談聲在石壁間層層回盪。這裡屬於安全城鎮區域，玩家可以整理背包、尋找任務線索、進行交易、修補裝備或觀察地底族群如何在巨大洞窟裡維持秩序。地面刻有清楚路標，牆上也保留著舊城修築年代與警戒符號；若仔細 inspect，能找到通往黑市、工坊、暗河與舊地基的細節提示。這座城邦的每個節點都讓旅人感覺自己正在一座仍然運作的地下城市中移動，而不是走過空洞背景，並能辨認下一處服務節點。',
    exits: [
      { direction: 'west', targetRoomId: 'underground_city_gate_lift', description: '升降橋回到城邦升降門' },
      { direction: 'east', targetRoomId: 'underground_city_portal_hall', description: '藍光拱道通往傳送廳' },
      { direction: 'south', targetRoomId: 'underground_city_market_terrace', description: '石階下到市場露臺' },
    ],
    mapSymbol: '[場]',
    mapX: 1,
    mapY: 0,
    guardianHints: {
      creature: '抵達廣場的巡邏腳步與燈號能提示附近是否有城市守備正在換班。',
      treasure: '抵達廣場的石縫、攤位或舊標牌旁可能藏有可交易情報與失物。',
      spirit: '抵達廣場記錄著地下城邦在熔爐、暗河與市集之間維持生活的方式。',
    },
  },

  underground_city_portal_hall: {
    id: 'underground_city_portal_hall',
    name: '傳送廳',
    zone: 'underground_city' as RoomDef['zone'],
    image: 'underground_city_portal_hall.png',
    imagePrompt: '傳送廳 in underground_city, vast subterranean tiered city with forge glow, dark river stonework, lantern fungus, markets and carved dwarven architecture, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text',
    description:
      '傳送廳位於地下城邦的階梯街網中，洞頂垂下鐵鏈燈、菌光燈與蒸汽管線，遠處熔爐聲、暗河水聲和市場交談聲在石壁間層層回盪。這裡屬於安全城鎮區域，玩家可以整理背包、尋找任務線索、進行交易、修補裝備或觀察地底族群如何在巨大洞窟裡維持秩序。地面刻有清楚路標，牆上也保留著舊城修築年代與警戒符號；若仔細 inspect，能找到通往黑市、工坊、暗河與舊地基的細節提示。這座城邦的每個節點都讓旅人感覺自己正在一座仍然運作的地下城市中移動，而不是走過空洞背景，並能辨認下一處服務節點。',
    exits: [
      { direction: 'west', targetRoomId: 'underground_city_arrival_plaza', description: '拱道回到抵達廣場' },
      { direction: 'east', targetRoomId: 'underground_city_council_chamber', description: '符文路通往議事廳' },
    ],
    mapSymbol: '[傳]',
    mapX: 2,
    mapY: 0,
    guardianHints: {
      creature: '傳送廳的巡邏腳步與燈號能提示附近是否有城市守備正在換班。',
      treasure: '傳送廳的石縫、攤位或舊標牌旁可能藏有可交易情報與失物。',
      spirit: '傳送廳記錄著地下城邦在熔爐、暗河與市集之間維持生活的方式。',
    },
  },

  underground_city_council_chamber: {
    id: 'underground_city_council_chamber',
    name: '議事廳',
    zone: 'underground_city' as RoomDef['zone'],
    image: 'underground_city_council_chamber.png',
    imagePrompt: '議事廳 in underground_city, vast subterranean tiered city with forge glow, dark river stonework, lantern fungus, markets and carved dwarven architecture, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text',
    description:
      '議事廳位於地下城邦的階梯街網中，洞頂垂下鐵鏈燈、菌光燈與蒸汽管線，遠處熔爐聲、暗河水聲和市場交談聲在石壁間層層回盪。這裡屬於安全城鎮區域，玩家可以整理背包、尋找任務線索、進行交易、修補裝備或觀察地底族群如何在巨大洞窟裡維持秩序。地面刻有清楚路標，牆上也保留著舊城修築年代與警戒符號；若仔細 inspect，能找到通往黑市、工坊、暗河與舊地基的細節提示。這座城邦的每個節點都讓旅人感覺自己正在一座仍然運作的地下城市中移動，而不是走過空洞背景，並能辨認下一處服務節點。',
    exits: [
      { direction: 'west', targetRoomId: 'underground_city_portal_hall', description: '符文路回到傳送廳' },
      { direction: 'south', targetRoomId: 'underground_city_scribe_archive', description: '書吏階梯通往卷宗庫' },
    ],
    mapSymbol: '[議]',
    mapX: 3,
    mapY: 0,
    guardianHints: {
      creature: '議事廳的巡邏腳步與燈號能提示附近是否有城市守備正在換班。',
      treasure: '議事廳的石縫、攤位或舊標牌旁可能藏有可交易情報與失物。',
      spirit: '議事廳記錄著地下城邦在熔爐、暗河與市集之間維持生活的方式。',
    },
  },

  underground_city_market_terrace: {
    id: 'underground_city_market_terrace',
    name: '市場露臺',
    zone: 'underground_city' as RoomDef['zone'],
    image: 'underground_city_market_terrace.png',
    imagePrompt: '市場露臺 in underground_city, vast subterranean tiered city with forge glow, dark river stonework, lantern fungus, markets and carved dwarven architecture, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text',
    description:
      '市場露臺位於地下城邦的階梯街網中，洞頂垂下鐵鏈燈、菌光燈與蒸汽管線，遠處熔爐聲、暗河水聲和市場交談聲在石壁間層層回盪。這裡屬於安全城鎮區域，玩家可以整理背包、尋找任務線索、進行交易、修補裝備或觀察地底族群如何在巨大洞窟裡維持秩序。地面刻有清楚路標，牆上也保留著舊城修築年代與警戒符號；若仔細 inspect，能找到通往黑市、工坊、暗河與舊地基的細節提示。這座城邦的每個節點都讓旅人感覺自己正在一座仍然運作的地下城市中移動，而不是走過空洞背景，並能辨認下一處服務節點。',
    exits: [
      { direction: 'north', targetRoomId: 'underground_city_arrival_plaza', description: '石階回到抵達廣場' },
      { direction: 'east', targetRoomId: 'underground_city_black_market', description: '布棚暗巷通往黑市' },
      { direction: 'south', targetRoomId: 'underground_city_craft_lane', description: '工具聲引向工匠巷' },
    ],
    mapSymbol: '[市]',
    mapX: 1,
    mapY: -1,
    guardianHints: {
      creature: '市場露臺的巡邏腳步與燈號能提示附近是否有城市守備正在換班。',
      treasure: '市場露臺的石縫、攤位或舊標牌旁可能藏有可交易情報與失物。',
      spirit: '市場露臺記錄著地下城邦在熔爐、暗河與市集之間維持生活的方式。',
    },
  },

  underground_city_black_market: {
    id: 'underground_city_black_market',
    name: '黑市暗巷',
    zone: 'underground_city' as RoomDef['zone'],
    image: 'underground_city_black_market.png',
    imagePrompt: '黑市暗巷 in underground_city, vast subterranean tiered city with forge glow, dark river stonework, lantern fungus, markets and carved dwarven architecture, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text',
    description:
      '黑市暗巷位於地下城邦的階梯街網中，洞頂垂下鐵鏈燈、菌光燈與蒸汽管線，遠處熔爐聲、暗河水聲和市場交談聲在石壁間層層回盪。這裡屬於安全城鎮區域，玩家可以整理背包、尋找任務線索、進行交易、修補裝備或觀察地底族群如何在巨大洞窟裡維持秩序。地面刻有清楚路標，牆上也保留著舊城修築年代與警戒符號；若仔細 inspect，能找到通往黑市、工坊、暗河與舊地基的細節提示。這座城邦的每個節點都讓旅人感覺自己正在一座仍然運作的地下城市中移動，而不是走過空洞背景，並能辨認下一處服務節點。',
    exits: [
      { direction: 'west', targetRoomId: 'underground_city_market_terrace', description: '布棚巷回到市場露臺' },
      { direction: 'east', targetRoomId: 'underground_city_smuggler_dock', description: '暗號門通往走私碼頭' },
      { direction: 'south', targetRoomId: 'underground_city_guild_office', description: '窄梯通往公會辦事處' },
    ],
    mapSymbol: '[黑]',
    mapX: 2,
    mapY: -1,
    guardianHints: {
      creature: '黑市暗巷的巡邏腳步與燈號能提示附近是否有城市守備正在換班。',
      treasure: '黑市暗巷的石縫、攤位或舊標牌旁可能藏有可交易情報與失物。',
      spirit: '黑市暗巷記錄著地下城邦在熔爐、暗河與市集之間維持生活的方式。',
    },
  },

  underground_city_scribe_archive: {
    id: 'underground_city_scribe_archive',
    name: '書吏卷宗庫',
    zone: 'underground_city' as RoomDef['zone'],
    image: 'underground_city_scribe_archive.png',
    imagePrompt: '書吏卷宗庫 in underground_city, vast subterranean tiered city with forge glow, dark river stonework, lantern fungus, markets and carved dwarven architecture, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text',
    description:
      '書吏卷宗庫位於地下城邦的階梯街網中，洞頂垂下鐵鏈燈、菌光燈與蒸汽管線，遠處熔爐聲、暗河水聲和市場交談聲在石壁間層層回盪。這裡屬於安全城鎮區域，玩家可以整理背包、尋找任務線索、進行交易、修補裝備或觀察地底族群如何在巨大洞窟裡維持秩序。地面刻有清楚路標，牆上也保留著舊城修築年代與警戒符號；若仔細 inspect，能找到通往黑市、工坊、暗河與舊地基的細節提示。這座城邦的每個節點都讓旅人感覺自己正在一座仍然運作的地下城市中移動，而不是走過空洞背景，並能辨認下一處服務節點。',
    exits: [
      { direction: 'north', targetRoomId: 'underground_city_council_chamber', description: '書吏階梯回到議事廳' },
      { direction: 'west', targetRoomId: 'underground_city_guild_office', description: '檔案廊通往公會辦事處' },
      { direction: 'down', targetRoomId: 'underground_city_old_foundation', description: '封塵梯降往舊地基' },
    ],
    mapSymbol: '[書]',
    mapX: 3,
    mapY: -1,
    guardianHints: {
      creature: '書吏卷宗庫的巡邏腳步與燈號能提示附近是否有城市守備正在換班。',
      treasure: '書吏卷宗庫的石縫、攤位或舊標牌旁可能藏有可交易情報與失物。',
      spirit: '書吏卷宗庫記錄著地下城邦在熔爐、暗河與市集之間維持生活的方式。',
    },
  },

  underground_city_craft_lane: {
    id: 'underground_city_craft_lane',
    name: '工匠巷',
    zone: 'underground_city' as RoomDef['zone'],
    image: 'underground_city_craft_lane.png',
    imagePrompt: '工匠巷 in underground_city, vast subterranean tiered city with forge glow, dark river stonework, lantern fungus, markets and carved dwarven architecture, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text',
    description:
      '工匠巷位於地下城邦的階梯街網中，洞頂垂下鐵鏈燈、菌光燈與蒸汽管線，遠處熔爐聲、暗河水聲和市場交談聲在石壁間層層回盪。這裡屬於安全城鎮區域，玩家可以整理背包、尋找任務線索、進行交易、修補裝備或觀察地底族群如何在巨大洞窟裡維持秩序。地面刻有清楚路標，牆上也保留著舊城修築年代與警戒符號；若仔細 inspect，能找到通往黑市、工坊、暗河與舊地基的細節提示。這座城邦的每個節點都讓旅人感覺自己正在一座仍然運作的地下城市中移動，而不是走過空洞背景，並能辨認下一處服務節點。',
    exits: [
      { direction: 'north', targetRoomId: 'underground_city_market_terrace', description: '工具聲回到市場露臺' },
      { direction: 'east', targetRoomId: 'underground_city_forge_square', description: '熱浪通往熔爐廣場' },
      { direction: 'south', targetRoomId: 'underground_city_mender_shop', description: '燈牌指向修補鋪' },
    ],
    mapSymbol: '[匠]',
    mapX: 1,
    mapY: -2,
    guardianHints: {
      creature: '工匠巷的巡邏腳步與燈號能提示附近是否有城市守備正在換班。',
      treasure: '工匠巷的石縫、攤位或舊標牌旁可能藏有可交易情報與失物。',
      spirit: '工匠巷記錄著地下城邦在熔爐、暗河與市集之間維持生活的方式。',
    },
  },

  underground_city_guild_office: {
    id: 'underground_city_guild_office',
    name: '公會辦事處',
    zone: 'underground_city' as RoomDef['zone'],
    image: 'underground_city_guild_office.png',
    imagePrompt: '公會辦事處 in underground_city, vast subterranean tiered city with forge glow, dark river stonework, lantern fungus, markets and carved dwarven architecture, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text',
    description:
      '公會辦事處位於地下城邦的階梯街網中，洞頂垂下鐵鏈燈、菌光燈與蒸汽管線，遠處熔爐聲、暗河水聲和市場交談聲在石壁間層層回盪。這裡屬於安全城鎮區域，玩家可以整理背包、尋找任務線索、進行交易、修補裝備或觀察地底族群如何在巨大洞窟裡維持秩序。地面刻有清楚路標，牆上也保留著舊城修築年代與警戒符號；若仔細 inspect，能找到通往黑市、工坊、暗河與舊地基的細節提示。這座城邦的每個節點都讓旅人感覺自己正在一座仍然運作的地下城市中移動，而不是走過空洞背景，並能辨認下一處服務節點。',
    exits: [
      { direction: 'north', targetRoomId: 'underground_city_black_market', description: '窄梯回到黑市暗巷' },
      { direction: 'east', targetRoomId: 'underground_city_scribe_archive', description: '檔案廊回到卷宗庫' },
      { direction: 'south', targetRoomId: 'underground_city_inn_cavern', description: '石燈路通往旅店洞廳' },
    ],
    mapSymbol: '[會]',
    mapX: 2,
    mapY: -2,
    guardianHints: {
      creature: '公會辦事處的巡邏腳步與燈號能提示附近是否有城市守備正在換班。',
      treasure: '公會辦事處的石縫、攤位或舊標牌旁可能藏有可交易情報與失物。',
      spirit: '公會辦事處記錄著地下城邦在熔爐、暗河與市集之間維持生活的方式。',
    },
  },

  underground_city_forge_square: {
    id: 'underground_city_forge_square',
    name: '熔爐廣場',
    zone: 'underground_city' as RoomDef['zone'],
    image: 'underground_city_forge_square.png',
    imagePrompt: '熔爐廣場 in underground_city, vast subterranean tiered city with forge glow, dark river stonework, lantern fungus, markets and carved dwarven architecture, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text',
    description:
      '熔爐廣場位於地下城邦的階梯街網中，洞頂垂下鐵鏈燈、菌光燈與蒸汽管線，遠處熔爐聲、暗河水聲和市場交談聲在石壁間層層回盪。這裡屬於安全城鎮區域，玩家可以整理背包、尋找任務線索、進行交易、修補裝備或觀察地底族群如何在巨大洞窟裡維持秩序。地面刻有清楚路標，牆上也保留著舊城修築年代與警戒符號；若仔細 inspect，能找到通往黑市、工坊、暗河與舊地基的細節提示。這座城邦的每個節點都讓旅人感覺自己正在一座仍然運作的地下城市中移動，而不是走過空洞背景，並能辨認下一處服務節點。',
    exits: [
      { direction: 'west', targetRoomId: 'underground_city_craft_lane', description: '熱浪回到工匠巷' },
      { direction: 'east', targetRoomId: 'underground_city_crucible_workshop', description: '鐵軌通往坩堝工坊' },
      { direction: 'south', targetRoomId: 'underground_city_steam_baths', description: '蒸汽管線通往浴場' },
    ],
    mapSymbol: '[爐]',
    mapX: 2,
    mapY: -3,
    guardianHints: {
      creature: '熔爐廣場的巡邏腳步與燈號能提示附近是否有城市守備正在換班。',
      treasure: '熔爐廣場的石縫、攤位或舊標牌旁可能藏有可交易情報與失物。',
      spirit: '熔爐廣場記錄著地下城邦在熔爐、暗河與市集之間維持生活的方式。',
    },
  },

  underground_city_mender_shop: {
    id: 'underground_city_mender_shop',
    name: '修補鋪',
    zone: 'underground_city' as RoomDef['zone'],
    image: 'underground_city_mender_shop.png',
    imagePrompt: '修補鋪 in underground_city, vast subterranean tiered city with forge glow, dark river stonework, lantern fungus, markets and carved dwarven architecture, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text',
    description:
      '修補鋪位於地下城邦的階梯街網中，洞頂垂下鐵鏈燈、菌光燈與蒸汽管線，遠處熔爐聲、暗河水聲和市場交談聲在石壁間層層回盪。這裡屬於安全城鎮區域，玩家可以整理背包、尋找任務線索、進行交易、修補裝備或觀察地底族群如何在巨大洞窟裡維持秩序。地面刻有清楚路標，牆上也保留著舊城修築年代與警戒符號；若仔細 inspect，能找到通往黑市、工坊、暗河與舊地基的細節提示。這座城邦的每個節點都讓旅人感覺自己正在一座仍然運作的地下城市中移動，而不是走過空洞背景，並能辨認下一處服務節點。',
    exits: [
      { direction: 'north', targetRoomId: 'underground_city_craft_lane', description: '燈牌回到工匠巷' },
      { direction: 'east', targetRoomId: 'underground_city_inn_cavern', description: '補給巷通往旅店洞廳' },
    ],
    mapSymbol: '[修]',
    mapX: 0,
    mapY: -2,
    guardianHints: {
      creature: '修補鋪的巡邏腳步與燈號能提示附近是否有城市守備正在換班。',
      treasure: '修補鋪的石縫、攤位或舊標牌旁可能藏有可交易情報與失物。',
      spirit: '修補鋪記錄著地下城邦在熔爐、暗河與市集之間維持生活的方式。',
    },
  },

  underground_city_inn_cavern: {
    id: 'underground_city_inn_cavern',
    name: '旅店洞廳',
    zone: 'underground_city' as RoomDef['zone'],
    image: 'underground_city_inn_cavern.png',
    imagePrompt: '旅店洞廳 in underground_city, vast subterranean tiered city with forge glow, dark river stonework, lantern fungus, markets and carved dwarven architecture, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text',
    description:
      '旅店洞廳位於地下城邦的階梯街網中，洞頂垂下鐵鏈燈、菌光燈與蒸汽管線，遠處熔爐聲、暗河水聲和市場交談聲在石壁間層層回盪。這裡屬於安全城鎮區域，玩家可以整理背包、尋找任務線索、進行交易、修補裝備或觀察地底族群如何在巨大洞窟裡維持秩序。地面刻有清楚路標，牆上也保留著舊城修築年代與警戒符號；若仔細 inspect，能找到通往黑市、工坊、暗河與舊地基的細節提示。這座城邦的每個節點都讓旅人感覺自己正在一座仍然運作的地下城市中移動，而不是走過空洞背景，並能辨認下一處服務節點。',
    exits: [
      { direction: 'north', targetRoomId: 'underground_city_guild_office', description: '石燈路回到公會辦事處' },
      { direction: 'west', targetRoomId: 'underground_city_mender_shop', description: '補給巷回到修補鋪' },
      { direction: 'east', targetRoomId: 'underground_city_steam_baths', description: '暖霧通往蒸汽浴場' },
      { direction: 'south', targetRoomId: 'underground_city_lamp_garden', description: '幽光坡通往菌燈庭園' },
    ],
    mapSymbol: '[旅]',
    mapX: 1,
    mapY: -3,
    guardianHints: {
      creature: '旅店洞廳的巡邏腳步與燈號能提示附近是否有城市守備正在換班。',
      treasure: '旅店洞廳的石縫、攤位或舊標牌旁可能藏有可交易情報與失物。',
      spirit: '旅店洞廳記錄著地下城邦在熔爐、暗河與市集之間維持生活的方式。',
    },
  },

  underground_city_crucible_workshop: {
    id: 'underground_city_crucible_workshop',
    name: '坩堝工坊',
    zone: 'underground_city' as RoomDef['zone'],
    image: 'underground_city_crucible_workshop.png',
    imagePrompt: '坩堝工坊 in underground_city, vast subterranean tiered city with forge glow, dark river stonework, lantern fungus, markets and carved dwarven architecture, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text',
    description:
      '坩堝工坊位於地下城邦的階梯街網中，洞頂垂下鐵鏈燈、菌光燈與蒸汽管線，遠處熔爐聲、暗河水聲和市場交談聲在石壁間層層回盪。這裡屬於安全城鎮區域，玩家可以整理背包、尋找任務線索、進行交易、修補裝備或觀察地底族群如何在巨大洞窟裡維持秩序。地面刻有清楚路標，牆上也保留著舊城修築年代與警戒符號；若仔細 inspect，能找到通往黑市、工坊、暗河與舊地基的細節提示。這座城邦的每個節點都讓旅人感覺自己正在一座仍然運作的地下城市中移動，而不是走過空洞背景，並能辨認下一處服務節點。',
    exits: [
      { direction: 'west', targetRoomId: 'underground_city_forge_square', description: '鐵軌回到熔爐廣場' },
      { direction: 'south', targetRoomId: 'underground_city_guard_barracks', description: '裝甲坡通往守備營' },
      { direction: 'east', targetRoomId: 'underground_city_gem_exchange', description: '精砂路通往寶石交易所' },
    ],
    mapSymbol: '[坩]',
    mapX: 3,
    mapY: -3,
    guardianHints: {
      creature: '坩堝工坊的巡邏腳步與燈號能提示附近是否有城市守備正在換班。',
      treasure: '坩堝工坊的石縫、攤位或舊標牌旁可能藏有可交易情報與失物。',
      spirit: '坩堝工坊記錄著地下城邦在熔爐、暗河與市集之間維持生活的方式。',
    },
  },

  underground_city_steam_baths: {
    id: 'underground_city_steam_baths',
    name: '蒸汽浴場',
    zone: 'underground_city' as RoomDef['zone'],
    image: 'underground_city_steam_baths.png',
    imagePrompt: '蒸汽浴場 in underground_city, vast subterranean tiered city with forge glow, dark river stonework, lantern fungus, markets and carved dwarven architecture, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text',
    description:
      '蒸汽浴場位於地下城邦的階梯街網中，洞頂垂下鐵鏈燈、菌光燈與蒸汽管線，遠處熔爐聲、暗河水聲和市場交談聲在石壁間層層回盪。這裡屬於安全城鎮區域，玩家可以整理背包、尋找任務線索、進行交易、修補裝備或觀察地底族群如何在巨大洞窟裡維持秩序。地面刻有清楚路標，牆上也保留著舊城修築年代與警戒符號；若仔細 inspect，能找到通往黑市、工坊、暗河與舊地基的細節提示。這座城邦的每個節點都讓旅人感覺自己正在一座仍然運作的地下城市中移動，而不是走過空洞背景，並能辨認下一處服務節點。',
    exits: [
      { direction: 'north', targetRoomId: 'underground_city_forge_square', description: '蒸汽管線回到熔爐廣場' },
      { direction: 'west', targetRoomId: 'underground_city_inn_cavern', description: '暖霧回到旅店洞廳' },
      { direction: 'south', targetRoomId: 'underground_city_darkriver_quay', description: '排水階梯通往暗河碼頭' },
    ],
    mapSymbol: '[浴]',
    mapX: 2,
    mapY: -4,
    guardianHints: {
      creature: '蒸汽浴場的巡邏腳步與燈號能提示附近是否有城市守備正在換班。',
      treasure: '蒸汽浴場的石縫、攤位或舊標牌旁可能藏有可交易情報與失物。',
      spirit: '蒸汽浴場記錄著地下城邦在熔爐、暗河與市集之間維持生活的方式。',
    },
  },

  underground_city_gem_exchange: {
    id: 'underground_city_gem_exchange',
    name: '寶石交易所',
    zone: 'underground_city' as RoomDef['zone'],
    image: 'underground_city_gem_exchange.png',
    imagePrompt: '寶石交易所 in underground_city, vast subterranean tiered city with forge glow, dark river stonework, lantern fungus, markets and carved dwarven architecture, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text',
    description:
      '寶石交易所位於地下城邦的階梯街網中，洞頂垂下鐵鏈燈、菌光燈與蒸汽管線，遠處熔爐聲、暗河水聲和市場交談聲在石壁間層層回盪。這裡屬於安全城鎮區域，玩家可以整理背包、尋找任務線索、進行交易、修補裝備或觀察地底族群如何在巨大洞窟裡維持秩序。地面刻有清楚路標，牆上也保留著舊城修築年代與警戒符號；若仔細 inspect，能找到通往黑市、工坊、暗河與舊地基的細節提示。這座城邦的每個節點都讓旅人感覺自己正在一座仍然運作的地下城市中移動，而不是走過空洞背景，並能辨認下一處服務節點。',
    exits: [
      { direction: 'west', targetRoomId: 'underground_city_crucible_workshop', description: '精砂路回到坩堝工坊' },
      { direction: 'south', targetRoomId: 'underground_city_lantern_bridge', description: '鑲燈橋通往燈橋' },
    ],
    mapSymbol: '[寶]',
    mapX: 4,
    mapY: -3,
    guardianHints: {
      creature: '寶石交易所的巡邏腳步與燈號能提示附近是否有城市守備正在換班。',
      treasure: '寶石交易所的石縫、攤位或舊標牌旁可能藏有可交易情報與失物。',
      spirit: '寶石交易所記錄著地下城邦在熔爐、暗河與市集之間維持生活的方式。',
    },
  },

  underground_city_guard_barracks: {
    id: 'underground_city_guard_barracks',
    name: '守備營',
    zone: 'underground_city' as RoomDef['zone'],
    image: 'underground_city_guard_barracks.png',
    imagePrompt: '守備營 in underground_city, vast subterranean tiered city with forge glow, dark river stonework, lantern fungus, markets and carved dwarven architecture, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text',
    description:
      '守備營位於地下城邦的階梯街網中，洞頂垂下鐵鏈燈、菌光燈與蒸汽管線，遠處熔爐聲、暗河水聲和市場交談聲在石壁間層層回盪。這裡屬於安全城鎮區域，玩家可以整理背包、尋找任務線索、進行交易、修補裝備或觀察地底族群如何在巨大洞窟裡維持秩序。地面刻有清楚路標，牆上也保留著舊城修築年代與警戒符號；若仔細 inspect，能找到通往黑市、工坊、暗河與舊地基的細節提示。這座城邦的每個節點都讓旅人感覺自己正在一座仍然運作的地下城市中移動，而不是走過空洞背景，並能辨認下一處服務節點。',
    exits: [
      { direction: 'north', targetRoomId: 'underground_city_crucible_workshop', description: '裝甲坡回到坩堝工坊' },
      { direction: 'west', targetRoomId: 'underground_city_darkriver_quay', description: '巡邏道通往暗河碼頭' },
      { direction: 'east', targetRoomId: 'underground_city_lantern_bridge', description: '石盾路通往燈橋' },
    ],
    mapSymbol: '[營]',
    mapX: 3,
    mapY: -4,
    guardianHints: {
      creature: '守備營的巡邏腳步與燈號能提示附近是否有城市守備正在換班。',
      treasure: '守備營的石縫、攤位或舊標牌旁可能藏有可交易情報與失物。',
      spirit: '守備營記錄著地下城邦在熔爐、暗河與市集之間維持生活的方式。',
    },
  },

  underground_city_lamp_garden: {
    id: 'underground_city_lamp_garden',
    name: '菌燈庭園',
    zone: 'underground_city' as RoomDef['zone'],
    image: 'underground_city_lamp_garden.png',
    imagePrompt: '菌燈庭園 in underground_city, vast subterranean tiered city with forge glow, dark river stonework, lantern fungus, markets and carved dwarven architecture, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text',
    description:
      '菌燈庭園位於地下城邦的階梯街網中，洞頂垂下鐵鏈燈、菌光燈與蒸汽管線，遠處熔爐聲、暗河水聲和市場交談聲在石壁間層層回盪。這裡屬於安全城鎮區域，玩家可以整理背包、尋找任務線索、進行交易、修補裝備或觀察地底族群如何在巨大洞窟裡維持秩序。地面刻有清楚路標，牆上也保留著舊城修築年代與警戒符號；若仔細 inspect，能找到通往黑市、工坊、暗河與舊地基的細節提示。這座城邦的每個節點都讓旅人感覺自己正在一座仍然運作的地下城市中移動，而不是走過空洞背景，並能辨認下一處服務節點。',
    exits: [
      { direction: 'north', targetRoomId: 'underground_city_inn_cavern', description: '幽光坡回到旅店洞廳' },
      { direction: 'east', targetRoomId: 'underground_city_darkriver_quay', description: '濕石路通往暗河碼頭' },
      { direction: 'south', targetRoomId: 'underground_city_lower_stairs', description: '根鬚階梯通往下層街' },
    ],
    mapSymbol: '[菌]',
    mapX: 1,
    mapY: -4,
    guardianHints: {
      creature: '菌燈庭園的巡邏腳步與燈號能提示附近是否有城市守備正在換班。',
      treasure: '菌燈庭園的石縫、攤位或舊標牌旁可能藏有可交易情報與失物。',
      spirit: '菌燈庭園記錄著地下城邦在熔爐、暗河與市集之間維持生活的方式。',
    },
  },

  underground_city_darkriver_quay: {
    id: 'underground_city_darkriver_quay',
    name: '暗河碼頭',
    zone: 'underground_city' as RoomDef['zone'],
    image: 'underground_city_darkriver_quay.png',
    imagePrompt: '暗河碼頭 in underground_city, vast subterranean tiered city with forge glow, dark river stonework, lantern fungus, markets and carved dwarven architecture, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text',
    description:
      '暗河碼頭位於地下城邦的階梯街網中，洞頂垂下鐵鏈燈、菌光燈與蒸汽管線，遠處熔爐聲、暗河水聲和市場交談聲在石壁間層層回盪。這裡屬於安全城鎮區域，玩家可以整理背包、尋找任務線索、進行交易、修補裝備或觀察地底族群如何在巨大洞窟裡維持秩序。地面刻有清楚路標，牆上也保留著舊城修築年代與警戒符號；若仔細 inspect，能找到通往黑市、工坊、暗河與舊地基的細節提示。這座城邦的每個節點都讓旅人感覺自己正在一座仍然運作的地下城市中移動，而不是走過空洞背景，並能辨認下一處服務節點。',
    exits: [
      { direction: 'north', targetRoomId: 'underground_city_steam_baths', description: '排水階梯回到蒸汽浴場' },
      { direction: 'west', targetRoomId: 'underground_city_lamp_garden', description: '濕石路回到菌燈庭園' },
      { direction: 'east', targetRoomId: 'underground_city_guard_barracks', description: '巡邏道回到守備營' },
      { direction: 'south', targetRoomId: 'underground_city_smuggler_dock', description: '暗流通往走私碼頭' },
    ],
    mapSymbol: '[河]',
    mapX: 2,
    mapY: -5,
    guardianHints: {
      creature: '暗河碼頭的巡邏腳步與燈號能提示附近是否有城市守備正在換班。',
      treasure: '暗河碼頭的石縫、攤位或舊標牌旁可能藏有可交易情報與失物。',
      spirit: '暗河碼頭記錄著地下城邦在熔爐、暗河與市集之間維持生活的方式。',
    },
  },

  underground_city_smuggler_dock: {
    id: 'underground_city_smuggler_dock',
    name: '走私碼頭',
    zone: 'underground_city' as RoomDef['zone'],
    image: 'underground_city_smuggler_dock.png',
    imagePrompt: '走私碼頭 in underground_city, vast subterranean tiered city with forge glow, dark river stonework, lantern fungus, markets and carved dwarven architecture, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text',
    description:
      '走私碼頭位於地下城邦的階梯街網中，洞頂垂下鐵鏈燈、菌光燈與蒸汽管線，遠處熔爐聲、暗河水聲和市場交談聲在石壁間層層回盪。這裡屬於安全城鎮區域，玩家可以整理背包、尋找任務線索、進行交易、修補裝備或觀察地底族群如何在巨大洞窟裡維持秩序。地面刻有清楚路標，牆上也保留著舊城修築年代與警戒符號；若仔細 inspect，能找到通往黑市、工坊、暗河與舊地基的細節提示。這座城邦的每個節點都讓旅人感覺自己正在一座仍然運作的地下城市中移動，而不是走過空洞背景，並能辨認下一處服務節點。',
    exits: [
      { direction: 'north', targetRoomId: 'underground_city_black_market', description: '暗號門回到黑市暗巷' },
      { direction: 'west', targetRoomId: 'underground_city_darkriver_quay', description: '暗流回到暗河碼頭' },
      { direction: 'south', targetRoomId: 'underground_city_old_foundation', description: '破渠通往舊地基' },
    ],
    mapSymbol: '[私]',
    mapX: 3,
    mapY: -5,
    guardianHints: {
      creature: '走私碼頭的巡邏腳步與燈號能提示附近是否有城市守備正在換班。',
      treasure: '走私碼頭的石縫、攤位或舊標牌旁可能藏有可交易情報與失物。',
      spirit: '走私碼頭記錄著地下城邦在熔爐、暗河與市集之間維持生活的方式。',
    },
  },

  underground_city_lower_stairs: {
    id: 'underground_city_lower_stairs',
    name: '下層螺旋街',
    zone: 'underground_city' as RoomDef['zone'],
    image: 'underground_city_lower_stairs.png',
    imagePrompt: '下層螺旋街 in underground_city, vast subterranean tiered city with forge glow, dark river stonework, lantern fungus, markets and carved dwarven architecture, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text',
    description:
      '下層螺旋街位於地下城邦的階梯街網中，洞頂垂下鐵鏈燈、菌光燈與蒸汽管線，遠處熔爐聲、暗河水聲和市場交談聲在石壁間層層回盪。這裡屬於安全城鎮區域，玩家可以整理背包、尋找任務線索、進行交易、修補裝備或觀察地底族群如何在巨大洞窟裡維持秩序。地面刻有清楚路標，牆上也保留著舊城修築年代與警戒符號；若仔細 inspect，能找到通往黑市、工坊、暗河與舊地基的細節提示。這座城邦的每個節點都讓旅人感覺自己正在一座仍然運作的地下城市中移動，而不是走過空洞背景，並能辨認下一處服務節點。',
    exits: [
      { direction: 'up', targetRoomId: 'underground_city_gate_lift', description: '螺旋階梯升回城邦升降門' },
      { direction: 'north', targetRoomId: 'underground_city_lamp_garden', description: '根鬚階梯回到菌燈庭園' },
      { direction: 'east', targetRoomId: 'underground_city_old_foundation', description: '古牆缺口通往舊地基' },
    ],
    mapSymbol: '[階]',
    mapX: 0,
    mapY: -4,
    guardianHints: {
      creature: '下層螺旋街的巡邏腳步與燈號能提示附近是否有城市守備正在換班。',
      treasure: '下層螺旋街的石縫、攤位或舊標牌旁可能藏有可交易情報與失物。',
      spirit: '下層螺旋街記錄著地下城邦在熔爐、暗河與市集之間維持生活的方式。',
    },
  },

  underground_city_old_foundation: {
    id: 'underground_city_old_foundation',
    name: '舊城地基',
    zone: 'underground_city' as RoomDef['zone'],
    image: 'underground_city_old_foundation.png',
    imagePrompt: '舊城地基 in underground_city, vast subterranean tiered city with forge glow, dark river stonework, lantern fungus, markets and carved dwarven architecture, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text',
    description:
      '舊城地基位於地下城邦的階梯街網中，洞頂垂下鐵鏈燈、菌光燈與蒸汽管線，遠處熔爐聲、暗河水聲和市場交談聲在石壁間層層回盪。這裡屬於安全城鎮區域，玩家可以整理背包、尋找任務線索、進行交易、修補裝備或觀察地底族群如何在巨大洞窟裡維持秩序。地面刻有清楚路標，牆上也保留著舊城修築年代與警戒符號；若仔細 inspect，能找到通往黑市、工坊、暗河與舊地基的細節提示。這座城邦的每個節點都讓旅人感覺自己正在一座仍然運作的地下城市中移動，而不是走過空洞背景，並能辨認下一處服務節點。',
    exits: [
      { direction: 'up', targetRoomId: 'underground_city_scribe_archive', description: '封塵梯升回卷宗庫' },
      { direction: 'north', targetRoomId: 'underground_city_smuggler_dock', description: '破渠回到走私碼頭' },
      { direction: 'west', targetRoomId: 'underground_city_lower_stairs', description: '古牆缺口回到下層螺旋街' },
    ],
    mapSymbol: '[舊]',
    mapX: 2,
    mapY: -6,
    guardianHints: {
      creature: '舊城地基的巡邏腳步與燈號能提示附近是否有城市守備正在換班。',
      treasure: '舊城地基的石縫、攤位或舊標牌旁可能藏有可交易情報與失物。',
      spirit: '舊城地基記錄著地下城邦在熔爐、暗河與市集之間維持生活的方式。',
    },
  },

  underground_city_lantern_bridge: {
    id: 'underground_city_lantern_bridge',
    name: '鑲燈橋',
    zone: 'underground_city' as RoomDef['zone'],
    image: 'underground_city_lantern_bridge.png',
    imagePrompt: '鑲燈橋 in underground_city, broad subterranean bridge set with lantern gems over dark river, forge glow, tiered stone streets and carved city arches, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text',
    description:
      '鑲燈橋橫跨暗河上方，橋欄嵌著一排排發光礦石，光線被水面反射成綠藍色波紋，照亮對岸守備營、寶石交易所與更深處的工坊街。這裡是地下城邦重要的交通節點，也是城鎮居民判斷河水水位、蒸汽壓力和市場人潮的觀察點。玩家可以在橋上整理路線、尋找交易消息、確認守備巡邏方向，或 inspect 橋欄刻字得知哪些舊礦道已封閉。雖然城邦內屬於安全區域，橋下暗流仍提醒旅人不要把這座城市只當成商店集合；它有自己的秩序、歷史與持續運作的地下脈搏。',
    exits: [
      { direction: 'north', targetRoomId: 'underground_city_gem_exchange', description: '鑲燈階梯回到寶石交易所' },
      { direction: 'west', targetRoomId: 'underground_city_guard_barracks', description: '石盾路回到守備營' },
    ],
    mapSymbol: '[橋]',
    mapX: 4,
    mapY: -4,
    guardianHints: {
      creature: '鑲燈橋的燈石若依序轉暗，通常代表守備巡邏正在橋下換線。',
      treasure: '橋欄舊刻字旁可能藏著商旅留下的押貨暗記。',
      spirit: '鑲燈橋記錄著地下城邦用光與河聲維持秩序的方式。',
    },
  },
  cursed_graveyard_iron_gate: {
    id: 'cursed_graveyard_iron_gate',
    name: '鏽鐵墓門',
    zone: 'cursed_graveyard' as RoomDef['zone'],
    image: 'cursed_graveyard_iron_gate.png',
    imagePrompt: '鏽鐵墓門 in cursed_graveyard, haunted cemetery under cold moonlight, black mist, broken tombstones, dead trees, candles and gothic ruins, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text',
    description:
      '鏽鐵墓門籠罩在詛咒墓園的黑霧與冷月之下，濕土、碎碑、白骨與早已熄滅的葬燭把道路切成一段段危險陰影。這裡不是單純的墓地背景，而是亡者巡邏、詛咒擴散與舊教會儀式交錯的節點。玩家可以 inspect 墓誌、鐘聲、燭淚與地面拖痕來判斷敵人巡行方向，也能 search 破棺、骨龕與祭器殘片尋找任務線索。若隊伍忽略霧中回音或走散，骷髏、亡靈騎士、石像鬼與巫妖僕從會從多個方向合圍；若穩定推進，則能逐步追出詛咒源頭與巫妖陵寢之間的關係，並確認撤退路線仍未被黑霧封死，隊伍火把也還足夠支撐下一段搜索。',
    exits: [
      { direction: 'east', targetRoomId: 'cursed_graveyard_crow_path', description: '黑羽小徑通往墓園深處' },
      { direction: 'south', targetRoomId: 'cursed_graveyard_watch_lantern', description: '殘燈路通往守夜燈亭' },
    ],
    monsters: [
      { monsterId: 'skeleton_soldier', maxCount: 2, respawnSeconds: 80 },
    ],
    mapSymbol: '[門]',
    mapX: 0,
    mapY: 0,
    guardianHints: {
      creature: '鏽鐵墓門的霧聲忽然停住時，附近不死者通常已經改變巡邏路線。',
      treasure: '鏽鐵墓門的碎碑、骨龕或燭臺旁可能藏著墓園線索與舊教會遺物。',
      spirit: '鏽鐵墓門保留著詛咒墓園從安葬之地變成亡者牢籠的記憶。',
    },
  },

  cursed_graveyard_crow_path: {
    id: 'cursed_graveyard_crow_path',
    name: '黑羽墓徑',
    zone: 'cursed_graveyard' as RoomDef['zone'],
    image: 'cursed_graveyard_crow_path.png',
    imagePrompt: '黑羽墓徑 in cursed_graveyard, haunted cemetery under cold moonlight, black mist, broken tombstones, dead trees, candles and gothic ruins, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text',
    description:
      '黑羽墓徑籠罩在詛咒墓園的黑霧與冷月之下，濕土、碎碑、白骨與早已熄滅的葬燭把道路切成一段段危險陰影。這裡不是單純的墓地背景，而是亡者巡邏、詛咒擴散與舊教會儀式交錯的節點。玩家可以 inspect 墓誌、鐘聲、燭淚與地面拖痕來判斷敵人巡行方向，也能 search 破棺、骨龕與祭器殘片尋找任務線索。若隊伍忽略霧中回音或走散，骷髏、亡靈騎士、石像鬼與巫妖僕從會從多個方向合圍；若穩定推進，則能逐步追出詛咒源頭與巫妖陵寢之間的關係，並確認撤退路線仍未被黑霧封死，隊伍火把也還足夠支撐下一段搜索。',
    exits: [
      { direction: 'west', targetRoomId: 'cursed_graveyard_iron_gate', description: '墓徑回到鏽鐵墓門' },
      { direction: 'east', targetRoomId: 'cursed_graveyard_sunken_graves', description: '塌陷墓排通往沉墓地' },
      { direction: 'north', targetRoomId: 'cursed_graveyard_bell_tower', description: '鐘聲引向無人鐘樓' },
    ],
    monsters: [
      { monsterId: 'skeleton_soldier', maxCount: 3, respawnSeconds: 80 },
      { monsterId: 'shadow_wolf', maxCount: 1, respawnSeconds: 90 },
    ],
    mapSymbol: '[徑]',
    mapX: 1,
    mapY: 0,
    guardianHints: {
      creature: '黑羽墓徑的霧聲忽然停住時，附近不死者通常已經改變巡邏路線。',
      treasure: '黑羽墓徑的碎碑、骨龕或燭臺旁可能藏著墓園線索與舊教會遺物。',
      spirit: '黑羽墓徑保留著詛咒墓園從安葬之地變成亡者牢籠的記憶。',
    },
  },

  cursed_graveyard_bell_tower: {
    id: 'cursed_graveyard_bell_tower',
    name: '無人鐘樓',
    zone: 'cursed_graveyard' as RoomDef['zone'],
    image: 'cursed_graveyard_bell_tower.png',
    imagePrompt: '無人鐘樓 in cursed_graveyard, haunted cemetery under cold moonlight, black mist, broken tombstones, dead trees, candles and gothic ruins, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text',
    description:
      '無人鐘樓籠罩在詛咒墓園的黑霧與冷月之下，濕土、碎碑、白骨與早已熄滅的葬燭把道路切成一段段危險陰影。這裡不是單純的墓地背景，而是亡者巡邏、詛咒擴散與舊教會儀式交錯的節點。玩家可以 inspect 墓誌、鐘聲、燭淚與地面拖痕來判斷敵人巡行方向，也能 search 破棺、骨龕與祭器殘片尋找任務線索。若隊伍忽略霧中回音或走散，骷髏、亡靈騎士、石像鬼與巫妖僕從會從多個方向合圍；若穩定推進，則能逐步追出詛咒源頭與巫妖陵寢之間的關係，並確認撤退路線仍未被黑霧封死，隊伍火把也還足夠支撐下一段搜索。',
    exits: [
      { direction: 'south', targetRoomId: 'cursed_graveyard_crow_path', description: '鐘影落回黑羽墓徑' },
      { direction: 'east', targetRoomId: 'cursed_graveyard_mourner_steps', description: '石階通往送葬臺' },
    ],
    monsters: [
      { monsterId: 'gargoyle', maxCount: 1, respawnSeconds: 140 },
      { monsterId: 'skeleton_soldier', maxCount: 2, respawnSeconds: 80 },
    ],
    mapSymbol: '[鐘]',
    mapX: 1,
    mapY: 1,
    guardianHints: {
      creature: '無人鐘樓的霧聲忽然停住時，附近不死者通常已經改變巡邏路線。',
      treasure: '無人鐘樓的碎碑、骨龕或燭臺旁可能藏著墓園線索與舊教會遺物。',
      spirit: '無人鐘樓保留著詛咒墓園從安葬之地變成亡者牢籠的記憶。',
    },
  },

  cursed_graveyard_watch_lantern: {
    id: 'cursed_graveyard_watch_lantern',
    name: '守夜燈亭',
    zone: 'cursed_graveyard' as RoomDef['zone'],
    image: 'cursed_graveyard_watch_lantern.png',
    imagePrompt: '守夜燈亭 in cursed_graveyard, haunted cemetery under cold moonlight, black mist, broken tombstones, dead trees, candles and gothic ruins, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text',
    description:
      '守夜燈亭籠罩在詛咒墓園的黑霧與冷月之下，濕土、碎碑、白骨與早已熄滅的葬燭把道路切成一段段危險陰影。這裡不是單純的墓地背景，而是亡者巡邏、詛咒擴散與舊教會儀式交錯的節點。玩家可以 inspect 墓誌、鐘聲、燭淚與地面拖痕來判斷敵人巡行方向，也能 search 破棺、骨龕與祭器殘片尋找任務線索。若隊伍忽略霧中回音或走散，骷髏、亡靈騎士、石像鬼與巫妖僕從會從多個方向合圍；若穩定推進，則能逐步追出詛咒源頭與巫妖陵寢之間的關係，並確認撤退路線仍未被黑霧封死，隊伍火把也還足夠支撐下一段搜索。',
    exits: [
      { direction: 'north', targetRoomId: 'cursed_graveyard_iron_gate', description: '殘燈路回到鏽鐵墓門' },
      { direction: 'east', targetRoomId: 'cursed_graveyard_withered_yew', description: '枯根路通往枯紫杉' },
    ],
    monsters: [
      { monsterId: 'skeleton_soldier', maxCount: 2, respawnSeconds: 80 },
    ],
    mapSymbol: '[燈]',
    mapX: 0,
    mapY: -1,
    guardianHints: {
      creature: '守夜燈亭的霧聲忽然停住時，附近不死者通常已經改變巡邏路線。',
      treasure: '守夜燈亭的碎碑、骨龕或燭臺旁可能藏著墓園線索與舊教會遺物。',
      spirit: '守夜燈亭保留著詛咒墓園從安葬之地變成亡者牢籠的記憶。',
    },
  },

  cursed_graveyard_sunken_graves: {
    id: 'cursed_graveyard_sunken_graves',
    name: '沉墓地',
    zone: 'cursed_graveyard' as RoomDef['zone'],
    image: 'cursed_graveyard_sunken_graves.png',
    imagePrompt: '沉墓地 in cursed_graveyard, haunted cemetery under cold moonlight, black mist, broken tombstones, dead trees, candles and gothic ruins, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text',
    description:
      '沉墓地籠罩在詛咒墓園的黑霧與冷月之下，濕土、碎碑、白骨與早已熄滅的葬燭把道路切成一段段危險陰影。這裡不是單純的墓地背景，而是亡者巡邏、詛咒擴散與舊教會儀式交錯的節點。玩家可以 inspect 墓誌、鐘聲、燭淚與地面拖痕來判斷敵人巡行方向，也能 search 破棺、骨龕與祭器殘片尋找任務線索。若隊伍忽略霧中回音或走散，骷髏、亡靈騎士、石像鬼與巫妖僕從會從多個方向合圍；若穩定推進，則能逐步追出詛咒源頭與巫妖陵寢之間的關係，並確認撤退路線仍未被黑霧封死，隊伍火把也還足夠支撐下一段搜索。',
    exits: [
      { direction: 'west', targetRoomId: 'cursed_graveyard_crow_path', description: '塌陷墓排回到黑羽墓徑' },
      { direction: 'east', targetRoomId: 'cursed_graveyard_ossuary_wall', description: '骨牆缺口通往藏骨牆' },
      { direction: 'south', targetRoomId: 'cursed_graveyard_withered_yew', description: '濕土路通往枯紫杉' },
    ],
    monsters: [
      { monsterId: 'skeleton_soldier', maxCount: 4, respawnSeconds: 80 },
      { monsterId: 'undead_knight', maxCount: 1, respawnSeconds: 140 },
    ],
    mapSymbol: '[沉]',
    mapX: 2,
    mapY: 0,
    guardianHints: {
      creature: '沉墓地的霧聲忽然停住時，附近不死者通常已經改變巡邏路線。',
      treasure: '沉墓地的碎碑、骨龕或燭臺旁可能藏著墓園線索與舊教會遺物。',
      spirit: '沉墓地保留著詛咒墓園從安葬之地變成亡者牢籠的記憶。',
    },
  },

  cursed_graveyard_mourner_steps: {
    id: 'cursed_graveyard_mourner_steps',
    name: '送葬臺階',
    zone: 'cursed_graveyard' as RoomDef['zone'],
    image: 'cursed_graveyard_mourner_steps.png',
    imagePrompt: '送葬臺階 in cursed_graveyard, haunted cemetery under cold moonlight, black mist, broken tombstones, dead trees, candles and gothic ruins, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text',
    description:
      '送葬臺階籠罩在詛咒墓園的黑霧與冷月之下，濕土、碎碑、白骨與早已熄滅的葬燭把道路切成一段段危險陰影。這裡不是單純的墓地背景，而是亡者巡邏、詛咒擴散與舊教會儀式交錯的節點。玩家可以 inspect 墓誌、鐘聲、燭淚與地面拖痕來判斷敵人巡行方向，也能 search 破棺、骨龕與祭器殘片尋找任務線索。若隊伍忽略霧中回音或走散，骷髏、亡靈騎士、石像鬼與巫妖僕從會從多個方向合圍；若穩定推進，則能逐步追出詛咒源頭與巫妖陵寢之間的關係，並確認撤退路線仍未被黑霧封死，隊伍火把也還足夠支撐下一段搜索。',
    exits: [
      { direction: 'west', targetRoomId: 'cursed_graveyard_bell_tower', description: '石階回到無人鐘樓' },
      { direction: 'south', targetRoomId: 'cursed_graveyard_ossuary_wall', description: '白骨路通往藏骨牆' },
      { direction: 'east', targetRoomId: 'cursed_graveyard_moon_crypt', description: '月光階通往月蝕墓室' },
    ],
    monsters: [
      { monsterId: 'undead_knight', maxCount: 1, respawnSeconds: 140 },
    ],
    mapSymbol: '[階]',
    mapX: 2,
    mapY: 1,
    guardianHints: {
      creature: '送葬臺階的霧聲忽然停住時，附近不死者通常已經改變巡邏路線。',
      treasure: '送葬臺階的碎碑、骨龕或燭臺旁可能藏著墓園線索與舊教會遺物。',
      spirit: '送葬臺階保留著詛咒墓園從安葬之地變成亡者牢籠的記憶。',
    },
  },

  cursed_graveyard_withered_yew: {
    id: 'cursed_graveyard_withered_yew',
    name: '枯紫杉',
    zone: 'cursed_graveyard' as RoomDef['zone'],
    image: 'cursed_graveyard_withered_yew.png',
    imagePrompt: '枯紫杉 in cursed_graveyard, haunted cemetery under cold moonlight, black mist, broken tombstones, dead trees, candles and gothic ruins, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text',
    description:
      '枯紫杉籠罩在詛咒墓園的黑霧與冷月之下，濕土、碎碑、白骨與早已熄滅的葬燭把道路切成一段段危險陰影。這裡不是單純的墓地背景，而是亡者巡邏、詛咒擴散與舊教會儀式交錯的節點。玩家可以 inspect 墓誌、鐘聲、燭淚與地面拖痕來判斷敵人巡行方向，也能 search 破棺、骨龕與祭器殘片尋找任務線索。若隊伍忽略霧中回音或走散，骷髏、亡靈騎士、石像鬼與巫妖僕從會從多個方向合圍；若穩定推進，則能逐步追出詛咒源頭與巫妖陵寢之間的關係，並確認撤退路線仍未被黑霧封死，隊伍火把也還足夠支撐下一段搜索。',
    exits: [
      { direction: 'west', targetRoomId: 'cursed_graveyard_watch_lantern', description: '枯根路回到守夜燈亭' },
      { direction: 'north', targetRoomId: 'cursed_graveyard_sunken_graves', description: '濕土路回到沉墓地' },
      { direction: 'east', targetRoomId: 'cursed_graveyard_gravedigger_shack', description: '木鍬痕通往掘墓棚' },
    ],
    monsters: [
      { monsterId: 'shadow_treant', maxCount: 1, respawnSeconds: 180 },
      { monsterId: 'shadow_wolf', maxCount: 2, respawnSeconds: 90 },
    ],
    mapSymbol: '[杉]',
    mapX: 1,
    mapY: -1,
    guardianHints: {
      creature: '枯紫杉的霧聲忽然停住時，附近不死者通常已經改變巡邏路線。',
      treasure: '枯紫杉的碎碑、骨龕或燭臺旁可能藏著墓園線索與舊教會遺物。',
      spirit: '枯紫杉保留著詛咒墓園從安葬之地變成亡者牢籠的記憶。',
    },
  },

  cursed_graveyard_ossuary_wall: {
    id: 'cursed_graveyard_ossuary_wall',
    name: '藏骨牆',
    zone: 'cursed_graveyard' as RoomDef['zone'],
    image: 'cursed_graveyard_ossuary_wall.png',
    imagePrompt: '藏骨牆 in cursed_graveyard, haunted cemetery under cold moonlight, black mist, broken tombstones, dead trees, candles and gothic ruins, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text',
    description:
      '藏骨牆籠罩在詛咒墓園的黑霧與冷月之下，濕土、碎碑、白骨與早已熄滅的葬燭把道路切成一段段危險陰影。這裡不是單純的墓地背景，而是亡者巡邏、詛咒擴散與舊教會儀式交錯的節點。玩家可以 inspect 墓誌、鐘聲、燭淚與地面拖痕來判斷敵人巡行方向，也能 search 破棺、骨龕與祭器殘片尋找任務線索。若隊伍忽略霧中回音或走散，骷髏、亡靈騎士、石像鬼與巫妖僕從會從多個方向合圍；若穩定推進，則能逐步追出詛咒源頭與巫妖陵寢之間的關係，並確認撤退路線仍未被黑霧封死，隊伍火把也還足夠支撐下一段搜索。',
    exits: [
      { direction: 'west', targetRoomId: 'cursed_graveyard_sunken_graves', description: '骨牆缺口回到沉墓地' },
      { direction: 'north', targetRoomId: 'cursed_graveyard_mourner_steps', description: '白骨路回到送葬臺階' },
      { direction: 'east', targetRoomId: 'cursed_graveyard_saint_statue', description: '骨龕路通往破聖像' },
    ],
    monsters: [
      { monsterId: 'skeleton_soldier', maxCount: 3, respawnSeconds: 80 },
      { monsterId: 'gargoyle', maxCount: 1, respawnSeconds: 140 },
    ],
    mapSymbol: '[骨]',
    mapX: 3,
    mapY: 0,
    guardianHints: {
      creature: '藏骨牆的霧聲忽然停住時，附近不死者通常已經改變巡邏路線。',
      treasure: '藏骨牆的碎碑、骨龕或燭臺旁可能藏著墓園線索與舊教會遺物。',
      spirit: '藏骨牆保留著詛咒墓園從安葬之地變成亡者牢籠的記憶。',
    },
  },

  cursed_graveyard_gravedigger_shack: {
    id: 'cursed_graveyard_gravedigger_shack',
    name: '掘墓棚',
    zone: 'cursed_graveyard' as RoomDef['zone'],
    image: 'cursed_graveyard_gravedigger_shack.png',
    imagePrompt: '掘墓棚 in cursed_graveyard, haunted cemetery under cold moonlight, black mist, broken tombstones, dead trees, candles and gothic ruins, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text',
    description:
      '掘墓棚籠罩在詛咒墓園的黑霧與冷月之下，濕土、碎碑、白骨與早已熄滅的葬燭把道路切成一段段危險陰影。這裡不是單純的墓地背景，而是亡者巡邏、詛咒擴散與舊教會儀式交錯的節點。玩家可以 inspect 墓誌、鐘聲、燭淚與地面拖痕來判斷敵人巡行方向，也能 search 破棺、骨龕與祭器殘片尋找任務線索。若隊伍忽略霧中回音或走散，骷髏、亡靈騎士、石像鬼與巫妖僕從會從多個方向合圍；若穩定推進，則能逐步追出詛咒源頭與巫妖陵寢之間的關係，並確認撤退路線仍未被黑霧封死，隊伍火把也還足夠支撐下一段搜索。',
    exits: [
      { direction: 'west', targetRoomId: 'cursed_graveyard_withered_yew', description: '木鍬痕回到枯紫杉' },
      { direction: 'east', targetRoomId: 'cursed_graveyard_coffin_lane', description: '棺木路通往棺材巷' },
      { direction: 'south', targetRoomId: 'cursed_graveyard_black_mist_pool', description: '黑霧低地通往霧池' },
    ],
    monsters: [
      { monsterId: 'skeleton_soldier', maxCount: 2, respawnSeconds: 80 },
      { monsterId: 'undead_knight', maxCount: 1, respawnSeconds: 140 },
    ],
    mapSymbol: '[棚]',
    mapX: 2,
    mapY: -1,
    guardianHints: {
      creature: '掘墓棚的霧聲忽然停住時，附近不死者通常已經改變巡邏路線。',
      treasure: '掘墓棚的碎碑、骨龕或燭臺旁可能藏著墓園線索與舊教會遺物。',
      spirit: '掘墓棚保留著詛咒墓園從安葬之地變成亡者牢籠的記憶。',
    },
  },

  cursed_graveyard_moon_crypt: {
    id: 'cursed_graveyard_moon_crypt',
    name: '月蝕墓室',
    zone: 'cursed_graveyard' as RoomDef['zone'],
    image: 'cursed_graveyard_moon_crypt.png',
    imagePrompt: '月蝕墓室 in cursed_graveyard, haunted cemetery under cold moonlight, black mist, broken tombstones, dead trees, candles and gothic ruins, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text',
    description:
      '月蝕墓室籠罩在詛咒墓園的黑霧與冷月之下，濕土、碎碑、白骨與早已熄滅的葬燭把道路切成一段段危險陰影。這裡不是單純的墓地背景，而是亡者巡邏、詛咒擴散與舊教會儀式交錯的節點。玩家可以 inspect 墓誌、鐘聲、燭淚與地面拖痕來判斷敵人巡行方向，也能 search 破棺、骨龕與祭器殘片尋找任務線索。若隊伍忽略霧中回音或走散，骷髏、亡靈騎士、石像鬼與巫妖僕從會從多個方向合圍；若穩定推進，則能逐步追出詛咒源頭與巫妖陵寢之間的關係，並確認撤退路線仍未被黑霧封死，隊伍火把也還足夠支撐下一段搜索。',
    exits: [
      { direction: 'west', targetRoomId: 'cursed_graveyard_mourner_steps', description: '月光階回到送葬臺階' },
      { direction: 'south', targetRoomId: 'cursed_graveyard_saint_statue', description: '裂石梯通往破聖像' },
      { direction: 'east', targetRoomId: 'cursed_graveyard_candle_maze', description: '冷燭路通往燭迷陣' },
    ],
    monsters: [
      { monsterId: 'undead_knight', maxCount: 2, respawnSeconds: 140 },
      { monsterId: 'shadow_assassin', maxCount: 1, respawnSeconds: 160 },
    ],
    mapSymbol: '[月]',
    mapX: 3,
    mapY: 1,
    guardianHints: {
      creature: '月蝕墓室的霧聲忽然停住時，附近不死者通常已經改變巡邏路線。',
      treasure: '月蝕墓室的碎碑、骨龕或燭臺旁可能藏著墓園線索與舊教會遺物。',
      spirit: '月蝕墓室保留著詛咒墓園從安葬之地變成亡者牢籠的記憶。',
    },
  },

  cursed_graveyard_saint_statue: {
    id: 'cursed_graveyard_saint_statue',
    name: '破聖像',
    zone: 'cursed_graveyard' as RoomDef['zone'],
    image: 'cursed_graveyard_saint_statue.png',
    imagePrompt: '破聖像 in cursed_graveyard, haunted cemetery under cold moonlight, black mist, broken tombstones, dead trees, candles and gothic ruins, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text',
    description:
      '破聖像籠罩在詛咒墓園的黑霧與冷月之下，濕土、碎碑、白骨與早已熄滅的葬燭把道路切成一段段危險陰影。這裡不是單純的墓地背景，而是亡者巡邏、詛咒擴散與舊教會儀式交錯的節點。玩家可以 inspect 墓誌、鐘聲、燭淚與地面拖痕來判斷敵人巡行方向，也能 search 破棺、骨龕與祭器殘片尋找任務線索。若隊伍忽略霧中回音或走散，骷髏、亡靈騎士、石像鬼與巫妖僕從會從多個方向合圍；若穩定推進，則能逐步追出詛咒源頭與巫妖陵寢之間的關係，並確認撤退路線仍未被黑霧封死，隊伍火把也還足夠支撐下一段搜索。',
    exits: [
      { direction: 'west', targetRoomId: 'cursed_graveyard_ossuary_wall', description: '骨龕路回到藏骨牆' },
      { direction: 'north', targetRoomId: 'cursed_graveyard_moon_crypt', description: '裂石梯回到月蝕墓室' },
      { direction: 'east', targetRoomId: 'cursed_graveyard_cursed_fountain', description: '乾涸水道通往詛咒噴泉' },
    ],
    monsters: [
      { monsterId: 'gargoyle', maxCount: 2, respawnSeconds: 140 },
      { monsterId: 'undead_knight', maxCount: 1, respawnSeconds: 140 },
    ],
    mapSymbol: '[像]',
    mapX: 4,
    mapY: 0,
    guardianHints: {
      creature: '破聖像的霧聲忽然停住時，附近不死者通常已經改變巡邏路線。',
      treasure: '破聖像的碎碑、骨龕或燭臺旁可能藏著墓園線索與舊教會遺物。',
      spirit: '破聖像保留著詛咒墓園從安葬之地變成亡者牢籠的記憶。',
    },
  },

  cursed_graveyard_coffin_lane: {
    id: 'cursed_graveyard_coffin_lane',
    name: '棺材巷',
    zone: 'cursed_graveyard' as RoomDef['zone'],
    image: 'cursed_graveyard_coffin_lane.png',
    imagePrompt: '棺材巷 in cursed_graveyard, haunted cemetery under cold moonlight, black mist, broken tombstones, dead trees, candles and gothic ruins, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text',
    description:
      '棺材巷籠罩在詛咒墓園的黑霧與冷月之下，濕土、碎碑、白骨與早已熄滅的葬燭把道路切成一段段危險陰影。這裡不是單純的墓地背景，而是亡者巡邏、詛咒擴散與舊教會儀式交錯的節點。玩家可以 inspect 墓誌、鐘聲、燭淚與地面拖痕來判斷敵人巡行方向，也能 search 破棺、骨龕與祭器殘片尋找任務線索。若隊伍忽略霧中回音或走散，骷髏、亡靈騎士、石像鬼與巫妖僕從會從多個方向合圍；若穩定推進，則能逐步追出詛咒源頭與巫妖陵寢之間的關係，並確認撤退路線仍未被黑霧封死，隊伍火把也還足夠支撐下一段搜索。',
    exits: [
      { direction: 'west', targetRoomId: 'cursed_graveyard_gravedigger_shack', description: '棺木路回到掘墓棚' },
      { direction: 'east', targetRoomId: 'cursed_graveyard_black_mist_pool', description: '拖痕通往黑霧池' },
      { direction: 'south', targetRoomId: 'cursed_graveyard_plague_pit', description: '腐土坡通往瘟疫坑' },
    ],
    monsters: [
      { monsterId: 'skeleton_soldier', maxCount: 3, respawnSeconds: 80 },
      { monsterId: 'undead_knight', maxCount: 2, respawnSeconds: 140 },
    ],
    mapSymbol: '[棺]',
    mapX: 3,
    mapY: -1,
    guardianHints: {
      creature: '棺材巷的霧聲忽然停住時，附近不死者通常已經改變巡邏路線。',
      treasure: '棺材巷的碎碑、骨龕或燭臺旁可能藏著墓園線索與舊教會遺物。',
      spirit: '棺材巷保留著詛咒墓園從安葬之地變成亡者牢籠的記憶。',
    },
  },

  cursed_graveyard_black_mist_pool: {
    id: 'cursed_graveyard_black_mist_pool',
    name: '黑霧池',
    zone: 'cursed_graveyard' as RoomDef['zone'],
    image: 'cursed_graveyard_black_mist_pool.png',
    imagePrompt: '黑霧池 in cursed_graveyard, haunted cemetery under cold moonlight, black mist, broken tombstones, dead trees, candles and gothic ruins, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text',
    description:
      '黑霧池籠罩在詛咒墓園的黑霧與冷月之下，濕土、碎碑、白骨與早已熄滅的葬燭把道路切成一段段危險陰影。這裡不是單純的墓地背景，而是亡者巡邏、詛咒擴散與舊教會儀式交錯的節點。玩家可以 inspect 墓誌、鐘聲、燭淚與地面拖痕來判斷敵人巡行方向，也能 search 破棺、骨龕與祭器殘片尋找任務線索。若隊伍忽略霧中回音或走散，骷髏、亡靈騎士、石像鬼與巫妖僕從會從多個方向合圍；若穩定推進，則能逐步追出詛咒源頭與巫妖陵寢之間的關係，並確認撤退路線仍未被黑霧封死，隊伍火把也還足夠支撐下一段搜索。',
    exits: [
      { direction: 'north', targetRoomId: 'cursed_graveyard_gravedigger_shack', description: '黑霧低地回到掘墓棚' },
      { direction: 'west', targetRoomId: 'cursed_graveyard_coffin_lane', description: '拖痕回到棺材巷' },
      { direction: 'east', targetRoomId: 'cursed_graveyard_plague_pit', description: '霧線通往瘟疫坑' },
    ],
    monsters: [
      { monsterId: 'shadow_wolf', maxCount: 3, respawnSeconds: 90 },
      { monsterId: 'shadow_assassin', maxCount: 1, respawnSeconds: 160 },
    ],
    mapSymbol: '[霧]',
    mapX: 3,
    mapY: -2,
    guardianHints: {
      creature: '黑霧池的霧聲忽然停住時，附近不死者通常已經改變巡邏路線。',
      treasure: '黑霧池的碎碑、骨龕或燭臺旁可能藏著墓園線索與舊教會遺物。',
      spirit: '黑霧池保留著詛咒墓園從安葬之地變成亡者牢籠的記憶。',
    },
  },

  cursed_graveyard_candle_maze: {
    id: 'cursed_graveyard_candle_maze',
    name: '冷燭迷陣',
    zone: 'cursed_graveyard' as RoomDef['zone'],
    image: 'cursed_graveyard_candle_maze.png',
    imagePrompt: '冷燭迷陣 in cursed_graveyard, haunted cemetery under cold moonlight, black mist, broken tombstones, dead trees, candles and gothic ruins, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text',
    description:
      '冷燭迷陣籠罩在詛咒墓園的黑霧與冷月之下，濕土、碎碑、白骨與早已熄滅的葬燭把道路切成一段段危險陰影。這裡不是單純的墓地背景，而是亡者巡邏、詛咒擴散與舊教會儀式交錯的節點。玩家可以 inspect 墓誌、鐘聲、燭淚與地面拖痕來判斷敵人巡行方向，也能 search 破棺、骨龕與祭器殘片尋找任務線索。若隊伍忽略霧中回音或走散，骷髏、亡靈騎士、石像鬼與巫妖僕從會從多個方向合圍；若穩定推進，則能逐步追出詛咒源頭與巫妖陵寢之間的關係，並確認撤退路線仍未被黑霧封死，隊伍火把也還足夠支撐下一段搜索。',
    exits: [
      { direction: 'west', targetRoomId: 'cursed_graveyard_moon_crypt', description: '冷燭路回到月蝕墓室' },
      { direction: 'south', targetRoomId: 'cursed_graveyard_cursed_fountain', description: '燭淚路通往詛咒噴泉' },
      { direction: 'east', targetRoomId: 'cursed_graveyard_chapel_ruin', description: '斷牆通往禮拜堂廢墟' },
    ],
    monsters: [
      { monsterId: 'shadow_assassin', maxCount: 2, respawnSeconds: 160 },
      { monsterId: 'undead_knight', maxCount: 1, respawnSeconds: 140 },
    ],
    mapSymbol: '[燭]',
    mapX: 4,
    mapY: 1,
    guardianHints: {
      creature: '冷燭迷陣的霧聲忽然停住時，附近不死者通常已經改變巡邏路線。',
      treasure: '冷燭迷陣的碎碑、骨龕或燭臺旁可能藏著墓園線索與舊教會遺物。',
      spirit: '冷燭迷陣保留著詛咒墓園從安葬之地變成亡者牢籠的記憶。',
    },
  },

  cursed_graveyard_cursed_fountain: {
    id: 'cursed_graveyard_cursed_fountain',
    name: '詛咒噴泉',
    zone: 'cursed_graveyard' as RoomDef['zone'],
    image: 'cursed_graveyard_cursed_fountain.png',
    imagePrompt: '詛咒噴泉 in cursed_graveyard, haunted cemetery under cold moonlight, black mist, broken tombstones, dead trees, candles and gothic ruins, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text',
    description:
      '詛咒噴泉籠罩在詛咒墓園的黑霧與冷月之下，濕土、碎碑、白骨與早已熄滅的葬燭把道路切成一段段危險陰影。這裡不是單純的墓地背景，而是亡者巡邏、詛咒擴散與舊教會儀式交錯的節點。玩家可以 inspect 墓誌、鐘聲、燭淚與地面拖痕來判斷敵人巡行方向，也能 search 破棺、骨龕與祭器殘片尋找任務線索。若隊伍忽略霧中回音或走散，骷髏、亡靈騎士、石像鬼與巫妖僕從會從多個方向合圍；若穩定推進，則能逐步追出詛咒源頭與巫妖陵寢之間的關係，並確認撤退路線仍未被黑霧封死，隊伍火把也還足夠支撐下一段搜索。',
    exits: [
      { direction: 'west', targetRoomId: 'cursed_graveyard_saint_statue', description: '乾涸水道回到破聖像' },
      { direction: 'north', targetRoomId: 'cursed_graveyard_candle_maze', description: '燭淚路回到冷燭迷陣' },
      { direction: 'east', targetRoomId: 'cursed_graveyard_chapel_ruin', description: '黑水路通往禮拜堂廢墟' },
    ],
    monsters: [
      { monsterId: 'undead_knight', maxCount: 2, respawnSeconds: 140 },
      { monsterId: 'shadow_assassin', maxCount: 1, respawnSeconds: 160 },
    ],
    mapSymbol: '[泉]',
    mapX: 5,
    mapY: 0,
    guardianHints: {
      creature: '詛咒噴泉的霧聲忽然停住時，附近不死者通常已經改變巡邏路線。',
      treasure: '詛咒噴泉的碎碑、骨龕或燭臺旁可能藏著墓園線索與舊教會遺物。',
      spirit: '詛咒噴泉保留著詛咒墓園從安葬之地變成亡者牢籠的記憶。',
    },
  },

  cursed_graveyard_plague_pit: {
    id: 'cursed_graveyard_plague_pit',
    name: '瘟疫坑',
    zone: 'cursed_graveyard' as RoomDef['zone'],
    image: 'cursed_graveyard_plague_pit.png',
    imagePrompt: '瘟疫坑 in cursed_graveyard, haunted cemetery under cold moonlight, black mist, broken tombstones, dead trees, candles and gothic ruins, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text',
    description:
      '瘟疫坑籠罩在詛咒墓園的黑霧與冷月之下，濕土、碎碑、白骨與早已熄滅的葬燭把道路切成一段段危險陰影。這裡不是單純的墓地背景，而是亡者巡邏、詛咒擴散與舊教會儀式交錯的節點。玩家可以 inspect 墓誌、鐘聲、燭淚與地面拖痕來判斷敵人巡行方向，也能 search 破棺、骨龕與祭器殘片尋找任務線索。若隊伍忽略霧中回音或走散，骷髏、亡靈騎士、石像鬼與巫妖僕從會從多個方向合圍；若穩定推進，則能逐步追出詛咒源頭與巫妖陵寢之間的關係，並確認撤退路線仍未被黑霧封死，隊伍火把也還足夠支撐下一段搜索。',
    exits: [
      { direction: 'north', targetRoomId: 'cursed_graveyard_coffin_lane', description: '腐土坡回到棺材巷' },
      { direction: 'west', targetRoomId: 'cursed_graveyard_black_mist_pool', description: '霧線回到黑霧池' },
      { direction: 'east', targetRoomId: 'cursed_graveyard_gravekeeper_vault', description: '封蠟路通往守墓人地窖' },
    ],
    monsters: [
      { monsterId: 'skeleton_soldier', maxCount: 4, respawnSeconds: 80 },
      { monsterId: 'undead_knight', maxCount: 1, respawnSeconds: 140 },
    ],
    mapSymbol: '[疫]',
    mapX: 4,
    mapY: -2,
    guardianHints: {
      creature: '瘟疫坑的霧聲忽然停住時，附近不死者通常已經改變巡邏路線。',
      treasure: '瘟疫坑的碎碑、骨龕或燭臺旁可能藏著墓園線索與舊教會遺物。',
      spirit: '瘟疫坑保留著詛咒墓園從安葬之地變成亡者牢籠的記憶。',
    },
  },

  cursed_graveyard_chapel_ruin: {
    id: 'cursed_graveyard_chapel_ruin',
    name: '禮拜堂廢墟',
    zone: 'cursed_graveyard' as RoomDef['zone'],
    image: 'cursed_graveyard_chapel_ruin.png',
    imagePrompt: '禮拜堂廢墟 in cursed_graveyard, haunted cemetery under cold moonlight, black mist, broken tombstones, dead trees, candles and gothic ruins, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text',
    description:
      '禮拜堂廢墟籠罩在詛咒墓園的黑霧與冷月之下，濕土、碎碑、白骨與早已熄滅的葬燭把道路切成一段段危險陰影。這裡不是單純的墓地背景，而是亡者巡邏、詛咒擴散與舊教會儀式交錯的節點。玩家可以 inspect 墓誌、鐘聲、燭淚與地面拖痕來判斷敵人巡行方向，也能 search 破棺、骨龕與祭器殘片尋找任務線索。若隊伍忽略霧中回音或走散，骷髏、亡靈騎士、石像鬼與巫妖僕從會從多個方向合圍；若穩定推進，則能逐步追出詛咒源頭與巫妖陵寢之間的關係，並確認撤退路線仍未被黑霧封死，隊伍火把也還足夠支撐下一段搜索。',
    exits: [
      { direction: 'west', targetRoomId: 'cursed_graveyard_cursed_fountain', description: '黑水路回到詛咒噴泉' },
      { direction: 'south', targetRoomId: 'cursed_graveyard_gravekeeper_vault', description: '斷禱階通往守墓人地窖' },
      { direction: 'east', targetRoomId: 'cursed_graveyard_litany_altar', description: '破拱門通往悼詞祭壇' },
    ],
    monsters: [
      { monsterId: 'gargoyle', maxCount: 2, respawnSeconds: 140 },
      { monsterId: 'lich', maxCount: 1, respawnSeconds: 1800 },
    ],
    mapSymbol: '[堂]',
    mapX: 6,
    mapY: 0,
    guardianHints: {
      creature: '禮拜堂廢墟的霧聲忽然停住時，附近不死者通常已經改變巡邏路線。',
      treasure: '禮拜堂廢墟的碎碑、骨龕或燭臺旁可能藏著墓園線索與舊教會遺物。',
      spirit: '禮拜堂廢墟保留著詛咒墓園從安葬之地變成亡者牢籠的記憶。',
    },
  },

  cursed_graveyard_gravekeeper_vault: {
    id: 'cursed_graveyard_gravekeeper_vault',
    name: '守墓人地窖',
    zone: 'cursed_graveyard' as RoomDef['zone'],
    image: 'cursed_graveyard_gravekeeper_vault.png',
    imagePrompt: '守墓人地窖 in cursed_graveyard, haunted cemetery under cold moonlight, black mist, broken tombstones, dead trees, candles and gothic ruins, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text',
    description:
      '守墓人地窖籠罩在詛咒墓園的黑霧與冷月之下，濕土、碎碑、白骨與早已熄滅的葬燭把道路切成一段段危險陰影。這裡不是單純的墓地背景，而是亡者巡邏、詛咒擴散與舊教會儀式交錯的節點。玩家可以 inspect 墓誌、鐘聲、燭淚與地面拖痕來判斷敵人巡行方向，也能 search 破棺、骨龕與祭器殘片尋找任務線索。若隊伍忽略霧中回音或走散，骷髏、亡靈騎士、石像鬼與巫妖僕從會從多個方向合圍；若穩定推進，則能逐步追出詛咒源頭與巫妖陵寢之間的關係，並確認撤退路線仍未被黑霧封死，隊伍火把也還足夠支撐下一段搜索。',
    exits: [
      { direction: 'west', targetRoomId: 'cursed_graveyard_plague_pit', description: '封蠟路回到瘟疫坑' },
      { direction: 'north', targetRoomId: 'cursed_graveyard_chapel_ruin', description: '斷禱階回到禮拜堂廢墟' },
      { direction: 'east', targetRoomId: 'cursed_graveyard_bone_bridge', description: '地下橋通往骨橋' },
    ],
    monsters: [
      { monsterId: 'undead_knight', maxCount: 2, respawnSeconds: 140 },
      { monsterId: 'lich', maxCount: 1, respawnSeconds: 1800 },
    ],
    mapSymbol: '[窖]',
    mapX: 5,
    mapY: -2,
    guardianHints: {
      creature: '守墓人地窖的霧聲忽然停住時，附近不死者通常已經改變巡邏路線。',
      treasure: '守墓人地窖的碎碑、骨龕或燭臺旁可能藏著墓園線索與舊教會遺物。',
      spirit: '守墓人地窖保留著詛咒墓園從安葬之地變成亡者牢籠的記憶。',
    },
  },

  cursed_graveyard_litany_altar: {
    id: 'cursed_graveyard_litany_altar',
    name: '悼詞祭壇',
    zone: 'cursed_graveyard' as RoomDef['zone'],
    image: 'cursed_graveyard_litany_altar.png',
    imagePrompt: '悼詞祭壇 in cursed_graveyard, haunted cemetery under cold moonlight, black mist, broken tombstones, dead trees, candles and gothic ruins, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text',
    description:
      '悼詞祭壇籠罩在詛咒墓園的黑霧與冷月之下，濕土、碎碑、白骨與早已熄滅的葬燭把道路切成一段段危險陰影。這裡不是單純的墓地背景，而是亡者巡邏、詛咒擴散與舊教會儀式交錯的節點。玩家可以 inspect 墓誌、鐘聲、燭淚與地面拖痕來判斷敵人巡行方向，也能 search 破棺、骨龕與祭器殘片尋找任務線索。若隊伍忽略霧中回音或走散，骷髏、亡靈騎士、石像鬼與巫妖僕從會從多個方向合圍；若穩定推進，則能逐步追出詛咒源頭與巫妖陵寢之間的關係，並確認撤退路線仍未被黑霧封死，隊伍火把也還足夠支撐下一段搜索。',
    exits: [
      { direction: 'west', targetRoomId: 'cursed_graveyard_chapel_ruin', description: '破拱門回到禮拜堂廢墟' },
      { direction: 'south', targetRoomId: 'cursed_graveyard_bone_bridge', description: '祭壇階通往骨橋' },
      { direction: 'east', targetRoomId: 'cursed_graveyard_lich_mausoleum', description: '黑經路通往巫妖陵寢' },
    ],
    monsters: [
      { monsterId: 'lich', maxCount: 1, respawnSeconds: 1800 },
      { monsterId: 'undead_knight', maxCount: 2, respawnSeconds: 140 },
    ],
    mapSymbol: '[壇]',
    mapX: 7,
    mapY: 0,
    guardianHints: {
      creature: '悼詞祭壇的霧聲忽然停住時，附近不死者通常已經改變巡邏路線。',
      treasure: '悼詞祭壇的碎碑、骨龕或燭臺旁可能藏著墓園線索與舊教會遺物。',
      spirit: '悼詞祭壇保留著詛咒墓園從安葬之地變成亡者牢籠的記憶。',
    },
  },

  cursed_graveyard_bone_bridge: {
    id: 'cursed_graveyard_bone_bridge',
    name: '骨橋',
    zone: 'cursed_graveyard' as RoomDef['zone'],
    image: 'cursed_graveyard_bone_bridge.png',
    imagePrompt: '骨橋 in cursed_graveyard, haunted cemetery under cold moonlight, black mist, broken tombstones, dead trees, candles and gothic ruins, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text',
    description:
      '骨橋籠罩在詛咒墓園的黑霧與冷月之下，濕土、碎碑、白骨與早已熄滅的葬燭把道路切成一段段危險陰影。這裡不是單純的墓地背景，而是亡者巡邏、詛咒擴散與舊教會儀式交錯的節點。玩家可以 inspect 墓誌、鐘聲、燭淚與地面拖痕來判斷敵人巡行方向，也能 search 破棺、骨龕與祭器殘片尋找任務線索。若隊伍忽略霧中回音或走散，骷髏、亡靈騎士、石像鬼與巫妖僕從會從多個方向合圍；若穩定推進，則能逐步追出詛咒源頭與巫妖陵寢之間的關係，並確認撤退路線仍未被黑霧封死，隊伍火把也還足夠支撐下一段搜索。',
    exits: [
      { direction: 'west', targetRoomId: 'cursed_graveyard_gravekeeper_vault', description: '地下橋回到守墓人地窖' },
      { direction: 'north', targetRoomId: 'cursed_graveyard_litany_altar', description: '祭壇階回到悼詞祭壇' },
      { direction: 'east', targetRoomId: 'cursed_graveyard_lich_mausoleum', description: '骨橋盡頭通往巫妖陵寢' },
    ],
    monsters: [
      { monsterId: 'skeleton_general', maxCount: 1, respawnSeconds: 300 },
      { monsterId: 'skeleton_soldier', maxCount: 3, respawnSeconds: 80 },
    ],
    mapSymbol: '[橋]',
    mapX: 6,
    mapY: -1,
    guardianHints: {
      creature: '骨橋的霧聲忽然停住時，附近不死者通常已經改變巡邏路線。',
      treasure: '骨橋的碎碑、骨龕或燭臺旁可能藏著墓園線索與舊教會遺物。',
      spirit: '骨橋保留著詛咒墓園從安葬之地變成亡者牢籠的記憶。',
    },
  },

  cursed_graveyard_lich_mausoleum: {
    id: 'cursed_graveyard_lich_mausoleum',
    name: '巫妖陵寢',
    zone: 'cursed_graveyard' as RoomDef['zone'],
    image: 'cursed_graveyard_lich_mausoleum.png',
    imagePrompt: '巫妖陵寢 in cursed_graveyard, haunted cemetery under cold moonlight, black mist, broken tombstones, dead trees, candles and gothic ruins, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text',
    description:
      '巫妖陵寢籠罩在詛咒墓園的黑霧與冷月之下，濕土、碎碑、白骨與早已熄滅的葬燭把道路切成一段段危險陰影。這裡不是單純的墓地背景，而是亡者巡邏、詛咒擴散與舊教會儀式交錯的節點。玩家可以 inspect 墓誌、鐘聲、燭淚與地面拖痕來判斷敵人巡行方向，也能 search 破棺、骨龕與祭器殘片尋找任務線索。若隊伍忽略霧中回音或走散，骷髏、亡靈騎士、石像鬼與巫妖僕從會從多個方向合圍；若穩定推進，則能逐步追出詛咒源頭與巫妖陵寢之間的關係，並確認撤退路線仍未被黑霧封死，隊伍火把也還足夠支撐下一段搜索。',
    exits: [
      { direction: 'west', targetRoomId: 'cursed_graveyard_litany_altar', description: '黑經路回到悼詞祭壇' },
      { direction: 'south', targetRoomId: 'cursed_graveyard_bone_bridge', description: '骨橋回到外圍' },
    ],
    monsters: [
      { monsterId: 'lich', maxCount: 1, respawnSeconds: 1800 },
      { monsterId: 'skeleton_general', maxCount: 1, respawnSeconds: 300 },
      { monsterId: 'undead_knight', maxCount: 2, respawnSeconds: 140 },
    ],
    mapSymbol: '[巫]',
    mapX: 8,
    mapY: 0,
    guardianHints: {
      creature: '巫妖陵寢的霧聲忽然停住時，附近不死者通常已經改變巡邏路線。',
      treasure: '巫妖陵寢的碎碑、骨龕或燭臺旁可能藏著墓園線索與舊教會遺物。',
      spirit: '巫妖陵寢保留著詛咒墓園從安葬之地變成亡者牢籠的記憶。',
    },
  },
  storm_highlands_cliff_gate: {
    id: 'storm_highlands_cliff_gate',
    name: '峭壁入口',
    zone: 'storm_highlands' as RoomDef['zone'],
    image: 'storm_highlands_cliff_gate.png',
    imagePrompt: '峭壁入口 in storm_highlands, windswept mountain highlands above clouds, lightning storm, ancient wind altar ruins, griffin nests, sheer cliffs, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text',
    description:
      '峭壁入口位於風暴高原被暴風切割的峭壁與雲海之間，腳下是濕滑岩階、斷裂纜索、羽骨與被雷火燒黑的舊祭紋。這裡是高階隊伍穿越高原的路線節點，不只提供戰鬥遭遇，也提示風神祭壇、獅鷲巢穴、暴風眼與世界王峰之間的關係。玩家可以 inspect 風向、爪痕、碎羽與岩面裂紋來判斷巡邏方向，也能 search 石堆、舊烽臺或玻礦尋找事件線索。若隊伍無視雲橋搖晃、突發落雷與空中獵手的影子，很容易被雷鷹、飛龍和風暴龍影逼到懸崖邊；穩定推進則能逐步掌握通往風暴核心的安全節奏，並保留回到入口的撤退路線。',
    exits: [
      { direction: 'east', targetRoomId: 'storm_highlands_windcut_path', description: '風切小徑通往高原' },
      { direction: 'north', targetRoomId: 'storm_highlands_rain_shelf', description: '雨棚岩臺通往北側' },
    ],
    monsters: [
      { monsterId: 'wind_hawk', maxCount: 2, respawnSeconds: 80 },
    ],
    mapSymbol: '[門]',
    mapX: 0,
    mapY: 0,
    guardianHints: {
      creature: '峭壁入口的風聲若忽然變尖，空中獵手或風暴龍影通常正在接近。',
      treasure: '峭壁入口的碎羽、玻化岩或舊祭紋旁可能藏著高原事件線索。',
      spirit: '峭壁入口保留著風暴高原被風神祭壇與雷雲長年塑形的記憶。',
    },
  },

  storm_highlands_windcut_path: {
    id: 'storm_highlands_windcut_path',
    name: '風切小徑',
    zone: 'storm_highlands' as RoomDef['zone'],
    image: 'storm_highlands_windcut_path.png',
    imagePrompt: '風切小徑 in storm_highlands, windswept mountain highlands above clouds, lightning storm, ancient wind altar ruins, griffin nests, sheer cliffs, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text',
    description:
      '風切小徑位於風暴高原被暴風切割的峭壁與雲海之間，腳下是濕滑岩階、斷裂纜索、羽骨與被雷火燒黑的舊祭紋。這裡是高階隊伍穿越高原的路線節點，不只提供戰鬥遭遇，也提示風神祭壇、獅鷲巢穴、暴風眼與世界王峰之間的關係。玩家可以 inspect 風向、爪痕、碎羽與岩面裂紋來判斷巡邏方向，也能 search 石堆、舊烽臺或玻礦尋找事件線索。若隊伍無視雲橋搖晃、突發落雷與空中獵手的影子，很容易被雷鷹、飛龍和風暴龍影逼到懸崖邊；穩定推進則能逐步掌握通往風暴核心的安全節奏，並保留回到入口的撤退路線。',
    exits: [
      { direction: 'west', targetRoomId: 'storm_highlands_cliff_gate', description: '小徑回到峭壁入口' },
      { direction: 'east', targetRoomId: 'storm_highlands_goat_ledge', description: '碎石路通往山羊岩階' },
      { direction: 'north', targetRoomId: 'storm_highlands_cloud_bridge', description: '雲橋纜索通往高空' },
    ],
    monsters: [
      { monsterId: 'wind_hawk', maxCount: 3, respawnSeconds: 80 },
    ],
    mapSymbol: '[徑]',
    mapX: 1,
    mapY: 0,
    guardianHints: {
      creature: '風切小徑的風聲若忽然變尖，空中獵手或風暴龍影通常正在接近。',
      treasure: '風切小徑的碎羽、玻化岩或舊祭紋旁可能藏著高原事件線索。',
      spirit: '風切小徑保留著風暴高原被風神祭壇與雷雲長年塑形的記憶。',
    },
  },

  storm_highlands_rain_shelf: {
    id: 'storm_highlands_rain_shelf',
    name: '雨棚岩臺',
    zone: 'storm_highlands' as RoomDef['zone'],
    image: 'storm_highlands_rain_shelf.png',
    imagePrompt: '雨棚岩臺 in storm_highlands, windswept mountain highlands above clouds, lightning storm, ancient wind altar ruins, griffin nests, sheer cliffs, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text',
    description:
      '雨棚岩臺位於風暴高原被暴風切割的峭壁與雲海之間，腳下是濕滑岩階、斷裂纜索、羽骨與被雷火燒黑的舊祭紋。這裡是高階隊伍穿越高原的路線節點，不只提供戰鬥遭遇，也提示風神祭壇、獅鷲巢穴、暴風眼與世界王峰之間的關係。玩家可以 inspect 風向、爪痕、碎羽與岩面裂紋來判斷巡邏方向，也能 search 石堆、舊烽臺或玻礦尋找事件線索。若隊伍無視雲橋搖晃、突發落雷與空中獵手的影子，很容易被雷鷹、飛龍和風暴龍影逼到懸崖邊；穩定推進則能逐步掌握通往風暴核心的安全節奏，並保留回到入口的撤退路線。',
    exits: [
      { direction: 'south', targetRoomId: 'storm_highlands_cliff_gate', description: '雨幕回到峭壁入口' },
      { direction: 'east', targetRoomId: 'storm_highlands_cloud_bridge', description: '濕岩路通往雲橋' },
    ],
    monsters: [
      { monsterId: 'thunder_eagle', maxCount: 1, respawnSeconds: 120 },
      { monsterId: 'wind_hawk', maxCount: 2, respawnSeconds: 80 },
    ],
    mapSymbol: '[雨]',
    mapX: 0,
    mapY: 1,
    guardianHints: {
      creature: '雨棚岩臺的風聲若忽然變尖，空中獵手或風暴龍影通常正在接近。',
      treasure: '雨棚岩臺的碎羽、玻化岩或舊祭紋旁可能藏著高原事件線索。',
      spirit: '雨棚岩臺保留著風暴高原被風神祭壇與雷雲長年塑形的記憶。',
    },
  },

  storm_highlands_cloud_bridge: {
    id: 'storm_highlands_cloud_bridge',
    name: '雲索橋',
    zone: 'storm_highlands' as RoomDef['zone'],
    image: 'storm_highlands_cloud_bridge.png',
    imagePrompt: '雲索橋 in storm_highlands, windswept mountain highlands above clouds, lightning storm, ancient wind altar ruins, griffin nests, sheer cliffs, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text',
    description:
      '雲索橋位於風暴高原被暴風切割的峭壁與雲海之間，腳下是濕滑岩階、斷裂纜索、羽骨與被雷火燒黑的舊祭紋。這裡是高階隊伍穿越高原的路線節點，不只提供戰鬥遭遇，也提示風神祭壇、獅鷲巢穴、暴風眼與世界王峰之間的關係。玩家可以 inspect 風向、爪痕、碎羽與岩面裂紋來判斷巡邏方向，也能 search 石堆、舊烽臺或玻礦尋找事件線索。若隊伍無視雲橋搖晃、突發落雷與空中獵手的影子，很容易被雷鷹、飛龍和風暴龍影逼到懸崖邊；穩定推進則能逐步掌握通往風暴核心的安全節奏，並保留回到入口的撤退路線。',
    exits: [
      { direction: 'south', targetRoomId: 'storm_highlands_windcut_path', description: '纜索回到風切小徑' },
      { direction: 'west', targetRoomId: 'storm_highlands_rain_shelf', description: '濕岩路回到雨棚岩臺' },
      { direction: 'east', targetRoomId: 'storm_highlands_griffin_watch', description: '橋端通往獅鷲哨臺' },
    ],
    monsters: [
      { monsterId: 'thunder_eagle', maxCount: 2, respawnSeconds: 120 },
    ],
    mapSymbol: '[橋]',
    mapX: 1,
    mapY: 1,
    guardianHints: {
      creature: '雲索橋的風聲若忽然變尖，空中獵手或風暴龍影通常正在接近。',
      treasure: '雲索橋的碎羽、玻化岩或舊祭紋旁可能藏著高原事件線索。',
      spirit: '雲索橋保留著風暴高原被風神祭壇與雷雲長年塑形的記憶。',
    },
  },

  storm_highlands_goat_ledge: {
    id: 'storm_highlands_goat_ledge',
    name: '山羊岩階',
    zone: 'storm_highlands' as RoomDef['zone'],
    image: 'storm_highlands_goat_ledge.png',
    imagePrompt: '山羊岩階 in storm_highlands, windswept mountain highlands above clouds, lightning storm, ancient wind altar ruins, griffin nests, sheer cliffs, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text',
    description:
      '山羊岩階位於風暴高原被暴風切割的峭壁與雲海之間，腳下是濕滑岩階、斷裂纜索、羽骨與被雷火燒黑的舊祭紋。這裡是高階隊伍穿越高原的路線節點，不只提供戰鬥遭遇，也提示風神祭壇、獅鷲巢穴、暴風眼與世界王峰之間的關係。玩家可以 inspect 風向、爪痕、碎羽與岩面裂紋來判斷巡邏方向，也能 search 石堆、舊烽臺或玻礦尋找事件線索。若隊伍無視雲橋搖晃、突發落雷與空中獵手的影子，很容易被雷鷹、飛龍和風暴龍影逼到懸崖邊；穩定推進則能逐步掌握通往風暴核心的安全節奏，並保留回到入口的撤退路線。',
    exits: [
      { direction: 'west', targetRoomId: 'storm_highlands_windcut_path', description: '碎石路回到風切小徑' },
      { direction: 'east', targetRoomId: 'storm_highlands_thunder_pool', description: '凹岩路通往雷雨池' },
      { direction: 'south', targetRoomId: 'storm_highlands_basalt_spine', description: '黑岩脊向南延伸' },
    ],
    monsters: [
      { monsterId: 'rock_giant', maxCount: 1, respawnSeconds: 160 },
      { monsterId: 'wind_hawk', maxCount: 2, respawnSeconds: 80 },
    ],
    mapSymbol: '[階]',
    mapX: 2,
    mapY: 0,
    guardianHints: {
      creature: '山羊岩階的風聲若忽然變尖，空中獵手或風暴龍影通常正在接近。',
      treasure: '山羊岩階的碎羽、玻化岩或舊祭紋旁可能藏著高原事件線索。',
      spirit: '山羊岩階保留著風暴高原被風神祭壇與雷雲長年塑形的記憶。',
    },
  },

  storm_highlands_griffin_watch: {
    id: 'storm_highlands_griffin_watch',
    name: '獅鷲哨臺',
    zone: 'storm_highlands' as RoomDef['zone'],
    image: 'storm_highlands_griffin_watch.png',
    imagePrompt: '獅鷲哨臺 in storm_highlands, windswept mountain highlands above clouds, lightning storm, ancient wind altar ruins, griffin nests, sheer cliffs, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text',
    description:
      '獅鷲哨臺位於風暴高原被暴風切割的峭壁與雲海之間，腳下是濕滑岩階、斷裂纜索、羽骨與被雷火燒黑的舊祭紋。這裡是高階隊伍穿越高原的路線節點，不只提供戰鬥遭遇，也提示風神祭壇、獅鷲巢穴、暴風眼與世界王峰之間的關係。玩家可以 inspect 風向、爪痕、碎羽與岩面裂紋來判斷巡邏方向，也能 search 石堆、舊烽臺或玻礦尋找事件線索。若隊伍無視雲橋搖晃、突發落雷與空中獵手的影子，很容易被雷鷹、飛龍和風暴龍影逼到懸崖邊；穩定推進則能逐步掌握通往風暴核心的安全節奏，並保留回到入口的撤退路線。',
    exits: [
      { direction: 'west', targetRoomId: 'storm_highlands_cloud_bridge', description: '橋端回到雲索橋' },
      { direction: 'east', targetRoomId: 'storm_highlands_eagle_scarp', description: '羽痕通往雷鷹崖' },
      { direction: 'south', targetRoomId: 'storm_highlands_thunder_pool', description: '哨臺階梯落向雷雨池' },
    ],
    monsters: [
      { monsterId: 'thunder_eagle', maxCount: 2, respawnSeconds: 120 },
      { monsterId: 'wyvern', maxCount: 1, respawnSeconds: 180 },
    ],
    mapSymbol: '[哨]',
    mapX: 2,
    mapY: 1,
    guardianHints: {
      creature: '獅鷲哨臺的風聲若忽然變尖，空中獵手或風暴龍影通常正在接近。',
      treasure: '獅鷲哨臺的碎羽、玻化岩或舊祭紋旁可能藏著高原事件線索。',
      spirit: '獅鷲哨臺保留著風暴高原被風神祭壇與雷雲長年塑形的記憶。',
    },
  },

  storm_highlands_thunder_pool: {
    id: 'storm_highlands_thunder_pool',
    name: '雷雨池',
    zone: 'storm_highlands' as RoomDef['zone'],
    image: 'storm_highlands_thunder_pool.png',
    imagePrompt: '雷雨池 in storm_highlands, windswept mountain highlands above clouds, lightning storm, ancient wind altar ruins, griffin nests, sheer cliffs, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text',
    description:
      '雷雨池位於風暴高原被暴風切割的峭壁與雲海之間，腳下是濕滑岩階、斷裂纜索、羽骨與被雷火燒黑的舊祭紋。這裡是高階隊伍穿越高原的路線節點，不只提供戰鬥遭遇，也提示風神祭壇、獅鷲巢穴、暴風眼與世界王峰之間的關係。玩家可以 inspect 風向、爪痕、碎羽與岩面裂紋來判斷巡邏方向，也能 search 石堆、舊烽臺或玻礦尋找事件線索。若隊伍無視雲橋搖晃、突發落雷與空中獵手的影子，很容易被雷鷹、飛龍和風暴龍影逼到懸崖邊；穩定推進則能逐步掌握通往風暴核心的安全節奏，並保留回到入口的撤退路線。',
    exits: [
      { direction: 'west', targetRoomId: 'storm_highlands_goat_ledge', description: '凹岩路回到山羊岩階' },
      { direction: 'north', targetRoomId: 'storm_highlands_griffin_watch', description: '階梯回到獅鷲哨臺' },
      { direction: 'east', targetRoomId: 'storm_highlands_old_windmill', description: '水渠通往舊風車' },
    ],
    monsters: [
      { monsterId: 'thunder_eagle', maxCount: 1, respawnSeconds: 120 },
      { monsterId: 'storm_dragon', maxCount: 1, respawnSeconds: 1800 },
    ],
    mapSymbol: '[池]',
    mapX: 3,
    mapY: 0,
    guardianHints: {
      creature: '雷雨池的風聲若忽然變尖，空中獵手或風暴龍影通常正在接近。',
      treasure: '雷雨池的碎羽、玻化岩或舊祭紋旁可能藏著高原事件線索。',
      spirit: '雷雨池保留著風暴高原被風神祭壇與雷雲長年塑形的記憶。',
    },
  },

  storm_highlands_basalt_spine: {
    id: 'storm_highlands_basalt_spine',
    name: '玄武岩脊',
    zone: 'storm_highlands' as RoomDef['zone'],
    image: 'storm_highlands_basalt_spine.png',
    imagePrompt: '玄武岩脊 in storm_highlands, windswept mountain highlands above clouds, lightning storm, ancient wind altar ruins, griffin nests, sheer cliffs, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text',
    description:
      '玄武岩脊位於風暴高原被暴風切割的峭壁與雲海之間，腳下是濕滑岩階、斷裂纜索、羽骨與被雷火燒黑的舊祭紋。這裡是高階隊伍穿越高原的路線節點，不只提供戰鬥遭遇，也提示風神祭壇、獅鷲巢穴、暴風眼與世界王峰之間的關係。玩家可以 inspect 風向、爪痕、碎羽與岩面裂紋來判斷巡邏方向，也能 search 石堆、舊烽臺或玻礦尋找事件線索。若隊伍無視雲橋搖晃、突發落雷與空中獵手的影子，很容易被雷鷹、飛龍和風暴龍影逼到懸崖邊；穩定推進則能逐步掌握通往風暴核心的安全節奏，並保留回到入口的撤退路線。',
    exits: [
      { direction: 'north', targetRoomId: 'storm_highlands_goat_ledge', description: '黑岩脊回到山羊岩階' },
      { direction: 'east', targetRoomId: 'storm_highlands_screaming_gully', description: '裂隙通往嘯風谷' },
    ],
    monsters: [
      { monsterId: 'rock_giant', maxCount: 2, respawnSeconds: 160 },
    ],
    mapSymbol: '[脊]',
    mapX: 2,
    mapY: -1,
    guardianHints: {
      creature: '玄武岩脊的風聲若忽然變尖，空中獵手或風暴龍影通常正在接近。',
      treasure: '玄武岩脊的碎羽、玻化岩或舊祭紋旁可能藏著高原事件線索。',
      spirit: '玄武岩脊保留著風暴高原被風神祭壇與雷雲長年塑形的記憶。',
    },
  },

  storm_highlands_eagle_scarp: {
    id: 'storm_highlands_eagle_scarp',
    name: '雷鷹崖',
    zone: 'storm_highlands' as RoomDef['zone'],
    image: 'storm_highlands_eagle_scarp.png',
    imagePrompt: '雷鷹崖 in storm_highlands, windswept mountain highlands above clouds, lightning storm, ancient wind altar ruins, griffin nests, sheer cliffs, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text',
    description:
      '雷鷹崖位於風暴高原被暴風切割的峭壁與雲海之間，腳下是濕滑岩階、斷裂纜索、羽骨與被雷火燒黑的舊祭紋。這裡是高階隊伍穿越高原的路線節點，不只提供戰鬥遭遇，也提示風神祭壇、獅鷲巢穴、暴風眼與世界王峰之間的關係。玩家可以 inspect 風向、爪痕、碎羽與岩面裂紋來判斷巡邏方向，也能 search 石堆、舊烽臺或玻礦尋找事件線索。若隊伍無視雲橋搖晃、突發落雷與空中獵手的影子，很容易被雷鷹、飛龍和風暴龍影逼到懸崖邊；穩定推進則能逐步掌握通往風暴核心的安全節奏，並保留回到入口的撤退路線。',
    exits: [
      { direction: 'west', targetRoomId: 'storm_highlands_griffin_watch', description: '羽痕回到獅鷲哨臺' },
      { direction: 'east', targetRoomId: 'storm_highlands_nest_pillars', description: '巢柱通往高處' },
      { direction: 'south', targetRoomId: 'storm_highlands_old_windmill', description: '崖路落向舊風車' },
    ],
    monsters: [
      { monsterId: 'thunder_eagle', maxCount: 4, respawnSeconds: 120 },
    ],
    mapSymbol: '[鷹]',
    mapX: 3,
    mapY: 1,
    guardianHints: {
      creature: '雷鷹崖的風聲若忽然變尖，空中獵手或風暴龍影通常正在接近。',
      treasure: '雷鷹崖的碎羽、玻化岩或舊祭紋旁可能藏著高原事件線索。',
      spirit: '雷鷹崖保留著風暴高原被風神祭壇與雷雲長年塑形的記憶。',
    },
  },

  storm_highlands_old_windmill: {
    id: 'storm_highlands_old_windmill',
    name: '舊風車臺',
    zone: 'storm_highlands' as RoomDef['zone'],
    image: 'storm_highlands_old_windmill.png',
    imagePrompt: '舊風車臺 in storm_highlands, windswept mountain highlands above clouds, lightning storm, ancient wind altar ruins, griffin nests, sheer cliffs, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text',
    description:
      '舊風車臺位於風暴高原被暴風切割的峭壁與雲海之間，腳下是濕滑岩階、斷裂纜索、羽骨與被雷火燒黑的舊祭紋。這裡是高階隊伍穿越高原的路線節點，不只提供戰鬥遭遇，也提示風神祭壇、獅鷲巢穴、暴風眼與世界王峰之間的關係。玩家可以 inspect 風向、爪痕、碎羽與岩面裂紋來判斷巡邏方向，也能 search 石堆、舊烽臺或玻礦尋找事件線索。若隊伍無視雲橋搖晃、突發落雷與空中獵手的影子，很容易被雷鷹、飛龍和風暴龍影逼到懸崖邊；穩定推進則能逐步掌握通往風暴核心的安全節奏，並保留回到入口的撤退路線。',
    exits: [
      { direction: 'west', targetRoomId: 'storm_highlands_thunder_pool', description: '水渠回到雷雨池' },
      { direction: 'north', targetRoomId: 'storm_highlands_eagle_scarp', description: '崖路回到雷鷹崖' },
      { direction: 'east', targetRoomId: 'storm_highlands_storm_altar', description: '折翼階通往風神祭壇' },
    ],
    monsters: [
      { monsterId: 'wind_hawk', maxCount: 3, respawnSeconds: 80 },
      { monsterId: 'rock_giant', maxCount: 1, respawnSeconds: 160 },
    ],
    mapSymbol: '[車]',
    mapX: 4,
    mapY: 0,
    guardianHints: {
      creature: '舊風車臺的風聲若忽然變尖，空中獵手或風暴龍影通常正在接近。',
      treasure: '舊風車臺的碎羽、玻化岩或舊祭紋旁可能藏著高原事件線索。',
      spirit: '舊風車臺保留著風暴高原被風神祭壇與雷雲長年塑形的記憶。',
    },
  },

  storm_highlands_screaming_gully: {
    id: 'storm_highlands_screaming_gully',
    name: '嘯風谷',
    zone: 'storm_highlands' as RoomDef['zone'],
    image: 'storm_highlands_screaming_gully.png',
    imagePrompt: '嘯風谷 in storm_highlands, windswept mountain highlands above clouds, lightning storm, ancient wind altar ruins, griffin nests, sheer cliffs, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text',
    description:
      '嘯風谷位於風暴高原被暴風切割的峭壁與雲海之間，腳下是濕滑岩階、斷裂纜索、羽骨與被雷火燒黑的舊祭紋。這裡是高階隊伍穿越高原的路線節點，不只提供戰鬥遭遇，也提示風神祭壇、獅鷲巢穴、暴風眼與世界王峰之間的關係。玩家可以 inspect 風向、爪痕、碎羽與岩面裂紋來判斷巡邏方向，也能 search 石堆、舊烽臺或玻礦尋找事件線索。若隊伍無視雲橋搖晃、突發落雷與空中獵手的影子，很容易被雷鷹、飛龍和風暴龍影逼到懸崖邊；穩定推進則能逐步掌握通往風暴核心的安全節奏，並保留回到入口的撤退路線。',
    exits: [
      { direction: 'west', targetRoomId: 'storm_highlands_basalt_spine', description: '裂隙回到玄武岩脊' },
      { direction: 'east', targetRoomId: 'storm_highlands_lightning_tree', description: '風聲通往雷擊枯樹' },
      { direction: 'north', targetRoomId: 'storm_highlands_old_windmill', description: '斜坡回到舊風車臺' },
    ],
    monsters: [
      { monsterId: 'wind_hawk', maxCount: 2, respawnSeconds: 80 },
      { monsterId: 'wyvern', maxCount: 1, respawnSeconds: 180 },
    ],
    mapSymbol: '[谷]',
    mapX: 3,
    mapY: -1,
    guardianHints: {
      creature: '嘯風谷的風聲若忽然變尖，空中獵手或風暴龍影通常正在接近。',
      treasure: '嘯風谷的碎羽、玻化岩或舊祭紋旁可能藏著高原事件線索。',
      spirit: '嘯風谷保留著風暴高原被風神祭壇與雷雲長年塑形的記憶。',
    },
  },

  storm_highlands_nest_pillars: {
    id: 'storm_highlands_nest_pillars',
    name: '高巢石柱',
    zone: 'storm_highlands' as RoomDef['zone'],
    image: 'storm_highlands_nest_pillars.png',
    imagePrompt: '高巢石柱 in storm_highlands, windswept mountain highlands above clouds, lightning storm, ancient wind altar ruins, griffin nests, sheer cliffs, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text',
    description:
      '高巢石柱位於風暴高原被暴風切割的峭壁與雲海之間，腳下是濕滑岩階、斷裂纜索、羽骨與被雷火燒黑的舊祭紋。這裡是高階隊伍穿越高原的路線節點，不只提供戰鬥遭遇，也提示風神祭壇、獅鷲巢穴、暴風眼與世界王峰之間的關係。玩家可以 inspect 風向、爪痕、碎羽與岩面裂紋來判斷巡邏方向，也能 search 石堆、舊烽臺或玻礦尋找事件線索。若隊伍無視雲橋搖晃、突發落雷與空中獵手的影子，很容易被雷鷹、飛龍和風暴龍影逼到懸崖邊；穩定推進則能逐步掌握通往風暴核心的安全節奏，並保留回到入口的撤退路線。',
    exits: [
      { direction: 'west', targetRoomId: 'storm_highlands_eagle_scarp', description: '巢柱回到雷鷹崖' },
      { direction: 'east', targetRoomId: 'storm_highlands_sky_cairns', description: '石堆路通往天葬石堆' },
    ],
    monsters: [
      { monsterId: 'thunder_eagle', maxCount: 3, respawnSeconds: 120 },
      { monsterId: 'wyvern', maxCount: 1, respawnSeconds: 180 },
    ],
    mapSymbol: '[巢]',
    mapX: 4,
    mapY: 1,
    guardianHints: {
      creature: '高巢石柱的風聲若忽然變尖，空中獵手或風暴龍影通常正在接近。',
      treasure: '高巢石柱的碎羽、玻化岩或舊祭紋旁可能藏著高原事件線索。',
      spirit: '高巢石柱保留著風暴高原被風神祭壇與雷雲長年塑形的記憶。',
    },
  },

  storm_highlands_storm_altar: {
    id: 'storm_highlands_storm_altar',
    name: '風神祭壇',
    zone: 'storm_highlands' as RoomDef['zone'],
    image: 'storm_highlands_storm_altar.png',
    imagePrompt: '風神祭壇 in storm_highlands, windswept mountain highlands above clouds, lightning storm, ancient wind altar ruins, griffin nests, sheer cliffs, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text',
    description:
      '風神祭壇位於風暴高原被暴風切割的峭壁與雲海之間，腳下是濕滑岩階、斷裂纜索、羽骨與被雷火燒黑的舊祭紋。這裡是高階隊伍穿越高原的路線節點，不只提供戰鬥遭遇，也提示風神祭壇、獅鷲巢穴、暴風眼與世界王峰之間的關係。玩家可以 inspect 風向、爪痕、碎羽與岩面裂紋來判斷巡邏方向，也能 search 石堆、舊烽臺或玻礦尋找事件線索。若隊伍無視雲橋搖晃、突發落雷與空中獵手的影子，很容易被雷鷹、飛龍和風暴龍影逼到懸崖邊；穩定推進則能逐步掌握通往風暴核心的安全節奏，並保留回到入口的撤退路線。',
    exits: [
      { direction: 'west', targetRoomId: 'storm_highlands_old_windmill', description: '折翼階回到舊風車臺' },
      { direction: 'north', targetRoomId: 'storm_highlands_sky_cairns', description: '祭階升向天葬石堆' },
      { direction: 'east', targetRoomId: 'storm_highlands_eye_of_gale', description: '祭紋通往暴風眼' },
    ],
    monsters: [
      { monsterId: 'storm_dragon', maxCount: 1, respawnSeconds: 1800 },
      { monsterId: 'thunder_eagle', maxCount: 2, respawnSeconds: 120 },
    ],
    mapSymbol: '[壇]',
    mapX: 5,
    mapY: 0,
    guardianHints: {
      creature: '風神祭壇的風聲若忽然變尖，空中獵手或風暴龍影通常正在接近。',
      treasure: '風神祭壇的碎羽、玻化岩或舊祭紋旁可能藏著高原事件線索。',
      spirit: '風神祭壇保留著風暴高原被風神祭壇與雷雲長年塑形的記憶。',
    },
  },

  storm_highlands_lightning_tree: {
    id: 'storm_highlands_lightning_tree',
    name: '雷擊枯樹',
    zone: 'storm_highlands' as RoomDef['zone'],
    image: 'storm_highlands_lightning_tree.png',
    imagePrompt: '雷擊枯樹 in storm_highlands, windswept mountain highlands above clouds, lightning storm, ancient wind altar ruins, griffin nests, sheer cliffs, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text',
    description:
      '雷擊枯樹位於風暴高原被暴風切割的峭壁與雲海之間，腳下是濕滑岩階、斷裂纜索、羽骨與被雷火燒黑的舊祭紋。這裡是高階隊伍穿越高原的路線節點，不只提供戰鬥遭遇，也提示風神祭壇、獅鷲巢穴、暴風眼與世界王峰之間的關係。玩家可以 inspect 風向、爪痕、碎羽與岩面裂紋來判斷巡邏方向，也能 search 石堆、舊烽臺或玻礦尋找事件線索。若隊伍無視雲橋搖晃、突發落雷與空中獵手的影子，很容易被雷鷹、飛龍和風暴龍影逼到懸崖邊；穩定推進則能逐步掌握通往風暴核心的安全節奏，並保留回到入口的撤退路線。',
    exits: [
      { direction: 'west', targetRoomId: 'storm_highlands_screaming_gully', description: '風聲回到嘯風谷' },
      { direction: 'east', targetRoomId: 'storm_highlands_broken_beacon', description: '焦木路通往斷烽臺' },
    ],
    monsters: [
      { monsterId: 'thunder_eagle', maxCount: 2, respawnSeconds: 120 },
      { monsterId: 'rock_giant', maxCount: 1, respawnSeconds: 160 },
    ],
    mapSymbol: '[樹]',
    mapX: 4,
    mapY: -1,
    guardianHints: {
      creature: '雷擊枯樹的風聲若忽然變尖，空中獵手或風暴龍影通常正在接近。',
      treasure: '雷擊枯樹的碎羽、玻化岩或舊祭紋旁可能藏著高原事件線索。',
      spirit: '雷擊枯樹保留著風暴高原被風神祭壇與雷雲長年塑形的記憶。',
    },
  },

  storm_highlands_sky_cairns: {
    id: 'storm_highlands_sky_cairns',
    name: '天葬石堆',
    zone: 'storm_highlands' as RoomDef['zone'],
    image: 'storm_highlands_sky_cairns.png',
    imagePrompt: '天葬石堆 in storm_highlands, windswept mountain highlands above clouds, lightning storm, ancient wind altar ruins, griffin nests, sheer cliffs, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text',
    description:
      '天葬石堆位於風暴高原被暴風切割的峭壁與雲海之間，腳下是濕滑岩階、斷裂纜索、羽骨與被雷火燒黑的舊祭紋。這裡是高階隊伍穿越高原的路線節點，不只提供戰鬥遭遇，也提示風神祭壇、獅鷲巢穴、暴風眼與世界王峰之間的關係。玩家可以 inspect 風向、爪痕、碎羽與岩面裂紋來判斷巡邏方向，也能 search 石堆、舊烽臺或玻礦尋找事件線索。若隊伍無視雲橋搖晃、突發落雷與空中獵手的影子，很容易被雷鷹、飛龍和風暴龍影逼到懸崖邊；穩定推進則能逐步掌握通往風暴核心的安全節奏，並保留回到入口的撤退路線。',
    exits: [
      { direction: 'west', targetRoomId: 'storm_highlands_nest_pillars', description: '石堆路回到高巢石柱' },
      { direction: 'south', targetRoomId: 'storm_highlands_storm_altar', description: '祭階回到風神祭壇' },
      { direction: 'east', targetRoomId: 'storm_highlands_griffin_aerie', description: '羽骨路通往獅鷲巢臺' },
    ],
    monsters: [
      { monsterId: 'wyvern', maxCount: 2, respawnSeconds: 180 },
      { monsterId: 'thunder_eagle', maxCount: 2, respawnSeconds: 120 },
    ],
    mapSymbol: '[葬]',
    mapX: 5,
    mapY: 1,
    guardianHints: {
      creature: '天葬石堆的風聲若忽然變尖，空中獵手或風暴龍影通常正在接近。',
      treasure: '天葬石堆的碎羽、玻化岩或舊祭紋旁可能藏著高原事件線索。',
      spirit: '天葬石堆保留著風暴高原被風神祭壇與雷雲長年塑形的記憶。',
    },
  },

  storm_highlands_broken_beacon: {
    id: 'storm_highlands_broken_beacon',
    name: '斷烽臺',
    zone: 'storm_highlands' as RoomDef['zone'],
    image: 'storm_highlands_broken_beacon.png',
    imagePrompt: '斷烽臺 in storm_highlands, windswept mountain highlands above clouds, lightning storm, ancient wind altar ruins, griffin nests, sheer cliffs, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text',
    description:
      '斷烽臺位於風暴高原被暴風切割的峭壁與雲海之間，腳下是濕滑岩階、斷裂纜索、羽骨與被雷火燒黑的舊祭紋。這裡是高階隊伍穿越高原的路線節點，不只提供戰鬥遭遇，也提示風神祭壇、獅鷲巢穴、暴風眼與世界王峰之間的關係。玩家可以 inspect 風向、爪痕、碎羽與岩面裂紋來判斷巡邏方向，也能 search 石堆、舊烽臺或玻礦尋找事件線索。若隊伍無視雲橋搖晃、突發落雷與空中獵手的影子，很容易被雷鷹、飛龍和風暴龍影逼到懸崖邊；穩定推進則能逐步掌握通往風暴核心的安全節奏，並保留回到入口的撤退路線。',
    exits: [
      { direction: 'west', targetRoomId: 'storm_highlands_lightning_tree', description: '焦木路回到雷擊枯樹' },
      { direction: 'east', targetRoomId: 'storm_highlands_stormglass_mine', description: '碎光路通往風暴玻礦' },
      { direction: 'north', targetRoomId: 'storm_highlands_eye_of_gale', description: '烽臺階升向暴風眼' },
    ],
    monsters: [
      { monsterId: 'rock_giant', maxCount: 1, respawnSeconds: 160 },
      { monsterId: 'wind_hawk', maxCount: 3, respawnSeconds: 80 },
    ],
    mapSymbol: '[烽]',
    mapX: 5,
    mapY: -1,
    guardianHints: {
      creature: '斷烽臺的風聲若忽然變尖，空中獵手或風暴龍影通常正在接近。',
      treasure: '斷烽臺的碎羽、玻化岩或舊祭紋旁可能藏著高原事件線索。',
      spirit: '斷烽臺保留著風暴高原被風神祭壇與雷雲長年塑形的記憶。',
    },
  },

  storm_highlands_eye_of_gale: {
    id: 'storm_highlands_eye_of_gale',
    name: '暴風眼',
    zone: 'storm_highlands' as RoomDef['zone'],
    image: 'storm_highlands_eye_of_gale.png',
    imagePrompt: '暴風眼 in storm_highlands, windswept mountain highlands above clouds, lightning storm, ancient wind altar ruins, griffin nests, sheer cliffs, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text',
    description:
      '暴風眼位於風暴高原被暴風切割的峭壁與雲海之間，腳下是濕滑岩階、斷裂纜索、羽骨與被雷火燒黑的舊祭紋。這裡是高階隊伍穿越高原的路線節點，不只提供戰鬥遭遇，也提示風神祭壇、獅鷲巢穴、暴風眼與世界王峰之間的關係。玩家可以 inspect 風向、爪痕、碎羽與岩面裂紋來判斷巡邏方向，也能 search 石堆、舊烽臺或玻礦尋找事件線索。若隊伍無視雲橋搖晃、突發落雷與空中獵手的影子，很容易被雷鷹、飛龍和風暴龍影逼到懸崖邊；穩定推進則能逐步掌握通往風暴核心的安全節奏，並保留回到入口的撤退路線。',
    exits: [
      { direction: 'west', targetRoomId: 'storm_highlands_storm_altar', description: '祭紋回到風神祭壇' },
      { direction: 'south', targetRoomId: 'storm_highlands_broken_beacon', description: '烽臺階回到斷烽臺' },
      { direction: 'east', targetRoomId: 'storm_highlands_worldboss_peak', description: '風牆裂口通往風暴王峰' },
    ],
    monsters: [
      { monsterId: 'storm_dragon', maxCount: 1, respawnSeconds: 1800 },
      { monsterId: 'wyvern', maxCount: 2, respawnSeconds: 180 },
    ],
    mapSymbol: '[眼]',
    mapX: 6,
    mapY: 0,
    guardianHints: {
      creature: '暴風眼的風聲若忽然變尖，空中獵手或風暴龍影通常正在接近。',
      treasure: '暴風眼的碎羽、玻化岩或舊祭紋旁可能藏著高原事件線索。',
      spirit: '暴風眼保留著風暴高原被風神祭壇與雷雲長年塑形的記憶。',
    },
  },

  storm_highlands_griffin_aerie: {
    id: 'storm_highlands_griffin_aerie',
    name: '獅鷲巢臺',
    zone: 'storm_highlands' as RoomDef['zone'],
    image: 'storm_highlands_griffin_aerie.png',
    imagePrompt: '獅鷲巢臺 in storm_highlands, windswept mountain highlands above clouds, lightning storm, ancient wind altar ruins, griffin nests, sheer cliffs, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text',
    description:
      '獅鷲巢臺位於風暴高原被暴風切割的峭壁與雲海之間，腳下是濕滑岩階、斷裂纜索、羽骨與被雷火燒黑的舊祭紋。這裡是高階隊伍穿越高原的路線節點，不只提供戰鬥遭遇，也提示風神祭壇、獅鷲巢穴、暴風眼與世界王峰之間的關係。玩家可以 inspect 風向、爪痕、碎羽與岩面裂紋來判斷巡邏方向，也能 search 石堆、舊烽臺或玻礦尋找事件線索。若隊伍無視雲橋搖晃、突發落雷與空中獵手的影子，很容易被雷鷹、飛龍和風暴龍影逼到懸崖邊；穩定推進則能逐步掌握通往風暴核心的安全節奏，並保留回到入口的撤退路線。',
    exits: [
      { direction: 'west', targetRoomId: 'storm_highlands_sky_cairns', description: '羽骨路回到天葬石堆' },
      { direction: 'south', targetRoomId: 'storm_highlands_worldboss_peak', description: '巢臺風道通往風暴王峰' },
    ],
    monsters: [
      { monsterId: 'wyvern', maxCount: 2, respawnSeconds: 180 },
      { monsterId: 'thunder_eagle', maxCount: 3, respawnSeconds: 120 },
    ],
    mapSymbol: '[獅]',
    mapX: 6,
    mapY: 1,
    guardianHints: {
      creature: '獅鷲巢臺的風聲若忽然變尖，空中獵手或風暴龍影通常正在接近。',
      treasure: '獅鷲巢臺的碎羽、玻化岩或舊祭紋旁可能藏著高原事件線索。',
      spirit: '獅鷲巢臺保留著風暴高原被風神祭壇與雷雲長年塑形的記憶。',
    },
  },

  storm_highlands_stormglass_mine: {
    id: 'storm_highlands_stormglass_mine',
    name: '風暴玻礦',
    zone: 'storm_highlands' as RoomDef['zone'],
    image: 'storm_highlands_stormglass_mine.png',
    imagePrompt: '風暴玻礦 in storm_highlands, windswept mountain highlands above clouds, lightning storm, ancient wind altar ruins, griffin nests, sheer cliffs, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text',
    description:
      '風暴玻礦位於風暴高原被暴風切割的峭壁與雲海之間，腳下是濕滑岩階、斷裂纜索、羽骨與被雷火燒黑的舊祭紋。這裡是高階隊伍穿越高原的路線節點，不只提供戰鬥遭遇，也提示風神祭壇、獅鷲巢穴、暴風眼與世界王峰之間的關係。玩家可以 inspect 風向、爪痕、碎羽與岩面裂紋來判斷巡邏方向，也能 search 石堆、舊烽臺或玻礦尋找事件線索。若隊伍無視雲橋搖晃、突發落雷與空中獵手的影子，很容易被雷鷹、飛龍和風暴龍影逼到懸崖邊；穩定推進則能逐步掌握通往風暴核心的安全節奏，並保留回到入口的撤退路線。',
    exits: [
      { direction: 'west', targetRoomId: 'storm_highlands_broken_beacon', description: '碎光路回到斷烽臺' },
      { direction: 'north', targetRoomId: 'storm_highlands_worldboss_peak', description: '礦脈斜坡通往風暴王峰' },
    ],
    monsters: [
      { monsterId: 'rock_giant', maxCount: 2, respawnSeconds: 160 },
      { monsterId: 'storm_dragon', maxCount: 1, respawnSeconds: 1800 },
    ],
    mapSymbol: '[礦]',
    mapX: 6,
    mapY: -1,
    guardianHints: {
      creature: '風暴玻礦的風聲若忽然變尖，空中獵手或風暴龍影通常正在接近。',
      treasure: '風暴玻礦的碎羽、玻化岩或舊祭紋旁可能藏著高原事件線索。',
      spirit: '風暴玻礦保留著風暴高原被風神祭壇與雷雲長年塑形的記憶。',
    },
  },

  storm_highlands_worldboss_peak: {
    id: 'storm_highlands_worldboss_peak',
    name: '風暴王峰',
    zone: 'storm_highlands' as RoomDef['zone'],
    image: 'storm_highlands_worldboss_peak.png',
    imagePrompt: '風暴王峰 in storm_highlands, windswept mountain highlands above clouds, lightning storm, ancient wind altar ruins, griffin nests, sheer cliffs, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text',
    description:
      '風暴王峰位於風暴高原被暴風切割的峭壁與雲海之間，腳下是濕滑岩階、斷裂纜索、羽骨與被雷火燒黑的舊祭紋。這裡是高階隊伍穿越高原的路線節點，不只提供戰鬥遭遇，也提示風神祭壇、獅鷲巢穴、暴風眼與世界王峰之間的關係。玩家可以 inspect 風向、爪痕、碎羽與岩面裂紋來判斷巡邏方向，也能 search 石堆、舊烽臺或玻礦尋找事件線索。若隊伍無視雲橋搖晃、突發落雷與空中獵手的影子，很容易被雷鷹、飛龍和風暴龍影逼到懸崖邊；穩定推進則能逐步掌握通往風暴核心的安全節奏，並保留回到入口的撤退路線。',
    exits: [
      { direction: 'west', targetRoomId: 'storm_highlands_eye_of_gale', description: '風牆裂口回到暴風眼' },
      { direction: 'north', targetRoomId: 'storm_highlands_griffin_aerie', description: '巢臺風道回到獅鷲巢臺' },
      { direction: 'south', targetRoomId: 'storm_highlands_stormglass_mine', description: '礦脈斜坡回到風暴玻礦' },
    ],
    monsters: [
      { monsterId: 'storm_dragon', maxCount: 1, respawnSeconds: 1800 },
      { monsterId: 'wyvern', maxCount: 2, respawnSeconds: 180 },
      { monsterId: 'thunder_eagle', maxCount: 3, respawnSeconds: 120 },
    ],
    mapSymbol: '[王]',
    mapX: 7,
    mapY: 0,
    guardianHints: {
      creature: '風暴王峰的風聲若忽然變尖，空中獵手或風暴龍影通常正在接近。',
      treasure: '風暴王峰的碎羽、玻化岩或舊祭紋旁可能藏著高原事件線索。',
      spirit: '風暴王峰保留著風暴高原被風神祭壇與雷雲長年塑形的記憶。',
    },
  },
  blackwood_charcoal_gate: {
    id: 'blackwood_charcoal_gate',
    name: '炭樹入口',
    zone: 'blackwood' as RoomDef['zone'],
    image: 'blackwood_charcoal_gate.png',
    imagePrompt: '炭樹入口 in blackwood, dark charcoal forest with moving black trees, shadowy undergrowth, hunter marks, spider webs, witch lights and ancient roots, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text',
    description:
      '炭樹入口位於黑木林深處，炭黑樹皮吸收火光，枝葉在沒有風時也會緩慢換位，讓路標、獵人刻痕與回程方向變得不可靠。這裡是高階野外與採集路線節點，玩家可以 inspect 樹皮刮痕、蛛絲張力、暗精靈箭孔與黑樹脂流向來判斷危險來源，也能 search 樹根、苔床、倒木和舊祭器尋找草藥、毒蕨、樹脂與任務線索。若隊伍貪快或分散，影狼、森林蜘蛛、黑暗樹人與女巫會利用會移動的樹影切斷視線；若穩定標記路線，則能逐步追到黑心木核與整片森林變異的源頭，並判斷哪些樹影其實正在悄悄封住回程與火光方向。',
    exits: [
      { direction: 'east', targetRoomId: 'blackwood_ash_path', description: '灰徑通往林內' },
      { direction: 'north', targetRoomId: 'blackwood_hunter_marker', description: '獵人刻痕指向北側' },
    ],
    monsters: [
      { monsterId: 'shadow_wolf', maxCount: 2, respawnSeconds: 90 },
    ],
    mapSymbol: '[門]',
    mapX: 0,
    mapY: 0,
    guardianHints: {
      creature: '炭樹入口的樹影若與火光方向相反，附近獵食者通常已經開始包抄。',
      treasure: '炭樹入口的苔床、樹脂裂縫或舊祭器旁可能藏著黑木林採集線索。',
      spirit: '炭樹入口保留著黑木林從普通森林變成會移動陰影迷宮的記憶。',
    },
  },

  blackwood_ash_path: {
    id: 'blackwood_ash_path',
    name: '灰燼小徑',
    zone: 'blackwood' as RoomDef['zone'],
    image: 'blackwood_ash_path.png',
    imagePrompt: '灰燼小徑 in blackwood, dark charcoal forest with moving black trees, shadowy undergrowth, hunter marks, spider webs, witch lights and ancient roots, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text',
    description:
      '灰燼小徑位於黑木林深處，炭黑樹皮吸收火光，枝葉在沒有風時也會緩慢換位，讓路標、獵人刻痕與回程方向變得不可靠。這裡是高階野外與採集路線節點，玩家可以 inspect 樹皮刮痕、蛛絲張力、暗精靈箭孔與黑樹脂流向來判斷危險來源，也能 search 樹根、苔床、倒木和舊祭器尋找草藥、毒蕨、樹脂與任務線索。若隊伍貪快或分散，影狼、森林蜘蛛、黑暗樹人與女巫會利用會移動的樹影切斷視線；若穩定標記路線，則能逐步追到黑心木核與整片森林變異的源頭，並判斷哪些樹影其實正在悄悄封住回程與火光方向。',
    exits: [
      { direction: 'west', targetRoomId: 'blackwood_charcoal_gate', description: '灰徑回到炭樹入口' },
      { direction: 'east', targetRoomId: 'blackwood_moving_copse', description: '樹影通往移動樹叢' },
      { direction: 'south', targetRoomId: 'blackwood_black_moss_bed', description: '苔痕落向黑苔床' },
    ],
    monsters: [
      { monsterId: 'shadow_wolf', maxCount: 2, respawnSeconds: 90 },
      { monsterId: 'forest_spider', maxCount: 1, respawnSeconds: 80 },
    ],
    mapSymbol: '[徑]',
    mapX: 1,
    mapY: 0,
    guardianHints: {
      creature: '灰燼小徑的樹影若與火光方向相反，附近獵食者通常已經開始包抄。',
      treasure: '灰燼小徑的苔床、樹脂裂縫或舊祭器旁可能藏著黑木林採集線索。',
      spirit: '灰燼小徑保留著黑木林從普通森林變成會移動陰影迷宮的記憶。',
    },
  },

  blackwood_hunter_marker: {
    id: 'blackwood_hunter_marker',
    name: '獵人刻痕',
    zone: 'blackwood' as RoomDef['zone'],
    image: 'blackwood_hunter_marker.png',
    imagePrompt: '獵人刻痕 in blackwood, dark charcoal forest with moving black trees, shadowy undergrowth, hunter marks, spider webs, witch lights and ancient roots, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text',
    description:
      '獵人刻痕位於黑木林深處，炭黑樹皮吸收火光，枝葉在沒有風時也會緩慢換位，讓路標、獵人刻痕與回程方向變得不可靠。這裡是高階野外與採集路線節點，玩家可以 inspect 樹皮刮痕、蛛絲張力、暗精靈箭孔與黑樹脂流向來判斷危險來源，也能 search 樹根、苔床、倒木和舊祭器尋找草藥、毒蕨、樹脂與任務線索。若隊伍貪快或分散，影狼、森林蜘蛛、黑暗樹人與女巫會利用會移動的樹影切斷視線；若穩定標記路線，則能逐步追到黑心木核與整片森林變異的源頭，並判斷哪些樹影其實正在悄悄封住回程與火光方向。',
    exits: [
      { direction: 'south', targetRoomId: 'blackwood_charcoal_gate', description: '刻痕回到炭樹入口' },
      { direction: 'east', targetRoomId: 'blackwood_raven_roost', description: '羽毛路通往渡鴉棲枝' },
    ],
    monsters: [
      { monsterId: 'wild_wolf', maxCount: 2, respawnSeconds: 75 },
      { monsterId: 'shadow_wolf', maxCount: 1, respawnSeconds: 90 },
    ],
    mapSymbol: '[獵]',
    mapX: 0,
    mapY: 1,
    guardianHints: {
      creature: '獵人刻痕的樹影若與火光方向相反，附近獵食者通常已經開始包抄。',
      treasure: '獵人刻痕的苔床、樹脂裂縫或舊祭器旁可能藏著黑木林採集線索。',
      spirit: '獵人刻痕保留著黑木林從普通森林變成會移動陰影迷宮的記憶。',
    },
  },

  blackwood_raven_roost: {
    id: 'blackwood_raven_roost',
    name: '渡鴉棲枝',
    zone: 'blackwood' as RoomDef['zone'],
    image: 'blackwood_raven_roost.png',
    imagePrompt: '渡鴉棲枝 in blackwood, dark charcoal forest with moving black trees, shadowy undergrowth, hunter marks, spider webs, witch lights and ancient roots, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text',
    description:
      '渡鴉棲枝位於黑木林深處，炭黑樹皮吸收火光，枝葉在沒有風時也會緩慢換位，讓路標、獵人刻痕與回程方向變得不可靠。這裡是高階野外與採集路線節點，玩家可以 inspect 樹皮刮痕、蛛絲張力、暗精靈箭孔與黑樹脂流向來判斷危險來源，也能 search 樹根、苔床、倒木和舊祭器尋找草藥、毒蕨、樹脂與任務線索。若隊伍貪快或分散，影狼、森林蜘蛛、黑暗樹人與女巫會利用會移動的樹影切斷視線；若穩定標記路線，則能逐步追到黑心木核與整片森林變異的源頭，並判斷哪些樹影其實正在悄悄封住回程與火光方向。',
    exits: [
      { direction: 'west', targetRoomId: 'blackwood_hunter_marker', description: '羽毛路回到獵人刻痕' },
      { direction: 'east', targetRoomId: 'blackwood_webbed_crossing', description: '蛛絲路通往織網岔口' },
      { direction: 'south', targetRoomId: 'blackwood_moving_copse', description: '低枝路回到移動樹叢' },
    ],
    monsters: [
      { monsterId: 'dark_elf_archer', maxCount: 1, respawnSeconds: 140 },
      { monsterId: 'forest_spider', maxCount: 2, respawnSeconds: 80 },
    ],
    mapSymbol: '[鴉]',
    mapX: 1,
    mapY: 1,
    guardianHints: {
      creature: '渡鴉棲枝的樹影若與火光方向相反，附近獵食者通常已經開始包抄。',
      treasure: '渡鴉棲枝的苔床、樹脂裂縫或舊祭器旁可能藏著黑木林採集線索。',
      spirit: '渡鴉棲枝保留著黑木林從普通森林變成會移動陰影迷宮的記憶。',
    },
  },

  blackwood_moving_copse: {
    id: 'blackwood_moving_copse',
    name: '移動樹叢',
    zone: 'blackwood' as RoomDef['zone'],
    image: 'blackwood_moving_copse.png',
    imagePrompt: '移動樹叢 in blackwood, dark charcoal forest with moving black trees, shadowy undergrowth, hunter marks, spider webs, witch lights and ancient roots, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text',
    description:
      '移動樹叢位於黑木林深處，炭黑樹皮吸收火光，枝葉在沒有風時也會緩慢換位，讓路標、獵人刻痕與回程方向變得不可靠。這裡是高階野外與採集路線節點，玩家可以 inspect 樹皮刮痕、蛛絲張力、暗精靈箭孔與黑樹脂流向來判斷危險來源，也能 search 樹根、苔床、倒木和舊祭器尋找草藥、毒蕨、樹脂與任務線索。若隊伍貪快或分散，影狼、森林蜘蛛、黑暗樹人與女巫會利用會移動的樹影切斷視線；若穩定標記路線，則能逐步追到黑心木核與整片森林變異的源頭，並判斷哪些樹影其實正在悄悄封住回程與火光方向。',
    exits: [
      { direction: 'west', targetRoomId: 'blackwood_ash_path', description: '樹影回到灰燼小徑' },
      { direction: 'north', targetRoomId: 'blackwood_raven_roost', description: '低枝路通往渡鴉棲枝' },
      { direction: 'east', targetRoomId: 'blackwood_root_maze', description: '盤根路通往根迷宮' },
    ],
    monsters: [
      { monsterId: 'dark_treant', maxCount: 1, respawnSeconds: 180 },
      { monsterId: 'shadow_wolf', maxCount: 2, respawnSeconds: 90 },
    ],
    mapSymbol: '[移]',
    mapX: 2,
    mapY: 0,
    guardianHints: {
      creature: '移動樹叢的樹影若與火光方向相反，附近獵食者通常已經開始包抄。',
      treasure: '移動樹叢的苔床、樹脂裂縫或舊祭器旁可能藏著黑木林採集線索。',
      spirit: '移動樹叢保留著黑木林從普通森林變成會移動陰影迷宮的記憶。',
    },
  },

  blackwood_black_moss_bed: {
    id: 'blackwood_black_moss_bed',
    name: '黑苔床',
    zone: 'blackwood' as RoomDef['zone'],
    image: 'blackwood_black_moss_bed.png',
    imagePrompt: '黑苔床 in blackwood, dark charcoal forest with moving black trees, shadowy undergrowth, hunter marks, spider webs, witch lights and ancient roots, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text',
    description:
      '黑苔床位於黑木林深處，炭黑樹皮吸收火光，枝葉在沒有風時也會緩慢換位，讓路標、獵人刻痕與回程方向變得不可靠。這裡是高階野外與採集路線節點，玩家可以 inspect 樹皮刮痕、蛛絲張力、暗精靈箭孔與黑樹脂流向來判斷危險來源，也能 search 樹根、苔床、倒木和舊祭器尋找草藥、毒蕨、樹脂與任務線索。若隊伍貪快或分散，影狼、森林蜘蛛、黑暗樹人與女巫會利用會移動的樹影切斷視線；若穩定標記路線，則能逐步追到黑心木核與整片森林變異的源頭，並判斷哪些樹影其實正在悄悄封住回程與火光方向。',
    exits: [
      { direction: 'north', targetRoomId: 'blackwood_ash_path', description: '苔痕回到灰燼小徑' },
      { direction: 'east', targetRoomId: 'blackwood_witch_hollow', description: '藥草味通往女巫樹洞' },
    ],
    monsters: [
      { monsterId: 'forest_spider', maxCount: 3, respawnSeconds: 80 },
      { monsterId: 'shadow_wolf', maxCount: 1, respawnSeconds: 90 },
    ],
    mapSymbol: '[苔]',
    mapX: 1,
    mapY: -1,
    guardianHints: {
      creature: '黑苔床的樹影若與火光方向相反，附近獵食者通常已經開始包抄。',
      treasure: '黑苔床的苔床、樹脂裂縫或舊祭器旁可能藏著黑木林採集線索。',
      spirit: '黑苔床保留著黑木林從普通森林變成會移動陰影迷宮的記憶。',
    },
  },

  blackwood_webbed_crossing: {
    id: 'blackwood_webbed_crossing',
    name: '織網岔口',
    zone: 'blackwood' as RoomDef['zone'],
    image: 'blackwood_webbed_crossing.png',
    imagePrompt: '織網岔口 in blackwood, dark charcoal forest with moving black trees, shadowy undergrowth, hunter marks, spider webs, witch lights and ancient roots, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text',
    description:
      '織網岔口位於黑木林深處，炭黑樹皮吸收火光，枝葉在沒有風時也會緩慢換位，讓路標、獵人刻痕與回程方向變得不可靠。這裡是高階野外與採集路線節點，玩家可以 inspect 樹皮刮痕、蛛絲張力、暗精靈箭孔與黑樹脂流向來判斷危險來源，也能 search 樹根、苔床、倒木和舊祭器尋找草藥、毒蕨、樹脂與任務線索。若隊伍貪快或分散，影狼、森林蜘蛛、黑暗樹人與女巫會利用會移動的樹影切斷視線；若穩定標記路線，則能逐步追到黑心木核與整片森林變異的源頭，並判斷哪些樹影其實正在悄悄封住回程與火光方向。',
    exits: [
      { direction: 'west', targetRoomId: 'blackwood_raven_roost', description: '蛛絲路回到渡鴉棲枝' },
      { direction: 'south', targetRoomId: 'blackwood_root_maze', description: '網線落向根迷宮' },
      { direction: 'east', targetRoomId: 'blackwood_dark_elf_blind', description: '暗箭路通往暗精靈伏臺' },
    ],
    monsters: [
      { monsterId: 'forest_spider', maxCount: 4, respawnSeconds: 80 },
      { monsterId: 'giant_spider', maxCount: 1, respawnSeconds: 120 },
    ],
    mapSymbol: '[網]',
    mapX: 2,
    mapY: 1,
    guardianHints: {
      creature: '織網岔口的樹影若與火光方向相反，附近獵食者通常已經開始包抄。',
      treasure: '織網岔口的苔床、樹脂裂縫或舊祭器旁可能藏著黑木林採集線索。',
      spirit: '織網岔口保留著黑木林從普通森林變成會移動陰影迷宮的記憶。',
    },
  },

  blackwood_root_maze: {
    id: 'blackwood_root_maze',
    name: '盤根迷宮',
    zone: 'blackwood' as RoomDef['zone'],
    image: 'blackwood_root_maze.png',
    imagePrompt: '盤根迷宮 in blackwood, dark charcoal forest with moving black trees, shadowy undergrowth, hunter marks, spider webs, witch lights and ancient roots, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text',
    description:
      '盤根迷宮位於黑木林深處，炭黑樹皮吸收火光，枝葉在沒有風時也會緩慢換位，讓路標、獵人刻痕與回程方向變得不可靠。這裡是高階野外與採集路線節點，玩家可以 inspect 樹皮刮痕、蛛絲張力、暗精靈箭孔與黑樹脂流向來判斷危險來源，也能 search 樹根、苔床、倒木和舊祭器尋找草藥、毒蕨、樹脂與任務線索。若隊伍貪快或分散，影狼、森林蜘蛛、黑暗樹人與女巫會利用會移動的樹影切斷視線；若穩定標記路線，則能逐步追到黑心木核與整片森林變異的源頭，並判斷哪些樹影其實正在悄悄封住回程與火光方向。',
    exits: [
      { direction: 'west', targetRoomId: 'blackwood_moving_copse', description: '盤根路回到移動樹叢' },
      { direction: 'north', targetRoomId: 'blackwood_webbed_crossing', description: '網線回到織網岔口' },
      { direction: 'east', targetRoomId: 'blackwood_sap_pool', description: '黏液痕通往黑樹脂池' },
    ],
    monsters: [
      { monsterId: 'dark_treant', maxCount: 2, respawnSeconds: 180 },
      { monsterId: 'forest_spider', maxCount: 2, respawnSeconds: 80 },
    ],
    mapSymbol: '[根]',
    mapX: 3,
    mapY: 0,
    guardianHints: {
      creature: '盤根迷宮的樹影若與火光方向相反，附近獵食者通常已經開始包抄。',
      treasure: '盤根迷宮的苔床、樹脂裂縫或舊祭器旁可能藏著黑木林採集線索。',
      spirit: '盤根迷宮保留著黑木林從普通森林變成會移動陰影迷宮的記憶。',
    },
  },

  blackwood_witch_hollow: {
    id: 'blackwood_witch_hollow',
    name: '女巫樹洞',
    zone: 'blackwood' as RoomDef['zone'],
    image: 'blackwood_witch_hollow.png',
    imagePrompt: '女巫樹洞 in blackwood, dark charcoal forest with moving black trees, shadowy undergrowth, hunter marks, spider webs, witch lights and ancient roots, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text',
    description:
      '女巫樹洞位於黑木林深處，炭黑樹皮吸收火光，枝葉在沒有風時也會緩慢換位，讓路標、獵人刻痕與回程方向變得不可靠。這裡是高階野外與採集路線節點，玩家可以 inspect 樹皮刮痕、蛛絲張力、暗精靈箭孔與黑樹脂流向來判斷危險來源，也能 search 樹根、苔床、倒木和舊祭器尋找草藥、毒蕨、樹脂與任務線索。若隊伍貪快或分散，影狼、森林蜘蛛、黑暗樹人與女巫會利用會移動的樹影切斷視線；若穩定標記路線，則能逐步追到黑心木核與整片森林變異的源頭，並判斷哪些樹影其實正在悄悄封住回程與火光方向。',
    exits: [
      { direction: 'west', targetRoomId: 'blackwood_black_moss_bed', description: '藥草味回到黑苔床' },
      { direction: 'east', targetRoomId: 'blackwood_bone_chimes', description: '骨鈴路通往骨鈴林' },
      { direction: 'south', targetRoomId: 'blackwood_moonless_glade', description: '無月空地向南展開' },
    ],
    monsters: [
      { monsterId: 'forest_witch', maxCount: 1, respawnSeconds: 1800 },
      { monsterId: 'shadow_treant', maxCount: 1, respawnSeconds: 180 },
    ],
    mapSymbol: '[巫]',
    mapX: 2,
    mapY: -1,
    guardianHints: {
      creature: '女巫樹洞的樹影若與火光方向相反，附近獵食者通常已經開始包抄。',
      treasure: '女巫樹洞的苔床、樹脂裂縫或舊祭器旁可能藏著黑木林採集線索。',
      spirit: '女巫樹洞保留著黑木林從普通森林變成會移動陰影迷宮的記憶。',
    },
  },

  blackwood_dark_elf_blind: {
    id: 'blackwood_dark_elf_blind',
    name: '暗精靈伏臺',
    zone: 'blackwood' as RoomDef['zone'],
    image: 'blackwood_dark_elf_blind.png',
    imagePrompt: '暗精靈伏臺 in blackwood, dark charcoal forest with moving black trees, shadowy undergrowth, hunter marks, spider webs, witch lights and ancient roots, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text',
    description:
      '暗精靈伏臺位於黑木林深處，炭黑樹皮吸收火光，枝葉在沒有風時也會緩慢換位，讓路標、獵人刻痕與回程方向變得不可靠。這裡是高階野外與採集路線節點，玩家可以 inspect 樹皮刮痕、蛛絲張力、暗精靈箭孔與黑樹脂流向來判斷危險來源，也能 search 樹根、苔床、倒木和舊祭器尋找草藥、毒蕨、樹脂與任務線索。若隊伍貪快或分散，影狼、森林蜘蛛、黑暗樹人與女巫會利用會移動的樹影切斷視線；若穩定標記路線，則能逐步追到黑心木核與整片森林變異的源頭，並判斷哪些樹影其實正在悄悄封住回程與火光方向。',
    exits: [
      { direction: 'west', targetRoomId: 'blackwood_webbed_crossing', description: '暗箭路回到織網岔口' },
      { direction: 'east', targetRoomId: 'blackwood_poison_fern', description: '毒蕨坡通往毒蕨林' },
      { direction: 'south', targetRoomId: 'blackwood_sap_pool', description: '斜梯落向黑樹脂池' },
    ],
    monsters: [
      { monsterId: 'dark_elf_archer', maxCount: 3, respawnSeconds: 140 },
      { monsterId: 'shadow_assassin', maxCount: 1, respawnSeconds: 160 },
    ],
    mapSymbol: '[伏]',
    mapX: 3,
    mapY: 1,
    guardianHints: {
      creature: '暗精靈伏臺的樹影若與火光方向相反，附近獵食者通常已經開始包抄。',
      treasure: '暗精靈伏臺的苔床、樹脂裂縫或舊祭器旁可能藏著黑木林採集線索。',
      spirit: '暗精靈伏臺保留著黑木林從普通森林變成會移動陰影迷宮的記憶。',
    },
  },

  blackwood_sap_pool: {
    id: 'blackwood_sap_pool',
    name: '黑樹脂池',
    zone: 'blackwood' as RoomDef['zone'],
    image: 'blackwood_sap_pool.png',
    imagePrompt: '黑樹脂池 in blackwood, dark charcoal forest with moving black trees, shadowy undergrowth, hunter marks, spider webs, witch lights and ancient roots, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text',
    description:
      '黑樹脂池位於黑木林深處，炭黑樹皮吸收火光，枝葉在沒有風時也會緩慢換位，讓路標、獵人刻痕與回程方向變得不可靠。這裡是高階野外與採集路線節點，玩家可以 inspect 樹皮刮痕、蛛絲張力、暗精靈箭孔與黑樹脂流向來判斷危險來源，也能 search 樹根、苔床、倒木和舊祭器尋找草藥、毒蕨、樹脂與任務線索。若隊伍貪快或分散，影狼、森林蜘蛛、黑暗樹人與女巫會利用會移動的樹影切斷視線；若穩定標記路線，則能逐步追到黑心木核與整片森林變異的源頭，並判斷哪些樹影其實正在悄悄封住回程與火光方向。',
    exits: [
      { direction: 'west', targetRoomId: 'blackwood_root_maze', description: '黏液痕回到盤根迷宮' },
      { direction: 'north', targetRoomId: 'blackwood_dark_elf_blind', description: '斜梯回到暗精靈伏臺' },
      { direction: 'east', targetRoomId: 'blackwood_burnt_totem', description: '焦木路通往燒焦圖騰' },
    ],
    monsters: [
      { monsterId: 'shadow_treant', maxCount: 2, respawnSeconds: 180 },
      { monsterId: 'forest_spider', maxCount: 2, respawnSeconds: 80 },
    ],
    mapSymbol: '[脂]',
    mapX: 4,
    mapY: 0,
    guardianHints: {
      creature: '黑樹脂池的樹影若與火光方向相反，附近獵食者通常已經開始包抄。',
      treasure: '黑樹脂池的苔床、樹脂裂縫或舊祭器旁可能藏著黑木林採集線索。',
      spirit: '黑樹脂池保留著黑木林從普通森林變成會移動陰影迷宮的記憶。',
    },
  },

  blackwood_bone_chimes: {
    id: 'blackwood_bone_chimes',
    name: '骨鈴林',
    zone: 'blackwood' as RoomDef['zone'],
    image: 'blackwood_bone_chimes.png',
    imagePrompt: '骨鈴林 in blackwood, dark charcoal forest with moving black trees, shadowy undergrowth, hunter marks, spider webs, witch lights and ancient roots, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text',
    description:
      '骨鈴林位於黑木林深處，炭黑樹皮吸收火光，枝葉在沒有風時也會緩慢換位，讓路標、獵人刻痕與回程方向變得不可靠。這裡是高階野外與採集路線節點，玩家可以 inspect 樹皮刮痕、蛛絲張力、暗精靈箭孔與黑樹脂流向來判斷危險來源，也能 search 樹根、苔床、倒木和舊祭器尋找草藥、毒蕨、樹脂與任務線索。若隊伍貪快或分散，影狼、森林蜘蛛、黑暗樹人與女巫會利用會移動的樹影切斷視線；若穩定標記路線，則能逐步追到黑心木核與整片森林變異的源頭，並判斷哪些樹影其實正在悄悄封住回程與火光方向。',
    exits: [
      { direction: 'west', targetRoomId: 'blackwood_witch_hollow', description: '骨鈴路回到女巫樹洞' },
      { direction: 'east', targetRoomId: 'blackwood_burnt_totem', description: '吊骨路通往燒焦圖騰' },
      { direction: 'south', targetRoomId: 'blackwood_moonless_glade', description: '鈴聲落向無月空地' },
    ],
    monsters: [
      { monsterId: 'shadow_wolf', maxCount: 3, respawnSeconds: 90 },
      { monsterId: 'forest_witch', maxCount: 1, respawnSeconds: 1800 },
    ],
    mapSymbol: '[鈴]',
    mapX: 3,
    mapY: -1,
    guardianHints: {
      creature: '骨鈴林的樹影若與火光方向相反，附近獵食者通常已經開始包抄。',
      treasure: '骨鈴林的苔床、樹脂裂縫或舊祭器旁可能藏著黑木林採集線索。',
      spirit: '骨鈴林保留著黑木林從普通森林變成會移動陰影迷宮的記憶。',
    },
  },

  blackwood_moonless_glade: {
    id: 'blackwood_moonless_glade',
    name: '無月空地',
    zone: 'blackwood' as RoomDef['zone'],
    image: 'blackwood_moonless_glade.png',
    imagePrompt: '無月空地 in blackwood, dark charcoal forest with moving black trees, shadowy undergrowth, hunter marks, spider webs, witch lights and ancient roots, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text',
    description:
      '無月空地位於黑木林深處，炭黑樹皮吸收火光，枝葉在沒有風時也會緩慢換位，讓路標、獵人刻痕與回程方向變得不可靠。這裡是高階野外與採集路線節點，玩家可以 inspect 樹皮刮痕、蛛絲張力、暗精靈箭孔與黑樹脂流向來判斷危險來源，也能 search 樹根、苔床、倒木和舊祭器尋找草藥、毒蕨、樹脂與任務線索。若隊伍貪快或分散，影狼、森林蜘蛛、黑暗樹人與女巫會利用會移動的樹影切斷視線；若穩定標記路線，則能逐步追到黑心木核與整片森林變異的源頭，並判斷哪些樹影其實正在悄悄封住回程與火光方向。',
    exits: [
      { direction: 'north', targetRoomId: 'blackwood_witch_hollow', description: '無月路回到女巫樹洞' },
      { direction: 'east', targetRoomId: 'blackwood_wolf_den', description: '爪痕通往影狼窩' },
    ],
    monsters: [
      { monsterId: 'shadow_wolf_alpha', maxCount: 1, respawnSeconds: 300 },
      { monsterId: 'shadow_wolf', maxCount: 3, respawnSeconds: 90 },
    ],
    mapSymbol: '[月]',
    mapX: 3,
    mapY: -2,
    guardianHints: {
      creature: '無月空地的樹影若與火光方向相反，附近獵食者通常已經開始包抄。',
      treasure: '無月空地的苔床、樹脂裂縫或舊祭器旁可能藏著黑木林採集線索。',
      spirit: '無月空地保留著黑木林從普通森林變成會移動陰影迷宮的記憶。',
    },
  },

  blackwood_poison_fern: {
    id: 'blackwood_poison_fern',
    name: '毒蕨林',
    zone: 'blackwood' as RoomDef['zone'],
    image: 'blackwood_poison_fern.png',
    imagePrompt: '毒蕨林 in blackwood, dark charcoal forest with moving black trees, shadowy undergrowth, hunter marks, spider webs, witch lights and ancient roots, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text',
    description:
      '毒蕨林位於黑木林深處，炭黑樹皮吸收火光，枝葉在沒有風時也會緩慢換位，讓路標、獵人刻痕與回程方向變得不可靠。這裡是高階野外與採集路線節點，玩家可以 inspect 樹皮刮痕、蛛絲張力、暗精靈箭孔與黑樹脂流向來判斷危險來源，也能 search 樹根、苔床、倒木和舊祭器尋找草藥、毒蕨、樹脂與任務線索。若隊伍貪快或分散，影狼、森林蜘蛛、黑暗樹人與女巫會利用會移動的樹影切斷視線；若穩定標記路線，則能逐步追到黑心木核與整片森林變異的源頭，並判斷哪些樹影其實正在悄悄封住回程與火光方向。',
    exits: [
      { direction: 'west', targetRoomId: 'blackwood_dark_elf_blind', description: '毒蕨坡回到伏臺' },
      { direction: 'east', targetRoomId: 'blackwood_hollow_log_bridge', description: '倒木橋通往空心木橋' },
    ],
    monsters: [
      { monsterId: 'forest_spider', maxCount: 3, respawnSeconds: 80 },
      { monsterId: 'dark_elf_archer', maxCount: 2, respawnSeconds: 140 },
    ],
    mapSymbol: '[蕨]',
    mapX: 4,
    mapY: 1,
    guardianHints: {
      creature: '毒蕨林的樹影若與火光方向相反，附近獵食者通常已經開始包抄。',
      treasure: '毒蕨林的苔床、樹脂裂縫或舊祭器旁可能藏著黑木林採集線索。',
      spirit: '毒蕨林保留著黑木林從普通森林變成會移動陰影迷宮的記憶。',
    },
  },

  blackwood_burnt_totem: {
    id: 'blackwood_burnt_totem',
    name: '燒焦圖騰',
    zone: 'blackwood' as RoomDef['zone'],
    image: 'blackwood_burnt_totem.png',
    imagePrompt: '燒焦圖騰 in blackwood, dark charcoal forest with moving black trees, shadowy undergrowth, hunter marks, spider webs, witch lights and ancient roots, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text',
    description:
      '燒焦圖騰位於黑木林深處，炭黑樹皮吸收火光，枝葉在沒有風時也會緩慢換位，讓路標、獵人刻痕與回程方向變得不可靠。這裡是高階野外與採集路線節點，玩家可以 inspect 樹皮刮痕、蛛絲張力、暗精靈箭孔與黑樹脂流向來判斷危險來源，也能 search 樹根、苔床、倒木和舊祭器尋找草藥、毒蕨、樹脂與任務線索。若隊伍貪快或分散，影狼、森林蜘蛛、黑暗樹人與女巫會利用會移動的樹影切斷視線；若穩定標記路線，則能逐步追到黑心木核與整片森林變異的源頭，並判斷哪些樹影其實正在悄悄封住回程與火光方向。',
    exits: [
      { direction: 'west', targetRoomId: 'blackwood_sap_pool', description: '焦木路回到黑樹脂池' },
      { direction: 'north', targetRoomId: 'blackwood_poison_fern', description: '煙痕路通往毒蕨林' },
      { direction: 'east', targetRoomId: 'blackwood_elder_ring', description: '炭圈通往長老樹環' },
    ],
    monsters: [
      { monsterId: 'dark_treant', maxCount: 2, respawnSeconds: 180 },
      { monsterId: 'shadow_assassin', maxCount: 1, respawnSeconds: 160 },
    ],
    mapSymbol: '[圖]',
    mapX: 5,
    mapY: 0,
    guardianHints: {
      creature: '燒焦圖騰的樹影若與火光方向相反，附近獵食者通常已經開始包抄。',
      treasure: '燒焦圖騰的苔床、樹脂裂縫或舊祭器旁可能藏著黑木林採集線索。',
      spirit: '燒焦圖騰保留著黑木林從普通森林變成會移動陰影迷宮的記憶。',
    },
  },

  blackwood_wolf_den: {
    id: 'blackwood_wolf_den',
    name: '影狼窩',
    zone: 'blackwood' as RoomDef['zone'],
    image: 'blackwood_wolf_den.png',
    imagePrompt: '影狼窩 in blackwood, dark charcoal forest with moving black trees, shadowy undergrowth, hunter marks, spider webs, witch lights and ancient roots, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text',
    description:
      '影狼窩位於黑木林深處，炭黑樹皮吸收火光，枝葉在沒有風時也會緩慢換位，讓路標、獵人刻痕與回程方向變得不可靠。這裡是高階野外與採集路線節點，玩家可以 inspect 樹皮刮痕、蛛絲張力、暗精靈箭孔與黑樹脂流向來判斷危險來源，也能 search 樹根、苔床、倒木和舊祭器尋找草藥、毒蕨、樹脂與任務線索。若隊伍貪快或分散，影狼、森林蜘蛛、黑暗樹人與女巫會利用會移動的樹影切斷視線；若穩定標記路線，則能逐步追到黑心木核與整片森林變異的源頭，並判斷哪些樹影其實正在悄悄封住回程與火光方向。',
    exits: [
      { direction: 'west', targetRoomId: 'blackwood_moonless_glade', description: '爪痕回到無月空地' },
      { direction: 'east', targetRoomId: 'blackwood_fallen_shrine', description: '獸道通往倒塌小祠' },
    ],
    monsters: [
      { monsterId: 'shadow_wolf_alpha', maxCount: 1, respawnSeconds: 300 },
      { monsterId: 'shadow_wolf', maxCount: 4, respawnSeconds: 90 },
    ],
    mapSymbol: '[狼]',
    mapX: 4,
    mapY: -2,
    guardianHints: {
      creature: '影狼窩的樹影若與火光方向相反，附近獵食者通常已經開始包抄。',
      treasure: '影狼窩的苔床、樹脂裂縫或舊祭器旁可能藏著黑木林採集線索。',
      spirit: '影狼窩保留著黑木林從普通森林變成會移動陰影迷宮的記憶。',
    },
  },

  blackwood_hollow_log_bridge: {
    id: 'blackwood_hollow_log_bridge',
    name: '空心木橋',
    zone: 'blackwood' as RoomDef['zone'],
    image: 'blackwood_hollow_log_bridge.png',
    imagePrompt: '空心木橋 in blackwood, dark charcoal forest with moving black trees, shadowy undergrowth, hunter marks, spider webs, witch lights and ancient roots, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text',
    description:
      '空心木橋位於黑木林深處，炭黑樹皮吸收火光，枝葉在沒有風時也會緩慢換位，讓路標、獵人刻痕與回程方向變得不可靠。這裡是高階野外與採集路線節點，玩家可以 inspect 樹皮刮痕、蛛絲張力、暗精靈箭孔與黑樹脂流向來判斷危險來源，也能 search 樹根、苔床、倒木和舊祭器尋找草藥、毒蕨、樹脂與任務線索。若隊伍貪快或分散，影狼、森林蜘蛛、黑暗樹人與女巫會利用會移動的樹影切斷視線；若穩定標記路線，則能逐步追到黑心木核與整片森林變異的源頭，並判斷哪些樹影其實正在悄悄封住回程與火光方向。',
    exits: [
      { direction: 'west', targetRoomId: 'blackwood_poison_fern', description: '倒木橋回到毒蕨林' },
      { direction: 'south', targetRoomId: 'blackwood_elder_ring', description: '樹洞階落向長老樹環' },
    ],
    monsters: [
      { monsterId: 'forest_spider', maxCount: 2, respawnSeconds: 80 },
      { monsterId: 'dark_treant', maxCount: 1, respawnSeconds: 180 },
    ],
    mapSymbol: '[橋]',
    mapX: 5,
    mapY: 1,
    guardianHints: {
      creature: '空心木橋的樹影若與火光方向相反，附近獵食者通常已經開始包抄。',
      treasure: '空心木橋的苔床、樹脂裂縫或舊祭器旁可能藏著黑木林採集線索。',
      spirit: '空心木橋保留著黑木林從普通森林變成會移動陰影迷宮的記憶。',
    },
  },

  blackwood_elder_ring: {
    id: 'blackwood_elder_ring',
    name: '長老樹環',
    zone: 'blackwood' as RoomDef['zone'],
    image: 'blackwood_elder_ring.png',
    imagePrompt: '長老樹環 in blackwood, dark charcoal forest with moving black trees, shadowy undergrowth, hunter marks, spider webs, witch lights and ancient roots, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text',
    description:
      '長老樹環位於黑木林深處，炭黑樹皮吸收火光，枝葉在沒有風時也會緩慢換位，讓路標、獵人刻痕與回程方向變得不可靠。這裡是高階野外與採集路線節點，玩家可以 inspect 樹皮刮痕、蛛絲張力、暗精靈箭孔與黑樹脂流向來判斷危險來源，也能 search 樹根、苔床、倒木和舊祭器尋找草藥、毒蕨、樹脂與任務線索。若隊伍貪快或分散，影狼、森林蜘蛛、黑暗樹人與女巫會利用會移動的樹影切斷視線；若穩定標記路線，則能逐步追到黑心木核與整片森林變異的源頭，並判斷哪些樹影其實正在悄悄封住回程與火光方向。',
    exits: [
      { direction: 'west', targetRoomId: 'blackwood_burnt_totem', description: '炭圈回到燒焦圖騰' },
      { direction: 'north', targetRoomId: 'blackwood_hollow_log_bridge', description: '樹洞階回到空心木橋' },
      { direction: 'east', targetRoomId: 'blackwood_heartwood_core', description: '年輪路通往黑心木核' },
    ],
    monsters: [
      { monsterId: 'elder_treant', maxCount: 1, respawnSeconds: 1800 },
      { monsterId: 'shadow_treant', maxCount: 2, respawnSeconds: 180 },
    ],
    mapSymbol: '[環]',
    mapX: 6,
    mapY: 0,
    guardianHints: {
      creature: '長老樹環的樹影若與火光方向相反，附近獵食者通常已經開始包抄。',
      treasure: '長老樹環的苔床、樹脂裂縫或舊祭器旁可能藏著黑木林採集線索。',
      spirit: '長老樹環保留著黑木林從普通森林變成會移動陰影迷宮的記憶。',
    },
  },

  blackwood_fallen_shrine: {
    id: 'blackwood_fallen_shrine',
    name: '倒塌小祠',
    zone: 'blackwood' as RoomDef['zone'],
    image: 'blackwood_fallen_shrine.png',
    imagePrompt: '倒塌小祠 in blackwood, dark charcoal forest with moving black trees, shadowy undergrowth, hunter marks, spider webs, witch lights and ancient roots, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text',
    description:
      '倒塌小祠位於黑木林深處，炭黑樹皮吸收火光，枝葉在沒有風時也會緩慢換位，讓路標、獵人刻痕與回程方向變得不可靠。這裡是高階野外與採集路線節點，玩家可以 inspect 樹皮刮痕、蛛絲張力、暗精靈箭孔與黑樹脂流向來判斷危險來源，也能 search 樹根、苔床、倒木和舊祭器尋找草藥、毒蕨、樹脂與任務線索。若隊伍貪快或分散，影狼、森林蜘蛛、黑暗樹人與女巫會利用會移動的樹影切斷視線；若穩定標記路線，則能逐步追到黑心木核與整片森林變異的源頭，並判斷哪些樹影其實正在悄悄封住回程與火光方向。',
    exits: [
      { direction: 'west', targetRoomId: 'blackwood_wolf_den', description: '獸道回到影狼窩' },
      { direction: 'north', targetRoomId: 'blackwood_elder_ring', description: '斷柱路通往長老樹環' },
      { direction: 'east', targetRoomId: 'blackwood_heartwood_core', description: '祠後根道通往黑心木核' },
    ],
    monsters: [
      { monsterId: 'forest_witch', maxCount: 1, respawnSeconds: 1800 },
      { monsterId: 'shadow_wolf', maxCount: 2, respawnSeconds: 90 },
    ],
    mapSymbol: '[祠]',
    mapX: 5,
    mapY: -2,
    guardianHints: {
      creature: '倒塌小祠的樹影若與火光方向相反，附近獵食者通常已經開始包抄。',
      treasure: '倒塌小祠的苔床、樹脂裂縫或舊祭器旁可能藏著黑木林採集線索。',
      spirit: '倒塌小祠保留著黑木林從普通森林變成會移動陰影迷宮的記憶。',
    },
  },

  blackwood_heartwood_core: {
    id: 'blackwood_heartwood_core',
    name: '黑心木核',
    zone: 'blackwood' as RoomDef['zone'],
    image: 'blackwood_heartwood_core.png',
    imagePrompt: '黑心木核 in blackwood, dark charcoal forest with moving black trees, shadowy undergrowth, hunter marks, spider webs, witch lights and ancient roots, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text',
    description:
      '黑心木核位於黑木林深處，炭黑樹皮吸收火光，枝葉在沒有風時也會緩慢換位，讓路標、獵人刻痕與回程方向變得不可靠。這裡是高階野外與採集路線節點，玩家可以 inspect 樹皮刮痕、蛛絲張力、暗精靈箭孔與黑樹脂流向來判斷危險來源，也能 search 樹根、苔床、倒木和舊祭器尋找草藥、毒蕨、樹脂與任務線索。若隊伍貪快或分散，影狼、森林蜘蛛、黑暗樹人與女巫會利用會移動的樹影切斷視線；若穩定標記路線，則能逐步追到黑心木核與整片森林變異的源頭，並判斷哪些樹影其實正在悄悄封住回程與火光方向。',
    exits: [
      { direction: 'west', targetRoomId: 'blackwood_elder_ring', description: '年輪路回到長老樹環' },
      { direction: 'south', targetRoomId: 'blackwood_fallen_shrine', description: '祠後根道回到倒塌小祠' },
    ],
    monsters: [
      { monsterId: 'elder_treant', maxCount: 1, respawnSeconds: 1800 },
      { monsterId: 'forest_witch', maxCount: 1, respawnSeconds: 1800 },
      { monsterId: 'shadow_assassin', maxCount: 2, respawnSeconds: 160 },
    ],
    mapSymbol: '[核]',
    mapX: 7,
    mapY: 0,
    guardianHints: {
      creature: '黑心木核的樹影若與火光方向相反，附近獵食者通常已經開始包抄。',
      treasure: '黑心木核的苔床、樹脂裂縫或舊祭器旁可能藏著黑木林採集線索。',
      spirit: '黑心木核保留著黑木林從普通森林變成會移動陰影迷宮的記憶。',
    },
  },
  lost_capital_outer_gate: {
    id: 'lost_capital_outer_gate',
    name: '王都外門',
    zone: 'lost_capital' as RoomDef['zone'],
    image: 'lost_capital_outer_gate.png',
    imagePrompt: '王都外門 in lost_capital, ruined royal capital frozen in time, shattered marble streets, empty throne motifs, ghostly light and dark magic, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text',
    description:
      '王都外門位於失落王都仍停在崩壞前一刻的街區中，破碎旗幟、凝固水流、裂開鐘面與沒有主人的王家徽記讓整座城市像被時間封住。這裡是高階副本入口與世界王前置路線節點，玩家可以 inspect 石碑、卷宗、倒影與王家紋章來判斷王都滅亡順序，也能 search 市集殘攤、軍械庫、墓室和禮拜堂尋找鑰匙線索。若隊伍只沿主路衝向王座，亡靈騎士、巫妖殘影、石像鬼與暗影刺客會從側廊合圍；若依序清理廣場、水道、議政廳與加冕階，則能理解空王座為何仍在等待挑戰者，並找出進入真正王城副本的前置鑰匙與回城路標。',
    exits: [
      { direction: 'east', targetRoomId: 'lost_capital_silent_avenue', description: '碎石大道通往城內' },
      { direction: 'north', targetRoomId: 'lost_capital_watch_tower', description: '斷梯通往守望塔' },
    ],
    monsters: [
      { monsterId: 'undead_knight', maxCount: 2, respawnSeconds: 140 },
    ],
    mapSymbol: '[門]',
    mapX: 0,
    mapY: 0,
    guardianHints: {
      creature: '王都外門的凝固影子若忽然錯位，王都守衛與暗影刺客通常正在換線。',
      treasure: '王都外門的王家徽記、破卷宗或裂石底下可能藏著空王座線索。',
      spirit: '王都外門保留著失落王都在崩壞前最後一刻仍試圖維持秩序的記憶。',
    },
  },

  lost_capital_silent_avenue: {
    id: 'lost_capital_silent_avenue',
    name: '寂靜王道',
    zone: 'lost_capital' as RoomDef['zone'],
    image: 'lost_capital_silent_avenue.png',
    imagePrompt: '寂靜王道 in lost_capital, ruined royal capital frozen in time, shattered marble streets, empty throne motifs, ghostly light and dark magic, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text',
    description:
      '寂靜王道位於失落王都仍停在崩壞前一刻的街區中，破碎旗幟、凝固水流、裂開鐘面與沒有主人的王家徽記讓整座城市像被時間封住。這裡是高階副本入口與世界王前置路線節點，玩家可以 inspect 石碑、卷宗、倒影與王家紋章來判斷王都滅亡順序，也能 search 市集殘攤、軍械庫、墓室和禮拜堂尋找鑰匙線索。若隊伍只沿主路衝向王座，亡靈騎士、巫妖殘影、石像鬼與暗影刺客會從側廊合圍；若依序清理廣場、水道、議政廳與加冕階，則能理解空王座為何仍在等待挑戰者，並找出進入真正王城副本的前置鑰匙與回城路標。',
    exits: [
      { direction: 'west', targetRoomId: 'lost_capital_outer_gate', description: '大道回到王都外門' },
      { direction: 'east', targetRoomId: 'lost_capital_frozen_market', description: '石攤路通往凝固市集' },
      { direction: 'south', targetRoomId: 'lost_capital_broken_fountain', description: '乾渠通往破噴泉' },
    ],
    monsters: [
      { monsterId: 'undead_knight', maxCount: 2, respawnSeconds: 140 },
      { monsterId: 'shadow_assassin', maxCount: 1, respawnSeconds: 160 },
    ],
    mapSymbol: '[道]',
    mapX: 1,
    mapY: 0,
    guardianHints: {
      creature: '寂靜王道的凝固影子若忽然錯位，王都守衛與暗影刺客通常正在換線。',
      treasure: '寂靜王道的王家徽記、破卷宗或裂石底下可能藏著空王座線索。',
      spirit: '寂靜王道保留著失落王都在崩壞前最後一刻仍試圖維持秩序的記憶。',
    },
  },

  lost_capital_watch_tower: {
    id: 'lost_capital_watch_tower',
    name: '守望塔',
    zone: 'lost_capital' as RoomDef['zone'],
    image: 'lost_capital_watch_tower.png',
    imagePrompt: '守望塔 in lost_capital, ruined royal capital frozen in time, shattered marble streets, empty throne motifs, ghostly light and dark magic, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text',
    description:
      '守望塔位於失落王都仍停在崩壞前一刻的街區中，破碎旗幟、凝固水流、裂開鐘面與沒有主人的王家徽記讓整座城市像被時間封住。這裡是高階副本入口與世界王前置路線節點，玩家可以 inspect 石碑、卷宗、倒影與王家紋章來判斷王都滅亡順序，也能 search 市集殘攤、軍械庫、墓室和禮拜堂尋找鑰匙線索。若隊伍只沿主路衝向王座，亡靈騎士、巫妖殘影、石像鬼與暗影刺客會從側廊合圍；若依序清理廣場、水道、議政廳與加冕階，則能理解空王座為何仍在等待挑戰者，並找出進入真正王城副本的前置鑰匙與回城路標。',
    exits: [
      { direction: 'south', targetRoomId: 'lost_capital_outer_gate', description: '斷梯回到王都外門' },
      { direction: 'east', targetRoomId: 'lost_capital_clock_square', description: '塔橋通往停鐘廣場' },
    ],
    monsters: [
      { monsterId: 'gargoyle', maxCount: 2, respawnSeconds: 140 },
      { monsterId: 'shadow_assassin', maxCount: 1, respawnSeconds: 160 },
    ],
    mapSymbol: '[塔]',
    mapX: 0,
    mapY: 1,
    guardianHints: {
      creature: '守望塔的凝固影子若忽然錯位，王都守衛與暗影刺客通常正在換線。',
      treasure: '守望塔的王家徽記、破卷宗或裂石底下可能藏著空王座線索。',
      spirit: '守望塔保留著失落王都在崩壞前最後一刻仍試圖維持秩序的記憶。',
    },
  },

  lost_capital_clock_square: {
    id: 'lost_capital_clock_square',
    name: '停鐘廣場',
    zone: 'lost_capital' as RoomDef['zone'],
    image: 'lost_capital_clock_square.png',
    imagePrompt: '停鐘廣場 in lost_capital, ruined royal capital frozen in time, shattered marble streets, empty throne motifs, ghostly light and dark magic, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text',
    description:
      '停鐘廣場位於失落王都仍停在崩壞前一刻的街區中，破碎旗幟、凝固水流、裂開鐘面與沒有主人的王家徽記讓整座城市像被時間封住。這裡是高階副本入口與世界王前置路線節點，玩家可以 inspect 石碑、卷宗、倒影與王家紋章來判斷王都滅亡順序，也能 search 市集殘攤、軍械庫、墓室和禮拜堂尋找鑰匙線索。若隊伍只沿主路衝向王座，亡靈騎士、巫妖殘影、石像鬼與暗影刺客會從側廊合圍；若依序清理廣場、水道、議政廳與加冕階，則能理解空王座為何仍在等待挑戰者，並找出進入真正王城副本的前置鑰匙與回城路標。',
    exits: [
      { direction: 'west', targetRoomId: 'lost_capital_watch_tower', description: '塔橋回到守望塔' },
      { direction: 'east', targetRoomId: 'lost_capital_civic_archive', description: '石階通往市政檔案館' },
      { direction: 'south', targetRoomId: 'lost_capital_frozen_market', description: '鐘影落向凝固市集' },
    ],
    monsters: [
      { monsterId: 'undead_knight', maxCount: 2, respawnSeconds: 140 },
      { monsterId: 'gargoyle', maxCount: 1, respawnSeconds: 140 },
    ],
    mapSymbol: '[鐘]',
    mapX: 1,
    mapY: 1,
    guardianHints: {
      creature: '停鐘廣場的凝固影子若忽然錯位，王都守衛與暗影刺客通常正在換線。',
      treasure: '停鐘廣場的王家徽記、破卷宗或裂石底下可能藏著空王座線索。',
      spirit: '停鐘廣場保留著失落王都在崩壞前最後一刻仍試圖維持秩序的記憶。',
    },
  },

  lost_capital_frozen_market: {
    id: 'lost_capital_frozen_market',
    name: '凝固市集',
    zone: 'lost_capital' as RoomDef['zone'],
    image: 'lost_capital_frozen_market.png',
    imagePrompt: '凝固市集 in lost_capital, ruined royal capital frozen in time, shattered marble streets, empty throne motifs, ghostly light and dark magic, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text',
    description:
      '凝固市集位於失落王都仍停在崩壞前一刻的街區中，破碎旗幟、凝固水流、裂開鐘面與沒有主人的王家徽記讓整座城市像被時間封住。這裡是高階副本入口與世界王前置路線節點，玩家可以 inspect 石碑、卷宗、倒影與王家紋章來判斷王都滅亡順序，也能 search 市集殘攤、軍械庫、墓室和禮拜堂尋找鑰匙線索。若隊伍只沿主路衝向王座，亡靈騎士、巫妖殘影、石像鬼與暗影刺客會從側廊合圍；若依序清理廣場、水道、議政廳與加冕階，則能理解空王座為何仍在等待挑戰者，並找出進入真正王城副本的前置鑰匙與回城路標。',
    exits: [
      { direction: 'west', targetRoomId: 'lost_capital_silent_avenue', description: '石攤路回到寂靜王道' },
      { direction: 'north', targetRoomId: 'lost_capital_clock_square', description: '鐘影回到停鐘廣場' },
      { direction: 'east', targetRoomId: 'lost_capital_royal_canal', description: '破橋通往王家水道' },
    ],
    monsters: [
      { monsterId: 'shadow_assassin', maxCount: 2, respawnSeconds: 160 },
      { monsterId: 'undead_knight', maxCount: 1, respawnSeconds: 140 },
    ],
    mapSymbol: '[市]',
    mapX: 2,
    mapY: 0,
    guardianHints: {
      creature: '凝固市集的凝固影子若忽然錯位，王都守衛與暗影刺客通常正在換線。',
      treasure: '凝固市集的王家徽記、破卷宗或裂石底下可能藏著空王座線索。',
      spirit: '凝固市集保留著失落王都在崩壞前最後一刻仍試圖維持秩序的記憶。',
    },
  },

  lost_capital_broken_fountain: {
    id: 'lost_capital_broken_fountain',
    name: '破噴泉',
    zone: 'lost_capital' as RoomDef['zone'],
    image: 'lost_capital_broken_fountain.png',
    imagePrompt: '破噴泉 in lost_capital, ruined royal capital frozen in time, shattered marble streets, empty throne motifs, ghostly light and dark magic, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text',
    description:
      '破噴泉位於失落王都仍停在崩壞前一刻的街區中，破碎旗幟、凝固水流、裂開鐘面與沒有主人的王家徽記讓整座城市像被時間封住。這裡是高階副本入口與世界王前置路線節點，玩家可以 inspect 石碑、卷宗、倒影與王家紋章來判斷王都滅亡順序，也能 search 市集殘攤、軍械庫、墓室和禮拜堂尋找鑰匙線索。若隊伍只沿主路衝向王座，亡靈騎士、巫妖殘影、石像鬼與暗影刺客會從側廊合圍；若依序清理廣場、水道、議政廳與加冕階，則能理解空王座為何仍在等待挑戰者，並找出進入真正王城副本的前置鑰匙與回城路標。',
    exits: [
      { direction: 'north', targetRoomId: 'lost_capital_silent_avenue', description: '乾渠回到寂靜王道' },
      { direction: 'east', targetRoomId: 'lost_capital_statue_garden', description: '裂石路通往雕像庭園' },
    ],
    monsters: [
      { monsterId: 'skeleton_general', maxCount: 1, respawnSeconds: 300 },
      { monsterId: 'skeleton_soldier', maxCount: 3, respawnSeconds: 80 },
    ],
    mapSymbol: '[泉]',
    mapX: 1,
    mapY: -1,
    guardianHints: {
      creature: '破噴泉的凝固影子若忽然錯位，王都守衛與暗影刺客通常正在換線。',
      treasure: '破噴泉的王家徽記、破卷宗或裂石底下可能藏著空王座線索。',
      spirit: '破噴泉保留著失落王都在崩壞前最後一刻仍試圖維持秩序的記憶。',
    },
  },

  lost_capital_civic_archive: {
    id: 'lost_capital_civic_archive',
    name: '市政檔案館',
    zone: 'lost_capital' as RoomDef['zone'],
    image: 'lost_capital_civic_archive.png',
    imagePrompt: '市政檔案館 in lost_capital, ruined royal capital frozen in time, shattered marble streets, empty throne motifs, ghostly light and dark magic, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text',
    description:
      '市政檔案館位於失落王都仍停在崩壞前一刻的街區中，破碎旗幟、凝固水流、裂開鐘面與沒有主人的王家徽記讓整座城市像被時間封住。這裡是高階副本入口與世界王前置路線節點，玩家可以 inspect 石碑、卷宗、倒影與王家紋章來判斷王都滅亡順序，也能 search 市集殘攤、軍械庫、墓室和禮拜堂尋找鑰匙線索。若隊伍只沿主路衝向王座，亡靈騎士、巫妖殘影、石像鬼與暗影刺客會從側廊合圍；若依序清理廣場、水道、議政廳與加冕階，則能理解空王座為何仍在等待挑戰者，並找出進入真正王城副本的前置鑰匙與回城路標。',
    exits: [
      { direction: 'west', targetRoomId: 'lost_capital_clock_square', description: '石階回到停鐘廣場' },
      { direction: 'east', targetRoomId: 'lost_capital_judgment_hall', description: '卷宗廊通往審判廳' },
      { direction: 'south', targetRoomId: 'lost_capital_royal_canal', description: '排水梯通往王家水道' },
    ],
    monsters: [
      { monsterId: 'lich', maxCount: 1, respawnSeconds: 1800 },
      { monsterId: 'undead_knight', maxCount: 1, respawnSeconds: 140 },
    ],
    mapSymbol: '[檔]',
    mapX: 2,
    mapY: 1,
    guardianHints: {
      creature: '市政檔案館的凝固影子若忽然錯位，王都守衛與暗影刺客通常正在換線。',
      treasure: '市政檔案館的王家徽記、破卷宗或裂石底下可能藏著空王座線索。',
      spirit: '市政檔案館保留著失落王都在崩壞前最後一刻仍試圖維持秩序的記憶。',
    },
  },

  lost_capital_royal_canal: {
    id: 'lost_capital_royal_canal',
    name: '王家水道',
    zone: 'lost_capital' as RoomDef['zone'],
    image: 'lost_capital_royal_canal.png',
    imagePrompt: '王家水道 in lost_capital, ruined royal capital frozen in time, shattered marble streets, empty throne motifs, ghostly light and dark magic, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text',
    description:
      '王家水道位於失落王都仍停在崩壞前一刻的街區中，破碎旗幟、凝固水流、裂開鐘面與沒有主人的王家徽記讓整座城市像被時間封住。這裡是高階副本入口與世界王前置路線節點，玩家可以 inspect 石碑、卷宗、倒影與王家紋章來判斷王都滅亡順序，也能 search 市集殘攤、軍械庫、墓室和禮拜堂尋找鑰匙線索。若隊伍只沿主路衝向王座，亡靈騎士、巫妖殘影、石像鬼與暗影刺客會從側廊合圍；若依序清理廣場、水道、議政廳與加冕階，則能理解空王座為何仍在等待挑戰者，並找出進入真正王城副本的前置鑰匙與回城路標。',
    exits: [
      { direction: 'west', targetRoomId: 'lost_capital_frozen_market', description: '破橋回到凝固市集' },
      { direction: 'north', targetRoomId: 'lost_capital_civic_archive', description: '排水梯回到檔案館' },
      { direction: 'east', targetRoomId: 'lost_capital_mirror_court', description: '水鏡路通往鏡庭' },
    ],
    monsters: [
      { monsterId: 'undead_knight', maxCount: 2, respawnSeconds: 140 },
      { monsterId: 'shadow_assassin', maxCount: 1, respawnSeconds: 160 },
    ],
    mapSymbol: '[渠]',
    mapX: 3,
    mapY: 0,
    guardianHints: {
      creature: '王家水道的凝固影子若忽然錯位，王都守衛與暗影刺客通常正在換線。',
      treasure: '王家水道的王家徽記、破卷宗或裂石底下可能藏著空王座線索。',
      spirit: '王家水道保留著失落王都在崩壞前最後一刻仍試圖維持秩序的記憶。',
    },
  },

  lost_capital_statue_garden: {
    id: 'lost_capital_statue_garden',
    name: '雕像庭園',
    zone: 'lost_capital' as RoomDef['zone'],
    image: 'lost_capital_statue_garden.png',
    imagePrompt: '雕像庭園 in lost_capital, ruined royal capital frozen in time, shattered marble streets, empty throne motifs, ghostly light and dark magic, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text',
    description:
      '雕像庭園位於失落王都仍停在崩壞前一刻的街區中，破碎旗幟、凝固水流、裂開鐘面與沒有主人的王家徽記讓整座城市像被時間封住。這裡是高階副本入口與世界王前置路線節點，玩家可以 inspect 石碑、卷宗、倒影與王家紋章來判斷王都滅亡順序，也能 search 市集殘攤、軍械庫、墓室和禮拜堂尋找鑰匙線索。若隊伍只沿主路衝向王座，亡靈騎士、巫妖殘影、石像鬼與暗影刺客會從側廊合圍；若依序清理廣場、水道、議政廳與加冕階，則能理解空王座為何仍在等待挑戰者，並找出進入真正王城副本的前置鑰匙與回城路標。',
    exits: [
      { direction: 'west', targetRoomId: 'lost_capital_broken_fountain', description: '裂石路回到破噴泉' },
      { direction: 'east', targetRoomId: 'lost_capital_mirror_court', description: '雕像列通往鏡庭' },
      { direction: 'south', targetRoomId: 'lost_capital_ashen_barracks', description: '軍靴印通往灰兵營' },
    ],
    monsters: [
      { monsterId: 'gargoyle', maxCount: 3, respawnSeconds: 140 },
      { monsterId: 'undead_knight', maxCount: 1, respawnSeconds: 140 },
    ],
    mapSymbol: '[像]',
    mapX: 2,
    mapY: -1,
    guardianHints: {
      creature: '雕像庭園的凝固影子若忽然錯位，王都守衛與暗影刺客通常正在換線。',
      treasure: '雕像庭園的王家徽記、破卷宗或裂石底下可能藏著空王座線索。',
      spirit: '雕像庭園保留著失落王都在崩壞前最後一刻仍試圖維持秩序的記憶。',
    },
  },

  lost_capital_judgment_hall: {
    id: 'lost_capital_judgment_hall',
    name: '審判廳',
    zone: 'lost_capital' as RoomDef['zone'],
    image: 'lost_capital_judgment_hall.png',
    imagePrompt: '審判廳 in lost_capital, ruined royal capital frozen in time, shattered marble streets, empty throne motifs, ghostly light and dark magic, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text',
    description:
      '審判廳位於失落王都仍停在崩壞前一刻的街區中，破碎旗幟、凝固水流、裂開鐘面與沒有主人的王家徽記讓整座城市像被時間封住。這裡是高階副本入口與世界王前置路線節點，玩家可以 inspect 石碑、卷宗、倒影與王家紋章來判斷王都滅亡順序，也能 search 市集殘攤、軍械庫、墓室和禮拜堂尋找鑰匙線索。若隊伍只沿主路衝向王座，亡靈騎士、巫妖殘影、石像鬼與暗影刺客會從側廊合圍；若依序清理廣場、水道、議政廳與加冕階，則能理解空王座為何仍在等待挑戰者，並找出進入真正王城副本的前置鑰匙與回城路標。',
    exits: [
      { direction: 'west', targetRoomId: 'lost_capital_civic_archive', description: '卷宗廊回到檔案館' },
      { direction: 'east', targetRoomId: 'lost_capital_senate_ruin', description: '法槌路通往議政廢廳' },
      { direction: 'south', targetRoomId: 'lost_capital_mirror_court', description: '判席階通往鏡庭' },
    ],
    monsters: [
      { monsterId: 'lich', maxCount: 1, respawnSeconds: 1800 },
      { monsterId: 'shadow_assassin', maxCount: 2, respawnSeconds: 160 },
    ],
    mapSymbol: '[審]',
    mapX: 3,
    mapY: 1,
    guardianHints: {
      creature: '審判廳的凝固影子若忽然錯位，王都守衛與暗影刺客通常正在換線。',
      treasure: '審判廳的王家徽記、破卷宗或裂石底下可能藏著空王座線索。',
      spirit: '審判廳保留著失落王都在崩壞前最後一刻仍試圖維持秩序的記憶。',
    },
  },

  lost_capital_mirror_court: {
    id: 'lost_capital_mirror_court',
    name: '鏡庭',
    zone: 'lost_capital' as RoomDef['zone'],
    image: 'lost_capital_mirror_court.png',
    imagePrompt: '鏡庭 in lost_capital, ruined royal capital frozen in time, shattered marble streets, empty throne motifs, ghostly light and dark magic, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text',
    description:
      '鏡庭位於失落王都仍停在崩壞前一刻的街區中，破碎旗幟、凝固水流、裂開鐘面與沒有主人的王家徽記讓整座城市像被時間封住。這裡是高階副本入口與世界王前置路線節點，玩家可以 inspect 石碑、卷宗、倒影與王家紋章來判斷王都滅亡順序，也能 search 市集殘攤、軍械庫、墓室和禮拜堂尋找鑰匙線索。若隊伍只沿主路衝向王座，亡靈騎士、巫妖殘影、石像鬼與暗影刺客會從側廊合圍；若依序清理廣場、水道、議政廳與加冕階，則能理解空王座為何仍在等待挑戰者，並找出進入真正王城副本的前置鑰匙與回城路標。',
    exits: [
      { direction: 'west', targetRoomId: 'lost_capital_royal_canal', description: '水鏡路回到王家水道' },
      { direction: 'north', targetRoomId: 'lost_capital_judgment_hall', description: '判席階回到審判廳' },
      { direction: 'east', targetRoomId: 'lost_capital_coronation_stairs', description: '倒影階通往加冕階' },
    ],
    monsters: [
      { monsterId: 'shadow_assassin', maxCount: 2, respawnSeconds: 160 },
      { monsterId: 'lich', maxCount: 1, respawnSeconds: 1800 },
    ],
    mapSymbol: '[鏡]',
    mapX: 4,
    mapY: 0,
    guardianHints: {
      creature: '鏡庭的凝固影子若忽然錯位，王都守衛與暗影刺客通常正在換線。',
      treasure: '鏡庭的王家徽記、破卷宗或裂石底下可能藏著空王座線索。',
      spirit: '鏡庭保留著失落王都在崩壞前最後一刻仍試圖維持秩序的記憶。',
    },
  },

  lost_capital_ashen_barracks: {
    id: 'lost_capital_ashen_barracks',
    name: '灰兵營',
    zone: 'lost_capital' as RoomDef['zone'],
    image: 'lost_capital_ashen_barracks.png',
    imagePrompt: '灰兵營 in lost_capital, ruined royal capital frozen in time, shattered marble streets, empty throne motifs, ghostly light and dark magic, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text',
    description:
      '灰兵營位於失落王都仍停在崩壞前一刻的街區中，破碎旗幟、凝固水流、裂開鐘面與沒有主人的王家徽記讓整座城市像被時間封住。這裡是高階副本入口與世界王前置路線節點，玩家可以 inspect 石碑、卷宗、倒影與王家紋章來判斷王都滅亡順序，也能 search 市集殘攤、軍械庫、墓室和禮拜堂尋找鑰匙線索。若隊伍只沿主路衝向王座，亡靈騎士、巫妖殘影、石像鬼與暗影刺客會從側廊合圍；若依序清理廣場、水道、議政廳與加冕階，則能理解空王座為何仍在等待挑戰者，並找出進入真正王城副本的前置鑰匙與回城路標。',
    exits: [
      { direction: 'north', targetRoomId: 'lost_capital_statue_garden', description: '軍靴印回到雕像庭園' },
      { direction: 'east', targetRoomId: 'lost_capital_armory_vault', description: '鐵門通往軍械庫' },
    ],
    monsters: [
      { monsterId: 'undead_knight', maxCount: 3, respawnSeconds: 140 },
      { monsterId: 'skeleton_general', maxCount: 1, respawnSeconds: 300 },
    ],
    mapSymbol: '[營]',
    mapX: 3,
    mapY: -1,
    guardianHints: {
      creature: '灰兵營的凝固影子若忽然錯位，王都守衛與暗影刺客通常正在換線。',
      treasure: '灰兵營的王家徽記、破卷宗或裂石底下可能藏著空王座線索。',
      spirit: '灰兵營保留著失落王都在崩壞前最後一刻仍試圖維持秩序的記憶。',
    },
  },

  lost_capital_senate_ruin: {
    id: 'lost_capital_senate_ruin',
    name: '議政廢廳',
    zone: 'lost_capital' as RoomDef['zone'],
    image: 'lost_capital_senate_ruin.png',
    imagePrompt: '議政廢廳 in lost_capital, ruined royal capital frozen in time, shattered marble streets, empty throne motifs, ghostly light and dark magic, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text',
    description:
      '議政廢廳位於失落王都仍停在崩壞前一刻的街區中，破碎旗幟、凝固水流、裂開鐘面與沒有主人的王家徽記讓整座城市像被時間封住。這裡是高階副本入口與世界王前置路線節點，玩家可以 inspect 石碑、卷宗、倒影與王家紋章來判斷王都滅亡順序，也能 search 市集殘攤、軍械庫、墓室和禮拜堂尋找鑰匙線索。若隊伍只沿主路衝向王座，亡靈騎士、巫妖殘影、石像鬼與暗影刺客會從側廊合圍；若依序清理廣場、水道、議政廳與加冕階，則能理解空王座為何仍在等待挑戰者，並找出進入真正王城副本的前置鑰匙與回城路標。',
    exits: [
      { direction: 'west', targetRoomId: 'lost_capital_judgment_hall', description: '法槌路回到審判廳' },
      { direction: 'east', targetRoomId: 'lost_capital_sun_chapel', description: '碎柱路通往日輪禮拜堂' },
      { direction: 'south', targetRoomId: 'lost_capital_coronation_stairs', description: '議席階通往加冕階' },
    ],
    monsters: [
      { monsterId: 'lich', maxCount: 1, respawnSeconds: 1800 },
      { monsterId: 'undead_knight', maxCount: 2, respawnSeconds: 140 },
    ],
    mapSymbol: '[議]',
    mapX: 4,
    mapY: 1,
    guardianHints: {
      creature: '議政廢廳的凝固影子若忽然錯位，王都守衛與暗影刺客通常正在換線。',
      treasure: '議政廢廳的王家徽記、破卷宗或裂石底下可能藏著空王座線索。',
      spirit: '議政廢廳保留著失落王都在崩壞前最後一刻仍試圖維持秩序的記憶。',
    },
  },

  lost_capital_coronation_stairs: {
    id: 'lost_capital_coronation_stairs',
    name: '加冕階',
    zone: 'lost_capital' as RoomDef['zone'],
    image: 'lost_capital_coronation_stairs.png',
    imagePrompt: '加冕階 in lost_capital, ruined royal capital frozen in time, shattered marble streets, empty throne motifs, ghostly light and dark magic, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text',
    description:
      '加冕階位於失落王都仍停在崩壞前一刻的街區中，破碎旗幟、凝固水流、裂開鐘面與沒有主人的王家徽記讓整座城市像被時間封住。這裡是高階副本入口與世界王前置路線節點，玩家可以 inspect 石碑、卷宗、倒影與王家紋章來判斷王都滅亡順序，也能 search 市集殘攤、軍械庫、墓室和禮拜堂尋找鑰匙線索。若隊伍只沿主路衝向王座，亡靈騎士、巫妖殘影、石像鬼與暗影刺客會從側廊合圍；若依序清理廣場、水道、議政廳與加冕階，則能理解空王座為何仍在等待挑戰者，並找出進入真正王城副本的前置鑰匙與回城路標。',
    exits: [
      { direction: 'west', targetRoomId: 'lost_capital_mirror_court', description: '倒影階回到鏡庭' },
      { direction: 'north', targetRoomId: 'lost_capital_senate_ruin', description: '議席階回到議政廢廳' },
      { direction: 'east', targetRoomId: 'lost_capital_throne_anteroom', description: '紅毯通往王座前廳' },
    ],
    monsters: [
      { monsterId: 'skeleton_general', maxCount: 1, respawnSeconds: 300 },
      { monsterId: 'undead_knight', maxCount: 2, respawnSeconds: 140 },
    ],
    mapSymbol: '[冠]',
    mapX: 5,
    mapY: 0,
    guardianHints: {
      creature: '加冕階的凝固影子若忽然錯位，王都守衛與暗影刺客通常正在換線。',
      treasure: '加冕階的王家徽記、破卷宗或裂石底下可能藏著空王座線索。',
      spirit: '加冕階保留著失落王都在崩壞前最後一刻仍試圖維持秩序的記憶。',
    },
  },

  lost_capital_armory_vault: {
    id: 'lost_capital_armory_vault',
    name: '軍械庫',
    zone: 'lost_capital' as RoomDef['zone'],
    image: 'lost_capital_armory_vault.png',
    imagePrompt: '軍械庫 in lost_capital, ruined royal capital frozen in time, shattered marble streets, empty throne motifs, ghostly light and dark magic, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text',
    description:
      '軍械庫位於失落王都仍停在崩壞前一刻的街區中，破碎旗幟、凝固水流、裂開鐘面與沒有主人的王家徽記讓整座城市像被時間封住。這裡是高階副本入口與世界王前置路線節點，玩家可以 inspect 石碑、卷宗、倒影與王家紋章來判斷王都滅亡順序，也能 search 市集殘攤、軍械庫、墓室和禮拜堂尋找鑰匙線索。若隊伍只沿主路衝向王座，亡靈騎士、巫妖殘影、石像鬼與暗影刺客會從側廊合圍；若依序清理廣場、水道、議政廳與加冕階，則能理解空王座為何仍在等待挑戰者，並找出進入真正王城副本的前置鑰匙與回城路標。',
    exits: [
      { direction: 'west', targetRoomId: 'lost_capital_ashen_barracks', description: '鐵門回到灰兵營' },
      { direction: 'east', targetRoomId: 'lost_capital_crown_crypt', description: '封劍路通往王冠墓室' },
    ],
    monsters: [
      { monsterId: 'undead_knight', maxCount: 3, respawnSeconds: 140 },
      { monsterId: 'gargoyle', maxCount: 1, respawnSeconds: 140 },
    ],
    mapSymbol: '[械]',
    mapX: 4,
    mapY: -1,
    guardianHints: {
      creature: '軍械庫的凝固影子若忽然錯位，王都守衛與暗影刺客通常正在換線。',
      treasure: '軍械庫的王家徽記、破卷宗或裂石底下可能藏著空王座線索。',
      spirit: '軍械庫保留著失落王都在崩壞前最後一刻仍試圖維持秩序的記憶。',
    },
  },

  lost_capital_sun_chapel: {
    id: 'lost_capital_sun_chapel',
    name: '日輪禮拜堂',
    zone: 'lost_capital' as RoomDef['zone'],
    image: 'lost_capital_sun_chapel.png',
    imagePrompt: '日輪禮拜堂 in lost_capital, ruined royal capital frozen in time, shattered marble streets, empty throne motifs, ghostly light and dark magic, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text',
    description:
      '日輪禮拜堂位於失落王都仍停在崩壞前一刻的街區中，破碎旗幟、凝固水流、裂開鐘面與沒有主人的王家徽記讓整座城市像被時間封住。這裡是高階副本入口與世界王前置路線節點，玩家可以 inspect 石碑、卷宗、倒影與王家紋章來判斷王都滅亡順序，也能 search 市集殘攤、軍械庫、墓室和禮拜堂尋找鑰匙線索。若隊伍只沿主路衝向王座，亡靈騎士、巫妖殘影、石像鬼與暗影刺客會從側廊合圍；若依序清理廣場、水道、議政廳與加冕階，則能理解空王座為何仍在等待挑戰者，並找出進入真正王城副本的前置鑰匙與回城路標。',
    exits: [
      { direction: 'west', targetRoomId: 'lost_capital_senate_ruin', description: '碎柱路回到議政廢廳' },
      { direction: 'south', targetRoomId: 'lost_capital_throne_anteroom', description: '光階通往王座前廳' },
      { direction: 'east', targetRoomId: 'lost_capital_timefracture_gallery', description: '裂光廊通往時裂長廊' },
    ],
    monsters: [
      { monsterId: 'gargoyle', maxCount: 2, respawnSeconds: 140 },
      { monsterId: 'lich', maxCount: 1, respawnSeconds: 1800 },
    ],
    mapSymbol: '[堂]',
    mapX: 5,
    mapY: 1,
    guardianHints: {
      creature: '日輪禮拜堂的凝固影子若忽然錯位，王都守衛與暗影刺客通常正在換線。',
      treasure: '日輪禮拜堂的王家徽記、破卷宗或裂石底下可能藏著空王座線索。',
      spirit: '日輪禮拜堂保留著失落王都在崩壞前最後一刻仍試圖維持秩序的記憶。',
    },
  },

  lost_capital_throne_anteroom: {
    id: 'lost_capital_throne_anteroom',
    name: '王座前廳',
    zone: 'lost_capital' as RoomDef['zone'],
    image: 'lost_capital_throne_anteroom.png',
    imagePrompt: '王座前廳 in lost_capital, ruined royal capital frozen in time, shattered marble streets, empty throne motifs, ghostly light and dark magic, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text',
    description:
      '王座前廳位於失落王都仍停在崩壞前一刻的街區中，破碎旗幟、凝固水流、裂開鐘面與沒有主人的王家徽記讓整座城市像被時間封住。這裡是高階副本入口與世界王前置路線節點，玩家可以 inspect 石碑、卷宗、倒影與王家紋章來判斷王都滅亡順序，也能 search 市集殘攤、軍械庫、墓室和禮拜堂尋找鑰匙線索。若隊伍只沿主路衝向王座，亡靈騎士、巫妖殘影、石像鬼與暗影刺客會從側廊合圍；若依序清理廣場、水道、議政廳與加冕階，則能理解空王座為何仍在等待挑戰者，並找出進入真正王城副本的前置鑰匙與回城路標。',
    exits: [
      { direction: 'west', targetRoomId: 'lost_capital_coronation_stairs', description: '紅毯回到加冕階' },
      { direction: 'north', targetRoomId: 'lost_capital_sun_chapel', description: '光階回到日輪禮拜堂' },
      { direction: 'east', targetRoomId: 'lost_capital_empty_throne', description: '黑金門通往空王座' },
    ],
    monsters: [
      { monsterId: 'undead_knight', maxCount: 3, respawnSeconds: 140 },
      { monsterId: 'lich', maxCount: 1, respawnSeconds: 1800 },
    ],
    mapSymbol: '[前]',
    mapX: 6,
    mapY: 0,
    guardianHints: {
      creature: '王座前廳的凝固影子若忽然錯位，王都守衛與暗影刺客通常正在換線。',
      treasure: '王座前廳的王家徽記、破卷宗或裂石底下可能藏著空王座線索。',
      spirit: '王座前廳保留著失落王都在崩壞前最後一刻仍試圖維持秩序的記憶。',
    },
  },

  lost_capital_crown_crypt: {
    id: 'lost_capital_crown_crypt',
    name: '王冠墓室',
    zone: 'lost_capital' as RoomDef['zone'],
    image: 'lost_capital_crown_crypt.png',
    imagePrompt: '王冠墓室 in lost_capital, ruined royal capital frozen in time, shattered marble streets, empty throne motifs, ghostly light and dark magic, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text',
    description:
      '王冠墓室位於失落王都仍停在崩壞前一刻的街區中，破碎旗幟、凝固水流、裂開鐘面與沒有主人的王家徽記讓整座城市像被時間封住。這裡是高階副本入口與世界王前置路線節點，玩家可以 inspect 石碑、卷宗、倒影與王家紋章來判斷王都滅亡順序，也能 search 市集殘攤、軍械庫、墓室和禮拜堂尋找鑰匙線索。若隊伍只沿主路衝向王座，亡靈騎士、巫妖殘影、石像鬼與暗影刺客會從側廊合圍；若依序清理廣場、水道、議政廳與加冕階，則能理解空王座為何仍在等待挑戰者，並找出進入真正王城副本的前置鑰匙與回城路標。',
    exits: [
      { direction: 'west', targetRoomId: 'lost_capital_armory_vault', description: '封劍路回到軍械庫' },
      { direction: 'east', targetRoomId: 'lost_capital_empty_throne', description: '墓道通往空王座' },
    ],
    monsters: [
      { monsterId: 'lich', maxCount: 1, respawnSeconds: 1800 },
      { monsterId: 'skeleton_general', maxCount: 1, respawnSeconds: 300 },
    ],
    mapSymbol: '[墓]',
    mapX: 5,
    mapY: -1,
    guardianHints: {
      creature: '王冠墓室的凝固影子若忽然錯位，王都守衛與暗影刺客通常正在換線。',
      treasure: '王冠墓室的王家徽記、破卷宗或裂石底下可能藏著空王座線索。',
      spirit: '王冠墓室保留著失落王都在崩壞前最後一刻仍試圖維持秩序的記憶。',
    },
  },

  lost_capital_timefracture_gallery: {
    id: 'lost_capital_timefracture_gallery',
    name: '時裂長廊',
    zone: 'lost_capital' as RoomDef['zone'],
    image: 'lost_capital_timefracture_gallery.png',
    imagePrompt: '時裂長廊 in lost_capital, ruined royal capital frozen in time, shattered marble streets, empty throne motifs, ghostly light and dark magic, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text',
    description:
      '時裂長廊位於失落王都仍停在崩壞前一刻的街區中，破碎旗幟、凝固水流、裂開鐘面與沒有主人的王家徽記讓整座城市像被時間封住。這裡是高階副本入口與世界王前置路線節點，玩家可以 inspect 石碑、卷宗、倒影與王家紋章來判斷王都滅亡順序，也能 search 市集殘攤、軍械庫、墓室和禮拜堂尋找鑰匙線索。若隊伍只沿主路衝向王座，亡靈騎士、巫妖殘影、石像鬼與暗影刺客會從側廊合圍；若依序清理廣場、水道、議政廳與加冕階，則能理解空王座為何仍在等待挑戰者，並找出進入真正王城副本的前置鑰匙與回城路標。',
    exits: [
      { direction: 'west', targetRoomId: 'lost_capital_sun_chapel', description: '裂光廊回到日輪禮拜堂' },
      { direction: 'south', targetRoomId: 'lost_capital_empty_throne', description: '斷時階通往空王座' },
    ],
    monsters: [
      { monsterId: 'shadow_assassin', maxCount: 3, respawnSeconds: 160 },
      { monsterId: 'lich', maxCount: 1, respawnSeconds: 1800 },
    ],
    mapSymbol: '[時]',
    mapX: 6,
    mapY: 1,
    guardianHints: {
      creature: '時裂長廊的凝固影子若忽然錯位，王都守衛與暗影刺客通常正在換線。',
      treasure: '時裂長廊的王家徽記、破卷宗或裂石底下可能藏著空王座線索。',
      spirit: '時裂長廊保留著失落王都在崩壞前最後一刻仍試圖維持秩序的記憶。',
    },
  },

  lost_capital_empty_throne: {
    id: 'lost_capital_empty_throne',
    name: '空王座',
    zone: 'lost_capital' as RoomDef['zone'],
    image: 'lost_capital_empty_throne.png',
    imagePrompt: '空王座 in lost_capital, ruined royal capital frozen in time, shattered marble streets, empty throne motifs, ghostly light and dark magic, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text',
    description:
      '空王座位於失落王都仍停在崩壞前一刻的街區中，破碎旗幟、凝固水流、裂開鐘面與沒有主人的王家徽記讓整座城市像被時間封住。這裡是高階副本入口與世界王前置路線節點，玩家可以 inspect 石碑、卷宗、倒影與王家紋章來判斷王都滅亡順序，也能 search 市集殘攤、軍械庫、墓室和禮拜堂尋找鑰匙線索。若隊伍只沿主路衝向王座，亡靈騎士、巫妖殘影、石像鬼與暗影刺客會從側廊合圍；若依序清理廣場、水道、議政廳與加冕階，則能理解空王座為何仍在等待挑戰者，並找出進入真正王城副本的前置鑰匙與回城路標。',
    exits: [
      { direction: 'west', targetRoomId: 'lost_capital_throne_anteroom', description: '黑金門回到王座前廳' },
      { direction: 'north', targetRoomId: 'lost_capital_timefracture_gallery', description: '斷時階回到時裂長廊' },
      { direction: 'south', targetRoomId: 'lost_capital_crown_crypt', description: '墓道回到王冠墓室' },
    ],
    monsters: [
      { monsterId: 'lich', maxCount: 1, respawnSeconds: 1800 },
      { monsterId: 'skeleton_general', maxCount: 1, respawnSeconds: 300 },
      { monsterId: 'undead_knight', maxCount: 3, respawnSeconds: 140 },
    ],
    mapSymbol: '[王]',
    mapX: 7,
    mapY: 0,
    guardianHints: {
      creature: '空王座的凝固影子若忽然錯位，王都守衛與暗影刺客通常正在換線。',
      treasure: '空王座的王家徽記、破卷宗或裂石底下可能藏著空王座線索。',
      spirit: '空王座保留著失落王都在崩壞前最後一刻仍試圖維持秩序的記憶。',
    },
  },
  sky_isles_lift_dock: {
    id: 'sky_isles_lift_dock',
    name: '升空碼頭',
    zone: 'sky_isles' as RoomDef['zone'],
    image: 'sky_isles_lift_dock.png',
    imagePrompt: '升空碼頭 in sky_isles, floating islands above sea of clouds, ancient glowing runes, broken sky bridges, white temple ruins, lightning and radiant light, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text',
    description:
      '升空碼頭位於浮空群島破碎島鏈之間，腳下石板靠古代符文懸在雲海上方，遠處可見斷橋、神殿白牆、雷鷹巢影與被風暴包圍的最高浮島。這裡是終局區域的高階路線節點，玩家可以 inspect 符文錨、羽痕、斷裂橋樑與光環投影來判斷浮島穩定度，也能 search 神殿殘片、浮市攤位與星墜碎石尋找事件線索。若隊伍無視雲橋晃動、突發雷雲與空中獵手的俯衝，很容易被飛龍和風暴龍影逼落邊緣；若穩定推進，則能掌握世界王浮島與天空核心聖所的開啟節奏，並確保每次跨島前都能找到可回收的穩定符文碎片。',
    exits: [
      { direction: 'east', targetRoomId: 'sky_isles_chain_bridge', description: '鐵鏈橋通往第一座浮島' },
      { direction: 'north', targetRoomId: 'sky_isles_cloudwatch_post', description: '雲哨索道通往哨站' },
    ],
    monsters: [
      { monsterId: 'wind_hawk', maxCount: 2, respawnSeconds: 80 },
    ],
    mapSymbol: '[門]',
    mapX: 0,
    mapY: 0,
    guardianHints: {
      creature: '升空碼頭的雲影若突然破開，空中獵手或風暴龍影通常正在接近。',
      treasure: '升空碼頭的符文錨、碎橋或神殿殘片旁可能藏著浮島事件線索。',
      spirit: '升空碼頭保留著古代符文讓群島懸浮於雲海之上的記憶。',
    },
  },

  sky_isles_chain_bridge: {
    id: 'sky_isles_chain_bridge',
    name: '鐵鏈雲橋',
    zone: 'sky_isles' as RoomDef['zone'],
    image: 'sky_isles_chain_bridge.png',
    imagePrompt: '鐵鏈雲橋 in sky_isles, floating islands above sea of clouds, ancient glowing runes, broken sky bridges, white temple ruins, lightning and radiant light, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text',
    description:
      '鐵鏈雲橋位於浮空群島破碎島鏈之間，腳下石板靠古代符文懸在雲海上方，遠處可見斷橋、神殿白牆、雷鷹巢影與被風暴包圍的最高浮島。這裡是終局區域的高階路線節點，玩家可以 inspect 符文錨、羽痕、斷裂橋樑與光環投影來判斷浮島穩定度，也能 search 神殿殘片、浮市攤位與星墜碎石尋找事件線索。若隊伍無視雲橋晃動、突發雷雲與空中獵手的俯衝，很容易被飛龍和風暴龍影逼落邊緣；若穩定推進，則能掌握世界王浮島與天空核心聖所的開啟節奏，並確保每次跨島前都能找到可回收的穩定符文碎片。',
    exits: [
      { direction: 'west', targetRoomId: 'sky_isles_lift_dock', description: '鐵鏈橋回到升空碼頭' },
      { direction: 'east', targetRoomId: 'sky_isles_rune_anchor', description: '符文錨臺固定著下一座島' },
      { direction: 'south', targetRoomId: 'sky_isles_fallen_span', description: '斷橋殘段向下垂落' },
    ],
    monsters: [
      { monsterId: 'thunder_eagle', maxCount: 2, respawnSeconds: 120 },
    ],
    mapSymbol: '[橋]',
    mapX: 1,
    mapY: 0,
    guardianHints: {
      creature: '鐵鏈雲橋的雲影若突然破開，空中獵手或風暴龍影通常正在接近。',
      treasure: '鐵鏈雲橋的符文錨、碎橋或神殿殘片旁可能藏著浮島事件線索。',
      spirit: '鐵鏈雲橋保留著古代符文讓群島懸浮於雲海之上的記憶。',
    },
  },

  sky_isles_cloudwatch_post: {
    id: 'sky_isles_cloudwatch_post',
    name: '雲哨站',
    zone: 'sky_isles' as RoomDef['zone'],
    image: 'sky_isles_cloudwatch_post.png',
    imagePrompt: '雲哨站 in sky_isles, floating islands above sea of clouds, ancient glowing runes, broken sky bridges, white temple ruins, lightning and radiant light, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text',
    description:
      '雲哨站位於浮空群島破碎島鏈之間，腳下石板靠古代符文懸在雲海上方，遠處可見斷橋、神殿白牆、雷鷹巢影與被風暴包圍的最高浮島。這裡是終局區域的高階路線節點，玩家可以 inspect 符文錨、羽痕、斷裂橋樑與光環投影來判斷浮島穩定度，也能 search 神殿殘片、浮市攤位與星墜碎石尋找事件線索。若隊伍無視雲橋晃動、突發雷雲與空中獵手的俯衝，很容易被飛龍和風暴龍影逼落邊緣；若穩定推進，則能掌握世界王浮島與天空核心聖所的開啟節奏，並確保每次跨島前都能找到可回收的穩定符文碎片。',
    exits: [
      { direction: 'south', targetRoomId: 'sky_isles_lift_dock', description: '索道回到升空碼頭' },
      { direction: 'east', targetRoomId: 'sky_isles_gale_meadow', description: '風草坡通往雲上草甸' },
    ],
    monsters: [
      { monsterId: 'wind_hawk', maxCount: 3, respawnSeconds: 80 },
      { monsterId: 'thunder_eagle', maxCount: 1, respawnSeconds: 120 },
    ],
    mapSymbol: '[哨]',
    mapX: 0,
    mapY: 1,
    guardianHints: {
      creature: '雲哨站的雲影若突然破開，空中獵手或風暴龍影通常正在接近。',
      treasure: '雲哨站的符文錨、碎橋或神殿殘片旁可能藏著浮島事件線索。',
      spirit: '雲哨站保留著古代符文讓群島懸浮於雲海之上的記憶。',
    },
  },

  sky_isles_gale_meadow: {
    id: 'sky_isles_gale_meadow',
    name: '雲上草甸',
    zone: 'sky_isles' as RoomDef['zone'],
    image: 'sky_isles_gale_meadow.png',
    imagePrompt: '雲上草甸 in sky_isles, floating islands above sea of clouds, ancient glowing runes, broken sky bridges, white temple ruins, lightning and radiant light, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text',
    description:
      '雲上草甸位於浮空群島破碎島鏈之間，腳下石板靠古代符文懸在雲海上方，遠處可見斷橋、神殿白牆、雷鷹巢影與被風暴包圍的最高浮島。這裡是終局區域的高階路線節點，玩家可以 inspect 符文錨、羽痕、斷裂橋樑與光環投影來判斷浮島穩定度，也能 search 神殿殘片、浮市攤位與星墜碎石尋找事件線索。若隊伍無視雲橋晃動、突發雷雲與空中獵手的俯衝，很容易被飛龍和風暴龍影逼落邊緣；若穩定推進，則能掌握世界王浮島與天空核心聖所的開啟節奏，並確保每次跨島前都能找到可回收的穩定符文碎片。',
    exits: [
      { direction: 'west', targetRoomId: 'sky_isles_cloudwatch_post', description: '風草坡回到雲哨站' },
      { direction: 'east', targetRoomId: 'sky_isles_sunlit_shrine', description: '白光路通往日照小祠' },
      { direction: 'south', targetRoomId: 'sky_isles_rune_anchor', description: '符文路落向錨臺' },
    ],
    monsters: [
      { monsterId: 'thunder_eagle', maxCount: 2, respawnSeconds: 120 },
      { monsterId: 'wyvern', maxCount: 1, respawnSeconds: 180 },
    ],
    mapSymbol: '[草]',
    mapX: 1,
    mapY: 1,
    guardianHints: {
      creature: '雲上草甸的雲影若突然破開，空中獵手或風暴龍影通常正在接近。',
      treasure: '雲上草甸的符文錨、碎橋或神殿殘片旁可能藏著浮島事件線索。',
      spirit: '雲上草甸保留著古代符文讓群島懸浮於雲海之上的記憶。',
    },
  },

  sky_isles_rune_anchor: {
    id: 'sky_isles_rune_anchor',
    name: '符文錨臺',
    zone: 'sky_isles' as RoomDef['zone'],
    image: 'sky_isles_rune_anchor.png',
    imagePrompt: '符文錨臺 in sky_isles, floating islands above sea of clouds, ancient glowing runes, broken sky bridges, white temple ruins, lightning and radiant light, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text',
    description:
      '符文錨臺位於浮空群島破碎島鏈之間，腳下石板靠古代符文懸在雲海上方，遠處可見斷橋、神殿白牆、雷鷹巢影與被風暴包圍的最高浮島。這裡是終局區域的高階路線節點，玩家可以 inspect 符文錨、羽痕、斷裂橋樑與光環投影來判斷浮島穩定度，也能 search 神殿殘片、浮市攤位與星墜碎石尋找事件線索。若隊伍無視雲橋晃動、突發雷雲與空中獵手的俯衝，很容易被飛龍和風暴龍影逼落邊緣；若穩定推進，則能掌握世界王浮島與天空核心聖所的開啟節奏，並確保每次跨島前都能找到可回收的穩定符文碎片。',
    exits: [
      { direction: 'west', targetRoomId: 'sky_isles_chain_bridge', description: '符文錨臺回到鐵鏈雲橋' },
      { direction: 'north', targetRoomId: 'sky_isles_gale_meadow', description: '符文路升回雲上草甸' },
      { direction: 'east', targetRoomId: 'sky_isles_prism_causeway', description: '折光堤道通往主島' },
    ],
    monsters: [
      { monsterId: 'crystal_golem', maxCount: 1, respawnSeconds: 160 },
      { monsterId: 'thunder_eagle', maxCount: 2, respawnSeconds: 120 },
    ],
    mapSymbol: '[錨]',
    mapX: 2,
    mapY: 0,
    guardianHints: {
      creature: '符文錨臺的雲影若突然破開，空中獵手或風暴龍影通常正在接近。',
      treasure: '符文錨臺的符文錨、碎橋或神殿殘片旁可能藏著浮島事件線索。',
      spirit: '符文錨臺保留著古代符文讓群島懸浮於雲海之上的記憶。',
    },
  },

  sky_isles_fallen_span: {
    id: 'sky_isles_fallen_span',
    name: '墜落橋段',
    zone: 'sky_isles' as RoomDef['zone'],
    image: 'sky_isles_fallen_span.png',
    imagePrompt: '墜落橋段 in sky_isles, floating islands above sea of clouds, ancient glowing runes, broken sky bridges, white temple ruins, lightning and radiant light, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text',
    description:
      '墜落橋段位於浮空群島破碎島鏈之間，腳下石板靠古代符文懸在雲海上方，遠處可見斷橋、神殿白牆、雷鷹巢影與被風暴包圍的最高浮島。這裡是終局區域的高階路線節點，玩家可以 inspect 符文錨、羽痕、斷裂橋樑與光環投影來判斷浮島穩定度，也能 search 神殿殘片、浮市攤位與星墜碎石尋找事件線索。若隊伍無視雲橋晃動、突發雷雲與空中獵手的俯衝，很容易被飛龍和風暴龍影逼落邊緣；若穩定推進，則能掌握世界王浮島與天空核心聖所的開啟節奏，並確保每次跨島前都能找到可回收的穩定符文碎片。',
    exits: [
      { direction: 'north', targetRoomId: 'sky_isles_chain_bridge', description: '斷橋殘段回到鐵鏈雲橋' },
      { direction: 'east', targetRoomId: 'sky_isles_thunder_nest', description: '羽痕通往雷鷹巢' },
    ],
    monsters: [
      { monsterId: 'wyvern', maxCount: 1, respawnSeconds: 180 },
      { monsterId: 'wind_hawk', maxCount: 2, respawnSeconds: 80 },
    ],
    mapSymbol: '[墜]',
    mapX: 1,
    mapY: -1,
    guardianHints: {
      creature: '墜落橋段的雲影若突然破開，空中獵手或風暴龍影通常正在接近。',
      treasure: '墜落橋段的符文錨、碎橋或神殿殘片旁可能藏著浮島事件線索。',
      spirit: '墜落橋段保留著古代符文讓群島懸浮於雲海之上的記憶。',
    },
  },

  sky_isles_sunlit_shrine: {
    id: 'sky_isles_sunlit_shrine',
    name: '日照小祠',
    zone: 'sky_isles' as RoomDef['zone'],
    image: 'sky_isles_sunlit_shrine.png',
    imagePrompt: '日照小祠 in sky_isles, floating islands above sea of clouds, ancient glowing runes, broken sky bridges, white temple ruins, lightning and radiant light, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text',
    description:
      '日照小祠位於浮空群島破碎島鏈之間，腳下石板靠古代符文懸在雲海上方，遠處可見斷橋、神殿白牆、雷鷹巢影與被風暴包圍的最高浮島。這裡是終局區域的高階路線節點，玩家可以 inspect 符文錨、羽痕、斷裂橋樑與光環投影來判斷浮島穩定度，也能 search 神殿殘片、浮市攤位與星墜碎石尋找事件線索。若隊伍無視雲橋晃動、突發雷雲與空中獵手的俯衝，很容易被飛龍和風暴龍影逼落邊緣；若穩定推進，則能掌握世界王浮島與天空核心聖所的開啟節奏，並確保每次跨島前都能找到可回收的穩定符文碎片。',
    exits: [
      { direction: 'west', targetRoomId: 'sky_isles_gale_meadow', description: '白光路回到雲上草甸' },
      { direction: 'east', targetRoomId: 'sky_isles_oracle_steps', description: '祈禱階通往神諭階' },
    ],
    monsters: [
      { monsterId: 'thunder_eagle', maxCount: 2, respawnSeconds: 120 },
      { monsterId: 'crystal_golem', maxCount: 1, respawnSeconds: 160 },
    ],
    mapSymbol: '[祠]',
    mapX: 2,
    mapY: 1,
    guardianHints: {
      creature: '日照小祠的雲影若突然破開，空中獵手或風暴龍影通常正在接近。',
      treasure: '日照小祠的符文錨、碎橋或神殿殘片旁可能藏著浮島事件線索。',
      spirit: '日照小祠保留著古代符文讓群島懸浮於雲海之上的記憶。',
    },
  },

  sky_isles_prism_causeway: {
    id: 'sky_isles_prism_causeway',
    name: '折光堤道',
    zone: 'sky_isles' as RoomDef['zone'],
    image: 'sky_isles_prism_causeway.png',
    imagePrompt: '折光堤道 in sky_isles, floating islands above sea of clouds, ancient glowing runes, broken sky bridges, white temple ruins, lightning and radiant light, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text',
    description:
      '折光堤道位於浮空群島破碎島鏈之間，腳下石板靠古代符文懸在雲海上方，遠處可見斷橋、神殿白牆、雷鷹巢影與被風暴包圍的最高浮島。這裡是終局區域的高階路線節點，玩家可以 inspect 符文錨、羽痕、斷裂橋樑與光環投影來判斷浮島穩定度，也能 search 神殿殘片、浮市攤位與星墜碎石尋找事件線索。若隊伍無視雲橋晃動、突發雷雲與空中獵手的俯衝，很容易被飛龍和風暴龍影逼落邊緣；若穩定推進，則能掌握世界王浮島與天空核心聖所的開啟節奏，並確保每次跨島前都能找到可回收的穩定符文碎片。',
    exits: [
      { direction: 'west', targetRoomId: 'sky_isles_rune_anchor', description: '折光堤道回到符文錨臺' },
      { direction: 'east', targetRoomId: 'sky_isles_sky_market_ruin', description: '浮市殘街在前方' },
      { direction: 'north', targetRoomId: 'sky_isles_oracle_steps', description: '亮階通往神諭階' },
    ],
    monsters: [
      { monsterId: 'crystal_golem', maxCount: 2, respawnSeconds: 160 },
      { monsterId: 'wyvern', maxCount: 1, respawnSeconds: 180 },
    ],
    mapSymbol: '[光]',
    mapX: 3,
    mapY: 0,
    guardianHints: {
      creature: '折光堤道的雲影若突然破開，空中獵手或風暴龍影通常正在接近。',
      treasure: '折光堤道的符文錨、碎橋或神殿殘片旁可能藏著浮島事件線索。',
      spirit: '折光堤道保留著古代符文讓群島懸浮於雲海之上的記憶。',
    },
  },

  sky_isles_thunder_nest: {
    id: 'sky_isles_thunder_nest',
    name: '雷鷹巢島',
    zone: 'sky_isles' as RoomDef['zone'],
    image: 'sky_isles_thunder_nest.png',
    imagePrompt: '雷鷹巢島 in sky_isles, floating islands above sea of clouds, ancient glowing runes, broken sky bridges, white temple ruins, lightning and radiant light, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text',
    description:
      '雷鷹巢島位於浮空群島破碎島鏈之間，腳下石板靠古代符文懸在雲海上方，遠處可見斷橋、神殿白牆、雷鷹巢影與被風暴包圍的最高浮島。這裡是終局區域的高階路線節點，玩家可以 inspect 符文錨、羽痕、斷裂橋樑與光環投影來判斷浮島穩定度，也能 search 神殿殘片、浮市攤位與星墜碎石尋找事件線索。若隊伍無視雲橋晃動、突發雷雲與空中獵手的俯衝，很容易被飛龍和風暴龍影逼落邊緣；若穩定推進，則能掌握世界王浮島與天空核心聖所的開啟節奏，並確保每次跨島前都能找到可回收的穩定符文碎片。',
    exits: [
      { direction: 'west', targetRoomId: 'sky_isles_fallen_span', description: '羽痕回到墜落橋段' },
      { direction: 'east', targetRoomId: 'sky_isles_stormwell', description: '雷痕通往風暴井' },
    ],
    monsters: [
      { monsterId: 'thunder_eagle', maxCount: 4, respawnSeconds: 120 },
      { monsterId: 'wyvern', maxCount: 1, respawnSeconds: 180 },
    ],
    mapSymbol: '[鷹]',
    mapX: 2,
    mapY: -1,
    guardianHints: {
      creature: '雷鷹巢島的雲影若突然破開，空中獵手或風暴龍影通常正在接近。',
      treasure: '雷鷹巢島的符文錨、碎橋或神殿殘片旁可能藏著浮島事件線索。',
      spirit: '雷鷹巢島保留著古代符文讓群島懸浮於雲海之上的記憶。',
    },
  },

  sky_isles_oracle_steps: {
    id: 'sky_isles_oracle_steps',
    name: '神諭階',
    zone: 'sky_isles' as RoomDef['zone'],
    image: 'sky_isles_oracle_steps.png',
    imagePrompt: '神諭階 in sky_isles, floating islands above sea of clouds, ancient glowing runes, broken sky bridges, white temple ruins, lightning and radiant light, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text',
    description:
      '神諭階位於浮空群島破碎島鏈之間，腳下石板靠古代符文懸在雲海上方，遠處可見斷橋、神殿白牆、雷鷹巢影與被風暴包圍的最高浮島。這裡是終局區域的高階路線節點，玩家可以 inspect 符文錨、羽痕、斷裂橋樑與光環投影來判斷浮島穩定度，也能 search 神殿殘片、浮市攤位與星墜碎石尋找事件線索。若隊伍無視雲橋晃動、突發雷雲與空中獵手的俯衝，很容易被飛龍和風暴龍影逼落邊緣；若穩定推進，則能掌握世界王浮島與天空核心聖所的開啟節奏，並確保每次跨島前都能找到可回收的穩定符文碎片。',
    exits: [
      { direction: 'west', targetRoomId: 'sky_isles_sunlit_shrine', description: '祈禱階回到日照小祠' },
      { direction: 'south', targetRoomId: 'sky_isles_prism_causeway', description: '亮階回到折光堤道' },
      { direction: 'east', targetRoomId: 'sky_isles_cloud_temple_gate', description: '白石階通往雲神殿門' },
    ],
    monsters: [
      { monsterId: 'crystal_golem', maxCount: 1, respawnSeconds: 160 },
      { monsterId: 'thunder_eagle', maxCount: 2, respawnSeconds: 120 },
    ],
    mapSymbol: '[諭]',
    mapX: 3,
    mapY: 1,
    guardianHints: {
      creature: '神諭階的雲影若突然破開，空中獵手或風暴龍影通常正在接近。',
      treasure: '神諭階的符文錨、碎橋或神殿殘片旁可能藏著浮島事件線索。',
      spirit: '神諭階保留著古代符文讓群島懸浮於雲海之上的記憶。',
    },
  },

  sky_isles_sky_market_ruin: {
    id: 'sky_isles_sky_market_ruin',
    name: '浮市殘街',
    zone: 'sky_isles' as RoomDef['zone'],
    image: 'sky_isles_sky_market_ruin.png',
    imagePrompt: '浮市殘街 in sky_isles, floating islands above sea of clouds, ancient glowing runes, broken sky bridges, white temple ruins, lightning and radiant light, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text',
    description:
      '浮市殘街位於浮空群島破碎島鏈之間，腳下石板靠古代符文懸在雲海上方，遠處可見斷橋、神殿白牆、雷鷹巢影與被風暴包圍的最高浮島。這裡是終局區域的高階路線節點，玩家可以 inspect 符文錨、羽痕、斷裂橋樑與光環投影來判斷浮島穩定度，也能 search 神殿殘片、浮市攤位與星墜碎石尋找事件線索。若隊伍無視雲橋晃動、突發雷雲與空中獵手的俯衝，很容易被飛龍和風暴龍影逼落邊緣；若穩定推進，則能掌握世界王浮島與天空核心聖所的開啟節奏，並確保每次跨島前都能找到可回收的穩定符文碎片。',
    exits: [
      { direction: 'west', targetRoomId: 'sky_isles_prism_causeway', description: '浮市街回到折光堤道' },
      { direction: 'east', targetRoomId: 'sky_isles_mirror_pool', description: '破攤路通往天鏡池' },
      { direction: 'south', targetRoomId: 'sky_isles_stormwell', description: '排雲梯通往風暴井' },
    ],
    monsters: [
      { monsterId: 'wyvern', maxCount: 2, respawnSeconds: 180 },
      { monsterId: 'thunder_eagle', maxCount: 1, respawnSeconds: 120 },
    ],
    mapSymbol: '[市]',
    mapX: 4,
    mapY: 0,
    guardianHints: {
      creature: '浮市殘街的雲影若突然破開，空中獵手或風暴龍影通常正在接近。',
      treasure: '浮市殘街的符文錨、碎橋或神殿殘片旁可能藏著浮島事件線索。',
      spirit: '浮市殘街保留著古代符文讓群島懸浮於雲海之上的記憶。',
    },
  },

  sky_isles_stormwell: {
    id: 'sky_isles_stormwell',
    name: '風暴井',
    zone: 'sky_isles' as RoomDef['zone'],
    image: 'sky_isles_stormwell.png',
    imagePrompt: '風暴井 in sky_isles, floating islands above sea of clouds, ancient glowing runes, broken sky bridges, white temple ruins, lightning and radiant light, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text',
    description:
      '風暴井位於浮空群島破碎島鏈之間，腳下石板靠古代符文懸在雲海上方，遠處可見斷橋、神殿白牆、雷鷹巢影與被風暴包圍的最高浮島。這裡是終局區域的高階路線節點，玩家可以 inspect 符文錨、羽痕、斷裂橋樑與光環投影來判斷浮島穩定度，也能 search 神殿殘片、浮市攤位與星墜碎石尋找事件線索。若隊伍無視雲橋晃動、突發雷雲與空中獵手的俯衝，很容易被飛龍和風暴龍影逼落邊緣；若穩定推進，則能掌握世界王浮島與天空核心聖所的開啟節奏，並確保每次跨島前都能找到可回收的穩定符文碎片。',
    exits: [
      { direction: 'west', targetRoomId: 'sky_isles_thunder_nest', description: '雷痕回到雷鷹巢島' },
      { direction: 'north', targetRoomId: 'sky_isles_sky_market_ruin', description: '排雲梯回到浮市殘街' },
      { direction: 'east', targetRoomId: 'sky_isles_broken_obelisk', description: '電弧路通往斷方尖碑' },
    ],
    monsters: [
      { monsterId: 'storm_dragon', maxCount: 1, respawnSeconds: 1800 },
      { monsterId: 'thunder_eagle', maxCount: 2, respawnSeconds: 120 },
    ],
    mapSymbol: '[井]',
    mapX: 3,
    mapY: -1,
    guardianHints: {
      creature: '風暴井的雲影若突然破開，空中獵手或風暴龍影通常正在接近。',
      treasure: '風暴井的符文錨、碎橋或神殿殘片旁可能藏著浮島事件線索。',
      spirit: '風暴井保留著古代符文讓群島懸浮於雲海之上的記憶。',
    },
  },

  sky_isles_cloud_temple_gate: {
    id: 'sky_isles_cloud_temple_gate',
    name: '雲神殿門',
    zone: 'sky_isles' as RoomDef['zone'],
    image: 'sky_isles_cloud_temple_gate.png',
    imagePrompt: '雲神殿門 in sky_isles, floating islands above sea of clouds, ancient glowing runes, broken sky bridges, white temple ruins, lightning and radiant light, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text',
    description:
      '雲神殿門位於浮空群島破碎島鏈之間，腳下石板靠古代符文懸在雲海上方，遠處可見斷橋、神殿白牆、雷鷹巢影與被風暴包圍的最高浮島。這裡是終局區域的高階路線節點，玩家可以 inspect 符文錨、羽痕、斷裂橋樑與光環投影來判斷浮島穩定度，也能 search 神殿殘片、浮市攤位與星墜碎石尋找事件線索。若隊伍無視雲橋晃動、突發雷雲與空中獵手的俯衝，很容易被飛龍和風暴龍影逼落邊緣；若穩定推進，則能掌握世界王浮島與天空核心聖所的開啟節奏，並確保每次跨島前都能找到可回收的穩定符文碎片。',
    exits: [
      { direction: 'west', targetRoomId: 'sky_isles_oracle_steps', description: '白石階回到神諭階' },
      { direction: 'east', targetRoomId: 'sky_isles_halo_courtyard', description: '光環庭院在門後' },
      { direction: 'south', targetRoomId: 'sky_isles_mirror_pool', description: '水光階落向天鏡池' },
    ],
    monsters: [
      { monsterId: 'crystal_golem', maxCount: 2, respawnSeconds: 160 },
      { monsterId: 'wyvern', maxCount: 1, respawnSeconds: 180 },
    ],
    mapSymbol: '[殿]',
    mapX: 4,
    mapY: 1,
    guardianHints: {
      creature: '雲神殿門的雲影若突然破開，空中獵手或風暴龍影通常正在接近。',
      treasure: '雲神殿門的符文錨、碎橋或神殿殘片旁可能藏著浮島事件線索。',
      spirit: '雲神殿門保留著古代符文讓群島懸浮於雲海之上的記憶。',
    },
  },

  sky_isles_mirror_pool: {
    id: 'sky_isles_mirror_pool',
    name: '天鏡池',
    zone: 'sky_isles' as RoomDef['zone'],
    image: 'sky_isles_mirror_pool.png',
    imagePrompt: '天鏡池 in sky_isles, floating islands above sea of clouds, ancient glowing runes, broken sky bridges, white temple ruins, lightning and radiant light, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text',
    description:
      '天鏡池位於浮空群島破碎島鏈之間，腳下石板靠古代符文懸在雲海上方，遠處可見斷橋、神殿白牆、雷鷹巢影與被風暴包圍的最高浮島。這裡是終局區域的高階路線節點，玩家可以 inspect 符文錨、羽痕、斷裂橋樑與光環投影來判斷浮島穩定度，也能 search 神殿殘片、浮市攤位與星墜碎石尋找事件線索。若隊伍無視雲橋晃動、突發雷雲與空中獵手的俯衝，很容易被飛龍和風暴龍影逼落邊緣；若穩定推進，則能掌握世界王浮島與天空核心聖所的開啟節奏，並確保每次跨島前都能找到可回收的穩定符文碎片。',
    exits: [
      { direction: 'west', targetRoomId: 'sky_isles_sky_market_ruin', description: '破攤路回到浮市殘街' },
      { direction: 'north', targetRoomId: 'sky_isles_cloud_temple_gate', description: '水光階回到雲神殿門' },
      { direction: 'east', targetRoomId: 'sky_isles_halo_courtyard', description: '鏡面橋通往光環庭院' },
    ],
    monsters: [
      { monsterId: 'crystal_golem', maxCount: 1, respawnSeconds: 160 },
      { monsterId: 'storm_dragon', maxCount: 1, respawnSeconds: 1800 },
    ],
    mapSymbol: '[鏡]',
    mapX: 5,
    mapY: 0,
    guardianHints: {
      creature: '天鏡池的雲影若突然破開，空中獵手或風暴龍影通常正在接近。',
      treasure: '天鏡池的符文錨、碎橋或神殿殘片旁可能藏著浮島事件線索。',
      spirit: '天鏡池保留著古代符文讓群島懸浮於雲海之上的記憶。',
    },
  },

  sky_isles_broken_obelisk: {
    id: 'sky_isles_broken_obelisk',
    name: '斷方尖碑',
    zone: 'sky_isles' as RoomDef['zone'],
    image: 'sky_isles_broken_obelisk.png',
    imagePrompt: '斷方尖碑 in sky_isles, floating islands above sea of clouds, ancient glowing runes, broken sky bridges, white temple ruins, lightning and radiant light, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text',
    description:
      '斷方尖碑位於浮空群島破碎島鏈之間，腳下石板靠古代符文懸在雲海上方，遠處可見斷橋、神殿白牆、雷鷹巢影與被風暴包圍的最高浮島。這裡是終局區域的高階路線節點，玩家可以 inspect 符文錨、羽痕、斷裂橋樑與光環投影來判斷浮島穩定度，也能 search 神殿殘片、浮市攤位與星墜碎石尋找事件線索。若隊伍無視雲橋晃動、突發雷雲與空中獵手的俯衝，很容易被飛龍和風暴龍影逼落邊緣；若穩定推進，則能掌握世界王浮島與天空核心聖所的開啟節奏，並確保每次跨島前都能找到可回收的穩定符文碎片。',
    exits: [
      { direction: 'west', targetRoomId: 'sky_isles_stormwell', description: '電弧路回到風暴井' },
      { direction: 'east', targetRoomId: 'sky_isles_starfall_ledge', description: '碑影路通往星墜崖' },
    ],
    monsters: [
      { monsterId: 'wyvern', maxCount: 2, respawnSeconds: 180 },
      { monsterId: 'crystal_golem', maxCount: 1, respawnSeconds: 160 },
    ],
    mapSymbol: '[碑]',
    mapX: 4,
    mapY: -1,
    guardianHints: {
      creature: '斷方尖碑的雲影若突然破開，空中獵手或風暴龍影通常正在接近。',
      treasure: '斷方尖碑的符文錨、碎橋或神殿殘片旁可能藏著浮島事件線索。',
      spirit: '斷方尖碑保留著古代符文讓群島懸浮於雲海之上的記憶。',
    },
  },

  sky_isles_halo_courtyard: {
    id: 'sky_isles_halo_courtyard',
    name: '光環庭院',
    zone: 'sky_isles' as RoomDef['zone'],
    image: 'sky_isles_halo_courtyard.png',
    imagePrompt: '光環庭院 in sky_isles, floating islands above sea of clouds, ancient glowing runes, broken sky bridges, white temple ruins, lightning and radiant light, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text',
    description:
      '光環庭院位於浮空群島破碎島鏈之間，腳下石板靠古代符文懸在雲海上方，遠處可見斷橋、神殿白牆、雷鷹巢影與被風暴包圍的最高浮島。這裡是終局區域的高階路線節點，玩家可以 inspect 符文錨、羽痕、斷裂橋樑與光環投影來判斷浮島穩定度，也能 search 神殿殘片、浮市攤位與星墜碎石尋找事件線索。若隊伍無視雲橋晃動、突發雷雲與空中獵手的俯衝，很容易被飛龍和風暴龍影逼落邊緣；若穩定推進，則能掌握世界王浮島與天空核心聖所的開啟節奏，並確保每次跨島前都能找到可回收的穩定符文碎片。',
    exits: [
      { direction: 'west', targetRoomId: 'sky_isles_mirror_pool', description: '鏡面橋回到天鏡池' },
      { direction: 'north', targetRoomId: 'sky_isles_cloud_temple_gate', description: '光環庭院回到雲神殿門' },
      { direction: 'east', targetRoomId: 'sky_isles_ascendant_bridge', description: '升天橋通往最高島' },
    ],
    monsters: [
      { monsterId: 'crystal_golem', maxCount: 2, respawnSeconds: 160 },
      { monsterId: 'thunder_eagle', maxCount: 2, respawnSeconds: 120 },
    ],
    mapSymbol: '[環]',
    mapX: 6,
    mapY: 0,
    guardianHints: {
      creature: '光環庭院的雲影若突然破開，空中獵手或風暴龍影通常正在接近。',
      treasure: '光環庭院的符文錨、碎橋或神殿殘片旁可能藏著浮島事件線索。',
      spirit: '光環庭院保留著古代符文讓群島懸浮於雲海之上的記憶。',
    },
  },

  sky_isles_starfall_ledge: {
    id: 'sky_isles_starfall_ledge',
    name: '星墜崖',
    zone: 'sky_isles' as RoomDef['zone'],
    image: 'sky_isles_starfall_ledge.png',
    imagePrompt: '星墜崖 in sky_isles, floating islands above sea of clouds, ancient glowing runes, broken sky bridges, white temple ruins, lightning and radiant light, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text',
    description:
      '星墜崖位於浮空群島破碎島鏈之間，腳下石板靠古代符文懸在雲海上方，遠處可見斷橋、神殿白牆、雷鷹巢影與被風暴包圍的最高浮島。這裡是終局區域的高階路線節點，玩家可以 inspect 符文錨、羽痕、斷裂橋樑與光環投影來判斷浮島穩定度，也能 search 神殿殘片、浮市攤位與星墜碎石尋找事件線索。若隊伍無視雲橋晃動、突發雷雲與空中獵手的俯衝，很容易被飛龍和風暴龍影逼落邊緣；若穩定推進，則能掌握世界王浮島與天空核心聖所的開啟節奏，並確保每次跨島前都能找到可回收的穩定符文碎片。',
    exits: [
      { direction: 'west', targetRoomId: 'sky_isles_broken_obelisk', description: '碑影路回到斷方尖碑' },
      { direction: 'east', targetRoomId: 'sky_isles_ascendant_bridge', description: '碎星路通往升天橋' },
    ],
    monsters: [
      { monsterId: 'storm_dragon', maxCount: 1, respawnSeconds: 1800 },
      { monsterId: 'wyvern', maxCount: 2, respawnSeconds: 180 },
    ],
    mapSymbol: '[星]',
    mapX: 5,
    mapY: -1,
    guardianHints: {
      creature: '星墜崖的雲影若突然破開，空中獵手或風暴龍影通常正在接近。',
      treasure: '星墜崖的符文錨、碎橋或神殿殘片旁可能藏著浮島事件線索。',
      spirit: '星墜崖保留著古代符文讓群島懸浮於雲海之上的記憶。',
    },
  },

  sky_isles_ascendant_bridge: {
    id: 'sky_isles_ascendant_bridge',
    name: '升天橋',
    zone: 'sky_isles' as RoomDef['zone'],
    image: 'sky_isles_ascendant_bridge.png',
    imagePrompt: '升天橋 in sky_isles, floating islands above sea of clouds, ancient glowing runes, broken sky bridges, white temple ruins, lightning and radiant light, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text',
    description:
      '升天橋位於浮空群島破碎島鏈之間，腳下石板靠古代符文懸在雲海上方，遠處可見斷橋、神殿白牆、雷鷹巢影與被風暴包圍的最高浮島。這裡是終局區域的高階路線節點，玩家可以 inspect 符文錨、羽痕、斷裂橋樑與光環投影來判斷浮島穩定度，也能 search 神殿殘片、浮市攤位與星墜碎石尋找事件線索。若隊伍無視雲橋晃動、突發雷雲與空中獵手的俯衝，很容易被飛龍和風暴龍影逼落邊緣；若穩定推進，則能掌握世界王浮島與天空核心聖所的開啟節奏，並確保每次跨島前都能找到可回收的穩定符文碎片。',
    exits: [
      { direction: 'west', targetRoomId: 'sky_isles_halo_courtyard', description: '升天橋回到光環庭院' },
      { direction: 'south', targetRoomId: 'sky_isles_starfall_ledge', description: '碎星路回到星墜崖' },
      { direction: 'east', targetRoomId: 'sky_isles_worldboss_island', description: '風牆裂口通往世界王島' },
    ],
    monsters: [
      { monsterId: 'wyvern', maxCount: 2, respawnSeconds: 180 },
      { monsterId: 'thunder_eagle', maxCount: 3, respawnSeconds: 120 },
    ],
    mapSymbol: '[升]',
    mapX: 7,
    mapY: 0,
    guardianHints: {
      creature: '升天橋的雲影若突然破開，空中獵手或風暴龍影通常正在接近。',
      treasure: '升天橋的符文錨、碎橋或神殿殘片旁可能藏著浮島事件線索。',
      spirit: '升天橋保留著古代符文讓群島懸浮於雲海之上的記憶。',
    },
  },

  sky_isles_worldboss_island: {
    id: 'sky_isles_worldboss_island',
    name: '世界王浮島',
    zone: 'sky_isles' as RoomDef['zone'],
    image: 'sky_isles_worldboss_island.png',
    imagePrompt: '世界王浮島 in sky_isles, floating islands above sea of clouds, ancient glowing runes, broken sky bridges, white temple ruins, lightning and radiant light, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text',
    description:
      '世界王浮島位於浮空群島破碎島鏈之間，腳下石板靠古代符文懸在雲海上方，遠處可見斷橋、神殿白牆、雷鷹巢影與被風暴包圍的最高浮島。這裡是終局區域的高階路線節點，玩家可以 inspect 符文錨、羽痕、斷裂橋樑與光環投影來判斷浮島穩定度，也能 search 神殿殘片、浮市攤位與星墜碎石尋找事件線索。若隊伍無視雲橋晃動、突發雷雲與空中獵手的俯衝，很容易被飛龍和風暴龍影逼落邊緣；若穩定推進，則能掌握世界王浮島與天空核心聖所的開啟節奏，並確保每次跨島前都能找到可回收的穩定符文碎片。',
    exits: [
      { direction: 'west', targetRoomId: 'sky_isles_ascendant_bridge', description: '風牆裂口回到升天橋' },
      { direction: 'south', targetRoomId: 'sky_isles_skycore_sanctum', description: '核心階梯通往天空核心' },
    ],
    monsters: [
      { monsterId: 'storm_dragon', maxCount: 1, respawnSeconds: 1800 },
      { monsterId: 'wyvern', maxCount: 2, respawnSeconds: 180 },
      { monsterId: 'thunder_eagle', maxCount: 3, respawnSeconds: 120 },
    ],
    mapSymbol: '[王]',
    mapX: 8,
    mapY: 0,
    guardianHints: {
      creature: '世界王浮島的雲影若突然破開，空中獵手或風暴龍影通常正在接近。',
      treasure: '世界王浮島的符文錨、碎橋或神殿殘片旁可能藏著浮島事件線索。',
      spirit: '世界王浮島保留著古代符文讓群島懸浮於雲海之上的記憶。',
    },
  },

  sky_isles_skycore_sanctum: {
    id: 'sky_isles_skycore_sanctum',
    name: '天空核心聖所',
    zone: 'sky_isles' as RoomDef['zone'],
    image: 'sky_isles_skycore_sanctum.png',
    imagePrompt: '天空核心聖所 in sky_isles, floating islands above sea of clouds, ancient glowing runes, broken sky bridges, white temple ruins, lightning and radiant light, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text',
    description:
      '天空核心聖所位於浮空群島破碎島鏈之間，腳下石板靠古代符文懸在雲海上方，遠處可見斷橋、神殿白牆、雷鷹巢影與被風暴包圍的最高浮島。這裡是終局區域的高階路線節點，玩家可以 inspect 符文錨、羽痕、斷裂橋樑與光環投影來判斷浮島穩定度，也能 search 神殿殘片、浮市攤位與星墜碎石尋找事件線索。若隊伍無視雲橋晃動、突發雷雲與空中獵手的俯衝，很容易被飛龍和風暴龍影逼落邊緣；若穩定推進，則能掌握世界王浮島與天空核心聖所的開啟節奏，並確保每次跨島前都能找到可回收的穩定符文碎片。',
    exits: [
      { direction: 'north', targetRoomId: 'sky_isles_worldboss_island', description: '核心階梯回到世界王浮島' },
    ],
    monsters: [
      { monsterId: 'storm_dragon', maxCount: 1, respawnSeconds: 1800 },
      { monsterId: 'crystal_golem', maxCount: 2, respawnSeconds: 160 },
    ],
    mapSymbol: '[核]',
    mapX: 8,
    mapY: -1,
    guardianHints: {
      creature: '天空核心聖所的雲影若突然破開，空中獵手或風暴龍影通常正在接近。',
      treasure: '天空核心聖所的符文錨、碎橋或神殿殘片旁可能藏著浮島事件線索。',
      spirit: '天空核心聖所保留著古代符文讓群島懸浮於雲海之上的記憶。',
    },
  },
  deepsea_temple_tide_gate: {
    id: 'deepsea_temple_tide_gate',
    name: '潮汐石門',
    zone: 'deepsea_temple' as RoomDef['zone'],
    image: 'deepsea_temple_tide_gate.png',
    imagePrompt: '潮汐石門 in deepsea_temple, submerged ancient ocean temple, blue sacred fire underwater, coral pillars, dark abyss, sea creatures and forbidden altar ruins, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text',
    description:
      '潮汐石門位於沉入海底的深海神殿中，藍色聖火在水下燃燒，破碎貝殼、珊瑚石柱、古老潮鐘與禁忌祭文共同指向更深處的潮汐王座。這裡是終局區域的高階路線節點，玩家可以 inspect 水流方向、祭壇刻痕、貝殼回音與神像裂縫來判斷暗流與怪物巡行，也能 search 書庫、骨錨、月池和花園尋找古神線索。若隊伍忽略水壓、黑暗低語與暗流牽引，魚人、海蛇、水母與九頭蛇會把隊形撕開；若穩定推進，則能逐步掌握禁忌祭壇和潮汐王座的開啟順序，並確認隊伍仍有足夠氣泡護符抵抗下一段深水壓力與黑暗低語迴聲。',
    exits: [
      { direction: 'east', targetRoomId: 'deepsea_temple_bluefire_hall', description: '藍火長廊通往神殿內部' },
      { direction: 'north', targetRoomId: 'deepsea_temple_coral_watch', description: '珊瑚階通往外哨' },
    ],
    monsters: [
      { monsterId: 'deep_fishman', maxCount: 2, respawnSeconds: 120 },
    ],
    mapSymbol: '[門]',
    mapX: 0,
    mapY: 0,
    guardianHints: {
      creature: '潮汐石門的水流若忽然倒轉，深海巡行者通常已經接近。',
      treasure: '潮汐石門的貝殼、祭文或骨錨旁可能藏著深海神殿事件線索。',
      spirit: '潮汐石門保留著神殿沉入海底後仍用藍火維持封印的記憶。',
    },
  },

  deepsea_temple_bluefire_hall: {
    id: 'deepsea_temple_bluefire_hall',
    name: '藍火長廊',
    zone: 'deepsea_temple' as RoomDef['zone'],
    image: 'deepsea_temple_bluefire_hall.png',
    imagePrompt: '藍火長廊 in deepsea_temple, submerged ancient ocean temple, blue sacred fire underwater, coral pillars, dark abyss, sea creatures and forbidden altar ruins, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text',
    description:
      '藍火長廊位於沉入海底的深海神殿中，藍色聖火在水下燃燒，破碎貝殼、珊瑚石柱、古老潮鐘與禁忌祭文共同指向更深處的潮汐王座。這裡是終局區域的高階路線節點，玩家可以 inspect 水流方向、祭壇刻痕、貝殼回音與神像裂縫來判斷暗流與怪物巡行，也能 search 書庫、骨錨、月池和花園尋找古神線索。若隊伍忽略水壓、黑暗低語與暗流牽引，魚人、海蛇、水母與九頭蛇會把隊形撕開；若穩定推進，則能逐步掌握禁忌祭壇和潮汐王座的開啟順序，並確認隊伍仍有足夠氣泡護符抵抗下一段深水壓力與黑暗低語迴聲。',
    exits: [
      { direction: 'west', targetRoomId: 'deepsea_temple_tide_gate', description: '藍火長廊回到潮汐石門' },
      { direction: 'east', targetRoomId: 'deepsea_temple_shell_court', description: '貝殼庭院在前方' },
      { direction: 'south', targetRoomId: 'deepsea_temple_silt_stairs', description: '淤泥階梯下沉' },
    ],
    monsters: [
      { monsterId: 'deep_fishman', maxCount: 2, respawnSeconds: 120 },
      { monsterId: 'jellyfish', maxCount: 2, respawnSeconds: 80 },
    ],
    mapSymbol: '[火]',
    mapX: 1,
    mapY: 0,
    guardianHints: {
      creature: '藍火長廊的水流若忽然倒轉，深海巡行者通常已經接近。',
      treasure: '藍火長廊的貝殼、祭文或骨錨旁可能藏著深海神殿事件線索。',
      spirit: '藍火長廊保留著神殿沉入海底後仍用藍火維持封印的記憶。',
    },
  },

  deepsea_temple_coral_watch: {
    id: 'deepsea_temple_coral_watch',
    name: '珊瑚外哨',
    zone: 'deepsea_temple' as RoomDef['zone'],
    image: 'deepsea_temple_coral_watch.png',
    imagePrompt: '珊瑚外哨 in deepsea_temple, submerged ancient ocean temple, blue sacred fire underwater, coral pillars, dark abyss, sea creatures and forbidden altar ruins, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text',
    description:
      '珊瑚外哨位於沉入海底的深海神殿中，藍色聖火在水下燃燒，破碎貝殼、珊瑚石柱、古老潮鐘與禁忌祭文共同指向更深處的潮汐王座。這裡是終局區域的高階路線節點，玩家可以 inspect 水流方向、祭壇刻痕、貝殼回音與神像裂縫來判斷暗流與怪物巡行，也能 search 書庫、骨錨、月池和花園尋找古神線索。若隊伍忽略水壓、黑暗低語與暗流牽引，魚人、海蛇、水母與九頭蛇會把隊形撕開；若穩定推進，則能逐步掌握禁忌祭壇和潮汐王座的開啟順序，並確認隊伍仍有足夠氣泡護符抵抗下一段深水壓力與黑暗低語迴聲。',
    exits: [
      { direction: 'south', targetRoomId: 'deepsea_temple_tide_gate', description: '珊瑚階回到潮汐石門' },
      { direction: 'east', targetRoomId: 'deepsea_temple_choir_reef', description: '歌礁回音在東側' },
    ],
    monsters: [
      { monsterId: 'sea_crab', maxCount: 3, respawnSeconds: 80 },
      { monsterId: 'deep_fishman', maxCount: 1, respawnSeconds: 120 },
    ],
    mapSymbol: '[哨]',
    mapX: 0,
    mapY: 1,
    guardianHints: {
      creature: '珊瑚外哨的水流若忽然倒轉，深海巡行者通常已經接近。',
      treasure: '珊瑚外哨的貝殼、祭文或骨錨旁可能藏著深海神殿事件線索。',
      spirit: '珊瑚外哨保留著神殿沉入海底後仍用藍火維持封印的記憶。',
    },
  },

  deepsea_temple_choir_reef: {
    id: 'deepsea_temple_choir_reef',
    name: '回音歌礁',
    zone: 'deepsea_temple' as RoomDef['zone'],
    image: 'deepsea_temple_choir_reef.png',
    imagePrompt: '回音歌礁 in deepsea_temple, submerged ancient ocean temple, blue sacred fire underwater, coral pillars, dark abyss, sea creatures and forbidden altar ruins, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text',
    description:
      '回音歌礁位於沉入海底的深海神殿中，藍色聖火在水下燃燒，破碎貝殼、珊瑚石柱、古老潮鐘與禁忌祭文共同指向更深處的潮汐王座。這裡是終局區域的高階路線節點，玩家可以 inspect 水流方向、祭壇刻痕、貝殼回音與神像裂縫來判斷暗流與怪物巡行，也能 search 書庫、骨錨、月池和花園尋找古神線索。若隊伍忽略水壓、黑暗低語與暗流牽引，魚人、海蛇、水母與九頭蛇會把隊形撕開；若穩定推進，則能逐步掌握禁忌祭壇和潮汐王座的開啟順序，並確認隊伍仍有足夠氣泡護符抵抗下一段深水壓力與黑暗低語迴聲。',
    exits: [
      { direction: 'west', targetRoomId: 'deepsea_temple_coral_watch', description: '歌礁回到珊瑚外哨' },
      { direction: 'east', targetRoomId: 'deepsea_temple_moonpool_nave', description: '月池中殿在前方' },
      { direction: 'south', targetRoomId: 'deepsea_temple_shell_court', description: '貝光路落向庭院' },
    ],
    monsters: [
      { monsterId: 'jellyfish', maxCount: 3, respawnSeconds: 80 },
      { monsterId: 'sea_serpent', maxCount: 1, respawnSeconds: 160 },
    ],
    mapSymbol: '[歌]',
    mapX: 1,
    mapY: 1,
    guardianHints: {
      creature: '回音歌礁的水流若忽然倒轉，深海巡行者通常已經接近。',
      treasure: '回音歌礁的貝殼、祭文或骨錨旁可能藏著深海神殿事件線索。',
      spirit: '回音歌礁保留著神殿沉入海底後仍用藍火維持封印的記憶。',
    },
  },

  deepsea_temple_shell_court: {
    id: 'deepsea_temple_shell_court',
    name: '貝殼庭院',
    zone: 'deepsea_temple' as RoomDef['zone'],
    image: 'deepsea_temple_shell_court.png',
    imagePrompt: '貝殼庭院 in deepsea_temple, submerged ancient ocean temple, blue sacred fire underwater, coral pillars, dark abyss, sea creatures and forbidden altar ruins, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text',
    description:
      '貝殼庭院位於沉入海底的深海神殿中，藍色聖火在水下燃燒，破碎貝殼、珊瑚石柱、古老潮鐘與禁忌祭文共同指向更深處的潮汐王座。這裡是終局區域的高階路線節點，玩家可以 inspect 水流方向、祭壇刻痕、貝殼回音與神像裂縫來判斷暗流與怪物巡行，也能 search 書庫、骨錨、月池和花園尋找古神線索。若隊伍忽略水壓、黑暗低語與暗流牽引，魚人、海蛇、水母與九頭蛇會把隊形撕開；若穩定推進，則能逐步掌握禁忌祭壇和潮汐王座的開啟順序，並確認隊伍仍有足夠氣泡護符抵抗下一段深水壓力與黑暗低語迴聲。',
    exits: [
      { direction: 'west', targetRoomId: 'deepsea_temple_bluefire_hall', description: '貝殼庭院回到藍火長廊' },
      { direction: 'north', targetRoomId: 'deepsea_temple_choir_reef', description: '貝光路回到回音歌礁' },
      { direction: 'east', targetRoomId: 'deepsea_temple_drowned_library', description: '水封書庫在東側' },
    ],
    monsters: [
      { monsterId: 'sea_crab', maxCount: 3, respawnSeconds: 80 },
      { monsterId: 'deep_fishman', maxCount: 2, respawnSeconds: 120 },
    ],
    mapSymbol: '[庭]',
    mapX: 2,
    mapY: 0,
    guardianHints: {
      creature: '貝殼庭院的水流若忽然倒轉，深海巡行者通常已經接近。',
      treasure: '貝殼庭院的貝殼、祭文或骨錨旁可能藏著深海神殿事件線索。',
      spirit: '貝殼庭院保留著神殿沉入海底後仍用藍火維持封印的記憶。',
    },
  },

  deepsea_temple_silt_stairs: {
    id: 'deepsea_temple_silt_stairs',
    name: '淤泥階梯',
    zone: 'deepsea_temple' as RoomDef['zone'],
    image: 'deepsea_temple_silt_stairs.png',
    imagePrompt: '淤泥階梯 in deepsea_temple, submerged ancient ocean temple, blue sacred fire underwater, coral pillars, dark abyss, sea creatures and forbidden altar ruins, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text',
    description:
      '淤泥階梯位於沉入海底的深海神殿中，藍色聖火在水下燃燒，破碎貝殼、珊瑚石柱、古老潮鐘與禁忌祭文共同指向更深處的潮汐王座。這裡是終局區域的高階路線節點，玩家可以 inspect 水流方向、祭壇刻痕、貝殼回音與神像裂縫來判斷暗流與怪物巡行，也能 search 書庫、骨錨、月池和花園尋找古神線索。若隊伍忽略水壓、黑暗低語與暗流牽引，魚人、海蛇、水母與九頭蛇會把隊形撕開；若穩定推進，則能逐步掌握禁忌祭壇和潮汐王座的開啟順序，並確認隊伍仍有足夠氣泡護符抵抗下一段深水壓力與黑暗低語迴聲。',
    exits: [
      { direction: 'north', targetRoomId: 'deepsea_temple_bluefire_hall', description: '淤泥階梯回到藍火長廊' },
      { direction: 'east', targetRoomId: 'deepsea_temple_darkcurrent_canal', description: '暗流水道向東延伸' },
    ],
    monsters: [
      { monsterId: 'sea_crab', maxCount: 2, respawnSeconds: 80 },
      { monsterId: 'lake_serpent', maxCount: 1, respawnSeconds: 140 },
    ],
    mapSymbol: '[階]',
    mapX: 1,
    mapY: -1,
    guardianHints: {
      creature: '淤泥階梯的水流若忽然倒轉，深海巡行者通常已經接近。',
      treasure: '淤泥階梯的貝殼、祭文或骨錨旁可能藏著深海神殿事件線索。',
      spirit: '淤泥階梯保留著神殿沉入海底後仍用藍火維持封印的記憶。',
    },
  },

  deepsea_temple_moonpool_nave: {
    id: 'deepsea_temple_moonpool_nave',
    name: '月池中殿',
    zone: 'deepsea_temple' as RoomDef['zone'],
    image: 'deepsea_temple_moonpool_nave.png',
    imagePrompt: '月池中殿 in deepsea_temple, submerged ancient ocean temple, blue sacred fire underwater, coral pillars, dark abyss, sea creatures and forbidden altar ruins, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text',
    description:
      '月池中殿位於沉入海底的深海神殿中，藍色聖火在水下燃燒，破碎貝殼、珊瑚石柱、古老潮鐘與禁忌祭文共同指向更深處的潮汐王座。這裡是終局區域的高階路線節點，玩家可以 inspect 水流方向、祭壇刻痕、貝殼回音與神像裂縫來判斷暗流與怪物巡行，也能 search 書庫、骨錨、月池和花園尋找古神線索。若隊伍忽略水壓、黑暗低語與暗流牽引，魚人、海蛇、水母與九頭蛇會把隊形撕開；若穩定推進，則能逐步掌握禁忌祭壇和潮汐王座的開啟順序，並確認隊伍仍有足夠氣泡護符抵抗下一段深水壓力與黑暗低語迴聲。',
    exits: [
      { direction: 'west', targetRoomId: 'deepsea_temple_choir_reef', description: '月池回到回音歌礁' },
      { direction: 'south', targetRoomId: 'deepsea_temple_drowned_library', description: '石階落向水封書庫' },
      { direction: 'east', targetRoomId: 'deepsea_temple_pearl_oratory', description: '珍珠祈室在東側' },
    ],
    monsters: [
      { monsterId: 'jellyfish', maxCount: 2, respawnSeconds: 80 },
      { monsterId: 'deep_fishman', maxCount: 2, respawnSeconds: 120 },
    ],
    mapSymbol: '[月]',
    mapX: 2,
    mapY: 1,
    guardianHints: {
      creature: '月池中殿的水流若忽然倒轉，深海巡行者通常已經接近。',
      treasure: '月池中殿的貝殼、祭文或骨錨旁可能藏著深海神殿事件線索。',
      spirit: '月池中殿保留著神殿沉入海底後仍用藍火維持封印的記憶。',
    },
  },

  deepsea_temple_drowned_library: {
    id: 'deepsea_temple_drowned_library',
    name: '水封書庫',
    zone: 'deepsea_temple' as RoomDef['zone'],
    image: 'deepsea_temple_drowned_library.png',
    imagePrompt: '水封書庫 in deepsea_temple, submerged ancient ocean temple, blue sacred fire underwater, coral pillars, dark abyss, sea creatures and forbidden altar ruins, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text',
    description:
      '水封書庫位於沉入海底的深海神殿中，藍色聖火在水下燃燒，破碎貝殼、珊瑚石柱、古老潮鐘與禁忌祭文共同指向更深處的潮汐王座。這裡是終局區域的高階路線節點，玩家可以 inspect 水流方向、祭壇刻痕、貝殼回音與神像裂縫來判斷暗流與怪物巡行，也能 search 書庫、骨錨、月池和花園尋找古神線索。若隊伍忽略水壓、黑暗低語與暗流牽引，魚人、海蛇、水母與九頭蛇會把隊形撕開；若穩定推進，則能逐步掌握禁忌祭壇和潮汐王座的開啟順序，並確認隊伍仍有足夠氣泡護符抵抗下一段深水壓力與黑暗低語迴聲。',
    exits: [
      { direction: 'west', targetRoomId: 'deepsea_temple_shell_court', description: '水封書庫回到貝殼庭院' },
      { direction: 'north', targetRoomId: 'deepsea_temple_moonpool_nave', description: '石階回到月池中殿' },
      { direction: 'east', targetRoomId: 'deepsea_temple_tideclock_room', description: '潮鐘室在東側' },
    ],
    monsters: [
      { monsterId: 'deep_fishman', maxCount: 2, respawnSeconds: 120 },
      { monsterId: 'jellyfish', maxCount: 2, respawnSeconds: 80 },
    ],
    mapSymbol: '[書]',
    mapX: 3,
    mapY: 0,
    guardianHints: {
      creature: '水封書庫的水流若忽然倒轉，深海巡行者通常已經接近。',
      treasure: '水封書庫的貝殼、祭文或骨錨旁可能藏著深海神殿事件線索。',
      spirit: '水封書庫保留著神殿沉入海底後仍用藍火維持封印的記憶。',
    },
  },

  deepsea_temple_darkcurrent_canal: {
    id: 'deepsea_temple_darkcurrent_canal',
    name: '暗流水道',
    zone: 'deepsea_temple' as RoomDef['zone'],
    image: 'deepsea_temple_darkcurrent_canal.png',
    imagePrompt: '暗流水道 in deepsea_temple, submerged ancient ocean temple, blue sacred fire underwater, coral pillars, dark abyss, sea creatures and forbidden altar ruins, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text',
    description:
      '暗流水道位於沉入海底的深海神殿中，藍色聖火在水下燃燒，破碎貝殼、珊瑚石柱、古老潮鐘與禁忌祭文共同指向更深處的潮汐王座。這裡是終局區域的高階路線節點，玩家可以 inspect 水流方向、祭壇刻痕、貝殼回音與神像裂縫來判斷暗流與怪物巡行，也能 search 書庫、骨錨、月池和花園尋找古神線索。若隊伍忽略水壓、黑暗低語與暗流牽引，魚人、海蛇、水母與九頭蛇會把隊形撕開；若穩定推進，則能逐步掌握禁忌祭壇和潮汐王座的開啟順序，並確認隊伍仍有足夠氣泡護符抵抗下一段深水壓力與黑暗低語迴聲。',
    exits: [
      { direction: 'west', targetRoomId: 'deepsea_temple_silt_stairs', description: '暗流水道回到淤泥階梯' },
      { direction: 'east', targetRoomId: 'deepsea_temple_bone_anchor', description: '骨錨臺在暗流盡頭' },
      { direction: 'north', targetRoomId: 'deepsea_temple_drowned_library', description: '排水井上接書庫' },
    ],
    monsters: [
      { monsterId: 'sea_serpent', maxCount: 2, respawnSeconds: 160 },
      { monsterId: 'deep_fishman', maxCount: 1, respawnSeconds: 120 },
    ],
    mapSymbol: '[渠]',
    mapX: 2,
    mapY: -1,
    guardianHints: {
      creature: '暗流水道的水流若忽然倒轉，深海巡行者通常已經接近。',
      treasure: '暗流水道的貝殼、祭文或骨錨旁可能藏著深海神殿事件線索。',
      spirit: '暗流水道保留著神殿沉入海底後仍用藍火維持封印的記憶。',
    },
  },

  deepsea_temple_pearl_oratory: {
    id: 'deepsea_temple_pearl_oratory',
    name: '珍珠祈室',
    zone: 'deepsea_temple' as RoomDef['zone'],
    image: 'deepsea_temple_pearl_oratory.png',
    imagePrompt: '珍珠祈室 in deepsea_temple, submerged ancient ocean temple, blue sacred fire underwater, coral pillars, dark abyss, sea creatures and forbidden altar ruins, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text',
    description:
      '珍珠祈室位於沉入海底的深海神殿中，藍色聖火在水下燃燒，破碎貝殼、珊瑚石柱、古老潮鐘與禁忌祭文共同指向更深處的潮汐王座。這裡是終局區域的高階路線節點，玩家可以 inspect 水流方向、祭壇刻痕、貝殼回音與神像裂縫來判斷暗流與怪物巡行，也能 search 書庫、骨錨、月池和花園尋找古神線索。若隊伍忽略水壓、黑暗低語與暗流牽引，魚人、海蛇、水母與九頭蛇會把隊形撕開；若穩定推進，則能逐步掌握禁忌祭壇和潮汐王座的開啟順序，並確認隊伍仍有足夠氣泡護符抵抗下一段深水壓力與黑暗低語迴聲。',
    exits: [
      { direction: 'west', targetRoomId: 'deepsea_temple_moonpool_nave', description: '珍珠祈室回到月池中殿' },
      { direction: 'east', targetRoomId: 'deepsea_temple_statue_trench', description: '神像裂溝在東側' },
    ],
    monsters: [
      { monsterId: 'jellyfish', maxCount: 3, respawnSeconds: 80 },
      { monsterId: 'deep_fishman', maxCount: 2, respawnSeconds: 120 },
    ],
    mapSymbol: '[珠]',
    mapX: 3,
    mapY: 1,
    guardianHints: {
      creature: '珍珠祈室的水流若忽然倒轉，深海巡行者通常已經接近。',
      treasure: '珍珠祈室的貝殼、祭文或骨錨旁可能藏著深海神殿事件線索。',
      spirit: '珍珠祈室保留著神殿沉入海底後仍用藍火維持封印的記憶。',
    },
  },

  deepsea_temple_tideclock_room: {
    id: 'deepsea_temple_tideclock_room',
    name: '潮鐘室',
    zone: 'deepsea_temple' as RoomDef['zone'],
    image: 'deepsea_temple_tideclock_room.png',
    imagePrompt: '潮鐘室 in deepsea_temple, submerged ancient ocean temple, blue sacred fire underwater, coral pillars, dark abyss, sea creatures and forbidden altar ruins, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text',
    description:
      '潮鐘室位於沉入海底的深海神殿中，藍色聖火在水下燃燒，破碎貝殼、珊瑚石柱、古老潮鐘與禁忌祭文共同指向更深處的潮汐王座。這裡是終局區域的高階路線節點，玩家可以 inspect 水流方向、祭壇刻痕、貝殼回音與神像裂縫來判斷暗流與怪物巡行，也能 search 書庫、骨錨、月池和花園尋找古神線索。若隊伍忽略水壓、黑暗低語與暗流牽引，魚人、海蛇、水母與九頭蛇會把隊形撕開；若穩定推進，則能逐步掌握禁忌祭壇和潮汐王座的開啟順序，並確認隊伍仍有足夠氣泡護符抵抗下一段深水壓力與黑暗低語迴聲。',
    exits: [
      { direction: 'west', targetRoomId: 'deepsea_temple_drowned_library', description: '潮鐘室回到水封書庫' },
      { direction: 'east', targetRoomId: 'deepsea_temple_abyssal_garden', description: '深淵花園在東側' },
      { direction: 'south', targetRoomId: 'deepsea_temple_bone_anchor', description: '潮鏈垂向骨錨臺' },
    ],
    monsters: [
      { monsterId: 'deep_fishman', maxCount: 2, respawnSeconds: 120 },
      { monsterId: 'sea_serpent', maxCount: 1, respawnSeconds: 160 },
    ],
    mapSymbol: '[鐘]',
    mapX: 4,
    mapY: 0,
    guardianHints: {
      creature: '潮鐘室的水流若忽然倒轉，深海巡行者通常已經接近。',
      treasure: '潮鐘室的貝殼、祭文或骨錨旁可能藏著深海神殿事件線索。',
      spirit: '潮鐘室保留著神殿沉入海底後仍用藍火維持封印的記憶。',
    },
  },

  deepsea_temple_bone_anchor: {
    id: 'deepsea_temple_bone_anchor',
    name: '骨錨臺',
    zone: 'deepsea_temple' as RoomDef['zone'],
    image: 'deepsea_temple_bone_anchor.png',
    imagePrompt: '骨錨臺 in deepsea_temple, submerged ancient ocean temple, blue sacred fire underwater, coral pillars, dark abyss, sea creatures and forbidden altar ruins, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text',
    description:
      '骨錨臺位於沉入海底的深海神殿中，藍色聖火在水下燃燒，破碎貝殼、珊瑚石柱、古老潮鐘與禁忌祭文共同指向更深處的潮汐王座。這裡是終局區域的高階路線節點，玩家可以 inspect 水流方向、祭壇刻痕、貝殼回音與神像裂縫來判斷暗流與怪物巡行，也能 search 書庫、骨錨、月池和花園尋找古神線索。若隊伍忽略水壓、黑暗低語與暗流牽引，魚人、海蛇、水母與九頭蛇會把隊形撕開；若穩定推進，則能逐步掌握禁忌祭壇和潮汐王座的開啟順序，並確認隊伍仍有足夠氣泡護符抵抗下一段深水壓力與黑暗低語迴聲。',
    exits: [
      { direction: 'west', targetRoomId: 'deepsea_temple_darkcurrent_canal', description: '骨錨臺回到暗流水道' },
      { direction: 'north', targetRoomId: 'deepsea_temple_tideclock_room', description: '潮鏈回到潮鐘室' },
      { direction: 'east', targetRoomId: 'deepsea_temple_whalebone_bridge', description: '鯨骨橋向東跨出' },
    ],
    monsters: [
      { monsterId: 'sea_crab', maxCount: 3, respawnSeconds: 80 },
      { monsterId: 'sea_serpent', maxCount: 2, respawnSeconds: 160 },
    ],
    mapSymbol: '[錨]',
    mapX: 3,
    mapY: -1,
    guardianHints: {
      creature: '骨錨臺的水流若忽然倒轉，深海巡行者通常已經接近。',
      treasure: '骨錨臺的貝殼、祭文或骨錨旁可能藏著深海神殿事件線索。',
      spirit: '骨錨臺保留著神殿沉入海底後仍用藍火維持封印的記憶。',
    },
  },

  deepsea_temple_statue_trench: {
    id: 'deepsea_temple_statue_trench',
    name: '神像裂溝',
    zone: 'deepsea_temple' as RoomDef['zone'],
    image: 'deepsea_temple_statue_trench.png',
    imagePrompt: '神像裂溝 in deepsea_temple, submerged ancient ocean temple, blue sacred fire underwater, coral pillars, dark abyss, sea creatures and forbidden altar ruins, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text',
    description:
      '神像裂溝位於沉入海底的深海神殿中，藍色聖火在水下燃燒，破碎貝殼、珊瑚石柱、古老潮鐘與禁忌祭文共同指向更深處的潮汐王座。這裡是終局區域的高階路線節點，玩家可以 inspect 水流方向、祭壇刻痕、貝殼回音與神像裂縫來判斷暗流與怪物巡行，也能 search 書庫、骨錨、月池和花園尋找古神線索。若隊伍忽略水壓、黑暗低語與暗流牽引，魚人、海蛇、水母與九頭蛇會把隊形撕開；若穩定推進，則能逐步掌握禁忌祭壇和潮汐王座的開啟順序，並確認隊伍仍有足夠氣泡護符抵抗下一段深水壓力與黑暗低語迴聲。',
    exits: [
      { direction: 'west', targetRoomId: 'deepsea_temple_pearl_oratory', description: '神像裂溝回到珍珠祈室' },
      { direction: 'south', targetRoomId: 'deepsea_temple_abyssal_garden', description: '裂溝落向深淵花園' },
      { direction: 'east', targetRoomId: 'deepsea_temple_forbidden_altar', description: '黑石階通往禁忌祭壇' },
    ],
    monsters: [
      { monsterId: 'lake_serpent', maxCount: 2, respawnSeconds: 140 },
      { monsterId: 'deep_fishman', maxCount: 2, respawnSeconds: 120 },
    ],
    mapSymbol: '[像]',
    mapX: 4,
    mapY: 1,
    guardianHints: {
      creature: '神像裂溝的水流若忽然倒轉，深海巡行者通常已經接近。',
      treasure: '神像裂溝的貝殼、祭文或骨錨旁可能藏著深海神殿事件線索。',
      spirit: '神像裂溝保留著神殿沉入海底後仍用藍火維持封印的記憶。',
    },
  },

  deepsea_temple_abyssal_garden: {
    id: 'deepsea_temple_abyssal_garden',
    name: '深淵花園',
    zone: 'deepsea_temple' as RoomDef['zone'],
    image: 'deepsea_temple_abyssal_garden.png',
    imagePrompt: '深淵花園 in deepsea_temple, submerged ancient ocean temple, blue sacred fire underwater, coral pillars, dark abyss, sea creatures and forbidden altar ruins, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text',
    description:
      '深淵花園位於沉入海底的深海神殿中，藍色聖火在水下燃燒，破碎貝殼、珊瑚石柱、古老潮鐘與禁忌祭文共同指向更深處的潮汐王座。這裡是終局區域的高階路線節點，玩家可以 inspect 水流方向、祭壇刻痕、貝殼回音與神像裂縫來判斷暗流與怪物巡行，也能 search 書庫、骨錨、月池和花園尋找古神線索。若隊伍忽略水壓、黑暗低語與暗流牽引，魚人、海蛇、水母與九頭蛇會把隊形撕開；若穩定推進，則能逐步掌握禁忌祭壇和潮汐王座的開啟順序，並確認隊伍仍有足夠氣泡護符抵抗下一段深水壓力與黑暗低語迴聲。',
    exits: [
      { direction: 'west', targetRoomId: 'deepsea_temple_tideclock_room', description: '深淵花園回到潮鐘室' },
      { direction: 'north', targetRoomId: 'deepsea_temple_statue_trench', description: '裂溝回到神像區' },
      { direction: 'east', targetRoomId: 'deepsea_temple_sleeping_oracle', description: '沉睡神諭室在東側' },
    ],
    monsters: [
      { monsterId: 'jellyfish', maxCount: 4, respawnSeconds: 80 },
      { monsterId: 'sea_serpent', maxCount: 1, respawnSeconds: 160 },
    ],
    mapSymbol: '[園]',
    mapX: 5,
    mapY: 0,
    guardianHints: {
      creature: '深淵花園的水流若忽然倒轉，深海巡行者通常已經接近。',
      treasure: '深淵花園的貝殼、祭文或骨錨旁可能藏著深海神殿事件線索。',
      spirit: '深淵花園保留著神殿沉入海底後仍用藍火維持封印的記憶。',
    },
  },

  deepsea_temple_whalebone_bridge: {
    id: 'deepsea_temple_whalebone_bridge',
    name: '鯨骨橋',
    zone: 'deepsea_temple' as RoomDef['zone'],
    image: 'deepsea_temple_whalebone_bridge.png',
    imagePrompt: '鯨骨橋 in deepsea_temple, submerged ancient ocean temple, blue sacred fire underwater, coral pillars, dark abyss, sea creatures and forbidden altar ruins, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text',
    description:
      '鯨骨橋位於沉入海底的深海神殿中，藍色聖火在水下燃燒，破碎貝殼、珊瑚石柱、古老潮鐘與禁忌祭文共同指向更深處的潮汐王座。這裡是終局區域的高階路線節點，玩家可以 inspect 水流方向、祭壇刻痕、貝殼回音與神像裂縫來判斷暗流與怪物巡行，也能 search 書庫、骨錨、月池和花園尋找古神線索。若隊伍忽略水壓、黑暗低語與暗流牽引，魚人、海蛇、水母與九頭蛇會把隊形撕開；若穩定推進，則能逐步掌握禁忌祭壇和潮汐王座的開啟順序，並確認隊伍仍有足夠氣泡護符抵抗下一段深水壓力與黑暗低語迴聲。',
    exits: [
      { direction: 'west', targetRoomId: 'deepsea_temple_bone_anchor', description: '鯨骨橋回到骨錨臺' },
      { direction: 'east', targetRoomId: 'deepsea_temple_tentacle_gate', description: '觸手門在前方' },
    ],
    monsters: [
      { monsterId: 'sea_serpent', maxCount: 2, respawnSeconds: 160 },
      { monsterId: 'lake_hydra', maxCount: 1, respawnSeconds: 300 },
    ],
    mapSymbol: '[橋]',
    mapX: 4,
    mapY: -1,
    guardianHints: {
      creature: '鯨骨橋的水流若忽然倒轉，深海巡行者通常已經接近。',
      treasure: '鯨骨橋的貝殼、祭文或骨錨旁可能藏著深海神殿事件線索。',
      spirit: '鯨骨橋保留著神殿沉入海底後仍用藍火維持封印的記憶。',
    },
  },

  deepsea_temple_forbidden_altar: {
    id: 'deepsea_temple_forbidden_altar',
    name: '禁忌祭壇',
    zone: 'deepsea_temple' as RoomDef['zone'],
    image: 'deepsea_temple_forbidden_altar.png',
    imagePrompt: '禁忌祭壇 in deepsea_temple, submerged ancient ocean temple, blue sacred fire underwater, coral pillars, dark abyss, sea creatures and forbidden altar ruins, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text',
    description:
      '禁忌祭壇位於沉入海底的深海神殿中，藍色聖火在水下燃燒，破碎貝殼、珊瑚石柱、古老潮鐘與禁忌祭文共同指向更深處的潮汐王座。這裡是終局區域的高階路線節點，玩家可以 inspect 水流方向、祭壇刻痕、貝殼回音與神像裂縫來判斷暗流與怪物巡行，也能 search 書庫、骨錨、月池和花園尋找古神線索。若隊伍忽略水壓、黑暗低語與暗流牽引，魚人、海蛇、水母與九頭蛇會把隊形撕開；若穩定推進，則能逐步掌握禁忌祭壇和潮汐王座的開啟順序，並確認隊伍仍有足夠氣泡護符抵抗下一段深水壓力與黑暗低語迴聲。',
    exits: [
      { direction: 'west', targetRoomId: 'deepsea_temple_statue_trench', description: '禁忌祭壇回到神像裂溝' },
      { direction: 'south', targetRoomId: 'deepsea_temple_sleeping_oracle', description: '祭壇水階通往神諭室' },
      { direction: 'east', targetRoomId: 'deepsea_temple_godwhisper_chamber', description: '低語室在東側' },
    ],
    monsters: [
      { monsterId: 'lake_hydra', maxCount: 1, respawnSeconds: 300 },
      { monsterId: 'deep_fishman', maxCount: 2, respawnSeconds: 120 },
    ],
    mapSymbol: '[壇]',
    mapX: 5,
    mapY: 1,
    guardianHints: {
      creature: '禁忌祭壇的水流若忽然倒轉，深海巡行者通常已經接近。',
      treasure: '禁忌祭壇的貝殼、祭文或骨錨旁可能藏著深海神殿事件線索。',
      spirit: '禁忌祭壇保留著神殿沉入海底後仍用藍火維持封印的記憶。',
    },
  },

  deepsea_temple_sleeping_oracle: {
    id: 'deepsea_temple_sleeping_oracle',
    name: '沉睡神諭室',
    zone: 'deepsea_temple' as RoomDef['zone'],
    image: 'deepsea_temple_sleeping_oracle.png',
    imagePrompt: '沉睡神諭室 in deepsea_temple, submerged ancient ocean temple, blue sacred fire underwater, coral pillars, dark abyss, sea creatures and forbidden altar ruins, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text',
    description:
      '沉睡神諭室位於沉入海底的深海神殿中，藍色聖火在水下燃燒，破碎貝殼、珊瑚石柱、古老潮鐘與禁忌祭文共同指向更深處的潮汐王座。這裡是終局區域的高階路線節點，玩家可以 inspect 水流方向、祭壇刻痕、貝殼回音與神像裂縫來判斷暗流與怪物巡行，也能 search 書庫、骨錨、月池和花園尋找古神線索。若隊伍忽略水壓、黑暗低語與暗流牽引，魚人、海蛇、水母與九頭蛇會把隊形撕開；若穩定推進，則能逐步掌握禁忌祭壇和潮汐王座的開啟順序，並確認隊伍仍有足夠氣泡護符抵抗下一段深水壓力與黑暗低語迴聲。',
    exits: [
      { direction: 'west', targetRoomId: 'deepsea_temple_abyssal_garden', description: '神諭室回到深淵花園' },
      { direction: 'north', targetRoomId: 'deepsea_temple_forbidden_altar', description: '祭壇水階回到禁忌祭壇' },
      { direction: 'east', targetRoomId: 'deepsea_temple_tidal_throne', description: '潮汐王座在前方' },
    ],
    monsters: [
      { monsterId: 'lake_hydra', maxCount: 1, respawnSeconds: 300 },
      { monsterId: 'jellyfish', maxCount: 3, respawnSeconds: 80 },
    ],
    mapSymbol: '[諭]',
    mapX: 6,
    mapY: 0,
    guardianHints: {
      creature: '沉睡神諭室的水流若忽然倒轉，深海巡行者通常已經接近。',
      treasure: '沉睡神諭室的貝殼、祭文或骨錨旁可能藏著深海神殿事件線索。',
      spirit: '沉睡神諭室保留著神殿沉入海底後仍用藍火維持封印的記憶。',
    },
  },

  deepsea_temple_tentacle_gate: {
    id: 'deepsea_temple_tentacle_gate',
    name: '觸手門',
    zone: 'deepsea_temple' as RoomDef['zone'],
    image: 'deepsea_temple_tentacle_gate.png',
    imagePrompt: '觸手門 in deepsea_temple, submerged ancient ocean temple, blue sacred fire underwater, coral pillars, dark abyss, sea creatures and forbidden altar ruins, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text',
    description:
      '觸手門位於沉入海底的深海神殿中，藍色聖火在水下燃燒，破碎貝殼、珊瑚石柱、古老潮鐘與禁忌祭文共同指向更深處的潮汐王座。這裡是終局區域的高階路線節點，玩家可以 inspect 水流方向、祭壇刻痕、貝殼回音與神像裂縫來判斷暗流與怪物巡行，也能 search 書庫、骨錨、月池和花園尋找古神線索。若隊伍忽略水壓、黑暗低語與暗流牽引，魚人、海蛇、水母與九頭蛇會把隊形撕開；若穩定推進，則能逐步掌握禁忌祭壇和潮汐王座的開啟順序，並確認隊伍仍有足夠氣泡護符抵抗下一段深水壓力與黑暗低語迴聲。',
    exits: [
      { direction: 'west', targetRoomId: 'deepsea_temple_whalebone_bridge', description: '觸手門回到鯨骨橋' },
      { direction: 'east', targetRoomId: 'deepsea_temple_tidal_throne', description: '黑水廊通往潮汐王座' },
    ],
    monsters: [
      { monsterId: 'lake_hydra', maxCount: 1, respawnSeconds: 300 },
      { monsterId: 'sea_serpent', maxCount: 2, respawnSeconds: 160 },
    ],
    mapSymbol: '[觸]',
    mapX: 5,
    mapY: -1,
    guardianHints: {
      creature: '觸手門的水流若忽然倒轉，深海巡行者通常已經接近。',
      treasure: '觸手門的貝殼、祭文或骨錨旁可能藏著深海神殿事件線索。',
      spirit: '觸手門保留著神殿沉入海底後仍用藍火維持封印的記憶。',
    },
  },

  deepsea_temple_godwhisper_chamber: {
    id: 'deepsea_temple_godwhisper_chamber',
    name: '古神低語室',
    zone: 'deepsea_temple' as RoomDef['zone'],
    image: 'deepsea_temple_godwhisper_chamber.png',
    imagePrompt: '古神低語室 in deepsea_temple, submerged ancient ocean temple, blue sacred fire underwater, coral pillars, dark abyss, sea creatures and forbidden altar ruins, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text',
    description:
      '古神低語室位於沉入海底的深海神殿中，藍色聖火在水下燃燒，破碎貝殼、珊瑚石柱、古老潮鐘與禁忌祭文共同指向更深處的潮汐王座。這裡是終局區域的高階路線節點，玩家可以 inspect 水流方向、祭壇刻痕、貝殼回音與神像裂縫來判斷暗流與怪物巡行，也能 search 書庫、骨錨、月池和花園尋找古神線索。若隊伍忽略水壓、黑暗低語與暗流牽引，魚人、海蛇、水母與九頭蛇會把隊形撕開；若穩定推進，則能逐步掌握禁忌祭壇和潮汐王座的開啟順序，並確認隊伍仍有足夠氣泡護符抵抗下一段深水壓力與黑暗低語迴聲。',
    exits: [
      { direction: 'west', targetRoomId: 'deepsea_temple_forbidden_altar', description: '低語室回到禁忌祭壇' },
      { direction: 'south', targetRoomId: 'deepsea_temple_tidal_throne', description: '低語階通往潮汐王座' },
    ],
    monsters: [
      { monsterId: 'lake_hydra', maxCount: 1, respawnSeconds: 300 },
      { monsterId: 'sea_serpent', maxCount: 2, respawnSeconds: 160 },
    ],
    mapSymbol: '[語]',
    mapX: 6,
    mapY: 1,
    guardianHints: {
      creature: '古神低語室的水流若忽然倒轉，深海巡行者通常已經接近。',
      treasure: '古神低語室的貝殼、祭文或骨錨旁可能藏著深海神殿事件線索。',
      spirit: '古神低語室保留著神殿沉入海底後仍用藍火維持封印的記憶。',
    },
  },

  deepsea_temple_tidal_throne: {
    id: 'deepsea_temple_tidal_throne',
    name: '潮汐王座',
    zone: 'deepsea_temple' as RoomDef['zone'],
    image: 'deepsea_temple_tidal_throne.png',
    imagePrompt: '潮汐王座 in deepsea_temple, submerged ancient ocean temple, blue sacred fire underwater, coral pillars, dark abyss, sea creatures and forbidden altar ruins, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text',
    description:
      '潮汐王座位於沉入海底的深海神殿中，藍色聖火在水下燃燒，破碎貝殼、珊瑚石柱、古老潮鐘與禁忌祭文共同指向更深處的潮汐王座。這裡是終局區域的高階路線節點，玩家可以 inspect 水流方向、祭壇刻痕、貝殼回音與神像裂縫來判斷暗流與怪物巡行，也能 search 書庫、骨錨、月池和花園尋找古神線索。若隊伍忽略水壓、黑暗低語與暗流牽引，魚人、海蛇、水母與九頭蛇會把隊形撕開；若穩定推進，則能逐步掌握禁忌祭壇和潮汐王座的開啟順序，並確認隊伍仍有足夠氣泡護符抵抗下一段深水壓力與黑暗低語迴聲。',
    exits: [
      { direction: 'west', targetRoomId: 'deepsea_temple_sleeping_oracle', description: '潮汐王座回到沉睡神諭室' },
      { direction: 'north', targetRoomId: 'deepsea_temple_godwhisper_chamber', description: '低語階回到古神低語室' },
      { direction: 'south', targetRoomId: 'deepsea_temple_tentacle_gate', description: '黑水廊回到觸手門' },
    ],
    monsters: [
      { monsterId: 'lake_hydra', maxCount: 1, respawnSeconds: 300 },
      { monsterId: 'sea_serpent', maxCount: 2, respawnSeconds: 160 },
      { monsterId: 'deep_fishman', maxCount: 3, respawnSeconds: 120 },
    ],
    mapSymbol: '[王]',
    mapX: 7,
    mapY: 0,
    guardianHints: {
      creature: '潮汐王座的水流若忽然倒轉，深海巡行者通常已經接近。',
      treasure: '潮汐王座的貝殼、祭文或骨錨旁可能藏著深海神殿事件線索。',
      spirit: '潮汐王座保留著神殿沉入海底後仍用藍火維持封印的記憶。',
    },
  },
  obsidian_depths_mine_lift: {
    id: 'obsidian_depths_mine_lift',
    name: '深層礦梯',
    zone: 'obsidian_depths' as RoomDef['zone'],
    image: 'obsidian_depths_mine_lift.png',
    imagePrompt: '深層礦梯 in obsidian_depths, volcanic underground obsidian mine with mirror black rock, lava glow, ancient forge machinery, sulfur steam and dark fire, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text',
    description:
      '深層礦梯位於火山下方的黑曜深層，鏡面岩壁反射岩漿紅光，採礦繩標、古代熔爐符文、硫磺氣孔與黑玻裂縫交錯成高危資源路線。這裡是終局採礦與戰鬥混合節點，玩家可以 gather 黑曜、火晶、硫磺與熔爐殘片，也能 inspect 礦脈折光、鎖鏈刻痕和熔流方向來判斷下一段是否安全。若隊伍忽略地熱、毒氣與鏡面錯覺，火蜥蜴、岩漿蟲、火元素、熔岩巨像和惡魔守衛會把退路切斷；若穩定標記採集點，則能逐步靠近世界熔爐核心，並在每次採集後確認熱壓、毒氣與回程路標仍可辨認，且採礦工具沒有被黑曜反光誤導。',
    exits: [
      { direction: 'east', targetRoomId: 'obsidian_depths_glass_vein', description: '黑曜礦脈通往東側' },
      { direction: 'south', targetRoomId: 'obsidian_depths_cooling_shelf', description: '冷卻岩棚向下延伸' },
    ],
    monsters: [
      { monsterId: 'fire_salamander', maxCount: 2, respawnSeconds: 90 },
    ],
    mapSymbol: '[門]',
    mapX: 0,
    mapY: 0,
    guardianHints: {
      creature: '深層礦梯的黑曜反光若忽然多出影子，熔爐守衛通常已經接近。',
      treasure: '深層礦梯的礦脈、熔渣或古代爐印旁可能藏著高階採集線索。',
      spirit: '深層礦梯保留著黑曜深層被古代熔爐長年燒穿的記憶。',
    },
  },

  obsidian_depths_glass_vein: {
    id: 'obsidian_depths_glass_vein',
    name: '鏡黑礦脈',
    zone: 'obsidian_depths' as RoomDef['zone'],
    image: 'obsidian_depths_glass_vein.png',
    imagePrompt: '鏡黑礦脈 in obsidian_depths, volcanic underground obsidian mine with mirror black rock, lava glow, ancient forge machinery, sulfur steam and dark fire, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text',
    description:
      '鏡黑礦脈位於火山下方的黑曜深層，鏡面岩壁反射岩漿紅光，採礦繩標、古代熔爐符文、硫磺氣孔與黑玻裂縫交錯成高危資源路線。這裡是終局採礦與戰鬥混合節點，玩家可以 gather 黑曜、火晶、硫磺與熔爐殘片，也能 inspect 礦脈折光、鎖鏈刻痕和熔流方向來判斷下一段是否安全。若隊伍忽略地熱、毒氣與鏡面錯覺，火蜥蜴、岩漿蟲、火元素、熔岩巨像和惡魔守衛會把退路切斷；若穩定標記採集點，則能逐步靠近世界熔爐核心，並在每次採集後確認熱壓、毒氣與回程路標仍可辨認，且採礦工具沒有被黑曜反光誤導。',
    exits: [
      { direction: 'west', targetRoomId: 'obsidian_depths_mine_lift', description: '礦脈回到深層礦梯' },
      { direction: 'east', targetRoomId: 'obsidian_depths_lava_drip', description: '熔滴廊在前方' },
      { direction: 'north', targetRoomId: 'obsidian_depths_shard_claim', description: '碎晶採區在上方' },
    ],
    monsters: [
      { monsterId: 'rock_giant', maxCount: 1, respawnSeconds: 160 },
      { monsterId: 'fire_salamander', maxCount: 2, respawnSeconds: 90 },
    ],
    mapSymbol: '[礦]',
    mapX: 1,
    mapY: 0,
    guardianHints: {
      creature: '鏡黑礦脈的黑曜反光若忽然多出影子，熔爐守衛通常已經接近。',
      treasure: '鏡黑礦脈的礦脈、熔渣或古代爐印旁可能藏著高階採集線索。',
      spirit: '鏡黑礦脈保留著黑曜深層被古代熔爐長年燒穿的記憶。',
    },
  },

  obsidian_depths_shard_claim: {
    id: 'obsidian_depths_shard_claim',
    name: '碎曜採區',
    zone: 'obsidian_depths' as RoomDef['zone'],
    image: 'obsidian_depths_shard_claim.png',
    imagePrompt: '碎曜採區 in obsidian_depths, volcanic underground obsidian mine with mirror black rock, lava glow, ancient forge machinery, sulfur steam and dark fire, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text',
    description:
      '碎曜採區位於火山下方的黑曜深層，鏡面岩壁反射岩漿紅光，採礦繩標、古代熔爐符文、硫磺氣孔與黑玻裂縫交錯成高危資源路線。這裡是終局採礦與戰鬥混合節點，玩家可以 gather 黑曜、火晶、硫磺與熔爐殘片，也能 inspect 礦脈折光、鎖鏈刻痕和熔流方向來判斷下一段是否安全。若隊伍忽略地熱、毒氣與鏡面錯覺，火蜥蜴、岩漿蟲、火元素、熔岩巨像和惡魔守衛會把退路切斷；若穩定標記採集點，則能逐步靠近世界熔爐核心，並在每次採集後確認熱壓、毒氣與回程路標仍可辨認，且採礦工具沒有被黑曜反光誤導。',
    exits: [
      { direction: 'south', targetRoomId: 'obsidian_depths_glass_vein', description: '碎曜採區回到鏡黑礦脈' },
      { direction: 'east', targetRoomId: 'obsidian_depths_mirror_chamber', description: '反光洞室在東側' },
    ],
    monsters: [
      { monsterId: 'crystal_golem', maxCount: 2, respawnSeconds: 160 },
    ],
    mapSymbol: '[採]',
    mapX: 1,
    mapY: 1,
    guardianHints: {
      creature: '碎曜採區的黑曜反光若忽然多出影子，熔爐守衛通常已經接近。',
      treasure: '碎曜採區的礦脈、熔渣或古代爐印旁可能藏著高階採集線索。',
      spirit: '碎曜採區保留著黑曜深層被古代熔爐長年燒穿的記憶。',
    },
  },

  obsidian_depths_cooling_shelf: {
    id: 'obsidian_depths_cooling_shelf',
    name: '冷卻岩棚',
    zone: 'obsidian_depths' as RoomDef['zone'],
    image: 'obsidian_depths_cooling_shelf.png',
    imagePrompt: '冷卻岩棚 in obsidian_depths, volcanic underground obsidian mine with mirror black rock, lava glow, ancient forge machinery, sulfur steam and dark fire, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text',
    description:
      '冷卻岩棚位於火山下方的黑曜深層，鏡面岩壁反射岩漿紅光，採礦繩標、古代熔爐符文、硫磺氣孔與黑玻裂縫交錯成高危資源路線。這裡是終局採礦與戰鬥混合節點，玩家可以 gather 黑曜、火晶、硫磺與熔爐殘片，也能 inspect 礦脈折光、鎖鏈刻痕和熔流方向來判斷下一段是否安全。若隊伍忽略地熱、毒氣與鏡面錯覺，火蜥蜴、岩漿蟲、火元素、熔岩巨像和惡魔守衛會把退路切斷；若穩定標記採集點，則能逐步靠近世界熔爐核心，並在每次採集後確認熱壓、毒氣與回程路標仍可辨認，且採礦工具沒有被黑曜反光誤導。',
    exits: [
      { direction: 'north', targetRoomId: 'obsidian_depths_mine_lift', description: '冷卻岩棚回到礦梯' },
      { direction: 'east', targetRoomId: 'obsidian_depths_sulfur_pocket', description: '硫磺袋在東側' },
    ],
    monsters: [
      { monsterId: 'fire_salamander', maxCount: 2, respawnSeconds: 90 },
      { monsterId: 'lava_worm', maxCount: 1, respawnSeconds: 120 },
    ],
    mapSymbol: '[棚]',
    mapX: 0,
    mapY: -1,
    guardianHints: {
      creature: '冷卻岩棚的黑曜反光若忽然多出影子，熔爐守衛通常已經接近。',
      treasure: '冷卻岩棚的礦脈、熔渣或古代爐印旁可能藏著高階採集線索。',
      spirit: '冷卻岩棚保留著黑曜深層被古代熔爐長年燒穿的記憶。',
    },
  },

  obsidian_depths_lava_drip: {
    id: 'obsidian_depths_lava_drip',
    name: '熔滴廊',
    zone: 'obsidian_depths' as RoomDef['zone'],
    image: 'obsidian_depths_lava_drip.png',
    imagePrompt: '熔滴廊 in obsidian_depths, volcanic underground obsidian mine with mirror black rock, lava glow, ancient forge machinery, sulfur steam and dark fire, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text',
    description:
      '熔滴廊位於火山下方的黑曜深層，鏡面岩壁反射岩漿紅光，採礦繩標、古代熔爐符文、硫磺氣孔與黑玻裂縫交錯成高危資源路線。這裡是終局採礦與戰鬥混合節點，玩家可以 gather 黑曜、火晶、硫磺與熔爐殘片，也能 inspect 礦脈折光、鎖鏈刻痕和熔流方向來判斷下一段是否安全。若隊伍忽略地熱、毒氣與鏡面錯覺，火蜥蜴、岩漿蟲、火元素、熔岩巨像和惡魔守衛會把退路切斷；若穩定標記採集點，則能逐步靠近世界熔爐核心，並在每次採集後確認熱壓、毒氣與回程路標仍可辨認，且採礦工具沒有被黑曜反光誤導。',
    exits: [
      { direction: 'west', targetRoomId: 'obsidian_depths_glass_vein', description: '熔滴廊回到礦脈' },
      { direction: 'east', targetRoomId: 'obsidian_depths_old_furnace', description: '舊熔爐在前方' },
      { direction: 'south', targetRoomId: 'obsidian_depths_sulfur_pocket', description: '熱氣井落向硫磺袋' },
    ],
    monsters: [
      { monsterId: 'lava_worm', maxCount: 3, respawnSeconds: 120 },
      { monsterId: 'flame_spirit', maxCount: 1, respawnSeconds: 110 },
    ],
    mapSymbol: '[滴]',
    mapX: 2,
    mapY: 0,
    guardianHints: {
      creature: '熔滴廊的黑曜反光若忽然多出影子，熔爐守衛通常已經接近。',
      treasure: '熔滴廊的礦脈、熔渣或古代爐印旁可能藏著高階採集線索。',
      spirit: '熔滴廊保留著黑曜深層被古代熔爐長年燒穿的記憶。',
    },
  },

  obsidian_depths_mirror_chamber: {
    id: 'obsidian_depths_mirror_chamber',
    name: '黑鏡洞室',
    zone: 'obsidian_depths' as RoomDef['zone'],
    image: 'obsidian_depths_mirror_chamber.png',
    imagePrompt: '黑鏡洞室 in obsidian_depths, volcanic underground obsidian mine with mirror black rock, lava glow, ancient forge machinery, sulfur steam and dark fire, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text',
    description:
      '黑鏡洞室位於火山下方的黑曜深層，鏡面岩壁反射岩漿紅光，採礦繩標、古代熔爐符文、硫磺氣孔與黑玻裂縫交錯成高危資源路線。這裡是終局採礦與戰鬥混合節點，玩家可以 gather 黑曜、火晶、硫磺與熔爐殘片，也能 inspect 礦脈折光、鎖鏈刻痕和熔流方向來判斷下一段是否安全。若隊伍忽略地熱、毒氣與鏡面錯覺，火蜥蜴、岩漿蟲、火元素、熔岩巨像和惡魔守衛會把退路切斷；若穩定標記採集點，則能逐步靠近世界熔爐核心，並在每次採集後確認熱壓、毒氣與回程路標仍可辨認，且採礦工具沒有被黑曜反光誤導。',
    exits: [
      { direction: 'west', targetRoomId: 'obsidian_depths_shard_claim', description: '黑鏡洞室回到採區' },
      { direction: 'east', targetRoomId: 'obsidian_depths_chain_gallery', description: '鐵鏈廊在東側' },
      { direction: 'south', targetRoomId: 'obsidian_depths_old_furnace', description: '反光坡落向舊熔爐' },
    ],
    monsters: [
      { monsterId: 'crystal_golem', maxCount: 2, respawnSeconds: 160 },
      { monsterId: 'fire_elemental', maxCount: 1, respawnSeconds: 140 },
    ],
    mapSymbol: '[鏡]',
    mapX: 2,
    mapY: 1,
    guardianHints: {
      creature: '黑鏡洞室的黑曜反光若忽然多出影子，熔爐守衛通常已經接近。',
      treasure: '黑鏡洞室的礦脈、熔渣或古代爐印旁可能藏著高階採集線索。',
      spirit: '黑鏡洞室保留著黑曜深層被古代熔爐長年燒穿的記憶。',
    },
  },

  obsidian_depths_sulfur_pocket: {
    id: 'obsidian_depths_sulfur_pocket',
    name: '硫磺氣袋',
    zone: 'obsidian_depths' as RoomDef['zone'],
    image: 'obsidian_depths_sulfur_pocket.png',
    imagePrompt: '硫磺氣袋 in obsidian_depths, volcanic underground obsidian mine with mirror black rock, lava glow, ancient forge machinery, sulfur steam and dark fire, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text',
    description:
      '硫磺氣袋位於火山下方的黑曜深層，鏡面岩壁反射岩漿紅光，採礦繩標、古代熔爐符文、硫磺氣孔與黑玻裂縫交錯成高危資源路線。這裡是終局採礦與戰鬥混合節點，玩家可以 gather 黑曜、火晶、硫磺與熔爐殘片，也能 inspect 礦脈折光、鎖鏈刻痕和熔流方向來判斷下一段是否安全。若隊伍忽略地熱、毒氣與鏡面錯覺，火蜥蜴、岩漿蟲、火元素、熔岩巨像和惡魔守衛會把退路切斷；若穩定標記採集點，則能逐步靠近世界熔爐核心，並在每次採集後確認熱壓、毒氣與回程路標仍可辨認，且採礦工具沒有被黑曜反光誤導。',
    exits: [
      { direction: 'west', targetRoomId: 'obsidian_depths_cooling_shelf', description: '硫磺氣袋回到岩棚' },
      { direction: 'north', targetRoomId: 'obsidian_depths_lava_drip', description: '熱氣井回到熔滴廊' },
      { direction: 'east', targetRoomId: 'obsidian_depths_magma_rill', description: '岩漿細渠在前方' },
    ],
    monsters: [
      { monsterId: 'lava_worm', maxCount: 2, respawnSeconds: 120 },
      { monsterId: 'fire_salamander', maxCount: 2, respawnSeconds: 90 },
    ],
    mapSymbol: '[硫]',
    mapX: 1,
    mapY: -1,
    guardianHints: {
      creature: '硫磺氣袋的黑曜反光若忽然多出影子，熔爐守衛通常已經接近。',
      treasure: '硫磺氣袋的礦脈、熔渣或古代爐印旁可能藏著高階採集線索。',
      spirit: '硫磺氣袋保留著黑曜深層被古代熔爐長年燒穿的記憶。',
    },
  },

  obsidian_depths_old_furnace: {
    id: 'obsidian_depths_old_furnace',
    name: '古代熔爐',
    zone: 'obsidian_depths' as RoomDef['zone'],
    image: 'obsidian_depths_old_furnace.png',
    imagePrompt: '古代熔爐 in obsidian_depths, volcanic underground obsidian mine with mirror black rock, lava glow, ancient forge machinery, sulfur steam and dark fire, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text',
    description:
      '古代熔爐位於火山下方的黑曜深層，鏡面岩壁反射岩漿紅光，採礦繩標、古代熔爐符文、硫磺氣孔與黑玻裂縫交錯成高危資源路線。這裡是終局採礦與戰鬥混合節點，玩家可以 gather 黑曜、火晶、硫磺與熔爐殘片，也能 inspect 礦脈折光、鎖鏈刻痕和熔流方向來判斷下一段是否安全。若隊伍忽略地熱、毒氣與鏡面錯覺，火蜥蜴、岩漿蟲、火元素、熔岩巨像和惡魔守衛會把退路切斷；若穩定標記採集點，則能逐步靠近世界熔爐核心，並在每次採集後確認熱壓、毒氣與回程路標仍可辨認，且採礦工具沒有被黑曜反光誤導。',
    exits: [
      { direction: 'west', targetRoomId: 'obsidian_depths_lava_drip', description: '舊熔爐回到熔滴廊' },
      { direction: 'north', targetRoomId: 'obsidian_depths_mirror_chamber', description: '反光坡回到黑鏡洞室' },
      { direction: 'east', targetRoomId: 'obsidian_depths_forge_guard_post', description: '守衛臺在東側' },
    ],
    monsters: [
      { monsterId: 'fire_elemental', maxCount: 2, respawnSeconds: 140 },
      { monsterId: 'lava_colossus', maxCount: 1, respawnSeconds: 1800 },
    ],
    mapSymbol: '[爐]',
    mapX: 3,
    mapY: 0,
    guardianHints: {
      creature: '古代熔爐的黑曜反光若忽然多出影子，熔爐守衛通常已經接近。',
      treasure: '古代熔爐的礦脈、熔渣或古代爐印旁可能藏著高階採集線索。',
      spirit: '古代熔爐保留著黑曜深層被古代熔爐長年燒穿的記憶。',
    },
  },

  obsidian_depths_chain_gallery: {
    id: 'obsidian_depths_chain_gallery',
    name: '鎖鏈長廊',
    zone: 'obsidian_depths' as RoomDef['zone'],
    image: 'obsidian_depths_chain_gallery.png',
    imagePrompt: '鎖鏈長廊 in obsidian_depths, volcanic underground obsidian mine with mirror black rock, lava glow, ancient forge machinery, sulfur steam and dark fire, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text',
    description:
      '鎖鏈長廊位於火山下方的黑曜深層，鏡面岩壁反射岩漿紅光，採礦繩標、古代熔爐符文、硫磺氣孔與黑玻裂縫交錯成高危資源路線。這裡是終局採礦與戰鬥混合節點，玩家可以 gather 黑曜、火晶、硫磺與熔爐殘片，也能 inspect 礦脈折光、鎖鏈刻痕和熔流方向來判斷下一段是否安全。若隊伍忽略地熱、毒氣與鏡面錯覺，火蜥蜴、岩漿蟲、火元素、熔岩巨像和惡魔守衛會把退路切斷；若穩定標記採集點，則能逐步靠近世界熔爐核心，並在每次採集後確認熱壓、毒氣與回程路標仍可辨認，且採礦工具沒有被黑曜反光誤導。',
    exits: [
      { direction: 'west', targetRoomId: 'obsidian_depths_mirror_chamber', description: '鎖鏈長廊回到黑鏡洞室' },
      { direction: 'east', targetRoomId: 'obsidian_depths_black_glass_bridge', description: '黑玻橋在東側' },
    ],
    monsters: [
      { monsterId: 'demon_warrior', maxCount: 2, respawnSeconds: 160 },
      { monsterId: 'fire_elemental', maxCount: 1, respawnSeconds: 140 },
    ],
    mapSymbol: '[鏈]',
    mapX: 3,
    mapY: 1,
    guardianHints: {
      creature: '鎖鏈長廊的黑曜反光若忽然多出影子，熔爐守衛通常已經接近。',
      treasure: '鎖鏈長廊的礦脈、熔渣或古代爐印旁可能藏著高階採集線索。',
      spirit: '鎖鏈長廊保留著黑曜深層被古代熔爐長年燒穿的記憶。',
    },
  },

  obsidian_depths_magma_rill: {
    id: 'obsidian_depths_magma_rill',
    name: '岩漿細渠',
    zone: 'obsidian_depths' as RoomDef['zone'],
    image: 'obsidian_depths_magma_rill.png',
    imagePrompt: '岩漿細渠 in obsidian_depths, volcanic underground obsidian mine with mirror black rock, lava glow, ancient forge machinery, sulfur steam and dark fire, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text',
    description:
      '岩漿細渠位於火山下方的黑曜深層，鏡面岩壁反射岩漿紅光，採礦繩標、古代熔爐符文、硫磺氣孔與黑玻裂縫交錯成高危資源路線。這裡是終局採礦與戰鬥混合節點，玩家可以 gather 黑曜、火晶、硫磺與熔爐殘片，也能 inspect 礦脈折光、鎖鏈刻痕和熔流方向來判斷下一段是否安全。若隊伍忽略地熱、毒氣與鏡面錯覺，火蜥蜴、岩漿蟲、火元素、熔岩巨像和惡魔守衛會把退路切斷；若穩定標記採集點，則能逐步靠近世界熔爐核心，並在每次採集後確認熱壓、毒氣與回程路標仍可辨認，且採礦工具沒有被黑曜反光誤導。',
    exits: [
      { direction: 'west', targetRoomId: 'obsidian_depths_sulfur_pocket', description: '岩漿細渠回到硫磺袋' },
      { direction: 'east', targetRoomId: 'obsidian_depths_forge_guard_post', description: '熔流路通往守衛臺' },
      { direction: 'south', targetRoomId: 'obsidian_depths_ember_basin', description: '餘燼盆地在下方' },
    ],
    monsters: [
      { monsterId: 'lava_worm', maxCount: 3, respawnSeconds: 120 },
      { monsterId: 'fire_elemental', maxCount: 1, respawnSeconds: 140 },
    ],
    mapSymbol: '[渠]',
    mapX: 2,
    mapY: -1,
    guardianHints: {
      creature: '岩漿細渠的黑曜反光若忽然多出影子，熔爐守衛通常已經接近。',
      treasure: '岩漿細渠的礦脈、熔渣或古代爐印旁可能藏著高階採集線索。',
      spirit: '岩漿細渠保留著黑曜深層被古代熔爐長年燒穿的記憶。',
    },
  },

  obsidian_depths_forge_guard_post: {
    id: 'obsidian_depths_forge_guard_post',
    name: '熔爐守衛臺',
    zone: 'obsidian_depths' as RoomDef['zone'],
    image: 'obsidian_depths_forge_guard_post.png',
    imagePrompt: '熔爐守衛臺 in obsidian_depths, volcanic underground obsidian mine with mirror black rock, lava glow, ancient forge machinery, sulfur steam and dark fire, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text',
    description:
      '熔爐守衛臺位於火山下方的黑曜深層，鏡面岩壁反射岩漿紅光，採礦繩標、古代熔爐符文、硫磺氣孔與黑玻裂縫交錯成高危資源路線。這裡是終局採礦與戰鬥混合節點，玩家可以 gather 黑曜、火晶、硫磺與熔爐殘片，也能 inspect 礦脈折光、鎖鏈刻痕和熔流方向來判斷下一段是否安全。若隊伍忽略地熱、毒氣與鏡面錯覺，火蜥蜴、岩漿蟲、火元素、熔岩巨像和惡魔守衛會把退路切斷；若穩定標記採集點，則能逐步靠近世界熔爐核心，並在每次採集後確認熱壓、毒氣與回程路標仍可辨認，且採礦工具沒有被黑曜反光誤導。',
    exits: [
      { direction: 'west', targetRoomId: 'obsidian_depths_old_furnace', description: '守衛臺回到古代熔爐' },
      { direction: 'south', targetRoomId: 'obsidian_depths_magma_rill', description: '熔流路回到岩漿細渠' },
      { direction: 'east', targetRoomId: 'obsidian_depths_obsidian_market', description: '棄市礦棚在東側' },
    ],
    monsters: [
      { monsterId: 'lava_colossus', maxCount: 1, respawnSeconds: 1800 },
      { monsterId: 'fire_elemental', maxCount: 2, respawnSeconds: 140 },
    ],
    mapSymbol: '[守]',
    mapX: 4,
    mapY: 0,
    guardianHints: {
      creature: '熔爐守衛臺的黑曜反光若忽然多出影子，熔爐守衛通常已經接近。',
      treasure: '熔爐守衛臺的礦脈、熔渣或古代爐印旁可能藏著高階採集線索。',
      spirit: '熔爐守衛臺保留著黑曜深層被古代熔爐長年燒穿的記憶。',
    },
  },

  obsidian_depths_black_glass_bridge: {
    id: 'obsidian_depths_black_glass_bridge',
    name: '黑玻橋',
    zone: 'obsidian_depths' as RoomDef['zone'],
    image: 'obsidian_depths_black_glass_bridge.png',
    imagePrompt: '黑玻橋 in obsidian_depths, volcanic underground obsidian mine with mirror black rock, lava glow, ancient forge machinery, sulfur steam and dark fire, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text',
    description:
      '黑玻橋位於火山下方的黑曜深層，鏡面岩壁反射岩漿紅光，採礦繩標、古代熔爐符文、硫磺氣孔與黑玻裂縫交錯成高危資源路線。這裡是終局採礦與戰鬥混合節點，玩家可以 gather 黑曜、火晶、硫磺與熔爐殘片，也能 inspect 礦脈折光、鎖鏈刻痕和熔流方向來判斷下一段是否安全。若隊伍忽略地熱、毒氣與鏡面錯覺，火蜥蜴、岩漿蟲、火元素、熔岩巨像和惡魔守衛會把退路切斷；若穩定標記採集點，則能逐步靠近世界熔爐核心，並在每次採集後確認熱壓、毒氣與回程路標仍可辨認，且採礦工具沒有被黑曜反光誤導。',
    exits: [
      { direction: 'west', targetRoomId: 'obsidian_depths_chain_gallery', description: '黑玻橋回到鎖鏈長廊' },
      { direction: 'east', targetRoomId: 'obsidian_depths_depths_shrine', description: '深層小祠在東側' },
      { direction: 'south', targetRoomId: 'obsidian_depths_obsidian_market', description: '橋下坡落向棄市礦棚' },
    ],
    monsters: [
      { monsterId: 'crystal_golem', maxCount: 2, respawnSeconds: 160 },
      { monsterId: 'demon_warrior', maxCount: 2, respawnSeconds: 160 },
    ],
    mapSymbol: '[橋]',
    mapX: 4,
    mapY: 1,
    guardianHints: {
      creature: '黑玻橋的黑曜反光若忽然多出影子，熔爐守衛通常已經接近。',
      treasure: '黑玻橋的礦脈、熔渣或古代爐印旁可能藏著高階採集線索。',
      spirit: '黑玻橋保留著黑曜深層被古代熔爐長年燒穿的記憶。',
    },
  },

  obsidian_depths_ember_basin: {
    id: 'obsidian_depths_ember_basin',
    name: '餘燼盆地',
    zone: 'obsidian_depths' as RoomDef['zone'],
    image: 'obsidian_depths_ember_basin.png',
    imagePrompt: '餘燼盆地 in obsidian_depths, volcanic underground obsidian mine with mirror black rock, lava glow, ancient forge machinery, sulfur steam and dark fire, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text',
    description:
      '餘燼盆地位於火山下方的黑曜深層，鏡面岩壁反射岩漿紅光，採礦繩標、古代熔爐符文、硫磺氣孔與黑玻裂縫交錯成高危資源路線。這裡是終局採礦與戰鬥混合節點，玩家可以 gather 黑曜、火晶、硫磺與熔爐殘片，也能 inspect 礦脈折光、鎖鏈刻痕和熔流方向來判斷下一段是否安全。若隊伍忽略地熱、毒氣與鏡面錯覺，火蜥蜴、岩漿蟲、火元素、熔岩巨像和惡魔守衛會把退路切斷；若穩定標記採集點，則能逐步靠近世界熔爐核心，並在每次採集後確認熱壓、毒氣與回程路標仍可辨認，且採礦工具沒有被黑曜反光誤導。',
    exits: [
      { direction: 'north', targetRoomId: 'obsidian_depths_magma_rill', description: '餘燼盆地回到岩漿細渠' },
      { direction: 'east', targetRoomId: 'obsidian_depths_lavafall_overlook', description: '熔瀑臺在東側' },
    ],
    monsters: [
      { monsterId: 'fire_elemental', maxCount: 3, respawnSeconds: 140 },
      { monsterId: 'flame_spirit', maxCount: 2, respawnSeconds: 110 },
    ],
    mapSymbol: '[燼]',
    mapX: 3,
    mapY: -2,
    guardianHints: {
      creature: '餘燼盆地的黑曜反光若忽然多出影子，熔爐守衛通常已經接近。',
      treasure: '餘燼盆地的礦脈、熔渣或古代爐印旁可能藏著高階採集線索。',
      spirit: '餘燼盆地保留著黑曜深層被古代熔爐長年燒穿的記憶。',
    },
  },

  obsidian_depths_obsidian_market: {
    id: 'obsidian_depths_obsidian_market',
    name: '棄市礦棚',
    zone: 'obsidian_depths' as RoomDef['zone'],
    image: 'obsidian_depths_obsidian_market.png',
    imagePrompt: '棄市礦棚 in obsidian_depths, volcanic underground obsidian mine with mirror black rock, lava glow, ancient forge machinery, sulfur steam and dark fire, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text',
    description:
      '棄市礦棚位於火山下方的黑曜深層，鏡面岩壁反射岩漿紅光，採礦繩標、古代熔爐符文、硫磺氣孔與黑玻裂縫交錯成高危資源路線。這裡是終局採礦與戰鬥混合節點，玩家可以 gather 黑曜、火晶、硫磺與熔爐殘片，也能 inspect 礦脈折光、鎖鏈刻痕和熔流方向來判斷下一段是否安全。若隊伍忽略地熱、毒氣與鏡面錯覺，火蜥蜴、岩漿蟲、火元素、熔岩巨像和惡魔守衛會把退路切斷；若穩定標記採集點，則能逐步靠近世界熔爐核心，並在每次採集後確認熱壓、毒氣與回程路標仍可辨認，且採礦工具沒有被黑曜反光誤導。',
    exits: [
      { direction: 'west', targetRoomId: 'obsidian_depths_forge_guard_post', description: '礦棚回到守衛臺' },
      { direction: 'north', targetRoomId: 'obsidian_depths_black_glass_bridge', description: '橋下坡回到黑玻橋' },
      { direction: 'east', targetRoomId: 'obsidian_depths_core_drill', description: '核心鑽井在東側' },
    ],
    monsters: [
      { monsterId: 'demon_warrior', maxCount: 2, respawnSeconds: 160 },
      { monsterId: 'fire_salamander', maxCount: 2, respawnSeconds: 90 },
    ],
    mapSymbol: '[市]',
    mapX: 5,
    mapY: 0,
    guardianHints: {
      creature: '棄市礦棚的黑曜反光若忽然多出影子，熔爐守衛通常已經接近。',
      treasure: '棄市礦棚的礦脈、熔渣或古代爐印旁可能藏著高階採集線索。',
      spirit: '棄市礦棚保留著黑曜深層被古代熔爐長年燒穿的記憶。',
    },
  },

  obsidian_depths_depths_shrine: {
    id: 'obsidian_depths_depths_shrine',
    name: '深層火祠',
    zone: 'obsidian_depths' as RoomDef['zone'],
    image: 'obsidian_depths_depths_shrine.png',
    imagePrompt: '深層火祠 in obsidian_depths, volcanic underground obsidian mine with mirror black rock, lava glow, ancient forge machinery, sulfur steam and dark fire, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text',
    description:
      '深層火祠位於火山下方的黑曜深層，鏡面岩壁反射岩漿紅光，採礦繩標、古代熔爐符文、硫磺氣孔與黑玻裂縫交錯成高危資源路線。這裡是終局採礦與戰鬥混合節點，玩家可以 gather 黑曜、火晶、硫磺與熔爐殘片，也能 inspect 礦脈折光、鎖鏈刻痕和熔流方向來判斷下一段是否安全。若隊伍忽略地熱、毒氣與鏡面錯覺，火蜥蜴、岩漿蟲、火元素、熔岩巨像和惡魔守衛會把退路切斷；若穩定標記採集點，則能逐步靠近世界熔爐核心，並在每次採集後確認熱壓、毒氣與回程路標仍可辨認，且採礦工具沒有被黑曜反光誤導。',
    exits: [
      { direction: 'west', targetRoomId: 'obsidian_depths_black_glass_bridge', description: '火祠回到黑玻橋' },
      { direction: 'south', targetRoomId: 'obsidian_depths_core_drill', description: '祭火路通往核心鑽井' },
    ],
    monsters: [
      { monsterId: 'fire_elemental', maxCount: 2, respawnSeconds: 140 },
      { monsterId: 'arch_demon', maxCount: 1, respawnSeconds: 1800 },
    ],
    mapSymbol: '[祠]',
    mapX: 5,
    mapY: 1,
    guardianHints: {
      creature: '深層火祠的黑曜反光若忽然多出影子，熔爐守衛通常已經接近。',
      treasure: '深層火祠的礦脈、熔渣或古代爐印旁可能藏著高階採集線索。',
      spirit: '深層火祠保留著黑曜深層被古代熔爐長年燒穿的記憶。',
    },
  },

  obsidian_depths_lavafall_overlook: {
    id: 'obsidian_depths_lavafall_overlook',
    name: '熔瀑臺',
    zone: 'obsidian_depths' as RoomDef['zone'],
    image: 'obsidian_depths_lavafall_overlook.png',
    imagePrompt: '熔瀑臺 in obsidian_depths, volcanic underground obsidian mine with mirror black rock, lava glow, ancient forge machinery, sulfur steam and dark fire, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text',
    description:
      '熔瀑臺位於火山下方的黑曜深層，鏡面岩壁反射岩漿紅光，採礦繩標、古代熔爐符文、硫磺氣孔與黑玻裂縫交錯成高危資源路線。這裡是終局採礦與戰鬥混合節點，玩家可以 gather 黑曜、火晶、硫磺與熔爐殘片，也能 inspect 礦脈折光、鎖鏈刻痕和熔流方向來判斷下一段是否安全。若隊伍忽略地熱、毒氣與鏡面錯覺，火蜥蜴、岩漿蟲、火元素、熔岩巨像和惡魔守衛會把退路切斷；若穩定標記採集點，則能逐步靠近世界熔爐核心，並在每次採集後確認熱壓、毒氣與回程路標仍可辨認，且採礦工具沒有被黑曜反光誤導。',
    exits: [
      { direction: 'west', targetRoomId: 'obsidian_depths_ember_basin', description: '熔瀑臺回到餘燼盆地' },
      { direction: 'east', targetRoomId: 'obsidian_depths_molten_lock', description: '熔鎖門在東側' },
    ],
    monsters: [
      { monsterId: 'lava_worm', maxCount: 3, respawnSeconds: 120 },
      { monsterId: 'lava_colossus', maxCount: 1, respawnSeconds: 1800 },
    ],
    mapSymbol: '[瀑]',
    mapX: 4,
    mapY: -2,
    guardianHints: {
      creature: '熔瀑臺的黑曜反光若忽然多出影子，熔爐守衛通常已經接近。',
      treasure: '熔瀑臺的礦脈、熔渣或古代爐印旁可能藏著高階採集線索。',
      spirit: '熔瀑臺保留著黑曜深層被古代熔爐長年燒穿的記憶。',
    },
  },

  obsidian_depths_core_drill: {
    id: 'obsidian_depths_core_drill',
    name: '核心鑽井',
    zone: 'obsidian_depths' as RoomDef['zone'],
    image: 'obsidian_depths_core_drill.png',
    imagePrompt: '核心鑽井 in obsidian_depths, volcanic underground obsidian mine with mirror black rock, lava glow, ancient forge machinery, sulfur steam and dark fire, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text',
    description:
      '核心鑽井位於火山下方的黑曜深層，鏡面岩壁反射岩漿紅光，採礦繩標、古代熔爐符文、硫磺氣孔與黑玻裂縫交錯成高危資源路線。這裡是終局採礦與戰鬥混合節點，玩家可以 gather 黑曜、火晶、硫磺與熔爐殘片，也能 inspect 礦脈折光、鎖鏈刻痕和熔流方向來判斷下一段是否安全。若隊伍忽略地熱、毒氣與鏡面錯覺，火蜥蜴、岩漿蟲、火元素、熔岩巨像和惡魔守衛會把退路切斷；若穩定標記採集點，則能逐步靠近世界熔爐核心，並在每次採集後確認熱壓、毒氣與回程路標仍可辨認，且採礦工具沒有被黑曜反光誤導。',
    exits: [
      { direction: 'west', targetRoomId: 'obsidian_depths_obsidian_market', description: '核心鑽井回到棄市礦棚' },
      { direction: 'north', targetRoomId: 'obsidian_depths_depths_shrine', description: '祭火路回到深層火祠' },
      { direction: 'east', targetRoomId: 'obsidian_depths_heart_mirror', description: '心鏡廳在東側' },
    ],
    monsters: [
      { monsterId: 'lava_colossus', maxCount: 1, respawnSeconds: 1800 },
      { monsterId: 'fire_elemental', maxCount: 2, respawnSeconds: 140 },
    ],
    mapSymbol: '[鑽]',
    mapX: 6,
    mapY: 0,
    guardianHints: {
      creature: '核心鑽井的黑曜反光若忽然多出影子，熔爐守衛通常已經接近。',
      treasure: '核心鑽井的礦脈、熔渣或古代爐印旁可能藏著高階採集線索。',
      spirit: '核心鑽井保留著黑曜深層被古代熔爐長年燒穿的記憶。',
    },
  },

  obsidian_depths_molten_lock: {
    id: 'obsidian_depths_molten_lock',
    name: '熔鎖門',
    zone: 'obsidian_depths' as RoomDef['zone'],
    image: 'obsidian_depths_molten_lock.png',
    imagePrompt: '熔鎖門 in obsidian_depths, volcanic underground obsidian mine with mirror black rock, lava glow, ancient forge machinery, sulfur steam and dark fire, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text',
    description:
      '熔鎖門位於火山下方的黑曜深層，鏡面岩壁反射岩漿紅光，採礦繩標、古代熔爐符文、硫磺氣孔與黑玻裂縫交錯成高危資源路線。這裡是終局採礦與戰鬥混合節點，玩家可以 gather 黑曜、火晶、硫磺與熔爐殘片，也能 inspect 礦脈折光、鎖鏈刻痕和熔流方向來判斷下一段是否安全。若隊伍忽略地熱、毒氣與鏡面錯覺，火蜥蜴、岩漿蟲、火元素、熔岩巨像和惡魔守衛會把退路切斷；若穩定標記採集點，則能逐步靠近世界熔爐核心，並在每次採集後確認熱壓、毒氣與回程路標仍可辨認，且採礦工具沒有被黑曜反光誤導。',
    exits: [
      { direction: 'west', targetRoomId: 'obsidian_depths_lavafall_overlook', description: '熔鎖門回到熔瀑臺' },
      { direction: 'east', targetRoomId: 'obsidian_depths_heart_mirror', description: '熔鎖通道通往心鏡廳' },
    ],
    monsters: [
      { monsterId: 'arch_demon', maxCount: 1, respawnSeconds: 1800 },
      { monsterId: 'demon_warrior', maxCount: 2, respawnSeconds: 160 },
    ],
    mapSymbol: '[鎖]',
    mapX: 5,
    mapY: -2,
    guardianHints: {
      creature: '熔鎖門的黑曜反光若忽然多出影子，熔爐守衛通常已經接近。',
      treasure: '熔鎖門的礦脈、熔渣或古代爐印旁可能藏著高階採集線索。',
      spirit: '熔鎖門保留著黑曜深層被古代熔爐長年燒穿的記憶。',
    },
  },

  obsidian_depths_heart_mirror: {
    id: 'obsidian_depths_heart_mirror',
    name: '黑曜心鏡',
    zone: 'obsidian_depths' as RoomDef['zone'],
    image: 'obsidian_depths_heart_mirror.png',
    imagePrompt: '黑曜心鏡 in obsidian_depths, volcanic underground obsidian mine with mirror black rock, lava glow, ancient forge machinery, sulfur steam and dark fire, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text',
    description:
      '黑曜心鏡位於火山下方的黑曜深層，鏡面岩壁反射岩漿紅光，採礦繩標、古代熔爐符文、硫磺氣孔與黑玻裂縫交錯成高危資源路線。這裡是終局採礦與戰鬥混合節點，玩家可以 gather 黑曜、火晶、硫磺與熔爐殘片，也能 inspect 礦脈折光、鎖鏈刻痕和熔流方向來判斷下一段是否安全。若隊伍忽略地熱、毒氣與鏡面錯覺，火蜥蜴、岩漿蟲、火元素、熔岩巨像和惡魔守衛會把退路切斷；若穩定標記採集點，則能逐步靠近世界熔爐核心，並在每次採集後確認熱壓、毒氣與回程路標仍可辨認，且採礦工具沒有被黑曜反光誤導。',
    exits: [
      { direction: 'west', targetRoomId: 'obsidian_depths_core_drill', description: '心鏡廳回到核心鑽井' },
      { direction: 'south', targetRoomId: 'obsidian_depths_molten_lock', description: '熔鎖通道回到熔鎖門' },
      { direction: 'east', targetRoomId: 'obsidian_depths_worldforge_core', description: '核心裂口通往世界熔爐' },
    ],
    monsters: [
      { monsterId: 'lava_colossus', maxCount: 1, respawnSeconds: 1800 },
      { monsterId: 'arch_demon', maxCount: 1, respawnSeconds: 1800 },
    ],
    mapSymbol: '[心]',
    mapX: 7,
    mapY: 0,
    guardianHints: {
      creature: '黑曜心鏡的黑曜反光若忽然多出影子，熔爐守衛通常已經接近。',
      treasure: '黑曜心鏡的礦脈、熔渣或古代爐印旁可能藏著高階採集線索。',
      spirit: '黑曜心鏡保留著黑曜深層被古代熔爐長年燒穿的記憶。',
    },
  },

  obsidian_depths_worldforge_core: {
    id: 'obsidian_depths_worldforge_core',
    name: '世界熔爐核心',
    zone: 'obsidian_depths' as RoomDef['zone'],
    image: 'obsidian_depths_worldforge_core.png',
    imagePrompt: '世界熔爐核心 in obsidian_depths, volcanic underground obsidian mine with mirror black rock, lava glow, ancient forge machinery, sulfur steam and dark fire, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text',
    description:
      '世界熔爐核心位於火山下方的黑曜深層，鏡面岩壁反射岩漿紅光，採礦繩標、古代熔爐符文、硫磺氣孔與黑玻裂縫交錯成高危資源路線。這裡是終局採礦與戰鬥混合節點，玩家可以 gather 黑曜、火晶、硫磺與熔爐殘片，也能 inspect 礦脈折光、鎖鏈刻痕和熔流方向來判斷下一段是否安全。若隊伍忽略地熱、毒氣與鏡面錯覺，火蜥蜴、岩漿蟲、火元素、熔岩巨像和惡魔守衛會把退路切斷；若穩定標記採集點，則能逐步靠近世界熔爐核心，並在每次採集後確認熱壓、毒氣與回程路標仍可辨認，且採礦工具沒有被黑曜反光誤導。',
    exits: [
      { direction: 'west', targetRoomId: 'obsidian_depths_heart_mirror', description: '核心裂口回到黑曜心鏡' },
    ],
    monsters: [
      { monsterId: 'lava_colossus', maxCount: 1, respawnSeconds: 1800 },
      { monsterId: 'arch_demon', maxCount: 1, respawnSeconds: 1800 },
      { monsterId: 'fire_elemental', maxCount: 3, respawnSeconds: 140 },
    ],
    mapSymbol: '[核]',
    mapX: 8,
    mapY: 0,
    guardianHints: {
      creature: '世界熔爐核心的黑曜反光若忽然多出影子，熔爐守衛通常已經接近。',
      treasure: '世界熔爐核心的礦脈、熔渣或古代爐印旁可能藏著高階採集線索。',
      spirit: '世界熔爐核心保留著黑曜深層被古代熔爐長年燒穿的記憶。',
    },
  },
  starfall_crater_rim_gate: {
    id: 'starfall_crater_rim_gate',
    name: '隕坑邊門',
    zone: 'starfall_crater' as RoomDef['zone'],
    image: 'starfall_crater_rim_gate.png',
    imagePrompt: '隕坑邊門 in starfall_crater, huge meteor impact crater with star metal, glowing glass rock, alien light, gravity distortion and cosmic rifts, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text',
    description:
      '隕坑邊門位於星隕坑的玻化岩層與星鐵碎帶之間，隕石衝擊留下的輻光、磁砂、重力異常和外界裂縫讓每一步都像踩在尚未冷卻的天空傷口上。這裡是終局採礦與世界王前置節點，玩家可以 gather 星鐵、彗片、輻光砂與異界殘片，也能 inspect 磁化尖塔、星圖、卵灘和虛玻裂紋來判斷危險來源。若隊伍忽略重力變化或星光脈衝，晶體魔像、暗影惡魔、混沌生物與風暴龍影會切斷採集路線；若穩定標記安全坡道，則能逐步接近世界王星核，並確認採集工具沒有被磁砂吸走，撤退坡道也仍保持穩定安全可行穩固明確。',
    exits: [
      { direction: 'east', targetRoomId: 'starfall_crater_glass_slope', description: '玻化斜坡通往坑內' },
      { direction: 'north', targetRoomId: 'starfall_crater_survey_camp', description: '測量營地在北側' },
    ],
    monsters: [
      { monsterId: 'crystal_golem', maxCount: 1, respawnSeconds: 160 },
    ],
    mapSymbol: '[門]',
    mapX: 0,
    mapY: 0,
    guardianHints: {
      creature: '隕坑邊門的星光若忽然偏折，異界巡行者通常已經接近。',
      treasure: '隕坑邊門的星鐵、彗片或虛玻裂紋旁可能藏著高階採集線索。',
      spirit: '隕坑邊門保留著隕星撞開大地與外界裂縫時的記憶。',
    },
  },

  starfall_crater_glass_slope: {
    id: 'starfall_crater_glass_slope',
    name: '玻化斜坡',
    zone: 'starfall_crater' as RoomDef['zone'],
    image: 'starfall_crater_glass_slope.png',
    imagePrompt: '玻化斜坡 in starfall_crater, huge meteor impact crater with star metal, glowing glass rock, alien light, gravity distortion and cosmic rifts, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text',
    description:
      '玻化斜坡位於星隕坑的玻化岩層與星鐵碎帶之間，隕石衝擊留下的輻光、磁砂、重力異常和外界裂縫讓每一步都像踩在尚未冷卻的天空傷口上。這裡是終局採礦與世界王前置節點，玩家可以 gather 星鐵、彗片、輻光砂與異界殘片，也能 inspect 磁化尖塔、星圖、卵灘和虛玻裂紋來判斷危險來源。若隊伍忽略重力變化或星光脈衝，晶體魔像、暗影惡魔、混沌生物與風暴龍影會切斷採集路線；若穩定標記安全坡道，則能逐步接近世界王星核，並確認採集工具沒有被磁砂吸走，撤退坡道也仍保持穩定安全可行穩固明確。',
    exits: [
      { direction: 'west', targetRoomId: 'starfall_crater_rim_gate', description: '玻化斜坡回到邊門' },
      { direction: 'east', targetRoomId: 'starfall_crater_stariron_field', description: '星鐵散地在前方' },
      { direction: 'south', targetRoomId: 'starfall_crater_burning_scree', description: '燃石坡向下滑落' },
    ],
    monsters: [
      { monsterId: 'crystal_golem', maxCount: 2, respawnSeconds: 160 },
      { monsterId: 'thunder_eagle', maxCount: 1, respawnSeconds: 120 },
    ],
    mapSymbol: '[坡]',
    mapX: 1,
    mapY: 0,
    guardianHints: {
      creature: '玻化斜坡的星光若忽然偏折，異界巡行者通常已經接近。',
      treasure: '玻化斜坡的星鐵、彗片或虛玻裂紋旁可能藏著高階採集線索。',
      spirit: '玻化斜坡保留著隕星撞開大地與外界裂縫時的記憶。',
    },
  },

  starfall_crater_survey_camp: {
    id: 'starfall_crater_survey_camp',
    name: '測量營地',
    zone: 'starfall_crater' as RoomDef['zone'],
    image: 'starfall_crater_survey_camp.png',
    imagePrompt: '測量營地 in starfall_crater, huge meteor impact crater with star metal, glowing glass rock, alien light, gravity distortion and cosmic rifts, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text',
    description:
      '測量營地位於星隕坑的玻化岩層與星鐵碎帶之間，隕石衝擊留下的輻光、磁砂、重力異常和外界裂縫讓每一步都像踩在尚未冷卻的天空傷口上。這裡是終局採礦與世界王前置節點，玩家可以 gather 星鐵、彗片、輻光砂與異界殘片，也能 inspect 磁化尖塔、星圖、卵灘和虛玻裂紋來判斷危險來源。若隊伍忽略重力變化或星光脈衝，晶體魔像、暗影惡魔、混沌生物與風暴龍影會切斷採集路線；若穩定標記安全坡道，則能逐步接近世界王星核，並確認採集工具沒有被磁砂吸走，撤退坡道也仍保持穩定安全可行穩固明確。',
    exits: [
      { direction: 'south', targetRoomId: 'starfall_crater_rim_gate', description: '營地路回到隕坑邊門' },
      { direction: 'east', targetRoomId: 'starfall_crater_magnetized_spire', description: '磁化尖塔在東側' },
    ],
    monsters: [
      { monsterId: 'wind_hawk', maxCount: 2, respawnSeconds: 80 },
      { monsterId: 'crystal_golem', maxCount: 1, respawnSeconds: 160 },
    ],
    mapSymbol: '[營]',
    mapX: 0,
    mapY: 1,
    guardianHints: {
      creature: '測量營地的星光若忽然偏折，異界巡行者通常已經接近。',
      treasure: '測量營地的星鐵、彗片或虛玻裂紋旁可能藏著高階採集線索。',
      spirit: '測量營地保留著隕星撞開大地與外界裂縫時的記憶。',
    },
  },

  starfall_crater_magnetized_spire: {
    id: 'starfall_crater_magnetized_spire',
    name: '磁化尖塔',
    zone: 'starfall_crater' as RoomDef['zone'],
    image: 'starfall_crater_magnetized_spire.png',
    imagePrompt: '磁化尖塔 in starfall_crater, huge meteor impact crater with star metal, glowing glass rock, alien light, gravity distortion and cosmic rifts, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text',
    description:
      '磁化尖塔位於星隕坑的玻化岩層與星鐵碎帶之間，隕石衝擊留下的輻光、磁砂、重力異常和外界裂縫讓每一步都像踩在尚未冷卻的天空傷口上。這裡是終局採礦與世界王前置節點，玩家可以 gather 星鐵、彗片、輻光砂與異界殘片，也能 inspect 磁化尖塔、星圖、卵灘和虛玻裂紋來判斷危險來源。若隊伍忽略重力變化或星光脈衝，晶體魔像、暗影惡魔、混沌生物與風暴龍影會切斷採集路線；若穩定標記安全坡道，則能逐步接近世界王星核，並確認採集工具沒有被磁砂吸走，撤退坡道也仍保持穩定安全可行穩固明確。',
    exits: [
      { direction: 'west', targetRoomId: 'starfall_crater_survey_camp', description: '尖塔路回到測量營地' },
      { direction: 'east', targetRoomId: 'starfall_crater_radiant_pool', description: '輻光水池在東側' },
      { direction: 'south', targetRoomId: 'starfall_crater_stariron_field', description: '磁砂坡落向星鐵散地' },
    ],
    monsters: [
      { monsterId: 'crystal_golem', maxCount: 2, respawnSeconds: 160 },
      { monsterId: 'storm_dragon', maxCount: 1, respawnSeconds: 1800 },
    ],
    mapSymbol: '[磁]',
    mapX: 1,
    mapY: 1,
    guardianHints: {
      creature: '磁化尖塔的星光若忽然偏折，異界巡行者通常已經接近。',
      treasure: '磁化尖塔的星鐵、彗片或虛玻裂紋旁可能藏著高階採集線索。',
      spirit: '磁化尖塔保留著隕星撞開大地與外界裂縫時的記憶。',
    },
  },

  starfall_crater_stariron_field: {
    id: 'starfall_crater_stariron_field',
    name: '星鐵散地',
    zone: 'starfall_crater' as RoomDef['zone'],
    image: 'starfall_crater_stariron_field.png',
    imagePrompt: '星鐵散地 in starfall_crater, huge meteor impact crater with star metal, glowing glass rock, alien light, gravity distortion and cosmic rifts, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text',
    description:
      '星鐵散地位於星隕坑的玻化岩層與星鐵碎帶之間，隕石衝擊留下的輻光、磁砂、重力異常和外界裂縫讓每一步都像踩在尚未冷卻的天空傷口上。這裡是終局採礦與世界王前置節點，玩家可以 gather 星鐵、彗片、輻光砂與異界殘片，也能 inspect 磁化尖塔、星圖、卵灘和虛玻裂紋來判斷危險來源。若隊伍忽略重力變化或星光脈衝，晶體魔像、暗影惡魔、混沌生物與風暴龍影會切斷採集路線；若穩定標記安全坡道，則能逐步接近世界王星核，並確認採集工具沒有被磁砂吸走，撤退坡道也仍保持穩定安全可行穩固明確。',
    exits: [
      { direction: 'west', targetRoomId: 'starfall_crater_glass_slope', description: '星鐵散地回到玻化斜坡' },
      { direction: 'north', targetRoomId: 'starfall_crater_magnetized_spire', description: '磁砂坡回到磁化尖塔' },
      { direction: 'east', targetRoomId: 'starfall_crater_impact_trench', description: '撞擊裂溝在前方' },
    ],
    monsters: [
      { monsterId: 'crystal_golem', maxCount: 3, respawnSeconds: 160 },
    ],
    mapSymbol: '[鐵]',
    mapX: 2,
    mapY: 0,
    guardianHints: {
      creature: '星鐵散地的星光若忽然偏折，異界巡行者通常已經接近。',
      treasure: '星鐵散地的星鐵、彗片或虛玻裂紋旁可能藏著高階採集線索。',
      spirit: '星鐵散地保留著隕星撞開大地與外界裂縫時的記憶。',
    },
  },

  starfall_crater_burning_scree: {
    id: 'starfall_crater_burning_scree',
    name: '燃石坡',
    zone: 'starfall_crater' as RoomDef['zone'],
    image: 'starfall_crater_burning_scree.png',
    imagePrompt: '燃石坡 in starfall_crater, huge meteor impact crater with star metal, glowing glass rock, alien light, gravity distortion and cosmic rifts, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text',
    description:
      '燃石坡位於星隕坑的玻化岩層與星鐵碎帶之間，隕石衝擊留下的輻光、磁砂、重力異常和外界裂縫讓每一步都像踩在尚未冷卻的天空傷口上。這裡是終局採礦與世界王前置節點，玩家可以 gather 星鐵、彗片、輻光砂與異界殘片，也能 inspect 磁化尖塔、星圖、卵灘和虛玻裂紋來判斷危險來源。若隊伍忽略重力變化或星光脈衝，晶體魔像、暗影惡魔、混沌生物與風暴龍影會切斷採集路線；若穩定標記安全坡道，則能逐步接近世界王星核，並確認採集工具沒有被磁砂吸走，撤退坡道也仍保持穩定安全可行穩固明確。',
    exits: [
      { direction: 'north', targetRoomId: 'starfall_crater_glass_slope', description: '燃石坡回到玻化斜坡' },
      { direction: 'east', targetRoomId: 'starfall_crater_fallen_observatory', description: '墜落觀測臺在東側' },
    ],
    monsters: [
      { monsterId: 'fire_elemental', maxCount: 2, respawnSeconds: 140 },
      { monsterId: 'crystal_golem', maxCount: 1, respawnSeconds: 160 },
    ],
    mapSymbol: '[燃]',
    mapX: 1,
    mapY: -1,
    guardianHints: {
      creature: '燃石坡的星光若忽然偏折，異界巡行者通常已經接近。',
      treasure: '燃石坡的星鐵、彗片或虛玻裂紋旁可能藏著高階採集線索。',
      spirit: '燃石坡保留著隕星撞開大地與外界裂縫時的記憶。',
    },
  },

  starfall_crater_radiant_pool: {
    id: 'starfall_crater_radiant_pool',
    name: '輻光水池',
    zone: 'starfall_crater' as RoomDef['zone'],
    image: 'starfall_crater_radiant_pool.png',
    imagePrompt: '輻光水池 in starfall_crater, huge meteor impact crater with star metal, glowing glass rock, alien light, gravity distortion and cosmic rifts, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text',
    description:
      '輻光水池位於星隕坑的玻化岩層與星鐵碎帶之間，隕石衝擊留下的輻光、磁砂、重力異常和外界裂縫讓每一步都像踩在尚未冷卻的天空傷口上。這裡是終局採礦與世界王前置節點，玩家可以 gather 星鐵、彗片、輻光砂與異界殘片，也能 inspect 磁化尖塔、星圖、卵灘和虛玻裂紋來判斷危險來源。若隊伍忽略重力變化或星光脈衝，晶體魔像、暗影惡魔、混沌生物與風暴龍影會切斷採集路線；若穩定標記安全坡道，則能逐步接近世界王星核，並確認採集工具沒有被磁砂吸走，撤退坡道也仍保持穩定安全可行穩固明確。',
    exits: [
      { direction: 'west', targetRoomId: 'starfall_crater_magnetized_spire', description: '輻光水池回到磁化尖塔' },
      { direction: 'east', targetRoomId: 'starfall_crater_silvergrass_ring', description: '銀草環在東側' },
    ],
    monsters: [
      { monsterId: 'jellyfish', maxCount: 2, respawnSeconds: 80 },
      { monsterId: 'crystal_golem', maxCount: 1, respawnSeconds: 160 },
    ],
    mapSymbol: '[池]',
    mapX: 2,
    mapY: 1,
    guardianHints: {
      creature: '輻光水池的星光若忽然偏折，異界巡行者通常已經接近。',
      treasure: '輻光水池的星鐵、彗片或虛玻裂紋旁可能藏著高階採集線索。',
      spirit: '輻光水池保留著隕星撞開大地與外界裂縫時的記憶。',
    },
  },

  starfall_crater_impact_trench: {
    id: 'starfall_crater_impact_trench',
    name: '撞擊裂溝',
    zone: 'starfall_crater' as RoomDef['zone'],
    image: 'starfall_crater_impact_trench.png',
    imagePrompt: '撞擊裂溝 in starfall_crater, huge meteor impact crater with star metal, glowing glass rock, alien light, gravity distortion and cosmic rifts, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text',
    description:
      '撞擊裂溝位於星隕坑的玻化岩層與星鐵碎帶之間，隕石衝擊留下的輻光、磁砂、重力異常和外界裂縫讓每一步都像踩在尚未冷卻的天空傷口上。這裡是終局採礦與世界王前置節點，玩家可以 gather 星鐵、彗片、輻光砂與異界殘片，也能 inspect 磁化尖塔、星圖、卵灘和虛玻裂紋來判斷危險來源。若隊伍忽略重力變化或星光脈衝，晶體魔像、暗影惡魔、混沌生物與風暴龍影會切斷採集路線；若穩定標記安全坡道，則能逐步接近世界王星核，並確認採集工具沒有被磁砂吸走，撤退坡道也仍保持穩定安全可行穩固明確。',
    exits: [
      { direction: 'west', targetRoomId: 'starfall_crater_stariron_field', description: '裂溝回到星鐵散地' },
      { direction: 'east', targetRoomId: 'starfall_crater_alien_eggs', description: '異卵灘在前方' },
      { direction: 'south', targetRoomId: 'starfall_crater_fallen_observatory', description: '斷臺階通往觀測臺' },
    ],
    monsters: [
      { monsterId: 'crystal_golem', maxCount: 2, respawnSeconds: 160 },
      { monsterId: 'shadow_demon', maxCount: 1, respawnSeconds: 180 },
    ],
    mapSymbol: '[裂]',
    mapX: 3,
    mapY: 0,
    guardianHints: {
      creature: '撞擊裂溝的星光若忽然偏折，異界巡行者通常已經接近。',
      treasure: '撞擊裂溝的星鐵、彗片或虛玻裂紋旁可能藏著高階採集線索。',
      spirit: '撞擊裂溝保留著隕星撞開大地與外界裂縫時的記憶。',
    },
  },

  starfall_crater_fallen_observatory: {
    id: 'starfall_crater_fallen_observatory',
    name: '墜落觀測臺',
    zone: 'starfall_crater' as RoomDef['zone'],
    image: 'starfall_crater_fallen_observatory.png',
    imagePrompt: '墜落觀測臺 in starfall_crater, huge meteor impact crater with star metal, glowing glass rock, alien light, gravity distortion and cosmic rifts, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text',
    description:
      '墜落觀測臺位於星隕坑的玻化岩層與星鐵碎帶之間，隕石衝擊留下的輻光、磁砂、重力異常和外界裂縫讓每一步都像踩在尚未冷卻的天空傷口上。這裡是終局採礦與世界王前置節點，玩家可以 gather 星鐵、彗片、輻光砂與異界殘片，也能 inspect 磁化尖塔、星圖、卵灘和虛玻裂紋來判斷危險來源。若隊伍忽略重力變化或星光脈衝，晶體魔像、暗影惡魔、混沌生物與風暴龍影會切斷採集路線；若穩定標記安全坡道，則能逐步接近世界王星核，並確認採集工具沒有被磁砂吸走，撤退坡道也仍保持穩定安全可行穩固明確。',
    exits: [
      { direction: 'west', targetRoomId: 'starfall_crater_burning_scree', description: '觀測臺回到燃石坡' },
      { direction: 'north', targetRoomId: 'starfall_crater_impact_trench', description: '斷臺階回到撞擊裂溝' },
      { direction: 'east', targetRoomId: 'starfall_crater_comet_shard_mine', description: '彗片礦井在東側' },
    ],
    monsters: [
      { monsterId: 'shadow_assassin', maxCount: 2, respawnSeconds: 160 },
      { monsterId: 'crystal_golem', maxCount: 1, respawnSeconds: 160 },
    ],
    mapSymbol: '[觀]',
    mapX: 2,
    mapY: -1,
    guardianHints: {
      creature: '墜落觀測臺的星光若忽然偏折，異界巡行者通常已經接近。',
      treasure: '墜落觀測臺的星鐵、彗片或虛玻裂紋旁可能藏著高階採集線索。',
      spirit: '墜落觀測臺保留著隕星撞開大地與外界裂縫時的記憶。',
    },
  },

  starfall_crater_silvergrass_ring: {
    id: 'starfall_crater_silvergrass_ring',
    name: '銀草環',
    zone: 'starfall_crater' as RoomDef['zone'],
    image: 'starfall_crater_silvergrass_ring.png',
    imagePrompt: '銀草環 in starfall_crater, huge meteor impact crater with star metal, glowing glass rock, alien light, gravity distortion and cosmic rifts, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text',
    description:
      '銀草環位於星隕坑的玻化岩層與星鐵碎帶之間，隕石衝擊留下的輻光、磁砂、重力異常和外界裂縫讓每一步都像踩在尚未冷卻的天空傷口上。這裡是終局採礦與世界王前置節點，玩家可以 gather 星鐵、彗片、輻光砂與異界殘片，也能 inspect 磁化尖塔、星圖、卵灘和虛玻裂紋來判斷危險來源。若隊伍忽略重力變化或星光脈衝，晶體魔像、暗影惡魔、混沌生物與風暴龍影會切斷採集路線；若穩定標記安全坡道，則能逐步接近世界王星核，並確認採集工具沒有被磁砂吸走，撤退坡道也仍保持穩定安全可行穩固明確。',
    exits: [
      { direction: 'west', targetRoomId: 'starfall_crater_radiant_pool', description: '銀草環回到輻光水池' },
      { direction: 'east', targetRoomId: 'starfall_crater_gravity_well', description: '重力井在東側' },
    ],
    monsters: [
      { monsterId: 'wind_hawk', maxCount: 2, respawnSeconds: 80 },
      { monsterId: 'shadow_demon', maxCount: 1, respawnSeconds: 180 },
    ],
    mapSymbol: '[草]',
    mapX: 3,
    mapY: 1,
    guardianHints: {
      creature: '銀草環的星光若忽然偏折，異界巡行者通常已經接近。',
      treasure: '銀草環的星鐵、彗片或虛玻裂紋旁可能藏著高階採集線索。',
      spirit: '銀草環保留著隕星撞開大地與外界裂縫時的記憶。',
    },
  },

  starfall_crater_alien_eggs: {
    id: 'starfall_crater_alien_eggs',
    name: '異界卵灘',
    zone: 'starfall_crater' as RoomDef['zone'],
    image: 'starfall_crater_alien_eggs.png',
    imagePrompt: '異界卵灘 in starfall_crater, huge meteor impact crater with star metal, glowing glass rock, alien light, gravity distortion and cosmic rifts, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text',
    description:
      '異界卵灘位於星隕坑的玻化岩層與星鐵碎帶之間，隕石衝擊留下的輻光、磁砂、重力異常和外界裂縫讓每一步都像踩在尚未冷卻的天空傷口上。這裡是終局採礦與世界王前置節點，玩家可以 gather 星鐵、彗片、輻光砂與異界殘片，也能 inspect 磁化尖塔、星圖、卵灘和虛玻裂紋來判斷危險來源。若隊伍忽略重力變化或星光脈衝，晶體魔像、暗影惡魔、混沌生物與風暴龍影會切斷採集路線；若穩定標記安全坡道，則能逐步接近世界王星核，並確認採集工具沒有被磁砂吸走，撤退坡道也仍保持穩定安全可行穩固明確。',
    exits: [
      { direction: 'west', targetRoomId: 'starfall_crater_impact_trench', description: '異卵灘回到撞擊裂溝' },
      { direction: 'east', targetRoomId: 'starfall_crater_voidglass_arch', description: '虛玻拱在東側' },
      { direction: 'south', targetRoomId: 'starfall_crater_comet_shard_mine', description: '碎星坡落向礦井' },
    ],
    monsters: [
      { monsterId: 'chaos_spawn', maxCount: 1, respawnSeconds: 180 },
      { monsterId: 'shadow_demon', maxCount: 2, respawnSeconds: 180 },
    ],
    mapSymbol: '[卵]',
    mapX: 4,
    mapY: 0,
    guardianHints: {
      creature: '異界卵灘的星光若忽然偏折，異界巡行者通常已經接近。',
      treasure: '異界卵灘的星鐵、彗片或虛玻裂紋旁可能藏著高階採集線索。',
      spirit: '異界卵灘保留著隕星撞開大地與外界裂縫時的記憶。',
    },
  },

  starfall_crater_comet_shard_mine: {
    id: 'starfall_crater_comet_shard_mine',
    name: '彗片礦井',
    zone: 'starfall_crater' as RoomDef['zone'],
    image: 'starfall_crater_comet_shard_mine.png',
    imagePrompt: '彗片礦井 in starfall_crater, huge meteor impact crater with star metal, glowing glass rock, alien light, gravity distortion and cosmic rifts, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text',
    description:
      '彗片礦井位於星隕坑的玻化岩層與星鐵碎帶之間，隕石衝擊留下的輻光、磁砂、重力異常和外界裂縫讓每一步都像踩在尚未冷卻的天空傷口上。這裡是終局採礦與世界王前置節點，玩家可以 gather 星鐵、彗片、輻光砂與異界殘片，也能 inspect 磁化尖塔、星圖、卵灘和虛玻裂紋來判斷危險來源。若隊伍忽略重力變化或星光脈衝，晶體魔像、暗影惡魔、混沌生物與風暴龍影會切斷採集路線；若穩定標記安全坡道，則能逐步接近世界王星核，並確認採集工具沒有被磁砂吸走，撤退坡道也仍保持穩定安全可行穩固明確。',
    exits: [
      { direction: 'west', targetRoomId: 'starfall_crater_fallen_observatory', description: '彗片礦井回到觀測臺' },
      { direction: 'north', targetRoomId: 'starfall_crater_alien_eggs', description: '碎星坡回到異卵灘' },
      { direction: 'east', targetRoomId: 'starfall_crater_meteoric_forge', description: '隕鐵熔臺在東側' },
    ],
    monsters: [
      { monsterId: 'crystal_golem', maxCount: 2, respawnSeconds: 160 },
      { monsterId: 'shadow_demon', maxCount: 1, respawnSeconds: 180 },
    ],
    mapSymbol: '[彗]',
    mapX: 3,
    mapY: -1,
    guardianHints: {
      creature: '彗片礦井的星光若忽然偏折，異界巡行者通常已經接近。',
      treasure: '彗片礦井的星鐵、彗片或虛玻裂紋旁可能藏著高階採集線索。',
      spirit: '彗片礦井保留著隕星撞開大地與外界裂縫時的記憶。',
    },
  },

  starfall_crater_gravity_well: {
    id: 'starfall_crater_gravity_well',
    name: '重力井',
    zone: 'starfall_crater' as RoomDef['zone'],
    image: 'starfall_crater_gravity_well.png',
    imagePrompt: '重力井 in starfall_crater, huge meteor impact crater with star metal, glowing glass rock, alien light, gravity distortion and cosmic rifts, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text',
    description:
      '重力井位於星隕坑的玻化岩層與星鐵碎帶之間，隕石衝擊留下的輻光、磁砂、重力異常和外界裂縫讓每一步都像踩在尚未冷卻的天空傷口上。這裡是終局採礦與世界王前置節點，玩家可以 gather 星鐵、彗片、輻光砂與異界殘片，也能 inspect 磁化尖塔、星圖、卵灘和虛玻裂紋來判斷危險來源。若隊伍忽略重力變化或星光脈衝，晶體魔像、暗影惡魔、混沌生物與風暴龍影會切斷採集路線；若穩定標記安全坡道，則能逐步接近世界王星核，並確認採集工具沒有被磁砂吸走，撤退坡道也仍保持穩定安全可行穩固明確。',
    exits: [
      { direction: 'west', targetRoomId: 'starfall_crater_silvergrass_ring', description: '重力井回到銀草環' },
      { direction: 'east', targetRoomId: 'starfall_crater_star_map_ruin', description: '星圖廢墟在東側' },
      { direction: 'south', targetRoomId: 'starfall_crater_voidglass_arch', description: '引力坡落向虛玻拱' },
    ],
    monsters: [
      { monsterId: 'chaos_spawn', maxCount: 2, respawnSeconds: 180 },
      { monsterId: 'crystal_golem', maxCount: 1, respawnSeconds: 160 },
    ],
    mapSymbol: '[重]',
    mapX: 4,
    mapY: 1,
    guardianHints: {
      creature: '重力井的星光若忽然偏折，異界巡行者通常已經接近。',
      treasure: '重力井的星鐵、彗片或虛玻裂紋旁可能藏著高階採集線索。',
      spirit: '重力井保留著隕星撞開大地與外界裂縫時的記憶。',
    },
  },

  starfall_crater_voidglass_arch: {
    id: 'starfall_crater_voidglass_arch',
    name: '虛玻拱',
    zone: 'starfall_crater' as RoomDef['zone'],
    image: 'starfall_crater_voidglass_arch.png',
    imagePrompt: '虛玻拱 in starfall_crater, huge meteor impact crater with star metal, glowing glass rock, alien light, gravity distortion and cosmic rifts, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text',
    description:
      '虛玻拱位於星隕坑的玻化岩層與星鐵碎帶之間，隕石衝擊留下的輻光、磁砂、重力異常和外界裂縫讓每一步都像踩在尚未冷卻的天空傷口上。這裡是終局採礦與世界王前置節點，玩家可以 gather 星鐵、彗片、輻光砂與異界殘片，也能 inspect 磁化尖塔、星圖、卵灘和虛玻裂紋來判斷危險來源。若隊伍忽略重力變化或星光脈衝，晶體魔像、暗影惡魔、混沌生物與風暴龍影會切斷採集路線；若穩定標記安全坡道，則能逐步接近世界王星核，並確認採集工具沒有被磁砂吸走，撤退坡道也仍保持穩定安全可行穩固明確。',
    exits: [
      { direction: 'west', targetRoomId: 'starfall_crater_alien_eggs', description: '虛玻拱回到異卵灘' },
      { direction: 'north', targetRoomId: 'starfall_crater_gravity_well', description: '引力坡回到重力井' },
      { direction: 'east', targetRoomId: 'starfall_crater_worldscar_rift', description: '世界傷痕裂縫在東側' },
    ],
    monsters: [
      { monsterId: 'shadow_demon', maxCount: 2, respawnSeconds: 180 },
      { monsterId: 'chaos_spawn', maxCount: 1, respawnSeconds: 180 },
    ],
    mapSymbol: '[虛]',
    mapX: 5,
    mapY: 0,
    guardianHints: {
      creature: '虛玻拱的星光若忽然偏折，異界巡行者通常已經接近。',
      treasure: '虛玻拱的星鐵、彗片或虛玻裂紋旁可能藏著高階採集線索。',
      spirit: '虛玻拱保留著隕星撞開大地與外界裂縫時的記憶。',
    },
  },

  starfall_crater_meteoric_forge: {
    id: 'starfall_crater_meteoric_forge',
    name: '隕鐵熔臺',
    zone: 'starfall_crater' as RoomDef['zone'],
    image: 'starfall_crater_meteoric_forge.png',
    imagePrompt: '隕鐵熔臺 in starfall_crater, huge meteor impact crater with star metal, glowing glass rock, alien light, gravity distortion and cosmic rifts, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text',
    description:
      '隕鐵熔臺位於星隕坑的玻化岩層與星鐵碎帶之間，隕石衝擊留下的輻光、磁砂、重力異常和外界裂縫讓每一步都像踩在尚未冷卻的天空傷口上。這裡是終局採礦與世界王前置節點，玩家可以 gather 星鐵、彗片、輻光砂與異界殘片，也能 inspect 磁化尖塔、星圖、卵灘和虛玻裂紋來判斷危險來源。若隊伍忽略重力變化或星光脈衝，晶體魔像、暗影惡魔、混沌生物與風暴龍影會切斷採集路線；若穩定標記安全坡道，則能逐步接近世界王星核，並確認採集工具沒有被磁砂吸走，撤退坡道也仍保持穩定安全可行穩固明確。',
    exits: [
      { direction: 'west', targetRoomId: 'starfall_crater_comet_shard_mine', description: '隕鐵熔臺回到彗片礦井' },
      { direction: 'east', targetRoomId: 'starfall_crater_impact_core', description: '撞擊核心在東側' },
    ],
    monsters: [
      { monsterId: 'fire_elemental', maxCount: 2, respawnSeconds: 140 },
      { monsterId: 'crystal_golem', maxCount: 2, respawnSeconds: 160 },
    ],
    mapSymbol: '[熔]',
    mapX: 4,
    mapY: -1,
    guardianHints: {
      creature: '隕鐵熔臺的星光若忽然偏折，異界巡行者通常已經接近。',
      treasure: '隕鐵熔臺的星鐵、彗片或虛玻裂紋旁可能藏著高階採集線索。',
      spirit: '隕鐵熔臺保留著隕星撞開大地與外界裂縫時的記憶。',
    },
  },

  starfall_crater_star_map_ruin: {
    id: 'starfall_crater_star_map_ruin',
    name: '星圖廢墟',
    zone: 'starfall_crater' as RoomDef['zone'],
    image: 'starfall_crater_star_map_ruin.png',
    imagePrompt: '星圖廢墟 in starfall_crater, huge meteor impact crater with star metal, glowing glass rock, alien light, gravity distortion and cosmic rifts, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text',
    description:
      '星圖廢墟位於星隕坑的玻化岩層與星鐵碎帶之間，隕石衝擊留下的輻光、磁砂、重力異常和外界裂縫讓每一步都像踩在尚未冷卻的天空傷口上。這裡是終局採礦與世界王前置節點，玩家可以 gather 星鐵、彗片、輻光砂與異界殘片，也能 inspect 磁化尖塔、星圖、卵灘和虛玻裂紋來判斷危險來源。若隊伍忽略重力變化或星光脈衝，晶體魔像、暗影惡魔、混沌生物與風暴龍影會切斷採集路線；若穩定標記安全坡道，則能逐步接近世界王星核，並確認採集工具沒有被磁砂吸走，撤退坡道也仍保持穩定安全可行穩固明確。',
    exits: [
      { direction: 'west', targetRoomId: 'starfall_crater_gravity_well', description: '星圖廢墟回到重力井' },
      { direction: 'south', targetRoomId: 'starfall_crater_worldscar_rift', description: '星線落向世界傷痕' },
    ],
    monsters: [
      { monsterId: 'shadow_demon', maxCount: 2, respawnSeconds: 180 },
      { monsterId: 'storm_dragon', maxCount: 1, respawnSeconds: 1800 },
    ],
    mapSymbol: '[圖]',
    mapX: 5,
    mapY: 1,
    guardianHints: {
      creature: '星圖廢墟的星光若忽然偏折，異界巡行者通常已經接近。',
      treasure: '星圖廢墟的星鐵、彗片或虛玻裂紋旁可能藏著高階採集線索。',
      spirit: '星圖廢墟保留著隕星撞開大地與外界裂縫時的記憶。',
    },
  },

  starfall_crater_worldscar_rift: {
    id: 'starfall_crater_worldscar_rift',
    name: '世界傷痕',
    zone: 'starfall_crater' as RoomDef['zone'],
    image: 'starfall_crater_worldscar_rift.png',
    imagePrompt: '世界傷痕 in starfall_crater, huge meteor impact crater with star metal, glowing glass rock, alien light, gravity distortion and cosmic rifts, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text',
    description:
      '世界傷痕位於星隕坑的玻化岩層與星鐵碎帶之間，隕石衝擊留下的輻光、磁砂、重力異常和外界裂縫讓每一步都像踩在尚未冷卻的天空傷口上。這裡是終局採礦與世界王前置節點，玩家可以 gather 星鐵、彗片、輻光砂與異界殘片，也能 inspect 磁化尖塔、星圖、卵灘和虛玻裂紋來判斷危險來源。若隊伍忽略重力變化或星光脈衝，晶體魔像、暗影惡魔、混沌生物與風暴龍影會切斷採集路線；若穩定標記安全坡道，則能逐步接近世界王星核，並確認採集工具沒有被磁砂吸走，撤退坡道也仍保持穩定安全可行穩固明確。',
    exits: [
      { direction: 'west', targetRoomId: 'starfall_crater_voidglass_arch', description: '世界傷痕回到虛玻拱' },
      { direction: 'north', targetRoomId: 'starfall_crater_star_map_ruin', description: '星線回到星圖廢墟' },
      { direction: 'east', targetRoomId: 'starfall_crater_worldboss_core', description: '裂隙通往世界王核心' },
    ],
    monsters: [
      { monsterId: 'chaos_spawn', maxCount: 2, respawnSeconds: 180 },
      { monsterId: 'shadow_demon', maxCount: 2, respawnSeconds: 180 },
    ],
    mapSymbol: '[痕]',
    mapX: 6,
    mapY: 0,
    guardianHints: {
      creature: '世界傷痕的星光若忽然偏折，異界巡行者通常已經接近。',
      treasure: '世界傷痕的星鐵、彗片或虛玻裂紋旁可能藏著高階採集線索。',
      spirit: '世界傷痕保留著隕星撞開大地與外界裂縫時的記憶。',
    },
  },

  starfall_crater_impact_core: {
    id: 'starfall_crater_impact_core',
    name: '撞擊核心',
    zone: 'starfall_crater' as RoomDef['zone'],
    image: 'starfall_crater_impact_core.png',
    imagePrompt: '撞擊核心 in starfall_crater, huge meteor impact crater with star metal, glowing glass rock, alien light, gravity distortion and cosmic rifts, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text',
    description:
      '撞擊核心位於星隕坑的玻化岩層與星鐵碎帶之間，隕石衝擊留下的輻光、磁砂、重力異常和外界裂縫讓每一步都像踩在尚未冷卻的天空傷口上。這裡是終局採礦與世界王前置節點，玩家可以 gather 星鐵、彗片、輻光砂與異界殘片，也能 inspect 磁化尖塔、星圖、卵灘和虛玻裂紋來判斷危險來源。若隊伍忽略重力變化或星光脈衝，晶體魔像、暗影惡魔、混沌生物與風暴龍影會切斷採集路線；若穩定標記安全坡道，則能逐步接近世界王星核，並確認採集工具沒有被磁砂吸走，撤退坡道也仍保持穩定安全可行穩固明確。',
    exits: [
      { direction: 'west', targetRoomId: 'starfall_crater_meteoric_forge', description: '撞擊核心回到隕鐵熔臺' },
      { direction: 'east', targetRoomId: 'starfall_crater_worldboss_core', description: '熔星路通往世界王核心' },
    ],
    monsters: [
      { monsterId: 'crystal_golem', maxCount: 2, respawnSeconds: 160 },
      { monsterId: 'storm_dragon', maxCount: 1, respawnSeconds: 1800 },
    ],
    mapSymbol: '[核]',
    mapX: 5,
    mapY: -1,
    guardianHints: {
      creature: '撞擊核心的星光若忽然偏折，異界巡行者通常已經接近。',
      treasure: '撞擊核心的星鐵、彗片或虛玻裂紋旁可能藏著高階採集線索。',
      spirit: '撞擊核心保留著隕星撞開大地與外界裂縫時的記憶。',
    },
  },

  starfall_crater_worldboss_core: {
    id: 'starfall_crater_worldboss_core',
    name: '世界王星核',
    zone: 'starfall_crater' as RoomDef['zone'],
    image: 'starfall_crater_worldboss_core.png',
    imagePrompt: '世界王星核 in starfall_crater, huge meteor impact crater with star metal, glowing glass rock, alien light, gravity distortion and cosmic rifts, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text',
    description:
      '世界王星核位於星隕坑的玻化岩層與星鐵碎帶之間，隕石衝擊留下的輻光、磁砂、重力異常和外界裂縫讓每一步都像踩在尚未冷卻的天空傷口上。這裡是終局採礦與世界王前置節點，玩家可以 gather 星鐵、彗片、輻光砂與異界殘片，也能 inspect 磁化尖塔、星圖、卵灘和虛玻裂紋來判斷危險來源。若隊伍忽略重力變化或星光脈衝，晶體魔像、暗影惡魔、混沌生物與風暴龍影會切斷採集路線；若穩定標記安全坡道，則能逐步接近世界王星核，並確認採集工具沒有被磁砂吸走，撤退坡道也仍保持穩定安全可行穩固明確。',
    exits: [
      { direction: 'west', targetRoomId: 'starfall_crater_worldscar_rift', description: '裂隙回到世界傷痕' },
      { direction: 'south', targetRoomId: 'starfall_crater_impact_core', description: '熔星路回到撞擊核心' },
      { direction: 'east', targetRoomId: 'starfall_crater_outer_void', description: '外界空洞在星核後方' },
    ],
    monsters: [
      { monsterId: 'storm_dragon', maxCount: 1, respawnSeconds: 1800 },
      { monsterId: 'chaos_spawn', maxCount: 2, respawnSeconds: 180 },
      { monsterId: 'shadow_demon', maxCount: 2, respawnSeconds: 180 },
    ],
    mapSymbol: '[王]',
    mapX: 7,
    mapY: 0,
    guardianHints: {
      creature: '世界王星核的星光若忽然偏折，異界巡行者通常已經接近。',
      treasure: '世界王星核的星鐵、彗片或虛玻裂紋旁可能藏著高階採集線索。',
      spirit: '世界王星核保留著隕星撞開大地與外界裂縫時的記憶。',
    },
  },

  starfall_crater_outer_void: {
    id: 'starfall_crater_outer_void',
    name: '外界空洞',
    zone: 'starfall_crater' as RoomDef['zone'],
    image: 'starfall_crater_outer_void.png',
    imagePrompt: '外界空洞 in starfall_crater, huge meteor impact crater with star metal, glowing glass rock, alien light, gravity distortion and cosmic rifts, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text',
    description:
      '外界空洞位於星隕坑的玻化岩層與星鐵碎帶之間，隕石衝擊留下的輻光、磁砂、重力異常和外界裂縫讓每一步都像踩在尚未冷卻的天空傷口上。這裡是終局採礦與世界王前置節點，玩家可以 gather 星鐵、彗片、輻光砂與異界殘片，也能 inspect 磁化尖塔、星圖、卵灘和虛玻裂紋來判斷危險來源。若隊伍忽略重力變化或星光脈衝，晶體魔像、暗影惡魔、混沌生物與風暴龍影會切斷採集路線；若穩定標記安全坡道，則能逐步接近世界王星核，並確認採集工具沒有被磁砂吸走，撤退坡道也仍保持穩定安全可行穩固明確。',
    exits: [
      { direction: 'west', targetRoomId: 'starfall_crater_worldboss_core', description: '外界空洞回到世界王星核' },
    ],
    monsters: [
      { monsterId: 'chaos_spawn', maxCount: 3, respawnSeconds: 180 },
      { monsterId: 'shadow_demon', maxCount: 2, respawnSeconds: 180 },
    ],
    mapSymbol: '[外]',
    mapX: 8,
    mapY: 0,
    guardianHints: {
      creature: '外界空洞的星光若忽然偏折，異界巡行者通常已經接近。',
      treasure: '外界空洞的星鐵、彗片或虛玻裂紋旁可能藏著高階採集線索。',
      spirit: '外界空洞保留著隕星撞開大地與外界裂縫時的記憶。',
    },
  },
  time_ruins_epoch_gate: {
    id: 'time_ruins_epoch_gate',
    name: '紀元入口',
    zone: 'time_ruins' as RoomDef['zone'],
    image: 'time_ruins_epoch_gate.png',
    imagePrompt: '紀元入口 in time_ruins, shattered clock towers, reversed rivers, fractured timelines, glowing hourglasses, paradox ruins and storm-dark magic, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text',
    description:
      '紀元入口位於時間廢墟的破碎年代層中，倒流河、停擺鐘塔、未來灰燼與舊日市集同時存在，讓每條路都可能通向不同時間殘影。這裡是終局高階路線節點，玩家可以 inspect 鐘面裂縫、沙漏流向、雷刻紀錄與因果井波紋來判斷下一段時間是否穩定，也能 search 檔案、雕像、日晷和觀測臺尋找世界王核心線索。若隊伍忽略循環橋、悖論迴廊和錯位影子，混沌生物、巫妖殘影、暗影惡魔與古龍時間影會把隊伍拆散；若穩定標記時間錨，則能逐步靠近零分核心，並確認隊伍攜帶的時間錨仍能指向原本入口與撤退年代。',
    exits: [
      { direction: 'east', targetRoomId: 'time_ruins_broken_clockway', description: '碎鐘路通往廢墟' },
      { direction: 'north', targetRoomId: 'time_ruins_reverse_riverbank', description: '倒流河岸在北側' },
    ],
    monsters: [
      { monsterId: 'shadow_demon', maxCount: 1, respawnSeconds: 180 },
      { monsterId: 'crystal_golem', maxCount: 1, respawnSeconds: 160 },
    ],
    mapSymbol: '[門]',
    mapX: 0,
    mapY: 0,
    guardianHints: {
      creature: '紀元入口的影子若先於本人移動，時間裂隙裡的敵人通常已經靠近。',
      treasure: '紀元入口的鐘面、日晷或檔案殘頁旁可能藏著時間廢墟線索。',
      spirit: '紀元入口保留著過去與未來同時崩塌時留下的記憶。',
    },
  },

  time_ruins_broken_clockway: {
    id: 'time_ruins_broken_clockway',
    name: '碎鐘路',
    zone: 'time_ruins' as RoomDef['zone'],
    image: 'time_ruins_broken_clockway.png',
    imagePrompt: '碎鐘路 in time_ruins, shattered clock towers, reversed rivers, fractured timelines, glowing hourglasses, paradox ruins and storm-dark magic, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text',
    description:
      '碎鐘路位於時間廢墟的破碎年代層中，倒流河、停擺鐘塔、未來灰燼與舊日市集同時存在，讓每條路都可能通向不同時間殘影。這裡是終局高階路線節點，玩家可以 inspect 鐘面裂縫、沙漏流向、雷刻紀錄與因果井波紋來判斷下一段時間是否穩定，也能 search 檔案、雕像、日晷和觀測臺尋找世界王核心線索。若隊伍忽略循環橋、悖論迴廊和錯位影子，混沌生物、巫妖殘影、暗影惡魔與古龍時間影會把隊伍拆散；若穩定標記時間錨，則能逐步靠近零分核心，並確認隊伍攜帶的時間錨仍能指向原本入口與撤退年代。',
    exits: [
      { direction: 'west', targetRoomId: 'time_ruins_epoch_gate', description: '碎鐘路回到紀元入口' },
      { direction: 'east', targetRoomId: 'time_ruins_hourglass_square', description: '沙漏廣場在前方' },
      { direction: 'south', targetRoomId: 'time_ruins_future_ash', description: '未來灰燼坡向下延伸' },
    ],
    monsters: [
      { monsterId: 'shadow_assassin', maxCount: 2, respawnSeconds: 160 },
      { monsterId: 'crystal_golem', maxCount: 1, respawnSeconds: 160 },
    ],
    mapSymbol: '[鐘]',
    mapX: 1,
    mapY: 0,
    guardianHints: {
      creature: '碎鐘路的影子若先於本人移動，時間裂隙裡的敵人通常已經靠近。',
      treasure: '碎鐘路的鐘面、日晷或檔案殘頁旁可能藏著時間廢墟線索。',
      spirit: '碎鐘路保留著過去與未來同時崩塌時留下的記憶。',
    },
  },

  time_ruins_reverse_riverbank: {
    id: 'time_ruins_reverse_riverbank',
    name: '倒流河岸',
    zone: 'time_ruins' as RoomDef['zone'],
    image: 'time_ruins_reverse_riverbank.png',
    imagePrompt: '倒流河岸 in time_ruins, shattered clock towers, reversed rivers, fractured timelines, glowing hourglasses, paradox ruins and storm-dark magic, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text',
    description:
      '倒流河岸位於時間廢墟的破碎年代層中，倒流河、停擺鐘塔、未來灰燼與舊日市集同時存在，讓每條路都可能通向不同時間殘影。這裡是終局高階路線節點，玩家可以 inspect 鐘面裂縫、沙漏流向、雷刻紀錄與因果井波紋來判斷下一段時間是否穩定，也能 search 檔案、雕像、日晷和觀測臺尋找世界王核心線索。若隊伍忽略循環橋、悖論迴廊和錯位影子，混沌生物、巫妖殘影、暗影惡魔與古龍時間影會把隊伍拆散；若穩定標記時間錨，則能逐步靠近零分核心，並確認隊伍攜帶的時間錨仍能指向原本入口與撤退年代。',
    exits: [
      { direction: 'south', targetRoomId: 'time_ruins_epoch_gate', description: '倒流河岸回到紀元入口' },
      { direction: 'east', targetRoomId: 'time_ruins_memory_reef', description: '記憶礁岸在東側' },
    ],
    monsters: [
      { monsterId: 'jellyfish', maxCount: 2, respawnSeconds: 80 },
      { monsterId: 'shadow_demon', maxCount: 1, respawnSeconds: 180 },
    ],
    mapSymbol: '[河]',
    mapX: 0,
    mapY: 1,
    guardianHints: {
      creature: '倒流河岸的影子若先於本人移動，時間裂隙裡的敵人通常已經靠近。',
      treasure: '倒流河岸的鐘面、日晷或檔案殘頁旁可能藏著時間廢墟線索。',
      spirit: '倒流河岸保留著過去與未來同時崩塌時留下的記憶。',
    },
  },

  time_ruins_memory_reef: {
    id: 'time_ruins_memory_reef',
    name: '記憶礁岸',
    zone: 'time_ruins' as RoomDef['zone'],
    image: 'time_ruins_memory_reef.png',
    imagePrompt: '記憶礁岸 in time_ruins, shattered clock towers, reversed rivers, fractured timelines, glowing hourglasses, paradox ruins and storm-dark magic, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text',
    description:
      '記憶礁岸位於時間廢墟的破碎年代層中，倒流河、停擺鐘塔、未來灰燼與舊日市集同時存在，讓每條路都可能通向不同時間殘影。這裡是終局高階路線節點，玩家可以 inspect 鐘面裂縫、沙漏流向、雷刻紀錄與因果井波紋來判斷下一段時間是否穩定，也能 search 檔案、雕像、日晷和觀測臺尋找世界王核心線索。若隊伍忽略循環橋、悖論迴廊和錯位影子，混沌生物、巫妖殘影、暗影惡魔與古龍時間影會把隊伍拆散；若穩定標記時間錨，則能逐步靠近零分核心，並確認隊伍攜帶的時間錨仍能指向原本入口與撤退年代。',
    exits: [
      { direction: 'west', targetRoomId: 'time_ruins_reverse_riverbank', description: '記憶礁岸回到倒流河' },
      { direction: 'east', targetRoomId: 'time_ruins_past_market', description: '舊日市集殘影在東側' },
      { direction: 'south', targetRoomId: 'time_ruins_hourglass_square', description: '記憶坡落向沙漏廣場' },
    ],
    monsters: [
      { monsterId: 'lich', maxCount: 1, respawnSeconds: 1800 },
      { monsterId: 'shadow_assassin', maxCount: 1, respawnSeconds: 160 },
    ],
    mapSymbol: '[憶]',
    mapX: 1,
    mapY: 1,
    guardianHints: {
      creature: '記憶礁岸的影子若先於本人移動，時間裂隙裡的敵人通常已經靠近。',
      treasure: '記憶礁岸的鐘面、日晷或檔案殘頁旁可能藏著時間廢墟線索。',
      spirit: '記憶礁岸保留著過去與未來同時崩塌時留下的記憶。',
    },
  },

  time_ruins_hourglass_square: {
    id: 'time_ruins_hourglass_square',
    name: '沙漏廣場',
    zone: 'time_ruins' as RoomDef['zone'],
    image: 'time_ruins_hourglass_square.png',
    imagePrompt: '沙漏廣場 in time_ruins, shattered clock towers, reversed rivers, fractured timelines, glowing hourglasses, paradox ruins and storm-dark magic, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text',
    description:
      '沙漏廣場位於時間廢墟的破碎年代層中，倒流河、停擺鐘塔、未來灰燼與舊日市集同時存在，讓每條路都可能通向不同時間殘影。這裡是終局高階路線節點，玩家可以 inspect 鐘面裂縫、沙漏流向、雷刻紀錄與因果井波紋來判斷下一段時間是否穩定，也能 search 檔案、雕像、日晷和觀測臺尋找世界王核心線索。若隊伍忽略循環橋、悖論迴廊和錯位影子，混沌生物、巫妖殘影、暗影惡魔與古龍時間影會把隊伍拆散；若穩定標記時間錨，則能逐步靠近零分核心，並確認隊伍攜帶的時間錨仍能指向原本入口與撤退年代。',
    exits: [
      { direction: 'west', targetRoomId: 'time_ruins_broken_clockway', description: '沙漏廣場回到碎鐘路' },
      { direction: 'north', targetRoomId: 'time_ruins_memory_reef', description: '記憶坡回到礁岸' },
      { direction: 'east', targetRoomId: 'time_ruins_stalled_bell_tower', description: '停擺鐘塔在東側' },
    ],
    monsters: [
      { monsterId: 'crystal_golem', maxCount: 2, respawnSeconds: 160 },
      { monsterId: 'shadow_demon', maxCount: 1, respawnSeconds: 180 },
    ],
    mapSymbol: '[沙]',
    mapX: 2,
    mapY: 0,
    guardianHints: {
      creature: '沙漏廣場的影子若先於本人移動，時間裂隙裡的敵人通常已經靠近。',
      treasure: '沙漏廣場的鐘面、日晷或檔案殘頁旁可能藏著時間廢墟線索。',
      spirit: '沙漏廣場保留著過去與未來同時崩塌時留下的記憶。',
    },
  },

  time_ruins_future_ash: {
    id: 'time_ruins_future_ash',
    name: '未來灰燼',
    zone: 'time_ruins' as RoomDef['zone'],
    image: 'time_ruins_future_ash.png',
    imagePrompt: '未來灰燼 in time_ruins, shattered clock towers, reversed rivers, fractured timelines, glowing hourglasses, paradox ruins and storm-dark magic, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text',
    description:
      '未來灰燼位於時間廢墟的破碎年代層中，倒流河、停擺鐘塔、未來灰燼與舊日市集同時存在，讓每條路都可能通向不同時間殘影。這裡是終局高階路線節點，玩家可以 inspect 鐘面裂縫、沙漏流向、雷刻紀錄與因果井波紋來判斷下一段時間是否穩定，也能 search 檔案、雕像、日晷和觀測臺尋找世界王核心線索。若隊伍忽略循環橋、悖論迴廊和錯位影子，混沌生物、巫妖殘影、暗影惡魔與古龍時間影會把隊伍拆散；若穩定標記時間錨，則能逐步靠近零分核心，並確認隊伍攜帶的時間錨仍能指向原本入口與撤退年代。',
    exits: [
      { direction: 'north', targetRoomId: 'time_ruins_broken_clockway', description: '未來灰燼回到碎鐘路' },
      { direction: 'east', targetRoomId: 'time_ruins_ruined_observatory', description: '毀壞觀測臺在東側' },
    ],
    monsters: [
      { monsterId: 'chaos_spawn', maxCount: 1, respawnSeconds: 180 },
      { monsterId: 'shadow_demon', maxCount: 1, respawnSeconds: 180 },
    ],
    mapSymbol: '[灰]',
    mapX: 1,
    mapY: -1,
    guardianHints: {
      creature: '未來灰燼的影子若先於本人移動，時間裂隙裡的敵人通常已經靠近。',
      treasure: '未來灰燼的鐘面、日晷或檔案殘頁旁可能藏著時間廢墟線索。',
      spirit: '未來灰燼保留著過去與未來同時崩塌時留下的記憶。',
    },
  },

  time_ruins_past_market: {
    id: 'time_ruins_past_market',
    name: '舊日市集',
    zone: 'time_ruins' as RoomDef['zone'],
    image: 'time_ruins_past_market.png',
    imagePrompt: '舊日市集 in time_ruins, shattered clock towers, reversed rivers, fractured timelines, glowing hourglasses, paradox ruins and storm-dark magic, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text',
    description:
      '舊日市集位於時間廢墟的破碎年代層中，倒流河、停擺鐘塔、未來灰燼與舊日市集同時存在，讓每條路都可能通向不同時間殘影。這裡是終局高階路線節點，玩家可以 inspect 鐘面裂縫、沙漏流向、雷刻紀錄與因果井波紋來判斷下一段時間是否穩定，也能 search 檔案、雕像、日晷和觀測臺尋找世界王核心線索。若隊伍忽略循環橋、悖論迴廊和錯位影子，混沌生物、巫妖殘影、暗影惡魔與古龍時間影會把隊伍拆散；若穩定標記時間錨，則能逐步靠近零分核心，並確認隊伍攜帶的時間錨仍能指向原本入口與撤退年代。',
    exits: [
      { direction: 'west', targetRoomId: 'time_ruins_memory_reef', description: '市集殘影回到記憶礁岸' },
      { direction: 'east', targetRoomId: 'time_ruins_sundial_court', description: '日晷庭在東側' },
    ],
    monsters: [
      { monsterId: 'shadow_assassin', maxCount: 2, respawnSeconds: 160 },
      { monsterId: 'lich', maxCount: 1, respawnSeconds: 1800 },
    ],
    mapSymbol: '[市]',
    mapX: 2,
    mapY: 1,
    guardianHints: {
      creature: '舊日市集的影子若先於本人移動，時間裂隙裡的敵人通常已經靠近。',
      treasure: '舊日市集的鐘面、日晷或檔案殘頁旁可能藏著時間廢墟線索。',
      spirit: '舊日市集保留著過去與未來同時崩塌時留下的記憶。',
    },
  },

  time_ruins_stalled_bell_tower: {
    id: 'time_ruins_stalled_bell_tower',
    name: '停擺鐘塔',
    zone: 'time_ruins' as RoomDef['zone'],
    image: 'time_ruins_stalled_bell_tower.png',
    imagePrompt: '停擺鐘塔 in time_ruins, shattered clock towers, reversed rivers, fractured timelines, glowing hourglasses, paradox ruins and storm-dark magic, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text',
    description:
      '停擺鐘塔位於時間廢墟的破碎年代層中，倒流河、停擺鐘塔、未來灰燼與舊日市集同時存在，讓每條路都可能通向不同時間殘影。這裡是終局高階路線節點，玩家可以 inspect 鐘面裂縫、沙漏流向、雷刻紀錄與因果井波紋來判斷下一段時間是否穩定，也能 search 檔案、雕像、日晷和觀測臺尋找世界王核心線索。若隊伍忽略循環橋、悖論迴廊和錯位影子，混沌生物、巫妖殘影、暗影惡魔與古龍時間影會把隊伍拆散；若穩定標記時間錨，則能逐步靠近零分核心，並確認隊伍攜帶的時間錨仍能指向原本入口與撤退年代。',
    exits: [
      { direction: 'west', targetRoomId: 'time_ruins_hourglass_square', description: '停擺鐘塔回到沙漏廣場' },
      { direction: 'east', targetRoomId: 'time_ruins_paradox_cloister', description: '悖論迴廊在東側' },
      { direction: 'south', targetRoomId: 'time_ruins_ruined_observatory', description: '鐘塔階落向觀測臺' },
    ],
    monsters: [
      { monsterId: 'lich', maxCount: 1, respawnSeconds: 1800 },
      { monsterId: 'crystal_golem', maxCount: 2, respawnSeconds: 160 },
    ],
    mapSymbol: '[塔]',
    mapX: 3,
    mapY: 0,
    guardianHints: {
      creature: '停擺鐘塔的影子若先於本人移動，時間裂隙裡的敵人通常已經靠近。',
      treasure: '停擺鐘塔的鐘面、日晷或檔案殘頁旁可能藏著時間廢墟線索。',
      spirit: '停擺鐘塔保留著過去與未來同時崩塌時留下的記憶。',
    },
  },

  time_ruins_ruined_observatory: {
    id: 'time_ruins_ruined_observatory',
    name: '毀壞觀測臺',
    zone: 'time_ruins' as RoomDef['zone'],
    image: 'time_ruins_ruined_observatory.png',
    imagePrompt: '毀壞觀測臺 in time_ruins, shattered clock towers, reversed rivers, fractured timelines, glowing hourglasses, paradox ruins and storm-dark magic, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text',
    description:
      '毀壞觀測臺位於時間廢墟的破碎年代層中，倒流河、停擺鐘塔、未來灰燼與舊日市集同時存在，讓每條路都可能通向不同時間殘影。這裡是終局高階路線節點，玩家可以 inspect 鐘面裂縫、沙漏流向、雷刻紀錄與因果井波紋來判斷下一段時間是否穩定，也能 search 檔案、雕像、日晷和觀測臺尋找世界王核心線索。若隊伍忽略循環橋、悖論迴廊和錯位影子，混沌生物、巫妖殘影、暗影惡魔與古龍時間影會把隊伍拆散；若穩定標記時間錨，則能逐步靠近零分核心，並確認隊伍攜帶的時間錨仍能指向原本入口與撤退年代。',
    exits: [
      { direction: 'west', targetRoomId: 'time_ruins_future_ash', description: '觀測臺回到未來灰燼' },
      { direction: 'north', targetRoomId: 'time_ruins_stalled_bell_tower', description: '鐘塔階回到停擺鐘塔' },
      { direction: 'east', targetRoomId: 'time_ruins_lightning_record', description: '雷刻紀錄室在東側' },
    ],
    monsters: [
      { monsterId: 'chaos_spawn', maxCount: 1, respawnSeconds: 180 },
      { monsterId: 'storm_dragon', maxCount: 1, respawnSeconds: 1800 },
    ],
    mapSymbol: '[觀]',
    mapX: 2,
    mapY: -1,
    guardianHints: {
      creature: '毀壞觀測臺的影子若先於本人移動，時間裂隙裡的敵人通常已經靠近。',
      treasure: '毀壞觀測臺的鐘面、日晷或檔案殘頁旁可能藏著時間廢墟線索。',
      spirit: '毀壞觀測臺保留著過去與未來同時崩塌時留下的記憶。',
    },
  },

  time_ruins_sundial_court: {
    id: 'time_ruins_sundial_court',
    name: '日晷庭',
    zone: 'time_ruins' as RoomDef['zone'],
    image: 'time_ruins_sundial_court.png',
    imagePrompt: '日晷庭 in time_ruins, shattered clock towers, reversed rivers, fractured timelines, glowing hourglasses, paradox ruins and storm-dark magic, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text',
    description:
      '日晷庭位於時間廢墟的破碎年代層中，倒流河、停擺鐘塔、未來灰燼與舊日市集同時存在，讓每條路都可能通向不同時間殘影。這裡是終局高階路線節點，玩家可以 inspect 鐘面裂縫、沙漏流向、雷刻紀錄與因果井波紋來判斷下一段時間是否穩定，也能 search 檔案、雕像、日晷和觀測臺尋找世界王核心線索。若隊伍忽略循環橋、悖論迴廊和錯位影子，混沌生物、巫妖殘影、暗影惡魔與古龍時間影會把隊伍拆散；若穩定標記時間錨，則能逐步靠近零分核心，並確認隊伍攜帶的時間錨仍能指向原本入口與撤退年代。',
    exits: [
      { direction: 'west', targetRoomId: 'time_ruins_past_market', description: '日晷庭回到舊日市集' },
      { direction: 'east', targetRoomId: 'time_ruins_split_statue', description: '分裂雕像在東側' },
    ],
    monsters: [
      { monsterId: 'crystal_golem', maxCount: 2, respawnSeconds: 160 },
      { monsterId: 'shadow_demon', maxCount: 1, respawnSeconds: 180 },
    ],
    mapSymbol: '[晷]',
    mapX: 3,
    mapY: 1,
    guardianHints: {
      creature: '日晷庭的影子若先於本人移動，時間裂隙裡的敵人通常已經靠近。',
      treasure: '日晷庭的鐘面、日晷或檔案殘頁旁可能藏著時間廢墟線索。',
      spirit: '日晷庭保留著過去與未來同時崩塌時留下的記憶。',
    },
  },

  time_ruins_paradox_cloister: {
    id: 'time_ruins_paradox_cloister',
    name: '悖論迴廊',
    zone: 'time_ruins' as RoomDef['zone'],
    image: 'time_ruins_paradox_cloister.png',
    imagePrompt: '悖論迴廊 in time_ruins, shattered clock towers, reversed rivers, fractured timelines, glowing hourglasses, paradox ruins and storm-dark magic, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text',
    description:
      '悖論迴廊位於時間廢墟的破碎年代層中，倒流河、停擺鐘塔、未來灰燼與舊日市集同時存在，讓每條路都可能通向不同時間殘影。這裡是終局高階路線節點，玩家可以 inspect 鐘面裂縫、沙漏流向、雷刻紀錄與因果井波紋來判斷下一段時間是否穩定，也能 search 檔案、雕像、日晷和觀測臺尋找世界王核心線索。若隊伍忽略循環橋、悖論迴廊和錯位影子，混沌生物、巫妖殘影、暗影惡魔與古龍時間影會把隊伍拆散；若穩定標記時間錨，則能逐步靠近零分核心，並確認隊伍攜帶的時間錨仍能指向原本入口與撤退年代。',
    exits: [
      { direction: 'west', targetRoomId: 'time_ruins_stalled_bell_tower', description: '悖論迴廊回到停擺鐘塔' },
      { direction: 'north', targetRoomId: 'time_ruins_split_statue', description: '錯位階通往分裂雕像' },
      { direction: 'east', targetRoomId: 'time_ruins_looping_bridge', description: '循環橋在東側' },
    ],
    monsters: [
      { monsterId: 'chaos_spawn', maxCount: 2, respawnSeconds: 180 },
      { monsterId: 'lich', maxCount: 1, respawnSeconds: 1800 },
    ],
    mapSymbol: '[悖]',
    mapX: 4,
    mapY: 0,
    guardianHints: {
      creature: '悖論迴廊的影子若先於本人移動，時間裂隙裡的敵人通常已經靠近。',
      treasure: '悖論迴廊的鐘面、日晷或檔案殘頁旁可能藏著時間廢墟線索。',
      spirit: '悖論迴廊保留著過去與未來同時崩塌時留下的記憶。',
    },
  },

  time_ruins_lightning_record: {
    id: 'time_ruins_lightning_record',
    name: '雷刻紀錄室',
    zone: 'time_ruins' as RoomDef['zone'],
    image: 'time_ruins_lightning_record.png',
    imagePrompt: '雷刻紀錄室 in time_ruins, shattered clock towers, reversed rivers, fractured timelines, glowing hourglasses, paradox ruins and storm-dark magic, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text',
    description:
      '雷刻紀錄室位於時間廢墟的破碎年代層中，倒流河、停擺鐘塔、未來灰燼與舊日市集同時存在，讓每條路都可能通向不同時間殘影。這裡是終局高階路線節點，玩家可以 inspect 鐘面裂縫、沙漏流向、雷刻紀錄與因果井波紋來判斷下一段時間是否穩定，也能 search 檔案、雕像、日晷和觀測臺尋找世界王核心線索。若隊伍忽略循環橋、悖論迴廊和錯位影子，混沌生物、巫妖殘影、暗影惡魔與古龍時間影會把隊伍拆散；若穩定標記時間錨，則能逐步靠近零分核心，並確認隊伍攜帶的時間錨仍能指向原本入口與撤退年代。',
    exits: [
      { direction: 'west', targetRoomId: 'time_ruins_ruined_observatory', description: '雷刻室回到觀測臺' },
      { direction: 'east', targetRoomId: 'time_ruins_looping_bridge', description: '電弧路通往循環橋' },
    ],
    monsters: [
      { monsterId: 'storm_dragon', maxCount: 1, respawnSeconds: 1800 },
      { monsterId: 'crystal_golem', maxCount: 1, respawnSeconds: 160 },
    ],
    mapSymbol: '[雷]',
    mapX: 3,
    mapY: -1,
    guardianHints: {
      creature: '雷刻紀錄室的影子若先於本人移動，時間裂隙裡的敵人通常已經靠近。',
      treasure: '雷刻紀錄室的鐘面、日晷或檔案殘頁旁可能藏著時間廢墟線索。',
      spirit: '雷刻紀錄室保留著過去與未來同時崩塌時留下的記憶。',
    },
  },

  time_ruins_split_statue: {
    id: 'time_ruins_split_statue',
    name: '分裂雕像',
    zone: 'time_ruins' as RoomDef['zone'],
    image: 'time_ruins_split_statue.png',
    imagePrompt: '分裂雕像 in time_ruins, shattered clock towers, reversed rivers, fractured timelines, glowing hourglasses, paradox ruins and storm-dark magic, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text',
    description:
      '分裂雕像位於時間廢墟的破碎年代層中，倒流河、停擺鐘塔、未來灰燼與舊日市集同時存在，讓每條路都可能通向不同時間殘影。這裡是終局高階路線節點，玩家可以 inspect 鐘面裂縫、沙漏流向、雷刻紀錄與因果井波紋來判斷下一段時間是否穩定，也能 search 檔案、雕像、日晷和觀測臺尋找世界王核心線索。若隊伍忽略循環橋、悖論迴廊和錯位影子，混沌生物、巫妖殘影、暗影惡魔與古龍時間影會把隊伍拆散；若穩定標記時間錨，則能逐步靠近零分核心，並確認隊伍攜帶的時間錨仍能指向原本入口與撤退年代。',
    exits: [
      { direction: 'west', targetRoomId: 'time_ruins_sundial_court', description: '分裂雕像回到日晷庭' },
      { direction: 'south', targetRoomId: 'time_ruins_paradox_cloister', description: '錯位階回到悖論迴廊' },
      { direction: 'east', targetRoomId: 'time_ruins_agefall_steps', description: '歲落階在東側' },
    ],
    monsters: [
      { monsterId: 'shadow_demon', maxCount: 2, respawnSeconds: 180 },
      { monsterId: 'crystal_golem', maxCount: 1, respawnSeconds: 160 },
    ],
    mapSymbol: '[像]',
    mapX: 4,
    mapY: 1,
    guardianHints: {
      creature: '分裂雕像的影子若先於本人移動，時間裂隙裡的敵人通常已經靠近。',
      treasure: '分裂雕像的鐘面、日晷或檔案殘頁旁可能藏著時間廢墟線索。',
      spirit: '分裂雕像保留著過去與未來同時崩塌時留下的記憶。',
    },
  },

  time_ruins_looping_bridge: {
    id: 'time_ruins_looping_bridge',
    name: '循環橋',
    zone: 'time_ruins' as RoomDef['zone'],
    image: 'time_ruins_looping_bridge.png',
    imagePrompt: '循環橋 in time_ruins, shattered clock towers, reversed rivers, fractured timelines, glowing hourglasses, paradox ruins and storm-dark magic, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text',
    description:
      '循環橋位於時間廢墟的破碎年代層中，倒流河、停擺鐘塔、未來灰燼與舊日市集同時存在，讓每條路都可能通向不同時間殘影。這裡是終局高階路線節點，玩家可以 inspect 鐘面裂縫、沙漏流向、雷刻紀錄與因果井波紋來判斷下一段時間是否穩定，也能 search 檔案、雕像、日晷和觀測臺尋找世界王核心線索。若隊伍忽略循環橋、悖論迴廊和錯位影子，混沌生物、巫妖殘影、暗影惡魔與古龍時間影會把隊伍拆散；若穩定標記時間錨，則能逐步靠近零分核心，並確認隊伍攜帶的時間錨仍能指向原本入口與撤退年代。',
    exits: [
      { direction: 'west', targetRoomId: 'time_ruins_paradox_cloister', description: '循環橋回到悖論迴廊' },
      { direction: 'south', targetRoomId: 'time_ruins_lightning_record', description: '電弧路回到雷刻室' },
      { direction: 'east', targetRoomId: 'time_ruins_timeline_archive', description: '時間線檔案館在東側' },
    ],
    monsters: [
      { monsterId: 'chaos_spawn', maxCount: 2, respawnSeconds: 180 },
      { monsterId: 'shadow_assassin', maxCount: 2, respawnSeconds: 160 },
    ],
    mapSymbol: '[橋]',
    mapX: 5,
    mapY: 0,
    guardianHints: {
      creature: '循環橋的影子若先於本人移動，時間裂隙裡的敵人通常已經靠近。',
      treasure: '循環橋的鐘面、日晷或檔案殘頁旁可能藏著時間廢墟線索。',
      spirit: '循環橋保留著過去與未來同時崩塌時留下的記憶。',
    },
  },

  time_ruins_agefall_steps: {
    id: 'time_ruins_agefall_steps',
    name: '歲落階',
    zone: 'time_ruins' as RoomDef['zone'],
    image: 'time_ruins_agefall_steps.png',
    imagePrompt: '歲落階 in time_ruins, shattered clock towers, reversed rivers, fractured timelines, glowing hourglasses, paradox ruins and storm-dark magic, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text',
    description:
      '歲落階位於時間廢墟的破碎年代層中，倒流河、停擺鐘塔、未來灰燼與舊日市集同時存在，讓每條路都可能通向不同時間殘影。這裡是終局高階路線節點，玩家可以 inspect 鐘面裂縫、沙漏流向、雷刻紀錄與因果井波紋來判斷下一段時間是否穩定，也能 search 檔案、雕像、日晷和觀測臺尋找世界王核心線索。若隊伍忽略循環橋、悖論迴廊和錯位影子，混沌生物、巫妖殘影、暗影惡魔與古龍時間影會把隊伍拆散；若穩定標記時間錨，則能逐步靠近零分核心，並確認隊伍攜帶的時間錨仍能指向原本入口與撤退年代。',
    exits: [
      { direction: 'west', targetRoomId: 'time_ruins_split_statue', description: '歲落階回到分裂雕像' },
      { direction: 'east', targetRoomId: 'time_ruins_clockheart_gate', description: '鐘心門在東側' },
    ],
    monsters: [
      { monsterId: 'lich', maxCount: 1, respawnSeconds: 1800 },
      { monsterId: 'chaos_spawn', maxCount: 1, respawnSeconds: 180 },
    ],
    mapSymbol: '[歲]',
    mapX: 5,
    mapY: 1,
    guardianHints: {
      creature: '歲落階的影子若先於本人移動，時間裂隙裡的敵人通常已經靠近。',
      treasure: '歲落階的鐘面、日晷或檔案殘頁旁可能藏著時間廢墟線索。',
      spirit: '歲落階保留著過去與未來同時崩塌時留下的記憶。',
    },
  },

  time_ruins_timeline_archive: {
    id: 'time_ruins_timeline_archive',
    name: '時間線檔案館',
    zone: 'time_ruins' as RoomDef['zone'],
    image: 'time_ruins_timeline_archive.png',
    imagePrompt: '時間線檔案館 in time_ruins, shattered clock towers, reversed rivers, fractured timelines, glowing hourglasses, paradox ruins and storm-dark magic, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text',
    description:
      '時間線檔案館位於時間廢墟的破碎年代層中，倒流河、停擺鐘塔、未來灰燼與舊日市集同時存在，讓每條路都可能通向不同時間殘影。這裡是終局高階路線節點，玩家可以 inspect 鐘面裂縫、沙漏流向、雷刻紀錄與因果井波紋來判斷下一段時間是否穩定，也能 search 檔案、雕像、日晷和觀測臺尋找世界王核心線索。若隊伍忽略循環橋、悖論迴廊和錯位影子，混沌生物、巫妖殘影、暗影惡魔與古龍時間影會把隊伍拆散；若穩定標記時間錨，則能逐步靠近零分核心，並確認隊伍攜帶的時間錨仍能指向原本入口與撤退年代。',
    exits: [
      { direction: 'west', targetRoomId: 'time_ruins_looping_bridge', description: '檔案館回到循環橋' },
      { direction: 'north', targetRoomId: 'time_ruins_clockheart_gate', description: '索引階通往鐘心門' },
      { direction: 'east', targetRoomId: 'time_ruins_causality_well', description: '因果井在東側' },
    ],
    monsters: [
      { monsterId: 'lich', maxCount: 1, respawnSeconds: 1800 },
      { monsterId: 'shadow_demon', maxCount: 2, respawnSeconds: 180 },
    ],
    mapSymbol: '[檔]',
    mapX: 6,
    mapY: 0,
    guardianHints: {
      creature: '時間線檔案館的影子若先於本人移動，時間裂隙裡的敵人通常已經靠近。',
      treasure: '時間線檔案館的鐘面、日晷或檔案殘頁旁可能藏著時間廢墟線索。',
      spirit: '時間線檔案館保留著過去與未來同時崩塌時留下的記憶。',
    },
  },

  time_ruins_clockheart_gate: {
    id: 'time_ruins_clockheart_gate',
    name: '鐘心門',
    zone: 'time_ruins' as RoomDef['zone'],
    image: 'time_ruins_clockheart_gate.png',
    imagePrompt: '鐘心門 in time_ruins, shattered clock towers, reversed rivers, fractured timelines, glowing hourglasses, paradox ruins and storm-dark magic, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text',
    description:
      '鐘心門位於時間廢墟的破碎年代層中，倒流河、停擺鐘塔、未來灰燼與舊日市集同時存在，讓每條路都可能通向不同時間殘影。這裡是終局高階路線節點，玩家可以 inspect 鐘面裂縫、沙漏流向、雷刻紀錄與因果井波紋來判斷下一段時間是否穩定，也能 search 檔案、雕像、日晷和觀測臺尋找世界王核心線索。若隊伍忽略循環橋、悖論迴廊和錯位影子，混沌生物、巫妖殘影、暗影惡魔與古龍時間影會把隊伍拆散；若穩定標記時間錨，則能逐步靠近零分核心，並確認隊伍攜帶的時間錨仍能指向原本入口與撤退年代。',
    exits: [
      { direction: 'west', targetRoomId: 'time_ruins_agefall_steps', description: '鐘心門回到歲落階' },
      { direction: 'south', targetRoomId: 'time_ruins_timeline_archive', description: '索引階回到檔案館' },
      { direction: 'east', targetRoomId: 'time_ruins_worldboss_minute_zero', description: '零分核心在東側' },
    ],
    monsters: [
      { monsterId: 'crystal_golem', maxCount: 2, respawnSeconds: 160 },
      { monsterId: 'storm_dragon', maxCount: 1, respawnSeconds: 1800 },
    ],
    mapSymbol: '[心]',
    mapX: 6,
    mapY: 1,
    guardianHints: {
      creature: '鐘心門的影子若先於本人移動，時間裂隙裡的敵人通常已經靠近。',
      treasure: '鐘心門的鐘面、日晷或檔案殘頁旁可能藏著時間廢墟線索。',
      spirit: '鐘心門保留著過去與未來同時崩塌時留下的記憶。',
    },
  },

  time_ruins_causality_well: {
    id: 'time_ruins_causality_well',
    name: '因果井',
    zone: 'time_ruins' as RoomDef['zone'],
    image: 'time_ruins_causality_well.png',
    imagePrompt: '因果井 in time_ruins, shattered clock towers, reversed rivers, fractured timelines, glowing hourglasses, paradox ruins and storm-dark magic, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text',
    description:
      '因果井位於時間廢墟的破碎年代層中，倒流河、停擺鐘塔、未來灰燼與舊日市集同時存在，讓每條路都可能通向不同時間殘影。這裡是終局高階路線節點，玩家可以 inspect 鐘面裂縫、沙漏流向、雷刻紀錄與因果井波紋來判斷下一段時間是否穩定，也能 search 檔案、雕像、日晷和觀測臺尋找世界王核心線索。若隊伍忽略循環橋、悖論迴廊和錯位影子，混沌生物、巫妖殘影、暗影惡魔與古龍時間影會把隊伍拆散；若穩定標記時間錨，則能逐步靠近零分核心，並確認隊伍攜帶的時間錨仍能指向原本入口與撤退年代。',
    exits: [
      { direction: 'west', targetRoomId: 'time_ruins_timeline_archive', description: '因果井回到時間線檔案館' },
      { direction: 'east', targetRoomId: 'time_ruins_worldboss_minute_zero', description: '因果裂縫通往零分核心' },
    ],
    monsters: [
      { monsterId: 'chaos_spawn', maxCount: 2, respawnSeconds: 180 },
      { monsterId: 'storm_dragon', maxCount: 1, respawnSeconds: 1800 },
    ],
    mapSymbol: '[因]',
    mapX: 7,
    mapY: 0,
    guardianHints: {
      creature: '因果井的影子若先於本人移動，時間裂隙裡的敵人通常已經靠近。',
      treasure: '因果井的鐘面、日晷或檔案殘頁旁可能藏著時間廢墟線索。',
      spirit: '因果井保留著過去與未來同時崩塌時留下的記憶。',
    },
  },

  time_ruins_worldboss_minute_zero: {
    id: 'time_ruins_worldboss_minute_zero',
    name: '零分核心',
    zone: 'time_ruins' as RoomDef['zone'],
    image: 'time_ruins_worldboss_minute_zero.png',
    imagePrompt: '零分核心 in time_ruins, shattered clock towers, reversed rivers, fractured timelines, glowing hourglasses, paradox ruins and storm-dark magic, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text',
    description:
      '零分核心位於時間廢墟的破碎年代層中，倒流河、停擺鐘塔、未來灰燼與舊日市集同時存在，讓每條路都可能通向不同時間殘影。這裡是終局高階路線節點，玩家可以 inspect 鐘面裂縫、沙漏流向、雷刻紀錄與因果井波紋來判斷下一段時間是否穩定，也能 search 檔案、雕像、日晷和觀測臺尋找世界王核心線索。若隊伍忽略循環橋、悖論迴廊和錯位影子，混沌生物、巫妖殘影、暗影惡魔與古龍時間影會把隊伍拆散；若穩定標記時間錨，則能逐步靠近零分核心，並確認隊伍攜帶的時間錨仍能指向原本入口與撤退年代。',
    exits: [
      { direction: 'west', targetRoomId: 'time_ruins_clockheart_gate', description: '零分核心回到鐘心門' },
      { direction: 'south', targetRoomId: 'time_ruins_causality_well', description: '因果裂縫回到因果井' },
      { direction: 'east', targetRoomId: 'time_ruins_afterimage_void', description: '餘影虛空在核心後方' },
    ],
    monsters: [
      { monsterId: 'elder_dragon', maxCount: 1, respawnSeconds: 1800 },
      { monsterId: 'chaos_spawn', maxCount: 2, respawnSeconds: 180 },
      { monsterId: 'lich', maxCount: 1, respawnSeconds: 1800 },
    ],
    mapSymbol: '[王]',
    mapX: 8,
    mapY: 0,
    guardianHints: {
      creature: '零分核心的影子若先於本人移動，時間裂隙裡的敵人通常已經靠近。',
      treasure: '零分核心的鐘面、日晷或檔案殘頁旁可能藏著時間廢墟線索。',
      spirit: '零分核心保留著過去與未來同時崩塌時留下的記憶。',
    },
  },

  time_ruins_afterimage_void: {
    id: 'time_ruins_afterimage_void',
    name: '餘影虛空',
    zone: 'time_ruins' as RoomDef['zone'],
    image: 'time_ruins_afterimage_void.png',
    imagePrompt: '餘影虛空 in time_ruins, shattered clock towers, reversed rivers, fractured timelines, glowing hourglasses, paradox ruins and storm-dark magic, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text',
    description:
      '餘影虛空位於時間廢墟的破碎年代層中，倒流河、停擺鐘塔、未來灰燼與舊日市集同時存在，讓每條路都可能通向不同時間殘影。這裡是終局高階路線節點，玩家可以 inspect 鐘面裂縫、沙漏流向、雷刻紀錄與因果井波紋來判斷下一段時間是否穩定，也能 search 檔案、雕像、日晷和觀測臺尋找世界王核心線索。若隊伍忽略循環橋、悖論迴廊和錯位影子，混沌生物、巫妖殘影、暗影惡魔與古龍時間影會把隊伍拆散；若穩定標記時間錨，則能逐步靠近零分核心，並確認隊伍攜帶的時間錨仍能指向原本入口與撤退年代。',
    exits: [
      { direction: 'west', targetRoomId: 'time_ruins_worldboss_minute_zero', description: '餘影虛空回到零分核心' },
    ],
    monsters: [
      { monsterId: 'chaos_spawn', maxCount: 3, respawnSeconds: 180 },
      { monsterId: 'shadow_demon', maxCount: 2, respawnSeconds: 180 },
    ],
    mapSymbol: '[虛]',
    mapX: 9,
    mapY: 0,
    guardianHints: {
      creature: '餘影虛空的影子若先於本人移動，時間裂隙裡的敵人通常已經靠近。',
      treasure: '餘影虛空的鐘面、日晷或檔案殘頁旁可能藏著時間廢墟線索。',
      spirit: '餘影虛空保留著過去與未來同時崩塌時留下的記憶。',
    },
  },
  astral_wastes_reality_gate: {
    id: 'astral_wastes_reality_gate',
    name: '現實邊門',
    zone: 'astral_wastes' as RoomDef['zone'],
    image: 'astral_wastes_reality_gate.png',
    imagePrompt: '現實邊門 in astral_wastes, surreal astral wasteland at the edge of reality, star sand, floating rocks, void rifts, black stars and alien light, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text',
    description:
      '現實邊門位於星界荒原沒有固定地平線的邊界地帶，星砂、漂浮岩塊、虛空裂縫與失落星座在同一片荒原上互相重疊，讓方向感變得極不可靠。這裡是終局高階路線節點，玩家可以 inspect 星砂流向、黑星門紋、重力沉井與虛空裂縫來判斷現實錨是否仍然穩定，也能 search 彗骨、星泥、懸浮遺跡和蒼白小祠尋找異界線索。若隊伍忽略重力翻轉、外層黑域和鏡面虛空，虛空行者、混沌生物、暗影惡魔與古龍星影會撕開隊形；若穩定標記現實錨，則能逐步接近星界荒原核心，並確認現實錨沒有被外層黑域拖離原本座標。',
    exits: [
      { direction: 'east', targetRoomId: 'astral_wastes_starsand_track', description: '星砂路通往荒原' },
      { direction: 'north', targetRoomId: 'astral_wastes_anchor_stone', description: '錨石丘在北側' },
    ],
    monsters: [
      { monsterId: 'shadow_demon', maxCount: 1, respawnSeconds: 180 },
      { monsterId: 'void_walker', maxCount: 1, respawnSeconds: 180 },
    ],
    mapSymbol: '[門]',
    mapX: 0,
    mapY: 0,
    guardianHints: {
      creature: '現實邊門的星砂若逆著腳印流動，異界巡行者通常已經靠近。',
      treasure: '現實邊門的星泥、黑星紋或懸浮碎石旁可能藏著星界荒原線索。',
      spirit: '現實邊門保留著現實邊界被虛空裂縫拉開時的記憶。',
    },
  },

  astral_wastes_starsand_track: {
    id: 'astral_wastes_starsand_track',
    name: '星砂路',
    zone: 'astral_wastes' as RoomDef['zone'],
    image: 'astral_wastes_starsand_track.png',
    imagePrompt: '星砂路 in astral_wastes, surreal astral wasteland at the edge of reality, star sand, floating rocks, void rifts, black stars and alien light, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text',
    description:
      '星砂路位於星界荒原沒有固定地平線的邊界地帶，星砂、漂浮岩塊、虛空裂縫與失落星座在同一片荒原上互相重疊，讓方向感變得極不可靠。這裡是終局高階路線節點，玩家可以 inspect 星砂流向、黑星門紋、重力沉井與虛空裂縫來判斷現實錨是否仍然穩定，也能 search 彗骨、星泥、懸浮遺跡和蒼白小祠尋找異界線索。若隊伍忽略重力翻轉、外層黑域和鏡面虛空，虛空行者、混沌生物、暗影惡魔與古龍星影會撕開隊形；若穩定標記現實錨，則能逐步接近星界荒原核心，並確認現實錨沒有被外層黑域拖離原本座標。',
    exits: [
      { direction: 'west', targetRoomId: 'astral_wastes_reality_gate', description: '星砂路回到現實邊門' },
      { direction: 'east', targetRoomId: 'astral_wastes_bent_horizon', description: '彎曲地平線在前方' },
      { direction: 'south', targetRoomId: 'astral_wastes_lightless_dune', description: '無光沙丘向下起伏' },
    ],
    monsters: [
      { monsterId: 'void_walker', maxCount: 2, respawnSeconds: 180 },
      { monsterId: 'shadow_demon', maxCount: 1, respawnSeconds: 180 },
    ],
    mapSymbol: '[砂]',
    mapX: 1,
    mapY: 0,
    guardianHints: {
      creature: '星砂路的星砂若逆著腳印流動，異界巡行者通常已經靠近。',
      treasure: '星砂路的星泥、黑星紋或懸浮碎石旁可能藏著星界荒原線索。',
      spirit: '星砂路保留著現實邊界被虛空裂縫拉開時的記憶。',
    },
  },

  astral_wastes_anchor_stone: {
    id: 'astral_wastes_anchor_stone',
    name: '錨石丘',
    zone: 'astral_wastes' as RoomDef['zone'],
    image: 'astral_wastes_anchor_stone.png',
    imagePrompt: '錨石丘 in astral_wastes, surreal astral wasteland at the edge of reality, star sand, floating rocks, void rifts, black stars and alien light, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text',
    description:
      '錨石丘位於星界荒原沒有固定地平線的邊界地帶，星砂、漂浮岩塊、虛空裂縫與失落星座在同一片荒原上互相重疊，讓方向感變得極不可靠。這裡是終局高階路線節點，玩家可以 inspect 星砂流向、黑星門紋、重力沉井與虛空裂縫來判斷現實錨是否仍然穩定，也能 search 彗骨、星泥、懸浮遺跡和蒼白小祠尋找異界線索。若隊伍忽略重力翻轉、外層黑域和鏡面虛空，虛空行者、混沌生物、暗影惡魔與古龍星影會撕開隊形；若穩定標記現實錨，則能逐步接近星界荒原核心，並確認現實錨沒有被外層黑域拖離原本座標。',
    exits: [
      { direction: 'south', targetRoomId: 'astral_wastes_reality_gate', description: '錨石丘回到現實邊門' },
      { direction: 'east', targetRoomId: 'astral_wastes_comet_bones', description: '彗骨灘在東側' },
    ],
    monsters: [
      { monsterId: 'crystal_golem', maxCount: 1, respawnSeconds: 160 },
      { monsterId: 'void_walker', maxCount: 1, respawnSeconds: 180 },
    ],
    mapSymbol: '[錨]',
    mapX: 0,
    mapY: 1,
    guardianHints: {
      creature: '錨石丘的星砂若逆著腳印流動，異界巡行者通常已經靠近。',
      treasure: '錨石丘的星泥、黑星紋或懸浮碎石旁可能藏著星界荒原線索。',
      spirit: '錨石丘保留著現實邊界被虛空裂縫拉開時的記憶。',
    },
  },

  astral_wastes_comet_bones: {
    id: 'astral_wastes_comet_bones',
    name: '彗骨灘',
    zone: 'astral_wastes' as RoomDef['zone'],
    image: 'astral_wastes_comet_bones.png',
    imagePrompt: '彗骨灘 in astral_wastes, surreal astral wasteland at the edge of reality, star sand, floating rocks, void rifts, black stars and alien light, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text',
    description:
      '彗骨灘位於星界荒原沒有固定地平線的邊界地帶，星砂、漂浮岩塊、虛空裂縫與失落星座在同一片荒原上互相重疊，讓方向感變得極不可靠。這裡是終局高階路線節點，玩家可以 inspect 星砂流向、黑星門紋、重力沉井與虛空裂縫來判斷現實錨是否仍然穩定，也能 search 彗骨、星泥、懸浮遺跡和蒼白小祠尋找異界線索。若隊伍忽略重力翻轉、外層黑域和鏡面虛空，虛空行者、混沌生物、暗影惡魔與古龍星影會撕開隊形；若穩定標記現實錨，則能逐步接近星界荒原核心，並確認現實錨沒有被外層黑域拖離原本座標。',
    exits: [
      { direction: 'west', targetRoomId: 'astral_wastes_anchor_stone', description: '彗骨灘回到錨石丘' },
      { direction: 'east', targetRoomId: 'astral_wastes_mirror_void', description: '鏡面虛空在東側' },
      { direction: 'south', targetRoomId: 'astral_wastes_bent_horizon', description: '骨砂坡落向地平線' },
    ],
    monsters: [
      { monsterId: 'chaos_spawn', maxCount: 1, respawnSeconds: 180 },
      { monsterId: 'void_walker', maxCount: 1, respawnSeconds: 180 },
    ],
    mapSymbol: '[骨]',
    mapX: 1,
    mapY: 1,
    guardianHints: {
      creature: '彗骨灘的星砂若逆著腳印流動，異界巡行者通常已經靠近。',
      treasure: '彗骨灘的星泥、黑星紋或懸浮碎石旁可能藏著星界荒原線索。',
      spirit: '彗骨灘保留著現實邊界被虛空裂縫拉開時的記憶。',
    },
  },

  astral_wastes_bent_horizon: {
    id: 'astral_wastes_bent_horizon',
    name: '彎曲地平線',
    zone: 'astral_wastes' as RoomDef['zone'],
    image: 'astral_wastes_bent_horizon.png',
    imagePrompt: '彎曲地平線 in astral_wastes, surreal astral wasteland at the edge of reality, star sand, floating rocks, void rifts, black stars and alien light, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text',
    description:
      '彎曲地平線位於星界荒原沒有固定地平線的邊界地帶，星砂、漂浮岩塊、虛空裂縫與失落星座在同一片荒原上互相重疊，讓方向感變得極不可靠。這裡是終局高階路線節點，玩家可以 inspect 星砂流向、黑星門紋、重力沉井與虛空裂縫來判斷現實錨是否仍然穩定，也能 search 彗骨、星泥、懸浮遺跡和蒼白小祠尋找異界線索。若隊伍忽略重力翻轉、外層黑域和鏡面虛空，虛空行者、混沌生物、暗影惡魔與古龍星影會撕開隊形；若穩定標記現實錨，則能逐步接近星界荒原核心，並確認現實錨沒有被外層黑域拖離原本座標。',
    exits: [
      { direction: 'west', targetRoomId: 'astral_wastes_starsand_track', description: '地平線回到星砂路' },
      { direction: 'north', targetRoomId: 'astral_wastes_comet_bones', description: '骨砂坡回到彗骨灘' },
      { direction: 'east', targetRoomId: 'astral_wastes_floating_obelisk', description: '漂浮方尖碑在前方' },
    ],
    monsters: [
      { monsterId: 'void_walker', maxCount: 2, respawnSeconds: 180 },
      { monsterId: 'shadow_demon', maxCount: 1, respawnSeconds: 180 },
    ],
    mapSymbol: '[線]',
    mapX: 2,
    mapY: 0,
    guardianHints: {
      creature: '彎曲地平線的星砂若逆著腳印流動，異界巡行者通常已經靠近。',
      treasure: '彎曲地平線的星泥、黑星紋或懸浮碎石旁可能藏著星界荒原線索。',
      spirit: '彎曲地平線保留著現實邊界被虛空裂縫拉開時的記憶。',
    },
  },

  astral_wastes_lightless_dune: {
    id: 'astral_wastes_lightless_dune',
    name: '無光沙丘',
    zone: 'astral_wastes' as RoomDef['zone'],
    image: 'astral_wastes_lightless_dune.png',
    imagePrompt: '無光沙丘 in astral_wastes, surreal astral wasteland at the edge of reality, star sand, floating rocks, void rifts, black stars and alien light, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text',
    description:
      '無光沙丘位於星界荒原沒有固定地平線的邊界地帶，星砂、漂浮岩塊、虛空裂縫與失落星座在同一片荒原上互相重疊，讓方向感變得極不可靠。這裡是終局高階路線節點，玩家可以 inspect 星砂流向、黑星門紋、重力沉井與虛空裂縫來判斷現實錨是否仍然穩定，也能 search 彗骨、星泥、懸浮遺跡和蒼白小祠尋找異界線索。若隊伍忽略重力翻轉、外層黑域和鏡面虛空，虛空行者、混沌生物、暗影惡魔與古龍星影會撕開隊形；若穩定標記現實錨，則能逐步接近星界荒原核心，並確認現實錨沒有被外層黑域拖離原本座標。',
    exits: [
      { direction: 'north', targetRoomId: 'astral_wastes_starsand_track', description: '無光沙丘回到星砂路' },
      { direction: 'east', targetRoomId: 'astral_wastes_echo_crater', description: '回音坑在東側' },
    ],
    monsters: [
      { monsterId: 'shadow_demon', maxCount: 2, respawnSeconds: 180 },
      { monsterId: 'chaos_spawn', maxCount: 1, respawnSeconds: 180 },
    ],
    mapSymbol: '[丘]',
    mapX: 1,
    mapY: -1,
    guardianHints: {
      creature: '無光沙丘的星砂若逆著腳印流動，異界巡行者通常已經靠近。',
      treasure: '無光沙丘的星泥、黑星紋或懸浮碎石旁可能藏著星界荒原線索。',
      spirit: '無光沙丘保留著現實邊界被虛空裂縫拉開時的記憶。',
    },
  },

  astral_wastes_mirror_void: {
    id: 'astral_wastes_mirror_void',
    name: '鏡面虛空',
    zone: 'astral_wastes' as RoomDef['zone'],
    image: 'astral_wastes_mirror_void.png',
    imagePrompt: '鏡面虛空 in astral_wastes, surreal astral wasteland at the edge of reality, star sand, floating rocks, void rifts, black stars and alien light, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text',
    description:
      '鏡面虛空位於星界荒原沒有固定地平線的邊界地帶，星砂、漂浮岩塊、虛空裂縫與失落星座在同一片荒原上互相重疊，讓方向感變得極不可靠。這裡是終局高階路線節點，玩家可以 inspect 星砂流向、黑星門紋、重力沉井與虛空裂縫來判斷現實錨是否仍然穩定，也能 search 彗骨、星泥、懸浮遺跡和蒼白小祠尋找異界線索。若隊伍忽略重力翻轉、外層黑域和鏡面虛空，虛空行者、混沌生物、暗影惡魔與古龍星影會撕開隊形；若穩定標記現實錨，則能逐步接近星界荒原核心，並確認現實錨沒有被外層黑域拖離原本座標。',
    exits: [
      { direction: 'west', targetRoomId: 'astral_wastes_comet_bones', description: '鏡面虛空回到彗骨灘' },
      { direction: 'east', targetRoomId: 'astral_wastes_pale_shrine', description: '蒼白小祠在東側' },
    ],
    monsters: [
      { monsterId: 'void_walker', maxCount: 2, respawnSeconds: 180 },
      { monsterId: 'crystal_golem', maxCount: 1, respawnSeconds: 160 },
    ],
    mapSymbol: '[鏡]',
    mapX: 2,
    mapY: 1,
    guardianHints: {
      creature: '鏡面虛空的星砂若逆著腳印流動，異界巡行者通常已經靠近。',
      treasure: '鏡面虛空的星泥、黑星紋或懸浮碎石旁可能藏著星界荒原線索。',
      spirit: '鏡面虛空保留著現實邊界被虛空裂縫拉開時的記憶。',
    },
  },

  astral_wastes_floating_obelisk: {
    id: 'astral_wastes_floating_obelisk',
    name: '漂浮方尖碑',
    zone: 'astral_wastes' as RoomDef['zone'],
    image: 'astral_wastes_floating_obelisk.png',
    imagePrompt: '漂浮方尖碑 in astral_wastes, surreal astral wasteland at the edge of reality, star sand, floating rocks, void rifts, black stars and alien light, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text',
    description:
      '漂浮方尖碑位於星界荒原沒有固定地平線的邊界地帶，星砂、漂浮岩塊、虛空裂縫與失落星座在同一片荒原上互相重疊，讓方向感變得極不可靠。這裡是終局高階路線節點，玩家可以 inspect 星砂流向、黑星門紋、重力沉井與虛空裂縫來判斷現實錨是否仍然穩定，也能 search 彗骨、星泥、懸浮遺跡和蒼白小祠尋找異界線索。若隊伍忽略重力翻轉、外層黑域和鏡面虛空，虛空行者、混沌生物、暗影惡魔與古龍星影會撕開隊形；若穩定標記現實錨，則能逐步接近星界荒原核心，並確認現實錨沒有被外層黑域拖離原本座標。',
    exits: [
      { direction: 'west', targetRoomId: 'astral_wastes_bent_horizon', description: '方尖碑回到彎曲地平線' },
      { direction: 'east', targetRoomId: 'astral_wastes_gravity_sink', description: '重力沉井在東側' },
      { direction: 'south', targetRoomId: 'astral_wastes_echo_crater', description: '碑影坡落向回音坑' },
    ],
    monsters: [
      { monsterId: 'crystal_golem', maxCount: 2, respawnSeconds: 160 },
      { monsterId: 'void_walker', maxCount: 1, respawnSeconds: 180 },
    ],
    mapSymbol: '[碑]',
    mapX: 3,
    mapY: 0,
    guardianHints: {
      creature: '漂浮方尖碑的星砂若逆著腳印流動，異界巡行者通常已經靠近。',
      treasure: '漂浮方尖碑的星泥、黑星紋或懸浮碎石旁可能藏著星界荒原線索。',
      spirit: '漂浮方尖碑保留著現實邊界被虛空裂縫拉開時的記憶。',
    },
  },

  astral_wastes_echo_crater: {
    id: 'astral_wastes_echo_crater',
    name: '回音坑',
    zone: 'astral_wastes' as RoomDef['zone'],
    image: 'astral_wastes_echo_crater.png',
    imagePrompt: '回音坑 in astral_wastes, surreal astral wasteland at the edge of reality, star sand, floating rocks, void rifts, black stars and alien light, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text',
    description:
      '回音坑位於星界荒原沒有固定地平線的邊界地帶，星砂、漂浮岩塊、虛空裂縫與失落星座在同一片荒原上互相重疊，讓方向感變得極不可靠。這裡是終局高階路線節點，玩家可以 inspect 星砂流向、黑星門紋、重力沉井與虛空裂縫來判斷現實錨是否仍然穩定，也能 search 彗骨、星泥、懸浮遺跡和蒼白小祠尋找異界線索。若隊伍忽略重力翻轉、外層黑域和鏡面虛空，虛空行者、混沌生物、暗影惡魔與古龍星影會撕開隊形；若穩定標記現實錨，則能逐步接近星界荒原核心，並確認現實錨沒有被外層黑域拖離原本座標。',
    exits: [
      { direction: 'west', targetRoomId: 'astral_wastes_lightless_dune', description: '回音坑回到無光沙丘' },
      { direction: 'north', targetRoomId: 'astral_wastes_floating_obelisk', description: '碑影坡回到方尖碑' },
      { direction: 'east', targetRoomId: 'astral_wastes_shattered_moonroad', description: '碎月路在東側' },
    ],
    monsters: [
      { monsterId: 'chaos_spawn', maxCount: 2, respawnSeconds: 180 },
      { monsterId: 'shadow_demon', maxCount: 1, respawnSeconds: 180 },
    ],
    mapSymbol: '[坑]',
    mapX: 2,
    mapY: -1,
    guardianHints: {
      creature: '回音坑的星砂若逆著腳印流動，異界巡行者通常已經靠近。',
      treasure: '回音坑的星泥、黑星紋或懸浮碎石旁可能藏著星界荒原線索。',
      spirit: '回音坑保留著現實邊界被虛空裂縫拉開時的記憶。',
    },
  },

  astral_wastes_pale_shrine: {
    id: 'astral_wastes_pale_shrine',
    name: '蒼白小祠',
    zone: 'astral_wastes' as RoomDef['zone'],
    image: 'astral_wastes_pale_shrine.png',
    imagePrompt: '蒼白小祠 in astral_wastes, surreal astral wasteland at the edge of reality, star sand, floating rocks, void rifts, black stars and alien light, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text',
    description:
      '蒼白小祠位於星界荒原沒有固定地平線的邊界地帶，星砂、漂浮岩塊、虛空裂縫與失落星座在同一片荒原上互相重疊，讓方向感變得極不可靠。這裡是終局高階路線節點，玩家可以 inspect 星砂流向、黑星門紋、重力沉井與虛空裂縫來判斷現實錨是否仍然穩定，也能 search 彗骨、星泥、懸浮遺跡和蒼白小祠尋找異界線索。若隊伍忽略重力翻轉、外層黑域和鏡面虛空，虛空行者、混沌生物、暗影惡魔與古龍星影會撕開隊形；若穩定標記現實錨，則能逐步接近星界荒原核心，並確認現實錨沒有被外層黑域拖離原本座標。',
    exits: [
      { direction: 'west', targetRoomId: 'astral_wastes_mirror_void', description: '蒼白小祠回到鏡面虛空' },
      { direction: 'east', targetRoomId: 'astral_wastes_astral_lake', description: '星界湖在東側' },
    ],
    monsters: [
      { monsterId: 'void_walker', maxCount: 2, respawnSeconds: 180 },
      { monsterId: 'shadow_demon', maxCount: 1, respawnSeconds: 180 },
    ],
    mapSymbol: '[祠]',
    mapX: 3,
    mapY: 1,
    guardianHints: {
      creature: '蒼白小祠的星砂若逆著腳印流動，異界巡行者通常已經靠近。',
      treasure: '蒼白小祠的星泥、黑星紋或懸浮碎石旁可能藏著星界荒原線索。',
      spirit: '蒼白小祠保留著現實邊界被虛空裂縫拉開時的記憶。',
    },
  },

  astral_wastes_gravity_sink: {
    id: 'astral_wastes_gravity_sink',
    name: '重力沉井',
    zone: 'astral_wastes' as RoomDef['zone'],
    image: 'astral_wastes_gravity_sink.png',
    imagePrompt: '重力沉井 in astral_wastes, surreal astral wasteland at the edge of reality, star sand, floating rocks, void rifts, black stars and alien light, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text',
    description:
      '重力沉井位於星界荒原沒有固定地平線的邊界地帶，星砂、漂浮岩塊、虛空裂縫與失落星座在同一片荒原上互相重疊，讓方向感變得極不可靠。這裡是終局高階路線節點，玩家可以 inspect 星砂流向、黑星門紋、重力沉井與虛空裂縫來判斷現實錨是否仍然穩定，也能 search 彗骨、星泥、懸浮遺跡和蒼白小祠尋找異界線索。若隊伍忽略重力翻轉、外層黑域和鏡面虛空，虛空行者、混沌生物、暗影惡魔與古龍星影會撕開隊形；若穩定標記現實錨，則能逐步接近星界荒原核心，並確認現實錨沒有被外層黑域拖離原本座標。',
    exits: [
      { direction: 'west', targetRoomId: 'astral_wastes_floating_obelisk', description: '重力沉井回到方尖碑' },
      { direction: 'north', targetRoomId: 'astral_wastes_astral_lake', description: '反重力坡通往星界湖' },
      { direction: 'east', targetRoomId: 'astral_wastes_void_rift', description: '虛空裂縫在東側' },
    ],
    monsters: [
      { monsterId: 'chaos_spawn', maxCount: 2, respawnSeconds: 180 },
      { monsterId: 'crystal_golem', maxCount: 1, respawnSeconds: 160 },
    ],
    mapSymbol: '[重]',
    mapX: 4,
    mapY: 0,
    guardianHints: {
      creature: '重力沉井的星砂若逆著腳印流動，異界巡行者通常已經靠近。',
      treasure: '重力沉井的星泥、黑星紋或懸浮碎石旁可能藏著星界荒原線索。',
      spirit: '重力沉井保留著現實邊界被虛空裂縫拉開時的記憶。',
    },
  },

  astral_wastes_shattered_moonroad: {
    id: 'astral_wastes_shattered_moonroad',
    name: '碎月路',
    zone: 'astral_wastes' as RoomDef['zone'],
    image: 'astral_wastes_shattered_moonroad.png',
    imagePrompt: '碎月路 in astral_wastes, surreal astral wasteland at the edge of reality, star sand, floating rocks, void rifts, black stars and alien light, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text',
    description:
      '碎月路位於星界荒原沒有固定地平線的邊界地帶，星砂、漂浮岩塊、虛空裂縫與失落星座在同一片荒原上互相重疊，讓方向感變得極不可靠。這裡是終局高階路線節點，玩家可以 inspect 星砂流向、黑星門紋、重力沉井與虛空裂縫來判斷現實錨是否仍然穩定，也能 search 彗骨、星泥、懸浮遺跡和蒼白小祠尋找異界線索。若隊伍忽略重力翻轉、外層黑域和鏡面虛空，虛空行者、混沌生物、暗影惡魔與古龍星影會撕開隊形；若穩定標記現實錨，則能逐步接近星界荒原核心，並確認現實錨沒有被外層黑域拖離原本座標。',
    exits: [
      { direction: 'west', targetRoomId: 'astral_wastes_echo_crater', description: '碎月路回到回音坑' },
      { direction: 'east', targetRoomId: 'astral_wastes_star_silt_basin', description: '星泥盆地在東側' },
    ],
    monsters: [
      { monsterId: 'shadow_demon', maxCount: 2, respawnSeconds: 180 },
      { monsterId: 'void_walker', maxCount: 1, respawnSeconds: 180 },
    ],
    mapSymbol: '[月]',
    mapX: 3,
    mapY: -1,
    guardianHints: {
      creature: '碎月路的星砂若逆著腳印流動，異界巡行者通常已經靠近。',
      treasure: '碎月路的星泥、黑星紋或懸浮碎石旁可能藏著星界荒原線索。',
      spirit: '碎月路保留著現實邊界被虛空裂縫拉開時的記憶。',
    },
  },

  astral_wastes_astral_lake: {
    id: 'astral_wastes_astral_lake',
    name: '星界湖',
    zone: 'astral_wastes' as RoomDef['zone'],
    image: 'astral_wastes_astral_lake.png',
    imagePrompt: '星界湖 in astral_wastes, surreal astral wasteland at the edge of reality, star sand, floating rocks, void rifts, black stars and alien light, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text',
    description:
      '星界湖位於星界荒原沒有固定地平線的邊界地帶，星砂、漂浮岩塊、虛空裂縫與失落星座在同一片荒原上互相重疊，讓方向感變得極不可靠。這裡是終局高階路線節點，玩家可以 inspect 星砂流向、黑星門紋、重力沉井與虛空裂縫來判斷現實錨是否仍然穩定，也能 search 彗骨、星泥、懸浮遺跡和蒼白小祠尋找異界線索。若隊伍忽略重力翻轉、外層黑域和鏡面虛空，虛空行者、混沌生物、暗影惡魔與古龍星影會撕開隊形；若穩定標記現實錨，則能逐步接近星界荒原核心，並確認現實錨沒有被外層黑域拖離原本座標。',
    exits: [
      { direction: 'west', targetRoomId: 'astral_wastes_pale_shrine', description: '星界湖回到蒼白小祠' },
      { direction: 'south', targetRoomId: 'astral_wastes_gravity_sink', description: '反重力坡回到沉井' },
      { direction: 'east', targetRoomId: 'astral_wastes_lost_constellation', description: '失落星座在東側' },
    ],
    monsters: [
      { monsterId: 'jellyfish', maxCount: 3, respawnSeconds: 80 },
      { monsterId: 'void_walker', maxCount: 1, respawnSeconds: 180 },
    ],
    mapSymbol: '[湖]',
    mapX: 4,
    mapY: 1,
    guardianHints: {
      creature: '星界湖的星砂若逆著腳印流動，異界巡行者通常已經靠近。',
      treasure: '星界湖的星泥、黑星紋或懸浮碎石旁可能藏著星界荒原線索。',
      spirit: '星界湖保留著現實邊界被虛空裂縫拉開時的記憶。',
    },
  },

  astral_wastes_void_rift: {
    id: 'astral_wastes_void_rift',
    name: '虛空裂縫',
    zone: 'astral_wastes' as RoomDef['zone'],
    image: 'astral_wastes_void_rift.png',
    imagePrompt: '虛空裂縫 in astral_wastes, surreal astral wasteland at the edge of reality, star sand, floating rocks, void rifts, black stars and alien light, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text',
    description:
      '虛空裂縫位於星界荒原沒有固定地平線的邊界地帶，星砂、漂浮岩塊、虛空裂縫與失落星座在同一片荒原上互相重疊，讓方向感變得極不可靠。這裡是終局高階路線節點，玩家可以 inspect 星砂流向、黑星門紋、重力沉井與虛空裂縫來判斷現實錨是否仍然穩定，也能 search 彗骨、星泥、懸浮遺跡和蒼白小祠尋找異界線索。若隊伍忽略重力翻轉、外層黑域和鏡面虛空，虛空行者、混沌生物、暗影惡魔與古龍星影會撕開隊形；若穩定標記現實錨，則能逐步接近星界荒原核心，並確認現實錨沒有被外層黑域拖離原本座標。',
    exits: [
      { direction: 'west', targetRoomId: 'astral_wastes_gravity_sink', description: '虛空裂縫回到重力沉井' },
      { direction: 'east', targetRoomId: 'astral_wastes_black_star_gate', description: '黑星門在東側' },
      { direction: 'south', targetRoomId: 'astral_wastes_star_silt_basin', description: '裂光坡落向星泥盆地' },
    ],
    monsters: [
      { monsterId: 'chaos_spawn', maxCount: 2, respawnSeconds: 180 },
      { monsterId: 'shadow_demon', maxCount: 2, respawnSeconds: 180 },
    ],
    mapSymbol: '[裂]',
    mapX: 5,
    mapY: 0,
    guardianHints: {
      creature: '虛空裂縫的星砂若逆著腳印流動，異界巡行者通常已經靠近。',
      treasure: '虛空裂縫的星泥、黑星紋或懸浮碎石旁可能藏著星界荒原線索。',
      spirit: '虛空裂縫保留著現實邊界被虛空裂縫拉開時的記憶。',
    },
  },

  astral_wastes_star_silt_basin: {
    id: 'astral_wastes_star_silt_basin',
    name: '星泥盆地',
    zone: 'astral_wastes' as RoomDef['zone'],
    image: 'astral_wastes_star_silt_basin.png',
    imagePrompt: '星泥盆地 in astral_wastes, surreal astral wasteland at the edge of reality, star sand, floating rocks, void rifts, black stars and alien light, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text',
    description:
      '星泥盆地位於星界荒原沒有固定地平線的邊界地帶，星砂、漂浮岩塊、虛空裂縫與失落星座在同一片荒原上互相重疊，讓方向感變得極不可靠。這裡是終局高階路線節點，玩家可以 inspect 星砂流向、黑星門紋、重力沉井與虛空裂縫來判斷現實錨是否仍然穩定，也能 search 彗骨、星泥、懸浮遺跡和蒼白小祠尋找異界線索。若隊伍忽略重力翻轉、外層黑域和鏡面虛空，虛空行者、混沌生物、暗影惡魔與古龍星影會撕開隊形；若穩定標記現實錨，則能逐步接近星界荒原核心，並確認現實錨沒有被外層黑域拖離原本座標。',
    exits: [
      { direction: 'west', targetRoomId: 'astral_wastes_shattered_moonroad', description: '星泥盆地回到碎月路' },
      { direction: 'north', targetRoomId: 'astral_wastes_void_rift', description: '裂光坡回到虛空裂縫' },
      { direction: 'east', targetRoomId: 'astral_wastes_levitating_ruins', description: '懸浮遺跡在東側' },
    ],
    monsters: [
      { monsterId: 'void_walker', maxCount: 2, respawnSeconds: 180 },
      { monsterId: 'chaos_spawn', maxCount: 1, respawnSeconds: 180 },
    ],
    mapSymbol: '[泥]',
    mapX: 4,
    mapY: -1,
    guardianHints: {
      creature: '星泥盆地的星砂若逆著腳印流動，異界巡行者通常已經靠近。',
      treasure: '星泥盆地的星泥、黑星紋或懸浮碎石旁可能藏著星界荒原線索。',
      spirit: '星泥盆地保留著現實邊界被虛空裂縫拉開時的記憶。',
    },
  },

  astral_wastes_lost_constellation: {
    id: 'astral_wastes_lost_constellation',
    name: '失落星座',
    zone: 'astral_wastes' as RoomDef['zone'],
    image: 'astral_wastes_lost_constellation.png',
    imagePrompt: '失落星座 in astral_wastes, surreal astral wasteland at the edge of reality, star sand, floating rocks, void rifts, black stars and alien light, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text',
    description:
      '失落星座位於星界荒原沒有固定地平線的邊界地帶，星砂、漂浮岩塊、虛空裂縫與失落星座在同一片荒原上互相重疊，讓方向感變得極不可靠。這裡是終局高階路線節點，玩家可以 inspect 星砂流向、黑星門紋、重力沉井與虛空裂縫來判斷現實錨是否仍然穩定，也能 search 彗骨、星泥、懸浮遺跡和蒼白小祠尋找異界線索。若隊伍忽略重力翻轉、外層黑域和鏡面虛空，虛空行者、混沌生物、暗影惡魔與古龍星影會撕開隊形；若穩定標記現實錨，則能逐步接近星界荒原核心，並確認現實錨沒有被外層黑域拖離原本座標。',
    exits: [
      { direction: 'west', targetRoomId: 'astral_wastes_astral_lake', description: '失落星座回到星界湖' },
      { direction: 'south', targetRoomId: 'astral_wastes_black_star_gate', description: '星線落向黑星門' },
    ],
    monsters: [
      { monsterId: 'storm_dragon', maxCount: 1, respawnSeconds: 1800 },
      { monsterId: 'void_walker', maxCount: 2, respawnSeconds: 180 },
    ],
    mapSymbol: '[座]',
    mapX: 5,
    mapY: 1,
    guardianHints: {
      creature: '失落星座的星砂若逆著腳印流動，異界巡行者通常已經靠近。',
      treasure: '失落星座的星泥、黑星紋或懸浮碎石旁可能藏著星界荒原線索。',
      spirit: '失落星座保留著現實邊界被虛空裂縫拉開時的記憶。',
    },
  },

  astral_wastes_black_star_gate: {
    id: 'astral_wastes_black_star_gate',
    name: '黑星門',
    zone: 'astral_wastes' as RoomDef['zone'],
    image: 'astral_wastes_black_star_gate.png',
    imagePrompt: '黑星門 in astral_wastes, surreal astral wasteland at the edge of reality, star sand, floating rocks, void rifts, black stars and alien light, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text',
    description:
      '黑星門位於星界荒原沒有固定地平線的邊界地帶，星砂、漂浮岩塊、虛空裂縫與失落星座在同一片荒原上互相重疊，讓方向感變得極不可靠。這裡是終局高階路線節點，玩家可以 inspect 星砂流向、黑星門紋、重力沉井與虛空裂縫來判斷現實錨是否仍然穩定，也能 search 彗骨、星泥、懸浮遺跡和蒼白小祠尋找異界線索。若隊伍忽略重力翻轉、外層黑域和鏡面虛空，虛空行者、混沌生物、暗影惡魔與古龍星影會撕開隊形；若穩定標記現實錨，則能逐步接近星界荒原核心，並確認現實錨沒有被外層黑域拖離原本座標。',
    exits: [
      { direction: 'west', targetRoomId: 'astral_wastes_void_rift', description: '黑星門回到虛空裂縫' },
      { direction: 'north', targetRoomId: 'astral_wastes_lost_constellation', description: '星線回到失落星座' },
      { direction: 'east', targetRoomId: 'astral_wastes_worldcore_waste', description: '荒原核心在東側' },
    ],
    monsters: [
      { monsterId: 'shadow_demon', maxCount: 2, respawnSeconds: 180 },
      { monsterId: 'storm_dragon', maxCount: 1, respawnSeconds: 1800 },
    ],
    mapSymbol: '[星]',
    mapX: 6,
    mapY: 0,
    guardianHints: {
      creature: '黑星門的星砂若逆著腳印流動，異界巡行者通常已經靠近。',
      treasure: '黑星門的星泥、黑星紋或懸浮碎石旁可能藏著星界荒原線索。',
      spirit: '黑星門保留著現實邊界被虛空裂縫拉開時的記憶。',
    },
  },

  astral_wastes_levitating_ruins: {
    id: 'astral_wastes_levitating_ruins',
    name: '懸浮遺跡',
    zone: 'astral_wastes' as RoomDef['zone'],
    image: 'astral_wastes_levitating_ruins.png',
    imagePrompt: '懸浮遺跡 in astral_wastes, surreal astral wasteland at the edge of reality, star sand, floating rocks, void rifts, black stars and alien light, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text',
    description:
      '懸浮遺跡位於星界荒原沒有固定地平線的邊界地帶，星砂、漂浮岩塊、虛空裂縫與失落星座在同一片荒原上互相重疊，讓方向感變得極不可靠。這裡是終局高階路線節點，玩家可以 inspect 星砂流向、黑星門紋、重力沉井與虛空裂縫來判斷現實錨是否仍然穩定，也能 search 彗骨、星泥、懸浮遺跡和蒼白小祠尋找異界線索。若隊伍忽略重力翻轉、外層黑域和鏡面虛空，虛空行者、混沌生物、暗影惡魔與古龍星影會撕開隊形；若穩定標記現實錨，則能逐步接近星界荒原核心，並確認現實錨沒有被外層黑域拖離原本座標。',
    exits: [
      { direction: 'west', targetRoomId: 'astral_wastes_star_silt_basin', description: '懸浮遺跡回到星泥盆地' },
      { direction: 'east', targetRoomId: 'astral_wastes_worldcore_waste', description: '浮石橋通往荒原核心' },
    ],
    monsters: [
      { monsterId: 'crystal_golem', maxCount: 2, respawnSeconds: 160 },
      { monsterId: 'chaos_spawn', maxCount: 2, respawnSeconds: 180 },
    ],
    mapSymbol: '[浮]',
    mapX: 5,
    mapY: -1,
    guardianHints: {
      creature: '懸浮遺跡的星砂若逆著腳印流動，異界巡行者通常已經靠近。',
      treasure: '懸浮遺跡的星泥、黑星紋或懸浮碎石旁可能藏著星界荒原線索。',
      spirit: '懸浮遺跡保留著現實邊界被虛空裂縫拉開時的記憶。',
    },
  },

  astral_wastes_worldcore_waste: {
    id: 'astral_wastes_worldcore_waste',
    name: '星界荒原核心',
    zone: 'astral_wastes' as RoomDef['zone'],
    image: 'astral_wastes_worldcore_waste.png',
    imagePrompt: '星界荒原核心 in astral_wastes, surreal astral wasteland at the edge of reality, star sand, floating rocks, void rifts, black stars and alien light, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text',
    description:
      '星界荒原核心位於星界荒原沒有固定地平線的邊界地帶，星砂、漂浮岩塊、虛空裂縫與失落星座在同一片荒原上互相重疊，讓方向感變得極不可靠。這裡是終局高階路線節點，玩家可以 inspect 星砂流向、黑星門紋、重力沉井與虛空裂縫來判斷現實錨是否仍然穩定，也能 search 彗骨、星泥、懸浮遺跡和蒼白小祠尋找異界線索。若隊伍忽略重力翻轉、外層黑域和鏡面虛空，虛空行者、混沌生物、暗影惡魔與古龍星影會撕開隊形；若穩定標記現實錨，則能逐步接近星界荒原核心，並確認現實錨沒有被外層黑域拖離原本座標。',
    exits: [
      { direction: 'west', targetRoomId: 'astral_wastes_black_star_gate', description: '荒原核心回到黑星門' },
      { direction: 'south', targetRoomId: 'astral_wastes_levitating_ruins', description: '浮石橋回到懸浮遺跡' },
      { direction: 'east', targetRoomId: 'astral_wastes_outer_dark', description: '外層黑域在核心外側' },
    ],
    monsters: [
      { monsterId: 'elder_dragon', maxCount: 1, respawnSeconds: 1800 },
      { monsterId: 'chaos_spawn', maxCount: 2, respawnSeconds: 180 },
      { monsterId: 'shadow_demon', maxCount: 2, respawnSeconds: 180 },
    ],
    mapSymbol: '[核]',
    mapX: 7,
    mapY: 0,
    guardianHints: {
      creature: '星界荒原核心的星砂若逆著腳印流動，異界巡行者通常已經靠近。',
      treasure: '星界荒原核心的星泥、黑星紋或懸浮碎石旁可能藏著星界荒原線索。',
      spirit: '星界荒原核心保留著現實邊界被虛空裂縫拉開時的記憶。',
    },
  },

  astral_wastes_outer_dark: {
    id: 'astral_wastes_outer_dark',
    name: '外層黑域',
    zone: 'astral_wastes' as RoomDef['zone'],
    image: 'astral_wastes_outer_dark.png',
    imagePrompt: '外層黑域 in astral_wastes, surreal astral wasteland at the edge of reality, star sand, floating rocks, void rifts, black stars and alien light, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text',
    description:
      '外層黑域位於星界荒原沒有固定地平線的邊界地帶，星砂、漂浮岩塊、虛空裂縫與失落星座在同一片荒原上互相重疊，讓方向感變得極不可靠。這裡是終局高階路線節點，玩家可以 inspect 星砂流向、黑星門紋、重力沉井與虛空裂縫來判斷現實錨是否仍然穩定，也能 search 彗骨、星泥、懸浮遺跡和蒼白小祠尋找異界線索。若隊伍忽略重力翻轉、外層黑域和鏡面虛空，虛空行者、混沌生物、暗影惡魔與古龍星影會撕開隊形；若穩定標記現實錨，則能逐步接近星界荒原核心，並確認現實錨沒有被外層黑域拖離原本座標。',
    exits: [
      { direction: 'west', targetRoomId: 'astral_wastes_worldcore_waste', description: '外層黑域回到星界荒原核心' },
    ],
    monsters: [
      { monsterId: 'chaos_spawn', maxCount: 3, respawnSeconds: 180 },
      { monsterId: 'void_walker', maxCount: 2, respawnSeconds: 180 },
    ],
    mapSymbol: '[外]',
    mapX: 8,
    mapY: 0,
    guardianHints: {
      creature: '外層黑域的星砂若逆著腳印流動，異界巡行者通常已經靠近。',
      treasure: '外層黑域的星泥、黑星紋或懸浮碎石旁可能藏著星界荒原線索。',
      spirit: '外層黑域保留著現實邊界被虛空裂縫拉開時的記憶。',
    },
  },
  final_battleground_war_gate: {
    id: 'final_battleground_war_gate',
    name: '終戰入口',
    zone: 'final_battleground' as RoomDef['zone'],
    image: 'final_battleground_war_gate.png',
    imagePrompt: '終戰入口 in final_battleground, apocalyptic battlefield of kings and demon gods, broken banners, black fire, angelic light, siege wrecks and cracked earth, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text',
    description:
      '終戰入口位於終焉戰場的殘破荒原上，諸王軍旗、魔神爪痕、墜天白光與黑焰前線仍停在最後交戰的一刻，空氣中沒有風卻能聽見戰鼓回音。這裡是終局戰場與王國戰爭高危節點，玩家可以 inspect 旗幟、血雨、攻城殘骸與神傷裂縫來判斷敵軍推進方向，也能 search 王骨、軍令、破甲和祭火尋找世界王線索。若隊伍忽略側翼、裂世縫與黑焰壓力，惡魔將軍、墮天使、巫妖殘影和混沌生物會把戰線切斷；若穩定整隊推進，則能逐步抵達終末軍旗與戰後寂地，並確認撤退路線沒有被新一輪黑焰與軍魂封鎖整條戰場線。',
    exits: [
      { direction: 'east', targetRoomId: 'final_battleground_broken_banner_field', description: '破旗原在前方' },
      { direction: 'north', targetRoomId: 'final_battleground_king_cairn', description: '王骨石堆在北側' },
    ],
    monsters: [
      { monsterId: 'demon_warrior', maxCount: 2, respawnSeconds: 160 },
    ],
    mapSymbol: '[門]',
    mapX: 0,
    mapY: 0,
    guardianHints: {
      creature: '終戰入口的旗影若突然逆向飄動，敵軍殘影通常已經開始推進。',
      treasure: '終戰入口的破甲、軍令或焦土裂縫旁可能藏著終焉戰場線索。',
      spirit: '終戰入口保留著諸王與魔神最後交戰時留下的記憶。',
    },
  },

  final_battleground_broken_banner_field: {
    id: 'final_battleground_broken_banner_field',
    name: '破旗原',
    zone: 'final_battleground' as RoomDef['zone'],
    image: 'final_battleground_broken_banner_field.png',
    imagePrompt: '破旗原 in final_battleground, apocalyptic battlefield of kings and demon gods, broken banners, black fire, angelic light, siege wrecks and cracked earth, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text',
    description:
      '破旗原位於終焉戰場的殘破荒原上，諸王軍旗、魔神爪痕、墜天白光與黑焰前線仍停在最後交戰的一刻，空氣中沒有風卻能聽見戰鼓回音。這裡是終局戰場與王國戰爭高危節點，玩家可以 inspect 旗幟、血雨、攻城殘骸與神傷裂縫來判斷敵軍推進方向，也能 search 王骨、軍令、破甲和祭火尋找世界王線索。若隊伍忽略側翼、裂世縫與黑焰壓力，惡魔將軍、墮天使、巫妖殘影和混沌生物會把戰線切斷；若穩定整隊推進，則能逐步抵達終末軍旗與戰後寂地，並確認撤退路線沒有被新一輪黑焰與軍魂封鎖整條戰場線。',
    exits: [
      { direction: 'west', targetRoomId: 'final_battleground_war_gate', description: '破旗原回到終戰入口' },
      { direction: 'east', targetRoomId: 'final_battleground_siege_trench', description: '攻城壕溝在東側' },
      { direction: 'south', targetRoomId: 'final_battleground_ember_mud', description: '餘火泥地在南側' },
    ],
    monsters: [
      { monsterId: 'demon_warrior', maxCount: 2, respawnSeconds: 160 },
      { monsterId: 'undead_knight', maxCount: 1, respawnSeconds: 140 },
    ],
    mapSymbol: '[旗]',
    mapX: 1,
    mapY: 0,
    guardianHints: {
      creature: '破旗原的旗影若突然逆向飄動，敵軍殘影通常已經開始推進。',
      treasure: '破旗原的破甲、軍令或焦土裂縫旁可能藏著終焉戰場線索。',
      spirit: '破旗原保留著諸王與魔神最後交戰時留下的記憶。',
    },
  },

  final_battleground_king_cairn: {
    id: 'final_battleground_king_cairn',
    name: '王骨石堆',
    zone: 'final_battleground' as RoomDef['zone'],
    image: 'final_battleground_king_cairn.png',
    imagePrompt: '王骨石堆 in final_battleground, apocalyptic battlefield of kings and demon gods, broken banners, black fire, angelic light, siege wrecks and cracked earth, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text',
    description:
      '王骨石堆位於終焉戰場的殘破荒原上，諸王軍旗、魔神爪痕、墜天白光與黑焰前線仍停在最後交戰的一刻，空氣中沒有風卻能聽見戰鼓回音。這裡是終局戰場與王國戰爭高危節點，玩家可以 inspect 旗幟、血雨、攻城殘骸與神傷裂縫來判斷敵軍推進方向，也能 search 王骨、軍令、破甲和祭火尋找世界王線索。若隊伍忽略側翼、裂世縫與黑焰壓力，惡魔將軍、墮天使、巫妖殘影和混沌生物會把戰線切斷；若穩定整隊推進，則能逐步抵達終末軍旗與戰後寂地，並確認撤退路線沒有被新一輪黑焰與軍魂封鎖整條戰場線。',
    exits: [
      { direction: 'south', targetRoomId: 'final_battleground_war_gate', description: '王骨石堆回到終戰入口' },
      { direction: 'east', targetRoomId: 'final_battleground_oath_circle', description: '誓約石圈在東側' },
    ],
    monsters: [
      { monsterId: 'undead_knight', maxCount: 2, respawnSeconds: 140 },
      { monsterId: 'skeleton_general', maxCount: 1, respawnSeconds: 300 },
    ],
    mapSymbol: '[王]',
    mapX: 0,
    mapY: 1,
    guardianHints: {
      creature: '王骨石堆的旗影若突然逆向飄動，敵軍殘影通常已經開始推進。',
      treasure: '王骨石堆的破甲、軍令或焦土裂縫旁可能藏著終焉戰場線索。',
      spirit: '王骨石堆保留著諸王與魔神最後交戰時留下的記憶。',
    },
  },

  final_battleground_oath_circle: {
    id: 'final_battleground_oath_circle',
    name: '誓約石圈',
    zone: 'final_battleground' as RoomDef['zone'],
    image: 'final_battleground_oath_circle.png',
    imagePrompt: '誓約石圈 in final_battleground, apocalyptic battlefield of kings and demon gods, broken banners, black fire, angelic light, siege wrecks and cracked earth, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text',
    description:
      '誓約石圈位於終焉戰場的殘破荒原上，諸王軍旗、魔神爪痕、墜天白光與黑焰前線仍停在最後交戰的一刻，空氣中沒有風卻能聽見戰鼓回音。這裡是終局戰場與王國戰爭高危節點，玩家可以 inspect 旗幟、血雨、攻城殘骸與神傷裂縫來判斷敵軍推進方向，也能 search 王骨、軍令、破甲和祭火尋找世界王線索。若隊伍忽略側翼、裂世縫與黑焰壓力，惡魔將軍、墮天使、巫妖殘影和混沌生物會把戰線切斷；若穩定整隊推進，則能逐步抵達終末軍旗與戰後寂地，並確認撤退路線沒有被新一輪黑焰與軍魂封鎖整條戰場線。',
    exits: [
      { direction: 'west', targetRoomId: 'final_battleground_king_cairn', description: '誓約石圈回到王骨石堆' },
      { direction: 'east', targetRoomId: 'final_battleground_sunless_chapel', description: '無日禮拜堂在東側' },
      { direction: 'south', targetRoomId: 'final_battleground_siege_trench', description: '碎石坡落向攻城壕溝' },
    ],
    monsters: [
      { monsterId: 'undead_knight', maxCount: 2, respawnSeconds: 140 },
      { monsterId: 'lich', maxCount: 1, respawnSeconds: 1800 },
    ],
    mapSymbol: '[誓]',
    mapX: 1,
    mapY: 1,
    guardianHints: {
      creature: '誓約石圈的旗影若突然逆向飄動，敵軍殘影通常已經開始推進。',
      treasure: '誓約石圈的破甲、軍令或焦土裂縫旁可能藏著終焉戰場線索。',
      spirit: '誓約石圈保留著諸王與魔神最後交戰時留下的記憶。',
    },
  },

  final_battleground_siege_trench: {
    id: 'final_battleground_siege_trench',
    name: '攻城壕溝',
    zone: 'final_battleground' as RoomDef['zone'],
    image: 'final_battleground_siege_trench.png',
    imagePrompt: '攻城壕溝 in final_battleground, apocalyptic battlefield of kings and demon gods, broken banners, black fire, angelic light, siege wrecks and cracked earth, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text',
    description:
      '攻城壕溝位於終焉戰場的殘破荒原上，諸王軍旗、魔神爪痕、墜天白光與黑焰前線仍停在最後交戰的一刻，空氣中沒有風卻能聽見戰鼓回音。這裡是終局戰場與王國戰爭高危節點，玩家可以 inspect 旗幟、血雨、攻城殘骸與神傷裂縫來判斷敵軍推進方向，也能 search 王骨、軍令、破甲和祭火尋找世界王線索。若隊伍忽略側翼、裂世縫與黑焰壓力，惡魔將軍、墮天使、巫妖殘影和混沌生物會把戰線切斷；若穩定整隊推進，則能逐步抵達終末軍旗與戰後寂地，並確認撤退路線沒有被新一輪黑焰與軍魂封鎖整條戰場線。',
    exits: [
      { direction: 'west', targetRoomId: 'final_battleground_broken_banner_field', description: '攻城壕溝回到破旗原' },
      { direction: 'north', targetRoomId: 'final_battleground_oath_circle', description: '碎石坡回到誓約石圈' },
      { direction: 'east', targetRoomId: 'final_battleground_blood_rain_basin', description: '血雨盆地在東側' },
    ],
    monsters: [
      { monsterId: 'demon_warrior', maxCount: 2, respawnSeconds: 160 },
      { monsterId: 'skeleton_soldier', maxCount: 3, respawnSeconds: 80 },
    ],
    mapSymbol: '[壕]',
    mapX: 2,
    mapY: 0,
    guardianHints: {
      creature: '攻城壕溝的旗影若突然逆向飄動，敵軍殘影通常已經開始推進。',
      treasure: '攻城壕溝的破甲、軍令或焦土裂縫旁可能藏著終焉戰場線索。',
      spirit: '攻城壕溝保留著諸王與魔神最後交戰時留下的記憶。',
    },
  },

  final_battleground_ember_mud: {
    id: 'final_battleground_ember_mud',
    name: '餘火泥地',
    zone: 'final_battleground' as RoomDef['zone'],
    image: 'final_battleground_ember_mud.png',
    imagePrompt: '餘火泥地 in final_battleground, apocalyptic battlefield of kings and demon gods, broken banners, black fire, angelic light, siege wrecks and cracked earth, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text',
    description:
      '餘火泥地位於終焉戰場的殘破荒原上，諸王軍旗、魔神爪痕、墜天白光與黑焰前線仍停在最後交戰的一刻，空氣中沒有風卻能聽見戰鼓回音。這裡是終局戰場與王國戰爭高危節點，玩家可以 inspect 旗幟、血雨、攻城殘骸與神傷裂縫來判斷敵軍推進方向，也能 search 王骨、軍令、破甲和祭火尋找世界王線索。若隊伍忽略側翼、裂世縫與黑焰壓力，惡魔將軍、墮天使、巫妖殘影和混沌生物會把戰線切斷；若穩定整隊推進，則能逐步抵達終末軍旗與戰後寂地，並確認撤退路線沒有被新一輪黑焰與軍魂封鎖整條戰場線。',
    exits: [
      { direction: 'north', targetRoomId: 'final_battleground_broken_banner_field', description: '餘火泥地回到破旗原' },
      { direction: 'east', targetRoomId: 'final_battleground_war_machine_wreck', description: '攻城機殘骸在東側' },
    ],
    monsters: [
      { monsterId: 'fire_elemental', maxCount: 2, respawnSeconds: 140 },
      { monsterId: 'demon_warrior', maxCount: 1, respawnSeconds: 160 },
    ],
    mapSymbol: '[泥]',
    mapX: 1,
    mapY: -1,
    guardianHints: {
      creature: '餘火泥地的旗影若突然逆向飄動，敵軍殘影通常已經開始推進。',
      treasure: '餘火泥地的破甲、軍令或焦土裂縫旁可能藏著終焉戰場線索。',
      spirit: '餘火泥地保留著諸王與魔神最後交戰時留下的記憶。',
    },
  },

  final_battleground_sunless_chapel: {
    id: 'final_battleground_sunless_chapel',
    name: '無日禮拜堂',
    zone: 'final_battleground' as RoomDef['zone'],
    image: 'final_battleground_sunless_chapel.png',
    imagePrompt: '無日禮拜堂 in final_battleground, apocalyptic battlefield of kings and demon gods, broken banners, black fire, angelic light, siege wrecks and cracked earth, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text',
    description:
      '無日禮拜堂位於終焉戰場的殘破荒原上，諸王軍旗、魔神爪痕、墜天白光與黑焰前線仍停在最後交戰的一刻，空氣中沒有風卻能聽見戰鼓回音。這裡是終局戰場與王國戰爭高危節點，玩家可以 inspect 旗幟、血雨、攻城殘骸與神傷裂縫來判斷敵軍推進方向，也能 search 王骨、軍令、破甲和祭火尋找世界王線索。若隊伍忽略側翼、裂世縫與黑焰壓力，惡魔將軍、墮天使、巫妖殘影和混沌生物會把戰線切斷；若穩定整隊推進，則能逐步抵達終末軍旗與戰後寂地，並確認撤退路線沒有被新一輪黑焰與軍魂封鎖整條戰場線。',
    exits: [
      { direction: 'west', targetRoomId: 'final_battleground_oath_circle', description: '禮拜堂回到誓約石圈' },
      { direction: 'east', targetRoomId: 'final_battleground_angel_fall', description: '墜天坑在東側' },
    ],
    monsters: [
      { monsterId: 'lich', maxCount: 1, respawnSeconds: 1800 },
      { monsterId: 'shadow_demon', maxCount: 1, respawnSeconds: 180 },
    ],
    mapSymbol: '[堂]',
    mapX: 2,
    mapY: 1,
    guardianHints: {
      creature: '無日禮拜堂的旗影若突然逆向飄動，敵軍殘影通常已經開始推進。',
      treasure: '無日禮拜堂的破甲、軍令或焦土裂縫旁可能藏著終焉戰場線索。',
      spirit: '無日禮拜堂保留著諸王與魔神最後交戰時留下的記憶。',
    },
  },

  final_battleground_blood_rain_basin: {
    id: 'final_battleground_blood_rain_basin',
    name: '血雨盆地',
    zone: 'final_battleground' as RoomDef['zone'],
    image: 'final_battleground_blood_rain_basin.png',
    imagePrompt: '血雨盆地 in final_battleground, apocalyptic battlefield of kings and demon gods, broken banners, black fire, angelic light, siege wrecks and cracked earth, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text',
    description:
      '血雨盆地位於終焉戰場的殘破荒原上，諸王軍旗、魔神爪痕、墜天白光與黑焰前線仍停在最後交戰的一刻，空氣中沒有風卻能聽見戰鼓回音。這裡是終局戰場與王國戰爭高危節點，玩家可以 inspect 旗幟、血雨、攻城殘骸與神傷裂縫來判斷敵軍推進方向，也能 search 王骨、軍令、破甲和祭火尋找世界王線索。若隊伍忽略側翼、裂世縫與黑焰壓力，惡魔將軍、墮天使、巫妖殘影和混沌生物會把戰線切斷；若穩定整隊推進，則能逐步抵達終末軍旗與戰後寂地，並確認撤退路線沒有被新一輪黑焰與軍魂封鎖整條戰場線。',
    exits: [
      { direction: 'west', targetRoomId: 'final_battleground_siege_trench', description: '血雨盆地回到攻城壕溝' },
      { direction: 'east', targetRoomId: 'final_battleground_throne_wreck', description: '王座殘骸在東側' },
      { direction: 'south', targetRoomId: 'final_battleground_war_machine_wreck', description: '血水渠通往攻城機殘骸' },
    ],
    monsters: [
      { monsterId: 'arch_demon', maxCount: 1, respawnSeconds: 1800 },
      { monsterId: 'demon_warrior', maxCount: 2, respawnSeconds: 160 },
    ],
    mapSymbol: '[血]',
    mapX: 3,
    mapY: 0,
    guardianHints: {
      creature: '血雨盆地的旗影若突然逆向飄動，敵軍殘影通常已經開始推進。',
      treasure: '血雨盆地的破甲、軍令或焦土裂縫旁可能藏著終焉戰場線索。',
      spirit: '血雨盆地保留著諸王與魔神最後交戰時留下的記憶。',
    },
  },

  final_battleground_war_machine_wreck: {
    id: 'final_battleground_war_machine_wreck',
    name: '攻城機殘骸',
    zone: 'final_battleground' as RoomDef['zone'],
    image: 'final_battleground_war_machine_wreck.png',
    imagePrompt: '攻城機殘骸 in final_battleground, apocalyptic battlefield of kings and demon gods, broken banners, black fire, angelic light, siege wrecks and cracked earth, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text',
    description:
      '攻城機殘骸位於終焉戰場的殘破荒原上，諸王軍旗、魔神爪痕、墜天白光與黑焰前線仍停在最後交戰的一刻，空氣中沒有風卻能聽見戰鼓回音。這裡是終局戰場與王國戰爭高危節點，玩家可以 inspect 旗幟、血雨、攻城殘骸與神傷裂縫來判斷敵軍推進方向，也能 search 王骨、軍令、破甲和祭火尋找世界王線索。若隊伍忽略側翼、裂世縫與黑焰壓力，惡魔將軍、墮天使、巫妖殘影和混沌生物會把戰線切斷；若穩定整隊推進，則能逐步抵達終末軍旗與戰後寂地，並確認撤退路線沒有被新一輪黑焰與軍魂封鎖整條戰場線。',
    exits: [
      { direction: 'west', targetRoomId: 'final_battleground_ember_mud', description: '攻城機殘骸回到餘火泥地' },
      { direction: 'north', targetRoomId: 'final_battleground_blood_rain_basin', description: '血水渠回到血雨盆地' },
      { direction: 'east', targetRoomId: 'final_battleground_demon_scar', description: '魔神爪痕在東側' },
    ],
    monsters: [
      { monsterId: 'rock_giant', maxCount: 1, respawnSeconds: 160 },
      { monsterId: 'fire_elemental', maxCount: 2, respawnSeconds: 140 },
    ],
    mapSymbol: '[械]',
    mapX: 2,
    mapY: -1,
    guardianHints: {
      creature: '攻城機殘骸的旗影若突然逆向飄動，敵軍殘影通常已經開始推進。',
      treasure: '攻城機殘骸的破甲、軍令或焦土裂縫旁可能藏著終焉戰場線索。',
      spirit: '攻城機殘骸保留著諸王與魔神最後交戰時留下的記憶。',
    },
  },

  final_battleground_angel_fall: {
    id: 'final_battleground_angel_fall',
    name: '墜天坑',
    zone: 'final_battleground' as RoomDef['zone'],
    image: 'final_battleground_angel_fall.png',
    imagePrompt: '墜天坑 in final_battleground, apocalyptic battlefield of kings and demon gods, broken banners, black fire, angelic light, siege wrecks and cracked earth, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text',
    description:
      '墜天坑位於終焉戰場的殘破荒原上，諸王軍旗、魔神爪痕、墜天白光與黑焰前線仍停在最後交戰的一刻，空氣中沒有風卻能聽見戰鼓回音。這裡是終局戰場與王國戰爭高危節點，玩家可以 inspect 旗幟、血雨、攻城殘骸與神傷裂縫來判斷敵軍推進方向，也能 search 王骨、軍令、破甲和祭火尋找世界王線索。若隊伍忽略側翼、裂世縫與黑焰壓力，惡魔將軍、墮天使、巫妖殘影和混沌生物會把戰線切斷；若穩定整隊推進，則能逐步抵達終末軍旗與戰後寂地，並確認撤退路線沒有被新一輪黑焰與軍魂封鎖整條戰場線。',
    exits: [
      { direction: 'west', targetRoomId: 'final_battleground_sunless_chapel', description: '墜天坑回到禮拜堂' },
      { direction: 'east', targetRoomId: 'final_battleground_light_sundered_bridge', description: '斷光橋在東側' },
    ],
    monsters: [
      { monsterId: 'fallen_angel', maxCount: 1, respawnSeconds: 1800 },
      { monsterId: 'shadow_demon', maxCount: 2, respawnSeconds: 180 },
    ],
    mapSymbol: '[墜]',
    mapX: 3,
    mapY: 1,
    guardianHints: {
      creature: '墜天坑的旗影若突然逆向飄動，敵軍殘影通常已經開始推進。',
      treasure: '墜天坑的破甲、軍令或焦土裂縫旁可能藏著終焉戰場線索。',
      spirit: '墜天坑保留著諸王與魔神最後交戰時留下的記憶。',
    },
  },

  final_battleground_throne_wreck: {
    id: 'final_battleground_throne_wreck',
    name: '王座殘骸',
    zone: 'final_battleground' as RoomDef['zone'],
    image: 'final_battleground_throne_wreck.png',
    imagePrompt: '王座殘骸 in final_battleground, apocalyptic battlefield of kings and demon gods, broken banners, black fire, angelic light, siege wrecks and cracked earth, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text',
    description:
      '王座殘骸位於終焉戰場的殘破荒原上，諸王軍旗、魔神爪痕、墜天白光與黑焰前線仍停在最後交戰的一刻，空氣中沒有風卻能聽見戰鼓回音。這裡是終局戰場與王國戰爭高危節點，玩家可以 inspect 旗幟、血雨、攻城殘骸與神傷裂縫來判斷敵軍推進方向，也能 search 王骨、軍令、破甲和祭火尋找世界王線索。若隊伍忽略側翼、裂世縫與黑焰壓力，惡魔將軍、墮天使、巫妖殘影和混沌生物會把戰線切斷；若穩定整隊推進，則能逐步抵達終末軍旗與戰後寂地，並確認撤退路線沒有被新一輪黑焰與軍魂封鎖整條戰場線。',
    exits: [
      { direction: 'west', targetRoomId: 'final_battleground_blood_rain_basin', description: '王座殘骸回到血雨盆地' },
      { direction: 'north', targetRoomId: 'final_battleground_light_sundered_bridge', description: '王旗階通往斷光橋' },
      { direction: 'east', targetRoomId: 'final_battleground_black_flame_front', description: '黑焰前線在東側' },
    ],
    monsters: [
      { monsterId: 'undead_knight', maxCount: 3, respawnSeconds: 140 },
      { monsterId: 'lich', maxCount: 1, respawnSeconds: 1800 },
    ],
    mapSymbol: '[座]',
    mapX: 4,
    mapY: 0,
    guardianHints: {
      creature: '王座殘骸的旗影若突然逆向飄動，敵軍殘影通常已經開始推進。',
      treasure: '王座殘骸的破甲、軍令或焦土裂縫旁可能藏著終焉戰場線索。',
      spirit: '王座殘骸保留著諸王與魔神最後交戰時留下的記憶。',
    },
  },

  final_battleground_demon_scar: {
    id: 'final_battleground_demon_scar',
    name: '魔神爪痕',
    zone: 'final_battleground' as RoomDef['zone'],
    image: 'final_battleground_demon_scar.png',
    imagePrompt: '魔神爪痕 in final_battleground, apocalyptic battlefield of kings and demon gods, broken banners, black fire, angelic light, siege wrecks and cracked earth, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text',
    description:
      '魔神爪痕位於終焉戰場的殘破荒原上，諸王軍旗、魔神爪痕、墜天白光與黑焰前線仍停在最後交戰的一刻，空氣中沒有風卻能聽見戰鼓回音。這裡是終局戰場與王國戰爭高危節點，玩家可以 inspect 旗幟、血雨、攻城殘骸與神傷裂縫來判斷敵軍推進方向，也能 search 王骨、軍令、破甲和祭火尋找世界王線索。若隊伍忽略側翼、裂世縫與黑焰壓力，惡魔將軍、墮天使、巫妖殘影和混沌生物會把戰線切斷；若穩定整隊推進，則能逐步抵達終末軍旗與戰後寂地，並確認撤退路線沒有被新一輪黑焰與軍魂封鎖整條戰場線。',
    exits: [
      { direction: 'west', targetRoomId: 'final_battleground_war_machine_wreck', description: '魔神爪痕回到殘骸' },
      { direction: 'east', targetRoomId: 'final_battleground_black_flame_front', description: '焦土路通往黑焰前線' },
    ],
    monsters: [
      { monsterId: 'arch_demon', maxCount: 1, respawnSeconds: 1800 },
      { monsterId: 'demon_warrior', maxCount: 2, respawnSeconds: 160 },
    ],
    mapSymbol: '[爪]',
    mapX: 3,
    mapY: -1,
    guardianHints: {
      creature: '魔神爪痕的旗影若突然逆向飄動，敵軍殘影通常已經開始推進。',
      treasure: '魔神爪痕的破甲、軍令或焦土裂縫旁可能藏著終焉戰場線索。',
      spirit: '魔神爪痕保留著諸王與魔神最後交戰時留下的記憶。',
    },
  },

  final_battleground_light_sundered_bridge: {
    id: 'final_battleground_light_sundered_bridge',
    name: '斷光橋',
    zone: 'final_battleground' as RoomDef['zone'],
    image: 'final_battleground_light_sundered_bridge.png',
    imagePrompt: '斷光橋 in final_battleground, apocalyptic battlefield of kings and demon gods, broken banners, black fire, angelic light, siege wrecks and cracked earth, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text',
    description:
      '斷光橋位於終焉戰場的殘破荒原上，諸王軍旗、魔神爪痕、墜天白光與黑焰前線仍停在最後交戰的一刻，空氣中沒有風卻能聽見戰鼓回音。這裡是終局戰場與王國戰爭高危節點，玩家可以 inspect 旗幟、血雨、攻城殘骸與神傷裂縫來判斷敵軍推進方向，也能 search 王骨、軍令、破甲和祭火尋找世界王線索。若隊伍忽略側翼、裂世縫與黑焰壓力，惡魔將軍、墮天使、巫妖殘影和混沌生物會把戰線切斷；若穩定整隊推進，則能逐步抵達終末軍旗與戰後寂地，並確認撤退路線沒有被新一輪黑焰與軍魂封鎖整條戰場線。',
    exits: [
      { direction: 'west', targetRoomId: 'final_battleground_angel_fall', description: '斷光橋回到墜天坑' },
      { direction: 'south', targetRoomId: 'final_battleground_throne_wreck', description: '王旗階回到王座殘骸' },
      { direction: 'east', targetRoomId: 'final_battleground_last_command_post', description: '末令高臺在東側' },
    ],
    monsters: [
      { monsterId: 'fallen_angel', maxCount: 1, respawnSeconds: 1800 },
      { monsterId: 'arch_demon', maxCount: 1, respawnSeconds: 1800 },
    ],
    mapSymbol: '[橋]',
    mapX: 4,
    mapY: 1,
    guardianHints: {
      creature: '斷光橋的旗影若突然逆向飄動，敵軍殘影通常已經開始推進。',
      treasure: '斷光橋的破甲、軍令或焦土裂縫旁可能藏著終焉戰場線索。',
      spirit: '斷光橋保留著諸王與魔神最後交戰時留下的記憶。',
    },
  },

  final_battleground_black_flame_front: {
    id: 'final_battleground_black_flame_front',
    name: '黑焰前線',
    zone: 'final_battleground' as RoomDef['zone'],
    image: 'final_battleground_black_flame_front.png',
    imagePrompt: '黑焰前線 in final_battleground, apocalyptic battlefield of kings and demon gods, broken banners, black fire, angelic light, siege wrecks and cracked earth, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text',
    description:
      '黑焰前線位於終焉戰場的殘破荒原上，諸王軍旗、魔神爪痕、墜天白光與黑焰前線仍停在最後交戰的一刻，空氣中沒有風卻能聽見戰鼓回音。這裡是終局戰場與王國戰爭高危節點，玩家可以 inspect 旗幟、血雨、攻城殘骸與神傷裂縫來判斷敵軍推進方向，也能 search 王骨、軍令、破甲和祭火尋找世界王線索。若隊伍忽略側翼、裂世縫與黑焰壓力，惡魔將軍、墮天使、巫妖殘影和混沌生物會把戰線切斷；若穩定整隊推進，則能逐步抵達終末軍旗與戰後寂地，並確認撤退路線沒有被新一輪黑焰與軍魂封鎖整條戰場線。',
    exits: [
      { direction: 'west', targetRoomId: 'final_battleground_throne_wreck', description: '黑焰前線回到王座殘骸' },
      { direction: 'south', targetRoomId: 'final_battleground_demon_scar', description: '焦土路回到魔神爪痕' },
      { direction: 'east', targetRoomId: 'final_battleground_worldsplit_crack', description: '裂世縫在東側' },
    ],
    monsters: [
      { monsterId: 'arch_demon', maxCount: 1, respawnSeconds: 1800 },
      { monsterId: 'fire_elemental', maxCount: 2, respawnSeconds: 140 },
    ],
    mapSymbol: '[焰]',
    mapX: 5,
    mapY: 0,
    guardianHints: {
      creature: '黑焰前線的旗影若突然逆向飄動，敵軍殘影通常已經開始推進。',
      treasure: '黑焰前線的破甲、軍令或焦土裂縫旁可能藏著終焉戰場線索。',
      spirit: '黑焰前線保留著諸王與魔神最後交戰時留下的記憶。',
    },
  },

  final_battleground_last_command_post: {
    id: 'final_battleground_last_command_post',
    name: '末令高臺',
    zone: 'final_battleground' as RoomDef['zone'],
    image: 'final_battleground_last_command_post.png',
    imagePrompt: '末令高臺 in final_battleground, apocalyptic battlefield of kings and demon gods, broken banners, black fire, angelic light, siege wrecks and cracked earth, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text',
    description:
      '末令高臺位於終焉戰場的殘破荒原上，諸王軍旗、魔神爪痕、墜天白光與黑焰前線仍停在最後交戰的一刻，空氣中沒有風卻能聽見戰鼓回音。這裡是終局戰場與王國戰爭高危節點，玩家可以 inspect 旗幟、血雨、攻城殘骸與神傷裂縫來判斷敵軍推進方向，也能 search 王骨、軍令、破甲和祭火尋找世界王線索。若隊伍忽略側翼、裂世縫與黑焰壓力，惡魔將軍、墮天使、巫妖殘影和混沌生物會把戰線切斷；若穩定整隊推進，則能逐步抵達終末軍旗與戰後寂地，並確認撤退路線沒有被新一輪黑焰與軍魂封鎖整條戰場線。',
    exits: [
      { direction: 'west', targetRoomId: 'final_battleground_light_sundered_bridge', description: '末令高臺回到斷光橋' },
      { direction: 'east', targetRoomId: 'final_battleground_crownless_field', description: '無冠戰場在東側' },
    ],
    monsters: [
      { monsterId: 'demon_general', maxCount: 1, respawnSeconds: 300 },
      { monsterId: 'undead_knight', maxCount: 2, respawnSeconds: 140 },
    ],
    mapSymbol: '[令]',
    mapX: 5,
    mapY: 1,
    guardianHints: {
      creature: '末令高臺的旗影若突然逆向飄動，敵軍殘影通常已經開始推進。',
      treasure: '末令高臺的破甲、軍令或焦土裂縫旁可能藏著終焉戰場線索。',
      spirit: '末令高臺保留著諸王與魔神最後交戰時留下的記憶。',
    },
  },

  final_battleground_worldsplit_crack: {
    id: 'final_battleground_worldsplit_crack',
    name: '裂世縫',
    zone: 'final_battleground' as RoomDef['zone'],
    image: 'final_battleground_worldsplit_crack.png',
    imagePrompt: '裂世縫 in final_battleground, apocalyptic battlefield of kings and demon gods, broken banners, black fire, angelic light, siege wrecks and cracked earth, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text',
    description:
      '裂世縫位於終焉戰場的殘破荒原上，諸王軍旗、魔神爪痕、墜天白光與黑焰前線仍停在最後交戰的一刻，空氣中沒有風卻能聽見戰鼓回音。這裡是終局戰場與王國戰爭高危節點，玩家可以 inspect 旗幟、血雨、攻城殘骸與神傷裂縫來判斷敵軍推進方向，也能 search 王骨、軍令、破甲和祭火尋找世界王線索。若隊伍忽略側翼、裂世縫與黑焰壓力，惡魔將軍、墮天使、巫妖殘影和混沌生物會把戰線切斷；若穩定整隊推進，則能逐步抵達終末軍旗與戰後寂地，並確認撤退路線沒有被新一輪黑焰與軍魂封鎖整條戰場線。',
    exits: [
      { direction: 'west', targetRoomId: 'final_battleground_black_flame_front', description: '裂世縫回到黑焰前線' },
      { direction: 'north', targetRoomId: 'final_battleground_crownless_field', description: '裂縫坡通往無冠戰場' },
      { direction: 'east', targetRoomId: 'final_battleground_godscar_core', description: '神傷核心在東側' },
    ],
    monsters: [
      { monsterId: 'arch_demon', maxCount: 1, respawnSeconds: 1800 },
      { monsterId: 'chaos_spawn', maxCount: 2, respawnSeconds: 180 },
    ],
    mapSymbol: '[裂]',
    mapX: 6,
    mapY: 0,
    guardianHints: {
      creature: '裂世縫的旗影若突然逆向飄動，敵軍殘影通常已經開始推進。',
      treasure: '裂世縫的破甲、軍令或焦土裂縫旁可能藏著終焉戰場線索。',
      spirit: '裂世縫保留著諸王與魔神最後交戰時留下的記憶。',
    },
  },

  final_battleground_crownless_field: {
    id: 'final_battleground_crownless_field',
    name: '無冠戰場',
    zone: 'final_battleground' as RoomDef['zone'],
    image: 'final_battleground_crownless_field.png',
    imagePrompt: '無冠戰場 in final_battleground, apocalyptic battlefield of kings and demon gods, broken banners, black fire, angelic light, siege wrecks and cracked earth, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text',
    description:
      '無冠戰場位於終焉戰場的殘破荒原上，諸王軍旗、魔神爪痕、墜天白光與黑焰前線仍停在最後交戰的一刻，空氣中沒有風卻能聽見戰鼓回音。這裡是終局戰場與王國戰爭高危節點，玩家可以 inspect 旗幟、血雨、攻城殘骸與神傷裂縫來判斷敵軍推進方向，也能 search 王骨、軍令、破甲和祭火尋找世界王線索。若隊伍忽略側翼、裂世縫與黑焰壓力，惡魔將軍、墮天使、巫妖殘影和混沌生物會把戰線切斷；若穩定整隊推進，則能逐步抵達終末軍旗與戰後寂地，並確認撤退路線沒有被新一輪黑焰與軍魂封鎖整條戰場線。',
    exits: [
      { direction: 'west', targetRoomId: 'final_battleground_last_command_post', description: '無冠戰場回到末令高臺' },
      { direction: 'south', targetRoomId: 'final_battleground_worldsplit_crack', description: '裂縫坡回到裂世縫' },
      { direction: 'east', targetRoomId: 'final_battleground_final_standard', description: '終末軍旗在東側' },
    ],
    monsters: [
      { monsterId: 'fallen_angel', maxCount: 1, respawnSeconds: 1800 },
      { monsterId: 'demon_general', maxCount: 1, respawnSeconds: 300 },
    ],
    mapSymbol: '[冠]',
    mapX: 6,
    mapY: 1,
    guardianHints: {
      creature: '無冠戰場的旗影若突然逆向飄動，敵軍殘影通常已經開始推進。',
      treasure: '無冠戰場的破甲、軍令或焦土裂縫旁可能藏著終焉戰場線索。',
      spirit: '無冠戰場保留著諸王與魔神最後交戰時留下的記憶。',
    },
  },

  final_battleground_godscar_core: {
    id: 'final_battleground_godscar_core',
    name: '神傷核心',
    zone: 'final_battleground' as RoomDef['zone'],
    image: 'final_battleground_godscar_core.png',
    imagePrompt: '神傷核心 in final_battleground, apocalyptic battlefield of kings and demon gods, broken banners, black fire, angelic light, siege wrecks and cracked earth, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text',
    description:
      '神傷核心位於終焉戰場的殘破荒原上，諸王軍旗、魔神爪痕、墜天白光與黑焰前線仍停在最後交戰的一刻，空氣中沒有風卻能聽見戰鼓回音。這裡是終局戰場與王國戰爭高危節點，玩家可以 inspect 旗幟、血雨、攻城殘骸與神傷裂縫來判斷敵軍推進方向，也能 search 王骨、軍令、破甲和祭火尋找世界王線索。若隊伍忽略側翼、裂世縫與黑焰壓力，惡魔將軍、墮天使、巫妖殘影和混沌生物會把戰線切斷；若穩定整隊推進，則能逐步抵達終末軍旗與戰後寂地，並確認撤退路線沒有被新一輪黑焰與軍魂封鎖整條戰場線。',
    exits: [
      { direction: 'west', targetRoomId: 'final_battleground_worldsplit_crack', description: '神傷核心回到裂世縫' },
      { direction: 'north', targetRoomId: 'final_battleground_final_standard', description: '神血階通往終末軍旗' },
    ],
    monsters: [
      { monsterId: 'demon_lord', maxCount: 1, respawnSeconds: 1800 },
      { monsterId: 'fallen_angel', maxCount: 1, respawnSeconds: 1800 },
    ],
    mapSymbol: '[核]',
    mapX: 7,
    mapY: 0,
    guardianHints: {
      creature: '神傷核心的旗影若突然逆向飄動，敵軍殘影通常已經開始推進。',
      treasure: '神傷核心的破甲、軍令或焦土裂縫旁可能藏著終焉戰場線索。',
      spirit: '神傷核心保留著諸王與魔神最後交戰時留下的記憶。',
    },
  },

  final_battleground_final_standard: {
    id: 'final_battleground_final_standard',
    name: '終末軍旗',
    zone: 'final_battleground' as RoomDef['zone'],
    image: 'final_battleground_final_standard.png',
    imagePrompt: '終末軍旗 in final_battleground, apocalyptic battlefield of kings and demon gods, broken banners, black fire, angelic light, siege wrecks and cracked earth, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text',
    description:
      '終末軍旗位於終焉戰場的殘破荒原上，諸王軍旗、魔神爪痕、墜天白光與黑焰前線仍停在最後交戰的一刻，空氣中沒有風卻能聽見戰鼓回音。這裡是終局戰場與王國戰爭高危節點，玩家可以 inspect 旗幟、血雨、攻城殘骸與神傷裂縫來判斷敵軍推進方向，也能 search 王骨、軍令、破甲和祭火尋找世界王線索。若隊伍忽略側翼、裂世縫與黑焰壓力，惡魔將軍、墮天使、巫妖殘影和混沌生物會把戰線切斷；若穩定整隊推進，則能逐步抵達終末軍旗與戰後寂地，並確認撤退路線沒有被新一輪黑焰與軍魂封鎖整條戰場線。',
    exits: [
      { direction: 'west', targetRoomId: 'final_battleground_crownless_field', description: '終末軍旗回到無冠戰場' },
      { direction: 'south', targetRoomId: 'final_battleground_godscar_core', description: '神血階回到神傷核心' },
      { direction: 'east', targetRoomId: 'final_battleground_silence_after_war', description: '戰後寂地在東側' },
    ],
    monsters: [
      { monsterId: 'demon_lord', maxCount: 1, respawnSeconds: 1800 },
      { monsterId: 'arch_demon', maxCount: 1, respawnSeconds: 1800 },
      { monsterId: 'fallen_angel', maxCount: 1, respawnSeconds: 1800 },
    ],
    mapSymbol: '[旗]',
    mapX: 8,
    mapY: 0,
    guardianHints: {
      creature: '終末軍旗的旗影若突然逆向飄動，敵軍殘影通常已經開始推進。',
      treasure: '終末軍旗的破甲、軍令或焦土裂縫旁可能藏著終焉戰場線索。',
      spirit: '終末軍旗保留著諸王與魔神最後交戰時留下的記憶。',
    },
  },

  final_battleground_silence_after_war: {
    id: 'final_battleground_silence_after_war',
    name: '戰後寂地',
    zone: 'final_battleground' as RoomDef['zone'],
    image: 'final_battleground_silence_after_war.png',
    imagePrompt: '戰後寂地 in final_battleground, apocalyptic battlefield of kings and demon gods, broken banners, black fire, angelic light, siege wrecks and cracked earth, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text',
    description:
      '戰後寂地位於終焉戰場的殘破荒原上，諸王軍旗、魔神爪痕、墜天白光與黑焰前線仍停在最後交戰的一刻，空氣中沒有風卻能聽見戰鼓回音。這裡是終局戰場與王國戰爭高危節點，玩家可以 inspect 旗幟、血雨、攻城殘骸與神傷裂縫來判斷敵軍推進方向，也能 search 王骨、軍令、破甲和祭火尋找世界王線索。若隊伍忽略側翼、裂世縫與黑焰壓力，惡魔將軍、墮天使、巫妖殘影和混沌生物會把戰線切斷；若穩定整隊推進，則能逐步抵達終末軍旗與戰後寂地，並確認撤退路線沒有被新一輪黑焰與軍魂封鎖整條戰場線。',
    exits: [
      { direction: 'west', targetRoomId: 'final_battleground_final_standard', description: '戰後寂地回到終末軍旗' },
    ],
    monsters: [
      { monsterId: 'demon_lord', maxCount: 1, respawnSeconds: 1800 },
      { monsterId: 'chaos_spawn', maxCount: 2, respawnSeconds: 180 },
    ],
    mapSymbol: '[寂]',
    mapX: 9,
    mapY: 0,
    guardianHints: {
      creature: '戰後寂地的旗影若突然逆向飄動，敵軍殘影通常已經開始推進。',
      treasure: '戰後寂地的破甲、軍令或焦土裂縫旁可能藏著終焉戰場線索。',
      spirit: '戰後寂地保留著諸王與魔神最後交戰時留下的記憶。',
    },
  },
  moonlit_fen_reed_gate: {
    id: 'moonlit_fen_reed_gate',
    name: '蘆葦入口',
    zone: 'moonlit_fen' as RoomDef['zone'],
    image: 'moonlit_fen_reed_gate.png',
    imagePrompt: '蘆葦入口 in moonlit_fen, silver moonlit wetland with reeds, glowing night flowers, fireflies, shallow black water, moss and fae lights, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text',
    description:
      '蘆葦入口位於月光濕地的銀色水道與夜花叢之間，水面映著常年不散的月光，蘆葦、燈苔、螢火與黑水流把安全路線切成許多細小分岔。這裡是低中階野外、採集與釣魚混合節點，玩家可以 gather 夜花、燈苔、毒腺與濕地草藥，也能 inspect 水紋、蛛絲、蛙鳴和妖光來判斷巡行怪物位置。若隊伍忽略泥沼深度或月光倒影，毒蛙、毒蛇、蜘蛛、史萊姆與女巫會從蘆葦後伏擊；若穩定標記白蘆與舊舟路線，則能逐步靠近月沼祭壇與夢水核心，並確認每次採集後水位、月光倒影與回程蘆葦標記仍然可靠清楚，避免迷失於銀霧深處。',
    exits: [
      { direction: 'east', targetRoomId: 'moonlit_fen_moonflower_bank', description: '月花岸在東側' },
      { direction: 'north', targetRoomId: 'moonlit_fen_firefly_pool', description: '螢火池在北側' },
    ],
    monsters: [
      { monsterId: 'green_slime', maxCount: 2, respawnSeconds: 55 },
    ],
    mapSymbol: '[門]',
    mapX: 0,
    mapY: 0,
    guardianHints: {
      creature: '蘆葦入口的水面若沒有倒影，濕地生物通常已經潛到附近。',
      treasure: '蘆葦入口的夜花、燈苔或舊舟痕旁可能藏著月光濕地採集線索。',
      spirit: '蘆葦入口保留著濕地在銀月照耀下孕育夜花與妖光的記憶。',
    },
  },

  moonlit_fen_moonflower_bank: {
    id: 'moonlit_fen_moonflower_bank',
    name: '月花岸',
    zone: 'moonlit_fen' as RoomDef['zone'],
    image: 'moonlit_fen_moonflower_bank.png',
    imagePrompt: '月花岸 in moonlit_fen, silver moonlit wetland with reeds, glowing night flowers, fireflies, shallow black water, moss and fae lights, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text',
    description:
      '月花岸位於月光濕地的銀色水道與夜花叢之間，水面映著常年不散的月光，蘆葦、燈苔、螢火與黑水流把安全路線切成許多細小分岔。這裡是低中階野外、採集與釣魚混合節點，玩家可以 gather 夜花、燈苔、毒腺與濕地草藥，也能 inspect 水紋、蛛絲、蛙鳴和妖光來判斷巡行怪物位置。若隊伍忽略泥沼深度或月光倒影，毒蛙、毒蛇、蜘蛛、史萊姆與女巫會從蘆葦後伏擊；若穩定標記白蘆與舊舟路線，則能逐步靠近月沼祭壇與夢水核心，並確認每次採集後水位、月光倒影與回程蘆葦標記仍然可靠清楚，避免迷失於銀霧深處。',
    exits: [
      { direction: 'west', targetRoomId: 'moonlit_fen_reed_gate', description: '月花岸回到蘆葦入口' },
      { direction: 'east', targetRoomId: 'moonlit_fen_silver_mire', description: '銀泥沼在東側' },
      { direction: 'south', targetRoomId: 'moonlit_fen_fishing_cut', description: '釣水缺口向南延伸' },
    ],
    monsters: [
      { monsterId: 'green_slime', maxCount: 2, respawnSeconds: 55 },
      { monsterId: 'poison_toad', maxCount: 1, respawnSeconds: 70 },
    ],
    mapSymbol: '[花]',
    mapX: 1,
    mapY: 0,
    guardianHints: {
      creature: '月花岸的水面若沒有倒影，濕地生物通常已經潛到附近。',
      treasure: '月花岸的夜花、燈苔或舊舟痕旁可能藏著月光濕地採集線索。',
      spirit: '月花岸保留著濕地在銀月照耀下孕育夜花與妖光的記憶。',
    },
  },

  moonlit_fen_firefly_pool: {
    id: 'moonlit_fen_firefly_pool',
    name: '螢火池',
    zone: 'moonlit_fen' as RoomDef['zone'],
    image: 'moonlit_fen_firefly_pool.png',
    imagePrompt: '螢火池 in moonlit_fen, silver moonlit wetland with reeds, glowing night flowers, fireflies, shallow black water, moss and fae lights, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text',
    description:
      '螢火池位於月光濕地的銀色水道與夜花叢之間，水面映著常年不散的月光，蘆葦、燈苔、螢火與黑水流把安全路線切成許多細小分岔。這裡是低中階野外、採集與釣魚混合節點，玩家可以 gather 夜花、燈苔、毒腺與濕地草藥，也能 inspect 水紋、蛛絲、蛙鳴和妖光來判斷巡行怪物位置。若隊伍忽略泥沼深度或月光倒影，毒蛙、毒蛇、蜘蛛、史萊姆與女巫會從蘆葦後伏擊；若穩定標記白蘆與舊舟路線，則能逐步靠近月沼祭壇與夢水核心，並確認每次採集後水位、月光倒影與回程蘆葦標記仍然可靠清楚，避免迷失於銀霧深處。',
    exits: [
      { direction: 'south', targetRoomId: 'moonlit_fen_reed_gate', description: '螢火池回到蘆葦入口' },
      { direction: 'east', targetRoomId: 'moonlit_fen_willow_hush', description: '靜柳叢在東側' },
    ],
    monsters: [
      { monsterId: 'blue_slime', maxCount: 2, respawnSeconds: 70 },
      { monsterId: 'jellyfish', maxCount: 1, respawnSeconds: 80 },
    ],
    mapSymbol: '[螢]',
    mapX: 0,
    mapY: 1,
    guardianHints: {
      creature: '螢火池的水面若沒有倒影，濕地生物通常已經潛到附近。',
      treasure: '螢火池的夜花、燈苔或舊舟痕旁可能藏著月光濕地採集線索。',
      spirit: '螢火池保留著濕地在銀月照耀下孕育夜花與妖光的記憶。',
    },
  },

  moonlit_fen_willow_hush: {
    id: 'moonlit_fen_willow_hush',
    name: '靜柳叢',
    zone: 'moonlit_fen' as RoomDef['zone'],
    image: 'moonlit_fen_willow_hush.png',
    imagePrompt: '靜柳叢 in moonlit_fen, silver moonlit wetland with reeds, glowing night flowers, fireflies, shallow black water, moss and fae lights, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text',
    description:
      '靜柳叢位於月光濕地的銀色水道與夜花叢之間，水面映著常年不散的月光，蘆葦、燈苔、螢火與黑水流把安全路線切成許多細小分岔。這裡是低中階野外、採集與釣魚混合節點，玩家可以 gather 夜花、燈苔、毒腺與濕地草藥，也能 inspect 水紋、蛛絲、蛙鳴和妖光來判斷巡行怪物位置。若隊伍忽略泥沼深度或月光倒影，毒蛙、毒蛇、蜘蛛、史萊姆與女巫會從蘆葦後伏擊；若穩定標記白蘆與舊舟路線，則能逐步靠近月沼祭壇與夢水核心，並確認每次採集後水位、月光倒影與回程蘆葦標記仍然可靠清楚，避免迷失於銀霧深處。',
    exits: [
      { direction: 'west', targetRoomId: 'moonlit_fen_firefly_pool', description: '靜柳叢回到螢火池' },
      { direction: 'east', targetRoomId: 'moonlit_fen_glimmer_ford', description: '微光淺灘在東側' },
      { direction: 'south', targetRoomId: 'moonlit_fen_silver_mire', description: '柳根路落向銀泥沼' },
    ],
    monsters: [
      { monsterId: 'poison_snake', maxCount: 2, respawnSeconds: 70 },
      { monsterId: 'forest_spider', maxCount: 1, respawnSeconds: 80 },
    ],
    mapSymbol: '[柳]',
    mapX: 1,
    mapY: 1,
    guardianHints: {
      creature: '靜柳叢的水面若沒有倒影，濕地生物通常已經潛到附近。',
      treasure: '靜柳叢的夜花、燈苔或舊舟痕旁可能藏著月光濕地採集線索。',
      spirit: '靜柳叢保留著濕地在銀月照耀下孕育夜花與妖光的記憶。',
    },
  },

  moonlit_fen_silver_mire: {
    id: 'moonlit_fen_silver_mire',
    name: '銀泥沼',
    zone: 'moonlit_fen' as RoomDef['zone'],
    image: 'moonlit_fen_silver_mire.png',
    imagePrompt: '銀泥沼 in moonlit_fen, silver moonlit wetland with reeds, glowing night flowers, fireflies, shallow black water, moss and fae lights, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text',
    description:
      '銀泥沼位於月光濕地的銀色水道與夜花叢之間，水面映著常年不散的月光，蘆葦、燈苔、螢火與黑水流把安全路線切成許多細小分岔。這裡是低中階野外、採集與釣魚混合節點，玩家可以 gather 夜花、燈苔、毒腺與濕地草藥，也能 inspect 水紋、蛛絲、蛙鳴和妖光來判斷巡行怪物位置。若隊伍忽略泥沼深度或月光倒影，毒蛙、毒蛇、蜘蛛、史萊姆與女巫會從蘆葦後伏擊；若穩定標記白蘆與舊舟路線，則能逐步靠近月沼祭壇與夢水核心，並確認每次採集後水位、月光倒影與回程蘆葦標記仍然可靠清楚，避免迷失於銀霧深處。',
    exits: [
      { direction: 'west', targetRoomId: 'moonlit_fen_moonflower_bank', description: '銀泥沼回到月花岸' },
      { direction: 'north', targetRoomId: 'moonlit_fen_willow_hush', description: '柳根路回到靜柳叢' },
      { direction: 'east', targetRoomId: 'moonlit_fen_frog_choir', description: '蛙鳴洲在東側' },
    ],
    monsters: [
      { monsterId: 'poison_toad', maxCount: 2, respawnSeconds: 70 },
      { monsterId: 'green_slime', maxCount: 2, respawnSeconds: 55 },
    ],
    mapSymbol: '[泥]',
    mapX: 2,
    mapY: 0,
    guardianHints: {
      creature: '銀泥沼的水面若沒有倒影，濕地生物通常已經潛到附近。',
      treasure: '銀泥沼的夜花、燈苔或舊舟痕旁可能藏著月光濕地採集線索。',
      spirit: '銀泥沼保留著濕地在銀月照耀下孕育夜花與妖光的記憶。',
    },
  },

  moonlit_fen_fishing_cut: {
    id: 'moonlit_fen_fishing_cut',
    name: '釣水缺口',
    zone: 'moonlit_fen' as RoomDef['zone'],
    image: 'moonlit_fen_fishing_cut.png',
    imagePrompt: '釣水缺口 in moonlit_fen, silver moonlit wetland with reeds, glowing night flowers, fireflies, shallow black water, moss and fae lights, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text',
    description:
      '釣水缺口位於月光濕地的銀色水道與夜花叢之間，水面映著常年不散的月光，蘆葦、燈苔、螢火與黑水流把安全路線切成許多細小分岔。這裡是低中階野外、採集與釣魚混合節點，玩家可以 gather 夜花、燈苔、毒腺與濕地草藥，也能 inspect 水紋、蛛絲、蛙鳴和妖光來判斷巡行怪物位置。若隊伍忽略泥沼深度或月光倒影，毒蛙、毒蛇、蜘蛛、史萊姆與女巫會從蘆葦後伏擊；若穩定標記白蘆與舊舟路線，則能逐步靠近月沼祭壇與夢水核心，並確認每次採集後水位、月光倒影與回程蘆葦標記仍然可靠清楚，避免迷失於銀霧深處。',
    exits: [
      { direction: 'north', targetRoomId: 'moonlit_fen_moonflower_bank', description: '釣水缺口回到月花岸' },
      { direction: 'east', targetRoomId: 'moonlit_fen_mosquito_haze', description: '蚊霧溝在東側' },
    ],
    monsters: [
      { monsterId: 'blue_slime', maxCount: 2, respawnSeconds: 70 },
      { monsterId: 'poison_snake', maxCount: 1, respawnSeconds: 70 },
    ],
    mapSymbol: '[釣]',
    mapX: 1,
    mapY: -1,
    guardianHints: {
      creature: '釣水缺口的水面若沒有倒影，濕地生物通常已經潛到附近。',
      treasure: '釣水缺口的夜花、燈苔或舊舟痕旁可能藏著月光濕地採集線索。',
      spirit: '釣水缺口保留著濕地在銀月照耀下孕育夜花與妖光的記憶。',
    },
  },

  moonlit_fen_glimmer_ford: {
    id: 'moonlit_fen_glimmer_ford',
    name: '微光淺灘',
    zone: 'moonlit_fen' as RoomDef['zone'],
    image: 'moonlit_fen_glimmer_ford.png',
    imagePrompt: '微光淺灘 in moonlit_fen, silver moonlit wetland with reeds, glowing night flowers, fireflies, shallow black water, moss and fae lights, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text',
    description:
      '微光淺灘位於月光濕地的銀色水道與夜花叢之間，水面映著常年不散的月光，蘆葦、燈苔、螢火與黑水流把安全路線切成許多細小分岔。這裡是低中階野外、採集與釣魚混合節點，玩家可以 gather 夜花、燈苔、毒腺與濕地草藥，也能 inspect 水紋、蛛絲、蛙鳴和妖光來判斷巡行怪物位置。若隊伍忽略泥沼深度或月光倒影，毒蛙、毒蛇、蜘蛛、史萊姆與女巫會從蘆葦後伏擊；若穩定標記白蘆與舊舟路線，則能逐步靠近月沼祭壇與夢水核心，並確認每次採集後水位、月光倒影與回程蘆葦標記仍然可靠清楚，避免迷失於銀霧深處。',
    exits: [
      { direction: 'west', targetRoomId: 'moonlit_fen_willow_hush', description: '微光淺灘回到靜柳叢' },
      { direction: 'east', targetRoomId: 'moonlit_fen_night_bloom_grove', description: '夜花小林在東側' },
    ],
    monsters: [
      { monsterId: 'jellyfish', maxCount: 2, respawnSeconds: 80 },
      { monsterId: 'poison_toad', maxCount: 1, respawnSeconds: 70 },
    ],
    mapSymbol: '[灘]',
    mapX: 2,
    mapY: 1,
    guardianHints: {
      creature: '微光淺灘的水面若沒有倒影，濕地生物通常已經潛到附近。',
      treasure: '微光淺灘的夜花、燈苔或舊舟痕旁可能藏著月光濕地採集線索。',
      spirit: '微光淺灘保留著濕地在銀月照耀下孕育夜花與妖光的記憶。',
    },
  },

  moonlit_fen_frog_choir: {
    id: 'moonlit_fen_frog_choir',
    name: '蛙鳴洲',
    zone: 'moonlit_fen' as RoomDef['zone'],
    image: 'moonlit_fen_frog_choir.png',
    imagePrompt: '蛙鳴洲 in moonlit_fen, silver moonlit wetland with reeds, glowing night flowers, fireflies, shallow black water, moss and fae lights, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text',
    description:
      '蛙鳴洲位於月光濕地的銀色水道與夜花叢之間，水面映著常年不散的月光，蘆葦、燈苔、螢火與黑水流把安全路線切成許多細小分岔。這裡是低中階野外、採集與釣魚混合節點，玩家可以 gather 夜花、燈苔、毒腺與濕地草藥，也能 inspect 水紋、蛛絲、蛙鳴和妖光來判斷巡行怪物位置。若隊伍忽略泥沼深度或月光倒影，毒蛙、毒蛇、蜘蛛、史萊姆與女巫會從蘆葦後伏擊；若穩定標記白蘆與舊舟路線，則能逐步靠近月沼祭壇與夢水核心，並確認每次採集後水位、月光倒影與回程蘆葦標記仍然可靠清楚，避免迷失於銀霧深處。',
    exits: [
      { direction: 'west', targetRoomId: 'moonlit_fen_silver_mire', description: '蛙鳴洲回到銀泥沼' },
      { direction: 'east', targetRoomId: 'moonlit_fen_lantern_moss', description: '燈苔坡在東側' },
      { direction: 'south', targetRoomId: 'moonlit_fen_mosquito_haze', description: '濕草道落向蚊霧溝' },
    ],
    monsters: [
      { monsterId: 'poison_toad', maxCount: 3, respawnSeconds: 70 },
      { monsterId: 'giant_spider', maxCount: 1, respawnSeconds: 120 },
    ],
    mapSymbol: '[蛙]',
    mapX: 3,
    mapY: 0,
    guardianHints: {
      creature: '蛙鳴洲的水面若沒有倒影，濕地生物通常已經潛到附近。',
      treasure: '蛙鳴洲的夜花、燈苔或舊舟痕旁可能藏著月光濕地採集線索。',
      spirit: '蛙鳴洲保留著濕地在銀月照耀下孕育夜花與妖光的記憶。',
    },
  },

  moonlit_fen_mosquito_haze: {
    id: 'moonlit_fen_mosquito_haze',
    name: '蚊霧溝',
    zone: 'moonlit_fen' as RoomDef['zone'],
    image: 'moonlit_fen_mosquito_haze.png',
    imagePrompt: '蚊霧溝 in moonlit_fen, silver moonlit wetland with reeds, glowing night flowers, fireflies, shallow black water, moss and fae lights, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text',
    description:
      '蚊霧溝位於月光濕地的銀色水道與夜花叢之間，水面映著常年不散的月光，蘆葦、燈苔、螢火與黑水流把安全路線切成許多細小分岔。這裡是低中階野外、採集與釣魚混合節點，玩家可以 gather 夜花、燈苔、毒腺與濕地草藥，也能 inspect 水紋、蛛絲、蛙鳴和妖光來判斷巡行怪物位置。若隊伍忽略泥沼深度或月光倒影，毒蛙、毒蛇、蜘蛛、史萊姆與女巫會從蘆葦後伏擊；若穩定標記白蘆與舊舟路線，則能逐步靠近月沼祭壇與夢水核心，並確認每次採集後水位、月光倒影與回程蘆葦標記仍然可靠清楚，避免迷失於銀霧深處。',
    exits: [
      { direction: 'west', targetRoomId: 'moonlit_fen_fishing_cut', description: '蚊霧溝回到釣水缺口' },
      { direction: 'north', targetRoomId: 'moonlit_fen_frog_choir', description: '濕草道回到蛙鳴洲' },
      { direction: 'east', targetRoomId: 'moonlit_fen_blackwater_run', description: '黑水流在東側' },
    ],
    monsters: [
      { monsterId: 'forest_spider', maxCount: 2, respawnSeconds: 80 },
      { monsterId: 'poison_snake', maxCount: 2, respawnSeconds: 70 },
    ],
    mapSymbol: '[霧]',
    mapX: 2,
    mapY: -1,
    guardianHints: {
      creature: '蚊霧溝的水面若沒有倒影，濕地生物通常已經潛到附近。',
      treasure: '蚊霧溝的夜花、燈苔或舊舟痕旁可能藏著月光濕地採集線索。',
      spirit: '蚊霧溝保留著濕地在銀月照耀下孕育夜花與妖光的記憶。',
    },
  },

  moonlit_fen_night_bloom_grove: {
    id: 'moonlit_fen_night_bloom_grove',
    name: '夜花小林',
    zone: 'moonlit_fen' as RoomDef['zone'],
    image: 'moonlit_fen_night_bloom_grove.png',
    imagePrompt: '夜花小林 in moonlit_fen, silver moonlit wetland with reeds, glowing night flowers, fireflies, shallow black water, moss and fae lights, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text',
    description:
      '夜花小林位於月光濕地的銀色水道與夜花叢之間，水面映著常年不散的月光，蘆葦、燈苔、螢火與黑水流把安全路線切成許多細小分岔。這裡是低中階野外、採集與釣魚混合節點，玩家可以 gather 夜花、燈苔、毒腺與濕地草藥，也能 inspect 水紋、蛛絲、蛙鳴和妖光來判斷巡行怪物位置。若隊伍忽略泥沼深度或月光倒影，毒蛙、毒蛇、蜘蛛、史萊姆與女巫會從蘆葦後伏擊；若穩定標記白蘆與舊舟路線，則能逐步靠近月沼祭壇與夢水核心，並確認每次採集後水位、月光倒影與回程蘆葦標記仍然可靠清楚，避免迷失於銀霧深處。',
    exits: [
      { direction: 'west', targetRoomId: 'moonlit_fen_glimmer_ford', description: '夜花小林回到微光淺灘' },
      { direction: 'east', targetRoomId: 'moonlit_fen_fae_ring', description: '妖光環在東側' },
    ],
    monsters: [
      { monsterId: 'forest_spider', maxCount: 2, respawnSeconds: 80 },
      { monsterId: 'treant', maxCount: 1, respawnSeconds: 110 },
    ],
    mapSymbol: '[夜]',
    mapX: 3,
    mapY: 1,
    guardianHints: {
      creature: '夜花小林的水面若沒有倒影，濕地生物通常已經潛到附近。',
      treasure: '夜花小林的夜花、燈苔或舊舟痕旁可能藏著月光濕地採集線索。',
      spirit: '夜花小林保留著濕地在銀月照耀下孕育夜花與妖光的記憶。',
    },
  },

  moonlit_fen_lantern_moss: {
    id: 'moonlit_fen_lantern_moss',
    name: '燈苔坡',
    zone: 'moonlit_fen' as RoomDef['zone'],
    image: 'moonlit_fen_lantern_moss.png',
    imagePrompt: '燈苔坡 in moonlit_fen, silver moonlit wetland with reeds, glowing night flowers, fireflies, shallow black water, moss and fae lights, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text',
    description:
      '燈苔坡位於月光濕地的銀色水道與夜花叢之間，水面映著常年不散的月光，蘆葦、燈苔、螢火與黑水流把安全路線切成許多細小分岔。這裡是低中階野外、採集與釣魚混合節點，玩家可以 gather 夜花、燈苔、毒腺與濕地草藥，也能 inspect 水紋、蛛絲、蛙鳴和妖光來判斷巡行怪物位置。若隊伍忽略泥沼深度或月光倒影，毒蛙、毒蛇、蜘蛛、史萊姆與女巫會從蘆葦後伏擊；若穩定標記白蘆與舊舟路線，則能逐步靠近月沼祭壇與夢水核心，並確認每次採集後水位、月光倒影與回程蘆葦標記仍然可靠清楚，避免迷失於銀霧深處。',
    exits: [
      { direction: 'west', targetRoomId: 'moonlit_fen_frog_choir', description: '燈苔坡回到蛙鳴洲' },
      { direction: 'north', targetRoomId: 'moonlit_fen_fae_ring', description: '苔光路通往妖光環' },
      { direction: 'east', targetRoomId: 'moonlit_fen_halfmoon_pond', description: '半月池在東側' },
    ],
    monsters: [
      { monsterId: 'green_slime', maxCount: 3, respawnSeconds: 55 },
      { monsterId: 'forest_spider', maxCount: 1, respawnSeconds: 80 },
    ],
    mapSymbol: '[苔]',
    mapX: 4,
    mapY: 0,
    guardianHints: {
      creature: '燈苔坡的水面若沒有倒影，濕地生物通常已經潛到附近。',
      treasure: '燈苔坡的夜花、燈苔或舊舟痕旁可能藏著月光濕地採集線索。',
      spirit: '燈苔坡保留著濕地在銀月照耀下孕育夜花與妖光的記憶。',
    },
  },

  moonlit_fen_blackwater_run: {
    id: 'moonlit_fen_blackwater_run',
    name: '黑水流',
    zone: 'moonlit_fen' as RoomDef['zone'],
    image: 'moonlit_fen_blackwater_run.png',
    imagePrompt: '黑水流 in moonlit_fen, silver moonlit wetland with reeds, glowing night flowers, fireflies, shallow black water, moss and fae lights, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text',
    description:
      '黑水流位於月光濕地的銀色水道與夜花叢之間，水面映著常年不散的月光，蘆葦、燈苔、螢火與黑水流把安全路線切成許多細小分岔。這裡是低中階野外、採集與釣魚混合節點，玩家可以 gather 夜花、燈苔、毒腺與濕地草藥，也能 inspect 水紋、蛛絲、蛙鳴和妖光來判斷巡行怪物位置。若隊伍忽略泥沼深度或月光倒影，毒蛙、毒蛇、蜘蛛、史萊姆與女巫會從蘆葦後伏擊；若穩定標記白蘆與舊舟路線，則能逐步靠近月沼祭壇與夢水核心，並確認每次採集後水位、月光倒影與回程蘆葦標記仍然可靠清楚，避免迷失於銀霧深處。',
    exits: [
      { direction: 'west', targetRoomId: 'moonlit_fen_mosquito_haze', description: '黑水流回到蚊霧溝' },
      { direction: 'east', targetRoomId: 'moonlit_fen_sunken_log_bridge', description: '沉木橋在東側' },
    ],
    monsters: [
      { monsterId: 'blue_slime', maxCount: 2, respawnSeconds: 70 },
      { monsterId: 'poison_snake', maxCount: 2, respawnSeconds: 70 },
    ],
    mapSymbol: '[水]',
    mapX: 3,
    mapY: -1,
    guardianHints: {
      creature: '黑水流的水面若沒有倒影，濕地生物通常已經潛到附近。',
      treasure: '黑水流的夜花、燈苔或舊舟痕旁可能藏著月光濕地採集線索。',
      spirit: '黑水流保留著濕地在銀月照耀下孕育夜花與妖光的記憶。',
    },
  },

  moonlit_fen_fae_ring: {
    id: 'moonlit_fen_fae_ring',
    name: '妖光環',
    zone: 'moonlit_fen' as RoomDef['zone'],
    image: 'moonlit_fen_fae_ring.png',
    imagePrompt: '妖光環 in moonlit_fen, silver moonlit wetland with reeds, glowing night flowers, fireflies, shallow black water, moss and fae lights, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text',
    description:
      '妖光環位於月光濕地的銀色水道與夜花叢之間，水面映著常年不散的月光，蘆葦、燈苔、螢火與黑水流把安全路線切成許多細小分岔。這裡是低中階野外、採集與釣魚混合節點，玩家可以 gather 夜花、燈苔、毒腺與濕地草藥，也能 inspect 水紋、蛛絲、蛙鳴和妖光來判斷巡行怪物位置。若隊伍忽略泥沼深度或月光倒影，毒蛙、毒蛇、蜘蛛、史萊姆與女巫會從蘆葦後伏擊；若穩定標記白蘆與舊舟路線，則能逐步靠近月沼祭壇與夢水核心，並確認每次採集後水位、月光倒影與回程蘆葦標記仍然可靠清楚，避免迷失於銀霧深處。',
    exits: [
      { direction: 'west', targetRoomId: 'moonlit_fen_night_bloom_grove', description: '妖光環回到夜花小林' },
      { direction: 'south', targetRoomId: 'moonlit_fen_lantern_moss', description: '苔光路回到燈苔坡' },
      { direction: 'east', targetRoomId: 'moonlit_fen_moonwell', description: '月井在東側' },
    ],
    monsters: [
      { monsterId: 'forest_witch', maxCount: 1, respawnSeconds: 1800 },
      { monsterId: 'treant', maxCount: 1, respawnSeconds: 110 },
    ],
    mapSymbol: '[妖]',
    mapX: 4,
    mapY: 1,
    guardianHints: {
      creature: '妖光環的水面若沒有倒影，濕地生物通常已經潛到附近。',
      treasure: '妖光環的夜花、燈苔或舊舟痕旁可能藏著月光濕地採集線索。',
      spirit: '妖光環保留著濕地在銀月照耀下孕育夜花與妖光的記憶。',
    },
  },

  moonlit_fen_halfmoon_pond: {
    id: 'moonlit_fen_halfmoon_pond',
    name: '半月池',
    zone: 'moonlit_fen' as RoomDef['zone'],
    image: 'moonlit_fen_halfmoon_pond.png',
    imagePrompt: '半月池 in moonlit_fen, silver moonlit wetland with reeds, glowing night flowers, fireflies, shallow black water, moss and fae lights, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text',
    description:
      '半月池位於月光濕地的銀色水道與夜花叢之間，水面映著常年不散的月光，蘆葦、燈苔、螢火與黑水流把安全路線切成許多細小分岔。這裡是低中階野外、採集與釣魚混合節點，玩家可以 gather 夜花、燈苔、毒腺與濕地草藥，也能 inspect 水紋、蛛絲、蛙鳴和妖光來判斷巡行怪物位置。若隊伍忽略泥沼深度或月光倒影，毒蛙、毒蛇、蜘蛛、史萊姆與女巫會從蘆葦後伏擊；若穩定標記白蘆與舊舟路線，則能逐步靠近月沼祭壇與夢水核心，並確認每次採集後水位、月光倒影與回程蘆葦標記仍然可靠清楚，避免迷失於銀霧深處。',
    exits: [
      { direction: 'west', targetRoomId: 'moonlit_fen_lantern_moss', description: '半月池回到燈苔坡' },
      { direction: 'east', targetRoomId: 'moonlit_fen_white_reed_maze', description: '白蘆迷道在東側' },
    ],
    monsters: [
      { monsterId: 'jellyfish', maxCount: 2, respawnSeconds: 80 },
      { monsterId: 'poison_toad', maxCount: 2, respawnSeconds: 70 },
    ],
    mapSymbol: '[半]',
    mapX: 5,
    mapY: 0,
    guardianHints: {
      creature: '半月池的水面若沒有倒影，濕地生物通常已經潛到附近。',
      treasure: '半月池的夜花、燈苔或舊舟痕旁可能藏著月光濕地採集線索。',
      spirit: '半月池保留著濕地在銀月照耀下孕育夜花與妖光的記憶。',
    },
  },

  moonlit_fen_sunken_log_bridge: {
    id: 'moonlit_fen_sunken_log_bridge',
    name: '沉木橋',
    zone: 'moonlit_fen' as RoomDef['zone'],
    image: 'moonlit_fen_sunken_log_bridge.png',
    imagePrompt: '沉木橋 in moonlit_fen, silver moonlit wetland with reeds, glowing night flowers, fireflies, shallow black water, moss and fae lights, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text',
    description:
      '沉木橋位於月光濕地的銀色水道與夜花叢之間，水面映著常年不散的月光，蘆葦、燈苔、螢火與黑水流把安全路線切成許多細小分岔。這裡是低中階野外、採集與釣魚混合節點，玩家可以 gather 夜花、燈苔、毒腺與濕地草藥，也能 inspect 水紋、蛛絲、蛙鳴和妖光來判斷巡行怪物位置。若隊伍忽略泥沼深度或月光倒影，毒蛙、毒蛇、蜘蛛、史萊姆與女巫會從蘆葦後伏擊；若穩定標記白蘆與舊舟路線，則能逐步靠近月沼祭壇與夢水核心，並確認每次採集後水位、月光倒影與回程蘆葦標記仍然可靠清楚，避免迷失於銀霧深處。',
    exits: [
      { direction: 'west', targetRoomId: 'moonlit_fen_blackwater_run', description: '沉木橋回到黑水流' },
      { direction: 'east', targetRoomId: 'moonlit_fen_old_canoe_camp', description: '舊舟營在東側' },
    ],
    monsters: [
      { monsterId: 'giant_spider', maxCount: 1, respawnSeconds: 120 },
      { monsterId: 'poison_snake', maxCount: 2, respawnSeconds: 70 },
    ],
    mapSymbol: '[橋]',
    mapX: 4,
    mapY: -1,
    guardianHints: {
      creature: '沉木橋的水面若沒有倒影，濕地生物通常已經潛到附近。',
      treasure: '沉木橋的夜花、燈苔或舊舟痕旁可能藏著月光濕地採集線索。',
      spirit: '沉木橋保留著濕地在銀月照耀下孕育夜花與妖光的記憶。',
    },
  },

  moonlit_fen_moonwell: {
    id: 'moonlit_fen_moonwell',
    name: '月井',
    zone: 'moonlit_fen' as RoomDef['zone'],
    image: 'moonlit_fen_moonwell.png',
    imagePrompt: '月井 in moonlit_fen, silver moonlit wetland with reeds, glowing night flowers, fireflies, shallow black water, moss and fae lights, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text',
    description:
      '月井位於月光濕地的銀色水道與夜花叢之間，水面映著常年不散的月光，蘆葦、燈苔、螢火與黑水流把安全路線切成許多細小分岔。這裡是低中階野外、採集與釣魚混合節點，玩家可以 gather 夜花、燈苔、毒腺與濕地草藥，也能 inspect 水紋、蛛絲、蛙鳴和妖光來判斷巡行怪物位置。若隊伍忽略泥沼深度或月光倒影，毒蛙、毒蛇、蜘蛛、史萊姆與女巫會從蘆葦後伏擊；若穩定標記白蘆與舊舟路線，則能逐步靠近月沼祭壇與夢水核心，並確認每次採集後水位、月光倒影與回程蘆葦標記仍然可靠清楚，避免迷失於銀霧深處。',
    exits: [
      { direction: 'west', targetRoomId: 'moonlit_fen_fae_ring', description: '月井回到妖光環' },
      { direction: 'south', targetRoomId: 'moonlit_fen_white_reed_maze', description: '井邊路落向白蘆迷道' },
    ],
    monsters: [
      { monsterId: 'forest_witch', maxCount: 1, respawnSeconds: 1800 },
      { monsterId: 'jellyfish', maxCount: 2, respawnSeconds: 80 },
    ],
    mapSymbol: '[井]',
    mapX: 5,
    mapY: 1,
    guardianHints: {
      creature: '月井的水面若沒有倒影，濕地生物通常已經潛到附近。',
      treasure: '月井的夜花、燈苔或舊舟痕旁可能藏著月光濕地採集線索。',
      spirit: '月井保留著濕地在銀月照耀下孕育夜花與妖光的記憶。',
    },
  },

  moonlit_fen_white_reed_maze: {
    id: 'moonlit_fen_white_reed_maze',
    name: '白蘆迷道',
    zone: 'moonlit_fen' as RoomDef['zone'],
    image: 'moonlit_fen_white_reed_maze.png',
    imagePrompt: '白蘆迷道 in moonlit_fen, silver moonlit wetland with reeds, glowing night flowers, fireflies, shallow black water, moss and fae lights, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text',
    description:
      '白蘆迷道位於月光濕地的銀色水道與夜花叢之間，水面映著常年不散的月光，蘆葦、燈苔、螢火與黑水流把安全路線切成許多細小分岔。這裡是低中階野外、採集與釣魚混合節點，玩家可以 gather 夜花、燈苔、毒腺與濕地草藥，也能 inspect 水紋、蛛絲、蛙鳴和妖光來判斷巡行怪物位置。若隊伍忽略泥沼深度或月光倒影，毒蛙、毒蛇、蜘蛛、史萊姆與女巫會從蘆葦後伏擊；若穩定標記白蘆與舊舟路線，則能逐步靠近月沼祭壇與夢水核心，並確認每次採集後水位、月光倒影與回程蘆葦標記仍然可靠清楚，避免迷失於銀霧深處。',
    exits: [
      { direction: 'west', targetRoomId: 'moonlit_fen_halfmoon_pond', description: '白蘆迷道回到半月池' },
      { direction: 'north', targetRoomId: 'moonlit_fen_moonwell', description: '井邊路回到月井' },
      { direction: 'east', targetRoomId: 'moonlit_fen_lunar_altar', description: '月沼祭壇在東側' },
    ],
    monsters: [
      { monsterId: 'poison_toad', maxCount: 2, respawnSeconds: 70 },
      { monsterId: 'forest_spider', maxCount: 2, respawnSeconds: 80 },
    ],
    mapSymbol: '[蘆]',
    mapX: 6,
    mapY: 0,
    guardianHints: {
      creature: '白蘆迷道的水面若沒有倒影，濕地生物通常已經潛到附近。',
      treasure: '白蘆迷道的夜花、燈苔或舊舟痕旁可能藏著月光濕地採集線索。',
      spirit: '白蘆迷道保留著濕地在銀月照耀下孕育夜花與妖光的記憶。',
    },
  },

  moonlit_fen_old_canoe_camp: {
    id: 'moonlit_fen_old_canoe_camp',
    name: '舊舟營',
    zone: 'moonlit_fen' as RoomDef['zone'],
    image: 'moonlit_fen_old_canoe_camp.png',
    imagePrompt: '舊舟營 in moonlit_fen, silver moonlit wetland with reeds, glowing night flowers, fireflies, shallow black water, moss and fae lights, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text',
    description:
      '舊舟營位於月光濕地的銀色水道與夜花叢之間，水面映著常年不散的月光，蘆葦、燈苔、螢火與黑水流把安全路線切成許多細小分岔。這裡是低中階野外、採集與釣魚混合節點，玩家可以 gather 夜花、燈苔、毒腺與濕地草藥，也能 inspect 水紋、蛛絲、蛙鳴和妖光來判斷巡行怪物位置。若隊伍忽略泥沼深度或月光倒影，毒蛙、毒蛇、蜘蛛、史萊姆與女巫會從蘆葦後伏擊；若穩定標記白蘆與舊舟路線，則能逐步靠近月沼祭壇與夢水核心，並確認每次採集後水位、月光倒影與回程蘆葦標記仍然可靠清楚，避免迷失於銀霧深處。',
    exits: [
      { direction: 'west', targetRoomId: 'moonlit_fen_sunken_log_bridge', description: '舊舟營回到沉木橋' },
      { direction: 'east', targetRoomId: 'moonlit_fen_lunar_altar', description: '舟痕通往月沼祭壇' },
    ],
    monsters: [
      { monsterId: 'wild_wolf', maxCount: 2, respawnSeconds: 75 },
      { monsterId: 'poison_snake', maxCount: 1, respawnSeconds: 70 },
    ],
    mapSymbol: '[舟]',
    mapX: 5,
    mapY: -1,
    guardianHints: {
      creature: '舊舟營的水面若沒有倒影，濕地生物通常已經潛到附近。',
      treasure: '舊舟營的夜花、燈苔或舊舟痕旁可能藏著月光濕地採集線索。',
      spirit: '舊舟營保留著濕地在銀月照耀下孕育夜花與妖光的記憶。',
    },
  },

  moonlit_fen_lunar_altar: {
    id: 'moonlit_fen_lunar_altar',
    name: '月沼祭壇',
    zone: 'moonlit_fen' as RoomDef['zone'],
    image: 'moonlit_fen_lunar_altar.png',
    imagePrompt: '月沼祭壇 in moonlit_fen, silver moonlit wetland with reeds, glowing night flowers, fireflies, shallow black water, moss and fae lights, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text',
    description:
      '月沼祭壇位於月光濕地的銀色水道與夜花叢之間，水面映著常年不散的月光，蘆葦、燈苔、螢火與黑水流把安全路線切成許多細小分岔。這裡是低中階野外、採集與釣魚混合節點，玩家可以 gather 夜花、燈苔、毒腺與濕地草藥，也能 inspect 水紋、蛛絲、蛙鳴和妖光來判斷巡行怪物位置。若隊伍忽略泥沼深度或月光倒影，毒蛙、毒蛇、蜘蛛、史萊姆與女巫會從蘆葦後伏擊；若穩定標記白蘆與舊舟路線，則能逐步靠近月沼祭壇與夢水核心，並確認每次採集後水位、月光倒影與回程蘆葦標記仍然可靠清楚，避免迷失於銀霧深處。',
    exits: [
      { direction: 'west', targetRoomId: 'moonlit_fen_white_reed_maze', description: '月沼祭壇回到白蘆迷道' },
      { direction: 'south', targetRoomId: 'moonlit_fen_old_canoe_camp', description: '舟痕回到舊舟營' },
      { direction: 'east', targetRoomId: 'moonlit_fen_dreamwater_core', description: '夢水核心在東側' },
    ],
    monsters: [
      { monsterId: 'forest_witch', maxCount: 1, respawnSeconds: 1800 },
      { monsterId: 'treant', maxCount: 2, respawnSeconds: 110 },
    ],
    mapSymbol: '[壇]',
    mapX: 7,
    mapY: 0,
    guardianHints: {
      creature: '月沼祭壇的水面若沒有倒影，濕地生物通常已經潛到附近。',
      treasure: '月沼祭壇的夜花、燈苔或舊舟痕旁可能藏著月光濕地採集線索。',
      spirit: '月沼祭壇保留著濕地在銀月照耀下孕育夜花與妖光的記憶。',
    },
  },

  moonlit_fen_dreamwater_core: {
    id: 'moonlit_fen_dreamwater_core',
    name: '夢水核心',
    zone: 'moonlit_fen' as RoomDef['zone'],
    image: 'moonlit_fen_dreamwater_core.png',
    imagePrompt: '夢水核心 in moonlit_fen, silver moonlit wetland with reeds, glowing night flowers, fireflies, shallow black water, moss and fae lights, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text',
    description:
      '夢水核心位於月光濕地的銀色水道與夜花叢之間，水面映著常年不散的月光，蘆葦、燈苔、螢火與黑水流把安全路線切成許多細小分岔。這裡是低中階野外、採集與釣魚混合節點，玩家可以 gather 夜花、燈苔、毒腺與濕地草藥，也能 inspect 水紋、蛛絲、蛙鳴和妖光來判斷巡行怪物位置。若隊伍忽略泥沼深度或月光倒影，毒蛙、毒蛇、蜘蛛、史萊姆與女巫會從蘆葦後伏擊；若穩定標記白蘆與舊舟路線，則能逐步靠近月沼祭壇與夢水核心，並確認每次採集後水位、月光倒影與回程蘆葦標記仍然可靠清楚，避免迷失於銀霧深處。',
    exits: [
      { direction: 'west', targetRoomId: 'moonlit_fen_lunar_altar', description: '夢水核心回到月沼祭壇' },
    ],
    monsters: [
      { monsterId: 'forest_witch', maxCount: 1, respawnSeconds: 1800 },
      { monsterId: 'giant_spider', maxCount: 1, respawnSeconds: 120 },
      { monsterId: 'poison_toad', maxCount: 2, respawnSeconds: 70 },
    ],
    mapSymbol: '[核]',
    mapX: 8,
    mapY: 0,
    guardianHints: {
      creature: '夢水核心的水面若沒有倒影，濕地生物通常已經潛到附近。',
      treasure: '夢水核心的夜花、燈苔或舊舟痕旁可能藏著月光濕地採集線索。',
      spirit: '夢水核心保留著濕地在銀月照耀下孕育夜花與妖光的記憶。',
    },
  },
};