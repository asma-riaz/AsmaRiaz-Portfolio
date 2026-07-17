import { HiAcademicCap, HiCheckBadge } from 'react-icons/hi2'
import SectionReveal from './SectionReveal'
import { education, certifications } from '../data/experience'

export default function Education() {
  return (
    <section id="education" className="section-px py-24 sm:py-28">
      <div className="mx-auto max-w-6xl">
        <SectionReveal>
          <p className="eyebrow">EDUCATION & CERTIFICATIONS</p>
          <h2 className="mt-4 text-3xl font-semibold text-mist sm:text-4xl">
            Building Through  <span className="text-accent">Learning</span>
          </h2>
        </SectionReveal>

        <div className="relative mt-14 space-y-8 pl-8 sm:pl-10">
          <div className="timeline-rail absolute bottom-2 left-[7px] top-2 w-px sm:left-[9px]" />

          <SectionReveal className="relative">
            <span className="absolute -left-8 top-1.5 h-3.5 w-3.5 rounded-full border-2 border-accent bg-ink sm:-left-10" />
            <div className="card-lift glass rounded-2xl p-7 sm:p-8">
              <div className="flex items-start gap-4">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-accent-soft text-accent">
                  <HiAcademicCap className="h-5 w-5" />
                </span>
                <div>
                  <h3 className="text-lg font-semibold text-mist">{education.degree}</h3>
                  <p className="mt-1 font-mono text-sm text-mist-muted">{education.school}</p>
                  <p className="mt-1 text-sm text-mist-dim">{education.location}</p>
                </div>
              </div>
              <p className="mt-4 inline-block w-fit rounded-full border border-border px-3 py-1 font-mono text-xs text-accent">
                {education.period}
              </p>
            </div>
          </SectionReveal>

          {certifications.map((cert, index) => (
            <SectionReveal key={cert.title} delay={0.1 + index * 0.08} className="relative">
              <span className="absolute -left-8 top-1.5 h-3.5 w-3.5 rounded-full border-2 border-accent bg-ink sm:-left-10" />
              <div className="card-lift glass flex items-start gap-4 rounded-2xl p-6">
                <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-accent-soft text-accent">
                  <HiCheckBadge className="h-5 w-5" />
                </span>
                <div>
                  <p className="text-sm font-medium text-mist">{cert.title}</p>
                  <p className="mt-0.5 text-sm text-mist-dim">{cert.org}</p>
                  <p className="mt-0.5 font-mono text-xs text-accent">{cert.period}</p>
                </div>
              </div>
            </SectionReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
