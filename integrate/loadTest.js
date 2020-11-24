<<<<<<< HEAD
const State = require('./State.js')
const Load = require('./Load.js')
const integrateStates = require('./Paises/Brazil/integrate.json')
=======
const Country = require('./Country.js')

class Load {
    constructor(title, countries, starting, finishing){
        this.title = title
        this.countries = countries
        this.starting = starting
        this.finishing = finishing
    }
}

const germany = new Country("germany", "Germany", "#000000")
const italy = new Country("italy", "Italy", "#008C45")

const canada = new Country("canada", "Canada", "#FF0000")
const mexico = new Country("mexico", "Mexico", "#006341")
const brazil = new Country("brazil", "Brazil", "#009c3b")
const russia = new Country("russia", "Russia", "#ffffff")
const india = new Country("india", "India", "#FF9933")
const china = new Country("china", "China", "#DE2910")
const southAfrica = new Country("south_africa", "South Africa", "#000000")
const france = new Country("france", "France", "#0055A4")
const argentina = new Country("argentina", "Argentina", "#75AADB")
const spain = new Country("spain", "Spain", "#AA151B")
const us = new Country("us", "US", "#3C3B6E")
const uk = new Country("united_kingdom", "United Kingdom", "#00247D")
const paraguay = new Country("paraguay", "Paraguay", "#D52B1E")
const uruguay = new Country("uruguay", "Uruguay", "#FCD116")
const venezuela = new Country("venezuela", "Venezuela", "#008033")

const denmark = new Country("denmark", "Denmark", "#C60C30")
const norway = new Country("norway", "Norway", "#C8102E")
const finland = new Country("finland", "Finland", "#002F6C")
const iceland = new Country("iceland", "Iceland", "#DC1E35")
const sweden = new Country("sweden", "Sweden", "#004B87")
>>>>>>> wip: Atualizando os dados confirmados 23/11/2020

const init = new Date("2020-06-01T00:00:00.000")
const end = new Date("2020-12-18T23:59:59.999")
const norte = new Load(
    integrateStates,
    "Região Norte", 
    [
        "pa",
        "am",
        "ac", // 3
        "ap",
        "ro",
        "rr", 
        "to"  // 7
    ],
    init,
    end
)

const nordeste = new Load(
    integrateStates,
    "Região Nordeste",
    [
        "ba",
        "al",
        "ce", // 3
        "ma",
        "pb",
        "pe", // 6
        "pi",
        "rn",
        "se" // 9
    ],
    init,
    end
)

const centroOeste = new Load(
    integrateStates,
    "Região Centro-Oeste",
    [
        "go",
        "ms",
        "mt"
    ],
    init,
    end
)

const sudeste = new Load(
    integrateStates,
    "Região Sudeste",
    [
        "sp",
        "rj",
        "mg",
        "es" // 4 */
    ],
    init,
    end
)

const sul = new Load(
    integrateStates,
    "Região Sul",
    [
        "sc",
        "rs",
        "pr"
    ],
    init,
    end
)

module.exports = {
    norte,
    nordeste,
    centroOeste,
    sudeste,
    sul
};
