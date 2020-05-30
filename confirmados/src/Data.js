import { Loader } from './Loader.js'
import mainlandChina from './casesCountries/casesMainland_China.js'
import japan from './casesCountries/casesJapan.js'

let loader = new Loader()

loader.setCaseCountry(mainlandChina.country, mainlandChina.cases)
loader.setCaseCountry(japan.country, japan.cases)


console.info("MAX: " +loader.max)

export { loader }