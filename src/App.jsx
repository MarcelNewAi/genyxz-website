import useTranslation from './utils/useTranslation'

function App() {
  const { t } = useTranslation()
  const siteTitle = t('site.title')
  const navDomov = t('nav.domov')

  return (
    <main className="min-h-screen bg-background text-text-primary">
      <div className="showcase-shell space-y-4">
        <h1>{siteTitle}</h1>
        <p>{navDomov}</p>
        <p className="body-copy">
          i18n status: {siteTitle === '' && navDomov === '' ? 'loaded' : 'fallback'}
        </p>
      </div>
    </main>
  )
}

export default App
