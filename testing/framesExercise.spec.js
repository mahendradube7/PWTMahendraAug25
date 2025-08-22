const {test , expect} = require("@playwright/test")


test("Handling Nested Frames" , async({page})=>{

    // Handling Main Page
    await page.goto("https://demo.automationtesting.in/Register.html")
    await page.getByText("SwitchTo").hover()
    await page.getByText("Frames").click()
    await page.getByText("Iframe with in an Iframe").click()

    // locating nested frame
    const framePage = page.frameLocator("[src='MultipleFrames.html']")
    const framePage1 = framePage.frameLocator("[src='SingleFrame.html']")

    // filling Text in nested frame text box
    await framePage1.locator("input[type='text']").fill("Mahendra")
    await page.waitForTimeout(3000)
    await expect(framePage1.locator("input[type='text']")).toHaveValue("Mahendra")


})