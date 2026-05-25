import {
  CLASS_DEFS,
  FAITH_DEFS,
  RACE_DEFS,
  type CharacterListItemPayload,
} from '@game/shared';
import { useGameStore } from '../stores/gameStore';

interface CharacterSelectScreenProps {
  onSelect: (characterId: string) => void;
  onCreate: () => void;
}

const MAX_VISIBLE_SLOTS = 6;

function formatLastLogin(timestamp: number): string {
  if (!timestamp) return '尚未登入';
  return new Intl.DateTimeFormat('zh-TW', {
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
  }).format(new Date(timestamp));
}

function CharacterSlot({
  character,
  onSelect,
}: {
  character: CharacterListItemPayload;
  onSelect: (characterId: string) => void;
}) {
  const className = CLASS_DEFS[character.classId]?.name ?? character.classId;
  const raceName = character.raceId ? RACE_DEFS[character.raceId]?.name : undefined;
  const faithName = character.faithId ? FAITH_DEFS[character.faithId]?.name : undefined;

  return (
    <button
      type="button"
      onClick={() => onSelect(character.id)}
      className="group min-h-40 rounded-md border border-border-dim bg-bg-secondary p-4 text-left transition-colors hover:border-border-glow hover:bg-bg-tertiary"
    >
      <div className="mb-3 flex items-start justify-between gap-3">
        <div className="min-w-0">
          <div className="truncate text-lg font-bold text-text-bright group-hover:text-text-terminal">
            {character.name}
          </div>
          <div className="text-xs text-text-dim">
            Lv.{character.level} {className}
          </div>
        </div>
        <div className="shrink-0 rounded border border-border-dim px-2 py-1 text-xs text-text-amber">
          進入
        </div>
      </div>

      <div className="grid grid-cols-2 gap-x-3 gap-y-2 text-xs">
        <div>
          <div className="text-text-dim">HP</div>
          <div className="text-text-bright">{character.hp}/{character.maxHp}</div>
        </div>
        <div>
          <div className="text-text-dim">金幣</div>
          <div className="text-text-bright">{character.gold}</div>
        </div>
        <div>
          <div className="text-text-dim">出身</div>
          <div className="text-text-bright">{raceName ?? '未知'}</div>
        </div>
        <div>
          <div className="text-text-dim">信仰</div>
          <div className="text-text-bright">{faithName ?? '未知'}</div>
        </div>
      </div>

      <div className="mt-3 border-t border-border-dim pt-2 text-xs text-text-dim">
        最後登入：{formatLastLogin(character.lastLogin)}
      </div>
    </button>
  );
}

export function CharacterSelectScreenView({
  characters,
  connection,
  onSelect,
  onCreate,
}: CharacterSelectScreenProps & {
  characters: CharacterListItemPayload[];
  connection: string;
}) {
  const visibleSlots = Math.max(MAX_VISIBLE_SLOTS, characters.length + 1);
  const emptySlots = Math.max(0, visibleSlots - characters.length - 1);

  return (
    <div className="h-full overflow-y-auto bg-bg-primary scanline text-text-bright">
      <div className="mx-auto flex min-h-full w-full max-w-6xl flex-col gap-5 px-4 py-5 lg:px-6">
        <header className="flex flex-col gap-1 border-b border-border-dim pb-4">
          <h1 className="text-2xl font-bold text-text-terminal text-glow">選擇角色</h1>
          <div className="text-sm text-text-dim">選擇一個角色進入世界，或使用空欄位建立新角色。</div>
        </header>

        <main className="grid gap-3 md:grid-cols-2 xl:grid-cols-3">
          {characters.map((character) => (
            <CharacterSlot key={character.id} character={character} onSelect={onSelect} />
          ))}

          <button
            type="button"
            onClick={onCreate}
            disabled={connection !== 'connected'}
            className="min-h-40 rounded-md border border-dashed border-border-dim bg-bg-primary p-4 text-left text-text-dim transition-colors hover:border-border-glow hover:bg-bg-secondary hover:text-text-bright disabled:cursor-not-allowed disabled:opacity-50"
          >
            <div className="mb-2 text-lg font-bold text-text-terminal">空角色欄位</div>
            <div className="text-sm">建立新角色</div>
            <div className="mt-3 text-xs">設定名稱、種族、稱謂、初始職業與信仰。</div>
          </button>

          {Array.from({ length: emptySlots }).map((_, index) => (
            <div
              key={`empty-${index}`}
              className="min-h-40 rounded-md border border-border-dim/50 bg-bg-primary/40 p-4 text-xs text-text-dim"
            >
              未使用欄位
            </div>
          ))}
        </main>
      </div>
    </div>
  );
}

export default function CharacterSelectScreen({ onSelect, onCreate }: CharacterSelectScreenProps) {
  const characters = useGameStore((s) => s.characterList);
  const connection = useGameStore((s) => s.connection);

  return (
    <CharacterSelectScreenView
      characters={characters}
      connection={connection}
      onSelect={onSelect}
      onCreate={onCreate}
    />
  );
}
