import type { RawSkillDef } from './types.js';

export const BEAST_MASTER_SKILL_DEFS: Record<string, RawSkillDef> = {
// ════════════════════════════════════════════
  //  馴獸師 (Lv 20+) - 遊俠系二轉・寵物捕捉
  // ════════════════════════════════════════════

  beast_instinct: {
    id: 'beast_instinct', name: '馴獸本能', englishName: 'Beast Instinct',
    classId: 'beast_master', learnLevel: 20, type: 'passive',
    targetType: 'self', resourceCost: 0, cooldown: 0,
    damageType: 'pure', element: 'none', multiplier: 0,
    description: '馴獸師的核心系統。可捕捉 beast 型怪物作為寵物。寵物是獨立戰鬥實體，有自己的 HP 和行動，技能取決於捕捉的怪物種類。同時只能攜帶 1 隻寵物。',
    shortDescription: '可捕捉 beast 怪物當寵物。寵物獨立戰鬥，技能取決於怪物種類。同時 1 隻。',
    fullDescription: '被動。定義馴獸系統：可捕捉 beast 型怪物為寵物。寵物有自己的 HP（原怪物的 80%）和行動，技能保留原怪物的技能。同時只能攜帶 1 隻寵物。寵物死亡需 10 tick 後才能重新召喚。',
    tags: ['passive', 'summon'],
    special: { petSystem: true, petCapture: true, maxPets: 1, petDeathCooldown: 10 },
  },

capture: {
    id: 'capture', name: '捕捉', englishName: 'Capture',
    classId: 'beast_master', learnLevel: 20, type: 'active',
    targetType: 'single_enemy', resourceCost: 25, cooldown: 3,
    damageType: 'pure', element: 'none', multiplier: 0,
    description: '對 beast 型怪物使用。當目標 HP 低於 30% 時可以嘗試捕捉，成功後成為你的寵物。非 beast 型怪物無法捕捉。',
    shortDescription: 'beast 型怪物 HP ≤ 30% 時捕捉為寵物。非 beast 無效。',
    fullDescription: '消耗 25 Focus，冷卻 3。對 beast 型怪物使用。HP ≤ 30% 時捕捉成功，成為你的寵物（替換現有寵物）。非 beast 型無法捕捉。失敗時不消耗冷卻。',
    tags: ['control', 'summon'],
    special: { captureTarget: 'beast', captureThreshold: 0.3 },
  },

pet_command: {
    id: 'pet_command', name: '寵物指令', englishName: 'Pet Command',
    classId: 'beast_master', learnLevel: 20, type: 'active',
    targetType: 'self', resourceCost: 0, cooldown: 1,
    damageType: 'pure', element: 'none', multiplier: 0,
    description: '指揮寵物的行為模式。攻擊模式下寵物主動出擊；防守模式替你擋傷；跟隨模式不戰鬥保持安全。寵物的攻擊技能取決於捕捉的怪物種類。',
    shortDescription: '切換寵物模式：攻擊（主動出擊）/ 防守（替你擋 30% 傷害）/ 跟隨（安全模式）。',
    fullDescription: '消耗 0 Focus，冷卻 1。切換寵物行為模式：攻擊（每 tick 主動攻擊敵人，使用原怪物技能）/ 防守（替馴獸師承受 30% 傷害）/ 跟隨（不戰鬥，安全模式）。',
    tags: ['support', 'defense'],
    special: { petMode: true, modes: ['attack', 'defend', 'follow'] },
  },

summon_pet: {
    id: 'summon_pet', name: '寵物召喚', englishName: 'Summon Pet',
    classId: 'beast_master', learnLevel: 20, type: 'active',
    targetType: 'self', resourceCost: 10, cooldown: 5,
    damageType: 'pure', element: 'none', multiplier: 0,
    usageContext: 'both',
    description: '召喚你的寵物到身邊，或解散寵物。寵物死亡後需等待 10 tick 才能重新召喚。',
    shortDescription: '召喚/解散寵物。死亡後 10 tick 才能重召。',
    fullDescription: '消耗 10 Focus，冷卻 5。召喚或解散寵物。寵物死亡後需等 10 tick 才能重新召喚。',
    tags: ['summon', 'support'],
    special: { summonPet: true },
  },

taming_mastery: {
    id: 'taming_mastery', name: '馴化強化', englishName: 'Taming Mastery',
    classId: 'beast_master', learnLevel: 25, type: 'passive',
    targetType: 'self', resourceCost: 0, cooldown: 0,
    damageType: 'pure', element: 'none', multiplier: 0,
    description: '馴獸技巧的精進讓寵物更加強壯，捕捉也變得更加容易。',
    shortDescription: '寵物 HP +30%、攻擊 +20%。捕捉門檻提升至 HP ≤ 40%。',
    fullDescription: '被動。寵物 HP +30%、攻擊傷害 +20%。捕捉成功的 HP 門檻從 ≤ 30% 提升至 ≤ 40%。',
    tags: ['passive', 'buff', 'summon'],
    special: { petHpBonus: 30, petDamageBonus: 20, captureThreshold: 0.4 },
  },

wild_resonance: {
    id: 'wild_resonance', name: '野性共鳴', englishName: 'Wild Resonance',
    classId: 'beast_master', learnLevel: 29, type: 'active',
    targetType: 'self', resourceCost: 18, cooldown: 6,
    damageType: 'pure', element: 'none', multiplier: 0,
    description: '與寵物建立深層心靈連結。共鳴期間你和寵物共享增益 buff——寵物暴擊時你也暴擊，你受到治療時寵物也恢復。',
    shortDescription: '3 tick 與寵物共享增益 buff。寵物暴擊你也暴擊。',
    fullDescription: '消耗 18 Focus，冷卻 6。3 tick 你和寵物共享所有增益 buff。寵物暴擊時你的下次攻擊也必暴。你受到治療時寵物恢復等量 HP。',
    tags: ['support', 'buff'],
    special: { petResonance: true, duration: 3 },
  },

pet_charge: {
    id: 'pet_charge', name: '寵物衝鋒', englishName: 'Pet Charge',
    classId: 'beast_master', learnLevel: 33, type: 'active',
    targetType: 'single_enemy', resourceCost: 20, cooldown: 5,
    damageType: 'physical', element: 'none', multiplier: 2.0,
    description: '命令寵物全力衝向目標，以猛獸的體重和速度造成毀滅性撞擊。',
    shortDescription: '命令寵物衝鋒，200% 物理 + 暈眩 1 tick。',
    fullDescription: '消耗 20 Focus，冷卻 5。命令寵物對單體衝鋒造成 200% 物理傷害 + 暈眩 1 tick。需要寵物存活且在本房。',
    effects: [{ type: 'stun', value: 1, duration: 1 }],
    tags: ['damage', 'single_target', 'control', 'physical'],
    special: { petAction: true },
  },

pet_dispatch: {
    id: 'pet_dispatch', name: '寵物派遣', englishName: 'Pet Dispatch',
    classId: 'beast_master', learnLevel: 37, type: 'active',
    targetType: 'self', resourceCost: 12, cooldown: 4,
    damageType: 'pure', element: 'none', multiplier: 0,
    description: '將寵物派到相鄰房間自動戰鬥。寵物在那邊充當你的眼睛和爪牙，偵查情報並攻擊敵人。隨時可召回。',
    shortDescription: '派寵物到相鄰房間自動戰鬥+偵查。可隨時召回。',
    fullDescription: '消耗 12 Focus，冷卻 4。將寵物派遣到指定相鄰房間。寵物在該房間自動戰鬥並提供視野資訊。可再次使用召回。',
    tags: ['support', 'summon'],
    special: { petDispatch: true, crossRoom: true },
  },

beast_king_roar: {
    id: 'beast_king_roar', name: '獸王咆哮', englishName: 'Beast King Roar',
    classId: 'beast_master', learnLevel: 45, type: 'active',
    targetType: 'all_enemies', resourceCost: 25, cooldown: 8,
    damageType: 'physical', element: 'none', multiplier: 1.5,
    description: '你和寵物同時發出震撼戰場的咆哮。敵人在雙重威壓下陷入恐懼，施法被打斷，防護被震碎。',
    shortDescription: '你+寵物同時 AoE。150% 物理 + 恐懼 1 tick + 打斷 + 驅散。',
    fullDescription: '消耗 25 Focus，冷卻 8。你和寵物同時對本房所有敵人造成 150% 物理傷害 + 恐懼 1 tick + 打斷施法 + 驅散護盾。需要寵物存活。',
    effects: [{ type: 'fear', value: 1, duration: 1 }],
    tags: ['damage', 'aoe', 'control', 'interrupt', 'physical'],
    special: { castTime: 1, petAction: true, interrupt: true, dispelShield: true },
  },

beast_fusion: {
    id: 'beast_fusion', name: '野獸融合', englishName: 'Beast Fusion',
    classId: 'beast_master', learnLevel: 50, type: 'active',
    targetType: 'self', resourceCost: 35, cooldown: 12,
    damageType: 'pure', element: 'none', multiplier: 0,
    description: '馴獸師的終極奧義——與寵物靈魂融合。6 tick 內獲得寵物的全部能力和屬性加成，攻擊傷害翻倍，擁有寵物的所有技能。融合結束後寵物消失，需重新召喚。',
    shortDescription: '6 tick 與寵物融合：獲得寵物全能力、攻擊×2。結束後寵物消失需重召。',
    fullDescription: '消耗 35 Focus，冷卻 12。6 tick 與寵物靈魂融合：獲得寵物全部能力和屬性加成，攻擊傷害翻倍，可使用寵物技能。融合結束後寵物消失，需重新召喚。',
    effects: [{ type: 'atk_up', value: 100, duration: 6 }],
    tags: ['buff', 'burst', 'summon'],
    special: { petFusion: true, duration: 6, attackMultiplier: 2, petDisappearsAfter: true },
  },
};
