// AI Prompt 建構器 — 為 AI Agent 建構遊戲情境 prompt
// 所有 prompt 內容使用繁體中文

import type { Character, CombatantState, CombatState, GuardianDef } from '@game/shared';
import { CLASS_DEFS, SKILL_DEFS } from '@game/shared';
import { GUARDIAN_DEFS } from '../game/guardian.js';

// ============================================================
//  探索模式 Prompt
// ============================================================

/**
 * 建構探索模式的 prompt
 * 包含：角色資訊、房間描述、可見出口/物品/NPC/怪物/玩家、隊伍資訊
 */
export function buildExplorePrompt(
  character: Character,
  roomInfo: {
    name: string;
    description: string;
    exits: { direction: string }[];
    monsters: { id: string; name: string; level: number }[];
    npcs: { id: string; name: string; title: string }[];
    players: { id: string; name: string; level: number }[];
    items: { id: string; name: string }[];
  },
  partyMemberIds: string[] = [],
  guardianHint?: string | null,
): string {
  const className = CLASS_DEFS[character.classId]?.name ?? '冒險者';

  const lines: string[] = [];

  // ── 角色基本資訊 ──
  lines.push(`你是「${character.name}」，一名 Lv${character.level} 的${className}。`);
  lines.push(`你的個性：勇敢但謹慎，喜歡探索未知。`);

  // ── 守護靈資訊 ──
  if (character.guardianId) {
    const guardianDef = GUARDIAN_DEFS[character.guardianId];
    if (guardianDef) {
      lines.push(`你的守護靈是「${guardianDef.name}」，親密度：${character.guardianAffinity ?? 0}/100。`);
      lines.push(`守護靈性格：${guardianDef.personality}`);
      lines.push(`請以守護靈的口吻偶爾提供建議，根據其路線（${guardianDef.route}）給出相關提示。`);
    }
  }

  lines.push('');

  // ── 當前位置 ──
  lines.push(`【當前位置】${roomInfo.name}`);
  lines.push(roomInfo.description);
  lines.push('');

  // ── 角色狀態 ──
  const resourceLabel = getResourceLabelForPrompt(character.resourceType);
  lines.push(`【你的狀態】HP: ${character.hp}/${character.maxHp}  ${resourceLabel}: ${character.resource}/${character.maxResource}`);
  lines.push(`【金幣】${character.gold}`);
  lines.push('');

  // ── 可見出口 ──
  if (roomInfo.exits.length > 0) {
    const exitNames = roomInfo.exits.map(e => directionToChinese(e.direction));
    lines.push(`【可見出口】${exitNames.join('、')}`);
  }

  // ── 可見物品 ──
  if (roomInfo.items.length > 0) {
    const itemNames = roomInfo.items.map(i => i.name);
    lines.push(`【地上物品】${itemNames.join('、')}`);
  }

  // ── NPC ──
  if (roomInfo.npcs.length > 0) {
    const npcDescs = roomInfo.npcs.map(n => `${n.name}（${n.title}）`);
    lines.push(`【場景中的人物】${npcDescs.join('、')}`);
  }

  // ── 怪物 ──
  if (roomInfo.monsters.length > 0) {
    const monsterDescs = roomInfo.monsters.map(m => `${m.name} Lv${m.level}`);
    lines.push(`【附近的怪物】${monsterDescs.join('、')}`);
  }

  // ── 其他玩家 ──
  if (roomInfo.players.length > 0) {
    const playerDescs = roomInfo.players
      .filter(p => p.id !== character.id)
      .map(p => `${p.name}（Lv${p.level}）`);
    if (playerDescs.length > 0) {
      lines.push(`【其他冒險者】${playerDescs.join('、')}`);
    }
  }

  // ── 隊伍資訊 ──
  if (partyMemberIds.length > 1) {
    lines.push(`【隊伍】你目前在 ${partyMemberIds.length} 人的隊伍中。`);
  }

  // ── 守護靈提示 ──
  // 不將具體的隱藏事件結果放入 prompt，僅傳遞氛圍性暗示
  if (guardianHint) {
    lines.push('');
    lines.push(`【守護靈感知】你的守護靈似乎感覺到了什麼不尋常的氣息……它建議你仔細探索這個區域。`);
  }

  lines.push('');

  // ── 可用指令 ──
  lines.push('請選擇下一步行動，回覆一個指令：');
  lines.push('（可用指令：go <方向> / look / take <物品> / talk <NPC> / attack <怪物> / skill <技能> [目標] / use <物品> / say <訊息>）');
  lines.push('只回覆指令本身，例如：go north');

  return lines.join('\n');
}

// ============================================================
//  戰鬥模式 Prompt
// ============================================================

/**
 * 建構戰鬥模式的 prompt
 * 包含：角色資訊、隊伍狀態、敵人狀態、可用技能、隊伍資訊
 */
export function buildCombatPrompt(
  character: Character,
  combatState: CombatState,
  partyMemberIds: string[] = [],
): string {
  const className = CLASS_DEFS[character.classId]?.name ?? '冒險者';

  const lines: string[] = [];

  // ── 基本資訊 ──
  lines.push(`你是「${character.name}」，一名 Lv${character.level} 的${className}。`);
  lines.push(`你正在戰鬥中！第 ${combatState.round} 回合。`);
  lines.push('');

  // ── 我方隊伍 ──
  lines.push('【我方隊伍】');
  for (const p of combatState.playerTeam) {
    const isMe = p.id === character.id ? ' [你]' : '';
    const status = p.isDead ? '（已陣亡）' : '';
    const hpBar = buildHpBar(p.hp, p.maxHp);
    const pResLabel = getResourceLabelForPrompt(p.resourceType);
    lines.push(`  ${p.name}${isMe} ${hpBar} HP: ${p.hp}/${p.maxHp}  ${pResLabel}: ${p.resource}/${p.maxResource} ${status}`);

    if (p.activeEffects.length > 0) {
      const effects = p.activeEffects.map(e => effectTypeToChinese(e.type));
      lines.push(`    狀態效果：${effects.join('、')}`);
    }
  }
  lines.push('');

  // ── 敵方 ──
  lines.push('【敵方】');
  for (const e of combatState.enemyTeam) {
    const status = e.isDead ? '（已陣亡）' : `（${hpDescription(e.hp, e.maxHp)}）`;
    lines.push(`  ${e.name} Lv${e.level} ${status}`);

    if (!e.isDead && e.activeEffects.length > 0) {
      const effects = e.activeEffects.map(eff => effectTypeToChinese(eff.type));
      lines.push(`    狀態效果：${effects.join('、')}`);
    }
  }
  lines.push('');

  // ── 自身狀態 ──
  const combatResourceLabel = getResourceLabelForPrompt(character.resourceType);
  lines.push(`【你的狀態】HP: ${character.hp}/${character.maxHp}  ${combatResourceLabel}: ${character.resource}/${character.maxResource}`);

  // ── 隊伍資訊 ──
  if (partyMemberIds.length > 1) {
    lines.push(`【隊伍人數】${partyMemberIds.length} 人`);
  }

  // ── 可用技能 ──
  const availableSkills = getAvailableSkillsForPrompt(character);
  if (availableSkills.length > 0) {
    lines.push('');
    lines.push('【可用技能】');
    for (const skill of availableSkills) {
      const resourceNote = skill.resourceCost > character.resource ? '（資源不足）' : '';
      lines.push(`  ${skill.name}（消耗: ${skill.resourceCost}）— ${skill.description}${resourceNote}`);
    }
  }

  // ── 最近戰鬥紀錄 ──
  if (combatState.actionLog.length > 0) {
    const recentLogs = combatState.actionLog.slice(-5);
    lines.push('');
    lines.push('【最近戰況】');
    for (const log of recentLogs) {
      lines.push(`  ${log}`);
    }
  }

  lines.push('');

  // ── 行動指示 ──
  lines.push('請選擇行動，回覆格式：');
  lines.push('  攻擊 <目標名> — 普通攻擊');
  lines.push('  <技能名> <目標名> — 使用技能');
  lines.push('  防禦 — 防禦姿態');
  lines.push('  逃跑 — 嘗試逃離戰鬥');
  lines.push('');
  lines.push('只回覆指令，例如：重擊 哥布林首領');

  return lines.join('\n');
}

// ============================================================
//  輔助函式
// ============================================================

/** 方向英文轉中文 */
function directionToChinese(dir: string): string {
  const map: Record<string, string> = {
    north: '北', south: '南', east: '東', west: '西',
    up: '上', down: '下',
  };
  return map[dir] ?? dir;
}

/** 效果類型轉中文 */
function effectTypeToChinese(type: string): string {
  const map: Record<string, string> = {
    poison: '中毒',
    burn: '灼燒',
    bleed: '流血',
    stun: '暈眩',
    freeze: '冰凍',
    sleep: '睡眠',
    silence: '沉默',
    blind: '致盲',
    slow: '減速',
    weaken: '虛弱',
    regen: '再生',
    shield: '護盾',
    taunt: '挑釁',
    damage_reduction: '傷害減免',
    invincible: '無敵',
    haste: '加速',
    strength_up: '力量提升',
    defense_up: '防禦提升',
  };
  return map[type] ?? type;
}

/** 根據 HP 百分比產生描述 */
function hpDescription(hp: number, maxHp: number): string {
  const percent = maxHp > 0 ? (hp / maxHp) * 100 : 0;
  if (percent > 75) return '健康';
  if (percent > 50) return '輕傷';
  if (percent > 25) return '受傷';
  if (percent > 0) return '瀕死';
  return '已倒下';
}

/** 產生簡易 HP 條 */
function buildHpBar(hp: number, maxHp: number): string {
  const total = 10;
  const filled = maxHp > 0 ? Math.round((hp / maxHp) * total) : 0;
  const empty = total - filled;
  return `[${'█'.repeat(filled)}${'░'.repeat(empty)}]`;
}

/** 取得角色可用的技能（供 prompt 使用） */
function getAvailableSkillsForPrompt(
  character: Character,
): { name: string; resourceCost: number; description: string }[] {
  const skills: { name: string; resourceCost: number; description: string }[] = [];

  for (const [_skillId, skillDef] of Object.entries(SKILL_DEFS)) {
    if (skillDef.type !== 'active') continue;

    // 檢查是否為該職業或冒險者通用技能
    if (skillDef.classId !== character.classId && skillDef.classId !== 'adventurer') continue;

    // 檢查等級需求
    if (skillDef.learnLevel > character.level) continue;

    skills.push({
      name: skillDef.name,
      resourceCost: skillDef.resourceCost,
      description: skillDef.description,
    });
  }

  return skills;
}

// ============================================================
//  守護靈系統 Prompt
// ============================================================

/**
 * 建構包含守護靈的系統 prompt
 * 當玩家有守護靈時，AI 會以守護靈的身份提供額外的角色扮演
 */
export function buildGuardianSystemPrompt(character: Character): string | null {
  if (!character.guardianId) return null;

  const guardianDef = GUARDIAN_DEFS[character.guardianId];
  if (!guardianDef) return null;

  const affinity = character.guardianAffinity ?? 0;

  const lines: string[] = [];
  lines.push(`你同時扮演玩家的守護靈「${guardianDef.name}」。`);
  lines.push(`守護靈的身份：${guardianDef.description}`);
  lines.push(`守護靈的說話風格：${guardianDef.personality}`);
  lines.push(`感知路線：${guardianDef.route}（${routeDescription(guardianDef.route)}）`);
  lines.push(`當前親密度：${affinity}/100`);
  lines.push('');
  lines.push('守護靈行為準則：');
  lines.push('- 在場景描述後，偶爾以守護靈的口吻補充感知到的資訊');
  lines.push('- 根據感知路線提供對應類型的提示（生物/寶藏/靈魂）');
  lines.push('- 親密度越高，給出的提示越詳細和有用');
  lines.push('- 保持角色扮演的沉浸感，不要打破第四面牆');

  if (affinity < 30) {
    lines.push('- 目前親密度較低，守護靈的態度比較冷淡，提示較為簡略');
  } else if (affinity < 70) {
    lines.push('- 守護靈已經開始信任玩家，會給出更多建議');
  } else {
    lines.push('- 守護靈與玩家羈絆深厚，會主動分享更多秘密和詳細提示');
  }

  return lines.join('\n');
}

/** 資源類型對應的顯示名稱 */
function getResourceLabelForPrompt(resourceType?: string): string {
  const map: Record<string, string> = {
    mp: 'MP',
    rage: '怒氣',
    energy: '能量',
    faith: '信仰',
  };
  return map[resourceType ?? 'mp'] ?? 'MP';
}

/** 路線說明 */
function routeDescription(route: string): string {
  const map: Record<string, string> = {
    creature: '能感知隱藏的生物、陷阱與伏擊',
    treasure: '能感知隱藏的物品、寶箱與秘密通道',
    spirit: '能感知NPC的秘密、幽靈NPC與被遺忘的知識',
  };
  return map[route] ?? route;
}
