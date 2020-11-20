// draftjs.promise.js

const fs = require('fs');

const familyData = [
    "Emiliano", "1981-05-31",
    "Rhyana", "1985-08-13",
    "Gabriela", "2007-09-07",
    "Andy", "",
    "Emily", "",
    "Bonnie", "",
    "Anakin", ""
]

class Person {
    constructor(name, birthday) {
        this.name = name
        this.name = birthday
    }
}

class Draft {
    constructor(people) {
        this.people = people
    }
}

// READ
const read = function(fileName) {
    console.info("read")
    const data = fs.readFileSync(fileName)
    return data
}
const readAsync = function(fileName, success, failure) {
    console.info("read Async")
    fs.readFile(fileName, (err, data) => {
        if (err) {
            failure(err)
            return
        } 
        success(data)
    })
}
const readPromise = function(fileName) {
    return new Promise((resolve, reject) => {
        try {
            const data = read(fileName)
            resolve(data)
        } catch(err) {
            reject(err)
        }
    })
}

// SALVE
const save = function(draft) {
    console.info("save")
    const draftFile = "./draft.json"
    fs.writeFileSync(draftFile, JSON.stringify(draft))
}
const saveAsync = function(draft, success, failure) {
    console.info("save Async")
    const draftFile = "draft.async.json"
    fs.writeFile(draftFile, JSON.stringify(draft), (err, data) => {
        if (err) {
            failure(err)
            return
        }
        success(data)
    })
}
const savePromise = function(draft) {
    return new Promise((resolve, reject) => {
        try {
            console.info("save")
            const draftFile = "./draft.json"
            fs.writeFileSync(draftFile, JSON.stringify(draft))
            resolve("Saved")
        } catch(err) {
            reject(err)
        }
    })
}
// STORAGE
const storage = function(data) {
    console.info("storage")
    const draftData = JSON.parse(data.toString())
    const draft = new Draft(draftData)
    return draft
}
const storageAsync = function(data, success, failure) {
    console.info("storage Async")
    try {
        const draftData = JSON.parse(data.toString())
        const draft = new Person(draftData)
        success(draft)
    } catch (err){
        failure(err)
    }
}
const storagePromise = function(data) {
    console.info("storage Promise")
    return new Promise( (resolve, reject) => {
        try {
            console.info(data)
            const draftData = JSON.parse(data.toString())
            const draft = new Person(draftData)
            resolve(draft)
        } catch (err){
            reject(err)
        }
    })
}

module.exports = {
    save,
    saveAsync,
    savePromise,
    read,
    readAsync,
    readPromise,
    storage,
    storageAsync,
    storagePromise
}


