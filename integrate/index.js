const path = require('path');
const Country = require('./Country.js')

const getCSVRequestFiles = require('./getCSVReportFiles.js');
const readFile = require('./readFile.js');
const writeFile = require('./writeFile.js')

process.env.GLOBAL_COVID_19 = "{}";
process.env.COUNTRIES = [];
process.env.COUNT = 0;

const csseCovid19DailyReport = path.join(__dirname, 'csse_covid_19_daily_reports');

const argentina = new Country("argentina", "Argentina", "#75AADB")
const brazil = new Country("brazil", "Brazil", "#009c3b")

const spain = new Country("spain", "Spain", "#AA151B")
const italy = new Country("italy", "Italy", "#008C45")

const contriesToRequest = [spain, italy]

writeFile.writeIntegrateFile(contriesToRequest)

getCSVRequestFiles(
   csseCovid19DailyReport,
   new Date("2020-01-22T00:00:00.000"),
   new Date("2020-10-19T23:59:59.999"),
   contriesToRequest,
   readFile.read,
   writeFile.writeFile
);
