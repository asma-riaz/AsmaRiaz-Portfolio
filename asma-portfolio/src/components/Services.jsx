import { motion } from 'framer-motion'
import SectionReveal from './SectionReveal'
import { services } from '../data/services'

export default function Services() {
  return (
    <section id="services" className="section-px py-24 sm:py-28">
      <div className="mx-auto max-w-6xl">
        <SectionReveal>
          <p className="eyebrow">SERVICES</p>
          <h2 className="mt-4 text-3xl font-semibold text-mist sm:text-4xl">
            What I can <span className="text-accent">Build</span>
          </h2>
          <p className="mt-4 max-w-xl text-[15px] leading-relaxed text-mist-muted sm:text-base">
            From responsive frontends to reliable backends, I build complete web applications that are fast, functional, and built for real users.
          </p>
        </SectionReveal>

        <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <SectionReveal key={service.id} delay={index * 0.06}>
                <div className="card-lift glass group h-full rounded-2xl p-7">
                  <motion.span
                    whileHover={{ rotate: -8, scale: 1.08 }}
                    transition={{ type: 'spring', stiffness: 300, damping: 16 }}
                    className="flex h-12 w-12 items-center justify-center rounded-xl border border-border bg-accent-soft text-accent"
                  >
                    <Icon className="h-6 w-6" />
                  </motion.span>
                  <h3 className="mt-5 text-lg font-semibold text-mist">
                    {service.title}
                  </h3>
                  <p className="mt-2.5 text-sm leading-relaxed text-mist-muted">
                    {service.description}
                  </p>
                </div>
              </SectionReveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
