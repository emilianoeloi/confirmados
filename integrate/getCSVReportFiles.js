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
      var day = ("0" + loop.getDate()).slice(-2)
      var month = ("0" + (loop.getMonth() + 1)).slice(-2)
      var year = loop.getFullYear()
      var fileCSV = `${defaultPath}/${month}-${day}-${year}.csv`
      
      readFileCB(fileCSV, saveCountriesData, writeFileCB)   
   
      var newDate = loop.setDate(loop.getDate() + 1);
      loop = new Date(newDate);
      
      process.env.COUNT = parseInt(process.env.COUNT) + 1
   }

}

module.exports = getCSVReportFiles