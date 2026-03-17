// 守護靈系統 — GuardianManager
// 管理守護靈的感知、親密度、提示機制

import type {
  GuardianDef, GuardianRoute, GuardianHintType,
  Character, RoomDef, MonsterDef, NpcDef,
} from '@game/shared';
import { getRoom } from '../data/rooms.js';
import { getMonster } from '../data/monsters.js';
import { getNpcsByRoom } from '../data/npcs.js';
import { sendNarrative } from '../ws/handler.js';

// ============================================================
//  守護靈定義
// ============================================================

export const GUARDIAN_DEFS: Record<string, GuardianDef> = {
  hunters_eye: {
    id: 'hunters_eye',
    name: '獵人之眼',
    route: 'creature',
    description:
      '一隻由銀色光芒凝聚而成的鷹隼，擁有穿透偽裝的銳利目光。' +
      '它能感知隱藏的生物、陷阱與伏擊，是探索危險區域的最佳夥伴。',
    personality: '冷靜、警覺、言簡意賅。說話時帶著獵人的果斷，偶爾透露對獵物的敬意。',
  },

  treasure_instinct: {
    id: 'treasure_instinct',
    name: '尋寶直覺',
    route: 'treasure',
    description:
      '一隻閃爍著金色微光的小狐狸精靈，對財寶有著天生的嗅覺。' +
      '它能嗅出隱藏的物品、寶箱與秘密通道，是收集者的夢想搭檔。',
    personality: '活潑、好奇、偶爾調皮。說話時興奮地描述寶物，對閃亮的東西無法抗拒。',
  },

  soul_resonance: {
    id: 'soul_resonance',
    name: '靈魂共鳴',
    route: 'spirit',
    description:
      '一團飄浮著的幽藍色火焰，擁有感知靈魂與歷史的能力。' +
      '它能偵測NPC的秘密、感知幽靈NPC、揭示被遺忘的知識。',
    personality: '深沉、神秘、富有詩意。說話時帶著古老的智慧，偶爾流露出對過去的懷念。',
  },
};

// ============================================================
//  常數
// ============================================================

/** 基礎感知機率（主動） */
const BASE_PERCEPTION_RATE = 0.20;

/** 被動感知機率（進入房間時） */
const PASSIVE_PERCEPTION_RATE = 0.12;

/** 主動感知額外加成 */
const ACTIVE_SENSE_BOOST = 0.15;

/** 親密度加成上限 (at affinity 100) */
const MAX_AFFINITY_BONUS = 0.20;

/** 路線匹配加成 */
const ROUTE_MATCH_BONUS = 0.30;

/** 親密度變化值 */
const AFFINITY_ON_ASK = 1;
const AFFINITY_ON_FOLLOW_ADVICE = 3;
const AFFINITY_ON_DISCOVER = 5;

/** 親密度上下限 */
const AFFINITY_MIN = 0;
const AFFINITY_MAX = 100;

// ============================================================
//  GuardianManager
// ============================================================

export class GuardianManager {

  // ──────────────────────────────────────────────────────────
  //  感知機率計算
  // ──────────────────────────────────────────────────────────

  /**
   * 計算感知機率並回傳是否成功感知
   * @param guardianRoute 守護靈的路線
   * @param hintType 提示的類型
   * @param affinity 當前親密度 (0-100)
   * @param isActive 是否為主動感知（主動有額外加成）
   */
  checkPerception(
    guardianRoute: GuardianRoute,
    hintType: GuardianHintType,
    affinity: number,
    isActive: boolean = false,
  ): boolean {
    const rate = this.calculatePerceptionRate(guardianRoute, hintType, affinity, isActive);
    return Math.random() < rate;
  }

  /**
   * 計算感知機率
   * Passive base: 12%
   * Active base: 20% + 15% boost = 35%
   * Affinity bonus: up to +20% (at affinity 100)
   * Route match bonus: +30%
   * Total max: 70%
   */
  calculatePerceptionRate(
    guardianRoute: GuardianRoute,
    hintType: GuardianHintType,
    affinity: number,
    isActive: boolean = false,
  ): number {
    // 被動使用較低基礎值，主動使用較高基礎值 + 額外加成
    let rate = isActive ? BASE_PERCEPTION_RATE + ACTIVE_SENSE_BOOST : PASSIVE_PERCEPTION_RATE;

    // 親密度加成：affinity / 100 * MAX_AFFINITY_BONUS
    const clampedAffinity = Math.max(AFFINITY_MIN, Math.min(AFFINITY_MAX, affinity));
    rate += (clampedAffinity / AFFINITY_MAX) * MAX_AFFINITY_BONUS;

    // 路線匹配加成（親密度 >= 30 才解鎖）
    if (guardianRoute === hintType && affinity >= 30) {
      rate += ROUTE_MATCH_BONUS;
    }

    return Math.min(rate, 0.70);
  }

  // ──────────────────────────────────────────────────────────
  //  提示生成
  // ──────────────────────────────────────────────────────────

  /**
   * 取得房間的守護靈提示
   * 根據感知檢定結果，回傳提示文字或 null
   */
  getGuardianHint(
    room: RoomDef,
    monsters: MonsterDef[],
    npcs: NpcDef[],
    guardianRoute: GuardianRoute,
    affinity: number,
    isActive: boolean = false,
  ): string | null {
    const hints: string[] = [];

    // 嘗試取得房間提示（三種類型都嘗試，但路線匹配的機率更高）
    const hintTypes: GuardianHintType[] = ['creature', 'treasure', 'spirit'];

    for (const hintType of hintTypes) {
      if (!this.checkPerception(guardianRoute, hintType, affinity, isActive)) continue;

      // 房間提示
      const roomHint = room.guardianHints?.[hintType];
      if (roomHint) {
        hints.push(roomHint);
      }

      // 怪物提示
      for (const monster of monsters) {
        const monsterHint = monster.guardianHints?.[hintType];
        if (monsterHint) {
          hints.push(`[${monster.name}] ${monsterHint}`);
        }
      }

      // NPC 提示
      for (const npc of npcs) {
        const npcHint = npc.guardianHints?.[hintType];
        if (npcHint) {
          hints.push(`[${npc.name}] ${npcHint}`);
        }
      }
    }

    if (hints.length === 0) return null;

    // 隨機選擇一到兩條提示（避免一次給太多資訊）
    const count = Math.min(hints.length, Math.random() < 0.5 ? 1 : 2);
    const selected = this.shuffleArray(hints).slice(0, count);
    return selected.join('\n');
  }

  // ──────────────────────────────────────────────────────────
  //  主要入口：進入房間時觸發
  // ──────────────────────────────────────────────────────────

  /**
   * 玩家進入房間時觸發守護靈感知
   * @param sessionId WsSession.sessionId for sending messages
   * @param character 玩家角色
   */
  processGuardianSense(sessionId: string, character: Character): void {
    // 檢查玩家是否有守護靈
    if (!character.guardianId || !character.guardianRoute) return;

    const guardianDef = GUARDIAN_DEFS[character.guardianId];
    if (!guardianDef) return;

    const room = getRoom(character.roomId);
    if (!room) return;

    const affinity = character.guardianAffinity ?? 0;

    // 收集房間裡的怪物定義
    const monsters: MonsterDef[] = [];
    if (room.monsters) {
      for (const spawn of room.monsters) {
        const def = getMonster(spawn.monsterId);
        if (def) monsters.push(def);
      }
    }

    // 收集房間裡的 NPC 定義
    const npcs = getNpcsByRoom(character.roomId);

    // 被動感知：使用較低基礎機率
    const hint = this.getGuardianHint(room, monsters, npcs, character.guardianRoute, affinity, false);
    if (hint) {
      sendNarrative(sessionId, `\n✦ ${guardianDef.name}低語 ✦\n${hint}`);
    }
  }

  // ──────────────────────────────────────────────────────────
  //  主動感知（ask / guardian sense 指令）
  // ──────────────────────────────────────────────────────────

  /**
   * 主動請求守護靈感知（消耗行動的主動探索）
   * 主動感知時，感知機率額外 +15%
   */
  activeGuardianSense(sessionId: string, character: Character): string | null {
    if (!character.guardianId || !character.guardianRoute) {
      return '你還沒有守護靈。';
    }

    const guardianDef = GUARDIAN_DEFS[character.guardianId];
    if (!guardianDef) return '守護靈資料異常。';

    const room = getRoom(character.roomId);
    if (!room) return '你所在的位置無法感知。';

    const affinity = character.guardianAffinity ?? 0;

    // 收集怪物和 NPC
    const monsters: MonsterDef[] = [];
    if (room.monsters) {
      for (const spawn of room.monsters) {
        const def = getMonster(spawn.monsterId);
        if (def) monsters.push(def);
      }
    }
    const npcs = getNpcsByRoom(character.roomId);

    // 主動感知：使用主動模式，有 +15% 基礎加成
    const hint = this.getGuardianHint(room, monsters, npcs, character.guardianRoute, affinity, true);

    // 增加親密度
    this.modifyAffinity(character, AFFINITY_ON_ASK);

    if (hint) {
      return `✦ ${guardianDef.name}仔細感應了周圍 ✦\n${hint}`;
    }
    return `✦ ${guardianDef.name}專注地感應著……但這次沒有察覺到什麼特別的。 ✦`;
  }

  /**
   * 請求守護靈給予一般建議
   */
  getGuardianAdvice(character: Character): string {
    if (!character.guardianId || !character.guardianRoute) {
      return '你還沒有守護靈。請先選擇一位守護靈。';
    }

    const guardianDef = GUARDIAN_DEFS[character.guardianId];
    if (!guardianDef) return '守護靈資料異常。';

    const room = getRoom(character.roomId);
    if (!room) return '你所在的位置無法感知。';

    const affinity = character.guardianAffinity ?? 0;

    // 增加親密度
    this.modifyAffinity(character, AFFINITY_ON_ASK);

    // 根據路線給出不同風格的建議
    const advice = this.generateAdvice(guardianDef, room, character, affinity);
    return `✦ ${guardianDef.name}的建議 ✦\n${advice}`;
  }

  // ──────────────────────────────────────────────────────────
  //  親密度管理
  // ──────────────────────────────────────────────────────────

  /** 修改親密度 */
  modifyAffinity(character: Character, delta: number): void {
    if (character.guardianAffinity === undefined) {
      character.guardianAffinity = 0;
    }
    character.guardianAffinity = Math.max(
      AFFINITY_MIN,
      Math.min(AFFINITY_MAX, character.guardianAffinity + delta),
    );
  }

  /** 當玩家跟隨守護靈的建議行動時呼叫 */
  onFollowAdvice(character: Character): void {
    this.modifyAffinity(character, AFFINITY_ON_FOLLOW_ADVICE);
  }

  /** 當玩家發現守護靈的提示所指的東西時呼叫 */
  onDiscoverHint(character: Character): void {
    this.modifyAffinity(character, AFFINITY_ON_DISCOVER);
  }

  // ──────────────────────────────────────────────────────────
  //  守護靈選擇
  // ──────────────────────────────────────────────────────────

  /** 為角色設定守護靈 */
  selectGuardian(character: Character, guardianId: string): { success: boolean; message: string } {
    const def = GUARDIAN_DEFS[guardianId];
    if (!def) {
      const available = Object.values(GUARDIAN_DEFS)
        .map(g => `  ${g.id} - ${g.name}：${g.description.slice(0, 30)}...`)
        .join('\n');
      return {
        success: false,
        message: `未知的守護靈 ID。可用的守護靈：\n${available}`,
      };
    }

    character.guardianId = def.id;
    character.guardianRoute = def.route;
    if (character.guardianAffinity === undefined) {
      character.guardianAffinity = 10; // 初始親密度
    }

    return {
      success: true,
      message: `你選擇了「${def.name}」作為你的守護靈。\n${def.description}\n\n初始親密度：${character.guardianAffinity}`,
    };
  }

  // ──────────────────────────────────────────────────────────
  //  內部輔助
  // ──────────────────────────────────────────────────────────

  /** 根據守護靈路線生成建議 */
  private generateAdvice(
    guardian: GuardianDef,
    room: RoomDef,
    character: Character,
    affinity: number,
  ): string {
    const hpPercent = character.maxHp > 0 ? character.hp / character.maxHp : 0;
    const mpPercent = character.maxResource > 0 ? character.resource / character.maxResource : 0;

    const lines: string[] = [];

    // 生存建議
    if (hpPercent < 0.3) {
      lines.push('你的生命力很低，建議先休息或使用藥水恢復。');
    } else if (hpPercent < 0.6) {
      lines.push('注意保持你的生命值，不要冒進。');
    }

    if (mpPercent < 0.2) {
      lines.push('資源所剩無幾，謹慎使用技能。');
    }

    // 路線特化建議
    switch (guardian.route) {
      case 'creature':
        if (room.monsters && room.monsters.length > 0) {
          lines.push('我感覺到這裡有生物的氣息。保持警覺，注意觀察敵人的弱點。');
        } else {
          lines.push('這裡暫時沒有危險的氣息，可以安心探索。');
        }
        break;

      case 'treasure':
        lines.push('仔細搜索每個角落，這裡可能藏著寶藏。不要放過任何不尋常的細節。');
        if (room.exits.length > 2) {
          lines.push('這裡有很多出口……其中一條可能通往隱藏的寶庫。');
        }
        break;

      case 'spirit':
        if (room.npcs && room.npcs.length > 0) {
          lines.push('這裡有值得對話的存在。試著與他們交談，也許能獲得重要的情報。');
        } else {
          lines.push('我能感受到這裡殘留的靈魂印記……這個地方有著不為人知的過去。');
        }
        break;
    }

    // 親密度相關
    if (affinity >= 80) {
      lines.push('（我們之間的羈絆很深，我會盡全力幫助你。）');
    } else if (affinity >= 50) {
      lines.push('（隨著我們的羈絆加深，我能感知到更多東西。）');
    }

    return lines.join('\n');
  }

  /** 洗牌 */
  private shuffleArray<T>(arr: T[]): T[] {
    const result = [...arr];
    for (let i = result.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [result[i], result[j]] = [result[j], result[i]];
    }
    return result;
  }
}
