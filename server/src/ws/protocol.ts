// WebSocket 訊息解析與路由

import type { WebSocket } from 'ws';
import type { ClientMessage } from '@game/shared';
import type { WsSession } from './handler.js';
import {
  sendToSession, sendError, sendSystem, updatePing,
  bindCharacter, getSession,
} from './handler.js';
import { createCharacter, getCharacterById, getCharacterByName, getCharactersByUserId } from '../db/queries.js';
import { handleCommand } from '../game/commands.js';
import { world } from '../game/state.js';
import { validateToken, getAuthSession, createGuestSession, isGuestUser } from '../auth/arinova.js';

/** 處理收到的 WebSocket 訊息 */
export function handleMessage(session: WsSession, raw: string): void {
  let message: ClientMessage;

  try {
    message = JSON.parse(raw) as ClientMessage;
  } catch {
    sendError(session.sessionId, '無法解析訊息格式。');
    return;
  }

  switch (message.type) {
    case 'ping':
      handlePing(session);
      break;

    case 'login':
      handleLogin(session, message.payload).catch((err) => {
        console.error(`[WS] 登入處理錯誤 (${session.sessionId}):`, err);
        sendError(session.sessionId, '登入處理失敗，請稍後再試。');
      });
      break;

    case 'create_character':
      handleCreateCharacter(session, message.payload);
      break;

    case 'command':
      handlePlayerCommand(session, message.payload);
      break;

    default:
      sendError(session.sessionId, `未知的訊息類型: ${(message as { type: string }).type}`);
  }
}

/** 處理 Ping */
function handlePing(session: WsSession): void {
  updatePing(session.sessionId);
  sendToSession(session.sessionId, 'pong', {});
}

/** 處理登入 */
async function handleLogin(
  session: WsSession,
  payload: { userId: string; characterId?: string; accessToken?: string },
): Promise<void> {
  const { characterId, accessToken } = payload;

  // 決定 verifiedUserId：已驗證 session > token 驗證 > guest
  let verifiedUserId: string;

  if (session.userId) {
    // Session 已有驗證過的身分（例如第一步 token 驗證通過後選角色），直接沿用
    verifiedUserId = session.userId;
  } else if (accessToken) {
    // 首次登入帶 token，驗證後綁定到 session
    const arinovaUser = await validateToken(accessToken);
    if (!arinovaUser) {
      sendError(session.sessionId, 'Arinova 認證失敗，請重新登入。');
      return;
    }

    verifiedUserId = arinovaUser.id;
    session.userId = verifiedUserId;
    console.log(`[Auth] Token 驗證成功: ${arinovaUser.name} (${arinovaUser.id})`);

    // Send token balance to client if available
    try {
      const { Arinova } = await import('@arinova-ai/spaces-sdk');
      const result = await Arinova.economy.balance(accessToken);
      if (result && typeof result.balance === 'number') {
        sendToSession(session.sessionId, 'token_balance', { balance: result.balance });
      }
    } catch {
      // Token balance fetch failed — non-critical
    }
  } else {
    // 無 token 且無已驗證 session — 進入 guest mode
    const guestSession = createGuestSession();
    verifiedUserId = guestSession.userId;
    session.userId = verifiedUserId;
    console.log(`[Auth] 無 token，進入訪客模式: ${verifiedUserId}`);
  }

  // 如果指定了角色 ID，直接載入
  if (characterId) {
    const character = getCharacterById(characterId);
    if (!character) {
      sendError(session.sessionId, '角色不存在。');
      return;
    }
    if (character.userId !== verifiedUserId) {
      sendError(session.sessionId, '該角色不屬於此帳號。');
      return;
    }

    bindCharacter(session.sessionId, character.id, verifiedUserId);
    world.placePlayer(character.id, character.roomId);
    sendToSession(session.sessionId, 'login_success', {
      character,
      message: `歡迎回來，${character.name}！`,
    });

    // 自動 look
    handleCommand(session, 'look');
    return;
  }

  // 先用 userId 查，找不到再用角色名稱查
  const characters = getCharactersByUserId(verifiedUserId);

  if (characters.length === 0) {
    // 嘗試用名稱查找（登入畫面送的是角色名稱）
    const charByName = getCharacterByName(verifiedUserId);
    if (charByName) {
      bindCharacter(session.sessionId, charByName.id, charByName.userId);
      world.placePlayer(charByName.id, charByName.roomId);
      sendToSession(session.sessionId, 'login_success', {
        character: charByName,
        message: `歡迎回來，${charByName.name}！`,
      });
      handleCommand(session, 'look');
      return;
    }
  }

  if (characters.length === 1) {
    // 只有一個角色，直接登入
    const character = characters[0];
    bindCharacter(session.sessionId, character.id, verifiedUserId);
    world.placePlayer(character.id, character.roomId);
    sendToSession(session.sessionId, 'login_success', {
      character,
      message: `歡迎回來，${character.name}！`,
    });
    handleCommand(session, 'look');
    return;
  }

  sendToSession(session.sessionId, 'character_list', {
    characters,
    message: characters.length > 0
      ? '請選擇一個角色，或建立新角色。'
      : '你還沒有角色，請建立一個新角色。',
  });
}

/** 處理建立角色 */
function handleCreateCharacter(
  session: WsSession,
  payload: { name: string; userId: string },
): void {
  const { name } = payload;

  // 永遠使用 server 端驗證過的 userId，不信任 client 傳的值
  const userId = session.userId;
  if (!userId) {
    sendError(session.sessionId, '請先登入後再建立角色。');
    return;
  }

  if (!name) {
    sendError(session.sessionId, '缺少角色名稱。');
    return;
  }

  if (name.length < 2 || name.length > 12) {
    sendError(session.sessionId, '角色名稱長度須在 2-12 字之間。');
    return;
  }

  try {
    const character = createCharacter(userId, name);
    bindCharacter(session.sessionId, character.id, userId);
    world.placePlayer(character.id, character.roomId);

    sendToSession(session.sessionId, 'login_success', {
      character,
      message: `角色「${character.name}」建立成功！歡迎來到冒險世界。`,
    });

    sendNarrativeWelcome(session);

    // 自動 look
    handleCommand(session, 'look');
  } catch (err) {
    const errMsg = err instanceof Error ? err.message : '建立角色失敗';
    if (errMsg.includes('UNIQUE')) {
      sendError(session.sessionId, '此名稱已被使用，請換一個。');
    } else {
      sendError(session.sessionId, `建立角色失敗: ${errMsg}`);
    }
  }
}

/** 處理玩家指令 */
function handlePlayerCommand(session: WsSession, payload: string): void {
  if (!session.characterId) {
    sendError(session.sessionId, '請先登入並選擇角色。');
    return;
  }

  const command = typeof payload === 'string' ? payload.trim() : '';
  if (!command) {
    sendError(session.sessionId, '請輸入指令。');
    return;
  }

  handleCommand(session, command);
}

/** 新角色歡迎訊息 */
function sendNarrativeWelcome(session: WsSession): void {
  sendSystem(session.sessionId, '═══════════════════════════════════════');
  sendSystem(session.sessionId, '歡迎來到「幻境冒險」MUD 世界！');
  sendSystem(session.sessionId, '');
  sendSystem(session.sessionId, '基本指令：');
  sendSystem(session.sessionId, '  look     - 查看周圍環境');
  sendSystem(session.sessionId, '  go <方向> - 移動 (north/south/east/west)');
  sendSystem(session.sessionId, '  status   - 查看自身狀態');
  sendSystem(session.sessionId, '  inventory - 查看背包');
  sendSystem(session.sessionId, '  attack <目標> - 攻擊');
  sendSystem(session.sessionId, '  skill <技能> [目標] - 使用技能');
  sendSystem(session.sessionId, '═══════════════════════════════════════');
}
