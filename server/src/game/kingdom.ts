// 王國管理器 - Kingdom System Module 1
// 處理王國建立、成員管理、官職、權限、國庫等核心功能

import { nanoid } from 'nanoid';
import type {
  KingdomInfo, KingdomMember, KingdomRank, KingdomPermission,
  KingdomTreasuryRecord, TreasuryTransactionType,
} from '@game/shared';
import {
  createKingdom as dbCreateKingdom,
  getKingdomById, getKingdomByName, getAllKingdoms,
  updateKingdom, deleteKingdom,
  addKingdomMember, removeKingdomMember, updateKingdomMemberRank,
  getKingdomMembers as dbGetKingdomMembers,
  getMemberKingdom, getKingdomMemberRank,
  addTreasuryRecord, getTreasuryRecords,
  getCharacterById, saveCharacter,
} from '../db/queries.js';

// ============================================================
//  常數
// ============================================================

/** 建立王國所需金幣 */
export const KINGDOM_CREATION_COST = 10000;

/** 官職中文名稱 */
export const RANK_NAMES: Record<KingdomRank, string> = {
  king: '國王',
  chancellor: '宰相',
  general: '將軍',
  minister: '大臣',
  treasurer: '財務官',
  diplomat: '外交官',
  citizen: '國民',
};

/** 官職權限矩陣 */
const RANK_PERMISSIONS: Record<KingdomRank, KingdomPermission[]> = {
  king: ['all'],
  chancellor: ['appoint', 'kick', 'build', 'treasury', 'treasury_view', 'treasury_deposit', 'treasury_withdraw', 'diplomacy', 'military', 'tax', 'manage_rooms', 'manage_npcs', 'chat'],
  general: ['military', 'kick', 'chat'],
  minister: ['build', 'manage_rooms', 'manage_npcs', 'chat'],
  treasurer: ['treasury_view', 'treasury_deposit', 'treasury_withdraw', 'tax', 'chat'],
  diplomat: ['diplomacy', 'chat'],
  citizen: ['info', 'chat', 'map', 'petition', 'vote'],
};

/** 可被任命的官職（不含國王） */
const APPOINTABLE_RANKS: KingdomRank[] = ['chancellor', 'general', 'minister', 'treasurer', 'diplomat', 'citizen'];

// ============================================================
//  KingdomManager
// ============================================================

export class KingdomManager {

  // ──────────────────────────────────────────────────────────
  //  王國 CRUD
  // ──────────────────────────────────────────────────────────

  /** 建立王國 */
  createKingdom(characterId: string, name: string, description: string): { success: boolean; message: string; kingdomId?: string } {
    // 檢查角色是否存在
    const char = getCharacterById(characterId);
    if (!char) return { success: false, message: '角色不存在。' };

    // 檢查等級
    if (char.level < 30) {
      return { success: false, message: '建國需要至少 30 級' };
    }

    // 檢查是否已在某王國
    const existing = getMemberKingdom(characterId);
    if (existing) return { success: false, message: '你已經是一個王國的成員了。請先離開目前的王國。' };

    // 檢查金幣
    if (char.gold < KINGDOM_CREATION_COST) {
      return { success: false, message: `金幣不足！建立王國需要 ${KINGDOM_CREATION_COST} 金幣，你目前有 ${char.gold} 金幣。` };
    }

    // 檢查王國名稱是否重複
    const dup = getKingdomByName(name);
    if (dup) return { success: false, message: `王國名稱「${name}」已被使用。` };

    // 扣除金幣
    char.gold -= KINGDOM_CREATION_COST;
    saveCharacter(char);

    // 建立王國
    const kingdomId = nanoid();
    dbCreateKingdom(kingdomId, name, description, characterId);

    // 將建立者設為國王
    addKingdomMember(kingdomId, characterId, 'king');

    // 將扣除的金幣存入國庫
    updateKingdom(kingdomId, { treasury_gold: 0 });

    // 記錄國庫交易
    addTreasuryRecord(kingdomId, 0, 'deposit', '王國建立', characterId);

    return { success: true, message: `王國「${name}」建立成功！你成為了國王。`, kingdomId };
  }

  /** 解散王國 */
  dissolveKingdom(kingdomId: string, characterId: string): { success: boolean; message: string } {
    const kingdom = getKingdomById(kingdomId);
    if (!kingdom) return { success: false, message: '王國不存在。' };

    // 只有國王可以解散
    if (kingdom.king_id !== characterId) {
      return { success: false, message: '只有國王可以解散王國。' };
    }

    // 返回國庫金幣給國王
    if (kingdom.treasury_gold > 0) {
      const char = getCharacterById(characterId);
      if (char) {
        char.gold += kingdom.treasury_gold;
        saveCharacter(char);
      }
    }

    // 刪除王國（CASCADE 會清理 members, rooms, treasury 等）
    deleteKingdom(kingdomId);

    return { success: true, message: `王國「${kingdom.name}」已解散。國庫中的 ${kingdom.treasury_gold} 金幣已返還給你。` };
  }

  // ──────────────────────────────────────────────────────────
  //  成員管理
  // ──────────────────────────────────────────────────────────

  /** 加入王國 */
  joinKingdom(characterId: string, kingdomId: string): { success: boolean; message: string } {
    const char = getCharacterById(characterId);
    if (!char) return { success: false, message: '角色不存在。' };

    const existing = getMemberKingdom(characterId);
    if (existing) return { success: false, message: '你已經是一個王國的成員了。' };

    const kingdom = getKingdomById(kingdomId);
    if (!kingdom) return { success: false, message: '王國不存在。' };

    addKingdomMember(kingdomId, characterId, 'citizen');
    return { success: true, message: `你已加入王國「${kingdom.name}」，成為國民。` };
  }

  /** 離開王國 */
  leaveKingdom(characterId: string): { success: boolean; message: string } {
    const member = getMemberKingdom(characterId);
    if (!member) return { success: false, message: '你不屬於任何王國。' };

    // 國王不能離開
    if (member.rank === 'king') {
      return { success: false, message: '國王不能離開王國。請先解散王國或轉讓王位。' };
    }

    const kingdom = getKingdomById(member.kingdom_id);
    removeKingdomMember(member.kingdom_id, characterId);
    return { success: true, message: `你已離開王國「${kingdom?.name ?? member.kingdom_id}」。` };
  }

  /** 任命官職 */
  appointRank(characterId: string, targetId: string, rank: KingdomRank): { success: boolean; message: string } {
    // 檢查權限
    if (!this.hasPermission(characterId, 'appoint')) {
      return { success: false, message: '你沒有任命官職的權限。' };
    }

    const memberInfo = getMemberKingdom(characterId);
    if (!memberInfo) return { success: false, message: '你不屬於任何王國。' };

    const targetMember = getMemberKingdom(targetId);
    if (!targetMember || targetMember.kingdom_id !== memberInfo.kingdom_id) {
      return { success: false, message: '目標不是同一王國的成員。' };
    }

    if (!APPOINTABLE_RANKS.includes(rank)) {
      return { success: false, message: `無效的官職。可用官職：${APPOINTABLE_RANKS.join(', ')}` };
    }

    // 不能任命自己
    if (characterId === targetId) {
      return { success: false, message: '不能任命自己。' };
    }

    // 將軍只能踢國民，不能任命
    const callerRank = memberInfo.rank as KingdomRank;
    if (callerRank === 'general') {
      return { success: false, message: '將軍沒有任命官職的權限。' };
    }

    updateKingdomMemberRank(memberInfo.kingdom_id, targetId, rank);
    const targetChar = getCharacterById(targetId);
    const rankName = RANK_NAMES[rank] ?? rank;
    return { success: true, message: `已將「${targetChar?.name ?? targetId}」任命為${rankName}。` };
  }

  /** 免除官職（降為國民） */
  removeRank(characterId: string, targetId: string): { success: boolean; message: string } {
    if (!this.hasPermission(characterId, 'appoint')) {
      return { success: false, message: '你沒有管理官職的權限。' };
    }

    const memberInfo = getMemberKingdom(characterId);
    if (!memberInfo) return { success: false, message: '你不屬於任何王國。' };

    const targetMember = getMemberKingdom(targetId);
    if (!targetMember || targetMember.kingdom_id !== memberInfo.kingdom_id) {
      return { success: false, message: '目標不是同一王國的成員。' };
    }

    if (targetMember.rank === 'king') {
      return { success: false, message: '不能免除國王的官職。' };
    }

    updateKingdomMemberRank(memberInfo.kingdom_id, targetId, 'citizen');
    const targetChar = getCharacterById(targetId);
    return { success: true, message: `已將「${targetChar?.name ?? targetId}」降為國民。` };
  }

  /** 踢出成員 */
  kickMember(characterId: string, targetId: string): { success: boolean; message: string } {
    if (!this.hasPermission(characterId, 'kick')) {
      return { success: false, message: '你沒有踢出成員的權限。' };
    }

    const memberInfo = getMemberKingdom(characterId);
    if (!memberInfo) return { success: false, message: '你不屬於任何王國。' };

    const targetMember = getMemberKingdom(targetId);
    if (!targetMember || targetMember.kingdom_id !== memberInfo.kingdom_id) {
      return { success: false, message: '目標不是同一王國的成員。' };
    }

    // 不能踢國王
    if (targetMember.rank === 'king') {
      return { success: false, message: '不能踢出國王。' };
    }

    // 將軍只能踢國民
    const callerRank = memberInfo.rank as KingdomRank;
    if (callerRank === 'general' && targetMember.rank !== 'citizen') {
      return { success: false, message: '將軍只能踢出國民。' };
    }

    removeKingdomMember(memberInfo.kingdom_id, targetId);
    const targetChar = getCharacterById(targetId);
    return { success: true, message: `已將「${targetChar?.name ?? targetId}」踢出王國。` };
  }

  // ──────────────────────────────────────────────────────────
  //  查詢
  // ──────────────────────────────────────────────────────────

  /** 取得王國完整資訊 */
  getKingdomInfo(kingdomId: string): KingdomInfo | null {
    const row = getKingdomById(kingdomId);
    if (!row) return null;
    return {
      id: row.id,
      name: row.name,
      description: row.description,
      kingId: row.king_id,
      createdAt: row.created_at,
      treasuryGold: row.treasury_gold,
      taxRate: row.tax_rate,
      motto: row.motto,
    };
  }

  /** 取得王國成員列表 */
  getKingdomMembers(kingdomId: string): KingdomMember[] {
    const rows = dbGetKingdomMembers(kingdomId);
    return rows.map(r => ({
      kingdomId: r.kingdom_id,
      characterId: r.character_id,
      rank: r.rank as KingdomRank,
      joinedAt: r.joined_at,
    }));
  }

  /** 取得角色所屬王國 */
  getMemberKingdom(characterId: string): { kingdomId: string; rank: KingdomRank } | null {
    const row = getMemberKingdom(characterId);
    if (!row) return null;
    return { kingdomId: row.kingdom_id, rank: row.rank as KingdomRank };
  }

  /** 取得所有王國列表 */
  listKingdoms(): KingdomInfo[] {
    const rows = getAllKingdoms();
    return rows.map(r => ({
      id: r.id,
      name: r.name,
      description: r.description,
      kingId: r.king_id,
      createdAt: r.created_at,
      treasuryGold: r.treasury_gold,
      taxRate: r.tax_rate,
      motto: r.motto,
    }));
  }

  // ──────────────────────────────────────────────────────────
  //  權限系統
  // ──────────────────────────────────────────────────────────

  /** 檢查角色是否擁有指定權限 */
  hasPermission(characterId: string, permission: KingdomPermission): boolean {
    const member = getMemberKingdom(characterId);
    if (!member) return false;

    const rank = member.rank as KingdomRank;
    const permissions = RANK_PERMISSIONS[rank];
    if (!permissions) return false;

    // 'all' 代表擁有所有權限
    if (permissions.includes('all')) return true;

    return permissions.includes(permission);
  }

  /** 取得角色的王國官職 */
  getMemberRank(characterId: string): KingdomRank | null {
    const member = getMemberKingdom(characterId);
    if (!member) return null;
    return member.rank as KingdomRank;
  }

  // ──────────────────────────────────────────────────────────
  //  國庫操作
  // ──────────────────────────────────────────────────────────

  /** 存入國庫 */
  depositTreasury(characterId: string, amount: number): { success: boolean; message: string } {
    if (amount <= 0) return { success: false, message: '金額必須大於 0。' };

    if (!this.hasPermission(characterId, 'treasury_deposit') && !this.hasPermission(characterId, 'treasury')) {
      return { success: false, message: '你沒有存入國庫的權限。' };
    }

    const member = getMemberKingdom(characterId);
    if (!member) return { success: false, message: '你不屬於任何王國。' };

    const char = getCharacterById(characterId);
    if (!char) return { success: false, message: '角色不存在。' };
    if (char.gold < amount) return { success: false, message: `金幣不足！你目前有 ${char.gold} 金幣。` };

    const kingdom = getKingdomById(member.kingdom_id);
    if (!kingdom) return { success: false, message: '王國不存在。' };

    // 扣除角色金幣
    char.gold -= amount;
    saveCharacter(char);

    // 增加國庫
    updateKingdom(member.kingdom_id, { treasury_gold: kingdom.treasury_gold + amount });
    addTreasuryRecord(member.kingdom_id, amount, 'deposit', `${char.name} 存入`, characterId);

    return { success: true, message: `成功存入 ${amount} 金幣到國庫。國庫餘額：${kingdom.treasury_gold + amount}。` };
  }

  /** 從國庫提取 */
  withdrawTreasury(characterId: string, amount: number): { success: boolean; message: string } {
    if (amount <= 0) return { success: false, message: '金額必須大於 0。' };

    if (!this.hasPermission(characterId, 'treasury_withdraw') && !this.hasPermission(characterId, 'treasury')) {
      return { success: false, message: '你沒有提取國庫的權限。' };
    }

    const member = getMemberKingdom(characterId);
    if (!member) return { success: false, message: '你不屬於任何王國。' };

    const kingdom = getKingdomById(member.kingdom_id);
    if (!kingdom) return { success: false, message: '王國不存在。' };
    if (kingdom.treasury_gold < amount) {
      return { success: false, message: `國庫金幣不足！目前餘額：${kingdom.treasury_gold}。` };
    }

    const char = getCharacterById(characterId);
    if (!char) return { success: false, message: '角色不存在。' };

    // 減少國庫
    updateKingdom(member.kingdom_id, { treasury_gold: kingdom.treasury_gold - amount });

    // 增加角色金幣
    char.gold += amount;
    saveCharacter(char);

    addTreasuryRecord(member.kingdom_id, amount, 'withdraw', `${char.name} 提取`, characterId);

    return { success: true, message: `成功從國庫提取 ${amount} 金幣。國庫餘額：${kingdom.treasury_gold - amount}。` };
  }

  /** 從國庫扣除（用於建設等系統消費，不給角色） */
  spendFromTreasury(kingdomId: string, amount: number, description: string, characterId: string): boolean {
    const kingdom = getKingdomById(kingdomId);
    if (!kingdom || kingdom.treasury_gold < amount) return false;

    updateKingdom(kingdomId, { treasury_gold: kingdom.treasury_gold - amount });
    addTreasuryRecord(kingdomId, amount, 'maintenance', description, characterId);
    return true;
  }

  /** 增加國庫金幣（稅收等） */
  addToTreasury(kingdomId: string, amount: number, type: TreasuryTransactionType, description: string, characterId: string): boolean {
    const kingdom = getKingdomById(kingdomId);
    if (!kingdom) return false;

    updateKingdom(kingdomId, { treasury_gold: kingdom.treasury_gold + amount });
    addTreasuryRecord(kingdomId, amount, type, description, characterId);
    return true;
  }

  /** 查看國庫紀錄 */
  getTreasuryHistory(kingdomId: string, limit: number = 20): KingdomTreasuryRecord[] {
    const rows = getTreasuryRecords(kingdomId, limit);
    return rows.map(r => ({
      id: r.id,
      kingdomId: r.kingdom_id,
      amount: r.amount,
      type: r.type as TreasuryTransactionType,
      description: r.description,
      characterId: r.character_id,
      createdAt: r.created_at,
    }));
  }

  // ──────────────────────────────────────────────────────────
  //  設定
  // ──────────────────────────────────────────────────────────

  /** 設定稅率 */
  setTaxRate(characterId: string, rate: number): { success: boolean; message: string } {
    if (!this.hasPermission(characterId, 'tax')) {
      return { success: false, message: '你沒有設定稅率的權限。' };
    }

    if (rate < 0 || rate > 20) {
      return { success: false, message: '稅率必須在 0% ~ 20% 之間。' };
    }

    const member = getMemberKingdom(characterId);
    if (!member) return { success: false, message: '你不屬於任何王國。' };

    updateKingdom(member.kingdom_id, { tax_rate: rate });
    return { success: true, message: `稅率已設定為 ${rate}%。` };
  }

  /** 設定國訓 */
  setMotto(characterId: string, motto: string): { success: boolean; message: string } {
    const member = getMemberKingdom(characterId);
    if (!member) return { success: false, message: '你不屬於任何王國。' };

    // 國王或宰相可以設定
    const rank = member.rank as KingdomRank;
    if (rank !== 'king' && rank !== 'chancellor') {
      return { success: false, message: '只有國王或宰相可以設定國訓。' };
    }

    updateKingdom(member.kingdom_id, { motto });
    return { success: true, message: `國訓已設定為：「${motto}」` };
  }

  /** 轉讓王位 */
  transferKingship(characterId: string, targetId: string): { success: boolean; message: string } {
    const member = getMemberKingdom(characterId);
    if (!member) return { success: false, message: '你不屬於任何王國。' };
    if (member.rank !== 'king') return { success: false, message: '只有國王可以轉讓王位。' };

    const targetMember = getMemberKingdom(targetId);
    if (!targetMember || targetMember.kingdom_id !== member.kingdom_id) {
      return { success: false, message: '目標不是同一王國的成員。' };
    }

    // 舊國王降為國民，新國王升為國王
    updateKingdomMemberRank(member.kingdom_id, characterId, 'citizen');
    updateKingdomMemberRank(member.kingdom_id, targetId, 'king');
    updateKingdom(member.kingdom_id, { king_id: targetId });

    const targetChar = getCharacterById(targetId);
    return { success: true, message: `王位已轉讓給「${targetChar?.name ?? targetId}」。` };
  }
}
