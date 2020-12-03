// s为要匹配的字符串，p为匹配模式
export default (s, p) => {
  let isMatch = (s, p) => {
    // 边界情况，如果s和p都为空，说明处理结束了，返回true,否则返回false
    if (p.length <= 0) {
      // return s.length ? true : false
      return !s.length
    }
  }
}