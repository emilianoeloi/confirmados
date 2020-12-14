// Load.js
const State = require('./State.js')

class Load {
    constructor(integrate, title, states, starting, finishing) {
        this.setIntegrate(integrate)
        this.title = title
        this.states = this.createStates(states)
        this.starting = starting
        this.finishing = finishing
    }
    setIntegrate(integrate) {
        this.integrate = integrate
    }
    createState(key) {
        return State.createState(this.integrate, key)
    }
    createStates(keys) {
        let states = []
        for (let i = 0; i < keys.length; i++) {
            states[i] = State.createState(this.integrate, keys[i])
        }
        return states
    }
}

module.exports = Load;