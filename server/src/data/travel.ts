import type { TravelNodeDef, ZoneDef } from '@game/shared';
import { ZONES, getRoom } from './rooms.js';

const DEEP_SHORTCUT_ZONES = new Set([
  'dark_forest',
  'crystal_cave',
  'volcano_zone',
  'frozen_wastes',
  'demon_territory',
  'dragon_valley',
  'abyss_rift',
  'celestial_ruins',
]);

function firstExistingRoom(zone: ZoneDef): string | undefined {
  return zone.rooms.find(roomId => !!getRoom(roomId));
}

function deepRoom(zone: ZoneDef): string | undefined {
  const candidates = zone.rooms.slice(Math.max(1, zone.rooms.length - 3));
  return candidates.find(roomId => !!getRoom(roomId));
}

function nodeFromZonePortal(zone: ZoneDef): TravelNodeDef | undefined {
  if (!zone.portal) return undefined;
  const roomId = firstExistingRoom(zone);
  if (!roomId) return undefined;

  return {
    id: zone.portal.id,
    name: zone.portal.name,
    zoneId: zone.id,
    roomId,
    kind: zone.type === 'kingdom' ? 'kingdom_route' : 'zone_entrance',
    network: zone.portal.network,
    unlockByDefault: zone.portal.unlockByDefault,
    unlock: zone.unlock,
    cost: zone.portal.network === 'kingdom'
      ? { type: 'kingdom_treasury', amount: Math.max(25, zone.portal.cost) }
      : { type: 'gold', amount: zone.portal.cost },
    cooldownSeconds: zone.portal.network === 'kingdom' ? 120 : 30,
    requiresActivation: !zone.portal.unlockByDefault,
    activateRoomId: roomId,
  };
}

function deepShortcutNode(zone: ZoneDef): TravelNodeDef | undefined {
  if (!DEEP_SHORTCUT_ZONES.has(zone.id)) return undefined;
  const roomId = deepRoom(zone);
  if (!roomId) return undefined;

  return {
    id: `shortcut_${zone.id}_deep`,
    name: `${zone.name}深處捷徑`,
    zoneId: zone.id,
    roomId,
    kind: 'deep_shortcut',
    network: zone.pvpMode === 'open' || zone.pvpMode === 'faction' || zone.pvpMode === 'kingdom_war' ? 'pvp_evac' : 'public',
    unlock: zone.unlock,
    cost: { type: 'gold', multiplier: 2.5 },
    cooldownSeconds: 90,
    requiresActivation: true,
    activateRoomId: roomId,
  };
}

function dangerEvacNode(zone: ZoneDef): TravelNodeDef | undefined {
  if (zone.pvpMode !== 'open' && zone.pvpMode !== 'faction' && zone.pvpMode !== 'kingdom_war') return undefined;
  const roomId = firstExistingRoom(zone);
  if (!roomId) return undefined;

  return {
    id: `evac_${zone.id}`,
    name: `${zone.name}危險撤離點`,
    zoneId: zone.id,
    roomId,
    kind: 'danger_evac',
    network: 'pvp_evac',
    unlock: zone.unlock,
    cost: { type: 'item', itemId: 'battle_token', quantity: 1 },
    cooldownSeconds: 180,
    requiresActivation: false,
  };
}

export const TRAVEL_NODES: Record<string, TravelNodeDef> = Object.fromEntries(
  Object.values(ZONES)
    .flatMap(zone => [nodeFromZonePortal(zone), deepShortcutNode(zone), dangerEvacNode(zone)])
    .filter((node): node is TravelNodeDef => !!node)
    .map(node => [node.id, node]),
);

export function getTravelNode(nodeId: string): TravelNodeDef | undefined {
  return TRAVEL_NODES[nodeId];
}

export function getTravelNodes(): TravelNodeDef[] {
  return Object.values(TRAVEL_NODES);
}

export function getTravelNodesByZone(zoneId: string): TravelNodeDef[] {
  return getTravelNodes().filter(node => node.zoneId === zoneId);
}
