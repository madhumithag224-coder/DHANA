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
  const videoRef = useRef(null)
  const playPreview = () => {
    const video = videoRef.current
    if (!video) return
    video.play().then(() => setPlaying(true)).catch(() => setPlaying(false))
  }
  const stopPreview = () => {
    const video = videoRef.current
    if (!video) return
    video.pause()
    video.currentTime = 0
    setPlaying(false)
  }
  return (
    <div className="card vcard" onClick={() => onOpen(item)} onMouseEnter={playPreview} onMouseLeave={stopPreview} tabIndex={0} onKeyDown={(e) => e.key === 'Enter' && onOpen(item)}>
      <div className="card-img">
        {failed ? <Placeholder item={{ ...item, ratio: 'landscape' }} index={index + 3} label={false} />
          : <video ref={videoRef} src={item.src} poster={item.poster || undefined} muted playsInline preload="metadata" onError={() => setFailed(true)} />}
        <span className={`play ${playing ? 'is-playing' : ''}`}><Play fill="#fff" /></span>
      </div>
      <h3 className="script">{item.title}</h3><figcaption>{item.caption}</figcaption>
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
