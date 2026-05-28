export const SYSTEM_ALIASES: Record<string, string> = {
  n: 'go north', s: 'go south', e: 'go east', w: 'go west',
  l: 'look', i: 'inventory', inv: 'inventory',
  stat: 'status', stats: 'status',
  atk: 'attack', kill: 'attack',
  flee: 'escape', run: 'escape',
  eq: 'equip', uneq: 'unequip',
  sk: 'skills',
  '?': 'help',
  lb: 'leaderboard',
  cq: 'classquest',
  cq2: 'classquest2',
  st: 'skilltree',
  pray: 'faith pray',
};

export const BUILTIN_COMMANDS = new Set([
  'look', 'search', 'inspect', 'open', 'go', 'move',
  'status', 'inventory', 'skills', 'attack', 'skill',
  'defend', 'escape', 'equip', 'unequip', 'use',
  'take', 'pick', 'pickup', 'get', 'loot', 'drop',
  'say', 'talk', 'shop', 'buy', 'sell', 'allocate', 'alloc',
  'map', 'rest', 'activate', 'portals', 'travel', 'recall',
  'party', 'trade', 'quest', 'quests', 'duel', 'arena', 'dungeon',
  'classchange', 'job', 'rank', 'leaderboard', 'help',
  'achievements', 'achievement', 'title', 'fishcodex', 'monstercodex',
  'collection', 'pet', 'tame', 'event', 'weather', 'worldevent', 'mail', 'emote',
  'friend', 'auto', 'market', 'war', 'army', 'bounty', 'treasury',
  'diplomacy', 'building', 'craft', 'crafting', 'auction', 'fish',
  'classquest', 'classquest2', 'skilltree', 'token', 'alias', 'unalias',
  'tutorial', 'friends', 'guild', 'g', 'signin', 'checkin',
  'faith', 'pray', 'offering', 'renounce', 'debug',
]);

export const MAX_ALIAS_EXPANSION_DEPTH = 5;

export function resolveAliasExpansion(
  command: string,
  playerAliases: Record<string, string> = {},
): string | null {
  const normalized = command.trim().toLowerCase();
  if (!normalized || BUILTIN_COMMANDS.has(normalized)) return null;
  return playerAliases[normalized] ?? SYSTEM_ALIASES[normalized] ?? null;
}

export function expandAliasCommand(
  input: string,
  playerAliases: Record<string, string> = {},
  maxDepth = MAX_ALIAS_EXPANSION_DEPTH,
): { ok: true; command: string; depth: number } | { ok: false; reason: 'recursive' } {
  let current = input.trim();
  for (let depth = 0; depth <= maxDepth; depth++) {
    const [rawCommand, ...args] = current.split(/\s+/);
    const expansion = resolveAliasExpansion(rawCommand ?? '', playerAliases);
    if (!expansion) return { ok: true, command: current, depth };
    current = `${expansion}${args.length > 0 ? ` ${args.join(' ')}` : ''}`;
  }
  return { ok: false, reason: 'recursive' };
}
