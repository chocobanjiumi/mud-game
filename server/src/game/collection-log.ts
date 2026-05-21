import { getDb } from '../db/schema.js';

export interface MonsterCodexEntry {
  monsterId: string;
  killCount: number;
  isBoss: boolean;
  firstSeenAt: number;
  lastKilledAt: number;
}

export interface FishCodexEntry {
  fishId: string;
  catchCount: number;
  firstCaughtAt: number;
  lastCaughtAt: number;
}

export function ensureCollectionLogTables(): void {
  getDb().exec(`
    CREATE TABLE IF NOT EXISTS character_monster_codex (
      character_id TEXT NOT NULL REFERENCES characters(id) ON DELETE CASCADE,
      monster_id TEXT NOT NULL,
      kill_count INTEGER NOT NULL DEFAULT 0,
      is_boss INTEGER NOT NULL DEFAULT 0,
      first_seen_at INTEGER DEFAULT (unixepoch()),
      last_killed_at INTEGER DEFAULT (unixepoch()),
      PRIMARY KEY (character_id, monster_id)
    );

    CREATE TABLE IF NOT EXISTS character_fish_codex (
      character_id TEXT NOT NULL REFERENCES characters(id) ON DELETE CASCADE,
      fish_id TEXT NOT NULL,
      catch_count INTEGER NOT NULL DEFAULT 0,
      first_caught_at INTEGER DEFAULT (unixepoch()),
      last_caught_at INTEGER DEFAULT (unixepoch()),
      PRIMARY KEY (character_id, fish_id)
    );

    CREATE INDEX IF NOT EXISTS idx_monster_codex_character ON character_monster_codex(character_id);
    CREATE INDEX IF NOT EXISTS idx_fish_codex_character ON character_fish_codex(character_id);
  `);
}

export function recordMonsterCodexKill(characterId: string, monsterId: string, isBoss: boolean): void {
  getDb().prepare(`
    INSERT INTO character_monster_codex (character_id, monster_id, kill_count, is_boss)
    VALUES (?, ?, 1, ?)
    ON CONFLICT(character_id, monster_id) DO UPDATE SET
      kill_count = kill_count + 1,
      is_boss = MAX(is_boss, excluded.is_boss),
      last_killed_at = unixepoch()
  `).run(characterId, monsterId, isBoss ? 1 : 0);
}

export function getMonsterCodex(characterId: string): MonsterCodexEntry[] {
  const rows = getDb().prepare(`
    SELECT monster_id, kill_count, is_boss, first_seen_at, last_killed_at
    FROM character_monster_codex
    WHERE character_id = ?
    ORDER BY kill_count DESC, monster_id ASC
  `).all(characterId) as {
    monster_id: string;
    kill_count: number;
    is_boss: number;
    first_seen_at: number;
    last_killed_at: number;
  }[];

  return rows.map(row => ({
    monsterId: row.monster_id,
    killCount: row.kill_count,
    isBoss: row.is_boss === 1,
    firstSeenAt: row.first_seen_at,
    lastKilledAt: row.last_killed_at,
  }));
}

export function getBossKillCount(characterId: string): number {
  const row = getDb().prepare(`
    SELECT COALESCE(SUM(kill_count), 0) AS count
    FROM character_monster_codex
    WHERE character_id = ? AND is_boss = 1
  `).get(characterId) as { count: number };
  return row.count;
}

export function recordFishCodexCatch(characterId: string, fishId: string): number {
  getDb().prepare(`
    INSERT INTO character_fish_codex (character_id, fish_id, catch_count)
    VALUES (?, ?, 1)
    ON CONFLICT(character_id, fish_id) DO UPDATE SET
      catch_count = catch_count + 1,
      last_caught_at = unixepoch()
  `).run(characterId, fishId);
  return getFishCodex(characterId).length;
}

export function getFishCodex(characterId: string): FishCodexEntry[] {
  const rows = getDb().prepare(`
    SELECT fish_id, catch_count, first_caught_at, last_caught_at
    FROM character_fish_codex
    WHERE character_id = ?
    ORDER BY first_caught_at ASC, fish_id ASC
  `).all(characterId) as {
    fish_id: string;
    catch_count: number;
    first_caught_at: number;
    last_caught_at: number;
  }[];

  return rows.map(row => ({
    fishId: row.fish_id,
    catchCount: row.catch_count,
    firstCaughtAt: row.first_caught_at,
    lastCaughtAt: row.last_caught_at,
  }));
}
