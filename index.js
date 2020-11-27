const commander = require('commander')
const express = require('express')
const fs = require('fs')
var opn = require('opn')

commander.option('--ini [ini]', 'Inicial')
commander.option('--end [end]', 'Final')
commander.option('--countries [countries]', 'Países')

commander.parse(process.argv)

const ini = commander.ini || process.env.INI
const end = commander.end || process.env.END
const countries = commander.countries || process.env.COUNTRIES

console.info(ini)
console.info(end)
console.info(countries)
