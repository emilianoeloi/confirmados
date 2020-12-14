// __tests__/State.test.js

const State = require('../State.js');
const jsonIntegrate = require("../__mocks__/integrate.json");

describe('State', () => {
    test('Class', () => {
        const c = new State('mg', 'Minas Gerais', '#000')
        expect(c.name).toBe('Minas Gerais')
    })
    test('Create Class', () => {
        const ac = State.createState(jsonIntegrate, 'ac')
        expect(ac.name).toBe('Acre')
    })
    test('CreateClass Não cadastrado', () => {
        const mg = State.createState(jsonIntegrate, 'mg')
        expect(mg).toBe(undefined)
    })
})