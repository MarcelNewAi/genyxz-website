import useTranslation from '../utils/useTranslation'

export default function KajDelamo() {
  const { t } = useTranslation()

  return (
    <section className="card p-6 md:p-8">
      <h1>{t('pages.kaj-delamo.title')}</h1>
      <p className="body-copy mt-4">{t('pages.kaj-delamo.intro')}</p>
    </section>
  )
}

