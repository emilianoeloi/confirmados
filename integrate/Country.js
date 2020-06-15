const fs = require('fs');
const integratePaises = require('./Paises/integrate.json');

// TODO: Class

const integrateCountries = function(countries) {
    const integrateCountries = integratePaises.countries;
    let c = [];
    countries.forEach(countryName => {
        integrateCountries.forEach(integrateCountry => {
            if (countryName == integrateCountry.name) {
                c.push(integrateCountry)
            }
        })
    })
    return c;
}

const setCountry = function(GLOBAL_COUNTRIES, countryName) {
    let globalCountries = JSON.parse(GLOBAL_COUNTRIES);
    if (globalCountries == 0) {
        globalCountries.push(countryName)
        return globalCountries
    }
    for (let i = 0; i < globalCountries.length; i++) {
        if (globalCountries[i] != countryName) {
            globalCountries.push(countryName)
        } else {
            break;
        }
    }
    return globalCountries
}

module.exports = {
    integrateCountries,
    setCountry
}