// 房間定義 - 所有區域與房間資料

import type { RoomDef, ZoneDef } from '@game/shared';

// ============================================================
//  區域定義
// ============================================================

export const ZONES: Record<string, ZoneDef> = {
  starter_village: {
    id: 'starter_village',
    name: '新手村',
    description: '一座寧靜的小村莊，是所有冒險者踏上旅途的起點。村子雖小，卻五臟俱全。',
    levelRange: [1, 5],
    rooms: [
      'village_square', 'adventurer_guild', 'weapon_shop',
      'potion_shop', 'village_gate', 'training_ground',
    ],
  },
  plains: {
    id: 'plains',
    name: '翠綠平原',
    description: '村莊外延伸的廣袤草原，微風拂過時能看見金色的麥浪。偶有野獸出沒。',
    levelRange: [5, 10],
    rooms: [
      'plains_entrance', 'grass_path', 'windmill_farm',
      'crossroads', 'old_well',
    ],
  },
  dark_forest: {
    id: 'dark_forest',
    name: '暗影森林',
    description: '古老的森林，陽光幾乎無法穿透茂密的樹冠。傳說深處藏著精靈的遺跡。',
    levelRange: [10, 20],
    rooms: [
      'forest_entrance', 'dense_trail', 'mushroom_swamp',
      'ancient_treehouse', 'deep_forest', 'elf_ruins',
    ],
  },
  crystal_cave: {
    id: 'crystal_cave',
    name: '水晶洞窟',
    description: '地底深處的洞窟，四壁鑲嵌著發光的水晶。空氣中充滿神秘的魔力。',
    levelRange: [20, 30],
    rooms: [
      'cave_entrance', 'luminous_tunnel', 'crystal_hall',
      'underground_river', 'mine_depths',
    ],
  },
  lakeside_town: {
    id: 'lakeside_town',
    name: '湖畔城鎮',
    description: '建於碧藍湖畔的繁榮城鎮，是冒險者進階轉職與挑戰高階內容的據點。',
    levelRange: [10, 50],
    rooms: [
      'town_gate', 'market_street', 'town_plaza',
      'class_change_hall', 'arena_entrance',
    ],
  },
};

// ============================================================
//  房間定義
// ============================================================

export const ROOMS: Record<string, RoomDef> = {

  // ─── 新手村 (starter_village) ───────────────────────────

  village_square: {
    id: 'village_square',
    name: '村莊廣場',
    zone: 'starter_village',
    description:
      '新手村的中心廣場，地面鋪著整齊的石板。廣場中央矗立著一座古老的噴泉，' +
      '清澈的泉水日夜不息地流淌。四周的告示板上貼滿了各式各樣的冒險委託。',
    exits: [
      { direction: 'north', targetRoomId: 'adventurer_guild', description: '冒險者公會的大門敞開著' },
      { direction: 'east', targetRoomId: 'weapon_shop', description: '傳來鐵匠打鐵的聲響' },
      { direction: 'west', targetRoomId: 'potion_shop', description: '空氣中飄著草藥的香氣' },
      { direction: 'south', targetRoomId: 'village_gate', description: '通往村口的道路' },
    ],
    npcs: ['village_chief'],
    mapSymbol: '[ ]',
    mapX: 2,
    mapY: 2,
  },

  adventurer_guild: {
    id: 'adventurer_guild',
    name: '冒險者公會',
    zone: 'starter_village',
    description:
      '寬敞的大廳裡擺放著長桌和木椅，牆上掛著歷代冒險者的肖像畫。' +
      '公會櫃檯後方是一面巨大的任務看板，上面密密麻麻地釘著各種委託單。' +
      '一位經驗豐富的導師正在指導新人。',
    exits: [
      { direction: 'south', targetRoomId: 'village_square', description: '回到廣場' },
    ],
    npcs: ['adventure_mentor'],
    mapSymbol: '[G]',
    mapX: 2,
    mapY: 1,
  },

  weapon_shop: {
    id: 'weapon_shop',
    name: '武器店',
    zone: 'starter_village',
    description:
      '牆壁上掛滿了各式各樣的武器——長劍、短刀、弓箭、法杖應有盡有。' +
      '爐火映照出鐵匠魁梧的身影，空氣中瀰漫著金屬的味道。' +
      '幾把剛打好的新劍在架子上閃閃發光。',
    exits: [
      { direction: 'west', targetRoomId: 'village_square', description: '回到廣場' },
    ],
    npcs: ['blacksmith'],
    mapSymbol: '[W]',
    mapX: 3,
    mapY: 2,
  },

  potion_shop: {
    id: 'potion_shop',
    name: '藥水店',
    zone: 'starter_village',
    description:
      '小巧的店面裡瓶瓶罐罐排列得井然有序，五顏六色的藥水在架子上微微發光。' +
      '櫃檯上擺著一本翻開的藥典，空氣中混合著薰衣草和薄荷的清新氣息。' +
      '藥師正專注地研磨著什麼。',
    exits: [
      { direction: 'east', targetRoomId: 'village_square', description: '回到廣場' },
    ],
    npcs: ['herbalist'],
    mapSymbol: '[P]',
    mapX: 1,
    mapY: 2,
  },

  village_gate: {
    id: 'village_gate',
    name: '村口',
    zone: 'starter_village',
    description:
      '簡樸的木柵欄標示著新手村的邊界。一條泥土小路蜿蜒向南，通往廣闊的平原。' +
      '村口的守衛正靠在柵門旁打盹，身旁的火把在微風中搖曳。' +
      '遠方隱約可見綠油油的草原。',
    exits: [
      { direction: 'north', targetRoomId: 'village_square', description: '回到廣場' },
      { direction: 'east', targetRoomId: 'training_ground', description: '訓練場在東邊' },
      { direction: 'south', targetRoomId: 'plains_entrance', description: '踏出村口，前往翠綠平原' },
    ],
    monsters: [
      { monsterId: 'slime', maxCount: 2, respawnSeconds: 30 },
    ],
    mapSymbol: '[=]',
    mapX: 2,
    mapY: 3,
  },

  training_ground: {
    id: 'training_ground',
    name: '訓練場',
    zone: 'starter_village',
    description:
      '一片被夯實的空地上擺放著稻草人和木製練習靶。幾位新手冒險者正揮汗如雨地練習著。' +
      '場邊的武器架上放著各種練習用的鈍器。' +
      '這裡是磨練基礎技巧的最佳場所。',
    exits: [
      { direction: 'west', targetRoomId: 'village_gate', description: '回到村口' },
    ],
    monsters: [
      { monsterId: 'slime', maxCount: 3, respawnSeconds: 20 },
      { monsterId: 'small_bat', maxCount: 2, respawnSeconds: 25 },
    ],
    mapSymbol: '[T]',
    mapX: 3,
    mapY: 3,
  },

  // ─── 翠綠平原 (plains) ─────────────────────────────────

  plains_entrance: {
    id: 'plains_entrance',
    name: '平原入口',
    zone: 'plains',
    description:
      '踏出新手村，眼前豁然開朗。一望無際的翠綠平原在陽光下閃耀著生機，' +
      '微風帶來泥土與青草的芬芳。遠處的風車慢悠悠地轉動著。' +
      '這裡是通往廣闊世界的第一步。',
    exits: [
      { direction: 'north', targetRoomId: 'village_gate', description: '回到新手村村口' },
      { direction: 'south', targetRoomId: 'grass_path', description: '沿著草原小徑前進' },
      { direction: 'east', targetRoomId: 'windmill_farm', description: '通往風車農場的叉路' },
    ],
    monsters: [
      { monsterId: 'wild_rabbit', maxCount: 3, respawnSeconds: 25 },
      { monsterId: 'slime', maxCount: 2, respawnSeconds: 30 },
    ],
    mapSymbol: ' . ',
    mapX: 2,
    mapY: 4,
  },

  grass_path: {
    id: 'grass_path',
    name: '草原小徑',
    zone: 'plains',
    description:
      '一條被旅人踩出的蜿蜒小徑穿過齊膝的草叢。道路兩旁野花盛開，' +
      '蝴蝶在花叢間翩翩起舞。偶爾能聽到草叢中細碎的沙沙聲。' +
      '要小心——不是所有的沙沙聲都來自風。',
    exits: [
      { direction: 'north', targetRoomId: 'plains_entrance', description: '回到平原入口' },
      { direction: 'south', targetRoomId: 'crossroads', description: '通往十字路口' },
    ],
    monsters: [
      { monsterId: 'wild_rabbit', maxCount: 2, respawnSeconds: 25 },
      { monsterId: 'wild_wolf', maxCount: 2, respawnSeconds: 45 },
    ],
    mapSymbol: ' . ',
    mapX: 2,
    mapY: 5,
  },

  windmill_farm: {
    id: 'windmill_farm',
    name: '風車農場',
    zone: 'plains',
    description:
      '一座高大的風車矗立在金黃的麥田中央，巨大的葉片在風中緩緩旋轉。' +
      '農夫們辛勤地在田間勞作，幾隻家畜在柵欄裡悠閒地吃草。' +
      '這裡看起來很平靜，但農夫們抱怨最近常有盜賊出沒。',
    exits: [
      { direction: 'west', targetRoomId: 'plains_entrance', description: '回到平原入口' },
    ],
    monsters: [
      { monsterId: 'bandit', maxCount: 2, respawnSeconds: 60 },
    ],
    mapSymbol: '[F]',
    mapX: 3,
    mapY: 4,
  },

  crossroads: {
    id: 'crossroads',
    name: '十字路口',
    zone: 'plains',
    description:
      '兩條道路在此交匯，形成一個十字路口。一塊古舊的路標上依稀可辨幾個方向：' +
      '北方通往新手村，南方是暗影森林，東方的道路通向湖畔城鎮。' +
      '路標旁有一口古井，似乎很久沒人使用了。',
    exits: [
      { direction: 'north', targetRoomId: 'grass_path', description: '沿小徑返回' },
      { direction: 'south', targetRoomId: 'forest_entrance', description: '通往暗影森林' },
      { direction: 'east', targetRoomId: 'town_gate', description: '前往湖畔城鎮' },
      { direction: 'west', targetRoomId: 'old_well', description: '走向古井' },
    ],
    monsters: [
      { monsterId: 'wild_wolf', maxCount: 2, respawnSeconds: 50 },
      { monsterId: 'poison_snake', maxCount: 1, respawnSeconds: 60 },
    ],
    mapSymbol: '[+]',
    mapX: 2,
    mapY: 6,
  },

  old_well: {
    id: 'old_well',
    name: '古井旁',
    zone: 'plains',
    description:
      '一口被苔蘚覆蓋的古井佇立在荒草中，石砌的井壁上刻著模糊的符文。' +
      '往井裡望去，深不見底的黑暗中似乎有什麼東西在微微發光。' +
      '據說這口井曾經通往地下洞窟。',
    exits: [
      { direction: 'east', targetRoomId: 'crossroads', description: '回到十字路口' },
      { direction: 'down', targetRoomId: 'cave_entrance', description: '攀著井壁向下探索' },
    ],
    monsters: [
      { monsterId: 'poison_snake', maxCount: 2, respawnSeconds: 50 },
    ],
    mapSymbol: '[O]',
    mapX: 1,
    mapY: 6,
  },

  // ─── 暗影森林 (dark_forest) ─────────────────────────────

  forest_entrance: {
    id: 'forest_entrance',
    name: '森林入口',
    zone: 'dark_forest',
    description:
      '巨大的橡樹如同門衛般矗立在森林入口兩側，枝椏交錯形成一道天然的拱門。' +
      '踏入森林的那一刻，陽光驟然黯淡，空氣變得潮濕而陰涼。' +
      '鳥鳴聲從四面八方傳來，但看不到任何鳥的蹤跡。',
    exits: [
      { direction: 'north', targetRoomId: 'crossroads', description: '回到十字路口' },
      { direction: 'south', targetRoomId: 'dense_trail', description: '深入密林小道' },
      { direction: 'east', targetRoomId: 'ancient_treehouse', description: '一條岔路通往高處' },
    ],
    monsters: [
      { monsterId: 'shadow_wolf', maxCount: 2, respawnSeconds: 45 },
    ],
    mapSymbol: ' # ',
    mapX: 2,
    mapY: 7,
  },

  dense_trail: {
    id: 'dense_trail',
    name: '密林小道',
    zone: 'dark_forest',
    description:
      '越走越深，周圍的樹木越來越高大，藤蔓和荊棘幾乎堵住了去路。' +
      '腳下的落葉厚得像地毯，踩上去沒有一點聲音。' +
      '偶爾有蛛絲黏在臉上，讓人不禁打了個寒顫。',
    exits: [
      { direction: 'north', targetRoomId: 'forest_entrance', description: '退回森林入口' },
      { direction: 'west', targetRoomId: 'mushroom_swamp', description: '空氣中飄來沼澤的氣味' },
      { direction: 'south', targetRoomId: 'deep_forest', description: '更深的黑暗在前方等待' },
    ],
    monsters: [
      { monsterId: 'shadow_wolf', maxCount: 2, respawnSeconds: 45 },
      { monsterId: 'giant_spider', maxCount: 2, respawnSeconds: 50 },
    ],
    mapSymbol: ' # ',
    mapX: 2,
    mapY: 8,
  },

  mushroom_swamp: {
    id: 'mushroom_swamp',
    name: '蘑菇沼澤',
    zone: 'dark_forest',
    description:
      '地面變得泥濘不堪，到處冒著詭異的氣泡。巨大的蘑菇散發著幽幽的螢光，' +
      '有的甚至比人還高。空氣中瀰漫著腐敗的甜膩氣息。' +
      '沼澤深處傳來低沉的咕嚕聲——最好不要靠得太近。',
    exits: [
      { direction: 'east', targetRoomId: 'dense_trail', description: '回到密林小道' },
    ],
    monsters: [
      { monsterId: 'giant_spider', maxCount: 3, respawnSeconds: 45 },
      { monsterId: 'treant', maxCount: 1, respawnSeconds: 90 },
    ],
    mapSymbol: '[~]',
    mapX: 1,
    mapY: 8,
  },

  ancient_treehouse: {
    id: 'ancient_treehouse',
    name: '古老樹屋',
    zone: 'dark_forest',
    description:
      '一棵千年巨木的枝幹間建著一座被遺忘的樹屋，木製的階梯盤旋而上。' +
      '雖然年久失修，但精巧的建築工藝仍然清晰可辨——這是精靈族的傑作。' +
      '樹屋裡殘留著一些古老的書籍和魔法道具。',
    exits: [
      { direction: 'west', targetRoomId: 'forest_entrance', description: '回到森林入口' },
    ],
    monsters: [
      { monsterId: 'treant', maxCount: 2, respawnSeconds: 70 },
    ],
    mapSymbol: '[^]',
    mapX: 3,
    mapY: 7,
  },

  deep_forest: {
    id: 'deep_forest',
    name: '森林深處',
    zone: 'dark_forest',
    description:
      '這裡幾乎伸手不見五指。古老的樹根盤踞在地面上，宛如沉睡的巨蛇。' +
      '幽暗中，一雙一雙泛著綠光的眼睛正注視著你。' +
      '空氣中充滿了野獸的氣息——暗影狼王的領地就在附近。',
    exits: [
      { direction: 'north', targetRoomId: 'dense_trail', description: '退回密林小道' },
      { direction: 'south', targetRoomId: 'elf_ruins', description: '一道微弱的光從南方透出' },
    ],
    monsters: [
      { monsterId: 'shadow_wolf', maxCount: 3, respawnSeconds: 40 },
      { monsterId: 'shadow_wolf_alpha', maxCount: 1, respawnSeconds: 300 },
    ],
    mapSymbol: '[!]',
    mapX: 2,
    mapY: 9,
  },

  elf_ruins: {
    id: 'elf_ruins',
    name: '精靈遺跡',
    zone: 'dark_forest',
    description:
      '穿過重重樹幕，眼前出現一片開闊的遺跡。殘破的石柱上雕刻著精靈族的文字，' +
      '地面的魔法陣雖已黯淡，但仍隱隱散發著微光。' +
      '遺跡中央的祭壇上放著一顆發著淡藍色光芒的水晶。',
    exits: [
      { direction: 'north', targetRoomId: 'deep_forest', description: '返回森林深處' },
    ],
    monsters: [
      { monsterId: 'giant_spider', maxCount: 2, respawnSeconds: 50 },
      { monsterId: 'treant', maxCount: 2, respawnSeconds: 70 },
    ],
    mapSymbol: '[*]',
    mapX: 2,
    mapY: 10,
  },

  // ─── 水晶洞窟 (crystal_cave) ───────────────────────────

  cave_entrance: {
    id: 'cave_entrance',
    name: '洞窟入口',
    zone: 'crystal_cave',
    description:
      '古井的井壁上有一條隱蔽的通道，通向一個天然的洞窟入口。' +
      '洞口邊緣的岩壁上鑲嵌著零星的發光水晶，散發出幽藍色的微光。' +
      '涼風從洞窟深處吹來，帶著潮濕的礦物氣息。',
    exits: [
      { direction: 'up', targetRoomId: 'old_well', description: '攀回古井' },
      { direction: 'south', targetRoomId: 'luminous_tunnel', description: '沿著發光的隧道前進' },
    ],
    monsters: [
      { monsterId: 'cave_bat', maxCount: 3, respawnSeconds: 40 },
    ],
    mapSymbol: '[v]',
    mapX: 1,
    mapY: 7,
  },

  luminous_tunnel: {
    id: 'luminous_tunnel',
    name: '螢光隧道',
    zone: 'crystal_cave',
    description:
      '隧道兩壁嵌滿了大小不一的水晶，在黑暗中散發出夢幻般的彩色光芒。' +
      '光線在水晶間折射，將整條隧道映照得如同星河一般。' +
      '腳下的地面被水流打磨得光滑如鏡。',
    exits: [
      { direction: 'north', targetRoomId: 'cave_entrance', description: '回到洞窟入口' },
      { direction: 'south', targetRoomId: 'crystal_hall', description: '隧道盡頭透出耀眼的光芒' },
      { direction: 'east', targetRoomId: 'underground_river', description: '水聲從東方傳來' },
    ],
    monsters: [
      { monsterId: 'crystal_lizard', maxCount: 2, respawnSeconds: 50 },
      { monsterId: 'cave_bat', maxCount: 2, respawnSeconds: 40 },
    ],
    mapSymbol: ' = ',
    mapX: 1,
    mapY: 8,
  },

  crystal_hall: {
    id: 'crystal_hall',
    name: '水晶大廳',
    zone: 'crystal_cave',
    description:
      '一座宏偉的天然大廳展現在眼前，穹頂高達數十公尺。巨型水晶柱從地面直插天頂，' +
      '折射出萬千色彩。大廳中央有一座石台，上面刻著古老的符文。' +
      '傳說這裡曾是地底種族的神殿。',
    exits: [
      { direction: 'north', targetRoomId: 'luminous_tunnel', description: '回到螢光隧道' },
      { direction: 'south', targetRoomId: 'mine_depths', description: '通往更深處的礦脈' },
    ],
    monsters: [
      { monsterId: 'gargoyle', maxCount: 2, respawnSeconds: 60 },
      { monsterId: 'crystal_guardian', maxCount: 1, respawnSeconds: 600 },
    ],
    mapSymbol: '[H]',
    mapX: 1,
    mapY: 9,
  },

  underground_river: {
    id: 'underground_river',
    name: '地下河',
    zone: 'crystal_cave',
    description:
      '一條寬闊的地下河在黑暗中蜿蜒流淌，河水清澈見底，河床上散落著發光的水晶碎片。' +
      '河岸邊生長著奇特的螢光苔蘚，散發出柔和的綠色光芒。' +
      '水面偶爾泛起漣漪，似乎有什麼東西在水下游動。',
    exits: [
      { direction: 'west', targetRoomId: 'luminous_tunnel', description: '回到螢光隧道' },
    ],
    monsters: [
      { monsterId: 'crystal_lizard', maxCount: 3, respawnSeconds: 45 },
    ],
    mapSymbol: '[~]',
    mapX: 2,
    mapY: 8,
  },

  mine_depths: {
    id: 'mine_depths',
    name: '礦脈深處',
    zone: 'crystal_cave',
    description:
      '洞窟的最深處，裸露的礦脈在岩壁上閃爍著金屬光澤。' +
      '這裡的水晶更加巨大，有些甚至散發出灼熱的能量。' +
      '空氣變得沉重而壓抑，強大的存在感從深處傳來。',
    exits: [
      { direction: 'north', targetRoomId: 'crystal_hall', description: '返回水晶大廳' },
    ],
    monsters: [
      { monsterId: 'gargoyle', maxCount: 3, respawnSeconds: 55 },
      { monsterId: 'crystal_lizard', maxCount: 2, respawnSeconds: 50 },
    ],
    mapSymbol: '[D]',
    mapX: 1,
    mapY: 10,
  },

  // ─── 湖畔城鎮 (lakeside_town) ──────────────────────────

  town_gate: {
    id: 'town_gate',
    name: '城門口',
    zone: 'lakeside_town',
    description:
      '高大的石牆圍繞著湖畔城鎮，城門上方刻著城鎮的徽記——一面盾牌與交叉的劍。' +
      '身著鎧甲的衛兵守在門口，來往的商人和冒險者絡繹不絕。' +
      '透過城門可以看到繁華的市集街道。',
    exits: [
      { direction: 'west', targetRoomId: 'crossroads', description: '離開城鎮，回到十字路口' },
      { direction: 'east', targetRoomId: 'market_street', description: '進入商業街' },
    ],
    mapSymbol: '[=]',
    mapX: 3,
    mapY: 6,
  },

  market_street: {
    id: 'market_street',
    name: '商業街',
    zone: 'lakeside_town',
    description:
      '熙熙攘攘的商業街上，兩旁商店林立。武器鋪、防具店、藥材行、雜貨舖一應俱全。' +
      '商販的叫賣聲此起彼落，空氣中混雜著烤肉和香料的味道。' +
      '這裡是冒險者補給裝備的最佳去處。',
    exits: [
      { direction: 'west', targetRoomId: 'town_gate', description: '回到城門口' },
      { direction: 'east', targetRoomId: 'town_plaza', description: '前往城鎮廣場' },
    ],
    mapSymbol: '[$]',
    mapX: 4,
    mapY: 6,
  },

  town_plaza: {
    id: 'town_plaza',
    name: '城鎮廣場',
    zone: 'lakeside_town',
    description:
      '寬闘的廣場是城鎮的中心，一座英雄雕像矗立在噴泉中央。' +
      '廣場四周環繞著重要的建築——轉職大廳、競技場、以及城主府。' +
      '陽光灑在碧藍的湖面上，波光粼粼的景色令人心曠神怡。',
    exits: [
      { direction: 'west', targetRoomId: 'market_street', description: '回到商業街' },
      { direction: 'north', targetRoomId: 'class_change_hall', description: '轉職大廳的宏偉大門' },
      { direction: 'south', targetRoomId: 'arena_entrance', description: '競技場的入口' },
    ],
    mapSymbol: '[ ]',
    mapX: 5,
    mapY: 6,
  },

  class_change_hall: {
    id: 'class_change_hall',
    name: '轉職大廳',
    zone: 'lakeside_town',
    description:
      '宏偉的大廳由四根巨柱支撐，每根柱子代表一個職業——劍與盾、魔法書、弓箭、聖杖。' +
      '四位導師分別端坐在各自的區域，等待著有志之士前來拜師。' +
      '大廳中央的魔法陣散發著柔和的光芒，那是轉職儀式的核心。',
    exits: [
      { direction: 'south', targetRoomId: 'town_plaza', description: '回到城鎮廣場' },
    ],
    npcs: [
      'sword_instructor',
      'magic_instructor',
      'ranger_instructor',
      'temple_priest',
    ],
    mapSymbol: '[C]',
    mapX: 5,
    mapY: 5,
  },

  arena_entrance: {
    id: 'arena_entrance',
    name: '競技場入口',
    zone: 'lakeside_town',
    description:
      '巨大的圓形建築聳立在眼前，觀眾席的歡呼聲從裡面隱隱傳出。' +
      '入口處的告示板上寫著今日的挑戰賽程和獎勵。' +
      '幾名身經百戰的冒險者正在門口熱身，準備迎接下一場挑戰。',
    exits: [
      { direction: 'north', targetRoomId: 'town_plaza', description: '回到城鎮廣場' },
    ],
    monsters: [
      { monsterId: 'training_dummy', maxCount: 3, respawnSeconds: 10 },
    ],
    mapSymbol: '[A]',
    mapX: 5,
    mapY: 7,
  },
};

/** 取得房間定義 */
export function getRoom(roomId: string): RoomDef | undefined {
  return ROOMS[roomId];
}

/** 取得區域定義 */
export function getZone(zoneId: string): ZoneDef | undefined {
  return ZONES[zoneId];
}

/** 取得區域內所有房間 */
export function getRoomsByZone(zoneId: string): RoomDef[] {
  return Object.values(ROOMS).filter(r => r.zone === zoneId);
}

/** 取得所有房間 ID */
export function getAllRoomIds(): string[] {
  return Object.keys(ROOMS);
}
