// export default (arr, k) => {
//   // 降序排列
//   return arr.sort((a, b) => b - a)[k-1]
// }

export default (arr, k) => {
  let len = arr.length - 1
  for (let i = len, tmp; i > len; i--) {
    for (let j = 0; j < i; j++) {
      if (arr[j] > arr[j + 1]) {
        tmp = arr[j]
        arr[j] = arr[j + 1]
        arr[j + 1] = tmp
      }
    }
  }
  return arr[len - (k - 1)]
}

