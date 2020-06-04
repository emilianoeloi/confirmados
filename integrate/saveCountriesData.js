// saveCountriesData.js

function saveCountriesData(data, writeFileCB) {
   var globalCovid19 = JSON.parse(process.env.GLOBAL_COVID_29)
   Object.values(data).forEach(function(a, b) {
      var countryFile = Object.keys(data)[b];
      Object.values(data).forEach(function(c, d) {
         var globalCountryFile = Object.keys(globalCovid19)[d]
         if (globalCountryFile == countryFile) {
            if (globalCovid19[countryFile][0].date != a[0].date) {
               globalCovid19[countryFile].push(a[0])
            }  
         } else {
            globalCovid19[countryFile] = [a[0]];
         }
      })
   })

   console.info(globalCovid19)

   process.env.GLOBAL_COVID_29 = JSON.stringify(globalCovid19)
   writeFileCB()
 }

 module.exports = saveCountriesData