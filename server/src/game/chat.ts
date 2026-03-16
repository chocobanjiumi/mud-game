// 聊天系統 — ChatManager

import type { Character } from '@game/shared';
import {
  sendToCharacter, broadcastToRoom, broadcast,
  getAllSessions,
} from '../ws/handler.js';

// ============================================================
//  常數
// ============================================================

/** 全域頻道冷卻時間（毫秒） */
const GLOBAL_CHAT_COOLDOWN_MS = 10_000;

// ============================================================
//  ChatManager
// ============================================================

export class ChatManager {
  /** characterId -> 上次全域發言時間戳 */
  private globalCooldowns: Map<string, number> = new Map();
  /** 角色查詢 */
  private getCharacterFn: ((id: string) => Character | undefined) | null = null;
  /** 取得角色房間的函式 */
  private getCharacterRoomFn: ((characterId: string) => string | null) | null = null;
  /** 取得隊伍成員 ID 的函式 */
  private getPartyMembersFn: ((characterId: string) => string[]) | null = null;

  /** 設定外部依賴 */
  setDependencies(opts: {
    getCharacter: (id: string) => Character | undefined;
    getCharacterRoom: (characterId: string) => string | null;
    getPartyMembers: (characterId: string) => string[];
  }): void {
    this.getCharacterFn = opts.getCharacter;
    this.getCharacterRoomFn = opts.getCharacterRoom;
    this.getPartyMembersFn = opts.getPartyMembers;
  }

  // ──────────────────────────────────────────────────────────
  //  房間聊天
  // ──────────────────────────────────────────────────────────

  /**
   * 房間聊天：廣播給同房間的所有玩家
   * 格式：[房間] PlayerName: message
   */
  roomChat(playerId: string, message: string): { success: boolean; message: string } {
    if (!message.trim()) {
      return { success: false, message: '請輸入訊息內容。' };
    }

    const char = this.getCharacterFn?.(playerId);
    if (!char) {
      return { success: false, message: '找不到角色資料。' };
    }

    const roomId = char.roomId;
    if (!roomId) {
      return { success: false, message: '你不在任何房間中。' };
    }

    const formattedText = `[房間] ${char.name}: ${message}`;

    // 廣播給同房間所有人（包含發言者自己）
    if (this.getCharacterRoomFn) {
      broadcastToRoom(
        roomId,
        'chat',
        {
          senderId: playerId,
          senderName: char.name,
          message,
          channel: 'room',
          formatted: formattedText,
        },
        this.getCharacterRoomFn,
      );
    }

    // 也發給自己
    sendToCharacter(playerId, 'chat', {
      senderId: playerId,
      senderName: char.name,
      message,
      channel: 'room',
      formatted: formattedText,
    });

    return { success: true, message: '' };
  }

  // ──────────────────────────────────────────────────────────
  //  隊伍聊天
  // ──────────────────────────────────────────────────────────

  /**
   * 隊伍聊天：廣播給所有隊伍成員
   * 格式：[隊伍] PlayerName: message
   */
  partyChat(playerId: string, message: string): { success: boolean; message: string } {
    if (!message.trim()) {
      return { success: false, message: '請輸入訊息內容。' };
    }

    const char = this.getCharacterFn?.(playerId);
    if (!char) {
      return { success: false, message: '找不到角色資料。' };
    }

    const memberIds = this.getPartyMembersFn?.(playerId) ?? [];
    if (memberIds.length === 0) {
      return { success: false, message: '你不在任何隊伍中。' };
    }

    const formattedText = `[隊伍] ${char.name}: ${message}`;

    const payload = {
      senderId: playerId,
      senderName: char.name,
      message,
      channel: 'party' as const,
      formatted: formattedText,
    };

    // 廣播給所有隊伍成員（包含自己）
    for (const memberId of memberIds) {
      sendToCharacter(memberId, 'chat', payload);
    }

    return { success: true, message: '' };
  }

  // ──────────────────────────────────────────────────────────
  //  全域聊天
  // ──────────────────────────────────────────────────────────

  /**
   * 全域聊天：廣播給所有線上玩家（有冷卻時間）
   * 格式：[全域] PlayerName: message
   */
  globalChat(playerId: string, message: string): { success: boolean; message: string } {
    if (!message.trim()) {
      return { success: false, message: '請輸入訊息內容。' };
    }

    const char = this.getCharacterFn?.(playerId);
    if (!char) {
      return { success: false, message: '找不到角色資料。' };
    }

    // 冷卻檢查
    const lastSent = this.globalCooldowns.get(playerId) ?? 0;
    const now = Date.now();
    const elapsed = now - lastSent;

    if (elapsed < GLOBAL_CHAT_COOLDOWN_MS) {
      const remaining = Math.ceil((GLOBAL_CHAT_COOLDOWN_MS - elapsed) / 1000);
      return {
        success: false,
        message: `全域頻道冷卻中，請等待 ${remaining} 秒。`,
      };
    }

    this.globalCooldowns.set(playerId, now);

    const formattedText = `[全域] ${char.name}: ${message}`;

    // 廣播給所有線上玩家
    broadcast('chat', {
      senderId: playerId,
      senderName: char.name,
      message,
      channel: 'global',
      formatted: formattedText,
    });

    return { success: true, message: '' };
  }

  // ──────────────────────────────────────────────────────────
  //  系統公告
  // ──────────────────────────────────────────────────────────

  /** 發送系統公告給所有線上玩家 */
  systemAnnouncement(text: string): void {
    broadcast('system', {
      text: `[系統公告] ${text}`,
    });
  }

  // ──────────────────────────────────────────────────────────
  //  清理
  // ──────────────────────────────────────────────────────────

  /** 玩家離線時清理冷卻資料 */
  playerOffline(playerId: string): void {
    this.globalCooldowns.delete(playerId);
  }
}
