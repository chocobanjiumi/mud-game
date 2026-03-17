// 中央遊戲狀態 — 所有子系統的單例管理
// 提供便利的全域存取函式供 commands.ts / protocol.ts / agent.ts 使用

import { CombatEngine } from './combat.js';
import { WorldManager } from './world.js';
import { ClassChangeManager } from './class-change.js';
import { PartyManager } from './party.js';
import { TradeManager } from './trade.js';
import { DungeonManager } from './dungeon.js';
import { QuestManager } from './quest.js';
import { ClassQuestManager } from './class-quest.js';
import { PvPManager } from './pvp.js';
import { LeaderboardManager } from './leaderboard.js';
import { GuardianManager } from './guardian.js';
import { ensureEnhancementColumn } from './upgrade.js';
import { KingdomManager } from './kingdom.js';
import { BuildingManager } from './kingdom-building.js';
import { WarManager } from './kingdom-war.js';
import { TreasuryManager } from './kingdom-treasury.js';
import { DiplomacyManager } from './kingdom-diplomacy.js';
import {
  getCharacterById, getCharacterByName, saveCharacter,
  getInventory, getLearnedSkills,
  addInventoryItem, removeInventoryItem,
} from '../db/queries.js';
import type { Character } from '@game/shared';

// ============================================================
//  子系統單例
// ============================================================

export const world = new WorldManager();
export const combat = new CombatEngine();
export const classChange = new ClassChangeManager();
export const partyMgr = new PartyManager();
export const tradeMgr = new TradeManager();
export const dungeonMgr = new DungeonManager();
export const questMgr = new QuestManager();
export const classQuestMgr = new ClassQuestManager();
export const pvpMgr = new PvPManager();
export const leaderboardMgr = new LeaderboardManager();
export const guardianMgr = new GuardianManager();
export const kingdomMgr = new KingdomManager();
export const buildingMgr = new BuildingManager(kingdomMgr);
export const warMgr = new WarManager();
export const treasuryMgr = new TreasuryManager();
export const diplomacyMgr = new DiplomacyManager();

// ============================================================
//  初始化 — 在 index.ts 呼叫
// ============================================================

export function initGameSystems(): void {
  // WorldManager
  world.init();

  // PvPManager
  pvpMgr.init();

  // PartyManager：設定角色查詢
  partyMgr.setCharacterLookup((id) => getCharacterById(id) ?? undefined);

  // TradeManager：設定外部依賴
  tradeMgr.setDependencies({
    getCharacter: (id) => getCharacterById(id) ?? undefined,
    getInventory: (characterId) => {
      return getInventory(characterId).map(i => ({
        itemId: i.itemId,
        quantity: i.quantity,
      }));
    },
    transferItem: (fromId, toId, itemId, quantity) => {
      const ok = removeInventoryItem(fromId, itemId, quantity);
      if (!ok) return false;
      addInventoryItem(toId, itemId, quantity);
      return true;
    },
    transferGold: (fromId, toId, amount) => {
      const from = getCharacterById(fromId);
      const to = getCharacterById(toId);
      if (!from || !to || from.gold < amount) return false;
      from.gold -= amount;
      to.gold += amount;
      saveCharacter(from);
      saveCharacter(to);
      return true;
    },
  });

  // ClassQuestManager：注入 ClassChangeManager
  classQuestMgr.setClassChangeManager(classChange);

  // BuildingManager：從資料庫載入王國房間
  buildingMgr.loadFromDb();

  // WarManager / TreasuryManager / DiplomacyManager
  warMgr.init();
  treasuryMgr.init();
  diplomacyMgr.init();

  // 強化系統：確保 DB 欄位存在
  ensureEnhancementColumn();

  console.log('[Game] 所有遊戲子系統初始化完成');
}

// ============================================================
//  便利函式 — 戰鬥
// ============================================================

export function isInCombat(playerId: string): boolean {
  return combat.isInCombat(playerId);
}

export function getPlayerCombatId(characterId: string): string | undefined {
  return combat.getPlayerCombatId(characterId);
}

// ============================================================
//  便利函式 — 角色
// ============================================================

export function getCharacter(id: string): Character | null {
  return getCharacterById(id);
}

export function findCharacterByName(name: string): Character | null {
  return getCharacterByName(name);
}

// ============================================================
//  關閉 — 在 server shutdown 呼叫
// ============================================================

export function shutdownGameSystems(): void {
  world.shutdown();
  pvpMgr.shutdown();
  partyMgr.destroy();
  tradeMgr.destroy();
  dungeonMgr.shutdown();
}
