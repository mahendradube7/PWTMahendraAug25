
const { test, expect } = require("@playwright/test")
const { LoginPage } = require("../pages/LoginPage")
const { DashboardPage } = require("../pages/DashboardPage")
const data = require("../TestData/product.json")
//console.log(data);

let loginPage;
let dashboardPage;

test.beforeEach(async ({ page }) => {

    loginPage = new LoginPage(page)
    dashboardPage = new DashboardPage(page)
    await loginPage.launchURL(data.url)

})

test("@smoke @regression Valid Login Test", async () => {

    await loginPage.loginIntoApplication(data.username, data.password)
    await expect(dashboardPage.homePageIdentifier).toBeVisible()

})


test("@regression InValid Login Test", async () => {

    await loginPage.invalidLoginIntoApplication(data.username, data.Incorrectpassword)
    await expect(loginPage.errorMessage).toContainText(data.errorMessage)

})