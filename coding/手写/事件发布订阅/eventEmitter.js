class EventEmitter {
    constructor() {
        this.listeners = {};
    }

    on(type, callback) {
        if (!this.listeners[type]) {
            this.listeners[type] = [];
        }
        this.listeners[type].push(callback);
    }

    emit(type, ...args) {
        if (this.listeners[type]) {
            this.listeners[type].forEach(callback => {
                callback(...args);
            });
        }
    }
}

// 使用示例
const emitter = new EventEmitter();

// 注册事件监听器
emitter.on('event', (...args) => {
    console.log(...args);
});

// 触发事件
emitter.emit('event', ['Hello', 'World']);
