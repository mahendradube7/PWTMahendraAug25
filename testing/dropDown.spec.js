// Drop Down
// 2 types
// single select and multi select

// 1. static drop down
// 2. dynamic drop down

// 1. <select></select>
// 2. non <select> tag , div, span, li , ui


// 1. Drop Down developed using select tag
// step by step process
// i. launch url
// ii. locate the drop down element
// iii. get the element from drop down - selectOptions("value as attribute" , label , index) - selectOptions([,,])


const{test , expect} = require("@playwright/test")


test("Handling Drop Down Developed using select tag" , async({page}) => {

    // Single Select Dropdown
    await page.goto("https://practice.expandtesting.com/dropdown");
    const countryDD = page.locator("#country");

    await countryDD.selectOption("BH");
    //await page.waitForTimeout(3000);

    await countryDD.selectOption({value : "BB"});
    //await page.waitForTimeout(3000);

    await countryDD.selectOption({label : "Australia"});
    //await page.waitForTimeout(3000);

    await countryDD.selectOption({index : 3});
    //await page.waitForTimeout(3000);

    
})

test("Handling Multi Select Drop Down Developed using select tag" , async({page}) => {

    // Multi Select Dropdown
    await page.goto("https://demoqa.com/select-menu")

    await page.locator("#cars").selectOption(['volvo' , 'audi'])
    //await page.waitForTimeout(1500);

    await page.locator("#cars").selectOption([{label: 'Saab'} , {label: 'Opel'}])
    //await page.waitForTimeout(1500);

})

// 2. Drop Down developed using non select tag
// step by step process
// i. launch url
// ii. locate the drop down element and click on drop down element
// iii. locate element want to select and click on specific element

test("Handling Drop Down Developed using non-select tag" , async({page}) => {

    await page.goto("https://demoqa.com/select-menu")

    // single select
    await page.locator("div.css-1hwfws3").first().click()
    await page.locator("#react-select-2-option-3").click()
    await page.waitForTimeout(2000)

    // multi select
    await page.locator("div.css-1hwfws3").last().click()
    await page.locator("#react-select-4-option-1").click()
    await page.locator("#react-select-4-option-2").click()
    await page.waitForTimeout(2000)
})

