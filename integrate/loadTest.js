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

const india = new Country("india", "India", "#FF9933")
const us = new Country("us", "US", "#3C3B6E")

const russia = new Country("russia", "Russia", "#ffffff")

const loadTest = new Load(
    [
        us,
        india,
        brazil,
        france,
        russia
    ],
    new Date("2020-05-01T00:00:00.000"),
    new Date("2020-11-19T23:59:59.999")
)

module.exports = loadTest;