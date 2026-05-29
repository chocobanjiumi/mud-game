// 組隊系統 — PartyManager

import { randomUUID } from 'crypto';
import { MAX_PARTY_SIZE } from '@game/shared';
import type { Character, CombatLoot } from '@game/shared';
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
  lootMode: LootDistributionMode;
  lootRoundRobinIndex: number;
}

export type LootDistributionMode = 'free' | 'round_robin' | 'need_greed' | 'leader';

export interface LootDistributionResult {
  success: boolean;
  message: string;
  assignments: Map<string, Pick<CombatLoot, 'gold' | 'items'>>;
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
  /** followerCharacterId -> followedCharacterId */
  private followTargets: Map<string, string> = new Map();
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
      lootMode: 'free',
      lootRoundRobinIndex: 0,
    };

    this.parties.set(partyId, party);
    this.characterPartyMap.set(leaderId, partyId);

    this.broadcastPartyUpdate(partyId);
    return { success: true, message: '隊伍已建立！你是隊長。', partyId };
  }

  /** 重新同步單一角色的隊伍狀態；登入/重連時使用。 */
  syncCharacterParty(characterId: string): void {
    const party = this.getParty(characterId);
    if (!party) {
      this.sendEmptyParty(characterId);
      return;
    }
    this.sendPartyUpdateToCharacter(characterId, party);
  }

  // ──────────────────────────────────────────────────────────
  //  邀請
  // ──────────────────────────────────────────────────────────

  /** 邀請玩家加入隊伍 */
  invitePlayer(inviterId: string, targetId: string): { success: boolean; message: string } {
    if (inviterId === targetId) {
      return { success: false, message: '你正在發送組隊邀請，但目標是自己；目前隊伍狀態不變，下一步請輸入其他玩家名稱。' };
    }

    // 目標是否已有隊伍
    if (this.characterPartyMap.has(targetId)) {
      return { success: false, message: '你正在發送組隊邀請，但目標玩家已在其他隊伍中；目前隊伍狀態不變，下一步請改邀其他玩家或等待對方離隊。' };
    }

    // 目標是否已有待處理邀請
    if (this.pendingInvites.has(targetId)) {
      return { success: false, message: '你正在發送組隊邀請，但目標玩家已有待處理邀請；目前隊伍狀態不變，下一步請等待對方接受或拒絕。' };
    }

    const inviterChar = this.getCharacterFn?.(inviterId);
    const inviterName = inviterChar?.name ?? '未知';
    const targetChar = this.getCharacterFn?.(targetId);
    const targetName = targetChar?.name ?? '未知';

    let partyId = this.characterPartyMap.get(inviterId) ?? null;

    if (partyId) {
      const party = this.parties.get(partyId);
      if (!party) {
        return { success: false, message: '你正在邀請玩家加入隊伍，但目前隊伍資料異常；邀請未送出，下一步請重新建立隊伍。' };
      }

      // 只有隊長可以邀請
      if (party.leaderId !== inviterId) {
        return { success: false, message: '你正在邀請玩家加入隊伍，但目前不是隊長；邀請未送出，下一步請隊長邀請或轉移隊長。' };
      }

      // 檢查人數上限
      if (party.memberIds.length >= MAX_PARTY_SIZE) {
        return { success: false, message: `你正在邀請玩家加入隊伍，但目前隊伍已滿 ${party.memberIds.length}/${MAX_PARTY_SIZE}；下一步請先空出位置。` };
      }
    }

    // 建立邀請（若邀請者尚無隊伍，接受時再建立）
    const invite = {
      partyId,
      inviterId,
      inviterName,
      targetId,
      expiresAt: Date.now() + 30_000, // 30 秒過期
    };
    this.pendingInvites.set(targetId, invite);

    // 通知目標
    sendToCharacter(targetId, 'party_invite', {
      status: 'pending',
      inviterId,
      inviterName,
      expiresAt: invite.expiresAt,
    });
    sendToCharacter(targetId, 'system', {
      text: `${inviterName} 邀請你加入隊伍；目前隊伍將在你接受後建立或加入既有隊伍，30 秒內輸入 "party accept" 接受，或輸入 "party decline" 拒絕。`,
    });

    return { success: true, message: `你已向 ${targetName} 發送組隊邀請；對方 30 秒內可接受或拒絕，目前隊伍狀態會在回應後同步。` };
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
    this.clearPartyInviteModal(targetId);

    // 若邀請者還沒有隊伍，先幫他建立
    let partyId = invite.partyId;
    if (!partyId || !this.parties.has(partyId)) {
      const result = this.createParty(invite.inviterId);
      if (!result.success || !result.partyId) {
        return { success: false, message: `你接受了 ${invite.inviterName} 的組隊邀請，但系統無法建立隊伍；目前尚未加入，下一步請對方重新邀請。` };
      }
      partyId = result.partyId;
    }

    const party = this.parties.get(partyId);
    if (!party) {
      return { success: false, message: `你接受了 ${invite.inviterName} 的組隊邀請，但隊伍資料異常；目前尚未加入，下一步請隊長重新建立隊伍。` };
    }

    // 再次檢查人數
    if (party.memberIds.length >= MAX_PARTY_SIZE) {
      return { success: false, message: `你想加入 ${invite.inviterName} 的隊伍，但目前人數已達 ${party.memberIds.length}/${MAX_PARTY_SIZE}；下一步請等隊長空出位置後重新邀請。` };
    }

    // 加入隊伍
    party.memberIds.push(targetId);
    this.characterPartyMap.set(targetId, partyId);

    const targetChar = this.getCharacterFn?.(targetId);
    const targetName = targetChar?.name ?? '未知';

    // 通知全隊
    for (const memberId of party.memberIds) {
      sendToCharacter(memberId, 'system', {
        text: `${targetName} 已加入隊伍；目前隊伍人數 ${party.memberIds.length}/${MAX_PARTY_SIZE}，隊長可繼續邀請、調整戰利品模式或開始移動。`,
      });
    }

    this.broadcastPartyUpdate(partyId);
    return { success: true, message: `你已接受 ${invite.inviterName} 的組隊邀請並加入隊伍；目前隊伍人數 ${party.memberIds.length}/${MAX_PARTY_SIZE}，下一步可跟隨隊長或準備戰鬥。` };
  }

  /** 拒絕組隊邀請 */
  declineInvite(targetId: string): { success: boolean; message: string } {
    const invite = this.pendingInvites.get(targetId);
    if (!invite) {
      return { success: false, message: '你沒有待處理的組隊邀請。' };
    }

    this.pendingInvites.delete(targetId);
    this.clearPartyInviteModal(targetId);

    sendToCharacter(invite.inviterId, 'system', {
      text: `${this.getCharacterFn?.(targetId)?.name ?? '目標玩家'} 拒絕了你的組隊邀請；目前隊伍狀態不變，下一步可邀請其他玩家或稍後再試。`,
    });

    return { success: true, message: `你已拒絕 ${invite.inviterName} 的組隊邀請；目前沒有加入該隊伍，下一步可等待其他邀請或自行建立隊伍。` };
  }

  // ──────────────────────────────────────────────────────────
  //  離開隊伍
  // ──────────────────────────────────────────────────────────

  /** 離開隊伍 */
  leaveParty(characterId: string): { success: boolean; message: string } {
    const partyId = this.characterPartyMap.get(characterId);
    if (!partyId) {
      this.sendEmptyParty(characterId);
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
    this.clearFollowLinks(characterId);
    this.sendEmptyParty(characterId);

    // 如果只剩 1 人或 0 人，解散隊伍
    if (party.memberIds.length <= 1) {
      // 通知剩餘的人
      for (const memberId of party.memberIds) {
        sendToCharacter(memberId, 'system', {
          text: `${charName} 離開了隊伍，隊伍已解散。`,
        });
        this.characterPartyMap.delete(memberId);
        this.clearFollowLinks(memberId);
        this.sendEmptyParty(memberId);
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
    this.clearFollowLinks(targetId);
    this.sendEmptyParty(targetId);

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
        this.clearFollowLinks(memberId);
        this.sendEmptyParty(memberId);
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

  setLootMode(leaderId: string, mode: LootDistributionMode): { success: boolean; message: string } {
    const party = this.getParty(leaderId);
    if (!party) {
      return { success: false, message: '你不在任何隊伍中。' };
    }
    if (party.leaderId !== leaderId) {
      return { success: false, message: '只有隊長可以變更戰利品分配模式。' };
    }

    party.lootMode = mode;
    party.lootRoundRobinIndex = 0;
    this.broadcastPartyUpdate(party.id);
    return { success: true, message: `隊伍戰利品分配模式已改為 ${mode}。` };
  }

  distributeLoot(
    looterId: string,
    participantIds: string[],
    loot: Pick<CombatLoot, 'gold' | 'items'>,
  ): LootDistributionResult {
    const emptyAssignments = new Map<string, Pick<CombatLoot, 'gold' | 'items'>>();
    if (loot.gold <= 0 && loot.items.length === 0) {
      return { success: true, message: '沒有可分配的戰利品。', assignments: emptyAssignments };
    }

    const party = this.getParty(looterId);
    if (!party) {
      emptyAssignments.set(looterId, this.cloneLoot(loot));
      return { success: true, message: '戰利品已自由分配。', assignments: emptyAssignments };
    }

    const eligibleIds = party.memberIds.filter(id => participantIds.includes(id));
    const candidates = eligibleIds.length > 0 ? eligibleIds : [looterId];
    switch (party.lootMode) {
      case 'leader': {
        const recipientId = candidates.includes(party.leaderId) ? party.leaderId : looterId;
        emptyAssignments.set(recipientId, this.cloneLoot(loot));
        return { success: true, message: '戰利品已分配給隊長。', assignments: emptyAssignments };
      }
      case 'round_robin': {
        const recipientId = candidates[party.lootRoundRobinIndex % candidates.length];
        party.lootRoundRobinIndex = (party.lootRoundRobinIndex + 1) % candidates.length;
        emptyAssignments.set(recipientId, this.cloneLoot(loot));
        return { success: true, message: '戰利品已依輪流分配。', assignments: emptyAssignments };
      }
      case 'need_greed': {
        return {
          success: true,
          message: '戰利品已依需求/貪婪分配。',
          assignments: this.distributeNeedGreedLoot(party, candidates, loot),
        };
      }
      case 'free':
      default:
        emptyAssignments.set(looterId, this.cloneLoot(loot));
        return { success: true, message: '戰利品已自由分配。', assignments: emptyAssignments };
    }
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

  followMember(followerId: string, targetId: string): { success: boolean; message: string } {
    if (followerId === targetId) {
      return { success: false, message: '不能跟隨自己。' };
    }

    const party = this.getParty(followerId);
    if (!party || !party.memberIds.includes(targetId)) {
      return { success: false, message: '只能跟隨同隊伍成員。' };
    }

    this.followTargets.set(followerId, targetId);
    const targetName = this.getCharacterFn?.(targetId)?.name ?? '隊友';
    const followerName = this.getCharacterFn?.(followerId)?.name ?? '隊友';
    sendToCharacter(targetId, 'system', {
      text: `${followerName} 開始跟隨你。`,
    });
    return { success: true, message: `你開始跟隨 ${targetName}。` };
  }

  unfollowMember(followerId: string): { success: boolean; message: string } {
    if (!this.followTargets.has(followerId)) {
      return { success: false, message: '你目前沒有跟隨任何隊友。' };
    }
    const targetId = this.followTargets.get(followerId);
    this.followTargets.delete(followerId);
    if (targetId) {
      const followerName = this.getCharacterFn?.(followerId)?.name ?? '隊友';
      sendToCharacter(targetId, 'system', {
        text: `${followerName} 停止跟隨你。`,
      });
    }
    return { success: true, message: '你停止跟隨隊友。' };
  }

  getFollowersOf(targetId: string): string[] {
    const party = this.getParty(targetId);
    if (!party) return [];
    return party.memberIds.filter(memberId => this.followTargets.get(memberId) === targetId);
  }

  // ──────────────────────────────────────────────────────────
  //  內部輔助
  // ──────────────────────────────────────────────────────────

  private clearFollowLinks(characterId: string): void {
    this.followTargets.delete(characterId);
    for (const [followerId, targetId] of this.followTargets) {
      if (targetId === characterId) this.followTargets.delete(followerId);
    }
  }

  /** 廣播隊伍狀態更新給所有成員 */
  private broadcastPartyUpdate(partyId: string): void {
    const party = this.parties.get(partyId);
    if (!party) return;

    for (const memberId of party.memberIds) {
      this.sendPartyUpdateToCharacter(memberId, party);
    }
  }

  private sendPartyUpdateToCharacter(characterId: string, party: Party): void {
    const members = party.memberIds.map(id => {
      const char = this.getCharacterFn?.(id);
      return {
        id,
        name: char?.name ?? '未知',
        classId: char?.classId ?? 'adventurer',
        level: char?.level ?? 1,
        hp: char?.hp ?? 0,
        maxHp: char?.maxHp ?? 1,
        activeMountId: char?.activeMountId ?? null,
        mounted: char?.mounted ?? false,
      };
    });

    sendToCharacter(characterId, 'party', {
      id: party.id,
      leaderId: party.leaderId,
      members,
    });
  }

  private sendEmptyParty(characterId: string): void {
    sendToCharacter(characterId, 'party', {
      id: '',
      leaderId: null,
      members: [],
    });
  }

  private distributeNeedGreedLoot(
    party: Party,
    candidates: string[],
    loot: Pick<CombatLoot, 'gold' | 'items'>,
  ): Map<string, Pick<CombatLoot, 'gold' | 'items'>> {
    const assignments = new Map<string, Pick<CombatLoot, 'gold' | 'items'>>();
    const grant = (characterId: string, gold: number, items: { itemId: string; quantity: number }[]) => {
      const existing = assignments.get(characterId) ?? { gold: 0, items: [] };
      existing.gold += gold;
      existing.items.push(...items.map(item => ({ ...item })));
      assignments.set(characterId, existing);
    };

    const goldPerMember = Math.floor(loot.gold / candidates.length);
    let remainder = loot.gold - goldPerMember * candidates.length;
    for (const id of candidates) {
      grant(id, goldPerMember + (remainder > 0 ? 1 : 0), []);
      if (remainder > 0) remainder--;
    }

    for (const item of loot.items) {
      const recipientId = candidates[party.lootRoundRobinIndex % candidates.length];
      party.lootRoundRobinIndex = (party.lootRoundRobinIndex + 1) % candidates.length;
      grant(recipientId, 0, [item]);
    }

    return assignments;
  }

  private cloneLoot(loot: Pick<CombatLoot, 'gold' | 'items'>): Pick<CombatLoot, 'gold' | 'items'> {
    return {
      gold: loot.gold,
      items: loot.items.map(item => ({ ...item })),
    };
  }

  /** 清理過期邀請 */
  private cleanupExpiredInvites(): void {
    const now = Date.now();
    for (const [key, invite] of this.pendingInvites) {
      if (now > invite.expiresAt) {
        this.pendingInvites.delete(key);
        this.clearPartyInviteModal(invite.targetId);
      }
    }
  }

  private clearPartyInviteModal(targetId: string): void {
    sendToCharacter(targetId, 'party_invite', { status: 'cleared' });
  }
}
