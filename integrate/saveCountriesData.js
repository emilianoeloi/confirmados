// saveCountriesData.js

function saveCountriesData(data) {
    Object.values(data).forEach(function(a, b) {
       var countryFile = `countries/cases${Object.keys(data)[b]}.json`
       console.info('countryFile', countryFile);
       fs.appendFile(countryFile, JSON.stringify(a), function(err) {
          if (err) {
             return console.error(err);
          }
       });
    })
 }

 module.exports = saveCountriesData