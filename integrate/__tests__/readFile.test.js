// __tests__/readFile.text.js
// const readFile = require('../readFile.js')

// jest.mock('fs').promises;

describe(' Ler arquivos', () => {
    const MOCK_FILE_CSV = {
        '/path/to/2020-01-22.csv': 'a, b, c\n1, 2, 3'
    };

    beforeEach(() => {
        //require('fs').__setMockFiles(MOCK_FILE_CSV)
    })

    test('testando o arquivo', () => {
        // const readFile = require('../readFile.js');
        // const csvFilePath = '/path/to/2020-01-22.csv'
        // const callback = function(data) {
        //     try {
        //         done()
        //     } catch(error) {
        //         done(error)
        //     }
        // }
        // readFile(csvFilePath, callback);
    })
});