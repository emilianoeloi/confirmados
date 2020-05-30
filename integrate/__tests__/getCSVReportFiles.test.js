// __tests__/getCSVReportFiles.test.js
const getCSVReportFiles = require('../getCSVReportFiles.js')

describe('Obter arquivos de CSV Relatório', () => {
    test('', done => {
        const defaultPath = "defaultPath"
        const start = "2020-01-22T00:00:00"
        const finish = "2020-01-22T00:00:00"
        function callback(fileCSV) {
            try {
                expect(fileCSV).toBe("defaultPath/01-22-2020.csv")
                done()
            } catch (error) {
                done(error)
            }
        }
        getCSVReportFiles(defaultPath, start, finish, callback)
    })    
})