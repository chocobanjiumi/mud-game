// 怪物資料

import type { MonsterDef } from '../types/combat.js';

export const MONSTER_DEFS: Record<string, MonsterDef> = {
  // ============ 新手區 (Lv 1-5) ============
  green_slime: {
    id: 'green_slime', name: '綠色史萊姆', level: 1,
    hp: 30, mp: 0, str: 3, int: 1, dex: 2, vit: 2, luk: 1,
    element: 'nature', skills: ['slash'],
    expReward: 10, goldReward: [3, 8],
    drops: [
      { itemId: 'slime_jelly', chance: 0.5, minQty: 1, maxQty: 2 },
      { itemId: 'herb', chance: 0.3, minQty: 1, maxQty: 1 },
    ],
    aiType: 'passive', description: '綠色的黏稠生物，動作遲緩且無害。', isBoss: false,
  },
  blue_slime: {
    id: 'blue_slime', name: '藍色史萊姆', level: 2,
    hp: 45, mp: 10, str: 3, int: 4, dex: 2, vit: 3, luk: 1,
    element: 'ice', skills: ['slash'],
    expReward: 15, goldReward: [5, 12],
    drops: [
      { itemId: 'slime_jelly', chance: 0.5, minQty: 1, maxQty: 3 },
      { itemId: 'small_mp_potion', chance: 0.15, minQty: 1, maxQty: 1 },
    ],
    aiType: 'passive', description: '帶有冰屬性的史萊姆，觸感冰涼。', isBoss: false,
  },
  wild_rabbit: {
    id: 'wild_rabbit', name: '野兔', level: 1,
    hp: 20, mp: 0, str: 2, int: 1, dex: 5, vit: 1, luk: 3,
    element: 'none', skills: ['slash'],
    expReward: 8, goldReward: [1, 5],
    drops: [
      { itemId: 'herb', chance: 0.4, minQty: 1, maxQty: 2 },
    ],
    aiType: 'passive', description: '平原上常見的野兔，非常靈活。', isBoss: false,
  },
  goblin_scout: {
    id: 'goblin_scout', name: '哥布林斥候', level: 3,
    hp: 55, mp: 0, str: 6, int: 2, dex: 5, vit: 4, luk: 2,
    element: 'none', skills: ['slash', 'precise_shot'],
    expReward: 22, goldReward: [8, 18],
    drops: [
      { itemId: 'goblin_ear', chance: 0.6, minQty: 1, maxQty: 1 },
      { itemId: 'short_bow', chance: 0.05, minQty: 1, maxQty: 1 },
      { itemId: 'small_hp_potion', chance: 0.2, minQty: 1, maxQty: 1 },
    ],
    aiType: 'aggressive', description: '哥布林部落的偵察兵，擅長遠程騷擾。', isBoss: false,
  },
  goblin_warrior: {
    id: 'goblin_warrior', name: '哥布林戰士', level: 4,
    hp: 75, mp: 0, str: 8, int: 2, dex: 4, vit: 6, luk: 2,
    element: 'none', skills: ['slash', 'power_strike'],
    expReward: 30, goldReward: [12, 25],
    drops: [
      { itemId: 'goblin_ear', chance: 0.6, minQty: 1, maxQty: 2 },
      { itemId: 'iron_sword', chance: 0.03, minQty: 1, maxQty: 1 },
      { itemId: 'leather_armor', chance: 0.05, minQty: 1, maxQty: 1 },
    ],
    aiType: 'aggressive', description: '裝備簡陋武器的哥布林，好鬥且兇殘。', isBoss: false,
  },
  training_dummy: {
    id: 'training_dummy', name: '訓練木人', level: 1,
    hp: 100, mp: 0, str: 0, int: 0, dex: 0, vit: 10, luk: 0,
    element: 'none', skills: [],
    expReward: 5, goldReward: [0, 0],
    drops: [],
    aiType: 'passive', description: '訓練場上的木人樁，不會反擊。', isBoss: false,
  },

  // ============ 平原 (Lv 5-10) ============
  wild_wolf: {
    id: 'wild_wolf', name: '野狼', level: 5,
    hp: 90, mp: 0, str: 10, int: 2, dex: 8, vit: 6, luk: 3,
    element: 'none', skills: ['slash', 'quick_step'],
    expReward: 40, goldReward: [15, 30],
    drops: [
      { itemId: 'wolf_pelt', chance: 0.5, minQty: 1, maxQty: 1 },
      { itemId: 'leather_boots', chance: 0.08, minQty: 1, maxQty: 1 },
    ],
    aiType: 'aggressive', description: '平原上的掠食者，通常成群狩獵。', isBoss: false,
  },
  bandit: {
    id: 'bandit', name: '盜賊', level: 6,
    hp: 110, mp: 10, str: 10, int: 4, dex: 9, vit: 7, luk: 5,
    element: 'none', skills: ['slash', 'precise_shot', 'quick_step'],
    expReward: 50, goldReward: [20, 45],
    drops: [
      { itemId: 'small_hp_potion', chance: 0.3, minQty: 1, maxQty: 2 },
      { itemId: 'iron_sword', chance: 0.08, minQty: 1, maxQty: 1 },
      { itemId: 'leather_armor', chance: 0.06, minQty: 1, maxQty: 1 },
    ],
    aiType: 'aggressive', description: '在平原上埋伏的盜賊，覬覦旅人的財物。', isBoss: false,
  },
  prairie_boar: {
    id: 'prairie_boar', name: '平原野豬', level: 7,
    hp: 140, mp: 0, str: 12, int: 1, dex: 5, vit: 10, luk: 2,
    element: 'none', skills: ['slash', 'power_strike'],
    expReward: 55, goldReward: [10, 25],
    drops: [
      { itemId: 'herb', chance: 0.3, minQty: 1, maxQty: 3 },
      { itemId: 'leather_gloves', chance: 0.06, minQty: 1, maxQty: 1 },
    ],
    aiType: 'aggressive', description: '脾氣暴躁的大型野豬，一旦被激怒就會猛力衝撞。', isBoss: false,
  },
  wind_hawk: {
    id: 'wind_hawk', name: '風之鷹', level: 8,
    hp: 80, mp: 15, str: 8, int: 6, dex: 14, vit: 4, luk: 5,
    element: 'nature', skills: ['slash', 'quick_step', 'precise_shot'],
    expReward: 60, goldReward: [15, 35],
    drops: [
      { itemId: 'bat_wing', chance: 0.4, minQty: 1, maxQty: 2 },
      { itemId: 'swift_boots', chance: 0.04, minQty: 1, maxQty: 1 },
    ],
    aiType: 'aggressive', description: '翱翔在平原上空的猛禽，速度極快。', isBoss: false,
  },
  goblin_chief: {
    id: 'goblin_chief', name: '哥布林首領', level: 10,
    hp: 300, mp: 30, str: 18, int: 8, dex: 10, vit: 15, luk: 5,
    element: 'none', skills: ['power_strike', 'war_cry', 'blade_aura'],
    expReward: 150, goldReward: [50, 100],
    drops: [
      { itemId: 'goblin_ear', chance: 1.0, minQty: 3, maxQty: 5 },
      { itemId: 'steel_sword', chance: 0.15, minQty: 1, maxQty: 1 },
      { itemId: 'chain_mail', chance: 0.1, minQty: 1, maxQty: 1 },
      { itemId: 'lucky_charm', chance: 0.05, minQty: 1, maxQty: 1 },
    ],
    aiType: 'boss', description: '統率哥布林部落的首領，體型比一般哥布林大上許多。', isBoss: true,
  },

  // ============ 森林 (Lv 10-20) ============
  forest_spider: {
    id: 'forest_spider', name: '森林蜘蛛', level: 10,
    hp: 150, mp: 10, str: 12, int: 6, dex: 10, vit: 8, luk: 3,
    element: 'nature', skills: ['slash', 'poison_arrow'],
    expReward: 70, goldReward: [20, 40],
    drops: [
      { itemId: 'herb', chance: 0.3, minQty: 1, maxQty: 2 },
      { itemId: 'antidote', chance: 0.25, minQty: 1, maxQty: 2 },
    ],
    aiType: 'aggressive', description: '在森林中結網的巨型蜘蛛，會噴射毒液。', isBoss: false,
  },
  shadow_wolf: {
    id: 'shadow_wolf', name: '暗影狼', level: 12,
    hp: 180, mp: 15, str: 15, int: 5, dex: 14, vit: 10, luk: 4,
    element: 'dark', skills: ['slash', 'quick_step', 'power_strike'],
    expReward: 90, goldReward: [25, 50],
    drops: [
      { itemId: 'wolf_pelt', chance: 0.4, minQty: 1, maxQty: 2 },
      { itemId: 'shadow_essence', chance: 0.2, minQty: 1, maxQty: 1 },
    ],
    aiType: 'aggressive', description: '被暗影侵蝕的狼，眼中閃爍著詭異的紫光。', isBoss: false,
  },
  dark_elf_archer: {
    id: 'dark_elf_archer', name: '暗精靈弓手', level: 14,
    hp: 160, mp: 30, str: 12, int: 10, dex: 18, vit: 8, luk: 5,
    element: 'dark', skills: ['precise_shot', 'poison_arrow', 'quick_step'],
    expReward: 110, goldReward: [30, 60],
    drops: [
      { itemId: 'long_bow', chance: 0.08, minQty: 1, maxQty: 1 },
      { itemId: 'shadow_essence', chance: 0.3, minQty: 1, maxQty: 2 },
      { itemId: 'medium_hp_potion', chance: 0.2, minQty: 1, maxQty: 1 },
    ],
    aiType: 'aggressive', description: '在森林深處潛伏的暗精靈，箭術精湛。', isBoss: false,
  },
  treant: {
    id: 'treant', name: '樹人', level: 16,
    hp: 350, mp: 20, str: 20, int: 8, dex: 4, vit: 25, luk: 2,
    element: 'nature', skills: ['slash', 'power_strike', 'guard'],
    expReward: 130, goldReward: [20, 45],
    drops: [
      { itemId: 'herb', chance: 0.5, minQty: 2, maxQty: 5 },
      { itemId: 'oak_staff', chance: 0.06, minQty: 1, maxQty: 1 },
    ],
    aiType: 'defensive', description: '古老的樹精靈，守護著森林的秘密。', isBoss: false,
  },
  forest_witch: {
    id: 'forest_witch', name: '森林女巫', level: 18,
    hp: 200, mp: 80, str: 6, int: 22, dex: 10, vit: 8, luk: 8,
    element: 'nature', skills: ['fireball', 'frost_nova', 'heal'],
    expReward: 150, goldReward: [35, 70],
    drops: [
      { itemId: 'crystal_staff', chance: 0.05, minQty: 1, maxQty: 1 },
      { itemId: 'mage_robe', chance: 0.06, minQty: 1, maxQty: 1 },
      { itemId: 'medium_mp_potion', chance: 0.3, minQty: 1, maxQty: 2 },
    ],
    aiType: 'healer', description: '隱居在森林深處的女巫，精通各種魔法。', isBoss: false,
  },
  shadow_wolf_alpha: {
    id: 'shadow_wolf_alpha', name: '暗影狼王', level: 20,
    hp: 600, mp: 40, str: 25, int: 12, dex: 18, vit: 20, luk: 8,
    element: 'dark', skills: ['power_strike', 'blade_aura', 'war_cry', 'quick_step'],
    expReward: 300, goldReward: [80, 150],
    drops: [
      { itemId: 'wolf_pelt', chance: 1.0, minQty: 3, maxQty: 5 },
      { itemId: 'shadow_essence', chance: 0.6, minQty: 2, maxQty: 4 },
      { itemId: 'composite_bow', chance: 0.1, minQty: 1, maxQty: 1 },
      { itemId: 'flame_sword', chance: 0.05, minQty: 1, maxQty: 1 },
    ],
    aiType: 'boss', description: '統率暗影狼群的王者，全身散發著濃郁的暗影之力。', isBoss: true,
  },

  // ============ 洞窟 (Lv 12-20) ============
  cave_bat: {
    id: 'cave_bat', name: '洞窟蝙蝠', level: 12,
    hp: 120, mp: 10, str: 10, int: 5, dex: 16, vit: 6, luk: 4,
    element: 'dark', skills: ['slash', 'quick_step'],
    expReward: 75, goldReward: [15, 35],
    drops: [
      { itemId: 'bat_wing', chance: 0.5, minQty: 1, maxQty: 2 },
    ],
    aiType: 'aggressive', description: '在洞窟中棲息的巨型蝙蝠。', isBoss: false,
  },
  crystal_golem: {
    id: 'crystal_golem', name: '水晶魔像', level: 15,
    hp: 400, mp: 0, str: 22, int: 3, dex: 3, vit: 30, luk: 1,
    element: 'none', skills: ['slash', 'power_strike', 'guard'],
    expReward: 120, goldReward: [25, 50],
    drops: [
      { itemId: 'crystal_shard', chance: 0.6, minQty: 1, maxQty: 3 },
      { itemId: 'iron_gauntlets', chance: 0.08, minQty: 1, maxQty: 1 },
    ],
    aiType: 'defensive', description: '由洞窟水晶凝聚而成的魔像，防禦極高。', isBoss: false,
  },
  fire_elemental: {
    id: 'fire_elemental', name: '火焰元素', level: 17,
    hp: 220, mp: 60, str: 8, int: 20, dex: 10, vit: 10, luk: 3,
    element: 'fire', skills: ['fireball', 'slash'],
    expReward: 130, goldReward: [30, 55],
    drops: [
      { itemId: 'crystal_shard', chance: 0.3, minQty: 1, maxQty: 2 },
      { itemId: 'flame_sword', chance: 0.03, minQty: 1, maxQty: 1 },
    ],
    aiType: 'aggressive', description: '在洞窟深處遊蕩的火焰精靈。', isBoss: false,
  },
  cave_dragon: {
    id: 'cave_dragon', name: '洞窟幼龍', level: 20,
    hp: 800, mp: 60, str: 28, int: 15, dex: 12, vit: 22, luk: 5,
    element: 'fire', skills: ['power_strike', 'fireball', 'blade_aura', 'war_cry'],
    expReward: 400, goldReward: [100, 200],
    drops: [
      { itemId: 'crystal_shard', chance: 0.8, minQty: 3, maxQty: 6 },
      { itemId: 'flame_sword', chance: 0.12, minQty: 1, maxQty: 1 },
      { itemId: 'plate_armor', chance: 0.08, minQty: 1, maxQty: 1 },
      { itemId: 'divine_scepter', chance: 0.05, minQty: 1, maxQty: 1 },
    ],
    aiType: 'boss', description: '盤踞在水晶洞窟最深處的幼龍，雖然年幼但實力不容小覷。', isBoss: true,
  },

  // ============ 湖畔城鎮周邊 (Lv 20-30) ============
  lake_serpent: {
    id: 'lake_serpent', name: '湖蛇', level: 20,
    hp: 280, mp: 20, str: 20, int: 8, dex: 16, vit: 14, luk: 4,
    element: 'ice', skills: ['slash', 'poison_arrow', 'quick_step'],
    expReward: 180, goldReward: [40, 80],
    drops: [
      { itemId: 'antidote', chance: 0.4, minQty: 1, maxQty: 2 },
      { itemId: 'medium_hp_potion', chance: 0.2, minQty: 1, maxQty: 1 },
    ],
    aiType: 'aggressive', description: '棲息在湖畔的大蛇，擅長水中突襲。', isBoss: false,
  },
  frost_golem: {
    id: 'frost_golem', name: '冰霜魔像', level: 22,
    hp: 500, mp: 30, str: 24, int: 10, dex: 5, vit: 32, luk: 2,
    element: 'ice', skills: ['slash', 'power_strike', 'guard', 'frost_nova'],
    expReward: 220, goldReward: [50, 100],
    drops: [
      { itemId: 'crystal_shard', chance: 0.5, minQty: 1, maxQty: 3 },
      { itemId: 'iron_gauntlets', chance: 0.06, minQty: 1, maxQty: 1 },
    ],
    aiType: 'defensive', description: '由冰霜凝聚而成的魔像，堅硬如鋼，行動緩慢。', isBoss: false,
  },
  dark_mage: {
    id: 'dark_mage', name: '暗黑法師', level: 24,
    hp: 260, mp: 120, str: 8, int: 28, dex: 12, vit: 10, luk: 6,
    element: 'dark', skills: ['fireball', 'lightning', 'frost_nova', 'mana_shield'],
    expReward: 250, goldReward: [55, 110],
    drops: [
      { itemId: 'shadow_essence', chance: 0.4, minQty: 1, maxQty: 3 },
      { itemId: 'crystal_staff', chance: 0.05, minQty: 1, maxQty: 1 },
      { itemId: 'medium_mp_potion', chance: 0.3, minQty: 1, maxQty: 2 },
    ],
    aiType: 'aggressive', description: '墮落的法師，操控暗影魔法，極度危險。', isBoss: false,
  },
  undead_knight: {
    id: 'undead_knight', name: '亡靈騎士', level: 25,
    hp: 420, mp: 20, str: 28, int: 5, dex: 10, vit: 22, luk: 3,
    element: 'dark', skills: ['power_strike', 'blade_aura', 'guard', 'counter_stance'],
    expReward: 280, goldReward: [60, 120],
    drops: [
      { itemId: 'shadow_essence', chance: 0.5, minQty: 1, maxQty: 2 },
      { itemId: 'plate_armor', chance: 0.04, minQty: 1, maxQty: 1 },
    ],
    aiType: 'aggressive', description: '被黑暗力量復活的騎士，仍保留著生前的劍術。', isBoss: false,
  },
  thunder_eagle: {
    id: 'thunder_eagle', name: '雷鷹', level: 26,
    hp: 300, mp: 50, str: 18, int: 16, dex: 22, vit: 12, luk: 8,
    element: 'lightning', skills: ['lightning', 'precise_shot', 'quick_step'],
    expReward: 300, goldReward: [55, 115],
    drops: [
      { itemId: 'bat_wing', chance: 0.4, minQty: 2, maxQty: 4 },
      { itemId: 'crystal_shard', chance: 0.3, minQty: 1, maxQty: 2 },
    ],
    aiType: 'aggressive', description: '身披雷電的巨鷹，每次俯衝都帶著閃電之力。', isBoss: false,
  },
  cursed_priest: {
    id: 'cursed_priest', name: '被詛咒的祭司', level: 27,
    hp: 320, mp: 100, str: 10, int: 24, dex: 10, vit: 14, luk: 5,
    element: 'dark', skills: ['holy_light', 'heal', 'purify', 'fear'],
    expReward: 320, goldReward: [60, 125],
    drops: [
      { itemId: 'shadow_essence', chance: 0.4, minQty: 1, maxQty: 3 },
      { itemId: 'divine_scepter', chance: 0.04, minQty: 1, maxQty: 1 },
      { itemId: 'large_mp_potion', chance: 0.2, minQty: 1, maxQty: 1 },
    ],
    aiType: 'healer', description: '曾經的神職人員，墮入黑暗後扭曲了神聖之力。', isBoss: false,
  },
  lake_hydra: {
    id: 'lake_hydra', name: '湖中九頭蛇', level: 30,
    hp: 1200, mp: 80, str: 32, int: 18, dex: 14, vit: 28, luk: 6,
    element: 'ice', skills: ['power_strike', 'blade_aura', 'frost_nova', 'poison_arrow', 'war_cry'],
    expReward: 600, goldReward: [150, 300],
    drops: [
      { itemId: 'crystal_shard', chance: 1.0, minQty: 5, maxQty: 10 },
      { itemId: 'shadow_essence', chance: 0.5, minQty: 2, maxQty: 5 },
      { itemId: 'large_hp_potion', chance: 0.5, minQty: 2, maxQty: 3 },
    ],
    aiType: 'boss', description: '盤踞在深湖中的傳說級怪物，多頭同時攻擊，極為致命。', isBoss: true,
  },

  // ============ 高等級區域 (Lv 30-40) ============
  shadow_assassin: {
    id: 'shadow_assassin', name: '暗影刺客', level: 30,
    hp: 380, mp: 40, str: 26, int: 8, dex: 28, vit: 14, luk: 10,
    element: 'dark', skills: ['precise_shot', 'poison_arrow', 'quick_step', 'barrage'],
    expReward: 350, goldReward: [70, 140],
    drops: [
      { itemId: 'shadow_essence', chance: 0.5, minQty: 2, maxQty: 4 },
      { itemId: 'composite_bow', chance: 0.06, minQty: 1, maxQty: 1 },
    ],
    aiType: 'aggressive', description: '暗影中的殺手，身法詭譎，出手必中要害。', isBoss: false,
  },
  flame_dragon_knight: {
    id: 'flame_dragon_knight', name: '炎龍騎士', level: 32,
    hp: 550, mp: 40, str: 35, int: 12, dex: 16, vit: 25, luk: 5,
    element: 'fire', skills: ['power_strike', 'blade_aura', 'fireball', 'war_cry'],
    expReward: 400, goldReward: [80, 160],
    drops: [
      { itemId: 'crystal_shard', chance: 0.4, minQty: 2, maxQty: 4 },
      { itemId: 'large_hp_potion', chance: 0.3, minQty: 1, maxQty: 2 },
    ],
    aiType: 'aggressive', description: '騎乘火龍的精銳騎士，全身散發灼人的熱浪。', isBoss: false,
  },
  elder_treant: {
    id: 'elder_treant', name: '遠古樹人', level: 34,
    hp: 800, mp: 60, str: 30, int: 18, dex: 8, vit: 40, luk: 4,
    element: 'nature', skills: ['power_strike', 'guard', 'heal', 'counter_stance'],
    expReward: 450, goldReward: [60, 120],
    drops: [
      { itemId: 'herb', chance: 0.8, minQty: 5, maxQty: 10 },
      { itemId: 'large_hp_potion', chance: 0.3, minQty: 1, maxQty: 2 },
    ],
    aiType: 'defensive', description: '千年樹人，守護著森林最深處的祕境。', isBoss: false,
  },
  lich: {
    id: 'lich', name: '巫妖', level: 35,
    hp: 500, mp: 200, str: 10, int: 38, dex: 14, vit: 16, luk: 8,
    element: 'dark', skills: ['fireball', 'lightning', 'frost_nova', 'fear', 'mana_shield'],
    expReward: 500, goldReward: [100, 200],
    drops: [
      { itemId: 'shadow_essence', chance: 0.6, minQty: 3, maxQty: 6 },
      { itemId: 'crystal_shard', chance: 0.4, minQty: 2, maxQty: 4 },
      { itemId: 'large_mp_potion', chance: 0.4, minQty: 1, maxQty: 2 },
    ],
    aiType: 'aggressive', description: '不死族的魔法使，操控著死亡與腐朽的力量。', isBoss: false,
  },
  demon_warrior: {
    id: 'demon_warrior', name: '魔族戰士', level: 37,
    hp: 650, mp: 50, str: 38, int: 10, dex: 20, vit: 28, luk: 6,
    element: 'fire', skills: ['power_strike', 'blade_aura', 'whirlwind', 'war_cry'],
    expReward: 550, goldReward: [110, 220],
    drops: [
      { itemId: 'crystal_shard', chance: 0.5, minQty: 2, maxQty: 5 },
      { itemId: 'shadow_essence', chance: 0.4, minQty: 2, maxQty: 4 },
    ],
    aiType: 'aggressive', description: '來自魔界的戰士，渾身燃燒著暗紅色的火焰。', isBoss: false,
  },
  arch_demon: {
    id: 'arch_demon', name: '大惡魔', level: 40,
    hp: 2000, mp: 150, str: 42, int: 25, dex: 20, vit: 35, luk: 10,
    element: 'dark', skills: ['power_strike', 'blade_aura', 'fireball', 'lightning', 'war_cry', 'fear'],
    expReward: 1200, goldReward: [300, 600],
    drops: [
      { itemId: 'crystal_shard', chance: 1.0, minQty: 8, maxQty: 15 },
      { itemId: 'shadow_essence', chance: 1.0, minQty: 5, maxQty: 10 },
      { itemId: 'large_hp_potion', chance: 0.8, minQty: 3, maxQty: 5 },
      { itemId: 'large_mp_potion', chance: 0.8, minQty: 3, maxQty: 5 },
    ],
    aiType: 'boss', description: '魔界的統治者之一，恐怖的存在，需要整支隊伍才有可能擊敗。', isBoss: true,
  },
};
