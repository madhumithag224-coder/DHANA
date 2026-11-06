import { useRef, useState } from 'react'
import { config } from './data/birthdayConfig'
import Navbar from './components/Navbar'
import Welcome from './components/Welcome'
import MemoryGallery from './components/MemoryGallery'
import VideoGallery from './components/VideoGallery'
import BirthdayLetter from './components/BirthdayLetter'
import BirthdayCake from './components/BirthdayCake'
import Footer from './components/Footer'
import MusicPlayer from './components/MusicPlayer'
import BabyElephant from './components/BabyElephant'
import BabyPanda from './components/BabyPanda'
const bits = ['💗', '✨', '🦋', '⭐', '💖', '🌸', '✨', '🦋', '💗', '⭐', '💖', '✨']
const Divider = ({ flip }) => <div className="divider">{flip ? <><BabyPanda size={90} className="small" /><span>💗</span><BabyElephant size={90} hat={false} className="small" /></> : <><BabyElephant size={90} className="small" /><span>💗</span><BabyPanda size={90} className="small" /></>}</div>
export default function App() {
  const audio = useRef(null)
  const [opened, setOpened] = useState(false)
  const [curtain, setCurtain] = useState(false)
  const [playing, setPlaying] = useState(false)
  const [muted, setMuted] = useState(false)
  const [audioOk, setAudioOk] = useState(true)
  const play = () => { const a = audio.current; if (a) a.play().then(() => setPlaying(true)).catch(() => setPlaying(false)) }
  const toggle = () => { const a = audio.current; if (!a) return; if (playing) { a.pause(); setPlaying(false) } else play() }
  const mute = () => { const a = audio.current; if (a) a.muted = !muted; setMuted(!muted) }
  const open = () => {
    if (config.startMusicOnOpen) play()
    setCurtain(true)
    setTimeout(() => setOpened(true), 500)
    setTimeout(() => { document.getElementById('memories')?.scrollIntoView({ behavior: 'smooth' }); setCurtain(false) }, 650)
  }
  const replay = () => document.getElementById('home')?.scrollIntoView({ behavior: 'smooth' })
  return (
    <>
      <audio ref={audio} src={config.song.file} loop preload="none" onError={() => { setAudioOk(false); setPlaying(false) }} />
      <div className="floaters" aria-hidden>{bits.map((b, i) => <span key={i} style={{ left: `${(i * 8.7 + 4) % 96}%`, animationDelay: `${i * -1.7}s`, animationDuration: `${12 + (i % 5) * 3}s`, fontSize: `${16 + (i % 4) * 6}px` }}>{b}</span>)}</div>
      <div className={`curtain ${curtain ? 'on' : ''}`} />
      {opened && <Navbar />}
      <main>
        <Welcome onOpen={open} />
        {opened && <>
          <MemoryGallery /><Divider />
          <VideoGallery /><Divider flip />
          <BirthdayLetter /><Divider />
          <BirthdayCake />
          <Footer onReplay={replay} />
        </>}
      </main>
      <MusicPlayer playing={playing} muted={muted} ok={audioOk} onToggle={toggle} onMute={mute} showPlayer={config.song.showPlayer} />
    </>
  )
}
