// Locators and Method's related to the DashBoard Page

export class DashboardPage {

    constructor(page) {

        this.page = page
        this.homePageIdentifier = page.locator(".fa-sign-out")
        this.products = page.locator("div.card-body")
        this.addToCartMsg = page.locator("#toast-container")
        this.viewPageProductName = page.locator("div.col-lg-6 h2")

    }

    async searchProductAndAddToCart(productName) {

        await this.products.last().waitFor()
        const countOfProducts = await this.products.count()   // count() - return total number of matching element  for locator

        for (let i = 0; i < countOfProducts; i++) {
            const productText = await this.products.nth(i).locator("h5").textContent()
            if (productText === productName) {
                await this.products.nth(i).getByText("Add To Cart").click()
                break;
            }

        }

    }


    async searchProductAndViewDetails(productName) {

        await this.products.last().waitFor()
        const countOfProducts = await this.products.count()  // count() - return total number of matching element  for locator

        for (let i = 0; i < countOfProducts; i++) {
            const productText = await this.products.nth(i).locator("h5").textContent()
            if (productText === productName) {
                await this.products.nth(i).getByText("View").click()
                break;
            }

        }

    }
}