import { useState } from 'react';
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
  onDelete: (characterId: string, confirmName: string) => void;
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
  onRequestDelete,
}: {
  character: CharacterListItemPayload;
  onSelect: (characterId: string) => void;
  onRequestDelete: (character: CharacterListItemPayload) => void;
}) {
  const className = CLASS_DEFS[character.classId]?.name ?? character.classId;
  const raceName = character.raceId ? RACE_DEFS[character.raceId]?.name : undefined;
  const faithName = character.faithId ? FAITH_DEFS[character.faithId]?.name : undefined;

  return (
    <div className="group min-h-40 rounded-md border border-border-dim bg-bg-secondary p-4 text-left transition-colors hover:border-border-glow hover:bg-bg-tertiary">
      <div className="mb-3 flex items-start justify-between gap-3">
        <div className="min-w-0">
          <div className="truncate text-lg font-bold text-text-bright group-hover:text-text-terminal">
            {character.name}
          </div>
          <div className="text-xs text-text-dim">
            Lv.{character.level} {className}
          </div>
        </div>
        <button
          type="button"
          className="shrink-0 rounded border border-border-dim px-2 py-1 text-xs text-text-amber hover:border-border-glow hover:bg-bg-primary"
          onClick={() => onSelect(character.id)}
        >
          進入
        </button>
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
      <div className="mt-3 flex justify-end border-t border-border-dim pt-3">
        <button
          type="button"
          className="rounded border border-combat-damage/40 px-3 py-1 text-xs text-combat-damage transition-colors hover:bg-combat-damage/10"
          onClick={(event) => {
            event.stopPropagation();
            onRequestDelete(character);
          }}
        >
          刪除角色
        </button>
      </div>
    </div>
  );
}

export function CharacterSelectScreenView({
  characters,
  connection,
  onSelect,
  onCreate,
  onDelete,
}: CharacterSelectScreenProps & {
  characters: CharacterListItemPayload[];
  connection: string;
}) {
  const [deleteTarget, setDeleteTarget] = useState<CharacterListItemPayload | null>(null);
  const [confirmName, setConfirmName] = useState('');
  const visibleSlots = Math.max(MAX_VISIBLE_SLOTS, characters.length + 1);
  const emptySlots = Math.max(0, visibleSlots - characters.length - 1);
  const canConfirmDelete = deleteTarget !== null && confirmName === deleteTarget.name;

  const closeDeleteModal = () => {
    setDeleteTarget(null);
    setConfirmName('');
  };

  return (
    <div className="h-full overflow-y-auto bg-bg-primary scanline text-text-bright">
      <div className="mx-auto flex min-h-full w-full max-w-6xl flex-col gap-5 px-4 py-5 lg:px-6">
        <header className="flex flex-col gap-1 border-b border-border-dim pb-4">
          <h1 className="text-2xl font-bold text-text-terminal text-glow">選擇角色</h1>
          <div className="text-sm text-text-dim">選擇一個角色進入世界，或使用空欄位建立新角色。</div>
        </header>

        <main className="grid gap-3 md:grid-cols-2 xl:grid-cols-3">
          {characters.map((character) => (
            <CharacterSlot
              key={character.id}
              character={character}
              onSelect={onSelect}
              onRequestDelete={(target) => {
                setDeleteTarget(target);
                setConfirmName('');
              }}
            />
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
      {deleteTarget && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/75 px-4">
          <section className="w-full max-w-md rounded-md border border-combat-damage bg-bg-secondary p-5 shadow-2xl shadow-black/60">
            <div className="text-xs uppercase tracking-wide text-combat-damage">Delete Character</div>
            <h2 className="mt-1 text-xl font-bold text-combat-damage">刪除角色</h2>
            <p className="mt-2 text-sm leading-6 text-text-dim">
              這會永久刪除「<span className="font-bold text-text-bright">{deleteTarget.name}</span>」與其背包、技能、任務等角色資料。請輸入角色名稱確認。
            </p>
            <input
              autoFocus
              value={confirmName}
              onChange={(event) => setConfirmName(event.target.value)}
              className="mt-4 w-full rounded border border-border-dim bg-bg-primary px-3 py-2 text-text-bright outline-none focus:border-combat-damage"
              placeholder={deleteTarget.name}
            />
            <div className="mt-5 flex justify-end gap-2 border-t border-border-dim pt-4">
              <button
                type="button"
                className="rounded border border-border-dim px-4 py-2 text-sm text-text-dim hover:text-text-bright"
                onClick={closeDeleteModal}
              >
                取消
              </button>
              <button
                type="button"
                disabled={!canConfirmDelete}
                className="rounded bg-combat-damage px-4 py-2 text-sm font-bold text-bg-primary transition-colors hover:bg-text-bright disabled:cursor-not-allowed disabled:opacity-40"
                onClick={() => {
                  if (!deleteTarget || !canConfirmDelete) return;
                  onDelete(deleteTarget.id, confirmName);
                  closeDeleteModal();
                }}
              >
                確認刪除
              </button>
            </div>
          </section>
        </div>
      )}
    </div>
  );
}

export default function CharacterSelectScreen({ onSelect, onCreate, onDelete }: CharacterSelectScreenProps) {
  const characters = useGameStore((s) => s.characterList);
  const connection = useGameStore((s) => s.connection);

  return (
    <CharacterSelectScreenView
      characters={characters}
      connection={connection}
      onSelect={onSelect}
      onCreate={onCreate}
      onDelete={onDelete}
    />
  );
}
