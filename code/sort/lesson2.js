// export default (arr, k) => {
//   // 降序排列
//   return arr.sort((a, b) => b - a)[k-1]
// }
// 性能更好的方式
export default (arr, k) => {
  let len = arr.length - 1
  // 起始位置是 len
  // 交换的临时变量 tmp
  // 遍历 k 次即 len-k
  for (let i = len, tmp; i > len - k; i--) {
    for (let j = 0; j < i; j++) {
      // 下个元素比当前值小，就交换位置
      if (arr[j] > arr[j + 1]) {
        // 交换位置
        tmp = arr[j]
        arr[j] = arr[j + 1]
        arr[j + 1] = tmp
      }
    }
  }
  // 返回倒数第k个值，即为第k个最大值
  // arr[len+1-k]
  return arr[len - (k - 1)]
}