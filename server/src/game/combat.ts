// 戰鬥引擎 - 回合制戰鬥核心

import type {
  CombatState, CombatAction, CombatActionType, CombatResult,
  CombatantState, DamageResult, CombatLoot, ActiveStatusEffect, StatusEffect,
  MonsterDef, Character, SkillDef, ElementType, ResourceType, DerivedStats,
  MonsterBehaviorType, MonsterPhaseRule, MonsterTelegraphAction, InlineEntityPayload,
} from '@game/shared';
import { randomUUID } from 'crypto';
import { applySkillUpgradeRule, deriveMountStats, getMountDef, getStatusEffectDef, ITEM_DEFS, SKILL_DEFS, WEAPON_TYPE_DEFS } from '@game/shared';
import {
  calculateDamage, calculateDerived, baseStatsToCombat, derivedWithDexLuk,
  getEquipmentStats,
} from './damage.js';
import { EffectEngine } from './effects.js';
import { getAttackDescription } from './attack-descriptions.js';
import { SkillTreeManager } from './skill-tree.js';
import type { AttackResultType } from './attack-descriptions.js';
import type { MonsterInstance } from './world.js';
import {
  applyHealingReceivedOriginModifier,
  applyIncomingDamageOriginReduction,
  applyOutgoingDamageOriginBonus,
  getFleeOriginBonus,
} from './origin-effects.js';
import { getSurvivalDodgeBonus } from './passive-skill-effects.js';
import {
  applyTriggeredAffixEvents,
  getModifiedSkillRuntime,
  getResourceAffixBonus,
  getSkillAffixModifiers,
  type AffixTriggerContext,
  type TriggeredAffixContext,
  type TriggeredAffixResult,
} from './equipment-affixes.js';
import { applySkillResourceChange, checkSkillResource } from './skill-resource.js';
import { getPveHighLevelCombatPenalty } from './level-scaling.js';

// ============================================================
//  常數
// ============================================================

const TURN_TIMER_SECONDS = 5;
const DEFAULT_ACTION: CombatActionType = 'attack';
type CombatAttackMode = 'melee' | 'ranged';
type CombatActionWithAttackMode = CombatAction & { attackMode?: CombatAttackMode };

const DEFAULT_BOSS_PHASES: MonsterPhaseRule[] = [
  {
    phase: 2,
    hpThresholdPercent: 70,
    message: '進入第二階段，攻勢變得更加猛烈！',
    damageMultiplier: 1.15,
  },
  {
    phase: 3,
    hpThresholdPercent: 35,
    message: '進入最終階段，準備釋放壓倒性的力量！',
    damageMultiplier: 1.3,
  },
];

const DEFAULT_BOSS_TELEGRAPHS: MonsterTelegraphAction[] = [
  {
    id: 'boss_heavy_cast',
    skillId: 'basic_attack',
    message: '開始蓄積危險攻勢，下一次行動可被打斷。',
    executeMessage: '釋放了蓄勢已久的攻擊！',
    cooldownRounds: 3,
  },
];

// ============================================================
//  CombatSession — 單場戰鬥的狀態
// ============================================================

export interface CombatSession {
  id: string;
  state: CombatState;
  /** 額外追蹤：玩家角色參照 */
  playerCharacters: Map<string, Character>;
  /** 額外追蹤：怪物實例參照 */
  monsterInstances: Map<string, MonsterInstance>;
  /** 玩家目前普通攻擊目標 */
  preferredTargetIds: Map<string, string>;
  /** 玩家目前普通攻擊模式 */
  preferredAttackModes: Map<string, CombatAttackMode>;
  /** 角色技能冷卻：`${actorId}:${skillId}` -> remaining rounds */
  skillCooldowns: Map<string, number>;
  /** 裝備詞綴內部冷卻 */
  affixCooldowns: Map<string, number>;
  /** Boss 控制免疫：targetId -> immunity expires after this round */
  bossControlImmunityUntilRound: Map<string, number>;
  /** 已觸發護盾破裂回血的角色（每場戰鬥一次） */
  shieldBreakHealUsed: Set<string>;
  /** 回合計時器 */
  turnTimerHandle: ReturnType<typeof setTimeout> | null;
  /** 回合開始時間 */
  turnStartTime: number;
  /** 戰鬥結束回呼 */
  onEnd: ((result: CombatResult, loot?: CombatLoot) => void) | null;
  /** 回合結束回呼 */
  onRoundEnd: ((roundInfo: { round: number; playerActions: Map<string, CombatAction> }) => void) | null;
}

// ============================================================
//  CombatEngine
// ============================================================

export class CombatEngine {
  /** combatId -> CombatSession */
  private sessions: Map<string, CombatSession> = new Map();
  /** playerId -> combatId (快速查詢玩家是否在戰鬥中) */
  private playerCombatMap: Map<string, string> = new Map();
  /** 效果引擎 */
  private effectEngine = new EffectEngine();
  /** 技能樹管理器（用於計算加成） */
  private skillTreeMgr: SkillTreeManager | null = null;

  setSkillTreeManager(mgr: SkillTreeManager): void {
    this.skillTreeMgr = mgr;
  }

  /** 廣播回呼：通知參戰者 */
  private broadcastFn:
    | ((combatId: string, playerIds: string[], message: unknown) => void)
    | null = null;

  /** 註冊廣播函式 */
  setBroadcastFunction(
    fn: (combatId: string, playerIds: string[], message: unknown) => void,
  ): void {
    this.broadcastFn = fn;
  }

  private monsterToCombatant(m: MonsterInstance, options: { isApproaching?: boolean; arrivalTicksRemaining?: number } = {}): CombatantState {
    return {
      id: m.instanceId,
      name: m.def.name,
      isPlayer: false,
      isAi: true,
      hp: m.hp,
      maxHp: m.maxHp,
      mp: m.mp,
      maxMp: m.maxMp,
      resource: m.mp,
      maxResource: m.maxMp,
      resourceType: 'mp' as ResourceType,
      level: m.def.level,
      classId: 'monster',
      activeEffects: [],
      formation: 'front',
      threat: 0,
      isDead: false,
      monsterBehavior: this.getMonsterBehaviorType(m.def),
      monsterPhases: this.getMonsterPhaseRules(m.def),
      currentMonsterPhase: 1,
      isApproaching: options.isApproaching,
      arrivalTicksRemaining: options.arrivalTicksRemaining,
    };
  }

  // ──────────────────────────────────────────────────────────
  //  開始戰鬥
  // ──────────────────────────────────────────────────────────

  /**
   * 發起一場戰鬥
   * @param players 參戰玩家角色
   * @param monsters 參戰怪物
   * @param onEnd 戰鬥結束時的回呼
   * @returns 戰鬥 ID
   */
  startCombat(
    players: Character[],
    monsters: MonsterInstance[],
    onEnd?: (result: CombatResult, loot?: CombatLoot) => void,
  ): string {
    const combatId = randomUUID();

    // 建立玩家 CombatantState
    const BACK_ROW_CLASSES = new Set(['mage', 'archmage', 'warlock', 'chronomancer', 'priest', 'high_priest', 'druid', 'inquisitor', 'marksman']);
    const playerTeam: CombatantState[] = players.map(p => ({
      id: p.id,
      name: p.name,
      isPlayer: true,
      isAi: p.isAi,
      hp: p.hp,
      maxHp: p.maxHp,
      mp: p.mp,
      maxMp: p.maxMp,
      resource: p.resource,
      maxResource: p.maxResource,
      resourceType: p.resourceType,
      level: p.level,
      classId: p.classId,
      raceId: p.raceId,
      faithId: p.faithId,
      activeEffects: [],
      formation: BACK_ROW_CLASSES.has(p.classId) ? 'back' as const : 'front' as const,
      threat: 0,
      activeMountId: p.activeMountId ?? null,
      mounted: p.mounted ?? false,
      mountFatigue: Math.max(0, p.mountFatigue ?? 0),
      mountCooldownUntil: p.mountCooldownUntil,
      isDead: false,
    }));

    // 建立怪物 CombatantState
    const enemyTeam: CombatantState[] = monsters.map(m => this.monsterToCombatant(m));

    const state: CombatState = {
      id: combatId,
      phase: 'action_select',
      round: 1,
      turnTimer: TURN_TIMER_SECONDS,
      playerTeam,
      enemyTeam,
      pendingActions: new Map(),
      actionLog: [`【戰鬥開始】第 1 回合！`],
      result: 'ongoing',
    };

    // 建立角色 & 怪物映射
    const playerCharacters = new Map<string, Character>();
    for (const p of players) {
      playerCharacters.set(p.id, p);
      this.playerCombatMap.set(p.id, combatId);
    }

    const monsterInstances = new Map<string, MonsterInstance>();
    for (const m of monsters) {
      monsterInstances.set(m.instanceId, m);
    }

    const session: CombatSession = {
      id: combatId,
      state,
      playerCharacters,
      monsterInstances,
      preferredTargetIds: new Map(),
      preferredAttackModes: new Map(Array.from(playerCharacters.keys(), playerId => [playerId, 'melee'] as const)),
      skillCooldowns: new Map(),
      affixCooldowns: new Map(),
      bossControlImmunityUntilRound: new Map(),
      shieldBreakHealUsed: new Set(),
      turnTimerHandle: null,
      turnStartTime: Date.now(),
      onEnd: onEnd ?? null,
      onRoundEnd: null,
    };

    this.sessions.set(combatId, session);

    this.prepareMonsterTelegraphs(session, state.actionLog);

    this.broadcastCombatStart(session);

    // 啟動回合計時器
    this.startTurnTimer(session);

    return combatId;
  }

  // ──────────────────────────────────────────────────────────
  //  行動提交
  // ──────────────────────────────────────────────────────────

  /**
   * 玩家/AI 提交行動
   */
  submitAction(combatId: string, action: CombatAction): boolean {
    const session = this.sessions.get(combatId);
    if (!session || session.state.phase !== 'action_select') return false;
    if (action.type === 'skill' && action.skillId && this.getSkillCooldownRemaining(combatId, action.actorId, action.skillId) > 0) {
      return false;
    }
    const attackMode = (action as CombatActionWithAttackMode).attackMode;
    if (action.type === 'attack' && attackMode && session.playerCharacters.has(action.actorId)) {
      session.preferredAttackModes.set(action.actorId, attackMode);
    }

    session.state.pendingActions.set(action.actorId, action);

    return true;
  }

  submitActionAndResolveRound(combatId: string, action: CombatAction): CombatResult | undefined {
    const session = this.sessions.get(combatId);
    if (!session || session.state.phase !== 'action_select') return undefined;
    if (!this.submitAction(combatId, action)) return undefined;
    this.resolveRound(session);
    return session.state.result;
  }

  /**
   * 玩家是否在戰鬥中
   */
  isInCombat(playerId: string): boolean {
    return this.playerCombatMap.has(playerId);
  }

  /**
   * 取得玩家的戰鬥 ID
   */
  getPlayerCombatId(playerId: string): string | undefined {
    return this.playerCombatMap.get(playerId);
  }

  /**
   * 取得戰鬥狀態
   */
  getCombatState(combatId: string): CombatState | undefined {
    return this.sessions.get(combatId)?.state;
  }

  getSkillCooldownRemaining(combatId: string, actorId: string, skillId: string): number {
    return this.sessions.get(combatId)?.skillCooldowns.get(this.getSkillCooldownKey(actorId, skillId)) ?? 0;
  }

  startSkillCooldown(combatId: string, actorId: string, skillId: string, rounds: number): void {
    const session = this.sessions.get(combatId);
    if (!session || rounds <= 0) return;
    session.skillCooldowns.set(this.getSkillCooldownKey(actorId, skillId), rounds);
  }

  broadcastCombatState(combatId: string, log: string[] = []): boolean {
    const session = this.sessions.get(combatId);
    if (!session) return false;
    this.broadcastRoundResult(session, log, []);
    return true;
  }

  executeInstantSkillDamage(
    combatId: string,
    actorId: string,
    targetId: string,
    skillDef: SkillDef,
  ): { handled: boolean; message?: string; hit: boolean; killed: boolean } {
    const session = this.sessions.get(combatId);
    const actor = session?.state.playerTeam.find(player => player.id === actorId && !player.isDead);
    const target = session?.state.enemyTeam.find(enemy => enemy.id === targetId && !enemy.isDead);
    if (!session || !actor || !target) return { handled: false, hit: false, killed: false };

    const log: string[] = [];
    const attackerStats = this.getCombatStats(session, actor);
    const targetStats = this.getCombatStats(session, target);
    const targetElement = this.getCombatantElement(session, target.id);
    const outputAffixModifiers = getSkillAffixModifiers(actor.id, skillDef, {
      trigger: 'on_hit',
      targetHpPercent: target.maxHp > 0 ? (target.hp / target.maxHp) * 100 : 100,
    });
    const markBonus = this.effectEngine.getEffectValue(target.activeEffects, 'mark');
    const specialBonus = this.getSpecialDamageBonusPct(session, actor, target, skillDef);
    const penalty = getPveHighLevelCombatPenalty(actor, target);
    attackerStats.hitRate = Math.max(5, attackerStats.hitRate - penalty.hitRatePenalty);
    const multiplier = Math.min(10, skillDef.multiplier
      * this.getMonsterPhaseDamageMultiplier(actor)
      * (1 + (outputAffixModifiers?.damageBonusPct ?? 0) / 100)
      * (1 + markBonus / 100)
      * (1 + specialBonus / 100)
      * penalty.damageMultiplier);

    const dmgResult = calculateDamage({
      attackerId: actor.id,
      targetId: target.id,
      damageType: skillDef.damageType,
      element: skillDef.element,
      targetElement,
      multiplier,
      attacker: derivedWithDexLuk(this.applySkillAttackSource(attackerStats, skillDef), this.getCombatantDex(session, actor.id), this.getCombatantLuk(session, actor.id)),
      target: derivedWithDexLuk(targetStats, this.getCombatantDex(session, target.id), this.getCombatantLuk(session, target.id)),
    });
    dmgResult.damage = applyOutgoingDamageOriginBonus(actor, dmgResult.damage, skillDef, session.state.round);
    dmgResult.damage = applyIncomingDamageOriginReduction(target, dmgResult.damage, skillDef.damageType, dmgResult.element);

    let hit = false;
    if (dmgResult.isMiss) {
      log.push(`${actor.name}使用${skillDef.name}攻擊${target.name}，但本次命中判定失敗，造成 0 點傷害且目標生命值不變。`);
    } else if (dmgResult.isDodged) {
      log.push(`${actor.name}使用${skillDef.name}攻擊${target.name}，但${target.name}成功閃避，造成 0 點傷害且觸發閃避相關效果。`);
      this.triggerAffixEvents(session, target, 'on_dodge', log, {
        targetHpPercent: this.getHpPercent(target),
        isFirstHit: session.state.round === 1,
      });
    } else {
      hit = true;
      const critText = dmgResult.isCrit ? '暴擊！' : '';
      log.push(`${actor.name}使用${skillDef.name}命中${target.name}，造成 ${dmgResult.damage} 點傷害${critText ? `，結果為${critText}` : '，結果為普通命中'}。`);
      if (this.effectEngine.getDamageReduction(target.activeEffects) > 0) {
        dmgResult.damage = this.applyBlockAffixEffects(session, target, actor, dmgResult.damage, log, {
          targetHpPercent: this.getHpPercent(target),
          isFirstHit: session.state.round === 1,
        });
      }
      this.applyDamageToTarget(session, target, dmgResult.damage, log, actor);
      this.triggerMonsterPhases(session, target, log);
      this.applySkillHitResourceEffects(actor, target, skillDef, log);
      this.triggerAffixEvents(session, actor, 'on_hit', log, {
        targetHpPercent: this.getHpPercent(target),
        isFirstHit: session.state.round === 1,
      });

      const stunChance = this.getNumericSpecial(skillDef, 'stunChance') ?? 0;
      const stunDuration = this.getNumericSpecial(skillDef, 'stunDuration') ?? 1;
      if (!target.isDead && stunChance > 0 && Math.random() * 100 < stunChance) {
        const msg = this.applyEffectWithBossControl(session, target, {
          type: 'stun',
          value: 1,
          duration: stunDuration,
          source: actor.id,
        }, actor.name);
        log.push(`  ${target.name}${msg}`);
      }

    }

    const killed = target.isDead;
    session.state.actionLog.push(...log);
    if (this.checkBattleEnd(session)) {
      this.endCombat(session);
    } else {
      this.broadcastRoundResult(session, log, []);
    }
    return { handled: true, message: log.join(' '), hit, killed };
  }

  setPreferredTarget(combatId: string, playerId: string, targetId: string): boolean {
    const session = this.sessions.get(combatId);
    if (!session) return false;
    const target = session.state.enemyTeam.find(enemy => enemy.id === targetId && !enemy.isDead);
    if (!target) return false;
    session.preferredTargetIds.set(playerId, targetId);
    return true;
  }

  setPreferredAttackMode(combatId: string, playerId: string, attackMode: CombatAttackMode): boolean {
    const session = this.sessions.get(combatId);
    if (!session || !session.playerCharacters.has(playerId)) return false;
    session.preferredAttackModes.set(playerId, attackMode);
    return true;
  }

  addMonsterToCombat(
    combatId: string,
    monster: MonsterInstance,
    preferredByPlayerId?: string,
    options: { isApproaching?: boolean; arrivalTicksRemaining?: number } = {},
  ): boolean {
    const session = this.sessions.get(combatId);
    if (!session || monster.isDead) return false;
    if (session.monsterInstances.has(monster.instanceId)) {
      if (preferredByPlayerId) this.setPreferredTarget(combatId, preferredByPlayerId, monster.instanceId);
      const existing = session.state.enemyTeam.find(enemy => enemy.id === monster.instanceId);
      if (existing) {
        existing.isApproaching = options.isApproaching ?? existing.isApproaching;
        existing.arrivalTicksRemaining = options.arrivalTicksRemaining ?? existing.arrivalTicksRemaining;
      }
      return false;
    }

    const combatant = this.monsterToCombatant(monster, options);
    session.state.enemyTeam.push(combatant);
    session.monsterInstances.set(monster.instanceId, monster);
    if (preferredByPlayerId) session.preferredTargetIds.set(preferredByPlayerId, monster.instanceId);

    const log = [`${monster.def.name}加入了戰鬥！`];
    this.prepareMonsterTelegraphs(session, log);
    this.broadcastRoundResult(session, log, []);
    return true;
  }

  setApproachingArrivalTicks(combatId: string, monsterId: string, arrivalTicksRemaining: number): boolean {
    const enemy = this.sessions.get(combatId)?.state.enemyTeam.find(candidate => candidate.id === monsterId);
    if (!enemy) return false;
    enemy.isApproaching = arrivalTicksRemaining > 0;
    enemy.arrivalTicksRemaining = Math.max(0, arrivalTicksRemaining);
    return true;
  }

  markMonsterArrived(combatId: string, monsterId: string): boolean {
    const enemy = this.sessions.get(combatId)?.state.enemyTeam.find(candidate => candidate.id === monsterId);
    if (!enemy) return false;
    enemy.isApproaching = false;
    enemy.arrivalTicksRemaining = 0;
    return true;
  }

  getCombatMonsterInstances(combatId: string): MonsterInstance[] {
    return Array.from(this.sessions.get(combatId)?.monsterInstances.values() ?? []);
  }

  // ──────────────────────────────────────────────────────────
  //  回合計時器
  // ──────────────────────────────────────────────────────────

  private startTurnTimer(session: CombatSession): void {
    session.turnStartTime = Date.now();

    session.turnTimerHandle = setTimeout(() => {
      // 時間到了，未提交行動的玩家使用預設行動
      this.fillDefaultActions(session);
      this.resolveRound(session);
    }, TURN_TIMER_SECONDS * 1000);
  }

  private clearTurnTimer(session: CombatSession): void {
    if (session.turnTimerHandle) {
      clearTimeout(session.turnTimerHandle);
      session.turnTimerHandle = null;
    }
  }

  /** 為未提交行動的參戰者填入預設行動 */
  private fillDefaultActions(session: CombatSession): void {
    const allCombatants = [
      ...session.state.playerTeam,
      ...session.state.enemyTeam,
    ].filter(c => !c.isDead && !this.isWaitingToArrive(c));

    for (const c of allCombatants) {
      if (!session.state.pendingActions.has(c.id)) {
        // 怪物 AI 或超時玩家 → 預設普通攻擊
        const preferredTargetId = c.isPlayer ? session.preferredTargetIds.get(c.id) : undefined;
        const preferredTarget = preferredTargetId
          ? session.state.enemyTeam.find(enemy => enemy.id === preferredTargetId && !enemy.isDead)
          : undefined;
        const target = preferredTarget ?? (
          c.isPlayer
            ? this.selectRandomAlive(session.state.enemyTeam)
            : this.selectRandomAlive(session.state.playerTeam)
        );

        const defaultAction: CombatActionWithAttackMode = {
          actorId: c.id,
          type: DEFAULT_ACTION,
          attackMode: c.isPlayer ? (session.preferredAttackModes.get(c.id) ?? 'melee') : 'melee',
          targetId: target?.id,
        };
        session.state.pendingActions.set(c.id, defaultAction);
      }
    }
  }

  // ──────────────────────────────────────────────────────────
  //  回合結算
  // ──────────────────────────────────────────────────────────

  private resolveRound(session: CombatSession): void {
    this.clearTurnTimer(session);
    session.state.phase = 'resolve';

    // 填入怪物 AI 的行動
    this.generateMonsterActions(session);
    // 填入未提交的玩家預設行動
    this.fillDefaultActions(session);

    // 收集所有行動
    const actions = Array.from(session.state.pendingActions.values());

    // 防禦/護盾類行動先結算；其餘再依 DEX 排序（速度快的先動）
    actions.sort((a, b) => {
      const priorityDiff = this.getActionPriority(b) - this.getActionPriority(a);
      if (priorityDiff !== 0) return priorityDiff;
      const dexA = this.getCombatantDex(session, a.actorId);
      const dexB = this.getCombatantDex(session, b.actorId);
      return dexB - dexA; // 高 DEX 先行動
    });

    const roundLog: string[] = [];
    const damageResults: DamageResult[] = [];

    // 逐一執行行動
    for (const action of actions) {
      const actor = this.findCombatant(session, action.actorId);
      if (!actor || actor.isDead) continue;

      // 檢查是否被控制
      if (this.effectEngine.isControlled(actor.activeEffects)) {
        roundLog.push(`${actor.name}被控制，無法行動！`);
        if (actor.pendingTelegraph) {
          roundLog.push(`${actor.name}的蓄力行動被中斷了！`);
          actor.pendingTelegraph = undefined;
        }
        continue;
      }

      switch (action.type) {
        case 'attack':
          this.executeAttack(session, action, actor, roundLog, damageResults);
          break;
        case 'skill':
          if (this.effectEngine.hasEffect(actor.activeEffects, 'silence')) {
            roundLog.push(`${actor.name}被沉默，無法使用技能，改為普通攻擊！`);
            this.executeAttack(session, { ...action, type: 'attack', skillId: undefined }, actor, roundLog, damageResults);
            break;
          }
          this.executeSkill(session, action, actor, roundLog, damageResults);
          break;
        case 'defend':
          this.executeDefend(session, action, actor, roundLog);
          break;
        case 'flee':
          this.executeFlee(session, action, actor, roundLog);
          break;
        case 'item':
          this.executeItem(session, action, actor, roundLog);
          break;
        case 'mount_ride':
          this.executeMountRide(session, actor, roundLog);
          break;
        case 'mount_charge':
          this.executeMountCharge(session, action, actor, roundLog, damageResults);
          break;
        case 'mounted_guard':
          this.executeMountedGuard(session, action, actor, roundLog);
          break;
        case 'formation': {
          const newRow = actor.formation === 'front' ? 'back' : 'front';
          actor.formation = newRow;
          roundLog.push(`${actor.name}移動到${newRow === 'front' ? '前排' : '後排'}！`);
          break;
        }
      }

      // 檢查戰鬥是否結束
      if (this.checkBattleEnd(session)) break;
    }

    // 回合結束：處理狀態效果 tick
    this.processEffectTicks(session, roundLog);

    // 回合結束：處理每回合資源回復
    this.processResourceRegen(session, roundLog);
    this.processMountFatigueRecovery(session, roundLog);

    // 回合結束：遞減裝備詞綴內部冷卻
    this.processAffixCooldowns(session);
    this.processSkillCooldowns(session);

    // 冷卻遞減
    // (由外部 PlayerManager 處理)

    // 更新日誌
    session.state.actionLog.push(...roundLog);

    // 觸發回合結束回呼
    if (session.onRoundEnd) {
      session.onRoundEnd({
        round: session.state.round,
        playerActions: new Map(session.state.pendingActions),
      });
    }

    // 清除 pending
    session.state.pendingActions.clear();

    // 廣播回合結果
    this.broadcastRoundResult(session, roundLog, damageResults);

    // 檢查戰鬥結束
    if (this.checkBattleEnd(session)) {
      this.endCombat(session);
      return;
    }

    // 下一回合
    session.state.round++;
    session.state.phase = 'action_select';
    session.state.actionLog.push(`【第 ${session.state.round} 回合】`);
    this.prepareMonsterTelegraphs(session, session.state.actionLog);

    // 重啟計時器
    this.startTurnTimer(session);
  }

  // ──────────────────────────────────────────────────────────
  //  行動執行
  // ──────────────────────────────────────────────────────────

  private getActionPriority(action: CombatAction): number {
    if (action.type === 'mount_ride') return 15;
    if (action.type === 'mounted_guard') return 18;
    if (action.type === 'mount_charge') return 5;
    if (action.type === 'defend') return 20;
    if (action.type !== 'skill' || !action.skillId) return 0;

    const skill = SKILL_DEFS[action.skillId];
    if (!skill) return 0;
    const isDefensiveSupport = skill.multiplier <= 0
      && (skill.targetType === 'self' || skill.targetType === 'single_ally' || skill.targetType === 'all_allies')
      && (
        skill.effects?.some(effect =>
          effect.type === 'damage_reduction'
          || effect.type === 'shield'
          || effect.type === 'mana_shield',
        )
        || skill.tags.includes('defense')
      );
    return isDefensiveSupport ? 20 : 0;
  }

  private executeAttack(
    session: CombatSession,
    action: CombatAction,
    actor: CombatantState,
    log: string[],
    results: DamageResult[],
  ): void {
    const target = action.targetId
      ? this.findCombatant(session, action.targetId)
      : this.selectRandomAlive(actor.isPlayer ? session.state.enemyTeam : session.state.playerTeam);

    if (!target || target.isDead) {
      log.push(`${actor.name}的攻擊落空了——目標已倒下。`);
      return;
    }

    const attackerStats = this.getCombatStats(session, actor);
    const targetStats = this.getCombatStats(session, target);
    const targetElement = this.getCombatantElement(session, target.id);
    const penalty = getPveHighLevelCombatPenalty(actor, target);
    attackerStats.hitRate = Math.max(5, attackerStats.hitRate - penalty.hitRatePenalty);

    const attackMode = (action as CombatActionWithAttackMode).attackMode;
    const damageType = this.getBasicAttackDamageType(session, actor.id, attackMode);
    const dmgResult = calculateDamage({
      attackerId: actor.id,
      targetId: target.id,
      damageType,
      element: 'none',
      targetElement,
      multiplier: 1.0 * this.getMonsterPhaseDamageMultiplier(actor) * penalty.damageMultiplier,
      attacker: derivedWithDexLuk(this.applyBasicAttackMode(attackerStats, session, actor.id, attackMode), this.getCombatantDex(session, actor.id), this.getCombatantLuk(session, actor.id)),
      target: derivedWithDexLuk(targetStats, this.getCombatantDex(session, target.id), this.getCombatantLuk(session, target.id)),
    });
    dmgResult.damage = applyOutgoingDamageOriginBonus(actor, dmgResult.damage, null, session.state.round);
    dmgResult.damage = applyIncomingDamageOriginReduction(target, dmgResult.damage, damageType, dmgResult.element);

    results.push(dmgResult);

    // 取得攻擊者的武器 ID（玩家從裝備欄取得，怪物為 null）
    const weaponItemId = this.getEquippedWeaponId(session, actor.id, attackMode);
    const targetHpPercent = this.getHpPercent(target);
    this.applyDamageResult(session, dmgResult, actor, target, log, weaponItemId);

    // 資源系統：戰士系攻擊獲得怒氣
    if (!dmgResult.isMiss && !dmgResult.isDodged) {
      this.triggerAffixEvents(session, actor, 'on_hit', log, {
        targetHpPercent,
        isFirstHit: session.state.round === 1,
      });
      this.gainResourceOnAttack(actor, dmgResult, log);
    }
  }

  private executeSkill(
    session: CombatSession,
    action: CombatAction,
    actor: CombatantState,
    log: string[],
    results: DamageResult[],
  ): void {
    // 查找技能定義
    const baseSkillDef = action.skillId ? SKILL_DEFS[action.skillId] : undefined;
    const skillDef = baseSkillDef ? applySkillUpgradeRule(baseSkillDef, action.skillLevel ?? 1) : null;
    if (skillDef && action.skillId && this.getSkillCooldownRemaining(session.id, actor.id, action.skillId) > 0) {
      const remaining = this.getSkillCooldownRemaining(session.id, actor.id, action.skillId);
      log.push(`${actor.name}的「${skillDef.name}」冷卻中，還需 ${remaining} tick，改為普通攻擊！`);
      this.executeAttack(session, { ...action, type: 'attack' }, actor, log, results);
      return;
    }

    const targets = this.getSkillTargets(session, actor, action, skillDef);
    const primaryTarget = targets[0];

    if (!primaryTarget) {
      log.push(`${actor.name}的技能失去了目標。`);
      return;
    }

    this.consumeTelegraphIfPrepared(actor, action, log);

    // 資源消耗（使用技能定義的 resourceCost）
    const isHealSkill = skillDef?.special?.isHeal || action.skillId === 'heal' || action.skillId === 'mass_heal';
    let resourceCost = skillDef?.resourceCost ?? 5;
    const skillRuntime = skillDef ? getModifiedSkillRuntime(actor.id, skillDef, {
      trigger: isHealSkill ? 'on_heal' : 'on_cast',
      targetHpPercent: primaryTarget.maxHp > 0 ? (primaryTarget.hp / primaryTarget.maxHp) * 100 : 100,
    }) : null;
    if (skillRuntime) resourceCost = skillRuntime.resourceCost;
    // 套裝加成：MP 消耗減免
    if (actor.resourceType === 'mp') {
      const pct = this.getPlayerSetBonusPct(session, actor.id);
      if (pct.mpCostReduction) {
        resourceCost = Math.max(1, Math.floor(resourceCost * (1 - pct.mpCostReduction / 100)));
      }
    }
    const resourceSkillDef = skillDef
      ? this.getContextualSkillResourceDef(session, actor, primaryTarget, skillDef)
      : null;
    if (skillDef && resourceSkillDef) {
      const resourceCheck = checkSkillResource(actor, resourceSkillDef, resourceCost);
      if (!resourceCheck.ok) {
        log.push(`${actor.name}的${resourceCheck.message ?? `${this.getResourceLabel(actor.resourceType)}不足`}，改為普通攻擊！`);
        this.executeAttack(session, { ...action, type: 'attack' }, actor, log, results);
        return;
      }
      resourceCost = resourceCheck.effectiveCost;
    } else if (actor.resource < resourceCost) {
      const resourceLabel = this.getResourceLabel(actor.resourceType);
      log.push(`${actor.name}的${resourceLabel}不足，改為普通攻擊！`);
      this.executeAttack(session, { ...action, type: 'attack' }, actor, log, results);
      return;
    }
    if (skillDef && resourceSkillDef) this.applySkillResourceChangeWithAffixes(actor, resourceSkillDef, resourceCost);
    else actor.resource -= resourceCost;
    if (skillDef && action.skillId) {
      const cooldown = skillRuntime?.cooldown ?? skillDef.cooldown;
      this.startSkillCooldown(session.id, actor.id, action.skillId, cooldown);
    }
    if (skillDef && !isHealSkill) {
      this.triggerAffixEvents(session, actor, 'on_cast', log, {
        targetHpPercent: this.getHpPercent(primaryTarget),
        isFirstHit: session.state.round === 1,
      });
    }

    const attackerStats = this.getCombatStats(session, actor);

    // 使用技能定義的 damageType、element、multiplier
    const damageType = skillDef?.damageType ?? 'magical';
    const element = skillDef?.element ?? 'none';
    const baseMultiplier = (skillDef?.multiplier ?? 1.5) * this.getMonsterPhaseDamageMultiplier(actor);

    // 治癒技能特殊處理
    const skillName = skillDef?.name ?? action.skillId ?? (isHealSkill ? '治癒' : '技能');

    for (const target of targets) {
      if (target.isDead) continue;
      if (skillDef && !this.shouldDamageUndeadWithPurify(session, target, skillDef) && this.applyNonDamageSkillEffect(session, actor, target, skillDef, skillName, log)) {
        continue;
      }
      const outputAffixModifiers = skillDef ? getSkillAffixModifiers(actor.id, skillDef, {
        trigger: isHealSkill ? 'on_heal' : 'on_hit',
        targetHpPercent: target.maxHp > 0 ? (target.hp / target.maxHp) * 100 : 100,
      }) : null;
      const targetBaseMultiplier = skillDef && this.shouldDamageUndeadWithPurify(session, target, skillDef)
        ? 0.7
        : baseMultiplier;
      const markBonus = this.effectEngine.getEffectValue(target.activeEffects, 'mark');
      const specialBonus = skillDef ? this.getSpecialDamageBonusPct(session, actor, target, skillDef) : 0;
      const penalty = getPveHighLevelCombatPenalty(actor, target);
      const effectiveAttackerStats = {
        ...attackerStats,
        hitRate: Math.max(5, attackerStats.hitRate - penalty.hitRatePenalty),
      };
      const multiplier = Math.min(10, targetBaseMultiplier
        * (1 + (outputAffixModifiers?.damageBonusPct ?? 0) / 100)
        * (1 + markBonus / 100)
        * (1 + specialBonus / 100)
        * penalty.damageMultiplier);
      this.interruptTelegraphIfPossible(session, actor, target, skillDef, log);
      this.dispelShieldIfPossible(actor, target, skillDef, log);

      const targetStats = this.getCombatStats(session, target);
      const targetElement = this.getCombatantElement(session, target.id);
      const dmgResult = calculateDamage({
        attackerId: actor.id,
        targetId: target.id,
        damageType,
        element,
        targetElement,
        multiplier,
        attacker: derivedWithDexLuk(this.applySkillAttackSource(effectiveAttackerStats, skillDef), this.getCombatantDex(session, actor.id), this.getCombatantLuk(session, actor.id)),
        target: derivedWithDexLuk(targetStats, this.getCombatantDex(session, target.id), this.getCombatantLuk(session, target.id)),
      });
      dmgResult.damage = applyOutgoingDamageOriginBonus(actor, dmgResult.damage, skillDef, session.state.round);
      dmgResult.damage = applyIncomingDamageOriginReduction(target, dmgResult.damage, damageType, dmgResult.element);

      results.push(dmgResult);

      if (isHealSkill) {
        const healBase = attackerStats.spellPower * multiplier;
        let healAmount = Math.max(1, Math.floor(healBase));
        if (skillDef?.special?.lowHpHealBonus && this.getHpPercent(target) < 40) {
          healAmount = Math.floor(healAmount * 1.25);
        }
        // 套裝加成：治癒力量
        const pct = this.getPlayerSetBonusPct(session, actor.id);
        if (pct.healPower) {
          healAmount = Math.floor(healAmount * (1 + pct.healPower / 100));
        }
        if (outputAffixModifiers?.healingBonusPct) {
          healAmount = Math.floor(healAmount * (1 + outputAffixModifiers.healingBonusPct / 100));
        }
        healAmount = applyHealingReceivedOriginModifier(target, healAmount);
        // heal_reduction：降低受到的治療量 (H-2)
        const healReduction = this.effectEngine.getEffectValue(target.activeEffects, 'heal_reduction');
        if (healReduction > 0) {
          healAmount = Math.max(1, Math.floor(healAmount * (1 - Math.min(healReduction, 100) / 100)));
        }
        const before = target.hp;
        target.hp = Math.min(target.maxHp, target.hp + healAmount);
        const actual = target.hp - before;
        log.push(`${actor.name}使用${skillName}治療${target.name}，實際回復 ${actual} HP，目標生命值由 ${before} 變為 ${target.hp}。`);
        if (actual > 0) {
          // 仇恨值：治療產生 0.5 倍仇恨
          if (actor.isPlayer) {
            actor.threat += Math.floor(actual * 0.5);
          }
          this.triggerAffixEvents(session, actor, 'on_heal', log, {
            targetHpPercent: this.getHpPercent(target),
            isFirstHit: session.state.round === 1,
          });
        }
      } else {
        const targetHpPercent = this.getHpPercent(target);
        if (dmgResult.isMiss) {
          log.push(`${actor.name}使用${skillName}攻擊${target.name}，但本次命中判定失敗，造成 0 點傷害且目標生命值不變。`);
        } else if (dmgResult.isDodged) {
          log.push(`${actor.name}使用${skillName}攻擊${target.name}，但${target.name}成功閃避，造成 0 點傷害且觸發閃避相關效果。`);
          if (target.resourceType === 'focus' && this.effectEngine.getEffectValue(target.activeEffects, 'dodge_up') > 0) {
            this.gainResource(target, 20 + this.getCombatantResourceAffixBonus(target.id, target.isPlayer, 'focusRegen'), log, '因閃避獲得');
          }
          this.triggerAffixEvents(session, target, 'on_dodge', log, {
            targetHpPercent,
            isFirstHit: session.state.round === 1,
          });
        } else {
          const critText = dmgResult.isCrit ? '暴擊！' : '';
          log.push(
            `${actor.name}使用${skillName}命中${target.name}，造成 ${dmgResult.damage} 點傷害${critText ? `，結果為${critText}` : '，結果為普通命中'}。`,
          );
          if (this.effectEngine.getDamageReduction(target.activeEffects) > 0) {
            dmgResult.damage = this.applyBlockAffixEffects(session, target, actor, dmgResult.damage, log, {
              targetHpPercent,
              isFirstHit: session.state.round === 1,
            });
            if (target.resourceType === 'rage') {
              this.gainResource(target, 12 + this.getCombatantResourceAffixBonus(target.id, target.isPlayer, 'rageGain'), log, '因格擋承傷獲得');
            }
          }
          if (actor.isApproaching && this.effectEngine.getDamageReduction(target.activeEffects) > 0) {
            const before = dmgResult.damage;
            dmgResult.damage = Math.max(1, Math.floor(dmgResult.damage * 0.85));
            log.push(`  ${target.name}穩住陣線，抵住逼近攻勢，傷害降低 ${before - dmgResult.damage} 點。`);
          }
          this.applyDamageToTarget(session, target, dmgResult.damage, log, actor);
          this.consumeNextShotDamageBonus(actor, skillDef, log);
          this.triggerMonsterPhases(session, target, log);
          this.applySkillHitResourceEffects(actor, target, skillDef, log);
          this.triggerAffixEvents(session, actor, 'on_hit', log, {
            targetHpPercent,
            isFirstHit: session.state.round === 1,
          });
        }
      }

      if (skillDef?.effects && !dmgResult.isMiss && !dmgResult.isDodged) {
        for (const eff of skillDef.effects) {
          const contextualValue = this.getContextualEffectValue(actor, target, skillDef, eff);
          const msg = this.applyEffectWithBossControl(session, target, {
            ...eff,
            value: contextualValue,
            source: actor.id,
          }, actor.name);
          log.push(`  ${target.name}${msg}`);
        }
      }
    }

  }

  private executeDefend(
    _session: CombatSession,
    _action: CombatAction,
    actor: CombatantState,
    log: string[],
  ): void {
    // 套用傷害減免效果
    this.effectEngine.applyEffect(actor.activeEffects, {
      type: 'damage_reduction',
      value: 50,
      duration: 1,
      source: actor.id,
    });
    log.push(`${actor.name}擺出了防禦姿勢，本回合受到的傷害減半。`);
    if (actor.resourceType === 'rage') {
      this.gainResource(actor, 8 + this.getCombatantResourceAffixBonus(actor.id, actor.isPlayer, 'rageGain'), log, '因防禦獲得');
    }
  }

  private executeFlee(
    session: CombatSession,
    _action: CombatAction,
    actor: CombatantState,
    log: string[],
  ): void {
    // 逃跑機率：30% + (DEX差) * 2%
    const avgEnemyDex = session.state.enemyTeam
      .filter(e => !e.isDead)
      .reduce((sum, e) => sum + this.getCombatantDex(session, e.id), 0) /
      Math.max(1, session.state.enemyTeam.filter(e => !e.isDead).length);

    const playerDex = this.getCombatantDex(session, actor.id);
    const fleeChance = Math.min(80, Math.max(10, 30 + (playerDex - avgEnemyDex) * 2 + getFleeOriginBonus(actor)));

    if (Math.random() * 100 < fleeChance) {
      log.push(`${actor.name}嘗試逃離戰鬥並成功脫身，逃跑判定成功率 ${Math.round(fleeChance)}%，本輪不再承受追擊傷害。`);
      session.state.result = 'fled';
    } else {
      log.push(`${actor.name}嘗試逃離戰鬥但失敗，逃跑判定成功率 ${Math.round(fleeChance)}%，本輪仍會承受敵方追擊。`);
    }
  }

  private executeItem(
    _session: CombatSession,
    _action: CombatAction,
    actor: CombatantState,
    log: string[],
  ): void {
    log.push(`${actor.name}嘗試使用戰鬥道具，但戰鬥中無法使用物品，改為普通攻擊。`);
  }

  private executeMountRide(session: CombatSession, actor: CombatantState, log: string[]): void {
    if (!actor.isPlayer) return;
    const char = session.playerCharacters.get(actor.id);
    if (!char?.activeMountId) {
      log.push(`${actor.name}試圖呼喚坐騎，但沒有可用坐騎。`);
      return;
    }
    if (actor.mounted) {
      log.push(`${actor.name}已經在騎乘狀態。`);
      return;
    }

    actor.activeMountId = char.activeMountId;
    actor.mounted = true;
    actor.mountFatigue = Math.max(0, actor.mountFatigue ?? char.mountFatigue ?? 0);
    char.mounted = true;
    char.mountFatigue = actor.mountFatigue;
    log.push(`${actor.name}呼喚戰馬並翻身上馬。`);
  }

  private executeMountCharge(
    session: CombatSession,
    action: CombatAction,
    actor: CombatantState,
    log: string[],
    results: DamageResult[],
  ): void {
    if (!actor.mounted) {
      log.push(`${actor.name}不在騎乘狀態，無法衝鋒。`);
      return;
    }
    const mountStats = this.getActorMountStats(session, actor);
    if (!mountStats) {
      log.push(`${actor.name}沒有可用坐騎，衝鋒失敗。`);
      return;
    }

    const target = action.targetId
      ? this.findCombatant(session, action.targetId)
      : this.selectRandomAlive(actor.isPlayer ? session.state.enemyTeam : session.state.playerTeam);
    if (!target || target.isDead) {
      log.push(`${actor.name}的騎乘衝鋒沒有命中目標。`);
      this.applyMountFatigue(actor, mountStats, 12, log);
      return;
    }

    const attackerStats = this.getCombatStats(session, actor);
    const targetStats = this.getCombatStats(session, target);
    const targetElement = this.getCombatantElement(session, target.id);
    const penalty = getPveHighLevelCombatPenalty(actor, target);
    attackerStats.hitRate = Math.max(5, attackerStats.hitRate - penalty.hitRatePenalty);
    const weaponItemId = this.getEquippedWeaponId(session, actor.id, 'melee');
    const weaponType = weaponItemId ? ITEM_DEFS[weaponItemId]?.weaponType : undefined;
    const spearBonus = weaponType === 'spear' ? 0.25 : 0;
    const multiplier = (1.0 + mountStats.chargePower / 100 + spearBonus)
      * this.getMonsterPhaseDamageMultiplier(actor)
      * penalty.damageMultiplier;
    const dmgResult = calculateDamage({
      attackerId: actor.id,
      targetId: target.id,
      damageType: 'physical',
      element: 'none',
      targetElement,
      multiplier,
      attacker: derivedWithDexLuk(this.applyBasicAttackMode(attackerStats, session, actor.id, 'melee'), this.getCombatantDex(session, actor.id), this.getCombatantLuk(session, actor.id)),
      target: derivedWithDexLuk(targetStats, this.getCombatantDex(session, target.id), this.getCombatantLuk(session, target.id)),
    });
    dmgResult.damage = applyOutgoingDamageOriginBonus(actor, dmgResult.damage, null, session.state.round);
    dmgResult.damage = applyIncomingDamageOriginReduction(target, dmgResult.damage, 'physical', dmgResult.element);
    results.push(dmgResult);
    log.push(`${actor.name}策馬向${target.name}發動衝鋒！`);
    this.applyDamageResult(session, dmgResult, actor, target, log, weaponItemId);
    if (!target.isDead) {
      this.effectEngine.applyEffect(target.activeEffects, {
        type: 'taunt',
        value: 50 + mountStats.threatBonus,
        duration: 1,
        source: actor.id,
      });
      log.push(`  ${target.name}的注意力被${actor.name}的衝鋒吸引。`);
    }
    this.applyMountFatigue(actor, mountStats, 12, log);
  }

  private executeMountedGuard(session: CombatSession, action: CombatAction, actor: CombatantState, log: string[]): void {
    if (!actor.mounted) {
      log.push(`${actor.name}不在騎乘狀態，無法騎乘守護。`);
      return;
    }
    const mountStats = this.getActorMountStats(session, actor);
    if (!mountStats) {
      log.push(`${actor.name}沒有可用坐騎，守護失敗。`);
      return;
    }
    const allies = actor.isPlayer ? session.state.playerTeam : session.state.enemyTeam;
    const target = action.targetId ? allies.find(ally => ally.id === action.targetId && !ally.isDead) : actor;
    const guarded = target ?? actor;
    const reduction = Math.min(75, 25 + mountStats.guardPower);
    this.effectEngine.applyEffect(guarded.activeEffects, {
      type: 'damage_reduction',
      value: reduction,
      duration: 1,
      source: actor.id,
    });
    log.push(`${actor.name}策馬護住${guarded.name}，本回合降低 ${reduction}% 傷害。`);
    this.applyMountFatigue(actor, mountStats, 8, log);
  }

  private getActorMountStats(session: CombatSession, actor: CombatantState): ReturnType<typeof deriveMountStats> {
    const char = session.playerCharacters.get(actor.id);
    const mount = getMountDef(actor.activeMountId ?? char?.activeMountId);
    const saddleId = char?.equipment.saddle ?? null;
    return deriveMountStats(mount, saddleId ? ITEM_DEFS[saddleId] : undefined);
  }

  private applyMountFatigue(
    actor: CombatantState,
    mountStats: NonNullable<ReturnType<typeof deriveMountStats>>,
    cost: number,
    log: string[],
  ): void {
    actor.mountFatigue = Math.max(0, (actor.mountFatigue ?? 0) + cost);
    if (actor.mountFatigue >= mountStats.fatigueMax) {
      actor.mounted = false;
      log.push(`${actor.name}的坐騎疲勞達到上限，被迫解除騎乘。`);
    }
  }

  private processMountFatigueRecovery(session: CombatSession, log: string[]): void {
    for (const actor of session.state.playerTeam) {
      const mountStats = this.getActorMountStats(session, actor);
      if (!mountStats || (actor.mountFatigue ?? 0) <= 0) continue;
      const before = actor.mountFatigue ?? 0;
      actor.mountFatigue = Math.max(0, before - mountStats.fatigueRecovery);
      if (actor.mountFatigue !== before && actor.mounted) {
        log.push(`${actor.name}的坐騎疲勞恢復 ${before - actor.mountFatigue}。`);
      }
    }
  }

  // ──────────────────────────────────────────────────────────
  //  傷害套用
  // ──────────────────────────────────────────────────────────

  private applyDamageResult(
    session: CombatSession,
    result: DamageResult,
    actor: CombatantState,
    target: CombatantState,
    log: string[],
    weaponItemId: string | null = null,
  ): void {
    if (result.isMiss) {
      const desc = getAttackDescription(actor.name, target.name, weaponItemId, 'miss');
      log.push(desc);
      return;
    }
    if (result.isDodged) {
      // 閃避仍使用 miss 描述（武器揮空的情境）
      const desc = getAttackDescription(actor.name, target.name, weaponItemId, 'miss');
      log.push(`${desc}（被閃避）`);
      if (target.resourceType === 'focus' && this.effectEngine.getEffectValue(target.activeEffects, 'dodge_up') > 0) {
        this.gainResource(target, 20 + this.getCombatantResourceAffixBonus(target.id, target.isPlayer, 'focusRegen'), log, '因閃避獲得');
      }
      this.triggerAffixEvents(session, target, 'on_dodge', log, {
        targetHpPercent: this.getHpPercent(target),
        isFirstHit: session.state.round === 1,
      });
      return;
    }

    // 先計算目標是否會被擊殺（預判）
    const willKill = this.willDamageKill(session, target, result.damage);

    // 選擇攻擊結果類型
    let resultType: AttackResultType = 'normal';
    if (willKill) {
      resultType = 'kill';
    } else if (result.isCrit) {
      resultType = 'critical';
    }

    const desc = getAttackDescription(actor.name, target.name, weaponItemId, resultType);

    // 附加傷害數值與屬性資訊
    let elemText = '';
    if (result.elementBonus > 0) {
      elemText = '（屬性剋制！）';
    } else if (result.elementBonus < 0) {
      elemText = '（屬性抵抗）';
    }

    log.push(`${desc}命中${target.name}，造成 ${result.damage} 點傷害${elemText ? `，${elemText}` : '，目標生命值將依防禦與狀態效果扣減'}。`);

    if (this.effectEngine.getDamageReduction(target.activeEffects) > 0) {
      result.damage = this.applyBlockAffixEffects(session, target, actor, result.damage, log, {
        targetHpPercent: this.getHpPercent(target),
        isFirstHit: session.state.round === 1,
      });
      if (target.resourceType === 'rage') {
        this.gainResource(target, 12 + this.getCombatantResourceAffixBonus(target.id, target.isPlayer, 'rageGain'), log, '因格擋承傷獲得');
      }
    }

    this.applyDamageToTarget(session, target, result.damage, log, actor);
    this.triggerMonsterPhases(session, target, log);

    // 資源系統：戰士系被擊中獲得怒氣
    this.gainResourceOnHit(target, log);

    // 套用附帶效果
    for (const eff of result.effects) {
      const msg = this.applyEffectWithBossControl(session, target, eff, actor.name);
      log.push(`  ${target.name}${msg}`);
    }
  }

  private applyDamageToTarget(
    session: CombatSession,
    target: CombatantState,
    rawDamage: number,
    log: string[],
    actor?: CombatantState,
  ): number {
    let damage = rawDamage;

    // 無敵判定
    if (this.effectEngine.isInvincible(target.activeEffects)) {
      log.push(`  ${target.name}處於無敵狀態，免疫了所有傷害！`);
      return 0;
    }

    // 傷害減免
    const reduction = this.effectEngine.getDamageReduction(target.activeEffects);
    if (reduction > 0) {
      damage = Math.max(1, Math.floor(damage * (1 - reduction / 100)));
    }

    const manaShieldPct = this.effectEngine.getEffectValue(target.activeEffects, 'mana_shield');
    if (manaShieldPct > 0 && target.resourceType === 'mp' && target.resource > 0) {
      const intendedRedirect = Math.floor(damage * Math.min(80, manaShieldPct) / 100);
      const redirected = Math.min(target.resource, intendedRedirect);
      if (redirected > 0) {
        target.resource = Math.max(0, target.resource - redirected);
        target.mp = Math.max(0, target.mp - redirected);
        damage = Math.max(1, damage - redirected);
        log.push(`  ${target.name}的魔力護盾消耗 ${redirected} MP 抵銷傷害。`);
      }
    }

    // 護盾吸收
    const hadShield = target.activeEffects.some(effect => effect.type === 'shield');
    const shieldResult = this.effectEngine.absorbWithShield(target.activeEffects, damage);
    if (shieldResult.absorbedDamage > 0) {
      log.push(`  ${target.name}的護盾吸收了 ${shieldResult.absorbedDamage} 點傷害。`);
    }
    if (hadShield && shieldResult.absorbedDamage > 0 && !target.activeEffects.some(effect => effect.type === 'shield')
      && !session.shieldBreakHealUsed.has(target.id)) {
      session.shieldBreakHealUsed.add(target.id);
      const heal = Math.max(1, Math.floor(target.maxHp * 0.08));
      const before = target.hp;
      target.hp = Math.min(target.maxHp, target.hp + heal);
      const actual = target.hp - before;
      if (actual > 0) log.push(`  ${target.name}的護盾破裂，回復 ${actual} HP。`);
    }
    damage = shieldResult.remainingDamage;

    // 扣血
    target.hp = Math.max(0, target.hp - damage);
    const monsterInstance = session.monsterInstances.get(target.id);
    if (monsterInstance) {
      monsterInstance.hp = target.hp;
    }

    // 仇恨值：用實際傷害累積（S-2）
    if (actor && actor.isPlayer && !target.isPlayer && damage > 0) {
      actor.threat += damage;
    }

    // unyielding：瀕死時保留一絲生機 (H-2)
    if (target.hp <= 0) {
      const unyieldingVal = this.effectEngine.getEffectValue(target.activeEffects, 'unyielding');
      if (unyieldingVal > 0) {
        target.hp = 1;
        if (monsterInstance) monsterInstance.hp = 1;
        this.effectEngine.removeEffect(target.activeEffects, 'unyielding');
        log.push(`  ${target.name}的不屈意志發動，以 1 HP 存活！`);
        return damage;
      }
    }

    if (target.hp <= 0) {
      target.isDead = true;
      if (monsterInstance) monsterInstance.isDead = true;
      log.push(`  ${target.name}倒下了！`);
      // 統一擊殺歸屬 on_kill（S-3）
      if (actor) {
        this.triggerAffixEvents(session, actor, 'on_kill', log, {
          targetHpPercent: 0,
          isFirstHit: session.state.round === 1,
        });
      }
    }

    // thorns：受到近戰傷害時反射傷害給攻擊者 (H-2)
    if (actor && !target.isDead && damage > 0) {
      const thornsPct = this.effectEngine.getEffectValue(target.activeEffects, 'thorns');
      if (thornsPct > 0) {
        const thornsDmg = Math.max(1, Math.floor(damage * thornsPct / 100));
        actor.hp = Math.max(0, actor.hp - thornsDmg);
        log.push(`  ${target.name}的荊棘反射了 ${thornsDmg} 點傷害給${actor.name}。`);
        const actorMonster = session.monsterInstances.get(actor.id);
        if (actorMonster) actorMonster.hp = actor.hp;
        if (actor.hp <= 0) {
          actor.isDead = true;
          if (actorMonster) actorMonster.isDead = true;
          log.push(`  ${actor.name}被荊棘反射擊倒了！`);
        }
      }
    }

    return damage;
  }

  // ──────────────────────────────────────────────────────────
  //  狀態效果 tick
  // ──────────────────────────────────────────────────────────

  private processEffectTicks(session: CombatSession, log: string[]): void {
    const allCombatants = [
      ...session.state.playerTeam,
      ...session.state.enemyTeam,
    ];

    for (const c of allCombatants) {
      if (c.isDead) continue;
      if (c.activeEffects.length === 0) continue;

      const result = this.effectEngine.tickEffects(c.activeEffects, c.name);

      // DoT 傷害 — 走 applyDamageToTarget 尊重無敵/護盾/減傷/仇恨/on_kill (H-1)
      if (result.damage > 0) {
        const dotSource = this.findDotSource(session, c);
        this.applyDamageToTarget(session, c, result.damage, log, dotSource);
      }

      // HoT 回血
      if (result.healing > 0) {
        c.hp = Math.min(c.maxHp, c.hp + applyHealingReceivedOriginModifier(c, result.healing));
      }

      // MP 回復
      if (result.mpRestored > 0) {
        c.mp = Math.min(c.maxMp, c.mp + result.mpRestored);
        if (c.resourceType === 'mp') {
          c.resource = Math.min(c.maxResource, c.resource + result.mpRestored);
        }
      }

      log.push(...result.messages);
    }
  }

  private findDotSource(session: CombatSession, target: CombatantState): CombatantState | undefined {
    const dotEffect = target.activeEffects.find(e => (e.type === 'poison' || e.type === 'burn' || e.type === 'bleed') && e.source);
    if (!dotEffect?.source) return undefined;
    return this.findCombatant(session, dotEffect.source);
  }

  // ──────────────────────────────────────────────────────────
  //  怪物 AI
  // ──────────────────────────────────────────────────────────

  private generateMonsterActions(session: CombatSession): void {
    for (const enemy of session.state.enemyTeam) {
      if (enemy.isDead) continue;
      if (session.state.pendingActions.has(enemy.id)) continue;

      const instance = session.monsterInstances.get(enemy.id);
      if (!instance) continue;

      const target = this.selectMonsterTarget(session, instance, enemy);

      const action: CombatAction = {
        actorId: enemy.id,
        type: 'attack',
        targetId: target?.id,
      };

      if (enemy.pendingTelegraph) {
        action.type = 'skill';
        action.skillId = enemy.pendingTelegraph.skillId;
        action.targetId = this.selectTargetForSkill(session, enemy, action.skillId)?.id;
        session.state.pendingActions.set(enemy.id, action);
        continue;
      }

      // Boss 和 aggressive 怪物偶爾使用技能
      if (
        instance.def.aiType === 'boss' ||
        instance.def.aiType === 'aggressive'
      ) {
        if (instance.def.skills.length > 1 && Math.random() > 0.5) {
          action.type = 'skill';
          // 隨機選一個技能（排除 basic_attack）
          const nonBasic = instance.def.skills.filter(s => s !== 'basic_attack');
          if (nonBasic.length > 0) {
            action.skillId = nonBasic[Math.floor(Math.random() * nonBasic.length)];
            action.targetId = this.selectTargetForSkill(session, enemy, action.skillId)?.id;
          }
        }
      }

      const preferredSkillId = this.getPreferredPhaseSkill(enemy, instance.def);
      if (preferredSkillId) {
        action.type = 'skill';
        action.skillId = preferredSkillId;
        action.targetId = this.selectTargetForSkill(session, enemy, preferredSkillId)?.id;
      }

      // Healer 型 AI：隊友 HP 低時優先治療
      if (instance.def.aiType === 'healer') {
        const injuredAlly = session.state.enemyTeam.find(
          e => !e.isDead && e.hp < e.maxHp * 0.5 && e.id !== enemy.id,
        );
        if (injuredAlly) {
          action.type = 'skill';
          action.targetId = injuredAlly.id;
          action.skillId = 'heal'; // 簡化
        }
      }

      // Defensive 型 AI：HP 低時防禦
      if (instance.def.aiType === 'defensive' && enemy.hp < enemy.maxHp * 0.3) {
        action.type = 'defend';
      }

      session.state.pendingActions.set(enemy.id, action);
    }
  }

  private selectMonsterTarget(
    session: CombatSession,
    _instance: MonsterInstance,
    enemy: CombatantState,
  ): CombatantState | undefined {
    const alivePlayers = session.state.playerTeam.filter(p => !p.isDead);
    if (alivePlayers.length === 0) return undefined;

    // 1. 挑釁效果最優先
    const taunt = enemy.activeEffects.find(effect => effect.type === 'taunt' && effect.source);
    const tauntTarget = taunt
      ? alivePlayers.find(player => player.id === taunt.source)
      : undefined;
    if (tauntTarget) return tauntTarget;

    // 2. 前後排篩選：近戰怪物只能打前排（前排全滅時打後排）
    const isMeleeMonster = !enemy.monsterBehavior || enemy.monsterBehavior === 'basic' || enemy.monsterBehavior === 'ambusher' || enemy.monsterBehavior === 'guardian';
    const frontRow = alivePlayers.filter(p => p.formation === 'front');
    const candidates = isMeleeMonster && frontRow.length > 0 ? frontRow : alivePlayers;

    // 3. 仇恨值目標選擇：70% 機率打最高仇恨、30% 隨機（避免完全可預測）
    const maxThreat = Math.max(...candidates.map(p => p.threat));
    if (maxThreat > 0 && Math.random() < 0.7) {
      const highThreatPlayers = candidates.filter(p => p.threat === maxThreat);
      return highThreatPlayers[Math.floor(Math.random() * highThreatPlayers.length)];
    }

    return candidates[Math.floor(Math.random() * candidates.length)];
  }

  private selectTargetForSkill(
    session: CombatSession,
    actor: CombatantState,
    skillId: string | undefined,
  ): CombatantState | undefined {
    const skillDef = skillId ? SKILL_DEFS[skillId] : undefined;
    if (!skillDef) {
      return this.selectRandomAlive(actor.isPlayer ? session.state.enemyTeam : session.state.playerTeam);
    }

    if (skillDef.targetType === 'self') return actor;
    if (skillDef.targetType === 'single_ally') {
      const allies = actor.isPlayer ? session.state.playerTeam : session.state.enemyTeam;
      return this.selectRandomAlive(allies);
    }
    if (skillDef.targetType === 'all_allies') return actor;

    // 怪物 offensive 技能走 selectMonsterTarget 尊重嘲諷/前後排/仇恨 (H-4, H-5)
    if (!actor.isPlayer) {
      const instance = session.monsterInstances.get(actor.id);
      if (instance) {
        return this.selectMonsterTarget(session, instance, actor);
      }
    }

    return this.selectRandomAlive(actor.isPlayer ? session.state.enemyTeam : session.state.playerTeam);
  }

  private getSkillTargets(
    session: CombatSession,
    actor: CombatantState,
    action: CombatAction,
    skillDef: SkillDef | null,
  ): CombatantState[] {
    const enemies = actor.isPlayer ? session.state.enemyTeam : session.state.playerTeam;
    const allies = actor.isPlayer ? session.state.playerTeam : session.state.enemyTeam;
    const targetType = skillDef?.targetType ?? 'single_enemy';

    if (targetType === 'self') return [actor].filter(c => !c.isDead);
    if (targetType === 'all_enemies') return enemies.filter(c => !c.isDead);
    if (targetType === 'all_allies') return allies.filter(c => !c.isDead);

    if (targetType === 'single_ally') {
      if (skillDef?.special?.undeadDamage && action.targetId) {
        const enemyTarget = enemies.find(enemy => enemy.id === action.targetId && !enemy.isDead);
        if (enemyTarget && this.isUndeadCombatant(session, enemyTarget)) return [enemyTarget];
      }
      const target = action.targetId ? this.findCombatant(session, action.targetId) : this.selectRandomAlive(allies);
      return target && !target.isDead ? [target] : [];
    }

    const target = action.targetId ? this.findCombatant(session, action.targetId) : this.selectRandomAlive(enemies);
    return target && !target.isDead ? [target] : [];
  }

  private getMonsterBehaviorType(def: MonsterDef): MonsterBehaviorType {
    if (def.behaviorType) return def.behaviorType;
    if (def.isBoss || def.aiType === 'boss') return 'phase_boss';
    if (def.aiType === 'defensive') return 'guardian';
    if (def.aiType === 'healer') return 'caster';
    if (def.skills.some(skillId => {
      const skill = SKILL_DEFS[skillId];
      return skill?.damageType === 'magical' || skill?.effects?.some(e => e.type === 'silence' || e.type === 'freeze');
    })) {
      return 'caster';
    }
    if (def.aiType === 'aggressive') return 'ambusher';
    return 'basic';
  }

  private getMonsterPhaseRules(def: MonsterDef): MonsterPhaseRule[] {
    if (def.phaseRules?.length) return def.phaseRules;
    return def.isBoss || def.aiType === 'boss' ? DEFAULT_BOSS_PHASES : [];
  }

  private getMonsterTelegraphActions(def: MonsterDef): MonsterTelegraphAction[] {
    if (def.telegraphActions?.length) return def.telegraphActions;
    if (def.isBoss || def.aiType === 'boss') {
      const nonBasic = def.skills.filter(skillId => skillId !== 'basic_attack');
      const skillId = nonBasic[0] ?? 'basic_attack';
      return DEFAULT_BOSS_TELEGRAPHS.map(action => ({ ...action, skillId }));
    }
    const heavySkill = def.skills.find(skillId => {
      const skill = SKILL_DEFS[skillId];
      return skill && skill.multiplier >= 1.5;
    });
    return heavySkill
      ? [{
        id: `${def.id}_${heavySkill}_telegraph`,
        skillId: heavySkill,
        message: '正在瞄準強力攻擊，可用打斷技能阻止。',
        executeMessage: '完成瞄準並發動強力攻擊！',
        minRound: 2,
        cooldownRounds: 4,
      }]
      : [];
  }

  private prepareMonsterTelegraphs(session: CombatSession, log: string[]): void {
    for (const enemy of session.state.enemyTeam) {
      if (enemy.isDead || enemy.pendingTelegraph || this.isWaitingToArrive(enemy)) continue;
      const instance = session.monsterInstances.get(enemy.id);
      if (!instance) continue;

      const telegraph = this.getMonsterTelegraphActions(instance.def).find(action => {
        const minRound = action.minRound ?? 1;
        const cooldown = action.cooldownRounds ?? 3;
        if (session.state.round < minRound) return false;
        if (action.hpBelowPercent !== undefined && enemy.hp > enemy.maxHp * (action.hpBelowPercent / 100)) {
          return false;
        }
        return (session.state.round - minRound) % cooldown === 0;
      });

      if (!telegraph) continue;
      enemy.pendingTelegraph = {
        id: telegraph.id,
        skillId: telegraph.skillId,
        message: telegraph.message,
        executeMessage: telegraph.executeMessage,
        preparedRound: session.state.round,
      };
      log.push(`【預兆】${enemy.name}${telegraph.message} 防禦`);
    }
  }

  private consumeTelegraphIfPrepared(
    actor: CombatantState,
    action: CombatAction,
    log: string[],
  ): void {
    if (!actor.pendingTelegraph || action.skillId !== actor.pendingTelegraph.skillId) return;
    if (actor.pendingTelegraph.executeMessage) {
      log.push(`${actor.name}${actor.pendingTelegraph.executeMessage}`);
    }
    actor.pendingTelegraph = undefined;
  }

  private interruptTelegraphIfPossible(
    session: CombatSession,
    actor: CombatantState,
    target: CombatantState,
    skillDef: SkillDef | null,
    log: string[],
  ): void {
    if (!target.pendingTelegraph) return;
    const hasControlEffect = skillDef?.effects?.some(e =>
      e.type === 'stun' || e.type === 'freeze' || e.type === 'silence' || e.type === 'fear',
    ) ?? false;
    if (!skillDef?.special?.interrupt && !hasControlEffect) return;

    const interrupted = target.pendingTelegraph;
    target.pendingTelegraph = undefined;
    this.applyEffectWithBossControl(session, target, {
      type: 'stun',
      value: 1,
      duration: 1,
      source: actor.id,
    }, actor.name);
    log.push(`${actor.name}打斷了${target.name}的${interrupted.id}！`);
  }

  private dispelShieldIfPossible(
    actor: CombatantState,
    target: CombatantState,
    skillDef: SkillDef | null,
    log: string[],
  ): void {
    if (!skillDef?.special?.dispelShield) return;
    let removedValue = 0;
    const remaining: ActiveStatusEffect[] = [];
    for (const effect of target.activeEffects) {
      if (effect.type === 'shield' || effect.type === 'mana_shield') {
        removedValue += effect.value;
      } else {
        remaining.push(effect);
      }
    }
    if (removedValue <= 0) return;
    target.activeEffects = remaining;
    log.push(`${actor.name}粉碎了${target.name}價值 ${removedValue} 點的護盾！`);
  }

  private getContextualSkillResourceDef(
    session: CombatSession,
    _actor: CombatantState,
    target: CombatantState,
    skillDef: SkillDef,
  ): SkillDef {
    if (!this.shouldDamageUndeadWithPurify(session, target, skillDef)) return skillDef;
    const undeadFaithDelta = this.getNumericSpecial(skillDef, 'undeadFaithDelta');
    if (undeadFaithDelta === undefined) return skillDef;
    return {
      ...skillDef,
      special: {
        ...skillDef.special,
        faithDelta: undeadFaithDelta,
        faithMin: Math.abs(Math.min(0, undeadFaithDelta)),
        faithMax: undefined,
      },
    };
  }

  private getSpecialDamageBonusPct(
    session: CombatSession,
    actor: CombatantState,
    target: CombatantState,
    skillDef: SkillDef,
  ): number {
    let bonusPct = 0;
    if (skillDef.special?.bonusAgainstTaunted && this.effectEngine.hasEffect(target.activeEffects, 'taunt')) {
      bonusPct += 25;
    }

    if (skillDef.special?.undeadMultiplier && this.isUndeadCombatant(session, target)) {
      bonusPct += (Number(skillDef.special.undeadMultiplier) - 1) * 100;
    }
    if (skillDef.special?.darkMultiplier && this.getCombatantElement(session, target.id) === 'dark') {
      bonusPct += (Number(skillDef.special.darkMultiplier) - 1) * 100;
    }
    if (skillDef.special?.undeadOnlyBonus && this.isUndeadCombatant(session, target)) {
      bonusPct += 35;
    }
    if (this.shouldDamageUndeadWithPurify(session, target, skillDef)) {
      bonusPct += 100;
    }

    const nextShot = actor.activeEffects.find(effect => effect.type === 'next_shot_damage');
    if (nextShot && skillDef.damageType === 'physical' && skillDef.tags.includes('cross_room')) {
      bonusPct += nextShot.value;
    }
    return bonusPct;
  }

  private getContextualEffectValue(
    actor: CombatantState,
    target: CombatantState,
    skillDef: SkillDef,
    effect: StatusEffect,
  ): number {
    if (
      skillDef.special?.allyDamageReduction
      && effect.type === 'damage_reduction'
      && target.id !== actor.id
    ) {
      return this.getNumericSpecial(skillDef, 'allyDamageReduction') ?? effect.value;
    }
    if (
      skillDef.special?.exitAccuracyDown
      && effect.type === 'atk_down'
      && target.isApproaching
    ) {
      return this.getNumericSpecial(skillDef, 'exitAccuracyDown') ?? effect.value;
    }
    return effect.value;
  }

  private consumeNextShotDamageBonus(actor: CombatantState, skillDef: SkillDef | null, log: string[]): void {
    if (!skillDef || skillDef.damageType !== 'physical' || !skillDef.tags.includes('cross_room')) return;
    const index = actor.activeEffects.findIndex(effect => effect.type === 'next_shot_damage');
    if (index < 0) return;
    const [effect] = actor.activeEffects.splice(index, 1);
    log.push(`  ${actor.name}消耗蓄勢射擊，這次射擊傷害 +${effect.value}%。`);
  }

  private shouldDamageUndeadWithPurify(session: CombatSession, target: CombatantState, skillDef: SkillDef): boolean {
    return Boolean(skillDef.special?.undeadDamage && !target.isPlayer && this.isUndeadCombatant(session, target));
  }

  private isUndeadCombatant(session: CombatSession, target: CombatantState): boolean {
    if (target.isPlayer) return false;
    const instance = session.monsterInstances.get(target.id);
    const def = instance?.def;
    const text = `${def?.id ?? ''} ${def?.alias ?? ''} ${def?.name ?? target.name}`.toLowerCase();
    return ['undead', 'skeleton', 'zombie', 'ghoul', 'wraith', 'bone', '骷髏', '殭屍', '亡靈', '不死'].some(token => text.includes(token));
  }

  private triggerMonsterPhases(
    session: CombatSession,
    target: CombatantState,
    log: string[],
  ): void {
    if (target.isPlayer || target.isDead || !target.monsterPhases?.length) return;
    const currentPhase = target.currentMonsterPhase ?? 1;
    const nextPhases = target.monsterPhases
      .filter(rule => rule.phase > currentPhase && target.hp <= target.maxHp * (rule.hpThresholdPercent / 100))
      .sort((a, b) => a.phase - b.phase);

    for (const rule of nextPhases) {
      target.currentMonsterPhase = rule.phase;
      log.push(`【階段轉換】${target.name}${rule.message}`);
      if (rule.applyEffect) {
        const msg = this.effectEngine.applyEffect(target.activeEffects, {
          ...rule.applyEffect,
          source: target.id,
        }, target.name);
        log.push(`  ${target.name}${msg}`);
      }
    }

    if (nextPhases.length > 0) {
      this.prepareMonsterTelegraphs(session, log);
    }
  }

  private getMonsterPhaseDamageMultiplier(actor: CombatantState): number {
    if (actor.isPlayer || !actor.monsterPhases?.length) return 1;
    const currentPhase = actor.currentMonsterPhase ?? 1;
    const phase = actor.monsterPhases.find(rule => rule.phase === currentPhase);
    return phase?.damageMultiplier ?? 1;
  }

  private getPreferredPhaseSkill(actor: CombatantState, def: MonsterDef): string | undefined {
    if (actor.isPlayer || !actor.monsterPhases?.length) return undefined;
    const currentPhase = actor.currentMonsterPhase ?? 1;
    const phase = actor.monsterPhases.find(rule => rule.phase === currentPhase);
    if (!phase?.preferSkillId || !def.skills.includes(phase.preferSkillId)) return undefined;
    return phase.preferSkillId;
  }

  // ──────────────────────────────────────────────────────────
  //  戰鬥結束判定
  // ──────────────────────────────────────────────────────────

  private checkBattleEnd(session: CombatSession): boolean {
    if (session.state.result === 'fled') return true;

    const allPlayersDead = session.state.playerTeam.every(p => p.isDead);
    const allEnemiesDead = session.state.enemyTeam.every(e => e.isDead);

    if (allPlayersDead) {
      session.state.result = 'defeat';
      return true;
    }
    if (allEnemiesDead) {
      session.state.result = 'victory';
      return true;
    }
    return false;
  }

  private endCombat(session: CombatSession): void {
    this.clearTurnTimer(session);
    session.state.phase = 'end';

    const resultText: Record<CombatResult, string> = {
      victory: '【勝利】恭喜！你們擊敗了所有敵人！',
      defeat: '【戰敗】你們被擊敗了……',
      fled: '【逃離】你們成功逃離了戰鬥。',
      ongoing: '',
    };

    session.state.actionLog.push(resultText[session.state.result]);

    // 同步 HP/MP 回角色和怪物實例
    this.syncBackToEntities(session);

    // 觸發結束回呼
    if (session.onEnd) {
      session.onEnd(session.state.result, session.state.loot);
    }

    // 廣播結束
    const playerIds = Array.from(session.playerCharacters.keys());
    if (this.broadcastFn) {
      this.broadcastFn(session.id, playerIds, {
        type: 'combat_end',
        payload: {
          result: session.state.result,
          loot: session.state.loot,
          log: session.state.actionLog.slice(-10), // 最後 10 條
        },
        timestamp: Date.now(),
      });
    }

    // 清除映射
    for (const playerId of session.playerCharacters.keys()) {
      this.playerCombatMap.delete(playerId);
    }
    this.sessions.delete(session.id);
  }

  /** 同步戰鬥結果回原始角色/怪物 */
  private syncBackToEntities(session: CombatSession): void {
    // 同步玩家 HP/MP/Resource
    for (const pc of session.state.playerTeam) {
      const char = session.playerCharacters.get(pc.id);
      if (char) {
        char.hp = pc.hp;
        char.mp = pc.mp;
        char.resource = pc.resource;
        char.activeMountId = pc.activeMountId ?? char.activeMountId ?? null;
        char.mounted = pc.mounted ?? false;
        char.mountFatigue = Math.max(0, pc.mountFatigue ?? char.mountFatigue ?? 0);
        char.mountCooldownUntil = pc.mountCooldownUntil;

        // 戰鬥結束：戰士系怒氣歸零
        if (char.resourceType === 'rage') {
          char.resource = 0;
        }
      }
    }

    // 同步怪物 HP（死亡的怪物交由 WorldManager 處理 respawn）
    for (const ec of session.state.enemyTeam) {
      const instance = session.monsterInstances.get(ec.id);
      if (instance) {
        instance.hp = ec.hp;
        if (ec.isDead) {
          instance.isDead = true;
          instance.hp = 0;
        }
      }
    }
  }

  // ──────────────────────────────────────────────────────────
  //  廣播
  // ──────────────────────────────────────────────────────────

  private broadcastRoundResult(
    session: CombatSession,
    log: string[],
    _results: DamageResult[],
  ): void {
    const playerIds = Array.from(session.playerCharacters.keys());
    if (!this.broadcastFn) return;
    const logEntities = log.map(line => this.buildCombatInlineActions(line));

    this.broadcastFn(session.id, playerIds, {
      type: 'combat_action',
      payload: {
        round: session.state.round,
        actions: [],
        log,
        logEntities,
        playerTeam: session.state.playerTeam,
        enemyTeam: session.state.enemyTeam,
        preferredAttackModes: Object.fromEntries(session.preferredAttackModes),
      },
      timestamp: Date.now(),
    });
  }

  private broadcastCombatStart(session: CombatSession): void {
    const playerIds = Array.from(session.playerCharacters.keys());
    if (!this.broadcastFn) return;

    this.broadcastFn(session.id, playerIds, {
      type: 'combat_start',
      payload: {
        combatId: session.id,
        round: session.state.round,
        playerTeam: session.state.playerTeam,
        enemyTeam: session.state.enemyTeam,
        turnTimer: session.state.turnTimer,
        preferredAttackModes: Object.fromEntries(session.preferredAttackModes),
      },
      timestamp: Date.now(),
    });
  }

  private buildCombatInlineActions(line: string): InlineEntityPayload[] {
    if (!line.includes('【預兆】') || !line.includes('防禦')) return [];
    return [{
      name: '防禦',
      entityType: 'action',
      cmdName: '防禦',
      actionCommand: 'defend',
    }];
  }

  // ──────────────────────────────────────────────────────────
  //  資源系統
  // ──────────────────────────────────────────────────────────

  /** 攻擊命中時的資源增益（戰士系：怒氣 +10，暴擊 +15） */
  private gainResourceOnAttack(actor: CombatantState, dmgResult: DamageResult, log: string[]): void {
    if (actor.resourceType === 'rage') {
      const gain = (dmgResult.isCrit ? 15 : 10) + this.getCombatantResourceAffixBonus(actor.id, actor.isPlayer, 'rageGain');
      const before = actor.resource;
      actor.resource = Math.min(actor.maxResource, actor.resource + gain);
      const actual = actor.resource - before;
      if (actual > 0) {
        log.push(`  ${actor.name}獲得了 ${actual} 點怒氣。`);
      }
    }
  }

  /** 被擊中時的資源增益（戰士系：怒氣 +5） */
  private gainResourceOnHit(target: CombatantState, log: string[]): void {
    if (target.resourceType === 'rage' && !target.isDead) {
      const before = target.resource;
      target.resource = Math.min(target.maxResource, target.resource + 5 + this.getCombatantResourceAffixBonus(target.id, target.isPlayer, 'rageGain'));
      const actual = target.resource - before;
      if (actual > 0) {
        log.push(`  ${target.name}因受擊獲得了 ${actual} 點怒氣。`);
      }
    }
  }

  /** 每回合資源回復（遊俠系：專注 +15） */
  private processResourceRegen(session: CombatSession, log: string[]): void {
    const allCombatants = [
      ...session.state.playerTeam,
      ...session.state.enemyTeam,
    ];

    for (const c of allCombatants) {
      if (c.isDead) continue;

      // 遊俠系：每回合專注 +15
      if (c.resourceType === 'focus') {
        const before = c.resource;
        c.resource = Math.min(c.maxResource, c.resource + 15 + this.getCombatantResourceAffixBonus(c.id, c.isPlayer, 'focusRegen'));
        const actual = c.resource - before;
        if (actual > 0) {
          log.push(`${c.name}恢復了 ${actual} 點專注。`);
        }
      }

      // 祭司系：套裝加成 faithRegen（每回合額外回復信仰）
      if (c.resourceType === 'faith' && c.isPlayer) {
        const pct = this.getPlayerSetBonusPct(session, c.id);
        if (pct.faithRegen && pct.faithRegen > 0) {
          const before = c.resource;
          c.resource = Math.min(c.maxResource, c.resource + pct.faithRegen);
          const actual = c.resource - before;
          if (actual > 0) {
            log.push(`${c.name}因套裝效果恢復了 ${actual} 點信仰。`);
          }
        }
      }

      if (c.resourceType === 'mp' && c.isPlayer) {
        const mpRegen = this.getCombatantResourceAffixBonus(c.id, c.isPlayer, 'mpRegen');
        if (mpRegen > 0) {
          const before = c.resource;
          c.resource = Math.min(c.maxResource, c.resource + mpRegen);
          c.mp = Math.min(c.maxMp, c.resource);
          const actual = c.resource - before;
          if (actual > 0) {
            log.push(`${c.name}的裝備迴路回復了 ${actual} 點MP。`);
          }
        }
      }
    }
  }

  private getCombatantResourceAffixBonus(characterId: string, isPlayer: boolean, key: Parameters<typeof getResourceAffixBonus>[1]): number {
    if (!isPlayer) return 0;
    return getResourceAffixBonus(characterId, key);
  }

  private applySkillResourceChangeWithAffixes(actor: CombatantState, skillDef: SkillDef, resourceCost: number): void {
    const faithBonus = actor.resourceType === 'faith' && actor.isPlayer
      ? getResourceAffixBonus(actor.id, 'faithDelta')
      : 0;
    applySkillResourceChange(actor, skillDef, resourceCost, faithBonus);
  }

  private applyEffectWithBossControl(
    session: CombatSession,
    target: CombatantState,
    effect: StatusEffect,
    sourceName?: string,
  ): string {
    if (!this.isBossCombatant(target) || getStatusEffectDef(effect.type).category !== 'control') {
      return this.effectEngine.applyEffect(target.activeEffects, effect, sourceName);
    }

    const immuneUntil = session.bossControlImmunityUntilRound.get(target.id) ?? 0;
    if (immuneUntil >= session.state.round) {
      return '抵抗了連續控制。';
    }

    const cappedEffect = { ...effect, duration: Math.min(effect.duration, 1) };
    const message = this.effectEngine.applyEffect(target.activeEffects, cappedEffect, sourceName);
    session.bossControlImmunityUntilRound.set(target.id, session.state.round + 1);
    return `${message} Boss 對連續控制產生短暫抗性。`;
  }

  private isBossCombatant(target: CombatantState): boolean {
    return !target.isPlayer && target.monsterBehavior === 'phase_boss';
  }

  private applyNonDamageSkillEffect(
    session: CombatSession,
    actor: CombatantState,
    target: CombatantState,
    skillDef: SkillDef,
    skillName: string,
    log: string[],
  ): boolean {
    const isSupportTarget = skillDef.multiplier <= 0
      && (skillDef.targetType === 'self' || skillDef.targetType === 'single_ally' || skillDef.targetType === 'all_allies');
    if (!isSupportTarget && !skillDef.special?.removeDebuffs) return false;

    if (skillDef.special?.removeDebuffs) {
      const removed = this.effectEngine.removeAllDebuffs(target.activeEffects);
      log.push(`${actor.name}使用${skillName}支援${target.name}，淨化結果為移除 ${removed.length} 個負面狀態，目標目前可繼續行動。`);
    } else {
      log.push(`${actor.name}使用${skillName}支援${target.name}，技能效果已排入本輪結算，目標狀態會依技能設定更新。`);
    }

    if (skillDef.effects) {
      for (const eff of skillDef.effects) {
        const contextualValue = this.getContextualEffectValue(actor, target, skillDef, eff);
        const msg = this.applyEffectWithBossControl(session, target, {
          ...eff,
          value: contextualValue,
          source: actor.id,
        }, actor.name);
        log.push(`  ${target.name}${msg}`);
      }
    }

    const nextShotDamageBonus = this.getNumericSpecial(skillDef, 'nextShotDamageBonus');
    if (nextShotDamageBonus !== undefined && nextShotDamageBonus > 0 && actor.id === target.id) {
      const msg = this.effectEngine.applyEffect(target.activeEffects, {
        type: 'next_shot_damage',
        value: nextShotDamageBonus,
        duration: 2,
        source: actor.id,
      }, actor.name);
      log.push(`  ${target.name}${msg}`);
    }

    const directGain = this.getNumericSpecial(skillDef, 'resourceGain');
    if (directGain !== undefined && actor.id === target.id) {
      this.gainResource(actor, directGain, log, '恢復了');
    }
    return true;
  }

  private applySkillHitResourceEffects(
    actor: CombatantState,
    target: CombatantState,
    skillDef: SkillDef | null,
    log: string[],
  ): void {
    if (!skillDef) return;

    const gain = this.getNumericSpecial(skillDef, 'resourceGainOnHit')
      ?? this.getNumericSpecial(skillDef, 'focusGainOnHit')
      ?? 0;
    if (gain > 0) this.gainResource(actor, gain, log, '命中後恢復');

    const perHit = this.getNumericSpecial(skillDef, 'resourceGainPerHit') ?? 0;
    if (perHit > 0) this.gainResource(actor, perHit, log, '命中後恢復');

    const markedGain = this.getNumericSpecial(skillDef, 'focusGainOnMarkedHit') ?? 0;
    if (markedGain > 0 && this.effectEngine.hasEffect(target.activeEffects, 'mark')) {
      this.gainResource(actor, markedGain, log, '命中標記目標後恢復');
    }

    const mpGain = this.getNumericSpecial(skillDef, 'mpGainOnSpellHit') ?? 0;
    if (mpGain > 0 && skillDef.damageType === 'magical') {
      this.gainResource(actor, mpGain, log, '法術命中後恢復');
    }

    if (actor.resourceType === 'mp' && skillDef.damageType === 'magical') {
      const meditation = actor.activeEffects.find(effect => effect.type === 'mana_regen');
      if (meditation) {
        const baseGain = this.getNumericSpecial(SKILL_DEFS.meditation, 'mpGainOnSpellHit') ?? 0;
        const approachingGain = target.isApproaching
          ? this.getNumericSpecial(SKILL_DEFS.meditation, 'mpGainOnApproachingHit') ?? 0
          : 0;
        this.gainResource(actor, baseGain + approachingGain, log, target.isApproaching ? '命中逼近目標後恢復' : '冥想迴流恢復');
      }
    }
  }

  private gainResource(actor: CombatantState, amount: number, log: string[], reason: string): void {
    if (amount <= 0 || actor.maxResource <= 0) return;
    const before = actor.resource;
    actor.resource = Math.min(actor.maxResource, actor.resource + amount);
    if (actor.resourceType === 'mp') {
      actor.mp = Math.min(actor.maxMp, actor.mp + (actor.resource - before));
    }
    const actual = actor.resource - before;
    if (actual > 0) {
      log.push(`  ${actor.name}${reason} ${actual} 點${this.getResourceLabel(actor.resourceType)}。`);
    }
  }

  private getNumericSpecial(skillDef: SkillDef, key: string): number | undefined {
    const value = skillDef.special?.[key];
    return typeof value === 'number' && Number.isFinite(value) ? value : undefined;
  }

  private triggerAffixEvents(
    session: CombatSession,
    owner: CombatantState,
    trigger: AffixTriggerContext,
    log: string[],
    context: TriggeredAffixContext = {},
  ): TriggeredAffixResult[] {
    if (!owner.isPlayer || owner.isDead) return [];
    const results = applyTriggeredAffixEvents(owner.id, owner, trigger, context, {
      isOnCooldown: affixId => (session.affixCooldowns.get(this.getAffixCooldownKey(owner.id, affixId)) ?? 0) > 0,
      startCooldown: (affixId, rounds) => {
        session.affixCooldowns.set(this.getAffixCooldownKey(owner.id, affixId), rounds);
      },
    });
    for (const result of results) {
      log.push(...result.messages);
    }
    return results;
  }

  private applyBlockAffixEffects(
    session: CombatSession,
    defender: CombatantState,
    attacker: CombatantState,
    damage: number,
    log: string[],
    context: TriggeredAffixContext,
  ): number {
    const results = this.triggerAffixEvents(session, defender, 'on_block', log, context);
    let nextDamage = damage;

    for (const result of results) {
      if (result.affix.behavior === 'reduce_first_hit') {
        const pct = Math.abs(Math.min(0, result.affix.skillModifiers?.damagePct ?? -6));
        if (pct > 0) {
          const before = nextDamage;
          nextDamage = Math.max(1, Math.floor(nextDamage * (1 - pct / 100)));
          log.push(`  ${defender.name}的「${result.affix.name}」使格擋傷害降低 ${before - nextDamage} 點。`);
        }
      }

      if (result.affix.behavior === 'counter_on_block' && !attacker.isDead) {
        const defenderStats = this.getCombatStats(session, defender);
        const counterDamage = Math.max(1, Math.floor(defenderStats.atk * 0.35));
        log.push(`  ${defender.name}的「${result.affix.name}」反擊${attacker.name}，造成 ${counterDamage} 點傷害。`);
        this.applyDamageToTarget(session, attacker, counterDamage, log, defender);
        this.triggerMonsterPhases(session, attacker, log);
      }
    }

    return nextDamage;
  }

  private processAffixCooldowns(session: CombatSession): void {
    for (const [key, rounds] of session.affixCooldowns) {
      const next = rounds - 1;
      if (next <= 0) session.affixCooldowns.delete(key);
      else session.affixCooldowns.set(key, next);
    }
  }

  private processSkillCooldowns(session: CombatSession): void {
    for (const [key, rounds] of session.skillCooldowns) {
      const next = rounds - 1;
      if (next <= 0) session.skillCooldowns.delete(key);
      else session.skillCooldowns.set(key, next);
    }
  }

  private getSkillCooldownKey(actorId: string, skillId: string): string {
    return `${actorId}:${skillId}`;
  }

  private getAffixCooldownKey(characterId: string, affixId: string): string {
    return `${characterId}:${affixId}`;
  }

  private getHpPercent(target: Pick<CombatantState, 'hp' | 'maxHp'>): number {
    return target.maxHp > 0 ? (target.hp / target.maxHp) * 100 : 100;
  }

  /** 取得資源中文名稱 */
  private getResourceLabel(resourceType: ResourceType): string {
    const labels: Record<ResourceType, string> = {
      mp: 'MP',
      rage: '怒氣',
      focus: '專注',
      faith: '信仰',
    };
    return labels[resourceType] ?? 'MP';
  }

  // ──────────────────────────────────────────────────────────
  //  輔助函式
  // ──────────────────────────────────────────────────────────

  private findCombatant(session: CombatSession, id: string): CombatantState | undefined {
    return (
      session.state.playerTeam.find(c => c.id === id) ??
      session.state.enemyTeam.find(c => c.id === id)
    );
  }

  private selectRandomAlive(team: CombatantState[]): CombatantState | undefined {
    const alive = team.filter(c => !c.isDead);
    if (alive.length === 0) return undefined;
    return alive[Math.floor(Math.random() * alive.length)];
  }

  private isWaitingToArrive(combatant: CombatantState): boolean {
    return !combatant.isPlayer && (combatant.arrivalTicksRemaining ?? 0) > 0;
  }

  private getCombatantDex(session: CombatSession, id: string): number {
    const combatant = this.findCombatant(session, id);
    const char = session.playerCharacters.get(id);
    let dex: number;
    if (char) {
      const eqStats = getEquipmentStats(char);
      dex = char.stats.dex + eqStats.dex;
    } else {
      const monster = session.monsterInstances.get(id);
      dex = monster?.def.dex ?? 5;
    }

    if (!combatant) return dex;
    const slow = this.effectEngine.getEffectValue(combatant.activeEffects, 'slow');
    const speedUp = this.effectEngine.getEffectValue(combatant.activeEffects, 'speed_up');
    const adjusted = dex * (1 - Math.min(90, slow) / 100) * (1 + speedUp / 100);
    return Math.max(1, Math.floor(adjusted));
  }

  private getCombatantLuk(session: CombatSession, id: string): number {
    const char = session.playerCharacters.get(id);
    if (char) {
      const eqStats = getEquipmentStats(char);
      return char.stats.luk + eqStats.luk;
    }

    const monster = session.monsterInstances.get(id);
    if (monster) return monster.def.luk;

    return 5;
  }

  /** 取得戰鬥者普通攻擊使用的武器 ID（怪物返回 null） */
  private getEquippedWeaponId(session: CombatSession, id: string, attackMode: CombatAttackMode = 'melee'): string | null {
    const char = session.playerCharacters.get(id);
    if (char) {
      if (attackMode === 'ranged') return char.equipment.rangedMainHand ?? null;
      return char.equipment.meleeMainHand ?? char.equipment.weapon ?? null;
    }
    return null;
  }

  /**
   * 預判傷害是否會擊殺目標（粗略估計，不修改狀態）
   * 考慮減傷和無敵，但不消耗護盾值
   */
  private willDamageKill(_session: CombatSession, target: CombatantState, rawDamage: number): boolean {
    // 無敵判定
    if (this.effectEngine.isInvincible(target.activeEffects)) {
      return false;
    }

    let damage = rawDamage;

    // 傷害減免
    const reduction = this.effectEngine.getDamageReduction(target.activeEffects);
    if (reduction > 0) {
      damage = Math.max(1, Math.floor(damage * (1 - reduction / 100)));
    }

    // 粗略估計護盾吸收（只讀取護盾總值，不修改）
    let totalShield = 0;
    for (const eff of target.activeEffects) {
      if (eff.type === 'shield') {
        totalShield += eff.value;
      }
    }
    damage = Math.max(0, damage - totalShield);

    return target.hp - damage <= 0;
  }

  /** 取得玩家的套裝百分比加成（怪物返回空物件） */
  private getPlayerSetBonusPct(session: CombatSession, id: string): Record<string, number> {
    const char = session.playerCharacters.get(id);
    if (!char) return {};
    return getEquipmentStats(char).setBonusPct;
  }

  private getCombatantElement(session: CombatSession, id: string): ElementType {
    const monster = session.monsterInstances.get(id);
    if (monster) return monster.def.element;
    return 'none';
  }

  private getCombatStats(
    session: CombatSession,
    combatant: CombatantState,
  ): DerivedStats {
    const char = session.playerCharacters.get(combatant.id);
    if (char) {
      // Get equipment bonuses (including enhancement and set bonuses)
      const eqStats = getEquipmentStats(char);

      // Merge base stats with equipment stat bonuses
      const mergedStats = {
        str: char.stats.str + eqStats.str,
        int: char.stats.int + eqStats.int,
        dex: char.stats.dex + eqStats.dex,
        vit: char.stats.vit + eqStats.vit,
        luk: char.stats.luk + eqStats.luk,
      };

      const cs = baseStatsToCombat(
        mergedStats,
        char.level,
        eqStats.weaponAtk,
        eqStats.weaponMatk,
        eqStats.armorDef,
        eqStats.armorMdef,
        {
          meleeWeaponAtk: eqStats.meleeWeaponAtk,
          rangedWeaponAtk: eqStats.rangedWeaponAtk,
          spellWeaponMatk: eqStats.spellWeaponMatk,
        },
      );
      cs.bonusCritRate = eqStats.bonusCritRate;
      cs.bonusCritDamage = eqStats.bonusCritDamage;
      cs.bonusDodgeRate = eqStats.bonusDodgeRate;
      cs.bonusHitRate = eqStats.bonusHitRate;

      let derived = calculateDerived(cs);

      // Apply set bonus percentage modifiers
      const pct = eqStats.setBonusPct;
      if (pct.atk) {
        derived.atk = Math.floor(derived.atk * (1 + pct.atk / 100));
        derived.meleeAtk = Math.floor(derived.meleeAtk * (1 + pct.atk / 100));
        derived.rangedAtk = Math.floor(derived.rangedAtk * (1 + pct.atk / 100));
      }
      if (pct.int) {
        derived.matk = Math.floor(derived.matk * (1 + pct.int / 100));
        derived.spellPower = Math.floor(derived.spellPower * (1 + pct.int / 100));
      }
      if (pct.dex) {
        derived.dodgeRate = Math.floor(derived.dodgeRate * (1 + pct.dex / 100));
        derived.hitRate = Math.floor(derived.hitRate * (1 + pct.dex / 100));
      }
      if (pct.critRate) derived.critRate += pct.critRate;
      if (pct.critDamage) derived.critDamage += pct.critDamage;
      if (pct.dodgeRate) derived.dodgeRate += pct.dodgeRate;
      if (pct.spellPower) {
        derived.matk = Math.floor(derived.matk * (1 + pct.spellPower / 100));
        derived.spellPower = Math.floor(derived.spellPower * (1 + pct.spellPower / 100));
      }

      // Apply skill tree bonuses
      if (this.skillTreeMgr) {
        const stb = this.skillTreeMgr.getBranchBonuses(combatant.id);
        if (stb.atkPercent > 0) {
          derived.atk = Math.floor(derived.atk * (1 + stb.atkPercent / 100));
          derived.meleeAtk = Math.floor(derived.meleeAtk * (1 + stb.atkPercent / 100));
          derived.rangedAtk = Math.floor(derived.rangedAtk * (1 + stb.atkPercent / 100));
        }
        if (stb.defPercent > 0) derived.def = Math.floor(derived.def * (1 + stb.defPercent / 100));
        derived.critRate += stb.critRateBonus;
        derived.dodgeRate += stb.dodgeRateBonus;
        derived.hitRate += stb.hitRateBonus;
        derived.critDamage += stb.critDamageBonus;
      }

      derived.dodgeRate += getSurvivalDodgeBonus(combatant.id, combatant.hp, combatant.maxHp);

      applyActiveEffectStatModifiers(derived, combatant.activeEffects);

      return derived;
    }

    const monster = session.monsterInstances.get(combatant.id);
    if (monster) {
      const d = monster.def;
      const cs = baseStatsToCombat(
        { str: d.str, int: d.int, dex: d.dex, vit: d.vit, luk: d.luk },
        d.level,
      );
      const derived = calculateDerived(cs);
      applyActiveEffectStatModifiers(derived, combatant.activeEffects);
      return derived;
    }

    // fallback
    return { atk: 10, meleeAtk: 10, rangedAtk: 10, matk: 10, spellPower: 10, def: 5, mdef: 5, critRate: 5, critDamage: 150, dodgeRate: 5, hitRate: 95 };
  }

  private applySkillAttackSource(stats: DerivedStats, skillDef: SkillDef | null): DerivedStats {
    if (!skillDef) return { ...stats, atk: stats.meleeAtk };
    if (skillDef.attackSource === 'ranged_physical') {
      return { ...stats, atk: stats.rangedAtk };
    }
    if (skillDef.attackSource === 'melee') {
      return { ...stats, atk: stats.meleeAtk };
    }
    if (skillDef.attackSource === 'ranged_magical') {
      return { ...stats, matk: stats.spellPower };
    }
    return stats;
  }

  private applyBasicAttackMode(
    stats: DerivedStats,
    session: CombatSession,
    actorId: string,
    attackMode: CombatAttackMode = 'melee',
  ): DerivedStats {
    if (attackMode === 'ranged') {
      return this.getRangedAttackSource(session, actorId) === 'ranged_magical'
        ? { ...stats, matk: stats.spellPower }
        : { ...stats, atk: stats.rangedAtk };
    }
    return { ...stats, atk: stats.meleeAtk };
  }

  private getBasicAttackDamageType(
    session: CombatSession,
    actorId: string,
    attackMode: CombatAttackMode = 'melee',
  ): 'physical' | 'magical' {
    return attackMode === 'ranged' && this.getRangedAttackSource(session, actorId) === 'ranged_magical'
      ? 'magical'
      : 'physical';
  }

  private getRangedAttackSource(session: CombatSession, actorId: string) {
    const char = session.playerCharacters.get(actorId);
    const itemId = char?.equipment.rangedMainHand;
    const weaponType = itemId ? ITEM_DEFS[itemId]?.weaponType : undefined;
    return weaponType ? WEAPON_TYPE_DEFS[weaponType]?.attackSource : undefined;
  }

  /** 設定回合結束回呼 */
  setRoundEndCallback(
    combatId: string,
    callback: (roundInfo: { round: number; playerActions: Map<string, CombatAction> }) => void,
  ): void {
    const session = this.sessions.get(combatId);
    if (session) {
      session.onRoundEnd = callback;
    }
  }

  /** 設定戰利品（由 LootCalculator 呼叫） */
  setCombatLoot(combatId: string, loot: CombatLoot): void {
    const session = this.sessions.get(combatId);
    if (session) {
      session.state.loot = loot;
    }
  }

  /** 取得活躍戰鬥數量 */
  getActiveCombatCount(): number {
    return this.sessions.size;
  }

  /** 取得戰鬥中第一個存活的敵人（供戰鬥道具使用） */
  getFirstAliveEnemy(combatId: string): CombatantState | undefined {
    const session = this.sessions.get(combatId);
    if (!session) return undefined;
    return session.state.enemyTeam.find(e => !e.isDead);
  }

  /** 對戰鬥中的敵人施加效果（供戰鬥道具使用） */
  applyEffectToEnemy(combatId: string, enemyId: string, effect: StatusEffect): string | undefined {
    const session = this.sessions.get(combatId);
    if (!session) return undefined;
    const enemy = session.state.enemyTeam.find(e => e.id === enemyId);
    if (!enemy || enemy.isDead) return undefined;
    return this.applyEffectWithBossControl(session, enemy, effect);
  }

  /** 對戰鬥中的敵人造成固定傷害（供戰鬥道具使用） */
  dealDamageToEnemy(combatId: string, enemyId: string, damage: number): { dealt: number; killed: boolean } | undefined {
    const session = this.sessions.get(combatId);
    if (!session) return undefined;
    const enemy = session.state.enemyTeam.find(e => e.id === enemyId);
    if (!enemy || enemy.isDead) return undefined;
    const before = enemy.hp;
    enemy.hp = Math.max(0, enemy.hp - damage);
    const dealt = before - enemy.hp;
    if (enemy.hp <= 0) {
      enemy.isDead = true;
      // 檢查戰鬥是否結束
      if (this.checkBattleEnd(session)) {
        this.endCombat(session);
      }
      return { dealt, killed: true };
    }
    return { dealt, killed: false };
  }

  /** 設定逃跑保證成功（供煙霧彈使用） */
  setGuaranteedFlee(combatId: string): boolean {
    const session = this.sessions.get(combatId);
    if (!session) return false;
    // 直接設定 result 為 fled
    session.state.result = 'fled';
    this.endCombat(session);
    return true;
  }

  /** 強制結束戰鬥（管理用） */
  forceEndCombat(combatId: string): void {
    const session = this.sessions.get(combatId);
    if (session) {
      session.state.result = 'fled';
      this.endCombat(session);
    }
  }
}

export function applyActiveEffectStatModifiers(derived: DerivedStats, effects: ActiveStatusEffect[]): void {
  for (const eff of effects) {
    if (eff.remainingDuration <= 0) continue;
    switch (eff.type) {
      case 'atk_up':
        derived.atk = Math.floor(derived.atk * (1 + eff.value / 100));
        break;
      case 'atk_down':
        derived.atk = Math.max(1, Math.floor(derived.atk * (1 - eff.value / 100)));
        break;
      case 'matk_up':
        derived.matk = Math.floor(derived.matk * (1 + eff.value / 100));
        break;
      case 'matk_down':
        derived.matk = Math.max(1, Math.floor(derived.matk * (1 - eff.value / 100)));
        break;
      case 'def_up':
        derived.def = Math.floor(derived.def * (1 + eff.value / 100));
        break;
      case 'def_down':
        derived.def = Math.max(0, Math.floor(derived.def * (1 - eff.value / 100)));
        break;
      case 'mdef_up':
        derived.mdef = Math.floor(derived.mdef * (1 + eff.value / 100));
        break;
      case 'mdef_down':
        derived.mdef = Math.max(0, Math.floor(derived.mdef * (1 - eff.value / 100)));
        break;
      case 'dodge_up':
        derived.dodgeRate += eff.value;
        break;
      case 'slow':
        derived.dodgeRate = Math.max(0, derived.dodgeRate * (1 - Math.min(90, eff.value) / 100));
        break;
      case 'crit_up':
        derived.critRate += eff.value;
        break;
    }
  }
}
