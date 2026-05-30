import type { RawSkillDef } from './types.js';

export const CHRONOMANCER_SKILL_DEFS: Record<string, RawSkillDef> = {
// ════════════════════════════════════════════
  //  次元術士 (Lv 20+) - 法師系二轉・次元門
  // ════════════════════════════════════════════

  dimensional_sense: {
    id: 'dimensional_sense', name: '次元感知', englishName: 'Dimensional Sense',
    classId: 'chronomancer', learnLevel: 20, type: 'passive',
    targetType: 'self', resourceCost: 0, cooldown: 0,
    damageType: 'pure', element: 'none', multiplier: 0,
    description: '次元術士的核心系統。可感知相鄰房間的敵人資訊。次元門開啟後，本房所有隊友的技能都可透過門攻擊另一端的敵人，且所有透過門的技能效果 +20%。',
    shortDescription: '感知相鄰房敵人。次元門開啟後全隊可跨房戰鬥，透過門的技能效果 +20%。',
    fullDescription: '被動。可感知相鄰房間敵人資訊。次元門開啟後，本房所有隊友的技能可透過門打到另一端敵人。所有透過次元門的技能效果 +20%。',
    tags: ['passive', 'support'],
    special: { dimensionalSystem: true, gateAmplify: 20 },
  },

open_gate: {
    id: 'open_gate', name: '開啟次元門', englishName: 'Open Gate',
    classId: 'chronomancer', learnLevel: 20, type: 'active',
    targetType: 'self', resourceCost: 15, cooldown: 2,
    damageType: 'pure', element: 'none', multiplier: 0,
    description: '撕裂空間，在本房與指定相鄰房間之間開啟次元門。門開啟後，本房所有隊友都可以透過門對另一端的敵人施放技能。維持消耗 5 MP/tick。',
    shortDescription: '開啟次元門連結相鄰房。全隊可跨門攻擊。維持 5 MP/tick，最多 1 扇門。',
    fullDescription: '消耗 15 MP，冷卻 2。開啟次元門連結本房與指定相鄰房間。全隊可透過門攻擊/施法到另一端。維持消耗 5 MP/tick。最多 1 扇門，再次使用關閉現有門。',
    tags: ['support'],
    special: { dimensionalGate: true, maintenanceMpPerTick: 5, maxGates: 1 },
  },

dimensional_shot: {
    id: 'dimensional_shot', name: '次元射擊', englishName: 'Dimensional Shot',
    classId: 'chronomancer', learnLevel: 20, type: 'active',
    targetType: 'single_enemy', resourceCost: 12, cooldown: 3,
    damageType: 'magical', element: 'none', multiplier: 1.3,
    description: '透過次元門發射一道扭曲空間的魔力彈。穿越次元門的能量在空間裂隙中被增幅，比直接攻擊更具威力。無門時仍可對本房敵人施放。',
    shortDescription: '透過門射擊：130% × 1.2 增幅 = 156% 魔傷。無門時打本房（無增幅）。',
    fullDescription: '消耗 12 MP，冷卻 3。透過次元門對另一端單體造成 130% 魔法傷害（+20% 次元增幅 = 156%）。無次元門時對本房敵人施放（無增幅）。',
    tags: ['damage', 'single_target', 'magical'],
    special: { crossRoomViaGate: true },
  },

dimensional_pull: {
    id: 'dimensional_pull', name: '次元牽引', englishName: 'Dimensional Pull',
    classId: 'chronomancer', learnLevel: 20, type: 'active',
    targetType: 'single_enemy', resourceCost: 18, cooldown: 5,
    damageType: 'pure', element: 'none', multiplier: 0,
    description: '透過次元門的引力場將另一端的敵人拽進本房，或將本房的友方傳送到另一端。被拉進的怪物以極快的速度接近。',
    shortDescription: '透過門拉一隻怪到本房（arrivalTicks=1）。或傳送友方到另一端。',
    fullDescription: '消耗 18 MP，冷卻 5。透過次元門拉一隻怪物到本房（forced approaching, arrivalTicks = 1）。或把本房一名友方傳送到門另一端。',
    tags: ['control', 'support'],
    special: { crossRoomViaGate: true, pullEnemy: true, sendAlly: true, arrivalTicks: 1 },
  },

gate_expansion: {
    id: 'gate_expansion', name: '門幅擴張', englishName: 'Gate Expansion',
    classId: 'chronomancer', learnLevel: 25, type: 'passive',
    targetType: 'self', resourceCost: 0, cooldown: 0,
    damageType: 'pure', element: 'none', multiplier: 0,
    description: '對次元操控的精進讓次元門更加穩定高效。增幅效果提升，維持消耗降低。',
    shortDescription: '次元門增幅從 +20% 提升到 +30%，維持 MP 降至 3/tick。',
    fullDescription: '被動。次元門增幅效果從 +20% 提升到 +30%。維持 MP 消耗從 5/tick 降至 3/tick。',
    tags: ['passive', 'support'],
    special: { gateAmplify: 30, maintenanceMpPerTick: 3 },
  },

dimensional_barrier: {
    id: 'dimensional_barrier', name: '次元壁壘', englishName: 'Dimensional Barrier',
    classId: 'chronomancer', learnLevel: 29, type: 'active',
    targetType: 'self', resourceCost: 20, cooldown: 6,
    damageType: 'pure', element: 'none', multiplier: 0,
    description: '暫時將次元門轉為單向屏障——你的隊伍可以透過門攻擊，但另一端的攻擊無法穿過門傷害你們。',
    shortDescription: '2 tick 次元門變為單向屏障：我方可攻擊，敵方攻擊被阻擋。',
    fullDescription: '消耗 20 MP，冷卻 6。2 tick 內次元門變為單向防禦屏障：本房隊友可透過門攻擊另一端，但另一端的攻擊無法穿過門。',
    effects: [{ type: 'shield', value: 999, duration: 2 }],
    tags: ['defense', 'support'],
    special: { gateBarrier: true, duration: 2 },
  },

chain_gate: {
    id: 'chain_gate', name: '連鎖次元門', englishName: 'Chain Gate',
    classId: 'chronomancer', learnLevel: 33, type: 'active',
    targetType: 'self', resourceCost: 30, cooldown: 8,
    damageType: 'pure', element: 'none', multiplier: 0,
    description: '同時撕開第二道次元門，連結到不同方向的相鄰房間。短時間內隊伍可以同時對兩個方向的敵人作戰。',
    shortDescription: '4 tick 同時開啟第 2 扇門到不同方向（維持消耗翻倍）。',
    fullDescription: '消耗 30 MP，冷卻 8。4 tick 內同時開啟第 2 扇次元門到不同方向的相鄰房間。維持消耗翻倍。4 tick 後第 2 扇門自動關閉。',
    tags: ['support'],
    special: { chainGate: true, maxGates: 2, duration: 4 },
  },

dimensional_fold: {
    id: 'dimensional_fold', name: '次元折疊', englishName: 'Dimensional Fold',
    classId: 'chronomancer', learnLevel: 37, type: 'active',
    targetType: 'self', resourceCost: 18, cooldown: 6,
    damageType: 'pure', element: 'none', multiplier: 0,
    description: '折疊次元門周圍的空間，讓透過門施放的下一個技能效果翻倍——範圍翻倍或傷害翻倍。',
    shortDescription: '透過門施放的下一個技能效果 ×2（範圍翻倍或傷害翻倍）。',
    fullDescription: '消耗 18 MP，冷卻 6。透過次元門施放的下一個技能效果 ×2（範圍類技能範圍翻倍，傷害類技能傷害翻倍）。',
    tags: ['buff', 'burst'],
    special: { nextGateSpellDoubled: true },
  },

spacetime_rupture: {
    id: 'spacetime_rupture', name: '時空斷裂', englishName: 'Spacetime Rupture',
    classId: 'chronomancer', learnLevel: 45, type: 'active',
    targetType: 'single_enemy', resourceCost: 25, cooldown: 5,
    damageType: 'magical', element: 'none', multiplier: 2.0,
    description: '透過次元門發射一道撕裂時空的衝擊波，切斷敵人的一切行動與防護。無次元門時仍可使用但威力減半。',
    shortDescription: '透過門：200% 魔傷 + 打斷 + 驅散。無門時威力減半。',
    fullDescription: '消耗 25 MP，冷卻 5。透過次元門對另一端造成 200% 魔法傷害 + 打斷施法 + 驅散護盾。無次元門時對本房施放，威力減半（100%）。',
    effects: [{ type: 'stun', value: 1, duration: 1 }],
    tags: ['damage', 'single_target', 'interrupt', 'control', 'magical'],
    special: { crossRoomViaGate: true, interrupt: true, dispelShield: true, noGatePenalty: 0.5 },
  },

dimensional_collapse: {
    id: 'dimensional_collapse', name: '次元崩塌', englishName: 'Dimensional Collapse',
    classId: 'chronomancer', learnLevel: 50, type: 'active',
    targetType: 'all_enemies', resourceCost: 35, cooldown: 12,
    damageType: 'magical', element: 'none', multiplier: 3.0,
    description: '主動關閉次元門並引爆其中蘊含的空間能量。次元門維持越久，爆炸越強烈。爆炸同時波及門兩端房間的所有敵人。',
    shortDescription: '引爆次元門。門每存在 1 tick = +50% 傷害。對兩端房間所有敵人造成巨額 AoE。',
    fullDescription: '消耗 35 MP，冷卻 12。關閉次元門並引爆。基礎 300% 魔法傷害，門每存在 1 tick 額外 +50% 傷害。對門兩端房間的所有敵人造成 AoE。門引爆後需重新開啟。',
    tags: ['damage', 'aoe', 'burst', 'magical'],
    special: { castTime: 2, gateDetonate: true, tickScaling: 50, dualRoomAoE: true },
  },
};
