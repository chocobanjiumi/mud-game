// 任務系統 — QuestManager

import type { Character, SkillTag } from '@game/shared';
import { sendToCharacter } from '../ws/handler.js';
import { getDb } from '../db/schema.js';
import { addItemToInventory } from '../db/database.js';
import { ITEM_DEFS } from '@game/shared';
import { unlockPortal, unlockZone } from '../db/queries.js';
import { EXPANDED_QUEST_DEFS, getMainQuestPrerequisite } from './quest-system.js';
import { addExperienceToCharacter } from './leveling.js';
import { grantAndNotifyLearnableSkills } from './skill-learning.js';
import { MAIN_QUEST_FLOW } from './main-quest-flow.js';
import { NPCS } from '../data/npcs.js';
import { getRoom } from '../data/rooms.js';
import { addRewardItemToInventory } from './item-instance-rewards.js';

// ============================================================
//  型別定義
// ============================================================

export type QuestType = 'main' | 'class_change' | 'daily' | 'weekly' | 'side' | 'exploration' | 'boss' | 'crafting' | 'faction';
export type QuestObjectiveType =
  | 'kill'
  | 'collect'
  | 'visit'
  | 'talk'
  | 'visit_room'
  | 'kill_monster'
  | 'loot_corpse'
  | 'collect_item'
  | 'inspect_object'
  | 'gather_resource'
  | 'craft_item'
  | 'defeat_boss'
  | 'use_support_skill'
  | 'first_clear_dungeon'
  | 'clear_dungeon'
  | 'participate_world_boss'
  | 'contribute_guild'
  | 'participate_kingdom_war'
  | 'leaderboard_score';

export interface QuestObjective {
  type: QuestObjectiveType;
  targetId: string;
  targetName: string;
  required: number;
  requiredSkillTags?: SkillTag[];
}

export interface QuestReward {
  exp: number;
  gold: number;
  items?: { itemId: string; quantity: number }[];
  portalUnlocks?: { portalId: string; zoneId: string }[];
  zoneReputation?: { zoneId: string; amount: number }[];
  recipes?: string[];
  equipmentSlotRewards?: { slot: string; levelMax?: number; sourceTags?: string[] }[];
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

export interface QuestSummary {
  id: string;
  name: string;
  description: string;
  category: 'main' | 'side' | 'daily' | 'weekly' | 'exploration' | 'boss' | 'crafting';
  status: 'active' | 'completed' | 'failed';
  steps: { description: string; current: number; target: number }[];
  currentStep: number;
  nextNpcId?: string;
  nextNpcName?: string;
  nextRoomId?: string;
  nextRoomName?: string;
  nextHint?: string;
  recommendedLevel?: number;
  rewardPreview?: {
    exp: number;
    gold: number;
    items?: { itemId: string; name: string; quantity: number }[];
    equipment?: string[];
  };
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

  // ─── 初始職業任務：戰士之路 ───────────────────────────────

  class_swordsman_path: {
    id: 'class_swordsman_path',
    name: '戰士之路',
    description: '以戰士初始職業前往湖畔城鎮的轉職大廳，向武技教官證明你的實力。',
    type: 'class_change',
    levelReq: 1,
    objectives: [
      { type: 'visit', targetId: 'class_change_hall', targetName: '轉職大廳', required: 1, requiredSkillTags: ['physical', 'single_target'] },
    ],
    rewards: {
      exp: 300,
      gold: 200,
      items: [{ itemId: 'iron_sword', quantity: 1 }],
    },
    dialogueStart: '你的武技已經有一定基礎了。前往湖畔城鎮的轉職大廳，向武技教官展示你的實力吧！',
    dialogueComplete: '恭喜你踏上了戰士之路！以後更要努力修行。',
    repeatable: false,
  },

  // ─── 轉職任務：法師之路 ──────────────────────────────────

  class_mage_path: {
    id: 'class_mage_path',
    name: '法師之路',
    description: '以法師初始職業前往湖畔城鎮的轉職大廳，接受魔法導師的考驗。',
    type: 'class_change',
    levelReq: 1,
    objectives: [
      { type: 'visit', targetId: 'class_change_hall', targetName: '轉職大廳', required: 1, requiredSkillTags: ['magical', 'aoe'] },
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
    description: '以遊俠初始職業前往湖畔城鎮的轉職大廳，接受遊俠教練的測試。',
    type: 'class_change',
    levelReq: 1,
    objectives: [
      { type: 'visit', targetId: 'class_change_hall', targetName: '轉職大廳', required: 1, requiredSkillTags: ['physical', 'single_target'] },
    ],
    rewards: {
      exp: 300,
      gold: 200,
      items: [{ itemId: 'short_bow', quantity: 1 }],
    },
    dialogueStart: '你的身手敏捷，很適合走遊俠的道路。去轉職大廳找遊俠教練吧！',
    dialogueComplete: '不錯的準頭！從今以後你就是遊俠了。',
    repeatable: false,
  },

  // ─── 轉職任務：祭司之路 ──────────────────────────────────

  class_priest_path: {
    id: 'class_priest_path',
    name: '祭司之路',
    description: '以祭司初始職業前往湖畔城鎮的轉職大廳，接受神殿祭司的祝福。',
    type: 'class_change',
    levelReq: 1,
    objectives: [
      { type: 'visit', targetId: 'class_change_hall', targetName: '轉職大廳', required: 1, requiredSkillTags: ['heal', 'support'] },
    ],
    rewards: {
      exp: 300,
      gold: 200,
      items: [{ itemId: 'wooden_wand', quantity: 1 }],
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

  // ─── 擴展任務（從 quest-system.ts 合併） ──────────────────
  ...EXPANDED_QUEST_DEFS,
};

// ============================================================
//  QuestManager
// ============================================================

export class QuestManager {
  /** 任務完成回呼（用於公會經驗等外部系統） */
  private onQuestCompleteFn: ((characterId: string) => void) | null = null;

  setOnQuestComplete(fn: (characterId: string) => void): void {
    this.onQuestCompleteFn = fn;
  }

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

    // 主線任務前置檢查
    const prereq = getMainQuestPrerequisite(questId);
    if (prereq) {
      const prereqProgress = this.getQuestProgressFromDb(characterId, prereq);
      if (!prereqProgress || prereqProgress.status !== 'completed') {
        const prereqDef = QUEST_DEFS[prereq];
        const prereqName = prereqDef ? prereqDef.name : prereq;
        return {
          success: false,
          message: `需要先完成主線任務「${prereqName}」才能接取此任務。`,
        };
      }
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
    eventType: QuestObjectiveType,
    targetId: string,
  ): void {
    const activeQuests = this.getActiveQuestsFromDb(characterId);

    for (const row of activeQuests) {
      const def = QUEST_DEFS[row.quest_id];
      if (!def) continue;

      const progress: Record<string, number> = JSON.parse(row.progress || '{}');
      let updated = false;

      for (const obj of def.objectives) {
        if (!objectiveMatchesEvent(obj.type, eventType)) continue;

        if (questTargetMatches(obj.targetId, targetId)) {
          const key = questObjectiveKey(obj);
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
        const key = questObjectiveKey(obj);
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
          const key = questObjectiveKey(obj);
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
      sendToCharacter(characterId, 'quest_update', {
        action: allComplete ? 'completable' : 'progress',
        quests: this.getActiveQuestSummaries(characterId),
      });
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
      const key = questObjectiveKey(obj);
      return (progress[key] ?? 0) >= obj.required;
    });

    if (!allComplete) {
      // 顯示未完成項目
      const incomplete: string[] = [];
      for (const obj of def.objectives) {
        const key = questObjectiveKey(obj);
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
    const expResult = addExperienceToCharacter(character, def.rewards.exp);
    grantAndNotifyLearnableSkills(character);
    character.gold += def.rewards.gold;

    if (def.rewards.items) {
      for (const item of def.rewards.items) {
        addItemToInventory(characterId, item.itemId, item.quantity);
      }
    }

    this.applyStructuredRewards(character, def.id, def.rewards);

    // 通知玩家
    let rewardText = `${expResult.expGained} EXP、${def.rewards.gold} 金幣`;
    if (def.rewards.items && def.rewards.items.length > 0) {
      rewardText += '，以及道具獎勵';
    }
    rewardText += formatStructuredRewardSuffix(def.rewards);

    sendToCharacter(characterId, 'quest', {
      action: 'completed',
      questId,
      name: def.name,
      rewards: def.rewards,
      text: `任務「${def.name}」完成！獲得：${rewardText}`,
    });

    // 外部回呼（公會經驗等）
    if (this.onQuestCompleteFn) {
      this.onQuestCompleteFn(characterId);
    }

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

      // 主線任務前置檢查
      const prereq = getMainQuestPrerequisite(def.id);
      if (prereq) {
        const prereqProgress = this.getQuestProgressFromDb(character.id, prereq);
        if (!prereqProgress || prereqProgress.status !== 'completed') return false;
      }

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
        // 每週任務：本週已完成
        if (def.type === 'weekly' && progress.completed_at) {
          const completed = new Date(progress.completed_at * 1000);
          const now = new Date();
          const getMonday = (d: Date) => { const day = d.getDay(); const diff = d.getDate() - day + (day === 0 ? -6 : 1); return new Date(d.getFullYear(), d.getMonth(), diff).toDateString(); };
          if (getMonday(completed) === getMonday(now)) return false;
        }
      }

      return true;
    });
  }

  canStartQuest(character: Character, questId: string): boolean {
    return this.getAvailableQuests(character).some(def => def.id === questId);
  }

  getQuestStatus(character: Character, questId: string): 'available' | 'active' | 'ready' | 'completed' | 'locked' {
    const def = QUEST_DEFS[questId];
    if (!def) return 'locked';
    const row = this.getQuestProgressFromDb(character.id, questId);
    if (row?.status === 'completed') return 'completed';
    if (row?.status === 'active') return this.isQuestReadyToComplete(character.id, questId) ? 'ready' : 'active';
    return this.canStartQuest(character, questId) ? 'available' : 'locked';
  }

  isQuestReadyToComplete(characterId: string, questId: string): boolean {
    const def = QUEST_DEFS[questId];
    if (!def) return false;
    const row = this.getQuestProgressFromDb(characterId, questId);
    if (!row || row.status !== 'active') return false;
    const progress: Record<string, number> = JSON.parse(row.progress || '{}');
    return def.objectives.every(obj => {
      const key = questObjectiveKey(obj);
      return (progress[key] ?? 0) >= obj.required;
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
        const key = questObjectiveKey(obj);
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
      rewardText += formatStructuredRewardSuffix(def.rewards);
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
        weekly: '每週',
        side: '支線',
        exploration: '探索',
        boss: 'Boss',
        crafting: '製作',
        faction: '陣營',
      };
      text += `【${def.name}】（${typeNames[def.type]}）Lv.${def.levelReq}+\n`;
      text += `  ${def.description}\n`;

      let rewardText = `${def.rewards.exp} EXP、${def.rewards.gold} 金幣`;
      if (def.rewards.items && def.rewards.items.length > 0) {
        rewardText += ' + 道具';
      }
      rewardText += formatStructuredRewardSuffix(def.rewards);
      text += `  獎勵：${rewardText}\n\n`;
    }

    return text;
  }

  // ──────────────────────────────────────────────────────────
  //  放棄任務
  // ──────────────────────────────────────────────────────────

  /**
   * 放棄進行中的任務
   */
  abandonQuest(
    characterId: string,
    questId: string,
  ): { success: boolean; message: string } {
    const def = QUEST_DEFS[questId];
    if (!def) {
      return { success: false, message: '任務不存在。' };
    }

    const row = this.getQuestProgressFromDb(characterId, questId);
    if (!row || row.status !== 'active') {
      return { success: false, message: '你沒有在進行這個任務。' };
    }

    // 主線任務不可放棄
    if (def.type === 'main') {
      return { success: false, message: '主線任務無法放棄。' };
    }

    this.deleteQuestProgress(characterId, questId);

    sendToCharacter(characterId, 'quest', {
      action: 'abandoned',
      questId,
      name: def.name,
    });

    return {
      success: true,
      message: `已放棄任務「${def.name}」。`,
    };
  }

  // ──────────────────────────────────────────────────────────
  //  任務詳情
  // ──────────────────────────────────────────────────────────

  /**
   * 取得任務詳細資訊
   */
  getQuestInfo(characterId: string, questId: string): string {
    const def = QUEST_DEFS[questId];
    if (!def) {
      return '任務不存在。';
    }

    const typeNames: Record<QuestType, string> = {
      main: '主線',
      class_change: '轉職',
      daily: '每日',
      weekly: '每週',
      side: '支線',
      exploration: '探索',
      boss: 'Boss',
      crafting: '製作',
      faction: '陣營',
    };

    let text = `【${def.name}】\n`;
    text += `類型：${typeNames[def.type]}　等級需求：Lv.${def.levelReq}+\n`;
    text += `─`.repeat(40) + '\n';
    text += `${def.description}\n\n`;

    // 目標列表
    text += '任務目標：\n';
    const row = this.getQuestProgressFromDb(characterId, questId);
    const progress: Record<string, number> = row ? JSON.parse(row.progress || '{}') : {};

    for (const obj of def.objectives) {
      const key = questObjectiveKey(obj);
      const current = progress[key] ?? 0;
      const typeLabel = questObjectiveTypeLabel(obj.type);
      const done = row && row.status === 'active' && current >= obj.required ? ' [完成]' : '';
      text += `  ${typeLabel} ${obj.targetName}：${row?.status === 'active' ? `${current}/${obj.required}${done}` : `0/${obj.required}`}\n`;
    }

    // 獎勵
    text += '\n獎勵：';
    let rewardText = `${def.rewards.exp} EXP、${def.rewards.gold} 金幣`;
    if (def.rewards.items && def.rewards.items.length > 0) {
      rewardText += ' + 道具';
    }
    rewardText += formatStructuredRewardSuffix(def.rewards);
    text += rewardText + '\n';

    // 狀態
    if (row) {
      text += `\n狀態：${row.status === 'active' ? '進行中' : '已完成'}`;
    } else {
      text += '\n狀態：未接取';
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

  getActiveQuestSummaries(characterId: string): QuestSummary[] {
    const summaries: QuestSummary[] = [];
    for (const row of this.getActiveQuestsFromDb(characterId)) {
      const def = QUEST_DEFS[row.quest_id];
      if (!def) continue;
      const progress: Record<string, number> = JSON.parse(row.progress || '{}');
      const steps = def.objectives.map((obj) => ({
        description: `${questObjectiveTypeLabel(obj.type)} ${obj.targetName}`,
        current: progress[questObjectiveKey(obj)] ?? 0,
        target: obj.required,
      }));
      const currentStep = Math.max(0, steps.findIndex(step => step.current < step.target));
      summaries.push({
        id: def.id,
        name: def.name,
        description: def.description,
        category: questTypeToClientCategory(def.type),
        status: row.status,
        steps,
        currentStep: currentStep === -1 ? Math.max(0, steps.length - 1) : currentStep,
        ...buildQuestSummaryExtras(def, this.isQuestReadyToComplete(characterId, def.id)),
      });
    }
    return summaries;
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

  private applyStructuredRewards(character: Character, questId: string, rewards: QuestReward): void {
    const characterId = character.id;
    if (rewards.portalUnlocks) {
      for (const portal of rewards.portalUnlocks) {
        unlockZone(characterId, portal.zoneId, 'quest_reward');
        unlockPortal(characterId, portal.portalId, portal.zoneId);
      }
    }

    if (rewards.zoneReputation) {
      for (const reputation of rewards.zoneReputation) {
        getDb().prepare(`
          INSERT INTO character_zone_reputation (character_id, zone_id, reputation, updated_at)
          VALUES (?, ?, ?, unixepoch())
          ON CONFLICT(character_id, zone_id) DO UPDATE SET
            reputation = reputation + excluded.reputation,
            updated_at = unixepoch()
        `).run(characterId, reputation.zoneId, reputation.amount);
      }
    }

    if (rewards.recipes) {
      for (const recipeId of rewards.recipes) {
        getDb().prepare(`
          INSERT OR IGNORE INTO learned_recipes (character_id, recipe_id)
          VALUES (?, ?)
        `).run(characterId, recipeId);
      }
    }

    if (rewards.equipmentSlotRewards) {
      for (const reward of rewards.equipmentSlotRewards) {
        const item = Object.values(ITEM_DEFS).find(def =>
          def.equipSlot === reward.slot
          && (!reward.levelMax || def.levelReq <= reward.levelMax)
          && (!reward.sourceTags || reward.sourceTags.some(tag => def.id.includes(tag))),
        );
        if (item) {
          addRewardItemToInventory(character, item.id, 1, {
            sourceTags: ['quest_reward', questId, ...(reward.sourceTags ?? [])],
            itemLevel: reward.levelMax,
            droppedBy: questId,
          });
        }
      }
    }
  }

  private deleteQuestProgress(characterId: string, questId: string): void {
    try {
      getDb()
        .prepare('DELETE FROM quest_progress WHERE character_id = ? AND quest_id = ?')
        .run(characterId, questId);
    } catch {
      // 忽略
    }
  }
}

function questObjectiveKey(obj: QuestObjective): string {
  return `${canonicalQuestObjectiveType(obj.type)}_${obj.targetId}`;
}

function canonicalQuestObjectiveType(type: QuestObjectiveType): QuestObjectiveType {
  const aliases: Partial<Record<QuestObjectiveType, QuestObjectiveType>> = {
    visit_room: 'visit',
    kill_monster: 'kill',
    collect_item: 'collect',
    defeat_boss: 'kill',
  };
  return aliases[type] ?? type;
}

function objectiveMatchesEvent(objectiveType: QuestObjectiveType, eventType: QuestObjectiveType): boolean {
  return canonicalQuestObjectiveType(objectiveType) === canonicalQuestObjectiveType(eventType);
}

function questTargetMatches(objectiveTargetId: string, eventTargetId: string): boolean {
  if (objectiveTargetId === '*') return true;
  if (objectiveTargetId === eventTargetId) return true;
  if (!objectiveTargetId.includes('*')) return false;

  const escaped = objectiveTargetId
    .split('*')
    .map(part => part.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'))
    .join('.*');
  return new RegExp(`^${escaped}$`).test(eventTargetId);
}

function questObjectiveTypeLabel(type: QuestObjectiveType): string {
  const labels: Record<QuestObjectiveType, string> = {
    kill: '擊殺',
    collect: '收集',
    visit: '前往',
    talk: '交談',
    visit_room: '前往',
    kill_monster: '擊殺',
    loot_corpse: '搜刮屍體',
    collect_item: '收集',
    inspect_object: '檢查',
    gather_resource: '採集',
    craft_item: '製作',
    defeat_boss: '擊敗 Boss',
    use_support_skill: '支援',
    first_clear_dungeon: '副本首通',
    clear_dungeon: '副本通關',
    participate_world_boss: '世界 Boss 參與',
    contribute_guild: '公會貢獻',
    participate_kingdom_war: '王國資源戰',
    leaderboard_score: '排行榜紀錄',
  };
  return labels[type];
}

function questTypeToClientCategory(type: QuestType): QuestSummary['category'] {
  if (type === 'class_change' || type === 'faction') return 'main';
  return type;
}

function buildQuestSummaryExtras(def: QuestDef, readyToComplete: boolean): Pick<QuestSummary,
  'nextNpcId' | 'nextNpcName' | 'nextRoomId' | 'nextRoomName' | 'nextHint' | 'recommendedLevel' | 'rewardPreview'
> {
  const flow = MAIN_QUEST_FLOW.find(entry => entry.questId === def.id);
  const nextNpcId = readyToComplete ? flow?.turnInNpcId : flow?.acceptNpcId;
  const nextRoomId = readyToComplete ? flow?.turnInRoomId : flow?.acceptRoomId;
  const npc = nextNpcId ? NPCS[nextNpcId] : undefined;
  const room = nextRoomId ? getRoom(nextRoomId) : undefined;
  const equipment = [
    ...(def.rewards.equipmentSlotRewards?.map(reward => {
      const slotName = equipmentSlotLabel(reward.slot);
      return reward.levelMax ? `${slotName}裝備 Lv.${reward.levelMax} 以下` : `${slotName}裝備`;
    }) ?? []),
    ...(flow?.rewardSummary.equipment ? [flow.rewardSummary.equipment] : []),
  ];

  return {
    nextNpcId,
    nextNpcName: npc?.name,
    nextRoomId,
    nextRoomName: room?.name,
    nextHint: flow?.nextHint,
    recommendedLevel: flow?.recommendedLevel,
    rewardPreview: {
      exp: def.rewards.exp,
      gold: def.rewards.gold,
      items: def.rewards.items?.map(item => ({
        itemId: item.itemId,
        name: ITEM_DEFS[item.itemId]?.name ?? item.itemId,
        quantity: item.quantity,
      })),
      equipment: [...new Set(equipment)],
    },
  };
}

function equipmentSlotLabel(slot: string): string {
  const labels: Record<string, string> = {
    weapon: '武器',
    body: '防具',
    hands: '手部',
    feet: '足部',
    accessory: '飾品',
  };
  return labels[slot] ?? slot;
}

function formatStructuredRewardSuffix(rewards: QuestReward): string {
  const parts: string[] = [];
  if (rewards.portalUnlocks?.length) parts.push('傳送點解鎖');
  if (rewards.zoneReputation?.length) parts.push('區域聲望');
  if (rewards.recipes?.length) parts.push('配方');
  if (rewards.equipmentSlotRewards?.length) parts.push('裝備補給');
  return parts.length > 0 ? `，以及${parts.join('、')}` : '';
}
