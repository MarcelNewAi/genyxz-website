import { useState } from 'react'
import FinalCTA from '../components/FinalCTA'
import renderPlumWords from '../utils/renderPlumWords'
import { PARTNER_LOGOS } from '../utils/constants'
import useTranslation from '../utils/useTranslation'

function PartnerLogoCell({ partner, name, delay }) {
  const [imageFailed, setImageFailed] = useState(false)
  const shouldShowImage = Boolean(partner?.src) && !imageFailed

  return (
    <article className="partnerji-logo-cell" data-reveal data-reveal-delay={delay}>
      {shouldShowImage ? (
        <img
          alt={name}
          className={`partner-logo ${partner.sizeClass}`}
          decoding="async"
          loading="lazy"
          onError={() => setImageFailed(true)}
          src={partner.src}
        />
      ) : (
        <p className="partnerji-logo-placeholder">{name}</p>
      )}
    </article>
  )
}

export default function Partnerji() {
  const { t } = useTranslation()

  const orderedPartnerIds = ['drbest', 'abi', 'further', 'teladoc', 'geneplanet', 'axeria']
  const gridNameById = {
    drbest: t('partnerji.grid.partners.drbest'),
    abi: t('partnerji.grid.partners.abihealth'),
    further: t('partnerji.grid.partners.further'),
    teladoc: t('partnerji.grid.partners.teladoc'),
    geneplanet: t('partnerji.grid.partners.geneplanet'),
    axeria: t('partnerji.grid.partners.axeria'),
  }

  const partners = orderedPartnerIds
    .map((id) => PARTNER_LOGOS.find((partner) => partner.id === id))
    .filter(Boolean)
    .map((partner) => ({
      ...partner,
      displayName: gridNameById[partner.id],
    }))

  const pillarKeys = ['one', 'two', 'three']
  const pillars = pillarKeys.map((key) => ({
    id: key,
    number: t(`partnerji.stebri.blocks.${key}.number`),
    heading: t(`partnerji.stebri.blocks.${key}.heading`),
    body: t(`partnerji.stebri.blocks.${key}.body`),
  }))

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
                  <h1 className="partnerji-hero-heading" data-reveal data-reveal-delay="90">
                    {renderPlumWords(t('partnerji.hero.heading'))}
                  </h1>
                </div>
                <div className="partnerji-hero-support">
                  <p className="partnerji-hero-subtitle" data-reveal data-reveal-delay="160">
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
            <h2 className="partnerji-section-title" data-reveal data-reveal-delay="80">
              {renderPlumWords(t('partnerji.avtoriteta.heading'))}
            </h2>
          </div>

          <div className="partnerji-avtoriteta-right">
            <blockquote className="partnerji-authority-quote" data-reveal data-reveal-delay="130">
              <p className="partnerji-authority-statement">{t('partnerji.avtoriteta.statement')}</p>
            </blockquote>
            <div aria-hidden="true" className="partnerji-authority-divider" data-reveal data-reveal-delay="190" />
            <p className="partnerji-authority-body" data-reveal data-reveal-delay="230">
              {t('partnerji.avtoriteta.body')}
            </p>
          </div>
        </div>
      </section>

      <section className="section-block section-bg partnerji-grid">
        <div className="layout-container partnerji-grid-inner">
          <h2 className="partnerji-section-title" data-reveal data-reveal-delay="90">
            {renderPlumWords(t('partnerji.grid.heading'))}
          </h2>

          <div className="partnerji-logo-matrix">
            {partners.map((partner, index) => (
              <PartnerLogoCell delay={130 + index * 60} key={partner.id} name={partner.displayName} partner={partner} />
            ))}
          </div>
        </div>
      </section>

      <section className="section-block partnerji-stebri">
        <div aria-hidden="true" className="partnerji-stebri-glow" />
        <div className="layout-container partnerji-stebri-inner">
          <h2 className="partnerji-section-title partnerji-section-title-light" data-reveal data-reveal-delay="90">
            {t('partnerji.stebri.heading')}
          </h2>

          <div className="partnerji-stebri-rows">
            {pillars.map((item, index) => (
              <article className="partnerji-stebri-row" data-reveal data-reveal-delay={150 + index * 90} key={item.id}>
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
          <div aria-hidden="true" className="partnerji-povezava-divider" data-reveal />
          <p className="partnerji-povezava-body" data-reveal data-reveal-delay="130">
            {t('partnerji.povezava.body')}
          </p>
          <p className="partnerji-povezava-statement" data-reveal data-reveal-delay="180">
            {renderPlumWords(t('partnerji.povezava.statement'))}
          </p>
        </div>
      </section>

      <FinalCTA />
    </>
  )
}
