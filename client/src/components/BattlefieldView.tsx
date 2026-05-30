import { useGameStore } from '../stores/gameStore';
import type { CombatantState } from '@game/shared';

function HpBar({ current, max, color = 'bg-combat-heal' }: { current: number; max: number; color?: string }) {
  const pct = max > 0 ? Math.max(0, Math.min(100, (current / max) * 100)) : 0;
  return (
    <div className="h-2 w-full rounded-sm bg-bg-primary/60">
      <div className={`h-full rounded-sm transition-all ${color}`} style={{ width: `${pct}%` }} />
    </div>
  );
}

function ThreatIndicator({ threat, maxThreat }: { threat: number; maxThreat: number }) {
  if (maxThreat <= 0) return null;
  const pct = Math.min(100, (threat / maxThreat) * 100);
  return (
    <div className="h-1 w-full rounded-sm bg-bg-primary/40">
      <div className="h-full rounded-sm bg-text-amber transition-all" style={{ width: `${pct}%` }} />
    </div>
  );
}

function PlayerCard({ c, maxThreat }: { c: CombatantState; maxThreat: number }) {
  return (
    <div className={`flex-1 min-w-0 rounded border px-2 py-1.5 ${c.isDead ? 'border-red-500/40 bg-red-500/5 opacity-50' : 'border-border-dim bg-bg-primary/40'}`}>
      <div className="flex items-center justify-between gap-1">
        <span className="truncate text-xs font-bold text-text-bright">{c.name}</span>
        <span className="shrink-0 text-[10px] text-text-dim">Lv{c.level}</span>
      </div>
      <HpBar current={c.hp} max={c.maxHp} />
      <ThreatIndicator threat={c.threat} maxThreat={maxThreat} />
      <div className="mt-0.5 flex items-center justify-between text-[10px] text-text-dim">
        <span>{c.hp}/{c.maxHp}</span>
        {c.mounted && <span className="text-text-amber">🐴</span>}
      </div>
    </div>
  );
}

function EnemyCard({ c, isSelected, onClick }: { c: CombatantState; isSelected: boolean; onClick: () => void }) {
  const isApproaching = c.isApproaching && (c.arrivalTicksRemaining ?? 0) > 0;
  return (
    <button
      type="button"
      onClick={onClick}
      className={`w-full rounded border px-3 py-2 text-left transition ${
        isSelected
          ? 'border-text-terminal bg-text-terminal/10'
          : c.isDead
            ? 'border-red-500/30 bg-red-500/5 opacity-40'
            : 'border-border-dim bg-bg-primary/40 hover:border-text-terminal/50'
      }`}
    >
      <div className="flex items-center justify-between gap-2">
        <div className="flex items-center gap-2 min-w-0">
          <span className="truncate text-xs font-bold text-text-bright">{c.name}</span>
          <span className="shrink-0 text-[10px] text-text-dim">Lv{c.level}</span>
        </div>
        <div className="flex items-center gap-1.5 shrink-0">
          {isApproaching && (
            <span className="rounded bg-text-amber/20 px-1.5 py-0.5 text-[10px] font-bold text-text-amber">
              接近中 {c.arrivalTicksRemaining}t
            </span>
          )}
          {c.pendingTelegraph && (
            <span className="rounded bg-red-500/20 px-1.5 py-0.5 text-[10px] font-bold text-red-400 animate-pulse">
              施法中
            </span>
          )}
        </div>
      </div>
      <HpBar current={c.hp} max={c.maxHp} color={c.isDead ? 'bg-red-500/50' : 'bg-combat-damage'} />
      <div className="mt-0.5 flex items-center justify-between text-[10px] text-text-dim">
        <span>{c.hp}/{c.maxHp}</span>
        {c.activeEffects.length > 0 && (
          <span className="truncate max-w-[120px]">
            {c.activeEffects.slice(0, 3).map(e => e.type).join(' ')}
          </span>
        )}
      </div>
    </button>
  );
}

export default function BattlefieldView() {
  const combat = useGameStore(s => s.combat);
  const selectedCombatTargetId = useGameStore(s => s.selectedCombatTargetId);
  const setSelectedCombatTargetId = useGameStore(s => s.setSelectedCombatTargetId);

  if (!combat) return null;

  const { playerTeam, enemyTeam, round } = combat;
  const frontRow = playerTeam.filter(p => p.formation === 'front');
  const backRow = playerTeam.filter(p => p.formation === 'back');
  const maxThreat = Math.max(1, ...playerTeam.map(p => p.threat));
  const aliveEnemies = enemyTeam.filter(e => !e.isDead);
  const deadEnemies = enemyTeam.filter(e => e.isDead);

  return (
    <div className="border-b border-border-dim bg-bg-secondary p-3">
      {/* Round indicator */}
      <div className="mb-2 flex items-center justify-between">
        <span className="text-xs font-bold text-text-terminal">戰場 — 第 {round} 回合</span>
        <span className="text-[10px] text-text-dim">{aliveEnemies.length} 個敵人存活</span>
      </div>

      {/* Allied formation */}
      <div className="mb-2 space-y-1">
        {frontRow.length > 0 && (
          <div>
            <div className="mb-1 text-[10px] font-bold text-red-400">前排</div>
            <div className="flex gap-1.5">
              {frontRow.map(c => <PlayerCard key={c.id} c={c} maxThreat={maxThreat} />)}
            </div>
          </div>
        )}
        {backRow.length > 0 && (
          <div>
            <div className="mb-1 text-[10px] font-bold text-text-terminal">後排</div>
            <div className="flex gap-1.5">
              {backRow.map(c => <PlayerCard key={c.id} c={c} maxThreat={maxThreat} />)}
            </div>
          </div>
        )}
      </div>

      {/* VS separator */}
      <div className="my-2 flex items-center gap-2">
        <div className="flex-1 border-t border-border-dim" />
        <span className="text-xs font-bold text-text-dim">VS</span>
        <div className="flex-1 border-t border-border-dim" />
      </div>

      {/* Enemies */}
      <div className="space-y-1.5">
        {aliveEnemies.map(e => (
          <EnemyCard
            key={e.id}
            c={e}
            isSelected={selectedCombatTargetId === e.id}
            onClick={() => setSelectedCombatTargetId(e.id)}
          />
        ))}
        {deadEnemies.length > 0 && (
          <div className="text-[10px] text-text-dim">{deadEnemies.length} 個敵人已被擊敗</div>
        )}
      </div>
    </div>
  );
}
