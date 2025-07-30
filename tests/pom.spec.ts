// command to execute this file using chromium in headed state
// npx playwright test pom.spec.ts --project=chromium --headed

import { test, expect } from '@playwright/test';

import { homepage } from '../page_object_model/homepage-pom';

test('has title', async ({ page }) => {

  let pom = new homepage(page)

  await pom.naviagetohomepage()
//   await page.goto('https://playwright.dev/'); 

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Playwright/);
});

test('get started link', async ({ page }) => {

    let pom = new homepage(page)

   await pom.naviagetohomepage()
//   await page.goto('https://playwright.dev/'); 

  // Click the get started link.
  await page.getByRole('link', { name: 'Get started' }).click();

  // Expects page to have a heading with the name of Installation.
  await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
});