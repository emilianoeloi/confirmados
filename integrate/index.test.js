const integrate = require("./index.js")

test('Carregar um arquivo no dia 21/01/2020 CSV para JSON', () => {
    var csvConfirmeds = "2020-01-21.csv"
    var jsonConfirmeds = integrate(csvConfirmeds)
    expect(jsonConfirmeds.confirmed).toBe(1)
})
