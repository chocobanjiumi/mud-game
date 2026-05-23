import { useGameStore } from '../stores/gameStore';

function sendCommand(command: string, echo?: string) {
  window.dispatchEvent(new CustomEvent('terminal-command', { detail: { command, echo } }));
}

function ordinalEnemyLabels(enemies: { id: string; name: string }[]): Map<string, string> {
  const totals = new Map<string, number>();
  for (const enemy of enemies) totals.set(enemy.name, (totals.get(enemy.name) ?? 0) + 1);
  const seen = new Map<string, number>();
  const labels = new Map<string, string>();
  for (const enemy of enemies) {
    const next = (seen.get(enemy.name) ?? 0) + 1;
    seen.set(enemy.name, next);
    labels.set(enemy.id, (totals.get(enemy.name) ?? 0) > 1 ? `${enemy.name}#${next}` : enemy.name);
  }
  return labels;
}

export default function CombatPanel() {
  const combat = useGameStore((s) => s.combat);
  const inCombat = useGameStore((s) => s.inCombat);
  const selectedTargetId = useGameStore((s) => s.selectedCombatTargetId);
  const setSelectedTargetId = useGameStore((s) => s.setSelectedCombatTargetId);

  if (!inCombat || !combat) return null;

  const livingEnemies = combat.enemyTeam.filter((enemy) => !enemy.isDead);
  const enemyLabels = ordinalEnemyLabels(livingEnemies);
  const targetId = selectedTargetId ?? livingEnemies[0]?.id ?? null;
  const targetLabel = targetId ? enemyLabels.get(targetId) : null;

  return (
    <div className="combat-panel border-t border-border-dim bg-bg-secondary px-3 py-2 space-y-2">
      <div className="flex items-center justify-between gap-2">
        <span className="text-xs font-bold text-combat-damage">戰鬥</span>
        <span className="text-[10px] text-text-dim">Round {combat.round}</span>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-1">
        {livingEnemies.map((enemy) => {
          const selected = enemy.id === targetId;
          const hpPct = Math.max(0, Math.min(100, (enemy.hp / Math.max(1, enemy.maxHp)) * 100));
          return (
            <button
              key={enemy.id}
              className={`combat-enemy ${selected ? 'combat-enemy-selected' : ''}`}
              onClick={() => setSelectedTargetId(enemy.id)}
            >
              <div className="flex items-center justify-between gap-2 text-xs">
                <span className="truncate text-combat-damage">{enemyLabels.get(enemy.id) ?? enemy.name}</span>
                <span className="text-text-dim shrink-0">Lv.{enemy.level}</span>
              </div>
              <div className="mt-1 h-1.5 bg-bg-primary border border-border-dim">
                <div className="h-full bg-combat-damage" style={{ width: `${hpPct}%` }} />
              </div>
              <div className="mt-0.5 flex justify-between gap-2 text-[10px] text-text-dim">
                <span>HP {enemy.hp}/{enemy.maxHp}</span>
                {enemy.pendingTelegraph && <span className="text-text-amber">預兆</span>}
              </div>
            </button>
          );
        })}
      </div>

      <div className="flex flex-wrap gap-1">
        <button
          className="combat-action combat-action-danger"
          disabled={!targetId}
          onClick={() => targetId && sendCommand(`attack ${targetId}`, `攻擊 ${targetLabel ?? '目前目標'}`)}
        >
          普攻
        </button>
        <button className="combat-action combat-action-primary" onClick={() => sendCommand('defend', '防禦')}>
          防禦
        </button>
        <button className="combat-action" onClick={() => sendCommand('flee', '逃跑')}>
          逃跑
        </button>
      </div>
    </div>
  );
}
