import { Link } from 'react-router-dom'
import {
  IconArrowRight,
  IconCompass,
  IconHandshake,
  IconPeople,
  IconPulse,
} from '../components/icons'
import { AMBASSADOR_URL } from '../utils/constants'
import useTranslation from '../utils/useTranslation'

function renderGradientWord(title) {
  const parts = title.split(/(prihodnost)/i)

  return parts.map((part, index) =>
    /^prihodnost$/i.test(part) ? (
      <span className="gradient-word" key={`${part}-${index}`}>
        {part}
      </span>
    ) : (
      <span key={`${part}-${index}`}>{part}</span>
    ),
  )
}

export default function Domov() {
  const { t } = useTranslation()

  const overviewCards = [
    {
      to: '/o-nas',
      title: t('domov.card_o_nas_title'),
      text: t('domov.card_o_nas_text'),
      Icon: IconCompass,
    },
    {
      to: '/kaj-delamo',
      title: t('domov.card_kaj_delamo_title'),
      text: t('domov.card_kaj_delamo_text'),
      Icon: IconPulse,
    },
    {
      to: '/partnerji',
      title: t('domov.card_partnerji_title'),
      text: t('domov.card_partnerji_text'),
      Icon: IconHandshake,
    },
    {
      to: '/ambasadorji',
      title: t('domov.card_ambasadorji_title'),
      text: t('domov.card_ambasadorji_text'),
      Icon: IconPeople,
    },
  ]

  const partners = [
    t('partnerji.partner1_name'),
    t('partnerji.partner2_name'),
    t('partnerji.partner3_name'),
    t('partnerji.partner4_name'),
    t('partnerji.partner5_name'),
    t('partnerji.partner6_name'),
  ]

  return (
    <>
      <section className="section-block section-bg page-hero domov-hero">
        <div aria-hidden="true" className="domov-hero-art">
          <img alt="" className="domov-hero-turtle" decoding="async" src="/turtle-dna3.svg" />
        </div>
        <div className="layout-container hero-grid">
          <div className="hero-copy">
            <p className="section-label" data-reveal>
              {t('labels.intro')}
            </p>
            <p className="section-context" data-reveal data-reveal-delay="80">
              {t('domov.hero_label')}
            </p>
            <h1 className="section-title" data-reveal data-reveal-delay="140">
              {renderGradientWord(t('domov.hero_title'))}
            </h1>
            <p className="hero-subtitle" data-reveal data-reveal-delay="220">
              {t('domov.hero_subtitle')}
            </p>
            <div className="hero-actions" data-reveal data-reveal-delay="280">
              <a className="btn btn-primary" href={AMBASSADOR_URL}>
                {t('domov.cta_primary')}
              </a>
              <Link className="btn btn-outline" to="/o-nas">
                {t('domov.cta_secondary')}
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section-block section-surface">
        <div className="layout-container editorial-block">
          <p className="section-label" data-reveal>
            {t('labels.kaj_je')}
          </p>
          <p className="section-context" data-reveal data-reveal-delay="80">
            {t('domov.intro_label')}
          </p>
          <h2 className="section-title" data-reveal data-reveal-delay="120">
            {t('domov.intro_title')}
          </h2>
          <p className="section-text" data-reveal data-reveal-delay="180">
            {t('domov.intro_text')}
          </p>
        </div>
      </section>

      <section className="section-block section-bg">
        <div className="layout-container">
          <p className="section-label" data-reveal>
            {t('labels.kaj_delamo')}
          </p>
          <h2 className="section-title" data-reveal data-reveal-delay="90">
            {t('domov.overview_title')}
          </h2>
          <p className="section-text" data-reveal data-reveal-delay="150">
            {t('domov.overview_subtitle')}
          </p>

          <div className="feature-grid" style={{ marginTop: '1.7rem' }}>
            {overviewCards.map((card, index) => (
              <Link className="soft-card" data-reveal data-reveal-delay={120 + index * 70} key={card.to} to={card.to}>
                <card.Icon className="soft-card-icon" />
                <h3 className="soft-card-title">{card.title}</h3>
                <p className="soft-card-copy">{card.text}</p>
                <span className="soft-card-link">
                  {t('domov.cta_secondary')}
                  <IconArrowRight className="icon-sm" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section-block section-surface">
        <div className="layout-container">
          <p className="section-label" data-reveal>
            {t('labels.partnerji')}
          </p>
          <p className="section-context" data-reveal data-reveal-delay="80">
            {t('domov.partners_label')}
          </p>
          <h2 className="section-title" data-reveal data-reveal-delay="130">
            {t('domov.partners_title')}
          </h2>
          <div className="logo-grid">
            {partners.map((partner, index) => (
              <div className="logo-box" data-reveal data-reveal-delay={140 + index * 45} key={partner}>
                {partner}
              </div>
            ))}
          </div>

          <Link className="soft-card-link" data-reveal data-reveal-delay="220" to="/partnerji">
            {t('domov.cta_secondary')}
            <IconArrowRight className="icon-sm" />
          </Link>
        </div>
      </section>

      <section className="section-block section-navy">
        <div className="layout-container" style={{ textAlign: 'center', position: 'relative' }}>
          <div className="decor-blob decor-blob-mint" style={{ right: '12%', top: '-70px' }} />
          <div className="decor-blob decor-blob-lime" style={{ left: '18%', bottom: '-90px' }} />

          <p className="section-label section-label-light" data-reveal>
            {t('labels.ambasadorji')}
          </p>
          <h2 className="section-title section-title-light" data-reveal data-reveal-delay="90">
            {t('domov.join_title')}
          </h2>
          <p className="section-text section-text-light" data-reveal data-reveal-delay="150" style={{ marginInline: 'auto' }}>
            {t('domov.join_text')}
          </p>
          <a className="btn btn-primary" data-reveal data-reveal-delay="220" href={AMBASSADOR_URL} style={{ marginTop: '1.8rem' }}>
            {t('domov.join_cta')}
          </a>
        </div>
      </section>
    </>
  )
}
