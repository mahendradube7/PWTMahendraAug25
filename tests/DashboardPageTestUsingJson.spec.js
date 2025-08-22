
const { test, expect } = require("@playwright/test")
const { LoginPage } = require("../pages/LoginPage")
const { DashboardPage } = require("../pages/DashboardPage")
const data = require("../TestData/product.json")


let loginPage;
let dashboardPage;

test.beforeEach(async ({ page }) => {

    loginPage = new LoginPage(page)
    dashboardPage = new DashboardPage(page)
    await loginPage.launchURL(data.url)
    await loginPage.loginIntoApplication(data.username ,data.password)

})

test("Search And Add Product To The Cart" ,  async()=>{

    await dashboardPage.searchProductAndAddToCart(data.productName)
    await expect(dashboardPage.addToCartMsg).toHaveText(data.addToCartSucessMsg)
})

test("Search And View Details of Product" , async()=>{

    await dashboardPage.searchProductAndViewDetails(data.productName)
    await expect(dashboardPage.viewPageProductName).toHaveText(data.productName)
})
