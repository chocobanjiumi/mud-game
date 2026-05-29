import { useMemo, useState } from 'react';
import type { EquipSlot } from '@game/shared';

type AffixKind = 'prefix' | 'suffix';

interface DraftAffix {
  id: string;
  name: string;
  tier: 'T1' | 'T2' | 'T3' | 'T4' | 'T5';
  levelRange: string;
  stat: string;
  gameplay: string;
  tags: string[];
}

interface SlotAffixDraft {
  id: EquipSlot;
  label: string;
  identity: string;
  prefixes: DraftAffix[];
  suffixes: DraftAffix[];
}

const p = (id: string, name: string, tier: DraftAffix['tier'], levelRange: string, stat: string, gameplay: string, tags: string[]): DraftAffix => ({
  id,
  name,
  tier,
  levelRange,
  stat,
  gameplay,
  tags,
});

export const SLOT_AFFIX_DRAFTS: SlotAffixDraft[] = [
  {
    id: 'weapon',
    label: '武器',
    identity: '主要輸出與技能玩法入口，前綴偏基礎傷害，後綴偏命中、觸發與戰鬥節奏。',
    prefixes: [
      p('weapon_prefix_savage', '殘暴', 'T1', '1-20', '攻擊 +4~18', '物理技能與普攻的穩定底盤。', ['physical', 'damage']),
      p('weapon_prefix_arcane', '秘儀', 'T1', '1-24', '魔攻 +4~18', '法術技能傷害提高，適合法師與祭司攻擊路線。', ['magical', 'damage']),
      p('weapon_prefix_precise', '精準', 'T2', '8-40', '命中 +3~9', '補足打高等怪與跨房攻擊命中。', ['hit', 'cross_room']),
      p('weapon_prefix_vampiric', '嗜血', 'T3', '18-50', '攻擊 +6~16，擊殺回血 2~5%', '讓近戰與連殺路線有續戰。', ['sustain', 'kill']),
      p('weapon_prefix_elemental', '元素', 'T4', '32+', '元素傷害 +6~14%', '火、冰、雷、光、暗、自然技能的專精入口。', ['elemental', 'skill']),
    ],
    suffixes: [
      p('weapon_suffix_breaking', '破甲', 'T1', '1-30', '破甲 4~12%', '命中後短時間降低目標防禦。', ['debuff', 'physical']),
      p('weapon_suffix_burning', '灼燒', 'T2', '8-42', '燃燒 2~6 / tick', '追加火焰 DoT，適合多段或 AoE。', ['fire', 'dot']),
      p('weapon_suffix_hawkeye', '鷹眼', 'T3', '18-50', '跨房命中 +5~12%', '遠程與法術隔房攻擊更穩。', ['cross_room', 'hit']),
      p('weapon_suffix_harvest', '收割', 'T4', '32+', '擊殺回資源 +4~10', '清怪後回怒氣、專注或魔力。', ['resource', 'kill']),
      p('weapon_suffix_execution', '處決', 'T5', '45+', '低血目標傷害 +8~18%', '加速收尾，高價值在 boss 斬殺期。', ['burst', 'execute']),
    ],
  },
  {
    id: 'head',
    label: '頭部',
    identity: '視野、判斷與抗控部位，前綴偏精神資源，後綴偏偵查、抗性與施法穩定。',
    prefixes: [
      p('head_prefix_insight', '洞察', 'T1', '1-24', '智力 +1~6', '提高法系能力與辨識型玩法。', ['int', 'magic']),
      p('head_prefix_focus', '凝神', 'T1', '1-30', '最大 MP +10~45', '提高法師與祭司長戰空間。', ['mp', 'resource']),
      p('head_prefix_vigilant', '警戒', 'T2', '8-42', '命中 +2~7，迴避 +1~4', '降低偷襲與失手風險。', ['hit', 'dodge']),
      p('head_prefix_sage', '賢者', 'T3', '18-50', '魔攻 +3~12，魔防 +3~12', '法系攻防混合。', ['matk', 'mdef']),
      p('head_prefix_commanding', '統御', 'T4', '32+', '技能 CD -1 tick，限長 CD 技能', '支援戰吼、結界、控制類節奏。', ['cooldown', 'support']),
    ],
    suffixes: [
      p('head_suffix_clear_sight', '明視', 'T1', '1-30', '偵查資訊 +1 層', '更容易看見相鄰房怪物細節。', ['scout', 'utility']),
      p('head_suffix_unshaken', '不動', 'T2', '8-42', '暈眩抗性 +6~16%', '降低 stun 對行動節奏的干擾。', ['control_resist', 'stun']),
      p('head_suffix_silenceguard', '護咒', 'T2', '12-45', '沉默抗性 +6~16%', '保護法師與祭司施法。', ['control_resist', 'silence']),
      p('head_suffix_overwatch', '監視', 'T3', '18-50', 'approaching 怪物命中 -3~8%', '怪物抵達首 tick 壓力下降。', ['approach', 'defense']),
      p('head_suffix_prophecy', '預兆', 'T5', '45+', '每場戰鬥首次受致命傷保留 1 HP', '高階保命，但需內建長冷卻。', ['survival', 'rare']),
    ],
  },
  {
    id: 'body',
    label: '身體',
    identity: '主要承傷部位，前綴給血防，後綴處理減傷、反傷與異常承受。',
    prefixes: [
      p('body_prefix_bulwark', '壁壘', 'T1', '1-28', '防禦 +4~20', '物理承傷基礎。', ['def', 'tank']),
      p('body_prefix_lifebound', '生命', 'T1', '1-35', '最大 HP +20~120', '所有職業泛用生存。', ['hp', 'survival']),
      p('body_prefix_warded', '結界', 'T2', '8-42', '魔防 +4~20', '對抗法術與元素怪。', ['mdef', 'magic']),
      p('body_prefix_giant', '巨人', 'T3', '18-55', '體質 +2~8，HP +20~80', '高血量坦度路線。', ['vit', 'hp']),
      p('body_prefix_sanctified', '祝聖', 'T4', '32+', '光抗 +6~15%，暗抗 +6~15%', '神聖/亡靈地區用防具核心。', ['resist', 'light', 'dark']),
    ],
    suffixes: [
      p('body_suffix_guarding', '守護', 'T1', '1-35', '首次受擊傷害 -6~18%', '進房或開戰第一波更穩。', ['first_hit', 'defense']),
      p('body_suffix_thorns', '荊棘', 'T2', '8-45', '反傷 2~8%', '被近戰怪圍毆時回敬傷害。', ['thorns', 'melee']),
      p('body_suffix_mending', '癒合', 'T3', '18-55', '戰鬥中每 3 tick 回 HP 1~3%', '長戰續航。', ['regen', 'sustain']),
      p('body_suffix_cleanse', '淨化', 'T4', '32+', '負面狀態持續 -1 tick', '降低毒、燃燒、破甲等壓力。', ['debuff_resist', 'utility']),
      p('body_suffix_last_stand', '不屈', 'T5', '45+', '低血減傷 +8~20%', '戰士與高壓區域保命。', ['low_hp', 'defense']),
    ],
  },
  {
    id: 'hands',
    label: '手部',
    identity: '出手品質與技能操作部位，前綴偏攻擊/手感，後綴偏命中觸發與技能成本。',
    prefixes: [
      p('hands_prefix_forceful', '強腕', 'T1', '1-28', '攻擊 +3~14', '物理職業低門檻輸出。', ['atk', 'physical']),
      p('hands_prefix_channeling', '導能', 'T1', '1-30', '魔攻 +3~14', '法系技能增傷。', ['matk', 'magical']),
      p('hands_prefix_dextrous', '靈巧', 'T2', '8-45', '敏捷 +1~6', '提高命中、迴避與遊俠節奏。', ['dex', 'ranger']),
      p('hands_prefix_cruel', '殘酷', 'T3', '18-55', '暴擊 +2~8%', '爆發流核心。', ['crit', 'burst']),
      p('hands_prefix_masterwork', '名匠', 'T4', '32+', '技能傷害 +4~12%', '泛用技能增幅。', ['skill', 'damage']),
    ],
    suffixes: [
      p('hands_suffix_swiftcast', '速咒', 'T1', '1-35', '瞬發技能消耗 -2~6', '強襲、橫掃等瞬發技能循環更快。', ['instant', 'resource']),
      p('hands_suffix_counter', '反擊', 'T2', '8-45', '格擋後反擊 20~45% 攻擊', '防禦型戰士收益。', ['counter', 'block']),
      p('hands_suffix_puncture', '穿刺', 'T3', '18-55', '忽略防禦 3~10%', '打高防怪與 boss 更有效。', ['armor_ignore', 'damage']),
      p('hands_suffix_siphon', '汲取', 'T4', '32+', '命中回資源 +1~4', '多段技能回怒氣、專注或 MP。', ['resource', 'on_hit']),
      p('hands_suffix_overload', '超載', 'T5', '45+', '技能暴擊時 CD -1 tick', '高暴擊 build 的節奏獎勵。', ['crit', 'cooldown']),
    ],
  },
  {
    id: 'feet',
    label: '腳部',
    identity: '移動、逃跑與 approaching 控制部位，前綴偏速度/迴避，後綴偏撤退和地形。',
    prefixes: [
      p('feet_prefix_quick', '迅捷', 'T1', '1-28', '迴避 +2~9%', '提高被打中的門檻。', ['dodge', 'mobility']),
      p('feet_prefix_scouting', '巡行', 'T1', '1-35', '偵查消耗 -2~8', '遊俠與探索路線更順。', ['scout', 'focus']),
      p('feet_prefix_balanced', '穩步', 'T2', '8-45', '命中 +2~6，迴避 +2~6', '攻守兼備。', ['hit', 'dodge']),
      p('feet_prefix_windborne', '逐風', 'T3', '18-55', '逃跑成功 +4~12%', '戰鬥中移動逃跑更可靠。', ['flee', 'mobility']),
      p('feet_prefix_phase', '相位', 'T5', '45+', '每場戰鬥首次逃跑失敗傷害 -30~60%', '高階撤退保險。', ['flee', 'defense']),
    ],
    suffixes: [
      p('feet_suffix_snare', '絆足', 'T1', '1-35', '命中後 arrivalTicks +1，低機率', '延後隔房怪物抵達。', ['approach', 'control']),
      p('feet_suffix_trail', '足跡', 'T2', '8-45', '離房後偵查保留 +1 tick', '移動後仍保留短暫資訊。', ['scout', 'movement']),
      p('feet_suffix_sidestep', '側移', 'T3', '18-55', '閃避後下次技能消耗 -3~8', '遊俠與劍聖節奏。', ['dodge', 'resource']),
      p('feet_suffix_grounding', '踏穩', 'T4', '32+', '擊退/緩速抗性 +8~20%', '對控制型怪物更穩。', ['control_resist', 'slow']),
      p('feet_suffix_chase', '追擊', 'T5', '45+', '逃跑或移動後下次攻擊 +8~16%', '戰術移動後反打。', ['movement', 'burst']),
    ],
  },
  {
    id: 'ring',
    label: '戒指',
    identity: '小型泛用數值與暴擊部位，前綴偏主屬性，後綴偏機率型收益。',
    prefixes: [
      p('ring_prefix_might', '武力', 'T1', '1-30', '力量 +1~5', '戰士與近戰輸出。', ['str', 'physical']),
      p('ring_prefix_wit', '慧心', 'T1', '1-30', '智力 +1~5', '法術輸出與治療。', ['int', 'magical']),
      p('ring_prefix_grace', '靈敏', 'T2', '8-45', '敏捷 +1~5', '命中、迴避、遊俠。', ['dex', 'ranger']),
      p('ring_prefix_fortune', '幸運', 'T3', '18-55', '幸運 +1~6', '暴擊與掉落路線。', ['luk', 'loot']),
      p('ring_prefix_harmony', '調和', 'T4', '32+', '全能力 +1~3', '高階泛用。', ['all_stats', 'rare']),
    ],
    suffixes: [
      p('ring_suffix_crit', '會心', 'T1', '1-35', '暴擊 +2~8%', '單體爆發。', ['crit', 'burst']),
      p('ring_suffix_ruin', '毀滅', 'T2', '8-45', '暴傷 +5~20%', '高暴擊 build 放大收益。', ['crit_damage', 'burst']),
      p('ring_suffix_luckdrop', '拾荒', 'T3', '18-55', '掉落金幣 +3~10%', '農怪與素材路線。', ['loot', 'gold']),
      p('ring_suffix_recovery', '回流', 'T4', '32+', '戰鬥結束回資源 +5~15', '連續刷怪續航。', ['resource', 'recovery']),
      p('ring_suffix_miracle', '奇蹟', 'T5', '45+', '低血治療效果 +8~18%', '祭司與保命 build。', ['heal', 'low_hp']),
    ],
  },
  {
    id: 'earring',
    label: '耳環',
    identity: '法術、感知與資源恢復部位，前綴偏 MP/魔攻，後綴偏回復與抗魔。',
    prefixes: [
      p('earring_prefix_mana', '靈泉', 'T1', '1-30', '最大 MP +10~55', '法系長戰基礎。', ['mp', 'resource']),
      p('earring_prefix_spellpower', '咒力', 'T1', '1-35', '魔攻 +3~14', '法術輸出。', ['matk', 'magical']),
      p('earring_prefix_clarity', '清明', 'T2', '8-45', 'MP 回復 +1~4 / tick', '法師續航。', ['mp_regen', 'resource']),
      p('earring_prefix_devotion', '虔誠', 'T3', '18-55', '治療 +4~12%', '祭司治療路線。', ['heal', 'priest']),
      p('earring_prefix_resonance', '共鳴', 'T4', '32+', '元素技能 +4~12%', '元素法師與光暗祭司。', ['elemental', 'skill']),
    ],
    suffixes: [
      p('earring_suffix_echo', '迴響', 'T1', '1-35', '法術命中回 MP +1~3', '命中型法術續航。', ['mp', 'on_hit']),
      p('earring_suffix_barrier', '魔障', 'T2', '8-45', '魔法傷害 -3~10%', '抗法怪物。', ['mdef', 'resist']),
      p('earring_suffix_torrent', '湧流', 'T3', '18-55', 'MP 低於 30% 時回復 +20~50%', '低魔救急。', ['mp_regen', 'low_resource']),
      p('earring_suffix_hymn', '聖詠', 'T4', '32+', '治療暴擊 +5~15%', '高階治療爆發。', ['heal', 'crit']),
      p('earring_suffix_overmind', '超感', 'T5', '45+', '跨房法術盲放命中 +6~14%', '法師未知目標玩法。', ['cross_room', 'mage']),
    ],
  },
  {
    id: 'belt',
    label: '腰帶',
    identity: '生命、負重與藥水戰術部位，前綴偏體質，後綴偏消耗品與資源底線。',
    prefixes: [
      p('belt_prefix_stamina', '耐力', 'T1', '1-30', '體質 +1~6', '提高 HP 與承傷。', ['vit', 'hp']),
      p('belt_prefix_capacity', '擴容', 'T1', '1-35', '背包容量 +2~8', '長時間農怪與採集。', ['inventory', 'utility']),
      p('belt_prefix_guarded', '護腰', 'T2', '8-45', '防禦 +3~14', '物理承傷。', ['def', 'tank']),
      p('belt_prefix_reserve', '儲備', 'T3', '18-55', '最大資源 +5~15', '怒氣、專注、MP、信仰上限支援。', ['resource', 'max']),
      p('belt_prefix_colossus', '巨像', 'T4', '32+', 'HP +60~160，防禦 +4~12', '坦克高階底盤。', ['hp', 'def']),
    ],
    suffixes: [
      p('belt_suffix_potion', '藥袋', 'T1', '1-35', '藥水效果 +5~15%', '藥水更有價值。', ['potion', 'heal']),
      p('belt_suffix_emergency', '備戰', 'T2', '8-45', '低血自動提高藥水效果', '危急時提高恢復。', ['low_hp', 'potion']),
      p('belt_suffix_ragehold', '蓄怒', 'T3', '18-55', '脫戰資源衰減 -10~30%', '戰士保留怒氣，需平衡上限。', ['rage', 'resource']),
      p('belt_suffix_anchor', '錨定', 'T4', '32+', '被拉扯/擊退抗性 +8~20%', '站位穩定。', ['control_resist', 'position']),
      p('belt_suffix_restock', '整備', 'T5', '45+', '戰鬥結束低機率不消耗藥水', '高階補給收益。', ['potion', 'economy']),
    ],
  },
  {
    id: 'necklace',
    label: '項鍊',
    identity: '職業特色與信仰/元素核心部位，前綴偏專精，後綴偏高階規則改造。',
    prefixes: [
      p('necklace_prefix_oath', '誓約', 'T1', '1-35', '信仰變動 +1~4', '祭司信仰技能更容易推動。', ['faith', 'priest']),
      p('necklace_prefix_power', '威能', 'T1', '1-35', '技能倍率 +3~9%', '所有職業泛用技能增幅。', ['skill', 'damage']),
      p('necklace_prefix_element', '元素心核', 'T2', '8-50', '指定元素 +5~14%', '元素 build 核心。', ['elemental', 'damage']),
      p('necklace_prefix_command', '號令', 'T3', '18-55', '召喚/拉怪技能範圍效果 +1', '戰士、祭司、進階控場玩法。', ['control', 'range']),
      p('necklace_prefix_avatar', '化身', 'T5', '45+', '職業核心技能 +1 等級', '高階職業專精入口。', ['class', 'skill_level']),
    ],
    suffixes: [
      p('necklace_suffix_mercy', '慈悲', 'T1', '1-35', '治療 +4~12%', '祭司與自補技能。', ['heal', 'support']),
      p('necklace_suffix_judgment', '審判', 'T2', '8-45', '對 undead/demon +5~15%', '神聖與亡靈區域。', ['light', 'enemy_type']),
      p('necklace_suffix_balance', '平衡', 'T3', '18-55', '資源回復靠近中線時 +10~25%', '信仰與資源節奏調整。', ['resource', 'faith']),
      p('necklace_suffix_benediction', '祝福', 'T4', '32+', '隊友受到你的 buff 效果 +4~10%', '組隊支援。', ['party', 'buff']),
      p('necklace_suffix_transcend', '超越', 'T5', '45+', '大招 CD -1 tick，資源消耗 +10%', '高階輸出與控場交換。', ['cooldown', 'tradeoff']),
    ],
  },
  {
    id: 'accessory',
    label: '通用飾品',
    identity: '未來可作副飾品或特殊槽位，前綴偏生活/通用，後綴偏特殊規則。',
    prefixes: [
      p('accessory_prefix_gatherer', '採集者', 'T1', '1-30', '採集產量 +3~10%', '生活技能與材料取得。', ['gathering', 'utility']),
      p('accessory_prefix_traveler', '旅人', 'T1', '1-35', '移動消耗/費用 -3~10%', '跑圖與傳送經濟。', ['travel', 'economy']),
      p('accessory_prefix_merchant', '商旅', 'T2', '8-45', '買價 -1~4%，賣價 +1~4%', '交易玩法。', ['trade', 'gold']),
      p('accessory_prefix_lucky', '幸運星', 'T3', '18-55', '稀有掉落權重 +2~8%', '刷寶。', ['loot', 'luck']),
      p('accessory_prefix_relic', '遺物', 'T5', '45+', '隨機職業標籤 +1', '高階特殊 build。', ['class', 'rare']),
    ],
    suffixes: [
      p('accessory_suffix_mapping', '測繪', 'T1', '1-35', '世界地圖揭露半徑 +1', '探索與地圖功能。', ['map', 'exploration']),
      p('accessory_suffix_safety', '安定', 'T2', '8-45', '死亡金幣損失 -3~10%', '降低冒險風險。', ['death', 'economy']),
      p('accessory_suffix_alarm', '警鈴', 'T3', '18-55', '被偷襲時首 tick 傷害 -10~25%', '防突襲。', ['ambush', 'defense']),
      p('accessory_suffix_memory', '記憶', 'T4', '32+', '技能升級花費 -1 點，限首次', '技能成長系統鉤子。', ['skill_point', 'progression']),
      p('accessory_suffix_fate', '命運', 'T5', '45+', '每日首次掉落品質重骰一次', '高階刷寶規則。', ['loot', 'quality']),
    ],
  },
];

const SLOT_LABELS = Object.fromEntries(SLOT_AFFIX_DRAFTS.map((slot) => [slot.id, slot.label]));

export default function SuffixPage() {
  return (
    <div className="h-full overflow-y-auto bg-bg-primary text-text-primary">
      <SuffixWikiContent />
    </div>
  );
}

export function SuffixWikiContent() {
  const [activeSlotId, setActiveSlotId] = useState<EquipSlot>('weapon');
  const activeSlot = useMemo(
    () => SLOT_AFFIX_DRAFTS.find((slot) => slot.id === activeSlotId) ?? SLOT_AFFIX_DRAFTS[0],
    [activeSlotId],
  );

  return (
      <div className="flex flex-col gap-4">
        <header className="rounded-md border border-border-dim bg-bg-secondary p-4">
          <div className="text-xs uppercase text-text-dim">Affix Draft</div>
          <h1 className="mt-1 text-2xl font-bold text-text-bright">詞綴系統初版</h1>
          <p className="mt-2 max-w-4xl text-sm leading-6 text-text-dim">
            這頁是新詞綴池草案，先按裝備部位拆分，每個部位至少 5 種前綴與 5 種後綴。確認方向後再同步到實際掉落與生成系統。
          </p>
          <div className="mt-3 flex flex-wrap gap-2 text-xs">
            <StatPill label="部位" value={SLOT_AFFIX_DRAFTS.length.toString()} />
            <StatPill label="前綴" value={SLOT_AFFIX_DRAFTS.reduce((sum, slot) => sum + slot.prefixes.length, 0).toString()} />
            <StatPill label="後綴" value={SLOT_AFFIX_DRAFTS.reduce((sum, slot) => sum + slot.suffixes.length, 0).toString()} />
            <StatPill label="每部位最低" value="5 前綴 / 5 後綴" />
          </div>
        </header>

        <nav className="sticky top-0 z-20 flex gap-2 overflow-x-auto border-b border-border-dim bg-bg-primary/95 py-3 backdrop-blur">
          {SLOT_AFFIX_DRAFTS.map((slot) => {
            const active = slot.id === activeSlot.id;
            return (
              <button
                key={slot.id}
                type="button"
                onClick={() => setActiveSlotId(slot.id)}
                className={`shrink-0 rounded border px-3 py-2 text-sm ${
                  active
                    ? 'border-border-glow bg-bg-secondary text-text-terminal'
                    : 'border-border-dim bg-bg-primary text-text-dim hover:text-text-bright'
                }`}
              >
                {slot.label}
              </button>
            );
          })}
        </nav>

        <section className="rounded-md border border-border-dim bg-bg-secondary p-4">
          <div className="flex flex-wrap items-end justify-between gap-3">
            <div>
              <h2 className="text-xl font-bold text-text-terminal">{activeSlot.label}</h2>
              <p className="mt-1 max-w-3xl text-sm leading-6 text-text-dim">{activeSlot.identity}</p>
            </div>
            <div className="flex gap-2 text-xs">
              <StatPill label="前綴" value={activeSlot.prefixes.length.toString()} />
              <StatPill label="後綴" value={activeSlot.suffixes.length.toString()} />
            </div>
          </div>

          <div className="mt-4 grid gap-4 xl:grid-cols-2">
            <AffixTable kind="prefix" title={`${activeSlot.label}前綴`} affixes={activeSlot.prefixes} slotId={activeSlot.id} />
            <AffixTable kind="suffix" title={`${activeSlot.label}後綴`} affixes={activeSlot.suffixes} slotId={activeSlot.id} />
          </div>
        </section>

        <section className="rounded-md border border-border-dim bg-bg-secondary p-4">
          <h2 className="text-xl font-bold text-text-terminal">全部部位檢查</h2>
          <div className="mt-3 overflow-x-auto rounded border border-border-dim bg-bg-primary">
            <table className="w-full min-w-[760px] border-collapse text-left text-sm">
              <thead className="bg-bg-secondary text-xs text-text-dim">
                <tr>
                  <Th>部位</Th>
                  <Th>前綴數</Th>
                  <Th>後綴數</Th>
                  <Th>前綴範例</Th>
                  <Th>後綴範例</Th>
                  <Th>狀態</Th>
                </tr>
              </thead>
              <tbody>
                {SLOT_AFFIX_DRAFTS.map((slot) => (
                  <tr key={slot.id} className="border-t border-border-dim">
                    <Td>{slot.label}</Td>
                    <Td>{slot.prefixes.length}</Td>
                    <Td>{slot.suffixes.length}</Td>
                    <Td>{slot.prefixes.map((affix) => affix.name).join('、')}</Td>
                    <Td>{slot.suffixes.map((affix) => affix.name).join('、')}</Td>
                    <Td>
                      <span className="text-text-terminal">{slot.prefixes.length >= 5 && slot.suffixes.length >= 5 ? 'OK' : '不足'}</span>
                    </Td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      </div>
  );
}

function AffixTable({ kind, title, affixes, slotId }: { kind: AffixKind; title: string; affixes: DraftAffix[]; slotId: EquipSlot }) {
  return (
    <div className="rounded border border-border-dim bg-bg-primary">
      <div className="flex items-center justify-between border-b border-border-dim px-3 py-2">
        <h3 className="font-bold text-text-bright">{title}</h3>
        <span className={kind === 'prefix' ? 'text-xs text-text-amber' : 'text-xs text-text-terminal'}>
          {kind === 'prefix' ? '前綴' : '後綴'} / {SLOT_LABELS[slotId]}
        </span>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full min-w-[720px] border-collapse text-left text-sm">
          <thead className="bg-bg-secondary text-xs text-text-dim">
            <tr>
              <Th>名稱</Th>
              <Th>階級</Th>
              <Th>等級</Th>
              <Th>數值</Th>
              <Th>玩法</Th>
              <Th>標籤</Th>
            </tr>
          </thead>
          <tbody>
            {affixes.map((affix) => (
              <tr key={affix.id} className="border-t border-border-dim align-top">
                <Td>
                  <div className="font-bold text-text-bright">{affix.name}</div>
                  <div className="text-[11px] text-text-dim">{affix.id}</div>
                </Td>
                <Td><span className="text-text-amber">{affix.tier}</span></Td>
                <Td>{affix.levelRange}</Td>
                <Td>{affix.stat}</Td>
                <Td><div className="max-w-xs text-xs leading-5 text-text-dim">{affix.gameplay}</div></Td>
                <Td>
                  <div className="flex max-w-[180px] flex-wrap gap-1">
                    {affix.tags.map((tag) => (
                      <span key={tag} className="rounded border border-border-dim bg-bg-secondary px-1.5 py-0.5 text-[11px] text-text-dim">
                        {tag}
                      </span>
                    ))}
                  </div>
                </Td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

function StatPill({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded border border-border-dim bg-bg-primary px-3 py-2">
      <span className="text-text-dim">{label}</span>
      <span className="ml-2 font-bold text-text-bright">{value}</span>
    </div>
  );
}

function Th({ children }: { children: React.ReactNode }) {
  return <th className="whitespace-nowrap px-3 py-2 font-bold">{children}</th>;
}

function Td({ children }: { children: React.ReactNode }) {
  return <td className="px-3 py-3">{children}</td>;
}
