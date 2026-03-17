// 國庫管理系統 — TreasuryManager（存取款、稅收、維護費）

import { getDb } from '../db/schema.js';
import { getCharacterById, saveCharacter } from '../db/queries.js';
import { sendToCharacter } from '../ws/handler.js';
import type { KingdomRank, TreasuryTransactionType, KingdomTreasuryRecord } from '@game/shared';

// ============================================================
//  常數（可配置）
// ============================================================

/** 預設稅率 5% */
const DEFAULT_TAX_RATE = 5;

/** 最低稅率 */
const MIN_TAX_RATE = 0;

/** 最高稅率 */
const MAX_TAX_RATE = 20;

/** 房間每日維護費 */
const ROOM_DAILY_MAINTENANCE = 50;

/** NPC 每日維護費 */
const NPC_DAILY_MAINTENANCE = 100;

/** 衛兵每日維護費 */
const GUARD_DAILY_MAINTENANCE = 200;

/** 士兵每日維護費 */
const SOLDIER_DAILY_MAINTENANCE = 10;

// ============================================================
//  官職權限
// ============================================================

/** 可以提取金幣的官職 */
const WITHDRAW_RANKS: KingdomRank[] = ['king', 'chancellor', 'treasurer'];

/** 可以設定稅率的官職 */
const TAX_RANKS: KingdomRank[] = ['king', 'chancellor', 'treasurer'];

function hasRank(memberRank: KingdomRank, allowedRanks: KingdomRank[]): boolean {
  return allowedRanks.includes(memberRank);
}

// ============================================================
//  資料庫初始化
// ============================================================

function ensureTreasuryTables(): void {
  // 所有表已在 schema.ts initDb() 中建立，此處不再重複建表
}

// ============================================================
//  TreasuryManager
// ============================================================

export class TreasuryManager {

  // ──────────────────────────────────────────────────────────
  //  初始化
  // ──────────────────────────────────────────────────────────

  init(): void {
    ensureTreasuryTables();
    console.log('[TreasuryManager] 國庫系統初始化完成');
  }

  // ──────────────────────────────────────────────────────────
  //  基本存取
  // ──────────────────────────────────────────────────────────

  /**
   * 查詢國庫餘額
   */
  getBalance(kingdomId: string): number {
    const db = getDb();
    const row = db.prepare('SELECT treasury_gold FROM kingdoms WHERE id = ?')
      .get(kingdomId) as { treasury_gold: number } | undefined;
    return row?.treasury_gold ?? 0;
  }

  /**
   * 存入金幣 — 任何成員皆可
   */
  deposit(
    kingdomId: string,
    characterId: string,
    amount: number,
  ): { success: boolean; message: string } {
    if (amount <= 0) return { success: false, message: '存入金額必須大於 0。' };

    const member = this.getMember(characterId, kingdomId);
    if (!member) return { success: false, message: '你不是這個王國的成員。' };

    // 檢查玩家是否有足夠金幣
    const char = getCharacterById(characterId);
    if (!char) return { success: false, message: '找不到角色資料。' };
    if (char.gold < amount) {
      return { success: false, message: `你的金幣不足。擁有：${char.gold}，嘗試存入：${amount}` };
    }

    const db = getDb();

    // 扣除玩家金幣
    char.gold -= amount;
    saveCharacter(char);

    // 增加國庫
    db.prepare('UPDATE kingdoms SET treasury_gold = treasury_gold + ? WHERE id = ?')
      .run(amount, kingdomId);

    // 記錄交易
    this.logTransaction(kingdomId, amount, 'deposit', `${char.name} 存入 ${amount} 金幣`, characterId);

    const newBalance = this.getBalance(kingdomId);
    return { success: true, message: `成功存入 ${amount} 金幣。國庫餘額：${newBalance}` };
  }

  /**
   * 提取金幣 — 財務官以上
   */
  withdraw(
    kingdomId: string,
    characterId: string,
    amount: number,
  ): { success: boolean; message: string } {
    if (amount <= 0) return { success: false, message: '提取金額必須大於 0。' };

    const member = this.getMember(characterId, kingdomId);
    if (!member) return { success: false, message: '你不是這個王國的成員。' };
    if (!hasRank(member.rank, WITHDRAW_RANKS)) {
      return { success: false, message: '你的官職不足以提取國庫金幣，需要財務官以上。' };
    }

    const balance = this.getBalance(kingdomId);
    if (balance < amount) {
      return { success: false, message: `國庫金幣不足。餘額：${balance}，嘗試提取：${amount}` };
    }

    const db = getDb();

    // 扣除國庫
    db.prepare('UPDATE kingdoms SET treasury_gold = treasury_gold - ? WHERE id = ?')
      .run(amount, kingdomId);

    // 增加玩家金幣
    const char = getCharacterById(characterId);
    if (char) {
      char.gold += amount;
      saveCharacter(char);
    }

    // 記錄交易
    const charName = char?.name ?? '未知';
    this.logTransaction(kingdomId, -amount, 'withdraw', `${charName} 提取 ${amount} 金幣`, characterId);

    const newBalance = this.getBalance(kingdomId);
    return { success: true, message: `成功提取 ${amount} 金幣。國庫餘額：${newBalance}` };
  }

  /**
   * 查詢交易記錄
   */
  getTransactionLog(kingdomId: string, limit: number = 20): KingdomTreasuryRecord[] {
    const db = getDb();
    const rows = db.prepare(
      'SELECT * FROM kingdom_treasury_log WHERE kingdom_id = ? ORDER BY created_at DESC LIMIT ?'
    ).all(kingdomId, limit) as any[];

    return rows.map(r => ({
      id: r.id,
      kingdomId: r.kingdom_id,
      amount: r.amount,
      type: r.type as TreasuryTransactionType,
      description: r.description,
      characterId: r.character_id ?? '',
      createdAt: r.created_at,
    }));
  }

  // ──────────────────────────────────────────────────────────
  //  稅收系統
  // ──────────────────────────────────────────────────────────

  /**
   * 取得王國稅率
   */
  getTaxRate(kingdomId: string): number {
    const db = getDb();
    const row = db.prepare('SELECT tax_rate FROM kingdoms WHERE id = ?')
      .get(kingdomId) as { tax_rate: number } | undefined;
    return row?.tax_rate ?? DEFAULT_TAX_RATE;
  }

  /**
   * 設定稅率 — 國王/宰相/財務官
   */
  setTaxRate(
    kingdomId: string,
    characterId: string,
    rate: number,
  ): { success: boolean; message: string } {
    if (rate < MIN_TAX_RATE || rate > MAX_TAX_RATE) {
      return { success: false, message: `稅率必須在 ${MIN_TAX_RATE}% ~ ${MAX_TAX_RATE}% 之間。` };
    }

    const member = this.getMember(characterId, kingdomId);
    if (!member) return { success: false, message: '你不是這個王國的成員。' };
    if (!hasRank(member.rank, TAX_RANKS)) {
      return { success: false, message: '你的官職不足以設定稅率，需要國王、宰相或財務官。' };
    }

    const db = getDb();
    db.prepare('UPDATE kingdoms SET tax_rate = ? WHERE id = ?').run(rate, kingdomId);

    // 通知王國成員
    this.broadcastToKingdom(kingdomId, `📜 稅率已調整為 ${rate}%。`);

    return { success: true, message: `稅率已設定為 ${rate}%。` };
  }

  /**
   * 收稅 — 當成員賺取金幣時呼叫（怪物掉落等）
   * @returns 實際收取的稅金
   */
  collectTax(characterId: string, goldEarned: number): number {
    if (goldEarned <= 0) return 0;

    // 查找角色所屬王國
    const kingdomId = this.getCharacterKingdom(characterId);
    if (!kingdomId) return 0;

    const taxRate = this.getTaxRate(kingdomId);
    if (taxRate <= 0) return 0;

    const tax = Math.floor(goldEarned * taxRate / 100);
    if (tax <= 0) return 0;

    const db = getDb();

    // 從玩家扣稅
    const char = getCharacterById(characterId);
    if (!char) return 0;

    // 確保不會扣成負數
    const actualTax = Math.min(tax, char.gold);
    if (actualTax <= 0) return 0;

    char.gold -= actualTax;
    saveCharacter(char);

    // 增加國庫
    db.prepare('UPDATE kingdoms SET treasury_gold = treasury_gold + ? WHERE id = ?')
      .run(actualTax, kingdomId);

    // 記錄
    this.logTransaction(kingdomId, actualTax, 'tax', `稅收 (${taxRate}% of ${goldEarned})`, characterId);

    return actualTax;
  }

  // ──────────────────────────────────────────────────────────
  //  維護費系統
  // ──────────────────────────────────────────────────────────

  /**
   * 計算每日維護費
   */
  calculateDailyMaintenance(kingdomId: string): {
    roomCost: number;
    npcCost: number;
    soldierCost: number;
    total: number;
    rooms: number;
    npcs: number;
    guards: number;
    soldiers: number;
  } {
    const db = getDb();

    // 計算房間數
    let rooms = 0;
    try {
      const roomRow = db.prepare(
        'SELECT COUNT(*) as cnt FROM kingdom_rooms WHERE kingdom_id = ?'
      ).get(kingdomId) as { cnt: number } | undefined;
      rooms = roomRow?.cnt ?? 0;
    } catch {
      // 表可能不存在
    }

    // 計算 NPC 數（區分衛兵和其他）
    let npcs = 0;
    let guards = 0;
    try {
      const npcRows = db.prepare(
        'SELECT npc_type FROM kingdom_npcs WHERE kingdom_id = ?'
      ).all(kingdomId) as { npc_type: string }[];
      for (const npc of npcRows) {
        if (npc.npc_type === 'guard') {
          guards++;
        } else {
          npcs++;
        }
      }
    } catch {
      // 表可能不存在
    }

    // 計算士兵數
    let soldiers = 0;
    try {
      const soldierRow = db.prepare(
        'SELECT total_count FROM kingdom_soldiers WHERE kingdom_id = ?'
      ).get(kingdomId) as { total_count: number } | undefined;
      soldiers = soldierRow?.total_count ?? 0;
    } catch {
      // 表可能不存在
    }

    const roomCost = rooms * ROOM_DAILY_MAINTENANCE;
    const npcCost = npcs * NPC_DAILY_MAINTENANCE + guards * GUARD_DAILY_MAINTENANCE;
    const soldierCost = soldiers * SOLDIER_DAILY_MAINTENANCE;

    return {
      roomCost,
      npcCost,
      soldierCost,
      total: roomCost + npcCost + soldierCost,
      rooms,
      npcs,
      guards,
      soldiers,
    };
  }

  /**
   * 執行每日維護扣款
   * 若國庫不足，依序裁撤 NPC 和士兵
   */
  processDailyMaintenance(kingdomId: string): {
    success: boolean;
    message: string;
    totalCost: number;
    npcsRemoved: number;
    soldiersRemoved: number;
  } {
    const maintenance = this.calculateDailyMaintenance(kingdomId);
    const balance = this.getBalance(kingdomId);

    let npcsRemoved = 0;
    let soldiersRemoved = 0;
    let actualCost = maintenance.total;

    if (balance >= maintenance.total) {
      // 正常扣款
      const db = getDb();
      db.prepare('UPDATE kingdoms SET treasury_gold = treasury_gold - ? WHERE id = ?')
        .run(maintenance.total, kingdomId);
      this.logTransaction(kingdomId, -maintenance.total, 'maintenance',
        `每日維護費（房間×${maintenance.rooms}、NPC×${maintenance.npcs}、衛兵×${maintenance.guards}、士兵×${maintenance.soldiers}）`, null);
    } else {
      // 資金不足 — 先扣可用的，然後裁撤
      const db = getDb();

      // 先試扣房間費
      let remaining = balance;

      if (remaining >= maintenance.roomCost) {
        remaining -= maintenance.roomCost;
      } else {
        // 連房間都付不起，全扣光
        remaining = 0;
      }

      // NPC 維護
      if (remaining < maintenance.npcCost) {
        // 裁撤 NPC（先裁非衛兵，再裁衛兵）
        npcsRemoved = this.removeExcessNpcs(kingdomId, remaining);
      } else {
        remaining -= maintenance.npcCost;
      }

      // 士兵維護
      if (remaining < maintenance.soldierCost && maintenance.soldiers > 0) {
        const affordableSoldiers = Math.floor(remaining / SOLDIER_DAILY_MAINTENANCE);
        soldiersRemoved = this.reduceSoldiers(kingdomId, maintenance.soldiers - affordableSoldiers);
        remaining = Math.max(0, remaining - affordableSoldiers * SOLDIER_DAILY_MAINTENANCE);
      } else {
        remaining -= maintenance.soldierCost;
      }

      // 扣除所有可用餘額
      actualCost = balance;
      db.prepare('UPDATE kingdoms SET treasury_gold = 0 WHERE id = ?').run(kingdomId);
      this.logTransaction(kingdomId, -actualCost, 'maintenance',
        `每日維護費（資金不足，裁撤 NPC×${npcsRemoved}、士兵×${soldiersRemoved}）`, null);

      // 通知
      this.broadcastToKingdom(kingdomId,
        `⚠️ 國庫資金不足以支付每日維護費！` +
        (npcsRemoved > 0 ? `\n已裁撤 ${npcsRemoved} 名 NPC。` : '') +
        (soldiersRemoved > 0 ? `\n已裁撤 ${soldiersRemoved} 名士兵。` : '')
      );
    }

    return {
      success: balance >= maintenance.total,
      message: balance >= maintenance.total
        ? `每日維護費已扣除 ${maintenance.total} 金幣。`
        : `國庫資金不足！已裁撤 NPC×${npcsRemoved}、士兵×${soldiersRemoved}。`,
      totalCost: actualCost,
      npcsRemoved,
      soldiersRemoved,
    };
  }

  // ──────────────────────────────────────────────────────────
  //  格式化顯示
  // ──────────────────────────────────────────────────────────

  /**
   * 格式化國庫資訊
   */
  formatTreasuryInfo(kingdomId: string): string {
    const balance = this.getBalance(kingdomId);
    const taxRate = this.getTaxRate(kingdomId);
    const maintenance = this.calculateDailyMaintenance(kingdomId);

    let text = `💰 國庫資訊\n`;
    text += '─'.repeat(35) + '\n';
    text += `餘額：${balance} 金幣\n`;
    text += `稅率：${taxRate}%\n`;
    text += `\n📊 每日維護費：${maintenance.total} 金幣\n`;
    text += `  房間（${maintenance.rooms}）：${maintenance.roomCost} 金幣\n`;
    text += `  NPC（${maintenance.npcs}）+ 衛兵（${maintenance.guards}）：${maintenance.npcCost} 金幣\n`;
    text += `  士兵（${maintenance.soldiers}）：${maintenance.soldierCost} 金幣\n`;

    const daysAffordable = maintenance.total > 0 ? Math.floor(balance / maintenance.total) : Infinity;
    if (daysAffordable !== Infinity) {
      text += `\n可維持天數：${daysAffordable} 天\n`;
    }

    return text;
  }

  // ──────────────────────────────────────────────────────────
  //  公開的記錄方法（供其他模組呼叫）
  // ──────────────────────────────────────────────────────────

  /**
   * 記錄國庫交易（公開給外部使用）
   */
  logTransaction(
    kingdomId: string,
    amount: number,
    type: string,
    description: string,
    characterId: string | null,
  ): void {
    try {
      const db = getDb();
      db.prepare(`
        INSERT INTO kingdom_treasury_log (kingdom_id, amount, type, description, character_id)
        VALUES (?, ?, ?, ?, ?)
      `).run(kingdomId, amount, type, description, characterId);
    } catch {
      // 忽略
    }
  }

  // ──────────────────────────────────────────────────────────
  //  私有輔助
  // ──────────────────────────────────────────────────────────

  private getMember(characterId: string, kingdomId: string): { rank: KingdomRank } | null {
    const db = getDb();
    const row = db.prepare(
      'SELECT rank FROM kingdom_members WHERE character_id = ? AND kingdom_id = ?'
    ).get(characterId, kingdomId) as { rank: string } | undefined;
    if (!row) return null;
    return { rank: row.rank as KingdomRank };
  }

  private getCharacterKingdom(characterId: string): string | null {
    const db = getDb();
    const row = db.prepare(
      'SELECT kingdom_id FROM kingdom_members WHERE character_id = ?'
    ).get(characterId) as { kingdom_id: string } | undefined;
    return row?.kingdom_id ?? null;
  }

  private removeExcessNpcs(kingdomId: string, availableGold: number): number {
    let removed = 0;
    try {
      const db = getDb();
      const npcs = db.prepare(
        'SELECT id, npc_type FROM kingdom_npcs WHERE kingdom_id = ? ORDER BY CASE WHEN npc_type = \'guard\' THEN 1 ELSE 0 END ASC'
      ).all(kingdomId) as { id: string; npc_type: string }[];

      let remaining = availableGold;
      for (const npc of npcs) {
        const cost = npc.npc_type === 'guard' ? GUARD_DAILY_MAINTENANCE : NPC_DAILY_MAINTENANCE;
        if (remaining >= cost) {
          remaining -= cost;
        } else {
          // 無法負擔，裁撤
          db.prepare('DELETE FROM kingdom_npcs WHERE id = ?').run(npc.id);
          removed++;
        }
      }
    } catch {
      // 表可能不存在
    }
    return removed;
  }

  private reduceSoldiers(kingdomId: string, count: number): number {
    if (count <= 0) return 0;
    try {
      const db = getDb();
      const current = db.prepare('SELECT total_count FROM kingdom_soldiers WHERE kingdom_id = ?')
        .get(kingdomId) as { total_count: number } | undefined;
      if (!current) return 0;

      const toRemove = Math.min(count, current.total_count);
      const newCount = current.total_count - toRemove;

      db.prepare('UPDATE kingdom_soldiers SET total_count = ? WHERE kingdom_id = ?')
        .run(newCount, kingdomId);

      // 按比例縮減部署
      if (newCount === 0) {
        db.prepare('DELETE FROM kingdom_soldier_deployments WHERE kingdom_id = ?').run(kingdomId);
      } else if (current.total_count > 0) {
        const ratio = newCount / current.total_count;
        const deployments = db.prepare('SELECT room_id, count FROM kingdom_soldier_deployments WHERE kingdom_id = ?')
          .all(kingdomId) as { room_id: string; count: number }[];
        for (const d of deployments) {
          const newDCount = Math.floor(d.count * ratio);
          if (newDCount <= 0) {
            db.prepare('DELETE FROM kingdom_soldier_deployments WHERE kingdom_id = ? AND room_id = ?')
              .run(kingdomId, d.room_id);
          } else {
            db.prepare('UPDATE kingdom_soldier_deployments SET count = ? WHERE kingdom_id = ? AND room_id = ?')
              .run(newDCount, kingdomId, d.room_id);
          }
        }
      }

      return toRemove;
    } catch {
      return 0;
    }
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
}
