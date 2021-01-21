// process.js
const fs = require('fs');

const processPromise = function(fileOrigin) {
    return new Promise((resolve, reject) => {
        try {
            const data = fs.readFileSync(fileOrigin)
            const calculated = calculate(JSON.parse(data))
            resolve(calculated)
        } catch(err) {
            reject(err)
        }
    })
}

const calculate = function(data) { 
    
    let data2 = []

    if (data == undefined) { return data2}

    let totalCases = data[0].cases
    let dailyCases = data[0].cases

    data2.push({
        date: data[0].date,
        cases: data[0].cases,
        dailyCases: dailyCases,
        cumuCases: totalCases,
    })
    
    for(let i = 1; i < data.length; i++) {  
        dailyCases = data[i].cases - totalCases 
        totalCases = data[i].cases

        data2.push({
            date: data[i].date,
            cases: data[i].cases,
            dailyCases: dailyCases,
            cumuCases: totalCases,
        })
    } 

    return data2
}

module.exports = {
    processPromise,
    calculate
}
