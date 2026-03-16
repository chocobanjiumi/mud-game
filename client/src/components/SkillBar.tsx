import { useGameStore } from '../stores/gameStore';

interface SkillBarProps {
  onUseSkill: (skillId: string) => void;
}

export default function SkillBar({ onUseSkill }: SkillBarProps) {
  const skills = useGameStore((s) => s.skills);
  const inCombat = useGameStore((s) => s.inCombat);

  if (skills.length === 0) return null;

  return (
    <div className="bg-bg-secondary border-t border-border-dim px-3 py-1.5">
      <div className="flex items-center gap-1 overflow-x-auto">
        <span className="text-[10px] text-text-dim mr-1 shrink-0">技能:</span>
        {skills.map((skill, index) => {
          const onCooldown = skill.currentCooldown > 0;
          const hotkey = index < 9 ? `${index + 1}` : null;

          return (
            <button
              key={skill.skillId}
              onClick={() => !onCooldown && onUseSkill(skill.skillId)}
              disabled={onCooldown || !inCombat}
              className={`
                relative px-2 py-1 text-xs rounded border cursor-pointer
                ${
                  onCooldown
                    ? 'border-border-dim/50 bg-bg-primary/30 text-text-dim cursor-not-allowed'
                    : inCombat
                      ? 'border-border-glow/30 bg-bg-tertiary/50 text-text-terminal hover:bg-bg-tertiary hover:border-border-glow/60'
                      : 'border-border-dim/50 bg-bg-primary/30 text-text-dim cursor-not-allowed'
                }
                transition-colors
              `}
              title={`${skill.skillId}${onCooldown ? ` (冷卻: ${skill.currentCooldown}回合)` : ''}`}
            >
              {/* Hotkey badge */}
              {hotkey && (
                <span className="absolute -top-1 -left-1 bg-bg-panel text-text-dim text-[8px] w-3 h-3 flex items-center justify-center rounded">
                  {hotkey}
                </span>
              )}
              <span className="truncate max-w-16 block">{skill.skillId}</span>
              {/* Cooldown overlay */}
              {onCooldown && (
                <span className="absolute inset-0 flex items-center justify-center bg-bg-primary/60 rounded text-text-amber text-[10px] font-bold">
                  {skill.currentCooldown}
                </span>
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
}
