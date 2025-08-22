 const {test , expect} = require("@playwright/test")

 test("Get Text From Element" , async ({page}) =>{

    await page.goto("https://testautomationpractice.blogspot.com/")

    //textContent = return text value from single matching element = single value
    const text = await page.locator("h1.title").textContent();
    console.log(text);

    //allTextContent = return text value from all matching element in from of array = single value
    const allText = await page.locator("h2.title").allTextContents()
    console.log(allText);
 })