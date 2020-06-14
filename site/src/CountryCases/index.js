const integrate = require('./countries/integrate.json');

let countries = integrate.countries

for(let i = 0; i < countries.length; i++) {
    countries[i].cases = require(`./countries/cases${countries[i].name}.json`)
}

export default countries