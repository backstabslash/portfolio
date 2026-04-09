import { z } from 'zod';

const hexColor = z.string().regex(/^#[0-9a-fA-F]{6}$/, 'Must be a hex color like #10b981');

const themePalette = z.object({
  bg: hexColor,
  bgSecondary: hexColor,
  card: hexColor,
  cardHover: hexColor,
  border: hexColor,
  borderHover: hexColor,
  text: hexColor,
  textSecondary: hexColor,
  textTertiary: hexColor,
});

const projectSchema = z.object({
  title: z.string().min(1),
  description: z.string().min(1),
  image: z.string().min(1),
  tech: z.array(z.string()).min(1),
  github: z.string().url(),
  url: z.string().url().optional(),
  stars: z.number().int().positive().optional(),
  label: z.string().min(1).optional(),
});

const workSchema = z.object({
  title: z.string().min(1),
  description: z.string().min(1),
  tag: z.string().min(1),
});

const skillSchema = z.object({
  label: z.string().min(1),
  items: z.string().min(1),
});

export const siteConfigSchema = z.object({
  name: z.string().min(1),
  title: z.string().min(1),
  headline: z.string().min(1),
  bio: z.string().min(1),
  profileImage: z.string().min(1),
  email: z.string().email(),
  links: z.object({
    github: z.string().url(),
    linkedin: z.string().url(),
    resume: z.string().url(),
  }),
  about: z.object({
    image: z.string().min(1),
    text: z.string().min(1),
  }),
  skills: z.array(skillSchema).min(1),
  projects: z.array(projectSchema).min(1),
  work: z.array(workSchema).min(1),
  contact: z.object({
    heading: z.string().min(1),
    description: z.string().min(1),
  }),
  theme: z.object({
    colors: z.object({
      accentDark: hexColor,
      accentLight: hexColor,
    }),
    dark: themePalette,
    light: themePalette,
  }),
});

export type SiteConfig = z.infer<typeof siteConfigSchema>;

export function defineConfig(config: SiteConfig): SiteConfig {
  return siteConfigSchema.parse(config);
}
