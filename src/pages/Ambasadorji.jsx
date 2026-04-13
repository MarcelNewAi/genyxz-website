import { AMBASSADOR_URL } from '../utils/constants'
import useTranslation from '../utils/useTranslation'

export default function Ambasadorji() {
  const { t } = useTranslation()

  const ambassadorTypes = [
    t('ambasadorji.kdo_point1'),
    t('ambasadorji.kdo_point2'),
    t('ambasadorji.kdo_point3'),
  ]

  const benefits = [
    t('ambasadorji.benefit1'),
    t('ambasadorji.benefit2'),
    t('ambasadorji.benefit3'),
    t('ambasadorji.benefit4'),
    t('ambasadorji.benefit5'),
  ]

  return (
    <>
      <section className="section-block section-navy page-hero">
        <div className="layout-container editorial-block" style={{ maxWidth: '820px' }}>
          <div className="decor-blob decor-blob-mint" style={{ right: '-60px', top: '-80px' }} />
          <div className="decor-blob decor-blob-lime" style={{ left: '8%', bottom: '-70px' }} />
          <p className="section-label section-label-light" data-reveal>
            {t('labels.ambasadorji')}
          </p>
          <p className="section-context section-context-light" data-reveal data-reveal-delay="80">
            {t('ambasadorji.hero_label')}
          </p>
          <h1 className="section-title section-title-light" data-reveal data-reveal-delay="140">
            {t('ambasadorji.hero_title')}
          </h1>
          <p className="section-text section-text-light" data-reveal data-reveal-delay="190">
            {t('ambasadorji.hero_subtitle')}
          </p>
          <a className="btn btn-primary" data-reveal data-reveal-delay="250" href={AMBASSADOR_URL} style={{ width: 'fit-content' }}>
            {t('ambasadorji.pridruzi_cta')}
          </a>
        </div>
      </section>

      <section className="section-block section-bg">
        <div className="layout-container editorial-block">
          <p className="section-label" data-reveal>
            {t('labels.ambasadorji')}
          </p>
          <p className="section-context" data-reveal data-reveal-delay="80">
            {t('ambasadorji.kdo_label')}
          </p>
          <h2 className="section-title" data-reveal data-reveal-delay="120">
            {t('ambasadorji.kdo_title')}
          </h2>
          <p className="section-text" data-reveal data-reveal-delay="170">
            {t('ambasadorji.kdo_intro')}
          </p>
          <div className="badge-row">
            {ambassadorTypes.map((item, index) => (
              <span className="badge-pill" data-reveal data-reveal-delay={180 + index * 60} key={item}>
                {item}
              </span>
            ))}
          </div>
          <p className="section-text" data-reveal data-reveal-delay="340">
            {t('ambasadorji.kdo_text')}
          </p>
        </div>
      </section>

      <section className="section-block section-surface">
        <div className="layout-container">
          <p className="section-label" data-reveal>
            {t('labels.vizija')}
          </p>
          <p className="section-context" data-reveal data-reveal-delay="80">
            {t('ambasadorji.kaj_pridobis_label')}
          </p>
          <h2 className="section-title" data-reveal data-reveal-delay="130">
            {t('ambasadorji.kaj_pridobis_title')}
          </h2>
          <p className="section-text" data-reveal data-reveal-delay="170">
            {t('ambasadorji.kaj_pridobis_subtitle')}
          </p>
          <div className="benefit-list">
            {benefits.map((benefit, index) => (
              <div className="benefit-item" data-reveal data-reveal-delay={180 + index * 60} key={benefit}>
                <span className="benefit-mark" />
                <p className="section-text" style={{ marginTop: 0 }}>
                  {benefit}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-block section-navy">
        <div className="layout-container" style={{ textAlign: 'center' }}>
          <p className="section-label section-label-light" data-reveal>
            {t('labels.ambasadorji')}
          </p>
          <p className="section-context section-context-light" data-reveal data-reveal-delay="80">
            {t('ambasadorji.pridruzi_label')}
          </p>
          <h2 className="section-title section-title-light" data-reveal data-reveal-delay="130">
            {t('ambasadorji.pridruzi_title')}
          </h2>
          <p className="section-text section-text-light" data-reveal data-reveal-delay="180" style={{ marginInline: 'auto' }}>
            {t('ambasadorji.pridruzi_text')}
          </p>
          <a className="btn btn-primary" data-reveal data-reveal-delay="250" href={AMBASSADOR_URL} style={{ marginTop: '1.8rem' }}>
            {t('ambasadorji.pridruzi_cta')}
          </a>
        </div>
      </section>
    </>
  )
}
