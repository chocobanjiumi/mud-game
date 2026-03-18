// 二轉轉職任務系統 — ClassQuest2Manager
// 12 條二轉任務鏈（每個進階職業一條），要求 Lv30 + 一轉完成 + 2000 金幣

import type { Character, ClassId } from '@game/shared';
import { CLASS_DEFS } from '@game/shared';
import { sendToCharacter } from '../ws/handler.js';
import { getDb } from '../db/schema.js';
import { saveCharacter } from '../db/queries.js';
import { ClassChangeManager } from './class-change.js';

// ============================================================
//  型別定義
// ============================================================

export interface ClassQuest2Step {
  type: 'dungeon' | 'pvp' | 'crafting' | 'kill' | 'survive' | 'collect' | 'visit' | 'level' | 'enhance' | 'tame' | 'heal' | 'fish' | 'cook' | 'alchemy';
  target: string;
  count: number;
  description: string;
  completeText: string;
}

export interface ClassQuest2Def {
  id: string;
  name: string;
  description: string;
  fromClass: ClassId;
  toClass: ClassId;
  steps: ClassQuest2Step[];
  rewards: {
    gold: number;
    exp: number;
    items: { itemId: string; count: number }[];
  };
}

interface ClassQuest2Row {
  character_id: string;
  quest_id: string;
  step: number;
  progress: string; // JSON
  started_at: number | null;
  completed_at: number | null;
}

// ============================================================
//  任務定義
// ============================================================

export const CLASS_QUEST_2_DEFS: Record<string, ClassQuest2Def> = {

  // ─── 劍士系 ───────────────────────────────────────────────

  swordsman_to_knight: {
    id: 'swordsman_to_knight',
    name: '騎士之路',
    description: '通過暗影地城的試煉、在競技場中證明實力、鍛造秘銀武器，方可成為騎士。',
    fromClass: 'swordsman',
    toClass: 'knight',
    steps: [
      { type: 'dungeon', target: 'shadow_dungeon', count: 1, description: '通關暗影地城', completeText: '你在黑暗中展現了守護之心！' },
      { type: 'pvp', target: 'any', count: 3, description: '在 PvP 中獲勝 3 次', completeText: '你的劍術已令對手敬畏！' },
      { type: 'crafting', target: 'mithril_weapon', count: 1, description: '鍛造一把秘銀武器', completeText: '秘銀武器在你手中閃耀！' },
    ],
    rewards: { gold: 5000, exp: 10000, items: [{ itemId: 'knight_emblem', count: 1 }] },
  },

  swordsman_to_berserker: {
    id: 'swordsman_to_berserker',
    name: '狂戰士之血',
    description: '以狂暴的力量殺戮怪物、在絕境中生存、獨力擊殺精英，覺醒狂戰士之血。',
    fromClass: 'swordsman',
    toClass: 'berserker',
    steps: [
      { type: 'kill', target: 'any_monster', count: 50, description: '在 1 小時內擊殺 50 隻怪物', completeText: '你的殺意令大地顫抖！' },
      { type: 'survive', target: 'low_hp', count: 10, description: '在 HP 低於 20% 時存活 10 回合', completeText: '瀕死的你反而更加強大！' },
      { type: 'kill', target: 'elite_solo', count: 1, description: '獨力擊殺一隻精英怪物', completeText: '你已證明了獨戰強者的能力！' },
    ],
    rewards: { gold: 5000, exp: 10000, items: [{ itemId: 'berserker_talisman', count: 1 }] },
  },

  swordsman_to_sword_saint: {
    id: 'swordsman_to_sword_saint',
    name: '劍聖悟道',
    description: '在決鬥中精進劍術、將武器強化至極致、挑戰精英敵人，領悟劍之奧義。',
    fromClass: 'swordsman',
    toClass: 'sword_saint',
    steps: [
      { type: 'pvp', target: 'any', count: 10, description: '在 PvP 中獲勝 10 次', completeText: '你的劍技已臻化境！' },
      { type: 'enhance', target: 'weapon_plus10', count: 1, description: '將武器強化至 +10', completeText: '你與武器合為一體！' },
      { type: 'kill', target: 'elite', count: 3, description: '擊殺 3 隻精英怪物', completeText: '劍道已在你的心中！' },
    ],
    rewards: { gold: 5000, exp: 10000, items: [{ itemId: 'sword_saint_scroll', count: 1 }] },
  },

  // ─── 法師系 ───────────────────────────────────────────────

  mage_to_archmage: {
    id: 'mage_to_archmage',
    name: '大法師之證',
    description: '精研煉金術製作藥劑、通關水晶神殿、以純魔法之力擊殺首領，證明你的魔法造詣。',
    fromClass: 'mage',
    toClass: 'archmage',
    steps: [
      { type: 'crafting', target: 'potion', count: 10, description: '製作 10 瓶藥劑', completeText: '你的煉金知識已臻成熟！' },
      { type: 'dungeon', target: 'crystal_temple', count: 1, description: '通關水晶神殿', completeText: '水晶的力量回應了你！' },
      { type: 'kill', target: 'boss_magic_only', count: 3, description: '僅用魔法擊殺 3 隻首領', completeText: '你已是純粹的魔法大師！' },
    ],
    rewards: { gold: 5000, exp: 10000, items: [{ itemId: 'archmage_orb', count: 1 }] },
  },

  mage_to_warlock: {
    id: 'mage_to_warlock',
    name: '術士契約',
    description: '獵殺黑暗生物、在深淵中存活、製作進階強化石，與黑暗簽訂契約。',
    fromClass: 'mage',
    toClass: 'warlock',
    steps: [
      { type: 'kill', target: 'dark_monster', count: 100, description: '擊殺 100 隻黑暗系怪物', completeText: '黑暗的力量已臣服於你！' },
      { type: 'survive', target: 'abyss_room', count: 1, description: '在深淵房間中存活', completeText: '你在深淵中看見了真理！' },
      { type: 'crafting', target: 'advanced_enhance_stone', count: 1, description: '製作進階強化石', completeText: '你掌握了暗黑鍛造之術！' },
    ],
    rewards: { gold: 5000, exp: 10000, items: [{ itemId: 'warlock_grimoire', count: 1 }] },
  },

  mage_to_chronomancer: {
    id: 'mage_to_chronomancer',
    name: '時空術士',
    description: '遊歷所有區域、獨自攻略地城、達到煉金等級 15，感悟時空的奧秘。',
    fromClass: 'mage',
    toClass: 'chronomancer',
    steps: [
      { type: 'visit', target: 'all_zones', count: 1, description: '造訪所有區域', completeText: '你已感知了空間的脈動！' },
      { type: 'dungeon', target: 'any_solo', count: 1, description: '獨自通關任意地城', completeText: '獨行者的力量！' },
      { type: 'alchemy', target: 'alchemy_level', count: 15, description: '達到煉金等級 15', completeText: '時間與物質的奧秘盡在掌握！' },
    ],
    rewards: { gold: 5000, exp: 10000, items: [{ itemId: 'chrono_hourglass', count: 1 }] },
  },

  // ─── 遊俠系 ───────────────────────────────────────────────

  ranger_to_marksman: {
    id: 'ranger_to_marksman',
    name: '神射手',
    description: '以精準的暴擊展現射術、攻略海盜船、在競技場中證明實力。',
    fromClass: 'ranger',
    toClass: 'marksman',
    steps: [
      { type: 'kill', target: 'critical_hit', count: 50, description: '以暴擊擊中敵人 50 次', completeText: '你的箭矢百發百中！' },
      { type: 'dungeon', target: 'pirate_ship', count: 1, description: '通關海盜船', completeText: '海盜們對你的射術心生畏懼！' },
      { type: 'pvp', target: 'any', count: 5, description: '在 PvP 中獲勝 5 次', completeText: '你是競技場的射手之王！' },
    ],
    rewards: { gold: 5000, exp: 10000, items: [{ itemId: 'marksman_badge', count: 1 }] },
  },

  ranger_to_assassin: {
    id: 'ranger_to_assassin',
    name: '暗殺者',
    description: '在第一回合擊殺敵人、調製毒藥、獨力暗殺精英，成為暗影中的獵手。',
    fromClass: 'ranger',
    toClass: 'assassin',
    steps: [
      { type: 'kill', target: 'first_round_kill', count: 30, description: '在第一回合擊殺 30 隻怪物', completeText: '你的暗殺技術出神入化！' },
      { type: 'crafting', target: 'poison', count: 5, description: '製作 5 瓶毒藥', completeText: '致命的毒藥在你手中誕生！' },
      { type: 'kill', target: 'elite_solo', count: 1, description: '獨力擊殺一隻精英怪物', completeText: '暗殺精英——完美的任務！' },
    ],
    rewards: { gold: 5000, exp: 10000, items: [{ itemId: 'assassin_mask', count: 1 }] },
  },

  ranger_to_beast_master: {
    id: 'ranger_to_beast_master',
    name: '馴獸師',
    description: '馴服寵物、攻略烈焰神殿、精進釣魚技術，與自然建立深厚連結。',
    fromClass: 'ranger',
    toClass: 'beast_master',
    steps: [
      { type: 'tame', target: 'pet', count: 3, description: '馴服 3 隻寵物', completeText: '動物們對你產生了深厚的信任！' },
      { type: 'dungeon', target: 'flame_temple', count: 1, description: '通關烈焰神殿', completeText: '你與夥伴一同征服了烈焰！' },
      { type: 'fish', target: 'fishing_level', count: 10, description: '達到釣魚等級 10', completeText: '你與大自然的連結已圓滿！' },
    ],
    rewards: { gold: 5000, exp: 10000, items: [{ itemId: 'beast_whistle', count: 1 }] },
  },

  // ─── 祭司系 ───────────────────────────────────────────────

  priest_to_high_priest: {
    id: 'priest_to_high_priest',
    name: '大祭司',
    description: '治癒眾生、以治療者身份通關地城、製作藥劑，成為至高的神官。',
    fromClass: 'priest',
    toClass: 'high_priest',
    steps: [
      { type: 'heal', target: 'any', count: 100, description: '治療 100 次', completeText: '你的治癒之光照耀大地！' },
      { type: 'dungeon', target: 'any_healer', count: 1, description: '以治療者身份通關任意地城', completeText: '你是隊伍中最可靠的後盾！' },
      { type: 'crafting', target: 'potion', count: 20, description: '製作 20 瓶藥劑', completeText: '你的醫藥知識已登峰造極！' },
    ],
    rewards: { gold: 5000, exp: 10000, items: [{ itemId: 'high_priest_staff', count: 1 }] },
  },

  priest_to_druid: {
    id: 'priest_to_druid',
    name: '德魯伊',
    description: '探索所有森林、精進烹飪技術、在戰鬥中堅持不攻擊，與自然融為一體。',
    fromClass: 'priest',
    toClass: 'druid',
    steps: [
      { type: 'visit', target: 'all_forest_rooms', count: 1, description: '造訪所有森林房間', completeText: '森林的精靈認可了你！' },
      { type: 'cook', target: 'cooking_level', count: 15, description: '達到烹飪等級 15', completeText: '大自然的恩賜在你手中化為美食！' },
      { type: 'survive', target: 'no_attack', count: 20, description: '在戰鬥中存活 20 回合不攻擊', completeText: '以慈悲化解暴力——德魯伊之道！' },
    ],
    rewards: { gold: 5000, exp: 10000, items: [{ itemId: 'druid_circlet', count: 1 }] },
  },

  priest_to_inquisitor: {
    id: 'priest_to_inquisitor',
    name: '審判者',
    description: '消滅不死族、在競技場中勝利、攻略惡魔要塞，以神聖之力制裁邪惡。',
    fromClass: 'priest',
    toClass: 'inquisitor',
    steps: [
      { type: 'kill', target: 'undead', count: 50, description: '擊殺 50 隻不死族怪物', completeText: '不死族在你的神聖之光下灰飛煙滅！' },
      { type: 'pvp', target: 'any', count: 5, description: '在 PvP 中獲勝 5 次', completeText: '審判之力無人能擋！' },
      { type: 'dungeon', target: 'demon_fortress', count: 1, description: '通關惡魔要塞', completeText: '你已淨化了惡魔的巢穴！' },
    ],
    rewards: { gold: 5000, exp: 10000, items: [{ itemId: 'inquisitor_hammer', count: 1 }] },
  },
};

// ============================================================
//  ClassQuest2Manager
// ============================================================

export class ClassQuest2Manager {
  private classChangeMgr: ClassChangeManager | null = null;

  setClassChangeManager(mgr: ClassChangeManager): void {
    this.classChangeMgr = mgr;
  }

  // ──────────────────────────────────────────────────────────
  //  初始化表（確保 class_quests 表存在，class2_ prefix 區分）
  // ──────────────────────────────────────────────────────────

  ensureTables(): void {
    // class_quests 表已在 schema.ts 建立，但 PK 是 character_id
    // 二轉任務使用 quest_id 以 'class2_' 開頭區分
    // 需要支援同一角色同時有一轉和二轉任務紀錄
    // 修改：使用 (character_id, quest_id) 的模式，但因為 PK 是 character_id，
    // 我們在二轉中用不同的查詢前綴
    // 為了安全，直接建一個 class2_quests 表
    try {
      getDb().exec(`
        CREATE TABLE IF NOT EXISTS class2_quests (
          character_id TEXT PRIMARY KEY,
          quest_id TEXT NOT NULL,
          step INTEGER DEFAULT 0,
          progress TEXT DEFAULT '{}',
          started_at INTEGER,
          completed_at INTEGER
        )
      `);
    } catch { /* table may already exist */ }
  }

  // ──────────────────────────────────────────────────────────
  //  開始任務
  // ──────────────────────────────────────────────────────────

  startQuest2(
    characterId: string,
    questId: string,
    character: Character,
  ): { success: boolean; message: string } {
    const def = CLASS_QUEST_2_DEFS[questId];
    if (!def) {
      return { success: false, message: '二轉任務不存在。' };
    }

    // 等級檢查
    if (character.level < 30) {
      return {
        success: false,
        message: `需要達到 Lv.30 才能接取二轉任務「${def.name}」，你目前 Lv.${character.level}。`,
      };
    }

    // 職業檢查：必須是對應的一轉職業
    if (character.classId !== def.fromClass) {
      const classDef = CLASS_DEFS[def.fromClass];
      return {
        success: false,
        message: `此任務需要「${classDef?.name ?? def.fromClass}」職業才能接取。你目前是「${CLASS_DEFS[character.classId]?.name ?? character.classId}」。`,
      };
    }

    // 金幣檢查
    if (character.gold < 2000) {
      return { success: false, message: `金幣不足！二轉任務需要 2000 金幣，你目前有 ${character.gold} 金幣。` };
    }

    // 檢查是否有進行中的二轉任務
    const existing = this.getQuestRow(characterId);
    if (existing) {
      if (existing.completed_at) {
        return { success: false, message: '你已經完成過二轉任務了。' };
      }
      const existDef = CLASS_QUEST_2_DEFS[existing.quest_id];
      return {
        success: false,
        message: `你已經在進行二轉任務「${existDef?.name ?? existing.quest_id}」了。使用 classquest2 abandon 放棄後才能接取新的。`,
      };
    }

    // 插入新任務
    this.insertQuest(characterId, questId);

    sendToCharacter(characterId, 'quest', {
      action: 'class_quest2_started',
      questId,
      name: def.name,
      description: def.description,
    });

    return {
      success: true,
      message:
        `接取二轉任務：「${def.name}」！\n${def.description}\n\n` +
        `第一步：${def.steps[0].description}`,
    };
  }

  // ──────────────────────────────────────────────────────────
  //  查詢狀態
  // ──────────────────────────────────────────────────────────

  getQuest2Status(characterId: string): {
    questId: string;
    def: ClassQuest2Def;
    step: number;
    progress: Record<string, unknown>;
    completed: boolean;
  } | null {
    const row = this.getQuestRow(characterId);
    if (!row) return null;

    const def = CLASS_QUEST_2_DEFS[row.quest_id];
    if (!def) return null;

    return {
      questId: row.quest_id,
      def,
      step: row.step,
      progress: JSON.parse(row.progress || '{}'),
      completed: row.completed_at !== null,
    };
  }

  formatQuest2Status(characterId: string): string {
    const status = this.getQuest2Status(characterId);
    if (!status) {
      return '你沒有進行中的二轉任務。使用 classquest2 start 開始。';
    }

    if (status.completed) {
      return `二轉任務「${status.def.name}」已完成！`;
    }

    let text = `二轉任務：「${status.def.name}」\n`;
    text += '─'.repeat(40) + '\n';
    text += `目標職業：${CLASS_DEFS[status.def.toClass]?.name ?? status.def.toClass}\n\n`;

    for (let i = 0; i < status.def.steps.length; i++) {
      const stepDef = status.def.steps[i];
      const marker = i < status.step ? '[完成]' : i === status.step ? '[進行中]' : '[未開始]';
      text += `  第 ${i + 1} 步 ${marker}：${stepDef.description}\n`;

      if (i === status.step) {
        const progressText = this.getProgressDescription(status.def, status.step, status.progress);
        if (progressText) {
          text += `    進度：${progressText}\n`;
        }
      }
    }

    text += `\n完成所有步驟後，前往轉職大廳使用 classquest2 complete 完成二轉（需要 2000 金幣）。`;
    return text;
  }

  private getProgressDescription(def: ClassQuest2Def, step: number, progress: Record<string, unknown>): string {
    const stepDef = def.steps[step];
    if (!stepDef) return '';

    const current = (progress.count as number) ?? 0;

    switch (stepDef.type) {
      case 'dungeon':
        return current >= stepDef.count ? '已通關' : '未通關';
      case 'pvp':
        return `PvP 勝利：${current}/${stepDef.count}`;
      case 'crafting':
        return `製作進度：${current}/${stepDef.count}`;
      case 'kill':
        return `擊殺數：${current}/${stepDef.count}`;
      case 'survive':
        return `存活回合：${current}/${stepDef.count}`;
      case 'collect':
        return `收集進度：${current}/${stepDef.count}`;
      case 'visit':
        return current >= 1 ? '已完成' : '未完成';
      case 'enhance':
        return current >= 1 ? '已達成' : '未達成';
      case 'tame':
        return `馴服數：${current}/${stepDef.count}`;
      case 'heal':
        return `治療次數：${current}/${stepDef.count}`;
      case 'fish':
        return `釣魚等級進度：${current}/${stepDef.count}`;
      case 'cook':
        return `烹飪等級進度：${current}/${stepDef.count}`;
      case 'alchemy':
        return `煉金等級進度：${current}/${stepDef.count}`;
      default:
        return `${current}/${stepDef.count}`;
    }
  }

  // ──────────────────────────────────────────────────────────
  //  推進步驟
  // ──────────────────────────────────────────────────────────

  private advanceStep(characterId: string): void {
    const row = this.getQuestRow(characterId);
    if (!row || row.completed_at) return;

    const def = CLASS_QUEST_2_DEFS[row.quest_id];
    if (!def) return;

    const newStep = row.step + 1;
    const stepDef = def.steps[row.step];
    if (stepDef) {
      sendToCharacter(characterId, 'quest', {
        action: 'class_quest2_step_complete',
        questId: row.quest_id,
        step: row.step,
        text: stepDef.completeText,
      });
    }

    if (newStep >= def.steps.length) {
      try {
        getDb().prepare(
          'UPDATE class2_quests SET step = ?, progress = ? WHERE character_id = ?',
        ).run(newStep, '{}', characterId);
      } catch { /* ignore */ }

      sendToCharacter(characterId, 'quest', {
        action: 'class_quest2_all_steps_done',
        questId: row.quest_id,
        text: `二轉任務「${def.name}」的所有步驟已完成！\n前往轉職大廳（class_change_hall），使用 classquest2 complete 完成二轉。`,
      });
    } else {
      try {
        getDb().prepare(
          'UPDATE class2_quests SET step = ?, progress = ? WHERE character_id = ?',
        ).run(newStep, JSON.stringify({ count: 0 }), characterId);
      } catch { /* ignore */ }

      const nextStepDef = def.steps[newStep];
      sendToCharacter(characterId, 'quest', {
        action: 'class_quest2_next_step',
        questId: row.quest_id,
        step: newStep,
        text: `進入下一步：${nextStepDef.description}`,
      });
    }
  }

  /** 增加當前步驟的計數進度 */
  private incrementProgress(characterId: string, amount: number = 1): boolean {
    const row = this.getQuestRow(characterId);
    if (!row || row.completed_at) return false;

    const def = CLASS_QUEST_2_DEFS[row.quest_id];
    if (!def) return false;

    const stepDef = def.steps[row.step];
    if (!stepDef) return false;

    const progress = JSON.parse(row.progress || '{}');
    const current = ((progress.count as number) ?? 0) + amount;
    progress.count = current;
    this.updateProgress(characterId, JSON.stringify(progress));

    if (current >= stepDef.count) {
      this.advanceStep(characterId);
      return true;
    } else {
      sendToCharacter(characterId, 'quest', {
        action: 'class_quest2_progress',
        text: `【${def.name}】${this.getProgressDescription(def, row.step, progress)}`,
      });
      return false;
    }
  }

  // ──────────────────────────────────────────────────────────
  //  完成任務（二轉）
  // ──────────────────────────────────────────────────────────

  completeQuest2(
    characterId: string,
    character: Character,
  ): { success: boolean; message: string } {
    const row = this.getQuestRow(characterId);
    if (!row) {
      return { success: false, message: '你沒有進行中的二轉任務。' };
    }
    if (row.completed_at) {
      return { success: false, message: '二轉任務已完成。' };
    }

    const def = CLASS_QUEST_2_DEFS[row.quest_id];
    if (!def) {
      return { success: false, message: '任務定義不存在。' };
    }

    if (row.step < def.steps.length) {
      return { success: false, message: `二轉任務尚未完成。目前在第 ${row.step + 1} 步。` };
    }

    if (character.roomId !== 'class_change_hall') {
      return { success: false, message: '你需要在轉職大廳（class_change_hall）才能完成二轉。' };
    }

    if (character.gold < 2000) {
      return { success: false, message: `金幣不足！二轉需要 2000 金幣，你目前有 ${character.gold} 金幣。` };
    }

    if (!this.classChangeMgr) {
      return { success: false, message: '系統錯誤：轉職管理器未初始化。' };
    }

    const result = this.classChangeMgr.performClassChange(character, def.toClass);
    if (!result.success) {
      return result;
    }

    // 標記完成
    try {
      getDb().prepare(
        'UPDATE class2_quests SET completed_at = unixepoch() WHERE character_id = ?',
      ).run(characterId);
    } catch { /* ignore */ }

    // 發放獎勵
    character.gold += def.rewards.gold;
    character.exp += def.rewards.exp;
    saveCharacter(character);

    // 獎勵物品由呼叫端處理（需要 addInventoryItem）

    sendToCharacter(characterId, 'quest', {
      action: 'class_quest2_completed',
      questId: row.quest_id,
      targetClass: def.toClass,
      text: `二轉任務「${def.name}」完成！你已成為 ${CLASS_DEFS[def.toClass]?.name ?? def.toClass}！`,
    });

    return {
      success: true,
      message:
        `恭喜！二轉任務「${def.name}」完成！\n${result.message}\n` +
        `獎勵：${def.rewards.gold} 金幣、${def.rewards.exp} 經驗值`,
    };
  }

  // ──────────────────────────────────────────────────────────
  //  放棄任務
  // ──────────────────────────────────────────────────────────

  abandonQuest2(characterId: string): { success: boolean; message: string } {
    const row = this.getQuestRow(characterId);
    if (!row) {
      return { success: false, message: '你沒有進行中的二轉任務。' };
    }
    if (row.completed_at) {
      return { success: false, message: '二轉任務已完成，無法放棄。' };
    }

    try {
      getDb().prepare('DELETE FROM class2_quests WHERE character_id = ?').run(characterId);
    } catch { /* ignore */ }

    const def = CLASS_QUEST_2_DEFS[row.quest_id];
    return { success: true, message: `已放棄二轉任務「${def?.name ?? row.quest_id}」。所有進度已清除。` };
  }

  // ──────────────────────────────────────────────────────────
  //  事件鉤子
  // ──────────────────────────────────────────────────────────

  /** 地城通關 */
  onDungeonClear(characterId: string, dungeonId: string, solo: boolean): void {
    const row = this.getQuestRow(characterId);
    if (!row || row.completed_at) return;

    const def = CLASS_QUEST_2_DEFS[row.quest_id];
    if (!def) return;

    const stepDef = def.steps[row.step];
    if (!stepDef) return;

    if (stepDef.type === 'dungeon') {
      if (stepDef.target === dungeonId || stepDef.target === 'any_solo' && solo || stepDef.target === 'any_healer') {
        this.incrementProgress(characterId, 1);
      }
    }
  }

  /** PvP 勝利 */
  onPvPWin(characterId: string): void {
    const row = this.getQuestRow(characterId);
    if (!row || row.completed_at) return;

    const def = CLASS_QUEST_2_DEFS[row.quest_id];
    if (!def) return;

    const stepDef = def.steps[row.step];
    if (stepDef?.type === 'pvp') {
      this.incrementProgress(characterId, 1);
    }
  }

  /** 怪物擊殺 */
  onMonsterKill(
    characterId: string,
    monsterId: string,
    info: { isCrit?: boolean; isFirstRound?: boolean; isElite?: boolean; isBoss?: boolean; isSolo?: boolean; usedMagicOnly?: boolean; isDark?: boolean; isUndead?: boolean },
  ): void {
    const row = this.getQuestRow(characterId);
    if (!row || row.completed_at) return;

    const def = CLASS_QUEST_2_DEFS[row.quest_id];
    if (!def) return;

    const stepDef = def.steps[row.step];
    if (!stepDef || stepDef.type !== 'kill') return;

    let matches = false;
    switch (stepDef.target) {
      case 'any_monster': matches = true; break;
      case 'elite_solo': matches = (info.isElite ?? false) && (info.isSolo ?? false); break;
      case 'elite': matches = info.isElite ?? false; break;
      case 'boss_magic_only': matches = (info.isBoss ?? false) && (info.usedMagicOnly ?? false); break;
      case 'dark_monster': matches = info.isDark ?? false; break;
      case 'undead': matches = info.isUndead ?? false; break;
      case 'critical_hit': matches = info.isCrit ?? false; break;
      case 'first_round_kill': matches = info.isFirstRound ?? false; break;
    }

    if (matches) {
      this.incrementProgress(characterId, 1);
    }
  }

  /** 製作完成 */
  onCraft(characterId: string, craftedItemId: string, category: string): void {
    const row = this.getQuestRow(characterId);
    if (!row || row.completed_at) return;

    const def = CLASS_QUEST_2_DEFS[row.quest_id];
    if (!def) return;

    const stepDef = def.steps[row.step];
    if (stepDef?.type !== 'crafting') return;

    let matches = false;
    switch (stepDef.target) {
      case 'mithril_weapon': matches = craftedItemId.includes('mithril'); break;
      case 'potion': matches = category === 'potion' || craftedItemId.includes('potion'); break;
      case 'advanced_enhance_stone': matches = craftedItemId.includes('enhance_stone') || craftedItemId.includes('advanced'); break;
      case 'poison': matches = craftedItemId.includes('poison'); break;
    }

    if (matches) {
      this.incrementProgress(characterId, 1);
    }
  }

  /** 治療 */
  onHealPerformed(characterId: string): void {
    const row = this.getQuestRow(characterId);
    if (!row || row.completed_at) return;

    const def = CLASS_QUEST_2_DEFS[row.quest_id];
    if (!def) return;

    const stepDef = def.steps[row.step];
    if (stepDef?.type === 'heal') {
      this.incrementProgress(characterId, 1);
    }
  }

  /** 馴服寵物 */
  onPetTamed(characterId: string): void {
    const row = this.getQuestRow(characterId);
    if (!row || row.completed_at) return;

    const def = CLASS_QUEST_2_DEFS[row.quest_id];
    if (!def) return;

    const stepDef = def.steps[row.step];
    if (stepDef?.type === 'tame') {
      this.incrementProgress(characterId, 1);
    }
  }

  /** 存活回合（低 HP / 不攻擊） */
  onCombatRound(characterId: string, hpPercent: number, didAttack: boolean): void {
    const row = this.getQuestRow(characterId);
    if (!row || row.completed_at) return;

    const def = CLASS_QUEST_2_DEFS[row.quest_id];
    if (!def) return;

    const stepDef = def.steps[row.step];
    if (stepDef?.type !== 'survive') return;

    if (stepDef.target === 'low_hp' && hpPercent < 20) {
      this.incrementProgress(characterId, 1);
    } else if (stepDef.target === 'no_attack' && !didAttack) {
      this.incrementProgress(characterId, 1);
    } else if (stepDef.target === 'abyss_room') {
      // just surviving counts
      this.incrementProgress(characterId, 1);
    }
  }

  /** 武器強化到 +10 */
  onWeaponEnhanced(characterId: string, enhanceLevel: number): void {
    const row = this.getQuestRow(characterId);
    if (!row || row.completed_at) return;

    const def = CLASS_QUEST_2_DEFS[row.quest_id];
    if (!def) return;

    const stepDef = def.steps[row.step];
    if (stepDef?.type === 'enhance' && stepDef.target === 'weapon_plus10' && enhanceLevel >= 10) {
      this.incrementProgress(characterId, 1);
    }
  }

  /** 造訪所有區域/森林 */
  onRoomEnter(characterId: string, roomId: string, allZonesVisited: boolean, allForestVisited: boolean): void {
    const row = this.getQuestRow(characterId);
    if (!row || row.completed_at) return;

    const def = CLASS_QUEST_2_DEFS[row.quest_id];
    if (!def) return;

    const stepDef = def.steps[row.step];
    if (stepDef?.type !== 'visit') return;

    if (stepDef.target === 'all_zones' && allZonesVisited) {
      this.incrementProgress(characterId, 1);
    } else if (stepDef.target === 'all_forest_rooms' && allForestVisited) {
      this.incrementProgress(characterId, 1);
    }
  }

  /** 生活技能等級檢查（釣魚/烹飪/煉金） */
  onLifeSkillLevel(characterId: string, skill: 'fishing' | 'cooking' | 'alchemy', level: number): void {
    const row = this.getQuestRow(characterId);
    if (!row || row.completed_at) return;

    const def = CLASS_QUEST_2_DEFS[row.quest_id];
    if (!def) return;

    const stepDef = def.steps[row.step];
    if (!stepDef) return;

    if (stepDef.type === 'fish' && skill === 'fishing' && level >= stepDef.count) {
      this.incrementProgress(characterId, stepDef.count);
    } else if (stepDef.type === 'cook' && skill === 'cooking' && level >= stepDef.count) {
      this.incrementProgress(characterId, stepDef.count);
    } else if (stepDef.type === 'alchemy' && skill === 'alchemy' && level >= stepDef.count) {
      this.incrementProgress(characterId, stepDef.count);
    }
  }

  // ──────────────────────────────────────────────────────────
  //  列出可用的二轉任務
  // ──────────────────────────────────────────────────────────

  formatAvailableQuests(character: Character): string {
    const currentClassDef = CLASS_DEFS[character.classId];
    if (!currentClassDef || currentClassDef.tier !== 1) {
      return '只有一轉職業才能接取二轉任務。';
    }
    if (character.level < 30) {
      return `需要達到 Lv.30 才能接取二轉任務（目前 Lv.${character.level}）。`;
    }

    const existing = this.getQuestRow(character.id);
    if (existing && !existing.completed_at) {
      const def = CLASS_QUEST_2_DEFS[existing.quest_id];
      return `你正在進行二轉任務「${def?.name ?? existing.quest_id}」。使用 classquest2 status 查看進度。`;
    }
    if (existing && existing.completed_at) {
      return '你已完成二轉任務。';
    }

    // 篩選此職業可用的任務
    const available = Object.values(CLASS_QUEST_2_DEFS).filter(d => d.fromClass === character.classId);

    let text = '可選的二轉任務\n';
    text += '─'.repeat(40) + '\n';
    text += `需求：Lv.30、2000 金幣\n\n`;

    for (const def of available) {
      const targetClassDef = CLASS_DEFS[def.toClass];
      text += `【${def.name}】（${def.id}）→ ${targetClassDef?.name ?? def.toClass}\n`;
      text += `  ${def.description}\n`;
      text += `  步驟：\n`;
      for (let i = 0; i < def.steps.length; i++) {
        text += `    ${i + 1}. ${def.steps[i].description}\n`;
      }
      text += `  獎勵：${def.rewards.gold} 金幣、${def.rewards.exp} 經驗值\n\n`;
    }

    text += '用法：classquest2 start <任務ID>\n';
    text += '例如：classquest2 start swordsman_to_knight';
    return text;
  }

  // ──────────────────────────────────────────────────────────
  //  DB 操作
  // ──────────────────────────────────────────────────────────

  private getQuestRow(characterId: string): ClassQuest2Row | undefined {
    try {
      return getDb()
        .prepare('SELECT * FROM class2_quests WHERE character_id = ?')
        .get(characterId) as ClassQuest2Row | undefined;
    } catch {
      return undefined;
    }
  }

  private insertQuest(characterId: string, questId: string): void {
    try {
      getDb()
        .prepare(
          'INSERT OR REPLACE INTO class2_quests (character_id, quest_id, step, progress, started_at) VALUES (?, ?, 0, ?, unixepoch())',
        )
        .run(characterId, questId, JSON.stringify({ count: 0 }));
    } catch { /* ignore */ }
  }

  private updateProgress(characterId: string, progress: string): void {
    try {
      getDb()
        .prepare('UPDATE class2_quests SET progress = ? WHERE character_id = ?')
        .run(progress, characterId);
    } catch { /* ignore */ }
  }
}
