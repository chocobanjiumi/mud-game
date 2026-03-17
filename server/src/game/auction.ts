// 拍賣系統 — AuctionManager

import { getDb } from '../db/schema.js';
import {
  getCharacterById, saveCharacter,
  addInventoryItem, removeInventoryItem, getInventory,
} from '../db/queries.js';
import { ITEM_DEFS } from '@game/shared';
import { nanoid } from 'nanoid';

// ============================================================
//  型別定義
// ============================================================

export interface AuctionRecord {
  id: string;
  seller_id: string;
  item_id: string;
  item_count: number;
  min_price: number;
  buyout_price: number | null;
  current_bid: number;
  current_bidder_id: string | null;
  duration: number;
  created_at: number;
  expires_at: number;
  status: string; // active / sold / expired / cancelled
}

// ============================================================
//  AuctionManager
// ============================================================

export class AuctionManager {

  /** 確保資料表存在 */
  init(): void {
    const db = getDb();
    db.exec(`
      CREATE TABLE IF NOT EXISTS auctions (
        id TEXT PRIMARY KEY,
        seller_id TEXT NOT NULL,
        item_id TEXT NOT NULL,
        item_count INTEGER DEFAULT 1,
        min_price INTEGER NOT NULL,
        buyout_price INTEGER,
        current_bid INTEGER DEFAULT 0,
        current_bidder_id TEXT,
        duration INTEGER NOT NULL,
        created_at INTEGER NOT NULL,
        expires_at INTEGER NOT NULL,
        status TEXT DEFAULT 'active'
      );
      CREATE INDEX IF NOT EXISTS idx_auctions_status ON auctions(status);
      CREATE INDEX IF NOT EXISTS idx_auctions_seller ON auctions(seller_id);
      CREATE INDEX IF NOT EXISTS idx_auctions_bidder ON auctions(current_bidder_id);
      CREATE INDEX IF NOT EXISTS idx_auctions_expires ON auctions(expires_at);
    `);
  }

  // ─── 上架物品 ───

  listItem(
    sellerId: string,
    itemId: string,
    count: number,
    minPrice: number,
    buyoutPrice: number | undefined,
    durationHours: number,
  ): { ok: boolean; message: string } {
    const seller = getCharacterById(sellerId);
    if (!seller) return { ok: false, message: '找不到角色資料。' };

    const def = ITEM_DEFS[itemId];
    if (!def) return { ok: false, message: `找不到物品：${itemId}` };

    // Validate duration
    if (![12, 24, 48].includes(durationHours)) {
      return { ok: false, message: '拍賣時長只能選擇 12、24 或 48 小時。' };
    }

    if (minPrice < 1) return { ok: false, message: '最低出價必須大於 0。' };
    if (buyoutPrice !== undefined && buyoutPrice <= minPrice) {
      return { ok: false, message: '直購價必須高於最低出價。' };
    }

    // Check inventory
    const inv = getInventory(sellerId);
    const slot = inv.find(i => i.itemId === itemId && !i.equipped);
    if (!slot || slot.quantity < count) {
      return { ok: false, message: `背包中沒有足夠的「${def.name}」（需要 ${count}，擁有 ${slot?.quantity ?? 0}）。` };
    }

    // Listing fee: 5% of min_price
    const listingFee = Math.max(1, Math.floor(minPrice * 0.05));
    if (seller.gold < listingFee) {
      return { ok: false, message: `上架手續費 ${listingFee} 金幣不足（你有 ${seller.gold} 金幣）。` };
    }

    // Deduct fee and item
    seller.gold -= listingFee;
    saveCharacter(seller);
    removeInventoryItem(sellerId, itemId, count);

    const now = Math.floor(Date.now() / 1000);
    const durationSeconds = durationHours * 3600;
    const id = nanoid(10);

    getDb().prepare(`
      INSERT INTO auctions (id, seller_id, item_id, item_count, min_price, buyout_price,
        current_bid, current_bidder_id, duration, created_at, expires_at, status)
      VALUES (?, ?, ?, ?, ?, ?, 0, NULL, ?, ?, ?, 'active')
    `).run(id, sellerId, itemId, count, minPrice, buyoutPrice ?? null, durationSeconds, now, now + durationSeconds);

    return {
      ok: true,
      message:
        `成功上架「${def.name}」x${count}！\n` +
        `  拍賣 ID：${id}\n` +
        `  最低出價：${minPrice} 金幣\n` +
        (buyoutPrice ? `  直購價：${buyoutPrice} 金幣\n` : '') +
        `  時長：${durationHours} 小時\n` +
        `  上架手續費：${listingFee} 金幣`,
    };
  }

  // ─── 搜尋拍賣 ───

  searchAuctions(keyword?: string, _category?: string, _maxLevel?: number): string {
    const db = getDb();
    let rows: AuctionRecord[];

    if (keyword) {
      // Search by item name (via ITEM_DEFS) or item_id
      const allActive = db.prepare(
        "SELECT * FROM auctions WHERE status = 'active' ORDER BY created_at DESC LIMIT 50"
      ).all() as AuctionRecord[];

      const kw = keyword.toLowerCase();
      rows = allActive.filter(a => {
        const def = ITEM_DEFS[a.item_id];
        return a.item_id.includes(kw) || (def && def.name.includes(keyword));
      });
    } else {
      rows = db.prepare(
        "SELECT * FROM auctions WHERE status = 'active' ORDER BY created_at DESC LIMIT 20"
      ).all() as AuctionRecord[];
    }

    if (rows.length === 0) return '目前沒有符合條件的拍賣品。';

    const lines = ['═══ 拍賣行 ═══', ''];
    for (const a of rows) {
      const def = ITEM_DEFS[a.item_id];
      const name = def ? def.name : a.item_id;
      const timeLeft = a.expires_at - Math.floor(Date.now() / 1000);
      const hours = Math.max(0, Math.floor(timeLeft / 3600));
      const mins = Math.max(0, Math.floor((timeLeft % 3600) / 60));
      lines.push(
        `[${a.id}] ${name} x${a.item_count}` +
        `  |  目前出價：${a.current_bid || a.min_price} 金幣` +
        (a.buyout_price ? `  |  直購：${a.buyout_price}` : '') +
        `  |  剩餘：${hours}h${mins}m`,
      );
    }
    return lines.join('\n');
  }

  // ─── 出價 ───

  placeBid(auctionId: string, bidderId: string, amount: number): { ok: boolean; message: string } {
    const db = getDb();

    // 使用 transaction + optimistic locking 防止 race condition
    const txn = db.transaction(() => {
      const auction = db.prepare("SELECT * FROM auctions WHERE id = ? AND status = 'active'").get(auctionId) as AuctionRecord | undefined;
      if (!auction) return { ok: false, message: '找不到此拍賣品或已結束。' };

      if (auction.seller_id === bidderId) return { ok: false, message: '不能對自己的拍賣品出價。' };

      const minBid = auction.current_bid > 0
        ? Math.ceil(auction.current_bid * 1.1)
        : auction.min_price;

      if (amount < minBid) {
        return { ok: false, message: `出價必須至少 ${minBid} 金幣（目前出價的 110% 或最低出價）。` };
      }

      const bidder = getCharacterById(bidderId);
      if (!bidder) return { ok: false, message: '找不到角色資料。' };
      if (bidder.gold < amount) return { ok: false, message: `金幣不足（需要 ${amount}，你有 ${bidder.gold}）。` };

      // Optimistic lock: 確保 current_bid 沒有被其他人改掉
      const updated = db.prepare(
        "UPDATE auctions SET current_bid = ?, current_bidder_id = ? WHERE id = ? AND status = 'active' AND current_bid = ?"
      ).run(amount, bidderId, auctionId, auction.current_bid);
      if (updated.changes === 0) return { ok: false, message: '出價失敗，拍賣狀態已變更，請重試。' };

      // Refund previous bidder
      if (auction.current_bidder_id && auction.current_bid > 0) {
        const prevBidder = getCharacterById(auction.current_bidder_id);
        if (prevBidder) {
          prevBidder.gold += auction.current_bid;
          saveCharacter(prevBidder);
        }
      }

      // Hold gold from new bidder
      bidder.gold -= amount;
      saveCharacter(bidder);

      const def = ITEM_DEFS[auction.item_id];
      return {
        ok: true,
        message: `成功對「${def?.name ?? auction.item_id}」出價 ${amount} 金幣！`,
      };
    });

    return txn() as { ok: boolean; message: string };
  }

  // ─── 直購 ───

  buyout(auctionId: string, buyerId: string): { ok: boolean; message: string } {
    const db = getDb();

    // 使用 transaction + optimistic locking 防止 race condition
    const txn = db.transaction(() => {
      // Optimistic lock: 只更新仍為 active 的拍賣
      const updated = db.prepare(
        "UPDATE auctions SET status = 'sold', current_bidder_id = ? WHERE id = ? AND status = 'active'"
      ).run(buyerId, auctionId);
      if (updated.changes === 0) return { ok: false, message: '此拍賣品已被他人買走或已結束。' };

      const auction = db.prepare('SELECT * FROM auctions WHERE id = ?').get(auctionId) as AuctionRecord;
      if (!auction.buyout_price) {
        // 回滾狀態
        db.prepare("UPDATE auctions SET status = 'active', current_bidder_id = NULL WHERE id = ?").run(auctionId);
        return { ok: false, message: '此拍賣品沒有設定直購價。' };
      }
      if (auction.seller_id === buyerId) {
        db.prepare("UPDATE auctions SET status = 'active', current_bidder_id = ? WHERE id = ?").run(auction.current_bidder_id, auctionId);
        return { ok: false, message: '不能直購自己的拍賣品。' };
      }

      const buyer = getCharacterById(buyerId);
      if (!buyer || buyer.gold < auction.buyout_price) {
        db.prepare("UPDATE auctions SET status = 'active', current_bidder_id = ? WHERE id = ?").run(auction.current_bidder_id, auctionId);
        return { ok: false, message: `金幣不足（需要 ${auction.buyout_price}，你有 ${buyer?.gold ?? 0}）。` };
      }

      // Refund previous bidder
      if (auction.current_bidder_id && auction.current_bidder_id !== buyerId && auction.current_bid > 0) {
        const prevBidder = getCharacterById(auction.current_bidder_id);
        if (prevBidder) {
          prevBidder.gold += auction.current_bid;
          saveCharacter(prevBidder);
        }
      }

      // Update final bid info
      db.prepare('UPDATE auctions SET current_bid = ?, current_bidder_id = ? WHERE id = ?')
        .run(auction.buyout_price, buyerId, auctionId);

      // Transfer gold: buyer -> seller
      buyer.gold -= auction.buyout_price;
      saveCharacter(buyer);

      const seller = getCharacterById(auction.seller_id);
      if (seller) {
        seller.gold += auction.buyout_price;
        saveCharacter(seller);
      }

      // Transfer item to buyer
      addInventoryItem(buyerId, auction.item_id, auction.item_count);

      const def = ITEM_DEFS[auction.item_id];
      return {
        ok: true,
        message: `成功直購「${def?.name ?? auction.item_id}」x${auction.item_count}，花費 ${auction.buyout_price} 金幣！`,
      };
    });

    return txn() as { ok: boolean; message: string };
  }

  // ─── 我的拍賣 ───

  getMyAuctions(characterId: string): string {
    const db = getDb();
    const rows = db.prepare(
      "SELECT * FROM auctions WHERE seller_id = ? AND status = 'active' ORDER BY created_at DESC"
    ).all(characterId) as AuctionRecord[];

    if (rows.length === 0) return '你目前沒有上架中的拍賣品。';

    const lines = ['═══ 我的拍賣 ═══', ''];
    for (const a of rows) {
      const def = ITEM_DEFS[a.item_id];
      const name = def ? def.name : a.item_id;
      const timeLeft = a.expires_at - Math.floor(Date.now() / 1000);
      const hours = Math.max(0, Math.floor(timeLeft / 3600));
      const mins = Math.max(0, Math.floor((timeLeft % 3600) / 60));
      lines.push(
        `[${a.id}] ${name} x${a.item_count}` +
        `  |  目前出價：${a.current_bid || '無'}` +
        (a.buyout_price ? `  |  直購：${a.buyout_price}` : '') +
        `  |  剩餘：${hours}h${mins}m`,
      );
    }

    // Also show bids
    const bids = db.prepare(
      "SELECT * FROM auctions WHERE current_bidder_id = ? AND status = 'active' ORDER BY created_at DESC"
    ).all(characterId) as AuctionRecord[];
    if (bids.length > 0) {
      lines.push('', '── 我的出價 ──', '');
      for (const a of bids) {
        const def = ITEM_DEFS[a.item_id];
        const name = def ? def.name : a.item_id;
        lines.push(`[${a.id}] ${name} x${a.item_count}  |  我的出價：${a.current_bid}`);
      }
    }
    return lines.join('\n');
  }

  // ─── 取消拍賣 ───

  cancelAuction(auctionId: string, sellerId: string): { ok: boolean; message: string } {
    const db = getDb();
    const auction = db.prepare("SELECT * FROM auctions WHERE id = ? AND status = 'active'").get(auctionId) as AuctionRecord | undefined;
    if (!auction) return { ok: false, message: '找不到此拍賣品或已結束。' };
    if (auction.seller_id !== sellerId) return { ok: false, message: '只能取消自己的拍賣品。' };
    if (auction.current_bidder_id) return { ok: false, message: '已有人出價，無法取消拍賣。' };

    // Return item to seller
    addInventoryItem(sellerId, auction.item_id, auction.item_count);
    db.prepare("UPDATE auctions SET status = 'cancelled' WHERE id = ?").run(auctionId);

    const def = ITEM_DEFS[auction.item_id];
    return {
      ok: true,
      message: `已取消拍賣「${def?.name ?? auction.item_id}」x${auction.item_count}，物品已歸還。`,
    };
  }

  // ─── 拍賣詳情 ───

  getAuctionInfo(auctionId: string): string {
    const db = getDb();
    const auction = db.prepare('SELECT * FROM auctions WHERE id = ?').get(auctionId) as AuctionRecord | undefined;
    if (!auction) return '找不到此拍賣品。';

    const def = ITEM_DEFS[auction.item_id];
    const name = def ? def.name : auction.item_id;
    const timeLeft = auction.expires_at - Math.floor(Date.now() / 1000);
    const hours = Math.max(0, Math.floor(timeLeft / 3600));
    const mins = Math.max(0, Math.floor((timeLeft % 3600) / 60));

    const bidderName = auction.current_bidder_id
      ? (getCharacterById(auction.current_bidder_id)?.name ?? '未知')
      : '無';
    const sellerName = getCharacterById(auction.seller_id)?.name ?? '未知';

    return [
      `═══ 拍賣詳情 ═══`,
      ``,
      `物品：${name} x${auction.item_count}`,
      def?.description ? `說明：${def.description}` : '',
      `賣家：${sellerName}`,
      `最低出價：${auction.min_price} 金幣`,
      auction.buyout_price ? `直購價：${auction.buyout_price} 金幣` : '',
      `目前出價：${auction.current_bid || '無'} 金幣`,
      `目前最高出價者：${bidderName}`,
      `狀態：${auction.status}`,
      auction.status === 'active' ? `剩餘時間：${hours}h${mins}m` : '',
    ].filter(Boolean).join('\n');
  }

  // ─── 處理過期拍賣 ───

  processExpiredAuctions(): void {
    const db = getDb();
    const now = Math.floor(Date.now() / 1000);
    const expired = db.prepare(
      "SELECT * FROM auctions WHERE status = 'active' AND expires_at <= ?"
    ).all(now) as AuctionRecord[];

    for (const auction of expired) {
      if (auction.current_bidder_id && auction.current_bid > 0) {
        // Has bids: transfer item to highest bidder, gold to seller
        addInventoryItem(auction.current_bidder_id, auction.item_id, auction.item_count);

        const seller = getCharacterById(auction.seller_id);
        if (seller) {
          seller.gold += auction.current_bid;
          saveCharacter(seller);
        }

        db.prepare("UPDATE auctions SET status = 'sold' WHERE id = ?").run(auction.id);
      } else {
        // No bids: return item to seller
        addInventoryItem(auction.seller_id, auction.item_id, auction.item_count);
        db.prepare("UPDATE auctions SET status = 'expired' WHERE id = ?").run(auction.id);
      }
    }
  }
}
