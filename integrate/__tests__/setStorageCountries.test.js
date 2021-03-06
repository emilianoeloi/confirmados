// __tests__/setStorageCountries.test.js
const { 
    setStorageCountries
} = require('../setStorageCountries.js');

describe('Gravar confirmados dos países', () => {
    const countries = {
        'Brasil': [{
            date: '2020-01-21',
            confirmed: 0
        }]
    }
    test('gravar todos', done => {
        setStorageCountries(countries, function(data) {
            try {
                expect(Object.values(data).length).toBe(1)
                done()
            } catch(error) {
                done(error)
            }
        })
    })
})

describe('Gravar confirmados dos states', () => {
    const states = {
        'Minas Gerais': [{
            date: '2020-12-07',
            confirmed: 0
        }]
    }
    test('gravar todos', done => {
        setStorageCountries(states, function(data) {
            try {
                expect(Object.values(data).length).toBe(1)
                done()
            } catch(error) {
                done(error)
            }
        })
    })
})
