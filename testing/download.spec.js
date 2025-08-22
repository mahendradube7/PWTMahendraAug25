// Download

/*

1. Launch URL
2. We have to wait for download event to appear on page
3. Identify the element for the download
4. Click on the element to start download
5. Wait for the download to complete
6. Use "path" library to create a pathfor the download folder
7. Use "fs" library to save the file to the download folder
8. Save the download file inside the download folder
9. Validate the document download is successful

*/


const {test , expect} = require("@playwright/test")
const path = require ('path')

test("Handling Download" , async ({page}) =>{

    await page.goto("https://testautomationpractice.blogspot.com/p/download-files_25.html")
    await page.locator("#inputText").fill("Mahendra Dube")
    await page.locator("button#generateTxt").click()
    const downloadResult =  page.waitForEvent('download')
    await page.locator("a#txtDownloadLink").click()
    const download = await downloadResult 

    const downloadDir = path.join(__dirname , "../download")

    const fileName = await download.suggestedFilename()

    const filePath = await path.join(downloadDir , fileName)

    await download.saveAs(filePath)

    await expect(filePath).toContain(fileName)



    
    
})