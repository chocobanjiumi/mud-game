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
import { FAITH_ALTARS } from '../../../server/src/data/faith-altars';
import { MonsterWikiContent } from './MonsterPage';
import { SkillWikiSection } from './SkillTablePage';
import { SuffixWikiContent } from './SuffixPage';
import { getItemImagePath, IMAGE_BASE } from '../utils/assetImages';

const NAV_ITEMS = [
  { id: 'combat-guide', label: '戰鬥指南' },
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
    case 'combat-guide':
      return <CombatGuidePage />;
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

function CombatGuidePage() {
  return (
    <WikiSection id="combat-guide" title="戰鬥指南">
      <div className="space-y-6 text-sm leading-7 text-text-dim">

        <GuideSection title="Tick 制戰鬥">
          <p>戰鬥以 <Term>tick</Term>（回合）為單位運作，每個 tick 為 5 秒。每 tick 所有參戰者同時選擇行動，然後統一結算。</p>
          <TermTable terms={[
            ['tick', '一個戰鬥回合，約 5 秒。所有行動在同一 tick 內結算。'],
            ['行動類型', 'attack（普攻）、skill（技能）、defend（防禦）、flee（逃跑）、item（道具）、mount 系列（騎乘動作）'],
            ['先制 (priority)', '部分技能擁有先制屬性，在同一 tick 中最先發動。'],
          ]} />
        </GuideSection>

        <GuideSection title="施法時間 (Cast Time)">
          <p>強力技能需要 <Term>castTime</Term>（施法時間）。選擇施放後不會立刻生效，而是經過指定 tick 數後才發動。施法期間被打斷（stun/fear/freeze/interrupt）會取消施法。</p>
          <TermTable terms={[
            ['瞬發 (castTime 0)', '大多數技能。選擇後在當前 tick 立刻生效。'],
            ['施法 1 tick', '高倍率單體技能（2.5×+）、中型 AoE。選擇後下一個 tick 才生效。施法期間可被打斷。'],
            ['施法 2 tick', '終極技能、全場 AoE。需要 2 個 tick 才生效，風險更高但威力極大。'],
            ['打斷施法', '帶有 interrupt 屬性的技能或 CC 效果（暈眩/恐懼/凍結）可打斷正在施法的目標，取消其技能並浪費該回合。'],
            ['施法與冷卻', '施法時間不影響冷卻。冷卻從技能實際生效後開始計算。被打斷時冷卻減半。'],
          ]} />
        </GuideSection>

        <GuideSection title="跨房戰鬥與 Approaching 系統">
          <p>本遊戲的核心特色之一：怪物從相鄰房間接近時不會立刻進入戰鬥，而是經歷 <Term>approaching</Term> 階段。</p>
          <TermTable terms={[
            ['approaching', '怪物從相鄰房間接近中的狀態。approaching 期間怪物尚未進入本房，但可被部分技能攻擊。'],
            ['arrivalTicks', '怪物抵達本房所需的剩餘 tick 數。每 tick 減 1，歸零時怪物進入本房開始戰鬥。'],
            ['cross-room（跨房攻擊）', '部分技能可攻擊相鄰房間的敵人，或影響 approaching 中的怪物。'],
            ['scout（偵查）', '偵查相鄰房間，揭露該方向的怪物資訊。某些跨房技能需要先偵查才能精確瞄準。'],
            ['trap（出口陷阱）', '放置在房間出口的陷阱。approaching 怪物通過時觸發效果（傷害、arrivalTicks+N 等）。'],
            ['arrivalTicksDelta', '技能或陷阱對 approaching 怪物的延遲效果。例如 +2 代表怪物多花 2 tick 才到達。'],
          ]} />
        </GuideSection>

        <GuideSection title="傷害計算">
          <TermTable terms={[
            ['傷害類型 (damageType)', 'physical（物理，受 DEF 減免）、magical（魔法，受 MDEF 減免）、pure（純粹，無視防禦）。'],
            ['屬性 (element)', 'fire / ice / lightning / light / dark / nature / none。存在屬性剋制關係。'],
            ['屬性剋制', '火→冰→雷→火（+30% 傷害）。光↔暗（+25%）。逆剋制 -30%/-25%。nature 和 none 為中性。'],
            ['multiplier（倍率）', '技能的基礎傷害倍率。100% = 1.0× 基礎攻擊力。'],
            ['暴擊 (crit)', '基礎暴擊傷害 150%。暴擊率受 DEX 和 LUK 影響，上限 80%。'],
            ['命中 / 閃避', '命中率 = 95% 基礎 + DEX 差值修正。閃避率受 DEX 和 LUK 影響，上限 80%。'],
            ['overkill', '超過目標剩餘 HP 的溢出傷害量。'],
            ['defPiercing（穿甲）', '無視目標一定比例的防禦值。'],
          ]} />
        </GuideSection>

        <GuideSection title="屬性與資源">
          <TermTable terms={[
            ['STR（力量）', '影響物理攻擊力。近戰 ATK = STR × 2 + 武器攻擊。'],
            ['INT（智力）', '影響魔法攻擊力和魔防。Spell Power = INT × 2 + 法器魔攻。'],
            ['DEX（敏捷）', '影響命中、閃避、暴擊率。遠程 ATK = DEX × 2 + 遠程武器攻擊。'],
            ['VIT（體質）', '影響 HP 和物理防禦。DEF = VIT × 1.5 + 護甲。'],
            ['LUK（幸運）', '影響暴擊率和閃避率（小幅度）。'],
            ['rage（怒氣）', '戰士系資源。初始 0，透過攻擊和被擊產生。上限 100。'],
            ['mp（魔力）', '法師系資源。初始 50-80，施法消耗。'],
            ['focus（專注）', '遊俠系資源。初始 100，使用技能消耗。'],
            ['faith（信仰）', '祭司系資源。初始 50，上限 100。有些技能消耗信仰，有些累積信仰。'],
          ]} />
        </GuideSection>

        <GuideSection title="狀態效果">
          <TermTable terms={[
            ['DoT（持續傷害）', 'poison（中毒）、burn（灼燒）、bleed（流血）。不同來源可疊加，相同來源刷新持續時間。'],
            ['HoT（持續回復）', 'regen（生命回復）、mana_regen（魔力回復）。'],
            ['CC（控制效果）', 'stun（暈眩）、fear（恐懼）、freeze（凍結）。被控制時無法行動。新 CC 覆蓋舊 CC。'],
            ['silence（沉默）', '無法使用技能，只能普攻。'],
            ['shield（護盾）', '吸收傷害的臨時屏障。可被 dispelShield 技能驅散。'],
            ['taunt（嘲諷）', '強制敵人攻擊嘲諷者。'],
            ['counter（反擊）', '受到攻擊時自動反擊。'],
            ['stealth（潛行）', '隱身狀態，無法被選為目標。被 AoE 命中或主動攻擊時解除。'],
            ['thorns（荊棘）', '反射部分近戰傷害給攻擊者。'],
            ['mark（標記）', '增加被標記者受到的傷害。'],
            ['damage_reduction（減傷）', '百分比減少受到的傷害。'],
            ['heal_reduction（治療削減）', '百分比減少受到的治療量。'],
            ['invincible（無敵）', '完全免疫所有傷害。'],
            ['unyielding（不屈）', 'HP 不會降到 0 以下。'],
          ]} />
        </GuideSection>

        <GuideSection title="前後排 (Formation)">
          <p>戰鬥中角色分為 <Term>前排</Term> 和 <Term>後排</Term>。近戰職業默認前排，遠程/治療默認後排。可花 1 tick 切換排位。</p>
          <TermTable terms={[
            ['前排 (front)', '承受近戰怪物的攻擊。可使用近戰技能。坦克、近戰 DPS 的位置。'],
            ['後排 (back)', '不會被近戰怪物的單體攻擊選中（前排全滅時除外）。適合遠程、法師、治療。'],
            ['AoE 無視排位', '全體攻擊（all_enemies）同時打前後排。排位只影響單體近戰攻擊的目標選擇。'],
            ['遠程/魔法怪物', 'caster 和 summoner 類型的怪物可無視排位攻擊任何目標。'],
            ['前排全滅', '當前排沒有存活角色時，後排暴露——所有怪物可直接攻擊後排。'],
            ['切換排位', '花 1 tick 行動切換前/後排。戰鬥中可隨時調整陣型。'],
            ['默認排位', '戰士系/遊俠近戰 → 前排。法師系/祭司系/遠程遊俠 → 後排。'],
          ]} />
        </GuideSection>

        <GuideSection title="仇恨值 (Threat)">
          <p>怪物選擇攻擊目標時，優先攻擊 <Term>仇恨值</Term> 最高的玩家。坦克需要透過攻擊和嘲諷建立仇恨來保護隊友。</p>
          <TermTable terms={[
            ['仇恨值 (threat)', '每個玩家對怪物的威脅程度。戰鬥開始時為 0，隨行動累積。'],
            ['傷害產生仇恨', '對怪物造成 N 點傷害 = 累積 N 點仇恨。傷害越高仇恨越高。'],
            ['治療產生仇恨', '治療友方回復 N 點 HP = 累積 N × 0.5 點仇恨。治療者也會拉到仇恨。'],
            ['嘲諷 (taunt)', '嘲諷效果強制怪物攻擊嘲諷者，優先於仇恨值判定。'],
            ['目標選擇機率', '怪物 70% 機率攻擊最高仇恨者，30% 隨機。不是 100% 可預測。'],
            ['排位 + 仇恨', '近戰怪物只在前排中找最高仇恨者。後排的高仇恨者不會被近戰打到（除非前排全滅）。'],
          ]} />
        </GuideSection>

        <GuideSection title="坐騎系統（騎士專屬）">
          <TermTable terms={[
            ['mount / unmount', '上馬 / 下馬指令。騎乘中可使用騎乘限定技能。'],
            ['fatigue（疲勞）', '坐騎體力值。騎乘動作消耗疲勞，疲勞耗盡被迫下馬。'],
            ['fatigueMax', '疲勞上限，受馬鞍裝備影響。'],
            ['fatigueRecovery', '每 tick 疲勞回復量。'],
            ['chargePower（衝鋒力）', '影響衝鋒系技能的額外傷害。'],
            ['stability（穩定性）', '影響防禦系技能的減傷效果和攔截評分。'],
            ['guardPower（守護力）', '影響護盾和守護系技能的效果。'],
            ['intercept（攔截）', '騎乘時攔截 approaching 怪物，延遲其到達時間。評分 = stability + interceptBonus + DEX + STR。'],
          ]} />
        </GuideSection>

        <GuideSection title="Boss 機制">
          <TermTable terms={[
            ['phase（階段）', 'Boss 在特定 HP 門檻進入新階段，傷害倍率提升。預設：70% HP 進入第 2 階段（+15%），35% HP 進入第 3 階段（+30%）。'],
            ['telegraph（預告）', 'Boss 大招前 1 tick 的預告警示。玩家可在預告 tick 使用打斷技能阻止。'],
            ['interrupt（打斷）', '帶有 interrupt 屬性的技能可打斷 Boss 的 telegraph 預告。CC 效果（暈眩/恐懼/凍結）也可打斷。'],
            ['dispelShield（驅散護盾）', '帶有此屬性的技能可移除敵人的 shield 狀態效果。'],
            ['控制免疫', 'Boss 被 CC 命中後獲得短暫免疫期，防止被永久控住。'],
          ]} />
        </GuideSection>

        <GuideSection title="副本與難度">
          <TermTable terms={[
            ['dungeon（副本）', '線性房間序列的戰鬥挑戰。需要組隊完成。'],
            ['difficulty', 'normal（1.0× 怪物數值/獎勵）、hard（1.35× HP/1.2× 數值/1.25× 獎勵）、nightmare（1.8× HP/1.45× 數值/1.6× 獎勵）。'],
            ['first clear（首次通關）', '首次完成副本獲得額外獎勵。'],
          ]} />
        </GuideSection>

        <GuideSection title="組隊與戰利品">
          <TermTable terms={[
            ['party（隊伍）', '玩家組隊系統。有隊長可踢人/解散。'],
            ['lootMode（戰利品分配）', 'free（自由拾取）、round_robin（輪流）、need_greed（需求/貪婪）、leader（隊長分配）。'],
            ['follow（跟隨）', '隊員可自動跟隨隊長移動。'],
          ]} />
        </GuideSection>

        <GuideSection title="PvP 系統">
          <TermTable terms={[
            ['duel（決鬥）', '向其他玩家發起 1v1 決鬥，30 秒內接受。'],
            ['ELO', '競技積分，基礎 1000。勝者漲分，敗者扣分。'],
            ['PvP 傳送鎖定', '近期受到 PvP 傷害的玩家無法使用快速傳送。'],
          ]} />
        </GuideSection>

        <GuideSection title="裝備詞綴">
          <TermTable terms={[
            ['affix（詞綴）', '裝備上附加的特殊效果。有觸發條件和效果。'],
            ['觸發條件', 'on_hit（命中時）、on_block（格擋時）、on_dodge（閃避時）、on_kill（擊殺時）、on_cast（施法時）、on_heal（治療時）。'],
            ['affix cooldown', '詞綴觸發後的內部冷卻，防止同一回合多次觸發。'],
            ['firstHit', '戰鬥第 1 回合命中時的特殊詞綴觸發條件。'],
          ]} />
        </GuideSection>

      </div>
    </WikiSection>
  );
}

function GuideSection({ title, children }: { title: string; children: ReactNode }) {
  return (
    <div className="rounded border border-border-dim bg-bg-primary p-4">
      <h3 className="mb-3 text-base font-bold text-text-bright">{title}</h3>
      <div className="space-y-2">{children}</div>
    </div>
  );
}

function Term({ children }: { children: ReactNode }) {
  return <code className="rounded bg-bg-secondary px-1.5 py-0.5 text-xs font-bold text-text-terminal">{children}</code>;
}

function TermTable({ terms }: { terms: [string, string][] }) {
  return (
    <table className="mt-2 w-full border-collapse text-sm">
      <tbody>
        {terms.map(([term, desc]) => (
          <tr key={term} className="border-t border-border-dim">
            <td className="whitespace-nowrap px-3 py-2 align-top font-bold text-text-terminal">{term}</td>
            <td className="px-3 py-2 text-text-dim">{desc}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
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
      <DataTable minWidth="1240px" headers={['紋章', '信仰', '領域', '祭壇位置', '被動', '祈禱', '禁忌', '說明']}>
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
            <Td>{formatFaithAltarLocation(faith.id)}</Td>
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

function formatFaithAltarLocation(faithId: keyof typeof FAITH_ALTARS) {
  const altar = FAITH_ALTARS[faithId];
  const room = ROOMS[altar.roomId];
  const zone = room ? ZONES[room.zone] : undefined;
  return `${zone?.name ?? altar.zoneHint} / ${room?.name ?? altar.locationHint}`;
}

function getFaithHeraldryPath(faithId: string) {
  return `${IMAGE_BASE}/wiki/faiths/faith_${faithId}_heraldry.webp`;
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
