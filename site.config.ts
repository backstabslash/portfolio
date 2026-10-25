import { defineConfig } from './src/lib/config';

export default defineConfig({
  name: 'Tymofii Striukov',
  title: 'DevOps & AI Platform Engineer',
  headline: 'Building tools that make engineers ship faster',
  bio: 'DevOps and Developer Experience Engineer with 3 years at Pipedrive. Building developer tools, AI products, and infrastructure for a 300+ engineer organization.',

  profileImage: '/images/profile.jpg',
  email: 'tymofii.striukov@gmail.com',

  links: {
    github: 'https://github.com/backstabslash',
    linkedin: 'https://linkedin.com/in/tymofii-striukov',
    resume: '/cv.pdf',
  },

  about: {
    image: '/images/about.jpg',
    text: 'I build the tools I wish I had. Curiosity about what a Claude Code habit really costs turned into goccc. A painful 40-file agent diff turned into moire. Even this site runs on a self-hosted k3s cluster, next to a few other side projects.\n\nStarted in DevOps, keeping CI/CD pipelines and Kubernetes clusters happy, then drifted toward the tools engineers touch every day. These days that mostly means coding agents: plugins, skills, evals, and a fair amount of arguing with prompts.',
  },

  skills: [
    { label: 'Coding Agents', items: 'Claude Code, Codex, Pi, MCP, skills & plugins' },
    { label: 'AI Engineering', items: 'RAG, LLM evals, LLM-as-a-judge, guardrails' },
    { label: 'Languages', items: 'TypeScript, Go, Python, SQL, Bash' },
    { label: 'Stack', items: 'Node, Fastify, React, Electron, MySQL, MongoDB' },
    { label: 'Platform', items: 'Kubernetes, GitHub Actions, ArgoCD, Helm, AWS, Grafana' },
  ],

  projects: [
    {
      title: 'moire',
      description:
        'See what your coding agent changed and why. Keep the good lines, throw out the rest.',
      image: '/images/moire.png',
      tech: ['Electron', 'TypeScript', 'Agent skill', 'Linux', 'macOS'],
      github: 'https://github.com/backstabslash/moire',
      liveStars: true,
      label: 'Open Source',
    },
    {
      title: 'goccc',
      description:
        'CLI cost calculator for Claude Code. Parses session logs, breaks down costs by model, tracks spending over time.',
      image: '/images/goccc.png',
      tech: ['Go', 'CLI', 'Zero deps', 'Homebrew'],
      github: 'https://github.com/backstabslash/goccc',
      stars: 35,
      liveStars: true,
      label: 'Open Source',
    },
    {
      title: 'eb-spending-tracker',
      description:
        'Personal finance tracker pulling multi-bank transactions via Enable Banking PSD2 API. Telegram summaries and Grafana dashboards.',
      image: '/images/spending-tracker.png',
      tech: ['TypeScript', 'MongoDB', 'Grafana', 'k3s', 'Helm', 'GitHub Actions'],
      github: 'https://github.com/backstabslash/eb-spending-tracker',
      label: 'Open Source',
    },
  ],

  projectTeaser: {
    label: 'In progress',
    title: '???',
    description: 'Whatever bugs me next.',
    prompt: 'git checkout -b next',
    output: "Switched to a new branch 'next'",
    tech: ['TBD'],
    github: 'https://github.com/backstabslash',
  },

  work: [
    {
      title: 'AI PR Approval Gate',
      description:
        'Built end to end and now approving PRs in production. Deterministic risk checks plus an LLM verdict decide whether an AI-reviewed PR can be approved without a human reviewer. Per-repo policies, a kill switch, and a backtest harness that benchmarks prompt and model changes against merged PRs with known outcomes.',
      tag: 'AI Platform',
    },
    {
      title: 'Claude Code Plugin Marketplace',
      description:
        'Org-wide distribution channel for 30+ versioned AI tooling plugins, including team-owned ones, plus a CLI for sharing Claude configurations across teams. Supported the Pi agent harness through pi-install, an internal npm package with custom extensions, and contributed to the internal MCP gateway.',
      tag: 'Developer Tooling',
    },
    {
      title: 'AI-Assisted Development Adoption',
      description:
        'Led adoption for 300+ engineers, reaching 90%+ weekly utilization. Designed the curriculum from scratch, delivered 30+ training and pair programming sessions, tracked uptake with an internal usage dashboard, and presented the practices at the CTO All-Hands.',
      tag: 'Leadership',
    },
    {
      title: 'Voice of Customer',
      description:
        'RAG-based platform ingesting Intercom chats and Demodesk transcripts. Delivered semantic clustering, root-cause extraction, PII anonymization, and Jira sync, processing 150k+ feedback items into 1600+ clusters that help teams fix issues putting revenue from large customers at risk. Built with Fastify, React, and OpenAI.',
      tag: 'AI / Full-stack',
    },
    {
      title: 'CI/CD & Infrastructure Modernization',
      description:
        'Migrated testbox pipelines from Jenkins to GitHub Actions, retiring dedicated Jenkins workers and their infrastructure cost. Led a security-driven ArgoCD upgrade across production Kubernetes clusters and rolled out Renovate for Helm chart upgrades.',
      tag: 'Infrastructure',
    },
    {
      title: 'DevOps Team Split',
      description:
        "Co-led the split of Pipedrive's DevOps team into Developer Productivity and CI/CD, owning the plan from the Developer Productivity side. Decided ownership across 50+ repositories and Jira boards, triaged 100+ production alerts, and divided on-call rotations between the new teams.",
      tag: 'Leadership',
    },
  ],

  contact: {
    heading: "Let's work together",
    description: 'Open to AI Platform, Developer Productivity, and DevOps roles.',
  },

  theme: {
    colors: {
      accentDark: '#10b981',
      accentLight: '#2563eb',
    },
    dark: {
      bg: '#0a0a0f',
      bgSecondary: '#111118',
      card: '#16161e',
      cardHover: '#1c1c26',
      border: '#2a2a35',
      borderHover: '#3a3a48',
      text: '#e8e8ed',
      textSecondary: '#9898a6',
      textTertiary: '#6a6a78',
    },
    light: {
      bg: '#f5f5f0',
      bgSecondary: '#eaeae4',
      card: '#ffffff',
      cardHover: '#fafaf8',
      border: '#d4d4d0',
      borderHover: '#b8b8b4',
      text: '#1a1a1f',
      textSecondary: '#5a5a65',
      textTertiary: '#8a8a95',
    },
  },
});
