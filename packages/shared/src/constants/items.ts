// 物品資料

import type { ItemDef, ItemRarity } from '../types/item.js';

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

  // ============ 長槍 (Spear) - 劍士/騎士 ============
  spear_basic: {
    id: 'spear_basic', name: '木槍', type: 'weapon',
    description: '簡樸的木製長槍，新手訓練用。', buyPrice: 60, sellPrice: 30,
    stackable: false, maxStack: 1, levelReq: 1,
    equipSlot: 'weapon', stats: { atk: 6 },
    rarity: 'common', weaponType: 'spear',
  },
  spear_iron: {
    id: 'spear_iron', name: '鐵槍', type: 'weapon',
    description: '鐵製槍頭的長槍，穿刺力不俗。', buyPrice: 300, sellPrice: 150,
    stackable: false, maxStack: 1, levelReq: 10,
    classReq: ['swordsman', 'knight'],
    equipSlot: 'weapon', stats: { atk: 15 },
    rarity: 'uncommon', weaponType: 'spear',
  },
  spear_steel: {
    id: 'spear_steel', name: '鋼槍', type: 'weapon',
    description: '精鋼鍛造的長槍，銳不可當。', buyPrice: 800, sellPrice: 400,
    stackable: false, maxStack: 1, levelReq: 20,
    classReq: ['swordsman', 'knight'],
    equipSlot: 'weapon', stats: { atk: 25, dex: 2 },
    rarity: 'rare', weaponType: 'spear',
  },
  spear_mithril: {
    id: 'spear_mithril', name: '秘銀槍', type: 'weapon',
    description: '秘銀打造的長槍，輕盈而致命。', buyPrice: 2500, sellPrice: 1250,
    stackable: false, maxStack: 1, levelReq: 30,
    classReq: ['swordsman', 'knight'],
    equipSlot: 'weapon', stats: { atk: 38, dex: 4, str: 3 },
    rarity: 'epic', weaponType: 'spear', setId: 'sword_saint_set',
  },
  spear_dragon: {
    id: 'spear_dragon', name: '龍牙槍', type: 'weapon',
    description: '以龍牙為槍尖的傳說長槍，貫穿萬物。', buyPrice: 6000, sellPrice: 3000,
    stackable: false, maxStack: 1, levelReq: 40,
    classReq: ['swordsman', 'knight'],
    equipSlot: 'weapon', stats: { atk: 55, dex: 6, str: 5 },
    rarity: 'legendary', weaponType: 'spear', setId: 'sword_saint_set',
  },

  // ============ 巨斧 (Greataxe) - 狂戰士/劍聖 ============
  greataxe_basic: {
    id: 'greataxe_basic', name: '木柄斧', type: 'weapon',
    description: '粗糙的木柄大斧，沉重但威力不小。', buyPrice: 65, sellPrice: 32,
    stackable: false, maxStack: 1, levelReq: 1,
    equipSlot: 'weapon', stats: { atk: 8 },
    rarity: 'common', weaponType: 'greataxe',
  },
  greataxe_iron: {
    id: 'greataxe_iron', name: '鐵巨斧', type: 'weapon',
    description: '鐵製巨斧，一斧劈裂大地。', buyPrice: 320, sellPrice: 160,
    stackable: false, maxStack: 1, levelReq: 10,
    classReq: ['berserker', 'sword_saint'],
    equipSlot: 'weapon', stats: { atk: 18 },
    rarity: 'uncommon', weaponType: 'greataxe',
  },
  greataxe_steel: {
    id: 'greataxe_steel', name: '鋼巨斧', type: 'weapon',
    description: '精鋼鍛造的巨斧，破甲之力驚人。', buyPrice: 850, sellPrice: 425,
    stackable: false, maxStack: 1, levelReq: 20,
    classReq: ['berserker', 'sword_saint'],
    equipSlot: 'weapon', stats: { atk: 30, str: 3 },
    rarity: 'rare', weaponType: 'greataxe',
  },
  greataxe_mithril: {
    id: 'greataxe_mithril', name: '秘銀巨斧', type: 'weapon',
    description: '秘銀打造的巨斧，揮舞如風。', buyPrice: 2600, sellPrice: 1300,
    stackable: false, maxStack: 1, levelReq: 30,
    classReq: ['berserker', 'sword_saint'],
    equipSlot: 'weapon', stats: { atk: 45, str: 6 },
    rarity: 'epic', weaponType: 'greataxe', setId: 'sword_saint_set',
  },
  greataxe_dragon: {
    id: 'greataxe_dragon', name: '屠龍巨斧', type: 'weapon',
    description: '傳說中斬殺巨龍的神器巨斧。', buyPrice: 6500, sellPrice: 3250,
    stackable: false, maxStack: 1, levelReq: 40,
    classReq: ['berserker', 'sword_saint'],
    equipSlot: 'weapon', stats: { atk: 65, str: 8, critRate: 3 },
    rarity: 'legendary', weaponType: 'greataxe', setId: 'sword_saint_set',
  },

  // ============ 太刀 (Katana) - 劍士/劍聖 ============
  katana_basic: {
    id: 'katana_basic', name: '竹刀', type: 'weapon',
    description: '竹製練習刀，居合入門之器。', buyPrice: 55, sellPrice: 27,
    stackable: false, maxStack: 1, levelReq: 1,
    equipSlot: 'weapon', stats: { atk: 5, dex: 1 },
    rarity: 'common', weaponType: 'katana',
  },
  katana_iron: {
    id: 'katana_iron', name: '鐵太刀', type: 'weapon',
    description: '鐵製太刀，斬擊迅捷。', buyPrice: 310, sellPrice: 155,
    stackable: false, maxStack: 1, levelReq: 10,
    classReq: ['swordsman', 'sword_saint'],
    equipSlot: 'weapon', stats: { atk: 14, dex: 2 },
    rarity: 'uncommon', weaponType: 'katana',
  },
  katana_steel: {
    id: 'katana_steel', name: '鋼太刀', type: 'weapon',
    description: '精鋼鍛造的太刀，刀氣如虹。', buyPrice: 820, sellPrice: 410,
    stackable: false, maxStack: 1, levelReq: 20,
    classReq: ['swordsman', 'sword_saint'],
    equipSlot: 'weapon', stats: { atk: 24, dex: 4, critRate: 2 },
    rarity: 'rare', weaponType: 'katana',
  },
  katana_mithril: {
    id: 'katana_mithril', name: '秘銀太刀', type: 'weapon',
    description: '秘銀打造的太刀，出鞘即斬。', buyPrice: 2400, sellPrice: 1200,
    stackable: false, maxStack: 1, levelReq: 30,
    classReq: ['swordsman', 'sword_saint'],
    equipSlot: 'weapon', stats: { atk: 36, dex: 6, critRate: 4 },
    rarity: 'epic', weaponType: 'katana', setId: 'sword_saint_set',
  },
  katana_dragon: {
    id: 'katana_dragon', name: '龍紋太刀', type: 'weapon',
    description: '刻有龍紋的傳說太刀，一閃千刀。', buyPrice: 5800, sellPrice: 2900,
    stackable: false, maxStack: 1, levelReq: 40,
    classReq: ['swordsman', 'sword_saint'],
    equipSlot: 'weapon', stats: { atk: 52, dex: 8, critRate: 6 },
    rarity: 'legendary', weaponType: 'katana', setId: 'sword_saint_set',
  },

  // ============ 元素杖 (Elemental Staff) - 法師/大法師 ============
  elestaff_basic: {
    id: 'elestaff_basic', name: '元素樹枝', type: 'weapon',
    description: '蘊含微弱元素力量的樹枝。', buyPrice: 55, sellPrice: 27,
    stackable: false, maxStack: 1, levelReq: 1,
    equipSlot: 'weapon', stats: { matk: 7, mp: 5 },
    rarity: 'common', weaponType: 'elemental_staff',
  },
  elestaff_iron: {
    id: 'elestaff_iron', name: '元素鐵杖', type: 'weapon',
    description: '以元素水晶強化的鐵杖。', buyPrice: 300, sellPrice: 150,
    stackable: false, maxStack: 1, levelReq: 10,
    classReq: ['mage', 'archmage'],
    equipSlot: 'weapon', stats: { matk: 16, mp: 15 },
    rarity: 'uncommon', weaponType: 'elemental_staff',
  },
  elestaff_crystal: {
    id: 'elestaff_crystal', name: '元素水晶杖', type: 'weapon',
    description: '鑲嵌多種元素水晶的法杖，威力強大。', buyPrice: 850, sellPrice: 425,
    stackable: false, maxStack: 1, levelReq: 20,
    classReq: ['mage', 'archmage'],
    equipSlot: 'weapon', stats: { matk: 28, mp: 25, int: 3 },
    rarity: 'rare', weaponType: 'elemental_staff',
  },
  elestaff_mithril: {
    id: 'elestaff_mithril', name: '秘銀元素杖', type: 'weapon',
    description: '秘銀與元素核心融合的法杖。', buyPrice: 2500, sellPrice: 1250,
    stackable: false, maxStack: 1, levelReq: 30,
    classReq: ['mage', 'archmage'],
    equipSlot: 'weapon', stats: { matk: 42, mp: 40, int: 5 },
    rarity: 'epic', weaponType: 'elemental_staff', setId: 'archmage_set',
  },
  elestaff_dragon: {
    id: 'elestaff_dragon', name: '龍息元素杖', type: 'weapon',
    description: '注入龍之元素的至高法杖，毀天滅地。', buyPrice: 6200, sellPrice: 3100,
    stackable: false, maxStack: 1, levelReq: 40,
    classReq: ['mage', 'archmage'],
    equipSlot: 'weapon', stats: { matk: 60, mp: 60, int: 8 },
    rarity: 'legendary', weaponType: 'elemental_staff', setId: 'archmage_set',
  },

  // ============ 魔典 (Grimoire) - 暗黑術士 ============
  grimoire_basic: {
    id: 'grimoire_basic', name: '破舊魔典', type: 'weapon',
    description: '字跡模糊的舊魔典，仍殘留暗黑力量。', buyPrice: 60, sellPrice: 30,
    stackable: false, maxStack: 1, levelReq: 1,
    equipSlot: 'weapon', stats: { matk: 6, int: 1 },
    rarity: 'common', weaponType: 'grimoire',
  },
  grimoire_iron: {
    id: 'grimoire_iron', name: '鐵封魔典', type: 'weapon',
    description: '鐵皮封裝的魔典，記載暗黑咒語。', buyPrice: 310, sellPrice: 155,
    stackable: false, maxStack: 1, levelReq: 10,
    classReq: ['warlock'],
    equipSlot: 'weapon', stats: { matk: 14, int: 3 },
    rarity: 'uncommon', weaponType: 'grimoire',
  },
  grimoire_crystal: {
    id: 'grimoire_crystal', name: '水晶魔典', type: 'weapon',
    description: '暗色水晶裝飾的魔典，蘊含深淵之力。', buyPrice: 830, sellPrice: 415,
    stackable: false, maxStack: 1, levelReq: 20,
    classReq: ['warlock'],
    equipSlot: 'weapon', stats: { matk: 26, int: 5, mp: 20 },
    rarity: 'rare', weaponType: 'grimoire',
  },
  grimoire_mithril: {
    id: 'grimoire_mithril', name: '秘銀魔典', type: 'weapon',
    description: '秘銀書頁的禁忌魔典，暗影纏身。', buyPrice: 2400, sellPrice: 1200,
    stackable: false, maxStack: 1, levelReq: 30,
    classReq: ['warlock'],
    equipSlot: 'weapon', stats: { matk: 40, int: 7, mp: 35 },
    rarity: 'epic', weaponType: 'grimoire', setId: 'archmage_set',
  },
  grimoire_dragon: {
    id: 'grimoire_dragon', name: '龍血魔典', type: 'weapon',
    description: '以龍血書寫的魔典，召喚深淵之力。', buyPrice: 6000, sellPrice: 3000,
    stackable: false, maxStack: 1, levelReq: 40,
    classReq: ['warlock'],
    equipSlot: 'weapon', stats: { matk: 58, int: 10, mp: 50 },
    rarity: 'legendary', weaponType: 'grimoire', setId: 'archmage_set',
  },

  // ============ 沙漏杖 (Hourglass Staff) - 時空術士 ============
  hourglass_basic: {
    id: 'hourglass_basic', name: '沙漏枝杖', type: 'weapon',
    description: '頂端鑲嵌小沙漏的樹枝，時光微動。', buyPrice: 55, sellPrice: 27,
    stackable: false, maxStack: 1, levelReq: 1,
    equipSlot: 'weapon', stats: { matk: 5, dex: 1, mp: 5 },
    rarity: 'common', weaponType: 'hourglass_staff',
  },
  hourglass_iron: {
    id: 'hourglass_iron', name: '鐵沙漏杖', type: 'weapon',
    description: '鐵製框架的沙漏杖，時間流速可控。', buyPrice: 300, sellPrice: 150,
    stackable: false, maxStack: 1, levelReq: 10,
    classReq: ['chronomancer'],
    equipSlot: 'weapon', stats: { matk: 13, dex: 2, mp: 15 },
    rarity: 'uncommon', weaponType: 'hourglass_staff',
  },
  hourglass_crystal: {
    id: 'hourglass_crystal', name: '水晶沙漏杖', type: 'weapon',
    description: '水晶沙漏散發時光之力。', buyPrice: 820, sellPrice: 410,
    stackable: false, maxStack: 1, levelReq: 20,
    classReq: ['chronomancer'],
    equipSlot: 'weapon', stats: { matk: 24, dex: 4, int: 3, mp: 25 },
    rarity: 'rare', weaponType: 'hourglass_staff',
  },
  hourglass_mithril: {
    id: 'hourglass_mithril', name: '秘銀沙漏杖', type: 'weapon',
    description: '秘銀沙漏杖，掌控時間長河。', buyPrice: 2500, sellPrice: 1250,
    stackable: false, maxStack: 1, levelReq: 30,
    classReq: ['chronomancer'],
    equipSlot: 'weapon', stats: { matk: 38, dex: 6, int: 5, mp: 40 },
    rarity: 'epic', weaponType: 'hourglass_staff', setId: 'archmage_set',
  },
  hourglass_dragon: {
    id: 'hourglass_dragon', name: '龍時沙漏杖', type: 'weapon',
    description: '封印龍之時間的傳說沙漏杖，可逆轉因果。', buyPrice: 6000, sellPrice: 3000,
    stackable: false, maxStack: 1, levelReq: 40,
    classReq: ['chronomancer'],
    equipSlot: 'weapon', stats: { matk: 55, dex: 8, int: 7, mp: 60 },
    rarity: 'legendary', weaponType: 'hourglass_staff', setId: 'archmage_set',
  },

  // ============ 十字弓 (Crossbow) - 遊俠/神射手 ============
  crossbow_basic: {
    id: 'crossbow_basic', name: '簡易十字弓', type: 'weapon',
    description: '簡易的十字弓，射程有限。', buyPrice: 60, sellPrice: 30,
    stackable: false, maxStack: 1, levelReq: 1,
    equipSlot: 'weapon', stats: { atk: 7, dex: 1 },
    rarity: 'common', weaponType: 'crossbow',
  },
  crossbow_iron: {
    id: 'crossbow_iron', name: '鐵十字弓', type: 'weapon',
    description: '鐵製十字弓，穿透力強。', buyPrice: 320, sellPrice: 160,
    stackable: false, maxStack: 1, levelReq: 10,
    classReq: ['ranger', 'marksman'],
    equipSlot: 'weapon', stats: { atk: 16, dex: 3 },
    rarity: 'uncommon', weaponType: 'crossbow',
  },
  crossbow_steel: {
    id: 'crossbow_steel', name: '鋼十字弓', type: 'weapon',
    description: '精鋼打造的十字弓，精準致命。', buyPrice: 840, sellPrice: 420,
    stackable: false, maxStack: 1, levelReq: 20,
    classReq: ['ranger', 'marksman'],
    equipSlot: 'weapon', stats: { atk: 26, dex: 5, critRate: 3 },
    rarity: 'rare', weaponType: 'crossbow',
  },
  crossbow_mithril: {
    id: 'crossbow_mithril', name: '秘銀十字弓', type: 'weapon',
    description: '秘銀製十字弓，箭矢疾如閃電。', buyPrice: 2500, sellPrice: 1250,
    stackable: false, maxStack: 1, levelReq: 30,
    classReq: ['ranger', 'marksman'],
    equipSlot: 'weapon', stats: { atk: 40, dex: 7, critRate: 5 },
    rarity: 'epic', weaponType: 'crossbow', setId: 'shadow_hunter_set',
  },
  crossbow_dragon: {
    id: 'crossbow_dragon', name: '龍牙十字弓', type: 'weapon',
    description: '龍牙為弦的傳說十字弓，一箭貫穿蒼穹。', buyPrice: 6200, sellPrice: 3100,
    stackable: false, maxStack: 1, levelReq: 40,
    classReq: ['ranger', 'marksman'],
    equipSlot: 'weapon', stats: { atk: 58, dex: 10, critRate: 7 },
    rarity: 'legendary', weaponType: 'crossbow', setId: 'shadow_hunter_set',
  },

  // ============ 匕首 (Dagger) - 刺客 ============
  dagger_basic: {
    id: 'dagger_basic', name: '小匕首', type: 'weapon',
    description: '小巧的匕首，適合暗殺。', buyPrice: 50, sellPrice: 25,
    stackable: false, maxStack: 1, levelReq: 1,
    equipSlot: 'weapon', stats: { atk: 5, dex: 2 },
    rarity: 'common', weaponType: 'dagger',
  },
  dagger_iron: {
    id: 'dagger_iron', name: '鐵匕首', type: 'weapon',
    description: '鐵製匕首，暗夜中閃爍寒光。', buyPrice: 290, sellPrice: 145,
    stackable: false, maxStack: 1, levelReq: 10,
    classReq: ['assassin'],
    equipSlot: 'weapon', stats: { atk: 12, dex: 4, critRate: 2 },
    rarity: 'uncommon', weaponType: 'dagger',
  },
  dagger_steel: {
    id: 'dagger_steel', name: '鋼匕首', type: 'weapon',
    description: '精鋼匕首，刺入無聲。', buyPrice: 800, sellPrice: 400,
    stackable: false, maxStack: 1, levelReq: 20,
    classReq: ['assassin'],
    equipSlot: 'weapon', stats: { atk: 22, dex: 6, critRate: 4 },
    rarity: 'rare', weaponType: 'dagger',
  },
  dagger_mithril: {
    id: 'dagger_mithril', name: '秘銀匕首', type: 'weapon',
    description: '秘銀打造的匕首，輕若無物。', buyPrice: 2300, sellPrice: 1150,
    stackable: false, maxStack: 1, levelReq: 30,
    classReq: ['assassin'],
    equipSlot: 'weapon', stats: { atk: 35, dex: 8, critRate: 6 },
    rarity: 'epic', weaponType: 'dagger', setId: 'shadow_hunter_set',
  },
  dagger_dragon: {
    id: 'dagger_dragon', name: '龍鱗匕首', type: 'weapon',
    description: '龍鱗鍛造的傳說匕首，一擊必殺。', buyPrice: 5800, sellPrice: 2900,
    stackable: false, maxStack: 1, levelReq: 40,
    classReq: ['assassin'],
    equipSlot: 'weapon', stats: { atk: 50, dex: 10, critRate: 8 },
    rarity: 'legendary', weaponType: 'dagger', setId: 'shadow_hunter_set',
  },

  // ============ 鞭 (Whip) - 馴獸師 ============
  whip_basic: {
    id: 'whip_basic', name: '皮鞭', type: 'weapon',
    description: '牧場用的皮鞭，威嚇野獸。', buyPrice: 50, sellPrice: 25,
    stackable: false, maxStack: 1, levelReq: 1,
    equipSlot: 'weapon', stats: { atk: 5, dex: 1 },
    rarity: 'common', weaponType: 'whip',
  },
  whip_iron: {
    id: 'whip_iron', name: '鐵鏈鞭', type: 'weapon',
    description: '鐵鏈編織的鞭，馴服強獸。', buyPrice: 300, sellPrice: 150,
    stackable: false, maxStack: 1, levelReq: 10,
    classReq: ['beast_master'],
    equipSlot: 'weapon', stats: { atk: 13, dex: 3 },
    rarity: 'uncommon', weaponType: 'whip',
  },
  whip_steel: {
    id: 'whip_steel', name: '鋼鞭', type: 'weapon',
    description: '精鋼鞭身，揮舞如蛇。', buyPrice: 810, sellPrice: 405,
    stackable: false, maxStack: 1, levelReq: 20,
    classReq: ['beast_master'],
    equipSlot: 'weapon', stats: { atk: 23, dex: 5, str: 2 },
    rarity: 'rare', weaponType: 'whip',
  },
  whip_mithril: {
    id: 'whip_mithril', name: '秘銀鞭', type: 'weapon',
    description: '秘銀編織的鞭，靈動致命。', buyPrice: 2400, sellPrice: 1200,
    stackable: false, maxStack: 1, levelReq: 30,
    classReq: ['beast_master'],
    equipSlot: 'weapon', stats: { atk: 37, dex: 7, str: 4 },
    rarity: 'epic', weaponType: 'whip', setId: 'shadow_hunter_set',
  },
  whip_dragon: {
    id: 'whip_dragon', name: '龍筋鞭', type: 'weapon',
    description: '龍筋製成的傳說鞭，可馴服龍族。', buyPrice: 5900, sellPrice: 2950,
    stackable: false, maxStack: 1, levelReq: 40,
    classReq: ['beast_master'],
    equipSlot: 'weapon', stats: { atk: 52, dex: 9, str: 6 },
    rarity: 'legendary', weaponType: 'whip', setId: 'shadow_hunter_set',
  },

  // ============ 聖典 (Holy Tome) - 祭司/神官 ============
  holytome_basic: {
    id: 'holytome_basic', name: '祈禱書', type: 'weapon',
    description: '記載基礎祈禱文的書籍。', buyPrice: 55, sellPrice: 27,
    stackable: false, maxStack: 1, levelReq: 1,
    equipSlot: 'weapon', stats: { matk: 6, vit: 1 },
    rarity: 'common', weaponType: 'holy_tome',
  },
  holytome_iron: {
    id: 'holytome_iron', name: '鐵釦聖典', type: 'weapon',
    description: '鐵釦裝飾的聖典，蘊含聖光。', buyPrice: 300, sellPrice: 150,
    stackable: false, maxStack: 1, levelReq: 10,
    classReq: ['priest', 'high_priest'],
    equipSlot: 'weapon', stats: { matk: 14, vit: 2, mp: 10 },
    rarity: 'uncommon', weaponType: 'holy_tome',
  },
  holytome_crystal: {
    id: 'holytome_crystal', name: '水晶聖典', type: 'weapon',
    description: '聖光水晶鑲嵌的聖典，治癒之力強大。', buyPrice: 830, sellPrice: 415,
    stackable: false, maxStack: 1, levelReq: 20,
    classReq: ['priest', 'high_priest'],
    equipSlot: 'weapon', stats: { matk: 25, vit: 4, int: 3, mp: 25 },
    rarity: 'rare', weaponType: 'holy_tome',
  },
  holytome_mithril: {
    id: 'holytome_mithril', name: '秘銀聖典', type: 'weapon',
    description: '秘銀書頁的聖典，神聖護佑。', buyPrice: 2500, sellPrice: 1250,
    stackable: false, maxStack: 1, levelReq: 30,
    classReq: ['priest', 'high_priest'],
    equipSlot: 'weapon', stats: { matk: 38, vit: 6, int: 5, mp: 40 },
    rarity: 'epic', weaponType: 'holy_tome', setId: 'holy_guardian_set',
  },
  holytome_dragon: {
    id: 'holytome_dragon', name: '龍聖典', type: 'weapon',
    description: '記載龍神祝福的傳說聖典，奇蹟降臨。', buyPrice: 6000, sellPrice: 3000,
    stackable: false, maxStack: 1, levelReq: 40,
    classReq: ['priest', 'high_priest'],
    equipSlot: 'weapon', stats: { matk: 55, vit: 8, int: 7, mp: 60 },
    rarity: 'legendary', weaponType: 'holy_tome', setId: 'holy_guardian_set',
  },

  // ============ 自然杖 (Nature Staff) - 德魯伊 ============
  naturestaff_basic: {
    id: 'naturestaff_basic', name: '樹苗杖', type: 'weapon',
    description: '以活樹苗製成的法杖，生命之力微弱。', buyPrice: 55, sellPrice: 27,
    stackable: false, maxStack: 1, levelReq: 1,
    equipSlot: 'weapon', stats: { matk: 5, vit: 1, hp: 10 },
    rarity: 'common', weaponType: 'nature_staff',
  },
  naturestaff_iron: {
    id: 'naturestaff_iron', name: '鐵環自然杖', type: 'weapon',
    description: '鐵環固定的自然杖，大地之力流轉。', buyPrice: 300, sellPrice: 150,
    stackable: false, maxStack: 1, levelReq: 10,
    classReq: ['druid'],
    equipSlot: 'weapon', stats: { matk: 13, vit: 2, int: 2, hp: 20 },
    rarity: 'uncommon', weaponType: 'nature_staff',
  },
  naturestaff_crystal: {
    id: 'naturestaff_crystal', name: '翡翠自然杖', type: 'weapon',
    description: '鑲嵌翡翠的自然杖，萬物生長。', buyPrice: 820, sellPrice: 410,
    stackable: false, maxStack: 1, levelReq: 20,
    classReq: ['druid'],
    equipSlot: 'weapon', stats: { matk: 24, vit: 4, int: 3, hp: 40 },
    rarity: 'rare', weaponType: 'nature_staff',
  },
  naturestaff_mithril: {
    id: 'naturestaff_mithril', name: '秘銀自然杖', type: 'weapon',
    description: '秘銀與古樹融合的自然杖，生命脈動。', buyPrice: 2500, sellPrice: 1250,
    stackable: false, maxStack: 1, levelReq: 30,
    classReq: ['druid'],
    equipSlot: 'weapon', stats: { matk: 38, vit: 6, int: 5, hp: 60 },
    rarity: 'epic', weaponType: 'nature_staff', setId: 'holy_guardian_set',
  },
  naturestaff_dragon: {
    id: 'naturestaff_dragon', name: '龍樹自然杖', type: 'weapon',
    description: '世界樹與龍力交織的傳說自然杖。', buyPrice: 6000, sellPrice: 3000,
    stackable: false, maxStack: 1, levelReq: 40,
    classReq: ['druid'],
    equipSlot: 'weapon', stats: { matk: 55, vit: 8, int: 7, hp: 100 },
    rarity: 'legendary', weaponType: 'nature_staff', setId: 'holy_guardian_set',
  },

  // ============ 戰錘 (Warhammer) - 審判者/騎士 ============
  warhammer_basic: {
    id: 'warhammer_basic', name: '木槌', type: 'weapon',
    description: '粗糙的木頭錘子，聊勝於無。', buyPrice: 60, sellPrice: 30,
    stackable: false, maxStack: 1, levelReq: 1,
    equipSlot: 'weapon', stats: { atk: 7, def: 1 },
    rarity: 'common', weaponType: 'warhammer',
  },
  warhammer_iron: {
    id: 'warhammer_iron', name: '鐵戰錘', type: 'weapon',
    description: '沉重的鐵製戰錘，粉碎敵人。', buyPrice: 320, sellPrice: 160,
    stackable: false, maxStack: 1, levelReq: 10,
    classReq: ['inquisitor', 'knight'],
    equipSlot: 'weapon', stats: { atk: 16, def: 3, str: 2 },
    rarity: 'uncommon', weaponType: 'warhammer',
  },
  warhammer_steel: {
    id: 'warhammer_steel', name: '鋼戰錘', type: 'weapon',
    description: '精鋼鍛造的戰錘，制裁邪惡。', buyPrice: 840, sellPrice: 420,
    stackable: false, maxStack: 1, levelReq: 20,
    classReq: ['inquisitor', 'knight'],
    equipSlot: 'weapon', stats: { atk: 28, def: 5, str: 3, matk: 5 },
    rarity: 'rare', weaponType: 'warhammer',
  },
  warhammer_mithril: {
    id: 'warhammer_mithril', name: '秘銀戰錘', type: 'weapon',
    description: '秘銀鍛造的戰錘，神聖審判。', buyPrice: 2600, sellPrice: 1300,
    stackable: false, maxStack: 1, levelReq: 30,
    classReq: ['inquisitor', 'knight'],
    equipSlot: 'weapon', stats: { atk: 42, def: 7, str: 5, matk: 8 },
    rarity: 'epic', weaponType: 'warhammer', setId: 'holy_guardian_set',
  },
  warhammer_dragon: {
    id: 'warhammer_dragon', name: '龍骨戰錘', type: 'weapon',
    description: '龍骨鍛造的傳說戰錘，審判降臨。', buyPrice: 6500, sellPrice: 3250,
    stackable: false, maxStack: 1, levelReq: 40,
    classReq: ['inquisitor', 'knight'],
    equipSlot: 'weapon', stats: { atk: 60, def: 10, str: 7, matk: 12 },
    rarity: 'legendary', weaponType: 'warhammer', setId: 'holy_guardian_set',
  },

  // ============ 套裝部件 - 劍聖之裝 ============
  sword_saint_armor: {
    id: 'sword_saint_armor', name: '劍聖鎧甲', type: 'armor',
    description: '劍聖之裝套裝的鎧甲，刻有劍聖紋章。', buyPrice: 4000, sellPrice: 2000,
    stackable: false, maxStack: 1, levelReq: 30,
    classReq: ['swordsman', 'knight', 'berserker', 'sword_saint'],
    equipSlot: 'body', stats: { def: 30, str: 5, dex: 3 },
    rarity: 'epic', setId: 'sword_saint_set',
  },
  sword_saint_ring: {
    id: 'sword_saint_ring', name: '劍聖戒指', type: 'accessory',
    description: '劍聖之裝套裝的戒指，戰氣凝聚。', buyPrice: 2500, sellPrice: 1250,
    stackable: false, maxStack: 1, levelReq: 30,
    classReq: ['swordsman', 'knight', 'berserker', 'sword_saint'],
    equipSlot: 'accessory', stats: { atk: 8, str: 4, critRate: 3 },
    rarity: 'epic', setId: 'sword_saint_set',
  },

  // ============ 套裝部件 - 大法師之裝 ============
  archmage_set_robe: {
    id: 'archmage_set_robe', name: '大法師法袍', type: 'armor',
    description: '大法師之裝套裝的法袍，魔紋閃爍。', buyPrice: 4000, sellPrice: 2000,
    stackable: false, maxStack: 1, levelReq: 30,
    classReq: ['mage', 'archmage', 'warlock', 'chronomancer'],
    equipSlot: 'body', stats: { mdef: 25, int: 6, mp: 50 },
    rarity: 'epic', setId: 'archmage_set',
  },
  archmage_set_ring: {
    id: 'archmage_set_ring', name: '大法師魔戒', type: 'accessory',
    description: '大法師之裝套裝的魔戒，魔力澎湃。', buyPrice: 2500, sellPrice: 1250,
    stackable: false, maxStack: 1, levelReq: 30,
    classReq: ['mage', 'archmage', 'warlock', 'chronomancer'],
    equipSlot: 'accessory', stats: { matk: 10, int: 5, mp: 30 },
    rarity: 'epic', setId: 'archmage_set',
  },

  // ============ 套裝部件 - 暗影獵手之裝 ============
  shadow_hunter_armor: {
    id: 'shadow_hunter_armor', name: '暗影獵手輕甲', type: 'armor',
    description: '暗影獵手之裝套裝的輕甲，暗影籠罩。', buyPrice: 4000, sellPrice: 2000,
    stackable: false, maxStack: 1, levelReq: 30,
    classReq: ['ranger', 'marksman', 'assassin', 'beast_master'],
    equipSlot: 'body', stats: { def: 20, dex: 6, dodgeRate: 5 },
    rarity: 'epic', setId: 'shadow_hunter_set',
  },
  shadow_hunter_ring: {
    id: 'shadow_hunter_ring', name: '暗影獵手戒指', type: 'accessory',
    description: '暗影獵手之裝套裝的戒指，暗影之力。', buyPrice: 2500, sellPrice: 1250,
    stackable: false, maxStack: 1, levelReq: 30,
    classReq: ['ranger', 'marksman', 'assassin', 'beast_master'],
    equipSlot: 'accessory', stats: { dex: 5, critRate: 4, dodgeRate: 3 },
    rarity: 'epic', setId: 'shadow_hunter_set',
  },

  // ============ 套裝部件 - 聖光守護之裝 ============
  holy_guardian_armor: {
    id: 'holy_guardian_armor', name: '聖光守護鎧甲', type: 'armor',
    description: '聖光守護之裝套裝的鎧甲，聖光護體。', buyPrice: 4000, sellPrice: 2000,
    stackable: false, maxStack: 1, levelReq: 30,
    classReq: ['priest', 'high_priest', 'druid', 'inquisitor'],
    equipSlot: 'body', stats: { def: 25, mdef: 15, vit: 5, mp: 40 },
    rarity: 'epic', setId: 'holy_guardian_set',
  },
  holy_guardian_ring: {
    id: 'holy_guardian_ring', name: '聖光守護戒指', type: 'accessory',
    description: '聖光守護之裝套裝的戒指，信仰之光。', buyPrice: 2500, sellPrice: 1250,
    stackable: false, maxStack: 1, levelReq: 30,
    classReq: ['priest', 'high_priest', 'druid', 'inquisitor'],
    equipSlot: 'accessory', stats: { int: 4, vit: 4, mp: 30 },
    rarity: 'epic', setId: 'holy_guardian_set',
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

// ============================================================
//  裝備套裝系統
// ============================================================

export interface SetBonusTier {
  /** 需要的套裝件數 */
  pieces: number;
  /** 描述（中文） */
  description: string;
  /** 屬性加成（百分比的用 pct 後綴） */
  bonusStats?: Partial<import('../types/item.js').ItemStats>;
  /** 百分比加成 */
  bonusPct?: {
    atk?: number;
    matk?: number;
    def?: number;
    mdef?: number;
    int?: number;
    dex?: number;
    vit?: number;
    str?: number;
    critRate?: number;
    dodgeRate?: number;
    healPower?: number;
    spellPower?: number;
    critDamage?: number;
    mpCostReduction?: number;
    faithRegen?: number;
  };
}

export interface EquipmentSetDef {
  id: string;
  name: string;
  description: string;
  /** 套裝中的物品 ID 列表（武器需要玩家自選對應 weaponType 且 setId 匹配） */
  itemIds: string[];
  /** 可作為套裝武器的 weaponType 列表 */
  weaponTypes?: import('../types/item.js').WeaponType[];
  bonuses: SetBonusTier[];
}

/** 套裝武器：劍聖之裝的武器包含 katana_mithril 和 katana_dragon */
// 在 ITEM_DEFS 中已經用 setId 標記了套裝部件

export const EQUIPMENT_SETS: Record<string, EquipmentSetDef> = {
  sword_saint_set: {
    id: 'sword_saint_set',
    name: '劍聖之裝',
    description: '為戰士職業打造的傳說套裝，揮劍如虹。',
    itemIds: ['katana_mithril', 'katana_dragon', 'spear_mithril', 'spear_dragon', 'greataxe_mithril', 'greataxe_dragon', 'sword_saint_armor', 'sword_saint_ring'],
    bonuses: [
      {
        pieces: 2,
        description: 'ATK +10%',
        bonusPct: { atk: 10 },
      },
      {
        pieces: 3,
        description: '暴擊率 +15%，STR +20',
        bonusPct: { critRate: 15 },
        bonusStats: { str: 20 },
      },
    ],
  },
  archmage_set: {
    id: 'archmage_set',
    name: '大法師之裝',
    description: '為法師職業打造的傳說套裝，魔力洪流。',
    itemIds: ['elestaff_mithril', 'elestaff_dragon', 'grimoire_mithril', 'grimoire_dragon', 'hourglass_mithril', 'hourglass_dragon', 'archmage_set_robe', 'archmage_set_ring'],
    bonuses: [
      {
        pieces: 2,
        description: 'INT +15%',
        bonusPct: { int: 15 },
      },
      {
        pieces: 3,
        description: '法術威力 +20%，MP 消耗 -10%',
        bonusPct: { spellPower: 20, mpCostReduction: 10 },
      },
    ],
  },
  shadow_hunter_set: {
    id: 'shadow_hunter_set',
    name: '暗影獵手之裝',
    description: '為遊俠職業打造的傳說套裝，暗影無蹤。',
    itemIds: ['crossbow_mithril', 'crossbow_dragon', 'dagger_mithril', 'dagger_dragon', 'whip_mithril', 'whip_dragon', 'shadow_hunter_armor', 'shadow_hunter_ring'],
    bonuses: [
      {
        pieces: 2,
        description: 'DEX +10%',
        bonusPct: { dex: 10 },
      },
      {
        pieces: 3,
        description: '迴避率 +15%，暴擊傷害 +25%',
        bonusPct: { dodgeRate: 15, critDamage: 25 },
      },
    ],
  },
  holy_guardian_set: {
    id: 'holy_guardian_set',
    name: '聖光守護之裝',
    description: '為祭司職業打造的傳說套裝，聖光庇護。',
    itemIds: ['holytome_mithril', 'holytome_dragon', 'naturestaff_mithril', 'naturestaff_dragon', 'warhammer_mithril', 'warhammer_dragon', 'holy_guardian_armor', 'holy_guardian_ring'],
    bonuses: [
      {
        pieces: 2,
        description: '治癒力量 +15%',
        bonusPct: { healPower: 15 },
      },
      {
        pieces: 3,
        description: 'VIT +20，信仰回復 +5/回合',
        bonusStats: { vit: 20 },
        bonusPct: { faithRegen: 5 },
      },
    ],
  },
};

/** 計算角色的套裝加成 */
export function calculateSetBonuses(equippedItemIds: string[]): {
  activeSetNames: string[];
  bonusStats: Partial<import('../types/item.js').ItemStats>;
  bonusPct: Record<string, number>;
} {
  const bonusStats: Record<string, number> = {};
  const bonusPct: Record<string, number> = {};
  const activeSetNames: string[] = [];

  for (const set of Object.values(EQUIPMENT_SETS)) {
    // Count how many items from this set are equipped
    const count = equippedItemIds.filter(id => {
      const def = ITEM_DEFS[id];
      return def?.setId === set.id || set.itemIds.includes(id);
    }).length;

    for (const tier of set.bonuses) {
      if (count >= tier.pieces) {
        if (!activeSetNames.includes(`${set.name}(${tier.pieces})`)) {
          activeSetNames.push(`${set.name}(${tier.pieces})`);
        }
        if (tier.bonusStats) {
          for (const [k, v] of Object.entries(tier.bonusStats)) {
            if (v !== undefined) bonusStats[k] = (bonusStats[k] ?? 0) + v;
          }
        }
        if (tier.bonusPct) {
          for (const [k, v] of Object.entries(tier.bonusPct)) {
            if (v !== undefined) bonusPct[k] = (bonusPct[k] ?? 0) + v;
          }
        }
      }
    }
  }

  return {
    activeSetNames,
    bonusStats: bonusStats as Partial<import('../types/item.js').ItemStats>,
    bonusPct,
  };
}
