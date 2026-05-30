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
  const activeAttackMode = character ? combat.preferredAttackModes?.[character.id] ?? 'melee' : 'melee';
  const commonSkills = skills
    .map((skill) => ({ learned: skill, def: SKILL_DEFS[skill.skillId] }))
    .filter(({ def }) => def?.type === 'active' && (def.usageContext === 'combat' || def.usageContext === 'both'));
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
        {(() => {
          const target = livingEnemies.find((enemy) => enemy.id === targetId) ?? livingEnemies[0];
          if (!target) return null;
          const hpPct = Math.max(0, Math.min(100, (target.hp / Math.max(1, target.maxHp)) * 100));
          const imagePath = getMonsterImagePath(target.id);
          return (
            <MonsterHoverCard monster={target} displayName={enemyLabels.get(target.id) ?? target.name}>
              <button className="combat-enemy combat-enemy-selected">
                <div className="combat-enemy-hp" title={`HP ${target.hp}/${target.maxHp}`}>
                  <span style={{ width: `${hpPct}%` }} />
                </div>
                <div className="combat-enemy-avatar">
                  {imagePath ? <img src={imagePath} alt="" loading="lazy" /> : <span>{target.name.slice(0, 1)}</span>}
                </div>
                <div className="combat-enemy-name">{enemyLabels.get(target.id) ?? target.name}</div>
                <div className="combat-enemy-meta">
                  <span>Lv.{target.level}</span>
                  <span>{target.hp}/{target.maxHp}</span>
                </div>
                {target.pendingTelegraph && <div className="combat-enemy-telegraph">預兆</div>}
                {target.activeEffects.length > 0 && (
                  <div className="combat-enemy-effects">
                    {target.activeEffects.slice(0, 4).map((effect, index) => (
                      <span
                        key={`${target.id}-${effect.type}-${index}`}
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
        })()}
        {livingEnemies.length > 1 && (
          <span className="text-[10px] text-text-dim self-center ml-1">+{livingEnemies.length - 1}</span>
        )}
      </div>

      <div className="combat-action-row">
        <CombatActionButton
          label="近戰"
          actionIcon="attack"
          className="combat-action-danger"
          active={activeAttackMode === 'melee'}
          disabled={!targetId}
          title={`以近戰武器攻擊目前目標「${targetLabel ?? '未選取'}」，本次行動會在下一個戰鬥 tick 結算命中與傷害，不消耗職業資源。`}
          onClick={() => targetId && sendCommand(`melee ${targetId}`, `近戰 ${targetLabel ?? '目前目標'}`)}
        />
        <CombatActionButton
          label="遠程"
          actionIcon="attack"
          className="combat-action-danger"
          active={activeAttackMode === 'ranged'}
          disabled={!targetId}
          title={`以遠程武器攻擊目前目標「${targetLabel ?? '未選取'}」，本次行動會在下一個戰鬥 tick 結算命中與傷害，不消耗職業資源。`}
          onClick={() => targetId && sendCommand(`ranged ${targetId}`, `遠程 ${targetLabel ?? '目前目標'}`)}
        />
        <CombatActionButton
          label="防禦"
          actionIcon="defend"
          className="combat-action-primary"
          title="進入防禦姿態直到下一個戰鬥 tick，目標是降低即將承受的傷害，不消耗怒氣、魔力、專注或信仰。"
          onClick={() => sendCommand('defend', '防禦')}
        />
        <CombatActionButton
          label="逃跑"
          actionIcon="flee"
          title="嘗試立刻脫離目前戰鬥；成功會離開交戰狀態，失敗會在同一個 tick 承受敵人追擊傷害，不消耗職業資源。"
          onClick={() => sendCommand('flee', '逃跑')}
        />
        {character?.activeMountId && !character.mounted && (
          <CombatActionButton
            label="上馬"
            actionIcon="defend"
            className="combat-action-primary"
            title="在戰鬥中嘗試騎上目前坐騎，下一個 tick 前可改變機動行動與後續衝鋒選項，不消耗職業資源。"
            onClick={() => sendCommand('mount ride', '上馬')}
          />
        )}
        {character?.mounted && (
          <>
            <CombatActionButton
              label="下馬"
              actionIcon="flee"
              title="從目前坐騎下馬，解除騎乘狀態並回到一般戰鬥行動，會在當前指令結算且不消耗職業資源。"
              onClick={() => sendCommand('mount dismount', '下馬')}
            />
            <CombatActionButton
              label="衝鋒"
              actionIcon="attack"
              className="combat-action-danger"
              disabled={!targetId}
              title={`騎乘衝向目前目標「${targetLabel ?? '未選取'}」，用坐騎機動製造攻擊壓力，依戰鬥 tick 結算且不消耗職業資源。`}
              onClick={() => targetId && sendCommand(`charge ${targetId}`, `衝鋒 ${targetLabel ?? '目前目標'}`)}
            />
            <CombatActionButton
              label="守護"
              actionIcon="defend"
              className="combat-action-primary"
              title="命令坐騎守護自己，降低接下來承受的威脅並維持騎乘防線，依戰鬥 tick 生效且不消耗職業資源。"
              onClick={() => sendCommand(`mounted guard ${character.id}`, '騎乘守護')}
            />
          </>
        )}
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
              title={`使用背包道具「${def.name}」x1，目標是觸發${def.useEffect?.type ?? '道具'}效果；目前堆疊 ${item.quantity} 個，會在指令結算時消耗道具而不是職業資源。`}
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
  active = false,
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
  active?: boolean;
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
      className={`combat-action ${cooldown > 0 ? 'combat-action-cooldown' : ''} ${active ? 'combat-action-active' : ''} ${className}`}
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
