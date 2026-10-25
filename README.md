[![CI](https://github.com/backstabslash/portfolio/actions/workflows/ci.yml/badge.svg)](https://github.com/backstabslash/portfolio/actions/workflows/ci.yml)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)
[![Built with Astro](https://img.shields.io/badge/built%20with-Astro-ff5d01.svg?logo=astro)](https://astro.build)
[![CV](https://img.shields.io/badge/cv-pdf-d90429.svg)](https://backstabslash.com/cv.pdf)

A config-driven developer portfolio built with Astro. Dark/light theme, interactive particle background, zero runtime JS (except particles). Deploy to Kubernetes or any static host.

## Quick start

```bash
# Fork this repo, then:
git clone https://github.com/YOUR_USERNAME/portfolio
cd portfolio
npm install
npm run dev
```

Edit `site.config.ts` with your info, that's the only file you need to change.

## Configuration

All content lives in `site.config.ts`:

| Field           | Type   | Description                                                                              |
| --------------- | ------ | ---------------------------------------------------------------------------------------- |
| `name`          | string | Your full name                                                                           |
| `title`         | string | Job title / tagline                                                                      |
| `headline`      | string | Hero section headline                                                                    |
| `bio`           | string | Short bio paragraph                                                                      |
| `profileImage`  | string | Path to profile photo, e.g. `/images/profile.jpg`                                        |
| `mark`          | object | Optional personal SVG shown at the photo's corner: `{ dark, light? }`                    |
| `email`         | string | Contact email                                                                            |
| `links`         | object | `github`, `linkedin`, `resume` (URL, or a path like `/cv.pdf`)                           |
| `about`         | object | `image` path and `text` (supports `\n\n` for paragraphs)                                 |
| `skills`        | array  | `{ label, items }` skill groups                                                          |
| `projects`      | array  | `{ title, description, image, tech, github, url?, stars?, label? }`                      |
| `projectTeaser` | object | Optional placeholder card: `{ label, title, description, prompt, output, tech, github }` |
| `work`          | array  | `{ title, description, tag }` professional work items                                    |
| `contact`       | object | `heading` and `description` for the contact section                                      |
| `theme`         | object | `dark` and `light` palettes (hex), each with its own `accent` and `accentAlt`            |

## Images

Drop your images in `src/assets/images/` and reference them in `site.config.ts` as `/images/filename.jpg` (the `/images/` prefix is a virtual path, not a folder). At build time Astro optimizes them to WebP and emits responsive variants via `srcset`, so oversized source files are fine.

| Image               | Minimum size | Used in       |
| ------------------- | ------------ | ------------- |
| `profile.jpg`       | 440x440px    | Hero section  |
| `about.jpg`         | 864x1080px   | About section |
| Project screenshots | 1048x655px   | Project cards |

## Mark and favicon

`mark` is an optional SVG of your own, shown at the bottom-left corner of the hero photo. Put the files in `public/` (e.g. `public/brand/`) and point `mark.dark` and `mark.light` at them. `dark` is used on the dark theme, and `light` on the light theme, falling back to `dark` if omitted. They're served as-is, so CSS animations inside the SVG keep playing. Wrap them in a `prefers-reduced-motion` block that shows the final frame.

The favicon is separate: replace `public/favicon.svg`, `public/favicon-96.png` (search results) and `public/apple-touch-icon.png` (180x180, iOS home screen). Browsers don't run animations in favicons, so use a static version of the mark.

## Resume

Drop the PDF in `public/` (e.g. `public/cv.pdf`) and set `links.resume` to `/cv.pdf`. nginx also redirects `/cv` to it and sends `noindex` so it stays out of search results.

## Theming

Edit `theme` in `site.config.ts` to change colors. All values are hex colors.

Dark and light palettes are independent - each defines `bg`, `card`, `border`, `text`, and their variants, plus two accents:

- `accent` drives section labels, tech tags, primary buttons, and hover states.
- `accentAlt` only shows up in the particle background and the moiré dividers, paired with `accent`.

## Development

```bash
npm run dev        # Start dev server
npm run build      # Production build
npm run preview    # Preview production build
npm run lint       # ESLint + Prettier check
npm run lint:fix   # Auto-fix lint issues
npm run test       # Unit tests (Vitest)
npm run test:e2e   # E2E tests (Playwright)
```

## Deployment

### Docker (any host)

```bash
docker build -t portfolio .
docker run -p 80:80 portfolio
```

### Kubernetes (k3s with Traefik)

1. Update `k8s/ingress.yaml` with your domain
2. Update `k8s/deployment.yaml` with your image name
3. Add `KUBECONFIG_DATA` secret to your GitHub repo (base64-encoded kubeconfig)
4. Push to main - CI/CD handles the rest

### Other platforms

Run `npm run build` and deploy the `dist/` folder to any static host (Vercel, Netlify, Cloudflare Pages, etc).
