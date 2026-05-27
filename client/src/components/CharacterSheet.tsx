import { useGameStore } from '../stores/gameStore';
import {
  DEFAULT_FAITH_ID,
  DEFAULT_RACE_ID,
  FAITH_DEFS,
  GENDER_DEFS,
  ITEM_DEFS,
  RACE_DEFS,
  normalizeGenderId,
  type Character,
  type ClassId,
  type EquipmentSlots,
  type GenderId,
  type InventoryItem,
  type RaceId,
} from '@game/shared';
import type { DerivedStats, TooltipItemData } from '../stores/gameStore';
import { getItemImagePath } from '../utils/assetImages';

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

type CharacterArtClassId = Extract<ClassId, 'swordsman' | 'mage' | 'ranger' | 'priest'>;

const CHARACTER_ART_CLASS_BY_CLASS_ID: Record<string, CharacterArtClassId> = {
  adventurer: 'swordsman',
  swordsman: 'swordsman',
  knight: 'swordsman',
  berserker: 'swordsman',
  sword_saint: 'swordsman',
  mage: 'mage',
  archmage: 'mage',
  warlock: 'mage',
  chronomancer: 'mage',
  ranger: 'ranger',
  marksman: 'ranger',
  assassin: 'ranger',
  beast_master: 'ranger',
  priest: 'priest',
  high_priest: 'priest',
  druid: 'priest',
  inquisitor: 'priest',
};

function getCharacterArtPath(classId: string, genderId: GenderId, raceId: RaceId): string {
  const artClassId = CHARACTER_ART_CLASS_BY_CLASS_ID[classId] ?? 'swordsman';
  return `/mud/images/ui/characters/classes/${artClassId}-${genderId}-${raceId}.png`;
}

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

type CharacterEquipSlotKey = keyof EquipmentSlots | 'rightRing';

const EQUIP_MANNEQUIN_SLOTS: {
  key: CharacterEquipSlotKey;
  label: string;
  shortLabel: string;
  position: string;
  disabled?: boolean;
}[] = [
  { key: 'head', label: '頭部', shortLabel: '頭', position: 'head' },
  { key: 'necklace', label: '項鍊', shortLabel: '鍊', position: 'necklace' },
  { key: 'earring', label: '耳環', shortLabel: '耳', position: 'earring' },
  { key: 'meleeMainHand', label: '近戰主手', shortLabel: '近主', position: 'meleeMainHand' },
  { key: 'meleeOffHand', label: '近戰副手', shortLabel: '近副', position: 'meleeOffHand' },
  { key: 'hands', label: '手套', shortLabel: '手', position: 'hands' },
  { key: 'body', label: '身體', shortLabel: '身', position: 'body' },
  { key: 'rangedMainHand', label: '遠程/施法主手', shortLabel: '遠主', position: 'rangedMainHand' },
  { key: 'rangedOffHand', label: '遠程/施法副手', shortLabel: '遠副', position: 'rangedOffHand' },
  { key: 'ring', label: '左戒指', shortLabel: '左戒', position: 'leftRing' },
  { key: 'belt', label: '腰部', shortLabel: '腰', position: 'belt' },
  { key: 'saddle', label: '馬鞍', shortLabel: '鞍', position: 'saddle' },
  { key: 'rightRing', label: '右戒指', shortLabel: '右戒', position: 'rightRing', disabled: true },
  { key: 'feet', label: '鞋子', shortLabel: '鞋', position: 'feet' },
];

const DERIVED_STAT_LABELS: { key: string; label: string }[] = [
  { key: 'meleeAtk', label: '近戰攻擊' },
  { key: 'rangedAtk', label: '遠程攻擊' },
  { key: 'spellPower', label: '施法強度' },
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
  const inventory = useGameStore((s) => s.inventory);
  const expToNext = useGameStore((s) => s.expToNext);
  const setTooltipItem = useGameStore((s) => s.setTooltipItem);
  const setTooltipPosition = useGameStore((s) => s.setTooltipPosition);

  if (!characterSheetOpen || !character) return null;

  return (
    <CharacterSheetView
      character={character}
      derivedStats={derivedStats}
      equipment={equipment}
      inventory={inventory}
      expToNext={expToNext}
      setTooltipItem={setTooltipItem}
      setTooltipPosition={setTooltipPosition}
      onClose={() => setCharacterSheetOpen(false)}
    />
  );
}

export function CharacterSheetView({
  character,
  derivedStats,
  equipment,
  inventory = [],
  expToNext,
  setTooltipItem = () => undefined,
  setTooltipPosition = () => undefined,
  onClose,
}: {
  character: Character;
  derivedStats: DerivedStats | null;
  equipment: EquipmentSlots | null;
  inventory?: InventoryItem[];
  expToNext: number;
  setTooltipItem?: ReturnType<typeof useGameStore.getState>['setTooltipItem'];
  setTooltipPosition?: ReturnType<typeof useGameStore.getState>['setTooltipPosition'];
  onClose: () => void;
}) {
  const className = CLASS_NAMES[character.classId] ?? character.classId;
  const race = RACE_DEFS[character.raceId ?? DEFAULT_RACE_ID];
  const genderId = normalizeGenderId(character.genderId);
  const gender = GENDER_DEFS[genderId];
  const faith = FAITH_DEFS[character.faithId ?? DEFAULT_FAITH_ID];
  const characterArtPath = getCharacterArtPath(character.classId, genderId, race.id);

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
            <div className="charsheet-mannequin">
              <img
                src={characterArtPath}
                alt=""
                className="charsheet-character-art"
                loading="lazy"
              />
              {EQUIP_MANNEQUIN_SLOTS.map((slot) => (
                <EquipmentSquare
                  key={slot.key}
                  slot={slot.key === 'saddle' && character.classId !== 'knight'
                    ? { ...slot, disabled: true }
                    : slot}
                  equipment={equipment}
                  inventory={inventory}
                  setTooltipItem={setTooltipItem}
                  setTooltipPosition={setTooltipPosition}
                />
              ))}
              {equipment?.accessory && (
                <EquipmentSquare
                  slot={{ key: 'accessory', label: '舊飾品', shortLabel: '飾', position: 'accessory' }}
                  equipment={equipment}
                  inventory={inventory}
                  setTooltipItem={setTooltipItem}
                  setTooltipPosition={setTooltipPosition}
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function EquipmentSquare({
  slot,
  equipment,
  inventory,
  setTooltipItem,
  setTooltipPosition,
}: {
  slot: {
    key: CharacterEquipSlotKey;
    label: string;
    shortLabel: string;
    position: string;
    disabled?: boolean;
  };
  equipment: EquipmentSlots | null;
  inventory: InventoryItem[];
  setTooltipItem: ReturnType<typeof useGameStore.getState>['setTooltipItem'];
  setTooltipPosition: ReturnType<typeof useGameStore.getState>['setTooltipPosition'];
}) {
  const itemId = slot.key === 'rightRing' ? null : equipment?.[slot.key] ?? null;
  const itemDef = itemId ? ITEM_DEFS[itemId] : undefined;
  const inventoryItem = itemId ? inventory.find((item) => item.equipped && item.itemId === itemId) : undefined;
  const imagePath = itemId ? getItemImagePath(itemId) : undefined;
  const title = itemDef
    ? `${slot.label}: ${itemDef.name}`
    : slot.disabled
      ? `${slot.label}: 尚未支援`
      : `${slot.label}: 空`;

  return (
    <div
      className={`charsheet-equip-square charsheet-equip-square-${slot.position} ${itemId ? 'charsheet-equip-square-filled' : ''} ${slot.disabled ? 'charsheet-equip-square-disabled' : ''}`}
      title={title}
      onMouseEnter={(event) => {
        const tooltipItem = buildEquipmentTooltipItem(itemDef, inventoryItem);
        if (!tooltipItem) return;
        setTooltipPosition({ x: event.clientX, y: event.clientY });
        setTooltipItem(tooltipItem);
      }}
      onMouseMove={(event) => {
        if (!itemDef) return;
        setTooltipPosition({ x: event.clientX, y: event.clientY });
      }}
      onMouseLeave={() => setTooltipItem(null)}
    >
      <div className="charsheet-equip-square-label">{slot.shortLabel}</div>
      <div className="charsheet-equip-square-icon">
        {imagePath ? (
          <img src={imagePath} alt="" loading="lazy" />
        ) : (
          <span>{slot.shortLabel}</span>
        )}
      </div>
      <div className={`charsheet-equip-square-name ${itemId ? 'text-text-bright' : 'text-text-dim'}`}>
        {itemDef?.name ?? (slot.disabled ? '未開放' : '空')}
      </div>
    </div>
  );
}

function buildEquipmentTooltipItem(
  itemDef: typeof ITEM_DEFS[string] | undefined,
  inventoryItem: InventoryItem | undefined,
): TooltipItemData | null {
  if (!itemDef) return null;
  return {
    id: itemDef.id,
    name: itemDef.name,
    description: itemDef.description,
    rarity: itemDef.rarity ?? 'common',
    quality: inventoryItem?.quality,
    itemLevel: inventoryItem?.itemLevel,
    droppedBy: inventoryItem?.droppedBy,
    droppedInZone: inventoryItem?.droppedInZone,
    affixes: inventoryItem?.affixes,
    fixedEffects: inventoryItem?.fixedEffects,
    levelReq: itemDef.levelReq,
    stats: itemDef.stats,
    equipSlot: itemDef.equipSlot,
    type: itemDef.type,
    sourceTags: inventoryItem?.sourceTags ?? itemDef.sourceTags,
    bound: false,
  };
}
