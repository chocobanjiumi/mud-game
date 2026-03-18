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
import { CraftingManager } from './crafting.js';
import { AuctionManager } from './auction.js';
import { FishingManager } from './fishing.js';
import { AchievementManager } from './achievement.js';
import { PetManager } from './pet.js';
import { WorldEventManager } from './world-event.js';
import { WeatherManager } from './weather.js';
import { MailManager } from './mail.js';
import { FriendManager } from './friends.js';
import { DungeonMatchManager } from './dungeon-match.js';
import { TutorialManager } from './tutorial.js';
import { AutoBattleManager } from './auto-battle.js';
import { ClassQuest2Manager } from './class-quest-2.js';
import { SkillTreeManager } from './skill-tree.js';
import { MarketManager } from './market.js';
import { GuildManager } from './guild.js';
import { DailyRewardManager } from './daily-reward.js';
import {
  getCharacterById, getCharacterByName, saveCharacter,
  getInventory, getLearnedSkills,
  addInventoryItem, removeInventoryItem,
} from '../db/queries.js';
import type { Character } from '@game/shared';
import { ITEM_DEFS, getExpForLevel } from '@game/shared';
import { sendToCharacter } from '../ws/handler.js';
import { getRoom } from '../data/rooms.js';
import { LootCalculator } from './loot.js';

const lootCalc = new LootCalculator();

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
export const craftingMgr = new CraftingManager();
export const auctionMgr = new AuctionManager();
export const fishingMgr = new FishingManager();
export const achievementMgr = new AchievementManager();
export const petMgr = new PetManager();
export const worldEventMgr = new WorldEventManager();
export const weatherMgr = new WeatherManager();
export const mailMgr = new MailManager();
export const friendMgr = new FriendManager();
export const dungeonMatchMgr = new DungeonMatchManager();
export const tutorialMgr = new TutorialManager();
export const autoBattleMgr = new AutoBattleManager();
export const classQuest2Mgr = new ClassQuest2Manager();
export const skillTreeMgr = new SkillTreeManager();
export const marketMgr = new MarketManager();
export const guildMgr = new GuildManager();
export const dailyRewardMgr = new DailyRewardManager();

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

  // ClassQuest2Manager：注入 ClassChangeManager + 建表
  classQuest2Mgr.setClassChangeManager(classChange);
  classQuest2Mgr.ensureTables();

  // 技能樹系統
  skillTreeMgr.ensureTables();

  // 交易所系統
  marketMgr.ensureTables();

  // 公會系統
  guildMgr.ensureTables();

  // 每日簽到系統
  dailyRewardMgr.ensureTables();

  // DungeonManager：載入首通紀錄
  dungeonMgr.init();

  // 副本通關 → 公會經驗 +50 + 二轉任務鉤子
  dungeonMgr.setOnClearFn((playerIds, dungeonId, isSolo) => {
    let guildGranted = false;
    for (const pid of playerIds) {
      // 二轉任務：副本通關
      classQuest2Mgr.onDungeonClear(pid, dungeonId ?? '', isSolo ?? playerIds.length === 1);
      // 公會經驗（同公會只加一次）
      if (!guildGranted) {
        const gid = guildMgr.getCharacterGuildId(pid);
        if (gid) {
          guildMgr.addGuildExp(gid, 50);
          guildGranted = true;
        }
      }
    }
  });

  // 任務完成 → 公會經驗 +20
  questMgr.setOnQuestComplete((characterId) => {
    const gid = guildMgr.getCharacterGuildId(characterId);
    if (gid) {
      guildMgr.addGuildExp(gid, 20);
    }
  });

  // BuildingManager：從資料庫載入王國房間
  buildingMgr.loadFromDb();

  // WarManager / TreasuryManager / DiplomacyManager
  warMgr.init();
  treasuryMgr.init();
  diplomacyMgr.init();

  // 強化系統：確保 DB 欄位存在
  ensureEnhancementColumn();

  // 拍賣系統
  auctionMgr.init();

  // 釣魚系統
  fishingMgr.init();

  // 成就系統
  achievementMgr.ensureTables();

  // 寵物系統
  petMgr.ensureTables();

  // 世界事件系統
  worldEventMgr.init();

  // 天氣/日夜系統
  weatherMgr.init();

  // 郵件系統
  mailMgr.ensureTables();

  // 好友系統
  friendMgr.ensureTables();

  // 教學系統
  tutorialMgr.ensureTables();

  // 副本匹配系統
  dungeonMatchMgr.setCharacterLookup((id) => getCharacterById(id) ?? undefined);
  dungeonMatchMgr.setCreateInstanceFn((partyId, dungeonId, players) =>
    dungeonMgr.createInstance(partyId, dungeonId, players),
  );
  dungeonMatchMgr.init();

  // 拍賣過期處理（每 60 秒）
  setInterval(() => {
    auctionMgr.processExpiredAuctions();
  }, 60_000);

  // 寵物幸福度衰減（每小時）
  setInterval(() => {
    petMgr.decayHappiness();
  }, 3_600_000);

  // 自動戰鬥系統：設定回呼
  autoBattleMgr.setCallbacks({
    autoAttack: (characterId) => {
      const char = getCharacterById(characterId);
      if (!char) return;
      if (combat.isInCombat(characterId)) return;
      // 尋找房間內的怪物並自動攻擊
      const monster = world.getAliveMonsters(char.roomId)[0];
      if (!monster) return;
      // 透過事件通知 commands 層處理攻擊（避免循環依賴）
      // 簡化方式：直接發起戰鬥
      const combatId = combat.startCombat([char], [monster], (result) => {
        if (result === 'victory') {
          questMgr.updateProgress(char.id, 'kill', monster.monsterId);
          world.killMonster(char.roomId, monster.instanceId);

          // 計算並發放戰利品
          const freshChar = getCharacterById(characterId);
          if (freshChar) {
            const drops = lootCalc.calculateDrops(monster.def, freshChar.stats.luk);
            // 經驗值
            if (drops.exp > 0) {
              freshChar.exp += drops.exp;
              // 升級檢查
              let leveled = false;
              while (freshChar.exp >= getExpForLevel(freshChar.level + 1)) {
                freshChar.level++;
                freshChar.freePoints += 5;
                freshChar.maxHp += 10 + freshChar.stats.vit * 2;
                freshChar.hp = freshChar.maxHp;
                freshChar.maxMp += 5 + freshChar.stats.int;
                freshChar.mp = freshChar.maxMp;
                leveled = true;
              }
              if (leveled) {
                skillTreeMgr.grantPoint(characterId, freshChar);
                sendToCharacter(characterId, 'system', {
                  text: `【自動戰鬥】升級了！目前等級 Lv.${freshChar.level}`,
                });
              }
            }
            // 金幣
            if (drops.gold > 0) {
              freshChar.gold += drops.gold;
            }
            saveCharacter(freshChar);
            // 物品掉落
            for (const item of drops.items) {
              addInventoryItem(characterId, item.itemId, item.quantity);
            }
            // 通知
            const itemNames = drops.items.map(i => {
              const def = ITEM_DEFS[i.itemId];
              return `${def?.name ?? i.itemId} x${i.quantity}`;
            });
            const parts: string[] = [];
            if (drops.exp > 0) parts.push(`經驗 +${drops.exp}`);
            if (drops.gold > 0) parts.push(`金幣 +${drops.gold}`);
            parts.push(...itemNames);
            if (parts.length > 0) {
              sendToCharacter(characterId, 'system', {
                text: `【自動戰鬥】戰利品：${parts.join('、')}`,
              });
            }
          }

          // 繼續自動戰鬥
          autoBattleMgr.processAutoAction(characterId);
        }
      });
      if (combatId) {
        sendToCharacter(characterId, 'system', { text: `【自動戰鬥】向${monster.def.name}發起攻擊！` });
      }
    },
    autoUsePotion: (characterId) => {
      const char = getCharacterById(characterId);
      if (!char) return;
      // 尋找背包中的 HP 藥水
      const inv = getInventory(characterId);
      const potionPriority = ['large_hp_potion', 'medium_hp_potion', 'small_hp_potion', 'hp_potion'];
      for (const potionId of potionPriority) {
        const found = inv.find(i => i.itemId === potionId && i.quantity > 0);
        if (found) {
          const def = ITEM_DEFS[potionId];
          if (def?.useEffect?.type === 'heal_hp') {
            removeInventoryItem(characterId, potionId, 1);
            const healed = Math.min(def.useEffect.value, char.maxHp - char.hp);
            char.hp = Math.min(char.maxHp, char.hp + def.useEffect.value);
            saveCharacter(char);
            sendToCharacter(characterId, 'system', { text: `【自動戰鬥】使用了「${def.name}」，回復 ${healed} HP。` });
          }
          break;
        }
      }
    },
    autoFlee: (characterId) => {
      const combatId = combat.getPlayerCombatId(characterId);
      if (!combatId) return;
      combat.submitAction(combatId, { actorId: characterId, type: 'flee' });
      sendToCharacter(characterId, 'system', { text: '【自動戰鬥】HP 過低，嘗試逃跑！' });
    },
    autoLoot: (characterId) => {
      const char = getCharacterById(characterId);
      if (!char) return;

      // 撿取房間中所有可用的地上物品
      const room = getRoom(char.roomId);
      if (!room?.groundItems) return;

      for (const gi of room.groundItems) {
        const def = ITEM_DEFS[gi.itemId];
        if (def) {
          addInventoryItem(characterId, gi.itemId, 1);
          sendToCharacter(characterId, 'system', {
            text: `【自動拾取】撿起了「${def.name}」。`,
          });
        }
      }
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
  dungeonMatchMgr.shutdown();
  worldEventMgr.shutdown();
  weatherMgr.shutdown();
}
