const path = require('path');

const getCSVRequestFiles = require('./getCSVReportFiles.js');
const readFile = require('./readFile.js');
const writeFile = require('./writeFile.js')

process.env.GLOBAL_COVID_29 = "{}";
process.env.COUNT = 0

var csseCovid19DailyReport = path.join(__dirname, 'csse_covid_19_daily_reports');

getCSVRequestFiles(
   csseCovid19DailyReport,
   "2020-01-22T00:00",
   "2020-01-23T23:59",
   readFile,
   writeFile
);