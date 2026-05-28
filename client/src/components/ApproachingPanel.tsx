import { SKILL_DEFS, type Character, type LearnedSkill, type SkillDef } from '@game/shared';
import { useGameStore } from '../stores/gameStore';
import type { CombatInfo } from '../stores/gameStore';
import { getMonsterImagePath, getPublicAssetPath } from '../utils/assetImages';
import { CombatActionButton } from './CombatPanel';
import MonsterHoverCard from './MonsterHoverCard';

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

function isApproachingEnemy(enemy: CombatInfo['enemyTeam'][number]): boolean {
  return Boolean(enemy.isApproaching || (enemy.arrivalTicksRemaining ?? 0) > 0);
}

function isDamageSkill(def: SkillDef): boolean {
  if (def.type !== 'active') return false;
  if (def.targetType !== 'single_enemy' && def.targetType !== 'all_enemies') return false;
  return def.tags.includes('damage') || def.multiplier > 0;
}

export function ApproachingPanelView({
  combat,
  inCombat,
  selectedTargetId,
  setSelectedTargetId,
  skills,
  character,
}: {
  combat: CombatInfo | null;
  inCombat: boolean;
  selectedTargetId: string | null;
  setSelectedTargetId: (id: string | null) => void;
  skills: LearnedSkill[];
  character: Character | null;
}) {
  if (!inCombat || !combat) return null;

  const approachingEnemies = combat.enemyTeam.filter((enemy) => !enemy.isDead && isApproachingEnemy(enemy));
  if (approachingEnemies.length === 0) return null;

  const enemyLabels = ordinalEnemyLabels(approachingEnemies);
  const targetId = approachingEnemies.some((enemy) => enemy.id === selectedTargetId)
    ? selectedTargetId
    : approachingEnemies[0]?.id ?? null;
  const targetLabel = targetId ? enemyLabels.get(targetId) : null;
  const damageSkills = skills
    .map((skill) => ({ learned: skill, def: SKILL_DEFS[skill.skillId] }))
    .filter(({ def }) => def && isDamageSkill(def) && (def.usageContext === 'combat' || def.usageContext === 'both'))
    .slice(0, 6);

  return (
    <div className="approaching-panel border-t border-border-dim bg-bg-secondary px-3 py-2 space-y-2">
      <div className="flex items-center justify-between gap-2">
        <span className="text-xs font-bold text-text-amber">逼近中</span>
        <span className="text-[10px] text-text-dim">{approachingEnemies.length} 個威脅</span>
      </div>

      <div className="combat-enemy-row">
        {approachingEnemies.map((enemy) => {
          const selected = enemy.id === targetId;
          const hpPct = Math.max(0, Math.min(100, (enemy.hp / Math.max(1, enemy.maxHp)) * 100));
          const ticks = enemy.arrivalTicksRemaining ?? 0;
          const imagePath = getMonsterImagePath(enemy.id);
          return (
            <MonsterHoverCard key={enemy.id} monster={enemy} displayName={enemyLabels.get(enemy.id) ?? enemy.name}>
              <button
                className={`combat-enemy approaching-enemy ${selected ? 'combat-enemy-selected' : ''}`}
                onClick={() => setSelectedTargetId(enemy.id)}
              >
                <div className="combat-enemy-hp" title={`HP ${enemy.hp}/${enemy.maxHp}`}>
                  <span style={{ width: `${hpPct}%` }} />
                </div>
                <div className="combat-enemy-avatar">
                  {imagePath ? <img src={imagePath} alt="" loading="lazy" /> : <span>{enemy.name.slice(0, 1)}</span>}
                </div>
                <div className="combat-enemy-name">{enemyLabels.get(enemy.id) ?? enemy.name}</div>
                <div className="combat-enemy-meta">
                  <span>Lv.{enemy.level}</span>
                  <span>{enemy.hp}/{enemy.maxHp}</span>
                </div>
                <div className="approaching-enemy-ticks">抵達 {ticks}T</div>
                {enemy.activeEffects.length > 0 && (
                  <div className="combat-enemy-effects">
                    {enemy.activeEffects.slice(0, 4).map((effect, index) => (
                      <span
                        key={`${enemy.id}-${effect.type}-${index}`}
                        title={`${effect.type} ${effect.remainingDuration}回合`}
                      >
                        {effect.type.replace(/_/g, ' ')}
                      </span>
                    ))}
                  </div>
                )}
              </button>
            </MonsterHoverCard>
          );
        })}
      </div>

      <div className="combat-action-row">
        {character?.mounted && targetId && (
          <CombatActionButton
            label="攔截"
            actionIcon="defend"
            className="combat-action-primary"
            title={`騎乘攔截逼近中的目標「${targetLabel ?? '未選取'}」，延後它抵達本房戰鬥；此行動依逼近 tick 結算，不消耗職業資源。`}
            onClick={() => sendCommand(`intercept ${targetId}`, `攔截 ${targetLabel ?? ''}`)}
          />
        )}
        {damageSkills.map(({ learned, def }) => {
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
          const cooldownProgress = def.cooldown > 0
            ? Math.max(0, Math.min(1, learned.currentCooldown / def.cooldown))
            : 0;
          return (
            <CombatActionButton
              key={learned.skillId}
              label={def.name}
              iconPath={getPublicAssetPath(def.iconPath)}
              className="combat-action-danger"
              disabled={disabled}
              title={reason ?? (def.targetType === 'all_enemies' ? '命中戰鬥中所有敵人，包含逼近目標。' : '命中選取的逼近目標。')}
              skill={def}
              cooldown={learned.currentCooldown}
              cooldownProgress={cooldownProgress}
              onClick={() => {
                const targetSuffix = needsTarget && targetId ? ` ${targetId}` : '';
                sendCommand(`skill ${learned.skillId}${targetSuffix}`, `使用 ${def.name}${needsTarget ? ` ${targetLabel ?? ''}` : ''}`);
              }}
            />
          );
        })}
      </div>
    </div>
  );
}

export default function ApproachingPanel() {
  const combat = useGameStore((s) => s.combat);
  const inCombat = useGameStore((s) => s.inCombat);
  const selectedTargetId = useGameStore((s) => s.selectedCombatTargetId);
  const setSelectedTargetId = useGameStore((s) => s.setSelectedCombatTargetId);
  const skills = useGameStore((s) => s.skills);
  const character = useGameStore((s) => s.character);
  return (
    <ApproachingPanelView
      combat={combat}
      inCombat={inCombat}
      selectedTargetId={selectedTargetId}
      setSelectedTargetId={setSelectedTargetId}
      skills={skills}
      character={character}
    />
  );
}
