# ♿ Step 8 — Performance & Accessibility

> **Prerequisites:** All features built (Steps 1-7). Site has real content, images, and all functionality.
> **This is the "polish and optimize" pass before launch.**

---

## 8.1 — Image Optimization

### Format & Loading

- [ ] All content images have WebP versions (AVIF where supported)
- [ ] Use `<picture>` element for format fallbacks where needed
- [ ] Below-fold images use `loading="lazy"`
- [ ] Above-fold images (hero, logo) do NOT use lazy loading
- [ ] All images have explicit `width` and `height` attributes (prevents CLS)
- [ ] All images have `alt` text (translated via i18n)
- [ ] Decorative images use `alt=""` and `role="presentation"`
- [ ] SVGs used for icons and logos where possible
- [ ] No images larger than necessary for display size

### Responsive Images (if applicable)

```html
<img
  srcset="image-400.webp 400w, image-800.webp 800w, image-1200.webp 1200w"
  sizes="(max-width: 768px) 100vw, 50vw"
  src="image-800.webp"
  alt="..."
  width="1200"
  height="630"
  loading="lazy"
>
```

---

## 8.2 — Performance

### Fonts

- [ ] `font-display: swap` on all `@font-face` declarations
- [ ] Preconnect hints in `<head>` (already in index.html from Step 1)
- [ ] Consider self-hosting fonts for better performance
- [ ] Only load weights actually used

### Critical Rendering Path

- [ ] No render-blocking JavaScript in `<head>`
- [ ] Third-party scripts (analytics, maps, embeds) load only after consent and asynchronously
- [ ] Vite code splitting enabled (dynamic `import()` for pages and heavy modules)

### Caching

- [ ] `netlify.toml` has immutable cache for `/assets/*` (Vite hashed filenames)
- [ ] Static files have long cache durations
- [ ] HTML not cached aggressively

---

## 8.3 — Accessibility (a11y)

### Semantic HTML

- [ ] Page uses landmarks: `<header>`, `<main>`, `<nav>`, `<footer>`, `<section>`
- [ ] Only ONE `<h1>` per page
- [ ] Heading hierarchy logical (h1 → h2 → h3, no skipping)
- [ ] Lists use `<ul>`, `<ol>`, `<li>`

### Keyboard Navigation

- [ ] All interactive elements focusable
- [ ] Tab order logical (follows visual order)
- [ ] Focus visible on all focusable elements
- [ ] Dropdowns: Enter/Space to open, arrow keys to navigate, Escape to close
- [ ] Mobile menu: closable with Escape

### Focus Styles

```css
*:focus-visible {
  outline: 2px solid var(--color-primary);
  outline-offset: 2px;
}
```

### ARIA

- [ ] Icon-only buttons have `aria-label`
- [ ] Mobile menu toggle has `aria-expanded` and `aria-controls`
- [ ] Form errors linked via `aria-describedby`
- [ ] Loading states announced with `aria-live="polite"`
- [ ] Current page: `aria-current="page"` in navigation

### Color Contrast

- [ ] Normal text: 4.5:1 ratio minimum (WCAG AA)
- [ ] Large text: 3:1 minimum
- [ ] Verified in both light AND dark mode (if applicable)

### Forms

- [ ] Every input has a `<label>`
- [ ] Required fields marked with `aria-required="true"`
- [ ] Error states: `aria-invalid="true"` + error linked via `aria-describedby`
- [ ] `autocomplete` attributes set

### Motion

```css
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}
```

---

## 8.4 — Core Web Vitals Targets

| Metric | Target |
|---|---|
| **LCP** (Largest Contentful Paint) | < 2.5s |
| **FID** (First Input Delay) | < 100ms |
| **CLS** (Cumulative Layout Shift) | < 0.1 |
| **INP** (Interaction to Next Paint) | < 200ms |

### Measurement

```bash
npx lighthouse https://localhost:8888 --output html --output-path report.html
```

Or use Chrome DevTools → Lighthouse tab.

---

## Verification

**Run a full Lighthouse audit. Targets:**
- [ ] Performance: 90+
- [ ] Accessibility: 90+
- [ ] Best Practices: 90+
- [ ] SEO: 90+

**Manual checks:**
- [ ] Tab through entire site with keyboard — everything reachable
- [ ] Verify contrast in both themes (if dark mode)
- [ ] Test with `prefers-reduced-motion: reduce`
- [ ] No horizontal scrolling from 320px to 1920px

```bash
git add -A && git commit -m "Step 8: Performance & Accessibility — optimization, a11y, Core Web Vitals"
```
