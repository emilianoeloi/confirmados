// Integrate.js
const Country = require('./Country.js')

class Integrate {
    constructor() {
        this.countriesWorld = []    
        this.countriesConfirmed = []
        this.globalCountries = []
    }
    setCountries(countries) {
        let c = []
        countries.forEach(country => {
            c.push(new Country(country.key, country.name, country.color))
        })
        this.countriesWorld = c
    }
    getCountries() {
        return this.countriesWorld
    }
    integrateCountries(countriesArr) {
        let c = [];
        
        countriesArr.forEach(countryName => {
            this.countriesWorld.forEach(country => {
                if (countryName.name == country.name) {
                    c.push(country)
                }
            })
        })
        return c;
    }

    setCountry(country) {
        if (this.globalCountries == 0) {
            this.globalCountries.push(country)
        }
        var last = false
        for (let i = 0; i < this.globalCountries.length; i++) {
            if (this.globalCountries[i].key == country.key) {
                break
            }
            last = true
        }
        if (last) {
            this.globalCountries.push(country)
        }
    }

    getCountry(countryKey) {
        for (let i = 0; i < this.globalCountries.length; i++) {
            if (this.globalCountries[i].key == countryKey) {
                return this.globalCountries[i]
            }
        }  
        return null
    }
}

module.exports = Integrate