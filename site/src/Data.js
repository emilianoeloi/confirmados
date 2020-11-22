import { Loader } from './Loader.js'
import {
    info,
    countries
} from './CountryCases/index.js'

let loader = new Loader(info.title);

countries.forEach((country) => {
    loader.setCaseCountry(country)
});

export { loader }