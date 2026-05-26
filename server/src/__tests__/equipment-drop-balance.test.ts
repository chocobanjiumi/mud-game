import { describe, expect, it } from 'vitest';
import {
  ITEM_DEFS,
  getEquipmentBaseType,
  getBaselineCombatStatsForLevel,
  getMaxAffixTierIndexForItemLevel,
  type AffixDef,
  type ItemQuality,
  type MonsterDef,
} from '@game/shared';
import { MONSTERS } from '../data/monsters.js';
import { rollMonsterEquipmentDrop, rollMonsterItemLevel } from '../game/equipment-drop.js';

const TIER_INDEX: Record<AffixDef['tier'], number> = { T1: 0, T2: 1, T3: 2, T4: 3, T5: 4 };

function fixedRandom(seed = 1): () => number {
  let state = seed;
  return () => {
    state = (state * 1664525 + 1013904223) >>> 0;
    return state / 0x1_0000_0000;
  };
}

function assertKindLimits(quality: ItemQuality, affixes: AffixDef[]) {
  const prefixes = affixes.filter(affix => (affix.kind ?? 'prefix') === 'prefix').length;
  const suffixes = affixes.filter(affix => affix.kind === 'suffix').length;
  const ids = new Set(affixes.map(affix => affix.id));
  expect(ids.size).toBe(affixes.length);
  if (quality === 'fine') expect(prefixes + suffixes).toBeLessThanOrEqual(1);
  if (quality === 'rare') {
    expect(prefixes).toBeLessThanOrEqual(1);
    expect(suffixes).toBeLessThanOrEqual(1);
  }
  if (quality === 'epic') {
    expect(prefixes).toBeLessThanOrEqual(2);
    expect(suffixes).toBeLessThanOrEqual(2);
  }
}

describe('equipment drop pipeline', () => {
  it('has base type entries for equipment that appears in monster drop tables', () => {
    const equipmentDropIds = new Set<string>();
    for (const monster of Object.values(MONSTERS)) {
      for (const drop of monster.drops) {
        const def = ITEM_DEFS[drop.itemId];
        if (def?.type === 'weapon' || def?.type === 'armor' || def?.type === 'accessory') {
          equipmentDropIds.add(drop.itemId);
        }
      }
    }

    const missing = [...equipmentDropIds].filter(itemId => !getEquipmentBaseType(itemId));
    expect(missing).toEqual([]);
  });

  it('rolls item levels by monster tier', () => {
    expect(rollMonsterItemLevel(10, 'normal', () => 0)).toBe(9);
    expect(rollMonsterItemLevel(10, 'elite', () => 0.99)).toBe(12);
    expect(rollMonsterItemLevel(10, 'boss', () => 0.99)).toBe(13);
  });

  it('keeps 1000 sampled drops within tier, itemLevel, and affix limits', () => {
    const random = fixedRandom(42);
    const monster = {
      ...MONSTERS.green_slime,
      level: 8,
      isBoss: false,
      isElite: false,
    } as MonsterDef;

    for (let i = 0; i < 1000; i++) {
      const drop = rollMonsterEquipmentDrop({
        monster,
        zoneId: 'starter_village',
        baseItemId: 'iron_sword',
        random,
      });
      expect(drop).not.toBeNull();
      expect(drop!.itemLevel).toBeGreaterThan(0);
      const maxTier = getMaxAffixTierIndexForItemLevel(drop!.itemLevel!);
      for (const affix of drop!.affixes ?? []) {
        expect(TIER_INDEX[affix.tier]).toBeLessThanOrEqual(maxTier);
        const baseline = getBaselineCombatStatsForLevel(drop!.itemLevel!);
        expect(affix.stats?.atk ?? 0).toBeLessThanOrEqual(Math.max(3, Math.floor(baseline.atk * 0.3)));
        expect(affix.stats?.matk ?? 0).toBeLessThanOrEqual(Math.max(3, Math.floor(baseline.matk * 0.3)));
        expect(affix.stats?.critRate ?? 0).toBeLessThanOrEqual(10);
        expect(affix.stats?.critDamage ?? 0).toBeLessThanOrEqual(30);
      }
      assertKindLimits(drop!.quality!, drop!.affixes ?? []);
    }
  });

  it('boss guarantee can produce an equipment instance', () => {
    const drop = rollMonsterEquipmentDrop({
      monster: { ...MONSTERS.shadow_wolf_alpha, isBoss: true, level: 20 } as MonsterDef,
      tier: 'boss',
      zoneId: 'dark_forest',
      random: fixedRandom(7),
    });
    expect(drop?.itemInstanceId).toBeTruthy();
    expect(drop?.quality).toBeTruthy();
    expect(drop?.itemLevel).toBeGreaterThanOrEqual(21);
    expect(drop?.droppedBy).toBe('shadow_wolf_alpha');
  });
});
