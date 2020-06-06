// __tests__/QuickSort.test.js

const quickSort = require('../Sort/QuickSort.js')

describe('QuickSort', () => {
    let numbers0 = [5, 2, 3, 4, 1]
    let numbers1 = [1, 2, 3, 4, 5]
    test('Sorted', () => {
        const ok = quickSort.quick(numbers0)
        expect(ok).toBe([1, 2, 3, 4, 5])
    })
})