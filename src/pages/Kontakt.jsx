import { useState } from 'react'
import CopyEmailLink from '../components/CopyEmailLink'
import FinalCTA from '../components/FinalCTA'
import { AMBASSADOR_URL } from '../utils/constants'
import renderPlumWords from '../utils/renderPlumWords'
import useTranslation from '../utils/useTranslation'

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

const EMPTY_FORM = {
  name: '',
  email: '',
  subject: '',
  message: '',
  consent: false,
}

export default function Kontakt() {
  const { t } = useTranslation()
  const [values, setValues] = useState(EMPTY_FORM)
  const [errors, setErrors] = useState({})
  const [isSubmitted, setIsSubmitted] = useState(false)

  function handleInputChange(event) {
    const { name, value, type, checked } = event.target

    setValues((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }))
  }

  function validateForm(nextValues) {
    const nextErrors = {}

    if (!nextValues.name.trim()) {
      nextErrors.name = t('kontakt.form.errors.required')
    }

    if (!nextValues.email.trim()) {
      nextErrors.email = t('kontakt.form.errors.required')
    } else if (!EMAIL_REGEX.test(nextValues.email.trim())) {
      nextErrors.email = t('kontakt.form.errors.email')
    }

    if (!nextValues.message.trim()) {
      nextErrors.message = t('kontakt.form.errors.required')
    }

    if (!nextValues.consent) {
      nextErrors.consent = t('kontakt.form.errors.consent')
    }

    return nextErrors
  }

  function handleSubmit(event) {
    event.preventDefault()

    const nextErrors = validateForm(values)
    setErrors(nextErrors)

    if (Object.keys(nextErrors).length > 0) {
      setIsSubmitted(false)
      return
    }

    setIsSubmitted(true)
  }

  function handleReset() {
    setValues(EMPTY_FORM)
    setErrors({})
    setIsSubmitted(false)
  }

  return (
    <>
      <section className="section-block section-bg page-hero kontakt-hero inner-page-hero">
        <div className="kontakt-hero-container">
          <div className="kontakt-hero-grid">
            <div aria-hidden="true" className="kontakt-hero-figure-wrap">
              <img alt="" className="kontakt-hero-figure" decoding="async" src="/turtle-dna8-kontakt.svg" />
            </div>

            <div className="kontakt-hero-copy">
              <div className="kontakt-hero-copy-inner">
                <div className="kontakt-hero-main">
                  <h1 className="kontakt-hero-heading" data-reveal data-reveal-delay="90">
                    {renderPlumWords(t('kontakt.hero.heading'))}
                  </h1>
                </div>
                <div className="kontakt-hero-support">
                  <p className="kontakt-hero-subtitle" data-reveal data-reveal-delay="160">
                    {t('kontakt.hero.subtitle')}
                  </p>
                  <div aria-hidden="true" className="kontakt-hero-divider" data-reveal data-reveal-delay="220" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-block section-surface kontakt-details">
        <div className="layout-container kontakt-details-grid">
          <div className="kontakt-details-intro">
            <p className="section-label kontakt-details-title" data-reveal data-reveal-delay="70">
              {t('kontakt.details.title')}
            </p>
            <p className="kontakt-details-body" data-reveal data-reveal-delay="100">
              {t('kontakt.details.intro')}
            </p>
            <p className="kontakt-details-statement" data-reveal data-reveal-delay="170">
              {renderPlumWords(t('kontakt.details.statement'))}
            </p>
          </div>

          <div className="kontakt-details-list-wrap">
            <p className="section-label kontakt-details-list-title" data-reveal data-reveal-delay="90">
              {t('kontakt.details.listLabel')}
            </p>
            <ul className="kontakt-details-list">
              <li className="kontakt-details-item" data-reveal data-reveal-delay="120">
                <p className="kontakt-details-item-label">{t('kontakt.details.items.email.label')}</p>
                <CopyEmailLink
                  className="kontakt-editorial-link kontakt-email-highlight"
                  copiedLabel={t('kontakt.copy_email_success')}
                  email={t('kontakt.details.items.email.value')}
                />
              </li>
              <li className="kontakt-details-item" data-reveal data-reveal-delay="180">
                <p className="kontakt-details-item-label">{t('kontakt.details.items.lokacija.label')}</p>
                <p className="kontakt-details-item-value">{t('kontakt.details.items.lokacija.value')}</p>
              </li>
              <li className="kontakt-details-item" data-reveal data-reveal-delay="240">
                <p className="kontakt-details-item-label">{t('kontakt.details.items.ambasadorji.label')}</p>
                <a className="kontakt-editorial-link" href={AMBASSADOR_URL}>
                  {t('kontakt.details.items.ambasadorji.value')}
                </a>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="section-block section-bg kontakt-form-section">
        <div className="layout-container kontakt-form-inner">
          <div className="kontakt-form-content">
            <h2 className="kontakt-section-title" data-reveal data-reveal-delay="90">
              {renderPlumWords(t('kontakt.form.heading'))}
            </h2>

            {isSubmitted ? (
              <div className="kontakt-form-success" data-reveal data-reveal-delay="150">
                <h3 className="kontakt-form-success-heading">{t('kontakt.form.success.heading')}</h3>
                <p className="kontakt-form-success-body">{t('kontakt.form.success.body')}</p>
                <button className="kontakt-editorial-reset" onClick={handleReset} type="button">
                  {t('kontakt.form.success.reset')}
                </button>
              </div>
            ) : (
              <form className="kontakt-form-grid" data-reveal data-reveal-delay="150" noValidate onSubmit={handleSubmit}>
                <label className="kontakt-form-field">
                  <span className="kontakt-form-label">
                    {t('kontakt.form.fields.name')}
                    <span aria-hidden="true" className="kontakt-required-mark">
                      *
                    </span>
                  </span>
                  <input
                    className="kontakt-form-input"
                    name="name"
                    onChange={handleInputChange}
                    placeholder={t('kontakt.form.placeholders.name')}
                    type="text"
                    value={values.name}
                  />
                  {errors.name ? <p className="kontakt-form-error">{errors.name}</p> : null}
                </label>

                <label className="kontakt-form-field">
                  <span className="kontakt-form-label">
                    {t('kontakt.form.fields.email')}
                    <span aria-hidden="true" className="kontakt-required-mark">
                      *
                    </span>
                  </span>
                  <input
                    className="kontakt-form-input"
                    name="email"
                    onChange={handleInputChange}
                    placeholder={t('kontakt.form.placeholders.email')}
                    type="email"
                    value={values.email}
                  />
                  {errors.email ? <p className="kontakt-form-error">{errors.email}</p> : null}
                </label>

                <label className="kontakt-form-field">
                  <span className="kontakt-form-label">{t('kontakt.form.fields.subject')}</span>
                  <input
                    className="kontakt-form-input"
                    name="subject"
                    onChange={handleInputChange}
                    placeholder={t('kontakt.form.placeholders.subject')}
                    type="text"
                    value={values.subject}
                  />
                </label>

                <label className="kontakt-form-field">
                  <span className="kontakt-form-label">
                    {t('kontakt.form.fields.message')}
                    <span aria-hidden="true" className="kontakt-required-mark">
                      *
                    </span>
                  </span>
                  <textarea
                    className="kontakt-form-input kontakt-form-textarea"
                    name="message"
                    onChange={handleInputChange}
                    placeholder={t('kontakt.form.placeholders.message')}
                    rows="5"
                    value={values.message}
                  />
                  {errors.message ? <p className="kontakt-form-error">{errors.message}</p> : null}
                </label>

                <label className={`kontakt-consent-field${errors.consent ? ' has-error' : ''}`}>
                  <span className="kontakt-consent-check-wrap">
                    <input
                      checked={values.consent}
                      className="kontakt-consent-input"
                      name="consent"
                      onChange={handleInputChange}
                      type="checkbox"
                    />
                    <span aria-hidden="true" className="kontakt-consent-checkmark">
                      <svg viewBox="0 0 12 12">
                        <path d="M2 6.2 4.7 9 10 3.6" />
                      </svg>
                    </span>
                  </span>
                  <span className="kontakt-consent-label">
                    {t('kontakt.form.fields.consent')}
                    <span aria-hidden="true" className="kontakt-required-mark">
                      *
                    </span>
                  </span>
                </label>
                {errors.consent ? <p className="kontakt-form-error">{errors.consent}</p> : null}

                <button className="btn btn-primary kontakt-form-submit" type="submit">
                  {t('kontakt.form.submit')}
                </button>
              </form>
            )}
          </div>

          <div aria-hidden="true" className="kontakt-form-figure-wrap" data-reveal data-reveal-delay="180">
            <img alt="" className="kontakt-form-figure" decoding="async" loading="lazy" src="/turtle-dna5.svg" />
          </div>
        </div>
      </section>

      <FinalCTA />
    </>
  )
}
