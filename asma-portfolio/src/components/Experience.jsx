import SectionReveal from './SectionReveal'
import { experience } from '../data/experience'

export default function Experience() {
  return (
    <section id="experience" className="section-px py-24 sm:py-28">
      <div className="mx-auto max-w-6xl">
        <SectionReveal>
          <p className="eyebrow">EXPERIENCE</p>
          <h2 className="mt-4 text-3xl font-semibold text-mist sm:text-4xl">
            Places I&apos;ve <span className="text-accent">Contributed</span>
          </h2>
        </SectionReveal>

        <div className="relative mt-14 space-y-10 pl-8 sm:pl-10">
          <div className="timeline-rail absolute bottom-2 left-[7px] top-2 w-px sm:left-[9px]" />

          {experience.map((role, index) => (
            <SectionReveal key={role.id} delay={index * 0.1} className="relative">
              <span className="absolute -left-8 top-1.5 h-3.5 w-3.5 rounded-full border-2 border-accent bg-ink sm:-left-10" />

              <div className="card-lift glass grid grid-cols-1 gap-4 rounded-2xl p-6 sm:p-8 lg:grid-cols-[240px_1fr]">
                <div>
                  <h3 className="text-lg font-semibold text-mist">{role.role}</h3>
                  <p className="mt-1 font-mono text-sm text-mist-muted">{role.org}</p>
                  <p className="mt-1 text-sm text-mist-dim">{role.location}</p>
                  <p className="mt-3 inline-block rounded-full border border-border px-3 py-1 font-mono text-xs text-accent">
                    {role.period}
                  </p>
                </div>
                <ul className="space-y-2.5 border-t border-border pt-4 lg:border-l lg:border-t-0 lg:pl-8 lg:pt-0">
                  {role.points.map((point) => (
                    <li key={point} className="text-[15px] leading-relaxed text-mist-muted">
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            </SectionReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
