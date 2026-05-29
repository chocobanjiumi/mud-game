import { afterAll, afterEach, beforeAll, beforeEach, describe, expect, it } from 'vitest';
import type { Character } from '@game/shared';
import { NPCS } from '../data/npcs.js';
import { closeDb, getDb, initDb } from '../db/schema.js';
import { buildDialogueOptions, mainQuestVirtualNodeId, resolveDialogueNode } from '../game/commands.js';

function makeCharacter(id: string): Character {
  return {
    id,
    userId: `user-${id}`,
    name: `Tester ${id}`,
    level: 1,
    exp: 0,
    classId: 'adventurer',
    hp: 100,
    mp: 30,
    maxHp: 100,
    maxMp: 30,
    stats: { str: 5, int: 5, dex: 5, vit: 5, luk: 5 },
    freePoints: 0,
    gold: 0,
    roomId: 'village_square',
    isAi: false,
    equipment: { weapon: null, offhand: null, head: null, body: null, hands: null, feet: null, ring: null, earring: null, belt: null, necklace: null, accessory: null },
    createdAt: Date.now(),
    lastLogin: Date.now(),
  };
}

function setQuestProgress(characterId: string, status: 'active' | 'completed', progress = '{}'): void {
  getDb()
    .prepare(
      'INSERT OR REPLACE INTO quest_progress (character_id, quest_id, status, progress, started_at, completed_at) VALUES (?, ?, ?, ?, unixepoch(), ?)',
    )
    .run(characterId, 'main_01_awakening', status, progress, status === 'completed' ? Math.floor(Date.now() / 1000) : null);
}

function upsertCharacter(characterId: string): void {
  getDb()
    .prepare(
      "INSERT OR REPLACE INTO characters (id, user_id, name, level, class_id, room_id) VALUES (?, ?, ?, 1, 'adventurer', 'village_square')",
    )
    .run(characterId, `user-${characterId}`, `Tester ${characterId}`);
}

function deleteQuestProgress(characterId: string): void {
  getDb().prepare('DELETE FROM quest_progress WHERE character_id = ?').run(characterId);
}

describe('npc main quest dialogue', () => {
  const npc = NPCS.village_chief;
  const greeting = npc.dialogue[0];

  beforeAll(() => {
    initDb();
  });

  beforeEach(() => {
    deleteQuestProgress('dialogue-new');
    deleteQuestProgress('dialogue-active');
    deleteQuestProgress('dialogue-ready');
    upsertCharacter('dialogue-new');
    upsertCharacter('dialogue-active');
    upsertCharacter('dialogue-ready');
  });

  afterEach(() => {
    deleteQuestProgress('dialogue-new');
    deleteQuestProgress('dialogue-active');
    deleteQuestProgress('dialogue-ready');
  });

  afterAll(() => {
    closeDb();
  });

  it('shows the main_01_awakening accept option for a new character talking to the village chief', () => {
    const options = buildDialogueOptions(npc, greeting, makeCharacter('dialogue-new'));

    expect(options.some(option => option.nextId === mainQuestVirtualNodeId('start', 'main_01_awakening'))).toBe(true);
    expect(resolveDialogueNode(npc, mainQuestVirtualNodeId('start', 'main_01_awakening'))).toMatchObject({
      action: { type: 'quest_start', data: { questId: 'main_01_awakening' } },
    });
  });

  it('does not show the same accept option after the quest is active', () => {
    setQuestProgress('dialogue-active', 'active');

    const options = buildDialogueOptions(npc, greeting, makeCharacter('dialogue-active'));

    expect(options.some(option => option.nextId === mainQuestVirtualNodeId('start', 'main_01_awakening'))).toBe(false);
    expect(options.some(option => option.nextId === mainQuestVirtualNodeId('active', 'main_01_awakening'))).toBe(true);
  });

  it('shows the completion option once all objectives are ready', () => {
    setQuestProgress('dialogue-ready', 'active', JSON.stringify({
      talk_village_chief: 1,
      visit_adventurer_guild: 1,
      visit_weapon_shop: 1,
      visit_potion_shop: 1,
      visit_starter_village_portal_shrine: 1,
      inspect_object_portal_starter_village: 1,
    }));

    const options = buildDialogueOptions(npc, greeting, makeCharacter('dialogue-ready'));

    expect(options.some(option => option.nextId === mainQuestVirtualNodeId('complete', 'main_01_awakening'))).toBe(true);
    expect(resolveDialogueNode(npc, mainQuestVirtualNodeId('complete', 'main_01_awakening'))).toMatchObject({
      action: { type: 'quest_complete', data: { questId: 'main_01_awakening' } },
    });
  });
});
