import {
  IconAnchor,
  IconBookEye,
  IconDna,
  IconInfinity,
  IconShield,
  IconTurtleDna,
} from '../components/icons'
import useTranslation from '../utils/useTranslation'

export default function ONas() {
  const { t } = useTranslation()

  const visionPoints = [
    t('o-nas.vizija_point1'),
    t('o-nas.vizija_point2'),
    t('o-nas.vizija_point3'),
    t('o-nas.vizija_point4'),
  ]

  const symbolItems = [
    {
      title: t('o-nas.simbol_point1_title'),
      text: t('o-nas.simbol_point1_text'),
      Icon: IconInfinity,
    },
    {
      title: t('o-nas.simbol_point2_title'),
      text: t('o-nas.simbol_point2_text'),
      Icon: IconShield,
    },
    {
      title: t('o-nas.simbol_point3_title'),
      text: t('o-nas.simbol_point3_text'),
      Icon: IconAnchor,
    },
    {
      title: t('o-nas.simbol_point4_title'),
      text: t('o-nas.simbol_point4_text'),
      Icon: IconBookEye,
    },
  ]

  return (
    <>
      <section className="section-block section-bg">
        <div className="layout-container hero-grid" style={{ minHeight: 'calc(72vh - 72px)' }}>
          <div className="hero-copy">
            <p className="section-label" data-reveal>
              {t('labels.kaj_je')}
            </p>
            <p className="section-context" data-reveal data-reveal-delay="80">
              {t('o-nas.hero_label')}
            </p>
            <h1 className="section-title" data-reveal data-reveal-delay="140">
              {t('o-nas.hero_title')}
            </h1>
            <p className="hero-subtitle" data-reveal data-reveal-delay="200">
              {t('o-nas.hero_subtitle')}
            </p>
          </div>
          <div aria-hidden="true" className="hero-visual" data-reveal data-reveal-delay="200">
            <div className="decor-blob decor-blob-mint" />
            <IconTurtleDna className="decor-symbol" />
          </div>
        </div>
      </section>

      <section className="section-block section-surface">
        <div className="layout-container editorial-block">
          <p className="section-label" data-reveal>
            {t('labels.kaj_je')}
          </p>
          <p className="section-context" data-reveal data-reveal-delay="70">
            {t('o-nas.kaj_je_label')}
          </p>
          <h2 className="section-title" data-reveal data-reveal-delay="110">
            {t('o-nas.kaj_je_title')}
          </h2>
          <p className="section-text" data-reveal data-reveal-delay="170">
            {t('o-nas.kaj_je_p1')}
          </p>
          <div className="divider-line" data-reveal data-reveal-delay="200" />
          <p className="section-text" data-reveal data-reveal-delay="230">
            {t('o-nas.kaj_je_p2')}
          </p>
          <div className="divider-line" data-reveal data-reveal-delay="260" />
          <p className="section-text" data-reveal data-reveal-delay="290">
            {t('o-nas.kaj_je_p3')}
          </p>
        </div>
      </section>

      <section className="section-block section-bg">
        <div className="layout-container">
          <p className="section-label" data-reveal>
            {t('labels.vizija')}
          </p>
          <p className="section-context" data-reveal data-reveal-delay="70">
            {t('o-nas.vizija_label')}
          </p>
          <h2 className="section-title" data-reveal data-reveal-delay="120">
            {t('o-nas.vizija_title')}
          </h2>
          <p className="section-text" data-reveal data-reveal-delay="170">
            {t('o-nas.vizija_intro')}
          </p>

          <div className="number-list">
            {visionPoints.map((point, index) => (
              <div className="number-item" data-reveal data-reveal-delay={180 + index * 55} key={point}>
                <span className="number-item-index">{index + 1}.</span>
                <p className="section-text" style={{ marginTop: 0 }}>
                  {point}
                </p>
              </div>
            ))}
          </div>

          <p className="pull-quote" data-reveal data-reveal-delay="380">
            {t('o-nas.vizija_closing')}
          </p>
        </div>
      </section>

      <section className="section-block section-navy">
        <div className="layout-container">
          <p className="section-label section-label-light" data-reveal>
            {t('labels.simbol')}
          </p>
          <p className="section-context section-context-light" data-reveal data-reveal-delay="80">
            {t('o-nas.simbol_label')}
          </p>
          <h2 className="section-title section-title-light" data-reveal data-reveal-delay="140">
            {t('o-nas.simbol_title')}
          </h2>
          <p className="section-text section-text-light" data-reveal data-reveal-delay="190">
            {t('o-nas.simbol_intro')}
          </p>

          <div className="feature-grid" style={{ marginTop: '1.6rem' }}>
            {symbolItems.map((item, index) => (
              <article className="dark-feature" data-reveal data-reveal-delay={180 + index * 60} key={item.title}>
                <item.Icon className="icon-xl" style={{ color: '#43d1ab' }} />
                <h3 className="dark-feature-title">{item.title}</h3>
                <p className="dark-feature-copy">{item.text}</p>
              </article>
            ))}
          </div>

          <div className="dna-feature" data-reveal data-reveal-delay="360">
            <IconDna className="dna-feature-icon" />
            <div>
              <h3 className="dark-feature-title" style={{ marginTop: 0 }}>
                {t('o-nas.simbol_dna_title')}
              </h3>
              <p className="dark-feature-copy" style={{ marginTop: '0.5rem' }}>
                {t('o-nas.simbol_dna_text')}
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-block section-surface">
        <div className="layout-container editorial-block">
          <p className="section-label" data-reveal>
            {t('labels.intro')}
          </p>
          <p className="section-context" data-reveal data-reveal-delay="80">
            {t('o-nas.kdo_smo_label')}
          </p>
          <h2 className="section-title" data-reveal data-reveal-delay="120">
            {t('o-nas.kdo_smo_title')}
          </h2>
          <p className="section-text" data-reveal data-reveal-delay="180">
            {t('o-nas.kdo_smo_text')}
          </p>
        </div>
      </section>
    </>
  )
}
