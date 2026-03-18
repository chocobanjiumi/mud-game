// 技能樹 / 加點系統 — SkillTreeManager
// 三大分支：攻擊、防禦、輔助，每點 +2% ATK / +2% DEF / +1% all secondary stats
// 解鎖節點：5/10/15/20 點

import { getDb } from '../db/schema.js';
import { sendToCharacter } from '../ws/handler.js';
import type { Character, ClassId } from '@game/shared';
import { CLASS_DEFS } from '@game/shared';

// ============================================================
//  型別
// ============================================================

export type SkillTreeBranch = 'attack' | 'defense' | 'support';

export interface SkillPointAllocation {
  totalPoints: number;
  attackPoints: number;
  defensePoints: number;
  supportPoints: number;
}

export interface SkillTreeBonuses {
  atkPercent: number;
  defPercent: number;
  critRateBonus: number;
  dodgeRateBonus: number;
  hitRateBonus: number;
  critDamageBonus: number;
}

/** 分支解鎖的技能 */
export interface BranchUnlock {
  pointsRequired: number;
  skillId: string;
  name: string;
  description: string;
}

// ============================================================
//  分支解鎖定義（每個職業可以用相同的通用解鎖，也可按職業區分）
// ============================================================

const ATTACK_UNLOCKS: BranchUnlock[] = [
  { pointsRequired: 5, skillId: 'power_strike', name: '力量打擊', description: '造成 150% ATK 的傷害' },
  { pointsRequired: 10, skillId: 'fury_slash', name: '狂怒斬', description: '造成 200% ATK 的傷害，消耗 20% HP' },
  { pointsRequired: 15, skillId: 'piercing_blow', name: '貫穿打擊', description: '無視 30% 防禦' },
  { pointsRequired: 20, skillId: 'ultimate_strike', name: '終極一擊', description: '造成 300% ATK 的傷害，冷卻 5 回合' },
];

const DEFENSE_UNLOCKS: BranchUnlock[] = [
  { pointsRequired: 5, skillId: 'iron_skin', name: '鐵皮術', description: '3 回合內減傷 20%' },
  { pointsRequired: 10, skillId: 'shield_wall', name: '盾牆', description: '5 回合內減傷 40%' },
  { pointsRequired: 15, skillId: 'counter_stance', name: '反擊姿態', description: '被攻擊時有 30% 機率反擊' },
  { pointsRequired: 20, skillId: 'invincible_guard', name: '無敵守護', description: '1 回合完全免疫傷害，冷卻 10 回合' },
];

const SUPPORT_UNLOCKS: BranchUnlock[] = [
  { pointsRequired: 5, skillId: 'keen_eye', name: '銳眼', description: '3 回合內命中率 +20%' },
  { pointsRequired: 10, skillId: 'swift_movement', name: '疾風步', description: '3 回合內迴避率 +20%' },
  { pointsRequired: 15, skillId: 'critical_focus', name: '暴擊專注', description: '3 回合內暴擊率 +15%' },
  { pointsRequired: 20, skillId: 'transcendence', name: '超越', description: '5 回合內全屬性 +10%' },
];

const BRANCH_UNLOCKS: Record<SkillTreeBranch, BranchUnlock[]> = {
  attack: ATTACK_UNLOCKS,
  defense: DEFENSE_UNLOCKS,
  support: SUPPORT_UNLOCKS,
};

const BRANCH_NAMES: Record<SkillTreeBranch, string> = {
  attack: '攻擊',
  defense: '防禦',
  support: '輔助',
};

// ============================================================
//  SkillTreeManager
// ============================================================

export class SkillTreeManager {

  ensureTables(): void {
    try {
      getDb().exec(`
        CREATE TABLE IF NOT EXISTS skill_points (
          character_id TEXT PRIMARY KEY,
          total_points INTEGER DEFAULT 0,
          attack_points INTEGER DEFAULT 0,
          defense_points INTEGER DEFAULT 0,
          support_points INTEGER DEFAULT 0
        )
      `);
    } catch { /* table may already exist */ }
  }

  // ──────────────────────────────────────────────────────────
  //  加點
  // ──────────────────────────────────────────────────────────

  addPoint(characterId: string, branch: SkillTreeBranch, character: Character): { success: boolean; message: string } {
    const allocation = this.getSkillTree(characterId);

    // 二轉後才能使用技能樹
    const classDef = CLASS_DEFS[character.classId];
    if (!classDef || classDef.tier < 2) {
      return { success: false, message: '需要完成二轉後才能使用技能樹。' };
    }

    const spent = allocation.attackPoints + allocation.defensePoints + allocation.supportPoints;
    const available = allocation.totalPoints - spent;

    if (available <= 0) {
      return { success: false, message: `沒有可用的技能點！（總點數：${allocation.totalPoints}，已分配：${spent}）` };
    }

    const columnMap: Record<SkillTreeBranch, string> = {
      attack: 'attack_points',
      defense: 'defense_points',
      support: 'support_points',
    };

    try {
      getDb().prepare(
        `UPDATE skill_points SET ${columnMap[branch]} = ${columnMap[branch]} + 1 WHERE character_id = ?`,
      ).run(characterId);
    } catch { /* ignore */ }

    const newPoints = this.getSkillTree(characterId);
    const branchPoints = branch === 'attack' ? newPoints.attackPoints
      : branch === 'defense' ? newPoints.defensePoints
      : newPoints.supportPoints;

    // 檢查解鎖
    const unlocks = BRANCH_UNLOCKS[branch];
    const justUnlocked = unlocks.find(u => u.pointsRequired === branchPoints);

    let msg = `成功在「${BRANCH_NAMES[branch]}」分支投入 1 點！（${BRANCH_NAMES[branch]}：${branchPoints} 點）`;
    if (justUnlocked) {
      msg += `\n解鎖新技能：【${justUnlocked.name}】— ${justUnlocked.description}`;
    }

    return { success: true, message: msg };
  }

  // ──────────────────────────────────────────────────────────
  //  查詢
  // ──────────────────────────────────────────────────────────

  getSkillTree(characterId: string): SkillPointAllocation {
    try {
      const row = getDb()
        .prepare('SELECT * FROM skill_points WHERE character_id = ?')
        .get(characterId) as {
          character_id: string;
          total_points: number;
          attack_points: number;
          defense_points: number;
          support_points: number;
        } | undefined;

      if (!row) {
        return { totalPoints: 0, attackPoints: 0, defensePoints: 0, supportPoints: 0 };
      }

      return {
        totalPoints: row.total_points,
        attackPoints: row.attack_points,
        defensePoints: row.defense_points,
        supportPoints: row.support_points,
      };
    } catch {
      return { totalPoints: 0, attackPoints: 0, defensePoints: 0, supportPoints: 0 };
    }
  }

  // ──────────────────────────────────────────────────────────
  //  重置
  // ──────────────────────────────────────────────────────────

  resetTree(characterId: string, character: Character): { success: boolean; message: string } {
    const cost = 1000;
    if (character.gold < cost) {
      return { success: false, message: `重置技能樹需要 ${cost} 金幣，你目前有 ${character.gold} 金幣。` };
    }

    const allocation = this.getSkillTree(characterId);
    if (allocation.attackPoints === 0 && allocation.defensePoints === 0 && allocation.supportPoints === 0) {
      return { success: false, message: '技能樹尚未分配任何點數，無需重置。' };
    }

    character.gold -= cost;

    try {
      getDb().prepare(
        'UPDATE skill_points SET attack_points = 0, defense_points = 0, support_points = 0 WHERE character_id = ?',
      ).run(characterId);
    } catch { /* ignore */ }

    return {
      success: true,
      message: `技能樹已重置！消耗 ${cost} 金幣。所有技能點已歸還（共 ${allocation.totalPoints} 點）。`,
    };
  }

  // ──────────────────────────────────────────────────────────
  //  升級時給予技能點（二轉後每次升級 +1）
  // ──────────────────────────────────────────────────────────

  grantPoint(characterId: string, character: Character): void {
    const classDef = CLASS_DEFS[character.classId];
    if (!classDef || classDef.tier < 2) return;

    try {
      const existing = getDb()
        .prepare('SELECT 1 FROM skill_points WHERE character_id = ?')
        .get(characterId);

      if (existing) {
        getDb().prepare(
          'UPDATE skill_points SET total_points = total_points + 1 WHERE character_id = ?',
        ).run(characterId);
      } else {
        getDb().prepare(
          'INSERT INTO skill_points (character_id, total_points, attack_points, defense_points, support_points) VALUES (?, 1, 0, 0, 0)',
        ).run(characterId);
      }
    } catch { /* ignore */ }

    sendToCharacter(characterId, 'system', {
      text: '獲得 1 技能點！使用 skilltree add <attack|defense|support> 分配。',
    });
  }

  // ──────────────────────────────────────────────────────────
  //  計算加成
  // ──────────────────────────────────────────────────────────

  getBranchBonuses(characterId: string): SkillTreeBonuses {
    const alloc = this.getSkillTree(characterId);
    return {
      atkPercent: alloc.attackPoints * 2,       // +2% ATK per point
      defPercent: alloc.defensePoints * 2,       // +2% DEF per point
      critRateBonus: alloc.supportPoints * 1,    // +1% crit rate per point
      dodgeRateBonus: alloc.supportPoints * 1,   // +1% dodge per point
      hitRateBonus: alloc.supportPoints * 1,     // +1% hit per point
      critDamageBonus: alloc.supportPoints * 1,  // +1% crit damage per point
    };
  }

  // ──────────────────────────────────────────────────────────
  //  格式化顯示
  // ──────────────────────────────────────────────────────────

  formatSkillTree(characterId: string): string {
    const alloc = this.getSkillTree(characterId);
    const spent = alloc.attackPoints + alloc.defensePoints + alloc.supportPoints;
    const available = alloc.totalPoints - spent;

    let text = '技能樹\n';
    text += '─'.repeat(40) + '\n';
    text += `總技能點：${alloc.totalPoints}　已分配：${spent}　可用：${available}\n\n`;

    const branches: SkillTreeBranch[] = ['attack', 'defense', 'support'];
    for (const branch of branches) {
      const points = branch === 'attack' ? alloc.attackPoints
        : branch === 'defense' ? alloc.defensePoints
        : alloc.supportPoints;

      text += `【${BRANCH_NAMES[branch]}】${points} 點\n`;

      if (branch === 'attack') {
        text += `  加成：ATK +${points * 2}%\n`;
      } else if (branch === 'defense') {
        text += `  加成：DEF +${points * 2}%\n`;
      } else {
        text += `  加成：暴擊率/迴避率/命中率/暴傷 各 +${points}%\n`;
      }

      const unlocks = BRANCH_UNLOCKS[branch];
      for (const u of unlocks) {
        const unlocked = points >= u.pointsRequired;
        text += `  ${unlocked ? '[已解鎖]' : `[${u.pointsRequired}點]`} ${u.name}：${u.description}\n`;
      }
      text += '\n';
    }

    text += '用法：skilltree add <attack|defense|support>、skilltree reset';
    return text;
  }
}
