import { Loader } from './Loader.js'
import brazil from './casesBrazil.js'
import china from './casesChina.js'
import usa from './casesUSA.js'

let loader = new Loader()
loader.setCaseCountry(usa.country, usa.cases)
//loader.setCaseCountry(china.country, china.cases)
//loader.setCaseCountry(brazil.country, brazil.cases)

console.info("MAX: " +loader.max)

export { loader }