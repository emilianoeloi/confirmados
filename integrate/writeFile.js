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
        fs.writeFile(countryFile, JSON.stringify(valueSort, null, '\t'), function(err) {
            if (err) {
                return console.error(err);
            }
        })
    })
}

const writeIntegrateFile = function(countries) {
    const integrateFile = `${countriesPath}/integrate.json`;
    const c = {countries: countries}
    fs.writeFile(integrateFile, JSON.stringify(c), function(err) {
        if (err) {
            return console.error('writeIntegrateFile' + err);
        }
    })
}

const writeFile = function() {
    if (parseInt(process.env.COUNT) == 0) {
        const countriesData = JSON.parse(process.env.GLOBAL_COVID_19)
        writeCountryFile(countriesData);
    }
}

module.exports = {
    writeFile,
    writeIntegrateFile
}