// writeFile.js

const fs = require('fs')
const path = require('path');
const arraySort = require('array-sort');
const countriesPath = path.join(__dirname, 'countries')

const writeCountryFilePromise = function(countriesData) {
    return new Promise((resolve, reject) => {
        try {
            console.info('0 countryName', countriesData)
            Object.values(countriesData).forEach(function(values, key) {
                let countryName = (Object.keys(countriesData)[key]).replace(' ', '_').replace(' ', '_').replace(' ', '_').replace(' ', '_')
                var countryFile = `${countriesPath}/cases${countryName}.json`;
                let valueSort = arraySort(values, 'date');
                fs.writeFileSync(countryFile, JSON.stringify(valueSort, null, '\t'))
            })
            resolve()
        } catch (err) {
            reject(err)
        }
    })
}

const writeIntegrateFile = function(group) {
    const integrateFile = `${countriesPath}/integrate.json`;
    const c = {
        info: {
            title: group.title
        },
        countries: group.countries,
        states: group.states
    }
    fs.writeFile(integrateFile, JSON.stringify(c), function(err) {
        if (err) {
            return console.error('writeIntegrateFile' + err);
        }
    })
}

const writeFilePromise = function() {
    return new Promise((resolve, reject) => {
        try {
            if (parseInt(process.env.COUNT) == 0) {
                const countriesData = JSON.parse(process.env.GLOBAL_COVID_19)
                writeCountryFilePromise(countriesData)
            }
            resolve()
        } catch(err) {
            reject(err)
        }
    })
}

module.exports = {
    writeFilePromise,
    writeIntegrateFile,
    writeCountryFilePromise
}