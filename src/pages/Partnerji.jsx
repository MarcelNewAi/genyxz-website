import { useEffect, useRef, useState } from 'react'
import FinalCTA from '../components/FinalCTA'
import renderPlumWords from '../utils/renderPlumWords'
import useTranslation from '../utils/useTranslation'

const PARTNER_SLIDES = [
  {
    id: 'abi',
    key: 'abi',
    logo: '/locales/sl/partners/Abi.svg',
    href: 'https://www.abiglobalhealth.com/',
    bg: '#FFFFFF',
  },
  {
    id: 'drBest',
    key: 'drBest',
    logo: '/locales/sl/partners/Dr Best.svg',
    href: 'https://dr-best.si/',
    bg: '#0f2b62',
  },
  {
    id: 'further',
    key: 'further',
    logo: '/locales/sl/partners/Further.svg',
    href: 'https://www.wegofurther.com/',
    bg: '#FFFFFF',
  },
  {
    id: 'axeria',
    key: 'axeria',
    logo: '/locales/sl/partners/Axeria.svg',
    href: 'https://axeria.fr/en/',
    bg: '#032a6c',
  },
  {
    id: 'teladoc',
    key: 'teladoc',
    logo: '/locales/sl/partners/Teladoc Health.svg',
    href: 'https://www.teladochealth.com/',
    bg: '#FFFFFF',
  },
  {
    id: 'geneplanet',
    key: 'geneplanet',
    logo: '/locales/sl/partners/GenePlanet.svg',
    href: 'https://geneplanet.com/sl',
    bg: '#FFFFFF',
  },
]

function PartnerjiBelowHint({ text }) {
  return (
    <div className="partnerji-slides-below-hint" role="note">
      <p className="partnerji-slides-below-hint-text">{text}</p>
    </div>
  )
}

export default function Partnerji() {
  const { t } = useTranslation()
  const runwayRef = useRef(null)
  const scrollRafRef = useRef(null)
  const slideCount = PARTNER_SLIDES.length
  const [activeSlide, setActiveSlide] = useState(PARTNER_SLIDES[0].id)
  const [isDesktop, setIsDesktop] = useState(() => (typeof window === 'undefined' ? true : window.innerWidth >= 768))
  const [indicatorVisible, setIndicatorVisible] = useState(false)

  const pillarKeys = ['one', 'two', 'three']
  const pillars = pillarKeys.map((key) => ({
    id: key,
    number: t(`partnerji.stebri.blocks.${key}.number`),
    heading: t(`partnerji.stebri.blocks.${key}.heading`),
    body: t(`partnerji.stebri.blocks.${key}.body`),
  }))

  useEffect(() => {
    if (typeof window === 'undefined') {
      return undefined
    }

    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 768)
    }

    handleResize()
    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  const getRunwayMetrics = () => {
    if (typeof window === 'undefined') {
      return null
    }

    const runwayNode = runwayRef.current
    if (!runwayNode) {
      return null
    }

    const rect = runwayNode.getBoundingClientRect()
    const runwayTop = window.scrollY + rect.top
    const runwayHeight = runwayNode.offsetHeight
    const viewportHeight = window.innerHeight || 1

    return {
      runwayTop,
      maxScrollable: Math.max(0, runwayHeight - viewportHeight),
    }
  }

  useEffect(() => {
    if (typeof window === 'undefined') {
      return undefined
    }

    if (!isDesktop) {
      return undefined
    }

    const updateFromScrollPosition = () => {
      const metrics = getRunwayMetrics()
      if (!metrics) {
        return
      }

      const { runwayTop, maxScrollable } = metrics
      if (maxScrollable <= 0) {
        setActiveSlide(PARTNER_SLIDES[0].id)
        setIndicatorVisible(false)
        return
      }

      const rawProgress = (window.scrollY - runwayTop) / maxScrollable
      const clampedProgress = Math.min(1, Math.max(0, rawProgress))
      const nextIndex = Math.min(slideCount - 1, Math.floor(clampedProgress * slideCount))
      const nextSlide = PARTNER_SLIDES[nextIndex].id
      const isWithinRunway = window.scrollY >= runwayTop && window.scrollY <= runwayTop + maxScrollable

      setActiveSlide((previous) => (previous === nextSlide ? previous : nextSlide))
      setIndicatorVisible((previous) => (previous === isWithinRunway ? previous : isWithinRunway))
    }

    const scheduleUpdate = () => {
      if (scrollRafRef.current !== null) {
        return
      }

      scrollRafRef.current = window.requestAnimationFrame(() => {
        scrollRafRef.current = null
        updateFromScrollPosition()
      })
    }

    scheduleUpdate()
    window.addEventListener('scroll', scheduleUpdate, { passive: true })
    window.addEventListener('resize', scheduleUpdate)

    return () => {
      window.removeEventListener('scroll', scheduleUpdate)
      window.removeEventListener('resize', scheduleUpdate)

      if (scrollRafRef.current !== null) {
        window.cancelAnimationFrame(scrollRafRef.current)
        scrollRafRef.current = null
      }
    }
  }, [isDesktop, slideCount])

  const handleIndicatorClick = (index) => {
    if (typeof window === 'undefined' || !isDesktop) {
      return
    }

    const metrics = getRunwayMetrics()
    if (!metrics) {
      return
    }

    const { runwayTop, maxScrollable } = metrics
    if (maxScrollable <= 0) {
      return
    }

    const segmentSize = maxScrollable / slideCount
    const targetPosition = runwayTop + Math.min(maxScrollable, Math.max(0, (index + 0.5) * segmentSize))

    window.scrollTo({
      top: targetPosition,
      behavior: 'smooth',
    })
  }

  return (
    <>
      <section className="section-block section-bg page-hero partnerji-hero partnerji-hero-v2 inner-page-hero">
        <div className="partnerji-hero-container">
          <div className="partnerji-hero-grid">
            <div aria-hidden="true" className="partnerji-hero-figure-wrap">
              <img alt="" className="partnerji-hero-figure" decoding="async" src="/turtle-dna7-partnerji.svg" />
            </div>

            <div className="partnerji-hero-copy">
              <div className="partnerji-hero-copy-inner">
                <div className="partnerji-hero-main">
                  <h1 className="partnerji-hero-heading">
                    {renderPlumWords(t('partnerji.hero.heading'))}
                  </h1>
                </div>
                <div className="partnerji-hero-support">
                  <p className="partnerji-hero-subtitle">
                    {t('partnerji.hero.subtitle')}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-block section-surface partnerji-avtoriteta">
        <div className="layout-container partnerji-avtoriteta-grid">
          <div className="partnerji-avtoriteta-left">
            <h2 className="partnerji-section-title">
              {renderPlumWords(t('partnerji.avtoriteta.heading'))}
            </h2>
          </div>

          <div className="partnerji-avtoriteta-right">
            <blockquote className="partnerji-authority-quote">
              <p className="partnerji-authority-statement">{t('partnerji.avtoriteta.statement')}</p>
            </blockquote>
            <div aria-hidden="true" className="partnerji-authority-divider" />
            <p className="partnerji-authority-body">
              {t('partnerji.avtoriteta.body')}
            </p>
          </div>
        </div>
      </section>

      <section className="section-block section-bg partnerji-slides">
        <div className="layout-container partnerji-slides-header">
          <p className="section-label partnerji-slides-label">
            {t('partnerji.grid.label')}
          </p>

          <h2 className="partnerji-section-title">
            {renderPlumWords(t('partnerji.grid.heading'))}
          </h2>

          <div aria-hidden="true" className="partnerji-slides-divider" />

          <p className="partnerji-slides-intro">
            {t('partnerji.intro_text')}
          </p>

          <PartnerjiBelowHint text={t('partnerji.grid.more_below_note')} />
        </div>

        <div
          className="partnerji-slides-runway"
          ref={runwayRef}
          style={{ '--partnerji-slide-count': slideCount }}
        >
          <div className="partnerji-slides-sticky">
            <div aria-label={t('partnerji.grid.heading')} className="partnerji-slides-container">
              {PARTNER_SLIDES.map((slide, index) => {
                const logoLeft = index % 2 === 0
                const isDark = slide.bg !== '#FFFFFF'
                const activeClass = activeSlide === slide.id ? ' active' : ''
                const themeClass = `partnerji-slide-${slide.key}`

                return (
                  <article
                    className={`partnerji-slide ${themeClass}${logoLeft ? ' is-logo-left' : ' is-logo-right'}${isDark ? ' is-dark' : ''}${activeClass}`}
                    data-partner-slide={slide.id}
                    key={slide.id}
                    style={{ backgroundColor: slide.bg }}
                  >
                    <div aria-hidden="true" className="partnerji-slide-bg">
                      <span className="partnerji-slide-orb orb-one" />
                      <span className="partnerji-slide-orb orb-two" />
                      <span className="partnerji-slide-grid" />
                      <span className="partnerji-slide-beam" />
                    </div>

                    <div className="partnerji-slide-inner">
                      <div className="partnerji-slide-logo-pane">
                        <img
                          alt={t(`partnerji.slides.${slide.key}.title`)}
                          className="partnerji-slide-logo"
                          decoding="async"
                          loading={index === 0 ? 'eager' : 'lazy'}
                          src={slide.logo}
                        />
                      </div>

                      <div className="partnerji-slide-copy-pane">
                        <div className="partnerji-slide-copy">
                          <h3 className="partnerji-slide-title">{t(`partnerji.slides.${slide.key}.title`)}</h3>
                          <p className="partnerji-slide-description">{t(`partnerji.slides.${slide.key}.description`)}</p>
                          <a className="partnerji-slide-cta" href={slide.href} rel="noopener noreferrer" target="_blank">
                            {t(`partnerji.slides.${slide.key}.cta`)} <span aria-hidden="true">&rarr;</span>
                          </a>
                        </div>
                      </div>
                    </div>
                  </article>
                )
              })}
            </div>
          </div>
        </div>

        <div className={`partnerji-slides-indicator${isDesktop && indicatorVisible ? ' is-visible' : ''}`} aria-hidden="true">
          {PARTNER_SLIDES.map((slide, index) => (
            <button
              className={`partnerji-slides-dot${activeSlide === slide.id ? ' is-active' : ''}`}
              key={slide.id}
              onClick={() => handleIndicatorClick(index)}
              tabIndex={-1}
              type="button"
            />
          ))}
        </div>
      </section>

      <section className="section-block partnerji-stebri">
        <div aria-hidden="true" className="partnerji-stebri-glow" />
        <div className="layout-container partnerji-stebri-inner">
          <h2 className="partnerji-section-title partnerji-section-title-light">
            {t('partnerji.stebri.heading')}
          </h2>

          <div className="partnerji-stebri-rows">
            {pillars.map((item) => (
              <article className="partnerji-stebri-row" key={item.id}>
                <p aria-hidden="true" className="partnerji-stebri-number">
                  {item.number}
                </p>
                <div className="partnerji-stebri-copy">
                  <h3 className="partnerji-stebri-heading">{item.heading}</h3>
                  <p className="partnerji-stebri-body">{item.body}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-block section-surface partnerji-povezava">
        <div className="layout-container partnerji-povezava-inner">
          <div aria-hidden="true" className="partnerji-povezava-divider" />
          <p className="partnerji-povezava-body">
            {t('partnerji.povezava.body')}
          </p>
          <p className="partnerji-povezava-statement">
            {renderPlumWords(t('partnerji.povezava.statement'))}
          </p>
        </div>
      </section>

      <FinalCTA />
    </>
  )
}
