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
   writeCountryFilePromise
} = require('./writeFile.js')
const {
   processPromise
} = require('./Process.js')



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
                  return writeCountryFilePromise(data)
               })
               .catch((err) => {
                  console.info("writeCountryFilePromise 🚨", err)
               })

               .then((data) => {
                  return data.forEach(processPromise)

                  // return processPromise(data[1])
                  // console.info('then =>', data)
               })
               .catch((err) => {
                  console.info("process 🚨", err)
               })

               .finally((err) => {
                  console.info("finally 🚨", err)
               })

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