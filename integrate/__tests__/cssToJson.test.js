//__tests__/csvToJson.test.js

const path = require('path');
const fs = require('fs');
const readFile = require('../readFile.js');

const csvToJson = require('../csvToJson.js')

const janeiroPath = path.resolve(__dirname, '../__mocks__/01-22-2020.csv');
const fevereiroPath = path.resolve(__dirname, '../__mocks__/02-01-2020.csv');
const marcoPath = path.resolve(__dirname, '../__mocks__/03-01-2020.csv');
const abrilPath = path.resolve(__dirname, '../__mocks__/04-01-2020.csv');
const maioPath = path.resolve(__dirname, '../__mocks__/05-01-2020.csv');
const junhoPath = path.resolve(__dirname, '../__mocks__/06-01-2020.csv');

const janeiroHeader = [
    'Province/State', // 0
    'Country/Region', // 1 *
    'Last Update', // 2 *
    'Confirmed', // 3 *
    'Deaths', // 4
    'Recovered' // 5
]
const fevereiroHeader = [ 'Province/State', 'Country/Region', 'Last Update', 'Confirmed', 'Deaths', 'Recovered\r' ]
const marcoHeader = [ 'Province/State', 'Country/Region', 'Last Update', 'Confirmed', 'Deaths', 'Recovered\r' ]
const abrilHeader = [ 'Province/State', 'Country/Region', 'Last Update', 'Confirmed', 'Deaths', 'Recovered', 'Latitude', 'Longitude' ]
const maioHeader = [ 'FIPS', 'Admin2', 'Province_State', 'Country_Region', 'Last_Update', 'Lat', 'Long_', 'Confirmed', 'Deaths', 'Recovered', 'Active', 'Combined_Key' ]
const junhoHeader = [
    'FIPS', // 0
    'Admin2', // 1
    'Province_State', // 2
    'Country_Region', // 3 *
    'Last_Update', // 4 *
    'Lat', // 5
    'Long_', // 6
    'Confirmed', // 7 *
    'Deaths', // 8
    'Recovered', // 9
    'Active', // 10
    'Combined_Key', // 11
    'Incidence_Rate', // 12
    'Case-Fatality_Ratio' // 13
]

describe('headers', () => {
    test('Janeiro', () => {
        const ok = csvToJson.validateHeaders(janeiroHeader);
        expect(ok.HDR_COUNTRY).toBe(1)
        expect(ok.HDR_DATE).toBe(2)
        expect(ok.HDR_CASES).toBe(3)
    })
    test('Fevereiro', () => {
        const ok = csvToJson.validateHeaders(fevereiroHeader);
        expect(ok.HDR_COUNTRY).toBe(1)
        expect(ok.HDR_DATE).toBe(2)
        expect(ok.HDR_CASES).toBe(3)
    })
    test('Março', () => {
        const ok = csvToJson.validateHeaders(marcoHeader);
        expect(ok.HDR_COUNTRY).toBe(1)
        expect(ok.HDR_DATE).toBe(2)
        expect(ok.HDR_CASES).toBe(3)
    })
    test('Abril', () => {
        const ok = csvToJson.validateHeaders(abrilHeader);
        expect(ok.HDR_COUNTRY).toBe(1)
        expect(ok.HDR_DATE).toBe(2)
        expect(ok.HDR_CASES).toBe(3)
    })
    test('Maio', () => {
        const ok = csvToJson.validateHeaders(maioHeader);
        expect(ok.HDR_COUNTRY).toBe(3)
        expect(ok.HDR_DATE).toBe(4)
        expect(ok.HDR_CASES).toBe(7)
    })
    test('Junho', () => {
        const ok = csvToJson.validateHeaders(maioHeader);
        expect(ok.HDR_COUNTRY).toBe(3)
        expect(ok.HDR_DATE).toBe(4)
        expect(ok.HDR_CASES).toBe(7)
    })
})

describe('CSV para resports.csv para data e confirmados', () => {
    const csv2020_01_22 = 'Province/State,Country/Region,Last Update,Confirmed,Deaths,Recovered\nAnhui,Mainland China,1/22/2020 17:00,20,,\nBeijing,Mainland China,1/22/2020 17:00,20,,\nBeijing,Mainland China,2/22/2020 17:00,20,,\nBeijing,Mainland China,12/22/2020 17:00,20,,';
    const csv2020_03_13 = 'Province/State,Country/Region,Last Update,Confirmed,Deaths,Recovered\nAnhui,Mainland China,03/13/2020 17:00,20,,\nBeijing,Mainland China,3/13/2020 17:00,20,,\nBeijing,Mainland China,3/12/2020 17:00,20,,\nBeijing,Mainland China,3/11/2020 17:00,20,,';
    const csv2020_02_12 = `Province/State,Country/Region,Last Update,Confirmed,Deaths,Recovered
Hubei,Mainland China,2020-02-12T14:13:08,1000,1000,2686
Guangdong,Mainland China,2020-02-12T12:23:09,1000,1,275
Henan,Mainland China,2020-02-12T14:13:08,1000,8,246
    `;

    const getMonthCSVToJSON = function(monthPath) {
        const path = fs.readFileSync(monthPath).toString();
        const fileName = readFile.getFileName(monthPath)
        const fileDate = readFile.getFileDate(fileName)
        const json = csvToJson.toJson({
            data: path,
            dateFile: fileDate
        });
        return json;
    }

    const getFirtsDate = function(monthPath) {
        const json = getMonthCSVToJSON(monthPath);
        const firstDate = new Date(Object.values(json)[0]["date"])
        const date = firstDate.getUTCDate()
        const month = firstDate.getUTCMonth()
        const fullYear = firstDate.getUTCFullYear()
        return {
            date,
            month: (month + 1), // Por quê?
            fullYear, 
            json,
            firstDate
        }
    }

    test('posso validar só existem linhas do mês 2 do dia 12 em 2020', () => {
        const countreis = csvToJson.toJson({
            data: csv2020_02_12,
            dateFile: new Date('2020-02-12T00:00:00.000Z')
        })
        expect(Object.values(countreis)[0].cases).toBe(3000)
    })

    test('posso validar só existem linhas do mês 3 do dia 13 em 2020', () => {
        const countreis = csvToJson.toJson({
            data: csv2020_03_13,
            dateFile: new Date('2020-03-13T00:00:00.000Z')
        })
        expect(Object.values(countreis)[0].cases).toBe(40)
    })

    test('relatorio csv para json(com países)', () => {
        const countreis = csvToJson.toJson({
            data: csv2020_01_22,
            dateFile: new Date('2020-01-22T00:00:00.000Z')
        })
        expect(Object.values(countreis).length).toBe(1)
    });

    test('testando todos as linhas de Janeiro', () => {
        const json = getMonthCSVToJSON(janeiroPath);
        expect(Object.values(json).length).toBe(1)
    });

    test('testando todos as linhas de fevereiro', () => {
        const json = getMonthCSVToJSON(fevereiroPath);
        expect(Object.values(json).length).toBe(1)
    });

    test('testando todos as linhas de março', () => {
        const json = getMonthCSVToJSON(marcoPath);
        expect(Object.values(json).length).toBe(2)
    });

    test('testando todos as linhas de abril', () => {
        const json = getMonthCSVToJSON(abrilPath);
        expect(Object.values(json).length).toBe(1)
    });

    test('testando todos as linhas de maio', () => {
        const json = getMonthCSVToJSON(maioPath);
        expect(Object.values(json).length).toBe(5)
    });

    test('testando todos as linhas de junho', () => {
        const json = getMonthCSVToJSON(junhoPath);
        expect(Object.values(json).length).toBe(5)
    });

    test('testar da datas janeiro', () => {
        const dtJson = getFirtsDate(janeiroPath)
        expect(dtJson.date).toBe(22)
        expect(dtJson.month).toBe(1)
        expect(dtJson.fullYear).toBe(2020)
    });
    test('testar da datas fevereiro', () => {
        const dtJson = getFirtsDate(fevereiroPath)
        expect(dtJson.date).toBe(1)
        expect(dtJson.month).toBe(2)
        expect(dtJson.fullYear).toBe(2020)
    });
    test('testar da datas marco', () => {
        const dtJson = getFirtsDate(marcoPath)
        expect(dtJson.date).toBe(1)
        expect(dtJson.month).toBe(3)
        expect(dtJson.fullYear).toBe(2020)
    });
    test('testar da datas abril', () => {
        const dtJson = getFirtsDate(abrilPath)
        expect(dtJson.date).toBe(1)
        expect(dtJson.month).toBe(4)
        expect(dtJson.fullYear).toBe(2020)
    });
    test('testar da datas maio', () => {
        const dtJson = getFirtsDate(maioPath)
        expect(dtJson.date).toBe(1) // Bugzinho pesado.
        expect(dtJson.month).toBe(5)
        expect(dtJson.fullYear).toBe(2020)
    });
    test('testar da datas junho', () => {
        const dtJson = getFirtsDate(junhoPath)
        expect(dtJson.date).toBe(1)
        expect(dtJson.month).toBe(6)
        expect(dtJson.fullYear).toBe(2020)
    });
})