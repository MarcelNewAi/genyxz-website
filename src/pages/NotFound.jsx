import { Link } from 'react-router-dom'
import useTranslation from '../utils/useTranslation'

export default function NotFound() {
  const { t } = useTranslation()

  return (
    <section
      className="flex min-h-[60vh] items-center justify-center rounded-2xl border border-border px-6 py-16 text-center"
      style={{ backgroundColor: '#F0F4F8', color: '#133156' }}
    >
      <div className="mx-auto max-w-xl space-y-4">
        <h1>{t('404.title')}</h1>
        <p className="body-copy">{t('404.message')}</p>
        <Link
          className="btn btn-primary inline-flex"
          style={{ background: '#43D1AB', borderColor: '#43D1AB' }}
          to="/"
        >
          {t('404.back_home')}
        </Link>
      </div>
    </section>
  )
}
