class MyPromise {
  constructor(executor) {
    this.status = "pending";
    this.value = undefined;
    this.reason = undefined;
    this.onResolvedCallbacks = [];
    this.onRejectedCallbacks = [];

    const resolve = (value) => {
      if (this.status === "pending") {
        this.status = "fulfilled";
        this.value = value;
        this.onResolvedCallbacks.forEach((callback) => callback());
      }
    };

    const reject = (reason) => {
      if (this.status === "pending") {
        this.status = "rejected";
        this.reason = reason;
        this.onRejectedCallbacks.forEach((callback) => callback());
      }
    };

    try {
      executor(resolve, reject);
    } catch (error) {
      reject(error);
    }
  }

  then(onFulfilled, onRejected) {
    onFulfilled = typeof onFulfilled === "function" ? onFulfilled : (value) => value;
    onRejected = typeof onRejected === "function" ? onRejected : (reason) => {
      throw reason;
    };

    const promise2 = new MyPromise((resolve, reject) => {
      if (this.status === "fulfilled") {
        setTimeout(() => {
          try {
            const x = onFulfilled(this.value);
            resolvePromise(promise2, x, resolve, reject);
          } catch (error) {
            reject(error);
          }
        }, 0);
      }

      if (this.status === "rejected") {
        setTimeout(() => {
          try {
            const x = onRejected(this.reason);
            resolvePromise(promise2, x, resolve, reject);
          } catch (error) {
            reject(error);
          }
        }, 0);
      }

      if (this.status === "pending") {
        this.onResolvedCallbacks.push(() => {
          setTimeout(() => {
            try {
              const x = onFulfilled(this.value);
              resolvePromise(promise2, x, resolve, reject);
            } catch (error) {
              reject(error);
            }
          }, 0);
        });

        this.onRejectedCallbacks.push(() => {
          setTimeout(() => {
            try {
              const x = onRejected(this.reason);
              resolvePromise(promise2, x, resolve, reject);
            } catch (error) {
              reject(error);
            }
          }, 0);
        });
      }
    });

    return promise2;
  }

  static race(promises) {
    return new MyPromise((resolve, reject) => {
      promises.forEach((promise) => {
        promise.then(resolve, reject);
      });
    });
  }

  static all(promises) {
    return new MyPromise((resolve, reject) => {
      const results = [];
      let resolvedCount = 0;

      promises.forEach((promise, index) => {
        promise.then((value) => {
          results[index] = value;
          resolvedCount++;

          if (resolvedCount === promises.length) {
            resolve(results);
          }
        }, reject);
      });
    });
  }
}

// resolvePromise函数，用于处理then方法中的返回值
function resolvePromise(promise2, x, resolve, reject) {
  // 如果promise2和x相等，则抛出循环引用的错误
  if (promise2 === x) {
    return reject(new TypeError("Chaining cycle detected for promise"));
  }

  let called;
  // 如果x不是null且x是一个对象或函数
  if (x != null && (typeof x === "object" || typeof x === "function")) {
    try {
      // 获取x的then属性
      let then = x.then;
      // 如果then是一个函数
      if (typeof then === "function") {
        // 调用then函数，并传入x作为this，onFulfilled和onRejected作为参数
        then.call(
          x,
          (y) => {
            // 如果called为true，则直接返回
            if (called) return;
            called = true;
            // 递归调用resolvePromise函数，处理y的值
            resolvePromise(promise2, y, resolve, reject);
          },
          (r) => {
            // 如果called为true，则直接返回
            if (called) return;
            called = true;
            // 如果onFulfilled函数抛出异常，则调用reject函数
            reject(r);
          }
        );
      } else {
        // 如果then不是一个函数，则直接resolve(x)
        resolve(x);
      }
    } catch (error) {
      // 如果called为true，则直接返回
      if (called) return;
      called = true;
      // 如果onFulfilled函数抛出异常，则调用reject函数
      reject(error);
    }
  } else {
    // 如果x不是对象或函数，则直接resolve(x)
    resolve(x);
  }
}


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
