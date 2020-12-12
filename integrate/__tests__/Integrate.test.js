// __test__/Integrate.test.js
const Country = require('../Country.js')
const State = require('../State.js')
const Integrate = require('../Integrate.js')

describe('Integrate', () => {
    let i
    let i2
    let json

    beforeEach(() => {
        countries = [
            new Country('brazil', 'Brazil', ''),
            new Country('argentina', 'Argentina', ''),
            new Country('south_africa', 'South Africa', '')
        ]
        states = [
            new State(
                "mg", "Minas Gerais", ""
            ),
            new State(
                "es", "Espirito Santos", ""
            )
        ]
        i = new Integrate()
        i.setOrigins(countries)

        i2 = new Integrate()
        i2.setOrigins(states)

    })
    test('Construtur Country', () => {
        let countries = i.getOrigins()
        expect(countries.length).toBe(3)
    })

    test('Construtur State', () => {
        let states = i2.getOrigins()
        expect(states.length).toBe(2)
    })
    // TODO: spy
    test('integrate com Paíes para Argentina', () => {
        const integrate = i.integrateOrigins([new Country('argentina', 'Argentina', '')])
        expect(integrate[0].key).toBe("argentina")
    });
    test('integrate com Stados para Minas Gerais', () => {
        const integrate = i2.integrateOrigins([new State('mg', 'Minas Gerais', '')])
        expect(integrate[0].key).toBe("mg")
    });
    test('integrate com Paíes para Brazil', () => {
        const integrate = i.integrateOrigins([
            new Country('brazil', 'Brazil', ''),
            new Country('argentina', 'Argentina', '')
        ])
        expect(integrate[1].key).toBe("argentina")
    });
    test('integrate com Paíes para Africa do Sul', () => {
        const integrate = i.integrateOrigins([
            new Country('south_africa', 'South Africa', '')
        ])
        expect(integrate[0].key).toBe("south_africa")
    });
    test('integrate com Paíes para Argentina, Brazil e Africa do Sul', () => {
        const integrate = i.integrateOrigins([
            new Country('brazil', 'Brazil', ''),
            new Country('argentina', 'Argentina', ''),
            new Country('south_africa', 'South Africa', '')
        ])
        expect(integrate[2].key).toBe("south_africa")
    });

    test('Salvar um país com nomes', () => {
        let globalCountry = "[]"
        const country = new Country('brazil', 'Brazil', '')
        i.setOrigin(country)
        const brazil = i.getOrigin('brazil')

        expect(brazil.name).toBe('Brazil')
        expect(i.globalOrigins.length).toBe(1)
    })

    test('Salvar dois países com nomes', () => {
        let globalCountry = []
        const countryNameBR = new Country('brazil', 'Brazil', '')
        const countryNameAR = new Country('argentina', 'Argentina', '')
        const countryNameBR2 = new Country('brazil', 'Brazil', '')

        i.setOrigin(countryNameBR)
        let brazil = i.getOrigin(countryNameBR.key)
        expect(brazil.name).toBe('Brazil')
        
        i.setOrigin(countryNameAR)
        let argentina = i.getOrigin('argentina')
        expect(argentina.name).toBe('Argentina')

        expect(i.globalOrigins.length).toBe(2)
        
    })

    test('Salvar três países com nomes', () => {
        let globalCountry = []
        const countryNameBR = new Country('brazil', 'Brazil', '')
        const countryNameAR = new Country('argentina', 'Argentina', '')
        const countryNameBR2 = new Country('brazil', 'Brazil', '')
        const countryNameURY = new Country('uruguay', 'Uruguay', '')
        
        i.setOrigin(countryNameBR)
        let brazil = i.getOrigin(countryNameBR.key)
        expect(brazil.name).toBe('Brazil')
        
        i.setOrigin(countryNameAR)
        let argentina = i.getOrigin('argentina')
        expect(argentina.name).toBe('Argentina')

        i.setOrigin(countryNameBR2)
        let brazil2 = i.getOrigin(countryNameBR2.key)
        expect(brazil2.name).toBe('Brazil')

        i.setOrigin(countryNameURY)
        let uruguay = i.getOrigin(countryNameURY.key)
        expect(uruguay.name).toBe('Uruguay')

        expect(i.globalOrigins.length).toBe(3)
        
    })
})