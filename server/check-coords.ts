import { ROOMS } from './src/data/rooms.js';

const grid = new Map<string, { id: string; zone: string; name: string }>();
for (const r of Object.values(ROOMS)) {
  const wx = (r as any).worldX as number | undefined;
  const wy = (r as any).worldY as number | undefined;
  if (typeof wx === 'number' && typeof wy === 'number') {
    grid.set(`${wx},${wy}`, { id: r.id, zone: r.zone, name: r.name });
  }
}

// Check target coords and their neighbors
for (const [tx, ty] of [[-2,1],[-3,1]]) {
  const key = `${tx},${ty}`;
  const existing = grid.get(key);
  console.log(`\n(${tx},${ty}): ${existing ? `EXISTS — ${existing.id} [${existing.zone}] ${existing.name}` : 'EMPTY'}`);
  for (const [dx, dy, dir] of [[0,-1,'N'],[0,1,'S'],[-1,0,'W'],[1,0,'E']] as const) {
    const nk = `${tx+dx},${ty+dy}`;
    const n = grid.get(nk);
    console.log(`  ${dir} (${tx+dx},${ty+dy}): ${n ? `${n.id} [${n.zone}] ${n.name}` : 'empty'}`);
  }
}
