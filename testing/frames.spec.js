 const {test , expect} = require("@playwright/test")

// Frames

/*
Step by Step Process = 

1. Launch the URL = page.goto()
2. Action on main page by using page
3. Identify Frames using page fixture - const framePage = page.frameLocator()
4. Any action we need to perform inside the frames we can use framepage that we declare in step 3

*/

test("Handling Frames" , async({page})=>{

    // Handling Main Page
    await page.goto("https://rahulshettyacademy.com/AutomationPractice/")
    await page.locator("#checkBoxOption2").click()
    await expect(page.locator("#checkBoxOption2")).toBeChecked()

    // Handling Frame Page Inside Main Page
    const framePage = page.frameLocator("#courses-iframe")
    await framePage.getByText("All Access plan").first().click()
    await page.waitForTimeout(3000)
    await expect(framePage.locator("div.inner-box h1")).toContainText("Subscription")

    // Again Handling Main Page
    await page.locator("#checkBoxOption3").click()
    await page.waitForTimeout(3000)
    await expect(page.locator("#checkBoxOption3")).toBeChecked()

})