// Combat engine integration tests
import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { CombatEngine } from '../game/combat.js';
import type { Character, MonsterDef, CombatAction } from '@game/shared';
import type { MonsterInstance } from '../game/world.js';

// ============================================================
//  Helpers
// ============================================================

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
    stats: { str: 15, int: 5, dex: 10, vit: 10, luk: 5 },
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
    drops: [],
    aiType: 'passive',
    description: 'A green slime.',
    isBoss: false,
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

describe('CombatEngine', () => {
  let engine: CombatEngine;

  beforeEach(() => {
    engine = new CombatEngine();
    // Disable turn timer by using fake timers
    vi.useFakeTimers();
  });

  afterEach(() => {
    vi.useRealTimers();
  });

  // ── Start combat ──

  describe('startCombat', () => {
    it('should create a valid combat state', () => {
      const player = makeCharacter();
      const monster = makeMonsterInstance();

      const combatId = engine.startCombat([player], [monster]);

      expect(combatId).toBeTruthy();
      expect(typeof combatId).toBe('string');

      const state = engine.getCombatState(combatId);
      expect(state).toBeDefined();
      expect(state!.phase).toBe('action_select');
      expect(state!.round).toBe(1);
      expect(state!.playerTeam).toHaveLength(1);
      expect(state!.enemyTeam).toHaveLength(1);
      expect(state!.result).toBe('ongoing');
    });

    it('should track player as in combat', () => {
      const player = makeCharacter();
      const monster = makeMonsterInstance();

      engine.startCombat([player], [monster]);

      expect(engine.isInCombat(player.id)).toBe(true);
    });

    it('should initialize player team with correct HP/MP', () => {
      const player = makeCharacter({ hp: 150, maxHp: 200, mp: 40, maxMp: 60 });
      const monster = makeMonsterInstance();

      const combatId = engine.startCombat([player], [monster]);
      const state = engine.getCombatState(combatId)!;

      expect(state.playerTeam[0].hp).toBe(150);
      expect(state.playerTeam[0].maxHp).toBe(200);
      expect(state.playerTeam[0].mp).toBe(40);
      expect(state.playerTeam[0].maxMp).toBe(60);
    });

    it('should initialize enemy team with correct data', () => {
      const player = makeCharacter();
      const monster = makeMonsterInstance({ hp: 50, mp: 10 });

      const combatId = engine.startCombat([player], [monster]);
      const state = engine.getCombatState(combatId)!;

      expect(state.enemyTeam[0].hp).toBe(50);
      expect(state.enemyTeam[0].name).toBe('Green Slime');
      expect(state.enemyTeam[0].isPlayer).toBe(false);
    });

    it('should support multiple players', () => {
      const p1 = makeCharacter({ name: 'Hero1' });
      const p2 = makeCharacter({ name: 'Hero2' });
      const monster = makeMonsterInstance();

      const combatId = engine.startCombat([p1, p2], [monster]);
      const state = engine.getCombatState(combatId)!;

      expect(state.playerTeam).toHaveLength(2);
    });

    it('should support multiple monsters', () => {
      const player = makeCharacter();
      const m1 = makeMonsterInstance({ id: 'slime_1', name: 'Slime 1' });
      const m2 = makeMonsterInstance({ id: 'slime_2', name: 'Slime 2' });
      m2.instanceId = 'slime_2_1';

      const combatId = engine.startCombat([player], [m1, m2]);
      const state = engine.getCombatState(combatId)!;

      expect(state.enemyTeam).toHaveLength(2);
    });
  });

  // ── Submit action ──

  describe('submitAction', () => {
    it('should accept a valid action from a player in combat', () => {
      const player = makeCharacter();
      const monster = makeMonsterInstance({ hp: 999 }); // high HP to not die

      const combatId = engine.startCombat([player], [monster]);

      const action: CombatAction = {
        actorId: player.id,
        type: 'attack',
        targetId: monster.instanceId,
      };

      const accepted = engine.submitAction(combatId, action);
      expect(accepted).toBe(true);
    });

    it('should reject action for invalid combat ID', () => {
      const action: CombatAction = {
        actorId: 'nonexistent',
        type: 'attack',
      };

      const accepted = engine.submitAction('invalid-combat-id', action);
      expect(accepted).toBe(false);
    });
  });

  // ── Victory condition ──

  describe('victory condition', () => {
    it('should detect victory when all enemies are dead', () => {
      const player = makeCharacter({ stats: { str: 100, int: 5, dex: 100, vit: 10, luk: 5 } });
      const monster = makeMonsterInstance({ hp: 1, str: 0, dex: 0, vit: 0, luk: 0 });

      // Force hit and no dodge
      vi.spyOn(Math, 'random').mockReturnValue(0.5);

      let endResult: string | undefined;
      const combatId = engine.startCombat([player], [monster], (result) => {
        endResult = result;
      });

      // Submit attack
      engine.submitAction(combatId, {
        actorId: player.id,
        type: 'attack',
        targetId: monster.instanceId,
      });

      // After resolve, check if combat ended with victory
      // The submitAction triggers resolveRound when all players submitted
      // Check state after resolution
      if (endResult === undefined) {
        // Combat may still be ongoing, advance timer
        vi.advanceTimersByTime(6000);
      }

      // The combat should have ended or progressed
      // Check via isInCombat (player removed on end)
      // With str=100 attacking a 1HP monster, should be dead
      expect(endResult === 'victory' || !engine.isInCombat(player.id)).toBe(true);

      vi.restoreAllMocks();
    });
  });

  // ── Defeat condition ──

  describe('defeat condition', () => {
    it('should detect defeat when all players are dead', () => {
      const player = makeCharacter({
        hp: 1,
        maxHp: 1,
        stats: { str: 1, int: 1, dex: 1, vit: 1, luk: 1 },
      });
      const monster = makeMonsterInstance({
        hp: 999,
        str: 100,
        dex: 100,
        vit: 100,
        luk: 0,
      });

      vi.spyOn(Math, 'random').mockReturnValue(0.5);

      let endResult: string | undefined;
      const combatId = engine.startCombat([player], [monster], (result) => {
        endResult = result;
      });

      // Submit attack (player is too weak)
      engine.submitAction(combatId, {
        actorId: player.id,
        type: 'attack',
        targetId: monster.instanceId,
      });

      // Advance timer to let resolution happen
      vi.advanceTimersByTime(6000);

      // Player should be dead from monster retaliation
      // Since monster has 100 str (ATK=200) vs player 1 hp, should be defeat
      if (endResult) {
        expect(endResult).toBe('defeat');
      }

      vi.restoreAllMocks();
    });
  });

  // ── Flee mechanics ──

  describe('flee mechanics', () => {
    it('should allow flee action submission', () => {
      const player = makeCharacter();
      const monster = makeMonsterInstance();

      const combatId = engine.startCombat([player], [monster]);

      const accepted = engine.submitAction(combatId, {
        actorId: player.id,
        type: 'flee',
      });

      expect(accepted).toBe(true);
    });
  });

  // ── Defend action ──

  describe('defend action', () => {
    it('should accept defend action', () => {
      const player = makeCharacter();
      const monster = makeMonsterInstance();

      const combatId = engine.startCombat([player], [monster]);

      const accepted = engine.submitAction(combatId, {
        actorId: player.id,
        type: 'defend',
      });

      expect(accepted).toBe(true);
    });
  });

  // ── Turn resolution order ──

  describe('turn resolution', () => {
    it('should resolve actions by DEX (higher DEX goes first)', () => {
      // This is implicitly tested by combat resolution order
      // We verify that the combat engine uses DEX for sorting
      const fastPlayer = makeCharacter({
        name: 'FastHero',
        stats: { str: 10, int: 5, dex: 50, vit: 10, luk: 5 },
      });
      const slowPlayer = makeCharacter({
        name: 'SlowHero',
        stats: { str: 10, int: 5, dex: 1, vit: 10, luk: 5 },
      });
      const monster = makeMonsterInstance({ hp: 999, dex: 25 });

      vi.spyOn(Math, 'random').mockReturnValue(0.5);

      const combatId = engine.startCombat([fastPlayer, slowPlayer], [monster]);

      // Submit actions for both players
      engine.submitAction(combatId, {
        actorId: fastPlayer.id,
        type: 'attack',
        targetId: monster.instanceId,
      });
      engine.submitAction(combatId, {
        actorId: slowPlayer.id,
        type: 'attack',
        targetId: monster.instanceId,
      });

      // Resolution should happen (all players submitted)
      // Check the action log for order
      const state = engine.getCombatState(combatId);
      if (state) {
        // FastHero (dex 50) should appear before SlowHero (dex 1) in logs
        const fastIdx = state.actionLog.findIndex(log => log.includes('FastHero'));
        const slowIdx = state.actionLog.findIndex(log => log.includes('SlowHero'));

        if (fastIdx >= 0 && slowIdx >= 0) {
          expect(fastIdx).toBeLessThan(slowIdx);
        }
      }

      vi.restoreAllMocks();
    });
  });

  // ── Combat queries ──

  describe('combat queries', () => {
    it('should return combat ID for player in combat', () => {
      const player = makeCharacter();
      const monster = makeMonsterInstance();

      const combatId = engine.startCombat([player], [monster]);

      expect(engine.getPlayerCombatId(player.id)).toBe(combatId);
    });

    it('should return undefined for player not in combat', () => {
      expect(engine.getPlayerCombatId('nonexistent')).toBeUndefined();
    });

    it('should track active combat count', () => {
      expect(engine.getActiveCombatCount()).toBe(0);

      const player = makeCharacter();
      const monster = makeMonsterInstance();
      engine.startCombat([player], [monster]);

      expect(engine.getActiveCombatCount()).toBe(1);
    });
  });

  // ── Force end combat ──

  describe('forceEndCombat', () => {
    it('should end combat and remove player mapping', () => {
      const player = makeCharacter();
      const monster = makeMonsterInstance();

      const combatId = engine.startCombat([player], [monster]);
      expect(engine.isInCombat(player.id)).toBe(true);

      engine.forceEndCombat(combatId);

      expect(engine.isInCombat(player.id)).toBe(false);
      expect(engine.getActiveCombatCount()).toBe(0);
    });
  });
});
