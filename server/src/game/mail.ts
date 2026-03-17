// 郵件系統 - 玩家間信件與附件

import { getDb } from '../db/schema.js';
import { getCharacterByName, getCharacterById, addInventoryItem, removeInventoryItem, saveCharacter } from '../db/queries.js';
import { ITEM_DEFS } from '@game/shared';
import { randomUUID } from 'crypto';

// ============================================================
//  類型
// ============================================================

export interface Mail {
  id: string;
  senderId: string | null;
  senderName: string;
  recipientId: string;
  subject: string;
  body: string;
  attachedItemId: string | null;
  attachedItemCount: number;
  attachedGold: number;
  isRead: boolean;
  createdAt: number;
  expiresAt: number;
}

/** 郵件過期時間：7 天 */
const MAIL_EXPIRY_MS = 7 * 24 * 60 * 60;

// ============================================================
//  MailManager
// ============================================================

export class MailManager {

  /** 確保郵件表存在 */
  ensureTables(): void {
    const db = getDb();
    db.exec(`
      CREATE TABLE IF NOT EXISTS mail (
        id TEXT PRIMARY KEY,
        sender_id TEXT,
        recipient_id TEXT NOT NULL,
        subject TEXT DEFAULT '',
        body TEXT DEFAULT '',
        attached_item_id TEXT,
        attached_item_count INTEGER DEFAULT 0,
        attached_gold INTEGER DEFAULT 0,
        is_read INTEGER DEFAULT 0,
        created_at INTEGER DEFAULT (unixepoch()),
        expires_at INTEGER
      );
      CREATE INDEX IF NOT EXISTS idx_mail_recipient ON mail(recipient_id, is_read);
      CREATE INDEX IF NOT EXISTS idx_mail_expires ON mail(expires_at);
    `);
  }

  // ──────────────────────────────────────────────────────────
  //  發送郵件
  // ──────────────────────────────────────────────────────────

  /**
   * 發送郵件
   * @returns 成功時返回 mailId，失敗時返回錯誤訊息
   */
  sendMail(
    senderId: string,
    recipientName: string,
    subject: string,
    body: string,
    attachItemId?: string,
    attachCount?: number,
    attachGold?: number,
  ): { ok: true; mailId: string } | { ok: false; error: string } {
    const db = getDb();

    // 查找收件人
    const recipient = getCharacterByName(recipientName);
    if (!recipient) {
      return { ok: false, error: `找不到玩家「${recipientName}」。` };
    }

    if (recipient.id === senderId) {
      return { ok: false, error: '不能寄信給自己。' };
    }

    const sender = getCharacterById(senderId);
    if (!sender) {
      return { ok: false, error: '找不到你的角色資料。' };
    }

    // 處理附件物品
    const itemCount = attachCount ?? 0;
    if (attachItemId && itemCount > 0) {
      const itemDef = ITEM_DEFS[attachItemId];
      if (!itemDef) {
        return { ok: false, error: `不存在的物品：${attachItemId}` };
      }
      // 從發送者背包扣除
      const removed = removeInventoryItem(senderId, attachItemId, itemCount);
      if (!removed) {
        return { ok: false, error: `你的背包中沒有足夠的「${itemDef.name}」。` };
      }
    }

    // 處理附件金幣
    const goldAmount = attachGold ?? 0;
    if (goldAmount > 0) {
      if (sender.gold < goldAmount) {
        // 如果已經扣了物品，要退回
        if (attachItemId && itemCount > 0) {
          addInventoryItem(senderId, attachItemId, itemCount);
        }
        return { ok: false, error: `金幣不足。你有 ${sender.gold} 金幣，需要 ${goldAmount}。` };
      }
      sender.gold -= goldAmount;
      saveCharacter(sender);
    }

    const mailId = randomUUID();
    const now = Math.floor(Date.now() / 1000);
    const expiresAt = now + MAIL_EXPIRY_MS;

    db.prepare(`
      INSERT INTO mail (id, sender_id, recipient_id, subject, body, attached_item_id, attached_item_count, attached_gold, is_read, created_at, expires_at)
      VALUES (?, ?, ?, ?, ?, ?, ?, ?, 0, ?, ?)
    `).run(
      mailId, senderId, recipient.id, subject, body,
      attachItemId ?? null, itemCount, goldAmount,
      now, expiresAt,
    );

    return { ok: true, mailId };
  }

  // ──────────────────────────────────────────────────────────
  //  收件箱
  // ──────────────────────────────────────────────────────────

  /** 取得收件箱（最新 50 封） */
  getInbox(characterId: string): Mail[] {
    const db = getDb();
    const now = Math.floor(Date.now() / 1000);

    // 清理過期郵件
    this.cleanExpired();

    const rows = db.prepare(`
      SELECT m.*, c.name as sender_name
      FROM mail m
      LEFT JOIN characters c ON m.sender_id = c.id
      WHERE m.recipient_id = ? AND (m.expires_at IS NULL OR m.expires_at > ?)
      ORDER BY m.created_at DESC
      LIMIT 50
    `).all(characterId, now) as any[];

    return rows.map(r => this.rowToMail(r));
  }

  // ──────────────────────────────────────────────────────────
  //  讀取郵件
  // ──────────────────────────────────────────────────────────

  /**
   * 讀取郵件並領取附件
   */
  readMail(characterId: string, mailId: string): { ok: true; mail: Mail; claimed: string[] } | { ok: false; error: string } {
    const db = getDb();

    const row = db.prepare(`
      SELECT m.*, c.name as sender_name
      FROM mail m
      LEFT JOIN characters c ON m.sender_id = c.id
      WHERE m.id = ? AND m.recipient_id = ?
    `).get(mailId, characterId) as any;

    if (!row) {
      return { ok: false, error: '找不到這封郵件。' };
    }

    const mail = this.rowToMail(row);
    const claimed: string[] = [];

    // 標記已讀
    if (!mail.isRead) {
      db.prepare('UPDATE mail SET is_read = 1 WHERE id = ?').run(mailId);
      mail.isRead = true;
    }

    // 領取附件（僅在首次讀取時）
    if (!row.is_read) {
      // 附件物品
      if (mail.attachedItemId && mail.attachedItemCount > 0) {
        const itemDef = ITEM_DEFS[mail.attachedItemId];
        addInventoryItem(characterId, mail.attachedItemId, mail.attachedItemCount);
        claimed.push(`獲得物品：${itemDef?.name ?? mail.attachedItemId} x${mail.attachedItemCount}`);

        // 清除附件
        db.prepare('UPDATE mail SET attached_item_id = NULL, attached_item_count = 0 WHERE id = ?').run(mailId);
      }

      // 附件金幣
      if (mail.attachedGold > 0) {
        const char = getCharacterById(characterId);
        if (char) {
          char.gold += mail.attachedGold;
          saveCharacter(char);
          claimed.push(`獲得金幣：${mail.attachedGold}`);
        }
        db.prepare('UPDATE mail SET attached_gold = 0 WHERE id = ?').run(mailId);
      }
    }

    return { ok: true, mail, claimed };
  }

  // ──────────────────────────────────────────────────────────
  //  刪除郵件
  // ──────────────────────────────────────────────────────────

  deleteMail(characterId: string, mailId: string): { ok: boolean; error?: string } {
    const db = getDb();
    const mail = db.prepare('SELECT * FROM mail WHERE id = ? AND recipient_id = ?').get(mailId, characterId) as any;
    if (!mail) return { ok: false, error: '找不到這封郵件。' };

    // 檢查未領附件
    const hasUnclaimedAttachment = (!mail.is_read) &&
      ((mail.attached_item_id && mail.attached_item_count > 0) || (mail.attached_gold > 0));
    if (hasUnclaimedAttachment) {
      return { ok: false, error: '此郵件有未領取的附件，請先閱讀郵件領取附件後再刪除。' };
    }

    db.prepare('DELETE FROM mail WHERE id = ?').run(mailId);
    return { ok: true };
  }

  // ──────────────────────────────────────────────────────────
  //  未讀計數
  // ──────────────────────────────────────────────────────────

  getUnreadCount(characterId: string): number {
    const db = getDb();
    const now = Math.floor(Date.now() / 1000);
    const row = db.prepare(`
      SELECT COUNT(*) as cnt FROM mail
      WHERE recipient_id = ? AND is_read = 0 AND (expires_at IS NULL OR expires_at > ?)
    `).get(characterId, now) as any;
    return row?.cnt ?? 0;
  }

  // ──────────────────────────────────────────────────────────
  //  清理過期郵件
  // ──────────────────────────────────────────────────────────

  private cleanExpired(): void {
    const db = getDb();
    const now = Math.floor(Date.now() / 1000);
    db.prepare('DELETE FROM mail WHERE expires_at IS NOT NULL AND expires_at <= ?').run(now);
  }

  // ──────────────────────────────────────────────────────────
  //  輔助
  // ──────────────────────────────────────────────────────────

  private rowToMail(row: any): Mail {
    return {
      id: row.id,
      senderId: row.sender_id,
      senderName: row.sender_name ?? '系統',
      recipientId: row.recipient_id,
      subject: row.subject ?? '',
      body: row.body ?? '',
      attachedItemId: row.attached_item_id,
      attachedItemCount: row.attached_item_count ?? 0,
      attachedGold: row.attached_gold ?? 0,
      isRead: !!row.is_read,
      createdAt: row.created_at,
      expiresAt: row.expires_at,
    };
  }
}
