// __tests__/BogoSort.test.js

const bogoSort = require('../Sort/BogoSort.js')

describe('BogoSort', () => {
    let numbers0 = [5, 2, 3, 4, 1]
    let numbers1 = [1, 2, 3, 4, 5]
    test('Sorted', () => {
        const ok = bogoSort.bogo(numbers0)
        expect(ok).toMatchObject([1, 2, 3, 4, 5])
    })
    test('shuttle', () => {
        const shuffle = bogoSort.shuffle([1, 2, 3, 4, 5], 5)
        expect(shuffle).not.toBe([1, 2, 3, 4, 5])
    })
    test('is sorted', () => {
        const ok = bogoSort.isSorted(numbers1, 5)
        expect(ok).toBe(true)
    })
})