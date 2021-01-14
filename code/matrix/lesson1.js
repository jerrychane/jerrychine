export default (arr) => {
  // 处理每一圈的数据遍历过程
  let map = (arr, r = []) => {
    for (let i = 0, len = arr.length; i < len; i++) {
      // 第一行
      if (i === 0) {
        r = r.concat(arr[i]);
        // 最后一行，反转元素
      } else if (i === len - 1) {
        r = r.concat(arr[i].reverse());
        // 既非第一行也非最后一样，取最后一个元素，并删除
      } else {
        r.push(arr[i].pop());
      }
    }
    arr.shift();
    arr.pop();
    for (let i = arr.length - 1; i >= 0; i--) {
      r.push(arr[i].shift());
    }
    if (arr.length) {
      return map(arr, r);
    } else {
      return r;
    }
  };
  return map(arr, []);
};
