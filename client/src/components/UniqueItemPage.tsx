import { useMemo, useState } from 'react';
import {
  UNIQUE_ITEM_CATEGORY_LABELS,
  UNIQUE_ITEM_DRAFTS,
  UNIQUE_ITEM_FAMILY_LABELS,
  UNIQUE_ITEM_STATUS_LABELS,
  type UniqueItemCategory,
  type UniqueItemFamily,
  type UniqueItemStatus,
} from '../content/uniqueItemDrafts';

type FilterValue = 'all';

const ALL = 'all' as const;

const FAMILY_OPTIONS: (FilterValue | UniqueItemFamily)[] = [ALL, 'warrior', 'mage', 'priest', 'ranger', 'hybrid'];
const CATEGORY_OPTIONS: (FilterValue | UniqueItemCategory)[] = [ALL, 'weapon', 'offhand', 'armor', 'accessory'];
const STATUS_OPTIONS: (FilterValue | UniqueItemStatus)[] = [ALL, 'pending', 'shortlisted', 'selected', 'rejected'];

const FAMILY_SUMMARIES = [
  { id: 'warrior', label: '戰士系列', text: '以格擋、嘲諷、低血、近戰範圍與承傷反擊作為 item 規則入口。' },
  { id: 'mage', label: '法師系列', text: '以 MP 節奏、元素輪轉、護盾、隔房法術與房間塑形作為 item 規則入口。' },
  { id: 'priest', label: '祭司系列', text: '以信仰、治療、過量護盾、淨化、反不死與隊伍保護作為 item 規則入口。' },
  { id: 'ranger', label: '遊俠系列', text: '以專注、標記、偵查、陷阱、隔房攻擊與機動換位作為 item 規則入口。' },
] as const;

export default function UniqueItemPage() {
  const [family, setFamily] = useState<FilterValue | UniqueItemFamily>(ALL);
  const [category, setCategory] = useState<FilterValue | UniqueItemCategory>(ALL);
  const [status, setStatus] = useState<FilterValue | UniqueItemStatus>(ALL);
  const [typeOrSlot, setTypeOrSlot] = useState<FilterValue | string>(ALL);
  const [mechanicTag, setMechanicTag] = useState<FilterValue | string>(ALL);
  const [loreSource, setLoreSource] = useState<FilterValue | string>(ALL);

  const typeOptions = useMemo(
    () => [ALL, ...Array.from(new Set(UNIQUE_ITEM_DRAFTS.map((item) => item.typeOrSlot))).sort()],
    [],
  );
  const mechanicOptions = useMemo(
    () => [ALL, ...Array.from(new Set(UNIQUE_ITEM_DRAFTS.flatMap((item) => item.mechanicTags))).sort()],
    [],
  );
  const loreOptions = useMemo(
    () => [ALL, ...Array.from(new Set(UNIQUE_ITEM_DRAFTS.map((item) => item.loreSource))).sort((a, b) => a.localeCompare(b, 'zh-Hant'))],
    [],
  );

  const visibleItems = useMemo(
    () => UNIQUE_ITEM_DRAFTS.filter((item) => (
      (family === ALL || item.intendedBuild === family)
      && (category === ALL || item.category === category)
      && (status === ALL || item.selectionStatus === status)
      && (typeOrSlot === ALL || item.typeOrSlot === typeOrSlot)
      && (mechanicTag === ALL || item.mechanicTags.includes(mechanicTag))
      && (loreSource === ALL || item.loreSource === loreSource)
    )),
    [category, family, loreSource, mechanicTag, status, typeOrSlot],
  );

  return (
    <div className="h-full overflow-y-auto bg-bg-primary text-text-primary">
      <div className="mx-auto max-w-[1500px] space-y-4 px-4 py-4">
        <header className="rounded-md border border-border-dim bg-bg-secondary p-4">
          <div className="text-xs uppercase text-text-dim">Unique Candidate Pool</div>
          <h1 className="mt-1 text-2xl font-bold text-text-bright">Unique 武器與裝備候選池</h1>
          <p className="mt-2 max-w-5xl text-sm leading-6 text-text-dim">
            此頁是 unique 候選池，不是正式實裝清單；只整理文案與候選機制，尚未接入正式裝備 manifest、掉落、戰鬥計算或圖片生成。
            第一批先用 20 個 benchmark item 校準獨特程度、世界觀連結與產圖描述品質。
          </p>
        </header>

        <section className="grid gap-3 md:grid-cols-2 xl:grid-cols-4">
          {FAMILY_SUMMARIES.map((entry) => (
            <article key={entry.id} className="rounded-md border border-border-dim bg-bg-secondary p-3">
              <div className="font-bold text-text-terminal">{entry.label}</div>
              <p className="mt-2 text-xs leading-5 text-text-dim">{entry.text}</p>
            </article>
          ))}
        </section>

        <section className="rounded-md border border-border-dim bg-bg-secondary p-4">
          <div className="mb-3 flex flex-wrap items-end gap-3">
            <FilterGroup label="職業系列" value={family} options={FAMILY_OPTIONS} getLabel={labelFamily} onChange={setFamily} />
            <FilterGroup label="分類" value={category} options={CATEGORY_OPTIONS} getLabel={labelCategory} onChange={setCategory} />
            <FilterGroup label="Type / Slot" value={typeOrSlot} options={typeOptions} getLabel={labelRaw} onChange={setTypeOrSlot} />
            <FilterGroup label="機制標籤" value={mechanicTag} options={mechanicOptions} getLabel={labelRaw} onChange={setMechanicTag} />
            <FilterGroup label="Lore source" value={loreSource} options={loreOptions} getLabel={labelRaw} onChange={setLoreSource} />
            <FilterGroup label="狀態" value={status} options={STATUS_OPTIONS} getLabel={labelStatus} onChange={setStatus} />
          </div>
          <div className="text-sm text-text-dim">
            顯示 <span className="font-bold text-text-bright">{visibleItems.length}</span> / {UNIQUE_ITEM_DRAFTS.length} 個候選。
          </div>
        </section>

        <section className="grid gap-3">
          {visibleItems.map((item) => (
            <article key={item.id} className="rounded-md border border-border-dim bg-bg-secondary p-4">
              <div className="flex flex-col gap-3 lg:flex-row lg:items-start lg:justify-between">
                <div>
                  <div className="flex flex-wrap items-center gap-2">
                    <h2 className="text-xl font-bold text-text-bright">{item.name}</h2>
                    <Badge>{UNIQUE_ITEM_CATEGORY_LABELS[item.category]}</Badge>
                    <Badge>{String(item.typeOrSlot)}</Badge>
                    <Badge>{item.rarity}</Badge>
                    <Badge>{UNIQUE_ITEM_STATUS_LABELS[item.selectionStatus]}</Badge>
                  </div>
                  <div className="mt-1 text-xs text-text-dim">{item.id}</div>
                </div>
                <div className="text-sm text-text-terminal">{UNIQUE_ITEM_FAMILY_LABELS[item.intendedBuild]}</div>
              </div>

              <div className="mt-4 grid gap-3 lg:grid-cols-[1fr_1fr]">
                <InfoBlock title="核心機制">{item.uniqueEffect}</InfoBlock>
                <InfoBlock title="觸發 / 限制">
                  {item.trigger}；{item.cooldownOrLimit}
                </InfoBlock>
                <InfoBlock title="目標 / 角色">
                  {item.targetScope}；{item.combatRole}
                </InfoBlock>
                <InfoBlock title="代價">{item.drawback}</InfoBlock>
              </div>

              <div className="mt-3 grid gap-3 lg:grid-cols-[1.1fr_1fr]">
                <InfoBlock title="描述">{item.description}</InfoBlock>
                <InfoBlock title="產圖描述">{item.visualPrompt}</InfoBlock>
              </div>

              <div className="mt-3 flex flex-wrap gap-2">
                <Badge tone="amber">{item.loreSource}</Badge>
                {item.mechanicTags.map((tag) => <Badge key={tag}>{tag}</Badge>)}
              </div>
            </article>
          ))}
        </section>
      </div>
    </div>
  );
}

function FilterGroup<T extends string>({
  label,
  value,
  options,
  getLabel,
  onChange,
}: {
  label: string;
  value: T;
  options: readonly T[];
  getLabel: (value: T) => string;
  onChange: (value: T) => void;
}) {
  return (
    <label className="flex min-w-36 flex-col gap-1 text-xs text-text-dim">
      {label}
      <select
        value={value}
        onChange={(event) => onChange(event.target.value as T)}
        className="rounded border border-border-dim bg-bg-primary px-2 py-2 text-sm text-text-bright outline-none focus:border-text-terminal"
      >
        {options.map((option) => (
          <option key={option} value={option}>{getLabel(option)}</option>
        ))}
      </select>
    </label>
  );
}

function InfoBlock({ title, children }: { title: string; children: string }) {
  return (
    <div className="rounded border border-border-dim bg-bg-primary p-3">
      <div className="mb-1 text-xs font-bold text-text-terminal">{title}</div>
      <p className="text-sm leading-6 text-text-dim">{children}</p>
    </div>
  );
}

function Badge({ children, tone = 'default' }: { children: string; tone?: 'default' | 'amber' }) {
  return (
    <span className={`rounded border px-2 py-0.5 text-[11px] ${
      tone === 'amber'
        ? 'border-text-amber/40 bg-text-amber/10 text-text-amber'
        : 'border-border-dim bg-bg-primary text-text-dim'
    }`}>
      {children}
    </span>
  );
}

function labelFamily(value: FilterValue | UniqueItemFamily) {
  return value === ALL ? '全部' : UNIQUE_ITEM_FAMILY_LABELS[value];
}

function labelCategory(value: FilterValue | UniqueItemCategory) {
  return value === ALL ? '全部' : UNIQUE_ITEM_CATEGORY_LABELS[value];
}

function labelStatus(value: FilterValue | UniqueItemStatus) {
  return value === ALL ? '全部' : UNIQUE_ITEM_STATUS_LABELS[value];
}

function labelRaw(value: string) {
  return value === ALL ? '全部' : value;
}
