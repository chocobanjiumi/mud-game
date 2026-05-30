export default function BattleMockup() {
  return (
    <div className="h-screen bg-[#0a0f1a] text-[#e0e8ff] flex">
      {/* ═══ A: Quick Actions ═══ */}
      <div className="w-[130px] shrink-0 border-r border-[#1a3a5c] bg-[#0d1525] p-2 flex flex-col gap-1 overflow-y-auto text-[10px]">
        <div className="aspect-square w-full rounded border border-[#1a3a5c] bg-[#0a0f1a] flex items-center justify-center text-[#5a6a8a]">小地圖</div>
        <SideBtn label="背包" k="I" />
        <SideBtn label="隊伍" k="P" />
        <SideBtn label="角色" k="C" />
        <SideBtn label="技能" />
        <div className="border-t border-[#1a3a5c] my-0.5" />
        <SideBtn label="攻擊" hl />
        <SideBtn label="防禦" />
        <SideBtn label="逃跑" />
        <SideBtn label="換排位" />
        <div className="mt-auto text-[#5a6a8a] flex items-center gap-1"><span className="w-1.5 h-1.5 rounded-full bg-[#00ff88]" />連線</div>
      </div>

      {/* ═══ B+C: Merged Combat Area ═══ */}
      <div className="flex-1 min-w-0 border-r border-[#1a3a5c] bg-[#0d1525] flex flex-col overflow-hidden">
        <div className="flex-1 overflow-y-auto">

          {/* ──── 戰場：跨房 + 本房 + 接近中 ──── */}
          <div className="p-2">
            {/* Header */}
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-2">
                <span className="text-xs font-bold text-[#00ff88]">⚔ 第 5 回合</span>
              </div>
              <span className="text-[9px] text-[#5a6a8a]">深淵龍穴 · 最終房間</span>
            </div>

            {/* ── 跨房戰鬥（十字格） ── */}
            <div className="mb-2">
              <div className="text-[9px] text-[#5a6a8a] mb-1">相鄰房間</div>
              <div className="grid grid-cols-3 gap-1" style={{ width: '210px', margin: '0 auto' }}>
                {/* 空 */}
                <div />
                {/* 北 */}
                <CrossLane dir="北" count={2} scouted approaching={1} />
                {/* 空 */}
                <div />
                {/* 西 */}
                <CrossLane dir="西" count={0} />
                {/* 自己 */}
                <div className="rounded border border-[#00ff88]/30 bg-[#00ff88]/5 p-1 text-center">
                  <div className="text-[9px] font-bold text-[#00ff88]">本房</div>
                  <div className="text-[8px] text-[#5a6a8a]">戰鬥中</div>
                </div>
                {/* 東 */}
                <CrossLane dir="東" count={3} approaching={2} />
                {/* 空 */}
                <div />
                {/* 南 */}
                <CrossLane dir="南" count={1} scouted />
                {/* 空 */}
                <div />
              </div>
            </div>

            {/* ── 我方陣型 ── */}
            <div className="mb-2">
              {/* 前排 */}
              <div className="flex items-center gap-1 mb-1">
                <span className="text-[9px] font-bold text-red-400">前排</span>
                <div className="flex-1 border-t border-[#1a3a5c]/40" />
              </div>
              <div className="flex gap-1.5 mb-1.5">
                <UnitCard icon="/mud/images/wiki/origins/class_swordsman_icon.png" name="聖光騎士" sub="騎士" hp={1850} maxHp={2400} threat={85} effects={['🐴', '盾']} me />
                <UnitCard icon="/mud/images/wiki/origins/class_swordsman_icon.png" name="血刃" sub="狂戰士" hp={680} maxHp={1800} threat={100} effects={['狂血']} lowHp />
              </div>

              {/* 後排 */}
              <div className="flex items-center gap-1 mb-1">
                <span className="text-[9px] font-bold text-[#00ff88]">後排</span>
                <div className="flex-1 border-t border-[#1a3a5c]/40" />
              </div>
              <div className="flex gap-1.5">
                <UnitCard icon="/mud/images/wiki/origins/class_mage_icon.png" name="烈焰鑄師" sub="元素鑄師" hp={1100} maxHp={1200} threat={60} />
                <UnitCard icon="/mud/images/wiki/origins/class_priest_icon.png" name="靈行者" sub="冥行者" hp={1400} maxHp={1500} threat={40} effects={['靈界']} />
                <UnitCard icon="/mud/images/wiki/origins/class_ranger_icon.png" name="鷹眼蒼" sub="鷹眼獵手" hp={900} maxHp={1300} threat={70} effects={['瞄×2']} />
              </div>
            </div>

            {/* ── VS ── */}
            <div className="flex items-center gap-2 my-2">
              <div className="flex-1 border-t border-[#1a3a5c]" />
              <span className="text-[10px] font-bold text-[#5a6a8a]">VS</span>
              <div className="flex-1 border-t border-[#1a3a5c]" />
            </div>

            {/* ── 敵方 ── */}
            <div className="flex flex-wrap gap-1.5 mb-2">
              <EnemyUnit icon="/mud/images/monsters/monster_astral_time_minute_zero_dragon.png" name="深淵巨龍" level={35} hp={18500} maxHp={32000} boss cast="龍息 2t" threat="血刃" selected />
              <EnemyUnit icon="/mud/images/monsters/monster_astral_time_oathstone_sentinel.png" name="龍裔護衛" level={28} hp={2200} maxHp={3500} threat="騎士" effects={['灼燒']} />
              <EnemyUnit icon="/mud/images/monsters/monster_astral_time_glyphbound_skeleton.png" name="龍裔法師" level={27} hp={1800} maxHp={2000} cast="暗影 1t" threat="鑄師" />
            </div>

            {/* ── Approaching ── */}
            <div className="flex items-center gap-1 mb-1">
              <span className="text-[9px] font-bold text-[#ffb800]">接近中</span>
              <div className="flex-1 border-t border-[#ffb800]/20" />
            </div>
            <div className="flex gap-1.5">
              <ApproachUnit icon="/mud/images/monsters/monster_astral_time_bronze_trial_construct.png" name="龍裔斥候" dir="北" ticks={2} />
              <ApproachUnit icon="/mud/images/monsters/monster_astral_time_bronze_trial_construct.png" name="龍裔斥候" dir="東" ticks={4} />
            </div>
          </div>

          {/* ──── 技能列 ──── */}
          <div className="p-2 border-t border-[#1a3a5c]">
            {/* 資源 */}
            <div className="flex items-center gap-1.5 mb-1.5">
              <span className="text-[9px] text-[#5a6a8a]">怒氣</span>
              <div className="flex-1 h-2 rounded bg-[#1a3a5c]/60">
                <div className="h-full rounded bg-[#ffb800]/70" style={{ width: '65%' }} />
              </div>
              <span className="text-[9px] font-bold text-[#ffb800]">65/100</span>
            </div>

            {/* 技能 */}
            <div className="flex gap-1 flex-wrap mb-1.5">
              <Skill label="召喚馬" k="1" cost="0" ok />
              <Skill label="衝鋒" k="2" cost="12疲" ok mount />
              <Skill label="騎乘守護" k="3" cost="8疲" ok mount />
              <Skill label="嘶鳴" k="4" cost="15" ok />
              <Skill label="聖盾" k="5" cost="25" ok />
              <Skill label="踐踏" k="6" cost="18" cd={2} mount />
              <Skill label="制裁" k="7" cost="22" ok mount />
              <Skill label="堡壘" k="8" cost="30" ok mount ct={1} />
              <Skill label="聖裁" k="9" cost="35" ok mount ct={1} />
            </div>

            {/* 動作 */}
            <div className="flex gap-1">
              <Act label="近戰" icon="⚔" on />
              <Act label="遠程" icon="🏹" />
              <Act label="防禦" icon="🛡" />
              <Act label="逃跑" icon="🏃" />
              <Act label="排位" icon="↕" />
              <Act label="上馬" icon="🐴" on />
              <Act label="道具" icon="🧪" />
            </div>
          </div>
        </div>

        {/* 狀態列 */}
        <div className="shrink-0 border-t border-[#1a3a5c] bg-[#0a0f1a] px-2 py-1 flex items-center gap-2 text-[9px]">
          <span className="text-[#5a6a8a]">HP</span>
          <div className="w-20 h-1.5 rounded bg-[#1a3a5c]"><div className="h-full rounded bg-[#ff4444]" style={{ width: '77%' }} /></div>
          <span>1850/2400</span>
          <span className="text-[#5a6a8a]">MP</span>
          <div className="w-14 h-1.5 rounded bg-[#1a3a5c]"><div className="h-full rounded bg-[#4488ff]" style={{ width: '100%' }} /></div>
          <span>50/50</span>
          <span className="ml-1 rounded bg-[#88ccff]/10 border border-[#88ccff]/20 px-1 text-[8px] text-[#88ccff]">護盾</span>
          <span className="rounded bg-[#00ff88]/10 border border-[#00ff88]/20 px-1 text-[8px] text-[#00ff88]">騎乘</span>
          <span className="ml-auto text-[#5a6a8a]">Lv32 聖光騎士</span>
        </div>
      </div>

      {/* ═══ D: Combat Log ═══ */}
      <div className="w-[380px] shrink-0 flex flex-col bg-[#0a0f1a]">
        <div className="flex-1 overflow-y-auto p-2 space-y-0.5 text-[11px] leading-relaxed font-mono">
          <L t="═══ 第 5 回合 ═══" c="#00ff88" />
          <L t="聖光騎士 使用 戰馬嘶鳴，嘲諷所有敵人！" c="#ffb800" />
          <L t="  → 龍裔斥候 接近延遲 +1t" c="#5a6a8a" />
          <L t="血刃 使用 狂暴（消耗20%HP），連擊5次！" c="#ff6666" />
          <L t="  命中 342 / 命中 367 / 暴擊 589 / 命中 351 / 暴擊 612" />
          <L t="  → 進入「狂血」刻度，傷害+25%" c="#ff6666" />
          <L t="烈焰鑄師 鑄造 🔥+⚡ → 熔岩地帶！" c="#ffb800" />
          <L t="  全體敵人受到熔岩DoT 3t" />
          <L t="鷹眼蒼 瞄準中...（瞄準×2）" c="#88ccff" />
          <L t="靈行者 進入靈界" c="#88ccff" />
          <L t="" />
          <L t="⚠ 深淵巨龍 詠唱「龍息吐息」2t！" c="#ff4444" />
          <L t="龍裔護衛 攻擊 聖光騎士 285傷" />
          <L t="  聖盾吸收120，實際165" c="#88ccff" />
          <L t="龍裔法師 詠唱「暗影箭」1t" c="#ff4444" />
          <L t="" />
          <L t="北方：龍裔斥候 接近中（2t）" c="#ffb800" />
          <L t="東方：龍裔斥候 接近中（4t）" c="#ffb800" />
          <L t="═══ 等待指令 ═══" c="#00ff88" />
        </div>
        <div className="shrink-0 border-t border-[#1a3a5c] p-1.5">
          <div className="flex items-center rounded border border-[#1a3a5c] bg-[#0d1525] px-2 py-1">
            <span className="text-[#00ff88] text-xs mr-1.5">&gt;</span>
            <span className="text-[11px] text-[#5a6a8a]">輸入指令...</span>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ═══ 小元件 ═══ */

function SideBtn({ label, k, hl }: { label: string; k?: string; hl?: boolean }) {
  return (
    <div className={`rounded border px-1.5 py-1 cursor-pointer ${hl ? 'border-[#00ff88]/40 bg-[#00ff88]/10 text-[#00ff88] font-bold' : 'border-[#1a3a5c] text-[#5a6a8a] hover:text-[#e0e8ff]'}`}>
      <div className="flex justify-between"><span>{label}</span>{k && <span className="opacity-50">{k}</span>}</div>
    </div>
  );
}

function CrossLane({ dir, count, scouted, approaching }: { dir: string; count: number; scouted?: boolean; approaching?: number }) {
  const hasEnemy = count > 0;
  return (
    <div className={`rounded border p-1 text-center text-[9px] ${hasEnemy ? 'border-red-500/30 bg-red-500/5' : 'border-[#1a3a5c]/40 bg-[#0a0f1a]/40'}`}>
      <div className="font-bold text-[#5a6a8a]">{dir}</div>
      {hasEnemy ? (
        <>
          <div className="text-red-400">怪×{count}</div>
          {approaching && <div className="text-[#ffb800] text-[8px]">→{approaching}接近</div>}
          {scouted && <div className="text-[#00ff88] text-[8px]">已偵查</div>}
        </>
      ) : (
        <div className="text-[#5a6a8a]">—</div>
      )}
    </div>
  );
}

function UnitCard({ icon, name, sub, hp, maxHp, threat, effects, me, lowHp }: {
  icon: string; name: string; sub: string; hp: number; maxHp: number; threat: number;
  effects?: string[]; me?: boolean; lowHp?: boolean;
}) {
  const hpPct = (hp / maxHp) * 100;
  return (
    <div className={`flex items-center gap-1.5 rounded border p-1.5 min-w-0 flex-1 ${me ? 'border-[#00ff88]/30 bg-[#00ff88]/5' : lowHp ? 'border-red-500/30 bg-red-500/5' : 'border-[#1a3a5c] bg-[#0a0f1a]/50'}`}>
      <img src={icon} alt="" className="w-8 h-8 rounded border border-[#1a3a5c] object-cover shrink-0" />
      <div className="min-w-0 flex-1">
        <div className="flex items-center gap-1">
          <span className="text-[10px] font-bold text-[#e0e8ff] truncate">{name}</span>
          <span className="text-[8px] text-[#5a6a8a] shrink-0">{sub}</span>
        </div>
        {/* HP */}
        <div className="flex items-center gap-1 mt-0.5">
          <div className="flex-1 h-1.5 rounded bg-[#1a3a5c]/50">
            <div className={`h-full rounded ${hpPct < 30 ? 'bg-red-500' : hpPct < 60 ? 'bg-[#ffb800]' : 'bg-[#ff4444]'}`} style={{ width: `${hpPct}%` }} />
          </div>
          <span className="text-[8px] text-[#5a6a8a] shrink-0 w-8 text-right">{Math.round(hpPct)}%</span>
        </div>
        {/* Threat + Effects */}
        <div className="flex items-center gap-1 mt-0.5">
          <div className="flex-1 h-1 rounded bg-[#1a3a5c]/30">
            <div className={`h-full rounded ${threat >= 90 ? 'bg-red-400' : threat >= 50 ? 'bg-[#ffb800]/60' : 'bg-[#00ff88]/30'}`} style={{ width: `${threat}%` }} />
          </div>
          {effects?.map(e => <span key={e} className="text-[7px] rounded bg-[#88ccff]/10 px-0.5 text-[#88ccff]">{e}</span>)}
        </div>
      </div>
    </div>
  );
}

function EnemyUnit({ icon, name, level, hp, maxHp, boss, cast, threat, effects, selected }: {
  icon: string; name: string; level: number; hp: number; maxHp: number;
  boss?: boolean; cast?: string; threat?: string; effects?: string[]; selected?: boolean;
}) {
  const hpPct = (hp / maxHp) * 100;
  return (
    <div className={`rounded border p-1.5 cursor-pointer flex items-start gap-1.5 min-w-[140px] flex-1 ${selected ? 'border-[#00ff88] bg-[#00ff88]/5' : 'border-[#1a3a5c] bg-[#0a0f1a]/50 hover:border-[#00ff88]/40'}`}>
      <div className="relative shrink-0">
        <img src={icon} alt="" className="w-10 h-10 rounded border border-[#1a3a5c] object-cover" />
        {boss && <span className="absolute -top-1 -left-1 rounded bg-red-500/80 px-0.5 text-[7px] font-bold text-white">BOSS</span>}
      </div>
      <div className="min-w-0 flex-1">
        <div className="flex items-center gap-1">
          <span className={`text-[10px] font-bold truncate ${boss ? 'text-red-300' : 'text-[#e0e8ff]'}`}>{name}</span>
          <span className="text-[8px] text-[#5a6a8a]">L{level}</span>
        </div>
        <div className="flex items-center gap-1 mt-0.5">
          <div className="flex-1 h-1.5 rounded bg-[#1a3a5c]/50">
            <div className={`h-full rounded ${boss ? 'bg-gradient-to-r from-red-600 to-red-400' : 'bg-[#ff6666]'}`} style={{ width: `${hpPct}%` }} />
          </div>
          <span className="text-[8px] text-[#5a6a8a] shrink-0">{Math.round(hpPct)}%</span>
        </div>
        <div className="flex items-center gap-1 mt-0.5 text-[8px]">
          {cast && <span className="text-red-400 animate-pulse">⏳{cast}</span>}
          {threat && <span className="text-[#ffb800]">→{threat}</span>}
          {effects?.map(e => <span key={e} className="text-[#5a6a8a]">{e}</span>)}
        </div>
      </div>
    </div>
  );
}

function ApproachUnit({ icon, name, dir, ticks }: { icon: string; name: string; dir: string; ticks: number }) {
  return (
    <div className="flex items-center gap-1.5 rounded border border-[#ffb800]/20 bg-[#ffb800]/5 p-1.5 flex-1">
      <img src={icon} alt="" className="w-7 h-7 rounded border border-[#1a3a5c] object-cover shrink-0" />
      <div className="min-w-0 flex-1">
        <div className="flex items-center justify-between">
          <span className="text-[10px] font-bold text-[#e0e8ff] truncate">{name}</span>
          <span className="text-[9px] font-bold text-[#ffb800]">{ticks}t</span>
        </div>
        <div className="text-[8px] text-[#ffb800]">從{dir}方接近</div>
      </div>
    </div>
  );
}

function Skill({ label, k, cost, ok, cd, mount, ct }: {
  label: string; k: string; cost: string; ok?: boolean; cd?: number; mount?: boolean; ct?: number;
}) {
  const off = !ok || !!cd;
  return (
    <div className={`rounded border p-1 text-center cursor-pointer relative min-w-[52px] ${off ? 'border-[#1a3a5c]/40 opacity-35' : 'border-[#1a3a5c] hover:border-[#00ff88]/40'}`}>
      <div className="text-[9px] font-bold text-[#e0e8ff] truncate">{label}</div>
      <div className="text-[7px] text-[#5a6a8a]">{cost}</div>
      {cd && <div className="absolute inset-0 flex items-center justify-center bg-[#0a0f1a]/70 rounded text-[9px] font-bold text-red-400">CD{cd}</div>}
      {ct && <div className="text-[7px] text-red-400">施{ct}t</div>}
      {mount && <span className="absolute top-0 right-0.5 text-[7px]">🐴</span>}
      <span className="absolute bottom-0 left-0.5 text-[7px] text-[#5a6a8a] opacity-40">{k}</span>
    </div>
  );
}

function Act({ label, icon, on }: { label: string; icon: string; on?: boolean }) {
  return (
    <div className={`flex-1 rounded border p-1 text-center cursor-pointer ${on ? 'border-[#00ff88]/40 bg-[#00ff88]/10 text-[#00ff88]' : 'border-[#1a3a5c] text-[#5a6a8a] hover:text-[#e0e8ff]'}`}>
      <div className="text-xs">{icon}</div>
      <div className="text-[8px]">{label}</div>
    </div>
  );
}

function L({ t, c }: { t: string; c?: string }) {
  return <div style={{ color: c || '#e0e8ff' }}>{t || ' '}</div>;
}
