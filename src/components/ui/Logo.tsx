export function LogoMark({ className = 'h-7 w-7' }: { className?: string }) {
  return (
    <svg viewBox="0 0 32 32" className={className} aria-hidden>
      <defs>
        <linearGradient id="lm-g" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#7aa2ff" />
          <stop offset="1" stopColor="#8b6cff" />
        </linearGradient>
      </defs>
      <rect x="1" y="1" width="30" height="30" rx="9" fill="#0e1018" stroke="url(#lm-g)" strokeOpacity=".9" />
      <path d="M12.5 11 8 16l4.5 5" fill="none" stroke="url(#lm-g)" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M19.5 11 24 16l-4.5 5" fill="none" stroke="#e8edff" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="16" cy="16" r="1.6" fill="#3fd0e0" />
    </svg>
  )
}

export function Logo() {
  return (
    <span className="inline-flex items-center gap-2.5">
      <LogoMark />
      <span className="font-display text-[17px] font-semibold tracking-tight text-white">
        i<span className="text-zinc-300">Code</span>
        <span className="text-gradient">GPT</span>
      </span>
    </span>
  )
}
