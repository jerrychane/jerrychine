export default (arr) => {
  // 冒泡排序
  for (let i = arr.length - 1, tmp; i > 0; i--) {
    for (let j = 0; j < i; j++) {
      //  保存临时值
      tmp = arr[j]
      //  当前值 > 下一个位置的值，交换位置
      if (tmp > arr[j + 1]) {
        arr[j] = arr[j + 1]
        arr[j + 1] = tmp
      }
    }
  }
  return arr;
}