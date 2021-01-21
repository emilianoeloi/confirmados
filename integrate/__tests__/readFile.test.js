const {
    readPromise,
    readConfirmados
 } = require('../readFile.js')
const Country = require('../Country.js')
const State = require('../State.js')
const path = require('path');
const fs = require('fs');

describe('Confirmados', () => {
    const distritaFederalPath = [
        path.resolve(__dirname, '../__mocks__/casesDistrito_Federal.json')
    ]

    test('Existem dados dos casos do Distrito Federal',  done => {
        readConfirmados(distritaFederalPath[0])
        .then((data) => {
            expect(data.length).toEqual(3)
            done()
        })
        .catch((err) => {
            expect(1).toEqual(err)
            done()
        })
    })
})

describe('ler os arquivos', () => {

    const janeiroPath = [
        path.resolve(__dirname, '../__mocks__/07-03-2020.csv'),
        path.resolve(__dirname, '../__mocks__/07-04-2020.csv')
    ];
    const dezembroPath = [
        path.resolve(__dirname, '../__mocks__/12-07-2020.csv')
    ];
    const countryGroup = [
        new Country("brazil", "Brazil", "#111")
    ]
    const stateGroup = [
        new State("mg", "Minas Gerais", "")
    ]
    const saveContriesDataCB = () => {}
    const whiteFileCB = () => {}

    test('07 12 2020', done =>  {

        readPromise(
            dezembroPath[0], 
            stateGroup
        ).then((data) => {
            expect(data["Minas Gerais"]["cases"]).toStrictEqual(442186)
            done()
        }).catch((err) => {
            expect(1).toStrictEqual(err)
            done()
        })
    })

    test('03 07 2020', done =>  {

        readPromise(
            janeiroPath[0], 
            countryGroup
        ).then((data) => {
            expect(data).toStrictEqual({})
            done()
        }).catch((err) => {
            expect(1).toStrictEqual(err)
            done()
        })
    })

    test('04 07 2020', done =>  {

        readPromise(
            janeiroPath[1], 
            countryGroup
        ).then((data) => {
            expect(data).toStrictEqual({})
            done()
        }).catch((err) => {
            expect(1).toStrictEqual(err)
            done()
        })
    })
})