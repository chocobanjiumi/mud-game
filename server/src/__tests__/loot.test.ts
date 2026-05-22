// Loot calculation tests
import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { CorpseManager, LootCalculator, getLootAnnouncementScope } from '../game/loot.js';
import type { MonsterDef, Character } from '@game/shared';
import type { MonsterInstance } from '../game/world.js';

// ============================================================
//  Helpers
// ============================================================

function makeMonsterDef(overrides: Partial<MonsterDef> = {}): MonsterDef {
  return {
    id: 'green_slime',
    name: 'Green Slime',
    level: 1,
    hp: 30,
    mp: 0,
    str: 3,
    int: 1,
    dex: 2,
    vit: 2,
    luk: 1,
    element: 'nature',
    skills: ['slash'],
    expReward: 10,
    goldReward: [3, 8],
    drops: [
      { itemId: 'slime_jelly', chance: 0.5, minQty: 1, maxQty: 2 },
      { itemId: 'herb', chance: 0.3, minQty: 1, maxQty: 1 },
    ],
    aiType: 'passive',
    description: 'A green slime.',
    isBoss: false,
    ...overrides,
  };
}

function makeCharacter(overrides: Partial<Character> = {}): Character {
  return {
    id: `player-${Math.random().toString(36).slice(2, 8)}`,
    userId: 'user-1',
    name: 'TestHero',
    level: 10,
    exp: 0,
    classId: 'swordsman',
    hp: 200,
    mp: 60,
    maxHp: 200,
    maxMp: 60,
    stats: { str: 10, int: 5, dex: 8, vit: 8, luk: 5 },
    freePoints: 0,
    gold: 500,
    roomId: 'plains',
    isAi: false,
    equipment: { weapon: null, head: null, body: null, hands: null, feet: null, ring: null, earring: null, belt: null, necklace: null, accessory: null },
    createdAt: Date.now(),
    lastLogin: Date.now(),
    ...overrides,
  };
}

function makeMonsterInstance(overrides: Partial<MonsterDef> = {}): MonsterInstance {
  const def = makeMonsterDef(overrides);
  return {
    instanceId: `${def.id}_1`,
    monsterId: def.id,
    def,
    hp: def.hp,
    maxHp: def.hp,
    mp: def.mp,
    maxMp: def.mp,
    isDead: false,
    respawnAt: null,
  };
}

// ============================================================
//  Tests
// ============================================================

describe('LootCalculator', () => {
  let loot: LootCalculator;

  beforeEach(() => {
    loot = new LootCalculator();
  });

  afterEach(() => {
    vi.restoreAllMocks();
  });

  // ── Gold drops ──

  describe('calculateDrops - gold', () => {
    it('should drop gold within the defined range', () => {
      const monster = makeMonsterDef({ goldReward: [10, 20] });
      vi.spyOn(Math, 'random').mockReturnValue(0.1);

      // Run many times to check range
      for (let i = 0; i < 100; i++) {
        const result = loot.calculateDrops(monster, 5);
        expect(result.gold).toBeGreaterThanOrEqual(10);
        expect(result.gold).toBeLessThanOrEqual(20);
      }
    });

    it('should return exact gold when min equals max', () => {
      const monster = makeMonsterDef({ goldReward: [15, 15] });
      vi.spyOn(Math, 'random').mockReturnValue(0.1);
      const result = loot.calculateDrops(monster, 5);
      expect(result.gold).toBe(15);
    });

    it('should allow normal monsters to drop no gold', () => {
      const monster = makeMonsterDef({ goldReward: [10, 20] });
      vi.spyOn(Math, 'random').mockReturnValue(0.95);
      const result = loot.calculateDrops(monster, 5);
      expect(result.gold).toBe(0);
    });

    it('should return correct exp reward', () => {
      const monster = makeMonsterDef({ expReward: 42 });
      const result = loot.calculateDrops(monster, 5);
      expect(result.exp).toBe(42);
    });
  });

  // ── Item drop probability ──

  describe('calculateDrops - item drops', () => {
    it('should drop items with 100% chance', () => {
      const monster = makeMonsterDef({
        drops: [
          { itemId: 'guaranteed_item', chance: 1.0, minQty: 1, maxQty: 1 },
        ],
      });

      const result = loot.calculateDrops(monster, 0);
      expect(result.items).toHaveLength(1);
      expect(result.items[0].itemId).toBe('guaranteed_item');
    });

    it('should not drop items with 0% chance', () => {
      const monster = makeMonsterDef({
        drops: [
          { itemId: 'impossible_item', chance: 0, minQty: 1, maxQty: 1 },
        ],
      });

      const result = loot.calculateDrops(monster, 0);
      expect(result.items).toHaveLength(0);
    });

    it('should produce items within quantity range', () => {
      const monster = makeMonsterDef({
        drops: [
          { itemId: 'test_item', chance: 1.0, minQty: 2, maxQty: 5 },
        ],
      });

      for (let i = 0; i < 50; i++) {
        const result = loot.calculateDrops(monster, 5);
        expect(result.items[0].quantity).toBeGreaterThanOrEqual(2);
        expect(result.items[0].quantity).toBeLessThanOrEqual(5);
      }
    });
  });

  // ── LUK bonus on drop rate ──

  describe('calculateDrops - LUK bonus', () => {
    it('should increase effective drop rate with high LUK', () => {
      // With LUK bonus: 1 + luk * 0.005
      // LUK 100 => bonus = 1.5 => 50% chance becomes 75%
      // LUK 0 => bonus = 1.0 => 50% stays 50%
      const monster = makeMonsterDef({
        drops: [
          { itemId: 'lucky_drop', chance: 0.5, minQty: 1, maxQty: 1 },
        ],
      });

      // With very high LUK, chance approaches cap (min 1.0)
      let highLukDrops = 0;
      let lowLukDrops = 0;
      const runs = 1000;

      for (let i = 0; i < runs; i++) {
        const resultHigh = loot.calculateDrops(monster, 100);
        if (resultHigh.items.length > 0) highLukDrops++;

        const resultLow = loot.calculateDrops(monster, 0);
        if (resultLow.items.length > 0) lowLukDrops++;
      }

      // High LUK should have more drops on average
      expect(highLukDrops).toBeGreaterThan(lowLukDrops);
    });

    it('LUK should cap the chance at 100%', () => {
      const monster = makeMonsterDef({
        drops: [
          { itemId: 'capped_drop', chance: 0.9, minQty: 1, maxQty: 1 },
        ],
      });

      // LUK 200 => bonus = 1 + 200*0.005 = 2.0
      // adjustedChance = min(1.0, 0.9 * 2.0) = 1.0
      const result = loot.calculateDrops(monster, 200);
      expect(result.items).toHaveLength(1);
    });
  });

  describe('buildMonsterLootTable', () => {
    it('should create normal monster loot tables with configured category rates', () => {
      const monster = makeMonsterDef({
        drops: [
          { itemId: 'slime_jelly', chance: 0.1, minQty: 1, maxQty: 1 },
          { itemId: 'small_hp_potion', chance: 0.5, minQty: 1, maxQty: 1 },
          { itemId: 'iron_sword', chance: 0.5, minQty: 1, maxQty: 1 },
          { itemId: 'class_change_scroll_swordsman', chance: 0.1, minQty: 1, maxQty: 1 },
          { itemId: 'nature_crystal', chance: 0.5, minQty: 1, maxQty: 1 },
        ],
      });

      const table = loot.buildMonsterLootTable(monster);

      expect(table.tier).toBe('normal');
      expect(table.goldChance).toBeGreaterThanOrEqual(0.8);
      expect(table.goldChance).toBeLessThanOrEqual(0.95);
      expect(table.entries.find(e => e.itemId === 'slime_jelly')?.chance).toBeGreaterThanOrEqual(0.3);
      expect(table.entries.find(e => e.itemId === 'slime_jelly')?.chance).toBeLessThanOrEqual(0.6);
      expect(table.entries.find(e => e.itemId === 'small_hp_potion')?.chance).toBeGreaterThanOrEqual(0.05);
      expect(table.entries.find(e => e.itemId === 'small_hp_potion')?.chance).toBeLessThanOrEqual(0.15);
      expect(table.entries.find(e => e.itemId === 'iron_sword')?.chance).toBeGreaterThanOrEqual(0.05);
      expect(table.entries.find(e => e.itemId === 'iron_sword')?.chance).toBeLessThanOrEqual(0.12);
      expect(table.entries.find(e => e.itemId === 'class_change_scroll_swordsman')?.chance).toBeGreaterThanOrEqual(0.4);
      expect(table.entries.find(e => e.itemId === 'nature_crystal')?.chance).toBeGreaterThanOrEqual(0.001);
      expect(table.entries.find(e => e.itemId === 'nature_crystal')?.chance).toBeLessThanOrEqual(0.02);
    });

    it('should create elite loot tables with elite material, equipment, and recipe rates', () => {
      const monster = makeMonsterDef({
        isElite: true,
        drops: [
          { itemId: 'slime_jelly', chance: 0.1, minQty: 1, maxQty: 1 },
          { itemId: 'nature_crystal', chance: 0.5, minQty: 1, maxQty: 1 },
          { itemId: 'iron_sword', chance: 0.1, minQty: 1, maxQty: 1 },
          { itemId: 'alchemy_recipe_test', chance: 0.5, minQty: 1, maxQty: 1 },
          { itemId: 'alpha_fang', chance: 0.5, minQty: 1, maxQty: 1 },
        ],
      });

      const table = loot.buildMonsterLootTable(monster);

      expect(table.tier).toBe('elite');
      expect(table.goldChance).toBe(1);
      expect(table.entries.find(e => e.itemId === 'slime_jelly')?.chance).toBeGreaterThanOrEqual(0.6);
      expect(table.entries.find(e => e.itemId === 'slime_jelly')?.chance).toBeLessThanOrEqual(0.9);
      expect(table.entries.find(e => e.itemId === 'nature_crystal')?.chance).toBeGreaterThanOrEqual(0.1);
      expect(table.entries.find(e => e.itemId === 'nature_crystal')?.chance).toBeLessThanOrEqual(0.25);
      expect(table.entries.find(e => e.itemId === 'iron_sword')?.chance).toBeGreaterThanOrEqual(0.25);
      expect(table.entries.find(e => e.itemId === 'iron_sword')?.chance).toBeLessThanOrEqual(0.5);
      expect(table.entries.find(e => e.itemId === 'alchemy_recipe_test')?.chance).toBeGreaterThanOrEqual(0.02);
      expect(table.entries.find(e => e.itemId === 'alchemy_recipe_test')?.chance).toBeLessThanOrEqual(0.08);
      expect(table.entries.find(e => e.itemId === 'alpha_fang')?.chance).toBeGreaterThanOrEqual(0.05);
      expect(table.entries.find(e => e.itemId === 'alpha_fang')?.chance).toBeLessThanOrEqual(0.15);
    });

    it('should create boss loot tables with guaranteed equipment and boss rates', () => {
      const monster = makeMonsterDef({
        isBoss: true,
        aiType: 'boss',
        drops: [
          { itemId: 'dragon_scale', chance: 0.1, minQty: 1, maxQty: 1 },
          { itemId: 'sword_saint_ring', chance: 0.5, minQty: 1, maxQty: 1 },
          { itemId: 'god_of_war_spear', chance: 0.5, minQty: 1, maxQty: 1 },
          { itemId: 'alchemy_recipe_test', chance: 0.01, minQty: 1, maxQty: 1 },
        ],
      });

      const table = loot.buildMonsterLootTable(monster);

      expect(table.tier).toBe('boss');
      expect(table.goldChance).toBe(1);
      expect(table.entries.some(e => e.category === 'equipment' && e.chance === 1)).toBe(true);
      expect(table.entries.find(e => e.itemId === 'dragon_scale')?.chance).toBeGreaterThanOrEqual(0.5);
      expect(table.entries.find(e => e.itemId === 'sword_saint_ring')?.chance).toBeGreaterThanOrEqual(0.1);
      expect(table.entries.find(e => e.itemId === 'sword_saint_ring')?.chance).toBeLessThanOrEqual(0.3);
      expect(table.entries.find(e => e.itemId === 'god_of_war_spear')?.chance).toBeGreaterThanOrEqual(0.005);
      expect(table.entries.find(e => e.itemId === 'god_of_war_spear')?.chance).toBeLessThanOrEqual(0.05);
      expect(table.entries.find(e => e.itemId === 'alchemy_recipe_test')?.chance).toBeGreaterThanOrEqual(0.05);
      expect(table.entries.find(e => e.itemId === 'alchemy_recipe_test')?.chance).toBeLessThanOrEqual(0.15);
    });

    it('should increase guaranteed boss equipment quantity for larger parties', () => {
      const monster = makeMonsterDef({
        isBoss: true,
        aiType: 'boss',
        drops: [
          { itemId: 'steel_sword', chance: 0.05, minQty: 1, maxQty: 1 },
        ],
      });

      const table = loot.buildMonsterLootTable(monster, { partySize: 5 });
      const equipment = table.entries.find(e => e.itemId === 'steel_sword');

      expect(equipment?.chance).toBe(1);
      expect(equipment?.minQty).toBe(3);
      expect(equipment?.maxQty).toBe(3);
    });

    it('should only enable quest item drops for active quest item ids', () => {
      const monster = makeMonsterDef({
        drops: [
          { itemId: 'class_change_scroll_swordsman', chance: 0.01, minQty: 1, maxQty: 1 },
        ],
      });

      const inactiveTable = loot.buildMonsterLootTable(monster, { activeQuestItemIds: [] });
      const activeTable = loot.buildMonsterLootTable(monster, { activeQuestItemIds: ['class_change_scroll_swordsman'] });

      expect(inactiveTable.entries[0].category).toBe('quest');
      expect(inactiveTable.entries[0].chance).toBe(0);
      expect(activeTable.entries[0].chance).toBeGreaterThanOrEqual(0.4);
      expect(activeTable.entries[0].chance).toBeLessThanOrEqual(1);
    });

    it('should roll personal quest drops for active quest items only', () => {
      const monster = makeMonsterDef({
        drops: [
          { itemId: 'class_change_scroll_swordsman', chance: 0.01, minQty: 1, maxQty: 1 },
          { itemId: 'class_change_scroll_mage', chance: 1, minQty: 1, maxQty: 1 },
        ],
      });
      vi.spyOn(Math, 'random').mockReturnValue(0.2);

      const result = loot.calculatePersonalQuestDrops(monster, 0, ['class_change_scroll_swordsman']);

      expect(result).toEqual([{ itemId: 'class_change_scroll_swordsman', quantity: 1 }]);
    });
  });

  // ── Exp distribution for solo player ──

  describe('distributeExp - solo', () => {
    it('should give full exp with party bonus for solo player', () => {
      const player = makeCharacter({ level: 5 });
      const party = [player];

      const dist = loot.distributeExp(party, 100, 5);

      // partyBonus = 1 + 1 * 0.1 = 1.1
      // basePerPerson = floor((100 / 1) * 1.1) = 110
      expect(dist.get(player.id)).toBe(110);
    });
  });

  // ── Exp distribution for party ──

  describe('distributeExp - party', () => {
    it('should split exp evenly with party bonus', () => {
      const p1 = makeCharacter({ level: 10 });
      const p2 = makeCharacter({ level: 10 });
      const party = [p1, p2];

      const dist = loot.distributeExp(party, 100, 10);

      // partyBonus = 1 + 2 * 0.1 = 1.2
      // basePerPerson = floor((100 / 2) * 1.2) = floor(60) = 60
      expect(dist.get(p1.id)).toBe(60);
      expect(dist.get(p2.id)).toBe(60);
    });

    it('should apply level gap penalty (player much higher than monster)', () => {
      const highLevelPlayer = makeCharacter({ level: 20 });
      const normalPlayer = makeCharacter({ level: 10 });
      const party = [highLevelPlayer, normalPlayer];

      const dist = loot.distributeExp(party, 100, 10);

      // highLevelPlayer: levelDiff = 20 - 10 = 10 > 5
      //   penalty = max(0.1, 1 - (10-5)*0.1) = max(0.1, 0.5) = 0.5
      // normalPlayer: levelDiff = 0, no penalty
      const highExp = dist.get(highLevelPlayer.id)!;
      const normalExp = dist.get(normalPlayer.id)!;

      expect(highExp).toBeLessThan(normalExp);
    });

    it('should apply level gap bonus (monster much higher than player)', () => {
      const lowLevelPlayer = makeCharacter({ level: 1 });
      const party = [lowLevelPlayer];

      const dist = loot.distributeExp(party, 100, 10);

      // levelDiff = 1 - 10 = -9 < -5
      // bonus = min(1.5, 1 + abs(-9 + 5) * 0.05) = min(1.5, 1 + 4*0.05) = min(1.5, 1.2) = 1.2
      const exp = dist.get(lowLevelPlayer.id)!;

      // partyBonus = 1.1
      // base = floor((100/1) * 1.1) = 110
      // with level bonus: floor(110 * 1.2) = 132
      expect(exp).toBe(132);
    });

    it('should give at least 1 exp', () => {
      const highLevelPlayer = makeCharacter({ level: 50 });
      const party = [highLevelPlayer];

      const dist = loot.distributeExp(party, 1, 1);

      expect(dist.get(highLevelPlayer.id)).toBeGreaterThanOrEqual(1);
    });

    it('should return empty map for empty party', () => {
      const dist = loot.distributeExp([], 100, 5);
      expect(dist.size).toBe(0);
    });
  });

  // ── Gold distribution ──

  describe('distributeGold', () => {
    it('should split gold evenly among party members', () => {
      const p1 = makeCharacter();
      const p2 = makeCharacter();
      const party = [p1, p2];

      const dist = loot.distributeGold(party, 100);

      expect(dist.get(p1.id)).toBe(50);
      expect(dist.get(p2.id)).toBe(50);
    });

    it('should give remainder to first player', () => {
      const p1 = makeCharacter();
      const p2 = makeCharacter();
      const p3 = makeCharacter();
      const party = [p1, p2, p3];

      const dist = loot.distributeGold(party, 100);

      // 100 / 3 = 33 each, remainder 1 goes to first
      expect(dist.get(p1.id)).toBe(34);
      expect(dist.get(p2.id)).toBe(33);
      expect(dist.get(p3.id)).toBe(33);
    });

    it('should handle solo player gold distribution', () => {
      const p1 = makeCharacter();
      const dist = loot.distributeGold([p1], 200);

      expect(dist.get(p1.id)).toBe(200);
    });

    it('should return empty map for empty party', () => {
      const dist = loot.distributeGold([], 100);
      expect(dist.size).toBe(0);
    });
  });

  // ── Format loot ──

  describe('formatLoot', () => {
    it('should format loot with exp and gold', () => {
      const formatted = loot.formatLoot({
        exp: 50,
        gold: 25,
        items: [],
      });

      expect(formatted).toContain('50');
      expect(formatted).toContain('25');
    });

    it('should format empty loot as no rewards', () => {
      const formatted = loot.formatLoot({
        exp: 0,
        gold: 0,
        items: [],
      });

      expect(formatted).toContain('無');
    });
  });
});

describe('getLootAnnouncementScope', () => {
  it('announces rare equipment to room, epic to zone, and legendary or above to world', () => {
    expect(getLootAnnouncementScope('spear_steel')).toBe('room');
    expect(getLootAnnouncementScope('spear_mithril')).toBe('zone');
    expect(getLootAnnouncementScope('spear_dragon')).toBe('world');
    expect(getLootAnnouncementScope('abyss_eye_staff')).toBe('world');
  });

  it('does not announce non-equipment items', () => {
    expect(getLootAnnouncementScope('slime_jelly')).toBeNull();
  });
});

describe('CorpseManager', () => {
  const now = new Date('2026-05-22T00:00:00.000Z').getTime();

  it('creates corpse containers with gold and items after combat rewards are rolled', () => {
    const corpses = new CorpseManager();
    const monster = makeMonsterInstance();

    const corpse = corpses.createCorpse({
      roomId: 'plains',
      monster,
      killerId: 'player-1',
      participantIds: ['player-1', 'player-2'],
      loot: { exp: 10, gold: 7, items: [{ itemId: 'slime_jelly', quantity: 2 }] },
      now,
    });

    expect(corpse.gold).toBe(7);
    expect(corpse.items).toEqual([{ itemId: 'slime_jelly', quantity: 2 }]);
    expect(corpses.getCorpses('plains', now)).toHaveLength(1);
  });

  it('protects normal corpses for 60 seconds and keeps them for 5 minutes', () => {
    const corpses = new CorpseManager();
    const monster = makeMonsterInstance();
    corpses.createCorpse({
      roomId: 'plains',
      monster,
      killerId: 'killer',
      participantIds: ['killer'],
      loot: { exp: 10, gold: 7, items: [] },
      now,
    });

    const denied = corpses.lootCorpse('plains', 'outsider', 'corpse', now + 30_000);
    expect(denied.ok).toBe(false);
    expect(denied.message).toContain('保護');

    const allowed = corpses.lootCorpse('plains', 'outsider', 'corpse', now + 61_000);
    expect(allowed.ok).toBe(true);
    expect(allowed.loot?.gold).toBe(7);

    expect(corpses.getCorpses('plains', now + 5 * 60_000 + 1)).toHaveLength(0);
  });

  it('uses longer protection and retention for boss or elite corpses', () => {
    const corpses = new CorpseManager();
    const monster = makeMonsterInstance({ isBoss: true, aiType: 'boss' });
    corpses.createCorpse({
      roomId: 'deep_forest',
      monster,
      killerId: 'killer',
      participantIds: ['killer'],
      loot: { exp: 100, gold: 100, items: [] },
      now,
    });

    const denied = corpses.lootCorpse('deep_forest', 'outsider', 'corpse', now + 179_000);
    expect(denied.ok).toBe(false);

    const allowed = corpses.lootCorpse('deep_forest', 'outsider', 'corpse', now + 181_000);
    expect(allowed.ok).toBe(true);
    expect(corpses.getCorpses('deep_forest', now + 10 * 60_000 - 1)).toHaveLength(1);
    expect(corpses.getCorpses('deep_forest', now + 10 * 60_000 + 1)).toHaveLength(0);
  });

  it('keeps empty corpses visible until cleanup', () => {
    const corpses = new CorpseManager();
    const monster = makeMonsterInstance();
    corpses.createCorpse({
      roomId: 'plains',
      monster,
      killerId: 'killer',
      participantIds: ['killer'],
      loot: { exp: 10, gold: 0, items: [] },
      now,
    });

    const result = corpses.searchCorpse('plains', 'corpse', now);
    expect(result.ok).toBe(true);
    expect(result.message).toContain('搜刮一空');
  });

  it('targets the next lootable corpse when using generic corpse query', () => {
    const corpses = new CorpseManager();
    const firstMonster = makeMonsterInstance({ id: 'green_slime', name: 'Green Slime' });
    const secondMonster = makeMonsterInstance({ id: 'red_slime', name: 'Red Slime' });

    corpses.createCorpse({
      roomId: 'plains',
      monster: firstMonster,
      killerId: 'player-1',
      participantIds: ['player-1'],
      loot: { exp: 10, gold: 7, items: [] },
      now,
    });
    corpses.createCorpse({
      roomId: 'plains',
      monster: secondMonster,
      killerId: 'player-1',
      participantIds: ['player-1'],
      loot: { exp: 10, gold: 11, items: [] },
      now,
    });

    const first = corpses.lootCorpse('plains', 'player-1', 'corpse', now);
    const second = corpses.lootCorpse('plains', 'player-1', 'corpse', now);

    expect(first.corpse?.monsterId).toBe('green_slime');
    expect(first.loot?.gold).toBe(7);
    expect(second.corpse?.monsterId).toBe('red_slime');
    expect(second.loot?.gold).toBe(11);
  });

  it('keeps personal quest items separate for each looter', () => {
    const corpses = new CorpseManager();
    const monster = makeMonsterInstance();
    corpses.createCorpse({
      roomId: 'plains',
      monster,
      killerId: 'player-1',
      participantIds: ['player-1', 'player-2'],
      loot: { exp: 10, gold: 0, items: [] },
      personalItems: {
        'player-1': [{ itemId: 'class_change_scroll_swordsman', quantity: 1 }],
        'player-2': [{ itemId: 'class_change_scroll_swordsman', quantity: 1 }],
      },
      now,
    });

    const first = corpses.lootCorpse('plains', 'player-1', 'corpse', now);
    const second = corpses.lootCorpse('plains', 'player-2', 'corpse', now);

    expect(first.loot?.items).toEqual([{ itemId: 'class_change_scroll_swordsman', quantity: 1 }]);
    expect(second.loot?.items).toEqual([{ itemId: 'class_change_scroll_swordsman', quantity: 1 }]);
  });
});
