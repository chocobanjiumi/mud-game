import type { WsSession } from '../../ws/handler.js';

export interface ParsedCommand {
  cmd: string;
  args: string[];
  argStr: string;
  input: string;
}

export interface CommandDefinition {
  names: string[];
  category: string;
  usage: string;
  description: string;
  handler: (session: WsSession, parsed: ParsedCommand) => void;
  hidden?: boolean;
}

export interface CommandRegistry {
  definitions: CommandDefinition[];
  byName: Map<string, CommandDefinition>;
}

export function createCommandRegistry(definitions: CommandDefinition[]): CommandRegistry {
  const byName = new Map<string, CommandDefinition>();
  for (const definition of definitions) {
    for (const name of definition.names) {
      byName.set(name, definition);
    }
  }
  return { definitions, byName };
}

export function listCommandCategories(
  definitions: CommandDefinition[],
  categoryTitles: Record<string, string>,
): Record<string, { title: string; lines: string[] }> {
  const categories: Record<string, { title: string; lines: string[] }> = {};
  for (const definition of definitions) {
    if (definition.hidden) continue;
    const category = categories[definition.category] ?? {
      title: categoryTitles[definition.category] ?? definition.category,
      lines: [],
    };
    category.lines.push(`${definition.usage.padEnd(24)} ${definition.description}`);
    categories[definition.category] = category;
  }
  return categories;
}
