const getCSVReportFiles = require('../getCSVReportFiles.js')
const Country = require('../Country.js');

describe('Obeter os relatórios de confirmados', () => {
    const defaultPath = "./312"
    const start = new Date("2020-01-22T00:00:00.000")
    const finish = new Date("2020-01-23T23:59:59.999")
    const countryGroup = [
        new Country("peru", "Peru", "#000"),
        new Country("brazil", "Brazil", "#111")
    ]

    test('Testando os dados do Brazil', done =>  {
        getCSVReportFiles(
            defaultPath,
            start,
            finish,
            countryGroup,
            (a, b, c, d, e) => {
                expect(b[1].name).toBe('Brazil')
                done()
            },
            () => {}
        )
        
    })
})