// 王國戰爭系統 — WarManager（宣戰、攻城、集結、軍隊、懸賞）

import { randomUUID } from 'crypto';
import { getDb } from '../db/schema.js';
import { getCharacterById, saveCharacter } from '../db/queries.js';
import { sendToCharacter } from '../ws/handler.js';
import type {
  KingdomRank, WarStatus, BountyStatus, KingdomWar,
  KingdomBounty, KingdomMember,
} from '@game/shared';

// ============================================================
//  常數（可配置）
// ============================================================

/** 宣戰費用 */
const WAR_DECLARATION_COST = 5000;

/** 攻城結構 HP */
const GATE_MAX_HP = 1000;
const WALL_MAX_HP = 2000;
const PALACE_MAX_HP = 3000;

/** 修復費用（每 HP） */
const REPAIR_COST_PER_HP = 5;

/** 士兵招募費用（每人） */
const SOLDIER_RECRUIT_COST = 100;

/** 士兵每日維護費 */
const SOLDIER_DAILY_MAINTENANCE = 10;

/** 基礎攻擊力（每位參戰者） */
const BASE_ATTACK_POWER = 50;

/** 士兵攻擊力加成 */
const SOLDIER_ATTACK_POWER = 10;

/** 集結有效時間（ms）：30 分鐘 */
const RALLY_DURATION = 30 * 60 * 1000;

// ============================================================
//  官職權限輔助
// ============================================================

/** 將軍以上（含）可操作軍事相關 */
const MILITARY_RANKS: KingdomRank[] = ['king', 'chancellor', 'general'];

/** 國王/宰相/外交官可操作外交相關 */
const DIPLOMACY_RANKS: KingdomRank[] = ['king', 'chancellor', 'diplomat'];

function hasRank(memberRank: KingdomRank, allowedRanks: KingdomRank[]): boolean {
  return allowedRanks.includes(memberRank);
}

// ============================================================
//  型別
// ============================================================

interface RallyState {
  kingdomId: string;
  calledBy: string;
  calledAt: number;
  respondents: Set<string>;
}

// ============================================================
//  資料庫初始化
// ============================================================

function ensureWarTables(): void {
  // 所有表已在 schema.ts initDb() 中建立，此處不再重複建表
}

// ============================================================
//  WarManager
// ============================================================

export class WarManager {
  /** 集結狀態（記憶體） */
  private rallies: Map<string, RallyState> = new Map();

  // ──────────────────────────────────────────────────────────
  //  初始化
  // ──────────────────────────────────────────────────────────

  init(): void {
    ensureWarTables();
    console.log('[WarManager] 戰爭系統初始化完成');
  }

  // ──────────────────────────────────────────────────────────
  //  宣戰 / 和平
  // ──────────────────────────────────────────────────────────

  /**
   * 宣戰 — 將軍以上才可發動，消耗 5000 金幣
   */
  declareWar(
    kingdomId: string,
    targetKingdomId: string,
    characterId: string,
  ): { success: boolean; message: string; warId?: string } {
    // 驗證權限
    const member = this.getMember(characterId, kingdomId);
    if (!member) return { success: false, message: '你不是這個王國的成員。' };
    if (!hasRank(member.rank, MILITARY_RANKS)) {
      return { success: false, message: '你的官職不足以宣戰，需要將軍以上。' };
    }

    // 不可對自己宣戰
    if (kingdomId === targetKingdomId) {
      return { success: false, message: '不能對自己的王國宣戰。' };
    }

    // 檢查目標王國是否存在
    const target = this.getKingdom(targetKingdomId);
    if (!target) return { success: false, message: '目標王國不存在。' };

    // 檢查是否已經在戰爭中
    const existingWar = this.getActiveWarBetween(kingdomId, targetKingdomId);
    if (existingWar) return { success: false, message: '雙方已處於戰爭狀態。' };

    // 檢查 24 小時冷卻期
    {
      const db = getDb();
      const recentWar = db.prepare(`
        SELECT id FROM kingdom_wars
        WHERE ((attacker_id = ? AND defender_id = ?) OR (attacker_id = ? AND defender_id = ?))
        AND status IN ('peace', 'ended')
        AND ended_at > (unixepoch() - 86400)
        LIMIT 1
      `).get(kingdomId, targetKingdomId, targetKingdomId, kingdomId) as { id: string } | undefined;
      if (recentWar) {
        return { success: false, message: '停戰後 24 小時內不能對同一王國再次宣戰' };
      }
    }

    // 檢查是否為盟友
    const relation = this.getRelation(kingdomId, targetKingdomId);
    if (relation === 'ally') {
      return { success: false, message: '不能對盟友宣戰，請先解除聯盟。' };
    }

    // 扣除費用
    const kingdom = this.getKingdom(kingdomId);
    if (!kingdom) return { success: false, message: '你的王國不存在。' };
    if (kingdom.treasury_gold < WAR_DECLARATION_COST) {
      return { success: false, message: `國庫金幣不足，宣戰需要 ${WAR_DECLARATION_COST} 金幣。` };
    }

    const db = getDb();
    const warId = randomUUID();

    db.prepare('UPDATE kingdoms SET treasury_gold = treasury_gold - ? WHERE id = ?')
      .run(WAR_DECLARATION_COST, kingdomId);

    // 記錄國庫支出
    this.logTreasuryTransaction(kingdomId, -WAR_DECLARATION_COST, 'war_cost', `宣戰費用`, characterId);

    // 建立戰爭記錄
    db.prepare(`
      INSERT INTO kingdom_wars (id, attacker_id, defender_id, status, started_at, gate_hp, wall_hp, palace_hp)
      VALUES (?, ?, ?, 'active', unixepoch(), ?, ?, ?)
    `).run(warId, kingdomId, targetKingdomId, GATE_MAX_HP, WALL_MAX_HP, PALACE_MAX_HP);

    // 更新外交關係為 enemy
    this.setRelation(kingdomId, targetKingdomId, 'enemy');

    // 通知雙方王國成員
    this.broadcastToKingdom(kingdomId, `⚔️ 我國已對 ${target.name} 宣戰！`);
    this.broadcastToKingdom(targetKingdomId, `⚔️ ${kingdom.name} 向我國宣戰！`);

    return { success: true, message: `成功向 ${target.name} 宣戰！消耗 ${WAR_DECLARATION_COST} 金幣。`, warId };
  }

  /**
   * 提議和平 — 國王/宰相/外交官
   */
  proposePeace(
    kingdomId: string,
    targetKingdomId: string,
    characterId: string,
  ): { success: boolean; message: string } {
    const member = this.getMember(characterId, kingdomId);
    if (!member) return { success: false, message: '你不是這個王國的成員。' };
    if (!hasRank(member.rank, DIPLOMACY_RANKS)) {
      return { success: false, message: '你的官職不足以提議和平，需要國王、宰相或外交官。' };
    }

    const war = this.getActiveWarBetween(kingdomId, targetKingdomId);
    if (!war) return { success: false, message: '雙方目前沒有進行中的戰爭。' };

    if (war.status === 'peace') {
      return { success: false, message: '已有和平提議待處理。' };
    }

    const db = getDb();
    db.prepare('UPDATE kingdom_wars SET status = ?, peace_proposed_by = ? WHERE id = ?')
      .run('peace', kingdomId, war.id);

    const kingdom = this.getKingdom(kingdomId);
    const target = this.getKingdom(targetKingdomId);
    this.broadcastToKingdom(targetKingdomId, `🕊️ ${kingdom?.name ?? '對方'} 提議和平！國王或宰相可以接受或拒絕。`);
    this.broadcastToKingdom(kingdomId, `🕊️ 已向 ${target?.name ?? '對方'} 提議和平。`);

    return { success: true, message: '和平提議已送出。' };
  }

  /**
   * 接受和平 — 被宣戰方的國王/宰相
   */
  acceptPeace(
    kingdomId: string,
    warId: string,
    characterId: string,
  ): { success: boolean; message: string } {
    const member = this.getMember(characterId, kingdomId);
    if (!member) return { success: false, message: '你不是這個王國的成員。' };
    if (!hasRank(member.rank, ['king', 'chancellor'])) {
      return { success: false, message: '只有國王或宰相可以接受和平提議。' };
    }

    const war = this.getWar(warId);
    if (!war) return { success: false, message: '找不到這場戰爭。' };
    if (war.status !== 'peace') {
      return { success: false, message: '這場戰爭沒有待處理的和平提議。' };
    }

    // 驗證接受方不是提議方 — 不允許同一方自己提議又自己接受
    const peaceProposedBy = this.getPeaceProposedBy(warId);
    if (peaceProposedBy === kingdomId) {
      return { success: false, message: '不能接受自己提出的和平提議，需要對方接受。' };
    }

    // 驗證接受者的王國是這場戰爭的一方
    if (war.attackerId !== kingdomId && war.defenderId !== kingdomId) {
      return { success: false, message: '你的王國不是這場戰爭的參戰方。' };
    }

    const db = getDb();
    db.prepare('UPDATE kingdom_wars SET status = ?, ended_at = unixepoch() WHERE id = ?')
      .run('ended' as string, warId);

    // 恢復外交關係為中立
    this.setRelation(war.attackerId, war.defenderId, 'neutral');

    const attackerName = this.getKingdom(war.attackerId)?.name ?? '未知';
    const defenderName = this.getKingdom(war.defenderId)?.name ?? '未知';

    this.broadcastToKingdom(war.attackerId, `🕊️ 與 ${defenderName} 的戰爭已結束，雙方締結和平。`);
    this.broadcastToKingdom(war.defenderId, `🕊️ 與 ${attackerName} 的戰爭已結束，雙方締結和平。`);

    return { success: true, message: '和平協議已接受，戰爭結束。' };
  }

  /**
   * 查詢戰爭狀態
   */
  getWarStatus(warId: string): KingdomWar | null {
    return this.getWar(warId);
  }

  // ──────────────────────────────────────────────────────────
  //  攻城系統
  // ──────────────────────────────────────────────────────────

  /**
   * 發動攻城 — 將軍以上
   */
  startSiege(
    warId: string,
    characterId: string,
  ): { success: boolean; message: string } {
    const war = this.getWar(warId);
    if (!war) return { success: false, message: '找不到這場戰爭。' };
    if (war.status !== 'active') {
      return { success: false, message: '此戰爭目前無法發動攻城。' };
    }

    // 確認角色屬於攻方且有權限
    const memberA = this.getMember(characterId, war.attackerId);
    if (!memberA || !hasRank(memberA.rank, MILITARY_RANKS)) {
      return { success: false, message: '你不是攻方將軍以上的官員。' };
    }

    const db = getDb();
    db.prepare('UPDATE kingdom_wars SET status = ? WHERE id = ?')
      .run('siege', warId);

    // 將角色加入攻城參與者
    db.prepare(`
      INSERT OR IGNORE INTO kingdom_siege_participants (war_id, character_id, side)
      VALUES (?, ?, 'attacker')
    `).run(warId, characterId);

    const defenderName = this.getKingdom(war.defenderId)?.name ?? '未知';
    const attackerName = this.getKingdom(war.attackerId)?.name ?? '未知';

    this.broadcastToKingdom(war.attackerId, `🏰 攻城戰開始！目標：${defenderName}。城門 HP: ${war.gateHp}/${GATE_MAX_HP}`);
    this.broadcastToKingdom(war.defenderId, `🏰 ${attackerName} 正在攻打我國城池！城門 HP: ${war.gateHp}/${GATE_MAX_HP}`);

    return { success: true, message: `攻城戰開始！當前階段：城門（HP: ${war.gateHp}/${GATE_MAX_HP}）` };
  }

  /**
   * 加入防守 — 防守方成員
   */
  defendSiege(
    warId: string,
    characterId: string,
  ): { success: boolean; message: string } {
    const war = this.getWar(warId);
    if (!war) return { success: false, message: '找不到這場戰爭。' };
    if (war.status !== 'siege') {
      return { success: false, message: '目前沒有進行中的攻城戰。' };
    }

    const memberD = this.getMember(characterId, war.defenderId);
    if (!memberD) return { success: false, message: '你不是防守方的成員。' };

    const db = getDb();
    db.prepare(`
      INSERT OR IGNORE INTO kingdom_siege_participants (war_id, character_id, side)
      VALUES (?, ?, 'defender')
    `).run(warId, characterId);

    return { success: true, message: '你已加入城池防守！' };
  }

  /**
   * 攻擊結構物 — 攻方參戰者
   */
  attackStructure(
    warId: string,
    characterId: string,
  ): { success: boolean; message: string } {
    const war = this.getWar(warId);
    if (!war) return { success: false, message: '找不到這場戰爭。' };
    if (war.status !== 'siege') {
      return { success: false, message: '目前沒有進行中的攻城戰。' };
    }

    // 檢查是否為攻方參戰者
    const participant = this.getSiegeParticipant(warId, characterId);
    if (!participant || participant.side !== 'attacker') {
      return { success: false, message: '你不是攻方的參戰者。' };
    }

    // 計算攻擊力
    const damage = this.calculateAttackDamage(war.attackerId, characterId);

    // 依序攻擊：城門 → 城牆 → 王宮
    const db = getDb();
    let phase: string;
    let currentHp: number;
    let maxHp: number;

    if (war.gateHp > 0) {
      phase = '城門';
      const newHp = Math.max(0, war.gateHp - damage);
      db.prepare('UPDATE kingdom_wars SET gate_hp = ? WHERE id = ?').run(newHp, warId);
      currentHp = newHp;
      maxHp = GATE_MAX_HP;
    } else if (war.wallHp > 0) {
      phase = '城牆';
      const newHp = Math.max(0, war.wallHp - damage);
      db.prepare('UPDATE kingdom_wars SET wall_hp = ? WHERE id = ?').run(newHp, warId);
      currentHp = newHp;
      maxHp = WALL_MAX_HP;
    } else if (war.palaceHp > 0) {
      phase = '王宮';
      const newHp = Math.max(0, war.palaceHp - damage);
      db.prepare('UPDATE kingdom_wars SET palace_hp = ? WHERE id = ?').run(newHp, warId);
      currentHp = newHp;
      maxHp = PALACE_MAX_HP;
    } else {
      return { success: false, message: '城池已被攻破。' };
    }

    let msg = `你對${phase}造成了 ${damage} 點傷害！${phase} HP: ${currentHp}/${maxHp}`;

    // 檢查是否攻破
    if (currentHp <= 0) {
      msg += `\n${phase}已被攻破！`;

      // 檢查是否完全攻破
      const updatedWar = this.getWar(warId);
      if (updatedWar && updatedWar.gateHp <= 0 && updatedWar.wallHp <= 0 && updatedWar.palaceHp <= 0) {
        // 攻城勝利
        db.prepare('UPDATE kingdom_wars SET status = ?, ended_at = unixepoch(), winner_id = ? WHERE id = ?')
          .run('ended' as string, war.attackerId, warId);

        this.setRelation(war.attackerId, war.defenderId, 'neutral');

        const attackerName = this.getKingdom(war.attackerId)?.name ?? '未知';
        const defenderName = this.getKingdom(war.defenderId)?.name ?? '未知';

        this.broadcastToKingdom(war.attackerId, `🎉 攻城勝利！我國成功攻破 ${defenderName} 的城池！`);
        this.broadcastToKingdom(war.defenderId, `💀 我國城池已被 ${attackerName} 攻破！`);

        msg += '\n王宮已被攻破，攻城勝利！';
      } else {
        // 進入下一階段
        const nextPhase = updatedWar && updatedWar.gateHp <= 0 && updatedWar.wallHp > 0 ? '城牆' : '王宮';
        const nextHp = nextPhase === '城牆' ? WALL_MAX_HP : PALACE_MAX_HP;
        this.broadcastToKingdom(war.attackerId, `🏰 ${phase}已被攻破！下一目標：${nextPhase}（HP: ${updatedWar?.[nextPhase === '城牆' ? 'wallHp' : 'palaceHp'] ?? nextHp}/${nextHp}）`);
        this.broadcastToKingdom(war.defenderId, `🏰 ${phase}已被攻破！敵軍進攻${nextPhase}！`);
      }
    }

    return { success: true, message: msg };
  }

  /**
   * 修復結構物 — 防守方，消耗金幣
   */
  repairStructure(
    warId: string,
    characterId: string,
    structure: 'gate' | 'wall' | 'palace',
  ): { success: boolean; message: string } {
    const war = this.getWar(warId);
    if (!war) return { success: false, message: '找不到這場戰爭。' };
    if (war.status !== 'siege') {
      return { success: false, message: '目前沒有進行中的攻城戰。' };
    }

    // 必須是防守方成員
    const memberD = this.getMember(characterId, war.defenderId);
    if (!memberD) return { success: false, message: '你不是防守方的成員。' };

    const structureMap = {
      gate: { name: '城門', field: 'gate_hp' as const, maxHp: GATE_MAX_HP, currentHp: war.gateHp },
      wall: { name: '城牆', field: 'wall_hp' as const, maxHp: WALL_MAX_HP, currentHp: war.wallHp },
      palace: { name: '王宮', field: 'palace_hp' as const, maxHp: PALACE_MAX_HP, currentHp: war.palaceHp },
    };

    const info = structureMap[structure];
    if (info.currentHp >= info.maxHp) {
      return { success: false, message: `${info.name}已是滿 HP，不需要修復。` };
    }
    if (info.currentHp <= 0) {
      return { success: false, message: `${info.name}已被攻破，無法修復。` };
    }

    // 修復量：200 HP，費用按比例
    const repairAmount = Math.min(200, info.maxHp - info.currentHp);
    const cost = repairAmount * REPAIR_COST_PER_HP;

    // 從國庫扣款
    const kingdom = this.getKingdom(war.defenderId);
    if (!kingdom || kingdom.treasury_gold < cost) {
      return { success: false, message: `國庫金幣不足，修復 ${info.name} 需要 ${cost} 金幣。` };
    }

    const db = getDb();
    db.prepare('UPDATE kingdoms SET treasury_gold = treasury_gold - ? WHERE id = ?').run(cost, war.defenderId);
    this.logTreasuryTransaction(war.defenderId, -cost, 'maintenance', `修復${info.name}`, characterId);

    const newHp = info.currentHp + repairAmount;
    db.prepare(`UPDATE kingdom_wars SET ${info.field} = ? WHERE id = ?`).run(newHp, warId);

    return { success: true, message: `${info.name}已修復 ${repairAmount} HP（${newHp}/${info.maxHp}），消耗 ${cost} 金幣。` };
  }

  // ──────────────────────────────────────────────────────────
  //  集結系統
  // ──────────────────────────────────────────────────────────

  /**
   * 發起集結 — 號召王國成員
   */
  rallyTroops(
    kingdomId: string,
    characterId: string,
  ): { success: boolean; message: string } {
    const member = this.getMember(characterId, kingdomId);
    if (!member) return { success: false, message: '你不是這個王國的成員。' };
    if (!hasRank(member.rank, MILITARY_RANKS)) {
      return { success: false, message: '你的官職不足以發起集結。' };
    }

    const existing = this.rallies.get(kingdomId);
    if (existing && Date.now() - existing.calledAt < RALLY_DURATION) {
      return { success: false, message: '已有進行中的集結。' };
    }

    this.rallies.set(kingdomId, {
      kingdomId,
      calledBy: characterId,
      calledAt: Date.now(),
      respondents: new Set([characterId]),
    });

    this.broadcastToKingdom(kingdomId, `📯 集結號已響起！所有成員請準備迎戰！`);

    return { success: true, message: '已發起集結號召。' };
  }

  /**
   * 響應集結
   */
  respondToRally(
    kingdomId: string,
    characterId: string,
  ): { success: boolean; message: string } {
    const rally = this.rallies.get(kingdomId);
    if (!rally || Date.now() - rally.calledAt >= RALLY_DURATION) {
      return { success: false, message: '目前沒有進行中的集結。' };
    }

    const member = this.getMember(characterId, kingdomId);
    if (!member) return { success: false, message: '你不是這個王國的成員。' };

    if (rally.respondents.has(characterId)) {
      return { success: false, message: '你已經響應過集結了。' };
    }

    rally.respondents.add(characterId);

    return { success: true, message: `你已響應集結！目前響應人數：${rally.respondents.size}` };
  }

  /**
   * 計算軍隊總戰力
   */
  getArmyStrength(kingdomId: string): number {
    // 基礎：線上成員數 * BASE_ATTACK_POWER
    const members = this.getKingdomMembers(kingdomId);
    const memberPower = members.length * BASE_ATTACK_POWER;

    // 士兵加成
    const soldiers = this.getSoldierCount(kingdomId);
    const soldierPower = soldiers * SOLDIER_ATTACK_POWER;

    // 集結加成（有集結時 +20%）
    const rally = this.rallies.get(kingdomId);
    const rallyBonus = rally && Date.now() - rally.calledAt < RALLY_DURATION
      ? Math.floor((memberPower + soldierPower) * 0.2)
      : 0;

    return memberPower + soldierPower + rallyBonus;
  }

  // ──────────────────────────────────────────────────────────
  //  軍隊系統
  // ──────────────────────────────────────────────────────────

  /**
   * 招募士兵 — 消耗金幣
   */
  recruitSoldiers(
    kingdomId: string,
    count: number,
    characterId: string,
  ): { success: boolean; message: string } {
    if (count <= 0) return { success: false, message: '招募數量必須大於 0。' };

    const member = this.getMember(characterId, kingdomId);
    if (!member) return { success: false, message: '你不是這個王國的成員。' };
    if (!hasRank(member.rank, MILITARY_RANKS)) {
      return { success: false, message: '你的官職不足以招募士兵。' };
    }

    const cost = count * SOLDIER_RECRUIT_COST;
    const kingdom = this.getKingdom(kingdomId);
    if (!kingdom || kingdom.treasury_gold < cost) {
      return { success: false, message: `國庫金幣不足，招募 ${count} 名士兵需要 ${cost} 金幣。` };
    }

    const db = getDb();
    db.prepare('UPDATE kingdoms SET treasury_gold = treasury_gold - ? WHERE id = ?').run(cost, kingdomId);
    this.logTreasuryTransaction(kingdomId, -cost, 'maintenance', `招募 ${count} 名士兵`, characterId);

    db.prepare(`
      INSERT INTO kingdom_soldiers (kingdom_id, total_count)
      VALUES (?, ?)
      ON CONFLICT(kingdom_id) DO UPDATE SET total_count = total_count + ?
    `).run(kingdomId, count, count);

    const total = this.getSoldierCount(kingdomId);
    return { success: true, message: `成功招募 ${count} 名士兵，消耗 ${cost} 金幣。目前總兵力：${total}` };
  }

  /**
   * 部署士兵到指定房間
   */
  deploySoldiers(
    kingdomId: string,
    roomId: string,
    count: number,
    characterId: string,
  ): { success: boolean; message: string } {
    if (count <= 0) return { success: false, message: '部署數量必須大於 0。' };

    const member = this.getMember(characterId, kingdomId);
    if (!member) return { success: false, message: '你不是這個王國的成員。' };
    if (!hasRank(member.rank, MILITARY_RANKS)) {
      return { success: false, message: '你的官職不足以部署士兵。' };
    }

    const totalSoldiers = this.getSoldierCount(kingdomId);
    const deployedTotal = this.getTotalDeployed(kingdomId);
    const available = totalSoldiers - deployedTotal;

    if (count > available) {
      return { success: false, message: `可用士兵不足。可部署：${available}，嘗試部署：${count}` };
    }

    const db = getDb();
    db.prepare(`
      INSERT INTO kingdom_soldier_deployments (kingdom_id, room_id, count)
      VALUES (?, ?, ?)
      ON CONFLICT(kingdom_id, room_id) DO UPDATE SET count = count + ?
    `).run(kingdomId, roomId, count, count);

    return { success: true, message: `已部署 ${count} 名士兵到 ${roomId}。` };
  }

  /**
   * 裁撤士兵
   */
  dismissSoldiers(
    kingdomId: string,
    count: number,
    characterId: string,
  ): { success: boolean; message: string } {
    if (count <= 0) return { success: false, message: '裁撤數量必須大於 0。' };

    const member = this.getMember(characterId, kingdomId);
    if (!member) return { success: false, message: '你不是這個王國的成員。' };
    if (!hasRank(member.rank, MILITARY_RANKS)) {
      return { success: false, message: '你的官職不足以裁撤士兵。' };
    }

    const totalSoldiers = this.getSoldierCount(kingdomId);
    if (count > totalSoldiers) {
      return { success: false, message: `目前只有 ${totalSoldiers} 名士兵。` };
    }

    const db = getDb();
    db.prepare('UPDATE kingdom_soldiers SET total_count = total_count - ? WHERE kingdom_id = ?')
      .run(count, kingdomId);

    // 如果裁撤後總數少於部署數，按比例撤回
    const newTotal = this.getSoldierCount(kingdomId);
    const deployedTotal = this.getTotalDeployed(kingdomId);
    if (deployedTotal > newTotal) {
      const ratio = newTotal / deployedTotal;
      const deployments = db.prepare('SELECT room_id, count FROM kingdom_soldier_deployments WHERE kingdom_id = ?')
        .all(kingdomId) as { room_id: string; count: number }[];
      for (const d of deployments) {
        const newCount = Math.floor(d.count * ratio);
        if (newCount <= 0) {
          db.prepare('DELETE FROM kingdom_soldier_deployments WHERE kingdom_id = ? AND room_id = ?')
            .run(kingdomId, d.room_id);
        } else {
          db.prepare('UPDATE kingdom_soldier_deployments SET count = ? WHERE kingdom_id = ? AND room_id = ?')
            .run(newCount, kingdomId, d.room_id);
        }
      }
    }

    return { success: true, message: `已裁撤 ${count} 名士兵。目前總兵力：${newTotal}` };
  }

  /**
   * 查看軍隊列表
   */
  getArmyList(kingdomId: string): {
    totalSoldiers: number;
    deployedTotal: number;
    available: number;
    dailyMaintenance: number;
    deployments: { roomId: string; count: number }[];
  } {
    const totalSoldiers = this.getSoldierCount(kingdomId);
    const db = getDb();
    const deployments = db.prepare(
      'SELECT room_id, count FROM kingdom_soldier_deployments WHERE kingdom_id = ?'
    ).all(kingdomId) as { room_id: string; count: number }[];

    const deployedTotal = deployments.reduce((sum, d) => sum + d.count, 0);

    return {
      totalSoldiers,
      deployedTotal,
      available: totalSoldiers - deployedTotal,
      dailyMaintenance: totalSoldiers * SOLDIER_DAILY_MAINTENANCE,
      deployments: deployments.map(d => ({ roomId: d.room_id, count: d.count })),
    };
  }

  // ──────────────────────────────────────────────────────────
  //  懸賞系統
  // ──────────────────────────────────────────────────────────

  /**
   * 設置懸賞 — 將軍以上
   */
  setBounty(
    kingdomId: string,
    targetCharacterId: string,
    reward: number,
    reason: string,
    characterId: string,
  ): { success: boolean; message: string; bountyId?: string } {
    if (reward <= 0) return { success: false, message: '懸賞金額必須大於 0。' };

    const member = this.getMember(characterId, kingdomId);
    if (!member) return { success: false, message: '你不是這個王國的成員。' };
    if (!hasRank(member.rank, MILITARY_RANKS)) {
      return { success: false, message: '你的官職不足以設置懸賞。' };
    }

    // 不能懸賞自己的成員
    const targetMember = this.getMember(targetCharacterId, kingdomId);
    if (targetMember) {
      return { success: false, message: '不能懸賞自己王國的成員。' };
    }

    // 從國庫扣款
    const kingdom = this.getKingdom(kingdomId);
    if (!kingdom || kingdom.treasury_gold < reward) {
      return { success: false, message: `國庫金幣不足，設置懸賞需要 ${reward} 金幣。` };
    }

    const db = getDb();
    const bountyId = randomUUID();

    db.prepare('UPDATE kingdoms SET treasury_gold = treasury_gold - ? WHERE id = ?').run(reward, kingdomId);
    this.logTreasuryTransaction(kingdomId, -reward, 'maintenance', `設置懸賞 ${reward} 金幣`, characterId);

    db.prepare(`
      INSERT INTO kingdom_bounties (id, kingdom_id, target_id, reward, reason, placed_by, status)
      VALUES (?, ?, ?, ?, ?, ?, 'active')
    `).run(bountyId, kingdomId, targetCharacterId, reward, reason, characterId);

    const targetChar = getCharacterById(targetCharacterId);
    const targetName = targetChar?.name ?? '未知';

    return { success: true, message: `已對 ${targetName} 設置 ${reward} 金幣的懸賞。原因：${reason}`, bountyId };
  }

  /**
   * 移除懸賞 — 將軍以上，退回金幣
   */
  removeBounty(
    kingdomId: string,
    bountyId: string,
    characterId: string,
  ): { success: boolean; message: string } {
    const member = this.getMember(characterId, kingdomId);
    if (!member) return { success: false, message: '你不是這個王國的成員。' };
    if (!hasRank(member.rank, MILITARY_RANKS)) {
      return { success: false, message: '你的官職不足以移除懸賞。' };
    }

    const bounty = this.getBounty(bountyId);
    if (!bounty) return { success: false, message: '找不到此懸賞。' };
    if (bounty.kingdom_id !== kingdomId) {
      return { success: false, message: '這不是你的王國的懸賞。' };
    }
    if (bounty.status !== 'active') {
      return { success: false, message: '此懸賞已不在有效狀態。' };
    }

    const db = getDb();
    db.prepare('UPDATE kingdom_bounties SET status = ? WHERE id = ?').run('cancelled', bountyId);

    // 退回金幣
    db.prepare('UPDATE kingdoms SET treasury_gold = treasury_gold + ? WHERE id = ?').run(bounty.reward, kingdomId);
    this.logTreasuryTransaction(kingdomId, bounty.reward, 'deposit', `取消懸賞退回 ${bounty.reward} 金幣`, characterId);

    return { success: true, message: `已取消懸賞，退回 ${bounty.reward} 金幣。` };
  }

  /**
   * 列出王國所有有效懸賞
   */
  listBounties(kingdomId: string): KingdomBounty[] {
    const db = getDb();
    const rows = db.prepare(
      'SELECT * FROM kingdom_bounties WHERE kingdom_id = ? AND status = ? ORDER BY created_at DESC'
    ).all(kingdomId, 'active') as any[];

    return rows.map(r => ({
      id: r.id,
      kingdomId: r.kingdom_id,
      targetId: r.target_id,
      reward: r.reward,
      reason: r.reason,
      placedBy: r.placed_by,
      status: r.status as BountyStatus,
      createdAt: r.created_at,
    }));
  }

  /**
   * 領取懸賞 — 擊殺目標後呼叫
   * 需驗證 claimer 確實在 30 分鐘內擊殺了 target
   */
  claimBounty(
    bountyId: string,
    claimerCharacterId: string,
  ): { success: boolean; message: string; reward?: number } {
    const bounty = this.getBounty(bountyId);
    if (!bounty) return { success: false, message: '找不到此懸賞。' };
    if (bounty.status !== 'active') {
      return { success: false, message: '此懸賞已不在有效狀態。' };
    }

    // 不能領取自己設置的懸賞
    if (bounty.placed_by === claimerCharacterId) {
      return { success: false, message: '不能領取自己設置的懸賞。' };
    }

    // 驗證 claimer 確實在 30 分鐘內擊殺了 target
    const db = getDb();
    const thirtyMinutesAgo = Math.floor(Date.now() / 1000) - 30 * 60;
    const killRecord = db.prepare(
      'SELECT id FROM pvp_records WHERE winner_id = ? AND loser_id = ? AND created_at >= ? LIMIT 1'
    ).get(claimerCharacterId, bounty.target_id, thirtyMinutesAgo) as { id: number } | undefined;

    if (!killRecord) {
      return { success: false, message: '找不到你擊殺此目標的紀錄' };
    }

    // Atomic update：只有 status='active' 時才更新，避免並發重複領取
    const updateResult = db.prepare(
      'UPDATE kingdom_bounties SET status = ?, claimed_by = ?, claimed_at = unixepoch() WHERE id = ? AND status = ?'
    ).run('completed', claimerCharacterId, bountyId, 'active');

    if (updateResult.changes === 0) {
      return { success: false, message: '此懸賞已被其他人領取。' };
    }

    // 將獎金給領取者
    const claimer = getCharacterById(claimerCharacterId);
    if (claimer) {
      claimer.gold += bounty.reward;
      saveCharacter(claimer);
    }

    return { success: true, message: `成功領取懸賞！獲得 ${bounty.reward} 金幣。`, reward: bounty.reward };
  }

  /**
   * 檢查角色是否有被懸賞（供 PvP 結算呼叫）
   */
  getActiveBountiesForTarget(targetCharacterId: string): KingdomBounty[] {
    const db = getDb();
    const rows = db.prepare(
      'SELECT * FROM kingdom_bounties WHERE target_id = ? AND status = ?'
    ).all(targetCharacterId, 'active') as any[];

    return rows.map(r => ({
      id: r.id,
      kingdomId: r.kingdom_id,
      targetId: r.target_id,
      reward: r.reward,
      reason: r.reason,
      placedBy: r.placed_by,
      status: r.status as BountyStatus,
      createdAt: r.created_at,
    }));
  }

  // ──────────────────────────────────────────────────────────
  //  查詢：進行中的戰爭列表
  // ──────────────────────────────────────────────────────────

  /**
   * 取得王國所有進行中的戰爭
   */
  getActiveWars(kingdomId: string): KingdomWar[] {
    const db = getDb();
    const rows = db.prepare(`
      SELECT * FROM kingdom_wars
      WHERE (attacker_id = ? OR defender_id = ?) AND status IN ('active', 'siege', 'peace')
      ORDER BY started_at DESC
    `).all(kingdomId, kingdomId) as any[];

    return rows.map(this.rowToWar);
  }

  // ──────────────────────────────────────────────────────────
  //  軍隊每日維護（供 TreasuryManager 呼叫）
  // ──────────────────────────────────────────────────────────

  getSoldierCount(kingdomId: string): number {
    const db = getDb();
    const row = db.prepare('SELECT total_count FROM kingdom_soldiers WHERE kingdom_id = ?')
      .get(kingdomId) as { total_count: number } | undefined;
    return row?.total_count ?? 0;
  }

  /**
   * 因維護不足裁撤士兵
   */
  reduceSoldiersForMaintenance(kingdomId: string, maxAffordable: number): number {
    const current = this.getSoldierCount(kingdomId);
    if (current <= maxAffordable) return 0;

    const toRemove = current - maxAffordable;
    const db = getDb();
    db.prepare('UPDATE kingdom_soldiers SET total_count = ? WHERE kingdom_id = ?')
      .run(maxAffordable, kingdomId);

    // 按比例縮減部署
    if (maxAffordable === 0) {
      db.prepare('DELETE FROM kingdom_soldier_deployments WHERE kingdom_id = ?').run(kingdomId);
    } else {
      const ratio = maxAffordable / current;
      const deployments = db.prepare('SELECT room_id, count FROM kingdom_soldier_deployments WHERE kingdom_id = ?')
        .all(kingdomId) as { room_id: string; count: number }[];
      for (const d of deployments) {
        const newCount = Math.floor(d.count * ratio);
        if (newCount <= 0) {
          db.prepare('DELETE FROM kingdom_soldier_deployments WHERE kingdom_id = ? AND room_id = ?')
            .run(kingdomId, d.room_id);
        } else {
          db.prepare('UPDATE kingdom_soldier_deployments SET count = ? WHERE kingdom_id = ? AND room_id = ?')
            .run(newCount, kingdomId, d.room_id);
        }
      }
    }

    return toRemove;
  }

  // ──────────────────────────────────────────────────────────
  //  私有輔助
  // ──────────────────────────────────────────────────────────

  private getKingdom(kingdomId: string): { id: string; name: string; treasury_gold: number } | null {
    const db = getDb();
    const row = db.prepare('SELECT id, name, treasury_gold FROM kingdoms WHERE id = ?')
      .get(kingdomId) as { id: string; name: string; treasury_gold: number } | undefined;
    return row ?? null;
  }

  private getMember(characterId: string, kingdomId: string): KingdomMember | null {
    const db = getDb();
    const row = db.prepare(
      'SELECT kingdom_id, character_id, rank, joined_at FROM kingdom_members WHERE character_id = ? AND kingdom_id = ?'
    ).get(characterId, kingdomId) as any | undefined;
    if (!row) return null;
    return {
      kingdomId: row.kingdom_id,
      characterId: row.character_id,
      rank: row.rank as KingdomRank,
      joinedAt: row.joined_at,
    };
  }

  private getKingdomMembers(kingdomId: string): KingdomMember[] {
    const db = getDb();
    const rows = db.prepare(
      'SELECT kingdom_id, character_id, rank, joined_at FROM kingdom_members WHERE kingdom_id = ?'
    ).all(kingdomId) as any[];
    return rows.map(r => ({
      kingdomId: r.kingdom_id,
      characterId: r.character_id,
      rank: r.rank as KingdomRank,
      joinedAt: r.joined_at,
    }));
  }

  private getWar(warId: string): KingdomWar | null {
    const db = getDb();
    const row = db.prepare('SELECT * FROM kingdom_wars WHERE id = ?').get(warId) as any | undefined;
    if (!row) return null;
    return this.rowToWar(row);
  }

  private getActiveWarBetween(kingdomA: string, kingdomB: string): KingdomWar | null {
    const db = getDb();
    const row = db.prepare(`
      SELECT * FROM kingdom_wars
      WHERE ((attacker_id = ? AND defender_id = ?) OR (attacker_id = ? AND defender_id = ?))
        AND status IN ('active', 'siege', 'peace')
      LIMIT 1
    `).get(kingdomA, kingdomB, kingdomB, kingdomA) as any | undefined;
    if (!row) return null;
    return this.rowToWar(row);
  }

  private rowToWar(row: any): KingdomWar {
    return {
      id: row.id,
      attackerId: row.attacker_id,
      defenderId: row.defender_id,
      status: row.status as WarStatus,
      startedAt: row.started_at,
      endedAt: row.ended_at ?? null,
      gateHp: row.gate_hp,
      wallHp: row.wall_hp,
      palaceHp: row.palace_hp,
    };
  }

  private getPeaceProposedBy(warId: string): string | null {
    const db = getDb();
    const row = db.prepare('SELECT peace_proposed_by FROM kingdom_wars WHERE id = ?')
      .get(warId) as { peace_proposed_by: string | null } | undefined;
    return row?.peace_proposed_by ?? null;
  }

  private getBounty(bountyId: string): { id: string; kingdom_id: string; target_id: string; reward: number; reason: string; placed_by: string; status: string } | null {
    const db = getDb();
    const row = db.prepare('SELECT * FROM kingdom_bounties WHERE id = ?').get(bountyId) as any | undefined;
    return row ?? null;
  }

  private getSiegeParticipant(warId: string, characterId: string): { war_id: string; character_id: string; side: string } | null {
    const db = getDb();
    const row = db.prepare(
      'SELECT * FROM kingdom_siege_participants WHERE war_id = ? AND character_id = ?'
    ).get(warId, characterId) as any | undefined;
    return row ?? null;
  }

  private getTotalDeployed(kingdomId: string): number {
    const db = getDb();
    const row = db.prepare(
      'SELECT COALESCE(SUM(count), 0) as total FROM kingdom_soldier_deployments WHERE kingdom_id = ?'
    ).get(kingdomId) as { total: number };
    return row.total;
  }

  private calculateAttackDamage(attackerKingdomId: string, characterId: string): number {
    // 角色基礎攻擊力
    const char = getCharacterById(characterId);
    const baseDmg = char ? BASE_ATTACK_POWER + char.stats.str * 2 : BASE_ATTACK_POWER;

    // 軍隊加成（每 10 名士兵 +5 傷害）
    const soldiers = this.getSoldierCount(attackerKingdomId);
    const armyBonus = Math.floor(soldiers / 10) * 5;

    return baseDmg + armyBonus;
  }

  private getRelation(kingdomA: string, kingdomB: string): string {
    const db = getDb();
    const row = db.prepare(`
      SELECT relation_type FROM kingdom_diplomacy
      WHERE (kingdom_a_id = ? AND kingdom_b_id = ?) OR (kingdom_a_id = ? AND kingdom_b_id = ?)
      LIMIT 1
    `).get(kingdomA, kingdomB, kingdomB, kingdomA) as { relation_type: string } | undefined;
    return row?.relation_type ?? 'neutral';
  }

  private setRelation(kingdomA: string, kingdomB: string, relation: string): void {
    const db = getDb();
    // 確保 A < B 的排序來避免重複
    const [a, b] = kingdomA < kingdomB ? [kingdomA, kingdomB] : [kingdomB, kingdomA];
    db.prepare(`
      INSERT INTO kingdom_diplomacy (kingdom_a_id, kingdom_b_id, relation_type, established_at)
      VALUES (?, ?, ?, unixepoch())
      ON CONFLICT(kingdom_a_id, kingdom_b_id) DO UPDATE SET relation_type = ?, established_at = unixepoch()
    `).run(a, b, relation, relation);
  }

  private logTreasuryTransaction(
    kingdomId: string,
    amount: number,
    type: string,
    description: string,
    characterId: string,
  ): void {
    try {
      const db = getDb();
      db.prepare(`
        INSERT INTO kingdom_treasury_log (kingdom_id, amount, type, description, character_id)
        VALUES (?, ?, ?, ?, ?)
      `).run(kingdomId, amount, type, description, characterId);
    } catch {
      // 忽略 — treasury_log 表可能尚未建立
    }
  }

  private broadcastToKingdom(kingdomId: string, text: string): void {
    const members = this.getKingdomMembers(kingdomId);
    for (const m of members) {
      try {
        sendToCharacter(m.characterId, 'system', { text });
      } catch {
        // 忽略離線成員
      }
    }
  }
}
