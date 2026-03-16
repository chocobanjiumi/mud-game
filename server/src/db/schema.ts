// SQLite 資料庫初始化

import Database from 'better-sqlite3';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const DB_PATH = path.join(__dirname, '..', '..', 'data', 'game.db');

let db: Database.Database | null = null;

/** 取得資料庫實例（單例） */
export function getDb(): Database.Database {
  if (!db) {
    throw new Error('資料庫尚未初始化，請先呼叫 initDb()');
  }
  return db;
}

/** 初始化資料庫：建表、啟用 WAL 模式 */
export function initDb(): Database.Database {
  const dataDir = path.dirname(DB_PATH);
  if (!fs.existsSync(dataDir)) {
    fs.mkdirSync(dataDir, { recursive: true });
  }

  db = new Database(DB_PATH);
  db.pragma('journal_mode = WAL');
  db.pragma('foreign_keys = ON');

  db.exec(`
    -- 玩家角色
    CREATE TABLE IF NOT EXISTS characters (
      id TEXT PRIMARY KEY,
      user_id TEXT NOT NULL,
      name TEXT UNIQUE NOT NULL,
      level INTEGER DEFAULT 1,
      exp INTEGER DEFAULT 0,
      class_id TEXT DEFAULT 'adventurer',
      hp INTEGER DEFAULT 100,
      mp INTEGER DEFAULT 30,
      max_hp INTEGER DEFAULT 100,
      max_mp INTEGER DEFAULT 30,
      str INTEGER DEFAULT 5,
      int_ INTEGER DEFAULT 5,
      dex INTEGER DEFAULT 5,
      vit INTEGER DEFAULT 5,
      luk INTEGER DEFAULT 5,
      free_points INTEGER DEFAULT 0,
      gold INTEGER DEFAULT 100,
      room_id TEXT DEFAULT 'village_square',
      is_ai INTEGER DEFAULT 0,
      agent_id TEXT,
      created_at INTEGER DEFAULT (unixepoch()),
      last_login INTEGER DEFAULT (unixepoch())
    );

    -- 背包
    CREATE TABLE IF NOT EXISTS inventory (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      character_id TEXT NOT NULL REFERENCES characters(id) ON DELETE CASCADE,
      item_id TEXT NOT NULL,
      quantity INTEGER DEFAULT 1,
      equipped INTEGER DEFAULT 0
    );

    -- 技能學習紀錄
    CREATE TABLE IF NOT EXISTS learned_skills (
      character_id TEXT NOT NULL REFERENCES characters(id) ON DELETE CASCADE,
      skill_id TEXT NOT NULL,
      level INTEGER DEFAULT 1,
      PRIMARY KEY (character_id, skill_id)
    );

    -- 隊伍
    CREATE TABLE IF NOT EXISTS parties (
      id TEXT PRIMARY KEY,
      leader_id TEXT NOT NULL REFERENCES characters(id) ON DELETE CASCADE,
      created_at INTEGER DEFAULT (unixepoch())
    );

    CREATE TABLE IF NOT EXISTS party_members (
      party_id TEXT NOT NULL REFERENCES parties(id) ON DELETE CASCADE,
      character_id TEXT NOT NULL REFERENCES characters(id) ON DELETE CASCADE,
      PRIMARY KEY (party_id, character_id)
    );

    -- 任務進度
    CREATE TABLE IF NOT EXISTS quest_progress (
      character_id TEXT NOT NULL REFERENCES characters(id) ON DELETE CASCADE,
      quest_id TEXT NOT NULL,
      status TEXT DEFAULT 'active',
      progress TEXT DEFAULT '{}',
      started_at INTEGER DEFAULT (unixepoch()),
      completed_at INTEGER,
      PRIMARY KEY (character_id, quest_id)
    );

    -- 排行榜
    CREATE TABLE IF NOT EXISTS leaderboard (
      character_id TEXT NOT NULL REFERENCES characters(id) ON DELETE CASCADE,
      type TEXT NOT NULL,
      score INTEGER DEFAULT 0,
      updated_at INTEGER DEFAULT (unixepoch()),
      PRIMARY KEY (character_id, type)
    );

    -- PvP 記錄
    CREATE TABLE IF NOT EXISTS pvp_records (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      winner_id TEXT NOT NULL REFERENCES characters(id),
      loser_id TEXT NOT NULL REFERENCES characters(id),
      arena_type TEXT DEFAULT 'duel',
      created_at INTEGER DEFAULT (unixepoch())
    );

    -- 索引
    CREATE INDEX IF NOT EXISTS idx_characters_user_id ON characters(user_id);
    CREATE INDEX IF NOT EXISTS idx_inventory_character_id ON inventory(character_id);
    CREATE INDEX IF NOT EXISTS idx_learned_skills_character_id ON learned_skills(character_id);
    CREATE INDEX IF NOT EXISTS idx_party_members_character_id ON party_members(character_id);
    CREATE INDEX IF NOT EXISTS idx_leaderboard_type_score ON leaderboard(type, score DESC);
  `);

  console.log('[DB] 資料庫初始化完成:', DB_PATH);
  return db;
}

/** 關閉資料庫連線 */
export function closeDb(): void {
  if (db) {
    db.close();
    db = null;
  }
}
