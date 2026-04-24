import { useEffect, useState } from 'react'
import { AMBASSADOR_URL } from '../utils/constants'
import useTranslation from '../utils/useTranslation'

export default function StickyCTA() {
  const { t } = useTranslation()
  const [hasPassedHero, setHasPassedHero] = useState(false)
  const [isNearFooter, setIsNearFooter] = useState(false)

  useEffect(() => {
    if (typeof window === 'undefined') {
      return undefined
    }

    const heroSection = document.querySelector('.page-hero')
    const partnerStrip = document.querySelector('.global-partner-strip')
    const footer = document.querySelector('footer.site-footer')
    const bottomStopTarget = partnerStrip ?? footer

    if (!heroSection || !bottomStopTarget) {
      return undefined
    }

    const heroObserver = new IntersectionObserver(
      ([entry]) => {
        setHasPassedHero(!entry.isIntersecting)
      },
      {
        threshold: 0.1,
      },
    )

    const footerObserver = new IntersectionObserver(
      ([entry]) => {
        setIsNearFooter(entry.isIntersecting)
      },
      {
        threshold: 0,
        rootMargin: '0px 0px 200px 0px',
      },
    )

    heroObserver.observe(heroSection)
    footerObserver.observe(bottomStopTarget)

    return () => {
      heroObserver.disconnect()
      footerObserver.disconnect()
    }
  }, [])

  const isVisible = hasPassedHero && !isNearFooter

  return (
    <div className={`sticky-cta-wrap ${isVisible ? 'is-visible' : ''}`} role="complementary">
      <div className="sticky-cta-inner">
        <p className="sticky-cta-label">{t('sticky.label')}</p>
        <a
          aria-label={t('sticky.aria_label')}
          className="btn btn-primary sticky-cta-button"
          href={AMBASSADOR_URL}
        >
          {t('sticky.cta')}
        </a>
      </div>
    </div>
  )
}
