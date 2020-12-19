import words from '../../code/recur/lesson2'

test('words1', () => {
  expect(words('barfoothefoobarman', ['foo', 'bar'])).toEqual([0, 9])
})

test('words2', () => {
  expect(words('wordgoodgoodgoodbestword', ["word", "good", "best", "word"])).toEqual([])
})