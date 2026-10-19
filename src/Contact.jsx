import { useLayoutEffect, useRef, useState } from 'react'
import emailjs from 'emailjs-com'
import { Github, Linkedin, Loader2, Mail, MapPin, Phone, Send } from 'lucide-react'
import GhostText from './components/GhostText'
import SplitHeading from './components/SplitHeading'
import useReveal from './hooks/useReveal'
import useParallax from './hooks/useParallax'
import { gsap } from './lib/gsap'
import { profile } from './data/site'

// Existing EmailJS configuration, unchanged.
const EMAILJS = {
  service: 'service_qhc4y73',
  template: 'template_nccfytd',
  publicKey: 'f-Xi-h0XXZQnmDZkQ',
}

const empty = { name: '', email: '', subject: '', message: '' }

const field =
  'w-full rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-3.5 text-white placeholder:text-white/30 transition-colors focus:border-violet-300/60 focus:bg-white/[0.05] focus:outline-none'

export default function ContactSection({ reduced }) {
  const scope = useRef(null)
  const [formData, setFormData] = useState(empty)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitSuccess, setSubmitSuccess] = useState(false)
  const [submitError, setSubmitError] = useState('')
  const formRef = useRef(null)
  useReveal(scope, reduced)
  useParallax(scope, reduced)

  // The form tips up from the floor and settles flat as the section reaches the reader.
  useLayoutEffect(() => {
    if (reduced || !formRef.current) return undefined
    const ctx = gsap.context(() => {
      gsap.fromTo(formRef.current, { rotateX: 14, y: 90, opacity: 0.1, transformPerspective: 1200, transformOrigin: '50% 100%' }, {
        rotateX: 0,
        y: 0,
        opacity: 1,
        ease: 'none',
        scrollTrigger: { trigger: formRef.current, start: 'top 98%', end: 'top 50%', scrub: 0.6 },
      })
    }, scope)
    return () => ctx.revert()
  }, [reduced])

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
    if (submitError) setSubmitError('')
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitError('')
    setSubmitSuccess(false)

    try {
      await emailjs.send(
        EMAILJS.service,
        EMAILJS.template,
        { ...formData, to_name: 'Nishikant' },
        EMAILJS.publicKey,
      )
      setSubmitSuccess(true)
      setFormData(empty)
      setTimeout(() => setSubmitSuccess(false), 5000)
    } catch (error) {
      if (error?.text) setSubmitError(`Failed to send message: ${error.text}`)
      else if (error?.message) setSubmitError(error.message)
      else setSubmitError('Failed to send message. Please try again later or email me directly.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contact" ref={scope} className="relative overflow-hidden px-5 py-24 sm:px-10 md:px-14 md:py-32 lg:px-20">
      <GhostText text="Let's talk" dir={-1} className="top-4 md:top-8" />
      <div aria-hidden="true" data-speed="0.3" className="pointer-events-none absolute -right-40 top-10 h-[34rem] w-[34rem] rounded-full bg-[radial-gradient(closest-side,rgba(110,60,210,0.26),transparent)]" />
      <div aria-hidden="true" data-speed="-0.12" className="pointer-events-none absolute -left-48 bottom-0 h-[30rem] w-[30rem] rounded-full bg-[radial-gradient(closest-side,rgba(80,50,170,0.20),transparent)]" />
      <div className="relative mx-auto grid max-w-6xl gap-14 lg:grid-cols-[1fr_1.05fr] lg:gap-20">
        <div>
          <SplitHeading
            text="Let's build something dependable."
            className="font-display text-[clamp(2.4rem,6vw,5.2rem)] font-extrabold leading-[0.95] tracking-[-0.025em] text-white"
          />
          <p data-reveal="fade" className="mt-6 max-w-md leading-relaxed text-ink-muted">
            Have a project in mind, a system to integrate with SAP, or a team that needs another developer? Tell me what you&apos;re working on.
          </p>

          <ul data-reveal="batch" className="mt-10 space-y-4">
            <li data-item>
              <a href={`mailto:${profile.email}`} className="group flex items-center gap-4 text-white">
                <span className="icon-btn"><Mail className="h-[18px] w-[18px]" aria-hidden="true" /></span>
                <span className="break-all text-lg underline decoration-white/20 underline-offset-4 transition-colors group-hover:decoration-violet-300">
                  {profile.email}
                </span>
              </a>
            </li>
            <li data-item>
              <a href={profile.phoneHref} className="group flex items-center gap-4 text-white">
                <span className="icon-btn"><Phone className="h-[18px] w-[18px]" aria-hidden="true" /></span>
                <span className="text-lg">{profile.phone}</span>
              </a>
            </li>
            <li data-item className="flex items-center gap-4 text-white/85">
              <span className="icon-btn"><MapPin className="h-[18px] w-[18px]" aria-hidden="true" /></span>
              <span className="text-lg">{profile.location}</span>
            </li>
          </ul>

          <div data-reveal="fade" className="mt-10 flex gap-3">
            <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="icon-btn" aria-label="LinkedIn profile">
              <Linkedin className="h-[18px] w-[18px]" aria-hidden="true" />
            </a>
            <a href={profile.github} target="_blank" rel="noopener noreferrer" className="icon-btn" aria-label="GitHub profile">
              <Github className="h-[18px] w-[18px]" aria-hidden="true" />
            </a>
          </div>
        </div>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="rounded-[28px] border border-white/10 bg-white/[0.025] p-6 sm:p-8"
        >
          <h3 className="font-display text-2xl font-bold text-white">Send a message</h3>
          <div className="mt-6 grid gap-5 sm:grid-cols-2">
            <div>
              <label htmlFor="name" className="mb-2 block text-sm text-ink-muted">Your name</label>
              <input id="name" name="name" type="text" autoComplete="name" required value={formData.name} onChange={handleChange} className={field} placeholder="Your name" />
            </div>
            <div>
              <label htmlFor="email" className="mb-2 block text-sm text-ink-muted">Email address</label>
              <input id="email" name="email" type="email" autoComplete="email" required value={formData.email} onChange={handleChange} className={field} placeholder="you@company.com" />
            </div>
            <div className="sm:col-span-2">
              <label htmlFor="subject" className="mb-2 block text-sm text-ink-muted">Subject</label>
              <input id="subject" name="subject" type="text" required value={formData.subject} onChange={handleChange} className={field} placeholder="Project inquiry" />
            </div>
            <div className="sm:col-span-2">
              <label htmlFor="message" className="mb-2 block text-sm text-ink-muted">Message</label>
              <textarea id="message" name="message" rows="5" required value={formData.message} onChange={handleChange} className={`${field} resize-none`} placeholder="What are you building?" />
            </div>
          </div>

          <button type="submit" disabled={isSubmitting} className="btn-solid mt-6 w-full justify-center !py-3.5 disabled:cursor-not-allowed disabled:opacity-60">
            {isSubmitting ? (
              <>
                <Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" />
                Sending…
              </>
            ) : (
              <>
                <Send className="h-4 w-4" aria-hidden="true" />
                Send message
              </>
            )}
          </button>

          <div role="status" aria-live="polite">
            {submitSuccess && (
              <p className="mt-4 rounded-2xl border border-emerald-400/25 bg-emerald-400/10 px-4 py-3 text-sm text-emerald-200">
                Message sent. I&apos;ll get back to you soon.
              </p>
            )}
            {submitError && (
              <p className="mt-4 rounded-2xl border border-red-400/25 bg-red-400/10 px-4 py-3 text-sm text-red-200">
                {submitError}
              </p>
            )}
          </div>
        </form>
      </div>
    </section>
  )
}
