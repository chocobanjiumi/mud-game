// WebSocket 連線管理

import type { WebSocket } from 'ws';
import type { ServerMessage, ServerMessageType } from '@game/shared';

/** 玩家 WebSocket 連線資訊 */
export interface WsSession {
  ws: WebSocket;
  sessionId: string;
  characterId: string | null;
  userId: string | null;
  lastPing: number;
}

/** 所有活躍連線 (sessionId → WsSession) */
const sessions = new Map<string, WsSession>();

/** characterId → sessionId 反向索引 */
const characterSessions = new Map<string, string>();

let sessionCounter = 0;

/** 建立新的 WebSocket 連線 */
export function createSession(ws: WebSocket): WsSession {
  sessionCounter += 1;
  const sessionId = `ws_${Date.now()}_${sessionCounter}`;

  const session: WsSession = {
    ws,
    sessionId,
    characterId: null,
    userId: null,
    lastPing: Date.now(),
  };

  sessions.set(sessionId, session);
  console.log(`[WS] 新連線: ${sessionId} (目前連線數: ${sessions.size})`);
  return session;
}

/** 綁定角色到連線 */
export function bindCharacter(sessionId: string, characterId: string, userId: string): void {
  const session = sessions.get(sessionId);
  if (!session) return;

  // 移除舊綁定
  if (session.characterId) {
    characterSessions.delete(session.characterId);
  }

  session.characterId = characterId;
  session.userId = userId;
  characterSessions.set(characterId, sessionId);
  console.log(`[WS] 角色綁定: ${sessionId} → ${characterId}`);
}

/** 移除連線 */
export function removeSession(sessionId: string): void {
  const session = sessions.get(sessionId);
  if (!session) return;

  if (session.characterId) {
    characterSessions.delete(session.characterId);
  }

  sessions.delete(sessionId);
  console.log(`[WS] 連線斷開: ${sessionId} (剩餘連線數: ${sessions.size})`);
}

/** 根據 sessionId 取得連線 */
export function getSession(sessionId: string): WsSession | undefined {
  return sessions.get(sessionId);
}

/** 根據 characterId 取得連線 */
export function getSessionByCharacterId(characterId: string): WsSession | undefined {
  const sessionId = characterSessions.get(characterId);
  if (!sessionId) return undefined;
  return sessions.get(sessionId);
}

/** 取得所有活躍連線 */
export function getAllSessions(): WsSession[] {
  return Array.from(sessions.values());
}

/** 取得線上人數 */
export function getOnlineCount(): number {
  return sessions.size;
}

// ─── 訊息傳送 ───

/** 傳送訊息給指定連線 */
export function sendToSession(sessionId: string, type: ServerMessageType, payload: Record<string, unknown>): void {
  const session = sessions.get(sessionId);
  if (!session || session.ws.readyState !== 1) return;

  const message: ServerMessage = {
    type,
    payload,
    timestamp: Date.now(),
  };

  try {
    session.ws.send(JSON.stringify(message));
  } catch (err) {
    console.error(`[WS] 傳送訊息失敗 (${sessionId}):`, err);
  }
}

/** 傳送訊息給指定角色 */
export function sendToCharacter(characterId: string, type: ServerMessageType, payload: Record<string, unknown>): void {
  const sessionId = characterSessions.get(characterId);
  if (sessionId) {
    sendToSession(sessionId, type, payload);
  }
}

/** 廣播訊息給所有連線 */
export function broadcast(type: ServerMessageType, payload: Record<string, unknown>): void {
  const message: ServerMessage = {
    type,
    payload,
    timestamp: Date.now(),
  };
  const data = JSON.stringify(message);

  for (const session of sessions.values()) {
    if (session.ws.readyState === 1) {
      try {
        session.ws.send(data);
      } catch {
        // 忽略傳送失敗
      }
    }
  }
}

/** 廣播給同房間的所有角色 */
export function broadcastToRoom(
  roomId: string,
  type: ServerMessageType,
  payload: Record<string, unknown>,
  getCharacterRoomId: (characterId: string) => string | null,
  excludeCharacterId?: string,
): void {
  for (const [charId, sessId] of characterSessions) {
    if (charId === excludeCharacterId) continue;
    const charRoomId = getCharacterRoomId(charId);
    if (charRoomId === roomId) {
      sendToSession(sessId, type, payload);
    }
  }
}

/** 傳送純文字敘述訊息 */
export function sendNarrative(sessionId: string, text: string, color?: string): void {
  sendToSession(sessionId, 'narrative', { text, color });
}

/** 傳送系統訊息 */
export function sendSystem(sessionId: string, text: string): void {
  sendToSession(sessionId, 'system', { text });
}

/** 傳送錯誤訊息 */
export function sendError(sessionId: string, text: string): void {
  sendToSession(sessionId, 'error', { text });
}

// ─── 心跳機制 ───

/** 更新心跳時間 */
export function updatePing(sessionId: string): void {
  const session = sessions.get(sessionId);
  if (session) {
    session.lastPing = Date.now();
  }
}

/** 清理超時連線 (30秒沒有心跳) */
export function cleanupStale(timeoutMs = 30000): void {
  const now = Date.now();
  for (const [sessionId, session] of sessions) {
    if (now - session.lastPing > timeoutMs) {
      console.log(`[WS] 清理超時連線: ${sessionId}`);
      try {
        session.ws.close();
      } catch {
        // 忽略
      }
      removeSession(sessionId);
    }
  }
}
