import { useState, type MouseEvent, type ReactNode } from 'react';
import { createPortal } from 'react-dom';
import { getAtlasBackgroundStyle, getStatusEffectDef } from '@game/shared';
import type { CombatantState } from '@game/shared';

interface MonsterHoverCardProps {
  monster: CombatantState;
  displayName?: string;
  children: ReactNode;
}

function formatEffect(effect: CombatantState['activeEffects'][number]): string {
  const parts = [
    getStatusEffectDef(effect.type).name,
    `${effect.remainingDuration}T`,
  ];
  if (effect.value !== 0) parts.push(`${effect.value > 0 ? '+' : ''}${effect.value}`);
  if (effect.tickDamage) parts.push(`傷害 ${effect.tickDamage}/T`);
  if (effect.tickHealing) parts.push(`治療 ${effect.tickHealing}/T`);
  return parts.join(' · ');
}

export default function MonsterHoverCard({ monster, displayName, children }: MonsterHoverCardProps) {
  const [position, setPosition] = useState<{ x: number; y: number } | null>(null);
  const hpPct = Math.max(0, Math.min(100, (monster.hp / Math.max(1, monster.maxHp)) * 100));
  const mpPct = Math.max(0, Math.min(100, (monster.mp / Math.max(1, monster.maxMp)) * 100));
  const approachingTicks = monster.arrivalTicksRemaining ?? 0;

  const updatePosition = (event: MouseEvent) => {
    if (typeof window === 'undefined') return;
    setPosition({
      x: Math.min(event.clientX + 14, window.innerWidth - 294),
      y: Math.max(12, event.clientY - 12),
    });
  };

  return (
    <span
      className="monster-hover-anchor"
      onMouseEnter={updatePosition}
      onMouseMove={updatePosition}
      onMouseLeave={() => setPosition(null)}
    >
      {children}
      {position && typeof document !== 'undefined' && createPortal(
        <div className="monster-tooltip-card" style={{ left: position.x, top: position.y }} role="tooltip">
          <div className="monster-tooltip-head">
            <div>
              <div className="monster-tooltip-title">{displayName ?? monster.name}</div>
              <div className="monster-tooltip-subtitle">
                Lv.{monster.level}
                {monster.monsterBehavior ? ` · ${monster.monsterBehavior}` : ''}
                {monster.currentMonsterPhase ? ` · Phase ${monster.currentMonsterPhase}` : ''}
              </div>
            </div>
            {monster.isApproaching && <span className="monster-tooltip-badge">逼近 {approachingTicks}T</span>}
            {monster.pendingTelegraph && <span className="monster-tooltip-badge monster-tooltip-danger">預兆</span>}
          </div>

          <div className="monster-tooltip-bars">
            <div className="monster-tooltip-bar">
              <span>HP</span>
              <div><i style={{ width: `${hpPct}%` }} /></div>
              <b>{monster.hp}/{monster.maxHp}</b>
            </div>
            {monster.maxMp > 0 && (
              <div className="monster-tooltip-bar monster-tooltip-mp">
                <span>MP</span>
                <div><i style={{ width: `${mpPct}%` }} /></div>
                <b>{monster.mp}/{monster.maxMp}</b>
              </div>
            )}
          </div>

          {monster.pendingTelegraph && (
            <div className="monster-tooltip-section">
              <strong>預備動作</strong>
              <span>{monster.pendingTelegraph.message}</span>
            </div>
          )}

          <div className="monster-tooltip-section">
            <strong>狀態</strong>
            {monster.activeEffects.length > 0 ? (
              <div className="monster-tooltip-effects">
                {monster.activeEffects.map((effect, index) => (
                  <span key={`${effect.type}-${index}`} className={`monster-effect-${getStatusEffectDef(effect.type).category}`}>
                    {getStatusEffectDef(effect.type).icon && (
                      <i
                        aria-hidden="true"
                        style={getAtlasBackgroundStyle(getStatusEffectDef(effect.type).icon!, 16)}
                      />
                    )}
                    {formatEffect(effect)}
                  </span>
                ))}
              </div>
            ) : (
              <span>無狀態效果</span>
            )}
          </div>
        </div>,
        document.body,
      )}
    </span>
  );
}
