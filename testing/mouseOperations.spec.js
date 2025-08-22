// Mouse Operations :-
// click - click()
// double click = click({button : 'right'})
// right click = dblclick()
// Mouse Hover over on an element = hover()
// Scroll Down = 
// Drag and Drop

const {test , expect} = require("@playwright/test")

test("Double click and Right click operation" , async ({page}) =>{

    await page.goto("https://demo.guru99.com/test/simple_context_menu.html")

    // Right click = click({button : 'right'})

    await page.getByText("right click me" , {exact : true}).click({button : 'right'})
    await page.waitForTimeout(2000)
    await page.getByText("Quit").click()
  
    // Duble click = dblclick()

    await page.getByText("Double-Click Me To See Alert").dblclick()
    await page.waitForTimeout(2000)

})

test("Mouse Hover Operation" , async ({page}) =>{

    await page.goto("https://www.spicejet.com/")
    await page.getByText("SpiceClub" , {exact : true}).first().hover();
    await page.waitForTimeout(5000)
    await expect(page.getByTestId("test-id-Instant Vouchers")).toBeVisible()

})
