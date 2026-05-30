import type { RawSkillDef } from './types.js';

export const RANGER_SKILL_DEFS: Record<string, RawSkillDef> = {
// ════════════════════════════════════════════
  //  遊俠 / 初始職業 (Lv 1-19)
  // ════════════════════════════════════════════
  precise_shot: {
    id: 'precise_shot', name: '射擊', englishName: 'Shot',
    classId: 'ranger', learnLevel: 1, type: 'active',
    targetType: 'single_enemy', resourceCost: 10, cooldown: 0,
    damageType: 'physical', element: 'none', multiplier: 1.2,
    description: '消耗 10 專注；本房或指定相鄰方向單體射擊。隔房命中後目標 arrivalTicks = 1，偵查後降低遠距命中懲罰。',
    shortDescription: '單體射擊；隔房命中後目標 arrivalTicks = 1。',
    fullDescription: '消耗 10 專注，冷卻 0。攻擊本房或指定相鄰方向單體，造成 120% 物理傷害；隔房命中後目標進入 approaching，arrivalTicks = 1。',
    tags: ['damage', 'single_target', 'resource', 'physical'],
    special: { crossRoom: true, arrivalTicks: 1, focusGainOnHit: 3 },
  },

quick_step: {
    id: 'quick_step', name: '強襲', englishName: 'Assault',
    classId: 'ranger', learnLevel: 1, type: 'active',
    targetType: 'single_enemy', resourceCost: 35, cooldown: 0,
    damageType: 'physical', element: 'none', multiplier: 1.6,
    description: '消耗 35 專注；瞬發不佔 tick、無冷卻，對本房單體造成物理傷害，命中時 30% 機率暈眩 1 tick。',
    shortDescription: '瞬發單體傷害，命中時 30% 機率暈眩。',
    fullDescription: '消耗 35 專注，冷卻 0。瞬發不佔 tick，攻擊本房單體造成 160% 物理傷害；命中時有 30% 機率附加 1 tick 暈眩。',
    tags: ['damage', 'single_target', 'control', 'resource', 'physical'],
    special: { instant: true, stunChance: 30, stunDuration: 1 },
  },

poison_arrow: {
    id: 'poison_arrow', name: '獵人標記', englishName: 'Hunter Mark',
    classId: 'ranger', learnLevel: 5, type: 'active',
    targetType: 'single_enemy', resourceCost: 25, cooldown: 4,
    damageType: 'pure', element: 'none', multiplier: 0,
    description: '消耗 25 專注；預先標記本房或已偵查相鄰房單體，不驚動目標。30 秒內與該目標進入戰鬥時，標記生效 4 tick：你對目標傷害 +15%、命中 +10%，命中額外回復 3 專注。',
    shortDescription: '預先標記單體；30 秒內開戰時生效 4 tick。',
    fullDescription: '消耗 25 專注，冷卻 4。預先標記本房或已偵查相鄰房單體，不造成傷害、不產生 approaching；30 秒內與該目標進入戰鬥時，目標獲得 4 tick 標記，你對目標傷害 +15%、命中 +10%，攻擊標記目標命中時額外回復 3 專注。',
    effects: [{ type: 'mark', value: 15, duration: 4 }],
    tags: ['control', 'support', 'resource', 'single_target', 'nature'],
    special: { crossRoomRequiresScout: true, focusGainOnMarkedHit: 3 },
  },

ranger_scout: {
    id: 'ranger_scout', name: '偵查', englishName: 'Scout',
    classId: 'ranger', learnLevel: 1, type: 'active',
    targetType: 'self', resourceCost: 20, cooldown: 2,
    damageType: 'pure', element: 'none', multiplier: 0,
    description: '消耗 20 專注；指定方向偵查相鄰房，刷新怪物現況。可重複偵查同一方向，用來確認重生與 approaching 壓力。',
    shortDescription: '偵查指定方向相鄰房並刷新怪物現況。',
    fullDescription: '消耗 20 專注，冷卻 2。指定方向偵查相鄰房，刷新目前怪物資訊；可重複偵查同一方向，用來確認重生、空房與 approaching 壓力。',
    tags: ['support', 'resource'],
    usageContext: 'both',
    special: { scoutDirection: true },
  },

trap: {
    id: 'trap', name: '伏擊陷阱', englishName: 'Ambush Trap',
    classId: 'ranger', learnLevel: 8, type: 'active',
    targetType: 'single_enemy', resourceCost: 35, cooldown: 5,
    damageType: 'physical', element: 'none', multiplier: 1.3,
    description: '消耗 35 專注；指定出口設置 5 tick 陷阱。approaching 怪物抵達該出口時受傷並 arrivalTicks +1，觸發後回復 10 專注。',
    shortDescription: '指定出口陷阱，抵達怪物受傷且 arrivalTicks +1。',
    fullDescription: '消耗 35 專注，冷卻 5。指定出口設置陷阱 5 tick 或觸發 1 次；approaching 怪物抵達該出口時受到 130% 物理傷害、arrivalTicks +1，並回復你 10 專注。',
    effects: [{ type: 'slow', value: 25, duration: 1 }],
    tags: ['damage', 'control', 'interrupt', 'resource', 'physical'],
    usageContext: 'both',
    special: { trapExit: true, interrupt: true, arrivalTicksDelta: 1, resourceGainOnTrigger: 10 },
  },

critical_edge: {
    id: 'critical_edge', name: '多重射擊', englishName: 'Multi Shot',
    classId: 'ranger', learnLevel: 12, type: 'active',
    targetType: 'all_enemies', resourceCost: 30, cooldown: 3,
    damageType: 'physical', element: 'none', multiplier: 0.75,
    description: '消耗 30 專注；攻擊本房或已偵查相鄰房最多 3 隻。對相鄰房施放時，命中怪物 arrivalTicks = 2。',
    shortDescription: '最多 3 目標射擊；隔房命中怪物 arrivalTicks = 2。',
    fullDescription: '消耗 30 專注，冷卻 3。攻擊本房或已偵查相鄰房最多 3 隻，造成 75% 物理傷害；每命中 1 隻回復 2 專注。隔房命中時目標 arrivalTicks = 2。',
    tags: ['damage', 'aoe', 'burst', 'resource', 'physical'],
    special: { maxTargets: 3, resourceGainPerHit: 2, crossRoomRequiresScout: true, arrivalTicks: 2 },
  },

barrage: {
    id: 'barrage', name: '煙霧箭', englishName: 'Smoke Arrow',
    classId: 'ranger', learnLevel: 16, type: 'active',
    targetType: 'all_enemies', resourceCost: 28, cooldown: 5,
    damageType: 'pure', element: 'none', multiplier: 0,
    description: '消耗 28 專注；2 tick 內本房怪物命中 -12%。若指定出口，從該出口抵達的怪物首 tick 命中 -18%。',
    shortDescription: '降低本房或指定出口抵達怪物的命中。',
    fullDescription: '消耗 28 專注，冷卻 5。本房怪物 2 tick 命中 -12%；若指定出口，從該出口抵達的怪物首 tick 命中 -18%。',
    effects: [{ type: 'atk_down', value: 12, duration: 2 }],
    tags: ['control', 'defense', 'resource'],
    special: { exitAccuracyDown: 18 },
  },
};
