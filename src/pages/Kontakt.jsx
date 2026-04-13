import {
  IconInstagram,
  IconLinkedIn,
  IconMail,
  IconMapPin,
  IconYoutube,
} from '../components/icons'
import { AMBASSADOR_URL } from '../utils/constants'
import useTranslation from '../utils/useTranslation'

export default function Kontakt() {
  const { t } = useTranslation()

  return (
    <>
      <section className="section-block section-bg">
        <div className="layout-container editorial-block">
          <p className="section-label" data-reveal>
            {t('labels.kontakt')}
          </p>
          <p className="section-context" data-reveal data-reveal-delay="80">
            {t('kontakt.hero_label')}
          </p>
          <h1 className="section-title" data-reveal data-reveal-delay="130">
            {t('kontakt.hero_title')}
          </h1>
          <p className="section-text" data-reveal data-reveal-delay="190">
            {t('kontakt.hero_subtitle')}
          </p>
        </div>
      </section>

      <section className="section-block section-surface">
        <div className="layout-container">
          <div className="contact-layout">
            <article className="contact-card" data-reveal>
              <p className="section-label">{t('labels.kontakt')}</p>
              <h2 className="section-title" style={{ fontSize: 'clamp(1.4rem, 3vw, 2rem)' }}>
                {t('kontakt.form_label')}
              </h2>

              <div className="contact-item">
                <div className="contact-icon-wrap">
                  <IconMail className="icon-md" />
                </div>
                <div>
                  <p className="form-label">{t('kontakt.info_email_label')}</p>
                  <a className="soft-card-link" href={`mailto:${t('kontakt.info_email_value')}`} style={{ marginTop: '0.2rem' }}>
                    {t('kontakt.info_email_value')}
                  </a>
                </div>
              </div>

              <div className="contact-item">
                <div className="contact-icon-wrap">
                  <IconMapPin className="icon-md" />
                </div>
                <div>
                  <p className="form-label">{t('kontakt.info_location_label')}</p>
                  <p className="section-text" style={{ marginTop: '0.2rem' }}>
                    {t('kontakt.info_location_value')}
                  </p>
                </div>
              </div>

              <div className="contact-item">
                <div className="contact-icon-wrap">
                  <IconInstagram className="icon-md" />
                </div>
                <div>
                  <p className="form-label">{t('kontakt.info_social_label')}</p>
                  <div className="footer-social-icons" style={{ marginTop: '0.45rem' }}>
                    <a aria-label="Instagram" className="footer-social-link" href="#">
                      <IconInstagram className="icon-sm" />
                    </a>
                    <a aria-label="LinkedIn" className="footer-social-link" href="#">
                      <IconLinkedIn className="icon-sm" />
                    </a>
                    <a aria-label="YouTube" className="footer-social-link" href="#">
                      <IconYoutube className="icon-sm" />
                    </a>
                  </div>
                </div>
              </div>
            </article>

            <article className="form-card" data-reveal data-reveal-delay="120">
              <p className="section-label">{t('labels.kontakt')}</p>
              <h2 className="section-title" style={{ fontSize: 'clamp(1.4rem, 3vw, 2rem)' }}>
                {t('kontakt.form_title')}
              </h2>

              <form className="form-grid" onSubmit={(event) => event.preventDefault()} style={{ marginTop: '1rem' }}>
                <label className="form-field">
                  <span className="form-label">{t('kontakt.form_name_label')}</span>
                  <input className="input-line" placeholder={t('kontakt.form_name_placeholder')} type="text" />
                </label>

                <label className="form-field">
                  <span className="form-label">{t('kontakt.form_email_label')}</span>
                  <input className="input-line" placeholder={t('kontakt.form_email_placeholder')} type="email" />
                </label>

                <label className="form-field">
                  <span className="form-label">{t('kontakt.form_subject_label')}</span>
                  <input className="input-line" placeholder={t('kontakt.form_subject_placeholder')} type="text" />
                </label>

                <label className="form-field">
                  <span className="form-label">{t('kontakt.form_message_label')}</span>
                  <textarea className="input-line textarea-line" placeholder={t('kontakt.form_message_placeholder')} />
                </label>

                <button className="btn btn-primary" type="submit" style={{ width: '100%', marginTop: '0.4rem' }}>
                  {t('kontakt.form_cta')}
                </button>
              </form>
            </article>
          </div>
        </div>
      </section>

      <section className="section-block section-navy">
        <div className="layout-container" style={{ textAlign: 'center' }}>
          <p className="section-label section-label-light" data-reveal>
            {t('labels.ambasadorji')}
          </p>
          <h2 className="section-title section-title-light" data-reveal data-reveal-delay="90">
            {t('kontakt.ambassador_cta_title')}
          </h2>
          <p className="section-text section-text-light" data-reveal data-reveal-delay="150" style={{ marginInline: 'auto' }}>
            {t('kontakt.ambassador_cta_text')}
          </p>
          <a className="btn btn-primary" data-reveal data-reveal-delay="220" href={AMBASSADOR_URL} style={{ marginTop: '1.8rem' }}>
            {t('kontakt.ambassador_cta_button')}
          </a>
        </div>
      </section>
    </>
  )
}
