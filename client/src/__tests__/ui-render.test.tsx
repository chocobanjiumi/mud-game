import { beforeEach, describe, expect, it } from 'vitest';
import { renderToStaticMarkup } from 'react-dom/server';
import type { Character, CombatantState, RoomEntity } from '@game/shared';
import CreateCharacterScreen from '../components/CreateCharacterScreen';
import SkillTablePage from '../components/SkillTablePage';
import { SkillLearnedModalView } from '../components/SkillLearnedModal';
import { DeathNoticeModalView } from '../components/DeathNoticeModal';
import { RoomPanelView } from '../components/RoomPanel';
import { SelectedTargetPanelView } from '../components/SelectedTargetPanel';
import { buildObjectiveSuggestions, ObjectivePanelView } from '../components/ObjectivePanel';
import { CombatPanelView } from '../components/CombatPanel';
import { CrossRoomCombatPanelView } from '../components/CrossRoomCombatPanel';
import MonsterDetailModal from '../components/MonsterDetailModal';
import { InventoryView } from '../components/Inventory';
import { CharacterSheetView } from '../components/CharacterSheet';
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
    inventory: [],
    equipment: null,
    inventoryCapacity: 20,
    gold: 0,
    showInventory: false,
    character: null,
  });
});

describe('key UI component rendering', () => {
  it('renders the character creation wizard entry step', () => {
    const html = renderToStaticMarkup(<CreateCharacterScreen onCreate={() => undefined} />);
    expect(html).toContain('建立角色');
    expect(html).toContain('冒險者');
    expect(html).toContain('角色預覽');
  });

  it('renders the skill acquisition table', () => {
    const html = renderToStaticMarkup(<SkillTablePage />);
    expect(html).toContain('初始職業技能草案');
    expect(html).toContain('戰士');
    expect(html).toContain('暴風雪');
    expect(html).toContain('極限怒吼');
    expect(html).toContain('消耗 70 怒氣');
    expect(html).toContain('信仰 -25');
    expect(html).toContain('arrivalTicks');
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
    };

    const html = renderToStaticMarkup(<SkillLearnedModalView notice={notice} remaining={0} onDismiss={() => undefined} />);
    expect(html).toContain('防禦');
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
    const html = renderToStaticMarkup(
      <CrossRoomCombatPanelView
        room={{
          ...state.room!,
          exits: [
            { direction: 'north', targetRoomId: 'north_room', description: '北側草地' },
            { direction: 'east', targetRoomId: 'east_room', description: '東側小徑' },
          ],
        }}
        inCombat={false}
        combat={null}
      />,
    );

    expect(html).toContain('周邊戰鬥');
    expect(html).toContain('跨房技能目標');
    expect(html).toContain('北側');
    expect(html).toContain('東側');
    expect(html).toContain('本房');
    expect(html).toContain('史萊姆#1');
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
});
