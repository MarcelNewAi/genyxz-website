import { useEffect, useState } from 'react'
import { i18n, t } from './i18n'

export default function useTranslation() {
  const [, setVersion] = useState(0)

  useEffect(() => {
    const handleLanguageChanged = () => {
      setVersion((value) => value + 1)
    }

    i18n.on('languageChanged', handleLanguageChanged)

    return () => {
      i18n.off('languageChanged', handleLanguageChanged)
    }
  }, [])

  return { t, i18n }
}
