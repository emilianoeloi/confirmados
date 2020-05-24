import { csvJSON } from './integration.js'
import country from './country.csv'

var countryJSON = csvJSON(country)
console.info("FROM CSV TO JSON", countryJSON)