import { useCallback, useEffect, useRef, useState } from 'react'
import { Menu, X } from 'lucide-react'
import { navLinks } from './data/site'
import { goTo, onNavClick } from './lib/goTo'
import { scrollMap } from './lib/scrollMap'
import { getLenis } from './lib/smooth'

const SECTION_IDS = ['stack', 'expertise', 'projects', 'experience', 'contact']

/** Floating navigation: brand, centred link pill, hire-me action, mobile sheet. */
export default function Navbar({ ready }) {
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState('home')
  const menuBtn = useRef(null)
  const firstLink = useRef(null)

  // Active link follows scroll position (rAF-throttled, no layout writes).
  useEffect(() => {
    let raf = 0
    const update = () => {
      raf = 0
      const probe = window.innerHeight * 0.4
      let current = null
      for (const id of SECTION_IDS) {
        const el = document.getElementById(id)
        if (el && el.getBoundingClientRect().top <= probe) current = id
      }
      if (!current) current = window.scrollY < scrollMap.aboutY * 0.45 ? 'home' : 'about'
      setActive((prev) => (prev === current ? prev : current))
    }
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update)
    }
    update()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
      if (raf) cancelAnimationFrame(raf)
    }
  }, [])

  // Honour a #hash on first load once the layout is settled.
  useEffect(() => {
    if (!ready || !window.location.hash) return undefined
    const id = window.location.hash.slice(1)
    const t = setTimeout(() => goTo(id, { updateHash: false }), 250)
    return () => clearTimeout(t)
  }, [ready])

  const close = useCallback(() => {
    setOpen(false)
    menuBtn.current?.focus()
  }, [])

  // Mobile sheet: lock scroll, Esc closes, focus moves in.
  useEffect(() => {
    if (!open) return undefined
    const prev = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    getLenis()?.stop()
    firstLink.current?.focus()
    const onKey = (e) => e.key === 'Escape' && close()
    window.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = prev
      getLenis()?.start()
      window.removeEventListener('keydown', onKey)
    }
  }, [open, close])

  const go = (id) => (e) => {
    onNavClick(id)(e)
    setOpen(false)
  }

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-1000 ease-out ${
        ready ? 'opacity-100' : 'pointer-events-none -translate-y-6 opacity-0'
      }`}
    >
      <nav aria-label="Primary" className="flex items-center justify-between px-5 py-4 sm:px-10 md:px-14 md:py-5">
        <a
          href="#home"
          onClick={go('home')}
          className="font-display text-lg font-extrabold tracking-tight text-white"
          style={{ fontStretch: '88%' }}
        >
          Nishikant<span className="text-violet-300">.</span>
        </a>

        <ul className="hidden items-center gap-1 rounded-full border border-white/10 bg-black/35 p-1 backdrop-blur-md md:flex">
          {navLinks.map((l) => (
            <li key={l.id}>
              <a
                href={`#${l.id}`}
                onClick={go(l.id)}
                aria-current={active === l.id ? 'true' : undefined}
                className={`block rounded-full px-4 py-1.5 text-[0.8rem] font-semibold transition-colors ${
                  active === l.id ? 'bg-white text-black' : 'text-white/70 hover:text-white'
                }`}
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <a href="#contact" onClick={go('contact')} className="btn-solid hidden !px-5 !py-2 md:inline-flex">
            Hire me
          </a>
          <button
            ref={menuBtn}
            type="button"
            onClick={() => setOpen((o) => !o)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? 'Close menu' : 'Open menu'}
            className="icon-btn md:hidden"
          >
            {open ? <X className="h-5 w-5" aria-hidden="true" /> : <Menu className="h-5 w-5" aria-hidden="true" />}
          </button>
        </div>
      </nav>

      <div
        id="mobile-menu"
        className={`fixed inset-0 -z-10 flex-col justify-end bg-[#07060a]/95 px-6 pb-12 pt-24 backdrop-blur-xl md:hidden ${
          open ? 'flex' : 'hidden'
        }`}
      >
        <ul className="space-y-1">
          {navLinks.map((l, i) => (
            <li key={l.id}>
              <a
                ref={i === 0 ? firstLink : undefined}
                href={`#${l.id}`}
                onClick={go(l.id)}
                className="block py-2 font-display text-5xl font-extrabold tracking-tight text-white/90 active:text-white"
                style={{ fontStretch: '82%' }}
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </header>
  )
}
