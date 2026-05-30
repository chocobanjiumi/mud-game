import { useMemo, useEffect, useRef } from 'react';
import type { ReactNode } from 'react';
import { useGameStore } from '../stores/gameStore';
import type { CombatantState, ActiveStatusEffect, CardinalDirection, ApproachingMonsterPayload, NearbyCombatNeighborPayload } from '@game/shared';
import { getMonsterImagePath, getClassIconPath } from '../utils/assetImages';
import { runCommand } from '../utils/gameActions';

function sendCommand(command: string, echo?: string) {
  runCommand(command, echo);
}

const DIR_LABEL: Record<string, string> = { north: '北', south: '南', east: '東', west: '西' };
const DIR_ARROW: Record<string, string> = { north: '↓', south: '↑', east: '←', west: '→' };
const RES_SHORT: Record<string, string> = { rage: '怒', mp: '魔', focus: '專', faith: '信' };

export default function BattlefieldView() {
  const combat = useGameStore(s => s.combat);
  const room = useGameStore(s => s.room);
  const character = useGameStore(s => s.character);
  const selectedId = useGameStore(s => s.selectedCombatTargetId);
  const setSelectedId = useGameStore(s => s.setSelectedCombatTargetId);

  const nearby = room?.nearbyCombat;

  const { frontRow, backRow, aliveEnemies, approachingEnemies, maxThreat, selectedEnemy } = useMemo(() => {
    if (!combat) return { frontRow: [], backRow: [], aliveEnemies: [], approachingEnemies: [], maxThreat: 1, selectedEnemy: undefined };
    const fr = combat.playerTeam.filter(p => p.formation === 'front');
    const br = combat.playerTeam.filter(p => p.formation === 'back');
    const alive = combat.enemyTeam.filter(e => !e.isDead && !e.isApproaching);
    const approaching = combat.enemyTeam.filter(e => !e.isDead && e.isApproaching);
    const mt = Math.max(1, ...combat.playerTeam.map(p => p.threat));
    const sel = combat.enemyTeam.find(e => e.id === selectedId);

    for (const e of approaching) {
      const ap = nearby?.approaching?.find(a => a.instanceId === e.id);
      if (ap?.sourceDirection && !approachDirCache.has(e.id)) {
        approachDirCache.set(e.id, ap.sourceDirection);
      }
    }

    for (const e of alive) {
      if (approachDirCache.has(e.id) && !monArrivalTimestamps.has(e.id)) {
        monArrivalTimestamps.set(e.id, Date.now());
      }
    }

    return { frontRow: fr, backRow: br, aliveEnemies: alive, approachingEnemies: approaching, maxThreat: mt, selectedEnemy: sel };
  }, [combat, selectedId, nearby]);

  const idleMonsters = useMemo(() => {
    if (!room?.monsters || !combat) return [];
    const combatIds = new Set(combat.enemyTeam.map(e => e.id));
    return room.monsters.filter(m => !combatIds.has(m.id));
  }, [room?.monsters, combat]);

  const neighborMap = useMemo(() => {
    const map: Partial<Record<CardinalDirection, NearbyCombatNeighborPayload>> = {};
    nearby?.neighbors?.forEach(n => { map[n.direction] = n; });
    return map;
  }, [nearby]);

  const approachByDir = useMemo(() => {
    const map: Partial<Record<CardinalDirection, ApproachingMonsterPayload[]>> = {};
    nearby?.approaching?.forEach(a => {
      (map[a.sourceDirection] ??= []).push(a);
    });
    return map;
  }, [nearby]);

  if (!combat) return null;

  return (
    <div className="border-b border-border-dim bg-bg-secondary flex flex-col">
      {/* ── 3x3 戰場地圖 ── */}
      <div className="flex-1 min-h-[45vh] p-1.5 relative">
        <div className="h-full grid grid-cols-3 grid-rows-3 gap-px">

          {/* Row 1: 左上(隊伍) | 北房 | 右上(目標) */}
          <CornerPanel title="隊伍狀態" color="text-[#88ccff]">
            {combat.playerTeam.map(p => (
              <PartyRow key={p.id} c={p} me={p.id === character?.id} />
            ))}
          </CornerPanel>

          <RoomCell dir="北" neighbor={neighborMap.north} />

          <CornerPanel title="選取目標" color="text-red-400">
            {selectedEnemy ? <TargetDetail c={selectedEnemy} /> : <div className="text-[9px] text-text-dim text-center">點擊敵人選取</div>}
          </CornerPanel>

          {/* Row 2: 西房 | 本房 | 東房 */}
          <RoomCell dir="西" neighbor={neighborMap.west} />

          {/* 本房 */}
          <div className="relative border border-text-terminal/40 bg-text-terminal/5 rounded flex flex-col overflow-hidden">
            <div className="text-center py-px">
              <span className="text-[8px] font-bold text-text-terminal">{room?.name || '本房'}</span>
            </div>
            {/* 戰鬥中敵方 */}
            <div className="flex-1 flex items-center justify-center gap-1.5 px-1 flex-wrap">
              {aliveEnemies.map(e => (
                <MonIcon key={e.id} enemyId={e.id} name={e.name} img={getMonsterImagePath(e.id.replace(/_\d+$/, ''))} hp={e.maxHp > 0 ? (e.hp / e.maxHp) * 100 : 0}
                  boss={!!e.monsterPhases?.length} selected={e.id === selectedId} cast={e.pendingTelegraph ? `${(e.pendingTelegraph as { skillName?: string }).skillName ?? '施法'}` : undefined}
                  onClick={() => setSelectedCombatTargetId(e.id)} size={aliveEnemies.length > 4 ? 32 : 40} />
              ))}
            </div>
            {/* 房間內未參戰怪物 */}
            {idleMonsters.length > 0 && (
              <div className="px-1 py-0.5 border-t border-border-dim/30 mx-1">
                <div className="text-[7px] text-text-amber text-center mb-0.5">未參戰</div>
                <div className="flex items-center justify-center gap-1 flex-wrap">
                  {idleMonsters.map(m => (
                    <MonIcon key={m.id} name={m.label ?? m.name} img={getMonsterImagePath(m.id.replace(/_\d+$/, ''))} hp={m.maxHp > 0 ? (m.hp / m.maxHp) * 100 : 100}
                      size={28} onClick={() => sendCommand(`attack ${m.id}`, `攻擊 ${m.label ?? m.name}`)} idle />
                  ))}
                </div>
              </div>
            )}
            <div className="border-t border-border-dim mx-1" />
            {/* 我方 */}
            <div className="flex-1 flex flex-col justify-center px-1 gap-px">
              {frontRow.length > 0 && (
                <div className="flex items-center gap-0.5">
                  <span className="text-[7px] text-red-400 w-3 shrink-0">前</span>
                  <div className="flex gap-1.5">{frontRow.map(p => <AllyIcon key={p.id} c={p} me={p.id === character?.id} />)}</div>
                </div>
              )}
              {backRow.length > 0 && (
                <div className="flex items-center gap-0.5">
                  <span className="text-[7px] text-text-terminal w-3 shrink-0">後</span>
                  <div className="flex gap-1.5">{backRow.map(p => <AllyIcon key={p.id} c={p} me={p.id === character?.id} />)}</div>
                </div>
              )}
            </div>
          </div>

          <RoomCell dir="東" neighbor={neighborMap.east} />

          {/* Row 3: 左下(回合) | 南房 | 右下(仇恨) */}
          <CornerPanel title="回合資訊" color="text-text-terminal">
            <RoundInfo round={combat.round} timer={combat.turnTimer} />
          </CornerPanel>

          <RoomCell dir="南" neighbor={neighborMap.south} />

          <CornerPanel title="仇恨排行" color="text-text-amber">
            {selectedEnemy ? (
              combat.playerTeam.filter(p => !p.isDead).sort((a, b) => b.threat - a.threat).map(p => (
                <ThreatRow key={p.id} name={p.name} pct={maxThreat > 0 ? (p.threat / maxThreat) * 100 : 0} />
              ))
            ) : <div className="text-[9px] text-text-dim text-center">選取目標查看</div>}
          </CornerPanel>
        </div>

        {/* Approaching dots between rooms */}
        {(['north', 'south', 'east', 'west'] as CardinalDirection[]).map(dir => {
          const monsters = approachByDir[dir] ?? approachingEnemies.filter(e => {
            const ap = nearby?.approaching?.find(a => a.instanceId === e.id);
            return ap?.sourceDirection === dir;
          });
          if (monsters.length === 0 && !(approachByDir[dir]?.length)) return null;
          const items = approachByDir[dir] ?? [];
          if (items.length === 0) return null;
          return items.map((a, i) => (
            <ApproachDot key={a.instanceId} instanceId={a.instanceId} dir={dir} index={i} total={items.length}
              img={a.image ? `/mud${a.image}` : getMonsterImagePath(a.monsterId)}
              name={a.name} ticks={a.arrivalTicks} />
          ));
        })}
      </div>
    </div>
  );

  function setSelectedCombatTargetId(id: string) {
    setSelectedId(id);
  }
}

/* ═══ Corner Panel ═══ */
function CornerPanel({ title, color, children }: { title: string; color: string; children: ReactNode }) {
  return (
    <div className="rounded border border-border-dim bg-bg-primary/60 p-1 flex flex-col overflow-hidden">
      <div className={`text-[8px] font-bold ${color} mb-0.5`}>{title}</div>
      <div className="flex-1 flex flex-col justify-center gap-0.5 overflow-y-auto min-h-0">{children}</div>
    </div>
  );
}

/* ═══ Party Row (左上) ═══ */
function PartyRow({ c, me }: { c: CombatantState; me: boolean }) {
  const hpPct = c.maxHp > 0 ? (c.hp / c.maxHp) * 100 : 0;
  const resPct = c.maxResource > 0 ? (c.resource / c.maxResource) * 100 : 0;
  const hpColor = hpPct < 30 ? 'bg-red-500' : hpPct < 60 ? 'bg-text-amber' : 'bg-text-terminal';
  return (
    <div className={`flex items-center gap-1 rounded px-0.5 py-px ${me ? 'bg-text-terminal/5' : c.isDead ? 'opacity-40' : ''}`}>
      <img src={getClassIconPath(c.classId)} alt="" className="w-4 h-4 rounded border border-border-dim object-cover shrink-0" />
      <div className="min-w-0 flex-1">
        <div className="flex items-center gap-0.5">
          <span className={`text-[8px] font-bold truncate ${me ? 'text-text-terminal' : 'text-text-bright'}`}>{c.name}</span>
          {c.mounted && <span className="text-[7px]">🐴</span>}
          {c.activeEffects.slice(0, 2).map((e, i) => <EffectTag key={i} e={e} />)}
        </div>
        <div className="flex items-center gap-0.5">
          <div className="flex-1 h-1 rounded bg-bg-primary/60"><div className={`h-full rounded ${hpColor}`} style={{ width: `${hpPct}%` }} /></div>
          <div className="w-5 h-1 rounded bg-bg-primary/60"><div className="h-full rounded bg-text-amber/50" style={{ width: `${resPct}%` }} /></div>
          <span className="text-[6px] text-text-dim">{RES_SHORT[c.resourceType] ?? ''}</span>
        </div>
      </div>
    </div>
  );
}

/* ═══ Target Detail (右上) ═══ */
function TargetDetail({ c }: { c: CombatantState }) {
  const hpPct = c.maxHp > 0 ? (c.hp / c.maxHp) * 100 : 0;
  const isBoss = !!c.monsterPhases?.length;
  return (
    <>
      <div className="flex items-center gap-1 mb-0.5">
        <div className="w-8 h-8 rounded border-2 border-red-500/60 overflow-hidden shrink-0">
          <img src={getMonsterImagePath(c.id.replace(/_\d+$/, '')) ?? ''} alt="" className="w-full h-full object-cover" />
        </div>
        <div className="min-w-0">
          <div className="flex items-center gap-0.5">
            {isBoss && <span className="text-[6px] rounded bg-red-500/20 border border-red-500/30 px-0.5 text-red-400 font-bold">BOSS</span>}
            <span className="text-[9px] font-bold text-text-bright truncate">{c.name}</span>
          </div>
          <span className="text-[7px] text-text-dim">Lv{c.level}{c.currentMonsterPhase && c.currentMonsterPhase > 1 ? ` · 階段${c.currentMonsterPhase}` : ''}</span>
        </div>
      </div>
      <div className="flex items-center gap-0.5 mb-0.5">
        <span className="text-[7px] text-text-dim w-3">HP</span>
        <div className="flex-1 h-1.5 rounded bg-bg-primary/60"><div className="h-full rounded bg-combat-damage" style={{ width: `${hpPct}%` }} /></div>
        <span className="text-[7px] text-text-bright shrink-0">{c.hp.toLocaleString()}/{c.maxHp.toLocaleString()}</span>
      </div>
      {c.pendingTelegraph && (
        <div className="flex items-center gap-0.5 mb-0.5">
          <span className="text-[7px] text-red-400 animate-pulse">⏳ {(c.pendingTelegraph as { skillName?: string }).skillName ?? '施法中'}</span>
        </div>
      )}
      {c.activeEffects.length > 0 && (
        <div className="flex flex-wrap gap-0.5">{c.activeEffects.map((e, i) => <EffectTag key={i} e={e} />)}</div>
      )}
    </>
  );
}

/* ═══ Round Info (左下) ═══ */
function RoundInfo({ round, timer }: { round: number; timer: number }) {
  const pct = Math.max(0, Math.min(100, (timer / 5) * 100));
  return (
    <>
      <div className="text-center">
        <div className="text-lg font-bold text-text-terminal">{round}</div>
        <div className="text-[7px] text-text-dim">第 {round} 回合</div>
      </div>
      <div>
        <div className="flex items-center justify-between text-[7px] mb-px">
          <span className="text-text-dim">行動倒數</span>
          <span className="text-text-amber font-bold">{timer.toFixed(1)}s</span>
        </div>
        <div className="h-1.5 rounded bg-bg-primary/60">
          <div className="h-full rounded bg-text-amber/70 transition-all" style={{ width: `${pct}%` }} />
        </div>
      </div>
    </>
  );
}

/* ═══ Threat Row (右下) ═══ */
function ThreatRow({ name, pct }: { name: string; pct: number }) {
  const color = pct >= 90 ? 'bg-red-400' : pct >= 50 ? 'bg-text-amber' : 'bg-text-dim';
  return (
    <div className="flex items-center gap-0.5">
      <span className="text-[7px] text-text-bright w-12 truncate">{name}</span>
      <div className="flex-1 h-1 rounded bg-bg-primary/40"><div className={`h-full rounded ${color}`} style={{ width: `${pct}%` }} /></div>
      <span className="text-[6px] text-text-dim w-5 text-right">{Math.round(pct)}%</span>
    </div>
  );
}

/* ═══ Room Cell (東西南北) ═══ */
function RoomCell({ dir, neighbor }: { dir: string; neighbor?: NearbyCombatNeighborPayload }) {
  const d = dir as 'north' | 'south' | 'east' | 'west';
  const label = DIR_LABEL[d as string] ?? dir;
  const hasMonsters = neighbor && neighbor.monsterCount > 0;
  return (
    <div className={`rounded border p-0.5 flex flex-col ${hasMonsters ? 'border-border-dim bg-bg-primary/80' : 'border-border-dim/30 bg-bg-primary/20'}`}>
      <div className="text-[7px] text-text-dim text-center">{label}方{neighbor?.roomName ? ` · ${neighbor.roomName}` : ''}</div>
      {hasMonsters ? (
        <div className="flex-1 flex items-center justify-center gap-1 flex-wrap">
          {neighbor?.scouted && neighbor.monsters ? (
            neighbor.monsters.map(m => (
              <MonIcon key={m.id} name={m.name} img={m.image ? `/mud${m.image}` : getMonsterImagePath(m.monsterId)} hp={m.maxHp > 0 ? (m.hp / m.maxHp) * 100 : 100} size={28} />
            ))
          ) : (
            <span className="text-[9px] text-red-400">怪×{neighbor?.monsterCount}</span>
          )}
          {neighbor?.scouted && <div className="text-[7px] text-text-terminal">✓偵查</div>}
        </div>
      ) : (
        <div className="flex-1 flex items-center justify-center text-[8px] text-text-dim/30">
          {neighbor?.passable === false ? '牆' : '—'}
        </div>
      )}
    </div>
  );
}

/* ═══ Monster Icon ═══ */
const approachDirCache = new Map<string, CardinalDirection>();
const monArrivalTimestamps = new Map<string, number>();

function MonIcon({ name, img, hp, boss, selected, cast, onClick, size = 36, idle, enemyId }: {
  name: string; img?: string; hp: number; boss?: boolean; selected?: boolean; cast?: string; onClick?: () => void; size?: number; idle?: boolean;
  enemyId?: string;
}) {
  const hpColor = hp < 30 ? '#ff4444' : hp < 60 ? '#ffb800' : '#ff6666';

  let animClass = '';
  if (enemyId && monArrivalTimestamps.has(enemyId)) {
    const age = Date.now() - monArrivalTimestamps.get(enemyId)!;
    const dir = approachDirCache.get(enemyId);
    if (age < 2000 && dir) {
      animClass = `mon-arrive-${dir}`;
    }
  }

  return (
    <div className={`flex flex-col items-center gap-px cursor-pointer group ${idle ? 'opacity-60 hover:opacity-100' : ''}`} title={`${name} HP:${Math.round(hp)}%${idle ? ' (點擊攻擊)' : ''}`} onClick={onClick}>
      <div className={animClass}>
        {cast && <span className="text-[6px] text-red-400 animate-pulse leading-none">⏳{cast}</span>}
        <div className="rounded-full overflow-hidden bg-bg-primary/60" style={{ width: size - 4, height: 2 }}>
          <div className="h-full rounded-full" style={{ width: `${hp}%`, backgroundColor: hpColor }} />
        </div>
        <div className={`rounded-lg border-2 overflow-hidden transition ${selected ? 'border-text-terminal shadow-[0_0_6px_rgba(0,255,136,0.3)]' : idle ? 'border-text-amber/40 group-hover:border-text-amber' : boss ? 'border-red-500/60' : 'border-border-dim group-hover:border-text-terminal/40'}`} style={{ width: size, height: size }}>
          {img ? <img src={img} alt={name} className="w-full h-full object-cover" /> : <div className="w-full h-full bg-bg-secondary flex items-center justify-center text-[8px] text-text-dim">{name[0]}</div>}
        </div>
        <span className={`text-[7px] leading-none ${idle ? 'text-text-amber' : boss ? 'text-red-300 font-bold' : 'text-text-dim'}`}>{name.length > 4 ? name.slice(0, 3) + '..' : name}</span>
      </div>
    </div>
  );
}

/* ═══ Ally Icon ═══ */
function AllyIcon({ c, me }: { c: CombatantState; me: boolean }) {
  const hpPct = c.maxHp > 0 ? (c.hp / c.maxHp) * 100 : 0;
  const hpColor = hpPct < 30 ? '#ff4444' : hpPct < 60 ? '#ffb800' : '#00ff88';
  return (
    <div className={`flex flex-col items-center gap-px ${c.isDead ? 'opacity-30' : ''}`} title={`${c.name} HP:${Math.round(hpPct)}%`}>
      <div className="rounded-full overflow-hidden bg-bg-primary/60" style={{ width: 26, height: 2 }}>
        <div className="h-full rounded-full" style={{ width: `${hpPct}%`, backgroundColor: hpColor }} />
      </div>
      <div className={`rounded-lg border-2 overflow-hidden ${me ? 'border-text-terminal/60' : hpPct < 30 ? 'border-red-500/40' : 'border-border-dim'}`} style={{ width: 28, height: 28 }}>
        <img src={getClassIconPath(c.classId)} alt="" className="w-full h-full object-cover" />
      </div>
      <div className="flex items-center gap-px">
        {c.mounted && <span className="text-[6px]">🐴</span>}
        <span className={`text-[7px] leading-none ${me ? 'text-text-terminal' : 'text-text-dim'}`}>{c.name.length > 3 ? c.name.slice(0, 2) + '..' : c.name}</span>
      </div>
    </div>
  );
}

/* ═══ Approaching Dot ═══ */
const approachTimestamps = new Map<string, number>();

function ApproachDot({ dir, index, total, img, name, ticks, instanceId }: {
  dir: CardinalDirection; index: number; total: number; img?: string; name: string; ticks: number; instanceId: string;
}) {
  const arrow = DIR_ARROW[dir] ?? '?';
  const offset = total > 1 ? (index - (total - 1) / 2) * 34 : 0;

  if (!approachTimestamps.has(instanceId)) {
    approachTimestamps.set(instanceId, Date.now());
  }
  const age = Date.now() - approachTimestamps.get(instanceId)!;
  const shouldAnimate = age < 2500;

  useEffect(() => {
    return () => { approachTimestamps.delete(instanceId); };
  }, [instanceId]);

  const posStyle: React.CSSProperties = { position: 'absolute' };
  if (dir === 'north') { posStyle.top = 'calc(33.33% - 16px)'; posStyle.left = `calc(50% + ${offset}px)`; posStyle.transform = 'translateX(-50%)'; }
  if (dir === 'south') { posStyle.bottom = 'calc(33.33% - 16px)'; posStyle.left = `calc(50% + ${offset}px)`; posStyle.transform = 'translateX(-50%)'; }
  if (dir === 'east') { posStyle.right = 'calc(33.33% - 16px)'; posStyle.top = `calc(50% + ${offset}px)`; posStyle.transform = 'translateY(-50%)'; }
  if (dir === 'west') { posStyle.left = 'calc(33.33% - 16px)'; posStyle.top = `calc(50% + ${offset}px)`; posStyle.transform = 'translateY(-50%)'; }

  return (
    <div style={posStyle} className="z-10">
      <div
        className={`flex flex-col items-center ${shouldAnimate ? `approach-slide-${dir}` : 'animate-pulse'}`}
        title={`${name} ${ticks}t`}
      >
        <div className="rounded-full border-2 border-text-amber/60 overflow-hidden" style={{ width: 24, height: 24 }}>
          {img ? <img src={img} alt={name} className="w-full h-full object-cover" /> : <div className="w-full h-full bg-bg-secondary" />}
        </div>
        <span className="text-[6px] text-text-amber font-bold leading-none">{arrow}{ticks}t</span>
      </div>
    </div>
  );
}

/* ═══ Effect Tag ═══ */
function EffectTag({ e }: { e: ActiveStatusEffect }) {
  return <span className="text-[6px] rounded bg-combat-buff/10 px-0.5 text-combat-buff">{e.type.replace(/_/g, '')}{e.remainingDuration > 0 ? e.remainingDuration : ''}</span>;
}
