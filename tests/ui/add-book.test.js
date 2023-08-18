const { test, expect } = require('@playwright/test');

test('Check add book page', async ({ page }) => {
  await page.goto('https://softuni-denisnmetodiev-library.onrender.com/add-book');
  const form = await page.$('form[action="/add-book"]');
  expect(form).toBeTruthy();
});
