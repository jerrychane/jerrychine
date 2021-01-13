// 声明链表的节点
class Node {
    constructor(value) {
        this.val = value
        this.next = undefined
    }
}

// 声明链表的数据结构
class NodeList {
    constructor(arr) {
        // 生声明链表的头部节点
        let head = new Node(arr.shift())
        let next = head
        arr.forEach(item => {
            next.next = new Node(item)
            next = next.next
        })
        return head
    }
} 
