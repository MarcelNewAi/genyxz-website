import {
  IconBookSpark,
  IconCalendarPeople,
  IconCommunity,
  IconNetwork,
} from '../components/icons'
import useTranslation from '../utils/useTranslation'

export default function KajDelamo() {
  const { t } = useTranslation()

  const activities = [
    {
      title: t('kaj-delamo.activity1_title'),
      text: t('kaj-delamo.activity1_text'),
      Icon: IconBookSpark,
    },
    {
      title: t('kaj-delamo.activity2_title'),
      text: t('kaj-delamo.activity2_text'),
      Icon: IconCalendarPeople,
    },
    {
      title: t('kaj-delamo.activity3_title'),
      text: t('kaj-delamo.activity3_text'),
      Icon: IconNetwork,
    },
    {
      title: t('kaj-delamo.activity4_title'),
      text: t('kaj-delamo.activity4_text'),
      Icon: IconCommunity,
    },
  ]

  const practicePoints = [
    t('kaj-delamo.praksa_point1'),
    t('kaj-delamo.praksa_point2'),
    t('kaj-delamo.praksa_point3'),
    t('kaj-delamo.praksa_point4'),
  ]

  return (
    <>
      <section className="section-block section-bg page-hero">
        <div className="layout-container editorial-block">
          <p className="section-label" data-reveal>
            {t('labels.kaj_delamo')}
          </p>
          <p className="section-context" data-reveal data-reveal-delay="80">
            {t('kaj-delamo.hero_label')}
          </p>
          <h1 className="section-title" data-reveal data-reveal-delay="140">
            {t('kaj-delamo.hero_title')}
          </h1>
          <p className="section-text" data-reveal data-reveal-delay="210">
            {t('kaj-delamo.hero_subtitle')}
          </p>
        </div>
      </section>

      <section className="section-block section-surface">
        <div className="layout-container editorial-block">
          <p className="section-label" data-reveal>
            {t('labels.intro')}
          </p>
          <p className="section-context" data-reveal data-reveal-delay="80">
            {t('kaj-delamo.intro_label')}
          </p>
          <h2 className="section-title" data-reveal data-reveal-delay="120">
            {t('kaj-delamo.intro_title')}
          </h2>
          <p className="section-text" data-reveal data-reveal-delay="180">
            {t('kaj-delamo.intro_text')}
          </p>
        </div>
      </section>

      <section className="section-block section-bg">
        <div className="layout-container">
          <p className="section-label" data-reveal>
            {t('labels.kaj_delamo')}
          </p>
          <h2 className="section-title" data-reveal data-reveal-delay="90">
            {t('kaj-delamo.activities_title')}
          </h2>

          <div className="feature-grid" style={{ marginTop: '1.7rem' }}>
            {activities.map((item, index) => (
              <article className="soft-card" data-reveal data-reveal-delay={120 + index * 70} key={item.title}>
                <item.Icon className="icon-xl" style={{ color: '#133156' }} />
                <h3 className="soft-card-title">{item.title}</h3>
                <p className="soft-card-copy">{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-block section-surface">
        <div className="layout-container">
          <p className="section-label" data-reveal>
            {t('labels.vizija')}
          </p>
          <p className="section-context" data-reveal data-reveal-delay="80">
            {t('kaj-delamo.approach_label')}
          </p>
          <h2 className="section-title" data-reveal data-reveal-delay="120">
            {t('kaj-delamo.approach_title')}
          </h2>
          <div className="accent-callout" data-reveal data-reveal-delay="180">
            <p className="section-text" style={{ marginTop: 0 }}>
              {t('kaj-delamo.approach_text')}
            </p>
          </div>
        </div>
      </section>

      <section className="section-block section-navy">
        <div className="layout-container">
          <p className="section-label section-label-light" data-reveal>
            {t('labels.partnerji')}
          </p>
          <p className="section-context section-context-light" data-reveal data-reveal-delay="80">
            {t('kaj-delamo.praksa_label')}
          </p>
          <h2 className="section-title section-title-light" data-reveal data-reveal-delay="140">
            {t('kaj-delamo.praksa_title')}
          </h2>
          <p className="section-text section-text-light" data-reveal data-reveal-delay="190">
            {t('kaj-delamo.praksa_intro')}
          </p>

          <div className="number-list">
            {practicePoints.map((point, index) => (
              <div className="number-item" data-reveal data-reveal-delay={200 + index * 60} key={point}>
                <span className="number-item-index" style={{ color: '#43d1ab' }}>
                  {index + 1}.
                </span>
                <p className="section-text section-text-light" style={{ marginTop: 0 }}>
                  {point}
                </p>
              </div>
            ))}
          </div>

          <p className="pull-quote" data-reveal data-reveal-delay="420" style={{ color: '#88ea4e' }}>
            {t('kaj-delamo.praksa_closing')}
          </p>
        </div>
      </section>
    </>
  )
}
