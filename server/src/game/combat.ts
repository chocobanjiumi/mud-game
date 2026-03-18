// 戰鬥引擎 - 回合制戰鬥核心

import type {
  CombatState, CombatAction, CombatActionType, CombatResult,
  CombatantState, DamageResult, CombatLoot, ActiveStatusEffect, StatusEffect,
  MonsterDef, Character, SkillDef, ElementType, ResourceType,
} from '@game/shared';
import { randomUUID } from 'crypto';
import { SKILL_DEFS } from '@game/shared';
import {
  calculateDamage, calculateDerived, baseStatsToCombat, derivedWithDexLuk,
  getEquipmentStats,
} from './damage.js';
import { EffectEngine } from './effects.js';
import { getAttackDescription } from './attack-descriptions.js';
import { SkillTreeManager } from './skill-tree.js';
import type { AttackResultType } from './attack-descriptions.js';
import type { MonsterInstance } from './world.js';

// ============================================================
//  常數
// ============================================================

const TURN_TIMER_SECONDS = 5;
const DEFAULT_ACTION: CombatActionType = 'attack';

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
      activeEffects: [],
      isDead: false,
    }));

    // 建立怪物 CombatantState
    const enemyTeam: CombatantState[] = monsters.map(m => ({
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
      isDead: false,
    }));

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
      turnTimerHandle: null,
      turnStartTime: Date.now(),
      onEnd: onEnd ?? null,
      onRoundEnd: null,
    };

    this.sessions.set(combatId, session);

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

    session.state.pendingActions.set(action.actorId, action);

    // 檢查是否所有存活的玩家都已提交（怪物由系統自動處理）
    const alivePlayers = session.state.playerTeam.filter(p => !p.isDead);
    const allSubmitted = alivePlayers.every(p =>
      session.state.pendingActions.has(p.id),
    );

    if (allSubmitted) {
      // 所有玩家已提交，立即結算（不等計時器）
      this.resolveRound(session);
    }

    return true;
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
    ].filter(c => !c.isDead);

    for (const c of allCombatants) {
      if (!session.state.pendingActions.has(c.id)) {
        // 怪物 AI 或超時玩家 → 預設普通攻擊
        const target = c.isPlayer
          ? this.selectRandomAlive(session.state.enemyTeam)
          : this.selectRandomAlive(session.state.playerTeam);

        session.state.pendingActions.set(c.id, {
          actorId: c.id,
          type: DEFAULT_ACTION,
          targetId: target?.id,
        });
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

    // 依 DEX 排序（速度快的先動）
    actions.sort((a, b) => {
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
        continue;
      }

      switch (action.type) {
        case 'attack':
          this.executeAttack(session, action, actor, roundLog, damageResults);
          break;
        case 'skill':
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
      }

      // 檢查戰鬥是否結束
      if (this.checkBattleEnd(session)) break;
    }

    // 回合結束：處理狀態效果 tick
    this.processEffectTicks(session, roundLog);

    // 回合結束：處理每回合資源回復
    this.processResourceRegen(session, roundLog);

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

    // 重啟計時器
    this.startTurnTimer(session);
  }

  // ──────────────────────────────────────────────────────────
  //  行動執行
  // ──────────────────────────────────────────────────────────

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

    const dmgResult = calculateDamage({
      attackerId: actor.id,
      targetId: target.id,
      damageType: 'physical',
      element: 'none',
      targetElement,
      multiplier: 1.0,
      attacker: derivedWithDexLuk(attackerStats, this.getCombatantDex(session, actor.id), this.getCombatantLuk(session, actor.id)),
      target: derivedWithDexLuk(targetStats, this.getCombatantDex(session, target.id), this.getCombatantLuk(session, target.id)),
    });

    results.push(dmgResult);

    // 取得攻擊者的武器 ID（玩家從裝備欄取得，怪物為 null）
    const weaponItemId = this.getEquippedWeaponId(session, actor.id);
    this.applyDamageResult(session, dmgResult, actor, target, log, weaponItemId);

    // 資源系統：劍士系攻擊獲得怒氣
    if (!dmgResult.isMiss && !dmgResult.isDodged) {
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
    const skillDef = action.skillId ? SKILL_DEFS[action.skillId] : null;

    const target = action.targetId
      ? this.findCombatant(session, action.targetId)
      : this.selectRandomAlive(actor.isPlayer ? session.state.enemyTeam : session.state.playerTeam);

    if (!target || target.isDead) {
      log.push(`${actor.name}的技能失去了目標。`);
      return;
    }

    // 資源消耗（使用技能定義的 resourceCost）
    let resourceCost = skillDef?.resourceCost ?? 5;
    // 套裝加成：MP 消耗減免
    if (actor.resourceType === 'mp') {
      const pct = this.getPlayerSetBonusPct(session, actor.id);
      if (pct.mpCostReduction) {
        resourceCost = Math.max(1, Math.floor(resourceCost * (1 - pct.mpCostReduction / 100)));
      }
    }
    if (actor.resource < resourceCost) {
      const resourceLabel = this.getResourceLabel(actor.resourceType);
      log.push(`${actor.name}的${resourceLabel}不足，改為普通攻擊！`);
      this.executeAttack(session, { ...action, type: 'attack' }, actor, log, results);
      return;
    }
    actor.resource -= resourceCost;

    const attackerStats = this.getCombatStats(session, actor);
    const targetStats = this.getCombatStats(session, target);
    const targetElement = this.getCombatantElement(session, target.id);

    // 使用技能定義的 damageType、element、multiplier
    const damageType = skillDef?.damageType ?? 'magical';
    const element = skillDef?.element ?? 'none';
    const multiplier = skillDef?.multiplier ?? 1.5;

    const dmgResult = calculateDamage({
      attackerId: actor.id,
      targetId: target.id,
      damageType,
      element,
      targetElement,
      multiplier,
      attacker: derivedWithDexLuk(attackerStats, this.getCombatantDex(session, actor.id), this.getCombatantLuk(session, actor.id)),
      target: derivedWithDexLuk(targetStats, this.getCombatantDex(session, target.id), this.getCombatantLuk(session, target.id)),
    });

    results.push(dmgResult);

    // 治癒技能特殊處理
    const isHealSkill = skillDef?.special?.isHeal || action.skillId === 'heal' || action.skillId === 'mass_heal';
    if (isHealSkill) {
      const healBase = attackerStats.matk * multiplier;
      let healAmount = Math.max(1, Math.floor(healBase));
      // 套裝加成：治癒力量
      const pct = this.getPlayerSetBonusPct(session, actor.id);
      if (pct.healPower) {
        healAmount = Math.floor(healAmount * (1 + pct.healPower / 100));
      }
      const before = target.hp;
      target.hp = Math.min(target.maxHp, target.hp + healAmount);
      const actual = target.hp - before;
      const skillName = skillDef?.name ?? '治癒';
      log.push(`${actor.name}使用了${skillName}，為${target.name}回復了 ${actual} HP！`);
    } else {
      const skillName = skillDef?.name ?? action.skillId ?? '技能';
      if (dmgResult.isMiss) {
        log.push(`${actor.name}使用了${skillName}，但是沒有命中！`);
      } else if (dmgResult.isDodged) {
        log.push(`${actor.name}使用了${skillName}，但被${target.name}閃避了！`);
      } else {
        const critText = dmgResult.isCrit ? '暴擊！' : '';
        log.push(
          `${actor.name}使用了${skillName}，對${target.name}造成 ${dmgResult.damage} 點傷害！${critText}`,
        );
        this.applyDamageToTarget(session, target, dmgResult.damage, log);
      }
    }

    // 祭司系：治療/淨化技能觸發信仰增益
    if (skillDef && actor.resourceType === 'faith') {
      const isHealSkill = skillDef.special?.isHeal || skillDef.id === 'heal' || skillDef.id === 'mass_heal';
      const isPurifySkill = skillDef.special?.removeDebuffs || skillDef.id === 'purify';
      if (isHealSkill || isPurifySkill) {
        this.gainResourceOnHeal(actor, skillDef.id, log);
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
    const fleeChance = Math.min(80, Math.max(10, 30 + (playerDex - avgEnemyDex) * 2));

    if (Math.random() * 100 < fleeChance) {
      log.push(`${actor.name}成功逃跑了！`);
      session.state.result = 'fled';
    } else {
      log.push(`${actor.name}試圖逃跑，但是失敗了！`);
    }
  }

  private executeItem(
    _session: CombatSession,
    action: CombatAction,
    actor: CombatantState,
    log: string[],
  ): void {
    // 物品使用（簡化版本，具體在物品系統中完善）
    log.push(`${actor.name}使用了道具。`);
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

    log.push(`${desc}造成 ${result.damage} 點傷害！${elemText}`);

    this.applyDamageToTarget(session, target, result.damage, log);

    // 資源系統：劍士系被擊中獲得怒氣
    this.gainResourceOnHit(target, log);

    // 套用附帶效果
    for (const eff of result.effects) {
      const msg = this.effectEngine.applyEffect(target.activeEffects, eff, actor.name);
      log.push(`  ${target.name}${msg}`);
    }
  }

  private applyDamageToTarget(
    _session: CombatSession,
    target: CombatantState,
    rawDamage: number,
    log: string[],
  ): void {
    let damage = rawDamage;

    // 無敵判定
    if (this.effectEngine.isInvincible(target.activeEffects)) {
      log.push(`  ${target.name}處於無敵狀態，免疫了所有傷害！`);
      return;
    }

    // 傷害減免
    const reduction = this.effectEngine.getDamageReduction(target.activeEffects);
    if (reduction > 0) {
      damage = Math.max(1, Math.floor(damage * (1 - reduction / 100)));
    }

    // 護盾吸收
    const shieldResult = this.effectEngine.absorbWithShield(target.activeEffects, damage);
    if (shieldResult.absorbedDamage > 0) {
      log.push(`  ${target.name}的護盾吸收了 ${shieldResult.absorbedDamage} 點傷害。`);
    }
    damage = shieldResult.remainingDamage;

    // 扣血
    target.hp = Math.max(0, target.hp - damage);
    if (target.hp <= 0) {
      target.isDead = true;
      log.push(`  ${target.name}倒下了！`);
    }
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

      // DoT 傷害
      if (result.damage > 0) {
        c.hp = Math.max(0, c.hp - result.damage);
        if (c.hp <= 0) {
          c.isDead = true;
          log.push(`  ${c.name}因狀態效果倒下了！`);
        }
      }

      // HoT 回血
      if (result.healing > 0) {
        c.hp = Math.min(c.maxHp, c.hp + result.healing);
      }

      // MP 回復
      if (result.mpRestored > 0) {
        c.mp = Math.min(c.maxMp, c.mp + result.mpRestored);
      }

      log.push(...result.messages);
    }
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
          }
        }
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
    _enemy: CombatantState,
  ): CombatantState | undefined {
    const alivePlayers = session.state.playerTeam.filter(p => !p.isDead);
    if (alivePlayers.length === 0) return undefined;

    // 檢查是否有人在挑釁
    const tauntTarget = alivePlayers.find(p =>
      this.effectEngine.hasEffect(p.activeEffects, 'taunt'),
    );
    if (tauntTarget) return tauntTarget;

    // 隨機目標
    return alivePlayers[Math.floor(Math.random() * alivePlayers.length)];
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

        // 戰鬥結束：劍士系怒氣歸零
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

    this.broadcastFn(session.id, playerIds, {
      type: 'combat_action',
      payload: {
        round: session.state.round,
        actions: [],
        log,
        playerTeam: session.state.playerTeam,
        enemyTeam: session.state.enemyTeam,
      },
      timestamp: Date.now(),
    });
  }

  // ──────────────────────────────────────────────────────────
  //  資源系統
  // ──────────────────────────────────────────────────────────

  /** 攻擊命中時的資源增益（劍士系：怒氣 +10，暴擊 +15） */
  private gainResourceOnAttack(actor: CombatantState, dmgResult: DamageResult, log: string[]): void {
    if (actor.resourceType === 'rage') {
      const gain = dmgResult.isCrit ? 15 : 10;
      const before = actor.resource;
      actor.resource = Math.min(actor.maxResource, actor.resource + gain);
      const actual = actor.resource - before;
      if (actual > 0) {
        log.push(`  ${actor.name}獲得了 ${actual} 點怒氣。`);
      }
    }
  }

  /** 被擊中時的資源增益（劍士系：怒氣 +5） */
  private gainResourceOnHit(target: CombatantState, log: string[]): void {
    if (target.resourceType === 'rage' && !target.isDead) {
      const before = target.resource;
      target.resource = Math.min(target.maxResource, target.resource + 5);
      const actual = target.resource - before;
      if (actual > 0) {
        log.push(`  ${target.name}因受擊獲得了 ${actual} 點怒氣。`);
      }
    }
  }

  /** 治療/淨化時的資源增益（祭司系：信仰） */
  gainResourceOnHeal(actor: CombatantState, skillId: string, log: string[]): void {
    if (actor.resourceType === 'faith') {
      // 淨化 +8，治療 +10
      const isPurify = skillId === 'purify';
      const gain = isPurify ? 8 : 10;
      const before = actor.resource;
      actor.resource = Math.min(actor.maxResource, actor.resource + gain);
      const actual = actor.resource - before;
      if (actual > 0) {
        log.push(`  ${actor.name}獲得了 ${actual} 點信仰。`);
      }
    }
  }

  /** 每回合資源回復（遊俠系：能量 +15） */
  private processResourceRegen(session: CombatSession, log: string[]): void {
    const allCombatants = [
      ...session.state.playerTeam,
      ...session.state.enemyTeam,
    ];

    for (const c of allCombatants) {
      if (c.isDead) continue;

      // 遊俠系：每回合能量 +15
      if (c.resourceType === 'energy') {
        const before = c.resource;
        c.resource = Math.min(c.maxResource, c.resource + 15);
        const actual = c.resource - before;
        if (actual > 0) {
          log.push(`${c.name}恢復了 ${actual} 點能量。`);
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
    }
  }

  /** 取得資源中文名稱 */
  private getResourceLabel(resourceType: ResourceType): string {
    const labels: Record<ResourceType, string> = {
      mp: 'MP',
      rage: '怒氣',
      energy: '能量',
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

  private getCombatantDex(session: CombatSession, id: string): number {
    const char = session.playerCharacters.get(id);
    if (char) {
      const eqStats = getEquipmentStats(char);
      return char.stats.dex + eqStats.dex;
    }

    const monster = session.monsterInstances.get(id);
    if (monster) return monster.def.dex;

    return 5; // fallback
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

  /** 取得戰鬥者裝備的武器 ID（怪物返回 null） */
  private getEquippedWeaponId(session: CombatSession, id: string): string | null {
    const char = session.playerCharacters.get(id);
    if (char) {
      return char.equipment.weapon ?? null;
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
  ): { atk: number; matk: number; def: number; mdef: number; critRate: number; critDamage: number; dodgeRate: number; hitRate: number } {
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
      );
      cs.bonusCritRate = eqStats.bonusCritRate;
      cs.bonusCritDamage = eqStats.bonusCritDamage;
      cs.bonusDodgeRate = eqStats.bonusDodgeRate;
      cs.bonusHitRate = eqStats.bonusHitRate;

      let derived = calculateDerived(cs);

      // Apply set bonus percentage modifiers
      const pct = eqStats.setBonusPct;
      if (pct.atk) derived.atk = Math.floor(derived.atk * (1 + pct.atk / 100));
      if (pct.int) derived.matk = Math.floor(derived.matk * (1 + pct.int / 100));
      if (pct.dex) {
        derived.dodgeRate = Math.floor(derived.dodgeRate * (1 + pct.dex / 100));
        derived.hitRate = Math.floor(derived.hitRate * (1 + pct.dex / 100));
      }
      if (pct.critRate) derived.critRate += pct.critRate;
      if (pct.critDamage) derived.critDamage += pct.critDamage;
      if (pct.dodgeRate) derived.dodgeRate += pct.dodgeRate;
      if (pct.spellPower) derived.matk = Math.floor(derived.matk * (1 + pct.spellPower / 100));

      // Apply skill tree bonuses
      if (this.skillTreeMgr) {
        const stb = this.skillTreeMgr.getBranchBonuses(combatant.id);
        if (stb.atkPercent > 0) derived.atk = Math.floor(derived.atk * (1 + stb.atkPercent / 100));
        if (stb.defPercent > 0) derived.def = Math.floor(derived.def * (1 + stb.defPercent / 100));
        derived.critRate += stb.critRateBonus;
        derived.dodgeRate += stb.dodgeRateBonus;
        derived.hitRate += stb.hitRateBonus;
        derived.critDamage += stb.critDamageBonus;
      }

      // Apply active buff effects from potions/food/skills
      for (const eff of combatant.activeEffects) {
        if (eff.remainingDuration <= 0) continue;
        switch (eff.type) {
          case 'atk_up':
            derived.atk = Math.floor(derived.atk * (1 + eff.value / 100));
            break;
          case 'matk_up':
            derived.matk = Math.floor(derived.matk * (1 + eff.value / 100));
            break;
          case 'def_up':
            derived.def = Math.floor(derived.def * (1 + eff.value / 100));
            break;
          case 'mdef_up':
            derived.mdef = Math.floor(derived.mdef * (1 + eff.value / 100));
            break;
          case 'dodge_up':
            derived.dodgeRate += eff.value;
            break;
          case 'crit_up':
            derived.critRate += eff.value;
            break;
        }
      }

      return derived;
    }

    const monster = session.monsterInstances.get(combatant.id);
    if (monster) {
      const d = monster.def;
      const cs = baseStatsToCombat(
        { str: d.str, int: d.int, dex: d.dex, vit: d.vit, luk: d.luk },
        d.level,
      );
      return calculateDerived(cs);
    }

    // fallback
    return { atk: 10, matk: 10, def: 5, mdef: 5, critRate: 5, critDamage: 150, dodgeRate: 5, hitRate: 95 };
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
    return this.effectEngine.applyEffect(enemy.activeEffects, effect);
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
