import SectionReveal from './SectionReveal'
import { site } from '../data/site'

const stats = [
  { value: '4+', label: 'Projects shipped end to end' },
  { value: '2025', label: 'Started building in production' },
  { value: '2027', label: 'Expected graduation, BS CS' },
]

export default function About() {
  return (
    <section id="about" className="section-px py-24 sm:py-28">
      <div className="mx-auto max-w-6xl">
        <SectionReveal>
          <p className="eyebrow">ABOUT</p>
          <h2 className="mt-4 text-3xl font-semibold text-mist sm:text-4xl">
            Full stack development, <span className="text-accent">start to finish</span>
          </h2>
        </SectionReveal>

        <div className="mt-12 grid grid-cols-1 gap-12 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="space-y-5">
            {site.aboutParagraphs.map((paragraph, index) => (
              <SectionReveal key={paragraph.slice(0, 24)} delay={index * 0.08}>
                <p className="text-[15px] leading-relaxed text-mist-muted sm:text-base">
                  {paragraph}
                </p>
              </SectionReveal>
            ))}
          </div>

          <SectionReveal delay={0.2}>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-3 lg:grid-cols-1">
              {stats.map((stat) => (
                <div key={stat.label} className="card-lift glass rounded-2xl p-6">
                  <p className="font-display text-3xl font-semibold text-accent sm:text-4xl">
                    {stat.value}
                  </p>
                  <p className="mt-2 text-sm text-mist-muted">{stat.label}</p>
                </div>
              ))}
            </div>
          </SectionReveal>
        </div>
      </div>
    </section>
  )
}
