import { getDb } from '../db/schema.js';

export interface DailyEconomyStats {
  date: string;
  goldProduced: number;
  goldSpent: number;
  auctionSalesTotal: number;
  auctionSalesCount: number;
  enhanceMaterialsConsumed: number;
  reforgeMaterialsConsumed: number;
}

export function ensureEconomyStatsTables(): void {
  getDb().exec(`
    CREATE TABLE IF NOT EXISTS economy_daily_stats (
      date TEXT PRIMARY KEY,
      gold_produced INTEGER DEFAULT 0,
      gold_spent INTEGER DEFAULT 0,
      auction_sales_total INTEGER DEFAULT 0,
      auction_sales_count INTEGER DEFAULT 0,
      enhance_materials_consumed INTEGER DEFAULT 0,
      reforge_materials_consumed INTEGER DEFAULT 0
    );
  `);
}

export function recordGoldProduced(amount: number, date = currentEconomyDate()): void {
  incrementDailyColumn('gold_produced', amount, date);
}

export function recordGoldSpent(amount: number, date = currentEconomyDate()): void {
  incrementDailyColumn('gold_spent', amount, date);
}

export function recordAuctionSale(finalPrice: number, date = currentEconomyDate()): void {
  if (finalPrice <= 0) return;
  ensureDailyRow(date);
  getDb().prepare(
    `UPDATE economy_daily_stats
     SET auction_sales_total = auction_sales_total + ?,
         auction_sales_count = auction_sales_count + 1
     WHERE date = ?`,
  ).run(finalPrice, date);
}

export function recordEnhanceMaterialConsumed(count: number, date = currentEconomyDate()): void {
  incrementDailyColumn('enhance_materials_consumed', count, date);
}

export function recordReforgeMaterialConsumed(count: number, date = currentEconomyDate()): void {
  incrementDailyColumn('reforge_materials_consumed', count, date);
}

export function getDailyEconomyStats(date = currentEconomyDate()): DailyEconomyStats {
  ensureDailyRow(date);
  const row = getDb().prepare('SELECT * FROM economy_daily_stats WHERE date = ?').get(date) as {
    date: string;
    gold_produced: number;
    gold_spent: number;
    auction_sales_total: number;
    auction_sales_count: number;
    enhance_materials_consumed: number;
    reforge_materials_consumed: number;
  };
  return {
    date: row.date,
    goldProduced: row.gold_produced,
    goldSpent: row.gold_spent,
    auctionSalesTotal: row.auction_sales_total,
    auctionSalesCount: row.auction_sales_count,
    enhanceMaterialsConsumed: row.enhance_materials_consumed,
    reforgeMaterialsConsumed: row.reforge_materials_consumed,
  };
}

export function getAveragePlayerGold(): number {
  const row = getDb().prepare('SELECT AVG(gold) AS average_gold FROM characters').get() as { average_gold: number | null };
  return row.average_gold ?? 0;
}

export function getAverageAuctionSalePrice(date = currentEconomyDate()): number {
  const stats = getDailyEconomyStats(date);
  if (stats.auctionSalesCount === 0) return 0;
  return stats.auctionSalesTotal / stats.auctionSalesCount;
}

export function getHighQualityEquipmentCirculation(): number {
  const row = getDb().prepare(
    "SELECT COUNT(*) AS count FROM item_instances WHERE quality IN ('rare', 'epic', 'legendary', 'mythic')",
  ).get() as { count: number };
  return row.count;
}

export function currentEconomyDate(): string {
  return new Date().toISOString().slice(0, 10);
}

function incrementDailyColumn(column: string, amount: number, date: string): void {
  if (amount <= 0) return;
  ensureDailyRow(date);
  getDb().prepare(`UPDATE economy_daily_stats SET ${column} = ${column} + ? WHERE date = ?`).run(amount, date);
}

function ensureDailyRow(date: string): void {
  ensureEconomyStatsTables();
  getDb().prepare('INSERT OR IGNORE INTO economy_daily_stats (date) VALUES (?)').run(date);
}
