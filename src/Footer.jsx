import { useLayoutEffect, useRef, useState } from 'react'
import { ArrowUp, Github, Linkedin } from 'lucide-react'
import { navLinks, profile } from './data/site'
import { goTo, onNavClick } from './lib/goTo'
import { gsap, ScrollTrigger } from './lib/gsap'

function FooterBody({ letters }) {
  const year = new Date().getFullYear()
  return (
    <>
      <div className="mx-auto flex max-w-6xl flex-col justify-between gap-10 md:flex-row md:items-start">
        <nav aria-label="Footer">
          <ul className="flex flex-wrap gap-x-6 gap-y-3 text-sm text-white/70">
            {navLinks.map((l) => (
              <li key={l.id}>
                <a href={`#${l.id}`} onClick={onNavClick(l.id)} className="transition-colors hover:text-white">
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <div className="flex items-center gap-3">
          <a href={profile.github} target="_blank" rel="noopener noreferrer" className="icon-btn" aria-label="GitHub profile">
            <Github className="h-[18px] w-[18px]" aria-hidden="true" />
          </a>
          <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="icon-btn" aria-label="LinkedIn profile">
            <Linkedin className="h-[18px] w-[18px]" aria-hidden="true" />
          </a>
          <button type="button" onClick={() => goTo('home')} className="icon-btn" aria-label="Back to top">
            <ArrowUp className="h-[18px] w-[18px]" aria-hidden="true" />
          </button>
        </div>
      </div>

      <p
        aria-hidden="true"
        className="mt-14 flex select-none justify-center whitespace-nowrap font-display font-black uppercase leading-[0.86] tracking-[-0.04em]"
        style={{ fontSize: '17.5vw', fontStretch: '80%' }}
      >
        {letters ? (
          profile.firstName.split('').map((ch, i) => (
            <span key={i} className="inline-block overflow-hidden pb-[0.04em]">
              <span data-letter className="wordmark inline-block">{ch}</span>
            </span>
          ))
        ) : (
          <span className="wordmark">{profile.firstName}</span>
        )}
      </p>

      <p className="pb-8 pt-6 text-center text-xs text-white/40">
        © {year} {profile.name}
      </p>
    </>
  )
}

/**
 * Curtain reveal: the footer is fixed to the bottom of the screen and only visible through a
 * clipped, footer-height spacer after the page sheet, so the sheet lifts away and uncovers it.
 */
export default function Footer({ reduced }) {
  const wrap = useRef(null)
  const inner = useRef(null)
  const [h, setH] = useState(0)

  useLayoutEffect(() => {
    if (reduced || !inner.current) return undefined
    const el = inner.current
    let raf = 0
    const measure = () => {
      setH(el.offsetHeight)
      cancelAnimationFrame(raf)
      raf = requestAnimationFrame(() => ScrollTrigger.refresh())
    }
    setH(el.offsetHeight)
    const ro = new ResizeObserver(measure)
    ro.observe(el)

    const ctx = gsap.context(() => {
      gsap.fromTo(el, { yPercent: -26 }, {
        yPercent: 0,
        ease: 'none',
        scrollTrigger: { trigger: wrap.current, start: 'top bottom', end: 'bottom bottom', scrub: true },
      })
      gsap.fromTo(el.querySelectorAll('[data-letter]'), { yPercent: 105 }, {
        yPercent: 0,
        ease: 'power3.out',
        stagger: 0.07,
        scrollTrigger: { trigger: wrap.current, start: 'top 80%', end: 'bottom bottom', scrub: true },
      })
    }, wrap)

    return () => {
      ro.disconnect()
      cancelAnimationFrame(raf)
      ctx.revert()
    }
  }, [reduced])

  if (reduced) {
    return (
      <footer className="relative overflow-hidden border-t border-white/[0.07] bg-[#050407] px-5 pt-14 sm:px-10 md:px-14 lg:px-20">
        <FooterBody />
      </footer>
    )
  }

  return (
    <div ref={wrap} className="relative" style={{ height: h, clipPath: 'inset(0)' }}>
      <footer
        ref={inner}
        onFocusCapture={() => goTo('end', { updateHash: false })}
        className="fixed inset-x-0 bottom-0 overflow-hidden bg-[#050407] px-5 pt-14 will-change-transform sm:px-10 md:px-14 lg:px-20"
      >
        <FooterBody letters />
      </footer>
    </div>
  )
}
