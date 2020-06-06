// writeFile.js

const fs = require('fs')
const path = require('path');
const countriesPath = path.join(__dirname, 'countries')

const writeCountryFile = function(countriesData) {
    Object.values(countriesData).forEach(function(values, key) {
        let countryName = (Object.keys(countriesData)[key]).replace(' ', '_')
        var countryFile = `${countriesPath}/cases${countryName}.json`;
        fs.writeFile(countryFile, JSON.stringify(values), function(err) {
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