// readFile.js
const fs = require('fs');
const csvToJson = require('./csvToJson.js')
const setStorageCountries = require('./setStorageCountries.js')

var readFile = function(csvFile) {
    const readFileCallback = function(err, data) {
        if (err) {
            return console.error(err);
        }
        const json = csvToJson(data.toString())
        setStorageCountries(json)
    }
    fs.readFile(csvFile, readFileCallback);
 }

 module.exports = readFile