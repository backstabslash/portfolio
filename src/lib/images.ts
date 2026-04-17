import type { ImageMetadata } from 'astro';

const images = import.meta.glob<{ default: ImageMetadata }>(
  '/src/assets/images/*.{jpg,jpeg,png,webp}',
  { eager: true },
);

export function resolveImage(publicPath: string): ImageMetadata {
  const key = publicPath.replace(/^\/images\//, '/src/assets/images/');
  const mod = images[key];
  if (!mod) throw new Error(`Image not found: ${publicPath}`);
  return mod.default;
}
