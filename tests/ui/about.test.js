const { test, expect } = require('@playwright/test');

test('Check about page', async ({ page }) => {
  await page.goto('https://softuni-denisnmetodiev-library.onrender.com/about');
  const heading = await page.waitForSelector('h1');
  const text = await heading.textContent();
  expect(text).toBe('About');
});
