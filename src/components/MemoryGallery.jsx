import { useEffect, useState } from 'react'
import { ChevronLeft, ChevronRight, X } from 'lucide-react'
import { photos } from '../data/memories'
import { config } from '../data/birthdayConfig'
import MemoryCard, { Placeholder } from './MemoryCard'
import BabyElephant from './BabyElephant'
import BabyPanda from './BabyPanda'
import Reveal from './Reveal'
const PAGE = 18
function Lightbox({ index, setIndex }) {
  const [failed, setFailed] = useState({})
  const n = photos.length
  const prev = () => setIndex((i) => (i - 1 + n) % n)
  const next = () => setIndex((i) => (i + 1) % n)
  useEffect(() => {
    const k = (e) => { if (e.key === 'Escape') setIndex(null); if (e.key === 'ArrowLeft') prev(); if (e.key === 'ArrowRight') next() }
    window.addEventListener('keydown', k)
    document.body.style.overflow = 'hidden'
    return () => { window.removeEventListener('keydown', k); document.body.style.overflow = '' }
  }, [])
  const item = photos[index]
  return (
    <div className="lightbox" onClick={() => setIndex(null)} role="dialog" aria-modal="true">
      <button className="lb-btn close" aria-label="Close" onClick={() => setIndex(null)}><X /></button>
      <button className="lb-btn l" aria-label="Previous" onClick={(e) => { e.stopPropagation(); prev() }}><ChevronLeft /></button>
      <div className="lb-body" key={item.id} onClick={(e) => e.stopPropagation()}>
        {failed[item.id] ? <div className="lb-ph"><Placeholder item={item} index={index} /></div> : <img src={item.src} alt={item.title} onError={() => setFailed((f) => ({ ...f, [item.id]: true }))} />}
        <h3 className="script">{item.title}</h3><p>{item.caption}</p><small>{index + 1} / {n}</small>
      </div>
      <button className="lb-btn r" aria-label="Next" onClick={(e) => { e.stopPropagation(); next() }}><ChevronRight /></button>
    </div>
  )
}
export default function MemoryGallery() {
  const [shown, setShown] = useState(PAGE)
  const [lb, setLb] = useState(null)
  return (
    <section id="memories" className="section">
      <Reveal><h2 className="script title">{config.galleryTitle} 💗</h2></Reveal>
      <div className="gal-chars"><BabyElephant size={110} hat={false} className="small" /><BabyPanda size={110} className="small" /></div>
      {photos.length === 0 && <p className="empty">Add photos in src/data/memories.js 💗</p>}
      <div className="gallery">
        {photos.slice(0, shown).map((p, i) => <Reveal key={p.id} className="gi" delay={(i % 3) * 90}><MemoryCard item={p} index={i} onOpen={setLb} /></Reveal>)}
      </div>
      {shown < photos.length && <div className="center"><button className="btn" onClick={() => setShown(shown + PAGE)}>Load More Memories 💕</button></div>}
      {lb !== null && <Lightbox index={lb} setIndex={setLb} />}
    </section>
  )
}
