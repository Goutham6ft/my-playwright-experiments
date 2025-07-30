import {test as basetest, expect, Page} from '@playwright/test'

type my_custom_fixtures = {

    pagecustomfixture:Page
}


const pagecustomfixture = async function ({page},use) {

    await page.goto('https://playwright.dev/');

    await use(page)
    
}


export const test = basetest.extend<my_custom_fixtures>({pagecustomfixture})

export { expect };