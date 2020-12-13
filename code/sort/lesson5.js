export default (arr) => {
  let quickSort = (arr) => {
    let len = arr.length
    if (len < 2) {
      return arr
    } else {
      // 选标尺元素
      let flag = arr[0]
      let left = []
      let right = []
      // 把剩余元素遍历下，比标尺元素小的放左边，大的放右边
      for (let i = 1, tmp; i < len; i++) {
        tmp = arr[i]
        if (tmp < flag) {
          left.push(tmp)
        } else {
          right.push(tmp)
        }
      }
      // 进行递归操作
      return quickSort(left).concat(flag, quickSort(right))
    }
  }
  return quickSort(arr)
}