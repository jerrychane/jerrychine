export default (arr, k) => {
  // 降序排列
  return arr.sort((a, b) => b - a)[k-1]
}