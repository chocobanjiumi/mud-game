// 遊戲伺服器入口 - Fastify + WebSocket

import Fastify from 'fastify';
import fastifyCors from '@fastify/cors';
import fastifyWebsocket from '@fastify/websocket';
import { initDb, closeDb } from './db/schema.js';
import { createSession, removeSession, cleanupStale, getOnlineCount, sendToCharacter } from './ws/handler.js';
import { handleMessage, cleanupRateLimit } from './ws/protocol.js';
import { initGameSystems, shutdownGameSystems, combat, dungeonMgr, pvpMgr, world, autoBattleMgr, dungeonMatchMgr, skillTreeMgr } from './game/state.js';
import { AgentController } from './ai/agent.js';
import { getCharacterById, saveCharacter } from './db/queries.js';
import { handleCommand } from './game/commands.js';
import { ROOMS, ZONES, getRoom } from './data/rooms.js';
import {
  buildInstanceEntryDefs,
  buildPlannedWorldCoordinateMap,
  buildZoneMapPlans,
  plannedMapScopeForRoom,
  type InstanceEntryDef,
  type ZoneMapScopeDecision,
} from './data/world-map2-plan.js';
import type { Direction } from '@game/shared';

const PORT = parseInt(process.env.PORT ?? '3701', 10);
const HOST = process.env.HOST ?? '0.0.0.0';

// AI Agent 控制器
const agentController = new AgentController();

async function main(): Promise<void> {
  // 初始化資料庫
  console.log('[Server] 正在初始化資料庫...');
  initDb();

  // 初始化遊戲子系統
  console.log('[Server] 正在初始化遊戲子系統...');
  initGameSystems();

  // 設定技能樹管理器
  combat.setSkillTreeManager(skillTreeMgr);

  // 設定戰鬥引擎的廣播函式
  combat.setBroadcastFunction((_combatId, playerIds, message) => {
    for (const playerId of playerIds) {
      const msg = message as { type: string; payload: Record<string, unknown> };
      sendToCharacter(playerId, msg.type as any, msg.payload);
    }
  });

  // 設定副本管理器的戰鬥和傳送函式
  dungeonMgr.setStartCombatFunction((players, monsters, onEnd) => {
    combat.startCombat(players, monsters, (result) => {
      onEnd(result as 'victory' | 'defeat' | 'fled');
    });
  });
  dungeonMgr.setTeleportFunction((playerId, roomId) => {
    const char = getCharacterById(playerId);
    if (char) {
      world.removePlayer(playerId);
      char.roomId = roomId;
      world.placePlayer(playerId, roomId);
      saveCharacter(char);
    }
  });

  // 設定 PvP 管理器的戰鬥函式
  pvpMgr.setStartCombatFunction((players, monsters, onEnd) => {
    combat.startCombat(players, monsters, (result) => {
      onEnd(result as 'victory' | 'defeat' | 'fled');
    });
  });

  // 設定 AI Agent 依賴
  agentController.setDependencies({
    getCharacter: (id) => getCharacterById(id) ?? undefined,
    getRoomInfo: (roomId) => {
      const info = world.getRoomInfo(roomId);
      if (!info) return null;
      return {
        name: info.room.name,
        description: info.room.description,
        exits: info.room.exits,
        monsters: info.monsters.map(m => ({
          id: m.instanceId,
          name: m.def.name,
          level: m.def.level,
        })),
        npcs: info.npcs || [],
        players: [],
        items: [],
      };
    },
    getCombatForPlayer: (characterId) => {
      const combatId = combat.getPlayerCombatId(characterId);
      if (!combatId) return null;
      return combat.getCombatState(combatId) ?? null;
    },
    executeCommand: (characterId, command) => {
      handleCommand(
        { sessionId: `ai_${characterId}`, characterId, userId: null, ws: null as any, lastPing: Date.now() },
        command,
      );
    },
    submitCombatAction: (combatId, action) => {
      combat.submitAction(combatId, action);
    },
    getPartyMembers: () => [],
  });

  // 初始化 Arinova SDK（如果有設定）
  const arinovaAppId = process.env.ARINOVA_APP_ID;
  if (arinovaAppId) {
    agentController.initSdk(arinovaAppId, process.env.ARINOVA_BASE_URL);
    agentController.startLoop();
    console.log('[Server] AI Agent 系統已啟動');
  }

  // 建立 Fastify 伺服器
  const app = Fastify({
    logger: {
      level: 'info',
      transport: {
        target: 'pino-pretty',
        options: { colorize: true },
      },
    },
  });

  // 註冊插件
  await app.register(fastifyCors, {
    origin: true, // 開發階段允許所有來源
  });

  await app.register(fastifyWebsocket);

  // HTTP 健康檢查端點
  app.get('/health', async () => {
    return {
      status: 'ok',
      online: getOnlineCount(),
      agents: agentController.getActiveAgentCount(),
      combats: combat.getActiveCombatCount(),
      uptime: process.uptime(),
      timestamp: Date.now(),
    };
  });

  app.get('/api/mud/world-map', async () => {
    return buildPlanningWorldMapPayload();
  });

  // WebSocket 端點
  app.register(async function wsRoutes(fastify) {
    fastify.get('/ws', { websocket: true }, (socket, req) => {
      const session = createSession(socket);

      socket.on('message', (raw: Buffer) => {
        try {
          const data = raw.toString('utf-8');
          handleMessage(session, data);
        } catch (err) {
          console.error(`[WS] 訊息處理錯誤 (${session.sessionId}):`, err);
        }
      });

      socket.on('close', () => {
        if (session.characterId) {
          // 清除自動戰鬥計時器
          autoBattleMgr.cleanup(session.characterId);
          // 移除副本排隊
          dungeonMatchMgr.leaveQueue(session.characterId);
          // 移除世界中的玩家追蹤
          const char = getCharacterById(session.characterId);
          if (char) {
            world.removePlayer(session.characterId);
          }
        }
        cleanupRateLimit(session.sessionId);
        removeSession(session.sessionId);
      });

      socket.on('error', (err) => {
        console.error(`[WS] 連線錯誤 (${session.sessionId}):`, err);
        if (session.characterId) {
          autoBattleMgr.cleanup(session.characterId);
          dungeonMatchMgr.leaveQueue(session.characterId);
        }
        cleanupRateLimit(session.sessionId);
        removeSession(session.sessionId);
      });
    });
  });

  // 定時清理超時連線 (每 30 秒)
  const cleanupInterval = setInterval(() => {
    cleanupStale(30000);
  }, 30000);

  // 啟動伺服器
  try {
    await app.listen({ port: PORT, host: HOST });
    console.log(`[Server] 遊戲伺服器啟動於 http://${HOST}:${PORT}`);
    console.log(`[Server] WebSocket 端點: ws://${HOST}:${PORT}/ws`);
    console.log(`[Server] 健康檢查: http://${HOST}:${PORT}/health`);
  } catch (err) {
    console.error('[Server] 啟動失敗:', err);
    process.exit(1);
  }

  // 優雅關閉
  const shutdown = async (): Promise<void> => {
    console.log('\n[Server] 正在關閉伺服器...');
    clearInterval(cleanupInterval);
    agentController.destroy();
    shutdownGameSystems();
    await app.close();
    closeDb();
    console.log('[Server] 伺服器已關閉。');
    process.exit(0);
  };

  process.on('SIGINT', shutdown);
  process.on('SIGTERM', shutdown);
}

main().catch((err) => {
  console.error('[Server] 致命錯誤:', err);
  process.exit(1);
});

function buildPlanningWorldMapPayload(): {
  generatedAt: number;
  zones: {
    id: string;
    name: string;
    region: string;
    type: string;
    mapPlan: {
      decision: ZoneMapScopeDecision;
      reason: string;
      entranceRoomId?: string;
      globalBounds?: {
        minX: number;
        maxX: number;
        minY: number;
        maxY: number;
        anchor: string;
        terrainRole: string;
      };
    };
    levelRange: [number, number];
    dangerLevel: number;
    totalRooms: number;
    rooms: {
      id: string;
      name: string;
      mapX: number;
      mapY: number;
      worldX?: number;
      worldY?: number;
      worldCoordinateSource?: 'explicit' | 'derived' | 'instance-entry';
      mapScope: 'world' | 'instance';
      instanceTemplateId?: string;
      mapSymbol: string;
      exits: {
        direction: string;
        targetRoomId: string;
        targetRoomName?: string;
        targetZoneId?: string;
        locked?: boolean;
        edgeKind?: string;
        edgeNote?: string;
        broken: boolean;
      }[];
    }[];
  }[];
  instanceEntries: InstanceEntryDef[];
  connections: { fromZoneId: string; toZoneId: string; count: number }[];
  diagnostics: {
    missingTargets: string[];
    duplicateDirections: string[];
    selfLoops: string[];
    specialEdges: string[];
    crossZoneWorldAdjacencyIssues: string[];
    borderRoomGaps: string[];
  };
} {
  const zonePlans = buildZoneMapPlans(ZONES);
  const plannedWorldCoordinates = buildPlannedWorldCoordinateMap(ZONES, getRoom, zonePlans);
  const instanceEntries = buildInstanceEntryDefs(ZONES);
  const diagnostics = buildPlanningDiagnostics(zonePlans);
  const zones = Object.values(ZONES).map((zone) => ({
    id: zone.id,
    name: zone.name,
    region: zone.region,
    type: zone.type,
    mapPlan: {
      decision: zonePlans.get(zone.id)?.decision ?? 'decision',
      reason: zonePlans.get(zone.id)?.reason ?? '',
      entranceRoomId: zonePlans.get(zone.id)?.entranceRoomId,
      globalBounds: zonePlans.get(zone.id)?.globalBounds,
    },
    levelRange: zone.levelRange,
    dangerLevel: zone.dangerLevel,
    totalRooms: zone.rooms.length,
    rooms: zone.rooms
      .map(roomId => getRoom(roomId))
      .filter((room): room is NonNullable<ReturnType<typeof getRoom>> => Boolean(room))
      .map(room => {
        const zonePlan = zonePlans.get(room.zone);
        const worldCoordinate = plannedWorldCoordinates.get(room.id);
        return {
          id: room.id,
          name: room.name,
          mapX: room.mapX,
          mapY: room.mapY,
          worldX: worldCoordinate?.worldX,
          worldY: worldCoordinate?.worldY,
          worldCoordinateSource: worldCoordinate?.source,
          mapScope: plannedMapScopeForRoom(room, zonePlan),
          instanceTemplateId: room.instanceTemplateId,
          mapSymbol: room.mapSymbol,
          exits: room.exits.map(exit => {
            const targetRoom = getRoom(exit.targetRoomId);
            return {
              direction: exit.direction,
              targetRoomId: exit.targetRoomId,
              targetRoomName: targetRoom?.name,
              targetZoneId: targetRoom?.zone,
              locked: exit.locked,
              edgeKind: exit.edgeKind,
              edgeNote: exit.edgeNote,
              broken: !targetRoom,
            };
          }),
        };
      }),
  }));

  const connectionCounts = new Map<string, number>();
  for (const room of Object.values(ROOMS)) {
    for (const exit of room.exits) {
      const targetRoom = getRoom(exit.targetRoomId);
      if (!targetRoom || targetRoom.zone === room.zone) continue;
      const [fromZoneId, toZoneId] = [room.zone, targetRoom.zone].sort();
      const key = `${fromZoneId}:${toZoneId}`;
      connectionCounts.set(key, (connectionCounts.get(key) ?? 0) + 1);
    }
  }

  return {
    generatedAt: Date.now(),
    zones,
    instanceEntries,
    connections: [...connectionCounts.entries()].map(([key, count]) => {
      const [fromZoneId, toZoneId] = key.split(':');
      return { fromZoneId, toZoneId, count };
    }),
    diagnostics,
  };
}

function buildPlanningDiagnostics(zonePlans: ReturnType<typeof buildZoneMapPlans>): {
  missingTargets: string[];
  duplicateDirections: string[];
  selfLoops: string[];
  specialEdges: string[];
  crossZoneWorldAdjacencyIssues: string[];
  borderRoomGaps: string[];
} {
  const missingTargets: string[] = [];
  const duplicateDirections: string[] = [];
  const selfLoops: string[] = [];
  const crossZoneExits: string[] = [];
  const specialEdges: string[] = [];
  const crossZoneWorldAdjacencyIssues: string[] = [];
  const borderRoomGaps: string[] = [];

  for (const room of Object.values(ROOMS)) {
    const seenDirections = new Set<string>();
    for (const exit of room.exits) {
      if (seenDirections.has(exit.direction)) {
        duplicateDirections.push(`${room.id}:${exit.direction}->${exit.targetRoomId}`);
      }
      seenDirections.add(exit.direction);

      const isLockedWorldBlocker = exit.locked && !exit.targetRoomId;
      const targetRoom = isLockedWorldBlocker ? undefined : getRoom(exit.targetRoomId);
      if (!targetRoom) {
        if (!isLockedWorldBlocker) missingTargets.push(`${room.id}:${exit.direction}->${exit.targetRoomId}`);
        continue;
      }
      if (targetRoom.id === room.id) {
        selfLoops.push(`${room.id}:${exit.direction}->${exit.targetRoomId}`);
      }
      if (targetRoom.zone !== room.zone) {
        crossZoneExits.push(`${room.zone}/${room.id}:${exit.direction}->${targetRoom.zone}/${targetRoom.id}`);
      }
      if (exit.edgeKind && exit.edgeKind !== 'normal') {
        specialEdges.push(`${room.id}:${exit.direction}->${targetRoom.id} (${exit.edgeKind}) ${exit.edgeNote ?? ''}`.trim());
      }
    }
  }

  for (const exitText of crossZoneExits) {
    const parsed = parseCrossZoneExit(exitText);
    if (!parsed) continue;
    const fromPlan = zonePlans.get(parsed.fromZoneId);
    const toPlan = zonePlans.get(parsed.toZoneId);
    if (!fromPlan?.globalBounds || !toPlan?.globalBounds) continue;
    if (fromPlan.decision === 'instance' || toPlan.decision === 'instance') continue;
    const issue = getDirectionalBoundsIssue(parsed.direction, fromPlan.globalBounds, toPlan.globalBounds);
    if (!issue) continue;
    const label = `${parsed.fromZoneId}/${parsed.fromRoomId}:${parsed.direction}->${parsed.toZoneId}/${parsed.toRoomId}`;
    crossZoneWorldAdjacencyIssues.push(`${label}: ${issue}`);
    if (issue.includes('gap')) {
      borderRoomGaps.push(`${label}: ${issue}`);
    }
  }

  return {
    missingTargets,
    duplicateDirections,
    selfLoops,
    specialEdges,
    crossZoneWorldAdjacencyIssues,
    borderRoomGaps,
  };
}

function parseCrossZoneExit(exitText: string): {
  fromZoneId: string;
  fromRoomId: string;
  direction: Direction;
  toZoneId: string;
  toRoomId: string;
} | null {
  const match = exitText.match(/^([^/]+)\/([^:]+):(north|south|east|west)->([^/]+)\/(.+)$/);
  if (!match) return null;
  return {
    fromZoneId: match[1],
    fromRoomId: match[2],
    direction: match[3] as Direction,
    toZoneId: match[4],
    toRoomId: match[5],
  };
}

function getDirectionalBoundsIssue(
  direction: Direction,
  from: { minX: number; maxX: number; minY: number; maxY: number },
  to: { minX: number; maxX: number; minY: number; maxY: number },
): string | null {
  switch (direction) {
    case 'north':
      if (to.maxY >= from.minY) return 'target bbox is not north of source bbox';
      if (from.minY - to.maxY > 1) return `north gap ${from.minY - to.maxY - 1} row(s) needs border room planning`;
      if (!rangesTouchOrOverlap(from.minX, from.maxX, to.minX, to.maxX)) return 'north exit has no horizontal bbox overlap';
      return null;
    case 'south':
      if (to.minY <= from.maxY) return 'target bbox is not south of source bbox';
      if (to.minY - from.maxY > 1) return `south gap ${to.minY - from.maxY - 1} row(s) needs border room planning`;
      if (!rangesTouchOrOverlap(from.minX, from.maxX, to.minX, to.maxX)) return 'south exit has no horizontal bbox overlap';
      return null;
    case 'east':
      if (to.minX <= from.maxX) return 'target bbox is not east of source bbox';
      if (to.minX - from.maxX > 1) return `east gap ${to.minX - from.maxX - 1} column(s) needs border room planning`;
      if (!rangesTouchOrOverlap(from.minY, from.maxY, to.minY, to.maxY)) return 'east exit has no vertical bbox overlap';
      return null;
    case 'west':
      if (to.maxX >= from.minX) return 'target bbox is not west of source bbox';
      if (from.minX - to.maxX > 1) return `west gap ${from.minX - to.maxX - 1} column(s) needs border room planning`;
      if (!rangesTouchOrOverlap(from.minY, from.maxY, to.minY, to.maxY)) return 'west exit has no vertical bbox overlap';
      return null;
  }
}

function rangesTouchOrOverlap(leftMin: number, leftMax: number, rightMin: number, rightMax: number): boolean {
  return leftMin <= rightMax + 1 && leftMax + 1 >= rightMin;
}
