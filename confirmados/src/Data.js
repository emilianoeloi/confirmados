import { Loader } from './Loader.js'
import brazil from './casesCountries/casesBrazil.js'
import china from './casesCountries/casesChina.js'
import usa from './casesCountries/casesUSA.js'
import mainlandChina from './casesCountries/casesMainland_China.js'

let loader = new Loader()

//loader.setCaseCountry(usa.country, usa.cases)
loader.setCaseCountry(mainlandChina.country, mainlandChina.cases)


console.info("MAX: " +loader.max)

export { loader }