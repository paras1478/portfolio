import { GraduationCap } from 'lucide-react'
import { education } from '../data/portfolio'
import Section from './Section'

export default function Education() {
  return (
    <Section id="education" eyebrow="Education" title="Academic background">
      <div className="max-w-xl mx-auto flex items-start gap-5 bg-surface border border-border rounded-2xl p-7">
        <div className="shrink-0 w-12 h-12 rounded-xl bg-accent/15 flex items-center justify-center">
          <GraduationCap className="text-accent-light" size={24} />
        </div>
        <div className="text-left">
          <h3 className="text-text font-semibold text-lg">{education.degree}</h3>
          <p className="text-text-muted text-sm mt-1">{education.institute}</p>
          <span className="inline-block mt-3 text-xs font-medium px-3 py-1 rounded-full bg-accent/15 text-accent-light">
            {education.status}
          </span>
        </div>
      </div>
    </Section>
  )
}
