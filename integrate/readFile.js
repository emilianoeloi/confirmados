// readFile.js
const fs = require('fs');
const csvToJson = require('./csvToJson.js')
const setStorageCountries = require('./setStorageCountries.js')

var readFile = function(csvFile, saveCountriesDataCB, writeFileCB) {
    const readFileCallback = function(err, data) {
        if (err) {
            return console.error(err);
        }
        const json = csvToJson(data.toString())
        setStorageCountries(json, saveCountriesDataCB, writeFileCB)
    }
    fs.readFile(csvFile, readFileCallback);
 }

 module.exports = readFile