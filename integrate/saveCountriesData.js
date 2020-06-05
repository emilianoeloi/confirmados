// saveCountriesData.js

const dbCovid19 = function(countryFile, cases) {
   let globalCovid19 = JSON.parse(process.env.GLOBAL_COVID_29)
   let countriesDB = Object.values(globalCovid19);

   let flag = true
   countriesDB.forEach(function(value, key) {
      var globalCountryFile = Object.keys(globalCovid19)[key]
      if (globalCountryFile == countryFile) {
         globalCovid19[countryFile].push(value[0])
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
      // console.info('countryFile', countryFile)
      // console.info('value', value)
      // console.info('key', key)
      dbCovid19(countryFile, value)
   })

   writeFileCB()
}

module.exports = saveCountriesData