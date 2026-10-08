import { CheckCircle2 } from 'lucide-react'
import { about } from '../data/portfolio'
import Section from './Section'

export default function About() {
  return (
    <Section id="about" eyebrow="About Me" title="Get to know me">
      <div className="max-w-3xl mx-auto bg-surface border border-border rounded-2xl p-8 sm:p-10">
        <p className="text-text-muted text-base sm:text-lg leading-relaxed text-center mb-8">
          {about.intro}
        </p>

        <div className="grid sm:grid-cols-2 gap-3 max-w-xl mx-auto">
          {about.highlights.map((item) => (
            <div
              key={item}
              className="flex items-center gap-2.5 text-sm text-text bg-bg border border-border rounded-lg px-4 py-3"
            >
              <CheckCircle2 size={16} className="text-accent-light shrink-0" />
              {item}
            </div>
          ))}
        </div>
      </div>
    </Section>
  )
}
