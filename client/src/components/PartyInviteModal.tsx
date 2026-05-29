import { useEffect, useMemo, useState } from 'react';
import { useGameStore } from '../stores/gameStore';

export default function PartyInviteModal({
  onCommand,
}: {
  onCommand: (command: string, friendlyEcho?: string) => void;
}) {
  const invite = useGameStore((s) => s.pendingPartyInvite);
  const setPendingPartyInvite = useGameStore((s) => s.setPendingPartyInvite);
  const [now, setNow] = useState(Date.now());

  useEffect(() => {
    if (!invite) return undefined;
    setNow(Date.now());
    const timer = window.setInterval(() => setNow(Date.now()), 1000);
    return () => window.clearInterval(timer);
  }, [invite]);

  const remainingSeconds = useMemo(() => {
    if (!invite) return 0;
    return Math.max(0, Math.ceil((invite.expiresAt - now) / 1000));
  }, [invite, now]);

  useEffect(() => {
    if (invite && remainingSeconds <= 0) {
      setPendingPartyInvite(null);
    }
  }, [invite, remainingSeconds, setPendingPartyInvite]);

  if (!invite) return null;

  const accept = () => {
    setPendingPartyInvite(null);
    onCommand('party accept', `接受 ${invite.inviterName} 的組隊邀請`);
  };

  const decline = () => {
    setPendingPartyInvite(null);
    onCommand('party decline', `拒絕 ${invite.inviterName} 的組隊邀請`);
  };

  return (
    <div className="party-invite-overlay" onMouseDown={decline}>
      <section className="party-invite-modal panel-enter" onMouseDown={(event) => event.stopPropagation()}>
        <header className="party-invite-header">
          <div>
            <div className="party-invite-title">組隊邀請</div>
            <div className="party-invite-subtitle">剩餘 {remainingSeconds}s</div>
          </div>
          <button type="button" className="party-invite-close" onClick={decline}>拒絕</button>
        </header>

        <div className="party-invite-body">
          <p><b>{invite.inviterName}</b> 邀請你加入隊伍。</p>
        </div>

        <footer className="party-invite-actions">
          <button type="button" className="party-invite-decline" onClick={decline}>拒絕</button>
          <button type="button" className="party-invite-accept" onClick={accept}>接受</button>
        </footer>
      </section>
    </div>
  );
}
