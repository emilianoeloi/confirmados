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
const india = new Country("india", "India", "#FF9933")
const brazil = new Country("brazil", "Brazil", "#00ff00")
const italy = new Country("italy", "Italy", "#008C45")
const germany = new Country("germany", "Germany", "#000000")
const uk = new Country("united_kingdom", "United Kingdom", "#00247D")

const init = new Date("2021-02-08T00:00:00.000")
const end = new Date("2022-02-08T23:59:59.999")

const top7 = new Load(
    "Top 7",
    [
        us,
        france,
        india,
        brazil,
        italy,
        germany,
        uk
    ],
    init,
    end
)

module.exports = {
    top7
};
