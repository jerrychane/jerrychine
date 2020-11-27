import gcd from '../../code/array/lesson2'

test('gcd', () => {
  expect(gcd(6, 9)).toBe(3)
  expect(gcd(2, 8)).toBe(2)
  // expect(gcd(2, 8)).toBe(3)
})