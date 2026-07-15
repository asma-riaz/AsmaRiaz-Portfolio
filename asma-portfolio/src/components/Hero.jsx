import { useState } from 'react'
import { motion } from 'framer-motion'
import { HiArrowDown, HiArrowDownTray, HiEnvelope, HiPhoto } from 'react-icons/hi2'
import { useTypewriter } from '../hooks/useTypewriter'
import { site } from '../data/site'

const particles = [
  { top: '12%', left: '6%', size: 5, delay: 0 },
  { top: '68%', left: '2%', size: 3, delay: 0.6 },
  { top: '22%', left: '92%', size: 4, delay: 1.1 },
  { top: '78%', left: '88%', size: 6, delay: 0.3 },
  { top: '48%', left: '96%', size: 3, delay: 1.6 },
]

export default function Hero() {
  const role = useTypewriter(site.role, { pauseMs: 1500 })
  const [imageFailed, setImageFailed] = useState(false)
  const showImage = Boolean(site.heroImage) && !imageFailed

  const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })

  return (
    <section
      id="home"
      className="section-px relative flex min-h-[100svh] items-center overflow-hidden pt-24 sm:pt-28"
    >
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <motion.div
          className="absolute left-[-10%] top-[-10%] h-72 w-72 rounded-full bg-accent/20 blur-[110px] sm:h-96 sm:w-96"
          animate={{ opacity: [0.6, 1, 0.6] }}
          transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute bottom-[-15%] right-[-10%] h-80 w-80 rounded-full bg-surface/50 blur-[120px] sm:h-[28rem] sm:w-[28rem]"
          animate={{ opacity: [0.5, 0.9, 0.5] }}
          transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
        />
        {particles.map((p, i) => (
          <motion.span
            key={i}
            className="absolute rounded-full bg-accent-hover/60"
            style={{ top: p.top, left: p.left, width: p.size, height: p.size }}
            animate={{ y: [0, -18, 0], opacity: [0.2, 0.8, 0.2] }}
            transition={{ duration: 5 + i, repeat: Infinity, ease: 'easeInOut', delay: p.delay }}
          />
        ))}
      </div>

      <div className="mx-auto grid w-full max-w-6xl grid-cols-1 items-center gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:gap-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="eyebrow mb-5">AVAILABLE FOR INTERNSHIPS &amp; JUNIOR ROLES</p>

          <h1 className="font-display text-4xl font-semibold leading-[1.08] text-mist sm:text-5xl md:text-6xl">
            Hello, I&apos;m <span className="text-accent">Asma Riaz</span>
          </h1>

          <div className="mt-4 flex h-8 items-center font-mono text-lg text-mist-muted sm:h-9 sm:text-xl">
            <span>I&apos;m&nbsp;</span>
            <span className="text-mist">{role}</span>
            <motion.span
              className="ml-0.5 inline-block h-5 w-[2px] bg-accent sm:h-6"
              animate={{ opacity: [1, 1, 0, 0] }}
              transition={{ duration: 1, repeat: Infinity, times: [0, 0.5, 0.5, 1] }}
            />
          </div>

          <p className="mt-6 max-w-xl text-[15px] leading-relaxed text-mist-muted sm:text-base">
            {site.intro}
          </p>

          <div className="mt-9 flex flex-wrap gap-3">
            <button
              onClick={() => scrollTo('projects')}
              className="btn-ripple rounded-full bg-accent px-6 py-3 font-mono text-sm font-medium text-ink transition-transform hover:-translate-y-0.5 hover:bg-accent-hover"
            >
              View Projects
            </button>
            <a
              href={site.resumeUrl}
              download
              className="btn-ripple glass flex items-center gap-2 rounded-full px-6 py-3 font-mono text-sm font-medium text-mist transition-transform hover:-translate-y-0.5"
            >
              <HiArrowDownTray className="h-4 w-4" />
              Download Resume
            </a>
            <button
              onClick={() => scrollTo('contact')}
              className="flex items-center gap-2 rounded-full border border-border px-6 py-3 font-mono text-sm font-medium text-mist-muted transition-colors hover:border-accent/40 hover:text-mist"
            >
              <HiEnvelope className="h-4 w-4" />
              Contact Me
            </button>
          </div>
        </motion.div>

        <motion.div
  initial={{ opacity: 0, y: 30, scale: 0.97 }}
  animate={{ opacity: 1, y: 0, scale: 1 }}
  transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
  className="relative mx-auto w-full max-w-sm"
>
  <motion.div
    animate={{ y: [0, -10, 0] }}
    transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
    className="glass-strong rounded-2xl shadow-2xl shadow-black/40"
  >
    <div className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl">
      {showImage ? (
        <img
          src={site.heroImage}
          alt={`Portrait of ${site.name}`}
          className="h-full w-full object-cover"
          onError={() => setImageFailed(true)}
        />
      ) : (
        <img
          src="/hero/asma-riaz.png"
          alt="Portfolio Profile"
          className="h-full w-full object-cover"
        />
      )}
    </div>
  </motion.div>

  <div className="glass absolute -bottom-6 -left-6 hidden rounded-xl px-4 py-3 sm:block">
    <p className="font-mono text-[11px] text-mist-dim">uptime</p>
    <p className="font-mono text-sm text-accent">building since 2025</p>
  </div>
</motion.div>
      </div>

      <motion.button
        onClick={() => scrollTo('about')}
        aria-label="Scroll to About section"
        className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 text-mist-dim sm:block"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
      >
        <HiArrowDown className="h-5 w-5" />
      </motion.button>
    </section>
  )
}
