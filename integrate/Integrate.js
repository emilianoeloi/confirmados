// Integrate.js
const Country = require('./Country.js')
const State = require('./State.js')

class Integrate {
    constructor() {
        this.origins = []    
        this.originsConfirmed = []
        this.globalOrigins = []
    }
    setOrigins(origins) {
        let c = []
        origins.forEach(state => {
            c.push(new State(state.key, state.name, state.color))
        })
        this.origins = c
    }
    getOrigins() {
        return this.origins
    }
    integrateOrigins(originsArr) {
        let c = [];
        
        originsArr.forEach(originName => {
            this.origins.forEach(state => {
                if (originName.name == state.name) {
                    c.push(state)
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