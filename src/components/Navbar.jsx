import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'
const links = [['home', 'Home'], ['memories', 'Our Memories'], ['videos', 'Videos'], ['letter', 'Our Special Letter'], ['surprise', 'Birthday Surprise']]
export default function Navbar() {
  const [active, setActive] = useState('home')
  const [open, setOpen] = useState(false)
  useEffect(() => {
    const obs = new IntersectionObserver((es) => es.forEach((e) => e.isIntersecting && setActive(e.target.id)), { rootMargin: '-40% 0px -55% 0px' })
    links.forEach(([id]) => { const el = document.getElementById(id); el && obs.observe(el) })
    return () => obs.disconnect()
  }, [])
  const go = (id) => { setOpen(false); document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' }) }
  return (
    <nav className="nav">
      <span className="nav-logo">Chellam 💗</span>
      <button className="nav-toggle" aria-label="Menu" onClick={() => setOpen(!open)}>{open ? <X /> : <Menu />}</button>
      <ul className={open ? 'open' : ''}>
        {links.map(([id, label]) => <li key={id}><button className={active === id ? 'active' : ''} onClick={() => go(id)}>{label}</button></li>)}
      </ul>
    </nav>
  )
}
