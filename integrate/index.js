const path = require('path');
const {
   norte,
   nordeste,
   centroOeste,
   sudeste,
   sul
} = require('./loadTest.js')

const getCSVRequestFiles = require('./getCSVReportFiles.js');
const writeFile = require('./writeFile.js');
const { group } = require('console');

process.env.GLOBAL_COVID_19 = "{}";
process.env.COUNTRIES = [];
process.env.COUNT = 0;

const csseCovid19DailyReport = path.join(__dirname, 'csse_covid_19_daily_reports');

let groups = [
   norte,
   nordeste,
   centroOeste,
   sudeste,
   sul
]

for (let i = 0; i < groups.length; i++) {

   let group = groups[i]

   writeFile.writeIntegrateFilePromise(group)

   getCSVRequestFiles(
      csseCovid19DailyReport,
      group.starting,
      group.finishing,
      group.states
   );

}

writeFile.writeIntegratesFilePromise(groups)


