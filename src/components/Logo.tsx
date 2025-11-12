export function Logo({ className = "h-8" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 200 50"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
    >
      <defs>
        <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="oklch(0.60 0.24 265)" />
          <stop offset="50%" stopColor="oklch(0.65 0.22 285)" />
          <stop offset="100%" stopColor="oklch(0.75 0.15 210)" />
        </linearGradient>
      </defs>

      <circle
        cx="25"
        cy="25"
        r="18"
        stroke="url(#logoGradient)"
        strokeWidth="2.5"
        fill="none"
      />

      <path
        d="M 20 25 L 25 30 L 35 18"
        stroke="url(#logoGradient)"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      <text
        x="55"
        y="32"
        fontFamily="Inter, sans-serif"
        fontSize="28"
        fontWeight="700"
        fill="url(#logoGradient)"
      >
        Savoira
      </text>
    </svg>
  );
}
