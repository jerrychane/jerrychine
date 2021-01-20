class Ugly {
  // 计算指定正整数n的质因数
  static getPrimes(n) {
    // 计算质因数的函数
    let prime = (n) => {
      // 存储所有的质因数
      let arr = [];
      for (let i = 2; i < n / 2 + 1; i++) {
        if (n % i === 0 && !prime(i).length) {
          arr.push(i);
        }
      }
      return arr;
    };
    return prime(n);
  }
}

export default Ugly;
