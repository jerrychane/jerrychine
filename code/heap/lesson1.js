class Heap {
  constructor(data) {
    this.data = data;
  }
  sort() {
    let iArr = this.data;
    let n = iArr.length;
    if (n <= 1) {
      return iArr;
    } else {
      for (let i = Math.floor(n / 2); i >= 0; i--) {
        Heap.maxHeapify(iArr, i, n);
      }
      for (let j = 0; j < n; j++) {
        Heap.swap(iArr, 0, n - 1 - j);
        Heap.maxHeapify(iArr, 0, n - 1 - j - 1);
      }
      return iArr;
    }
  }
  // 交换两个元素的方法
  static swap(arr, a, b) {
    if (a === b) {
      return "";
    }
    let c = arr[a];
    arr[a] = arr[b];
    arr[b] = c;
  }
  /**
   * 构建最大堆的过程
   * @param {*} Arr 数组
   * @param {*} i  哪个节点
   * @param {*} size 数组有效长度
   */
  static maxHeapify(Arr, i, size) {
    // 左节点（索引）
    let l = i * 2 + 1;
    // 右节点（索引）
    let r = i * 2 + 2;
    let largest = i;
    // 父节点i和左节点l作比较取最大值
    if (l <= size && Arr[l] > Arr[largest]) {
      largest = l;
    }
    // 右节点和最大值比较
    if (r <= size && Arr[r] > Arr[largest]) {
      largest = r;
    }
    if (largest !== i) {
      Heap.swap(Arr, i, largest);
      Heap.maxHeapify(Arr, largest, size);
    }
  }
}

export default Heap;
