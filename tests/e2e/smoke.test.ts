import { test, expect } from '@playwright/test';
import config from '../../site.config';

test.describe('portfolio smoke tests', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('page loads without errors', async ({ page }) => {
    await expect(page).toHaveTitle(new RegExp(config.name));
  });

  test('all sections render', async ({ page }) => {
    await expect(page.locator('.hero')).toBeVisible();
    await expect(page.locator('#about')).toBeVisible();
    await expect(page.locator('#projects')).toBeVisible();
    await expect(page.locator('#work')).toBeVisible();
    await expect(page.locator('#contact')).toBeVisible();
    await expect(page.locator('.footer')).toBeVisible();
  });

  test('theme toggle switches theme', async ({ page }) => {
    const html = page.locator('html');
    const initialTheme = await html.getAttribute('data-theme');

    await page.click('#theme-toggle');

    const newTheme = await html.getAttribute('data-theme');
    expect(newTheme).not.toBe(initialTheme);

    await page.click('#theme-toggle');
    const restoredTheme = await html.getAttribute('data-theme');
    expect(restoredTheme).toBe(initialTheme);
  });

  test('nav links scroll to sections', async ({ page }) => {
    await page.click('a[href="#projects"]');
    const projects = page.locator('#projects');
    await expect(projects).toBeInViewport();
  });

  test('particle canvas exists', async ({ page }) => {
    const canvas = page.locator('#particle-canvas');
    await expect(canvas).toBeAttached();
    const box = await canvas.boundingBox();
    expect(box).not.toBeNull();
    expect(box!.width).toBeGreaterThan(0);
    expect(box!.height).toBeGreaterThan(0);
  });

  test('project cards link to github', async ({ page }) => {
    const firstCard = page.locator('.project-card').first();
    const href = await firstCard.getAttribute('href');
    expect(href).toContain('github.com');
  });
});
