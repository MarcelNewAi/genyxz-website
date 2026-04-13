import { useState } from 'react'

function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <main className="min-h-screen bg-background text-text-primary">
      <header className="top-nav">
        <div className="top-nav-inner">
          <a href="/" className="top-nav-link is-active" aria-label="GenYXZ homepage">
            <span className="font-heading font-semibold text-logo-gen">Gen</span>
            <span className="font-heading font-semibold text-logo-y">Y</span>
            <span className="font-heading font-semibold text-logo-x">X</span>
            <span className="font-heading font-semibold text-logo-z">Z</span>
          </a>

          <nav className="top-nav-links" aria-label="Primary navigation">
            <a className="top-nav-link is-active" href="#domov">Domov</a>
            <a className="top-nav-link" href="#o-nas">O nas</a>
            <a className="top-nav-link" href="#partnerji">Partnerji</a>
            <a className="top-nav-link" href="#kontakt">Kontakt</a>
            <button type="button" className="btn btn-primary">Postani ambasador</button>
          </nav>

          <button
            type="button"
            className="nav-hamburger"
            aria-expanded={mobileMenuOpen}
            aria-label="Toggle navigation menu"
            onClick={() => setMobileMenuOpen((prev) => !prev)}
          >
            {mobileMenuOpen ? '×' : '☰'}
          </button>
        </div>

        {mobileMenuOpen && (
          <nav className="mobile-menu p-2" aria-label="Mobile navigation">
            <a href="#domov">Domov</a>
            <a href="#o-nas">O nas</a>
            <a href="#partnerji">Partnerji</a>
            <a href="#kontakt">Kontakt</a>
            <div className="px-2 pb-2 pt-1">
              <button type="button" className="btn btn-primary w-full">Postani ambasador</button>
            </div>
          </nav>
        )}
      </header>

      <div className="showcase-shell space-y-10">
        <section id="domov" className="card p-6 md:p-8">
          <p className="section-label">GenYXZ Brand System</p>
          <h1 className="mt-2">Nova generacija, ki razume prihodnost zdravja.</h1>
          <p className="body-copy mt-4 max-w-3xl">
            This preview section validates the Tailwind v4 theme tokens, typography, navigation styles,
            and component states before content implementation.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <button type="button" className="btn btn-primary">Primary CTA</button>
            <button type="button" className="btn btn-secondary">Secondary</button>
            <button type="button" className="btn btn-outline">Outline</button>
            <button type="button" className="btn btn-ghost">Ghost</button>
          </div>
        </section>

        <section id="o-nas" className="grid gap-6 lg:grid-cols-2">
          <article className="card p-6">
            <h2>Typography Scale</h2>
            <h3 className="mt-4">Heading Three Example</h3>
            <p className="body-copy mt-2">
              Inter body text is set to 1.05rem with a 1.75 line-height for long-form readability.
              Headings use Poppins with high contrast and tighter tracking for premium presentation.
            </p>
            <a className="mt-4 inline-flex" href="#kontakt">Link hover style preview</a>
          </article>

          <article className="card p-6">
            <h2>Form Controls</h2>
            <div className="mt-4 space-y-3">
              <input type="text" placeholder="Ime in priimek" />
              <input type="email" placeholder="Email" aria-invalid="true" />
              <select defaultValue="">
                <option value="" disabled>Izberi temo</option>
                <option value="ambasador">Ambasadorstvo</option>
                <option value="partner">Partnerstvo</option>
              </select>
              <textarea placeholder="Sporočilo" />
            </div>
          </article>
        </section>

        <section id="partnerji" className="card navy-gradient p-6 text-white md:p-8">
          <p className="section-label !text-white/80">Dark Section Tokens</p>
          <h2 className="mt-2 !text-white">Navy + Deep Navy Gradient</h2>
          <p className="mt-3 max-w-2xl text-white/80">
            Dark section color tokens are available for premium contrast blocks while keeping mint highlights.
          </p>
          <div className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-4">
            <div className="card !border-white/20 !bg-white/10 p-3 text-sm !text-white">Primary</div>
            <div className="card !border-white/20 !bg-white/10 p-3 text-sm !text-white">Secondary</div>
            <div className="card !border-white/20 !bg-white/10 p-3 text-sm !text-white">Navy</div>
            <div className="card !border-white/20 !bg-white/10 p-3 text-sm !text-white">Navy Deep</div>
          </div>
        </section>

        <section id="kontakt" className="pb-10">
          <div className="card p-6">
            <h2>Token Utility Sample</h2>
            <div className="mt-4 flex flex-wrap gap-2 text-sm font-medium">
              <span className="rounded-full bg-primary px-3 py-1 text-white">bg-primary</span>
              <span className="rounded-full bg-secondary px-3 py-1 text-navy">bg-secondary</span>
              <span className="rounded-full border border-border bg-surface px-3 py-1 text-text-primary">border-border</span>
              <span className="rounded-full bg-logo-y px-3 py-1 text-white">logo-y</span>
              <span className="rounded-full bg-logo-x px-3 py-1 text-white">logo-x</span>
            </div>
          </div>
        </section>
      </div>
    </main>
  )
}

export default App
