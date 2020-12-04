export default (arr) => {
  // 选择排序
  for (let i = 0, len = arr.length, min; i < len; i++) {
    // 当前值
    min = arr[i]
    for (let j = i + 1; j < len; j++) {
      // 下一个值 < 当前值，交换二者的位置，min 永远是最小值
      if (arr[j] < min) {
        let c = min
        min = arr[j]
        arr[j] = c
      }
      // 最小值赋给当前值
      arr[i] = min
    }
  }
  return arr
}