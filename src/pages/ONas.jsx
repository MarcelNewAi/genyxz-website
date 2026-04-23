import FinalCTA from '../components/FinalCTA'
import VizijaBlock from '../components/VizijaBlock'
import useTranslation from '../utils/useTranslation'

export default function ONas() {
  const { t } = useTranslation()

  const razlogi = [
    {
      number: t('onas.zakaj.blocks.one.number'),
      heading: t('onas.zakaj.blocks.one.heading'),
      body: t('onas.zakaj.blocks.one.body'),
    },
    {
      number: t('onas.zakaj.blocks.two.number'),
      heading: t('onas.zakaj.blocks.two.heading'),
      body: t('onas.zakaj.blocks.two.body'),
    },
    {
      number: t('onas.zakaj.blocks.three.number'),
      heading: t('onas.zakaj.blocks.three.heading'),
      body: t('onas.zakaj.blocks.three.body'),
    },
  ]

  return (
    <>
      <section className="section-block section-bg page-hero onas-hero">
        <div className="layout-container onas-hero-inner">
          <p className="onas-eyebrow" data-reveal>
            {t('onas.hero.label')}
          </p>
          <h1 className="onas-hero-heading" data-reveal data-reveal-delay="90">
            {t('onas.hero.heading')}
          </h1>
          <p className="onas-hero-subtitle" data-reveal data-reveal-delay="150">
            {t('onas.hero.subtitle')}
          </p>
          <div aria-hidden="true" className="divider-line onas-hero-divider" data-reveal data-reveal-delay="210" />
        </div>
      </section>

      <section className="section-block section-surface onas-kaj">
        <div className="layout-container">
          <p className="onas-eyebrow" data-reveal>
            {t('onas.kaj.label')}
          </p>
          <h2 className="onas-section-title" data-reveal data-reveal-delay="80">
            {t('onas.kaj.heading')}
          </h2>
          <div className="onas-kaj-grid">
            <div className="onas-kaj-main">
              <p className="onas-body-lg" data-reveal data-reveal-delay="140">
                {t('onas.kaj.body1')}
              </p>
              <p className="onas-kaj-statement" data-reveal data-reveal-delay="200">
                {t('onas.kaj.statement')}
              </p>
              <p className="onas-body" data-reveal data-reveal-delay="260">
                {t('onas.kaj.body2')}
              </p>
            </div>

            <aside className="onas-primer-note" data-reveal data-reveal-delay="180">
              <p className="onas-primer-label">{t('onas.kaj.primer.label')}</p>
              <p className="onas-primer-body">{t('onas.kaj.primer.body1')}</p>
              <div aria-hidden="true" className="onas-primer-divider" />
              <p className="onas-body">{t('onas.kaj.primer.body2')}</p>
            </aside>
          </div>
        </div>
      </section>

      <section className="section-block onas-zakaj">
        <div aria-hidden="true" className="onas-zakaj-glow" />
        <div className="layout-container onas-zakaj-inner">
          <p className="onas-eyebrow onas-eyebrow-light" data-reveal>
            {t('onas.zakaj.label')}
          </p>
          <h2 className="onas-section-title onas-section-title-light" data-reveal data-reveal-delay="90">
            {t('onas.zakaj.heading')}
          </h2>

          <div className="onas-zakaj-rows">
            {razlogi.map((block, index) => (
              <div className="onas-zakaj-row" data-reveal data-reveal-delay={150 + index * 90} key={block.number}>
                <p aria-hidden="true" className="onas-zakaj-number">
                  {block.number}
                </p>
                <div className="onas-zakaj-copy">
                  <h3 className="onas-zakaj-heading">{block.heading}</h3>
                  <p className="onas-zakaj-body">{block.body}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="onas-zakaj-closer-wrap" data-reveal data-reveal-delay="450">
            <div aria-hidden="true" className="onas-zakaj-closer-line" />
            <p className="onas-zakaj-closer">{t('onas.zakaj.closer')}</p>
          </div>
        </div>
      </section>

      <section className="section-block section-bg onas-simbol">
        <div className="layout-container onas-simbol-grid">
          <div className="onas-simbol-copy">
            <p className="onas-eyebrow" data-reveal>
              {t('onas.simbol.label')}
            </p>
            <h2 className="onas-section-title" data-reveal data-reveal-delay="80">
              {t('onas.simbol.heading')}
            </h2>
            <p className="onas-body" data-reveal data-reveal-delay="150">
              {t('onas.simbol.body')}
            </p>
          </div>
          <div className="onas-simbol-art" data-reveal data-reveal-delay="170">
            <img alt="" className="onas-simbol-image" decoding="async" src="/turtle-dna3.svg" />
          </div>
        </div>
      </section>

      <VizijaBlock />
      <FinalCTA />
    </>
  )
}
