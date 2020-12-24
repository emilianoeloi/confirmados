const commander = require('commander')
const express = require('express')
const opn = require('opn')
const path = require('path')

require('dotenv').config();

const { norte } = require('../integrate/loadTest.js')

const getCSVRequestFiles = require('../integrate/getCSVReportFiles.js')
const writeFile = require('../integrate/writeFile.js')
const Load = require('../integrate/Load.js')
const integrateStates = require('../integrate/Paises/Brazil/integrate.json')

process.env.GLOBAL_COVID_19 = "{}"
process.env.COUNSTRIES = []
process.env.COUNT = 0

const csseCovid19DailyReport = path.join(__dirname, '/../integrate/csse_covid_19_daily_reports')

commander.option('--port [port]', 'the port to run confirmados')
commander.option('--state [state]', 'State / Estado')
commander.option('--start [start]', 'Start / Inicial')
commander.option('--end [end]', 'End / Final')

commander.parse(process.argv)

const port = commander.port || process.env.PORT || 8081
const state = commander.state || process.env.STATE
const start = commander.start || process.env.START
const end = commander.end || process.env.END

const bash = function(commands, params) {
  const { spawn } = require('child_process');
  const child = spawn(commands, params);

  process.stdin.pipe(child.stdin)

  child.stdout.on('data', (data) => {
    console.log(`child stdout:\n${data}`);
  });
}

const exec = function(command, callback) {
  const { exec } = require('child_process');

  exec('find . -type f | wc -l', callback);
}

const itgtDelegateReports = function() {
  // make itgt_delegate_reports
  integrate_files="./integrate/states/integrate.json"
  states_files="./site/src/StateCases/states/cases*.json"
  bash(`./scripts/file.sh`, [integrate_files])
  bash(`./scripts/file.sh`, [states_files])
}

const bdUpdate = function() {
  // make bd_update
  bash(`git`, ["submodule", "update", "--init", "--recursive"])
  exec('cd ./BD/COVID-19', (err, stdout, stderr) => {
    if (err) {
      console.error(`exec error: ${err}`);
      return;
    }
    bash('git', ["pull", "origin", "master"])
    console.log(`Number of files ${stdout}`);
  })
  bash('cp', ["./BD/COVID-19/csse_covid_19_data/csse_covid_19_daily_reports/*", "./integrate/csse_covid_19_daily_reports/"])
  bash("cp", ["BD/Paises/Brazil/integrate.json", "integrate/Paises/Brazil/"])
}

const build = function() {
  exec('yarn build', ((err, stdout, stderr) => {
    if (err) {
      console.error(`exec error: ${err}`);
      return;
    }
    const app = express()
    app.use(express.static(__dirname + '/../site/build'))

    const server = app.listen(port, () => {
      const uri = `http://localhost:${server.address().port}`
      console.log(`The dashboard is now available at ${uri} - ${__dirname + '/'}`)
      opn(uri)
    })
    console.log(`Number of files ${stdout}`);
  }))  
}

const startServer = () => {
  exec('cd integrate', (err, stdout, stderr) => {
    if (err) {
      console.error(`exec error: ${err}`);
      return;
    }
    exec('ls', (err, stdout, stderr) => {
      if (err) {
        console.error(`exec error: ${err}`);
        return;
      }
      bash('cp', ["./countries/*", "../site/src/StateCases/states"])

      // make site_start
      exec('cd site', (err, stdout, stderr) => {
        if (err) {
          console.error(`exec error: ${err}`);
          return;
        }
        build()
        console.log(`Number of files ${stdout}`);
      })

      console.log(`Number of files ${stdout}`);
    })
    console.log(`Number of files ${stdout}`);
  })
}

const custom = new Load(
  integrateStates,
  "Custom",
  [
    state
  ],
  new Date(start),
  new Date(end)
)

writeFile.writeIntegrateFile(custom)

getCSVRequestFiles(
  csseCovid19DailyReport,
  new Date(start),
  new Date(end),
  custom.states
).then(data => {
  console.info('==>', data)
  startServer()
}).catch(err => {
  console.error(err)
}).finally(err => {
  console.info('Para acabar.')
})