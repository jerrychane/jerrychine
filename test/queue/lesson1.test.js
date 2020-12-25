import MyCircularQueque from '../../code/queue/lesson1'

test('MyCircularQueque:1', () => {
  let queue = new MyCircularQueque(4)
  queue.enQueue(2)
  expect(queue.isFull()).toBe(false)
  expect(queue.enQueue(1)).toBe(true)
  expect(queue.Front()).toBe(2)
  expect(queue.Rear()).toBe(1)
})