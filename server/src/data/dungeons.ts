// 副本資料定義 - 暗影地牢 & 水晶聖殿

import type { MonsterDef } from '@game/shared';

// ============================================================
//  副本房間定義
// ============================================================

export interface DungeonRoomDef {
  id: string;
  name: string;
  description: string;
  monsters: { monsterId: string; count: number }[];
  isBoss: boolean;
}

// ============================================================
//  副本定義
// ============================================================

export interface DungeonDef {
  id: string;
  name: string;
  description: string;
  /** 最低等級需求 */
  levelReq: number;
  /** 最大玩家數 */
  maxPlayers: number;
  /** 時間限制（秒） */
  timeLimit: number;
  /** 入場費用（金幣） */
  entranceFee: number;
  /** 副本房間（線性連接：入口 → 走廊 → Boss 房） */
  rooms: DungeonRoomDef[];
  /** 首次通關獎勵 */
  firstClearRewards: {
    exp: number;
    gold: number;
    items: { itemId: string; qty: number }[];
  };
  /** 普通通關獎勵 */
  normalRewards: {
    exp: number;
    gold: number;
  };
  /** 對應的世界入口房間 */
  entranceRoomId: string;
}

// ============================================================
//  副本怪物定義（副本專用怪物）
// ============================================================

export const DUNGEON_MONSTERS: Record<string, MonsterDef> = {

  // ─── 暗影地牢怪物 ─────────────────────────────────────────

  shadow_wolf_minion: {
    id: 'shadow_wolf_minion',
    name: '暗影狼僕從',
    level: 15,
    hp: 180,
    mp: 30,
    str: 22,
    int: 10,
    dex: 20,
    vit: 16,
    luk: 8,
    element: 'dark',
    skills: ['basic_attack', 'shadow_bite', 'shadow_dash'],
    expReward: 80,
    goldReward: [20, 40],
    drops: [
      { itemId: 'shadow_pelt', chance: 0.4, minQty: 1, maxQty: 1 },
      { itemId: 'shadow_essence', chance: 0.2, minQty: 1, maxQty: 1 },
    ],
    aiType: 'aggressive',
    description: '暗影地牢中受暗影之力驅使的狼群，比普通暗影狼更加狂暴。',
    isBoss: false,
  },

  shadow_sentinel: {
    id: 'shadow_sentinel',
    name: '暗影哨兵',
    level: 16,
    hp: 220,
    mp: 40,
    str: 24,
    int: 14,
    dex: 18,
    vit: 20,
    luk: 6,
    element: 'dark',
    skills: ['basic_attack', 'shadow_bite', 'howl', 'shadow_dash'],
    expReward: 95,
    goldReward: [25, 50],
    drops: [
      { itemId: 'shadow_pelt', chance: 0.5, minQty: 1, maxQty: 2 },
      { itemId: 'dark_crystal', chance: 0.15, minQty: 1, maxQty: 1 },
    ],
    aiType: 'aggressive',
    description: '守衛暗影地牢走廊的暗影生物，擁有比普通狼更厚實的暗影護甲。',
    isBoss: false,
  },

  shadow_wolf_alpha_dungeon: {
    id: 'shadow_wolf_alpha_dungeon',
    name: '暗影狼王（副本）',
    level: 20,
    hp: 800,
    mp: 100,
    str: 38,
    int: 18,
    dex: 30,
    vit: 32,
    luk: 14,
    element: 'dark',
    skills: [
      'basic_attack', 'shadow_bite', 'shadow_dash', 'howl',
      'shadow_storm', 'alpha_roar', 'shadow_devour',
    ],
    expReward: 500,
    goldReward: [150, 300],
    drops: [
      { itemId: 'shadow_pelt', chance: 1.0, minQty: 2, maxQty: 4 },
      { itemId: 'shadow_essence', chance: 0.8, minQty: 2, maxQty: 3 },
      { itemId: 'alpha_fang', chance: 0.6, minQty: 1, maxQty: 1 },
      { itemId: 'shadow_cloak', chance: 0.2, minQty: 1, maxQty: 1 },
      { itemId: 'shadow_blade', chance: 0.12, minQty: 1, maxQty: 1 },
    ],
    aiType: 'boss',
    description:
      '暗影地牢的最終Boss——暗影狼王。在副本深處積蓄了更強大的暗影之力，' +
      '比野外的狼王更加兇猛。牠的暗影風暴足以吞噬一切。',
    isBoss: true,
  },

  // ─── 水晶聖殿怪物 ─────────────────────────────────────────

  crystal_golem: {
    id: 'crystal_golem',
    name: '水晶魔像',
    level: 25,
    hp: 350,
    mp: 50,
    str: 32,
    int: 20,
    dex: 12,
    vit: 35,
    luk: 5,
    element: 'ice',
    skills: ['basic_attack', 'crystal_shard', 'stone_slam', 'ice_armor'],
    expReward: 150,
    goldReward: [40, 80],
    drops: [
      { itemId: 'crystal_shard', chance: 0.5, minQty: 1, maxQty: 3 },
      { itemId: 'golem_core', chance: 0.15, minQty: 1, maxQty: 1 },
    ],
    aiType: 'defensive',
    description: '由水晶聖殿的魔力凝聚而成的魔像，行動遲緩但防禦極為堅固。',
    isBoss: false,
  },

  crystal_sentinel: {
    id: 'crystal_sentinel',
    name: '水晶守衛兵',
    level: 26,
    hp: 380,
    mp: 60,
    str: 34,
    int: 22,
    dex: 16,
    vit: 32,
    luk: 6,
    element: 'ice',
    skills: ['basic_attack', 'crystal_shard', 'ice_storm', 'stone_skin'],
    expReward: 170,
    goldReward: [45, 90],
    drops: [
      { itemId: 'crystal_scale', chance: 0.4, minQty: 1, maxQty: 2 },
      { itemId: 'ice_crystal', chance: 0.2, minQty: 1, maxQty: 1 },
    ],
    aiType: 'aggressive',
    description: '水晶聖殿的精英守衛，比普通魔像更加敏捷且擁有冰風暴的能力。',
    isBoss: false,
  },

  crystal_guardian_dungeon: {
    id: 'crystal_guardian_dungeon',
    name: '水晶守衛（副本）',
    level: 30,
    hp: 1500,
    mp: 200,
    str: 48,
    int: 40,
    dex: 24,
    vit: 48,
    luk: 12,
    element: 'ice',
    skills: [
      'basic_attack', 'crystal_shard', 'crystal_prison',
      'ice_storm', 'diamond_skin', 'shatter', 'crystal_resurrection',
    ],
    expReward: 1000,
    goldReward: [300, 600],
    drops: [
      { itemId: 'crystal_scale', chance: 1.0, minQty: 3, maxQty: 5 },
      { itemId: 'crystal_core', chance: 0.7, minQty: 1, maxQty: 2 },
      { itemId: 'guardian_crystal', chance: 0.4, minQty: 1, maxQty: 1 },
      { itemId: 'crystal_armor', chance: 0.15, minQty: 1, maxQty: 1 },
      { itemId: 'crystal_blade', chance: 0.1, minQty: 1, maxQty: 1 },
    ],
    aiType: 'boss',
    description:
      '水晶聖殿的終極守護者——副本強化版水晶守衛。由最純淨的水晶凝聚而成，' +
      '散發著令人目眩的寒光。牠能召喚毀滅性的冰風暴，並以水晶牢籠困住敵人。',
    isBoss: true,
  },
};

// ============================================================
//  副本定義
// ============================================================

export const DUNGEON_DEFS: Record<string, DungeonDef> = {

  // ─── 暗影地牢 (Lv 15+，森林 Boss) ─────────────────────────

  shadow_dungeon: {
    id: 'shadow_dungeon',
    name: '暗影地牢',
    description:
      '隱藏在暗影森林深處的古老地牢，暗影之力在此匯聚。' +
      '傳說暗影狼王在最深處的祭壇積蓄著毀滅性的力量。' +
      '只有最勇敢的冒險者才敢踏入這片永恆的黑暗。',
    levelReq: 15,
    maxPlayers: 4,
    timeLimit: 1800, // 30 分鐘
    entranceFee: 200,
    entranceRoomId: 'deep_forest',
    rooms: [
      {
        id: 'shadow_dungeon_entrance',
        name: '地牢入口',
        description:
          '陰冷潮濕的石階向下延伸，火把的光芒在暗影中搖曳不定。' +
          '牆壁上刻滿了古老的符文，散發著不祥的暗紫色光芒。' +
          '前方傳來低沉的嚎叫聲——暗影狼群已經察覺到了入侵者。',
        monsters: [
          { monsterId: 'shadow_wolf_minion', count: 3 },
        ],
        isBoss: false,
      },
      {
        id: 'shadow_dungeon_corridor',
        name: '暗影迴廊',
        description:
          '蜿蜒的走廊兩側矗立著被暗影侵蝕的石像，每一座都彷彿在無聲地嘶吼。' +
          '地面上的暗影如同活物般蠕動，空氣中瀰漫著令人窒息的暗影氣息。' +
          '暗影哨兵在此嚴密把守，不允許任何人通過。',
        monsters: [
          { monsterId: 'shadow_sentinel', count: 2 },
          { monsterId: 'shadow_wolf_minion', count: 2 },
        ],
        isBoss: false,
      },
      {
        id: 'shadow_dungeon_boss',
        name: '狼王祭壇',
        description:
          '巨大的圓形大廳，正中央是一座被暗影之力環繞的祭壇。' +
          '暗影狼王端坐於祭壇之上，血紅的雙眼冷冷地注視著闖入者。' +
          '牠周圍的暗影凝聚成實體，化為一道道鋒利的暗影之刃——決戰即將開始。',
        monsters: [
          { monsterId: 'shadow_wolf_alpha_dungeon', count: 1 },
          { monsterId: 'shadow_wolf_minion', count: 2 },
        ],
        isBoss: true,
      },
    ],
    firstClearRewards: {
      exp: 2000,
      gold: 1000,
      items: [
        { itemId: 'shadow_blade', qty: 1 },
        { itemId: 'shadow_essence', qty: 5 },
      ],
    },
    normalRewards: {
      exp: 800,
      gold: 400,
    },
  },

  // ─── 水晶聖殿 (Lv 25+，洞窟 Boss) ─────────────────────────

  crystal_temple: {
    id: 'crystal_temple',
    name: '水晶聖殿',
    description:
      '沉睡在水晶洞窟最深處的古代聖殿，曾是地底種族祭祀的神聖場所。' +
      '如今聖殿被強大的水晶守衛所佔據，冰冷的魔力充斥著每一個角落。' +
      '傳說打敗守衛就能獲得聖殿中封印已久的寶藏。',
    levelReq: 25,
    maxPlayers: 4,
    timeLimit: 1800, // 30 分鐘
    entranceFee: 500,
    entranceRoomId: 'crystal_hall',
    rooms: [
      {
        id: 'crystal_temple_entrance',
        name: '聖殿前廳',
        description:
          '宏偉的拱門上鑲嵌著巨大的水晶，散發出冰藍色的寒光。' +
          '前廳的地面由純淨的水晶鋪成，腳步聲在空曠的大廳中迴盪。' +
          '水晶魔像在此靜靜守候，等待著不速之客。',
        monsters: [
          { monsterId: 'crystal_golem', count: 2 },
        ],
        isBoss: false,
      },
      {
        id: 'crystal_temple_corridor',
        name: '水晶迴廊',
        description:
          '長長的走廊兩側是巨大的水晶柱，每根水晶柱都散發著不同顏色的光芒。' +
          '光線在水晶間折射交織，形成夢幻般的光之迷宮。' +
          '然而美景之下暗藏殺機——守衛兵正在光芒中伺機而動。',
        monsters: [
          { monsterId: 'crystal_sentinel', count: 2 },
          { monsterId: 'crystal_golem', count: 1 },
        ],
        isBoss: false,
      },
      {
        id: 'crystal_temple_golem_hall',
        name: '魔像大廳',
        description:
          '一座圓形的大廳，四面八方都矗立著巨大的水晶魔像。' +
          '大廳中央的地面上刻著複雜的魔法陣，散發著凜冽的寒氣。' +
          '這是通往最終Boss房間前的最後考驗——魔像們已經開始甦醒。',
        monsters: [
          { monsterId: 'crystal_golem', count: 2 },
          { monsterId: 'crystal_sentinel', count: 2 },
        ],
        isBoss: false,
      },
      {
        id: 'crystal_temple_boss',
        name: '守衛者之間',
        description:
          '聖殿的最深處，穹頂高聳入雲。一顆巨大的水晶懸浮在大廳正中央，' +
          '散發出令人目眩的冰藍光芒。水晶守衛從光芒中凝聚成形，' +
          '牠的身軀由最純淨的水晶構成，每一次動作都帶起刺骨的寒風——最終決戰開始！',
        monsters: [
          { monsterId: 'crystal_guardian_dungeon', count: 1 },
          { monsterId: 'crystal_golem', count: 1 },
        ],
        isBoss: true,
      },
    ],
    firstClearRewards: {
      exp: 5000,
      gold: 2500,
      items: [
        { itemId: 'crystal_blade', qty: 1 },
        { itemId: 'crystal_core', qty: 3 },
      ],
    },
    normalRewards: {
      exp: 2000,
      gold: 1000,
    },
  },
};

/** 取得副本定義 */
export function getDungeon(dungeonId: string): DungeonDef | undefined {
  return DUNGEON_DEFS[dungeonId];
}

/** 取得副本怪物定義 */
export function getDungeonMonster(monsterId: string): MonsterDef | undefined {
  return DUNGEON_MONSTERS[monsterId];
}

/** 取得所有副本列表 */
export function getAllDungeons(): DungeonDef[] {
  return Object.values(DUNGEON_DEFS);
}
