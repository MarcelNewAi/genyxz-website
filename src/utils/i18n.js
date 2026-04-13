import i18n from 'i18next'
import HttpBackend from 'i18next-http-backend'

const supportedLanguages = ['sl']
let initPromise

function initI18n() {
  if (initPromise) {
    return initPromise
  }

  initPromise = i18n
    .use(HttpBackend)
    .init({
      supportedLngs: supportedLanguages,
      lng: 'sl',
      fallbackLng: 'sl',
      ns: ['translation'],
      defaultNS: 'translation',
      debug: import.meta.env.DEV,
      returnEmptyString: true,
      backend: {
        loadPath: '/locales/{{lng}}/translation.json',
      },
    })
    .then(() => {
      if (typeof document !== 'undefined') {
        document.documentElement.lang = 'sl'
      }
      return i18n
    })

  return initPromise
}

const t = i18n.t.bind(i18n)

export { t, i18n, initI18n }
