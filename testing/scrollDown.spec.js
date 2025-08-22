const {test , expect} = require("@playwright/test")

test("Scroll Down" , async ({page}) =>{

    await page.goto("https://testautomationpractice.blogspot.com/")

    // Scroll Down =  scrollIntoViewIfNeeded()
    await page.getByText("Download Files").scrollIntoViewIfNeeded();
    await page.getByText("Download Files").click();
    await expect(page.locator("#generatePdf")).toHaveText("Generate and Download PDF File");

})