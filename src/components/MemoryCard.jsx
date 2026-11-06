import { useState } from 'react'
const grads = ['#FFD6E7,#E9DDFB', '#C2F0F5,#E9DDFB', '#FFD6E7,#C2F0F5', '#E9DDFB,#A8E5F0', '#FFE9F2,#C2F0F5', '#D9F7F1,#FFD6E7']
const icons = ['🐼', '🐘', '💗', '🌸', '✨', '🦋', '🎀', '🌈']
const ratios = { portrait: '3/4', landscape: '4/3', square: '1/1' }
export function Placeholder({ item, index = 0, label = true }) {
  return (
    <div className="ph" style={{ aspectRatio: ratios[item.ratio] || '4/3', background: `linear-gradient(135deg,${grads[index % grads.length]})` }}>
      <span className="ph-icon">{icons[index % icons.length]}</span>
      {label && <small>{item.title}</small>}
    </div>
  )
}
export default function MemoryCard({ item, index, onOpen }) {
  const [failed, setFailed] = useState(false)
  return (
    <figure className={`card tilt-${index % 3}`} onClick={() => onOpen(index)} tabIndex={0} onKeyDown={(e) => e.key === 'Enter' && onOpen(index)}>
      {index % 4 === 0 && <span className="deco" aria-hidden>💗</span>}
      {index % 5 === 2 && <span className="deco d2" aria-hidden>✨</span>}
      <div className="card-img">
        {failed ? <Placeholder item={item} index={index} /> : <img src={item.src} alt={item.title} loading="lazy" decoding="async" onError={() => setFailed(true)} />}
      </div>
      <h3 className="script">{item.title}</h3>
      <figcaption>{item.caption}</figcaption>
    </figure>
  )
}
