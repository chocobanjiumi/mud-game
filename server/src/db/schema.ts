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

    -- 每日任務完成紀錄
    CREATE TABLE IF NOT EXISTS daily_quests (
      character_id TEXT NOT NULL REFERENCES characters(id) ON DELETE CASCADE,
      quest_id TEXT NOT NULL,
      completed_date TEXT NOT NULL,
      PRIMARY KEY (character_id, quest_id, completed_date)
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

    -- User-level premium 商品權益（per-user，跨角色共用）
    CREATE TABLE IF NOT EXISTS user_entitlements (
      user_id TEXT NOT NULL,
      item_id TEXT NOT NULL,
      purchased_at INTEGER DEFAULT (unixepoch()),
      PRIMARY KEY (user_id, item_id)
    );

    -- 交易紀錄
    CREATE TABLE IF NOT EXISTS transactions (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      transaction_id TEXT NOT NULL,
      user_id TEXT NOT NULL,
      amount INTEGER NOT NULL,
      type TEXT NOT NULL,
      description TEXT DEFAULT '',
      timestamp INTEGER NOT NULL
    );

    -- 王國
    CREATE TABLE IF NOT EXISTS kingdoms (
      id TEXT PRIMARY KEY,
      name TEXT UNIQUE NOT NULL,
      description TEXT DEFAULT '',
      king_id TEXT NOT NULL REFERENCES characters(id),
      created_at INTEGER DEFAULT (unixepoch()),
      treasury_gold INTEGER DEFAULT 0,
      tax_rate INTEGER DEFAULT 5,
      motto TEXT DEFAULT ''
    );

    -- 王國成員
    CREATE TABLE IF NOT EXISTS kingdom_members (
      kingdom_id TEXT NOT NULL REFERENCES kingdoms(id) ON DELETE CASCADE,
      character_id TEXT NOT NULL REFERENCES characters(id) ON DELETE CASCADE,
      rank TEXT DEFAULT 'citizen',
      joined_at INTEGER DEFAULT (unixepoch()),
      PRIMARY KEY (kingdom_id, character_id)
    );

    -- 王國房間
    CREATE TABLE IF NOT EXISTS kingdom_rooms (
      kingdom_id TEXT NOT NULL REFERENCES kingdoms(id) ON DELETE CASCADE,
      room_id TEXT NOT NULL,
      room_type TEXT DEFAULT 'empty',
      built_by TEXT NOT NULL REFERENCES characters(id),
      built_at INTEGER DEFAULT (unixepoch()),
      PRIMARY KEY (kingdom_id, room_id)
    );

    -- 國庫交易紀錄
    CREATE TABLE IF NOT EXISTS kingdom_treasury (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      kingdom_id TEXT NOT NULL REFERENCES kingdoms(id) ON DELETE CASCADE,
      amount INTEGER NOT NULL,
      type TEXT NOT NULL,
      description TEXT DEFAULT '',
      character_id TEXT NOT NULL REFERENCES characters(id),
      created_at INTEGER DEFAULT (unixepoch())
    );

    -- 王國懸賞
    CREATE TABLE IF NOT EXISTS kingdom_bounties (
      id TEXT PRIMARY KEY,
      kingdom_id TEXT NOT NULL REFERENCES kingdoms(id) ON DELETE CASCADE,
      target_id TEXT NOT NULL REFERENCES characters(id),
      reward INTEGER NOT NULL,
      reason TEXT DEFAULT '',
      placed_by TEXT NOT NULL REFERENCES characters(id),
      status TEXT DEFAULT 'active',
      claimed_by TEXT,
      claimed_at INTEGER,
      created_at INTEGER DEFAULT (unixepoch())
    );

    -- 王國戰爭
    CREATE TABLE IF NOT EXISTS kingdom_wars (
      id TEXT PRIMARY KEY,
      attacker_id TEXT NOT NULL REFERENCES kingdoms(id),
      defender_id TEXT NOT NULL REFERENCES kingdoms(id),
      status TEXT DEFAULT 'active',
      started_at INTEGER DEFAULT (unixepoch()),
      ended_at INTEGER,
      gate_hp INTEGER DEFAULT 1000,
      wall_hp INTEGER DEFAULT 2000,
      palace_hp INTEGER DEFAULT 3000,
      winner_id TEXT,
      peace_proposed_by TEXT
    );

    -- 王國外交
    CREATE TABLE IF NOT EXISTS kingdom_diplomacy (
      kingdom_a_id TEXT NOT NULL REFERENCES kingdoms(id),
      kingdom_b_id TEXT NOT NULL REFERENCES kingdoms(id),
      relation_type TEXT DEFAULT 'neutral',
      established_at INTEGER DEFAULT (unixepoch()),
      PRIMARY KEY (kingdom_a_id, kingdom_b_id)
    );

    -- 王國士兵
    CREATE TABLE IF NOT EXISTS kingdom_soldiers (
      kingdom_id TEXT NOT NULL,
      total_count INTEGER DEFAULT 0,
      PRIMARY KEY (kingdom_id)
    );

    -- 王國士兵部署
    CREATE TABLE IF NOT EXISTS kingdom_soldier_deployments (
      kingdom_id TEXT NOT NULL,
      room_id TEXT NOT NULL,
      count INTEGER DEFAULT 0,
      PRIMARY KEY (kingdom_id, room_id)
    );

    -- 攻城參與者
    CREATE TABLE IF NOT EXISTS kingdom_siege_participants (
      war_id TEXT NOT NULL,
      character_id TEXT NOT NULL,
      side TEXT NOT NULL,
      joined_at INTEGER DEFAULT (unixepoch()),
      PRIMARY KEY (war_id, character_id)
    );

    -- 國庫交易紀錄（詳細日誌）
    CREATE TABLE IF NOT EXISTS kingdom_treasury_log (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      kingdom_id TEXT NOT NULL,
      amount INTEGER NOT NULL,
      type TEXT NOT NULL,
      description TEXT DEFAULT '',
      character_id TEXT,
      created_at INTEGER DEFAULT (unixepoch())
    );

    -- 聯盟提案
    CREATE TABLE IF NOT EXISTS kingdom_alliance_proposals (
      id TEXT PRIMARY KEY,
      from_kingdom_id TEXT NOT NULL,
      to_kingdom_id TEXT NOT NULL,
      proposed_by TEXT NOT NULL,
      proposed_at INTEGER DEFAULT (unixepoch()),
      status TEXT DEFAULT 'pending',
      responded_at INTEGER
    );

    -- 貿易提案
    CREATE TABLE IF NOT EXISTS kingdom_trade_proposals (
      id TEXT PRIMARY KEY,
      from_kingdom_id TEXT NOT NULL,
      to_kingdom_id TEXT NOT NULL,
      terms TEXT NOT NULL,
      proposed_by TEXT NOT NULL,
      proposed_at INTEGER DEFAULT (unixepoch()),
      status TEXT DEFAULT 'pending',
      responded_at INTEGER
    );

    -- 外交訊息
    CREATE TABLE IF NOT EXISTS kingdom_diplomatic_messages (
      id TEXT PRIMARY KEY,
      from_kingdom_id TEXT NOT NULL,
      to_kingdom_id TEXT NOT NULL,
      message TEXT NOT NULL,
      sent_by TEXT NOT NULL,
      sent_at INTEGER DEFAULT (unixepoch())
    );

    -- 製作等級
    CREATE TABLE IF NOT EXISTS crafting_levels (
      character_id TEXT NOT NULL REFERENCES characters(id) ON DELETE CASCADE,
      category TEXT NOT NULL,
      level INTEGER DEFAULT 1,
      exp INTEGER DEFAULT 0,
      PRIMARY KEY (character_id, category)
    );

    -- 轉職任務進度
    CREATE TABLE IF NOT EXISTS class_quests (
      character_id TEXT PRIMARY KEY REFERENCES characters(id) ON DELETE CASCADE,
      quest_id TEXT NOT NULL,
      step INTEGER DEFAULT 0,
      progress TEXT DEFAULT '{}',
      started_at INTEGER,
      completed_at INTEGER
    );

    -- 索引
    CREATE INDEX IF NOT EXISTS idx_transactions_user_id ON transactions(user_id);
    CREATE INDEX IF NOT EXISTS idx_characters_user_id ON characters(user_id);
    CREATE INDEX IF NOT EXISTS idx_inventory_character_id ON inventory(character_id);
    CREATE INDEX IF NOT EXISTS idx_learned_skills_character_id ON learned_skills(character_id);
    CREATE INDEX IF NOT EXISTS idx_party_members_character_id ON party_members(character_id);
    CREATE INDEX IF NOT EXISTS idx_leaderboard_type_score ON leaderboard(type, score DESC);
    CREATE INDEX IF NOT EXISTS idx_kingdom_members_character_id ON kingdom_members(character_id);
    CREATE INDEX IF NOT EXISTS idx_kingdom_rooms_kingdom_id ON kingdom_rooms(kingdom_id);
    CREATE INDEX IF NOT EXISTS idx_kingdom_treasury_kingdom_id ON kingdom_treasury(kingdom_id);
    CREATE INDEX IF NOT EXISTS idx_kingdom_bounties_kingdom_id ON kingdom_bounties(kingdom_id);
    CREATE INDEX IF NOT EXISTS idx_kingdom_wars_attacker_id ON kingdom_wars(attacker_id);
    CREATE INDEX IF NOT EXISTS idx_kingdom_wars_defender_id ON kingdom_wars(defender_id);
    CREATE INDEX IF NOT EXISTS idx_kingdom_diplomacy_a ON kingdom_diplomacy(kingdom_a_id);
    CREATE INDEX IF NOT EXISTS idx_kingdom_diplomacy_b ON kingdom_diplomacy(kingdom_b_id);
    CREATE INDEX IF NOT EXISTS idx_kingdom_wars_status ON kingdom_wars(status);
    CREATE INDEX IF NOT EXISTS idx_kingdom_bounties_target ON kingdom_bounties(target_id);
    CREATE INDEX IF NOT EXISTS idx_treasury_log_kingdom ON kingdom_treasury_log(kingdom_id);
    CREATE INDEX IF NOT EXISTS idx_treasury_log_created ON kingdom_treasury_log(kingdom_id, created_at DESC);
    CREATE INDEX IF NOT EXISTS idx_alliance_proposals_to ON kingdom_alliance_proposals(to_kingdom_id, status);
    CREATE INDEX IF NOT EXISTS idx_trade_proposals_to ON kingdom_trade_proposals(to_kingdom_id, status);
    CREATE INDEX IF NOT EXISTS idx_diplo_messages_to ON kingdom_diplomatic_messages(to_kingdom_id);
    CREATE INDEX IF NOT EXISTS idx_daily_quests_character ON daily_quests(character_id);
    CREATE INDEX IF NOT EXISTS idx_quest_progress_character ON quest_progress(character_id, status);
  `);

  // ── Migration: 新增 enhancement_level 欄位 ──
  {
    const invColumns = db.prepare("PRAGMA table_info(inventory)").all() as { name: string }[];
    const invColumnNames = new Set(invColumns.map(c => c.name));
    if (!invColumnNames.has('enhancement_level')) {
      db.exec(`ALTER TABLE inventory ADD COLUMN enhancement_level INTEGER DEFAULT 0`);
      console.log('[DB] Migration: 已新增 enhancement_level 欄位至 inventory 表');
    }
  }

  // ── Migration: 新增 resource 欄位 ──
  // 檢查 characters 表是否已有 resource 欄位
  const columns = db.prepare("PRAGMA table_info(characters)").all() as { name: string }[];
  const columnNames = new Set(columns.map(c => c.name));

  if (!columnNames.has('resource')) {
    db.exec(`
      ALTER TABLE characters ADD COLUMN resource INTEGER DEFAULT 30;
      ALTER TABLE characters ADD COLUMN max_resource INTEGER DEFAULT 30;
      ALTER TABLE characters ADD COLUMN resource_type TEXT DEFAULT 'mp';
    `);

    // 根據 class_id 設定正確的 resourceType / resource / maxResource
    // 劍士系 → rage, 0, 100
    db.exec(`
      UPDATE characters SET resource_type = 'rage', resource = 0, max_resource = 100
      WHERE class_id IN ('swordsman', 'knight', 'berserker', 'sword_saint');
    `);
    // 法師系 → mp, 使用既有 max_mp, max_mp
    db.exec(`
      UPDATE characters SET resource_type = 'mp', resource = max_mp, max_resource = max_mp
      WHERE class_id IN ('mage', 'archmage', 'warlock', 'chronomancer');
    `);
    // 遊俠系 → energy, 100, 100
    db.exec(`
      UPDATE characters SET resource_type = 'energy', resource = 100, max_resource = 100
      WHERE class_id IN ('ranger', 'marksman', 'assassin', 'beast_master');
    `);
    // 祭司系 → faith, 50, 100
    db.exec(`
      UPDATE characters SET resource_type = 'faith', resource = 50, max_resource = 100
      WHERE class_id IN ('priest', 'high_priest', 'druid', 'inquisitor');
    `);
    // 冒險者（預設） → mp, 30, 30
    db.exec(`
      UPDATE characters SET resource_type = 'mp', resource = 30, max_resource = 30
      WHERE class_id = 'adventurer';
    `);

    console.log('[DB] Migration: 已新增 resource, max_resource, resource_type 欄位，並依職業設定初始值');
  }

  // ── Migration: 新增 marked_location 欄位（傳送石標記） ──
  {
    const charColumns = db.prepare("PRAGMA table_info(characters)").all() as { name: string }[];
    const charColumnNames = new Set(charColumns.map(c => c.name));
    if (!charColumnNames.has('marked_location')) {
      db.exec(`ALTER TABLE characters ADD COLUMN marked_location TEXT`);
      console.log('[DB] Migration: 已新增 marked_location 欄位至 characters 表');
    }
  }

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
