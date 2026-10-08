import { skills } from '../data/portfolio'
import Section from './Section'

export default function Skills() {
  return (
    <Section id="skills" eyebrow="Skills" title="What I work with" className="bg-surface/30">
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {skills.map((group) => (
          <div
            key={group.category}
            className="bg-surface border border-border rounded-2xl p-6 hover:border-accent/50 transition-colors"
          >
            <h3 className="text-text font-semibold mb-4">{group.category}</h3>
            <div className="flex flex-wrap gap-2">
              {group.items.map((item) => (
                <span
                  key={item}
                  className="text-xs font-medium px-3 py-1.5 rounded-full bg-bg border border-border text-text-muted"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  )
}
