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
};
