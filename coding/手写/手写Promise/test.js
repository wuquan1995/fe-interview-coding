class MyPromise {}

// 测试用例
const promise1 = new MyPromise((resolve) => {
  setTimeout(() => {
    resolve("promise1");
  }, 1000);
});

const promise2 = new MyPromise((resolve) => {
  setTimeout(() => {
    resolve("promise2");
  }, 2000);
});

const promise3 = new MyPromise((resolve) => {
  setTimeout(() => {
    resolve("promise3");
  }, 3000);
});

MyPromise.all([promise1, promise2, promise3]).then((values) => {
  console.log(values); // ["promise1", "promise2", "promise3"]
});

MyPromise.race([promise1, promise2, promise3]).then((value) => {
  console.log(value); // "promise1"
});
