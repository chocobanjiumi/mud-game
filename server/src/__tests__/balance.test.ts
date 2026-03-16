// Game balance simulation tests
//
// These tests simulate combat scenarios and economy progression
// to verify that the game numbers make sense. They use the actual
// damage formulas and game constants.

import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import {
  calculateDerived,
  calculateDamage,
  baseStatsToCombat,
  derivedWithDexLuk,
  getElementModifier,
} from '../game/damage.js';
import { EffectEngine } from '../game/effects.js';
import { LootCalculator } from '../game/loot.js';
import { expRequiredForLevel } from '../game/player.js';
import { MONSTER_DEFS, ITEM_DEFS, SKILL_DEFS } from '@game/shared';
import type { CombatStats } from '../game/damage.js';

// ============================================================
//  Helpers
// ============================================================

function makePlayerStats(overrides: Partial<{
  str: number; int: number; dex: number; vit: number; luk: number;
  level: number; weaponAtk: number; weaponMatk: number; armorDef: number; armorMdef: number;
}> = {}): CombatStats {
  return {
    str: overrides.str ?? 5,
    int: overrides.int ?? 5,
    dex: overrides.dex ?? 5,
    vit: overrides.vit ?? 5,
    luk: overrides.luk ?? 5,
    level: overrides.level ?? 1,
    weaponAtk: overrides.weaponAtk ?? 0,
    weaponMatk: overrides.weaponMatk ?? 0,
    armorDef: overrides.armorDef ?? 0,
    armorMdef: overrides.armorMdef ?? 0,
    bonusCritRate: 0,
    bonusCritDamage: 0,
    bonusDodgeRate: 0,
    bonusHitRate: 0,
  };
}

/**
 * Simulate a simple fight between attacker and defender.
 * Returns the number of rounds to kill the defender.
 * Uses deterministic calculations (no random).
 */
function simulateFight(
  attacker: CombatStats,
  defender: CombatStats,
  defenderHp: number,
  damageType: 'physical' | 'magical' = 'physical',
  multiplier = 1.0,
  element: 'fire' | 'ice' | 'lightning' | 'light' | 'dark' | 'nature' | 'none' = 'none',
  targetElement: 'fire' | 'ice' | 'lightning' | 'light' | 'dark' | 'nature' | 'none' = 'none',
): { rounds: number; totalDamage: number; avgDamagePerRound: number } {
  const ad = calculateDerived(attacker);
  const dd = calculateDerived(defender);

  let remainingHp = defenderHp;
  let rounds = 0;
  let totalDamage = 0;

  while (remainingHp > 0 && rounds < 100) {
    rounds++;

    // Calculate base damage without randomness
    let baseDmg: number;
    if (damageType === 'physical') {
      baseDmg = ad.atk * multiplier - dd.def * 0.5;
    } else {
      baseDmg = ad.matk * multiplier - dd.mdef * 0.3;
    }
    baseDmg = Math.max(1, baseDmg);

    // Apply element modifier
    const elemMod = getElementModifier(element, targetElement);
    baseDmg *= elemMod;

    const dmg = Math.max(1, Math.floor(baseDmg));
    totalDamage += dmg;
    remainingHp -= dmg;
  }

  return {
    rounds,
    totalDamage,
    avgDamagePerRound: totalDamage / rounds,
  };
}

// ============================================================
//  Tests
// ============================================================

describe('Balance: Lv 1 adventurer vs Lv 1 slime', () => {
  it('should win easily (within ~5 rounds)', () => {
    // Lv 1 adventurer: all stats 5, wooden sword (ATK +5)
    const adventurer = makePlayerStats({
      str: 5, int: 5, dex: 5, vit: 5, luk: 5,
      weaponAtk: 5, armorDef: 3, // wooden sword + cloth armor
    });

    // Green slime: str 3, vit 2, hp 30
    const slime = makePlayerStats({
      str: 3, int: 1, dex: 2, vit: 2, luk: 1,
    });

    const result = simulateFight(adventurer, slime, 30);

    // Adventurer ATK = 5*2 + 5 = 15
    // Slime DEF = floor(2*1.5) = 3
    // Damage per hit = 15 - 3*0.5 = 13.5 => 13
    // Rounds to kill: ceil(30 / 13) = 3
    expect(result.rounds).toBeLessThanOrEqual(5);
    expect(result.rounds).toBeGreaterThanOrEqual(1);
  });

  it('slime should not one-shot the adventurer', () => {
    // Slime attacks adventurer
    const slime = makePlayerStats({
      str: 3, int: 1, dex: 2, vit: 2, luk: 1,
    });
    const adventurer = makePlayerStats({
      str: 5, int: 5, dex: 5, vit: 5, luk: 5,
      armorDef: 3,
    });

    const ad = calculateDerived(slime);
    const dd = calculateDerived(adventurer);

    // Slime ATK = 3*2 = 6
    // Adventurer DEF = floor(5*1.5) + 3 = 10
    // Slime damage = max(1, 6 - 10*0.5) = max(1, 1) = 1
    const slimeDmg = Math.max(1, Math.floor(ad.atk * 1.0 - dd.def * 0.5));
    expect(slimeDmg).toBeLessThan(100); // Adventurer has 100 HP
    expect(slimeDmg).toBeGreaterThanOrEqual(1);
  });
});

describe('Balance: Lv 10 swordsman DPS', () => {
  it('should have reasonable DPS for level 10 content', () => {
    // Lv 10 swordsman: base stats + class bonus (str+5, vit+5, dex+2)
    // + level ups (9 levels * 5 points = 45 points, assume mostly STR/VIT)
    const swordsman = makePlayerStats({
      str: 5 + 5 + 20, // base + class + allocated
      int: 5,
      dex: 5 + 2 + 5,
      vit: 5 + 5 + 15,
      luk: 5,
      level: 10,
      weaponAtk: 22, // steel_sword
      armorDef: 12,  // chain_mail
    });

    const derived = calculateDerived(swordsman);

    // ATK = 30*2 + 22 = 82
    expect(derived.atk).toBe(82);

    // Power Strike (1.5x multiplier)
    const powerStrikeDmg = derived.atk * 1.5;
    expect(powerStrikeDmg).toBeGreaterThan(100);

    // Should be able to kill a Lv 10 forest spider (150 HP) in a few hits
    const spider = makePlayerStats({
      str: 12, int: 6, dex: 10, vit: 8, luk: 3,
    });
    const result = simulateFight(swordsman, spider, 150);

    expect(result.rounds).toBeLessThanOrEqual(5);
  });
});

describe('Balance: Lv 10 mage DPS', () => {
  it('should have reasonable magical DPS', () => {
    // Lv 10 mage: base stats + class bonus (int+8, vit+2, dex+1, luk+1)
    const mage = makePlayerStats({
      str: 5,
      int: 5 + 8 + 25, // base + class + allocated (mages pump INT)
      dex: 5 + 1 + 5,
      vit: 5 + 2 + 5,
      luk: 5 + 1 + 5,
      level: 10,
      weaponMatk: 20, // oak_staff
    });

    const derived = calculateDerived(mage);

    // MATK = 38*2 + 20 = 96
    expect(derived.matk).toBe(96);

    // Fireball (1.6x multiplier)
    const fireballDmg = derived.matk * 1.6;
    expect(fireballDmg).toBeGreaterThan(100);

    // Should be able to kill a forest spider (150 HP, MDEF from int 6 + vit 8)
    const spider = makePlayerStats({
      str: 12, int: 6, dex: 10, vit: 8, luk: 3,
    });
    const result = simulateFight(mage, spider, 150, 'magical', 1.6);

    // Mage should kill in ~2-3 rounds with fireball
    expect(result.rounds).toBeLessThanOrEqual(4);
  });
});

describe('Balance: Healer output vs incoming damage', () => {
  it('healer should be able to outheal monster damage against a tank', () => {
    // Lv 10 priest: INT focused
    const priest = makePlayerStats({
      str: 5,
      int: 5 + 5 + 25, // base + class + allocated
      dex: 5 + 1,
      vit: 5 + 3 + 5,
      luk: 5 + 3 + 5,
      level: 10,
      weaponMatk: 18, // holy_scepter
    });

    const priestDerived = calculateDerived(priest);

    // Heal spell: MATK * 2.0 (healing)
    const healAmount = Math.floor(priestDerived.matk * 2.0);

    // MATK = 35*2 + 18 = 88
    // heal = floor(88 * 2.0) = 176
    expect(healAmount).toBeGreaterThan(0);

    // A Lv 10 goblin chief (str 18) attacking a tank (DEF ~30)
    const boss = makePlayerStats({ str: 18, dex: 10 });
    const tank = makePlayerStats({
      str: 25, vit: 25, dex: 7,
      armorDef: 12,
    });

    const bossDerived = calculateDerived(boss);
    const tankDerived = calculateDerived(tank);

    // Boss ATK = 18*2 = 36
    // Tank DEF = floor(25*1.5) + 12 = 49
    // Boss damage = max(1, 36 - 49*0.5) = max(1, 11.5) = 11
    const bossDmg = Math.max(1, Math.floor(bossDerived.atk * 1.0 - tankDerived.def * 0.5));

    // Healer should be able to outheal the boss damage on the tank
    expect(healAmount).toBeGreaterThan(bossDmg);
  });
});

describe('Balance: Exp curve - monsters to level 1->10', () => {
  it('should require a reasonable number of green slimes to reach level 10', () => {
    const slimeExp = MONSTER_DEFS.green_slime.expReward; // 10
    const expNeeded = expRequiredForLevel(10); // 10*100 + 9*50 = 1450

    const monstersNeeded = Math.ceil(expNeeded / slimeExp);

    // Should need about 145 green slimes to reach level 10
    // This is a lot but makes sense for the weakest monster
    expect(monstersNeeded).toBeGreaterThan(50);
    expect(monstersNeeded).toBeLessThan(500);
  });

  it('should require reasonable goblin scouts to reach level 10', () => {
    const goblinExp = MONSTER_DEFS.goblin_scout.expReward; // 22
    const expNeeded = expRequiredForLevel(10); // 1450

    const monstersNeeded = Math.ceil(expNeeded / goblinExp);

    // About 66 goblin scouts
    expect(monstersNeeded).toBeGreaterThan(30);
    expect(monstersNeeded).toBeLessThan(200);
  });

  it('exp requirement should increase with level', () => {
    const exp5 = expRequiredForLevel(5);
    const exp10 = expRequiredForLevel(10);
    const exp20 = expRequiredForLevel(20);

    expect(exp5).toBeLessThan(exp10);
    expect(exp10).toBeLessThan(exp20);
  });

  it('each level should require more exp than the previous', () => {
    for (let level = 2; level <= 20; level++) {
      const current = expRequiredForLevel(level);
      const next = expRequiredForLevel(level + 1);
      expect(next).toBeGreaterThan(current);
    }
  });
});

describe('Balance: Gold economy', () => {
  it('should be able to afford basic equipment at each tier', () => {
    // Tier 1: Lv 1-5 gear
    const woodenSwordPrice = ITEM_DEFS.wooden_sword.buyPrice; // 50
    const clothArmorPrice = ITEM_DEFS.cloth_armor.buyPrice; // 40
    const tier1Total = woodenSwordPrice + clothArmorPrice; // 90

    // Starting gold is 100
    expect(100).toBeGreaterThanOrEqual(tier1Total);

    // Tier 2: Lv 5-10 gear
    const ironSwordPrice = ITEM_DEFS.iron_sword.buyPrice; // 200
    const leatherArmorPrice = ITEM_DEFS.leather_armor.buyPrice; // 150
    const tier2Total = ironSwordPrice + leatherArmorPrice; // 350

    // Check how much gold we'd earn killing goblins to level 5
    // Goblin scouts drop 8-18 gold, average 13
    // To reach level 5: expRequired(5) = 5*100 + 4*50 = 700
    // Goblin scout exp = 22, so ~32 kills
    // Gold earned: 32 * 13 = 416
    const goblinAvgGold = (MONSTER_DEFS.goblin_scout.goldReward[0] + MONSTER_DEFS.goblin_scout.goldReward[1]) / 2;
    const killsToLv5 = Math.ceil(expRequiredForLevel(5) / MONSTER_DEFS.goblin_scout.expReward);
    const goldEarned = killsToLv5 * goblinAvgGold + 100; // + starting gold

    expect(goldEarned).toBeGreaterThanOrEqual(tier2Total);
  });

  it('should have reasonable gold-to-potion ratio', () => {
    // Small HP potion: 20 gold, heals 50 HP
    const potionCost = ITEM_DEFS.small_hp_potion.buyPrice; // 20
    const potionHeal = ITEM_DEFS.small_hp_potion.useEffect!.value; // 50

    // A green slime drops 3-8 gold (avg 5.5)
    // So about 3-4 slimes per potion - reasonable
    const avgSlimeGold = (MONSTER_DEFS.green_slime.goldReward[0] + MONSTER_DEFS.green_slime.goldReward[1]) / 2;
    const slimesPerPotion = potionCost / avgSlimeGold;

    expect(slimesPerPotion).toBeLessThan(10); // Should be attainable
    expect(slimesPerPotion).toBeGreaterThan(1); // But not trivially free
  });

  it('should have increasing equipment prices with level', () => {
    // Weapon progression
    expect(ITEM_DEFS.wooden_sword.buyPrice).toBeLessThan(ITEM_DEFS.iron_sword.buyPrice);
    expect(ITEM_DEFS.iron_sword.buyPrice).toBeLessThan(ITEM_DEFS.steel_sword.buyPrice);
    expect(ITEM_DEFS.steel_sword.buyPrice).toBeLessThan(ITEM_DEFS.flame_sword.buyPrice);

    // Staff progression
    expect(ITEM_DEFS.apprentice_staff.buyPrice).toBeLessThan(ITEM_DEFS.oak_staff.buyPrice);
    expect(ITEM_DEFS.oak_staff.buyPrice).toBeLessThan(ITEM_DEFS.crystal_staff.buyPrice);
  });

  it('sell prices should be less than buy prices', () => {
    for (const [id, item] of Object.entries(ITEM_DEFS)) {
      if (item.buyPrice > 0) {
        expect(item.sellPrice).toBeLessThanOrEqual(item.buyPrice);
      }
    }
  });
});

describe('Balance: Stat scaling', () => {
  it('physical damage should scale linearly with STR', () => {
    const dmg10 = calculateDerived(makePlayerStats({ str: 10 })).atk;
    const dmg20 = calculateDerived(makePlayerStats({ str: 20 })).atk;
    const dmg30 = calculateDerived(makePlayerStats({ str: 30 })).atk;

    // ATK = STR * 2, so each 10 STR should add 20 ATK
    expect(dmg20 - dmg10).toBe(20);
    expect(dmg30 - dmg20).toBe(20);
  });

  it('magical damage should scale linearly with INT', () => {
    const matk10 = calculateDerived(makePlayerStats({ int: 10 })).matk;
    const matk20 = calculateDerived(makePlayerStats({ int: 20 })).matk;

    expect(matk20 - matk10).toBe(20);
  });

  it('defense should scale with VIT', () => {
    const def10 = calculateDerived(makePlayerStats({ vit: 10 })).def;
    const def20 = calculateDerived(makePlayerStats({ vit: 20 })).def;

    expect(def20).toBeGreaterThan(def10);
  });
});

describe('Balance: Monster progression', () => {
  it('monsters should get stronger with level', () => {
    const slime = MONSTER_DEFS.green_slime; // Lv 1
    const wolf = MONSTER_DEFS.wild_wolf; // Lv 5
    const spider = MONSTER_DEFS.forest_spider; // Lv 10
    const dragon = MONSTER_DEFS.cave_dragon; // Lv 20

    expect(slime.hp).toBeLessThan(wolf.hp);
    expect(wolf.hp).toBeLessThan(spider.hp);
    expect(spider.hp).toBeLessThan(dragon.hp);

    expect(slime.expReward).toBeLessThan(wolf.expReward);
    expect(wolf.expReward).toBeLessThan(spider.expReward);
    expect(spider.expReward).toBeLessThan(dragon.expReward);
  });

  it('bosses should have significantly more HP than regular monsters', () => {
    const regularLv10 = MONSTER_DEFS.forest_spider; // Lv 10, HP 150
    const bossLv10 = MONSTER_DEFS.goblin_chief; // Lv 10, HP 300

    expect(bossLv10.hp).toBeGreaterThan(regularLv10.hp * 1.5);
    expect(bossLv10.expReward).toBeGreaterThan(regularLv10.expReward);
  });
});
