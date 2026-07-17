import { useState } from 'react'
import { HiEnvelope, HiPaperAirplane } from 'react-icons/hi2'
import { FaGithub } from 'react-icons/fa'
import SectionReveal from './SectionReveal'
import { site } from '../data/site'

const WEB3FORMS_KEY = import.meta.env.VITE_WEB3FORMS_KEY

export default function Contact() {
  const [status, setStatus] = useState('idle') // idle | sending | success | error
  const [values, setValues] = useState({ name: '', email: '', message: '' })

  const handleChange = (e) => {
    setValues((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (!WEB3FORMS_KEY) {
      setStatus('error')
      return
    }

    setStatus('sending')
    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json'  },
        body: JSON.stringify({
          access_key: WEB3FORMS_KEY,
          subject: `Portfolio message from ${values.name}`,
          from_name: values.name,
          ...values,
        }),
      })
      const result = await response.json()
      if (result.success) {
        setStatus('success')
        setValues({ name: '', email: '', message: '' })
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  return (
    <section id="contact" className="section-px relative py-24 sm:py-28">
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute bottom-[-20%] left-1/2 h-72 w-[36rem] -translate-x-1/2 rounded-full bg-accent/10 blur-[130px]" />
      </div>

      <div className="mx-auto max-w-5xl">
        <SectionReveal>
          <p className="eyebrow">CONTACT</p>
          <h2 className="mt-4 text-3xl font-semibold text-mist sm:text-4xl">
            Let&apos;s <span className="text-accent">Connect</span>
          </h2>
          <p className="mt-4 max-w-xl text-[15px] leading-relaxed text-mist-muted sm:text-base">
            Have a project, internship opportunity, or question? Send a message below or reach out directly. I'd love to hear from you.
          </p>
        </SectionReveal>

        <div className="mt-10 grid grid-cols-1 gap-8 lg:grid-cols-[1fr_0.8fr]">
          <SectionReveal>
            <form onSubmit={handleSubmit} className="glass space-y-5 rounded-2xl p-6 sm:p-8">
              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                <div>
                  <label htmlFor="name" className="font-mono text-xs text-mist-dim">
                    NAME
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={values.name}
                    onChange={handleChange}
                    className="mt-2 w-full rounded-lg border border-border bg-white/[0.03] px-4 py-3 text-sm text-mist outline-none transition-colors focus:border-accent/60"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="font-mono text-xs text-mist-dim">
                    EMAIL
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={values.email}
                    onChange={handleChange}
                    className="mt-2 w-full rounded-lg border border-border bg-white/[0.03] px-4 py-3 text-sm text-mist outline-none transition-colors focus:border-accent/60"
                    placeholder="you@email.com"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="message" className="font-mono text-xs text-mist-dim">
                  MESSAGE
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  value={values.message}
                  onChange={handleChange}
                  className="mt-2 w-full resize-none rounded-lg border border-border bg-white/[0.03] px-4 py-3 text-sm text-mist outline-none transition-colors focus:border-accent/60"
                  placeholder="Tell me a bit about the role or project..."
                />
              </div>

              <button
                type="submit"
                disabled={status === 'sending'}
                className="btn-ripple flex items-center gap-2 rounded-full bg-accent px-7 py-3.5 font-mono text-sm font-medium text-ink transition-transform hover:-translate-y-0.5 hover:bg-accent-hover disabled:opacity-60"
              >
                <HiPaperAirplane className="h-4 w-4" />
                {status === 'sending' ? 'Sending...' : 'Send Message'}
              </button>

              {status === 'success' && (
                <p className="font-mono text-sm text-accent">
                  Message sent. I&apos;ll get back to you soon.
                </p>
              )}
              {status === 'error' && (
                <p className="font-mono text-sm text-accent-hover">
                  Something went wrong. Please email me directly at {site.email}.
                </p>
              )}
            </form>
          </SectionReveal>

          <SectionReveal delay={0.1}>
            <div className="glass flex h-full flex-col justify-between gap-8 rounded-2xl p-7 sm:p-8">
              <div>
                <h3 className="font-mono text-sm tracking-wide text-mist-muted">
                  DIRECT CONTACT
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-mist-muted">
                  Prefer email or GitHub? Both are one tap away.
                </p>
              </div>
              <div className="flex flex-col gap-3">
                <a
                  href={`mailto:${site.email}`}
                  className="flex items-center gap-3 rounded-xl border border-border bg-white/[0.03] px-5 py-3.5 text-sm text-mist transition-colors hover:border-accent/40"
                >
                  <HiEnvelope className="h-5 w-5 text-accent" />
                  {site.email}
                </a>
                <a
                  href={site.github}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-3 rounded-xl border border-border bg-white/[0.03] px-5 py-3.5 text-sm text-mist transition-colors hover:border-accent/40"
                >
                  <FaGithub className="h-5 w-5 text-accent" />
                  github.com/asma-riaz
                </a>
              </div>
            </div>
          </SectionReveal>
        </div>
      </div>
    </section>
  )
}
