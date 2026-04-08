# Portfolio

Config-driven Astro 6 static site with particle background, dark/light theming, and k8s deployment.

## Stack

Astro 6, TypeScript, Zod, Vitest, Playwright, ESLint, Prettier, Docker (nginx), k3s + Traefik, GitHub Actions

## Structure

```
site.config.ts        # All personal content - the only file most changes touch
src/lib/config.ts     # Zod schema validating site.config.ts
src/layouts/           # Base HTML shell, theme CSS vars generation
src/components/        # Nav, Hero, About, Projects, Work, Contact, Footer, ParticleBackground
src/styles/global.css  # Reset, typography, shared classes
k8s/                   # Deployment, Service, IngressRoute manifests
```

## Commands

```bash
npm run dev          # Dev server at localhost:4321
npm run build        # Production build to dist/
npm run lint         # ESLint + Prettier check
npm run lint:fix     # Auto-fix lint issues
npm run test         # Unit tests (Vitest)
npm run test:e2e     # E2E smoke tests (Playwright)
```

## Verification

IMPORTANT: Run before any commit:

```bash
npm run lint && npm run test && npm run build
```

## Conventions

- All personal content goes in `site.config.ts`, not hardcoded in components
- Components read from the config object - don't pass config values as props through multiple layers
- CSS theming uses custom properties generated from `site.config.ts` theme values at build time
- Particle background is vanilla Canvas in an inline `<script is:inline>` - no framework needed
- Don't add runtime JS frameworks - Astro ships zero JS by default (except inline scripts)

## Don't

- Don't hardcode personal info in .astro files - put it in `site.config.ts` instead
- Don't add npm packages for things CSS can handle (animations, theming, layout)
- Don't modify k8s manifests without checking the deploy workflow in `.github/workflows/deploy.yml`
