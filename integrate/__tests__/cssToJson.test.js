//__tests__/csvToJson.test.js

const path = require('path');
const fs = require('fs');

const readFile = require('../readFile.js');
const csvToJson = require('../csvToJson.js');
const Country = require('../Country.js');
const State = require('../State.js');

const janeiroPath = path.resolve(__dirname, '../__mocks__/01-22-2020.csv');
const fevereiroPath = path.resolve(__dirname, '../__mocks__/02-01-2020.csv');
const marcoPath = path.resolve(__dirname, '../__mocks__/03-01-2020.csv');
const marco_23_2020_Path = path.resolve(__dirname, '../__mocks__/03-23-2020.csv');
const marco_28_2020_Path = path.resolve(__dirname, '../__mocks__/03-28-2020.csv');

const julho_03_2020_Path = path.resolve(__dirname, '../__mocks__/07-03-2020.csv');
const julho_04_2020_Path = path.resolve(__dirname, '../__mocks__/07-04-2020.csv');

const abrilPath = path.resolve(__dirname, '../__mocks__/04-01-2020.csv');
const maioPath = path.resolve(__dirname, '../__mocks__/05-01-2020.csv');
const junhoPath = path.resolve(__dirname, '../__mocks__/06-01-2020.csv');
const dezembroPath = path.resolve(__dirname, '../__mocks__/12-05-2020.csv');

const janeiroHeader = [
    'Province/State', // 0
    'Country/Region', // 1 *
    'Last Update', // 2 *
    'Confirmed', // 3 *
    'Deaths', // 4
    'Recovered' // 5
]
const fevereiroHeader = [ 'Province/State', 'Country/Region', 'Last Update', 'Confirmed', 'Deaths', 'Recovered\r' ]
let marcoHeader = []
marcoHeader[0] = [ 'Province/State', 'Country/Region', 'Last Update', 'Confirmed', 'Deaths', 'Recovered\r' ]
marcoHeader[1] = [ 'FIPS', 'Admin2', 'Province_State', 'Country_Region', 'Last_Update', 'Lat', 'Long_', 'Confirmed', 'Deaths', 'Recovered', 'Active', 'Combined_Key' ]
const abrilHeader = [ 'Province/State', 'Country/Region', 'Last Update', 'Confirmed', 'Deaths', 'Recovered', 'Latitude', 'Longitude' ]
const maioHeader = [ 'FIPS', 'Admin2', 'Province_State', 'Country_Region', 'Last_Update', 'Lat', 'Long_', 'Confirmed', 'Deaths', 'Recovered', 'Active', 'Combined_Key' ]
const junhoHeader = [
    'FIPS', // 0
    'Admin2', // 1
    'Province_State', // 2
    'Country_Region', // 3 *
    'Last_Update', // 4 *
    'Lat', // 5
    'Long_', // 6
    'Confirmed', // 7 *
    'Deaths', // 8
    'Recovered', // 9
    'Active', // 10
    'Combined_Key', // 11
    'Incidence_Rate', // 12
    'Case-Fatality_Ratio' // 13
]
const julhoHeader = [
    ['FIPS','Admin2','Province_State','Country_Region','Last_Update','Lat','Long_','Confirmed','Deaths','Recovered','Active','Combined_Key','Incidence_Rate','Case-Fatality_Ratio']
]

const dezembroHeader = [
    'FIPS', 'Admin2', 'Province_State', 'Country_Region', 'Last_Update', 'Lat', 'Long_', 'Confirmed', 'Deaths', 'Recovered', 'Active', 'Combined_Key', 'Incident_Rate',  'Case_Fatality_Ratio'
]

const getMonthCSVToJSON = function(monthPath, originGroups, originType="country") {
    const path = fs.readFileSync(monthPath).toString();
    const fileName = readFile.getFileName(monthPath)
    const fileDate = readFile.getFileDate(fileName)
    const json = csvToJson.toJson({
        data: path,
        dateFile: fileDate
    }, originGroups, originType);
    return json;
}

const getFirtsDate = function(monthPath, countryGroups) {
    const json = getMonthCSVToJSON(monthPath, countryGroups);
    const firstDate = new Date(Object.values(json)[0]["date"])
    const date = firstDate.getUTCDate()
    const month = firstDate.getUTCMonth()
    const fullYear = firstDate.getUTCFullYear()
    return {
        date,
        month: (month + 1), // Por quê?
        fullYear, 
        json,
        firstDate
    }
}

describe('headers State', () => {
    test('Junho', () => {
        const ok = csvToJson.validateHeaders(junhoHeader)
        expect(ok.HDR_STATE).toBe(2)
        expect(ok.HDR_DATE).toBe(4)
        expect(ok.HDR_CASES).toBe(7)
    })
    test('Dezembro', () => {
        const ok = csvToJson.validateHeaders(dezembroHeader)
        expect(ok.HDR_STATE).toBe(2)
        expect(ok.HDR_DATE).toBe(4)
        expect(ok.HDR_CASES).toBe(7)
    })
})

describe('headers', () => {
    test('Janeiro', () => {
        const ok = csvToJson.validateHeaders(janeiroHeader);
        expect(ok.HDR_COUNTRY).toBe(1)
        expect(ok.HDR_DATE).toBe(2)
        expect(ok.HDR_CASES).toBe(3)
    })
    test('Fevereiro', () => {
        const ok = csvToJson.validateHeaders(fevereiroHeader);
        expect(ok.HDR_COUNTRY).toBe(1)
        expect(ok.HDR_DATE).toBe(2)
        expect(ok.HDR_CASES).toBe(3)
    })
    test('Março', () => {
        const ok = csvToJson.validateHeaders(marcoHeader[0]);
        expect(ok.HDR_COUNTRY).toBe(1)
        expect(ok.HDR_DATE).toBe(2)
        expect(ok.HDR_CASES).toBe(3)
        const ok2 = csvToJson.validateHeaders(marcoHeader[1]);
        expect(ok2.HDR_COUNTRY).toBe(3)
        expect(ok2.HDR_DATE).toBe(4)
        expect(ok2.HDR_CASES).toBe(7)
    })
    test('Abril', () => {
        const ok = csvToJson.validateHeaders(abrilHeader);
        expect(ok.HDR_COUNTRY).toBe(1)
        expect(ok.HDR_DATE).toBe(2)
        expect(ok.HDR_CASES).toBe(3)
    })
    test('Maio', () => {
        const ok = csvToJson.validateHeaders(maioHeader);
        expect(ok.HDR_COUNTRY).toBe(3)
        expect(ok.HDR_DATE).toBe(4)
        expect(ok.HDR_CASES).toBe(7)
    })
    test('Junho', () => {
        const ok = csvToJson.validateHeaders(junhoHeader);
        expect(ok.HDR_COUNTRY).toBe(3)
        expect(ok.HDR_DATE).toBe(4)
        expect(ok.HDR_CASES).toBe(7)
    })
    test('Julho', () => {
        const ok = csvToJson.validateHeaders(julhoHeader[0]);
        expect(ok.HDR_COUNTRY).toBe(3)
        expect(ok.HDR_DATE).toBe(4)
        expect(ok.HDR_CASES).toBe(7)
    })
})

describe('Brazil States', () => {
    const dezembro_07_2020_Path = path.resolve(__dirname, '../__mocks__/12-07-2020.csv');
    const mg = new State("mg", "Minas Gerais", "")

    const csv2020_12_07 = `FIPS,Admin2,Province_State,Country_Region,Last_Update,Lat,Long_,Confirmed,Deaths,Recovered,Active,Combined_Key,Incident_Rate,Case_Fatality_Ratio
,,Mato Grosso do Sul,Brazil,2020-12-08 05:27:42,-20.7722,-54.7852,105246,1841,91740,11665,"Mato Grosso do Sul, Brazil",3787.208715697021,1.7492351253254281
,,Minas Gerais,Brazil,2020-12-08 05:27:42,-18.5122,-44.555,442186,10341,400155,31690,"Minas Gerais, Brazil",2088.8580741337564,2.3386086398031596
,,Para,Brazil,2020-12-08 05:27:42,-1.9981,-54.9306,275551,6954,256661,11936,"Para, Brazil",3203.0143446398383,2.5236707542342436`


    test('posso validar só existem linhas do mês 12 do dia 07 em 2020', () => {
        const states = csvToJson.toJson({
            data: csv2020_12_07,
            dateFile: new Date('2020-12-07T00:00:00.000')
        }, [mg], "state")
        expect(Object.values(states)[0].cases).toBe(442186)
    })

    test('testando todos as linhas de dezembro 07/12/2020', () => {
        const json = getMonthCSVToJSON(dezembro_07_2020_Path, [mg], "state");
        expect(Object.values(json).length).toBe(1)
    });
})

describe('Brazil', () => {
    const marco_23_2020_Path = path.resolve(__dirname, '../__mocks__/03-23-2020.csv');
    const brazil = new Country("brazil", "Brazil", "");

    const csv2020_03_23 = `FIPS,Admin2,Province_State,Country_Region,Last_Update,Lat,Long_,Confirmed,Deaths,Recovered,Active,Combined_Key
    ,,,Brazil,2020-03-23 23:19:21,-14.235,-51.9253,1924,34,2,1888,Brazil`;
    const csv2020_03_28 = `FIPS,Admin2,Province_State,Country_Region,Last_Update,Lat,Long_,Confirmed,Deaths,Recovered,Active,Combined_Key
    ,,,Brazil,3/28/20 23:05,-14.235,-51.9253,3904,111,6,3787,Brazil`

    const csv2020_07_03 = `FIPS,Admin2,Province_State,Country_Region,Last_Update,Lat,Long_,Confirmed,Deaths,Recovered,Active,Combined_Key,Incidence_Rate,Case-Fatality_Ratio
    45001,Abbeville,South Carolina,US,2020-07-04 04:33:51,34.22333378,-82.46170658,118,0,0,118,"Abbeville, South Carolina, US",481.1024585151058,0.0
    ,,Espirito Santo,Brazil,2020-07-04 04:33:51,-19.1834,-40.3089,51689,1758,31980,17951,"Espirito Santo, Brazil",1286.2279621265848,3.3430710596064928`
    const csv2020_07_04 = `FIPS,Admin2,Province_State,Country_Region,Last_Update,Lat,Long_,Confirmed,Deaths,Recovered,Active,Combined_Key,Incidence_Rate,Case-Fatality_Ratio
    45001,Abbeville,South Carolina,US,2020-07-05 04:33:46,34.22333378,-82.46170658,119,0,0,119,"Abbeville, South Carolina, US",485.1795979940474,0.0
    ,,Acre,Brazil,2020-07-05 04:33:46,-9.0238,-70.812,14487,391,7650,6446,"Acre, Brazil",1642.6380628957916,2.698971491682198`
    
    test('posso validar só existem linhas do mês 3 do dia 23 em 2020', () => {
        const countreis = csvToJson.toJson({
            data: csv2020_03_23,
            dateFile: new Date('2020-03-23T00:00:00.000')
        }, [brazil])
        expect(Object.values(countreis)[0].cases).toBe(1924)
    })

    test('posso validar só existem linhas do mês 3 do dia 28 em 2020', () => {
        const countreis = csvToJson.toJson({
            data: csv2020_03_28,
            dateFile: new Date('2020-03-28T00:00:00.000')
        }, [brazil])
        expect(Object.values(countreis)[0].cases).toBe(3904)
    })

    test('posso validar só existem linhas do mês 7 do dia 3 em 2020', () => {
        const countreis = csvToJson.toJson({
            data: csv2020_07_03,
            dateFile: new Date('2020-07-03T00:00:00.000')
        }, [brazil])
        expect(Object.values(countreis)[0].cases).toBe(51689)
    })

    test('posso validar só existem linhas do mês 7 do dia 4 em 2020', () => {
        const countreis = csvToJson.toJson({
            data: csv2020_07_04,
            dateFile: new Date('2020-07-04T00:00:00.000')
        }, [brazil])
        expect(Object.values(countreis)[0].cases).toBe(14487)
    })

    test('testando todos as linhas de março 23/03/2020', () => {
        const json = getMonthCSVToJSON(marco_23_2020_Path, [brazil]);
        expect(Object.values(json).length).toBe(1)
    });

    test('testando todos as linhas de março 28/03/2020', () => {
        const json = getMonthCSVToJSON(marco_28_2020_Path, [brazil]);
        expect(Object.values(json).length).toBe(1)
    });

    test('testando todos as linhas de março 03/07/2020', () => {
        const json = getMonthCSVToJSON(julho_03_2020_Path, [brazil]);
        expect(Object.values(json).length).toBe(1)
    });

    test('testando todos as linhas de março 04/07/2020', () => {
        const json = getMonthCSVToJSON(julho_04_2020_Path, [brazil]);
        expect(Object.values(json).length).toBe(1)
    });
})

describe('[Brics]CSV para resports.csv para data e confirmados', () => {
    const brics = [
        new Country("mainland_china", "Mainland China", ""),
        new Country("brazil", "Brazil", ""),
        new Country("russia", "Russia", ""),
        new Country("india", "India", ""),
        new Country("china", "China", ""),
        new Country("south_africa", "South Africa", "")
    ];
    const csv2020_01_22 = 'Province/State,Country/Region,Last Update,Confirmed,Deaths,Recovered\nAnhui,Mainland China,1/22/2020 17:00,20,,\nBeijing,Mainland China,1/22/2020 17:00,20,,\nBeijing,Mainland China,2/22/2020 17:00,20,,\nBeijing,Mainland China,12/22/2020 17:00,20,,';
    const csv2020_03_13 = 'Province/State,Country/Region,Last Update,Confirmed,Deaths,Recovered\nAnhui,Mainland China,03/13/2020 17:00,20,,\nBeijing,Mainland China,3/13/2020 17:00,20,,\nBeijing,Mainland China,3/12/2020 17:00,20,,\nBeijing,Mainland China,3/11/2020 17:00,20,,';
    const csv2020_02_12 = `Province/State,Country/Region,Last Update,Confirmed,Deaths,Recovered
Hubei,Mainland China,2020-02-12T14:13:08,1000,1000,2686
Guangdong,Mainland China,2020-02-12T12:23:09,1000,1,275
Henan,Mainland China,2020-02-12T14:13:08,1000,8,246
    `;
    const csv2020_03_23 = `FIPS,Admin2,Province_State,Country_Region,Last_Update,Lat,Long_,Confirmed,Deaths,Recovered,Active,Combined_Key

,,,Brazil,2020-03-23 23:19:21,-14.235,-51.9253,1924,34,2,1888,Brazil`

    test('posso validar só existem linhas do mês 2 do dia 12 em 2020', () => {
        const countreis = csvToJson.toJson({
            data: csv2020_02_12,
            dateFile: new Date('2020-02-12T00:00:00.000')
        }, brics)
        expect(Object.values(countreis)[0].cases).toBe(3000)
    })

    test('posso validar só existem linhas do mês 3 do dia 13 em 2020', () => {
        const countreis = csvToJson.toJson({
            data: csv2020_03_13,
            dateFile: new Date('2020-03-13T00:00:00.000')
        }, brics)
        expect(Object.values(countreis)[0].cases).toBe(40)
    })

    test('posso validar só existem linhas do mês 3 do dia 23 em 2020', () => {
        const countreis = csvToJson.toJson({
            data: csv2020_03_23,
            dateFile: new Date('2020-03-23T00:00:00.000')
        }, brics)
        expect(Object.values(countreis)[0].cases).toBe(1924)
    })

    test('relatorio csv para json(com países)', () => {
        const countreis = csvToJson.toJson({
            data: csv2020_01_22,
            dateFile: new Date('2020-01-22T00:00:00.000')
        }, brics)
        expect(Object.values(countreis).length).toBe(1)
    });

    test('testando todos as linhas de Janeiro', () => {
        const json = getMonthCSVToJSON(janeiroPath, brics);
        expect(Object.values(json).length).toBe(1)
    });

    test('testando todos as linhas de fevereiro', () => {
        const json = getMonthCSVToJSON(fevereiroPath, brics);
        expect(Object.values(json).length).toBe(1)
    });

    test('testando todos as linhas de março', () => {
        const json = getMonthCSVToJSON(marcoPath, brics);
        expect(Object.values(json).length).toBe(1)
    });

    test('testando todos as linhas de março 23/03/2020', () => {
        const json = getMonthCSVToJSON(marco_23_2020_Path, brics);
        expect(Object.values(json).length).toBe(5)
    });

    test('testando todos as linhas de abril', () => {
        const json = getMonthCSVToJSON(abrilPath, brics);
        expect(Object.values(json).length).toBe(5)
    });

    test('testando todos as linhas de maio', () => {
        const json = getMonthCSVToJSON(maioPath, brics);
        expect(Object.values(json).length).toBe(5)
    });

    test('testando todos as linhas de junho', () => {
        const json = getMonthCSVToJSON(junhoPath, brics);
        expect(Object.values(json).length).toBe(5)
    });

    test('testar da datas janeiro', () => {
        const dtJson = getFirtsDate(janeiroPath, brics);
        expect(dtJson.date).toBe(22)
        expect(dtJson.month).toBe(1)
        expect(dtJson.fullYear).toBe(2020)
    });
    test('testar da datas fevereiro', () => {
        const dtJson = getFirtsDate(fevereiroPath, brics)
        expect(dtJson.date).toBe(1)
        expect(dtJson.month).toBe(2)
        expect(dtJson.fullYear).toBe(2020)
    });
    test('testar da datas marco', () => {
        const dtJson = getFirtsDate(marcoPath, brics)
        expect(dtJson.date).toBe(1)
        expect(dtJson.month).toBe(3)
        expect(dtJson.fullYear).toBe(2020)
    });
    test('testar da datas abril', () => {
        const dtJson = getFirtsDate(abrilPath, brics)
        expect(dtJson.date).toBe(1)
        expect(dtJson.month).toBe(4)
        expect(dtJson.fullYear).toBe(2020)
    });
    test('testar da datas maio', () => {
        const dtJson = getFirtsDate(maioPath, brics)
        expect(dtJson.date).toBe(1) // Bugzinho pesado.
        expect(dtJson.month).toBe(5)
        expect(dtJson.fullYear).toBe(2020)
    });
    test('testar da datas junho', () => {
        const dtJson = getFirtsDate(junhoPath, brics)
        expect(dtJson.date).toBe(1)
        expect(dtJson.month).toBe(6)
        expect(dtJson.fullYear).toBe(2020)
    });
})

describe('[Mercosul/Mercosul] CSV para resports.csv para data e confirmados', () => {
    const mercosul = [
        new Country("argentina", "Argentina", ""),
        new Country("brazil", "Brazil", ""),
        new Country("paraguay", "Paraguay", ""),
        new Country("uruguay", "Uruguay", ""),
        new Country("venezuela", "Venezuela", "")
    ];
    
    const csv2020_02_26 = `Province/State,Country/Region,Last Update,Confirmed,Deaths,Recovered
Belo Horizonte,Brazil,2020-02-25T14:13:08,12,1000,2686
Belo Horizonte,Brazil,2020-02-26T12:23:09,8,1,275
Belo Horizonte,Brazil,2020-02-27T14:13:08,10,8,246`;

    const csv2020_04_13 = `Province/State,Country/Region,Last Update,Confirmed,Deaths,Recovered
Rio de Janeiro,Brazil,2020-02-13T14:13:08,21,1000,2686
Rio de Janeiro,Brazil,2020-04-13T12:23:09,9,1,275
Rio de Janeiro,Brazil,2020-04-14T14:13:08,20,8,246`;

// BUG o arquivos de 2020 05 12 ele grava as linhas 2020 05 13
    const csv2020_05_12 = `FIPS,Admin2,Province_State,Country_Region,Last_Update,Lat,Long_,Confirmed,Deaths,Recovered,Active,Combined_Key
,,,Brazil,2020-05-12 03:32:26,-14.235,-51.9253,178000,12461,72597,93156,Brazil
,,,Brazil,2020-05-13 03:32:26,-14.235,-51.9253,178214,12461,72597,93156,Brazil
,,,Brazil,2020-05-14 03:32:26,-14.235,-51.9253,178999,12461,72597,93156,Brazil
    `;

    const csv2020_02_27 = `Province/State,Country/Region,Last Update,Confirmed,Deaths,Recovered
,Argentina,2020-02-27T14:13:08,2,1000,2686
,Brazil,2020-02-27T12:23:09,4,1,275
,Paraguay,2020-02-27T12:23:09,6,1,275
,Uruguay,2020-02-27T12:23:09,8,1,275
,Venezuela,2020-02-27T14:13:08,10,8,246`;

    const braArg = [
        new Country("brazil", "Brazil", ""),
        new Country("argentina", "Argentina", "")
    ];

    test('Argentina e Brazil', () => {
        const countreis = csvToJson.toJson({
            data: csv2020_02_27,
            dateFile: new Date('2020-02-27T00:00:00.000')
        }, braArg)
        expect(Object.keys(countreis)[0]).toBe("Argentina")
        expect(Object.keys(countreis)[1]).toBe("Brazil")
    });

    test('posso validar só existem linhas do mês 2 do dia 26 em 2020', () => {
        const countreis = csvToJson.toJson({
            data: csv2020_02_26,
            dateFile: new Date('2020-02-26T00:00:00.000')
        }, mercosul)
        expect(Object.values(countreis)[0].cases).toBe(8)
    });

    test('posso validar só existem linhas do mês 4 do dia 13 em 2020', () => {
        const countreis = csvToJson.toJson({
            data: csv2020_04_13,
            dateFile: new Date('2020-04-13T00:00:00.000')
        }, mercosul)
        expect(Object.values(countreis)[0].cases).toBe(9)
    })

    test('posso validar só existem linhas do mês 5 do dia 12 em 2020', () => {
        const countreis = csvToJson.toJson({
            data: csv2020_05_12,
            dateFile: new Date('2020-05-12T00:00:00.000')
        }, mercosul)
        expect(Object.values(countreis)[0].cases).toBe(178214)
    })

    test('testando todos as linhas de abril', () => {
        const json = getMonthCSVToJSON(abrilPath, mercosul);
        expect(Object.values(json).length).toBe(5)
    });

    test('testando todos as linhas de maio', () => {
        const json = getMonthCSVToJSON(maioPath, mercosul);
        expect(Object.values(json).length).toBe(5)
    });
})