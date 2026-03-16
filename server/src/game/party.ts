// 組隊系統 — PartyManager

import { randomUUID } from 'crypto';
import { MAX_PARTY_SIZE } from '@game/shared';
import type { Character } from '@game/shared';
import {
  sendToCharacter, sendToSession,
} from '../ws/handler.js';

// ============================================================
//  型別
// ============================================================

export interface Party {
  id: string;
  leaderId: string;
  memberIds: string[];
  createdAt: number;
}

interface PartyInvite {
  partyId: string | null;   // null = 尚未建立隊伍，等接受時才建
  inviterId: string;
  inviterName: string;
  targetId: string;
  expiresAt: number;
}

// ============================================================
//  PartyManager
// ============================================================

export class PartyManager {
  /** partyId -> Party */
  private parties: Map<string, Party> = new Map();
  /** characterId -> partyId */
  private characterPartyMap: Map<string, string> = new Map();
  /** targetCharacterId -> PartyInvite */
  private pendingInvites: Map<string, PartyInvite> = new Map();
  /** 取得角色資料的回呼 */
  private getCharacterFn: ((id: string) => Character | undefined) | null = null;

  /** 清理過期邀請計時器 */
  private cleanupTimer: ReturnType<typeof setInterval> | null = null;

  constructor() {
    this.cleanupTimer = setInterval(() => this.cleanupExpiredInvites(), 10000);
  }

  /** 設定角色查詢函式 */
  setCharacterLookup(fn: (id: string) => Character | undefined): void {
    this.getCharacterFn = fn;
  }

  /** 銷毀（用於測試或關閉伺服器） */
  destroy(): void {
    if (this.cleanupTimer) {
      clearInterval(this.cleanupTimer);
      this.cleanupTimer = null;
    }
  }

  // ──────────────────────────────────────────────────────────
  //  建立隊伍
  // ──────────────────────────────────────────────────────────

  /** 建立隊伍，leaderId 自動成為第一位成員 */
  createParty(leaderId: string): { success: boolean; message: string; partyId?: string } {
    if (this.characterPartyMap.has(leaderId)) {
      return { success: false, message: '你已經在隊伍中了。' };
    }

    const partyId = randomUUID();
    const party: Party = {
      id: partyId,
      leaderId,
      memberIds: [leaderId],
      createdAt: Date.now(),
    };

    this.parties.set(partyId, party);
    this.characterPartyMap.set(leaderId, partyId);

    this.broadcastPartyUpdate(partyId);
    return { success: true, message: '隊伍已建立！你是隊長。', partyId };
  }

  // ──────────────────────────────────────────────────────────
  //  邀請
  // ──────────────────────────────────────────────────────────

  /** 邀請玩家加入隊伍 */
  invitePlayer(inviterId: string, targetId: string): { success: boolean; message: string } {
    if (inviterId === targetId) {
      return { success: false, message: '不能邀請自己。' };
    }

    // 目標是否已有隊伍
    if (this.characterPartyMap.has(targetId)) {
      return { success: false, message: '對方已經在隊伍中了。' };
    }

    // 目標是否已有待處理邀請
    if (this.pendingInvites.has(targetId)) {
      return { success: false, message: '對方已有待處理的組隊邀請。' };
    }

    const inviterChar = this.getCharacterFn?.(inviterId);
    const inviterName = inviterChar?.name ?? '未知';
    const targetChar = this.getCharacterFn?.(targetId);
    const targetName = targetChar?.name ?? '未知';

    let partyId = this.characterPartyMap.get(inviterId) ?? null;

    if (partyId) {
      const party = this.parties.get(partyId);
      if (!party) {
        return { success: false, message: '隊伍資料異常。' };
      }

      // 只有隊長可以邀請
      if (party.leaderId !== inviterId) {
        return { success: false, message: '只有隊長可以邀請新成員。' };
      }

      // 檢查人數上限
      if (party.memberIds.length >= MAX_PARTY_SIZE) {
        return { success: false, message: `隊伍已滿（最多 ${MAX_PARTY_SIZE} 人）。` };
      }
    }

    // 建立邀請（若邀請者尚無隊伍，接受時再建立）
    this.pendingInvites.set(targetId, {
      partyId,
      inviterId,
      inviterName,
      targetId,
      expiresAt: Date.now() + 30_000, // 30 秒過期
    });

    // 通知目標
    sendToCharacter(targetId, 'system', {
      text: `${inviterName} 邀請你加入隊伍。輸入 "party accept" 接受或 "party decline" 拒絕。`,
    });

    return { success: true, message: `已向 ${targetName} 發送組隊邀請。` };
  }

  // ──────────────────────────────────────────────────────────
  //  接受 / 拒絕邀請
  // ──────────────────────────────────────────────────────────

  /** 接受組隊邀請 */
  acceptInvite(targetId: string): { success: boolean; message: string } {
    const invite = this.pendingInvites.get(targetId);
    if (!invite) {
      return { success: false, message: '你沒有待處理的組隊邀請。' };
    }

    if (Date.now() > invite.expiresAt) {
      this.pendingInvites.delete(targetId);
      return { success: false, message: '邀請已過期。' };
    }

    this.pendingInvites.delete(targetId);

    // 若邀請者還沒有隊伍，先幫他建立
    let partyId = invite.partyId;
    if (!partyId || !this.parties.has(partyId)) {
      const result = this.createParty(invite.inviterId);
      if (!result.success || !result.partyId) {
        return { success: false, message: '無法建立隊伍。' };
      }
      partyId = result.partyId;
    }

    const party = this.parties.get(partyId);
    if (!party) {
      return { success: false, message: '隊伍資料異常。' };
    }

    // 再次檢查人數
    if (party.memberIds.length >= MAX_PARTY_SIZE) {
      return { success: false, message: `隊伍已滿（最多 ${MAX_PARTY_SIZE} 人）。` };
    }

    // 加入隊伍
    party.memberIds.push(targetId);
    this.characterPartyMap.set(targetId, partyId);

    const targetChar = this.getCharacterFn?.(targetId);
    const targetName = targetChar?.name ?? '未知';

    // 通知全隊
    for (const memberId of party.memberIds) {
      sendToCharacter(memberId, 'system', {
        text: `${targetName} 加入了隊伍！`,
      });
    }

    this.broadcastPartyUpdate(partyId);
    return { success: true, message: `你加入了 ${invite.inviterName} 的隊伍。` };
  }

  /** 拒絕組隊邀請 */
  declineInvite(targetId: string): { success: boolean; message: string } {
    const invite = this.pendingInvites.get(targetId);
    if (!invite) {
      return { success: false, message: '你沒有待處理的組隊邀請。' };
    }

    this.pendingInvites.delete(targetId);

    sendToCharacter(invite.inviterId, 'system', {
      text: '對方拒絕了你的組隊邀請。',
    });

    return { success: true, message: '你拒絕了組隊邀請。' };
  }

  // ──────────────────────────────────────────────────────────
  //  離開隊伍
  // ──────────────────────────────────────────────────────────

  /** 離開隊伍 */
  leaveParty(characterId: string): { success: boolean; message: string } {
    const partyId = this.characterPartyMap.get(characterId);
    if (!partyId) {
      return { success: false, message: '你不在任何隊伍中。' };
    }

    const party = this.parties.get(partyId);
    if (!party) {
      this.characterPartyMap.delete(characterId);
      return { success: false, message: '隊伍資料異常。' };
    }

    const charName = this.getCharacterFn?.(characterId)?.name ?? '未知';

    // 移除成員
    party.memberIds = party.memberIds.filter(id => id !== characterId);
    this.characterPartyMap.delete(characterId);

    // 如果只剩 1 人或 0 人，解散隊伍
    if (party.memberIds.length <= 1) {
      // 通知剩餘的人
      for (const memberId of party.memberIds) {
        sendToCharacter(memberId, 'system', {
          text: `${charName} 離開了隊伍，隊伍已解散。`,
        });
        this.characterPartyMap.delete(memberId);
      }
      this.parties.delete(partyId);
      return { success: true, message: '你離開了隊伍，隊伍已解散。' };
    }

    // 如果離開的是隊長，轉移給下一位成員
    if (party.leaderId === characterId) {
      party.leaderId = party.memberIds[0];
      const newLeaderName = this.getCharacterFn?.(party.leaderId)?.name ?? '未知';

      for (const memberId of party.memberIds) {
        sendToCharacter(memberId, 'system', {
          text: `${charName} 離開了隊伍。${newLeaderName} 成為新隊長。`,
        });
      }
    } else {
      // 通知剩餘成員
      for (const memberId of party.memberIds) {
        sendToCharacter(memberId, 'system', {
          text: `${charName} 離開了隊伍。`,
        });
      }
    }

    this.broadcastPartyUpdate(partyId);
    return { success: true, message: '你離開了隊伍。' };
  }

  // ──────────────────────────────────────────────────────────
  //  踢出成員（隊長專用）
  // ──────────────────────────────────────────────────────────

  /** 隊長踢出成員 */
  kickMember(leaderId: string, targetId: string): { success: boolean; message: string } {
    if (leaderId === targetId) {
      return { success: false, message: '不能踢出自己，請使用離開隊伍。' };
    }

    const partyId = this.characterPartyMap.get(leaderId);
    if (!partyId) {
      return { success: false, message: '你不在任何隊伍中。' };
    }

    const party = this.parties.get(partyId);
    if (!party) {
      return { success: false, message: '隊伍資料異常。' };
    }

    if (party.leaderId !== leaderId) {
      return { success: false, message: '只有隊長可以踢出成員。' };
    }

    if (!party.memberIds.includes(targetId)) {
      return { success: false, message: '該玩家不在你的隊伍中。' };
    }

    const targetName = this.getCharacterFn?.(targetId)?.name ?? '未知';

    // 移除
    party.memberIds = party.memberIds.filter(id => id !== targetId);
    this.characterPartyMap.delete(targetId);

    // 通知被踢出的人
    sendToCharacter(targetId, 'system', {
      text: '你被踢出了隊伍。',
    });

    // 如果只剩 1 人，解散
    if (party.memberIds.length <= 1) {
      for (const memberId of party.memberIds) {
        sendToCharacter(memberId, 'system', {
          text: `${targetName} 已被踢出，隊伍已解散。`,
        });
        this.characterPartyMap.delete(memberId);
      }
      this.parties.delete(partyId);
      return { success: true, message: `已將 ${targetName} 踢出隊伍，隊伍已解散。` };
    }

    // 通知剩餘成員
    for (const memberId of party.memberIds) {
      sendToCharacter(memberId, 'system', {
        text: `${targetName} 被踢出了隊伍。`,
      });
    }

    this.broadcastPartyUpdate(partyId);
    return { success: true, message: `已將 ${targetName} 踢出隊伍。` };
  }

  // ──────────────────────────────────────────────────────────
  //  共享戰鬥遭遇
  // ──────────────────────────────────────────────────────────

  /**
   * 取得同房間的隊友列表（用於共享戰鬥遭遇）
   * 包含發起者自身
   */
  getPartyMembersInRoom(characterId: string, roomId: string): string[] {
    const partyId = this.characterPartyMap.get(characterId);
    if (!partyId) return [characterId];

    const party = this.parties.get(partyId);
    if (!party) return [characterId];

    const inRoom: string[] = [];
    for (const memberId of party.memberIds) {
      const char = this.getCharacterFn?.(memberId);
      if (char && char.roomId === roomId) {
        inRoom.push(memberId);
      }
    }

    return inRoom.length > 0 ? inRoom : [characterId];
  }

  // ──────────────────────────────────────────────────────────
  //  經驗 / 金幣分配
  // ──────────────────────────────────────────────────────────

  /**
   * 計算隊伍經驗分配
   * 規則：每位存活成員獲得 totalExp / memberCount * 1.2 (隊伍加成 20%)
   */
  distributeExp(partyMemberIds: string[], totalExp: number): Map<string, number> {
    const distribution = new Map<string, number>();
    const count = partyMemberIds.length;

    if (count === 0) return distribution;

    // 單人無加成
    if (count === 1) {
      distribution.set(partyMemberIds[0], totalExp);
      return distribution;
    }

    // 多人隊伍加成 20%
    const boostedTotal = Math.floor(totalExp * 1.2);
    const perMember = Math.floor(boostedTotal / count);

    for (const id of partyMemberIds) {
      distribution.set(id, perMember);
    }

    return distribution;
  }

  /**
   * 計算隊伍金幣分配
   * 規則：均分，無額外加成
   */
  distributeGold(partyMemberIds: string[], totalGold: number): Map<string, number> {
    const distribution = new Map<string, number>();
    const count = partyMemberIds.length;

    if (count === 0) return distribution;

    const perMember = Math.floor(totalGold / count);
    for (const id of partyMemberIds) {
      distribution.set(id, perMember);
    }

    return distribution;
  }

  // ──────────────────────────────────────────────────────────
  //  查詢
  // ──────────────────────────────────────────────────────────

  /** 取得角色所在的隊伍 */
  getParty(characterId: string): Party | null {
    const partyId = this.characterPartyMap.get(characterId);
    if (!partyId) return null;
    return this.parties.get(partyId) ?? null;
  }

  /** 取得角色所在的隊伍 ID */
  getPartyId(characterId: string): string | null {
    return this.characterPartyMap.get(characterId) ?? null;
  }

  /** 角色是否在隊伍中 */
  isInParty(characterId: string): boolean {
    return this.characterPartyMap.has(characterId);
  }

  /** 取得隊伍成員 ID 列表 */
  getPartyMembers(characterId: string): string[] {
    const party = this.getParty(characterId);
    return party?.memberIds ?? [];
  }

  /** 角色是否是隊長 */
  isLeader(characterId: string): boolean {
    const party = this.getParty(characterId);
    return party?.leaderId === characterId;
  }

  // ──────────────────────────────────────────────────────────
  //  內部輔助
  // ──────────────────────────────────────────────────────────

  /** 廣播隊伍狀態更新給所有成員 */
  private broadcastPartyUpdate(partyId: string): void {
    const party = this.parties.get(partyId);
    if (!party) return;

    const members = party.memberIds.map(id => {
      const char = this.getCharacterFn?.(id);
      return {
        id,
        name: char?.name ?? '未知',
        classId: char?.classId ?? 'adventurer',
        level: char?.level ?? 1,
        hp: char?.hp ?? 0,
        maxHp: char?.maxHp ?? 1,
      };
    });

    for (const memberId of party.memberIds) {
      sendToCharacter(memberId, 'party', {
        id: party.id,
        leaderId: party.leaderId,
        members,
      });
    }
  }

  /** 清理過期邀請 */
  private cleanupExpiredInvites(): void {
    const now = Date.now();
    for (const [key, invite] of this.pendingInvites) {
      if (now > invite.expiresAt) {
        this.pendingInvites.delete(key);
      }
    }
  }
}
