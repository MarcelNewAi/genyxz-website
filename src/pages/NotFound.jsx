import { Link } from 'react-router-dom'
import useTranslation from '../utils/useTranslation'

export default function NotFound() {
  const { t } = useTranslation()

  return (
    <section className="section-block section-bg">
      <div className="layout-container" style={{ textAlign: 'center' }}>
        <p className="section-label" data-reveal>
          {t('labels.kontakt')}
        </p>
        <h1 className="section-title" data-reveal data-reveal-delay="90">
          {t('404.title')}
        </h1>
        <p className="section-text" data-reveal data-reveal-delay="160" style={{ marginInline: 'auto' }}>
          {t('404.message')}
        </p>
        <Link className="btn btn-primary" data-reveal data-reveal-delay="220" style={{ marginTop: '1.6rem' }} to="/">
          {t('404.back_home')}
        </Link>
      </div>
    </section>
  )
}
