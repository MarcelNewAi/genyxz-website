import useTranslation from '../utils/useTranslation'

export default function Domov() {
  const { t } = useTranslation()

  return (
    <section className="card p-6 md:p-8">
      <h1>{t('pages.domov.hero_title')}</h1>
      <p className="body-copy mt-4">{t('pages.domov.hero_text')}</p>
    </section>
  )
}

