// getCSVReportFiles.js
const saveCountriesData = require('./saveCountriesData.js')

function getCSVReportFiles(
   defaultPath,
   start,
   finish,
   readFileCB,
   writeFileCB) {

   var iniDate = new Date(start)
   var endDate = new Date(finish)
   var loop = new Date(iniDate);

   while(loop <= endDate){
      var day = ("0" + loop.getDate()).slice(-2)
      var month = ("0" + loop.getMonth() + 1).slice(-2)
      var year = loop.getFullYear()
      var fileCSV = `${defaultPath}/${month}-${day}-${year}.csv`

      readFileCB(fileCSV, saveCountriesData, writeFileCB)   
   
      var newDate = loop.setDate(loop.getDate() + 1);
      loop = new Date(newDate);
      process.env.COUNT = parseInt(process.env.COUNT) + 1
   }

}

module.exports = getCSVReportFiles