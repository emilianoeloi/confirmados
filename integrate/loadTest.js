const Country = require('./Country.js')

class Load {
    constructor(title, countries, starting, finishing){
        this.title = title
        this.countries = countries
        this.starting = starting
        this.finishing = finishing
    }
}

const us = new Country("us", "US", "#3C3B6E")
const france = new Country("france", "France", "#1C4992")
const uk = new Country("united_kingdom", "United Kingdom", "#00247D")
const italy = new Country("italy", "Italy", "#008C45")
const spain = new Country("spain", "Spain", "#AA151B")
const india = new Country("india", "India", "#FF9933")
const argentina = new Country("argentina", "Argentina", "#75AADB")

const init = new Date("2020-06-01T00:00:00.000")
const end = new Date("2022-01-15T23:59:59.999")

const top7 = new Load(
    "Top 7",
    [
        us,
        france,
        uk,
        italy,
        spain,
        india,
        argentina
    ],
    init,
    end
)

module.exports = {
    top7
};
