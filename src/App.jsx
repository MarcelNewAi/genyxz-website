import { useEffect } from 'react'
import { Link, NavLink, Route, Routes, useLocation } from 'react-router-dom'
import useTranslation from './utils/useTranslation'
import Ambasadorji from './pages/Ambasadorji'
import Domov from './pages/Domov'
import KajDelamo from './pages/KajDelamo'
import Kontakt from './pages/Kontakt'
import NotFound from './pages/NotFound'
import ONas from './pages/ONas'
import Partnerji from './pages/Partnerji'

function ScrollToTop() {
  const location = useLocation()

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'auto' })
  }, [location.pathname])

  return null
}

function HeaderPlaceholder() {
  const { t } = useTranslation()

  return (
    <header className="top-nav">
      <div className="top-nav-inner">
        <Link to="/" className="top-nav-link is-active">
          {t('site.title')}
        </Link>
        <nav className="top-nav-links" aria-label={t('site.title')}>
          <NavLink className="top-nav-link" to="/">
            {t('nav.domov')}
          </NavLink>
          <NavLink className="top-nav-link" to="/o-nas">
            {t('nav.o-nas')}
          </NavLink>
          <NavLink className="top-nav-link" to="/kaj-delamo">
            {t('nav.kaj-delamo')}
          </NavLink>
          <NavLink className="top-nav-link" to="/partnerji">
            {t('nav.partnerji')}
          </NavLink>
          <NavLink className="top-nav-link" to="/ambasadorji">
            {t('nav.ambasadorji')}
          </NavLink>
          <NavLink className="top-nav-link" to="/kontakt">
            {t('nav.kontakt')}
          </NavLink>
          <button className="btn btn-primary" type="button">
            {t('nav.cta')}
          </button>
        </nav>
      </div>
    </header>
  )
}

function FooterPlaceholder() {
  const { t } = useTranslation()

  return (
    <footer className="border-t border-border bg-surface">
      <div className="mx-auto flex w-full max-w-[1200px] flex-wrap items-center justify-between gap-4 px-4 py-6">
        <p className="body-copy">{t('footer.credit')}</p>
        <div className="flex items-center gap-4">
          <a href="#">{t('footer.privacy')}</a>
          <a href="#">{t('footer.terms')}</a>
        </div>
      </div>
    </footer>
  )
}

function AppLayout() {
  return (
    <main className="min-h-screen bg-background text-text-primary">
      <ScrollToTop />
      <HeaderPlaceholder />
      <div className="showcase-shell">
        <Routes>
          <Route path="/" element={<Domov />} />
          <Route path="/o-nas" element={<ONas />} />
          <Route path="/kaj-delamo" element={<KajDelamo />} />
          <Route path="/partnerji" element={<Partnerji />} />
          <Route path="/ambasadorji" element={<Ambasadorji />} />
          <Route path="/kontakt" element={<Kontakt />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
      <FooterPlaceholder />
    </main>
  )
}

export default function App() {
  return <AppLayout />
}
