import { useEffect, useRef, useState } from 'react'
import { X } from 'lucide-react'
export default function VideoModal({ item, onClose }) {
  const ref = useRef(null)
  const [err, setErr] = useState(false)
  useEffect(() => {
    const k = (e) => e.key === 'Escape' && onClose()
    window.addEventListener('keydown', k)
    document.body.style.overflow = 'hidden'
    const v = ref.current
    if (v) {
      v.play().catch(() => {})
    }
    return () => { window.removeEventListener('keydown', k); document.body.style.overflow = ''; v && v.pause() }
  }, [])
  return (
    <div className="lightbox" onClick={onClose} role="dialog" aria-modal="true">
      <button className="lb-btn close" aria-label="Close" onClick={onClose}><X /></button>
      <div className="lb-body vid" onClick={(e) => e.stopPropagation()}>
        {err ? <div className="vid-missing">🎬<p>This video isn't added yet.<br />Put it in public/media/videos/ 💗</p></div>
          : <video ref={ref} src={item.src} poster={item.poster} controls autoPlay playsInline preload="auto" onError={() => setErr(true)} />}
        <h3 className="script">{item.title}</h3><p>{item.caption}</p>
      </div>
    </div>
  )
}
