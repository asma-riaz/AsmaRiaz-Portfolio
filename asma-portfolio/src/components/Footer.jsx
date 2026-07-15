import { FaGithub } from 'react-icons/fa'
import { HiArrowUp, HiEnvelope } from 'react-icons/hi2'
import { site } from '../data/site'

export default function Footer() {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' })

  return (
    <footer className="section-px border-t border-border py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-5 sm:flex-row sm:justify-between">
        <p className="font-mono text-sm text-mist-dim">
          <span className="font-semibold text-accent">asma</span>.dev, built with React and Tailwind CSS
        </p>

        <div className="flex items-center gap-5">
          <a
            href={site.github}
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub profile"
            className="link-underline text-mist-dim transition-colors hover:text-accent"
          >
            <FaGithub className="h-5 w-5" />
          </a>
          <a
            href={`mailto:${site.email}`}
            aria-label="Send an email"
            className="link-underline text-mist-dim transition-colors hover:text-accent"
          >
            <HiEnvelope className="h-5 w-5" />
          </a>
          <button
            onClick={scrollToTop}
            className="link-underline flex items-center gap-1.5 font-mono text-xs text-mist-dim transition-colors hover:text-accent"
          >
            Back to top
            <HiArrowUp className="h-3.5 w-3.5" />
          </button>
        </div>

        <p className="font-mono text-xs text-mist-dim">
          © {new Date().getFullYear()} {site.name}. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
