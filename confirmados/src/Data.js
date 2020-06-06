import { Loader } from './Loader.js'
import mainlandChina from './casesCountries/casesMainland_China.js'
import japan from './casesCountries/casesJapan.js'
import brazil from './casesCountries/casesBrazil.js'

let loader = new Loader()

loader.setCaseCountry(mainlandChina.country, mainlandChina.cases)
loader.setCaseCountry(japan.country, japan.cases)
//loader.setCaseCountry(brazil.country, brazil.cases)

export { loader }