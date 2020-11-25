// str => "123"
export default (str) => {
  // 创建电话号码和字母映射的数组,例如 1 => 空; 2 => abc; 3 => def
  let map = ['', '1', 'abc', 'def', 'ghi', 'jkl', 'mno', 'pqrs', 'tuv', 'wxyz']
  // 输入的字符串按单字符分隔变成数组, 234 => [2,3,4]
  let num = str.split('')
  // 保存键盘映射后的字母内容，如23=>['abc','def']
  let code = []
  num.forEach(item => {
    if (map[item]) {
      code.push(map[item])
    }
  });
  // 组合运算,两两项结合
  let comb = (arr) => {
    // 临时变量用来保存前两个组合的结果
    let tmp = []
    // 最外层的循环是遍历第一个元素，里层的循环是遍历第二个元素
    for (let i = 0, il = arr[0].length; i < il; i++) {
      for (let j = 0, jl = arr[1].length; j < jl; j++) {
        tmp.push(`${arr[0][i]}${arr[1][j]}`)
      }
    }
    // arr 中前两个元素丢掉，用临时变量替换（非常关键）
    arr.splice(0,2,tmp)
    if(arr.length > 1) {
      comb(arr)
    } else {
      return tmp
    }
    return arr[0]
  }
  return comb(code)
}