// 成就/稱號系統 — AchievementManager
// 50 個成就，分為 5 大類別：戰鬥、探索、社交、收集、製作

import { getDb } from '../db/schema.js';

// ============================================================
//  型別定義
// ============================================================

export type AchievementCategory = 'combat' | 'exploration' | 'social' | 'collection' | 'crafting';

export interface AchievementDef {
  id: string;
  name: string;         // 中文成就名
  category: AchievementCategory;
  description: string;  // 達成條件描述
  title: string;        // 解鎖的稱號
  requiredProgress: number;
}

export interface AchievementProgress {
  achievementId: string;
  progress: number;
  completedAt: number | null;
}

// ============================================================
//  成就定義 (50 個)
// ============================================================

export const ACHIEVEMENT_DEFS: Record<string, AchievementDef> = {
  // ─── 戰鬥 (10) ─────────────────────────────────────────────
  first_blood: {
    id: 'first_blood', name: '初次見血', category: 'combat',
    description: '擊殺 1 隻怪物', title: '新手戰士', requiredProgress: 1,
  },
  monster_slayer: {
    id: 'monster_slayer', name: '怪物殺手', category: 'combat',
    description: '擊殺 100 隻怪物', title: '百獸殺手', requiredProgress: 100,
  },
  elite_hunter: {
    id: 'elite_hunter', name: '菁英獵人', category: 'combat',
    description: '擊殺 5 隻菁英怪物', title: '菁英獵手', requiredProgress: 5,
  },
  boss_killer: {
    id: 'boss_killer', name: 'BOSS殺手', category: 'combat',
    description: '擊殺 10 隻 BOSS', title: 'BOSS終結者', requiredProgress: 10,
  },
  pvp_victor: {
    id: 'pvp_victor', name: 'PvP勝利者', category: 'combat',
    description: '贏得 10 場 PvP', title: '鬥技場勇者', requiredProgress: 10,
  },
  combo_master: {
    id: 'combo_master', name: '連擊大師', category: 'combat',
    description: '在一場戰鬥中打出 5 次暴擊', title: '暴擊之王', requiredProgress: 5,
  },
  untouchable: {
    id: 'untouchable', name: '不可觸碰', category: 'combat',
    description: '無傷贏得一場戰鬥', title: '無傷勝利', requiredProgress: 1,
  },
  demon_slayer: {
    id: 'demon_slayer', name: '魔族剋星', category: 'combat',
    description: '擊殺 50 隻魔族怪物', title: '魔族剋星', requiredProgress: 50,
  },
  dragon_slayer: {
    id: 'dragon_slayer', name: '屠龍者', category: 'combat',
    description: '擊殺古龍 elder_dragon', title: '屠龍英雄', requiredProgress: 1,
  },
  god_challenger: {
    id: 'god_challenger', name: '挑戰神明', category: 'combat',
    description: '擊敗戰神 god_of_war', title: '弒神者', requiredProgress: 1,
  },

  // ─── 探索 (10) ─────────────────────────────────────────────
  first_steps: {
    id: 'first_steps', name: '初次冒險', category: 'exploration',
    description: '拜訪 5 個房間', title: '新手冒險者', requiredProgress: 5,
  },
  world_traveler: {
    id: 'world_traveler', name: '世界旅行者', category: 'exploration',
    description: '拜訪 50 個房間', title: '環遊世界', requiredProgress: 50,
  },
  deep_explorer: {
    id: 'deep_explorer', name: '深層探索者', category: 'exploration',
    description: '拜訪所有地牢房間', title: '地下探險家', requiredProgress: 1,
  },
  zone_master: {
    id: 'zone_master', name: '區域征服者', category: 'exploration',
    description: '拜訪一個區域的所有房間', title: '區域征服者', requiredProgress: 1,
  },
  cartographer: {
    id: 'cartographer', name: '製圖師', category: 'exploration',
    description: '拜訪 100 個房間', title: '大陸製圖師', requiredProgress: 100,
  },
  dungeon_crawler: {
    id: 'dungeon_crawler', name: '地牢探索者', category: 'exploration',
    description: '完成 5 個地牢', title: '地牢之王', requiredProgress: 5,
  },
  treasure_hunter: {
    id: 'treasure_hunter', name: '寶藏獵人', category: 'exploration',
    description: '開啟 10 個寶箱', title: '寶藏獵人', requiredProgress: 10,
  },
  secret_finder: {
    id: 'secret_finder', name: '秘密發現者', category: 'exploration',
    description: '發現 5 個守護靈提示', title: '秘密探尋者', requiredProgress: 5,
  },
  mountain_climber: {
    id: 'mountain_climber', name: '登峰者', category: 'exploration',
    description: '到達 volcano_summit', title: '征服高峰', requiredProgress: 1,
  },
  abyss_walker: {
    id: 'abyss_walker', name: '深淵行者', category: 'exploration',
    description: '到達 abyss_core', title: '深淵行者', requiredProgress: 1,
  },

  // ─── 社交 (10) ─────────────────────────────────────────────
  first_friend: {
    id: 'first_friend', name: '初次交友', category: 'social',
    description: '加入一個隊伍', title: '社交新手', requiredProgress: 1,
  },
  guild_member: {
    id: 'guild_member', name: '公會成員', category: 'social',
    description: '加入一個王國', title: '公會一員', requiredProgress: 1,
  },
  kingdom_founder: {
    id: 'kingdom_founder', name: '建國者', category: 'social',
    description: '創建一個王國', title: '開國之王', requiredProgress: 1,
  },
  diplomat: {
    id: 'diplomat', name: '外交家', category: 'social',
    description: '與其他王國締結聯盟', title: '和平使者', requiredProgress: 1,
  },
  generous: {
    id: 'generous', name: '慷慨之人', category: 'social',
    description: '向國庫捐獻 10000 金幣', title: '慷慨捐獻者', requiredProgress: 10000,
  },
  trader: {
    id: 'trader', name: '交易達人', category: 'social',
    description: '完成 20 次交易', title: '商業大亨', requiredProgress: 20,
  },
  chat_master: {
    id: 'chat_master', name: '聊天達人', category: 'social',
    description: '發送 100 條聊天訊息', title: '社交達人', requiredProgress: 100,
  },
  helper: {
    id: 'helper', name: '助人為樂', category: 'social',
    description: '治療其他玩家 50 次', title: '守護天使', requiredProgress: 50,
  },
  mentor: {
    id: 'mentor', name: '導師', category: 'social',
    description: '協助 5 名玩家完成任務', title: '新手導師', requiredProgress: 5,
  },
  war_leader: {
    id: 'war_leader', name: '戰爭領袖', category: 'social',
    description: '贏得一場王國戰爭', title: '征服者', requiredProgress: 1,
  },

  // ─── 收集 (10) ─────────────────────────────────────────────
  collector: {
    id: 'collector', name: '收藏家', category: 'collection',
    description: '收集 20 種不同物品', title: '收藏愛好者', requiredProgress: 20,
  },
  weapon_master: {
    id: 'weapon_master', name: '武器大師', category: 'collection',
    description: '擁有 10 種不同武器', title: '武器收藏家', requiredProgress: 10,
  },
  set_collector: {
    id: 'set_collector', name: '套裝收集者', category: 'collection',
    description: '完成 1 套裝備套裝', title: '套裝達人', requiredProgress: 1,
  },
  rare_finder: {
    id: 'rare_finder', name: '稀有發現者', category: 'collection',
    description: '找到 5 個稀有以上物品', title: '鑑寶師', requiredProgress: 5,
  },
  fish_collector: {
    id: 'fish_collector', name: '魚類收藏家', category: 'collection',
    description: '捕獲 10 種不同魚類', title: '釣魚愛好者', requiredProgress: 10,
  },
  material_hoarder: {
    id: 'material_hoarder', name: '材料囤積者', category: 'collection',
    description: '收集 100 份材料', title: '材料大師', requiredProgress: 100,
  },
  potion_brewer: {
    id: 'potion_brewer', name: '藥水專家', category: 'collection',
    description: '同時持有 20 瓶藥水', title: '煉金術士', requiredProgress: 20,
  },
  gold_millionaire: {
    id: 'gold_millionaire', name: '百萬富翁', category: 'collection',
    description: '累計擁有 1000000 金幣', title: '百萬富翁', requiredProgress: 1000000,
  },
  unique_collector: {
    id: 'unique_collector', name: '獨特收藏', category: 'collection',
    description: '收集 5 把傳說武器', title: '傳說收藏家', requiredProgress: 5,
  },
  complete_set: {
    id: 'complete_set', name: '全套收集', category: 'collection',
    description: '完成全部 4 套裝備套裝', title: '裝備之神', requiredProgress: 4,
  },

  // ─── 製作 (10) ─────────────────────────────────────────────
  first_craft: {
    id: 'first_craft', name: '首次製作', category: 'crafting',
    description: '製作 1 件物品', title: '工匠學徒', requiredProgress: 1,
  },
  blacksmith: {
    id: 'blacksmith', name: '鍛造師', category: 'crafting',
    description: '鍛造等級達到 10', title: '熟練鍛造師', requiredProgress: 10,
  },
  alchemist: {
    id: 'alchemist', name: '煉金師', category: 'crafting',
    description: '煉金等級達到 10', title: '熟練煉金師', requiredProgress: 10,
  },
  chef: {
    id: 'chef', name: '料理師', category: 'crafting',
    description: '烹飪等級達到 10', title: '熟練料理師', requiredProgress: 10,
  },
  master_smith: {
    id: 'master_smith', name: '大師鍛造', category: 'crafting',
    description: '鍛造等級達到 30', title: '鍛造大師', requiredProgress: 30,
  },
  master_alchemist: {
    id: 'master_alchemist', name: '大師煉金', category: 'crafting',
    description: '煉金等級達到 30', title: '煉金大師', requiredProgress: 30,
  },
  master_chef: {
    id: 'master_chef', name: '大師料理', category: 'crafting',
    description: '烹飪等級達到 30', title: '料理大師', requiredProgress: 30,
  },
  enchanter: {
    id: 'enchanter', name: '附魔師', category: 'crafting',
    description: '將裝備強化至 +10', title: '附魔大師', requiredProgress: 10,
  },
  legendary_enchanter: {
    id: 'legendary_enchanter', name: '傳說附魔', category: 'crafting',
    description: '將裝備強化至 +15', title: '傳說附魔師', requiredProgress: 15,
  },
  craft_everything: {
    id: 'craft_everything', name: '全能工匠', category: 'crafting',
    description: '三種製作類別均達到 20 級', title: '萬能工匠', requiredProgress: 3,
  },
};

// ============================================================
//  AchievementManager
// ============================================================

export class AchievementManager {

  // ──────────────────────────────────────────────────────────
  //  DB 確保
  // ──────────────────────────────────────────────────────────

  ensureTables(): void {
    const db = getDb();
    db.exec(`
      CREATE TABLE IF NOT EXISTS achievements (
        character_id TEXT NOT NULL,
        achievement_id TEXT NOT NULL,
        progress INTEGER DEFAULT 0,
        completed_at INTEGER,
        PRIMARY KEY (character_id, achievement_id)
      );
      CREATE INDEX IF NOT EXISTS idx_achievements_character ON achievements(character_id);
    `);

    // 確保 characters 表有 equipped_title 欄位
    const cols = db.prepare("PRAGMA table_info(characters)").all() as { name: string }[];
    const colNames = new Set(cols.map(c => c.name));
    if (!colNames.has('equipped_title')) {
      db.exec(`ALTER TABLE characters ADD COLUMN equipped_title TEXT`);
      console.log('[Achievement] Migration: 已新增 equipped_title 欄位');
    }
  }

  // ──────────────────────────────────────────────────────────
  //  核心方法
  // ──────────────────────────────────────────────────────────

  /**
   * 檢查並更新成就進度，達標則自動完成
   * @param characterId 角色 ID
   * @param achievementId 成就 ID
   * @param increment 增量（預設 1）
   * @returns 如果剛完成回傳成就定義，否則 null
   */
  checkAndUnlock(characterId: string, achievementId: string, increment = 1): AchievementDef | null {
    const def = ACHIEVEMENT_DEFS[achievementId];
    if (!def) return null;

    const db = getDb();

    // upsert progress
    const existing = db.prepare(
      `SELECT progress, completed_at FROM achievements WHERE character_id = ? AND achievement_id = ?`
    ).get(characterId, achievementId) as { progress: number; completed_at: number | null } | undefined;

    if (existing?.completed_at) return null; // 已完成

    const currentProgress = existing?.progress ?? 0;
    const newProgress = currentProgress + increment;

    const isComplete = newProgress >= def.requiredProgress;
    const completedAt = isComplete ? Math.floor(Date.now() / 1000) : null;

    db.prepare(`
      INSERT INTO achievements (character_id, achievement_id, progress, completed_at)
      VALUES (?, ?, ?, ?)
      ON CONFLICT (character_id, achievement_id) DO UPDATE SET
        progress = ?,
        completed_at = COALESCE(achievements.completed_at, ?)
    `).run(characterId, achievementId, newProgress, completedAt, newProgress, completedAt);

    return isComplete ? def : null;
  }

  /**
   * 直接設定成就進度（用於非增量型成就）
   */
  setProgress(characterId: string, achievementId: string, progress: number): AchievementDef | null {
    const def = ACHIEVEMENT_DEFS[achievementId];
    if (!def) return null;

    const db = getDb();
    const existing = db.prepare(
      `SELECT completed_at FROM achievements WHERE character_id = ? AND achievement_id = ?`
    ).get(characterId, achievementId) as { completed_at: number | null } | undefined;

    if (existing?.completed_at) return null;

    const isComplete = progress >= def.requiredProgress;
    const completedAt = isComplete ? Math.floor(Date.now() / 1000) : null;

    db.prepare(`
      INSERT INTO achievements (character_id, achievement_id, progress, completed_at)
      VALUES (?, ?, ?, ?)
      ON CONFLICT (character_id, achievement_id) DO UPDATE SET
        progress = MAX(achievements.progress, ?),
        completed_at = COALESCE(achievements.completed_at, ?)
    `).run(characterId, achievementId, progress, completedAt, progress, completedAt);

    return isComplete ? def : null;
  }

  /**
   * 取得角色所有成就進度
   */
  getAchievements(characterId: string): (AchievementDef & AchievementProgress)[] {
    const db = getDb();
    const rows = db.prepare(
      `SELECT achievement_id, progress, completed_at FROM achievements WHERE character_id = ?`
    ).all(characterId) as { achievement_id: string; progress: number; completed_at: number | null }[];

    const progressMap = new Map<string, AchievementProgress>();
    for (const r of rows) {
      progressMap.set(r.achievement_id, {
        achievementId: r.achievement_id,
        progress: r.progress,
        completedAt: r.completed_at,
      });
    }

    return Object.values(ACHIEVEMENT_DEFS).map(def => {
      const p = progressMap.get(def.id);
      return {
        ...def,
        achievementId: def.id,
        progress: p?.progress ?? 0,
        completedAt: p?.completedAt ?? null,
      };
    });
  }

  /**
   * 取得已完成的成就
   */
  getCompletedAchievements(characterId: string): (AchievementDef & AchievementProgress)[] {
    return this.getAchievements(characterId).filter(a => a.completedAt !== null);
  }

  /**
   * 裝備稱號（必須已完成該成就）
   */
  equipTitle(characterId: string, achievementId: string): { ok: boolean; message: string } {
    const def = ACHIEVEMENT_DEFS[achievementId];
    if (!def) return { ok: false, message: '未知的成就 ID。' };

    const db = getDb();
    const row = db.prepare(
      `SELECT completed_at FROM achievements WHERE character_id = ? AND achievement_id = ?`
    ).get(characterId, achievementId) as { completed_at: number | null } | undefined;

    if (!row?.completed_at) {
      return { ok: false, message: '你尚未完成該成就，無法裝備此稱號。' };
    }

    db.prepare(`UPDATE characters SET equipped_title = ? WHERE id = ?`).run(achievementId, characterId);
    return { ok: true, message: `已裝備稱號「${def.title}」！` };
  }

  /**
   * 取得角色當前裝備的稱號
   */
  getEquippedTitle(characterId: string): string | null {
    const db = getDb();
    const row = db.prepare(`SELECT equipped_title FROM characters WHERE id = ?`).get(characterId) as { equipped_title: string | null } | undefined;
    const titleId = row?.equipped_title;
    if (!titleId) return null;
    return ACHIEVEMENT_DEFS[titleId]?.title ?? null;
  }

  /**
   * 取得角色裝備的稱號 ID
   */
  getEquippedTitleId(characterId: string): string | null {
    const db = getDb();
    const row = db.prepare(`SELECT equipped_title FROM characters WHERE id = ?`).get(characterId) as { equipped_title: string | null } | undefined;
    return row?.equipped_title ?? null;
  }

  // ──────────────────────────────────────────────────────────
  //  事件鉤子
  // ──────────────────────────────────────────────────────────

  /** 怪物被擊殺時呼叫 */
  onMonsterKill(characterId: string, monsterId: string, isBoss: boolean, isElite: boolean, element?: string): AchievementDef[] {
    const unlocked: AchievementDef[] = [];
    const push = (r: AchievementDef | null) => { if (r) unlocked.push(r); };

    push(this.checkAndUnlock(characterId, 'first_blood'));
    push(this.checkAndUnlock(characterId, 'monster_slayer'));

    if (isElite) push(this.checkAndUnlock(characterId, 'elite_hunter'));
    if (isBoss) push(this.checkAndUnlock(characterId, 'boss_killer'));

    // 魔族怪物
    const demonMonsters = [
      'demon_warrior', 'arch_demon', 'demon_guard', 'demon_mage',
      'demon_imp', 'shadow_demon',
    ];
    if (demonMonsters.includes(monsterId) || element === 'dark') {
      push(this.checkAndUnlock(characterId, 'demon_slayer'));
    }

    if (monsterId === 'elder_dragon') {
      push(this.checkAndUnlock(characterId, 'dragon_slayer'));
    }
    if (monsterId === 'god_of_war') {
      push(this.checkAndUnlock(characterId, 'god_challenger'));
    }

    return unlocked;
  }

  /** PvP 勝利時呼叫 */
  onPvpWin(characterId: string): AchievementDef | null {
    return this.checkAndUnlock(characterId, 'pvp_victor');
  }

  /** 暴擊追蹤（在戰鬥中呼叫） */
  onCriticalHit(characterId: string, critsInBattle: number): AchievementDef | null {
    return this.setProgress(characterId, 'combo_master', critsInBattle);
  }

  /** 無傷勝利時呼叫 */
  onFlawlessVictory(characterId: string): AchievementDef | null {
    return this.checkAndUnlock(characterId, 'untouchable');
  }

  /** 進入房間時呼叫 */
  onRoomVisit(characterId: string, roomId: string, totalVisitedCount: number): AchievementDef[] {
    const unlocked: AchievementDef[] = [];
    const push = (r: AchievementDef | null) => { if (r) unlocked.push(r); };

    push(this.setProgress(characterId, 'first_steps', totalVisitedCount));
    push(this.setProgress(characterId, 'world_traveler', totalVisitedCount));
    push(this.setProgress(characterId, 'cartographer', totalVisitedCount));

    if (roomId === 'volcano_summit') {
      push(this.checkAndUnlock(characterId, 'mountain_climber'));
    }
    if (roomId === 'abyss_core') {
      push(this.checkAndUnlock(characterId, 'abyss_walker'));
    }

    return unlocked;
  }

  /** 完成地牢時呼叫 */
  onDungeonComplete(characterId: string): AchievementDef | null {
    return this.checkAndUnlock(characterId, 'dungeon_crawler');
  }

  /** 開啟寶箱時呼叫 */
  onChestOpen(characterId: string): AchievementDef | null {
    return this.checkAndUnlock(characterId, 'treasure_hunter');
  }

  /** 發現守護靈提示時呼叫 */
  onGuardianHintDiscovered(characterId: string): AchievementDef | null {
    return this.checkAndUnlock(characterId, 'secret_finder');
  }

  /** 區域完全探索時呼叫 */
  onZoneFullyExplored(characterId: string): AchievementDef | null {
    return this.checkAndUnlock(characterId, 'zone_master');
  }

  /** 地牢全探索時呼叫 */
  onAllDungeonRoomsVisited(characterId: string): AchievementDef | null {
    return this.checkAndUnlock(characterId, 'deep_explorer');
  }

  /** 加入隊伍時呼叫 */
  onPartyJoin(characterId: string): AchievementDef | null {
    return this.checkAndUnlock(characterId, 'first_friend');
  }

  /** 加入王國時呼叫 */
  onKingdomJoin(characterId: string): AchievementDef | null {
    return this.checkAndUnlock(characterId, 'guild_member');
  }

  /** 創建王國時呼叫 */
  onKingdomCreate(characterId: string): AchievementDef | null {
    return this.checkAndUnlock(characterId, 'kingdom_founder');
  }

  /** 締結聯盟時呼叫 */
  onAllianceFormed(characterId: string): AchievementDef | null {
    return this.checkAndUnlock(characterId, 'diplomat');
  }

  /** 捐獻國庫時呼叫 */
  onTreasuryDonate(characterId: string, amount: number): AchievementDef | null {
    return this.checkAndUnlock(characterId, 'generous', amount);
  }

  /** 完成交易時呼叫 */
  onTradeComplete(characterId: string): AchievementDef | null {
    return this.checkAndUnlock(characterId, 'trader');
  }

  /** 聊天訊息時呼叫 */
  onChatMessage(characterId: string): AchievementDef | null {
    return this.checkAndUnlock(characterId, 'chat_master');
  }

  /** 治療其他玩家時呼叫 */
  onHealOther(characterId: string): AchievementDef | null {
    return this.checkAndUnlock(characterId, 'helper');
  }

  /** 協助完成任務時呼叫 */
  onMentorQuest(characterId: string): AchievementDef | null {
    return this.checkAndUnlock(characterId, 'mentor');
  }

  /** 贏得王國戰爭時呼叫 */
  onWarWin(characterId: string): AchievementDef | null {
    return this.checkAndUnlock(characterId, 'war_leader');
  }

  /** 收集物品更新時呼叫 */
  onCollectionUpdate(characterId: string, uniqueItemCount: number, weaponCount: number): AchievementDef[] {
    const unlocked: AchievementDef[] = [];
    const push = (r: AchievementDef | null) => { if (r) unlocked.push(r); };
    push(this.setProgress(characterId, 'collector', uniqueItemCount));
    push(this.setProgress(characterId, 'weapon_master', weaponCount));
    return unlocked;
  }

  /** 套裝完成時呼叫 */
  onSetComplete(characterId: string, completedSets: number): AchievementDef[] {
    const unlocked: AchievementDef[] = [];
    const push = (r: AchievementDef | null) => { if (r) unlocked.push(r); };
    push(this.setProgress(characterId, 'set_collector', completedSets));
    push(this.setProgress(characterId, 'complete_set', completedSets));
    return unlocked;
  }

  /** 稀有物品獲得時呼叫 */
  onRareItemFound(characterId: string): AchievementDef | null {
    return this.checkAndUnlock(characterId, 'rare_finder');
  }

  /** 魚類收集更新時呼叫 */
  onFishCollectionUpdate(characterId: string, fishCount: number): AchievementDef | null {
    return this.setProgress(characterId, 'fish_collector', fishCount);
  }

  /** 材料收集更新時呼叫 */
  onMaterialCollect(characterId: string, totalMaterials: number): AchievementDef | null {
    return this.setProgress(characterId, 'material_hoarder', totalMaterials);
  }

  /** 藥水持有量更新時呼叫 */
  onPotionCount(characterId: string, count: number): AchievementDef | null {
    return this.setProgress(characterId, 'potion_brewer', count);
  }

  /** 金幣更新時呼叫 */
  onGoldUpdate(characterId: string, gold: number): AchievementDef | null {
    return this.setProgress(characterId, 'gold_millionaire', gold);
  }

  /** 傳說武器收集時呼叫 */
  onUniqueWeaponCollect(characterId: string, count: number): AchievementDef | null {
    return this.setProgress(characterId, 'unique_collector', count);
  }

  /** 製作完成時呼叫 */
  onCraftComplete(characterId: string): AchievementDef | null {
    return this.checkAndUnlock(characterId, 'first_craft');
  }

  /** 製作等級更新時呼叫 */
  onCraftLevelUpdate(characterId: string, category: string, level: number): AchievementDef[] {
    const unlocked: AchievementDef[] = [];
    const push = (r: AchievementDef | null) => { if (r) unlocked.push(r); };

    if (category === 'forge') {
      push(this.setProgress(characterId, 'blacksmith', level));
      push(this.setProgress(characterId, 'master_smith', level));
    } else if (category === 'alchemy') {
      push(this.setProgress(characterId, 'alchemist', level));
      push(this.setProgress(characterId, 'master_alchemist', level));
    } else if (category === 'cooking') {
      push(this.setProgress(characterId, 'chef', level));
      push(this.setProgress(characterId, 'master_chef', level));
    }

    return unlocked;
  }

  /** 強化等級更新時呼叫 */
  onEnhancementLevel(characterId: string, enhancementLevel: number): AchievementDef[] {
    const unlocked: AchievementDef[] = [];
    const push = (r: AchievementDef | null) => { if (r) unlocked.push(r); };
    push(this.setProgress(characterId, 'enchanter', enhancementLevel));
    push(this.setProgress(characterId, 'legendary_enchanter', enhancementLevel));
    return unlocked;
  }

  /** 三類製作全達 20 時呼叫 */
  onCraftAllLevel20(characterId: string, categoriesAt20: number): AchievementDef | null {
    return this.setProgress(characterId, 'craft_everything', categoriesAt20);
  }
}
