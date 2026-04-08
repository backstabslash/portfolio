import { describe, it, expect } from 'vitest';
import { siteConfigSchema } from '../src/lib/config';

const validConfig = {
  name: 'Test User',
  title: 'Software Engineer',
  headline: 'Building great software',
  bio: 'A software engineer who builds things.',
  profileImage: '/images/profile.jpg',
  email: 'test@example.com',
  links: {
    github: 'https://github.com/testuser',
    linkedin: 'https://linkedin.com/in/testuser',
    resume: 'https://example.com/resume.pdf',
  },
  about: {
    image: '/images/about.jpg',
    text: 'About me text here.',
  },
  skills: [{ label: 'Languages', items: 'TypeScript, Go' }],
  projects: [
    {
      title: 'Project One',
      description: 'A cool project.',
      image: '/images/project.png',
      tech: ['TypeScript', 'Node.js'],
      github: 'https://github.com/testuser/project',
    },
  ],
  work: [
    {
      title: 'Cool Product',
      description: 'Built a cool product.',
      tag: 'Full-stack',
    },
  ],
  theme: {
    colors: { accentDark: '#10b981', accentLight: '#2563eb' },
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
};

describe('siteConfigSchema', () => {
  it('accepts a valid config', () => {
    const result = siteConfigSchema.safeParse(validConfig);
    expect(result.success).toBe(true);
  });

  it('rejects missing required fields', () => {
    const result = siteConfigSchema.safeParse({});
    expect(result.success).toBe(false);
  });

  it('rejects invalid email', () => {
    const result = siteConfigSchema.safeParse({
      ...validConfig,
      email: 'not-an-email',
    });
    expect(result.success).toBe(false);
  });

  it('rejects invalid github URL', () => {
    const result = siteConfigSchema.safeParse({
      ...validConfig,
      links: { ...validConfig.links, github: 'not-a-url' },
    });
    expect(result.success).toBe(false);
  });

  it('requires at least one project', () => {
    const result = siteConfigSchema.safeParse({
      ...validConfig,
      projects: [],
    });
    expect(result.success).toBe(false);
  });

  it('requires at least one work item', () => {
    const result = siteConfigSchema.safeParse({
      ...validConfig,
      work: [],
    });
    expect(result.success).toBe(false);
  });

  it('allows optional stars on projects', () => {
    const result = siteConfigSchema.safeParse({
      ...validConfig,
      projects: [{ ...validConfig.projects[0], stars: 42 }],
    });
    expect(result.success).toBe(true);
    if (result.success) {
      expect(result.data.projects[0].stars).toBe(42);
    }
  });

  it('rejects invalid hex color for accent', () => {
    const result = siteConfigSchema.safeParse({
      ...validConfig,
      theme: { ...validConfig.theme, colors: { accentDark: 'red', accentLight: '#2563eb' } },
    });
    expect(result.success).toBe(false);
  });
});
