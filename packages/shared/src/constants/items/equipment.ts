import type { ItemDef, ItemRarity } from '../../types/item.js';

export const EQUIPMENT_ITEM_DEFS: Record<string, ItemDef> = {
// ============ 武器 ============
  wooden_sword: {
    id: 'wooden_sword', name: '木劍', type: 'weapon',
    description: '一把用硬木削成的練習劍，劍身佈滿刻痕與磨損的痕跡。雖然無法造成致命傷害，卻是每位冒險者踏上旅途時的第一位夥伴。握柄處纏著粗糙的麻繩，勉強能防滑。', buyPrice: 50, sellPrice: 25,
    stackable: false, maxStack: 1, levelReq: 1,
    equipSlot: 'weapon', stats: { atk: 5 },
  },

bronze_sword: {
    id: 'bronze_sword', name: '青銅劍', type: 'weapon',
    description: '以青銅澆鑄後反覆磨利的短劍，劍脊比木劍沉重，刃口帶著溫暖的金褐色光澤。它適合剛離開訓練場的冒險者使用，能應付平原野獸與零散盜匪，但長時間戰鬥後需要回鐵匠鋪重新打磨。', buyPrice: 120, sellPrice: 60,
    stackable: false, maxStack: 1, levelReq: 3,
    equipSlot: 'weapon', stats: { atk: 8 },
  },

iron_sword: {
    id: 'iron_sword', name: '鐵劍', type: 'weapon',
    description: '一把由鐵匠精心鍛造的長劍，劍刃泛著冷冽的銀光。劍身筆直而厚實，揮動時發出低沉的破風聲。雖不華麗，卻是戰場上值得信賴的利器。', buyPrice: 200, sellPrice: 100,
    stackable: false, maxStack: 1, levelReq: 5,
    equipSlot: 'weapon', stats: { atk: 12 },
  },

steel_sword: {
    id: 'steel_sword', name: '鋼劍', type: 'weapon',
    description: '以高純度鋼鐵反覆鍛打而成的長劍，劍身隱約可見鍛造時留下的波紋。握在手中沉穩有力，劍尖劃過空氣時會發出銳利的嗡鳴。只有真正的戰士才能駕馭它的重量。', buyPrice: 500, sellPrice: 250,
    stackable: false, maxStack: 1, levelReq: 1,
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

wooden_scepter: {
    id: 'wooden_scepter', name: '木製權杖', type: 'weapon',
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

wooden_shield: {
    id: 'wooden_shield', name: '木盾', type: 'armor',
    description: '用兩層硬木板交錯釘合的小圓盾，外圈包著粗糙鐵皮，背面還留著鐵匠手寫的持握記號。它擋不住沉重戰斧，卻能讓新手在面對狼爪、短刀與飛石時多一分反應空間。', buyPrice: 90, sellPrice: 45,
    stackable: false, maxStack: 1, levelReq: 2,
    equipSlot: 'offhand', stats: { def: 4, hp: 10 },
    weaponType: 'shield',
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
    equipSlot: 'ring', stats: { luk: 1 },
  },

lucky_charm: {
    id: 'lucky_charm', name: '幸運護符', type: 'accessory',
    description: '一枚古老的護符，以四葉草形狀的翡翠為主體，周圍鑲嵌著細碎的星光石。據說它曾庇護過一位傳奇冒險者度過無數劫難，散發著令人安心的淡綠色光芒。', buyPrice: 500, sellPrice: 250,
    stackable: false, maxStack: 1, levelReq: 10,
    equipSlot: 'necklace', stats: { luk: 5, critRate: 2 },
  },

power_amulet: {
    id: 'power_amulet', name: '力量護身符', type: 'accessory',
    description: '蘊含力量的護身符。', buyPrice: 500, sellPrice: 250,
    stackable: false, maxStack: 1, levelReq: 10,
    equipSlot: 'necklace', stats: { str: 3, atk: 5 },
  },

wisdom_amulet: {
    id: 'wisdom_amulet', name: '智慧護身符', type: 'accessory',
    description: '增幅智力的護身符。', buyPrice: 500, sellPrice: 250,
    stackable: false, maxStack: 1, levelReq: 10,
    equipSlot: 'necklace', stats: { int: 3, mp: 20 },
  },

adventurer_belt: {
    id: 'adventurer_belt', name: '冒險者腰帶', type: 'accessory',
    description: '結實耐用的工具腰帶，掛扣能固定藥瓶、短刀與採集工具。雖然樸素，卻能讓冒險者在旅途中更從容地整理裝備。',
    buyPrice: 80, sellPrice: 40,
    stackable: false, maxStack: 1, levelReq: 1,
    equipSlot: 'belt', stats: { hp: 10, vit: 1 },
  },

// ============ 長槍 (Spear) - 戰士/騎士 ============
  wooden_spear: {
    id: 'wooden_spear', name: '木槍', type: 'weapon',
    description: '簡樸的木製長槍，新手訓練用。', buyPrice: 60, sellPrice: 30,
    stackable: false, maxStack: 1, levelReq: 1,
    equipSlot: 'weapon', stats: { atk: 6 },
    rarity: 'common', weaponType: 'spear',
  },

iron_spear: {
    id: 'iron_spear', name: '鐵槍', type: 'weapon',
    description: '鐵製槍頭的長槍，穿刺力不俗。', buyPrice: 300, sellPrice: 150,
    stackable: false, maxStack: 1, levelReq: 10,
    classReq: ['swordsman', 'knight'],
    equipSlot: 'weapon', stats: { atk: 15 },
    rarity: 'uncommon', weaponType: 'spear',
  },

steel_spear: {
    id: 'steel_spear', name: '鋼槍', type: 'weapon',
    description: '精鋼鍛造的長槍，銳不可當。', buyPrice: 800, sellPrice: 400,
    stackable: false, maxStack: 1, levelReq: 20,
    classReq: ['swordsman', 'knight'],
    equipSlot: 'weapon', stats: { atk: 25, dex: 2 },
    rarity: 'rare', weaponType: 'spear',
  },

mithril_spear: {
    id: 'mithril_spear', name: '秘銀槍', type: 'weapon',
    description: '秘銀打造的長槍，輕盈而致命。', buyPrice: 2500, sellPrice: 1250,
    stackable: false, maxStack: 1, levelReq: 30,
    classReq: ['swordsman', 'knight'],
    equipSlot: 'weapon', stats: { atk: 38, dex: 4, str: 3 },
    rarity: 'epic', weaponType: 'spear', setId: 'sword_saint_set',
  },

dragon_fang_spear: {
    id: 'dragon_fang_spear', name: '龍牙槍', type: 'weapon',
    description: '以龍牙為槍尖的傳說長槍，貫穿萬物。', buyPrice: 6000, sellPrice: 3000,
    stackable: false, maxStack: 1, levelReq: 40,
    classReq: ['swordsman', 'knight'],
    equipSlot: 'weapon', stats: { atk: 55, dex: 6, str: 5 },
    rarity: 'legendary', weaponType: 'spear', setId: 'sword_saint_set',
  },

// ============ 巨斧 (Greataxe) - 狂戰士/劍聖 ============
  wooden_greataxe: {
    id: 'wooden_greataxe', name: '木柄斧', type: 'weapon',
    description: '粗糙的木柄大斧，沉重但威力不小。', buyPrice: 65, sellPrice: 32,
    stackable: false, maxStack: 1, levelReq: 1,
    equipSlot: 'weapon', stats: { atk: 8 },
    rarity: 'common', weaponType: 'greataxe',
  },

iron_greataxe: {
    id: 'iron_greataxe', name: '鐵巨斧', type: 'weapon',
    description: '鐵製巨斧，一斧劈裂大地。', buyPrice: 320, sellPrice: 160,
    stackable: false, maxStack: 1, levelReq: 10,
    classReq: ['berserker', 'sword_saint'],
    equipSlot: 'weapon', stats: { atk: 18 },
    rarity: 'uncommon', weaponType: 'greataxe',
  },

steel_greataxe: {
    id: 'steel_greataxe', name: '鋼巨斧', type: 'weapon',
    description: '精鋼鍛造的巨斧，破甲之力驚人。', buyPrice: 850, sellPrice: 425,
    stackable: false, maxStack: 1, levelReq: 20,
    classReq: ['berserker', 'sword_saint'],
    equipSlot: 'weapon', stats: { atk: 30, str: 3 },
    rarity: 'rare', weaponType: 'greataxe',
  },

mithril_greataxe: {
    id: 'mithril_greataxe', name: '秘銀巨斧', type: 'weapon',
    description: '秘銀打造的巨斧，揮舞如風。', buyPrice: 2600, sellPrice: 1300,
    stackable: false, maxStack: 1, levelReq: 30,
    classReq: ['berserker', 'sword_saint'],
    equipSlot: 'weapon', stats: { atk: 45, str: 6 },
    rarity: 'epic', weaponType: 'greataxe', setId: 'sword_saint_set',
  },

dragon_slayer_greataxe: {
    id: 'dragon_slayer_greataxe', name: '屠龍巨斧', type: 'weapon',
    description: '傳說中斬殺巨龍的神器巨斧。', buyPrice: 6500, sellPrice: 3250,
    stackable: false, maxStack: 1, levelReq: 40,
    classReq: ['berserker', 'sword_saint'],
    equipSlot: 'weapon', stats: { atk: 65, str: 8, critRate: 3 },
    rarity: 'legendary', weaponType: 'greataxe', setId: 'sword_saint_set',
  },

// ============ 太刀 (Katana) - 戰士/劍聖 ============
  bamboo_katana: {
    id: 'bamboo_katana', name: '竹刀', type: 'weapon',
    description: '新手劍士練習用的竹製太刀，刀身以數片竹材綁合，重量輕而不致命，適合熟悉居合節奏與基礎命中。', buyPrice: 55, sellPrice: 27,
    stackable: false, maxStack: 1, levelReq: 1,
    equipSlot: 'weapon', stats: { atk: 5, dex: 1 },
    rarity: 'common', weaponType: 'katana',
  },

iron_katana: {
    id: 'iron_katana', name: '鐵太刀', type: 'weapon',
    description: '鐵製太刀，斬擊迅捷。', buyPrice: 310, sellPrice: 155,
    stackable: false, maxStack: 1, levelReq: 10,
    classReq: ['swordsman', 'sword_saint'],
    equipSlot: 'weapon', stats: { atk: 14, dex: 2 },
    rarity: 'uncommon', weaponType: 'katana',
  },

steel_katana: {
    id: 'steel_katana', name: '鋼太刀', type: 'weapon',
    description: '精鋼鍛造的太刀，刀氣如虹。', buyPrice: 820, sellPrice: 410,
    stackable: false, maxStack: 1, levelReq: 20,
    classReq: ['swordsman', 'sword_saint'],
    equipSlot: 'weapon', stats: { atk: 24, dex: 4, critRate: 2 },
    rarity: 'rare', weaponType: 'katana',
  },

mithril_katana: {
    id: 'mithril_katana', name: '秘銀太刀', type: 'weapon',
    description: '秘銀打造的太刀，出鞘即斬。', buyPrice: 2400, sellPrice: 1200,
    stackable: false, maxStack: 1, levelReq: 30,
    classReq: ['swordsman', 'sword_saint'],
    equipSlot: 'weapon', stats: { atk: 36, dex: 6, critRate: 4 },
    rarity: 'epic', weaponType: 'katana', setId: 'sword_saint_set',
  },

dragon_mark_katana: {
    id: 'dragon_mark_katana', name: '龍紋太刀', type: 'weapon',
    description: '刻有龍紋的傳說太刀，一閃千刀。', buyPrice: 5800, sellPrice: 2900,
    stackable: false, maxStack: 1, levelReq: 40,
    classReq: ['swordsman', 'sword_saint'],
    equipSlot: 'weapon', stats: { atk: 52, dex: 8, critRate: 6 },
    rarity: 'legendary', weaponType: 'katana', setId: 'sword_saint_set',
  },

// ============ 元素杖 (Elemental Staff) - 法師/大法師 ============
  elemental_branch_staff: {
    id: 'elemental_branch_staff', name: '元素樹枝', type: 'weapon',
    description: '蘊含微弱元素力量的樹枝。', buyPrice: 55, sellPrice: 27,
    stackable: false, maxStack: 1, levelReq: 1,
    equipSlot: 'weapon', stats: { matk: 7, mp: 5 },
    rarity: 'common', weaponType: 'staff',
  },

iron_elemental_staff: {
    id: 'iron_elemental_staff', name: '元素鐵杖', type: 'weapon',
    description: '以元素水晶強化的鐵杖。', buyPrice: 300, sellPrice: 150,
    stackable: false, maxStack: 1, levelReq: 10,
    classReq: ['mage', 'archmage'],
    equipSlot: 'weapon', stats: { matk: 16, mp: 15 },
    rarity: 'uncommon', weaponType: 'staff',
  },

crystal_elemental_staff: {
    id: 'crystal_elemental_staff', name: '元素水晶杖', type: 'weapon',
    description: '鑲嵌多種元素水晶的法杖，威力強大。', buyPrice: 850, sellPrice: 425,
    stackable: false, maxStack: 1, levelReq: 20,
    classReq: ['mage', 'archmage'],
    equipSlot: 'weapon', stats: { matk: 28, mp: 25, int: 3 },
    rarity: 'rare', weaponType: 'staff',
  },

mithril_elemental_staff: {
    id: 'mithril_elemental_staff', name: '秘銀元素杖', type: 'weapon',
    description: '秘銀與元素核心融合的法杖。', buyPrice: 2500, sellPrice: 1250,
    stackable: false, maxStack: 1, levelReq: 30,
    classReq: ['mage', 'archmage'],
    equipSlot: 'weapon', stats: { matk: 42, mp: 40, int: 5 },
    rarity: 'epic', weaponType: 'staff', setId: 'archmage_set',
  },

dragon_breath_elemental_staff: {
    id: 'dragon_breath_elemental_staff', name: '龍息元素杖', type: 'weapon',
    description: '注入龍之元素的至高法杖，毀天滅地。', buyPrice: 6200, sellPrice: 3100,
    stackable: false, maxStack: 1, levelReq: 40,
    classReq: ['mage', 'archmage'],
    equipSlot: 'weapon', stats: { matk: 60, mp: 60, int: 8 },
    rarity: 'legendary', weaponType: 'staff', setId: 'archmage_set',
  },

// ============ 魔典 (Grimoire) - 暗黑術士 ============
  worn_grimoire: {
    id: 'worn_grimoire', name: '破舊魔典', type: 'weapon',
    description: '字跡模糊的舊魔典，仍殘留暗黑力量。', buyPrice: 60, sellPrice: 30,
    stackable: false, maxStack: 1, levelReq: 1,
    equipSlot: 'offhand', stats: { matk: 6, int: 1 },
    rarity: 'common', weaponType: 'grimoire',
  },

ironbound_grimoire: {
    id: 'ironbound_grimoire', name: '鐵封魔典', type: 'weapon',
    description: '鐵皮封裝的魔典，記載暗黑咒語。', buyPrice: 310, sellPrice: 155,
    stackable: false, maxStack: 1, levelReq: 10,
    classReq: ['warlock'],
    equipSlot: 'offhand', stats: { matk: 14, int: 3 },
    rarity: 'uncommon', weaponType: 'grimoire',
  },

crystal_grimoire: {
    id: 'crystal_grimoire', name: '水晶魔典', type: 'weapon',
    description: '暗色水晶裝飾的魔典，蘊含深淵之力。', buyPrice: 830, sellPrice: 415,
    stackable: false, maxStack: 1, levelReq: 20,
    classReq: ['warlock'],
    equipSlot: 'offhand', stats: { matk: 26, int: 5, mp: 20 },
    rarity: 'rare', weaponType: 'grimoire',
  },

mithril_grimoire: {
    id: 'mithril_grimoire', name: '秘銀魔典', type: 'weapon',
    description: '秘銀書頁的禁忌魔典，暗影纏身。', buyPrice: 2400, sellPrice: 1200,
    stackable: false, maxStack: 1, levelReq: 30,
    classReq: ['warlock'],
    equipSlot: 'offhand', stats: { matk: 40, int: 7, mp: 35 },
    rarity: 'epic', weaponType: 'grimoire', setId: 'archmage_set',
  },

dragonblood_grimoire: {
    id: 'dragonblood_grimoire', name: '龍血魔典', type: 'weapon',
    description: '以龍血書寫的魔典，召喚深淵之力。', buyPrice: 6000, sellPrice: 3000,
    stackable: false, maxStack: 1, levelReq: 40,
    classReq: ['warlock'],
    equipSlot: 'offhand', stats: { matk: 58, int: 10, mp: 50 },
    rarity: 'legendary', weaponType: 'grimoire', setId: 'archmage_set',
  },

// ============ 沙漏杖 (Hourglass Staff) - 時空術士 ============
  branch_hourglass_staff: {
    id: 'branch_hourglass_staff', name: '沙漏枝杖', type: 'weapon',
    description: '頂端鑲嵌小沙漏的樹枝，時光微動。', buyPrice: 55, sellPrice: 27,
    stackable: false, maxStack: 1, levelReq: 1,
    equipSlot: 'weapon', stats: { matk: 5, dex: 1, mp: 5 },
    rarity: 'common', weaponType: 'staff',
  },

iron_hourglass_staff: {
    id: 'iron_hourglass_staff', name: '鐵沙漏杖', type: 'weapon',
    description: '鐵製框架的沙漏杖，時間流速可控。', buyPrice: 300, sellPrice: 150,
    stackable: false, maxStack: 1, levelReq: 10,
    classReq: ['chronomancer'],
    equipSlot: 'weapon', stats: { matk: 13, dex: 2, mp: 15 },
    rarity: 'uncommon', weaponType: 'staff',
  },

crystal_hourglass_staff: {
    id: 'crystal_hourglass_staff', name: '水晶沙漏杖', type: 'weapon',
    description: '水晶沙漏散發時光之力。', buyPrice: 820, sellPrice: 410,
    stackable: false, maxStack: 1, levelReq: 20,
    classReq: ['chronomancer'],
    equipSlot: 'weapon', stats: { matk: 24, dex: 4, int: 3, mp: 25 },
    rarity: 'rare', weaponType: 'staff',
  },

mithril_hourglass_staff: {
    id: 'mithril_hourglass_staff', name: '秘銀沙漏杖', type: 'weapon',
    description: '秘銀沙漏杖，掌控時間長河。', buyPrice: 2500, sellPrice: 1250,
    stackable: false, maxStack: 1, levelReq: 30,
    classReq: ['chronomancer'],
    equipSlot: 'weapon', stats: { matk: 38, dex: 6, int: 5, mp: 40 },
    rarity: 'epic', weaponType: 'staff', setId: 'archmage_set',
  },

dragon_time_hourglass_staff: {
    id: 'dragon_time_hourglass_staff', name: '龍時沙漏杖', type: 'weapon',
    description: '封印龍之時間的傳說沙漏杖，杖首沙粒逆向流動，只有高階時空術士能用它扭轉施法節奏與因果殘影。', buyPrice: 6000, sellPrice: 3000,
    stackable: false, maxStack: 1, levelReq: 40,
    classReq: ['chronomancer'],
    equipSlot: 'weapon', stats: { matk: 55, dex: 8, int: 7, mp: 60 },
    rarity: 'legendary', weaponType: 'staff', setId: 'archmage_set',
  },

// ============ 十字弓 (Crossbow) - 遊俠/神射手 ============
  simple_crossbow: {
    id: 'simple_crossbow', name: '簡易十字弓', type: 'weapon',
    description: '簡易的十字弓，射程有限。', buyPrice: 60, sellPrice: 30,
    stackable: false, maxStack: 1, levelReq: 1,
    equipSlot: 'weapon', stats: { atk: 7, dex: 1 },
    rarity: 'common', weaponType: 'crossbow',
  },

iron_crossbow: {
    id: 'iron_crossbow', name: '鐵十字弓', type: 'weapon',
    description: '鐵製十字弓，穿透力強。', buyPrice: 320, sellPrice: 160,
    stackable: false, maxStack: 1, levelReq: 10,
    classReq: ['ranger', 'marksman'],
    equipSlot: 'weapon', stats: { atk: 16, dex: 3 },
    rarity: 'uncommon', weaponType: 'crossbow',
  },

steel_crossbow: {
    id: 'steel_crossbow', name: '鋼十字弓', type: 'weapon',
    description: '精鋼打造的十字弓，精準致命。', buyPrice: 840, sellPrice: 420,
    stackable: false, maxStack: 1, levelReq: 20,
    classReq: ['ranger', 'marksman'],
    equipSlot: 'weapon', stats: { atk: 26, dex: 5, critRate: 3 },
    rarity: 'rare', weaponType: 'crossbow',
  },

mithril_crossbow: {
    id: 'mithril_crossbow', name: '秘銀十字弓', type: 'weapon',
    description: '秘銀製十字弓，箭矢疾如閃電。', buyPrice: 2500, sellPrice: 1250,
    stackable: false, maxStack: 1, levelReq: 30,
    classReq: ['ranger', 'marksman'],
    equipSlot: 'weapon', stats: { atk: 40, dex: 7, critRate: 5 },
    rarity: 'epic', weaponType: 'crossbow', setId: 'shadow_hunter_set',
  },

dragon_fang_crossbow: {
    id: 'dragon_fang_crossbow', name: '龍牙十字弓', type: 'weapon',
    description: '龍牙為弦的傳說十字弓，一箭貫穿蒼穹。', buyPrice: 6200, sellPrice: 3100,
    stackable: false, maxStack: 1, levelReq: 40,
    classReq: ['ranger', 'marksman'],
    equipSlot: 'weapon', stats: { atk: 58, dex: 10, critRate: 7 },
    rarity: 'legendary', weaponType: 'crossbow', setId: 'shadow_hunter_set',
  },

// ============ 匕首 (Dagger) - 刺客 ============
  small_blade: {
    id: 'small_blade', name: '小匕首', type: 'weapon',
    description: '小巧的匕首，適合暗殺。', buyPrice: 50, sellPrice: 25,
    stackable: false, maxStack: 1, levelReq: 1,
    equipSlot: 'weapon', stats: { atk: 5, dex: 2 },
    rarity: 'common', weaponType: 'dagger',
  },

iron_blade: {
    id: 'iron_blade', name: '鐵匕首', type: 'weapon',
    description: '鐵製匕首，暗夜中閃爍寒光。', buyPrice: 290, sellPrice: 145,
    stackable: false, maxStack: 1, levelReq: 10,
    classReq: ['assassin'],
    equipSlot: 'weapon', stats: { atk: 12, dex: 4, critRate: 2 },
    rarity: 'uncommon', weaponType: 'dagger',
  },

steel_blade: {
    id: 'steel_blade', name: '鋼匕首', type: 'weapon',
    description: '精鋼匕首，刺入無聲。', buyPrice: 800, sellPrice: 400,
    stackable: false, maxStack: 1, levelReq: 20,
    classReq: ['assassin'],
    equipSlot: 'weapon', stats: { atk: 22, dex: 6, critRate: 4 },
    rarity: 'rare', weaponType: 'dagger',
  },

mithril_blade: {
    id: 'mithril_blade', name: '秘銀匕首', type: 'weapon',
    description: '秘銀打造的匕首，輕若無物。', buyPrice: 2300, sellPrice: 1150,
    stackable: false, maxStack: 1, levelReq: 30,
    classReq: ['assassin'],
    equipSlot: 'weapon', stats: { atk: 35, dex: 8, critRate: 6 },
    rarity: 'epic', weaponType: 'dagger', setId: 'shadow_hunter_set',
  },

dragon_scale_blade: {
    id: 'dragon_scale_blade', name: '龍鱗匕首', type: 'weapon',
    description: '龍鱗鍛造的傳說匕首，一擊必殺。', buyPrice: 5800, sellPrice: 2900,
    stackable: false, maxStack: 1, levelReq: 40,
    classReq: ['assassin'],
    equipSlot: 'weapon', stats: { atk: 50, dex: 10, critRate: 8 },
    rarity: 'legendary', weaponType: 'dagger', setId: 'shadow_hunter_set',
  },

// ============ 鞭 (Whip) - 馴獸師 ============
  leather_whip: {
    id: 'leather_whip', name: '皮鞭', type: 'weapon',
    description: '牧場用的皮鞭，威嚇野獸。', buyPrice: 50, sellPrice: 25,
    stackable: false, maxStack: 1, levelReq: 1,
    equipSlot: 'weapon', stats: { atk: 5, dex: 1 },
    rarity: 'common', weaponType: 'whip',
  },

chain_whip: {
    id: 'chain_whip', name: '鐵鏈鞭', type: 'weapon',
    description: '鐵鏈編織的鞭，馴服強獸。', buyPrice: 300, sellPrice: 150,
    stackable: false, maxStack: 1, levelReq: 10,
    classReq: ['beast_master'],
    equipSlot: 'weapon', stats: { atk: 13, dex: 3 },
    rarity: 'uncommon', weaponType: 'whip',
  },

steel_whip: {
    id: 'steel_whip', name: '鋼鞭', type: 'weapon',
    description: '精鋼鞭身，揮舞如蛇。', buyPrice: 810, sellPrice: 405,
    stackable: false, maxStack: 1, levelReq: 20,
    classReq: ['beast_master'],
    equipSlot: 'weapon', stats: { atk: 23, dex: 5, str: 2 },
    rarity: 'rare', weaponType: 'whip',
  },

mithril_whip: {
    id: 'mithril_whip', name: '秘銀鞭', type: 'weapon',
    description: '秘銀編織的鞭，靈動致命。', buyPrice: 2400, sellPrice: 1200,
    stackable: false, maxStack: 1, levelReq: 30,
    classReq: ['beast_master'],
    equipSlot: 'weapon', stats: { atk: 37, dex: 7, str: 4 },
    rarity: 'epic', weaponType: 'whip', setId: 'shadow_hunter_set',
  },

dragon_sinew_whip: {
    id: 'dragon_sinew_whip', name: '龍筋鞭', type: 'weapon',
    description: '龍筋製成的傳說鞭，可馴服龍族。', buyPrice: 5900, sellPrice: 2950,
    stackable: false, maxStack: 1, levelReq: 40,
    classReq: ['beast_master'],
    equipSlot: 'weapon', stats: { atk: 52, dex: 9, str: 6 },
    rarity: 'legendary', weaponType: 'whip', setId: 'shadow_hunter_set',
  },

// ============ 聖典 (Holy Tome) - 祭司/神官 ============
  prayer_holy_tome: {
    id: 'prayer_holy_tome', name: '祈禱書', type: 'weapon',
    description: '記載基礎祈禱文的書籍。', buyPrice: 55, sellPrice: 27,
    stackable: false, maxStack: 1, levelReq: 1,
    equipSlot: 'offhand', stats: { matk: 6, vit: 1 },
    rarity: 'common', weaponType: 'holy_tome',
  },

ironclasp_holy_tome: {
    id: 'ironclasp_holy_tome', name: '鐵釦聖典', type: 'weapon',
    description: '鐵釦裝飾的聖典，蘊含聖光。', buyPrice: 300, sellPrice: 150,
    stackable: false, maxStack: 1, levelReq: 10,
    classReq: ['priest', 'high_priest'],
    equipSlot: 'offhand', stats: { matk: 14, vit: 2, mp: 10 },
    rarity: 'uncommon', weaponType: 'holy_tome',
  },

crystal_holy_tome: {
    id: 'crystal_holy_tome', name: '水晶聖典', type: 'weapon',
    description: '聖光水晶鑲嵌的聖典，治癒之力強大。', buyPrice: 830, sellPrice: 415,
    stackable: false, maxStack: 1, levelReq: 20,
    classReq: ['priest', 'high_priest'],
    equipSlot: 'offhand', stats: { matk: 25, vit: 4, int: 3, mp: 25 },
    rarity: 'rare', weaponType: 'holy_tome',
  },

mithril_holy_tome: {
    id: 'mithril_holy_tome', name: '秘銀聖典', type: 'weapon',
    description: '秘銀書頁的聖典，神聖護佑。', buyPrice: 2500, sellPrice: 1250,
    stackable: false, maxStack: 1, levelReq: 30,
    classReq: ['priest', 'high_priest'],
    equipSlot: 'offhand', stats: { matk: 38, vit: 6, int: 5, mp: 40 },
    rarity: 'epic', weaponType: 'holy_tome', setId: 'holy_guardian_set',
  },

dragon_holy_tome: {
    id: 'dragon_holy_tome', name: '龍聖典', type: 'weapon',
    description: '記載龍神祝福的傳說聖典，奇蹟降臨。', buyPrice: 6000, sellPrice: 3000,
    stackable: false, maxStack: 1, levelReq: 40,
    classReq: ['priest', 'high_priest'],
    equipSlot: 'offhand', stats: { matk: 55, vit: 8, int: 7, mp: 60 },
    rarity: 'legendary', weaponType: 'holy_tome', setId: 'holy_guardian_set',
  },

// ============ 自然杖 (Nature Staff) - 德魯伊 ============
  sapling_staff: {
    id: 'sapling_staff', name: '樹苗杖', type: 'weapon',
    description: '以活樹苗製成的法杖，生命之力微弱。', buyPrice: 55, sellPrice: 27,
    stackable: false, maxStack: 1, levelReq: 1,
    equipSlot: 'weapon', stats: { matk: 5, vit: 1, hp: 10 },
    rarity: 'common', weaponType: 'staff',
  },

ironring_nature_staff: {
    id: 'ironring_nature_staff', name: '鐵環自然杖', type: 'weapon',
    description: '鐵環固定的自然杖，大地之力流轉。', buyPrice: 300, sellPrice: 150,
    stackable: false, maxStack: 1, levelReq: 10,
    classReq: ['druid'],
    equipSlot: 'weapon', stats: { matk: 13, vit: 2, int: 2, hp: 20 },
    rarity: 'uncommon', weaponType: 'staff',
  },

emerald_nature_staff: {
    id: 'emerald_nature_staff', name: '翡翠自然杖', type: 'weapon',
    description: '鑲嵌翡翠的自然杖，萬物生長。', buyPrice: 820, sellPrice: 410,
    stackable: false, maxStack: 1, levelReq: 20,
    classReq: ['druid'],
    equipSlot: 'weapon', stats: { matk: 24, vit: 4, int: 3, hp: 40 },
    rarity: 'rare', weaponType: 'staff',
  },

mithril_nature_staff: {
    id: 'mithril_nature_staff', name: '秘銀自然杖', type: 'weapon',
    description: '秘銀與古樹融合的自然杖，生命脈動。', buyPrice: 2500, sellPrice: 1250,
    stackable: false, maxStack: 1, levelReq: 30,
    classReq: ['druid'],
    equipSlot: 'weapon', stats: { matk: 38, vit: 6, int: 5, hp: 60 },
    rarity: 'epic', weaponType: 'staff', setId: 'holy_guardian_set',
  },

dragon_tree_nature_staff: {
    id: 'dragon_tree_nature_staff', name: '龍樹自然杖', type: 'weapon',
    description: '世界樹與龍力交織的傳說自然杖。', buyPrice: 6000, sellPrice: 3000,
    stackable: false, maxStack: 1, levelReq: 40,
    classReq: ['druid'],
    equipSlot: 'weapon', stats: { matk: 55, vit: 8, int: 7, hp: 100 },
    rarity: 'legendary', weaponType: 'staff', setId: 'holy_guardian_set',
  },

// ============ 戰錘 (Warhammer) - 審判者/騎士 ============
  wooden_warhammer: {
    id: 'wooden_warhammer', name: '木槌', type: 'weapon',
    description: '粗糙的木頭錘子，聊勝於無。', buyPrice: 60, sellPrice: 30,
    stackable: false, maxStack: 1, levelReq: 1,
    equipSlot: 'weapon', stats: { atk: 7, def: 1 },
    rarity: 'common', weaponType: 'warhammer',
  },

iron_warhammer: {
    id: 'iron_warhammer', name: '鐵戰錘', type: 'weapon',
    description: '沉重的鐵製戰錘，粉碎敵人。', buyPrice: 320, sellPrice: 160,
    stackable: false, maxStack: 1, levelReq: 10,
    classReq: ['inquisitor', 'knight'],
    equipSlot: 'weapon', stats: { atk: 16, def: 3, str: 2 },
    rarity: 'uncommon', weaponType: 'warhammer',
  },

steel_warhammer: {
    id: 'steel_warhammer', name: '鋼戰錘', type: 'weapon',
    description: '精鋼鍛造的戰錘，制裁邪惡。', buyPrice: 840, sellPrice: 420,
    stackable: false, maxStack: 1, levelReq: 20,
    classReq: ['inquisitor', 'knight'],
    equipSlot: 'weapon', stats: { atk: 28, def: 5, str: 3, matk: 5 },
    rarity: 'rare', weaponType: 'warhammer',
  },

mithril_warhammer: {
    id: 'mithril_warhammer', name: '秘銀戰錘', type: 'weapon',
    description: '秘銀鍛造的戰錘，神聖審判。', buyPrice: 2600, sellPrice: 1300,
    stackable: false, maxStack: 1, levelReq: 30,
    classReq: ['inquisitor', 'knight'],
    equipSlot: 'weapon', stats: { atk: 42, def: 7, str: 5, matk: 8 },
    rarity: 'epic', weaponType: 'warhammer', setId: 'holy_guardian_set',
  },

dragonbone_warhammer: {
    id: 'dragonbone_warhammer', name: '龍骨戰錘', type: 'weapon',
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
    equipSlot: 'ring', stats: { atk: 8, str: 4, critRate: 3 },
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
    equipSlot: 'ring', stats: { matk: 10, int: 5, mp: 30 },
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
    equipSlot: 'ring', stats: { dex: 5, critRate: 4, dodgeRate: 3 },
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
    equipSlot: 'ring', stats: { int: 4, vit: 4, mp: 30 },
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
    rarity: 'rare', weaponType: 'sword',
    attackDescriptions: {
      normal: '揮動斑駁的古劍劈出一道弧光',
      critical: '古劍上的符文突然閃耀，爆發出驚人的一擊！',
      miss: '鏽蝕的劍刃在空中劃過，未能命中',
      kill: '古劍彷彿回應了勇者的意志，貫穿了敵人！',
    },
  },

wolf_fang_blade: {
    id: 'wolf_fang_blade', name: '狼牙匕首', type: 'weapon',
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

pirate_captain_crossbow: {
    id: 'pirate_captain_crossbow', name: '海盜船長的短銃弩', type: 'weapon',
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
    equipSlot: 'offhand', stats: { matk: 33, int: 5, mp: 30 },
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

crystal_cluster_staff: {
    id: 'crystal_cluster_staff', name: '晶簇法杖', type: 'weapon',
    description: '由水晶龍的核心結晶凝聚而成的法杖，杖頂的水晶球中不斷旋轉著七色光芒。它能引導所有元素之力，是法師夢寐以求的至寶。',
    buyPrice: 0, sellPrice: 3500,
    stackable: false, maxStack: 1, levelReq: 26,
    classReq: ['mage', 'archmage'],
    equipSlot: 'weapon', stats: { matk: 47, int: 6, mp: 50, critRate: 3 },
    rarity: 'epic', weaponType: 'staff', element: 'ice',
    attackDescriptions: {
      normal: '水晶法杖頂端的稜鏡旋轉，折射出一道元素光束',
      critical: '七色光芒匯聚為一，法杖釋放出強大的元素風暴！',
      miss: '稜鏡的光芒偏折，元素之力消散在空氣中',
      kill: '水晶法杖爆發出耀眼的光芒，將目標化為無數水晶碎片！',
    },
  },

frost_giant_greataxe: {
    id: 'frost_giant_greataxe', name: '霜巨人的戰斧', type: 'weapon',
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
    equipSlot: 'offhand', stats: { matk: 28, int: 4, vit: 3, mp: 25 },
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
    rarity: 'rare', weaponType: 'staff', element: 'nature',
    attackDescriptions: {
      normal: '藤蔓之杖召喚地底的根莖，纏繞向目標',
      critical: '森林的怒火通過法杖爆發，無數荊棘刺穿了敵人！',
      miss: '藤蔓從地面竄出，卻撲了個空',
      kill: '法杖召喚的藤蔓將目標徹底吞噬，化為養分歸於大地！',
    },
  },

// ============ 特殊武器 - 隱藏寶箱 (Hidden Treasures) ============

  abyssal_blade: {
    id: 'abyssal_blade', name: '深淵匕首', type: 'weapon',
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
    rarity: 'epic', weaponType: 'staff', element: 'ice',
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
    equipSlot: 'offhand', stats: { matk: 42, int: 7, critRate: 4 },
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
    equipSlot: 'offhand', stats: { matk: 45, int: 6, vit: 5, mp: 50 },
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
    rarity: 'legendary', weaponType: 'staff', element: 'nature',
    attackDescriptions: {
      normal: '世界樹之杖召喚大地之力，根莖從地面竄出攻擊目標',
      critical: '世界樹的意志覺醒，自然的原初之力爆發！',
      miss: '大地的力量在腳下湧動，卻未能觸及遠方的目標',
      kill: '世界樹的審判降臨，目標被自然之力分解歸於大地！',
    },
  },

// ============ 特殊武器 - 高階精英掉落 (Lv 40-60) ============

  demon_lord_giant_sword: {
    id: 'demon_lord_giant_sword', name: '魔王之劍', type: 'weapon',
    description: '歷代魔王的力量結晶，漆黑如夜的刀身上流淌著暗紅色的魔力脈絡。揮舞時能聽到無數亡魂的哀嚎，每一次斬擊都伴隨著地獄之火。只有征服了魔王的勇者才配握住這把劍。',
    buyPrice: 0, sellPrice: 8000,
    stackable: false, maxStack: 1, levelReq: 40,
    classReq: ['swordsman', 'sword_saint', 'berserker'],
    equipSlot: 'weapon', stats: { atk: 52, str: 8, dex: 5, critRate: 5 },
    rarity: 'legendary', weaponType: 'giant_sword', element: 'dark',
    attackDescriptions: {
      normal: '魔王之劍劈出一道漆黑的弧光，暗紅的魔力脈絡在刀身上脈動',
      critical: '地獄之門在劍尖開啟！無數亡魂的哀嚎化為毀滅性的一斬！',
      miss: '暗黑刀氣在空中消散，留下一道灼熱的殘影',
      kill: '魔王之劍將目標斬入地獄，暗紅的魔力將靈魂吞噬殆盡！',
    },
  },

elder_dragon_fang_spear: {
    id: 'elder_dragon_fang_spear', name: '古龍之牙', type: 'weapon',
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
    rarity: 'mythic' as ItemRarity, weaponType: 'staff', element: 'dark',
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

bandit_blade: {
    id: 'bandit_blade', name: '盜賊匕首', type: 'weapon',
    description: '盜賊使用的粗糙匕首。', buyPrice: 0, sellPrice: 30,
    stackable: false, maxStack: 1, levelReq: 5,
    equipSlot: 'weapon', stats: { atk: 8, dex: 1 },
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

crystal_sword: {
    id: 'crystal_sword', name: '水晶之劍', type: 'weapon',
    description: '由純淨水晶凝聚而成的長劍，劍身透明如冰。', buyPrice: 0, sellPrice: 600,
    stackable: false, maxStack: 1, levelReq: 28,
    equipSlot: 'weapon', stats: { atk: 42, int: 4, critRate: 3 }, element: 'ice',
  },

phantom_sword: {
    id: 'phantom_sword', name: '幻影之劍', type: 'weapon',
    description: '幽靈騎士的佩劍，劍身半透明，散發冥火。', buyPrice: 0, sellPrice: 350,
    stackable: false, maxStack: 1, levelReq: 23,
    equipSlot: 'weapon', stats: { atk: 35, int: 3, critRate: 4 }, element: 'dark',
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
    description: '纏繞魔法符文的高級法袍，深藍布面以銀線縫出多層防護陣，能穩定大量魔力並保護施法者軀幹。', buyPrice: 2700, sellPrice: 900,
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
    equipSlot: 'necklace', stats: { str: 4, vit: 3, atk: 5 },
  },

mage_earring: {
    id: 'mage_earring', name: '魔導耳環', type: 'accessory',
    description: '增幅魔力的神秘耳環。', buyPrice: 800, sellPrice: 260,
    stackable: false, maxStack: 1, levelReq: 20,
    equipSlot: 'earring', stats: { int: 5, mp: 20, matk: 5 },
  },

// ============ 鍛造裝備（製作系統成品） ============
  iron_shield: {
    id: 'iron_shield', name: '鐵盾', type: 'armor',
    description: '鐵礦鍛造的堅固盾牌，提供可靠的防護。', buyPrice: 300, sellPrice: 150,
    stackable: false, maxStack: 1, levelReq: 8,
    equipSlot: 'offhand', stats: { def: 8, hp: 20 },
    weaponType: 'shield',
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
    equipSlot: 'necklace', stats: { str: 5, int: 5, dex: 5, vit: 5, luk: 5, hp: 100, mp: 50 },
    rarity: 'legendary',
  },
};
