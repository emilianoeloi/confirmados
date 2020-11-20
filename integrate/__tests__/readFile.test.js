const readFile = require('../readFile.js')
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

        readFile.read(
            janeiroPath[0], 
            countryGroup, 
            (a, b) => { // saveCountriesDataCB
                console.info('saveCountriesDataCB')
                console.info('a, b', a, b(1,2,3,4))
                let m = {}
                expect(a).toStrictEqual(m)
                done()
            }, 
            (a, b, c, d) => { // writeFileCB
                console.info('a, b, c, d', a, b, c, d)
                let n = {}
                expect(a).toStrictEqual(n)
                done()
            }
        )
    })

    // test('04 07 2020', done =>  {

    //     readFile.read(
    //         janeiroPath[0], 
    //         countryGroup, 
    //         (a, b, c, d) => { // saveCountriesDataCB
    //             console.info('a, b, c, d', a, b, c, d)
    //             let m = {}
    //             expect(a).toStrictEqual(m)
    //             done()
    //         }, 
    //         (a, b, c, d) => { // writeFileCB
    //             console.info('a, b, c, d', a, b, c, d)
    //             let n = {}
    //             expect(a).toStrictEqual(n)
    //             done()
    //         }
    //     )
    // })
})