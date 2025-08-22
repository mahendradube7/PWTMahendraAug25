// Multiple  Windows - "popup" event appeared on the page 

// Step by Step process :

/*
1. Launch the URL
2. Wait for popup event to appear on the page - page.waitForEvent('popup) ,
   store the responce into a variable. const page1 = page.waitForEvent('popup)
3. Click on the element which is reponsible for generation of the popup event on the page 
   (or creation of new page or new tab)
4. Get the successful responce or final responce from the 2nd line, we have to wait along with the wait keyword here.
   const newPage = await page1
5. Using this new page variable (which will be a object or similar to page fixture) we will be able to perform 
   all the actions on the newly created page.
6. If you have to perform any action on the original page -> simply start using page fixture.
*/

const {test , expect} = require("@playwright/test")

test("Multiple Window Handling" , async({page})=>{

    await page.goto("https://demo.automationtesting.in/Windows.html")

    const page1 = page.waitForEvent('popup')   // don't use await
    await page.getByRole("button" , {name : 'click' , exact:true}).click()
    const newPage = await page1
    await newPage.getByText("Downloads").click()
    await expect(newPage.locator("#bindings")).toContainText("Selenium Clients and WebDriver")

    await page.getByText("Home").click()
    await expect(page.getByPlaceholder("Email id for Sign Up")).toBeVisible()

})

test("Multiple Window Handling 2nd Way" , async({page})=>{

    await page.goto("https://demo.automationtesting.in/Windows.html")

    ///const page1 = page.waitForEvent('popup')   // don't use await
    await page.getByRole("button" , {name : 'click' , exact:true}).click()
    const newPage = await page.waitForEvent('popup')     // use waitForEvent directly here
    await newPage.getByText("Downloads").click()
    await expect(newPage.locator("#bindings")).toContainText("Selenium Clients and WebDriver")

    await page.getByText("Home").click()
    await expect(page.getByPlaceholder("Email id for Sign Up")).toBeVisible()

})