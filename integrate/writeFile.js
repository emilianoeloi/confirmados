// writeFile.js

const fs = require('fs')
const path = require('path');
const arraySort = require('array-sort');
const countriesPath = path.join(__dirname, 'countries')

const brics = function(country) {
    const c = ["Brazil", "Russia", "India", "Mainland China", "South Africa"]
    for (var k = 0; k < c.length; k++) {
       if (c[k] == country){
          return true
       }
    }
    return false
 }

const writeCountryFile = function(countriesData) {
    Object.values(countriesData).forEach(function(values, key) {
        if (!brics(Object.keys(countriesData)[key])) return;
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
        writeCountryFile(JSON.parse(process.env.GLOBAL_COVID_29));
    }
}

module.exports = writeFile