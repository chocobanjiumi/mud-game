import { useGameStore } from '../stores/gameStore';
import type { ResourceType } from '@game/shared';

const CLASS_NAMES: Record<string, string> = {
  adventurer: '冒險者',
  swordsman: '劍士',
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

/** 資源類型對應的顯示設定 */
const RESOURCE_CONFIG: Record<ResourceType, { label: string; color: string; bgColor: string }> = {
  mp: { label: 'MP', color: '#4488ff', bgColor: 'rgba(68, 136, 255, 0.15)' },
  rage: { label: '怒氣', color: '#ff4444', bgColor: 'rgba(255, 68, 68, 0.15)' },
  energy: { label: '能量', color: '#ffcc00', bgColor: 'rgba(255, 204, 0, 0.15)' },
  faith: { label: '信仰', color: '#ccddff', bgColor: 'rgba(204, 221, 255, 0.15)' },
};

function ProgressBar({
  current,
  max,
  barColor,
  bgColor,
  label,
}: {
  current: number;
  max: number;
  barColor: string;
  bgColor: string;
  label: string;
}) {
  const pct = max > 0 ? Math.max(0, Math.min(100, (current / max) * 100)) : 0;
  return (
    <div className="flex items-center gap-2 text-xs">
      <span className="w-8 text-right text-text-dim shrink-0">{label}</span>
      <div className={`flex-1 h-3 rounded-sm overflow-hidden ${bgColor}`}>
        <div
          className={`h-full bar-transition rounded-sm ${barColor}`}
          style={{ width: `${pct}%` }}
        />
      </div>
      <span className="w-20 text-right text-text-bright tabular-nums shrink-0">
        {current}/{max}
      </span>
    </div>
  );
}

/** 資源條 - 使用 inline style 顏色以支援職業特定色彩 */
function ResourceBar({
  current,
  max,
  resourceType,
}: {
  current: number;
  max: number;
  resourceType: ResourceType;
}) {
  const config = RESOURCE_CONFIG[resourceType] ?? RESOURCE_CONFIG.mp;
  const pct = max > 0 ? Math.max(0, Math.min(100, (current / max) * 100)) : 0;

  return (
    <div className="flex items-center gap-2 text-xs">
      <span
        className="w-8 text-right shrink-0 font-medium"
        style={{ color: config.color }}
      >
        {config.label}
      </span>
      <div
        className="flex-1 h-3 rounded-sm overflow-hidden"
        style={{ backgroundColor: config.bgColor }}
      >
        <div
          className="h-full bar-transition rounded-sm"
          style={{ width: `${pct}%`, backgroundColor: config.color }}
        />
      </div>
      <span className="w-20 text-right text-text-bright tabular-nums shrink-0">
        {current}/{max}
      </span>
    </div>
  );
}

function AudioSettingsButton() {
  const audioSettingsOpen = useGameStore((s) => s.audioSettingsOpen);
  const setAudioSettingsOpen = useGameStore((s) => s.setAudioSettingsOpen);
  const audioEnabled = useGameStore((s) => s.audioEnabled);

  return (
    <button
      type="button"
      onClick={() => setAudioSettingsOpen(!audioSettingsOpen)}
      className="flex items-center gap-1 px-1.5 py-0.5 rounded border border-border-dim/50 bg-bg-primary/30 hover:bg-bg-tertiary transition-colors cursor-pointer"
      title="音效設定"
    >
      <span className="text-xs">{audioEnabled ? '🔊' : '🔇'}</span>
    </button>
  );
}

function ArinovaTokenBadge() {
  const balance = useGameStore((s) => s.arinovaTokenBalance);

  if (balance === null) return null;

  return (
    <button
      type="button"
      onClick={() => {
        // Dispatch a custom event to trigger shop open via WebSocket
        window.dispatchEvent(new CustomEvent('open-shop'));
      }}
      className="flex items-center gap-1 px-2 py-0.5 rounded border border-yellow-600/40 bg-yellow-900/20 hover:bg-yellow-900/40 transition-colors cursor-pointer"
      title="Arinova Tokens - 點擊開啟商店 (B)"
    >
      <span className="text-xs">🪙</span>
      <span className="text-xs font-bold tabular-nums" style={{ color: '#f5c542' }}>
        {balance.toLocaleString()} AT
      </span>
    </button>
  );
}

export default function StatusBar() {
  const character = useGameStore((s) => s.character);
  const expToNext = useGameStore((s) => s.expToNext);
  const activeEffects = useGameStore((s) => s.activeEffects);

  if (!character) return null;

  const className = CLASS_NAMES[character.classId] ?? character.classId;

  return (
    <div className="bg-bg-secondary border-b border-border-dim px-3 py-2 space-y-1">
      {/* Top row: name, class, level + Arinova Token balance */}
      <div className="flex items-center justify-between text-xs">
        <div className="flex items-center gap-2">
          <span className="text-text-terminal font-bold text-glow-subtle">
            {character.name}
          </span>
          <span className="text-text-dim">
            {className} Lv.{character.level}
          </span>
        </div>

        <div className="flex items-center gap-2">
          {/* Active effects */}
          {activeEffects.length > 0 && (
            <div className="flex items-center gap-1">
              {activeEffects.map((effect, i) => {
                const isBuff = effect.type.includes('up') || effect.type === 'regen' ||
                  effect.type === 'mana_regen' || effect.type === 'shield';
                return (
                  <span
                    key={`${effect.type}-${i}`}
                    className={`px-1 rounded text-[10px] ${
                      isBuff ? 'bg-combat-buff/20 text-combat-buff' : 'bg-combat-debuff/20 text-combat-debuff'
                    }`}
                    title={`${effect.type} (${effect.remainingDuration}回合)`}
                  >
                    {effect.type.replace(/_/g, ' ')}
                  </span>
                );
              })}
            </div>
          )}

          {/* Audio settings */}
          <AudioSettingsButton />

          {/* Arinova Token balance */}
          <ArinovaTokenBadge />
        </div>
      </div>

      {/* Bars */}
      <ProgressBar
        current={character.hp}
        max={character.maxHp}
        barColor="bg-hp-bar"
        bgColor="bg-hp-bg"
        label="HP"
      />
      <ResourceBar
        current={character.resource}
        max={character.maxResource}
        resourceType={character.resourceType}
      />
      <ProgressBar
        current={character.exp}
        max={expToNext}
        barColor="bg-exp-bar"
        bgColor="bg-exp-bg"
        label="EXP"
      />
    </div>
  );
}
