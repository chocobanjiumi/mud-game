import { beforeEach, describe, expect, it } from 'vitest';
import { renderToStaticMarkup } from 'react-dom/server';
import type { Character, CombatantState, RoomEntity } from '@game/shared';
import CreateCharacterScreen from '../components/CreateCharacterScreen';
import { CharacterSelectScreenView } from '../components/CharacterSelectScreen';
import SkillTablePage from '../components/SkillTablePage';
import UniqueItemPage from '../components/UniqueItemPage';
import { UNIQUE_EQUIPMENT_SLOTS, UNIQUE_ITEM_DRAFTS, UNIQUE_WEAPON_TYPES, getUniqueCoverageSummary } from '../content/uniqueItemDrafts';
import TalentTreePage from '../components/TalentTreePage';
import { TALENT_FAMILY_DRAFTS, getTalentDraftSummary } from '../content/talentTreeDrafts';
import { SkillLearnedModalView } from '../components/SkillLearnedModal';
import { DeathNoticeModalView } from '../components/DeathNoticeModal';
import { RoomPanelView } from '../components/RoomPanel';
import { SelectedTargetPanelView } from '../components/SelectedTargetPanel';
import { buildObjectiveSuggestions, ObjectivePanelView } from '../components/ObjectivePanel';
import { CombatPanelView } from '../components/CombatPanel';
import { ApproachingPanelView } from '../components/ApproachingPanel';
import { CrossRoomCombatPanelView } from '../components/CrossRoomCombatPanel';
import MonsterDetailModal from '../components/MonsterDetailModal';
import { InventoryView } from '../components/Inventory';
import { CharacterSheetView } from '../components/CharacterSheet';
import { SkillBarView } from '../components/SkillBar';
import { SkillModalView } from '../components/SkillModal';
import { NpcDialogueModalView } from '../components/NpcDialogueModal';
import { QuestLogView } from '../components/QuestLog';
import { useGameStore } from '../stores/gameStore';

const slimeEntity: RoomEntity = {
  id: 'monster_green_slime_a',
  type: 'monster',
  label: '史萊姆#1',
  subtitle: 'slime · Lv.1',
  hp: 30,
  maxHp: 30,
  monsterDetails: {
    monsterId: 'slime',
    name: '史萊姆',
    alias: 'slime',
    level: 1,
    hp: 30,
    maxHp: 30,
    mp: 0,
    maxMp: 0,
    element: 'none',
    aiType: 'passive',
    isBoss: false,
    expReward: 5,
    goldReward: [1, 3],
    stats: { str: 2, int: 1, dex: 1, vit: 2, luk: 1 },
    skills: [],
    drops: [{ itemId: 'slime_jelly', chance: 0.5, minQty: 1, maxQty: 2 }],
    description: '常見的低階怪物。',
  },
  actions: [
    { label: '查看', command: 'look monster_green_slime_a' },
    { label: '攻擊', command: 'attack monster_green_slime_a', tone: 'danger' },
  ],
};

const corpseEntity: RoomEntity = {
  id: 'green_slime_corpse_1',
  type: 'corpse',
  label: '史萊姆#1 屍體',
  subtitle: '可搜刮',
  actions: [
    { label: '搜刮', command: 'loot green_slime_corpse_1', tone: 'primary' },
  ],
};

function enemy(overrides: Partial<CombatantState> = {}): CombatantState {
  return {
    id: 'enemy-1',
    name: '史萊姆',
    isPlayer: false,
    isAi: false,
    hp: 24,
    maxHp: 30,
    mp: 0,
    maxMp: 0,
    resource: 0,
    maxResource: 0,
    resourceType: 'mp',
    level: 1,
    classId: 'monster',
    activeEffects: [],
    isDead: false,
    ...overrides,
  };
}

beforeEach(() => {
  useGameStore.setState({
    room: {
      id: 'training_ground',
      zone: 'starter_village',
      name: '訓練場',
      description: '木樁旁有史萊姆緩慢蠕動。',
      exits: [],
      players: [],
      npcs: [],
      items: [],
      monsters: [],
      entities: [slimeEntity, corpseEntity],
    },
    selectedEntity: null,
    activeQuests: [],
    combat: null,
    inCombat: false,
    selectedCombatTargetId: null,
    skills: [],
    skillLearnedNotices: [],
    selectedCrossRoomDirection: null,
    inventory: [],
    equipment: null,
    inventoryCapacity: 20,
    gold: 0,
    showInventory: false,
    character: null,
    characterList: [],
  });
});

describe('key UI component rendering', () => {
  it('renders the character creation wizard entry step', () => {
    const html = renderToStaticMarkup(<CreateCharacterScreen onCreate={() => undefined} />);
    expect(html).toContain('建立角色');
    expect(html).toContain('初始職業');
    expect(html).toContain('角色預覽');
  });

  it('renders character selection slots', () => {
    const html = renderToStaticMarkup(
      <CharacterSelectScreenView
        characters={[{
          id: 'char-warrior',
          name: '測試戰士',
          level: 7,
          classId: 'swordsman',
          raceId: 'human',
          genderId: 'undisclosed',
          faithId: 'aelora',
          hp: 88,
          maxHp: 100,
          roomId: 'village_square',
          gold: 123,
          lastLogin: 1710000000000,
        }]}
        connection="connected"
        onSelect={() => undefined}
        onCreate={() => undefined}
        onDelete={() => undefined}
      />,
    );

    expect(html).toContain('選擇角色');
    expect(html).toContain('測試戰士');
    expect(html).toContain('Lv.7');
    expect(html).toContain('刪除角色');
    expect(html).toContain('空角色欄位');
  });

  it('renders the skill acquisition table', () => {
    const html = renderToStaticMarkup(<SkillTablePage />);
    expect(html).toContain('初始職業技能草案');
    expect(html).toContain('戰士');
    expect(html).toContain('暴風雪');
    expect(html).toContain('極限怒吼');
    expect(html).toContain('破甲重擊');
    expect(html).toContain('魔力回流');
    expect(html).toContain('多重射擊');
    expect(html).toContain('群體治癒');
    expect(html).toContain('Lv12 與 Lv16');
    expect(html).toContain('消耗 70 怒氣');
    expect(html).toContain('信仰 -25');
    expect(html).toContain('arrivalTicks');
    expect(html).toContain('/mud/images/skills/icons/warrior_slash.png');
    expect(html).toContain('/mud/images/skills/icons/heal.png');
    expect(html).toContain('Lv20 二轉職業草案');
    expect(html).toContain('Lv40');
    expect(html).toContain('盾衛');
    expect(html).toContain('狂斧');
    expect(html).toContain('槍騎');
    expect(html).toContain('神射手');
    expect(html).toContain('影刃');
    expect(html).toContain('獵陷師');
    expect(html).toContain('元素師');
    expect(html).toContain('奧術師');
    expect(html).toContain('時術師');
    expect(html).toContain('主教');
    expect(html).toContain('審判者');
    expect(html).toContain('德魯伊');
    expect(html).toContain('二轉技能 / 消耗');
    expect(html).toContain('Lv28 鐵壁嘲諷');
    expect(html).toContain('Lv20/22/24/26/28');
    expect(html).toContain('消耗 70 MP');
    expect(html).toContain('信仰 +40');
    expect(html).toContain('消耗 50 專注');
  });

  it('renders the unique item candidate page with benchmark drafts', () => {
    const html = renderToStaticMarkup(<UniqueItemPage />);
    expect(html).toContain('Unique 武器與裝備候選池');
    expect(html).toContain('月井落房弓');
    expect(html).toContain('血鹽鉤刃');
    expect(html).toContain('不是正式實裝清單');
    expect(html).toContain('Weapon type coverage');
    expect(html).toContain('Equipment slot coverage');
    expect(UNIQUE_ITEM_DRAFTS).toHaveLength(UNIQUE_WEAPON_TYPES.length * 20 + UNIQUE_EQUIPMENT_SLOTS.length * 10);
    const coverage = getUniqueCoverageSummary();
    expect(coverage.weaponTypes).toHaveLength(20);
    expect(coverage.equipmentSlots).toHaveLength(9);
    for (const row of coverage.weaponTypes) {
      expect(row.count).toBe(20);
    }
    for (const row of coverage.equipmentSlots) {
      expect(row.count).toBe(10);
    }
    for (const item of UNIQUE_ITEM_DRAFTS) {
      expect(item.id).toMatch(/^[a-z0-9_]+$/);
      expect(item.uniqueEffect.length).toBeGreaterThan(20);
      expect(item.description.length).toBeGreaterThan(30);
      expect(item.visualPrompt.length).toBeGreaterThan(30);
      expect(item.drawback.length).toBeGreaterThan(10);
      expect(item.loreSource.length).toBeGreaterThan(5);
    }
  });


  it('renders the talent tree draft page with complete branch and node planning', () => {
    const html = renderToStaticMarkup(<TalentTreePage />);
    const summary = getTalentDraftSummary();
    expect(html).toContain('天賦樹文案規劃');
    expect(html).toContain('此頁為文案規劃，不是正式成長系統');
    expect(html).toContain('戰士系列');
    expect(html).toContain('守衛 / 格擋 / 反擊');
    expect(summary.families).toBe(4);
    expect(summary.branches).toBe(12);
    expect(summary.nodes).toBe(96);
    expect(summary.keystones).toBe(12);
    for (const family of TALENT_FAMILY_DRAFTS) {
      expect(family.branches).toHaveLength(3);
      for (const branch of family.branches) {
        const branchNodes = family.nodes.filter((nodeDef) => nodeDef.branch === branch.id);
        expect(branchNodes).toHaveLength(8);
        expect(branchNodes.some((nodeDef) => nodeDef.keystone)).toBe(true);
      }
      for (const nodeDef of family.nodes) {
        expect(nodeDef.id).toMatch(/^[a-z0-9_]+$/);
        expect(nodeDef.mechanic.length).toBeGreaterThan(20);
        expect(nodeDef.notSkillUpgradeNote).toContain('不直接增加既有技能');
        expect(nodeDef.balanceNote.length).toBeGreaterThanOrEqual(10);
      }
    }
  });

  it('renders skill learned modal details', () => {
    const notice = {
      skillId: 'guard',
      name: '防禦',
      description: '降低下一次受到的傷害。',
      learnLevel: 2,
      skillType: 'active',
      usageContext: 'combat',
      targetType: 'self',
      resourceCost: 0,
      cooldown: 2,
      iconPath: '/images/skills/icons/iron_wall.png',
    };

    const html = renderToStaticMarkup(<SkillLearnedModalView notice={notice} remaining={0} onDismiss={() => undefined} />);
    expect(html).toContain('防禦');
    expect(html).toContain('/mud/images/skills/icons/iron_wall.png');
    expect(html).toContain('Lv.2');
    expect(html).toContain('戰鬥');
    expect(html).toContain('技能已加入快捷列與技能列表');
  });

  it('renders death notice modal with explicit losses and respawn details', () => {
    const html = renderToStaticMarkup(
      <DeathNoticeModalView
        notice={{
          title: '你死亡了',
          message: '你在戰鬥中倒下，靈魂被送回新手村祠堂。',
          losses: { exp: 12, gold: 8, items: [], levelDown: false },
          recovery: { hp: 40, maxHp: 80, mp: 20, maxMp: 40 },
          respawn: { roomId: 'starter_village_portal_shrine', roomName: '新手村祠堂' },
        }}
        onDismiss={() => undefined}
      />,
    );

    expect(html).toContain('你死亡了');
    expect(html).toContain('經驗損失');
    expect(html).toContain('12');
    expect(html).toContain('金幣損失');
    expect(html).toContain('8');
    expect(html).toContain('掉落物品');
    expect(html).toContain('無');
    expect(html).toContain('新手村祠堂');
  });

  it('renders room entities and selected target actions without showing internal ids as labels', () => {
    const state = useGameStore.getState();
    const roomHtml = renderToStaticMarkup(
      <RoomPanelView room={state.room!} selectedEntity={null} setSelectedEntity={() => undefined} />,
    );
    expect(roomHtml).toContain('附近物件');
    expect(roomHtml).toContain('史萊姆#1');
    expect(roomHtml).toContain('搜刮');
    expect(roomHtml).not.toContain('monster_green_slime_a</span>');

    const targetHtml = renderToStaticMarkup(
      <SelectedTargetPanelView entity={slimeEntity} setSelectedEntity={() => undefined} />,
    );
    expect(targetHtml).toContain('怪物');
    expect(targetHtml).toContain('HP');
    expect(targetHtml).toContain('攻擊');
  });

  it('renders cross-room combat targeting lanes', () => {
    const state = useGameStore.getState();
    const room = {
      ...state.room!,
      entities: [],
      monsters: [],
      exits: [
        { direction: 'north' as const, targetRoomId: 'north_room', description: '北側草地' },
        { direction: 'east' as const, targetRoomId: 'east_room', description: '東側小徑' },
        { direction: 'up' as const, targetRoomId: 'upper_room', description: '二樓平台' },
        { direction: 'down' as const, targetRoomId: 'lower_room', description: '地下室' },
      ],
      nearbyCombat: {
        current: {
          roomId: 'training_ground',
          roomName: '訓練場',
          monsters: [{
            id: 'monster_green_slime_a',
            monsterId: 'slime',
            name: '史萊姆',
            alias: 'slime',
            label: '史萊姆#1',
            level: 1,
            hp: 30,
            maxHp: 30,
            image: '/images/monsters/monster_slime.png',
            threatTags: [],
          }],
        },
        neighbors: [
          {
            direction: 'north' as const,
            passable: true,
            roomId: 'north_room',
            roomName: '北側草地',
            scouted: true,
            monsterCount: 1,
            monsters: [{
              id: 'wild_rabbit_1',
              monsterId: 'wild_rabbit',
              name: '野兔',
              alias: 'wild_rabbit',
              label: '野兔#1',
              level: 1,
              hp: 12,
              maxHp: 12,
              threatTags: ['passive'],
            }],
          },
          {
            direction: 'east' as const,
            passable: true,
            roomId: 'east_room',
            roomName: '東側小徑',
            scouted: false,
            monsterCount: 2,
          },
        ],
        approaching: [{
          instanceId: 'wolf_approach',
          monsterId: 'wolf',
          name: '野狼',
          alias: 'wolf',
          sourceDirection: 'north' as const,
          sourceRoomId: 'north_room',
          destinationRoomId: 'training_ground',
          arrivalTicks: 2,
          hp: 20,
          maxHp: 20,
        }],
      },
    };
    const html = renderToStaticMarkup(
      <CrossRoomCombatPanelView
        room={room}
        inCombat={false}
        combat={null}
        canScout
      />,
    );
    const eastDetailHtml = renderToStaticMarkup(
      <CrossRoomCombatPanelView
        room={room}
        inCombat={false}
        combat={null}
        canScout
        learnedSkills={[
          { skillId: 'ranger_scout', level: 1, currentCooldown: 0 },
          { skillId: 'trap', level: 1, currentCooldown: 0 },
        ]}
        initialLane="east"
      />,
    );
    const northCombatDetailHtml = renderToStaticMarkup(
      <CrossRoomCombatPanelView
        room={room}
        inCombat
        combat={null}
        learnedSkills={[
          { skillId: 'precise_shot', level: 1, currentCooldown: 0 },
          { skillId: 'fireball', level: 1, currentCooldown: 0 },
          { skillId: 'poison_arrow', level: 1, currentCooldown: 0 },
          { skillId: 'critical_edge', level: 1, currentCooldown: 0 },
        ]}
        initialLane="north"
      />,
    );
    const northSelectedCombatDetailHtml = renderToStaticMarkup(
      <CrossRoomCombatPanelView
        room={room}
        inCombat
        combat={null}
        learnedSkills={[
          { skillId: 'precise_shot', level: 1, currentCooldown: 0 },
          { skillId: 'fireball', level: 1, currentCooldown: 0 },
          { skillId: 'poison_arrow', level: 1, currentCooldown: 0 },
          { skillId: 'critical_edge', level: 1, currentCooldown: 0 },
        ]}
        initialLane="north"
        initialAdjacentTargetId="wild_rabbit_1"
      />,
    );
    const northSelectedFieldDetailHtml = renderToStaticMarkup(
      <CrossRoomCombatPanelView
        room={room}
        inCombat={false}
        combat={null}
        learnedSkills={[
          { skillId: 'precise_shot', level: 1, currentCooldown: 0 },
          { skillId: 'fireball', level: 1, currentCooldown: 0 },
          { skillId: 'poison_arrow', level: 1, currentCooldown: 0 },
          { skillId: 'critical_edge', level: 1, currentCooldown: 0 },
        ]}
        initialLane="north"
        initialAdjacentTargetId="wild_rabbit_1"
      />,
    );
    const currentSelectedDetailHtml = renderToStaticMarkup(
      <CrossRoomCombatPanelView
        room={room}
        inCombat={false}
        combat={null}
        learnedSkills={[
          { skillId: 'precise_shot', level: 1, currentCooldown: 0 },
          { skillId: 'fireball', level: 1, currentCooldown: 0 },
        ]}
        initialCurrentTargetId="monster_green_slime_a"
      />,
    );

    expect(html).toContain('周邊戰鬥');
    expect(html).toContain('跨房技能目標');
    expect(html).toContain('北側');
    expect(html).toContain('東側');
    expect(html).toContain('北側草地');
    expect(html).toContain('東側小徑');
    expect(html).toContain('上方');
    expect(html).toContain('下方');
    expect(html).toContain('二樓平台');
    expect(html).toContain('地下室');
    expect(html).toContain('本房');
    expect(html).toContain('史萊姆#1');
    expect(html).toContain('/mud/images/monsters/monster_low_wilds_slime.png');
    expect(html).not.toContain('/images/monsters/monster_slime.png');
    expect(html).not.toContain('cross-room-lane-scout');
    expect(eastDetailHtml).toContain('cross-room-action-scout');
    expect(eastDetailHtml).toContain('偵查');
    expect(eastDetailHtml).toContain('伏擊陷阱');
    expect(northCombatDetailHtml).toContain('點擊怪物頭像後可使用隔房單體技能。');
    expect(northCombatDetailHtml).not.toContain('>射擊</button>');
    expect(northCombatDetailHtml).not.toContain('火球術');
    expect(northCombatDetailHtml).not.toContain('獵人標記');
    expect(northCombatDetailHtml).toContain('多重射擊');
    expect(northSelectedCombatDetailHtml).toContain('單體目標：野兔#1');
    expect(northSelectedCombatDetailHtml).toContain('cross-room-action-icon');
    expect(northSelectedCombatDetailHtml).toContain('cross-room-action-label">射擊</span>');
    expect(northSelectedCombatDetailHtml).toContain('火球術');
    expect(northSelectedCombatDetailHtml).toContain('獵人標記');
    expect(northSelectedCombatDetailHtml).toContain('多重射擊');
    expect(northSelectedFieldDetailHtml).toContain('單體目標：野兔#1');
    expect(northSelectedFieldDetailHtml).toContain('cross-room-action-label">射擊</span>');
    expect(northSelectedFieldDetailHtml).toContain('火球術');
    expect(northSelectedFieldDetailHtml).toContain('獵人標記');
    expect(northSelectedFieldDetailHtml).toContain('多重射擊');
    expect(currentSelectedDetailHtml).toContain('本房目標：史萊姆#1');
    expect(currentSelectedDetailHtml).toContain('cross-room-action-label">攻擊</span>');
    expect(currentSelectedDetailHtml).toContain('cross-room-action-label">射擊</span>');
    expect(currentSelectedDetailHtml).toContain('火球術');
  });

  it('renders monster detail modal with expanded monster information', () => {
    const html = renderToStaticMarkup(<MonsterDetailModal monster={slimeEntity} onClose={() => undefined} />);

    expect(html).toContain('史萊姆#1');
    expect(html).toContain('能力值');
    expect(html).toContain('掉落');
    expect(html).toContain('常見的低階怪物');
  });

  it('renders inventory category tabs', () => {
    const html = renderToStaticMarkup(
      <InventoryView
        inventory={[
        { itemId: 'wooden_sword', quantity: 1, equipped: false },
        { itemId: 'small_hp_potion', quantity: 2, equipped: false },
        { itemId: 'iron_ore', quantity: 3, equipped: false },
        ]}
        equipment={null}
        inventoryCapacity={20}
        gold={12}
        onClose={() => undefined}
        setTooltipItem={() => undefined}
        setTooltipPosition={() => undefined}
      />,
    );

    for (const label of ['全部', '武器', '防具', '飾品', '消耗品', '材料', '任務']) {
      expect(html).toContain(label);
    }
    expect(html).toContain('木劍');
    expect(html).toContain('x2');
    expect(html).toContain('出售');
  });

  it('renders merchant buy and sell tabs in npc dialogue', () => {
    const dialogue = {
        npcId: 'blacksmith',
        npcName: '鐵匠',
        npcTitle: '武器商人',
        npcType: 'merchant',
        nodeId: 'shop',
        text: '看看吧。',
        options: [],
        shopItems: [{
          id: 'wooden_sword',
          name: '木劍',
          description: '練習用木劍。',
          price: 50,
          type: 'weapon',
          rarity: 'common',
          levelReq: 1,
          command: 'buy 木劍',
        }],
      };
    const inventory = [
      { itemId: 'small_hp_potion', quantity: 2, equipped: false },
      { itemId: 'wooden_sword', quantity: 1, equipped: true },
    ];
    const buyHtml = renderToStaticMarkup(
      <NpcDialogueModalView
        dialogue={dialogue}
        inventory={inventory}
        setNpcDialogue={() => undefined}
      />,
    );
    const sellHtml = renderToStaticMarkup(
      <NpcDialogueModalView
        dialogue={dialogue}
        inventory={[
          { itemId: 'small_hp_potion', quantity: 2, equipped: false },
          { itemId: 'wooden_sword', quantity: 1, equipped: true },
        ]}
        setNpcDialogue={() => undefined}
        initialTradeTab="sell"
      />,
    );

    expect(buyHtml).toContain('購買');
    expect(buyHtml).toContain('出售');
    expect(buyHtml).toContain('木劍');
    expect(buyHtml).not.toContain('小型生命藥水');
    expect(sellHtml).toContain('小型生命藥水');
    expect(sellHtml).toContain('出售');
    expect(sellHtml).not.toContain('實例');
  });

  it('renders stat allocation controls when free points are available', () => {
    const character = {
        id: 'player-1',
        userId: 'user-1',
        name: '測試者',
        level: 2,
        exp: 0,
        classId: 'adventurer',
        hp: 40,
        mp: 20,
        maxHp: 40,
        maxMp: 20,
        resource: 20,
        maxResource: 20,
        resourceType: 'mp',
        stats: { str: 5, int: 5, dex: 5, vit: 5, luk: 5 },
        freePoints: 5,
        gold: 0,
        roomId: 'training_ground',
        isAi: false,
        equipment: {},
        createdAt: 0,
        lastLogin: 0,
      } as Character;

    const html = renderToStaticMarkup(
      <CharacterSheetView
        character={character}
        derivedStats={null}
        equipment={null}
        expToNext={100}
        onClose={() => undefined}
      />,
    );

    expect(html).toContain('未分配點數: 5');
    expect(html).toContain('+1');
    expect(html).toContain('+5');
  });

  it('renders objective suggestions from current room actions', () => {
    const state = useGameStore.getState();
    const suggestions = buildObjectiveSuggestions({
      room: state.room,
      quests: state.activeQuests,
      inCombat: state.inCombat,
      combat: state.combat,
      selectedCombatTargetId: state.selectedCombatTargetId,
      skills: state.skills,
    });
    const html = renderToStaticMarkup(<ObjectivePanelView suggestions={suggestions} />);
    expect(html).toContain('推薦');
    expect(html).toContain('搜刮 史萊姆#1 屍體');
  });

  it('renders quest guidance and reward preview', () => {
    const elderEntity: RoomEntity = {
      id: 'village_chief',
      type: 'npc',
      label: '村長',
      subtitle: '任務',
      actions: [{ label: '對話', command: 'talk elder', tone: 'primary' }],
    };
    useGameStore.setState({
      questLogOpen: true,
      room: { ...useGameStore.getState().room!, entities: [elderEntity] },
      activeQuests: [{
        id: 'main_01_awakening',
        name: '覺醒的冒險者',
        description: '熟悉村子並啟用傳送祠堂。',
        category: 'main',
        status: 'active',
        steps: [{ description: '前往傳送祠堂', current: 0, target: 1 }],
        currentStep: 0,
        nextNpcId: 'village_chief',
        nextNpcName: '村長',
        nextRoomId: 'village_square',
        nextRoomName: '村莊廣場',
        nextHint: '啟用傳送祠堂後回村莊廣場找村長。',
        recommendedLevel: 1,
        rewardPreview: {
          exp: 50,
          gold: 30,
          equipment: ['飾品裝備 Lv.5 以下'],
        },
      }],
    });

    const questHtml = renderToStaticMarkup(<QuestLogView activeQuests={useGameStore.getState().activeQuests} onClose={() => undefined} />);
    const suggestions = buildObjectiveSuggestions({
      room: useGameStore.getState().room,
      quests: useGameStore.getState().activeQuests,
      inCombat: false,
      combat: null,
      selectedCombatTargetId: null,
      skills: [],
    });
    const objectiveHtml = renderToStaticMarkup(<ObjectivePanelView suggestions={suggestions} />);

    expect(questHtml).toContain('啟用傳送祠堂後回村莊廣場找村長。');
    expect(questHtml).toContain('50 EXP / 30 金幣');
    expect(questHtml).toContain('飾品裝備 Lv.5 以下');
    expect(objectiveHtml).toContain('對話 村長');
  });

  it('renders a clickable quest movement suggestion for adjacent rooms', () => {
    useGameStore.setState({
      room: {
        ...useGameStore.getState().room!,
        exits: [{ direction: 'east', targetRoomId: 'village_square', description: '村莊廣場' }],
        entities: [],
      },
      activeQuests: [{
        id: 'main_01_awakening',
        name: '覺醒的冒險者',
        description: '回村莊廣場。',
        category: 'main',
        status: 'active',
        steps: [{ description: '回村莊廣場', current: 0, target: 1 }],
        currentStep: 0,
        nextRoomId: 'village_square',
        nextRoomName: '村莊廣場',
        nextHint: '回村莊廣場找村長。',
      }],
    });
    const suggestions = buildObjectiveSuggestions({
      room: useGameStore.getState().room,
      quests: useGameStore.getState().activeQuests,
      inCombat: false,
      combat: null,
      selectedCombatTargetId: null,
      skills: [],
    });

    expect(suggestions[0]).toMatchObject({ label: '前往 村莊廣場', command: 'go east' });
  });

  it('renders combat targets and action bar', () => {
    useGameStore.setState({
      inCombat: true,
      combat: {
        combatId: 'combat-1',
        round: 2,
        playerTeam: [],
        enemyTeam: [enemy()],
        turnTimer: 30,
        log: [],
      },
      character: { resource: 10, resourceType: 'mp' } as Character,
    });

    const state = useGameStore.getState();
    const html = renderToStaticMarkup(
      <CombatPanelView
        combat={state.combat}
        inCombat={state.inCombat}
        selectedTargetId={state.selectedCombatTargetId}
        setSelectedTargetId={() => undefined}
        skills={state.skills}
        character={state.character}
        inventory={state.inventory}
      />,
    );
    expect(html).toContain('戰鬥');
    expect(html).toContain('普攻');
    expect(html).toContain('防禦');
    expect(html).toContain('逃跑');
  });

  it('separates approaching enemies from arrived combat targets', () => {
    const approachingEnemy = enemy({
      id: 'enemy-approaching',
      name: '逼近史萊姆',
      isApproaching: true,
      arrivalTicksRemaining: 2,
    });
    const arrivedEnemy = enemy({
      id: 'enemy-arrived',
      name: '抵達史萊姆',
    });
    const combat = {
      combatId: 'combat-1',
      round: 2,
      playerTeam: [],
      enemyTeam: [approachingEnemy, arrivedEnemy],
      turnTimer: 30,
      log: [],
    };
    const character = { resource: 40, resourceType: 'focus' } as Character;
    const skills = [{ skillId: 'precise_shot', level: 1, currentCooldown: 0 }];

    const approachingHtml = renderToStaticMarkup(
      <ApproachingPanelView
        combat={combat}
        inCombat={true}
        selectedTargetId={null}
        setSelectedTargetId={() => undefined}
        skills={skills}
        character={character}
      />,
    );
    const combatHtml = renderToStaticMarkup(
      <CombatPanelView
        combat={combat}
        inCombat={true}
        selectedTargetId={null}
        setSelectedTargetId={() => undefined}
        skills={skills}
        character={character}
        inventory={[]}
      />,
    );

    expect(approachingHtml).toContain('逼近中');
    expect(approachingHtml).toContain('逼近史萊姆');
    expect(approachingHtml).toContain('射擊');
    expect(combatHtml).toContain('戰鬥');
    expect(combatHtml).toContain('抵達史萊姆');
    expect(combatHtml).not.toContain('逼近史萊姆');
  });

  it('renders skill bar target modes and pending target prompt', () => {
    const html = renderToStaticMarkup(
      <SkillBarView
        onUseSkill={() => undefined}
        pendingTargetSkillId="precise_shot"
        inCombat={true}
        character={{ resource: 40, maxResource: 100, resourceType: 'focus' } as Character}
        selectedCombatTargetId="enemy-1"
        selectedEntity={null}
        selectedCrossRoomDirection="east"
        skills={[
          { skillId: 'precise_shot', level: 1, currentCooldown: 0 },
          { skillId: 'critical_edge', level: 1, currentCooldown: 0 },
          { skillId: 'war_cry', level: 1, currentCooldown: 0 },
        ]}
      />,
    );

    expect(html).toContain('戰鬥技能');
    expect(html).toContain('方向');
    expect(html).toContain('四方');
    expect(html).toContain('需要先在周邊戰鬥選擇方向');
  });

  it('renders skill modal with upgrade actions', () => {
    const html = renderToStaticMarkup(
      <SkillModalView
        open={true}
        character={{ name: '測試遊俠', resource: 70, maxResource: 100, resourceType: 'focus' } as Character}
        skills={[
          { skillId: 'quick_step', level: 2, currentCooldown: 0 },
          { skillId: 'race_human_adaptability', level: 1, currentCooldown: 0 },
        ]}
        onClose={() => undefined}
        onUseSkill={() => undefined}
        onUpgradeSkill={() => undefined}
      />,
    );

    expect(html).toContain('技能');
    expect(html).toContain('測試遊俠');
    expect(html).toContain('專注 70/100');
    expect(html).toContain('強襲');
    expect(html).toContain('Lv.2/5');
    expect(html).toContain('升級');
    expect(html).toContain('天賦');
  });

  it('shows blind cross-room fireball action before scouting', () => {
    const html = renderToStaticMarkup(
      <CrossRoomCombatPanelView
        room={{
          id: 'training_ground',
          zone: 'starter_village',
          name: '訓練場',
          description: '',
          exits: [{ direction: 'east', targetRoomId: 'east_room', description: '東側房間' }],
          players: [],
          npcs: [],
          items: [],
          monsters: [],
          entities: [],
          nearbyCombat: {
            current: { roomId: 'training_ground', roomName: '訓練場', monsters: [] },
            neighbors: [{
              direction: 'east',
              roomId: 'east_room',
              roomName: '東側房間',
              passable: true,
              scouted: false,
              monsterCount: 2,
              monsters: [],
            }],
            approaching: [],
          },
        }}
        inCombat={false}
        combat={null}
        learnedSkills={[{ skillId: 'fireball', level: 1, currentCooldown: 0 }]}
        initialLane="east"
      />,
    );

    expect(html).toContain('火球術');
    expect(html).toContain('2 未知');
    expect(html).toContain('cross-room-action-icon');
    expect(html).toContain('/mud/images/skills/icons/fireball.png');
  });
});
