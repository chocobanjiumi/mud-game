// 中央遊戲狀態 — 所有子系統的單例管理
// 提供便利的全域存取函式供 commands.ts / protocol.ts / agent.ts 使用

import { CombatEngine } from './combat.js';
import { WorldManager } from './world.js';
import { ClassChangeManager } from './class-change.js';
import { PartyManager } from './party.js';
import { TradeManager } from './trade.js';
import { DungeonManager } from './dungeon.js';
import { QuestManager } from './quest.js';
import { PvPManager } from './pvp.js';
import { LeaderboardManager } from './leaderboard.js';
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
export const pvpMgr = new PvPManager();
export const leaderboardMgr = new LeaderboardManager();

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
