import type { RoomDef } from '@game/shared';

export const EXPANSION_ROOMS_PART_016: Record<string, RoomDef> = {
pilgrim_road_saint_bridge: {
    id: 'pilgrim_road_saint_bridge',
    name: '聖徒橋',
    zone: 'pilgrim_road' as RoomDef['zone'],
    image: 'pilgrim_road_saint_bridge.png',
    imagePrompt: '聖徒橋 in pilgrim_road, ancient pilgrimage road with broken stone slabs, roadside shrines, caravan tracks, dry grass, white markers and ambush shadows, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function entrance, terrain road, clear lantern light',
    description:
      '聖徒橋位於朝聖古道斷續延伸的石板路上，白石路標、鐘鈴小祠、商隊車轍與荒草裡的伏擊痕跡共同標出通往古老聖地的方向。這裡是低中階任務路線與野外遭遇節點，玩家可以 inspect 路標、香灰、車轍和暗哨刻痕來判斷朝聖者與盜匪的行蹤，也能 search 乾井、舊營地、廢棄旅舍和聖碑旁尋找委託線索。若隊伍忽略彎道視線、墓地岔路與商隊殘貨，盜匪、哥布林、狼群與骷髏會從路旁包抄；若穩定沿白石標記推進，則能抵達聖地門與終點聖碑，並確認回程路標、補給水袋、隊伍位置與夜間守望仍然安全可靠無虞。',
    exits: [
      { direction: 'west', targetRoomId: 'pilgrim_road_prayer_steps', description: '聖徒橋回到祈願階' },
      { direction: 'east', targetRoomId: 'pilgrim_road_white_marker', description: '白石路標在東側' },
    ],
    monsters: [
      { monsterId: 'saint_bridge_penitent', maxCount: 1, respawnSeconds: 260 },
      { monsterId: 'shrine_bell_wraith', maxCount: 1, respawnSeconds: 120 },
    ],
    mapSymbol: '[橋]',
    mapX: 3,
    mapY: 1,
    guardianHints: {
      creature: '聖徒橋的路旁草影若突然低伏，附近伏擊者通常已經就位。',
      treasure: '聖徒橋的路標、車轍或香灰旁可能藏著朝聖古道任務線索。',
      spirit: '聖徒橋保留著巡禮者、商隊與伏擊者反覆踏過古道的記憶。',
    },
  },

pilgrim_road_ambush_bend: {
    id: 'pilgrim_road_ambush_bend',
    name: '伏擊彎道',
    zone: 'pilgrim_road' as RoomDef['zone'],
    image: 'pilgrim_road_ambush_bend.png',
    imagePrompt: '伏擊彎道 in pilgrim_road, ancient pilgrimage road with broken stone slabs, roadside shrines, caravan tracks, dry grass, white markers and ambush shadows, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function entrance, terrain road, clear lantern light',
    description:
      '伏擊彎道位於朝聖古道斷續延伸的石板路上，白石路標、鐘鈴小祠、商隊車轍與荒草裡的伏擊痕跡共同標出通往古老聖地的方向。這裡是低中階任務路線與野外遭遇節點，玩家可以 inspect 路標、香灰、車轍和暗哨刻痕來判斷朝聖者與盜匪的行蹤，也能 search 乾井、舊營地、廢棄旅舍和聖碑旁尋找委託線索。若隊伍忽略彎道視線、墓地岔路與商隊殘貨，盜匪、哥布林、狼群與骷髏會從路旁包抄；若穩定沿白石標記推進，則能抵達聖地門與終點聖碑，並確認回程路標、補給水袋、隊伍位置與夜間守望仍然安全可靠無虞。',
    exits: [
      { direction: 'west', targetRoomId: 'pilgrim_road_abandoned_inn', description: '伏擊彎道回到旅舍' },
      { direction: 'north', targetRoomId: 'pilgrim_road_white_marker', description: '斜坡通往白石路標', edgeKind: 'distant_route', edgeNote: '此出口依世界全圖座標不是相鄰一格，實際路程長於相鄰一格，保留為明確特殊路線。' },
      { direction: 'east', targetRoomId: 'pilgrim_road_broken_causeway', description: '斷石道在東側' },
    ],
    monsters: [
      { monsterId: 'drywell_ambusher', maxCount: 2, respawnSeconds: 110 },
      { monsterId: 'smuggler_cache_guard', maxCount: 1, respawnSeconds: 300 },
    ],
    mapSymbol: '[伏]',
    mapX: 4,
    mapY: 0,
    guardianHints: {
      creature: '伏擊彎道的路旁草影若突然低伏，附近伏擊者通常已經就位。',
      treasure: '伏擊彎道的路標、車轍或香灰旁可能藏著朝聖古道任務線索。',
      spirit: '伏擊彎道保留著巡禮者、商隊與伏擊者反覆踏過古道的記憶。',
    },
  },

pilgrim_road_smuggler_cache: {
    id: 'pilgrim_road_smuggler_cache',
    name: '走私藏點',
    zone: 'pilgrim_road' as RoomDef['zone'],
    image: 'pilgrim_road_smuggler_cache.png',
    imagePrompt: '走私藏點 in pilgrim_road, ancient pilgrimage road with broken stone slabs, roadside shrines, caravan tracks, dry grass, white markers and ambush shadows, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function hidden, terrain road, clear lantern light',
    description:
      '走私藏點位於朝聖古道斷續延伸的石板路上，白石路標、鐘鈴小祠、商隊車轍與荒草裡的伏擊痕跡共同標出通往古老聖地的方向。這裡是低中階任務路線與野外遭遇節點，玩家可以 inspect 路標、香灰、車轍和暗哨刻痕來判斷朝聖者與盜匪的行蹤，也能 search 乾井、舊營地、廢棄旅舍和聖碑旁尋找委託線索。若隊伍忽略彎道視線、墓地岔路與商隊殘貨，盜匪、哥布林、狼群與骷髏會從路旁包抄；若穩定沿白石標記推進，則能抵達聖地門與終點聖碑，並確認回程路標、補給水袋、隊伍位置與夜間守望仍然安全可靠無虞。',
    exits: [
      { direction: 'west', targetRoomId: 'pilgrim_road_thorn_cut', description: '走私藏點回到荊棘缺口' },
      { direction: 'east', targetRoomId: 'pilgrim_road_bandit_watch', description: '盜匪望臺在東側' },
    ],
    monsters: [
      { monsterId: 'smuggler_cache_guard', maxCount: 1, respawnSeconds: 300 },
      { monsterId: 'caravan_rut_cutpurse', maxCount: 2, respawnSeconds: 95 },
    ],
    mapSymbol: '[藏]',
    mapX: 3,
    mapY: -1,
    guardianHints: {
      creature: '走私藏點的路旁草影若突然低伏，附近伏擊者通常已經就位。',
      treasure: '走私藏點的路標、車轍或香灰旁可能藏著朝聖古道任務線索。',
      spirit: '走私藏點保留著巡禮者、商隊與伏擊者反覆踏過古道的記憶。',
    },
  },

pilgrim_road_white_marker: {
    id: 'pilgrim_road_white_marker',
    name: '白石路標',
    zone: 'pilgrim_road' as RoomDef['zone'],
    image: 'pilgrim_road_white_marker.png',
    imagePrompt: '白石路標 in pilgrim_road, ancient pilgrimage road with broken stone slabs, roadside shrines, caravan tracks, dry grass, white markers and ambush shadows, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function entrance, terrain road, clear lantern light',
    description:
      '白石路標位於朝聖古道斷續延伸的石板路上，白石路標、鐘鈴小祠、商隊車轍與荒草裡的伏擊痕跡共同標出通往古老聖地的方向。這裡是低中階任務路線與野外遭遇節點，玩家可以 inspect 路標、香灰、車轍和暗哨刻痕來判斷朝聖者與盜匪的行蹤，也能 search 乾井、舊營地、廢棄旅舍和聖碑旁尋找委託線索。若隊伍忽略彎道視線、墓地岔路與商隊殘貨，盜匪、哥布林、狼群與骷髏會從路旁包抄；若穩定沿白石標記推進，則能抵達聖地門與終點聖碑，並確認回程路標、補給水袋、隊伍位置與夜間守望仍然安全可靠無虞。',
    exits: [
      { direction: 'west', targetRoomId: 'pilgrim_road_saint_bridge', description: '白石路標回到聖徒橋' },
      { direction: 'south', targetRoomId: 'pilgrim_road_ambush_bend', description: '斜坡回到伏擊彎道', edgeKind: 'distant_route', edgeNote: '此出口依世界全圖座標不是相鄰一格，實際路程長於相鄰一格，保留為明確特殊路線。' },
      { direction: 'east', targetRoomId: 'pilgrim_road_old_cemetery_turn', description: '舊墓岔路在東側' },
    ],
    monsters: [
      { monsterId: 'saint_bridge_penitent', maxCount: 1, respawnSeconds: 260 },
      { monsterId: 'milestone_crow_herald', maxCount: 2, respawnSeconds: 80 },
    ],
    mapSymbol: '[白]',
    mapX: 4,
    mapY: 1,
    guardianHints: {
      creature: '白石路標的路旁草影若突然低伏，附近伏擊者通常已經就位。',
      treasure: '白石路標的路標、車轍或香灰旁可能藏著朝聖古道任務線索。',
      spirit: '白石路標保留著巡禮者、商隊與伏擊者反覆踏過古道的記憶。',
    },
  },

pilgrim_road_broken_causeway: {
    id: 'pilgrim_road_broken_causeway',
    name: '斷石道',
    zone: 'pilgrim_road' as RoomDef['zone'],
    image: 'pilgrim_road_broken_causeway.png',
    imagePrompt: '斷石道 in pilgrim_road, ancient pilgrimage road with broken stone slabs, roadside shrines, caravan tracks, dry grass, white markers and ambush shadows, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function entrance, terrain road, clear lantern light',
    description:
      '斷石道位於朝聖古道斷續延伸的石板路上，白石路標、鐘鈴小祠、商隊車轍與荒草裡的伏擊痕跡共同標出通往古老聖地的方向。這裡是低中階任務路線與野外遭遇節點，玩家可以 inspect 路標、香灰、車轍和暗哨刻痕來判斷朝聖者與盜匪的行蹤，也能 search 乾井、舊營地、廢棄旅舍和聖碑旁尋找委託線索。若隊伍忽略彎道視線、墓地岔路與商隊殘貨，盜匪、哥布林、狼群與骷髏會從路旁包抄；若穩定沿白石標記推進，則能抵達聖地門與終點聖碑，並確認回程路標、補給水袋、隊伍位置與夜間守望仍然安全可靠無虞。',
    exits: [
      { direction: 'west', targetRoomId: 'pilgrim_road_ambush_bend', description: '斷石道回到伏擊彎道' },
      { direction: 'east', targetRoomId: 'pilgrim_road_sunset_camp', description: '日暮營地在東側' },
    ],
    monsters: [
      { monsterId: 'drywell_ambusher', maxCount: 1, respawnSeconds: 110 },
      { monsterId: 'smuggler_cache_guard', maxCount: 1, respawnSeconds: 300 },
    ],
    mapSymbol: '[斷]',
    mapX: 5,
    mapY: 0,
    guardianHints: {
      creature: '斷石道的路旁草影若突然低伏，附近伏擊者通常已經就位。',
      treasure: '斷石道的路標、車轍或香灰旁可能藏著朝聖古道任務線索。',
      spirit: '斷石道保留著巡禮者、商隊與伏擊者反覆踏過古道的記憶。',
    },
  },

pilgrim_road_bandit_watch: {
    id: 'pilgrim_road_bandit_watch',
    name: '盜匪望臺',
    zone: 'pilgrim_road' as RoomDef['zone'],
    image: 'pilgrim_road_bandit_watch.png',
    imagePrompt: '盜匪望臺 in pilgrim_road, ancient pilgrimage road with broken stone slabs, roadside shrines, caravan tracks, dry grass, white markers and ambush shadows, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function entrance, terrain road, clear lantern light',
    description:
      '盜匪望臺位於朝聖古道斷續延伸的石板路上，白石路標、鐘鈴小祠、商隊車轍與荒草裡的伏擊痕跡共同標出通往古老聖地的方向。這裡是低中階任務路線與野外遭遇節點，玩家可以 inspect 路標、香灰、車轍和暗哨刻痕來判斷朝聖者與盜匪的行蹤，也能 search 乾井、舊營地、廢棄旅舍和聖碑旁尋找委託線索。若隊伍忽略彎道視線、墓地岔路與商隊殘貨，盜匪、哥布林、狼群與骷髏會從路旁包抄；若穩定沿白石標記推進，則能抵達聖地門與終點聖碑，並確認回程路標、補給水袋、隊伍位置與夜間守望仍然安全可靠無虞。',
    exits: [
      { direction: 'west', targetRoomId: 'pilgrim_road_smuggler_cache', description: '盜匪望臺回到走私藏點' },
      { direction: 'east', targetRoomId: 'pilgrim_road_sunset_camp', description: '東側盜匪望臺沿暗哨土脊橫移，繞過瞭望繩梯與落日營火線抵達日暮營地', edgeKind: 'distant_route', edgeNote: '盜匪望臺到日暮營地需沿暗哨土脊與瞭望繩梯橫移，實際路程長於相鄰一格。' },
    ],
    monsters: [
      { monsterId: 'smuggler_cache_guard', maxCount: 1, respawnSeconds: 300 },
      { monsterId: 'caravan_rut_cutpurse', maxCount: 2, respawnSeconds: 95 },
    ],
    mapSymbol: '[望]',
    mapX: 4,
    mapY: -1,
    guardianHints: {
      creature: '盜匪望臺的路旁草影若突然低伏，附近伏擊者通常已經就位。',
      treasure: '盜匪望臺的路標、車轍或香灰旁可能藏著朝聖古道任務線索。',
      spirit: '盜匪望臺保留著巡禮者、商隊與伏擊者反覆踏過古道的記憶。',
    },
  },

pilgrim_road_old_cemetery_turn: {
    id: 'pilgrim_road_old_cemetery_turn',
    name: '舊墓岔路',
    zone: 'pilgrim_road' as RoomDef['zone'],
    image: 'pilgrim_road_old_cemetery_turn.png',
    imagePrompt: '舊墓岔路 in pilgrim_road, ancient pilgrimage road with broken stone slabs, roadside shrines, caravan tracks, dry grass, white markers and ambush shadows, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function entrance, terrain road, clear lantern light',
    description:
      '舊墓岔路位於朝聖古道斷續延伸的石板路上，白石路標、鐘鈴小祠、商隊車轍與荒草裡的伏擊痕跡共同標出通往古老聖地的方向。這裡是低中階任務路線與野外遭遇節點，玩家可以 inspect 路標、香灰、車轍和暗哨刻痕來判斷朝聖者與盜匪的行蹤，也能 search 乾井、舊營地、廢棄旅舍和聖碑旁尋找委託線索。若隊伍忽略彎道視線、墓地岔路與商隊殘貨，盜匪、哥布林、狼群與骷髏會從路旁包抄；若穩定沿白石標記推進，則能抵達聖地門與終點聖碑，並確認回程路標、補給水袋、隊伍位置與夜間守望仍然安全可靠無虞。',
    exits: [
      { direction: 'west', targetRoomId: 'pilgrim_road_white_marker', description: '舊墓岔路回到白石路標' },
      { direction: 'south', targetRoomId: 'pilgrim_road_sunset_camp', description: '南側舊墓岔路沿碎墓碑小徑斜落，穿過枯草墓牆與落日營火線抵達日暮營地', edgeKind: 'distant_route', edgeNote: '舊墓岔路到日暮營地需沿碎墓碑小徑與墓牆斜行，實際路程長於相鄰一格。' },
    ],
    monsters: [
      { monsterId: 'saint_bridge_penitent', maxCount: 1, respawnSeconds: 260 },
      { monsterId: 'shrine_bell_wraith', maxCount: 2, respawnSeconds: 120 },
    ],
    mapSymbol: '[墓]',
    mapX: 5,
    mapY: 1,
    guardianHints: {
      creature: '舊墓岔路的路旁草影若突然低伏，附近伏擊者通常已經就位。',
      treasure: '舊墓岔路的路標、車轍或香灰旁可能藏著朝聖古道任務線索。',
      spirit: '舊墓岔路保留著巡禮者、商隊與伏擊者反覆踏過古道的記憶。',
    },
  },

pilgrim_road_sunset_camp: {
    id: 'pilgrim_road_sunset_camp',
    name: '日暮營地',
    zone: 'pilgrim_road' as RoomDef['zone'],
    image: 'pilgrim_road_sunset_camp.png',
    imagePrompt: '日暮營地 in pilgrim_road, ancient pilgrimage road with broken stone slabs, roadside shrines, caravan tracks, dry grass, white markers and ambush shadows, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function entrance, terrain road, clear lantern light',
    description:
      '日暮營地位於朝聖古道斷續延伸的石板路上，白石路標、鐘鈴小祠、商隊車轍與荒草裡的伏擊痕跡共同標出通往古老聖地的方向。這裡是低中階任務路線與野外遭遇節點，玩家可以 inspect 路標、香灰、車轍和暗哨刻痕來判斷朝聖者與盜匪的行蹤，也能 search 乾井、舊營地、廢棄旅舍和聖碑旁尋找委託線索。若隊伍忽略彎道視線、墓地岔路與商隊殘貨，盜匪、哥布林、狼群與骷髏會從路旁包抄；若穩定沿白石標記推進，則能抵達聖地門與終點聖碑，並確認回程路標、補給水袋、隊伍位置與夜間守望仍然安全可靠無虞。',
    exits: [
      { direction: 'west', targetRoomId: 'pilgrim_road_broken_causeway', description: '日暮營地回到斷石道' },
      { direction: 'north', targetRoomId: 'pilgrim_road_old_cemetery_turn', description: '北側日暮營地沿落日營火線回穿，穿過枯草墓牆與碎墓碑小徑回到舊墓岔路', edgeKind: 'distant_route', edgeNote: '日暮營地回舊墓岔路需沿營火線與碎墓碑小徑回穿，實際路程長於相鄰一格。' },
      { direction: 'east', targetRoomId: 'pilgrim_road_sanctuary_gate', description: '聖地門在東側' },
      { direction: 'south', targetRoomId: 'sapphire_lake_entry_claim', description: '南側白石路標沿乾涸支道下切，越過湖岸礫坡通往藍寶石湖入口界標', edgeKind: 'distant_route', edgeNote: '日暮營地南下藍寶石湖需離開古道並繞過湖岸礫坡，實際路程長於相鄰一格。' },
    ],
    monsters: [
      { monsterId: 'final_marker_lightsworn', maxCount: 1, respawnSeconds: 360 },
      { monsterId: 'smuggler_cache_guard', maxCount: 1, respawnSeconds: 300 },
    ],
    mapSymbol: '[營]',
    mapX: 6,
    mapY: 0,
    guardianHints: {
      creature: '日暮營地的路旁草影若突然低伏，附近伏擊者通常已經就位。',
      treasure: '日暮營地的路標、車轍或香灰旁可能藏著朝聖古道任務線索。',
      spirit: '日暮營地保留著巡禮者、商隊與伏擊者反覆踏過古道的記憶。',
    },
  },

pilgrim_road_sanctuary_gate: {
    id: 'pilgrim_road_sanctuary_gate',
    name: '聖地門',
    zone: 'pilgrim_road' as RoomDef['zone'],
    image: 'pilgrim_road_sanctuary_gate.png',
    imagePrompt: '聖地門 in pilgrim_road, ancient pilgrimage road with broken stone slabs, roadside shrines, caravan tracks, dry grass, white markers and ambush shadows, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function entrance, terrain road, clear lantern light',
    description:
      '聖地門位於朝聖古道斷續延伸的石板路上，白石路標、鐘鈴小祠、商隊車轍與荒草裡的伏擊痕跡共同標出通往古老聖地的方向。這裡是低中階任務路線與野外遭遇節點，玩家可以 inspect 路標、香灰、車轍和暗哨刻痕來判斷朝聖者與盜匪的行蹤，也能 search 乾井、舊營地、廢棄旅舍和聖碑旁尋找委託線索。若隊伍忽略彎道視線、墓地岔路與商隊殘貨，盜匪、哥布林、狼群與骷髏會從路旁包抄；若穩定沿白石標記推進，則能抵達聖地門與終點聖碑，並確認回程路標、補給水袋、隊伍位置與夜間守望仍然安全可靠無虞。',
    exits: [
      { direction: 'west', targetRoomId: 'pilgrim_road_sunset_camp', description: '聖地門回到日暮營地' },
      { direction: 'east', targetRoomId: 'pilgrim_road_final_marker', description: '終點聖碑在東側' },
      { direction: 'south', targetRoomId: 'sapphire_lake_vein_path', description: '南側聖地門階道沿礦脈石徑下降，接入藍寶石湖畔的發光礦脈路', edgeKind: 'distant_route', edgeNote: '聖地門南下藍寶石湖需穿過聖地外階與礦脈石徑，實際路程長於相鄰一格。' },
      {
        direction: 'north',
        targetRoomId: 'lakeside_town_fill_15_6',
        description: '北側石階沿古道邊牆上行，接回湖畔城鎮商店旁巷',
        edgeKind: 'distant_route',
        edgeNote: '聖地門北返湖畔城鎮需穿過古道邊牆與城鎮巷口，實際路程長於相鄰一格。',
      },
    ],
    monsters: [
      { monsterId: 'final_marker_lightsworn', maxCount: 1, respawnSeconds: 360 },
      { monsterId: 'sanctuary_gate_trialkeeper', maxCount: 1, respawnSeconds: 1200 },
    ],
    mapSymbol: '[聖]',
    mapX: 7,
    mapY: 0,
    guardianHints: {
      creature: '聖地門的路旁草影若突然低伏，附近伏擊者通常已經就位。',
      treasure: '聖地門的路標、車轍或香灰旁可能藏著朝聖古道任務線索。',
      spirit: '聖地門保留著巡禮者、商隊與伏擊者反覆踏過古道的記憶。',
    },
  },

pilgrim_road_final_marker: {
    id: 'pilgrim_road_final_marker',
    name: '終點聖碑',
    zone: 'pilgrim_road' as RoomDef['zone'],
    image: 'pilgrim_road_final_marker.png',
    imagePrompt: '終點聖碑 in pilgrim_road, ancient pilgrimage road with broken stone slabs, roadside shrines, caravan tracks, dry grass, white markers and ambush shadows, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function entrance, terrain road, clear lantern light',
    description:
      '終點聖碑位於朝聖古道斷續延伸的石板路上，白石路標、鐘鈴小祠、商隊車轍與荒草裡的伏擊痕跡共同標出通往古老聖地的方向。這裡是低中階任務路線與野外遭遇節點，玩家可以 inspect 路標、香灰、車轍和暗哨刻痕來判斷朝聖者與盜匪的行蹤，也能 search 乾井、舊營地、廢棄旅舍和聖碑旁尋找委託線索。若隊伍忽略彎道視線、墓地岔路與商隊殘貨，盜匪、哥布林、狼群與骷髏會從路旁包抄；若穩定沿白石標記推進，則能抵達聖地門與終點聖碑，並確認回程路標、補給水袋、隊伍位置與夜間守望仍然安全可靠無虞。',
    exits: [
      { direction: 'west', targetRoomId: 'pilgrim_road_sanctuary_gate', description: '終點聖碑回到聖地門' },
      { direction: 'south', targetRoomId: 'pilgrim_road_quiet_overlook', description: '靜望臺在南側', edgeKind: 'distant_route', edgeNote: '此出口依世界全圖座標不是相鄰一格，實際路程長於相鄰一格，保留為明確特殊路線。' },
    ],
    monsters: [
      { monsterId: 'sanctuary_gate_trialkeeper', maxCount: 1, respawnSeconds: 1200 },
      { monsterId: 'final_marker_lightsworn', maxCount: 1, respawnSeconds: 360 },
    ],
    mapSymbol: '[碑]',
    mapX: 8,
    mapY: 0,
    guardianHints: {
      creature: '終點聖碑的路旁草影若突然低伏，附近伏擊者通常已經就位。',
      treasure: '終點聖碑的路標、車轍或香灰旁可能藏著朝聖古道任務線索。',
      spirit: '終點聖碑保留著巡禮者、商隊與伏擊者反覆踏過古道的記憶。',
    },
  },

pilgrim_road_quiet_overlook: {
    id: 'pilgrim_road_quiet_overlook',
    name: '靜望臺',
    zone: 'pilgrim_road' as RoomDef['zone'],
    image: 'pilgrim_road_quiet_overlook.png',
    imagePrompt: '靜望臺 in pilgrim_road, ancient pilgrimage road with broken stone slabs, roadside shrines, caravan tracks, dry grass, white markers and ambush shadows, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function entrance, terrain road, clear lantern light',
    description:
      '靜望臺位於朝聖古道斷續延伸的石板路上，白石路標、鐘鈴小祠、商隊車轍與荒草裡的伏擊痕跡共同標出通往古老聖地的方向。這裡是低中階任務路線與野外遭遇節點，玩家可以 inspect 路標、香灰、車轍和暗哨刻痕來判斷朝聖者與盜匪的行蹤，也能 search 乾井、舊營地、廢棄旅舍和聖碑旁尋找委託線索。若隊伍忽略彎道視線、墓地岔路與商隊殘貨，盜匪、哥布林、狼群與骷髏會從路旁包抄；若穩定沿白石標記推進，則能抵達聖地門與終點聖碑，並確認回程路標、補給水袋、隊伍位置與夜間守望仍然安全可靠無虞。古道在此處恰好觸及湖畔鎮商業區的邊緣，北面鍛坊的爐火隱約可見，東側裁縫坊的布旗隨風飄動，提醒旅人已靠近城鎮補給圈。',
    exits: [
      { direction: 'north', targetRoomId: 'pilgrim_road_final_marker', description: '靜望臺回到終點聖碑', edgeKind: 'distant_route', edgeNote: '此出口依世界全圖座標不是相鄰一格，實際路程長於相鄰一格，保留為明確特殊路線。' },
      { direction: 'east', targetRoomId: 'lakeside_tailor', description: '東側布旗小徑穿過古道望臺與湖畔商業巷，抵達城鎮裁縫坊門前', edgeKind: 'distant_route', edgeNote: '靜望臺東入湖畔裁縫坊需穿過古道望臺與商業巷口，實際路程長於相鄰一格。' },
      {
        direction: 'west',
        targetRoomId: 'lakeside_town_fill_15_6',
        description: '西側湖畔石巷穿過市鎮邊門與古道望臺之間的斜坡',
        edgeKind: 'distant_route',
        edgeNote: '靜望臺西返湖畔城鎮需穿過市鎮邊門與古道斜坡，實際路程長於相鄰一格。',
      },
    ],
    monsters: [
      { monsterId: 'final_marker_lightsworn', maxCount: 1, respawnSeconds: 360 },
      { monsterId: 'milestone_crow_herald', maxCount: 2, respawnSeconds: 80 },
    ],
    mapSymbol: '[望]',
    mapX: 8,
    mapY: -1,
    guardianHints: {
      creature: '靜望臺的路旁草影若突然低伏，附近伏擊者通常已經就位。',
      treasure: '靜望臺的路標、車轍或香灰旁可能藏著朝聖古道任務線索。',
      spirit: '靜望臺保留著巡禮者、商隊與伏擊者反覆踏過古道的記憶。',
    },
  },

// ─── 鐵木要塞擴充 (Lv 18-30) ───────────────────────────

  ironwood_fort_portal_yard: {
    id: 'ironwood_fort_portal_yard',
    name: '傳送陣庭',
    zone: 'ironwood_fort' as RoomDef['zone'],
    image: 'ironwood_fort_portal_yard.png',
    imagePrompt: '傳送陣庭 in ironwood_fort, ironwood border fortress with black ironwood beams, battlements, war banners, forge glow, military supply crates, portal light and siege shadows, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function entrance, terrain fortress, clear lantern light',
    description:
      '傳送陣庭位於鐵木要塞的邊境防線內，黑鐵鉚釘、厚重鐵木梁、戰旗、軍械箱與傳送陣餘光交錯成緊張的戰備景象。這裡是王國戰與任務集結區，玩家可以 inspect 牆面箭痕、軍令牌、補給封條和暗哨記號來判斷前線動向，也能 search 兵器架、囚牢石縫、蓄水池邊和內堡門柱尋找軍需線索。若隊伍忽略城牆視線、地下補給道與烽火塔信號，傭兵、石像鬼、亡靈騎士與暗黑施法者會從多層通道夾擊；若穩定控制門庭、堡牆與指揮長廊，則能推進到高堡核心並守住回程傳送路線，同時保全軍令、傷員撤離與補給清點無誤。',
    exits: [
      { direction: 'east', targetRoomId: 'ironwood_fort_outer_gate', description: '鐵木外門在東側' },
      { direction: 'north', targetRoomId: 'ironwood_fort_quartermaster_row', description: '軍需行列在北側', edgeKind: 'distant_route', edgeNote: '此出口依世界全圖座標不是相鄰一格，實際路程長於相鄰一格，保留為明確特殊路線。' },
    ],
    monsters: [
      { monsterId: 'ironwood_gate_sentinel', maxCount: 2, respawnSeconds: 120 },
      { monsterId: 'quartermaster_renegade', maxCount: 1, respawnSeconds: 95 },
    ],
    mapSymbol: '[傳]',
    mapX: 0,
    mapY: 0,
    guardianHints: {
      creature: '傳送陣庭的守備聲響若突然停住，通常代表巡邏隊或伏擊者正在換位。',
      treasure: '傳送陣庭的軍械箱、封條或石縫旁可能藏著鐵木要塞任務線索。',
      spirit: '傳送陣庭仍殘留邊境軍團反覆宣誓、守城與撤退的記憶。',
    },
  },

ironwood_fort_outer_gate: {
    id: 'ironwood_fort_outer_gate',
    name: '鐵木外門',
    zone: 'ironwood_fort' as RoomDef['zone'],
    image: 'ironwood_fort_outer_gate.png',
    imagePrompt: '鐵木外門 in ironwood_fort, ironwood border fortress with black ironwood beams, battlements, war banners, forge glow, military supply crates, portal light and siege shadows, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function entrance, terrain fortress, clear lantern light',
    description:
      '鐵木外門位於鐵木要塞的邊境防線內，黑鐵鉚釘、厚重鐵木梁、戰旗、軍械箱與傳送陣餘光交錯成緊張的戰備景象。這裡是王國戰與任務集結區，玩家可以 inspect 牆面箭痕、軍令牌、補給封條和暗哨記號來判斷前線動向，也能 search 兵器架、囚牢石縫、蓄水池邊和內堡門柱尋找軍需線索。若隊伍忽略城牆視線、地下補給道與烽火塔信號，傭兵、石像鬼、亡靈騎士與暗黑施法者會從多層通道夾擊；若穩定控制門庭、堡牆與指揮長廊，則能推進到高堡核心並守住回程傳送路線，同時保全軍令、傷員撤離與補給清點無誤。',
    exits: [
      { direction: 'west', targetRoomId: 'ironwood_fort_portal_yard', description: '回到傳送陣庭' },
      { direction: 'east', targetRoomId: 'ironwood_fort_muster_square', description: '點兵廣場在東側' },
      { direction: 'north', targetRoomId: 'ironwood_fort_old_cistern', description: '北側濕冷支道回到舊蓄水池' },
      { direction: 'south', targetRoomId: 'ironwood_fort_west_bastion', description: '南側城牆石階接往西側堡牆' },
    ],
    monsters: [
      { monsterId: 'ironwood_gate_sentinel', maxCount: 2, respawnSeconds: 120 },
      { monsterId: 'bastion_crossbowman', maxCount: 1, respawnSeconds: 120 },
    ],
    mapSymbol: '[門]',
    mapX: 1,
    mapY: 0,
    guardianHints: {
      creature: '鐵木外門的守備聲響若突然停住，通常代表巡邏隊或伏擊者正在換位。',
      treasure: '鐵木外門的軍械箱、封條或石縫旁可能藏著鐵木要塞任務線索。',
      spirit: '鐵木外門仍殘留邊境軍團反覆宣誓、守城與撤退的記憶。',
    },
  },

ironwood_fort_muster_square: {
    id: 'ironwood_fort_muster_square',
    name: '點兵廣場',
    zone: 'ironwood_fort' as RoomDef['zone'],
    image: 'ironwood_fort_muster_square.png',
    imagePrompt: '點兵廣場 in ironwood_fort, ironwood border fortress with black ironwood beams, battlements, war banners, forge glow, military supply crates, portal light and siege shadows, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function entrance, terrain fortress, clear lantern light',
    description:
      '點兵廣場位於鐵木要塞的邊境防線內，黑鐵鉚釘、厚重鐵木梁、戰旗、軍械箱與傳送陣餘光交錯成緊張的戰備景象。這裡是王國戰與任務集結區，玩家可以 inspect 牆面箭痕、軍令牌、補給封條和暗哨記號來判斷前線動向，也能 search 兵器架、囚牢石縫、蓄水池邊和內堡門柱尋找軍需線索。若隊伍忽略城牆視線、地下補給道與烽火塔信號，傭兵、石像鬼、亡靈騎士與暗黑施法者會從多層通道夾擊；若穩定控制門庭、堡牆與指揮長廊，則能推進到高堡核心並守住回程傳送路線，同時保全軍令、傷員撤離與補給清點無誤。',
    exits: [
      { direction: 'west', targetRoomId: 'ironwood_fort_outer_gate', description: '回到鐵木外門' },
      { direction: 'east', targetRoomId: 'ironwood_fort_east_bastion', description: '東堡牆在東側' },
      { direction: 'north', targetRoomId: 'ironwood_fort_barracks_hall', description: '兵營大廳在北側', edgeKind: 'distant_route', edgeNote: '此出口依世界全圖座標不是相鄰一格，實際路程長於相鄰一格，保留為明確特殊路線。' },
      { direction: 'south', targetRoomId: 'ironwood_fort_supply_tunnel', description: '補給隧道在南側', edgeKind: 'distant_route', edgeNote: '此出口依世界全圖座標不是相鄰一格，實際路程長於相鄰一格，保留為明確特殊路線。' },
    ],
    monsters: [
      { monsterId: 'ironwood_gate_sentinel', maxCount: 2, respawnSeconds: 120 },
      { monsterId: 'quartermaster_renegade', maxCount: 2, respawnSeconds: 95 },
    ],
    mapSymbol: '[兵]',
    mapX: 2,
    mapY: 0,
    guardianHints: {
      creature: '點兵廣場的守備聲響若突然停住，通常代表巡邏隊或伏擊者正在換位。',
      treasure: '點兵廣場的軍械箱、封條或石縫旁可能藏著鐵木要塞任務線索。',
      spirit: '點兵廣場仍殘留邊境軍團反覆宣誓、守城與撤退的記憶。',
    },
  },

ironwood_fort_quartermaster_row: {
    id: 'ironwood_fort_quartermaster_row',
    name: '軍需行列',
    zone: 'ironwood_fort' as RoomDef['zone'],
    image: 'ironwood_fort_quartermaster_row.png',
    imagePrompt: '軍需行列 in ironwood_fort, ironwood border fortress with black ironwood beams, battlements, war banners, forge glow, military supply crates, portal light and siege shadows, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function entrance, terrain fortress, clear lantern light',
    description:
      '軍需行列位於鐵木要塞的邊境防線內，黑鐵鉚釘、厚重鐵木梁、戰旗、軍械箱與傳送陣餘光交錯成緊張的戰備景象。這裡是王國戰與任務集結區，玩家可以 inspect 牆面箭痕、軍令牌、補給封條和暗哨記號來判斷前線動向，也能 search 兵器架、囚牢石縫、蓄水池邊和內堡門柱尋找軍需線索。若隊伍忽略城牆視線、地下補給道與烽火塔信號，傭兵、石像鬼、亡靈騎士與暗黑施法者會從多層通道夾擊；若穩定控制門庭、堡牆與指揮長廊，則能推進到高堡核心並守住回程傳送路線，同時保全軍令、傷員撤離與補給清點無誤。',
    exits: [
      { direction: 'south', targetRoomId: 'ironwood_fort_portal_yard', description: '回到傳送陣庭', edgeKind: 'distant_route', edgeNote: '此出口依世界全圖座標不是相鄰一格，實際路程長於相鄰一格，保留為明確特殊路線。' },
      { direction: 'east', targetRoomId: 'ironwood_fort_west_bastion', description: '西堡牆在東側' },
      { direction: 'north', targetRoomId: 'ironwood_fort_forge_works', description: '鍛造工坊在北側', edgeKind: 'distant_route', edgeNote: '此出口依世界全圖座標不是相鄰一格，實際路程長於相鄰一格，保留為明確特殊路線。' },
    ],
    monsters: [
      { monsterId: 'quartermaster_renegade', maxCount: 2, respawnSeconds: 95 },
      { monsterId: 'ironwood_gate_sentinel', maxCount: 1, respawnSeconds: 120 },
    ],
    mapSymbol: '[需]',
    mapX: 0,
    mapY: 1,
    guardianHints: {
      creature: '軍需行列的守備聲響若突然停住，通常代表巡邏隊或伏擊者正在換位。',
      treasure: '軍需行列的軍械箱、封條或石縫旁可能藏著鐵木要塞任務線索。',
      spirit: '軍需行列仍殘留邊境軍團反覆宣誓、守城與撤退的記憶。',
    },
  },

ironwood_fort_west_bastion: {
    id: 'ironwood_fort_west_bastion',
    name: '西側堡牆',
    zone: 'ironwood_fort' as RoomDef['zone'],
    image: 'ironwood_fort_west_bastion.png',
    imagePrompt: '西側堡牆 in ironwood_fort, ironwood border fortress with black ironwood beams, battlements, war banners, forge glow, military supply crates, portal light and siege shadows, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function entrance, terrain fortress, clear lantern light',
    description:
      '西側堡牆位於鐵木要塞的邊境防線內，黑鐵鉚釘、厚重鐵木梁、戰旗、軍械箱與傳送陣餘光交錯成緊張的戰備景象。這裡是王國戰與任務集結區，玩家可以 inspect 牆面箭痕、軍令牌、補給封條和暗哨記號來判斷前線動向，也能 search 兵器架、囚牢石縫、蓄水池邊和內堡門柱尋找軍需線索。若隊伍忽略城牆視線、地下補給道與烽火塔信號，傭兵、石像鬼、亡靈騎士與暗黑施法者會從多層通道夾擊；若穩定控制門庭、堡牆與指揮長廊，則能推進到高堡核心並守住回程傳送路線，同時保全軍令、傷員撤離與補給清點無誤。',
    exits: [
      { direction: 'west', targetRoomId: 'ironwood_fort_quartermaster_row', description: '回到軍需行列' },
      { direction: 'north', targetRoomId: 'ironwood_fort_outer_gate', description: '北側城牆石階回到鐵木外門' },
      { direction: 'east', targetRoomId: 'ironwood_fort_barracks_hall', description: '牆道通往兵營' },
      { direction: 'south', targetRoomId: 'ironwood_fort_scout_roost', description: '南側外牆梯道通往斥候棲臺' },
    ],
    monsters: [
      { monsterId: 'bastion_crossbowman', maxCount: 2, respawnSeconds: 120 },
      { monsterId: 'ironwood_gate_sentinel', maxCount: 1, respawnSeconds: 120 },
    ],
    mapSymbol: '[西]',
    mapX: 1,
    mapY: 1,
    guardianHints: {
      creature: '西側堡牆的守備聲響若突然停住，通常代表巡邏隊或伏擊者正在換位。',
      treasure: '西側堡牆的軍械箱、封條或石縫旁可能藏著鐵木要塞任務線索。',
      spirit: '西側堡牆仍殘留邊境軍團反覆宣誓、守城與撤退的記憶。',
    },
  },

ironwood_fort_east_bastion: {
    id: 'ironwood_fort_east_bastion',
    name: '東側堡牆',
    zone: 'ironwood_fort' as RoomDef['zone'],
    image: 'ironwood_fort_east_bastion.png',
    imagePrompt: '東側堡牆 in ironwood_fort, ironwood border fortress with black ironwood beams, battlements, war banners, forge glow, military supply crates, portal light and siege shadows, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function entrance, terrain fortress, clear lantern light',
    description:
      '東側堡牆位於鐵木要塞的邊境防線內，黑鐵鉚釘、厚重鐵木梁、戰旗、軍械箱與傳送陣餘光交錯成緊張的戰備景象。這裡是王國戰與任務集結區，玩家可以 inspect 牆面箭痕、軍令牌、補給封條和暗哨記號來判斷前線動向，也能 search 兵器架、囚牢石縫、蓄水池邊和內堡門柱尋找軍需線索。若隊伍忽略城牆視線、地下補給道與烽火塔信號，傭兵、石像鬼、亡靈騎士與暗黑施法者會從多層通道夾擊；若穩定控制門庭、堡牆與指揮長廊，則能推進到高堡核心並守住回程傳送路線，同時保全軍令、傷員撤離與補給清點無誤。',
    exits: [
      { direction: 'west', targetRoomId: 'ironwood_fort_muster_square', description: '回到點兵廣場' },
      { direction: 'north', targetRoomId: 'ironwood_fort_signal_tower', description: '信號塔在北側', edgeKind: 'distant_route', edgeNote: '此出口依世界全圖座標不是相鄰一格，實際路程長於相鄰一格，保留為明確特殊路線。' },
      { direction: 'south', targetRoomId: 'ironwood_fort_hidden_sally', description: '隱蔽突門在南側', edgeKind: 'distant_route', edgeNote: '此出口依世界全圖座標不是相鄰一格，實際路程長於相鄰一格，保留為明確特殊路線。' },
    ],
    monsters: [
      { monsterId: 'bastion_crossbowman', maxCount: 2, respawnSeconds: 120 },
      { monsterId: 'signal_fire_sapper', maxCount: 1, respawnSeconds: 180 },
    ],
    mapSymbol: '[東]',
    mapX: 3,
    mapY: 0,
    guardianHints: {
      creature: '東側堡牆的守備聲響若突然停住，通常代表巡邏隊或伏擊者正在換位。',
      treasure: '東側堡牆的軍械箱、封條或石縫旁可能藏著鐵木要塞任務線索。',
      spirit: '東側堡牆仍殘留邊境軍團反覆宣誓、守城與撤退的記憶。',
    },
  },

ironwood_fort_barracks_hall: {
    id: 'ironwood_fort_barracks_hall',
    name: '兵營大廳',
    zone: 'ironwood_fort' as RoomDef['zone'],
    image: 'ironwood_fort_barracks_hall.png',
    imagePrompt: '兵營大廳 in ironwood_fort, ironwood border fortress with black ironwood beams, battlements, war banners, forge glow, military supply crates, portal light and siege shadows, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function entrance, terrain fortress, clear lantern light',
    description:
      '兵營大廳位於鐵木要塞的邊境防線內，黑鐵鉚釘、厚重鐵木梁、戰旗、軍械箱與傳送陣餘光交錯成緊張的戰備景象。這裡是王國戰與任務集結區，玩家可以 inspect 牆面箭痕、軍令牌、補給封條和暗哨記號來判斷前線動向，也能 search 兵器架、囚牢石縫、蓄水池邊和內堡門柱尋找軍需線索。若隊伍忽略城牆視線、地下補給道與烽火塔信號，傭兵、石像鬼、亡靈騎士與暗黑施法者會從多層通道夾擊；若穩定控制門庭、堡牆與指揮長廊，則能推進到高堡核心並守住回程傳送路線，同時保全軍令、傷員撤離與補給清點無誤。',
    exits: [
      { direction: 'south', targetRoomId: 'ironwood_fort_muster_square', description: '回到點兵廣場', edgeKind: 'distant_route', edgeNote: '此出口依世界全圖座標不是相鄰一格，實際路程長於相鄰一格，保留為明確特殊路線。' },
      { direction: 'west', targetRoomId: 'ironwood_fort_west_bastion', description: '牆道通往西堡牆' },
      { direction: 'east', targetRoomId: 'ironwood_fort_war_room', description: '東側軍械牆道穿過兵器架與戰旗廊，繞過上層轉角後抵達戰圖室門前', edgeKind: 'distant_route', edgeNote: '兵營大廳到戰圖室需要穿過軍械牆道與上層轉角，實際路程長於相鄰一格。' },
      { direction: 'north', targetRoomId: 'ironwood_fort_scout_roost', description: '北側哨兵木梯沿外牆折上，越過箭孔平台與守備吊橋後抵達斥候棲臺', edgeKind: 'distant_route', edgeNote: '兵營大廳北側到斥候棲臺有樓層落差與外牆平台，實際路程長於相鄰一格。' },
    ],
    monsters: [
      { monsterId: 'ironwood_gate_sentinel', maxCount: 2, respawnSeconds: 120 },
      { monsterId: 'prison_chain_jailer', maxCount: 1, respawnSeconds: 160 },
    ],
    mapSymbol: '[營]',
    mapX: 2,
    mapY: 1,
    guardianHints: {
      creature: '兵營大廳的守備聲響若突然停住，通常代表巡邏隊或伏擊者正在換位。',
      treasure: '兵營大廳的軍械箱、封條或石縫旁可能藏著鐵木要塞任務線索。',
      spirit: '兵營大廳仍殘留邊境軍團反覆宣誓、守城與撤退的記憶。',
    },
  },

ironwood_fort_forge_works: {
    id: 'ironwood_fort_forge_works',
    name: '鐵木鍛坊',
    zone: 'ironwood_fort' as RoomDef['zone'],
    image: 'ironwood_fort_forge_works.png',
    imagePrompt: '鐵木鍛坊 in ironwood_fort, ironwood border fortress with black ironwood beams, battlements, war banners, forge glow, military supply crates, portal light and siege shadows, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function entrance, terrain fortress, clear lantern light',
    description:
      '鐵木鍛坊位於鐵木要塞的邊境防線內，黑鐵鉚釘、厚重鐵木梁、戰旗、軍械箱與傳送陣餘光交錯成緊張的戰備景象。這裡是王國戰與任務集結區，玩家可以 inspect 牆面箭痕、軍令牌、補給封條和暗哨記號來判斷前線動向，也能 search 兵器架、囚牢石縫、蓄水池邊和內堡門柱尋找軍需線索。若隊伍忽略城牆視線、地下補給道與烽火塔信號，傭兵、石像鬼、亡靈騎士與暗黑施法者會從多層通道夾擊；若穩定控制門庭、堡牆與指揮長廊，則能推進到高堡核心並守住回程傳送路線，同時保全軍令、傷員撤離與補給清點無誤。',
    exits: [
      { direction: 'south', targetRoomId: 'ironwood_fort_quartermaster_row', description: '回到軍需行列', edgeKind: 'distant_route', edgeNote: '此出口依世界全圖座標不是相鄰一格，實際路程長於相鄰一格，保留為明確特殊路線。' },
      { direction: 'east', targetRoomId: 'ironwood_fort_scout_roost', description: '高架棧道通往斥候棲臺' },
      { direction: 'north', targetRoomId: 'ironwood_fort_ironwood_grove', description: '鐵木林圃在北側', edgeKind: 'distant_route', edgeNote: '此出口依世界全圖座標不是相鄰一格，實際路程長於相鄰一格，保留為明確特殊路線。' },
    ],
    monsters: [
      { monsterId: 'forge_cinder_guard', maxCount: 2, respawnSeconds: 150 },
      { monsterId: 'ironwood_rootwarden', maxCount: 1, respawnSeconds: 170 },
    ],
    mapSymbol: '[鍛]',
    mapX: 0,
    mapY: 2,
    guardianHints: {
      creature: '鐵木鍛坊的守備聲響若突然停住，通常代表巡邏隊或伏擊者正在換位。',
      treasure: '鐵木鍛坊的軍械箱、封條或石縫旁可能藏著鐵木要塞任務線索。',
      spirit: '鐵木鍛坊仍殘留邊境軍團反覆宣誓、守城與撤退的記憶。',
    },
  },

ironwood_fort_signal_tower: {
    id: 'ironwood_fort_signal_tower',
    name: '烽火信號塔',
    zone: 'ironwood_fort' as RoomDef['zone'],
    image: 'ironwood_fort_signal_tower.png',
    imagePrompt: '烽火信號塔 in ironwood_fort, ironwood border fortress with black ironwood beams, battlements, war banners, forge glow, military supply crates, portal light and siege shadows, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function entrance, terrain fortress, clear lantern light',
    description:
      '烽火信號塔位於鐵木要塞的邊境防線內，黑鐵鉚釘、厚重鐵木梁、戰旗、軍械箱與傳送陣餘光交錯成緊張的戰備景象。這裡是王國戰與任務集結區，玩家可以 inspect 牆面箭痕、軍令牌、補給封條和暗哨記號來判斷前線動向，也能 search 兵器架、囚牢石縫、蓄水池邊和內堡門柱尋找軍需線索。若隊伍忽略城牆視線、地下補給道與烽火塔信號，傭兵、石像鬼、亡靈騎士與暗黑施法者會從多層通道夾擊；若穩定控制門庭、堡牆與指揮長廊，則能推進到高堡核心並守住回程傳送路線，同時保全軍令、傷員撤離與補給清點無誤。',
    exits: [
      { direction: 'south', targetRoomId: 'ironwood_fort_east_bastion', description: '回到東側堡牆', edgeKind: 'distant_route', edgeNote: '此出口依世界全圖座標不是相鄰一格，實際路程長於相鄰一格，保留為明確特殊路線。' },
      { direction: 'west', targetRoomId: 'ironwood_fort_war_room', description: '西側信號牆道繞過烽火燃料架與旗語平台，沿塔身陰影通往戰圖室後門', edgeKind: 'distant_route', edgeNote: '烽火信號塔西側到戰圖室需經旗語平台與燃料架，實際路程長於相鄰一格。' },
      { direction: 'north', targetRoomId: 'ironwood_fort_command_walk', description: '指揮長廊在北側', edgeKind: 'distant_route', edgeNote: '此出口依世界全圖座標不是相鄰一格，實際路程長於相鄰一格，保留為明確特殊路線。' },
    ],
    monsters: [
      { monsterId: 'bastion_crossbowman', maxCount: 2, respawnSeconds: 120 },
      { monsterId: 'signal_fire_sapper', maxCount: 2, respawnSeconds: 180 },
    ],
    mapSymbol: '[烽]',
    mapX: 3,
    mapY: 1,
    guardianHints: {
      creature: '烽火信號塔的守備聲響若突然停住，通常代表巡邏隊或伏擊者正在換位。',
      treasure: '烽火信號塔的軍械箱、封條或石縫旁可能藏著鐵木要塞任務線索。',
      spirit: '烽火信號塔仍殘留邊境軍團反覆宣誓、守城與撤退的記憶。',
    },
  },

ironwood_fort_war_room: {
    id: 'ironwood_fort_war_room',
    name: '戰圖室',
    zone: 'ironwood_fort' as RoomDef['zone'],
    image: 'ironwood_fort_war_room.png',
    imagePrompt: '戰圖室 in ironwood_fort, ironwood border fortress with black ironwood beams, battlements, war banners, forge glow, military supply crates, portal light and siege shadows, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function entrance, terrain fortress, clear lantern light',
    description:
      '戰圖室位於鐵木要塞的邊境防線內，黑鐵鉚釘、厚重鐵木梁、戰旗、軍械箱與傳送陣餘光交錯成緊張的戰備景象。這裡是王國戰與任務集結區，玩家可以 inspect 牆面箭痕、軍令牌、補給封條和暗哨記號來判斷前線動向，也能 search 兵器架、囚牢石縫、蓄水池邊和內堡門柱尋找軍需線索。若隊伍忽略城牆視線、地下補給道與烽火塔信號，傭兵、石像鬼、亡靈騎士與暗黑施法者會從多層通道夾擊；若穩定控制門庭、堡牆與指揮長廊，則能推進到高堡核心並守住回程傳送路線，同時保全軍令、傷員撤離與補給清點無誤。',
    exits: [
      { direction: 'west', targetRoomId: 'ironwood_fort_barracks_hall', description: '西側戰旗廊穿過戰圖桌與軍械牆道，繞過上層轉角折回兵營大廳內門', edgeKind: 'distant_route', edgeNote: '戰圖室西側回兵營大廳需穿過戰旗廊與軍械牆道，實際路程長於相鄰一格。' },
      { direction: 'east', targetRoomId: 'ironwood_fort_signal_tower', description: '東側旗語平台繞過烽火燃料架，沿塔身陰影與石階通往烽火信號塔內梯', edgeKind: 'distant_route', edgeNote: '戰圖室東側到信號塔要經旗語平台與塔內階梯，實際路程長於相鄰一格。' },
      { direction: 'north', targetRoomId: 'ironwood_fort_oath_chapel', description: '誓約禮拜堂在北側', edgeKind: 'distant_route', edgeNote: '此出口依世界全圖座標不是相鄰一格，實際路程長於相鄰一格，保留為明確特殊路線。' },
    ],
    monsters: [
      { monsterId: 'command_tablet_construct', maxCount: 1, respawnSeconds: 360 },
      { monsterId: 'oath_chapel_knight', maxCount: 1, respawnSeconds: 320 },
    ],
    mapSymbol: '[圖]',
    mapX: 2,
    mapY: 2,
    guardianHints: {
      creature: '戰圖室的守備聲響若突然停住，通常代表巡邏隊或伏擊者正在換位。',
      treasure: '戰圖室的軍械箱、封條或石縫旁可能藏著鐵木要塞任務線索。',
      spirit: '戰圖室仍殘留邊境軍團反覆宣誓、守城與撤退的記憶。',
    },
  },

ironwood_fort_scout_roost: {
    id: 'ironwood_fort_scout_roost',
    name: '斥候棲臺',
    zone: 'ironwood_fort' as RoomDef['zone'],
    image: 'ironwood_fort_scout_roost.png',
    imagePrompt: '斥候棲臺 in ironwood_fort, ironwood border fortress with black ironwood beams, battlements, war banners, forge glow, military supply crates, portal light and siege shadows, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function entrance, terrain fortress, clear lantern light',
    description:
      '斥候棲臺位於鐵木要塞的邊境防線內，黑鐵鉚釘、厚重鐵木梁、戰旗、軍械箱與傳送陣餘光交錯成緊張的戰備景象。這裡是王國戰與任務集結區，玩家可以 inspect 牆面箭痕、軍令牌、補給封條和暗哨記號來判斷前線動向，也能 search 兵器架、囚牢石縫、蓄水池邊和內堡門柱尋找軍需線索。若隊伍忽略城牆視線、地下補給道與烽火塔信號，傭兵、石像鬼、亡靈騎士與暗黑施法者會從多層通道夾擊；若穩定控制門庭、堡牆與指揮長廊，則能推進到高堡核心並守住回程傳送路線，同時保全軍令、傷員撤離與補給清點無誤。',
    exits: [
      { direction: 'east', targetRoomId: 'ironwood_fort_barracks_hall', description: '東側外牆平台沿哨兵木梯折降，穿過箭孔陰影與守備吊橋回到兵營大廳', edgeKind: 'distant_route', edgeNote: '斥候棲臺東側回兵營大廳需沿外牆平台下樓並繞過箭孔平台，實際路程長於相鄰一格。' },
      { direction: 'west', targetRoomId: 'ironwood_fort_forge_works', description: '棧道通往鐵木鍛坊' },
      { direction: 'north', targetRoomId: 'ironwood_fort_west_bastion', description: '北側外牆梯道回到西側堡牆' },
      { direction: 'south', targetRoomId: 'ironwood_fort_prison_block', description: '南側囚牢石階通往囚牢石廊' },
    ],
    monsters: [
      { monsterId: 'bastion_crossbowman', maxCount: 2, respawnSeconds: 120 },
      { monsterId: 'signal_fire_sapper', maxCount: 1, respawnSeconds: 180 },
    ],
    mapSymbol: '[哨]',
    mapX: 1,
    mapY: 2,
    guardianHints: {
      creature: '斥候棲臺的守備聲響若突然停住，通常代表巡邏隊或伏擊者正在換位。',
      treasure: '斥候棲臺的軍械箱、封條或石縫旁可能藏著鐵木要塞任務線索。',
      spirit: '斥候棲臺仍殘留邊境軍團反覆宣誓、守城與撤退的記憶。',
    },
  },

ironwood_fort_prison_block: {
    id: 'ironwood_fort_prison_block',
    name: '囚牢石廊',
    zone: 'ironwood_fort' as RoomDef['zone'],
    image: 'ironwood_fort_prison_block.png',
    imagePrompt: '囚牢石廊 in ironwood_fort, ironwood border fortress with black ironwood beams, battlements, war banners, forge glow, military supply crates, portal light and siege shadows, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function entrance, terrain fortress, clear lantern light',
    description:
      '囚牢石廊位於鐵木要塞的邊境防線內，黑鐵鉚釘、厚重鐵木梁、戰旗、軍械箱與傳送陣餘光交錯成緊張的戰備景象。這裡是王國戰與任務集結區，玩家可以 inspect 牆面箭痕、軍令牌、補給封條和暗哨記號來判斷前線動向，也能 search 兵器架、囚牢石縫、蓄水池邊和內堡門柱尋找軍需線索。西側舊蓄水池水門從囚牢這端被鐵閘鎖死，只能從舊蓄水池石階進入囚牢石廊。若隊伍忽略城牆視線、地下補給道與烽火塔信號，傭兵、石像鬼、亡靈騎士與暗黑施法者會從多層通道夾擊；若穩定控制門庭、堡牆與指揮長廊，則能推進到高堡核心並守住回程傳送路線，同時保全軍令、傷員撤離與補給清點無誤。',
    exits: [
      { direction: 'north', targetRoomId: 'ironwood_fort_scout_roost', description: '北側囚牢石階回到斥候棲臺' },
      { direction: 'east', targetRoomId: 'ironwood_fort_oath_chapel', description: '禮拜堂側門在東側' },
    ],
    monsters: [
      { monsterId: 'prison_chain_jailer', maxCount: 2, respawnSeconds: 160 },
      { monsterId: 'command_tablet_construct', maxCount: 1, respawnSeconds: 360 },
    ],
    mapSymbol: '[牢]',
    mapX: 1,
    mapY: 3,
    guardianHints: {
      creature: '囚牢石廊的守備聲響若突然停住，通常代表巡邏隊或伏擊者正在換位。',
      treasure: '囚牢石廊的軍械箱、封條或石縫旁可能藏著鐵木要塞任務線索。',
      spirit: '囚牢石廊仍殘留邊境軍團反覆宣誓、守城與撤退的記憶。',
    },
  },

ironwood_fort_supply_tunnel: {
    id: 'ironwood_fort_supply_tunnel',
    name: '補給隧道',
    zone: 'ironwood_fort' as RoomDef['zone'],
    image: 'ironwood_fort_supply_tunnel.png',
    imagePrompt: '補給隧道 in ironwood_fort, ironwood border fortress with black ironwood beams, battlements, war banners, forge glow, military supply crates, portal light and siege shadows, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function entrance, terrain fortress, clear lantern light',
    description:
      '補給隧道位於鐵木要塞的邊境防線內，黑鐵鉚釘、厚重鐵木梁、戰旗、軍械箱與傳送陣餘光交錯成緊張的戰備景象。這裡是王國戰與任務集結區，玩家可以 inspect 牆面箭痕、軍令牌、補給封條和暗哨記號來判斷前線動向，也能 search 兵器架、囚牢石縫、蓄水池邊和內堡門柱尋找軍需線索。若隊伍忽略城牆視線、地下補給道與烽火塔信號，傭兵、石像鬼、亡靈騎士與暗黑施法者會從多層通道夾擊；若穩定控制門庭、堡牆與指揮長廊，則能推進到高堡核心並守住回程傳送路線，同時保全軍令、傷員撤離與補給清點無誤。',
    exits: [
      { direction: 'north', targetRoomId: 'ironwood_fort_muster_square', description: '回到點兵廣場', edgeKind: 'distant_route', edgeNote: '此出口依世界全圖座標不是相鄰一格，實際路程長於相鄰一格，保留為明確特殊路線。' },
      { direction: 'east', targetRoomId: 'ironwood_fort_hidden_sally', description: '暗道通往隱蔽突門' },
      { direction: 'west', targetRoomId: 'ironwood_fort_old_cistern', description: '濕冷支道通往舊蓄水池' },
    ],
    monsters: [
      { monsterId: 'quartermaster_renegade', maxCount: 2, respawnSeconds: 95 },
      { monsterId: 'signal_fire_sapper', maxCount: 1, respawnSeconds: 180 },
    ],
    mapSymbol: '[補]',
    mapX: 2,
    mapY: -1,
    guardianHints: {
      creature: '補給隧道的守備聲響若突然停住，通常代表巡邏隊或伏擊者正在換位。',
      treasure: '補給隧道的軍械箱、封條或石縫旁可能藏著鐵木要塞任務線索。',
      spirit: '補給隧道仍殘留邊境軍團反覆宣誓、守城與撤退的記憶。',
    },
  },

ironwood_fort_old_cistern: {
    id: 'ironwood_fort_old_cistern',
    name: '舊蓄水池',
    zone: 'ironwood_fort' as RoomDef['zone'],
    image: 'ironwood_fort_old_cistern.png',
    imagePrompt: '舊蓄水池 in ironwood_fort, ironwood border fortress with black ironwood beams, battlements, war banners, forge glow, military supply crates, portal light and siege shadows, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function entrance, terrain fortress, clear lantern light',
    description:
      '舊蓄水池位於鐵木要塞的邊境防線內，黑鐵鉚釘、厚重鐵木梁、戰旗、軍械箱與傳送陣餘光交錯成緊張的戰備景象。南側潮濕石階先接鐵木外門，再沿西側堡牆與斥候棲臺通往囚牢石廊。這裡是王國戰與任務集結區，玩家可以 inspect 牆面箭痕、軍令牌、補給封條和暗哨記號來判斷前線動向，也能 search 兵器架、囚牢石縫、蓄水池邊和內堡門柱尋找軍需線索。若隊伍忽略城牆視線、地下補給道與烽火塔信號，傭兵、石像鬼、亡靈騎士與暗黑施法者會從多層通道夾擊；若穩定控制門庭、堡牆與指揮長廊，則能推進到高堡核心並守住回程傳送路線，同時保全軍令、傷員撤離與補給清點無誤。',
    exits: [
      { direction: 'east', targetRoomId: 'ironwood_fort_supply_tunnel', description: '回到補給隧道' },
      { direction: 'south', targetRoomId: 'ironwood_fort_outer_gate', description: '南側潮濕石階沿舊水門坡道接到鐵木外門' },
    ],
    monsters: [
      { monsterId: 'prison_chain_jailer', maxCount: 1, respawnSeconds: 160 },
      { monsterId: 'ironwood_rootwarden', maxCount: 2, respawnSeconds: 170 },
    ],
    mapSymbol: '[池]',
    mapX: 1,
    mapY: -1,
    guardianHints: {
      creature: '舊蓄水池的守備聲響若突然停住，通常代表巡邏隊或伏擊者正在換位。',
      treasure: '舊蓄水池的軍械箱、封條或石縫旁可能藏著鐵木要塞任務線索。',
      spirit: '舊蓄水池仍殘留邊境軍團反覆宣誓、守城與撤退的記憶。',
    },
  },

ironwood_fort_ironwood_grove: {
    id: 'ironwood_fort_ironwood_grove',
    name: '鐵木林圃',
    zone: 'ironwood_fort' as RoomDef['zone'],
    image: 'ironwood_fort_ironwood_grove.png',
    imagePrompt: '鐵木林圃 in ironwood_fort, ironwood border fortress with black ironwood beams, battlements, war banners, forge glow, military supply crates, portal light and siege shadows, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function entrance, terrain fortress, clear lantern light',
    description:
      '鐵木林圃位於鐵木要塞的邊境防線內，黑鐵鉚釘、厚重鐵木梁、戰旗、軍械箱與傳送陣餘光交錯成緊張的戰備景象。這裡是王國戰與任務集結區，玩家可以 inspect 牆面箭痕、軍令牌、補給封條和暗哨記號來判斷前線動向，也能 search 兵器架、囚牢石縫、蓄水池邊和內堡門柱尋找軍需線索。若隊伍忽略城牆視線、地下補給道與烽火塔信號，傭兵、石像鬼、亡靈騎士與暗黑施法者會從多層通道夾擊；若穩定控制門庭、堡牆與指揮長廊，則能推進到高堡核心並守住回程傳送路線，同時保全軍令、傷員撤離與補給清點無誤。',
    exits: [
      { direction: 'south', targetRoomId: 'ironwood_fort_forge_works', description: '回到鐵木鍛坊', edgeKind: 'distant_route', edgeNote: '此出口依世界全圖座標不是相鄰一格，實際路程長於相鄰一格，保留為明確特殊路線。' },
      { direction: 'east', targetRoomId: 'ironwood_fort_prison_block', description: '木根小徑通往囚牢石廊' },
    ],
    monsters: [
      { monsterId: 'ironwood_rootwarden', maxCount: 2, respawnSeconds: 170 },
      { monsterId: 'forge_cinder_guard', maxCount: 1, respawnSeconds: 150 },
    ],
    mapSymbol: '[木]',
    mapX: 0,
    mapY: 3,
    guardianHints: {
      creature: '鐵木林圃的守備聲響若突然停住，通常代表巡邏隊或伏擊者正在換位。',
      treasure: '鐵木林圃的軍械箱、封條或石縫旁可能藏著鐵木要塞任務線索。',
      spirit: '鐵木林圃仍殘留邊境軍團反覆宣誓、守城與撤退的記憶。',
    },
  },

ironwood_fort_hidden_sally: {
    id: 'ironwood_fort_hidden_sally',
    name: '隱蔽突門',
    zone: 'ironwood_fort' as RoomDef['zone'],
    image: 'ironwood_fort_hidden_sally.png',
    imagePrompt: '隱蔽突門 in ironwood_fort, ironwood border fortress with black ironwood beams, battlements, war banners, forge glow, military supply crates, portal light and siege shadows, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function hidden, terrain fortress, clear lantern light',
    description:
      '隱蔽突門位於鐵木要塞的邊境防線內，黑鐵鉚釘、厚重鐵木梁、戰旗、軍械箱與傳送陣餘光交錯成緊張的戰備景象。這裡是王國戰與任務集結區，玩家可以 inspect 牆面箭痕、軍令牌、補給封條和暗哨記號來判斷前線動向，也能 search 兵器架、囚牢石縫、蓄水池邊和內堡門柱尋找軍需線索。若隊伍忽略城牆視線、地下補給道與烽火塔信號，傭兵、石像鬼、亡靈騎士與暗黑施法者會從多層通道夾擊；若穩定控制門庭、堡牆與指揮長廊，則能推進到高堡核心並守住回程傳送路線，同時保全軍令、傷員撤離與補給清點無誤。',
    exits: [
      { direction: 'west', targetRoomId: 'ironwood_fort_supply_tunnel', description: '回到補給隧道' },
      { direction: 'north', targetRoomId: 'ironwood_fort_east_bastion', description: '回到東側堡牆', edgeKind: 'distant_route', edgeNote: '此出口依世界全圖座標不是相鄰一格，實際路程長於相鄰一格，保留為明確特殊路線。' },
    ],
    monsters: [
      { monsterId: 'signal_fire_sapper', maxCount: 2, respawnSeconds: 180 },
      { monsterId: 'quartermaster_renegade', maxCount: 2, respawnSeconds: 95 },
    ],
    mapSymbol: '[突]',
    mapX: 3,
    mapY: -1,
    guardianHints: {
      creature: '隱蔽突門的守備聲響若突然停住，通常代表巡邏隊或伏擊者正在換位。',
      treasure: '隱蔽突門的軍械箱、封條或石縫旁可能藏著鐵木要塞任務線索。',
      spirit: '隱蔽突門仍殘留邊境軍團反覆宣誓、守城與撤退的記憶。',
    },
  },

ironwood_fort_command_walk: {
    id: 'ironwood_fort_command_walk',
    name: '指揮長廊',
    zone: 'ironwood_fort' as RoomDef['zone'],
    image: 'ironwood_fort_command_walk.png',
    imagePrompt: '指揮長廊 in ironwood_fort, ironwood border fortress with black ironwood beams, battlements, war banners, forge glow, military supply crates, portal light and siege shadows, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function entrance, terrain fortress, clear lantern light',
    description:
      '指揮長廊位於鐵木要塞的邊境防線內，黑鐵鉚釘、厚重鐵木梁、戰旗、軍械箱與傳送陣餘光交錯成緊張的戰備景象。這裡是王國戰與任務集結區，玩家可以 inspect 牆面箭痕、軍令牌、補給封條和暗哨記號來判斷前線動向，也能 search 兵器架、囚牢石縫、蓄水池邊和內堡門柱尋找軍需線索。若隊伍忽略城牆視線、地下補給道與烽火塔信號，傭兵、石像鬼、亡靈騎士與暗黑施法者會從多層通道夾擊；若穩定控制門庭、堡牆與指揮長廊，則能推進到高堡核心並守住回程傳送路線，同時保全軍令、傷員撤離與補給清點無誤。',
    exits: [
      { direction: 'south', targetRoomId: 'ironwood_fort_signal_tower', description: '回到烽火信號塔', edgeKind: 'distant_route', edgeNote: '此出口依世界全圖座標不是相鄰一格，實際路程長於相鄰一格，保留為明確特殊路線。' },
      { direction: 'west', targetRoomId: 'ironwood_fort_oath_chapel', description: '西側指揮長廊越過封令拱門與軍官座席，繞過戰旗屏風接到誓約禮拜堂側門', edgeKind: 'distant_route', edgeNote: '指揮長廊西側到禮拜堂需穿過封令拱門與座席區，實際路程長於相鄰一格。' },
      { direction: 'east', targetRoomId: 'ironwood_fort_keep_gate', description: '內堡門在東側', edgeKind: 'distant_route', edgeNote: '此出口依世界全圖座標不是相鄰一格，實際路程長於相鄰一格，保留為明確特殊路線。' },
    ],
    monsters: [
      { monsterId: 'command_tablet_construct', maxCount: 2, respawnSeconds: 360 },
      { monsterId: 'oath_chapel_knight', maxCount: 1, respawnSeconds: 320 },
    ],
    mapSymbol: '[令]',
    mapX: 3,
    mapY: 2,
    guardianHints: {
      creature: '指揮長廊的守備聲響若突然停住，通常代表巡邏隊或伏擊者正在換位。',
      treasure: '指揮長廊的軍械箱、封條或石縫旁可能藏著鐵木要塞任務線索。',
      spirit: '指揮長廊仍殘留邊境軍團反覆宣誓、守城與撤退的記憶。',
    },
  },

ironwood_fort_oath_chapel: {
    id: 'ironwood_fort_oath_chapel',
    name: '誓約禮拜堂',
    zone: 'ironwood_fort' as RoomDef['zone'],
    image: 'ironwood_fort_oath_chapel.png',
    imagePrompt: '誓約禮拜堂 in ironwood_fort, ironwood border fortress with black ironwood beams, battlements, war banners, forge glow, military supply crates, portal light and siege shadows, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function entrance, terrain fortress, clear lantern light',
    description:
      '誓約禮拜堂位於鐵木要塞的邊境防線內，黑鐵鉚釘、厚重鐵木梁、戰旗、軍械箱與傳送陣餘光交錯成緊張的戰備景象。這裡是王國戰與任務集結區，玩家可以 inspect 牆面箭痕、軍令牌、補給封條和暗哨記號來判斷前線動向，也能 search 兵器架、囚牢石縫、蓄水池邊和內堡門柱尋找軍需線索。若隊伍忽略城牆視線、地下補給道與烽火塔信號，傭兵、石像鬼、亡靈騎士與暗黑施法者會從多層通道夾擊；若穩定控制門庭、堡牆與指揮長廊，則能推進到高堡核心並守住回程傳送路線，同時保全軍令、傷員撤離與補給清點無誤。',
    exits: [
      { direction: 'south', targetRoomId: 'ironwood_fort_war_room', description: '回到戰圖室', edgeKind: 'distant_route', edgeNote: '此出口依世界全圖座標不是相鄰一格，實際路程長於相鄰一格，保留為明確特殊路線。' },
      { direction: 'west', targetRoomId: 'ironwood_fort_prison_block', description: '側廊通往囚牢石廊' },
      { direction: 'east', targetRoomId: 'ironwood_fort_command_walk', description: '東側側門穿過封令拱門與軍官座席，繞過戰旗屏風接回指揮長廊中央', edgeKind: 'distant_route', edgeNote: '誓約禮拜堂東側到指揮長廊需穿過封令拱門與座席區，實際路程長於相鄰一格。' },
      { direction: 'north', targetRoomId: 'ironwood_fort_keep_gate', description: '北側宣誓階梯沿黑鐵聖徽上行，繞過內堡閘鏈與守門鐵柱抵達內堡門', edgeKind: 'distant_route', edgeNote: '誓約禮拜堂北側到內堡門有宣誓階梯與閘鏈阻隔，實際路程長於相鄰一格。' },
    ],
    monsters: [
      { monsterId: 'oath_chapel_knight', maxCount: 2, respawnSeconds: 320 },
      { monsterId: 'command_tablet_construct', maxCount: 1, respawnSeconds: 360 },
    ],
    mapSymbol: '[誓]',
    mapX: 2,
    mapY: 3,
    guardianHints: {
      creature: '誓約禮拜堂的守備聲響若突然停住，通常代表巡邏隊或伏擊者正在換位。',
      treasure: '誓約禮拜堂的軍械箱、封條或石縫旁可能藏著鐵木要塞任務線索。',
      spirit: '誓約禮拜堂仍殘留邊境軍團反覆宣誓、守城與撤退的記憶。',
    },
  },

ironwood_fort_keep_gate: {
    id: 'ironwood_fort_keep_gate',
    name: '內堡門',
    zone: 'ironwood_fort' as RoomDef['zone'],
    image: 'ironwood_fort_keep_gate.png',
    imagePrompt: '內堡門 in ironwood_fort, ironwood border fortress with black ironwood beams, battlements, war banners, forge glow, military supply crates, portal light and siege shadows, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function entrance, terrain fortress, clear lantern light',
    description:
      '內堡門位於鐵木要塞的邊境防線內，黑鐵鉚釘、厚重鐵木梁、戰旗、軍械箱與傳送陣餘光交錯成緊張的戰備景象。這裡是王國戰與任務集結區，玩家可以 inspect 牆面箭痕、軍令牌、補給封條和暗哨記號來判斷前線動向，也能 search 兵器架、囚牢石縫、蓄水池邊和內堡門柱尋找軍需線索。若隊伍忽略城牆視線、地下補給道與烽火塔信號，傭兵、石像鬼、亡靈騎士與暗黑施法者會從多層通道夾擊；若穩定控制門庭、堡牆與指揮長廊，則能推進到高堡核心並守住回程傳送路線，同時保全軍令、傷員撤離與補給清點無誤。',
    exits: [
      { direction: 'west', targetRoomId: 'ironwood_fort_command_walk', description: '回到指揮長廊', edgeKind: 'distant_route', edgeNote: '此出口依世界全圖座標不是相鄰一格，實際路程長於相鄰一格，保留為明確特殊路線。' },
      { direction: 'south', targetRoomId: 'ironwood_fort_oath_chapel', description: '南側內堡閘鏈旁的宣誓階梯折降，沿黑鐵聖徽與守門鐵柱回到誓約禮拜堂', edgeKind: 'distant_route', edgeNote: '內堡門南側回禮拜堂需沿宣誓階梯折降並繞過閘鏈，實際路程長於相鄰一格。' },
      { direction: 'east', targetRoomId: 'ironwood_fort_high_keep', description: '高堡核心在東側' },
    ],
    monsters: [
      { monsterId: 'oath_chapel_knight', maxCount: 1, respawnSeconds: 320 },
      { monsterId: 'command_tablet_construct', maxCount: 2, respawnSeconds: 360 },
    ],
    mapSymbol: '[堡]',
    mapX: 3,
    mapY: 3,
    guardianHints: {
      creature: '內堡門的守備聲響若突然停住，通常代表巡邏隊或伏擊者正在換位。',
      treasure: '內堡門的軍械箱、封條或石縫旁可能藏著鐵木要塞任務線索。',
      spirit: '內堡門仍殘留邊境軍團反覆宣誓、守城與撤退的記憶。',
    },
  },

ironwood_fort_high_keep: {
    id: 'ironwood_fort_high_keep',
    name: '高堡核心',
    zone: 'ironwood_fort' as RoomDef['zone'],
    image: 'ironwood_fort_high_keep.png',
    imagePrompt: '高堡核心 in ironwood_fort, ironwood border fortress with black ironwood beams, battlements, war banners, forge glow, military supply crates, portal light and siege shadows, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function entrance, terrain fortress, clear lantern light',
    description:
      '高堡核心位於鐵木要塞的邊境防線內，黑鐵鉚釘、厚重鐵木梁、戰旗、軍械箱與傳送陣餘光交錯成緊張的戰備景象。這裡是王國戰與任務集結區，玩家可以 inspect 牆面箭痕、軍令牌、補給封條和暗哨記號來判斷前線動向，也能 search 兵器架、囚牢石縫、蓄水池邊和內堡門柱尋找軍需線索。若隊伍忽略城牆視線、地下補給道與烽火塔信號，傭兵、石像鬼、亡靈騎士與暗黑施法者會從多層通道夾擊；若穩定控制門庭、堡牆與指揮長廊，則能推進到高堡核心並守住回程傳送路線，同時保全軍令、傷員撤離與補給清點無誤。',
    exits: [
      { direction: 'west', targetRoomId: 'ironwood_fort_keep_gate', description: '回到內堡門' },
    ],
    monsters: [
      { monsterId: 'high_keep_warmarshal', maxCount: 1, respawnSeconds: 1500 },
      { monsterId: 'command_tablet_construct', maxCount: 1, respawnSeconds: 360 },
      { monsterId: 'oath_chapel_knight', maxCount: 1, respawnSeconds: 320 },
    ],
    mapSymbol: '[冠]',
    mapX: 4,
    mapY: 3,
    guardianHints: {
      creature: '高堡核心的守備聲響若突然停住，通常代表巡邏隊或伏擊者正在換位。',
      treasure: '高堡核心的軍械箱、封條或石縫旁可能藏著鐵木要塞任務線索。',
      spirit: '高堡核心仍殘留邊境軍團反覆宣誓、守城與撤退的記憶。',
    },
  },

// ─── 琥珀森林擴充 (Lv 20-32) ───────────────────────────

  amber_forest_entry_claim: {
    id: 'amber_forest_entry_claim',
    name: '採集入口界樁',
    zone: 'amber_forest' as RoomDef['zone'],
    image: 'amber_forest_entry_claim.png',
    imagePrompt: '採集入口界樁 in amber_forest, amber forest resource zone with golden resin, translucent tree roots, glowing insects trapped in amber, herb shelves, smoky bark, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function entrance, terrain forest, clear lantern light',
    description:
      '採集入口界樁立在琥珀森林外緣，金色樹脂從樹幹裂口緩慢淌下，把舊繩標、蟲翼和半透明根脈封在同一層光裡。界樁上刻著採集隊留下的短線記號，新的刮痕則沿根系往北伸向凝脂樹門。東側琥珀脈徑有淡亮礦脂在土面流動，北方樹門散出蜂蠟氣味，兩條路都帶著材料光澤，也都藏著被巡行獸群踩亂的落葉。',
    exits: [
      { direction: 'east', targetRoomId: 'amber_forest_vein_path', description: '琥珀脈徑在東側' },
      { direction: 'north', targetRoomId: 'amber_forest_resin_gate', description: '樹脂門在北側', edgeKind: 'distant_route', edgeNote: '此出口依世界全圖座標不是相鄰一格，實際路程長於相鄰一格，保留為明確特殊路線。' },
    ],
    monsters: [
      { monsterId: 'amber_sapling_lurker', maxCount: 2, respawnSeconds: 140 },
      { monsterId: 'resin_vein_lizard', maxCount: 1, respawnSeconds: 120 },
    ],
    mapSymbol: '[入]',
    mapX: 0,
    mapY: 0,
    guardianHints: {
      creature: '採集入口界樁的樹脂表面若出現新鮮震紋，附近魔物多半正沿根脈移動。',
      treasure: '採集入口界樁的琥珀裂縫、草根或封存昆蟲旁可能藏著高階採集材料。',
      spirit: '採集入口界樁保留著採集者迷路、標記與被森林封存的記憶。',
    },
  },

amber_forest_vein_path: {
    id: 'amber_forest_vein_path',
    name: '琥珀脈徑',
    zone: 'amber_forest' as RoomDef['zone'],
    image: 'amber_forest_vein_path.png',
    imagePrompt: '琥珀脈徑 in amber_forest, amber forest resource zone with golden resin, translucent tree roots, glowing insects trapped in amber, herb shelves, smoky bark, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function resource, terrain forest, clear lantern light',
    description:
      '琥珀脈徑沿著半露的樹脂礦脈向森林深處延伸，金黃脈線像凝固溪流一樣嵌在泥土和根鬚之間。西側仍能看見入口界樁的繩標，東面樹脂藥草層滲出潮濕草香，北方高處的金冠樹幕把陽光篩成碎片。脈徑兩旁封著發光昆蟲與斷裂採集刀，某些裂縫裡還有新鮮爪印，表示樹脂蜥與幼樹伏擊者會沿著溫熱根脈巡行。',
    exits: [
      { direction: 'west', targetRoomId: 'amber_forest_entry_claim', description: '回到採集入口界樁' },
      { direction: 'east', targetRoomId: 'amber_forest_herb_shelf', description: '藥草層在東側' },
      { direction: 'north', targetRoomId: 'amber_forest_golden_canopy', description: '金冠樹幕在北側', edgeKind: 'distant_route', edgeNote: '此出口依世界全圖座標不是相鄰一格，實際路程長於相鄰一格，保留為明確特殊路線。' },
    ],
    monsters: [
      { monsterId: 'resin_vein_lizard', maxCount: 2, respawnSeconds: 120 },
      { monsterId: 'amber_sapling_lurker', maxCount: 1, respawnSeconds: 140 },
    ],
    mapSymbol: '[脈]',
    mapX: 1,
    mapY: 0,
    guardianHints: {
      creature: '琥珀脈徑的樹脂表面若出現新鮮震紋，附近魔物多半正沿根脈移動。',
      treasure: '琥珀脈徑的琥珀裂縫、草根或封存昆蟲旁可能藏著高階採集材料。',
      spirit: '琥珀脈徑保留著採集者迷路、標記與被森林封存的記憶。',
    },
  },

amber_forest_herb_shelf: {
    id: 'amber_forest_herb_shelf',
    name: '樹脂藥草層',
    zone: 'amber_forest' as RoomDef['zone'],
    image: 'amber_forest_herb_shelf.png',
    imagePrompt: '樹脂藥草層 in amber_forest, amber forest resource zone with golden resin, translucent tree roots, glowing insects trapped in amber, herb shelves, smoky bark, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function resource, terrain forest, clear lantern light',
    description:
      '樹脂藥草層是一片被透明根脈托起的低矮平台，耐熱藥草從金色樹液邊緣鑽出，葉背沾著細小琥珀粉。西側琥珀脈徑的亮線在根下消失，東面琥珀水囊傳來悶悶水聲，北方封蠟蜂巢則有翅音從高枝間落下。平台上散著乾掉的包紮布和燒焦剪刀，草叢邊的蛛絲與螳螂足痕顯示採草時不能只看地面。',
    exits: [
      { direction: 'west', targetRoomId: 'amber_forest_vein_path', description: '回到琥珀脈徑' },
      { direction: 'east', targetRoomId: 'amber_forest_water_pocket', description: '水囊窪地在東側' },
      { direction: 'north', targetRoomId: 'amber_forest_wasp_nests', description: '蜂巢高枝在北側', edgeKind: 'distant_route', edgeNote: '此出口依世界全圖座標不是相鄰一格，實際路程長於相鄰一格，保留為明確特殊路線。' },
    ],
    monsters: [
      { monsterId: 'suntrap_bloom_mantis', maxCount: 1, respawnSeconds: 150 },
      { monsterId: 'smoke_resin_myconid', maxCount: 1, respawnSeconds: 160 },
    ],
    mapSymbol: '[草]',
    mapX: 2,
    mapY: 0,
    guardianHints: {
      creature: '樹脂藥草層的樹脂表面若出現新鮮震紋，附近魔物多半正沿根脈移動。',
      treasure: '樹脂藥草層的琥珀裂縫、草根或封存昆蟲旁可能藏著高階採集材料。',
      spirit: '樹脂藥草層保留著採集者迷路、標記與被森林封存的記憶。',
    },
  },

amber_forest_water_pocket: {
    id: 'amber_forest_water_pocket',
    name: '琥珀水囊',
    zone: 'amber_forest' as RoomDef['zone'],
    image: 'amber_forest_water_pocket.png',
    imagePrompt: '琥珀水囊 in amber_forest, amber forest resource zone with golden resin, translucent tree roots, glowing insects trapped in amber, herb shelves, smoky bark, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function resource, terrain forest, clear lantern light',
    description:
      '琥珀水囊藏在數條透明樹根交會處，根膜包住一池淡金色水，水面下封著細小氣泡與古老葉片。西側樹脂藥草層的草香被潮氣壓低，東面獸痕樹皮傳來粗糙刮擦聲，南方樹脂落溝則讓水囊邊緣不斷滴下黏稠樹液。水中偶爾掠過細長陰影，岸邊採水罐被咬出半月缺口，說明這片安靜水光也屬於潛伏生物的獵場。',
    exits: [
      { direction: 'west', targetRoomId: 'amber_forest_herb_shelf', description: '回到樹脂藥草層' },
      { direction: 'east', targetRoomId: 'amber_forest_beast_scrape', description: '獸痕樹皮在東側' },
      { direction: 'south', targetRoomId: 'amber_forest_sapfall_gully', description: '樹脂落溝在南側', edgeKind: 'distant_route', edgeNote: '此出口依世界全圖座標不是相鄰一格，實際路程長於相鄰一格，保留為明確特殊路線。' },
    ],
    monsters: [
      { monsterId: 'amber_water_serpent', maxCount: 2, respawnSeconds: 150 },
      { monsterId: 'resin_vein_lizard', maxCount: 1, respawnSeconds: 120 },
    ],
    mapSymbol: '[水]',
    mapX: 3,
    mapY: 0,
    guardianHints: {
      creature: '琥珀水囊的樹脂表面若出現新鮮震紋，附近魔物多半正沿根脈移動。',
      treasure: '琥珀水囊的琥珀裂縫、草根或封存昆蟲旁可能藏著高階採集材料。',
      spirit: '琥珀水囊保留著採集者迷路、標記與被森林封存的記憶。',
    },
  },

amber_forest_beast_scrape: {
    id: 'amber_forest_beast_scrape',
    name: '獸痕樹皮',
    zone: 'amber_forest' as RoomDef['zone'],
    image: 'amber_forest_beast_scrape.png',
    imagePrompt: '獸痕樹皮 in amber_forest, amber forest resource zone with golden resin, translucent tree roots, glowing insects trapped in amber, herb shelves, smoky bark, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function resource, terrain forest, clear lantern light',
    description:
      '獸痕樹皮所在的巨木被抓出數道深槽，樹脂從傷口湧出又凝成鋒利琥珀牙，像森林把攻擊者的爪印保存下來。西側琥珀水囊仍帶著潮濕氣味，東面封存遺物坑有金屬碰撞聲，北方焦木林列飄來灰燼，南側燼甲蟲丘則透出熱樹脂的紅光。樹根間散落斷裂獸角與被撕開的採集袋，新舊足印交疊，顯示此處成為獸群穿越森林的常用刮痕道。',
    exits: [
      { direction: 'west', targetRoomId: 'amber_forest_water_pocket', description: '回到琥珀水囊' },
      { direction: 'east', targetRoomId: 'amber_forest_relic_pit', description: '遺物坑在東側' },
      { direction: 'north', targetRoomId: 'amber_forest_charcoal_stand', description: '北側焦木灰坡回到焦木林列' },
      { direction: 'south', targetRoomId: 'amber_forest_ember_beetle_mound', description: '南側熱樹脂裂口接往燼甲蟲丘' },
    ],
    monsters: [
      { monsterId: 'suntrap_bloom_mantis', maxCount: 2, respawnSeconds: 150 },
      { monsterId: 'amber_water_serpent', maxCount: 1, respawnSeconds: 150 },
    ],
    mapSymbol: '[獸]',
    mapX: 4,
    mapY: 0,
    guardianHints: {
      creature: '獸痕樹皮的樹脂表面若出現新鮮震紋，附近魔物多半正沿根脈移動。',
      treasure: '獸痕樹皮的琥珀裂縫、草根或封存昆蟲旁可能藏著高階採集材料。',
      spirit: '獸痕樹皮保留著採集者迷路、標記與被森林封存的記憶。',
    },
  },

amber_forest_relic_pit: {
    id: 'amber_forest_relic_pit',
    name: '封存遺物坑',
    zone: 'amber_forest' as RoomDef['zone'],
    image: 'amber_forest_relic_pit.png',
    imagePrompt: '封存遺物坑 in amber_forest, amber forest resource zone with golden resin, translucent tree roots, glowing insects trapped in amber, herb shelves, smoky bark, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function resource, terrain forest, clear lantern light',
    description:
      '封存遺物坑塌在獸痕樹皮東側，坑底堆著被琥珀包住的採集刀、舊徽章、破燈和幾段不知年代的根骨。西側刮痕道的獸腥味沿坡滑下，北方石化花圃的冷白花光隔著樹影閃爍。坑壁樹脂像蜂蠟一樣層層封住遺物，某些物件卻有剛被翻動過的痕跡；坑邊還殘留重物拖曳出的溝槽，暗示晶化守衛會把闖入者也變成下一層封存品。',
    exits: [
      { direction: 'west', targetRoomId: 'amber_forest_beast_scrape', description: '回到獸痕樹皮' },
      { direction: 'north', targetRoomId: 'amber_forest_petrified_bloom', description: '石化花圃在北側', edgeKind: 'distant_route', edgeNote: '此出口依世界全圖座標不是相鄰一格，實際路程長於相鄰一格，保留為明確特殊路線。' },
    ],
    monsters: [
      { monsterId: 'petrified_resin_golem', maxCount: 1, respawnSeconds: 360 },
      { monsterId: 'resin_vein_lizard', maxCount: 2, respawnSeconds: 120 },
    ],
    mapSymbol: '[遺]',
    mapX: 5,
    mapY: 0,
    guardianHints: {
      creature: '封存遺物坑的樹脂表面若出現新鮮震紋，附近魔物多半正沿根脈移動。',
      treasure: '封存遺物坑的琥珀裂縫、草根或封存昆蟲旁可能藏著高階採集材料。',
      spirit: '封存遺物坑保留著採集者迷路、標記與被森林封存的記憶。',
    },
  },

amber_forest_resin_gate: {
    id: 'amber_forest_resin_gate',
    name: '凝脂樹門',
    zone: 'amber_forest' as RoomDef['zone'],
    image: 'amber_forest_resin_gate.png',
    imagePrompt: '凝脂樹門 in amber_forest, amber forest resource zone with golden resin, translucent tree roots, glowing insects trapped in amber, herb shelves, smoky bark, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function resource, terrain forest, clear lantern light',
    description:
      '凝脂樹門由兩株透明根木交纏而成，厚重樹脂在門縫間凝成金色簾幕，封著許多還在發光的昆蟲。南方入口界樁的繩標被樹液拉得筆直，東側金冠樹幕把枝葉垂到門楣上，形成一條向上延伸的亮路。門下堆著碎蠟、斷刺和被黏住的羽翼，偶爾有幼樹伏擊者在樹脂後方移動，使整扇樹門像仍在緩慢呼吸。',
    exits: [
      { direction: 'south', targetRoomId: 'amber_forest_entry_claim', description: '回到採集入口界樁', edgeKind: 'distant_route', edgeNote: '此出口依世界全圖座標不是相鄰一格，實際路程長於相鄰一格，保留為明確特殊路線。' },
      { direction: 'east', targetRoomId: 'amber_forest_golden_canopy', description: '金冠樹幕在東側' },
    ],
    monsters: [
      { monsterId: 'amber_sapling_lurker', maxCount: 2, respawnSeconds: 140 },
      { monsterId: 'sealed_wax_wasp', maxCount: 1, respawnSeconds: 110 },
    ],
    mapSymbol: '[門]',
    mapX: 0,
    mapY: 1,
    guardianHints: {
      creature: '凝脂樹門的樹脂表面若出現新鮮震紋，附近魔物多半正沿根脈移動。',
      treasure: '凝脂樹門的琥珀裂縫、草根或封存昆蟲旁可能藏著高階採集材料。',
      spirit: '凝脂樹門保留著採集者迷路、標記與被森林封存的記憶。',
    },
  },

amber_forest_golden_canopy: {
    id: 'amber_forest_golden_canopy',
    name: '金冠樹幕',
    zone: 'amber_forest' as RoomDef['zone'],
    image: 'amber_forest_golden_canopy.png',
    imagePrompt: '金冠樹幕 in amber_forest, amber forest resource zone with golden resin, translucent tree roots, glowing insects trapped in amber, herb shelves, smoky bark, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function resource, terrain forest, clear lantern light',
    description:
      '金冠樹幕高懸在透明根木之上，大片琥珀葉像金屬薄片般交疊，把林光切成細碎亮斑。西側凝脂樹門仍可見封蠟門楣，南方琥珀脈徑在樹根下方閃爍，東面封蠟蜂巢傳來密集振翅聲，北方玻璃根橋則像一條冷亮脊梁跨過樹冠。葉脈間黏著蜂刺和螳螂殼，任何突然落下的金粉都可能不是花粉，而是伏擊前的樹冠震動。',
    exits: [
      { direction: 'west', targetRoomId: 'amber_forest_resin_gate', description: '回到凝脂樹門' },
      { direction: 'south', targetRoomId: 'amber_forest_vein_path', description: '落回琥珀脈徑', edgeKind: 'distant_route', edgeNote: '此出口依世界全圖座標不是相鄰一格，實際路程長於相鄰一格，保留為明確特殊路線。' },
      { direction: 'east', targetRoomId: 'amber_forest_wasp_nests', description: '蜂巢高枝在東側' },
      { direction: 'north', targetRoomId: 'amber_forest_glassroot_bridge', description: '玻璃根橋在北側', edgeKind: 'distant_route', edgeNote: '此出口依世界全圖座標不是相鄰一格，實際路程長於相鄰一格，保留為明確特殊路線。' },
    ],
    monsters: [
      { monsterId: 'sealed_wax_wasp', maxCount: 2, respawnSeconds: 110 },
      { monsterId: 'suntrap_bloom_mantis', maxCount: 1, respawnSeconds: 150 },
    ],
    mapSymbol: '[冠]',
    mapX: 1,
    mapY: 1,
    guardianHints: {
      creature: '金冠樹幕的樹脂表面若出現新鮮震紋，附近魔物多半正沿根脈移動。',
      treasure: '金冠樹幕的琥珀裂縫、草根或封存昆蟲旁可能藏著高階採集材料。',
      spirit: '金冠樹幕保留著採集者迷路、標記與被森林封存的記憶。',
    },
  },

amber_forest_wasp_nests: {
    id: 'amber_forest_wasp_nests',
    name: '封蠟蜂巢',
    zone: 'amber_forest' as RoomDef['zone'],
    image: 'amber_forest_wasp_nests.png',
    imagePrompt: '封蠟蜂巢 in amber_forest, amber forest resource zone with golden resin, translucent tree roots, glowing insects trapped in amber, herb shelves, smoky bark, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function resource, terrain forest, clear lantern light',
    description:
      '封蠟蜂巢吊在數層琥珀枝間，蜂房外殼被金色樹脂封得半透明，裡面仍能看見幼蟲般的暗影蠕動。西側金冠樹幕的亮葉一路延到巢邊，南方樹脂藥草層散出苦草味，東面日陷空地則有刺眼陽光穿過蜂群。巢下落滿硬化蜂蠟和被啃空的昆蟲殼，封蠟黃蜂的翅音會在樹脂壁上反覆放大，讓人很難判斷真正的距離。',
    exits: [
      { direction: 'west', targetRoomId: 'amber_forest_golden_canopy', description: '回到金冠樹幕' },
      { direction: 'south', targetRoomId: 'amber_forest_herb_shelf', description: '落回樹脂藥草層', edgeKind: 'distant_route', edgeNote: '此出口依世界全圖座標不是相鄰一格，實際路程長於相鄰一格，保留為明確特殊路線。' },
      { direction: 'east', targetRoomId: 'amber_forest_suntrap_clearing', description: '日陷空地在東側' },
    ],
    monsters: [
      { monsterId: 'sealed_wax_wasp', maxCount: 3, respawnSeconds: 110 },
      { monsterId: 'ember_carapace_beetle', maxCount: 1, respawnSeconds: 280 },
    ],
    mapSymbol: '[蜂]',
    mapX: 2,
    mapY: 1,
    guardianHints: {
      creature: '封蠟蜂巢的樹脂表面若出現新鮮震紋，附近魔物多半正沿根脈移動。',
      treasure: '封蠟蜂巢的琥珀裂縫、草根或封存昆蟲旁可能藏著高階採集材料。',
      spirit: '封蠟蜂巢保留著採集者迷路、標記與被森林封存的記憶。',
    },
  },

amber_forest_sapfall_gully: {
    id: 'amber_forest_sapfall_gully',
    name: '樹脂落溝',
    zone: 'amber_forest' as RoomDef['zone'],
    image: 'amber_forest_sapfall_gully.png',
    imagePrompt: '樹脂落溝 in amber_forest, amber forest resource zone with golden resin, translucent tree roots, glowing insects trapped in amber, herb shelves, smoky bark, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function resource, terrain forest, clear lantern light',
    description:
      '樹脂落溝是一道被金色樹液沖出的低谷，黏稠液流沿透明根脈往下墜，表面浮著發光昆蟲和半熟孢子。北方琥珀水囊的潮氣順坡滑落，東面焦木林列露出黑色樹樁，西側煙菌坡則用灰白孢霧遮住回路。溝底的樹脂有些地方已硬化成可踩踏的脊，有些仍像沼泥般緩慢吞物；水蛇留下的細痕與菌人拖出的孢粉線在谷底交叉。',
    exits: [
      { direction: 'north', targetRoomId: 'amber_forest_water_pocket', description: '回到琥珀水囊', edgeKind: 'distant_route', edgeNote: '此出口依世界全圖座標不是相鄰一格，實際路程長於相鄰一格，保留為明確特殊路線。' },
      {
        direction: 'east',
        targetRoomId: 'amber_forest_charcoal_stand',
        description: '東側樹脂溝要沿焦黑根脈下切，再穿過黏稠樹液坡才會抵達焦木林列',
        edgeKind: 'distant_route',
        edgeNote: '樹脂落溝到焦木林列需要沿焦黑根脈與樹液坡繞行，屬於長路徑。',
      },
      {
        direction: 'west',
        targetRoomId: 'amber_forest_smoke_mycology',
        description: '西側煙菌坡被孢霧隔開，必須繞過封蠟根牆與低窪樹脂池才能抵達',
        edgeKind: 'distant_route',
        edgeNote: '樹脂落溝到煙菌坡需要繞過封蠟根牆與樹脂池，屬於長路徑。',
      },
    ],
    monsters: [
      { monsterId: 'amber_water_serpent', maxCount: 1, respawnSeconds: 150 },
      { monsterId: 'smoke_resin_myconid', maxCount: 2, respawnSeconds: 160 },
    ],
    mapSymbol: '[溝]',
    mapX: 3,
    mapY: -1,
    guardianHints: {
      creature: '樹脂落溝的樹脂表面若出現新鮮震紋，附近魔物多半正沿根脈移動。',
      treasure: '樹脂落溝的琥珀裂縫、草根或封存昆蟲旁可能藏著高階採集材料。',
      spirit: '樹脂落溝保留著採集者迷路、標記與被森林封存的記憶。',
    },
  },

amber_forest_glassroot_bridge: {
    id: 'amber_forest_glassroot_bridge',
    name: '玻璃根橋',
    zone: 'amber_forest' as RoomDef['zone'],
    image: 'amber_forest_glassroot_bridge.png',
    imagePrompt: '玻璃根橋 in amber_forest, amber forest resource zone with golden resin, translucent tree roots, glowing insects trapped in amber, herb shelves, smoky bark, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function resource, terrain forest, clear lantern light',
    description:
      '玻璃根橋由數條透明巨根並排伸出，橋下是被樹脂淹沒的舊林道，深處封著古老葉片與發光甲殼。南方金冠樹幕的亮斑在橋面折射，東側煙菌坡飄來灰白孢霧，北方發光樹洞像一盞藏在根網後的冷燈。橋面看似堅硬，實際有些根脈內部已裂出細紋，樹脂蜥的爪印和石化守衛的重痕交錯在透明表層下。',
    exits: [
      { direction: 'south', targetRoomId: 'amber_forest_golden_canopy', description: '回到金冠樹幕', edgeKind: 'distant_route', edgeNote: '此出口依世界全圖座標不是相鄰一格，實際路程長於相鄰一格，保留為明確特殊路線。' },
      { direction: 'east', targetRoomId: 'amber_forest_smoke_mycology', description: '煙菌坡在東側', edgeKind: 'distant_route', edgeNote: '此出口依世界全圖座標不是相鄰一格，實際路程長於相鄰一格，保留為明確特殊路線。' },
      { direction: 'north', targetRoomId: 'amber_forest_glowing_hollow', description: '發光樹洞在北側', edgeKind: 'distant_route', edgeNote: '此出口依世界全圖座標不是相鄰一格，實際路程長於相鄰一格，保留為明確特殊路線。' },
    ],
    monsters: [
      { monsterId: 'resin_vein_lizard', maxCount: 2, respawnSeconds: 120 },
      { monsterId: 'petrified_resin_golem', maxCount: 1, respawnSeconds: 360 },
    ],
    mapSymbol: '[橋]',
    mapX: 1,
    mapY: 2,
    guardianHints: {
      creature: '玻璃根橋的樹脂表面若出現新鮮震紋，附近魔物多半正沿根脈移動。',
      treasure: '玻璃根橋的琥珀裂縫、草根或封存昆蟲旁可能藏著高階採集材料。',
      spirit: '玻璃根橋保留著採集者迷路、標記與被森林封存的記憶。',
    },
  },

amber_forest_suntrap_clearing: {
    id: 'amber_forest_suntrap_clearing',
    name: '日陷空地',
    zone: 'amber_forest' as RoomDef['zone'],
    image: 'amber_forest_suntrap_clearing.png',
    imagePrompt: '日陷空地 in amber_forest, amber forest resource zone with golden resin, translucent tree roots, glowing insects trapped in amber, herb shelves, smoky bark, dark fantasy painterly environment illustration, vertical 10:16, consistent style, no UI, no text, room function resource, terrain forest, clear lantern light',
    description:
      '日陷空地被樹冠裂口直直照亮，陽光落在厚樹脂上形成一圈刺眼金池，池邊長著像捕獸夾般開合的晶化花。西側封蠟蜂巢的影子投到空地邊緣，南面焦木林列有黑樁從亮光下露頭，東側通往燼甲蟲丘的灰線帶著焦熱氣味。空地中央的金粉會隨風浮起，下面卻藏著螳螂足痕與蜂群落針，明亮處反而比陰影更難藏身。',
    exits: [
      { direction: 'west', targetRoomId: 'amber_forest_wasp_nests', description: '回到封蠟蜂巢' },
      {
        direction: 'south',
        targetRoomId: 'amber_forest_charcoal_stand',
        description: '南側日光陷坑要沿琥珀斜坡滑下，穿過焦黑樹樁列後才到焦木林列',
        edgeKind: 'distant_route',
        edgeNote: '日陷空地到焦木林列有高度落差與焦木樹樁阻隔，屬於長路徑。',
      },
      {
        direction: 'east',
        targetRoomId: 'amber_forest_ember_beetle_mound',
        description: '東側焦黑灰線通往燼甲蟲丘', edgeKind: 'distant_route', edgeNote: '此出口依世界全圖座標不是相鄰一格，實際路程長於相鄰一格，保留為明確特殊路線。',
      },
    ],
    monsters: [
      { monsterId: 'suntrap_bloom_mantis', maxCount: 2, respawnSeconds: 150 },
      { monsterId: 'sealed_wax_wasp', maxCount: 2, respawnSeconds: 110 },
    ],
    mapSymbol: '[日]',
    mapX: 3,
    mapY: 1,
    guardianHints: {
      creature: '日陷空地的樹脂表面若出現新鮮震紋，附近魔物多半正沿根脈移動。',
      treasure: '日陷空地的琥珀裂縫、草根或封存昆蟲旁可能藏著高階採集材料。',
      spirit: '日陷空地保留著採集者迷路、標記與被森林封存的記憶。',
    },
  },
};
