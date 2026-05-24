import type {
  ApproachingMonsterPayload,
  CardinalDirection,
  NearbyCombatMonsterPayload,
  NearbyCombatPayload,
  RoomDef,
} from '@game/shared';
import { getRoom } from '../data/rooms.js';
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

  return {
    current: {
      roomId: input.currentRoom.id,
      roomName: input.currentRoom.name,
      monsters: currentMonsters.map((monster, index) => monsterToPayload(monster, currentLabels[index])),
    },
    neighbors: CARDINAL_DIRECTIONS.map((direction) => {
      const exit = input.currentRoom.exits.find(candidate => candidate.direction === direction && !candidate.locked);
      const targetRoom = exit ? getRoom(exit.targetRoomId) : undefined;
      const passable = !!exit && !!targetRoom;
      const monsters = targetRoom ? input.getAliveMonsters(targetRoom.id) : [];
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
    approaching: input.getApproachingMonsters(input.currentRoom.id),
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
      monster.def.element !== 'none' ? monster.def.element : null,
    ].filter((tag): tag is string => !!tag),
  };
}
