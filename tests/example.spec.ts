import { test, expect } from '../custom-fixtures/page-custom-fixutre'

test('has title', async ({ pagecustomfixture }) => {
  // await page.goto('https://playwright.dev/'); This step is being derived from custom fixture

  // Expect a title "to contain" a substring.
  await expect(pagecustomfixture).toHaveTitle(/Playwright/);
});

test('get started link', async ({ pagecustomfixture }) => {
  // await page.goto('https://playwright.dev/'); This step is being derived from custom fixture

  // Click the get started link.
  await pagecustomfixture.getByRole('link', { name: 'Get started' }).click();

  // Expects page to have a heading with the name of Installation.
  await expect(pagecustomfixture.getByRole('heading', { name: 'Installation' })).toBeVisible();
});


/*
--------------------------------------------------------------------------------------------------------------------------
Actual Code without pagefixture and pagepbject model

import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('https://playwright.dev/'); 

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Playwright/);
});

test('get started link', async ({ page }) => {
  await page.goto('https://playwright.dev/'); 

  // Click the get started link.
  await page.getByRole('link', { name: 'Get started' }).click();

  // Expects page to have a heading with the name of Installation.
  await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
});
--------------------------------------------------------------------------------------------------------------------------
*/