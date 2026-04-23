import FinalCTA from '../components/FinalCTA'
import VizijaBlock from '../components/VizijaBlock'
import useTranslation from '../utils/useTranslation'

export default function Ambasadorji() {
  const { t } = useTranslation()

  const skillKeys = ['one', 'two', 'three', 'four', 'five', 'six']
  const skills = skillKeys.map((key) => ({
    id: key,
    number: t(`ambasadorji.pridobijo.skills.${key}.number`),
    heading: t(`ambasadorji.pridobijo.skills.${key}.heading`),
    body: t(`ambasadorji.pridobijo.skills.${key}.body`),
  }))

  const plusItemKeys = ['0', '1', '2', '3']
  const plusItems = plusItemKeys.map((key) => t(`ambasadorji.pridobijo.plus.items.${key}`))

  const traitKeys = ['0', '1', '2', '3']
  const traits = traitKeys.map((key) => t(`ambasadorji.iscemo.traits.${key}`))

  return (
    <>
      <section className="section-block section-bg page-hero ambasadorji-hero">
        <div className="layout-container ambasadorji-hero-inner">
          <p className="ambasadorji-eyebrow" data-reveal>
            {t('ambasadorji.hero.label')}
          </p>
          <h1 className="ambasadorji-hero-heading" data-reveal data-reveal-delay="90">
            {t('ambasadorji.hero.heading')}
          </h1>
          <p className="ambasadorji-hero-subtitle" data-reveal data-reveal-delay="160">
            {t('ambasadorji.hero.subtitle')}
          </p>
          <div aria-hidden="true" className="ambasadorji-hero-divider" data-reveal data-reveal-delay="220" />
        </div>
      </section>

      <section className="section-block section-surface ambasadorji-kdo">
        <div className="layout-container ambasadorji-kdo-grid">
          <div className="ambasadorji-kdo-left">
            <p className="ambasadorji-eyebrow" data-reveal>
              {t('ambasadorji.kdo.label')}
            </p>
            <p className="ambasadorji-kdo-categories" data-reveal data-reveal-delay="80">
              {t('ambasadorji.kdo.categories')}
            </p>
            <div aria-hidden="true" className="ambasadorji-kdo-line" data-reveal data-reveal-delay="130" />
            <p className="ambasadorji-kdo-categories-line" data-reveal data-reveal-delay="170">
              {t('ambasadorji.kdo.categoriesLine')}
            </p>
          </div>

          <div className="ambasadorji-kdo-right">
            <p className="ambasadorji-eyebrow" data-reveal data-reveal-delay="110">
              {t('ambasadorji.kdo.realLabel')}
            </p>
            <p className="ambasadorji-kdo-body" data-reveal data-reveal-delay="170">
              {t('ambasadorji.kdo.body1')}
            </p>
            <p className="ambasadorji-kdo-statement" data-reveal data-reveal-delay="240">
              {t('ambasadorji.kdo.statement')}
            </p>
            <p className="ambasadorji-kdo-body" data-reveal data-reveal-delay="300">
              {t('ambasadorji.kdo.body2')}
            </p>
          </div>
        </div>
      </section>

      <section className="section-block section-bg ambasadorji-pridobijo">
        <div className="layout-container ambasadorji-pridobijo-inner">
          <p className="ambasadorji-eyebrow" data-reveal>
            {t('ambasadorji.pridobijo.label')}
          </p>
          <h2 className="ambasadorji-section-title" data-reveal data-reveal-delay="90">
            {t('ambasadorji.pridobijo.heading')}
          </h2>
          <p className="ambasadorji-pridobijo-intro" data-reveal data-reveal-delay="150">
            {t('ambasadorji.pridobijo.intro')}
          </p>

          <div className="ambasadorji-skill-rows">
            {skills.map((item, index) => (
              <article className="ambasadorji-skill-row" data-reveal data-reveal-delay={190 + index * 80} key={item.id}>
                <p aria-hidden="true" className="ambasadorji-skill-number">
                  {item.number}
                </p>
                <div className="ambasadorji-skill-copy">
                  <h3 className="ambasadorji-skill-heading">{item.heading}</h3>
                  <p className="ambasadorji-skill-body">{item.body}</p>
                </div>
              </article>
            ))}
          </div>

          <div className="ambasadorji-plus" data-reveal data-reveal-delay="710">
            <div aria-hidden="true" className="ambasadorji-plus-line" />
            <p className="ambasadorji-plus-label">{t('ambasadorji.pridobijo.plus.label')}</p>
            <ul className="ambasadorji-inline-list">
              {plusItems.map((item) => (
                <li className="ambasadorji-inline-item" key={item}>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="section-block ambasadorji-iscemo">
        <div aria-hidden="true" className="ambasadorji-iscemo-glow" />
        <div className="layout-container ambasadorji-iscemo-inner">
          <p className="ambasadorji-eyebrow ambasadorji-eyebrow-light" data-reveal>
            {t('ambasadorji.iscemo.label')}
          </p>
          <h2 className="ambasadorji-iscemo-declaration" data-reveal data-reveal-delay="90">
            {t('ambasadorji.iscemo.declaration')}
          </h2>
          <p className="ambasadorji-iscemo-body" data-reveal data-reveal-delay="170">
            {t('ambasadorji.iscemo.body')}
          </p>
          <ul className="ambasadorji-traits-list" data-reveal data-reveal-delay="240">
            {traits.map((trait) => (
              <li className="ambasadorji-trait" key={trait}>
                {trait}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <VizijaBlock />
      <FinalCTA />
    </>
  )
}
