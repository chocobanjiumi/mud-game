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
    alias: 'dminion',
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
    alias: 'dsentinel',
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
    alias: 'dalpha',
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
    alias: 'dgolem',
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
    alias: 'dcsentinel',
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
    alias: 'dguardian',
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

  // ─── 海盜船副本怪物 ─────────────────────────────────────────

  pirate_dungeon: {
    id: 'pirate_dungeon',
    name: '海盜水手',
    alias: 'dpirate',
    level: 10,
    hp: 120,
    mp: 15,
    str: 16,
    int: 5,
    dex: 14,
    vit: 12,
    luk: 8,
    element: 'none',
    skills: ['basic_attack', 'backstab'],
    expReward: 50,
    goldReward: [12, 25],
    drops: [
      { itemId: 'stolen_pouch', chance: 0.3, minQty: 1, maxQty: 1 },
    ],
    aiType: 'aggressive',
    description: '海盜船上的低階水手，手持彎刀作戰。',
    isBoss: false,
  },

  sea_serpent_dungeon: {
    id: 'sea_serpent_dungeon',
    name: '海蛇（副本）',
    alias: 'dserpent',
    level: 11,
    hp: 140,
    mp: 20,
    str: 18,
    int: 8,
    dex: 16,
    vit: 14,
    luk: 6,
    element: 'ice',
    skills: ['basic_attack', 'poison_bite', 'coil'],
    expReward: 60,
    goldReward: [15, 30],
    drops: [
      { itemId: 'snake_skin', chance: 0.4, minQty: 1, maxQty: 1 },
    ],
    aiType: 'aggressive',
    description: '盤踞在海盜船周圍的巨型海蛇，阻擋入侵者的去路。',
    isBoss: false,
  },

  pirate_captain_dungeon: {
    id: 'pirate_captain_dungeon',
    name: '海盜船長（副本）',
    alias: 'dcaptain',
    level: 15,
    hp: 700,
    mp: 60,
    str: 36,
    int: 14,
    dex: 28,
    vit: 24,
    luk: 14,
    element: 'none',
    skills: ['basic_attack', 'backstab', 'steal', 'howl', 'quick_dash', 'shadow_dash'],
    expReward: 350,
    goldReward: [100, 200],
    drops: [
      { itemId: 'pirate_crossbow', chance: 0.15, minQty: 1, maxQty: 1 },
      { itemId: 'stolen_pouch', chance: 1.0, minQty: 2, maxQty: 4 },
    ],
    aiType: 'boss',
    description:
      '海盜船的終極Boss——船長親自出馬。在自己的船上戰鬥，他的能力比野外更加強大。',
    isBoss: true,
  },

  // ─── 火焰神殿副本怪物 ─────────────────────────────────────────

  fire_salamander_dungeon: {
    id: 'fire_salamander_dungeon',
    name: '火蜥蜴（副本）',
    alias: 'dsalamander',
    level: 30,
    hp: 400,
    mp: 50,
    str: 32,
    int: 20,
    dex: 18,
    vit: 28,
    luk: 8,
    element: 'fire',
    skills: ['basic_attack', 'fire_breath', 'tail_whip'],
    expReward: 160,
    goldReward: [35, 70],
    drops: [
      { itemId: 'salamander_tail', chance: 0.4, minQty: 1, maxQty: 1 },
    ],
    aiType: 'aggressive',
    description: '火焰神殿中生存的巨型火蜥蜴，全身散發熾熱的火焰。',
    isBoss: false,
  },

  flame_spirit_dungeon: {
    id: 'flame_spirit_dungeon',
    name: '火焰精靈（副本）',
    alias: 'dflamespirit',
    level: 31,
    hp: 350,
    mp: 80,
    str: 24,
    int: 32,
    dex: 22,
    vit: 22,
    luk: 10,
    element: 'fire',
    skills: ['basic_attack', 'fire_breath', 'howl'],
    expReward: 170,
    goldReward: [40, 80],
    drops: [
      { itemId: 'magic_crystal', chance: 0.3, minQty: 1, maxQty: 1 },
    ],
    aiType: 'aggressive',
    description: '由純粹火焰能量凝聚而成的精靈，漂浮在熔岩上方。',
    isBoss: false,
  },

  rock_giant_dungeon: {
    id: 'rock_giant_dungeon',
    name: '岩石巨人（副本）',
    alias: 'drockgiant',
    level: 32,
    hp: 500,
    mp: 30,
    str: 40,
    int: 10,
    dex: 10,
    vit: 42,
    luk: 5,
    element: 'fire',
    skills: ['basic_attack', 'stone_slam', 'stone_skin'],
    expReward: 180,
    goldReward: [45, 90],
    drops: [
      { itemId: 'rock_fragment', chance: 0.5, minQty: 1, maxQty: 2 },
      { itemId: 'lava_fragment', chance: 0.3, minQty: 1, maxQty: 1 },
    ],
    aiType: 'defensive',
    description: '火焰神殿深處的岩石巨人，身體被熔岩浸透。',
    isBoss: false,
  },

  lava_colossus_dungeon: {
    id: 'lava_colossus_dungeon',
    name: '熔岩巨像（副本）',
    alias: 'dcolossus',
    level: 35,
    hp: 2000,
    mp: 100,
    str: 55,
    int: 25,
    dex: 16,
    vit: 52,
    luk: 8,
    element: 'fire',
    skills: ['basic_attack', 'stone_slam', 'stone_skin', 'fire_breath', 'root_bind', 'shatter'],
    expReward: 1200,
    goldReward: [300, 600],
    drops: [
      { itemId: 'lava_warhammer', chance: 0.12, minQty: 1, maxQty: 1 },
      { itemId: 'lava_fragment', chance: 1.0, minQty: 2, maxQty: 4 },
      { itemId: 'stone_heart', chance: 0.5, minQty: 1, maxQty: 1 },
    ],
    aiType: 'boss',
    description:
      '火焰神殿的最終守護者——副本強化版熔岩巨像。身高超過八公尺，' +
      '全身的岩漿裂縫噴射出灼熱的火焰，一錘之下足以毀滅一切。',
    isBoss: true,
  },

  // ─── 魔族要塞副本怪物 ─────────────────────────────────────────

  imp_dungeon: {
    id: 'imp_dungeon',
    name: '小惡魔（副本）',
    alias: 'dimp',
    level: 35,
    hp: 350,
    mp: 60,
    str: 28,
    int: 22,
    dex: 24,
    vit: 22,
    luk: 10,
    element: 'dark',
    skills: ['basic_attack', 'fire_breath', 'quick_dash'],
    expReward: 170,
    goldReward: [35, 70],
    drops: [
      { itemId: 'demon_horn', chance: 0.3, minQty: 1, maxQty: 1 },
    ],
    aiType: 'aggressive',
    description: '魔族要塞中的低階惡魔，數量眾多且喜歡群體攻擊。',
    isBoss: false,
  },

  demon_soldier_dungeon: {
    id: 'demon_soldier_dungeon',
    name: '魔族士兵（副本）',
    alias: 'ddsoldier',
    level: 37,
    hp: 450,
    mp: 50,
    str: 36,
    int: 18,
    dex: 20,
    vit: 32,
    luk: 8,
    element: 'dark',
    skills: ['basic_attack', 'shadow_bite', 'howl'],
    expReward: 200,
    goldReward: [45, 90],
    drops: [
      { itemId: 'demon_horn', chance: 0.4, minQty: 1, maxQty: 1 },
    ],
    aiType: 'aggressive',
    description: '魔族要塞的正規軍，穿著暗色鎧甲的精銳戰士。',
    isBoss: false,
  },

  succubus_dungeon: {
    id: 'succubus_dungeon',
    name: '魅魔（副本）',
    alias: 'dsuccubus',
    level: 36,
    hp: 380,
    mp: 100,
    str: 22,
    int: 35,
    dex: 28,
    vit: 24,
    luk: 14,
    element: 'dark',
    skills: ['basic_attack', 'life_drain', 'blind', 'shadow_dash'],
    expReward: 190,
    goldReward: [40, 80],
    drops: [
      { itemId: 'shadow_essence', chance: 0.3, minQty: 1, maxQty: 1 },
    ],
    aiType: 'aggressive',
    description: '魔族要塞中的魅魔，用魅惑之力削弱入侵者的意志。',
    isBoss: false,
  },

  hellhound_dungeon: {
    id: 'hellhound_dungeon',
    name: '地獄犬（副本）',
    alias: 'dhellhound',
    level: 36,
    hp: 420,
    mp: 30,
    str: 34,
    int: 12,
    dex: 26,
    vit: 28,
    luk: 8,
    element: 'fire',
    skills: ['basic_attack', 'fire_breath', 'bite', 'howl'],
    expReward: 185,
    goldReward: [40, 80],
    drops: [
      { itemId: 'hellhound_fang', chance: 0.35, minQty: 1, maxQty: 1 },
    ],
    aiType: 'aggressive',
    description: '魔族豢養的地獄犬，全身燃燒著暗紅色的火焰。',
    isBoss: false,
  },

  demon_lord_dungeon: {
    id: 'demon_lord_dungeon',
    name: '魔王（副本）',
    alias: 'ddemonlord',
    level: 40,
    hp: 3000,
    mp: 200,
    str: 60,
    int: 45,
    dex: 30,
    vit: 55,
    luk: 15,
    element: 'dark',
    skills: [
      'basic_attack', 'shadow_storm', 'fire_breath', 'life_drain',
      'howl', 'shadow_devour', 'alpha_roar',
    ],
    expReward: 2000,
    goldReward: [500, 1000],
    drops: [
      { itemId: 'demon_lord_sword', chance: 0.1, minQty: 1, maxQty: 1 },
      { itemId: 'demon_horn', chance: 1.0, minQty: 3, maxQty: 5 },
      { itemId: 'hellhound_fang', chance: 0.8, minQty: 2, maxQty: 3 },
    ],
    aiType: 'boss',
    description:
      '魔族要塞的終極Boss——魔王親自坐鎮。黑暗之力在他周圍凝聚成實體，' +
      '能同時操控暗影風暴與地獄烈焰，是目前已知最危險的魔族領袖。',
    isBoss: true,
  },

  // ─── 龍巢副本怪物 ─────────────────────────────────────────

  young_dragon_dungeon: {
    id: 'young_dragon_dungeon',
    name: '幼龍（副本）',
    alias: 'ddrake',
    level: 42,
    hp: 550,
    mp: 80,
    str: 40,
    int: 28,
    dex: 24,
    vit: 36,
    luk: 10,
    element: 'fire',
    skills: ['basic_attack', 'fire_breath', 'tail_whip'],
    expReward: 250,
    goldReward: [55, 110],
    drops: [
      { itemId: 'dragon_scale', chance: 0.35, minQty: 1, maxQty: 1 },
    ],
    aiType: 'aggressive',
    description: '龍巢中尚未成年的幼龍，雖然年幼但已具備噴火的能力。',
    isBoss: false,
  },

  wyvern_dungeon: {
    id: 'wyvern_dungeon',
    name: '翼龍（副本）',
    alias: 'dwyvern',
    level: 43,
    hp: 500,
    mp: 60,
    str: 38,
    int: 22,
    dex: 32,
    vit: 30,
    luk: 12,
    element: 'none',
    skills: ['basic_attack', 'quick_dash', 'sonic_wave', 'tail_whip'],
    expReward: 240,
    goldReward: [50, 100],
    drops: [
      { itemId: 'dragon_scale', chance: 0.3, minQty: 1, maxQty: 1 },
    ],
    aiType: 'aggressive',
    description: '龍巢中棲息的翼龍，擅長高速俯衝攻擊。',
    isBoss: false,
  },

  dragon_knight_dungeon: {
    id: 'dragon_knight_dungeon',
    name: '龍騎士（副本）',
    alias: 'ddknight',
    level: 44,
    hp: 600,
    mp: 70,
    str: 44,
    int: 20,
    dex: 26,
    vit: 38,
    luk: 10,
    element: 'fire',
    skills: ['basic_attack', 'fire_breath', 'stone_slam', 'howl'],
    expReward: 280,
    goldReward: [60, 120],
    drops: [
      { itemId: 'dragon_scale', chance: 0.4, minQty: 1, maxQty: 2 },
      { itemId: 'mithril_ore', chance: 0.2, minQty: 1, maxQty: 1 },
    ],
    aiType: 'aggressive',
    description: '與龍族締結契約的古代騎士，騎乘在幼龍之上作戰。',
    isBoss: false,
  },

  elder_dragon_dungeon: {
    id: 'elder_dragon_dungeon',
    name: '古龍（副本）',
    alias: 'delderdragon',
    level: 48,
    hp: 4500,
    mp: 300,
    str: 70,
    int: 55,
    dex: 32,
    vit: 65,
    luk: 18,
    element: 'fire',
    skills: [
      'basic_attack', 'fire_breath', 'ice_storm', 'shadow_storm',
      'diamond_skin', 'howl', 'shatter', 'alpha_roar',
    ],
    expReward: 3000,
    goldReward: [800, 1500],
    drops: [
      { itemId: 'elder_dragon_fang', chance: 0.08, minQty: 1, maxQty: 1 },
      { itemId: 'dragon_scale', chance: 1.0, minQty: 3, maxQty: 6 },
      { itemId: 'dragon_fang', chance: 0.6, minQty: 1, maxQty: 2 },
    ],
    aiType: 'boss',
    description:
      '龍巢的終極Boss——活了數千年的古龍。牠的龍息能同時操控火焰與冰霜，' +
      '巨大的身軀足以遮蔽天空，是世界上最強大的生物之一。',
    isBoss: true,
  },

  // ─── 深淵之門副本怪物 ─────────────────────────────────────────

  void_walker_dungeon: {
    id: 'void_walker_dungeon',
    name: '虛空行者（副本）',
    alias: 'dvoidwalker',
    level: 49,
    hp: 600,
    mp: 100,
    str: 42,
    int: 38,
    dex: 30,
    vit: 35,
    luk: 12,
    element: 'dark',
    skills: ['basic_attack', 'shadow_dash', 'shadow_bite', 'life_drain'],
    expReward: 300,
    goldReward: [65, 130],
    drops: [
      { itemId: 'void_shard', chance: 0.3, minQty: 1, maxQty: 1 },
    ],
    aiType: 'aggressive',
    description: '從深淵裂隙中湧出的虛空行者，半透明的身軀在空間中閃爍不定。',
    isBoss: false,
  },

  shadow_demon_dungeon: {
    id: 'shadow_demon_dungeon',
    name: '暗影惡魔（副本）',
    alias: 'dshadowdemon',
    level: 50,
    hp: 650,
    mp: 120,
    str: 44,
    int: 40,
    dex: 28,
    vit: 38,
    luk: 10,
    element: 'dark',
    skills: ['basic_attack', 'shadow_storm', 'shadow_devour', 'life_drain'],
    expReward: 320,
    goldReward: [70, 140],
    drops: [
      { itemId: 'void_shard', chance: 0.35, minQty: 1, maxQty: 1 },
      { itemId: 'shadow_essence', chance: 0.4, minQty: 1, maxQty: 2 },
    ],
    aiType: 'aggressive',
    description: '深淵中孕育的高階暗影惡魔，能操控混沌之力扭曲現實。',
    isBoss: false,
  },

  chaos_spawn_dungeon: {
    id: 'chaos_spawn_dungeon',
    name: '混沌之子（副本）',
    alias: 'dchaos',
    level: 51,
    hp: 700,
    mp: 80,
    str: 48,
    int: 30,
    dex: 26,
    vit: 42,
    luk: 8,
    element: 'dark',
    skills: ['basic_attack', 'stone_slam', 'howl', 'shadow_storm'],
    expReward: 340,
    goldReward: [75, 150],
    drops: [
      { itemId: 'void_shard', chance: 0.3, minQty: 1, maxQty: 1 },
    ],
    aiType: 'aggressive',
    description: '由混沌能量扭曲而成的恐怖生物，形態不斷變化。',
    isBoss: false,
  },

  abyss_lord_dungeon: {
    id: 'abyss_lord_dungeon',
    name: '深淵領主（副本）',
    alias: 'dabysslord',
    level: 55,
    hp: 6000,
    mp: 400,
    str: 80,
    int: 65,
    dex: 35,
    vit: 72,
    luk: 20,
    element: 'dark',
    skills: [
      'basic_attack', 'shadow_storm', 'shadow_devour', 'life_drain',
      'alpha_roar', 'shatter', 'crystal_prison', 'ice_storm',
    ],
    expReward: 4000,
    goldReward: [1000, 2000],
    drops: [
      { itemId: 'abyss_eye_staff', chance: 0.06, minQty: 1, maxQty: 1 },
      { itemId: 'void_shard', chance: 1.0, minQty: 3, maxQty: 6 },
      { itemId: 'shadow_essence', chance: 1.0, minQty: 2, maxQty: 4 },
    ],
    aiType: 'boss',
    description:
      '深淵之門的終極Boss——深淵領主。牠的存在本身就是對現實的扭曲，' +
      '周圍的空間在牠的力量下不斷崩塌與重組。只有最強大的冒險者才能與牠抗衡。',
    isBoss: true,
  },

  // ─── 天界試煉副本怪物 ─────────────────────────────────────────

  fallen_angel_dungeon: {
    id: 'fallen_angel_dungeon',
    name: '墮天使（副本）',
    alias: 'dfallen',
    level: 55,
    hp: 700,
    mp: 120,
    str: 46,
    int: 42,
    dex: 32,
    vit: 38,
    luk: 14,
    element: 'light',
    skills: ['basic_attack', 'shadow_dash', 'life_drain', 'howl'],
    expReward: 350,
    goldReward: [80, 160],
    drops: [
      { itemId: 'celestial_fragment', chance: 0.3, minQty: 1, maxQty: 1 },
    ],
    aiType: 'aggressive',
    description: '曾經的天使戰士，因試煉的考驗而墮落，仍保有強大的聖光之力。',
    isBoss: false,
  },

  celestial_guardian_dungeon: {
    id: 'celestial_guardian_dungeon',
    name: '天界守衛（副本）',
    alias: 'dcelestial',
    level: 56,
    hp: 750,
    mp: 100,
    str: 50,
    int: 35,
    dex: 28,
    vit: 45,
    luk: 12,
    element: 'light',
    skills: ['basic_attack', 'stone_slam', 'bark_shield', 'howl'],
    expReward: 370,
    goldReward: [85, 170],
    drops: [
      { itemId: 'celestial_fragment', chance: 0.35, minQty: 1, maxQty: 1 },
    ],
    aiType: 'defensive',
    description: '天界殿堂的守衛，由神聖之力凝聚的黃金鎧甲戰士。',
    isBoss: false,
  },

  seraph_dungeon: {
    id: 'seraph_dungeon',
    name: '熾天使（副本）',
    alias: 'dseraph',
    level: 57,
    hp: 680,
    mp: 150,
    str: 40,
    int: 50,
    dex: 34,
    vit: 36,
    luk: 16,
    element: 'light',
    skills: ['basic_attack', 'fire_breath', 'ice_storm', 'crystal_shard'],
    expReward: 380,
    goldReward: [85, 170],
    drops: [
      { itemId: 'celestial_fragment', chance: 0.35, minQty: 1, maxQty: 1 },
      { itemId: 'magic_crystal', chance: 0.3, minQty: 1, maxQty: 1 },
    ],
    aiType: 'aggressive',
    description: '六翼的熾天使，操控聖光與烈焰雙重力量進行攻擊。',
    isBoss: false,
  },

  divine_construct_dungeon: {
    id: 'divine_construct_dungeon',
    name: '神造機兵（副本）',
    alias: 'dconstruct',
    level: 56,
    hp: 800,
    mp: 60,
    str: 52,
    int: 20,
    dex: 22,
    vit: 50,
    luk: 8,
    element: 'light',
    skills: ['basic_attack', 'stone_slam', 'stone_skin', 'shatter'],
    expReward: 360,
    goldReward: [80, 160],
    drops: [
      { itemId: 'celestial_fragment', chance: 0.3, minQty: 1, maxQty: 1 },
    ],
    aiType: 'defensive',
    description: '由古代神明創造的機械戰士，守護著天界聖所數萬年。',
    isBoss: false,
  },

  god_of_war_dungeon: {
    id: 'god_of_war_dungeon',
    name: '戰神（副本）',
    alias: 'dwargod',
    level: 60,
    hp: 8000,
    mp: 500,
    str: 95,
    int: 75,
    dex: 40,
    vit: 85,
    luk: 25,
    element: 'light',
    skills: [
      'basic_attack', 'fire_breath', 'ice_storm', 'shadow_storm',
      'alpha_roar', 'shatter', 'diamond_skin', 'crystal_prison',
      'howl', 'shadow_devour',
    ],
    expReward: 6000,
    goldReward: [1500, 3000],
    drops: [
      { itemId: 'god_of_war_spear', chance: 0.05, minQty: 1, maxQty: 1 },
      { itemId: 'celestial_fragment', chance: 1.0, minQty: 4, maxQty: 8 },
      { itemId: 'ancient_fragment', chance: 1.0, minQty: 2, maxQty: 4 },
    ],
    aiType: 'boss',
    description:
      '天界試煉的終極Boss——戰神。曾是眾神之間最強大的戰士，' +
      '如今在天界遺跡中等待著值得一戰的挑戰者。他的神槍能貫穿一切。',
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

  // ─── 海盜船 (Lv 12+，東海岸) ──────────────────────────────

  pirate_ship: {
    id: 'pirate_ship',
    name: '海盜船',
    description:
      '停泊在東海岸的海盜大船，船上充斥著兇殘的海盜和危險的海蛇。' +
      '傳說船長的寶藏室中藏有無數從各地掠奪的財寶。' +
      '只有擊敗船長才能打開寶藏室的門。',
    levelReq: 12,
    maxPlayers: 4,
    timeLimit: 1800,
    entranceFee: 150,
    entranceRoomId: 'east_coast',
    rooms: [
      {
        id: 'pirate_ship_deck',
        name: '甲板',
        description:
          '踏上搖晃的甲板，海風中夾雜著血腥與火藥的氣味。' +
          '水手們已經發現了入侵者，紛紛拔出彎刀迎戰。',
        monsters: [
          { monsterId: 'pirate_dungeon', count: 3 },
        ],
        isBoss: false,
      },
      {
        id: 'pirate_ship_cabin',
        name: '船艙',
        description:
          '昏暗的船艙中堆滿了搶來的貨物和酒桶。' +
          '海蛇從破洞中竄入，與海盜一起守護著通往下層的樓梯。',
        monsters: [
          { monsterId: 'pirate_dungeon', count: 2 },
          { monsterId: 'sea_serpent_dungeon', count: 2 },
        ],
        isBoss: false,
      },
      {
        id: 'pirate_ship_powder',
        name: '火藥庫',
        description:
          '空氣中瀰漫著硝石的刺鼻氣味，一桶桶火藥整齊排列。' +
          '在這裡戰鬥需要格外小心——一個火花就可能引爆整個房間。',
        monsters: [
          { monsterId: 'pirate_dungeon', count: 2 },
          { monsterId: 'sea_serpent_dungeon', count: 1 },
        ],
        isBoss: false,
      },
      {
        id: 'pirate_ship_captain_room',
        name: '船長室',
        description:
          '船長室的門被踹開，華麗的房間中央站著海盜船長——他正慢條斯理地擦拭著自己的短銃弩。' +
          '「敢踏上我的船？那就用性命來償還吧！」',
        monsters: [
          { monsterId: 'pirate_captain_dungeon', count: 1 },
          { monsterId: 'pirate_dungeon', count: 2 },
        ],
        isBoss: true,
      },
      {
        id: 'pirate_ship_treasure',
        name: '寶藏室',
        description: '船長倒下後，寶藏室的門緩緩打開——金幣堆積如山，珠寶閃爍著迷人的光芒。',
        monsters: [],
        isBoss: false,
      },
    ],
    firstClearRewards: {
      exp: 1500,
      gold: 800,
      items: [
        { itemId: 'pirate_crossbow', qty: 1 },
        { itemId: 'stolen_pouch', qty: 5 },
      ],
    },
    normalRewards: {
      exp: 600,
      gold: 300,
    },
  },

  // ─── 火焰神殿 (Lv 32+，火山地帶) ────────────────────────────

  flame_temple: {
    id: 'flame_temple',
    name: '火焰神殿',
    description:
      '建造在活火山內部的古代神殿，曾是火焰之神的祭祀場所。' +
      '如今被熔岩巨像所佔據，熾熱的岩漿流經每一條走廊。' +
      '只有穿越層層火焰考驗，才能抵達神殿深處面對守護者。',
    levelReq: 32,
    maxPlayers: 4,
    timeLimit: 2400,
    entranceFee: 800,
    entranceRoomId: 'volcano_entrance',
    rooms: [
      {
        id: 'flame_temple_entrance',
        name: '入口大廳',
        description: '巨大的拱門上刻滿了火焰紋章，炙熱的空氣撲面而來。火蜥蜴在入口處巡邏。',
        monsters: [
          { monsterId: 'fire_salamander_dungeon', count: 3 },
        ],
        isBoss: false,
      },
      {
        id: 'flame_temple_corridor',
        name: '火焰走廊',
        description: '走廊兩側的牆壁不斷噴射出火柱，火焰精靈在烈焰中飛舞。',
        monsters: [
          { monsterId: 'flame_spirit_dungeon', count: 2 },
          { monsterId: 'fire_salamander_dungeon', count: 1 },
        ],
        isBoss: false,
      },
      {
        id: 'flame_temple_lava_pool',
        name: '熔岩池',
        description: '一片巨大的熔岩池佔據了大半個房間，岩石巨人從熔岩中拔地而起。',
        monsters: [
          { monsterId: 'rock_giant_dungeon', count: 2 },
          { monsterId: 'fire_salamander_dungeon', count: 1 },
        ],
        isBoss: false,
      },
      {
        id: 'flame_temple_altar',
        name: '祭壇',
        description: '古老的火焰祭壇仍在燃燒，火焰精靈守護著通往深處的道路。',
        monsters: [
          { monsterId: 'flame_spirit_dungeon', count: 2 },
          { monsterId: 'rock_giant_dungeon', count: 1 },
        ],
        isBoss: false,
      },
      {
        id: 'flame_temple_trial',
        name: '火焰試煉',
        description: '熾熱的試煉場，四面八方都是噴射的火焰。只有通過這裡才能進入神殿深處。',
        monsters: [
          { monsterId: 'fire_salamander_dungeon', count: 2 },
          { monsterId: 'flame_spirit_dungeon', count: 1 },
          { monsterId: 'rock_giant_dungeon', count: 1 },
        ],
        isBoss: false,
      },
      {
        id: 'flame_temple_boss',
        name: '神殿深處',
        description:
          '神殿的最深處，一座巨大的熔岩巨像矗立在熔岩瀑布前。' +
          '牠的手中握著一把燃燒的戰錘，身上的裂縫噴射出炙熱的岩漿——最終決戰！',
        monsters: [
          { monsterId: 'lava_colossus_dungeon', count: 1 },
          { monsterId: 'fire_salamander_dungeon', count: 1 },
        ],
        isBoss: true,
      },
    ],
    firstClearRewards: {
      exp: 8000,
      gold: 4000,
      items: [
        { itemId: 'lava_warhammer', qty: 1 },
        { itemId: 'lava_fragment', qty: 5 },
      ],
    },
    normalRewards: {
      exp: 3500,
      gold: 1500,
    },
  },

  // ─── 魔族要塞 (Lv 38+，魔族領域) ────────────────────────────

  demon_fortress: {
    id: 'demon_fortress',
    name: '魔族要塞',
    description:
      '矗立在魔族領域中心的巨大要塞，黑色的城牆上刻滿了詛咒符文。' +
      '要塞內駐紮著魔族的精銳軍隊，魔王本人坐鎮最深處的王座之間。' +
      '這是一場針對魔族核心力量的正面進攻——準備好你的勇氣。',
    levelReq: 38,
    maxPlayers: 4,
    timeLimit: 2700,
    entranceFee: 1200,
    entranceRoomId: 'demon_territory',
    rooms: [
      {
        id: 'demon_fortress_gate',
        name: '城門',
        description: '巨大的黑鐵城門被攻破，小惡魔蜂擁而出迎擊入侵者。',
        monsters: [
          { monsterId: 'imp_dungeon', count: 4 },
        ],
        isBoss: false,
      },
      {
        id: 'demon_fortress_courtyard',
        name: '外庭',
        description: '要塞的外庭廣場上，魔族士兵正在集結準備迎戰。',
        monsters: [
          { monsterId: 'demon_soldier_dungeon', count: 2 },
          { monsterId: 'imp_dungeon', count: 2 },
        ],
        isBoss: false,
      },
      {
        id: 'demon_fortress_barracks',
        name: '兵營',
        description: '魔族的兵營中到處都是武器架和訓練場。地獄犬在此巡邏。',
        monsters: [
          { monsterId: 'demon_soldier_dungeon', count: 2 },
          { monsterId: 'hellhound_dungeon', count: 2 },
        ],
        isBoss: false,
      },
      {
        id: 'demon_fortress_dungeon',
        name: '地下牢',
        description: '陰暗的地下牢房中傳來受害者的哀嚎，魅魔在此看管囚犯。',
        monsters: [
          { monsterId: 'succubus_dungeon', count: 2 },
          { monsterId: 'hellhound_dungeon', count: 1 },
        ],
        isBoss: false,
      },
      {
        id: 'demon_fortress_purgatory',
        name: '煉獄',
        description: '通往魔王之間的煉獄之路，火焰與暗影在此交織。',
        monsters: [
          { monsterId: 'demon_soldier_dungeon', count: 2 },
          { monsterId: 'succubus_dungeon', count: 1 },
          { monsterId: 'hellhound_dungeon', count: 1 },
        ],
        isBoss: false,
      },
      {
        id: 'demon_fortress_summoning',
        name: '召喚大廳',
        description: '巨大的魔法陣在地面上發出不祥的光芒，惡魔從陣中不斷被召喚出來。',
        monsters: [
          { monsterId: 'demon_soldier_dungeon', count: 2 },
          { monsterId: 'imp_dungeon', count: 3 },
        ],
        isBoss: false,
      },
      {
        id: 'demon_fortress_boss',
        name: '魔王之間',
        description:
          '黑暗的王座大廳中央，魔王端坐在骸骨王座之上。' +
          '他手中的魔劍散發著毀滅性的暗黑之力——「凡人，你的冒險到此為止！」',
        monsters: [
          { monsterId: 'demon_lord_dungeon', count: 1 },
          { monsterId: 'demon_soldier_dungeon', count: 1 },
        ],
        isBoss: true,
      },
    ],
    firstClearRewards: {
      exp: 12000,
      gold: 6000,
      items: [
        { itemId: 'demon_lord_sword', qty: 1 },
        { itemId: 'demon_horn', qty: 8 },
      ],
    },
    normalRewards: {
      exp: 5000,
      gold: 2500,
    },
  },

  // ─── 龍巢 (Lv 45+，龍之谷) ──────────────────────────────

  dragon_nest: {
    id: 'dragon_nest',
    name: '龍巢',
    description:
      '隱藏在龍之谷深處的遠古龍巢，無數世代的巨龍在此棲息繁衍。' +
      '洞窟中堆滿了龍族千年來收集的寶藏，但古龍不會輕易讓任何人碰觸它們。' +
      '挑戰古龍——這是每個冒險者的終極夢想。',
    levelReq: 45,
    maxPlayers: 4,
    timeLimit: 3000,
    entranceFee: 2000,
    entranceRoomId: 'dragon_valley',
    rooms: [
      {
        id: 'dragon_nest_entrance',
        name: '洞口',
        description: '巨大的洞口散發著硫磺的氣味，幼龍在入口處守衛。',
        monsters: [
          { monsterId: 'young_dragon_dungeon', count: 3 },
        ],
        isBoss: false,
      },
      {
        id: 'dragon_nest_hatchery',
        name: '孵化室',
        description: '溫暖的孵化室中排列著巨大的龍蛋，翼龍在此保護幼龍。',
        monsters: [
          { monsterId: 'wyvern_dungeon', count: 2 },
          { monsterId: 'young_dragon_dungeon', count: 1 },
        ],
        isBoss: false,
      },
      {
        id: 'dragon_nest_graveyard',
        name: '骨塚',
        description: '歷代巨龍的遺骸堆積如山，龍騎士的亡靈在此遊蕩。',
        monsters: [
          { monsterId: 'dragon_knight_dungeon', count: 2 },
          { monsterId: 'wyvern_dungeon', count: 1 },
        ],
        isBoss: false,
      },
      {
        id: 'dragon_nest_breath_corridor',
        name: '龍息通道',
        description: '狹長的通道中不時噴射出熾熱的龍息，必須在間隙中前進。',
        monsters: [
          { monsterId: 'young_dragon_dungeon', count: 2 },
          { monsterId: 'dragon_knight_dungeon', count: 1 },
        ],
        isBoss: false,
      },
      {
        id: 'dragon_nest_treasury',
        name: '寶庫',
        description: '金幣堆積如山的寶庫，翼龍與龍騎士嚴密看守。',
        monsters: [
          { monsterId: 'wyvern_dungeon', count: 2 },
          { monsterId: 'dragon_knight_dungeon', count: 2 },
        ],
        isBoss: false,
      },
      {
        id: 'dragon_nest_deep',
        name: '巢穴深處',
        description: '越來越深入的洞窟中，溫度不斷升高，龍的氣息越來越濃烈。',
        monsters: [
          { monsterId: 'young_dragon_dungeon', count: 2 },
          { monsterId: 'wyvern_dungeon', count: 1 },
          { monsterId: 'dragon_knight_dungeon', count: 1 },
        ],
        isBoss: false,
      },
      {
        id: 'dragon_nest_boss',
        name: '古龍居所',
        description:
          '巨大的穹頂洞窟中，一頭身軀如山岳般龐大的古龍盤踞在寶藏之上。' +
          '牠睜開了一隻金色的眼瞳，大地隨之震顫——「渺小的人類，你來送死嗎？」',
        monsters: [
          { monsterId: 'elder_dragon_dungeon', count: 1 },
          { monsterId: 'young_dragon_dungeon', count: 2 },
        ],
        isBoss: true,
      },
    ],
    firstClearRewards: {
      exp: 18000,
      gold: 10000,
      items: [
        { itemId: 'elder_dragon_fang', qty: 1 },
        { itemId: 'dragon_scale', qty: 10 },
      ],
    },
    normalRewards: {
      exp: 8000,
      gold: 4000,
    },
  },

  // ─── 深淵之門 (Lv 52+，深淵裂隙) ──────────────────────────────

  abyss_gate: {
    id: 'abyss_gate',
    name: '深淵之門',
    description:
      '世界邊緣的裂隙中通向深淵的入口，混沌的能量不斷從中湧出。' +
      '深淵中的生物超越了凡人的理解，扭曲的空間讓方向感完全失效。' +
      '只有最強大的冒險者才敢踏入這個與現實隔絕的次元。',
    levelReq: 52,
    maxPlayers: 4,
    timeLimit: 3000,
    entranceFee: 3000,
    entranceRoomId: 'abyss_rift',
    rooms: [
      {
        id: 'abyss_gate_rift',
        name: '裂隙',
        description: '空間的裂縫在此撕裂，虛空行者從裂縫中湧出。',
        monsters: [
          { monsterId: 'void_walker_dungeon', count: 3 },
        ],
        isBoss: false,
      },
      {
        id: 'abyss_gate_chaos',
        name: '混沌空間',
        description: '上下左右已經失去意義，混沌的能量扭曲著一切。',
        monsters: [
          { monsterId: 'chaos_spawn_dungeon', count: 2 },
          { monsterId: 'void_walker_dungeon', count: 1 },
        ],
        isBoss: false,
      },
      {
        id: 'abyss_gate_void',
        name: '虛空走廊',
        description: '一條漂浮在虛空中的通道，暗影惡魔在此伏擊來者。',
        monsters: [
          { monsterId: 'shadow_demon_dungeon', count: 2 },
          { monsterId: 'void_walker_dungeon', count: 1 },
        ],
        isBoss: false,
      },
      {
        id: 'abyss_gate_twisted',
        name: '扭曲之間',
        description: '空間在此被完全扭曲，牆壁、地面、天花板交錯重疊。',
        monsters: [
          { monsterId: 'chaos_spawn_dungeon', count: 2 },
          { monsterId: 'shadow_demon_dungeon', count: 1 },
        ],
        isBoss: false,
      },
      {
        id: 'abyss_gate_core',
        name: '核心',
        description: '深淵的核心區域，混沌之力在此達到頂峰。',
        monsters: [
          { monsterId: 'void_walker_dungeon', count: 2 },
          { monsterId: 'shadow_demon_dungeon', count: 1 },
          { monsterId: 'chaos_spawn_dungeon', count: 1 },
        ],
        isBoss: false,
      },
      {
        id: 'abyss_gate_boss',
        name: '領主之間',
        description:
          '深淵的最深處，一個巨大的存在漂浮在虛空之中。' +
          '牠的身軀由純粹的混沌能量構成，周圍的空間不斷崩塌與重生——深淵領主已經注意到你了。',
        monsters: [
          { monsterId: 'abyss_lord_dungeon', count: 1 },
          { monsterId: 'shadow_demon_dungeon', count: 1 },
        ],
        isBoss: true,
      },
    ],
    firstClearRewards: {
      exp: 25000,
      gold: 15000,
      items: [
        { itemId: 'abyss_eye_staff', qty: 1 },
        { itemId: 'void_shard', qty: 8 },
      ],
    },
    normalRewards: {
      exp: 12000,
      gold: 6000,
    },
  },

  // ─── 天界試煉 (Lv 58+，天界遺跡) ──────────────────────────────

  celestial_trial: {
    id: 'celestial_trial',
    name: '天界試煉',
    description:
      '浮空在雲端之上的古代天界遺跡，曾是眾神的戰場。' +
      '如今遺跡中仍殘留著神聖的力量，墮天使與神造機兵守護著通往戰神的道路。' +
      '通過八重試煉，面對戰神——這是世界上最困難的副本。',
    levelReq: 58,
    maxPlayers: 4,
    timeLimit: 3600,
    entranceFee: 5000,
    entranceRoomId: 'celestial_ruins',
    rooms: [
      {
        id: 'celestial_trial_gate',
        name: '試煉之門',
        description: '金色的巨門在眼前敞開，聖光從門後傾瀉而出。墮天使在此測試來者的資格。',
        monsters: [
          { monsterId: 'fallen_angel_dungeon', count: 2 },
        ],
        isBoss: false,
      },
      {
        id: 'celestial_trial_light',
        name: '光之回廊',
        description: '純白的回廊中充斥著令人目眩的聖光，天界守衛在光中巡邏。',
        monsters: [
          { monsterId: 'celestial_guardian_dungeon', count: 2 },
          { monsterId: 'fallen_angel_dungeon', count: 1 },
        ],
        isBoss: false,
      },
      {
        id: 'celestial_trial_garden',
        name: '天使花園',
        description: '永不凋零的花朵在空中飄浮，熾天使在花園中棲息。',
        monsters: [
          { monsterId: 'seraph_dungeon', count: 2 },
          { monsterId: 'fallen_angel_dungeon', count: 1 },
        ],
        isBoss: false,
      },
      {
        id: 'celestial_trial_library',
        name: '圖書館',
        description: '記載著眾神歷史的古書在空中漂浮，神造機兵守護著知識。',
        monsters: [
          { monsterId: 'divine_construct_dungeon', count: 2 },
          { monsterId: 'seraph_dungeon', count: 1 },
        ],
        isBoss: false,
      },
      {
        id: 'celestial_trial_judgement',
        name: '審判',
        description: '審判之間，所有挑戰者都必須在此接受試煉的審視。',
        monsters: [
          { monsterId: 'celestial_guardian_dungeon', count: 2 },
          { monsterId: 'divine_construct_dungeon', count: 1 },
          { monsterId: 'seraph_dungeon', count: 1 },
        ],
        isBoss: false,
      },
      {
        id: 'celestial_trial_throne',
        name: '王座',
        description: '曾經屬於眾神之王的王座，如今空無一人。但守衛們仍在此堅守。',
        monsters: [
          { monsterId: 'fallen_angel_dungeon', count: 2 },
          { monsterId: 'celestial_guardian_dungeon', count: 2 },
        ],
        isBoss: false,
      },
      {
        id: 'celestial_trial_sanctuary',
        name: '聖所',
        description: '最後的聖所，距離戰神只有一步之遙。所有類型的守衛在此集結。',
        monsters: [
          { monsterId: 'seraph_dungeon', count: 2 },
          { monsterId: 'divine_construct_dungeon', count: 1 },
          { monsterId: 'celestial_guardian_dungeon', count: 1 },
        ],
        isBoss: false,
      },
      {
        id: 'celestial_trial_boss',
        name: '神之間',
        description:
          '天界的最高處，金色的光芒中浮現出一道偉岸的身影。' +
          '戰神手持神槍，以超越凡人理解的威壓俯視著挑戰者——' +
          '「來吧，讓我看看凡人的極限！」',
        monsters: [
          { monsterId: 'god_of_war_dungeon', count: 1 },
          { monsterId: 'seraph_dungeon', count: 1 },
        ],
        isBoss: true,
      },
    ],
    firstClearRewards: {
      exp: 40000,
      gold: 25000,
      items: [
        { itemId: 'god_of_war_spear', qty: 1 },
        { itemId: 'celestial_fragment', qty: 15 },
      ],
    },
    normalRewards: {
      exp: 18000,
      gold: 10000,
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
