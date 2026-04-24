import { useEffect, useRef, useState } from 'react'

function fallbackCopyText(text) {
  if (typeof document === 'undefined') {
    return false
  }

  const textarea = document.createElement('textarea')
  textarea.value = text
  textarea.setAttribute('readonly', '')
  textarea.style.position = 'absolute'
  textarea.style.left = '-9999px'
  document.body.appendChild(textarea)
  textarea.select()

  const isCopied = document.execCommand('copy')
  document.body.removeChild(textarea)
  return isCopied
}

async function copyText(text) {
  if (typeof navigator !== 'undefined' && navigator.clipboard?.writeText) {
    await navigator.clipboard.writeText(text)
    return true
  }

  return fallbackCopyText(text)
}

export default function CopyEmailLink({ className = '', copiedLabel = 'Kopirano', email }) {
  const [isCopied, setIsCopied] = useState(false)
  const timerRef = useRef(null)

  useEffect(() => {
    return () => {
      if (timerRef.current) {
        window.clearTimeout(timerRef.current)
      }
    }
  }, [])

  async function handleCopyClick() {
    try {
      const copied = await copyText(email)
      if (!copied) {
        return
      }

      setIsCopied(true)

      if (timerRef.current) {
        window.clearTimeout(timerRef.current)
      }

      timerRef.current = window.setTimeout(() => {
        setIsCopied(false)
        timerRef.current = null
      }, 1400)
    } catch {
      // Ignore clipboard failures; user can still copy manually.
    }
  }

  return (
    <button
      aria-label={isCopied ? `${copiedLabel}: ${email}` : email}
      className={`copy-email-link ${className}${isCopied ? ' is-copied' : ''}`}
      onClick={handleCopyClick}
      type="button"
    >
      <span className="copy-email-text">{email}</span>
      <span aria-hidden="true" className="copy-email-badge">
        {copiedLabel}
      </span>
    </button>
  )
}
