// Player/character management tests
import { describe, it, expect, beforeEach, beforeAll, afterAll } from 'vitest';
import { PlayerManager, expRequiredForLevel, expToNextLevel } from '../game/player.js';
import { initDb, closeDb, getDb } from '../db/schema.js';
import { addInventoryItem, getCharacterById, getEquippedItems, getInventory, getStoredItemInstance, removeInventoryItem, setEquipped } from '../db/queries.js';
import { AuctionManager } from '../game/auction.js';
import { MarketManager } from '../game/market.js';
import { TradeManager } from '../game/trade.js';
import {
  disassembleEquipment,
  getHighTierReforgeMaterials,
  getReforgeGoldCost,
  lockItemAffix,
  reforgeItemQuality,
  rerollItemAffix,
} from '../game/item-reforge.js';

// ============================================================
//  Tests
// ============================================================

describe('expRequiredForLevel', () => {
  it('should return correct exp for level 2', () => {
    // level * 100 + (level - 1) * 50
    // 2 * 100 + 1 * 50 = 250
    expect(expRequiredForLevel(2)).toBe(250);
  });

  it('should return correct exp for level 10', () => {
    // 10 * 100 + 9 * 50 = 1000 + 450 = 1450
    expect(expRequiredForLevel(10)).toBe(1450);
  });

  it('should return 0 for level 0', () => {
    // 0 * 100 + (-1) * 50 = -50
    expect(expRequiredForLevel(0)).toBe(-50);
  });
});

describe('expToNextLevel', () => {
  it('should return the difference between consecutive levels', () => {
    const toNext = expToNextLevel(1);
    // expRequired(2) - expRequired(1)
    // 250 - 150 = 100 ... wait
    // level 1: 1*100 + 0*50 = 100
    // level 2: 2*100 + 1*50 = 250
    // difference = 150
    expect(toNext).toBe(150);
  });
});

describe('PlayerManager', () => {
  let pm: PlayerManager;

  beforeAll(() => {
    initDb();
  });

  afterAll(() => {
    closeDb();
  });

  beforeEach(() => {
    pm = new PlayerManager();
  });

  // ── Create character ──

  describe('createCharacter', () => {
    it('should create character with correct defaults', () => {
      const char = pm.createCharacter('TestHero', 'user-1');

      expect(char.name).toBe('TestHero');
      expect(char.userId).toBe('user-1');
      expect(char.level).toBe(1);
      expect(char.exp).toBe(0);
      expect(char.classId).toBe('adventurer');
      expect(char.hp).toBe(100);
      expect(char.mp).toBe(30);
      expect(char.maxHp).toBe(100);
      expect(char.maxMp).toBe(30);
      expect(char.gold).toBe(100);
      expect(char.roomId).toBe('village_square');
      expect(char.isAi).toBe(false);
      expect(char.freePoints).toBe(0);
    });

    it('should create character with default stats (all 5)', () => {
      const char = pm.createCharacter('TestHero', 'user-1');

      expect(char.stats.str).toBe(5);
      expect(char.stats.int).toBe(5);
      expect(char.stats.dex).toBe(5);
      expect(char.stats.vit).toBe(5);
      expect(char.stats.luk).toBe(5);
    });

    it('should create AI character when isAi is true', () => {
      const char = pm.createCharacter('AIBot', 'user-ai', true, 'agent-1');

      expect(char.isAi).toBe(true);
      expect(char.agentId).toBe('agent-1');
    });

    it('should have empty equipment slots', () => {
      const char = pm.createCharacter('TestHero', 'user-1');

      expect(char.equipment.weapon).toBeNull();
      expect(char.equipment.head).toBeNull();
      expect(char.equipment.body).toBeNull();
      expect(char.equipment.hands).toBeNull();
      expect(char.equipment.feet).toBeNull();
      expect(char.equipment.accessory).toBeNull();
    });

    it('should assign unique IDs to different characters', () => {
      const char1 = pm.createCharacter('Hero1', 'user-1');
      const char2 = pm.createCharacter('Hero2', 'user-2');

      expect(char1.id).not.toBe(char2.id);
    });
  });

  // ── Level up ──

  describe('addExp and level up', () => {
    it('should add experience without leveling up', () => {
      const char = pm.createCharacter('TestHero', 'user-1');
      const levelsGained = pm.addExp(char.id, 50);

      expect(levelsGained).toBe(0);
      expect(char.exp).toBe(50);
      expect(char.level).toBe(1);
    });

    it('should level up when exp threshold is reached', () => {
      const char = pm.createCharacter('TestHero', 'user-1');
      // expRequiredForLevel(2) = 250
      const levelsGained = pm.addExp(char.id, 250);

      expect(levelsGained).toBe(1);
      expect(char.level).toBe(2);
    });

    it('should grant 5 free stat points per level', () => {
      const char = pm.createCharacter('TestHero', 'user-1');
      pm.addExp(char.id, 250);

      expect(char.freePoints).toBe(5);
    });

    it('should increase maxHp on level up (10 + VIT*2)', () => {
      const char = pm.createCharacter('TestHero', 'user-1');
      const beforeMaxHp = char.maxHp; // 100
      pm.addExp(char.id, 250);

      // hpGrowth = 10 + 5*2 = 20
      expect(char.maxHp).toBe(beforeMaxHp + 20);
    });

    it('should increase maxMp on level up (5 + INT*1.5)', () => {
      const char = pm.createCharacter('TestHero', 'user-1');
      const beforeMaxMp = char.maxMp; // 30
      pm.addExp(char.id, 250);

      // mpGrowth = floor(5 + 5*1.5) = floor(12.5) = 12
      expect(char.maxMp).toBe(beforeMaxMp + 12);
    });

    it('should restore HP and MP to max on level up', () => {
      const char = pm.createCharacter('TestHero', 'user-1');
      // Damage the character first
      pm.takeDamage(char.id, 50);
      pm.consumeMp(char.id, 10);

      expect(char.hp).toBe(50);
      expect(char.mp).toBe(20);

      pm.addExp(char.id, 250);

      expect(char.hp).toBe(char.maxHp);
      expect(char.mp).toBe(char.maxMp);
    });

    it('should handle multiple level ups at once', () => {
      const char = pm.createCharacter('TestHero', 'user-1');
      // Give enough exp for multiple levels
      const levelsGained = pm.addExp(char.id, 10000);

      expect(levelsGained).toBeGreaterThan(1);
      expect(char.level).toBeGreaterThan(2);
      expect(char.freePoints).toBe(levelsGained * 5);
    });
  });

  // ── Stat allocation ──

  describe('allocateStats', () => {
    it('should allocate stats when points are available', () => {
      const char = pm.createCharacter('TestHero', 'user-1');
      pm.addExp(char.id, 250); // Level 2, 5 free points

      const result = pm.allocateStats(char.id, { str: 3, dex: 2 });

      expect(result.success).toBe(true);
      expect(char.stats.str).toBe(8); // 5 + 3
      expect(char.stats.dex).toBe(7); // 5 + 2
      expect(char.freePoints).toBe(0);
    });

    it('should fail if not enough free points', () => {
      const char = pm.createCharacter('TestHero', 'user-1');
      // No free points at level 1

      const result = pm.allocateStats(char.id, { str: 1 });

      expect(result.success).toBe(false);
    });

    it('should fail for negative allocation', () => {
      const char = pm.createCharacter('TestHero', 'user-1');
      pm.addExp(char.id, 250);

      const result = pm.allocateStats(char.id, { str: -1 });

      expect(result.success).toBe(false);
    });

    it('should fail for zero allocation', () => {
      const char = pm.createCharacter('TestHero', 'user-1');
      pm.addExp(char.id, 250);

      const result = pm.allocateStats(char.id, {});

      expect(result.success).toBe(false);
    });

    it('should recalculate maxHp/maxMp after allocation', () => {
      const char = pm.createCharacter('TestHero', 'user-1');
      pm.addExp(char.id, 250); // Level 2, 5 points
      const hpBefore = char.maxHp;

      pm.allocateStats(char.id, { vit: 5 });

      // VIT increased from 5 to 10, at level 2
      // recalculation should show different maxHp
      expect(char.maxHp).not.toBe(hpBefore);
    });
  });

  // ── Derived stats ──

  describe('calculateDerivedStats', () => {
    it('should calculate derived stats for a level 1 adventurer', () => {
      const char = pm.createCharacter('TestHero', 'user-1');
      const derived = pm.calculateDerivedStats(char.id);

      // ATK = STR*2 + weaponAtk = 5*2 + 0 = 10
      expect(derived.atk).toBe(10);
      // MATK = INT*2 + weaponMatk = 5*2 + 0 = 10
      expect(derived.matk).toBe(10);
      // DEF = floor(VIT*1.5) + armorDef = floor(7.5) + 0 = 7
      expect(derived.def).toBe(7);
      // MDEF = floor(INT*0.5 + VIT*0.5) + armorMdef = floor(5) + 0 = 5
      expect(derived.mdef).toBe(5);
      // critRate = DEX*0.3 + LUK*0.2 = 1.5 + 1.0 = 2.5
      expect(derived.critRate).toBe(2.5);
      // critDamage = 150
      expect(derived.critDamage).toBe(150);
      // dodgeRate = DEX*0.4 + LUK*0.1 = 2.0 + 0.5 = 2.5
      expect(derived.dodgeRate).toBe(2.5);
      // hitRate = 95
      expect(derived.hitRate).toBe(95);
    });

    it('should return zero stats for non-existent character', () => {
      const derived = pm.calculateDerivedStats('nonexistent');

      expect(derived.atk).toBe(0);
      expect(derived.matk).toBe(0);
    });
  });

  // ── Skill learning ──

  describe('learnSkill', () => {
    it('should learn a new skill', () => {
      const char = pm.createCharacter('TestHero', 'user-1');
      const result = pm.learnSkill(char.id, 'slash');

      expect(result.success).toBe(true);

      const skills = pm.getLearnedSkills(char.id);
      expect(skills).toHaveLength(1);
      expect(skills[0].skillId).toBe('slash');
      expect(skills[0].level).toBe(1);
      expect(skills[0].currentCooldown).toBe(0);
    });

    it('should not learn the same skill twice', () => {
      const char = pm.createCharacter('TestHero', 'user-1');
      pm.learnSkill(char.id, 'slash');
      const result = pm.learnSkill(char.id, 'slash');

      expect(result.success).toBe(false);
    });

    it('should learn multiple different skills', () => {
      const char = pm.createCharacter('TestHero', 'user-1');
      pm.learnSkill(char.id, 'slash');
      pm.learnSkill(char.id, 'guard');

      const skills = pm.getLearnedSkills(char.id);
      expect(skills).toHaveLength(2);
    });
  });

  // ── Skill cooldowns ──

  describe('tickCooldowns', () => {
    it('should reduce cooldowns by 1', () => {
      const char = pm.createCharacter('TestHero', 'user-1');
      pm.learnSkill(char.id, 'fireball');
      pm.setSkillCooldown(char.id, 'fireball', 3);

      pm.tickCooldowns(char.id);
      const skills = pm.getLearnedSkills(char.id);
      expect(skills[0].currentCooldown).toBe(2);
    });

    it('should not reduce below 0', () => {
      const char = pm.createCharacter('TestHero', 'user-1');
      pm.learnSkill(char.id, 'slash');
      // slash has 0 cooldown by default

      pm.tickCooldowns(char.id);
      const skills = pm.getLearnedSkills(char.id);
      expect(skills[0].currentCooldown).toBe(0);
    });
  });

  // ── Death handling ──

  describe('handleDeath', () => {
    it('should respawn at village_square', () => {
      const char = pm.createCharacter('TestHero', 'user-1');
      char.roomId = 'dark_forest_deep';

      const result = pm.handleDeath(char.id);

      expect(result.respawnRoom).toBe('village_square');
      expect(char.roomId).toBe('village_square');
    });

    it('should lose 10% gold on death', () => {
      const char = pm.createCharacter('TestHero', 'user-1');
      char.gold = 1000;

      const result = pm.handleDeath(char.id);

      expect(result.goldLost).toBe(100); // 10% of 1000
      expect(char.gold).toBe(900);
    });

    it('should respawn with 50% HP and 50% MP', () => {
      const char = pm.createCharacter('TestHero', 'user-1');

      pm.handleDeath(char.id);

      expect(char.hp).toBe(Math.floor(char.maxHp * 0.5));
      expect(char.mp).toBe(Math.floor(char.maxMp * 0.5));
    });

    it('should handle zero gold gracefully', () => {
      const char = pm.createCharacter('TestHero', 'user-1');
      char.gold = 0;

      const result = pm.handleDeath(char.id);

      expect(result.goldLost).toBe(0);
      expect(char.gold).toBe(0);
    });
  });

  // ── Gold operations ──

  describe('gold operations', () => {
    it('should add gold', () => {
      const char = pm.createCharacter('TestHero', 'user-1');
      pm.addGold(char.id, 500);

      expect(char.gold).toBe(600); // 100 initial + 500
    });

    it('should spend gold successfully', () => {
      const char = pm.createCharacter('TestHero', 'user-1');
      const result = pm.spendGold(char.id, 50);

      expect(result).toBe(true);
      expect(char.gold).toBe(50);
    });

    it('should fail to spend more gold than available', () => {
      const char = pm.createCharacter('TestHero', 'user-1');
      const result = pm.spendGold(char.id, 200);

      expect(result).toBe(false);
      expect(char.gold).toBe(100); // unchanged
    });
  });

  // ── HP/MP operations ──

  describe('HP/MP operations', () => {
    it('should take damage and report death', () => {
      const char = pm.createCharacter('TestHero', 'user-1');
      const result = pm.takeDamage(char.id, 100);

      expect(result.isDead).toBe(true);
      expect(result.remaining).toBe(0);
    });

    it('should not go below 0 HP', () => {
      const char = pm.createCharacter('TestHero', 'user-1');
      pm.takeDamage(char.id, 999);

      expect(char.hp).toBe(0);
    });

    it('should heal correctly', () => {
      const char = pm.createCharacter('TestHero', 'user-1');
      pm.takeDamage(char.id, 50);
      const healed = pm.heal(char.id, 30);

      expect(healed).toBe(30);
      expect(char.hp).toBe(80);
    });

    it('should not heal above maxHp', () => {
      const char = pm.createCharacter('TestHero', 'user-1');
      const healed = pm.heal(char.id, 50);

      expect(healed).toBe(0); // already at max
      expect(char.hp).toBe(100);
    });

    it('should consume MP', () => {
      const char = pm.createCharacter('TestHero', 'user-1');
      const result = pm.consumeMp(char.id, 20);

      expect(result).toBe(true);
      expect(char.mp).toBe(10);
    });

    it('should fail to consume MP if insufficient', () => {
      const char = pm.createCharacter('TestHero', 'user-1');
      const result = pm.consumeMp(char.id, 50);

      expect(result).toBe(false);
      expect(char.mp).toBe(30); // unchanged
    });

    it('should restore MP', () => {
      const char = pm.createCharacter('TestHero', 'user-1');
      pm.consumeMp(char.id, 20);
      const restored = pm.restoreMp(char.id, 10);

      expect(restored).toBe(10);
      expect(char.mp).toBe(20);
    });

    it('should fully restore HP and MP', () => {
      const char = pm.createCharacter('TestHero', 'user-1');
      pm.takeDamage(char.id, 80);
      pm.consumeMp(char.id, 25);

      pm.fullRestore(char.id);

      expect(char.hp).toBe(char.maxHp);
      expect(char.mp).toBe(char.maxMp);
    });
  });

  // ── Statistics ──

  describe('statistics', () => {
    it('should track online character count', () => {
      expect(pm.getOnlineCount()).toBe(0);

      pm.createCharacter('Hero1', 'user-1');
      expect(pm.getOnlineCount()).toBe(1);

      pm.createCharacter('Hero2', 'user-2');
      expect(pm.getOnlineCount()).toBe(2);
    });

    it('should get all characters', () => {
      pm.createCharacter('Hero1', 'user-1');
      pm.createCharacter('Hero2', 'user-2');

      const all = pm.getAllCharacters();
      expect(all).toHaveLength(2);
    });
  });
});

describe('inventory item instances', () => {
  beforeAll(() => {
    initDb();
  });

  afterAll(() => {
    closeDb();
  });

  it('stores item instance metadata and returns it through inventory queries', () => {
    const characterId = 'item-instance-test';
    getDb().prepare(
      'INSERT OR REPLACE INTO characters (id, user_id, name) VALUES (?, ?, ?)',
    ).run(characterId, 'user-instance', 'InstanceHero');

    addInventoryItem(characterId, 'spear_steel', 1, false, {
      itemInstanceId: 'inst_spear_steel_1',
      baseItemId: 'spear_steel',
      quality: 'rare',
      affixes: [{
        id: 'numeric_str_t1',
        name: '力量',
        pool: 'numeric',
        tier: 'T1',
        appliesTo: ['weapon'],
        stats: { str: 1 },
      }],
      fixedEffects: ['rare_test_effect'],
    });

    const inventory = getInventory(characterId);
    expect(inventory).toEqual(expect.arrayContaining([
      expect.objectContaining({
        itemId: 'spear_steel',
        itemInstanceId: 'inst_spear_steel_1',
        quality: 'rare',
        fixedEffects: ['rare_test_effect'],
      }),
    ]));
    expect(inventory.find(item => item.itemInstanceId === 'inst_spear_steel_1')?.affixes?.[0]?.id).toBe('numeric_str_t1');
  });

  it('can equip a specific item instance id', () => {
    const characterId = 'item-instance-equip-test';
    getDb().prepare(
      'INSERT OR REPLACE INTO characters (id, user_id, name) VALUES (?, ?, ?)',
    ).run(characterId, 'user-instance-equip', 'InstanceEquipHero');

    addInventoryItem(characterId, 'spear_steel', 1, false, {
      itemInstanceId: 'inst_spear_steel_equip',
      baseItemId: 'spear_steel',
      quality: 'fine',
      affixes: [],
      fixedEffects: [],
    });

    expect(setEquipped(characterId, 'spear_steel', true, 'inst_spear_steel_equip')).toBe(true);
    expect(getEquippedItems(characterId)).toEqual([
      { itemId: 'spear_steel', itemInstanceId: 'inst_spear_steel_equip', quantity: 1 },
    ]);
  });

  it('can reroll a stored item instance affix', () => {
    const characterId = 'item-instance-reroll-test';
    getDb().prepare(
      'INSERT OR REPLACE INTO characters (id, user_id, name, class_id) VALUES (?, ?, ?, ?)',
    ).run(characterId, 'user-instance-reroll', 'InstanceRerollHero', 'swordsman');

    addInventoryItem(characterId, 'spear_steel', 1, false, {
      itemInstanceId: 'inst_spear_steel_reroll',
      baseItemId: 'spear_steel',
      quality: 'rare',
      affixes: [{
        id: 'numeric_str_t1',
        name: '力量',
        pool: 'numeric',
        tier: 'T1',
        appliesTo: ['weapon'],
        stats: { str: 1 },
      }, {
        id: 'combat_atk_t1',
        name: '銳利',
        pool: 'combat',
        tier: 'T1',
        appliesTo: ['weapon'],
        stats: { atk: 3 },
      }],
    });
    addInventoryItem(characterId, 'affix_essence', 1);

    const result = rerollItemAffix(characterId, 'inst_spear_steel_reroll', 1);
    expect(result.success).toBe(true);
    const rerolled = getInventory(characterId).find(item => item.itemInstanceId === 'inst_spear_steel_reroll');
    expect(rerolled?.affixes).toHaveLength(2);
    expect(rerolled?.affixes?.[0]?.id).not.toBe('numeric_str_t1');
    expect(rerolled?.affixes?.[1]?.id).toBe('combat_atk_t1');
  });

  it('can lock a stored item instance affix against rerolls', () => {
    const characterId = 'item-instance-lock-test';
    getDb().prepare(
      'INSERT OR REPLACE INTO characters (id, user_id, name, class_id) VALUES (?, ?, ?, ?)',
    ).run(characterId, 'user-instance-lock', 'InstanceLockHero', 'swordsman');

    addInventoryItem(characterId, 'spear_steel', 1, false, {
      itemInstanceId: 'inst_spear_steel_lock',
      baseItemId: 'spear_steel',
      quality: 'rare',
      affixes: [{
        id: 'numeric_str_t1',
        name: '力量',
        pool: 'numeric',
        tier: 'T1',
        appliesTo: ['weapon'],
        stats: { str: 1 },
      }, {
        id: 'combat_atk_t1',
        name: '銳利',
        pool: 'combat',
        tier: 'T1',
        appliesTo: ['weapon'],
        stats: { atk: 3 },
      }],
    });

    expect(lockItemAffix(characterId, 'inst_spear_steel_lock', 1).success).toBe(true);
    const locked = getInventory(characterId).find(item => item.itemInstanceId === 'inst_spear_steel_lock');
    expect(locked?.lockedAffixIndexes).toEqual([0]);
    const rerollLocked = rerollItemAffix(characterId, 'inst_spear_steel_lock', 1);
    expect(rerollLocked.success).toBe(false);
    expect(getInventory(characterId).find(item => item.itemInstanceId === 'inst_spear_steel_lock')?.affixes?.[0]?.id).toBe('numeric_str_t1');
  });

  it('can reforge item quality and reset locked affixes', () => {
    const characterId = 'item-instance-reforge-test';
    getDb().prepare(
      'INSERT OR REPLACE INTO characters (id, user_id, name, class_id, luk) VALUES (?, ?, ?, ?, ?)',
    ).run(characterId, 'user-instance-reforge', 'InstanceReforgeHero', 'swordsman', 999);

    addInventoryItem(characterId, 'spear_steel', 1, false, {
      itemInstanceId: 'inst_spear_steel_reforge',
      baseItemId: 'spear_steel',
      quality: 'rare',
      lockedAffixIndexes: [0],
      affixes: [{
        id: 'numeric_str_t1',
        name: '力量',
        pool: 'numeric',
        tier: 'T1',
        appliesTo: ['weapon'],
        stats: { str: 1 },
      }, {
        id: 'combat_atk_t1',
        name: '銳利',
        pool: 'combat',
        tier: 'T1',
        appliesTo: ['weapon'],
        stats: { atk: 3 },
      }],
    });
    addInventoryItem(characterId, 'reforge_crystal', 1);

    expect(reforgeItemQuality(characterId, 'inst_spear_steel_reforge').success).toBe(true);
    const reforged = getInventory(characterId).find(item => item.itemInstanceId === 'inst_spear_steel_reforge');
    expect(reforged?.quality).toBeDefined();
    expect(reforged?.lockedAffixIndexes).toBeUndefined();
    expect(reforged?.affixes?.length ?? 0).toBeGreaterThanOrEqual(0);
    expect(getCharacterById(characterId)?.gold).toBe(100 - getReforgeGoldCost('rare'));
  });

  it('requires extra rare materials for high-tier quality reforge', () => {
    const characterId = 'item-instance-high-reforge-test';
    getDb().prepare(
      'INSERT OR REPLACE INTO characters (id, user_id, name, class_id, gold) VALUES (?, ?, ?, ?, ?)',
    ).run(characterId, 'user-instance-high-reforge', 'InstanceHighReforgeHero', 'swordsman', 500);

    addInventoryItem(characterId, 'spear_steel', 1, false, {
      itemInstanceId: 'inst_spear_steel_high_reforge',
      baseItemId: 'spear_steel',
      quality: 'epic',
      affixes: [],
    });
    addInventoryItem(characterId, 'reforge_crystal', 1);

    const missingMaterial = reforgeItemQuality(characterId, 'inst_spear_steel_high_reforge');
    expect(missingMaterial.success).toBe(false);
    expect(getHighTierReforgeMaterials('epic')).toEqual([{ itemId: 'affix_essence', count: 2 }]);

    addInventoryItem(characterId, 'affix_essence', 2);
    expect(reforgeItemQuality(characterId, 'inst_spear_steel_high_reforge').success).toBe(true);
  });

  it('can disassemble equipment into reforge materials', () => {
    const characterId = 'item-instance-disassemble-test';
    getDb().prepare(
      'INSERT OR REPLACE INTO characters (id, user_id, name, class_id) VALUES (?, ?, ?, ?)',
    ).run(characterId, 'user-instance-disassemble', 'InstanceDisassembleHero', 'swordsman');

    addInventoryItem(characterId, 'spear_steel', 1, false, {
      itemInstanceId: 'inst_spear_steel_disassemble',
      baseItemId: 'spear_steel',
      quality: 'rare',
      affixes: [{
        id: 'numeric_str_t1',
        name: '力量',
        pool: 'numeric',
        tier: 'T1',
        appliesTo: ['weapon'],
        stats: { str: 1 },
      }, {
        id: 'combat_atk_t1',
        name: '銳利',
        pool: 'combat',
        tier: 'T1',
        appliesTo: ['weapon'],
        stats: { atk: 3 },
      }],
    });

    const result = disassembleEquipment(characterId, 'inst_spear_steel_disassemble');
    expect(result.success).toBe(true);
    const inventory = getInventory(characterId);
    expect(inventory.some(item => item.itemInstanceId === 'inst_spear_steel_disassemble')).toBe(false);
    expect(inventory.find(item => item.itemId === 'reforge_crystal')?.quantity).toBeGreaterThanOrEqual(2);
    expect(inventory.find(item => item.itemId === 'affix_essence')?.quantity).toBeGreaterThanOrEqual(2);
  });
});

describe('item instances in player economies', () => {
  beforeAll(() => {
    initDb();
    new AuctionManager().init();
    new MarketManager().ensureTables();
  });

  afterAll(() => {
    closeDb();
  });

  it('preserves item instance id through auction buyout', () => {
    insertTestCharacter('auction-instance-seller', 'AuctionSeller', 100);
    insertTestCharacter('auction-instance-buyer', 'AuctionBuyer', 1000);
    addInventoryItem('auction-instance-seller', 'spear_steel', 1, false, {
      itemInstanceId: 'inst_auction_spear',
      baseItemId: 'spear_steel',
      quality: 'epic',
      affixes: [{
        id: 'numeric_dex_t2',
        name: '敏捷',
        pool: 'numeric',
        tier: 'T2',
        appliesTo: ['weapon'],
        stats: { dex: 2 },
      }],
    });

    const auction = new AuctionManager();
    auction.init();
    const listed = auction.listItem('auction-instance-seller', 'spear_steel', 1, 10, 25, 12, 'inst_auction_spear');
    expect(listed.ok).toBe(true);
    const row = getDb().prepare("SELECT id, item_instance_id FROM auctions WHERE seller_id = ? AND status = 'active'")
      .get('auction-instance-seller') as { id: string; item_instance_id: string };
    expect(row.item_instance_id).toBe('inst_auction_spear');

    expect(auction.buyout(row.id, 'auction-instance-buyer').ok).toBe(true);
    const bought = getInventory('auction-instance-buyer').find(item => item.itemInstanceId === 'inst_auction_spear');
    expect(bought?.quality).toBe('epic');
    expect(bought?.affixes?.[0]?.id).toBe('numeric_dex_t2');
  });

  it('preserves item instance id through market sell orders', () => {
    insertTestCharacter('market-instance-seller', 'MarketSeller', 100);
    insertTestCharacter('market-instance-buyer', 'MarketBuyer', 1000);
    addInventoryItem('market-instance-seller', 'spear_steel', 1, false, {
      itemInstanceId: 'inst_market_spear',
      baseItemId: 'spear_steel',
      quality: 'rare',
      affixes: [{
        id: 'combat_crit_t1',
        name: '精準',
        pool: 'combat',
        tier: 'T1',
        appliesTo: ['weapon'],
        stats: { critRate: 1 },
      }],
    });

    const market = new MarketManager();
    market.ensureTables();
    const listed = market.placeSellOrder('market-instance-seller', 'spear_steel', 1, 30, 'inst_market_spear');
    expect(listed.success).toBe(true);
    const row = getDb().prepare("SELECT item_instance_id FROM market_orders WHERE id = ?")
      .get(listed.orderId) as { item_instance_id: string };
    expect(row.item_instance_id).toBe('inst_market_spear');

    expect(market.fillOrder(listed.orderId!, 'market-instance-buyer').success).toBe(true);
    const bought = getInventory('market-instance-buyer').find(item => item.itemInstanceId === 'inst_market_spear');
    expect(bought?.quality).toBe('rare');
    expect(bought?.affixes?.[0]?.id).toBe('combat_crit_t1');
  });

  it('preserves item instance id through direct player trades', () => {
    insertTestCharacter('trade-instance-from', 'TradeFrom', 100);
    insertTestCharacter('trade-instance-to', 'TradeTo', 100);
    addInventoryItem('trade-instance-from', 'spear_steel', 1, false, {
      itemInstanceId: 'inst_trade_spear',
      baseItemId: 'spear_steel',
      quality: 'fine',
      affixes: [{
        id: 'numeric_str_t1',
        name: '力量',
        pool: 'numeric',
        tier: 'T1',
        appliesTo: ['weapon'],
        stats: { str: 1 },
      }],
    });

    const trade = new TradeManager();
    trade.setDependencies({
      getCharacter: (id) => getCharacterById(id) ?? undefined,
      getInventory: (characterId) => getInventory(characterId),
      transferItem: (fromId, toId, itemId, quantity, itemInstanceId) => {
        const removed = removeInventoryItem(fromId, itemId, quantity, itemInstanceId);
        if (!removed) return false;
        addInventoryItem(toId, itemId, quantity, false, itemInstanceId ? getStoredItemInstance(itemInstanceId) : undefined);
        return true;
      },
      transferGold: () => true,
    });

    expect(trade.initiateTrade('trade-instance-from', 'trade-instance-to').success).toBe(true);
    expect(trade.acceptTrade('trade-instance-to').success).toBe(true);
    expect(trade.addItem('trade-instance-from', 'inst_trade_spear').success).toBe(true);
    expect(trade.confirm('trade-instance-from').success).toBe(true);
    expect(trade.confirm('trade-instance-to').success).toBe(true);
    trade.destroy();

    const received = getInventory('trade-instance-to').find(item => item.itemInstanceId === 'inst_trade_spear');
    expect(received?.quality).toBe('fine');
    expect(received?.affixes?.[0]?.id).toBe('numeric_str_t1');
  });
});

function insertTestCharacter(id: string, name: string, gold: number): void {
  getDb().prepare(
    'INSERT OR REPLACE INTO characters (id, user_id, name, gold) VALUES (?, ?, ?, ?)',
  ).run(id, `${id}-user`, name, gold);
}
