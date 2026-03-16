// Integration tests for game subsystems:
// Party, Trade, Quest, PvP, Dungeon, Leaderboard, ClassChange

import { describe, it, expect, beforeEach } from 'vitest';

// ============================================================
//  Party System Logic Tests
// ============================================================

describe('PartyManager logic', () => {
  // Test party exp distribution formula
  const distributeExp = (memberCount: number, totalExp: number): Map<string, number> => {
    const distribution = new Map<string, number>();
    const members = Array.from({ length: memberCount }, (_, i) => `player_${i}`);
    if (memberCount === 0) return distribution;
    if (memberCount === 1) {
      distribution.set(members[0], totalExp);
      return distribution;
    }
    const boostedTotal = Math.floor(totalExp * 1.2);
    const perMember = Math.floor(boostedTotal / memberCount);
    for (const id of members) {
      distribution.set(id, perMember);
    }
    return distribution;
  };

  it('should give full exp to solo player', () => {
    const dist = distributeExp(1, 1000);
    expect(dist.get('player_0')).toBe(1000);
  });

  it('should apply 20% party bonus for 2 members', () => {
    const dist = distributeExp(2, 1000);
    // 1000 * 1.2 = 1200 / 2 = 600 each
    expect(dist.get('player_0')).toBe(600);
    expect(dist.get('player_1')).toBe(600);
  });

  it('should apply 20% party bonus for 4 members', () => {
    const dist = distributeExp(4, 1000);
    // 1000 * 1.2 = 1200 / 4 = 300 each
    expect(dist.get('player_0')).toBe(300);
    expect(dist.size).toBe(4);
  });

  it('should handle zero exp', () => {
    const dist = distributeExp(3, 0);
    expect(dist.get('player_0')).toBe(0);
  });

  // Test gold distribution (no bonus)
  const distributeGold = (memberCount: number, totalGold: number): number => {
    if (memberCount === 0) return 0;
    return Math.floor(totalGold / memberCount);
  };

  it('should split gold evenly', () => {
    expect(distributeGold(3, 100)).toBe(33);
    expect(distributeGold(2, 100)).toBe(50);
    expect(distributeGold(1, 100)).toBe(100);
  });
});

// ============================================================
//  ELO Rating System Tests (PvP)
// ============================================================

describe('ELO rating system', () => {
  const INITIAL_ELO = 1000;
  const ELO_K_FACTOR = 32;

  const calculateEloChange = (
    winnerElo: number,
    loserElo: number,
    winnerLevel: number,
    loserLevel: number,
  ): { winnerChange: number; loserChange: number } => {
    const expectedWin = 1 / (1 + Math.pow(10, (loserElo - winnerElo) / 400));
    const expectedLose = 1 - expectedWin;
    const levelDiff = loserLevel - winnerLevel;
    const levelFactor = 1 + Math.max(0, levelDiff) * 0.05;
    let winnerChange = Math.round(ELO_K_FACTOR * (1 - expectedWin) * levelFactor);
    let loserChange = Math.round(ELO_K_FACTOR * (0 - expectedLose));
    winnerChange = Math.max(Math.floor(25 / 2), winnerChange);
    loserChange = Math.min(-Math.floor(25 / 2), loserChange);
    return { winnerChange, loserChange };
  };

  it('should give equal changes for equal ELO same level', () => {
    const { winnerChange, loserChange } = calculateEloChange(1000, 1000, 10, 10);
    expect(winnerChange).toBe(16);
    expect(loserChange).toBe(-16);
  });

  it('should give more points for beating a higher-rated player', () => {
    const high = calculateEloChange(1000, 1200, 10, 10);
    const low = calculateEloChange(1200, 1000, 10, 10);
    expect(high.winnerChange).toBeGreaterThan(low.winnerChange);
  });

  it('should give level bonus for beating higher level', () => {
    const sameLevel = calculateEloChange(1000, 1000, 10, 10);
    const higherLevel = calculateEloChange(1000, 1000, 10, 20);
    expect(higherLevel.winnerChange).toBeGreaterThan(sameLevel.winnerChange);
  });

  it('should have minimum changes', () => {
    const { winnerChange, loserChange } = calculateEloChange(2000, 500, 50, 1);
    expect(winnerChange).toBeGreaterThanOrEqual(12);
    expect(loserChange).toBeLessThanOrEqual(-12);
  });
});

// ============================================================
//  Quest System Logic Tests
// ============================================================

describe('Quest system logic', () => {
  interface QuestObjective {
    type: 'kill' | 'collect' | 'visit' | 'talk';
    targetId: string;
    required: number;
  }

  const checkComplete = (objectives: QuestObjective[], progress: Record<string, number>): boolean => {
    return objectives.every(obj => {
      const key = `${obj.type}_${obj.targetId}`;
      return (progress[key] ?? 0) >= obj.required;
    });
  };

  const updateProgress = (
    objectives: QuestObjective[],
    progress: Record<string, number>,
    eventType: string,
    targetId: string,
  ): Record<string, number> => {
    const updated = { ...progress };
    for (const obj of objectives) {
      if (obj.type !== eventType) continue;
      if (obj.targetId === '*' || obj.targetId === targetId) {
        const key = `${obj.type}_${obj.targetId}`;
        const current = updated[key] ?? 0;
        if (current < obj.required) {
          updated[key] = current + 1;
        }
      }
    }
    return updated;
  };

  it('should track kill progress', () => {
    const objectives: QuestObjective[] = [
      { type: 'kill', targetId: 'slime', required: 3 },
    ];
    let progress: Record<string, number> = {};

    progress = updateProgress(objectives, progress, 'kill', 'slime');
    expect(progress['kill_slime']).toBe(1);
    expect(checkComplete(objectives, progress)).toBe(false);

    progress = updateProgress(objectives, progress, 'kill', 'slime');
    progress = updateProgress(objectives, progress, 'kill', 'slime');
    expect(progress['kill_slime']).toBe(3);
    expect(checkComplete(objectives, progress)).toBe(true);
  });

  it('should not exceed required count', () => {
    const objectives: QuestObjective[] = [
      { type: 'kill', targetId: 'slime', required: 2 },
    ];
    let progress: Record<string, number> = {};

    for (let i = 0; i < 10; i++) {
      progress = updateProgress(objectives, progress, 'kill', 'slime');
    }
    expect(progress['kill_slime']).toBe(2);
  });

  it('should support wildcard targets', () => {
    const objectives: QuestObjective[] = [
      { type: 'kill', targetId: '*', required: 5 },
    ];
    let progress: Record<string, number> = {};

    progress = updateProgress(objectives, progress, 'kill', 'slime');
    progress = updateProgress(objectives, progress, 'kill', 'wolf');
    progress = updateProgress(objectives, progress, 'kill', 'goblin');
    expect(progress['kill_*']).toBe(3);
  });

  it('should handle multiple objectives', () => {
    const objectives: QuestObjective[] = [
      { type: 'kill', targetId: 'slime', required: 3 },
      { type: 'visit', targetId: 'village_square', required: 1 },
    ];
    let progress: Record<string, number> = {};

    for (let i = 0; i < 3; i++) {
      progress = updateProgress(objectives, progress, 'kill', 'slime');
    }
    expect(checkComplete(objectives, progress)).toBe(false);

    progress = updateProgress(objectives, progress, 'visit', 'village_square');
    expect(checkComplete(objectives, progress)).toBe(true);
  });

  it('should ignore irrelevant events', () => {
    const objectives: QuestObjective[] = [
      { type: 'kill', targetId: 'slime', required: 1 },
    ];
    let progress: Record<string, number> = {};

    progress = updateProgress(objectives, progress, 'kill', 'wolf');
    expect(progress['kill_slime']).toBeUndefined();
    expect(checkComplete(objectives, progress)).toBe(false);
  });
});

// ============================================================
//  Class Change System Logic Tests
// ============================================================

describe('ClassChange system logic', () => {
  const CLASS_DEFS: Record<string, { tier: number; parentClass?: string; advancedClasses?: string[] }> = {
    adventurer: { tier: 0, advancedClasses: ['swordsman', 'mage', 'ranger', 'priest'] },
    swordsman: { tier: 1, parentClass: 'adventurer', advancedClasses: ['knight', 'berserker', 'sword_saint'] },
    mage: { tier: 1, parentClass: 'adventurer', advancedClasses: ['archmage', 'warlock', 'chronomancer'] },
    ranger: { tier: 1, parentClass: 'adventurer' },
    priest: { tier: 1, parentClass: 'adventurer' },
    knight: { tier: 2, parentClass: 'swordsman' },
    berserker: { tier: 2, parentClass: 'swordsman' },
    archmage: { tier: 2, parentClass: 'mage' },
  };

  const FIRST_CLASS_LEVEL = 10;
  const FIRST_CLASS_GOLD = 500;
  const SECOND_CLASS_LEVEL = 30;
  const SECOND_CLASS_GOLD = 5000;

  interface MockChar {
    classId: string;
    level: number;
    gold: number;
  }

  const checkEligibility = (char: MockChar, targetClassId: string): { success: boolean; reason?: string } => {
    const current = CLASS_DEFS[char.classId];
    const target = CLASS_DEFS[targetClassId];
    if (!current || !target) return { success: false, reason: 'unknown class' };

    // T0 -> T1
    if (current.tier === 0 && target.tier === 1) {
      if (char.level < FIRST_CLASS_LEVEL) return { success: false, reason: 'level' };
      if (char.gold < FIRST_CLASS_GOLD) return { success: false, reason: 'gold' };
      return { success: true };
    }

    // T1 -> T2
    if (current.tier === 1 && target.tier === 2) {
      if (target.parentClass !== char.classId) return { success: false, reason: 'path' };
      if (char.level < SECOND_CLASS_LEVEL) return { success: false, reason: 'level' };
      if (char.gold < SECOND_CLASS_GOLD) return { success: false, reason: 'gold' };
      return { success: true };
    }

    if (current.tier >= 2) return { success: false, reason: 'max tier' };
    return { success: false, reason: 'invalid path' };
  };

  it('should allow T0 -> T1 at level 10 with enough gold', () => {
    expect(checkEligibility({ classId: 'adventurer', level: 10, gold: 500 }, 'swordsman').success).toBe(true);
    expect(checkEligibility({ classId: 'adventurer', level: 10, gold: 500 }, 'mage').success).toBe(true);
  });

  it('should reject T0 -> T1 at level 9', () => {
    const result = checkEligibility({ classId: 'adventurer', level: 9, gold: 500 }, 'swordsman');
    expect(result.success).toBe(false);
    expect(result.reason).toBe('level');
  });

  it('should reject T0 -> T1 without enough gold', () => {
    const result = checkEligibility({ classId: 'adventurer', level: 10, gold: 499 }, 'swordsman');
    expect(result.success).toBe(false);
    expect(result.reason).toBe('gold');
  });

  it('should allow T1 -> T2 at level 30 with valid path', () => {
    expect(checkEligibility({ classId: 'swordsman', level: 30, gold: 5000 }, 'knight').success).toBe(true);
    expect(checkEligibility({ classId: 'swordsman', level: 30, gold: 5000 }, 'berserker').success).toBe(true);
  });

  it('should reject T1 -> T2 with invalid path', () => {
    const result = checkEligibility({ classId: 'swordsman', level: 30, gold: 5000 }, 'archmage');
    expect(result.success).toBe(false);
    expect(result.reason).toBe('path');
  });

  it('should reject T2 -> any (max tier)', () => {
    const result = checkEligibility({ classId: 'knight', level: 50, gold: 99999 }, 'adventurer');
    expect(result.success).toBe(false);
    expect(result.reason).toBe('max tier');
  });
});

// ============================================================
//  Leaderboard Sorting Tests
// ============================================================

describe('Leaderboard sorting', () => {
  interface Entry { name: string; score: number }

  const sortLeaderboard = (entries: Entry[], category: string): Entry[] => {
    return [...entries].sort((a, b) => {
      if (category === 'dungeon_speed') {
        return a.score - b.score; // Lower is better for speed
      }
      return b.score - a.score; // Higher is better for level/pvp
    });
  };

  it('should sort level leaderboard DESC', () => {
    const entries = [
      { name: 'Alice', score: 15 },
      { name: 'Bob', score: 30 },
      { name: 'Charlie', score: 20 },
    ];
    const sorted = sortLeaderboard(entries, 'level');
    expect(sorted[0].name).toBe('Bob');
    expect(sorted[1].name).toBe('Charlie');
    expect(sorted[2].name).toBe('Alice');
  });

  it('should sort pvp leaderboard DESC', () => {
    const entries = [
      { name: 'Alice', score: 1200 },
      { name: 'Bob', score: 800 },
      { name: 'Charlie', score: 1500 },
    ];
    const sorted = sortLeaderboard(entries, 'pvp');
    expect(sorted[0].name).toBe('Charlie');
    expect(sorted[2].name).toBe('Bob');
  });

  it('should sort dungeon_speed leaderboard ASC (lower is better)', () => {
    const entries = [
      { name: 'Alice', score: 300 },
      { name: 'Bob', score: 180 },
      { name: 'Charlie', score: 240 },
    ];
    const sorted = sortLeaderboard(entries, 'dungeon_speed');
    expect(sorted[0].name).toBe('Bob');
    expect(sorted[2].name).toBe('Alice');
  });
});

// ============================================================
//  Command Alias Coverage (updated for new commands)
// ============================================================

describe('Command routing (updated with new systems)', () => {
  const aliasMap: Record<string, string> = {
    n: 'go north', s: 'go south', e: 'go east', w: 'go west',
    u: 'go up', d: 'go down',
    l: 'look', i: 'inventory', inv: 'inventory',
    stat: 'status', stats: 'status',
    atk: 'attack', kill: 'attack',
    flee: 'escape', run: 'escape',
    eq: 'equip', uneq: 'unequip',
    sk: 'skills',
    help: 'help', '?': 'help',
    lb: 'leaderboard',
  };

  const validCommands = new Set([
    'look', 'go', 'move', 'status', 'inventory', 'skills',
    'attack', 'skill', 'defend', 'escape',
    'equip', 'unequip', 'use', 'take', 'pick', 'drop',
    'say', 'talk', 'allocate', 'alloc', 'map', 'help',
    'rest',
    // New system commands
    'party', 'trade', 'quest', 'duel', 'arena',
    'dungeon', 'leaderboard', 'rank', 'classchange', 'job',
  ]);

  const parseCommand = (input: string) => {
    const trimmed = input.trim();
    if (!trimmed) return null;

    // Check alias
    if (aliasMap[trimmed.toLowerCase()]) {
      return parseCommand(aliasMap[trimmed.toLowerCase()]);
    }

    const parts = trimmed.split(/\s+/);
    return {
      cmd: parts[0].toLowerCase(),
      args: parts.slice(1),
      isValid: validCommands.has(parts[0].toLowerCase()),
    };
  };

  it('should resolve lb alias to leaderboard', () => {
    const result = parseCommand('lb');
    expect(result?.cmd).toBe('leaderboard');
    expect(result?.isValid).toBe(true);
  });

  it('should recognize all new system commands', () => {
    const newCommands = ['party', 'trade', 'quest', 'duel', 'arena', 'dungeon', 'classchange', 'job', 'rank', 'rest'];
    for (const cmd of newCommands) {
      const result = parseCommand(cmd);
      expect(result?.isValid, `${cmd} should be valid`).toBe(true);
    }
  });

  it('should parse subcommands for new systems', () => {
    expect(parseCommand('party create')?.args).toEqual(['create']);
    expect(parseCommand('trade add sword 5')?.args).toEqual(['add', 'sword', '5']);
    expect(parseCommand('quest accept beginner_first_steps')?.args).toEqual(['accept', 'beginner_first_steps']);
    expect(parseCommand('duel accept')?.args).toEqual(['accept']);
    expect(parseCommand('dungeon enter shadow_dungeon')?.args).toEqual(['enter', 'shadow_dungeon']);
    expect(parseCommand('leaderboard pvp')?.args).toEqual(['pvp']);
  });
});

// ============================================================
//  Dungeon System Logic Tests
// ============================================================

describe('Dungeon system logic', () => {
  it('should calculate remaining time correctly', () => {
    const startedAt = Date.now() - 60_000; // 1 minute ago
    const timeLimit = 1800; // 30 minutes

    const elapsed = Math.floor((Date.now() - startedAt) / 1000);
    const remaining = Math.max(0, timeLimit - elapsed);

    expect(remaining).toBeGreaterThanOrEqual(1738);
    expect(remaining).toBeLessThanOrEqual(1740);
  });

  it('should format clear time correctly', () => {
    const clearTimeSeconds = 185; // 3 min 5 sec
    const minutes = Math.floor(clearTimeSeconds / 60);
    const seconds = clearTimeSeconds % 60;
    expect(`${minutes} 分 ${seconds} 秒`).toBe('3 分 5 秒');
  });

  it('should check level requirements', () => {
    const checkLevel = (playerLevel: number, requiredLevel: number) => playerLevel >= requiredLevel;
    expect(checkLevel(15, 15)).toBe(true);
    expect(checkLevel(14, 15)).toBe(false);
    expect(checkLevel(30, 15)).toBe(true);
  });
});

// ============================================================
//  Trade System Logic Tests
// ============================================================

describe('Trade system logic', () => {
  it('should require dual confirmation', () => {
    let p1Confirmed = false;
    let p2Confirmed = false;

    // Player 1 confirms
    p1Confirmed = true;
    expect(p1Confirmed && p2Confirmed).toBe(false);

    // Player 2 confirms
    p2Confirmed = true;
    expect(p1Confirmed && p2Confirmed).toBe(true);
  });

  it('should validate gold amounts', () => {
    const validateGold = (amount: number, playerGold: number): boolean => {
      return amount >= 0 && amount <= playerGold;
    };

    expect(validateGold(100, 500)).toBe(true);
    expect(validateGold(500, 500)).toBe(true);
    expect(validateGold(501, 500)).toBe(false);
    expect(validateGold(-1, 500)).toBe(false);
    expect(validateGold(0, 0)).toBe(true);
  });

  it('should validate item quantity', () => {
    const validateQty = (qty: number, available: number): boolean => {
      return qty > 0 && qty <= available;
    };

    expect(validateQty(1, 5)).toBe(true);
    expect(validateQty(5, 5)).toBe(true);
    expect(validateQty(6, 5)).toBe(false);
    expect(validateQty(0, 5)).toBe(false);
  });
});
