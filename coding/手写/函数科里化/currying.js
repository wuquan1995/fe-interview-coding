function curry(fn) {
    // 返回一个函数，这个函数接受一个参数
    return function curried(...args) {
      // 如果当前函数已经收集了足够的参数，就调用原函数
      if (args.length >= fn.length) {
        return fn.apply(this, args);
      } else {
        // 否则，返回一个新的函数，这个函数会接受下一个参数
        return function(...args2) {
          return curried.apply(this, args.concat(args2));
        };
      }
    };
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
  console.log('result',result);