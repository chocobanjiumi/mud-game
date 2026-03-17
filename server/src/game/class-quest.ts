// 轉職任務系統 — ClassQuestManager
// 四條轉職任務鏈：劍士、法師、遊俠、祭司

import type { Character, ClassId } from '@game/shared';
import { sendToCharacter } from '../ws/handler.js';
import { getDb } from '../db/schema.js';
import { saveCharacter } from '../db/queries.js';
import { ClassChangeManager } from './class-change.js';

// ============================================================
//  型別定義
// ============================================================

export interface ClassQuestStep {
  description: string;
  /** 步驟完成時的提示 */
  completeText: string;
}

export interface ClassQuestDef {
  id: string;
  name: string;
  description: string;
  targetClass: ClassId;
  steps: ClassQuestStep[];
}

/** DB row for class_quests */
interface ClassQuestRow {
  character_id: string;
  quest_id: string;
  step: number;
  progress: string; // JSON
  started_at: number | null;
  completed_at: number | null;
}

/** 謎語定義 */
interface Riddle {
  question: string;
  answer: string;
}

// ============================================================
//  謎語庫（法師任務 Step 2）
// ============================================================

const RIDDLES: Riddle[] = [
  {
    question: '我有城市但沒有房屋，有森林但沒有樹木，有河流但沒有水。我是什麼？',
    answer: '地圖',
  },
  {
    question: '越削越大的是什麼？',
    answer: '洞',
  },
  {
    question: '什麼東西早上四條腿，中午兩條腿，晚上三條腿？',
    answer: '人',
  },
  {
    question: '拿不出手的是什麼？',
    answer: '拳頭',
  },
  {
    question: '什麼東西越洗越髒？',
    answer: '水',
  },
];

// ============================================================
//  任務定義
// ============================================================

export const CLASS_QUEST_DEFS: Record<string, ClassQuestDef> = {

  // ─── 劍士「勇氣的試煉」 ───────────────────────────────────
  warrior_trial: {
    id: 'warrior_trial',
    name: '勇氣的試煉',
    description: '證明你的勇氣，成為一名劍士！',
    targetClass: 'swordsman',
    steps: [
      {
        description: '消滅 5 隻狼（野狼或暗影狼）',
        completeText: '你已證明了面對野獸的勇氣！',
      },
      {
        description: '從村口（village_gate）護送到城鎮門口（town_gate），途中不能死亡',
        completeText: '護送成功！你展現了保護他人的決心。',
      },
      {
        description: '在轉職大廳擊敗訓練教官（練習假人）',
        completeText: '你擊敗了訓練教官！你已具備劍士的資格。',
      },
    ],
  },

  // ─── 法師「智慧的試煉」 ───────────────────────────────────
  mage_trial: {
    id: 'mage_trial',
    name: '智慧的試煉',
    description: '證明你的智慧，成為一名法師！',
    targetClass: 'mage',
    steps: [
      {
        description: '收集 3 個水晶碎片（crystal_shard）',
        completeText: '你已收集到足夠的元素水晶！',
      },
      {
        description: '解開魔法導師的謎語（使用 classquest answer <答案>）',
        completeText: '你的智慧令人印象深刻！',
      },
      {
        description: '使用魔法技能擊殺一隻水晶蜥蜴（crystal_lizard）',
        completeText: '你已掌握了以魔法戰鬥的精髓！',
      },
    ],
  },

  // ─── 遊俠「敏捷的試煉」 ───────────────────────────────────
  ranger_trial: {
    id: 'ranger_trial',
    name: '敏捷的試煉',
    description: '證明你的敏捷，成為一名遊俠！',
    targetClass: 'ranger',
    steps: [
      {
        description: '追蹤白鹿——依序造訪森林入口、密林小道、精靈遺跡',
        completeText: '你成功追蹤到了白鹿的蹤跡！',
      },
      {
        description: '在沼澤（mushroom_swamp）撐過 3 場戰鬥，HP 不低於 20%',
        completeText: '你在沼澤中展現了驚人的生存能力！',
      },
      {
        description: '在第一回合內擊殺一隻洞窟蝙蝠（cave_bat）',
        completeText: '一擊必殺！你已具備遊俠的資格。',
      },
    ],
  },

  // ─── 祭司「慈悲的試煉」 ───────────────────────────────────
  priest_trial: {
    id: 'priest_trial',
    name: '慈悲的試煉',
    description: '證明你的慈悲，成為一名祭司！',
    targetClass: 'priest',
    steps: [
      {
        description: '在精靈遺跡（elf_ruins）使用淨化技能 3 次',
        completeText: '祭壇已被你的神聖之力淨化！',
      },
      {
        description: '治療其他玩家（或 NPC）5 次',
        completeText: '你的治癒之手已溫暖了許多人！',
      },
      {
        description: '在戰鬥中撐過 5 回合，期間不攻擊（僅防禦/治療）',
        completeText: '你以慈悲之心通過了最終考驗！',
      },
    ],
  },
};

// ============================================================
//  ClassQuestManager
// ============================================================

export class ClassQuestManager {
  private classChangeMgr: ClassChangeManager | null = null;

  /** 注入 ClassChangeManager（避免循環依賴） */
  setClassChangeManager(mgr: ClassChangeManager): void {
    this.classChangeMgr = mgr;
  }

  // ──────────────────────────────────────────────────────────
  //  開始任務
  // ──────────────────────────────────────────────────────────

  startQuest(
    characterId: string,
    questId: string,
    character: Character,
  ): { success: boolean; message: string } {
    const def = CLASS_QUEST_DEFS[questId];
    if (!def) {
      return { success: false, message: '轉職任務不存在。' };
    }

    // 等級檢查
    if (character.level < 10) {
      return {
        success: false,
        message: `需要達到 Lv.10 才能接取轉職任務「${def.name}」，你目前 Lv.${character.level}。`,
      };
    }

    // 職業檢查：必須是冒險者
    if (character.classId !== 'adventurer') {
      return { success: false, message: '只有冒險者才能接取轉職任務。你已經轉職過了。' };
    }

    // 地點檢查：必須在轉職大廳
    if (character.roomId !== 'class_change_hall') {
      return { success: false, message: '必須在轉職大廳才能接受轉職任務' };
    }

    // 金幣檢查：至少 500 金（此時不扣除，僅驗證）
    if (character.gold < 500) {
      return { success: false, message: '需要至少 500 金幣才能接受轉職任務' };
    }

    // 檢查是否有進行中的轉職任務
    const existing = this.getQuestRow(characterId);
    if (existing) {
      if (existing.completed_at) {
        return { success: false, message: '你已經完成過轉職任務了。' };
      }
      return { success: false, message: `你已經在進行轉職任務「${CLASS_QUEST_DEFS[existing.quest_id]?.name ?? existing.quest_id}」了。使用 classquest abandon 放棄後才能接取新的。` };
    }

    // 插入新任務
    this.insertQuest(characterId, questId);

    // 法師任務 step 0：隨機選一道謎語
    if (questId === 'mage_trial') {
      const riddle = RIDDLES[Math.floor(Math.random() * RIDDLES.length)];
      this.updateProgress(characterId, JSON.stringify({ crystals: 0, riddle_index: RIDDLES.indexOf(riddle) }));
    }

    sendToCharacter(characterId, 'quest', {
      action: 'class_quest_started',
      questId,
      name: def.name,
      description: def.description,
    });

    return {
      success: true,
      message: `接取轉職任務：「${def.name}」！\n${def.description}\n\n第一步：${def.steps[0].description}`,
    };
  }

  // ──────────────────────────────────────────────────────────
  //  查詢狀態
  // ──────────────────────────────────────────────────────────

  getQuestStatus(characterId: string): {
    questId: string;
    def: ClassQuestDef;
    step: number;
    progress: Record<string, unknown>;
    completed: boolean;
  } | null {
    const row = this.getQuestRow(characterId);
    if (!row) return null;

    const def = CLASS_QUEST_DEFS[row.quest_id];
    if (!def) return null;

    return {
      questId: row.quest_id,
      def,
      step: row.step,
      progress: JSON.parse(row.progress || '{}'),
      completed: row.completed_at !== null,
    };
  }

  formatQuestStatus(characterId: string): string {
    const status = this.getQuestStatus(characterId);
    if (!status) {
      return '你沒有進行中的轉職任務。使用 classquest start 開始。';
    }

    if (status.completed) {
      return `轉職任務「${status.def.name}」已完成！`;
    }

    let text = `轉職任務：「${status.def.name}」\n`;
    text += '─'.repeat(40) + '\n';
    text += `目標職業：${status.def.targetClass}\n\n`;

    for (let i = 0; i < status.def.steps.length; i++) {
      const stepDef = status.def.steps[i];
      const marker = i < status.step ? '[完成]' : i === status.step ? '[進行中]' : '[未開始]';
      text += `  第 ${i + 1} 步 ${marker}：${stepDef.description}\n`;

      // 顯示進度詳情
      if (i === status.step) {
        const progressText = this.getProgressDescription(status.questId, status.step, status.progress);
        if (progressText) {
          text += `    進度：${progressText}\n`;
        }
      }
    }

    text += `\n完成所有步驟後，前往轉職大廳使用 classquest complete 完成轉職（需要 500 金幣）。`;
    return text;
  }

  private getProgressDescription(questId: string, step: number, progress: Record<string, unknown>): string {
    switch (questId) {
      case 'warrior_trial':
        if (step === 0) return `狼擊殺數：${progress.kills ?? 0}/5`;
        if (step === 1) {
          const visited = (progress.escort_rooms as string[]) ?? [];
          return `護送進度：${visited.length > 0 ? visited.join(' → ') : '尚未開始'}（需從 village_gate 到 town_gate）`;
        }
        if (step === 2) return `前往轉職大廳擊敗練習假人`;
        break;
      case 'mage_trial':
        if (step === 0) return `水晶碎片：${progress.crystals ?? 0}/3`;
        if (step === 1) {
          const idx = progress.riddle_index as number ?? 0;
          const riddle = RIDDLES[idx];
          return `謎語：「${riddle?.question ?? ''}」\n    使用 classquest answer <答案> 作答`;
        }
        if (step === 2) return `使用魔法技能擊殺水晶蜥蜴`;
        break;
      case 'ranger_trial':
        if (step === 0) {
          const visited = (progress.rooms_visited as string[]) ?? [];
          const targets = ['forest_entrance', 'dense_trail', 'elf_ruins'];
          return `追蹤路線：${targets.map(r => visited.includes(r) ? `[${r}]` : r).join(' → ')}`;
        }
        if (step === 1) return `沼澤戰鬥存活：${progress.swamp_fights ?? 0}/3`;
        if (step === 2) return `在第一回合擊殺洞窟蝙蝠`;
        break;
      case 'priest_trial':
        if (step === 0) return `淨化次數：${progress.purify_count ?? 0}/3`;
        if (step === 1) return `治療次數：${progress.heal_count ?? 0}/5`;
        if (step === 2) return `存活回合：${progress.survive_rounds ?? 0}/5（不能攻擊）`;
        break;
    }
    return '';
  }

  // ──────────────────────────────────────────────────────────
  //  推進步驟
  // ──────────────────────────────────────────────────────────

  private advanceStep(characterId: string): void {
    const row = this.getQuestRow(characterId);
    if (!row || row.completed_at) return;

    const def = CLASS_QUEST_DEFS[row.quest_id];
    if (!def) return;

    const newStep = row.step + 1;

    // 通知完成提示
    const stepDef = def.steps[row.step];
    if (stepDef) {
      sendToCharacter(characterId, 'quest', {
        action: 'class_quest_step_complete',
        questId: row.quest_id,
        step: row.step,
        text: stepDef.completeText,
      });
    }

    if (newStep >= def.steps.length) {
      // 所有步驟完成
      try {
        getDb().prepare(
          'UPDATE class_quests SET step = ?, progress = ? WHERE character_id = ?',
        ).run(newStep, '{}', characterId);
      } catch { /* ignore */ }

      sendToCharacter(characterId, 'quest', {
        action: 'class_quest_all_steps_done',
        questId: row.quest_id,
        text: `轉職任務「${def.name}」的所有步驟已完成！\n前往轉職大廳（class_change_hall），使用 classquest complete 完成轉職。`,
      });
    } else {
      // 重置進度並前進
      const nextStepProgress = this.getInitialProgress(row.quest_id, newStep, row.progress);
      try {
        getDb().prepare(
          'UPDATE class_quests SET step = ?, progress = ? WHERE character_id = ?',
        ).run(newStep, JSON.stringify(nextStepProgress), characterId);
      } catch { /* ignore */ }

      const nextStepDef = def.steps[newStep];
      sendToCharacter(characterId, 'quest', {
        action: 'class_quest_next_step',
        questId: row.quest_id,
        step: newStep,
        text: `進入下一步：${nextStepDef.description}`,
      });
    }
  }

  private getInitialProgress(questId: string, step: number, prevProgressJson: string): Record<string, unknown> {
    const prevProgress = JSON.parse(prevProgressJson || '{}');

    switch (questId) {
      case 'warrior_trial':
        if (step === 1) return { escort_rooms: [] };
        if (step === 2) return { dummy_killed: false };
        break;
      case 'mage_trial':
        if (step === 1) return { riddle_answered: false, riddle_index: prevProgress.riddle_index ?? 0 };
        if (step === 2) return { magic_kill: false };
        break;
      case 'ranger_trial':
        if (step === 1) return { swamp_fights: 0 };
        if (step === 2) return { first_round_kill: false };
        break;
      case 'priest_trial':
        if (step === 1) return { heal_count: 0 };
        if (step === 2) return { survive_rounds: 0, attacked: false };
        break;
    }
    return {};
  }

  // ──────────────────────────────────────────────────────────
  //  完成任務（轉職）
  // ──────────────────────────────────────────────────────────

  completeQuest(
    characterId: string,
    character: Character,
  ): { success: boolean; message: string } {
    const row = this.getQuestRow(characterId);
    if (!row) {
      return { success: false, message: '你沒有進行中的轉職任務。' };
    }

    if (row.completed_at) {
      return { success: false, message: '轉職任務已完成。' };
    }

    const def = CLASS_QUEST_DEFS[row.quest_id];
    if (!def) {
      return { success: false, message: '任務定義不存在。' };
    }

    // 檢查所有步驟完成
    if (row.step < def.steps.length) {
      return { success: false, message: `轉職任務尚未完成。目前在第 ${row.step + 1} 步。` };
    }

    // 檢查是否在轉職大廳
    if (character.roomId !== 'class_change_hall') {
      return { success: false, message: '你需要在轉職大廳（class_change_hall）才能完成轉職。' };
    }

    // 檢查金幣
    if (character.gold < 500) {
      return { success: false, message: `金幣不足！轉職需要 500 金幣，你目前有 ${character.gold} 金幣。` };
    }

    // 執行轉職
    if (!this.classChangeMgr) {
      return { success: false, message: '系統錯誤：轉職管理器未初始化。' };
    }

    const result = this.classChangeMgr.performClassChange(character, def.targetClass);
    if (!result.success) {
      return result;
    }

    // 標記完成
    try {
      getDb().prepare(
        'UPDATE class_quests SET completed_at = unixepoch() WHERE character_id = ?',
      ).run(characterId);
    } catch { /* ignore */ }

    // 存檔
    saveCharacter(character);

    sendToCharacter(characterId, 'quest', {
      action: 'class_quest_completed',
      questId: row.quest_id,
      targetClass: def.targetClass,
      text: `轉職任務「${def.name}」完成！你已成為 ${def.targetClass}！`,
    });

    return {
      success: true,
      message: `恭喜！轉職任務「${def.name}」完成！\n${result.message}`,
    };
  }

  // ──────────────────────────────────────────────────────────
  //  放棄任務
  // ──────────────────────────────────────────────────────────

  abandonQuest(characterId: string): { success: boolean; message: string } {
    const row = this.getQuestRow(characterId);
    if (!row) {
      return { success: false, message: '你沒有進行中的轉職任務。' };
    }
    if (row.completed_at) {
      return { success: false, message: '轉職任務已完成，無法放棄。' };
    }

    try {
      getDb().prepare('DELETE FROM class_quests WHERE character_id = ?').run(characterId);
    } catch { /* ignore */ }

    const def = CLASS_QUEST_DEFS[row.quest_id];
    return { success: true, message: `已放棄轉職任務「${def?.name ?? row.quest_id}」。所有進度已清除。` };
  }

  // ──────────────────────────────────────────────────────────
  //  回答謎語（法師任務）
  // ──────────────────────────────────────────────────────────

  answerRiddle(characterId: string, answer: string): { success: boolean; message: string } {
    const row = this.getQuestRow(characterId);
    if (!row || row.quest_id !== 'mage_trial' || row.step !== 1) {
      return { success: false, message: '你目前不在解謎階段。' };
    }

    const progress = JSON.parse(row.progress || '{}');
    const riddleIndex = progress.riddle_index ?? 0;
    const riddle = RIDDLES[riddleIndex];

    if (!riddle) {
      return { success: false, message: '謎語資料異常。' };
    }

    const trimmedAnswer = answer.trim();
    if (trimmedAnswer === riddle.answer) {
      this.advanceStep(characterId);
      return { success: true, message: '回答正確！你的智慧令人讚嘆。' };
    } else {
      return { success: false, message: `回答錯誤。再想想吧。\n謎語：「${riddle.question}」` };
    }
  }

  // ──────────────────────────────────────────────────────────
  //  事件鉤子 — 怪物擊殺
  // ──────────────────────────────────────────────────────────

  onMonsterKill(
    characterId: string,
    monsterId: string,
    combatInfo: { usedSkillType?: 'physical' | 'magical'; round?: number },
  ): void {
    const row = this.getQuestRow(characterId);
    if (!row || row.completed_at) return;

    const progress = JSON.parse(row.progress || '{}');

    // ─── 劍士 Step 0：殺 5 狼 ───
    if (row.quest_id === 'warrior_trial' && row.step === 0) {
      if (monsterId === 'wild_wolf' || monsterId === 'shadow_wolf') {
        const kills = ((progress.kills as number) ?? 0) + 1;
        progress.kills = kills;
        this.updateProgress(characterId, JSON.stringify(progress));

        if (kills >= 5) {
          this.advanceStep(characterId);
        } else {
          sendToCharacter(characterId, 'quest', {
            action: 'class_quest_progress',
            text: `【勇氣的試煉】狼擊殺數：${kills}/5`,
          });
        }
      }
    }

    // ─── 劍士 Step 2：在轉職大廳擊殺練習假人 ───
    if (row.quest_id === 'warrior_trial' && row.step === 2) {
      if (monsterId === 'training_dummy') {
        this.advanceStep(characterId);
      }
    }

    // ─── 法師 Step 2：用魔法擊殺水晶蜥蜴 ───
    if (row.quest_id === 'mage_trial' && row.step === 2) {
      if (monsterId === 'crystal_lizard' && combatInfo.usedSkillType === 'magical') {
        this.advanceStep(characterId);
      } else if (monsterId === 'crystal_lizard') {
        sendToCharacter(characterId, 'quest', {
          action: 'class_quest_progress',
          text: '【智慧的試煉】你擊殺了水晶蜥蜴，但需要使用魔法技能才算通過！',
        });
      }
    }

    // ─── 遊俠 Step 1：沼澤生存 ───
    // (handled via onCombatEnd instead - monster kills in swamp count)

    // ─── 遊俠 Step 2：第一回合擊殺洞窟蝙蝠 ───
    if (row.quest_id === 'ranger_trial' && row.step === 2) {
      if (monsterId === 'cave_bat' && combatInfo.round === 1) {
        this.advanceStep(characterId);
      } else if (monsterId === 'cave_bat') {
        sendToCharacter(characterId, 'quest', {
          action: 'class_quest_progress',
          text: '【敏捷的試煉】你擊殺了洞窟蝙蝠，但不是在第一回合！再試一次。',
        });
      }
    }
  }

  // ──────────────────────────────────────────────────────────
  //  事件鉤子 — 進入房間
  // ──────────────────────────────────────────────────────────

  onRoomEnter(characterId: string, roomId: string): void {
    const row = this.getQuestRow(characterId);
    if (!row || row.completed_at) return;

    const progress = JSON.parse(row.progress || '{}');

    // ─── 劍士 Step 1：護送路線 ───
    if (row.quest_id === 'warrior_trial' && row.step === 1) {
      const escortRooms = (progress.escort_rooms as string[]) ?? [];

      // 需要從 village_gate 開始
      if (roomId === 'village_gate' && escortRooms.length === 0) {
        escortRooms.push('village_gate');
        progress.escort_rooms = escortRooms;
        this.updateProgress(characterId, JSON.stringify(progress));
        sendToCharacter(characterId, 'quest', {
          action: 'class_quest_progress',
          text: '【勇氣的試煉】護送開始！帶領 NPC 前往城鎮門口（town_gate）。',
        });
      } else if (escortRooms.length > 0 && !escortRooms.includes(roomId)) {
        escortRooms.push(roomId);
        progress.escort_rooms = escortRooms;
        this.updateProgress(characterId, JSON.stringify(progress));

        if (roomId === 'town_gate') {
          this.advanceStep(characterId);
        }
      }
    }

    // ─── 遊俠 Step 0：追蹤白鹿（依序造訪） ───
    if (row.quest_id === 'ranger_trial' && row.step === 0) {
      const targets = ['forest_entrance', 'dense_trail', 'elf_ruins'];
      const visited = (progress.rooms_visited as string[]) ?? [];
      const nextTarget = targets[visited.length];

      if (roomId === nextTarget) {
        visited.push(roomId);
        progress.rooms_visited = visited;
        this.updateProgress(characterId, JSON.stringify(progress));

        if (visited.length >= targets.length) {
          this.advanceStep(characterId);
        } else {
          sendToCharacter(characterId, 'quest', {
            action: 'class_quest_progress',
            text: `【敏捷的試煉】追蹤進度：${visited.join(' → ')}（下一站：${targets[visited.length]}）`,
          });
        }
      }
    }
  }

  // ──────────────────────────────────────────────────────────
  //  事件鉤子 — 使用技能
  // ──────────────────────────────────────────────────────────

  onSkillUse(characterId: string, skillId: string, roomId: string, inCombat: boolean = false): void {
    const row = this.getQuestRow(characterId);
    if (!row || row.completed_at) return;

    const progress = JSON.parse(row.progress || '{}');

    // ─── 祭司 Step 0：在精靈遺跡使用淨化 3 次（可在戰鬥外使用） ───
    if (row.quest_id === 'priest_trial' && row.step === 0) {
      if (skillId === 'purify' && roomId === 'elf_ruins') {
        const count = ((progress.purify_count as number) ?? 0) + 1;
        progress.purify_count = count;
        this.updateProgress(characterId, JSON.stringify(progress));

        if (count >= 3) {
          this.advanceStep(characterId);
        } else {
          sendToCharacter(characterId, 'quest', {
            action: 'class_quest_progress',
            text: `【慈悲的試煉】淨化次數：${count}/3`,
          });
        }
      }
    }
  }

  // ──────────────────────────────────────────────────────────
  //  事件鉤子 — 執行治療
  // ──────────────────────────────────────────────────────────

  onHealPerformed(characterId: string, _targetId: string): void {
    const row = this.getQuestRow(characterId);
    if (!row || row.completed_at) return;

    const progress = JSON.parse(row.progress || '{}');

    // ─── 祭司 Step 1：治療 5 次 ───
    if (row.quest_id === 'priest_trial' && row.step === 1) {
      const count = ((progress.heal_count as number) ?? 0) + 1;
      progress.heal_count = count;
      this.updateProgress(characterId, JSON.stringify(progress));

      if (count >= 5) {
        this.advanceStep(characterId);
      } else {
        sendToCharacter(characterId, 'quest', {
          action: 'class_quest_progress',
          text: `【慈悲的試煉】治療次數：${count}/5`,
        });
      }
    }
  }

  // ──────────────────────────────────────────────────────────
  //  事件鉤子 — 戰鬥回合（生存類步驟）
  // ──────────────────────────────────────────────────────────

  onCombatRound(
    characterId: string,
    roundNumber: number,
    hpPercent: number,
    didAttack: boolean,
  ): void {
    const row = this.getQuestRow(characterId);
    if (!row || row.completed_at) return;

    const progress = JSON.parse(row.progress || '{}');

    // ─── 祭司 Step 2：存活 5 回合不攻擊 ───
    if (row.quest_id === 'priest_trial' && row.step === 2) {
      if (didAttack) {
        progress.survive_rounds = 0;
        progress.attacked = true;
        this.updateProgress(characterId, JSON.stringify(progress));
        sendToCharacter(characterId, 'quest', {
          action: 'class_quest_progress',
          text: '【慈悲的試煉】你攻擊了敵人！存活回合數重置。記住：不能攻擊，只能防禦和治療。',
        });
        return;
      }

      const rounds = ((progress.survive_rounds as number) ?? 0) + 1;
      progress.survive_rounds = rounds;
      progress.attacked = false;
      this.updateProgress(characterId, JSON.stringify(progress));

      if (rounds >= 5) {
        this.advanceStep(characterId);
      } else {
        sendToCharacter(characterId, 'quest', {
          action: 'class_quest_progress',
          text: `【慈悲的試煉】存活回合：${rounds}/5`,
        });
      }
    }
  }

  // ──────────────────────────────────────────────────────────
  //  事件鉤子 — 戰鬥結束（沼澤生存）
  // ──────────────────────────────────────────────────────────

  onCombatEnd(
    characterId: string,
    roomId: string,
    result: 'victory' | 'defeat' | 'fled',
    hpPercent: number,
  ): void {
    const row = this.getQuestRow(characterId);
    if (!row || row.completed_at) return;

    const progress = JSON.parse(row.progress || '{}');

    // ─── 遊俠 Step 1：沼澤生存 ───
    if (row.quest_id === 'ranger_trial' && row.step === 1) {
      if (roomId === 'mushroom_swamp' && result === 'victory') {
        if (hpPercent >= 20) {
          const fights = ((progress.swamp_fights as number) ?? 0) + 1;
          progress.swamp_fights = fights;
          this.updateProgress(characterId, JSON.stringify(progress));

          if (fights >= 3) {
            this.advanceStep(characterId);
          } else {
            sendToCharacter(characterId, 'quest', {
              action: 'class_quest_progress',
              text: `【敏捷的試煉】沼澤生存戰鬥：${fights}/3`,
            });
          }
        } else {
          sendToCharacter(characterId, 'quest', {
            action: 'class_quest_progress',
            text: '【敏捷的試煉】你的 HP 低於 20%，這場戰鬥不計入！',
          });
        }
      }
    }

    // ─── 劍士 Step 1：護送途中死亡重置 ───
    if (row.quest_id === 'warrior_trial' && row.step === 1) {
      if (result === 'defeat') {
        progress.escort_rooms = [];
        this.updateProgress(characterId, JSON.stringify(progress));
        sendToCharacter(characterId, 'quest', {
          action: 'class_quest_progress',
          text: '【勇氣的試煉】護送失敗！你在途中倒下了。請重新從村口出發。',
        });
      }
    }
  }

  // ──────────────────────────────────────────────────────────
  //  事件鉤子 — 收集物品（法師任務）
  // ──────────────────────────────────────────────────────────

  onItemCollected(characterId: string, itemId: string): void {
    const row = this.getQuestRow(characterId);
    if (!row || row.completed_at) return;

    const progress = JSON.parse(row.progress || '{}');

    // ─── 法師 Step 0：收集水晶碎片 ───
    if (row.quest_id === 'mage_trial' && row.step === 0) {
      if (itemId === 'crystal_shard') {
        const crystals = ((progress.crystals as number) ?? 0) + 1;
        progress.crystals = crystals;
        this.updateProgress(characterId, JSON.stringify(progress));

        if (crystals >= 3) {
          this.advanceStep(characterId);
        } else {
          sendToCharacter(characterId, 'quest', {
            action: 'class_quest_progress',
            text: `【智慧的試煉】水晶碎片：${crystals}/3`,
          });
        }
      }
    }
  }

  // ──────────────────────────────────────────────────────────
  //  列出可用的轉職任務
  // ──────────────────────────────────────────────────────────

  formatAvailableQuests(character: Character): string {
    if (character.classId !== 'adventurer') {
      return '你已經轉職過了，不需要轉職任務。';
    }
    if (character.level < 10) {
      return `需要達到 Lv.10 才能接取轉職任務（目前 Lv.${character.level}）。`;
    }

    const existing = this.getQuestRow(character.id);
    if (existing && !existing.completed_at) {
      const def = CLASS_QUEST_DEFS[existing.quest_id];
      return `你正在進行轉職任務「${def?.name ?? existing.quest_id}」。使用 classquest status 查看進度。`;
    }
    if (existing && existing.completed_at) {
      return '你已完成轉職任務。';
    }

    let text = '可選的轉職任務\n';
    text += '─'.repeat(40) + '\n';

    for (const def of Object.values(CLASS_QUEST_DEFS)) {
      text += `【${def.name}】（${def.id}）→ ${def.targetClass}\n`;
      text += `  ${def.description}\n`;
      text += `  步驟：\n`;
      for (let i = 0; i < def.steps.length; i++) {
        text += `    ${i + 1}. ${def.steps[i].description}\n`;
      }
      text += '\n';
    }

    text += '用法：classquest start <任務ID>\n';
    text += '例如：classquest start warrior_trial';
    return text;
  }

  // ──────────────────────────────────────────────────────────
  //  DB 操作
  // ──────────────────────────────────────────────────────────

  private getQuestRow(characterId: string): ClassQuestRow | undefined {
    try {
      return getDb()
        .prepare('SELECT * FROM class_quests WHERE character_id = ?')
        .get(characterId) as ClassQuestRow | undefined;
    } catch {
      return undefined;
    }
  }

  private insertQuest(characterId: string, questId: string): void {
    try {
      getDb()
        .prepare(
          'INSERT OR REPLACE INTO class_quests (character_id, quest_id, step, progress, started_at) VALUES (?, ?, 0, ?, unixepoch())',
        )
        .run(characterId, questId, '{}');
    } catch { /* ignore */ }
  }

  private updateProgress(characterId: string, progress: string): void {
    try {
      getDb()
        .prepare('UPDATE class_quests SET progress = ? WHERE character_id = ?')
        .run(progress, characterId);
    } catch { /* ignore */ }
  }
}
