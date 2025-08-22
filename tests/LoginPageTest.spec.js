
const { test, expect } = require("@playwright/test")
const { LoginPage } = require("../pages/LoginPage")
const { DashboardPage } = require("../pages/DashboardPage")
const allure = require('allure-commandline')

let url = "https://rahulshettyacademy.com/client"
let username = "mahi123@gmail.com"
let password = "Pass@123"
let Incorrectpassword = "Pass@1234"
let errorMessage = "Incorrect email or password"

let loginPage;
let dashboardPage;

test.beforeEach(async ({ page }) => {

    loginPage = new LoginPage(page)
    dashboardPage = new DashboardPage(page)
    await loginPage.launchURL(url)

})

test("Valid Login Test", {tag : ['@smoke' , '@regression']}, async () => {

    await loginPage.loginIntoApplication(username, password)
    await expect(dashboardPage.homePageIdentifier).toBeVisible()

})


test("InValid Login Test", {tag : '@regression'}, async () => {

    await loginPage.invalidLoginIntoApplication(username, Incorrectpassword)
    await expect(loginPage.errorMessage).toContainText(errorMessage)

})