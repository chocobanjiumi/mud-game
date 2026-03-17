// 寵物系統 — PetManager
// 10 種可馴服寵物，戰鬥輔助、餵食、幸福度系統

import { getDb } from '../db/schema.js';
import { randomUUID } from 'crypto';

// ============================================================
//  型別定義
// ============================================================

export interface PetDef {
  id: string;
  name: string;          // 中文名
  description: string;
  requiredLevel: number;
  baseHp: number;
  baseAtk: number;
  baseDef: number;
  type: 'atk' | 'magic' | 'fire' | 'flying' | 'tank' | 'stealth' | 'ice' | 'powerful' | 'void' | 'healer';
  tameZones: string[];   // 可馴服的區域 room IDs
}

export interface Pet {
  id: string;
  characterId: string;
  petType: string;
  name: string;
  level: number;
  exp: number;
  hp: number;
  maxHp: number;
  atk: number;
  def: number;
  happiness: number;
  isSummoned: boolean;
  createdAt: number;
}

// ============================================================
//  寵物定義 (10 種)
// ============================================================

export const PET_DEFS: Record<string, PetDef> = {
  baby_wolf: {
    id: 'baby_wolf', name: '幼狼', description: '忠誠的小狼崽，擅長物理攻擊。',
    requiredLevel: 1, baseHp: 50, baseAtk: 12, baseDef: 5,
    type: 'atk',
    tameZones: ['plains_entrance', 'grass_path', 'windmill_farm', 'crossroads', 'old_well'],
  },
  forest_sprite: {
    id: 'forest_sprite', name: '森林精靈', description: '散發綠光的小精靈，擅長魔法攻擊。',
    requiredLevel: 5, baseHp: 40, baseAtk: 15, baseDef: 4,
    type: 'magic',
    tameZones: ['forest_entrance', 'dense_trail', 'mushroom_swamp', 'ancient_treehouse', 'deep_forest'],
  },
  fire_imp: {
    id: 'fire_imp', name: '小火靈', description: '調皮的火焰小精靈，擅長火焰攻擊。',
    requiredLevel: 10, baseHp: 45, baseAtk: 18, baseDef: 3,
    type: 'fire',
    tameZones: ['volcano_base', 'lava_trail', 'sulfur_valley', 'volcano_crater', 'magma_river'],
  },
  crystal_bat: {
    id: 'crystal_bat', name: '水晶蝙蝠', description: '翅膀由水晶構成的蝙蝠，飛行敏捷。',
    requiredLevel: 12, baseHp: 35, baseAtk: 14, baseDef: 6,
    type: 'flying',
    tameZones: ['cave_entrance', 'luminous_tunnel', 'crystal_hall', 'underground_river', 'mine_depths'],
  },
  sea_turtle: {
    id: 'sea_turtle', name: '海龜', description: '防禦力極高的海洋生物，能承受大量傷害。',
    requiredLevel: 8, baseHp: 80, baseAtk: 8, baseDef: 15,
    type: 'tank',
    tameZones: ['coastal_boardwalk', 'sandy_beach', 'tidal_zone', 'coral_shallows'],
  },
  shadow_cat: {
    id: 'shadow_cat', name: '暗影貓', description: '來去無蹤的暗影生物，擅長偷襲。',
    requiredLevel: 15, baseHp: 40, baseAtk: 20, baseDef: 5,
    type: 'stealth',
    tameZones: ['dense_trail', 'deep_forest', 'elf_ruins'],
  },
  ice_fox: {
    id: 'ice_fox', name: '冰狐', description: '覆蓋冰霜的狐狸，擅長冰屬性攻擊。',
    requiredLevel: 18, baseHp: 50, baseAtk: 17, baseDef: 8,
    type: 'ice',
    tameZones: ['snowfield_entrance', 'blizzard_path', 'glacier', 'frozen_lake', 'aurora_field'],
  },
  baby_dragon: {
    id: 'baby_dragon', name: '幼龍', description: '強大的龍族幼崽，潛力無限。',
    requiredLevel: 25, baseHp: 70, baseAtk: 22, baseDef: 12,
    type: 'powerful',
    tameZones: ['dragon_valley_entrance', 'dragon_nest_path', 'wyvern_cliff', 'dragon_bone_field'],
  },
  void_wisp: {
    id: 'void_wisp', name: '虛空火花', description: '來自虛空的神秘火花，蘊含混沌之力。',
    requiredLevel: 30, baseHp: 35, baseAtk: 25, baseDef: 4,
    type: 'void',
    tameZones: ['abyss_entrance', 'void_corridor', 'shadow_realm', 'abyss_core'],
  },
  celestial_dove: {
    id: 'celestial_dove', name: '天界白鴿', description: '聖潔的天界生物，具有治療能力。',
    requiredLevel: 20, baseHp: 55, baseAtk: 10, baseDef: 10,
    type: 'healer',
    tameZones: ['celestial_gate', 'star_garden', 'moon_pool', 'sun_altar'],
  },
};

// ============================================================
//  PetManager
// ============================================================

export class PetManager {

  // ──────────────────────────────────────────────────────────
  //  DB 確保
  // ──────────────────────────────────────────────────────────

  ensureTables(): void {
    const db = getDb();
    db.exec(`
      CREATE TABLE IF NOT EXISTS pets (
        id TEXT PRIMARY KEY,
        character_id TEXT NOT NULL,
        pet_type TEXT NOT NULL,
        name TEXT,
        level INTEGER DEFAULT 1,
        exp INTEGER DEFAULT 0,
        hp INTEGER,
        max_hp INTEGER,
        atk INTEGER,
        def INTEGER,
        happiness INTEGER DEFAULT 50,
        is_summoned INTEGER DEFAULT 0,
        created_at INTEGER
      );
      CREATE INDEX IF NOT EXISTS idx_pets_character ON pets(character_id);
    `);
  }

  // ──────────────────────────────────────────────────────────
  //  馴服
  // ──────────────────────────────────────────────────────────

  /**
   * 嘗試馴服寵物
   * beast_master 職業專用；其他職業需使用寵物蛋
   */
  tamePet(characterId: string, petType: string, roomId: string, playerLevel: number, classId: string): { ok: boolean; message: string; pet?: Pet } {
    if (classId !== 'beast_master') {
      return { ok: false, message: '只有馴獸師（beast_master）可以馴服野生寵物！其他職業可使用寵物蛋。' };
    }

    const def = PET_DEFS[petType];
    if (!def) {
      return { ok: false, message: `未知的寵物類型：${petType}` };
    }

    if (playerLevel < def.requiredLevel) {
      return { ok: false, message: `你的等級不足，需要 Lv${def.requiredLevel} 以上才能馴服${def.name}。` };
    }

    if (!def.tameZones.includes(roomId)) {
      return { ok: false, message: `這裡沒有可馴服的${def.name}。` };
    }

    // 成功率：30% + (等級差 * 5%)，上限 80%
    const levelDiff = playerLevel - def.requiredLevel;
    const successRate = Math.min(80, 30 + levelDiff * 5);

    if (Math.random() * 100 >= successRate) {
      return { ok: false, message: `馴服${def.name}失敗了！（成功率 ${successRate}%）再試一次吧。` };
    }

    const pet = this.createPet(characterId, petType);
    return { ok: true, message: `成功馴服了${def.name}！（成功率 ${successRate}%）`, pet };
  }

  /**
   * 用寵物蛋獲得寵物（非 beast_master 職業）
   */
  usePetEgg(characterId: string, petType: string): { ok: boolean; message: string; pet?: Pet } {
    const def = PET_DEFS[petType];
    if (!def) {
      return { ok: false, message: `未知的寵物類型：${petType}` };
    }

    const pet = this.createPet(characterId, petType);
    return { ok: true, message: `寵物蛋孵化成功！獲得了${def.name}！`, pet };
  }

  private createPet(characterId: string, petType: string): Pet {
    const def = PET_DEFS[petType];
    const id = randomUUID();
    const now = Math.floor(Date.now() / 1000);

    const pet: Pet = {
      id,
      characterId,
      petType,
      name: def.name,
      level: 1,
      exp: 0,
      hp: def.baseHp,
      maxHp: def.baseHp,
      atk: def.baseAtk,
      def: def.baseDef,
      happiness: 50,
      isSummoned: false,
      createdAt: now,
    };

    const db = getDb();
    db.prepare(`
      INSERT INTO pets (id, character_id, pet_type, name, level, exp, hp, max_hp, atk, def, happiness, is_summoned, created_at)
      VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
    `).run(id, characterId, petType, pet.name, pet.level, pet.exp, pet.hp, pet.maxHp, pet.atk, pet.def, pet.happiness, 0, now);

    return pet;
  }

  // ──────────────────────────────────────────────────────────
  //  召喚 / 解散
  // ──────────────────────────────────────────────────────────

  summonPet(characterId: string, petId: string): { ok: boolean; message: string } {
    const db = getDb();

    // 先驗證再解散
    const pet = this.getPetById(petId);
    if (!pet || pet.characterId !== characterId) {
      return { ok: false, message: '找不到這隻寵物或它不屬於你。' };
    }

    if (pet.hp <= 0) {
      return { ok: false, message: `${pet.name}已經倒下了，請先餵食恢復。` };
    }

    // 驗證通過，解散當前已召喚的寵物再召喚新的
    db.prepare(`UPDATE pets SET is_summoned = 0 WHERE character_id = ? AND is_summoned = 1`).run(characterId);
    db.prepare(`UPDATE pets SET is_summoned = 1 WHERE id = ?`).run(petId);
    return { ok: true, message: `${pet.name}已被召喚！` };
  }

  dismissPet(characterId: string): { ok: boolean; message: string } {
    const db = getDb();
    const summoned = this.getSummonedPet(characterId);
    if (!summoned) {
      return { ok: false, message: '你目前沒有召喚任何寵物。' };
    }

    db.prepare(`UPDATE pets SET is_summoned = 0 WHERE id = ?`).run(summoned.id);
    return { ok: true, message: `${summoned.name}已被解散。` };
  }

  // ──────────────────────────────────────────────────────────
  //  餵食
  // ──────────────────────────────────────────────────────────

  feedPet(characterId: string, petId: string, itemId: string): { ok: boolean; message: string; happinessGain: number; hpGain: number } {
    const pet = this.getPetById(petId);
    if (!pet || pet.characterId !== characterId) {
      return { ok: false, message: '找不到這隻寵物。', happinessGain: 0, hpGain: 0 };
    }

    // 根據物品類型決定回復量
    let happinessGain = 10;
    let hpGain = 20;

    if (itemId.includes('potion')) {
      happinessGain = 5;
      hpGain = 30;
    } else if (itemId.includes('meat') || itemId.includes('fish')) {
      happinessGain = 15;
      hpGain = 15;
    } else if (itemId.includes('food') || itemId.includes('bread') || itemId.includes('cake')) {
      happinessGain = 20;
      hpGain = 10;
    }

    const db = getDb();
    const newHappiness = Math.min(100, pet.happiness + happinessGain);
    const newHp = Math.min(pet.maxHp, pet.hp + hpGain);

    db.prepare(`UPDATE pets SET happiness = ?, hp = ? WHERE id = ?`).run(newHappiness, newHp, petId);

    return {
      ok: true,
      message: `餵食了${pet.name}！幸福度 +${happinessGain}（${newHappiness}/100），HP +${hpGain}（${newHp}/${pet.maxHp}）`,
      happinessGain,
      hpGain,
    };
  }

  // ──────────────────────────────────────────────────────────
  //  寵物戰鬥
  // ──────────────────────────────────────────────────────────

  /**
   * 寵物在戰鬥中行動
   * @returns 寵物造成的傷害，或 0
   */
  petCombatAction(characterId: string, playerAtk: number): { damage: number; petDamage: number; message: string } {
    const pet = this.getSummonedPet(characterId);
    if (!pet || pet.hp <= 0) {
      return { damage: 0, petDamage: 0, message: '' };
    }

    // 幸福度影響效率：happiness / 100
    const happinessMultiplier = pet.happiness / 100;

    // 寵物造成 20-30% 玩家攻擊力的傷害
    const baseDmgPct = 0.2 + Math.random() * 0.1;
    const damage = Math.floor(playerAtk * baseDmgPct * happinessMultiplier);

    return {
      damage,
      petDamage: 0,
      message: `🐾 ${pet.name}發動攻擊，造成 ${damage} 點傷害！`,
    };
  }

  /**
   * 寵物受到傷害（玩家受傷的 10%）
   */
  petTakeDamage(characterId: string, playerDamageTaken: number): string {
    const pet = this.getSummonedPet(characterId);
    if (!pet || pet.hp <= 0) return '';

    const petDamage = Math.floor(playerDamageTaken * 0.1);
    if (petDamage <= 0) return '';

    const db = getDb();
    const newHp = Math.max(0, pet.hp - petDamage);
    db.prepare(`UPDATE pets SET hp = ? WHERE id = ?`).run(newHp, pet.id);

    if (newHp <= 0) {
      db.prepare(`UPDATE pets SET is_summoned = 0 WHERE id = ?`).run(pet.id);
      return `${pet.name}受到 ${petDamage} 點傷害，已經倒下了！`;
    }

    return `${pet.name}受到 ${petDamage} 點傷害（HP: ${newHp}/${pet.maxHp}）`;
  }

  /**
   * 寵物獲得經驗值（共享 20%）
   */
  grantPetExp(characterId: string, exp: number): string {
    const pet = this.getSummonedPet(characterId);
    if (!pet) return '';

    const petExp = Math.floor(exp * 0.2);
    if (petExp <= 0) return '';

    const db = getDb();
    const newExp = pet.exp + petExp;
    const expForLevel = this.getExpForPetLevel(pet.level);

    if (newExp >= expForLevel) {
      const leftover = newExp - expForLevel;
      const newLevel = pet.level + 1;
      const def = PET_DEFS[pet.petType];
      const newMaxHp = def.baseHp + (newLevel - 1) * 5;
      const newAtk = def.baseAtk + (newLevel - 1) * 2;
      const newDef = def.baseDef + (newLevel - 1) * 1;

      db.prepare(`
        UPDATE pets SET level = ?, exp = ?, max_hp = ?, hp = ?, atk = ?, def = ? WHERE id = ?
      `).run(newLevel, leftover, newMaxHp, newMaxHp, newAtk, newDef, pet.id);

      return `${pet.name}升級了！Lv${pet.level} → Lv${newLevel}`;
    }

    db.prepare(`UPDATE pets SET exp = ? WHERE id = ?`).run(newExp, pet.id);
    return '';
  }

  private getExpForPetLevel(level: number): number {
    return level * 50 + level * level * 10;
  }

  // ──────────────────────────────────────────────────────────
  //  重命名
  // ──────────────────────────────────────────────────────────

  renamePet(characterId: string, petId: string, newName: string): { ok: boolean; message: string } {
    const pet = this.getPetById(petId);
    if (!pet || pet.characterId !== characterId) {
      return { ok: false, message: '找不到這隻寵物。' };
    }

    if (!newName || newName.length > 20) {
      return { ok: false, message: '名字長度必須在 1-20 字之間。' };
    }

    const db = getDb();
    db.prepare(`UPDATE pets SET name = ? WHERE id = ?`).run(newName, petId);
    return { ok: true, message: `寵物已重新命名為「${newName}」！` };
  }

  // ──────────────────────────────────────────────────────────
  //  查詢
  // ──────────────────────────────────────────────────────────

  getPetById(petId: string): Pet | null {
    const db = getDb();
    const row = db.prepare(`SELECT * FROM pets WHERE id = ?`).get(petId) as any;
    return row ? this.rowToPet(row) : null;
  }

  getPetInfo(characterId: string, petId: string): Pet | null {
    const pet = this.getPetById(petId);
    if (!pet || pet.characterId !== characterId) return null;
    return pet;
  }

  getPlayerPets(characterId: string): Pet[] {
    const db = getDb();
    const rows = db.prepare(`SELECT * FROM pets WHERE character_id = ? ORDER BY created_at`).all(characterId) as any[];
    return rows.map(r => this.rowToPet(r));
  }

  getSummonedPet(characterId: string): Pet | null {
    const db = getDb();
    const row = db.prepare(`SELECT * FROM pets WHERE character_id = ? AND is_summoned = 1`).get(characterId) as any;
    return row ? this.rowToPet(row) : null;
  }

  /**
   * 幸福度衰減（定期呼叫，例如每小時）
   */
  decayHappiness(): void {
    const db = getDb();
    db.prepare(`UPDATE pets SET happiness = MAX(0, happiness - 2) WHERE is_summoned = 1`).run();
  }

  // ──────────────────────────────────────────────────────────
  //  內部輔助
  // ──────────────────────────────────────────────────────────

  private rowToPet(row: any): Pet {
    return {
      id: row.id,
      characterId: row.character_id,
      petType: row.pet_type,
      name: row.name,
      level: row.level,
      exp: row.exp,
      hp: row.hp,
      maxHp: row.max_hp,
      atk: row.atk,
      def: row.def,
      happiness: row.happiness,
      isSummoned: row.is_summoned === 1,
      createdAt: row.created_at,
    };
  }
}
