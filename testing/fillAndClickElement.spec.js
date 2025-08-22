const{test,expect} = require("@playwright/test") // JS

//import{test,expect} from '@playwright/test' // TS

test("Fill and Clicking on Element" ,async({page}) => {
    
    // Launch the browser - page
    // go to the URL
    //Fill the Username

    // locator() - Locator using css or xpath
    // page.getByText("text value") - Locator using playwright
    // fill(" ") - to type inside textbox

    await page.goto("https://practicetestautomation.com/practice-test-login/")
    await page.locator("input#username").fill("student")
    await expect(page.locator("input#username")).toHaveValue("student")
    await page.getByLabel("Password").fill("Password123")
    await expect(page.getByLabel("Password")).toHaveValue("Password123")
    await page.getByRole("button" , {name : "Submit"}).click()
    await expect(page.locator("h1.post-title")).toContainText("Logged In Successfully")
    await expect(page.getByText("Log out")).toBeVisible()

})