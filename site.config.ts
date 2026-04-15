import { defineConfig } from './src/lib/config';

export default defineConfig({
  name: 'Tymofii Striukov',
  title: 'DevOps & Developer Experience Engineer',
  headline: 'Building tools that make engineers ship faster',
  bio: 'DevOps and Developer Experience engineer with 3 years at Pipedrive. Building developer tools, AI products, and infrastructure for a 300+ engineer organization.',

  profileImage: '/images/profile.jpg',
  email: 'tymofii.striukov@gmail.com',

  links: {
    github: 'https://github.com/backstabslash',
    linkedin: 'https://linkedin.com/in/tymofii-striukov',
    resume: 'https://drive.google.com/file/d/17C1IUhdbuZPy2M2x9zde_SYdMYpXreVV/view?usp=sharing',
  },

  about: {
    image: '/images/about.jpg',
    text: 'I work across the stack, from CI/CD pipelines and Kubernetes infrastructure to internal products and developer tooling, all focused on making teams move faster.\n\nCurrently at Pipedrive on Developer Productivity, where I build tools used daily by 300+ engineers. Led AI-assisted development adoption that reached 90%+ weekly utilization across the organization.',
  },

  skills: [
    { label: 'Languages', items: 'TypeScript, Go, Bash, SQL, Markdown' },
    { label: 'Backend', items: 'Node, Fastify, MySQL, MongoDB' },
    {
      label: 'Infrastructure',
      items: 'Kubernetes, Docker, Helm, Terraform, AWS',
    },
    { label: 'Frontend', items: 'React, Tailwind CSS, Vite' },
    {
      label: 'DevOps',
      items: 'GitHub Actions, Jenkins, ArgoCD, Prometheus, Grafana, Loki',
    },
    {
      label: 'AI & Tooling',
      items: 'MCP servers, agentic coding tools (Claude Code, Codex), LLM integration, RAG',
    },
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

  work: [
    {
      title: 'Voice of Customer',
      description:
        'RAG-based platform ingesting Intercom chats and Demodesk transcripts. Delivered semantic clustering, root-cause extraction, PII anonymization, and Jira sync, processing 150k+ feedback items into 1600+ clusters. Adopted org-wide as a primary roadmap input. Built with Fastify, React, and OpenAI.',
      tag: 'AI / Full-stack',
    },
    {
      title: 'Claude Code Plugin Marketplace',
      description:
        'Org-wide distribution channel for 30+ internal AI tooling plugins. Shipped an MCP gateway that auto-discovers tools across microservices via Consul, a CLI for sharing Claude configurations across teams, and autonomous skills for common workflows.',
      tag: 'Developer Tooling',
    },
    {
      title: 'AI-Assisted Development Adoption',
      description:
        'Led adoption for 300+ engineers, reaching 90%+ weekly utilization. Designed the curriculum from scratch, delivered 30+ training and pair programming sessions, and presented field-tested practices at the CTO All-Hands.',
      tag: 'Leadership',
    },
    {
      title: 'DevOps Team Split',
      description:
        "Co-led the split of Pipedrive's DevOps team into Developer Productivity and CI/CD, owning the plan from the Developer Productivity side. Decided ownership across 50+ repositories and Jira boards, triaged 100+ production alerts, and divided on-call rotations between the new teams.",
      tag: 'Leadership',
    },
    {
      title: 'CI/CD & Infrastructure Modernization',
      description:
        'Migrated testbox pipelines from Jenkins to GitHub Actions, retiring dedicated Jenkins workers and their infrastructure cost. Led a security-driven ArgoCD upgrade across production Kubernetes clusters and rolled out Renovate for Helm chart upgrades.',
      tag: 'Infrastructure',
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
