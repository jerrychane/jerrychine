export default (str, words) => {
  // 保存结果
  let result = []
  // 记录数组长度，做边界条件计算
  let num = words.length
  // 递归函数体
  /**
   * 
   * @param {String} r 当前项
   * @param {Array} _arr 剩余数组
   */
  let range = (r, _arr) => {
    // 边界条件
    if (r.length === num) {
      result.push(r)
    } else {
      _arr.forEach((item, idx) => {
        // 复制一份数组
        let tmp = [].concat(_arr)
        // 剔除当前元素
        tmp.splice(idx, 1)
        range(r.concat(item), tmp)
      });
    }
  }
  range([], words)
  // [0, 9, -1] filter 之后就是 [0, 9]
  return result.map(item => {
    return str.indexOf(item.join(''))
  }).filter(item => item !== -1).sort()
}