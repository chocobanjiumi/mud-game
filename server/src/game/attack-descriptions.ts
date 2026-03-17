// 武器攻擊描述系統 - 根據武器類型生成不同的戰鬥描述

import type { WeaponType, ItemDef } from '@game/shared';
import { ITEM_DEFS } from '@game/shared';

// ============================================================
//  攻擊描述型別
// ============================================================

export interface AttackDescriptions {
  normal: string;
  critical: string;
  miss: string;
  kill: string;
}

export type AttackResultType = 'normal' | 'critical' | 'miss' | 'kill';

// ============================================================
//  預設攻擊描述（無武器 / 徒手）
// ============================================================

const DEFAULT_ATTACK_DESC: AttackDescriptions = {
  normal: '{attacker}向{defender}發動攻擊！',
  critical: '{attacker}對{defender}造成了暴擊！',
  miss: '{attacker}的攻擊未能命中{defender}',
  kill: '{attacker}擊敗了{defender}！',
};

// ============================================================
//  各武器類型的預設攻擊描述
// ============================================================

const WEAPON_ATTACK_DESCRIPTIONS: Record<WeaponType, AttackDescriptions> = {
  spear: {
    normal: '{attacker}挺槍突刺，長槍刺向{defender}！',
    critical: '{attacker}的長槍如閃電般貫穿{defender}的防線！暴擊！',
    miss: '{attacker}的槍尖擦過{defender}的身側，未能命中',
    kill: '{attacker}的長槍精準貫穿{defender}，將其釘在原地！',
  },
  greataxe: {
    normal: '{attacker}掄起巨斧猛力劈砍{defender}！',
    critical: '{attacker}高舉巨斧全力一擊，大地為之震顫！暴擊！',
    miss: '{attacker}的巨斧重重落空，砸在地面上',
    kill: '{attacker}的巨斧將{defender}劈成兩半！',
  },
  katana: {
    normal: '{attacker}拔刀斬出一道銀弧，太刀劃向{defender}！',
    critical: '{attacker}施展居合一閃，刀光如月！暴擊！',
    miss: '{attacker}的刀鋒從{defender}身旁掠過',
    kill: '{attacker}收刀入鞘的瞬間，{defender}應聲倒下！',
  },
  elemental_staff: {
    normal: '{attacker}揮動元素杖釋放一道魔力衝擊{defender}！',
    critical: '{attacker}的元素杖爆發出耀眼的元素風暴！暴擊！',
    miss: '{attacker}的魔力射線偏離了目標',
    kill: '{attacker}的元素之力將{defender}徹底瓦解！',
  },
  grimoire: {
    normal: '{attacker}翻開魔典吟誦咒語，暗影射向{defender}！',
    critical: '{attacker}的魔典翻到禁忌篇章，釋放出毀滅咒文！暴擊！',
    miss: '{attacker}的咒語被{defender}閃避開來',
    kill: '{attacker}的魔典發出幽光，{defender}被黑暗吞噬！',
  },
  hourglass_staff: {
    normal: '{attacker}轉動沙漏杖，扭曲的時間之力打向{defender}！',
    critical: '{attacker}凍結了時間的洪流，對{defender}施加致命一擊！暴擊！',
    miss: '{attacker}的時間魔法在{defender}面前消散',
    kill: '{attacker}加速了{defender}的時間，使其在瞬間衰老崩解！',
  },
  crossbow: {
    normal: '{attacker}扣下扳機，弩箭射向{defender}！',
    critical: '{attacker}精準瞄準要害射出一箭！暴擊！',
    miss: '{attacker}的弩箭從{defender}耳邊飛過',
    kill: '{attacker}的弩箭正中{defender}要害，一擊斃命！',
  },
  dagger: {
    normal: '{attacker}閃身突進，匕首刺向{defender}！',
    critical: '{attacker}找到{defender}的破綻，匕首精準刺入要害！暴擊！',
    miss: '{attacker}的匕首只劃破了空氣',
    kill: '{attacker}的匕首無聲地沒入{defender}的身體，結束了戰鬥！',
  },
  whip: {
    normal: '{attacker}甩出長鞭纏向{defender}！',
    critical: '{attacker}的長鞭發出爆響，精準抽中{defender}！暴擊！',
    miss: '{attacker}的鞭擊被{defender}躲開',
    kill: '{attacker}的長鞭緊緊纏住{defender}，將其勒斃！',
  },
  holy_tome: {
    normal: '{attacker}高舉聖典，聖光照射{defender}！',
    critical: '{attacker}的聖典綻放神聖審判之光！暴擊！',
    miss: '{attacker}的聖光被{defender}的暗影抵擋',
    kill: '{attacker}的聖光淨化了{defender}，使其歸於塵土！',
  },
  nature_staff: {
    normal: '{attacker}揮動自然杖，藤蔓與荊棘纏向{defender}！',
    critical: '{attacker}召喚大自然的憤怒，狂暴的植物攻擊{defender}！暴擊！',
    miss: '{attacker}召喚的藤蔓未能觸及{defender}',
    kill: '{attacker}的自然之力將{defender}吞沒在荊棘叢中！',
  },
  warhammer: {
    normal: '{attacker}揮動戰錘重擊{defender}！',
    critical: '{attacker}的戰錘帶著雷霆之力砸向{defender}！暴擊！',
    miss: '{attacker}的戰錘砸空了',
    kill: '{attacker}的戰錘將{defender}徹底粉碎！',
  },
};

// ============================================================
//  攻擊描述取得函式
// ============================================================

/**
 * 根據武器取得攻擊描述文字
 *
 * 優先順序：
 * 1. 武器自身的 attackDescriptions（由 ItemDef 定義的自訂描述）
 * 2. 武器類型的預設描述（WEAPON_ATTACK_DESCRIPTIONS）
 * 3. 通用預設描述（DEFAULT_ATTACK_DESC）
 *
 * @param attackerName 攻擊者名稱
 * @param defenderName 防禦者名稱
 * @param weaponItemId 武器道具 ID（可為 null 表示徒手）
 * @param result 攻擊結果類型
 * @returns 替換完佔位符的描述字串
 */
export function getAttackDescription(
  attackerName: string,
  defenderName: string,
  weaponItemId: string | null,
  result: AttackResultType,
): string {
  let descriptions: AttackDescriptions = DEFAULT_ATTACK_DESC;

  if (weaponItemId) {
    const itemDef = ITEM_DEFS[weaponItemId] as ItemDef & { attackDescriptions?: AttackDescriptions };

    if (itemDef) {
      if (itemDef.attackDescriptions) {
        // 優先使用武器自訂描述
        descriptions = itemDef.attackDescriptions;
      } else if (itemDef.weaponType && WEAPON_ATTACK_DESCRIPTIONS[itemDef.weaponType]) {
        // 其次使用武器類型預設描述
        descriptions = WEAPON_ATTACK_DESCRIPTIONS[itemDef.weaponType];
      }
    }
  }

  const template = descriptions[result];
  return template
    .replace(/\{attacker\}/g, attackerName)
    .replace(/\{defender\}/g, defenderName);
}
