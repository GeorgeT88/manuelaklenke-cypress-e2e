# <img src="https://cdn.simpleicons.org/cypress/69D3A7" height="32" align="center" /> Cypress E2E Tests — manuelaklenke.com

End-to-end test suite for [manuelaklenke.com](https://manuelaklenke.com) using Cypress. Tests run automatically after every deployment and results are published as a Mochawesome report to GitHub Pages.

---

## 📊 Test Report

Latest report: **[https://georget88.github.io/manuelaklenke-cypress-e2e/](https://georget88.github.io/manuelaklenke-cypress-e2e/)**

---

## 🛠️ Tech Stack

- [Cypress](https://www.cypress.io/) — E2E testing framework
- TypeScript
- [Mochawesome](https://github.com/adamgruber/mochawesome) — HTML test reporter
- GitHub Actions — CI/CD pipeline
- GitHub Pages — Mochawesome report hosting

---

## 📁 Project Structure

```
cypress/
├── e2e/
│   ├── navigation.cy.ts      # Navbar links, footer, 404 page
│   ├── home.cy.ts            # Home page load and content
│   ├── about.cy.ts           # About page load
│   ├── portfolio.cy.ts       # Portfolio page load
│   ├── events.cy.ts          # Events page load
│   ├── contact.cy.ts         # Contact form fields and validation
│   ├── accessibility.cy.ts   # Skip-to-content link, image alt text, single h1
│   └── language.cy.ts        # Language switcher (EN / DE / RO)
└── support/
    ├── commands.ts            # Custom Cypress commands
    └── e2e.ts                 # Support file loaded before every test
```

---

## ✅ Test Coverage

| File | Tests | What is covered |
|---|---|---|
| navigation.cy.ts | 7 | Navbar, footer, all page links, 404 |
| accessibility.cy.ts | 15 | Skip-to-content link, image alt text, single h1 on all 5 public pages |
| language.cy.ts | 4 | Language switcher visibility and switching |
| contact.cy.ts | 4 | Form fields, validation, submit behaviour |
| home.cy.ts | 2 | Page load, main content area |
| about.cy.ts | 1 | Page load |
| portfolio.cy.ts | 1 | Page load |
| events.cy.ts | 1 | Page load |
| **Total** | **35** | |

---

## 🚀 Running Tests Locally

**Install dependencies:**
```bash
npm install
```

**Run all tests (headless):**
```bash
npm test
```

**Open interactive Cypress UI:**
```bash
npm run test:headed
```

**Generate and view report after a run:**
```bash
npm run test:report
```

---

## ⚙️ CI/CD Pipeline

Tests are triggered automatically by [GeorgeT88/manuelaklenke-web](https://github.com/GeorgeT88/manuelaklenke-web) after every push to `main`, once the Vercel production deployment is confirmed live:

```
📦 Push to manuelaklenke-web
        ↓
🔨 Build passes
        ↓
⏳ Vercel deployment confirmed live
        ↓
⚡ repository_dispatch: vercel-deploy
        ↓
🌲 35 tests run against https://manuelaklenke.com (Chrome)
        ↓
📊 Mochawesome report published to GitHub Pages

(in parallel: 🎭 Playwright E2E, 🔬 Selenium E2E)
(after all E2E: 🔒 Snyk SCA + 🔎 Semgrep SAST in parallel)
```

Tests can also be triggered manually from **Actions → Cypress E2E Tests → Run workflow**, and run on a nightly schedule at **07:00 UTC**.

---

## 🏷️ Run Name Convention

| Trigger | Run name |
|---|---|
| Push via app repo | `Cypress E2E Tests — triggered by Vercel deploy` |
| Manual | `Cypress E2E Tests — manual run` |
| Nightly schedule (07:00 UTC) | `Cypress E2E Tests — nightly run` |

---

## ⚠️ Known App Issues

The following issues exist in the app and are documented in the tests:

- `ipapi.co` CORS errors on all pages — caused by IP-based language detection on a free-tier API
