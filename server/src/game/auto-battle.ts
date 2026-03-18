// 自動戰鬥系統 — AutoBattleManager

// ============================================================
//  型別定義
// ============================================================

export interface AutoBattleConfig {
  enabled: boolean;
  fleeHpPercent: number;   // 逃跑 HP 閾值（預設 30）
  autoUsePotion: boolean;  // 自動使用藥水（預設 true）
  potionHpPercent: number; // 藥水使用 HP 閾值（預設 50）
  autoLoot: boolean;       // 自動拾取（預設 true）
  autoAttack: boolean;     // 自動攻擊（預設 true）
}

// ============================================================
//  AutoBattleManager
// ============================================================

export class AutoBattleManager {
  /** characterId -> AutoBattleConfig */
  private configs: Map<string, AutoBattleConfig> = new Map();

  /** characterId -> pending timer handle */
  private pendingTimers: Map<string, ReturnType<typeof setTimeout>> = new Map();

  /** 自動戰鬥回呼：當需要自動攻擊時呼叫 */
  private autoAttackFn: ((characterId: string) => void) | null = null;

  /** 自動使用藥水回呼 */
  private autoUsePotionFn: ((characterId: string) => void) | null = null;

  /** 自動逃跑回呼 */
  private autoFleeFn: ((characterId: string) => void) | null = null;

  /** 自動拾取回呼 */
  private autoLootFn: ((characterId: string) => void) | null = null;

  // ──────────────────────────────────────────────────────────
  //  設定回呼
  // ──────────────────────────────────────────────────────────

  setCallbacks(opts: {
    autoAttack: (characterId: string) => void;
    autoUsePotion: (characterId: string) => void;
    autoFlee: (characterId: string) => void;
    autoLoot: (characterId: string) => void;
  }): void {
    this.autoAttackFn = opts.autoAttack;
    this.autoUsePotionFn = opts.autoUsePotion;
    this.autoFleeFn = opts.autoFlee;
    this.autoLootFn = opts.autoLoot;
  }

  // ──────────────────────────────────────────────────────────
  //  啟用/停用
  // ──────────────────────────────────────────────────────────

  enable(characterId: string): string {
    let config = this.configs.get(characterId);
    if (!config) {
      config = this.getDefaultConfig();
      this.configs.set(characterId, config);
    }
    config.enabled = true;
    return '自動戰鬥已啟用。';
  }

  disable(characterId: string): string {
    const config = this.configs.get(characterId);
    if (config) {
      config.enabled = false;
    }
    // 清除待處理的計時器
    this.clearPendingTimer(characterId);
    return '自動戰鬥已停用。';
  }

  isEnabled(characterId: string): boolean {
    const config = this.configs.get(characterId);
    return config?.enabled ?? false;
  }

  // ──────────────────────────────────────────────────────────
  //  設定管理
  // ──────────────────────────────────────────────────────────

  getConfig(characterId: string): AutoBattleConfig {
    return this.configs.get(characterId) ?? this.getDefaultConfig();
  }

  setConfig(
    characterId: string,
    key: keyof AutoBattleConfig,
    value: number | boolean,
  ): { success: boolean; message: string } {
    let config = this.configs.get(characterId);
    if (!config) {
      config = this.getDefaultConfig();
      this.configs.set(characterId, config);
    }

    switch (key) {
      case 'fleeHpPercent':
        if (typeof value !== 'number' || value < 0 || value > 100) {
          return { success: false, message: '逃跑 HP 閾值須在 0-100 之間。' };
        }
        config.fleeHpPercent = value;
        return { success: true, message: `逃跑 HP 閾值已設為 ${value}%。` };

      case 'potionHpPercent':
        if (typeof value !== 'number' || value < 0 || value > 100) {
          return { success: false, message: '藥水 HP 閾值須在 0-100 之間。' };
        }
        config.potionHpPercent = value;
        return { success: true, message: `藥水使用 HP 閾值已設為 ${value}%。` };

      case 'autoUsePotion':
        config.autoUsePotion = !!value;
        return { success: true, message: `自動使用藥水已${config.autoUsePotion ? '啟用' : '停用'}。` };

      case 'autoLoot':
        config.autoLoot = !!value;
        return { success: true, message: `自動拾取已${config.autoLoot ? '啟用' : '停用'}。` };

      case 'autoAttack':
        config.autoAttack = !!value;
        return { success: true, message: `自動攻擊已${config.autoAttack ? '啟用' : '停用'}。` };

      default:
        return { success: false, message: '無效的設定項。' };
    }
  }

  // ──────────────────────────────────────────────────────────
  //  自動行動處理
  // ──────────────────────────────────────────────────────────

  /**
   * 戰鬥結束後呼叫：若啟用自動戰鬥，排程下一次攻擊
   */
  processAutoAction(characterId: string): void {
    const config = this.configs.get(characterId);
    if (!config?.enabled) return;

    // 自動拾取
    if (config.autoLoot && this.autoLootFn) {
      this.autoLootFn(characterId);
    }

    // 排程下一次自動攻擊（2 秒延遲）
    if (config.autoAttack && this.autoAttackFn) {
      this.clearPendingTimer(characterId);
      const timer = setTimeout(() => {
        this.pendingTimers.delete(characterId);
        // 再次檢查是否仍啟用
        const currentConfig = this.configs.get(characterId);
        if (currentConfig?.enabled && currentConfig.autoAttack && this.autoAttackFn) {
          this.autoAttackFn(characterId);
        }
      }, 2000);
      this.pendingTimers.set(characterId, timer);
    }
  }

  /**
   * 戰鬥回合中呼叫：檢查是否需要自動使用藥水或逃跑
   * @param hpPercent 當前 HP 百分比
   */
  checkCombatAutoActions(characterId: string, hpPercent: number): void {
    const config = this.configs.get(characterId);
    if (!config?.enabled) return;

    // 逃跑優先（HP 更低時）
    if (hpPercent <= config.fleeHpPercent) {
      if (this.autoFleeFn) {
        this.autoFleeFn(characterId);
      }
      return;
    }

    // 自動使用藥水
    if (config.autoUsePotion && hpPercent <= config.potionHpPercent) {
      if (this.autoUsePotionFn) {
        this.autoUsePotionFn(characterId);
      }
    }
  }

  // ──────────────────────────────────────────────────────────
  //  格式化狀態
  // ──────────────────────────────────────────────────────────

  formatStatus(characterId: string): string {
    const config = this.getConfig(characterId);

    let text = '═══ 自動戰鬥設定 ═══\n';
    text += `  狀態：${config.enabled ? '啟用中' : '已停用'}\n`;
    text += `  自動攻擊：${config.autoAttack ? '開' : '關'}\n`;
    text += `  自動拾取：${config.autoLoot ? '開' : '關'}\n`;
    text += `  自動使用藥水：${config.autoUsePotion ? '開' : '關'}\n`;
    text += `  藥水 HP 閾值：${config.potionHpPercent}%\n`;
    text += `  逃跑 HP 閾值：${config.fleeHpPercent}%\n`;

    return text;
  }

  // ──────────────────────────────────────────────────────────
  //  清理
  // ──────────────────────────────────────────────────────────

  /** 玩家離線時清理 */
  cleanup(characterId: string): void {
    this.configs.delete(characterId);
    this.clearPendingTimer(characterId);
  }

  // ──────────────────────────────────────────────────────────
  //  內部方法
  // ──────────────────────────────────────────────────────────

  private getDefaultConfig(): AutoBattleConfig {
    return {
      enabled: false,
      fleeHpPercent: 30,
      autoUsePotion: true,
      potionHpPercent: 50,
      autoLoot: true,
      autoAttack: true,
    };
  }

  private clearPendingTimer(characterId: string): void {
    const timer = this.pendingTimers.get(characterId);
    if (timer) {
      clearTimeout(timer);
      this.pendingTimers.delete(characterId);
    }
  }
}
