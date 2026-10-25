import type { SiteConfig } from './config';

type Theme = SiteConfig['theme'];

function paletteVars(palette: Theme['dark']): string {
  return Object.entries(palette)
    .map(([key, val]) => `--${key.replace(/([A-Z])/g, '-$1').toLowerCase()}: ${val};`)
    .join(' ');
}

export function themeCss(theme: Theme): string {
  return (
    `[data-theme='light'] { ${paletteVars(theme.light)} } ` +
    `[data-theme='dark'] { ${paletteVars(theme.dark)} }`
  );
}
