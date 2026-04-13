import { useEffect } from 'react'

export default function useScrollReveal(triggerKey) {
  useEffect(() => {
    if (typeof window === 'undefined') {
      return undefined
    }

    const elements = Array.from(document.querySelectorAll('[data-reveal]'))

    if (!elements.length) {
      return undefined
    }

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    if (prefersReducedMotion) {
      elements.forEach((element) => {
        element.classList.add('is-revealed')
        element.style.transition = 'none'
      })

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
        threshold: 0.15,
        rootMargin: '0px 0px -10% 0px',
      },
    )

    elements.forEach((element) => {
      const delay = Number(element.dataset.revealDelay || 0)
      element.style.transitionDelay = `${delay}ms`
      observer.observe(element)
    })

    return () => {
      observer.disconnect()
    }
  }, [triggerKey])
}
