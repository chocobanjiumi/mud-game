import { useGameStore } from '../stores/gameStore';
import { ITEM_DEFS, SKILL_DEFS, type Character, type InventoryItem, type LearnedSkill } from '@game/shared';
import type { CombatInfo } from '../stores/gameStore';

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

export function CombatPanelView({
  combat,
  inCombat,
  selectedTargetId,
  setSelectedTargetId,
  skills,
  character,
  inventory,
}: {
  combat: CombatInfo | null;
  inCombat: boolean;
  selectedTargetId: string | null;
  setSelectedTargetId: (id: string | null) => void;
  skills: LearnedSkill[];
  character: Character | null;
  inventory: InventoryItem[];
}) {
  if (!inCombat || !combat) return null;

  const livingEnemies = combat.enemyTeam.filter((enemy) => !enemy.isDead);
  const enemyLabels = ordinalEnemyLabels(livingEnemies);
  const targetId = selectedTargetId ?? livingEnemies[0]?.id ?? null;
  const targetLabel = targetId ? enemyLabels.get(targetId) : null;
  const commonSkills = skills
    .map((skill) => ({ learned: skill, def: SKILL_DEFS[skill.skillId] }))
    .filter(({ def }) => def?.type === 'active')
    .slice(0, 5);
  const combatItems = inventory
    .map((item) => ({ item, def: ITEM_DEFS[item.itemId] }))
    .filter(({ def }) => def?.type === 'consumable' && def.useEffect && (
      def.useEffect.type.startsWith('heal_')
      || def.useEffect.type.startsWith('food_')
      || def.useEffect.type.startsWith('combat_')
    ))
    .slice(0, 4);

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
              {enemy.activeEffects.length > 0 && (
                <div className="mt-1 flex flex-wrap gap-1">
                  {enemy.activeEffects.slice(0, 4).map((effect, index) => (
                    <span
                      key={`${enemy.id}-${effect.type}-${index}`}
                      className="rounded border border-border-dim/60 px-1 text-[10px] text-text-amber"
                      title={`${effect.type} ${effect.remainingDuration}回合`}
                    >
                      {effect.type.replace(/_/g, ' ')}
                    </span>
                  ))}
                </div>
              )}
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
        {commonSkills.map(({ learned, def }) => {
          if (!def) return null;
          const needsTarget = def.targetType === 'single_enemy';
          const onCooldown = learned.currentCooldown > 0;
          const lacksResource = character ? character.resource < def.resourceCost : false;
          const disabled = onCooldown || lacksResource || (needsTarget && !targetId);
          const reason = onCooldown
            ? `冷卻 ${learned.currentCooldown} 回合`
            : lacksResource
              ? `${character?.resourceType ?? '資源'}不足`
              : needsTarget && !targetId
                ? '需要目標'
                : undefined;
          return (
            <button
              key={learned.skillId}
              className={`combat-action ${def.tags.includes('heal') || def.tags.includes('defense') ? 'combat-action-primary' : 'combat-action-danger'}`}
              disabled={disabled}
              title={reason}
              onClick={() => {
                const targetSuffix = needsTarget && targetId ? ` ${targetId}` : '';
                sendCommand(`skill ${learned.skillId}${targetSuffix}`, `使用 ${def.name}`);
              }}
            >
              {def.name}
            </button>
          );
        })}
        {combatItems.map(({ item, def }) => {
          if (!def) return null;
          return (
            <button
              key={`${item.itemId}-${item.itemInstanceId ?? 'stack'}`}
              className="combat-action combat-action-primary"
              onClick={() => sendCommand(`use ${def.name}`, `使用 ${def.name}`)}
              title={`x${item.quantity}`}
            >
              {def.name}
            </button>
          );
        })}
      </div>
    </div>
  );
}

export default function CombatPanel() {
  const combat = useGameStore((s) => s.combat);
  const inCombat = useGameStore((s) => s.inCombat);
  const selectedTargetId = useGameStore((s) => s.selectedCombatTargetId);
  const setSelectedTargetId = useGameStore((s) => s.setSelectedCombatTargetId);
  const skills = useGameStore((s) => s.skills);
  const character = useGameStore((s) => s.character);
  const inventory = useGameStore((s) => s.inventory);
  return (
    <CombatPanelView
      combat={combat}
      inCombat={inCombat}
      selectedTargetId={selectedTargetId}
      setSelectedTargetId={setSelectedTargetId}
      skills={skills}
      character={character}
      inventory={inventory}
    />
  );
}
