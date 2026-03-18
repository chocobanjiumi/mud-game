// 每日簽到系統 — DailyRewardManager
// 7 天循環獎勵，連續簽到追蹤

import { getDb } from '../db/schema.js';
import { sendToCharacter } from '../ws/handler.js';
import {
  getCharacterById, saveCharacter,
  addInventoryItem,
} from '../db/queries.js';
import { ITEM_DEFS } from '@game/shared';
import type { Character } from '@game/shared';

// ============================================================
//  獎勵定義
// ============================================================

export interface DailyReward {
  day: number;
  description: string;
  gold: number;
  items: { itemId: string; count: number }[];
}

const DAILY_REWARDS: DailyReward[] = [
  { day: 1, description: '100 金幣', gold: 100, items: [] },
  { day: 2, description: '小型 HP 藥水 x3', gold: 0, items: [{ itemId: 'small_hp_potion', count: 3 }] },
  { day: 3, description: '200 金幣', gold: 200, items: [] },
  { day: 4, description: '力量藥水 x1', gold: 0, items: [{ itemId: 'strength_potion', count: 1 }] },
  { day: 5, description: '500 金幣', gold: 500, items: [] },
  { day: 6, description: '普通強化石 x1', gold: 0, items: [{ itemId: 'normal_enhance_stone', count: 1 }] },
  { day: 7, description: '1000 金幣 + 銀鑰匙 x1', gold: 1000, items: [{ itemId: 'silver_key', count: 1 }] },
];

// ============================================================
//  型別
// ============================================================

interface SigninRow {
  character_id: string;
  last_signin: string | null;
  streak: number;
  total_signins: number;
}

// ============================================================
//  DailyRewardManager
// ============================================================

export class DailyRewardManager {

  ensureTables(): void {
    try {
      getDb().exec(`
        CREATE TABLE IF NOT EXISTS daily_signin (
          character_id TEXT PRIMARY KEY,
          last_signin TEXT,
          streak INTEGER DEFAULT 0,
          total_signins INTEGER DEFAULT 0
        )
      `);
    } catch { /* table may already exist */ }
  }

  // ──────────────────────────────────────────────────────────
  //  簽到
  // ──────────────────────────────────────────────────────────

  signin(characterId: string, character: Character): { success: boolean; message: string } {
    const today = this.getTodayString();
    const row = this.getSigninRow(characterId);

    if (row && row.last_signin === today) {
      return { success: false, message: '你今天已經簽到過了！明天再來吧。' };
    }

    // 計算連續簽到
    let newStreak: number;
    if (row && row.last_signin === this.getYesterdayString()) {
      newStreak = row.streak + 1;
    } else {
      newStreak = 1;
    }

    const totalSignins = (row?.total_signins ?? 0) + 1;

    // 計算今日獎勵（7 天循環）
    const dayIndex = ((newStreak - 1) % 7);
    const reward = DAILY_REWARDS[dayIndex];

    // 發放獎勵
    if (reward.gold > 0) {
      character.gold += reward.gold;
      saveCharacter(character);
    }

    for (const item of reward.items) {
      addInventoryItem(characterId, item.itemId, item.count);
    }

    // 更新簽到紀錄
    try {
      if (row) {
        getDb().prepare(
          'UPDATE daily_signin SET last_signin = ?, streak = ?, total_signins = ? WHERE character_id = ?',
        ).run(today, newStreak, totalSignins, characterId);
      } else {
        getDb().prepare(
          'INSERT INTO daily_signin (character_id, last_signin, streak, total_signins) VALUES (?, ?, ?, ?)',
        ).run(characterId, today, newStreak, totalSignins);
      }
    } catch { /* ignore */ }

    let msg = `簽到成功！連續簽到第 ${newStreak} 天（累計 ${totalSignins} 次）\n`;
    msg += `今日獎勵：${reward.description}\n`;

    // 預覽明日獎勵
    const tomorrowIndex = (newStreak % 7);
    const tomorrowReward = DAILY_REWARDS[tomorrowIndex];
    msg += `明日獎勵預覽（第 ${tomorrowIndex + 1} 天）：${tomorrowReward.description}`;

    return { success: true, message: msg };
  }

  // ──────────────────────────────────────────────────────────
  //  查詢狀態
  // ──────────────────────────────────────────────────────────

  getSigninStatus(characterId: string): {
    canSignin: boolean;
    streak: number;
    totalSignins: number;
    lastSignin: string | null;
    nextReward: DailyReward;
  } {
    const row = this.getSigninRow(characterId);
    const today = this.getTodayString();

    const canSignin = !row || row.last_signin !== today;
    const streak = row?.streak ?? 0;
    const totalSignins = row?.total_signins ?? 0;

    // 如果今天還沒簽到，下一個獎勵取決於連續天數
    let nextDay: number;
    if (canSignin) {
      // 檢查是否連續
      if (row && row.last_signin === this.getYesterdayString()) {
        nextDay = streak % 7;
      } else {
        nextDay = 0; // 斷簽，重置為第 1 天
      }
    } else {
      nextDay = streak % 7;
    }
    const nextReward = DAILY_REWARDS[nextDay];

    return {
      canSignin,
      streak,
      totalSignins,
      lastSignin: row?.last_signin ?? null,
      nextReward,
    };
  }

  canSignin(characterId: string): boolean {
    const row = this.getSigninRow(characterId);
    const today = this.getTodayString();
    return !row || row.last_signin !== today;
  }

  formatSigninStatus(characterId: string): string {
    const status = this.getSigninStatus(characterId);

    let text = '每日簽到\n';
    text += '─'.repeat(40) + '\n';
    text += `連續簽到：${status.streak} 天\n`;
    text += `累計簽到：${status.totalSignins} 次\n`;

    if (status.canSignin) {
      text += `\n可以簽到！使用 signin 領取獎勵。\n`;
      text += `今日獎勵：${status.nextReward.description}\n`;
    } else {
      text += `\n今天已經簽到過了。明天再來吧！\n`;
    }

    text += '\n7 天獎勵循環：\n';
    for (const reward of DAILY_REWARDS) {
      const current = status.streak > 0 && ((status.streak - 1) % 7) + 1 === reward.day ? ' ← 今日' : '';
      text += `  第 ${reward.day} 天：${reward.description}${current}\n`;
    }

    return text;
  }

  // ──────────────────────────────────────────────────────────
  //  內部
  // ──────────────────────────────────────────────────────────

  private getSigninRow(characterId: string): SigninRow | undefined {
    try {
      return getDb()
        .prepare('SELECT * FROM daily_signin WHERE character_id = ?')
        .get(characterId) as SigninRow | undefined;
    } catch {
      return undefined;
    }
  }

  private getTodayString(): string {
    const now = new Date();
    return now.toISOString().slice(0, 10); // YYYY-MM-DD
  }

  private getYesterdayString(): string {
    const d = new Date();
    d.setDate(d.getDate() - 1);
    return d.toISOString().slice(0, 10);
  }
}
