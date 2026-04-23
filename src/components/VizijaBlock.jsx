import { useEffect, useRef } from 'react'
import useTranslation from '../utils/useTranslation'

function renderHeadingWithHighlight(text) {
  const parts = text.split(/(prihodnost)/i)

  return parts.map((part, index) =>
    /^prihodnost$/i.test(part) ? (
      <span className="vizija-highlight" key={`${part}-${index}`}>
        {part}
      </span>
    ) : (
      <span key={`${part}-${index}`}>{part}</span>
    ),
  )
}

export default function VizijaBlock({
  label,
  heading,
  body,
  statement,
}) {
  const { t } = useTranslation()
  const headingRef = useRef(null)
  const bodyRef = useRef(null)

  const resolvedLabel = label ?? t('vizija.label')
  const resolvedHeading = heading ?? t('vizija.heading')
  const resolvedBody = body ?? t('vizija.body')
  const resolvedStatement = statement ?? t('vizija.statement')

  useEffect(() => {
    if (typeof window === 'undefined') {
      return undefined
    }

    const nodes = [headingRef.current, bodyRef.current].filter(Boolean)

    if (!nodes.length) {
      return undefined
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) {
            return
          }

          entry.target.classList.add('is-revealed')
          observer.unobserve(entry.target)
        })
      },
      {
        threshold: 0.25,
        rootMargin: '0px 0px -10% 0px',
      },
    )

    nodes.forEach((node) => {
      observer.observe(node)
    })

    return () => {
      observer.disconnect()
    }
  }, [])

  return (
    <section className="section-block vizija-block section-navy">
      <div aria-hidden="true" className="vizija-atmosphere" />
      <div className="layout-container vizija-content">
        <p className="vizija-label">{resolvedLabel}</p>
        <h2 className="vizija-heading" ref={headingRef}>
          {renderHeadingWithHighlight(resolvedHeading)}
        </h2>
        <p className="vizija-body" ref={bodyRef}>
          {resolvedBody}
        </p>
        <p className="vizija-statement">{resolvedStatement}</p>
      </div>
    </section>
  )
}
