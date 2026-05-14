type NetworkPatternProps = {
  className?: string;
  tone?: "navy" | "cyan";
  opacity?: number;
};

export function NetworkPattern({
  className = "",
  tone = "cyan",
  opacity = 0.18,
}: NetworkPatternProps) {
  const lineColor = tone === "navy" ? "#0A2342" : "#2EC4B6";
  const nodeColor = tone === "navy" ? "#0A2342" : "#2EC4B6";
  return (
    <svg
      viewBox="0 0 400 240"
      className={`pointer-events-none ${className}`}
      aria-hidden="true"
      style={{ opacity }}
    >
      <g stroke={lineColor} strokeWidth="0.6" fill="none">
        <path d="M20 200 L80 160 L140 190 L210 150 L270 170 L340 130 L380 160" />
        <path d="M50 220 L110 180 L170 210 L230 170 L290 200 L350 160" />
        <path d="M40 60 L120 90 L200 60 L280 100 L360 70" />
        <path d="M80 160 L120 90 L170 210 L230 170 L290 200" />
        <path d="M110 180 L170 210 L210 150" />
        <path d="M280 100 L340 130 L380 160" />
      </g>
      <g fill={nodeColor}>
        {[
          [20, 200],
          [80, 160],
          [140, 190],
          [210, 150],
          [270, 170],
          [340, 130],
          [380, 160],
          [50, 220],
          [110, 180],
          [170, 210],
          [230, 170],
          [290, 200],
          [350, 160],
          [40, 60],
          [120, 90],
          [200, 60],
          [280, 100],
          [360, 70],
        ].map(([x, y], i) => (
          <circle key={i} cx={x} cy={y} r="2" />
        ))}
      </g>
    </svg>
  );
}
