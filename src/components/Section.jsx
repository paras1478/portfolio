export default function Section({ id, eyebrow, title, children, className = '' }) {
  return (
    <section id={id} className={`py-20 sm:py-28 px-6 ${className}`}>
      <div className="max-w-6xl mx-auto">
        {(eyebrow || title) && (
          <div className="mb-12 text-center">
            {eyebrow && (
              <p className="text-accent-light text-sm font-medium tracking-wide uppercase mb-2">
                {eyebrow}
              </p>
            )}
            {title && (
              <h2 className="text-3xl sm:text-4xl font-bold text-text tracking-tight">{title}</h2>
            )}
          </div>
        )}
        {children}
      </div>
    </section>
  )
}
