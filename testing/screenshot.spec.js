// Screenshot of the page

const {test , expect} = require("@playwright/test")


test("Screenshot of the Full Page" , async ({page}) => {

   await page.goto("https://practicetestautomation.com/practice-test-login/")
   await page.screenshot({path : "Screenshot/fullPage.png"})    // optional parameter will always go inside {   }

})

test("Screenshot of the Perticular Element" , async ({page}) => {

    await page.goto("https://practicetestautomation.com/practice-test-login/")
    await page.locator("button#submit").screenshot({path : "Screenshot/Submit.png"})    // optional parameter will always go inside {   }
 
})

 test("Screenshot of the Complete Scrollable Page" , async ({page}) => {

    await page.goto("https://practicetestautomation.com/practice-test-login/")
    await page.screenshot({path :  "Screenshot/FullScrollablePage.png" , fullPage : true }) // optional parameter will always go inside {   }        
 
})