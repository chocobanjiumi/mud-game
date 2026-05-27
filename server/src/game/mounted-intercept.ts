import type { BaseStats, DerivedMountStats, Direction, MonsterDef } from '@game/shared';

export interface MountedInterceptTarget {
  instanceId: string;
  monsterId: string;
  name: string;
  sourceDirection: Direction;
  arrivalTicks: number;
}

export interface MountedInterceptResolution {
  score: number;
  difficulty: number;
  delay: 0 | 1 | 2;
}

export function selectMountedInterceptTarget<T extends MountedInterceptTarget>(
  approaching: T[],
  rawArg: string,
): T | undefined {
  const arg = rawArg.trim();
  const directionToken = arg.startsWith('direction:') ? arg.slice('direction:'.length) : arg;
  return approaching.find(monster => monster.instanceId === arg)
    ?? approaching.find(monster => monster.sourceDirection === directionToken)
    ?? approaching[0];
}

export function resolveMountedIntercept(
  mountStats: Pick<DerivedMountStats, 'stability' | 'interceptBonus'>,
  characterStats: Pick<BaseStats, 'dex' | 'str'>,
  monsterDef: Pick<MonsterDef, 'level' | 'isBoss' | 'isElite'> | undefined,
): MountedInterceptResolution {
  const score = mountStats.stability + mountStats.interceptBonus + characterStats.dex + characterStats.str;
  const difficulty = 20
    + (monsterDef?.level ?? 1) * 2
    + (monsterDef?.isBoss ? 20 : monsterDef?.isElite ? 10 : 0);
  const delay = score >= difficulty + 15 ? 2 : score >= difficulty ? 1 : 0;
  return { score, difficulty, delay };
}
