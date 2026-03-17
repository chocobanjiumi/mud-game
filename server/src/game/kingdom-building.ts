// 王國建設管理器 - Kingdom System Module 2
// 處理房間建造、NPC 配置、怪物生成點等建設功能

import { nanoid } from 'nanoid';
import type {
  BuildingType, KingdomNpcType, KingdomRoom, Direction, RoomDef, RoomExit,
} from '@game/shared';
import {
  addKingdomRoom, removeKingdomRoom, updateKingdomRoomType,
  getKingdomRooms, getKingdomByRoomId, getKingdomById,
  getMemberKingdom, getAllKingdoms,
} from '../db/queries.js';
import { KingdomManager } from './kingdom.js';

// ============================================================
//  常數
// ============================================================

/** 建造房間基礎費用 */
export const BUILD_ROOM_COST = 500;

/** 拆除房間返還比例 */
export const DEMOLISH_REFUND_RATE = 0.5;

/** 設定房間類型費用 */
export const ROOM_TYPE_COSTS: Record<BuildingType, number> = {
  empty: 0,
  hall: 200,
  barracks: 500,
  market: 800,
  treasury: 1000,
  temple: 600,
  smithy: 700,
  library: 600,
  dungeon: 400,
};

/** 房間類型中文名稱 */
export const BUILDING_TYPE_NAMES: Record<BuildingType, string> = {
  empty: '空房',
  hall: '大廳',
  barracks: '兵營',
  market: '市場',
  treasury: '金庫',
  temple: '神殿',
  smithy: '鍛造坊',
  library: '圖書館',
  dungeon: '地牢',
};

/** 房間類型描述 */
export const BUILDING_TYPE_DESCRIPTIONS: Record<BuildingType, string> = {
  empty: '一個空曠的房間，等待建設。',
  hall: '寬敞的大廳，王國成員聚集議事的場所。',
  barracks: '兵營，可以在此招募和訓練軍隊。',
  market: '繁忙的市場，交易在此享有稅率減免。',
  treasury: '堅固的金庫，妥善保管王國的財富。',
  temple: '莊嚴的神殿，祈禱可以回復生命與魔力。',
  smithy: '火爐烈焰不息的鍛造坊，可以修理和強化裝備。',
  library: '藏書豐富的圖書館，在此學習可獲得額外經驗。',
  dungeon: '陰暗的地牢，用來關押俘虜。',
};

/** 生成怪物費用 */
export const MOB_SPAWN_COST = 300;

/** NPC 配置費用 */
export const NPC_PLACE_COSTS: Record<KingdomNpcType, number> = {
  merchant: 500,
  trainer: 800,
  healer: 600,
  guard: 400,
  banker: 700,
  blacksmith: 600,
};

/** NPC 類型中文名稱 */
export const NPC_TYPE_NAMES: Record<KingdomNpcType, string> = {
  merchant: '商人',
  trainer: '訓練師',
  healer: '醫師',
  guard: '衛兵',
  banker: '銀行家',
  blacksmith: '鐵匠',
};

/** NPC 類型描述 */
export const NPC_TYPE_DESCRIPTIONS: Record<KingdomNpcType, string> = {
  merchant: '販售各種物品的商人，為王國帶來交易便利。',
  trainer: '經驗豐富的訓練師，可以指導冒險者學習新技能。',
  healer: '擅長治療的醫師，可以回復生命與解除狀態。',
  guard: '忠誠的衛兵，守護房間安全，驅逐入侵者。',
  banker: '精明的銀行家，提供國庫存取服務。',
  blacksmith: '技藝精湛的鐵匠，可以修理與強化裝備。',
};

/** 反向方向對應 */
const REVERSE_DIRECTION: Record<Direction, Direction> = {
  north: 'south',
  south: 'north',
  east: 'west',
  west: 'east',
  up: 'down',
  down: 'up',
};

// ============================================================
//  BuildingManager
// ============================================================

export class BuildingManager {
  private kingdomMgr: KingdomManager;

  /** 動態建造的王國房間（記憶體中維護，供 WorldManager 使用） */
  private dynamicRooms: Map<string, RoomDef> = new Map();

  /** 房間上的 NPC 配置 */
  private roomNpcs: Map<string, Array<{ id: string; type: KingdomNpcType; config: Record<string, string> }>> = new Map();

  /** 房間上的怪物生成點 */
  private roomMonsterSpawns: Map<string, Array<{ monsterId: string; maxCount: number; respawnSeconds: number }>> = new Map();

  constructor(kingdomMgr: KingdomManager) {
    this.kingdomMgr = kingdomMgr;
  }

  // ──────────────────────────────────────────────────────────
  //  房間建造
  // ──────────────────────────────────────────────────────────

  /** 建造新房間 */
  buildRoom(
    characterId: string,
    currentRoomId: string,
    direction: Direction,
    roomName: string,
  ): { success: boolean; message: string; roomId?: string } {
    // 權限檢查
    if (!this.kingdomMgr.hasPermission(characterId, 'build')) {
      return { success: false, message: '你沒有建造房間的權限。需要大臣以上的官職。' };
    }

    const member = this.kingdomMgr.getMemberKingdom(characterId);
    if (!member) return { success: false, message: '你不屬於任何王國。' };

    // 檢查當前房間是否屬於王國
    const currentKingdomRoom = getKingdomByRoomId(currentRoomId);
    if (!currentKingdomRoom || currentKingdomRoom.kingdom_id !== member.kingdomId) {
      return { success: false, message: '你必須在王國的領地房間中才能建造新房間。' };
    }

    // 檢查該方向是否已有出口
    const currentRoom = this.dynamicRooms.get(currentRoomId);
    if (currentRoom) {
      const existingExit = currentRoom.exits.find(e => e.direction === direction);
      if (existingExit) {
        return { success: false, message: `${direction} 方向已經有出口了。` };
      }
    }

    // 國庫扣費
    const cost = BUILD_ROOM_COST;
    const spent = this.kingdomMgr.spendFromTreasury(member.kingdomId, cost, `建造房間「${roomName}」`, characterId);
    if (!spent) {
      return { success: false, message: `國庫金幣不足！建造房間需要 ${cost} 金幣。` };
    }

    // 生成新房間 ID
    const newRoomId = `kingdom_${member.kingdomId}_${nanoid(8)}`;

    // 建立房間定義
    const newRoom: RoomDef = {
      id: newRoomId,
      name: roomName,
      zone: 'starter_village' as any, // 王國房間不屬於任何區域
      description: BUILDING_TYPE_DESCRIPTIONS.empty,
      exits: [
        { direction: REVERSE_DIRECTION[direction], targetRoomId: currentRoomId, description: '返回' },
      ],
      mapSymbol: '[K]',
      mapX: 0,
      mapY: 0,
    };

    // 儲存動態房間
    this.dynamicRooms.set(newRoomId, newRoom);

    // 更新當前房間的出口（如果是動態房間）
    if (currentRoom) {
      currentRoom.exits.push({
        direction,
        targetRoomId: newRoomId,
        description: `通往${roomName}`,
      });
    }

    // 資料庫記錄
    addKingdomRoom(member.kingdomId, newRoomId, 'empty', characterId);

    return { success: true, message: `房間「${roomName}」建造成功！花費 ${cost} 金幣。`, roomId: newRoomId };
  }

  /** 拆除房間 */
  destroyRoom(characterId: string, roomId: string): { success: boolean; message: string } {
    if (!this.kingdomMgr.hasPermission(characterId, 'build')) {
      return { success: false, message: '你沒有拆除房間的權限。' };
    }

    const member = this.kingdomMgr.getMemberKingdom(characterId);
    if (!member) return { success: false, message: '你不屬於任何王國。' };

    const kingdomRoom = getKingdomByRoomId(roomId);
    if (!kingdomRoom || kingdomRoom.kingdom_id !== member.kingdomId) {
      return { success: false, message: '這不是你的王國的房間。' };
    }

    const room = this.dynamicRooms.get(roomId);
    if (!room) return { success: false, message: '找不到該房間。' };

    // 返還部分金幣到國庫
    const refund = Math.floor(BUILD_ROOM_COST * DEMOLISH_REFUND_RATE);
    this.kingdomMgr.addToTreasury(member.kingdomId, refund, 'deposit', `拆除房間「${room.name}」返還`, characterId);

    // 移除其他房間指向此房間的出口
    for (const [, otherRoom] of this.dynamicRooms) {
      otherRoom.exits = otherRoom.exits.filter(e => e.targetRoomId !== roomId);
    }

    // 移除 NPC 和怪物生成點
    this.roomNpcs.delete(roomId);
    this.roomMonsterSpawns.delete(roomId);

    // 移除動態房間
    this.dynamicRooms.delete(roomId);

    // 資料庫移除
    removeKingdomRoom(member.kingdomId, roomId);

    return { success: true, message: `房間「${room.name}」已拆除。返還 ${refund} 金幣到國庫。` };
  }

  /** 設定房間描述 */
  setRoomDescription(characterId: string, roomId: string, description: string): { success: boolean; message: string } {
    if (!this.kingdomMgr.hasPermission(characterId, 'manage_rooms') && !this.kingdomMgr.hasPermission(characterId, 'build')) {
      return { success: false, message: '你沒有管理房間的權限。' };
    }

    const member = this.kingdomMgr.getMemberKingdom(characterId);
    if (!member) return { success: false, message: '你不屬於任何王國。' };

    const kingdomRoom = getKingdomByRoomId(roomId);
    if (!kingdomRoom || kingdomRoom.kingdom_id !== member.kingdomId) {
      return { success: false, message: '這不是你的王國的房間。' };
    }

    const room = this.dynamicRooms.get(roomId);
    if (!room) return { success: false, message: '找不到該房間。' };

    room.description = description;
    return { success: true, message: '房間描述已更新。' };
  }

  /** 設定房間類型 */
  setRoomType(characterId: string, roomId: string, roomType: BuildingType): { success: boolean; message: string } {
    if (!this.kingdomMgr.hasPermission(characterId, 'build')) {
      return { success: false, message: '你沒有設定房間類型的權限。' };
    }

    const member = this.kingdomMgr.getMemberKingdom(characterId);
    if (!member) return { success: false, message: '你不屬於任何王國。' };

    const kingdomRoom = getKingdomByRoomId(roomId);
    if (!kingdomRoom || kingdomRoom.kingdom_id !== member.kingdomId) {
      return { success: false, message: '這不是你的王國的房間。' };
    }

    if (!BUILDING_TYPE_NAMES[roomType]) {
      const validTypes = Object.entries(BUILDING_TYPE_NAMES)
        .map(([k, v]) => `${k}(${v})`)
        .join(', ');
      return { success: false, message: `無效的房間類型。可用類型：${validTypes}` };
    }

    // 收費
    const cost = ROOM_TYPE_COSTS[roomType];
    if (cost > 0) {
      const spent = this.kingdomMgr.spendFromTreasury(
        member.kingdomId, cost,
        `設定房間類型為${BUILDING_TYPE_NAMES[roomType]}`, characterId,
      );
      if (!spent) {
        return { success: false, message: `國庫金幣不足！設定${BUILDING_TYPE_NAMES[roomType]}需要 ${cost} 金幣。` };
      }
    }

    // 更新動態房間
    const room = this.dynamicRooms.get(roomId);
    if (room) {
      room.description = BUILDING_TYPE_DESCRIPTIONS[roomType];
    }

    // 更新資料庫
    updateKingdomRoomType(member.kingdomId, roomId, roomType);

    return { success: true, message: `房間類型已設定為${BUILDING_TYPE_NAMES[roomType]}。${cost > 0 ? `花費 ${cost} 金幣。` : ''}` };
  }

  /** 新增出口 */
  addExit(characterId: string, roomId: string, direction: Direction, targetRoomId: string): { success: boolean; message: string } {
    if (!this.kingdomMgr.hasPermission(characterId, 'build')) {
      return { success: false, message: '你沒有建造出口的權限。' };
    }

    const member = this.kingdomMgr.getMemberKingdom(characterId);
    if (!member) return { success: false, message: '你不屬於任何王國。' };

    const kingdomRoom = getKingdomByRoomId(roomId);
    if (!kingdomRoom || kingdomRoom.kingdom_id !== member.kingdomId) {
      return { success: false, message: '這不是你的王國的房間。' };
    }

    const room = this.dynamicRooms.get(roomId);
    if (!room) return { success: false, message: '找不到該房間。' };

    // 檢查方向是否已有出口
    const existingExit = room.exits.find(e => e.direction === direction);
    if (existingExit) {
      return { success: false, message: `${direction} 方向已經有出口了。` };
    }

    // 檢查目標房間是否存在
    const targetRoom = this.dynamicRooms.get(targetRoomId);
    if (!targetRoom) {
      return { success: false, message: '目標房間不存在。' };
    }

    room.exits.push({ direction, targetRoomId, description: `通往${targetRoom.name}` });
    return { success: true, message: `已在 ${direction} 方向新增通往「${targetRoom.name}」的出口。` };
  }

  /** 鎖定出口 */
  lockExit(characterId: string, roomId: string, direction: Direction): { success: boolean; message: string } {
    if (!this.kingdomMgr.hasPermission(characterId, 'manage_rooms') && !this.kingdomMgr.hasPermission(characterId, 'build')) {
      return { success: false, message: '你沒有管理房間的權限。' };
    }

    const member = this.kingdomMgr.getMemberKingdom(characterId);
    if (!member) return { success: false, message: '你不屬於任何王國。' };

    const room = this.dynamicRooms.get(roomId);
    if (!room) return { success: false, message: '找不到該房間。' };

    const exit = room.exits.find(e => e.direction === direction);
    if (!exit) return { success: false, message: `${direction} 方向沒有出口。` };

    exit.locked = true;
    return { success: true, message: `${direction} 方向的出口已鎖定。` };
  }

  /** 解鎖出口 */
  unlockExit(characterId: string, roomId: string, direction: Direction): { success: boolean; message: string } {
    if (!this.kingdomMgr.hasPermission(characterId, 'manage_rooms') && !this.kingdomMgr.hasPermission(characterId, 'build')) {
      return { success: false, message: '你沒有管理房間的權限。' };
    }

    const member = this.kingdomMgr.getMemberKingdom(characterId);
    if (!member) return { success: false, message: '你不屬於任何王國。' };

    const room = this.dynamicRooms.get(roomId);
    if (!room) return { success: false, message: '找不到該房間。' };

    const exit = room.exits.find(e => e.direction === direction);
    if (!exit) return { success: false, message: `${direction} 方向沒有出口。` };

    exit.locked = false;
    return { success: true, message: `${direction} 方向的出口已解鎖。` };
  }

  // ──────────────────────────────────────────────────────────
  //  怪物生成點管理
  // ──────────────────────────────────────────────────────────

  /** 設定怪物生成點 */
  spawnMob(characterId: string, roomId: string, monsterId: string): { success: boolean; message: string } {
    if (!this.kingdomMgr.hasPermission(characterId, 'manage_rooms') && !this.kingdomMgr.hasPermission(characterId, 'build')) {
      return { success: false, message: '你沒有管理怪物生成點的權限。' };
    }

    const member = this.kingdomMgr.getMemberKingdom(characterId);
    if (!member) return { success: false, message: '你不屬於任何王國。' };

    const kingdomRoom = getKingdomByRoomId(roomId);
    if (!kingdomRoom || kingdomRoom.kingdom_id !== member.kingdomId) {
      return { success: false, message: '這不是你的王國的房間。' };
    }

    // 國庫扣費
    const spent = this.kingdomMgr.spendFromTreasury(
      member.kingdomId, MOB_SPAWN_COST,
      `設定怪物生成點 ${monsterId}`, characterId,
    );
    if (!spent) {
      return { success: false, message: `國庫金幣不足！設定怪物生成點需要 ${MOB_SPAWN_COST} 金幣。` };
    }

    // 新增生成點
    if (!this.roomMonsterSpawns.has(roomId)) {
      this.roomMonsterSpawns.set(roomId, []);
    }
    this.roomMonsterSpawns.get(roomId)!.push({
      monsterId,
      maxCount: 2,
      respawnSeconds: 60,
    });

    // 更新動態房間
    const room = this.dynamicRooms.get(roomId);
    if (room) {
      if (!room.monsters) room.monsters = [];
      room.monsters.push({ monsterId, maxCount: 2, respawnSeconds: 60 });
    }

    return { success: true, message: `已在此房間設定「${monsterId}」的生成點。花費 ${MOB_SPAWN_COST} 金幣。` };
  }

  /** 移除怪物生成點 */
  removeMob(characterId: string, roomId: string, monsterId: string): { success: boolean; message: string } {
    if (!this.kingdomMgr.hasPermission(characterId, 'manage_rooms') && !this.kingdomMgr.hasPermission(characterId, 'build')) {
      return { success: false, message: '你沒有管理怪物生成點的權限。' };
    }

    const member = this.kingdomMgr.getMemberKingdom(characterId);
    if (!member) return { success: false, message: '你不屬於任何王國。' };

    const spawns = this.roomMonsterSpawns.get(roomId);
    if (!spawns) return { success: false, message: '此房間沒有怪物生成點。' };

    const idx = spawns.findIndex(s => s.monsterId === monsterId);
    if (idx === -1) return { success: false, message: `找不到「${monsterId}」的生成點。` };

    spawns.splice(idx, 1);

    // 更新動態房間
    const room = this.dynamicRooms.get(roomId);
    if (room && room.monsters) {
      const monIdx = room.monsters.findIndex(m => m.monsterId === monsterId);
      if (monIdx !== -1) room.monsters.splice(monIdx, 1);
    }

    return { success: true, message: `已移除「${monsterId}」的生成點。` };
  }

  // ──────────────────────────────────────────────────────────
  //  NPC 管理
  // ──────────────────────────────────────────────────────────

  /** 放置 NPC */
  placeNpc(characterId: string, roomId: string, npcType: KingdomNpcType): { success: boolean; message: string; npcId?: string } {
    if (!this.kingdomMgr.hasPermission(characterId, 'manage_npcs') && !this.kingdomMgr.hasPermission(characterId, 'build')) {
      return { success: false, message: '你沒有放置 NPC 的權限。' };
    }

    const member = this.kingdomMgr.getMemberKingdom(characterId);
    if (!member) return { success: false, message: '你不屬於任何王國。' };

    const kingdomRoom = getKingdomByRoomId(roomId);
    if (!kingdomRoom || kingdomRoom.kingdom_id !== member.kingdomId) {
      return { success: false, message: '這不是你的王國的房間。' };
    }

    if (!NPC_TYPE_NAMES[npcType]) {
      const validTypes = Object.entries(NPC_TYPE_NAMES)
        .map(([k, v]) => `${k}(${v})`)
        .join(', ');
      return { success: false, message: `無效的 NPC 類型。可用類型：${validTypes}` };
    }

    // 國庫扣費
    const cost = NPC_PLACE_COSTS[npcType];
    const spent = this.kingdomMgr.spendFromTreasury(
      member.kingdomId, cost,
      `放置${NPC_TYPE_NAMES[npcType]}`, characterId,
    );
    if (!spent) {
      return { success: false, message: `國庫金幣不足！放置${NPC_TYPE_NAMES[npcType]}需要 ${cost} 金幣。` };
    }

    // 生成 NPC ID
    const npcId = `knpc_${npcType}_${nanoid(6)}`;

    // 新增到記憶體
    if (!this.roomNpcs.has(roomId)) {
      this.roomNpcs.set(roomId, []);
    }
    this.roomNpcs.get(roomId)!.push({
      id: npcId,
      type: npcType,
      config: {},
    });

    // 更新動態房間的 NPC 列表
    const room = this.dynamicRooms.get(roomId);
    if (room) {
      if (!room.npcs) room.npcs = [];
      room.npcs.push(npcId);
    }

    return {
      success: true,
      message: `已放置${NPC_TYPE_NAMES[npcType]}（ID: ${npcId}）。花費 ${cost} 金幣。`,
      npcId,
    };
  }

  /** 移除 NPC */
  removeNpc(characterId: string, roomId: string, npcId: string): { success: boolean; message: string } {
    if (!this.kingdomMgr.hasPermission(characterId, 'manage_npcs') && !this.kingdomMgr.hasPermission(characterId, 'build')) {
      return { success: false, message: '你沒有移除 NPC 的權限。' };
    }

    const member = this.kingdomMgr.getMemberKingdom(characterId);
    if (!member) return { success: false, message: '你不屬於任何王國。' };

    const npcs = this.roomNpcs.get(roomId);
    if (!npcs) return { success: false, message: '此房間沒有 NPC。' };

    const idx = npcs.findIndex(n => n.id === npcId);
    if (idx === -1) return { success: false, message: `找不到 NPC「${npcId}」。` };

    const removed = npcs.splice(idx, 1)[0];

    // 更新動態房間
    const room = this.dynamicRooms.get(roomId);
    if (room && room.npcs) {
      room.npcs = room.npcs.filter(id => id !== npcId);
    }

    return { success: true, message: `已移除${NPC_TYPE_NAMES[removed.type] ?? removed.type}（ID: ${npcId}）。` };
  }

  /** 設定 NPC 配置 */
  configNpc(characterId: string, roomId: string, npcId: string, key: string, value: string): { success: boolean; message: string } {
    if (!this.kingdomMgr.hasPermission(characterId, 'manage_npcs') && !this.kingdomMgr.hasPermission(characterId, 'build')) {
      return { success: false, message: '你沒有配置 NPC 的權限。' };
    }

    const npcs = this.roomNpcs.get(roomId);
    if (!npcs) return { success: false, message: '此房間沒有 NPC。' };

    const npc = npcs.find(n => n.id === npcId);
    if (!npc) return { success: false, message: `找不到 NPC「${npcId}」。` };

    npc.config[key] = value;
    return { success: true, message: `NPC「${npcId}」的配置 ${key} 已設定為 ${value}。` };
  }

  // ──────────────────────────────────────────────────────────
  //  查詢
  // ──────────────────────────────────────────────────────────

  /** 取得王國所有房間資訊 */
  getKingdomRoomList(kingdomId: string): KingdomRoom[] {
    const rows = getKingdomRooms(kingdomId);
    return rows.map(r => ({
      kingdomId: r.kingdom_id,
      roomId: r.room_id,
      roomType: r.room_type as BuildingType,
      builtBy: r.built_by,
      builtAt: r.built_at,
    }));
  }

  /** 取得動態房間定義（供 WorldManager 使用） */
  getDynamicRoom(roomId: string): RoomDef | undefined {
    return this.dynamicRooms.get(roomId);
  }

  /** 取得所有動態房間 */
  getAllDynamicRooms(): Map<string, RoomDef> {
    return this.dynamicRooms;
  }

  /** 取得房間的 NPC 列表 */
  getRoomNpcs(roomId: string): Array<{ id: string; type: KingdomNpcType; config: Record<string, string> }> {
    return this.roomNpcs.get(roomId) ?? [];
  }

  /** 取得房間的怪物生成點 */
  getRoomMonsterSpawns(roomId: string): Array<{ monsterId: string; maxCount: number; respawnSeconds: number }> {
    return this.roomMonsterSpawns.get(roomId) ?? [];
  }

  /** 判斷房間是否屬於王國（不指定王國） */
  isKingdomRoom(roomId: string): boolean;
  /** 判斷房間是否屬於指定王國 */
  isKingdomRoom(kingdomId: string, roomId: string): boolean;
  isKingdomRoom(kingdomIdOrRoomId: string, roomId?: string): boolean {
    if (roomId !== undefined) {
      // 雙參數：isKingdomRoom(kingdomId, roomId)
      const row = getKingdomByRoomId(roomId);
      return !!row && row.kingdom_id === kingdomIdOrRoomId;
    }
    // 單參數：isKingdomRoom(roomId)
    return !!getKingdomByRoomId(kingdomIdOrRoomId);
  }

  /** 取得房間所屬的王國 ID */
  getRoomKingdomId(roomId: string): string | null {
    const row = getKingdomByRoomId(roomId);
    return row?.kingdom_id ?? null;
  }

  // ──────────────────────────────────────────────────────────
  //  初始化（從資料庫載入已建造的房間）
  // ──────────────────────────────────────────────────────────

  /** 從資料庫載入所有王國房間到記憶體 */
  loadFromDb(): void {
    const kingdoms = getAllKingdoms();
    for (const kingdom of kingdoms) {
      const rooms = getKingdomRooms(kingdom.id);
      for (const roomRow of rooms) {
        // 如果記憶體中還沒有此房間，建立一個基礎定義
        if (!this.dynamicRooms.has(roomRow.room_id)) {
          const roomType = roomRow.room_type as BuildingType;
          this.dynamicRooms.set(roomRow.room_id, {
            id: roomRow.room_id,
            name: BUILDING_TYPE_NAMES[roomType] ?? '王國房間',
            zone: 'starter_village' as any,
            description: BUILDING_TYPE_DESCRIPTIONS[roomType] ?? '一個王國的房間。',
            exits: [],
            mapSymbol: '[K]',
            mapX: 0,
            mapY: 0,
          });
        }
      }
    }
    console.log(`[BuildingManager] 已從資料庫載入 ${this.dynamicRooms.size} 個王國房間。`);
  }
}
