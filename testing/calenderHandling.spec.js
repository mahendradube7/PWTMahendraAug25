const {test , expect} = require("@playwright/test")

test("Calender Handling" , async({page})=>{

    await page.goto("https://www.hyrtutorials.com/p/calendar-practice.html")
    await page.locator(".ui-datepicker-trigger").click()

    const day = "18"
    const month = "February"
    const year = "2027"

    const monthPicker = page.locator(".ui-datepicker-month")
    const yearpicker = page.locator(".ui-datepicker-year")

    while ( (await monthPicker.textContent() != month) ||  (await yearpicker.textContent()!= year)) {

        await page.getByText("Next").click()

    }

    await page.getByText(day , {exact : true}).click()



})

//Prev

test("Calender Handling 1" , async({page})=>{

    await page.goto("https://www.hyrtutorials.com/p/calendar-practice.html")
    await page.locator(".ui-datepicker-trigger").click()

    const day = "18"
    const month = "February"
    const year = "2011"

    const monthPicker = page.locator(".ui-datepicker-month")
    const yearpicker = page.locator(".ui-datepicker-year")

    while ( (await monthPicker.textContent() != month) ||  (await yearpicker.textContent()!= year)) {

        await page.getByText("Prev").last().click()

    }

    await page.getByText(day , {exact : true}).click()



})