import { useEffect, useRef, useState } from 'react'
import { ArrowLeftRight, BookOpen, Link as LinkIcon, MessageCircle } from 'lucide-react'
import { Link } from 'react-router-dom'
import FinalCTA from '../components/FinalCTA'
import renderPlumWords from '../utils/renderPlumWords'
import useTranslation from '../utils/useTranslation'

export default function KajDelamo() {
  const { t } = useTranslation()
  const quadrantGridRef = useRef(null)
  const [quadrantsVisible, setQuadrantsVisible] = useState(() => {
    if (typeof window === 'undefined') {
      return false
    }

    return window.matchMedia('(prefers-reduced-motion: reduce)').matches
  })

  const activityKeys = ['one', 'two', 'three', 'four']
  const scenarioKeys = ['one', 'two', 'three']
  const iconByKey = {
    one: BookOpen,
    two: MessageCircle,
    three: LinkIcon,
    four: ArrowLeftRight,
  }

  const activities = activityKeys.map((key) => ({
    id: key,
    number: t(`kajdelamo.delamo.blocks.${key}.number`),
    heading: t(`kajdelamo.delamo.blocks.${key}.heading`),
    body: t(`kajdelamo.delamo.blocks.${key}.body`),
  }))

  const scenarios = scenarioKeys.map((key) => ({
    id: key,
    title: t(`kajdelamo.praksa.scenarios.${key}.title`),
    body: t(`kajdelamo.praksa.scenarios.${key}.body`),
  }))

  useEffect(() => {
    if (typeof window === 'undefined') {
      return undefined
    }

    const gridNode = quadrantGridRef.current

    if (!gridNode) {
      return undefined
    }

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    if (prefersReducedMotion) {
      return undefined
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) {
            return
          }

          setQuadrantsVisible(true)
          observer.disconnect()
        })
      },
      {
        threshold: 0.15,
      },
    )

    observer.observe(gridNode)

    return () => {
      observer.disconnect()
    }
  }, [])

  return (
    <>
      <section className="section-block section-bg page-hero kajdelamo-hero inner-page-hero">
        <div className="layout-container kajdelamo-hero-inner">
          <div className="kajdelamo-hero-copy">
            <div className="kajdelamo-hero-main">
              <h1 className="kajdelamo-hero-heading">
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
          <img className="kajdelamo-hero-image" src="/turtle-dna9-kaj-delamo.svg" alt="" />
        </div>
      </section>

      <section className="section-block section-surface kajdelamo-delamo">
        <div className="layout-container kajdelamo-delamo-header">
          <p className="kajdelamo-delamo-label">
            {t('kajdelamo.delamo.label')}
          </p>
          <h2 className="kajdelamo-section-title">
            {renderPlumWords(t('kajdelamo.delamo.heading'))}
          </h2>
          <div aria-hidden="true" className="kajdelamo-delamo-divider" data-reveal data-reveal-delay="170" />
        </div>

        <div className="kajdelamo-quadrant-shell">
          <div className="kajdelamo-quadrant-grid" ref={quadrantGridRef}>
            {activities.map((item) => {
              const Icon = iconByKey[item.id]

              return (
              <article
                className={`kajdelamo-quadrant-cell kajdelamo-quadrant-cell-${item.id}${quadrantsVisible ? ' visible' : ''}`}
                key={item.id}
              >
                <div className="kajdelamo-quadrant-content">
                  <span aria-hidden="true" className="kajdelamo-quadrant-icon-wrap">
                    <Icon className="kajdelamo-quadrant-icon" color="#43D1AB" size={36} strokeWidth={1.5} />
                  </span>
                  <p aria-hidden="true" className="kajdelamo-quadrant-number">
                    {item.number}
                  </p>
                  <h3 className="kajdelamo-quadrant-heading">{item.heading}</h3>
                  <p className="kajdelamo-quadrant-body">{item.body}</p>
                </div>
              </article>
              )
            })}
          </div>
        </div>
      </section>

      <section className="section-block kajdelamo-praksa">
        <div aria-hidden="true" className="kajdelamo-praksa-glow" />
        <div className="layout-container kajdelamo-praksa-inner">
          <h2 className="kajdelamo-section-title kajdelamo-section-title-light kajdelamo-praksa-title">
            {t('kajdelamo.praksa.heading')}
          </h2>

          <div className="kajdelamo-praksa-list">
            {scenarios.map((item, index) => (
              <article className="kajdelamo-praksa-item" data-reveal data-reveal-delay={150 + index * 90} key={item.id}>
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
          <p className="kajdelamo-prehod-label">
            {t('kajdelamo.prehod.eyebrow')}
          </p>
          <h2 className="kajdelamo-prehod-heading">
            {t('kajdelamo.prehod.heading')}
          </h2>
          <div aria-hidden="true" className="kajdelamo-prehod-heading-divider" />
          <p className="kajdelamo-prehod-body">
            {t('kajdelamo.prehod.body')}
          </p>
          <p className="kajdelamo-prehod-statement">
            {renderPlumWords(t('kajdelamo.prehod.statement'))}
          </p>
          <p>
            <Link className="kajdelamo-prehod-link" to="/partnerji">
              {t('kajdelamo.prehod.link')}
            </Link>
          </p>
          <div aria-hidden="true" className="kajdelamo-prehod-divider" />
        </div>
      </section>

      <FinalCTA />
    </>
  )
}

