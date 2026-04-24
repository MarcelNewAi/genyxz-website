const PARTNER_STRIP_LOGOS = [
  { id: 'abi', name: 'Abi', src: '/locales/sl/partners/Abi.svg', bg: '#F0F4F8' },
  { id: 'drbest', name: 'Dr Best', src: '/locales/sl/partners/Dr Best.svg', bg: '#0f2b62' },
  { id: 'further', name: 'Further', src: '/locales/sl/partners/Further.svg', bg: '#F0F4F8' },
  { id: 'axeria', name: 'Axeria', src: '/locales/sl/partners/Axeria.svg', bg: '#032a6c' },
  { id: 'teladoc', name: 'Teladoc Health', src: '/locales/sl/partners/Teladoc Health.svg', bg: '#F0F4F8' },
  { id: 'geneplanet', name: 'GenePlanet', src: '/locales/sl/partners/GenePlanet.svg', bg: '#F0F4F8' },
]

const PARTNER_STRIP_TRACK = [...PARTNER_STRIP_LOGOS, ...PARTNER_STRIP_LOGOS, ...PARTNER_STRIP_LOGOS]

export default function PartnerStrip() {
  return (
    <section aria-label="Nasi partnerji" className="global-partner-strip">
      <ul className="partner-strip-track">
        {PARTNER_STRIP_TRACK.map((partner, index) => (
          <li className="partner-strip-item" key={`${partner.id}-${index}`} style={{ backgroundColor: partner.bg }}>
            <img alt={partner.name} className="partner-strip-logo" decoding="async" loading="lazy" src={partner.src} />
          </li>
        ))}
      </ul>
    </section>
  )
}
