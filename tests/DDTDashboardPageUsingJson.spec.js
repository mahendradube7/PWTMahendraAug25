const { test, expect } = require('@playwright/test')
const { LoginPage } = require('../pages/LoginPage')
const { DashboardPage } = require('../pages/DashboardPage')
const datas = require("../TestData/dataDriven.json")
//console.log(datas);


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


// const datas = [
//     {
//       url: 'https://rahulshettyacademy.com/client',
//       username: 'mahi123@gmail.com',
//       password: 'Pass@123',
//       productName: 'IPHONE 13 PRO',
//       addToCartSucessMsg: 'Product Added To Cart'
//     },
//     {
//       url: 'https://rahulshettyacademy.com/client',
//       username: 'mahi123@gmail.com',
//       password: 'Pass@123',
//       productName: 'ADIDAS ORIGINAL',
//       addToCartSucessMsg: 'Product Added To Cart'
//     },
//     {
//       url: 'https://rahulshettyacademy.com/client',
//       username: 'mahi123@gmail.com',
//       password: 'Pass@123',
//       productName: 'ZARA COAT 3',
//       addToCartSucessMsg: 'Product Added To Cart'
//     }
//   ]
  
// // console.log(datas[0]);
// // console.log(datas[1]);
// // console.log(datas[2]);

// for (let data of datas){
//     console.log(data.productName);
// }