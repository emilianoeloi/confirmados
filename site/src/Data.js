import { Loader } from './Loader.js'
import { LoaderBar } from './loaderBar.js'
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

/// 
const getLoaderBar = function(info, states) {
    let loader = new LoaderBar(info.title);

    states.forEach((country) => {
        loader.setCaseCountry(country)
    });

    return loader
}

let loadersBar = []
for(let i = 0; i < cases.length; i++) {
    const cs = cases[i]
    loadersBar.push(getLoaderBar(cs.info, cs.states))
}

export {
    loaders,
    loadersBar
}