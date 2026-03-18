// 交易所系統 — MarketManager
// 買賣掛單、搜尋、價格歷史

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

export type OrderType = 'sell' | 'buy';
export type OrderStatus = 'active' | 'filled' | 'cancelled';

export interface MarketOrder {
  id: string;
  sellerId: string;
  itemId: string;
  count: number;
  pricePerUnit: number;
  orderType: OrderType;
  status: OrderStatus;
  createdAt: number;
  filledAt: number | null;
}

interface MarketOrderRow {
  id: string;
  seller_id: string;
  item_id: string;
  count: number;
  price_per_unit: number;
  order_type: string;
  status: string;
  created_at: number;
  filled_at: number | null;
}

// ============================================================
//  MarketManager
// ============================================================

export class MarketManager {

  ensureTables(): void {
    try {
      getDb().exec(`
        CREATE TABLE IF NOT EXISTS market_orders (
          id TEXT PRIMARY KEY,
          seller_id TEXT NOT NULL,
          item_id TEXT NOT NULL,
          count INTEGER DEFAULT 1,
          price_per_unit INTEGER NOT NULL,
          order_type TEXT DEFAULT 'sell',
          status TEXT DEFAULT 'active',
          created_at INTEGER,
          filled_at INTEGER
        );
        CREATE INDEX IF NOT EXISTS idx_market_orders_item ON market_orders(item_id, status);
        CREATE INDEX IF NOT EXISTS idx_market_orders_seller ON market_orders(seller_id, status);
      `);
    } catch { /* tables may already exist */ }
  }

  // ──────────────────────────────────────────────────────────
  //  賣出掛單
  // ──────────────────────────────────────────────────────────

  placeSellOrder(
    sellerId: string,
    itemId: string,
    count: number,
    pricePerUnit: number,
  ): { success: boolean; message: string; orderId?: string } {
    if (count <= 0 || pricePerUnit <= 0) {
      return { success: false, message: '數量與價格必須大於 0。' };
    }

    const itemDef = ITEM_DEFS[itemId];
    if (!itemDef) {
      return { success: false, message: `找不到物品「${itemId}」。` };
    }

    // 檢查背包是否有足夠物品
    const inv = getInventory(sellerId);
    const owned = inv.find(i => i.itemId === itemId && !i.equipped);
    if (!owned || owned.quantity < count) {
      return { success: false, message: `背包中的「${itemDef.name}」數量不足。需要 ${count}，擁有 ${owned?.quantity ?? 0}。` };
    }

    // 從背包移除物品
    const removed = removeInventoryItem(sellerId, itemId, count);
    if (!removed) {
      return { success: false, message: '移除物品失敗。' };
    }

    const orderId = randomUUID();
    const now = Math.floor(Date.now() / 1000);

    try {
      getDb().prepare(
        'INSERT INTO market_orders (id, seller_id, item_id, count, price_per_unit, order_type, status, created_at) VALUES (?, ?, ?, ?, ?, ?, ?, ?)',
      ).run(orderId, sellerId, itemId, count, pricePerUnit, 'sell', 'active', now);
    } catch {
      // 回退：歸還物品
      addInventoryItem(sellerId, itemId, count);
      return { success: false, message: '建立掛單失敗。' };
    }

    return {
      success: true,
      message: `成功上架：${itemDef.name} x${count}，每個 ${pricePerUnit} 金幣（訂單 ID：${orderId.slice(0, 8)}）`,
      orderId,
    };
  }

  // ──────────────────────────────────────────────────────────
  //  買入掛單
  // ──────────────────────────────────────────────────────────

  placeBuyOrder(
    buyerId: string,
    itemId: string,
    count: number,
    pricePerUnit: number,
  ): { success: boolean; message: string; orderId?: string } {
    if (count <= 0 || pricePerUnit <= 0) {
      return { success: false, message: '數量與價格必須大於 0。' };
    }

    const itemDef = ITEM_DEFS[itemId];
    if (!itemDef) {
      return { success: false, message: `找不到物品「${itemId}」。` };
    }

    const totalCost = count * pricePerUnit;
    const buyer = getCharacterById(buyerId);
    if (!buyer || buyer.gold < totalCost) {
      return { success: false, message: `金幣不足！需要 ${totalCost} 金幣。` };
    }

    // 扣除金幣
    buyer.gold -= totalCost;
    saveCharacter(buyer);

    const orderId = randomUUID();
    const now = Math.floor(Date.now() / 1000);

    try {
      getDb().prepare(
        'INSERT INTO market_orders (id, seller_id, item_id, count, price_per_unit, order_type, status, created_at) VALUES (?, ?, ?, ?, ?, ?, ?, ?)',
      ).run(orderId, buyerId, itemId, count, pricePerUnit, 'buy', 'active', now);
    } catch {
      buyer.gold += totalCost;
      saveCharacter(buyer);
      return { success: false, message: '建立掛單失敗。' };
    }

    return {
      success: true,
      message: `成功掛單求購：${itemDef.name} x${count}，每個 ${pricePerUnit} 金幣（訂單 ID：${orderId.slice(0, 8)}）`,
      orderId,
    };
  }

  // ──────────────────────────────────────────────────────────
  //  買入（成交賣單）
  // ──────────────────────────────────────────────────────────

  fillOrder(
    orderId: string,
    buyerId: string,
  ): { success: boolean; message: string } {
    const order = this.getOrderById(orderId);
    if (!order) {
      return { success: false, message: '找不到該訂單。' };
    }
    if (order.status !== 'active') {
      return { success: false, message: '該訂單已不再有效。' };
    }

    if (order.orderType === 'sell') {
      return this.fillSellOrder(order, buyerId);
    } else {
      return this.fillBuyOrder(order, buyerId);
    }
  }

  private fillSellOrder(order: MarketOrder, buyerId: string): { success: boolean; message: string } {
    if (order.sellerId === buyerId) {
      return { success: false, message: '不能購買自己的掛單。' };
    }

    const totalCost = order.count * order.pricePerUnit;
    const buyer = getCharacterById(buyerId);
    if (!buyer || buyer.gold < totalCost) {
      return { success: false, message: `金幣不足！需要 ${totalCost} 金幣。` };
    }

    const db = getDb();
    const txn = db.transaction(() => {
      // Optimistic lock: 只成交仍為 active 的訂單
      const updated = db.prepare(
        "UPDATE market_orders SET status = 'filled', filled_at = unixepoch() WHERE id = ? AND status = 'active'",
      ).run(order.id);
      if (updated.changes === 0) {
        return { success: false, message: '該訂單已被他人成交或已取消。' };
      }

      // 扣除買家金幣
      buyer.gold -= totalCost;
      saveCharacter(buyer);

      // 給予買家物品
      addInventoryItem(buyerId, order.itemId, order.count);

      // 給予賣家金幣
      const seller = getCharacterById(order.sellerId);
      if (seller) {
        seller.gold += totalCost;
        saveCharacter(seller);
      }

      const itemName = ITEM_DEFS[order.itemId]?.name ?? order.itemId;
      return {
        success: true,
        message: `成功購買 ${itemName} x${order.count}，花費 ${totalCost} 金幣。`,
        sellerId: order.sellerId,
      };
    });

    const result = txn();
    if (result.success && 'sellerId' in result) {
      sendToCharacter(result.sellerId as string, 'system', {
        text: `你在交易所掛賣的「${ITEM_DEFS[order.itemId]?.name ?? order.itemId}」已售出！收入 ${totalCost} 金幣。`,
      });
    }
    return { success: result.success, message: result.message };
  }

  private fillBuyOrder(order: MarketOrder, sellerId: string): { success: boolean; message: string } {
    if (order.sellerId === sellerId) {
      return { success: false, message: '不能成交自己的掛單。' };
    }

    // 賣家需要有物品
    const inv = getInventory(sellerId);
    const owned = inv.find(i => i.itemId === order.itemId && !i.equipped);
    if (!owned || owned.quantity < order.count) {
      return { success: false, message: '你沒有足夠的物品來成交此訂單。' };
    }

    const totalCost = order.count * order.pricePerUnit;

    const db = getDb();
    const txn = db.transaction(() => {
      // Optimistic lock: 只成交仍為 active 的訂單
      const updated = db.prepare(
        "UPDATE market_orders SET status = 'filled', filled_at = unixepoch() WHERE id = ? AND status = 'active'",
      ).run(order.id);
      if (updated.changes === 0) {
        return { success: false, message: '該訂單已被他人成交或已取消。' };
      }

      // 移除賣家物品
      removeInventoryItem(sellerId, order.itemId, order.count);

      // 給予賣家金幣
      const seller = getCharacterById(sellerId);
      if (seller) {
        seller.gold += totalCost;
        saveCharacter(seller);
      }

      // 給予買家物品（order.sellerId 是買家）
      addInventoryItem(order.sellerId, order.itemId, order.count);

      const itemName = ITEM_DEFS[order.itemId]?.name ?? order.itemId;
      return {
        success: true,
        message: `成功出售 ${itemName} x${order.count}，獲得 ${totalCost} 金幣。`,
        buyerId: order.sellerId,
      };
    });

    const result = txn();
    if (result.success && 'buyerId' in result) {
      sendToCharacter(result.buyerId as string, 'system', {
        text: `你在交易所掛單求購的「${ITEM_DEFS[order.itemId]?.name ?? order.itemId}」已成交！`,
      });
    }
    return { success: result.success, message: result.message };
  }

  // ──────────────────────────────────────────────────────────
  //  取消掛單
  // ──────────────────────────────────────────────────────────

  cancelOrder(
    orderId: string,
    characterId: string,
  ): { success: boolean; message: string } {
    const order = this.getOrderById(orderId);
    if (!order) {
      return { success: false, message: '找不到該訂單。' };
    }
    if (order.sellerId !== characterId) {
      return { success: false, message: '你只能取消自己的訂單。' };
    }
    if (order.status !== 'active') {
      return { success: false, message: '該訂單已不再有效。' };
    }

    // 退回物品或金幣
    if (order.orderType === 'sell') {
      addInventoryItem(characterId, order.itemId, order.count);
    } else {
      const totalCost = order.count * order.pricePerUnit;
      const char = getCharacterById(characterId);
      if (char) {
        char.gold += totalCost;
        saveCharacter(char);
      }
    }

    try {
      getDb().prepare(
        "UPDATE market_orders SET status = 'cancelled' WHERE id = ?",
      ).run(orderId);
    } catch { /* ignore */ }

    const itemName = ITEM_DEFS[order.itemId]?.name ?? order.itemId;
    return {
      success: true,
      message: `已取消訂單：${itemName} x${order.count}。${order.orderType === 'sell' ? '物品已退回背包。' : '金幣已退回。'}`,
    };
  }

  // ──────────────────────────────────────────────────────────
  //  搜尋
  // ──────────────────────────────────────────────────────────

  searchOrders(keyword?: string, type?: OrderType): MarketOrder[] {
    let sql = "SELECT * FROM market_orders WHERE status = 'active'";
    const params: unknown[] = [];

    if (type) {
      sql += ' AND order_type = ?';
      params.push(type);
    }

    if (keyword) {
      sql += ' AND item_id LIKE ?';
      params.push(`%${keyword}%`);
    }

    sql += ' ORDER BY created_at DESC LIMIT 50';

    try {
      const rows = getDb().prepare(sql).all(...params) as MarketOrderRow[];
      return rows.map(this.rowToOrder);
    } catch {
      return [];
    }
  }

  formatOrderList(orders: MarketOrder[]): string {
    if (orders.length === 0) {
      return '交易所目前沒有相關掛單。';
    }

    let text = '交易所掛單列表\n';
    text += '─'.repeat(50) + '\n';

    for (const order of orders) {
      const itemDef = ITEM_DEFS[order.itemId];
      const itemName = itemDef?.name ?? order.itemId;
      const typeLabel = order.orderType === 'sell' ? '出售' : '求購';
      const total = order.count * order.pricePerUnit;
      text += `[${order.id.slice(0, 8)}] ${typeLabel}：${itemName} x${order.count}　單價 ${order.pricePerUnit}G　總價 ${total}G\n`;
    }

    text += '\n使用 market buy <訂單ID> 購買賣單，或 market sell <訂單ID> 成交買單';
    return text;
  }

  // ──────────────────────────────────────────────────────────
  //  我的掛單
  // ──────────────────────────────────────────────────────────

  getMyOrders(characterId: string): MarketOrder[] {
    try {
      const rows = getDb().prepare(
        "SELECT * FROM market_orders WHERE seller_id = ? AND status = 'active' ORDER BY created_at DESC",
      ).all(characterId) as MarketOrderRow[];
      return rows.map(this.rowToOrder);
    } catch {
      return [];
    }
  }

  // ──────────────────────────────────────────────────────────
  //  價格歷史
  // ──────────────────────────────────────────────────────────

  getPriceHistory(itemId: string): { price: number; filledAt: number }[] {
    try {
      const rows = getDb().prepare(
        "SELECT price_per_unit, filled_at FROM market_orders WHERE item_id = ? AND status = 'filled' ORDER BY filled_at DESC LIMIT 20",
      ).all(itemId) as { price_per_unit: number; filled_at: number }[];
      return rows.map(r => ({ price: r.price_per_unit, filledAt: r.filled_at }));
    } catch {
      return [];
    }
  }

  formatPriceHistory(itemId: string): string {
    const itemDef = ITEM_DEFS[itemId];
    const itemName = itemDef?.name ?? itemId;
    const history = this.getPriceHistory(itemId);

    if (history.length === 0) {
      return `「${itemName}」沒有成交紀錄。`;
    }

    let text = `「${itemName}」最近成交紀錄\n`;
    text += '─'.repeat(30) + '\n';

    for (const h of history) {
      const date = new Date(h.filledAt * 1000).toLocaleDateString('zh-TW');
      text += `  ${date}　${h.price} G\n`;
    }

    return text;
  }

  // ──────────────────────────────────────────────────────────
  //  內部
  // ──────────────────────────────────────────────────────────

  private getOrderById(orderId: string): MarketOrder | undefined {
    try {
      // 支援短 ID 查詢
      let row: MarketOrderRow | undefined;
      if (orderId.length < 36) {
        row = getDb().prepare(
          'SELECT * FROM market_orders WHERE id LIKE ?',
        ).get(`${orderId}%`) as MarketOrderRow | undefined;
      } else {
        row = getDb().prepare(
          'SELECT * FROM market_orders WHERE id = ?',
        ).get(orderId) as MarketOrderRow | undefined;
      }
      return row ? this.rowToOrder(row) : undefined;
    } catch {
      return undefined;
    }
  }

  private rowToOrder(row: MarketOrderRow): MarketOrder {
    return {
      id: row.id,
      sellerId: row.seller_id,
      itemId: row.item_id,
      count: row.count,
      pricePerUnit: row.price_per_unit,
      orderType: row.order_type as OrderType,
      status: row.status as OrderStatus,
      createdAt: row.created_at,
      filledAt: row.filled_at,
    };
  }
}
