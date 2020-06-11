// getCSVReportFiles.js
const saveCountriesData = require('./saveCountriesData.js')

const getCSVReportFiles = function(
   defaultPath,
   start,
   finish,
   readFileCB,
   writeFileCB) {

   let loop = new Date(start);

   while(loop <= finish){
      var day = ("0" + loop.getUTCDate()).slice(-2)
      var month = ("0" + (loop.getUTCMonth() + 1)).slice(-2)
      var year = loop.getUTCFullYear()
      var fileCSV = `${defaultPath}/${month}-${day}-${year}.csv`
      
      readFileCB(fileCSV, saveCountriesData, writeFileCB)   
   
      var newDate = loop.setDate(loop.getDate() + 1);
      loop = new Date(newDate);
   }

}

module.exports = getCSVReportFiles