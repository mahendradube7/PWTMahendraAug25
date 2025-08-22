const {test,expect} = require ("@playwright/test")

test("Practise 1" , async ({page})=>{

    await page.goto("https://testautomationpractice.blogspot.com/")
    await page.locator("input#name").fill("Mahendra")
    await expect(page.locator("input#name")).toHaveValue("Mahendra")
    await page.getByPlaceholder("Enter EMail").fill("mdube@email.com")
    await page.getByPlaceholder("Enter Phone").fill("123456789")
    await page.locator("//*[@id='textarea']").fill("Maharashtra")
    await page.locator("input#male").click()
    await page.getByLabel("Female").check()
    await page.locator("input#sunday").click()
    await expect(page.locator("input#sunday")).toBeChecked()
    await page.locator("input#monday").click()
    await expect(page.locator("input#monday")).toBeChecked()
    await page.locator("input#tuesday").click()
    await page.locator("input#wednesday").click()
    await page.locator("input#thursday").click()
    await page.locator("input#friday").click()
    await page.locator("input#saturday").click()
    await page.locator("input#sunday").click()
    await expect(page.locator("input#sunday")).not.toBeChecked()
    await page.locator("input#monday").click()
    await expect(page.locator("input#monday")).not.toBeChecked()


})