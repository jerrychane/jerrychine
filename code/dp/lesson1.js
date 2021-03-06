export default (arr, m, n) => {
  let dp = (m, n) => {
    // m=2,n=2 的边界
    if (m === 2 && n === 2) {
      return arr[1][1] || arr[1][0] + arr[0][1] === 2
        ? 0
        : arr[1][0] === 1 || arr[0][1] === 1
        ? 1
        : 2;
    } else if (m < 2 || n < 2) {
      if (m < 2) {
        // 单行有1就返回0，没有1返回1
        return arr[m - 1].includes(1) ? 0 : 1;
      } else {
        // 单列不能有障碍物(1)有它返回0，没有1返回1
        for (let i = 0; i < m; i++) {
          if (arr[i][0] === 1) {
            return 0;
          }
        }
        return 1;
      }
    } else {
      return dp(m - 1, n) + dp(m, n - 1);
    }
  };
  return dp(m, n);
};
