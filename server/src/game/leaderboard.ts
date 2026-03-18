// 排行榜系統 — LeaderboardManager

import type { Character } from '@game/shared';
import { getDb } from '../db/schema.js';
import { sendToCharacter } from '../ws/handler.js';

// ============================================================
//  型別定義
// ============================================================

export type LeaderboardCategory = 'level' | 'pvp' | 'dungeon_speed';

export interface LeaderboardEntry {
  rank: number;
  characterId: string;
  name: string;
  classId: string;
  level: number;
  score: number;
}

interface CachedLeaderboard {
  entries: LeaderboardEntry[];
  cachedAt: number;
}

// ============================================================
//  常數
// ============================================================

/** 快取有效時間：5 分鐘 */
const CACHE_TTL = 5 * 60 * 1000;

/** 預設顯示筆數 */
const DEFAULT_LIMIT = 10;

// ============================================================
//  LeaderboardManager
// ============================================================

export class LeaderboardManager {
  /** 排行榜快取 (category -> CachedLeaderboard) */
  private cache: Map<LeaderboardCategory, CachedLeaderboard> = new Map();

  // ──────────────────────────────────────────────────────────
  //  取得排行榜
  // ──────────────────────────────────────────────────────────

  /**
   * 取得排行榜資料（優先使用快取）
   */
  getLeaderboard(category: LeaderboardCategory, limit: number = DEFAULT_LIMIT): LeaderboardEntry[] {
    // 檢查快取
    const cached = this.cache.get(category);
    if (cached && Date.now() - cached.cachedAt < CACHE_TTL) {
      return cached.entries.slice(0, limit);
    }

    // 從 DB 讀取
    const entries = this.fetchFromDb(category, limit);

    // 寫入快取
    this.cache.set(category, {
      entries,
      cachedAt: Date.now(),
    });

    return entries;
  }

  // ──────────────────────────────────────────────────────────
  //  更新排行榜
  // ──────────────────────────────────────────────────────────

  /**
   * 更新排行榜條目
   * 對於 level 和 pvp：score 越高越好
   * 對於 dungeon_speed：score 是秒數，越低越好（但存儲仍為正數，排序時處理）
   */
  updateEntry(characterId: string, category: LeaderboardCategory, score: number): void {
    try {
      if (category === 'dungeon_speed') {
        // 副本速通：只保留最短時間
        const existing = getDb()
          .prepare('SELECT score FROM leaderboard WHERE character_id = ? AND type = ?')
          .get(characterId, category) as { score: number } | undefined;

        if (existing && existing.score > 0 && existing.score < score) {
          // 已有更好的紀錄，不更新
          return;
        }
      }

      getDb()
        .prepare(`
          INSERT INTO leaderboard (character_id, type, score, updated_at)
          VALUES (?, ?, ?, unixepoch())
          ON CONFLICT(character_id, type) DO UPDATE SET
            score = CASE
              WHEN ? = 'dungeon_speed' THEN MIN(score, ?)
              ELSE MAX(score, ?)
            END,
            updated_at = unixepoch()
        `)
        .run(characterId, category, score, category, score, score);

      // 使該類別的快取失效
      this.cache.delete(category);
    } catch {
      // DB 寫入失敗不影響遊戲
    }
  }

  /**
   * 角色升級時呼叫
   */
  onLevelUp(character: Character): void {
    this.updateEntry(character.id, 'level', character.level);
  }

  /**
   * PvP 對戰結束時呼叫
   */
  onPvPMatch(characterId: string, eloScore: number): void {
    this.updateEntry(characterId, 'pvp', eloScore);
  }

  /**
   * 副本通關時呼叫
   */
  onDungeonClear(characterId: string, clearTimeSeconds: number): void {
    this.updateEntry(characterId, 'dungeon_speed', clearTimeSeconds);
  }

  // ──────────────────────────────────────────────────────────
  //  格式化輸出
  // ──────────────────────────────────────────────────────────

  /**
   * 格式化排行榜為文字
   */
  formatLeaderboard(category: LeaderboardCategory, limit: number = DEFAULT_LIMIT): string {
    const entries = this.getLeaderboard(category, limit);

    if (entries.length === 0) {
      return '排行榜暫無資料。';
    }

    const categoryNames: Record<LeaderboardCategory, string> = {
      level: '等級排行榜',
      pvp: 'PvP 積分排行榜',
      dungeon_speed: '副本速通排行榜',
    };

    let text = `${categoryNames[category]}\n`;
    text += '─'.repeat(40) + '\n';

    for (const entry of entries) {
      const medal = entry.rank <= 3
        ? ['1.', '2.', '3.'][entry.rank - 1]
        : `${entry.rank}.`;

      let scoreText: string;
      switch (category) {
        case 'level':
          scoreText = `Lv.${entry.score}`;
          break;
        case 'pvp':
          scoreText = `${entry.score} 分`;
          break;
        case 'dungeon_speed': {
          const min = Math.floor(entry.score / 60);
          const sec = entry.score % 60;
          scoreText = `${min}分${sec}秒`;
          break;
        }
        default:
          scoreText = `${entry.score}`;
      }

      text += `${medal} ${entry.name}（Lv.${entry.level}）— ${scoreText}\n`;
    }

    return text;
  }

  /**
   * 傳送排行榜給玩家
   */
  sendLeaderboard(characterId: string, category: LeaderboardCategory): void {
    const entries = this.getLeaderboard(category);
    sendToCharacter(characterId, 'leaderboard_data', {
      category,
      entries,
    });
  }

  // ──────────────────────────────────────────────────────────
  //  取得玩家排名
  // ──────────────────────────────────────────────────────────

  /**
   * 取得玩家在指定排行榜中的排名
   */
  getPlayerRank(characterId: string, category: LeaderboardCategory): number | null {
    try {
      let orderDir = 'DESC';
      if (category === 'dungeon_speed') {
        orderDir = 'ASC';
      }

      const row = getDb()
        .prepare(`
          SELECT COUNT(*) + 1 as rank FROM leaderboard
          WHERE type = ? AND score ${category === 'dungeon_speed' ? '<' : '>'} (
            SELECT COALESCE(score, 0) FROM leaderboard
            WHERE character_id = ? AND type = ?
          )
        `)
        .get(category, characterId, category) as { rank: number } | undefined;

      return row?.rank ?? null;
    } catch {
      return null;
    }
  }

  /**
   * 格式化玩家個人排名資訊
   */
  formatPlayerRanking(characterId: string, characterName: string): string {
    let text = `${characterName} 的排名\n`;
    text += '─'.repeat(35) + '\n';

    const categories: LeaderboardCategory[] = ['level', 'pvp', 'dungeon_speed'];
    const categoryNames: Record<LeaderboardCategory, string> = {
      level: '等級',
      pvp: 'PvP 積分',
      dungeon_speed: '副本速通',
    };

    for (const cat of categories) {
      const rank = this.getPlayerRank(characterId, cat);
      const rankText = rank ? `第 ${rank} 名` : '未上榜';
      text += `${categoryNames[cat]}：${rankText}\n`;
    }

    return text;
  }

  // ──────────────────────────────────────────────────────────
  //  DB 操作
  // ──────────────────────────────────────────────────────────

  private fetchFromDb(category: LeaderboardCategory, limit: number): LeaderboardEntry[] {
    try {
      const orderDir = category === 'dungeon_speed' ? 'ASC' : 'DESC';

      const rows = getDb()
        .prepare(`
          SELECT l.character_id, l.score, c.name, c.class_id, c.level
          FROM leaderboard l
          JOIN characters c ON l.character_id = c.id
          WHERE l.type = ?
          ORDER BY l.score ${orderDir}
          LIMIT ?
        `)
        .all(category, limit) as {
        character_id: string;
        score: number;
        name: string;
        class_id: string;
        level: number;
      }[];

      return rows.map((row, index) => ({
        rank: index + 1,
        characterId: row.character_id,
        name: row.name,
        classId: row.class_id,
        level: row.level,
        score: row.score,
      }));
    } catch {
      return [];
    }
  }

  // ──────────────────────────────────────────────────────────
  //  快取管理
  // ──────────────────────────────────────────────────────────

  /**
   * 清除所有快取
   */
  clearCache(): void {
    this.cache.clear();
  }

  /**
   * 清除指定類別的快取
   */
  invalidateCategory(category: LeaderboardCategory): void {
    this.cache.delete(category);
  }
}
