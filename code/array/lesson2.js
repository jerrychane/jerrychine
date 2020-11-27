// 求两个数的最大公约数
// export default function gcd (a, b) {
//   if (b === 0) {
//     return a
//   } else {
//     return gcd(b, a % b)
//   }
// }

export default (arr) => {
  // 卡牌排序，排序的目的是为了让相同的牌排在一起方便我们分组
  let str = arr.sort().join('')
  // 分组(单张或多张) (\d)\1+ 表示 n 张相同的牌 \d 表示只有1张牌
  let group = str.match(/(\d)\1+|\d/g)
  // console.log(group)
  // 求两个数的最大公约数
  let gcd = (a, b) => {
    if (b === 0) {
      return a
    } else {
      return gcd(b, a % b)
    }
  }
  while (group.length > 1) {
    let a = group.shift().length
    let b = group.shift().length
    let v = gcd(a, b)
    if (v === 1) {
      return false
    } else {
      group.unshift('0'.repeat(v))
    }
  }
  return group.length ? group[0].length > 1 : false
}