import { useEffect, useRef, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import useTranslation from '../utils/useTranslation'
import { AMBASSADOR_URL } from '../utils/constants'
import BrandWordmark from './BrandWordmark'
import { IconClose, IconMenu } from './icons'
import navLinks from './navLinks'

export default function Navbar() {
  const { t } = useTranslation()
  const location = useLocation()
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const mobileOverlayRef = useRef(null)

  useEffect(() => {
    const onScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })

    return () => {
      window.removeEventListener('scroll', onScroll)
    }
  }, [])

  useEffect(() => {
    setIsMenuOpen(false)
  }, [location.pathname])

  useEffect(() => {
    const body = document.body
    const html = document.documentElement

    if (!isMenuOpen) {
      body.style.overflow = ''
      html.style.overflow = ''
      return undefined
    }

    body.style.overflow = 'hidden'
    html.style.overflow = 'hidden'

    return () => {
      body.style.overflow = ''
      html.style.overflow = ''
    }
  }, [isMenuOpen])

  useEffect(() => {
    if (!isMenuOpen || !mobileOverlayRef.current) {
      return
    }

    mobileOverlayRef.current.scrollTo({ top: 0, left: 0, behavior: 'auto' })
  }, [isMenuOpen])

  useEffect(() => {
    const onKeyDown = (event) => {
      if (event.key === 'Escape') {
        setIsMenuOpen(false)
      }
    }

    window.addEventListener('keydown', onKeyDown)

    return () => {
      window.removeEventListener('keydown', onKeyDown)
    }
  }, [])

  return (
    <>
      <header className={`site-navbar ${isScrolled ? 'is-scrolled' : ''}`}>
        <div className="navbar-inner">
          <Link aria-label={t('site.title')} className="navbar-logo" to="/">
            <BrandWordmark />
          </Link>

          <nav aria-label={t('site.title')} className="navbar-center">
            {navLinks.map((item) => (
              <NavLink
                className={({ isActive }) => `navbar-link ${isActive ? 'is-active' : ''}`}
                end={item.to === '/'}
                key={item.to}
                to={item.to}
              >
                {t(item.key)}
              </NavLink>
            ))}
          </nav>

          <div className="navbar-actions">
            <a className="btn btn-primary navbar-cta" href={AMBASSADOR_URL}>
              {t('nav.cta')}
            </a>

            <button
              aria-controls="mobile-nav-overlay"
              aria-expanded={isMenuOpen}
              aria-label={t('site.title')}
              className={`navbar-hamburger ${isMenuOpen ? 'is-open' : ''}`}
              onClick={() => setIsMenuOpen((prev) => !prev)}
              type="button"
            >
              {isMenuOpen ? <IconClose className="icon-sm" /> : <IconMenu className="icon-sm" />}
            </button>
          </div>
        </div>
      </header>

      <div
        className={`mobile-nav-overlay ${isMenuOpen ? 'is-open' : ''}`}
        id="mobile-nav-overlay"
        ref={mobileOverlayRef}
        onClick={(event) => {
          if (event.target === event.currentTarget) {
            setIsMenuOpen(false)
          }
        }}
      >
        <div className="mobile-nav-content">
          <nav aria-label={t('site.title')} className="mobile-nav-links">
            {navLinks.map((item, index) => (
              <NavLink
                className={({ isActive }) => `mobile-nav-link ${isActive ? 'is-active' : ''}`}
                end={item.to === '/'}
                key={item.to}
                onClick={() => setIsMenuOpen(false)}
                style={{ transitionDelay: `${index * 40}ms` }}
                to={item.to}
              >
                <span aria-hidden="true" className="mobile-nav-index">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <span className="mobile-nav-text">{t(item.key)}</span>
              </NavLink>
            ))}
          </nav>

          <a className="btn btn-primary mobile-cta" href={AMBASSADOR_URL} onClick={() => setIsMenuOpen(false)}>
            {t('nav.cta')}
          </a>
        </div>
      </div>
    </>
  )
}
