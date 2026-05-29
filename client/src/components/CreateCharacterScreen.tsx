import { useMemo, useState } from 'react';
import type { FormEvent } from 'react';
import {
  CLASS_DEFS,
  DEFAULT_FAITH_ID,
  DEFAULT_GENDER_ID,
  DEFAULT_RACE_ID,
  FAITH_DEFS,
  GENDER_DEFS,
  RACE_DEFS,
  getInitialStatsForRace,
  type CreateCharacterPayload,
  type ClassId,
  type FaithId,
  type GenderId,
  type RaceId,
} from '@game/shared';

interface CreateCharacterScreenProps {
  onCreate: (payload: CreateCharacterPayload) => void;
  onBackToCharacters?: () => void;
}

const statLabels = {
  str: 'STR',
  int: 'INT',
  dex: 'DEX',
  vit: 'VIT',
  luk: 'LUK',
};

type InitialClassId = Extract<ClassId, 'swordsman' | 'mage' | 'ranger' | 'priest'>;
type CreationStep = 'name' | 'race' | 'gender' | 'class' | 'faith' | 'confirm';
const STEPS: CreationStep[] = ['name', 'race', 'gender', 'class', 'faith', 'confirm'];
const STEP_LABEL: Record<CreationStep, string> = {
  name: '名稱',
  race: '種族',
  gender: '性別',
  class: '職業',
  faith: '信仰',
  confirm: '確認',
};

const INITIAL_CLASS_IDS: InitialClassId[] = ['swordsman', 'mage', 'ranger', 'priest'];

const resourceLabels = {
  mp: 'MP',
  rage: '怒氣',
  focus: '專注',
  faith: '信仰',
};

function getCharacterArtPath(classId: InitialClassId, genderId: GenderId, raceId: RaceId): string {
  return `/mud/images/ui/characters/classes/${classId}-${genderId}-${raceId}.png`;
}

function getFaithSigilPath(faithId: FaithId): string {
  return `/mud/images/wiki/faiths/faith_${faithId}_heraldry.png`;
}

function getRaceIconPath(raceId: RaceId): string {
  return `/mud/images/wiki/origins/race_${raceId}_icon.png`;
}

function getClassIconPath(classId: InitialClassId): string {
  return `/mud/images/wiki/origins/class_${classId}_icon.png`;
}

export default function CreateCharacterScreen({ onCreate, onBackToCharacters }: CreateCharacterScreenProps) {
  const [name, setName] = useState('');
  const [raceId, setRaceId] = useState<RaceId>(DEFAULT_RACE_ID);
  const [genderId, setGenderId] = useState<GenderId>(DEFAULT_GENDER_ID);
  const [classId, setClassId] = useState<InitialClassId>('swordsman');
  const [faithId, setFaithId] = useState<FaithId>(DEFAULT_FAITH_ID);
  const [step, setStep] = useState<CreationStep>('name');
  const [error, setError] = useState('');

  const race = RACE_DEFS[raceId];
  const faith = FAITH_DEFS[faithId];
  const classDef = CLASS_DEFS[classId];
  const characterArtPath = getCharacterArtPath(classId, genderId, raceId);
  const stats = useMemo(() => {
    const next = getInitialStatsForRace(raceId);
    next.str += classDef.baseStatBonus.str;
    next.int += classDef.baseStatBonus.int;
    next.dex += classDef.baseStatBonus.dex;
    next.vit += classDef.baseStatBonus.vit;
    next.luk += classDef.baseStatBonus.luk;
    return next;
  }, [classDef, raceId]);
  const stepIndex = STEPS.indexOf(step);
  const isConfirm = step === 'confirm';

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const trimmed = name.trim();
    if (trimmed.length < 2 || trimmed.length > 12) {
      setError('角色名稱長度須在 2-12 字之間');
      return;
    }
    setError('');
    if (!isConfirm) {
      setStep(STEPS[Math.min(STEPS.length - 1, stepIndex + 1)]);
      return;
    }
    onCreate({ name: trimmed, raceId, genderId, faithId, classId });
  };

  const goBack = () => {
    setError('');
    setStep(STEPS[Math.max(0, stepIndex - 1)]);
  };

  return (
    <div className="h-full overflow-y-auto bg-bg-primary scanline text-text-bright">
      <div className="mx-auto flex min-h-full w-full max-w-6xl flex-col gap-5 px-4 py-5 lg:px-6">
        <header className="flex flex-col gap-3 border-b border-border-dim pb-4 sm:flex-row sm:items-start sm:justify-between">
          <div className="min-w-0">
            <h1 className="text-2xl font-bold text-text-terminal text-glow">建立角色</h1>
            <div className="text-sm text-text-dim">選擇出身、稱謂、初始職業與信仰後進入世界。</div>
          </div>
          {onBackToCharacters && (
            <button
              type="button"
              onClick={onBackToCharacters}
              className="rounded border border-border-dim bg-bg-secondary px-3 py-2 text-xs text-text-dim transition-colors hover:border-border-glow hover:text-text-bright"
            >
              返回角色選擇
            </button>
          )}
        </header>

        <form onSubmit={handleSubmit} className="grid flex-1 gap-5 lg:grid-cols-[minmax(0,1.45fr)_minmax(320px,0.75fr)]">
          <main className="space-y-5">
            <div className="flex flex-wrap gap-2">
              {STEPS.map((item, index) => (
                <button
                  key={item}
                  type="button"
                  onClick={() => index <= stepIndex && setStep(item)}
                  disabled={index > stepIndex}
                  className={`rounded border px-3 py-1.5 text-xs ${
                    item === step
                      ? 'border-text-terminal bg-bg-secondary text-text-terminal'
                      : index < stepIndex
                        ? 'border-border-dim bg-bg-primary text-text-bright hover:border-border-glow'
                        : 'border-border-dim bg-bg-primary text-text-dim opacity-60'
                  }`}
                >
                  {index + 1}. {STEP_LABEL[item]}
                </button>
              ))}
            </div>

            {step === 'name' && <section className="space-y-3">
              <label className="block text-sm font-bold text-text-terminal" htmlFor="character-name">
                名稱
              </label>
              <input
                id="character-name"
                value={name}
                onChange={(event) => setName(event.target.value)}
                autoFocus
                maxLength={12}
                className="w-full rounded-md border border-border-dim bg-bg-secondary px-3 py-3 text-text-bright outline-none focus:border-border-glow"
                placeholder="2-12 字"
              />
              {error && <div className="text-xs text-combat-damage">{error}</div>}
            </section>}

            {step === 'race' && <section className="space-y-3">
              <h2 className="text-sm font-bold text-text-terminal">種族</h2>
              <div className="grid gap-2 md:grid-cols-2 xl:grid-cols-3">
                {Object.values(RACE_DEFS).map((option) => (
                  <button
                    key={option.id}
                    type="button"
                    onClick={() => setRaceId(option.id)}
                    className={`min-h-36 rounded-md border p-3 text-left transition-colors ${
                      raceId === option.id
                        ? 'border-text-terminal bg-bg-secondary text-text-bright'
                        : 'border-border-dim bg-bg-primary text-text-dim hover:border-border-glow hover:text-text-bright'
                    }`}
                  >
                    <div className="mb-3 flex items-start gap-3">
                      <img
                        src={getRaceIconPath(option.id)}
                        alt=""
                        className="h-14 w-14 shrink-0 rounded border border-border-dim bg-bg-secondary object-cover"
                        loading="lazy"
                      />
                      <div className="min-w-0 flex-1">
                        <div className="mb-1 flex items-center justify-between gap-2">
                          <span className="font-bold text-text-bright">{option.name}</span>
                          <span className="text-xs text-text-amber">{formatStatMods(option.statMods)}</span>
                        </div>
                        <p className="text-xs leading-5">{option.description}</p>
                      </div>
                    </div>
                    <div className="text-xs text-text-terminal">{option.passiveName}</div>
                    <p className="text-xs leading-5 text-text-dim">{option.passiveDescription}</p>
                  </button>
                ))}
              </div>
            </section>}

            {step === 'gender' && <section className="space-y-3">
              <h2 className="text-sm font-bold text-text-terminal">性別</h2>
              <p className="text-xs text-text-dim">只影響稱謂與敘事，不改變 stats、掉落、傷害或技能。</p>
              <div className="grid gap-3 sm:grid-cols-2">
                {Object.values(GENDER_DEFS).map((option) => {
                  const artPath = getCharacterArtPath(classId, option.id, raceId);
                  return (
                    <button
                      key={option.id}
                      type="button"
                      onClick={() => setGenderId(option.id)}
                      className={`rounded-md border p-3 text-left text-sm transition-colors ${
                        genderId === option.id
                          ? 'border-text-terminal bg-bg-secondary text-text-bright'
                          : 'border-border-dim bg-bg-primary text-text-dim hover:border-border-glow hover:text-text-bright'
                      }`}
                    >
                      <div className="mb-3 aspect-[10/16] max-h-[420px] overflow-hidden rounded border border-border-dim bg-bg-primary">
                        <img
                          src={artPath}
                          alt={`${race.name}${option.name}角色預覽`}
                          className="h-full w-full object-cover object-top"
                          loading="lazy"
                        />
                      </div>
                      <div className="font-bold text-text-bright">{option.name}</div>
                      <div className="mt-1 text-xs leading-5 text-text-dim">{option.description}</div>
                    </button>
                  );
                })}
              </div>
            </section>}

            {step === 'faith' && <section className="space-y-3">
              <h2 className="text-sm font-bold text-text-terminal">信仰</h2>
              <div className="grid gap-2 md:grid-cols-2">
                {Object.values(FAITH_DEFS).map((option) => (
                  <button
                    key={option.id}
                    type="button"
                    onClick={() => setFaithId(option.id)}
                    className={`min-h-32 rounded-md border p-3 text-left transition-colors ${
                      faithId === option.id
                        ? 'border-text-terminal bg-bg-secondary text-text-bright'
                        : 'border-border-dim bg-bg-primary text-text-dim hover:border-border-glow hover:text-text-bright'
                    }`}
                  >
                    <div className="mb-3 flex items-start gap-3">
                      <img
                        src={getFaithSigilPath(option.id)}
                        alt=""
                        className="h-16 w-16 shrink-0 rounded border border-border-dim bg-bg-secondary object-cover"
                        loading="lazy"
                      />
                      <div className="min-w-0">
                        <div className="flex flex-wrap items-baseline gap-x-2 gap-y-1">
                          <span className="font-bold text-text-bright">{option.name}</span>
                          <span className="text-xs text-text-amber">{option.title}</span>
                        </div>
                        <p className="mt-1 text-xs leading-5">{option.description}</p>
                      </div>
                    </div>
                    <div className="text-xs text-text-terminal">{option.passiveName}</div>
                    <p className="text-xs leading-5 text-text-dim">{option.passiveDescription}</p>
                  </button>
                ))}
              </div>
            </section>}

            {step === 'class' && <section className="space-y-3">
              <h2 className="text-sm font-bold text-text-terminal">初始職業</h2>
              <div className="grid gap-2 md:grid-cols-2">
                {INITIAL_CLASS_IDS.map((optionId) => {
                  const option = CLASS_DEFS[optionId];
                  const artPath = getCharacterArtPath(option.id as InitialClassId, genderId, raceId);
                  return (
                    <button
                      key={option.id}
                      type="button"
                      onClick={() => setClassId(option.id as InitialClassId)}
                      className={`min-h-32 rounded-md border p-3 text-left transition-colors ${
                        classId === option.id
                          ? 'border-text-terminal bg-bg-secondary text-text-bright'
                        : 'border-border-dim bg-bg-primary text-text-dim hover:border-border-glow hover:text-text-bright'
                      }`}
                    >
                      <div className="mb-3 aspect-[10/16] max-h-[320px] overflow-hidden rounded border border-border-dim bg-bg-primary">
                        <img
                          src={artPath}
                          alt={`${race.name}${GENDER_DEFS[genderId].name}${option.name}角色預覽`}
                          className="h-full w-full object-cover object-top"
                          loading="lazy"
                        />
                      </div>
                      <div className="mb-2 flex items-center gap-3">
                        <img
                          src={getClassIconPath(option.id as InitialClassId)}
                          alt=""
                          className="h-12 w-12 shrink-0 rounded border border-border-dim bg-bg-secondary object-cover"
                          loading="lazy"
                        />
                        <div className="min-w-0">
                          <div className="flex flex-wrap items-baseline gap-x-2 gap-y-1">
                            <span className="font-bold text-text-bright">{option.name}</span>
                            <span className="text-xs text-text-amber">{resourceLabels[option.resourceType]}</span>
                          </div>
                          <div className="mt-1 text-xs text-text-terminal">{formatStatMods(option.baseStatBonus)}</div>
                        </div>
                      </div>
                      <p className="text-xs leading-5">{option.description}</p>
                    </button>
                  );
                })}
              </div>
            </section>}

            {step === 'confirm' && <section className="space-y-3">
              <h2 className="text-sm font-bold text-text-terminal">確認角色</h2>
              <div className="rounded-md border border-border-dim bg-bg-secondary p-4">
                <div className="text-xl font-bold text-text-bright">{name.trim()}</div>
                <div className="mt-1 text-sm text-text-dim">
                  {race.name} / {GENDER_DEFS[genderId].name} / {classDef.name} / {faith.name}・{faith.title}
                </div>
                <div className="mt-4 grid grid-cols-5 gap-2">
                  {Object.entries(stats).map(([key, value]) => (
                    <div key={key} className="rounded border border-border-dim bg-bg-primary p-2 text-center">
                      <div className="text-[11px] text-text-dim">{statLabels[key as keyof typeof statLabels]}</div>
                      <div className="font-bold text-text-bright">{value}</div>
                    </div>
                  ))}
                </div>
                <div className="mt-4 grid gap-3 md:grid-cols-2">
                  <SummaryBlock label="初始職業" title={classDef.name} text="Lv.1 直接以此職業進入世界，Lv.20 開始二轉職業路線。" />
                  <SummaryBlock label="種族被動" title={race.passiveName} text={race.passiveDescription} />
                  <SummaryBlock label="信仰被動" title={faith.passiveName} text={faith.passiveDescription} />
                  <SummaryBlock label="祈禱祝福" title={faith.prayerName} text={faith.prayerDescription} />
                  <SummaryBlock label="禁忌" title={faith.taboos.join('、')} text="違背禁忌會降低恩寵，不會永久毀掉角色。" />
                </div>
              </div>
            </section>}

            <div className="flex gap-2 border-t border-border-dim pt-4">
              {stepIndex > 0 && (
                <button
                  type="button"
                  onClick={goBack}
                  className="rounded-md border border-border-dim bg-bg-primary px-4 py-3 font-bold text-text-bright transition-colors hover:border-border-glow"
                >
                  返回
                </button>
              )}
              <button
                type="submit"
                className="rounded-md bg-text-terminal px-4 py-3 font-bold text-bg-primary transition-colors hover:bg-text-bright"
              >
                {isConfirm ? '建立並進入' : '下一步'}
              </button>
            </div>
          </main>

          <aside className="lg:sticky lg:top-5 lg:self-start">
            <div className="rounded-md border border-border-dim bg-bg-secondary p-4">
              <div className="mb-3 text-sm font-bold text-text-terminal">角色預覽</div>
              <div className="mb-4 text-xl font-bold text-text-bright">{name.trim() || '未命名冒險者'}</div>
              <div className="mb-4 aspect-[10/16] max-h-[360px] overflow-hidden rounded-md border border-border-dim bg-bg-primary">
                <img
                  src={characterArtPath}
                  alt={`${race.name}${GENDER_DEFS[genderId].name}角色預覽`}
                  className="h-full w-full object-cover object-top"
                  loading="lazy"
                />
              </div>

              <div className="mb-4 grid grid-cols-5 gap-2">
                {Object.entries(stats).map(([key, value]) => (
                  <div key={key} className="rounded border border-border-dim bg-bg-primary p-2 text-center">
                    <div className="text-[11px] text-text-dim">{statLabels[key as keyof typeof statLabels]}</div>
                    <div className="font-bold text-text-bright">{value}</div>
                  </div>
                ))}
              </div>

              <div className="space-y-3 text-sm">
                <div className="flex items-start gap-3 rounded border border-border-dim bg-bg-primary p-2">
                  <img
                    src={getClassIconPath(classId)}
                    alt=""
                    className="h-14 w-14 shrink-0 rounded border border-border-dim object-cover"
                    loading="lazy"
                  />
                  <SummaryBlock label="初始職業" title={`${classDef.name}・${resourceLabels[classDef.resourceType]}`} text="Lv.1 直接以此職業進入世界，Lv.20 開始二轉職業路線。" />
                </div>
                <div className="flex items-start gap-3 rounded border border-border-dim bg-bg-primary p-2">
                  <img
                    src={getRaceIconPath(race.id)}
                    alt=""
                    className="h-14 w-14 shrink-0 rounded border border-border-dim object-cover"
                    loading="lazy"
                  />
                  <SummaryBlock label="種族" title={race.name} text={race.passiveDescription} />
                </div>
                <SummaryBlock label="性別" title={GENDER_DEFS[genderId].name} text={GENDER_DEFS[genderId].description} />
                <div className="flex items-start gap-3 rounded border border-border-dim bg-bg-primary p-2">
                  <img
                    src={getFaithSigilPath(faith.id)}
                    alt=""
                    className="h-14 w-14 shrink-0 rounded border border-border-dim object-cover"
                    loading="lazy"
                  />
                  <SummaryBlock label="信仰" title={`${faith.name}・${faith.title}`} text={faith.passiveDescription} />
                </div>
                <SummaryBlock label="祈禱" title={faith.prayerName} text={faith.prayerDescription} />
              </div>

              <div className="mt-5 text-xs leading-5 text-text-dim">
                最後確認前都可以返回修改。建立後會自動登入並進入新手區。
              </div>
            </div>
          </aside>
        </form>
      </div>
    </div>
  );
}

function SummaryBlock({ label, title, text }: { label: string; title: string; text: string }) {
  return (
    <div className="border-t border-border-dim pt-3">
      <div className="mb-1 text-xs text-text-dim">{label}</div>
      <div className="font-bold text-text-bright">{title}</div>
      <div className="mt-1 text-xs leading-5 text-text-dim">{text}</div>
    </div>
  );
}

function formatStatMods(statMods: Partial<Record<keyof typeof statLabels, number>>): string {
  const parts = Object.entries(statMods)
    .filter(([, value]) => value !== undefined && value !== 0)
    .map(([key, value]) => `${statLabels[key as keyof typeof statLabels]} ${value! > 0 ? '+' : ''}${value}`);
  return parts.length > 0 ? parts.join(' ') : '均衡';
}
