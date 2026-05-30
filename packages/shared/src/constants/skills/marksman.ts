import type { RawSkillDef } from './types.js';

export const MARKSMAN_SKILL_DEFS: Record<string, RawSkillDef> = {
// ════════════════════════════════════════════
  //  鷹眼獵手 (Lv 20+) - 遊俠系二轉・射程系統
  // ════════════════════════════════════════════

  hawk_eye: {
    id: 'hawk_eye', name: '鷹眼', englishName: 'Hawk Eye',
    classId: 'marksman', learnLevel: 20, type: 'passive',
    targetType: 'self', resourceCost: 0, cooldown: 0,
    damageType: 'pure', element: 'none', multiplier: 0,
    description: '鷹眼獵手的核心系統。視野延伸至 2 個房間外，能清楚看見遠處敵人的一切。攻擊每多 1 個房間距離，傷害額外 +50%。解鎖瞄準機制。',
    shortDescription: '視野 +2 房。每多 1 房距離 = 傷害 +50%。解鎖瞄準機制。',
    fullDescription: '被動。視野延伸 2 個房間。攻擊每增加 1 房距離 = 傷害 +50%。解鎖瞄準機制：花 tick 不行動累積瞄準層，增加射程與命中。',
    tags: ['passive', 'buff', 'physical'],
    special: { rangeSystem: true, visionRange: 2, damagePerRoom: 50 },
  },

aim: {
    id: 'aim', name: '瞄準', englishName: 'Aim',
    classId: 'marksman', learnLevel: 20, type: 'active',
    targetType: 'self', resourceCost: 0, cooldown: 0,
    damageType: 'pure', element: 'none', multiplier: 0,
    description: '屏息凝神，雙眼鎖定遠方的目標。花 1 tick 不做其他動作來瞄準，下次攻擊射程+1、命中+30%、傷害+50%。可連續瞄準最多 2 次累積效果。瞄準中被攻擊會打斷。',
    shortDescription: '花 1 tick 瞄準：射程+1、命中+30%、傷害+50%。可連續 2 次累積。被攻擊打斷。',
    fullDescription: '消耗 0 Focus，無冷卻。花 1 tick 不行動進行瞄準。下次攻擊射程+1 房、命中+30%、傷害+50%。可連續瞄準最多 2 次累積。被擊中時瞄準中斷。',
    tags: ['support', 'buff'],
    special: { aimStack: true, maxAimStacks: 2, rangePerStack: 1, hitPerStack: 30, damagePerStack: 50, interruptOnHit: true },
  },

long_shot: {
    id: 'long_shot', name: '遠射', englishName: 'Long Shot',
    classId: 'marksman', learnLevel: 20, type: 'active',
    targetType: 'single_enemy', resourceCost: 15, cooldown: 3,
    damageType: 'physical', element: 'none', multiplier: 1.5,
    description: '拉弓射出一支直指遠方的箭矢。基礎射程 1 房，每層瞄準延伸射程。完全瞄準後可射到 3 個房間外，威力隨距離暴增。',
    shortDescription: '射程 1 房，150% 物理。每層瞄準 +1 射程。2 層 = 3 房射程、250%、必中。',
    fullDescription: '消耗 15 Focus，冷卻 3。射程 1 房，對單體造成 150% 物理傷害。每層瞄準增加 1 房射程。2 層瞄準 = 射程 3 房、250% 傷害、必定命中。',
    tags: ['damage', 'single_target', 'burst', 'physical'],
    special: { baseRange: 1, aimScaling: true },
  },

quick_shot: {
    id: 'quick_shot', name: '急射', englishName: 'Quick Shot',
    classId: 'marksman', learnLevel: 20, type: 'active',
    targetType: 'single_enemy', resourceCost: 8, cooldown: 2,
    damageType: 'physical', element: 'none', multiplier: 1.0,
    description: '不需要瞄準的快速射擊，適合近距離和應急情況。只能打到本房或相鄰 1 房的敵人，但出手極快。',
    shortDescription: '即射，本房/相鄰 1 房。100% 物理。不受瞄準影響，快速輸出。',
    fullDescription: '消耗 8 Focus，冷卻 2。即射，射程本房或相鄰 1 房。100% 物理傷害。不受瞄準影響。',
    tags: ['damage', 'single_target', 'physical'],
    special: { baseRange: 1, noAimRequired: true },
  },

steady_stance: {
    id: 'steady_stance', name: '穩固射姿', englishName: 'Steady Stance',
    classId: 'marksman', learnLevel: 25, type: 'passive',
    targetType: 'self', resourceCost: 0, cooldown: 0,
    damageType: 'pure', element: 'none', multiplier: 0,
    description: '長年射擊鍛鍊出的穩定姿態，讓瞄準時更難被打斷，同時在專注瞄準的狀態下自然降低受到的傷害。',
    shortDescription: '瞄準中打斷率從 100% 降至 30%。瞄準中減傷 +15%。',
    fullDescription: '被動。瞄準中被攻擊的打斷率從 100% 降至 30%。瞄準期間獲得 15% 減傷。',
    tags: ['passive', 'defense', 'buff'],
    special: { aimInterruptResist: 70, aimDamageReduction: 15 },
  },

piercing_arrow: {
    id: 'piercing_arrow', name: '穿甲箭', englishName: 'Piercing Arrow',
    classId: 'marksman', learnLevel: 29, type: 'active',
    targetType: 'single_enemy', resourceCost: 20, cooldown: 4,
    damageType: 'physical', element: 'none', multiplier: 1.8,
    description: '取出特製箭頭，射出一支能無視護甲的穿甲箭。瞄準後射程同樣延伸。',
    shortDescription: '180% 物理，無視 50% 防禦。瞄準後射程延伸。',
    fullDescription: '消耗 20 Focus，冷卻 4。對單體造成 180% 物理傷害，無視 50% 防禦。受瞄準影響延伸射程。',
    tags: ['damage', 'single_target', 'physical'],
    special: { defPiercing: 50, aimScaling: true },
  },

rapid_fire: {
    id: 'rapid_fire', name: '連射', englishName: 'Rapid Fire',
    classId: 'marksman', learnLevel: 33, type: 'active',
    targetType: 'single_enemy', resourceCost: 25, cooldown: 4,
    damageType: 'physical', element: 'none', multiplier: 0.8,
    description: '以極快的速度連續射出三支箭矢，每支可瞄準不同目標。不需要瞄準即可快速覆蓋多個敵人。',
    shortDescription: '即射 3 發，各 80% 物理。可打不同目標。不需要瞄準。',
    fullDescription: '消耗 25 Focus，冷卻 4。即射 3 發箭矢，各 80% 物理傷害。可分別指定不同目標。不需要瞄準。',
    tags: ['damage', 'single_target', 'burst', 'physical'],
    special: { multiShot: 3, noAimRequired: true },
  },

tracking_arrow: {
    id: 'tracking_arrow', name: '追蹤箭', englishName: 'Tracking Arrow',
    classId: 'marksman', learnLevel: 37, type: 'active',
    targetType: 'single_enemy', resourceCost: 15, cooldown: 6,
    damageType: 'pure', element: 'none', multiplier: 0,
    description: '射出一支帶有追蹤術式的特殊箭矢，標記目標 5 tick。標記期間你的所有攻擊自動追蹤該目標，無視距離必中。',
    shortDescription: '標記目標 5 tick。標記期間你的攻擊自動追蹤、無視距離、必中。',
    fullDescription: '消耗 15 Focus，冷卻 6。標記目標 5 tick。標記期間你的所有攻擊自動命中該目標，無視距離限制。',
    tags: ['support', 'control'],
    special: { trackingMark: true, duration: 5, guaranteedHit: true, ignoreRange: true },
  },

explosive_arrow: {
    id: 'explosive_arrow', name: '爆裂箭', englishName: 'Explosive Arrow',
    classId: 'marksman', learnLevel: 45, type: 'active',
    targetType: 'all_enemies', resourceCost: 25, cooldown: 6,
    damageType: 'physical', element: 'fire', multiplier: 1.5,
    description: '射出一支裝填了爆裂符文的特殊箭矢。命中後引發劇烈爆炸，波及周圍所有敵人並打斷施法。受瞄準影響延伸射程。',
    shortDescription: '射程 1-3 房。命中 AoE 150% 物理+火 + 打斷。瞄準增幅。',
    fullDescription: '消耗 25 Focus，冷卻 6。射程 1-3 房（受瞄準影響）。命中後 AoE 爆炸造成 150% 物理+火傷害並打斷施法。',
    effects: [{ type: 'stun', value: 1, duration: 1 }],
    tags: ['damage', 'aoe', 'burst', 'interrupt', 'physical', 'fire'],
    special: { aimScaling: true, interrupt: true },
  },

sky_eagle_strike: {
    id: 'sky_eagle_strike', name: '天鷹一擊', englishName: 'Sky Eagle Strike',
    classId: 'marksman', learnLevel: 50, type: 'active',
    targetType: 'single_enemy', resourceCost: 35, cooldown: 12,
    damageType: 'physical', element: 'none', multiplier: 5.0,
    description: '鷹眼獵手的終極絕技。需要完整 2 層瞄準。箭矢從 3 個房間外射出，攜帶著穿雲裂石之力，必中必暴。若目標 HP 低於 30%，天鷹之箭將執行最終審判。',
    shortDescription: '需 2 層瞄準。射程 3 房，500% 物理必中必暴。目標 HP ≤ 30% 則 ×1.5。',
    fullDescription: '消耗 35 Focus，冷卻 12。需 2 層瞄準才能施放。射程 3 房，500% 物理傷害，必定命中，必定暴擊。目標 HP ≤ 30% 時傷害額外 ×1.5。',
    tags: ['damage', 'single_target', 'burst', 'physical'],
    special: { requireAimStacks: 2, baseRange: 3, guaranteedHit: true, guaranteedCrit: true, executeThreshold: 0.3, executeDamageMultiplier: 1.5 },
  },
};
