import { useMemo, useState } from 'react'
import { config } from '../data/birthdayConfig'
import BabyElephant from './BabyElephant'
import BabyPanda from './BabyPanda'
import Reveal from './Reveal'
const colors = ['#FF69B4', '#FFD6E7', '#A8E5F0', '#E9DDFB', '#FFE08A', '#fff']
export default function BirthdayCake() {
  const [out, setOut] = useState(false)
  const bits = useMemo(() => Array.from({ length: 60 }, (_, i) => ({ l: Math.random() * 100, d: Math.random() * 1.2, t: 2.5 + Math.random() * 2.5, c: colors[i % colors.length], r: Math.random() * 360, h: i % 6 === 0 })), [])
  return (
    <section id="surprise" className="section cake-sec">
      <Reveal><h2 className="script title">{config.cakeTitle}</h2></Reveal>
      <div className="cake-stage">
        <BabyPanda size={150} heart={false} className="side" />
        <svg className="cake" viewBox="0 0 260 250" width="300" aria-label="Birthday cake">
          <ellipse cx="130" cy="228" rx="120" ry="14" fill="#fff" opacity=".85" />
          <rect x="24" y="146" width="212" height="80" rx="18" fill="#FF9EC7" />
          <rect x="52" y="96" width="156" height="58" rx="16" fill="#FFD6E7" />
          <path d="M52 114q13 18 26 0t26 0 26 0 26 0 26 0 0-14H52z" fill="#fff" />
          <path d="M24 164q17 20 35 0t35 0 35 0 35 0 35 0 -2-12H26z" fill="#fff" />
          {[70, 100, 130, 160, 190].map((x, i) => <circle key={x} cx={x} cy={190 + (i % 2) * 14} r="6" fill={i % 2 ? '#A8E5F0' : '#E9DDFB'} />)}
          {[90, 130, 170].map((x, i) => (
            <g key={x}>
              <rect x={x - 5} y="62" width="10" height="36" rx="3" fill={['#C2F0F5', '#E9DDFB', '#fff'][i]} stroke="#FF69B4" strokeWidth="1.5" />
              {!out ? <path className="flame" style={{ animationDelay: `${i * .2}s` }} d={`M${x} 40c9 9 7 18 0 20-7-2-9-11 0-20z`} fill="#FFB347" /> : <path className="smoke" d={`M${x} 56q-6-10 0-18t0-14`} stroke="#fff" strokeWidth="3" fill="none" strokeLinecap="round" />}
            </g>
          ))}
        </svg>
        <BabyElephant size={150} gift heart={false} className="side" />
      </div>
      {!out ? <button className="btn" onClick={() => setOut(true)}>{config.cakeButton}</button>
        : <p className="cake-msg script">{config.cakeMessage}</p>}
      {out && <div className="confetti" aria-hidden>{bits.map((b, i) => <span key={i} style={{ left: `${b.l}%`, animationDelay: `${b.d}s`, animationDuration: `${b.t}s`, background: b.h ? 'transparent' : b.c, transform: `rotate(${b.r}deg)` }}>{b.h ? '💗' : ''}</span>)}</div>}
    </section>
  )
}
