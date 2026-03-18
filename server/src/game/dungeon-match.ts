// 副本匹配系統 — DungeonMatchManager

import type { Character } from '@game/shared';
import { DUNGEON_DEFS } from '../data/dungeons.js';
import { sendToCharacter } from '../ws/handler.js';

// ============================================================
//  型別定義
// ============================================================

export type DungeonRole = 'tank' | 'dps' | 'healer';

export const CLASS_ROLES: Record<string, DungeonRole> = {
  adventurer: 'dps',
  swordsman: 'tank', knight: 'tank', berserker: 'dps', sword_saint: 'dps',
  mage: 'dps', archmage: 'dps', warlock: 'dps', chronomancer: 'dps',
  ranger: 'dps', marksman: 'dps', assassin: 'dps', beast_master: 'dps',
  priest: 'healer', high_priest: 'healer', druid: 'healer', inquisitor: 'dps',
};

export interface QueueEntry {
  characterId: string;
  characterName: string;
  dungeonId: string;
  role: DungeonRole;
  level: number;
  joinedAt: number;
}

// ============================================================
//  DungeonMatchManager
// ============================================================

export class DungeonMatchManager {
  /** characterId -> QueueEntry */
  private queue: Map<string, QueueEntry> = new Map();

  /** 取得角色的回呼 */
  private getCharacterFn: ((id: string) => Character | undefined) | null = null;

  /** 建立副本實例的回呼 */
  private createInstanceFn:
    | ((partyId: string, dungeonId: string, players: Character[]) => { success: boolean; message: string })
    | null = null;

  /** 超時清理計時器 */
  private timeoutTimer: ReturnType<typeof setInterval> | null = null;

  // ──────────────────────────────────────────────────────────
  //  設定依賴
  // ──────────────────────────────────────────────────────────

  setCharacterLookup(fn: (id: string) => Character | undefined): void {
    this.getCharacterFn = fn;
  }

  setCreateInstanceFn(
    fn: (partyId: string, dungeonId: string, players: Character[]) => { success: boolean; message: string },
  ): void {
    this.createInstanceFn = fn;
  }

  // ──────────────────────────────────────────────────────────
  //  初始化 / 關閉
  // ──────────────────────────────────────────────────────────

  init(): void {
    // 每 60 秒清理超時的排隊項目
    this.timeoutTimer = setInterval(() => {
      this.processTimeouts();
    }, 60_000);
  }

  shutdown(): void {
    if (this.timeoutTimer) {
      clearInterval(this.timeoutTimer);
      this.timeoutTimer = null;
    }
    this.queue.clear();
  }

  // ──────────────────────────────────────────────────────────
  //  加入排隊
  // ──────────────────────────────────────────────────────────

  joinQueue(characterId: string, dungeonId: string): string {
    // 檢查副本是否存在
    const def = DUNGEON_DEFS[dungeonId];
    if (!def) {
      return '副本不存在。請使用 dungeon list 查看可用副本。';
    }

    // 取得角色資料
    const char = this.getCharacterFn?.(characterId);
    if (!char) {
      return '無法取得角色資料。';
    }

    // 檢查是否已在排隊中
    if (this.queue.has(characterId)) {
      return '你已經在排隊中了。使用 dungeon queue cancel 取消排隊。';
    }

    // 檢查等級需求（副本等級 ± 5）
    if (char.level < def.levelReq - 5) {
      return `等級不足，此副本需要 Lv.${def.levelReq - 5} 以上才能排隊。`;
    }
    if (char.level > def.levelReq + 5) {
      return `你的等級過高（Lv.${char.level}），此副本匹配範圍為 Lv.${def.levelReq - 5}~${def.levelReq + 5}。`;
    }

    // 判定角色職業對應的角色
    const role = CLASS_ROLES[char.classId] ?? 'dps';

    const entry: QueueEntry = {
      characterId,
      characterName: char.name,
      dungeonId,
      role,
      level: char.level,
      joinedAt: Date.now(),
    };

    this.queue.set(characterId, entry);

    // 嘗試立即匹配
    const matched = this.tryMatch(dungeonId);
    if (matched) {
      return '副本匹配成功！隊伍已組建。';
    }

    // 顯示排隊狀態
    const info = this.getQueueInfo(dungeonId);
    return `已加入「${def.name}」排隊。匹配中... 當前等待：${info.tanks} 坦克 / ${info.healers} 治療 / ${info.dps} 輸出`;
  }

  // ──────────────────────────────────────────────────────────
  //  離開排隊
  // ──────────────────────────────────────────────────────────

  leaveQueue(characterId: string): string {
    if (!this.queue.has(characterId)) {
      return '你目前不在排隊中。';
    }
    this.queue.delete(characterId);
    return '已取消排隊。';
  }

  // ──────────────────────────────────────────────────────────
  //  排隊狀態
  // ──────────────────────────────────────────────────────────

  getQueueStatus(characterId: string): string {
    const entry = this.queue.get(characterId);
    if (!entry) {
      return '你目前不在排隊中。';
    }

    const def = DUNGEON_DEFS[entry.dungeonId];
    const dungeonName = def?.name ?? entry.dungeonId;
    const waitTime = Math.floor((Date.now() - entry.joinedAt) / 1000);
    const minutes = Math.floor(waitTime / 60);
    const seconds = waitTime % 60;

    const info = this.getQueueInfo(entry.dungeonId);

    let text = `── 排隊狀態 ──\n`;
    text += `副本：${dungeonName}\n`;
    text += `你的角色：${this.roleToName(entry.role)}\n`;
    text += `等待時間：${minutes} 分 ${seconds} 秒\n`;
    text += `當前等待：${info.tanks} 坦克 / ${info.healers} 治療 / ${info.dps} 輸出\n`;
    text += `需求：1 坦克 + 1 治療 + 1~2 輸出（共 3~4 人）`;

    return text;
  }

  // ──────────────────────────────────────────────────────────
  //  嘗試匹配
  // ──────────────────────────────────────────────────────────

  tryMatch(dungeonId: string): boolean {
    // 收集同一副本的所有排隊者，按角色分類
    const tanks: QueueEntry[] = [];
    const healers: QueueEntry[] = [];
    const dpsPlayers: QueueEntry[] = [];

    for (const entry of this.queue.values()) {
      if (entry.dungeonId !== dungeonId) continue;
      switch (entry.role) {
        case 'tank': tanks.push(entry); break;
        case 'healer': healers.push(entry); break;
        case 'dps': dpsPlayers.push(entry); break;
      }
    }

    // 最低需求：1 tank + 1 healer + 1 dps = 3 人
    if (tanks.length < 1 || healers.length < 1 || dpsPlayers.length < 1) {
      return false;
    }

    // 選擇匹配成員（按加入時間排序，先排先匹配）
    tanks.sort((a, b) => a.joinedAt - b.joinedAt);
    healers.sort((a, b) => a.joinedAt - b.joinedAt);
    dpsPlayers.sort((a, b) => a.joinedAt - b.joinedAt);

    const selectedTank = tanks[0];
    const selectedHealer = healers[0];

    // 選 1~2 名 DPS（最多湊到 4 人）
    const selectedDps: QueueEntry[] = [dpsPlayers[0]];
    if (dpsPlayers.length >= 2) {
      selectedDps.push(dpsPlayers[1]);
    }

    const matchedEntries = [selectedTank, selectedHealer, ...selectedDps];

    // 取得角色資料
    const players: Character[] = [];
    for (const entry of matchedEntries) {
      const char = this.getCharacterFn?.(entry.characterId);
      if (!char) return false; // 如果角色資料不存在，匹配失敗
      players.push(char);
    }

    // 使用 tank 的 characterId 作為 partyId（副本系統支援此模式）
    const partyId = `match_${Date.now()}`;

    // 通知所有匹配的玩家
    const memberNames = matchedEntries.map(e => `${e.characterName}(${this.roleToName(e.role)})`).join('、');
    for (const entry of matchedEntries) {
      sendToCharacter(entry.characterId, 'system', {
        text: `副本匹配成功！隊伍已組建。\n成員：${memberNames}`,
      });
    }

    // 從排隊中移除匹配的玩家
    for (const entry of matchedEntries) {
      this.queue.delete(entry.characterId);
    }

    // 建立副本實例
    if (this.createInstanceFn) {
      const result = this.createInstanceFn(partyId, dungeonId, players);
      if (!result.success) {
        // 匹配成功但建立副本失敗，將玩家重新加入排隊
        for (const entry of matchedEntries) {
          this.queue.set(entry.characterId, entry);
          sendToCharacter(entry.characterId, 'system', {
            text: `副本建立失敗：${result.message}\n已自動重新加入排隊。`,
          });
        }
        return false;
      }
    }

    return true;
  }

  // ──────────────────────────────────────────────────────────
  //  排隊資訊
  // ──────────────────────────────────────────────────────────

  getQueueInfo(dungeonId: string): { tanks: number; healers: number; dps: number; total: number } {
    let tanks = 0;
    let healers = 0;
    let dps = 0;

    for (const entry of this.queue.values()) {
      if (entry.dungeonId !== dungeonId) continue;
      switch (entry.role) {
        case 'tank': tanks++; break;
        case 'healer': healers++; break;
        case 'dps': dps++; break;
      }
    }

    return { tanks, healers, dps, total: tanks + healers + dps };
  }

  // ──────────────────────────────────────────────────────────
  //  超時處理
  // ──────────────────────────────────────────────────────────

  processTimeouts(): void {
    const now = Date.now();
    const timeout = 15 * 60 * 1000; // 15 分鐘

    for (const [characterId, entry] of this.queue) {
      if (now - entry.joinedAt > timeout) {
        this.queue.delete(characterId);
        sendToCharacter(characterId, 'system', {
          text: '你的副本排隊已超時（超過 15 分鐘），已自動取消。',
        });
      }
    }
  }

  // ──────────────────────────────────────────────────────────
  //  輔助方法
  // ──────────────────────────────────────────────────────────

  /** 角色名稱轉換 */
  private roleToName(role: DungeonRole): string {
    switch (role) {
      case 'tank': return '坦克';
      case 'healer': return '治療';
      case 'dps': return '輸出';
    }
  }

  /** 檢查角色是否在排隊中 */
  isInQueue(characterId: string): boolean {
    return this.queue.has(characterId);
  }
}
