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

const startServer = () => {
  const { spawn } = require('child_process');
  const app = express()
  app.use(express.static(__dirname + '/build'))



  const server = app.listen(port, () => {
    const uri = `http://localhost:${server.address().port}`
    console.log(`The dashboard is now available at ${uri} - ${__dirname + '/'}`)
    opn(uri)
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