function throttle(fn, delay) {}

function testThrottle() {
  let count = 0;
  const throttledFunction = throttle(function () {
    count++;
  }, 1000);

  for (let i = 0; i < 10; i++) {
    throttledFunction();
  }

  setTimeout(() => {
    console.log("Count after 3000ms:", count); // 应该接近1，因为1秒内只执行一次
  }, 3000);
}

testThrottle();
