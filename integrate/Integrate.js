// Integrate.js
const Country = require('./Country.js')

class Integrate {
    constructor() {
        this.origins = []    
        this.originsConfirmed = []
        this.globalOrigins = []
    }
    setOrigins(origins) {
        let c = []
        origins.forEach(country => {
            c.push(new Country(country.key, country.name, country.color))
        })
        this.origins = c
    }
    getOrigins() {
        return this.origins
    }
    integrateOrigins(originsArr) {
        let c = [];
        
        originsArr.forEach(originName => {
            this.origins.forEach(country => {
                if (originName.name == country.name) {
                    c.push(country)
                }
            })
        })
        return c;
    }

    setOrigin(origin) {
        if (this.globalOrigins == 0) {
            this.globalOrigins.push(origin)
        }
        var last = false
        for (let i = 0; i < this.globalOrigins.length; i++) {
            if (this.globalOrigins[i].key == origin.key) {
                break
            }
            last = true
        }
        if (last) {
            this.globalOrigins.push(origin)
        }
    }

    getOrigin(originKey) {
        for (let i = 0; i < this.globalOrigins.length; i++) {
            if (this.globalOrigins[i].key == originKey) {
                return this.globalOrigins[i]
            }
        }  
        return null
    }
}

module.exports = Integrate