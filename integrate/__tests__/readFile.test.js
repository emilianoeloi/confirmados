const {
    readPromise
 } = require('../readFile.js')
const Country = require('../Country.js')
const path = require('path');
const fs = require('fs');

describe('ler os arquivos', () => {

    const janeiroPath = [
        path.resolve(__dirname, '../__mocks__/07-03-2020.csv'),
        path.resolve(__dirname, '../__mocks__/07-04-2020.csv')
    ];
    const countryGroup = [
        new Country("brazil", "Brazil", "#111")
    ]
    const saveContriesDataCB = () => {}
    const whiteFileCB = () => {}

    test('03 07 2020', done =>  {

        readPromise(
            janeiroPath[0], 
            countryGroup
        ).then((data) => {
            let m = {}
            expect(a).toStrictEqual(m)
            done()
        }).catch((err) => {
            done()
        })
    })

    test('04 07 2020', done =>  {

        readPromise(
            janeiroPath[1], 
            countryGroup
        ).then((data) => {
            let m = {}
            expect(a).toStrictEqual(m)
            done()
        }).catch((err) => {
            done()
        })
    })
})