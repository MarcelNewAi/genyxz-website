import { Link } from 'react-router-dom'
import useTranslation from '../utils/useTranslation'
import BrandWordmark from './BrandWordmark'
import { IconInstagram, IconLinkedIn, IconYoutube } from './icons'
import navLinks from './navLinks'

export default function Footer() {
  const { t } = useTranslation()
  const currentYear = new Date().getFullYear()

  return (
    <footer className="site-footer">
      <div className="footer-top-line" aria-hidden="true" />
      <div className="footer-content">
        <div className="footer-grid">
          <div className="footer-col">
            <Link aria-label={t('site.title')} className="footer-logo-link" to="/">
              <BrandWordmark inverse />
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
                <a className="footer-link" href={`mailto:${t('kontakt.info_email_value')}`}>
                  {t('kontakt.info_email_value')}
                </a>
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
              <a aria-label="Instagram" className="footer-social-link" href="#">
                <IconInstagram className="icon-sm" />
              </a>
              <a aria-label="LinkedIn" className="footer-social-link" href="#">
                <IconLinkedIn className="icon-sm" />
              </a>
              <a aria-label="YouTube" className="footer-social-link" href="#">
                <IconYoutube className="icon-sm" />
              </a>
            </div>
          </div>

          <span className="footer-version" />
        </div>

        <p className="footer-credit">{t('footer.credit')}</p>
      </div>
    </footer>
  )
}
