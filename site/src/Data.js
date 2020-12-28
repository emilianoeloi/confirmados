import { Loader } from './Loader.js'
import cases from './StateCases/index.js'

const getLoader = function(info, states) {
    let loader = new Loader(info.title);

    states.forEach((country) => {
        loader.setCaseCountry(country)
    });

    return loader
}

let loaders = []
for(let i = 0; i < cases.length; i++) {
    const cs = cases[i]
    loaders.push(getLoader(cs.info, cs.states))
}

export default loaders