// LoadTest.js

const Load = require('./Load.js')
const integrateStates = require('./Paises/Brazil/integrate.json')

const init = new Date("2020-11-01T00:00:00.000")
const end = new Date("2021-01-20T23:59:59.999")
const norte = new Load(
    "0",
    integrateStates,
    "Região Norte", 
    [
        "pa",
        "am",
        "ac",
        "ap",
        "ro",
        "rr", 
        "to"
    ],
    init,
    end
)

const nordeste = new Load(
    "1",
    integrateStates,
    "Região Nordeste",
    [
        "ba",
        "al",
        "ce",
        "ma",
        "pb",
        "pe",
        "pi",
        "rn",
        "se"
    ],
    init,
    end
)

const centroOeste = new Load(
    "2",
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
    "3",
    integrateStates,
    "Região Sudeste",
    [
        "sp",
        "rj",
        "mg",
        "es"
    ],
    init,
    end
)

const sul = new Load(
    "4",
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

const df = new Load(
    "5",
    integrateStates,
    "Distrito Federal",
    [
        "df"
    ],
    init,
    end
)

module.exports = {
    norte,
    nordeste,
    centroOeste,
    sudeste,
    sul,
    df
};
