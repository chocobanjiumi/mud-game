import { getRoom, getZone, ZONES } from '../data/rooms.js';

export const DEFAULT_RESPAWN_ROOM_ID = 'village_square';

function firstExistingRoom(roomIds: string[]): string | undefined {
  return roomIds.find(roomId => !!getRoom(roomId));
}

export function getPveRespawnRoomId(currentRoomId: string): string {
  const currentRoom = getRoom(currentRoomId);
  const currentZone = currentRoom ? getZone(currentRoom.zone) : undefined;

  if (currentZone && currentZone.pvpMode === 'safe' && currentZone.deathPenalty === 'none') {
    return firstExistingRoom(currentZone.rooms) ?? DEFAULT_RESPAWN_ROOM_ID;
  }

  if (currentZone) {
    const regionalSafeTown = Object.values(ZONES).find(zone =>
      zone.type === 'town'
      && zone.region === currentZone.region
      && zone.pvpMode === 'safe'
      && zone.deathPenalty === 'none',
    );
    const roomId = regionalSafeTown ? firstExistingRoom(regionalSafeTown.rooms) : undefined;
    if (roomId) return roomId;
  }

  return DEFAULT_RESPAWN_ROOM_ID;
}
