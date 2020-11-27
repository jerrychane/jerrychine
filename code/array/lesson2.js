// 求两个数的最大公约数
// export default function gcd (a, b) {
//   if (b === 0) {
//     return a
//   } else {
//     return gcd(b, a % b)
//   }
// }

export default  (arr) => {
  // 求两个数的最大公约数
  let gcd = (a,b) => {
    if (b === 0) {
      return a
    } else {
      return gcd(b, a % b)
    }
  }
}