import { Loader } from './Loader.js'
import countries from './CountryCases/index.js'

let loader = new Loader();

countries.forEach((country, index, array) => {
    loader.setCaseCountry(country)
});

export { loader }