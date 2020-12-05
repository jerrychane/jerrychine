import sort from '../../code/sort/lesson1'

// 升序
// test('oddSort', () => {
//   expect(sort([4, 2, 5, 7, 1, 6])).toEqual([2, 1, 4, 5, 6, 7])
// })

// 降序
test('oddSort', () => {
  expect(sort([4, 2, 5, 7, 1, 6])).toEqual([6, 7, 4, 5, 2, 1])
})