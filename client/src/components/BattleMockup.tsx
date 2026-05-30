export default function BattleMockup() {
  return (
    <div className="h-screen bg-[#0a0f1a] text-[#e0e8ff] flex">
      {/* ═══ A: Side ═══ */}
      <div className="w-[130px] shrink-0 border-r border-[#1a3a5c] bg-[#0d1525] p-2 flex flex-col gap-1 overflow-y-auto text-[10px]">
        <div className="aspect-square w-full rounded border border-[#1a3a5c] bg-[#0a0f1a] flex items-center justify-center text-[#5a6a8a]">小地圖</div>
        <SideBtn label="背包" k="I" /><SideBtn label="隊伍" k="P" /><SideBtn label="角色" k="C" /><SideBtn label="技能" />
        <div className="border-t border-[#1a3a5c] my-0.5" />
        <SideBtn label="攻擊" hl /><SideBtn label="防禦" /><SideBtn label="逃跑" /><SideBtn label="換排位" />
        <div className="mt-auto text-[#5a6a8a] flex items-center gap-1"><span className="w-1.5 h-1.5 rounded-full bg-[#00ff88]" />連線</div>
      </div>

      {/* ═══ B+C: Combat Area ═══ */}
      <div className="flex-1 min-w-0 border-r border-[#1a3a5c] bg-[#0d1525] flex flex-col overflow-hidden">
        <div className="flex-1 overflow-y-auto flex flex-col">

          {/* ────── 戰場地圖（佔約半屏） ────── */}
          <div className="flex-1 min-h-[50vh] p-2 relative">
            <div className="h-full grid grid-cols-3 grid-rows-3 gap-0">

              {/* ── Row 1: 左上(隊伍) | 北房 | 右上(目標) ── */}

              {/* 左上：隊伍狀態 */}
              <div className="rounded border border-[#1a3a5c]/30 bg-[#0a0f1a]/60 p-1.5 flex flex-col">
                <div className="text-[8px] font-bold text-[#88ccff] mb-1">隊伍狀態</div>
                <div className="flex-1 flex flex-col gap-1 justify-center">
                  <PartyRow icon="class_swordsman_icon.png" name="聖光騎士" cls="騎士" hp={77} res={65} resType="怒" effects={['🐴', '盾']} me />
                  <PartyRow icon="class_swordsman_icon.png" name="血刃" cls="狂戰" hp={38} res={90} resType="怒" effects={['狂血']} lowHp />
                  <PartyRow icon="class_mage_icon.png" name="烈焰鑄師" cls="鑄師" hp={92} res={56} resType="魔" />
                  <PartyRow icon="class_priest_icon.png" name="靈行者" cls="冥行" hp={93} res={72} resType="信" effects={['靈界']} />
                  <PartyRow icon="class_ranger_icon.png" name="鷹眼蒼" cls="鷹眼" hp={69} res={55} resType="專" effects={['瞄×2']} />
                </div>
              </div>

              {/* 北房 */}
              <RoomCell dir="北">
                <Mon img="monster_astral_time_magnetized_thunderhawk.png" name="雷鷹" hp={80} />
                <Mon img="monster_astral_time_cometbone_scavenger.png" name="骨蟲" hp={45} />
              </RoomCell>

              {/* 右上：目標詳情 */}
              <div className="rounded border border-red-500/30 bg-red-500/5 p-1.5 flex flex-col">
                <div className="text-[8px] font-bold text-red-400 mb-1">選取目標</div>
                <div className="flex-1 flex flex-col justify-center">
                  <div className="flex items-center gap-1.5 mb-1">
                    <div className="w-10 h-10 rounded-lg border-2 border-red-500/60 overflow-hidden shrink-0">
                      <img src="/mud/images/monsters/monster_astral_time_minute_zero_dragon.png" alt="" className="w-full h-full object-cover" />
                    </div>
                    <div className="min-w-0">
                      <div className="flex items-center gap-1">
                        <span className="text-[7px] rounded bg-red-500/20 border border-red-500/30 px-1 text-red-400 font-bold">BOSS</span>
                        <span className="text-[10px] font-bold text-red-300">深淵巨龍</span>
                      </div>
                      <span className="text-[8px] text-[#5a6a8a]">Lv35 · 階段 2/3</span>
                    </div>
                  </div>
                  {/* HP */}
                  <div className="flex items-center gap-1 mb-0.5">
                    <span className="text-[8px] text-[#5a6a8a] w-3">HP</span>
                    <div className="flex-1 h-2 rounded bg-[#1a3a5c]/60">
                      <div className="h-full rounded bg-gradient-to-r from-red-600 to-red-400" style={{ width: '58%' }} />
                    </div>
                    <span className="text-[8px] text-[#e0e8ff] shrink-0">18,500/32,000</span>
                  </div>
                  {/* 施法 */}
                  <div className="flex items-center gap-1 mb-1">
                    <span className="text-[8px] text-red-400 animate-pulse">⏳ 龍息吐息</span>
                    <div className="flex-1 h-1.5 rounded bg-[#1a3a5c]/60">
                      <div className="h-full rounded bg-red-500/80 animate-pulse" style={{ width: '50%' }} />
                    </div>
                    <span className="text-[8px] text-red-400">2t</span>
                  </div>
                  {/* 狀態 */}
                  <div className="flex flex-wrap gap-0.5">
                    <Tag c="#ff6666">灼燒 3t</Tag>
                    <Tag c="#88ccff">龍鱗</Tag>
                    <Tag c="#ffb800">防強化</Tag>
                    <Tag c="#ff6666">熔岩DoT 2t</Tag>
                  </div>
                </div>
              </div>

              {/* ── Row 2: 西房 | 本房 | 東房 ── */}
              <RoomCell dir="西" />

              {/* 本房 */}
              <div className="relative border border-[#00ff88]/40 bg-[#00ff88]/5 rounded flex flex-col">
                <div className="text-center py-0.5">
                  <span className="text-[9px] font-bold text-[#00ff88]">深淵龍穴</span>
                </div>
                {/* 敵方 */}
                <div className="flex-1 flex items-center justify-center gap-2 px-1">
                  <Mon img="monster_astral_time_minute_zero_dragon.png" name="巨龍" hp={58} boss selected cast="龍息2t" size={44} />
                  <Mon img="monster_astral_time_oathstone_sentinel.png" name="護衛" hp={63} size={36} />
                  <Mon img="monster_astral_time_glyphbound_skeleton.png" name="法師" hp={90} cast="暗影1t" size={36} />
                </div>
                <div className="border-t border-[#1a3a5c]/50 mx-2" />
                {/* 我方 */}
                <div className="flex-1 flex flex-col justify-center px-1 gap-0.5">
                  <div className="flex items-center gap-1">
                    <span className="text-[7px] text-red-400 w-3 shrink-0">前</span>
                    <div className="flex gap-2">
                      <Ally img="class_swordsman_icon.png" name="騎士" hp={77} me mount />
                      <Ally img="class_swordsman_icon.png" name="狂戰" hp={38} lowHp />
                    </div>
                  </div>
                  <div className="flex items-center gap-1">
                    <span className="text-[7px] text-[#00ff88] w-3 shrink-0">後</span>
                    <div className="flex gap-2">
                      <Ally img="class_mage_icon.png" name="鑄師" hp={92} />
                      <Ally img="class_priest_icon.png" name="冥行" hp={93} />
                      <Ally img="class_ranger_icon.png" name="鷹眼" hp={69} />
                    </div>
                  </div>
                </div>
              </div>

              <RoomCell dir="東">
                <Mon img="monster_astral_time_bronze_trial_construct.png" name="守衛" hp={100} />
                <Mon img="monster_astral_time_hourglass_automaton.png" name="巡邏" hp={100} />
                <Mon img="monster_astral_time_gravity_silt_horror.png" name="恐懼" hp={100} />
              </RoomCell>

              {/* ── Row 3: 左下(回合) | 南房 | 右下(仇恨) ── */}

              {/* 左下：回合資訊 */}
              <div className="rounded border border-[#1a3a5c]/30 bg-[#0a0f1a]/60 p-1.5 flex flex-col">
                <div className="text-[8px] font-bold text-[#00ff88] mb-1">回合資訊</div>
                <div className="flex-1 flex flex-col justify-center gap-1.5">
                  <div className="text-center">
                    <div className="text-xl font-bold text-[#00ff88]">5</div>
                    <div className="text-[8px] text-[#5a6a8a]">第 5 回合</div>
                  </div>
                  {/* 倒數 */}
                  <div>
                    <div className="flex items-center justify-between text-[8px] mb-0.5">
                      <span className="text-[#5a6a8a]">行動倒數</span>
                      <span className="text-[#ffb800] font-bold">3.2s</span>
                    </div>
                    <div className="h-2 rounded bg-[#1a3a5c]/60">
                      <div className="h-full rounded bg-[#ffb800]/70 transition-all" style={{ width: '64%' }} />
                    </div>
                  </div>
                  {/* 已選行動 */}
                  <div>
                    <div className="text-[8px] text-[#5a6a8a] mb-0.5">已選行動</div>
                    <div className="rounded border border-[#00ff88]/30 bg-[#00ff88]/10 px-1.5 py-1 text-center">
                      <div className="text-[9px] font-bold text-[#00ff88]">⚔ 制裁之錘</div>
                      <div className="text-[7px] text-[#5a6a8a]">→ 深淵巨龍</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* 南房 */}
              <RoomCell dir="南">
                <Mon img="monster_astral_time_epoch_gate_warden.png" name="守門" hp={100} />
              </RoomCell>

              {/* 右下：仇恨排行 */}
              <div className="rounded border border-[#1a3a5c]/30 bg-[#0a0f1a]/60 p-1.5 flex flex-col">
                <div className="text-[8px] font-bold text-[#ffb800] mb-1">仇恨排行</div>
                <div className="text-[7px] text-[#5a6a8a] mb-1">目標：深淵巨龍</div>
                <div className="flex-1 flex flex-col justify-center gap-1">
                  <ThreatRow name="血刃" pct={100} color="#ff4444" />
                  <ThreatRow name="聖光騎士" pct={85} color="#ffb800" />
                  <ThreatRow name="鷹眼蒼" pct={70} color="#ffb800" />
                  <ThreatRow name="烈焰鑄師" pct={60} color="#5a6a8a" />
                  <ThreatRow name="靈行者" pct={40} color="#5a6a8a" />
                </div>
              </div>
            </div>

            {/* ── Approaching（房間之間）── */}
            <div className="absolute left-1/2 -translate-x-1/2" style={{ top: 'calc(33.33% - 14px)' }}>
              <ApproachDot img="monster_astral_time_bronze_trial_construct.png" name="斥候" ticks={2} dir="↓" />
            </div>
            <div className="absolute top-1/2 -translate-y-1/2" style={{ right: 'calc(33.33% - 14px)' }}>
              <ApproachDot img="monster_astral_time_bronze_trial_construct.png" name="斥候" ticks={4} dir="←" />
            </div>
          </div>

          {/* ────── 技能 + 動作 ────── */}
          <div className="shrink-0 p-2 border-t border-[#1a3a5c]">
            <div className="flex items-center gap-1.5 mb-1.5">
              <span className="text-[9px] text-[#5a6a8a]">怒氣</span>
              <div className="flex-1 h-2 rounded bg-[#1a3a5c]/60"><div className="h-full rounded bg-[#ffb800]/70" style={{ width: '65%' }} /></div>
              <span className="text-[9px] font-bold text-[#ffb800]">65/100</span>
            </div>
            <div className="flex gap-1 flex-wrap mb-1.5">
              <Sk label="召喚馬" k="1" cost="0" ok />
              <Sk label="衝鋒" k="2" cost="12疲" ok mt />
              <Sk label="守護" k="3" cost="8疲" ok mt />
              <Sk label="嘶鳴" k="4" cost="15" ok />
              <Sk label="聖盾" k="5" cost="25" ok />
              <Sk label="踐踏" k="6" cost="18" cd={2} mt />
              <Sk label="制裁" k="7" cost="22" ok mt />
              <Sk label="堡壘" k="8" cost="30" ok mt ct={1} />
              <Sk label="聖裁" k="9" cost="35" ok mt ct={1} />
            </div>
            <div className="flex gap-1">
              <ActBtn label="近戰" icon="⚔" on /><ActBtn label="遠程" icon="🏹" /><ActBtn label="防禦" icon="🛡" />
              <ActBtn label="逃跑" icon="🏃" /><ActBtn label="排位" icon="↕" /><ActBtn label="上馬" icon="🐴" on /><ActBtn label="道具" icon="🧪" />
            </div>
          </div>
        </div>

        {/* 狀態列 */}
        <div className="shrink-0 border-t border-[#1a3a5c] bg-[#0a0f1a] px-2 py-1 flex items-center gap-2 text-[9px]">
          <span className="text-[#5a6a8a]">HP</span>
          <div className="w-20 h-1.5 rounded bg-[#1a3a5c]"><div className="h-full rounded bg-[#ff4444]" style={{ width: '77%' }} /></div>
          <span>1850/2400</span>
          <Tag c="#88ccff">護盾</Tag><Tag c="#00ff88">騎乘</Tag><Tag c="#ffb800">嘲諷</Tag>
          <span className="ml-auto text-[#5a6a8a]">Lv32 聖光騎士</span>
        </div>
      </div>

      {/* ═══ D: Log ═══ */}
      <div className="w-[380px] shrink-0 flex flex-col bg-[#0a0f1a]">
        <div className="flex-1 overflow-y-auto p-2 space-y-0.5 text-[11px] leading-relaxed font-mono">
          <L t="═══ 第 5 回合 ═══" c="#00ff88" />
          <L t="聖光騎士 使用 戰馬嘶鳴，嘲諷所有敵人！" c="#ffb800" />
          <L t="  → 北方斥候 接近延遲 +1t" c="#5a6a8a" />
          <L t="血刃 使用 狂暴（消耗20%HP），連擊5次！" c="#ff6666" />
          <L t="  342 / 367 / 暴擊589 / 351 / 暴擊612" />
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
          <L t="北：斥候接近中（2t）" c="#ffb800" />
          <L t="東：斥候接近中（4t）" c="#ffb800" />
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

/* ═══ 隊伍狀態行 ═══ */
function PartyRow({ icon, name, cls, hp, res, resType, effects, me, lowHp }: {
  icon: string; name: string; cls: string; hp: number; res: number; resType: string;
  effects?: string[]; me?: boolean; lowHp?: boolean;
}) {
  const hpColor = hp < 30 ? '#ff4444' : hp < 60 ? '#ffb800' : '#00ff88';
  return (
    <div className={`flex items-center gap-1 rounded px-1 py-0.5 ${me ? 'bg-[#00ff88]/5' : lowHp ? 'bg-red-500/5' : ''}`}>
      <img src={`/mud/images/wiki/origins/${icon}`} alt="" className="w-5 h-5 rounded border border-[#1a3a5c] object-cover shrink-0" />
      <div className="min-w-0 flex-1">
        <div className="flex items-center gap-0.5">
          <span className={`text-[8px] font-bold truncate ${me ? 'text-[#00ff88]' : 'text-[#e0e8ff]'}`}>{name}</span>
          <span className="text-[7px] text-[#5a6a8a]">{cls}</span>
          {effects?.map(e => <span key={e} className="text-[6px] rounded bg-[#88ccff]/10 px-0.5 text-[#88ccff]">{e}</span>)}
        </div>
        <div className="flex items-center gap-0.5">
          <div className="flex-1 h-1 rounded bg-[#1a3a5c]/50">
            <div className="h-full rounded" style={{ width: `${hp}%`, backgroundColor: hpColor }} />
          </div>
          <div className="w-6 h-1 rounded bg-[#1a3a5c]/50">
            <div className="h-full rounded bg-[#ffb800]/50" style={{ width: `${res}%` }} />
          </div>
          <span className="text-[6px] text-[#5a6a8a]">{resType}</span>
        </div>
      </div>
    </div>
  );
}

/* ═══ 仇恨行 ═══ */
function ThreatRow({ name, pct, color }: { name: string; pct: number; color: string }) {
  return (
    <div className="flex items-center gap-1">
      <span className="text-[8px] text-[#e0e8ff] w-14 truncate">{name}</span>
      <div className="flex-1 h-1.5 rounded bg-[#1a3a5c]/40">
        <div className="h-full rounded transition-all" style={{ width: `${pct}%`, backgroundColor: color }} />
      </div>
      <span className="text-[7px] w-6 text-right" style={{ color }}>{pct}%</span>
    </div>
  );
}

/* ═══ 房間格 ═══ */
function RoomCell({ dir, children }: { dir: string; children?: React.ReactNode }) {
  const has = !!children;
  return (
    <div className={`rounded border p-1 flex flex-col ${has ? 'border-[#1a3a5c] bg-[#0a0f1a]/80' : 'border-[#1a3a5c]/30 bg-[#0a0f1a]/20'}`}>
      <div className="text-[8px] text-[#5a6a8a] text-center mb-0.5">{dir}方</div>
      {has ? (
        <div className="flex-1 flex items-center justify-center gap-1.5 flex-wrap">{children}</div>
      ) : (
        <div className="flex-1 flex items-center justify-center text-[9px] text-[#5a6a8a]/40">—</div>
      )}
    </div>
  );
}

/* ═══ 怪物 icon ═══ */
function Mon({ img, name, hp, boss, selected, cast, size = 36 }: {
  img: string; name: string; hp: number; boss?: boolean; selected?: boolean; cast?: string; size?: number;
}) {
  const hpColor = hp < 30 ? '#ff4444' : hp < 60 ? '#ffb800' : '#ff6666';
  return (
    <div className="flex flex-col items-center gap-0.5 cursor-pointer group" title={`${name} HP:${hp}%`}>
      {cast && <span className="text-[7px] text-red-400 animate-pulse leading-none">⏳{cast}</span>}
      <div className="rounded-full overflow-hidden bg-[#1a3a5c]/60" style={{ width: size - 4, height: 3 }}>
        <div className="h-full rounded-full" style={{ width: `${hp}%`, backgroundColor: hpColor }} />
      </div>
      <div className={`rounded-lg border-2 overflow-hidden transition ${selected ? 'border-[#00ff88] shadow-[0_0_8px_rgba(0,255,136,0.3)]' : boss ? 'border-red-500/60' : 'border-[#1a3a5c] group-hover:border-[#00ff88]/40'}`} style={{ width: size, height: size }}>
        <img src={`/mud/images/monsters/${img}`} alt={name} className="w-full h-full object-cover" />
      </div>
      <span className={`text-[8px] leading-none ${boss ? 'text-red-300 font-bold' : 'text-[#5a6a8a]'}`}>{name}</span>
    </div>
  );
}

/* ═══ 隊友 icon ═══ */
function Ally({ img, name, hp, me, mount, lowHp }: {
  img: string; name: string; hp: number; me?: boolean; mount?: boolean; lowHp?: boolean;
}) {
  const hpColor = hp < 30 ? '#ff4444' : hp < 60 ? '#ffb800' : '#00ff88';
  return (
    <div className="flex flex-col items-center gap-0.5" title={`${name} HP:${hp}%`}>
      <div className="rounded-full overflow-hidden bg-[#1a3a5c]/60" style={{ width: 28, height: 3 }}>
        <div className="h-full rounded-full" style={{ width: `${hp}%`, backgroundColor: hpColor }} />
      </div>
      <div className={`rounded-lg border-2 overflow-hidden ${me ? 'border-[#00ff88]/60' : lowHp ? 'border-red-500/40' : 'border-[#1a3a5c]'}`} style={{ width: 32, height: 32 }}>
        <img src={`/mud/images/wiki/origins/${img}`} alt={name} className="w-full h-full object-cover" />
      </div>
      <div className="flex items-center gap-0.5">
        {mount && <span className="text-[7px]">🐴</span>}
        <span className={`text-[8px] leading-none ${me ? 'text-[#00ff88]' : 'text-[#5a6a8a]'}`}>{name}</span>
      </div>
    </div>
  );
}

/* ═══ Approaching ═══ */
function ApproachDot({ img, name, ticks, dir }: { img: string; name: string; ticks: number; dir: string }) {
  return (
    <div className="flex flex-col items-center animate-pulse" title={`${name} ${ticks}t後到達`}>
      <div className="rounded-full border-2 border-[#ffb800]/60 overflow-hidden" style={{ width: 28, height: 28 }}>
        <img src={`/mud/images/monsters/${img}`} alt={name} className="w-full h-full object-cover" />
      </div>
      <span className="text-[7px] text-[#ffb800] font-bold leading-none mt-0.5">{dir}{ticks}t</span>
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

function Sk({ label, k, cost, ok, cd, mt, ct }: { label: string; k: string; cost: string; ok?: boolean; cd?: number; mt?: boolean; ct?: number }) {
  const off = !ok || !!cd;
  return (
    <div className={`rounded border p-1 text-center cursor-pointer relative min-w-[50px] ${off ? 'border-[#1a3a5c]/40 opacity-35' : 'border-[#1a3a5c] hover:border-[#00ff88]/40'}`}>
      <div className="text-[9px] font-bold text-[#e0e8ff] truncate">{label}</div>
      <div className="text-[7px] text-[#5a6a8a]">{cost}</div>
      {cd && <div className="absolute inset-0 flex items-center justify-center bg-[#0a0f1a]/70 rounded text-[9px] font-bold text-red-400">CD{cd}</div>}
      {ct && <div className="text-[7px] text-red-400">施{ct}t</div>}
      {mt && <span className="absolute top-0 right-0.5 text-[7px]">🐴</span>}
      <span className="absolute bottom-0 left-0.5 text-[7px] text-[#5a6a8a] opacity-40">{k}</span>
    </div>
  );
}

function ActBtn({ label, icon, on }: { label: string; icon: string; on?: boolean }) {
  return (
    <div className={`flex-1 rounded border p-1 text-center cursor-pointer ${on ? 'border-[#00ff88]/40 bg-[#00ff88]/10 text-[#00ff88]' : 'border-[#1a3a5c] text-[#5a6a8a] hover:text-[#e0e8ff]'}`}>
      <div className="text-xs">{icon}</div>
      <div className="text-[8px]">{label}</div>
    </div>
  );
}

function Tag({ c, children }: { c: string; children: React.ReactNode }) {
  return <span className="rounded px-1 text-[8px] font-bold" style={{ backgroundColor: `${c}15`, border: `1px solid ${c}30`, color: c }}>{children}</span>;
}

function L({ t, c }: { t: string; c?: string }) {
  return <div style={{ color: c || '#e0e8ff' }}>{t || ' '}</div>;
}
