// process.js
const fs = require('fs');

const processForEach = function(element, index, array) {
    console.log("a[" + index + "] = " + element);
}

const processPromise = function(fileOrigin) {
    return new Promise((resolve, reject) => {
        try {
            const data = fs.readFileSync(fileOrigin)
            const calculated = calculate(JSON.parse(data))
            fs.writeFileSync(fileOrigin, JSON.stringify(calculated, null, '\t'))
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

    /// BUG
    data2[0].dailyCases = data2[1].dailyCases

    return data2
}

module.exports = {
    processForEach,
    processPromise,
    calculate
}
