# 📋 INFO.md — Project Identity & Planning

> **Purpose:** This file contains ALL decisions about the project before any code is written. Every other step references this file for values, names, colors, pages, and languages.

---

## Website Type

- **Type:** multi-page
- **Framework:** Vite (React)

---

## Project Identity

| Property | Value |
|---|---|
| **Project Name** | GenYXZ - Website |
| **Tagline** | Nova generacija, ki razume prihodnost zdravja. |
| **Domain** | genyxz.si |
| **Author / Company** | GenYXZ |

---

## Visual Assets — Google Cloud Storage

> All images are hosted on Google Cloud Storage. Use these URLs directly in code. Never generate, find, or substitute image URLs.

| Asset | GCS URL | Specs |
|---|---|---|
| **Logo (light bg)** | [let ai choose] | SVG preferred |
| **Logo (dark bg)** | [let ai choose] | For dark mode / dark sections |
| **Favicon** | [let ai choose] | 32×32 PNG |
| **Apple Touch Icon** | [let ai choose] | 180×180 PNG |
| **Android Icon (192)** | [let ai choose] | 192×192 PNG |
| **Android Icon (512)** | [let ai choose] | 512×512 PNG |
| **OG Image** | [let ai choose] | 1200×630 JPG/PNG |

### Additional Project Images

> List every image used on the site. Codex uses these URLs directly — no searching for images.

| Image | GCS URL | Used On | Purpose |
|---|---|---|---|
| Hero image | https://storage.googleapis.com/... | Homepage | Visual branding |

### PWA

- **Enable PWA:** no

If yes, a `site.webmanifest` will be generated using the icons above.

---

## Color Theme

| Role | Light Mode | Dark Mode |
|---|---|---|
| **Primary** | #3B82F6 | Use Tailwind `dark:` variants in component classes |
| **Secondary** | #88EA4E | Use Tailwind `dark:` variants in component classes |
| **Accent** | #88EA4E | Use Tailwind `dark:` variants in component classes |
| **Background** | #F0F4F8 | Use Tailwind `dark:` variants in component classes |
| **Surface** | #FFFFFF | Use Tailwind `dark:` variants in component classes |
| **Text Primary** | #133156 | Use Tailwind `dark:` variants in component classes |
| **Text Secondary** | #5A7394 | Use Tailwind `dark:` variants in component classes |
| **Border** | #D8E2EE | Use Tailwind `dark:` variants in component classes |
| **Error** | #EF4444 | Use Tailwind `dark:` variants in component classes |
| **Success** | #43D1AB | Use Tailwind `dark:` variants in component classes |

---

## Website Style

- **Overall Aesthetic:** Premium futuristic brand website. Editorial typography, generous whitespace, atmospheric gradients, mint/teal accents on navy. Subtle turtle/DNA motifs as recurring decorative elements (NOT dominant like on landing page). More scroll depth than landing page, sections clearly separated, each section delivers one clear message. Cards used sparingly for content sections. Custom SVG iconography (no emojis). Mobile-first.
- **Navigation Type:** Fixed top navbar
- **Has Submenus:** no
- **Submenu Style:** none
- **Dark Mode:** no
- **Animations:** Subtle scroll reveals

### Font Stack

| Role | Font | Weight(s) | Source |
|---|---|---|---|
| **Headings** | Poppins | auto | Self-hosted local files |
| **Body** | Inter | auto | Self-hosted local files |


---

## Pages

### Single Page Website

> Use this section if type is `single-page`. List all sections in order.

| Section | Order | Description |
|---|---|---|
| Home | 1 | Main page section |

### Multi-Page Website

> Use this section if type is `multi-page`. List all pages with slugs per language.

| Page | SL Slug | Description |
|---|---|---|
| Domov | - | Brief intro to what GenYXZ is Quick overview cards/sections linking to other pages Partner logo bar CTA to Postani ambasador |
| O nas | o-nas | Kaj je GenYXZ (What is GenYXZ) Naša vizija (Our vision) Naš simbol — the turtle with DNA spiral, with the symbolism breakdown Kdo smo (Who we are) |
| Kaj delamo | kaj-delamo | Activities of ambassadors Knowledge sharing approach Connection to practice (Povezava s prakso) How ambassadors work in real environment |
| Partnerji | partnerji | "Okolje v katerem delujemo" content Logo grid: Dr Best, Abi Health, Further, Teladoc - Best Doctors, GenePlanet, Axeria Description of the ecosystem (preventiva + sodobna medicina + dolgoročna zaščita) |
| Ambasadorji | ambasadorji | Kdo so naši ambasadorji Kaj pridobiš (benefits) Pridruži se (Join us section) Strong CTA to recruitment landing page |
| Kontak | kontakt | Contact info Simple contact form (static UI) Link to recruitment landing page |

---

## Languages

| Language | Code | Default? | Flag |
|---|---|---|---|
| Slovenian | sl | yes | 🇸🇮 |

---

## SEO — Per Page Meta Values

### Global (Site-Wide)

| Property | Value |
|---|---|
| **Site Name** | GenYXZ - Website |
| **Default OG Image** | [let ai choose] |
| **Twitter Handle** | @yourhandle |
| **Google Site Verification** | (Codex will configure if needed) |

### Per Page

| Codex will generate appropriate SEO meta titles, descriptions, and keywords for each page based on the page content and project identity. | - | - | - |

---

## External Services & Integrations

| Service | Enabled | Details |
|---|---|---|
| **Google Analytics 4** | no | Tracking ID: `G-XXXXXXXXXX` |
| **Google Maps** | no | API Key: set in Netlify env vars |
| **Google Calendar** | no | For booking system |
| **Contact Form** | no | Via Netlify Functions |
| **Email Service** | no | Provider: None |
| **Other** | none | none |

## Company Context

### What The Company Does
GenYXZ je skupnost ambasadorjev, ki povezuje mlade z znanjem o sodobnih pristopih k zdravju. Projekt deluje v okolju preventive, sodobne medicine in dolgoročne zaščite, povezan z blagovno znamko Dr Best / Trilogija zaščite. To je glavna brand spletna stran (multi-page), ki predstavlja organizacijo, vizijo, simbol želve z DNA spirala, partnerje (Dr Best, Abi Health, Further, Teladoc, GenePlanet, Axeria) in povabilo k pridružitvi kot ambasador. Cilj je zgraditi občutek resnosti, premium brand prisotnost in usmeriti obiskovalce na rekruting landing page za prijavo. Stran mora odgovoriti na vprašanje 'Kaj je GenYXZ?' in zgraditi občutek 'To je nekaj resnega in zanimivega'.

### Important Company Information
Not provided
