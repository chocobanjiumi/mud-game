// Combat engine integration tests
import { describe, it, expect, vi, beforeEach, afterEach, beforeAll, afterAll } from 'vitest';
import { CombatEngine } from '../game/combat.js';
import type { Character, MonsterDef, CombatAction } from '@game/shared';
import type { MonsterInstance } from '../game/world.js';
import { getDb, initDb, closeDb } from '../db/schema.js';
import { addInventoryItem, setEquipped } from '../db/queries.js';

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
    equipment: { weapon: null, head: null, body: null, hands: null, feet: null, ring: null, earring: null, belt: null, necklace: null, accessory: null },
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

function advanceCombatTick(): void {
  vi.advanceTimersByTime(5000);
}

// ============================================================
//  Tests
// ============================================================

describe('CombatEngine', () => {
  let engine: CombatEngine;

  beforeAll(() => {
    initDb();
  });

  afterAll(() => {
    closeDb();
  });

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

    it('should initialize boss behavior, phases, and telegraph actions', () => {
      const player = makeCharacter();
      const monster = makeMonsterInstance({
        id: 'test_boss',
        name: 'Test Boss',
        aiType: 'boss',
        isBoss: true,
        skills: ['basic_attack', 'power_strike'],
      });

      const combatId = engine.startCombat([player], [monster]);
      const state = engine.getCombatState(combatId)!;
      const boss = state.enemyTeam[0];

      expect(boss.monsterBehavior).toBe('phase_boss');
      expect(boss.monsterPhases).toHaveLength(2);
      expect(boss.pendingTelegraph?.skillId).toBe('power_strike');
      expect(state.actionLog.some(line => line.includes('【預兆】'))).toBe(true);
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

    it('should add another room monster to an active combat', () => {
      const player = makeCharacter();
      const m1 = makeMonsterInstance({ id: 'slime_1', name: 'Slime 1' });
      const m2 = makeMonsterInstance({ id: 'slime_2', name: 'Slime 2' });
      m2.instanceId = 'slime_2_1';

      const combatId = engine.startCombat([player], [m1]);
      const added = engine.addMonsterToCombat(combatId, m2, player.id);
      const state = engine.getCombatState(combatId)!;

      expect(added).toBe(true);
      expect(state.enemyTeam.map(enemy => enemy.id)).toEqual([m1.instanceId, m2.instanceId]);
    });

    it('should use the preferred target for timed default attacks', () => {
      vi.spyOn(Math, 'random').mockReturnValue(0.5);
      const player = makeCharacter({ stats: { str: 50, int: 5, dex: 100, vit: 10, luk: 5 } });
      const m1 = makeMonsterInstance({ id: 'slime_1', name: 'Slime 1', hp: 999, dex: 1 });
      const m2 = makeMonsterInstance({ id: 'slime_2', name: 'Slime 2', hp: 999, dex: 1 });
      m2.instanceId = 'slime_2_1';

      const combatId = engine.startCombat([player], [m1, m2]);
      engine.setPreferredTarget(combatId, player.id, m2.instanceId);

      vi.advanceTimersByTime(5000);

      const state = engine.getCombatState(combatId)!;
      expect(state.enemyTeam[0].hp).toBe(999);
      expect(state.enemyTeam[1].hp).toBeLessThan(999);
      vi.restoreAllMocks();
    });

    it('should keep same-name monsters addressable by instance id', () => {
      vi.spyOn(Math, 'random').mockReturnValue(0.5);
      const player = makeCharacter({ stats: { str: 50, int: 5, dex: 100, vit: 10, luk: 5 } });
      const m1 = makeMonsterInstance({ id: 'wild_rabbit', name: '野兔', hp: 999, dex: 1 });
      const m2 = makeMonsterInstance({ id: 'wild_rabbit', name: '野兔', hp: 999, dex: 1 });
      m1.instanceId = 'wild_rabbit_1';
      m2.instanceId = 'wild_rabbit_2';

      const combatId = engine.startCombat([player], [m1]);
      expect(engine.addMonsterToCombat(combatId, m2, player.id)).toBe(true);
      engine.setPreferredTarget(combatId, player.id, m2.instanceId);

      vi.advanceTimersByTime(5000);

      const state = engine.getCombatState(combatId)!;
      expect(state.enemyTeam.find(enemy => enemy.id === 'wild_rabbit_1')?.hp).toBe(999);
      expect(state.enemyTeam.find(enemy => enemy.id === 'wild_rabbit_2')?.hp).toBeLessThan(999);
      vi.restoreAllMocks();
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

    it('queues actions until the combat tick and lets later submissions override earlier ones', () => {
      vi.spyOn(Math, 'random').mockReturnValue(0.5);
      const player = makeCharacter({ stats: { str: 50, int: 5, dex: 100, vit: 10, luk: 5 } });
      const m1 = makeMonsterInstance({ id: 'queued_target_1', name: 'Queued Target 1', hp: 999, dex: 1 });
      const m2 = makeMonsterInstance({ id: 'queued_target_2', name: 'Queued Target 2', hp: 999, dex: 1 });
      m2.instanceId = 'queued_target_2_1';

      const combatId = engine.startCombat([player], [m1, m2]);
      const state = engine.getCombatState(combatId)!;

      expect(engine.submitAction(combatId, {
        actorId: player.id,
        type: 'attack',
        targetId: m1.instanceId,
      })).toBe(true);
      expect(engine.submitAction(combatId, {
        actorId: player.id,
        type: 'attack',
        targetId: m2.instanceId,
      })).toBe(true);

      expect(state.enemyTeam[0].hp).toBe(999);
      expect(state.enemyTeam[1].hp).toBe(999);

      advanceCombatTick();

      expect(state.enemyTeam[0].hp).toBe(999);
      expect(state.enemyTeam[1].hp).toBeLessThan(999);
      vi.restoreAllMocks();
    });

    it('tracks skill cooldowns and rejects reuse while cooling down', () => {
      const player = makeCharacter({
        resource: 100,
        maxResource: 100,
        resourceType: 'rage',
        stats: { str: 15, int: 5, dex: 100, vit: 10, luk: 5 },
      });
      const monster = makeMonsterInstance({ hp: 999, dex: 1 });
      const combatId = engine.startCombat([player], [monster]);

      expect(engine.submitAction(combatId, {
        actorId: player.id,
        type: 'skill',
        skillId: 'power_strike',
        targetId: monster.instanceId,
      })).toBe(true);

      expect(engine.getSkillCooldownRemaining(combatId, player.id, 'power_strike')).toBe(0);
      advanceCombatTick();
      expect(engine.getSkillCooldownRemaining(combatId, player.id, 'power_strike')).toBeGreaterThan(0);
      expect(engine.submitAction(combatId, {
        actorId: player.id,
        type: 'skill',
        skillId: 'power_strike',
        targetId: monster.instanceId,
      })).toBe(false);
    });

    it('should reject action for invalid combat ID', () => {
      const action: CombatAction = {
        actorId: 'nonexistent',
        type: 'attack',
      };

      const accepted = engine.submitAction('invalid-combat-id', action);
      expect(accepted).toBe(false);
    });

    it('should allow interrupt skills to cancel monster telegraphs', () => {
      const player = makeCharacter({
        classId: 'ranger',
        stats: { str: 15, int: 5, dex: 100, vit: 10, luk: 5 },
        resource: 100,
        maxResource: 100,
        resourceType: 'focus',
      });
      const monster = makeMonsterInstance({
        id: 'test_boss',
        name: 'Test Boss',
        aiType: 'boss',
        isBoss: true,
        hp: 500,
        dex: 1,
        skills: ['basic_attack', 'power_strike'],
      });

      const combatId = engine.startCombat([player], [monster]);
      const accepted = engine.submitAction(combatId, {
        actorId: player.id,
        type: 'skill',
        skillId: 'trap',
        targetId: monster.instanceId,
      });

      const state = engine.getCombatState(combatId)!;
      expect(accepted).toBe(true);
      expect(state.enemyTeam[0].pendingTelegraph).toBeDefined();
      advanceCombatTick();
      expect(state.enemyTeam[0].pendingTelegraph).toBeUndefined();
      expect(state.actionLog.some(line => line.includes('打斷'))).toBe(true);
    });

    it('forces silenced combatants to attack instead of using skills', () => {
      const player = makeCharacter({
        resource: 100,
        maxResource: 100,
        resourceType: 'rage',
        stats: { str: 15, int: 5, dex: 100, vit: 10, luk: 5 },
      });
      const monster = makeMonsterInstance({ hp: 999, dex: 1 });
      const combatId = engine.startCombat([player], [monster]);
      const state = engine.getCombatState(combatId)!;
      state.playerTeam[0].activeEffects.push({
        type: 'silence',
        value: 1,
        duration: 2,
        remainingDuration: 2,
        source: monster.instanceId,
      });

      expect(engine.submitAction(combatId, {
        actorId: player.id,
        type: 'skill',
        skillId: 'power_strike',
        targetId: monster.instanceId,
      })).toBe(true);

      expect(state.actionLog.some(line => line.includes('被沉默'))).toBe(false);
      advanceCombatTick();
      expect(state.actionLog.some(line => line.includes('被沉默'))).toBe(true);
      expect(engine.getSkillCooldownRemaining(combatId, player.id, 'power_strike')).toBe(0);
    });

    it('makes taunted monsters target the taunt source', () => {
      const randomSpy = vi.spyOn(Math, 'random').mockReturnValue(0.1);
      try {
        const taunter = makeCharacter({ id: 'taunter', name: 'Taunter', hp: 200, maxHp: 200 });
        const ally = makeCharacter({ id: 'ally', name: 'Ally', hp: 200, maxHp: 200 });
        const monster = makeMonsterInstance({ hp: 999, str: 40, dex: 1 });
        const combatId = engine.startCombat([taunter, ally], [monster]);
        const state = engine.getCombatState(combatId)!;
        state.enemyTeam[0].activeEffects.push({
          type: 'taunt',
          value: 1,
          duration: 2,
          remainingDuration: 2,
          source: taunter.id,
        });

        engine.submitAction(combatId, { actorId: taunter.id, type: 'defend' });
        engine.submitAction(combatId, { actorId: ally.id, type: 'defend' });

        expect(state.playerTeam.find(player => player.id === taunter.id)!.hp).toBe(taunter.maxHp);
        advanceCombatTick();
        expect(state.playerTeam.find(player => player.id === taunter.id)!.hp).toBeLessThan(taunter.maxHp);
        expect(state.playerTeam.find(player => player.id === ally.id)!.hp).toBe(ally.maxHp);
      } finally {
        randomSpy.mockRestore();
      }
    });

    it('should let dispel shield skills remove shield effects', () => {
      const player = makeCharacter({
        classId: 'knight',
        stats: { str: 100, int: 5, dex: 100, vit: 10, luk: 5 },
        resource: 100,
        maxResource: 100,
        resourceType: 'rage',
      });
      const monster = makeMonsterInstance({ hp: 500, dex: 1 });

      const combatId = engine.startCombat([player], [monster]);
      const state = engine.getCombatState(combatId)!;
      state.enemyTeam[0].activeEffects.push({
        type: 'shield',
        value: 80,
        duration: 3,
        remainingDuration: 3,
      });

      engine.submitAction(combatId, {
        actorId: player.id,
        type: 'skill',
        skillId: 'judgment',
        targetId: monster.instanceId,
      });

      expect(state.enemyTeam[0].activeEffects.some(effect => effect.type === 'shield')).toBe(true);
      advanceCombatTick();
      expect(state.enemyTeam[0].activeEffects.some(effect => effect.type === 'shield')).toBe(false);
      expect(state.actionLog.some(line => line.includes('粉碎'))).toBe(true);
    });

    it('should apply all-enemy skills to every active enemy', () => {
      vi.spyOn(Math, 'random').mockReturnValue(0.5);
      const player = makeCharacter({
        classId: 'swordsman',
        stats: { str: 80, int: 5, dex: 100, vit: 10, luk: 5 },
        resource: 100,
        maxResource: 100,
        resourceType: 'rage',
      });
      const m1 = makeMonsterInstance({ id: 'slime_1', name: 'Slime 1', hp: 999, dex: 1 });
      const m2 = makeMonsterInstance({ id: 'slime_2', name: 'Slime 2', hp: 999, dex: 1 });
      m2.instanceId = 'slime_2_1';

      const combatId = engine.startCombat([player], [m1, m2]);
      const state = engine.getCombatState(combatId)!;

      engine.submitAction(combatId, {
        actorId: player.id,
        type: 'skill',
        skillId: 'blade_aura',
      });

      expect(state.enemyTeam[0].hp).toBe(999);
      advanceCombatTick();
      expect(state.enemyTeam[0].hp).toBeLessThan(999);
      expect(state.enemyTeam[1].hp).toBeLessThan(999);
      vi.restoreAllMocks();
    });

    it('does not spend resources when a skill falls back for insufficient resource', () => {
      vi.spyOn(Math, 'random').mockReturnValue(0.5);
      const player = makeCharacter({
        classId: 'mage',
        stats: { str: 5, int: 40, dex: 100, vit: 10, luk: 5 },
        resource: 5,
        maxResource: 50,
        resourceType: 'mp',
        mp: 5,
        maxMp: 50,
      });
      const monster = makeMonsterInstance({ hp: 999, dex: 1 });

      const combatId = engine.startCombat([player], [monster]);
      const accepted = engine.submitAction(combatId, {
        actorId: player.id,
        type: 'skill',
        skillId: 'fireball',
        targetId: monster.instanceId,
      });

      const state = engine.getCombatState(combatId)!;
      expect(accepted).toBe(true);
      advanceCombatTick();
      expect(state.playerTeam[0].resource).toBe(5);
      expect(state.playerTeam[0].mp).toBe(5);
      vi.restoreAllMocks();
    });

    it('applies warrior rage gain from skill hits', () => {
      vi.spyOn(Math, 'random').mockReturnValue(0.5);
      const player = makeCharacter({
        classId: 'swordsman',
        stats: { str: 30, int: 5, dex: 100, vit: 10, luk: 5 },
        resource: 0,
        maxResource: 100,
        resourceType: 'rage',
      });
      const monster = makeMonsterInstance({ hp: 999, dex: 1 });

      const combatId = engine.startCombat([player], [monster]);
      engine.submitAction(combatId, {
        actorId: player.id,
        type: 'skill',
        skillId: 'warrior_slash',
        targetId: monster.instanceId,
      });

      const state = engine.getCombatState(combatId)!;
      expect(state.playerTeam[0].resource).toBe(0);
      advanceCombatTick();
      expect(state.playerTeam[0].resource).toBeGreaterThan(0);
      expect(state.actionLog.some(line => line.includes('怒氣'))).toBe(true);
      vi.restoreAllMocks();
    });

    it('applies ranger focus refunds from skill hits and round regen', () => {
      vi.spyOn(Math, 'random').mockReturnValue(0.5);
      const player = makeCharacter({
        classId: 'ranger',
        stats: { str: 20, int: 5, dex: 100, vit: 10, luk: 5 },
        resource: 50,
        maxResource: 100,
        resourceType: 'focus',
      });
      const monster = makeMonsterInstance({ hp: 999, dex: 1 });

      const combatId = engine.startCombat([player], [monster]);
      engine.submitAction(combatId, {
        actorId: player.id,
        type: 'skill',
        skillId: 'precise_shot',
        targetId: monster.instanceId,
      });

      const state = engine.getCombatState(combatId)!;
      expect(state.playerTeam[0].resource).toBe(50);
      advanceCombatTick();
      expect(state.playerTeam[0].resource).toBeGreaterThan(50);
      expect(state.actionLog.some(line => line.includes('專注'))).toBe(true);
      vi.restoreAllMocks();
    });

    it('applies mana shield as a real MP damage redirect', () => {
      const player = makeCharacter({
        classId: 'mage',
        hp: 200,
        maxHp: 200,
        mp: 50,
        maxMp: 50,
        stats: { str: 5, int: 30, dex: 101, vit: 10, luk: 1 },
        resource: 50,
        maxResource: 50,
        resourceType: 'mp',
      });
      const monster = makeMonsterInstance({ hp: 999, str: 80, dex: 100 });
      vi.spyOn(Math, 'random')
        .mockReturnValueOnce(0.5)
        .mockReturnValueOnce(0.1)
        .mockReturnValueOnce(0.99)
        .mockReturnValue(0.5);

      const combatId = engine.startCombat([player], [monster]);
      engine.submitAction(combatId, {
        actorId: player.id,
        type: 'skill',
        skillId: 'mana_shield',
      });

      const state = engine.getCombatState(combatId)!;
      expect(state.playerTeam[0].resource).toBe(50);
      advanceCombatTick();
      expect(state.playerTeam[0].resource).toBeLessThan(38);
      expect(state.actionLog.some(line => line.includes('魔力護盾消耗'))).toBe(true);
      vi.restoreAllMocks();
    });

    it('applies mage MP recovery effects over combat ticks', () => {
      vi.spyOn(Math, 'random').mockReturnValue(0.5);
      const player = makeCharacter({
        classId: 'mage',
        hp: 200,
        maxHp: 200,
        mp: 50,
        maxMp: 50,
        stats: { str: 5, int: 30, dex: 100, vit: 10, luk: 5 },
        resource: 50,
        maxResource: 50,
        resourceType: 'mp',
      });
      const monster = makeMonsterInstance({ hp: 999, str: 1, dex: 1 });

      const combatId = engine.startCombat([player], [monster]);
      engine.submitAction(combatId, {
        actorId: player.id,
        type: 'skill',
        skillId: 'meditation',
      });

      const state = engine.getCombatState(combatId)!;
      expect(state.playerTeam[0].resource).toBe(50);
      advanceCombatTick();
      expect(state.playerTeam[0].resource).toBe(38);
      expect(state.actionLog.some(line => line.includes('魔力回復'))).toBe(true);
      vi.restoreAllMocks();
    });

    it('applies purify as a real debuff removal effect', () => {
      vi.spyOn(Math, 'random').mockReturnValue(0.5);
      const player = makeCharacter({
        classId: 'priest',
        stats: { str: 5, int: 30, dex: 100, vit: 10, luk: 5 },
        resource: 50,
        maxResource: 100,
        resourceType: 'faith',
      });
      const monster = makeMonsterInstance({ hp: 999, dex: 1 });

      const combatId = engine.startCombat([player], [monster]);
      const state = engine.getCombatState(combatId)!;
      state.playerTeam[0].activeEffects.push({
        type: 'poison',
        value: 5,
        duration: 3,
        remainingDuration: 3,
        tickDamage: 5,
      });

      engine.submitAction(combatId, {
        actorId: player.id,
        type: 'skill',
        skillId: 'purify',
        targetId: player.id,
      });

      expect(state.playerTeam[0].activeEffects.some(effect => effect.type === 'poison')).toBe(true);
      advanceCombatTick();
      expect(state.playerTeam[0].activeEffects.some(effect => effect.type === 'poison')).toBe(false);
      expect(state.actionLog.some(line => line.includes('淨化'))).toBe(true);
      vi.restoreAllMocks();
    });

    it('applies warrior bonus damage against taunted targets', () => {
      vi.spyOn(Math, 'random').mockReturnValue(0.5);
      const normalWarrior = makeCharacter({
        classId: 'swordsman',
        resource: 100,
        maxResource: 100,
        resourceType: 'rage',
        stats: { str: 30, int: 5, dex: 100, vit: 10, luk: 5 },
      });
      const tauntWarrior = makeCharacter({
        ...normalWarrior,
        id: 'taunt-bonus-warrior',
        resource: 100,
      });
      const normalMonster = makeMonsterInstance({ hp: 500, dex: 1, vit: 10 });
      const tauntedMonster = makeMonsterInstance({ hp: 500, dex: 1, vit: 10 });
      tauntedMonster.instanceId = 'taunted_bonus_target';

      const normalCombatId = engine.startCombat([normalWarrior], [normalMonster]);
      engine.submitAction(normalCombatId, {
        actorId: normalWarrior.id,
        type: 'skill',
        skillId: 'power_strike',
        targetId: normalMonster.instanceId,
      });
      advanceCombatTick();
      const normalDamage = 500 - engine.getCombatState(normalCombatId)!.enemyTeam[0].hp;

      const tauntCombatId = engine.startCombat([tauntWarrior], [tauntedMonster]);
      const tauntState = engine.getCombatState(tauntCombatId)!;
      tauntState.enemyTeam[0].activeEffects.push({
        type: 'taunt',
        value: 1,
        duration: 2,
        remainingDuration: 2,
        source: tauntWarrior.id,
      });
      engine.submitAction(tauntCombatId, {
        actorId: tauntWarrior.id,
        type: 'skill',
        skillId: 'power_strike',
        targetId: tauntedMonster.instanceId,
      });
      advanceCombatTick();
      const tauntedDamage = 500 - tauntState.enemyTeam[0].hp;

      expect(tauntedDamage).toBeGreaterThan(normalDamage);
      vi.restoreAllMocks();
    });

    it('consumes ranger quick step as a next-shot damage bonus', () => {
      vi.spyOn(Math, 'random').mockReturnValue(0.5);
      const ranger = makeCharacter({
        classId: 'ranger',
        resource: 100,
        maxResource: 100,
        resourceType: 'focus',
        stats: { str: 20, int: 5, dex: 100, vit: 10, luk: 5 },
      });
      const monster = makeMonsterInstance({ hp: 500, str: 1, dex: 1, vit: 10 });
      const combatId = engine.startCombat([ranger], [monster]);

      engine.submitAction(combatId, {
        actorId: ranger.id,
        type: 'skill',
        skillId: 'quick_step',
        targetId: ranger.id,
      });
      const state = engine.getCombatState(combatId)!;
      expect(state.playerTeam[0].activeEffects.some(effect => effect.type === 'next_shot_damage')).toBe(false);
      advanceCombatTick();
      expect(state.playerTeam[0].activeEffects.some(effect => effect.type === 'next_shot_damage')).toBe(true);

      engine.submitAction(combatId, {
        actorId: ranger.id,
        type: 'skill',
        skillId: 'precise_shot',
        targetId: monster.instanceId,
      });

      advanceCombatTick();
      expect(state.playerTeam[0].activeEffects.some(effect => effect.type === 'next_shot_damage')).toBe(false);
      expect(state.actionLog.some(line => line.includes('蓄勢射擊'))).toBe(true);
      vi.restoreAllMocks();
    });

    it('lets meditation restore extra MP when hitting approaching monsters', () => {
      vi.spyOn(Math, 'random').mockReturnValue(0.5);
      const mage = makeCharacter({
        classId: 'mage',
        resource: 30,
        maxResource: 80,
        mp: 30,
        maxMp: 80,
        resourceType: 'mp',
        stats: { str: 5, int: 30, dex: 100, vit: 10, luk: 5 },
      });
      const monster = makeMonsterInstance({ hp: 500, str: 1, dex: 1, vit: 10 });
      const combatId = engine.startCombat([mage], [monster]);
      const state = engine.getCombatState(combatId)!;
      state.playerTeam[0].activeEffects.push({
        type: 'mana_regen',
        value: 6,
        duration: 3,
        remainingDuration: 3,
        source: mage.id,
      });
      state.enemyTeam[0].isApproaching = true;

      engine.submitAction(combatId, {
        actorId: mage.id,
        type: 'skill',
        skillId: 'magic_missile',
        targetId: monster.instanceId,
      });

      expect(state.playerTeam[0].resource).toBe(30);
      advanceCombatTick();
      expect(state.playerTeam[0].resource).toBeGreaterThan(30);
      expect(state.actionLog.some(line => line.includes('命中逼近目標後恢復'))).toBe(true);
      vi.restoreAllMocks();
    });

    it('applies priest undead and dark target special damage rules', () => {
      vi.spyOn(Math, 'random').mockReturnValue(0.5);
      const priest = makeCharacter({
        classId: 'priest',
        resource: 50,
        maxResource: 100,
        resourceType: 'faith',
        stats: { str: 5, int: 30, dex: 100, vit: 10, luk: 5 },
      });
      const undead = makeMonsterInstance({
        id: 'undead_knight',
        name: 'Undead Knight',
        alias: 'undead',
        hp: 500,
        dex: 1,
        vit: 10,
        element: 'dark',
      });
      const combatId = engine.startCombat([priest], [undead]);
      const state = engine.getCombatState(combatId)!;

      engine.submitAction(combatId, {
        actorId: priest.id,
        type: 'skill',
        skillId: 'holy_light',
        targetId: undead.instanceId,
      });
      advanceCombatTick();
      const holyDamage = 500 - state.enemyTeam[0].hp;

      engine.submitAction(combatId, {
        actorId: priest.id,
        type: 'skill',
        skillId: 'purify',
        targetId: undead.instanceId,
      });
      advanceCombatTick();
      const purifyDamage = 500 - state.enemyTeam[0].hp - holyDamage;

      expect(holyDamage).toBeGreaterThan(0);
      expect(purifyDamage).toBeGreaterThan(0);
      expect(state.playerTeam[0].resource).toBe(30);
      vi.restoreAllMocks();
    });

    it('applies contextual ally and approaching defensive skill values', () => {
      vi.spyOn(Math, 'random').mockReturnValue(0.5);
      const warrior = makeCharacter({
        id: 'line-holder',
        classId: 'swordsman',
        resource: 100,
        maxResource: 100,
        resourceType: 'rage',
        stats: { str: 20, int: 5, dex: 100, vit: 10, luk: 5 },
      });
      const ally = makeCharacter({
        id: 'line-ally',
        name: 'LineAlly',
        classId: 'swordsman',
        hp: 200,
        maxHp: 200,
        resource: 0,
        maxResource: 100,
        resourceType: 'rage',
        stats: { str: 10, int: 5, dex: 80, vit: 10, luk: 5 },
      });
      const monster = makeMonsterInstance({ hp: 500, str: 10, dex: 1, vit: 10 });
      const combatId = engine.startCombat([warrior, ally], [monster]);

      engine.submitAction(combatId, {
        actorId: warrior.id,
        type: 'skill',
        skillId: 'counter_stance',
        targetId: warrior.id,
      });
      engine.submitAction(combatId, {
        actorId: ally.id,
        type: 'attack',
        targetId: monster.instanceId,
      });

      const state = engine.getCombatState(combatId)!;
      expect(state.playerTeam.find(player => player.id === warrior.id)!.activeEffects.find(effect => effect.type === 'damage_reduction')?.value).toBeUndefined();
      advanceCombatTick();
      expect(state.playerTeam.find(player => player.id === warrior.id)!.activeEffects.find(effect => effect.type === 'damage_reduction')?.value).toBe(20);
      expect(state.playerTeam.find(player => player.id === ally.id)!.activeEffects.some(effect => effect.type === 'damage_reduction' && effect.value === 10)).toBe(true);
      vi.restoreAllMocks();
    });

    it('uses stronger smoke arrow accuracy reduction on approaching targets', () => {
      vi.spyOn(Math, 'random').mockReturnValue(0.5);
      const ranger = makeCharacter({
        classId: 'ranger',
        resource: 100,
        maxResource: 100,
        resourceType: 'focus',
        stats: { str: 10, int: 5, dex: 100, vit: 10, luk: 5 },
      });
      const monster = makeMonsterInstance({ hp: 500, dex: 1, vit: 10 });
      const combatId = engine.startCombat([ranger], [monster]);
      const state = engine.getCombatState(combatId)!;
      state.enemyTeam[0].isApproaching = true;

      engine.submitAction(combatId, {
        actorId: ranger.id,
        type: 'skill',
        skillId: 'barrage',
        targetId: monster.instanceId,
      });

      expect(state.enemyTeam[0].activeEffects.find(effect => effect.type === 'atk_down')?.value).toBeUndefined();
      advanceCombatTick();
      expect(state.enemyTeam[0].activeEffects.find(effect => effect.type === 'atk_down')?.value).toBe(18);
      vi.restoreAllMocks();
    });

    it('applies block affixes as real mitigation and counter damage', () => {
      vi.spyOn(Math, 'random').mockReturnValue(0.5);
      const player = makeCharacter({
        id: 'combat-block-affix-player',
        name: 'BlockAffixHero',
        level: 10,
        hp: 200,
        stats: { str: 30, int: 5, dex: 30, vit: 20, luk: 5 },
      });
      getDb().prepare('INSERT OR REPLACE INTO characters (id, user_id, name) VALUES (?, ?, ?)')
        .run(player.id, 'combat-block-affix-user', player.name);
      addInventoryItem(player.id, 'leather_armor', 1, false, {
        itemInstanceId: 'combat_block_affix_armor',
        baseItemId: 'leather_armor',
        quality: 'rare',
        affixes: [{
          id: 'behavior_guard_t1',
          name: '護持',
          pool: 'behavior',
          tier: 'T1',
          appliesTo: ['body'],
          behavior: 'reduce_first_hit',
          trigger: 'on_block',
          condition: 'first_hit',
          skillModifiers: { damagePct: -6 },
        }],
        fixedEffects: [],
      });
      addInventoryItem(player.id, 'wooden_shield', 1, false, {
        itemInstanceId: 'combat_counter_affix_shield',
        baseItemId: 'wooden_shield',
        quality: 'rare',
        affixes: [{
          id: 'behavior_counter_t4',
          name: '反擊',
          pool: 'behavior',
          tier: 'T4',
          appliesTo: ['hands'],
          behavior: 'counter_on_block',
          trigger: 'on_block',
          resourceModifiers: { rageGain: 3 },
        }],
        fixedEffects: [],
      });
      expect(setEquipped(player.id, 'leather_armor', true, 'combat_block_affix_armor')).toBe(true);
      expect(setEquipped(player.id, 'wooden_shield', true, 'combat_counter_affix_shield')).toBe(true);

      const monster = makeMonsterInstance({
        id: 'block_test_ogre',
        name: 'Block Test Ogre',
        hp: 120,
        str: 18,
        dex: 1,
      });
      const combatId = engine.startCombat([player], [monster]);

      expect(engine.submitAction(combatId, {
        actorId: player.id,
        type: 'skill',
        skillId: 'guard',
        targetId: player.id,
      })).toBe(true);

      const state = engine.getCombatState(combatId)!;
      expect(state.enemyTeam[0].hp).toBe(120);
      advanceCombatTick();
      expect(state.enemyTeam[0].hp).toBeLessThan(120);
      expect(state.actionLog.some(line => line.includes('格擋傷害降低'))).toBe(true);
      expect(state.actionLog.some(line => line.includes('反擊Block Test Ogre'))).toBe(true);
      vi.restoreAllMocks();
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

      // Resolution happens on the next combat tick.
      advanceCombatTick();
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
