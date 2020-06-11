import { Loader } from './Loader.js'

import brazil from './casesCountries/casesBrazil.js'
import russia from './casesCountries/casesRussia.js'
import india from './casesCountries/casesIndia.js'
import mainlandChina from './casesCountries/casesMainland_China.js'
//import china from './casesCountries/casesChina.js'
import southAfrica from './casesCountries/casesSouth_Africa.js'

let loader = new Loader()

loader.setCaseCountry(mainlandChina.country, mainlandChina.cases)
//loader.setCaseCountry(china.country, china.cases)
// loader.setCaseCountry(brazil.country, brazil.cases)
// loader.setCaseCountry(russia.country, russia.cases)
// loader.setCaseCountry(india.country, india.cases)
// loader.setCaseCountry(southAfrica.country, southAfrica.cases)

export { loader }