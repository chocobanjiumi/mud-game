import { spawnSync } from 'node:child_process';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

interface BaselineCheck {
  name: string;
  command: string;
  args: string[];
  summaryPattern: RegExp;
  maxErrors: number;
  maxWarnings: number;
}

const checks: BaselineCheck[] = [
  {
    name: 'validate:content',
    command: 'pnpm',
    args: ['validate:content'],
    summaryPattern: /Content validation:\s+(\d+) error\(s\),\s+(\d+) warning\(s\)/,
    maxErrors: 3283,
    maxWarnings: 0,
  },
  {
    name: 'validate:mud5',
    command: 'pnpm',
    args: ['validate:mud5'],
    summaryPattern: /MUD5 validation:\s+(\d+) error\(s\),\s+(\d+) warning\(s\)/,
    maxErrors: 259,
    maxWarnings: 56,
  },
];
const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');

let failed = false;

for (const check of checks) {
  const result = spawnSync(check.command, check.args, {
    cwd: ROOT,
    encoding: 'utf8',
    maxBuffer: 64 * 1024 * 1024,
  });
  const output = `${result.stdout ?? ''}\n${result.stderr ?? ''}`;
  const match = output.match(check.summaryPattern);

  if (!match) {
    failed = true;
    console.error(`[${check.name}] could not parse validation summary.`);
    console.error(output.split('\n').slice(0, 12).join('\n'));
    if (result.error) console.error(result.error.message);
    continue;
  }

  const errors = Number(match[1]);
  const warnings = Number(match[2]);
  const ok = errors <= check.maxErrors && warnings <= check.maxWarnings;
  const status = ok ? 'ok' : 'regressed';
  console.log(
    `[${check.name}] ${status}: ${errors}/${check.maxErrors} errors, ${warnings}/${check.maxWarnings} warnings`,
  );

  if (!ok) failed = true;
}

if (failed) process.exit(1);
