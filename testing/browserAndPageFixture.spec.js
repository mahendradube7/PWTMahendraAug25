//import { test, expect } from '@playwright/test';

const{test , expect} = require('@playwright/test')

// Fixture = Spevial type of object which perform setup and tear down process in playwright

// Browser vs Page Fixture

// Browser Fixture :- 
//Manually create a browser context
//Manually create page context

test('has title', async ({ browser }) => {

    // Launch the browser
    // Launch URL
    // Fill the Username
    // Fill the password
    // click on login submit button

    const context = await browser.newContext()   // create a new browser context
    const page = await context.newPage()         // create new page in the browser
    await page.goto("https://www.google.com/")
  

});

// Page Fixture

test('has title1', async ({ page }) => {

    // launch browser
    await page.goto("https://www.google.com/")

});

// JS is an asynchronous programming langauage