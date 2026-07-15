import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { HiBars3, HiXMark } from 'react-icons/hi2'
import { useActiveSection } from '../hooks/useActiveSection'

const links = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'experience', label: 'Experience' },
  { id: 'education', label: 'Education' },
  { id: 'services', label: 'Services' },
  { id: 'contact', label: 'Contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const activeId = useActiveSection(links.map((l) => l.id))

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  const handleNavigate = (id) => {
    setOpen(false)
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 transition-colors duration-300 ${
        scrolled ? 'glass' : 'bg-transparent'
      }`}
    >
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-3 focus:z-50 focus:rounded-md focus:bg-ink-elevated focus:px-4 focus:py-2 focus:text-mist"
      >
        Skip to content
      </a>

      <nav className="section-px flex h-16 items-center justify-between sm:h-20">
        <button
          onClick={() => handleNavigate('home')}
          className="font-display text-lg font-semibold tracking-tight text-mist"
          aria-label="Go to home section"
        >
          <span className="text-accent">asma</span>
          <span className="text-mist-dim">.dev</span>
        </button>

        <ul className="hidden items-center gap-1 xl:flex">
          {links.map((link) => (
            <li key={link.id}>
              <button
                onClick={() => handleNavigate(link.id)}
                className={`relative rounded-full px-4 py-2 font-mono text-[13px] transition-colors ${
                  activeId === link.id ? 'text-ink' : 'text-mist-muted hover:text-mist'
                }`}
              >
                {activeId === link.id && (
                  <motion.span
                    layoutId="nav-pill"
                    className="absolute inset-0 rounded-full bg-accent"
                    transition={{ type: 'spring', stiffness: 380, damping: 32 }}
                  />
                )}
                <span className="relative">{link.label}</span>
              </button>
            </li>
          ))}
        </ul>

        <button
          onClick={() => setOpen((prev) => !prev)}
          className="glass flex h-10 w-10 items-center justify-center rounded-full text-mist xl:hidden"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
        >
          {open ? <HiXMark className="h-5 w-5" /> : <HiBars3 className="h-5 w-5" />}
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="glass overflow-hidden xl:hidden"
          >
            <ul className="section-px flex flex-col gap-1 py-4">
              {links.map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => handleNavigate(link.id)}
                    className={`w-full rounded-lg px-3 py-3 text-left font-mono text-sm ${
                      activeId === link.id
                        ? 'bg-accent-soft text-accent'
                        : 'text-mist-muted'
                    }`}
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
