// PvP 系統 — PvPManager（決鬥 & 競技場）

import { randomUUID } from 'crypto';
import type { Character, MonsterDef } from '@game/shared';
import { ITEM_DEFS } from '@game/shared';
import type { MonsterInstance } from './world.js';
import { sendToCharacter } from '../ws/handler.js';
import { recordPvp, updateLeaderboard } from '../db/database.js';
import { getDb } from '../db/schema.js';
import { getInventory, removeInventoryItem, addInventoryItem } from '../db/queries.js';
import { expRequiredForLevel } from './player.js';
import { questMgr } from './state.js';

// ============================================================
//  型別定義
// ============================================================

/** 決鬥請求 */
interface DuelRequest {
  id: string;
  challengerId: string;
  challengerName: string;
  targetId: string;
  targetName: string;
  expiresAt: number;
}

/** 競技場排隊條目 */
interface ArenaEntry {
  characterId: string;
  character: Character;
  joinedAt: number;
}

/** PvP 結果記錄 */
export interface PvPResult {
  winnerId: string;
  loserId: string;
  type: 'duel' | 'arena';
  winnerEloChange: number;
  loserEloChange: number;
  timestamp: number;
}

// ============================================================
//  ELO 計算常數
// ============================================================

const ELO_BASE = 25;
const ELO_K_FACTOR = 32;
const INITIAL_ELO = 1000;
const ARENA_QUEUE_TIMEOUT = 180_000; // 3 分鐘
const DUEL_EXPIRY = 30_000; // 30 秒
const GOLD_LOSS_PERCENT = 0.05; // 輸家損失 5% 金幣給贏家

// ============================================================
//  PvPManager
// ============================================================

export class PvPManager {
  /** targetId -> DuelRequest */
  private pendingDuels: Map<string, DuelRequest> = new Map();
  /** 競技場排隊列表 */
  private arenaQueue: ArenaEntry[] = [];
  /** characterId -> ELO 分數（記憶體快取） */
  private eloCache: Map<string, number> = new Map();
  /** 清理計時器 */
  private cleanupTimer: ReturnType<typeof setInterval> | null = null;

  /** 戰鬥建立回呼 */
  private startCombatFn:
    | ((
        players: Character[],
        monsters: MonsterInstance[],
        onEnd: (result: 'victory' | 'defeat' | 'fled') => void,
      ) => void)
    | null = null;

  // ──────────────────────────────────────────────────────────
  //  初始化
  // ──────────────────────────────────────────────────────────

  init(): void {
    // 每 10 秒清理過期請求
    this.cleanupTimer = setInterval(() => this.cleanup(), 10_000);
  }

  shutdown(): void {
    if (this.cleanupTimer) {
      clearInterval(this.cleanupTimer);
      this.cleanupTimer = null;
    }
    this.pendingDuels.clear();
    this.arenaQueue.length = 0;
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

  // ──────────────────────────────────────────────────────────
  //  決鬥系統
  // ──────────────────────────────────────────────────────────

  /**
   * 發起決鬥請求
   */
  duel(
    challengerId: string,
    challengerName: string,
    targetId: string,
    targetName: string,
  ): string {
    if (challengerId === targetId) {
      return '你不能向自己發起決鬥。';
    }

    if (this.pendingDuels.has(targetId)) {
      return `${targetName} 已有待處理的決鬥請求。`;
    }

    const request: DuelRequest = {
      id: randomUUID(),
      challengerId,
      challengerName,
      targetId,
      targetName,
      expiresAt: Date.now() + DUEL_EXPIRY,
    };

    this.pendingDuels.set(targetId, request);

    sendToCharacter(targetId, 'system', {
      text: `${challengerName} 向你發起了決鬥挑戰！輸入 "duel accept" 接受，或 "duel decline" 拒絕。（30 秒內有效）`,
    });

    return `已向 ${targetName} 發起決鬥挑戰。`;
  }

  /**
   * 接受決鬥
   */
  acceptDuel(
    targetId: string,
    targetCharacter: Character,
    challengerCharacter: Character,
  ): string {
    const request = this.pendingDuels.get(targetId);
    if (!request) {
      return '你沒有待處理的決鬥請求。';
    }

    if (Date.now() > request.expiresAt) {
      this.pendingDuels.delete(targetId);
      return '決鬥請求已過期。';
    }

    this.pendingDuels.delete(targetId);

    // 通知雙方
    sendToCharacter(request.challengerId, 'system', {
      text: `${request.targetName} 接受了你的決鬥挑戰！`,
    });

    // 啟動 PvP 戰鬥
    this.startPvPCombat(
      request.challengerId,
      challengerCharacter,
      targetId,
      targetCharacter,
      'duel',
    );

    return `決鬥開始！${request.challengerName} vs ${request.targetName}`;
  }

  /**
   * 拒絕決鬥
   */
  declineDuel(targetId: string): string {
    const request = this.pendingDuels.get(targetId);
    if (!request) {
      return '你沒有待處理的決鬥請求。';
    }

    this.pendingDuels.delete(targetId);

    sendToCharacter(request.challengerId, 'system', {
      text: `${request.targetName} 拒絕了你的決鬥挑戰。`,
    });

    return '你拒絕了決鬥挑戰。';
  }

  // ──────────────────────────────────────────────────────────
  //  競技場系統
  // ──────────────────────────────────────────────────────────

  /**
   * 加入競技場排隊
   */
  joinArena(characterId: string, character: Character): string {
    // 檢查是否已在排隊中
    if (this.arenaQueue.some(e => e.characterId === characterId)) {
      return '你已在競技場排隊中。';
    }

    this.arenaQueue.push({
      characterId,
      character,
      joinedAt: Date.now(),
    });

    // 嘗試配對
    const matchResult = this.matchmake();
    if (matchResult) {
      return '已找到對手，競技場對戰即將開始！';
    }

    return `已加入競技場排隊，等待匹配對手……（目前排隊人數：${this.arenaQueue.length}）`;
  }

  /**
   * 離開競技場排隊
   */
  leaveArena(characterId: string): string {
    const idx = this.arenaQueue.findIndex(e => e.characterId === characterId);
    if (idx === -1) {
      return '你不在競技場排隊中。';
    }
    this.arenaQueue.splice(idx, 1);
    return '已離開競技場排隊。';
  }

  /**
   * 配對系統——匹配等級相近的玩家
   */
  matchmake(): boolean {
    if (this.arenaQueue.length < 2) return false;

    // 按等級排序
    this.arenaQueue.sort((a, b) => a.character.level - b.character.level);

    // 尋找等級差距最小的配對
    let bestPair: [number, number] | null = null;
    let bestDiff = Infinity;

    for (let i = 0; i < this.arenaQueue.length - 1; i++) {
      const diff = Math.abs(
        this.arenaQueue[i].character.level - this.arenaQueue[i + 1].character.level,
      );
      if (diff < bestDiff) {
        bestDiff = diff;
        bestPair = [i, i + 1];
      }
    }

    if (!bestPair) return false;

    // 取出配對的兩位玩家
    const [i1, i2] = bestPair;
    const p2 = this.arenaQueue.splice(i2, 1)[0];
    const p1 = this.arenaQueue.splice(i1, 1)[0];

    // 通知雙方
    sendToCharacter(p1.characterId, 'system', {
      text: `競技場配對成功！對手：${p2.character.name}（Lv.${p2.character.level}）`,
    });
    sendToCharacter(p2.characterId, 'system', {
      text: `競技場配對成功！對手：${p1.character.name}（Lv.${p1.character.level}）`,
    });

    // 啟動 PvP 戰鬥
    this.startPvPCombat(
      p1.characterId,
      p1.character,
      p2.characterId,
      p2.character,
      'arena',
    );

    return true;
  }

  // ──────────────────────────────────────────────────────────
  //  PvP 戰鬥
  // ──────────────────────────────────────────────────────────

  private startPvPCombat(
    player1Id: string,
    player1Char: Character,
    player2Id: string,
    player2Char: Character,
    type: 'duel' | 'arena',
  ): void {
    // 將 player2 模擬為「怪物」以使用戰鬥引擎
    const fakeMonsterDef: MonsterDef = {
      id: `pvp_${player2Id}`,
      name: player2Char.name,
      level: player2Char.level,
      hp: player2Char.maxHp,
      mp: player2Char.maxMp,
      str: player2Char.stats.str,
      int: player2Char.stats.int,
      dex: player2Char.stats.dex,
      vit: player2Char.stats.vit,
      luk: player2Char.stats.luk,
      element: 'none',
      skills: ['basic_attack'],
      expReward: 0,
      goldReward: [0, 0],
      drops: [],
      aiType: 'aggressive',
      description: type === 'duel' ? '決鬥對手' : '競技場對手',
      isBoss: false,
    };

    const fakeMonster: MonsterInstance = {
      instanceId: `pvp_${player2Id}_${Date.now()}`,
      monsterId: fakeMonsterDef.id,
      def: fakeMonsterDef,
      hp: player2Char.maxHp,
      maxHp: player2Char.maxHp,
      mp: player2Char.maxMp,
      maxMp: player2Char.maxMp,
      isDead: false,
      respawnAt: null,
    };

    if (!this.startCombatFn) {
      // 沒有戰鬥引擎，直接隨機決定勝負
      const winner = Math.random() > 0.5 ? player1Id : player2Id;
      const loser = winner === player1Id ? player2Id : player1Id;
      this.onPvPEnd(winner, loser, player1Char, player2Char, type);
      return;
    }

    this.startCombatFn(
      [player1Char],
      [fakeMonster],
      (result) => {
        if (result === 'victory') {
          this.onPvPEnd(player1Id, player2Id, player1Char, player2Char, type);
        } else {
          this.onPvPEnd(player2Id, player1Id, player2Char, player1Char, type);
        }
      },
    );
  }

  // ──────────────────────────────────────────────────────────
  //  PvP 結束處理
  // ──────────────────────────────────────────────────────────

  private onPvPEnd(
    winnerId: string,
    loserId: string,
    winnerChar: Character,
    loserChar: Character,
    type: 'duel' | 'arena',
  ): void {
    // 計算 ELO 變動
    const winnerElo = this.getElo(winnerId);
    const loserElo = this.getElo(loserId);
    const { winnerChange, loserChange } = this.calculateEloChange(
      winnerElo,
      loserElo,
      winnerChar.level,
      loserChar.level,
    );

    // 更新 ELO
    this.setElo(winnerId, winnerElo + winnerChange);
    this.setElo(loserId, Math.max(0, loserElo + loserChange));

    // PvP 死亡懲罰：5% EXP + 10% 金幣
    const expLost = Math.floor(loserChar.exp * 0.05);
    const minExp = expRequiredForLevel(loserChar.level);
    loserChar.exp = Math.max(minExp, loserChar.exp - expLost);

    const goldLost = Math.floor(loserChar.gold * 0.1);
    loserChar.gold -= goldLost;

    // 金幣轉移（額外 5% 給贏家）
    const goldTransfer = Math.floor((loserChar.gold + goldLost) * GOLD_LOSS_PERCENT);
    if (goldTransfer > 0) {
      winnerChar.gold += goldTransfer;
    }

    // PvP 額外懲罰：掉落 1 個隨機未裝備物品
    let droppedItemName: string | null = null;
    try {
      const loserInv = getInventory(loserId);
      const nonEquipped = loserInv.filter(item => !item.equipped);
      if (nonEquipped.length > 0) {
        const randomItem = nonEquipped[Math.floor(Math.random() * nonEquipped.length)];
        removeInventoryItem(loserId, randomItem.itemId, 1);
        addInventoryItem(winnerId, randomItem.itemId, 1);
        const itemDef = ITEM_DEFS[randomItem.itemId];
        droppedItemName = itemDef?.name ?? randomItem.itemId;
      }
    } catch {
      // 物品轉移失敗不影響遊戲
    }

    // 恢復雙方 HP/MP/Resource
    winnerChar.hp = winnerChar.maxHp;
    winnerChar.mp = winnerChar.maxMp;
    if (winnerChar.resourceType === 'rage') {
      winnerChar.resource = 0;
    } else {
      winnerChar.resource = winnerChar.maxResource;
    }
    loserChar.hp = Math.floor(loserChar.maxHp * 0.5);
    loserChar.mp = Math.floor(loserChar.maxMp * 0.5);
    if (loserChar.resourceType === 'rage') {
      loserChar.resource = 0;
    } else {
      loserChar.resource = Math.floor(loserChar.maxResource * 0.5);
    }

    // 記錄到資料庫
    try {
      recordPvp(winnerId, loserId, type);
    } catch {
      // DB 寫入失敗不影響遊戲
    }

    // 更新排行榜
    try {
      updateLeaderboard(winnerId, 'pvp', this.getElo(winnerId));
      updateLeaderboard(loserId, 'pvp', this.getElo(loserId));
    } catch {
      // 忽略
    }

    // 任務進度：PvP 勝利
    try {
      questMgr.updateProgress(winnerId, 'kill', 'pvp_win');
    } catch {
      // 忽略
    }

    // 通知雙方
    const typeText = type === 'duel' ? '決鬥' : '競技場';

    sendToCharacter(winnerId, 'system', {
      text:
        `${typeText}勝利！\n` +
        `ELO：${winnerElo} → ${winnerElo + winnerChange}（+${winnerChange}）\n` +
        (goldTransfer > 0 ? `獲得 ${goldTransfer} 金幣。` : '') +
        (droppedItemName ? `\n奪取了對方的「${droppedItemName}」！` : ''),
    });

    const loserMsg =
      `你在決鬥中落敗！` +
      (droppedItemName ? `${droppedItemName}被對方奪走了。` : '') +
      `\n失去了 ${expLost} 經驗值和 ${goldLost} 金幣。` +
      `\nELO：${loserElo} → ${loserElo + loserChange}（${loserChange}）`;

    sendToCharacter(loserId, 'system', { text: loserMsg });
  }

  // ──────────────────────────────────────────────────────────
  //  ELO 評分系統
  // ──────────────────────────────────────────────────────────

  /**
   * 計算 ELO 變動
   * 基礎 +/-25，依等級差距縮放
   */
  private calculateEloChange(
    winnerElo: number,
    loserElo: number,
    winnerLevel: number,
    loserLevel: number,
  ): { winnerChange: number; loserChange: number } {
    // ELO 預期勝率
    const expectedWin = 1 / (1 + Math.pow(10, (loserElo - winnerElo) / 400));
    const expectedLose = 1 - expectedWin;

    // 等級差距調整因子
    const levelDiff = loserLevel - winnerLevel;
    // 如果贏了比自己高等的對手，加更多分
    const levelFactor = 1 + Math.max(0, levelDiff) * 0.05;

    // ELO 變動
    let winnerChange = Math.round(ELO_K_FACTOR * (1 - expectedWin) * levelFactor);
    let loserChange = Math.round(ELO_K_FACTOR * (0 - expectedLose));

    // 確保最低變動為基礎值的一半
    winnerChange = Math.max(Math.floor(ELO_BASE / 2), winnerChange);
    loserChange = Math.min(-Math.floor(ELO_BASE / 2), loserChange);

    return { winnerChange, loserChange };
  }

  /** 取得玩家 ELO（從快取或 DB） */
  private getElo(characterId: string): number {
    const cached = this.eloCache.get(characterId);
    if (cached !== undefined) return cached;

    // 嘗試從排行榜讀取
    try {
      const row = getDb()
        .prepare('SELECT score FROM leaderboard WHERE character_id = ? AND type = ?')
        .get(characterId, 'pvp') as { score: number } | undefined;
      const elo = row?.score ?? INITIAL_ELO;
      this.eloCache.set(characterId, elo);
      return elo;
    } catch {
      return INITIAL_ELO;
    }
  }

  /** 設定玩家 ELO */
  private setElo(characterId: string, elo: number): void {
    this.eloCache.set(characterId, elo);
  }

  // ──────────────────────────────────────────────────────────
  //  清理
  // ──────────────────────────────────────────────────────────

  private cleanup(): void {
    const now = Date.now();

    // 清理過期的決鬥請求
    for (const [targetId, request] of this.pendingDuels) {
      if (now > request.expiresAt) {
        this.pendingDuels.delete(targetId);
        sendToCharacter(request.challengerId, 'system', {
          text: `向 ${request.targetName} 發起的決鬥請求已過期。`,
        });
      }
    }

    // 清理等太久的競技場排隊
    while (
      this.arenaQueue.length > 0 &&
      now - this.arenaQueue[0].joinedAt > ARENA_QUEUE_TIMEOUT
    ) {
      const entry = this.arenaQueue.shift()!;
      sendToCharacter(entry.characterId, 'system', {
        text: '競技場等待超時，已自動離開排隊。',
      });
    }
  }

  // ──────────────────────────────────────────────────────────
  //  查詢方法
  // ──────────────────────────────────────────────────────────

  /** 取得玩家的 PvP ELO */
  getPlayerElo(characterId: string): number {
    return this.getElo(characterId);
  }

  /** 取得玩家 PvP 戰績 */
  getPlayerRecord(characterId: string): { wins: number; losses: number } {
    try {
      const wins = getDb()
        .prepare('SELECT COUNT(*) as cnt FROM pvp_records WHERE winner_id = ?')
        .get(characterId) as { cnt: number };
      const losses = getDb()
        .prepare('SELECT COUNT(*) as cnt FROM pvp_records WHERE loser_id = ?')
        .get(characterId) as { cnt: number };
      return {
        wins: wins?.cnt ?? 0,
        losses: losses?.cnt ?? 0,
      };
    } catch {
      return { wins: 0, losses: 0 };
    }
  }

  /** 是否有待處理的決鬥 */
  hasPendingDuel(targetId: string): boolean {
    return this.pendingDuels.has(targetId);
  }

  /** 取得待處理決鬥的挑戰者 ID */
  getDuelChallengerId(targetId: string): string | null {
    const request = this.pendingDuels.get(targetId);
    return request ? request.challengerId : null;
  }

  /** 取得競技場排隊人數 */
  getArenaQueueSize(): number {
    return this.arenaQueue.length;
  }

  /** 格式化 PvP 資訊 */
  formatPvPInfo(characterId: string, characterName: string): string {
    const elo = this.getElo(characterId);
    const record = this.getPlayerRecord(characterId);
    const total = record.wins + record.losses;
    const winRate = total > 0 ? Math.round((record.wins / total) * 100) : 0;

    let text = `PvP 資訊 — ${characterName}\n`;
    text += '─'.repeat(35) + '\n';
    text += `ELO 評分：${elo}\n`;
    text += `勝 / 敗：${record.wins} / ${record.losses}\n`;
    text += `勝率：${winRate}%\n`;
    text += `競技場排隊人數：${this.arenaQueue.length}\n`;
    return text;
  }
}
