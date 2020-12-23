const path = require('path');
const {
   norte,
   nordeste,
   centroOeste,
   sudeste,
   sul
} = require('./loadTest.js')

const getCSVRequestFiles = require('./getCSVReportFiles.js');
const writeFile = require('./writeFile.js')

process.env.GLOBAL_COVID_19 = "{}";
process.env.COUNTRIES = [];
process.env.COUNT = 0;

const csseCovid19DailyReport = path.join(__dirname, 'csse_covid_19_daily_reports');

const group = sul

writeFile.writeIntegrateFile(group)

getCSVRequestFiles(
   csseCovid19DailyReport,
   group.starting,
   group.finishing,
   group.states
);
