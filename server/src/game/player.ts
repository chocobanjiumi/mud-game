// 玩家管理器 - 角色 CRUD、升級、屬性計算、技能學習

import type {
  Character, BaseStats, DerivedStats, ClassId, LearnedSkill,
  EquipmentSlots, SkillDef,
} from '@game/shared';
import { CLASS_DEFS } from '@game/shared';
import { randomUUID } from 'crypto';

// ============================================================
//  常數
// ============================================================

/** 計算升到等級 N 所需的累積經驗值 */
export function expRequiredForLevel(level: number): number {
  // 公式：level N requires N*100 + (N-1)*50
  return level * 100 + (level - 1) * 50;
}

/** 計算等級 N 到等級 N+1 的經驗需求差值 */
export function expToNextLevel(level: number): number {
  return expRequiredForLevel(level + 1) - expRequiredForLevel(level);
}

/** 初始基礎屬性 */
const DEFAULT_STATS: BaseStats = {
  str: 5,
  int: 5,
  dex: 5,
  vit: 5,
  luk: 5,
};

/** 初始裝備槽（全空） */
const EMPTY_EQUIPMENT: EquipmentSlots = {
  weapon: null,
  head: null,
  body: null,
  hands: null,
  feet: null,
  accessory: null,
};

// ============================================================
//  PlayerManager
// ============================================================

export class PlayerManager {
  /** playerId -> Character */
  private characters: Map<string, Character> = new Map();
  /** playerId -> LearnedSkill[] */
  private learnedSkills: Map<string, LearnedSkill[]> = new Map();

  // 未來接 DB 用的 callback
  private saveFn: ((character: Character) => Promise<void>) | null = null;
  private loadFn: ((id: string) => Promise<Character | null>) | null = null;

  /** 註冊持久化回呼 */
  setPersistence(opts: {
    save: (character: Character) => Promise<void>;
    load: (id: string) => Promise<Character | null>;
  }): void {
    this.saveFn = opts.save;
    this.loadFn = opts.load;
  }

  // ──────────────────────────────────────────────────────────
  //  角色 CRUD
  // ──────────────────────────────────────────────────────────

  /** 建立新角色 */
  createCharacter(name: string, userId: string, isAi = false, agentId?: string): Character {
    const id = randomUUID();
    const now = Date.now();

    const classDef = CLASS_DEFS['adventurer'];
    const character: Character = {
      id,
      userId,
      name,
      level: 1,
      exp: 0,
      classId: 'adventurer',
      hp: 100,
      mp: 30,
      maxHp: 100,
      maxMp: 30,
      resource: classDef.initialResource,
      maxResource: classDef.maxResource,
      resourceType: classDef.resourceType,
      stats: { ...DEFAULT_STATS },
      freePoints: 0,
      gold: 100,
      roomId: 'village_square',
      isAi,
      agentId,
      equipment: { ...EMPTY_EQUIPMENT },
      createdAt: now,
      lastLogin: now,
    };

    this.characters.set(id, character);
    this.learnedSkills.set(id, []);

    return character;
  }

  /** 載入角色（從快取或 DB） */
  async loadCharacter(id: string): Promise<Character | null> {
    // 快取命中
    const cached = this.characters.get(id);
    if (cached) return cached;

    // 從 DB 載入
    if (this.loadFn) {
      const char = await this.loadFn(id);
      if (char) {
        this.characters.set(id, char);
        return char;
      }
    }

    return null;
  }

  /** 取得角色（僅快取） */
  getCharacter(id: string): Character | undefined {
    return this.characters.get(id);
  }

  /** 存檔角色 */
  async saveCharacter(id: string): Promise<void> {
    const char = this.characters.get(id);
    if (!char) return;
    if (this.saveFn) {
      await this.saveFn(char);
    }
  }

  /** 存檔所有角色 */
  async saveAll(): Promise<void> {
    for (const id of this.characters.keys()) {
      await this.saveCharacter(id);
    }
  }

  /** 移除快取中的角色（離線用） */
  unloadCharacter(id: string): void {
    this.characters.delete(id);
    this.learnedSkills.delete(id);
  }

  // ──────────────────────────────────────────────────────────
  //  升級系統
  // ──────────────────────────────────────────────────────────

  /**
   * 增加經驗值並檢查升級
   * @returns 升級了幾次
   */
  addExp(characterId: string, amount: number): number {
    const char = this.characters.get(characterId);
    if (!char) return 0;

    char.exp += amount;
    let levelsGained = 0;

    while (char.exp >= expRequiredForLevel(char.level + 1)) {
      this.performLevelUp(char);
      levelsGained++;
    }

    return levelsGained;
  }

  /** 執行一次升級 */
  private performLevelUp(char: Character): void {
    char.level++;
    char.freePoints += 5;

    // HP 成長: +10 + VIT*2
    const hpGrowth = 10 + char.stats.vit * 2;
    char.maxHp += hpGrowth;
    char.hp = char.maxHp; // 升級時回滿

    // MP 成長: +5 + INT*1.5
    const mpGrowth = Math.floor(5 + char.stats.int * 1.5);
    char.maxMp += mpGrowth;
    char.mp = char.maxMp; // 升級時回滿
  }

  /** 取得距離下一級還需要多少經驗 */
  getExpToNext(characterId: string): number {
    const char = this.characters.get(characterId);
    if (!char) return 0;
    return expRequiredForLevel(char.level + 1) - char.exp;
  }

  // ──────────────────────────────────────────────────────────
  //  屬性分配
  // ──────────────────────────────────────────────────────────

  /**
   * 分配自由屬性點
   * @returns 是否成功
   */
  allocateStats(
    characterId: string,
    allocation: Partial<BaseStats>,
  ): { success: boolean; message: string } {
    const char = this.characters.get(characterId);
    if (!char) return { success: false, message: '角色不存在。' };

    const totalPoints =
      (allocation.str ?? 0) +
      (allocation.int ?? 0) +
      (allocation.dex ?? 0) +
      (allocation.vit ?? 0) +
      (allocation.luk ?? 0);

    if (totalPoints <= 0) {
      return { success: false, message: '請分配至少 1 點屬性。' };
    }
    if (totalPoints > char.freePoints) {
      return { success: false, message: `可用點數不足！剩餘 ${char.freePoints} 點，嘗試分配 ${totalPoints} 點。` };
    }

    // 不允許負數
    for (const v of Object.values(allocation)) {
      if (v !== undefined && v < 0) {
        return { success: false, message: '不能分配負數的屬性點。' };
      }
    }

    char.stats.str += allocation.str ?? 0;
    char.stats.int += allocation.int ?? 0;
    char.stats.dex += allocation.dex ?? 0;
    char.stats.vit += allocation.vit ?? 0;
    char.stats.luk += allocation.luk ?? 0;
    char.freePoints -= totalPoints;

    // 重新計算 HP/MP 上限（VIT/INT 改變了）
    this.recalculateMaxHpMp(char);

    return { success: true, message: `成功分配 ${totalPoints} 點屬性。剩餘 ${char.freePoints} 點。` };
  }

  /** 根據基礎屬性重新計算 HP/MP 上限 */
  private recalculateMaxHpMp(char: Character): void {
    // 基礎 HP/MP = 100/30 (Lv1)
    // 每級 HP += 10 + VIT*2, MP += 5 + INT*1.5
    // 為了簡化，用公式直接算
    const baseHp = 100;
    const baseMp = 30;
    let hp = baseHp;
    let mp = baseMp;

    for (let lv = 2; lv <= char.level; lv++) {
      hp += 10 + char.stats.vit * 2;
      mp += Math.floor(5 + char.stats.int * 1.5);
    }

    char.maxHp = hp;
    char.maxMp = mp;

    // 確保當前值不超過上限
    char.hp = Math.min(char.hp, char.maxHp);
    char.mp = Math.min(char.mp, char.maxMp);
  }

  // ──────────────────────────────────────────────────────────
  //  衍生屬性計算
  // ──────────────────────────────────────────────────────────

  /** 計算衍生戰鬥屬性（含裝備加成） */
  calculateDerivedStats(characterId: string): DerivedStats {
    const char = this.characters.get(characterId);
    if (!char) {
      return { atk: 0, matk: 0, def: 0, mdef: 0, hitRate: 0, dodgeRate: 0, critRate: 0, critDamage: 0 };
    }

    const s = char.stats;
    // TODO: 加上裝備屬性
    const weaponAtk = 0;
    const weaponMatk = 0;
    const armorDef = 0;
    const armorMdef = 0;

    const atk = s.str * 2 + weaponAtk;
    const matk = s.int * 2 + weaponMatk;
    const def = Math.floor(s.vit * 1.5) + armorDef;
    const mdef = Math.floor(s.int * 0.5 + s.vit * 0.5) + armorMdef;
    const critRate = s.dex * 0.3 + s.luk * 0.2;
    const critDamage = 150; // 基礎 150%
    const dodgeRate = s.dex * 0.4 + s.luk * 0.1;
    const hitRate = 95; // 基礎命中率

    return { atk, matk, def, mdef, hitRate, dodgeRate, critRate, critDamage };
  }

  // ──────────────────────────────────────────────────────────
  //  技能系統
  // ──────────────────────────────────────────────────────────

  /** 學習技能 */
  learnSkill(characterId: string, skillId: string): { success: boolean; message: string } {
    const char = this.characters.get(characterId);
    if (!char) return { success: false, message: '角色不存在。' };

    let skills = this.learnedSkills.get(characterId);
    if (!skills) {
      skills = [];
      this.learnedSkills.set(characterId, skills);
    }

    // 檢查是否已學
    if (skills.find(s => s.skillId === skillId)) {
      return { success: false, message: '已經學過這個技能了。' };
    }

    skills.push({
      skillId,
      level: 1,
      currentCooldown: 0,
    });

    return { success: true, message: `成功學會新技能！` };
  }

  /** 取得已學技能列表 */
  getLearnedSkills(characterId: string): LearnedSkill[] {
    return this.learnedSkills.get(characterId) ?? [];
  }

  /** 取得可用（冷卻完畢 + 資源足夠）的技能 */
  getAvailableSkills(characterId: string, allSkillDefs: Map<string, SkillDef>): SkillDef[] {
    const char = this.characters.get(characterId);
    if (!char) return [];

    const learned = this.learnedSkills.get(characterId) ?? [];
    const available: SkillDef[] = [];

    for (const ls of learned) {
      if (ls.currentCooldown > 0) continue;
      const def = allSkillDefs.get(ls.skillId);
      if (!def) continue;
      if (char.resource < def.resourceCost) continue;
      available.push(def);
    }

    return available;
  }

  /** 每回合減少冷卻 */
  tickCooldowns(characterId: string): void {
    const skills = this.learnedSkills.get(characterId);
    if (!skills) return;
    for (const s of skills) {
      if (s.currentCooldown > 0) {
        s.currentCooldown--;
      }
    }
  }

  /** 設定技能冷卻 */
  setSkillCooldown(characterId: string, skillId: string, cooldown: number): void {
    const skills = this.learnedSkills.get(characterId);
    if (!skills) return;
    const skill = skills.find(s => s.skillId === skillId);
    if (skill) {
      skill.currentCooldown = cooldown;
    }
  }

  // ──────────────────────────────────────────────────────────
  //  HP / MP 操作
  // ──────────────────────────────────────────────────────────

  /** 受傷 */
  takeDamage(characterId: string, amount: number): { isDead: boolean; remaining: number } {
    const char = this.characters.get(characterId);
    if (!char) return { isDead: true, remaining: 0 };

    char.hp = Math.max(0, char.hp - amount);
    return { isDead: char.hp <= 0, remaining: char.hp };
  }

  /** 治療 */
  heal(characterId: string, amount: number): number {
    const char = this.characters.get(characterId);
    if (!char) return 0;

    const before = char.hp;
    char.hp = Math.min(char.maxHp, char.hp + amount);
    return char.hp - before;
  }

  /** 消耗 MP */
  consumeMp(characterId: string, amount: number): boolean {
    const char = this.characters.get(characterId);
    if (!char) return false;
    if (char.mp < amount) return false;

    char.mp -= amount;
    return true;
  }

  /** 回復 MP */
  restoreMp(characterId: string, amount: number): number {
    const char = this.characters.get(characterId);
    if (!char) return 0;

    const before = char.mp;
    char.mp = Math.min(char.maxMp, char.mp + amount);
    return char.mp - before;
  }

  /** 完全回復（休息/升級） */
  fullRestore(characterId: string): void {
    const char = this.characters.get(characterId);
    if (!char) return;
    char.hp = char.maxHp;
    char.mp = char.maxMp;
    // 資源回復：怒氣歸零，其他回滿
    if (char.resourceType === 'rage') {
      char.resource = 0;
    } else {
      char.resource = char.maxResource;
    }
  }

  // ──────────────────────────────────────────────────────────
  //  金幣
  // ──────────────────────────────────────────────────────────

  /** 增加金幣 */
  addGold(characterId: string, amount: number): void {
    const char = this.characters.get(characterId);
    if (!char) return;
    char.gold += amount;
  }

  /** 消費金幣 */
  spendGold(characterId: string, amount: number): boolean {
    const char = this.characters.get(characterId);
    if (!char) return false;
    if (char.gold < amount) return false;
    char.gold -= amount;
    return true;
  }

  // ──────────────────────────────────────────────────────────
  //  死亡處理
  // ──────────────────────────────────────────────────────────

  /** 角色死亡 → 回到重生點、損失金幣 */
  handleDeath(characterId: string): {
    respawnRoom: string;
    goldLost: number;
  } {
    const char = this.characters.get(characterId);
    if (!char) return { respawnRoom: 'village_square', goldLost: 0 };

    const goldLost = Math.floor(char.gold * 0.1); // 損失 10% 金幣
    char.gold -= goldLost;
    char.hp = Math.floor(char.maxHp * 0.5); // 復活 50% HP
    char.mp = Math.floor(char.maxMp * 0.5); // 復活 50% MP
    // 資源重置：怒氣歸零，其他回到初始值
    const classDef = CLASS_DEFS[char.classId];
    char.resource = classDef ? classDef.initialResource : 0;
    char.roomId = 'village_square'; // 回到新手村廣場

    return {
      respawnRoom: 'village_square',
      goldLost,
    };
  }

  // ──────────────────────────────────────────────────────────
  //  統計
  // ──────────────────────────────────────────────────────────

  /** 取得所有線上角色數量 */
  getOnlineCount(): number {
    return this.characters.size;
  }

  /** 取得所有快取中的角色 */
  getAllCharacters(): Character[] {
    return Array.from(this.characters.values());
  }
}
