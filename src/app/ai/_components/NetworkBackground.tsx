/* AIネットワーク表現 — ノードと接続線による抽象背景（装飾のみ、静的DOM + CSSアニメーション） */
const NODES = [
  { x: 12, y: 18 }, { x: 32, y: 8 },  { x: 55, y: 15 }, { x: 78, y: 10 },
  { x: 90, y: 30 },  { x: 68, y: 34 }, { x: 44, y: 30 }, { x: 22, y: 42 },
  { x: 6, y: 55 },   { x: 30, y: 60 }, { x: 52, y: 55 }, { x: 74, y: 62 },
  { x: 92, y: 70 },  { x: 62, y: 82 }, { x: 38, y: 86 }, { x: 15, y: 78 },
];

const EDGES: [number, number][] = [
  [0, 1], [1, 2], [2, 3], [3, 4], [4, 5], [5, 6], [6, 1], [6, 7], [7, 0],
  [7, 8], [7, 9], [9, 6], [9, 10], [10, 5], [10, 11], [11, 4], [11, 12],
  [9, 13], [13, 11], [13, 14], [14, 15], [15, 9], [15, 8],
];

export default function NetworkBackground({ opacity = 1 }: { opacity?: number }) {
  return (
    <svg
      viewBox="0 0 100 100"
      preserveAspectRatio="xMidYMid slice"
      className="absolute inset-0 w-full h-full pointer-events-none hidden sm:block"
      style={{ opacity }}
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="ai-net-line" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#00C8FF" stopOpacity="0.5" />
          <stop offset="100%" stopColor="#7B5EFF" stopOpacity="0.5" />
        </linearGradient>
      </defs>
      {EDGES.map(([a, b], i) => (
        <line
          key={i}
          x1={NODES[a].x} y1={NODES[a].y}
          x2={NODES[b].x} y2={NODES[b].y}
          stroke="url(#ai-net-line)"
          strokeWidth="0.12"
          opacity="0.35"
        />
      ))}
      {NODES.map((n, i) => (
        <circle
          key={i}
          cx={n.x}
          cy={n.y}
          r={i % 3 === 0 ? 0.55 : 0.32}
          fill={i % 2 === 0 ? "#00C8FF" : "#7B5EFF"}
          opacity="0.7"
        >
          <animate
            attributeName="opacity"
            values="0.25;0.85;0.25"
            dur={`${3 + (i % 5)}s`}
            begin={`${i * 0.2}s`}
            repeatCount="indefinite"
          />
        </circle>
      ))}
    </svg>
  );
}
