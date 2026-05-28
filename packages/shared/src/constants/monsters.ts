// 怪物資料
// 注意：所有怪物定義的唯一來源為 server/src/data/monsters.ts
// 此檔案僅保留空的匯出以維持向下相容性

import type { MonsterDef } from '../types/combat.js';
import type { MonsterFamily } from '../types/combat.js';

/** @deprecated 請使用 server/src/data/monsters.ts 中的 MONSTERS */
export const MONSTER_DEFS: Record<string, MonsterDef> = {};

export interface MonsterFamilySummary {
  id: MonsterFamily;
  name: string;
  summary: string;
}

export const MONSTER_FAMILY_SUMMARIES: Record<MonsterFamily, MonsterFamilySummary> = {
  aberration: {
    id: 'aberration',
    name: '異怪',
    summary: '異怪通常來自裂隙、夢境或失控實驗，身體結構不符合自然生物規則，常出沒於深淵、星界與時間錯位區。牠們多半帶有暗、雷或無屬性壓力，抗性與技能節奏難以預測，掉落物也偏向禁忌素材與異界核心。',
  },
  aquatic: {
    id: 'aquatic',
    name: '水生',
    summary: '水生族群包含魚人、海獸、沼澤掠食者與潮汐怪物，常見於湖泊、海岸、三角洲與深海副本。牠們擅長濕地伏擊、毒液、冰霧或水流牽制，通常掉落魚鰭、甲殼、鹽晶與深海材料，適合連接採集與料理系統。',
  },
  beast: {
    id: 'beast',
    name: '野獸',
    summary: '野獸是最常見的自然掠食族群，從野兔、狼群、巨蛇到高階獵場猛獸都屬於此類。牠們多半依靠撕咬、衝撞、流血與速度壓迫，棲地分布在平原、森林、雪原與邊境，掉落皮毛、牙爪、肉材與獵人系裝備素材。',
  },
  celestial: {
    id: 'celestial',
    name: '天界',
    summary: '天界族群與星光、審判、聖域或高空遺跡相關，外觀多有羽翼、光環、白石或星紋。牠們常見於天界遺跡、日耀尖塔與神聖試煉場，偏向光屬、護盾、淨化與審判傷害，掉落聖光碎片、星砂與高階信仰素材。',
  },
  construct: {
    id: 'construct',
    name: '構裝',
    summary: '構裝族群由魔像、機械、自動兵與古代守衛組成，常駐礦坑、遺跡、機械墳場與封印設施。牠們生命型態接近人造核心，常有高防禦、反射、電擊或機關連動，掉落齒輪、晶核、金屬碎片與可用於裝備改造的構件。',
  },
  demon: {
    id: 'demon',
    name: '惡魔',
    summary: '惡魔族群來自魔族領地、深淵裂隙與終局戰場，外觀多有角、爪、焦黑皮膚與腐化符文。牠們偏向暗屬、火焰、詛咒與爆發壓制，對低等玩家威脅很高，掉落惡魔角、魔血、封印碎片與高階暗屬裝備材料。',
  },
  dragon: {
    id: 'dragon',
    name: '龍族',
    summary: '龍族包含幼龍、龍裔守衛、古龍與受龍息影響的高階生物，主要出現在龍谷、雪原裂谷與終局副本。牠們通常具備高生命、元素吐息、飛行或威壓技能，抗性與傷害都偏高，掉落龍牙、龍鱗、龍筋與傳說武器核心。',
  },
  elemental: {
    id: 'elemental',
    name: '元素',
    summary: '元素族群由火、冰、雷、自然或光暗力量凝成，常見於火山、雪原、風暴高地、星隕坑與魔法副本。牠們的傷害類型通常與自身元素一致，常帶抗性、環境效果或持續傷害，掉落晶體、元素粉塵與法系裝備素材。',
  },
  humanoid: {
    id: 'humanoid',
    name: '人型',
    summary: '人型族群包含盜賊、士兵、魚人部族、祭司、術士與各種智慧敵對勢力，常出現在道路、城鎮外圍、要塞與副本據點。牠們通常會使用武器、戰術技能、治療或指揮增援，掉落金幣、徽記、補給品與可追溯陣營的任務物。',
  },
  insect: {
    id: 'insect',
    name: '蟲類',
    summary: '蟲類族群包含蜘蛛、蜂群、甲蟲與濕地節肢怪物，常在森林、洞穴、樹冠與潮濕採集點附近築巢。牠們多以毒液、蛛網、群體增援或快速突襲造成壓力，掉落蛛絲、毒囊、甲殼與可用於陷阱或輕甲的素材。',
  },
  ooze: {
    id: 'ooze',
    name: '軟泥',
    summary: '軟泥族群多由魔力污染、潮濕洞穴或腐化液體形成，外觀不固定，常在新手區、礦坑、沼澤與廢棄設施中滲出。牠們通常防禦不高但會分裂、腐蝕、減速或黏住目標，掉落凝膠、酸液與煉金基礎材料。',
  },
  plant: {
    id: 'plant',
    name: '植物',
    summary: '植物族群包含樹精、藤蔓、毒花、蘑菇與自然守衛，棲息於森林、濕地、樹冠與古老庭園。牠們常用纏繞、毒霧、再生或自然傷害控制路線，掉落樹皮、樹液、花瓣、孢子與德魯伊或自然系裝備素材。',
  },
  undead: {
    id: 'undead',
    name: '不死',
    summary: '不死族群由骷髏、怨靈、亡者騎士與死都軍陣構成，常見於墓園、地下墓窟、死都外門與受詛咒戰場。牠們多帶暗屬、恐懼、吸魂或不穩定復甦效果，通常怕光系與祭司技能，掉落骨片、幽魂精華與亡靈徽記。',
  },
};
