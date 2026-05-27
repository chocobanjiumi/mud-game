// 資料庫 CRUD 操作

import { getDb } from './schema.js';
import { nanoid } from 'nanoid';
import type { AffixDef, Character, ClassId, EquipmentSlots, InventoryItem, ItemQuality, RaceId, GenderId, FaithId } from '@game/shared';
import { calculateMaxHp, calculateMaxMp, ITEM_DEFS, createEmptyEquipmentSlots, DEFAULT_RACE_ID, DEFAULT_GENDER_ID, DEFAULT_FAITH_ID, getInitialStatsForRace, RACE_DEFS, FAITH_DEFS, CLASS_DEFS, getLearnableSkills, normalizeGenderId, getStarterItemsForClass, resolveEquipSlotForItem } from '@game/shared';

// ─── Character CRUD ───

/** 建立新角色 */
export interface CreateCharacterOptions {
  raceId?: RaceId;
  genderId?: GenderId;
  faithId?: FaithId;
  classId?: ClassId;
}

export function createCharacter(
  userId: string,
  name: string,
  isAi = false,
  agentId?: string,
  options: CreateCharacterOptions = {},
): Character {
  const db = getDb();
  const id = nanoid();
  const now = Math.floor(Date.now() / 1000);
  const raceId = options.raceId ?? DEFAULT_RACE_ID;
  const genderId = normalizeGenderId(options.genderId);
  const faithId = options.faithId ?? DEFAULT_FAITH_ID;
  const classDef = getInitialClassDef(options.classId);
  const stats = getInitialStatsForRace(raceId);
  stats.str += classDef.baseStatBonus.str;
  stats.int += classDef.baseStatBonus.int;
  stats.dex += classDef.baseStatBonus.dex;
  stats.vit += classDef.baseStatBonus.vit;
  stats.luk += classDef.baseStatBonus.luk;
  const maxHp = calculateMaxHp(1, stats.vit);
  const maxMp = calculateMaxMp(1, stats.int);

  db.prepare(`
    INSERT INTO characters (id, user_id, name, level, exp, class_id, race_id, gender_id, faith_id, faith_favor, hp, mp, max_hp, max_mp,
      resource, max_resource, resource_type,
      str, int_, dex, vit, luk, free_points, gold, room_id, is_ai, agent_id, created_at, last_login)
    VALUES (?, ?, ?, 1, 0, ?, ?, ?, ?, 10, ?, ?, ?, ?,
      ?, ?, ?,
      ?, ?, ?, ?, ?, 0, 100, 'village_square', ?, ?, ?, ?)
  `).run(
    id, userId, name, classDef.id, raceId, genderId, faithId, maxHp, maxMp, maxHp, maxMp,
    classDef.initialResource, classDef.maxResource, classDef.resourceType,
    stats.str, stats.int, stats.dex, stats.vit, stats.luk,
    isAi ? 1 : 0, agentId ?? null, now, now,
  );

  // 給予初始裝備
  for (const item of getStarterItemsForClass(classDef.id)) {
    addInventoryItem(id, item.itemId, item.quantity, item.equipped);
  }

  // 學習初始職業、種族與信仰技能
  for (const skill of getLearnableSkills(classDef.id, 1)) {
    if (!skill.id.startsWith('race_') && !skill.id.startsWith('faith_')) {
      learnSkill(id, skill.id);
    }
  }
  learnSkill(id, RACE_DEFS[raceId].passiveSkillId);
  learnSkill(id, FAITH_DEFS[faithId].passiveSkillId);

  return getCharacterById(id)!;
}

function getInitialClassDef(classId: ClassId | undefined) {
  const classDef = classId ? CLASS_DEFS[classId] : undefined;
  if (classDef?.tier === 1) return classDef;
  return CLASS_DEFS.adventurer;
}

/** 根據 ID 取得角色 */
export function getCharacterById(id: string): Character | null {
  const db = getDb();
  const row = db.prepare('SELECT * FROM characters WHERE id = ?').get(id) as Record<string, unknown> | undefined;
  if (!row) return null;
  return rowToCharacter(row);
}

/** 根據名字取得角色 */
export function getCharacterByName(name: string): Character | null {
  const db = getDb();
  const row = db.prepare('SELECT * FROM characters WHERE name = ?').get(name) as Record<string, unknown> | undefined;
  if (!row) return null;
  return rowToCharacter(row);
}

/** 根據 userId 取得所有角色 */
export function getCharactersByUserId(userId: string): Character[] {
  const db = getDb();
  const rows = db.prepare('SELECT * FROM characters WHERE user_id = ?').all(userId) as Record<string, unknown>[];
  return rows.map(rowToCharacter);
}

/** 儲存角色（全欄位更新） */
export function saveCharacter(char: Character): void {
  const db = getDb();
  db.prepare(`
    UPDATE characters SET
      level = ?, exp = ?, class_id = ?,
      race_id = ?, gender_id = ?, faith_id = ?, faith_favor = ?, faith_cooldown_until = ?,
      hp = ?, mp = ?, max_hp = ?, max_mp = ?,
      resource = ?, max_resource = ?, resource_type = ?,
      str = ?, int_ = ?, dex = ?, vit = ?, luk = ?,
      free_points = ?, gold = ?, room_id = ?,
      marked_location = ?,
      last_login = ?
    WHERE id = ?
  `).run(
    char.level, char.exp, char.classId,
    char.raceId ?? DEFAULT_RACE_ID,
    normalizeGenderId(char.genderId),
    char.faithId ?? DEFAULT_FAITH_ID,
    char.faithFavor ?? 0,
    char.faithCooldownUntil ?? null,
    char.hp, char.mp, char.maxHp, char.maxMp,
    char.resource, char.maxResource, char.resourceType,
    char.stats.str, char.stats.int, char.stats.dex, char.stats.vit, char.stats.luk,
    char.freePoints, char.gold, char.roomId,
    char.markedLocation ?? null,
    Math.floor(Date.now() / 1000),
    char.id,
  );
}

/** 刪除角色 */
export function deleteCharacter(id: string): void {
  const db = getDb();
  db.prepare('DELETE FROM characters WHERE id = ?').run(id);
}

// ─── Character aliases ───

export function getCharacterAliases(characterId: string): Record<string, string> {
  const rows = getDb().prepare(
    'SELECT alias, command FROM character_aliases WHERE character_id = ? ORDER BY alias ASC',
  ).all(characterId) as { alias: string; command: string }[];

  return Object.fromEntries(rows.map(row => [row.alias, row.command]));
}

export function setCharacterAlias(characterId: string, alias: string, command: string): void {
  const now = Math.floor(Date.now() / 1000);
  getDb().prepare(`
    INSERT INTO character_aliases (character_id, alias, command, created_at, updated_at)
    VALUES (?, ?, ?, ?, ?)
    ON CONFLICT(character_id, alias) DO UPDATE SET
      command = excluded.command,
      updated_at = excluded.updated_at
  `).run(characterId, alias, command, now, now);
}

export function deleteCharacterAlias(characterId: string, alias: string): boolean {
  const result = getDb().prepare(
    'DELETE FROM character_aliases WHERE character_id = ? AND alias = ?',
  ).run(characterId, alias);
  return result.changes > 0;
}

export function clearCharacterAliases(characterId: string): void {
  getDb().prepare('DELETE FROM character_aliases WHERE character_id = ?').run(characterId);
}

// ─── Inventory CRUD ───

export interface StoredItemInstance {
  itemInstanceId: string;
  baseItemId: string;
  quality: ItemQuality;
  itemLevel?: number;
  droppedBy?: string;
  droppedInZone?: string;
  sourceTags?: string[];
  affixes?: AffixDef[];
  lockedAffixIndexes?: number[];
  fixedEffects?: string[];
}

/** 新增物品到背包 */
export function addInventoryItem(
  characterId: string,
  itemId: string,
  quantity: number,
  equipped = false,
  itemInstance?: StoredItemInstance,
): void {
  const db = getDb();
  if (itemInstance) {
    upsertItemInstance(itemInstance);
    db.prepare(
      'INSERT INTO inventory (character_id, item_id, item_instance_id, quantity, equipped) VALUES (?, ?, ?, ?, ?)',
    ).run(characterId, itemId, itemInstance.itemInstanceId, quantity, equipped ? 1 : 0);
    return;
  }

  // 檢查是否已有此物品（可堆疊）
  const existing = db.prepare(
    'SELECT id, quantity FROM inventory WHERE character_id = ? AND item_id = ? AND equipped = 0 AND item_instance_id IS NULL',
  ).get(characterId, itemId) as { id: number; quantity: number } | undefined;

  if (existing) {
    db.prepare('UPDATE inventory SET quantity = quantity + ? WHERE id = ?').run(quantity, existing.id);
  } else {
    db.prepare(
      'INSERT INTO inventory (character_id, item_id, quantity, equipped) VALUES (?, ?, ?, ?)',
    ).run(characterId, itemId, quantity, equipped ? 1 : 0);
  }
}

/** 移除背包物品 */
export function removeInventoryItem(characterId: string, itemId: string, quantity: number, itemInstanceId?: string): boolean {
  const db = getDb();
  const existing = db.prepare(
    itemInstanceId
      ? 'SELECT id, quantity FROM inventory WHERE character_id = ? AND item_id = ? AND item_instance_id = ? AND equipped = 0'
      : 'SELECT id, quantity FROM inventory WHERE character_id = ? AND item_id = ? AND equipped = 0 AND item_instance_id IS NULL',
  ).get(...(itemInstanceId ? [characterId, itemId, itemInstanceId] : [characterId, itemId])) as { id: number; quantity: number } | undefined;

  if (!existing || existing.quantity < quantity) return false;

  if (existing.quantity === quantity) {
    db.prepare('DELETE FROM inventory WHERE id = ?').run(existing.id);
  } else {
    db.prepare('UPDATE inventory SET quantity = quantity - ? WHERE id = ?').run(quantity, existing.id);
  }
  return true;
}

/** 取得角色所有背包物品 */
export function getInventory(characterId: string): InventoryItem[] {
  const db = getDb();
  const rows = db.prepare(
    `SELECT i.item_id, i.item_instance_id, i.quantity, i.equipped,
      inst.quality, inst.item_level, inst.dropped_by, inst.dropped_in_zone, inst.source_tags_json,
      inst.affixes_json, inst.locked_affixes_json, inst.fixed_effects_json
     FROM inventory i
     LEFT JOIN item_instances inst ON inst.id = i.item_instance_id
     WHERE i.character_id = ?`,
  ).all(characterId) as {
    item_id: string;
    item_instance_id: string | null;
    quantity: number;
    equipped: number;
    quality: ItemQuality | null;
    item_level: number | null;
    dropped_by: string | null;
    dropped_in_zone: string | null;
    source_tags_json: string | null;
    affixes_json: string | null;
    locked_affixes_json: string | null;
    fixed_effects_json: string | null;
  }[];

  return rows.map((r) => ({
    itemId: r.item_id,
    itemInstanceId: r.item_instance_id ?? undefined,
    quantity: r.quantity,
    equipped: r.equipped === 1,
    quality: r.quality ?? undefined,
    itemLevel: r.item_level ?? undefined,
    droppedBy: r.dropped_by ?? undefined,
    droppedInZone: r.dropped_in_zone ?? undefined,
    sourceTags: parseJsonArray<string>(r.source_tags_json),
    affixes: parseJsonArray<AffixDef>(r.affixes_json),
    lockedAffixIndexes: parseJsonArray<number>(r.locked_affixes_json),
    fixedEffects: parseJsonArray<string>(r.fixed_effects_json),
  }));
}

/** 裝備/卸下物品 */
export function setEquipped(characterId: string, itemId: string, equipped: boolean, itemInstanceId?: string): boolean {
  const db = getDb();
  const result = db.prepare(
    itemInstanceId
      ? 'UPDATE inventory SET equipped = ? WHERE character_id = ? AND item_id = ? AND item_instance_id = ?'
      : 'UPDATE inventory SET equipped = ? WHERE character_id = ? AND item_id = ?',
  ).run(...(itemInstanceId ? [equipped ? 1 : 0, characterId, itemId, itemInstanceId] : [equipped ? 1 : 0, characterId, itemId]));
  return result.changes > 0;
}

/** 取得角色已裝備的物品 */
export function getEquippedItems(characterId: string): Pick<InventoryItem, 'itemId' | 'itemInstanceId' | 'quantity' | 'quality' | 'affixes' | 'lockedAffixIndexes' | 'fixedEffects'>[] {
  const db = getDb();
  const rows = db.prepare(
    `SELECT i.item_id, i.item_instance_id, i.quantity,
      inst.quality, inst.item_level, inst.dropped_by, inst.dropped_in_zone, inst.source_tags_json,
      inst.affixes_json, inst.locked_affixes_json, inst.fixed_effects_json
     FROM inventory i
     LEFT JOIN item_instances inst ON inst.id = i.item_instance_id
     WHERE i.character_id = ? AND i.equipped = 1`,
  ).all(characterId) as {
    item_id: string;
    item_instance_id: string | null;
    quantity: number;
    quality: ItemQuality | null;
    item_level: number | null;
    dropped_by: string | null;
    dropped_in_zone: string | null;
    source_tags_json: string | null;
    affixes_json: string | null;
    locked_affixes_json: string | null;
    fixed_effects_json: string | null;
  }[];

  return rows.map((r) => ({
    itemId: r.item_id,
    itemInstanceId: r.item_instance_id ?? undefined,
    quantity: r.quantity,
    quality: r.quality ?? undefined,
    itemLevel: r.item_level ?? undefined,
    droppedBy: r.dropped_by ?? undefined,
    droppedInZone: r.dropped_in_zone ?? undefined,
    sourceTags: parseJsonArray<string>(r.source_tags_json),
    affixes: parseJsonArray<AffixDef>(r.affixes_json),
    lockedAffixIndexes: parseJsonArray<number>(r.locked_affixes_json),
    fixedEffects: parseJsonArray<string>(r.fixed_effects_json),
  }));
}

export function upsertItemInstance(instance: StoredItemInstance): void {
  getDb().prepare(
    `INSERT OR REPLACE INTO item_instances
      (id, base_item_id, quality, item_level, dropped_by, dropped_in_zone, source_tags_json, affixes_json, locked_affixes_json, fixed_effects_json)
     VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
  ).run(
    instance.itemInstanceId,
    instance.baseItemId,
    instance.quality,
    instance.itemLevel ?? 1,
    instance.droppedBy ?? null,
    instance.droppedInZone ?? null,
    JSON.stringify(instance.sourceTags ?? []),
    JSON.stringify(instance.affixes ?? []),
    JSON.stringify(normalizeLockedAffixes(instance.lockedAffixIndexes)),
    JSON.stringify(instance.fixedEffects ?? []),
  );
}

export function getStoredItemInstance(itemInstanceId: string): StoredItemInstance | undefined {
  const row = getDb().prepare(
    'SELECT id, base_item_id, quality, item_level, dropped_by, dropped_in_zone, source_tags_json, affixes_json, locked_affixes_json, fixed_effects_json FROM item_instances WHERE id = ?',
  ).get(itemInstanceId) as {
    id: string;
    base_item_id: string;
    quality: ItemQuality;
    item_level: number | null;
    dropped_by: string | null;
    dropped_in_zone: string | null;
    source_tags_json: string | null;
    affixes_json: string | null;
    locked_affixes_json: string | null;
    fixed_effects_json: string | null;
  } | undefined;

  if (!row) return undefined;
  return {
    itemInstanceId: row.id,
    baseItemId: row.base_item_id,
    quality: row.quality,
    itemLevel: row.item_level ?? undefined,
    droppedBy: row.dropped_by ?? undefined,
    droppedInZone: row.dropped_in_zone ?? undefined,
    sourceTags: parseJsonArray<string>(row.source_tags_json),
    affixes: parseJsonArray<AffixDef>(row.affixes_json),
    lockedAffixIndexes: parseJsonArray<number>(row.locked_affixes_json),
    fixedEffects: parseJsonArray<string>(row.fixed_effects_json),
  };
}

function normalizeLockedAffixes(indexes: number[] | undefined): number[] {
  if (!indexes) return [];
  return [...new Set(indexes)]
    .filter(index => Number.isInteger(index) && index >= 0)
    .sort((a, b) => a - b);
}

function parseJsonArray<T>(value: string | null): T[] | undefined {
  if (!value) return undefined;
  try {
    const parsed = JSON.parse(value);
    return Array.isArray(parsed) && parsed.length > 0 ? parsed as T[] : undefined;
  } catch {
    return undefined;
  }
}

// ─── Skills CRUD ───

/** 學習技能 */
export function learnSkill(characterId: string, skillId: string): void {
  const db = getDb();
  db.prepare(`
    INSERT OR IGNORE INTO learned_skills (character_id, skill_id, level)
    VALUES (?, ?, 1)
  `).run(characterId, skillId);
}

/** 遺忘技能 */
export function forgetSkill(characterId: string, skillId: string): void {
  const db = getDb();
  db.prepare('DELETE FROM learned_skills WHERE character_id = ? AND skill_id = ?').run(characterId, skillId);
}

/** 取得角色已學會的技能 */
export function getLearnedSkills(characterId: string): { skillId: string; level: number }[] {
  const db = getDb();
  const rows = db.prepare(
    'SELECT skill_id, level FROM learned_skills WHERE character_id = ?',
  ).all(characterId) as { skill_id: string; level: number }[];

  return rows.map((r) => ({ skillId: r.skill_id, level: r.level }));
}

/** 升級技能 */
export function upgradeSkill(characterId: string, skillId: string): boolean {
  const db = getDb();
  const result = db.prepare(
    'UPDATE learned_skills SET level = level + 1 WHERE character_id = ? AND skill_id = ?',
  ).run(characterId, skillId);
  return result.changes > 0;
}

// ─── World Unlocks CRUD ───

export function unlockZone(characterId: string, zoneId: string, source = 'system'): void {
  getDb().prepare(`
    INSERT OR IGNORE INTO character_zone_unlocks (character_id, zone_id, source)
    VALUES (?, ?, ?)
  `).run(characterId, zoneId, source);
}

export function isZoneUnlocked(characterId: string, zoneId: string): boolean {
  const row = getDb().prepare(
    'SELECT 1 FROM character_zone_unlocks WHERE character_id = ? AND zone_id = ?',
  ).get(characterId, zoneId);
  return !!row;
}

export function getUnlockedZones(characterId: string): string[] {
  const rows = getDb().prepare(
    'SELECT zone_id FROM character_zone_unlocks WHERE character_id = ? ORDER BY unlocked_at ASC',
  ).all(characterId) as { zone_id: string }[];
  return rows.map(row => row.zone_id);
}

export function unlockPortal(characterId: string, portalId: string, zoneId: string): void {
  getDb().prepare(`
    INSERT OR IGNORE INTO character_portal_unlocks (character_id, portal_id, zone_id)
    VALUES (?, ?, ?)
  `).run(characterId, portalId, zoneId);
}

export function isPortalUnlocked(characterId: string, portalId: string): boolean {
  const row = getDb().prepare(
    'SELECT 1 FROM character_portal_unlocks WHERE character_id = ? AND portal_id = ?',
  ).get(characterId, portalId);
  return !!row;
}

export function getUnlockedPortals(characterId: string): { portalId: string; zoneId: string }[] {
  const rows = getDb().prepare(
    'SELECT portal_id, zone_id FROM character_portal_unlocks WHERE character_id = ? ORDER BY unlocked_at ASC',
  ).all(characterId) as { portal_id: string; zone_id: string }[];
  return rows.map(row => ({ portalId: row.portal_id, zoneId: row.zone_id }));
}

export function isQuestCompleted(characterId: string, questId: string): boolean {
  const row = getDb().prepare(
    "SELECT 1 FROM quest_progress WHERE character_id = ? AND quest_id = ? AND status = 'completed'",
  ).get(characterId, questId);
  return !!row;
}

export function getCompletedQuestIds(characterId: string): string[] {
  const rows = getDb().prepare(
    "SELECT quest_id FROM quest_progress WHERE character_id = ? AND status = 'completed'",
  ).all(characterId) as { quest_id: string }[];
  return rows.map(row => row.quest_id);
}

export function recordDiscovery(
  characterId: string,
  zoneId: string,
  roomId: string,
  discoveryType: string,
  targetId: string,
): void {
  getDb().prepare(`
    INSERT OR IGNORE INTO character_discoveries
      (character_id, zone_id, room_id, discovery_type, target_id)
    VALUES (?, ?, ?, ?, ?)
  `).run(characterId, zoneId, roomId, discoveryType, targetId);
}

export function getDiscoveryCount(characterId: string, zoneId: string, discoveryType?: string): number {
  if (discoveryType) {
    const row = getDb().prepare(`
      SELECT COUNT(*) AS count
      FROM character_discoveries
      WHERE character_id = ? AND zone_id = ? AND discovery_type = ?
    `).get(characterId, zoneId, discoveryType) as { count: number };
    return row.count;
  }

  const row = getDb().prepare(`
    SELECT COUNT(*) AS count
    FROM character_discoveries
    WHERE character_id = ? AND zone_id = ?
  `).get(characterId, zoneId) as { count: number };
  return row.count;
}

export function getDiscoveryTotalCount(characterId: string, discoveryType?: string): number {
  if (discoveryType) {
    const row = getDb().prepare(`
      SELECT COUNT(*) AS count
      FROM character_discoveries
      WHERE character_id = ? AND discovery_type = ?
    `).get(characterId, discoveryType) as { count: number };
    return row.count;
  }

  const row = getDb().prepare(`
    SELECT COUNT(*) AS count
    FROM character_discoveries
    WHERE character_id = ?
  `).get(characterId) as { count: number };
  return row.count;
}

export function hasDiscovery(characterId: string, discoveryType: string, targetId: string): boolean {
  const row = getDb().prepare(
    'SELECT 1 FROM character_discoveries WHERE character_id = ? AND discovery_type = ? AND target_id = ?',
  ).get(characterId, discoveryType, targetId);
  return !!row;
}

export const PERMANENT_GROUND_ITEM_PICKUP = -1;

export function getGroundItemRespawnAt(roomId: string, itemId: string): number | null {
  const row = getDb().prepare(
    'SELECT respawn_at_ms FROM ground_item_pickups WHERE room_id = ? AND item_id = ?',
  ).get(roomId, itemId) as { respawn_at_ms: number } | undefined;
  return row?.respawn_at_ms ?? null;
}

export function setGroundItemRespawnAt(roomId: string, itemId: string, respawnAtMs: number): void {
  getDb().prepare(`
    INSERT INTO ground_item_pickups (room_id, item_id, respawn_at_ms, picked_at_ms)
    VALUES (?, ?, ?, ?)
    ON CONFLICT(room_id, item_id) DO UPDATE SET
      respawn_at_ms = excluded.respawn_at_ms,
      picked_at_ms = excluded.picked_at_ms
  `).run(roomId, itemId, respawnAtMs, Date.now());
}

export function clearGroundItemPickup(roomId: string, itemId: string): void {
  getDb().prepare(
    'DELETE FROM ground_item_pickups WHERE room_id = ? AND item_id = ?',
  ).run(roomId, itemId);
}

// ─── Helpers ───

/** 將資料庫列轉為 Character 物件 */
function rowToCharacter(row: Record<string, unknown>): Character {
  // 取得裝備
  const equipped = getEquippedItems(row.id as string);
  const equipment: EquipmentSlots = createEmptyEquipmentSlots();

  for (const item of equipped) {
    const def = ITEM_DEFS[item.itemId];
    const slot = resolveEquipSlotForItem(def);
    if (slot && slot in equipment) {
      (equipment as unknown as Record<string, string | null>)[slot] = item.itemId;
    }
    if (def?.equipSlot === 'weapon') equipment.weapon = item.itemId;
    if (def?.equipSlot === 'offhand') equipment.offhand = item.itemId;
  }

  return {
    id: row.id as string,
    userId: row.user_id as string,
    name: row.name as string,
    level: row.level as number,
    exp: row.exp as number,
    classId: row.class_id as ClassId,
    raceId: (row.race_id as import('@game/shared').RaceId) ?? DEFAULT_RACE_ID,
    genderId: normalizeGenderId(row.gender_id),
    faithId: (row.faith_id as import('@game/shared').FaithId) ?? DEFAULT_FAITH_ID,
    faithFavor: (row.faith_favor as number) ?? 0,
    faithCooldownUntil: (row.faith_cooldown_until as number) ?? undefined,
    hp: row.hp as number,
    mp: row.mp as number,
    maxHp: row.max_hp as number,
    maxMp: row.max_mp as number,
    resource: (row.resource as number) ?? 30,
    maxResource: (row.max_resource as number) ?? 30,
    resourceType: normalizeResourceType(row.resource_type),
    stats: {
      str: row.str as number,
      int: row.int_ as number,
      dex: row.dex as number,
      vit: row.vit as number,
      luk: row.luk as number,
    },
    freePoints: row.free_points as number,
    gold: row.gold as number,
    roomId: row.room_id as string,
    isAi: (row.is_ai as number) === 1,
    agentId: row.agent_id as string | undefined,
    markedLocation: (row.marked_location as string) ?? undefined,
    equipment,
    createdAt: row.created_at as number,
    lastLogin: row.last_login as number,
  };
}

function normalizeResourceType(value: unknown): import('@game/shared').ResourceType {
  if (value === 'energy') return 'focus';
  if (value === 'rage' || value === 'focus' || value === 'faith' || value === 'mp') return value;
  return 'mp';
}

// ─── Transactions CRUD ───

/** 新增交易紀錄 */
export function insertTransaction(
  transactionId: string,
  userId: string,
  amount: number,
  type: string,
  description: string,
): void {
  getDb().prepare(
    'INSERT INTO transactions (transaction_id, user_id, amount, type, description, timestamp) VALUES (?, ?, ?, ?, ?, ?)',
  ).run(transactionId, userId, amount, type, description, Date.now());
}

/** 取得使用者的交易紀錄 */
export function getTransactions(
  userId: string,
  limit: number = 20,
): { transaction_id: string; user_id: string; amount: number; type: string; description: string; timestamp: number }[] {
  return getDb().prepare(
    'SELECT transaction_id, user_id, amount, type, description, timestamp FROM transactions WHERE user_id = ? ORDER BY timestamp DESC LIMIT ?',
  ).all(userId, limit) as { transaction_id: string; user_id: string; amount: number; type: string; description: string; timestamp: number }[];
}

// ─── User Entitlements CRUD ───

/** 檢查 user 是否已擁有某 premium 商品 */
export function hasUserEntitlement(userId: string, itemId: string): boolean {
  const row = getDb().prepare(
    'SELECT 1 FROM user_entitlements WHERE user_id = ? AND item_id = ?',
  ).get(userId, itemId);
  return !!row;
}

/** 新增 user-level premium 商品權益 */
export function addUserEntitlement(userId: string, itemId: string): void {
  getDb().prepare(
    'INSERT OR IGNORE INTO user_entitlements (user_id, item_id) VALUES (?, ?)',
  ).run(userId, itemId);
}

// ─── Kingdom CRUD ───

/** 建立王國 */
export function createKingdom(id: string, name: string, description: string, kingId: string): void {
  getDb().prepare(`
    INSERT INTO kingdoms (id, name, description, king_id)
    VALUES (?, ?, ?, ?)
  `).run(id, name, description, kingId);
}

/** 根據 ID 取得王國 */
export function getKingdomById(id: string): {
  id: string; name: string; description: string; king_id: string;
  created_at: number; treasury_gold: number; tax_rate: number; motto: string;
} | undefined {
  return getDb().prepare('SELECT * FROM kingdoms WHERE id = ?').get(id) as any;
}

/** 根據名稱取得王國 */
export function getKingdomByName(name: string): {
  id: string; name: string; description: string; king_id: string;
  created_at: number; treasury_gold: number; tax_rate: number; motto: string;
} | undefined {
  return getDb().prepare('SELECT * FROM kingdoms WHERE name = ?').get(name) as any;
}

/** 取得所有王國列表 */
export function getAllKingdoms(): {
  id: string; name: string; description: string; king_id: string;
  created_at: number; treasury_gold: number; tax_rate: number; motto: string;
}[] {
  return getDb().prepare('SELECT * FROM kingdoms ORDER BY created_at DESC').all() as any[];
}

/** 更新王國資訊 */
export function updateKingdom(id: string, fields: {
  name?: string; description?: string; king_id?: string;
  treasury_gold?: number; tax_rate?: number; motto?: string;
}): void {
  const sets: string[] = [];
  const values: unknown[] = [];
  if (fields.name !== undefined) { sets.push('name = ?'); values.push(fields.name); }
  if (fields.description !== undefined) { sets.push('description = ?'); values.push(fields.description); }
  if (fields.king_id !== undefined) { sets.push('king_id = ?'); values.push(fields.king_id); }
  if (fields.treasury_gold !== undefined) { sets.push('treasury_gold = ?'); values.push(fields.treasury_gold); }
  if (fields.tax_rate !== undefined) { sets.push('tax_rate = ?'); values.push(fields.tax_rate); }
  if (fields.motto !== undefined) { sets.push('motto = ?'); values.push(fields.motto); }
  if (sets.length === 0) return;
  values.push(id);
  getDb().prepare(`UPDATE kingdoms SET ${sets.join(', ')} WHERE id = ?`).run(...values);
}

/** 刪除王國 */
export function deleteKingdom(id: string): void {
  getDb().prepare('DELETE FROM kingdoms WHERE id = ?').run(id);
}

/** 新增王國成員 */
export function addKingdomMember(kingdomId: string, characterId: string, rank: string = 'citizen'): void {
  getDb().prepare(`
    INSERT INTO kingdom_members (kingdom_id, character_id, rank)
    VALUES (?, ?, ?)
  `).run(kingdomId, characterId, rank);
}

/** 移除王國成員 */
export function removeKingdomMember(kingdomId: string, characterId: string): void {
  getDb().prepare('DELETE FROM kingdom_members WHERE kingdom_id = ? AND character_id = ?').run(kingdomId, characterId);
}

/** 更新成員官職 */
export function updateKingdomMemberRank(kingdomId: string, characterId: string, rank: string): void {
  getDb().prepare('UPDATE kingdom_members SET rank = ? WHERE kingdom_id = ? AND character_id = ?').run(rank, kingdomId, characterId);
}

/** 取得王國所有成員 */
export function getKingdomMembers(kingdomId: string): {
  kingdom_id: string; character_id: string; rank: string; joined_at: number;
}[] {
  return getDb().prepare('SELECT * FROM kingdom_members WHERE kingdom_id = ?').all(kingdomId) as any[];
}

/** 取得角色所屬王國 */
export function getMemberKingdom(characterId: string): {
  kingdom_id: string; character_id: string; rank: string; joined_at: number;
} | undefined {
  return getDb().prepare('SELECT * FROM kingdom_members WHERE character_id = ?').get(characterId) as any;
}

/** 取得王國成員的官職 */
export function getKingdomMemberRank(kingdomId: string, characterId: string): string | undefined {
  const row = getDb().prepare(
    'SELECT rank FROM kingdom_members WHERE kingdom_id = ? AND character_id = ?'
  ).get(kingdomId, characterId) as { rank: string } | undefined;
  return row?.rank;
}

// ─── Kingdom Rooms CRUD ───

/** 新增王國房間 */
export function addKingdomRoom(kingdomId: string, roomId: string, roomType: string, builtBy: string): void {
  getDb().prepare(`
    INSERT INTO kingdom_rooms (kingdom_id, room_id, room_type, built_by)
    VALUES (?, ?, ?, ?)
  `).run(kingdomId, roomId, roomType, builtBy);
}

/** 移除王國房間 */
export function removeKingdomRoom(kingdomId: string, roomId: string): void {
  getDb().prepare('DELETE FROM kingdom_rooms WHERE kingdom_id = ? AND room_id = ?').run(kingdomId, roomId);
}

/** 更新王國房間類型 */
export function updateKingdomRoomType(kingdomId: string, roomId: string, roomType: string): void {
  getDb().prepare('UPDATE kingdom_rooms SET room_type = ? WHERE kingdom_id = ? AND room_id = ?').run(roomType, kingdomId, roomId);
}

/** 取得王國所有房間 */
export function getKingdomRooms(kingdomId: string): {
  kingdom_id: string; room_id: string; room_type: string; built_by: string; built_at: number;
}[] {
  return getDb().prepare('SELECT * FROM kingdom_rooms WHERE kingdom_id = ?').all(kingdomId) as any[];
}

/** 取得房間所屬的王國 */
export function getKingdomByRoomId(roomId: string): {
  kingdom_id: string; room_id: string; room_type: string; built_by: string; built_at: number;
} | undefined {
  return getDb().prepare('SELECT * FROM kingdom_rooms WHERE room_id = ?').get(roomId) as any;
}

// ─── Kingdom Treasury CRUD ───

/** 新增國庫交易紀錄 */
export function addTreasuryRecord(kingdomId: string, amount: number, type: string, description: string, characterId: string): void {
  getDb().prepare(`
    INSERT INTO kingdom_treasury (kingdom_id, amount, type, description, character_id)
    VALUES (?, ?, ?, ?, ?)
  `).run(kingdomId, amount, type, description, characterId);
}

/** 取得國庫交易紀錄 */
export function getTreasuryRecords(kingdomId: string, limit: number = 20): {
  id: number; kingdom_id: string; amount: number; type: string;
  description: string; character_id: string; created_at: number;
}[] {
  return getDb().prepare(
    'SELECT * FROM kingdom_treasury WHERE kingdom_id = ? ORDER BY created_at DESC LIMIT ?'
  ).all(kingdomId, limit) as any[];
}

// ─── Kingdom Bounties CRUD ───

/** 新增懸賞 */
export function addKingdomBounty(id: string, kingdomId: string, targetId: string, reward: number, reason: string, placedBy: string): void {
  getDb().prepare(`
    INSERT INTO kingdom_bounties (id, kingdom_id, target_id, reward, reason, placed_by)
    VALUES (?, ?, ?, ?, ?, ?)
  `).run(id, kingdomId, targetId, reward, reason, placedBy);
}

/** 取得王國懸賞列表 */
export function getKingdomBounties(kingdomId: string, status: string = 'active'): {
  id: string; kingdom_id: string; target_id: string; reward: number;
  reason: string; placed_by: string; status: string; claimed_by: string | null;
  claimed_at: number | null; created_at: number;
}[] {
  return getDb().prepare(
    'SELECT * FROM kingdom_bounties WHERE kingdom_id = ? AND status = ? ORDER BY created_at DESC'
  ).all(kingdomId, status) as any[];
}

/** 更新懸賞狀態 */
export function updateBountyStatus(bountyId: string, status: string): void {
  getDb().prepare('UPDATE kingdom_bounties SET status = ? WHERE id = ?').run(status, bountyId);
}

// ─── Kingdom Wars CRUD ───

/** 新增戰爭 */
export function createKingdomWar(id: string, attackerId: string, defenderId: string): void {
  getDb().prepare(`
    INSERT INTO kingdom_wars (id, attacker_id, defender_id)
    VALUES (?, ?, ?)
  `).run(id, attackerId, defenderId);
}

/** 取得進行中的戰爭 */
export function getActiveWars(kingdomId: string): {
  id: string; attacker_id: string; defender_id: string; status: string;
  started_at: number; ended_at: number | null;
  gate_hp: number; wall_hp: number; palace_hp: number;
  winner_id: string | null;
}[] {
  return getDb().prepare(
    "SELECT * FROM kingdom_wars WHERE (attacker_id = ? OR defender_id = ?) AND status = 'active'"
  ).all(kingdomId, kingdomId) as any[];
}

/** 更新戰爭狀態 */
export function updateWarStatus(warId: string, status: string): void {
  const endedAt = status !== 'active' ? Math.floor(Date.now() / 1000) : null;
  getDb().prepare('UPDATE kingdom_wars SET status = ?, ended_at = ? WHERE id = ?').run(status, endedAt, warId);
}

/** 更新戰爭建築 HP */
export function updateWarBuildingHp(warId: string, gateHp: number, wallHp: number, palaceHp: number): void {
  getDb().prepare('UPDATE kingdom_wars SET gate_hp = ?, wall_hp = ?, palace_hp = ? WHERE id = ?').run(gateHp, wallHp, palaceHp, warId);
}

// ─── Kingdom Diplomacy CRUD ───

/** 建立外交關係 */
export function setDiplomacy(kingdomAId: string, kingdomBId: string, relationType: string): void {
  // 先刪除既有關係
  getDb().prepare(
    'DELETE FROM kingdom_diplomacy WHERE (kingdom_a_id = ? AND kingdom_b_id = ?) OR (kingdom_a_id = ? AND kingdom_b_id = ?)'
  ).run(kingdomAId, kingdomBId, kingdomBId, kingdomAId);
  getDb().prepare(`
    INSERT INTO kingdom_diplomacy (kingdom_a_id, kingdom_b_id, relation_type)
    VALUES (?, ?, ?)
  `).run(kingdomAId, kingdomBId, relationType);
}

/** 取得兩國外交關係 */
export function getDiplomacy(kingdomAId: string, kingdomBId: string): {
  kingdom_a_id: string; kingdom_b_id: string;
  relation_type: string; established_at: number;
} | undefined {
  return getDb().prepare(
    'SELECT * FROM kingdom_diplomacy WHERE (kingdom_a_id = ? AND kingdom_b_id = ?) OR (kingdom_a_id = ? AND kingdom_b_id = ?)'
  ).get(kingdomAId, kingdomBId, kingdomBId, kingdomAId) as any;
}

/** 取得王國的所有外交關係 */
export function getKingdomDiplomacies(kingdomId: string): {
  kingdom_a_id: string; kingdom_b_id: string;
  relation_type: string; established_at: number;
}[] {
  return getDb().prepare(
    'SELECT * FROM kingdom_diplomacy WHERE kingdom_a_id = ? OR kingdom_b_id = ?'
  ).all(kingdomId, kingdomId) as any[];
}

// ─── Helpers ───

/** 簡易推斷裝備欄位（根據物品 ID 中的關鍵字，或查 ITEM_DEFS） */
function guessEquipSlot(itemId: string): string | null {
  // 優先從 ITEM_DEFS 查詢
  const def = ITEM_DEFS[itemId];
  if (def?.equipSlot) return def.equipSlot;

  if (itemId.includes('sword') || itemId.includes('staff') || itemId.includes('bow') ||
      itemId.includes('wand') || itemId.includes('scepter') || itemId.includes('blade') ||
      itemId.includes('mace') || itemId.includes('rod') ||
      itemId.includes('spear') || itemId.includes('greataxe') || itemId.includes('katana') ||
      itemId.includes('grimoire') || itemId.includes('hourglass') ||
      itemId.includes('crossbow') || itemId.includes('whip') ||
      itemId.includes('holy_tome') || itemId.includes('warhammer')) {
    return 'weapon';
  }
  if (itemId.includes('shield')) return 'offhand';
  if (itemId.includes('helm') || itemId.includes('hat') || itemId.includes('cap')) return 'head';
  if (itemId.includes('armor') || itemId.includes('mail') || itemId.includes('robe') ||
      itemId.includes('vest') || itemId.includes('garb') || itemId.includes('plate')) {
    return 'body';
  }
  if (itemId.includes('glove') || itemId.includes('gauntlet')) return 'hands';
  if (itemId.includes('boot') || itemId.includes('greave') || itemId.includes('sandal')) return 'feet';
  if (itemId.includes('ring')) return 'ring';
  if (itemId.includes('earring')) return 'earring';
  if (itemId.includes('belt')) return 'belt';
  if (itemId.includes('saddle')) return 'saddle';
  if (itemId.includes('necklace') || itemId.includes('pendant') || itemId.includes('amulet') || itemId.includes('charm')) return 'necklace';
  return null;
}
