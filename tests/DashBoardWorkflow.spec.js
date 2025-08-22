
const { test, expect } = require("@playwright/test")
const { LoginPage } = require("../pages/LoginPage")
const { DashboardPage } = require("../pages/DashboardPage")

let url = "https://rahulshettyacademy.com/client"
let username = "mahi123@gmail.com"
let password = "Pass@123"
let productName = "IPHONE 13 PRO"
let addToCartSucessMsg = "Product Added To Cart"

let loginPage;
let dashboardPage;

test.beforeAll(async ({ browser }) => {

    const context = await browser.newContext()
    const page = await context.newPage()
    
    loginPage = new LoginPage(page)
    dashboardPage = new DashboardPage(page)
    await loginPage.launchURL(url)
    await loginPage.loginIntoApplication(username ,password)

})

test("Search And Add Product To The Cart" , async()=>{

    await dashboardPage.searchProductAndAddToCart(productName)
    await expect(dashboardPage.addToCartMsg).toHaveText(addToCartSucessMsg)
})

test("Search And View Details of Product" , async()=>{

    await dashboardPage.searchProductAndViewDetails(productName)
    await expect(dashboardPage.viewPageProductName).toHaveText(productName)
})