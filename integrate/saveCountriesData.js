// saveCountriesData.js

const dbCovid19 = function(countryFile, cases) {
   let globalCovid19 = JSON.parse(process.env.GLOBAL_COVID_29)
   let countriesDB = Object.values(globalCovid19);

   let flag = true
   countriesDB.forEach(function(value, key) {
      var globalCountryFile = Object.keys(globalCovid19)[key]
      if (globalCountryFile == countryFile) {
         globalCovid19[countryFile].push(cases[0])
         flag = false  
      }
   })
   if (flag) {
      globalCovid19[countryFile] = [cases[0]]
   }

   process.env.GLOBAL_COVID_29 = JSON.stringify(globalCovid19)
}

function saveCountriesData(countriesData, writeFileCB) {
   const constries = Object.values(countriesData);
   constries.forEach(function(value, key) {
      var countryFile = Object.keys(countriesData)[key];
      dbCovid19(countryFile, value)
   })
   process.env.COUNT = parseInt(process.env.COUNT) - 1
   writeFileCB()
}

module.exports = saveCountriesData