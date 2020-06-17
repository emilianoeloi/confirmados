// Integrate.js
const Country = require('./Country.js')

class Integrate {
    constructor(jsonCountries) {
        this.countries = this.setCountries(jsonCountries)
    }
    setCountries(jsonCountries) {
        let c = []
        jsonCountries.forEach(country => {
            c.push(new Country(country.key, country.name, country.color))
        })
        return c
    }
    integrateCountries(countriesArr) {
        let c = [];
        countriesArr.forEach(countryName => {
            this.countries.forEach(country => {
                if (countryName == country.name) {
                    c.push(country)
                }
            })
        })
        return c;
    }

    setCountry(GLOBAL_COUNTRIES, countryName) {
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
}

module.exports = Integrate