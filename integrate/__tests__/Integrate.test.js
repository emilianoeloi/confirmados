// __test__/Integrate.test.js
const Country = require('../Country.js')
const Integrate = require('../Integrate.js')

describe('Integrate', () => {
    let i
    let json

    beforeEach(() => {
        countries = [
            new Country('brazil', 'Brazil', ''),
            new Country('argentina', 'Argentina', ''),
            new Country('south_africa', 'South Africa', '')
        ]
        i = new Integrate()
        i.setCountries(countries)
    })
    test('Construite', () => {
        let countries = i.getCountries()
        expect(countries.length).toBe(3)
    })
    // TODO: spy
    test('integrate com Paíes para Argentina', () => {
        const integrate = i.integrateCountries([new Country('argentina', 'Argentina', '')])
        expect(integrate[0].key).toBe("argentina")
    });
    test('integrate com Paíes para Brazil', () => {
        const integrate = i.integrateCountries([
            new Country('brazil', 'Brazil', ''),
            new Country('argentina', 'Argentina', '')
        ])
        expect(integrate[1].key).toBe("argentina")
    });
    test('integrate com Paíes para Africa do Sul', () => {
        const integrate = i.integrateCountries([
            new Country('south_africa', 'South Africa', '')
        ])
        expect(integrate[0].key).toBe("south_africa")
    });
    test('integrate com Paíes para Argentina, Brazil e Africa do Sul', () => {
        const integrate = i.integrateCountries([
            new Country('brazil', 'Brazil', ''),
            new Country('argentina', 'Argentina', ''),
            new Country('south_africa', 'South Africa', '')
        ])
        expect(integrate[2].key).toBe("south_africa")
    });

    test('Salvar um país com nomes', () => {
        let globalCountry = "[]"
        const country = new Country('brazil', 'Brazil', '')
        i.setCountry(country)
        const brazil = i.getCountry('brazil')

        expect(brazil.name).toBe('Brazil')
        expect(i.globalCountries.length).toBe(1)
    })

    test('Salvar dois países com nomes', () => {
        let globalCountry = []
        const countryNameBR = new Country('brazil', 'Brazil', '')
        const countryNameAR = new Country('argentina', 'Argentina', '')
        const countryNameBR2 = new Country('brazil', 'Brazil', '')

        i.setCountry(countryNameBR)
        let brazil = i.getCountry(countryNameBR.key)
        expect(brazil.name).toBe('Brazil')
        
        i.setCountry(countryNameAR)
        let argentina = i.getCountry('argentina')
        expect(argentina.name).toBe('Argentina')

        expect(i.globalCountries.length).toBe(2)
        
    })

    test('Salvar três países com nomes', () => {
        let globalCountry = []
        const countryNameBR = new Country('brazil', 'Brazil', '')
        const countryNameAR = new Country('argentina', 'Argentina', '')
        const countryNameBR2 = new Country('brazil', 'Brazil', '')
        const countryNameURY = new Country('uruguay', 'Uruguay', '')
        
        i.setCountry(countryNameBR)
        let brazil = i.getCountry(countryNameBR.key)
        expect(brazil.name).toBe('Brazil')
        
        i.setCountry(countryNameAR)
        let argentina = i.getCountry('argentina')
        expect(argentina.name).toBe('Argentina')

        i.setCountry(countryNameBR2)
        let brazil2 = i.getCountry(countryNameBR2.key)
        expect(brazil2.name).toBe('Brazil')

        i.setCountry(countryNameURY)
        let uruguay = i.getCountry(countryNameURY.key)
        expect(uruguay.name).toBe('Uruguay')

        expect(i.globalCountries.length).toBe(3)
        
    })
})