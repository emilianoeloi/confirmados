// __test__/Integrate.test.js
const Integrate = require('../Integrate.js')

describe('Integrate', () => {
    let json;
    let i;
    beforeEach(() => {
        json = [
            {
                key: 'brazil',
                name: 'Brazil',
                color: ''
            },
            {
                key: 'argentina',
                name: 'Argentina',
                color: ''
            },
            {
                key: 'south_africa',
                name: 'South Africa',
                color: ''
            }
        ]
        i = new Integrate(json)
    })
    test('Construite', () => {
        expect(i.countries.length).toBe(3)
    })
    // TODO: spy
    test('integrate com Paíes para Argentina', () => {
        const integrate = i.integrateCountries(["Argentina"])
        expect(integrate[0].key).toBe("argentina")
    });
    test('integrate com Paíes para Brazil', () => {
        const integrate = i.integrateCountries(["Argentina", "Brazil"])
        expect(integrate[1].key).toBe("brazil")
    });
    test('integrate com Paíes para Africa do Sul', () => {
        const integrate = i.integrateCountries(["South Africa"])
        expect(integrate[0].key).toBe("south_africa")
    });

    test('Salvar um país com nomes', () => {
        let globalCountry = "[]"
        const countryName = 'Brazil'
        globalCountry = i.setCountry(globalCountry, countryName)
        expect(globalCountry.length).toBe(1)
    })

    test('Salvar dois países com nomes', () => {
        let globalCountry = []
        const countryNameBR = 'Brazil'
        const countryNameAR = 'Argentina'
        const countryNameBR2 = 'Brazil'

        globalCountry = i.setCountry(JSON.stringify(globalCountry), countryNameBR)
        expect(globalCountry.length).toBe(1)

        globalCountry = i.setCountry(JSON.stringify(globalCountry), countryNameAR)
        expect(globalCountry.length).toBe(2)

        globalCountry = i.setCountry(JSON.stringify(globalCountry), countryNameBR2)
        expect(globalCountry.length).toBe(2)
        
    })

    test('Salvar três países com nomes', () => {
        let globalCountry = []
        const countryNameBR = 'Brazil'
        const countryNameAR = 'Argentina'
        const countryNameBR2 = 'Brazil'
        const countryNameURY = 'Uruguay'
        
        globalCountry = i.setCountry(JSON.stringify(globalCountry), countryNameBR)
        expect(globalCountry.length).toBe(1)

        globalCountry = i.setCountry(JSON.stringify(globalCountry), countryNameAR)
        expect(globalCountry.length).toBe(2)

        globalCountry = i.setCountry(JSON.stringify(globalCountry), countryNameBR2)
        expect(globalCountry.length).toBe(2)

        globalCountry = i.setCountry(JSON.stringify(globalCountry), countryNameURY)
        expect(globalCountry.length).toBe(3)
        
    })
})