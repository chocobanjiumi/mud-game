// 掉落系統 - 經驗分配與物品掉落

import type { MonsterDef, DropEntry, CombatLoot, Character } from '@game/shared';
import { ITEM_DEFS } from '@game/shared';
import type { MonsterInstance } from './world.js';

export type MonsterLootTier = 'normal' | 'elite' | 'boss';
export type MonsterLootCategory =
  | 'gold'
  | 'material'
  | 'rare_material'
  | 'consumable'
  | 'equipment'
  | 'quest'
  | 'recipe'
  | 'regional_special'
  | 'set_piece'
  | 'special_equipment';

export type LootAnnouncementScope = 'room' | 'zone' | 'world';

export interface MonsterLootEntry extends DropEntry {
  category: MonsterLootCategory;
}

export interface MonsterLootTable {
  monsterId: string;
  tier: MonsterLootTier;
  goldChance: number;
  goldReward: [number, number];
  entries: MonsterLootEntry[];
}

export interface CalculateDropsOptions {
  activeQuestItemIds?: Iterable<string>;
  partySize?: number;
}

const REGIONAL_SPECIAL_DROP_IDS = new Set([
  'alpha_fang',
  'guardian_crystal',
  'knight_sigil',
  'demon_horn',
  'dragon_fang',
  'void_shard',
  'celestial_fragment',
  'ancient_fragment',
  'rare_fossil',
  'elf_feather',
  'dragon_dust',
  'ancient_runestone',
]);

export function getLootAnnouncementScope(itemId: string): LootAnnouncementScope | null {
  const def = ITEM_DEFS[itemId];
  if (!def || (def.type !== 'weapon' && def.type !== 'armor' && def.type !== 'accessory')) {
    return null;
  }

  switch (def.rarity) {
    case 'rare': return 'room';
    case 'epic': return 'zone';
    case 'legendary':
    case 'mythic': return 'world';
    default: return null;
  }
}

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
  calculateDrops(monster: MonsterDef, playerLuk: number, options: CalculateDropsOptions = {}): CombatLoot {
    const lootTable = this.buildMonsterLootTable(monster, options);
    const exp = monster.expReward;
    const gold = Math.random() < lootTable.goldChance
      ? this.rollGold(lootTable.goldReward[0], lootTable.goldReward[1])
      : 0;
    const items = this.rollDrops(lootTable.entries, playerLuk);

    return { exp, gold, items };
  }

  buildMonsterLootTable(monster: MonsterDef, options: CalculateDropsOptions = {}): MonsterLootTable {
    const tier: MonsterLootTier = monster.isBoss ? 'boss' : monster.isElite ? 'elite' : 'normal';
    const activeQuestItemIds = options.activeQuestItemIds
      ? new Set(options.activeQuestItemIds)
      : null;
    const entries = monster.drops.map(drop => {
      const entry = this.normalizeDropEntry(drop, tier);
      if (activeQuestItemIds && entry.category === 'quest' && !activeQuestItemIds.has(entry.itemId)) {
        return { ...entry, chance: 0 };
      }
      return entry;
    });

    if (tier === 'boss') {
      this.ensureBossEquipmentGuarantee(entries, monster, options.partySize);
    }

    return {
      monsterId: monster.id,
      tier,
      goldChance: tier === 'normal' ? 0.9 : 1,
      goldReward: monster.goldReward,
      entries,
    };
  }

  calculatePersonalQuestDrops(
    monster: MonsterDef,
    playerLuk: number,
    activeQuestItemIds: Iterable<string>,
  ): { itemId: string; quantity: number }[] {
    const activeIds = new Set(activeQuestItemIds);
    if (activeIds.size === 0) return [];

    const questEntries = this.buildMonsterLootTable(monster, { activeQuestItemIds: activeIds })
      .entries
      .filter(entry => entry.category === 'quest' && entry.chance > 0);

    return this.rollDrops(questEntries, playerLuk);
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
    drops: MonsterLootEntry[],
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

  private normalizeDropEntry(drop: DropEntry, tier: MonsterLootTier): MonsterLootEntry {
    const category = this.classifyDrop(drop.itemId);
    const hasItemDef = !!ITEM_DEFS[drop.itemId] || category === 'recipe';
    return {
      ...drop,
      chance: hasItemDef ? this.normalizeDropChance(drop.chance, category, tier) : drop.chance,
      category,
    };
  }

  private normalizeDropChance(chance: number, category: MonsterLootCategory, tier: MonsterLootTier): number {
    if (tier === 'normal') {
      switch (category) {
        case 'material': return this.clampChance(chance, 0.3, 0.6);
        case 'rare_material':
        case 'regional_special':
        case 'recipe': return this.clampChance(chance, 0.001, 0.02);
        case 'consumable': return this.clampChance(chance, 0.05, 0.15);
        case 'equipment':
        case 'set_piece':
        case 'special_equipment': return this.clampChance(chance, 0.05, 0.12);
        case 'quest': return this.clampChance(chance, 0.4, 1.0);
        default: return chance;
      }
    }

    if (tier === 'elite') {
      switch (category) {
        case 'material': return this.clampChance(chance, 0.6, 0.9);
        case 'rare_material': return this.clampChance(chance, 0.1, 0.25);
        case 'equipment':
        case 'set_piece':
        case 'special_equipment': return this.clampChance(chance, 0.25, 0.5);
        case 'recipe': return this.clampChance(chance, 0.02, 0.08);
        case 'regional_special': return this.clampChance(chance, 0.05, 0.15);
        default: return chance;
      }
    }

    switch (category) {
      case 'material':
      case 'rare_material':
      case 'regional_special': return this.clampChance(chance, 0.5, 1.0);
      case 'set_piece': return this.clampChance(chance, 0.1, 0.3);
      case 'special_equipment': return this.clampChance(chance, 0.005, 0.05);
      case 'recipe': return this.clampChance(chance, 0.05, 0.15);
      case 'equipment': return chance;
      default: return chance;
    }
  }

  private classifyDrop(itemId: string): MonsterLootCategory {
    const def = ITEM_DEFS[itemId];
    if (!def) {
      if (itemId.includes('recipe') || itemId.includes('配方')) return 'recipe';
      return 'material';
    }

    if (def.type === 'quest') return 'quest';
    if (itemId.includes('recipe') || def.name.includes('配方')) return 'recipe';
    if (def.setId) return 'set_piece';
    if (def.type === 'weapon' || def.type === 'armor' || def.type === 'accessory') {
      if (def.rarity === 'legendary' || def.rarity === 'mythic') return 'special_equipment';
      return 'equipment';
    }
    if (def.type === 'consumable') return 'consumable';
    if (def.type === 'material') {
      if (this.isRegionalSpecialDrop(itemId)) return 'regional_special';
      if (def.rarity === 'rare' || def.rarity === 'epic' || def.rarity === 'legendary' || def.rarity === 'mythic' || def.sellPrice >= 50) {
        return 'rare_material';
      }
      return 'material';
    }
    return 'material';
  }

  private ensureBossEquipmentGuarantee(entries: MonsterLootEntry[], monster: MonsterDef, partySize = 1): void {
    const guaranteedCount = this.getBossGuaranteedEquipmentCount(partySize);
    const equipment = entries.find(entry => entry.category === 'equipment');
    if (equipment) {
      equipment.chance = 1.0;
      equipment.minQty = Math.max(equipment.minQty, guaranteedCount);
      equipment.maxQty = Math.max(equipment.maxQty, guaranteedCount);
      return;
    }

    entries.unshift({
      itemId: this.getFallbackBossEquipment(monster.level),
      chance: 1.0,
      minQty: guaranteedCount,
      maxQty: guaranteedCount,
      category: 'equipment',
    });
  }

  private getBossGuaranteedEquipmentCount(partySize: number): number {
    return Math.max(1, 1 + Math.floor((Math.max(1, partySize) - 1) / 2));
  }

  private getFallbackBossEquipment(level: number): string {
    if (level >= 30) return 'flame_blade';
    if (level >= 20) return 'crystal_staff';
    if (level >= 10) return 'steel_sword';
    return 'iron_sword';
  }

  private clampChance(chance: number, min: number, max: number): number {
    if (chance <= 0) return 0;
    return Math.min(max, Math.max(min, chance));
  }

  private isRegionalSpecialDrop(itemId: string): boolean {
    return REGIONAL_SPECIAL_DROP_IDS.has(itemId);
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

// ============================================================
//  Corpse containers
// ============================================================

export interface CorpseContainer {
  id: string;
  roomId: string;
  monsterId: string;
  monsterName: string;
  killerId: string;
  participantIds: string[];
  createdAt: number;
  expiresAt: number;
  protectedUntil: number;
  gold: number;
  items: { itemId: string; quantity: number }[];
  personalItems: Record<string, { itemId: string; quantity: number }[]>;
  isBoss: boolean;
  isElite: boolean;
}

export interface CreateCorpseInput {
  roomId: string;
  monster: MonsterInstance;
  killerId: string;
  participantIds: string[];
  loot: CombatLoot;
  personalItems?: Record<string, { itemId: string; quantity: number }[]>;
  now?: number;
}

export interface LootCorpseResult {
  ok: boolean;
  message: string;
  corpse?: CorpseContainer;
  loot?: Pick<CombatLoot, 'gold' | 'items'>;
}

export class CorpseManager {
  private corpsesByRoom = new Map<string, CorpseContainer[]>();
  private counter = 0;

  createCorpse(input: CreateCorpseInput): CorpseContainer {
    const now = input.now ?? Date.now();
    const isBoss = input.monster.def.isBoss;
    const isElite = !!input.monster.def.isElite;
    const protectionMs = this.getProtectionMs(isBoss, isElite);
    const lifetimeMs = this.getLifetimeMs(isBoss, isElite);
    const corpse: CorpseContainer = {
      id: `${input.monster.monsterId}_corpse_${++this.counter}`,
      roomId: input.roomId,
      monsterId: input.monster.monsterId,
      monsterName: input.monster.def.name,
      killerId: input.killerId,
      participantIds: Array.from(new Set([input.killerId, ...input.participantIds])),
      createdAt: now,
      expiresAt: now + lifetimeMs,
      protectedUntil: now + protectionMs,
      gold: input.loot.gold,
      items: input.loot.items.map(item => ({ ...item })),
      personalItems: this.clonePersonalItems(input.personalItems ?? {}),
      isBoss,
      isElite,
    };

    const corpses = this.corpsesByRoom.get(input.roomId) ?? [];
    corpses.push(corpse);
    this.corpsesByRoom.set(input.roomId, corpses);
    return corpse;
  }

  getCorpses(roomId: string, now = Date.now()): CorpseContainer[] {
    this.cleanup(roomId, now);
    return [...(this.corpsesByRoom.get(roomId) ?? [])];
  }

  findCorpse(roomId: string, query?: string, now = Date.now(), characterId?: string): CorpseContainer | undefined {
    const corpses = this.getCorpses(roomId, now);
    if (!query || query.trim().length === 0 || query === 'corpse' || query === '屍體') {
      if (characterId) {
        return corpses.find(corpse => this.canLootCorpse(corpse, characterId, now)) ?? corpses[0];
      }
      return corpses[0];
    }

    const lower = query.trim().toLowerCase();
    return corpses.find(corpse =>
      corpse.id.toLowerCase() === lower
      || corpse.monsterId.toLowerCase() === lower
      || corpse.monsterId.toLowerCase().includes(lower)
      || corpse.monsterName.toLowerCase().includes(lower)
      || `${corpse.monsterName}屍體`.toLowerCase().includes(lower),
    );
  }

  searchCorpse(roomId: string, query?: string, now = Date.now(), characterId?: string): LootCorpseResult {
    const corpse = this.findCorpse(roomId, query, now, characterId);
    if (!corpse) {
      return { ok: false, message: '這裡沒有可搜尋的屍體。' };
    }

    const itemCount = this.countLootableItems(corpse, characterId);
    if (corpse.gold <= 0 && itemCount <= 0) {
      return { ok: true, corpse, message: `${corpse.monsterName}的屍體已被搜刮一空。` };
    }

    const protectedText = now < corpse.protectedUntil
      ? `保護剩餘 ${Math.ceil((corpse.protectedUntil - now) / 1000)} 秒。`
      : '保護已解除。';
    return {
      ok: true,
      corpse,
      message: `${corpse.monsterName}的屍體內有 ${corpse.gold} 金幣與 ${itemCount} 件物品。${protectedText}`,
    };
  }

  lootCorpse(roomId: string, characterId: string, query?: string, now = Date.now()): LootCorpseResult {
    const corpse = this.findCorpse(roomId, query, now, characterId);
    if (!corpse) {
      return { ok: false, message: '這裡沒有可搜刮的屍體。' };
    }

    if (now < corpse.protectedUntil && !corpse.participantIds.includes(characterId)) {
      return {
        ok: false,
        corpse,
        message: `${corpse.monsterName}的屍體仍受擊殺隊伍保護，剩餘 ${Math.ceil((corpse.protectedUntil - now) / 1000)} 秒。`,
      };
    }

    const personalItems = corpse.personalItems[characterId] ?? [];
    if (corpse.gold <= 0 && corpse.items.length === 0 && personalItems.length === 0) {
      return { ok: true, corpse, loot: { gold: 0, items: [] }, message: `${corpse.monsterName}的屍體已被搜刮一空。` };
    }

    const loot = {
      gold: corpse.gold,
      items: this.mergeItems([
        ...corpse.items.map(item => ({ ...item })),
        ...personalItems.map(item => ({ ...item })),
      ]),
    };
    corpse.gold = 0;
    corpse.items = [];
    delete corpse.personalItems[characterId];

    return { ok: true, corpse, loot, message: `你搜刮了${corpse.monsterName}的屍體。` };
  }

  clear(): void {
    this.corpsesByRoom.clear();
    this.counter = 0;
  }

  private cleanup(roomId: string, now: number): void {
    const corpses = this.corpsesByRoom.get(roomId);
    if (!corpses) return;
    const active = corpses.filter(corpse => corpse.expiresAt > now);
    if (active.length > 0) {
      this.corpsesByRoom.set(roomId, active);
    } else {
      this.corpsesByRoom.delete(roomId);
    }
  }

  private getProtectionMs(isBoss: boolean, isElite: boolean): number {
    if (isBoss) return 180_000;
    if (isElite) return 120_000;
    return 60_000;
  }

  private getLifetimeMs(isBoss: boolean, isElite: boolean): number {
    return isBoss || isElite ? 10 * 60_000 : 5 * 60_000;
  }

  private countLootableItems(corpse: CorpseContainer, characterId?: string): number {
    const sharedCount = corpse.items.reduce((sum, item) => sum + item.quantity, 0);
    if (!characterId) return sharedCount;
    const personalCount = (corpse.personalItems[characterId] ?? [])
      .reduce((sum, item) => sum + item.quantity, 0);
    return sharedCount + personalCount;
  }

  private canLootCorpse(corpse: CorpseContainer, characterId: string, now: number): boolean {
    if (now < corpse.protectedUntil && !corpse.participantIds.includes(characterId)) return false;
    return corpse.gold > 0
      || corpse.items.length > 0
      || (corpse.personalItems[characterId]?.length ?? 0) > 0;
  }

  private clonePersonalItems(
    personalItems: Record<string, { itemId: string; quantity: number }[]>,
  ): Record<string, { itemId: string; quantity: number }[]> {
    return Object.fromEntries(
      Object.entries(personalItems)
        .filter(([, items]) => items.length > 0)
        .map(([characterId, items]) => [characterId, items.map(item => ({ ...item }))]),
    );
  }

  private mergeItems(
    items: { itemId: string; quantity: number }[],
  ): { itemId: string; quantity: number }[] {
    const merged = new Map<string, number>();
    for (const item of items) {
      merged.set(item.itemId, (merged.get(item.itemId) ?? 0) + item.quantity);
    }
    return Array.from(merged.entries()).map(([itemId, quantity]) => ({ itemId, quantity }));
  }
}
