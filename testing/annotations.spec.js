// Annotations - control the TC or Execution

/*

Key built-in annotations include:

test.only():
Executes only the marked test(s), skipping all others. Useful for focusing on specific tests during development or debugging.

test.skip():
Skips the marked test(s) during execution. Useful for temporarily disabling tests that are known to be failing or are not relevant under current conditions.
test.fixme():
Marks a test as needing a fix. Similar to test.skip(), but specifically indicates a known issue requiring attention.

test.fail():
Marks a test as expected to fail. If the test passes, it will be reported as a failure, indicating an unexpected success.

test.slow():
Triples the default timeout for the marked test, indicating it is expected to take longer to complete.

test.describe():
Groups multiple tests into a test suite, providing a logical structure and improving report readability.


*/
const {test, expect} = require('@playwright/test')


test.describe("Test Suite", async ()=>{
    test.skip("Test1", async ()=>{
        console.log("Test1")
    })
    test.skip("Test2", async ()=>{
        console.log("Test2")
    })

    test.fixme("Test3", async ()=>{
        // Something is failing requires a fix
        console.log("Test3")
    })

    test.fail("Test4", async ()=>{
        console.log("Test4")
        expect(25).toBe(20)
    })
    test("Test5", async ()=>{
         test.slow()
         
    })

    test("Test6", async ()=>{
        console.log("Test6")
    })
})
