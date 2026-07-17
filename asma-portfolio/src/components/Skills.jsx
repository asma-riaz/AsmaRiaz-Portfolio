import { motion } from 'framer-motion'
import SectionReveal from './SectionReveal'
import { skillGroups } from '../data/skills'

function SkillRow({ skill, delay }) {
  const Icon = skill.icon
  return (
    <motion.div
      whileHover={{ y: -2 }}
      transition={{ type: 'spring', stiffness: 300, damping: 18 }}
      className="group"
    >
      <div className="flex items-center gap-2.5">
        <motion.span
          whileHover={{ rotate: -10, scale: 1.1 }}
          className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-border bg-white/[0.03] text-accent"
        >
          <Icon className="h-4 w-4" />
        </motion.span>
        <span className="text-sm text-mist">{skill.name}</span>
        <span className="ml-auto font-mono text-xs text-mist-dim">{skill.level}%</span>
      </div>
      <div className="mt-2 h-1.5 w-full overflow-hidden rounded-full bg-white/[0.06]">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${skill.level}%` }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 1, delay, ease: [0.22, 1, 0.36, 1] }}
          className="h-full rounded-full bg-accent"
        />
      </div>
    </motion.div>
  )
}

export default function Skills() {
  return (
    <section id="skills" className="section-px py-24 sm:py-28">
      <div className="mx-auto max-w-6xl">
        <SectionReveal>
          <p className="eyebrow">SKILLS</p>
          <h2 className="mt-4 text-3xl font-semibold text-mist sm:text-4xl">
            My <span className="text-accent"> Tech Stack</span>
          </h2>
        </SectionReveal>

        <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((group, groupIndex) => (
            <SectionReveal
              key={group.id}
              delay={groupIndex * 0.06}
              className={group.wide ? 'sm:col-span-2' : ''}
            >
              <div className="card-lift glass h-full rounded-2xl p-6 sm:p-7">
                <h3 className="font-mono text-xs tracking-[0.2em] text-mist-dim">
                  {group.label.toUpperCase()}
                </h3>
                <div
                  className={`mt-5 grid grid-cols-1 gap-5 ${
                    group.wide ? 'sm:grid-cols-3' : ''
                  }`}
                >
                  {group.skills.map((skill, skillIndex) => (
                    <SkillRow
                      key={skill.name}
                      skill={skill}
                      delay={groupIndex * 0.06 + skillIndex * 0.05}
                    />
                  ))}
                </div>
              </div>
            </SectionReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
