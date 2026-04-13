import useTranslation from '../utils/useTranslation'

export default function Ambasadorji() {
  const { t } = useTranslation()

  return (
    <section className="card p-6 md:p-8">
      <h1>{t('pages.ambasadorji.title')}</h1>
      <p className="body-copy mt-4">{t('pages.ambasadorji.pridruzi_text')}</p>
    </section>
  )
}

