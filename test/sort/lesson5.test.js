import sort from '../../code/sort/lesson5'

test('input:1', () => {
  expect(sort([1, 2, 0])).toEqual([0, 1, 2])
  expect(sort([5, 3, 7, 4, 1, 9, 8, 6, 2])).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9])
})