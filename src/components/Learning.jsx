import { BookOpen } from 'lucide-react'
import { learning } from '../data/portfolio'
import Section from './Section'

export default function Learning() {
  return (
    <Section eyebrow="Currently Learning" title="Always leveling up" className="bg-surface/30">
      <div className="flex flex-wrap justify-center gap-4 max-w-3xl mx-auto">
        {learning.map((item) => (
          <div
            key={item}
            className="flex items-center gap-2 px-5 py-3 rounded-xl bg-surface border border-border text-text-muted text-sm font-medium hover:border-accent/50 hover:text-text transition-colors"
          >
            <BookOpen size={15} className="text-accent-light" />
            {item}
          </div>
        ))}
      </div>
    </Section>
  )
}
