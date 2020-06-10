// readFile.js
const fs = require('fs');
const csvToJson = require('./csvToJson.js')
const setStorageCountries = require('./setStorageCountries.js')

const getFileDate = function(fileName) {
    const dateName = fileName.split('.')
    const dateArr = dateName[0].split('-')
    return new Date(`${dateArr[2]}-${dateArr[0]}-${dateArr[1]}T00:00:00.000Z`)
}

const getFileName = function(file){
    const pathArr = file.split('/')
    const fileName = pathArr[pathArr.length - 1]
    return fileName
}

var read = function(csvFile, saveCountriesDataCB, writeFileCB) {
    const data = fs.readFileSync(csvFile)
    const fileName = getFileName(csvFile)
    const json = csvToJson.toJson({
        data: data.toString(),
        dateFile: getFileDate(fileName) 
    })
    setStorageCountries(json, saveCountriesDataCB, writeFileCB)
 }

 module.exports = {
     read,
     getFileName,
     getFileDate
 }
