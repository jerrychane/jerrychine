import words from '../../code/recur/lesson2'

test('words', () => {
  expect(words('barfootthefoobarman', ["foo", "bar"])).toEqual([0, 9])
})