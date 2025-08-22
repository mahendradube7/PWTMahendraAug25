// Locators and menthods related to the Login page

export class LoginPage {

    // Properties - Locators

    constructor(page) {

        this.page = page
        this.username = page.getByPlaceholder("email@example.com")
        this.password = page.getByPlaceholder("enter your passsword")
        this.loginBtn = page.locator("#login")
        this.errorMessage = page.locator("#toast-container")

    }

    // mehod - actions

    async launchURL(url) {
        await this.page.goto(url)
    }

    async loginIntoApplication(username , password) {

        await this.username.fill(username)
        await this.password.fill(password)
        await this.loginBtn.click()
    }

    async invalidLoginIntoApplication(username,Incorrectpassword) {

        await this.username.fill(username)
        await this.password.fill(Incorrectpassword)
        await this.loginBtn.click()
    }



}