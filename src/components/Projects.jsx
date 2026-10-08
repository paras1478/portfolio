import { Github, ExternalLink, Sparkles, Clock } from 'lucide-react'
import { projects } from '../data/portfolio'
import Section from './Section'

function ProjectCard({ project }) {
  const { name, description, tech, github, demo, featured } = project

  return (
    <div
      className={`group relative flex flex-col rounded-2xl p-6 sm:p-7 transition-all duration-300 hover:-translate-y-1 ${
        featured
          ? 'bg-surface border border-accent/40 hover:border-accent sm:col-span-2 lg:col-span-1'
          : 'bg-surface border border-border hover:border-accent/50'
      }`}
    >
      {featured && (
        <div className="absolute -top-24 -right-24 w-64 h-64 bg-accent/20 rounded-full blur-3xl pointer-events-none" />
      )}

      <div className="relative flex flex-col flex-1">
        {featured && (
          <span className="inline-flex items-center gap-1.5 w-fit text-xs font-medium px-3 py-1 rounded-full bg-accent/15 text-accent-light mb-4">
            <Sparkles size={12} />
            Featured Project
          </span>
        )}

        <h3 className="text-text font-semibold text-lg mb-2">{name}</h3>
        <p className="text-text-muted text-sm leading-relaxed mb-4 flex-1">{description}</p>

        <div className="flex flex-wrap gap-2 mb-6">
          {tech.map((t) => (
            <span
              key={t}
              className="text-xs font-medium px-2.5 py-1 rounded-full bg-bg border border-border text-text-muted"
            >
              {t}
            </span>
          ))}
        </div>

        <div className="flex gap-3">
          <a
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-bg border border-border hover:border-accent text-text text-xs font-medium transition-colors"
          >
            <Github size={14} />
            GitHub
          </a>
          <a
            href={demo}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-accent hover:bg-accent-light text-white text-xs font-medium transition-colors"
          >
            <ExternalLink size={14} />
            Live Demo
          </a>
        </div>
      </div>
    </div>
  )
}

function ComingSoonCard() {
  return (
    <div className="flex flex-col items-center justify-center text-center rounded-2xl p-6 sm:p-7 border border-dashed border-border bg-surface/50 min-h-[260px]">
      <div className="w-10 h-10 rounded-xl bg-bg border border-border flex items-center justify-center mb-4">
        <Clock size={18} className="text-text-dim" />
      </div>
      <p className="text-text-muted text-sm font-medium">More projects coming soon</p>
    </div>
  )
}

export default function Projects() {
  return (
    <Section id="projects" eyebrow="Projects" title="What I've been building">
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
        {projects.map((project) => (
          <ProjectCard key={project.name} project={project} />
        ))}
        <ComingSoonCard />
      </div>
    </Section>
  )
}
