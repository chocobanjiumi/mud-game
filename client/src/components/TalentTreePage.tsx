import { useMemo, useState } from 'react';
import {
  TALENT_FAMILY_DRAFTS,
  getTalentDraftSummary,
  getTalentNodesByBranch,
  type TalentFamilyDraft,
  type TalentNodeDraft,
} from '../content/talentTreeDrafts';

export default function TalentTreePage() {
  const [activeFamilyId, setActiveFamilyId] = useState(TALENT_FAMILY_DRAFTS[0].id);
  const [plannedPoints, setPlannedPoints] = useState<Record<string, number>>({});
  const summary = useMemo(() => getTalentDraftSummary(), []);
  const activeFamily = TALENT_FAMILY_DRAFTS.find((family) => family.id === activeFamilyId) ?? TALENT_FAMILY_DRAFTS[0];
  const activePoints = activeFamily.nodes.reduce((sum, nodeDef) => sum + (plannedPoints[nodeDef.id] ?? 0), 0);

  const updateNode = (nodeDef: TalentNodeDraft, delta: number) => {
    setPlannedPoints((current) => {
      const nextValue = Math.max(0, Math.min(nodeDef.maxRank, (current[nodeDef.id] ?? 0) + delta));
      return { ...current, [nodeDef.id]: nextValue };
    });
  };

  const copyBuild = async () => {
    const lines = activeFamily.nodes
      .filter((nodeDef) => (plannedPoints[nodeDef.id] ?? 0) > 0)
      .map((nodeDef) => `${nodeDef.name} ${plannedPoints[nodeDef.id]}/${nodeDef.maxRank}`);
    if (typeof navigator !== 'undefined' && navigator.clipboard) {
      await navigator.clipboard.writeText(`${activeFamily.name}\n${lines.join('\n')}`);
    }
  };

  return (
    <div className="h-full overflow-y-auto bg-bg-primary text-text-primary">
      <div className="mx-auto max-w-[1500px] space-y-4 px-4 py-4">
        <header className="rounded-md border border-border-dim bg-bg-secondary p-4">
          <div className="text-xs uppercase text-text-dim">Talent Draft</div>
          <h1 className="mt-1 text-2xl font-bold text-text-bright">天賦樹文案規劃</h1>
          <p className="mt-2 max-w-5xl text-sm leading-6 text-text-dim">
            此頁為文案規劃，不是正式成長系統。天賦採每級 1 點、Diablo 2 式清楚分支，
            並刻意避開直接強化既有技能傷害、冷卻或治療量，只描述 build 規則與戰術取捨。
          </p>
        </header>

        <section className="grid gap-3 md:grid-cols-4">
          <Metric label="職業系列" value={summary.families} />
          <Metric label="分支" value={summary.branches} />
          <Metric label="Node" value={summary.nodes} />
          <Metric label="Keystone" value={summary.keystones} />
        </section>

        <nav className="sticky top-0 z-20 flex gap-2 overflow-x-auto border-b border-border-dim bg-bg-primary/95 py-3 backdrop-blur">
          {TALENT_FAMILY_DRAFTS.map((family) => (
            <button
              key={family.id}
              type="button"
              onClick={() => setActiveFamilyId(family.id)}
              className={`rounded border px-3 py-2 text-sm transition ${
                family.id === activeFamily.id
                  ? 'border-border-glow bg-bg-secondary text-text-terminal'
                  : 'border-border-dim bg-bg-primary text-text-dim hover:text-text-bright'
              }`}
            >
              {family.name}
            </button>
          ))}
        </nav>

        <FamilyHeader family={activeFamily} activePoints={activePoints} onCopyBuild={copyBuild} />

        <section className="grid gap-4 xl:grid-cols-3">
          {activeFamily.branches.map((branch) => (
            <article key={branch.id} className="rounded-md border border-border-dim bg-bg-secondary p-4">
              <div className="mb-3">
                <h2 className="text-lg font-bold text-text-terminal">{branch.name}</h2>
                <p className="mt-1 text-xs leading-5 text-text-dim">{branch.identity}</p>
                <p className="mt-2 text-xs text-text-amber">{branch.buildIntent}</p>
              </div>
              <div className="space-y-3">
                {getTalentNodesByBranch(activeFamily, branch.id).map((nodeDef) => (
                  <TalentNodeCard
                    key={nodeDef.id}
                    nodeDef={nodeDef}
                    value={plannedPoints[nodeDef.id] ?? 0}
                    onIncrement={() => updateNode(nodeDef, 1)}
                    onDecrement={() => updateNode(nodeDef, -1)}
                  />
                ))}
              </div>
            </article>
          ))}
        </section>
      </div>
    </div>
  );
}

function FamilyHeader({ family, activePoints, onCopyBuild }: { family: TalentFamilyDraft; activePoints: number; onCopyBuild: () => void }) {
  return (
    <section className="rounded-md border border-border-dim bg-bg-secondary p-4">
      <div className="flex flex-col gap-3 lg:flex-row lg:items-start lg:justify-between">
        <div>
          <h2 className="text-xl font-bold text-text-bright">{family.name}</h2>
          <p className="mt-2 max-w-5xl text-sm leading-6 text-text-dim">{family.coreFantasy}</p>
          <p className="mt-2 text-xs text-text-terminal">{family.pointModel}</p>
        </div>
        <div className="flex shrink-0 items-center gap-2">
          <div className="rounded border border-border-dim bg-bg-primary px-3 py-2 text-sm text-text-dim">
            已投入 <span className="font-bold text-text-bright">{activePoints}</span> 點
          </div>
          <button
            type="button"
            onClick={onCopyBuild}
            className="rounded border border-border-dim bg-bg-primary px-3 py-2 text-sm text-text-terminal hover:border-border-glow"
          >
            複製 build
          </button>
        </div>
      </div>
    </section>
  );
}

function TalentNodeCard({
  nodeDef,
  value,
  onIncrement,
  onDecrement,
}: {
  nodeDef: TalentNodeDraft;
  value: number;
  onIncrement: () => void;
  onDecrement: () => void;
}) {
  const copyNode = async () => {
    if (typeof navigator !== 'undefined' && navigator.clipboard) {
      await navigator.clipboard.writeText(`${nodeDef.name}\n${nodeDef.uiCopy}\n${nodeDef.mechanic}`);
    }
  };

  return (
    <div className={`rounded border bg-bg-primary p-3 ${nodeDef.keystone ? 'border-text-amber/70' : 'border-border-dim'}`}>
      <div className="flex items-start justify-between gap-2">
        <div>
          <div className="flex flex-wrap items-center gap-2">
            <h3 className="font-bold text-text-bright">{nodeDef.name}</h3>
            {nodeDef.keystone && <Badge tone="amber">Keystone</Badge>}
            <Badge>Tier {nodeDef.tier}</Badge>
            <Badge>Lv.{nodeDef.requiredLevel}</Badge>
          </div>
          <div className="mt-1 text-[11px] text-text-dim">{nodeDef.id}</div>
        </div>
        <div className="flex items-center gap-1">
          <button
            type="button"
            onClick={onDecrement}
            className="h-7 w-7 rounded border border-border-dim text-text-dim hover:text-text-bright"
            aria-label={`${nodeDef.name} 減少點數`}
          >
            -
          </button>
          <div className="w-12 text-center text-sm font-bold text-text-terminal">{value}/{nodeDef.maxRank}</div>
          <button
            type="button"
            onClick={onIncrement}
            className="h-7 w-7 rounded border border-border-dim text-text-dim hover:text-text-bright"
            aria-label={`${nodeDef.name} 增加點數`}
          >
            +
          </button>
        </div>
      </div>

      <p className="mt-3 text-sm leading-6 text-text-dim">{nodeDef.uiCopy}</p>
      <Info title="規則" text={nodeDef.mechanic} />
      <Info title="Build intent" text={nodeDef.buildIntent} />
      <Info title="非技能直加確認" text={nodeDef.notSkillUpgradeNote} />
      <Info title="Balance note" text={nodeDef.balanceNote} />
      <div className="mt-2 flex flex-wrap gap-2">
        {nodeDef.prerequisites.length > 0 ? nodeDef.prerequisites.map((prereq) => <Badge key={prereq}>{prereq}</Badge>) : <Badge>無前置</Badge>}
        <button type="button" onClick={copyNode} className="rounded border border-border-dim px-2 py-0.5 text-[11px] text-text-terminal hover:border-border-glow">
          複製 node
        </button>
      </div>
    </div>
  );
}

function Info({ title, text }: { title: string; text: string }) {
  return (
    <div className="mt-2 rounded border border-border-dim bg-bg-secondary px-2 py-1.5">
      <div className="text-[11px] font-bold text-text-terminal">{title}</div>
      <div className="mt-1 text-xs leading-5 text-text-dim">{text}</div>
    </div>
  );
}

function Metric({ label, value }: { label: string; value: number }) {
  return (
    <div className="rounded-md border border-border-dim bg-bg-secondary p-3">
      <div className="text-xs text-text-dim">{label}</div>
      <div className="mt-1 text-2xl font-bold text-text-bright">{value}</div>
    </div>
  );
}

function Badge({ children, tone = 'default' }: { children: string; tone?: 'default' | 'amber' }) {
  return (
    <span className={`rounded border px-2 py-0.5 text-[11px] ${
      tone === 'amber'
        ? 'border-text-amber/40 bg-text-amber/10 text-text-amber'
        : 'border-border-dim bg-bg-secondary text-text-dim'
    }`}>
      {children}
    </span>
  );
}
