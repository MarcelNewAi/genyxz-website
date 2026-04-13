import useTranslation from '../utils/useTranslation'

export default function ONas() {
  const { t } = useTranslation()

  return (
    <section className="card p-6 md:p-8">
      <h1>{t('pages.o-nas.title')}</h1>
      <p className="body-copy mt-4">{t('pages.o-nas.kaj_je_text')}</p>
    </section>
  )
}

