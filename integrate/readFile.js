// readFile.js
const fs = require('fs');
const csvToJson = require('./csvToJson.js')

var readFile = function(csvFile, callback) {
    const readFileCallback = function(err, data) {
        if (err) {
            return console.error(err);
        }
        const json = csvToJson(data.toString())
        callback(json)
    }
    fs.readFile(csvFile, readFileCallback);
 }

 module.exports = readFile