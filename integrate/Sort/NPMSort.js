// NPMSort.js
const arraySort = require('array-sort'); 

const casesBrazil = require('../__mocks__/casesBrazil.json')
const casesItaly = require('../__mocks__/casesItaly.json')
const casesIndia = require('../__mocks__/casesIndia.json')

const j = arraySort(casesIndia, ["date"])

console.log(
    j[2]
);