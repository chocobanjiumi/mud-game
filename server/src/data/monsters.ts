// 怪物定義 - 所有區域的怪物資料

import type { MonsterDef } from '@game/shared';

export const MONSTERS: Record<string, MonsterDef> = {

  // ─── 新手村 (Lv 1-5) ────────────────────────────────────

  slime: {
    id: 'slime',
    name: '史萊姆',
    level: 1,
    hp: 30,
    mp: 0,
    str: 3,
    int: 1,
    dex: 2,
    vit: 3,
    luk: 1,
    element: 'none',
    skills: ['basic_attack'],
    expReward: 10,
    goldReward: [2, 5],
    drops: [
      { itemId: 'slime_gel', chance: 0.5, minQty: 1, maxQty: 2 },
      { itemId: 'hp_potion_s', chance: 0.1, minQty: 1, maxQty: 1 },
    ],
    aiType: 'passive',
    description: '一團果凍般的半透明生物，在地上緩慢地蠕動。看起來人畜無害，是新手冒險者的最佳練習對象。',
    isBoss: false,
  },

  small_bat: {
    id: 'small_bat',
    name: '小蝙蝠',
    level: 2,
    hp: 25,
    mp: 5,
    str: 4,
    int: 2,
    dex: 6,
    vit: 2,
    luk: 3,
    element: 'dark',
    skills: ['basic_attack', 'screech'],
    expReward: 15,
    goldReward: [3, 7],
    drops: [
      { itemId: 'bat_wing', chance: 0.4, minQty: 1, maxQty: 2 },
      { itemId: 'mp_potion_s', chance: 0.08, minQty: 1, maxQty: 1 },
    ],
    aiType: 'aggressive',
    description: '從暗處飛出的小蝙蝠，雖然體型不大，但尖銳的叫聲足以讓人頭疼。靈活的飛行讓它不太容易被擊中。',
    isBoss: false,
  },

  wild_rabbit: {
    id: 'wild_rabbit',
    name: '野兔',
    level: 3,
    hp: 35,
    mp: 0,
    str: 5,
    int: 1,
    dex: 8,
    vit: 4,
    luk: 5,
    element: 'none',
    skills: ['basic_attack', 'quick_dash'],
    expReward: 18,
    goldReward: [3, 8],
    drops: [
      { itemId: 'rabbit_fur', chance: 0.5, minQty: 1, maxQty: 1 },
      { itemId: 'rabbit_meat', chance: 0.3, minQty: 1, maxQty: 2 },
    ],
    aiType: 'passive',
    description: '看似可愛的野兔，但被逼急了也會用強壯的後腿踢人。它的速度非常快，想抓住可不容易。',
    isBoss: false,
  },

  // ─── 翠綠平原 (Lv 5-10) ─────────────────────────────────

  wild_wolf: {
    id: 'wild_wolf',
    name: '野狼',
    level: 6,
    hp: 80,
    mp: 10,
    str: 12,
    int: 3,
    dex: 10,
    vit: 8,
    luk: 4,
    element: 'none',
    skills: ['basic_attack', 'bite', 'howl'],
    expReward: 35,
    goldReward: [8, 15],
    drops: [
      { itemId: 'wolf_pelt', chance: 0.4, minQty: 1, maxQty: 1 },
      { itemId: 'wolf_fang', chance: 0.25, minQty: 1, maxQty: 2 },
      { itemId: 'hp_potion_s', chance: 0.15, minQty: 1, maxQty: 1 },
    ],
    aiType: 'aggressive',
    description: '灰色毛皮的野狼，目光銳利地注視著獵物。它們通常成群出沒，用嚎叫聲召喚同伴。落單時依然是危險的對手。',
    isBoss: false,
  },

  bandit: {
    id: 'bandit',
    name: '盜賊',
    level: 7,
    hp: 90,
    mp: 15,
    str: 13,
    int: 5,
    dex: 12,
    vit: 9,
    luk: 6,
    element: 'none',
    skills: ['basic_attack', 'backstab', 'steal'],
    expReward: 42,
    goldReward: [15, 30],
    drops: [
      { itemId: 'bandit_dagger', chance: 0.1, minQty: 1, maxQty: 1 },
      { itemId: 'stolen_pouch', chance: 0.3, minQty: 1, maxQty: 1 },
      { itemId: 'hp_potion_m', chance: 0.1, minQty: 1, maxQty: 1 },
    ],
    aiType: 'aggressive',
    description: '蒙面的盜賊，手持匕首藏在路旁的草叢中。他們專門劫掠落單的旅人，動作迅速且狡猾。',
    isBoss: false,
  },

  poison_snake: {
    id: 'poison_snake',
    name: '毒蛇',
    level: 8,
    hp: 65,
    mp: 20,
    str: 10,
    int: 6,
    dex: 14,
    vit: 6,
    luk: 5,
    element: 'nature',
    skills: ['basic_attack', 'poison_bite', 'coil'],
    expReward: 40,
    goldReward: [10, 18],
    drops: [
      { itemId: 'snake_venom', chance: 0.35, minQty: 1, maxQty: 2 },
      { itemId: 'snake_skin', chance: 0.3, minQty: 1, maxQty: 1 },
      { itemId: 'antidote', chance: 0.2, minQty: 1, maxQty: 1 },
    ],
    aiType: 'aggressive',
    description: '身披翠綠鱗片的毒蛇，吐著鮮紅的信子。它的毒牙能注入令人痛苦的毒素，被咬到後毒液會緩慢侵蝕身體。',
    isBoss: false,
  },

  // ─── 暗影森林 (Lv 10-20) ────────────────────────────────

  shadow_wolf: {
    id: 'shadow_wolf',
    name: '暗影狼',
    level: 12,
    hp: 150,
    mp: 25,
    str: 20,
    int: 8,
    dex: 18,
    vit: 14,
    luk: 7,
    element: 'dark',
    skills: ['basic_attack', 'shadow_bite', 'shadow_dash', 'howl'],
    expReward: 65,
    goldReward: [18, 35],
    drops: [
      { itemId: 'shadow_pelt', chance: 0.35, minQty: 1, maxQty: 1 },
      { itemId: 'shadow_essence', chance: 0.15, minQty: 1, maxQty: 1 },
      { itemId: 'hp_potion_m', chance: 0.2, minQty: 1, maxQty: 1 },
    ],
    aiType: 'aggressive',
    description: '暗影森林中的恐怖獵食者，漆黑的毛皮讓它能完美融入黑暗。它的攻擊帶有暗影之力，被咬到會感到一陣刺骨的寒冷。',
    isBoss: false,
  },

  giant_spider: {
    id: 'giant_spider',
    name: '巨型蜘蛛',
    level: 14,
    hp: 180,
    mp: 30,
    str: 18,
    int: 12,
    dex: 15,
    vit: 16,
    luk: 6,
    element: 'dark',
    skills: ['basic_attack', 'poison_web', 'venomous_bite', 'web_trap'],
    expReward: 75,
    goldReward: [20, 40],
    drops: [
      { itemId: 'spider_silk', chance: 0.45, minQty: 1, maxQty: 3 },
      { itemId: 'spider_venom', chance: 0.25, minQty: 1, maxQty: 1 },
      { itemId: 'spider_eye', chance: 0.15, minQty: 1, maxQty: 1 },
    ],
    aiType: 'aggressive',
    description: '體型如牛犢般巨大的蜘蛛，八隻眼睛在黑暗中閃爍著詭異的光芒。它會織出大片毒網來困住獵物，然後慢慢享用。',
    isBoss: false,
  },

  treant: {
    id: 'treant',
    name: '樹精',
    level: 16,
    hp: 250,
    mp: 40,
    str: 22,
    int: 15,
    dex: 8,
    vit: 25,
    luk: 5,
    element: 'nature',
    skills: ['basic_attack', 'root_bind', 'bark_shield', 'nature_drain'],
    expReward: 90,
    goldReward: [25, 50],
    drops: [
      { itemId: 'ancient_bark', chance: 0.4, minQty: 1, maxQty: 2 },
      { itemId: 'nature_crystal', chance: 0.1, minQty: 1, maxQty: 1 },
      { itemId: 'treant_sap', chance: 0.3, minQty: 1, maxQty: 1 },
    ],
    aiType: 'defensive',
    description: '被森林魔力喚醒的古樹，粗壯的枝幹就是它的武器。它行動遲緩但防禦極高，根部能束縛住靠近的敵人。',
    isBoss: false,
  },

  shadow_wolf_alpha: {
    id: 'shadow_wolf_alpha',
    name: '暗影狼王',
    level: 20,
    hp: 600,
    mp: 80,
    str: 35,
    int: 15,
    dex: 28,
    vit: 30,
    luk: 12,
    element: 'dark',
    skills: [
      'basic_attack', 'shadow_bite', 'shadow_dash', 'howl',
      'shadow_storm', 'alpha_roar', 'shadow_devour',
    ],
    expReward: 350,
    goldReward: [100, 200],
    drops: [
      { itemId: 'shadow_pelt', chance: 1.0, minQty: 2, maxQty: 3 },
      { itemId: 'shadow_essence', chance: 0.8, minQty: 1, maxQty: 2 },
      { itemId: 'alpha_fang', chance: 0.5, minQty: 1, maxQty: 1 },
      { itemId: 'shadow_cloak', chance: 0.15, minQty: 1, maxQty: 1 },
      { itemId: 'shadow_blade', chance: 0.08, minQty: 1, maxQty: 1 },
    ],
    aiType: 'boss',
    description:
      '暗影森林的霸主，體型比普通暗影狼大上一倍。全身散發著濃烈的暗影之力，' +
      '血紅的雙眼令人膽寒。它能召喚暗影風暴吞噬一切，是森林中最危險的存在。',
    isBoss: true,
  },

  // ─── 水晶洞窟 (Lv 20-30) ────────────────────────────────

  crystal_lizard: {
    id: 'crystal_lizard',
    name: '水晶蜥蜴',
    level: 22,
    hp: 280,
    mp: 50,
    str: 28,
    int: 20,
    dex: 20,
    vit: 22,
    luk: 8,
    element: 'ice',
    skills: ['basic_attack', 'crystal_shard', 'ice_armor', 'tail_whip'],
    expReward: 120,
    goldReward: [30, 60],
    drops: [
      { itemId: 'crystal_scale', chance: 0.4, minQty: 1, maxQty: 2 },
      { itemId: 'crystal_shard', chance: 0.3, minQty: 1, maxQty: 3 },
      { itemId: 'ice_crystal', chance: 0.1, minQty: 1, maxQty: 1 },
    ],
    aiType: 'aggressive',
    description: '全身覆蓋著水晶鱗片的大型蜥蜴，在洞窟中反射出璀璨的光芒。它能發射尖銳的水晶碎片進行遠程攻擊。',
    isBoss: false,
  },

  cave_bat: {
    id: 'cave_bat',
    name: '洞窟蝙蝠',
    level: 21,
    hp: 200,
    mp: 40,
    str: 22,
    int: 15,
    dex: 25,
    vit: 16,
    luk: 10,
    element: 'dark',
    skills: ['basic_attack', 'sonic_wave', 'life_drain', 'blind'],
    expReward: 100,
    goldReward: [25, 50],
    drops: [
      { itemId: 'bat_wing', chance: 0.45, minQty: 1, maxQty: 2 },
      { itemId: 'echo_crystal', chance: 0.15, minQty: 1, maxQty: 1 },
      { itemId: 'hp_potion_m', chance: 0.2, minQty: 1, maxQty: 1 },
    ],
    aiType: 'aggressive',
    description: '比普通蝙蝠大上數倍的洞窟蝙蝠，能發出強力的超聲波攻擊。在黑暗的洞窟中，它是完美的掠食者。',
    isBoss: false,
  },

  gargoyle: {
    id: 'gargoyle',
    name: '石像鬼',
    level: 25,
    hp: 400,
    mp: 60,
    str: 35,
    int: 18,
    dex: 15,
    vit: 35,
    luk: 5,
    element: 'none',
    skills: ['basic_attack', 'stone_slam', 'petrifying_gaze', 'stone_skin'],
    expReward: 160,
    goldReward: [40, 80],
    drops: [
      { itemId: 'gargoyle_stone', chance: 0.35, minQty: 1, maxQty: 1 },
      { itemId: 'stone_heart', chance: 0.12, minQty: 1, maxQty: 1 },
      { itemId: 'gargoyle_wing', chance: 0.2, minQty: 1, maxQty: 1 },
    ],
    aiType: 'defensive',
    description: '看似普通的石像，實則是被魔法賦予生命的守衛。堅硬的石質身體讓普通攻擊難以奏效，石化凝視更是令人聞風喪膽。',
    isBoss: false,
  },

  crystal_guardian: {
    id: 'crystal_guardian',
    name: '水晶守衛',
    level: 30,
    hp: 1200,
    mp: 150,
    str: 45,
    int: 35,
    dex: 22,
    vit: 45,
    luk: 10,
    element: 'ice',
    skills: [
      'basic_attack', 'crystal_shard', 'crystal_prison',
      'ice_storm', 'diamond_skin', 'shatter', 'crystal_resurrection',
    ],
    expReward: 800,
    goldReward: [200, 500],
    drops: [
      { itemId: 'crystal_scale', chance: 1.0, minQty: 3, maxQty: 5 },
      { itemId: 'crystal_core', chance: 0.6, minQty: 1, maxQty: 1 },
      { itemId: 'guardian_crystal', chance: 0.3, minQty: 1, maxQty: 1 },
      { itemId: 'crystal_armor', chance: 0.1, minQty: 1, maxQty: 1 },
      { itemId: 'crystal_blade', chance: 0.08, minQty: 1, maxQty: 1 },
    ],
    aiType: 'boss',
    description:
      '水晶洞窟的終極守護者，由巨大的水晶凝聚而成的人形巨獸。' +
      '它的身體折射著令人目眩的光芒，能召喚冰風暴凍結整個戰場。' +
      '據說擊敗它才能獲得洞窟深處的寶藏。',
    isBoss: true,
  },

  // ─── 競技場 (Lv 30+) ────────────────────────────────────

  training_dummy: {
    id: 'training_dummy',
    name: '練習假人',
    level: 1,
    hp: 9999,
    mp: 0,
    str: 1,
    int: 1,
    dex: 1,
    vit: 99,
    luk: 1,
    element: 'none',
    skills: [],
    expReward: 1,
    goldReward: [0, 0],
    drops: [],
    aiType: 'passive',
    description: '競技場內的練習用假人，外表是稻草編織的人偶。無論怎麼打都不會倒下，是測試傷害輸出的最佳工具。',
    isBoss: false,
  },
};

/** 取得怪物定義 */
export function getMonster(monsterId: string): MonsterDef | undefined {
  return MONSTERS[monsterId];
}

/** 取得某等級範圍的怪物 */
export function getMonstersByLevelRange(minLevel: number, maxLevel: number): MonsterDef[] {
  return Object.values(MONSTERS).filter(
    m => m.level >= minLevel && m.level <= maxLevel,
  );
}

/** 取得所有 Boss 怪物 */
export function getBossMonsters(): MonsterDef[] {
  return Object.values(MONSTERS).filter(m => m.isBoss);
}
