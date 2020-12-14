// __tests__/Load.test.js

const Load = require('../Load.js');
const jsonIntegrate = require("../__mocks__/integrate.json");

describe('Load', () => {
    test('Load', () => {
        const teste = new Load(
            jsonIntegrate,
            "Test", 
            [
                "ac"
            ],
            "2020-12-12",
            "2020-12-12"
        )
        expect(teste.states[0].name).toBe("Acre")
    })

    test('Load Errando', () => {
        const teste = new Load(
            jsonIntegrate,
            "Test", 
            [
                "mg"
            ],
            "2020-12-12",
            "2020-12-12"
        )
        expect(teste.states.length).toBe(1)
        expect(teste.states[0]).toBe(undefined)
    })
})