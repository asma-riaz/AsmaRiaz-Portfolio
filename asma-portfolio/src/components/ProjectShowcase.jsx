import { useState } from 'react'
import { HiArrowTopRightOnSquare, HiCheckCircle } from 'react-icons/hi2'
import { FaGithub } from 'react-icons/fa'

function ProjectPreview({ project }) {
  const [videoFailed, setVideoFailed] = useState(false)
  const showVideo = Boolean(project.video) && !videoFailed

  return (
    <div className="glass-strong card-lift group overflow-hidden rounded-2xl">
      <div className="flex items-center gap-1.5 border-b border-border bg-white/[0.02] px-4 py-3">
        <span className="h-2.5 w-2.5 rounded-full bg-red-400/70" />
        <span className="h-2.5 w-2.5 rounded-full bg-yellow-400/70" />
        <span className="h-2.5 w-2.5 rounded-full bg-green-400/70" />
        <span className="ml-3 truncate font-mono text-xs text-mist-dim">{project.fileName}</span>
      </div>

      <div className="relative aspect-[16/10] overflow-hidden bg-gradient-to-br from-accent/25 via-transparent to-surface/60">
        {showVideo ? (
          <video
            className="h-full w-full object-fit"
            controls
            muted
            loop
            playsInline
            preload="metadata"
            onError={() => setVideoFailed(true)}
          >
            <source src={project.video} type="video/mp4" onError={() => setVideoFailed(true)} />
          </video>
        ) : (
          <>
            <div className="absolute inset-0 bg-ink-elevated/40" />
            <div className="relative flex h-full flex-col items-center justify-center gap-4 px-6 text-center transition-transform duration-500 ease-out group-hover:scale-105">
              <span className="font-display text-2xl font-semibold text-mist sm:text-3xl">
                {project.title}
              </span>
              <div className="flex w-full max-w-xs flex-col gap-2">
                <span className="h-2 w-3/4 self-center rounded-full bg-white/10" />
                <span className="h-2 w-full rounded-full bg-white/[0.06]" />
                <span className="h-2 w-5/6 self-center rounded-full bg-white/[0.06]" />
              </div>
              <span className="font-mono text-[11px] tracking-widest text-mist-dim">
                PREVIEW · ADD SCREENSHOT OR DEMO VIDEO IN /public/projects
              </span>
            </div>
          </>
        )}
      </div>
    </div>
  )
}

export default function ProjectShowcase({ project, index }) {
  return (
    <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:items-center lg:gap-12">
      <ProjectPreview project={project} index={index} />

      <div>
        <p className="font-mono text-xs tracking-[0.3em] text-accent">{project.period}</p>
        <h3 className="mt-2 font-display text-2xl font-semibold text-mist sm:text-3xl">
          {project.title}
        </h3>
        <p className="mt-1 font-mono text-sm text-mist-muted">{project.subtitle}</p>

        <p className="mt-5 text-[15px] leading-relaxed text-mist-muted sm:text-base">
          {project.description}
        </p>

        <div className="mt-5 flex flex-wrap gap-2">
          {project.tech.map((tech) => (
            <span
              key={tech}
              className="rounded-full border border-border bg-white/[0.03] px-3 py-1 font-mono text-xs text-mist-muted"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="mt-7 grid grid-cols-1 gap-6 sm:grid-cols-2">
          <div>
            <h4 className="font-mono text-xs tracking-wide text-mist-dim">KEY FEATURES</h4>
            <ul className="mt-3 space-y-2">
              {project.features.map((feature) => (
                <li key={feature} className="flex gap-2 text-sm text-mist-muted">
                  <HiCheckCircle className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-mono text-xs tracking-wide text-mist-dim">CHALLENGES SOLVED</h4>
            <ul className="mt-3 space-y-2">
              {project.challenges.map((challenge) => (
                <li key={challenge} className="flex gap-2 text-sm text-mist-muted">
                  <HiCheckCircle className="mt-0.5 h-4 w-4 shrink-0 text-accent-hover" />
                  <span>{challenge}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-8 flex flex-wrap gap-3">
          {project.live ? (
            <a
              href={project.live}
              target="_blank"
              rel="noreferrer"
              className="btn-ripple flex items-center gap-2 rounded-full bg-accent px-5 py-2.5 font-mono text-sm font-medium text-ink hover:bg-accent-hover"
            >
              <HiArrowTopRightOnSquare className="h-4 w-4" />
              Live Demo
            </a>
          ) : null}
          <a
            href={project.github}
            target="_blank"
            rel="noreferrer"
            className="btn-ripple glass flex items-center gap-2 rounded-full px-5 py-2.5 font-mono text-sm font-medium text-mist"
          >
            <FaGithub className="h-4 w-4" />
            GitHub
          </a>
        </div>
      </div>
    </div>
  )
}
