import { useMemo, useState } from 'react';
import { ITEM_DEFS, SKILL_DEFS } from '@game/shared';
import type { MonsterDef } from '@game/shared';
import { ALL_MONSTERS } from '../../../server/src/data/merge-expansion';
import { DUNGEON_MONSTERS } from '../../../server/src/data/dungeons';

type MonsterTier = 'normal' | 'elite' | 'boss';

interface MonsterRow {
  def: MonsterDef;
  tier: MonsterTier;
  source: 'world' | 'dungeon';
}

const TABS: { id: MonsterTier; label: string }[] = [
  { id: 'normal', label: 'Normal' },
  { id: 'elite', label: 'Elite' },
  { id: 'boss', label: 'Boss' },
];

const ELEMENT_LABELS: Record<string, string> = {
  none: '無',
  fire: '火',
  ice: '冰',
  lightning: '雷',
  light: '光',
  dark: '暗',
  nature: '自然',
};

const AI_LABELS: Record<string, string> = {
  passive: '被動',
  aggressive: '侵略',
  defensive: '防守',
  healer: '治療',
  boss: '首領',
};

const FAMILY_LABELS: Record<string, string> = {
  ooze: '軟泥',
  beast: '野獸',
  humanoid: '人型',
  undead: '不死',
  demon: '惡魔',
  dragon: '龍族',
  construct: '構裝',
  elemental: '元素',
  plant: '植物',
  insect: '蟲類',
  aquatic: '水生',
  celestial: '天界',
  aberration: '異怪',
};

const BEHAVIOR_LABELS: Record<string, string> = {
  basic: '基礎',
  ambusher: '突襲',
  guardian: '守衛',
  caster: '施法',
  summoner: '召喚',
  phase_boss: '階段首領',
};

const allMonsterRows = buildMonsterRows();

export default function MonsterPage() {
  return (
    <div className="h-full overflow-y-auto bg-bg-primary text-text-primary">
      <div className="mx-auto max-w-[1600px] px-4 py-4">
        <MonsterWikiContent />
      </div>
    </div>
  );
}

export function MonsterWikiContent() {
  const [activeTier, setActiveTier] = useState<MonsterTier>('normal');
  const rowsByTier = useMemo(() => groupRowsByTier(allMonsterRows), []);
  const activeRows = rowsByTier[activeTier];

  return (
      <>
        <header className="mb-4 rounded-md border border-border-dim bg-bg-secondary p-4">
          <div className="flex flex-wrap items-end justify-between gap-3">
            <div>
              <h1 className="text-2xl font-bold text-text-bright">怪物資料整理</h1>
              <p className="mt-2 text-sm leading-6 text-text-dim">
                直接讀取目前程式碼中的主世界、擴充區域與副本怪物資料，依 normal / elite / boss 分類檢查。
              </p>
            </div>
            <div className="grid grid-cols-3 gap-2 text-center text-sm">
              {TABS.map((tab) => (
                <div key={tab.id} className="rounded border border-border-dim bg-bg-primary px-3 py-2">
                  <div className="font-bold text-text-bright">{rowsByTier[tab.id].length}</div>
                  <div className="text-xs text-text-dim">{tab.label}</div>
                </div>
              ))}
            </div>
          </div>
        </header>

        <div className="mb-4 flex flex-wrap gap-2">
          {TABS.map((tab) => (
            <button
              key={tab.id}
              type="button"
              onClick={() => setActiveTier(tab.id)}
              className={`rounded-md border px-4 py-2 text-sm font-semibold transition ${
                activeTier === tab.id
                  ? 'border-text-terminal bg-bg-tertiary text-text-terminal'
                  : 'border-border-dim bg-bg-secondary text-text-dim hover:border-text-dim hover:text-text-primary'
              }`}
            >
              {tab.label}
              <span className="ml-2 text-xs opacity-75">{rowsByTier[tab.id].length}</span>
            </button>
          ))}
        </div>

        <section className="rounded-md border border-border-dim bg-bg-secondary">
          <div className="flex flex-wrap items-center justify-between gap-2 border-b border-border-dim px-4 py-3">
            <h2 className="text-lg font-bold text-text-bright">{TABS.find((tab) => tab.id === activeTier)?.label} 怪物</h2>
            <div className="text-sm text-text-dim">
              等級 {formatLevelRange(activeRows)} · 世界 {activeRows.filter((row) => row.source === 'world').length} · 副本 {activeRows.filter((row) => row.source === 'dungeon').length}
            </div>
          </div>

          <div className="flex flex-wrap gap-2 border-b border-border-dim px-4 py-3">
            {formatFamilyCounts(activeRows).map(({ family, count }) => (
              <span key={family} className="rounded border border-border-dim bg-bg-primary px-2 py-1 text-xs text-text-dim">
                {FAMILY_LABELS[family] ?? family} {count}
              </span>
            ))}
          </div>

          <div className="overflow-x-auto">
            <table className="w-full min-w-[1400px] border-collapse text-left text-sm">
              <thead className="bg-bg-primary text-xs uppercase tracking-wide text-text-dim">
                <tr>
                  <Th>怪物</Th>
                  <Th>Lv / Tier</Th>
                  <Th>元素</Th>
                  <Th>族群</Th>
                  <Th>AI / 行為</Th>
                  <Th>HP / MP</Th>
                  <Th>能力</Th>
                  <Th>技能</Th>
                  <Th>掉落</Th>
                  <Th>經驗 / 金幣</Th>
                  <Th>標籤</Th>
                  <Th>說明</Th>
                </tr>
              </thead>
              <tbody>
                {activeRows.map((row) => (
                  <MonsterTableRow key={`${row.source}:${row.def.id}`} row={row} />
                ))}
              </tbody>
            </table>
          </div>
        </section>
      </>
  );
}

function MonsterTableRow({ row }: { row: MonsterRow }) {
  const { def } = row;

  return (
    <tr className="border-t border-border-dim align-top hover:bg-bg-primary/60">
      <Td>
        <div className="font-semibold text-text-bright">{def.name}</div>
        <div className="mt-1 font-mono text-xs text-text-dim">{def.id}</div>
        <div className="mt-1 text-xs text-text-dim">{def.alias}</div>
      </Td>
      <Td>
        <div>Lv.{def.level}</div>
        <Badge tone={row.tier}>{row.tier}</Badge>
        <div className="mt-1 text-xs text-text-dim">{row.source === 'dungeon' ? '副本' : '世界'}</div>
      </Td>
      <Td>{ELEMENT_LABELS[def.element] ?? def.element}</Td>
      <Td>{FAMILY_LABELS[def.family] ?? def.family}</Td>
      <Td>
        <div>{AI_LABELS[def.aiType] ?? def.aiType}</div>
        <div className="mt-1 text-xs text-text-dim">{def.behaviorType ? BEHAVIOR_LABELS[def.behaviorType] ?? def.behaviorType : '自動推導'}</div>
      </Td>
      <Td>
        <div>HP {def.hp}</div>
        <div className="mt-1 text-xs text-text-dim">MP {def.mp}</div>
      </Td>
      <Td>{formatStats(def)}</Td>
      <Td>{formatSkills(def.skills)}</Td>
      <Td>{formatDrops(def.drops)}</Td>
      <Td>
        <div>EXP {def.expReward}</div>
        <div className="mt-1 text-xs text-text-dim">Gold {def.goldReward[0]}-{def.goldReward[1]}</div>
      </Td>
      <Td>{formatTags(def)}</Td>
      <Td className="max-w-[320px] leading-6">{def.description}</Td>
    </tr>
  );
}

function buildMonsterRows(): MonsterRow[] {
  const seen = new Set<string>();
  const rows: MonsterRow[] = [];

  for (const def of Object.values(ALL_MONSTERS)) {
    rows.push({ def, tier: getMonsterTier(def), source: 'world' });
    seen.add(def.id);
  }

  for (const def of Object.values(DUNGEON_MONSTERS)) {
    if (seen.has(def.id)) continue;
    rows.push({ def, tier: getMonsterTier(def), source: 'dungeon' });
  }

  return rows.sort((a, b) => a.def.level - b.def.level || a.def.name.localeCompare(b.def.name, 'zh-Hant'));
}

function groupRowsByTier(rows: MonsterRow[]): Record<MonsterTier, MonsterRow[]> {
  return {
    normal: rows.filter((row) => row.tier === 'normal'),
    elite: rows.filter((row) => row.tier === 'elite'),
    boss: rows.filter((row) => row.tier === 'boss'),
  };
}

function getMonsterTier(def: MonsterDef): MonsterTier {
  if (def.isBoss || def.aiType === 'boss') return 'boss';
  if (def.isElite) return 'elite';
  return 'normal';
}

function formatLevelRange(rows: MonsterRow[]): string {
  if (!rows.length) return '-';
  const levels = rows.map((row) => row.def.level);
  return `${Math.min(...levels)}-${Math.max(...levels)}`;
}

function formatFamilyCounts(rows: MonsterRow[]): { family: string; count: number }[] {
  const counts = new Map<string, number>();
  for (const row of rows) {
    counts.set(row.def.family, (counts.get(row.def.family) ?? 0) + 1);
  }
  return [...counts.entries()]
    .map(([family, count]) => ({ family, count }))
    .sort((a, b) => b.count - a.count || (FAMILY_LABELS[a.family] ?? a.family).localeCompare(FAMILY_LABELS[b.family] ?? b.family, 'zh-Hant'));
}

function formatStats(def: MonsterDef): string {
  return [
    `STR ${def.str}`,
    `INT ${def.int}`,
    `DEX ${def.dex}`,
    `VIT ${def.vit}`,
    `LUK ${def.luk}`,
  ].join(' / ');
}

function formatSkills(skillIds: string[]): string {
  if (!skillIds.length) return '無';
  return skillIds
    .map((skillId) => SKILL_DEFS[skillId]?.name ? `${SKILL_DEFS[skillId].name} (${skillId})` : skillId)
    .join('、');
}

function formatDrops(drops: MonsterDef['drops']): string {
  if (!drops.length) return '無';
  return drops
    .map((drop) => {
      const itemName = ITEM_DEFS[drop.itemId]?.name ?? drop.itemId;
      const qty = drop.minQty === drop.maxQty ? `${drop.minQty}` : `${drop.minQty}-${drop.maxQty}`;
      return `${itemName} ${Math.round(drop.chance * 100)}% x${qty}`;
    })
    .join('、');
}

function formatTags(def: MonsterDef): string {
  const tags = new Set([
    def.isBoss ? 'boss' : null,
    def.isElite ? 'elite' : null,
    def.aiType !== 'passive' ? def.aiType : null,
    def.family,
    def.element !== 'none' ? def.element : null,
    ...(def.mechanicSkillTags ?? []),
  ].filter((tag): tag is string => Boolean(tag)));

  return tags.size ? [...tags].join('、') : '無';
}

function Th({ children }: { children: React.ReactNode }) {
  return <th className="px-3 py-3 font-semibold">{children}</th>;
}

function Td({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  return <td className={`px-3 py-3 text-text-primary ${className}`}>{children}</td>;
}

function Badge({ children, tone }: { children: React.ReactNode; tone: MonsterTier }) {
  const className = tone === 'boss'
    ? 'border-red-500/40 bg-red-500/10 text-red-200'
    : tone === 'elite'
      ? 'border-amber-500/40 bg-amber-500/10 text-amber-200'
      : 'border-border-dim bg-bg-primary text-text-dim';

  return (
    <span className={`mt-2 inline-flex rounded border px-2 py-0.5 text-xs font-semibold ${className}`}>
      {children}
    </span>
  );
}
