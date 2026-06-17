# FieldReport Design System

Design tokens and brand assets for the FieldReport product suite. This is the single source of truth for color, typography, spacing, radius, shadow, and motion — shared across all FieldReport applications.

## What's in here

```
src/          — React components (Button, Input, Card, Logo, etc.)
tokens.css    — All design tokens as CSS custom properties (--fr-*)
brand/        — Logo lockups, marks, and favicons (SVG + PNG)
```

---

## Installing in a FieldReport app

Published to GitHub Packages as `@fieldreport/design-system`.

Add `.npmrc` to the consuming app:

```
@fieldreport:registry=https://npm.pkg.github.com
//npm.pkg.github.com/:_authToken=${NODE_AUTH_TOKEN}
```

Set `NODE_AUTH_TOKEN` to a GitHub personal access token with `read:packages` scope.

```bash
npm install @fieldreport/design-system
```

```ts
import { Button, Input, Logo } from '@fieldreport/design-system'
import '@fieldreport/design-system/dist/index.css'
```

---

## Publishing

`dist/` is built at publish time — it is not committed to git.

1. Bump `version` in `package.json`
2. Push to `main`
3. Run the **Publish to GitHub Packages** workflow (Actions → workflow_dispatch), or create a GitHub Release

`prepublishOnly` runs `npm run build` before the tarball is uploaded.

---

## Using tokens via CDN

For any app or prototype that needs the FieldReport token set, import directly from jsDelivr — no install required:

```html
<!-- In HTML -->
<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/set-solutions-vof/fieldreport-design-system@main/tokens.css" />
```

```css
/* In CSS */
@import url('https://cdn.jsdelivr.net/gh/set-solutions-vof/fieldreport-design-system@main/tokens.css');
```

```js
// In a bundler (Vite, webpack, etc.)
import 'https://cdn.jsdelivr.net/gh/set-solutions-vof/fieldreport-design-system@main/tokens.css'
```

Pin to a specific commit for production stability:

```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/your-org/fieldreport-design-system@COMMIT_SHA/tokens.css" />
```

---

## Token namespaces

| Prefix | Purpose |
|---|---|
| `--fr-color-*` | Raw color ramps (neutral, accent, status stems) |
| `--fr-background`, `--fr-surface*`, `--fr-border*`, `--fr-text*` | Semantic surface and text — **use these in components** |
| `--fr-accent*`, `--fr-destructive*` | Interactive color |
| `--fr-status-*`, `--fr-signal-*`, `--fr-approval-*`, `--fr-citation-*` | Domain-specific semantic color |
| `--fr-font-*` | Font stacks (sans, mono) |
| `--fr-text-*` | Type size scale (xs → 3xl) |
| `--fr-weight-*` | Font weight scale |
| `--fr-leading-*` | Line height scale |
| `--fr-space-*` | Spacing scale 0–16 on a 4px base |
| `--fr-radius-*` | Border radius |
| `--fr-shadow-*` | Elevation + focus ring |
| `--fr-duration-*`, `--fr-ease-*`, `--fr-transition-*` | Motion |
| `--fr-control-*` | Shared Button/Input control geometry |

Always reference semantic tokens in components, not raw color ramps.

---

## App shell opt-in

Add `class="fr-app"` to your root element to opt into the system's base font, color, and antialiasing:

```html
<body class="fr-app">
```

---

## Brand assets

All assets are in `brand/`. Prefer SVG when the host can render it; use PNGs for fixed-pixel surfaces (email, app store, OG images).

| File | Use |
|---|---|
| `logo-lockup.svg` | Default logo (ink, horizontal) |
| `logo-lockup-accent.svg` | Logo with accent-colored mark |
| `logo-lockup-on-dark.svg` | Logo for dark backgrounds |
| `logo-mark.svg` | Mark only (square) |
| `logo-mark-accent.svg` | Mark with accent color |
| `favicon.svg` | Browser favicon (SVG) |
| `favicon-32.png`, `favicon-180.png`, `favicon-512.png` | Raster favicons |
| `logo-lockup-{480,720,1200}.png` | Raster lockup (ink) |
| `logo-lockup-accent-{480,720,1200}.png` | Raster lockup (accent) |
| `logo-lockup-on-dark-{480,720,1200}.png` | Raster lockup (dark bg) |
| `logo-mark-{128,256,512}.png` | Raster mark |
| `logo-mark-accent-{128,256,512}.png` | Raster mark (accent) |

CDN URL pattern for brand assets:

```
https://cdn.jsdelivr.net/gh/your-org/fieldreport-design-system@main/brand/logo-lockup.svg
```

---

## Updating tokens

Edit `tokens.css` directly. No build step — it's plain CSS. The CDN serves the file as-is from the `main` branch, so changes are live within minutes of pushing.

When evolving the token system: add new tokens before removing old ones, and update all consumers before deleting anything. Removing a token that an app references causes a silent fallback to `unset`.

---

## Versioning

This repo uses `main` for the latest stable tokens. Breaking changes (renaming or removing a token) should be communicated to all consuming apps before merging. Pin consuming apps to a commit SHA for zero-surprise production deployments.
