import { useState } from 'react'
import { config } from '../data/birthdayConfig'
import BabyElephant from './BabyElephant'
import BabyPanda from './BabyPanda'
import Reveal from './Reveal'
export default function BirthdayLetter() {
  const [open, setOpen] = useState(false)
  return (
    <section id="letter" className="section letter-sec">
      <Reveal><h2 className="script title">{config.letterTitle}</h2></Reveal>
      <p className="hint">{open ? '' : config.letterHint}</p>
      <div className="letter-stage">
        <BabyPanda size={130} gift className="side l" />
        <div className={`envelope ${open ? 'open' : ''}`} onClick={() => setOpen(!open)} role="button" tabIndex={0} onKeyDown={(e) => e.key === 'Enter' && setOpen(!open)}>
          <div className="env-back" />
          <div className="paper">
            <span className="fl f1">🌸</span><span className="fl f2">💗</span><span className="fl f3">🌷</span><span className="fl f4">💗</span>
            {config.letter.map((t, i) => <p key={i} className={i === 0 || i === config.letter.length - 1 ? 'first' : ''}>{t}</p>)}
          </div>
          <div className="env-front" /><div className="env-flap" /><span className="seal">💗</span>
        </div>
        <BabyElephant size={130} className="side r" />
      </div>
    </section>
  )
}
