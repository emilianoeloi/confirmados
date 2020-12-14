import { Loader } from './Loader.js'
import {
    info,
    states
} from './StateCases/index.js'

let loader = new Loader(info.title);

states.forEach((country) => {
    loader.setCaseCountry(country)
});

export { loader }