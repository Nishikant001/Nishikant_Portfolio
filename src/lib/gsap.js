import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

// Register once; every module imports gsap from here.
gsap.registerPlugin(ScrollTrigger)

// Mobile browser toolbars resize the viewport while scrolling.
// Ignoring those resizes keeps the pinned hero from re-measuring mid-scroll.
ScrollTrigger.config({ ignoreMobileResize: true })

export { gsap, ScrollTrigger }
