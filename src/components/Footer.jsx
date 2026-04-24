import { Link } from 'react-router-dom'
import useTranslation from '../utils/useTranslation'
import CopyEmailLink from './CopyEmailLink'
import { IconInstagram, IconLinkedIn, IconYoutube } from './icons'
import navLinks from './navLinks'

const SOCIAL_LINKS = [
  { href: 'https://www.instagram.com/', icon: IconInstagram, label: 'Instagram' },
  { href: 'https://www.linkedin.com/', icon: IconLinkedIn, label: 'LinkedIn' },
  { href: 'https://www.youtube.com/', icon: IconYoutube, label: 'YouTube' },
]

export default function Footer() {
  const { t } = useTranslation()
  const currentYear = new Date().getFullYear()

  return (
    <footer className="site-footer">
      <div aria-hidden="true" className="footer-bg-layer footer-bg-layer-a" />
      <div aria-hidden="true" className="footer-bg-layer footer-bg-layer-b" />
      <div className="footer-top-line" aria-hidden="true" />
      <div className="footer-content">
        <div className="footer-grid">
          <div className="footer-col">
            <Link aria-label={t('site.title')} className="footer-logo-link" to="/">
              <img alt={t('site.title')} className="brand-wordmark-image" decoding="async" loading="lazy" src="/Logo-bel.svg" />
            </Link>
            <p className="footer-tagline">{t('footer.tagline')}</p>
            <p className="footer-copy">{t('footer.description')}</p>
          </div>

          <div className="footer-col">
            <p className="footer-heading">{t('footer.nav_heading')}</p>
            <ul className="footer-list">
              {navLinks.map((item) => (
                <li key={item.to}>
                  <Link className="footer-link" to={item.to}>
                    {t(item.key)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer-col">
            <p className="footer-heading">{t('footer.contact_heading')}</p>
            <ul className="footer-list">
              <li>
                <CopyEmailLink className="footer-link" copiedLabel={t('kontakt.copy_email_success')} email={t('kontakt.info_email_value')} />
              </li>
              <li>
                <p className="footer-copy">{t('kontakt.info_location_value')}</p>
              </li>
            </ul>
          </div>

          <div className="footer-col">
            <p className="footer-heading">{t('footer.legal_heading')}</p>
            <ul className="footer-list">
              <li>
                <a className="footer-link" href="#">
                  {t('footer.privacy')}
                </a>
              </li>
              <li>
                <a className="footer-link" href="#">
                  {t('footer.terms')}
                </a>
              </li>
              <li>
                <a className="footer-link" href="#">
                  {t('footer.cookies')}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom-row">
          <p className="footer-copy">{t('footer.copyright', { year: currentYear })}</p>

          <div className="footer-social-group">
            <p className="footer-social-heading">{t('footer.social_heading')}</p>
            <div className="footer-social-icons">
              {SOCIAL_LINKS.map((item) => {
                const Icon = item.icon

                return (
                  <a
                    aria-label={item.label}
                    className="footer-social-link"
                    href={item.href}
                    key={item.label}
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    <Icon className="icon-sm" />
                  </a>
                )
              })}
            </div>
          </div>
        </div>

        <div className="footer-made-by-row">
          <div className="footer-made-by">
            <span className="footer-made-by-label">{t('footer.made_by')}</span>
            <a
              aria-label="ALM Flow"
              className="footer-made-by-link"
              href="https://www.almflow.com/sl/"
              rel="noopener noreferrer"
              target="_blank"
            >
              <img alt="ALM Flow" className="footer-made-by-logo" decoding="async" loading="lazy" src="/ALM-logo.svg" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
