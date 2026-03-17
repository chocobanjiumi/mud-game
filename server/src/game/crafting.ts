// 製作系統 — CraftingManager
// 支援三種類別：鍛造 (forge)、煉金 (alchemy)、烹飪 (cooking)

import { getDb } from '../db/schema.js';
import { getInventory, addInventoryItem, removeInventoryItem } from '../db/queries.js';
import { ITEM_DEFS } from '@game/shared';

// ============================================================
//  型別定義
// ============================================================

export type CraftingCategory = 'forge' | 'alchemy' | 'cooking';

export interface RecipeDef {
  id: string;
  name: string;
  category: CraftingCategory;
  level: number;       // crafting level required
  materials: { itemId: string; count: number }[];
  result: { itemId: string; count: number };
  successRate: number; // 0-100 base success rate
  exp: number;         // crafting exp gained
}

export interface CraftingLevelInfo {
  category: CraftingCategory;
  level: number;
  exp: number;
  expToNext: number;
}

// ============================================================
//  配方定義
// ============================================================

export const RECIPES: Record<string, RecipeDef> = {

  // ─── 鍛造 (Forge) ───────────────────────────────────────────

  craft_iron_sword: {
    id: 'craft_iron_sword',
    name: '鐵劍',
    category: 'forge',
    level: 1,
    materials: [{ itemId: 'iron_ore', count: 3 }],
    result: { itemId: 'iron_sword', count: 1 },
    successRate: 90,
    exp: 15,
  },
  craft_iron_shield: {
    id: 'craft_iron_shield',
    name: '鐵盾',
    category: 'forge',
    level: 3,
    materials: [{ itemId: 'iron_ore', count: 4 }],
    result: { itemId: 'iron_shield', count: 1 },
    successRate: 85,
    exp: 20,
  },
  craft_steel_blade: {
    id: 'craft_steel_blade',
    name: '鋼刃',
    category: 'forge',
    level: 8,
    materials: [
      { itemId: 'iron_ore', count: 3 },
      { itemId: 'magic_crystal', count: 1 },
    ],
    result: { itemId: 'katana_steel', count: 1 },
    successRate: 75,
    exp: 35,
  },
  craft_beast_leather_armor: {
    id: 'craft_beast_leather_armor',
    name: '獸皮甲',
    category: 'forge',
    level: 5,
    materials: [{ itemId: 'beast_hide', count: 3 }],
    result: { itemId: 'beast_leather_armor', count: 1 },
    successRate: 85,
    exp: 25,
  },
  craft_spider_silk_robe: {
    id: 'craft_spider_silk_robe',
    name: '蜘蛛絲袍',
    category: 'forge',
    level: 10,
    materials: [{ itemId: 'spider_silk_cloth', count: 4 }],
    result: { itemId: 'spider_silk_robe', count: 1 },
    successRate: 75,
    exp: 40,
  },
  craft_crystal_staff: {
    id: 'craft_crystal_staff',
    name: '水晶法杖',
    category: 'forge',
    level: 12,
    materials: [
      { itemId: 'magic_crystal', count: 2 },
      { itemId: 'elf_wood', count: 1 },
    ],
    result: { itemId: 'elestaff_crystal', count: 1 },
    successRate: 70,
    exp: 45,
  },
  craft_mithril_dagger: {
    id: 'craft_mithril_dagger',
    name: '秘銀匕首',
    category: 'forge',
    level: 15,
    materials: [{ itemId: 'mithril_ore', count: 3 }],
    result: { itemId: 'dagger_mithril', count: 1 },
    successRate: 65,
    exp: 55,
  },
  craft_mithril_spear: {
    id: 'craft_mithril_spear',
    name: '秘銀槍',
    category: 'forge',
    level: 18,
    materials: [
      { itemId: 'mithril_ore', count: 4 },
      { itemId: 'elf_wood', count: 1 },
    ],
    result: { itemId: 'spear_mithril', count: 1 },
    successRate: 60,
    exp: 65,
  },
  craft_dragon_armor: {
    id: 'craft_dragon_armor',
    name: '龍鱗甲',
    category: 'forge',
    level: 25,
    materials: [
      { itemId: 'dragon_scale', count: 5 },
      { itemId: 'mithril_ore', count: 2 },
    ],
    result: { itemId: 'dragon_scale_armor', count: 1 },
    successRate: 50,
    exp: 80,
  },
  craft_ancient_relic: {
    id: 'craft_ancient_relic',
    name: '古代遺物',
    category: 'forge',
    level: 30,
    materials: [
      { itemId: 'ancient_fragment', count: 5 },
      { itemId: 'magic_crystal', count: 3 },
    ],
    result: { itemId: 'ancient_relic', count: 1 },
    successRate: 40,
    exp: 100,
  },

  // ─── 煉金 (Alchemy) ─────────────────────────────────────────

  craft_small_hp_potion: {
    id: 'craft_small_hp_potion',
    name: '小型HP藥水',
    category: 'alchemy',
    level: 1,
    materials: [{ itemId: 'herb', count: 2 }],
    result: { itemId: 'small_hp_potion', count: 2 },
    successRate: 95,
    exp: 10,
  },
  craft_antidote: {
    id: 'craft_antidote',
    name: '解毒劑',
    category: 'alchemy',
    level: 3,
    materials: [{ itemId: 'herb', count: 2 }],
    result: { itemId: 'antidote', count: 2 },
    successRate: 90,
    exp: 15,
  },
  craft_medium_hp_potion: {
    id: 'craft_medium_hp_potion',
    name: '中型HP藥水',
    category: 'alchemy',
    level: 5,
    materials: [
      { itemId: 'herb', count: 3 },
      { itemId: 'magic_crystal', count: 1 },
    ],
    result: { itemId: 'medium_hp_potion', count: 2 },
    successRate: 85,
    exp: 20,
  },
  craft_strength_potion: {
    id: 'craft_strength_potion',
    name: '力量藥水',
    category: 'alchemy',
    level: 8,
    materials: [
      { itemId: 'beast_hide', count: 2 },
      { itemId: 'magic_crystal', count: 1 },
    ],
    result: { itemId: 'strength_potion', count: 1 },
    successRate: 80,
    exp: 30,
  },
  craft_wisdom_potion: {
    id: 'craft_wisdom_potion',
    name: '智慧藥水',
    category: 'alchemy',
    level: 8,
    materials: [
      { itemId: 'elf_wood', count: 2 },
      { itemId: 'magic_crystal', count: 1 },
    ],
    result: { itemId: 'wisdom_potion', count: 1 },
    successRate: 80,
    exp: 30,
  },
  craft_agility_potion: {
    id: 'craft_agility_potion',
    name: '敏捷藥水',
    category: 'alchemy',
    level: 10,
    materials: [
      { itemId: 'spider_silk_cloth', count: 2 },
      { itemId: 'magic_crystal', count: 1 },
    ],
    result: { itemId: 'agility_potion', count: 1 },
    successRate: 75,
    exp: 35,
  },
  craft_enhance_stone: {
    id: 'craft_enhance_stone',
    name: '普通強化石',
    category: 'alchemy',
    level: 12,
    materials: [
      { itemId: 'magic_crystal', count: 3 },
      { itemId: 'iron_ore', count: 2 },
    ],
    result: { itemId: 'normal_enhance_stone', count: 1 },
    successRate: 70,
    exp: 40,
  },
  craft_lucky_charm: {
    id: 'craft_lucky_charm',
    name: '幸運符',
    category: 'alchemy',
    level: 15,
    materials: [
      { itemId: 'magic_crystal', count: 2 },
      { itemId: 'ancient_fragment', count: 1 },
    ],
    result: { itemId: 'enhance_lucky_charm', count: 1 },
    successRate: 65,
    exp: 50,
  },
  craft_allstat_potion: {
    id: 'craft_allstat_potion',
    name: '全能藥水',
    category: 'alchemy',
    level: 20,
    materials: [
      { itemId: 'iron_ore', count: 1 },
      { itemId: 'magic_crystal', count: 1 },
      { itemId: 'elf_wood', count: 1 },
      { itemId: 'beast_hide', count: 1 },
      { itemId: 'spider_silk_cloth', count: 1 },
    ],
    result: { itemId: 'allstat_potion', count: 1 },
    successRate: 55,
    exp: 60,
  },
  craft_advanced_enhance_stone: {
    id: 'craft_advanced_enhance_stone',
    name: '高級強化石',
    category: 'alchemy',
    level: 25,
    materials: [
      { itemId: 'magic_crystal', count: 5 },
      { itemId: 'mithril_ore', count: 3 },
      { itemId: 'dragon_scale', count: 1 },
    ],
    result: { itemId: 'advanced_enhance_stone', count: 1 },
    successRate: 45,
    exp: 80,
  },

  // ─── 烹飪 (Cooking) ─────────────────────────────────────────

  craft_grilled_meat: {
    id: 'craft_grilled_meat',
    name: '烤肉',
    category: 'cooking',
    level: 1,
    materials: [{ itemId: 'rabbit_meat', count: 1 }],
    result: { itemId: 'grilled_meat', count: 1 },
    successRate: 95,
    exp: 10,
  },
  craft_hp_steak: {
    id: 'craft_hp_steak',
    name: '回復牛排',
    category: 'cooking',
    level: 3,
    materials: [{ itemId: 'rabbit_meat', count: 2 }],
    result: { itemId: 'hp_steak', count: 1 },
    successRate: 90,
    exp: 15,
  },
  craft_stew: {
    id: 'craft_stew',
    name: '燉湯',
    category: 'cooking',
    level: 5,
    materials: [
      { itemId: 'rabbit_meat', count: 2 },
      { itemId: 'herb', count: 1 },
    ],
    result: { itemId: 'stew', count: 1 },
    successRate: 85,
    exp: 20,
  },
  craft_energy_drink: {
    id: 'craft_energy_drink',
    name: '能量飲料',
    category: 'cooking',
    level: 8,
    materials: [
      { itemId: 'magic_crystal', count: 1 },
      { itemId: 'herb', count: 1 },
    ],
    result: { itemId: 'energy_drink', count: 1 },
    successRate: 80,
    exp: 30,
  },
  craft_adventure_bento: {
    id: 'craft_adventure_bento',
    name: '冒險者便當',
    category: 'cooking',
    level: 10,
    materials: [
      { itemId: 'rabbit_meat', count: 2 },
      { itemId: 'herb', count: 1 },
    ],
    result: { itemId: 'adventure_bento', count: 1 },
    successRate: 75,
    exp: 35,
  },
  craft_magic_dessert: {
    id: 'craft_magic_dessert',
    name: '魔法甜點',
    category: 'cooking',
    level: 12,
    materials: [
      { itemId: 'magic_crystal', count: 1 },
      { itemId: 'herb', count: 2 },
    ],
    result: { itemId: 'magic_dessert', count: 1 },
    successRate: 70,
    exp: 40,
  },
  craft_elf_bread: {
    id: 'craft_elf_bread',
    name: '精靈麵包',
    category: 'cooking',
    level: 15,
    materials: [
      { itemId: 'elf_wood', count: 2 },
      { itemId: 'magic_crystal', count: 1 },
    ],
    result: { itemId: 'elf_bread', count: 1 },
    successRate: 65,
    exp: 50,
  },
  craft_fire_soup: {
    id: 'craft_fire_soup',
    name: '火焰湯',
    category: 'cooking',
    level: 18,
    materials: [
      { itemId: 'salamander_tail', count: 1 },
      { itemId: 'herb', count: 1 },
    ],
    result: { itemId: 'fire_soup', count: 1 },
    successRate: 60,
    exp: 55,
  },
  craft_ice_cream: {
    id: 'craft_ice_cream',
    name: '冰元素冰淇淋',
    category: 'cooking',
    level: 20,
    materials: [
      { itemId: 'ice_core', count: 1 },
      { itemId: 'herb', count: 1 },
    ],
    result: { itemId: 'ice_cream', count: 1 },
    successRate: 55,
    exp: 60,
  },
  craft_feast: {
    id: 'craft_feast',
    name: '宴會大餐',
    category: 'cooking',
    level: 25,
    materials: [
      { itemId: 'rabbit_meat', count: 3 },
      { itemId: 'herb', count: 2 },
      { itemId: 'magic_crystal', count: 1 },
    ],
    result: { itemId: 'feast', count: 1 },
    successRate: 45,
    exp: 80,
  },
};

// ============================================================
//  類別中文名
// ============================================================

const CATEGORY_NAMES: Record<CraftingCategory, string> = {
  forge: '鍛造',
  alchemy: '煉金',
  cooking: '烹飪',
};

// ============================================================
//  CraftingManager
// ============================================================

export class CraftingManager {

  // ──────────────────────────────────────────────────────────
  //  製作等級查詢
  // ──────────────────────────────────────────────────────────

  /** 取得角色某類別的製作等級 */
  getCraftingLevel(characterId: string, category: CraftingCategory): CraftingLevelInfo {
    const db = getDb();
    const row = db.prepare(
      'SELECT level, exp FROM crafting_levels WHERE character_id = ? AND category = ?',
    ).get(characterId, category) as { level: number; exp: number } | undefined;

    const level = row?.level ?? 1;
    const exp = row?.exp ?? 0;
    return {
      category,
      level,
      exp,
      expToNext: level * 100,
    };
  }

  /** 取得角色所有製作等級 */
  getAllCraftingLevels(characterId: string): CraftingLevelInfo[] {
    const categories: CraftingCategory[] = ['forge', 'alchemy', 'cooking'];
    return categories.map(c => this.getCraftingLevel(characterId, c));
  }

  // ──────────────────────────────────────────────────────────
  //  配方查詢
  // ──────────────────────────────────────────────────────────

  /** 取得指定類別的配方（依製作等級篩選可用配方） */
  getRecipes(category: CraftingCategory, craftingLevel?: number): RecipeDef[] {
    return Object.values(RECIPES).filter(r => {
      if (r.category !== category) return false;
      if (craftingLevel !== undefined && r.level > craftingLevel) return false;
      return true;
    });
  }

  /** 取得配方詳情 */
  getRecipeInfo(recipeId: string): RecipeDef | undefined {
    return RECIPES[recipeId];
  }

  // ──────────────────────────────────────────────────────────
  //  製作
  // ──────────────────────────────────────────────────────────

  /** 嘗試製作 */
  craft(
    characterId: string,
    recipeId: string,
  ): { success: boolean; message: string; crafted?: boolean } {
    const recipe = RECIPES[recipeId];
    if (!recipe) {
      return { success: false, message: '配方不存在。' };
    }

    // 檢查製作等級
    const levelInfo = this.getCraftingLevel(characterId, recipe.category);
    if (levelInfo.level < recipe.level) {
      return {
        success: false,
        message: `${CATEGORY_NAMES[recipe.category]}等級不足（需要 Lv.${recipe.level}，目前 Lv.${levelInfo.level}）。`,
      };
    }

    // 檢查材料
    const inventory = getInventory(characterId);
    const invMap = new Map<string, number>();
    for (const item of inventory) {
      invMap.set(item.itemId, (invMap.get(item.itemId) ?? 0) + item.quantity);
    }

    for (const mat of recipe.materials) {
      const have = invMap.get(mat.itemId) ?? 0;
      const itemName = ITEM_DEFS[mat.itemId]?.name ?? mat.itemId;
      if (have < mat.count) {
        return {
          success: false,
          message: `材料不足：${itemName}（需要 ${mat.count}，擁有 ${have}）。`,
        };
      }
    }

    // 消耗材料
    for (const mat of recipe.materials) {
      removeInventoryItem(characterId, mat.itemId, mat.count);
    }

    // 計算成功率：base + (craftingLevel - recipeLevel) * 2，最高 100
    const bonus = Math.max(0, (levelInfo.level - recipe.level) * 2);
    const finalRate = Math.min(100, recipe.successRate + bonus);
    const roll = Math.random() * 100;
    const craftSuccess = roll < finalRate;

    // 給予經驗（無論成敗）
    this.addCraftingExp(characterId, recipe.category, recipe.exp);

    if (!craftSuccess) {
      return {
        success: true,
        crafted: false,
        message:
          `製作失敗！材料已消耗。（成功率 ${finalRate}%）\n` +
          `獲得 ${recipe.exp} ${CATEGORY_NAMES[recipe.category]}經驗。`,
      };
    }

    // 給予成品
    addInventoryItem(characterId, recipe.result.itemId, recipe.result.count);

    const resultName = ITEM_DEFS[recipe.result.itemId]?.name ?? recipe.result.itemId;
    const countText = recipe.result.count > 1 ? ` x${recipe.result.count}` : '';

    return {
      success: true,
      crafted: true,
      message:
        `製作成功！獲得：${resultName}${countText}（成功率 ${finalRate}%）\n` +
        `獲得 ${recipe.exp} ${CATEGORY_NAMES[recipe.category]}經驗。`,
    };
  }

  // ──────────────────────────────────────────────────────────
  //  製作經驗
  // ──────────────────────────────────────────────────────────

  private addCraftingExp(characterId: string, category: CraftingCategory, exp: number): void {
    const db = getDb();
    const info = this.getCraftingLevel(characterId, category);
    let newExp = info.exp + exp;
    let newLevel = info.level;

    // 升級判定
    while (newLevel < 50) {
      const needed = newLevel * 100;
      if (newExp >= needed) {
        newExp -= needed;
        newLevel++;
      } else {
        break;
      }
    }

    db.prepare(
      `INSERT INTO crafting_levels (character_id, category, level, exp)
       VALUES (?, ?, ?, ?)
       ON CONFLICT(character_id, category) DO UPDATE SET level = ?, exp = ?`,
    ).run(characterId, category, newLevel, newExp, newLevel, newExp);
  }

  // ──────────────────────────────────────────────────────────
  //  格式化顯示
  // ──────────────────────────────────────────────────────────

  /** 格式化配方列表 */
  formatRecipeList(category: CraftingCategory, characterId: string): string {
    const levelInfo = this.getCraftingLevel(characterId, category);
    const recipes = Object.values(RECIPES).filter(r => r.category === category);

    let text = `── ${CATEGORY_NAMES[category]}配方列表 ──\n`;
    text += `${CATEGORY_NAMES[category]}等級：Lv.${levelInfo.level}（${levelInfo.exp}/${levelInfo.expToNext} EXP）\n`;
    text += '─'.repeat(40) + '\n';

    for (const r of recipes) {
      const canCraft = levelInfo.level >= r.level;
      const statusIcon = canCraft ? '[可]' : '[鎖]';
      const resultName = ITEM_DEFS[r.result.itemId]?.name ?? r.result.itemId;
      text += `${statusIcon} ${r.id}  ${r.name}\n`;
      text += `   等級需求：Lv.${r.level}  成功率：${r.successRate}%\n`;
      text += `   成品：${resultName}`;
      if (r.result.count > 1) text += ` x${r.result.count}`;
      text += '\n';
    }

    return text;
  }

  /** 格式化配方詳情 */
  formatRecipeInfo(recipeId: string, characterId: string): string {
    const recipe = RECIPES[recipeId];
    if (!recipe) return '配方不存在。';

    const levelInfo = this.getCraftingLevel(characterId, recipe.category);
    const resultName = ITEM_DEFS[recipe.result.itemId]?.name ?? recipe.result.itemId;
    const bonus = Math.max(0, (levelInfo.level - recipe.level) * 2);
    const finalRate = Math.min(100, recipe.successRate + bonus);

    // 取得背包來檢查材料
    const inventory = getInventory(characterId);
    const invMap = new Map<string, number>();
    for (const item of inventory) {
      invMap.set(item.itemId, (invMap.get(item.itemId) ?? 0) + item.quantity);
    }

    let text = `── 配方詳情：${recipe.name} ──\n`;
    text += `類別：${CATEGORY_NAMES[recipe.category]}\n`;
    text += `等級需求：Lv.${recipe.level}（你的等級：Lv.${levelInfo.level}）\n`;
    text += `基礎成功率：${recipe.successRate}%（你的成功率：${finalRate}%）\n`;
    text += `經驗值：${recipe.exp}\n`;
    text += `成品：${resultName}`;
    if (recipe.result.count > 1) text += ` x${recipe.result.count}`;
    text += '\n\n所需材料：\n';

    for (const mat of recipe.materials) {
      const matName = ITEM_DEFS[mat.itemId]?.name ?? mat.itemId;
      const have = invMap.get(mat.itemId) ?? 0;
      const enough = have >= mat.count ? '[足]' : '[缺]';
      text += `  ${enough} ${matName} x${mat.count}（擁有 ${have}）\n`;
    }

    return text;
  }

  /** 格式化製作等級總覽 */
  formatCraftingLevels(characterId: string): string {
    const levels = this.getAllCraftingLevels(characterId);
    let text = '── 製作等級 ──\n';
    for (const info of levels) {
      text += `  ${CATEGORY_NAMES[info.category]}：Lv.${info.level}（${info.exp}/${info.expToNext} EXP）\n`;
    }
    return text;
  }
}
