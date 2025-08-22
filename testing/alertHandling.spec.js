// Alert (and Pop up) - dialog event - Dialog in playwright

// Step by step process to handle alert:
/* 1. launch url
   2. we have to write a logic to wait for dialog event to appear on the page - page.on() - page.on('dialog' , (dialog)=>{}) 
       , page.waitForEvent('popup') - no need to write await
   3. click on the element responsible for generation of the alert popup
   4. ......

   In one test function only one alert can be handle
*/

const {test , expect} = require("@playwright/test")

test("Alert Handling" , async({page})=>{

    await page.goto("https://demoqa.com/alerts")

    page.on("dialog" , dialog => {

        console.log(dialog.message());       // get the text that is displaying on the alert
        dialog.accept()                      // accept the alert - ok,yes

        //dialog.dismiss()       // dismiss the alert - no, cancel
        
    })

    await page.locator("#alertButton").click()

})

test("Confirmed Alert Handling Dismiss" , async({page})=>{

    await page.goto("https://demoqa.com/alerts")

    page.on("dialog" , variable =>{

        variable.dismiss()
        console.log(variable.message());
    })

    await page.locator("#confirmButton").click()
    await expect(page.locator("#confirmResult")).toContainText("You selected Cancel")
})

test("Confirmed Alert Handling Accept" , async({page})=>{

    await page.goto("https://demoqa.com/alerts")

    page.on("dialog" , variable =>{

        variable.accept()
        console.log(variable.message());
    })

    await page.locator("#confirmButton").click()
    await expect(page.locator("#confirmResult")).toContainText("You selected Ok")
})

test("Prompt Alert Handling Accept" , async({page})=>{

    const name = "Mahendra"

    await page.goto("https://demoqa.com/alerts")

    page.on("dialog" , variable =>{

        variable.accept(name)
        console.log(variable.message());
    })

    await page.locator("#promtButton").click()
    await expect(page.locator("#promptResult")).toContainText(`You entered ${name}`)
})

test("Prompt Alert Handling Dismiss" , async({page})=>{

    const name = "Mahendra"

    await page.goto("https://demoqa.com/alerts")

    page.on("dialog" , variable =>{

        variable.dismiss()
        console.log(variable.message());
    })

    await page.locator("#promtButton").click()
    //await expect(page.locator("#promptResult")).toContainText("You entered Mahendra")
})