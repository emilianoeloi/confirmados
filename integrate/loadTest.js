const State = require('./State.js')
const Load = require('./Load.js')
const integrateStates = require('./Paises/Brazil/integrate.json')

const init = new Date("2020-01-22T00:00:00.000")
const end = new Date("2020-12-25T23:59:59.999")
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
