// writeFile.js

const fs = require('fs')
const path = require('path');

const countriesPath = path.join(__dirname, 'countries')

const writeFile = function(data) {
    if (parseInt(process.env.COUNT) == 0) {
        fs.writeFile(`${countriesPath}/textJson.js`, process.env.GLOBAL_COVID_29, function(err) {
            if (err) {
               return console.error(err);
            }
         });
    }
}

module.exports = writeFile