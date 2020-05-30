//__tests__/csvToJson.test.js

const csvToJson = require('../csvToJson.js');

describe('CSV para resports.csv para data e confirmados', () => {
    const csv2020_01_22 = 'Province/State,Country/Region,Last Update,Confirmed,Deaths,Recovered\nAnhui,Mainland China,1/22/2020 17:00,1,,\nBeijing,Mainland China,1/22/2020 17:00,14,,';
    
    test('relatorio csv para json(com países)', () => {
        const countreis = csvToJson(csv2020_01_22)
        expect(Object.values(countreis).length).toBe(1)
    })
})