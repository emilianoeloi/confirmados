// BogoSort.js

function randomRange(min, max) {
    return Math.floor(Math.random() * max) + min;
}

const isSorted = function (a, n) {
    while ( --n >= 1) {
        if (a[n] < a[n-1]) {
            return false
        }
    }
    return true
}

const shuffle = function(a, n) {
    let i, t=0, r=0;
    for (i = 0; i < n; i++) {
        t = a[i];
        r = randomRange(1, n-1)
        a[i] = a[r];
        a[r] = t;
    }
}

const sort = function(a, n) {
    while ( !isSorted(a, n) ) {
        shuffle(a, n)
    }
}

const bogo = function(param) {
    let a = param
    let n = a.length
    sort(a, n)
    return a
}

module.exports = {
    isSorted,
    shuffle,
    sort,
    bogo
}