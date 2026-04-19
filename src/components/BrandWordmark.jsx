export default function BrandWordmark({ inverse = false, className = '' }) {
  return (
    <img
      alt="GenYXZ"
      className={`brand-wordmark-image ${inverse ? 'brand-wordmark-image-inverse' : ''} ${className}`.trim()}
      src="/locales/sl/images/Logo.svg"
    />
  )
}
