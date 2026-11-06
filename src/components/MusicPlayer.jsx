import { Pause, Play, Volume2, VolumeX, Music } from 'lucide-react'
import { config } from '../data/birthdayConfig'
export default function MusicPlayer({ playing, muted, ok, onToggle, onMute, showPlayer = true }) {
  if (!showPlayer) return null

  return (
    <div className="music" aria-label="Music player">
      <Music className={playing ? 'spin' : ''} size={20} color="#FF69B4" />
      <div className="m-text"><b>{config.song.title}</b><small>{ok ? `from ${config.song.from}` : 'InShot_20251107_001636835 🎵'}</small></div>
      <button aria-label={playing ? 'Pause' : 'Play'} onClick={onToggle}>{playing ? <Pause size={18} /> : <Play size={18} />}</button>
      <button aria-label={muted ? 'Unmute' : 'Mute'} onClick={onMute}>{muted ? <VolumeX size={18} /> : <Volume2 size={18} />}</button>
      {playing && <span className="bars"><i /><i /><i /></span>}
    </div>
  )
}
