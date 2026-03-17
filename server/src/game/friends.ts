// 好友系統

import { getDb } from '../db/schema.js';
import { getCharacterByName, getCharacterById } from '../db/queries.js';
import { getSessionByCharacterId } from '../ws/handler.js';

// ============================================================
//  FriendManager
// ============================================================

export interface FriendInfo {
  id: string;
  name: string;
  level: number;
  classId: string;
  isOnline: boolean;
}

export class FriendManager {

  /** 確保好友表存在 */
  ensureTables(): void {
    const db = getDb();
    db.exec(`
      CREATE TABLE IF NOT EXISTS friends (
        character_id TEXT NOT NULL,
        friend_id TEXT NOT NULL,
        created_at INTEGER DEFAULT (unixepoch()),
        PRIMARY KEY (character_id, friend_id)
      );
      CREATE INDEX IF NOT EXISTS idx_friends_character ON friends(character_id);
    `);
  }

  // ──────────────────────────────────────────────────────────
  //  新增好友
  // ──────────────────────────────────────────────────────────

  addFriend(characterId: string, friendName: string): { ok: boolean; error?: string; friendInfo?: FriendInfo } {
    const db = getDb();

    const friend = getCharacterByName(friendName);
    if (!friend) {
      return { ok: false, error: `找不到玩家「${friendName}」。` };
    }

    if (friend.id === characterId) {
      return { ok: false, error: '不能加自己為好友。' };
    }

    // 檢查是否已經是好友
    const existing = db.prepare(
      'SELECT 1 FROM friends WHERE character_id = ? AND friend_id = ?'
    ).get(characterId, friend.id);

    if (existing) {
      return { ok: false, error: `「${friend.name}」已經是你的好友了。` };
    }

    // 雙向加好友
    const now = Math.floor(Date.now() / 1000);
    db.prepare('INSERT OR IGNORE INTO friends (character_id, friend_id, created_at) VALUES (?, ?, ?)').run(characterId, friend.id, now);
    db.prepare('INSERT OR IGNORE INTO friends (character_id, friend_id, created_at) VALUES (?, ?, ?)').run(friend.id, characterId, now);

    return {
      ok: true,
      friendInfo: {
        id: friend.id,
        name: friend.name,
        level: friend.level,
        classId: friend.classId,
        isOnline: !!getSessionByCharacterId(friend.id),
      },
    };
  }

  // ──────────────────────────────────────────────────────────
  //  移除好友
  // ──────────────────────────────────────────────────────────

  removeFriend(characterId: string, friendName: string): { ok: boolean; error?: string } {
    const db = getDb();

    const friend = getCharacterByName(friendName);
    if (!friend) {
      return { ok: false, error: `找不到玩家「${friendName}」。` };
    }

    const result = db.prepare('DELETE FROM friends WHERE character_id = ? AND friend_id = ?').run(characterId, friend.id);
    // 雙向移除
    db.prepare('DELETE FROM friends WHERE character_id = ? AND friend_id = ?').run(friend.id, characterId);

    if (result.changes === 0) {
      return { ok: false, error: `「${friend.name}」不在你的好友列表中。` };
    }

    return { ok: true };
  }

  // ──────────────────────────────────────────────────────────
  //  好友列表
  // ──────────────────────────────────────────────────────────

  getFriendList(characterId: string): FriendInfo[] {
    const db = getDb();
    const rows = db.prepare(`
      SELECT c.id, c.name, c.level, c.class_id
      FROM friends f
      JOIN characters c ON f.friend_id = c.id
      WHERE f.character_id = ?
      ORDER BY c.name
    `).all(characterId) as any[];

    return rows.map(r => ({
      id: r.id,
      name: r.name,
      level: r.level,
      classId: r.class_id,
      isOnline: !!getSessionByCharacterId(r.id),
    }));
  }

  /** 僅返回在線好友 */
  getOnlineFriends(characterId: string): FriendInfo[] {
    return this.getFriendList(characterId).filter(f => f.isOnline);
  }
}
