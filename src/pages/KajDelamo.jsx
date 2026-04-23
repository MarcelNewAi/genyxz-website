import { Link } from 'react-router-dom'
import FinalCTA from '../components/FinalCTA'
import renderPlumWords from '../utils/renderPlumWords'
import useTranslation from '../utils/useTranslation'

export default function KajDelamo() {
  const { t } = useTranslation()

  const activityKeys = ['one', 'two', 'three', 'four']
  const scenarioKeys = ['one', 'two', 'three']

  const activities = activityKeys.map((key) => ({
    id: key,
    number: t(`kajdelamo.delamo.blocks.${key}.number`),
    heading: t(`kajdelamo.delamo.blocks.${key}.heading`),
    body: t(`kajdelamo.delamo.blocks.${key}.body`),
  }))

  const scenarios = scenarioKeys.map((key) => ({
    id: key,
    eyebrow: t(`kajdelamo.praksa.scenarios.${key}.eyebrow`),
    title: t(`kajdelamo.praksa.scenarios.${key}.title`),
    body: t(`kajdelamo.praksa.scenarios.${key}.body`),
  }))

  return (
    <>
      <section className="section-block section-bg page-hero kajdelamo-hero inner-page-hero">
        <div aria-hidden="true" className="inner-page-hero-art kajdelamo-hero-art">
          <img alt="" className="inner-page-hero-svg" decoding="async" src="/turtle-dna9-kaj-delamo.svg" />
        </div>
        <div className="layout-container kajdelamo-hero-inner">
          <div className="kajdelamo-hero-main">
            <p className="kajdelamo-eyebrow" data-reveal>
              {t('kajdelamo.hero.label')}
            </p>
            <h1 className="kajdelamo-hero-heading" data-reveal data-reveal-delay="90">
              {renderPlumWords(t('kajdelamo.hero.heading'))}
            </h1>
          </div>
          <div className="kajdelamo-hero-support">
            <p className="kajdelamo-hero-subtitle" data-reveal data-reveal-delay="160">
              {t('kajdelamo.hero.subtitle')}
            </p>
            <div aria-hidden="true" className="kajdelamo-hero-divider" data-reveal data-reveal-delay="220" />
          </div>
        </div>
      </section>

      <section className="section-block section-surface kajdelamo-delamo">
        <div className="layout-container kajdelamo-delamo-inner">
          <p className="kajdelamo-eyebrow" data-reveal>
            {t('kajdelamo.delamo.label')}
          </p>
          <h2 className="kajdelamo-section-title" data-reveal data-reveal-delay="90">
            {renderPlumWords(t('kajdelamo.delamo.heading'))}
          </h2>

          <div className="kajdelamo-activity-rows">
            {activities.map((item, index) => (
              <article className="kajdelamo-activity-row" data-reveal data-reveal-delay={140 + index * 80} key={item.id}>
                <p aria-hidden="true" className="kajdelamo-activity-number">
                  {item.number}
                </p>
                <div className="kajdelamo-activity-copy">
                  <h3 className="kajdelamo-activity-heading">{item.heading}</h3>
                  <p className="kajdelamo-activity-body">{item.body}</p>
                </div>
              </article>
            ))}
          </div>

          <div className="kajdelamo-delamo-closer-wrap" data-reveal data-reveal-delay="470">
            <div aria-hidden="true" className="kajdelamo-delamo-closer-line" />
            <p className="kajdelamo-delamo-closer">{t('kajdelamo.delamo.closer')}</p>
          </div>
        </div>
      </section>

      <section className="section-block kajdelamo-praksa">
        <div aria-hidden="true" className="kajdelamo-praksa-glow" />
        <div className="layout-container kajdelamo-praksa-inner">
          <p className="kajdelamo-eyebrow kajdelamo-eyebrow-light" data-reveal>
            {t('kajdelamo.praksa.label')}
          </p>
          <h2 className="kajdelamo-section-title kajdelamo-section-title-light" data-reveal data-reveal-delay="90">
            {t('kajdelamo.praksa.heading')}
          </h2>

          <div className="kajdelamo-praksa-list">
            {scenarios.map((item, index) => (
              <article className="kajdelamo-praksa-item" data-reveal data-reveal-delay={150 + index * 90} key={item.id}>
                <p className="kajdelamo-praksa-item-eyebrow">{item.eyebrow}</p>
                <h3 className="kajdelamo-praksa-item-title">{item.title}</h3>
                <p className="kajdelamo-praksa-item-body">{item.body}</p>
              </article>
            ))}
          </div>

          <div className="kajdelamo-praksa-closer-wrap" data-reveal data-reveal-delay="450">
            <div aria-hidden="true" className="kajdelamo-praksa-closer-line" />
            <p className="kajdelamo-praksa-closer">{t('kajdelamo.praksa.closer')}</p>
          </div>
        </div>
      </section>

      <section className="section-block section-surface kajdelamo-prehod">
        <div className="layout-container kajdelamo-prehod-inner">
          <div aria-hidden="true" className="kajdelamo-prehod-divider" data-reveal />
          <p className="kajdelamo-eyebrow" data-reveal data-reveal-delay="70">
            {t('kajdelamo.prehod.label')}
          </p>
          <p className="kajdelamo-prehod-body" data-reveal data-reveal-delay="130">
            {t('kajdelamo.prehod.body')}
          </p>
          <p className="kajdelamo-prehod-statement" data-reveal data-reveal-delay="180">
            {renderPlumWords(t('kajdelamo.prehod.statement'))}
          </p>
          <p data-reveal data-reveal-delay="220">
            <Link className="kajdelamo-prehod-link" to="/partnerji">
              {t('kajdelamo.prehod.link')}
            </Link>
          </p>
          <div aria-hidden="true" className="kajdelamo-prehod-divider" data-reveal data-reveal-delay="260" />
        </div>
      </section>

      <FinalCTA />
    </>
  )
}
