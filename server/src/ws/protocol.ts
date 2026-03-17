// WebSocket 訊息解析與路由

import type { WebSocket } from 'ws';
import type { ClientMessage, ShopItem, ShopCategory, ShopItemRarity } from '@game/shared';
import type { WsSession } from './handler.js';
import {
  sendToSession, sendError, sendSystem, updatePing,
  bindCharacter, getSession,
} from './handler.js';
import { createCharacter, getCharacterById, getCharacterByName, getCharactersByUserId, addInventoryItem, hasUserEntitlement, addUserEntitlement, getTransactions } from '../db/queries.js';
import { handleCommand } from '../game/commands.js';
import { world } from '../game/state.js';
import { validateToken, getAuthSession, getCachedToken } from '../auth/arinova.js';
import { CurrencyManager, PREMIUM_ITEMS } from '../economy/currency.js';
import { ITEM_DEFS } from '@game/shared';
import { Arinova } from '@arinova-ai/spaces-sdk';

/** Shared CurrencyManager instance */
const currencyManager = new CurrencyManager();

/** Per-user per-item purchase lock to prevent concurrent duplicate purchases */
const purchaseLocks = new Map<string, Set<string>>();

function acquirePurchaseLock(userId: string, itemId: string): boolean {
  let userLocks = purchaseLocks.get(userId);
  if (!userLocks) {
    userLocks = new Set();
    purchaseLocks.set(userId, userLocks);
  }
  if (userLocks.has(itemId)) return false;
  userLocks.add(itemId);
  return true;
}

function releasePurchaseLock(userId: string, itemId: string): void {
  const userLocks = purchaseLocks.get(userId);
  if (userLocks) {
    userLocks.delete(itemId);
    if (userLocks.size === 0) purchaseLocks.delete(userId);
  }
}

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

    case 'open_shop':
      handleOpenShop(session).catch((err) => {
        console.error(`[WS] 開啟商店錯誤 (${session.sessionId}):`, err);
        sendError(session.sessionId, '無法開啟商店。');
      });
      break;

    case 'purchase':
      handlePurchase(session, message.payload).catch((err) => {
        console.error(`[WS] 購買錯誤 (${session.sessionId}):`, err);
        sendToSession(session.sessionId, 'purchase_result', {
          success: false,
          message: '購買處理失敗，請稍後再試。',
        });
      });
      break;

    case 'get_transactions':
      handleGetTransactions(session);
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

  // 決定 verifiedUserId：已驗證 session > token 驗證
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
    // 無 token 且無已驗證 session — 拒絕連線
    sendError(session.sessionId, '請使用 Arinova 帳號登入');
    return;
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

// ──────────────────────────────────────────────────────────
//  商店相關
// ──────────────────────────────────────────────────────────

/** 根據物品屬性推斷稀有度 */
function inferRarity(buyPrice: number): ShopItemRarity {
  if (buyPrice >= 2500) return 'legendary';
  if (buyPrice >= 1000) return 'epic';
  if (buyPrice >= 300) return 'rare';
  if (buyPrice >= 100) return 'uncommon';
  return 'common';
}

/** 將 ItemDef type 映射到 ShopCategory */
function mapCategory(type: string): ShopCategory | null {
  if (type === 'weapon') return 'weapon';
  if (type === 'armor' || type === 'accessory') return 'armor';
  if (type === 'consumable') return 'consumable';
  return null;
}

/** 建立商店物品列表 */
function buildShopItems(): ShopItem[] {
  const items: ShopItem[] = [];

  for (const def of Object.values(ITEM_DEFS)) {
    if (def.buyPrice <= 0) continue; // 不可購買的物品
    const category = mapCategory(def.type);
    if (!category) continue;

    items.push({
      id: def.id,
      name: def.name,
      description: def.description,
      price: def.buyPrice,
      category,
      rarity: inferRarity(def.buyPrice),
      levelReq: def.levelReq,
      stats: def.stats as Record<string, number> | undefined,
    });
  }

  // 加入 Premium 商品作為消耗品
  for (const premItem of Object.values(PREMIUM_ITEMS)) {
    items.push({
      id: premItem.id,
      name: premItem.name,
      description: premItem.description,
      price: premItem.price,
      category: 'consumable',
      rarity: 'epic',
      levelReq: 1,
    });
  }

  return items;
}

/** 處理開啟商店 */
async function handleOpenShop(session: WsSession): Promise<void> {
  if (!session.userId) {
    sendError(session.sessionId, '請先登入。');
    return;
  }

  const items = buildShopItems();

  // 取得餘額
  let balance = 0;
  const token = getCachedToken(session.userId);
  if (token) {
    try {
      const result = await Arinova.economy.balance(token);
      if (result && typeof result.balance === 'number') {
        balance = result.balance;
      }
    } catch {
      // 餘額查詢失敗，使用 0
    }
  }

  sendToSession(session.sessionId, 'shop_items', { items, balance });
}

/** 處理購買 */
async function handlePurchase(
  session: WsSession,
  payload: { itemId: string },
): Promise<void> {
  if (!session.userId || !session.characterId) {
    sendError(session.sessionId, '請先登入並選擇角色。');
    return;
  }

  const { itemId } = payload;

  // 並發鎖：同一 user 同一 item 不能同時處理兩個購買請求
  if (!acquirePurchaseLock(session.userId, itemId)) {
    sendToSession(session.sessionId, 'purchase_result', {
      success: false,
      message: '該商品正在購買處理中，請稍候。',
      itemId,
    });
    return;
  }

  try {
  // 先檢查是否為 Premium 商品
  const premItem = PREMIUM_ITEMS[itemId];
  if (premItem) {
    // 檢查 user-level entitlement（跨角色，per-user）
    if (hasUserEntitlement(session.userId, itemId)) {
      sendToSession(session.sessionId, 'purchase_result', {
        success: false,
        message: `你已經擁有「${premItem.name}」，無法重複購買。`,
        itemId,
        itemName: premItem.name,
      });
      return;
    }

    const result = await currencyManager.purchasePremiumItem(
      session.userId,
      session.characterId,
      itemId,
    );

    // 取得更新後的餘額
    let newBalance: number | undefined;
    const token = getCachedToken(session.userId);
    if (token) {
      try {
        const balResult = await Arinova.economy.balance(token);
        if (balResult && typeof balResult.balance === 'number') {
          newBalance = balResult.balance;
        }
      } catch {
        // 非關鍵錯誤
      }
    }

    // 購買成功後：記錄 user-level entitlement + 加入角色背包
    if (result.success) {
      addUserEntitlement(session.userId, itemId);
      addInventoryItem(session.characterId, itemId, 1);
    }

    sendToSession(session.sessionId, 'purchase_result', {
      success: result.success,
      message: result.message,
      itemId,
      itemName: premItem.name,
      newBalance,
    });

    if (newBalance !== undefined) {
      sendToSession(session.sessionId, 'balance_update', { balance: newBalance });
    }

    // 購買成功後重新發送商店列表，讓 client 更新已購標記
    if (result.success) {
      const items = buildShopItems();
      sendToSession(session.sessionId, 'shop_items', { items, balance: newBalance ?? 0 });
    }
    return;
  }

  // 一般物品：使用 Arinova 代幣購買
  const itemDef = ITEM_DEFS[itemId];
  if (!itemDef || itemDef.buyPrice <= 0) {
    sendToSession(session.sessionId, 'purchase_result', {
      success: false,
      message: '商品不存在或無法購買。',
    });
    return;
  }

  const chargeResult = await currencyManager.chargeTokens(
    session.userId,
    itemDef.buyPrice,
    `購買「${itemDef.name}」`,
  );

  if (!chargeResult.success) {
    sendToSession(session.sessionId, 'purchase_result', {
      success: false,
      message: `購買失敗：${chargeResult.error ?? '餘額不足'}`,
      itemId,
      itemName: itemDef.name,
    });
    return;
  }

  // Blocker 1: 將物品加入玩家背包
  addInventoryItem(session.characterId, itemId, 1);

  sendToSession(session.sessionId, 'purchase_result', {
    success: true,
    message: `成功購買「${itemDef.name}」！`,
    itemId,
    itemName: itemDef.name,
    newBalance: chargeResult.newBalance,
  });

  if (chargeResult.newBalance !== undefined) {
    sendToSession(session.sessionId, 'balance_update', { balance: chargeResult.newBalance });
  }

  sendSystem(session.sessionId, `成功購買「${itemDef.name}」！剩餘 AT：${chargeResult.newBalance}`);
  } finally {
    releasePurchaseLock(session.userId, itemId);
  }
}

/** 處理取得交易紀錄 */
function handleGetTransactions(session: WsSession): void {
  if (!session.userId) {
    sendError(session.sessionId, '請先登入。');
    return;
  }

  // Issue 1: 從資料庫讀取交易紀錄
  const dbRecords = getTransactions(session.userId, 50);
  const transactions = dbRecords.map((r) => ({
    id: r.transaction_id,
    itemName: r.description,
    amount: r.amount,
    type: r.type === 'charge' ? 'purchase' as const : 'reward' as const,
    timestamp: r.timestamp,
  }));

  sendToSession(session.sessionId, 'transaction_history', { transactions });
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
