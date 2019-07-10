import sum from '../code/sum';

//声明一个测试用例
test('add 1 + 2 equal 3',() => {
    //期望的结果
    expect(sum(1,2)).toBe(3);
})