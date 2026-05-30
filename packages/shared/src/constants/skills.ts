// 技能定義 - 所有職業的技能資料

import type { ClassId } from '../types/player.js';
import type { SkillAttackSource, SkillDef, SkillImplementationStatus, SkillScaling, SkillTag, SkillTargetType, SkillUsageContext, StatusEffectType } from '../types/skill.js';
import { CLASS_DEFS } from './classes.js';
import { FAITH_DEFS, RACE_DEFS } from './origins.js';

import type { RawSkillDef } from './skills/types.js';

export interface ClassBuildDef {
  id: string;
  classId: ClassId;
  name: string;
  skillTags: SkillTag[];
  affixSkillTags: SkillTag[];
  description: string;
}

const COMMON_ORIGIN_SKILL_ICON_IDS = [
  'slash',
  'guard',
  'first_aid',
  'inspect',
  'survival',
  'pack_sense',
  'field_awareness',
  'steady_hands',
  'desperate_strike',
  'race_human_adaptability',
  'race_elf_keen_senses',
  'race_dwarf_stoneblood',
  'race_orc_battleblood',
  'race_halfling_lucky_steps',
  'race_dragonborn_dragonblood',
  'race_shadowkin_shadow_affinity',
  'faith_aelora_dawn_grace',
  'faith_karvos_battle_fervor',
  'faith_ithern_whispering_pages',
  'faith_mirak_golden_road',
  'faith_virdan_forest_stride',
  'faith_shalan_moon_whisper',
  'faith_talorn_stormblood',
  'faith_oser_dead_whispers',
  'faith_brokk_forgeheart',
  'faith_nesha_forbidden_echo',
] as const;

const COMMON_ORIGIN_SKILL_ICON_PATHS: Record<string, string> = Object.fromEntries(
  COMMON_ORIGIN_SKILL_ICON_IDS.map(skillId => [skillId, `/images/skills/icons/${skillId}.png`]),
);

const STARTER_SKILL_ICON_PATHS: Record<string, string> = {
  ...COMMON_ORIGIN_SKILL_ICON_PATHS,
  warrior_slash: '/images/skills/icons/warrior_slash.png',
  iron_wall: '/images/skills/icons/iron_wall.png',
  taunt: '/images/skills/icons/taunt.png',
  blade_aura: '/images/skills/icons/blade_aura.png',
  war_cry: '/images/skills/icons/war_cry.png',
  power_strike: '/images/skills/icons/power_strike.png',
  counter_stance: '/images/skills/icons/counter_stance.png',
  magic_missile: '/images/skills/icons/magic_missile.png',
  mana_shield: '/images/skills/icons/mana_shield.png',
  fireball: '/images/skills/icons/fireball.png',
  frost_nova: '/images/skills/icons/frost_nova.png',
  elemental_mastery: '/images/skills/icons/elemental_mastery.png',
  lightning: '/images/skills/icons/lightning.png',
  meditation: '/images/skills/icons/meditation.png',
  precise_shot: '/images/skills/icons/precise_shot.png',
  quick_step: '/images/skills/icons/quick_step.png',
  ranger_scout: '/images/skills/icons/ranger_scout.png',
  poison_arrow: '/images/skills/icons/poison_arrow.png',
  trap: '/images/skills/icons/trap.png',
  critical_edge: '/images/skills/icons/critical_edge.png',
  barrage: '/images/skills/icons/barrage.png',
  holy_light: '/images/skills/icons/holy_light.png',
  heal: '/images/skills/icons/heal.png',
  blessing: '/images/skills/icons/divine_shield.png',
  purify: '/images/skills/icons/cleanse.png',
  priest_holy_bell: '/images/skills/icons/holy_bell.png',
  mass_heal: '/images/skills/icons/mass_heal.png',
  divine_grace: '/images/skills/icons/exorcism_ward.png',
};

export const CLASS_BUILD_DEFS: Partial<Record<ClassId, ClassBuildDef[]>> = {
  swordsman: [
    { id: 'swordsman_vanguard', classId: 'swordsman', name: '前衛守勢', skillTags: ['defense', 'control'], affixSkillTags: ['defense', 'control'], description: '以鐵壁、血性復甦與反擊架勢穩住前線。' },
    { id: 'swordsman_battlecry', classId: 'swordsman', name: '戰吼壓制', skillTags: ['burst', 'support'], affixSkillTags: ['burst', 'resource'], description: '用戰吼與重擊建立短爆發節奏。' },
  ],
  mage: [
    { id: 'mage_elementalist', classId: 'mage', name: '元素爆破', skillTags: ['magical', 'aoe'], affixSkillTags: ['burst', 'resource'], description: '以火、冰、雷輪轉製造範圍魔法壓力。' },
    { id: 'mage_arcane_guard', classId: 'mage', name: '魔盾迴路', skillTags: ['defense', 'resource'], affixSkillTags: ['defense', 'resource'], description: '用魔力盾與冥想拉長施法續航。' },
  ],
  ranger: [
    { id: 'ranger_marksman', classId: 'ranger', name: '精準狙擊', skillTags: ['single_target', 'burst'], affixSkillTags: ['burst', 'resource'], description: '用精準射擊與專注齊射打出單體爆發。' },
    { id: 'ranger_trapper', classId: 'ranger', name: '陷阱毒箭', skillTags: ['control', 'nature'], affixSkillTags: ['control', 'resource'], description: '以陷阱、毒箭和機動性處理怪物節奏。' },
  ],
  priest: [
    { id: 'priest_shepherd', classId: 'priest', name: '聖光牧者', skillTags: ['heal', 'support'], affixSkillTags: ['defense', 'resource'], description: '專注治療、淨化與團隊增益。' },
    { id: 'priest_smite', classId: 'priest', name: '懲戒信徒', skillTags: ['light', 'damage'], affixSkillTags: ['burst', 'resource'], description: '以聖光攻擊和祝福建立攻守節奏。' },
  ],
  knight: [
    { id: 'knight_bulwark', classId: 'knight', name: '聖盾壁壘', skillTags: ['defense', 'support'], affixSkillTags: ['defense', 'resource'], description: '以騎乘守護、聖盾術與最後堡壘築起鐵壁防線，守護隊伍安全。偏重 stability / guardPower。' },
    { id: 'knight_judicator', classId: 'knight', name: '審判騎槍', skillTags: ['light', 'interrupt', 'burst'], affixSkillTags: ['control', 'burst'], description: '以衝鋒、制裁之錘與聖裁天降打出毀滅性爆發。偏重 chargePower。' },
  ],
  berserker: [
    { id: 'berserker_bloodlust', classId: 'berserker', name: '嗜血狂怒', skillTags: ['burst', 'damage'], affixSkillTags: ['burst', 'resource'], description: '以狂暴連擊、毀滅劈斬與修羅化身追求極致爆發。快速壓低 HP 觸發高刻度加成。' },
    { id: 'berserker_survivor', classId: 'berserker', name: '瀕死求生', skillTags: ['defense', 'resource'], affixSkillTags: ['defense', 'resource'], description: '以嗜血、血肉化盾與痛覺錨定在低血量邊緣持續戰鬥。' },
  ],
  sword_saint: [
    { id: 'sword_saint_iaijutsu', classId: 'sword_saint', name: '拔刀會心', skillTags: ['single_target', 'burst'], affixSkillTags: ['burst', 'resource'], description: '以拔刀術與天斷在攻勢中追求單體極限爆發，偏重攻勢→守勢的快速流轉。' },
    { id: 'sword_saint_afterimage', classId: 'sword_saint', name: '殘影連斬', skillTags: ['defense', 'control'], affixSkillTags: ['defense', 'control'], description: '以無雙連斬、空步與心斬維持三姿態完整流轉，追求持續戰鬥節奏。' },
  ],
  archmage: [
    { id: 'archmage_cataclysm', classId: 'archmage', name: '元素風暴', skillTags: ['aoe', 'burst'], affixSkillTags: ['burst', 'resource'], description: '以三重鑄造和天啟鑄造追求元素反應的最大爆發。' },
    { id: 'archmage_arcane_engine', classId: 'archmage', name: '鑄造循環', skillTags: ['resource', 'defense'], affixSkillTags: ['resource', 'defense'], description: '以元素回流和精通維持鑄造框的高效循環。' },
  ],
  warlock: [
    { id: 'warlock_curse', classId: 'warlock', name: '魔偶攻勢', skillTags: ['summon', 'burst'], affixSkillTags: ['burst', 'resource'], description: '以魔偶攻擊模式、雙重指令和自爆追求最大輸出。' },
    { id: 'warlock_drain', classId: 'warlock', name: '魔偶戰術', skillTags: ['summon', 'defense'], affixSkillTags: ['defense', 'resource'], description: '以魔偶防禦/充能模式和跨房派遣靈活控場。' },
  ],
  chronomancer: [
    { id: 'chronomancer_lockdown', classId: 'chronomancer', name: '次元封鎖', skillTags: ['control', 'support'], affixSkillTags: ['control', 'resource'], description: '以次元壁壘和牽引控制戰場空間。' },
    { id: 'chronomancer_paradox', classId: 'chronomancer', name: '次元攻勢', skillTags: ['burst', 'damage'], affixSkillTags: ['burst', 'resource'], description: '以次元折疊、時空斷裂和崩塌追求跨房爆發。' },
  ],
  marksman: [
    { id: 'marksman_headshot', classId: 'marksman', name: '精準狙殺', skillTags: ['single_target', 'burst'], affixSkillTags: ['burst', 'resource'], description: '以瞄準和遠射追求超遠距離的致命一擊。偏重瞄準層數的累積與爆發。' },
    { id: 'marksman_suppression', classId: 'marksman', name: '箭雨壓制', skillTags: ['aoe', 'control'], affixSkillTags: ['control', 'resource'], description: '以連射、爆裂箭和追蹤箭覆蓋戰場。偏重不瞄準的快速連續火力。' },
  ],
  assassin: [
    { id: 'assassin_execution', classId: 'assassin', name: '暗殺連鎖', skillTags: ['burst', 'damage'], affixSkillTags: ['burst', 'resource'], description: '以暗殺、影步和死神之吻追求潛行後的致命爆發。偏重單體斬殺。' },
    { id: 'assassin_poison', classId: 'assassin', name: '暗影遊擊', skillTags: ['control', 'defense'], affixSkillTags: ['control', 'resource'], description: '以煙霧彈、暗影分身和毒刃維持潛行戰術。偏重持續騷擾和生存。' },
  ],
  beast_master: [
    { id: 'beast_master_pack', classId: 'beast_master', name: '獸王合擊', skillTags: ['single_target', 'burst'], affixSkillTags: ['burst', 'resource'], description: '以寵物衝鋒、野性共鳴和融合追求人獸合一的爆發。' },
    { id: 'beast_master_command', classId: 'beast_master', name: '馴獸戰術', skillTags: ['control', 'support'], affixSkillTags: ['control', 'defense'], description: '以寵物防守、派遣和獸王咆哮靈活控場。' },
  ],
  high_priest: [
    { id: 'high_priest_miracle', classId: 'high_priest', name: '聖殿治癒', skillTags: ['heal', 'summon'], affixSkillTags: ['defense', 'resource'], description: '以祭壇回血、升級和神聖屏障維持全隊生命。偏重祭壇防禦面。' },
    { id: 'high_priest_ward', classId: 'high_priest', name: '獻祭制裁', skillTags: ['damage', 'light'], affixSkillTags: ['burst', 'resource'], description: '以獻祭、獻祭強化和永恆聖殿追求祭壇攻擊面。偏重獻祭傷害。' },
  ],
  druid: [
    { id: 'druid_wildshape', classId: 'druid', name: '靈界救贖', skillTags: ['heal', 'support'], affixSkillTags: ['defense', 'resource'], description: '以靈魂牽引和集體牽引在靈界中拯救隊友。偏重復活和跨界治療。' },
    { id: 'druid_regrowth', classId: 'druid', name: '靈界戰術', skillTags: ['control', 'damage'], affixSkillTags: ['control', 'resource'], description: '以靈界放逐和靈界歸還衝擊控制戰場。偏重放逐和跨界進攻。' },
  ],
  inquisitor: [
    { id: 'inquisitor_verdict', classId: 'inquisitor', name: '審判收割', skillTags: ['light', 'burst'], affixSkillTags: ['burst', 'resource'], description: '以審判和天罰消耗罪業造成爆發傷害。偏重罪業轉傷害。' },
    { id: 'inquisitor_silence', classId: 'inquisitor', name: '赦免救贖', skillTags: ['heal', 'support'], affixSkillTags: ['defense', 'resource'], description: '以赦免和贖罪將罪業轉化為治療和資源。偏重罪業轉治療。' },
  ],
};

/** 所有技能定義 */
import { ADVENTURER_SKILL_DEFS } from './skills/adventurer.js';
import { ARCHMAGE_SKILL_DEFS } from './skills/archmage.js';
import { ASSASSIN_SKILL_DEFS } from './skills/assassin.js';
import { BEAST_MASTER_SKILL_DEFS } from './skills/beast_master.js';
import { BERSERKER_SKILL_DEFS } from './skills/berserker.js';
import { CHRONOMANCER_SKILL_DEFS } from './skills/chronomancer.js';
import { DRUID_SKILL_DEFS } from './skills/druid.js';
import { HIGH_PRIEST_SKILL_DEFS } from './skills/high_priest.js';
import { INQUISITOR_SKILL_DEFS } from './skills/inquisitor.js';
import { KNIGHT_SKILL_DEFS } from './skills/knight.js';
import { MAGE_SKILL_DEFS } from './skills/mage.js';
import { MARKSMAN_SKILL_DEFS } from './skills/marksman.js';
import { MONSTER_SKILL_DEFS } from './skills/monster.js';
import { PRIEST_SKILL_DEFS } from './skills/priest.js';
import { RANGER_SKILL_DEFS } from './skills/ranger.js';
import { SWORD_SAINT_SKILL_DEFS } from './skills/sword_saint.js';
import { SWORDSMAN_SKILL_DEFS } from './skills/swordsman.js';
import { WARLOCK_SKILL_DEFS } from './skills/warlock.js';

const RAW_SKILL_DEFS: Record<string, RawSkillDef> = {
  ...createSecondJobSkillExpansionDefs(),
  ...ADVENTURER_SKILL_DEFS,
  ...ARCHMAGE_SKILL_DEFS,
  ...ASSASSIN_SKILL_DEFS,
  ...BEAST_MASTER_SKILL_DEFS,
  ...BERSERKER_SKILL_DEFS,
  ...CHRONOMANCER_SKILL_DEFS,
  ...DRUID_SKILL_DEFS,
  ...HIGH_PRIEST_SKILL_DEFS,
  ...INQUISITOR_SKILL_DEFS,
  ...KNIGHT_SKILL_DEFS,
  ...MAGE_SKILL_DEFS,
  ...MARKSMAN_SKILL_DEFS,
  ...MONSTER_SKILL_DEFS,
  ...PRIEST_SKILL_DEFS,
  ...RANGER_SKILL_DEFS,
  ...SWORD_SAINT_SKILL_DEFS,
  ...SWORDSMAN_SKILL_DEFS,
  ...WARLOCK_SKILL_DEFS,
};

export const SKILL_DEFS: Record<string, SkillDef> = normalizeSkillDefs({
  ...RAW_SKILL_DEFS,
  ...createOriginPassiveSkillDefs(),
});

interface SecondJobSkillExpansion {
  classId: ClassId;
  resource: readonly [string, string, string, string];
  burst: readonly [string, string, string, string];
  survival: readonly [string, string, string, string];
  answer: readonly [string, string, string, string];
  damageType: 'physical' | 'magical';
  element: 'none' | 'fire' | 'light' | 'dark' | 'nature';
  scaling: 'atk' | 'matk';
}

function createSecondJobSkillExpansionDefs(): Record<string, RawSkillDef> {
  return {};
}

function normalizeSkillDefs(defs: Record<string, RawSkillDef>): Record<string, SkillDef> {
  return Object.fromEntries(
    Object.entries(defs).map(([id, def]) => {
      let normalized: SkillDef = {
        ...def,
        tags: normalizeSkillTags(def),
        attackSource: def.attackSource ?? inferSkillAttackSource(def),
        scaling: def.scaling ?? inferSkillScaling(def),
        usageContext: def.usageContext ?? inferSkillUsageContext(def),
        questUnlock: def.questUnlock ?? getClassQuestSkillUnlock(id),
        shortDescription: def.shortDescription ?? createShortSkillDescription(def),
        fullDescription: def.fullDescription ?? '',
        implementationStatus: def.implementationStatus ?? inferImplementationStatus(def),
        iconPath: def.iconPath ?? STARTER_SKILL_ICON_PATHS[id],
      };
      normalized = {
        ...normalized,
        description: createQualitySkillDescription(normalized),
      };
      normalized.fullDescription = createMechanicSkillDescription({
        ...normalized,
        description: def.fullDescription ?? normalized.description,
      });
      return [id, normalized];
    }),
  );
}

function inferImplementationStatus(def: RawSkillDef): SkillImplementationStatus {
  if (def.classId === 'monster') return 'implemented';
  const classDef = CLASS_DEFS[def.classId];
  return classDef?.tier && classDef.tier >= 2 ? 'draft' : 'implemented';
}

function createMechanicSkillDescription(def: SkillDef): string {
  if (def.type === 'passive') {
    return [
      '類型: 被動技能。',
      `解鎖: Lv.${def.learnLevel}。`,
      `目標: ${targetTypeLabel(def)}。`,
      `範圍: ${scopeLabel(def)}。`,
      `效果: ${effectSummary(def)}。`,
      `跨房: ${crossRoomLabel(def)}。`,
      `戰術用途: ${createShortSkillDescription(def)}`
    ].join(' ');
  }

  return [
    `消耗: ${def.resourceCost} ${resourceLabelForClass(def.classId)}。`,
    `冷卻: ${def.cooldown} tick。`,
    `目標: ${targetTypeLabel(def)}。`,
    `範圍: ${scopeLabel(def)}。`,
    `效果: ${effectSummary(def)}。`,
    `持續: ${durationLabel(def)}。`,
    `跨房: ${crossRoomLabel(def)}。`,
    `資源返還: ${resourceReturnLabel(def)}。`,
    `限制: ${restrictionLabel(def)}。`,
    `風險: ${riskLabel(def)}。`,
    `戰術用途: ${createShortSkillDescription(def)}`
  ].join(' ');
}

function createQualitySkillDescription(def: SkillDef): string {
  const minimum = skillDescriptionMinimum(def);
  if (countCjkChars(def.description) >= minimum) return def.description;

  const timing = def.usageContext === 'both'
    ? '戰鬥中與非戰鬥狀態都能評估使用'
    : def.usageContext === 'field'
      ? '非戰鬥探索或進房前準備時使用'
      : '戰鬥中依目標與冷卻節奏使用';
  const resource = def.type === 'passive'
    ? '不消耗主動資源'
    : `${resourceLabelForClass(def.classId)} -${def.resourceCost}`;
  return `${def.description} ${def.name}定位為${skillRoleLabel(def)}，${timing}；資源規則為${resource}，主要效果是${effectSummary(def)}，限制是${restrictionLabel(def)}，風險是${riskLabel(def)}`;
}

function skillDescriptionMinimum(def: SkillDef): number {
  if (def.learnLevel === 8 && ['swordsman', 'mage', 'ranger', 'priest'].includes(def.classId)) return 65;
  if (def.tags.includes('defense') || def.tags.includes('mobility') || def.tags.includes('control') || def.tags.includes('heal')) return 75;
  return 45;
}

function skillRoleLabel(def: SkillDef): string {
  if (def.type === 'passive') return '常駐被動強化';
  if (def.tags.includes('heal')) return '續航與救急治療';
  if (def.tags.includes('defense')) return '承傷、防護或生存窗口';
  if (def.tags.includes('control') || def.tags.includes('interrupt')) return '控制、打斷或拖延敵方節奏';
  if (def.tags.includes('aoe')) return '清理多目標與壓制房間';
  if (def.tags.includes('burst')) return '短時間爆發輸出';
  if (def.tags.includes('cross_room')) return '跨房先手與拉怪控制';
  return '穩定輸出或基礎戰鬥行動';
}

function countCjkChars(text: string): number {
  return [...text].filter(char => /[\u3400-\u9fff]/u.test(char)).length;
}

function resourceLabelForClass(classId: SkillDef['classId']): string {
  const resourceType = CLASS_DEFS[classId]?.resourceType;
  if (resourceType === 'rage') return '怒氣';
  if (resourceType === 'focus') return '專注';
  if (resourceType === 'faith') return '信仰';
  return 'MP';
}

function targetTypeLabel(def: SkillDef): string {
  const labels: Record<SkillTargetType, string> = {
    single_enemy: '單體敵人',
    all_enemies: '所有敵人',
    self: '自己',
    single_ally: '單體隊友',
    all_allies: '所有隊友',
  };
  return labels[def.targetType];
}

function scopeLabel(def: SkillDef): string {
  if (def.special?.areaScope === 'adjacent_cardinal') return '東西南北相鄰房';
  if (def.special?.crossRoom || def.special?.crossRoomRequiresScout) return '本房或指定相鄰方向';
  if (def.special?.areaScope === 'room') return '本房全房間';
  if (def.special?.areaScope === 'combat') return '目前戰鬥群體';
  if (def.targetType === 'all_enemies') return '目前戰鬥群體';
  if (def.targetType === 'all_allies') return '隊伍';
  return '本房/自身';
}

function effectSummary(def: SkillDef): string {
  const parts: string[] = [];
  if (def.multiplier > 0) {
    const percent = Math.round(def.multiplier * 100);
    parts.push(`${percent}% ${damageTypeLabel(def.damageType)}${def.element !== 'none' ? `/${def.element}` : ''}傷害`);
  }
  if (def.special?.isHeal) parts.push(`${Math.round(def.multiplier * 100)}% 治療`);
  if (def.special?.healPercent) parts.push(`回復最大 HP ${def.special.healPercent}%`);
  if (def.special?.removeDebuffs) parts.push('移除負面狀態');
  if (def.effects?.length) {
    parts.push(...def.effects.map(effect => `${effectTypeLabel(effect.type)} ${effect.value}${effect.duration > 0 ? `，持續 ${effect.duration} tick` : ''}`));
  }
  if (def.special?.interrupt) parts.push('可打斷預兆/施法');
  if (def.special?.dispelShield) parts.push('可驅散護盾');
  if (def.special?.trapExit) parts.push('設置出口陷阱');
  if (def.special?.scoutDirection) parts.push('偵查指定方向房間');
  if (parts.length === 0) return '依技能特殊規則生效';
  return parts.join('；');
}

function durationLabel(def: SkillDef): string {
  const durations = [
    ...(def.effects ?? []).map(effect => effect.duration).filter(duration => duration > 0),
    typeof def.special?.duration === 'number' ? def.special.duration : 0,
  ].filter(duration => duration > 0);
  if (durations.length === 0) return '立即';
  return `${Math.max(...durations)} tick`;
}

function crossRoomLabel(def: SkillDef): string {
  if (def.special?.areaScope === 'adjacent_cardinal') {
    const arrival = typeof def.special.arrivalTicks === 'number' ? `，命中後 arrivalTicks = ${def.special.arrivalTicks}` : '';
    return `可，影響東西南北相鄰房${arrival}`;
  }
  if (def.special?.crossRoomRequiresScout) {
    const arrival = typeof def.special.arrivalTicks === 'number' ? `，命中後 arrivalTicks = ${def.special.arrivalTicks}` : '';
    return `可，但需要先偵查目標房${arrival}`;
  }
  if (def.special?.crossRoom) {
    const arrival = typeof def.special.arrivalTicks === 'number' ? `，命中後 arrivalTicks = ${def.special.arrivalTicks}` : '';
    return `可，指定相鄰方向${arrival}`;
  }
  if (typeof def.special?.arrivalTicksDelta === 'number') {
    return `不直接跨房，但會使 approaching/陷阱目標 arrivalTicks ${signed(def.special.arrivalTicksDelta)}`;
  }
  return '否';
}

function resourceReturnLabel(def: SkillDef): string {
  const parts: string[] = [];
  for (const key of ['resourceGain', 'resourceGainOnHit', 'focusGainOnHit', 'focusGainOnMarkedHit', 'resourceGainPerHit', 'mpGainOnSpellHit', 'resourceGainOnTrigger'] as const) {
    const value = def.special?.[key];
    if (typeof value === 'number' && value > 0) parts.push(`${resourceGainLabel(key)} +${value}`);
  }
  return parts.length > 0 ? parts.join('；') : '無';
}

function restrictionLabel(def: SkillDef): string {
  const parts: string[] = [];
  if (typeof def.special?.faithMin === 'number') parts.push(`信仰至少 ${def.special.faithMin}`);
  if (typeof def.special?.faithMax === 'number') parts.push(`信仰最多 ${def.special.faithMax}`);
  if (def.special?.undeadOnlyBonus) parts.push('undead 目標有額外效果');
  if (def.special?.crossRoomRequiresScout) parts.push('跨房需先偵查');
  if (def.questUnlock) parts.push('需完成對應職業任務階段');
  return parts.length > 0 ? parts.join('；') : '無';
}

function riskLabel(def: SkillDef): string {
  if (def.special?.areaScope === 'adjacent_cardinal') return '會驚動多個相鄰房間，命中怪物可能進入 approaching。';
  if (def.special?.crossRoom || def.special?.crossRoomRequiresScout) return '跨房命中會讓怪物進入 approaching 並朝本房移動。';
  if (def.special?.trapExit) return '陷阱觸發會暴露出口壓力，怪物仍會延後抵達。';
  return '無額外拉怪風險。';
}

function damageTypeLabel(type: SkillDef['damageType']): string {
  if (type === 'physical') return '物理';
  if (type === 'magical') return '魔法';
  return '純粹';
}

function effectTypeLabel(type: StatusEffectType): string {
  const labels: Partial<Record<StatusEffectType, string>> = {
    poison: '中毒',
    burn: '燃燒',
    slow: '減速',
    stun: '暈眩',
    fear: '恐懼',
    bleed: '流血',
    silence: '沉默',
    freeze: '冰凍',
    shield: '護盾',
    taunt: '嘲諷',
    mark: '標記',
    damage_reduction: '傷害減免',
    mana_shield: '魔力護盾',
    dodge_up: '閃避提升',
    crit_up: '暴擊提升',
    speed_up: '速度提升',
    atk_up: '攻擊提升',
    def_up: '防禦提升',
    matk_up: '魔攻提升',
    mdef_up: '魔防提升',
    atk_down: '攻擊降低',
    def_down: '防禦降低',
    matk_down: '魔攻降低',
    mdef_down: '魔防降低',
    regen: 'HP 回復',
    mana_regen: 'MP 回復',
    thorns: '反傷',
    next_shot_damage: '下次射擊強化',
    heal_reduction: '治療壓制',
    invincible: '無敵',
    unyielding: '不屈',
    counter: '反擊',
    stealth: '潛行',
  };
  return labels[type] ?? type;
}

function resourceGainLabel(key: string): string {
  const labels: Record<string, string> = {
    resourceGain: '使用後回復',
    resourceGainOnHit: '命中回復',
    focusGainOnHit: '命中回復專注',
    focusGainOnMarkedHit: '命中標記目標回復專注',
    resourceGainPerHit: '每命中一名目標回復',
    mpGainOnSpellHit: '法術命中回復 MP',
    resourceGainOnTrigger: '觸發回復',
  };
  return labels[key] ?? key;
}

function signed(value: number): string {
  return value >= 0 ? `+${value}` : `${value}`;
}

function createShortSkillDescription(def: RawSkillDef): string {
  const [firstSentence] = def.description.split(/[。.!！?？]/);
  if (firstSentence && firstSentence.trim().length > 0) return `${firstSentence.trim()}。`;
  return def.description;
}

function normalizeSkillTags(def: RawSkillDef): SkillTag[] {
  return [...new Set([...(def.tags ?? []), ...inferSkillTags(def)])];
}

function inferSkillUsageContext(def: RawSkillDef): SkillUsageContext {
  if (def.type === 'passive') return 'both';
  if (def.id === 'inspect') return 'field';
  if (def.id === 'first_aid') return 'both';
  if (def.special?.isHeal && def.targetType === 'single_ally') return 'both';
  if (def.targetType === 'single_ally' || def.targetType === 'all_allies') return 'combat';
  if (def.targetType === 'single_enemy' || def.targetType === 'all_enemies') return 'combat';
  return 'combat';
}

function getClassQuestSkillUnlock(skillId: string): SkillDef['questUnlock'] | undefined {
  const questIdBySkillId: Record<string, string> = {
    dirty_trick: 'beginner_first_steps',
    divine_verdict: 'swordsman_to_knight',
    savage_interrupt: 'swordsman_to_berserker',
    mind_cut: 'swordsman_to_sword_saint',
    apocalypse_forge: 'mage_to_archmage',
    ultimate_golem: 'mage_to_warlock',
    dimensional_collapse: 'mage_to_chronomancer',
    sky_eagle_strike: 'ranger_to_marksman',
    deaths_kiss: 'ranger_to_assassin',
    beast_fusion: 'ranger_to_beast_master',
    eternal_temple: 'priest_to_high_priest',
    spirit_unity: 'priest_to_druid',
    final_judgment: 'priest_to_inquisitor',
  };
  const questId = questIdBySkillId[skillId];
  return questId ? { questId, requiredStatus: 'completed' } : undefined;
}

function inferSkillScaling(def: RawSkillDef): SkillScaling {
  const attackSource = def.attackSource ?? inferSkillAttackSource(def);
  if (def.special?.isHeal) return { stat: 'spellPower', coefficient: def.multiplier };
  if (attackSource === 'ranged_physical') return { stat: 'rangedAtk', coefficient: def.multiplier };
  if (attackSource === 'melee') return { stat: 'meleeAtk', coefficient: def.multiplier };
  if (attackSource === 'ranged_magical') return { stat: 'spellPower', coefficient: def.multiplier };
  if (def.effects?.some(effect => effect.type === 'shield' || effect.type === 'damage_reduction')) {
    return { stat: 'def', coefficient: Math.max(1, def.multiplier) };
  }
  return { stat: 'none', coefficient: def.multiplier };
}

function inferSkillAttackSource(def: RawSkillDef): SkillAttackSource {
  if (def.type === 'passive' || def.multiplier <= 0) return 'none';
  if (def.special?.isHeal || def.damageType === 'magical') return 'ranged_magical';
  if (def.damageType === 'physical' && (
    def.special?.crossRoom
    || def.special?.crossRoomRequiresScout
    || def.special?.areaScope === 'adjacent_cardinal'
    || def.id.includes('shot')
    || def.id.includes('arrow')
    || def.id.includes('barrage')
  )) return 'ranged_physical';
  if (def.damageType === 'physical') return 'melee';
  return 'none';
}

function inferSkillTags(def: RawSkillDef): SkillTag[] {
  const tags = new Set<SkillTag>();
  tags.add(def.type === 'passive' ? 'passive' : def.damageType);
  if (def.element !== 'none') tags.add(def.element);
  if (def.multiplier > 0 || def.damageType !== 'pure') tags.add('damage');
  if (def.targetType === 'all_enemies' || def.targetType === 'all_allies') tags.add('aoe');
  if (def.targetType === 'single_enemy' || def.targetType === 'single_ally') tags.add('single_target');
  if (def.special?.isHeal) tags.add('heal');
  if (def.targetType === 'self' || def.targetType === 'single_ally' || def.targetType === 'all_allies') tags.add('support');
  if (def.effects?.some(effect => effect.type.endsWith('_up'))) tags.add('buff');
  if (def.effects?.some(effect => effect.type.endsWith('_down') || effect.type === 'mark' || effect.type === 'poison' || effect.type === 'burn' || effect.type === 'bleed')) tags.add('debuff');
  if (def.effects?.some(effect => effect.type === 'stun' || effect.type === 'slow' || effect.type === 'freeze' || effect.type === 'fear' || effect.type === 'taunt' || effect.type === 'silence')) tags.add('control');
  if (def.effects?.some(effect =>
    effect.type === 'shield'
    || effect.type === 'mana_shield'
    || effect.type === 'damage_reduction'
    || effect.type === 'counter'
    || effect.type === 'invincible'
    || effect.type === 'unyielding'
    || effect.type === 'def_up'
    || effect.type === 'mdef_up'
    || effect.type === 'dodge_up'
  )) tags.add('defense');
  if (def.special?.interrupt) tags.add('interrupt');
  if (def.special?.dispelShield || def.special?.removeDebuffs) tags.add('dispel');
  if (def.special?.summon || def.id.includes('summon')) tags.add('summon');
  if (def.special?.crossRoom || def.special?.crossRoomRequiresScout || def.special?.areaScope === 'adjacent_cardinal') tags.add('cross_room');
  if (def.cooldown >= 5 || def.multiplier >= 2) tags.add('burst');
  if (def.resourceCost > 0) tags.add('resource');
  if (def.id.includes('step') || def.id.includes('dash') || def.id.includes('charge')) tags.add('mobility');
  return [...tags];
}

function createOriginPassiveSkillDefs(): Record<string, RawSkillDef> {
  const racePassives = Object.fromEntries(
    Object.values(RACE_DEFS).map((race) => [race.passiveSkillId, {
      id: race.passiveSkillId,
      name: race.passiveName,
      englishName: race.passiveSkillId,
      classId: 'adventurer' as const,
      learnLevel: 1,
      type: 'passive' as const,
      targetType: 'self' as const,
      resourceCost: 0,
      cooldown: 0,
      damageType: 'pure' as const,
      element: race.tags?.includes('dark') ? 'dark' as const : race.tags?.includes('nature') ? 'nature' as const : 'none' as const,
      multiplier: 0,
      tags: ['passive' as const],
      scaling: { stat: 'none' as const, coefficient: 0 },
      description: race.passiveDescription,
    }]),
  );

  const faithPassives = Object.fromEntries(
    Object.values(FAITH_DEFS).map((faith) => [faith.passiveSkillId, {
      id: faith.passiveSkillId,
      name: faith.passiveName,
      englishName: faith.passiveSkillId,
      classId: 'adventurer' as const,
      learnLevel: 1,
      type: 'passive' as const,
      targetType: 'self' as const,
      resourceCost: 0,
      cooldown: 0,
      damageType: 'pure' as const,
      element: faith.tags?.includes('light') ? 'light' as const : faith.tags?.includes('dark') ? 'dark' as const : faith.tags?.includes('nature') ? 'nature' as const : 'none' as const,
      multiplier: 0,
      tags: ['passive' as const],
      scaling: { stat: 'none' as const, coefficient: 0 },
      description: faith.passiveDescription,
    }]),
  );

  return {
    ...racePassives,
    ...faithPassives,
  };
}

// ─── 工具函式 ───

/** 按職業取得可學技能 */
export function getSkillsForClass(classId: ClassId): SkillDef[] {
  return Object.values(SKILL_DEFS).filter((s) => s.classId === classId);
}

/** 取得角色可用的所有技能（含前置職業的技能） */
export function getAllAvailableSkills(classId: ClassId): SkillDef[] {
  const classDef = CLASS_DEFS[classId];
  const skills = getSkillsForClass(classId);

  if (classDef?.parentClass) {
    skills.push(...getAllAvailableSkills(classDef.parentClass));
  }

  return skills;
}

/** 取得角色在指定等級可學的技能 */
export function getLearnableSkills(classId: ClassId, level: number, completedQuestIds: string[] = []): SkillDef[] {
  const completed = new Set(completedQuestIds);
  const classDef = CLASS_DEFS[classId];
  return getAllAvailableSkills(classId).filter((s) =>
    s.implementationStatus === 'implemented'
    && (classId === 'adventurer' || classDef?.tier === 0 || s.classId !== 'adventurer')
    && s.learnLevel <= level
    && (!s.questUnlock || s.questUnlock.requiredStatus !== 'completed' || completed.has(s.questUnlock.questId)),
  );
}

/** 根據 ID 取得技能定義 */
export function getSkillDef(skillId: string): SkillDef | undefined {
  return SKILL_DEFS[skillId];
}
