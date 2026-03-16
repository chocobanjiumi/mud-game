// 狀態效果引擎 - Buff/Debuff 套用、疊加、DoT/HoT 處理

import type { StatusEffect, StatusEffectType, ActiveStatusEffect } from '@game/shared';

// ============================================================
//  常數
// ============================================================

/** 可疊加的效果（同源不疊加，不同源疊加） */
const STACKABLE_EFFECTS: Set<StatusEffectType> = new Set([
  'poison', 'burn', 'bleed',
  'regen', 'mana_regen',
]);

/** 互斥的效果（新的會覆蓋舊的） */
const EXCLUSIVE_GROUPS: StatusEffectType[][] = [
  ['atk_up', 'atk_down'],
  ['def_up', 'def_down'],
  ['matk_up', 'matk_down'],
  ['mdef_up', 'mdef_down'],
];

/** DoT (Damage over Time) 效果 */
const DOT_EFFECTS: Set<StatusEffectType> = new Set([
  'poison', 'burn', 'bleed',
]);

/** HoT (Heal over Time) 效果 */
const HOT_EFFECTS: Set<StatusEffectType> = new Set([
  'regen', 'mana_regen',
]);

/** 控制效果（讓目標無法行動） */
const CC_EFFECTS: Set<StatusEffectType> = new Set([
  'stun', 'fear', 'freeze',
]);

// ============================================================
//  EffectEngine
// ============================================================

export interface EffectTickResult {
  /** 本 tick 造成的傷害（DoT） */
  damage: number;
  /** 本 tick 造成的治療（HoT） */
  healing: number;
  /** 本 tick 回復的 MP */
  mpRestored: number;
  /** 已過期被移除的效果 */
  expiredEffects: ActiveStatusEffect[];
  /** 文字描述 */
  messages: string[];
}

export class EffectEngine {

  // ──────────────────────────────────────────────────────────
  //  套用效果
  // ──────────────────────────────────────────────────────────

  /**
   * 對目標套用一個狀態效果
   * @param currentEffects 目標當前的效果列表（會被修改）
   * @param newEffect 要套用的效果
   * @param sourceName 來源名稱（用於訊息）
   * @returns 套用結果訊息
   */
  applyEffect(
    currentEffects: ActiveStatusEffect[],
    newEffect: StatusEffect,
    sourceName?: string,
  ): string {
    const active: ActiveStatusEffect = {
      ...newEffect,
      remainingDuration: newEffect.duration,
      tickDamage: DOT_EFFECTS.has(newEffect.type) ? newEffect.value : undefined,
      tickHealing: HOT_EFFECTS.has(newEffect.type) ? newEffect.value : undefined,
    };

    // ── 檢查互斥效果 ────────────────────────────────────
    for (const group of EXCLUSIVE_GROUPS) {
      if (group.includes(newEffect.type)) {
        // 移除同組的所有舊效果
        for (let i = currentEffects.length - 1; i >= 0; i--) {
          if (group.includes(currentEffects[i].type) && currentEffects[i].type !== newEffect.type) {
            currentEffects.splice(i, 1);
          }
        }
        break;
      }
    }

    // ── 檢查疊加規則 ────────────────────────────────────
    if (STACKABLE_EFFECTS.has(newEffect.type)) {
      // 可疊加：同源刷新持續時間，不同源直接加
      const existingSameSource = currentEffects.find(
        e => e.type === newEffect.type && e.source === newEffect.source,
      );
      if (existingSameSource) {
        // 同源：刷新持續時間，取較高值
        existingSameSource.remainingDuration = newEffect.duration;
        existingSameSource.value = Math.max(existingSameSource.value, newEffect.value);
        if (existingSameSource.tickDamage !== undefined && active.tickDamage !== undefined) {
          existingSameSource.tickDamage = Math.max(existingSameSource.tickDamage, active.tickDamage);
        }
        if (existingSameSource.tickHealing !== undefined && active.tickHealing !== undefined) {
          existingSameSource.tickHealing = Math.max(existingSameSource.tickHealing, active.tickHealing);
        }
        return `${this.effectName(newEffect.type)}效果已刷新！`;
      }
      // 不同源：直接加
      currentEffects.push(active);
      return `受到了${this.effectName(newEffect.type)}效果！`;
    }

    // ── 不可疊加：覆蓋（取較強或較新的） ─────────────────
    const existingIdx = currentEffects.findIndex(e => e.type === newEffect.type);
    if (existingIdx >= 0) {
      const existing = currentEffects[existingIdx];
      // 新效果更強或持續更久 → 覆蓋
      if (newEffect.value >= existing.value || newEffect.duration > existing.remainingDuration) {
        currentEffects[existingIdx] = active;
        return `${this.effectName(newEffect.type)}效果已更新！`;
      }
      return `目標已有更強的${this.effectName(newEffect.type)}效果。`;
    }

    currentEffects.push(active);
    return `受到了${this.effectName(newEffect.type)}效果！`;
  }

  // ──────────────────────────────────────────────────────────
  //  每回合結算
  // ──────────────────────────────────────────────────────────

  /**
   * 處理所有效果的每回合 tick
   * @param effects 當前效果列表（會被修改 — 移除過期效果）
   * @param targetName 目標名稱（用於訊息）
   * @returns tick 結果
   */
  tickEffects(effects: ActiveStatusEffect[], targetName: string): EffectTickResult {
    const result: EffectTickResult = {
      damage: 0,
      healing: 0,
      mpRestored: 0,
      expiredEffects: [],
      messages: [],
    };

    for (let i = effects.length - 1; i >= 0; i--) {
      const eff = effects[i];

      // ── DoT 處理 ───────────────────────────────────────
      if (eff.tickDamage && eff.tickDamage > 0) {
        result.damage += eff.tickDamage;
        result.messages.push(
          `${targetName}受到${this.effectName(eff.type)}的影響，損失了 ${eff.tickDamage} HP！`,
        );
      }

      // ── HoT 處理 ───────────────────────────────────────
      if (eff.tickHealing && eff.tickHealing > 0) {
        if (eff.type === 'mana_regen') {
          result.mpRestored += eff.tickHealing;
          result.messages.push(
            `${targetName}透過${this.effectName(eff.type)}回復了 ${eff.tickHealing} MP。`,
          );
        } else {
          result.healing += eff.tickHealing;
          result.messages.push(
            `${targetName}透過${this.effectName(eff.type)}回復了 ${eff.tickHealing} HP。`,
          );
        }
      }

      // ── 持續時間遞減 ──────────────────────────────────
      eff.remainingDuration--;
      if (eff.remainingDuration <= 0) {
        result.expiredEffects.push(eff);
        effects.splice(i, 1);
        result.messages.push(`${targetName}身上的${this.effectName(eff.type)}效果已消失。`);
      }
    }

    return result;
  }

  // ──────────────────────────────────────────────────────────
  //  移除效果
  // ──────────────────────────────────────────────────────────

  /** 移除指定類型的所有效果 */
  removeEffect(effects: ActiveStatusEffect[], type: StatusEffectType): ActiveStatusEffect[] {
    const removed: ActiveStatusEffect[] = [];
    for (let i = effects.length - 1; i >= 0; i--) {
      if (effects[i].type === type) {
        removed.push(effects[i]);
        effects.splice(i, 1);
      }
    }
    return removed;
  }

  /** 移除所有負面效果（淨化） */
  removeAllDebuffs(effects: ActiveStatusEffect[]): ActiveStatusEffect[] {
    const debuffTypes = new Set<StatusEffectType>([
      'poison', 'burn', 'slow', 'stun', 'fear', 'bleed', 'silence', 'freeze',
      'atk_down', 'def_down', 'matk_down', 'mdef_down',
      'heal_reduction', 'mark',
    ]);

    const removed: ActiveStatusEffect[] = [];
    for (let i = effects.length - 1; i >= 0; i--) {
      if (debuffTypes.has(effects[i].type)) {
        removed.push(effects[i]);
        effects.splice(i, 1);
      }
    }
    return removed;
  }

  /** 移除所有正面效果（驅散） */
  removeAllBuffs(effects: ActiveStatusEffect[]): ActiveStatusEffect[] {
    const buffTypes = new Set<StatusEffectType>([
      'atk_up', 'def_up', 'matk_up', 'mdef_up',
      'dodge_up', 'crit_up', 'speed_up',
      'regen', 'mana_regen', 'shield', 'counter', 'stealth',
      'damage_reduction', 'invincible',
    ]);

    const removed: ActiveStatusEffect[] = [];
    for (let i = effects.length - 1; i >= 0; i--) {
      if (buffTypes.has(effects[i].type)) {
        removed.push(effects[i]);
        effects.splice(i, 1);
      }
    }
    return removed;
  }

  // ──────────────────────────────────────────────────────────
  //  查詢
  // ──────────────────────────────────────────────────────────

  /** 目標是否有指定效果 */
  hasEffect(effects: ActiveStatusEffect[], type: StatusEffectType): boolean {
    return effects.some(e => e.type === type);
  }

  /** 取得指定效果的總值（考慮疊加） */
  getEffectValue(effects: ActiveStatusEffect[], type: StatusEffectType): number {
    return effects
      .filter(e => e.type === type)
      .reduce((sum, e) => sum + e.value, 0);
  }

  /** 目標是否被控制（無法行動） */
  isControlled(effects: ActiveStatusEffect[]): boolean {
    return effects.some(e => CC_EFFECTS.has(e.type));
  }

  /** 目標是否處於隱身狀態 */
  isStealthed(effects: ActiveStatusEffect[]): boolean {
    return effects.some(e => e.type === 'stealth');
  }

  /** 目標是否無敵 */
  isInvincible(effects: ActiveStatusEffect[]): boolean {
    return effects.some(e => e.type === 'invincible');
  }

  /** 取得傷害減免總百分比 */
  getDamageReduction(effects: ActiveStatusEffect[]): number {
    let reduction = 0;

    // 防禦上升
    reduction += this.getEffectValue(effects, 'damage_reduction');

    // 護盾（護盾不是百分比減免，而是吸收固定量）
    // 在戰鬥系統中單獨處理

    return Math.min(reduction, 80); // 最多 80% 減免
  }

  /** 計算護盾吸收量 */
  absorbWithShield(effects: ActiveStatusEffect[], damage: number): {
    absorbedDamage: number;
    remainingDamage: number;
  } {
    let remaining = damage;

    for (let i = effects.length - 1; i >= 0; i--) {
      const eff = effects[i];
      if (eff.type === 'shield' && remaining > 0) {
        if (eff.value >= remaining) {
          eff.value -= remaining;
          const absorbed = remaining;
          remaining = 0;

          if (eff.value <= 0) {
            effects.splice(i, 1);
          }
          return { absorbedDamage: absorbed, remainingDamage: 0 };
        } else {
          remaining -= eff.value;
          const absorbed = eff.value;
          effects.splice(i, 1);
          return { absorbedDamage: absorbed, remainingDamage: remaining };
        }
      }
    }

    return { absorbedDamage: 0, remainingDamage: damage };
  }

  // ──────────────────────────────────────────────────────────
  //  工具函式
  // ──────────────────────────────────────────────────────────

  /** 效果中文名稱 */
  effectName(type: StatusEffectType): string {
    const names: Record<StatusEffectType, string> = {
      poison: '中毒',
      burn: '灼燒',
      slow: '減速',
      stun: '暈眩',
      fear: '恐懼',
      bleed: '流血',
      silence: '沉默',
      freeze: '冰凍',
      atk_up: '攻擊上升',
      def_up: '防禦上升',
      matk_up: '魔攻上升',
      mdef_up: '魔防上升',
      atk_down: '攻擊下降',
      def_down: '防禦下降',
      matk_down: '魔攻下降',
      mdef_down: '魔防下降',
      dodge_up: '閃避上升',
      crit_up: '暴擊上升',
      speed_up: '速度上升',
      regen: '持續回血',
      mana_regen: '魔力回復',
      shield: '護盾',
      taunt: '挑釁',
      counter: '反擊架勢',
      stealth: '隱身',
      mana_shield: '魔力盾',
      thorns: '荊棘',
      mark: '標記',
      damage_reduction: '傷害減免',
      heal_reduction: '治癒減弱',
      invincible: '無敵',
      unyielding: '不屈',
    };
    return names[type] ?? type;
  }

  /** 格式化效果列表為文字（用於狀態顯示） */
  formatEffects(effects: ActiveStatusEffect[]): string {
    if (effects.length === 0) return '無';

    return effects.map(e => {
      const name = this.effectName(e.type);
      const dur = e.remainingDuration;
      return `${name}(${dur}回合)`;
    }).join('、');
  }
}
