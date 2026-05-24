import { CLASS_DEFS, FAITH_DEFS, RACE_DEFS, SKILL_DEFS, type ClassId, type SkillDef, type SkillTargetType, type SkillUsageContext } from '@game/shared';

const CLASS_ORDER: ClassId[] = [
  'adventurer',
  'swordsman',
  'mage',
  'ranger',
  'priest',
  'knight',
  'berserker',
  'sword_saint',
  'archmage',
  'warlock',
  'chronomancer',
  'marksman',
  'assassin',
  'beast_master',
  'high_priest',
  'druid',
  'inquisitor',
];

const targetLabels: Record<SkillTargetType, string> = {
  single_enemy: '單體敵人',
  all_enemies: '所有敵人',
  self: '自己',
  single_ally: '單體隊友',
  all_allies: '所有隊友',
};

const damageLabels = {
  physical: '物理',
  magical: '魔法',
  pure: '純效果',
};

const elementLabels = {
  fire: '火',
  ice: '冰',
  lightning: '雷',
  light: '光',
  dark: '暗',
  nature: '自然',
  none: '-',
};

const typeLabels = {
  active: '主動',
  passive: '被動',
};

const usageLabels: Record<SkillUsageContext, string> = {
  combat: '戰鬥',
  field: '平時',
  both: '兩者',
};

const classNotes: Record<ClassId, string> = {
  adventurer: '通用技能。創角會先取得揮砍，其他通用技能依等級設計解鎖。',
  swordsman: '一轉：劍士',
  mage: '一轉：法師',
  ranger: '一轉：遊俠',
  priest: '一轉：祭司',
  knight: '二轉：劍士系',
  berserker: '二轉：劍士系',
  sword_saint: '二轉：劍士系',
  archmage: '二轉：法師系',
  warlock: '二轉：法師系',
  chronomancer: '二轉：法師系',
  marksman: '二轉：遊俠系',
  assassin: '二轉：遊俠系',
  beast_master: '二轉：遊俠系',
  high_priest: '二轉：祭司系',
  druid: '二轉：祭司系',
  inquisitor: '二轉：祭司系',
  monster: '怪物專用',
};

export default function SkillTablePage() {
  const skillsByClass = CLASS_ORDER.map((classId) => ({
    classId,
    classDef: CLASS_DEFS[classId],
    skills: getSkillsForClass(classId),
  })).filter((group) => group.skills.length > 0);
  const originSkills = getOriginSkills();
  const totalPlayerSkills = skillsByClass.reduce((sum, group) => sum + group.skills.length, 0) + originSkills.length;

  return (
    <div className="h-screen overflow-y-auto bg-bg-primary px-4 py-5 pb-12 text-text-bright scanline lg:px-8">
      <div className="mx-auto flex max-w-7xl flex-col gap-5">
        <header className="border-b border-border-dim pb-4">
          <div className="text-xs uppercase tracking-wide text-text-dim">MUD Reference</div>
          <h1 className="mt-1 text-2xl font-bold text-text-terminal text-glow">技能獲得等級表</h1>
          <p className="mt-2 max-w-3xl text-sm leading-6 text-text-dim">
            這張表直接讀取遊戲共用技能定義。任務欄位有值時，除了等級達標外還需要完成指定任務。
          </p>
          <div className="mt-3 flex flex-wrap gap-2 text-xs">
            <StatPill label="玩家技能" value={totalPlayerSkills.toString()} />
            <StatPill label="職業線" value={skillsByClass.length.toString()} />
            <StatPill label="種族/信仰被動" value={originSkills.length.toString()} />
          </div>
        </header>

        <nav className="sticky top-0 z-20 flex flex-wrap gap-2 border-b border-border-dim bg-bg-primary/95 py-3 backdrop-blur">
          {skillsByClass.map(({ classId, classDef }) => (
            <a
              key={classId}
              href={`#${classId}`}
              className="rounded border border-border-dim bg-bg-secondary px-3 py-2 text-xs text-text-bright transition-colors hover:border-border-glow hover:text-text-terminal"
            >
              {classDef.name}
            </a>
          ))}
          <a
            href="#origin-passives"
            className="rounded border border-border-dim bg-bg-secondary px-3 py-2 text-xs text-text-bright transition-colors hover:border-border-glow hover:text-text-terminal"
          >
            種族/信仰被動
          </a>
        </nav>

        <main className="flex flex-col gap-6">
          {skillsByClass.map(({ classId, classDef, skills }) => (
            <section key={classId} id={classId} className="scroll-mt-28">
              <div className="mb-3 flex flex-wrap items-end justify-between gap-2">
                <div>
                  <h2 className="text-xl font-bold text-text-terminal">{classDef.name}</h2>
                  <div className="mt-1 text-xs text-text-dim">{classNotes[classId]}</div>
                </div>
                <div className="text-xs text-text-dim">{skills.length} 個技能</div>
              </div>
              <SkillTable skills={skills} />
            </section>
          ))}

          <section id="origin-passives" className="scroll-mt-28">
            <div className="mb-3 flex flex-wrap items-end justify-between gap-2">
              <div>
                <h2 className="text-xl font-bold text-text-terminal">種族與信仰被動</h2>
                <div className="mt-1 text-xs text-text-dim">創角時依角色種族與信仰取得對應被動。</div>
              </div>
              <div className="text-xs text-text-dim">{originSkills.length} 個被動</div>
            </div>
            <SkillTable skills={originSkills} />
          </section>
        </main>
      </div>
    </div>
  );
}

function SkillTable({ skills }: { skills: SkillDef[] }) {
  return (
    <div className="overflow-x-auto rounded-md border border-border-dim bg-bg-secondary">
      <table className="min-w-[1060px] w-full border-collapse text-left text-sm">
        <thead className="bg-bg-primary text-xs text-text-dim">
          <tr>
            <Th>等級</Th>
            <Th>技能</Th>
            <Th>型態</Th>
            <Th>場景</Th>
            <Th>目標</Th>
            <Th>傷害</Th>
            <Th>消耗</Th>
            <Th>CD</Th>
            <Th>任務</Th>
            <Th>說明</Th>
          </tr>
        </thead>
        <tbody>
          {skills.map((skill) => (
            <tr key={skill.id} className="border-t border-border-dim align-top">
              <Td>
                <span className="font-bold text-text-terminal">Lv.{skill.learnLevel}</span>
              </Td>
              <Td>
                <div className="font-bold text-text-bright">{skill.name}</div>
                <div className="mt-1 text-xs text-text-dim">{skill.id}</div>
              </Td>
              <Td>{typeLabels[skill.type]}</Td>
              <Td>
                <span className="rounded border border-border-dim bg-bg-primary px-2 py-1 text-xs text-text-terminal">
                  {usageLabels[skill.usageContext]}
                </span>
              </Td>
              <Td>{targetLabels[skill.targetType]}</Td>
              <Td>
                <div>{damageLabels[skill.damageType]}</div>
                <div className="mt-1 text-xs text-text-dim">{elementLabels[skill.element]} / x{skill.multiplier}</div>
              </Td>
              <Td>{skill.resourceCost}</Td>
              <Td>{skill.cooldown}</Td>
              <Td>
                {skill.questUnlock
                  ? <span className="text-text-amber">{skill.questUnlock.questId}</span>
                  : <span className="text-text-dim">-</span>}
              </Td>
              <Td>
                <div className="line-clamp-3 max-w-xl text-xs leading-5 text-text-dim">{skill.description}</div>
              </Td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function Th({ children }: { children: React.ReactNode }) {
  return <th className="whitespace-nowrap px-3 py-2 font-bold">{children}</th>;
}

function Td({ children }: { children: React.ReactNode }) {
  return <td className="px-3 py-3">{children}</td>;
}

function StatPill({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded border border-border-dim bg-bg-secondary px-3 py-2">
      <span className="text-text-dim">{label}</span>
      <span className="ml-2 font-bold text-text-bright">{value}</span>
    </div>
  );
}

function getSkillsForClass(classId: ClassId): SkillDef[] {
  return Object.values(SKILL_DEFS)
    .filter((skill) => skill.classId === classId && !skill.id.startsWith('race_') && !skill.id.startsWith('faith_'))
    .sort(sortSkills);
}

function getOriginSkills(): SkillDef[] {
  const originSkillIds = new Set([
    ...Object.values(RACE_DEFS).map((race) => race.passiveSkillId),
    ...Object.values(FAITH_DEFS).map((faith) => faith.passiveSkillId),
  ]);
  return Object.values(SKILL_DEFS)
    .filter((skill) => originSkillIds.has(skill.id))
    .sort((a, b) => a.name.localeCompare(b.name, 'zh-Hant'));
}

function sortSkills(a: SkillDef, b: SkillDef): number {
  if (a.learnLevel !== b.learnLevel) return a.learnLevel - b.learnLevel;
  if (a.type !== b.type) return a.type.localeCompare(b.type);
  return a.name.localeCompare(b.name, 'zh-Hant');
}
