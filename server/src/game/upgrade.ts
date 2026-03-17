// 裝備強化系統
// upgrade / enhance 指令的核心邏輯

import { getDb } from '../db/schema.js';
import {
  getCharacterById, saveCharacter, getInventory, getEquippedItems,
} from '../db/queries.js';
import { ITEM_DEFS } from '@game/shared';
import type { Character, EquipSlot } from '@game/shared';

// ============================================================
//  常數
// ============================================================

/** 強化成功率（按等級區間） */
const SUCCESS_RATES: { maxLevel: number; rate: number }[] = [
  { maxLevel: 5, rate: 0.90 },
  { maxLevel: 8, rate: 0.70 },
  { maxLevel: 10, rate: 0.50 },
  { maxLevel: 12, rate: 0.30 },
  { maxLevel: 14, rate: 0.15 },
  { maxLevel: 15, rate: 0.05 },
];

/** 最大強化等級 */
const MAX_ENHANCEMENT = 15;

/** 每級強化增加基礎屬性的百分比 */
const BONUS_PER_LEVEL = 0.03; // 3%

// ============================================================
//  DB Migration
// ============================================================

/** 確保 inventory 表有 enhancement_level 欄位 */
export function ensureEnhancementColumn(): void {
  const db = getDb();
  const columns = db.prepare("PRAGMA table_info(inventory)").all() as { name: string }[];
  const columnNames = new Set(columns.map(c => c.name));

  if (!columnNames.has('enhancement_level')) {
    db.exec(`ALTER TABLE inventory ADD COLUMN enhancement_level INTEGER DEFAULT 0`);
    console.log('[DB] Migration: 已新增 enhancement_level 欄位至 inventory 表');
  }
}

// ============================================================
//  查詢 / 更新
// ============================================================

/** 取得裝備的強化等級 */
export function getEnhancementLevel(characterId: string, itemId: string): number {
  const db = getDb();
  const row = db.prepare(
    'SELECT enhancement_level FROM inventory WHERE character_id = ? AND item_id = ? AND equipped = 1',
  ).get(characterId, itemId) as { enhancement_level: number } | undefined;
  return row?.enhancement_level ?? 0;
}

/** 設定裝備的強化等級 */
function setEnhancementLevel(characterId: string, itemId: string, level: number): void {
  const db = getDb();
  db.prepare(
    'UPDATE inventory SET enhancement_level = ? WHERE character_id = ? AND item_id = ? AND equipped = 1',
  ).run(level, characterId, itemId);
}

// ============================================================
//  強化邏輯
// ============================================================

/** 取得強化成功率 */
function getSuccessRate(currentLevel: number): number {
  const nextLevel = currentLevel + 1;
  for (const tier of SUCCESS_RATES) {
    if (nextLevel <= tier.maxLevel) return tier.rate;
  }
  return 0; // 超過最大等級
}

/** 取得強化費用 */
function getUpgradeCost(itemId: string, currentLevel: number): number {
  const def = ITEM_DEFS[itemId];
  if (!def) return Infinity;
  const basePrice = def.buyPrice || 100;
  return Math.floor(basePrice * (1 + currentLevel * 0.5));
}

export interface UpgradeResult {
  success: boolean;
  message: string;
  newLevel?: number;
  cost?: number;
  rate?: number;
}

/**
 * 嘗試強化裝備
 * @param characterId 角色 ID
 * @param slot 裝備欄位（'weapon' | 'body' | 'head' | 'hands' | 'feet' | 'accessory'）
 */
export function upgradeItem(characterId: string, slot: EquipSlot = 'weapon'): UpgradeResult {
  const char = getCharacterById(characterId);
  if (!char) return { success: false, message: '角色不存在。' };

  // 找出該欄位的裝備
  const equipped = getEquippedItems(characterId);
  const equippedInSlot = equipped.find(item => {
    const def = ITEM_DEFS[item.itemId];
    return def?.equipSlot === slot;
  });

  if (!equippedInSlot) {
    const slotName = slotToChineseName(slot);
    return { success: false, message: `你沒有裝備${slotName}。` };
  }

  const itemId = equippedInSlot.itemId;
  const def = ITEM_DEFS[itemId];
  if (!def) return { success: false, message: '物品資料不存在。' };

  const currentLevel = getEnhancementLevel(characterId, itemId);

  if (currentLevel >= MAX_ENHANCEMENT) {
    return { success: false, message: `「${def.name}」已達到最大強化等級 +${MAX_ENHANCEMENT}！` };
  }

  const cost = getUpgradeCost(itemId, currentLevel);
  if (char.gold < cost) {
    return { success: false, message: `金幣不足！強化需要 ${cost} 金幣，你只有 ${char.gold} 金幣。` };
  }

  // 扣除金幣
  char.gold -= cost;
  saveCharacter(char);

  const rate = getSuccessRate(currentLevel);
  const roll = Math.random();

  if (roll < rate) {
    // 成功
    const newLevel = currentLevel + 1;
    setEnhancementLevel(characterId, itemId, newLevel);
    return {
      success: true,
      message: `✦ 強化成功！「${def.name}」已強化至 +${newLevel}！（花費 ${cost} 金幣）`,
      newLevel,
      cost,
      rate: Math.round(rate * 100),
    };
  } else {
    // 失敗（不降級）
    return {
      success: false,
      message: `強化失敗…「${def.name} +${currentLevel}」維持不變。（花費 ${cost} 金幣，成功率 ${Math.round(rate * 100)}%）`,
      newLevel: currentLevel,
      cost,
      rate: Math.round(rate * 100),
    };
  }
}

/** 取得裝備的強化屬性加成 */
export function getEnhancedStats(itemId: string, enhancementLevel: number): Record<string, number> {
  const def = ITEM_DEFS[itemId];
  if (!def?.stats || enhancementLevel <= 0) return {};

  const bonus: Record<string, number> = {};
  const multiplier = enhancementLevel * BONUS_PER_LEVEL;

  for (const [key, value] of Object.entries(def.stats)) {
    if (typeof value === 'number' && value > 0) {
      bonus[key] = Math.floor(value * multiplier);
    }
  }

  return bonus;
}

/** 查看強化資訊 */
export function getUpgradeInfo(characterId: string, slot: EquipSlot = 'weapon'): string {
  const char = getCharacterById(characterId);
  if (!char) return '角色不存在。';

  const equipped = getEquippedItems(characterId);
  const equippedInSlot = equipped.find(item => {
    const def = ITEM_DEFS[item.itemId];
    return def?.equipSlot === slot;
  });

  if (!equippedInSlot) {
    const slotName = slotToChineseName(slot);
    return `你沒有裝備${slotName}。`;
  }

  const itemId = equippedInSlot.itemId;
  const def = ITEM_DEFS[itemId];
  if (!def) return '物品資料不存在。';

  const currentLevel = getEnhancementLevel(characterId, itemId);
  const cost = getUpgradeCost(itemId, currentLevel);
  const rate = getSuccessRate(currentLevel);

  let info = `═══ 強化資訊 ═══\n`;
  info += `裝備：${def.name} +${currentLevel}\n`;
  if (currentLevel >= MAX_ENHANCEMENT) {
    info += `已達到最大強化等級！\n`;
  } else {
    info += `下一級：+${currentLevel + 1}\n`;
    info += `成功率：${Math.round(rate * 100)}%\n`;
    info += `費用：${cost} 金幣\n`;
  }
  info += `強化加成：每級 +3% 基礎屬性`;

  return info;
}

// ============================================================
//  工具
// ============================================================

function slotToChineseName(slot: EquipSlot): string {
  const names: Record<string, string> = {
    weapon: '武器',
    head: '頭部裝備',
    body: '身體裝備',
    hands: '手部裝備',
    feet: '腳部裝備',
    accessory: '飾品',
  };
  return names[slot] ?? slot;
}
