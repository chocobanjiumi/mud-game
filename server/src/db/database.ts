// 資料庫 CRUD 操作

import { getDb } from './schema.js';
import { ITEM_DEFS } from '@game/shared';
import type { Character, EquipmentSlots, InventoryItem, LearnedSkill } from '@game/shared';

// ============================================================
//  角色 CRUD
// ============================================================

export function createCharacter(id: string, userId: string, name: string): void {
  getDb().prepare(`
    INSERT INTO characters (id, user_id, name) VALUES (?, ?, ?)
  `).run(id, userId, name);

  // 初始裝備
  getDb().prepare(
    'INSERT INTO inventory (character_id, item_id, quantity, equipped) VALUES (?, ?, 1, 1)'
  ).run(id, 'wooden_sword');
  getDb().prepare(
    'INSERT INTO inventory (character_id, item_id, quantity, equipped) VALUES (?, ?, 1, 1)'
  ).run(id, 'cloth_armor');

  // 初始藥水
  getDb().prepare(
    'INSERT INTO inventory (character_id, item_id, quantity) VALUES (?, ?, 5)'
  ).run(id, 'small_hp_potion');
  getDb().prepare(
    'INSERT INTO inventory (character_id, item_id, quantity) VALUES (?, ?, 3)'
  ).run(id, 'small_mp_potion');

  // 初始技能
  getDb().prepare(
    'INSERT INTO learned_skills (character_id, skill_id) VALUES (?, ?)'
  ).run(id, 'slash');
}

export function loadCharacter(id: string): Character | null {
  const row = getDb().prepare('SELECT * FROM characters WHERE id = ?').get(id) as any;
  if (!row) return null;
  return rowToCharacter(row);
}

export function loadCharacterByName(name: string): Character | null {
  const row = getDb().prepare('SELECT * FROM characters WHERE name = ?').get(name) as any;
  if (!row) return null;
  return rowToCharacter(row);
}

export function loadCharactersByUserId(userId: string): Character[] {
  const rows = getDb().prepare('SELECT * FROM characters WHERE user_id = ?').all(userId) as any[];
  return rows.map(rowToCharacter);
}

function rowToCharacter(row: any): Character {
  const equipment = loadEquipment(row.id);
  return {
    id: row.id,
    userId: row.user_id,
    name: row.name,
    level: row.level,
    exp: row.exp,
    classId: row.class_id,
    hp: row.hp,
    mp: row.mp,
    maxHp: row.max_hp,
    maxMp: row.max_mp,
    stats: { str: row.str, int: row.int_, dex: row.dex, vit: row.vit, luk: row.luk },
    freePoints: row.free_points,
    gold: row.gold,
    roomId: row.room_id,
    isAi: !!row.is_ai,
    agentId: row.agent_id || undefined,
    equipment,
    createdAt: row.created_at,
    lastLogin: row.last_login,
  };
}

function loadEquipment(characterId: string): EquipmentSlots {
  const equipped = getDb().prepare(
    'SELECT item_id FROM inventory WHERE character_id = ? AND equipped = 1'
  ).all(characterId) as any[];

  const slots: EquipmentSlots = {
    weapon: null, head: null, body: null,
    hands: null, feet: null, accessory: null,
  };

  for (const row of equipped) {
    const def = ITEM_DEFS[row.item_id];
    if (def?.equipSlot) {
      slots[def.equipSlot] = row.item_id;
    }
  }

  return slots;
}

export function saveCharacter(char: Character): void {
  getDb().prepare(`
    UPDATE characters SET
      level = ?, exp = ?, class_id = ?,
      hp = ?, mp = ?, max_hp = ?, max_mp = ?,
      str = ?, int_ = ?, dex = ?, vit = ?, luk = ?,
      free_points = ?, gold = ?, room_id = ?,
      last_login = ?
    WHERE id = ?
  `).run(
    char.level, char.exp, char.classId,
    char.hp, char.mp, char.maxHp, char.maxMp,
    char.stats.str, char.stats.int, char.stats.dex, char.stats.vit, char.stats.luk,
    char.freePoints, char.gold, char.roomId,
    Math.floor(Date.now() / 1000),
    char.id,
  );
}

// ============================================================
//  背包
// ============================================================

export function loadInventory(characterId: string): InventoryItem[] {
  const rows = getDb().prepare(
    'SELECT item_id, quantity, equipped FROM inventory WHERE character_id = ?'
  ).all(characterId) as any[];
  return rows.map(r => ({
    itemId: r.item_id,
    quantity: r.quantity,
    equipped: !!r.equipped,
  }));
}

export function addItemToInventory(characterId: string, itemId: string, quantity: number = 1): void {
  const existing = getDb().prepare(
    'SELECT id, quantity FROM inventory WHERE character_id = ? AND item_id = ? AND equipped = 0'
  ).get(characterId, itemId) as any;

  if (existing) {
    getDb().prepare('UPDATE inventory SET quantity = quantity + ? WHERE id = ?').run(quantity, existing.id);
  } else {
    getDb().prepare(
      'INSERT INTO inventory (character_id, item_id, quantity) VALUES (?, ?, ?)'
    ).run(characterId, itemId, quantity);
  }
}

export function removeItemFromInventory(characterId: string, itemId: string, quantity: number = 1): boolean {
  const existing = getDb().prepare(
    'SELECT id, quantity FROM inventory WHERE character_id = ? AND item_id = ? AND equipped = 0'
  ).get(characterId, itemId) as any;

  if (!existing || existing.quantity < quantity) return false;

  if (existing.quantity === quantity) {
    getDb().prepare('DELETE FROM inventory WHERE id = ?').run(existing.id);
  } else {
    getDb().prepare('UPDATE inventory SET quantity = quantity - ? WHERE id = ?').run(quantity, existing.id);
  }
  return true;
}

export function equipItem(characterId: string, itemId: string): boolean {
  const def = ITEM_DEFS[itemId];
  if (!def?.equipSlot) return false;

  // Unequip current item in that slot
  const currentEquipped = getDb().prepare(
    'SELECT i.id, i.item_id FROM inventory i WHERE i.character_id = ? AND i.equipped = 1'
  ).all(characterId) as any[];

  for (const row of currentEquipped) {
    const itemDef = ITEM_DEFS[row.item_id];
    if (itemDef?.equipSlot === def.equipSlot) {
      getDb().prepare('UPDATE inventory SET equipped = 0 WHERE id = ?').run(row.id);
    }
  }

  // Equip the new item
  const result = getDb().prepare(
    'UPDATE inventory SET equipped = 1 WHERE character_id = ? AND item_id = ? AND equipped = 0'
  ).run(characterId, itemId);

  return result.changes > 0;
}

export function unequipItem(characterId: string, itemId: string): boolean {
  const result = getDb().prepare(
    'UPDATE inventory SET equipped = 0 WHERE character_id = ? AND item_id = ? AND equipped = 1'
  ).run(characterId, itemId);
  return result.changes > 0;
}

// ============================================================
//  技能
// ============================================================

export function loadLearnedSkills(characterId: string): LearnedSkill[] {
  const rows = getDb().prepare(
    'SELECT skill_id, level FROM learned_skills WHERE character_id = ?'
  ).all(characterId) as any[];
  return rows.map(r => ({
    skillId: r.skill_id,
    level: r.level,
    currentCooldown: 0,
  }));
}

export function learnSkill(characterId: string, skillId: string): void {
  getDb().prepare(
    'INSERT OR IGNORE INTO learned_skills (character_id, skill_id) VALUES (?, ?)'
  ).run(characterId, skillId);
}

// ============================================================
//  隊伍
// ============================================================

export function createParty(partyId: string, leaderId: string): void {
  getDb().prepare('INSERT INTO parties (id, leader_id) VALUES (?, ?)').run(partyId, leaderId);
  getDb().prepare('INSERT INTO party_members (party_id, character_id) VALUES (?, ?)').run(partyId, leaderId);
}

export function addPartyMember(partyId: string, characterId: string): void {
  getDb().prepare('INSERT INTO party_members (party_id, character_id) VALUES (?, ?)').run(partyId, characterId);
}

export function removePartyMember(partyId: string, characterId: string): void {
  getDb().prepare('DELETE FROM party_members WHERE party_id = ? AND character_id = ?').run(partyId, characterId);
}

export function getPartyMembers(partyId: string): string[] {
  const rows = getDb().prepare('SELECT character_id FROM party_members WHERE party_id = ?').all(partyId) as any[];
  return rows.map(r => r.character_id);
}

export function getPartyForCharacter(characterId: string): string | null {
  const row = getDb().prepare('SELECT party_id FROM party_members WHERE character_id = ?').get(characterId) as any;
  return row?.party_id || null;
}

export function getPartyLeader(partyId: string): string | null {
  const row = getDb().prepare('SELECT leader_id FROM parties WHERE id = ?').get(partyId) as any;
  return row?.leader_id || null;
}

export function deleteParty(partyId: string): void {
  getDb().prepare('DELETE FROM party_members WHERE party_id = ?').run(partyId);
  getDb().prepare('DELETE FROM parties WHERE id = ?').run(partyId);
}

// ============================================================
//  任務
// ============================================================

export function startQuest(characterId: string, questId: string): void {
  getDb().prepare(
    'INSERT OR IGNORE INTO quest_progress (character_id, quest_id) VALUES (?, ?)'
  ).run(characterId, questId);
}

export function getQuestProgress(characterId: string, questId: string): any {
  return getDb().prepare(
    'SELECT * FROM quest_progress WHERE character_id = ? AND quest_id = ?'
  ).get(characterId, questId);
}

export function completeQuest(characterId: string, questId: string): void {
  getDb().prepare(
    "UPDATE quest_progress SET status = 'completed', completed_at = unixepoch() WHERE character_id = ? AND quest_id = ?"
  ).run(characterId, questId);
}

export function getActiveQuests(characterId: string): any[] {
  return getDb().prepare(
    "SELECT * FROM quest_progress WHERE character_id = ? AND status = 'active'"
  ).all(characterId) as any[];
}

// ============================================================
//  排行榜
// ============================================================

export function updateLeaderboard(characterId: string, type: string, score: number): void {
  getDb().prepare(`
    INSERT INTO leaderboard (character_id, type, score, updated_at)
    VALUES (?, ?, ?, unixepoch())
    ON CONFLICT(character_id, type) DO UPDATE SET score = ?, updated_at = unixepoch()
  `).run(characterId, type, score, score);
}

export function getLeaderboard(type: string, limit: number = 10): any[] {
  return getDb().prepare(`
    SELECT l.*, c.name, c.class_id, c.level
    FROM leaderboard l JOIN characters c ON l.character_id = c.id
    WHERE l.type = ? ORDER BY l.score DESC LIMIT ?
  `).all(type, limit) as any[];
}

// ============================================================
//  PvP
// ============================================================

export function recordPvp(winnerId: string, loserId: string, arenaType: string = 'duel'): void {
  getDb().prepare(
    'INSERT INTO pvp_records (winner_id, loser_id, arena_type) VALUES (?, ?, ?)'
  ).run(winnerId, loserId, arenaType);
}

// ============================================================
//  自動存檔
// ============================================================

let autoSaveInterval: ReturnType<typeof setInterval> | null = null;

export function startAutoSave(
  getCharacters: () => Character[],
  intervalMs: number = 60000,
): void {
  if (autoSaveInterval) clearInterval(autoSaveInterval);
  autoSaveInterval = setInterval(() => {
    const chars = getCharacters();
    for (const char of chars) {
      saveCharacter(char);
    }
  }, intervalMs);
}

export function stopAutoSave(): void {
  if (autoSaveInterval) {
    clearInterval(autoSaveInterval);
    autoSaveInterval = null;
  }
}
