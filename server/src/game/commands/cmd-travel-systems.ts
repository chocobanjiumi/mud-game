// Map, travel, rest, and recall command handlers

import type { WsSession } from '../../ws/handler.js';
import { sendNarrative, sendSystem, sendError, sendToSession } from '../../ws/handler.js';
import { getDiscoveryCount, getUnlockedPortals, hasDiscovery, isPortalUnlocked, saveCharacter, unlockPortal, unlockZone } from '../../db/queries.js';
import { FAITH_DEFS } from '@game/shared';
import type { Character, RoomDef, TravelNodeDef, ZoneDef } from '@game/shared';
import { world, questMgr, isInCombat } from '../state.js';
import { getRoom, getRoomsByZone, getZone, ROOMS, ZONES } from '../../data/rooms.js';
import { getTravelNodes } from '../../data/travel.js';
import { getFaithAltarByRoomId } from '../../data/faith-altars.js';
import { buildRoomMapLayerLookup, inferMapLayerFromCoordinates } from '../map-layer.js';
import { beginPvpDangerEvacCast } from '../pvp-evac-cast.js';
import { cmdLook } from './cmd-world-systems.js';
import {
  buildLocalMapPayload, canAccessTravelNode, canAccessZone, canTravelFromCurrentRoom,
  canUseInventoryRestrictedTravel, canUseKingdomCargoRestrictedTravel, canUsePvpDamageRestrictedTravel,
  findTravelNode, formatTravelCost, getChar, getTravelCooldownRemaining, getTravelNodesByActivationRoom,
  payTravelCost, setTravelCooldown,
} from './cmd-helpers.js';

export function cmdMap(session: WsSession): void {
  const char = getChar(session);
  if (!char) return;
  const room = getRoom(char.roomId);
  const zone = room ? getZone(room.zone) : undefined;
  const miniMap = world.generateMiniMap(char.roomId);
  const visitedRooms = room ? getDiscoveryCount(char.id, room.zone, 'visit_room') : 0;
  const totalRooms = room ? getRoomsByZone(room.zone).length : 0;
  const percent = totalRooms > 0 ? Math.floor((visitedRooms / totalRooms) * 100) : 0;
  sendToSession(session.sessionId, 'map', {
    ascii: miniMap,
    currentRoom: char.roomId,
    zone: room?.zone ?? 'world',
    zoneName: zone?.name,
    zoneType: zone?.type,
    dangerLevel: zone?.dangerLevel,
    pvpMode: zone?.pvpMode,
    deathPenalty: zone?.deathPenalty,
    exploration: room ? {
      visitedRooms,
      totalRooms,
      percent,
    } : undefined,
    localMap: room ? buildLocalMapPayload(char, room) : undefined,
    travelNodes: room ? getTravelNodes()
      .filter(node => node.zoneId === room.zone)
      .map(node => ({
        id: node.id,
        name: node.name,
        roomId: node.roomId,
        kind: node.kind,
        unlocked: node.unlockByDefault || isPortalUnlocked(char.id, node.id),
      })) : undefined,
    world: buildWorldMapPayload(char),
  });
  if (room && zone) {
    sendSystem(session.sessionId, `探索度：${zone.name} ${visitedRooms}/${totalRooms} (${percent}%)；類型 ${zone.type}，危險度 ${zone.dangerLevel}，PvP ${zone.pvpMode}，死亡懲罰 ${zone.deathPenalty}`);
  }
}

export function buildWorldMapPayload(char: Character): {
  zones: {
    id: string;
    name: string;
    region: string;
    type: ZoneDef['type'];
    levelRange: [number, number];
    dangerLevel: number;
    pvpMode: ZoneDef['pvpMode'];
    deathPenalty: ZoneDef['deathPenalty'];
    totalRooms: number;
    visitedRooms: number;
    rooms: {
      id: string;
      name: string;
      mapSymbol: string;
      mapX: number;
      mapY: number;
      mapLayer: number;
      mapLayerName?: string;
      explored: boolean;
      exits: {
        direction: string;
        targetRoomId: string;
        targetRoomName?: string;
        targetZoneId?: string;
        targetMapLayer?: number;
        targetMapLayerName?: string;
        locked?: boolean;
      }[];
      faithAltar?: {
        faithId: string;
        faithName: string;
        faithTitle: string;
      };
    }[];
  }[];
  connections: { fromZoneId: string; toZoneId: string }[];
} {
  const roomLayers = buildRoomMapLayerLookup(Object.values(ROOMS));
  const zones = Object.values(ZONES).map((zone) => {
    const rooms = zone.rooms
      .map(roomId => getRoom(roomId))
      .filter((candidate): candidate is RoomDef => Boolean(candidate))
      .map(room => {
        const layer = roomLayers.get(room.id) ?? { mapLayer: inferMapLayerFromCoordinates(room) };
        const faithAltar = getFaithAltarByRoomId(room.id);
        return {
          id: room.id,
          name: room.name,
          mapSymbol: room.mapSymbol,
          mapX: room.mapX,
          mapY: room.mapY,
          mapLayer: layer.mapLayer,
          mapLayerName: layer.mapLayerName,
          explored: hasDiscovery(char.id, 'visit_room', room.id) || room.id === char.roomId,
          exits: room.exits.map(exit => {
            const targetRoom = getRoom(exit.targetRoomId);
            const targetLayer = targetRoom ? roomLayers.get(targetRoom.id) : undefined;
            return {
              direction: exit.direction,
              targetRoomId: exit.targetRoomId,
              targetRoomName: targetRoom?.name,
              targetZoneId: targetRoom?.zone,
              targetMapLayer: targetLayer?.mapLayer,
              targetMapLayerName: targetLayer?.mapLayerName,
              locked: exit.locked,
            };
          }),
          faithAltar: faithAltar ? {
            faithId: faithAltar.faithId,
            faithName: FAITH_DEFS[faithAltar.faithId].name,
            faithTitle: FAITH_DEFS[faithAltar.faithId].title,
          } : undefined,
        };
      });

    return {
      id: zone.id,
      name: zone.name,
      region: zone.region,
      type: zone.type,
      levelRange: zone.levelRange,
      dangerLevel: zone.dangerLevel,
      pvpMode: zone.pvpMode,
      deathPenalty: zone.deathPenalty,
      totalRooms: rooms.length,
      visitedRooms: getDiscoveryCount(char.id, zone.id, 'visit_room'),
      rooms,
    };
  });

  const connectionKeys = new Set<string>();
  for (const sourceRoom of Object.values(ROOMS)) {
    for (const exit of sourceRoom.exits) {
      const targetRoom = getRoom(exit.targetRoomId);
      if (!targetRoom || targetRoom.zone === sourceRoom.zone) continue;
      const [fromZoneId, toZoneId] = [sourceRoom.zone, targetRoom.zone].sort();
      connectionKeys.add(`${fromZoneId}:${toZoneId}`);
    }
  }

  return {
    zones,
    connections: Array.from(connectionKeys).map((key) => {
      const [fromZoneId, toZoneId] = key.split(':');
      return { fromZoneId, toZoneId };
    }),
  };
}

export function cmdRest(session: WsSession): void {
  const char = getChar(session);
  if (!char) return;
  if (isInCombat(char.id)) { sendError(session.sessionId, '戰鬥中無法休息！'); return; }

  // 恢復 30% HP + 資源
  const hpRecover = Math.floor(char.maxHp * 0.3);
  char.hp = Math.min(char.maxHp, char.hp + hpRecover);

  // 資源恢復：怒氣不靠休息恢復，其他回復 30%
  let resourceMsg = '';
  if (char.resourceType !== 'rage') {
    const resRecover = Math.floor(char.maxResource * 0.3);
    char.resource = Math.min(char.maxResource, char.resource + resRecover);
    const resourceLabel = char.resourceType === 'mp' ? 'MP' : char.resourceType === 'focus' ? '專注' : char.resourceType === 'faith' ? '信仰' : char.resourceType;
    resourceMsg = ` 和 ${resRecover} ${resourceLabel}`;
  }

  saveCharacter(char);
  sendNarrative(session.sessionId, `你稍作休息，恢復了 ${hpRecover} HP${resourceMsg}。`);
}

export function cmdActivate(session: WsSession, args: string[]): void {
  const char = getChar(session);
  if (!char) return;
  const target = args.join(' ').toLowerCase();
  if (target && target !== 'portal' && target !== '傳送陣') {
    sendError(session.sessionId, '用法：activate portal');
    return;
  }

  const room = getRoom(char.roomId);
  const zone = room ? getZone(room.zone) : undefined;
  if (!room || !zone) {
    sendError(session.sessionId, '這裡沒有可啟用的傳送陣。');
    return;
  }

  const localNode = getTravelNodesByActivationRoom(room.id)[0];
  if (localNode) {
    const access = canAccessTravelNode(char, localNode, true);
    if (!access.ok) {
      sendError(session.sessionId, access.message);
      return;
    }
    unlockZone(char.id, localNode.zoneId, 'travel_node');
    unlockPortal(char.id, localNode.id, localNode.zoneId);
    questMgr.updateProgress(char.id, 'inspect_object', localNode.id);
    sendSystem(session.sessionId, `已啟用 ${localNode.name}。之後可用 travel ${localNode.id} 傳送。`);
    return;
  }

  if (!zone.portal) {
    sendError(session.sessionId, '這裡沒有可啟用的傳送陣。');
    return;
  }

  const access = canAccessZone(char, zone.id);
  if (!access.ok) {
    sendError(session.sessionId, access.message);
    return;
  }

  unlockZone(char.id, zone.id, 'portal');
  unlockPortal(char.id, zone.portal.id, zone.id);
  questMgr.updateProgress(char.id, 'inspect_object', zone.portal.id);
  sendSystem(session.sessionId, `已啟用 ${zone.portal.name}。之後可用 travel ${zone.id} 或 travel ${zone.portal.id} 傳送。`);
}

export function cmdPortals(session: WsSession): void {
  const char = getChar(session);
  if (!char) return;

  const unlocked = new Map(getUnlockedPortals(char.id).map(portal => [portal.portalId, portal.zoneId]));
  const lines: string[] = [];

  for (const node of getTravelNodes()) {
    const zone = getZone(node.zoneId);
    if (!zone) continue;
    const isUnlocked = node.unlockByDefault || unlocked.has(node.id) || isPortalUnlocked(char.id, node.id);
    const access = canAccessTravelNode(char, node, false);
    const state = isUnlocked ? '已解鎖' : access.ok ? '可啟用' : '未解鎖';
    const cost = formatTravelCost(char, node);
    lines.push(`${state} ${zone.name} (${node.id}) - ${node.name}，費用 ${cost}，冷卻 ${node.cooldownSeconds} 秒，網路 ${node.network}`);
  }

  if (lines.length === 0) {
    sendSystem(session.sessionId, '目前世界資料沒有定義傳送點。');
    return;
  }

  sendSystem(session.sessionId, '── 傳送點 ──');
  for (const line of lines) sendSystem(session.sessionId, line);
}

export function cmdTravel(session: WsSession, target: string): void {
  const char = getChar(session);
  if (!char) return;
  if (isInCombat(char.id)) {
    sendError(session.sessionId, '戰鬥中無法使用傳送。');
    return;
  }
  if (!target) {
    sendError(session.sessionId, '用法：travel <zone_id|portal_id>');
    return;
  }

  const node = findTravelNode(target);
  if (!node) {
    sendError(session.sessionId, `找不到傳送點「${target}」。可用 portals 查看列表。`);
    return;
  }

  const access = canAccessTravelNode(char, node);
  if (!access.ok) {
    sendError(session.sessionId, access.message);
    return;
  }

  const unlocked = node.unlockByDefault || isPortalUnlocked(char.id, node.id);
  if (!unlocked) {
    sendError(session.sessionId, `${node.name} 尚未啟用。請先到當地使用 activate portal。`);
    return;
  }

  const cooldown = getTravelCooldownRemaining(char.id);
  if (cooldown > 0) {
    sendError(session.sessionId, `傳送冷卻中，還需 ${cooldown} 秒。`);
    return;
  }

  const originCheck = canTravelFromCurrentRoom(char, node);
  if (!originCheck.ok) {
    sendError(session.sessionId, originCheck.message);
    return;
  }

  const loadCheck = canUseInventoryRestrictedTravel(char, node);
  if (!loadCheck.ok) {
    sendError(session.sessionId, loadCheck.message);
    return;
  }

  const kingdomCargoCheck = canUseKingdomCargoRestrictedTravel(char, node);
  if (!kingdomCargoCheck.ok) {
    sendError(session.sessionId, kingdomCargoCheck.message);
    return;
  }

  const pvpDamageCheck = canUsePvpDamageRestrictedTravel(char);
  if (!pvpDamageCheck.ok) {
    sendError(session.sessionId, pvpDamageCheck.message);
    return;
  }

  if (node.kind === 'danger_evac') {
    const originRoomId = char.roomId;
    const cast = beginPvpDangerEvacCast(char.id, () => {
      const currentChar = getChar(session);
      if (!currentChar) return;
      if (currentChar.roomId !== originRoomId) {
        sendError(session.sessionId, '危險撤離讀條因位置改變而中止。');
        return;
      }
      completeTravel(session, node);
    });
    if (!cast.ok) {
      sendError(session.sessionId, `危險撤離讀條進行中，還需 ${cast.remainingSeconds} 秒。`);
      return;
    }
    sendSystem(session.sessionId, `開始啟動 ${node.name}，需要 ${cast.seconds} 秒讀條。受到 PvP 攻擊會中斷撤離。`);
    return;
  }

  completeTravel(session, node);
}

export function completeTravel(session: WsSession, node: TravelNodeDef): void {
  const char = getChar(session);
  if (!char) return;
  if (isInCombat(char.id)) {
    sendError(session.sessionId, '戰鬥中無法使用傳送。');
    return;
  }

  const costResult = payTravelCost(char, node);
  if (!costResult.ok) {
    sendError(session.sessionId, costResult.message);
    return;
  }

  const destination = getRoom(node.roomId);
  if (!destination) {
    sendError(session.sessionId, `${node.name} 尚未設定可傳送的目的房間。`);
    return;
  }

  const previousRoom = char.roomId;
  char.roomId = destination.id;
  unlockZone(char.id, node.zoneId, 'travel');
  world.placePlayer(char.id, destination.id);
  setTravelCooldown(char.id, node.cooldownSeconds);
  saveCharacter(char);
  sendNarrative(session.sessionId, `你啟動 ${node.name}，從 ${previousRoom} 傳送到 ${destination.name}。${costResult.message}`);
  cmdLook(session);
}

export function cmdRecall(session: WsSession): void {
  const char = getChar(session);
  if (!char) return;
  if (isInCombat(char.id)) {
    sendError(session.sessionId, '戰鬥中無法回城。');
    return;
  }

  const loadCheck = canUseInventoryRestrictedTravel(char);
  if (!loadCheck.ok) {
    sendError(session.sessionId, loadCheck.message);
    return;
  }

  const kingdomCargoCheck = canUseKingdomCargoRestrictedTravel(char);
  if (!kingdomCargoCheck.ok) {
    sendError(session.sessionId, kingdomCargoCheck.message);
    return;
  }

  const pvpDamageCheck = canUsePvpDamageRestrictedTravel(char);
  if (!pvpDamageCheck.ok) {
    sendError(session.sessionId, pvpDamageCheck.message);
    return;
  }

  const starter = getZone('starter_village');
  if (!starter?.portal) {
    sendError(session.sessionId, '目前沒有可用的主城回程點。');
    return;
  }

  const destination = getRoom('village_square') ?? starter.rooms.map(roomId => getRoom(roomId)).find(Boolean);
  if (!destination) {
    sendError(session.sessionId, '主城回程點缺少房間資料。');
    return;
  }

  char.roomId = destination.id;
  world.placePlayer(char.id, destination.id);
  unlockZone(char.id, starter.id, 'recall');
  unlockPortal(char.id, starter.portal.id, starter.id);
  saveCharacter(char);
  sendNarrative(session.sessionId, `你集中精神啟動回程印記，返回 ${destination.name}。`);
  cmdLook(session);
}

