// PvE defeat handling helpers

import { sendNarrative, sendToSession, getSessionByCharacterId } from '../../ws/handler.js';
import { saveCharacter } from '../../db/queries.js';
import type { Character } from '@game/shared';
import { world } from '../state.js';
import { getRoom } from '../../data/rooms.js';
import { getPveRespawnRoomId } from '../death-respawn.js';
import { recordGoldSpent } from '../economy-stats.js';
import { expRequiredForLevel } from '../leveling.js';
import { buildRoomPayload, sendCharacterStatus } from './cmd-helpers.js';

// ─── PvE defeat handling ───

function handlePveDefeat(player: Character, deathRoomId: string): void {
  const beforeExp = player.exp;
  const beforeGold = player.gold;
  const beforeLevel = player.level;
  const expPenalty = Math.floor(player.exp * 0.05);
  const minExpForLevel = expRequiredForLevel(player.level);
  player.exp = Math.max(minExpForLevel, player.exp - expPenalty);
  const expLost = beforeExp - player.exp;

  const goldLost = Math.floor(player.gold * 0.1);
  player.gold = Math.max(0, player.gold - goldLost);
  const actualGoldLost = beforeGold - player.gold;
  if (actualGoldLost > 0) recordGoldSpent(actualGoldLost);

  player.hp = Math.floor(player.maxHp * 0.5);
  player.mp = Math.floor(player.maxMp * 0.5);
  const respawnRoomId = getPveRespawnRoomId(deathRoomId);
  player.roomId = respawnRoomId;
  world.placePlayer(player.id, respawnRoomId);
  saveCharacter(player);

  const playerSession = getSessionByCharacterId(player.id);
  if (!playerSession) return;

  const respawnRoom = getRoom(respawnRoomId);
  const respawnName = respawnRoom?.name ?? respawnRoomId;
  sendNarrative(playerSession.sessionId, `你被擊敗了！失去了 ${expLost} 經驗值和 ${actualGoldLost} 金幣。`, 'error');
  sendNarrative(playerSession.sessionId, `你慢慢甦醒過來...發現已回到${respawnName}。`);
  sendToSession(playerSession.sessionId, 'death_notice' as any, {
    title: '你死亡了',
    message: `你在戰鬥中倒下，靈魂被送回${respawnName}。`,
    losses: {
      exp: expLost,
      gold: actualGoldLost,
      items: [],
      levelDown: player.level < beforeLevel,
    },
    recovery: {
      hp: player.hp,
      maxHp: player.maxHp,
      mp: player.mp,
      maxMp: player.maxMp,
    },
    respawn: {
      roomId: respawnRoomId,
      roomName: respawnName,
    },
  });
  const roomPayload = buildRoomPayload(player);
  if (roomPayload) {
    sendToSession(playerSession.sessionId, 'room', roomPayload as unknown as Record<string, unknown>);
  }
  sendCharacterStatus(playerSession.sessionId, player);
}

export function handlePveDefeatForPlayers(players: Character[], deathRoomId: string): void {
  for (const player of players) {
    handlePveDefeat(player, deathRoomId);
  }
}

