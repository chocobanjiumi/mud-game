import { useGameStore } from '../stores/gameStore';
import { DEFAULT_FAITH_ID, DEFAULT_GENDER_ID, DEFAULT_RACE_ID, FAITH_DEFS, GENDER_DEFS, RACE_DEFS, type Character, type EquipmentSlots } from '@game/shared';
import type { DerivedStats } from '../stores/gameStore';

function sendCommand(command: string, echo?: string) {
  window.dispatchEvent(new CustomEvent('terminal-command', { detail: { command, echo } }));
}

const CLASS_NAMES: Record<string, string> = {
  adventurer: '冒險者',
  swordsman: '戰士',
  mage: '法師',
  ranger: '遊俠',
  priest: '祭司',
  knight: '騎士',
  berserker: '狂戰士',
  sword_saint: '劍聖',
  archmage: '大魔導師',
  warlock: '術士',
  chronomancer: '時空法師',
  marksman: '神射手',
  assassin: '刺客',
  beast_master: '獸王',
  high_priest: '大祭司',
  druid: '德魯伊',
  inquisitor: '審判者',
};

const STAT_LABELS: { key: string; label: string; color: string }[] = [
  { key: 'str', label: 'STR 力量', color: '#ff6666' },
  { key: 'int', label: 'INT 智力', color: '#6688ff' },
  { key: 'dex', label: 'DEX 敏捷', color: '#66ff88' },
  { key: 'vit', label: 'VIT 體力', color: '#ffaa44' },
  { key: 'luk', label: 'LUK 幸運', color: '#ffcc00' },
];

const STAT_HELP: Record<string, string> = {
  str: '提高物理攻擊',
  int: '提高魔攻與 MP',
  dex: '提高命中與迴避',
  vit: '提高 HP 與防禦',
  luk: '提高暴擊與掉落表現',
};

const EQUIP_SLOTS: { key: string; label: string; icon: string }[] = [
  { key: 'head', label: '頭部', icon: '[頭]' },
  { key: 'weapon', label: '武器', icon: '[武]' },
  { key: 'body', label: '身體', icon: '[甲]' },
  { key: 'hands', label: '手部', icon: '[手]' },
  { key: 'feet', label: '足部', icon: '[靴]' },
  { key: 'ring', label: '戒指', icon: '[戒]' },
  { key: 'earring', label: '耳環', icon: '[耳]' },
  { key: 'belt', label: '腰帶', icon: '[帶]' },
  { key: 'necklace', label: '項鍊', icon: '[鍊]' },
];

const DERIVED_STAT_LABELS: { key: string; label: string }[] = [
  { key: 'atk', label: '攻擊力' },
  { key: 'matk', label: '魔攻力' },
  { key: 'def', label: '防禦力' },
  { key: 'mdef', label: '魔防力' },
  { key: 'hitRate', label: '命中率' },
  { key: 'dodgeRate', label: '迴避率' },
  { key: 'critRate', label: '暴擊率' },
  { key: 'critDamage', label: '暴傷倍率' },
];

export default function CharacterSheet() {
  const characterSheetOpen = useGameStore((s) => s.characterSheetOpen);
  const setCharacterSheetOpen = useGameStore((s) => s.setCharacterSheetOpen);
  const character = useGameStore((s) => s.character);
  const derivedStats = useGameStore((s) => s.derivedStats);
  const equipment = useGameStore((s) => s.equipment);
  const expToNext = useGameStore((s) => s.expToNext);

  if (!characterSheetOpen || !character) return null;

  return (
    <CharacterSheetView
      character={character}
      derivedStats={derivedStats}
      equipment={equipment}
      expToNext={expToNext}
      onClose={() => setCharacterSheetOpen(false)}
    />
  );
}

export function CharacterSheetView({
  character,
  derivedStats,
  equipment,
  expToNext,
  onClose,
}: {
  character: Character;
  derivedStats: DerivedStats | null;
  equipment: EquipmentSlots | null;
  expToNext: number;
  onClose: () => void;
}) {
  const className = CLASS_NAMES[character.classId] ?? character.classId;
  const race = RACE_DEFS[character.raceId ?? DEFAULT_RACE_ID];
  const gender = GENDER_DEFS[character.genderId ?? DEFAULT_GENDER_ID];
  const faith = FAITH_DEFS[character.faithId ?? DEFAULT_FAITH_ID];
  const visibleEquipSlots = equipment?.accessory
    ? [...EQUIP_SLOTS, { key: 'accessory', label: '舊飾品', icon: '[飾]' }]
    : EQUIP_SLOTS;

  return (
    <div className="charsheet-overlay" onClick={onClose}>
      <div className="charsheet-modal" onClick={(e) => e.stopPropagation()}>
        {/* Header */}
        <div className="charsheet-header">
          <span className="text-sm font-bold text-text-terminal">角色資訊</span>
          <button
            onClick={onClose}
            className="text-text-dim hover:text-text-bright text-xs cursor-pointer"
          >
            [關閉] C
          </button>
        </div>

        <div className="charsheet-body">
          {/* Left: Stats */}
          <div className="charsheet-stats-col">
            {/* Name & Class */}
            <div className="mb-3">
              <div className="text-text-terminal font-bold text-glow-subtle">{character.name}</div>
              <div className="text-xs text-text-dim">
                {className} Lv.{character.level}
              </div>
              <div className="text-[10px] text-text-dim mt-1">
                {race.name} / {gender.name} / {faith.name}
              </div>
              <div className="text-[10px] text-text-dim mt-1">
                EXP: {character.exp}/{expToNext} | 金幣: {character.gold.toLocaleString()}
              </div>
              {character.freePoints > 0 && (
                <div className="text-xs text-text-amber mt-1">
                  未分配點數: {character.freePoints}
                </div>
              )}
            </div>

            <div className="text-[10px] text-text-dim uppercase tracking-wider mb-1 mt-3">出身與信仰</div>
            <div className="space-y-1 text-xs">
              <div className="rounded border border-border-dim bg-bg-primary p-2">
                <div className="text-text-terminal">{race.passiveName}</div>
                <div className="text-text-dim leading-5">{race.passiveDescription}</div>
              </div>
              <div className="rounded border border-border-dim bg-bg-primary p-2">
                <div className="text-text-terminal">{faith.passiveName}</div>
                <div className="text-text-dim leading-5">{faith.passiveDescription}</div>
                <div className="mt-1 text-text-amber">恩寵 {character.faithFavor ?? 0}/100</div>
              </div>
            </div>

            {/* Base Stats */}
            <div className="text-[10px] text-text-dim uppercase tracking-wider mb-1">基礎素質</div>
            <div className="charsheet-stat-grid">
              {STAT_LABELS.map((stat) => {
                const val = character.stats[stat.key as keyof typeof character.stats] ?? 0;
                const canAllocate = character.freePoints > 0;
                const canAllocateFive = character.freePoints >= 5;
                return (
                  <div key={stat.key} className="charsheet-stat-row">
                    <div className="min-w-0">
                      <span className="charsheet-stat-label" style={{ color: stat.color }}>
                        {stat.label}
                      </span>
                      <span className="charsheet-stat-help">{STAT_HELP[stat.key]}</span>
                    </div>
                    <div className="charsheet-stat-control">
                      <span className="charsheet-stat-value">{val}</span>
                      {character.freePoints > 0 && (
                        <span className="charsheet-stat-buttons">
                          <button
                            type="button"
                            className="charsheet-stat-button"
                            disabled={!canAllocate}
                            onClick={() => sendCommand(`allocate ${stat.key} 1`, `${stat.label} +1`)}
                          >
                            +1
                          </button>
                          <button
                            type="button"
                            className="charsheet-stat-button"
                            disabled={!canAllocateFive}
                            onClick={() => sendCommand(`allocate ${stat.key} 5`, `${stat.label} +5`)}
                          >
                            +5
                          </button>
                        </span>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Derived Stats */}
            {derivedStats && (
              <>
                <div className="text-[10px] text-text-dim uppercase tracking-wider mb-1 mt-3">戰鬥屬性</div>
                <div className="charsheet-derived-grid">
                  {DERIVED_STAT_LABELS.map((stat) => {
                    const val = derivedStats[stat.key as keyof typeof derivedStats] ?? 0;
                    const isPercent = ['hitRate', 'dodgeRate', 'critRate', 'critDamage'].includes(stat.key);
                    return (
                      <div key={stat.key} className="charsheet-derived-row">
                        <span className="text-text-dim">{stat.label}</span>
                        <span className="text-text-bright tabular-nums">
                          {isPercent ? `${(val * 100).toFixed(1)}%` : val}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </>
            )}

            {/* HP/MP/Resource */}
            <div className="text-[10px] text-text-dim uppercase tracking-wider mb-1 mt-3">狀態</div>
            <div className="space-y-0.5 text-xs">
              <div className="flex justify-between">
                <span className="text-hp-bar">HP</span>
                <span className="text-text-bright tabular-nums">{character.hp}/{character.maxHp}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-mp-bar">資源</span>
                <span className="text-text-bright tabular-nums">{character.resource}/{character.maxResource}</span>
              </div>
            </div>
          </div>

          {/* Right: Equipment */}
          <div className="charsheet-equip-col">
            <div className="text-[10px] text-text-dim uppercase tracking-wider mb-2">裝備欄位</div>
            <div className="charsheet-equip-layout">
              {visibleEquipSlots.map((slot) => {
                const equipped = equipment?.[slot.key as keyof typeof equipment] ?? null;
                return (
                  <div
                    key={slot.key}
                    className={`charsheet-equip-slot ${equipped ? 'charsheet-equip-slot-filled' : ''}`}
                    title={equipped ? `${slot.label}: ${equipped}` : `${slot.label}: 空`}
                  >
                    <div className="charsheet-equip-icon">{slot.icon}</div>
                    <div className="charsheet-equip-info">
                      <div className="text-[10px] text-text-dim">{slot.label}</div>
                      <div className={`text-xs truncate ${equipped ? 'text-text-bright' : 'text-text-dim'}`}>
                        {equipped ?? '-- 空 --'}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
