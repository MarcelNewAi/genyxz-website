import { Link } from 'react-router-dom'
import FinalCTA from '../components/FinalCTA'
import VizijaBlock from '../components/VizijaBlock'
import { AMBASSADOR_URL } from '../utils/constants'
import useTranslation from '../utils/useTranslation'

function renderGradientWord(title) {
  const parts = title.split(/(zdravje|prihodnost|prihodnosti)/i)

  return parts.map((part, index) => {
    if (/^zdravje$/i.test(part)) {
      return (
        <span className="gradient-word" key={`${part}-${index}`}>
          {part}
        </span>
      )
    }

    if (/^prihodnost(i)?$/i.test(part)) {
      return (
        <span className="plum-word-bold" key={`${part}-${index}`}>
          {part}
        </span>
      )
    }

    return <span key={`${part}-${index}`}>{part}</span>
  })
}

export default function Domov() {
  const { t } = useTranslation()
  const bridgeBody = t('domov.bridge.body').trim()
  const [leadRaw, restRaw] = bridgeBody.split(/\s[–-]\s/, 2)
  const leadIn = leadRaw ? `${leadRaw}${/[.!?]$/.test(leadRaw) ? '' : '.'}` : bridgeBody
  const followUpSource = restRaw ? `${t('domov.bridge.followup_prefix')} ${restRaw}` : ''
  const followUpLines = followUpSource
    ? (() => {
        const firstCommaIndex = followUpSource.indexOf(',')

        if (firstCommaIndex === -1) {
          return [followUpSource]
        }

        return [
          followUpSource.slice(0, firstCommaIndex + 1).trim(),
          followUpSource.slice(firstCommaIndex + 1).trim(),
        ].filter(Boolean)
      })()
    : []

  const teaserCards = [
    { to: '/o-nas', key: 'onas', variant: 'feature' },
    { to: '/kaj-delamo', key: 'kajdelamo', variant: 'top' },
    { to: '/ambasadorji', key: 'ambasadorji', variant: 'middle' },
    { to: '/partnerji', key: 'partnerji', variant: 'wide' },
  ]

  return (
    <>
      <section className="section-block section-bg page-hero domov-hero">
        <div aria-hidden="true" className="domov-hero-art">
          <img alt="" className="domov-hero-turtle" decoding="async" src="/turtle-dna3.svg" />
        </div>
        <div className="layout-container hero-grid">
          <div className="hero-copy">
            <p className="section-context" data-reveal data-reveal-delay="80">
              {t('domov.hero_label')}
            </p>
            <h1 className="section-title">
              {renderGradientWord(t('domov.hero_title'))}
            </h1>
            <p className="hero-subtitle" data-reveal data-reveal-delay="220">
              {t('domov.hero_subtitle')}
            </p>
            <p className="hero-statement" data-reveal data-reveal-delay="250">
              {t('domov.hero.statement')}
            </p>
            <div className="hero-actions">
              <a className="btn btn-primary" href={AMBASSADOR_URL} rel="noopener noreferrer" target="_blank">
                {t('domov.cta_primary')}
              </a>
              <Link className="btn btn-outline" to="/o-nas">
                {t('domov.cta_secondary')}
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section-block section-surface domov-bridge">
        <div className="layout-container domov-bridge-inner">
          <div className="domov-bridge-heading-wrap" data-reveal>
            <h2 className="domov-bridge-heading">{t('domov.bridge.heading')}</h2>
          </div>
          <div aria-hidden="true" className="domov-bridge-column-separator" data-reveal data-reveal-delay="70" />
          <div className="domov-bridge-copy" data-reveal data-reveal-delay="90">
            <p className="domov-bridge-lead">{leadIn}</p>
            <div aria-hidden="true" className="domov-bridge-copy-divider" />
            <div className="domov-bridge-followup">
              {followUpLines.length > 0 ? (
                followUpLines.map((line, index) => (
                  <p className="domov-bridge-body" key={`${line}-${index}`}>
                    {line}
                  </p>
                ))
              ) : (
                <p className="domov-bridge-body">{bridgeBody}</p>
              )}
            </div>
          </div>
        </div>
      </section>

      <section className="section-block section-bg domov-teasers">
        <div className="layout-container">
          <p className="domov-teasers-label" data-reveal>
            {t('domov.teasers.label')}
          </p>
          <h2 className="domov-teasers-heading" data-reveal data-reveal-delay="90">
            {t('domov.teasers.heading')}
          </h2>

          <div className="domov-teaser-grid">
            {teaserCards.map((card, index) => (
              <Link
                className={`domov-teaser-card domov-teaser-card-${card.variant}`}
                data-reveal
                data-reveal-delay={120 + index * 60}
                key={card.to}
                to={card.to}
              >
                <h3 className="domov-teaser-title">{t(`domov.teasers.cards.${card.key}.heading`)}</h3>
                <p className="domov-teaser-line">{t(`domov.teasers.cards.${card.key}.line`)}</p>
                <span aria-hidden="true" className="domov-teaser-arrow">
                  <svg fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M6 18L18 6M9 6H18V15"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.9"
                    />
                  </svg>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <VizijaBlock />
      <FinalCTA />
    </>
  )
}
