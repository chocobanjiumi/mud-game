// 掉落系統 - 經驗分配與物品掉落

import type { MonsterDef, DropEntry, CombatLoot, Character } from '@game/shared';
import type { MonsterInstance } from './world.js';

// ============================================================
//  LootCalculator
// ============================================================

export class LootCalculator {

  /**
   * 計算擊殺怪物的掉落
   * @param monster 被擊殺的怪物定義
   * @param playerLuk 擊殺玩家（或隊長）的幸運值
   * @returns 掉落結果
   */
  calculateDrops(monster: MonsterDef, playerLuk: number): CombatLoot {
    const exp = monster.expReward;
    const gold = this.rollGold(monster.goldReward[0], monster.goldReward[1]);
    const items = this.rollDrops(monster.drops, playerLuk);

    return { exp, gold, items };
  }

  /**
   * 計算多隻怪物的總掉落
   */
  calculateMultiMonsterDrops(
    monsters: MonsterInstance[],
    playerLuk: number,
  ): CombatLoot {
    let totalExp = 0;
    let totalGold = 0;
    const allItems: { itemId: string; quantity: number }[] = [];

    for (const m of monsters) {
      const drop = this.calculateDrops(m.def, playerLuk);
      totalExp += drop.exp;
      totalGold += drop.gold;
      allItems.push(...drop.items);
    }

    // 合併相同物品
    const merged = this.mergeItems(allItems);

    return { exp: totalExp, gold: totalGold, items: merged };
  }

  /**
   * 分配經驗給隊伍
   *
   * 規則：
   * - 隊伍中每人獲得 totalExp / members * bonusMultiplier
   * - 組隊加成：2人=1.2x, 3人=1.3x, 4人=1.4x, 5人=1.5x
   * - 等級差太大的玩家獲得的經驗會減少
   *
   * @returns 每位玩家獲得的經驗
   */
  distributeExp(
    party: Character[],
    totalExp: number,
    monsterLevel: number,
  ): Map<string, number> {
    const result = new Map<string, number>();
    if (party.length === 0) return result;

    // 組隊經驗加成
    const partyBonus = 1 + party.length * 0.1;
    const baseExpPerPerson = Math.floor((totalExp / party.length) * partyBonus);

    for (const member of party) {
      let exp = baseExpPerPerson;

      // 等級差距懲罰
      const levelDiff = member.level - monsterLevel;
      if (levelDiff > 5) {
        // 玩家等級比怪物高太多，經驗遞減
        const penalty = Math.max(0.1, 1 - (levelDiff - 5) * 0.1);
        exp = Math.floor(exp * penalty);
      } else if (levelDiff < -5) {
        // 怪物等級比玩家高太多，經驗微增（鼓勵挑戰）
        const bonus = Math.min(1.5, 1 + Math.abs(levelDiff + 5) * 0.05);
        exp = Math.floor(exp * bonus);
      }

      // 最少 1 經驗
      exp = Math.max(1, exp);
      result.set(member.id, exp);
    }

    return result;
  }

  /**
   * 分配金幣給隊伍（均分）
   */
  distributeGold(party: Character[], totalGold: number): Map<string, number> {
    const result = new Map<string, number>();
    if (party.length === 0) return result;

    const goldPerPerson = Math.floor(totalGold / party.length);
    const remainder = totalGold - goldPerPerson * party.length;

    for (let i = 0; i < party.length; i++) {
      // 餘數分給第一個人
      const extra = i === 0 ? remainder : 0;
      result.set(party[i].id, goldPerPerson + extra);
    }

    return result;
  }

  // ──────────────────────────────────────────────────────────
  //  私有方法
  // ──────────────────────────────────────────────────────────

  /** 擲骰金幣 */
  private rollGold(min: number, max: number): number {
    return min + Math.floor(Math.random() * (max - min + 1));
  }

  /**
   * 擲骰掉落物
   * LUK 影響掉率：每點 LUK 增加 0.5% 的掉率加成
   */
  private rollDrops(
    drops: DropEntry[],
    playerLuk: number,
  ): { itemId: string; quantity: number }[] {
    const result: { itemId: string; quantity: number }[] = [];

    // LUK 加成：每點 LUK 增加 0.5% 的掉率加成
    const lukBonus = 1 + playerLuk * 0.005;

    for (const drop of drops) {
      const adjustedChance = Math.min(1.0, drop.chance * lukBonus);

      if (Math.random() < adjustedChance) {
        const qty = drop.minQty + Math.floor(
          Math.random() * (drop.maxQty - drop.minQty + 1),
        );
        if (qty > 0) {
          result.push({ itemId: drop.itemId, quantity: qty });
        }
      }
    }

    return result;
  }

  /** 合併相同物品 */
  private mergeItems(
    items: { itemId: string; quantity: number }[],
  ): { itemId: string; quantity: number }[] {
    const map = new Map<string, number>();

    for (const item of items) {
      map.set(item.itemId, (map.get(item.itemId) ?? 0) + item.quantity);
    }

    return Array.from(map.entries()).map(([itemId, quantity]) => ({
      itemId,
      quantity,
    }));
  }

  // ──────────────────────────────────────────────────────────
  //  格式化
  // ──────────────────────────────────────────────────────────

  /** 格式化戰利品為中文文字 */
  formatLoot(loot: CombatLoot): string {
    const lines: string[] = [];

    if (loot.exp > 0) {
      lines.push(`  經驗值 +${loot.exp}`);
    }
    if (loot.gold > 0) {
      lines.push(`  金幣 +${loot.gold}`);
    }
    if (loot.items.length > 0) {
      lines.push('  掉落物品：');
      for (const item of loot.items) {
        lines.push(`    - ${item.itemId} x${item.quantity}`);
      }
    }

    if (lines.length === 0) return '  （無戰利品）';
    return lines.join('\n');
  }

  /** 格式化經驗分配 */
  formatExpDistribution(
    distribution: Map<string, number>,
    nameMap: Map<string, string>,
  ): string {
    const lines: string[] = [];
    for (const [id, exp] of distribution) {
      const name = nameMap.get(id) ?? id;
      lines.push(`  ${name} 獲得 ${exp} 經驗值`);
    }
    return lines.join('\n');
  }
}
