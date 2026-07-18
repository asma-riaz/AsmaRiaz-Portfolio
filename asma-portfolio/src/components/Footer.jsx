import { FaGithub } from 'react-icons/fa'
import { HiArrowUp, HiEnvelope } from 'react-icons/hi2'
import { site } from '../data/site'

export default function Footer() {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' })

  return (
    <footer className="section-px border-t border-border py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-5 sm:flex-row sm:justify-between">
        <p className="font-mono text-sm text-mist-dim">
          <span className="font-semibold text-accent">Asma Riaz</span>
        </p>



        <p className="font-mono text-xs text-mist-dim">
          © {new Date().getFullYear()} {site.name}. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
