// getCSVReportFiles.js
const path = require('path');
const readFile = require('./readFile.js');

// Arquivos
var csseCovid19DailyReport = path.join(__dirname, 'csse_covid_19_daily_reports')

// "2020-01-22T00:00:00"
// "2020-01-22T00:00"

// from: 21/01/2020 to: Now
function getCSVReportFiles(defaultPath, start, finish, callback) {
   var iniDate = new Date(start)
   var endDate = new Date(finish)

   var loop = new Date(iniDate);
   while(loop <= endDate){
      var day = ("0" + loop.getDate()).slice(-2)
      var month = ("0" + loop.getMonth() + 1).slice(-2)
      var year = loop.getFullYear()
      var fileCSV = `${defaultPath}/${month}-${day}-${year}.csv`

      callback(fileCSV)   
   
      var newDate = loop.setDate(loop.getDate() + 1);
      loop = new Date(newDate);
   }

}

module.exports = getCSVReportFiles