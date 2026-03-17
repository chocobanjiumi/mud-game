// 物品資料

import type { ItemDef } from '../types/item.js';

export const ITEM_DEFS: Record<string, ItemDef> = {
  // ============ 武器 ============
  wooden_sword: {
    id: 'wooden_sword', name: '木劍', type: 'weapon',
    description: '初學者使用的木製練習劍。', buyPrice: 50, sellPrice: 25,
    stackable: false, maxStack: 1, levelReq: 1,
    equipSlot: 'weapon', stats: { atk: 5 },
  },
  iron_sword: {
    id: 'iron_sword', name: '鐵劍', type: 'weapon',
    description: '堅固的鐵製長劍。', buyPrice: 200, sellPrice: 100,
    stackable: false, maxStack: 1, levelReq: 5,
    equipSlot: 'weapon', stats: { atk: 12 },
  },
  steel_sword: {
    id: 'steel_sword', name: '鋼劍', type: 'weapon',
    description: '鋼鐵鍛造的精良長劍。', buyPrice: 500, sellPrice: 250,
    stackable: false, maxStack: 1, levelReq: 10,
    classReq: ['swordsman', 'knight', 'berserker', 'sword_saint'],
    equipSlot: 'weapon', stats: { atk: 22 },
  },
  flame_sword: {
    id: 'flame_sword', name: '炎之劍', type: 'weapon',
    description: '附著火焰的魔法劍。', buyPrice: 1500, sellPrice: 750,
    stackable: false, maxStack: 1, levelReq: 20,
    classReq: ['swordsman', 'knight', 'berserker', 'sword_saint'],
    equipSlot: 'weapon', stats: { atk: 35, matk: 10 }, element: 'fire',
  },
  apprentice_staff: {
    id: 'apprentice_staff', name: '學徒法杖', type: 'weapon',
    description: '初學者使用的基礎法杖。', buyPrice: 50, sellPrice: 25,
    stackable: false, maxStack: 1, levelReq: 1,
    equipSlot: 'weapon', stats: { matk: 8 },
  },
  oak_staff: {
    id: 'oak_staff', name: '橡木法杖', type: 'weapon',
    description: '橡木製成的法杖，魔力導引效果不錯。', buyPrice: 300, sellPrice: 150,
    stackable: false, maxStack: 1, levelReq: 10,
    classReq: ['mage', 'archmage', 'warlock', 'chronomancer'],
    equipSlot: 'weapon', stats: { matk: 20, mp: 20 },
  },
  crystal_staff: {
    id: 'crystal_staff', name: '水晶法杖', type: 'weapon',
    description: '鑲嵌水晶的高級法杖。', buyPrice: 1200, sellPrice: 600,
    stackable: false, maxStack: 1, levelReq: 20,
    classReq: ['mage', 'archmage', 'warlock', 'chronomancer'],
    equipSlot: 'weapon', stats: { matk: 35, mp: 40, int: 3 },
  },
  short_bow: {
    id: 'short_bow', name: '短弓', type: 'weapon',
    description: '輕便的短弓。', buyPrice: 50, sellPrice: 25,
    stackable: false, maxStack: 1, levelReq: 1,
    equipSlot: 'weapon', stats: { atk: 6, dex: 1 },
  },
  long_bow: {
    id: 'long_bow', name: '長弓', type: 'weapon',
    description: '射程更遠的長弓。', buyPrice: 350, sellPrice: 175,
    stackable: false, maxStack: 1, levelReq: 10,
    classReq: ['ranger', 'marksman', 'assassin', 'beast_master'],
    equipSlot: 'weapon', stats: { atk: 18, dex: 3 },
  },
  composite_bow: {
    id: 'composite_bow', name: '複合弓', type: 'weapon',
    description: '多種材料製成的精良弓。', buyPrice: 1200, sellPrice: 600,
    stackable: false, maxStack: 1, levelReq: 20,
    classReq: ['ranger', 'marksman', 'assassin', 'beast_master'],
    equipSlot: 'weapon', stats: { atk: 30, dex: 5, critRate: 3 },
  },
  wooden_wand: {
    id: 'wooden_wand', name: '木製權杖', type: 'weapon',
    description: '祈禱用的簡易權杖。', buyPrice: 50, sellPrice: 25,
    stackable: false, maxStack: 1, levelReq: 1,
    equipSlot: 'weapon', stats: { matk: 5, mp: 10 },
  },
  holy_scepter: {
    id: 'holy_scepter', name: '聖光權杖', type: 'weapon',
    description: '蘊含聖光的權杖。', buyPrice: 400, sellPrice: 200,
    stackable: false, maxStack: 1, levelReq: 10,
    classReq: ['priest', 'high_priest', 'druid', 'inquisitor'],
    equipSlot: 'weapon', stats: { matk: 18, mp: 30, int: 2 },
  },
  divine_scepter: {
    id: 'divine_scepter', name: '神聖權杖', type: 'weapon',
    description: '受到神明祝福的權杖。', buyPrice: 1500, sellPrice: 750,
    stackable: false, maxStack: 1, levelReq: 20,
    classReq: ['priest', 'high_priest', 'druid', 'inquisitor'],
    equipSlot: 'weapon', stats: { matk: 32, mp: 50, int: 4, vit: 2 },
  },

  // ============ 防具 - 頭部 ============
  leather_cap: {
    id: 'leather_cap', name: '皮帽', type: 'armor',
    description: '基礎的皮革帽子。', buyPrice: 30, sellPrice: 15,
    stackable: false, maxStack: 1, levelReq: 1,
    equipSlot: 'head', stats: { def: 2 },
  },
  iron_helm: {
    id: 'iron_helm', name: '鐵盔', type: 'armor',
    description: '鐵製頭盔，提供不錯的防護。', buyPrice: 200, sellPrice: 100,
    stackable: false, maxStack: 1, levelReq: 10,
    equipSlot: 'head', stats: { def: 6, hp: 20 },
  },
  mage_hat: {
    id: 'mage_hat', name: '法師帽', type: 'armor',
    description: '增幅魔力的尖帽。', buyPrice: 200, sellPrice: 100,
    stackable: false, maxStack: 1, levelReq: 10,
    equipSlot: 'head', stats: { mdef: 5, mp: 25 },
  },

  // ============ 防具 - 身體 ============
  cloth_armor: {
    id: 'cloth_armor', name: '布甲', type: 'armor',
    description: '基本的布質護甲。', buyPrice: 40, sellPrice: 20,
    stackable: false, maxStack: 1, levelReq: 1,
    equipSlot: 'body', stats: { def: 3 },
  },
  leather_armor: {
    id: 'leather_armor', name: '皮甲', type: 'armor',
    description: '柔韌的皮革護甲。', buyPrice: 150, sellPrice: 75,
    stackable: false, maxStack: 1, levelReq: 5,
    equipSlot: 'body', stats: { def: 6, dodgeRate: 1 },
  },
  chain_mail: {
    id: 'chain_mail', name: '鎖子甲', type: 'armor',
    description: '鎖鏈編織的護甲。', buyPrice: 400, sellPrice: 200,
    stackable: false, maxStack: 1, levelReq: 10,
    equipSlot: 'body', stats: { def: 12, hp: 30 },
  },
  plate_armor: {
    id: 'plate_armor', name: '板甲', type: 'armor',
    description: '厚重的鋼鐵板甲。', buyPrice: 1000, sellPrice: 500,
    stackable: false, maxStack: 1, levelReq: 20,
    classReq: ['swordsman', 'knight', 'berserker', 'sword_saint'],
    equipSlot: 'body', stats: { def: 25, hp: 80, mdef: 5 },
  },
  mage_robe: {
    id: 'mage_robe', name: '法師長袍', type: 'armor',
    description: '織入魔力的長袍。', buyPrice: 400, sellPrice: 200,
    stackable: false, maxStack: 1, levelReq: 10,
    equipSlot: 'body', stats: { mdef: 8, mp: 40, int: 2 },
  },

  // ============ 防具 - 手部 ============
  leather_gloves: {
    id: 'leather_gloves', name: '皮手套', type: 'armor',
    description: '基礎皮手套。', buyPrice: 25, sellPrice: 12,
    stackable: false, maxStack: 1, levelReq: 1,
    equipSlot: 'hands', stats: { def: 1, atk: 1 },
  },
  iron_gauntlets: {
    id: 'iron_gauntlets', name: '鐵護手', type: 'armor',
    description: '鐵製護手。', buyPrice: 180, sellPrice: 90,
    stackable: false, maxStack: 1, levelReq: 10,
    equipSlot: 'hands', stats: { def: 4, atk: 3 },
  },

  // ============ 防具 - 腳部 ============
  leather_boots: {
    id: 'leather_boots', name: '皮靴', type: 'armor',
    description: '基礎皮靴。', buyPrice: 25, sellPrice: 12,
    stackable: false, maxStack: 1, levelReq: 1,
    equipSlot: 'feet', stats: { def: 1, dodgeRate: 1 },
  },
  iron_boots: {
    id: 'iron_boots', name: '鐵靴', type: 'armor',
    description: '沉重但堅固的鐵靴。', buyPrice: 180, sellPrice: 90,
    stackable: false, maxStack: 1, levelReq: 10,
    equipSlot: 'feet', stats: { def: 4, hp: 15 },
  },
  swift_boots: {
    id: 'swift_boots', name: '疾風靴', type: 'armor',
    description: '輕巧的靴子，增加敏捷。', buyPrice: 300, sellPrice: 150,
    stackable: false, maxStack: 1, levelReq: 15,
    equipSlot: 'feet', stats: { def: 2, dex: 3, dodgeRate: 3 },
  },

  // ============ 飾品 ============
  wooden_ring: {
    id: 'wooden_ring', name: '木戒指', type: 'accessory',
    description: '簡單的木製戒指。', buyPrice: 20, sellPrice: 10,
    stackable: false, maxStack: 1, levelReq: 1,
    equipSlot: 'accessory', stats: { luk: 1 },
  },
  lucky_charm: {
    id: 'lucky_charm', name: '幸運護符', type: 'accessory',
    description: '傳說能帶來好運的護符。', buyPrice: 500, sellPrice: 250,
    stackable: false, maxStack: 1, levelReq: 10,
    equipSlot: 'accessory', stats: { luk: 5, critRate: 2 },
  },
  power_amulet: {
    id: 'power_amulet', name: '力量護身符', type: 'accessory',
    description: '蘊含力量的護身符。', buyPrice: 500, sellPrice: 250,
    stackable: false, maxStack: 1, levelReq: 10,
    equipSlot: 'accessory', stats: { str: 3, atk: 5 },
  },
  wisdom_amulet: {
    id: 'wisdom_amulet', name: '智慧護身符', type: 'accessory',
    description: '增幅智力的護身符。', buyPrice: 500, sellPrice: 250,
    stackable: false, maxStack: 1, levelReq: 10,
    equipSlot: 'accessory', stats: { int: 3, mp: 20 },
  },

  // ============ 消耗品 ============
  small_hp_potion: {
    id: 'small_hp_potion', name: '小型生命藥水', type: 'consumable',
    description: '回復少量HP。', buyPrice: 20, sellPrice: 10,
    stackable: true, maxStack: 99, levelReq: 1,
    useEffect: { type: 'heal_hp', value: 50 },
  },
  medium_hp_potion: {
    id: 'medium_hp_potion', name: '中型生命藥水', type: 'consumable',
    description: '回復中量HP。', buyPrice: 60, sellPrice: 30,
    stackable: true, maxStack: 99, levelReq: 5,
    useEffect: { type: 'heal_hp', value: 150 },
  },
  large_hp_potion: {
    id: 'large_hp_potion', name: '大型生命藥水', type: 'consumable',
    description: '回復大量HP。', buyPrice: 150, sellPrice: 75,
    stackable: true, maxStack: 99, levelReq: 15,
    useEffect: { type: 'heal_hp', value: 400 },
  },
  small_mp_potion: {
    id: 'small_mp_potion', name: '小型資源藥水', type: 'consumable',
    description: '回復少量資源（MP/體力/信仰）。', buyPrice: 25, sellPrice: 12,
    stackable: true, maxStack: 99, levelReq: 1,
    useEffect: { type: 'heal_mp', value: 30 },
  },
  medium_mp_potion: {
    id: 'medium_mp_potion', name: '中型資源藥水', type: 'consumable',
    description: '回復中量資源（MP/體力/信仰）。', buyPrice: 75, sellPrice: 37,
    stackable: true, maxStack: 99, levelReq: 5,
    useEffect: { type: 'heal_mp', value: 80 },
  },
  large_mp_potion: {
    id: 'large_mp_potion', name: '大型資源藥水', type: 'consumable',
    description: '回復大量資源（MP/體力/信仰）。', buyPrice: 180, sellPrice: 90,
    stackable: true, maxStack: 99, levelReq: 15,
    useEffect: { type: 'heal_mp', value: 200 },
  },
  antidote: {
    id: 'antidote', name: '解毒劑', type: 'consumable',
    description: '解除中毒狀態。', buyPrice: 15, sellPrice: 7,
    stackable: true, maxStack: 99, levelReq: 1,
    useEffect: { type: 'buff', value: 0, duration: 0 },
  },
  phoenix_feather: {
    id: 'phoenix_feather', name: '鳳凰之羽', type: 'consumable',
    description: '死亡時自動復活並回復30%HP（Premium道具）。', buyPrice: 0, sellPrice: 0,
    stackable: true, maxStack: 10, levelReq: 1,
    useEffect: { type: 'heal_hp', value: 30 },
  },

  // ============ 素材 ============
  slime_jelly: {
    id: 'slime_jelly', name: '史萊姆凝膠', type: 'material',
    description: '從史萊姆身上取得的黏稠凝膠。', buyPrice: 0, sellPrice: 5,
    stackable: true, maxStack: 99, levelReq: 1,
  },
  wolf_pelt: {
    id: 'wolf_pelt', name: '狼皮', type: 'material',
    description: '品質不錯的狼皮。', buyPrice: 0, sellPrice: 15,
    stackable: true, maxStack: 99, levelReq: 1,
  },
  goblin_ear: {
    id: 'goblin_ear', name: '哥布林耳朵', type: 'material',
    description: '作為討伐證明的哥布林耳朵。', buyPrice: 0, sellPrice: 10,
    stackable: true, maxStack: 99, levelReq: 1,
  },
  bat_wing: {
    id: 'bat_wing', name: '蝙蝠翅膀', type: 'material',
    description: '乾燥的蝙蝠翅膀，煉金術材料。', buyPrice: 0, sellPrice: 12,
    stackable: true, maxStack: 99, levelReq: 1,
  },
  crystal_shard: {
    id: 'crystal_shard', name: '水晶碎片', type: 'material',
    description: '閃爍著微光的水晶碎片。', buyPrice: 0, sellPrice: 30,
    stackable: true, maxStack: 99, levelReq: 1,
  },
  shadow_essence: {
    id: 'shadow_essence', name: '暗影精華', type: 'material',
    description: '凝聚的暗影能量。', buyPrice: 0, sellPrice: 25,
    stackable: true, maxStack: 99, levelReq: 1,
  },
  herb: {
    id: 'herb', name: '藥草', type: 'material',
    description: '常見的野生藥草，可以製作藥水。', buyPrice: 5, sellPrice: 2,
    stackable: true, maxStack: 99, levelReq: 1,
  },

  // ============ 任務道具 ============
  class_change_scroll_swordsman: {
    id: 'class_change_scroll_swordsman', name: '劍士轉職卷軸', type: 'quest',
    description: '完成劍士轉職任務的證明。', buyPrice: 0, sellPrice: 0,
    stackable: false, maxStack: 1, levelReq: 10,
  },
  class_change_scroll_mage: {
    id: 'class_change_scroll_mage', name: '法師轉職卷軸', type: 'quest',
    description: '完成法師轉職任務的證明。', buyPrice: 0, sellPrice: 0,
    stackable: false, maxStack: 1, levelReq: 10,
  },
  class_change_scroll_ranger: {
    id: 'class_change_scroll_ranger', name: '遊俠轉職卷軸', type: 'quest',
    description: '完成遊俠轉職任務的證明。', buyPrice: 0, sellPrice: 0,
    stackable: false, maxStack: 1, levelReq: 10,
  },
  class_change_scroll_priest: {
    id: 'class_change_scroll_priest', name: '祭司轉職卷軸', type: 'quest',
    description: '完成祭司轉職任務的證明。', buyPrice: 0, sellPrice: 0,
    stackable: false, maxStack: 1, levelReq: 10,
  },

  // ============ Lv 25-30 高級裝備 ============
  flame_blade: {
    id: 'flame_blade', name: '炎之刃', type: 'weapon',
    description: '燃燒著永恆火焰的劍，灼熱無比。', buyPrice: 3000, sellPrice: 1000,
    stackable: false, maxStack: 1, levelReq: 25,
    classReq: ['swordsman', 'knight', 'berserker', 'sword_saint'],
    equipSlot: 'weapon', stats: { atk: 55, str: 5 }, element: 'fire',
  },
  storm_staff: {
    id: 'storm_staff', name: '風暴法杖', type: 'weapon',
    description: '凝聚風暴之力的法杖，雷電環繞杖身。', buyPrice: 3200, sellPrice: 1060,
    stackable: false, maxStack: 1, levelReq: 25,
    classReq: ['mage', 'archmage', 'warlock', 'chronomancer'],
    equipSlot: 'weapon', stats: { matk: 60, int: 6, mp: 30 }, element: 'lightning',
  },
  shadow_bow: {
    id: 'shadow_bow', name: '暗影弓', type: 'weapon',
    description: '以暗影材質打造的弓，箭矢無聲無息。', buyPrice: 2900, sellPrice: 960,
    stackable: false, maxStack: 1, levelReq: 25,
    classReq: ['ranger', 'marksman', 'assassin', 'beast_master'],
    equipSlot: 'weapon', stats: { atk: 45, dex: 8, critRate: 5 }, element: 'dark',
  },
  radiant_scepter: {
    id: 'radiant_scepter', name: '光輝權杖', type: 'weapon',
    description: '散發聖潔光芒的權杖，治療效果大幅提升。', buyPrice: 3300, sellPrice: 1100,
    stackable: false, maxStack: 1, levelReq: 25,
    classReq: ['priest', 'high_priest', 'druid', 'inquisitor'],
    equipSlot: 'weapon', stats: { matk: 50, int: 6, vit: 4, mp: 40 }, element: 'light',
  },
  guardian_plate: {
    id: 'guardian_plate', name: '守護者板甲', type: 'armor',
    description: '守護者之鎧，為保護同伴而鍛造。', buyPrice: 2800, sellPrice: 930,
    stackable: false, maxStack: 1, levelReq: 25,
    classReq: ['swordsman', 'knight', 'berserker', 'sword_saint'],
    equipSlot: 'body', stats: { def: 35, vit: 5, hp: 80 },
  },
  archmage_robe: {
    id: 'archmage_robe', name: '大法師長袍', type: 'armor',
    description: '纏繞魔法符文的高級法袍，魔力場強大。', buyPrice: 2700, sellPrice: 900,
    stackable: false, maxStack: 1, levelReq: 25,
    equipSlot: 'body', stats: { mdef: 20, int: 6, mp: 60 },
  },
  wind_runner_armor: {
    id: 'wind_runner_armor', name: '疾風者輕甲', type: 'armor',
    description: '以風精靈之羽編織的輕甲，輕若無物。', buyPrice: 2600, sellPrice: 860,
    stackable: false, maxStack: 1, levelReq: 25,
    classReq: ['ranger', 'marksman', 'assassin', 'beast_master'],
    equipSlot: 'body', stats: { def: 20, dex: 7, dodgeRate: 5 },
  },
  mithril_helm: {
    id: 'mithril_helm', name: '秘銀頭盔', type: 'armor',
    description: '以稀有秘銀鍛造的頭盔，輕便且堅固。', buyPrice: 1500, sellPrice: 500,
    stackable: false, maxStack: 1, levelReq: 25,
    equipSlot: 'head', stats: { def: 14, mdef: 8, vit: 3 },
  },
  mithril_gauntlets: {
    id: 'mithril_gauntlets', name: '秘銀護手', type: 'armor',
    description: '秘銀打造的護手，靈活且堅固。', buyPrice: 1200, sellPrice: 400,
    stackable: false, maxStack: 1, levelReq: 25,
    equipSlot: 'hands', stats: { def: 10, str: 3, dex: 2 },
  },
  mithril_greaves: {
    id: 'mithril_greaves', name: '秘銀脛甲', type: 'armor',
    description: '秘銀打造的護腿，行動自如。', buyPrice: 1300, sellPrice: 430,
    stackable: false, maxStack: 1, levelReq: 25,
    equipSlot: 'feet', stats: { def: 12, vit: 3, dex: 2 },
  },
  warriors_pendant: {
    id: 'warriors_pendant', name: '戰士之墜', type: 'accessory',
    description: '刻有古老戰紋的墜飾，激發戰鬥本能。', buyPrice: 800, sellPrice: 260,
    stackable: false, maxStack: 1, levelReq: 20,
    equipSlot: 'accessory', stats: { str: 4, vit: 3, atk: 5 },
  },
  mage_earring: {
    id: 'mage_earring', name: '魔導耳環', type: 'accessory',
    description: '增幅魔力的神秘耳環。', buyPrice: 800, sellPrice: 260,
    stackable: false, maxStack: 1, levelReq: 20,
    equipSlot: 'accessory', stats: { int: 5, mp: 20, matk: 5 },
  },
};

/** 新手初始裝備（創建角色時給予） */
export const STARTER_ITEMS = [
  { itemId: 'wooden_sword', quantity: 1, equipped: true },
  { itemId: 'cloth_armor', quantity: 1, equipped: true },
  { itemId: 'small_hp_potion', quantity: 5, equipped: false },
  { itemId: 'small_mp_potion', quantity: 3, equipped: false },
];

/** NPC 商店：新手村雜貨店 */
export const SHOP_STARTER_VILLAGE = [
  'small_hp_potion', 'small_mp_potion', 'antidote',
  'iron_sword', 'oak_staff', 'short_bow', 'wooden_wand',
  'leather_armor', 'leather_cap', 'leather_gloves', 'leather_boots',
  'wooden_ring',
];

/** NPC 商店：城鎮武器店 */
export const SHOP_TOWN_WEAPONS = [
  'steel_sword', 'oak_staff', 'long_bow', 'holy_scepter',
  'crystal_staff', 'composite_bow', 'divine_scepter',
  'flame_blade', 'storm_staff', 'shadow_bow', 'radiant_scepter',
];

/** NPC 商店：城鎮護甲店 */
export const SHOP_TOWN_ARMOR = [
  'chain_mail', 'mage_robe', 'iron_helm', 'iron_gauntlets', 'iron_boots',
  'plate_armor', 'mage_hat', 'swift_boots',
  'guardian_plate', 'archmage_robe', 'wind_runner_armor',
  'mithril_helm', 'mithril_gauntlets', 'mithril_greaves',
  'lucky_charm', 'power_amulet', 'wisdom_amulet', 'warriors_pendant', 'mage_earring',
];

/** NPC 商店：城鎮藥水店 */
export const SHOP_TOWN_POTIONS = [
  'small_hp_potion', 'medium_hp_potion', 'large_hp_potion',
  'small_mp_potion', 'medium_mp_potion', 'large_mp_potion',
  'antidote',
];

/** 根據 ID 取得物品定義 */
export function getItemDef(itemId: string): ItemDef | undefined {
  return ITEM_DEFS[itemId];
}

/** 取得指定等級範圍的裝備 */
export function getEquipmentForLevel(minLevel: number, maxLevel: number): ItemDef[] {
  return Object.values(ITEM_DEFS).filter(
    (item) =>
      (item.type === 'weapon' || item.type === 'armor' || item.type === 'accessory') &&
      item.levelReq >= minLevel &&
      item.levelReq <= maxLevel,
  );
}
