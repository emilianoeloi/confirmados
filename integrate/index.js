const path = require('path');
const loadTest = require('./loadTest.js')

const getCSVRequestFiles = require('./getCSVReportFiles.js');
const readFile = require('./readFile.js');
const writeFile = require('./writeFile.js')

process.env.GLOBAL_COVID_19 = "{}";
process.env.COUNTRIES = [];
process.env.COUNT = 0;

const csseCovid19DailyReport = path.join(__dirname, 'csse_covid_19_daily_reports');

writeFile.writeIntegrateFile(loadTest.countries)

getCSVRequestFiles(
   csseCovid19DailyReport,
   loadTest.starting,
   loadTest.finishing,
   loadTest.countries,
   readFile.read,
   writeFile.writeFile
);
