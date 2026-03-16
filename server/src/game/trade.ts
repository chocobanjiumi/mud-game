// 交易系統 — TradeManager

import { randomUUID } from 'crypto';
import type { Character } from '@game/shared';
import { sendToCharacter } from '../ws/handler.js';

// ============================================================
//  型別
// ============================================================

export interface TradeOffer {
  items: { itemId: string; quantity: number }[];
  gold: number;
  confirmed: boolean;
}

export interface TradeSession {
  id: string;
  player1Id: string;
  player1Name: string;
  player2Id: string;
  player2Name: string;
  offer1: TradeOffer;
  offer2: TradeOffer;
  createdAt: number;
}

interface TradeRequest {
  fromId: string;
  fromName: string;
  expiresAt: number;
}

// ============================================================
//  TradeManager
// ============================================================

export class TradeManager {
  /** tradeId -> TradeSession */
  private activeTrades: Map<string, TradeSession> = new Map();
  /** playerId -> tradeId */
  private playerTradeMap: Map<string, string> = new Map();
  /** targetPlayerId -> TradeRequest */
  private pendingRequests: Map<string, TradeRequest> = new Map();

  /** 角色查詢 */
  private getCharacterFn: ((id: string) => Character | undefined) | null = null;
  /** 背包查詢 */
  private getInventoryFn:
    | ((characterId: string) => { itemId: string; quantity: number }[])
    | null = null;
  /** 轉移物品回呼 */
  private transferItemFn:
    | ((fromId: string, toId: string, itemId: string, quantity: number) => boolean)
    | null = null;
  /** 轉移金幣回呼 */
  private transferGoldFn:
    | ((fromId: string, toId: string, amount: number) => boolean)
    | null = null;

  /** 清理計時器 */
  private cleanupTimer: ReturnType<typeof setInterval> | null = null;

  constructor() {
    this.cleanupTimer = setInterval(() => this.cleanupExpired(), 15000);
  }

  /** 設定外部依賴 */
  setDependencies(opts: {
    getCharacter: (id: string) => Character | undefined;
    getInventory: (characterId: string) => { itemId: string; quantity: number }[];
    transferItem: (fromId: string, toId: string, itemId: string, quantity: number) => boolean;
    transferGold: (fromId: string, toId: string, amount: number) => boolean;
  }): void {
    this.getCharacterFn = opts.getCharacter;
    this.getInventoryFn = opts.getInventory;
    this.transferItemFn = opts.transferItem;
    this.transferGoldFn = opts.transferGold;
  }

  /** 銷毀 */
  destroy(): void {
    if (this.cleanupTimer) {
      clearInterval(this.cleanupTimer);
      this.cleanupTimer = null;
    }
  }

  // ──────────────────────────────────────────────────────────
  //  發起交易
  // ──────────────────────────────────────────────────────────

  /** 向另一位玩家發起交易請求 */
  initiateTrade(player1Id: string, player2Id: string): { success: boolean; message: string } {
    if (player1Id === player2Id) {
      return { success: false, message: '不能和自己交易。' };
    }

    if (this.playerTradeMap.has(player1Id)) {
      return { success: false, message: '你已經在交易中了。' };
    }

    if (this.playerTradeMap.has(player2Id)) {
      const char2 = this.getCharacterFn?.(player2Id);
      return { success: false, message: `${char2?.name ?? '對方'}正在交易中。` };
    }

    if (this.pendingRequests.has(player2Id)) {
      return { success: false, message: '對方已有待處理的交易請求。' };
    }

    const char1 = this.getCharacterFn?.(player1Id);
    const char2 = this.getCharacterFn?.(player2Id);
    const name1 = char1?.name ?? '未知';
    const name2 = char2?.name ?? '未知';

    this.pendingRequests.set(player2Id, {
      fromId: player1Id,
      fromName: name1,
      expiresAt: Date.now() + 30_000,
    });

    sendToCharacter(player2Id, 'system', {
      text: `${name1} 想要與你交易。輸入 "trade accept" 接受或 "trade decline" 拒絕。`,
    });

    return { success: true, message: `已向 ${name2} 發送交易請求。` };
  }

  // ──────────────────────────────────────────────────────────
  //  接受 / 拒絕
  // ──────────────────────────────────────────────────────────

  /** 接受交易請求 */
  acceptTrade(targetId: string): { success: boolean; message: string } {
    const req = this.pendingRequests.get(targetId);
    if (!req) {
      return { success: false, message: '你沒有待處理的交易請求。' };
    }

    if (Date.now() > req.expiresAt) {
      this.pendingRequests.delete(targetId);
      return { success: false, message: '交易請求已過期。' };
    }

    this.pendingRequests.delete(targetId);

    const char2 = this.getCharacterFn?.(targetId);
    const name2 = char2?.name ?? '未知';

    const tradeId = randomUUID();
    const trade: TradeSession = {
      id: tradeId,
      player1Id: req.fromId,
      player1Name: req.fromName,
      player2Id: targetId,
      player2Name: name2,
      offer1: { items: [], gold: 0, confirmed: false },
      offer2: { items: [], gold: 0, confirmed: false },
      createdAt: Date.now(),
    };

    this.activeTrades.set(tradeId, trade);
    this.playerTradeMap.set(req.fromId, tradeId);
    this.playerTradeMap.set(targetId, tradeId);

    sendToCharacter(req.fromId, 'trade', {
      action: 'started',
      tradeId,
      partner: name2,
    });
    sendToCharacter(targetId, 'trade', {
      action: 'started',
      tradeId,
      partner: req.fromName,
    });

    return {
      success: true,
      message: '交易開始！使用 "trade add <物品>" 放入物品，"trade gold <數量>" 設定金幣，"trade confirm" 確認，"trade cancel" 取消。',
    };
  }

  /** 拒絕交易請求 */
  declineTrade(targetId: string): { success: boolean; message: string } {
    const req = this.pendingRequests.get(targetId);
    if (!req) {
      return { success: false, message: '你沒有待處理的交易請求。' };
    }

    this.pendingRequests.delete(targetId);

    sendToCharacter(req.fromId, 'system', {
      text: '對方拒絕了交易請求。',
    });

    return { success: true, message: '你拒絕了交易請求。' };
  }

  // ──────────────────────────────────────────────────────────
  //  放入 / 移除物品
  // ──────────────────────────────────────────────────────────

  /** 放入物品到交易欄 */
  addItem(playerId: string, itemId: string, quantity: number = 1): { success: boolean; message: string } {
    const trade = this.getPlayerTrade(playerId);
    if (!trade) {
      return { success: false, message: '你不在交易中。' };
    }

    if (quantity <= 0) {
      return { success: false, message: '數量必須大於 0。' };
    }

    // 檢查背包中是否有足夠物品
    if (this.getInventoryFn) {
      const inv = this.getInventoryFn(playerId);
      const slot = inv.find(i => i.itemId === itemId);
      if (!slot || slot.quantity < quantity) {
        return { success: false, message: '背包中物品不足。' };
      }
    }

    // 重置雙方確認
    trade.offer1.confirmed = false;
    trade.offer2.confirmed = false;

    const offer = this.getPlayerOffer(trade, playerId);
    const existing = offer.items.find(i => i.itemId === itemId);
    if (existing) {
      existing.quantity += quantity;
    } else {
      offer.items.push({ itemId, quantity });
    }

    this.notifyTradeUpdate(trade);
    return { success: true, message: `已將物品加入交易欄。` };
  }

  /** 從交易欄移除物品 */
  removeItem(playerId: string, itemId: string, quantity: number = 1): { success: boolean; message: string } {
    const trade = this.getPlayerTrade(playerId);
    if (!trade) {
      return { success: false, message: '你不在交易中。' };
    }

    // 重置確認
    trade.offer1.confirmed = false;
    trade.offer2.confirmed = false;

    const offer = this.getPlayerOffer(trade, playerId);
    const existing = offer.items.find(i => i.itemId === itemId);
    if (!existing) {
      return { success: false, message: '交易欄中沒有這個物品。' };
    }

    existing.quantity -= quantity;
    if (existing.quantity <= 0) {
      offer.items = offer.items.filter(i => i.itemId !== itemId);
    }

    this.notifyTradeUpdate(trade);
    return { success: true, message: '已從交易欄移除物品。' };
  }

  // ──────────────────────────────────────────────────────────
  //  設定金幣
  // ──────────────────────────────────────────────────────────

  /** 設定交易金幣數量 */
  setGold(playerId: string, amount: number): { success: boolean; message: string } {
    const trade = this.getPlayerTrade(playerId);
    if (!trade) {
      return { success: false, message: '你不在交易中。' };
    }

    if (amount < 0) {
      return { success: false, message: '金幣數量不能為負數。' };
    }

    // 檢查金幣是否足夠
    const char = this.getCharacterFn?.(playerId);
    if (char && char.gold < amount) {
      return { success: false, message: `金幣不足！你只有 ${char.gold} 金幣。` };
    }

    // 重置確認
    trade.offer1.confirmed = false;
    trade.offer2.confirmed = false;

    const offer = this.getPlayerOffer(trade, playerId);
    offer.gold = amount;

    this.notifyTradeUpdate(trade);
    return { success: true, message: `已設定交易金幣為 ${amount}。` };
  }

  // ──────────────────────────────────────────────────────────
  //  確認 / 取消
  // ──────────────────────────────────────────────────────────

  /** 確認交易 */
  confirm(playerId: string): { success: boolean; message: string } {
    const trade = this.getPlayerTrade(playerId);
    if (!trade) {
      return { success: false, message: '你不在交易中。' };
    }

    const offer = this.getPlayerOffer(trade, playerId);

    // 最終確認前驗證金幣
    const char = this.getCharacterFn?.(playerId);
    if (char && char.gold < offer.gold) {
      return { success: false, message: '你的金幣不足以完成交易。' };
    }

    offer.confirmed = true;

    // 雙方都確認 → 執行交易
    if (trade.offer1.confirmed && trade.offer2.confirmed) {
      return this.executeTrade(trade);
    }

    const otherId = playerId === trade.player1Id ? trade.player2Id : trade.player1Id;
    sendToCharacter(otherId, 'system', {
      text: '對方已確認交易，等待你的確認。',
    });

    return { success: true, message: '你已確認交易，等待對方確認。' };
  }

  /** 取消交易 */
  cancel(playerId: string): { success: boolean; message: string } {
    const trade = this.getPlayerTrade(playerId);
    if (!trade) {
      return { success: false, message: '你不在交易中。' };
    }

    this.cancelTrade(trade, '對方取消了交易。');
    return { success: true, message: '交易已取消。' };
  }

  // ──────────────────────────────────────────────────────────
  //  執行交易（原子性）
  // ──────────────────────────────────────────────────────────

  private executeTrade(trade: TradeSession): { success: boolean; message: string } {
    // 先驗證雙方物品和金幣充足
    if (this.getInventoryFn && this.getCharacterFn) {
      // 驗證 Player 1
      const inv1 = this.getInventoryFn(trade.player1Id);
      for (const item of trade.offer1.items) {
        const slot = inv1.find(i => i.itemId === item.itemId);
        if (!slot || slot.quantity < item.quantity) {
          this.cancelTrade(trade, '物品不足，交易取消。');
          return { success: false, message: '交易失敗：你的物品不足。' };
        }
      }
      const char1 = this.getCharacterFn(trade.player1Id);
      if (char1 && char1.gold < trade.offer1.gold) {
        this.cancelTrade(trade, '金幣不足，交易取消。');
        return { success: false, message: '交易失敗：你的金幣不足。' };
      }

      // 驗證 Player 2
      const inv2 = this.getInventoryFn(trade.player2Id);
      for (const item of trade.offer2.items) {
        const slot = inv2.find(i => i.itemId === item.itemId);
        if (!slot || slot.quantity < item.quantity) {
          this.cancelTrade(trade, '物品不足，交易取消。');
          return { success: false, message: '交易失敗：對方物品不足。' };
        }
      }
      const char2 = this.getCharacterFn(trade.player2Id);
      if (char2 && char2.gold < trade.offer2.gold) {
        this.cancelTrade(trade, '金幣不足，交易取消。');
        return { success: false, message: '交易失敗：對方金幣不足。' };
      }
    }

    // 執行物品轉移：Player 1 → Player 2
    if (this.transferItemFn) {
      for (const item of trade.offer1.items) {
        if (!this.transferItemFn(trade.player1Id, trade.player2Id, item.itemId, item.quantity)) {
          this.cancelTrade(trade, '物品轉移失敗，交易取消。');
          return { success: false, message: '交易失敗：物品轉移出錯。' };
        }
      }

      // 執行物品轉移：Player 2 → Player 1
      for (const item of trade.offer2.items) {
        if (!this.transferItemFn(trade.player2Id, trade.player1Id, item.itemId, item.quantity)) {
          this.cancelTrade(trade, '物品轉移失敗，交易取消。');
          return { success: false, message: '交易失敗：物品轉移出錯。' };
        }
      }
    }

    // 執行金幣轉移
    if (this.transferGoldFn) {
      if (trade.offer1.gold > 0) {
        this.transferGoldFn(trade.player1Id, trade.player2Id, trade.offer1.gold);
      }
      if (trade.offer2.gold > 0) {
        this.transferGoldFn(trade.player2Id, trade.player1Id, trade.offer2.gold);
      }
    }

    // 通知雙方
    sendToCharacter(trade.player1Id, 'trade', { action: 'completed' });
    sendToCharacter(trade.player2Id, 'trade', { action: 'completed' });

    sendToCharacter(trade.player1Id, 'system', { text: '交易完成！' });
    sendToCharacter(trade.player2Id, 'system', { text: '交易完成！' });

    // 清理
    this.cleanupTrade(trade);

    return { success: true, message: '交易完成！' };
  }

  // ──────────────────────────────────────────────────────────
  //  查詢
  // ──────────────────────────────────────────────────────────

  /** 玩家是否在交易中 */
  isInTrade(playerId: string): boolean {
    return this.playerTradeMap.has(playerId);
  }

  /** 取得玩家的交易 */
  getPlayerTrade(playerId: string): TradeSession | null {
    const tradeId = this.playerTradeMap.get(playerId);
    if (!tradeId) return null;
    return this.activeTrades.get(tradeId) ?? null;
  }

  // ──────────────────────────────────────────────────────────
  //  內部輔助
  // ──────────────────────────────────────────────────────────

  private getPlayerOffer(trade: TradeSession, playerId: string): TradeOffer {
    return playerId === trade.player1Id ? trade.offer1 : trade.offer2;
  }

  private cancelTrade(trade: TradeSession, reason: string): void {
    sendToCharacter(trade.player1Id, 'trade', { action: 'cancelled' });
    sendToCharacter(trade.player2Id, 'trade', { action: 'cancelled' });

    sendToCharacter(trade.player1Id, 'system', { text: reason });
    sendToCharacter(trade.player2Id, 'system', { text: reason });

    this.cleanupTrade(trade);
  }

  private cleanupTrade(trade: TradeSession): void {
    this.playerTradeMap.delete(trade.player1Id);
    this.playerTradeMap.delete(trade.player2Id);
    this.activeTrades.delete(trade.id);
  }

  private notifyTradeUpdate(trade: TradeSession): void {
    const payload = {
      action: 'update',
      tradeId: trade.id,
      offer1: {
        items: trade.offer1.items,
        gold: trade.offer1.gold,
        confirmed: trade.offer1.confirmed,
      },
      offer2: {
        items: trade.offer2.items,
        gold: trade.offer2.gold,
        confirmed: trade.offer2.confirmed,
      },
    };

    sendToCharacter(trade.player1Id, 'trade', payload);
    sendToCharacter(trade.player2Id, 'trade', payload);
  }

  /** 清理過期交易請求和超時交易 */
  private cleanupExpired(): void {
    const now = Date.now();

    for (const [key, req] of this.pendingRequests) {
      if (now > req.expiresAt) {
        this.pendingRequests.delete(key);
      }
    }

    for (const [_id, trade] of this.activeTrades) {
      if (now - trade.createdAt > 300_000) { // 5 分鐘超時
        this.cancelTrade(trade, '交易超時，已自動取消。');
      }
    }
  }
}
