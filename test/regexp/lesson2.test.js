import regModeStr from '../../code/regexp/lesson2'

test('regModeStr1', () => {
  expect(regModeStr('aa', 'a')).toBe(false)
})

test('regModeStr2', () => {
  expect(regModeStr('aa', 'a*')).toBe(true)
})

test('regModeStr3', () => {
  expect(regModeStr('ab', '.*')).toBe(true)
})

test('regModeStr4', () => {
  expect(regModeStr('aab', 'c*a*b')).toBe(true)
})

test('regModeStr5', () => {
  expect(regModeStr('mississippi', 'mis*is*p*.')).toBe(false)
})