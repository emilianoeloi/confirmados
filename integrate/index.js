const path = require('path');

const getCSVRequestFiles = require('./getCSVReportFiles.js');
const readFile = require('./readFile.js');
const writeFile = require('./writeFile.js')

// Mercosur/Mersocul
// ["Argentina", "Brazil", "Paraguay", "Uruguay", "Venezuela"]
//
// Brics
// ["Mainland China", "Brazil", "Russia", "India", "China", "South Africa"]

process.env.GLOBAL_COVID_29 = "{}";
process.env.COUNT = 0

var csseCovid19DailyReport = path.join(__dirname, 'csse_covid_19_daily_reports');

getCSVRequestFiles(
   csseCovid19DailyReport,
   new Date("2020-01-22T00:00:00.000"),
   new Date("2020-06-09T23:59:00.000"),
   ["Mainland China", "Brazil", "Russia", "India", "China", "South Africa"],
   readFile.read,
   writeFile
);
