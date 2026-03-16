// 轉職系統 - 一轉 (Lv 10) 與二轉 (Lv 30)

import type { Character, ClassId, BaseStats, ClassDef } from '@game/shared';

// ============================================================
//  職業定義
// ============================================================

/** 職業資料表 */
export const CLASS_DEFS: Record<ClassId, ClassDef> = {
  // Tier 0 — 冒險者
  adventurer: {
    id: 'adventurer',
    name: '冒險者',
    tier: 0,
    description: '尚未選擇職業的初心者。',
    baseStatBonus: { str: 0, int: 0, dex: 0, vit: 0, luk: 0 },
    advancedClasses: ['swordsman', 'mage', 'ranger', 'priest'],
  },

  // Tier 1 — 一轉
  swordsman: {
    id: 'swordsman',
    name: '劍士',
    tier: 1,
    description: '近戰物理職業，攻守平衡。',
    baseStatBonus: { str: 5, int: 0, dex: 2, vit: 5, luk: 0 },
    parentClass: 'adventurer',
    advancedClasses: ['knight', 'berserker', 'sword_saint'],
  },
  mage: {
    id: 'mage',
    name: '法師',
    tier: 1,
    description: '遠程魔法職業，高爆發但脆皮。',
    baseStatBonus: { str: 0, int: 8, dex: 1, vit: 2, luk: 1 },
    parentClass: 'adventurer',
    advancedClasses: ['archmage', 'warlock', 'chronomancer'],
  },
  ranger: {
    id: 'ranger',
    name: '遊俠',
    tier: 1,
    description: '敏捷型職業，高迴避高暴擊。',
    baseStatBonus: { str: 2, int: 0, dex: 8, vit: 1, luk: 1 },
    parentClass: 'adventurer',
    advancedClasses: ['marksman', 'assassin', 'beast_master'],
  },
  priest: {
    id: 'priest',
    name: '祭司',
    tier: 1,
    description: '治療輔助職業，隊伍核心。',
    baseStatBonus: { str: 0, int: 5, dex: 1, vit: 3, luk: 3 },
    parentClass: 'adventurer',
    advancedClasses: ['high_priest', 'druid', 'inquisitor'],
  },

  // Tier 2 — 二轉（劍士系）
  knight: {
    id: 'knight',
    name: '騎士',
    tier: 2,
    description: '重裝坦克，保護隊伍。',
    baseStatBonus: { str: 3, int: 0, dex: 1, vit: 8, luk: 0 },
    parentClass: 'swordsman',
  },
  berserker: {
    id: 'berserker',
    name: '狂戰士',
    tier: 2,
    description: '暴力輸出，以血換傷害。',
    baseStatBonus: { str: 10, int: 0, dex: 2, vit: 0, luk: 0 },
    parentClass: 'swordsman',
  },
  sword_saint: {
    id: 'sword_saint',
    name: '劍聖',
    tier: 2,
    description: '技巧型劍士，高連擊高迴避。',
    baseStatBonus: { str: 4, int: 0, dex: 6, vit: 1, luk: 1 },
    parentClass: 'swordsman',
  },

  // Tier 2 — 二轉（法師系）
  archmage: {
    id: 'archmage',
    name: '大法師',
    tier: 2,
    description: '元素大師，範圍毀滅。',
    baseStatBonus: { str: 0, int: 10, dex: 0, vit: 1, luk: 1 },
    parentClass: 'mage',
  },
  warlock: {
    id: 'warlock',
    name: '暗黑術士',
    tier: 2,
    description: 'DoT + 控制，持續壓制。',
    baseStatBonus: { str: 0, int: 8, dex: 1, vit: 2, luk: 1 },
    parentClass: 'mage',
  },
  chronomancer: {
    id: 'chronomancer',
    name: '時空術士',
    tier: 2,
    description: '時間魔法，控場與輔助。',
    baseStatBonus: { str: 0, int: 6, dex: 3, vit: 1, luk: 2 },
    parentClass: 'mage',
  },

  // Tier 2 — 二轉（遊俠系）
  marksman: {
    id: 'marksman',
    name: '神射手',
    tier: 2,
    description: '遠程爆發，精準狙殺。',
    baseStatBonus: { str: 2, int: 0, dex: 8, vit: 0, luk: 2 },
    parentClass: 'ranger',
  },
  assassin: {
    id: 'assassin',
    name: '刺客',
    tier: 2,
    description: '潛行暗殺，單體爆發。',
    baseStatBonus: { str: 3, int: 0, dex: 7, vit: 0, luk: 2 },
    parentClass: 'ranger',
  },
  beast_master: {
    id: 'beast_master',
    name: '馴獸師',
    tier: 2,
    description: '召喚夥伴，人寵協同作戰。',
    baseStatBonus: { str: 2, int: 2, dex: 4, vit: 2, luk: 2 },
    parentClass: 'ranger',
  },

  // Tier 2 — 二轉（祭司系）
  high_priest: {
    id: 'high_priest',
    name: '神官',
    tier: 2,
    description: '純治療，團隊奶媽。',
    baseStatBonus: { str: 0, int: 6, dex: 0, vit: 4, luk: 2 },
    parentClass: 'priest',
  },
  druid: {
    id: 'druid',
    name: '德魯伊',
    tier: 2,
    description: '混合型，能奶能打能控。',
    baseStatBonus: { str: 2, int: 4, dex: 2, vit: 2, luk: 2 },
    parentClass: 'priest',
  },
  inquisitor: {
    id: 'inquisitor',
    name: '審判者',
    tier: 2,
    description: '攻擊型祭司，神聖制裁。',
    baseStatBonus: { str: 3, int: 5, dex: 2, vit: 1, luk: 1 },
    parentClass: 'priest',
  },
};

// ============================================================
//  一轉需求 (Lv 10)
// ============================================================

const FIRST_CLASS_CHANGE_LEVEL = 10;
const FIRST_CLASS_CHANGE_GOLD = 500;

/** 一轉可選的職業 */
const FIRST_CLASS_OPTIONS: ClassId[] = ['swordsman', 'mage', 'ranger', 'priest'];

// ============================================================
//  二轉需求 (Lv 30)
// ============================================================

const SECOND_CLASS_CHANGE_LEVEL = 30;
const SECOND_CLASS_CHANGE_GOLD = 5000;

/** 一轉 → 二轉的路徑 */
const SECOND_CLASS_OPTIONS: Record<ClassId, ClassId[]> = {
  swordsman: ['knight', 'berserker', 'sword_saint'],
  mage: ['archmage', 'warlock', 'chronomancer'],
  ranger: ['marksman', 'assassin', 'beast_master'],
  priest: ['high_priest', 'druid', 'inquisitor'],
  // 其他不適用
  adventurer: [],
  knight: [], berserker: [], sword_saint: [],
  archmage: [], warlock: [], chronomancer: [],
  marksman: [], assassin: [], beast_master: [],
  high_priest: [], druid: [], inquisitor: [],
};

// ============================================================
//  ClassChangeManager
// ============================================================

export interface ClassChangeResult {
  success: boolean;
  message: string;
  newClassId?: ClassId;
  statBonus?: BaseStats;
}

export class ClassChangeManager {

  /**
   * 檢查角色是否符合轉職資格
   */
  checkClassChangeEligibility(char: Character, targetClassId: ClassId): ClassChangeResult {
    const targetDef = CLASS_DEFS[targetClassId];
    if (!targetDef) {
      return { success: false, message: `未知的職業：${targetClassId}` };
    }

    const currentDef = CLASS_DEFS[char.classId];
    if (!currentDef) {
      return { success: false, message: '角色的當前職業資料異常。' };
    }

    // ── 一轉：冒險者 → Tier 1 ────────────────────────
    if (currentDef.tier === 0 && targetDef.tier === 1) {
      if (!FIRST_CLASS_OPTIONS.includes(targetClassId)) {
        return { success: false, message: `${targetDef.name}不是有效的一轉職業。` };
      }
      if (char.level < FIRST_CLASS_CHANGE_LEVEL) {
        return {
          success: false,
          message: `等級不足！一轉需要 Lv ${FIRST_CLASS_CHANGE_LEVEL}，你目前 Lv ${char.level}。`,
        };
      }
      if (char.gold < FIRST_CLASS_CHANGE_GOLD) {
        return {
          success: false,
          message: `金幣不足！一轉需要 ${FIRST_CLASS_CHANGE_GOLD} 金幣，你目前有 ${char.gold} 金幣。`,
        };
      }
      return { success: true, message: '符合一轉資格！' };
    }

    // ── 二轉：Tier 1 → Tier 2 ────────────────────────
    if (currentDef.tier === 1 && targetDef.tier === 2) {
      const validOptions = SECOND_CLASS_OPTIONS[char.classId] ?? [];
      if (!validOptions.includes(targetClassId)) {
        return {
          success: false,
          message: `${currentDef.name}不能轉職為${targetDef.name}。`,
        };
      }
      if (char.level < SECOND_CLASS_CHANGE_LEVEL) {
        return {
          success: false,
          message: `等級不足！二轉需要 Lv ${SECOND_CLASS_CHANGE_LEVEL}，你目前 Lv ${char.level}。`,
        };
      }
      if (char.gold < SECOND_CLASS_CHANGE_GOLD) {
        return {
          success: false,
          message: `金幣不足！二轉需要 ${SECOND_CLASS_CHANGE_GOLD} 金幣，你目前有 ${char.gold} 金幣。`,
        };
      }
      return { success: true, message: '符合二轉資格！' };
    }

    // ── 不合法的轉職路徑 ──────────────────────────────
    if (currentDef.tier >= 2) {
      return { success: false, message: '你已經完成了最終轉職，無法再次轉職。' };
    }

    return {
      success: false,
      message: `無法從 ${currentDef.name} 轉職為 ${targetDef.name}。轉職路徑不合法。`,
    };
  }

  /**
   * 執行轉職
   * 會修改角色的 classId 並加上職業屬性加成
   */
  performClassChange(char: Character, targetClassId: ClassId): ClassChangeResult {
    // 先檢查資格
    const eligibility = this.checkClassChangeEligibility(char, targetClassId);
    if (!eligibility.success) {
      return eligibility;
    }

    const targetDef = CLASS_DEFS[targetClassId];
    const currentDef = CLASS_DEFS[char.classId];

    // 扣金幣
    const goldCost = currentDef.tier === 0 ? FIRST_CLASS_CHANGE_GOLD : SECOND_CLASS_CHANGE_GOLD;
    char.gold -= goldCost;

    // 加屬性
    const bonus = targetDef.baseStatBonus;
    char.stats.str += bonus.str;
    char.stats.int += bonus.int;
    char.stats.dex += bonus.dex;
    char.stats.vit += bonus.vit;
    char.stats.luk += bonus.luk;

    // 更換職業
    const oldClassName = currentDef.name;
    char.classId = targetClassId;

    // 回滿 HP/MP（轉職慶祝）
    // 重新計算上限
    this.recalculateMaxHpMp(char);
    char.hp = char.maxHp;
    char.mp = char.maxMp;

    const tierLabel = targetDef.tier === 1 ? '一轉' : '二轉';
    return {
      success: true,
      message:
        `恭喜！你成功從【${oldClassName}】${tierLabel}為【${targetDef.name}】！\n` +
        `獲得屬性加成：STR+${bonus.str} INT+${bonus.int} DEX+${bonus.dex} VIT+${bonus.vit} LUK+${bonus.luk}\n` +
        `消耗 ${goldCost} 金幣。`,
      newClassId: targetClassId,
      statBonus: bonus,
    };
  }

  /**
   * 取得角色可選的轉職目標
   */
  getAvailableClassChanges(char: Character): ClassDef[] {
    const currentDef = CLASS_DEFS[char.classId];
    if (!currentDef || !currentDef.advancedClasses) return [];

    return currentDef.advancedClasses
      .map(id => CLASS_DEFS[id])
      .filter((d): d is ClassDef => d !== undefined);
  }

  /**
   * 取得職業定義
   */
  getClassDef(classId: ClassId): ClassDef | undefined {
    return CLASS_DEFS[classId];
  }

  /**
   * 取得職業的中文名稱
   */
  getClassName(classId: ClassId): string {
    return CLASS_DEFS[classId]?.name ?? '未知職業';
  }

  /**
   * 根據基礎屬性重新計算 HP/MP 上限（和 player.ts 一致）
   */
  private recalculateMaxHpMp(char: Character): void {
    const baseHp = 100;
    const baseMp = 30;
    let hp = baseHp;
    let mp = baseMp;

    for (let lv = 2; lv <= char.level; lv++) {
      hp += 10 + char.stats.vit * 2;
      mp += Math.floor(5 + char.stats.int * 1.5);
    }

    char.maxHp = hp;
    char.maxMp = mp;
  }
}
