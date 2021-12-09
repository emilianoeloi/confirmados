const Country = require('./Country.js')

class Load {
    constructor(title, countries, starting, finishing){
        this.title = title
        this.countries = countries
        this.starting = starting
        this.finishing = finishing
    }
}

// Domingo, 28 de novembro de 2012
//
const us = new Country("us", "US", "#3C3B6E")
const germany = new Country("germany", "Germany", "#000000")
const uk = new Country("united_kingdom", "United Kingdom", "#00247D")
const russia = new Country("russia", "Russia", "#ffffff")
const turkey = new Country("turkey", "Turkey", "#E30A17")
const france = new Country("france", "France", "#1C4992")
const poland = new Country("poland", "Poland", "#DC143C")

const init = new Date("2020-12-08T00:00:00.000")
const end = new Date("2021-12-08T23:59:59.999")

const top7 = new Load(
    "Top 7",
    [
        us,
        germany,
        uk,
        russia,
        france,
        turkey,
        poland
    ],
    init,
    end
)

module.exports = {
    top7
};
