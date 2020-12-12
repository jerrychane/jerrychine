// // 常规解法:
// export default (arr) => {
//   // 过滤掉非正整数
//   arr = arr.filter(item => item > 0)
//   // 正整数是否为空
//   if (arr.length) {
//     // 升序,方便从左到右取最小值 arr[0]
//     arr.sort((a, b) => a - b)
//     // 如果第一个元素不为1，返回1
//     if (arr[0] !== 1) {
//       return 1
//     } else {
//       // 从左开始遍历，只要下一个元素和当前元素差值>1,说明当前元素的下一个值(+1)，即为满足条件的值
//       for (let i = 0, len = arr.length - 1; i < len; i++) {
//         if (arr[i + 1] - arr[i] > 1) {
//           return arr[i] + 1
//         }
//       }
//       // 如果数组是连续的正整数[1,2,3,4,5,6],则满足条件的值为7
//       // 数组最后一个元素 + 1
//       return arr.pop() + 1
//     }
//   } else {
//     return 1
//   }
// }
// 选择排序:
export default (arr) => {
  arr = arr.filter(item => item > 0)
  // 实现选择排序，先拿到最小值，如果第一个元素不是1，直接返回1；如果是1，就要比相邻元素的差值
  for (let i = 0, len = arr.length, min; i < len; i++) {
    min = arr[i]
    for (let j = i + 1; j < len; j++) {
      if (arr[j] < min) {
        let c = min
        min = arr[j]
        arr[j] = c
      }
    }
    arr[i] = min
    if (i > 0) {
      if (arr[i] - arr[i - 1] > 1) {
        return arr[i - 1] + 1
      }
    } else {
      if (min !== 1) {
        return 1
      }
    }
  }
  return arr.length ? arr.pop() + 1 : 1
}