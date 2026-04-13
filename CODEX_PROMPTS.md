# ?? Copy-Paste Prompts for Codex CLI

> **Project:** GenYXZ - Website
> **Domain:** genyxz.si
> **Framework:** Vite (React)
> **Generated:** 2026-04-13

> These prompts are pre-generated for this specific project. Copy each prompt, paste it into Codex CLI, and execute in order. After each prompt completes, check off the corresponding boxes in MASTER_PLAN.md.

> **IMPORTANT:** Always let Codex finish one prompt completely before starting the next.

---

## How to Use

1. Open MASTER_PLAN.md alongside this file
2. Copy the first prompt below
3. Paste into Codex CLI
4. Wait for completion
5. Verify the checkpoint at the end of the prompt
6. Go to MASTER_PLAN.md and check off `- [ ]`  `- [x]` for the completed items
7. Commit: `git add -A && git commit -m "Step X: description"`
8. Move to the next prompt

---

## Step 0  Project Setup

### Prompt 0.1  Initialize & Configure

```
Read MASTER_PLAN.md completely. This is the build plan for the entire project.

BEFORE writing any code, use the Context7 MCP server to fetch the latest documentation for Vite (React) and Tailwind CSS v4.

Initialize the project:
1. Create a Vite (React) project in the root of this repo (keep all existing .md files and docs/ folder intact  do not delete them)
2. Install dependencies: tailwindcss, @tailwindcss/vite, i18next, i18next-http-backend, i18next-browser-languagedetector
3. Configure Tailwind CSS v4 using Context7 docs  use @tailwindcss/vite plugin and @import "tailwindcss" with @theme in CSS
4. Create netlify.toml as specified in MASTER_PLAN.md
5. Clean all boilerplate  remove default demo content, keep config files only
6. Verify with: netlify dev

Do not modify any .md files in the root or docs/ folder.

AFTER COMPLETION: In MASTER_PLAN.md, check off all Step 0 boxes. Then run:
git add -A && git commit -m "Step 0: Project initialized with Vite (React) + Tailwind v4"
```

---

## Step 1  Foundation

### Prompt 1.1  Tailwind Theme & Global CSS

```
Read docs/01-foundation.md and docs/INFO.md.

BEFORE writing any code, use the Context7 MCP server to fetch the latest Tailwind CSS v4 documentation for @theme configuration and component styling.

Set up the full Tailwind theme in src/style.css (or src/index.css):

Colors (define in @theme):
- Primary: #3B82F6
- Secondary: #88EA4E
- Accent: #88EA4E
- Background: #F0F4F8
- Surface: #FFFFFF
- Text Primary: #133156
- Text Secondary: #5A7394
- Border: #D8E2EE
- Error: #EF4444
- Success: #43D1AB

Fonts (self-hosted from local files; avoid Google Fonts CDN requests):
- Headings: Poppins
- Body: Inter

Global component styles to define in CSS:
- Custom thin scrollbar matching the theme (webkit + firefox)
- Buttons: primary, secondary, outline, ghost  each with hover/focus/active states
- Form inputs: text, textarea, select  border, focus ring (primary color), error state
- Heading scale: h1-h6 with appropriate sizes and weights
- Link styles: default, hover, active
- Navigation: desktop fixed top navbar + mobile hamburger menu



Mobile optimization:
- All interactive elements min 44px tap targets
- Responsive breakpoints below 768px
- No horizontal scroll at any viewport width

Verify: utility classes render correctly with the theme colors. Run netlify dev and confirm.

Do not modify any .md files.

AFTER COMPLETION: In MASTER_PLAN.md, check off Step 1 items: 1.1 (project init), 1.4 (Tailwind). Then run:
git add -A && git commit -m "Step 1.1: Tailwind theme + global CSS configured"
```

### Prompt 1.2  index.html & Project Structure

```
Read docs/01-foundation.md and docs/INFO.md.

Build index.html following the EXACT structure specified in 01-foundation.md.

Project details:
- Project Name: GenYXZ - Website
- Tagline: Nova generacija, ki razume prihodnost zdravja.
- Domain: genyxz.si
- Author: GenYXZ

Languages: Slovenian (sl)
Fallback language: sl

The index.html MUST include (in this order):

<head>:
- <meta charset="UTF-8">
- <title>GenYXZ - Website | Nova generacija, ki razume prihodnost zdravja.</title>
- <meta name="viewport" content="width=device-width, initial-scale=1">
- <meta name="application-name" content="GenYXZ - Website">
- <meta name="apple-mobile-web-app-title" content="GenYXZ - Website">
- <meta name="description" content="Nova generacija, ki razume prihodnost zdravja.">
- <meta name="author" content="GenYXZ">
- <meta name="color-scheme" content="dark light">
- <meta name="robots" content="noindex,follow"> (switched at launch)
- <link rel="canonical" href="https://www.genyxz.si/">
- Hreflang tags:
<link rel="alternate" hreflang="sl" href="https://www.genyxz.si/sl/" />
    <link rel="alternate" hreflang="x-default" href="https://www.genyxz.si/sl/" />
- <link rel="icon" type="image/png" sizes="32x32" href="[let ai choose]">
- <link rel="apple-touch-icon" sizes="180x180" href="[let ai choose]">

- Open Graph: og:type, og:site_name, og:title, og:description, og:url, og:locale, og:image ([let ai choose]), og:image:width 1200, og:image:height 630
- Twitter Card: summary_large_image, title, description, image
- JSON-LD Organization schema: name, url, logo ([let ai choose])
- <link rel="preconnect" href="https://storage.googleapis.com">
- Self-hosted @font-face setup for Poppins and Inter (font-display: swap)

<body>:
- <noscript> fallback with language links:
<a href="/sl/">Slovenian</a>
- Language redirect script:
  - Read navigator.language
  - Check against supported: ['sl']
  - If match  redirect to /{matched_code}/
  - If no match  redirect to /sl/

Create folder structure as specified in 01-foundation.md:
mkdir -p public/locales/sl
mkdir -p src/components src/utils src/pages src/assets/images src/assets/fonts
mkdir -p netlify/functions

Create empty translation files:
- `public/locales/sl/translation.json`


Create empty page files:
- `src/pages/domov.js` -> Domov
- `src/pages/o-nas.js` -> O nas
- `src/pages/kaj-delamo.js` -> Kaj delamo
- `src/pages/partnerji.js` -> Partnerji
- `src/pages/ambasadorji.js` -> Ambasadorji
- `src/pages/kontak.js` -> Kontak


Create public/robots.txt:
  User-agent: *
  Allow: /
  Sitemap: https://www.genyxz.si/sitemap.xml

Verify: netlify dev serves the page. View source  all meta tags present. robots.txt accessible.

Do not modify any .md files.

AFTER COMPLETION: In MASTER_PLAN.md, check off Step 1 items: 1.2 (netlify.toml), 1.3 (Netlify linked), 1.5 (index.html), 1.6 (folder structure), 1.7 (page files), 1.8 (netlify dev). Then run:
git add -A && git commit -m "Step 1.2: index.html, project structure, robots.txt"
```

---

## Step 2  Advanced Functionality

### Prompt 2.1  i18n Setup

```
Read docs/02-advanced.md and docs/INFO.md.

BEFORE writing any code, use the Context7 MCP server to fetch the latest i18next, i18next-http-backend, and i18next-browser-languagedetector documentation.

Implement internationalization:

1. Configure src/utils/i18n.js:
   - Supported languages: ['sl']
   - Fallback: sl
   - Detection order: navigator  cookie  querystring  htmlTag
   - Save preference in cookie "i18next" (30 days)
   - Backend load path: /locales/{{lng}}/translation.json
   - Debug: true in dev (import.meta.env.DEV), false in production

2. Create translation files for each language with base keys:
   - site: title, tagline
   - nav:     "domov": "",
    "o-nas": "",
    "kaj-delamo": "",
    "partnerji": "",
    "ambasadorji": "",
    "kontak": "",
   - cookie: message, accept, decline, settings, necessary, analytics, marketing, save_preferences
   - footer: copyright (with {{year}}), privacy, terms
   - 404: title, message, back_home

   Leave values empty for now  content is added in Step 3.

3. Implement data-i18n rendering:
   - data-i18n="key"  sets textContent
   - data-i18n-placeholder="key"  sets placeholder
   - data-i18n-aria-label="key"  sets aria-label
   - Dynamic values: i18n.t('key', { variable: value })

4. Update document.documentElement.lang on every language change



Verify: language switcher changes all data-i18n text. Browser language auto-detected. Preference saved in cookie.

Do not modify any .md files.

AFTER COMPLETION: In MASTER_PLAN.md, check off Step 2 items: 2.1 (i18next). Then run:
git add -A && git commit -m "Step 2.1: i18n setup with auto-detection and language switcher"
```

### Prompt 2.2  Routing, Dark Mode & 404

```
Read docs/02-advanced.md.


Implement client-side routing with language-based URL slugs:

Route map:
  sl: {
    '/sl/': 'home',
    '/sl/': 'domov',
    '/sl/o-nas': 'o-nas',
    '/sl/kaj-delamo': 'kaj-delamo',
    '/sl/partnerji': 'partnerji',
    '/sl/ambasadorji': 'ambasadorji',
    '/sl/kontakt': 'kontak',
  },

Add SPA redirects per language to netlify.toml:
# Single language project - no extra language redirects required.




Build 404 page:
- Uses same layout (header, footer)
- Displays: i18n.t('404.title'), i18n.t('404.message')
- Link back to homepage: i18n.t('404.back_home')
- Styled consistently with site design
- Responsive


Wire everything in main.js:
- Import global styles
- Import and await i18n init
- Initialize: header, footer, cookie banner placeholder
- Language change listener  re-render components
- Set document.documentElement.lang

- Set up client-side routing


Verify: 404 shows for unknown routes. URL slugs work per language. All text from translation files.

Do not modify any .md files.

AFTER COMPLETION: In MASTER_PLAN.md, check off Step 2 items: 2.2 (slugs), 2.3 (dark mode), 2.4 (404), 2.5 (no hardcoded strings). Then run:
git add -A && git commit -m "Step 2.2: Routing, dark mode, 404 page"
```

---

## Step 3  Content Implementation

### Prompt 3.1  Build All Pages

```
Read docs/03-content.md and docs/INFO.md.

Company context: GenYXZ je skupnost ambasadorjev, ki povezuje mlade z znanjem o sodobnih pristopih k zdravju. Projekt deluje v okolju preventive, sodobne medicine in dolgoročne zaščite, povezan z blagovno znamko Dr Best / Trilogija zaščite. To je glavna brand spletna stran (multi-page), ki predstavlja organizacijo, vizijo, simbol želve z DNA spirala, partnerje (Dr Best, Abi Health, Further, Teladoc, GenePlanet, Axeria) in povabilo k pridružitvi kot ambasador. Cilj je zgraditi občutek resnosti, premium brand prisotnost in usmeriti obiskovalce na rekruting landing page za prijavo. Stran mora odgovoriti na vprašanje 'Kaj je GenYXZ?' in zgraditi občutek 'To je nekaj resnega in zanimivega'.


Build content for each page:
- Page: Domov  Brief intro to what GenYXZ is Quick overview cards/sections linking to other pages Partner logo bar CTA to Postani ambasador
  Route: /sl/
- Page: O nas  Kaj je GenYXZ (What is GenYXZ) Naša vizija (Our vision) Naš simbol — the turtle with DNA spiral, with the symbolism breakdown Kdo smo (Who we are)
  Route: /sl/o-nas
- Page: Kaj delamo  Activities of ambassadors Knowledge sharing approach Connection to practice (Povezava s prakso) How ambassadors work in real environment
  Route: /sl/kaj-delamo
- Page: Partnerji  "Okolje v katerem delujemo" content Logo grid: Dr Best, Abi Health, Further, Teladoc - Best Doctors, GenePlanet, Axeria Description of the ecosystem (preventiva + sodobna medicina + dolgoročna zaščita)
  Route: /sl/partnerji
- Page: Ambasadorji  Kdo so naši ambasadorji Kaj pridobiš (benefits) Pridruži se (Join us section) Strong CTA to recruitment landing page
  Route: /sl/ambasadorji
- Page: Kontak  Contact info Simple contact form (static UI) Link to recruitment landing page
  Route: /sl/kontakt




Requirements:
- ALL visible text must use i18n translation keys  zero hardcoded strings
- Populate ALL translation files for: Slovenian (sl)
- Use these images from Google Cloud Storage (use URLs exactly as provided):
| Image | GCS URL | Used On | Purpose |
|---|---|---|---|
| Hero image | https://storage.googleapis.com/... | Homepage | Visual branding |
- All images: alt text via i18n, explicit width/height
- Below-fold images: loading="lazy"
- Above-fold images: no lazy loading

- Responsive: test at 320px, 768px, 1280px
- Navigation: all page links working, active state indicated

- Mobile menu: hamburger toggle, close on link click, close on outside click


Verify: every page has real content, language switching works, responsive on mobile, all images display.

Do not modify any .md files.

AFTER COMPLETION: In MASTER_PLAN.md, check off ALL Step 3 items: 3.1, 3.2, 3.3, 3.4. Then run:
git add -A && git commit -m "Step 3: Content  all pages built with i18n"
```

---

## Step 4  Netlify Functions

### Prompt 4.1  Serverless Functions

```
Read docs/NETLIFY_FUNCTIONS.md.

BEFORE writing any code, use the Context7 MCP server to fetch the latest Netlify Functions v2 documentation.





Verify: all functions respond via netlify dev. Forms submit successfully.

Do not modify any .md files.

AFTER COMPLETION: In MASTER_PLAN.md, check off ALL Step 4 items. Then run:
git add -A && git commit -m "Step 4: Netlify Functions  contact form, serverless endpoints"
```

---



---

## Step 5  Cookies & Analytics

### Prompt 5.1  Cookie Consent & Analytics

```
Read docs/COOKIES.md completely - all sections 5.1 through 5.13.

BEFORE writing any code, use the Context7 MCP server to fetch the latest documentation for cookie consent best practices.

Implement Step 5 exactly by sections:
- 5.1 Cookie consent data structure (version, categories, timestamp).
- 5.2 Cookie utility functions (set, get, delete, consent helpers, reset).
- 5.3 Cookie banner with position: Bottom Left.
- 5.4 Cookie settings modal with category accordions and cookie tables.
- 5.5 Conditional script loading (zero non-essential scripts before consent).
- 5.6 Google Analytics 4 setup (only if enabled).
- 5.7 Consent reset/withdrawal with dual-domain deletion.
- 5.8 Cookie policy page, translated and linked from banner/footer.
- 5.9 All cookie UI translated via i18n.
- 5.10 Persistent settings access points (footer + cookie policy + privacy policy).
- 5.11 localStorage/sessionStorage documentation.
- 5.12 Third-party resources handling with self-hosted fonts.
- 5.13 Maintenance notes and re-consent versioning.

Cookie-specific requirements:
- Banner position: Bottom Left
- Custom essential cookies to include in Essential tables and policy:
- No additional custom essential cookies configured.
- Google Analytics is disabled in this project configuration. Do not load GA scripts.
- Font handling approach: self-hosted fonts
- Include persistent cookie settings access at all required access points.
- Include localStorage and sessionStorage documentation notes in cookie policy content.

Verification checklist (must all pass):
- Banner appears on first visit, then respects saved consent state.
- Accept All / Reject All / Customize flow works end-to-end.
- Settings modal reopens at any time from footer, cookie policy, and privacy policy.
- Essential cookies are always ON and locked.
- Custom essential cookies render in Essential tables when configured.
- No third-party scripts load before consent (verify in Network tab).
- If GA enabled: script loads only after analytics consent and `_ga` cookies appear only after consent.
- Reset flow deletes consent + analytics cookies across required domain variants.
- Cookie policy includes similar technologies section (localStorage/sessionStorage).
- Third-party resources section reflects selected font handling approach.

Do not modify any .md files.

AFTER COMPLETION: check off all Step 5 items in MASTER_PLAN.md. Then run:
git add -A && git commit -m "Step 5: Cookie consent + analytics"
```
Read docs/COOKIES.md.

BEFORE writing any code, use the Context7 MCP server to fetch the latest documentation for cookie consent best practices.

Build GDPR-compliant cookie system:

1. Cookie utilities (src/utils/cookies.js):
   - setCookie(name, value, days)  SameSite=Lax, Secure, path=/
   - getCookie(name), deleteCookie(name)
   - getConsentState()  returns { necessary, analytics, marketing, timestamp } or null
   - setConsentState(consent), hasConsent(category)

2. Cookie consent banner (src/components/cookie-banner.js):
   - Check cookie_consent on load  if exists, don't show banner
   - Simple mode: message + [Decline] [Cookie Settings] [Accept All]
   - Settings mode: toggles for necessary (always on, disabled), analytics, marketing
   - Fixed bottom, z-50, full width
   - All text via i18n (cookie.message, cookie.accept, cookie.decline, cookie.settings, cookie.necessary, cookie.analytics, cookie.marketing, cookie.save_preferences)

   - Saves consent with timestamp
   - Re-accessible via footer link (cookie.settings)

3. Conditional loading  scripts only after consent:
   - Necessary (always): i18next cookie, theme preference

   - Marketing (consent required): social embeds, maps



Verify: banner on first visit, respects saved preference, GA only after consent, no third-party scripts before consent (check Network tab).

Do not modify any .md files.

AFTER COMPLETION: In MASTER_PLAN.md, check off ALL Step 5 items. Then run:
git add -A && git commit -m "Step 5: Cookie consent + analytics"
```

---

## Step 6  Legal Pages

### Prompt 6.1  Privacy Policy & Terms of Service

```
Read docs/LEGAL.md.

Build legal pages:

1. Privacy Policy:

   - Routes: /sl/privacy

   - Data controller: GenYXZ
   - Cover: data collection (forms), cookies (list all from Step 5), third-party services (none), data retention, GDPR user rights, security, children's privacy, changes, contact
   - All content translated via i18n for: Slovenian (sl)
   - Link in footer on every page

2. Terms of Service:

   - Routes: /sl/terms

   - Cover: usage terms, intellectual property, user content, third parties, disclaimers, liability, governing law, changes, contact
   - All content translated via i18n
   - Link in footer on every page

Note: These are structural templates. A legal professional should review before launch.

Do not modify any .md files.

AFTER COMPLETION: In MASTER_PLAN.md, check off ALL Step 6 items. Then run:
git add -A && git commit -m "Step 6: Privacy Policy + Terms of Service"
```

---

## Step 7  Sitemap

### Prompt 7.1  Generate Sitemap

```
Read docs/07-sitemap.md.

BEFORE writing any code, use the Context7 MCP server to fetch the latest XML sitemap specification.

Generate public/sitemap.xml for:
- Domain: www.genyxz.si
- Pages:
- Home: /sl/
- O nas: /sl/o-nas
- Kaj delamo: /sl/kaj-delamo
- Partnerji: /sl/partnerji
- Ambasadorji: /sl/ambasadorji
- Kontak: /sl/kontakt
- Each <url> entry includes xhtml:link hreflang for EVERY language + x-default  /sl/
- Priority: homepage 1.0 weekly, main pages 0.8 monthly, contact 0.7 monthly, legal 0.3 yearly
- Do NOT include 404 page

Update public/robots.txt  confirm it contains:
  Sitemap: https://www.genyxz.si/sitemap.xml

Verify: sitemap.xml accessible at localhost:8888/sitemap.xml, valid XML.

Do not modify any .md files.

AFTER COMPLETION: In MASTER_PLAN.md, check off ALL Step 7 items. Then run:
git add -A && git commit -m "Step 7: Sitemap with hreflang"
```

---

## Step 8  Performance & Accessibility

### Prompt 8.1  Optimize & Audit

```
Read docs/A11Y_PERFORMANCE.md.

Full optimization pass:

IMAGES:
- All content images: WebP format where possible
- Below-fold: loading="lazy"
- All images: explicit width + height, alt text via i18n
- Decorative images: alt="" role="presentation"
- SVGs for icons and logos

PERFORMANCE:
- font-display: swap on all @font-face
- Preconnect hints already in index.html  verify present
- No render-blocking scripts in <head>
- Dynamic imports for page code and heavy libraries (maps, calendar, analytics)
- Verify netlify.toml cache headers: /assets/* immutable, /fonts/* immutable

ACCESSIBILITY:
- Skip-to-content link: first focusable element, links to #main-content
- ALL interactive elements keyboard navigable
- Visible focus rings: *:focus-visible { outline: 2px solid primary; outline-offset: 2px; }
- ARIA: icon-only buttons have aria-label, mobile menu has aria-expanded + aria-controls, form errors linked via aria-describedby, loading states use aria-live="polite", nav uses aria-current="page"
- Color contrast: 4.5:1 normal text, 3:1 large text  verify in BOTH themes
- All form inputs have <label> elements
- Page landmarks: <header>, <main>, <nav>, <footer>
- prefers-reduced-motion: reduce  disable all animations/transitions

TARGET: Lighthouse scores 90+ for Performance, Accessibility, Best Practices, SEO.

Do not modify any .md files.

AFTER COMPLETION: In MASTER_PLAN.md, check off ALL Step 8 items. Then run:
git add -A && git commit -m "Step 8: Performance + accessibility optimization"
```

---

## Step 9  Launch

### Prompt 9.1  Final QA & Deploy

```
Read docs/LAUNCH_CHECKLIST.md.

PRE-LAUNCH:
1. Remove ALL console.log debug statements
2. Set i18n debug: false in production config
3. In index.html: change <meta name="robots" content="noindex,follow"> to content="index,follow"
4. Remove any TODO comments
5. Verify no hardcoded localhost URLs
6. Verify .env and .env.local in .gitignore

ENVIRONMENT VARIABLES  verify ALL are set in Netlify dashboard:
- [ ] `SITE_URL` = `https://www.genyxz.si`

DEPLOY:
1. netlify deploy (preview  test everything on preview URL)
2. Verify preview: all pages, all languages, forms, cookie banner, analytics
3. netlify deploy --prod (go live)

POST-LAUNCH VERIFICATION:
- https://www.genyxz.si loads correctly
- HTTP  HTTPS redirect works
- www  non-www redirect works
- robots.txt accessible at /robots.txt
- sitemap.xml accessible at /sitemap.xml
- Submit sitemap to Google Search Console
- Test OG tags: Facebook Debugger, Twitter Card Validator

- Run Lighthouse on production  all scores 90+

Do not modify any .md files.

AFTER COMPLETION: In MASTER_PLAN.md, check off ALL Step 9 items. Final commit:
git add -A && git commit -m "Step 9: Launched at https://www.genyxz.si"
git push origin main
```

---

##  Project Complete

All steps executed. All MASTER_PLAN.md checkboxes should now be checked.

Post-launch recurring tasks:
| Task | Frequency |
|---|---|
| Check analytics | Weekly |
| Monitor Search Console | Weekly |
| Lighthouse audit | Monthly |
| Update dependencies | Monthly |
| Review legal pages | Quarterly |
