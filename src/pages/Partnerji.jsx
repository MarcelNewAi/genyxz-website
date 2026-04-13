import {
  IconHealthLeaf,
  IconMicroscope,
  IconUmbrellaShield,
} from '../components/icons'
import useTranslation from '../utils/useTranslation'

export default function Partnerji() {
  const { t } = useTranslation()

  const partners = [
    t('partnerji.partner1_name'),
    t('partnerji.partner2_name'),
    t('partnerji.partner3_name'),
    t('partnerji.partner4_name'),
    t('partnerji.partner5_name'),
    t('partnerji.partner6_name'),
  ]

  const ecosystem = [
    {
      title: t('partnerji.eco1_title'),
      text: t('partnerji.eco1_text'),
      Icon: IconHealthLeaf,
    },
    {
      title: t('partnerji.eco2_title'),
      text: t('partnerji.eco2_text'),
      Icon: IconMicroscope,
    },
    {
      title: t('partnerji.eco3_title'),
      text: t('partnerji.eco3_text'),
      Icon: IconUmbrellaShield,
    },
  ]

  return (
    <>
      <section className="section-block section-bg">
        <div className="layout-container editorial-block">
          <p className="section-label" data-reveal>
            {t('labels.partnerji')}
          </p>
          <p className="section-context" data-reveal data-reveal-delay="80">
            {t('partnerji.hero_label')}
          </p>
          <h1 className="section-title" data-reveal data-reveal-delay="140">
            {t('partnerji.hero_title')}
          </h1>
          <p className="section-text" data-reveal data-reveal-delay="190">
            {t('partnerji.hero_subtitle')}
          </p>
          <p className="section-text" data-reveal data-reveal-delay="240">
            {t('partnerji.intro_text')}
          </p>
        </div>
      </section>

      <section className="section-block section-surface">
        <div className="layout-container">
          <p className="section-label" data-reveal>
            {t('labels.partnerji')}
          </p>
          <p className="section-context" data-reveal data-reveal-delay="80">
            {t('partnerji.logos_label')}
          </p>
          <h2 className="section-title" data-reveal data-reveal-delay="130">
            {t('partnerji.logos_title')}
          </h2>
          <div className="logo-grid">
            {partners.map((partner, index) => (
              <div className="logo-box" data-reveal data-reveal-delay={120 + index * 50} key={partner}>
                {partner}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-block section-bg">
        <div className="layout-container">
          <p className="section-label" data-reveal>
            {t('labels.kaj_delamo')}
          </p>
          <p className="section-context" data-reveal data-reveal-delay="80">
            {t('partnerji.ecosystem_label')}
          </p>
          <h2 className="section-title" data-reveal data-reveal-delay="130">
            {t('partnerji.ecosystem_title')}
          </h2>

          <div className="ecosystem-grid">
            {ecosystem.map((item, index) => (
              <article className="ecosystem-item" data-reveal data-reveal-delay={120 + index * 60} key={item.title}>
                <p className="ecosystem-number">{String(index + 1).padStart(2, '0')}</p>
                <item.Icon className="icon-xl ecosystem-icon" />
                <h3 className="soft-card-title">{item.title}</h3>
                <p className="soft-card-copy">{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
