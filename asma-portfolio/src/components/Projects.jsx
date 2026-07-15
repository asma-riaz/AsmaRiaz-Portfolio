import { useCallback, useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi2'
import SectionReveal from './SectionReveal'
import ProjectShowcase from './ProjectShowcase'
import { projects } from '../data/projects'

const variants = {
  enter: (direction) => ({ opacity: 0, x: direction > 0 ? 60 : -60 }),
  center: { opacity: 1, x: 0 },
  exit: (direction) => ({ opacity: 0, x: direction > 0 ? -60 : 60 }),
}

const SWIPE_THRESHOLD = 60

export default function Projects() {
  const [[index, direction], setIndex] = useState([0, 0])

  const go = useCallback((newDirection) => {
    setIndex(([current]) => {
      const next = (current + newDirection + projects.length) % projects.length
      return [next, newDirection]
    })
  }, [])

  const jumpTo = (target) => {
    setIndex(([current]) => [target, target > current ? 1 : -1])
  }

  // Keyboard navigation: left / right arrows move the carousel whenever
  // focus isn't inside a text field elsewhere on the page.
  useEffect(() => {
    const onKeyDown = (e) => {
      const tag = document.activeElement?.tagName
      if (tag === 'INPUT' || tag === 'TEXTAREA') return
      if (e.key === 'ArrowLeft') go(-1)
      if (e.key === 'ArrowRight') go(1)
    }
    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [go])

  const project = projects[index]

  return (
    <section id="projects" className="section-px py-24 sm:py-28">
      <div className="mx-auto max-w-6xl">
        <SectionReveal>
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="eyebrow">PROJECTS</p>
              <h2 className="mt-4 text-3xl font-semibold text-mist sm:text-4xl">
                Things I&apos;ve <span className="text-accent">shipped</span>
              </h2>
            </div>
            <p className="font-mono text-sm text-mist-dim">
              {String(index + 1).padStart(2, '0')} / {String(projects.length).padStart(2, '0')}
            </p>
          </div>
        </SectionReveal>

        <div className="relative mt-12" tabIndex={-1}>
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={project.id}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
              drag="x"
              dragElastic={0.12}
              dragConstraints={{ left: 0, right: 0 }}
              onDragEnd={(_, info) => {
                if (info.offset.x < -SWIPE_THRESHOLD) go(1)
                else if (info.offset.x > SWIPE_THRESHOLD) go(-1)
              }}
              className="cursor-grab active:cursor-grabbing"
            >
              <ProjectShowcase project={project} index={index} />
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="mt-10 flex items-center justify-center gap-5">
          <button
            onClick={() => go(-1)}
            aria-label="Previous project"
            className="btn-ripple glass flex h-11 w-11 items-center justify-center rounded-full text-mist transition-transform hover:-translate-x-0.5"
          >
            <HiChevronLeft className="h-5 w-5" />
          </button>

          <div className="flex items-center gap-2">
            {projects.map((p, i) => (
              <button
                key={p.id}
                onClick={() => jumpTo(i)}
                aria-label={`Go to ${p.title}`}
                className={`h-2 rounded-full transition-all ${
                  i === index ? 'w-6 bg-accent' : 'w-2 bg-white/15'
                }`}
              />
            ))}
          </div>

          <button
            onClick={() => go(1)}
            aria-label="Next project"
            className="btn-ripple glass flex h-11 w-11 items-center justify-center rounded-full text-mist transition-transform hover:translate-x-0.5"
          >
            <HiChevronRight className="h-5 w-5" />
          </button>
        </div>
        <p className="mt-4 text-center font-mono text-xs text-mist-dim sm:hidden">
          Swipe, or use the arrows, to browse projects
        </p>
      </div>
    </section>
  )
}
