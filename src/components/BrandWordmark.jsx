import useTranslation from '../utils/useTranslation'

export default function BrandWordmark({ inverse = false, className = '' }) {
  const { t } = useTranslation()
  const brandName = t('site.title').split('—')[0].trim().replace(/\s+/g, '')
  const coloredParts = [
    { text: brandName.slice(0, 3), className: 'brand-letter-gen' },
    { text: brandName.slice(3, 4), className: 'brand-letter-y' },
    { text: brandName.slice(4, 5), className: 'brand-letter-x' },
    { text: brandName.slice(5), className: 'brand-letter-z' },
  ]

  if (inverse) {
    return (
      <span className={`brand-wordmark ${className}`.trim()}>
        {coloredParts.map((part) => (
          <span className="brand-letter brand-letter-inverse" key={`${part.className}-${part.text}`}>
            {part.text}
          </span>
        ))}
      </span>
    )
  }

  return (
    <span className={`brand-wordmark ${className}`.trim()}>
      {coloredParts.map((part) => (
        <span className={`brand-letter ${part.className}`} key={`${part.className}-${part.text}`}>
          {part.text}
        </span>
      ))}
    </span>
  )
}
