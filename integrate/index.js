const fs = require('fs');
const path = require('path');

const csvToJson = require('./csvToJson.js');
const getCSVRequestFiles = require('./getCSVReportFiles.js');

// Arquivos
var csseCovid19DailyReport = path.join(__dirname, 'csse_covid_19_daily_reports')

var readFile = function(csvFile) {
   fs.readFile(csvFile, function(err, data) {
      if (err) {
         return console.error(err);
      }
      setStorageCountries(csvToJson(data.toString()) )
   });
}

getCSVRequestFiles(
   csseCovid19DailyReport,
   "2020-01-22T00:00:00",
   "2020-01-22T00:00",
   readFile
)

var storageCountries = {}
function setStorageCountries(data) {
   Object.values(data).forEach(function(a, b) {
      var keyCountry = Object.keys(data)[b]
      if (storageCountries[keyCountry] === undefined)  {
         storageCountries[keyCountry] = [a]
      } else {
         storageCountries[keyCountry].push(a)
      }
   })
   console.info('setStorageCountries', storageCountries  )
}

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