import { describe, expect, it } from 'vitest';
import { NPCS } from '../data/npcs.js';
import { ROOMS } from '../data/rooms.js';
import { MAIN_QUEST_FLOW, validateMainQuestFlow } from '../game/main-quest-flow.js';
import { QUEST_DEFS } from '../game/quest.js';
import { MAIN_QUEST_ORDER } from '../game/quest-system.js';

const EXPECTED_MAIN_QUEST_IDS = [
  'main_01_awakening',
  'main_02_first_battle',
  'main_03_forest_threat',
  'main_04_coastal_mystery',
  'main_05_pirate_lord',
  'main_06_volcano_seal',
  'main_07_frozen_castle',
  'main_08_demon_invasion',
  'main_09_dragon_alliance',
  'main_10_final_battle',
];

describe('main quest flow', () => {
  it('uses the fixed first ten main quest ids and order', () => {
    expect(MAIN_QUEST_ORDER).toEqual(EXPECTED_MAIN_QUEST_IDS);
    expect(MAIN_QUEST_FLOW.map(entry => entry.questId)).toEqual(EXPECTED_MAIN_QUEST_IDS);
  });

  it('has complete metadata pointing to real quest, npc, and room ids', () => {
    expect(validateMainQuestFlow({ quests: QUEST_DEFS, npcs: NPCS, rooms: ROOMS })).toEqual([]);
  });

  it('gives every first-ten main quest exp, gold, and equipment reward', () => {
    for (const questId of EXPECTED_MAIN_QUEST_IDS) {
      const rewards = QUEST_DEFS[questId].rewards;
      expect(rewards.exp, questId).toBeGreaterThan(0);
      expect(rewards.gold, questId).toBeGreaterThan(0);
      expect(Boolean(rewards.items?.length || rewards.equipmentSlotRewards?.length), questId).toBe(true);
    }
  });
});
