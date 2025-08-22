const {test , expect} = require("@playwright/test")

test("Drag And Drop Using In Build Method" , async ({page}) =>{

    await page.goto("https://testautomationpractice.blogspot.com/")

    const source = page.locator("#draggable")
    const target = page.locator("div#droppable")

    // dragTo(locator) - drag source element towards the target element and drop it.

    await source.dragTo(target);
    await expect(target).toHaveText("Dropped!")

})

test("Drag And Drop Using Custom Logic" , async ({page}) =>{

    await page.goto("https://testautomationpractice.blogspot.com/")

    const source = page.locator("#draggable")
    const target = page.locator("div#droppable")

    // Mouse over on source element
    // Mouse down on source element
    // Mouse over on target element
    // Mouse down on target element


    await source.hover()                                      // Mouse over on source element
    await page.mouse.down()                                   // Mouse down on source element
    await target.hover()                                      // Mouse over on target element
    await page.mouse.up()                                     // Mouse down on target element
    
    await expect(target).toHaveText("Dropped!")


})