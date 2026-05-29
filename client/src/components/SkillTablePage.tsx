import { useMemo, useState } from 'react';
import type { ReactNode } from 'react';
import { CLASS_DEFS, SKILL_DEFS } from '@game/shared';
import type { ClassDef, ClassId, SkillDef } from '@game/shared';
import { getPublicAssetPath } from '../utils/assetImages';

const RESOURCE_LABELS: Record<string, string> = {
  mp: '魔力',
  rage: '怒氣',
  focus: '專注',
  faith: '信仰',
};

const TYPE_LABELS: Record<string, string> = {
  active: '主動',
  passive: '被動',
};

const CONTEXT_LABELS: Record<string, string> = {
  combat: '戰鬥',
  field: '非戰鬥',
  both: '戰鬥 / 非戰鬥',
};

const TARGET_LABELS: Record<string, string> = {
  single_enemy: '單體敵人',
  all_enemies: '所有敵人',
  self: '自己',
  single_ally: '單體友方',
  all_allies: '所有友方',
};

const DAMAGE_LABELS: Record<string, string> = {
  physical: '物理',
  magical: '魔法',
  pure: '純粹',
};

const ELEMENT_LABELS: Record<string, string> = {
  fire: '火',
  ice: '冰',
  lightning: '雷',
  light: '光',
  dark: '暗',
  nature: '自然',
  none: '無',
};

const TIER1_CLASS_IDS = ['swordsman', 'mage', 'ranger', 'priest'] as const satisfies readonly ClassId[];
const SKILL_FILTER_ALL = 'all';
type SkillFilterId = typeof SKILL_FILTER_ALL | ClassId;

function skillSort(a: SkillDef, b: SkillDef) {
  if (a.learnLevel !== b.learnLevel) return a.learnLevel - b.learnLevel;
  if (a.type !== b.type) return a.type === 'active' ? -1 : 1;
  return a.name.localeCompare(b.name, 'zh-Hant');
}

function skillsForClass(classId: string) {
  return Object.values(SKILL_DEFS)
    .filter((skill) => skill.classId === classId)
    .sort(skillSort);
}

function getSkillClassRows(): { classDef: ClassDef; skills: SkillDef[] }[] {
  const rows = [
    ...TIER1_CLASS_IDS.map((classId) => CLASS_DEFS[classId]),
    ...TIER1_CLASS_IDS.flatMap((classId) => (CLASS_DEFS[classId].advancedClasses ?? []).map((advancedClassId) => CLASS_DEFS[advancedClassId])),
  ];

  return rows
    .filter((classDef): classDef is ClassDef => Boolean(classDef) && classDef.id !== 'adventurer' && classDef.id !== 'monster')
    .map((classDef) => ({ classDef, skills: skillsForClass(classDef.id) }))
    .filter((entry) => entry.skills.length > 0);
}

function formatResource(skill: SkillDef) {
  const resourceType = CLASS_DEFS[skill.classId]?.resourceType ?? 'mp';
  const resourceLabel = RESOURCE_LABELS[resourceType] ?? resourceType;
  const sp = skill.special as Record<string, unknown> | undefined;
  const parts: string[] = [];
  parts.push(skill.resourceCost === 0 ? `0 ${resourceLabel}` : `-${skill.resourceCost} ${resourceLabel}`);
  const fatigueCost = sp?.fatigueCost;
  if (typeof fatigueCost === 'number' && fatigueCost > 0) {
    parts.push(`-${fatigueCost} 疲勞`);
  }
  const hpCost = sp?.hpCostPercent;
  if (typeof hpCost === 'number' && hpCost > 0) {
    parts.push(`-${hpCost}% HP`);
  }
  const rageGain = sp?.rageGain;
  if (typeof rageGain === 'number' && rageGain > 0) {
    parts.push(`+${rageGain} ${resourceLabel}`);
  }
  return parts.join(' / ');
}

function SkillBadges({ special }: { special: SkillDef['special'] }) {
  const sp = special as Record<string, unknown> | undefined;
  if (!sp) return null;
  const badges: { label: string; color: 'amber' | 'green' | 'red' }[] = [];

  if (sp.mountRequired) badges.push({ label: sp.autoDismount ? '騎乘限定 (自動下馬)' : '騎乘限定', color: 'amber' });
  else if (sp.mountEnhanced) badges.push({ label: '騎乘增強', color: 'green' });
  else if (sp.summonMount) badges.push({ label: '召喚坐騎', color: 'green' });

  const hpReq = sp.hpThresholdRequired;
  if (typeof hpReq === 'number') badges.push({ label: `需 HP ≤${hpReq}%`, color: 'red' });

  const STANCE_LABELS: Record<string, string> = { attack: '攻勢', technique: '技勢', defense: '守勢' };
  const stance = sp.stanceTransition;
  if (typeof stance === 'string' && STANCE_LABELS[stance]) {
    const stanceColors: Record<string, 'amber' | 'green' | 'red'> = { attack: 'red', technique: 'amber', defense: 'green' };
    badges.push({ label: `→${STANCE_LABELS[stance]}`, color: stanceColors[stance] ?? 'amber' });
  }

  if (badges.length === 0) return null;

  const colorMap = {
    amber: 'border-text-amber/40 bg-text-amber/10 text-text-amber',
    green: 'border-text-terminal/40 bg-text-terminal/10 text-text-terminal',
    red: 'border-red-400/40 bg-red-400/10 text-red-400',
  };

  return (
    <div className="mt-1 flex flex-wrap gap-1">
      {badges.map((b) => (
        <div key={b.label} className={`inline-block rounded border px-1.5 py-0.5 text-[10px] font-bold ${colorMap[b.color]}`}>
          {b.label}
        </div>
      ))}
    </div>
  );
}

function formatMultiplier(skill: SkillDef) {
  if (!skill.multiplier) return '無直接傷害';
  return `${Math.round(skill.multiplier * 100)}% ${DAMAGE_LABELS[skill.damageType] ?? skill.damageType}`;
}

function formatEffects(skill: SkillDef) {
  const parts: string[] = [];
  if (skill.effects?.length) {
    parts.push(...skill.effects.map((effect) => `${effect.type} ${effect.value} / ${effect.duration} tick`));
  }
  if (skill.special && Object.keys(skill.special).length > 0) {
    parts.push(...Object.entries(skill.special).map(([key, value]) => `${key}: ${formatValue(value)}`));
  }
  return parts.length > 0 ? parts.join('；') : '無';
}

function formatValue(value: unknown): string {
  if (Array.isArray(value)) return value.map(formatValue).join(', ');
  if (value && typeof value === 'object') {
    return Object.entries(value as Record<string, unknown>)
      .map(([key, nestedValue]) => `${key}=${formatValue(nestedValue)}`)
      .join(', ');
  }
  return String(value);
}

export function SkillWikiSection({ compact = false }: { compact?: boolean }) {
  const classRows = useMemo(() => getSkillClassRows(), []);
  const [activeClassId, setActiveClassId] = useState<SkillFilterId>(SKILL_FILTER_ALL);
  const visibleRows = activeClassId === SKILL_FILTER_ALL
    ? classRows
    : classRows.filter(({ classDef }) => classDef.id === activeClassId);
  const totalSkillCount = visibleRows.reduce((count, row) => count + row.skills.length, 0);

  return (
    <section className={compact ? '' : 'rounded-md border border-border-dim bg-bg-primary p-4'}>
      <div className="mb-4">
        <h1 className="text-2xl font-bold text-text-bright">技能取得表</h1>
        <p className="mt-2 text-sm leading-6 text-text-dim">
          內容由目前程式碼的 SKILL_DEFS 與 CLASS_DEFS 產生，名稱、消耗、冷卻、目標與效果會跟實作定義同步。共 {totalSkillCount} 個技能。
        </p>
      </div>

      <div className="mb-4 flex flex-wrap gap-2">
        <SkillFilterButton
          active={activeClassId === SKILL_FILTER_ALL}
          label="全部職業"
          count={classRows.reduce((count, row) => count + row.skills.length, 0)}
          onClick={() => setActiveClassId(SKILL_FILTER_ALL)}
        />
        {classRows.map(({ classDef, skills }) => (
          <SkillFilterButton
            key={classDef.id}
            active={activeClassId === classDef.id}
            label={classDef.name}
            count={skills.length}
            onClick={() => setActiveClassId(classDef.id)}
          />
        ))}
      </div>

      <div className="space-y-5">
        {visibleRows.map(({ classDef, skills }) => (
          <SkillClassBlock key={classDef.id} title={`${classDef.name}技能`} subtitle={classDef.description} skills={skills} />
        ))}
      </div>
    </section>
  );
}

function SkillFilterButton({ active, label, count, onClick }: { active: boolean; label: string; count: number; onClick: () => void }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`rounded border px-3 py-2 text-sm transition ${
        active
          ? 'border-text-terminal bg-bg-primary text-text-terminal'
          : 'border-border-dim text-text-dim hover:border-text-terminal hover:text-text-terminal'
      }`}
    >
      {label}
      <span className="ml-2 text-xs opacity-70">{count}</span>
    </button>
  );
}

function SkillClassBlock({ title, subtitle, skills, nested = false }: { title: string; subtitle: string; skills: SkillDef[]; nested?: boolean }) {
  return (
    <section className={nested ? '' : 'rounded-md border border-border-dim bg-bg-secondary p-4'}>
      <div className="mb-3">
        <h2 className="text-xl font-bold text-text-terminal">{title}</h2>
        <p className="mt-1 text-sm text-text-dim">{subtitle}</p>
      </div>
      <div className="overflow-x-auto rounded-md border border-border-dim bg-bg-primary">
        <table className="w-full min-w-[1180px] border-collapse text-left text-sm">
          <thead className="bg-bg-secondary text-xs text-text-dim">
            <tr>
              <Th>等級</Th>
              <Th>技能</Th>
              <Th>類型</Th>
              <Th>消耗 / CD</Th>
              <Th>目標</Th>
              <Th>傷害</Th>
              <Th>效果</Th>
              <Th>說明</Th>
            </tr>
          </thead>
          <tbody>
            {skills.map((skill) => (
              <tr key={skill.id} className="border-t border-border-dim align-top">
                <Td><span className="font-bold text-text-terminal">Lv.{skill.learnLevel}</span></Td>
                <Td>
                  <div className="flex min-w-[180px] items-start gap-2">
                    <img
                      src={getPublicAssetPath(skill.iconPath) ?? '/mud/images/skills/icons/starter_blank_01.png'}
                      alt=""
                      className="h-10 w-10 rounded border border-border-dim object-cover"
                      loading="lazy"
                    />
                    <div>
                      <div className="font-bold text-text-bright">{skill.name}</div>
                      <div className="text-[11px] text-text-dim">{skill.id}</div>
                      {skill.englishName && <div className="text-[11px] text-text-dim">{skill.englishName}</div>}
                    </div>
                  </div>
                </Td>
                <Td>
                  <div className="text-text-terminal">{TYPE_LABELS[skill.type] ?? skill.type}</div>
                  <div className="mt-1 text-xs text-text-dim">{CONTEXT_LABELS[skill.usageContext] ?? skill.usageContext}</div>
                  <TagList tags={skill.tags} />
                </Td>
                <Td>
                  <div className="font-bold text-text-amber">{formatResource(skill)}</div>
                  <div className="mt-1 text-xs text-text-dim">CD {skill.cooldown} tick</div>
                  <SkillBadges special={skill.special} />
                  {skill.scaling && (
                    <div className="mt-1 text-xs text-text-dim">係數 {skill.scaling.stat} x {skill.scaling.coefficient}</div>
                  )}
                </Td>
                <Td>{TARGET_LABELS[skill.targetType] ?? skill.targetType}</Td>
                <Td>
                  <div>{formatMultiplier(skill)}</div>
                  <div className="mt-1 text-xs text-text-dim">元素：{ELEMENT_LABELS[skill.element] ?? skill.element}</div>
                </Td>
                <Td><div className="max-w-sm text-xs leading-5 text-text-dim">{formatEffects(skill)}</div></Td>
                <Td><div className="max-w-xl text-xs leading-5 text-text-dim">{skill.fullDescription || skill.shortDescription || skill.description}</div></Td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}

function TagList({ tags }: { tags: string[] }) {
  if (tags.length === 0) return null;
  return (
    <div className="mt-2 flex max-w-[220px] flex-wrap gap-1">
      {tags.map((tag) => (
        <span key={tag} className="rounded border border-border-dim bg-bg-secondary px-1.5 py-0.5 text-[11px] text-text-dim">
          {tag}
        </span>
      ))}
    </div>
  );
}

export default function SkillTablePage() {
  return (
    <div className="h-full overflow-y-auto bg-bg-primary p-4 text-text-primary">
      <div className="mx-auto max-w-7xl">
        <SkillWikiSection />
      </div>
    </div>
  );
}

function Th({ children }: { children: ReactNode }) {
  return <th className="whitespace-nowrap px-3 py-2 font-bold">{children}</th>;
}

function Td({ children }: { children: ReactNode }) {
  return <td className="px-3 py-3">{children}</td>;
}
