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
   whiteFilePromise
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
         console.info("readPromise ✨")
         return setStorageCountriesPromise(data)
      })
      .then((data) => {
         console.info("setStorageCountriesPromise ✨")
         return saveCountriesDataPromise(data)
      })
      .then((data) => {
         console.info("whiteFile ✨")
         return whiteFilePromise(data)
      })
      .catch((err) => {
         console.info("readPromise, setStorageCountriesPromise, whiteFile, whiteFile 🚨", err)
      })

      // readFileCB(fileCSV, countryGroup, saveCountriesData, writeFileCB)   
   
      var newDate = loop.setDate(loop.getDate() + 1);
      loop = new Date(newDate);
   }

}

module.exports = getCSVReportFiles