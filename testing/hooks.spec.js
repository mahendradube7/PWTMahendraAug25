// Hooks

// test.beforeAll() - It will be executed once before executaing in any of the TC = before executaing all TC
// test.beforeEach() - It will run once before each and every TC
// test()  -  Actual Test Case
// test.afterEach() - It will run once after executing each and every TC
// test.afterAll() - It will be executed once after executaing in any of the TC = after executaing all TC


const {test , expect} = require("@playwright/test")

test.beforeAll( async () => {

    console.log("Before All");
    
})

test.beforeEach( async ({page}) => {

    console.log("Before Each");
    
})

test.afterEach( async ({page}) => {

    console.log("After Each");
    
})

test.afterAll( async () => {

    console.log("After All");
    
})

test( "Hooks 1 " , async ({page}) => {

    console.log("Test 1");
    
})

test( "Hooks 2 " , async ({page}) => {

    console.log("Test 2");
    
})

test( "Hooks 3 " , async ({page}) => {

    console.log("Test 3");
    
})