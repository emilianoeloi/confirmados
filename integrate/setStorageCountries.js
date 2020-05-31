// setStorageCountries.js

var storageCountries = {}
const setStorageCountries = function(data) {
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

module.exports = setStorageCountries