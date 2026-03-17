// 物品資料

import type { ItemDef, ItemRarity } from '../types/item.js';

export const ITEM_DEFS: Record<string, ItemDef> = {
  // ============ 武器 ============
  wooden_sword: {
    id: 'wooden_sword', name: '木劍', type: 'weapon',
    description: '一把用硬木削成的練習劍，劍身佈滿刻痕與磨損的痕跡。雖然無法造成致命傷害，卻是每位冒險者踏上旅途時的第一位夥伴。握柄處纏著粗糙的麻繩，勉強能防滑。', buyPrice: 50, sellPrice: 25,
    stackable: false, maxStack: 1, levelReq: 1,
    equipSlot: 'weapon', stats: { atk: 5 },
  },
  iron_sword: {
    id: 'iron_sword', name: '鐵劍', type: 'weapon',
    description: '一把由鐵匠精心鍛造的長劍，劍刃泛著冷冽的銀光。劍身筆直而厚實，揮動時發出低沉的破風聲。雖不華麗，卻是戰場上值得信賴的利器。', buyPrice: 200, sellPrice: 100,
    stackable: false, maxStack: 1, levelReq: 5,
    equipSlot: 'weapon', stats: { atk: 12 },
  },
  steel_sword: {
    id: 'steel_sword', name: '鋼劍', type: 'weapon',
    description: '以高純度鋼鐵反覆鍛打而成的長劍，劍身隱約可見鍛造時留下的波紋。握在手中沉穩有力，劍尖劃過空氣時會發出銳利的嗡鳴。只有真正的劍士才能駕馭它的重量。', buyPrice: 500, sellPrice: 250,
    stackable: false, maxStack: 1, levelReq: 10,
    classReq: ['swordsman', 'knight', 'berserker', 'sword_saint'],
    equipSlot: 'weapon', stats: { atk: 22 },
  },
  flame_sword: {
    id: 'flame_sword', name: '炎之劍', type: 'weapon',
    description: '劍身永遠燃燒著不滅之焰的魔法劍，灼熱的氣息讓周圍空氣微微扭曲。劍柄以耐火的龍骨製成，握持時能感受到火焰脈動的節奏。傳說這把劍的火焰來自遠古火山的核心。', buyPrice: 1500, sellPrice: 750,
    stackable: false, maxStack: 1, levelReq: 20,
    classReq: ['swordsman', 'knight', 'berserker', 'sword_saint'],
    equipSlot: 'weapon', stats: { atk: 35, matk: 10 }, element: 'fire',
  },
  apprentice_staff: {
    id: 'apprentice_staff', name: '學徒法杖', type: 'weapon',
    description: '一根用白樺木製成的簡易法杖，頂端嵌著一顆暗淡的魔力結晶。雖然導引魔力的效率不高，但對於初學魔法的人來說已經足夠。杖身上刻著基礎的魔法迴路紋路。', buyPrice: 50, sellPrice: 25,
    stackable: false, maxStack: 1, levelReq: 1,
    equipSlot: 'weapon', stats: { matk: 8 },
  },
  oak_staff: {
    id: 'oak_staff', name: '橡木法杖', type: 'weapon',
    description: '以百年橡木精心雕刻而成的法杖，木質紋理間閃爍著淡藍色的魔力光芒。杖頂鑲嵌的水晶球隨施法者的意念微微旋轉，是中階法師們夢寐以求的法器。', buyPrice: 300, sellPrice: 150,
    stackable: false, maxStack: 1, levelReq: 10,
    classReq: ['mage', 'archmage', 'warlock', 'chronomancer'],
    equipSlot: 'weapon', stats: { matk: 20, mp: 20 },
  },
  crystal_staff: {
    id: 'crystal_staff', name: '水晶法杖', type: 'weapon',
    description: '杖身由純淨水晶凝聚而成，透明的晶體內部流淌著湛藍色的魔力之流。持杖者能感受到源源不斷的魔力湧入指尖，彷彿與世界的魔力脈動合而為一。', buyPrice: 1200, sellPrice: 600,
    stackable: false, maxStack: 1, levelReq: 20,
    classReq: ['mage', 'archmage', 'warlock', 'chronomancer'],
    equipSlot: 'weapon', stats: { matk: 35, mp: 40, int: 3 },
  },
  short_bow: {
    id: 'short_bow', name: '短弓', type: 'weapon',
    description: '一把輕巧的短弓，弓身由彈性極佳的柳木彎成。弓弦細而堅韌，拉滿時發出低沉的嗡鳴。適合在近距離快速射擊，是新手獵人的最佳選擇。', buyPrice: 50, sellPrice: 25,
    stackable: false, maxStack: 1, levelReq: 1,
    equipSlot: 'weapon', stats: { atk: 6, dex: 1 },
  },
  long_bow: {
    id: 'long_bow', name: '長弓', type: 'weapon',
    description: '以紫杉木精製的長弓，弓身修長而優雅，散發著淡淡的木質清香。強勁的弓力能讓箭矢穿越百步，在風中劃出一道完美的弧線。', buyPrice: 350, sellPrice: 175,
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
    description: '一根樸素的木製權杖，頂端雕刻著簡單的祈禱符文。手握權杖時，能感受到一股溫暖而平靜的力量緩緩流過全身。是初入教會的祭司最先獲得的聖具。', buyPrice: 50, sellPrice: 25,
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
    description: '一頂用獸皮縫製的簡單帽子，內襯填充了柔軟的棉絮。雖然防護力有限，但能遮擋風雨，是旅途中不可或缺的裝備。', buyPrice: 30, sellPrice: 15,
    stackable: false, maxStack: 1, levelReq: 1,
    equipSlot: 'head', stats: { def: 2 },
  },
  iron_helm: {
    id: 'iron_helm', name: '鐵盔', type: 'armor',
    description: '一頂沉重的鐵製頭盔，盔面上的鉚釘在火光下閃爍。內部的皮革襯墊能有效緩衝衝擊力，即使被重擊也能保護要害。佩戴時視野會略微受限。', buyPrice: 200, sellPrice: 100,
    stackable: false, maxStack: 1, levelReq: 10,
    equipSlot: 'head', stats: { def: 6, hp: 20 },
  },
  mage_hat: {
    id: 'mage_hat', name: '法師帽', type: 'armor',
    description: '一頂深藍色的尖頂法師帽，帽身上以銀線繡著複雜的魔法陣。帽緣微微發光的符文能夠增幅施法者的魔力，讓咒語更加穩定而強大。', buyPrice: 200, sellPrice: 100,
    stackable: false, maxStack: 1, levelReq: 10,
    equipSlot: 'head', stats: { mdef: 5, mp: 25 },
  },

  // ============ 防具 - 身體 ============
  cloth_armor: {
    id: 'cloth_armor', name: '布甲', type: 'armor',
    description: '用厚實的亞麻布縫製的簡易護甲，雖然無法抵擋利刃，但至少能防止擦傷和蟲咬。穿著輕便舒適，是每位新手冒險者的標準裝備。', buyPrice: 40, sellPrice: 20,
    stackable: false, maxStack: 1, levelReq: 1,
    equipSlot: 'body', stats: { def: 3 },
  },
  leather_armor: {
    id: 'leather_armor', name: '皮甲', type: 'armor',
    description: '以鞣製皮革精心縫製的護甲，表面塗有一層防水蠟。皮革的柔韌性讓穿著者能靈活行動，同時提供足以抵擋爪擊的防護力。', buyPrice: 150, sellPrice: 75,
    stackable: false, maxStack: 1, levelReq: 5,
    equipSlot: 'body', stats: { def: 6, dodgeRate: 1 },
  },
  chain_mail: {
    id: 'chain_mail', name: '鎖子甲', type: 'armor',
    description: '數千個精鋼鎖環交錯編織而成的護甲，環環相扣，堅不可摧。穿在身上時會發出細碎的金屬碰撞聲，是中階戰士們最常選用的防具。', buyPrice: 400, sellPrice: 200,
    stackable: false, maxStack: 1, levelReq: 10,
    equipSlot: 'body', stats: { def: 12, hp: 30 },
  },
  plate_armor: {
    id: 'plate_armor', name: '板甲', type: 'armor',
    description: '以厚重的鋼板鍛造而成的全身鎧甲，每一片甲板都經過反覆鍛打和淬火處理。穿上它宛如一座移動的鐵壁堡壘，即使最兇猛的野獸也難以突破它的防禦。', buyPrice: 1000, sellPrice: 500,
    stackable: false, maxStack: 1, levelReq: 20,
    classReq: ['swordsman', 'knight', 'berserker', 'sword_saint'],
    equipSlot: 'body', stats: { def: 25, hp: 80, mdef: 5 },
  },
  mage_robe: {
    id: 'mage_robe', name: '法師長袍', type: 'armor',
    description: '以魔力絲線織就的深紫色長袍，布料輕薄如蟬翼卻堅韌異常。袍上的符文在施法時會微微發光，能大幅增強魔力的流動與凝聚。', buyPrice: 400, sellPrice: 200,
    stackable: false, maxStack: 1, levelReq: 10,
    equipSlot: 'body', stats: { mdef: 8, mp: 40, int: 2 },
  },

  // ============ 防具 - 手部 ============
  leather_gloves: {
    id: 'leather_gloves', name: '皮手套', type: 'armor',
    description: '用柔軟的鹿皮縫製的手套，掌心處額外加厚了一層皮革。戴上後握劍更加穩固，手指的靈活度也不受影響。', buyPrice: 25, sellPrice: 12,
    stackable: false, maxStack: 1, levelReq: 1,
    equipSlot: 'hands', stats: { def: 1, atk: 1 },
  },
  iron_gauntlets: {
    id: 'iron_gauntlets', name: '鐵護手', type: 'armor',
    description: '以鐵片覆蓋的厚實護手，指關節處的鉚釘既是裝飾也是武器。戴上後拳頭猶如鐵錘，能在近身搏鬥中給予敵人痛擊。', buyPrice: 180, sellPrice: 90,
    stackable: false, maxStack: 1, levelReq: 10,
    equipSlot: 'hands', stats: { def: 4, atk: 3 },
  },

  // ============ 防具 - 腳部 ============
  leather_boots: {
    id: 'leather_boots', name: '皮靴', type: 'armor',
    description: '用厚實的牛皮縫製的靴子，鞋底釘著防滑的鐵釘。穿上後行走在泥濘的路上也不會打滑，是冒險者出行的必備品。', buyPrice: 25, sellPrice: 12,
    stackable: false, maxStack: 1, levelReq: 1,
    equipSlot: 'feet', stats: { def: 1, dodgeRate: 1 },
  },
  iron_boots: {
    id: 'iron_boots', name: '鐵靴', type: 'armor',
    description: '以鐵板包覆的重型戰靴，每一步都會在地面留下深深的印記。沉重的鐵靴讓穿著者穩如泰山，即使面對強力衝擊也不會輕易倒下。', buyPrice: 180, sellPrice: 90,
    stackable: false, maxStack: 1, levelReq: 10,
    equipSlot: 'feet', stats: { def: 4, hp: 15 },
  },
  swift_boots: {
    id: 'swift_boots', name: '疾風靴', type: 'armor',
    description: '以風精靈絲線縫製的輕靴，穿上後腳步輕盈得彷彿踩在雲端。靴底刻著加速符文，奔跑時能感受到風在腳下托起身體。', buyPrice: 300, sellPrice: 150,
    stackable: false, maxStack: 1, levelReq: 15,
    equipSlot: 'feet', stats: { def: 2, dex: 3, dodgeRate: 3 },
  },

  // ============ 飾品 ============
  wooden_ring: {
    id: 'wooden_ring', name: '木戒指', type: 'accessory',
    description: '用橡木雕刻的素樸戒指，表面打磨得光滑溫潤。雖然沒有華麗的裝飾，但佩戴時總覺得好運會降臨。或許只是心理作用也說不定。', buyPrice: 20, sellPrice: 10,
    stackable: false, maxStack: 1, levelReq: 1,
    equipSlot: 'accessory', stats: { luk: 1 },
  },
  lucky_charm: {
    id: 'lucky_charm', name: '幸運護符', type: 'accessory',
    description: '一枚古老的護符，以四葉草形狀的翡翠為主體，周圍鑲嵌著細碎的星光石。據說它曾庇護過一位傳奇冒險者度過無數劫難，散發著令人安心的淡綠色光芒。', buyPrice: 500, sellPrice: 250,
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

  // ============ 特殊武器 - 高階精英掉落 (Lv 40-60) ============

  demon_lord_sword: {
    id: 'demon_lord_sword', name: '魔王之劍', type: 'weapon',
    description: '歷代魔王的力量結晶，漆黑如夜的刀身上流淌著暗紅色的魔力脈絡。揮舞時能聽到無數亡魂的哀嚎，每一次斬擊都伴隨著地獄之火。只有征服了魔王的勇者才配握住這把劍。',
    buyPrice: 0, sellPrice: 8000,
    stackable: false, maxStack: 1, levelReq: 40,
    classReq: ['swordsman', 'sword_saint', 'berserker'],
    equipSlot: 'weapon', stats: { atk: 52, str: 8, dex: 5, critRate: 5 },
    rarity: 'legendary', weaponType: 'katana', element: 'dark',
    attackDescriptions: {
      normal: '魔王之劍劈出一道漆黑的弧光，暗紅的魔力脈絡在刀身上脈動',
      critical: '地獄之門在劍尖開啟！無數亡魂的哀嚎化為毀滅性的一斬！',
      miss: '暗黑刀氣在空中消散，留下一道灼熱的殘影',
      kill: '魔王之劍將目標斬入地獄，暗紅的魔力將靈魂吞噬殆盡！',
    },
  },

  elder_dragon_fang: {
    id: 'elder_dragon_fang', name: '古龍之牙', type: 'weapon',
    description: '以古龍脫落的獠牙鍛造而成的長槍，槍身散發著遠古龍族的威壓。觸碰槍身就能感受到數千年的龍之力量在其中奔湧，槍尖能輕鬆貫穿最堅硬的龍鱗。',
    buyPrice: 0, sellPrice: 12000,
    stackable: false, maxStack: 1, levelReq: 50,
    classReq: ['swordsman', 'knight', 'sword_saint'],
    equipSlot: 'weapon', stats: { atk: 65, str: 10, vit: 6, critRate: 5 },
    rarity: 'legendary', weaponType: 'spear', element: 'fire',
    attackDescriptions: {
      normal: '古龍之牙呼嘯著刺出，龍族的威壓隨槍尖擴散',
      critical: '遠古巨龍的咆哮從槍尖爆發，龍之力量貫穿了一切防禦！',
      miss: '長槍帶起的龍氣風暴從目標身側掠過，大地為之震顫',
      kill: '古龍之牙將目標釘入大地，數千年的龍之力量在傷口中爆發，化為金紅色的焰柱沖天而起！',
    },
  },

  abyss_eye_staff: {
    id: 'abyss_eye_staff', name: '深淵之眼', type: 'weapon',
    description: '從深淵領主手中奪取的權杖，杖頂鑲嵌著一顆不斷轉動的虛空之眼。它能折射不同維度的能量，甚至短暫地凍結時間之流。持有者能窺視時空的裂縫，獲得超越常理的力量。',
    buyPrice: 0, sellPrice: 18000,
    stackable: false, maxStack: 1, levelReq: 55,
    classReq: ['chronomancer', 'mage', 'archmage', 'warlock'],
    equipSlot: 'weapon', stats: { matk: 72, int: 12, dex: 5, mp: 60, critRate: 4 },
    rarity: 'mythic' as ItemRarity, weaponType: 'hourglass_staff', element: 'dark',
    attackDescriptions: {
      normal: '深淵之眼轉動，從虛空中折射出一道扭曲的毀滅光束',
      critical: '時空在深淵之眼前碎裂！所有維度的力量在同一瞬間擊中目標！',
      miss: '虛空光束穿透了空間的裂縫，消失在另一個維度中',
      kill: '深淵之眼大睜，時間在目標周圍停止——然後空間坍縮，將一切化為虛無！',
    },
  },

  god_of_war_spear: {
    id: 'god_of_war_spear', name: '戰神之槍', type: 'weapon',
    description: '天界至高戰神的神器，由永恆白金和凝固的星光鍛造。槍身散發著灼目的金色光芒，能回應持有者的戰意自動攻擊。傳說這把槍曾在諸神之戰中斬落星辰，是這個世界上最強大的武器。',
    buyPrice: 0, sellPrice: 25000,
    stackable: false, maxStack: 1, levelReq: 60,
    classReq: ['swordsman', 'knight', 'sword_saint', 'berserker'],
    equipSlot: 'weapon', stats: { atk: 85, str: 15, dex: 8, vit: 8, critRate: 6 },
    rarity: 'mythic' as ItemRarity, weaponType: 'spear', element: 'light',
    attackDescriptions: {
      normal: '戰神之槍化為一道金色閃電刺出，神聖的光芒撕裂空氣',
      critical: '神槍回應勇者之心！億萬星辰之力匯聚槍尖，天地為之變色！',
      miss: '金色的槍影劃破虛空，聖光如流星般散落卻未命中',
      kill: '戰神之槍發出最終的神聖審判——金色光柱從天而降，將目標連同大地一起貫穿！萬物在聖光中歸於永恆！',
    },
  },

  // ============ 素材 - 高階區域掉落 ============

  demon_horn: {
    id: 'demon_horn', name: '惡魔之角', type: 'material',
    description: '從魔族身上取得的漆黑角質，散發著微弱的暗黑氣息。',
    buyPrice: 0, sellPrice: 50,
    stackable: true, maxStack: 99, levelReq: 1,
  },
  hellhound_fang: {
    id: 'hellhound_fang', name: '地獄犬牙', type: 'material',
    description: '地獄犬的獠牙，即使脫落仍帶著灼人的熱度。',
    buyPrice: 0, sellPrice: 65,
    stackable: true, maxStack: 99, levelReq: 1,
  },
  dragon_fang: {
    id: 'dragon_fang', name: '龍牙', type: 'material',
    description: '巨龍的鋒利牙齒，比任何金屬都要堅硬。',
    buyPrice: 0, sellPrice: 100,
    stackable: true, maxStack: 99, levelReq: 1,
  },
  void_shard: {
    id: 'void_shard', name: '虛空碎片', type: 'material',
    description: '從深淵裂隙中取得的時空碎片，在手中不斷閃爍著紫光。',
    buyPrice: 0, sellPrice: 120,
    stackable: true, maxStack: 99, levelReq: 1,
  },
  celestial_fragment: {
    id: 'celestial_fragment', name: '天界碎片', type: 'material',
    description: '天界遺跡中散落的神聖碎片，散發著溫暖的金色光芒。',
    buyPrice: 0, sellPrice: 150,
    stackable: true, maxStack: 99, levelReq: 1,
  },

  // ============ 消耗品 ============
  small_hp_potion: {
    id: 'small_hp_potion', name: '小型生命藥水', type: 'consumable',
    description: '一瓶散發著淡淡草藥香氣的紅色藥水。輕輕搖晃時，液體中閃爍著微弱的光芒。飲下後能迅速恢復傷口，是冒險者隨身必備的保命良藥。', buyPrice: 20, sellPrice: 10,
    stackable: true, maxStack: 99, levelReq: 1,
    useEffect: { type: 'heal_hp', value: 50 },
  },
  medium_hp_potion: {
    id: 'medium_hp_potion', name: '中型生命藥水', type: 'consumable',
    description: '比小型藥水更為濃稠的生命藥水，深紅色的液體散發著甘甜的花香。一口飲下，溫暖的能量從胃部向全身擴散，傷口以肉眼可見的速度癒合。', buyPrice: 60, sellPrice: 30,
    stackable: true, maxStack: 99, levelReq: 5,
    useEffect: { type: 'heal_hp', value: 150 },
  },
  large_hp_potion: {
    id: 'large_hp_potion', name: '大型生命藥水', type: 'consumable',
    description: '以珍稀藥材精心熬製的高純度生命藥水，瓶身散發著耀眼的金紅色光芒。飲用後強大的治癒之力瞬間貫穿全身，即使是瀕死的重傷也能迅速恢復。', buyPrice: 150, sellPrice: 75,
    stackable: true, maxStack: 99, levelReq: 15,
    useEffect: { type: 'heal_hp', value: 400 },
  },
  small_mp_potion: {
    id: 'small_mp_potion', name: '小型資源藥水', type: 'consumable',
    description: '一瓶幽藍色的魔力藥水，液面上漂浮著細碎的星光微粒。飲用後一股清涼的力量從喉嚨流向丹田，讓枯竭的精神力重新充盈。', buyPrice: 25, sellPrice: 12,
    stackable: true, maxStack: 99, levelReq: 1,
    useEffect: { type: 'heal_mp', value: 30 },
  },
  medium_mp_potion: {
    id: 'medium_mp_potion', name: '中型資源藥水', type: 'consumable',
    description: '以月光花露調製的資源藥水，靛藍色的液體在瓶中微微旋轉。飲用後如同沐浴在月光之下，疲憊的心靈得到深層的滋養與恢復。', buyPrice: 75, sellPrice: 37,
    stackable: true, maxStack: 99, levelReq: 5,
    useEffect: { type: 'heal_mp', value: 80 },
  },
  large_mp_potion: {
    id: 'large_mp_potion', name: '大型資源藥水', type: 'consumable',
    description: '以深淵水晶粉末與天界露水混合熬製的頂級資源藥水，瓶中的液體呈現夢幻般的極光色彩。飲用瞬間，洶湧的魔力之潮席捲全身，讓人重新充滿戰鬥的力量。', buyPrice: 180, sellPrice: 90,
    stackable: true, maxStack: 99, levelReq: 15,
    useEffect: { type: 'heal_mp', value: 200 },
  },
  antidote: {
    id: 'antidote', name: '解毒劑', type: 'consumable',
    description: '一瓶翠綠色的解毒藥劑，散發著刺鼻的藥草氣味。據說是以七種解毒草藥熬製而成，飲下後體內的毒素會迅速被中和分解。', buyPrice: 15, sellPrice: 7,
    stackable: true, maxStack: 99, levelReq: 1,
    useEffect: { type: 'buff', value: 0, duration: 0 },
  },
  phoenix_feather: {
    id: 'phoenix_feather', name: '鳳凰之羽', type: 'consumable',
    description: '一片散發著金紅色光芒的神鳥羽毛，握在手中能感受到溫暖而強大的生命力脈動。傳說鳳凰浴火重生時掉落的羽毛，能將瀕死之人從死亡的邊緣拉回。', buyPrice: 0, sellPrice: 0,
    stackable: true, maxStack: 10, levelReq: 1,
    useEffect: { type: 'heal_hp', value: 30 },
  },

  // ============ 素材 ============
  slime_jelly: {
    id: 'slime_jelly', name: '史萊姆凝膠', type: 'material',
    description: '從史萊姆體內凝聚出的半透明凝膠，觸感冰涼而富有彈性。在陽光下會折射出彩虹般的光澤，是煉金術中常用的基礎材料。', buyPrice: 0, sellPrice: 5,
    stackable: true, maxStack: 99, levelReq: 1,
  },
  wolf_pelt: {
    id: 'wolf_pelt', name: '狼皮', type: 'material',
    description: '一張厚實的灰色狼皮，毛髮粗硬而有光澤。剝取時保存完好，沒有破損，是製作皮甲的上等原料。空氣中還殘留著荒野的氣息。', buyPrice: 0, sellPrice: 15,
    stackable: true, maxStack: 99, levelReq: 1,
  },
  goblin_ear: {
    id: 'goblin_ear', name: '哥布林耳朵', type: 'material',
    description: '從哥布林頭上割下的尖長耳朵，已經用鹽巴醃製防腐。冒險者公會接受這些作為討伐任務的完成證明，帶回後可以換取報酬。', buyPrice: 0, sellPrice: 10,
    stackable: true, maxStack: 99, levelReq: 1,
  },
  bat_wing: {
    id: 'bat_wing', name: '蝙蝠翅膀', type: 'material',
    description: '經過陰乾處理的蝙蝠翅膀，薄如紙片的翼膜在光線下呈現半透明的暗紫色。煉金術士們用它來調製夜視藥水和飛行藥劑。', buyPrice: 0, sellPrice: 12,
    stackable: true, maxStack: 99, levelReq: 1,
  },
  crystal_shard: {
    id: 'crystal_shard', name: '水晶碎片', type: 'material',
    description: '一片拇指大小的水晶碎片，內部蘊含著凝固的魔力光點。握在手中時會微微發熱，彷彿有什麼力量正在其中沉睡。是鍛造魔法裝備的重要素材。', buyPrice: 0, sellPrice: 30,
    stackable: true, maxStack: 99, levelReq: 1,
  },
  shadow_essence: {
    id: 'shadow_essence', name: '暗影精華', type: 'material',
    description: '一團被封印在玻璃瓶中的暗影能量，深邃的黑紫色漩渦在瓶內不斷翻攪。靠近時會感到一陣莫名的寒意，彷彿暗影正在窺探你的靈魂。', buyPrice: 0, sellPrice: 25,
    stackable: true, maxStack: 99, levelReq: 1,
  },
  herb: {
    id: 'herb', name: '藥草', type: 'material',
    description: '路邊常見的野生藥草，葉片翠綠而帶有鋸齒。雖然樸素不起眼，卻是煉製各種藥水的基礎原料。嚼碎後塗在傷口上也有輕微的止血效果。', buyPrice: 5, sellPrice: 2,
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
    description: '猩紅色的濃稠藥水，散發著鐵鏽般的金屬氣味。飲下後肌肉會微微脹痛，隨即感受到力量在體內奔湧，攻擊力大幅提升。效果持續5回合。', buyPrice: 80, sellPrice: 40,
    stackable: true, maxStack: 99, levelReq: 5,
    useEffect: { type: 'buff_atk', value: 10, duration: 5 },
  },
  wisdom_potion: {
    id: 'wisdom_potion', name: '智慧藥水', type: 'consumable',
    description: '以智慧之花的花蜜為主要原料的淡紫色藥水，飲用後頭腦瞬間變得清明。魔力的流動更加順暢，施法的威力隨之增強。效果持續5回合。', buyPrice: 80, sellPrice: 40,
    stackable: true, maxStack: 99, levelReq: 5,
    useEffect: { type: 'buff_matk', value: 10, duration: 5 },
  },
  agility_potion: {
    id: 'agility_potion', name: '敏捷藥水', type: 'consumable',
    description: '以疾風蜥蜴的尾巴萃取物調配的淡綠色藥水。飲用後身體變得輕盈如燕，反應速度大幅提升，彷彿時間都慢了下來。效果持續5回合。', buyPrice: 100, sellPrice: 50,
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
    description: '一張泛黃的羊皮卷軸，上面繪著複雜的傳送魔法陣。撕開卷軸的瞬間，強烈的空間魔力將使用者包裹，下一刻便回到了熟悉的村莊廣場。', buyPrice: 50, sellPrice: 25,
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
    description: '在營火上烤得滋滋作響的鮮嫩肉排，表面焦黃酥脆，內裡多汁鮮美。撕下一塊放入口中，肉香與油脂的鮮甜在舌尖炸開，讓疲憊的身體逐漸恢復活力。', buyPrice: 30, sellPrice: 15,
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
    description: '精靈族以秘傳手法烘焙的金色麵包，入口即化，帶有淡淡的蜂蜜和花朵清香。只需一小塊就能讓人恢復大量體力和精神力，是長途冒險的絕佳糧食。', buyPrice: 120, sellPrice: 60,
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
    description: '一塊散發著淡淡魔力光芒的灰色礦石，表面刻有基礎的強化符文。將它按壓在裝備上時，符文會亮起並將礦石中的力量注入裝備，提升其性能。', buyPrice: 100, sellPrice: 50,
    stackable: true, maxStack: 99, levelReq: 1,
  },
  advanced_enhance_stone: {
    id: 'advanced_enhance_stone', name: '高級強化石', type: 'material',
    description: '一塊散發著耀眼金光的高純度強化礦石，表面的高階符文複雜而精密。只有+10以上的裝備才能承受這股強大的力量，否則會因能量過載而崩裂。', buyPrice: 500, sellPrice: 250,
    stackable: true, maxStack: 99, levelReq: 1,
  },
  blessing_scroll: {
    id: 'blessing_scroll', name: '祝福卷軸', type: 'material',
    description: '一張閃爍著聖潔光芒的卷軸，上面書寫著古老的守護咒文。在強化裝備前使用，可以在失敗時保護裝備不被破壞，是高風險強化時的安心保障。', buyPrice: 300, sellPrice: 150,
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
    description: '從礦脈中開採出的粗糙鐵礦石，表面佈滿暗紅色的鏽斑。雖然外表不起眼，卻是鍛造的基礎材料。敲擊時會發出沉悶的金屬聲響。', buyPrice: 20, sellPrice: 10,
    stackable: true, maxStack: 99, levelReq: 1,
  },
  mithril_ore: {
    id: 'mithril_ore', name: '秘銀礦', type: 'material',
    description: '極為稀有的銀白色礦石，在微光中散發著空靈的藍色光澤。質地輕盈卻異常堅硬，是鍛造頂級裝備的夢幻素材。僅在深邃的礦洞最深處才能發現。', buyPrice: 200, sellPrice: 100,
    stackable: true, maxStack: 99, levelReq: 15,
  },
  elf_wood: {
    id: 'elf_wood', name: '精靈木', type: 'material',
    description: '精靈族森林中生長的神木木材，切面呈現出如年輪般的魔力紋路。觸摸時能感受到木質中蘊含的自然之力在緩緩流動，是製作高級法杖和弓箭的珍貴材料。', buyPrice: 150, sellPrice: 75,
    stackable: true, maxStack: 99, levelReq: 10,
  },
  spider_silk_cloth: {
    id: 'spider_silk_cloth', name: '蜘蛛絲布', type: 'material',
    description: '以巨型蜘蛛的絲線精心織就的布料，輕薄如蟬翼卻比鐵絲還要堅韌。在月光下會泛著神秘的銀色光澤，是製作法師袍的上等材料。', buyPrice: 80, sellPrice: 40,
    stackable: true, maxStack: 99, levelReq: 5,
  },
  dragon_scale: {
    id: 'dragon_scale', name: '龍鱗片', type: 'material',
    description: '從龍族身上剝落的巨大鱗片，表面閃耀著如寶石般的虹彩光芒。觸摸時冰涼而堅硬，據說即使是最鋒利的劍也無法在上面留下劃痕。是鍛造傳說裝備的至高素材。', buyPrice: 500, sellPrice: 250,
    stackable: true, maxStack: 99, levelReq: 25,
  },
  magic_crystal: {
    id: 'magic_crystal', name: '魔力結晶', type: 'material',
    description: '由純淨魔力在特殊環境下自然凝聚而成的晶體，散發著柔和的藍白色光芒。將它握在掌心，能感受到魔力如同心跳般一收一放的節律。', buyPrice: 120, sellPrice: 60,
    stackable: true, maxStack: 99, levelReq: 10,
  },
  beast_hide: {
    id: 'beast_hide', name: '獸皮', type: 'material',
    description: '從荒野野獸身上剝取的厚實獸皮，散發著原始的野性氣息。經過適當的鞣製處理後，可以成為製作皮甲的優質材料。', buyPrice: 30, sellPrice: 15,
    stackable: true, maxStack: 99, levelReq: 1,
  },
  ancient_fragment: {
    id: 'ancient_fragment', name: '古代碎片', type: 'material',
    description: '從古代遺跡中挖掘出的神秘碎片，表面刻著已經失傳的古代文字。碎片中似乎封印著遠古的力量，靠近時偶爾會聽到微弱的低語聲。', buyPrice: 300, sellPrice: 150,
    stackable: true, maxStack: 99, levelReq: 20,
  },

  // ============ 戰鬥道具 ============
  smoke_bomb: {
    id: 'smoke_bomb', name: '煙霧彈', type: 'consumable',
    description: '一顆以火藥和特殊藥草混合製成的煙霧彈。投擲後瞬間炸開，釋放出大量嗆人的濃煙，在混亂中為逃脫創造絕佳機會。', buyPrice: 40, sellPrice: 20,
    stackable: true, maxStack: 99, levelReq: 1,
    useEffect: { type: 'combat_escape', value: 50 },
  },
  flash_bomb: {
    id: 'flash_bomb', name: '閃光彈', type: 'consumable',
    description: '一顆內含強力發光粉末的玻璃球。砸碎時會爆發出刺目的白光，足以讓任何生物暫時失去視力。在黑暗環境中效果尤為顯著。', buyPrice: 60, sellPrice: 30,
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
    description: '一把精心平衡的投擲用短刀，刀身輕薄銳利。刀柄處纏著防滑的細繩，投出後會在空中旋轉，以極高的速度命中目標。', buyPrice: 25, sellPrice: 12,
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

  // ============ 鍛造裝備（製作系統成品） ============
  iron_shield: {
    id: 'iron_shield', name: '鐵盾', type: 'armor',
    description: '鐵礦鍛造的堅固盾牌，提供可靠的防護。', buyPrice: 300, sellPrice: 150,
    stackable: false, maxStack: 1, levelReq: 8,
    equipSlot: 'hands', stats: { def: 8, hp: 20 },
    rarity: 'uncommon',
  },
  dragon_scale_armor: {
    id: 'dragon_scale_armor', name: '龍鱗甲', type: 'armor',
    description: '以龍鱗片鍛造的史詩鎧甲，兼具防禦與魔法抗性。', buyPrice: 8000, sellPrice: 4000,
    stackable: false, maxStack: 1, levelReq: 35,
    equipSlot: 'body', stats: { def: 40, mdef: 20, hp: 150, vit: 5 },
    rarity: 'epic',
  },
  spider_silk_robe: {
    id: 'spider_silk_robe', name: '蜘蛛絲袍', type: 'armor',
    description: '以蜘蛛絲布織成的法師袍，輕盈且蘊含魔力。', buyPrice: 1500, sellPrice: 750,
    stackable: false, maxStack: 1, levelReq: 15,
    classReq: ['mage', 'archmage', 'warlock', 'chronomancer'],
    equipSlot: 'body', stats: { mdef: 12, mp: 50, int: 3, dodgeRate: 2 },
    rarity: 'rare',
  },
  beast_leather_armor: {
    id: 'beast_leather_armor', name: '獸皮甲', type: 'armor',
    description: '以獸皮製成的輕型護甲，靈活且堅固。', buyPrice: 500, sellPrice: 250,
    stackable: false, maxStack: 1, levelReq: 10,
    equipSlot: 'body', stats: { def: 10, dodgeRate: 2, dex: 2 },
    rarity: 'uncommon',
  },
  ancient_relic: {
    id: 'ancient_relic', name: '古代遺物', type: 'accessory',
    description: '由古代碎片與魔力結晶鍛造的傳說飾品，蘊含遠古的力量。', buyPrice: 15000, sellPrice: 7500,
    stackable: false, maxStack: 1, levelReq: 40,
    equipSlot: 'accessory', stats: { str: 5, int: 5, dex: 5, vit: 5, luk: 5, hp: 100, mp: 50 },
    rarity: 'legendary',
  },

  // ============ 製作系統食物成品 ============
  hp_steak: {
    id: 'hp_steak', name: '回復牛排', type: 'consumable',
    description: '多汁的牛排，食用後回復少量HP。', buyPrice: 25, sellPrice: 12,
    stackable: true, maxStack: 99, levelReq: 1,
    useEffect: { type: 'food_hp', value: 20, duration: 2 },
  },
  energy_drink: {
    id: 'energy_drink', name: '能量飲料', type: 'consumable',
    description: '注入魔力的飲品，回復HP與資源。', buyPrice: 50, sellPrice: 25,
    stackable: true, maxStack: 99, levelReq: 5,
    useEffect: { type: 'food_hp_resource', value: 15, duration: 3 },
  },
  fire_soup: {
    id: 'fire_soup', name: '火焰湯', type: 'consumable',
    description: '以火蜥蜴尾烹煮的湯品，飲用後攻擊力提升5%。', buyPrice: 100, sellPrice: 50,
    stackable: true, maxStack: 99, levelReq: 15,
    useEffect: { type: 'food_atk', value: 5, duration: 5 },
  },
  ice_cream: {
    id: 'ice_cream', name: '冰元素冰淇淋', type: 'consumable',
    description: '以冰元素核心製成的冰淇淋，食用後防禦力提升5%。', buyPrice: 100, sellPrice: 50,
    stackable: true, maxStack: 99, levelReq: 15,
    useEffect: { type: 'buff_def', value: 5, duration: 5 },
  },

  // ============ 魚類素材 (Fishing) ============

  // ─── Common (Lv 1-5) ───
  small_fish: {
    id: 'small_fish', name: '小魚', type: 'material',
    description: '隨處可見的小魚，雖然不值錢但聊勝於無。', buyPrice: 0, sellPrice: 10,
    stackable: true, maxStack: 99, levelReq: 1, rarity: 'common',
  },
  river_carp: {
    id: 'river_carp', name: '河鯉', type: 'material',
    description: '河中常見的鯉魚，肉質鮮美。', buyPrice: 0, sellPrice: 15,
    stackable: true, maxStack: 99, levelReq: 1, rarity: 'common',
  },
  mud_loach: {
    id: 'mud_loach', name: '泥鰍', type: 'material',
    description: '喜歡藏在泥巴裡的滑溜小魚。', buyPrice: 0, sellPrice: 12,
    stackable: true, maxStack: 99, levelReq: 1, rarity: 'common',
  },
  freshwater_shrimp: {
    id: 'freshwater_shrimp', name: '淡水蝦', type: 'material',
    description: '清澈溪流中的小蝦，可作為料理素材。', buyPrice: 0, sellPrice: 8,
    stackable: true, maxStack: 99, levelReq: 1, rarity: 'common',
  },

  // ─── Uncommon (Lv 5-10) ───
  silver_trout: {
    id: 'silver_trout', name: '銀鱒魚', type: 'material',
    description: '鱗片閃著銀光的鱒魚，需要一定技術才能釣上。', buyPrice: 0, sellPrice: 30,
    stackable: true, maxStack: 99, levelReq: 1, rarity: 'uncommon',
  },
  spotted_bass: {
    id: 'spotted_bass', name: '斑點鱸魚', type: 'material',
    description: '身上佈滿深色斑點的鱸魚，力氣很大。', buyPrice: 0, sellPrice: 35,
    stackable: true, maxStack: 99, levelReq: 1, rarity: 'uncommon',
  },
  blue_catfish: {
    id: 'blue_catfish', name: '藍鯰魚', type: 'material',
    description: '帶有藍色光澤的鯰魚，夜間活動。', buyPrice: 0, sellPrice: 40,
    stackable: true, maxStack: 99, levelReq: 1, rarity: 'uncommon',
  },
  golden_crab: {
    id: 'golden_crab', name: '金色螃蟹', type: 'material',
    description: '甲殼呈金黃色的螃蟹，據說是吉祥的象徵。', buyPrice: 0, sellPrice: 45,
    stackable: true, maxStack: 99, levelReq: 1, rarity: 'uncommon',
  },

  // ─── Rare (Lv 10-18) ───
  rainbow_fish: {
    id: 'rainbow_fish', name: '彩虹魚', type: 'material',
    description: '鱗片會折射出彩虹光芒的珍稀魚類。', buyPrice: 0, sellPrice: 80,
    stackable: true, maxStack: 99, levelReq: 1, rarity: 'rare',
  },
  crystal_shrimp: {
    id: 'crystal_shrimp', name: '水晶蝦', type: 'material',
    description: '身體近乎透明的珍稀蝦種，在水晶洞窟附近出沒。', buyPrice: 0, sellPrice: 100,
    stackable: true, maxStack: 99, levelReq: 1, rarity: 'rare',
  },
  dragon_koi: {
    id: 'dragon_koi', name: '龍錦鯉', type: 'material',
    description: '傳說中能化龍的錦鯉，鬍鬚如龍鬚。', buyPrice: 0, sellPrice: 120,
    stackable: true, maxStack: 99, levelReq: 1, rarity: 'rare',
  },
  moonlight_eel: {
    id: 'moonlight_eel', name: '月光鰻', type: 'material',
    description: '只在月光下才會浮出水面的神秘鰻魚。', buyPrice: 0, sellPrice: 150,
    stackable: true, maxStack: 99, levelReq: 1, rarity: 'rare',
  },

  // ─── Epic (Lv 18-25) ───
  abyssal_angler: {
    id: 'abyssal_angler', name: '深淵鮟鱇', type: 'material',
    description: '來自深海的鮟鱇魚，頭頂的燈籠散發幽藍光芒。', buyPrice: 0, sellPrice: 300,
    stackable: true, maxStack: 99, levelReq: 1, rarity: 'epic',
  },
  phoenix_fish: {
    id: 'phoenix_fish', name: '鳳凰魚', type: 'material',
    description: '鱗片如火焰般燃燒的傳說之魚，據說能浴火重生。', buyPrice: 0, sellPrice: 400,
    stackable: true, maxStack: 99, levelReq: 1, rarity: 'epic',
  },
  frost_salmon: {
    id: 'frost_salmon', name: '霜之鮭魚', type: 'material',
    description: '渾身散發寒氣的鮭魚，觸碰會讓手指麻木。', buyPrice: 0, sellPrice: 350,
    stackable: true, maxStack: 99, levelReq: 1, rarity: 'epic',
  },
  thunder_ray: {
    id: 'thunder_ray', name: '雷鰩', type: 'material',
    description: '能放電的魟魚，捕捉時需格外小心。', buyPrice: 0, sellPrice: 380,
    stackable: true, maxStack: 99, levelReq: 1, rarity: 'epic',
  },

  // ─── Legendary (Lv 25-30) ───
  sea_dragon_fry: {
    id: 'sea_dragon_fry', name: '海龍幼魚', type: 'material',
    description: '海龍的幼體，散發著古老的龍族氣息。', buyPrice: 0, sellPrice: 800,
    stackable: true, maxStack: 99, levelReq: 1, rarity: 'legendary',
  },
  celestial_jellyfish: {
    id: 'celestial_jellyfish', name: '天界水母', type: 'material',
    description: '來自天界的水母，觸手閃爍著星光。', buyPrice: 0, sellPrice: 1000,
    stackable: true, maxStack: 99, levelReq: 1, rarity: 'legendary',
  },
  void_squid: {
    id: 'void_squid', name: '虛空烏賊', type: 'material',
    description: '來自虛空的烏賊，周身纏繞著扭曲的空間。', buyPrice: 0, sellPrice: 1200,
    stackable: true, maxStack: 99, levelReq: 1, rarity: 'legendary',
  },
  world_serpent_scale: {
    id: 'world_serpent_scale', name: '世界蛇之鱗', type: 'material',
    description: '傳說中環繞世界的巨蛇脫落的鱗片，蘊含著毀天滅地的力量。', buyPrice: 0, sellPrice: 2000,
    stackable: true, maxStack: 99, levelReq: 1, rarity: 'legendary',
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
