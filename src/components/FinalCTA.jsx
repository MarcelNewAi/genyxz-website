import { AMBASSADOR_URL } from '../utils/constants'
import useTranslation from '../utils/useTranslation'

export default function FinalCTA() {
  const { t } = useTranslation()

  return (
    <section className="section-block final-cta-section">
      <div className="layout-container final-cta-container">
        <div aria-hidden="true" className="divider-line final-cta-divider" />
        <h2 className="final-cta-heading">{t('finalCta.heading')}</h2>
        <a aria-label={t('finalCta.aria_label')} className="btn btn-primary final-cta-button" href={AMBASSADOR_URL}>
          {t('finalCta.button')}
        </a>
        <p className="final-cta-micro">{t('finalCta.micro')}</p>
      </div>
    </section>
  )
}
