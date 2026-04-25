export default function BrandWordmark({ inverse = false, className = '', src = '/locales/sl/images/Logo.svg' }) {
  return (
    <img
      alt="GenYXZ"
      className={`brand-wordmark-image ${inverse ? 'brand-wordmark-image-inverse' : ''} ${className}`.trim()}
      src={src}
    />
  )
}
