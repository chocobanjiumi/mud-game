import type {
  ApproachingMonsterPayload,
  CardinalDirection,
  NearbyCombatMonsterPayload,
  NearbyCombatPayload,
  RoomDef,
} from '@game/shared';
import { getRoom, getRoomByWorldCoord, getRoomWorldCoord } from '../data/rooms.js';
import { buildOrdinalLabels } from './room-entities.js';
import type { MonsterInstance } from './world.js';

const CARDINAL_DIRECTIONS: CardinalDirection[] = ['north', 'east', 'south', 'west'];

export interface BuildNearbyCombatPayloadInput {
  characterId: string;
  currentRoom: RoomDef;
  getAliveMonsters: (roomId: string) => MonsterInstance[];
  getApproachingMonsters: (roomId: string) => ApproachingMonsterPayload[];
  isScouted: (characterId: string, roomId: string) => boolean;
}

export function buildNearbyCombatPayload(input: BuildNearbyCombatPayloadInput): NearbyCombatPayload {
  const currentMonsters = input.getAliveMonsters(input.currentRoom.id);
  const currentLabels = buildOrdinalLabels(currentMonsters, monster => monster.def.name);
  const approaching = input.getApproachingMonsters(input.currentRoom.id);
  const approachingIdsBySourceRoom = new Map<string, Set<string>>();
  for (const monster of approaching) {
    const ids = approachingIdsBySourceRoom.get(monster.sourceRoomId) ?? new Set<string>();
    ids.add(monster.instanceId);
    approachingIdsBySourceRoom.set(monster.sourceRoomId, ids);
  }

  return {
    current: {
      roomId: input.currentRoom.id,
      roomName: input.currentRoom.name,
      monsters: currentMonsters.map((monster, index) => monsterToPayload(monster, currentLabels[index])),
    },
    neighbors: CARDINAL_DIRECTIONS.map((direction) => {
      const lockedExit = input.currentRoom.exits.find(e => e.direction === direction && e.locked);
      let targetRoom: RoomDef | undefined;
      if (!lockedExit) {
        const coord = getRoomWorldCoord(input.currentRoom.id);
        if (coord) {
          const delta = { north: { dx: 0, dy: -1 }, south: { dx: 0, dy: 1 }, east: { dx: 1, dy: 0 }, west: { dx: -1, dy: 0 } }[direction];
          targetRoom = getRoomByWorldCoord(coord.worldX + delta.dx, coord.worldY + delta.dy);
        }
      }
      const passable = !!targetRoom;
      const monsters = targetRoom
        ? input.getAliveMonsters(targetRoom.id).filter(monster => !approachingIdsBySourceRoom.get(targetRoom.id)?.has(monster.instanceId))
        : [];
      const scouted = !!targetRoom && input.isScouted(input.characterId, targetRoom.id);
      const labels = scouted ? buildOrdinalLabels(monsters, monster => monster.def.name) : [];

      return {
        direction,
        passable,
        roomId: targetRoom?.id,
        roomName: targetRoom?.name,
        scouted,
        monsterCount: monsters.length,
        monsters: scouted ? monsters.map((monster, index) => monsterToPayload(monster, labels[index])) : undefined,
      };
    }),
    approaching,
  };
}

function monsterToPayload(monster: MonsterInstance, label?: string): NearbyCombatMonsterPayload {
  return {
    id: monster.instanceId,
    monsterId: monster.monsterId,
    name: monster.def.name,
    alias: monster.def.alias,
    label,
    level: monster.def.level,
    hp: monster.hp,
    maxHp: monster.maxHp,
    image: `/images/monsters/monster_${monster.monsterId}.png`,
    threatTags: [
      monster.def.isBoss ? 'boss' : null,
      monster.def.isElite ? 'elite' : null,
      monster.def.aiType !== 'passive' ? monster.def.aiType : null,
      monster.def.family,
      monster.def.element !== 'none' ? monster.def.element : null,
    ].filter((tag): tag is string => !!tag),
  };
}
