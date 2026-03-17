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
  starter_village_ext: {
    id: 'starter_village_ext' as ZoneDef['id'],
    name: '新手村外圍',
    description: '新手村周邊的鄉野地帶，有後山、農田和小溪。雖然怪物不強，但對初出茅廬的冒險者來說仍需小心。',
    levelRange: [1, 8],
    rooms: [
      'village_backhill', 'village_creek', 'village_farmland', 'village_orchard',
      'graveyard_entrance', 'abandoned_cottage', 'village_outskirts', 'watchtower',
    ],
  },
  eastern_coast: {
    id: 'eastern_coast' as ZoneDef['id'],
    name: '東方海岸',
    description: '位於大陸東側的綿長海岸線，海風鹹溼，浪花拍打礁石。漁村、燈塔和海盜營地散落其間。',
    levelRange: [8, 15],
    rooms: [
      'coastal_boardwalk', 'sandy_beach', 'tidal_zone', 'sea_cave',
      'fishing_dock', 'lighthouse', 'coral_shallows', 'shipwreck',
      'cliff_path', 'pirate_camp', 'dark_reef', 'underwater_cave',
    ],
  },
  volcano_zone: {
    id: 'volcano_zone' as ZoneDef['id'],
    name: '火山地帶',
    description: '大陸西南方的活火山區域，空氣中充滿硫磺的刺鼻氣味。岩漿河流淌其間，矮人族在此建立了鍛造重鎮。',
    levelRange: [15, 22],
    rooms: [
      'volcano_base', 'lava_trail', 'sulfur_valley', 'volcano_crater',
      'magma_river', 'obsidian_cave', 'fire_temple_entrance',
      'dwarf_mine', 'forge_hall', 'volcano_summit',
    ],
  },
  frozen_wastes: {
    id: 'frozen_wastes' as ZoneDef['id'],
    name: '冰封雪原',
    description: '大陸北方的極寒之地，終年風雪不止。傳說在雪原的盡頭，有一座被冰封的古老城堡，冰龍在其中沉睡。',
    levelRange: [22, 30],
    rooms: [
      'snowfield_entrance', 'blizzard_path', 'glacier', 'frozen_lake',
      'mountain_camp', 'crystal_ice_cave', 'aurora_field',
      'wolf_den', 'ice_castle_gate', 'ice_throne',
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
      { direction: 'up', targetRoomId: 'village_backhill', description: '一條小路蜿蜒通往村莊後山' },
    ],
    npcs: ['village_chief'],
    mapSymbol: '[ ]',
    mapX: 2,
    mapY: 2,
    guardianHints: {
      creature: '噴泉底部似乎有什麼東西在蠕動……可能是藏在水中的小型生物。',
      treasure: '噴泉底部閃爍著幾枚古老的硬幣，或許有人曾在此許願。',
      spirit: '廣場上殘留著無數冒險者的意志，噴泉的水似乎在低語著古老的祝福。',
    },
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
    guardianHints: {
      creature: '任務看板後方的陰影裡，似乎有蜘蛛在結網。',
      treasure: '歷代冒險者的肖像畫後面，牆壁似乎有一處暗格。',
      spirit: '大廳裡瀰漫著歷代冒險者的豪情壯志，彷彿能聽見他們的故事。',
    },
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
    guardianHints: {
      creature: '爐火旁有細小的爪印，可能有火蜥蜴藏在爐底取暖。',
      treasure: '架子上其中一把劍的光澤與眾不同，可能是件隱藏的名器。',
      spirit: '鐵匠的鍛造技術似乎傳承自某個已經消逝的矮人王國。',
    },
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
    guardianHints: {
      creature: '瓶罐之間似乎有小蟲在爬動，可能被草藥的氣味吸引。',
      treasure: '藥典翻開的那一頁記載著一種失傳的配方，或許值得仔細研讀。',
      spirit: '空氣中的草藥香氣蘊含著古老的治癒之力，藥師似乎知道更多秘密。',
    },
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
      { direction: 'west', targetRoomId: 'village_outskirts', description: '一條小路通往村莊外圍' },
    ],
    monsters: [
      { monsterId: 'slime', maxCount: 2, respawnSeconds: 30 },
    ],
    mapSymbol: '[=]',
    mapX: 2,
    mapY: 3,
    guardianHints: {
      creature: '柵欄旁的草叢在無風的情況下微微搖動，裡面可能藏著史萊姆。',
      treasure: '守衛打盹的位置旁邊，地面有一塊鬆動的石板。',
      spirit: '村口的火把似乎被某種魔力維持著，永遠不會熄滅。',
    },
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
    guardianHints: {
      creature: '稻草人的背後有抓痕，小蝙蝠經常在夜晚聚集在此。',
      treasure: '武器架底下的泥土裡埋著什麼東西，隱約露出一角。',
      spirit: '這片訓練場承載了無數新手的汗水，地面似乎殘留著鬥志的能量。',
    },
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
      { direction: 'west', targetRoomId: 'sunflower_field', description: '西邊的花田在陽光下閃耀' },
    ],
    monsters: [
      { monsterId: 'wild_rabbit', maxCount: 3, respawnSeconds: 25 },
      { monsterId: 'slime', maxCount: 2, respawnSeconds: 30 },
    ],
    mapSymbol: ' . ',
    mapX: 2,
    mapY: 4,
    guardianHints: {
      creature: '草叢深處有細微的沙沙聲，可能潛伏著不止一隻野兔。',
      treasure: '路邊的石堆下似乎藏著旅人遺落的物品。',
      spirit: '風中帶著遠古精靈旅行者的氣息，這條路比看起來的更加古老。',
    },
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
    guardianHints: {
      creature: '草叢中有狼的腳印，數量不止一組……牠們可能在附近埋伏。',
      treasure: '小徑旁的野花叢中，有一株罕見的藥草在微微發光。',
      spirit: '這條小徑曾是商隊的必經之路，殘留著他們歡笑的回音。',
    },
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
      { direction: 'south', targetRoomId: 'windmill_interior', description: '走進風車內部' },
      { direction: 'east', targetRoomId: 'abandoned_minecart', description: '農場東邊有廢棄的礦車道' },
    ],
    monsters: [
      { monsterId: 'bandit', maxCount: 2, respawnSeconds: 60 },
    ],
    mapSymbol: '[F]',
    mapX: 3,
    mapY: 4,
    guardianHints: {
      creature: '麥田深處有踩踏的痕跡，盜賊可能藏在風車的陰影中。',
      treasure: '風車的機關室裡，農夫似乎藏了一些值錢的東西。',
      spirit: '這座風車的建造者使用了古老的工藝，齒輪間刻著祈禱的符文。',
    },
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
    guardianHints: {
      creature: '路標附近的地面有蛇蛻下的皮，毒蛇可能就在腳邊。',
      treasure: '古井旁的路標底座似乎可以旋轉，裡面可能有暗格。',
      spirit: '路標上模糊的字跡似乎是用古代語言寫的，記載著某個方向的秘密。',
    },
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
    guardianHints: {
      creature: '井壁上有爪痕，某種大型生物可能棲息在井底深處。',
      treasure: '井壁符文中有一處特別明亮，觸摸它或許能得到什麼。',
      spirit: '古井深處傳來微弱的嘆息聲，似乎有一個被遺忘的靈魂在等待。',
    },
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
      { direction: 'west', targetRoomId: 'snowfield_entrance', description: '一條被霜雪覆蓋的小路通往北方雪原' },
    ],
    monsters: [
      { monsterId: 'shadow_wolf', maxCount: 2, respawnSeconds: 45 },
    ],
    mapSymbol: ' # ',
    mapX: 2,
    mapY: 7,
    guardianHints: {
      creature: '樹冠上有暗影狼殘留的毛髮，牠們可能從高處突襲。',
      treasure: '橡樹根部的縫隙中，似乎卡著一個古舊的小箱子。',
      spirit: '森林入口的拱門並非天然形成——精靈族曾在這裡設下了結界。',
    },
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
      { direction: 'east', targetRoomId: 'firefly_trail', description: '林間閃爍著微弱的螢光' },
    ],
    monsters: [
      { monsterId: 'shadow_wolf', maxCount: 2, respawnSeconds: 45 },
      { monsterId: 'giant_spider', maxCount: 2, respawnSeconds: 50 },
    ],
    mapSymbol: ' # ',
    mapX: 2,
    mapY: 8,
    guardianHints: {
      creature: '頭頂的蛛網比想像中更密集，巨型蜘蛛可能就在正上方。',
      treasure: '落葉下的泥土中有金屬的反光，可能是前人埋藏的物品。',
      spirit: '荊棘上纏繞著微弱的魔力絲線，這裡曾是精靈的防線。',
    },
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
      { direction: 'west', targetRoomId: 'deep_poison_swamp', description: '沼澤向西延伸，毒霧越來越濃' },
    ],
    monsters: [
      { monsterId: 'giant_spider', maxCount: 3, respawnSeconds: 45 },
      { monsterId: 'treant', maxCount: 1, respawnSeconds: 90 },
    ],
    mapSymbol: '[~]',
    mapX: 1,
    mapY: 8,
    guardianHints: {
      creature: '氣泡冒出的位置下方，沼澤深處潛伏著尚未現身的生物。',
      treasure: '最大的螢光蘑菇底下，泥濘中埋著發光的東西。',
      spirit: '沼澤的腐敗氣息中混雜著遠古樹精的嘆息，牠們曾是森林的守護者。',
    },
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
      { direction: 'east', targetRoomId: 'hunter_lodge', description: '林間小路通往一間獵人小屋' },
    ],
    monsters: [
      { monsterId: 'treant', maxCount: 2, respawnSeconds: 70 },
    ],
    mapSymbol: '[^]',
    mapX: 3,
    mapY: 7,
    guardianHints: {
      creature: '巨木的樹洞裡有窸窣的聲響，樹精可能把這裡當作巢穴。',
      treasure: '樹屋的書架上有一本封面鑲著寶石的古書，似乎記載著精靈的秘術。',
      spirit: '樹屋中殘留著精靈族最後的守衛的記憶，牆上的壁畫述說著一段悲傷的歷史。',
    },
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
      { direction: 'west', targetRoomId: 'withered_forest', description: '西方的樹木似乎都失去了生機' },
    ],
    monsters: [
      { monsterId: 'shadow_wolf', maxCount: 3, respawnSeconds: 40 },
      { monsterId: 'shadow_wolf_alpha', maxCount: 1, respawnSeconds: 300 },
    ],
    mapSymbol: '[!]',
    mapX: 2,
    mapY: 9,
    guardianHints: {
      creature: '空氣中瀰漫著暗影之力的氣息——狼王就在附近，比你想像的更近。',
      treasure: '被暗影狼群守護的巢穴中，似乎藏著牠們收集的戰利品。',
      spirit: '那雙泛綠光的眼睛不全是狼的……有些是被暗影吞噬的靈魂。',
    },
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
      { direction: 'south', targetRoomId: 'volcano_base', description: '遺跡南方的空氣越來越灼熱，通往火山地帶' },
    ],
    monsters: [
      { monsterId: 'giant_spider', maxCount: 2, respawnSeconds: 50 },
      { monsterId: 'treant', maxCount: 2, respawnSeconds: 70 },
    ],
    mapSymbol: '[*]',
    mapX: 2,
    mapY: 10,
    guardianHints: {
      creature: '石柱的陰影中有生物在潛伏，牠們被魔法陣的殘餘能量吸引。',
      treasure: '祭壇上的水晶並非裝飾品——它是一把封印之鑰，可以開啟某處的寶庫。',
      spirit: '魔法陣上殘留著精靈祭司最後的祈禱，他們試圖封印某個可怕的存在。',
    },
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
      { direction: 'north', targetRoomId: 'abandoned_minecart', description: '一條廢棄的礦車道通往地面' },
    ],
    monsters: [
      { monsterId: 'cave_bat', maxCount: 3, respawnSeconds: 40 },
    ],
    mapSymbol: '[v]',
    mapX: 1,
    mapY: 7,
    guardianHints: {
      creature: '洞頂倒掛著數十隻蝙蝠，數量比看到的多得多。',
      treasure: '入口旁的岩縫中卡著一顆品質不錯的水晶原石。',
      spirit: '這條通道是人工開鑿的，牆壁上的刻痕來自一個已滅亡的地底文明。',
    },
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
      { direction: 'west', targetRoomId: 'amethyst_corridor', description: '西側的隧道泛著紫色光芒' },
    ],
    monsters: [
      { monsterId: 'crystal_lizard', maxCount: 2, respawnSeconds: 50 },
      { monsterId: 'cave_bat', maxCount: 2, respawnSeconds: 40 },
    ],
    mapSymbol: ' = ',
    mapX: 1,
    mapY: 8,
    guardianHints: {
      creature: '水晶的折射光中有異常的閃動，蜥蜴正利用光線偽裝。',
      treasure: '其中一根水晶柱的色澤與眾不同，可能蘊含著特殊的能量。',
      spirit: '水晶中封存著遠古的記憶碎片，輕觸它們或許能看到過去的影像。',
    },
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
    guardianHints: {
      creature: '那些看似靜止的石像可能隨時甦醒——石像鬼善於偽裝成普通雕塑。',
      treasure: '石台上的符文是一道密碼，破解它就能開啟通往寶庫的機關。',
      spirit: '這座大廳曾是地底種族的聖殿，他們的王至今仍徘徊於此。',
    },
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
      { direction: 'east', targetRoomId: 'underground_waterfall', description: '河水向東方流去，傳來瀑布的轟鳴' },
    ],
    monsters: [
      { monsterId: 'crystal_lizard', maxCount: 3, respawnSeconds: 45 },
    ],
    mapSymbol: '[~]',
    mapX: 2,
    mapY: 8,
    guardianHints: {
      creature: '水面下的漣漪並非魚群——有大型水棲生物潛伏在河底。',
      treasure: '河床上的水晶碎片中混雜著打磨過的寶石，是河水沖刷而來的。',
      spirit: '螢光苔蘚的生長形態像是文字，記錄著地下河的源頭之秘。',
    },
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
      { direction: 'east', targetRoomId: 'ancient_altar', description: '礦脈深處有通往古代祭壇的階梯' },
    ],
    monsters: [
      { monsterId: 'gargoyle', maxCount: 3, respawnSeconds: 55 },
      { monsterId: 'crystal_lizard', maxCount: 2, respawnSeconds: 50 },
    ],
    mapSymbol: '[D]',
    mapX: 1,
    mapY: 10,
    guardianHints: {
      creature: '礦脈深處的熱氣不自然地波動，某種強大的存在正在甦醒。',
      treasure: '最大的水晶內部包裹著一件遠古的武器，需要特殊的方法才能取出。',
      spirit: '礦脈散發的能量來自大地之心，地底種族曾以此為信仰的核心。',
    },
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
      { direction: 'south', targetRoomId: 'coastal_boardwalk', description: '城門外的棧道通往東方海岸' },
    ],
    mapSymbol: '[=]',
    mapX: 3,
    mapY: 6,
    guardianHints: {
      creature: '城牆的裂縫中有蟲蟻出沒，似乎有什麼在侵蝕地基。',
      treasure: '衛兵換班時，城門邊的暗格會短暫露出——裡面可能有走私品。',
      spirit: '城門上的徽記蘊含著古老的守護魔法，至今仍在保護著城鎮。',
    },
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
      { direction: 'north', targetRoomId: 'tavern', description: '北邊傳來酒香和歡笑聲' },
    ],
    mapSymbol: '[$]',
    mapX: 4,
    mapY: 6,
    guardianHints: {
      creature: '屋頂上有快速移動的身影——可能是城鎮裡的竊賊或流浪貓。',
      treasure: '某個攤位上不起眼的角落裡，混雜著一件價值連城的古物。',
      spirit: '商業街的喧囂中夾雜著來自異國的低語，有個商人似乎不是普通人。',
    },
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
      { direction: 'east', targetRoomId: 'auction_house', description: '東邊是氣派的拍賣場' },
    ],
    mapSymbol: '[ ]',
    mapX: 5,
    mapY: 6,
    guardianHints: {
      creature: '噴泉中的英雄雕像眼中偶爾閃過光芒——可能是魔法守衛在巡邏。',
      treasure: '英雄雕像的底座上有可以按下的機關，但需要特定的順序。',
      spirit: '雕像紀念的英雄並未真正死去——他的靈魂仍守護著這座城鎮。',
    },
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
      { direction: 'east', targetRoomId: 'guild_hall', description: '東邊走廊通往公會大廳' },
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
    guardianHints: {
      creature: '魔法陣的能量有時會吸引元素生物，要小心突然出現的火焰精靈。',
      treasure: '四根巨柱的底座各藏著一個密室，裡面存放著各職業的秘傳武器。',
      spirit: '四位導師的力量在這裡交匯，大廳蘊含著轉職者的祝福與詛咒。',
    },
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
    guardianHints: {
      creature: '競技場的地下通道裡，有被淘汰的魔獸在暗處遊蕩。',
      treasure: '告示板背面刻著一串密碼，輸入後似乎能兌換隱藏獎勵。',
      spirit: '競技場的觀眾席上有無數戰魂在觀戰，他們的歡呼能激發鬥志。',
    },
  },

  // ─── 新手村外圍 (starter_village_ext) ──────────────────

  village_backhill: {
    id: 'village_backhill',
    name: '村莊後山',
    zone: 'starter_village_ext' as RoomDef['zone'],
    description:
      '村莊背後的小山丘，長滿了野草和灌木。山坡上散落著幾塊長滿苔蘚的巨石，' +
      '偶爾能看到綠色的半透明生物在草叢間蠕動。' +
      '從山頂可以俯瞰整個新手村，視野開闊。',
    exits: [
      { direction: 'down', targetRoomId: 'village_square', description: '下山回到村莊廣場' },
      { direction: 'east', targetRoomId: 'village_creek', description: '一條小路通往溪邊' },
      { direction: 'west', targetRoomId: 'abandoned_cottage', description: '山坡上有一間破舊的小屋' },
    ],
    monsters: [
      { monsterId: 'green_slime', maxCount: 3, respawnSeconds: 25 },
      { monsterId: 'field_rat', maxCount: 2, respawnSeconds: 30 },
    ],
    mapSymbol: '[M]',
    mapX: 2,
    mapY: 0,
    guardianHints: {
      creature: '巨石下方的陰暗處是史萊姆最愛的藏身地，搬開石頭會驚動牠們。',
      treasure: '山頂最大的巨石下似乎埋著什麼，泥土的顏色與周圍不同。',
      spirit: '這座小山是村莊的龍脈所在，據說建村的先祖將護村符印埋在了山頂。',
    },
  },

  village_creek: {
    id: 'village_creek',
    name: '小溪邊',
    zone: 'starter_village_ext' as RoomDef['zone'],
    description:
      '一條清澈的小溪從後山蜿蜒流下，溪水潺潺作響。溪邊的鵝卵石被水流打磨得光滑圓潤，' +
      '水草在溪底輕輕搖擺。幾隻綠史萊姆在溪邊吸收水氣。' +
      '這裡是村民洗衣和取水的地方。',
    exits: [
      { direction: 'west', targetRoomId: 'village_backhill', description: '沿小路回到後山' },
      { direction: 'south', targetRoomId: 'village_farmland', description: '溪水流向農田方向' },
    ],
    monsters: [
      { monsterId: 'green_slime', maxCount: 3, respawnSeconds: 25 },
    ],
    mapSymbol: '[~]',
    mapX: 3,
    mapY: 0,
    guardianHints: {
      creature: '溪底有異常大的水泡冒出，可能有史萊姆潛伏在水中。',
      treasure: '溪水沖刷的鵝卵石中，混著一顆不尋常的半透明石頭。',
      spirit: '小溪的水源來自山中的靈泉，飲用後據說能暫時恢復少量體力。',
    },
  },

  village_farmland: {
    id: 'village_farmland',
    name: '農田',
    zone: 'starter_village_ext' as RoomDef['zone'],
    description:
      '整齊的田壟間種滿了小麥和蔬菜，金黃的穗子在微風中搖曳。' +
      '農夫們抱怨田鼠猖獗，辛苦種下的作物經常被啃食殆盡。' +
      '田埂上偶爾能看到灰色的小影子飛速竄過。',
    exits: [
      { direction: 'north', targetRoomId: 'village_creek', description: '往溪邊走去' },
      { direction: 'east', targetRoomId: 'village_orchard', description: '旁邊就是果園' },
      { direction: 'south', targetRoomId: 'village_outskirts', description: '通往村外小路' },
    ],
    monsters: [
      { monsterId: 'field_rat', maxCount: 3, respawnSeconds: 25 },
    ],
    mapSymbol: '[田]',
    mapX: 3,
    mapY: 1,
    guardianHints: {
      creature: '田壟間的小洞是田鼠的巢穴入口，堵住出口就能甕中捉鱉。',
      treasure: '農夫的工具棚裡有一把品質異常好的鋤頭，看起來不像普通農具。',
      spirit: '這片農田受到豐收女神的微弱祝福，每年第一批收成都會特別甜美。',
    },
  },

  village_orchard: {
    id: 'village_orchard',
    name: '果園',
    zone: 'starter_village_ext' as RoomDef['zone'],
    description:
      '果樹成排排列，枝頭掛滿了紅彤彤的蘋果和金黃的梨子。' +
      '但烏鴉群經常光顧這裡，偷食成熟的果實，牠們刺耳的叫聲令果農不勝其煩。' +
      '田鼠也會來撿拾掉落的果實。',
    exits: [
      { direction: 'west', targetRoomId: 'village_farmland', description: '回到農田' },
    ],
    monsters: [
      { monsterId: 'dark_crow', maxCount: 2, respawnSeconds: 30 },
      { monsterId: 'field_rat', maxCount: 2, respawnSeconds: 30 },
    ],
    mapSymbol: '[果]',
    mapX: 4,
    mapY: 1,
    guardianHints: {
      creature: '果樹頂端的烏鴉巢裡有好幾隻幼鳥，母鴉會拼命保護牠們。',
      treasure: '最老的那棵果樹的樹洞裡，塞著一個布袋，裡面似乎有東西。',
      spirit: '果園的第一棵樹是精靈旅人種下的，它的果實有輕微的魔力回復效果。',
    },
  },

  graveyard_entrance: {
    id: 'graveyard_entrance',
    name: '墓地入口',
    zone: 'starter_village_ext' as RoomDef['zone'],
    description:
      '一道鏽蝕的鐵門半開著，門後是一片荒涼的墓地。歪斜的墓碑在月光下投射出長長的陰影，' +
      '地面上散落著枯萎的花束。空氣中瀰漫著陰冷的氣息，' +
      '隱約可以聽到骨頭碰撞的聲響。',
    exits: [
      { direction: 'north', targetRoomId: 'village_outskirts', description: '沿著小路回到村外' },
      { direction: 'east', targetRoomId: 'watchtower', description: '遠處有一座瞭望台' },
    ],
    monsters: [
      { monsterId: 'skeleton_soldier', maxCount: 3, respawnSeconds: 40 },
    ],
    mapSymbol: '[†]',
    mapX: 3,
    mapY: 3,
    guardianHints: {
      creature: '某些墓碑前的泥土有被翻動的痕跡，骷髏兵隨時可能從地下爬出。',
      treasure: '墓地管理人的小屋裡鎖著一本名冊，記載著埋葬者生前的寶物清單。',
      spirit: '墓地中飄蕩著不安的靈魂，他們渴望有人完成他們未竟的遺願。',
    },
  },

  abandoned_cottage: {
    id: 'abandoned_cottage',
    name: '廢棄小屋',
    zone: 'starter_village_ext' as RoomDef['zone'],
    description:
      '一間被藤蔓纏繞的破舊木屋，屋頂塌了一半，窗戶早已破碎。' +
      '屋內堆滿了落葉和碎木，角落裡有動物築巢的痕跡。' +
      '據村民說，這裡曾住著一位古怪的老巫師。',
    exits: [
      { direction: 'east', targetRoomId: 'village_backhill', description: '回到後山' },
    ],
    monsters: [
      { monsterId: 'dark_crow', maxCount: 2, respawnSeconds: 35 },
    ],
    mapSymbol: '[屋]',
    mapX: 1,
    mapY: 0,
    guardianHints: {
      creature: '屋樑上棲息著一群烏鴉，走進去會驚動牠們。',
      treasure: '壁爐的暗格裡還殘留著老巫師的東西——一本半焦的筆記和幾瓶藥水。',
      spirit: '老巫師的魔力殘留仍在保護著這間小屋，牆壁上的符文在夜晚會微微發光。',
    },
  },

  village_outskirts: {
    id: 'village_outskirts',
    name: '村外小路',
    zone: 'starter_village_ext' as RoomDef['zone'],
    description:
      '一條蜿蜒的泥土小路連接著村莊和外圍區域，路旁的野花隨風搖曳。' +
      '路面上有大小不一的腳印，看得出來常有野生動物經過。' +
      '這裡是前往墓地和瞭望台的必經之路。',
    exits: [
      { direction: 'north', targetRoomId: 'village_farmland', description: '通往農田' },
      { direction: 'south', targetRoomId: 'graveyard_entrance', description: '遠處隱約可見鐵門' },
      { direction: 'west', targetRoomId: 'village_gate', description: '回到村口' },
    ],
    monsters: [
      { monsterId: 'green_slime', maxCount: 2, respawnSeconds: 30 },
      { monsterId: 'field_rat', maxCount: 2, respawnSeconds: 30 },
    ],
    mapSymbol: ' . ',
    mapX: 3,
    mapY: 2,
    guardianHints: {
      creature: '路邊的草叢在無風的情況下搖動，裡面藏著覓食的田鼠。',
      treasure: '小路拐彎處的大樹下，有人用石頭堆了一個小標記，下面埋著東西。',
      spirit: '這條小路是古代商道的一部分，行走其上偶爾能感受到旅人的足跡殘影。',
    },
  },

  watchtower: {
    id: 'watchtower',
    name: '瞭望台',
    zone: 'starter_village_ext' as RoomDef['zone'],
    description:
      '一座半廢棄的石造瞭望台聳立在小丘上，登頂可以遠眺四方。' +
      '塔頂的旗幟早已破爛不堪，但殘存的守衛設施顯示這裡曾是重要的防禦據點。' +
      '烏鴉和骷髏兵出沒其間，讓這裡充滿危險。',
    exits: [
      { direction: 'west', targetRoomId: 'graveyard_entrance', description: '下坡回到墓地入口' },
    ],
    monsters: [
      { monsterId: 'dark_crow', maxCount: 2, respawnSeconds: 30 },
      { monsterId: 'skeleton_soldier', maxCount: 2, respawnSeconds: 45 },
    ],
    mapSymbol: '[塔]',
    mapX: 4,
    mapY: 3,
    guardianHints: {
      creature: '塔頂是烏鴉的棲息地，而骷髏兵在塔內的樓梯間巡邏。',
      treasure: '瞭望台頂層的箱子裡還留著昔日守衛的裝備和物資。',
      spirit: '瞭望台最後一任守衛的靈魂仍在值守，他會在危險逼近時發出警告的光芒。',
    },
  },

  // ─── 東方海岸 (eastern_coast) ──────────────────────────

  coastal_boardwalk: {
    id: 'coastal_boardwalk',
    name: '海邊棧道',
    zone: 'eastern_coast' as RoomDef['zone'],
    description:
      '木製棧道沿著海岸線延伸，腳下的木板在海風中吱嘎作響。' +
      '鹹濕的海風撲面而來，遠處的海面波光粼粼。' +
      '棧道入口立著一塊告示牌，提醒冒險者注意潮汐和海盜出沒。',
    exits: [
      { direction: 'north', targetRoomId: 'town_gate', description: '沿棧道回到城門口' },
      { direction: 'south', targetRoomId: 'sandy_beach', description: '沙灘在前方延伸' },
      { direction: 'east', targetRoomId: 'fishing_dock', description: '遠處可以看到漁村碼頭' },
    ],
    mapSymbol: '[棧]',
    mapX: 4,
    mapY: 5,
    guardianHints: {
      creature: '棧道下方的海水中偶爾能看到陰影掠過，海中生物在此巡遊。',
      treasure: '棧道的木板之間卡著幾枚被海水侵蝕的古老硬幣。',
      spirit: '這條棧道是古代海上貿易的起點，殘留著水手們啟航時的期盼。',
    },
  },

  sandy_beach: {
    id: 'sandy_beach',
    name: '沙灘',
    zone: 'eastern_coast' as RoomDef['zone'],
    description:
      '細軟的白沙在陽光下閃耀，海浪一波又一波地拍打著海岸。' +
      '沙灘上散落著貝殼和海藻，幾隻巨大的海蟹橫行其間。' +
      '遠處的水面偶爾有魚群跳躍。',
    exits: [
      { direction: 'north', targetRoomId: 'coastal_boardwalk', description: '回到棧道' },
      { direction: 'south', targetRoomId: 'tidal_zone', description: '沿海岸往潮間帶走' },
      { direction: 'east', targetRoomId: 'cliff_path', description: '一條小路通往海崖' },
    ],
    monsters: [
      { monsterId: 'sea_crab', maxCount: 3, respawnSeconds: 30 },
    ],
    mapSymbol: ' . ',
    mapX: 4,
    mapY: 6,
    guardianHints: {
      creature: '沙灘上的小洞是海蟹的巢穴，踩到洞口會驚動裡面的大蟹。',
      treasure: '退潮後的沙灘上偶爾會露出被海水沖上來的寶物。',
      spirit: '沙灘上的貝殼裡封存著海之歌，靠近耳邊能聽到遠古的旋律。',
    },
  },

  tidal_zone: {
    id: 'tidal_zone',
    name: '潮間帶',
    zone: 'eastern_coast' as RoomDef['zone'],
    description:
      '漲退潮之間的岩石地帶，佈滿了海藻和藤壺。水窪中棲息著各種海洋生物，' +
      '半透明的水母在淺水中漂浮。腳下的岩石濕滑無比，行走需要格外小心。',
    exits: [
      { direction: 'north', targetRoomId: 'sandy_beach', description: '回到沙灘' },
      { direction: 'south', targetRoomId: 'sea_cave', description: '岩壁上有一個黑暗的洞口' },
      { direction: 'east', targetRoomId: 'coral_shallows', description: '淺水區延伸向珊瑚淺灘' },
    ],
    monsters: [
      { monsterId: 'sea_crab', maxCount: 2, respawnSeconds: 35 },
      { monsterId: 'jellyfish', maxCount: 2, respawnSeconds: 35 },
    ],
    mapSymbol: '[潮]',
    mapX: 4,
    mapY: 7,
    guardianHints: {
      creature: '漲潮時水母會大量湧入，退潮時則是海蟹的天下。',
      treasure: '潮間帶的岩縫中卡著一些被海水打磨的半寶石。',
      spirit: '潮汐的規律蘊含著月神的意志，在滿月之夜此處的魔力最為強大。',
    },
  },

  sea_cave: {
    id: 'sea_cave',
    name: '海蝕洞',
    zone: 'eastern_coast' as RoomDef['zone'],
    description:
      '海浪長年侵蝕形成的巨大洞穴，洞壁上附著發光的海藻。' +
      '海水在洞內迴蕩，發出空洞的轟鳴聲。深處的水池中有蛇形的影子在游動。' +
      '漲潮時洞口會被海水淹沒，需要把握時機。',
    exits: [
      { direction: 'north', targetRoomId: 'tidal_zone', description: '回到潮間帶' },
      { direction: 'down', targetRoomId: 'underwater_cave', description: '水池下方似乎有通道' },
    ],
    monsters: [
      { monsterId: 'jellyfish', maxCount: 2, respawnSeconds: 40 },
      { monsterId: 'sea_serpent', maxCount: 2, respawnSeconds: 45 },
    ],
    mapSymbol: '[洞]',
    mapX: 4,
    mapY: 8,
    guardianHints: {
      creature: '洞壁上的刮痕是海蛇留下的——牠們在洞頂盤繞等待獵物。',
      treasure: '發光海藻的根部附近，岩壁中嵌著一顆海藍色的寶石。',
      spirit: '這個洞穴在上古時代是海之精靈的居所，牆壁上隱約可見精靈文字。',
    },
  },

  fishing_dock: {
    id: 'fishing_dock',
    name: '漁村碼頭',
    zone: 'eastern_coast' as RoomDef['zone'],
    description:
      '簡樸的木製碼頭延伸入海，幾艘漁船停泊在岸邊隨波搖晃。' +
      '漁網曬在架子上，空氣中瀰漫著魚腥味。' +
      '幾位漁民正在修補漁網，他們對冒險者的到來習以為常。',
    exits: [
      { direction: 'west', targetRoomId: 'coastal_boardwalk', description: '回到海邊棧道' },
      { direction: 'south', targetRoomId: 'lighthouse', description: '沿海岸走向燈塔' },
    ],
    mapSymbol: '[碼]',
    mapX: 5,
    mapY: 5,
    guardianHints: {
      creature: '碼頭下方的木樁上附著大量海蟹，牠們在夜間會爬上甲板。',
      treasure: '老漁夫說他年輕時曾在附近海域撈起過一把古劍，但被他藏了起來。',
      spirit: '碼頭的第一根木樁是用聖木製成的，保護著漁村免受海難。',
    },
  },

  lighthouse: {
    id: 'lighthouse',
    name: '燈塔',
    zone: 'eastern_coast' as RoomDef['zone'],
    description:
      '矗立在海角的白色燈塔，高聳入雲。塔頂的燈火在夜晚為航行者指引方向。' +
      '塔身被海風侵蝕得斑駁，螺旋樓梯盤旋而上。' +
      '烏鴉經常在塔頂盤旋，海蟹則在塔基的礁石上出沒。',
    exits: [
      { direction: 'north', targetRoomId: 'fishing_dock', description: '回到漁村碼頭' },
      { direction: 'south', targetRoomId: 'coral_shallows', description: '沿海岸走向珊瑚淺灘' },
    ],
    monsters: [
      { monsterId: 'dark_crow', maxCount: 2, respawnSeconds: 30 },
      { monsterId: 'sea_crab', maxCount: 2, respawnSeconds: 35 },
    ],
    mapSymbol: '[燈]',
    mapX: 5,
    mapY: 6,
    guardianHints: {
      creature: '燈塔頂部的烏鴉巢裡藏著閃亮的物品，牠們會攻擊靠近的人。',
      treasure: '燈塔守衛者的日誌中記載著海底寶藏的位置——如果能找到那本日誌的話。',
      spirit: '燈塔的光芒不僅僅是火焰，其中蘊含著守護精靈的力量。',
    },
  },

  coral_shallows: {
    id: 'coral_shallows',
    name: '珊瑚淺灘',
    zone: 'eastern_coast' as RoomDef['zone'],
    description:
      '淺海區域生長著五彩繽紛的珊瑚，海水清澈見底。' +
      '各種海洋生物在珊瑚叢中穿梭，水母在水中優雅地漂浮。' +
      '更深的水域中能看到蛇形的影子游動。',
    exits: [
      { direction: 'north', targetRoomId: 'lighthouse', description: '回到燈塔' },
      { direction: 'west', targetRoomId: 'tidal_zone', description: '回到潮間帶' },
      { direction: 'south', targetRoomId: 'shipwreck', description: '遠處海面上露出船的殘骸' },
    ],
    monsters: [
      { monsterId: 'jellyfish', maxCount: 2, respawnSeconds: 35 },
      { monsterId: 'sea_serpent', maxCount: 2, respawnSeconds: 45 },
    ],
    mapSymbol: '[珊]',
    mapX: 5,
    mapY: 7,
    guardianHints: {
      creature: '珊瑚叢中有海蛇偽裝成海帶——注意辨別「海帶」的粗細和動靜。',
      treasure: '最大的珊瑚礁中心有一顆巨大的珍珠，但被海蛇守護著。',
      spirit: '珊瑚群落是海之精靈的花園，每一株珊瑚都承載著精靈的祝福。',
    },
  },

  shipwreck: {
    id: 'shipwreck',
    name: '沉船殘骸',
    zone: 'eastern_coast' as RoomDef['zone'],
    description:
      '一艘巨大的帆船擱淺在暗礁上，船身傾斜，桅杆斷裂。' +
      '船體佈滿了藤壺和海藻，甲板上散落著腐爛的繩索和碎木板。' +
      '海盜和深海魚人將這裡當作據點，在殘骸間出沒。',
    exits: [
      { direction: 'north', targetRoomId: 'coral_shallows', description: '游回珊瑚淺灘' },
      { direction: 'south', targetRoomId: 'dark_reef', description: '沉船後方是暗礁區' },
      { direction: 'east', targetRoomId: 'pirate_camp', description: '海盜在岸邊設了營地' },
    ],
    monsters: [
      { monsterId: 'pirate', maxCount: 2, respawnSeconds: 50 },
      { monsterId: 'deep_fishman', maxCount: 1, respawnSeconds: 60 },
    ],
    mapSymbol: '[船]',
    mapX: 5,
    mapY: 8,
    guardianHints: {
      creature: '沉船的船艙裡躲著海盜和魚人，牠們在黑暗中有地利之便。',
      treasure: '船長室的保險箱雖然生鏽，但仍然鎖著——裡面可能有航海圖和寶藏。',
      spirit: '沉船上殘留著遇難水手的怨念，他們的靈魂在暴風雨之夜會重現最後的航行。',
    },
  },

  cliff_path: {
    id: 'cliff_path',
    name: '海崖步道',
    zone: 'eastern_coast' as RoomDef['zone'],
    description:
      '一條狹窄的石頭步道沿著海崖蜿蜒而上，一側是陡峭的崖壁，另一側是萬丈深淵。' +
      '海風在這裡格外強勁，站不穩就有被吹落懸崖的危險。' +
      '崖壁上的洞穴中棲息著海蟹。',
    exits: [
      { direction: 'west', targetRoomId: 'sandy_beach', description: '下崖回到沙灘' },
      { direction: 'south', targetRoomId: 'pirate_camp', description: '步道盡頭通往海盜營地' },
    ],
    monsters: [
      { monsterId: 'sea_crab', maxCount: 3, respawnSeconds: 35 },
    ],
    mapSymbol: '[崖]',
    mapX: 5,
    mapY: 6,
    guardianHints: {
      creature: '崖壁的洞穴裡塞滿了海蟹，牠們會用螯鉗攻擊經過洞口的人。',
      treasure: '崖壁的一處岩縫中卡著一把被風化的古劍，品質似乎還不錯。',
      spirit: '海崖曾是古代燈塔的所在地，守望者的精神仍在指引迷途的旅人。',
    },
  },

  pirate_camp: {
    id: 'pirate_camp',
    name: '海盜營地',
    zone: 'eastern_coast' as RoomDef['zone'],
    description:
      '隱蔽在海灣中的海盜營地，帳篷和篝火散落在岩石之間。' +
      '到處堆放著搶來的貨物和空酒桶，海盜旗在風中獵獵作響。' +
      '武裝的海盜在營地中巡邏，對入侵者毫不留情。',
    exits: [
      { direction: 'west', targetRoomId: 'shipwreck', description: '回到沉船殘骸' },
      { direction: 'north', targetRoomId: 'cliff_path', description: '沿步道離開' },
    ],
    monsters: [
      { monsterId: 'pirate', maxCount: 3, respawnSeconds: 45 },
    ],
    mapSymbol: '[盜]',
    mapX: 6,
    mapY: 8,
    guardianHints: {
      creature: '營地的海盜比其他地方的更訓練有素，他們會互相配合作戰。',
      treasure: '營地中央的大帳篷裡藏著海盜團的寶箱，但有重重機關。',
      spirit: '海盜團的創始人是一位被冤枉的海軍將領，他的復仇之心驅使著整個團夥。',
    },
  },

  dark_reef: {
    id: 'dark_reef',
    name: '暗礁',
    zone: 'eastern_coast' as RoomDef['zone'],
    description:
      '危險的暗礁區域，尖銳的岩石在海面下若隱若現。' +
      '海流在這裡變得湍急而複雜，許多船隻在此觸礁沉沒。' +
      '深海魚人和海蛇將此處作為狩獵場。',
    exits: [
      { direction: 'north', targetRoomId: 'shipwreck', description: '回到沉船殘骸' },
      { direction: 'south', targetRoomId: 'underwater_cave', description: '水下有一條通道' },
    ],
    monsters: [
      { monsterId: 'sea_serpent', maxCount: 2, respawnSeconds: 45 },
      { monsterId: 'deep_fishman', maxCount: 2, respawnSeconds: 55 },
    ],
    mapSymbol: '[礁]',
    mapX: 5,
    mapY: 9,
    guardianHints: {
      creature: '暗礁的水下洞穴是魚人的集結地——牠們會從四面八方湧出。',
      treasure: '無數觸礁沉船的遺物散落在暗礁之間，有些至今仍在發光。',
      spirit: '暗礁是海神設下的試煉，只有通過考驗的人才能進入海底的秘境。',
    },
  },

  underwater_cave: {
    id: 'underwater_cave',
    name: '海底洞穴',
    zone: 'eastern_coast' as RoomDef['zone'],
    description:
      '深入海底的神秘洞穴，被魔法氣泡維持著可呼吸的空間。' +
      '洞壁上鑲嵌著發光的深海珊瑚，照亮了這片幽暗的領域。' +
      '這裡是深海魚人首領的巢穴，充滿了危險和寶藏。',
    exits: [
      { direction: 'up', targetRoomId: 'sea_cave', description: '游向上方的海蝕洞' },
      { direction: 'north', targetRoomId: 'dark_reef', description: '游回暗礁區' },
    ],
    monsters: [
      { monsterId: 'deep_fishman', maxCount: 3, respawnSeconds: 50 },
    ],
    mapSymbol: '[深]',
    mapX: 4,
    mapY: 9,
    guardianHints: {
      creature: '洞穴深處有一隻異常巨大的魚人首領，牠的三叉戟散發著藍色的光芒。',
      treasure: '魚人的祭壇上擺放著從沉船中收集的珍貴寶物和深海寶珠。',
      spirit: '這個洞穴是古代海之神殿的入口，魚人在此守護著神殿的最後秘密。',
    },
  },

  // ─── 火山地帶 (volcano_zone) ──────────────────────────

  volcano_base: {
    id: 'volcano_base',
    name: '火山山腳',
    zone: 'volcano_zone' as RoomDef['zone'],
    description:
      '火山的山腳下，地面覆蓋著一層黑色的火山灰。空氣中瀰漫著硫磺的刺鼻氣味，' +
      '遠處的火山口冒著縷縷白煙。地面的溫度比平常高出許多，' +
      '偶爾能感受到腳下輕微的震動。',
    exits: [
      { direction: 'north', targetRoomId: 'elf_ruins', description: '穿過灼熱的荒野回到精靈遺跡' },
      { direction: 'south', targetRoomId: 'lava_trail', description: '一條小徑通往火山上方' },
      { direction: 'east', targetRoomId: 'dwarf_mine', description: '山腳旁有一個礦坑入口' },
    ],
    mapSymbol: '[▲]',
    mapX: 1,
    mapY: 7,
    guardianHints: {
      creature: '火山灰覆蓋的地面上有蜥蜴的爪印，火蜥蜴在附近活動。',
      treasure: '火山灰下偶爾會露出被噴發帶出的礦石，有些相當值錢。',
      spirit: '火山的低沉轟鳴中蘊含著大地之靈的嘆息，牠在守護著地底的秘密。',
    },
  },

  lava_trail: {
    id: 'lava_trail',
    name: '熔岩小徑',
    zone: 'volcano_zone' as RoomDef['zone'],
    description:
      '一條蜿蜒在凝固熔岩上的狹窄小路，兩側的岩石仍散發著灼熱的紅光。' +
      '空氣因高溫而扭曲，每一步都要小心避開仍在流動的岩漿細流。' +
      '火蜥蜴在溫暖的岩石上悠然自得。',
    exits: [
      { direction: 'north', targetRoomId: 'volcano_base', description: '下山回到山腳' },
      { direction: 'south', targetRoomId: 'sulfur_valley', description: '小徑延伸向硫磺谷' },
      { direction: 'east', targetRoomId: 'magma_river', description: '遠處傳來岩漿流動的聲響' },
    ],
    monsters: [
      { monsterId: 'fire_salamander', maxCount: 3, respawnSeconds: 35 },
    ],
    mapSymbol: ' . ',
    mapX: 1,
    mapY: 8,
    guardianHints: {
      creature: '凝固熔岩的裂縫中有火蜥蜴在取暖，靠近時牠們會噴火攻擊。',
      treasure: '熔岩冷卻時包裹住的氣泡中，偶爾會形成罕見的火成玻璃。',
      spirit: '這條小徑是古代矮人的巡邏路線，他們在岩壁上刻下了方向標記。',
    },
  },

  sulfur_valley: {
    id: 'sulfur_valley',
    name: '硫磺谷',
    zone: 'volcano_zone' as RoomDef['zone'],
    description:
      '濃烈的硫磺氣味充斥著整個山谷，地面上冒著滾燙的蒸汽。' +
      '黃色的硫磺結晶覆蓋在岩石表面，熱泉在低窪處沸騰冒泡。' +
      '火蜥蜴和熔岩蟲在這種極端環境中如魚得水。',
    exits: [
      { direction: 'north', targetRoomId: 'lava_trail', description: '回到熔岩小徑' },
      { direction: 'south', targetRoomId: 'volcano_crater', description: '繼續向火山口攀登' },
    ],
    monsters: [
      { monsterId: 'fire_salamander', maxCount: 2, respawnSeconds: 35 },
      { monsterId: 'lava_worm', maxCount: 2, respawnSeconds: 50 },
    ],
    mapSymbol: '[硫]',
    mapX: 1,
    mapY: 9,
    guardianHints: {
      creature: '地面突然冒出的蒸汽柱可能是熔岩蟲即將鑽出的徵兆。',
      treasure: '硫磺結晶中偶爾混著珍貴的火成寶石，但需要小心取下。',
      spirit: '硫磺谷是火山的排氣口，地底深處的火焰之靈在此吐息。',
    },
  },

  volcano_crater: {
    id: 'volcano_crater',
    name: '火山口',
    zone: 'volcano_zone' as RoomDef['zone'],
    description:
      '攀登至火山口的邊緣，腳下是翻騰的岩漿湖。灼熱的氣浪撲面而來，' +
      '火焰精靈在岩漿上方翩翩起舞，牠們的身影在熱浪中若隱若現。' +
      '這裡的溫度高得驚人，普通人無法久留。',
    exits: [
      { direction: 'north', targetRoomId: 'sulfur_valley', description: '退回硫磺谷' },
      { direction: 'east', targetRoomId: 'fire_temple_entrance', description: '岩壁上有一道石門' },
    ],
    monsters: [
      { monsterId: 'flame_spirit', maxCount: 3, respawnSeconds: 45 },
    ],
    mapSymbol: '[火]',
    mapX: 1,
    mapY: 10,
    guardianHints: {
      creature: '火焰精靈在岩漿上方最活躍——用冰屬性攻擊可以讓牠們暫時凝固。',
      treasure: '岩漿湖中央有一座小島，上面似乎放著發光的東西。',
      spirit: '火山口是通往地心的窗口，這裡的火焰蘊含著世界誕生時的原初之力。',
    },
  },

  magma_river: {
    id: 'magma_river',
    name: '岩漿河',
    zone: 'volcano_zone' as RoomDef['zone'],
    description:
      '一條滾燙的岩漿河從火山側面流出，橘紅色的岩漿緩慢而致命地流淌。' +
      '河岸的岩石被高溫炙烤得通紅，空氣中的熱浪扭曲了視線。' +
      '熔岩蟲在岩漿河中自在穿行，火蜥蜴則在河岸捕食。',
    exits: [
      { direction: 'west', targetRoomId: 'lava_trail', description: '回到熔岩小徑' },
      { direction: 'south', targetRoomId: 'obsidian_cave', description: '河岸邊有一個漆黑的洞口' },
    ],
    monsters: [
      { monsterId: 'lava_worm', maxCount: 2, respawnSeconds: 45 },
      { monsterId: 'fire_salamander', maxCount: 2, respawnSeconds: 40 },
    ],
    mapSymbol: '[漿]',
    mapX: 2,
    mapY: 8,
    guardianHints: {
      creature: '岩漿河面上的氣泡破裂前，熔岩蟲會從河中突然竄出。',
      treasure: '河岸的冷卻岩漿中凝結著稀有的火成礦石，需要工具才能敲下。',
      spirit: '岩漿河是火山的血脈，牠的流向隱含著地底能量場的走勢。',
    },
  },

  obsidian_cave: {
    id: 'obsidian_cave',
    name: '黑曜石洞',
    zone: 'volcano_zone' as RoomDef['zone'],
    description:
      '洞壁由純黑的黑曜石構成，表面如鏡子般光滑，映照出扭曲的倒影。' +
      '洞內的溫度意外地比外面低一些，但空氣中仍帶著焦灼的味道。' +
      '岩石巨人和熔岩蟲在這裡守護著地底的礦脈。',
    exits: [
      { direction: 'north', targetRoomId: 'magma_river', description: '回到岩漿河' },
      { direction: 'south', targetRoomId: 'fire_temple_entrance', description: '深處有微弱的火光' },
    ],
    monsters: [
      { monsterId: 'rock_giant', maxCount: 1, respawnSeconds: 70 },
      { monsterId: 'lava_worm', maxCount: 2, respawnSeconds: 50 },
    ],
    mapSymbol: '[黑]',
    mapX: 2,
    mapY: 9,
    guardianHints: {
      creature: '黑曜石的倒影中有時會出現不屬於你的身影——岩石巨人正從背後接近。',
      treasure: '洞壁深處的黑曜石品質極高，是鍛造暗屬性武器的頂級材料。',
      spirit: '黑曜石洞是古代矮人的聖地，他們相信黑曜石能封印邪惡的力量。',
    },
  },

  fire_temple_entrance: {
    id: 'fire_temple_entrance',
    name: '火焰神殿入口',
    zone: 'volcano_zone' as RoomDef['zone'],
    description:
      '巨大的石門上雕刻著火焰的紋飾，門框兩側的火盆燃燒著永不熄滅的火焰。' +
      '門上的古代文字似乎是矮人語，記載著神殿的歷史和警告。' +
      '門內傳來低沉的轟鳴聲和熱氣。',
    exits: [
      { direction: 'west', targetRoomId: 'volcano_crater', description: '回到火山口' },
      { direction: 'north', targetRoomId: 'obsidian_cave', description: '回到黑曜石洞' },
      { direction: 'south', targetRoomId: 'volcano_summit', description: '通往火山頂的內部通道' },
    ],
    monsters: [
      { monsterId: 'flame_spirit', maxCount: 2, respawnSeconds: 50 },
      { monsterId: 'rock_giant', maxCount: 1, respawnSeconds: 70 },
    ],
    mapSymbol: '[殿]',
    mapX: 2,
    mapY: 10,
    guardianHints: {
      creature: '火盆的火焰偶爾會凝聚成精靈的形態——牠們是神殿的守護者。',
      treasure: '石門上的文字中隱含著打開內部寶庫的密碼。',
      spirit: '火焰神殿是矮人王國的精神中心，他們在此祭祀火焰之神並鍛造神兵。',
    },
  },

  dwarf_mine: {
    id: 'dwarf_mine',
    name: '矮人礦坑',
    zone: 'volcano_zone' as RoomDef['zone'],
    description:
      '寬闊的礦坑中迴盪著鐵錘敲擊岩石的聲響，礦車軌道延伸向黑暗的深處。' +
      '矮人守衛警覺地巡邏著，他們不歡迎不速之客。' +
      '礦壁上閃爍著各種礦石的光澤。',
    exits: [
      { direction: 'west', targetRoomId: 'volcano_base', description: '回到火山山腳' },
      { direction: 'south', targetRoomId: 'forge_hall', description: '礦道深處通往鍛造大廳' },
    ],
    monsters: [
      { monsterId: 'dwarf_guard', maxCount: 3, respawnSeconds: 55 },
    ],
    mapSymbol: '[礦]',
    mapX: 2,
    mapY: 7,
    guardianHints: {
      creature: '矮人守衛的換班時間有規律——觀察巡邏模式可以找到空檔。',
      treasure: '礦壁上某處的礦石異常耀眼，那是稀有的秘銀礦脈。',
      spirit: '礦坑的每一塊石頭都記錄著矮人族數百年的勞動，他們的執著令人敬佩。',
    },
  },

  forge_hall: {
    id: 'forge_hall',
    name: '鍛造大廳',
    zone: 'volcano_zone' as RoomDef['zone'],
    description:
      '宏偉的鍛造大廳中央是一座巨大的熔爐，火焰熊熊燃燒。' +
      '四周的工作台上擺滿了鐵錘、鉗子和各種鍛造工具。' +
      '一位技藝精湛的矮人鐵匠正在這裡工作，他願意為有價值的客人打造裝備。',
    exits: [
      { direction: 'north', targetRoomId: 'dwarf_mine', description: '回到礦坑' },
    ],
    npcs: ['dwarf_blacksmith'],
    mapSymbol: '[鍛]',
    mapX: 3,
    mapY: 7,
    guardianHints: {
      creature: '熔爐下方的通氣口偶爾會鑽出小型的火元素生物。',
      treasure: '大廳牆上的展示架上放著矮人鐵匠最得意的作品——傳說級的武器。',
      spirit: '鍛造大廳中瀰漫著千年的鍛造之魂，每一件在此打造的武器都帶著矮人的祝福。',
    },
  },

  volcano_summit: {
    id: 'volcano_summit',
    name: '火山頂',
    zone: 'volcano_zone' as RoomDef['zone'],
    description:
      '火山的最高點，腳下是翻騰的岩漿和蒸騰的熱氣。' +
      '強風在這裡呼嘯而過，視野卻無比開闊——整個大陸盡收眼底。' +
      '岩石巨人和火焰精靈在此守護著火山的核心力量。',
    exits: [
      { direction: 'north', targetRoomId: 'fire_temple_entrance', description: '回到火焰神殿入口' },
    ],
    monsters: [
      { monsterId: 'rock_giant', maxCount: 2, respawnSeconds: 65 },
      { monsterId: 'flame_spirit', maxCount: 2, respawnSeconds: 55 },
    ],
    mapSymbol: '[頂]',
    mapX: 2,
    mapY: 11,
    guardianHints: {
      creature: '火山頂的守護者比其他地方的更加強大，牠們被火山核心的能量強化了。',
      treasure: '火山核心深處蘊藏著傳說中的炎之心——據說能打造最強的火屬性武器。',
      spirit: '站在火山頂，能感受到大地心臟的跳動。這裡是世界能量的匯聚點之一。',
    },
  },

  // ─── 冰封雪原 (frozen_wastes) ─────────────────────────

  snowfield_entrance: {
    id: 'snowfield_entrance',
    name: '雪原入口',
    zone: 'frozen_wastes' as RoomDef['zone'],
    description:
      '踏入北方的那一刻，溫度驟然下降。皚皚白雪覆蓋著一切，寒風如刀割般刺骨。' +
      '前方是一片一望無際的雪原，天地間只剩下白茫茫的一片。' +
      '入口處立著一塊石碑，上面的文字被冰霜覆蓋。',
    exits: [
      { direction: 'south', targetRoomId: 'forest_entrance', description: '穿過冰雪小路回到暗影森林入口' },
      { direction: 'north', targetRoomId: 'blizzard_path', description: '踏入暴風雪中' },
      { direction: 'east', targetRoomId: 'mountain_camp', description: '東方有營火的光芒' },
    ],
    mapSymbol: '[雪]',
    mapX: 2,
    mapY: 12,
    guardianHints: {
      creature: '雪地上有新鮮的狼蹄印，雪狼群可能就在附近潛伏。',
      treasure: '石碑上的冰霜如果能融化，或許能讀到重要的指引。',
      spirit: '石碑記載著冰封雪原的歷史——這裡曾是一個繁榮文明的家園。',
    },
  },

  blizzard_path: {
    id: 'blizzard_path',
    name: '暴風雪路',
    zone: 'frozen_wastes' as RoomDef['zone'],
    description:
      '呼嘯的暴風雪讓視線降到幾乎為零，每走一步都像是在與風暴搏鬥。' +
      '冰雪打在臉上如同針刺，體溫在急速流失。' +
      '隱約能聽到狼群的嚎叫聲在風中迴盪。',
    exits: [
      { direction: 'south', targetRoomId: 'snowfield_entrance', description: '退回雪原入口' },
      { direction: 'north', targetRoomId: 'glacier', description: '風暴的另一端是冰河' },
    ],
    monsters: [
      { monsterId: 'snow_wolf', maxCount: 3, respawnSeconds: 40 },
    ],
    mapSymbol: '[暴]',
    mapX: 2,
    mapY: 13,
    guardianHints: {
      creature: '暴風雪是雪狼最愛的狩獵時機——在風聲中辨別狼嚎就能提前防範。',
      treasure: '暴風雪偶爾會露出被冰雪掩埋的古代遺物。',
      spirit: '暴風雪並非自然現象——它是冰之精靈憤怒的表現。',
    },
  },

  glacier: {
    id: 'glacier',
    name: '冰河',
    zone: 'frozen_wastes' as RoomDef['zone'],
    description:
      '巨大的冰河緩慢地向低處移動，冰面上裂開了深不見底的冰縫。' +
      '冰層中封凍著古代的植物和動物殘骸，宛如天然的博物館。' +
      '雪狼和冰元素在冰河上遊蕩，對入侵者虎視眈眈。',
    exits: [
      { direction: 'south', targetRoomId: 'blizzard_path', description: '回到暴風雪路' },
      { direction: 'north', targetRoomId: 'frozen_lake', description: '冰河延伸至凍湖' },
      { direction: 'east', targetRoomId: 'crystal_ice_cave', description: '冰壁上有一個洞口' },
    ],
    monsters: [
      { monsterId: 'snow_wolf', maxCount: 2, respawnSeconds: 40 },
      { monsterId: 'ice_elemental', maxCount: 2, respawnSeconds: 50 },
    ],
    mapSymbol: '[河]',
    mapX: 2,
    mapY: 14,
    guardianHints: {
      creature: '冰縫深處有冰元素在凝聚——牠們會從裂縫中突然浮出。',
      treasure: '冰層中封凍的物品中，有些是古代文明的遺寶。',
      spirit: '冰河承載著千萬年的歷史，每一層冰都記錄著不同時代的故事。',
    },
  },

  frozen_lake: {
    id: 'frozen_lake',
    name: '凍湖',
    zone: 'frozen_wastes' as RoomDef['zone'],
    description:
      '一片廣闊的湖泊被厚厚的冰層封凍，冰面如鏡子般平滑。' +
      '冰下隱約可見魚群游動的影子，湖面上飄蕩著冰霧。' +
      '冰元素在湖面上緩緩遊蕩，守護著這片凍結的領域。',
    exits: [
      { direction: 'south', targetRoomId: 'glacier', description: '回到冰河' },
      { direction: 'north', targetRoomId: 'aurora_field', description: '湖的北岸有奇異的光芒' },
    ],
    monsters: [
      { monsterId: 'ice_elemental', maxCount: 3, respawnSeconds: 45 },
    ],
    mapSymbol: '[湖]',
    mapX: 2,
    mapY: 15,
    guardianHints: {
      creature: '冰面某些地方特別薄——冰元素會利用這一點從下方發動突擊。',
      treasure: '湖底沉睡著一座古代城市的遺跡，凍湖就是天然的保護層。',
      spirit: '凍湖的冰面在月光下會反射出古代城市的幻象——那是被時間凍結的記憶。',
    },
  },

  mountain_camp: {
    id: 'mountain_camp',
    name: '雪山營地',
    zone: 'frozen_wastes' as RoomDef['zone'],
    description:
      '一個被岩壁遮擋的避風處，前人在此搭建了簡易的營地。' +
      '篝火仍在燃燒，溫暖的光芒驅散了周圍的寒意。' +
      '營地裡存放著一些補給品和取暖用具，是雪原中難得的安全地帶。',
    exits: [
      { direction: 'west', targetRoomId: 'snowfield_entrance', description: '回到雪原入口' },
      { direction: 'north', targetRoomId: 'wolf_den', description: '營地北方傳來狼嚎' },
    ],
    mapSymbol: '[營]',
    mapX: 3,
    mapY: 12,
    guardianHints: {
      creature: '營地周圍的雪地上有各種動物的腳印，但目前看來是安全的。',
      treasure: '前一位旅人在營地留下了一本日記，記載著雪原深處的秘密。',
      spirit: '篝火中蘊含著前人的祝福之力，在此休息可以恢復體力和精神。',
    },
  },

  crystal_ice_cave: {
    id: 'crystal_ice_cave',
    name: '冰晶洞穴',
    zone: 'frozen_wastes' as RoomDef['zone'],
    description:
      '洞壁由純淨的冰晶構成，在微光下折射出璀璨的彩虹。' +
      '洞穴深處的溫度極低，呼出的氣息瞬間凝結成冰霜。' +
      '冰元素和霜巨人守護著這處天然的冰晶寶庫。',
    exits: [
      { direction: 'west', targetRoomId: 'glacier', description: '回到冰河' },
      { direction: 'north', targetRoomId: 'ice_castle_gate', description: '洞穴深處通向一座冰封城堡' },
    ],
    monsters: [
      { monsterId: 'ice_elemental', maxCount: 2, respawnSeconds: 50 },
      { monsterId: 'frost_giant', maxCount: 1, respawnSeconds: 75 },
    ],
    mapSymbol: '[晶]',
    mapX: 3,
    mapY: 14,
    guardianHints: {
      creature: '洞壁的冰晶中有時會映出巨人的倒影——那不是幻象，牠就在你身後。',
      treasure: '洞穴最深處的冰晶純度極高，是製造冰屬性裝備的頂級素材。',
      spirit: '冰晶洞穴是大地之力與冰之力交匯的聖地，蘊含著純粹的元素能量。',
    },
  },

  aurora_field: {
    id: 'aurora_field',
    name: '極光之地',
    zone: 'frozen_wastes' as RoomDef['zone'],
    description:
      '天空中飄蕩著壯麗的極光，綠色、紫色和藍色的光幕在夜空中舞動。' +
      '雪地被極光映照得如夢似幻，空氣中充滿了微弱的魔力波動。' +
      '巨大的雪人在極光下遊蕩，似乎被這裡的魔力吸引。',
    exits: [
      { direction: 'south', targetRoomId: 'frozen_lake', description: '回到凍湖' },
      { direction: 'east', targetRoomId: 'ice_castle_gate', description: '極光指引的方向有一座城堡' },
    ],
    monsters: [
      { monsterId: 'yeti', maxCount: 2, respawnSeconds: 60 },
    ],
    mapSymbol: '[光]',
    mapX: 2,
    mapY: 16,
    guardianHints: {
      creature: '雪人在極光下會進入狂暴狀態——月隱之時牠們相對平靜。',
      treasure: '極光的能量偶爾會在地面凝聚成「極光石」，是極為稀有的魔法材料。',
      spirit: '極光是冰封大陸上古守護神的顯現，凝視極光太久會看到過去和未來的幻象。',
    },
  },

  wolf_den: {
    id: 'wolf_den',
    name: '雪狼巢穴',
    zone: 'frozen_wastes' as RoomDef['zone'],
    description:
      '一個被雪狼群佔據的巨大岩洞，洞口散落著獵物的殘骸和啃碎的骨頭。' +
      '空氣中瀰漫著野獸的腥臭味，多隻雪狼在洞內警覺地注視著入侵者。' +
      '洞穴深處隱約可以看到更多綠色的眼睛在黑暗中閃爍。',
    exits: [
      { direction: 'south', targetRoomId: 'mountain_camp', description: '逃回雪山營地' },
    ],
    monsters: [
      { monsterId: 'snow_wolf', maxCount: 4, respawnSeconds: 35 },
    ],
    mapSymbol: '[狼]',
    mapX: 3,
    mapY: 13,
    guardianHints: {
      creature: '狼群有嚴格的階級——擊倒最大的那隻，其餘的就會暫時退卻。',
      treasure: '狼群的巢穴深處堆積著從旅人身上搶來的裝備和物品。',
      spirit: '雪狼群的首領擁有與冰之精靈溝通的能力，牠守護著通往精靈領域的入口。',
    },
  },

  ice_castle_gate: {
    id: 'ice_castle_gate',
    name: '冰封城堡大門',
    zone: 'frozen_wastes' as RoomDef['zone'],
    description:
      '一座宏偉的冰封城堡聳立在風雪之中，巨大的冰門上雕刻著龍的紋飾。' +
      '城門前的石階被冰雪覆蓋，兩尊霜巨人雕像守在門口。' +
      '門縫中透出冷冽的藍光，伴隨著低沉的龍息聲。',
    exits: [
      { direction: 'south', targetRoomId: 'crystal_ice_cave', description: '退回冰晶洞穴' },
      { direction: 'west', targetRoomId: 'aurora_field', description: '回到極光之地' },
      { direction: 'north', targetRoomId: 'ice_throne', description: '推開冰門，進入城堡' },
    ],
    monsters: [
      { monsterId: 'frost_giant', maxCount: 2, respawnSeconds: 65 },
      { monsterId: 'yeti', maxCount: 1, respawnSeconds: 60 },
    ],
    mapSymbol: '[門]',
    mapX: 3,
    mapY: 15,
    guardianHints: {
      creature: '門口的「雕像」可能隨時活過來——不要背對著牠們。',
      treasure: '冰門上的龍紋在特定的魔法咒語下會開啟隱藏的寶庫。',
      spirit: '這座城堡是冰之王朝最後的堡壘，千年前的戰爭痕跡仍清晰可見。',
    },
  },

  ice_throne: {
    id: 'ice_throne',
    name: '冰封王座',
    zone: 'frozen_wastes' as RoomDef['zone'],
    description:
      '城堡的最深處是一座宏偉的王座大廳，穹頂高聳入雲。' +
      '冰之王座上沉睡著一隻幼年冰龍，牠的呼吸在空氣中凝結成冰霜。' +
      '大廳四壁鑲嵌著無數冰晶，映照出冰龍威嚴的身影。' +
      '這裡是冰封雪原的終極挑戰。',
    exits: [
      { direction: 'south', targetRoomId: 'ice_castle_gate', description: '退回城堡大門' },
    ],
    monsters: [
      { monsterId: 'ice_dragon_whelp', maxCount: 1, respawnSeconds: 600 },
    ],
    mapSymbol: '[龍]',
    mapX: 3,
    mapY: 16,
    guardianHints: {
      creature: '冰龍在睡夢中也會本能地攻擊靠近的生物——不要試圖偷襲。',
      treasure: '王座背後的密室裡藏著冰之王朝的王冠和權杖——傳說級的裝備。',
      spirit: '冰龍幼崽的母親長眠在雪原深處——牠在等待母親甦醒的那一天。',
    },
  },
};

// 合併擴充房間
import { EXPANSION_ROOMS } from './rooms-expansion.js';
Object.assign(ROOMS, EXPANSION_ROOMS);

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
