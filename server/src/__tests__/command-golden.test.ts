import { afterAll, beforeAll, describe, expect, it } from 'vitest';
import { randomUUID } from 'crypto';
import type { ServerMessage } from '@game/shared';
import type { WebSocket } from 'ws';
import { closeDb, initDb } from '../db/schema.js';
import { addInventoryItem, createCharacter, saveCharacter } from '../db/queries.js';
import { handleCommand } from '../game/commands.js';
import { initGameSystems, shutdownGameSystems, world } from '../game/state.js';
import { bindCharacter, createSession, removeSession } from '../ws/handler.js';

process.env.LOG_LEVEL = 'silent';

let testCounter = 0;

function createCapturingSession(roomId = 'village_square') {
  const messages: ServerMessage[] = [];
  const ws = {
    readyState: 1,
    send: (data: string) => {
      messages.push(JSON.parse(data) as ServerMessage);
    },
    close: () => {},
  } as unknown as WebSocket;

  const session = createSession(ws);
  const id = ++testCounter;
  const suffix = `${Date.now()}-${id}-${randomUUID().slice(0, 8)}`;
  const char = createCharacter(`golden-user-${suffix}`, `GoldenHero${suffix}`);
  char.roomId = roomId;
  if (roomId !== 'village_square') saveCharacter(char);
  world.placePlayer(char.id, roomId);
  bindCharacter(session.sessionId, char.id, char.userId);

  return { session, char, messages };
}

function summarize(messages: ServerMessage[]): string[] {
  return messages.map((message) => {
    const payload = message.payload as Record<string, unknown>;
    if (message.type === 'room') return `room:${payload.name}`;
    if (message.type === 'status') return `status:${(payload.character as { name?: string } | undefined)?.name}`;
    if (message.type === 'inventory') return `inventory:${Array.isArray(payload.items) ? payload.items.length : 0}`;
    const text = payload.text ?? payload.message ?? JSON.stringify(payload);
    return `${message.type}:${String(text).replace(/\s+/g, ' ').slice(0, 120)}`;
  });
}

function runTranscript(commands: string[], roomId?: string) {
  const { session, char, messages } = createCapturingSession(roomId);
  try {
    for (const command of commands) {
      handleCommand(session, command);
    }
    return { char, transcript: summarize(messages) };
  } finally {
    removeSession(session.sessionId);
  }
}

describe('command golden transcripts', () => {
  beforeAll(() => {
    initDb();
    initGameSystems();
  });

  afterAll(() => {
    shutdownGameSystems();
    closeDb();
  });

  it('keeps core exploration and status command outputs stable', () => {
    expect(runTranscript(['look']).transcript).toEqual(
      expect.arrayContaining(['room:村莊廣場']),
    );

    expect(runTranscript(['go east']).transcript).toEqual(
      expect.arrayContaining(['room:武器店']),
    );

    expect(runTranscript(['status']).transcript).toEqual(
      expect.arrayContaining([expect.stringMatching(/^status:GoldenHero/)]),
    );

    expect(runTranscript(['inventory']).transcript).toEqual(
      expect.arrayContaining([expect.stringMatching(/^inventory:/)]),
    );
  });

  it('keeps inventory command outputs stable', () => {
    const useCase = createCapturingSession();
    try {
      useCase.char.hp = Math.max(1, useCase.char.hp - 40);
      saveCharacter(useCase.char);
      handleCommand(useCase.session, 'use small_hp_potion');
      expect(summarize(useCase.messages)).toEqual(
        expect.arrayContaining([
          expect.stringMatching(/^status:/),
          expect.stringMatching(/^inventory:/),
          expect.stringContaining('你使用了「小型生命藥水」'),
        ]),
      );
    } finally {
      removeSession(useCase.session.sessionId);
    }

    const equipCase = createCapturingSession();
    try {
      equipCase.char.level = 3;
      saveCharacter(equipCase.char);
      addInventoryItem(equipCase.char.id, 'wooden_shield', 1);
      handleCommand(equipCase.session, 'equip wooden_shield');
      expect(summarize(equipCase.messages)).toEqual(
        expect.arrayContaining([
          expect.stringContaining('裝備了「木盾」'),
          expect.stringMatching(/^inventory:/),
        ]),
      );
    } finally {
      removeSession(equipCase.session.sessionId);
    }
  });

  it('keeps combat command routing outputs stable outside combat', () => {
    expect(runTranscript(['attack']).transcript).toEqual(
      expect.arrayContaining([expect.stringContaining('請指定攻擊目標')]),
    );

    expect(runTranscript(['skill slash']).transcript).toEqual(
      expect.arrayContaining([expect.stringContaining('只能在戰鬥中使用')]),
    );
  });

  it('keeps quest, party, and shop command outputs stable', () => {
    expect(runTranscript(['quest']).transcript).toEqual(
      expect.arrayContaining([expect.stringContaining('任務指令')]),
    );

    expect(runTranscript(['party']).transcript).toEqual(
      expect.arrayContaining([expect.stringContaining('組隊指令')]),
    );

    expect(runTranscript(['shop 鐵匠'], 'weapon_shop').transcript).toEqual(
      expect.arrayContaining([expect.stringContaining('鐵匠展示可購買商品')]),
    );
  });
});
