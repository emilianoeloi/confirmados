// State.js

class State {
    constructor(key, name, color) {
        this.key = key
        this.name = name
        this.color = color
    }

    static createState(json, key) {
        const states = json["states"]
        for (let i = 0; i < states.length; i++) {
            if (states[i].key == key) {
                return new State(
                    states[i].key,
                    states[i].name,
                    states[i].color
                )
            }
        }
    }
}

module.exports = State;