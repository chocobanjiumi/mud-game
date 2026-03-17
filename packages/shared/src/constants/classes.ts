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

  // ─── Tier 1：一轉職業 ───
  swordsman: {
    id: 'swordsman',
    name: '劍士',
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
    resourceType: 'energy',
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

  // ─── Tier 2：二轉職業 - 劍士系 ───
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
    description: '技巧型劍士，以速制敵，連擊與迴避兼備。',
    baseStatBonus: { str: 4, int: 0, dex: 6, vit: 0, luk: 2 },
    parentClass: 'swordsman',
    resourceType: 'rage',
    initialResource: 0,
    maxResource: 100,
  },

  // ─── Tier 2：二轉職業 - 法師系 ───
  archmage: {
    id: 'archmage',
    name: '大法師',
    tier: 2,
    description: '元素大師，擅長範圍毀滅性魔法。',
    baseStatBonus: { str: 0, int: 12, dex: 0, vit: 0, luk: 0 },
    parentClass: 'mage',
    resourceType: 'mp',
    initialResource: 80,
    maxResource: 80,
  },
  warlock: {
    id: 'warlock',
    name: '暗黑術士',
    tier: 2,
    description: '暗系法師，擅長持續傷害與控制。',
    baseStatBonus: { str: 0, int: 8, dex: 0, vit: 2, luk: 2 },
    parentClass: 'mage',
    resourceType: 'mp',
    initialResource: 70,
    maxResource: 70,
  },
  chronomancer: {
    id: 'chronomancer',
    name: '時空術士',
    tier: 2,
    description: '時間魔法師，操控戰場節奏，強力控場與輔助。',
    baseStatBonus: { str: 0, int: 6, dex: 4, vit: 0, luk: 2 },
    parentClass: 'mage',
    resourceType: 'mp',
    initialResource: 75,
    maxResource: 75,
  },

  // ─── Tier 2：二轉職業 - 遊俠系 ───
  marksman: {
    id: 'marksman',
    name: '神射手',
    tier: 2,
    description: '遠程狙擊專家，以精準射擊消滅敵人。',
    baseStatBonus: { str: 2, int: 0, dex: 8, vit: 0, luk: 2 },
    parentClass: 'ranger',
    resourceType: 'energy',
    initialResource: 100,
    maxResource: 100,
  },
  assassin: {
    id: 'assassin',
    name: '刺客',
    tier: 2,
    description: '暗影殺手，潛行暗殺，單體爆發極高。',
    baseStatBonus: { str: 4, int: 0, dex: 6, vit: 0, luk: 2 },
    parentClass: 'ranger',
    resourceType: 'energy',
    initialResource: 100,
    maxResource: 100,
  },
  beast_master: {
    id: 'beast_master',
    name: '馴獸師',
    tier: 2,
    description: '與野獸為伴的遊俠，召喚夥伴協同作戰。',
    baseStatBonus: { str: 2, int: 2, dex: 4, vit: 2, luk: 2 },
    parentClass: 'ranger',
    resourceType: 'energy',
    initialResource: 100,
    maxResource: 100,
  },

  // ─── Tier 2：二轉職業 - 祭司系 ───
  high_priest: {
    id: 'high_priest',
    name: '神官',
    tier: 2,
    description: '純治療專精，團隊的生命守護者。',
    baseStatBonus: { str: 0, int: 8, dex: 0, vit: 2, luk: 2 },
    parentClass: 'priest',
    resourceType: 'faith',
    initialResource: 50,
    maxResource: 100,
  },
  druid: {
    id: 'druid',
    name: '德魯伊',
    tier: 2,
    description: '自然之力的使者，能攻能守能治癒。',
    baseStatBonus: { str: 2, int: 4, dex: 2, vit: 2, luk: 2 },
    parentClass: 'priest',
    resourceType: 'faith',
    initialResource: 50,
    maxResource: 100,
  },
  inquisitor: {
    id: 'inquisitor',
    name: '審判者',
    tier: 2,
    description: '攻擊型祭司，以神聖之光制裁邪惡。',
    baseStatBonus: { str: 3, int: 5, dex: 2, vit: 0, luk: 2 },
    parentClass: 'priest',
    resourceType: 'faith',
    initialResource: 50,
    maxResource: 100,
  },
};

/** 根據 ClassId 取得職業定義 */
export function getClassDef(classId: ClassId): ClassDef | undefined {
  return CLASS_DEFS[classId];
}

/** 取得所有一轉職業 */
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

/** 一轉所需等級 */
export const TIER1_LEVEL_REQ = 10;

/** 二轉所需等級 */
export const TIER2_LEVEL_REQ = 30;

/** 二轉所需金幣 */
export const TIER2_GOLD_COST = 5000;
