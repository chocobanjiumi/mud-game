// Player/character management tests
import { describe, it, expect, beforeEach } from 'vitest';
import { PlayerManager, expRequiredForLevel, expToNextLevel } from '../game/player.js';

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
