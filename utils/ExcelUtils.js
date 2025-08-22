// How to work with excel

// 1. Install a package 'xlsx - npm install 'xlsx'
// 2. Import the package 'xlsx' - const xlsx = require('xlsx')
// 3. Read the file - const workbook =  xlsx.readFile("pathOfTheFile")
// 4. Get The sheet - const sheet = workbook.sheets[sheetName]
// 5. Convert Excel data into the json - const data = xlsx.sheet_to_json(sheet)
// return the data from the function

const xlsx = require('xlsx')

export class ExcelUtils {

    static getDataFromExcel(filePath, sheetName) {

        // Exception Handling

        try {
             
            const workbook =  xlsx.readFile(filePath)
            const sheet =  workbook.Sheets[sheetName]
            const data = xlsx.utils.sheet_to_json(sheet)
            return data
            
        }

        catch (msg) {
            console.log(msg);
        }
    }

}