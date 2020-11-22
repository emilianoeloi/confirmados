const Country = require('./Country.js')

class Load {
    constructor(title, countries, starting, finishing){
        this.title = title
        this.countries = countries
        this.starting = starting
        this.finishing = finishing
    }
}

const brazil = new Country("brazil", "Brazil", "#009c3b")
const russia = new Country("russia", "Russia", "#ffffff")
const india = new Country("india", "India", "#FF9933")
const china = new Country("china", "China", "#DE2910")
const southAfrica = new Country("south_africa", "South Africa", "#000000")

const france = new Country("france", "France", "#0055A4")
const germany = new Country("germany", "Germany", "#000000")

const argentina = new Country("argentina", "Argentina", "#75AADB")


const spain = new Country("spain", "Spain", "#AA151B")
const italy = new Country("italy", "Italy", "#008C45")


const us = new Country("us", "US", "#3C3B6E")



const brics = new Load(
    "BRICS",
    [
        india,
        brazil,
        russia,
        southAfrica,
        china
    ],
    new Date("2020-05-01T00:00:00.000"),
    new Date("2020-11-21T23:59:59.999")
)

const g20 = new Load(
    "G20",
    [
        us,
        india,
        brazil,
        france,
        russia
    ],
    new Date("2020-05-01T00:00:00.000"),
    new Date("2020-11-21T23:59:59.999")
)

const top5 = new Load(
    "Top 5",
    [
        us,
        india,
        brazil,
        france,
        russia
    ],
    new Date("2020-05-01T00:00:00.000"),
    new Date("2020-11-21T23:59:59.999")
)

module.exports = {
    brics,
    g20,
    top5
};