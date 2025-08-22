const {test , expect} = require("@playwright/test")

test("Handling Shadow Dom Element" , async ({page}) =>{

    await page.goto("https://books-pwakit.appspot.com/")
    await page.locator("#input").fill("Testing")
    await page.locator("div.icon").click()
    await expect(page.locator("h2.title").nth(1)).toHaveText("Systematic Software Testing")
    
})
