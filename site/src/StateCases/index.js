const integrate = require('./states/integrate.json');

let states = integrate.states
let info = integrate.info

for(let i = 0; i < states.length; i++) {
    const name = states[i].name.replace(' ', '_').replace(' ', '_').replace(' ', '_').replace(' ', '_')
    states[i].cases = require(`./states/cases${name}.json`)
}

export {
    info,
    states
}