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
import {
  AFFIX_POOLS,
  QUALITY_RULES,
  generateEquipmentInstance,
  getEligibleAffixes,
  reforgeEquipmentInstanceQuality,
  rerollAffix,
  rollEquipmentDrop,
  rollItemQuality,
  selectEquipmentDropCandidates,
  toBaseEquipmentDef,
  ITEM_DEFS,
  SKILL_DEFS,
  CLASS_BUILD_DEFS,
  CLASS_DEFS,
  GATHERING_MATERIAL_QUALITIES,
  GATHERING_NODE_DEFS,
  getLearnableSkills,
  getAllAvailableSkills,
} from '@game/shared';
import { MONSTERS as MONSTER_DEFS } from '../data/monsters.js';
import { QUEST_DEFS } from '../game/quest.js';
import { GatheringManager } from '../game/gathering.js';
import { ROOMS, ZONES } from '../data/rooms.js';
import {
  CRAFTING_CATEGORIES,
  RECIPES,
  calculateCriticalCraftRate,
  calculateMaterialQualityBonus,
  getRecipeGoldCost,
  getRecipeResult,
} from '../game/crafting.js';
import type { CombatStats } from '../game/damage.js';
import type { RoomDef } from '@game/shared';

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

  it('all equipment should expose slot, level, source tags, and zone tags', () => {
    const equipment = Object.values(ITEM_DEFS).filter(item =>
      item.type === 'weapon' || item.type === 'armor' || item.type === 'accessory',
    );

    expect(equipment.length).toBeGreaterThan(0);
    for (const item of equipment) {
      expect(item.equipSlot, item.id).toBeTruthy();
      expect(item.equipSlot, item.id).not.toBe('accessory');
      expect(item.level, item.id).toBe(item.levelReq);
      expect(item.sourceTags, item.id).toEqual(expect.arrayContaining([expect.any(String)]));
      expect(item.zoneTags, item.id).toEqual(expect.arrayContaining([expect.any(String)]));
    }
  });

  it('should meet first-stage equipment count targets by slot', () => {
    const equipment = Object.values(ITEM_DEFS).filter(item =>
      item.type === 'weapon' || item.type === 'armor' || item.type === 'accessory',
    );
    const bySlot = equipment.reduce<Record<string, number>>((acc, item) => {
      acc[item.equipSlot ?? 'missing'] = (acc[item.equipSlot ?? 'missing'] ?? 0) + 1;
      return acc;
    }, {});

    expect(equipment.length).toBeGreaterThanOrEqual(350);
    expect(bySlot.weapon).toBeGreaterThanOrEqual(120);
    expect(bySlot.head).toBeGreaterThanOrEqual(30);
    expect(bySlot.body).toBeGreaterThanOrEqual(40);
    expect(bySlot.hands).toBeGreaterThanOrEqual(30);
    expect(bySlot.feet).toBeGreaterThanOrEqual(30);
    expect(bySlot.ring).toBeGreaterThanOrEqual(30);
    expect(bySlot.earring).toBeGreaterThanOrEqual(25);
    expect(bySlot.belt).toBeGreaterThanOrEqual(25);
    expect(bySlot.necklace).toBeGreaterThanOrEqual(25);
  });

  it('should provide baseline weapons for every major weapon type at milestone levels', () => {
    const weaponTypes = [
      'spear',
      'greataxe',
      'katana',
      'elemental_staff',
      'grimoire',
      'hourglass_staff',
      'crossbow',
      'dagger',
      'whip',
      'holy_tome',
      'nature_staff',
      'warhammer',
    ];
    const milestoneLevels = [1, 10, 20, 30, 40, 50, 60];
    const weapons = Object.values(ITEM_DEFS).filter(item => item.type === 'weapon');

    for (const weaponType of weaponTypes) {
      for (const levelReq of milestoneLevels) {
        expect(
          weapons.some(item => item.weaponType === weaponType && item.levelReq === levelReq),
          `${weaponType} Lv.${levelReq}`,
        ).toBe(true);
      }
    }
  });

  it('should provide equipment choices for every slot across early level bands', () => {
    const slots = ['weapon', 'head', 'body', 'hands', 'feet', 'ring', 'earring', 'belt', 'necklace'];
    const equipment = Object.values(ITEM_DEFS).filter(item =>
      item.type === 'weapon' || item.type === 'armor' || item.type === 'accessory',
    );
    const ranges = [
      { min: 1, max: 10, required: 3 },
      { min: 11, max: 20, required: 4 },
      { min: 21, max: 30, required: 4 },
    ];

    for (const slot of slots) {
      for (const range of ranges) {
        const count = equipment.filter(item =>
          item.equipSlot === slot && item.levelReq >= range.min && item.levelReq <= range.max,
        ).length;
        expect(count, `${slot} Lv.${range.min}-${range.max}`).toBeGreaterThanOrEqual(range.required);
      }
    }
  });

  it('should let level 1-10 players naturally find replacements for at least four slots', () => {
    const equipment = Object.values(ITEM_DEFS).filter(item =>
      (item.type === 'weapon' || item.type === 'armor' || item.type === 'accessory')
      && item.levelReq <= 10
      && (item.sourceTags?.includes('drop') || item.sourceTags?.includes('shop')),
    );
    const slots = new Set(equipment.map(item => item.equipSlot));

    expect(slots.size).toBeGreaterThanOrEqual(4);
  });
});

describe('Balance: Item instance generation', () => {
  it('defines quality rules for every quality tier', () => {
    expect(QUALITY_RULES.normal.affixCount).toEqual([0, 0]);
    expect(QUALITY_RULES.fine.affixCount).toEqual([1, 1]);
    expect(QUALITY_RULES.rare.affixCount).toEqual([2, 2]);
    expect(QUALITY_RULES.epic.affixCount).toEqual([3, 3]);
    expect(QUALITY_RULES.legendary.affixCount).toEqual([3, 4]);
    expect(QUALITY_RULES.mythic.affixCount).toEqual([4, 4]);
  });

  it('defines T1-T5 affixes across numeric, combat, behavior, and class pools', () => {
    expect(Object.keys(AFFIX_POOLS).sort()).toEqual(['behavior', 'class', 'combat', 'numeric']);
    const tiers = new Set(Object.values(AFFIX_POOLS).flat().map(affix => affix.tier));

    expect(tiers).toEqual(new Set(['T1', 'T2', 'T3', 'T4', 'T5']));
  });

  it('generates quality-specific affix counts and legendary fixed effects', () => {
    const base = toBaseEquipmentDef(ITEM_DEFS.spear_steel)!;
    const instance = generateEquipmentInstance(base, {
      classId: 'swordsman',
      sourceTags: ['world_boss'],
      random: vi.fn()
        .mockReturnValueOnce(0.005)
        .mockReturnValue(0),
    });

    expect(instance.quality).toBe('legendary');
    expect(instance.affixes.length).toBeGreaterThanOrEqual(3);
    expect(instance.affixes.length).toBeLessThanOrEqual(4);
    expect(instance.fixedEffects).toEqual(['legendary_core_weapon']);
  });

  it('keeps class affixes behind rare-or-better class matching rules', () => {
    const base = toBaseEquipmentDef(ITEM_DEFS.spear_steel)!;
    const fineAffixes = getEligibleAffixes(base, 'fine', 'swordsman');
    const rareAffixes = getEligibleAffixes(base, 'rare', 'swordsman');

    expect(fineAffixes.some(affix => affix.pool === 'class')).toBe(false);
    expect(rareAffixes.some(affix => affix.pool === 'class')).toBe(true);
    expect(rareAffixes.filter(affix => affix.pool === 'class').every(affix => affix.classTags?.includes('swordsman'))).toBe(true);
  });

  it('filters affixes by item level bands', () => {
    const noviceWeapon = { ...toBaseEquipmentDef(ITEM_DEFS.iron_sword)!, level: 1 };
    const earlyAffixes = getEligibleAffixes(noviceWeapon, 'legendary', 'swordsman');

    expect(earlyAffixes.some(affix => affix.id === 'combat_overpower_t5')).toBe(false);
    expect(earlyAffixes.every(affix => affix.itemLevelMin === undefined || noviceWeapon.level >= affix.itemLevelMin)).toBe(true);
  });

  it('applies equipment-derived hit, dodge, crit, and crit damage bonuses in damage rolls', () => {
    vi.spyOn(Math, 'random').mockReturnValue(0);

    const attacker = {
      atk: 20,
      matk: 0,
      def: 0,
      mdef: 0,
      hitRate: 115,
      dodgeRate: 0,
      critRate: 80,
      critDamage: 220,
      dex: 0,
      luk: 0,
    };
    const target = {
      atk: 0,
      matk: 0,
      def: 0,
      mdef: 0,
      hitRate: 95,
      dodgeRate: 0,
      critRate: 0,
      critDamage: 150,
      dex: 0,
      luk: 0,
    };

    const result = calculateDamage({
      attackerId: 'attacker',
      targetId: 'target',
      damageType: 'physical',
      element: 'none',
      targetElement: 'none',
      multiplier: 1,
      attacker,
      target,
    });

    expect(result.isCrit).toBe(true);
    expect(result.damage).toBeGreaterThanOrEqual(41);
    vi.restoreAllMocks();
  });

  it('allows LUK to improve quality rolls without opening mythic outside endgame sources', () => {
    expect(rollItemQuality(0, [], () => 0.2)).toBe('fine');
    expect(rollItemQuality(100, [], () => 0.2)).toBe('rare');
    expect(rollItemQuality(999, [], () => 0)).toBe('legendary');
    expect(rollItemQuality(0, ['world_boss'], () => 0)).toBe('mythic');
  });

  it('lets crafting quality bonuses improve item quality rolls', () => {
    expect(rollItemQuality(0, [], () => 0.53)).toBe('normal');
    expect(rollItemQuality(0, [], () => 0.53, 0.1)).toBe('fine');
  });

  it('weights crafted affixes toward requested skill tags', () => {
    const base = toBaseEquipmentDef(ITEM_DEFS.spear_steel)!;
    const instance = generateEquipmentInstance(base, {
      qualityBonus: 0.1,
      preferredAffixTags: ['burst'],
      preferredAffixWeight: 100,
      random: vi.fn()
        .mockReturnValueOnce(0.53)
        .mockReturnValue(0.99),
    });

    expect(instance.quality).toBe('fine');
    expect(instance.affixes.some(affix => affix.skillTags?.includes('burst'))).toBe(true);
  });

  it('rerolls one affix without duplicating retained affixes', () => {
    const base = toBaseEquipmentDef(ITEM_DEFS.spear_steel)!;
    const currentAffixes = [
      AFFIX_POOLS.numeric.find(affix => affix.id === 'numeric_str_t1')!,
      AFFIX_POOLS.combat.find(affix => affix.id === 'combat_atk_t1')!,
    ];

    const rerolled = rerollAffix(base, 'rare', currentAffixes, 0, 'swordsman', () => 0);

    expect(rerolled).toHaveLength(2);
    expect(rerolled[1].id).toBe('combat_atk_t1');
    expect(rerolled[0].id).not.toBe('numeric_str_t1');
    expect(new Set(rerolled.map(affix => affix.id)).size).toBe(2);
  });

  it('reforges quality while keeping the same item instance id', () => {
    const base = toBaseEquipmentDef(ITEM_DEFS.spear_steel)!;
    const reforged = reforgeEquipmentInstanceQuality(base, {
      itemInstanceId: 'test_reforge_instance',
      classId: 'swordsman',
      sourceTags: ['world_boss'],
      random: vi.fn()
        .mockReturnValueOnce(0.005)
        .mockReturnValue(0),
    });

    expect(reforged.itemInstanceId).toBe('test_reforge_instance');
    expect(reforged.quality).toBe('legendary');
    expect(reforged.affixes.length).toBeGreaterThanOrEqual(3);
    expect(reforged.fixedEffects).toEqual(['legendary_core_weapon']);
  });

  it('selects equipment drops by source, level, slot, source tags, and zone tags', () => {
    const candidates = selectEquipmentDropCandidates({
      source: 'starter wolf reward',
      levelMin: 1,
      levelMax: 10,
      slots: ['ring', 'necklace'],
      sourceTags: ['starter_progression'],
      zoneTags: ['plains'],
    });

    expect(candidates.length).toBeGreaterThan(0);
    expect(candidates.every(item => item.level >= 1 && item.level <= 10)).toBe(true);
    expect(candidates.every(item => item.equipSlot === 'ring' || item.equipSlot === 'necklace')).toBe(true);
    expect(candidates.every(item => item.sourceTags.includes('starter_progression'))).toBe(true);
    expect(candidates.every(item => item.zoneTags.includes('plains'))).toBe(true);
  });

  it('rolls a deterministic equipment drop from matching candidates', () => {
    const drop = rollEquipmentDrop({
      source: 'starter armor reward',
      levelMin: 1,
      levelMax: 10,
      slots: ['head'],
      sourceTags: ['starter_progression'],
      zoneTags: ['starter_village'],
    }, () => 0);

    expect(drop).not.toBeNull();
    expect(drop?.equipSlot).toBe('head');
    expect(drop?.level).toBeLessThanOrEqual(10);
  });
});

describe('Balance: Skill metadata', () => {
  it('normalizes every skill with tags and scaling metadata', () => {
    for (const skill of Object.values(SKILL_DEFS)) {
      expect(skill.tags.length, skill.id).toBeGreaterThan(0);
      expect(skill.scaling, skill.id).toEqual(expect.objectContaining({
        stat: expect.any(String),
        coefficient: expect.any(Number),
      }));
      expect(skill.resourceCost, skill.id).toBeGreaterThanOrEqual(0);
      expect(skill.cooldown, skill.id).toBeGreaterThanOrEqual(0);
      expect(skill.learnLevel, skill.id).toBeGreaterThanOrEqual(1);
      expect(skill.shortDescription.trim().length, skill.id).toBeGreaterThan(0);
      expect(skill.fullDescription.trim().length, skill.id).toBeGreaterThan(0);
      expect(skill.fullDescription.length, skill.id).toBeGreaterThanOrEqual(skill.shortDescription.length);
    }
  });

  it('gives the base adventurer at least four level 1-10 skills', () => {
    const skills = Object.values(SKILL_DEFS).filter(skill =>
      skill.classId === 'adventurer' && skill.learnLevel >= 1 && skill.learnLevel <= 10,
    );

    expect(skills.length).toBeGreaterThanOrEqual(4);
  });

  it('gives each first-job class six to eight class skills', () => {
    for (const classId of ['swordsman', 'mage', 'ranger', 'priest'] as const) {
      const skills = Object.values(SKILL_DEFS).filter(skill => skill.classId === classId);
      expect(skills.length, classId).toBeGreaterThanOrEqual(6);
      expect(skills.length, classId).toBeLessThanOrEqual(8);
    }
  });

  it('defines the level 1-16 first-job skill curve for each starter class', () => {
    const expected: Record<string, Record<number, string[]>> = {
      swordsman: {
        1: ['斬擊', '防禦架勢', '挑釁'],
        5: ['橫掃'],
        8: ['極限怒吼'],
        12: ['破甲重擊'],
        16: ['堅守陣線'],
      },
      mage: {
        1: ['魔法飛彈', '火球術', '魔力護盾'],
        5: ['寒冰新星'],
        8: ['暴風雪'],
        12: ['閃電束'],
        16: ['魔力回流'],
      },
      ranger: {
        1: ['射擊', '翻滾', '偵查'],
        5: ['獵人標記'],
        8: ['伏擊陷阱'],
        12: ['多重射擊'],
        16: ['煙霧箭'],
      },
      priest: {
        1: ['治癒', '聖光', '守護禱言'],
        5: ['淨化'],
        8: ['聖鐘震盪'],
        12: ['群體治癒'],
        16: ['驅邪結界'],
      },
    };

    for (const [classId, skillsByLevel] of Object.entries(expected)) {
      const skills = Object.values(SKILL_DEFS).filter(skill => skill.classId === classId);
      for (const [level, names] of Object.entries(skillsByLevel)) {
        const actualNames = skills
          .filter(skill => skill.learnLevel === Number(level))
          .map(skill => skill.name);
        expect(actualNames, `${classId} Lv${level}`).toEqual(expect.arrayContaining(names));
      }
    }
  });

  it('gives each second-job class eight to ten class skills', () => {
    for (const classId of [
      'knight',
      'berserker',
      'sword_saint',
      'archmage',
      'warlock',
      'chronomancer',
      'marksman',
      'assassin',
      'beast_master',
      'high_priest',
      'druid',
      'inquisitor',
    ] as const) {
      const skills = Object.values(SKILL_DEFS).filter(skill => skill.classId === classId);
      expect(skills.length, classId).toBeGreaterThanOrEqual(8);
      expect(skills.length, classId).toBeLessThanOrEqual(10);
    }
  });

  it('gives every player class at least four available passive skills', () => {
    const playerClassIds = Object.values(CLASS_DEFS)
      .filter(classDef => classDef.id !== 'monster')
      .map(classDef => classDef.id);

    for (const classId of playerClassIds) {
      const passiveSkills = getAllAvailableSkills(classId).filter(skill => skill.type === 'passive');
      expect(passiveSkills.length, classId).toBeGreaterThanOrEqual(4);
    }
  });

  it('gives every player class at least one core resource or tempo skill', () => {
    const playerClassIds = Object.values(CLASS_DEFS)
      .filter(classDef => classDef.id !== 'monster')
      .map(classDef => classDef.id);

    for (const classId of playerClassIds) {
      const skills = Object.values(SKILL_DEFS).filter(skill => skill.classId === classId);
      expect(
        skills.some(skill => skill.tags.includes('resource') || Boolean(skill.special?.resourceGain)),
        classId,
      ).toBe(true);
    }
  });

  it('gives every player class at least one burst window skill', () => {
    const playerClassIds = Object.values(CLASS_DEFS)
      .filter(classDef => classDef.id !== 'monster')
      .map(classDef => classDef.id);

    for (const classId of playerClassIds) {
      const skills = Object.values(SKILL_DEFS).filter(skill => skill.classId === classId);
      expect(
        skills.some(skill => skill.tags.includes('burst') || Boolean(skill.special?.burstWindow)),
        classId,
      ).toBe(true);
    }
  });

  it('gives every player class at least one defense or survival skill', () => {
    const playerClassIds = Object.values(CLASS_DEFS)
      .filter(classDef => classDef.id !== 'monster')
      .map(classDef => classDef.id);

    for (const classId of playerClassIds) {
      const skills = Object.values(SKILL_DEFS).filter(skill => skill.classId === classId);
      expect(skills.some(skill => skill.tags.includes('defense')), classId).toBe(true);
    }
  });

  it('gives every player class at least one monster mechanic answer skill', () => {
    const playerClassIds = Object.values(CLASS_DEFS)
      .filter(classDef => classDef.id !== 'monster')
      .map(classDef => classDef.id);

    for (const classId of playerClassIds) {
      const skills = Object.values(SKILL_DEFS).filter(skill => skill.classId === classId);
      expect(
        skills.some(skill =>
          skill.tags.includes('control')
          || skill.tags.includes('interrupt')
          || skill.tags.includes('dispel')
          || Boolean(skill.special?.interrupt)
          || Boolean(skill.special?.dispelShield)
        ),
        classId,
      ).toBe(true);
    }
  });

  it('allows skill tags to be referenced by monsters, affixes, and quest objectives', () => {
    const knownSkillTags = new Set(Object.values(SKILL_DEFS).flatMap(skill => skill.tags));
    const referencedTags = [
      ...Object.values(MONSTER_DEFS).flatMap(monster => monster.mechanicSkillTags ?? []),
      ...Object.values(AFFIX_POOLS).flatMap(pool => pool.flatMap(affix => affix.skillTags ?? [])),
      ...Object.values(QUEST_DEFS).flatMap(quest => quest.objectives.flatMap(objective => objective.requiredSkillTags ?? [])),
    ];

    expect(referencedTags.length).toBeGreaterThan(0);
    expect(referencedTags.every(tag => knownSkillTags.has(tag)), referencedTags.join(',')).toBe(true);
    expect(Object.values(MONSTER_DEFS).some(monster => (monster.mechanicSkillTags?.length ?? 0) > 0)).toBe(true);
    expect(Object.values(AFFIX_POOLS).some(pool => pool.some(affix => (affix.skillTags?.length ?? 0) > 0))).toBe(true);
    expect(Object.values(QUEST_DEFS).some(quest =>
      quest.objectives.some(objective => (objective.requiredSkillTags?.length ?? 0) > 0),
    )).toBe(true);
  });

  it('provides daily retention quests for hunting, exploration, gathering, social, and support play', () => {
    const dailyObjectives = Object.values(QUEST_DEFS)
      .filter(quest => quest.type === 'daily')
      .flatMap(quest => quest.objectives.map(objective => objective.type));

    expect(dailyObjectives).toContain('kill');
    expect(dailyObjectives).toContain('visit');
    expect(dailyObjectives).toContain('gather_resource');
    expect(dailyObjectives).toContain('talk');
    expect(dailyObjectives).toContain('use_support_skill');
  });

  it('provides weekly retention quests for dungeons, world bosses, guilds, kingdom wars, and leaderboards', () => {
    const weeklyObjectives = Object.values(QUEST_DEFS)
      .filter(quest => quest.type === 'weekly')
      .flatMap(quest => quest.objectives.map(objective => objective.type));

    expect(weeklyObjectives).toContain('first_clear_dungeon');
    expect(weeklyObjectives).toContain('participate_world_boss');
    expect(weeklyObjectives).toContain('contribute_guild');
    expect(weeklyObjectives).toContain('participate_kingdom_war');
    expect(weeklyObjectives).toContain('leaderboard_score');
  });

  it('gives every player class at least one class quest unlocked skill', () => {
    const playerClassIds = Object.values(CLASS_DEFS)
      .filter(classDef => classDef.id !== 'monster')
      .map(classDef => classDef.id);

    for (const classId of playerClassIds) {
      const skills = Object.values(SKILL_DEFS).filter(skill => skill.classId === classId);
      expect(skills.some(skill => skill.questUnlock), classId).toBe(true);
    }
  });

  it('gives every first- and second-job class two supported builds', () => {
    const affixSkillTags = new Set(Object.values(AFFIX_POOLS).flatMap(pool =>
      pool.flatMap(affix => affix.skillTags ?? []),
    ));
    const classIds = Object.values(CLASS_DEFS)
      .filter(classDef => classDef.tier === 1 || classDef.tier === 2)
      .map(classDef => classDef.id);

    for (const classId of classIds) {
      const builds = CLASS_BUILD_DEFS[classId] ?? [];
      const availableSkillTags = new Set(getAllAvailableSkills(classId).flatMap(skill => skill.tags));

      expect(builds.length, classId).toBeGreaterThanOrEqual(2);
      for (const build of builds) {
        expect(build.classId, build.id).toBe(classId);
        expect(build.skillTags.length, build.id).toBeGreaterThan(0);
        expect(build.affixSkillTags.length, build.id).toBeGreaterThan(0);
        expect(build.skillTags.every(tag => availableSkillTags.has(tag)), build.id).toBe(true);
        expect(build.affixSkillTags.every(tag => affixSkillTags.has(tag)), build.id).toBe(true);
      }
    }
  });

  it('keeps quest unlock filtering available for learnable skill queries', () => {
    const questLockedSkill = Object.values(SKILL_DEFS).find(skill => skill.questUnlock);
    if (!questLockedSkill) {
      expect(getLearnableSkills('adventurer', 1)).toEqual(expect.any(Array));
      return;
    }

    const withoutQuest = getLearnableSkills(questLockedSkill.classId, questLockedSkill.learnLevel);
    const withQuest = getLearnableSkills(questLockedSkill.classId, questLockedSkill.learnLevel, [questLockedSkill.questUnlock!.questId]);

    expect(withoutQuest.some(skill => skill.id === questLockedSkill.id)).toBe(false);
    expect(withQuest.some(skill => skill.id === questLockedSkill.id)).toBe(true);
  });
});

describe('Balance: Gathering definitions', () => {
  it('defines gathering nodes with all material qualities', () => {
    expect(Object.keys(GATHERING_NODE_DEFS).length).toBeGreaterThan(0);

    for (const node of Object.values(GATHERING_NODE_DEFS)) {
      expect(node.levelMin, node.id).toBeGreaterThanOrEqual(1);
      expect(node.levelMax, node.id).toBeLessThanOrEqual(60);
      expect(node.levelMax, node.id).toBeGreaterThanOrEqual(node.levelMin);
      expect(node.roomTags.length, node.id).toBeGreaterThan(0);
      expect(node.yields.map(yieldDef => yieldDef.quality).sort(), node.id)
        .toEqual([...GATHERING_MATERIAL_QUALITIES].sort());
      expect(node.yields.every(yieldDef => ITEM_DEFS[yieldDef.itemId]?.type === 'material'), node.id).toBe(true);
    }
  });

  it('covers level 1-60 material tiers for every gathering skill', () => {
    for (const skill of ['mining', 'herbalism', 'logging', 'skinning', 'fishing', 'archaeology'] as const) {
      const nodes = Object.values(GATHERING_NODE_DEFS)
        .filter(node => node.skill === skill)
        .sort((a, b) => a.levelMin - b.levelMin);

      expect(nodes.length, skill).toBeGreaterThan(0);
      expect(nodes[0].levelMin, skill).toBe(1);
      expect(nodes[nodes.length - 1].levelMax, skill).toBe(60);
      for (let i = 1; i < nodes.length; i++) {
        expect(nodes[i].levelMin, `${skill}:${nodes[i].id}`).toBe(nodes[i - 1].levelMax + 1);
      }
    }
  });

  it('makes every gathering skill available through room and zone tags', () => {
    const gathering = new GatheringManager();
    const availableSkills = new Set(
      Object.values(ROOMS).flatMap(room => {
        const zone = ZONES[room.zone];
        return gathering.getAvailableNodes(room, zone, 60).map(node => node.skill);
      }),
    );

    expect(availableSkills).toEqual(new Set([
      'mining',
      'herbalism',
      'logging',
      'skinning',
      'fishing',
      'archaeology',
    ]));
  });

  it('does not let a generic gathering tag expose every gathering skill', () => {
    const gathering = new GatheringManager();
    const room = {
      id: 'generic_gathering_room',
      name: '普通採集空地',
      zone: 'plains',
      description: '',
      exits: [],
      tags: ['gathering'],
    } as RoomDef & { tags: string[] };

    const skills = new Set(gathering.getAvailableNodes(room, undefined, 60).map(node => node.skill));

    expect(skills).not.toContain('mining');
    expect(skills).not.toContain('fishing');
    expect(skills).not.toContain('archaeology');
    expect(skills.size).toBeLessThan(6);
  });

  it('maps resource room names to focused gathering skills', () => {
    const gathering = new GatheringManager();
    const zone = ZONES.glass_dunes;

    expect(gathering.getAvailableNodes(ROOMS.glass_dunes_herb_shelf, zone, 60).map(node => node.skill))
      .toContain('herbalism');
    expect(gathering.getAvailableNodes(ROOMS.glass_dunes_water_pocket, zone, 60).map(node => node.skill))
      .toContain('fishing');
    expect(gathering.getAvailableNodes(ROOMS.glass_dunes_beast_scrape, zone, 60).map(node => node.skill))
      .toContain('skinning');
    expect(gathering.getAvailableNodes(ROOMS.glass_dunes_relic_pit, zone, 60).map(node => node.skill))
      .toContain('archaeology');
  });

  it('gives every resource zone at least six gathering node rooms', () => {
    const gathering = new GatheringManager();
    const resourceZones = Object.values(ZONES).filter(zone => zone.type === 'resource');

    for (const zone of resourceZones) {
      const nodeRooms = Object.values(ROOMS).filter(room =>
        room.zone === zone.id && gathering.getAvailableNodes(room, zone, 60).length > 0,
      );

      expect(nodeRooms.length, zone.id).toBeGreaterThanOrEqual(6);
    }
  });
});

describe('Balance: Crafting definitions', () => {
  it('has implemented recipes for every crafting category', () => {
    for (const category of CRAFTING_CATEGORIES) {
      const recipes = Object.values(RECIPES).filter(recipe => recipe.category === category);
      expect(recipes.length, category).toBeGreaterThan(0);
    }
  });

  it('only references existing materials and result items', () => {
    for (const recipe of Object.values(RECIPES)) {
      expect(ITEM_DEFS[recipe.result.itemId], `${recipe.id}:result`).toBeDefined();
      for (const material of recipe.materials) {
        expect(ITEM_DEFS[material.itemId], `${recipe.id}:material:${material.itemId}`).toBeDefined();
      }
      for (const [slot, result] of Object.entries(recipe.slotResults ?? {})) {
        expect(ITEM_DEFS[result.itemId], `${recipe.id}:slot:${slot}`).toBeDefined();
        expect(ITEM_DEFS[result.itemId]?.equipSlot, `${recipe.id}:slot:${slot}`).toBe(slot);
      }
    }
  });

  it('charges a positive but low early-game gold cost for every recipe', () => {
    for (const recipe of Object.values(RECIPES)) {
      expect(getRecipeGoldCost(recipe), recipe.id).toBeGreaterThan(0);
    }
    expect(getRecipeGoldCost(RECIPES.craft_small_hp_potion)).toBeLessThanOrEqual(15);
  });

  it('has lossy material upgrade recipes from lower-tier materials', () => {
    const upgrades = Object.values(RECIPES).filter(recipe => recipe.materialUpgrade);
    expect(upgrades.length).toBeGreaterThan(0);

    for (const recipe of upgrades) {
      const inputUnits = recipe.materials.reduce((sum, material) => sum + material.count, 0);
      expect(inputUnits, recipe.id).toBeGreaterThan(recipe.result.count);
      expect(ITEM_DEFS[recipe.result.itemId]?.type, recipe.id).toBe('material');
    }
  });

  it('has at least one crafting route for every equipment slot', () => {
    const slots = ['weapon', 'head', 'body', 'hands', 'feet', 'ring', 'earring', 'belt', 'necklace'] as const;

    for (const slot of slots) {
      const route = Object.values(RECIPES).find(recipe => {
        const result = getRecipeResult(recipe, slot);
        return result && ITEM_DEFS[result.itemId]?.equipSlot === slot;
      });

      expect(route, slot).toBeDefined();
    }
  });

  it('supports slot-specific crafting results', () => {
    const recipe = RECIPES.craft_adventurer_gear;

    expect(getRecipeResult(recipe, 'weapon')?.itemId).toBe('iron_sword');
    expect(getRecipeResult(recipe, 'belt')?.itemId).toBe('adventurer_belt');
    expect(getRecipeResult(recipe, 'accessory')).toBeUndefined();
  });

  it('converts high-quality gathered materials into crafting quality and critical bonuses', () => {
    const normalBonus = calculateMaterialQualityBonus(['normal', 'rough']);
    const highBonus = calculateMaterialQualityBonus(['fine', 'rare', 'perfect']);

    expect(normalBonus).toBe(0);
    expect(highBonus).toBeGreaterThan(normalBonus);
    expect(calculateCriticalCraftRate(10, 10, highBonus)).toBeGreaterThan(calculateCriticalCraftRate(10, 10, normalBonus));
  });
});

describe('Balance: Economy sinks', () => {
  it('keeps shop sell prices below buy prices to prevent vendor arbitrage', () => {
    const tradeableItems = Object.values(ITEM_DEFS).filter(item =>
      (item.buyPrice ?? 0) > 0 && (item.sellPrice ?? 0) > 0,
    );

    expect(tradeableItems.length).toBeGreaterThan(0);
    for (const item of tradeableItems) {
      expect(item.sellPrice, item.id).toBeLessThan(item.buyPrice);
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
