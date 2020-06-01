// saveCountriesData.js
const fs = require('fs');
const { promisify } = require('util');

const appendFileAsync = promisify(fs.appendFile)

const runAppendFile = async (path, data) => {
   const res = await appendFileAsync(path, data)
   console.info(res)
}

function saveCountriesData(data) {
    Object.values(data).forEach(function(a, b) {
      var countryFile = `countries/cases${Object.keys(data)[b]}.json`;
      runAppendFile(countryFile, data)
      .then((text) => {
         console.log(text);
      })
      .catch((err) => {
         console.log('Error', err);
      });
    })
 }

 saveCountriesData("{Emiliano Elói Silva Barbosa: [a: 1]}")

 module.exports = saveCountriesData