import { buildRoomExitAuditReport, formatRoomExitAuditReport } from '../server/src/game/room-exit-audit.js';
import { ROOMS, ZONES } from '../server/src/data/rooms.js';

const report = buildRoomExitAuditReport(ROOMS, ZONES);

console.log(formatRoomExitAuditReport(report));
