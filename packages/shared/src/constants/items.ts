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

  // ============ 精英掉落武器 (Elite Drop Weapons) ============

  rusty_hero_sword: {
    id: 'rusty_hero_sword', name: '鏽蝕的勇者之劍', type: 'weapon',
    description: '一把斑駁鏽蝕的古劍，劍身上隱約可見古老的符文。據說這是某位傳奇勇者的佩劍，雖然歲月侵蝕了它的鋒芒，但符文中沉睡的力量依然驚人。',
    buyPrice: 0, sellPrice: 500,
    stackable: false, maxStack: 1, levelReq: 8,
    classReq: ['swordsman', 'knight', 'sword_saint'],
    equipSlot: 'weapon', stats: { atk: 15, str: 2, critRate: 2 },
    rarity: 'rare', weaponType: 'katana',
    attackDescriptions: {
      normal: '揮動斑駁的古劍劈出一道弧光',
      critical: '古劍上的符文突然閃耀，爆發出驚人的一擊！',
      miss: '鏽蝕的劍刃在空中劃過，未能命中',
      kill: '古劍彷彿回應了勇者的意志，貫穿了敵人！',
    },
  },

  wolf_fang_dagger: {
    id: 'wolf_fang_dagger', name: '狼牙匕首', type: 'weapon',
    description: '以狼王的獠牙精心打磨而成的匕首，刃身呈月牙形，散發著野性的氣息。握住它時彷彿能聽到狼群的嚎叫。',
    buyPrice: 0, sellPrice: 800,
    stackable: false, maxStack: 1, levelReq: 12,
    classReq: ['assassin', 'ranger', 'beast_master'],
    equipSlot: 'weapon', stats: { atk: 18, dex: 4, critRate: 4 },
    rarity: 'rare', weaponType: 'dagger',
    attackDescriptions: {
      normal: '狼牙匕首如獠牙般撕裂空氣，劃向目標',
      critical: '匕首上的狼魂咆哮，化為致命的獠牙撕碎了防禦！',
      miss: '匕首劃過殘影，獵物已經不在那裡了',
      kill: '狼牙匕首深深刺入要害，如同狼王鎖喉般致命！',
    },
  },

  pirate_crossbow: {
    id: 'pirate_crossbow', name: '海盜船長的短銃弩', type: 'weapon',
    description: '海盜船長的愛用武器，結合了弩箭與火藥的精巧裝置。每一發都伴隨著硝煙和轟鳴，是海上恐懼的象徵。',
    buyPrice: 0, sellPrice: 1000,
    stackable: false, maxStack: 1, levelReq: 15,
    classReq: ['ranger', 'marksman'],
    equipSlot: 'weapon', stats: { atk: 27, dex: 3, critRate: 3 },
    rarity: 'rare', weaponType: 'crossbow',
    attackDescriptions: {
      normal: '扣下扳機，短銃弩在硝煙中射出一發鋼製弩箭',
      critical: '裝填了特製彈藥，短銃弩爆發出震耳欲聾的轟鳴！',
      miss: '硝煙散去，弩箭釘在了目標身後的牆壁上',
      kill: '短銃弩的最後一擊貫穿了目標，如同船長宣判了死刑！',
    },
  },

  faded_grimoire: {
    id: 'faded_grimoire', name: '褪色的咒語書', type: 'weapon',
    description: '從暗影樹靈的樹洞中取出的古老咒語書，書頁已經泛黃褪色，但文字仍在黑暗中微微發光。翻開它就能感受到遠古禁忌魔力的波動。',
    buyPrice: 0, sellPrice: 2000,
    stackable: false, maxStack: 1, levelReq: 20,
    classReq: ['warlock', 'mage', 'archmage'],
    equipSlot: 'weapon', stats: { matk: 33, int: 5, mp: 30 },
    rarity: 'epic', weaponType: 'grimoire', element: 'dark',
    attackDescriptions: {
      normal: '翻開咒語書，褪色的文字化為黑色魔力射向目標',
      critical: '咒語書的封印暫時解除，釋放出遠古的禁忌魔力！',
      miss: '古老的咒語在空氣中消散，未能觸及目標',
      kill: '書頁瘋狂翻動，無數咒語化為黑色洪流吞噬了敵人！',
    },
  },

  lava_warhammer: {
    id: 'lava_warhammer', name: '熔岩之錘', type: 'weapon',
    description: '由熔岩巨像的核心凝聚而成的戰錘，錘頭仍在不斷冒出炙熱的蒸氣。揮舞時地面會出現裂紋，彷彿要將火山之力釋放出來。',
    buyPrice: 0, sellPrice: 2500,
    stackable: false, maxStack: 1, levelReq: 22,
    classReq: ['knight', 'inquisitor', 'berserker'],
    equipSlot: 'weapon', stats: { atk: 40, str: 5, vit: 3 },
    rarity: 'epic', weaponType: 'warhammer', element: 'fire',
    attackDescriptions: {
      normal: '揮舞熔岩戰錘，灼熱的氣浪伴隨著沉重的一擊',
      critical: '戰錘上的岩漿噴湧而出，爆發出毀天滅地的一擊！',
      miss: '沉重的戰錘砸在地面，留下一個冒著熱氣的凹坑',
      kill: '熔岩之錘將目標砸入大地，岩漿從裂縫中噴湧而出！',
    },
  },

  crystal_elestaff: {
    id: 'crystal_elestaff', name: '水晶法杖', type: 'weapon',
    description: '由水晶龍的核心結晶凝聚而成的法杖，杖頂的水晶球中不斷旋轉著七色光芒。它能引導所有元素之力，是法師夢寐以求的至寶。',
    buyPrice: 0, sellPrice: 3500,
    stackable: false, maxStack: 1, levelReq: 26,
    classReq: ['mage', 'archmage'],
    equipSlot: 'weapon', stats: { matk: 47, int: 6, mp: 50, critRate: 3 },
    rarity: 'epic', weaponType: 'elemental_staff', element: 'ice',
    attackDescriptions: {
      normal: '水晶法杖頂端的稜鏡旋轉，折射出一道元素光束',
      critical: '七色光芒匯聚為一，法杖釋放出強大的元素風暴！',
      miss: '稜鏡的光芒偏折，元素之力消散在空氣中',
      kill: '水晶法杖爆發出耀眼的光芒，將目標化為無數水晶碎片！',
    },
  },

  frost_greataxe: {
    id: 'frost_greataxe', name: '霜巨人的戰斧', type: 'weapon',
    description: '霜巨人王的佩斧，由千年不化的永凍冰鑄就。斧刃散發著肉眼可見的寒氣，被它劈中的一切都會瞬間凍結。即使是最強壯的戰士也難以揮舞這把巨斧。',
    buyPrice: 0, sellPrice: 5000,
    stackable: false, maxStack: 1, levelReq: 30,
    classReq: ['berserker', 'sword_saint'],
    equipSlot: 'weapon', stats: { atk: 58, str: 8, vit: 4, critRate: 4 },
    rarity: 'legendary', weaponType: 'greataxe', element: 'ice',
    attackDescriptions: {
      normal: '揮舞永凍戰斧，寒風呼嘯中劈出凜冽的一擊',
      critical: '戰斧上的永凍之力爆發，一擊之下天地皆凍！',
      miss: '巨斧砸碎了地面的冰層，凍氣四散卻未傷及目標',
      kill: '霜巨人的戰斧將目標劈成冰雕，寒氣凝結了周圍的空氣！',
    },
  },

  // ============ 特殊武器 - 任務獎勵 (Quest Rewards) ============

  serpent_fang_spear: {
    id: 'serpent_fang_spear', name: '蛇牙長槍', type: 'weapon',
    description: '以巨型海蛇的毒牙製成的長槍，槍尖滲出淡綠色的毒液。每次刺擊都伴隨著蛇的嘶嘶聲。',
    buyPrice: 0, sellPrice: 600,
    stackable: false, maxStack: 1, levelReq: 10,
    classReq: ['swordsman', 'knight'],
    equipSlot: 'weapon', stats: { atk: 16, dex: 3, luk: 2 },
    rarity: 'rare', weaponType: 'spear', element: 'nature',
    attackDescriptions: {
      normal: '蛇牙長槍如毒蛇出洞般刺向目標，槍尖滴落毒液',
      critical: '毒牙槍尖迸發出劇毒之力，深深刺入敵人的要害！',
      miss: '長槍如蛇信般探出，卻撲了個空',
      kill: '蛇牙長槍貫穿了目標，毒液在傷口中蔓延！',
    },
  },

  moonlight_katana: {
    id: 'moonlight_katana', name: '月光太刀', type: 'weapon',
    description: '在月圓之夜鍛造的太刀，刀身泛著銀白色的月光。據說只有在月光下才能展現它真正的鋒芒。',
    buyPrice: 0, sellPrice: 900,
    stackable: false, maxStack: 1, levelReq: 14,
    classReq: ['swordsman', 'sword_saint'],
    equipSlot: 'weapon', stats: { atk: 20, dex: 4, critRate: 3 },
    rarity: 'rare', weaponType: 'katana',
    attackDescriptions: {
      normal: '月光太刀劃出一道銀白的弧線，如新月般優雅',
      critical: '刀身綻放出皎潔的月光，化為斬月之刃！',
      miss: '月光在刀身上流轉，卻未能觸及目標',
      kill: '月光太刀的最後一擊如滿月般圓滿，終結了敵人！',
    },
  },

  thunder_whip: {
    id: 'thunder_whip', name: '雷鳴之鞭', type: 'weapon',
    description: '以雷獸的筋腱製成的長鞭，揮舞時會發出雷鳴般的爆響。鞭身纏繞著細微的電弧，觸碰者將被電擊麻痺。',
    buyPrice: 0, sellPrice: 1200,
    stackable: false, maxStack: 1, levelReq: 16,
    classReq: ['beast_master', 'druid'],
    equipSlot: 'weapon', stats: { atk: 24, dex: 5, critRate: 2 },
    rarity: 'rare', weaponType: 'whip', element: 'fire',
    attackDescriptions: {
      normal: '雷鳴之鞭劈啪作響，帶著電弧抽向目標',
      critical: '鞭身上的電弧匯聚為雷霆，爆裂的一擊令人膽寒！',
      miss: '雷鞭在空中炸響，雷聲震耳卻未擊中',
      kill: '雷鳴之鞭纏繞住目標，強烈的電流貫穿了全身！',
    },
  },

  dawn_holy_tome: {
    id: 'dawn_holy_tome', name: '曙光聖典', type: 'weapon',
    description: '記載著曙光教團古老祈禱文的聖書，書頁散發著溫暖的金色光芒。翻開它就能感受到神聖之力的庇護。',
    buyPrice: 0, sellPrice: 1500,
    stackable: false, maxStack: 1, levelReq: 18,
    classReq: ['priest', 'high_priest', 'inquisitor'],
    equipSlot: 'weapon', stats: { matk: 28, int: 4, vit: 3, mp: 25 },
    rarity: 'rare', weaponType: 'holy_tome',
    attackDescriptions: {
      normal: '聖典綻放金色光芒，化為聖光射向目標',
      critical: '曙光之力從聖典中傾瀉而出，灼燒一切黑暗！',
      miss: '聖光如晨曦般柔和地散去，未能命中目標',
      kill: '聖典的光芒如旭日東昇，淨化了敵人的存在！',
    },
  },

  vine_nature_staff: {
    id: 'vine_nature_staff', name: '藤蔓之杖', type: 'weapon',
    description: '由活著的藤蔓編織而成的法杖，杖身不斷生長著嫩綠的新芽。它能與森林中的植物共鳴，召喚自然之力。',
    buyPrice: 0, sellPrice: 1800,
    stackable: false, maxStack: 1, levelReq: 20,
    classReq: ['druid', 'priest', 'high_priest'],
    equipSlot: 'weapon', stats: { matk: 31, int: 3, vit: 4, mp: 30 },
    rarity: 'rare', weaponType: 'nature_staff', element: 'nature',
    attackDescriptions: {
      normal: '藤蔓之杖召喚地底的根莖，纏繞向目標',
      critical: '森林的怒火通過法杖爆發，無數荊棘刺穿了敵人！',
      miss: '藤蔓從地面竄出，卻撲了個空',
      kill: '法杖召喚的藤蔓將目標徹底吞噬，化為養分歸於大地！',
    },
  },

  // ============ 特殊武器 - 隱藏寶箱 (Hidden Treasures) ============

  abyssal_dagger: {
    id: 'abyssal_dagger', name: '深淵匕首', type: 'weapon',
    description: '從海底深淵打撈出的漆黑匕首，刃身吞噬著周圍的光線。據說它是深海魚人祭司的祭祀之器。',
    buyPrice: 0, sellPrice: 1600,
    stackable: false, maxStack: 1, levelReq: 18,
    classReq: ['assassin', 'ranger', 'marksman'],
    equipSlot: 'weapon', stats: { atk: 26, dex: 5, critRate: 5, luk: 2 },
    rarity: 'rare', weaponType: 'dagger', element: 'dark',
    attackDescriptions: {
      normal: '深淵匕首吞噬光線，在黑暗中無聲刺出',
      critical: '匕首上的深淵之力爆發，撕裂了目標的防禦！',
      miss: '匕首劃破黑暗，卻只切開了空氣',
      kill: '深淵匕首將目標拖入無盡的黑暗之中！',
    },
  },

  sandstorm_crossbow: {
    id: 'sandstorm_crossbow', name: '沙暴弩', type: 'weapon',
    description: '在沙漠遺跡中發現的古代弩弓，弩臂上刻著風之符文。射出的弩箭會裹挾沙暴之力，在命中時爆散出致盲的沙塵。',
    buyPrice: 0, sellPrice: 2200,
    stackable: false, maxStack: 1, levelReq: 22,
    classReq: ['ranger', 'marksman'],
    equipSlot: 'weapon', stats: { atk: 34, dex: 6, critRate: 3 },
    rarity: 'epic', weaponType: 'crossbow',
    attackDescriptions: {
      normal: '沙暴弩射出裹挾沙塵的弩箭，呼嘯著飛向目標',
      critical: '弩箭引發小型沙暴，鋒利的沙粒撕裂了一切！',
      miss: '弩箭帶著沙塵呼嘯而過，消失在風中',
      kill: '沙暴弩的最後一箭引發了毀滅性的沙暴，吞噬了目標！',
    },
  },

  frozen_hourglass_staff: {
    id: 'frozen_hourglass_staff', name: '凍結沙漏杖', type: 'weapon',
    description: '杖頂鑲嵌著一個永不停止的冰晶沙漏，沙粒是凝固的時間碎片。傳說持有者能短暫地凍結時間之流。',
    buyPrice: 0, sellPrice: 2800,
    stackable: false, maxStack: 1, levelReq: 24,
    classReq: ['chronomancer', 'mage', 'archmage'],
    equipSlot: 'weapon', stats: { matk: 38, int: 5, dex: 3, mp: 40 },
    rarity: 'epic', weaponType: 'hourglass_staff', element: 'ice',
    attackDescriptions: {
      normal: '沙漏杖中的時間碎片飛旋而出，凍結目標周圍的空間',
      critical: '時間之流被強制中斷，目標在永恆的一瞬間承受了所有傷害！',
      miss: '時間碎片在空中消散，未能抵達目標',
      kill: '沙漏倒轉，目標被凍結在破碎的時間裂隙中，永遠停止了呼吸！',
    },
  },

  crimson_grimoire: {
    id: 'crimson_grimoire', name: '血紅禁書', type: 'weapon',
    description: '以鮮血書寫的禁忌魔導書，翻開每一頁都能聞到血腥的氣味。書中的咒語極為危險，連持有者都可能被反噬。',
    buyPrice: 0, sellPrice: 3000,
    stackable: false, maxStack: 1, levelReq: 25,
    classReq: ['warlock', 'mage'],
    equipSlot: 'weapon', stats: { matk: 42, int: 7, critRate: 4 },
    rarity: 'epic', weaponType: 'grimoire', element: 'dark',
    attackDescriptions: {
      normal: '血紅禁書翻開，鮮血般的魔力化為詛咒飛向目標',
      critical: '禁忌咒語發動！血色魔法陣將目標吞噬！',
      miss: '血色的咒語在空中扭曲消散，未能命中',
      kill: '禁書中最強的詛咒發動，目標在血紅的光芒中化為虛無！',
    },
  },

  guardian_warhammer: {
    id: 'guardian_warhammer', name: '守護者之錘', type: 'weapon',
    description: '地底種族守護者使用的戰錘，錘頭鑲嵌著發光的水晶。它不僅是武器，更是守護者意志的象徵——保護弱者、擊退黑暗。',
    buyPrice: 0, sellPrice: 2600,
    stackable: false, maxStack: 1, levelReq: 23,
    classReq: ['knight', 'inquisitor'],
    equipSlot: 'weapon', stats: { atk: 36, vit: 6, def: 5, str: 3 },
    rarity: 'epic', weaponType: 'warhammer',
    attackDescriptions: {
      normal: '守護者之錘揮出正義的一擊，錘頭上的水晶閃爍',
      critical: '守護之光從錘頭爆發，碾碎了黑暗的屏障！',
      miss: '戰錘沉重地落空，水晶的光芒黯淡了一瞬',
      kill: '守護者之錘發出最終審判，將敵人的罪孽連同肉體一起粉碎！',
    },
  },

  spirit_whip: {
    id: 'spirit_whip', name: '靈魂之鞭', type: 'weapon',
    description: '由怨靈的執念凝聚而成的幽靈長鞭，鞭身若隱若現，如同飄蕩的幽魂。它能直接鞭打敵人的靈魂，造成精神上的劇痛。',
    buyPrice: 0, sellPrice: 3200,
    stackable: false, maxStack: 1, levelReq: 26,
    classReq: ['beast_master', 'druid', 'warlock'],
    equipSlot: 'weapon', stats: { atk: 18, matk: 30, int: 4, dex: 4 },
    rarity: 'epic', weaponType: 'whip', element: 'dark',
    attackDescriptions: {
      normal: '靈魂之鞭穿透物質，直擊目標的靈魂',
      critical: '無數怨靈從鞭身中湧出，撕裂了目標的精神！',
      miss: '幽靈鞭影穿過了目標的身體，卻未能觸及靈魂',
      kill: '靈魂之鞭將目標的靈魂從肉體中抽離，化為虛無！',
    },
  },

  // ============ 特殊武器 - 鍛造/NPC商店 (Crafting/NPC) ============

  dwarven_masterwork_spear: {
    id: 'dwarven_masterwork_spear', name: '矮人大師槍', type: 'weapon',
    description: '矮人鍛造大師的畢生傑作，槍身由精鋼與秘銀合金打造，槍尖能貫穿最堅硬的甲冑。每一寸都展現著矮人族千年的鍛造智慧。',
    buyPrice: 4000, sellPrice: 2000,
    stackable: false, maxStack: 1, levelReq: 25,
    classReq: ['swordsman', 'knight', 'sword_saint'],
    equipSlot: 'weapon', stats: { atk: 36, str: 4, dex: 3, critRate: 2 },
    rarity: 'epic', weaponType: 'spear',
    attackDescriptions: {
      normal: '矮人大師槍精準地刺出，金屬的嗡鳴迴盪在空氣中',
      critical: '槍身上的矮人符文亮起，貫穿了目標的所有防禦！',
      miss: '長槍的光芒一閃，卻只刺穿了空氣',
      kill: '矮人大師槍以雷霆萬鈞之勢貫穿了目標，展現了鍛造藝術的極致！',
    },
  },

  twilight_katana: {
    id: 'twilight_katana', name: '黃昏太刀', type: 'weapon',
    description: '在黃昏時分以特殊祕法鍛造的太刀，刀身呈現夕陽般的橘紅色。據說它承載著「日落之誓」——斬斷一切黑暗。',
    buyPrice: 4500, sellPrice: 2250,
    stackable: false, maxStack: 1, levelReq: 28,
    classReq: ['swordsman', 'sword_saint'],
    equipSlot: 'weapon', stats: { atk: 42, dex: 6, critRate: 5, str: 3 },
    rarity: 'epic', weaponType: 'katana', element: 'fire',
    attackDescriptions: {
      normal: '黃昏太刀帶著夕陽的餘暉劈出，刀光如落日般燦爛',
      critical: '日落之誓發動！太刀化為一道斬破黑暗的金色劍氣！',
      miss: '刀光如夕陽般轉瞬即逝，未能觸及目標',
      kill: '黃昏太刀完成了最後的斬擊，如同太陽吞沒了地平線！',
    },
  },

  eternal_holy_tome: {
    id: 'eternal_holy_tome', name: '永恆聖典', type: 'weapon',
    description: '記載著創世神話的遠古聖書，書頁永不磨損，文字永不褪色。翻開它就能感受到創世之初的神聖力量在指尖流淌。',
    buyPrice: 5000, sellPrice: 2500,
    stackable: false, maxStack: 1, levelReq: 30,
    classReq: ['high_priest', 'inquisitor'],
    equipSlot: 'weapon', stats: { matk: 45, int: 6, vit: 5, mp: 50 },
    rarity: 'legendary', weaponType: 'holy_tome',
    attackDescriptions: {
      normal: '永恆聖典翻開，創世之光傾瀉而出射向目標',
      critical: '聖典中的創世之力覺醒，神聖的光柱從天而降！',
      miss: '聖光如星辰般閃爍後消散，未能命中',
      kill: '永恆聖典釋放了創世的裁決，目標在神聖之光中化為塵埃！',
    },
  },

  world_tree_staff: {
    id: 'world_tree_staff', name: '世界樹之杖', type: 'weapon',
    description: '取自世界樹枝幹的法杖，杖身散發著蓬勃的生命力。它能與大地溝通，召喚自然的原初力量。只有最虔誠的自然之子才配使用它。',
    buyPrice: 5500, sellPrice: 2750,
    stackable: false, maxStack: 1, levelReq: 32,
    classReq: ['druid', 'high_priest'],
    equipSlot: 'weapon', stats: { matk: 42, int: 5, vit: 6, mp: 45, hp: 50 },
    rarity: 'legendary', weaponType: 'nature_staff', element: 'nature',
    attackDescriptions: {
      normal: '世界樹之杖召喚大地之力，根莖從地面竄出攻擊目標',
      critical: '世界樹的意志覺醒，自然的原初之力爆發！',
      miss: '大地的力量在腳下湧動，卻未能觸及遠方的目標',
      kill: '世界樹的審判降臨，目標被自然之力分解歸於大地！',
    },
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

  slime_gel: {
    id: 'slime_gel', name: '史萊姆凝膠', type: 'material',
    description: '從史萊姆身上取得的黏稠凝膠，可用於煉金。', buyPrice: 0, sellPrice: 5,
    stackable: true, maxStack: 99, levelReq: 1,
  },
  rabbit_fur: {
    id: 'rabbit_fur', name: '兔毛', type: 'material',
    description: '柔軟的野兔毛皮。', buyPrice: 0, sellPrice: 8,
    stackable: true, maxStack: 99, levelReq: 1,
  },
  rabbit_meat: {
    id: 'rabbit_meat', name: '兔肉', type: 'material',
    description: '新鮮的野兔肉，可以烹飪。', buyPrice: 0, sellPrice: 6,
    stackable: true, maxStack: 99, levelReq: 1,
  },
  wolf_fang: {
    id: 'wolf_fang', name: '狼牙', type: 'material',
    description: '鋒利的狼牙，可用於製作武器。', buyPrice: 0, sellPrice: 12,
    stackable: true, maxStack: 99, levelReq: 1,
  },
  snake_venom: {
    id: 'snake_venom', name: '蛇毒', type: 'material',
    description: '萃取的蛇毒液，煉金術材料。', buyPrice: 0, sellPrice: 15,
    stackable: true, maxStack: 99, levelReq: 1,
  },
  snake_skin: {
    id: 'snake_skin', name: '蛇皮', type: 'material',
    description: '完整的蛇皮，可用於製作護具。', buyPrice: 0, sellPrice: 18,
    stackable: true, maxStack: 99, levelReq: 1,
  },
  shadow_pelt: {
    id: 'shadow_pelt', name: '暗影狼皮', type: 'material',
    description: '暗影狼的漆黑毛皮，蘊含暗影之力。', buyPrice: 0, sellPrice: 30,
    stackable: true, maxStack: 99, levelReq: 1,
  },
  spider_silk: {
    id: 'spider_silk', name: '蜘蛛絲', type: 'material',
    description: '堅韌的巨型蜘蛛絲，可用於編織。', buyPrice: 0, sellPrice: 20,
    stackable: true, maxStack: 99, levelReq: 1,
  },
  spider_venom: {
    id: 'spider_venom', name: '蜘蛛毒液', type: 'material',
    description: '巨型蜘蛛的毒液，劇毒煉金材料。', buyPrice: 0, sellPrice: 25,
    stackable: true, maxStack: 99, levelReq: 1,
  },
  spider_eye: {
    id: 'spider_eye', name: '蜘蛛眼', type: 'material',
    description: '巨型蜘蛛的複眼，稀有煉金素材。', buyPrice: 0, sellPrice: 35,
    stackable: true, maxStack: 99, levelReq: 1,
  },
  ancient_bark: {
    id: 'ancient_bark', name: '古樹皮', type: 'material',
    description: '古老樹精的樹皮，蘊含自然之力。', buyPrice: 0, sellPrice: 22,
    stackable: true, maxStack: 99, levelReq: 1,
  },
  nature_crystal: {
    id: 'nature_crystal', name: '自然水晶', type: 'material',
    description: '蘊含自然之力的水晶，稀有魔法材料。', buyPrice: 0, sellPrice: 50,
    stackable: true, maxStack: 99, levelReq: 1,
  },
  treant_sap: {
    id: 'treant_sap', name: '樹精樹液', type: 'material',
    description: '樹精體內的魔力樹液，可用於煉金。', buyPrice: 0, sellPrice: 20,
    stackable: true, maxStack: 99, levelReq: 1,
  },
  alpha_fang: {
    id: 'alpha_fang', name: '狼王之牙', type: 'material',
    description: '暗影狼王的獠牙，蘊含強大的暗影之力。', buyPrice: 0, sellPrice: 80,
    stackable: true, maxStack: 99, levelReq: 1,
  },
  crystal_scale: {
    id: 'crystal_scale', name: '水晶鱗片', type: 'material',
    description: '水晶蜥蜴的鱗片，折射著光芒。', buyPrice: 0, sellPrice: 35,
    stackable: true, maxStack: 99, levelReq: 1,
  },
  ice_crystal: {
    id: 'ice_crystal', name: '冰晶', type: 'material',
    description: '永不融化的冰晶，冰屬性鍛造素材。', buyPrice: 0, sellPrice: 45,
    stackable: true, maxStack: 99, levelReq: 1,
  },
  echo_crystal: {
    id: 'echo_crystal', name: '迴音水晶', type: 'material',
    description: '能回響聲波的特殊水晶。', buyPrice: 0, sellPrice: 30,
    stackable: true, maxStack: 99, levelReq: 1,
  },
  gargoyle_stone: {
    id: 'gargoyle_stone', name: '石像鬼之石', type: 'material',
    description: '石像鬼身上的特殊石材，異常堅硬。', buyPrice: 0, sellPrice: 28,
    stackable: true, maxStack: 99, levelReq: 1,
  },
  stone_heart: {
    id: 'stone_heart', name: '石之心', type: 'material',
    description: '石像鬼的核心，稀有鍛造材料。', buyPrice: 0, sellPrice: 60,
    stackable: true, maxStack: 99, levelReq: 1,
  },
  gargoyle_wing: {
    id: 'gargoyle_wing', name: '石像鬼之翼', type: 'material',
    description: '石像鬼的翅膀碎片。', buyPrice: 0, sellPrice: 25,
    stackable: true, maxStack: 99, levelReq: 1,
  },
  crystal_core: {
    id: 'crystal_core', name: '水晶核心', type: 'material',
    description: '純淨的魔法水晶核心，頂級鍛造素材。', buyPrice: 0, sellPrice: 100,
    stackable: true, maxStack: 99, levelReq: 1,
  },
  guardian_crystal: {
    id: 'guardian_crystal', name: '守護者水晶', type: 'material',
    description: '水晶守衛的核心結晶，傳說級素材。', buyPrice: 0, sellPrice: 200,
    stackable: true, maxStack: 99, levelReq: 1,
  },
  bandit_dagger: {
    id: 'bandit_dagger', name: '盜賊匕首', type: 'weapon',
    description: '盜賊使用的粗糙匕首。', buyPrice: 0, sellPrice: 30,
    stackable: false, maxStack: 1, levelReq: 5,
    equipSlot: 'weapon', stats: { atk: 8, dex: 1 },
  },
  stolen_pouch: {
    id: 'stolen_pouch', name: '贓物袋', type: 'material',
    description: '從盜賊身上搜到的贓物袋，裡面裝著金幣和雜物。', buyPrice: 0, sellPrice: 20,
    stackable: true, maxStack: 99, levelReq: 1,
  },
  shadow_cloak: {
    id: 'shadow_cloak', name: '暗影斗篷', type: 'armor',
    description: '以暗影狼王的毛皮製成的斗篷，能隱匿身形。', buyPrice: 0, sellPrice: 300,
    stackable: false, maxStack: 1, levelReq: 18,
    equipSlot: 'body', stats: { def: 15, mdef: 10, dex: 5, dodgeRate: 5 },
  },
  shadow_blade: {
    id: 'shadow_blade', name: '暗影之刃', type: 'weapon',
    description: '暗影狼王領地深處的暗影之刃，漆黑的劍身吞噬光線。', buyPrice: 0, sellPrice: 400,
    stackable: false, maxStack: 1, levelReq: 18,
    equipSlot: 'weapon', stats: { atk: 28, dex: 4, critRate: 3 }, element: 'dark',
  },
  crystal_armor: {
    id: 'crystal_armor', name: '水晶鎧甲', type: 'armor',
    description: '由純淨水晶鍛造的鎧甲，折射出璀璨光芒。', buyPrice: 0, sellPrice: 500,
    stackable: false, maxStack: 1, levelReq: 28,
    equipSlot: 'body', stats: { def: 30, mdef: 15, hp: 60, vit: 4 },
  },
  crystal_blade: {
    id: 'crystal_blade', name: '水晶之劍', type: 'weapon',
    description: '由純淨水晶凝聚而成的長劍，劍身透明如冰。', buyPrice: 0, sellPrice: 600,
    stackable: false, maxStack: 1, levelReq: 28,
    equipSlot: 'weapon', stats: { atk: 42, int: 4, critRate: 3 }, element: 'ice',
  },
  toad_skin: {
    id: 'toad_skin', name: '蟾蜍皮', type: 'material',
    description: '毒蛙的表皮，佈滿疣瘤但韌性極佳。', buyPrice: 0, sellPrice: 18,
    stackable: true, maxStack: 99, levelReq: 1,
  },
  poison_gland: {
    id: 'poison_gland', name: '毒腺', type: 'material',
    description: '毒蛙的毒腺，製作高級毒藥的珍貴原料。', buyPrice: 0, sellPrice: 30,
    stackable: true, maxStack: 99, levelReq: 1,
  },
  dark_bark: {
    id: 'dark_bark', name: '暗黑樹皮', type: 'material',
    description: '被暗影侵蝕的樹皮，散發著紫色光芒。', buyPrice: 0, sellPrice: 25,
    stackable: true, maxStack: 99, levelReq: 1,
  },
  cursed_sap: {
    id: 'cursed_sap', name: '詛咒樹液', type: 'material',
    description: '被暗影污染的樹液，危險的煉金材料。', buyPrice: 0, sellPrice: 35,
    stackable: true, maxStack: 99, levelReq: 1,
  },
  golem_fragment: {
    id: 'golem_fragment', name: '魔像碎片', type: 'material',
    description: '水晶魔像的碎片，仍殘留著魔力。', buyPrice: 0, sellPrice: 28,
    stackable: true, maxStack: 99, levelReq: 1,
  },
  spectral_essence: {
    id: 'spectral_essence', name: '幽靈精華', type: 'material',
    description: '幽靈騎士消散後凝聚的精華，蘊含亡靈之力。', buyPrice: 0, sellPrice: 45,
    stackable: true, maxStack: 99, levelReq: 1,
  },
  knight_sigil: {
    id: 'knight_sigil', name: '騎士徽記', type: 'material',
    description: '地底王國騎士團的徽記，散發著微弱的靈魂之光。', buyPrice: 0, sellPrice: 60,
    stackable: true, maxStack: 99, levelReq: 1,
  },
  phantom_blade: {
    id: 'phantom_blade', name: '幻影之劍', type: 'weapon',
    description: '幽靈騎士的佩劍，劍身半透明，散發冥火。', buyPrice: 0, sellPrice: 350,
    stackable: false, maxStack: 1, levelReq: 23,
    equipSlot: 'weapon', stats: { atk: 35, int: 3, critRate: 4 }, element: 'dark',
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

  // ============ 增益藥水 ============
  strength_potion: {
    id: 'strength_potion', name: '力量藥水', type: 'consumable',
    description: '飲用後攻擊力提升10%，持續5回合。', buyPrice: 80, sellPrice: 40,
    stackable: true, maxStack: 99, levelReq: 5,
    useEffect: { type: 'buff_atk', value: 10, duration: 5 },
  },
  wisdom_potion: {
    id: 'wisdom_potion', name: '智慧藥水', type: 'consumable',
    description: '飲用後魔法攻擊力提升10%，持續5回合。', buyPrice: 80, sellPrice: 40,
    stackable: true, maxStack: 99, levelReq: 5,
    useEffect: { type: 'buff_matk', value: 10, duration: 5 },
  },
  agility_potion: {
    id: 'agility_potion', name: '敏捷藥水', type: 'consumable',
    description: '飲用後迴避率提升15%，持續5回合。', buyPrice: 100, sellPrice: 50,
    stackable: true, maxStack: 99, levelReq: 5,
    useEffect: { type: 'buff_dodge', value: 15, duration: 5 },
  },
  fortitude_potion: {
    id: 'fortitude_potion', name: '堅韌藥水', type: 'consumable',
    description: '飲用後防禦力提升10%，持續5回合。', buyPrice: 80, sellPrice: 40,
    stackable: true, maxStack: 99, levelReq: 5,
    useEffect: { type: 'buff_def', value: 10, duration: 5 },
  },
  luck_potion: {
    id: 'luck_potion', name: '幸運藥水', type: 'consumable',
    description: '飲用後暴擊率提升10%，持續5回合。', buyPrice: 100, sellPrice: 50,
    stackable: true, maxStack: 99, levelReq: 5,
    useEffect: { type: 'buff_crit', value: 10, duration: 5 },
  },
  allstat_potion: {
    id: 'allstat_potion', name: '全能藥水', type: 'consumable',
    description: '飲用後全能力提升5%，持續5回合。', buyPrice: 200, sellPrice: 100,
    stackable: true, maxStack: 99, levelReq: 10,
    useEffect: { type: 'buff_all', value: 5, duration: 5 },
  },

  // ============ 傳送道具 ============
  return_scroll: {
    id: 'return_scroll', name: '回城卷軸', type: 'consumable',
    description: '使用後傳送回新手村。', buyPrice: 50, sellPrice: 25,
    stackable: true, maxStack: 99, levelReq: 1,
    useEffect: { type: 'teleport_home', value: 0 },
  },
  teleport_stone: {
    id: 'teleport_stone', name: '傳送石', type: 'consumable',
    description: '傳送至已標記的地點。', buyPrice: 150, sellPrice: 75,
    stackable: true, maxStack: 99, levelReq: 5,
    useEffect: { type: 'teleport_mark', value: 0 },
  },
  memory_crystal: {
    id: 'memory_crystal', name: '記憶水晶', type: 'consumable',
    description: '記錄當前位置，配合傳送石使用。', buyPrice: 200, sellPrice: 100,
    stackable: true, maxStack: 99, levelReq: 5,
    useEffect: { type: 'mark_location', value: 0 },
  },

  // ============ 食物/料理 ============
  grilled_meat: {
    id: 'grilled_meat', name: '烤肉', type: 'consumable',
    description: '香噴噴的烤肉，持續回復HP3回合。', buyPrice: 30, sellPrice: 15,
    stackable: true, maxStack: 99, levelReq: 1,
    useEffect: { type: 'food_hp', value: 15, duration: 3 },
  },
  stew: {
    id: 'stew', name: '燉湯', type: 'consumable',
    description: '營養豐富的燉湯，持續回復HP與資源3回合。', buyPrice: 60, sellPrice: 30,
    stackable: true, maxStack: 99, levelReq: 5,
    useEffect: { type: 'food_hp_resource', value: 10, duration: 3 },
  },
  adventure_bento: {
    id: 'adventure_bento', name: '冒險者便當', type: 'consumable',
    description: '冒險者特製便當，回復HP並提升攻擊力3%。', buyPrice: 80, sellPrice: 40,
    stackable: true, maxStack: 99, levelReq: 5,
    useEffect: { type: 'food_atk', value: 3, duration: 5 },
  },
  magic_dessert: {
    id: 'magic_dessert', name: '魔法甜點', type: 'consumable',
    description: '蘊含魔力的甜點，回復資源並提升魔攻3%。', buyPrice: 80, sellPrice: 40,
    stackable: true, maxStack: 99, levelReq: 5,
    useEffect: { type: 'food_matk', value: 3, duration: 5 },
  },
  elf_bread: {
    id: 'elf_bread', name: '精靈麵包', type: 'consumable',
    description: '精靈族秘製的麵包，回復30%HP和30%資源。', buyPrice: 120, sellPrice: 60,
    stackable: true, maxStack: 99, levelReq: 10,
    useEffect: { type: 'food_restore', value: 30 },
  },
  feast: {
    id: 'feast', name: '宴會大餐', type: 'consumable',
    description: '豪華的宴會大餐，全能力提升3%持續10回合。', buyPrice: 300, sellPrice: 150,
    stackable: true, maxStack: 99, levelReq: 15,
    useEffect: { type: 'food_feast', value: 3, duration: 10 },
  },

  // ============ 強化素材 ============
  normal_enhance_stone: {
    id: 'normal_enhance_stone', name: '普通強化石', type: 'material',
    description: '用於裝備強化+1~+10的基礎強化石。', buyPrice: 100, sellPrice: 50,
    stackable: true, maxStack: 99, levelReq: 1,
  },
  advanced_enhance_stone: {
    id: 'advanced_enhance_stone', name: '高級強化石', type: 'material',
    description: '用於裝備強化+11~+15的高級強化石。', buyPrice: 500, sellPrice: 250,
    stackable: true, maxStack: 99, levelReq: 1,
  },
  blessing_scroll: {
    id: 'blessing_scroll', name: '祝福卷軸', type: 'material',
    description: '強化失敗時防止裝備被破壞。', buyPrice: 300, sellPrice: 150,
    stackable: true, maxStack: 99, levelReq: 1,
  },
  enhance_lucky_charm: {
    id: 'enhance_lucky_charm', name: '幸運符', type: 'material',
    description: '提升強化成功率10%。', buyPrice: 200, sellPrice: 100,
    stackable: true, maxStack: 99, levelReq: 1,
  },

  // ============ 寶箱與鑰匙 ============
  bronze_chest: {
    id: 'bronze_chest', name: '銅寶箱', type: 'consumable',
    description: '可能包含普通或罕見物品的銅寶箱。', buyPrice: 200, sellPrice: 100,
    stackable: true, maxStack: 99, levelReq: 1,
    useEffect: { type: 'open_chest_bronze', value: 0 },
  },
  bronze_key: {
    id: 'bronze_key', name: '銅鑰匙', type: 'material',
    description: '開啟銅寶箱的鑰匙。', buyPrice: 50, sellPrice: 25,
    stackable: true, maxStack: 99, levelReq: 1,
  },
  silver_chest: {
    id: 'silver_chest', name: '銀寶箱', type: 'consumable',
    description: '可能包含稀有物品的銀寶箱。', buyPrice: 500, sellPrice: 250,
    stackable: true, maxStack: 99, levelReq: 10,
    useEffect: { type: 'open_chest_silver', value: 0 },
  },
  silver_key: {
    id: 'silver_key', name: '銀鑰匙', type: 'material',
    description: '開啟銀寶箱的鑰匙。', buyPrice: 150, sellPrice: 75,
    stackable: true, maxStack: 99, levelReq: 10,
  },
  gold_chest: {
    id: 'gold_chest', name: '金寶箱', type: 'consumable',
    description: '可能包含史詩或傳說物品的金寶箱。', buyPrice: 1500, sellPrice: 750,
    stackable: true, maxStack: 99, levelReq: 20,
    useEffect: { type: 'open_chest_gold', value: 0 },
  },
  gold_key: {
    id: 'gold_key', name: '金鑰匙', type: 'material',
    description: '開啟金寶箱的鑰匙。', buyPrice: 500, sellPrice: 250,
    stackable: true, maxStack: 99, levelReq: 20,
  },

  // ============ 製作素材 ============
  iron_ore: {
    id: 'iron_ore', name: '鐵礦', type: 'material',
    description: '基礎金屬礦石，用於鍛造裝備。', buyPrice: 20, sellPrice: 10,
    stackable: true, maxStack: 99, levelReq: 1,
  },
  mithril_ore: {
    id: 'mithril_ore', name: '秘銀礦', type: 'material',
    description: '稀有的秘銀礦石，高級鍛造材料。', buyPrice: 200, sellPrice: 100,
    stackable: true, maxStack: 99, levelReq: 15,
  },
  elf_wood: {
    id: 'elf_wood', name: '精靈木', type: 'material',
    description: '蘊含魔力的精靈族木材。', buyPrice: 150, sellPrice: 75,
    stackable: true, maxStack: 99, levelReq: 10,
  },
  spider_silk_cloth: {
    id: 'spider_silk_cloth', name: '蜘蛛絲布', type: 'material',
    description: '用蜘蛛絲織成的輕薄布料。', buyPrice: 80, sellPrice: 40,
    stackable: true, maxStack: 99, levelReq: 5,
  },
  dragon_scale: {
    id: 'dragon_scale', name: '龍鱗片', type: 'material',
    description: '龍族掉落的堅硬鱗片，頂級鍛造材料。', buyPrice: 500, sellPrice: 250,
    stackable: true, maxStack: 99, levelReq: 25,
  },
  magic_crystal: {
    id: 'magic_crystal', name: '魔力結晶', type: 'material',
    description: '凝聚的純淨魔力結晶，魔法道具材料。', buyPrice: 120, sellPrice: 60,
    stackable: true, maxStack: 99, levelReq: 10,
  },
  beast_hide: {
    id: 'beast_hide', name: '獸皮', type: 'material',
    description: '野獸的厚實皮革，皮甲製作材料。', buyPrice: 30, sellPrice: 15,
    stackable: true, maxStack: 99, levelReq: 1,
  },
  ancient_fragment: {
    id: 'ancient_fragment', name: '古代碎片', type: 'material',
    description: '來自古代遺跡的神秘碎片。', buyPrice: 300, sellPrice: 150,
    stackable: true, maxStack: 99, levelReq: 20,
  },

  // ============ 戰鬥道具 ============
  smoke_bomb: {
    id: 'smoke_bomb', name: '煙霧彈', type: 'consumable',
    description: '施放煙霧，逃跑成功率提升50%。', buyPrice: 40, sellPrice: 20,
    stackable: true, maxStack: 99, levelReq: 1,
    useEffect: { type: 'combat_escape', value: 50 },
  },
  flash_bomb: {
    id: 'flash_bomb', name: '閃光彈', type: 'consumable',
    description: '閃光致盲敵人，下回合命中率降低30%。', buyPrice: 60, sellPrice: 30,
    stackable: true, maxStack: 99, levelReq: 5,
    useEffect: { type: 'combat_blind', value: 30, duration: 1 },
  },
  trap_item: {
    id: 'trap_item', name: '陷阱', type: 'consumable',
    description: '設置陷阱，使敵人下回合無法行動。', buyPrice: 80, sellPrice: 40,
    stackable: true, maxStack: 99, levelReq: 10,
    useEffect: { type: 'combat_stun', value: 1, duration: 1 },
  },
  throwing_knife: {
    id: 'throwing_knife', name: '投擲短刀', type: 'consumable',
    description: '投擲短刀，造成50點固定傷害。', buyPrice: 25, sellPrice: 12,
    stackable: true, maxStack: 99, levelReq: 1,
    useEffect: { type: 'combat_damage', value: 50 },
  },

  // ============ 收藏品 ============
  ancient_coin: {
    id: 'ancient_coin', name: '古代硬幣', type: 'material',
    description: '刻有古代文字的硬幣，可高價賣出。', buyPrice: 0, sellPrice: 500,
    stackable: true, maxStack: 99, levelReq: 1,
  },
  rare_fossil: {
    id: 'rare_fossil', name: '稀有化石', type: 'material',
    description: '珍貴的遠古生物化石，收藏家高價收購。', buyPrice: 0, sellPrice: 800,
    stackable: true, maxStack: 99, levelReq: 1,
  },
  elf_feather: {
    id: 'elf_feather', name: '精靈羽毛', type: 'material',
    description: '精靈族的羽毛，散發淡淡光芒。', buyPrice: 0, sellPrice: 1200,
    stackable: true, maxStack: 99, levelReq: 1,
  },
  dragon_dust: {
    id: 'dragon_dust', name: '龍之鱗粉', type: 'material',
    description: '龍族鱗片磨成的粉末，極為珍貴。', buyPrice: 0, sellPrice: 2000,
    stackable: true, maxStack: 99, levelReq: 1,
  },
  ancient_runestone: {
    id: 'ancient_runestone', name: '遠古符文石', type: 'material',
    description: '刻有遠古符文的石頭，蘊含神秘力量。', buyPrice: 0, sellPrice: 3000,
    stackable: true, maxStack: 99, levelReq: 1,
  },

  // ============ 怪物掉落素材 ============
  crab_shell: {
    id: 'crab_shell', name: '海蟹殼', type: 'material',
    description: '堅硬的海蟹甲殼，可用於防具製作。', buyPrice: 0, sellPrice: 8,
    stackable: true, maxStack: 99, levelReq: 1,
  },
  salamander_tail: {
    id: 'salamander_tail', name: '火蜥蜴尾', type: 'material',
    description: '火蜥蜴的尾巴，蘊含火焰之力。', buyPrice: 0, sellPrice: 20,
    stackable: true, maxStack: 99, levelReq: 1,
  },
  ice_core: {
    id: 'ice_core', name: '冰元素核心', type: 'material',
    description: '冰元素生物的核心，寒氣逼人。', buyPrice: 0, sellPrice: 35,
    stackable: true, maxStack: 99, levelReq: 1,
  },
  rock_fragment: {
    id: 'rock_fragment', name: '岩石碎片', type: 'material',
    description: '岩石怪物碎裂的石片。', buyPrice: 0, sellPrice: 6,
    stackable: true, maxStack: 99, levelReq: 1,
  },
  fishman_fin: {
    id: 'fishman_fin', name: '魚人鰭', type: 'material',
    description: '魚人族的鰭，煉金材料。', buyPrice: 0, sellPrice: 12,
    stackable: true, maxStack: 99, levelReq: 1,
  },
  spider_venom_sac: {
    id: 'spider_venom_sac', name: '蜘蛛毒囊', type: 'material',
    description: '巨型蜘蛛的毒囊，可提煉毒藥。', buyPrice: 0, sellPrice: 18,
    stackable: true, maxStack: 99, levelReq: 1,
  },
  snowwolf_fur: {
    id: 'snowwolf_fur', name: '雪狼毛', type: 'material',
    description: '雪狼的白色皮毛，保暖性極佳。', buyPrice: 0, sellPrice: 22,
    stackable: true, maxStack: 99, levelReq: 1,
  },
  lava_fragment: {
    id: 'lava_fragment', name: '熔岩碎片', type: 'material',
    description: '熔岩怪物留下的灼熱碎片。', buyPrice: 0, sellPrice: 28,
    stackable: true, maxStack: 99, levelReq: 1,
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
