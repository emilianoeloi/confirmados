// getCSVReportFiles.js
const {
   readPromise
} = require('./readFile.js')
const {
   setStorageCountriesPromise
} = require('./setStorageCountries.js')
const {
   saveCountriesDataPromise
} = require('./saveCountriesData.js')
const {
   writeFilePromise
} = require('./writeFile.js')

const getCSVReportFiles = function(
   defaultPath,
   start,
   finish,
   countryGroup) {

   let loop = new Date(start);

   while(loop <= finish){
      var day = ("0" + loop.getUTCDate()).slice(-2)
      var month = ("0" + (loop.getUTCMonth() + 1)).slice(-2)
      var year = loop.getUTCFullYear()
      var fileCSV = `${defaultPath}/${month}-${day}-${year}.csv`

      readPromise(fileCSV, countryGroup)
      .then((data) => {
         return setStorageCountriesPromise(data)
      })
      .catch((err) => {
         console.info("readPromise 🚨", err)
      })

      .then((data) => {
         return saveCountriesDataPromise(data)
      })
      .catch((err) => {
         console.info("saveCountriesDataPromise 🚨", err)
      })

      .then((data) => {
         return writeFilePromise(data)
      })
      .catch((err) => {
         console.info("whiteFile, whiteFile 🚨", err)
      })

      .finally((err) => { })

      // readFileCB(fileCSV, countryGroup, saveCountriesData, writeFileCB)   
   
      var newDate = loop.setDate(loop.getDate() + 1);
      loop = new Date(newDate);
   }

}

module.exports = getCSVReportFiles