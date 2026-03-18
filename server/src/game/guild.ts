// 公會系統 — GuildManager
// 建立、加入、離開、升級、聊天、公會倉庫

import { randomUUID } from 'crypto';
import { getDb } from '../db/schema.js';
import { sendToCharacter } from '../ws/handler.js';
import {
  getCharacterById, saveCharacter,
  addInventoryItem, removeInventoryItem, getInventory,
} from '../db/queries.js';
import { ITEM_DEFS } from '@game/shared';
import type { Character } from '@game/shared';

// ============================================================
//  型別
// ============================================================

export type GuildRank = 'leader' | 'officer' | 'member';

export interface GuildInfo {
  id: string;
  name: string;
  description: string;
  leaderId: string;
  level: number;
  exp: number;
  maxMembers: number;
  createdAt: number;
}

export interface GuildMember {
  guildId: string;
  characterId: string;
  rank: GuildRank;
  joinedAt: number;
}

interface GuildRow {
  id: string;
  name: string;
  description: string;
  leader_id: string;
  level: number;
  exp: number;
  max_members: number;
  created_at: number;
}

interface GuildMemberRow {
  guild_id: string;
  character_id: string;
  rank: string;
  joined_at: number;
}

interface GuildStorageRow {
  guild_id: string;
  item_id: string;
  count: number;
}

// ============================================================
//  常數
// ============================================================

const CREATE_GUILD_COST = 5000;
const MAX_GUILD_LEVEL = 10;
const BASE_MAX_MEMBERS = 20;
const MEMBERS_PER_LEVEL = 5;

/** 公會升級所需經驗 */
function guildExpRequired(level: number): number {
  return level * 1000;
}

// ============================================================
//  GuildManager
// ============================================================

export class GuildManager {

  ensureTables(): void {
    try {
      getDb().exec(`
        CREATE TABLE IF NOT EXISTS guilds (
          id TEXT PRIMARY KEY,
          name TEXT UNIQUE NOT NULL,
          description TEXT DEFAULT '',
          leader_id TEXT NOT NULL,
          level INTEGER DEFAULT 1,
          exp INTEGER DEFAULT 0,
          max_members INTEGER DEFAULT 20,
          created_at INTEGER
        );
        CREATE TABLE IF NOT EXISTS guild_members (
          guild_id TEXT NOT NULL,
          character_id TEXT NOT NULL,
          rank TEXT DEFAULT 'member',
          joined_at INTEGER,
          PRIMARY KEY(guild_id, character_id)
        );
        CREATE TABLE IF NOT EXISTS guild_storage (
          guild_id TEXT NOT NULL,
          item_id TEXT NOT NULL,
          count INTEGER DEFAULT 0,
          PRIMARY KEY(guild_id, item_id)
        );
        CREATE INDEX IF NOT EXISTS idx_guild_members_char ON guild_members(character_id);
      `);
    } catch { /* tables may already exist */ }
  }

  // ──────────────────────────────────────────────────────────
  //  建立公會
  // ──────────────────────────────────────────────────────────

  createGuild(
    character: Character,
    guildName: string,
    description: string = '',
  ): { success: boolean; message: string } {
    if (!guildName || guildName.length < 2 || guildName.length > 20) {
      return { success: false, message: '公會名稱需要 2~20 個字元。' };
    }

    if (character.gold < CREATE_GUILD_COST) {
      return { success: false, message: `建立公會需要 ${CREATE_GUILD_COST} 金幣，你目前有 ${character.gold} 金幣。` };
    }

    // 檢查是否已在公會中
    const existingMembership = this.getCharacterGuild(character.id);
    if (existingMembership) {
      return { success: false, message: '你已經是公會成員了，請先退出現有公會。' };
    }

    // 檢查名稱是否重複
    const existingGuild = this.getGuildByName(guildName);
    if (existingGuild) {
      return { success: false, message: `公會名稱「${guildName}」已被使用。` };
    }

    const guildId = randomUUID();
    const now = Math.floor(Date.now() / 1000);

    character.gold -= CREATE_GUILD_COST;
    saveCharacter(character);

    try {
      getDb().prepare(
        'INSERT INTO guilds (id, name, description, leader_id, level, exp, max_members, created_at) VALUES (?, ?, ?, ?, 1, 0, ?, ?)',
      ).run(guildId, guildName, description, character.id, BASE_MAX_MEMBERS, now);

      getDb().prepare(
        'INSERT INTO guild_members (guild_id, character_id, rank, joined_at) VALUES (?, ?, ?, ?)',
      ).run(guildId, character.id, 'leader', now);
    } catch {
      character.gold += CREATE_GUILD_COST;
      saveCharacter(character);
      return { success: false, message: '建立公會失敗。' };
    }

    return {
      success: true,
      message: `成功建立公會「${guildName}」！消耗 ${CREATE_GUILD_COST} 金幣。`,
    };
  }

  // ──────────────────────────────────────────────────────────
  //  解散公會
  // ──────────────────────────────────────────────────────────

  dissolveGuild(characterId: string): { success: boolean; message: string } {
    const membership = this.getCharacterGuild(characterId);
    if (!membership) {
      return { success: false, message: '你不在任何公會中。' };
    }

    if (membership.rank !== 'leader') {
      return { success: false, message: '只有會長才能解散公會。' };
    }

    const guild = this.getGuildById(membership.guildId);
    if (!guild) {
      return { success: false, message: '公會不存在。' };
    }

    // 通知所有成員
    const members = this.getGuildMembers(membership.guildId);
    for (const m of members) {
      if (m.characterId !== characterId) {
        sendToCharacter(m.characterId, 'system', {
          text: `公會「${guild.name}」已被會長解散。`,
        });
      }
    }

    try {
      getDb().prepare('DELETE FROM guild_storage WHERE guild_id = ?').run(membership.guildId);
      getDb().prepare('DELETE FROM guild_members WHERE guild_id = ?').run(membership.guildId);
      getDb().prepare('DELETE FROM guilds WHERE id = ?').run(membership.guildId);
    } catch { /* ignore */ }

    return { success: true, message: `已解散公會「${guild.name}」。` };
  }

  // ──────────────────────────────────────────────────────────
  //  加入公會
  // ──────────────────────────────────────────────────────────

  joinGuild(characterId: string, guildName: string): { success: boolean; message: string } {
    const existing = this.getCharacterGuild(characterId);
    if (existing) {
      return { success: false, message: '你已經是公會成員了。' };
    }

    const guild = this.getGuildByName(guildName);
    if (!guild) {
      return { success: false, message: `找不到公會「${guildName}」。` };
    }

    const members = this.getGuildMembers(guild.id);
    if (members.length >= guild.maxMembers) {
      return { success: false, message: `公會「${guild.name}」已滿員（${members.length}/${guild.maxMembers}）。` };
    }

    const now = Math.floor(Date.now() / 1000);
    try {
      getDb().prepare(
        'INSERT INTO guild_members (guild_id, character_id, rank, joined_at) VALUES (?, ?, ?, ?)',
      ).run(guild.id, characterId, 'member', now);
    } catch {
      return { success: false, message: '加入公會失敗。' };
    }

    // 通知公會成員
    const char = getCharacterById(characterId);
    this.broadcastToGuild(guild.id, `${char?.name ?? '未知'}加入了公會！`, characterId);

    return { success: true, message: `成功加入公會「${guild.name}」！` };
  }

  // ──────────────────────────────────────────────────────────
  //  離開公會
  // ──────────────────────────────────────────────────────────

  leaveGuild(characterId: string): { success: boolean; message: string } {
    const membership = this.getCharacterGuild(characterId);
    if (!membership) {
      return { success: false, message: '你不在任何公會中。' };
    }

    if (membership.rank === 'leader') {
      return { success: false, message: '會長不能直接離開公會，請先轉讓會長或解散公會。' };
    }

    const guild = this.getGuildById(membership.guildId);

    try {
      getDb().prepare(
        'DELETE FROM guild_members WHERE guild_id = ? AND character_id = ?',
      ).run(membership.guildId, characterId);
    } catch { /* ignore */ }

    const char = getCharacterById(characterId);
    this.broadcastToGuild(membership.guildId, `${char?.name ?? '未知'}離開了公會。`, characterId);

    return { success: true, message: `已離開公會「${guild?.name ?? ''}」。` };
  }

  // ──────────────────────────────────────────────────────────
  //  晉升/踢人
  // ──────────────────────────────────────────────────────────

  promoteMembers(
    characterId: string,
    targetName: string,
  ): { success: boolean; message: string } {
    const membership = this.getCharacterGuild(characterId);
    if (!membership || membership.rank !== 'leader') {
      return { success: false, message: '只有會長才能晉升成員。' };
    }

    const target = this.findMemberByName(membership.guildId, targetName);
    if (!target) {
      return { success: false, message: `找不到公會成員「${targetName}」。` };
    }

    if (target.rank === 'officer') {
      // 晉升為會長（轉讓）
      try {
        getDb().prepare(
          'UPDATE guild_members SET rank = ? WHERE guild_id = ? AND character_id = ?',
        ).run('leader', membership.guildId, target.characterId);
        getDb().prepare(
          'UPDATE guild_members SET rank = ? WHERE guild_id = ? AND character_id = ?',
        ).run('officer', membership.guildId, characterId);
        getDb().prepare(
          'UPDATE guilds SET leader_id = ? WHERE id = ?',
        ).run(target.characterId, membership.guildId);
      } catch { /* ignore */ }
      return { success: true, message: `已將會長轉讓給「${targetName}」。` };
    }

    // member -> officer
    try {
      getDb().prepare(
        'UPDATE guild_members SET rank = ? WHERE guild_id = ? AND character_id = ?',
      ).run('officer', membership.guildId, target.characterId);
    } catch { /* ignore */ }

    this.broadcastToGuild(membership.guildId, `「${targetName}」已被晉升為幹部！`);
    return { success: true, message: `已將「${targetName}」晉升為幹部。` };
  }

  kickMember(
    characterId: string,
    targetName: string,
  ): { success: boolean; message: string } {
    const membership = this.getCharacterGuild(characterId);
    if (!membership || (membership.rank !== 'leader' && membership.rank !== 'officer')) {
      return { success: false, message: '只有會長或幹部才能踢人。' };
    }

    const target = this.findMemberByName(membership.guildId, targetName);
    if (!target) {
      return { success: false, message: `找不到公會成員「${targetName}」。` };
    }

    if (target.rank === 'leader') {
      return { success: false, message: '不能踢出會長。' };
    }

    if (target.rank === 'officer' && membership.rank !== 'leader') {
      return { success: false, message: '只有會長才能踢出幹部。' };
    }

    try {
      getDb().prepare(
        'DELETE FROM guild_members WHERE guild_id = ? AND character_id = ?',
      ).run(membership.guildId, target.characterId);
    } catch { /* ignore */ }

    sendToCharacter(target.characterId, 'system', {
      text: '你已被踢出公會。',
    });

    this.broadcastToGuild(membership.guildId, `「${targetName}」已被踢出公會。`);
    return { success: true, message: `已將「${targetName}」踢出公會。` };
  }

  // ──────────────────────────────────────────────────────────
  //  公會聊天
  // ──────────────────────────────────────────────────────────

  guildChat(characterId: string, message: string): { success: boolean; message: string } {
    const membership = this.getCharacterGuild(characterId);
    if (!membership) {
      return { success: false, message: '你不在任何公會中。' };
    }

    const char = getCharacterById(characterId);
    const charName = char?.name ?? '未知';

    this.broadcastToGuild(membership.guildId, `[公會] ${charName}：${message}`);
    return { success: true, message: '' };
  }

  // ──────────────────────────────────────────────────────────
  //  公會倉庫
  // ──────────────────────────────────────────────────────────

  depositItem(
    characterId: string,
    itemId: string,
    count: number = 1,
  ): { success: boolean; message: string } {
    const membership = this.getCharacterGuild(characterId);
    if (!membership) {
      return { success: false, message: '你不在任何公會中。' };
    }

    const itemDef = ITEM_DEFS[itemId];
    if (!itemDef) {
      return { success: false, message: `找不到物品「${itemId}」。` };
    }

    const removed = removeInventoryItem(characterId, itemId, count);
    if (!removed) {
      return { success: false, message: `背包中的「${itemDef.name}」數量不足。` };
    }

    try {
      const existing = getDb().prepare(
        'SELECT count FROM guild_storage WHERE guild_id = ? AND item_id = ?',
      ).get(membership.guildId, itemId) as { count: number } | undefined;

      if (existing) {
        getDb().prepare(
          'UPDATE guild_storage SET count = count + ? WHERE guild_id = ? AND item_id = ?',
        ).run(count, membership.guildId, itemId);
      } else {
        getDb().prepare(
          'INSERT INTO guild_storage (guild_id, item_id, count) VALUES (?, ?, ?)',
        ).run(membership.guildId, itemId, count);
      }
    } catch {
      addInventoryItem(characterId, itemId, count);
      return { success: false, message: '存入公會倉庫失敗。' };
    }

    const char = getCharacterById(characterId);
    this.broadcastToGuild(membership.guildId, `${char?.name ?? '未知'}存入了 ${itemDef.name} x${count} 到公會倉庫。`);
    return { success: true, message: `成功存入 ${itemDef.name} x${count} 到公會倉庫。` };
  }

  withdrawItem(
    characterId: string,
    itemId: string,
    count: number = 1,
  ): { success: boolean; message: string } {
    const membership = this.getCharacterGuild(characterId);
    if (!membership) {
      return { success: false, message: '你不在任何公會中。' };
    }

    // 只有幹部和會長可以取出物品
    if (membership.rank === 'member') {
      return { success: false, message: '只有幹部和會長才能從公會倉庫取出物品。' };
    }

    const itemDef = ITEM_DEFS[itemId];
    if (!itemDef) {
      return { success: false, message: `找不到物品「${itemId}」。` };
    }

    try {
      const existing = getDb().prepare(
        'SELECT count FROM guild_storage WHERE guild_id = ? AND item_id = ?',
      ).get(membership.guildId, itemId) as { count: number } | undefined;

      if (!existing || existing.count < count) {
        return { success: false, message: `公會倉庫中的「${itemDef.name}」數量不足。` };
      }

      if (existing.count === count) {
        getDb().prepare(
          'DELETE FROM guild_storage WHERE guild_id = ? AND item_id = ?',
        ).run(membership.guildId, itemId);
      } else {
        getDb().prepare(
          'UPDATE guild_storage SET count = count - ? WHERE guild_id = ? AND item_id = ?',
        ).run(count, membership.guildId, itemId);
      }
    } catch {
      return { success: false, message: '取出失敗。' };
    }

    addInventoryItem(characterId, itemId, count);

    const char = getCharacterById(characterId);
    this.broadcastToGuild(membership.guildId, `${char?.name ?? '未知'}從公會倉庫取出了 ${itemDef.name} x${count}。`);
    return { success: true, message: `成功從公會倉庫取出 ${itemDef.name} x${count}。` };
  }

  getGuildStorage(guildId: string): { itemId: string; count: number; name: string }[] {
    try {
      const rows = getDb().prepare(
        'SELECT item_id, count FROM guild_storage WHERE guild_id = ? AND count > 0',
      ).all(guildId) as GuildStorageRow[];
      return rows.map(r => ({
        itemId: r.item_id,
        count: r.count,
        name: ITEM_DEFS[r.item_id]?.name ?? r.item_id,
      }));
    } catch {
      return [];
    }
  }

  // ──────────────────────────────────────────────────────────
  //  公會資訊
  // ──────────────────────────────────────────────────────────

  getGuildInfo(characterId: string): GuildInfo | null {
    const membership = this.getCharacterGuild(characterId);
    if (!membership) return null;
    return this.getGuildById(membership.guildId);
  }

  formatGuildInfo(characterId: string): string {
    const membership = this.getCharacterGuild(characterId);
    if (!membership) {
      return '你不在任何公會中。使用 guild create <名稱> 建立，或 guild join <名稱> 加入。';
    }

    const guild = this.getGuildById(membership.guildId);
    if (!guild) return '公會資料異常。';

    const members = this.getGuildMembers(guild.id);
    const leader = getCharacterById(guild.leaderId);

    let text = `公會：「${guild.name}」\n`;
    text += '─'.repeat(40) + '\n';
    text += `會長：${leader?.name ?? '未知'}\n`;
    text += `等級：${guild.level}　經驗：${guild.exp}/${guildExpRequired(guild.level)}\n`;
    text += `成員：${members.length}/${guild.maxMembers}\n`;
    if (guild.description) text += `簡介：${guild.description}\n`;
    text += `你的職位：${this.rankName(membership.rank)}\n`;

    return text;
  }

  formatGuildMembers(characterId: string): string {
    const membership = this.getCharacterGuild(characterId);
    if (!membership) {
      return '你不在任何公會中。';
    }

    const members = this.getGuildMembers(membership.guildId);

    let text = '公會成員列表\n';
    text += '─'.repeat(40) + '\n';

    for (const m of members) {
      const char = getCharacterById(m.characterId);
      const rankLabel = this.rankName(m.rank);
      text += `  [${rankLabel}] ${char?.name ?? '未知'}（Lv.${char?.level ?? '?'}）\n`;
    }

    return text;
  }

  formatGuildStorage(characterId: string): string {
    const membership = this.getCharacterGuild(characterId);
    if (!membership) {
      return '你不在任何公會中。';
    }

    const items = this.getGuildStorage(membership.guildId);
    if (items.length === 0) {
      return '公會倉庫是空的。';
    }

    let text = '公會倉庫\n';
    text += '─'.repeat(40) + '\n';

    for (const item of items) {
      text += `  ${item.name} x${item.count}\n`;
    }

    return text;
  }

  // ──────────────────────────────────────────────────────────
  //  公會經驗
  // ──────────────────────────────────────────────────────────

  addGuildExp(guildId: string, amount: number): void {
    const guild = this.getGuildById(guildId);
    if (!guild || guild.level >= MAX_GUILD_LEVEL) return;

    let newExp = guild.exp + amount;
    let newLevel = guild.level;
    let newMaxMembers = guild.maxMembers;

    while (newLevel < MAX_GUILD_LEVEL && newExp >= guildExpRequired(newLevel)) {
      newExp -= guildExpRequired(newLevel);
      newLevel++;
      newMaxMembers = BASE_MAX_MEMBERS + (newLevel - 1) * MEMBERS_PER_LEVEL;

      this.broadcastToGuild(guildId, `公會升級！等級 ${newLevel}，最大成員數 ${newMaxMembers}。`);
    }

    try {
      getDb().prepare(
        'UPDATE guilds SET exp = ?, level = ?, max_members = ? WHERE id = ?',
      ).run(newExp, newLevel, newMaxMembers, guildId);
    } catch { /* ignore */ }
  }

  /** 獲取角色所在公會的 ID（方便外部調用） */
  getCharacterGuildId(characterId: string): string | null {
    const membership = this.getCharacterGuild(characterId);
    return membership?.guildId ?? null;
  }

  // ──────────────────────────────────────────────────────────
  //  內部方法
  // ──────────────────────────────────────────────────────────

  private getGuildById(id: string): GuildInfo | null {
    try {
      const row = getDb().prepare('SELECT * FROM guilds WHERE id = ?').get(id) as GuildRow | undefined;
      if (!row) return null;
      return {
        id: row.id,
        name: row.name,
        description: row.description,
        leaderId: row.leader_id,
        level: row.level,
        exp: row.exp,
        maxMembers: row.max_members,
        createdAt: row.created_at,
      };
    } catch {
      return null;
    }
  }

  private getGuildByName(name: string): GuildInfo | null {
    try {
      const row = getDb().prepare('SELECT * FROM guilds WHERE name = ?').get(name) as GuildRow | undefined;
      if (!row) return null;
      return {
        id: row.id,
        name: row.name,
        description: row.description,
        leaderId: row.leader_id,
        level: row.level,
        exp: row.exp,
        maxMembers: row.max_members,
        createdAt: row.created_at,
      };
    } catch {
      return null;
    }
  }

  private getCharacterGuild(characterId: string): GuildMember | null {
    try {
      const row = getDb().prepare(
        'SELECT * FROM guild_members WHERE character_id = ?',
      ).get(characterId) as GuildMemberRow | undefined;
      if (!row) return null;
      return {
        guildId: row.guild_id,
        characterId: row.character_id,
        rank: row.rank as GuildRank,
        joinedAt: row.joined_at,
      };
    } catch {
      return null;
    }
  }

  private getGuildMembers(guildId: string): GuildMember[] {
    try {
      const rows = getDb().prepare(
        'SELECT * FROM guild_members WHERE guild_id = ? ORDER BY CASE rank WHEN \'leader\' THEN 0 WHEN \'officer\' THEN 1 ELSE 2 END',
      ).all(guildId) as GuildMemberRow[];
      return rows.map(r => ({
        guildId: r.guild_id,
        characterId: r.character_id,
        rank: r.rank as GuildRank,
        joinedAt: r.joined_at,
      }));
    } catch {
      return [];
    }
  }

  private findMemberByName(guildId: string, name: string): GuildMember | null {
    const members = this.getGuildMembers(guildId);
    for (const m of members) {
      const char = getCharacterById(m.characterId);
      if (char && char.name.toLowerCase() === name.toLowerCase()) {
        return m;
      }
    }
    return null;
  }

  private broadcastToGuild(guildId: string, message: string, excludeId?: string): void {
    const members = this.getGuildMembers(guildId);
    for (const m of members) {
      if (m.characterId !== excludeId) {
        sendToCharacter(m.characterId, 'system', { text: message });
      }
    }
  }

  private rankName(rank: GuildRank): string {
    switch (rank) {
      case 'leader': return '會長';
      case 'officer': return '幹部';
      case 'member': return '成員';
    }
  }
}
