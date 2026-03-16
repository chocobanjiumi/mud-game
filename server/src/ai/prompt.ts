// AI Prompt 建構器 — 為 AI Agent 建構遊戲情境 prompt
// 所有 prompt 內容使用繁體中文

import type { Character, CombatantState, CombatState } from '@game/shared';
import { CLASS_DEFS, SKILL_DEFS } from '@game/shared';

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
): string {
  const className = CLASS_DEFS[character.classId]?.name ?? '冒險者';

  const lines: string[] = [];

  // ── 角色基本資訊 ──
  lines.push(`你是「${character.name}」，一名 Lv${character.level} 的${className}。`);
  lines.push(`你的個性：勇敢但謹慎，喜歡探索未知。`);
  lines.push('');

  // ── 當前位置 ──
  lines.push(`【當前位置】${roomInfo.name}`);
  lines.push(roomInfo.description);
  lines.push('');

  // ── 角色狀態 ──
  lines.push(`【你的狀態】HP: ${character.hp}/${character.maxHp}  MP: ${character.mp}/${character.maxMp}`);
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
    lines.push(`  ${p.name}${isMe} ${hpBar} HP: ${p.hp}/${p.maxHp}  MP: ${p.mp}/${p.maxMp} ${status}`);

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
  lines.push(`【你的狀態】HP: ${character.hp}/${character.maxHp}  MP: ${character.mp}/${character.maxMp}`);

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
      const mpNote = skill.mpCost > character.mp ? '（MP不足）' : '';
      lines.push(`  ${skill.name}（MP: ${skill.mpCost}）— ${skill.description}${mpNote}`);
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
): { name: string; mpCost: number; description: string }[] {
  const skills: { name: string; mpCost: number; description: string }[] = [];

  for (const [_skillId, skillDef] of Object.entries(SKILL_DEFS)) {
    if (skillDef.type !== 'active') continue;

    // 檢查是否為該職業或冒險者通用技能
    if (skillDef.classId !== character.classId && skillDef.classId !== 'adventurer') continue;

    // 檢查等級需求
    if (skillDef.learnLevel > character.level) continue;

    skills.push({
      name: skillDef.name,
      mpCost: skillDef.mpCost,
      description: skillDef.description,
    });
  }

  return skills;
}
