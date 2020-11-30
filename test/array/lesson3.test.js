import flower from '../../code/array/lesson3'

test('flower:[1,0,0,0,1]', () => {
  expect(flower([1, 0, 0, 0, 1], 1)).toBe(true)
})

test('flower:[1,0,0,0,1]', () => {
  expect(flower([1, 0, 0, 0, 1], 2)).toBe(false)
})

test('flower:[0,0,1,0,0,0,1,0,1,0,0,0,0,0,0,1,0,1]', () => {
  expect(flower([0,0,1,0,0,0,1,0,1,0,0,0,0,0,0,1,0,1], 3)).toBe(true)
})