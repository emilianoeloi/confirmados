// writeFile.js
const fs = require('fs')
const path = require('path');
const arraySort = require('array-sort');
const countriesPath = path.join(__dirname, 'countries')

const writeCountryFilePromise = function(countriesData) {
    return new Promise((resolve, reject) => {
        try {
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

const writeIntegrateFilePromise = function(group) {
    return new Promise((resolve, reject) =>  {
        try {
            const jsonIntegrFile = `integrate${group.key}.json`
            const integrateFile = `${countriesPath}/${jsonIntegrFile}`;
            console.info('integrateFile', integrateFile)
            const c = {
                info: {
                    key: group.key,
                    title: group.title
                },
                countries: group.countries,
                states: group.states
            }
            fs.writeFileSync(integrateFile, JSON.stringify(c))
            resolve()
        } catch (err) {vc
            reject(err)
        }
    })

}

const writeIntegratesFilePromise = function(groups) {
    return new Promise((resolve, reject) =>  {
        try {
            const jsonIntegrFile = `integrate.json`
            const integrateFile = `${countriesPath}/${jsonIntegrFile}`;
            let cs = []
            for(let i = 0; i < groups.length; i++) {
                cs.push({
                    key: groups[i].key
                })
            }
            fs.writeFileSync(integrateFile, JSON.stringify(cs))
            resolve()
        } catch (err) {
            reject(err)
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
    writeIntegrateFilePromise,
    writeIntegratesFilePromise,
    writeCountryFilePromise
}