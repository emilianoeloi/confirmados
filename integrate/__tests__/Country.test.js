// __tests__/Country.test.js

const Country = require('../Country.js');

describe('Country', () => {
    test('Class', () => {
        const c = new Country('brazil', 'Brazil', '#000')
        expect(c.name).toBe('Brazil')
    })
})