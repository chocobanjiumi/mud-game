// 釣魚系統 — FishingManager

import { getDb } from '../db/schema.js';
import { addInventoryItem } from '../db/queries.js';
import { ITEM_DEFS } from '@game/shared';
import { achievementMgr } from './state.js';

const FISHING_COOLDOWN_MS = 10_000; // 10 秒冷卻
const fishingCooldowns: Map<string, number> = new Map();

// ============================================================
//  可釣魚的房間清單
// ============================================================

const FISHING_ROOMS = new Set([
  // 新手村外圍
  'village_creek',
  // 翠綠平原
  'old_well',
  // 水晶洞窟
  'underground_river',
  // 東方海岸
  'tidal_zone', 'fishing_dock', 'coral_shallows', 'sandy_beach',
  // 冰封雪原
  'frozen_lake',
  // 魔族領地
  'blood_river',
]);

// ============================================================
//  魚類定義（按稀有度分級）
// ============================================================

interface FishDef {
  id: string;
  name: string;
  minLevel: number;
  maxLevel: number;
  rarity: 'common' | 'uncommon' | 'rare' | 'epic' | 'legendary';
  exp: number;
  value: number;
}

const FISH_TABLE: FishDef[] = [
  // Common (Lv 1-5)
  { id: 'small_fish', name: '小魚', minLevel: 1, maxLevel: 5, rarity: 'common', exp: 10, value: 10 },
  { id: 'river_carp', name: '河鯉', minLevel: 1, maxLevel: 5, rarity: 'common', exp: 12, value: 15 },
  { id: 'mud_loach', name: '泥鰍', minLevel: 1, maxLevel: 5, rarity: 'common', exp: 10, value: 12 },
  { id: 'freshwater_shrimp', name: '淡水蝦', minLevel: 1, maxLevel: 5, rarity: 'common', exp: 10, value: 8 },

  // Uncommon (Lv 5-10)
  { id: 'silver_trout', name: '銀鱒魚', minLevel: 5, maxLevel: 10, rarity: 'uncommon', exp: 18, value: 30 },
  { id: 'spotted_bass', name: '斑點鱸魚', minLevel: 5, maxLevel: 10, rarity: 'uncommon', exp: 20, value: 35 },
  { id: 'blue_catfish', name: '藍鯰魚', minLevel: 5, maxLevel: 10, rarity: 'uncommon', exp: 22, value: 40 },
  { id: 'golden_crab', name: '金色螃蟹', minLevel: 5, maxLevel: 10, rarity: 'uncommon', exp: 25, value: 45 },

  // Rare (Lv 10-18)
  { id: 'rainbow_fish', name: '彩虹魚', minLevel: 10, maxLevel: 18, rarity: 'rare', exp: 30, value: 80 },
  { id: 'crystal_shrimp', name: '水晶蝦', minLevel: 10, maxLevel: 18, rarity: 'rare', exp: 32, value: 100 },
  { id: 'dragon_koi', name: '龍錦鯉', minLevel: 10, maxLevel: 18, rarity: 'rare', exp: 35, value: 120 },
  { id: 'moonlight_eel', name: '月光鰻', minLevel: 10, maxLevel: 18, rarity: 'rare', exp: 38, value: 150 },

  // Epic (Lv 18-25)
  { id: 'abyssal_angler', name: '深淵鮟鱇', minLevel: 18, maxLevel: 25, rarity: 'epic', exp: 40, value: 300 },
  { id: 'phoenix_fish', name: '鳳凰魚', minLevel: 18, maxLevel: 25, rarity: 'epic', exp: 42, value: 400 },
  { id: 'frost_salmon', name: '霜之鮭魚', minLevel: 18, maxLevel: 25, rarity: 'epic', exp: 40, value: 350 },
  { id: 'thunder_ray', name: '雷鰩', minLevel: 18, maxLevel: 25, rarity: 'epic', exp: 42, value: 380 },

  // Legendary (Lv 25-30)
  { id: 'sea_dragon_fry', name: '海龍幼魚', minLevel: 25, maxLevel: 30, rarity: 'legendary', exp: 45, value: 800 },
  { id: 'celestial_jellyfish', name: '天界水母', minLevel: 25, maxLevel: 30, rarity: 'legendary', exp: 48, value: 1000 },
  { id: 'void_squid', name: '虛空烏賊', minLevel: 25, maxLevel: 30, rarity: 'legendary', exp: 50, value: 1200 },
  { id: 'world_serpent_scale', name: '世界蛇之鱗', minLevel: 25, maxLevel: 30, rarity: 'legendary', exp: 50, value: 2000 },
];

const RARITY_LABEL: Record<string, string> = {
  common: '普通', uncommon: '優良', rare: '稀有', epic: '史詩', legendary: '傳說',
};

// ============================================================
//  FishingManager
// ============================================================

export class FishingManager {

  /** 確保資料表存在 */
  init(): void {
    const db = getDb();
    db.exec(`
      CREATE TABLE IF NOT EXISTS fishing_levels (
        character_id TEXT PRIMARY KEY,
        level INTEGER DEFAULT 1,
        exp INTEGER DEFAULT 0,
        total_caught INTEGER DEFAULT 0
      );
    `);
  }

  /** 是否可以在此房間釣魚 */
  canFishHere(roomId: string): boolean {
    return FISHING_ROOMS.has(roomId);
  }

  /** 取得釣魚等級資訊 */
  getFishingLevel(characterId: string): { level: number; exp: number; expToNext: number; totalCaught: number } {
    const db = getDb();
    const row = db.prepare('SELECT * FROM fishing_levels WHERE character_id = ?').get(characterId) as {
      level: number; exp: number; total_caught: number;
    } | undefined;

    if (!row) {
      return { level: 1, exp: 0, expToNext: 50, totalCaught: 0 };
    }
    return {
      level: row.level,
      exp: row.exp,
      expToNext: row.level * 50,
      totalCaught: row.total_caught,
    };
  }

  /** 嘗試釣魚 */
  fish(characterId: string, roomId: string): { ok: boolean; message: string } {
    if (!this.canFishHere(roomId)) {
      return { ok: false, message: '這裡沒有水源，無法釣魚。' };
    }

    // 冷卻檢查
    const now = Date.now();
    const lastFish = fishingCooldowns.get(characterId) ?? 0;
    const remaining = FISHING_COOLDOWN_MS - (now - lastFish);
    if (remaining > 0) {
      return { ok: false, message: `魚竿還在冷卻中，請等待 ${Math.ceil(remaining / 1000)} 秒。` };
    }
    fishingCooldowns.set(characterId, now);

    const info = this.getFishingLevel(characterId);

    // Determine which fish can be caught at this level
    const catchable = FISH_TABLE.filter(f => info.level >= f.minLevel);
    if (catchable.length === 0) {
      return { ok: false, message: '你的釣魚等級太低了，釣不到任何東西。' };
    }

    // Weighted random selection — higher rarity = lower weight
    // Higher fishing level slightly increases chance for rarer fish
    const weights = catchable.map(f => {
      let base: number;
      switch (f.rarity) {
        case 'common':    base = 40; break;
        case 'uncommon':  base = 25; break;
        case 'rare':      base = 15; break;
        case 'epic':      base = 8;  break;
        case 'legendary': base = 3;  break;
        default:          base = 10;
      }
      // Bonus from being high level relative to fish level
      const levelBonus = Math.max(0, info.level - f.minLevel) * 0.5;
      return base + levelBonus;
    });

    const totalWeight = weights.reduce((a, b) => a + b, 0);
    let roll = Math.random() * totalWeight;
    let caught: FishDef = catchable[0];
    for (let i = 0; i < catchable.length; i++) {
      roll -= weights[i];
      if (roll <= 0) {
        caught = catchable[i];
        break;
      }
    }

    // Add fish to inventory
    addInventoryItem(characterId, caught.id, 1);

    // Update fishing level
    const db = getDb();
    const existing = db.prepare('SELECT * FROM fishing_levels WHERE character_id = ?').get(characterId) as {
      level: number; exp: number; total_caught: number;
    } | undefined;

    let newLevel = info.level;
    let newExp = info.exp + caught.exp;
    const newCaught = info.totalCaught + 1;
    let leveledUp = false;

    // Check level up
    while (newExp >= newLevel * 50 && newLevel < 30) {
      newExp -= newLevel * 50;
      newLevel++;
      leveledUp = true;
    }

    if (existing) {
      db.prepare(
        'UPDATE fishing_levels SET level = ?, exp = ?, total_caught = ? WHERE character_id = ?'
      ).run(newLevel, newExp, newCaught, characterId);
    } else {
      db.prepare(
        'INSERT INTO fishing_levels (character_id, level, exp, total_caught) VALUES (?, ?, ?, ?)'
      ).run(characterId, newLevel, newExp, newCaught);
    }

    // 成就 hook：魚類收藏家
    try {
      achievementMgr.checkAndUnlock(characterId, 'fish_collector', 1);
    } catch { /* ignore */ }

    // Build result message
    const rarityTag = RARITY_LABEL[caught.rarity] ?? caught.rarity;
    const lines = [
      `你甩出魚竿，耐心等待......`,
      ``,
      `釣到了！【${rarityTag}】${caught.name}！`,
      `  價值：${caught.value} 金幣 | 經驗 +${caught.exp}`,
    ];

    if (leveledUp) {
      lines.push(``, `🎉 釣魚等級提升！目前等級：${newLevel}`);
    }

    return { ok: true, message: lines.join('\n') };
  }

  /** 格式化釣魚等級資訊 */
  formatFishingLevel(characterId: string): string {
    const info = this.getFishingLevel(characterId);
    return [
      `═══ 釣魚資訊 ═══`,
      ``,
      `釣魚等級：${info.level}`,
      `經驗值：${info.exp} / ${info.expToNext}`,
      `累計捕獲：${info.totalCaught} 條`,
      ``,
      `目前可釣魚種：${FISH_TABLE.filter(f => info.level >= f.minLevel).length} / ${FISH_TABLE.length}`,
    ].join('\n');
  }
}
