// writeFile.js

const fs = require('fs')
const path = require('path');
const countriesPath = path.join(__dirname, 'countries')

const writeCountryFile = function(countriesData) {
    Object.values(countriesData).forEach(function(values, key) {
        var countryFile = `${countriesPath}/cases${Object.keys(countriesData)[key]}.json`;
        fs.writeFile(countryFile, values, function(err) {
            if (err) {
                return console.error(err);
            }
        })
    })
}

const writeFile = function() {
    if (parseInt(process.env.COUNT) == 0) {
        writeCountryFile(JSON.parse(process.env.GLOBAL_COVID_29));
    }
}

module.exports = writeFile