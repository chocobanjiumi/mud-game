import { useEffect, useRef } from 'react';
import { useGameStore } from '../stores/gameStore';
import { requestOpenShop } from '../utils/gameActions';
import { getAtlasBackgroundStyle, getStatusEffectDef } from '@game/shared';
import type { ResourceType } from '@game/shared';

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

/** 資源類型對應的顯示設定 */
const RESOURCE_CONFIG: Record<ResourceType, { label: string; color: string; bgColor: string }> = {
  mp: { label: 'MP', color: '#4488ff', bgColor: 'rgba(68, 136, 255, 0.15)' },
  rage: { label: '怒氣', color: '#ff4444', bgColor: 'rgba(255, 68, 68, 0.15)' },
  focus: { label: '專注', color: '#ffcc00', bgColor: 'rgba(255, 204, 0, 0.15)' },
  faith: { label: '信仰', color: '#ccddff', bgColor: 'rgba(204, 221, 255, 0.15)' },
};

function ProgressBar({
  current,
  max,
  barColor,
  bgColor,
  trailColor,
  label,
}: {
  current: number;
  max: number;
  barColor: string;
  bgColor: string;
  trailColor?: string;
  label: string;
}) {
  const pct = max > 0 ? Math.max(0, Math.min(100, (current / max) * 100)) : 0;
  const trailElRef = useRef<HTMLDivElement>(null);
  const rafRef = useRef(0);
  const prevPctRef = useRef(pct);

  useEffect(() => {
    const prev = prevPctRef.current;
    prevPctRef.current = pct;
    if (!trailElRef.current) return;

    if (pct >= prev) {
      trailElRef.current.style.width = `${pct}%`;
      return;
    }
    const el = trailElRef.current;
    const start = prev;
    const diff = start - pct;
    const duration = Math.min(600, 200 + diff * 8);
    const t0 = performance.now();
    el.style.width = `${start}%`;
    const animate = (now: number) => {
      const elapsed = now - t0;
      if (elapsed >= duration) {
        el.style.width = `${pct}%`;
        return;
      }
      el.style.width = `${start - diff * (elapsed / duration)}%`;
      rafRef.current = requestAnimationFrame(animate);
    };
    rafRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(rafRef.current);
  }, [pct]);

  return (
    <div className="flex items-center gap-2 text-xs">
      <span className="w-8 text-right text-text-dim shrink-0">{label}</span>
      <div className={`flex-1 h-3 rounded-sm overflow-hidden relative ${bgColor}`}>
        {trailColor && (
          <div ref={trailElRef} className={`h-full rounded-sm absolute inset-0 ${trailColor}`} />
        )}
        <div
          className={`h-full rounded-sm absolute inset-0 bar-snap ${barColor}`}
          style={{ width: `${pct}%` }}
        />
      </div>
      <span className="w-20 text-right text-text-bright tabular-nums shrink-0">
        {current}/{max}
      </span>
    </div>
  );
}

const RESOURCE_TRAIL_COLORS: Record<ResourceType, string> = {
  mp: 'rgba(68, 136, 255, 0.45)',
  rage: 'rgba(255, 68, 68, 0.45)',
  focus: 'rgba(255, 204, 0, 0.45)',
  faith: 'rgba(204, 221, 255, 0.45)',
};

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
  const trailElRef = useRef<HTMLDivElement>(null);
  const rafRef = useRef(0);
  const prevPctRef = useRef(pct);

  useEffect(() => {
    const prev = prevPctRef.current;
    prevPctRef.current = pct;
    if (!trailElRef.current) return;

    if (pct >= prev) {
      trailElRef.current.style.width = `${pct}%`;
      return;
    }
    const el = trailElRef.current;
    const start = prev;
    const diff = start - pct;
    const duration = Math.min(600, 200 + diff * 8);
    const t0 = performance.now();
    el.style.width = `${start}%`;
    const animate = (now: number) => {
      const elapsed = now - t0;
      if (elapsed >= duration) {
        el.style.width = `${pct}%`;
        return;
      }
      el.style.width = `${start - diff * (elapsed / duration)}%`;
      rafRef.current = requestAnimationFrame(animate);
    };
    rafRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(rafRef.current);
  }, [pct]);

  const trailColor = RESOURCE_TRAIL_COLORS[resourceType] ?? RESOURCE_TRAIL_COLORS.mp;

  return (
    <div className="flex items-center gap-2 text-xs">
      <span
        className="w-8 text-right shrink-0 font-medium"
        style={{ color: config.color }}
      >
        {config.label}
      </span>
      <div
        className="flex-1 h-3 rounded-sm overflow-hidden relative"
        style={{ backgroundColor: config.bgColor }}
      >
        <div
          ref={trailElRef}
          className="h-full rounded-sm absolute inset-0"
          style={{ backgroundColor: trailColor }}
        />
        <div
          className="h-full bar-snap rounded-sm absolute inset-0"
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
      onClick={requestOpenShop}
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

export default function StatusBar({ compact = false }: { compact?: boolean }) {
  const character = useGameStore((s) => s.character);
  const expToNext = useGameStore((s) => s.expToNext);
  const activeEffects = useGameStore((s) => s.activeEffects);

  if (!character) return null;

  const className = CLASS_NAMES[character.classId] ?? character.classId;

  if (compact) {
    return (
      <div className="compact-status-bar">
        <div className="compact-status-head">
          <div className="min-w-0">
            <div className="truncate text-xs font-bold text-text-terminal">{character.name}</div>
            <div className="truncate text-[10px] text-text-dim">{className} Lv.{character.level}</div>
          </div>
          <div className="flex shrink-0 items-center gap-1">
            {character.mounted && (
              <span className="rounded border border-text-amber/40 px-1 py-0.5 text-[10px] text-text-amber">
                騎乘
              </span>
            )}
            <AudioSettingsButton />
            <ArinovaTokenBadge />
          </div>
        </div>

        <div className="space-y-1">
          <ProgressBar
            current={character.hp}
            max={character.maxHp}
            barColor="bg-hp-bar"
            bgColor="bg-hp-bg"
            trailColor="bg-hp-trail"
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

        {activeEffects.length > 0 && (
          <div className="compact-status-effects">
            {activeEffects.slice(0, 4).map((effect, i) => {
              const def = getStatusEffectDef(effect.type);
              const isBuff = def.polarity === 'positive';
              return (
                <span
                  key={`${effect.type}-${i}`}
                  className={`compact-status-effect ${
                    isBuff ? 'bg-combat-buff/20 text-combat-buff' : 'bg-combat-debuff/20 text-combat-debuff'
                  }`}
                  title={`${def.name} (${effect.remainingDuration}回合) · ${def.description}`}
                >
                  {def.icon && <i aria-hidden="true" style={getAtlasBackgroundStyle(def.icon, 12)} />}
                  <span className="truncate">{def.name}</span>
                </span>
              );
            })}
            {activeEffects.length > 4 && (
              <span className="rounded bg-bg-primary/60 px-1 text-[10px] text-text-dim">+{activeEffects.length - 4}</span>
            )}
          </div>
        )}
      </div>
    );
  }

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
          {character.mounted && (
            <span className="rounded border border-text-amber/40 px-1.5 py-0.5 text-[10px] text-text-amber">
              騎乘
            </span>
          )}
          {/* Active effects */}
          {activeEffects.length > 0 && (
            <div className="flex items-center gap-1">
              {activeEffects.map((effect, i) => {
                const def = getStatusEffectDef(effect.type);
                const isBuff = def.polarity === 'positive';
                return (
                  <span
                    key={`${effect.type}-${i}`}
                    className={`px-1 rounded text-[10px] flex items-center gap-1 ${
                      isBuff ? 'bg-combat-buff/20 text-combat-buff' : 'bg-combat-debuff/20 text-combat-debuff'
                    }`}
                    title={`${def.name} (${effect.remainingDuration}回合) · ${def.description}`}
                  >
                    {def.icon && <i aria-hidden="true" style={getAtlasBackgroundStyle(def.icon, 14)} />}
                    {def.name}
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
        trailColor="bg-hp-trail"
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
