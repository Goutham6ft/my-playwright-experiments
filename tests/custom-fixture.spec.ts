// command to execute this file using chromium in headed state
// npx playwright test custom-fixture.spec.ts --project=chromium --headed

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