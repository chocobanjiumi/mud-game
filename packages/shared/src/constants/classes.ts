// 職業定義

import type { ClassDef, ClassId, ResourceType } from '../types/player.js';

/** 所有職業定義 */
export const CLASS_DEFS: Record<ClassId, ClassDef> = {
  // ─── Tier 0：冒險者 ───
  adventurer: {
    id: 'adventurer',
    name: '冒險者',
    tier: 0,
    description: '初出茅廬的冒險者，尚未選擇職業方向。',
    baseStatBonus: { str: 0, int: 0, dex: 0, vit: 0, luk: 0 },
    advancedClasses: ['swordsman', 'mage', 'ranger', 'priest'],
    resourceType: 'mp',
    initialResource: 30,
    maxResource: 30,
  },

  // ─── Tier 1：初始職業 ───
  swordsman: {
    id: 'swordsman',
    name: '戰士',
    tier: 1,
    description: '近戰物理戰士，攻守平衡，是隊伍的前線。',
    baseStatBonus: { str: 5, int: 0, dex: 2, vit: 5, luk: 0 },
    parentClass: 'adventurer',
    advancedClasses: ['knight', 'berserker', 'sword_saint'],
    resourceType: 'rage',
    initialResource: 0,
    maxResource: 100,
  },
  mage: {
    id: 'mage',
    name: '法師',
    tier: 1,
    description: '遠程魔法師，擅長元素魔法，高爆發但防禦脆弱。',
    baseStatBonus: { str: 0, int: 8, dex: 1, vit: 2, luk: 1 },
    parentClass: 'adventurer',
    advancedClasses: ['archmage', 'warlock', 'chronomancer'],
    resourceType: 'mp',
    initialResource: 50,
    maxResource: 50,
  },
  ranger: {
    id: 'ranger',
    name: '遊俠',
    tier: 1,
    description: '敏捷型戰士，擅長遠程攻擊與暗殺，高迴避高暴擊。',
    baseStatBonus: { str: 2, int: 0, dex: 8, vit: 1, luk: 1 },
    parentClass: 'adventurer',
    advancedClasses: ['marksman', 'assassin', 'beast_master'],
    resourceType: 'focus',
    initialResource: 100,
    maxResource: 100,
  },
  priest: {
    id: 'priest',
    name: '祭司',
    tier: 1,
    description: '神聖治療師，隊伍的核心支援，能治癒傷痛與淨化詛咒。',
    baseStatBonus: { str: 0, int: 5, dex: 1, vit: 3, luk: 3 },
    parentClass: 'adventurer',
    advancedClasses: ['high_priest', 'druid', 'inquisitor'],
    resourceType: 'faith',
    initialResource: 50,
    maxResource: 100,
  },

  // ─── Tier 2：二轉職業 - 戰士系 ───
  knight: {
    id: 'knight',
    name: '騎士',
    tier: 2,
    description: '重裝坦克，以堅固的防禦保護隊伍。',
    baseStatBonus: { str: 3, int: 0, dex: 0, vit: 8, luk: 0 },
    parentClass: 'swordsman',
    resourceType: 'rage',
    initialResource: 0,
    maxResource: 100,
  },
  berserker: {
    id: 'berserker',
    name: '狂戰士',
    tier: 2,
    description: '暴力輸出型戰士，以生命為代價換取極致傷害。',
    baseStatBonus: { str: 10, int: 0, dex: 2, vit: 0, luk: 0 },
    parentClass: 'swordsman',
    resourceType: 'rage',
    initialResource: 0,
    maxResource: 100,
  },
  sword_saint: {
    id: 'sword_saint',
    name: '劍聖',
    tier: 2,
    description: '技巧型戰士，以速制敵，連擊與迴避兼備。',
    baseStatBonus: { str: 4, int: 0, dex: 6, vit: 0, luk: 2 },
    parentClass: 'swordsman',
    resourceType: 'rage',
    initialResource: 0,
    maxResource: 100,
  },

  // ─── Tier 2：二轉職業 - 法師系 ───
  archmage: {
    id: 'archmage',
    name: '元素鑄師',
    tier: 2,
    description: '元素鑄造大師，透過鑄造框將兩個元素技能組合為強力反應。每 tick 可放入兩個元素產生獨特效果。',
    baseStatBonus: { str: 0, int: 12, dex: 0, vit: 0, luk: 0 },
    parentClass: 'mage',
    resourceType: 'mp',
    initialResource: 80,
    maxResource: 80,
  },
  warlock: {
    id: 'warlock',
    name: '魔偶師',
    tier: 2,
    description: '魔偶操控者，製造並指揮獨立戰鬥實體。魔偶有自己的 HP 和行動，可切換攻擊/防禦/充能模式，並派遣到相鄰房間。',
    baseStatBonus: { str: 0, int: 8, dex: 0, vit: 2, luk: 2 },
    parentClass: 'mage',
    resourceType: 'mp',
    initialResource: 70,
    maxResource: 70,
  },
  chronomancer: {
    id: 'chronomancer',
    name: '次元術士',
    tier: 2,
    description: '次元操控者，開啟次元門連結本房與相鄰房間。門開啟後全隊可透過門跨房戰鬥，改變戰場的空間規則。',
    baseStatBonus: { str: 0, int: 6, dex: 4, vit: 0, luk: 2 },
    parentClass: 'mage',
    resourceType: 'mp',
    initialResource: 75,
    maxResource: 75,
  },

  // ─── Tier 2：二轉職業 - 遊俠系 ───
  marksman: {
    id: 'marksman',
    name: '鷹眼獵手',
    tier: 2,
    description: '超遠程狙擊者，可攻擊 1-3 個房間外的敵人。透過瞄準機制累積射程與傷害，距離越遠一擊越致命。',
    baseStatBonus: { str: 2, int: 0, dex: 8, vit: 0, luk: 2 },
    parentClass: 'ranger',
    resourceType: 'focus',
    initialResource: 100,
    maxResource: 100,
  },
  assassin: {
    id: 'assassin',
    name: '幽影獵手',
    tier: 2,
    description: '潛行暗殺者，可進入隱身狀態讓敵人無法選為目標。從潛行中發動攻擊必暴且傷害暴增，擊殺後消失於暗影中。',
    baseStatBonus: { str: 4, int: 0, dex: 6, vit: 0, luk: 2 },
    parentClass: 'ranger',
    resourceType: 'focus',
    initialResource: 100,
    maxResource: 100,
  },
  beast_master: {
    id: 'beast_master',
    name: '馴獸師',
    tier: 2,
    description: '馴獸大師，可捕捉 beast 型怪物作為寵物。寵物是獨立戰鬥實體，有自己的 HP 和技能，可切換攻擊/防守模式。',
    baseStatBonus: { str: 2, int: 2, dex: 4, vit: 2, luk: 2 },
    parentClass: 'ranger',
    resourceType: 'focus',
    initialResource: 100,
    maxResource: 100,
  },

  // ─── Tier 2：二轉職業 - 祭司系 ───
  high_priest: {
    id: 'high_priest',
    name: '神殿師',
    tier: 2,
    description: '聖殿建築者，在房間中建造祭壇。祭壇是有 HP 的實體結構，自動治療全隊。可升級祭壇強化效果，也可將敵人獻祭給祭壇造成 AoE 傷害。',
    baseStatBonus: { str: 0, int: 8, dex: 0, vit: 2, luk: 2 },
    parentClass: 'priest',
    resourceType: 'faith',
    initialResource: 50,
    maxResource: 100,
  },
  druid: {
    id: 'druid',
    name: '冥行者',
    tier: 2,
    description: '靈界穿越者，可進入物質世界的平行維度「靈界」。在靈界中拉回死去隊友的靈魂復活，或將敵人推入靈界暫時放逐。',
    baseStatBonus: { str: 2, int: 4, dex: 2, vit: 2, luk: 2 },
    parentClass: 'priest',
    resourceType: 'faith',
    initialResource: 50,
    maxResource: 100,
  },
  inquisitor: {
    id: 'inquisitor',
    name: '裁決者',
    tier: 2,
    description: '神聖裁判官，敵人的每個行動都會自動累積罪業（0-10）。裁決者消耗罪業進行審判造成傷害，或赦免轉化為隊伍治療。',
    baseStatBonus: { str: 3, int: 5, dex: 2, vit: 0, luk: 2 },
    parentClass: 'priest',
    resourceType: 'faith',
    initialResource: 50,
    maxResource: 100,
  },

  // ─── 怪物專用（不可選擇） ───
  monster: {
    id: 'monster',
    name: '怪物',
    tier: 0,
    description: '怪物專用職業，不可被玩家選擇。',
    baseStatBonus: { str: 0, int: 0, dex: 0, vit: 0, luk: 0 },
    resourceType: 'mp',
    initialResource: 0,
    maxResource: 0,
  },
};

/** 根據 ClassId 取得職業定義 */
export function getClassDef(classId: ClassId): ClassDef | undefined {
  return CLASS_DEFS[classId];
}

/** 取得所有初始職業 */
export function getTier1Classes(): ClassDef[] {
  return Object.values(CLASS_DEFS).filter((c) => c.tier === 1);
}

/** 取得所有二轉職業 */
export function getTier2Classes(): ClassDef[] {
  return Object.values(CLASS_DEFS).filter((c) => c.tier === 2);
}

/** 取得指定職業的進階職業列表 */
export function getAdvancedClasses(classId: ClassId): ClassDef[] {
  const classDef = CLASS_DEFS[classId];
  if (!classDef?.advancedClasses) return [];
  return classDef.advancedClasses
    .map((id) => CLASS_DEFS[id])
    .filter((c): c is ClassDef => c !== undefined);
}

/** 取得職業的資源類型（含繼承） */
export function getClassResourceType(classId: ClassId): ResourceType {
  const classDef = CLASS_DEFS[classId];
  if (classDef) return classDef.resourceType;
  return 'mp'; // fallback
}

/** 判斷職業是否屬於指定職業系（沿 parentClass 向上追溯） */
export function isClassFamily(classId: ClassId, familyClassId: ClassId): boolean {
  let current: ClassId | undefined = classId;
  while (current) {
    if (current === familyClassId) return true;
    const def: ClassDef | undefined = CLASS_DEFS[current];
    current = def?.parentClass;
  }
  return false;
}

/** 初始職業所需等級；新角色建立時即選擇，保留給舊冒險者補選用。 */
export const TIER1_LEVEL_REQ = 1;

/** 二轉所需等級 */
export const TIER2_LEVEL_REQ = 20;

/** 三轉 / 高階專精所需等級 */
export const TIER3_LEVEL_REQ = 40;

/** 二轉所需金幣 */
export const TIER2_GOLD_COST = 2000;
