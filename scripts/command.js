const commander = require('commander')
const express = require('express')
const fs = require('fs')
var opn = require('opn')

commander.option('--port [port]', 'the port to run confirmados')
commander.option('--state [state]', 'State')
commander.option('--ini [ini]', 'Ini')
commander.option('--end [end]', 'End')

commander.parse(process.argv)

const port = commander.port || process.env.PORT || 8081
const state = commander.state || process.env.STATE
const ini = commander.ini || process.env.INI
const end = commander.end || process.env.END

const startServer = () => {
  const app = express()
  app.use(express.static(__dirname + '/'))
  app.use('/', express.static(__dirname + '/'))

  const server = app.listen(port, () => {
    const uri = `http://localhost:${server.address().port}`
    console.log(`The dashboard is now available at ${uri}`)
    opn(uri)
  })
}

startServer()
