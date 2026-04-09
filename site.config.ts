import { defineConfig } from './src/lib/config';

export default defineConfig({
  name: 'Tymofii Striukov',
  title: 'DevOps & Developer Experience Engineer',
  headline: 'Building tools that make engineers ship faster',
  bio: 'DevOps and Developer Experience engineer with 3 years at Pipedrive. Building developer tools, internal products, and infra for a 300+ engineer organization.',

  profileImage: '/images/profile.jpg',
  email: 'tymofii.striukov@gmail.com',

  links: {
    github: 'https://github.com/backstabslash',
    linkedin: 'https://linkedin.com/in/tymofii-striukov',
    resume: 'https://drive.google.com/file/d/1k2Vdo7RAKjrhDN9QM7KMPzTs7rMBoH09/view',
  },

  about: {
    image: '/images/about.jpg',
    text: 'I work across the stack, from CI/CD pipelines and Kubernetes infrastructure to internal products and developer tooling, all focused on making teams move faster.\n\nCurrently at Pipedrive on Developer Productivity, where I build tools used daily by 300+ engineers. Led AI-assisted development adoption that reached 90%+ weekly utilization across the organization.',
  },

  skills: [
    { label: 'Languages', items: 'TypeScript, Go, Bash, SQL, Markdown' },
    { label: 'Backend', items: 'Node, Fastify, PostgreSQL, MongoDB' },
    {
      label: 'Infrastructure',
      items: 'Kubernetes, Docker, Helm, Terraform, AWS',
    },
    { label: 'Frontend', items: 'React, Tailwind CSS, Vite, HTML' },
    {
      label: 'DevOps',
      items: 'GitHub Actions, Jenkins, ArgoCD, Prometheus, Grafana, Loki',
    },
    { label: 'AI & Tooling', items: 'Claude Code, MCP servers, OpenAI API, LLM integration' },
  ],

  projects: [
    {
      title: 'goccc',
      description:
        'CLI cost calculator for Claude Code. Parses session logs, breaks down costs by model, tracks spending over time.',
      image: '/images/goccc.png',
      tech: ['Go', 'CLI', 'Zero deps', 'Homebrew'],
      github: 'https://github.com/backstabslash/goccc',
      stars: 16,
      label: 'Open Source',
    },
    {
      title: 'eb-spending-tracker',
      description:
        'Personal finance tracker pulling multi-bank transactions via Enable Banking PSD2 API. Deduplication, Telegram summaries, and Grafana dashboards.',
      image: '/images/spending-tracker.png',
      tech: ['TypeScript', 'MongoDB', 'Grafana', 'k3s', 'Helm', 'GitHub Actions'],
      github: 'https://github.com/backstabslash/eb-spending-tracker',
      label: 'Open Source',
    },
  ],

  work: [
    {
      title: 'Voice of Customer',
      description:
        'AI-powered platform that extracts, categorizes, and clusters customer feedback from Intercom, Demodesk, and other sources. Product teams now use it to identify patterns and shape their roadmaps. Built end to end with Fastify, React, and OpenAI.',
      tag: 'AI / Full-stack',
    },
    {
      title: 'Voice of Engineer',
      description:
        'Internal platform that helps engineers find and track ideas using AI-powered vector search. Surfaces actionable proposals from Slack threads and syncs with Jira for grooming. Adopted company-wide within weeks of launch.',
      tag: 'AI / Backend',
    },
    {
      title: 'Claude Code Plugin Marketplace',
      description:
        'Plugin ecosystem for AI-assisted development: MCP server, documentation generator, workflow automation skills. Authored agent documentation for product teams, changing how they integrate AI into daily work.',
      tag: 'Developer Tooling',
    },
    {
      title: 'AI-Assisted Development Adoption',
      description:
        'Led adoption for 300+ engineers, reaching 90%+ weekly utilization. Designed curriculum, delivered 35+ training sessions, and embedded with mission teams to share knowledge and accelerate their workflows. Presented at CTO All-Hands.',
      tag: 'Leadership',
    },
  ],

  contact: {
    heading: "Let's work together",
    description: 'Open to DevOps, Developer Experience, and Software Engineering roles.',
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
