// Arinova 代幣經濟系統 — CurrencyManager
// 管理 Arinova 代幣的扣款、獎勵、查詢、以及 Premium 功能

import { Arinova } from '@arinova-ai/spaces-sdk';
import { isGuestUser, getCachedToken } from '../auth/arinova.js';
import { sendToCharacter } from '../ws/handler.js';

// ============================================================
//  型別
// ============================================================

/** Premium 商品定義 */
export interface PremiumItem {
  id: string;
  name: string;
  description: string;
  price: number; // Arinova 代幣
  type: 'cosmetic' | 'revive' | 'dungeon_pass' | 'exp_boost';
  data?: Record<string, unknown>;
}

/** 交易紀錄 */
interface TransactionRecord {
  transactionId: string;
  userId: string;
  amount: number;
  type: 'charge' | 'award';
  description: string;
  timestamp: number;
}

// ============================================================
//  Premium 商品目錄
// ============================================================

export const PREMIUM_ITEMS: Record<string, PremiumItem> = {
  phoenix_feather: {
    id: 'phoenix_feather',
    name: '鳳凰之羽',
    price: 50,
    description: '死亡時自動復活，不損失金幣。',
    type: 'revive',
  },
  exp_boost_1h: {
    id: 'exp_boost_1h',
    name: '經驗加倍（1小時）',
    price: 30,
    description: '獲得經驗值加倍持續 1 小時。',
    type: 'exp_boost',
    data: { duration: 3_600_000, multiplier: 2 },
  },
  dungeon_pass_goblin: {
    id: 'dungeon_pass_goblin',
    name: '哥布林巢穴通行證',
    price: 20,
    description: '免費進入哥布林巢穴一次。',
    type: 'dungeon_pass',
    data: { dungeonId: 'goblin_lair' },
  },
  title_hero: {
    id: 'title_hero',
    name: '稱號：英雄',
    price: 100,
    description: '獲得「英雄」特殊稱號。',
    type: 'cosmetic',
    data: { title: '英雄' },
  },
  title_shadow: {
    id: 'title_shadow',
    name: '稱號：暗影行者',
    price: 100,
    description: '獲得「暗影行者」特殊稱號。',
    type: 'cosmetic',
    data: { title: '暗影行者' },
  },
  revive_no_penalty: {
    id: 'revive_no_penalty',
    name: '無痛復活卷',
    price: 25,
    description: '下次死亡時復活不損失金幣。',
    type: 'revive',
  },
};

// ============================================================
//  CurrencyManager
// ============================================================

export class CurrencyManager {
  /** Arinova app 認證資訊 */
  private clientId: string;
  private clientSecret: string;

  /** 交易紀錄（記憶體中快取，可接 DB） */
  private transactionLog: TransactionRecord[] = [];

  /** userId -> 餘額快取 */
  private balanceCache: Map<string, { balance: number; cachedAt: number }> = new Map();

  /** 餘額快取有效時間（毫秒） */
  private readonly BALANCE_CACHE_TTL = 60_000; // 1 分鐘

  constructor(clientId?: string, clientSecret?: string) {
    this.clientId = clientId ?? process.env.ARINOVA_APP_ID ?? '';
    this.clientSecret = clientSecret ?? process.env.ARINOVA_CLIENT_SECRET ?? '';
  }

  /** 設定認證資訊 */
  setCredentials(clientId: string, clientSecret: string): void {
    this.clientId = clientId;
    this.clientSecret = clientSecret;
  }

  // ──────────────────────────────────────────────────────────
  //  扣款
  // ──────────────────────────────────────────────────────────

  /**
   * 扣除使用者的 Arinova 代幣
   * @param userId Arinova 使用者 ID
   * @param amount 扣款金額
   * @param description 扣款說明
   * @returns 扣款結果
   */
  async chargeTokens(
    userId: string,
    amount: number,
    description: string = '',
  ): Promise<{ success: boolean; newBalance?: number; error?: string }> {
    if (isGuestUser(userId)) {
      return { success: false, error: '訪客無法使用 Arinova 代幣功能。請使用 Arinova 帳號登入。' };
    }

    if (amount <= 0) {
      return { success: false, error: '扣款金額必須大於 0。' };
    }

    try {
      const result = await Arinova.economy.charge({
        userId,
        amount,
        description,
        clientId: this.clientId,
        clientSecret: this.clientSecret,
      });

      // 更新快取
      this.balanceCache.set(userId, {
        balance: result.newBalance,
        cachedAt: Date.now(),
      });

      // 記錄交易
      this.transactionLog.push({
        transactionId: result.transactionId,
        userId,
        amount,
        type: 'charge',
        description,
        timestamp: Date.now(),
      });

      console.log(`[Economy] 扣款成功: ${userId} -${amount} (${description})`);
      return { success: true, newBalance: result.newBalance };
    } catch (err) {
      const message = err instanceof Error ? err.message : '扣款失敗';
      console.error(`[Economy] 扣款失敗 (${userId}):`, message);
      return { success: false, error: message };
    }
  }

  // ──────────────────────────────────────────────────────────
  //  獎勵
  // ──────────────────────────────────────────────────────────

  /**
   * 獎勵使用者 Arinova 代幣
   * @param userId Arinova 使用者 ID
   * @param amount 獎勵金額
   * @param description 獎勵說明
   * @returns 獎勵結果
   */
  async awardTokens(
    userId: string,
    amount: number,
    description: string = '',
  ): Promise<{ success: boolean; newBalance?: number; error?: string }> {
    if (isGuestUser(userId)) {
      return { success: false, error: '訪客無法獲得 Arinova 代幣。' };
    }

    if (amount <= 0) {
      return { success: false, error: '獎勵金額必須大於 0。' };
    }

    try {
      const result = await Arinova.economy.award({
        userId,
        amount,
        description,
        clientId: this.clientId,
        clientSecret: this.clientSecret,
      });

      // 更新快取
      this.balanceCache.set(userId, {
        balance: result.newBalance,
        cachedAt: Date.now(),
      });

      // 記錄交易
      this.transactionLog.push({
        transactionId: result.transactionId,
        userId,
        amount,
        type: 'award',
        description,
        timestamp: Date.now(),
      });

      console.log(`[Economy] 獎勵成功: ${userId} +${amount} (${description})`);
      return { success: true, newBalance: result.newBalance };
    } catch (err) {
      const message = err instanceof Error ? err.message : '獎勵失敗';
      console.error(`[Economy] 獎勵失敗 (${userId}):`, message);
      return { success: false, error: message };
    }
  }

  // ──────────────────────────────────────────────────────────
  //  餘額查詢
  // ──────────────────────────────────────────────────────────

  /**
   * 查詢使用者的 Arinova 代幣餘額
   * @param accessToken 使用者的 OAuth access token
   */
  async getBalance(accessToken: string): Promise<number | null> {
    try {
      const { balance } = await Arinova.economy.balance(accessToken);
      return balance;
    } catch (err) {
      console.error('[Economy] 查詢餘額失敗:', err);
      return null;
    }
  }

  /**
   * 查詢使用者的 Arinova 代幣餘額（透過 userId，使用快取 token）
   */
  async getBalanceByUserId(userId: string): Promise<number | null> {
    if (isGuestUser(userId)) return null;

    // 先檢查快取
    const cached = this.balanceCache.get(userId);
    if (cached && Date.now() - cached.cachedAt < this.BALANCE_CACHE_TTL) {
      return cached.balance;
    }

    const token = getCachedToken(userId);
    if (!token) return null;

    const balance = await this.getBalance(token);
    if (balance !== null) {
      this.balanceCache.set(userId, { balance, cachedAt: Date.now() });
    }
    return balance;
  }

  // ──────────────────────────────────────────────────────────
  //  Premium 功能
  // ──────────────────────────────────────────────────────────

  /**
   * 購買 Premium 商品
   * Premium 功能：復活不損失金幣、特殊稱號等
   */
  async purchasePremiumItem(
    userId: string,
    characterId: string,
    itemId: string,
  ): Promise<{ success: boolean; message: string; item?: PremiumItem }> {
    const item = PREMIUM_ITEMS[itemId];
    if (!item) {
      return { success: false, message: '商品不存在。' };
    }

    const chargeResult = await this.chargeTokens(userId, item.price, `購買「${item.name}」`);
    if (!chargeResult.success) {
      return {
        success: false,
        message: `購買失敗：${chargeResult.error ?? '餘額不足'}`,
      };
    }

    // 通知玩家
    sendToCharacter(characterId, 'system', {
      text: `成功購買「${item.name}」！剩餘 Arinova 代幣：${chargeResult.newBalance}`,
    });

    console.log(`[Economy] Premium 購買: ${userId} → ${item.name}`);
    return { success: true, message: `成功購買「${item.name}」`, item };
  }

  /**
   * 無損復活（Premium 功能）
   * 死亡時不損失金幣
   */
  async reviveWithoutPenalty(
    userId: string,
    characterId: string,
  ): Promise<{ success: boolean; message: string }> {
    const cost = PREMIUM_ITEMS.revive_no_penalty.price;

    const chargeResult = await this.chargeTokens(userId, cost, '無痛復活');
    if (!chargeResult.success) {
      return {
        success: false,
        message: `復活失敗：${chargeResult.error ?? '代幣不足'}`,
      };
    }

    sendToCharacter(characterId, 'system', {
      text: `使用了無痛復活！不會損失金幣。剩餘 Arinova 代幣：${chargeResult.newBalance}`,
    });

    return { success: true, message: '無痛復活成功！' };
  }

  // ──────────────────────────────────────────────────────────
  //  遊戲獎勵整合
  // ──────────────────────────────────────────────────────────

  /** 擊敗 Boss 時獎勵代幣 */
  async rewardBossKill(userId: string, characterId: string, bossName: string, amount: number): Promise<void> {
    if (isGuestUser(userId)) return;

    const result = await this.awardTokens(userId, amount, `擊敗 Boss「${bossName}」`);
    if (result.success) {
      sendToCharacter(characterId, 'system', {
        text: `擊敗「${bossName}」獲得 ${amount} Arinova 代幣！`,
      });
    }
  }

  /** 完成成就時獎勵代幣 */
  async rewardAchievement(userId: string, characterId: string, achievementName: string, amount: number): Promise<void> {
    if (isGuestUser(userId)) return;

    const result = await this.awardTokens(userId, amount, `完成成就「${achievementName}」`);
    if (result.success) {
      sendToCharacter(characterId, 'system', {
        text: `完成成就「${achievementName}」獲得 ${amount} Arinova 代幣！`,
      });
    }
  }

  // ──────────────────────────────────────────────────────────
  //  PvP 賭注
  // ──────────────────────────────────────────────────────────

  /** 下注（扣款） */
  async placeBet(userId: string, amount: number): Promise<boolean> {
    const result = await this.chargeTokens(userId, amount, 'PvP 賭注');
    return result.success;
  }

  /** 賭注獎金發放 */
  async payoutBet(userId: string, amount: number): Promise<void> {
    await this.awardTokens(userId, amount, 'PvP 賭注獎金');
  }

  // ──────────────────────────────────────────────────────────
  //  查詢 / 統計
  // ──────────────────────────────────────────────────────────

  /** 取得 Premium 商品列表 */
  getPremiumItems(): PremiumItem[] {
    return Object.values(PREMIUM_ITEMS);
  }

  /** 取得使用者的交易紀錄 */
  getTransactionHistory(userId: string, limit: number = 20): TransactionRecord[] {
    return this.transactionLog
      .filter(t => t.userId === userId)
      .slice(-limit);
  }

  /** 清除餘額快取 */
  clearBalanceCache(userId?: string): void {
    if (userId) {
      this.balanceCache.delete(userId);
    } else {
      this.balanceCache.clear();
    }
  }
}
