import { useState } from 'react'
import { photos } from '../data/memories'
import { config } from '../data/birthdayConfig'
import { Placeholder } from './MemoryCard'
import BabyElephant from './BabyElephant'
import BabyPanda from './BabyPanda'
import Reveal from './Reveal'
function Tile({ item, i }) {
  const [bad, setBad] = useState(false)
  return (
    <div className={`tile t${i}`}>
      {bad ? <Placeholder item={{ ...item, ratio: 'square' }} index={i} label={false} /> : <img src={item.src} alt={item.title} loading="lazy" onError={() => setBad(true)} />}
    </div>
  )
}
export default function Footer({ onReplay }) {
  const picks = photos.slice(0, 8)
  return (
    <footer id="forever" className="section final">
      <Reveal><h2 className="script title">{config.finalTitle}</h2></Reveal>
      <Reveal><div className="collage">{picks.map((p, i) => <Tile key={p.id} item={p} i={i} />)}</div></Reveal>
      <p className="final-msg">{config.finalMessage}</p>
      <div className="gal-chars"><BabyElephant size={130} /><BabyPanda size={130} /></div>
      <button className="btn" onClick={onReplay}>{config.replayButton}</button>
      <p className="foot">{config.footer}</p>
    </footer>
  )
}
