export default function BabyPanda({ heart = true, gift = false, size = 180, className = '' }) {
  return (
    <svg className={`char ${className}`} width={size} height={size} viewBox="0 0 200 200" aria-hidden="true">
      <circle cx="58" cy="44" r="19" fill="#2d2d44" /><circle cx="142" cy="44" r="19" fill="#2d2d44" />
      <ellipse cx="100" cy="162" rx="42" ry="34" fill="#fff" stroke="#e6e9f0" strokeWidth="2" />
      <ellipse cx="62" cy="150" rx="13" ry="24" fill="#2d2d44" transform="rotate(20 62 150)" />
      <circle cx="100" cy="88" r="52" fill="#fff" stroke="#e6e9f0" strokeWidth="2" />
      <ellipse cx="76" cy="86" rx="14" ry="18" fill="#2d2d44" transform="rotate(20 76 86)" />
      <ellipse cx="124" cy="86" rx="14" ry="18" fill="#2d2d44" transform="rotate(-20 124 86)" />
      <circle cx="77" cy="85" r="7" fill="#fff" /><circle cx="123" cy="85" r="7" fill="#fff" />
      <circle cx="77" cy="86" r="4.5" fill="#2d2d44" /><circle cx="123" cy="86" r="4.5" fill="#2d2d44" />
      <circle cx="79" cy="84" r="1.8" fill="#fff" /><circle cx="125" cy="84" r="1.8" fill="#fff" />
      <ellipse cx="100" cy="104" rx="7" ry="5" fill="#2d2d44" />
      <path d="M92 113 q8 8 16 0" stroke="#2d2d44" strokeWidth="2.5" fill="none" strokeLinecap="round" />
      <ellipse cx="64" cy="108" rx="9" ry="6" fill="#FF9EC7" opacity=".7" /><ellipse cx="136" cy="108" rx="9" ry="6" fill="#FF9EC7" opacity=".7" />
      {heart && <path className="heart-held" d="M70 160c-11-8-16-14-16-20a8 8 0 0 1 16-3 8 8 0 0 1 16 3c0 6-5 12-16 20z" fill="#FF69B4" />}
      <g className="wave"><ellipse cx="150" cy="140" rx="12" ry="26" fill="#2d2d44" transform="rotate(-25 150 140)" /></g>
      {gift && <g><rect x="112" y="160" width="36" height="30" rx="4" fill="#FFD6E7" /><rect x="127" y="160" width="6" height="30" fill="#FF69B4" /><rect x="112" y="171" width="36" height="5" fill="#FF69B4" /></g>}
      <ellipse cx="80" cy="194" rx="14" ry="7" fill="#2d2d44" /><ellipse cx="120" cy="194" rx="14" ry="7" fill="#2d2d44" />
    </svg>
  )
}
