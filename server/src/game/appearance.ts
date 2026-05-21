import { getDb } from '../db/schema.js';

export type AppearanceSlot = 'portrait' | 'aura' | 'title_frame';

export interface AppearanceDef {
  id: string;
  name: string;
  slot: AppearanceSlot;
  description: string;
  source: string;
}

export interface AppearanceEntry extends AppearanceDef {
  unlocked: boolean;
  equipped: boolean;
}

export const APPEARANCE_DEFS: Record<string, AppearanceDef> = {
  portrait_adventurer: {
    id: 'portrait_adventurer',
    name: '冒險者肖像',
    slot: 'portrait',
    description: '冒險者公會發放的標準肖像。',
    source: 'default',
  },
  aura_boss_slayer: {
    id: 'aura_boss_slayer',
    name: '首領獵手光暈',
    slot: 'aura',
    description: '擊敗 Boss 後可解鎖的戰鬥光暈。',
    source: 'boss_kill',
  },
  title_frame_cartographer: {
    id: 'title_frame_cartographer',
    name: '製圖師稱號框',
    slot: 'title_frame',
    description: '完成區域探索後可解鎖的稱號框。',
    source: 'exploration',
  },
  aura_world_boss: {
    id: 'aura_world_boss',
    name: '世界 Boss 餘燼',
    slot: 'aura',
    description: '參與世界 Boss 事件後留下的外觀特效。',
    source: 'world_boss',
  },
  portrait_pet_keeper: {
    id: 'portrait_pet_keeper',
    name: '馴獸者肖像',
    slot: 'portrait',
    description: '收集寵物後可使用的肖像。',
    source: 'pet_collection',
  },
};

export function ensureAppearanceTables(): void {
  getDb().exec(`
    CREATE TABLE IF NOT EXISTS character_appearances (
      character_id TEXT NOT NULL REFERENCES characters(id) ON DELETE CASCADE,
      appearance_id TEXT NOT NULL,
      unlocked_at INTEGER DEFAULT (unixepoch()),
      PRIMARY KEY (character_id, appearance_id)
    );

    CREATE TABLE IF NOT EXISTS character_appearance_loadout (
      character_id TEXT PRIMARY KEY REFERENCES characters(id) ON DELETE CASCADE,
      portrait_id TEXT,
      aura_id TEXT,
      title_frame_id TEXT,
      updated_at INTEGER DEFAULT (unixepoch())
    );
  `);
}

export function unlockAppearance(characterId: string, appearanceId: string): boolean {
  const def = APPEARANCE_DEFS[appearanceId];
  if (!def) return false;

  const result = getDb().prepare(`
    INSERT OR IGNORE INTO character_appearances (character_id, appearance_id)
    VALUES (?, ?)
  `).run(characterId, appearanceId);
  return result.changes > 0;
}

export function ensureDefaultAppearance(characterId: string): void {
  unlockAppearance(characterId, 'portrait_adventurer');
}

export function getAppearanceCollection(characterId: string): AppearanceEntry[] {
  ensureDefaultAppearance(characterId);
  const unlockedRows = getDb().prepare(`
    SELECT appearance_id FROM character_appearances WHERE character_id = ?
  `).all(characterId) as { appearance_id: string }[];
  const unlocked = new Set(unlockedRows.map(row => row.appearance_id));
  const equipped = getEquippedAppearance(characterId);

  return Object.values(APPEARANCE_DEFS).map(def => ({
    ...def,
    unlocked: unlocked.has(def.id),
    equipped: equipped[def.slot] === def.id,
  }));
}

export function equipAppearance(characterId: string, appearanceId: string): { ok: boolean; message: string } {
  ensureDefaultAppearance(characterId);
  const def = APPEARANCE_DEFS[appearanceId];
  if (!def) return { ok: false, message: '外觀不存在。' };

  const unlocked = getDb().prepare(`
    SELECT 1 FROM character_appearances WHERE character_id = ? AND appearance_id = ?
  `).get(characterId, appearanceId);
  if (!unlocked) return { ok: false, message: `尚未解鎖外觀「${def.name}」。` };

  const columnBySlot: Record<AppearanceSlot, string> = {
    portrait: 'portrait_id',
    aura: 'aura_id',
    title_frame: 'title_frame_id',
  };
  const column = columnBySlot[def.slot];

  getDb().prepare(`
    INSERT INTO character_appearance_loadout (character_id, ${column})
    VALUES (?, ?)
    ON CONFLICT(character_id) DO UPDATE SET
      ${column} = excluded.${column},
      updated_at = unixepoch()
  `).run(characterId, appearanceId);

  return { ok: true, message: `已裝備外觀「${def.name}」。` };
}

export function getEquippedAppearance(characterId: string): Record<AppearanceSlot, string | null> {
  const row = getDb().prepare(`
    SELECT portrait_id, aura_id, title_frame_id
    FROM character_appearance_loadout
    WHERE character_id = ?
  `).get(characterId) as {
    portrait_id: string | null;
    aura_id: string | null;
    title_frame_id: string | null;
  } | undefined;

  return {
    portrait: row?.portrait_id ?? null,
    aura: row?.aura_id ?? null,
    title_frame: row?.title_frame_id ?? null,
  };
}
