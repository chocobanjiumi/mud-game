// 世界事件系統 — WorldEventManager
// 世界 BOSS 定期刷新，多人協力討伐

import { getDb } from '../db/schema.js';
import { randomUUID } from 'crypto';
import { addInventoryItem, getCharacterById, saveCharacter } from '../db/queries.js';

// ============================================================
//  型別定義
// ============================================================

export type WorldEventStatus = 'pending' | 'active' | 'completed';

export interface WorldBossDef {
  id: string;
  name: string;
  level: number;
  hp: number;
  atk: number;
  def: number;
  description: string;
  spawnRoom: string;
  elements: string[];
  drops: { itemId: string; chance: number; minQty: number; maxQty: number }[];
  bonusGold: number;
  bonusExp: number;
}

export interface WorldEvent {
  id: string;
  eventType: string;
  bossId: string | null;
  status: WorldEventStatus;
  spawnAt: number;
  startedAt: number | null;
  endedAt: number | null;
  participants: string[];
  lootDistributed: boolean;
}

export interface EventParticipant {
  characterId: string;
  damage: number;
}

// ============================================================
//  世界 BOSS 定義 (3 隻)
// ============================================================

export const WORLD_BOSS_DEFS: Record<string, WorldBossDef> = {
  ancient_demon_king: {
    id: 'ancient_demon_king',
    name: '遠古魔王',
    level: 35,
    hp: 50000,
    atk: 280,
    def: 150,
    description: '從遠古封印中甦醒的魔王，渾身散發著火焰與黑暗的氣息。',
    spawnRoom: 'demon_border',
    elements: ['fire', 'dark'],
    drops: [
      { itemId: 'demon_king_crystal', chance: 1.0, minQty: 1, maxQty: 1 },
      { itemId: 'dark_essence', chance: 0.5, minQty: 1, maxQty: 3 },
      { itemId: 'fire_ruby', chance: 0.3, minQty: 1, maxQty: 2 },
    ],
    bonusGold: 5000,
    bonusExp: 3000,
  },
  primordial_dragon: {
    id: 'primordial_dragon',
    name: '始祖龍',
    level: 45,
    hp: 80000,
    atk: 350,
    def: 200,
    description: '龍族的始祖，擁有操控所有元素的力量，一聲咆哮便能震碎山岳。',
    spawnRoom: 'dragon_bone_field',
    elements: ['fire', 'ice', 'thunder', 'dark', 'light'],
    drops: [
      { itemId: 'primordial_dragon_scale', chance: 1.0, minQty: 1, maxQty: 1 },
      { itemId: 'dragon_heart', chance: 0.4, minQty: 1, maxQty: 1 },
      { itemId: 'ancient_dragon_bone', chance: 0.6, minQty: 1, maxQty: 2 },
    ],
    bonusGold: 10000,
    bonusExp: 5000,
  },
  chaos_entity: {
    id: 'chaos_entity',
    name: '混沌之主',
    level: 55,
    hp: 120000,
    atk: 450,
    def: 250,
    description: '來自虛空的混沌存在，能扭曲現實本身。其真實形態無人能夠理解。',
    spawnRoom: 'abyss_core',
    elements: ['dark', 'void'],
    drops: [
      { itemId: 'chaos_fragment', chance: 1.0, minQty: 1, maxQty: 1 },
      { itemId: 'void_crystal', chance: 0.3, minQty: 1, maxQty: 1 },
      { itemId: 'reality_shard', chance: 0.2, minQty: 1, maxQty: 1 },
    ],
    bonusGold: 20000,
    bonusExp: 8000,
  },
};

const BOSS_ROTATION = ['ancient_demon_king', 'primordial_dragon', 'chaos_entity'];
const EVENT_INTERVAL_MS = 4 * 60 * 60 * 1000; // 4 小時

// ============================================================
//  WorldEventManager
// ============================================================

export class WorldEventManager {
  private scheduleTimer: ReturnType<typeof setTimeout> | null = null;
  /** 全域廣播回呼 */
  private broadcastFn: ((message: string) => void) | null = null;
  /** 當前世界 BOSS 剩餘 HP（in-memory，active 時才有值） */
  private currentBossHp: Map<string, number> = new Map(); // eventId -> remainingHp

  // ──────────────────────────────────────────────────────────
  //  DB 確保
  // ──────────────────────────────────────────────────────────

  ensureTables(): void {
    const db = getDb();
    db.exec(`
      CREATE TABLE IF NOT EXISTS world_events (
        id TEXT PRIMARY KEY,
        event_type TEXT NOT NULL,
        boss_id TEXT,
        status TEXT DEFAULT 'pending',
        spawn_at INTEGER,
        started_at INTEGER,
        ended_at INTEGER,
        participants TEXT DEFAULT '[]',
        loot_distributed INTEGER DEFAULT 0
      );
      CREATE INDEX IF NOT EXISTS idx_world_events_status ON world_events(status);

      CREATE TABLE IF NOT EXISTS world_event_damage (
        event_id TEXT NOT NULL,
        character_id TEXT NOT NULL,
        damage INTEGER DEFAULT 0,
        PRIMARY KEY (event_id, character_id)
      );
      CREATE INDEX IF NOT EXISTS idx_world_event_damage_event ON world_event_damage(event_id);
    `);
  }

  /** 設定全域廣播函式 */
  setBroadcast(fn: (message: string) => void): void {
    this.broadcastFn = fn;
  }

  // ──────────────────────────────────────────────────────────
  //  排程
  // ──────────────────────────────────────────────────────────

  init(): void {
    this.ensureTables();
    this.scheduleNextEvent();
  }

  shutdown(): void {
    if (this.scheduleTimer) {
      clearTimeout(this.scheduleTimer);
      this.scheduleTimer = null;
    }
  }

  /** 排程下一次世界事件 */
  scheduleNextEvent(): void {
    if (this.scheduleTimer) clearTimeout(this.scheduleTimer);

    // 找到上一個事件的結束時間，推算下一次
    const db = getDb();
    const lastEvent = db.prepare(
      `SELECT * FROM world_events ORDER BY spawn_at DESC LIMIT 1`
    ).get() as any;

    let nextSpawn: number;
    let nextBossIdx: number;

    if (lastEvent) {
      const lastBossIdx = BOSS_ROTATION.indexOf(lastEvent.boss_id);
      nextBossIdx = (lastBossIdx + 1) % BOSS_ROTATION.length;
      const lastSpawn = lastEvent.spawn_at * 1000;
      nextSpawn = lastSpawn + EVENT_INTERVAL_MS;
    } else {
      nextBossIdx = 0;
      nextSpawn = Date.now() + EVENT_INTERVAL_MS;
    }

    const delay = Math.max(0, nextSpawn - Date.now());
    const bossId = BOSS_ROTATION[nextBossIdx];

    this.scheduleTimer = setTimeout(() => {
      this.spawnWorldBoss(bossId);
    }, delay);

    const nextTime = new Date(nextSpawn).toLocaleTimeString('zh-TW');
    console.log(`[WorldEvent] 下一個世界 BOSS「${WORLD_BOSS_DEFS[bossId].name}」將在 ${nextTime} 刷新`);
  }

  // ──────────────────────────────────────────────────────────
  //  刷新世界 BOSS
  // ──────────────────────────────────────────────────────────

  spawnWorldBoss(bossId: string): WorldEvent | null {
    const def = WORLD_BOSS_DEFS[bossId];
    if (!def) return null;

    const db = getDb();
    const id = randomUUID();
    const now = Math.floor(Date.now() / 1000);

    const event: WorldEvent = {
      id,
      eventType: 'world_boss',
      bossId: bossId,
      status: 'active',
      spawnAt: now,
      startedAt: now,
      endedAt: null,
      participants: [],
      lootDistributed: false,
    };

    db.prepare(`
      INSERT INTO world_events (id, event_type, boss_id, status, spawn_at, started_at, ended_at, participants, loot_distributed)
      VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)
    `).run(id, event.eventType, bossId, 'active', now, now, null, '[]', 0);

    // 初始化 BOSS HP
    this.currentBossHp.set(id, def.hp);

    // 全域公告
    if (this.broadcastFn) {
      this.broadcastFn(
        `【世界事件】Lv${def.level} ${def.name}出現在了${def.spawnRoom}！所有冒險者快前往討伐！`
      );
    }

    console.log(`[WorldEvent] 世界 BOSS「${def.name}」已刷新在 ${def.spawnRoom}`);

    // 排程下一次
    this.scheduleNextEvent();

    return event;
  }

  // ──────────────────────────────────────────────────────────
  //  參與事件
  // ──────────────────────────────────────────────────────────

  joinEvent(characterId: string, eventId: string): { ok: boolean; message: string } {
    const db = getDb();
    const event = this.getEventById(eventId);
    if (!event) return { ok: false, message: '找不到該世界事件。' };
    if (event.status !== 'active') return { ok: false, message: '該事件已結束。' };

    if (event.participants.includes(characterId)) {
      return { ok: false, message: '你已經在參與此事件。' };
    }

    const newParticipants = [...event.participants, characterId];
    db.prepare(`UPDATE world_events SET participants = ? WHERE id = ?`).run(JSON.stringify(newParticipants), eventId);

    // 初始化傷害紀錄
    db.prepare(`
      INSERT OR IGNORE INTO world_event_damage (event_id, character_id, damage) VALUES (?, ?, 0)
    `).run(eventId, characterId);

    const def = event.bossId ? WORLD_BOSS_DEFS[event.bossId] : null;
    return { ok: true, message: `你加入了討伐${def?.name ?? '世界BOSS'}的行列！（目前 ${newParticipants.length} 名參與者）` };
  }

  // ──────────────────────────────────────────────────────────
  //  傷害紀錄
  // ──────────────────────────────────────────────────────────

  recordDamage(characterId: string, eventId: string, damage: number): void {
    const db = getDb();
    db.prepare(`
      INSERT INTO world_event_damage (event_id, character_id, damage)
      VALUES (?, ?, ?)
      ON CONFLICT (event_id, character_id) DO UPDATE SET damage = damage + ?
    `).run(eventId, characterId, damage, damage);
  }

  // ──────────────────────────────────────────────────────────
  //  對 BOSS 造成傷害（含 HP 追蹤和擊殺判定）
  // ──────────────────────────────────────────────────────────

  dealDamage(characterId: string, eventId: string, damage: number): { killed: boolean; remainingHp: number; message: string } {
    const event = this.getEventById(eventId);
    if (!event || event.status !== 'active') {
      return { killed: false, remainingHp: 0, message: '該事件已結束。' };
    }

    // 自動加入參與者
    if (!event.participants.includes(characterId)) {
      this.joinEvent(characterId, eventId);
    }

    // 記錄傷害
    this.recordDamage(characterId, eventId, damage);

    // 扣 HP
    const currentHp = this.currentBossHp.get(eventId) ?? 0;
    const newHp = Math.max(0, currentHp - damage);
    this.currentBossHp.set(eventId, newHp);

    const def = event.bossId ? WORLD_BOSS_DEFS[event.bossId] : null;
    const bossName = def?.name ?? '世界BOSS';

    if (newHp <= 0) {
      // BOSS 被擊殺！
      const result = this.completeEvent(eventId);
      // 發放獎勵
      if (def) {
        this.distributeRewards(eventId, def, result.rankings);
      }
      this.currentBossHp.delete(eventId);
      return { killed: true, remainingHp: 0, message: `${bossName}被擊敗了！` };
    }

    const hpPercent = Math.floor((newHp / (def?.hp ?? 1)) * 100);
    return { killed: false, remainingHp: newHp, message: `對${bossName}造成了 ${damage} 傷害！剩餘 HP：${hpPercent}%` };
  }

  /** 根據傷害排名發放獎勵 */
  private distributeRewards(eventId: string, def: WorldBossDef, rankings: EventParticipant[]): void {
    if (rankings.length === 0) return;

    const totalDamage = rankings.reduce((sum, r) => sum + r.damage, 0);

    for (let i = 0; i < rankings.length; i++) {
      const r = rankings[i];
      const damageRatio = totalDamage > 0 ? r.damage / totalDamage : 1 / rankings.length;

      // 金幣按傷害比例分配
      const gold = Math.floor(def.bonusGold * damageRatio);
      // 經驗按傷害比例分配（前 3 名有額外加成）
      let expMultiplier = 1;
      if (i === 0) expMultiplier = 1.5; // MVP
      else if (i === 1) expMultiplier = 1.3;
      else if (i === 2) expMultiplier = 1.1;
      const exp = Math.floor(def.bonusExp * damageRatio * expMultiplier);

      try {
        const char = getCharacterById(r.characterId);
        if (char) {
          char.gold += gold;
          char.exp += exp;
          saveCharacter(char);
        }
      } catch { /* ignore */ }

      // 掉落物品（每人都有機會，MVP 額外保底一件）
      for (const drop of def.drops) {
        const chance = i === 0 ? Math.min(1, drop.chance * 2) : drop.chance;
        if (Math.random() < chance) {
          const qty = drop.minQty + Math.floor(Math.random() * (drop.maxQty - drop.minQty + 1));
          try {
            addInventoryItem(r.characterId, drop.itemId, qty);
          } catch { /* ignore */ }
        }
      }
    }
  }

  /** 取得當前 BOSS 剩餘 HP */
  getBossRemainingHp(eventId: string): number {
    return this.currentBossHp.get(eventId) ?? 0;
  }

  // ──────────────────────────────────────────────────────────
  //  完成事件
  // ──────────────────────────────────────────────────────────

  completeEvent(eventId: string): { ok: boolean; rankings: EventParticipant[]; message: string } {
    const db = getDb();
    const event = this.getEventById(eventId);
    if (!event) return { ok: false, rankings: [], message: '找不到該世界事件。' };
    if (event.status !== 'active') return { ok: false, rankings: [], message: '事件已結束。' };

    const now = Math.floor(Date.now() / 1000);
    db.prepare(`UPDATE world_events SET status = 'completed', ended_at = ?, loot_distributed = 1 WHERE id = ?`).run(now, eventId);

    // 取得傷害排行
    const rankings = db.prepare(
      `SELECT character_id, damage FROM world_event_damage WHERE event_id = ? ORDER BY damage DESC`
    ).all(eventId) as { character_id: string; damage: number }[];

    const result: EventParticipant[] = rankings.map(r => ({
      characterId: r.character_id,
      damage: r.damage,
    }));

    const def = event.bossId ? WORLD_BOSS_DEFS[event.bossId] : null;
    if (this.broadcastFn && def) {
      const topPlayer = result[0]?.characterId ?? '未知';
      this.broadcastFn(
        `【世界事件】${def.name}已被討伐！共 ${result.length} 名冒險者參與，最高傷害者：${topPlayer}`
      );
    }

    return { ok: true, rankings: result, message: `世界BOSS已被擊敗！共 ${result.length} 名參與者。` };
  }

  // ──────────────────────────────────────────────────────────
  //  查詢
  // ──────────────────────────────────────────────────────────

  getEventById(eventId: string): WorldEvent | null {
    const db = getDb();
    const row = db.prepare(`SELECT * FROM world_events WHERE id = ?`).get(eventId) as any;
    return row ? this.rowToEvent(row) : null;
  }

  getCurrentEvent(): WorldEvent | null {
    const db = getDb();
    const row = db.prepare(
      `SELECT * FROM world_events WHERE status = 'active' ORDER BY spawn_at DESC LIMIT 1`
    ).get() as any;
    return row ? this.rowToEvent(row) : null;
  }

  getNextEvent(): { bossId: string; spawnAt: number } | null {
    const db = getDb();
    const row = db.prepare(
      `SELECT * FROM world_events WHERE status = 'pending' ORDER BY spawn_at ASC LIMIT 1`
    ).get() as any;
    if (row) {
      return { bossId: row.boss_id, spawnAt: row.spawn_at };
    }
    return null;
  }

  getEventInfo(eventId: string): {
    event: WorldEvent;
    boss: WorldBossDef | null;
    rankings: EventParticipant[];
  } | null {
    const event = this.getEventById(eventId);
    if (!event) return null;

    const boss = event.bossId ? WORLD_BOSS_DEFS[event.bossId] ?? null : null;

    const db = getDb();
    const rankings = db.prepare(
      `SELECT character_id, damage FROM world_event_damage WHERE event_id = ? ORDER BY damage DESC`
    ).all(eventId) as { character_id: string; damage: number }[];

    return {
      event,
      boss,
      rankings: rankings.map(r => ({ characterId: r.character_id, damage: r.damage })),
    };
  }

  getEventDamageRanking(eventId: string): EventParticipant[] {
    const db = getDb();
    const rows = db.prepare(
      `SELECT character_id, damage FROM world_event_damage WHERE event_id = ? ORDER BY damage DESC`
    ).all(eventId) as { character_id: string; damage: number }[];
    return rows.map(r => ({ characterId: r.character_id, damage: r.damage }));
  }

  /**
   * 根據參與人數調整 BOSS 血量
   */
  getScaledBossHp(bossId: string, participantCount: number): number {
    const def = WORLD_BOSS_DEFS[bossId];
    if (!def) return 0;
    // 每增加 1 名參與者，HP 增加 20%
    const scale = 1 + Math.max(0, participantCount - 1) * 0.2;
    return Math.floor(def.hp * scale);
  }

  // ──────────────────────────────────────────────────────────
  //  內部輔助
  // ──────────────────────────────────────────────────────────

  private rowToEvent(row: any): WorldEvent {
    let participants: string[] = [];
    try {
      participants = JSON.parse(row.participants || '[]');
    } catch { /* ignore */ }

    return {
      id: row.id,
      eventType: row.event_type,
      bossId: row.boss_id,
      status: row.status as WorldEventStatus,
      spawnAt: row.spawn_at,
      startedAt: row.started_at,
      endedAt: row.ended_at,
      participants,
      lootDistributed: row.loot_distributed === 1,
    };
  }
}
