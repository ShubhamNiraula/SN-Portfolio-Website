/**
 * A thin "grid line" with substations; small pulses of light travel along it
 * forever, like current flowing through a network.
 */
export default function PowerFlow() {
  const nodes = [120, 420, 780, 1080];
  return (
    <div className="power-flow" aria-hidden="true">
      <svg viewBox="0 0 1200 40" preserveAspectRatio="none" className="power-flow-line">
        <path d="M0 20 H1200" className="pf-base" />
        <path d="M0 20 H1200" className="pf-pulse pf-pulse-1" pathLength={1000} />
        <path d="M0 20 H1200" className="pf-pulse pf-pulse-2" pathLength={1000} />
      </svg>
      <div className="power-flow-nodes">
        {nodes.map((x) => (
          <span key={x} className="pf-node" style={{ left: `${(x / 1200) * 100}%` }} />
        ))}
      </div>
    </div>
  );
}
