import { useRef, useState } from 'react'
import { Play } from 'lucide-react'
import { videos } from '../data/memories'
import { config } from '../data/birthdayConfig'
import { Placeholder } from './MemoryCard'
import VideoModal from './VideoModal'
import Reveal from './Reveal'
function VideoCard({ item, index, onOpen }) {
  const [failed, setFailed] = useState(false)
  const [playing, setPlaying] = useState(false)
  const [playbackError, setPlaybackError] = useState(false)
  const videoRef = useRef(null)
  const hoveredRef = useRef(false)
  const poster = item.poster || (import.meta.env.PROD && `/media/posters/${item.src.split('/').pop().replace(/\.mp4$/i, '.jpg')}`)
  const playPreview = () => {
    const video = videoRef.current
    if (!video) return
    hoveredRef.current = true
    setPlaybackError(false)
    video.play().then(() => {
      if (!hoveredRef.current) video.pause()
    }).catch((error) => {
      if (hoveredRef.current && error.name !== 'AbortError') setPlaybackError(true)
    })
  }
  const stopPreview = () => {
    const video = videoRef.current
    if (!video) return
    hoveredRef.current = false
    video.pause()
  }
  return (
    <div className="card vcard" role="button" onClick={() => onOpen(item)} onPointerEnter={(e) => e.pointerType === 'mouse' && playPreview()} onPointerLeave={(e) => e.pointerType === 'mouse' && stopPreview()} tabIndex={0} onKeyDown={(e) => e.key === 'Enter' && onOpen(item)}>
      <div className="card-img">
        {failed ? <div className="video-fallback"><Placeholder item={{ ...item, ratio: 'landscape' }} index={index + 3} label={false} /><span>Video couldn't be loaded</span></div>
          : <video ref={videoRef} poster={poster || undefined} muted playsInline loop preload="none" onPlay={() => setPlaying(true)} onPause={() => setPlaying(false)} onError={() => setFailed(true)}><source src={item.src} type="video/mp4" /></video>}
        <span className={`play ${playing ? 'is-playing' : ''}`}><Play fill="#fff" /></span>
        {playbackError && !failed && <span className="playback-error" role="status">Preview unavailable — open to play</span>}
      </div>
      <h3 className="script">{item.title}</h3>
    </div>
  )
}
export default function VideoGallery() {
  const [cur, setCur] = useState(null)
  return (
    <section id="videos" className="section">
      <Reveal><h2 className="script title">{config.videoTitle}</h2></Reveal>
      {videos.length === 0 && <p className="empty">Add videos in src/data/memories.js 💗</p>}
      <div className="vgrid">{videos.map((v, i) => <Reveal key={v.id} delay={(i % 3) * 90}><VideoCard item={v} index={i} onOpen={setCur} /></Reveal>)}</div>
      {cur && <VideoModal item={cur} onClose={() => setCur(null)} />}
    </section>
  )
}
