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

| Field          | Type   | Description                                                         |
| -------------- | ------ | ------------------------------------------------------------------- |
| `name`         | string | Your full name                                                      |
| `title`        | string | Job title / tagline                                                 |
| `headline`     | string | Hero section headline                                               |
| `bio`          | string | Short bio paragraph                                                 |
| `profileImage` | string | Path to profile photo (in `public/images/`)                         |
| `email`        | string | Contact email                                                       |
| `links`        | object | `github`, `linkedin`, `resume` URLs                                 |
| `about`        | object | `image` path and `text` (supports `\n\n` for paragraphs)            |
| `skills`       | array  | `{ label, items }` skill groups                                     |
| `projects`     | array  | `{ title, description, image, tech, github, url?, stars? }`         |
| `work`         | array  | `{ title, description, tag }` professional work items               |
| `theme`        | object | `colors.accentDark/accentLight` + `dark` and `light` palettes (hex) |

## Images

Drop your images in `public/images/`:

| Image               | Recommended size | Used in       |
| ------------------- | ---------------- | ------------- |
| `profile.jpg`       | 300x300px        | Hero section  |
| `about.jpg`         | 800x1000px       | About section |
| Project screenshots | 1200x750px       | Project cards |

## Theming

Edit `theme` in `site.config.ts` to change colors. All values are hex colors.

Each theme has its own accent color (`accentDark`, `accentLight`) that drives section labels, tech tags, particle color, primary buttons, and hover states.

Dark and light palettes are independent - each defines `bg`, `card`, `border`, `text`, and their variants.

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
