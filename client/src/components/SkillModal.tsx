import {
  describeSkillLevel,
  getSkillMaxLevel,
  getSkillPointSummary,
  getSkillUpgradeCost,
  getSkillUpgradeDeltas,
  getSkillUpgradeRequiredLevel,
  SKILL_DEFS,
  type Character,
  type LearnedSkill,
  type SkillDef,
  type SkillPointSummary,
} from '@game/shared';
import { useGameStore } from '../stores/gameStore';
import { getPublicAssetPath } from '../utils/assetImages';

interface SkillModalProps {
  open: boolean;
  onClose: () => void;
  onUseSkill: (skillId: string) => void;
  onUpgradeSkill: (skillId: string, skillName: string) => void;
}

export function SkillModalView({
  open,
  skills,
  character,
  skillPoints,
  onClose,
  onUseSkill,
  onUpgradeSkill,
}: SkillModalProps & {
  skills: LearnedSkill[];
  character: Character | null;
  skillPoints?: SkillPointSummary | null;
}) {
  if (!open) return null;

  const sortedSkills = [...skills].sort((a, b) => {
    const defA = SKILL_DEFS[a.skillId];
    const defB = SKILL_DEFS[b.skillId];
    const originA = isOriginPassive(a.skillId) ? 1 : 0;
    const originB = isOriginPassive(b.skillId) ? 1 : 0;
    if (originA !== originB) return originA - originB;
    if ((defA?.type ?? '') !== (defB?.type ?? '')) return (defA?.type ?? '').localeCompare(defB?.type ?? '');
    return (defA?.learnLevel ?? 999) - (defB?.learnLevel ?? 999);
  });
  const pointSummary = skillPoints ?? (character ? getSkillPointSummary(character.level, skills) : null);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-bg-primary/80 p-4 backdrop-blur-sm">
      <div className="flex max-h-[88vh] w-full max-w-4xl flex-col overflow-hidden rounded border border-border-glow/40 bg-bg-panel shadow-xl">
        <div className="flex items-center justify-between border-b border-border-dim px-4 py-3">
          <div>
            <h2 className="text-base font-bold text-text-bright">技能</h2>
            <p className="text-xs text-text-dim">
              {character ? `${character.name} · ${resourceLabel(character)} ${character.resource}/${character.maxResource}` : '未載入角色'}
            </p>
            <p className="mt-1 text-[11px] text-text-amber">
              技能點 {pointSummary ? `${pointSummary.available}/${pointSummary.total}` : '未同步'}
              {pointSummary && pointSummary.spent > 0 ? ` · 已用 ${pointSummary.spent}` : ''}
            </p>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="rounded border border-border-dim px-3 py-1 text-xs text-text-dim transition-colors hover:border-border-glow/50 hover:text-text-bright"
          >
            關閉
          </button>
        </div>

        <div className="min-h-0 flex-1 overflow-y-auto p-4">
          {sortedSkills.length === 0 ? (
            <div className="rounded border border-border-dim bg-bg-secondary p-4 text-sm text-text-dim">
              尚未學會技能
            </div>
          ) : (
            <div className="grid gap-3 md:grid-cols-2">
              {sortedSkills.map((skill) => {
                const def = SKILL_DEFS[skill.skillId];
                return (
                  <SkillCard
                    key={skill.skillId}
                    learned={skill}
                    def={def}
                    character={character}
                    skillPoints={pointSummary}
                    onUseSkill={onUseSkill}
                    onUpgradeSkill={onUpgradeSkill}
                  />
                );
              })}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

function SkillCard({
  learned,
  def,
  character,
  skillPoints,
  onUseSkill,
  onUpgradeSkill,
}: {
  learned: LearnedSkill;
  def: SkillDef | undefined;
  character: Character | null;
  skillPoints: SkillPointSummary | null;
  onUseSkill: (skillId: string) => void;
  onUpgradeSkill: (skillId: string, skillName: string) => void;
}) {
  const name = def?.name ?? learned.skillId;
  const iconPath = getPublicAssetPath(def?.iconPath) ?? '/mud/images/skills/icons/starter_blank_01.png';
  const isOrigin = isOriginPassive(learned.skillId);
  const maxLevel = def ? getSkillMaxLevel(def.id) : 1;
  const upgradeCost = def ? getSkillUpgradeCost(def.id, learned.level) : undefined;
  const nextLevel = learned.level + 1;
  const requiredLevel = def ? getSkillUpgradeRequiredLevel(def.id, nextLevel) : undefined;
  const deltas = def ? getSkillUpgradeDeltas(def, learned.level) : [];
  const hasUpgradeRule = Boolean(def && upgradeCost !== undefined);
  const disabledReason = getUpgradeDisabledReason({
    isOrigin,
    learnedLevel: learned.level,
    maxLevel,
    hasUpgradeRule,
    upgradeCost,
    requiredLevel,
    characterLevel: character?.level,
    availablePoints: skillPoints?.available,
  });
  const canUpgrade = !disabledReason;
  const isActive = def?.type === 'active';
  const currentLines = def ? describeSkillLevel(def, learned.level) : [];
  const nextLines = def && learned.level < maxLevel ? describeSkillLevel(def, nextLevel) : [];

  return (
    <div className="rounded border border-border-dim bg-bg-secondary p-3">
      <div className="flex gap-3">
        <img
          src={iconPath}
          alt={name}
          className="h-12 w-12 shrink-0 rounded border border-border-dim object-cover"
          draggable={false}
          onError={(event) => {
            event.currentTarget.src = '/mud/images/skills/icons/starter_blank_01.png';
          }}
        />
        <div className="min-w-0 flex-1">
          <div className="flex flex-wrap items-center gap-2">
            <h3 className="text-sm font-bold text-text-bright">{name}</h3>
            <span className="rounded border border-border-dim px-1.5 py-0.5 text-[10px] text-text-terminal">
              Lv.{learned.level}/{maxLevel}
            </span>
            <span className="text-[10px] text-text-dim">{def ? typeLabel(def) : '未知技能'}</span>
          </div>
          <p className="mt-1 line-clamp-2 text-xs leading-5 text-text-dim">
            {def?.shortDescription || def?.description || '缺少技能資料'}
          </p>
        </div>
      </div>

      {def && (
        <div className="mt-3 grid grid-cols-3 gap-2 text-[10px] text-text-dim">
          <span className="rounded bg-bg-primary/50 px-2 py-1">消耗 {def.resourceCost}</span>
          <span className="rounded bg-bg-primary/50 px-2 py-1">CD {def.cooldown}</span>
          <span className="rounded bg-bg-primary/50 px-2 py-1">Lv.{def.learnLevel}</span>
        </div>
      )}

      {def && (
        <div className="mt-3 grid gap-2 text-[10px] md:grid-cols-2">
          <div className="rounded border border-border-dim bg-bg-primary/35 p-2">
            <div className="mb-1 font-bold text-text-bright">目前等級</div>
            {currentLines.map((line) => <div key={line} className="text-text-dim">{line}</div>)}
          </div>
          <div className="rounded border border-border-dim bg-bg-primary/35 p-2">
            <div className="mb-1 font-bold text-text-bright">下一級效果</div>
            {learned.level >= maxLevel ? (
              <div className="text-text-amber">已滿級</div>
            ) : nextLines.length > 0 ? (
              nextLines.map((line) => <div key={line} className="text-text-dim">{line}</div>)
            ) : (
              <div className="text-text-dim">暫無升級效果</div>
            )}
          </div>
        </div>
      )}

      {def && learned.level < maxLevel && (
        <div className="mt-2 rounded border border-border-dim bg-bg-primary/35 p-2 text-[10px]">
          <div className="mb-1 text-text-amber">
            升級條件：消耗 {upgradeCost ?? '-'} 技能點
            {requiredLevel ? ` · 需要角色 Lv.${requiredLevel}` : ''}
          </div>
          {deltas.length > 0 ? (
            <div className="grid gap-1 md:grid-cols-2">
              {deltas.map((delta) => (
                <div key={delta.label} className="text-text-dim">
                  {delta.label} <span className="text-text-bright">{delta.before}</span> -&gt; <span className="text-text-terminal">{delta.after}</span>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-combat-damage">下一級目前無數值變化</div>
          )}
        </div>
      )}

      <div className="mt-3 flex justify-end gap-2">
        <button
          type="button"
          onClick={() => onUseSkill(learned.skillId)}
          disabled={!isActive}
          className="rounded border border-border-dim px-3 py-1 text-xs text-text-dim transition-colors enabled:hover:border-border-glow/50 enabled:hover:text-text-terminal disabled:cursor-not-allowed disabled:opacity-40"
        >
          使用
        </button>
        <button
          type="button"
          onClick={() => onUpgradeSkill(learned.skillId, name)}
          disabled={!canUpgrade}
          title={disabledReason}
          className="rounded border border-border-glow/40 bg-border-glow/10 px-3 py-1 text-xs text-text-terminal transition-colors enabled:hover:bg-border-glow/20 disabled:cursor-not-allowed disabled:border-border-dim disabled:bg-bg-primary/30 disabled:text-text-dim disabled:opacity-60"
        >
          {learned.level >= maxLevel ? '已滿級' : isOrigin ? '天賦' : `升級${upgradeCost ? ` -${upgradeCost}` : ''}`}
        </button>
      </div>
    </div>
  );
}

export default function SkillModal(props: SkillModalProps) {
  const skills = useGameStore((s) => s.skills);
  const character = useGameStore((s) => s.character);
  const skillPoints = useGameStore((s) => s.skillPoints);

  return <SkillModalView {...props} skills={skills} character={character} skillPoints={skillPoints} />;
}

function isOriginPassive(skillId: string): boolean {
  return skillId.startsWith('race_') || skillId.startsWith('faith_');
}

function typeLabel(def: SkillDef): string {
  const type = def.type === 'active' ? '主動' : '被動';
  const context = def.usageContext === 'both' ? '戰鬥/平時' : def.usageContext === 'combat' ? '戰鬥' : '平時';
  return `${type} · ${context}`;
}

function resourceLabel(character: Character): string {
  if (character.resourceType === 'rage') return '怒氣';
  if (character.resourceType === 'focus') return '專注';
  if (character.resourceType === 'faith') return '信仰';
  return 'MP';
}

function getUpgradeDisabledReason(input: {
  isOrigin: boolean;
  learnedLevel: number;
  maxLevel: number;
  hasUpgradeRule: boolean;
  upgradeCost?: number;
  requiredLevel?: number;
  characterLevel?: number;
  availablePoints?: number;
}): string | undefined {
  if (input.isOrigin) return '天賦技能不能升級';
  if (!input.hasUpgradeRule) return '暫無升級效果';
  if (input.learnedLevel >= input.maxLevel) return '已滿級';
  if (input.requiredLevel && (input.characterLevel ?? 0) < input.requiredLevel) return `需要角色 Lv.${input.requiredLevel}`;
  if ((input.availablePoints ?? 0) < (input.upgradeCost ?? 0)) return `技能點不足，剩餘 ${input.availablePoints ?? 0}`;
  return undefined;
}
