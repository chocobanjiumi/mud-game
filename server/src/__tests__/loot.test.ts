// Loot calculation tests
import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { LootCalculator } from '../game/loot.js';
import type { MonsterDef, Character } from '@game/shared';

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
    equipment: { weapon: null, head: null, body: null, hands: null, feet: null, accessory: null },
    createdAt: Date.now(),
    lastLogin: Date.now(),
    ...overrides,
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

  // ── Gold drops ──

  describe('calculateDrops - gold', () => {
    it('should drop gold within the defined range', () => {
      const monster = makeMonsterDef({ goldReward: [10, 20] });

      // Run many times to check range
      for (let i = 0; i < 100; i++) {
        const result = loot.calculateDrops(monster, 5);
        expect(result.gold).toBeGreaterThanOrEqual(10);
        expect(result.gold).toBeLessThanOrEqual(20);
      }
    });

    it('should return exact gold when min equals max', () => {
      const monster = makeMonsterDef({ goldReward: [15, 15] });
      const result = loot.calculateDrops(monster, 5);
      expect(result.gold).toBe(15);
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
