import { Github, Linkedin, Mail, ArrowDown, Download } from 'lucide-react'
import { profile } from '../data/portfolio'

export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex flex-col items-center justify-center text-center px-6 pt-16 relative overflow-hidden"
    >
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_80%_50%_at_50%_0%,rgba(99,102,241,0.15),transparent)]" />

      <div className="animate-fade-up">
        <p className="text-accent-light text-sm font-medium tracking-wide mb-4">
          Hi, I'm {profile.name}
        </p>
        <h1 className="text-4xl sm:text-6xl font-bold tracking-tight text-text mb-4">
          {profile.role}
        </h1>
        <p className="max-w-xl mx-auto text-text-muted text-base sm:text-lg leading-relaxed mb-10">
          {profile.intro}
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4 mb-10">
          <a
            href="#projects"
            className="px-6 py-3 rounded-lg bg-accent hover:bg-accent-light transition-colors text-white text-sm font-medium"
          >
            View My Projects
          </a>
          <a
            href="#contact"
            className="px-6 py-3 rounded-lg border border-border hover:border-accent text-text text-sm font-medium transition-colors"
          >
            Contact Me
          </a>
          <a
            href={profile.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            download
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-border hover:border-accent text-text text-sm font-medium transition-colors"
          >
            <Download size={16} />
            Download Resume
          </a>
        </div>

        <div className="flex items-center justify-center gap-5">
          <a
            href={profile.github}
            target="_blank"
            rel="noreferrer"
            className="text-text-muted hover:text-accent-light transition-colors"
            aria-label="GitHub"
          >
            <Github size={22} />
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noreferrer"
            className="text-text-muted hover:text-accent-light transition-colors"
            aria-label="LinkedIn"
          >
            <Linkedin size={22} />
          </a>
          <a
            href={`mailto:${profile.email}`}
            className="text-text-muted hover:text-accent-light transition-colors"
            aria-label="Email"
          >
            <Mail size={22} />
          </a>
        </div>
      </div>

      <a
        href="#about"
        className="absolute bottom-10 text-text-dim hover:text-accent-light transition-colors"
        aria-label="Scroll down"
      >
        <ArrowDown size={20} />
      </a>
    </section>
  )
}
