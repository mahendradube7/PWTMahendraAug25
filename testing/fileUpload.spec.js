// page.locator().setInputFiles([filePath , filePath2])     

const{test , expect} = require("@playwright/test")
const path = require("path")

test("File Upload Handling" , async({page}) => {

    await page.goto("https://davidwalsh.name/demo/multiple-file-upload.php")

    // setInputFiles("path of the file")  
    await page.locator("#filesToUpload").setInputFiles("C:/fileUpload.txt")      // C:/
    await page.waitForTimeout(3000)
    await expect(page.locator("#fileList li")).toContainText("fileUpload.txt")
})

test("Multiple File Upload Handling" , async({page}) => {

    await page.goto("https://davidwalsh.name/demo/multiple-file-upload.php")

    // setInputFiles("path of the file") 
    
    const path1 = "C:/fileUpload.txt"           // path is in local so can't run in other system 
    const path2 = "C:/PlayWrightRS/tests/notes"

    await page.locator("#filesToUpload").setInputFiles([path1 , path2])      

    await page.waitForTimeout(3000)
    await expect(page.locator("#fileList li").first()).toContainText("fileUpload.txt")
    await expect(page.locator("#fileList li").last()).toContainText("notes")

    // to remove uploaded file
    await page.waitForTimeout(3000)
    await page.locator("#filesToUpload").setInputFiles([])
})

test("Multiple File Upload Handling using path inside project" , async({page}) => {

    await page.goto("https://davidwalsh.name/demo/multiple-file-upload.php")

    // setInputFiles("path of the file") 
    
    const filePath1 = path.join(__dirname , "../TestData/fileUpload.txt")      // path is in inside project so we can run in any system 
    const filePath2 = path.join(__dirname , "../TestData/notes") 

    console.log(filePath1);
    console.log(filePath2);

    await page.locator("#filesToUpload").setInputFiles([filePath1 , filePath2])      

    await page.waitForTimeout(3000)
    await expect(page.locator("#fileList li").first()).toContainText("fileUpload.txt")
    await expect(page.locator("#fileList li").last()).toContainText("notes")

    // to remove uploaded file
    await page.waitForTimeout(3000)
    await page.locator("#filesToUpload").setInputFiles([])
})