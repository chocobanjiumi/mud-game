// 資料庫 CRUD 操作

import { getDb } from './schema.js';
import { nanoid } from 'nanoid';
import type { Character, ClassId, BaseStats, EquipmentSlots } from '@game/shared';
import { STARTER_ITEMS, calculateMaxHp, calculateMaxMp, INITIAL_STATS } from '@game/shared';

// ─── Character CRUD ───

/** 建立新角色 */
export function createCharacter(userId: string, name: string, isAi = false, agentId?: string): Character {
  const db = getDb();
  const id = nanoid();
  const now = Math.floor(Date.now() / 1000);
  const maxHp = calculateMaxHp(1, INITIAL_STATS.vit);
  const maxMp = calculateMaxMp(1, INITIAL_STATS.int);

  db.prepare(`
    INSERT INTO characters (id, user_id, name, level, exp, class_id, hp, mp, max_hp, max_mp,
      str, int_, dex, vit, luk, free_points, gold, room_id, is_ai, agent_id, created_at, last_login)
    VALUES (?, ?, ?, 1, 0, 'adventurer', ?, ?, ?, ?,
      ?, ?, ?, ?, ?, 0, 100, 'village_square', ?, ?, ?, ?)
  `).run(
    id, userId, name, maxHp, maxMp, maxHp, maxMp,
    INITIAL_STATS.str, INITIAL_STATS.int, INITIAL_STATS.dex, INITIAL_STATS.vit, INITIAL_STATS.luk,
    isAi ? 1 : 0, agentId ?? null, now, now,
  );

  // 給予初始裝備
  for (const item of STARTER_ITEMS) {
    addInventoryItem(id, item.itemId, item.quantity, item.equipped);
  }

  // 學習初始技能 (揮砍)
  learnSkill(id, 'slash');

  return getCharacterById(id)!;
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
      hp = ?, mp = ?, max_hp = ?, max_mp = ?,
      resource = ?, max_resource = ?, resource_type = ?,
      str = ?, int_ = ?, dex = ?, vit = ?, luk = ?,
      free_points = ?, gold = ?, room_id = ?,
      last_login = ?
    WHERE id = ?
  `).run(
    char.level, char.exp, char.classId,
    char.hp, char.mp, char.maxHp, char.maxMp,
    char.resource, char.maxResource, char.resourceType,
    char.stats.str, char.stats.int, char.stats.dex, char.stats.vit, char.stats.luk,
    char.freePoints, char.gold, char.roomId,
    Math.floor(Date.now() / 1000),
    char.id,
  );
}

/** 刪除角色 */
export function deleteCharacter(id: string): void {
  const db = getDb();
  db.prepare('DELETE FROM characters WHERE id = ?').run(id);
}

// ─── Inventory CRUD ───

/** 新增物品到背包 */
export function addInventoryItem(characterId: string, itemId: string, quantity: number, equipped = false): void {
  const db = getDb();

  // 檢查是否已有此物品（可堆疊）
  const existing = db.prepare(
    'SELECT id, quantity FROM inventory WHERE character_id = ? AND item_id = ? AND equipped = 0',
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
export function removeInventoryItem(characterId: string, itemId: string, quantity: number): boolean {
  const db = getDb();
  const existing = db.prepare(
    'SELECT id, quantity FROM inventory WHERE character_id = ? AND item_id = ? AND equipped = 0',
  ).get(characterId, itemId) as { id: number; quantity: number } | undefined;

  if (!existing || existing.quantity < quantity) return false;

  if (existing.quantity === quantity) {
    db.prepare('DELETE FROM inventory WHERE id = ?').run(existing.id);
  } else {
    db.prepare('UPDATE inventory SET quantity = quantity - ? WHERE id = ?').run(quantity, existing.id);
  }
  return true;
}

/** 取得角色所有背包物品 */
export function getInventory(characterId: string): { itemId: string; quantity: number; equipped: boolean }[] {
  const db = getDb();
  const rows = db.prepare(
    'SELECT item_id, quantity, equipped FROM inventory WHERE character_id = ?',
  ).all(characterId) as { item_id: string; quantity: number; equipped: number }[];

  return rows.map((r) => ({
    itemId: r.item_id,
    quantity: r.quantity,
    equipped: r.equipped === 1,
  }));
}

/** 裝備/卸下物品 */
export function setEquipped(characterId: string, itemId: string, equipped: boolean): boolean {
  const db = getDb();
  const result = db.prepare(
    'UPDATE inventory SET equipped = ? WHERE character_id = ? AND item_id = ?',
  ).run(equipped ? 1 : 0, characterId, itemId);
  return result.changes > 0;
}

/** 取得角色已裝備的物品 */
export function getEquippedItems(characterId: string): { itemId: string; quantity: number }[] {
  const db = getDb();
  const rows = db.prepare(
    'SELECT item_id, quantity FROM inventory WHERE character_id = ? AND equipped = 1',
  ).all(characterId) as { item_id: string; quantity: number }[];

  return rows.map((r) => ({ itemId: r.item_id, quantity: r.quantity }));
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

// ─── Helpers ───

/** 將資料庫列轉為 Character 物件 */
function rowToCharacter(row: Record<string, unknown>): Character {
  // 取得裝備
  const equipped = getEquippedItems(row.id as string);
  const equipment: EquipmentSlots = {
    weapon: null, head: null, body: null, hands: null, feet: null, accessory: null,
  };

  // 這裡簡化處理：根據物品 ID 設定裝備欄位
  // 實際應從 ITEM_DEFS 取得 equipSlot
  for (const item of equipped) {
    const slot = guessEquipSlot(item.itemId);
    if (slot && slot in equipment) {
      (equipment as unknown as Record<string, string | null>)[slot] = item.itemId;
    }
  }

  return {
    id: row.id as string,
    userId: row.user_id as string,
    name: row.name as string,
    level: row.level as number,
    exp: row.exp as number,
    classId: row.class_id as ClassId,
    hp: row.hp as number,
    mp: row.mp as number,
    maxHp: row.max_hp as number,
    maxMp: row.max_mp as number,
    resource: (row.resource as number) ?? 30,
    maxResource: (row.max_resource as number) ?? 30,
    resourceType: (row.resource_type as string as import('@game/shared').ResourceType) ?? 'mp',
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
    equipment,
    createdAt: row.created_at as number,
    lastLogin: row.last_login as number,
  };
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

// ─── Helpers ───

/** 簡易推斷裝備欄位（根據物品 ID 中的關鍵字） */
function guessEquipSlot(itemId: string): string | null {
  if (itemId.includes('sword') || itemId.includes('staff') || itemId.includes('bow') ||
      itemId.includes('wand') || itemId.includes('scepter') || itemId.includes('blade') ||
      itemId.includes('mace') || itemId.includes('rod')) {
    return 'weapon';
  }
  if (itemId.includes('helm') || itemId.includes('hat') || itemId.includes('cap')) return 'head';
  if (itemId.includes('armor') || itemId.includes('mail') || itemId.includes('robe') ||
      itemId.includes('vest') || itemId.includes('garb') || itemId.includes('plate')) {
    return 'body';
  }
  if (itemId.includes('glove') || itemId.includes('gauntlet')) return 'hands';
  if (itemId.includes('boot') || itemId.includes('greave') || itemId.includes('sandal')) return 'feet';
  if (itemId.includes('ring') || itemId.includes('charm') || itemId.includes('pendant') ||
      itemId.includes('amulet') || itemId.includes('earring')) {
    return 'accessory';
  }
  return null;
}
