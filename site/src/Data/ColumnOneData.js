// ColumnOneData
import { Loader } from './Loader.js'
import { LoaderBar } from './loaderBar.js'
import cases from '../StateCases/index.js'

class ColumnOne {
    constructor(cases) {
        this.cases = cases
    }

    lista() {
        return [
            {
                key: 0,
                cases: this.cases.length,
                deaths: 500, 
                name: 'Minas Gerais'
            },
            {
                key: 1,
                cases: 33000,
                deaths: 500, 
                name: 'Espírito Santo'
            },
            {
                key: 2,
                cases: 33000,
                deaths: 500, 
                name: 'Rio Grande do Sul'
            }
          ]
    }
}



const lastUpdated = function() {
    return "01/07/2021"
}

const stateList = function() {

    let klass = new ColumnOne(cases)

    return klass.lista()
}

export { 
    lastUpdated, 
    stateList
}