# 🚀 Step 9 — Launch Checklist

> **Prerequisites:** ALL previous steps (0-8) complete.

---

## 9.1 — Pre-Deploy QA

### Lighthouse Audit

- [ ] Performance: 90+
- [ ] Accessibility: 90+
- [ ] Best Practices: 90+
- [ ] SEO: 90+

### Cross-Browser Testing

Test all pages in:
- [ ] Chrome (latest)
- [ ] Firefox (latest)
- [ ] Safari (latest)
- [ ] Edge (latest)

### Mobile Testing

- [ ] iOS Safari (iPhone)
- [ ] Android Chrome
- [ ] Responsive at 320px, 375px, 768px widths
- [ ] Touch targets minimum 44×44px
- [ ] No horizontal scrolling

### Full Functionality Check

- [ ] All pages load in all languages
- [ ] Language switcher works
- [ ] Language preference persists

- [ ] URL slugs correct per language


- [ ] 404 page works
- [ ] Navigation links all work
- [ ] All forms functional
- [ ] Cookie banner appears on first visit
- [ ] Cookie banner respects saved preference
- [ ] Analytics fires only after consent
- [ ] Footer links (privacy, terms, cookie settings) work
- [ ] All images display correctly

### Code Cleanup

- [ ] All `console.log` removed
- [ ] i18n `debug: false`
- [ ] No commented-out code
- [ ] No TODO comments unresolved
- [ ] No localhost URLs
- [ ] No exposed API keys in frontend
- [ ] `.env` in `.gitignore`
- [ ] `<meta name="robots">` switched from `noindex,follow` to `index,follow`

---

## 9.2 — Environment & DNS

### Netlify Env Vars

Verify all required env vars set in Netlify dashboard:

- [ ] `SITE_URL` = `https://www.genyxz.si`

```bash
netlify env:list
```

### Domain & DNS

- [ ] Domain DNS pointed to Netlify
- [ ] Custom domain configured in Netlify
- [ ] SSL/HTTPS provisioned (automatic)
- [ ] `www` ↔ non-`www` redirect configured
- [ ] Force HTTPS enabled

---

## 9.3 — Deploy

```bash
# Preview deploy
netlify deploy

# Test preview URL thoroughly

# Production deploy
netlify deploy --prod
```

---

## 9.4 — Post-Launch

- [ ] Site loads at `https://www.genyxz.si`
- [ ] HTTP → HTTPS redirect works
- [ ] All functions work on production
- [ ] `robots.txt` accessible
- [ ] `sitemap.xml` accessible
- [ ] Submit sitemap to Google Search Console
- [ ] OG tags validated:
  - [ ] Facebook Debugger
  - [ ] Twitter Card Validator
  - [ ] LinkedIn Post Inspector
- [ ] GA real-time view shows visits
- [ ] Run Lighthouse on production URL — all 90+

---

## Post-Launch Ongoing

| Task | Frequency |
|---|---|
| Check analytics | Weekly |
| Monitor Search Console | Weekly |
| Lighthouse audit | Monthly |
| Update dependencies | Monthly |
| Review legal pages | Quarterly |

---

```bash
git add -A && git commit -m "Step 9: Launch — site is live at https://www.genyxz.si"
git push origin main
```

> ✅ **The site is live.** All steps in MASTER_PLAN.md should now be checked off.

## Company Context

### What The Company Does
GenYXZ je skupnost ambasadorjev, ki povezuje mlade z znanjem o sodobnih pristopih k zdravju. Projekt deluje v okolju preventive, sodobne medicine in dolgoročne zaščite, povezan z blagovno znamko Dr Best / Trilogija zaščite. To je glavna brand spletna stran (multi-page), ki predstavlja organizacijo, vizijo, simbol želve z DNA spirala, partnerje (Dr Best, Abi Health, Further, Teladoc, GenePlanet, Axeria) in povabilo k pridružitvi kot ambasador. Cilj je zgraditi občutek resnosti, premium brand prisotnost in usmeriti obiskovalce na rekruting landing page za prijavo. Stran mora odgovoriti na vprašanje 'Kaj je GenYXZ?' in zgraditi občutek 'To je nekaj resnega in zanimivega'.

### Important Company Information
Not provided
