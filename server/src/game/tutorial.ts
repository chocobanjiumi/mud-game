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
export interface TutorialStep {
  step: number;
  trigger: TutorialTrigger;
  hint: string;
}

export const TUTORIAL_STEPS: TutorialStep[] = [
  {
    step: 0,
    trigger: 'move',
    hint: '當下目標是先熟悉房間移動：請在指令列輸入 `go north` 或點擊周邊房間的北方出口。成功條件是角色進入相鄰房間並看到新的房間名稱；如果方向不存在或被戰鬥阻擋，下一步請先查看 `look` 的出口提示，或用逃跑 / 結束戰鬥後再移動。',
  },
  {
    step: 1,
    trigger: 'kill',
    hint: '當下目標是完成第一場戰鬥：在有怪物的房間輸入 `attack`，或點擊戰鬥面板中的攻擊按鈕。成功條件是擊敗一隻怪物並看到經驗值、金幣或掉落訊息；如果沒有目標，下一步請移動到野外房間、查看周邊戰鬥面板或先使用 `look` 找怪物。',
  },
  {
    step: 2,
    trigger: 'equip',
    hint: '當下目標是穿上第一件裝備：打開背包後選擇可裝備物品，或輸入 `equip <物品名稱>`。成功條件是角色面板的對應部位出現裝備並更新戰鬥屬性；如果物品等級、職業或部位不符，下一步請查看物品 tooltip、改穿符合條件的裝備，或先回商人補給。',
  },
  {
    step: 3,
    trigger: 'skill',
    hint: '當下目標是使用一次職業技能：先輸入 `skills` 查看可用技能，再於戰鬥面板點擊技能，或輸入 `skill <技能名>`。成功條件是戰鬥紀錄顯示技能效果、資源消耗與冷卻狀態；如果資源不足、冷卻中或沒有目標，下一步請等待 tick、切換目標或改用普攻。',
  },
  {
    step: 4,
    trigger: 'talk',
    hint: '當下目標是和 NPC 建立互動：在房間詳細面板選擇 NPC，或輸入 `talk <NPC名>`。成功條件是對話視窗或文字選項出現，並能看到任務、商店、治療或情報入口；如果房間沒有 NPC，下一步請回到新手村服務房間，或用 `look` 確認目前 NPC 名稱。',
  },
  {
    step: 5,
    trigger: 'quest',
    hint: '當下目標是接取或回報第一個任務：輸入 `quest list` 查看可接清單，或在 NPC 對話中選擇任務選項。成功條件是任務日誌出現明確目標、獎勵與下一個房間線索；如果沒有可接任務，下一步請提升等級、完成前置目標，或返回村長與公會 NPC 詢問主線。',
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
