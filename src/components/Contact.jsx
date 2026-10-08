import { useState } from 'react'
import { Mail, Github, Linkedin, Send } from 'lucide-react'
import { profile } from '../data/portfolio'
import Section from './Section'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [sent, setSent] = useState(false)

  const handleChange = (e) => {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const subject = encodeURIComponent(`Portfolio contact from ${form.name}`)
    const body = encodeURIComponent(`${form.message}\n\nFrom: ${form.name} (${form.email})`)
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`
    setSent(true)
  }

  return (
    <Section id="contact" eyebrow="Contact" title="Let's Connect">
      <p className="text-text-muted text-center max-w-xl mx-auto mb-12 -mt-6">
        I'm open to internship opportunities, entry-level roles, and interesting project
        collaborations.
      </p>

      <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        <div className="flex flex-col gap-4">
          <a
            href={`mailto:${profile.email}`}
            className="flex items-center gap-4 bg-surface border border-border rounded-xl p-5 hover:border-accent/50 transition-colors"
          >
            <div className="w-10 h-10 rounded-lg bg-accent/15 flex items-center justify-center shrink-0">
              <Mail size={18} className="text-accent-light" />
            </div>
            <div className="text-left">
              <p className="text-text text-sm font-medium">Email</p>
              <p className="text-text-muted text-sm">{profile.email}</p>
            </div>
          </a>

          <a
            href={profile.github}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-4 bg-surface border border-border rounded-xl p-5 hover:border-accent/50 transition-colors"
          >
            <div className="w-10 h-10 rounded-lg bg-accent/15 flex items-center justify-center shrink-0">
              <Github size={18} className="text-accent-light" />
            </div>
            <div className="text-left">
              <p className="text-text text-sm font-medium">GitHub</p>
              <p className="text-text-muted text-sm">View my repositories</p>
            </div>
          </a>

          <a
            href={profile.linkedin}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-4 bg-surface border border-border rounded-xl p-5 hover:border-accent/50 transition-colors"
          >
            <div className="w-10 h-10 rounded-lg bg-accent/15 flex items-center justify-center shrink-0">
              <Linkedin size={18} className="text-accent-light" />
            </div>
            <div className="text-left">
              <p className="text-text text-sm font-medium">LinkedIn</p>
              <p className="text-text-muted text-sm">Let's connect professionally</p>
            </div>
          </a>
        </div>

        <form
          onSubmit={handleSubmit}
          className="bg-surface border border-border rounded-xl p-6 flex flex-col gap-4 text-left"
        >
          <div>
            <label className="text-xs font-medium text-text-muted block mb-1.5">Name</label>
            <input
              required
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              className="w-full bg-bg border border-border rounded-lg px-3.5 py-2.5 text-sm text-text focus:outline-none focus:border-accent transition-colors"
              placeholder="Your name"
            />
          </div>
          <div>
            <label className="text-xs font-medium text-text-muted block mb-1.5">Email</label>
            <input
              required
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              className="w-full bg-bg border border-border rounded-lg px-3.5 py-2.5 text-sm text-text focus:outline-none focus:border-accent transition-colors"
              placeholder="you@example.com"
            />
          </div>
          <div>
            <label className="text-xs font-medium text-text-muted block mb-1.5">Message</label>
            <textarea
              required
              name="message"
              value={form.message}
              onChange={handleChange}
              rows={4}
              className="w-full bg-bg border border-border rounded-lg px-3.5 py-2.5 text-sm text-text focus:outline-none focus:border-accent transition-colors resize-none"
              placeholder="Tell me about the opportunity..."
            />
          </div>
          <button
            type="submit"
            className="inline-flex items-center justify-center gap-2 bg-accent hover:bg-accent-light transition-colors text-white text-sm font-medium rounded-lg px-5 py-2.5 mt-2"
          >
            <Send size={15} />
            Send Message
          </button>
          {sent && (
            <p className="text-xs text-accent-light text-center">
              Opening your email client to send this message...
            </p>
          )}
          <p className="text-xs text-text-dim text-center">
            This form opens your email client — no backend is connected yet.
          </p>
        </form>
      </div>
    </Section>
  )
}
