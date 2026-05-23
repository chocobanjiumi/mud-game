import { useState, useRef, useCallback, type KeyboardEvent } from 'react';
import { useGameStore } from '../stores/gameStore';
import { SKILL_DEFS } from '@game/shared';

const COMMON_COMMANDS = [
  'look', 'go', 'north', 'south', 'east', 'west', 'up', 'down',
  'attack', 'defend', 'flee', 'use', 'equip', 'unequip',
  'inventory', 'status', 'skills', 'skill', 'party', 'map',
  'say', 'shout', 'whisper', 'help',
  'buy', 'sell', 'talk', 'quest',
  'rest', 'pickup', 'drop',
  'search', 'inspect', 'open',
  'activate', 'portals', 'travel', 'recall',
  'loot', 'faith', 'pray', 'alias', 'unalias',
];

const COMMON_ALIASES = ['l', 'i', 'stat', 'stats', 'atk', 'kill', 'sk', 'n', 's', 'e', 'w', 'u', 'd'];

interface Suggestion {
  value: string;
  label: string;
  detail?: string;
  complete: string;
}

interface CommandInputProps {
  onSubmit: (command: string) => void;
}

export default function CommandInput({ onSubmit }: CommandInputProps) {
  const [value, setValue] = useState('');
  const [historyIndex, setHistoryIndex] = useState(-1);
  const [suggestions, setSuggestions] = useState<Suggestion[]>([]);
  const [selectedSuggestion, setSelectedSuggestion] = useState(0);
  const historyRef = useRef<string[]>([]);
  const inputRef = useRef<HTMLInputElement>(null);
  const room = useGameStore((s) => s.room);
  const combat = useGameStore((s) => s.combat);
  const inventory = useGameStore((s) => s.inventory);
  const skills = useGameStore((s) => s.skills);
  const aliases = useGameStore((s) => s.aliases);

  const updateSuggestions = useCallback((text: string) => {
    if (!text.trim()) {
      setSuggestions([]);
      return;
    }
    const matches = buildSuggestions(text, { room, combat, inventory, skills, aliases }).slice(0, 8);
    setSuggestions(matches);
    setSelectedSuggestion(0);
  }, [aliases, combat, inventory, room, skills]);

  const submit = useCallback(() => {
    const trimmed = value.trim();
    if (!trimmed) return;
    onSubmit(trimmed);

    // Push to history (avoid duplicates at head)
    if (historyRef.current[0] !== trimmed) {
      historyRef.current.unshift(trimmed);
      if (historyRef.current.length > 100) historyRef.current.pop();
    }

    setValue('');
    setHistoryIndex(-1);
    setSuggestions([]);
  }, [value, onSubmit]);

  const handleKeyDown = useCallback(
    (e: KeyboardEvent<HTMLInputElement>) => {
      // Tab: accept suggestion
      if (e.key === 'Tab' && suggestions.length > 0) {
        e.preventDefault();
        const selected = suggestions[selectedSuggestion] ?? suggestions[0];
        setValue(selected.complete);
        setSuggestions([]);
        return;
      }

      // Enter: submit
      if (e.key === 'Enter') {
        e.preventDefault();
        if (suggestions.length > 0 && value === suggestions[selectedSuggestion]?.complete.trim()) {
          // If suggestion is fully typed, just submit
        }
        submit();
        return;
      }

      // Up arrow: history navigation or suggestion navigation
      if (e.key === 'ArrowUp') {
        e.preventDefault();
        if (suggestions.length > 0) {
          setSelectedSuggestion((prev) => Math.max(0, prev - 1));
          return;
        }
        const history = historyRef.current;
        const nextIndex = Math.min(historyIndex + 1, history.length - 1);
        if (nextIndex >= 0 && history[nextIndex]) {
          setHistoryIndex(nextIndex);
          setValue(history[nextIndex]);
          setSuggestions([]);
        }
        return;
      }

      // Down arrow: history navigation
      if (e.key === 'ArrowDown') {
        e.preventDefault();
        if (suggestions.length > 0) {
          setSelectedSuggestion((prev) => Math.min(suggestions.length - 1, prev + 1));
          return;
        }
        if (historyIndex > 0) {
          const nextIndex = historyIndex - 1;
          setHistoryIndex(nextIndex);
          setValue(historyRef.current[nextIndex] ?? '');
        } else {
          setHistoryIndex(-1);
          setValue('');
        }
        return;
      }

      // Escape: clear suggestions
      if (e.key === 'Escape') {
        setSuggestions([]);
        return;
      }
    },
    [suggestions, selectedSuggestion, historyIndex, submit, value],
  );

  const handleChange = (text: string) => {
    setValue(text);
    setHistoryIndex(-1);
    updateSuggestions(text);
  };

  return (
    <div className="relative border-t border-border-dim bg-bg-primary">
      {/* Suggestions popup */}
      {suggestions.length > 0 && (
        <div className="absolute bottom-full left-0 right-0 bg-bg-secondary border border-border-dim">
          {suggestions.map((cmd, i) => (
            <div
              key={`${cmd.complete}:${cmd.label}`}
              className={`flex cursor-pointer items-center justify-between gap-3 px-3 py-1.5 text-sm ${
                i === selectedSuggestion
                  ? 'bg-bg-tertiary text-text-terminal'
                  : 'text-text-dim hover:bg-bg-tertiary hover:text-text-bright'
              }`}
              onMouseDown={(e) => {
                e.preventDefault();
                setValue(cmd.complete);
                setSuggestions([]);
                inputRef.current?.focus();
              }}
            >
              <span className="truncate">{cmd.label}</span>
              {cmd.detail && <span className="shrink-0 text-xs text-text-dim">{cmd.detail}</span>}
            </div>
          ))}
        </div>
      )}

      {/* Input row */}
      <div className="flex items-center px-3 py-2 gap-2">
        <span className="text-text-terminal text-glow-subtle font-bold select-none">&gt;</span>
        <input
          ref={inputRef}
          type="text"
          value={value}
          onChange={(e) => handleChange(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="輸入指令..."
          autoFocus
          spellCheck={false}
          autoComplete="off"
          className="flex-1 bg-transparent text-text-terminal outline-none text-sm placeholder:text-text-dim"
        />
      </div>
    </div>
  );
}

function buildSuggestions(
  text: string,
  state: Pick<ReturnType<typeof useGameStore.getState>, 'room' | 'combat' | 'inventory' | 'skills' | 'aliases'>,
): Suggestion[] {
  const endsWithSpace = /\s$/.test(text);
  const parts = text.trimStart().split(/\s+/);
  const command = parts[0]?.toLowerCase() ?? '';
  const argPrefix = endsWithSpace ? '' : parts.slice(1).join(' ');

  if (parts.length === 1 && !endsWithSpace) {
    const lower = command.toLowerCase();
    return [
      ...COMMON_COMMANDS.map((cmd) => commandSuggestion(cmd)),
      ...COMMON_ALIASES.map((alias) => commandSuggestion(alias, 'alias')),
      ...Object.entries(state.aliases).map(([alias, command]) => commandSuggestion(alias, command)),
    ]
      .filter((item) => item.value.startsWith(lower))
      .slice(0, 8);
  }

  const normalizedCommand = normalizeCommand(command);
  const targetSuggestions = getTargetSuggestions(normalizedCommand, argPrefix, state);
  if (targetSuggestions.length > 0) return targetSuggestions;

  return [];
}

function commandSuggestion(command: string, detail = 'command'): Suggestion {
  return {
    value: command,
    label: command,
    detail,
    complete: `${command} `,
  };
}

function normalizeCommand(command: string): string {
  const aliases: Record<string, string> = {
    atk: 'attack',
    kill: 'attack',
    n: 'go',
    s: 'go',
    e: 'go',
    w: 'go',
    u: 'go',
    d: 'go',
    sk: 'skills',
  };
  return aliases[command] ?? command;
}

function getTargetSuggestions(
  command: string,
  prefix: string,
  state: Pick<ReturnType<typeof useGameStore.getState>, 'room' | 'combat' | 'inventory' | 'skills'>,
): Suggestion[] {
  const lower = prefix.toLowerCase();
  const makeComplete = (label: string) => `${command} ${label}`;
  const matches = (label: string) => label.toLowerCase().includes(lower);

  if (command === 'go' || command === 'move') {
    return (state.room?.exits ?? [])
      .map((exit) => suggestion(exit.direction, '出口', `go ${exit.direction}`))
      .filter((item) => matches(item.value));
  }

  if (command === 'attack') {
    const roomTargets = (state.room?.entities ?? [])
      .filter(entity => entity.type === 'monster')
      .map((monster) => ({
      label: monster.label,
      detail: monster.subtitle ?? '怪物',
    }));
    const combatTargets = ordinalCombatLabels(state.combat?.enemyTeam ?? []).map((enemy) => ({
      label: enemy.label,
      detail: `HP ${enemy.hp}/${enemy.maxHp}`,
    }));
    return [...combatTargets, ...roomTargets]
      .filter((target) => matches(target.label))
      .map((target) => suggestion(target.label, target.detail, makeComplete(target.label)));
  }

  if (command === 'talk' || command === 'shop') {
    return (state.room?.entities ?? [])
      .filter(entity => entity.type === 'npc')
      .map((npc) => suggestion(npc.label, npc.subtitle ?? 'NPC', `${command} ${npc.label}`))
      .filter((item) => matches(item.value));
  }

  if (command === 'loot') {
    return (state.room?.entities ?? [])
      .filter(entity => entity.type === 'corpse')
      .map((corpse) => suggestion(corpse.label, corpse.subtitle ?? '屍體', `loot ${corpse.label}`))
      .filter((item) => matches(item.value));
  }

  if (command === 'inspect' || command === 'open' || command === 'search') {
    const labels = [
      ...(state.room?.entities ?? []).map((entity) => ({ label: entity.label, detail: entity.type })),
      ...(state.room?.exits ?? []).map((exit) => ({ label: exit.direction, detail: '出口' })),
    ];
    return labels
      .filter((target) => matches(target.label))
      .map((target) => suggestion(target.label, target.detail, `${command} ${target.label}`));
  }

  if (command === 'skill') {
    return state.skills
      .flatMap((skill) => {
        const def = SKILL_DEFS[skill.skillId];
        return [
          suggestion(skill.skillId, def?.name ?? '技能', `skill ${skill.skillId}`),
          ...(def?.name ? [suggestion(def.name, skill.skillId, `skill ${def.id}`)] : []),
        ];
      })
      .filter((item) => matches(item.value));
  }

  if (command === 'use' || command === 'equip' || command === 'unequip' || command === 'drop') {
    return state.inventory
      .map((item) => {
        const label = (item as { name?: string }).name ?? item.itemId;
        return suggestion(label, `x${item.quantity}`, `${command} ${label}`);
      })
      .filter((item) => matches(item.value));
  }

  if (command === 'travel') {
    return (state.room?.travelNodes ?? [])
      .map((node) => suggestion(node.name, node.unlocked ? '已啟用' : '未啟用', `travel ${node.name}`))
      .filter((item) => matches(item.value));
  }

  return [];
}

function suggestion(value: string, detail: string, complete: string): Suggestion {
  return {
    value,
    label: value,
    detail,
    complete,
  };
}

function ordinalCombatLabels(enemies: NonNullable<ReturnType<typeof useGameStore.getState>['combat']>['enemyTeam']) {
  const totals = new Map<string, number>();
  for (const enemy of enemies) {
    totals.set(enemy.name, (totals.get(enemy.name) ?? 0) + 1);
  }
  const seen = new Map<string, number>();
  return enemies
    .filter((enemy) => !enemy.isDead)
    .map((enemy) => {
      const next = (seen.get(enemy.name) ?? 0) + 1;
      seen.set(enemy.name, next);
      return {
        ...enemy,
        label: (totals.get(enemy.name) ?? 0) > 1 ? `${enemy.name}#${next}` : enemy.name,
      };
    });
}
