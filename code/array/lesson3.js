export default (arr, n) => {
  // 计算器
  let max = 0
  // length - 1 是解决数组右边界问题，不然没办法 length + 1
  for (let i = 0, len = arr.length - 1; i < len; i++) {
    // 当前地块是空地才做判断，否则跳过
    if (arr[i] === 0) {
      if (i === 0 && arr[1] === 0) {
        max++
        i++
      } else if (arr[i - 1] === 0 && arr[i + 1]) {
        max++
        i++
      }
    }
  }
  return max >= n
}