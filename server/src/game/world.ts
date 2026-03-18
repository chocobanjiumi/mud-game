// 世界管理器 - 房間、玩家位置、怪物重生

import type { RoomDef, Direction, MonsterDef, SpawnPoint } from '@game/shared';
import { ROOMS, ZONES, getRoom, getRoomsByZone } from '../data/rooms.js';
import { getMonster } from '../data/monsters.js';
import { getNpcsByRoom } from '../data/npcs.js';

// ============================================================
//  房間內活躍怪物實例
// ============================================================

export interface MonsterInstance {
  instanceId: string;
  monsterId: string;
  def: MonsterDef;
  hp: number;
  maxHp: number;
  mp: number;
  maxMp: number;
  isDead: boolean;
  respawnAt: number | null; // timestamp for respawn; null = alive
}

// ============================================================
//  WorldManager
// ============================================================

export class WorldManager {
  /** roomId -> Set<playerId> */
  private playerPositions: Map<string, Set<string>> = new Map();
  /** playerId -> roomId */
  private playerRoomMap: Map<string, string> = new Map();
  /** roomId -> MonsterInstance[] */
  private roomMonsters: Map<string, MonsterInstance[]> = new Map();
  /** Counter for unique monster instance IDs */
  private monsterCounter = 0;
  /** Respawn timer handle */
  private respawnTimer: ReturnType<typeof setInterval> | null = null;
  /** Callback for broadcasting messages to a room */
  private broadcastFn: ((roomId: string, message: unknown) => void) | null = null;

  // ──────────────────────────────────────────────────────────
  //  初始化
  // ──────────────────────────────────────────────────────────

  /** 初始化世界：生成所有房間的初始怪物並啟動重生計時器 */
  init(): void {
    // 初始化每個房間的玩家集合
    for (const roomId of Object.keys(ROOMS)) {
      this.playerPositions.set(roomId, new Set());
    }

    // 初始生成怪物
    for (const [roomId, room] of Object.entries(ROOMS)) {
      if (room.monsters && room.monsters.length > 0) {
        this.spawnRoomMonsters(roomId, room.monsters);
      }
    }

    // 啟動重生計時器 (每 5 秒檢查一次)
    this.respawnTimer = setInterval(() => this.tickRespawn(), 5000);
  }

  /** 關閉世界管理器 */
  shutdown(): void {
    if (this.respawnTimer) {
      clearInterval(this.respawnTimer);
      this.respawnTimer = null;
    }
  }

  /** 註冊廣播函式 */
  setBroadcastFunction(fn: (roomId: string, message: unknown) => void): void {
    this.broadcastFn = fn;
  }

  // ──────────────────────────────────────────────────────────
  //  玩家位置管理
  // ──────────────────────────────────────────────────────────

  /** 將玩家放入指定房間（初始加入或傳送） */
  placePlayer(playerId: string, roomId: string): void {
    // 移除舊位置
    const oldRoom = this.playerRoomMap.get(playerId);
    if (oldRoom) {
      this.playerPositions.get(oldRoom)?.delete(playerId);
    }

    // 設定新位置
    if (!this.playerPositions.has(roomId)) {
      this.playerPositions.set(roomId, new Set());
    }
    this.playerPositions.get(roomId)!.add(playerId);
    this.playerRoomMap.set(playerId, roomId);
  }

  /** 移除玩家（離線時呼叫） */
  removePlayer(playerId: string): void {
    const roomId = this.playerRoomMap.get(playerId);
    if (roomId) {
      this.playerPositions.get(roomId)?.delete(playerId);
      this.playerRoomMap.delete(playerId);
    }
  }

  /** 取得玩家所在房間 */
  getPlayerRoom(playerId: string): string | undefined {
    return this.playerRoomMap.get(playerId);
  }

  /** 取得房間內所有玩家 */
  getPlayersInRoom(roomId: string): string[] {
    return Array.from(this.playerPositions.get(roomId) ?? []);
  }

  // ──────────────────────────────────────────────────────────
  //  移動
  // ──────────────────────────────────────────────────────────

  /**
   * 處理玩家移動
   * @returns 新房間的 RoomDef，或 null（方向不存在）
   */
  handleMove(playerId: string, direction: Direction): { room: RoomDef; fromRoomId: string } | null {
    const currentRoomId = this.playerRoomMap.get(playerId);
    if (!currentRoomId) return null;

    const currentRoom = getRoom(currentRoomId);
    if (!currentRoom) return null;

    const exit = currentRoom.exits.find(e => e.direction === direction);
    if (!exit) return null;

    // 檢查是否上鎖
    if (exit.locked) return null;

    const targetRoom = getRoom(exit.targetRoomId);
    if (!targetRoom) return null;

    // 從舊房間移除
    this.playerPositions.get(currentRoomId)?.delete(playerId);

    // 放入新房間
    if (!this.playerPositions.has(exit.targetRoomId)) {
      this.playerPositions.set(exit.targetRoomId, new Set());
    }
    this.playerPositions.get(exit.targetRoomId)!.add(playerId);
    this.playerRoomMap.set(playerId, exit.targetRoomId);

    // 廣播離開/進入訊息
    this.broadcastToRoom(currentRoomId, {
      type: 'narrative',
      payload: { text: `一位冒險者往${this.directionName(direction)}離開了。` },
      timestamp: Date.now(),
    }, playerId);

    this.broadcastToRoom(exit.targetRoomId, {
      type: 'narrative',
      payload: { text: '一位冒險者來到了這裡。' },
      timestamp: Date.now(),
    }, playerId);

    return { room: targetRoom, fromRoomId: currentRoomId };
  }

  // ──────────────────────────────────────────────────────────
  //  房間資訊
  // ──────────────────────────────────────────────────────────

  /** 取得完整房間資訊（用於 look 指令或進入新房間） */
  getRoomInfo(roomId: string): {
    room: RoomDef;
    players: string[];
    monsters: MonsterInstance[];
    npcs: { id: string; name: string; alias: string; title: string; type: string }[];
  } | null {
    const room = getRoom(roomId);
    if (!room) return null;

    const players = this.getPlayersInRoom(roomId);
    const monsters = (this.roomMonsters.get(roomId) ?? []).filter(m => !m.isDead);
    const npcs = getNpcsByRoom(roomId).map(n => ({
      id: n.id,
      name: n.name,
      alias: n.alias,
      title: n.title,
      type: n.type,
    }));

    return { room, players, monsters, npcs };
  }

  /** 取得房間定義（靜態資料） */
  getRoomDef(roomId: string): RoomDef | undefined {
    return getRoom(roomId);
  }

  // ──────────────────────────────────────────────────────────
  //  怪物生成與管理
  // ──────────────────────────────────────────────────────────

  /** 生成房間的初始怪物 */
  private spawnRoomMonsters(roomId: string, spawnPoints: SpawnPoint[]): void {
    const instances: MonsterInstance[] = [];

    for (const sp of spawnPoints) {
      const def = getMonster(sp.monsterId);
      if (!def) continue;

      for (let i = 0; i < sp.maxCount; i++) {
        instances.push(this.createMonsterInstance(def));
      }
    }

    this.roomMonsters.set(roomId, instances);
  }

  /** 建立怪物實例 */
  private createMonsterInstance(def: MonsterDef): MonsterInstance {
    this.monsterCounter++;
    return {
      instanceId: `${def.id}_${this.monsterCounter}`,
      monsterId: def.id,
      def,
      hp: def.hp,
      maxHp: def.hp,
      mp: def.mp,
      maxMp: def.mp,
      isDead: false,
      respawnAt: null,
    };
  }

  /** 取得房間內活著的怪物 */
  getAliveMonsters(roomId: string): MonsterInstance[] {
    return (this.roomMonsters.get(roomId) ?? []).filter(m => !m.isDead);
  }

  /** 取得特定怪物實例 */
  getMonsterInstance(roomId: string, instanceId: string): MonsterInstance | undefined {
    return (this.roomMonsters.get(roomId) ?? []).find(m => m.instanceId === instanceId);
  }

  /** 根據名稱或 ID 模糊查找房間內的怪物 */
  findMonsterInRoom(roomId: string, query: string): MonsterInstance | undefined {
    const alive = this.getAliveMonsters(roomId);
    const q = query.toLowerCase();
    return alive.find(
      m =>
        m.def.name === query ||
        m.def.name.includes(query) ||
        m.monsterId === query ||
        m.monsterId.includes(query) ||
        m.instanceId === query ||
        m.def.alias.toLowerCase() === q ||
        m.def.alias.toLowerCase().includes(q),
    );
  }

  /** 標記怪物死亡並設定重生時間 */
  killMonster(roomId: string, instanceId: string): void {
    const monsters = this.roomMonsters.get(roomId);
    if (!monsters) return;

    const monster = monsters.find(m => m.instanceId === instanceId);
    if (!monster) return;

    monster.isDead = true;
    monster.hp = 0;

    // 從房間定義取得重生時間
    const room = getRoom(roomId);
    const spawnPoint = room?.monsters?.find(sp => sp.monsterId === monster.monsterId);
    const respawnSeconds = spawnPoint?.respawnSeconds ?? 60;

    monster.respawnAt = Date.now() + respawnSeconds * 1000;
  }

  /** 重生計時器 tick */
  private tickRespawn(): void {
    const now = Date.now();

    for (const [roomId, monsters] of this.roomMonsters.entries()) {
      for (const monster of monsters) {
        if (monster.isDead && monster.respawnAt && now >= monster.respawnAt) {
          // 重生
          monster.hp = monster.maxHp;
          monster.mp = monster.maxMp;
          monster.isDead = false;
          monster.respawnAt = null;

          // 通知房間內的玩家
          const playersInRoom = this.getPlayersInRoom(roomId);
          if (playersInRoom.length > 0) {
            this.broadcastToRoom(roomId, {
              type: 'narrative',
              payload: { text: `一隻${monster.def.name}出現了！` },
              timestamp: Date.now(),
            });
          }
        }
      }
    }
  }

  // ──────────────────────────────────────────────────────────
  //  廣播
  // ──────────────────────────────────────────────────────────

  /**
   * 向房間內所有玩家廣播訊息
   * @param excludePlayerId 排除的玩家 ID（例如訊息發起者）
   */
  broadcastToRoom(roomId: string, message: unknown, excludePlayerId?: string): void {
    if (!this.broadcastFn) return;

    // 讓外部（ws handler）決定怎麼送訊息
    // 這裡只呼叫註冊的函式
    this.broadcastFn(roomId, message);
  }

  // ──────────────────────────────────────────────────────────
  //  地圖相關
  // ──────────────────────────────────────────────────────────

  /** 產生 ASCII 小地圖 */
  generateMiniMap(roomId: string): string {
    const room = getRoom(roomId);
    if (!room) return '未知位置';

    const zone = ZONES[room.zone];
    if (!zone) return '未知區域';

    const rooms = getRoomsByZone(room.zone);
    if (rooms.length === 0) return '空的區域';

    // 計算地圖邊界
    let minX = Infinity, maxX = -Infinity;
    let minY = Infinity, maxY = -Infinity;
    for (const r of rooms) {
      minX = Math.min(minX, r.mapX);
      maxX = Math.max(maxX, r.mapX);
      minY = Math.min(minY, r.mapY);
      maxY = Math.max(maxY, r.mapY);
    }

    // 建立地圖網格
    const width = maxX - minX + 1;
    const height = maxY - minY + 1;
    const grid: string[][] = [];
    for (let y = 0; y < height; y++) {
      grid.push(new Array(width).fill('   '));
    }

    // 放置房間
    for (const r of rooms) {
      const gx = r.mapX - minX;
      const gy = r.mapY - minY;
      if (r.id === roomId) {
        grid[gy][gx] = '[*]'; // 當前位置
      } else {
        grid[gy][gx] = r.mapSymbol;
      }
    }

    // 組合地圖
    const header = `═══ ${zone.name} ═══`;
    const mapLines = grid.map(row => row.join('')).join('\n');
    return `${header}\n${mapLines}\n[*] = 你的位置`;
  }

  // ──────────────────────────────────────────────────────────
  //  工具函式
  // ──────────────────────────────────────────────────────────

  /** 方向中文名稱 */
  private directionName(dir: Direction): string {
    const names: Record<Direction, string> = {
      north: '北方',
      south: '南方',
      east: '東方',
      west: '西方',
      up: '上方',
      down: '下方',
    };
    return names[dir] ?? dir;
  }

  /** 取得所有區域資料 */
  getZones() {
    return ZONES;
  }

  /** 取得世界統計 */
  getStats(): {
    totalRooms: number;
    totalZones: number;
    onlinePlayers: number;
    aliveMonsters: number;
  } {
    let aliveMonsters = 0;
    for (const monsters of this.roomMonsters.values()) {
      aliveMonsters += monsters.filter(m => !m.isDead).length;
    }

    return {
      totalRooms: Object.keys(ROOMS).length,
      totalZones: Object.keys(ZONES).length,
      onlinePlayers: this.playerRoomMap.size,
      aliveMonsters,
    };
  }
}
