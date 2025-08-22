const { test, expect } = require('@playwright/test')
const { LoginPage } = require('../pages/LoginPage')
const { DashboardPage } = require('../pages/DashboardPage')
const { ExcelUtils } = require('../utils/ExcelUtils')
const path = require('path')

const filePath = path.join(__dirname , "../TestData/excel.xlsx")
const sheetName = "Login"

const datas = ExcelUtils.getDataFromExcel(filePath , sheetName)

//console.log(datas);

test.describe.configure({mode : 'serial' , retries : 1 , timeout : 30000})


let loginPage
let dashboardPage

test.beforeEach(async ({ page }) => {
    loginPage = new LoginPage(page)
    dashboardPage = new DashboardPage(page)
})

for (let data of datas) {

test(`Search and add the product to the cart ${data.productName}`, async () => {
    await loginPage.launchURL(data.url)
    await loginPage.loginIntoApplication(data.username, data.password)
    await dashboardPage.searchProductAndAddToCart(data.productName)
    await expect(dashboardPage.addToCartMsg).toHaveText(data.addToCartSucessMsg)
})

}
