const readFile = require('../readFile.js')
const Country = require('../Country.js')
const path = require('path');
const fs = require('fs');

describe('ler os arquivos', () => {

    const janeiroPath = path.resolve(__dirname, '../__mocks__/01-22-2020.csv');
    const countryGroup = [
        new Country("peru", "Peru", "#000"),
        new Country("brazil", "Brazil", "#111")
    ]
    const saveContriesDataCB = () => {}
    const whiteFileCB = () => {}

    test('Testar os arquivos', done =>  {

        readFile.read(
            janeiroPath, 
            countryGroup, 
            (a, b, c, d) => {
                console.info(a, b, c, d)
                // expect(b[1].name).toBe('Brazil')
                done()
            }, 
            whiteFileCB
        )
    })
})