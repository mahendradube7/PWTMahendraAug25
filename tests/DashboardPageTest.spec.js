const {test, expect} = require('@playwright/test')
const { LoginPage } = require('../pages/LoginPage')
const { DashboardPage } = require('../pages/DashboardPage')

let url = "https://rahulshettyacademy.com/client"
let username = "testnHNk@gmail.com"
let password = "Testing@1234"
let productName = "IPHONE 13 PRO"
let addToCartSuccessMsg = "Product Added To Cart"


let loginPage
let dashboardPage

test.beforeEach(async ({page})=>{
    loginPage = new LoginPage(page)
    dashboardPage = new DashboardPage(page)
    await loginPage.launchURL(url)
    await loginPage.loginIntoApplication(username, password)
})

test("Search and add the product to the cart", {tag : ['@smoke' , '@regression']}, async ()=>{
    await dashboardPage.searchProductAndAddToCart(productName)
    await expect(dashboardPage.addToCartMsg).toHaveText(addToCartSuccessMsg)
})

test("Search and view the details of the product", {tag : '@smoke'}, async ()=>{
    await dashboardPage.searchProductAndViewDetails(productName)
    await expect(dashboardPage.viewPageProductName).toHaveText(productName)
})