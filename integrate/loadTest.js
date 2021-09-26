const Country = require('./Country.js')

class Load {
    constructor(title, countries, starting, finishing){
        this.title = title
        this.countries = countries
        this.starting = starting
        this.finishing = finishing
    }
}


const russia = new Country("russia", "Russia", "#ffffff")
const india = new Country("india", "India", "#FF9933")
const china = new Country("china", "China", "#DE2910")
const southAfrica = new Country("south_africa", "South Africa", "#000000")
const france = new Country("france", "France", "#0055A4")
const germany = new Country("germany", "Germany", "#000000")
const indonesia = new Country("indonesia", "Indonesia", "#a5a5a5")
const iran = new Country("iran", "Iran", "#239F40")
const philippines = new Country("philippines", "Philippines", "#002165")

philippines

const spain = new Country("spain", "Spain", "#AA151B")
const italy = new Country("italy", "Italy", "#008C45")
const us = new Country("us", "US", "#3C3B6E")
const uk = new Country("united_kingdom", "United Kingdom", "#00247D")



const turkey = new Country("turkey", "Turkey", "#E30A17")

const denmark = new Country("denmark", "Denmark", "#C60C30")
const norway = new Country("norway", "Norway", "#C8102E")
const finland = new Country("finland", "Finland", "#002F6C")
const iceland = new Country("iceland", "Iceland", "#DC1E35")
const sweden = new Country("sweden", "Sweden", "#004B87")

const aruba = new Country("aruba", "Aruba", "#3E90DF")

// Mercosur
/// Pleno
const argentina = new Country("argentina", "Argentina", "#75AADB")
const brazil = new Country("brazil", "Brazil", "#009c3b")
const paraguay = new Country("paraguay", "Paraguay", "#D52B1E")
const uruguay = new Country("uruguay", "Uruguay", "#FCD116")
const venezuela = new Country("venezuela", "Venezuela", "#008033")
/// Associados
const chile = new Country("chile", "Chile", "#D52B1E")
const bolivia = new Country("bolivia", "Bolivia", "#F9E300")
const peru = new Country("peru", "Peru", "#D91023")
const colombia = new Country("colombia", "Colombia", "#003893")
const ecuador = new Country("ecuador", "Ecuador", "#equador")
const guyana = new Country("guyana", "Guyana", "#018A2D")
const suriname = new Country("suriname", "Suriname", "#377E3F")

const init = new Date("2020-09-25T00:00:00.000")
const end = new Date("2021-09-25T23:59:59.999")

const mercosur = new Load(
    "MERCOSUR",
    [
        brazil,
        argentina,
        paraguay,
        uruguay,
        venezuela,
        //
        chile,
        bolivia,
        peru,
        colombia,
        ecuador,
        guyana,
        suriname
    ],
    init,
    end
)

const kalmar = new Load(
    "Escandinávia",
    [
        sweden,
        denmark,
        iceland,
        norway,
        finland
    ],
    init,
    end
)

const brics = new Load(
    "BRICS",
    [
        india,
        brazil,
        russia,
        southAfrica,
        china
    ],
    init,
    end
)

const g20 = new Load(
    "G20",
    [
        us,
        india,
        brazil,
        france,
        russia // ...
    ],
    init,
    end
)

const americaDoSul = new Load(
    "América do Sul",
    [
        brazil,
        aruba
    ],
    init,
    end
)

const top7 = new Load(
    "Top 7",
    [
        us,
        india,
        uk,
        turkey,
        iran,
        brazil,
        philippines
    ],
    init,
    end
)

module.exports = {
    top7
};
