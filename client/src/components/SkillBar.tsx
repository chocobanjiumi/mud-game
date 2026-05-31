import { useGameStore } from '../stores/gameStore';
import { SKILL_DEFS, type Character, type LearnedSkill, type RoomEntity, type SkillDef } from '@game/shared';
import { getPublicAssetPath, BLANK_SKILL_ICON } from '../utils/assetImages';
import SkillHoverCard from './SkillHoverCard';

interface SkillBarProps {
  onUseSkill: (skillId: string) => void;
  pendingTargetSkillId?: string | null;
}

export function SkillBarView({
  skills,
  inCombat,
  character,
  selectedCombatTargetId,
  selectedEntity,
  selectedCrossRoomDirection,
  onUseSkill,
  pendingTargetSkillId = null,
}: SkillBarProps & {
  skills: LearnedSkill[];
  inCombat: boolean;
  character: Character | null;
  selectedCombatTargetId: string | null;
  selectedEntity: RoomEntity | null;
  selectedCrossRoomDirection: string | null;
}) {
  const activeSkills = skills.filter((skill) => {
    const def = SKILL_DEFS[skill.skillId];
    if (!def || def.type !== 'active') return false;
    return inCombat
      ? def.usageContext === 'combat' || def.usageContext === 'both'
      : def.usageContext === 'field' || def.usageContext === 'both';
  });

  if (activeSkills.length === 0) return null;

  return (
    <div className="bg-bg-secondary border-t border-border-dim px-3 py-1.5">
      {pendingTargetSkillId && (
        <div className="mb-1 rounded border border-text-amber/30 bg-text-amber/10 px-2 py-1 text-[10px] text-text-amber">
          {targetPrompt(SKILL_DEFS[pendingTargetSkillId])}
        </div>
      )}
      <div className="flex items-center gap-1 overflow-x-auto">
        <span className="text-[10px] text-text-dim mr-1 shrink-0">
          {inCombat ? '戰鬥技能' : '平時技能'} {character ? `${character.resource}/${character.maxResource}` : ''}
        </span>
        {activeSkills.map((skill, index) => {
          const def = SKILL_DEFS[skill.skillId];
          const onCooldown = skill.currentCooldown > 0;
          const hotkey = index < 9 ? `${index + 1}` : null;
          const iconPath = getPublicAssetPath(def?.iconPath) ?? BLANK_SKILL_ICON;
          const targetMode = def ? describeTargetMode(def, {
            inCombat,
            hasCombatTarget: !!selectedCombatTargetId,
            hasSelectedMonster: selectedEntity?.type === 'monster',
            selectedDirection: selectedCrossRoomDirection,
          }) : '';

          if (!def) return null;

          return (
            <SkillHoverCard key={skill.skillId} skill={def} currentCooldown={skill.currentCooldown}>
            <button
              onClick={() => !onCooldown && onUseSkill(skill.skillId)}
              disabled={onCooldown}
              className={`
                relative h-10 w-10 shrink-0 overflow-hidden rounded border cursor-pointer p-0
                ${
                  onCooldown
                    ? 'border-border-dim/50 bg-bg-primary/30 text-text-dim cursor-not-allowed'
                    : 'border-border-glow/30 bg-bg-tertiary/50 text-text-terminal hover:bg-bg-tertiary hover:border-border-glow/60'
                }
                transition-colors
              `}
              aria-label={`${def.name} · ${targetMode}`}
            >
              {/* Hotkey badge */}
              {hotkey && (
                <span className="absolute -top-1 -left-1 bg-bg-panel text-text-dim text-[8px] w-3 h-3 flex items-center justify-center rounded">
                  {hotkey}
                </span>
              )}
              <img
                src={iconPath}
                alt={def?.name ?? skill.skillId}
                className={`h-full w-full object-cover ${onCooldown ? 'grayscale opacity-50' : ''}`}
                draggable={false}
                onError={(event) => {
                  event.currentTarget.src = BLANK_SKILL_ICON;
                }}
              />
              {/* Cooldown overlay */}
              {onCooldown && (
                <span className="absolute inset-0 flex items-center justify-center bg-bg-primary/60 rounded text-text-amber text-[10px] font-bold">
                  {skill.currentCooldown}
                </span>
              )}
              {!onCooldown && (
                <span className="absolute bottom-0 left-0 right-0 bg-bg-primary/75 px-0.5 text-center text-[8px] leading-3 text-text-bright">
                  {shortTargetMode(def)}
                </span>
              )}
            </button>
            </SkillHoverCard>
          );
        })}
      </div>
    </div>
  );
}

export default function SkillBar(props: SkillBarProps) {
  const skills = useGameStore((s) => s.skills);
  const inCombat = useGameStore((s) => s.inCombat);
  const character = useGameStore((s) => s.character);
  const selectedCombatTargetId = useGameStore((s) => s.selectedCombatTargetId);
  const selectedEntity = useGameStore((s) => s.selectedEntity);
  const selectedCrossRoomDirection = useGameStore((s) => s.selectedCrossRoomDirection);

  return (
    <SkillBarView
      {...props}
      skills={skills}
      inCombat={inCombat}
      character={character}
      selectedCombatTargetId={selectedCombatTargetId}
      selectedEntity={selectedEntity}
      selectedCrossRoomDirection={selectedCrossRoomDirection}
    />
  );
}

function shortTargetMode(def: SkillDef | undefined): string {
  if (!def) return '';
  if (def.special?.areaScope === 'adjacent_cardinal') return '四方';
  if (def.special?.crossRoom || def.special?.crossRoomRequiresScout) return '方向';
  if (def.targetType === 'self') return '自己';
  if (def.targetType === 'single_enemy') return '敵';
  if (def.targetType === 'all_enemies') return def.special?.areaScope === 'room' ? '本房' : '範圍';
  if (def.targetType === 'single_ally') return '隊友';
  if (def.targetType === 'all_allies') return '全隊';
  return '';
}

function describeTargetMode(
  def: SkillDef,
  state: {
    inCombat: boolean;
    hasCombatTarget: boolean;
    hasSelectedMonster: boolean;
    selectedDirection: string | null;
  },
): string {
  if (def.special?.areaScope === 'adjacent_cardinal') return '東西南北四方';
  if (def.special?.crossRoom || def.special?.crossRoomRequiresScout) {
    return state.selectedDirection ? `指定方向:${state.selectedDirection}` : '需要選擇方向';
  }
  if (def.targetType === 'self') return '自己';
  if (def.targetType === 'single_enemy') {
    if (state.inCombat) return state.hasCombatTarget ? '目前戰鬥目標' : '需要選擇敵人';
    return state.hasSelectedMonster ? '選取怪物' : '需要選擇怪物';
  }
  if (def.targetType === 'all_enemies') return def.special?.areaScope === 'room' ? '本房所有怪物' : '戰鬥中所有敵人';
  if (def.targetType === 'single_ally') return '選取隊友，未選時預設自己';
  if (def.targetType === 'all_allies') return '全隊';
  return '目標';
}

function targetPrompt(def: SkillDef | undefined): string {
  if (!def) return '請先選擇有效目標。';
  if (def.special?.crossRoom || def.special?.crossRoomRequiresScout) return `「${def.name}」需要先在周邊戰鬥選擇方向。`;
  if (def.targetType === 'single_enemy') return `「${def.name}」需要先選擇怪物或戰鬥目標。`;
  if (def.targetType === 'single_ally') return `「${def.name}」需要選擇隊友，未選時會對自己施放。`;
  return `「${def.name}」需要選擇目標。`;
}
