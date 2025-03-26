class EventEmitter {}

// 使用示例
const emitter = new EventEmitter();

// 注册事件监听器
emitter.on("event", (...args) => {
  console.log(...args);
});

// 触发事件
emitter.emit("event", ["Hello", "World"]);
