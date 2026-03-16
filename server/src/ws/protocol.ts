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
      handleLogin(session, message.payload);
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
function handleLogin(
  session: WsSession,
  payload: { userId: string; characterId?: string; accessToken?: string },
): void {
  const { userId, characterId } = payload;

  if (!userId) {
    sendError(session.sessionId, '缺少 userId。');
    return;
  }

  // 如果指定了角色 ID，直接載入
  if (characterId) {
    const character = getCharacterById(characterId);
    if (!character) {
      sendError(session.sessionId, '角色不存在。');
      return;
    }
    if (character.userId !== userId) {
      sendError(session.sessionId, '該角色不屬於此帳號。');
      return;
    }

    bindCharacter(session.sessionId, character.id, userId);
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
  const characters = getCharactersByUserId(userId);

  if (characters.length === 0) {
    // 嘗試用名稱查找（登入畫面送的是角色名稱）
    const charByName = getCharacterByName(userId);
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
    bindCharacter(session.sessionId, character.id, userId);
    world.placePlayer(character.id, character.roomId);
    sendToSession(session.sessionId, 'login_success', {
      character,
      message: `歡迎回來，${character.name}！`,
    });
    handleCommand(session, 'look');
    return;
  }

  session.userId = userId;

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
  const { name, userId } = payload;

  if (!name || !userId) {
    sendError(session.sessionId, '缺少角色名稱或 userId。');
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
