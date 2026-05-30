import { inspect } from 'node:util';

type LogLevel = 'debug' | 'info' | 'warn' | 'error' | 'silent';

const LEVEL_WEIGHT: Record<LogLevel, number> = {
  debug: 10,
  info: 20,
  warn: 30,
  error: 40,
  silent: 50,
};

function normalizeLevel(value: string | undefined): LogLevel {
  if (value === 'debug' || value === 'info' || value === 'warn' || value === 'error' || value === 'silent') {
    return value;
  }
  return process.env.NODE_ENV === 'test' ? 'warn' : 'info';
}

function formatArg(arg: unknown): string {
  if (typeof arg === 'string') return arg;
  if (arg instanceof Error) return arg.stack ?? arg.message;
  return inspect(arg, { depth: 4, colors: false, breakLength: 120 });
}

function shouldLog(level: LogLevel): boolean {
  return LEVEL_WEIGHT[level] >= LEVEL_WEIGHT[normalizeLevel(process.env.LOG_LEVEL)];
}

function write(level: Exclude<LogLevel, 'silent'>, scope: string, args: unknown[]): void {
  if (!shouldLog(level)) return;
  const prefix = `[${new Date().toISOString()}] [${level.toUpperCase()}] [${scope}]`;
  const line = `${prefix} ${args.map(formatArg).join(' ')}\n`;
  const stream = level === 'error' || level === 'warn' ? process.stderr : process.stdout;
  stream.write(line);
}

export interface ModuleLogger {
  debug: (...args: unknown[]) => void;
  info: (...args: unknown[]) => void;
  warn: (...args: unknown[]) => void;
  error: (...args: unknown[]) => void;
}

export function createModuleLogger(scope: string): ModuleLogger {
  return {
    debug: (...args) => write('debug', scope, args),
    info: (...args) => write('info', scope, args),
    warn: (...args) => write('warn', scope, args),
    error: (...args) => write('error', scope, args),
  };
}
