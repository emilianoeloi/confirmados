const integrate = require('./countries/integrate.json');

let countries = integrate.countries

for(let i = 0; i < countries.length; i++) {
    const name = countries[i].name.replace(' ', '_')
    countries[i].cases = require(`./countries/cases${name}.json`)
}

export default countries