//Framework - It is a design principal. Set of Guidlines.


function login(){
    // fill the username
    // fill the password
    // click on the login button
  }


// Duplication - 100 - 300 - 195 lines of codes
// Maintenance - 100 - all the test cases - 99 steps for the maintenance


// 1. Reusability
// 2. Less duplication
// 3. Less maintenance
// 4. Organise the code - Seaparte logic into different layers. 


// POM - Page Object Model
// Page Object Model is a design pattern used in the software testing to represent a webpage as an object. It is a way to organise and manage the interaction with a web page by creating  the properties (variables) and methods (actions) of that particular page.

// This approach helps in reducing code duplication, improving test maintainability, and enhancing readability by encapsulating the page-specific logic within a dedicated class or module.


// Launch the url - data as url of the application - goto()
// fill the username - locator and data as a username - fill()
// fill the password - locator and data as a password - fill()
// click on the login button - locator and click()
// Validate if the login is successful or not - expect()

// POM framework from scratch

// There are different layers that we have to create:

// 1. PAGE LAYER - will create a package or folder (pages) - // Locators and methods realted to the page
// LoginPage.js, DashboardPage.js, CartPage.js,.....

// 2. TEST LAYER - Pure test cases and the assertion
// LoginPageTest.spec.js, DashboardPageTest.spec.js,.....

// 3. DATA LAYER - JSON/EXCEL - TestData.json, TestData.xlsx

// 4. CONFIGURATION LAYER - playwright.config.js -  We do not create separately

// 5. UTILS LAYER- screenshot(), scrolldown(), get the data from excel, API method

// 6. REPORT LAYER - HTML/Allure - We do not create separate