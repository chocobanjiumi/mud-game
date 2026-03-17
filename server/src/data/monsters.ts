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
    guardianHints: {
      creature: '這隻史萊姆的核心偏右，從側面攻擊更容易命中要害。',
      treasure: '半透明的身體裡似乎消化了一些閃亮的東西。',
      spirit: '史萊姆是魔力汙染的產物，據說最初的史萊姆來自一次失敗的煉金實驗。',
    },
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
    guardianHints: {
      creature: '蝙蝠的超聲波有盲區——在牠發出叫聲的瞬間是攻擊的最佳時機。',
      treasure: '蝙蝠的巢穴中經常堆積著被牠們叼回的閃亮物品。',
      spirit: '這種蝙蝠被黑暗元素輕微汙染，牠們原本只是普通的蝙蝠。',
    },
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
    guardianHints: {
      creature: '野兔在衝刺前會有短暫的蓄力動作，抓住那個瞬間就能截斷牠的逃跑。',
      treasure: '野兔的毛皮品質上乘，如果完整剝下可以賣個好價錢。',
      spirit: '這片平原的野兔是精靈族放養的信使後代，牠們天生帶有微弱的魔力。',
    },
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
    guardianHints: {
      creature: '野狼嚎叫時會召喚附近的同伴，優先阻止牠嚎叫是明智之舉。',
      treasure: '狼群的領地中心通常藏著牠們叼回的獵物和掉落的旅人財物。',
      spirit: '這些野狼似乎受到暗影森林魔力的影響，比普通野狼更加兇猛。',
    },
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
    guardianHints: {
      creature: '盜賊習慣從背後偷襲——保持背靠牆壁可以避免他的暗算。',
      treasure: '盜賊身上藏著從旅人手中搶來的錢袋，擊敗後可能有額外收穫。',
      spirit: '這些盜賊原本是農民，是戰亂讓他們走上了這條路。',
    },
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
    guardianHints: {
      creature: '毒蛇在攻擊前會將身體盤成S形——那就是閃避的信號。',
      treasure: '蛇蛻中有時會留下凝固的毒液結晶，是珍貴的煉金材料。',
      spirit: '這種毒蛇是古代毒師培育的品種，牠們的毒液配方已經失傳。',
    },
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
    guardianHints: {
      creature: '暗影狼在隱身時會散發微弱的寒氣，感受到溫度驟降就要提高警覺。',
      treasure: '暗影狼的毛皮可以製成隱匿斗篷，在黑市上價值不菲。',
      spirit: '暗影狼是被暗影之力扭曲的森林守護獸，牠們的眼中偶爾會閃過悲傷。',
    },
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
    guardianHints: {
      creature: '蜘蛛會在腳下設置陷阱網——注意地面上異常反光的絲線。',
      treasure: '蜘蛛巢穴中被絲線裹住的繭裡，有些包裹的是旅人的遺物。',
      spirit: '巨型蜘蛛是森林黑暗面的化身，牠們與暗影之力有著深層的連結。',
    },
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
    guardianHints: {
      creature: '樹精的弱點在根部——斬斷地面的主根就能大幅削弱牠的力量。',
      treasure: '樹精的體內有一顆自然水晶核心，是強力的魔法材料。',
      spirit: '樹精是森林意志的具現化，傷害牠會影響整片森林的魔力平衡。',
    },
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
    guardianHints: {
      creature: '狼王在發動暗影風暴前會仰天長嘯——那是全力防禦的最後機會。',
      treasure: '狼王的領地深處藏著牠收集的所有戰利品，包括傳說中的暗影之刃。',
      spirit: '狼王曾是精靈族的坐騎，被暗影侵蝕後墮落成了這副模樣。如果能淨化牠……',
    },
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
    guardianHints: {
      creature: '水晶蜥蜴的鱗片會折射攻擊——瞄準牠腹部未結晶的軟肉。',
      treasure: '牠的水晶鱗片如果完整取下，可以鑲嵌在裝備上獲得冰屬性加成。',
      spirit: '水晶蜥蜴是洞窟原始生態的一部分，牠們吸收水晶的能量進化了千年。',
    },
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
    guardianHints: {
      creature: '洞窟蝙蝠害怕強光——用火焰魔法可以讓牠暫時失去方向感。',
      treasure: '蝙蝠棲息的洞頂經常有被牠們忽略的水晶簇。',
      spirit: '這些蝙蝠吸收了洞窟中的暗元素能量，牠們的超聲波帶有魔力共振。',
    },
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
    guardianHints: {
      creature: '石像鬼的關節處是石質最薄弱的地方，集中攻擊可以讓牠碎裂。',
      treasure: '石像鬼的心臟處有一顆魔法核心，是強化裝備的稀有素材。',
      spirit: '石像鬼原本是地底神殿的守衛，失去主人後仍忠實地執行著守護的職責。',
    },
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
    guardianHints: {
      creature: '水晶守衛在施放冰風暴時核心會暴露——那是致命一擊的唯一機會。',
      treasure: '守衛的水晶之軀碎裂後，核心會凝聚成傳說中的守護者水晶。',
      spirit: '水晶守衛是地底種族最後的傑作，牠承載著整個文明的遺志。',
    },
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
    guardianHints: {
      creature: '假人的關節處有特殊機關，用特定角度攻擊可以觸發隱藏的連擊訓練模式。試試瞄準接縫處。',
      treasure: '假人底座的木板有些鬆動，看起來像是被人刻意留下的暗格。或許值得翻找一下。',
      spirit: '這具假人承受了無數冒險者的攻擊，累積的鬥氣在體內形成了微弱的意識殘影——它記得每一個曾在這裡訓練過的人。',
    },
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
