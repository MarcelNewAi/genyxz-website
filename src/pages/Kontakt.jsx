import useTranslation from '../utils/useTranslation'

export default function Kontakt() {
  const { t } = useTranslation()

  return (
    <section className="card p-6 md:p-8">
      <h1>{t('pages.kontakt.title')}</h1>
      <p className="body-copy mt-4">{t('pages.kontakt.subtitle')}</p>
    </section>
  )
}

