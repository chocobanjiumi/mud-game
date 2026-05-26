// 世界管理器 - 房間、玩家位置、怪物重生

import type { RoomDef, Direction, MonsterDef, SpawnPoint, ApproachingMonsterPayload } from '@game/shared';
import { ROOMS, ZONES, getRoom, getRoomsByZone } from '../data/rooms.js';
import { getMonster } from '../data/monsters.js';
import { getNpcsByRoom } from '../data/npcs.js';

// ============================================================
//  房間內活躍怪物實例
// ============================================================

export interface MonsterInstance {
  instanceId: string;
  monsterId: string;
  originRoomId?: string;
  def: MonsterDef;
  hp: number;
  maxHp: number;
  mp: number;
  maxMp: number;
  isDead: boolean;
  respawnAt: number | null; // timestamp for respawn; null = alive
}

function parseOrdinalTarget(query: string): { name: string; ordinal?: number } {
  const trimmed = query.trim();
  const hashMatch = trimmed.match(/^(.+?)#(\d+)$/);
  const spaceMatch = trimmed.match(/^(.+?)\s+(\d+)$/);
  const match = hashMatch ?? spaceMatch;
  if (!match) return { name: trimmed };

  const ordinal = parseInt(match[2], 10);
  if (!Number.isFinite(ordinal) || ordinal < 1) return { name: trimmed };
  return { name: match[1].trim(), ordinal };
}

function reverseDirection(direction: Direction): Direction {
  const reverse: Record<Direction, Direction> = {
    north: 'south',
    south: 'north',
    east: 'west',
    west: 'east',
    up: 'down',
    down: 'up',
  };
  return reverse[direction];
}

interface MoveHistoryEntry {
  fromRoomId: string;
  toRoomId: string;
  reverseDirection: Direction;
}

export interface ApproachingMonsterState extends ApproachingMonsterPayload {
  originRoomId?: string;
}

// ============================================================
//  WorldManager
// ============================================================

export class WorldManager {
  /** roomId -> Set<playerId> */
  private playerPositions: Map<string, Set<string>> = new Map();
  /** playerId -> roomId */
  private playerRoomMap: Map<string, string> = new Map();
  /** playerId -> stack of room moves, used to make immediate reverse paths stable */
  private playerMoveHistory: Map<string, MoveHistoryEntry[]> = new Map();
  /** roomId -> MonsterInstance[] */
  private roomMonsters: Map<string, MonsterInstance[]> = new Map();
  /** destination roomId -> approaching monsters */
  private approachingMonsters: Map<string, ApproachingMonsterState[]> = new Map();
  /** Counter for unique monster instance IDs */
  private monsterCounter = 0;
  /** Respawn timer handle */
  private respawnTimer: ReturnType<typeof setInterval> | null = null;
  /** Callback for broadcasting messages to a room */
  private broadcastFn: ((roomId: string, message: unknown) => void) | null = null;
  /** Callback when room entity state changes */
  private roomStateChangeFn: ((roomId: string) => void) | null = null;

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

  setRoomStateChangeFunction(fn: (roomId: string) => void): void {
    this.roomStateChangeFn = fn;
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
    this.playerMoveHistory.delete(playerId);
  }

  /** 移除玩家（離線時呼叫） */
  removePlayer(playerId: string): void {
    const roomId = this.playerRoomMap.get(playerId);
    if (roomId) {
      this.playerPositions.get(roomId)?.delete(playerId);
      this.playerRoomMap.delete(playerId);
      this.playerMoveHistory.delete(playerId);
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

    const history = this.playerMoveHistory.get(playerId) ?? [];
    const previousMove = history[history.length - 1];
    if (
      previousMove
      && previousMove.toRoomId === currentRoomId
      && previousMove.reverseDirection === direction
      && getRoom(previousMove.fromRoomId)
    ) {
      history.pop();
      if (history.length > 0) {
        this.playerMoveHistory.set(playerId, history);
      } else {
        this.playerMoveHistory.delete(playerId);
      }

      return this.movePlayerToRoom(playerId, currentRoomId, previousMove.fromRoomId, direction);
    }

    const exit = currentRoom.exits.find(e => e.direction === direction);
    if (!exit) return null;

    // 檢查是否上鎖
    if (exit.locked) return null;

    const targetRoom = getRoom(exit.targetRoomId);
    if (!targetRoom) return null;

    history.push({
      fromRoomId: currentRoomId,
      toRoomId: exit.targetRoomId,
      reverseDirection: reverseDirection(direction),
    });
    this.playerMoveHistory.set(playerId, history);

    return this.movePlayerToRoom(playerId, currentRoomId, exit.targetRoomId, direction);
  }

  private movePlayerToRoom(
    playerId: string,
    currentRoomId: string,
    targetRoomId: string,
    direction: Direction,
  ): { room: RoomDef; fromRoomId: string } | null {
    const targetRoom = getRoom(targetRoomId);
    if (!targetRoom) return null;

    // 從舊房間移除
    this.playerPositions.get(currentRoomId)?.delete(playerId);

    // 放入新房間
    if (!this.playerPositions.has(targetRoomId)) {
      this.playerPositions.set(targetRoomId, new Set());
    }
    this.playerPositions.get(targetRoomId)!.add(playerId);
    this.playerRoomMap.set(playerId, targetRoomId);

    // 廣播離開/進入訊息
    this.broadcastToRoom(currentRoomId, {
      type: 'narrative',
      payload: { text: `一位冒險者往${this.directionName(direction)}離開了。` },
      timestamp: Date.now(),
    }, playerId);

    this.broadcastToRoom(targetRoomId, {
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
        instances.push(this.createMonsterInstance(def, roomId));
      }
    }

    this.roomMonsters.set(roomId, instances);
  }

  /** 建立怪物實例 */
  private createMonsterInstance(def: MonsterDef, originRoomId: string): MonsterInstance {
    this.monsterCounter++;
    return {
      instanceId: `${def.id}_${this.monsterCounter}`,
      monsterId: def.id,
      originRoomId,
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

  getApproachingMonsters(roomId: string): ApproachingMonsterState[] {
    return [...(this.approachingMonsters.get(roomId) ?? [])];
  }

  setApproachingMonsters(roomId: string, monsters: ApproachingMonsterState[]): void {
    this.approachingMonsters.set(roomId, monsters);
    this.roomStateChangeFn?.(roomId);
  }

  moveMonsterToApproaching(
    sourceRoomId: string,
    destinationRoomId: string,
    sourceDirection: ApproachingMonsterState['sourceDirection'],
    instanceId: string,
    arrivalTicks: number,
    targetPlayerId?: string,
    targetPartyId?: string,
  ): ApproachingMonsterState | null {
    const monsters = this.roomMonsters.get(sourceRoomId);
    const monster = monsters?.find(candidate => candidate.instanceId === instanceId && !candidate.isDead);
    if (!monsters || !monster) return null;

    const approaching: ApproachingMonsterState = {
      instanceId: monster.instanceId,
      monsterId: monster.monsterId,
      name: monster.def.name,
      alias: monster.def.alias,
      sourceDirection,
      sourceRoomId,
      destinationRoomId,
      originRoomId: monster.originRoomId,
      arrivalTicks: Math.max(0, arrivalTicks),
      targetPlayerId,
      targetPartyId,
      hp: monster.hp,
      maxHp: monster.maxHp,
      image: `/images/monsters/monster_${monster.monsterId}.png`,
    };

    if (arrivalTicks <= 0) {
      monsters.splice(monsters.indexOf(monster), 1);
      this.placeArrivedMonster(approaching, monster);
    } else {
      if (sourceRoomId === destinationRoomId) {
        monsters.splice(monsters.indexOf(monster), 1);
      }
      const list = this.approachingMonsters.get(destinationRoomId) ?? [];
      if (!list.some(existing => existing.instanceId === approaching.instanceId)) {
        list.push(approaching);
      }
      this.approachingMonsters.set(destinationRoomId, list);
    }
    this.roomStateChangeFn?.(sourceRoomId);
    this.roomStateChangeFn?.(destinationRoomId);
    return approaching;
  }

  tickApproaching(roomId: string): ApproachingMonsterState[] {
    const list = this.approachingMonsters.get(roomId) ?? [];
    const arrived: ApproachingMonsterState[] = [];
    const remaining: ApproachingMonsterState[] = [];

    for (const approaching of list) {
      const next = { ...approaching, arrivalTicks: approaching.arrivalTicks - 1 };
      if (next.arrivalTicks <= 0) {
        arrived.push({ ...next, arrivalTicks: 0 });
      } else {
        remaining.push(next);
      }
    }

    if (remaining.length > 0) this.approachingMonsters.set(roomId, remaining);
    else this.approachingMonsters.delete(roomId);

    for (const monster of arrived) {
      this.placeArrivedMonster(monster);
    }
    if (arrived.length > 0 || list.length !== remaining.length) this.roomStateChangeFn?.(roomId);
    return arrived;
  }

  private placeArrivedMonster(approaching: ApproachingMonsterState, existing?: MonsterInstance): MonsterInstance {
    const def = existing?.def ?? getMonster(approaching.monsterId);
    if (!def) {
      throw new Error(`Unknown approaching monster ${approaching.monsterId}`);
    }
    const sourceMonsters = this.roomMonsters.get(approaching.sourceRoomId) ?? [];
    const sourceExisting = existing ?? sourceMonsters.find(monster => monster.instanceId === approaching.instanceId);
    if (sourceExisting) {
      const index = sourceMonsters.indexOf(sourceExisting);
      if (index >= 0) {
        sourceMonsters.splice(index, 1);
        this.roomMonsters.set(approaching.sourceRoomId, sourceMonsters);
      }
    }

    const instance: MonsterInstance = sourceExisting ?? {
      instanceId: approaching.instanceId,
      monsterId: approaching.monsterId,
      originRoomId: approaching.originRoomId ?? approaching.sourceRoomId,
      def,
      hp: approaching.hp,
      maxHp: approaching.maxHp,
      mp: def.mp,
      maxMp: def.mp,
      isDead: false,
      respawnAt: null,
    };
    instance.hp = Math.max(1, approaching.hp);
    instance.isDead = false;
    instance.respawnAt = null;
    const destination = this.roomMonsters.get(approaching.destinationRoomId) ?? [];
    if (!destination.some(monster => monster.instanceId === instance.instanceId)) {
      destination.push(instance);
    }
    this.roomMonsters.set(approaching.destinationRoomId, destination);
    return instance;
  }

  removeApproachingMonster(roomId: string, instanceId: string): void {
    const list = this.approachingMonsters.get(roomId) ?? [];
    const remaining = list.filter(monster => monster.instanceId !== instanceId);
    if (remaining.length > 0) this.approachingMonsters.set(roomId, remaining);
    else this.approachingMonsters.delete(roomId);
    if (remaining.length !== list.length) this.roomStateChangeFn?.(roomId);
  }

  killMonsterByInstance(instanceId: string): void {
    for (const [roomId, monsters] of this.roomMonsters.entries()) {
      if (monsters.some(monster => monster.instanceId === instanceId)) {
        this.killMonster(roomId, instanceId);
        for (const destinationRoomId of this.approachingMonsters.keys()) {
          this.removeApproachingMonster(destinationRoomId, instanceId);
        }
        return;
      }
    }
  }

  resetSurvivingMonsterToOrigin(instanceId: string): boolean {
    let currentRoomId: string | undefined;
    let monster: MonsterInstance | undefined;

    for (const [roomId, monsters] of this.roomMonsters.entries()) {
      const found = monsters.find(candidate => candidate.instanceId === instanceId);
      if (found) {
        currentRoomId = roomId;
        monster = found;
        break;
      }
    }
    if (!monster || !currentRoomId || monster.isDead) return false;

    const changedRooms = new Set<string>([currentRoomId]);
    for (const [roomId, list] of this.approachingMonsters.entries()) {
      const remaining = list.filter(candidate => candidate.instanceId !== instanceId);
      if (remaining.length !== list.length) {
        changedRooms.add(roomId);
        if (remaining.length > 0) this.approachingMonsters.set(roomId, remaining);
        else this.approachingMonsters.delete(roomId);
      }
    }

    monster.hp = monster.maxHp;
    monster.mp = monster.maxMp;
    monster.isDead = false;
    monster.respawnAt = null;

    const originRoomId = monster.originRoomId || currentRoomId;
    if (originRoomId !== currentRoomId) {
      const currentMonsters = this.roomMonsters.get(currentRoomId) ?? [];
      const currentIndex = currentMonsters.indexOf(monster);
      if (currentIndex >= 0) {
        currentMonsters.splice(currentIndex, 1);
        this.roomMonsters.set(currentRoomId, currentMonsters);
      }

      const originMonsters = this.roomMonsters.get(originRoomId) ?? [];
      if (!originMonsters.some(candidate => candidate.instanceId === monster.instanceId)) {
        originMonsters.push(monster);
      }
      this.roomMonsters.set(originRoomId, originMonsters);
      changedRooms.add(originRoomId);
    }

    for (const roomId of changedRooms) this.roomStateChangeFn?.(roomId);
    return true;
  }

  /** 取得特定怪物實例 */
  getMonsterInstance(roomId: string, instanceId: string): MonsterInstance | undefined {
    return (this.roomMonsters.get(roomId) ?? []).find(m => m.instanceId === instanceId);
  }

  /** 根據名稱、ID 或「名稱#序號」模糊查找房間內的怪物 */
  findMonsterInRoom(roomId: string, query: string): MonsterInstance | undefined {
    const alive = this.getAliveMonsters(roomId);
    const parsed = parseOrdinalTarget(query);
    const q = parsed.name.toLowerCase();
    const matches = alive.filter(
      m =>
        m.def.name === parsed.name ||
        m.def.name.includes(parsed.name) ||
        m.monsterId === parsed.name ||
        m.monsterId.includes(parsed.name) ||
        m.instanceId === parsed.name ||
        m.def.alias.toLowerCase() === q ||
        m.def.alias.toLowerCase().includes(q),
    );
    return parsed.ordinal ? matches[parsed.ordinal - 1] : matches[0];
  }

  /** 標記怪物死亡並設定重生時間 */
  killMonster(roomId: string, instanceId: string): void {
    const monsters = this.roomMonsters.get(roomId);
    if (!monsters) return;

    const monster = monsters.find(m => m.instanceId === instanceId);
    if (!monster) return;

    monster.isDead = true;
    monster.hp = 0;

    const respawnRoomId = monster.originRoomId || roomId;
    if (respawnRoomId !== roomId) {
      monsters.splice(monsters.indexOf(monster), 1);
      const originMonsters = this.roomMonsters.get(respawnRoomId) ?? [];
      if (!originMonsters.some(candidate => candidate.instanceId === monster.instanceId)) {
        originMonsters.push(monster);
      }
      this.roomMonsters.set(respawnRoomId, originMonsters);
    }

    const room = getRoom(respawnRoomId);
    const spawnPoint = room?.monsters?.find(sp => sp.monsterId === monster.monsterId);
    const respawnSeconds = this.getEffectiveRespawnSeconds(respawnRoomId, monster, spawnPoint);

    monster.respawnAt = Date.now() + respawnSeconds * 1000;
    this.roomStateChangeFn?.(roomId);
    if (respawnRoomId !== roomId) this.roomStateChangeFn?.(respawnRoomId);
  }

  private getEffectiveRespawnSeconds(
    roomId: string,
    monster: MonsterInstance,
    spawnPoint?: SpawnPoint,
  ): number {
    const baseSeconds = spawnPoint?.respawnSeconds ?? monster.def.respawnTime ?? 60;

    if (monster.def.isBoss) {
      return Math.max(baseSeconds, 1800);
    }

    if (monster.def.isElite) {
      return Math.min(1800, Math.max(baseSeconds, 600));
    }

    const playersInRoom = this.getPlayersInRoom(roomId).length;
    let adjustedSeconds = baseSeconds;
    if (playersInRoom >= 4) {
      adjustedSeconds = Math.floor(baseSeconds * 0.65);
    } else if (playersInRoom >= 2) {
      adjustedSeconds = Math.floor(baseSeconds * 0.8);
    }

    return Math.min(90, Math.max(25, adjustedSeconds));
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
            this.roomStateChangeFn?.(roomId);
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
