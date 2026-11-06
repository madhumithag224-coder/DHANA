import { useEffect, useRef, useState } from 'react'
import { X } from 'lucide-react'
export default function VideoModal({ item, onClose }) {
  const ref = useRef(null)
  const [err, setErr] = useState(false)
  const [playbackError, setPlaybackError] = useState(false)
  const poster = item.poster || (import.meta.env.PROD && `/media/posters/${item.src.split('/').pop().replace(/\.mp4$/i, '.jpg')}`)
  useEffect(() => {
    const k = (e) => e.key === 'Escape' && onClose()
    window.addEventListener('keydown', k)
    document.body.style.overflow = 'hidden'
    const v = ref.current
    if (v) {
      v.play().catch((error) => {
        if (error.name !== 'NotAllowedError' && error.name !== 'AbortError') setPlaybackError(true)
      })
    }
    return () => { window.removeEventListener('keydown', k); document.body.style.overflow = ''; v && v.pause() }
  }, [])
  return (
    <div className="lightbox" onClick={onClose} role="dialog" aria-modal="true">
      <button className="lb-btn close" aria-label="Close" onClick={onClose}><X /></button>
      <div className="lb-body vid" onClick={(e) => e.stopPropagation()}>
        {err ? <div className="vid-missing" role="status">🎬<p>This video couldn't be loaded. Please check the deployed media file.</p></div>
          : <><video ref={ref} poster={poster || undefined} controls autoPlay muted playsInline preload="auto" onError={() => setErr(true)}><source src={item.src} type="video/mp4" /></video>
            {playbackError && <p className="playback-error" role="status">Playback couldn't start automatically. Use the video controls to play.</p>}</>}
        <h3 className="script">{item.title}</h3>
      </div>
    </div>
  )
}
