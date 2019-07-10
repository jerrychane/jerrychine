// export default (str)=>{
//     //字符串按空格进行分隔，保存数组，数组的元素的先后顺序就是单词的顺序
//     let arr = str.split(' ');
//     //对数组进行遍历，然后每个元素进行反转
//     let result = arr.map( item => { return item.split('').reverse().join('')} ) 
//     return result.join(' ');
// }

//方法1：split
// export default (str)=>{
//     //1.字符串按空格进行分隔，保存数组，数组的元素的先后顺序就是单词的顺序
//     //2.对数组进行遍历，然后每个元素进行反转
//     return str.split(' ').map( item => { 
//         return item.split('').reverse().join('')} )
//         .join(' ');
// }
//方法2：split + 正则匹配
// export default (str)=>{
//     //1.字符串按空格进行分隔，保存数组，数组的元素的先后顺序就是单词的顺序
//     //2.对数组进行遍历，然后每个元素进行反转
//     return str.split(/\s/g).map( item => { 
//         return item.split('').reverse().join('')} )
//         .join(' ');
// }
//方法3：
export default (str)=>{
    //1.字符串按空格进行分隔，保存数组，数组的元素的先后顺序就是单词的顺序
    //2.对数组进行遍历，然后每个元素进行反转
    // str.match(/[\w']+/g); // [ 'Let\'s', 'take', 'LeetCode', 'contest' ]
    return str.match(/[\w']+/g).map( item => { 
        return item.split('').reverse().join('')} )
        .join(' ');
}
// 算法的本质是寻找规律并实现。
// 如何找到规律？发现输入和输出的关系，寻找突破点。
// 复杂的实现怎么办？实现是程序+数据结构的结合体。