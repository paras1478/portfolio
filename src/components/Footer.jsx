import { Github, Linkedin, Mail } from 'lucide-react'
import { profile } from '../data/portfolio'

export default function Footer() {
  return (
    <footer className="border-t border-border px-6 py-10">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="text-center sm:text-left">
          <p className="text-text font-semibold">{profile.name}</p>
          <p className="text-text-muted text-sm">{profile.role}</p>
        </div>

        <div className="flex items-center gap-5">
          <a
            href={profile.github}
            target="_blank"
            rel="noreferrer"
            className="text-text-muted hover:text-accent-light transition-colors"
            aria-label="GitHub"
          >
            <Github size={18} />
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noreferrer"
            className="text-text-muted hover:text-accent-light transition-colors"
            aria-label="LinkedIn"
          >
            <Linkedin size={18} />
          </a>
          <a
            href={`mailto:${profile.email}`}
            className="text-text-muted hover:text-accent-light transition-colors"
            aria-label="Email"
          >
            <Mail size={18} />
          </a>
        </div>

        <p className="text-text-dim text-xs">
          © {new Date().getFullYear()} {profile.name}
        </p>
      </div>
    </footer>
  )
}
