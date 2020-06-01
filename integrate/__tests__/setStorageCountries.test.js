// __tests__/setStorageCountries.test.js
const setStorageContries = require('../setStorageCountries.js');

describe('Gravar confirmados dos países', () => {
    const countries = {
        'Brasil': [{
            date: '2020-01-21',
            confirmed: 0
        }]
    }
    test('gravar todos', done => {
        setStorageContries(countries, function(data) {
            try {
                expect(Object.values(data).length).toBe(1)
                done()
            } catch(error) {
                done(error)
            }
        })
    })
})
