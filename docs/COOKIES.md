# 🍪 Step 5 — Cookies, Consent & Analytics

> **Prerequisites:** Steps 1-4 complete. i18n working. All functionality that depends on cookies is built.
> **Context7:** Use Context7 MCP server to fetch latest documentation for cookie consent best practices and Google Analytics 4 setup before implementing.
> **Reference:** Languages from [`INFO.md`](./INFO.md), integrations from [`INFO.md`](./INFO.md)

---

## Overview

This step implements a full GDPR/ePrivacy/ZVOP-2 compliant cookie consent system with:
- A cookie banner with Accept All / Reject All / Customize options
- A granular settings modal with category toggles and cookie tables
- Conditional script loading (no scripts before consent)
- Google Analytics 4 integration (analytics consent only)
- Cookie policy page
- Full i18n support for all languages
- Reset/withdraw consent functionality

---

## 5.1 — Cookie Consent Data Structure

### Cookie Name: `cookie_consent`

**Storage rules:**
- Duration: 12 months
- Path: `/`
- SameSite: `Lax`
- Secure: `true` (HTTPS only)
- HttpOnly: `false` (must be readable by frontend)

**Value format:** Stringified JSON:

```json
{
  "version": 1,
  "essential": true,
  "analytics": false,
  "functional": false,
  "marketing": false,
  "timestamp": "2025-01-01T00:00:00.000Z"
}
```

**Rules:**
- `essential` is ALWAYS `true` — not user-controllable
- `version` allows future re-consent triggers if cookie logic changes
- `timestamp` records when consent was given/updated
- All category values must be booleans (not strings)

---

## 5.2 — Cookie Utility Functions

Create `src/utils/cookies.js` with these functions:

### `setCookie(name, value, days)`
- Set with: `path=/; SameSite=Lax; Secure`
- Encode value with `encodeURIComponent`

### `getCookie(name)`
- Returns decoded value or `null`

### `deleteCookie(name)`
- Delete by setting expired date
- Delete with BOTH domain forms:
  - `www.genyxz.si`
  - `.genyxz.si`
  - Current hostname
- Path: `/`

### `getConsent()`
- Read and parse `cookie_consent` cookie
- Validate: must have `version`, `essential`, `analytics`, `functional`, `marketing` keys
- All category values must be booleans (not strings)
- Return parsed object or `null` if missing/invalid
- If invalid: delete the corrupt cookie

### `saveConsent(preferences)`
- Accept preferences object
- Add `version: 1` and `timestamp: new Date().toISOString()`
- Force `essential: true`
- Save as stringified JSON to `cookie_consent` cookie (12 months)

### `hasConsentedTo(category)`
- Returns `true` if user has allowed a specific category
- Categories: `analytics`, `functional`, `marketing`
- Returns `false` if no consent exists

### `deleteAnalyticsCookies()`
- Delete `_ga` cookie
- Delete ALL cookies starting with `_ga_` (prefix match — the suffix changes per property)
- Delete `_gid` cookie
- Use both domain forms for deletion

### `resetAllConsent()`
- Delete `cookie_consent` cookie
- Delete all analytics cookies (`_ga`, `_ga_*`, `_gid`)
- Hard reload the page so banner re-appears and no scripts are re-injected

---

## 5.3 — Cookie Consent Banner

### Banner Position

**Position:** Bottom Left


Banner is positioned at the **bottom-left** of the screen (fixed, not full-width).




### Desktop Layout

```
┌─────────────────────────────────────┐
│  🍪 We Use Cookies                  │
│                                     │
│  Brief explanation of why cookies   │
│  are used on this site.             │
│                                     │
│  🔗 Cookie Policy                   │
│  ──────────────────────             │
│  ┌─────────────────────┐           │
│  │    Accept All        │  primary  │
│  └─────────────────────┘           │
│  ┌─────────────────────┐           │
│  │    Reject All        │ secondary │
│  └─────────────────────┘           │
│  ┌─────────────────────┐           │
│  │    Customize         │ secondary │
│  └─────────────────────┘           │
└─────────────────────────────────────┘
```

**Requirements:**
- Fixed position, z-50
- Use the website's existing colors, fonts, and theme styles
- Title: translated via i18n (`cookie.banner_title`)
- Description: translated via i18n (`cookie.banner_description`)
- Cookie Policy link: points to cookie policy page
- Horizontal divider line between text and buttons
- Three buttons stacked vertically, same width:
  - **Accept All** — primary style
  - **Reject All** — secondary style
  - **Customize** — secondary style (opens settings modal)
- All text translated via i18n


### Mobile Layout

- Banner takes approximately 2/3 of screen height
- Buttons stacked vertically (same as desktop)
- Full-width on mobile

### Banner Behavior

1. On page load: check if `cookie_consent` cookie exists
2. If exists and valid → do NOT show banner, apply saved consent
3. If missing or invalid → show banner, block all non-essential scripts

---

## 5.4 — Cookie Settings Modal

When user clicks **Customize**, open a settings modal.

### Desktop: Fixed-Size Modal

```
┌──────────────────────────────────────────┐
│  Cookie Settings                      ✕  │
│──────────────────────────────────────────│
│                                          │
│  ▸ Essential Cookies          [ON]  🔒  │
│    (click to expand → table)             │
│  ─────────────────────────────────────   │
│  ▸ Analytics Cookies          [OFF] 🔘  │
│    (click to expand → table)             │
│  ─────────────────────────────────────   │
│  ▸ Functional Cookies         [OFF] 🔘  │
│    (click to expand → table)             │
│  ─────────────────────────────────────   │
│  ▸ Marketing Cookies          [OFF] 🔘  │
│    (click to expand → table)             │
│                                          │
│──────────────────────────────────────────│
│  [Accept All] [Reject All]  [Save]       │
└──────────────────────────────────────────┘
```

### Mobile: Full-Screen Page

- Opens as full-screen overlay instead of modal
- Same content and logic
- Footer buttons stacked vertically

### Category Details

Each category is an expandable accordion. When clicked, it reveals a description and a cookie table.

#### Essential Cookies (Always ON, toggle disabled)

| Cookie Name | Duration | Purpose |
|---|---|---|
| `cookie_consent` | 1 year | Stores user's cookie preferences and timestamp |
| `i18next` | 30 days | Stores user's selected language |


#### Analytics Cookies (Toggle OFF by default)



#### Functional Cookies (Toggle OFF by default)

| Cookie Name | Duration | Purpose |
|---|---|---|
| – | – | No functional cookies are used currently |

#### Marketing Cookies (Toggle OFF by default)

| Cookie Name | Duration | Purpose |
|---|---|---|
| – | – | No marketing cookies are used currently |

### Modal Actions

| Button | Behavior |
|---|---|
| **Accept All** | Set ALL categories to `true`, save, close modal, close banner, load all scripts |
| **Reject All** | Set `essential: true`, all others `false`, save, close modal, close banner |
| **Save Settings** | Save exact toggle states, close modal, close banner, load only consented scripts |

### i18n Translation Keys

```
cookie.banner_title
cookie.banner_description
cookie.policy_link
cookie.accept_all
cookie.reject_all
cookie.customize
cookie.settings_title
cookie.save_settings
cookie.category_essential
cookie.category_essential_desc
cookie.category_analytics
cookie.category_analytics_desc
cookie.category_functional
cookie.category_functional_desc
cookie.category_marketing
cookie.category_marketing_desc
cookie.table_name
cookie.table_duration
cookie.table_purpose
cookie.always_on
cookie.no_cookies
```

---

## 5.5 — Conditional Script Loading

### Critical Rule

**NO non-essential scripts load before consent.** This means:
- No `<script>` tags for analytics, pixels, chat widgets, or embeds in HTML
- Scripts are injected dynamically ONLY after consent is verified
- On every page load, check consent FIRST, then load scripts

### Create `src/utils/applyConsentScripts.js`

```js
function applyConsentScripts(consent) {
  if (!consent) return

  if (consent.analytics === true) {
    loadAnalyticsScripts()
  }

  if (consent.functional === true) {
    loadFunctionalScripts()
  }

  if (consent.marketing === true) {
    loadMarketingScripts()
  }
}
```

### Trigger Points

Call `applyConsentScripts()` at these times:
1. **On every page load** — after reading `cookie_consent` cookie
2. **Immediately after user clicks Accept All** — no page reload needed
3. **Immediately after user clicks Save Settings** — with the new consent values

### Script Loading Map

| Script / Service | Category | When to Load |
|---|---|---|
| `cookie_consent` cookie | Essential | Always |
| `i18next` language cookie | Essential | Always |


| Chat widgets, video embeds | Functional | Only after `functional: true` |

| Social media embeds | Marketing | Only after `marketing: true` |
| Facebook Pixel, Google Ads | Marketing | Only after `marketing: true` |

---



---

## 5.7 — Consent Reset / Withdrawal

### Footer Link

Add a "Cookie Settings" link in the footer on every page. This reopens the cookie settings modal (GDPR requirement — users must be able to change preferences at any time).

### Reset Cookies Function

When triggered:
1. Delete `cookie_consent` cookie
2. Delete ALL analytics cookies: `_ga`, `_gid`, all cookies starting with `_ga_`
3. Delete with BOTH domain forms: `www.genyxz.si` and `.genyxz.si`
4. Hard reload the page

After reset:
- Banner re-appears
- No analytics scripts load
- User must consent again

---

## 5.8 — Cookie Policy Page

### Page Setup


- **Routes:** /sl/piskotki

- Accessible from: cookie banner link, footer link
- Translated via i18n for all languages
- Styled consistently with site design

### Required Content Sections

**1. Introduction**
Explain that this policy covers how the website uses cookies and similar technologies.

**2. What Are Cookies?**
Explain cookies are small text files stored on the device.

**3. Types of Cookies Used**

| Category | Purpose | Legal Basis | Default |
|---|---|---|---|
| Essential | Core functionality (language, consent) | ePrivacy exemption | Always ON |
| Analytics | Measure website usage and performance | Consent (GDPR Art. 6(1)(a)) | OFF |
| Functional | Enhanced features (future use) | Consent (GDPR Art. 6(1)(a)) | OFF |
| Marketing | Advertising and tracking (future use) | Consent (GDPR Art. 6(1)(a)) | OFF |

**4. Specific Cookies Used**
Include the same cookie tables from Section 5.4.

**5. How to Manage Cookies**
Explain users can change preferences via Cookie Settings link at any time.

**6. Third-Party Cookies**


**7. Contact Information**
Contact details: GenYXZ — genyxz.si

### All content via i18n keys under `cookie.policy.*` namespace.

---

## 5.9 — Language Support

- Consent logic is language-independent
- Language switching affects UI text only
- Cookie names, keys, and logic remain unchanged in all languages
- All labels, descriptions, button text, and cookie policy content translated via i18n
- Cookie table: cookie names stay in English, descriptions are translated
- Detect current language from i18n and render accordingly

---

## 5.10 — Persistent Cookie Settings Access

> **CRITICAL (from audit):** Users must be able to reopen cookie settings at ANY time — not just through the cookie policy page or a reset flow.

### Required Access Points

The cookie settings modal must be reopenable from ALL of these locations:

1. **Footer** — "Cookie Settings" link on every page (mandatory, GDPR requirement)
2. **Cookie Policy page** — "Manage your preferences" button within the policy content
3. **Privacy Policy page** — Link to cookie settings in the cookies section

### Implementation

- All access points call the same function: `openCookieSettings()`
- This reopens the **same settings modal** (not the banner) with current consent state pre-loaded in toggles
- User can modify and save without needing to reset first
- No page reload required — modal opens in-place

### What NOT to do

- Do NOT require users to "reset cookies" just to change preferences
- Do NOT hide the settings access behind multiple clicks
- Do NOT only show settings on the cookie policy page

---

## 5.11 — Client-Side Storage Documentation

> **From audit:** localStorage and sessionStorage usage must be documented for full transparency, especially if the cookie policy mentions "cookies and similar technologies."

### localStorage Inventory

Document ALL localStorage keys used by the website:

| Key | Purpose | Category | Lifetime |
|---|---|---|---|
| none | No localStorage keys are currently used in this configuration | Essential | N/A |



### sessionStorage Inventory

Document ALL sessionStorage keys used by the website:

| Key | Purpose | Category | Lifetime |
|---|---|---|---|
| none | No sessionStorage keys are currently used in this configuration | Essential | Session (cleared on tab close) |

### Policy Requirement

The Cookie Policy page (Section 5.8) must include a "Similar Technologies" section that lists:
- All localStorage keys, their purpose, and retention
- All sessionStorage keys, their purpose, and retention
- Classification: which are essential (site won't work without them) vs. which are preference-based

---

## 5.12 — Third-Party Resource Handling

> **From audit:** Some third-party resources (Google Fonts, CDN scripts) load regardless of consent. This must be addressed.

### Google Fonts

**Decision:** self-hosted


**Self-hosted approach (recommended for GDPR compliance):**
- Download font files and host from own server/CDN
- No third-party requests to `fonts.googleapis.com`
- Place font files in `src/assets/fonts/` or `public/fonts/`
- Use `@font-face` declarations in CSS
- This eliminates the Google Fonts privacy concern entirely




### CDN-Loaded Scripts

Any scripts loaded from external CDNs (jsDelivr, cdnjs, unpkg) should be:
1. **Evaluated:** Is this script essential or optional?
2. **If essential:** Document in cookie policy, classify as strictly necessary
3. **If optional:** Gate behind appropriate consent category
4. **Consider:** Self-hosting critical scripts to eliminate third-party requests

---

## 5.13 — Cookie Policy Maintenance

> **From audit:** Cookie metadata (durations, purposes) in the policy can go stale when vendors change their cookie behavior.

### Maintenance Schedule

| Task | Frequency |
|---|---|
| Verify GA cookie names and durations match actual behavior | Quarterly |
| Review if new third-party services have been added | After every feature deployment |
| Check for new localStorage/sessionStorage usage | After every feature deployment |
| Update "Last updated" date on Cookie Policy page | After every policy change |
| Verify consent version number — increment if cookie logic changes | As needed |

### Re-Consent Trigger

If the cookie consent structure changes (new categories, changed purposes):
1. Increment the `version` number in the consent data structure
2. On page load, check saved version against current version
3. If mismatch: treat as no consent → show banner again
4. This ensures users re-consent to updated terms

---

## Verification

**Banner:**
- [ ] Cookie banner appears on first visit (no existing consent)
- [ ] Banner positioned correctly: Bottom Left
- [ ] Banner takes ~2/3 screen height on mobile
- [ ] All banner text translated correctly
- [ ] "Accept All" saves all categories as `true`, hides banner
- [ ] "Reject All" saves analytics/functional/marketing as `false`, hides banner
- [ ] "Customize" opens settings modal

**Settings Modal:**
- [ ] Modal shows on desktop, full-screen on mobile
- [ ] Essential toggle ON and disabled (locked)
- [ ] Other toggles default to OFF
- [ ] Each category expands to show description + cookie table

- [ ] "Save Settings" respects individual toggle states
- [ ] All modal text translated

**Consent Logic:**
- [ ] `cookie_consent` cookie created with correct JSON structure
- [ ] `version`, `timestamp`, and all category booleans present
- [ ] Banner does NOT appear on subsequent visits
- [ ] Consent values are booleans, not strings

**Script Loading:**
- [ ] NO third-party scripts in Network tab before consent (check in incognito)


**Persistent Settings Access (from audit):**
- [ ] Footer "Cookie Settings" link reopens the modal (not reset)
- [ ] Cookie Policy page has "Manage preferences" button that opens modal
- [ ] User can change consent without resetting first

**Reset:**
- [ ] Reset removes `cookie_consent` AND all analytics cookies
- [ ] Deletion uses both domain forms (www and bare domain)
- [ ] After reset + reload: banner appears, no scripts loaded

**Cookie Policy Page:**
- [ ] Page accessible at correct URL
- [ ] Content matches cookie tables in settings modal
- [ ] Translated in all languages
- [ ] Linked from banner and footer
- [ ] Includes "Similar Technologies" section (localStorage/sessionStorage)
- [ ] "Last updated" date is current

**Third-Party Resources:**
- [ ] Google Fonts handling matches chosen approach (self-hosted or documented)
- [ ] No undocumented third-party resource loading

```bash
git add -A && git commit -m "Step 5: Cookies — consent banner, settings modal, GA4, cookie policy, storage docs"
```
