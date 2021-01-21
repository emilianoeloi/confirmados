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
      return new Promise((resolve, reject) => {
         try {
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

               var newDate = loop.setDate(loop.getDate() + 1);
               loop = new Date(newDate);
            }
            resolve(process.env.GLOBAL_COVID_19)
         } catch(err) {
            reject(err)
         }
      })

   

}

module.exports = getCSVReportFiles