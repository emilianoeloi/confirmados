// __tests__/Process.test.js

const {
    processPromise,
    calculate
} = require('../Process.js');

const path = require('path');
const fs = require('fs')

describe('Process', () => {

    const jsonDistritoFederal = [
        path.resolve(__dirname, '../__mocks__/casesDistrito_Federal.json')
    ]

    test('Process', done => {
        processPromise(jsonDistritoFederal[0])
            .then((data) => {
                expect(data.length).toBe(3)
                done()
            })
            .catch((err) => {
                expect('err').toBe(err)
                done()
            })
    })
    test('Calculate', () => {
        const calculated = calculate([{date:'', cases:''}])
        expect(calculated.length).toBe(1)
    })
    test('Diarimente', () => {
        const casesDistrito_Federal = [
            {
                dailyCases: 100,
                cumuCases: 100,
                cases: 100,
                date: '2021-12-01T12:00:00'
            },
            {
                dailyCases: 50,
                cumuCases: 150,
                cases: 150,
                date: '2021-12-02T12:00:00'
            },
            {
                dailyCases: 50,
                cumuCases: 200,
                cases: 200,
                date: '2021-12-03T12:00:00'
            }
        ]
        const calculated = calculate(casesDistrito_Federal)
        expect(calculated.length).toBe(3)

        /// 1/3
        // BUG - Casos novos por dia
        // expect(calculated[0].cumuCases).toBe(100)
        // expect(calculated[0].dailyCases).toBe(100)

        /// 2/3
        expect(calculated[1].cumuCases).toBe(150)
        expect(calculated[1].dailyCases).toBe(50)

        /// 3/3
        expect(calculated[2].cumuCases).toBe(200)
        expect(calculated[2].dailyCases).toBe(50)
    })
})