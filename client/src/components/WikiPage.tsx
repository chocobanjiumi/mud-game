import { useMemo, useState } from 'react';
import type { ReactNode } from 'react';
import {
  AFFIX_BUILD_DIRECTIONS,
  AFFIX_POOLS,
  CLASS_DEFS,
  EQUIPMENT_SLOT_KEYS,
  FAITH_DEFS,
  ITEM_DEFS,
  RACE_DEFS,
  WEAPON_TYPE_DEFS,
  isEquipmentItemDef,
  resolveEquipSlotForItem,
  type ClassDef,
  type ClassId,
  type EquipSlot,
  type WeaponType,
} from '@game/shared';
import { ROOMS, ZONES } from '../../../server/src/data/rooms';
import { MonsterWikiContent } from './MonsterPage';
import { SkillWikiSection } from './SkillTablePage';
import { SuffixWikiContent } from './SuffixPage';
import { getItemImagePath } from '../utils/assetImages';

const NAV_ITEMS = [
  { id: 'skills', label: '技能' },
  { id: 'monsters', label: '怪物資料' },
  { id: 'classes', label: '職業列表' },
  { id: 'races', label: '種族列表' },
  { id: 'faiths', label: '信仰列表' },
  { id: 'equipment', label: '裝備列表' },
  { id: 'affixes', label: '詞綴列表' },
  { id: 'suffix-draft', label: '詞綴初版' },
  { id: 'zones', label: '區域列表' },
] as const;

type WikiPageId = typeof NAV_ITEMS[number]['id'];

const STAT_LABELS: Record<string, string> = {
  str: '力量',
  int: '智力',
  dex: '敏捷',
  vit: '體質',
  luk: '幸運',
  atk: '攻擊',
  matk: '魔攻',
  def: '防禦',
  mdef: '魔防',
  hp: 'HP',
  mp: 'MP',
  critRate: '暴擊',
  critDamage: '暴傷',
  hitRate: '命中',
  dodgeRate: '迴避',
  mountChargePower: '坐騎衝鋒',
  mountStability: '坐騎穩定',
  mountGuardPower: '騎乘守護',
  mountFatigueMax: '疲勞上限',
  mountFatigueRecovery: '疲勞回復',
  mountedInterceptBonus: '騎乘攔截',
  mountedRetreatBonus: '騎乘撤離',
  mountedThreatBonus: '騎乘威脅',
};

const SLOT_LABELS: Record<string, string> = {
  meleeMainHand: '近戰主手',
  meleeOffHand: '近戰副手',
  rangedMainHand: '遠程/施法主手',
  rangedOffHand: '遠程/施法副手',
  weapon: '武器',
  offhand: '副手',
  head: '頭部',
  body: '身體',
  hands: '手部',
  feet: '腳部',
  ring: '戒指',
  earring: '耳環',
  belt: '腰帶',
  necklace: '項鍊',
  accessory: '飾品',
  saddle: '馬鞍',
};

const REGION_LABELS: Record<string, string> = {
  central: '中央',
  east: '東方',
  west: '西方',
  north: '北方',
  south: '南方',
  underground: '地下',
  abyss: '深淵',
  celestial: '天界',
};

const equipmentDefs = Object.values(ITEM_DEFS)
  .filter(isEquipmentItemDef)
  .sort((a, b) => (a.levelReq ?? 0) - (b.levelReq ?? 0) || a.name.localeCompare(b.name, 'zh-Hant'));

const equipmentDefsBySlot = EQUIPMENT_SLOT_KEYS.map((slot) => ({
  slot,
  label: SLOT_LABELS[slot] ?? slot,
  items: equipmentDefs.filter((item) => resolveEquipSlotForItem(item) === slot),
}));

type WeaponTypeTabId = 'all' | WeaponType | 'untyped';

function createWeaponTypeTabs(items: typeof equipmentDefs) {
  return [
    { id: 'all' as const, label: '全部', items },
    ...Object.values(WEAPON_TYPE_DEFS)
      .map((weaponType) => ({
        id: weaponType.id,
        label: weaponType.name,
        items: items.filter((item) => item.weaponType === weaponType.id),
      }))
      .filter((row) => row.items.length > 0),
    {
      id: 'untyped' as const,
      label: '未分類',
      items: items.filter((item) => !item.weaponType),
    },
  ].filter((row) => row.items.length > 0);
}

const affixDefs = Object.entries(AFFIX_POOLS).flatMap(([pool, affixes]) => affixes.map((affix) => ({ pool, affix })));

const zoneRows = Object.values(ZONES)
  .map((zone) => ({
    ...zone,
    roomCount: zone.rooms.length,
    monsters: zone.rooms.reduce((count, roomId) => count + (ROOMS[roomId]?.monsters?.length ?? 0), 0),
    npcs: zone.rooms.reduce((count, roomId) => count + (ROOMS[roomId]?.npcs?.length ?? 0), 0),
  }))
  .sort((a, b) => a.levelRange[0] - b.levelRange[0] || a.name.localeCompare(b.name, 'zh-Hant'));

const CLASS_FAMILY_ORDER = ['swordsman', 'mage', 'ranger', 'priest'] as const satisfies readonly ClassId[];
const CLASS_FAMILY_LABELS: Record<(typeof CLASS_FAMILY_ORDER)[number], string> = {
  swordsman: '戰士系列',
  mage: '法師系列',
  ranger: '遊俠系列',
  priest: '祭司系列',
};

const playableClassDefs = Object.values(CLASS_DEFS).filter((classDef) => classDef.id !== 'monster');
const classGroups = [
  {
    id: 'base',
    title: '基礎職業',
    subtitle: '尚未選擇一轉方向；可轉入四個一轉系列。',
    classes: playableClassDefs.filter((classDef) => classDef.id === 'adventurer'),
  },
  ...CLASS_FAMILY_ORDER.map((familyId) => {
    const family = CLASS_DEFS[familyId];
    const advancedClasses = (family.advancedClasses ?? [])
      .map((classId) => CLASS_DEFS[classId])
      .filter((classDef): classDef is ClassDef => Boolean(classDef));

    return {
      id: familyId,
      title: CLASS_FAMILY_LABELS[familyId],
      subtitle: `${family.name}的一轉與二轉分支。`,
      classes: [family, ...advancedClasses],
    };
  }),
];

export default function WikiPage() {
  const [activePage, setActivePage] = useState<WikiPageId>(() => getInitialWikiPage());
  const activeNav = useMemo(
    () => NAV_ITEMS.find((item) => item.id === activePage) ?? NAV_ITEMS[0],
    [activePage],
  );

  const selectPage = (pageId: WikiPageId) => {
    setActivePage(pageId);
    if (typeof window !== 'undefined') {
      window.history.replaceState(null, '', `#${pageId}`);
    }
  };

  return (
    <div className="h-full overflow-y-auto bg-bg-primary text-text-primary">
      <div className="mx-auto flex max-w-[1500px] gap-4 px-4 py-4">
        <aside className="sticky top-4 hidden h-[calc(100vh-2rem)] w-56 shrink-0 rounded-md border border-border-dim bg-bg-secondary p-3 lg:block">
          <div className="mb-3 px-2 text-sm font-bold text-text-bright">MUD Wiki</div>
          <nav className="space-y-1">
            {NAV_ITEMS.map((item) => (
              <button
                key={item.id}
                type="button"
                onClick={() => selectPage(item.id)}
                className={`block w-full rounded px-2 py-2 text-left text-sm ${
                  activePage === item.id
                    ? 'bg-bg-primary text-text-terminal'
                    : 'text-text-dim hover:bg-bg-primary hover:text-text-terminal'
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>
        </aside>

        <main className="min-w-0 flex-1 space-y-4">
          <header className="rounded-md border border-border-dim bg-bg-secondary p-4">
            <h1 className="text-2xl font-bold text-text-bright">MUD Wiki</h1>
            <p className="mt-2 text-sm leading-6 text-text-dim">
              目前頁面：{activeNav.label}。左側選單切換不同資料頁，內容直接讀取目前程式碼資料。
            </p>
          </header>

          {renderWikiContent(activePage)}
        </main>
      </div>
    </div>
  );
}

function getInitialWikiPage(): WikiPageId {
  if (typeof window === 'undefined') return 'skills';
  const hash = window.location.hash.replace(/^#/, '');
  return NAV_ITEMS.some((item) => item.id === hash) ? hash as WikiPageId : 'skills';
}

function renderWikiContent(activePage: WikiPageId) {
  switch (activePage) {
    case 'skills':
      return <SkillsPage />;
    case 'monsters':
      return <MonsterWikiContent />;
    case 'classes':
      return <ClassesPage />;
    case 'races':
      return <RacesPage />;
    case 'faiths':
      return <FaithsPage />;
    case 'equipment':
      return <EquipmentPage />;
    case 'affixes':
      return <AffixesPage />;
    case 'suffix-draft':
      return <SuffixWikiContent />;
    case 'zones':
      return <ZonesPage />;
  }
}

function SkillsPage() {
  return (
    <WikiSection id="skills" title="技能">
      <SkillWikiSection compact />
    </WikiSection>
  );
}

function ClassesPage() {
  return (
    <WikiSection id="classes" title="職業列表">
      <div className="space-y-5">
        <div className="rounded border border-border-dim bg-bg-primary px-3 py-2 text-sm leading-6 text-text-dim">
          職業依照升階路線整理：冒險者可轉四個一轉；每個一轉系列下方列出自己的二轉分支。
        </div>

        {classGroups.map((group) => (
          <section key={group.id} className="space-y-2">
            <div>
              <h3 className="text-base font-bold text-text-bright">{group.title}</h3>
              <p className="mt-1 text-xs text-text-dim">{group.subtitle}</p>
            </div>
            <DataTable minWidth="980px" headers={['階段', '職業', '來源 / 可轉職', '資源', '基礎加成', '說明']}>
              {group.classes.map((classDef) => (
                <tr key={classDef.id} className="border-t border-border-dim align-top">
                  <Td>
                    <span className={`inline-flex rounded border px-2 py-1 text-xs font-bold ${getClassTierBadgeClass(classDef.tier)}`}>
                      {formatClassTier(classDef)}
                    </span>
                  </Td>
                  <Td><NameId name={classDef.name} id={classDef.id} /></Td>
                  <Td>{formatClassProgression(classDef)}</Td>
                  <Td>{formatClassResource(classDef)}</Td>
                  <Td>{formatStats(classDef.baseStatBonus)}</Td>
                  <Td>{classDef.description}</Td>
                </tr>
              ))}
            </DataTable>
          </section>
        ))}
      </div>
    </WikiSection>
  );
}

function RacesPage() {
  return (
    <WikiSection id="races" title="種族列表">
      <DataTable minWidth="900px" headers={['種族', '能力修正', '被動', '標籤', '說明']}>
        {Object.values(RACE_DEFS).map((race) => (
          <tr key={race.id} className="border-t border-border-dim align-top">
            <Td><NameId name={race.name} id={race.id} /></Td>
            <Td>{formatStats(race.statMods)}</Td>
            <Td><NameId name={race.passiveName} id={race.passiveSkillId} muted />{race.passiveDescription}</Td>
            <Td>{race.tags.join(', ')}</Td>
            <Td>{race.description}</Td>
          </tr>
        ))}
      </DataTable>
    </WikiSection>
  );
}

function FaithsPage() {
  return (
    <WikiSection id="faiths" title="信仰列表">
      <DataTable minWidth="1120px" headers={['紋章', '信仰', '領域', '被動', '祈禱', '禁忌', '說明']}>
        {Object.values(FAITH_DEFS).map((faith) => (
          <tr key={faith.id} className="border-t border-border-dim align-top">
            <Td>
              <img
                src={getFaithHeraldryPath(faith.id)}
                alt=""
                className="h-20 w-20 rounded border border-border-dim bg-bg-primary object-cover"
                loading="lazy"
              />
            </Td>
            <Td><NameId name={`${faith.name}・${faith.title}`} id={faith.id} /></Td>
            <Td>{faith.domains.join('、')}</Td>
            <Td><NameId name={faith.passiveName} id={faith.passiveSkillId} muted />{faith.passiveDescription}</Td>
            <Td><NameId name={faith.prayerName} id={faith.prayerBlessingId} muted />{faith.prayerDescription}</Td>
            <Td>{faith.taboos.join('、')}</Td>
            <Td>{faith.description}</Td>
          </tr>
        ))}
      </DataTable>
    </WikiSection>
  );
}

function getFaithHeraldryPath(faithId: string) {
  return `/mud/images/wiki/faiths/faith_${faithId}_heraldry.png`;
}

function EquipmentPage() {
  const [activeSlot, setActiveSlot] = useState<EquipSlot>('meleeMainHand');
  const [activeWeaponType, setActiveWeaponType] = useState<WeaponTypeTabId>('all');
  const activeSlotRow = equipmentDefsBySlot.find((row) => row.slot === activeSlot) ?? equipmentDefsBySlot[0];
  const typeTabs = createWeaponTypeTabs(activeSlotRow.items);
  const showsTypeTabs = typeTabs.length > 2 || typeTabs.some((row) => row.id !== 'all' && row.id !== 'untyped');
  const activeWeaponTypeRow = typeTabs.find((row) => row.id === activeWeaponType) ?? typeTabs[0];
  const visibleItems = showsTypeTabs ? activeWeaponTypeRow.items : activeSlotRow.items;

  return (
    <WikiSection id="equipment" title={`裝備列表（${equipmentDefs.length}）`}>
      <div className="mb-4 flex flex-wrap gap-2">
        {equipmentDefsBySlot.map((row) => {
          const active = row.slot === activeSlotRow.slot;
          return (
            <button
              key={row.slot}
              type="button"
              onClick={() => {
                setActiveSlot(row.slot);
                setActiveWeaponType('all');
              }}
              className={`rounded border px-3 py-2 text-sm transition ${
                active
                  ? 'border-text-terminal bg-bg-primary text-text-terminal'
                  : 'border-border-dim text-text-dim hover:border-text-terminal hover:text-text-terminal'
              }`}
            >
              {row.label}
              <span className="ml-2 text-xs opacity-70">{row.items.length}</span>
            </button>
          );
        })}
      </div>

      {showsTypeTabs && (
        <div className="mb-4 flex flex-wrap gap-2 border-l-2 border-border-dim pl-3">
          {typeTabs.map((row) => {
            const active = row.id === activeWeaponTypeRow.id;
            return (
              <button
                key={row.id}
                type="button"
                onClick={() => setActiveWeaponType(row.id)}
                className={`rounded border px-3 py-1.5 text-xs transition ${
                  active
                    ? 'border-text-terminal bg-bg-primary text-text-terminal'
                    : 'border-border-dim text-text-dim hover:border-text-terminal hover:text-text-terminal'
                }`}
              >
                {row.label}
                <span className="ml-2 opacity-70">{row.items.length}</span>
              </button>
            );
          })}
        </div>
      )}

      <div className="mb-3 text-sm text-text-dim">
        目前部位：<span className="font-bold text-text-bright">{activeSlotRow.label}</span>
        {showsTypeTabs && (
          <>
            ，裝備類型：<span className="font-bold text-text-bright">{activeWeaponTypeRow.label}</span>
          </>
        )}
        ，共 {visibleItems.length} 件。
      </div>

      <DataTable minWidth="1180px" headers={['裝備', '部位 / 類型', '等級', '需求', '數值', '來源標籤', '價格', '說明']}>
        {visibleItems.map((item) => (
          <tr key={item.id} className="border-t border-border-dim align-top">
            <Td><EquipmentNameCell item={item} /></Td>
            <Td>
              <div>{SLOT_LABELS[resolveEquipSlotForItem(item) ?? item.equipSlot] ?? item.equipSlot}</div>
              <div className="mt-1 text-xs text-text-dim">{item.weaponType ? WEAPON_TYPE_DEFS[item.weaponType]?.name ?? item.weaponType : item.type}</div>
            </Td>
            <Td>Lv.{item.level ?? item.levelReq}</Td>
            <Td>{item.classReq?.join(', ') || item.requiredClass?.join(', ') || '不限'}</Td>
            <Td>{formatStats(item.stats)}</Td>
            <Td>{[...(item.sourceTags ?? []), ...(item.zoneTags ?? [])].join(', ') || '無'}</Td>
            <Td>買 {item.buyPrice} / 賣 {item.sellPrice}</Td>
            <Td>{item.description}</Td>
          </tr>
        ))}
      </DataTable>
    </WikiSection>
  );
}

function EquipmentNameCell({ item }: { item: (typeof equipmentDefs)[number] }) {
  const imagePath = getItemImagePath(item.id);
  const slotLabel = SLOT_LABELS[resolveEquipSlotForItem(item) ?? item.equipSlot] ?? item.equipSlot;

  return (
    <div className="flex min-w-48 items-center gap-3">
      <div className="flex h-12 w-12 shrink-0 items-center justify-center overflow-hidden rounded border border-border-dim bg-bg-secondary">
        {imagePath ? (
          <img src={imagePath} alt="" className="h-full w-full object-cover" loading="lazy" />
        ) : (
          <span className="text-xs font-bold text-text-dim">{slotLabel.slice(0, 1)}</span>
        )}
      </div>
      <NameId name={item.name} id={item.id} />
    </div>
  );
}

function AffixesPage() {
  return (
    <WikiSection id="affixes" title={`詞綴列表（${affixDefs.length}）`}>
      <div className="mb-4 grid gap-3 lg:grid-cols-2">
        {AFFIX_BUILD_DIRECTIONS.map((build) => (
          <article key={build.id} className="rounded border border-border-dim bg-bg-primary p-3">
            <div className="font-bold text-text-bright">{build.name}</div>
            <div className="mt-1 text-xs text-text-dim">{build.id} / {build.classId}</div>
            <div className="mt-2 text-sm leading-6 text-text-dim">{build.notes}</div>
          </article>
        ))}
      </div>
      <DataTable minWidth="1180px" headers={['詞綴', '池 / 階級', '適用', '物品等級', '數值', '技能修正', '觸發 / 行為', '標籤']}>
        {affixDefs.map(({ pool, affix }) => (
          <tr key={affix.id} className="border-t border-border-dim align-top">
            <Td><NameId name={affix.name} id={affix.id} /></Td>
            <Td>{pool} / {affix.tier} / {affix.kind}</Td>
            <Td>{affix.appliesTo.join(', ')}</Td>
            <Td>{affix.itemLevelMin}{affix.itemLevelMax ? `-${affix.itemLevelMax}` : '+'}</Td>
            <Td>{formatStats(affix.stats)}</Td>
            <Td>{formatObject({ ...affix.skillModifiers, ...affix.resourceModifiers }) || '無'}</Td>
            <Td>{[affix.trigger, affix.behavior, affix.condition].filter(Boolean).join(' / ') || '無'}</Td>
            <Td>{[...(affix.skillTags ?? []), ...(affix.classTags ?? []), ...(affix.sourceTags ?? []), ...(affix.weaponTypes ?? [])].join(', ') || '無'}</Td>
          </tr>
        ))}
      </DataTable>
    </WikiSection>
  );
}

function ZonesPage() {
  return (
    <WikiSection id="zones" title={`區域列表（${zoneRows.length}）`}>
      <DataTable minWidth="1120px" headers={['區域', '等級', '地區 / 類型', '危險', '房間', '怪物點 / NPC', '規則', '標籤']}>
        {zoneRows.map((zone) => (
          <tr key={zone.id} className="border-t border-border-dim align-top">
            <Td><NameId name={zone.name} id={zone.id} />{zone.description}</Td>
            <Td>Lv.{zone.levelRange[0]}-{zone.levelRange[1]}</Td>
            <Td>{REGION_LABELS[zone.region] ?? zone.region} / {zone.type}</Td>
            <Td>{zone.dangerLevel}</Td>
            <Td>{zone.roomCount}</Td>
            <Td>{zone.monsters} / {zone.npcs}</Td>
            <Td>PVP {zone.pvpMode}；死亡 {zone.deathPenalty}</Td>
            <Td>{zone.tags.join(', ')}</Td>
          </tr>
        ))}
      </DataTable>
    </WikiSection>
  );
}

function WikiSection({ id, title, children }: { id: string; title: string; children: ReactNode }) {
  return (
    <section id={id} className="rounded-md border border-border-dim bg-bg-secondary p-4">
      <h2 className="mb-4 text-xl font-bold text-text-terminal">{title}</h2>
      {children}
    </section>
  );
}

function DataTable({ headers, minWidth, children }: { headers: string[]; minWidth: string; children: ReactNode }) {
  return (
    <div className="overflow-x-auto rounded-md border border-border-dim bg-bg-primary">
      <table className="w-full border-collapse text-left text-sm" style={{ minWidth }}>
        <thead className="bg-bg-secondary text-xs text-text-dim">
          <tr>
            {headers.map((header) => <Th key={header}>{header}</Th>)}
          </tr>
        </thead>
        <tbody>{children}</tbody>
      </table>
    </div>
  );
}

function NameId({ name, id, muted = false }: { name: string; id: string; muted?: boolean }) {
  return (
    <div className={muted ? 'mb-1' : ''}>
      <div className={muted ? 'text-xs font-bold text-text-terminal' : 'font-bold text-text-bright'}>{name}</div>
      <div className="text-[11px] text-text-dim">{id}</div>
    </div>
  );
}

function formatClassTier(classDef: ClassDef) {
  if (classDef.tier === 0) return '基礎';
  if (classDef.tier === 1) return '一轉';
  return '二轉';
}

function getClassTierBadgeClass(tier: ClassDef['tier']) {
  if (tier === 0) return 'border-border-dim bg-bg-secondary text-text-dim';
  if (tier === 1) return 'border-text-terminal/40 bg-text-terminal/10 text-text-terminal';
  return 'border-text-amber/40 bg-text-amber/10 text-text-amber';
}

function formatClassProgression(classDef: ClassDef) {
  const parentName = classDef.parentClass ? CLASS_DEFS[classDef.parentClass]?.name ?? classDef.parentClass : undefined;
  const advancedNames = (classDef.advancedClasses ?? []).map((classId) => CLASS_DEFS[classId]?.name ?? classId);

  if (classDef.tier === 0) {
    return advancedNames.length > 0 ? `可一轉：${advancedNames.join('、')}` : '無';
  }
  if (classDef.tier === 1) {
    return [
      parentName ? `來源：${parentName}` : undefined,
      advancedNames.length > 0 ? `可二轉：${advancedNames.join('、')}` : undefined,
    ].filter(Boolean).join('；') || '無';
  }
  return parentName ? `二轉來源：${parentName}` : '無';
}

function formatClassResource(classDef: ClassDef) {
  return `${formatResourceType(classDef.resourceType)} ${classDef.initialResource}/${classDef.maxResource}`;
}

function formatResourceType(resourceType: ClassDef['resourceType']) {
  switch (resourceType) {
    case 'rage':
      return '怒氣';
    case 'focus':
      return '專注';
    case 'faith':
      return '信仰';
    case 'mp':
      return 'MP';
  }
}

function formatStats(stats: Record<string, number> | undefined) {
  if (!stats || Object.keys(stats).length === 0) return '無';
  return Object.entries(stats)
    .map(([key, value]) => `${STAT_LABELS[key] ?? key} ${value > 0 ? '+' : ''}${value}`)
    .join('，');
}

function formatObject(value: Record<string, unknown>) {
  const entries = Object.entries(value).filter(([, entryValue]) => entryValue !== undefined);
  if (entries.length === 0) return '';
  return entries.map(([key, entryValue]) => `${key}: ${String(entryValue)}`).join('，');
}

function Th({ children }: { children: ReactNode }) {
  return <th className="whitespace-nowrap px-3 py-2 font-bold">{children}</th>;
}

function Td({ children }: { children: ReactNode }) {
  return <td className="px-3 py-3">{children}</td>;
}
