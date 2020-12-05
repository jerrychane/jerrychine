export default (arr) => {
  // arr.sort() 默认升序
  // 进行升序排列
  // arr.sort((a, b) => a - b)
  // 进行降序排列
  arr.sort((a, b) => b - a)
  // 声明一个空数组用来存储奇偶排序后的数组
  let r = []
  // 记录奇数、偶数位下标
  let odd = 1
  let even = 0
  // 对数组进行遍历
  arr.forEach(item => {
    if (item % 2 === 1) {
      r[odd] = item
      odd += 2
    } else {
      r[even] = item
      even += 2
    }
  });
  return r
}