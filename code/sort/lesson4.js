export default (arr) => {
  // 过滤掉非正整数
  arr = arr.filter(item => item > 0)
  // 正整数是否为空
  if (arr.length) {
    // 升序,方便从左到右取最小值 arr[0]
    arr.sort((a, b) => a - b)
    // 如果第一个元素不为1，返回1
    if (arr[0] !== 1) {
      return 1
    } else {
      // 从左开始遍历，只要下一个元素和当前元素差值>1,说明当前元素的下一个值(+1)，即为满足条件的值
      for (let i = 0, len = arr.length - 1; i < len; i++) {
        if (arr[i + 1] - arr[i] > 1) {
          return arr[i] + 1
        }
      }
      // 如果数组是连续的正整数[1,2,3,4,5,6],则满足条件的值为7
      // 数组最后一个元素 + 1
      return arr.pop() + 1
    }
  } else {
    return 1
  }
}