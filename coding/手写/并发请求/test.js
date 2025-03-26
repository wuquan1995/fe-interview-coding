class RequestQueue {}

// 这个函数是模拟发送请求的，实际中你可能需要替换成真实的请求操作
function sendRequest(url) {
  console.log(`Sending request to ${url}`);
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log(`Response received from ${url}`);
      resolve(`Result from ${url}`);
    }, Math.random() * 2000); // 随机延时以模拟请求处理时间
  });
}

// 使用 RequestQueue
const requestQueue = new RequestQueue(3); // 假设我们限制最大并发数为3

// 模拟批量请求
const urls = ["url1", "url2", "url3", "url4", "url5", "url6"];
urls.forEach((url) => {
  requestQueue.enqueue(url).then((result) => {
    console.log(result);
  });
});
