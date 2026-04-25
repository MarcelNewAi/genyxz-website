import { useCallback, useEffect, useRef, useState } from 'react'

const DESKTOP_MEDIA_QUERY = '(min-width: 768px)'
const MIN_THUMB_HEIGHT = 40
const OVERFLOW_VISIBILITY_THRESHOLD = 5

function getScrollMetrics(trackHeight) {
  const doc = document.documentElement
  const body = document.body

  const viewportHeight = Math.max(doc.clientHeight, window.innerHeight || 0)
  const scrollHeight = Math.max(doc.scrollHeight, body ? body.scrollHeight : 0)
  const overflow = scrollHeight - viewportHeight
  const maxScroll = Math.max(0, overflow)
  const isScrollable = overflow > OVERFLOW_VISIBILITY_THRESHOLD
  const nextTrackHeight = trackHeight && trackHeight > 0 ? trackHeight : viewportHeight

  if (!isScrollable) {
    return {
      isScrollable: false,
      scrollHeight,
      clientHeight: viewportHeight,
      trackHeight: nextTrackHeight,
      thumbHeight: MIN_THUMB_HEIGHT,
      thumbTop: 0,
      maxThumbTop: 0,
      maxScroll,
    }
  }

  const thumbHeight = Math.max((viewportHeight / scrollHeight) * nextTrackHeight, MIN_THUMB_HEIGHT)
  const maxThumbTop = Math.max(0, nextTrackHeight - thumbHeight)
  const thumbTop = maxThumbTop > 0 ? (window.scrollY / maxScroll) * maxThumbTop : 0

  return {
    isScrollable,
    scrollHeight,
    clientHeight: viewportHeight,
    trackHeight: nextTrackHeight,
    thumbHeight,
    thumbTop,
    maxThumbTop,
    maxScroll,
  }
}

export default function CustomScrollbar() {
  const [isDesktop, setIsDesktop] = useState(() => {
    if (typeof window === 'undefined') {
      return false
    }

    return window.matchMedia(DESKTOP_MEDIA_QUERY).matches
  })
  const [isScrollable, setIsScrollable] = useState(false)
  const [isDragging, setIsDragging] = useState(false)
  const [thumb, setThumb] = useState({ height: MIN_THUMB_HEIGHT, top: 0 })

  const dragStateRef = useRef({
    active: false,
    pointerId: null,
    grabOffsetY: 0,
  })
  const rafRef = useRef(null)
  const trackRef = useRef(null)

  const syncMetrics = useCallback(() => {
    const metrics = getScrollMetrics(trackRef.current ? trackRef.current.clientHeight : 0)

    setIsScrollable(metrics.isScrollable)
    setThumb((prev) => {
      if (Math.abs(prev.height - metrics.thumbHeight) < 0.5 && Math.abs(prev.top - metrics.thumbTop) < 0.5) {
        return prev
      }

      return {
        height: metrics.thumbHeight,
        top: metrics.thumbTop,
      }
    })
  }, [])

  const scheduleSync = useCallback(() => {
    if (rafRef.current !== null) {
      return
    }

    rafRef.current = window.requestAnimationFrame(() => {
      rafRef.current = null
      syncMetrics()
    })
  }, [syncMetrics])

  useEffect(() => {
    if (typeof window === 'undefined') {
      return undefined
    }

    const mediaQuery = window.matchMedia(DESKTOP_MEDIA_QUERY)

    const handleMediaChange = (event) => {
      setIsDesktop(event.matches)
    }

    mediaQuery.addEventListener('change', handleMediaChange)

    return () => {
      mediaQuery.removeEventListener('change', handleMediaChange)
    }
  }, [])

  useEffect(() => {
    if (!isDesktop) {
      return undefined
    }

    scheduleSync()

    const container = document.documentElement
    const contentTarget = document.querySelector('.site-main') || document.body?.firstElementChild || document.body

    const resizeObserver = new ResizeObserver(() => {
      scheduleSync()
    })

    resizeObserver.observe(container)
    if (contentTarget) {
      resizeObserver.observe(contentTarget)
    }

    const mutationObserver = new MutationObserver(() => {
      scheduleSync()
    })

    mutationObserver.observe(container, {
      childList: true,
    })

    if (contentTarget && contentTarget !== container) {
      mutationObserver.observe(contentTarget, {
        childList: true,
        subtree: true,
      })
    }

    window.addEventListener('scroll', scheduleSync, { passive: true })
    window.addEventListener('resize', scheduleSync)

    return () => {
      resizeObserver.disconnect()
      mutationObserver.disconnect()
      window.removeEventListener('scroll', scheduleSync)
      window.removeEventListener('resize', scheduleSync)

      if (rafRef.current !== null) {
        window.cancelAnimationFrame(rafRef.current)
        rafRef.current = null
      }
    }
  }, [isDesktop, scheduleSync])

  const showScrollbar = isDesktop && isScrollable

  useEffect(() => {
    if (!isDragging) {
      return undefined
    }

    const handlePointerMove = (event) => {
      if (!dragStateRef.current.active) {
        return
      }

      const liveMetrics = getScrollMetrics(trackRef.current ? trackRef.current.clientHeight : 0)

      const trackRect = trackRef.current
        ? trackRef.current.getBoundingClientRect()
        : { top: 0 }
      const pointerYInTrack = event.clientY - trackRect.top
      const nextTop = Math.min(
        liveMetrics.maxThumbTop,
        Math.max(0, pointerYInTrack - dragStateRef.current.grabOffsetY),
      )

      setThumb((prev) => {
        if (prev.top === nextTop && prev.height === liveMetrics.thumbHeight) {
          return prev
        }

        return {
          height: liveMetrics.thumbHeight,
          top: nextTop,
        }
      })

      const ratio = liveMetrics.maxThumbTop > 0 ? nextTop / liveMetrics.maxThumbTop : 0
      const targetScroll = ratio * liveMetrics.maxScroll
      window.scrollTo({ top: targetScroll, behavior: 'auto' })
    }

    const handlePointerUp = (event) => {
      if (!dragStateRef.current.active) {
        return
      }

      if (dragStateRef.current.pointerId === event.pointerId) {
        dragStateRef.current.active = false
        dragStateRef.current.pointerId = null
        setIsDragging(false)
      }
    }

    window.addEventListener('pointermove', handlePointerMove)
    window.addEventListener('pointerup', handlePointerUp)
    window.addEventListener('pointercancel', handlePointerUp)

    return () => {
      window.removeEventListener('pointermove', handlePointerMove)
      window.removeEventListener('pointerup', handlePointerUp)
      window.removeEventListener('pointercancel', handlePointerUp)
    }
  }, [isDragging])

  const handleThumbPointerDown = (event) => {
    if (event.button !== 0) {
      return
    }

    event.preventDefault()

    const trackRect = trackRef.current ? trackRef.current.getBoundingClientRect() : { top: 0 }
    const pointerYInTrack = event.clientY - trackRect.top

    dragStateRef.current = {
      active: true,
      pointerId: event.pointerId,
      grabOffsetY: pointerYInTrack - thumb.top,
    }

    setIsDragging(true)
  }

  if (!isDesktop) {
    return null
  }

  return (
    <div className={`custom-scrollbar${showScrollbar ? ' is-visible' : ''}${isDragging ? ' is-dragging' : ''}`} aria-hidden="true">
      <div className="custom-scrollbar-track" ref={trackRef} />
      <button
        className="custom-scrollbar-thumb"
        onPointerDown={handleThumbPointerDown}
        style={{
          height: `${thumb.height}px`,
          top: `${thumb.top}px`,
        }}
        type="button"
      />
    </div>
  )
}
