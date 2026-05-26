import { useGameStore } from '../stores/gameStore';
import { ITEM_DEFS, SKILL_DEFS, getAtlasBackgroundStyle, getCombatActionIconRect, getStatusEffectDef, type Character, type InventoryItem, type LearnedSkill, type CombatActionIconId } from '@game/shared';
import type { CombatInfo } from '../stores/gameStore';
import type { CSSProperties } from 'react';
import { getItemImagePath, getMonsterImagePath, getPublicAssetPath } from '../utils/assetImages';
import SkillHoverCard from './SkillHoverCard';
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

  const livingEnemies = combat.enemyTeam.filter((enemy) => !enemy.isDead && !enemy.isApproaching && (enemy.arrivalTicksRemaining ?? 0) <= 0);
  if (livingEnemies.length === 0) return null;

  const enemyLabels = ordinalEnemyLabels(livingEnemies);
  const targetId = livingEnemies.some((enemy) => enemy.id === selectedTargetId)
    ? selectedTargetId
    : livingEnemies[0]?.id ?? null;
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
      <div className="combat-panel-head">
        <span className="text-xs font-bold text-combat-damage">戰鬥</span>
        <span className="combat-tick-clock" title="每 5 秒轉一圈，表示下一個戰鬥 tick">
          <span className="combat-tick-clock-face" aria-hidden="true">
            <span className="combat-tick-clock-hand" />
          </span>
          <span>Round {combat.round}</span>
        </span>
      </div>

      <div className="combat-enemy-row">
        {livingEnemies.map((enemy) => {
          const selected = enemy.id === targetId;
          const hpPct = Math.max(0, Math.min(100, (enemy.hp / Math.max(1, enemy.maxHp)) * 100));
          const imagePath = getMonsterImagePath(enemy.id);
          return (
            <MonsterHoverCard key={enemy.id} monster={enemy} displayName={enemyLabels.get(enemy.id) ?? enemy.name}>
              <button
                className={`combat-enemy ${selected ? 'combat-enemy-selected' : ''}`}
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
                {enemy.pendingTelegraph && <div className="combat-enemy-telegraph">預兆</div>}
                {enemy.activeEffects.length > 0 && (
                  <div className="combat-enemy-effects">
                    {enemy.activeEffects.slice(0, 4).map((effect, index) => (
                      <span
                        key={`${enemy.id}-${effect.type}-${index}`}
                        title={`${getStatusEffectDef(effect.type).name} ${effect.remainingDuration}回合`}
                        className={`combat-effect-${getStatusEffectDef(effect.type).category}`}
                      >
                        {getStatusEffectDef(effect.type).icon ? (
                          <i aria-hidden="true" style={getAtlasBackgroundStyle(getStatusEffectDef(effect.type).icon!, 20)} />
                        ) : getStatusEffectDef(effect.type).name}
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
        <CombatActionButton
          label="普攻"
          actionIcon="attack"
          className="combat-action-danger"
          disabled={!targetId}
          onClick={() => targetId && sendCommand(`attack ${targetId}`, `攻擊 ${targetLabel ?? '目前目標'}`)}
        />
        <CombatActionButton
          label="防禦"
          actionIcon="defend"
          className="combat-action-primary"
          onClick={() => sendCommand('defend', '防禦')}
        />
        <CombatActionButton
          label="逃跑"
          actionIcon="flee"
          onClick={() => sendCommand('flee', '逃跑')}
        />
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
          const cooldownProgress = def.cooldown > 0
            ? Math.max(0, Math.min(1, learned.currentCooldown / def.cooldown))
            : 0;
          return (
            <CombatActionButton
              key={learned.skillId}
              label={def.name}
              iconPath={getPublicAssetPath(def.iconPath)}
              className={def.tags.includes('heal') || def.tags.includes('defense') ? 'combat-action-primary' : 'combat-action-danger'}
              disabled={disabled}
              title={reason}
              skill={def}
              cooldown={learned.currentCooldown}
              cooldownProgress={cooldownProgress}
              onClick={() => {
                const targetSuffix = needsTarget && targetId ? ` ${targetId}` : '';
                sendCommand(`skill ${learned.skillId}${targetSuffix}`, `使用 ${def.name}`);
              }}
            />
          );
        })}
        {combatItems.map(({ item, def }) => {
          if (!def) return null;
          return (
            <CombatActionButton
              key={`${item.itemId}-${item.itemInstanceId ?? 'stack'}`}
              label={def.name}
              iconPath={getItemImagePath(item.itemId)}
              className="combat-action-primary"
              onClick={() => sendCommand(`use ${def.name}`, `使用 ${def.name}`)}
              title={`x${item.quantity}`}
            />
          );
        })}
      </div>
    </div>
  );
}

export function CombatActionButton({
  label,
  iconPath,
  iconText,
  actionIcon,
  className = '',
  disabled = false,
  title,
  skill,
  cooldown = 0,
  cooldownProgress = 0,
  onClick,
}: {
  label: string;
  iconPath?: string;
  iconText?: string;
  actionIcon?: CombatActionIconId;
  className?: string;
  disabled?: boolean;
  title?: string;
  skill?: NonNullable<typeof SKILL_DEFS[string]>;
  cooldown?: number;
  cooldownProgress?: number;
  onClick: () => void;
}) {
  const style = {
    '--combat-action-cd': `${Math.round(cooldownProgress * 360)}deg`,
    '--combat-action-cd-rest': `${Math.round(cooldownProgress * 360) + 2}deg`,
  } as CSSProperties;
  const button = (
    <button
      type="button"
      className={`combat-action ${cooldown > 0 ? 'combat-action-cooldown' : ''} ${className}`}
      disabled={disabled}
      title={skill ? undefined : title}
      style={style}
      onClick={onClick}
    >
      <span className="combat-action-icon" aria-hidden="true">
        {iconPath ? (
          <img src={iconPath} alt="" loading="lazy" />
        ) : actionIcon ? (
          <i style={getAtlasBackgroundStyle(getCombatActionIconRect(actionIcon), 28)} />
        ) : (
          <span>{iconText ?? label.slice(0, 1)}</span>
        )}
      </span>
      {cooldown > 0 && <span className="combat-action-cd-text">{cooldown}T</span>}
      <span className="combat-action-label">{label}</span>
    </button>
  );
  return skill ? (
    <SkillHoverCard skill={skill} currentCooldown={cooldown} disabledReason={title}>
      {button}
    </SkillHoverCard>
  ) : button;
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
