// 常规做法
export default (arr) => {
  // 如果数组长度小于2，返回0
  if (arr.length < 2) {
    return 0
  }
  // 排序
  arr.sort()
  // 保存相邻元素的最大差值
  let max = 0
  for (let i = 0, len = arr.length - 1, tmp; i < len; i++) {
    tmp = arr[i + 1] - arr[i]
    if (tmp > max) {
      max = tmp
    }
  }
  return max
}