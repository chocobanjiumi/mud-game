export default function BattleMockup() {
  return (
    <div className="h-screen bg-[#0a0f1a] text-[#e0e8ff] flex">
      {/* Column A: Quick Actions */}
      <div className="w-[140px] shrink-0 border-r border-[#1a3a5c] bg-[#0d1525] p-2 flex flex-col gap-1.5 overflow-y-auto">
        {/* Mini Map placeholder */}
        <div className="aspect-square w-full rounded border border-[#1a3a5c] bg-[#0a0f1a] flex items-center justify-center text-[10px] text-[#5a6a8a]">
          小地圖
        </div>
        <div className="text-[10px] text-[#5a6a8a] uppercase tracking-wider px-1 mt-1">快捷操作</div>
        <MockBtn label="背包" shortcut="I" />
        <MockBtn label="隊伍" shortcut="P" />
        <MockBtn label="任務" shortcut="Q" />
        <MockBtn label="角色" shortcut="C" />
        <MockBtn label="技能" />
        <div className="border-t border-[#1a3a5c] my-1" />
        <div className="text-[10px] text-[#5a6a8a] uppercase tracking-wider px-1">戰鬥</div>
        <MockBtn label="攻擊" highlight />
        <MockBtn label="防禦" />
        <MockBtn label="逃跑" />
        <MockBtn label="切換排位" />
        <div className="mt-auto text-[10px] text-[#5a6a8a] flex items-center gap-1 px-1">
          <span className="w-1.5 h-1.5 rounded-full bg-[#00ff88]" />
          已連線
        </div>
      </div>

      {/* Column B+C: Merged Combat Area */}
      <div className="flex-1 min-w-0 border-r border-[#1a3a5c] bg-[#0d1525] flex flex-col overflow-hidden">
        <div className="flex-1 overflow-y-auto">

          {/* ═══ Battlefield View ═══ */}
          <div className="p-3 border-b border-[#1a3a5c]">
            {/* Round header */}
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-2">
                <span className="text-sm font-bold text-[#00ff88]">⚔ 戰場</span>
                <span className="rounded bg-[#00ff88]/10 border border-[#00ff88]/30 px-2 py-0.5 text-[10px] font-bold text-[#00ff88]">第 5 回合</span>
              </div>
              <span className="text-[10px] text-[#5a6a8a]">3 個敵人存活</span>
            </div>

            {/* ─── Allied Formation ─── */}
            <div className="space-y-2 mb-3">
              {/* Front Row */}
              <div>
                <div className="flex items-center gap-1.5 mb-1.5">
                  <span className="text-[10px] font-bold text-red-400 uppercase tracking-wider">前排</span>
                  <div className="flex-1 border-t border-[#1a3a5c]/50" />
                </div>
                <div className="grid grid-cols-2 gap-2">
                  <AllyCard name="聖光騎士" cls="騎士" level={32} hp={1850} maxHp={2400} resource={65} maxResource={100} resourceType="怒氣" threat={85} maxThreat={100} formation="front" mounted effects={['護盾', '嘲諷']} />
                  <AllyCard name="血刃戰士" cls="狂戰士" level={30} hp={680} maxHp={1800} resource={90} maxResource={100} resourceType="怒氣" threat={100} maxThreat={100} formation="front" effects={['狂血', '出血']} lowHp />
                </div>
              </div>

              {/* Back Row */}
              <div>
                <div className="flex items-center gap-1.5 mb-1.5">
                  <span className="text-[10px] font-bold text-[#00ff88] uppercase tracking-wider">後排</span>
                  <div className="flex-1 border-t border-[#1a3a5c]/50" />
                </div>
                <div className="grid grid-cols-3 gap-2">
                  <AllyCard name="烈焰鑄師" cls="元素鑄師" level={31} hp={1100} maxHp={1200} resource={45} maxResource={80} resourceType="魔力" threat={60} maxThreat={100} formation="back" />
                  <AllyCard name="靈行者" cls="冥行者" level={29} hp={1400} maxHp={1500} resource={72} maxResource={100} resourceType="信仰" threat={40} maxThreat={100} formation="back" effects={['靈界中']} />
                  <AllyCard name="鷹眼·蒼" cls="鷹眼獵手" level={31} hp={900} maxHp={1300} resource={55} maxResource={100} resourceType="專注" threat={70} maxThreat={100} formation="back" effects={['瞄準×2']} />
                </div>
              </div>
            </div>

            {/* ─── VS Separator ─── */}
            <div className="flex items-center gap-3 my-3">
              <div className="flex-1 border-t border-[#1a3a5c]" />
              <span className="text-xs font-bold text-[#5a6a8a] tracking-widest">V S</span>
              <div className="flex-1 border-t border-[#1a3a5c]" />
            </div>

            {/* ─── Enemies ─── */}
            <div className="space-y-2">
              <EnemyCard name="深淵巨龍·卡爾札斯" level={35} hp={18500} maxHp={32000} isBoss phase={2} castTime={2} castSkill="龍息吐息" threatTarget="血刃戰士" effects={['防禦強化', '龍鱗']} selected />
              <EnemyCard name="龍裔護衛" level={28} hp={2200} maxHp={3500} effects={['灼燒']} threatTarget="聖光騎士" />
              <EnemyCard name="龍裔法師" level={27} hp={1800} maxHp={2000} castTime={1} castSkill="暗影箭" threatTarget="烈焰鑄師" effects={['魔力護盾']} />
            </div>

            {/* ─── Approaching ─── */}
            <div className="mt-3">
              <div className="flex items-center gap-1.5 mb-1.5">
                <span className="text-[10px] font-bold text-[#ffb800] uppercase tracking-wider">接近中</span>
                <div className="flex-1 border-t border-[#ffb800]/20" />
              </div>
              <div className="space-y-1.5">
                <ApproachingCard name="龍裔斥候" level={26} direction="北方" arrivalTicks={2} hp={1500} maxHp={1500} />
                <ApproachingCard name="龍裔斥候" level={26} direction="東方" arrivalTicks={4} hp={1500} maxHp={1500} />
              </div>
            </div>
          </div>

          {/* ═══ Skill Bar ═══ */}
          <div className="p-3 border-b border-[#1a3a5c]">
            {/* Resource bar */}
            <div className="flex items-center gap-2 mb-2">
              <span className="text-[10px] text-[#5a6a8a]">怒氣</span>
              <div className="flex-1 h-2.5 rounded bg-[#0a0f1a] border border-[#1a3a5c]">
                <div className="h-full rounded bg-[#ffb800]/80" style={{ width: '65%' }} />
              </div>
              <span className="text-[10px] font-bold text-[#ffb800]">65/100</span>
            </div>

            {/* Skills grid */}
            <div className="grid grid-cols-6 gap-1.5 mb-2">
              <SkillBtn label="召喚戰馬" hotkey="1" cost="0" available />
              <SkillBtn label="衝鋒" hotkey="2" cost="12疲" available mounted />
              <SkillBtn label="騎乘守護" hotkey="3" cost="8疲" available mounted />
              <SkillBtn label="戰馬嘶鳴" hotkey="4" cost="15+5疲" available />
              <SkillBtn label="聖盾術" hotkey="5" cost="25" available />
              <SkillBtn label="鐵蹄踐踏" hotkey="6" cost="18+10疲" cooldown={2} mounted />
              <SkillBtn label="制裁之錘" hotkey="7" cost="22+6疲" available mounted />
              <SkillBtn label="最後堡壘" hotkey="8" cost="30+15疲" available mounted castTime={1} />
              <SkillBtn label="聖裁天降" hotkey="9" cost="35" available mounted castTime={1} />
            </div>

            {/* Action buttons */}
            <div className="flex gap-1.5">
              <ActionBtn label="近戰攻擊" icon="⚔" active />
              <ActionBtn label="遠程攻擊" icon="🏹" />
              <ActionBtn label="防禦" icon="🛡" />
              <ActionBtn label="逃跑" icon="🏃" />
              <ActionBtn label="切換排位" icon="↕" />
              <ActionBtn label="上馬" icon="🐴" active />
              <ActionBtn label="道具" icon="🧪" />
            </div>
          </div>

          {/* ═══ Consumables ═══ */}
          <div className="p-3">
            <div className="text-[10px] text-[#5a6a8a] mb-1.5">快捷道具</div>
            <div className="flex gap-1.5">
              <ItemBtn label="HP 藥水" count={5} />
              <ItemBtn label="MP 藥水" count={3} />
              <ItemBtn label="解毒劑" count={2} />
            </div>
          </div>
        </div>

        {/* Status Bar (fixed bottom) */}
        <div className="shrink-0 border-t border-[#1a3a5c] bg-[#0a0f1a] px-3 py-1.5">
          <div className="flex items-center gap-3 text-[10px]">
            <div className="flex items-center gap-1.5">
              <span className="text-[#5a6a8a]">HP</span>
              <div className="w-24 h-2 rounded bg-[#1a3a5c]">
                <div className="h-full rounded bg-[#ff4444]" style={{ width: '77%' }} />
              </div>
              <span className="text-[#e0e8ff]">1850/2400</span>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="text-[#5a6a8a]">MP</span>
              <div className="w-20 h-2 rounded bg-[#1a3a5c]">
                <div className="h-full rounded bg-[#4488ff]" style={{ width: '100%' }} />
              </div>
              <span className="text-[#e0e8ff]">50/50</span>
            </div>
            <div className="flex items-center gap-1 ml-1">
              <StatusIcon label="護盾" color="#88ccff" />
              <StatusIcon label="嘲諷" color="#ffb800" />
              <StatusIcon label="騎乘中" color="#00ff88" />
            </div>
            <span className="ml-auto text-[#5a6a8a]">Lv.32 聖光騎士 · 騎士</span>
          </div>
        </div>
      </div>

      {/* Column D: Combat Log */}
      <div className="w-[420px] shrink-0 flex flex-col bg-[#0a0f1a]">
        <div className="flex-1 overflow-y-auto p-3 space-y-1 text-xs leading-relaxed font-mono">
          <LogLine text="══════ 第 5 回合開始 ══════" color="#00ff88" />
          <LogLine text="聖光騎士 使用 戰馬嘶鳴，嘲諷所有敵人 2 tick！" color="#ffb800" />
          <LogLine text="  → 深淵巨龍 仇恨鎖定 聖光騎士" color="#5a6a8a" />
          <LogLine text="  → 龍裔斥候 接近延遲 +1 tick" color="#5a6a8a" />
          <LogLine text="血刃戰士 使用 狂暴（消耗 20% HP），連擊 5 次！" color="#ff6666" />
          <LogLine text="  → 命中 深淵巨龍 造成 342 點傷害" />
          <LogLine text="  → 命中 深淵巨龍 造成 367 點傷害" />
          <LogLine text="  → 暴擊！ 深淵巨龍 造成 589 點傷害" color="#ffaa00" />
          <LogLine text="  → 命中 深淵巨龍 造成 351 點傷害" />
          <LogLine text="  → 暴擊！ 深淵巨龍 造成 612 點傷害" color="#ffaa00" />
          <LogLine text="  → 血刃戰士 進入「狂血」刻度（HP≤60%），傷害 +25%" color="#ff6666" />
          <LogLine text="烈焰鑄師 鑄造 🔥火+⚡雷 → 熔岩地帶！" color="#ffb800" />
          <LogLine text="  → 全體敵人受到熔岩 DoT，持續 3 tick" />
          <LogLine text="鷹眼·蒼 瞄準中...（瞄準層×2，下次遠射射程 3 房）" color="#88ccff" />
          <LogLine text="靈行者 進入靈界，免疫物理攻擊！" color="#88ccff" />
          <LogLine text="" />
          <LogLine text="深淵巨龍 開始詠唱「龍息吐息」！（2 tick 後發動）" color="#ff4444" />
          <LogLine text="  ⚠ 可使用打斷技能阻止！" color="#ff4444" />
          <LogLine text="龍裔護衛 攻擊 聖光騎士（前排），造成 285 點傷害。" />
          <LogLine text="  → 聖盾吸收 120 點傷害，實際受傷 165" color="#88ccff" />
          <LogLine text="  → 聖光騎士 仇恨 +165" color="#5a6a8a" />
          <LogLine text="龍裔法師 開始詠唱「暗影箭」！（1 tick 後發動）" color="#ff4444" />
          <LogLine text="" />
          <LogLine text="龍裔斥候 從北方接近中（剩餘 2 tick）" color="#ffb800" />
          <LogLine text="龍裔斥候 從東方接近中（剩餘 4 tick）" color="#ffb800" />
          <LogLine text="══════ 等待行動指令 ══════" color="#00ff88" />
        </div>
        <div className="shrink-0 border-t border-[#1a3a5c] p-2">
          <div className="flex items-center rounded border border-[#1a3a5c] bg-[#0d1525] px-3 py-1.5">
            <span className="text-[#00ff88] text-xs mr-2">&gt;</span>
            <span className="text-xs text-[#5a6a8a]">輸入指令...</span>
          </div>
        </div>
      </div>
    </div>
  );
}

function MockBtn({ label, shortcut, highlight }: { label: string; shortcut?: string; highlight?: boolean }) {
  return (
    <div className={`rounded border px-2 py-1.5 text-[11px] cursor-pointer transition ${highlight ? 'border-[#00ff88]/40 bg-[#00ff88]/10 text-[#00ff88] font-bold' : 'border-[#1a3a5c] text-[#5a6a8a] hover:border-[#00ff88]/30 hover:text-[#e0e8ff]'}`}>
      <div className="flex items-center justify-between">
        <span>{label}</span>
        {shortcut && <span className="text-[9px] text-[#5a6a8a] opacity-60">{shortcut}</span>}
      </div>
    </div>
  );
}

function AllyCard({ name, cls, level, hp, maxHp, resource, maxResource, resourceType, threat, maxThreat, formation: _formation, mounted, effects, lowHp }: {
  name: string; cls: string; level: number; hp: number; maxHp: number; resource: number; maxResource: number;
  resourceType: string; threat: number; maxThreat: number; formation: string; mounted?: boolean; effects?: string[]; lowHp?: boolean;
}) {
  const hpPct = (hp / maxHp) * 100;
  const resPct = (resource / maxResource) * 100;
  const threatPct = (threat / maxThreat) * 100;
  return (
    <div className={`rounded border p-2 ${lowHp ? 'border-red-500/40 bg-red-500/5' : 'border-[#1a3a5c] bg-[#0a0f1a]/60'}`}>
      <div className="flex items-center justify-between mb-1">
        <div className="flex items-center gap-1 min-w-0">
          {mounted && <span className="text-[10px]">🐴</span>}
          <span className="text-xs font-bold text-[#e0e8ff] truncate">{name}</span>
        </div>
        <span className="text-[9px] text-[#5a6a8a] shrink-0">{cls} Lv{level}</span>
      </div>
      {/* HP */}
      <div className="flex items-center gap-1.5 mb-0.5">
        <span className="text-[9px] text-[#5a6a8a] w-3">HP</span>
        <div className="flex-1 h-2 rounded-sm bg-[#1a3a5c]/60">
          <div className={`h-full rounded-sm transition-all ${hpPct < 30 ? 'bg-red-500' : hpPct < 60 ? 'bg-[#ffb800]' : 'bg-[#ff4444]'}`} style={{ width: `${hpPct}%` }} />
        </div>
        <span className="text-[9px] text-[#e0e8ff] w-16 text-right">{hp}/{maxHp}</span>
      </div>
      {/* Resource */}
      <div className="flex items-center gap-1.5 mb-0.5">
        <span className="text-[9px] text-[#5a6a8a] w-3">{resourceType[0]}</span>
        <div className="flex-1 h-1.5 rounded-sm bg-[#1a3a5c]/60">
          <div className="h-full rounded-sm bg-[#ffb800]/70" style={{ width: `${resPct}%` }} />
        </div>
        <span className="text-[9px] text-[#5a6a8a] w-16 text-right">{resource}/{maxResource}</span>
      </div>
      {/* Threat */}
      <div className="flex items-center gap-1.5 mb-1">
        <span className="text-[9px] text-[#5a6a8a] w-3">仇</span>
        <div className="flex-1 h-1 rounded-sm bg-[#1a3a5c]/40">
          <div className={`h-full rounded-sm ${threatPct >= 90 ? 'bg-red-400' : threatPct >= 50 ? 'bg-[#ffb800]' : 'bg-[#00ff88]/50'}`} style={{ width: `${threatPct}%` }} />
        </div>
      </div>
      {/* Effects */}
      {effects && effects.length > 0 && (
        <div className="flex flex-wrap gap-1">
          {effects.map(e => (
            <span key={e} className="rounded bg-[#88ccff]/10 border border-[#88ccff]/20 px-1 py-0 text-[8px] text-[#88ccff]">{e}</span>
          ))}
        </div>
      )}
    </div>
  );
}

function EnemyCard({ name, level, hp, maxHp, isBoss, phase, castTime, castSkill, threatTarget, effects, selected }: {
  name: string; level: number; hp: number; maxHp: number; isBoss?: boolean; phase?: number;
  castTime?: number; castSkill?: string; threatTarget?: string; effects?: string[]; selected?: boolean;
}) {
  const hpPct = (hp / maxHp) * 100;
  return (
    <div className={`rounded border p-2.5 cursor-pointer transition ${selected ? 'border-[#00ff88] bg-[#00ff88]/5 shadow-[0_0_8px_rgba(0,255,136,0.15)]' : 'border-[#1a3a5c] bg-[#0a0f1a]/60 hover:border-[#00ff88]/40'}`}>
      <div className="flex items-center justify-between mb-1.5">
        <div className="flex items-center gap-2 min-w-0">
          {isBoss && <span className="rounded bg-red-500/20 border border-red-500/30 px-1.5 py-0 text-[9px] font-bold text-red-400">BOSS</span>}
          <span className={`text-xs font-bold truncate ${isBoss ? 'text-red-300' : 'text-[#e0e8ff]'}`}>{name}</span>
          <span className="text-[9px] text-[#5a6a8a]">Lv{level}</span>
          {phase && <span className="text-[9px] text-[#ffb800]">階段 {phase}</span>}
        </div>
        <div className="flex items-center gap-1.5 shrink-0">
          {castTime && castSkill && (
            <span className="rounded bg-red-500/20 border border-red-500/40 px-1.5 py-0.5 text-[9px] font-bold text-red-400 animate-pulse">
              ⏳ 施法中 {castTime}t「{castSkill}」
            </span>
          )}
        </div>
      </div>
      {/* HP bar */}
      <div className="flex items-center gap-2 mb-1">
        <div className="flex-1 h-2.5 rounded-sm bg-[#1a3a5c]/60">
          <div className={`h-full rounded-sm ${isBoss ? 'bg-gradient-to-r from-red-600 to-red-400' : 'bg-[#ff6666]'}`} style={{ width: `${hpPct}%` }} />
        </div>
        <span className="text-[10px] text-[#e0e8ff] shrink-0 w-28 text-right">{hp.toLocaleString()}/{maxHp.toLocaleString()}</span>
      </div>
      {/* Info row */}
      <div className="flex items-center justify-between text-[9px]">
        <div className="flex items-center gap-1.5">
          {threatTarget && (
            <span className="text-[#ffb800]">仇恨 → {threatTarget}</span>
          )}
        </div>
        <div className="flex flex-wrap gap-1">
          {effects?.map(e => (
            <span key={e} className="rounded bg-[#5a6a8a]/20 border border-[#5a6a8a]/30 px-1 text-[8px] text-[#5a6a8a]">{e}</span>
          ))}
        </div>
      </div>
    </div>
  );
}

function ApproachingCard({ name, level, direction, arrivalTicks, hp, maxHp }: {
  name: string; level: number; direction: string; arrivalTicks: number; hp: number; maxHp: number;
}) {
  const pct = Math.max(5, 100 - (arrivalTicks / 5) * 100);
  return (
    <div className="rounded border border-[#ffb800]/20 bg-[#ffb800]/5 px-2.5 py-1.5">
      <div className="flex items-center justify-between mb-1">
        <div className="flex items-center gap-2">
          <span className="text-xs font-bold text-[#e0e8ff]">{name}</span>
          <span className="text-[9px] text-[#5a6a8a]">Lv{level}</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-[10px] text-[#ffb800]">從{direction}接近</span>
          <span className="rounded bg-[#ffb800]/20 px-1.5 py-0.5 text-[10px] font-bold text-[#ffb800]">{arrivalTicks} tick</span>
        </div>
      </div>
      {/* Approach progress */}
      <div className="flex items-center gap-2">
        <span className="text-[9px] text-[#5a6a8a]">HP {hp}/{maxHp}</span>
        <div className="flex-1 h-1.5 rounded-sm bg-[#1a3a5c]/40">
          <div className="h-full rounded-sm bg-[#ffb800]/40 transition-all" style={{ width: `${pct}%` }} />
        </div>
        <span className="text-[9px] text-[#5a6a8a]">接近中</span>
      </div>
    </div>
  );
}

function SkillBtn({ label, hotkey, cost, available, cooldown, mounted, castTime }: {
  label: string; hotkey: string; cost: string; available?: boolean; cooldown?: number; mounted?: boolean; castTime?: number;
}) {
  const disabled = !available || !!cooldown;
  return (
    <div className={`rounded border p-1.5 text-center cursor-pointer transition relative ${disabled ? 'border-[#1a3a5c]/50 bg-[#0a0f1a]/40 opacity-40' : 'border-[#1a3a5c] bg-[#0a0f1a] hover:border-[#00ff88]/40 hover:bg-[#00ff88]/5'}`}>
      <div className="text-[10px] font-bold text-[#e0e8ff] truncate">{label}</div>
      <div className="text-[8px] text-[#5a6a8a] mt-0.5">{cost}</div>
      {cooldown && <div className="absolute inset-0 flex items-center justify-center bg-[#0a0f1a]/70 rounded text-[10px] font-bold text-red-400">CD {cooldown}t</div>}
      {castTime && <div className="text-[8px] text-red-400 mt-0.5">施法{castTime}t</div>}
      {mounted && <div className="absolute top-0.5 right-0.5 text-[8px]">🐴</div>}
      <div className="absolute bottom-0.5 left-0.5 text-[8px] text-[#5a6a8a] opacity-50">{hotkey}</div>
    </div>
  );
}

function ActionBtn({ label, icon, active }: { label: string; icon: string; active?: boolean }) {
  return (
    <div className={`flex-1 rounded border p-1.5 text-center cursor-pointer transition ${active ? 'border-[#00ff88]/40 bg-[#00ff88]/10 text-[#00ff88]' : 'border-[#1a3a5c] text-[#5a6a8a] hover:border-[#00ff88]/30 hover:text-[#e0e8ff]'}`}>
      <div className="text-sm">{icon}</div>
      <div className="text-[9px] mt-0.5">{label}</div>
    </div>
  );
}

function ItemBtn({ label, count }: { label: string; count: number }) {
  return (
    <div className="rounded border border-[#1a3a5c] bg-[#0a0f1a] px-2.5 py-1.5 cursor-pointer hover:border-[#00ff88]/30 transition">
      <div className="text-[10px] text-[#e0e8ff]">{label}</div>
      <div className="text-[9px] text-[#5a6a8a]">×{count}</div>
    </div>
  );
}

function StatusIcon({ label, color }: { label: string; color: string }) {
  return (
    <span className="rounded px-1 py-0 text-[8px] font-bold" style={{ backgroundColor: `${color}15`, border: `1px solid ${color}30`, color }}>{label}</span>
  );
}

function LogLine({ text, color }: { text: string; color?: string }) {
  return <div style={{ color: color || '#e0e8ff' }}>{text || ' '}</div>;
}
