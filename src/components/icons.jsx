function IconBase({
  children,
  className = '',
  viewBox = '0 0 24 24',
  strokeWidth = 1.8,
  ...rest
}) {
  return (
    <svg
      aria-hidden="true"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={strokeWidth}
      viewBox={viewBox}
      {...rest}
    >
      {children}
    </svg>
  )
}

export function IconArrowRight({ className = '' }) {
  return (
    <IconBase className={className}>
      <path d="M5 12h14" />
      <path d="m13 6 6 6-6 6" />
    </IconBase>
  )
}

export function IconMenu({ className = '' }) {
  return (
    <IconBase className={className}>
      <path d="M4 7h16" />
      <path d="M4 12h16" />
      <path d="M4 17h16" />
    </IconBase>
  )
}

export function IconClose({ className = '' }) {
  return (
    <IconBase className={className}>
      <path d="m6 6 12 12" />
      <path d="m18 6-12 12" />
    </IconBase>
  )
}

export function IconInstagram({ className = '' }) {
  return (
    <IconBase className={className}>
      <rect height="14" rx="4" width="14" x="5" y="5" />
      <circle cx="12" cy="12" r="3.2" />
      <circle cx="16.5" cy="7.5" r="0.8" />
    </IconBase>
  )
}

export function IconLinkedIn({ className = '' }) {
  return (
    <IconBase className={className}>
      <rect height="14" rx="3" width="14" x="5" y="5" />
      <path d="M9 10v6" />
      <circle cx="9" cy="8.2" r="0.9" />
      <path d="M12.5 16v-3.1a2.1 2.1 0 0 1 4.2 0V16" />
      <path d="M12.5 10v6" />
    </IconBase>
  )
}

export function IconYoutube({ className = '' }) {
  return (
    <IconBase className={className}>
      <rect height="10" rx="3" width="16" x="4" y="7" />
      <path d="m11 10 4 2-4 2z" />
    </IconBase>
  )
}

export function IconTurtleDna({ className = '' }) {
  return (
    <IconBase className={className} viewBox="0 0 64 64">
      <path d="M20 26c2-7 9-12 17-12 9 0 16 5 19 13 3 0 5 3 5 6s-2 6-6 6h-1c-1 8-8 14-17 14-8 0-15-5-17-12h-4c-3 0-5-2-5-5s2-6 6-6h3z" />
      <path d="M29 23c3 6 3 12 0 18" />
      <path d="M35 23c-3 6-3 12 0 18" />
      <path d="M27 27h10M27 37h10" />
      <circle cx="21" cy="47" r="2" />
      <circle cx="43" cy="48" r="2" />
      <path d="M16 30h-3" />
    </IconBase>
  )
}

export function IconCompass({ className = '' }) {
  return (
    <IconBase className={className}>
      <circle cx="12" cy="12" r="8.5" />
      <path d="m15.8 8.2-2.5 6.3-6.3 2.5 2.5-6.3z" />
    </IconBase>
  )
}

export function IconPulse({ className = '' }) {
  return (
    <IconBase className={className}>
      <path d="M3.5 12h4l2.1-4.2L13 16l2.3-4h5.2" />
      <rect height="16" rx="4" width="20" x="2" y="4" />
    </IconBase>
  )
}

export function IconHandshake({ className = '' }) {
  return (
    <IconBase className={className}>
      <path d="m4 12 4-4 4 4 4-4 4 4" />
      <path d="M6 14h12a3 3 0 0 1 0 6H9a3 3 0 0 1-3-3z" />
    </IconBase>
  )
}

export function IconPeople({ className = '' }) {
  return (
    <IconBase className={className}>
      <circle cx="8" cy="9" r="2.5" />
      <circle cx="16.5" cy="9.5" r="2.3" />
      <path d="M3.5 18a4.5 4.5 0 0 1 9 0" />
      <path d="M12.5 18a4 4 0 0 1 8 0" />
    </IconBase>
  )
}

export function IconInfinity({ className = '' }) {
  return (
    <IconBase className={className}>
      <path d="M4 14c1.6 2.2 4.4 2.2 6 0l2-3c1.6-2.2 4.4-2.2 6 0s1.6 5 0 7.2c-1.6 2.2-4.4 2.2-6 0l-2-3c-1.6-2.2-4.4-2.2-6 0S2.4 20.2 4 22.4" />
    </IconBase>
  )
}

export function IconShield({ className = '' }) {
  return (
    <IconBase className={className}>
      <path d="M12 3.5 19 6v5.8c0 4.7-3.2 8.9-7 10.7-3.8-1.8-7-6-7-10.7V6z" />
      <path d="m9 12 2 2.2 4-4.2" />
    </IconBase>
  )
}

export function IconAnchor({ className = '' }) {
  return (
    <IconBase className={className}>
      <path d="M12 4v12" />
      <circle cx="12" cy="4" r="2" />
      <path d="M6 14a6 6 0 0 0 12 0" />
      <path d="M4 14h4M16 14h4" />
      <path d="M12 16v4" />
    </IconBase>
  )
}

export function IconBookEye({ className = '' }) {
  return (
    <IconBase className={className}>
      <path d="M4 6h6a4 4 0 0 1 4 4v9H8a4 4 0 0 0-4 4z" />
      <path d="M20 6h-6a4 4 0 0 0-4 4v9h6a4 4 0 0 1 4 4z" />
      <path d="M8 12s1.5-2 4-2 4 2 4 2-1.5 2-4 2-4-2-4-2z" />
      <circle cx="12" cy="12" r="0.9" />
    </IconBase>
  )
}

export function IconDna({ className = '' }) {
  return (
    <IconBase className={className} viewBox="0 0 32 32">
      <path d="M7 5c7 0 7 22 18 22" />
      <path d="M25 5C14 5 14 27 7 27" />
      <path d="M11 9h10M10 16h12M11 23h10" />
    </IconBase>
  )
}

export function IconBookSpark({ className = '' }) {
  return (
    <IconBase className={className}>
      <path d="M4 6.5h7.5a3.5 3.5 0 0 1 3.5 3.5v9.5H7.5A3.5 3.5 0 0 0 4 23z" />
      <path d="M20 6.5h-5a3.5 3.5 0 0 0-3.5 3.5v9.5h5A3.5 3.5 0 0 1 20 23z" />
      <path d="m17 3 .6 1.4L19 5l-1.4.6L17 7l-.6-1.4L15 5l1.4-.6z" />
    </IconBase>
  )
}

export function IconCalendarPeople({ className = '' }) {
  return (
    <IconBase className={className}>
      <rect height="14" rx="3" width="18" x="3" y="6" />
      <path d="M7 3v5M17 3v5M3 10h18" />
      <circle cx="10" cy="14.5" r="1.6" />
      <path d="M7.2 18a2.8 2.8 0 0 1 5.6 0" />
    </IconBase>
  )
}

export function IconNetwork({ className = '' }) {
  return (
    <IconBase className={className}>
      <circle cx="6" cy="12" r="2" />
      <circle cx="18" cy="6" r="2" />
      <circle cx="18" cy="18" r="2" />
      <path d="M7.8 11 16 7.2M7.8 13l8.2 3.8" />
    </IconBase>
  )
}

export function IconCommunity({ className = '' }) {
  return (
    <IconBase className={className}>
      <circle cx="8" cy="8" r="2.4" />
      <circle cx="16" cy="8" r="2.4" />
      <circle cx="12" cy="15" r="2.6" />
      <path d="M3.5 21a4.5 4.5 0 0 1 9 0M11.5 21a4.5 4.5 0 0 1 9 0" />
    </IconBase>
  )
}

export function IconMail({ className = '' }) {
  return (
    <IconBase className={className}>
      <rect height="14" rx="3" width="20" x="2" y="5" />
      <path d="m3.5 8 8.5 6 8.5-6" />
    </IconBase>
  )
}

export function IconMapPin({ className = '' }) {
  return (
    <IconBase className={className}>
      <path d="M12 21s6-5.6 6-10a6 6 0 1 0-12 0c0 4.4 6 10 6 10z" />
      <circle cx="12" cy="11" r="2.2" />
    </IconBase>
  )
}

export function IconHealthLeaf({ className = '' }) {
  return (
    <IconBase className={className}>
      <path d="M12 4c-3.5 0-6 3.2-6 6.8 0 4.3 3 7.9 6 9.2 3-1.3 6-4.9 6-9.2C18 7.2 15.5 4 12 4z" />
      <path d="M12 8v10M12 12c-2-1-3.5-2.6-4-4.3M12 12c2-1 3.5-2.6 4-4.3" />
    </IconBase>
  )
}

export function IconMicroscope({ className = '' }) {
  return (
    <IconBase className={className}>
      <path d="m8 6 4 4" />
      <path d="M10 4h4l2 2v4" />
      <path d="M12 10v5a4 4 0 0 0 4 4h2" />
      <path d="M5 20h14" />
      <path d="M7 16h5" />
    </IconBase>
  )
}

export function IconUmbrellaShield({ className = '' }) {
  return (
    <IconBase className={className}>
      <path d="M4 11a8 8 0 0 1 16 0z" />
      <path d="M12 11v7a2 2 0 0 1-4 0" />
      <path d="M17 14c0 4-2.3 6.7-5 8-2.7-1.3-5-4-5-8v-3l5-2 5 2z" />
    </IconBase>
  )
}
