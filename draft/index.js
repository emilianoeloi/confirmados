// draft/index.js

const {
    read,
    readAsync,
    readPromise,
    storage,
    storageAsync,
    storagePromise,
    save,
    saveAsync,
    savePromise
} = require("./draft.promise.js");

// Sync
// const data = read("./family.json")
// const draft = storage(data)
// save(draft)

// Async - Old-Style
// readAsync("./emiliano.json", (data) => {
//     storageAsync(data, (draft) => {
//         saveAsync(draft, (data) => {
//             console.info("[Async][Save]✨", data)
//         }, (err) => {
//             console.info("[Async][Save]🚨", err)
//         })
//         console.info("[Async][Storage]✨", draft)
//     }, (err) => {
//         console.info("[Async][Storage]🚨", err)
//     });
//     console.info("[Async][Read]✨", data)
// }, (err) => {
//     console.info("[Async][Read]🚨", err)
// })

// Promise
readPromise("./gabriela.json")
.then((data) => {
    console.info("[Promise][Read]✨", data)
    return storagePromise(data)
})
.then((data) => {
    console.info("[Promise][Storage]✨", data)
    return savePromise(data)
})
.then((data) => {
    console.info("[Promise][Save]✨", data)
})
.catch((err) => {
    console.info("[Promise][Read][Storage][Save]🚨", err)
})

// const storagePMS = storagePromise(readPMS)
// .then((data) => {
//     console.info("[Promise][Storage]✨", data)
//     return data
// })
// .catch((err) => {
//     console.info("[Promise][Storage]🚨", err)
// })

// const savePMS = savePromise(storagePMS)
// .then(data => {
//     console.info("[Promise][Save]✨", data)
// }).catch((err) => {
//     console.info("[Promise][Save]🚨", err)
// })

// Promise.all([readPMS, storagePMS])
// .then((data) => {
//     console.info("[Promise][All][0]✨", data[0])
//     return data
// })
// .then((data) => {
//     console.info("[Promise][All][1]✨", data[1])
//     return data
// })
// .catch((err) => {
//     console.info("[Promise][All]🚨", err)
// })