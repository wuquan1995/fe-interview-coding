function curry(fn) {
  // 返回一个函数，这个函数接受一个参数
}

// 使用示例
function sum(a, b, c) {
  return a + b + c;
}

// 将 sum 函数柯里化
const curriedSum = curry(sum);

// 现在可以这样使用柯里化的函数
const addOneAndTwo = curriedSum(1);
const addThree = addOneAndTwo(2);
const result = addThree(3); // 结果为 6
console.log("result", result);
