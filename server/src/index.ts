// 遊戲伺服器入口 - Fastify + WebSocket

import Fastify from 'fastify';
import fastifyCors from '@fastify/cors';
import fastifyWebsocket from '@fastify/websocket';
import { initDb, closeDb } from './db/schema.js';
import { createSession, removeSession, cleanupStale, getOnlineCount, sendToCharacter } from './ws/handler.js';
import { handleMessage, cleanupRateLimit } from './ws/protocol.js';
import { initGameSystems, shutdownGameSystems, combat, dungeonMgr, pvpMgr, world } from './game/state.js';
import { AgentController } from './ai/agent.js';
import { getCharacterById, saveCharacter } from './db/queries.js';
import { handleCommand } from './game/commands.js';

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
        // 移除世界中的玩家追蹤
        if (session.characterId) {
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
