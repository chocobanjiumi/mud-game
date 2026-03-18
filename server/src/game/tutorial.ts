// 新手教學系統 — TutorialManager

import { getDb } from '../db/schema.js';
import { addItemToInventory } from '../db/database.js';
import { sendToCharacter } from '../ws/handler.js';

// ============================================================
//  常數
// ============================================================

/** 教學觸發動作 */
export type TutorialTrigger = 'move' | 'kill' | 'equip' | 'skill' | 'talk' | 'quest';

/** 教學步驟定義 */
interface TutorialStep {
  step: number;
  trigger: TutorialTrigger;
  hint: string;
}

const TUTORIAL_STEPS: TutorialStep[] = [
  {
    step: 0,
    trigger: 'move',
    hint: '歡迎來到這個世界！輸入 `go <方向>` 來移動。試試 `go north` 往北走。',
  },
  {
    step: 1,
    trigger: 'kill',
    hint: '發現了怪物！輸入 `attack` 開始戰鬥。',
  },
  {
    step: 2,
    trigger: 'equip',
    hint: '你獲得了裝備！輸入 `equip <物品>` 穿上它。',
  },
  {
    step: 3,
    trigger: 'skill',
    hint: '你有可用的技能！輸入 `skills` 查看，戰鬥中輸入 `skill <技能名>` 使用。',
  },
  {
    step: 4,
    trigger: 'talk',
    hint: '看到 NPC 了！輸入 `talk <NPC名>` 與他對話。',
  },
  {
    step: 5,
    trigger: 'quest',
    hint: '你可以接受任務了！輸入 `quest list` 查看可接任務。',
  },
];

const TOTAL_STEPS = TUTORIAL_STEPS.length;

/** 新手禮包獎勵 */
const STARTER_PACK = {
  items: [
    { itemId: 'small_hp_potion', quantity: 5 },
    { itemId: 'wooden_sword', quantity: 1 },
  ],
  gold: 500,
  exp: 200,
};

// ============================================================
//  DB row type
// ============================================================

interface TutorialProgressRow {
  character_id: string;
  current_step: number;
  completed: number;
  skipped: number;
}

// ============================================================
//  TutorialManager
// ============================================================

export class TutorialManager {
  // ──────────────────────────────────────────────────────────
  //  DB 初始化
  // ──────────────────────────────────────────────────────────

  ensureTables(): void {
    try {
      getDb().exec(`
        CREATE TABLE IF NOT EXISTS tutorial_progress (
          character_id TEXT PRIMARY KEY,
          current_step INTEGER DEFAULT 0,
          completed INTEGER DEFAULT 0,
          skipped INTEGER DEFAULT 0
        )
      `);
    } catch {
      // 忽略
    }
  }

  // ──────────────────────────────────────────────────────────
  //  開始教學
  // ──────────────────────────────────────────────────────────

  /**
   * 角色創建後呼叫，初始化教學進度
   */
  startTutorial(characterId: string): void {
    try {
      getDb()
        .prepare(
          'INSERT OR IGNORE INTO tutorial_progress (character_id, current_step, completed, skipped) VALUES (?, 0, 0, 0)',
        )
        .run(characterId);

      // 發送第一步提示
      const hint = this.getHintMessage(0);
      sendToCharacter(characterId, 'system', { text: `【新手教學】${hint}` });
      sendToCharacter(characterId, 'system', { text: '輸入 `tutorial` 查看當前教學步驟，或 `tutorial skip` 跳過教學。' });
    } catch {
      // 忽略
    }
  }

  // ──────────────────────────────────────────────────────────
  //  取得當前步驟
  // ──────────────────────────────────────────────────────────

  getCurrentStep(characterId: string): number | null {
    try {
      const row = getDb()
        .prepare('SELECT * FROM tutorial_progress WHERE character_id = ?')
        .get(characterId) as TutorialProgressRow | undefined;

      if (!row) return null;
      if (row.completed || row.skipped) return null;
      return row.current_step;
    } catch {
      return null;
    }
  }

  // ──────────────────────────────────────────────────────────
  //  推進教學步驟
  // ──────────────────────────────────────────────────────────

  /**
   * 檢查動作是否匹配當前教學步驟，若匹配則推進
   */
  advanceStep(characterId: string, triggerAction: TutorialTrigger): void {
    const currentStep = this.getCurrentStep(characterId);
    if (currentStep === null) return; // 不在教學中

    const stepDef = TUTORIAL_STEPS[currentStep];
    if (!stepDef) return;

    // 動作必須匹配當前步驟的觸發條件
    if (stepDef.trigger !== triggerAction) return;

    const nextStep = currentStep + 1;

    if (nextStep >= TOTAL_STEPS) {
      // 全部完成
      this.completeTutorial(characterId);
    } else {
      // 推進到下一步
      try {
        getDb()
          .prepare('UPDATE tutorial_progress SET current_step = ? WHERE character_id = ?')
          .run(nextStep, characterId);

        const hint = this.getHintMessage(nextStep);
        sendToCharacter(characterId, 'system', {
          text: `【新手教學 ${nextStep + 1}/${TOTAL_STEPS}】${hint}`,
        });
      } catch {
        // 忽略
      }
    }
  }

  // ──────────────────────────────────────────────────────────
  //  完成教學
  // ──────────────────────────────────────────────────────────

  /**
   * 完成教學，發放新手禮包
   */
  completeTutorial(characterId: string): void {
    try {
      getDb()
        .prepare('UPDATE tutorial_progress SET completed = 1 WHERE character_id = ?')
        .run(characterId);

      // 發放新手禮包
      for (const item of STARTER_PACK.items) {
        addItemToInventory(characterId, item.itemId, item.quantity);
      }

      // 加金幣和經驗（直接更新 DB）
      getDb()
        .prepare('UPDATE characters SET gold = gold + ?, exp = exp + ? WHERE id = ?')
        .run(STARTER_PACK.gold, STARTER_PACK.exp, characterId);

      sendToCharacter(characterId, 'system', {
        text: '【新手教學完成】恭喜你完成了所有教學步驟！\n' +
          '獲得新手禮包：\n' +
          '  - 小型 HP 藥水 x5\n' +
          '  - 木劍 x1\n' +
          `  - ${STARTER_PACK.gold} 金幣\n` +
          `  - ${STARTER_PACK.exp} 經驗值`,
      });
    } catch {
      // 忽略
    }
  }

  // ──────────────────────────────────────────────────────────
  //  跳過教學
  // ──────────────────────────────────────────────────────────

  skipTutorial(characterId: string): void {
    try {
      getDb()
        .prepare('UPDATE tutorial_progress SET skipped = 1 WHERE character_id = ?')
        .run(characterId);

      sendToCharacter(characterId, 'system', {
        text: '【新手教學】已跳過教學。你可以隨時輸入 `help` 查看指令說明。',
      });
    } catch {
      // 忽略
    }
  }

  // ──────────────────────────────────────────────────────────
  //  取得提示文字
  // ──────────────────────────────────────────────────────────

  getHintMessage(step: number): string {
    const stepDef = TUTORIAL_STEPS[step];
    if (!stepDef) return '教學已結束。';
    return stepDef.hint;
  }

  // ──────────────────────────────────────────────────────────
  //  是否在教學中
  // ──────────────────────────────────────────────────────────

  isInTutorial(characterId: string): boolean {
    return this.getCurrentStep(characterId) !== null;
  }

  // ──────────────────────────────────────────────────────────
  //  格式化教學狀態
  // ──────────────────────────────────────────────────────────

  formatTutorialStatus(characterId: string): string {
    try {
      const row = getDb()
        .prepare('SELECT * FROM tutorial_progress WHERE character_id = ?')
        .get(characterId) as TutorialProgressRow | undefined;

      if (!row) return '你沒有教學進度。';
      if (row.completed) return '你已完成所有新手教學！';
      if (row.skipped) return '你已跳過新手教學。';

      const stepDef = TUTORIAL_STEPS[row.current_step];
      if (!stepDef) return '教學進度異常。';

      return `【新手教學 ${row.current_step + 1}/${TOTAL_STEPS}】\n${stepDef.hint}`;
    } catch {
      return '無法讀取教學進度。';
    }
  }
}
