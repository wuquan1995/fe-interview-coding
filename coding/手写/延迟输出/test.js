// 调用方式：(new LazyLog()).log(1).sleep(1000).log(2)
// 输出：先输出1，延迟1秒后输出2

class LazyLog {}

console.log(new LazyLog().log(1).sleep(1000).log(2));
