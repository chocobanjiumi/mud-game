import { useState, useRef, useCallback, type KeyboardEvent } from 'react';

const COMMON_COMMANDS = [
  'look', 'north', 'south', 'east', 'west', 'up', 'down',
  'attack', 'defend', 'flee', 'use', 'equip', 'unequip',
  'inventory', 'status', 'skills', 'party', 'map',
  'say', 'shout', 'whisper', 'help',
  'buy', 'sell', 'talk', 'quest',
  'rest', 'pickup', 'drop',
];

interface CommandInputProps {
  onSubmit: (command: string) => void;
}

export default function CommandInput({ onSubmit }: CommandInputProps) {
  const [value, setValue] = useState('');
  const [historyIndex, setHistoryIndex] = useState(-1);
  const [suggestions, setSuggestions] = useState<string[]>([]);
  const [selectedSuggestion, setSelectedSuggestion] = useState(0);
  const historyRef = useRef<string[]>([]);
  const inputRef = useRef<HTMLInputElement>(null);

  const updateSuggestions = useCallback((text: string) => {
    if (!text.trim()) {
      setSuggestions([]);
      return;
    }
    const lower = text.toLowerCase();
    const matches = COMMON_COMMANDS.filter((cmd) => cmd.startsWith(lower)).slice(0, 5);
    setSuggestions(matches);
    setSelectedSuggestion(0);
  }, []);

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
        setValue(selected + ' ');
        setSuggestions([]);
        return;
      }

      // Enter: submit
      if (e.key === 'Enter') {
        e.preventDefault();
        if (suggestions.length > 0 && value === suggestions[selectedSuggestion]) {
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
              key={cmd}
              className={`px-3 py-1 text-sm cursor-pointer ${
                i === selectedSuggestion
                  ? 'bg-bg-tertiary text-text-terminal'
                  : 'text-text-dim hover:bg-bg-tertiary hover:text-text-bright'
              }`}
              onMouseDown={(e) => {
                e.preventDefault();
                setValue(cmd + ' ');
                setSuggestions([]);
                inputRef.current?.focus();
              }}
            >
              {cmd}
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
