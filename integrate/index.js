const fs = require('fs');
const path = require('path');

const getCSVRequestFiles = require('./getCSVReportFiles.js');
const readFile = require('./readFile.js')

// Arquivos
var csseCovid19DailyReport = path.join(__dirname, 'csse_covid_19_daily_reports')

getCSVRequestFiles(
   csseCovid19DailyReport,
   "2020-01-22T00:00:00",
   "2020-01-22T00:00",
   readFile
)