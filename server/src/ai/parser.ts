// AI 回應解析器 — 將 AI 自然語言回應轉換為遊戲指令
// 支援中文和英文指令名稱、模糊匹配技能名稱

import type { CombatActionType } from '@game/shared';
import { SKILL_DEFS } from '@game/shared';

// ============================================================
//  型別
// ============================================================

export interface ParsedAiResponse {
  /** 解析出的遊戲指令字串 */
  command: string | null;
  /** 戰鬥行動（僅在戰鬥模式中有值） */
  combatAction?: {
    type: CombatActionType;
    skillId?: string;
    targetId?: string;
  };
  /** AI 想說的話（用於 say 指令） */
  speech?: string;
}

// ============================================================
//  主要入口
// ============================================================

/**
 * 解析 AI 的回應文字
 * @param response AI 回傳的原始文字
 * @param inCombat 是否在戰鬥中
 * @returns 解析後的指令結構
 */
export function parseAiResponse(response: string, inCombat: boolean): ParsedAiResponse {
  // 清理前後空白及引號
  let text = response.trim();

  // 移除常見的 AI 前綴廢話
  text = text
    .replace(/^[「」『』"""\s]+/g, '')
    .replace(/[「」『』"""\s]+$/g, '')
    .replace(/^(我想要|我要|我選擇|我使用|我決定|好的，?|嗯，?|那就|讓我)\s*/g, '')
    .trim();

  // 如果回應為空，使用 fallback
  if (!text) {
    return inCombat
      ? { command: 'attack', combatAction: { type: 'attack' } }
      : { command: 'look' };
  }

  if (inCombat) {
    return parseCombatResponse(text);
  }
  return parseExploreResponse(text);
}

// ============================================================
//  戰鬥模式解析
// ============================================================

function parseCombatResponse(text: string): ParsedAiResponse {
  const lower = text.toLowerCase();

  // ── 防禦 ──
  if (matchesAny(lower, ['defend', '防禦', 'guard', '防守'])) {
    return { command: 'defend', combatAction: { type: 'defend' } };
  }

  // ── 逃跑 ──
  if (matchesAny(lower, ['flee', '逃跑', '逃走', 'escape', 'run', '逃離'])) {
    return { command: 'flee', combatAction: { type: 'flee' } };
  }

  // ── 嘗試匹配技能名稱（精確 + 模糊） ──
  const skillMatch = matchSkillName(text);
  if (skillMatch) {
    // 提取技能名之後的目標名
    const targetName = extractTargetAfter(text, skillMatch.matchedText);

    return {
      command: `skill ${skillMatch.skillId}${targetName ? ' ' + targetName : ''}`,
      combatAction: {
        type: 'skill',
        skillId: skillMatch.skillId,
        // targetId 需要由外部根據 targetName 解析
      },
    };
  }

  // ── 攻擊（含目標） ──
  // 格式："攻擊 目標", "attack 目標", "普攻 目標"
  const attackPatterns = [
    /^(?:attack|攻擊|普攻|打)\s+(.+)/i,
  ];
  for (const pattern of attackPatterns) {
    const m = text.match(pattern);
    if (m) {
      return {
        command: `attack ${m[1].trim()}`,
        combatAction: { type: 'attack' },
      };
    }
  }

  // ── 單純 "攻擊" ──
  if (matchesAny(lower, ['attack', '攻擊', '普攻', '打'])) {
    return { command: 'attack', combatAction: { type: 'attack' } };
  }

  // ── 使用道具 ──
  const itemMatch = text.match(/^(?:use|item|使用|物品)\s+(.+)/i);
  if (itemMatch) {
    return {
      command: `use ${itemMatch[1].trim()}`,
      combatAction: { type: 'item' },
    };
  }

  // ── "skill 技能名 目標" 格式 ──
  const skillCmdMatch = text.match(/^skill\s+(.+)/i);
  if (skillCmdMatch) {
    const rest = skillCmdMatch[1].trim();
    const innerSkillMatch = matchSkillName(rest);
    if (innerSkillMatch) {
      const targetName = extractTargetAfter(rest, innerSkillMatch.matchedText);
      return {
        command: `skill ${innerSkillMatch.skillId}${targetName ? ' ' + targetName : ''}`,
        combatAction: {
          type: 'skill',
          skillId: innerSkillMatch.skillId,
        },
      };
    }
    // 即使匹配不到技能定義，也嘗試當作技能指令
    return {
      command: `skill ${rest}`,
      combatAction: { type: 'skill' },
    };
  }

  // ── "治癒 隊友名" / "heal 隊友名" 格式 ──
  const healMatch = text.match(/^(?:治癒|治療|heal)\s+(.+)/i);
  if (healMatch) {
    // 在技能定義中尋找治療類技能
    const healSkill = findHealSkill();
    return {
      command: `skill ${healSkill ?? 'heal'} ${healMatch[1].trim()}`,
      combatAction: {
        type: 'skill',
        skillId: healSkill ?? 'heal',
      },
    };
  }

  // ── Fallback：無法解析，預設普通攻擊 ──
  return { command: 'attack', combatAction: { type: 'attack' } };
}

// ============================================================
//  探索模式解析
// ============================================================

function parseExploreResponse(text: string): ParsedAiResponse {
  const lower = text.toLowerCase();

  // ── 移動指令 ──
  const directionMap: Record<string, string> = {
    '北': 'north', '南': 'south', '東': 'east', '西': 'west',
    '上': 'up', '下': 'down',
    'north': 'north', 'south': 'south', 'east': 'east', 'west': 'west',
    'up': 'up', 'down': 'down',
    'n': 'north', 's': 'south', 'e': 'east', 'w': 'west', 'u': 'up', 'd': 'down',
  };

  // "go <方向>" / "前往 <方向>" / "走 <方向>" / "往 <方向>"
  const goMatch = text.match(/^(?:go|move|前往|走|往|移動到?)\s+(.+)/i);
  if (goMatch) {
    const dirInput = goMatch[1].trim().toLowerCase();
    const dir = directionMap[dirInput];
    if (dir) return { command: `go ${dir}` };
    // 可能是房間名稱，嘗試直接傳
    return { command: `go ${dirInput}` };
  }

  // 純方向詞
  for (const [key, dir] of Object.entries(directionMap)) {
    if (lower === key) {
      return { command: `go ${dir}` };
    }
  }

  // ── look / 查看 ──
  if (matchesAny(lower, ['look', 'l', '查看', '觀察', '看看', '環顧'])) {
    return { command: 'look' };
  }

  // ── talk / 對話 ──
  const talkMatch = text.match(/^(?:talk|對話|交談|與|跟)\s+(.+?)(?:\s+(?:對話|交談|說話))?$/i);
  if (talkMatch) {
    return { command: `talk ${talkMatch[1].trim()}` };
  }

  // ── attack / 攻擊 ──
  const attackMatch = text.match(/^(?:attack|攻擊|打)\s+(.+)/i);
  if (attackMatch) {
    return { command: `attack ${attackMatch[1].trim()}` };
  }

  // ── skill / 技能 ──
  const skillCmdMatch = text.match(/^(?:skill|技能|使用技能)\s+(.+)/i);
  if (skillCmdMatch) {
    return { command: `skill ${skillCmdMatch[1].trim()}` };
  }

  // ── say / 說話 ──
  const sayMatch = text.match(/^(?:say|說|說話)\s+(.+)/i);
  if (sayMatch) {
    return { command: `say ${sayMatch[1].trim()}`, speech: sayMatch[1].trim() };
  }

  // ── take / 撿取 ──
  const takeMatch = text.match(/^(?:take|pick|撿取?|拿|拾取)\s+(.+)/i);
  if (takeMatch) {
    return { command: `take ${takeMatch[1].trim()}` };
  }

  // ── use / 使用 ──
  const useMatch = text.match(/^(?:use|使用)\s+(.+)/i);
  if (useMatch) {
    return { command: `use ${useMatch[1].trim()}` };
  }

  // ── equip / 裝備 ──
  const equipMatch = text.match(/^(?:equip|裝備)\s+(.+)/i);
  if (equipMatch) {
    return { command: `equip ${equipMatch[1].trim()}` };
  }

  // ── inventory / 背包 ──
  if (matchesAny(lower, ['inventory', 'inv', 'i', '背包', '道具'])) {
    return { command: 'inventory' };
  }

  // ── status / 狀態 ──
  if (matchesAny(lower, ['status', 'stat', 'stats', '狀態'])) {
    return { command: 'status' };
  }

  // ── map / 地圖 ──
  if (matchesAny(lower, ['map', '地圖'])) {
    return { command: 'map' };
  }

  // ── 如果文字看起來像一個合法的指令，直接傳遞 ──
  if (text.length > 0 && text.length < 50 && !text.includes('\n')) {
    return { command: text };
  }

  // ── Fallback：探索模式預設 look ──
  return { command: 'look' };
}

// ============================================================
//  技能名稱匹配
// ============================================================

interface SkillMatchResult {
  skillId: string;
  matchedText: string;
}

/**
 * 在文字中匹配技能名稱（精確 + 模糊）
 * 支援中文技能名和英文技能名
 */
function matchSkillName(text: string): SkillMatchResult | null {
  const lower = text.toLowerCase();

  // 第一輪：精確匹配（中文名、英文名、skillId）
  for (const [skillId, skillDef] of Object.entries(SKILL_DEFS)) {
    if (skillDef.type !== 'active') continue;

    // 中文名精確匹配
    if (text.includes(skillDef.name)) {
      return { skillId, matchedText: skillDef.name };
    }

    // 英文名精確匹配（不分大小寫）
    if (lower.includes(skillDef.englishName.toLowerCase())) {
      return { skillId, matchedText: skillDef.englishName };
    }

    // skillId 精確匹配
    if (lower.includes(skillId.toLowerCase())) {
      return { skillId, matchedText: skillId };
    }
  }

  // 第二輪：模糊匹配（至少 2 個字元相符）
  let bestMatch: SkillMatchResult | null = null;
  let bestScore = 0;

  for (const [skillId, skillDef] of Object.entries(SKILL_DEFS)) {
    if (skillDef.type !== 'active') continue;

    // 中文名模糊匹配
    const chineseScore = fuzzyMatchScore(text, skillDef.name);
    if (chineseScore > bestScore && chineseScore >= 0.6) {
      bestScore = chineseScore;
      bestMatch = { skillId, matchedText: skillDef.name };
    }

    // 英文名模糊匹配
    const englishScore = fuzzyMatchScore(lower, skillDef.englishName.toLowerCase());
    if (englishScore > bestScore && englishScore >= 0.6) {
      bestScore = englishScore;
      bestMatch = { skillId, matchedText: skillDef.englishName };
    }
  }

  return bestMatch;
}

/** 模糊匹配分數（0~1），基於共同字元比例 */
function fuzzyMatchScore(input: string, target: string): number {
  if (target.length === 0) return 0;
  if (target.length < 2) return 0;

  let matched = 0;
  let inputIdx = 0;

  for (const char of target) {
    const found = input.indexOf(char, inputIdx);
    if (found !== -1) {
      matched++;
      inputIdx = found + 1;
    }
  }

  return matched / target.length;
}

/** 從文字中提取技能名之後的目標名稱 */
function extractTargetAfter(text: string, skillText: string): string {
  const idx = text.indexOf(skillText);
  if (idx === -1) return '';

  const after = text.slice(idx + skillText.length).trim();
  // 移除可能的目標前綴
  return after.replace(/^(對|給|向|to|at)\s*/i, '').trim();
}

/** 尋找治療類技能 */
function findHealSkill(): string | null {
  for (const [skillId, skillDef] of Object.entries(SKILL_DEFS)) {
    if (skillDef.type !== 'active') continue;
    if (
      skillDef.name.includes('治癒') ||
      skillDef.name.includes('治療') ||
      skillDef.englishName.toLowerCase().includes('heal')
    ) {
      return skillId;
    }
  }
  return null;
}

// ============================================================
//  輔助
// ============================================================

/** 檢查文字是否匹配任一關鍵字 */
function matchesAny(text: string, keywords: string[]): boolean {
  return keywords.some(kw => text === kw || text.startsWith(kw + ' ') || text.startsWith(kw + '　'));
}
