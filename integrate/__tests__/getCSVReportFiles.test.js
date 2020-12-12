const getCSVReportFiles = require('../getCSVReportFiles.js')
const Country = require('../Country.js');
const State = require('../State.js');

describe('Obeter os relatórios de confirmados', () => {
    const defaultPath = "./__mocks__"
    const start = new Date("2020-07-03T00:00:00.000")
    const finish = new Date("2020-07-04T23:59:59.999")
    const countryGroup = [
        new Country("peru", "Peru", "#000"),
        new Country("brazil", "Brazil", "#111")
    ]

    test('Testando os dados do Brazil', (done) => {
        getCSVReportFiles(
            defaultPath,
            start,
            finish,
            countryGroup
        )
        .then((data) => {
            console.info("✨"+data)
            expect(data).toBe('sucesso')
            done()
        })
        .catch((err) => {
            console.info("🚨")
            done()
        })
    })

    test('Testando os dados do Peru', (done) => {
        getCSVReportFiles(
            defaultPath,
            start,
            finish,
            countryGroup
        )
        .then((data) => {
            expect(data).toBe('sucesso')
            done()
        })
        .catch((err) => {
            console.info("🚨" + err)
            done()
        })
    })
})

describe('Obeter os relatórios de confirmados para Estados', () => {
    const defaultPath = "./__mocks__"
    const start = new Date("2020-12-07T00:00:00.000")
    const finish = new Date("2020-12-07T23:59:59.999")
    const stateGroup = [
        new State("mg", "Minas Gerais", ""),
    ]

    test('Testando os dados do Minas Gerais', (done) => {
        getCSVReportFiles(
            defaultPath,
            start,
            finish,
            stateGroup
        )
        .then((data) => {
            console.info("✨"+data)
            expect(data).toBe('sucesso')
            done()
        })
        .catch((err) => {
            console.info("🚨")
            done()
        })
    })
})