// __tests__/State.test.js

const State = require('../State.js');

describe('State', () => {
    test('Class', () => {
        const c = new State('mg', 'Minas Gerais', '#000')
        expect(c.name).toBe('Minas Gerais')
    })
})