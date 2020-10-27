const Country = require('./Country.js')

class Load {
    constructor(countries, starting, finishing){
        this.countries = countries
        this.starting = starting
        this.finishing = finishing
    }
}

const france = new Country("france", "France", "#0055A4")
const germany = new Country("germany", "Germany", "#000000")

const argentina = new Country("argentina", "Argentina", "#75AADB")
const brazil = new Country("brazil", "Brazil", "#009c3b")

const spain = new Country("spain", "Spain", "#AA151B")
const italy = new Country("italy", "Italy", "#008C45")

const loadTest = new Load(
    [france, germany],
    new Date("2020-01-22T00:00:00.000"),
    new Date("2020-10-26T23:59:59.999")
)

module.exports = loadTest;