// 任務系統 — QuestManager

import type { Character } from '@game/shared';
import { sendToCharacter } from '../ws/handler.js';
import { getDb } from '../db/schema.js';
import { addItemToInventory } from '../db/database.js';

// ============================================================
//  型別定義
// ============================================================

export type QuestType = 'main' | 'class_change' | 'daily' | 'side';

export interface QuestObjective {
  type: 'kill' | 'collect' | 'visit' | 'talk';
  targetId: string;
  targetName: string;
  required: number;
}

export interface QuestReward {
  exp: number;
  gold: number;
  items?: { itemId: string; quantity: number }[];
}

export interface QuestDef {
  id: string;
  name: string;
  description: string;
  type: QuestType;
  levelReq: number;
  classReq?: string;
  objectives: QuestObjective[];
  rewards: QuestReward;
  dialogueStart?: string;
  dialogueComplete?: string;
  repeatable: boolean;
}

/** DB 中的任務進度資料 */
interface QuestProgressRow {
  character_id: string;
  quest_id: string;
  status: 'active' | 'completed';
  progress: string; // JSON
  started_at: number;
  completed_at: number | null;
}

// ============================================================
//  任務定義
// ============================================================

export const QUEST_DEFS: Record<string, QuestDef> = {

  // ─── 新手任務：初出茅廬 ──────────────────────────────────

  beginner_first_steps: {
    id: 'beginner_first_steps',
    name: '初出茅廬',
    description: '在訓練場消滅 3 隻史萊姆，證明自己的實力。',
    type: 'main',
    levelReq: 1,
    objectives: [
      { type: 'kill', targetId: 'slime', targetName: '史萊姆', required: 3 },
    ],
    rewards: { exp: 100, gold: 50 },
    dialogueStart: '年輕的冒險者，想要證明自己嗎？去訓練場消滅 3 隻史萊姆吧！',
    dialogueComplete: '做得好！你已經邁出了成為冒險者的第一步。',
    repeatable: false,
  },

  // ─── 平原任務：狼群威脅 ──────────────────────────────────

  plains_wolf_threat: {
    id: 'plains_wolf_threat',
    name: '狼群威脅',
    description: '翠綠平原上的野狼日益猖獗，消滅 5 隻野狼以保護村民。',
    type: 'side',
    levelReq: 5,
    objectives: [
      { type: 'kill', targetId: 'wild_wolf', targetName: '野狼', required: 5 },
    ],
    rewards: { exp: 500, gold: 200 },
    dialogueStart: '平原上的野狼越來越多了，旅人們都不敢走那條路。你能幫忙消滅 5 隻野狼嗎？',
    dialogueComplete: '太好了！有你在，村民們可以安心了。',
    repeatable: false,
  },

  // ─── 森林任務：暗影之源 ──────────────────────────────────

  forest_shadow_source: {
    id: 'forest_shadow_source',
    name: '暗影之源',
    description: '深入暗影森林，找到並擊敗暗影狼王——暗影之力的根源。',
    type: 'side',
    levelReq: 15,
    objectives: [
      { type: 'kill', targetId: 'shadow_wolf_alpha', targetName: '暗影狼王', required: 1 },
    ],
    rewards: { exp: 2000, gold: 1000 },
    dialogueStart: '暗影森林的暗影之力日益增強，根源就是那頭暗影狼王。你有勇氣深入森林擊敗牠嗎？',
    dialogueComplete: '難以置信……你真的擊敗了暗影狼王！暗影之力正在消退，森林有救了！',
    repeatable: false,
  },

  // ─── 轉職任務：劍士之路 ──────────────────────────────────

  class_swordsman_path: {
    id: 'class_swordsman_path',
    name: '劍士之路',
    description: '達到 Lv.10 並前往湖畔城鎮的轉職大廳，向劍術教官證明你的實力。',
    type: 'class_change',
    levelReq: 10,
    objectives: [
      { type: 'visit', targetId: 'class_change_hall', targetName: '轉職大廳', required: 1 },
    ],
    rewards: {
      exp: 300,
      gold: 200,
      items: [{ itemId: 'iron_sword', quantity: 1 }],
    },
    dialogueStart: '你的劍術已經有一定基礎了。前往湖畔城鎮的轉職大廳，向劍術教官展示你的實力吧！',
    dialogueComplete: '恭喜你踏上了劍士之路！以後更要努力修行。',
    repeatable: false,
  },

  // ─── 轉職任務：法師之路 ──────────────────────────────────

  class_mage_path: {
    id: 'class_mage_path',
    name: '法師之路',
    description: '達到 Lv.10 並前往湖畔城鎮的轉職大廳，接受魔法導師的考驗。',
    type: 'class_change',
    levelReq: 10,
    objectives: [
      { type: 'visit', targetId: 'class_change_hall', targetName: '轉職大廳', required: 1 },
    ],
    rewards: {
      exp: 300,
      gold: 200,
      items: [{ itemId: 'apprentice_staff', quantity: 1 }],
    },
    dialogueStart: '你體內蘊含著魔力的種子。前往轉職大廳，讓魔法導師為你開啟魔法之門。',
    dialogueComplete: '你的魔力已經覺醒。歡迎加入法師的行列！',
    repeatable: false,
  },

  // ─── 轉職任務：遊俠之路 ──────────────────────────────────

  class_ranger_path: {
    id: 'class_ranger_path',
    name: '遊俠之路',
    description: '達到 Lv.10 並前往湖畔城鎮的轉職大廳，接受遊俠教練的測試。',
    type: 'class_change',
    levelReq: 10,
    objectives: [
      { type: 'visit', targetId: 'class_change_hall', targetName: '轉職大廳', required: 1 },
    ],
    rewards: {
      exp: 300,
      gold: 200,
      items: [{ itemId: 'hunting_bow', quantity: 1 }],
    },
    dialogueStart: '你的身手敏捷，很適合走遊俠的道路。去轉職大廳找遊俠教練吧！',
    dialogueComplete: '不錯的準頭！從今以後你就是遊俠了。',
    repeatable: false,
  },

  // ─── 轉職任務：祭司之路 ──────────────────────────────────

  class_priest_path: {
    id: 'class_priest_path',
    name: '祭司之路',
    description: '達到 Lv.10 並前往湖畔城鎮的轉職大廳，接受神殿祭司的祝福。',
    type: 'class_change',
    levelReq: 10,
    objectives: [
      { type: 'visit', targetId: 'class_change_hall', targetName: '轉職大廳', required: 1 },
    ],
    rewards: {
      exp: 300,
      gold: 200,
      items: [{ itemId: 'wooden_staff', quantity: 1 }],
    },
    dialogueStart: '你心中充滿善意，很適合走祭司之路。前往轉職大廳接受聖光的洗禮吧。',
    dialogueComplete: '願聖光與你同在。你已是一名正式的祭司了。',
    repeatable: false,
  },

  // ─── 每日任務：冒險者的日常 ──────────────────────────────

  daily_adventurer: {
    id: 'daily_adventurer',
    name: '冒險者的日常',
    description: '消滅 10 隻任意怪物，完成今日的冒險者日課。',
    type: 'daily',
    levelReq: 1,
    objectives: [
      { type: 'kill', targetId: '*', targetName: '任意怪物', required: 10 },
    ],
    rewards: { exp: 300, gold: 100 },
    dialogueStart: '冒險者公會的日常委託：今天消滅 10 隻怪物就算完成。加油！',
    dialogueComplete: '辛苦了！今日的日常任務已完成，明天記得再來接取。',
    repeatable: true,
  },
};

// ============================================================
//  QuestManager
// ============================================================

export class QuestManager {
  // ──────────────────────────────────────────────────────────
  //  接取任務
  // ──────────────────────────────────────────────────────────

  /**
   * 接取任務
   */
  startQuest(
    characterId: string,
    questId: string,
    character: Character,
  ): { success: boolean; message: string } {
    const def = QUEST_DEFS[questId];
    if (!def) {
      return { success: false, message: '任務不存在。' };
    }

    // 等級檢查
    if (character.level < def.levelReq) {
      return {
        success: false,
        message: `需要達到 Lv.${def.levelReq} 才能接取「${def.name}」。`,
      };
    }

    // 職業檢查
    if (def.classReq && character.classId !== def.classReq) {
      return { success: false, message: '你的職業無法接取這個任務。' };
    }

    // 檢查現有進度
    const progress = this.getQuestProgressFromDb(characterId, questId);

    if (progress && progress.status === 'active') {
      return { success: false, message: '你已經在進行這個任務了。' };
    }

    if (progress && progress.status === 'completed' && !def.repeatable) {
      return { success: false, message: '這個任務你已經完成過了。' };
    }

    // 每日任務：檢查是否已經完成過今天的
    if (def.repeatable && progress && progress.status === 'completed') {
      const completedDate = progress.completed_at
        ? new Date(progress.completed_at * 1000).toDateString()
        : null;
      const today = new Date().toDateString();
      if (completedDate === today) {
        return { success: false, message: '今日已完成此每日任務，明天再來吧。' };
      }
      // 重置進度
      this.resetQuestProgress(characterId, questId);
    } else {
      // 新增進度
      this.insertQuestProgress(characterId, questId);
    }

    // 通知玩家
    sendToCharacter(characterId, 'quest', {
      action: 'started',
      questId,
      name: def.name,
      description: def.description,
    });

    return {
      success: true,
      message: def.dialogueStart ?? `接取任務：${def.name}`,
    };
  }

  // ──────────────────────────────────────────────────────────
  //  更新任務進度
  // ──────────────────────────────────────────────────────────

  /**
   * 更新任務進度（由戰鬥結束、拾取道具、進入房間等事件觸發）
   */
  updateProgress(
    characterId: string,
    eventType: 'kill' | 'collect' | 'visit' | 'talk',
    targetId: string,
  ): void {
    const activeQuests = this.getActiveQuestsFromDb(characterId);

    for (const row of activeQuests) {
      const def = QUEST_DEFS[row.quest_id];
      if (!def) continue;

      const progress: Record<string, number> = JSON.parse(row.progress || '{}');
      let updated = false;

      for (const obj of def.objectives) {
        if (obj.type !== eventType) continue;

        // 支援萬用字元目標（如每日任務的「任意怪物」）
        if (obj.targetId === '*' || obj.targetId === targetId) {
          const key = `${obj.type}_${obj.targetId}`;
          const current = progress[key] ?? 0;
          if (current < obj.required) {
            progress[key] = current + 1;
            updated = true;
          }
        }
      }

      if (!updated) continue;

      // 寫回 DB
      this.updateQuestProgressInDb(characterId, row.quest_id, JSON.stringify(progress));

      // 檢查是否所有目標都達成
      const allComplete = def.objectives.every(obj => {
        const key = `${obj.type}_${obj.targetId}`;
        return (progress[key] ?? 0) >= obj.required;
      });

      if (allComplete) {
        sendToCharacter(characterId, 'quest', {
          action: 'completable',
          questId: row.quest_id,
          name: def.name,
          text: `任務「${def.name}」的所有目標已達成！可以交回任務了。`,
        });
      } else {
        // 顯示進度通知
        const progressTexts: string[] = [];
        for (const obj of def.objectives) {
          const key = `${obj.type}_${obj.targetId}`;
          const current = progress[key] ?? 0;
          progressTexts.push(`${obj.targetName}：${current}/${obj.required}`);
        }
        sendToCharacter(characterId, 'quest', {
          action: 'progress',
          questId: row.quest_id,
          name: def.name,
          progress: progressTexts.join('、'),
        });
      }
    }
  }

  // ──────────────────────────────────────────────────────────
  //  完成任務
  // ──────────────────────────────────────────────────────────

  /**
   * 嘗試完成任務並領取獎勵
   */
  completeQuest(
    characterId: string,
    questId: string,
    character: Character,
  ): { success: boolean; message: string; rewards?: QuestReward } {
    const def = QUEST_DEFS[questId];
    if (!def) {
      return { success: false, message: '任務不存在。' };
    }

    const row = this.getQuestProgressFromDb(characterId, questId);
    if (!row || row.status !== 'active') {
      return { success: false, message: '你沒有在進行這個任務。' };
    }

    // 檢查是否所有目標都達成
    const progress: Record<string, number> = JSON.parse(row.progress || '{}');
    const allComplete = def.objectives.every(obj => {
      const key = `${obj.type}_${obj.targetId}`;
      return (progress[key] ?? 0) >= obj.required;
    });

    if (!allComplete) {
      // 顯示未完成項目
      const incomplete: string[] = [];
      for (const obj of def.objectives) {
        const key = `${obj.type}_${obj.targetId}`;
        const current = progress[key] ?? 0;
        if (current < obj.required) {
          incomplete.push(`${obj.targetName}：${current}/${obj.required}`);
        }
      }
      return {
        success: false,
        message: `任務目標尚未完成：${incomplete.join('、')}`,
      };
    }

    // 標記完成
    this.markQuestComplete(characterId, questId);

    // 發放獎勵
    character.exp += def.rewards.exp;
    character.gold += def.rewards.gold;

    if (def.rewards.items) {
      for (const item of def.rewards.items) {
        addItemToInventory(characterId, item.itemId, item.quantity);
      }
    }

    // 通知玩家
    let rewardText = `${def.rewards.exp} EXP、${def.rewards.gold} 金幣`;
    if (def.rewards.items && def.rewards.items.length > 0) {
      rewardText += '，以及道具獎勵';
    }

    sendToCharacter(characterId, 'quest', {
      action: 'completed',
      questId,
      name: def.name,
      rewards: def.rewards,
      text: `任務「${def.name}」完成！獲得：${rewardText}`,
    });

    return {
      success: true,
      message: def.dialogueComplete ?? `任務完成：${def.name}！獲得：${rewardText}`,
      rewards: def.rewards,
    };
  }

  // ──────────────────────────────────────────────────────────
  //  查詢方法
  // ──────────────────────────────────────────────────────────

  /**
   * 取得進行中的任務列表
   */
  getActiveQuests(characterId: string): { def: QuestDef; progress: Record<string, number> }[] {
    const rows = this.getActiveQuestsFromDb(characterId);
    const result: { def: QuestDef; progress: Record<string, number> }[] = [];

    for (const row of rows) {
      const def = QUEST_DEFS[row.quest_id];
      if (!def) continue;
      result.push({
        def,
        progress: JSON.parse(row.progress || '{}'),
      });
    }

    return result;
  }

  /**
   * 取得可接取的任務列表
   */
  getAvailableQuests(character: Character): QuestDef[] {
    const activeRows = this.getActiveQuestsFromDb(character.id);
    const activeIds = new Set(activeRows.map(r => r.quest_id));

    return Object.values(QUEST_DEFS).filter(def => {
      // 等級不夠
      if (character.level < def.levelReq) return false;
      // 職業不符
      if (def.classReq && character.classId !== def.classReq) return false;
      // 已在進行中
      if (activeIds.has(def.id)) return false;

      // 檢查是否已完成
      const progress = this.getQuestProgressFromDb(character.id, def.id);
      if (progress && progress.status === 'completed') {
        if (!def.repeatable) return false;
        // 每日任務：今天已完成
        if (def.type === 'daily' && progress.completed_at) {
          const completedDate = new Date(progress.completed_at * 1000).toDateString();
          const today = new Date().toDateString();
          if (completedDate === today) return false;
        }
      }

      return true;
    });
  }

  /**
   * 格式化任務列表（給玩家查看）
   */
  formatActiveQuests(characterId: string): string {
    const quests = this.getActiveQuests(characterId);
    if (quests.length === 0) {
      return '你目前沒有進行中的任務。';
    }

    let text = '進行中的任務\n';
    text += '─'.repeat(40) + '\n';

    for (const { def, progress } of quests) {
      text += `【${def.name}】\n`;
      text += `  ${def.description}\n`;
      text += '  進度：';

      const progressTexts: string[] = [];
      for (const obj of def.objectives) {
        const key = `${obj.type}_${obj.targetId}`;
        const current = progress[key] ?? 0;
        const done = current >= obj.required ? ' [完成]' : '';
        progressTexts.push(`${obj.targetName} ${current}/${obj.required}${done}`);
      }
      text += progressTexts.join('、') + '\n';

      // 獎勵
      let rewardText = `${def.rewards.exp} EXP、${def.rewards.gold} 金幣`;
      if (def.rewards.items && def.rewards.items.length > 0) {
        rewardText += ' + 道具';
      }
      text += `  獎勵：${rewardText}\n\n`;
    }

    return text;
  }

  /**
   * 格式化可接取任務列表
   */
  formatAvailableQuests(character: Character): string {
    const quests = this.getAvailableQuests(character);
    if (quests.length === 0) {
      return '目前沒有可接取的任務。';
    }

    let text = '可接取的任務\n';
    text += '─'.repeat(40) + '\n';

    for (const def of quests) {
      const typeNames: Record<QuestType, string> = {
        main: '主線',
        class_change: '轉職',
        daily: '每日',
        side: '支線',
      };
      text += `【${def.name}】（${typeNames[def.type]}）Lv.${def.levelReq}+\n`;
      text += `  ${def.description}\n`;

      let rewardText = `${def.rewards.exp} EXP、${def.rewards.gold} 金幣`;
      if (def.rewards.items && def.rewards.items.length > 0) {
        rewardText += ' + 道具';
      }
      text += `  獎勵：${rewardText}\n\n`;
    }

    return text;
  }

  // ──────────────────────────────────────────────────────────
  //  DB 操作（內部方法）
  // ──────────────────────────────────────────────────────────

  private getQuestProgressFromDb(characterId: string, questId: string): QuestProgressRow | undefined {
    try {
      return getDb()
        .prepare('SELECT * FROM quest_progress WHERE character_id = ? AND quest_id = ?')
        .get(characterId, questId) as QuestProgressRow | undefined;
    } catch {
      return undefined;
    }
  }

  private getActiveQuestsFromDb(characterId: string): QuestProgressRow[] {
    try {
      return getDb()
        .prepare("SELECT * FROM quest_progress WHERE character_id = ? AND status = 'active'")
        .all(characterId) as QuestProgressRow[];
    } catch {
      return [];
    }
  }

  private insertQuestProgress(characterId: string, questId: string): void {
    try {
      getDb()
        .prepare(
          'INSERT OR IGNORE INTO quest_progress (character_id, quest_id, status, progress, started_at) VALUES (?, ?, ?, ?, unixepoch())',
        )
        .run(characterId, questId, 'active', '{}');
    } catch {
      // 忽略
    }
  }

  private resetQuestProgress(characterId: string, questId: string): void {
    try {
      getDb()
        .prepare(
          "UPDATE quest_progress SET status = 'active', progress = '{}', started_at = unixepoch(), completed_at = NULL WHERE character_id = ? AND quest_id = ?",
        )
        .run(characterId, questId);
    } catch {
      // 忽略
    }
  }

  private updateQuestProgressInDb(characterId: string, questId: string, progress: string): void {
    try {
      getDb()
        .prepare('UPDATE quest_progress SET progress = ? WHERE character_id = ? AND quest_id = ?')
        .run(progress, characterId, questId);
    } catch {
      // 忽略
    }
  }

  private markQuestComplete(characterId: string, questId: string): void {
    try {
      getDb()
        .prepare(
          "UPDATE quest_progress SET status = 'completed', completed_at = unixepoch() WHERE character_id = ? AND quest_id = ?",
        )
        .run(characterId, questId);
    } catch {
      // 忽略
    }
  }
}
