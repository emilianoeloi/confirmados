// setStorageCountries.js

const setStorageCountries = function(data, saveCountriesDataCB, writeFileCB) {
   var storageCountries = {}
   Object.values(data).forEach(function(a, b) {
      var keyCountry = Object.keys(data)[b]
      if (storageCountries[keyCountry] === undefined)  {
         storageCountries[keyCountry] = [a]
      } else {
         storageCountries[keyCountry].push(a)
      }
   })
   saveCountriesDataCB(storageCountries, writeFileCB)
}

const setStorageCountriesPromise = function(data) {
   return new Promise((resolve, reject) => {
      try {
         var storageCountries = {}
         Object.values(data).forEach(function(a, b) {
            var keyCountry = Object.keys(data)[b]
            if (storageCountries[keyCountry] === undefined)  {
               storageCountries[keyCountry] = [a]
            } else {
               storageCountries[keyCountry].push(a)
            }
         })
         resolve(storageCountries)
      } catch(err) {
         reject(err)
      }
   })

}

module.exports = {
   setStorageCountries,
   setStorageCountriesPromise
}