// writeFile.js

const fs = require('fs')
const path = require('path');
const arraySort = require('array-sort');
const countriesPath = path.join(__dirname, 'countries')

const writeCountryFile = function(countriesData) {
    Object.values(countriesData).forEach(function(values, key) {
        let countryName = (Object.keys(countriesData)[key]).replace(' ', '_')
        var countryFile = `${countriesPath}/cases${countryName}.json`;
        let valueSort = arraySort(values, 'date');
        fs.writeFile(countryFile, JSON.stringify(valueSort), function(err) {
            if (err) {
                return console.error(err);
            }
        })
    })
}

const writeFile = function() {
    if (parseInt(process.env.COUNT) == 0) {
        writeCountryFile(JSON.parse(process.env.GLOBAL_COVID_19));
    }
}

module.exports = writeFile