// 外交系統 — DiplomacyManager（聯盟、禁運、外交訊息、貿易提案）

import { randomUUID } from 'crypto';
import { getDb } from '../db/schema.js';
import { sendToCharacter } from '../ws/handler.js';
import type { KingdomRank, DiplomacyRelation, KingdomDiplomacy } from '@game/shared';

// ============================================================
//  常數（可配置）
// ============================================================

/** 聯盟提案有效時間（ms）：24 小時 */
const ALLIANCE_PROPOSAL_EXPIRY = 24 * 60 * 60 * 1000;

/** 貿易提案有效時間（ms）：24 小時 */
const TRADE_PROPOSAL_EXPIRY = 24 * 60 * 60 * 1000;

/** 盟友貿易加成比例 */
const ALLY_TRADE_BONUS = 0.1; // 10%

// ============================================================
//  官職權限
// ============================================================

/** 外交官以上可操作外交 */
const DIPLOMAT_RANKS: KingdomRank[] = ['king', 'chancellor', 'diplomat'];

/** 國王/宰相可接受或解除聯盟 */
const LEADER_RANKS: KingdomRank[] = ['king', 'chancellor'];

function hasRank(memberRank: KingdomRank, allowedRanks: KingdomRank[]): boolean {
  return allowedRanks.includes(memberRank);
}

// ============================================================
//  資料庫初始化
// ============================================================

function ensureDiplomacyTables(): void {
  // 所有表已在 schema.ts initDb() 中建立，此處不再重複建表
}

// ============================================================
//  DiplomacyManager
// ============================================================

export class DiplomacyManager {

  // ──────────────────────────────────────────────────────────
  //  初始化
  // ──────────────────────────────────────────────────────────

  init(): void {
    ensureDiplomacyTables();
    console.log('[DiplomacyManager] 外交系統初始化完成');
  }

  // ──────────────────────────────────────────────────────────
  //  聯盟系統
  // ──────────────────────────────────────────────────────────

  /**
   * 提議聯盟 — 外交官以上
   */
  proposeAlliance(
    kingdomId: string,
    targetKingdomId: string,
    characterId: string,
  ): { success: boolean; message: string; proposalId?: string } {
    const member = this.getMember(characterId, kingdomId);
    if (!member) return { success: false, message: '你不是這個王國的成員。' };
    if (!hasRank(member.rank, DIPLOMAT_RANKS)) {
      return { success: false, message: '你的官職不足以提議聯盟，需要外交官以上。' };
    }

    if (kingdomId === targetKingdomId) {
      return { success: false, message: '不能與自己的王國結盟。' };
    }

    const target = this.getKingdom(targetKingdomId);
    if (!target) return { success: false, message: '目標王國不存在。' };

    // 檢查目前關係
    const relation = this.getRelation(kingdomId, targetKingdomId);
    if (relation === 'ally') {
      return { success: false, message: '雙方已經是盟友了。' };
    }
    if (relation === 'enemy') {
      return { success: false, message: '雙方處於戰爭狀態，無法提議聯盟。請先締結和平。' };
    }

    // 檢查是否有待處理的提案
    const existing = this.getPendingAllianceProposal(kingdomId, targetKingdomId);
    if (existing) {
      return { success: false, message: '已有待處理的聯盟提案。' };
    }

    const db = getDb();
    const proposalId = randomUUID();

    db.prepare(`
      INSERT INTO kingdom_alliance_proposals (id, from_kingdom_id, to_kingdom_id, proposed_by)
      VALUES (?, ?, ?, ?)
    `).run(proposalId, kingdomId, targetKingdomId, characterId);

    const kingdom = this.getKingdom(kingdomId);
    this.broadcastToKingdom(targetKingdomId,
      `📜 ${kingdom?.name ?? '一個王國'} 提議與我國結為盟友！國王或宰相可以接受或拒絕。`);

    return { success: true, message: `聯盟提案已送出給 ${target.name}。`, proposalId };
  }

  /**
   * 接受聯盟 — 國王/宰相
   */
  acceptAlliance(
    kingdomId: string,
    proposalId: string,
    characterId: string,
  ): { success: boolean; message: string } {
    const member = this.getMember(characterId, kingdomId);
    if (!member) return { success: false, message: '你不是這個王國的成員。' };
    if (!hasRank(member.rank, LEADER_RANKS)) {
      return { success: false, message: '只有國王或宰相可以接受聯盟提案。' };
    }

    const proposal = this.getAllianceProposal(proposalId);
    if (!proposal) return { success: false, message: '找不到此聯盟提案。' };
    if (proposal.to_kingdom_id !== kingdomId) {
      return { success: false, message: '這不是寄給你的王國的提案。' };
    }
    if (proposal.status !== 'pending') {
      return { success: false, message: '此提案已不在待處理狀態。' };
    }

    // 檢查是否過期
    const now = Math.floor(Date.now() / 1000);
    if (now - proposal.proposed_at > ALLIANCE_PROPOSAL_EXPIRY / 1000) {
      const db = getDb();
      db.prepare('UPDATE kingdom_alliance_proposals SET status = ? WHERE id = ?')
        .run('expired', proposalId);
      return { success: false, message: '此提案已過期。' };
    }

    const db = getDb();

    // 更新提案狀態
    db.prepare('UPDATE kingdom_alliance_proposals SET status = ?, responded_at = unixepoch() WHERE id = ?')
      .run('accepted', proposalId);

    // 設定關係為 ally
    this.setRelation(proposal.from_kingdom_id, proposal.to_kingdom_id, 'ally');

    const fromName = this.getKingdom(proposal.from_kingdom_id)?.name ?? '未知';
    const toName = this.getKingdom(proposal.to_kingdom_id)?.name ?? '未知';

    this.broadcastToKingdom(proposal.from_kingdom_id, `🤝 與 ${toName} 的聯盟提案已被接受！雙方正式結盟。`);
    this.broadcastToKingdom(proposal.to_kingdom_id, `🤝 我國已與 ${fromName} 正式結盟！`);

    return { success: true, message: `已接受聯盟提案，與 ${fromName} 正式結盟。` };
  }

  /**
   * 解除聯盟 — 國王/宰相
   */
  breakAlliance(
    kingdomId: string,
    targetKingdomId: string,
    characterId: string,
  ): { success: boolean; message: string } {
    const member = this.getMember(characterId, kingdomId);
    if (!member) return { success: false, message: '你不是這個王國的成員。' };
    if (!hasRank(member.rank, LEADER_RANKS)) {
      return { success: false, message: '只有國王或宰相可以解除聯盟。' };
    }

    const relation = this.getRelation(kingdomId, targetKingdomId);
    if (relation !== 'ally') {
      return { success: false, message: '雙方目前不是盟友關係。' };
    }

    this.setRelation(kingdomId, targetKingdomId, 'neutral');

    const kingdom = this.getKingdom(kingdomId);
    const target = this.getKingdom(targetKingdomId);

    this.broadcastToKingdom(kingdomId, `⚠️ 我國已與 ${target?.name ?? '對方'} 解除聯盟。`);
    this.broadcastToKingdom(targetKingdomId, `⚠️ ${kingdom?.name ?? '對方'} 已解除與我國的聯盟關係。`);

    return { success: true, message: `已解除與 ${target?.name ?? '對方'} 的聯盟。` };
  }

  // ──────────────────────────────────────────────────────────
  //  外交狀態查詢
  // ──────────────────────────────────────────────────────────

  /**
   * 取得王國所有外交關係
   */
  getDiplomacyStatus(kingdomId: string): {
    allies: { kingdomId: string; name: string }[];
    enemies: { kingdomId: string; name: string }[];
    embargoed: { kingdomId: string; name: string }[];
    pendingProposals: { id: string; fromKingdomName: string; proposedAt: number }[];
  } {
    const db = getDb();

    // 取得所有關係
    const relations = db.prepare(`
      SELECT kingdom_a_id, kingdom_b_id, relation_type FROM kingdom_diplomacy
      WHERE kingdom_a_id = ? OR kingdom_b_id = ?
    `).all(kingdomId, kingdomId) as { kingdom_a_id: string; kingdom_b_id: string; relation_type: string }[];

    const allies: { kingdomId: string; name: string }[] = [];
    const enemies: { kingdomId: string; name: string }[] = [];
    const embargoed: { kingdomId: string; name: string }[] = [];

    for (const rel of relations) {
      const otherId = rel.kingdom_a_id === kingdomId ? rel.kingdom_b_id : rel.kingdom_a_id;
      const otherName = this.getKingdom(otherId)?.name ?? '未知';

      switch (rel.relation_type) {
        case 'ally':
          allies.push({ kingdomId: otherId, name: otherName });
          break;
        case 'enemy':
          enemies.push({ kingdomId: otherId, name: otherName });
          break;
        case 'embargo':
          embargoed.push({ kingdomId: otherId, name: otherName });
          break;
      }
    }

    // 待處理提案
    const proposals = db.prepare(`
      SELECT id, from_kingdom_id, proposed_at FROM kingdom_alliance_proposals
      WHERE to_kingdom_id = ? AND status = 'pending'
      ORDER BY proposed_at DESC
    `).all(kingdomId) as { id: string; from_kingdom_id: string; proposed_at: number }[];

    const pendingProposals = proposals.map(p => ({
      id: p.id,
      fromKingdomName: this.getKingdom(p.from_kingdom_id)?.name ?? '未知',
      proposedAt: p.proposed_at,
    }));

    return { allies, enemies, embargoed, pendingProposals };
  }

  // ──────────────────────────────────────────────────────────
  //  外交訊息
  // ──────────────────────────────────────────────────────────

  /**
   * 傳送外交訊息 — 外交官以上
   */
  sendDiplomaticMessage(
    fromKingdomId: string,
    toKingdomId: string,
    message: string,
    characterId: string,
  ): { success: boolean; message: string } {
    const member = this.getMember(characterId, fromKingdomId);
    if (!member) return { success: false, message: '你不是這個王國的成員。' };
    if (!hasRank(member.rank, DIPLOMAT_RANKS)) {
      return { success: false, message: '你的官職不足以傳送外交訊息，需要外交官以上。' };
    }

    if (fromKingdomId === toKingdomId) {
      return { success: false, message: '不能向自己的王國傳送外交訊息。' };
    }

    const target = this.getKingdom(toKingdomId);
    if (!target) return { success: false, message: '目標王國不存在。' };

    // 檢查是否被禁運
    const relation = this.getRelation(fromKingdomId, toKingdomId);
    if (relation === 'embargo') {
      return { success: false, message: '目標王國對我國實施禁運，無法傳送訊息。' };
    }

    const db = getDb();
    const msgId = randomUUID();

    db.prepare(`
      INSERT INTO kingdom_diplomatic_messages (id, from_kingdom_id, to_kingdom_id, message, sent_by)
      VALUES (?, ?, ?, ?, ?)
    `).run(msgId, fromKingdomId, toKingdomId, message, characterId);

    const fromName = this.getKingdom(fromKingdomId)?.name ?? '未知';

    // 通知目標王國的國王和宰相
    this.notifyLeaders(toKingdomId, `📨 來自 ${fromName} 的外交訊息：${message}`);

    return { success: true, message: `外交訊息已送達 ${target.name}。` };
  }

  /**
   * 取得收到的外交訊息
   */
  getMessages(kingdomId: string, limit: number = 20): {
    id: string;
    fromKingdomName: string;
    message: string;
    sentAt: number;
  }[] {
    const db = getDb();
    const rows = db.prepare(`
      SELECT id, from_kingdom_id, message, sent_at FROM kingdom_diplomatic_messages
      WHERE to_kingdom_id = ?
      ORDER BY sent_at DESC LIMIT ?
    `).all(kingdomId, limit) as { id: string; from_kingdom_id: string; message: string; sent_at: number }[];

    return rows.map(r => ({
      id: r.id,
      fromKingdomName: this.getKingdom(r.from_kingdom_id)?.name ?? '未知',
      message: r.message,
      sentAt: r.sent_at,
    }));
  }

  // ──────────────────────────────────────────────────────────
  //  貿易提案
  // ──────────────────────────────────────────────────────────

  /**
   * 提議貿易 — 外交官以上
   */
  proposeTrade(
    fromKingdomId: string,
    toKingdomId: string,
    terms: string,
    characterId: string,
  ): { success: boolean; message: string; proposalId?: string } {
    const member = this.getMember(characterId, fromKingdomId);
    if (!member) return { success: false, message: '你不是這個王國的成員。' };
    if (!hasRank(member.rank, DIPLOMAT_RANKS)) {
      return { success: false, message: '你的官職不足以提議貿易，需要外交官以上。' };
    }

    if (fromKingdomId === toKingdomId) {
      return { success: false, message: '不能與自己的王國進行貿易。' };
    }

    const target = this.getKingdom(toKingdomId);
    if (!target) return { success: false, message: '目標王國不存在。' };

    // 檢查是否被禁運
    const relation = this.getRelation(fromKingdomId, toKingdomId);
    if (relation === 'embargo') {
      return { success: false, message: '目標王國對我國實施禁運，無法進行貿易。' };
    }

    const db = getDb();
    const proposalId = randomUUID();

    db.prepare(`
      INSERT INTO kingdom_trade_proposals (id, from_kingdom_id, to_kingdom_id, terms, proposed_by)
      VALUES (?, ?, ?, ?, ?)
    `).run(proposalId, fromKingdomId, toKingdomId, terms, characterId);

    const fromName = this.getKingdom(fromKingdomId)?.name ?? '未知';
    this.notifyLeaders(toKingdomId, `📜 ${fromName} 提議貿易：${terms}`);

    return { success: true, message: `貿易提案已送出給 ${target.name}。`, proposalId };
  }

  /**
   * 取得待處理的貿易提案
   */
  getPendingTradeProposals(kingdomId: string): {
    id: string;
    fromKingdomName: string;
    terms: string;
    proposedAt: number;
  }[] {
    const db = getDb();
    const rows = db.prepare(`
      SELECT id, from_kingdom_id, terms, proposed_at FROM kingdom_trade_proposals
      WHERE to_kingdom_id = ? AND status = 'pending'
      ORDER BY proposed_at DESC
    `).all(kingdomId) as { id: string; from_kingdom_id: string; terms: string; proposed_at: number }[];

    return rows.map(r => ({
      id: r.id,
      fromKingdomName: this.getKingdom(r.from_kingdom_id)?.name ?? '未知',
      terms: r.terms,
      proposedAt: r.proposed_at,
    }));
  }

  // ──────────────────────────────────────────────────────────
  //  禁運系統
  // ──────────────────────────────────────────────────────────

  /**
   * 實施禁運 — 國王/宰相
   */
  setEmbargo(
    kingdomId: string,
    targetKingdomId: string,
    characterId: string,
  ): { success: boolean; message: string } {
    const member = this.getMember(characterId, kingdomId);
    if (!member) return { success: false, message: '你不是這個王國的成員。' };
    if (!hasRank(member.rank, LEADER_RANKS)) {
      return { success: false, message: '只有國王或宰相可以實施禁運。' };
    }

    if (kingdomId === targetKingdomId) {
      return { success: false, message: '不能對自己的王國實施禁運。' };
    }

    const target = this.getKingdom(targetKingdomId);
    if (!target) return { success: false, message: '目標王國不存在。' };

    const relation = this.getRelation(kingdomId, targetKingdomId);
    if (relation === 'ally') {
      return { success: false, message: '不能對盟友實施禁運，請先解除聯盟。' };
    }
    if (relation === 'embargo') {
      return { success: false, message: '已經對該王國實施禁運。' };
    }

    this.setRelation(kingdomId, targetKingdomId, 'embargo');

    const kingdom = this.getKingdom(kingdomId);
    this.broadcastToKingdom(kingdomId, `🚫 我國已對 ${target.name} 實施貿易禁運。`);
    this.broadcastToKingdom(targetKingdomId, `🚫 ${kingdom?.name ?? '一個王國'} 對我國實施了貿易禁運。`);

    return { success: true, message: `已對 ${target.name} 實施貿易禁運。` };
  }

  /**
   * 解除禁運 — 國王/宰相
   */
  liftEmbargo(
    kingdomId: string,
    targetKingdomId: string,
    characterId: string,
  ): { success: boolean; message: string } {
    const member = this.getMember(characterId, kingdomId);
    if (!member) return { success: false, message: '你不是這個王國的成員。' };
    if (!hasRank(member.rank, LEADER_RANKS)) {
      return { success: false, message: '只有國王或宰相可以解除禁運。' };
    }

    const relation = this.getRelation(kingdomId, targetKingdomId);
    if (relation !== 'embargo') {
      return { success: false, message: '目前沒有對該王國實施禁運。' };
    }

    this.setRelation(kingdomId, targetKingdomId, 'neutral');

    const target = this.getKingdom(targetKingdomId);
    const kingdom = this.getKingdom(kingdomId);
    this.broadcastToKingdom(kingdomId, `✅ 已解除對 ${target?.name ?? '對方'} 的貿易禁運。`);
    this.broadcastToKingdom(targetKingdomId, `✅ ${kingdom?.name ?? '對方'} 已解除對我國的貿易禁運。`);

    return { success: true, message: `已解除對 ${target?.name ?? '對方'} 的禁運。` };
  }

  // ──────────────────────────────────────────────────────────
  //  公共查詢
  // ──────────────────────────────────────────────────────────

  /**
   * 取得兩國關係
   */
  getRelation(kingdomA: string, kingdomB: string): DiplomacyRelation {
    const [a, b] = kingdomA < kingdomB ? [kingdomA, kingdomB] : [kingdomB, kingdomA];
    const db = getDb();
    const row = db.prepare(
      'SELECT relation_type FROM kingdom_diplomacy WHERE kingdom_a_id = ? AND kingdom_b_id = ?'
    ).get(a, b) as { relation_type: string } | undefined;
    return (row?.relation_type as DiplomacyRelation) ?? 'neutral';
  }

  /**
   * 是否為盟友（供其他系統查詢）
   */
  isAlly(kingdomA: string, kingdomB: string): boolean {
    return this.getRelation(kingdomA, kingdomB) === 'ally';
  }

  /**
   * 是否被禁運（供其他系統查詢）
   */
  isEmbargoed(kingdomA: string, kingdomB: string): boolean {
    return this.getRelation(kingdomA, kingdomB) === 'embargo';
  }

  /**
   * 格式化外交資訊
   */
  formatDiplomacyInfo(kingdomId: string): string {
    const status = this.getDiplomacyStatus(kingdomId);

    let text = `🏛️ 外交狀態\n`;
    text += '─'.repeat(35) + '\n';

    if (status.allies.length > 0) {
      text += `\n🤝 盟友：\n`;
      for (const a of status.allies) {
        text += `  - ${a.name}\n`;
      }
    } else {
      text += `\n🤝 盟友：無\n`;
    }

    if (status.enemies.length > 0) {
      text += `\n⚔️ 敵對：\n`;
      for (const e of status.enemies) {
        text += `  - ${e.name}\n`;
      }
    }

    if (status.embargoed.length > 0) {
      text += `\n🚫 禁運：\n`;
      for (const e of status.embargoed) {
        text += `  - ${e.name}\n`;
      }
    }

    if (status.pendingProposals.length > 0) {
      text += `\n📜 待處理聯盟提案：\n`;
      for (const p of status.pendingProposals) {
        text += `  - 來自 ${p.fromKingdomName}（提案 ID：${p.id.slice(0, 8)}）\n`;
      }
    }

    return text;
  }

  // ──────────────────────────────────────────────────────────
  //  私有輔助
  // ──────────────────────────────────────────────────────────

  private getKingdom(kingdomId: string): { id: string; name: string } | null {
    const db = getDb();
    const row = db.prepare('SELECT id, name FROM kingdoms WHERE id = ?')
      .get(kingdomId) as { id: string; name: string } | undefined;
    return row ?? null;
  }

  private getMember(characterId: string, kingdomId: string): { rank: KingdomRank } | null {
    const db = getDb();
    const row = db.prepare(
      'SELECT rank FROM kingdom_members WHERE character_id = ? AND kingdom_id = ?'
    ).get(characterId, kingdomId) as { rank: string } | undefined;
    if (!row) return null;
    return { rank: row.rank as KingdomRank };
  }

  private setRelation(kingdomA: string, kingdomB: string, relation: DiplomacyRelation): void {
    const [a, b] = kingdomA < kingdomB ? [kingdomA, kingdomB] : [kingdomB, kingdomA];
    const db = getDb();
    db.prepare(`
      INSERT INTO kingdom_diplomacy (kingdom_a_id, kingdom_b_id, relation_type, established_at)
      VALUES (?, ?, ?, unixepoch())
      ON CONFLICT(kingdom_a_id, kingdom_b_id) DO UPDATE SET relation_type = ?, established_at = unixepoch()
    `).run(a, b, relation, relation);
  }

  private getPendingAllianceProposal(fromKingdom: string, toKingdom: string): { id: string } | null {
    const db = getDb();
    const row = db.prepare(`
      SELECT id FROM kingdom_alliance_proposals
      WHERE ((from_kingdom_id = ? AND to_kingdom_id = ?) OR (from_kingdom_id = ? AND to_kingdom_id = ?))
        AND status = 'pending'
      LIMIT 1
    `).get(fromKingdom, toKingdom, toKingdom, fromKingdom) as { id: string } | undefined;
    return row ?? null;
  }

  private getAllianceProposal(proposalId: string): {
    id: string; from_kingdom_id: string; to_kingdom_id: string;
    proposed_by: string; proposed_at: number; status: string;
  } | null {
    const db = getDb();
    const row = db.prepare('SELECT * FROM kingdom_alliance_proposals WHERE id = ?')
      .get(proposalId) as any | undefined;
    return row ?? null;
  }

  private broadcastToKingdom(kingdomId: string, text: string): void {
    try {
      const db = getDb();
      const members = db.prepare(
        'SELECT character_id FROM kingdom_members WHERE kingdom_id = ?'
      ).all(kingdomId) as { character_id: string }[];
      for (const m of members) {
        try {
          sendToCharacter(m.character_id, 'system', { text });
        } catch {
          // 忽略離線成員
        }
      }
    } catch {
      // 忽略
    }
  }

  private notifyLeaders(kingdomId: string, text: string): void {
    try {
      const db = getDb();
      const leaders = db.prepare(
        "SELECT character_id FROM kingdom_members WHERE kingdom_id = ? AND rank IN ('king', 'chancellor', 'diplomat')"
      ).all(kingdomId) as { character_id: string }[];
      for (const l of leaders) {
        try {
          sendToCharacter(l.character_id, 'system', { text });
        } catch {
          // 忽略離線成員
        }
      }
    } catch {
      // 忽略
    }
  }
}
