import { config } from '../data/birthdayConfig'
import BabyElephant from './BabyElephant'
import BabyPanda from './BabyPanda'
export function CakeMini({ size = 120 }) {
  return (
    <svg className="char" width={size} height={size} viewBox="0 0 120 120" aria-hidden="true">
      <ellipse cx="60" cy="108" rx="52" ry="8" fill="#fff" opacity=".8" />
      <rect x="18" y="62" width="84" height="42" rx="10" fill="#FF9EC7" /><rect x="30" y="38" width="60" height="30" rx="9" fill="#FFD6E7" />
      <path d="M30 52q8 10 15 0t15 0 15 0 15 0" fill="#fff" />
      <rect x="57" y="20" width="6" height="18" rx="2" fill="#C2F0F5" /><path className="flame" d="M60 8c6 6 4 11 0 12-4-1-6-6 0-12z" fill="#FFB347" />
      <circle cx="40" cy="74" r="4" fill="#fff" /><circle cx="80" cy="82" r="4" fill="#fff" /><circle cx="60" cy="90" r="4" fill="#fff" />
    </svg>
  )
}
export default function Welcome({ onOpen }) {
  return (
    <section id="home" className="welcome">
      <div className="welcome-chars">
        <BabyElephant size={190} />
        <CakeMini size={130} />
        <BabyPanda size={190} />
      </div>
      <h1 className="script big">{config.welcomeTitle}</h1>
      <p className="sub">{config.welcomeSubtitle}</p>
      <button className="btn" onClick={onOpen}>{config.openButton}</button>
    </section>
  )
}
