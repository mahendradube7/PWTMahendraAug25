const{test,expect} = require("@playwright/test") // JS

test("Radio Button and Checkbox Validation" , async function ({page}){

    await page.goto("https://testautomationpractice.blogspot.com/")

    // click()
    // check () - only available for radio button & checkbox

    await expect(page.locator("#male")).not.toBeChecked()
    await page.locator("#male").click()
    await expect(page.locator("#male")).toBeChecked()

    await expect(page.locator("#friday")).not.toBeChecked()
    await page.locator("#friday").check()
    await expect(page.locator("#friday")).toBeChecked()

})