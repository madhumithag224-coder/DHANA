export default function BabyElephant({ heart = true, hat = true, gift = false, size = 180, className = '' }) {
  return (
    <svg className={`char ${className}`} width={size} height={size} viewBox="0 0 200 200" aria-hidden="true">
      <g className="ear-l"><circle cx="46" cy="92" r="36" fill="#BFCAD6" /><circle cx="49" cy="94" r="23" fill="#FFD6E7" /></g>
      <g className="ear-r"><circle cx="154" cy="92" r="36" fill="#BFCAD6" /><circle cx="151" cy="94" r="23" fill="#FFD6E7" /></g>
      <ellipse cx="100" cy="162" rx="44" ry="34" fill="#CBD5E0" />
      <circle cx="100" cy="94" r="50" fill="#D6DFE8" />
      {hat && <g><path d="M78 56 L100 12 L122 56Z" fill="#FF69B4" /><path d="M82 48 h36" stroke="#fff" strokeWidth="4" /><circle cx="100" cy="11" r="6" fill="#fff" /></g>}
      <circle cx="82" cy="90" r="6" fill="#2d2d44" /><circle cx="118" cy="90" r="6" fill="#2d2d44" />
      <circle cx="84" cy="88" r="2" fill="#fff" /><circle cx="120" cy="88" r="2" fill="#fff" />
      <ellipse cx="68" cy="108" rx="9" ry="6" fill="#FF9EC7" opacity=".75" /><ellipse cx="132" cy="108" rx="9" ry="6" fill="#FF9EC7" opacity=".75" />
      <g className="trunk"><path d="M100 102 q-6 38 14 42 q12 2 12 -10" stroke="#C3CEDA" strokeWidth="20" fill="none" strokeLinecap="round" /></g>
      {heart && <path className="heart-held" d="M142 150c-12-9-18-16-18-23a9 9 0 0 1 18-3 9 9 0 0 1 18 3c0 7-6 14-18 23z" fill="#FF69B4" />}
      {gift && <g><rect x="52" y="152" width="34" height="28" rx="4" fill="#E9DDFB" /><rect x="66" y="152" width="6" height="28" fill="#FF69B4" /><rect x="52" y="162" width="34" height="5" fill="#FF69B4" /></g>}
      <ellipse cx="80" cy="192" rx="14" ry="7" fill="#BFCAD6" /><ellipse cx="120" cy="192" rx="14" ry="7" fill="#BFCAD6" />
    </svg>
  )
}
