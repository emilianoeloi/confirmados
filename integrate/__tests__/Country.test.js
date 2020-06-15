// __tests__/Country.test.js

const { setCountry } = require('../Country.js');

describe('Country', () => {
    const Country = require('../Country.js')
    // TODO: spy
    test('integrate com Paíes para Argentina', () => {
        const integrate = Country.integrateCountries(["Argentina"])
        expect(integrate[0].key).toBe("argentina")
    });
    test('integrate com Paíes para Brazil', () => {
        const integrate = Country.integrateCountries(["Argentina", "Brazil"])
        expect(integrate[1].key).toBe("brazil")
    });
    test('integrate com Paíes para Africa do Sul', () => {
        const integrate = Country.integrateCountries(["South Africa"])
        expect(integrate[0].key).toBe("south_africa")
    });

    test('Salvar um país com nomes', () => {
        let globalCountry = "[]"
        const countryName = 'Brazil'
        globalCountry = setCountry(globalCountry, countryName)
        expect(globalCountry.length).toBe(1)
    })

    test('Salvar dois países com nomes', () => {
        let globalCountry = []
        const countryNameBR = 'Brazil'
        const countryNameAR = 'Argentina'
        const countryNameBR2 = 'Brazil'

        globalCountry = setCountry(JSON.stringify(globalCountry), countryNameBR)
        expect(globalCountry.length).toBe(1)

        globalCountry = setCountry(JSON.stringify(globalCountry), countryNameAR)
        expect(globalCountry.length).toBe(2)

        globalCountry = setCountry(JSON.stringify(globalCountry), countryNameBR2)
        expect(globalCountry.length).toBe(2)
        
    })

    test('Salvar três países com nomes', () => {
        let globalCountry = []
        const countryNameBR = 'Brazil'
        const countryNameAR = 'Argentina'
        const countryNameBR2 = 'Brazil'
        const countryNameURY = 'Uruguay'
        
        globalCountry = setCountry(JSON.stringify(globalCountry), countryNameBR)
        expect(globalCountry.length).toBe(1)

        globalCountry = setCountry(JSON.stringify(globalCountry), countryNameAR)
        expect(globalCountry.length).toBe(2)

        globalCountry = setCountry(JSON.stringify(globalCountry), countryNameBR2)
        expect(globalCountry.length).toBe(2)

        globalCountry = setCountry(JSON.stringify(globalCountry), countryNameURY)
        expect(globalCountry.length).toBe(3)
        
    })

})