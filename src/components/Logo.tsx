interface LogoProps {
  size?: number;
  variant?: "full" | "simple";
  prefix?: string;
  className?: string;
}

export default function Logo({
  size = 40,
  variant = "full",
  prefix = "logo",
  className,
}: LogoProps) {
  if (variant === "simple") {
    return (
      <svg
        viewBox="0 0 200 200"
        xmlns="http://www.w3.org/2000/svg"
        width={size}
        height={size}
        className={className}
      >
        <ellipse cx="100" cy="135" rx="58" ry="52" fill="#8B6244" />
        <rect x="52" y="90" width="96" height="16" rx="8" fill="#A0795A" />
        <path
          d="M78 92 Q78 78 82 68 Q86 58 80 48 Q78 42 80 38 Q82 34 84 38 Q90 50 88 60 Q86 70 86 80 Q86 90 84 92"
          fill="#F5C842"
        />
        <circle cx="100" cy="80" r="38" fill="#E8A0BF" />
        <ellipse cx="100" cy="94" rx="42" ry="6" fill="#D4789C" />
      </svg>
    );
  }

  return (
    <svg
      viewBox="0 0 200 200"
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      className={className}
    >
      {/* Honey pot body */}
      <ellipse cx="100" cy="135" rx="58" ry="52" fill="#6B4226" />
      <ellipse
        cx="100"
        cy="135"
        rx="58"
        ry="52"
        fill={`url(#${prefix}PotGrad)`}
      />
      {/* Pot rim */}
      <rect x="52" y="90" width="96" height="16" rx="8" fill="#8B6244" />
      {/* Pot highlight */}
      <ellipse
        cx="80"
        cy="130"
        rx="18"
        ry="28"
        fill="rgba(255,255,255,0.1)"
        transform="rotate(-15 80 130)"
      />
      {/* Honey drip */}
      <path
        d="M78 92 Q78 78 82 68 Q86 58 80 48 Q78 42 80 38 Q82 34 84 38 Q90 50 88 60 Q86 70 86 80 Q86 90 84 92"
        fill="#F5C842"
      />
      <path
        d="M110 92 Q110 82 112 74 Q114 66 112 58 Q110 52 112 48 Q114 44 116 48 Q120 56 118 64 Q116 72 116 82 Q116 90 114 92"
        fill="#F5C842"
      />
      {/* Pot lid / cloth top */}
      <circle cx="100" cy="80" r="38" fill="#E8A0BF" />
      <circle cx="100" cy="80" r="38" fill={`url(#${prefix}LidGrad)`} />
      {/* Cloth tie */}
      <ellipse cx="100" cy="94" rx="42" ry="6" fill="#D4789C" />
      {/* Cloth folds */}
      <path
        d="M62 80 Q70 88 78 80"
        stroke="#D4789C"
        strokeWidth="1.5"
        fill="none"
      />
      <path
        d="M122 80 Q130 88 138 80"
        stroke="#D4789C"
        strokeWidth="1.5"
        fill="none"
      />
      {/* Cute bee */}
      <g transform="translate(142, 52) rotate(15)">
        {/* Wings */}
        <ellipse
          cx="-6"
          cy="-6"
          rx="8"
          ry="5"
          fill="rgba(255,255,255,0.7)"
          transform="rotate(-30)"
        />
        <ellipse
          cx="6"
          cy="-6"
          rx="8"
          ry="5"
          fill="rgba(255,255,255,0.7)"
          transform="rotate(30)"
        />
        {/* Body */}
        <ellipse cx="0" cy="0" rx="7" ry="9" fill="#F5C842" />
        {/* Stripes */}
        <rect x="-7" y="-3" width="14" height="3" rx="1" fill="#4A2D17" />
        <rect x="-7" y="2" width="14" height="3" rx="1" fill="#4A2D17" />
        {/* Face */}
        <circle cx="-2" cy="-6" r="1.2" fill="#4A2D17" />
        <circle cx="2" cy="-6" r="1.2" fill="#4A2D17" />
        {/* Smile */}
        <path
          d="M-2 -4 Q0 -2 2 -4"
          stroke="#4A2D17"
          strokeWidth="0.8"
          fill="none"
        />
      </g>
      {/* Heart on pot */}
      <path
        d="M95 130 Q95 124 100 120 Q105 124 105 130 Q105 136 100 140 Q95 136 95 130Z"
        fill="#E8A0BF"
        opacity="0.6"
      />
      <defs>
        <linearGradient id={`${prefix}PotGrad`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#8B6244" />
          <stop offset="100%" stopColor="#4A2D17" />
        </linearGradient>
        <radialGradient id={`${prefix}LidGrad`}>
          <stop offset="0%" stopColor="#FFD6E8" />
          <stop offset="100%" stopColor="#E8A0BF" />
        </radialGradient>
      </defs>
    </svg>
  );
}
