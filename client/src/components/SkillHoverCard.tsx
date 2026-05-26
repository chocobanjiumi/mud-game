import { useState, type MouseEvent, type ReactNode } from 'react';
import { createPortal } from 'react-dom';
import { CLASS_DEFS, type ResourceType, type SkillDef } from '@game/shared';

interface SkillHoverCardProps {
  skill: SkillDef;
  currentCooldown?: number;
  disabledReason?: string;
  children: ReactNode;
}

function getResourceLabel(resourceType?: ResourceType): string {
  if (resourceType === 'rage') return '怒氣';
  if (resourceType === 'focus') return '專注';
  if (resourceType === 'faith') return '信仰';
  return '魔力';
}

function formatSignedResource(value: number, label: string): string {
  return `${value > 0 ? '+' : ''}${value} ${label}`;
}

function getSkillResourceText(skill: SkillDef): string {
  const faithDelta = skill.special?.faithDelta;
  if (typeof faithDelta === 'number') return formatSignedResource(faithDelta, '信仰');
  if (skill.special?.faithInvert) return '翻轉信仰';

  const resourceType = CLASS_DEFS[skill.classId]?.resourceType;
  const label = getResourceLabel(resourceType);
  return formatSignedResource(-skill.resourceCost, label);
}

export default function SkillHoverCard({
  skill,
  currentCooldown = 0,
  disabledReason,
  children,
}: SkillHoverCardProps) {
  const [position, setPosition] = useState<{ x: number; y: number } | null>(null);

  const updatePosition = (event: MouseEvent) => {
    if (typeof window === 'undefined') return;
    setPosition({
      x: Math.min(event.clientX + 14, window.innerWidth - 276),
      y: Math.max(12, event.clientY - 12),
    });
  };

  return (
    <span
      className="skill-hover-anchor"
      onMouseEnter={updatePosition}
      onMouseMove={updatePosition}
      onMouseLeave={() => setPosition(null)}
    >
      {children}
      {position && typeof document !== 'undefined' && createPortal(
        <div className="skill-tooltip-card" style={{ left: position.x, top: position.y }} role="tooltip">
          <div className="skill-tooltip-title">{skill.name}</div>
          <div className="skill-tooltip-meta">
            <span>{getSkillResourceText(skill)}</span>
            <span>CD {skill.cooldown}</span>
            {currentCooldown > 0 && <span>剩餘 {currentCooldown}</span>}
          </div>
          <div className="skill-tooltip-desc">{skill.shortDescription || skill.description}</div>
          {disabledReason && <div className="skill-tooltip-warn">{disabledReason}</div>}
        </div>,
        document.body,
      )}
    </span>
  );
}
