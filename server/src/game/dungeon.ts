// 副本/實例系統 — DungeonManager

import { randomUUID } from 'crypto';
import { ITEM_DEFS, type Character, type MonsterDef } from '@game/shared';
import type { MonsterInstance } from './world.js';
import {
  DUNGEON_DEFS, DUNGEON_MONSTERS,
  type DungeonDef, type DungeonRoomDef,
} from '../data/dungeons.js';
import { getMonster } from '../data/monsters.js';
import { sendToCharacter } from '../ws/handler.js';
import { updateLeaderboard } from '../db/queries.js';
import { getDb } from '../db/schema.js';
import { addExperienceToCharacter } from './leveling.js';
import { grantAndNotifyLearnableSkills } from './skill-learning.js';
import { addRewardItemToInventory, formatRewardEntry } from './item-instance-rewards.js';

// ============================================================
//  型別定義
// ============================================================

export interface DungeonInstance {
  id: string;
  dungeonId: string;
  difficulty: DungeonDifficulty;
  partyId: string;
  playerIds: string[];
  /** 當前房間索引（線性推進） */
  currentRoomIndex: number;
  /** 是否已通關 */
  cleared: boolean;
  /** 是否等待死亡後的入口/復活/退出選擇 */
  defeated: boolean;
  /** 是否為首次通關 */
  isFirstClear: boolean;
  /** 實例建立時間 */
  startedAt: number;
  /** 時間限制計時器 */
  timerHandle: ReturnType<typeof setTimeout> | null;
  /** 玩家角色參照 */
  playerCharacters: Map<string, Character>;
}

export type DungeonDifficulty = 'normal' | 'hard' | 'nightmare';

const DUNGEON_DIFFICULTY_LABELS: Record<DungeonDifficulty, string> = {
  normal: '普通',
  hard: '困難',
  nightmare: '夢魘',
};

const DUNGEON_DIFFICULTY_MODIFIERS: Record<DungeonDifficulty, {
  monsterHp: number;
  monsterStats: number;
  rewards: number;
}> = {
  normal: { monsterHp: 1, monsterStats: 1, rewards: 1 },
  hard: { monsterHp: 1.35, monsterStats: 1.2, rewards: 1.25 },
  nightmare: { monsterHp: 1.8, monsterStats: 1.45, rewards: 1.6 },
};

function normalizeDungeonDifficulty(difficulty: string | undefined): DungeonDifficulty {
  if (difficulty === 'hard' || difficulty === 'nightmare') return difficulty;
  return 'normal';
}

// ============================================================
//  DungeonManager
// ============================================================

export class DungeonManager {
  /** instanceId -> DungeonInstance */
  private instances: Map<string, DungeonInstance> = new Map();
  /** playerId -> instanceId */
  private playerInstanceMap: Map<string, string> = new Map();
  /** 首通紀錄（DB 持久化） */
  private firstClearCache: Set<string> = new Set(); // "partyId:dungeonId" 快取

  /** 戰鬥建立回呼 */
  private startCombatFn:
    | ((
        players: Character[],
        monsters: MonsterInstance[],
        onEnd: (result: 'victory' | 'defeat' | 'fled') => void,
      ) => void)
    | null = null;

  /** 副本通關回呼（公會經驗、二轉任務等） */
  private onClearFn: ((playerIds: string[], dungeonId: string, isSolo: boolean, isFirstClear: boolean) => void) | null = null;

  setOnClearFn(fn: (playerIds: string[], dungeonId: string, isSolo: boolean, isFirstClear: boolean) => void): void {
    this.onClearFn = fn;
  }

  /** 傳送玩家回世界的回呼 */
  private teleportFn:
    | ((playerId: string, roomId: string) => void)
    | null = null;

  // ──────────────────────────────────────────────────────────
  //  初始化
  // ──────────────────────────────────────────────────────────

  init(): void {
    const db = getDb();
    db.exec(`CREATE TABLE IF NOT EXISTS dungeon_first_clears (
      party_id TEXT NOT NULL,
      dungeon_id TEXT NOT NULL,
      cleared_at INTEGER NOT NULL,
      PRIMARY KEY (party_id, dungeon_id)
    )`);
    // 載入已有紀錄到快取
    const rows = db.prepare('SELECT party_id, dungeon_id FROM dungeon_first_clears').all() as { party_id: string; dungeon_id: string }[];
    for (const r of rows) {
      this.firstClearCache.add(`${r.party_id}:${r.dungeon_id}`);
    }
  }

  private hasFirstClear(clearKey: string): boolean {
    return this.firstClearCache.has(clearKey);
  }

  private recordFirstClear(clearKey: string): void {
    if (this.firstClearCache.has(clearKey)) return;
    this.firstClearCache.add(clearKey);
    const [partyId, dungeonId] = clearKey.split(':');
    try {
      const db = getDb();
      db.prepare('INSERT OR IGNORE INTO dungeon_first_clears (party_id, dungeon_id, cleared_at) VALUES (?, ?, ?)').run(partyId, dungeonId, Math.floor(Date.now() / 1000));
    } catch { /* ignore */ }
  }

  /** 註冊戰鬥建立函式 */
  setStartCombatFunction(
    fn: (
      players: Character[],
      monsters: MonsterInstance[],
      onEnd: (result: 'victory' | 'defeat' | 'fled') => void,
    ) => void,
  ): void {
    this.startCombatFn = fn;
  }

  /** 註冊傳送函式 */
  setTeleportFunction(fn: (playerId: string, roomId: string) => void): void {
    this.teleportFn = fn;
  }

  // ──────────────────────────────────────────────────────────
  //  建立副本實例
  // ──────────────────────────────────────────────────────────

  /**
   * 建立副本實例
   * @param partyId 隊伍 ID（可用 playerId 代替單人）
   * @param dungeonId 副本 ID
   * @param players 參與的玩家角色
   * @returns 成功訊息或錯誤訊息
   */
  createInstance(
    partyId: string,
    dungeonId: string,
    players: Character[],
    difficulty: string = 'normal',
  ): { success: boolean; message: string; instanceId?: string } {
    const def = DUNGEON_DEFS[dungeonId];
    if (!def) {
      return { success: false, message: '副本不存在。' };
    }

    // 等級檢查
    for (const p of players) {
      if (p.level < def.levelReq) {
        return {
          success: false,
          message: `${p.name} 等級不足（需要 Lv.${def.levelReq}）。`,
        };
      }
    }

    // 人數檢查
    if (players.length > def.maxPlayers) {
      return {
        success: false,
        message: `此副本最多 ${def.maxPlayers} 人。`,
      };
    }

    // 金幣檢查
    for (const p of players) {
      if (p.gold < def.entranceFee) {
        return {
          success: false,
          message: `${p.name} 金幣不足（入場費 ${def.entranceFee} 金幣）。`,
        };
      }
    }

    // 檢查是否已在副本中
    for (const p of players) {
      if (this.playerInstanceMap.has(p.id)) {
        return {
          success: false,
          message: `${p.name} 已在副本中。`,
        };
      }
    }

    // 扣除入場費
    for (const p of players) {
      p.gold -= def.entranceFee;
    }

    const instanceId = randomUUID();
    const playerIds = players.map(p => p.id);
    const normalizedDifficulty = normalizeDungeonDifficulty(difficulty);

    // 判定是否首次通關
    const clearKey = `${partyId}:${dungeonId}`;
    const isFirstClear = !this.hasFirstClear(clearKey);

    const playerCharacters = new Map<string, Character>();
    for (const p of players) {
      playerCharacters.set(p.id, p);
    }

    const instance: DungeonInstance = {
      id: instanceId,
      dungeonId,
      difficulty: normalizedDifficulty,
      partyId,
      playerIds,
      currentRoomIndex: 0,
      cleared: false,
      defeated: false,
      isFirstClear,
      startedAt: Date.now(),
      timerHandle: null,
      playerCharacters,
    };

    this.instances.set(instanceId, instance);
    for (const id of playerIds) {
      this.playerInstanceMap.set(id, instanceId);
    }

    // 啟動30分鐘計時器
    instance.timerHandle = setTimeout(() => {
      this.onTimeExpired(instance);
    }, def.timeLimit * 1000);

    // 通知進入副本
    const firstRoom = def.rooms[0];
    for (const id of playerIds) {
      sendToCharacter(id, 'system', {
        text: `進入副本：${def.name}（${DUNGEON_DIFFICULTY_LABELS[normalizedDifficulty]}）`,
      });
      sendToCharacter(id, 'narrative', {
        text: `【${firstRoom.name}】\n${firstRoom.description}`,
      });
    }

    // 開始第一個房間的戰鬥
    this.startRoomCombat(instance);

    return {
      success: true,
      message: `進入副本：${def.name}（${DUNGEON_DIFFICULTY_LABELS[normalizedDifficulty]}）`,
      instanceId,
    };
  }

  // ──────────────────────────────────────────────────────────
  //  房間戰鬥
  // ──────────────────────────────────────────────────────────

  private startRoomCombat(instance: DungeonInstance): void {
    const def = DUNGEON_DEFS[instance.dungeonId];
    if (!def) return;

    const room = def.rooms[instance.currentRoomIndex];
    if (!room) return;

    // 建立怪物實例
    const monsters = this.createRoomMonsters(room, instance.difficulty);

    // 取得玩家角色列表
    const players: Character[] = [];
    for (const id of instance.playerIds) {
      const char = instance.playerCharacters.get(id);
      if (char && char.hp > 0) {
        players.push(char);
      }
    }

    if (players.length === 0) {
      this.onDefeat(instance);
      return;
    }

    if (!this.startCombatFn) {
      // 沒有戰鬥引擎，直接模擬勝利
      this.onRoomCombatEnd(instance, 'victory');
      return;
    }

    this.startCombatFn(players, monsters, (result) => {
      this.onRoomCombatEnd(instance, result);
    });
  }

  private createRoomMonsters(room: DungeonRoomDef, difficulty: DungeonDifficulty): MonsterInstance[] {
    const monsters: MonsterInstance[] = [];
    let counter = 0;
    const modifier = DUNGEON_DIFFICULTY_MODIFIERS[difficulty];

    for (const spawn of room.monsters) {
      // 優先從副本怪物定義中取得，其次從世界怪物定義取得
      const def = DUNGEON_MONSTERS[spawn.monsterId] ?? getMonster(spawn.monsterId);
      if (!def) continue;

      for (let i = 0; i < spawn.count; i++) {
        counter++;
        const scaledDef: MonsterDef = {
          ...def,
          hp: Math.max(1, Math.round(def.hp * modifier.monsterHp)),
          mp: Math.max(0, Math.round(def.mp * modifier.monsterStats)),
          str: Math.max(1, Math.round(def.str * modifier.monsterStats)),
          int: Math.max(1, Math.round(def.int * modifier.monsterStats)),
          dex: Math.max(1, Math.round(def.dex * modifier.monsterStats)),
          vit: Math.max(1, Math.round(def.vit * modifier.monsterStats)),
          luk: Math.max(1, Math.round(def.luk * modifier.monsterStats)),
          expReward: Math.max(1, Math.round(def.expReward * modifier.rewards)),
        };
        monsters.push({
          instanceId: `${spawn.monsterId}_dungeon_${counter}_${Date.now()}`,
          monsterId: spawn.monsterId,
          def: scaledDef,
          hp: scaledDef.hp,
          maxHp: scaledDef.hp,
          mp: scaledDef.mp,
          maxMp: scaledDef.mp,
          isDead: false,
          respawnAt: null,
        });
      }
    }

    return monsters;
  }

  // ──────────────────────────────────────────────────────────
  //  戰鬥結束處理
  // ──────────────────────────────────────────────────────────

  private onRoomCombatEnd(
    instance: DungeonInstance,
    result: 'victory' | 'defeat' | 'fled',
  ): void {
    const def = DUNGEON_DEFS[instance.dungeonId];
    if (!def) return;

    if (result === 'defeat' || result === 'fled') {
      this.onDefeat(instance);
      return;
    }

    // 勝利：推進到下一個房間
    instance.currentRoomIndex++;

    if (instance.currentRoomIndex >= def.rooms.length) {
      // 副本通關！
      this.onClear(instance);
      return;
    }

    // 進入下一個房間
    const nextRoom = def.rooms[instance.currentRoomIndex];
    for (const id of instance.playerIds) {
      sendToCharacter(id, 'system', {
        text: `前進至：${nextRoom.name}`,
      });
      sendToCharacter(id, 'narrative', {
        text: `【${nextRoom.name}】\n${nextRoom.description}`,
      });
    }

    // 短暫延遲後開始下一場戰鬥
    setTimeout(() => {
      this.startRoomCombat(instance);
    }, 2000);
  }

  // ──────────────────────────────────────────────────────────
  //  副本通關
  // ──────────────────────────────────────────────────────────

  private onClear(instance: DungeonInstance): void {
    const def = DUNGEON_DEFS[instance.dungeonId];
    if (!def) return;

    instance.cleared = true;
    const clearTime = Math.floor((Date.now() - instance.startedAt) / 1000);
    const minutes = Math.floor(clearTime / 60);
    const seconds = clearTime % 60;
    const timeStr = `${minutes} 分 ${seconds} 秒`;

    // 判定首次通關
    const clearKey = `${instance.partyId}:${instance.dungeonId}`;
    const isFirstClear = !this.hasFirstClear(clearKey);
    if (isFirstClear) {
      this.recordFirstClear(clearKey);
    }

    // 計算獎勵
    const rewardModifier = DUNGEON_DIFFICULTY_MODIFIERS[instance.difficulty].rewards;
    const baseRewards = isFirstClear ? def.firstClearRewards : def.normalRewards;
    const rewards = {
      ...baseRewards,
      exp: Math.max(1, Math.round(baseRewards.exp * rewardModifier)),
      gold: Math.max(0, Math.round(baseRewards.gold * rewardModifier)),
    };
    const bonusText = isFirstClear ? '（首次通關獎勵！）' : '';

    for (const id of instance.playerIds) {
      const char = instance.playerCharacters.get(id);

      // 發放金幣和經驗
      if (char) {
        char.gold += rewards.gold;
        const expResult = addExperienceToCharacter(char, rewards.exp);
        if (expResult.levelsGained > 0) grantAndNotifyLearnableSkills(char);
      }

      const rewardEntries: string[] = [];

      // 發放通關物品
      if (rewards.items?.length) {
        for (const item of rewards.items) {
          if (!char) continue;
          rewardEntries.push(...addRewardItemToInventory(char, item.itemId, item.qty, {
            sourceTags: ['dungeon_reward', instance.dungeonId],
            itemLevel: def.levelReq,
            droppedBy: instance.dungeonId,
          }).map(formatRewardEntry));
        }
      }

      if (char && rewards.equipmentSlotRewards?.length) {
        for (const equipmentReward of rewards.equipmentSlotRewards) {
          const item = Object.values(ITEM_DEFS).find(itemDef =>
            itemDef.equipSlot === equipmentReward.slot
            && (!equipmentReward.levelMax || itemDef.levelReq <= equipmentReward.levelMax)
            && (!equipmentReward.sourceTags?.length || equipmentReward.sourceTags.some(tag => itemDef.id.includes(tag) || itemDef.sourceTags?.includes(tag))),
          );
          if (!item) continue;
          rewardEntries.push(...addRewardItemToInventory(char, item.id, 1, {
            sourceTags: ['dungeon_reward', instance.dungeonId, ...(equipmentReward.sourceTags ?? [])],
            itemLevel: equipmentReward.levelMax,
            droppedBy: instance.dungeonId,
          }).map(formatRewardEntry));
        }
      }

      // 通知玩家
      let rewardText = `獲得 ${rewards.exp} EXP、${rewards.gold} 金幣`;
      if (rewardEntries.length > 0) {
        rewardText += `，以及${isFirstClear ? '首通' : '通關'}獎勵：${rewardEntries.join('、')}`;
      }

      sendToCharacter(id, 'system', {
        text:
          `副本「${def.name}」通關！${bonusText}\n` +
          `難度：${DUNGEON_DIFFICULTY_LABELS[instance.difficulty]}\n` +
          `耗時：${timeStr}\n` +
          `獎勵：${rewardText}`,
      });

      // 更新排行榜（副本速通紀錄）
      updateLeaderboard(id, 'dungeon_speed', clearTime);
    }

    // 公會經驗、二轉任務等外部回呼
    if (this.onClearFn) {
      this.onClearFn(instance.playerIds, instance.dungeonId, instance.playerIds.length === 1, isFirstClear);
    }

    // 傳送回副本入口房間
    this.teleportPartyBack(instance, def.entranceRoomId);

    // 清理實例
    this.cleanupInstance(instance);
  }

  // ──────────────────────────────────────────────────────────
  //  副本失敗
  // ──────────────────────────────────────────────────────────

  private onDefeat(instance: DungeonInstance): void {
    const def = DUNGEON_DEFS[instance.dungeonId];
    const dungeonName = def?.name ?? '未知副本';
    instance.defeated = true;

    for (const id of instance.playerIds) {
      const char = instance.playerCharacters.get(id);
      if (char) {
        char.hp = 0;
      }
      sendToCharacter(id, 'system', {
        text:
          `副本「${dungeonName}」挑戰失敗！\n` +
          '可輸入 dungeon entrance 回副本入口、dungeon revive 由隊友復活重試，或 dungeon leave 退出副本。',
      });
    }
  }

  // ──────────────────────────────────────────────────────────
  //  時間到期
  // ──────────────────────────────────────────────────────────

  private onTimeExpired(instance: DungeonInstance): void {
    if (instance.cleared) return;

    const def = DUNGEON_DEFS[instance.dungeonId];
    const dungeonName = def?.name ?? '未知副本';
    const entranceRoom = def?.entranceRoomId ?? 'village_square';

    for (const id of instance.playerIds) {
      sendToCharacter(id, 'system', {
        text: `副本「${dungeonName}」時間到！挑戰失敗，已被傳送回入口。`,
      });
    }

    this.teleportPartyBack(instance, entranceRoom);
    this.cleanupInstance(instance);
  }

  // ──────────────────────────────────────────────────────────
  //  傳送與清理
  // ──────────────────────────────────────────────────────────

  private teleportPartyBack(instance: DungeonInstance, roomId: string): void {
    if (!this.teleportFn) return;

    for (const id of instance.playerIds) {
      this.teleportFn(id, roomId);
    }
  }

  private cleanupInstance(instance: DungeonInstance): void {
    // 清除計時器
    if (instance.timerHandle) {
      clearTimeout(instance.timerHandle);
      instance.timerHandle = null;
    }

    // 移除玩家映射
    for (const id of instance.playerIds) {
      this.playerInstanceMap.delete(id);
    }

    // 移除實例
    this.instances.delete(instance.id);
  }

  // ──────────────────────────────────────────────────────────
  //  主動離開副本
  // ──────────────────────────────────────────────────────────

  leaveDungeon(playerId: string): string {
    const instance = this.getPlayerInstance(playerId);
    if (!instance) return '你目前不在任何副本中。';

    const def = DUNGEON_DEFS[instance.dungeonId];
    const dungeonName = def?.name ?? '未知副本';
    const entranceRoom = def?.entranceRoomId ?? 'village_square';

    // 傳送回入口
    if (this.teleportFn) {
      this.teleportFn(playerId, entranceRoom);
    }

    // 從副本中移除此玩家
    instance.playerIds = instance.playerIds.filter(id => id !== playerId);
    this.playerInstanceMap.delete(playerId);

    // 如果副本中沒有其他玩家了，清理整個實例
    if (instance.playerIds.length === 0) {
      this.cleanupInstance(instance);
    }

    return `你離開了副本「${dungeonName}」，已傳送回入口。`;
  }

  chooseDeathOption(playerId: string, option: 'entrance' | 'revive' | 'exit'): string {
    const instance = this.getPlayerInstance(playerId);
    if (!instance) return '你目前不在任何副本中。';
    if (!instance.defeated) return '目前沒有待處理的副本死亡選項。';

    const def = DUNGEON_DEFS[instance.dungeonId];
    const dungeonName = def?.name ?? '未知副本';
    const entranceRoom = def?.entranceRoomId ?? 'village_square';

    if (option === 'entrance') {
      this.teleportPartyBack(instance, entranceRoom);
      this.cleanupInstance(instance);
      return `隊伍回到副本「${dungeonName}」入口。`;
    }

    if (option === 'exit') {
      this.teleportPartyBack(instance, entranceRoom);
      this.cleanupInstance(instance);
      return `隊伍退出副本「${dungeonName}」，已返回入口。`;
    }

    if (instance.playerIds.length < 2) {
      return '單人副本無法選擇隊友復活。請選擇 dungeon entrance 或 dungeon leave。';
    }

    for (const id of instance.playerIds) {
      const char = instance.playerCharacters.get(id);
      if (!char) continue;
      char.hp = Math.max(1, Math.floor(char.maxHp * 0.5));
      char.mp = Math.floor(char.maxMp * 0.5);
    }

    instance.defeated = false;
    for (const id of instance.playerIds) {
      sendToCharacter(id, 'system', {
        text: `隊友復活成功，副本「${dungeonName}」將從目前房間重新挑戰。`,
      });
    }
    setTimeout(() => this.startRoomCombat(instance), 500);
    return `隊伍在副本「${dungeonName}」中復活，準備重試目前房間。`;
  }

  // ──────────────────────────────────────────────────────────
  //  查詢方法
  // ──────────────────────────────────────────────────────────

  /** 玩家是否在副本中 */
  isInDungeon(playerId: string): boolean {
    return this.playerInstanceMap.has(playerId);
  }

  /** 取得玩家所在的副本實例 */
  getPlayerInstance(playerId: string): DungeonInstance | undefined {
    const instanceId = this.playerInstanceMap.get(playerId);
    if (!instanceId) return undefined;
    return this.instances.get(instanceId);
  }

  /** 取得副本實例 */
  getInstance(instanceId: string): DungeonInstance | undefined {
    return this.instances.get(instanceId);
  }

  /** 取得副本定義 */
  getDungeonDef(dungeonId: string): DungeonDef | undefined {
    return DUNGEON_DEFS[dungeonId];
  }

  /** 取得所有副本定義列表 */
  getAllDungeonDefs(): DungeonDef[] {
    return Object.values(DUNGEON_DEFS);
  }

  /** 取得活躍副本數量 */
  getActiveInstanceCount(): number {
    return this.instances.size;
  }

  /** 取得副本剩餘時間（秒） */
  getRemainingTime(instanceId: string): number {
    const instance = this.instances.get(instanceId);
    if (!instance) return 0;

    const def = DUNGEON_DEFS[instance.dungeonId];
    if (!def) return 0;

    const elapsed = Math.floor((Date.now() - instance.startedAt) / 1000);
    return Math.max(0, def.timeLimit - elapsed);
  }

  /** 格式化副本列表（給玩家查看） */
  formatDungeonList(): string {
    const dungeons = this.getAllDungeonDefs();
    let text = '可用副本列表\n';
    text += '─'.repeat(40) + '\n';

    for (const d of dungeons) {
      const roomCount = d.rooms.length;
      const timeMin = Math.floor(d.timeLimit / 60);
      text += `【${d.name}】\n`;
      text += `  等級需求：Lv.${d.levelReq}+\n`;
      text += `  房間數：${roomCount}（含 Boss 房）\n`;
      text += `  時間限制：${timeMin} 分鐘\n`;
      text += `  入場費：${d.entranceFee} 金幣\n`;
      text += `  ${d.description}\n\n`;
    }

    return text;
  }

  /** 關閉所有副本（伺服器關閉時呼叫） */
  shutdown(): void {
    for (const instance of this.instances.values()) {
      if (instance.timerHandle) {
        clearTimeout(instance.timerHandle);
      }
    }
    this.instances.clear();
    this.playerInstanceMap.clear();
  }
}
