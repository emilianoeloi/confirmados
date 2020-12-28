const integrates = require('./states/integrate.json');

const getCasesForStates = function(integrate) {
    let states = integrate.states
    let info = integrate.info
    
    for(let i = 0; i < states.length; i++) {
        const name = states[i].name.replace(' ', '_').replace(' ', '_').replace(' ', '_').replace(' ', '_')
        states[i].cases = require(`./states/cases${name}.json`)
    }

    return {
        info,
        states
    }
}

let cases = []
for(let i = 0; i < integrates.length; i++) {
    let integrateKey = integrates[i].key
    let integrate = require(`./states/integrate${integrateKey}.json`)
    cases.push(getCasesForStates(integrate))
}

export default cases;