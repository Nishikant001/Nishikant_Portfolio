import { scrollMap } from './scrollMap'
import { getReducedMotion } from '../hooks/useReducedMotion'
import { getLenis } from './smooth'

/**
 * Smooth-scroll to a section by id.
 * "home" is the top, "about" is the point where the portrait has finished
 * becoming the profile card (inside the pinned scene), "end" is the page bottom,
 * everything else is measured from the live layout.
 */
export function goTo(id, { updateHash = true } = {}) {
  let top = 0
  if (id === 'home') top = 0
  else if (id === 'end') top = document.documentElement.scrollHeight
  else if (id === 'about') top = scrollMap.aboutY
  else {
    const el = document.getElementById(id)
    if (!el) return
    top = el.getBoundingClientRect().top + window.scrollY
  }
  const lenis = getLenis()
  if (lenis) lenis.scrollTo(top, { duration: 1.5, easing: (t) => 1 - Math.pow(1 - t, 4) })
  else window.scrollTo({ top, behavior: getReducedMotion() ? 'auto' : 'smooth' })
  if (id !== 'end') window.history.replaceState(null, '', id === 'home' ? window.location.pathname : `#${id}`)
}

export const onNavClick = (id) => (e) => {
  e.preventDefault()
  goTo(id)
}
