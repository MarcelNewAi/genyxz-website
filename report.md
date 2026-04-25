# Website Audit Report

## Severity Rubric

- `Critical`: broken behavior or launch-risk issue that can directly mislead users, lose leads, or make the site non-functional.
- `High`: major trust, compliance, SEO, or functionality issue that should be fixed before production use.
- `Medium`: material quality, accessibility, i18n, or maintainability issue that degrades the product but does not fully block launch on its own.
- `Low`: polish or completeness issue with limited user impact.

## Critical

No `Critical` issues were confirmed from repo inspection alone.

## High

### 1. Contact form never sends data anywhere

- `Area`: Functionality
- `Severity`: High
- `Status`: Confirmed
- `Impact`: Users can submit the contact form, see a success state, and assume their message was delivered when no network request, email action, or backend integration exists. This can silently lose inbound leads.
- `Evidence`:
  - [src/pages/Kontakt.jsx](C:\dev\genyxz-website\src\pages\Kontakt.jsx#L57) prevents default submit behavior.
  - [src/pages/Kontakt.jsx](C:\dev\genyxz-website\src\pages\Kontakt.jsx#L68) sets `isSubmitted(true)` immediately after validation.
  - [src/pages/Kontakt.jsx](C:\dev\genyxz-website\src\pages\Kontakt.jsx#L163) shows the form has only local `onSubmit={handleSubmit}` behavior.
  - Repo search found no `fetch`, `axios`, Netlify form handling, or function call tied to this form.
- `Recommended fix`: Implement real submission handling, then show success only after a verified send. Add explicit error handling and delivery feedback.

### 2. Footer legal links are placeholders and legal/cookie destinations do not exist

- `Area`: Links/Trust
- `Severity`: High
- `Status`: Confirmed
- `Impact`: Privacy, terms, and cookie settings appear in the footer but do not lead anywhere. This undermines trust and leaves expected legal/compliance flows missing.
- `Evidence`:
  - [src/components/Footer.jsx](C:\dev\genyxz-website\src\components\Footer.jsx#L61), [src/components/Footer.jsx](C:\dev\genyxz-website\src\components\Footer.jsx#L66), and [src/components/Footer.jsx](C:\dev\genyxz-website\src\components\Footer.jsx#L71) all use `href="#"`.
  - [src/App.jsx](C:\dev\genyxz-website\src\App.jsx#L15) through [src/App.jsx](C:\dev\genyxz-website\src\App.jsx#L21) define only the main marketing routes plus 404; there are no privacy, terms, or cookies routes.
  - [public/locales/sl/translation.json](C:\dev\genyxz-website\public\locales\sl\translation.json#L563) through [public/locales/sl/translation.json](C:\dev\genyxz-website\public\locales\sl\translation.json#L565) contain translated footer labels, but no corresponding page implementation is present in `src/pages`.
- `Recommended fix`: Add real destinations for privacy policy, terms, and cookie settings, then wire the footer to those destinations.

### 3. `robots.txt` advertises a sitemap that does not exist

- `Area`: Launch/SEO
- `Severity`: High
- `Status`: Confirmed
- `Impact`: Search engines are told to fetch `/sitemap.xml`, but the file is absent. This is a launch-readiness gap and weakens crawl/indexing hygiene.
- `Evidence`:
  - [public/robots.txt](C:\dev\genyxz-website\public\robots.txt#L3) declares `Sitemap: https://www.genyxz.si/sitemap.xml`.
  - Current `public/` inventory has no `sitemap.xml`.
- `Recommended fix`: Add `public/sitemap.xml` and keep it aligned with all live routes, or remove the sitemap reference until the file exists.

### 4. Primary ambassador CTA still points to staging

- `Area`: Links/Trust
- `Severity`: High
- `Status`: Confirmed
- `Impact`: Primary conversion CTAs route users to a staging Netlify URL instead of a production destination. That is a trust and funnel-quality problem.
- `Evidence`:
  - [src/utils/constants.js](C:\dev\genyxz-website\src\utils\constants.js#L1) sets `AMBASSADOR_URL` to `https://genxyz-osnutek.netlify.app/`.
  - This constant is reused by homepage, sticky CTA, final CTA, navbar CTA, and contact-page ambassador link flows.
- `Recommended fix`: Replace the staging URL with the intended production recruitment destination and verify every CTA opens the correct page.

## Medium

### 5. Lint gate is failing

- `Area`: Code Quality
- `Severity`: Medium
- `Status`: Confirmed
- `Impact`: The repo’s required quality gate is currently red. That increases the chance of regressions and blocks a clean pre-release check.
- `Evidence`:
  - `npm run lint` fails with `react-hooks/set-state-in-effect`.
  - [src/components/CustomScrollbar.jsx](C:\dev\genyxz-website\src\components\CustomScrollbar.jsx#L95) calls `setIsDesktop(...)` directly in an effect.
  - [src/components/CustomScrollbar.jsx](C:\dev\genyxz-website\src\components\CustomScrollbar.jsx#L105) calls `setIsScrollable(false)` directly in an effect.
  - [src/pages/KajDelamo.jsx](C:\dev\genyxz-website\src\pages\KajDelamo.jsx#L49) calls `setQuadrantsVisible(true)` directly in an effect.
  - `npm run build` still passes, so this is a quality/compliance issue rather than a compile blocker.
- `Recommended fix`: Refactor those effects so initial state is derived safely or state changes happen in effect callbacks/subscriptions rather than synchronously in effect bodies.

### 6. Reveal animation is applied to critical headings and CTA content

- `Area`: Accessibility
- `Severity`: Medium
- `Status`: Confirmed
- `Impact`: The repo’s own guidance says critical content should not depend on `data-reveal`. Multiple hero headings and CTA blocks currently do, which creates a real risk of invisible content if reveal logic fails or is delayed.
- `Evidence`:
  - [src/utils/useScrollReveal.js](C:\dev\genyxz-website\src\utils\useScrollReveal.js#L9) targets every `[data-reveal]` element.
  - [src/pages/Domov.jsx](C:\dev\genyxz-website\src\pages\Domov.jsx#L70) applies `data-reveal` to the home `h1`, and [src/pages/Domov.jsx](C:\dev\genyxz-website\src\pages\Domov.jsx#L79) applies it to the hero CTA group.
  - [src/pages/ONas.jsx](C:\dev\genyxz-website\src\pages\ONas.jsx#L38), [src/pages/KajDelamo.jsx](C:\dev\genyxz-website\src\pages\KajDelamo.jsx#L82), [src/pages/Kontakt.jsx](C:\dev\genyxz-website\src\pages\Kontakt.jsx#L89), [src/pages/Ambasadorji.jsx](C:\dev\genyxz-website\src\pages\Ambasadorji.jsx#L28), and [src/pages/NotFound.jsx](C:\dev\genyxz-website\src\pages\NotFound.jsx#L10) do the same for critical titles.
- `Recommended fix`: Keep critical headings, key body copy, and primary CTAs visible by default. Restrict reveal animation to secondary or decorative content.

### 7. Hardcoded Slovenian copy bypasses the translation source of truth

- `Area`: i18n/Content
- `Severity`: Medium
- `Status`: Confirmed
- `Impact`: Some user-visible text is hardcoded in JSX instead of coming from translations. That conflicts with the repo guideline that `translation.json` is the source of truth and makes future content changes inconsistent.
- `Evidence`:
  - [src/pages/Domov.jsx](C:\dev\genyxz-website\src\pages\Domov.jsx#L36) hardcodes `Ampak`.
  - [src/pages/Domov.jsx](C:\dev\genyxz-website\src\pages\Domov.jsx#L94) hardcodes `Zakaj GenYXZ?`.
  - [src/pages/KajDelamo.jsx](C:\dev\genyxz-website\src\pages\KajDelamo.jsx#L161) hardcodes `PREHOD V PRAKSO`.
  - [src/pages/KajDelamo.jsx](C:\dev\genyxz-website\src\pages\KajDelamo.jsx#L164) hardcodes `Kjer se srečata znanje in okolje.`.
  - [src/components/PartnerStrip.jsx](C:\dev\genyxz-website\src\components\PartnerStrip.jsx#L14) hardcodes `Nasi partnerji` as the section label.
- `Recommended fix`: Move visible strings into `public/locales/sl/translation.json` and read them via `t(...)`.

## Low

### 8. Footer social links point to generic platform homepages

- `Area`: Links/Trust
- `Severity`: Low
- `Status`: Confirmed
- `Impact`: Social icons work technically, but they do not take users to brand-owned profiles. That weakens trust and makes the footer look unfinished.
- `Evidence`:
  - [src/components/Footer.jsx](C:\dev\genyxz-website\src\components\Footer.jsx#L8) uses `https://www.instagram.com/`.
  - [src/components/Footer.jsx](C:\dev\genyxz-website\src\components\Footer.jsx#L9) uses `https://www.linkedin.com/`.
  - [src/components/Footer.jsx](C:\dev\genyxz-website\src\components\Footer.jsx#L10) uses `https://www.youtube.com/`.
- `Recommended fix`: Replace those URLs with real GenYXZ social accounts or remove the icons until real destinations exist.

## Needs Live Verification

These items are plausible risks or required QA checks, but they were not asserted as broken from static inspection alone.

### Route-by-route manual checks

- `/`: confirm the hero `h1`, subtitle, statement, and CTA buttons are visible immediately on load and after hard refresh.
- `/o-nas`: confirm the hero `h1` and first explanatory section never remain hidden during fast scroll or return scroll.
- `/kaj-delamo`: confirm the hero title is visible immediately, and the quadrant animation remains usable with reduced motion.
- `/partnerji`: confirm partner slide layout, CTA targets, and desktop/mobile scroll behavior.
- `/ambasadorji`: confirm hero content and traits section remain visible after rapid scrolling.
- `/kontakt`: confirm hero heading, form heading, and submit CTA remain visible in all reveal states; test validation UX manually.
- `404`: confirm the title, message, and back-home CTA are visible immediately and not delayed into invisibility.

### Responsive and accessibility checks

- Test at `320px`, `375px`, `768px`, desktop widths, and verify no horizontal scrolling.
- Verify keyboard navigation across navbar, mobile menu, CTA buttons, footer links, and contact form.
- Verify focus visibility on all interactive elements.
- Verify `prefers-reduced-motion: reduce` still leaves all content readable and visible.
- Verify contrast for light text on dark/gradient backgrounds, especially hero and CTA sections.

### Launch-level verification

- Run Lighthouse against a live preview or production-like build for performance, accessibility, best practices, and SEO.
- Verify all CTA destinations, especially ambassador/recruiting flows.
- Verify footer legal/cookie navigation after those pages are implemented.
- Verify sitemap availability and Search Console-facing crawl behavior after `sitemap.xml` is added.

## Audit Evidence

- Repo inspected across `src/`, `public/`, `netlify.toml`, and launch/accessibility docs.
- `npm run lint`: failed with 3 errors in `CustomScrollbar.jsx` and `KajDelamo.jsx`.
- `npm run build`: passed successfully.
- No code changes were made during the audit itself; this file records findings only.
