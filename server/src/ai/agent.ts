// AI Agent 控制器 — AgentController 類別
// 管理 AI 角色的遊戲循環：偵測狀態 → 建立 prompt → 呼叫 Arinova API → 解析回應 → 執行指令

import { Arinova } from '@arinova-ai/spaces-sdk';
import type { Character, CombatantState, CombatState } from '@game/shared';
import { buildExplorePrompt, buildCombatPrompt } from './prompt.js';
import { parseAiResponse } from './parser.js';

// ============================================================
//  型別
// ============================================================

/** 單一 AI Agent 的執行狀態 */
interface AgentEntry {
  characterId: string;
  agentId: string;
  accessToken: string;
  isActive: boolean;
  lastActionTime: number;
  /** 在探索模式中的行動間隔（毫秒） */
  exploreInterval: number;
  /** 連續錯誤次數 */
  errorCount: number;
}

/** 外部依賴回呼介面 */
export interface AgentDependencies {
  getCharacter: (id: string) => Character | undefined;
  getRoomInfo: (roomId: string) => {
    name: string;
    description: string;
    exits: { direction: string }[];
    monsters: { id: string; name: string; level: number }[];
    npcs: { id: string; name: string; title: string }[];
    players: { id: string; name: string; level: number }[];
    items: { id: string; name: string }[];
  } | null;
  getCombatForPlayer: (characterId: string) => CombatState | null;
  executeCommand: (characterId: string, command: string) => void;
  submitCombatAction: (combatId: string, action: {
    actorId: string;
    type: 'attack' | 'skill' | 'defend' | 'flee';
    skillId?: string;
    targetId?: string;
  }) => void;
  getPartyMembers: (characterId: string) => string[];
}

// ============================================================
//  常數
// ============================================================

/** 探索模式最小行動間隔（毫秒） */
const EXPLORE_MIN_INTERVAL = 3000;
/** 探索模式最大行動間隔（毫秒） */
const EXPLORE_MAX_INTERVAL = 8000;
/** 戰鬥模式行動間隔（毫秒） */
const COMBAT_INTERVAL = 3000;
/** 連續錯誤上限（超過則暫停 Agent） */
const MAX_ERROR_COUNT = 5;
/** Agent 主循環 tick 間隔（毫秒） */
const TICK_INTERVAL = 1000;

/** 系統 prompt（繁體中文） */
const SYSTEM_PROMPT =
  '你是一個在中世紀奇幻世界中冒險的角色。' +
  '根據當前情境做出合理的行動決策。' +
  '回覆時只需要給出行動指令，不需要額外解釋。' +
  '使用繁體中文回答。';

// ============================================================
//  AgentController
// ============================================================

export class AgentController {
  /** characterId -> AgentEntry */
  private agents: Map<string, AgentEntry> = new Map();
  /** 外部依賴 */
  private deps: AgentDependencies | null = null;
  /** 主循環計時器 */
  private loopTimer: ReturnType<typeof setInterval> | null = null;
  /** 是否已初始化 Arinova SDK */
  private sdkInitialized = false;

  // ──────────────────────────────────────────────────────────
  //  初始化
  // ──────────────────────────────────────────────────────────

  /** 初始化 Arinova SDK（僅需呼叫一次） */
  initSdk(appId: string, baseUrl?: string): void {
    if (this.sdkInitialized) return;

    Arinova.init({
      appId,
      baseUrl: baseUrl || 'https://api.arinova.ai',
    });

    this.sdkInitialized = true;
    console.log('[AI] Arinova SDK 初始化完成');
  }

  /** 設定外部依賴回呼 */
  setDependencies(deps: AgentDependencies): void {
    this.deps = deps;
  }

  // ──────────────────────────────────────────────────────────
  //  Agent 註冊 / 移除
  // ──────────────────────────────────────────────────────────

  /**
   * 註冊一個 AI Agent 綁定到角色
   * @param characterId 遊戲角色 ID
   * @param agentId Arinova Agent ID
   * @param accessToken 使用者的 Arinova access token
   */
  registerAgent(characterId: string, agentId: string, accessToken: string): void {
    const entry: AgentEntry = {
      characterId,
      agentId,
      accessToken,
      isActive: true,
      lastActionTime: Date.now(),
      exploreInterval: this.randomExploreInterval(),
      errorCount: 0,
    };

    this.agents.set(characterId, entry);

    const char = this.deps?.getCharacter(characterId);
    console.log(`[AI] Agent 註冊: ${char?.name ?? characterId} (agentId: ${agentId})`);
  }

  /** 移除 Agent */
  unregisterAgent(characterId: string): void {
    const entry = this.agents.get(characterId);
    if (entry) {
      entry.isActive = false;
      this.agents.delete(characterId);
      console.log(`[AI] Agent 移除: ${characterId}`);
    }
  }

  /** 重新連線 Agent（例如 token 刷新後） */
  reconnectAgent(characterId: string, newAccessToken: string): boolean {
    const entry = this.agents.get(characterId);
    if (!entry) return false;

    entry.accessToken = newAccessToken;
    entry.isActive = true;
    entry.errorCount = 0;
    console.log(`[AI] Agent 重新連線: ${characterId}`);
    return true;
  }

  // ──────────────────────────────────────────────────────────
  //  主循環
  // ──────────────────────────────────────────────────────────

  /** 啟動 AI Agent 主循環（每秒 tick 一次） */
  startLoop(): void {
    if (this.loopTimer) return;

    this.loopTimer = setInterval(() => {
      this.tick().catch(err => {
        console.error('[AI] Agent 主循環錯誤:', err);
      });
    }, TICK_INTERVAL);

    console.log('[AI] Agent 主循環已啟動');
  }

  /** 停止主循環 */
  stopLoop(): void {
    if (this.loopTimer) {
      clearInterval(this.loopTimer);
      this.loopTimer = null;
      console.log('[AI] Agent 主循環已停止');
    }
  }

  /** 單次 tick：檢查所有 Agent 是否需要行動 */
  async tick(): Promise<void> {
    if (!this.deps) return;

    const now = Date.now();

    for (const [characterId, agent] of this.agents) {
      if (!agent.isActive) continue;

      // 檢查是否有戰鬥
      const combat = this.deps.getCombatForPlayer(characterId);
      const interval = combat ? COMBAT_INTERVAL : agent.exploreInterval;

      if (now - agent.lastActionTime < interval) continue;

      // 時間到了，執行行動
      agent.lastActionTime = now;

      try {
        await this.executeAgentAction(agent, combat);
        agent.errorCount = 0; // 重置錯誤計數

        // 更新探索間隔（加入隨機性讓 AI 行為更自然）
        if (!combat) {
          agent.exploreInterval = this.randomExploreInterval();
        }
      } catch (err) {
        agent.errorCount++;
        console.error(`[AI] Agent 行動錯誤 (${characterId}, 第 ${agent.errorCount} 次):`, err);

        // 超過錯誤上限，暫停 Agent
        if (agent.errorCount >= MAX_ERROR_COUNT) {
          agent.isActive = false;
          console.warn(`[AI] Agent 因連續錯誤暫停: ${characterId}`);
        }

        // Fallback 行為
        this.fallbackAction(agent, combat);
      }
    }
  }

  // ──────────────────────────────────────────────────────────
  //  單一 Agent 行動
  // ──────────────────────────────────────────────────────────

  private async executeAgentAction(
    agent: AgentEntry,
    combat: CombatState | null,
  ): Promise<void> {
    if (!this.deps) return;

    const character = this.deps.getCharacter(agent.characterId);
    if (!character) {
      this.unregisterAgent(agent.characterId);
      return;
    }

    let prompt: string;
    let inCombat = false;

    if (combat) {
      inCombat = true;

      // 檢查角色是否已死亡
      const playerState = combat.playerTeam.find(p => p.id === agent.characterId);
      if (!playerState || playerState.isDead) return;

      // 取得隊伍資訊
      const partyMembers = this.deps.getPartyMembers(agent.characterId);

      prompt = buildCombatPrompt(character, combat, partyMembers);
    } else {
      const roomInfo = this.deps.getRoomInfo(character.roomId);
      if (!roomInfo) return;

      const partyMembers = this.deps.getPartyMembers(agent.characterId);

      prompt = buildExplorePrompt(character, roomInfo, partyMembers);
    }

    // 呼叫 Arinova Agent API
    const response = await this.callAgentApi(agent, prompt);

    // 解析回應為遊戲指令
    const parsed = parseAiResponse(response, inCombat);

    if (!parsed.command) return;

    if (inCombat && combat) {
      // 戰鬥模式：提交戰鬥行動
      const actionType = parsed.combatAction?.type ?? 'attack';
      // Filter out 'item' type which is not supported in submitCombatAction
      const validType: 'attack' | 'skill' | 'defend' | 'flee' =
        actionType === 'item' ? 'attack' : actionType;
      this.deps.submitCombatAction(combat.id, {
        actorId: agent.characterId,
        type: validType,
        skillId: parsed.combatAction?.skillId,
        targetId: parsed.combatAction?.targetId,
      });
    } else {
      // 探索模式：執行遊戲指令
      this.deps.executeCommand(agent.characterId, parsed.command);
    }

    // 如果 AI 想說話
    if (parsed.speech && !inCombat) {
      this.deps.executeCommand(agent.characterId, `say ${parsed.speech}`);
    }
  }

  // ──────────────────────────────────────────────────────────
  //  Arinova API 呼叫
  // ──────────────────────────────────────────────────────────

  private async callAgentApi(agent: AgentEntry, prompt: string): Promise<string> {
    try {
      const { response } = await Arinova.agent.chat({
        agentId: agent.agentId,
        prompt,
        systemPrompt: SYSTEM_PROMPT,
        accessToken: agent.accessToken,
      });
      return response;
    } catch (err) {
      console.error(`[AI] Arinova API 呼叫失敗 (${agent.characterId}):`, err);
      throw err;
    }
  }

  // ──────────────────────────────────────────────────────────
  //  Fallback 行為
  // ──────────────────────────────────────────────────────────

  private fallbackAction(agent: AgentEntry, combat: CombatState | null): void {
    if (!this.deps) return;

    if (combat) {
      // 戰鬥中 fallback：普通攻擊
      this.deps.submitCombatAction(combat.id, {
        actorId: agent.characterId,
        type: 'attack',
      });
    } else {
      // 探索中 fallback：查看四周
      this.deps.executeCommand(agent.characterId, 'look');
    }
  }

  // ──────────────────────────────────────────────────────────
  //  輔助
  // ──────────────────────────────────────────────────────────

  /** 產生隨機探索間隔 */
  private randomExploreInterval(): number {
    return EXPLORE_MIN_INTERVAL + Math.random() * (EXPLORE_MAX_INTERVAL - EXPLORE_MIN_INTERVAL);
  }

  /** 取得活躍 Agent 數量 */
  getActiveAgentCount(): number {
    let count = 0;
    for (const agent of this.agents.values()) {
      if (agent.isActive) count++;
    }
    return count;
  }

  /** 角色是否為 AI Agent */
  isAgent(characterId: string): boolean {
    return this.agents.has(characterId);
  }

  /** 取得所有活躍 Agent 的角色 ID */
  getActiveAgentIds(): string[] {
    const ids: string[] = [];
    for (const [id, agent] of this.agents) {
      if (agent.isActive) ids.push(id);
    }
    return ids;
  }

  /** 銷毀（停止循環，清除所有 Agent） */
  destroy(): void {
    this.stopLoop();
    this.agents.clear();
  }
}
