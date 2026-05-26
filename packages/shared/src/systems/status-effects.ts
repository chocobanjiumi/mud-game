import type { StatusEffectType } from '../types/skill.js';
import { getStatusIconRect } from '../constants/status-icons.js';

export type EffectImplementationStatus = 'implemented' | 'partial' | 'visual_only' | 'disabled';
export type StatusEffectCategory = 'buff' | 'debuff' | 'control' | 'dot' | 'hot' | 'shield' | 'special';

export interface StatusEffectDef {
  type: StatusEffectType;
  name: string;
  category: StatusEffectCategory;
  polarity: 'positive' | 'negative' | 'neutral';
  stackRule: 'refresh' | 'replace_stronger' | 'stack_by_source' | 'stack_value' | 'unique';
  maxStacks?: number;
  dispellable: boolean;
  cleansable: boolean;
  implementationStatus: EffectImplementationStatus;
  icon?: ReturnType<typeof getStatusIconRect>;
  description: string;
}

export const STATUS_EFFECT_DEFS: Record<StatusEffectType, StatusEffectDef> = {
  poison: effect('poison', '中毒', 'dot', 'negative', 'stack_by_source', true, true, 'implemented', '每 tick 受到毒性傷害。'),
  burn: effect('burn', '燃燒', 'dot', 'negative', 'stack_by_source', true, true, 'implemented', '每 tick 受到火焰傷害。'),
  bleed: effect('bleed', '流血', 'dot', 'negative', 'stack_by_source', true, true, 'implemented', '每 tick 受到流血傷害。'),
  regen: effect('regen', '持續回血', 'hot', 'positive', 'stack_by_source', true, false, 'implemented', '每 tick 回復生命。'),
  mana_regen: effect('mana_regen', '魔力回復', 'hot', 'positive', 'stack_by_source', true, false, 'implemented', '每 tick 回復魔力或資源。'),
  stun: effect('stun', '暈眩', 'control', 'negative', 'replace_stronger', false, true, 'implemented', '無法行動。'),
  fear: effect('fear', '恐懼', 'control', 'negative', 'replace_stronger', false, true, 'implemented', '無法行動。'),
  freeze: effect('freeze', '冰凍', 'control', 'negative', 'replace_stronger', false, true, 'implemented', '無法行動。'),
  silence: effect('silence', '沉默', 'control', 'negative', 'replace_stronger', false, true, 'implemented', '限制施法與技能。'),
  slow: effect('slow', '減速', 'debuff', 'negative', 'replace_stronger', false, true, 'implemented', '降低行動速度。'),
  speed_up: effect('speed_up', '加速', 'buff', 'positive', 'replace_stronger', true, false, 'implemented', '提高行動速度。'),
  damage_reduction: effect('damage_reduction', '傷害減免', 'shield', 'positive', 'replace_stronger', true, false, 'implemented', '降低受到的傷害。'),
  shield: effect('shield', '護盾', 'shield', 'positive', 'stack_value', true, false, 'implemented', '吸收受到的傷害。'),
  mana_shield: effect('mana_shield', '魔力護盾', 'shield', 'positive', 'replace_stronger', true, false, 'implemented', '以魔力吸收部分傷害。'),
  invincible: effect('invincible', '無敵', 'shield', 'positive', 'unique', false, false, 'implemented', '免疫傷害。'),
  mark: effect('mark', '標記', 'debuff', 'negative', 'replace_stronger', false, true, 'implemented', '受到特定技能額外傷害。'),
  taunt: effect('taunt', '挑釁', 'debuff', 'negative', 'replace_stronger', false, true, 'implemented', '優先攻擊挑釁來源。'),
  next_shot_damage: effect('next_shot_damage', '蓄勢射擊', 'buff', 'positive', 'unique', true, false, 'implemented', '下一次射擊額外傷害。'),
  atk_up: effect('atk_up', '攻擊提升', 'buff', 'positive', 'replace_stronger', true, false, 'implemented', '提高攻擊力。'),
  matk_up: effect('matk_up', '魔攻提升', 'buff', 'positive', 'replace_stronger', true, false, 'implemented', '提高魔法攻擊力。'),
  def_up: effect('def_up', '防禦提升', 'buff', 'positive', 'replace_stronger', true, false, 'implemented', '提高防禦力。'),
  mdef_up: effect('mdef_up', '魔防提升', 'buff', 'positive', 'replace_stronger', true, false, 'implemented', '提高魔法防禦力。'),
  dodge_up: effect('dodge_up', '閃避提升', 'buff', 'positive', 'replace_stronger', true, false, 'implemented', '提高閃避率。'),
  crit_up: effect('crit_up', '暴擊提升', 'buff', 'positive', 'replace_stronger', true, false, 'implemented', '提高暴擊率。'),
  atk_down: effect('atk_down', '攻擊下降', 'debuff', 'negative', 'replace_stronger', false, true, 'implemented', '降低攻擊力。'),
  def_down: effect('def_down', '破甲', 'debuff', 'negative', 'replace_stronger', false, true, 'implemented', '降低防禦力。'),
  matk_down: effect('matk_down', '魔攻下降', 'debuff', 'negative', 'replace_stronger', false, true, 'implemented', '降低魔法攻擊力。'),
  mdef_down: effect('mdef_down', '魔防下降', 'debuff', 'negative', 'replace_stronger', false, true, 'implemented', '降低魔法防禦力。'),
  heal_reduction: effect('heal_reduction', '治療壓制', 'debuff', 'negative', 'replace_stronger', false, true, 'partial', '降低受到的治療。'),
  thorns: effect('thorns', '荊棘反傷', 'buff', 'positive', 'replace_stronger', true, false, 'partial', '受到近戰攻擊時反傷。'),
  counter: effect('counter', '反擊架勢', 'buff', 'positive', 'unique', true, false, 'partial', '受到攻擊時可反擊。'),
  stealth: effect('stealth', '隱身', 'buff', 'positive', 'unique', true, false, 'partial', '降低被指定為目標的機率。'),
  unyielding: effect('unyielding', '不屈', 'buff', 'positive', 'unique', false, false, 'partial', '瀕死時保留生存能力。'),
};

export function getStatusEffectDef(type: StatusEffectType): StatusEffectDef {
  return STATUS_EFFECT_DEFS[type];
}

export function getStatusEffectName(type: StatusEffectType): string {
  return STATUS_EFFECT_DEFS[type]?.name ?? type;
}

export function isNegativeStatusEffect(type: StatusEffectType): boolean {
  return STATUS_EFFECT_DEFS[type]?.polarity === 'negative';
}

export function isPositiveStatusEffect(type: StatusEffectType): boolean {
  return STATUS_EFFECT_DEFS[type]?.polarity === 'positive';
}

function effect(
  type: StatusEffectType,
  name: string,
  category: StatusEffectCategory,
  polarity: StatusEffectDef['polarity'],
  stackRule: StatusEffectDef['stackRule'],
  dispellable: boolean,
  cleansable: boolean,
  implementationStatus: EffectImplementationStatus,
  description: string,
): StatusEffectDef {
  return {
    type,
    name,
    category,
    polarity,
    stackRule,
    dispellable,
    cleansable,
    implementationStatus,
    icon: getStatusIconRect(type),
    description,
  };
}
