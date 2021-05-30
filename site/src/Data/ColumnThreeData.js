// ColumnThreeData
import {
    loaders,
    loadersBar
   } from '../Data.js'

const dataFromCases = function() {
    return {name: "Cases"}
}

const dataFromDeaths = function() {
    return {name: "deaths"}
}

const dataFromVaccineDoses = function() {
    return {name: "vaccineDoses"}
}

export {
    dataFromCases,
    dataFromDeaths,
    dataFromVaccineDoses
}