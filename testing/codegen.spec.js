// Codegen = record and playback tool
// To open Cedegen = npx playwright codegen "URL of the Applicatiom"

import { test, expect } from '@playwright/test';

test('Codegen test 1', async ({ page }) => {
  await page.goto('https://demo.automationtesting.in/Windows.html');
  await expect(page.getByRole('button', { name: 'click' })).toBeVisible();
  await expect(page.getByRole('paragraph')).toContainText('"_blank"');
  await page.getByRole('link', { name: 'Home' }).click();
  await page.getByRole('textbox', { name: 'Email id for Sign Up' }).fill('tesing');
  await expect(page.getByRole('textbox', { name: 'Email id for Sign Up' })).toHaveValue('tesing');
});

test('Codegen test 2', async ({ page }) => {
    await page.goto('https://demo.automationtesting.in/Windows.html');
    const page1Promise = page.waitForEvent('popup');
    await page.getByRole('button', { name: 'click' }).click();
    const page1 = await page1Promise;
    await page1.getByRole('link', { name: 'Downloads' }).click();
    await expect(page1.getByRole('heading', { name: 'Downloads' })).toBeVisible();
    await expect(page1.locator('#bindings')).toContainText('Selenium Clients and WebDriver Language Bindings');
    await page.getByRole('link', { name: 'Home' }).click();
    await expect(page.getByRole('button', { name: 'Skip Sign In' })).toBeVisible();
  });