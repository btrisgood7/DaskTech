export default function Logo({ size = 40, withWordmark = false, className = '' }) {
  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      <svg
        width={size}
        height={size}
        viewBox="0 0 100 100"
        role="img"
        aria-label="DaskTech"
        className="shrink-0"
      >
        <defs>
          <linearGradient id="dt-bg" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="#0a2540" />
            <stop offset="1" stopColor="#001E38" />
          </linearGradient>
          <linearGradient id="dt-stroke" x1="0" y1="1" x2="0" y2="0">
            <stop offset="0" stopColor="#FFC700" />
            <stop offset="0.5" stopColor="#12F29B" />
            <stop offset="1" stopColor="#7CFFC4" />
          </linearGradient>
        </defs>
        <rect width="100" height="100" rx="22" fill="url(#dt-bg)" />
        <g
          fill="none"
          stroke="url(#dt-stroke)"
          strokeWidth="4"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M22 74 L34 74 L50 26 L66 74 L78 74" />
          <path d="M38 60 L50 38 L62 60 L56 60 L50 70 L44 60 Z" />
          <circle cx="22" cy="74" r="4.5" fill="#FFC700" stroke="none" />
          <circle cx="78" cy="74" r="4.5" fill="#FFC700" stroke="none" />
          <circle cx="50" cy="70" r="4.5" fill="#7CFFC4" stroke="none" />
        </g>
      </svg>
      {withWordmark && (
        <span className="font-display text-xl font-bold tracking-tight text-navy-900">
          Dask<span className="text-navy-900/45">Tech</span>
        </span>
      )}
    </span>
  )
}
